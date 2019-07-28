import Vue from 'vue';
import Vuex from 'vuex';

import types from './types';

Vue.use(Vuex);

const BASE_URL = 'https://api.hackernews.io';

export default new Vuex.Store({
  state: {
    newsList: [],
    currentNews: {},
    loading: false,
  },
  mutations: {
    [types.SET_NEWS_ITEMS](state, newsItems) {
      state.newsList = newsItems;
    },
    [types.SET_CURRENT_NEWS](state, newsItems) {
      state.currentNews = newsItems;
    },
    [types.SET_LOADING](state, loading) {
      state.loading = loading;
    },
  },
  actions: {
    async [types.GET_NEWS]({ commit }, { type, page = 1 }) {
      commit(types.SET_LOADING, true);
      const res = await fetch(`${BASE_URL}/${type}?page=${page}`);
      const items = await res.json();
      commit(types.SET_NEWS_ITEMS, items);
      commit(types.SET_LOADING, false);
    },
  },
});
