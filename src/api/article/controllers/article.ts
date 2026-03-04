/**
 * article controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::article.article', ({ strapi }) => ({
  async incrementView(ctx) {
    const { slug } = ctx.params;

    // Find the published article by slug at the DB level (bypasses Document Service / draft system)
    const [article] = await strapi.db.query('api::article.article').findMany({
      where: {
        slug,
        publishedAt: { $notNull: true },
      },
      select: ['id', 'documentId', 'viewCount'],
      limit: 1,
    });

    if (!article) {
      return ctx.notFound('Article not found or not published');
    }

    const newCount = (article.viewCount ?? 0) + 1;

    // Update the published row
    await strapi.db.query('api::article.article').update({
      where: { id: article.id },
      data: { viewCount: newCount },
    });

    // Also update the draft row (same documentId, publishedAt IS NULL)
    // so the admin panel stays in sync — no publish event is triggered
    await strapi.db.query('api::article.article').updateMany({
      where: {
        documentId: article.documentId,
        publishedAt: { $null: true },
      },
      data: { viewCount: newCount },
    });

    return ctx.send({ viewCount: newCount });
  },
}));
