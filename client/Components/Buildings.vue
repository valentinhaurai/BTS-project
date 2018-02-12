<template>
  <div class="buildings"> 
    <h1>Je suis le composant Buildings</h1>
  </div>
</template>

<script>
export default {
  name: 'buildings',
  data () {
    return {
      buildings: null
    }
  },
  methods : {
    getBuildings () {
      fetch('http://localhost:3000/buildings')
      .then(function (response) {
        response.json().then(function(data) {
          buildings = data;
        });
      })
      .catch(function (error) {
        console.log("error" + error);
      })
    }
  },
  mounted() {
    this.getBuildings();
  }
}
</script>