# vue-3-function-based-examples

[![vue](https://img.shields.io/badge/build%20with-Vue-blue)](https://img.shields.io/badge/build%20with-Vue-blue)
[![vue](https://img.shields.io/github/languages/top/dj0nny/vue-3-function-based-api)](https://img.shields.io/github/languages/top/dj0nny/vue-3-function-based-api)
[![npm version](https://badge.fury.io/js/vue.svg)](https://badge.fury.io/js/vue)
[![npm version](https://badge.fury.io/js/vue-function-api.svg)](https://badge.fury.io/js/vue-function-api)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)

> Examples built with the new Vue 3 function-based component API

## Getting Started

As announced, in the version 3 of Vue.js (the release will probably be in the third quarter of 2019, you can see the complete roadmap [here](https://github.com/vuejs/vue/projects/6)) there will be an important introduction: the function-based component API. But what exactly is it?

Introduced as an RFC for 3.x, the new API presents a clean and flexible way to compose logic between and inside components. Must be specified that for now, it is an **open RFC** which means it's not set in stone and can change based on users feedback.

### Prerequisites  

For this project you need [__Node__](https://nodejs.org/en/) installed on your machine with [__Npm__](https://www.npmjs.com/) or [__Yarn__](https://yarnpkg.com).

**If you want** you can install the official [Vue CLI](https://cli.vuejs.org/). You can add it typing, inside a terminal:
```bash
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

### Install the function-based API

You can install it, inside your Vue.js 2.x application via npm or yarn:

```bash
npm install vue-function-api
# OR
yarn add vue-function-api
```
Or add it via CDN if you not using the CLI:

```html
<script src="https://unpkg.com/vue-function-api/dist/vue-function-api.umd.js"></script>
```

### Use the plugin

Last step: add the package to your Vue app:

```javascript
import Vue from 'vue'
import { plugin } from 'vue-function-api'

Vue.use(plugin)
```
And we are ready! 🚀

### Clone this repository

You can clone this repository using __Git__:
```bash
git clone https://github.com/dj0nny/vue-3-function-based.git
```

Or download the repository [here](https://github.com/dj0nny/vue-3-function-based-api.git)

---

Before using the apps, you need to install the dependencies. Open a terminal and type, inside the directory:

```bash
npm install 
# OR
yarn install
```
For running them: 
```bash
npm run serve
# OR
yarn serve
```
The Vue development server it will be up and running at this address: http://localhost:8080.

## Built with ❤️ using:

* [Vue.js](https://vuejs.org/) - A Javascript framework
* [Vue Function API](https://github.com/vuejs/vue-function-api) - provides function api from Vue3.x to Vue2.x for developing next-generation Vue applications.
* [vue-hooks](https://github.com/u3u/vue-hooks) - Awesome hooks for Vue.js

## Useful links

* Function-based component API (extended discussion) - https://github.com/vuejs/rfcs/issues/55
* Evan You Previews Vue.js 3.0 - https://medium.com/vue-mastery/evan-you-previews-vue-js-3-0-ab063dec3547
* Vue Project Roadmap - https://github.com/vuejs/roadmap

## Contributing

Pull Requests for adding features ⇄ and ★ are welcome 😎