<template>
  <div id="navbar">
    <img src="../assets/logo.gif" id="logo">
    <span>
      <router-link to="/news">Hacker News</router-link>
    </span>
    <ul id="menu">
      <li class="item"><router-link to="/news">news</router-link></li>
      <li class="item"><router-link to="/newest">newest</router-link></li>
      <li class="item"><router-link to="/ask">ask</router-link></li>
      <li class="item"><router-link to="/show">show</router-link></li>
      <li class="item"><router-link to="/jobs">jobs</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>


<style>
#navbar {
  display: flex;
  background-color: rgb(255, 102, 0);
  font-size: 10pt;
  color: #828282;
  padding: 3px;
  height: 20px;
}

#navbar #logo {
  outline: 1px solid #fff;
  margin-right: 5px;
}

#navbar span {
  font-weight: bold;
}

#navbar ul#menu {
  margin: 0;
  padding-left: 10px;
}

#navbar ul#menu li.item {
  display: inline-block;
  margin-right: 10px;
}

#navbar ul#menu li.item a::after {
  content: "|";
  padding-left: 10px;
  color: #000;
}

#navbar ul#menu li.item a.router-link-exact-active.router-link-active {
  color: #fff;
}

</style>
