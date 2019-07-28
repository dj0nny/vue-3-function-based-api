<template>
  <div class="news">
    <div v-if="loading">
      <h3>Loading...</h3>
    </div>
    <div class="news-container">
      <news-item v-for="item in newsList" :key="item.id" :item="item"></news-item>
    </div>
    <div class="more" v-if="!loading" @click="loadMore">
      More
    </div>
  </div>
</template>

<script>
import { value, onCreated } from 'vue-function-api';
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
    const currentPage = value(1);

    onCreated(() => {
      GET_NEWS({
        type: 'news',
        page: currentPage.value,
      });
    });

    const loadMore = () => {
      currentPage.value += 1;
      GET_NEWS({
        type: 'news',
        page: currentPage.value,
      });
    };

    return {
      newsList,
      loading,
      loadMore,
    };
  },
};
</script>


<style scoped>
.more {
  width: 95%;
  margin: auto;
  display: block;
  margin-top: 10px;
  cursor: pointer;
}
</style>
