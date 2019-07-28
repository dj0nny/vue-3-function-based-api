<template>
  <div class="news">
    <div v-if="loading">
      <h3>Loading...</h3>
    </div>
    <div class="news-container">
      <news-item v-for="item in newsList" :key="item.id" :item="item"></news-item>
    </div>
  </div>
</template>

<script>
import { onCreated } from 'vue-function-api';
import { useState, useActions } from '@u3u/vue-hooks';

import types from '../types';
import NewsItem from '../components/NewsItem.vue';

export default {
  name: 'News',
  components: {
    NewsItem,
  },
  setup() {
    const { newsList, loading } = useState(['newsList', 'loading']);
    const { GET_NEWS } = useActions([types.GET_NEWS]);

    onCreated(() => {
      GET_NEWS({
        type: 'news',
        page: 1,
      });
    });

    return {
      newsList,
      loading,
    };
  },
};
</script>
