/**
 * article custom routes
 */

export default {
  routes: [
    {
      method: 'POST',
      path: '/articles/:slug/view',
      handler: 'article.incrementView',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};
