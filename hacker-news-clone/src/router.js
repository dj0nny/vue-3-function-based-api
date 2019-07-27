import Vue from 'vue';
import Router from 'vue-router';
import News from './views/News.vue';
import Newest from './views/Newest.vue';
import Ask from './views/Ask.vue';
import Show from './views/Show.vue';
import Jobs from './views/Jobs.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'news',
      component: News,
    },
    {
      path: '/new',
      name: 'new',
      component: Newest,
    },
    {
      path: '/ask',
      name: 'ask',
      component: Ask,
    },
    {
      path: '/show',
      name: 'show',
      component: Show,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: Jobs,
    },
  ],
});
