'use strict';

const api_version = 'v1';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const getRoute = path => `/${api_version}/${path}`;

  const illust = controller[api_version].illust;
  const user = controller[api_version].user;
  const search = controller[api_version].search;
  const ugoria = controller[api_version].ugoria;

  router.get(getRoute('illust/search'), illust.search);
  router.get(getRoute('illust/rank'), illust.rank);
  router.get(getRoute('illust/detail'), illust.detail);
  router.get(getRoute('illust/related'), illust.related);

  router.get(getRoute('ugoria/meta'), ugoria.meta);

  router.get(getRoute('user/detail'), user.detail);
  router.get(getRoute('user/illusts'), user.illusts);

  router.get(getRoute('search/suggestions'), search.suggestions);
};
