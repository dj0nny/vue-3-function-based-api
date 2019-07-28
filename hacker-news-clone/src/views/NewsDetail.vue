<template>
  <div class="detail">
    <div v-if="loading">
      <h3>Loading...</h3>
    </div>
    <div class="news-detail" v-if="!loading">
      <news-item :item="currentNews"></news-item>
      <comment v-for="comment in currentNews.comments" :key="comment.id" :data="comment"></comment>
    </div>
  </div>
</template>

<script>
import { onCreated } from 'vue-function-api';
import { useState, useActions, useRouter } from '@u3u/vue-hooks';

import types from '../types';
import NewsItem from '../components/NewsItem.vue';

export default {
  components: {
    NewsItem,
  },
  setup() {
    const { currentNews, loading } = useState(['currentNews', 'loading']);
    const { GET_NEWS_DETAIL } = useActions([types.GET_NEWS_DETAIL]);
    const { route } = useRouter();

    onCreated(() => {
      GET_NEWS_DETAIL(route.value.params.id);
    });

    return {
      currentNews,
      loading,
    };
  },
};
</script>

<style>
.news-detail .news-item::before {
  content: none;
}
</style>
