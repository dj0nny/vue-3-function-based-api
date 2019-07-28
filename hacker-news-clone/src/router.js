import Vue from 'vue';
import Router from 'vue-router';
import News from './views/News.vue';
import NewsDetail from './views/NewsDetail.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/news/:id',
      name: 'news-detail',
      component: NewsDetail,
    },
    {
      path: '/:type',
      name: 'news',
      component: News,
    },
  ],
});
