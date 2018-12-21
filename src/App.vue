<template>
  <div id="app">
    <header-main></header-main>
    <menu-main></menu-main>
    <router-view></router-view>

  </div>
</template>


<script>
import headerMain from "./components/headerMain/headerMain.vue";
import menuMain from "./components/menuMain/menuMain.vue";
export default {
  data() {
    return {
    }
  },
  components: {
  headerMain,
  menuMain
  }
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
