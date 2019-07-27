<template>
  <div id="app">
    <div class="content">
      <Navbar></Navbar>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>


<style>
body {
  font-family: Verdana, Geneva, sans-serif;
  font-size: 10pt;
  color: #828282;
}

a {
  color: #000;
  text-decoration: none;
}

.content {
  width: 85%;
  background-color: rgb(246, 246, 239);
  margin: auto;
}
</style>
