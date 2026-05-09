import type { Core } from '@strapi/strapi';

export default {
  register({ strapi }: { strapi: Core.Strapi }) {
    strapi.documents.use(async (ctx, next) => {
      
      const result: any = await next();

      if (ctx.uid === 'api::mail.mail' && ctx.action === 'publish') {
        
        // Safely extract the data, whether Strapi wraps it in 'entries' or not
        const payload = (result.entries && result.entries.length > 0) 
          ? result.entries[0] 
          : result;

        if (!payload || typeof payload.receiver !== 'string') {
          console.log('❌ Broadcast aborted: Receiver field is empty or undefined.');
          return result; 
        }

        const emailList = payload.receiver
          .split(',')
          .map((email: string) => email.trim())
          .filter((email: string) => email.length > 0);

        if (emailList.length === 0) return result;

        try {
          const plainTextContent = payload.content ? payload.content.replace(/<[^>]+>/g, '') : '';

          await Promise.all(
            emailList.map(async (recipientEmail: string) => {
              await strapi.plugins['email'].services.email.send({
                to: recipientEmail,
                from: 'info@blog.dufs.org',
                subject: payload.subject || 'Mail from DUFS Blog',
                html: payload.content,
                text: plainTextContent,
              });
            })
          );
          
          console.log(`✅ Successfully broadcasted email to ${emailList.length} recipients.`);
        } catch (err) {
          console.error('❌ Failed to send broadcast emails:', err);
        }
      }

      return result;
    });
  },

  bootstrap({ strapi }: { strapi: Core.Strapi }) {},
};