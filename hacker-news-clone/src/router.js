import Vue from 'vue';
import Router from 'vue-router';
import News from './views/News.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/:type',
      name: 'news',
      component: News,
    },
  ],
});
