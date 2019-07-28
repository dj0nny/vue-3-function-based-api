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
import { value, watch, onCreated } from 'vue-function-api';
import { useState, useActions, useRouter } from '@u3u/vue-hooks';

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
    const { route } = useRouter();

    const setType = (type) => {
      currentPage.value = 1;
      GET_NEWS({
        type,
        page: currentPage.value,
      });
    };

    watch(() => route.value.params.type, (type) => {
      setType(type);
    });

    onCreated(() => {
      setType(route.value.params.type);
    });

    const loadMore = () => {
      currentPage.value += 1;
      GET_NEWS({
        type: route.value.params.type,
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
