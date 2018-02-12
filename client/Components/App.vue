
<template>
  <div id="app">
  	<router-link :to="{ name: 'Buildings' }">Access to buildings</router-link>
  	<router-link :to="{ name: 'Hello' }">Access to hello</router-link>
  	<router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
    
