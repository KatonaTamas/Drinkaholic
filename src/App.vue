<template>
  <!--<div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>-->
  <Header title="Drinkaholic"/>
    <router-view/>
</template>

<script>

import Header from './components/Header';

window.axios = require('axios');

export default { 
  name: 'App',
  components: {
    Header
  },
  data() {
    return {
      beer: {}
    }
  }
}
</script>
<style>
#app {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 0 1rem;
  color: #2b2e4a;
  overflow-x: hidden;
}

  .result_container {
    width: 100%;
    height: auto;
  }

  .beer-card_container {
    padding: 1.7rem 0;
  }

  
</style>

