<template>
  <div id="app">
    <Adds :a="1" :b="2" @add="add_sum"></Adds>
    {{sum}}
  </div>
</template>

<script>
import Adds from "./lib/add.vue";
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      sum: 0
    }
  },
  components: {
    Adds
  },
  methods: {
    add_sum (sum) {
      this.sum = sum;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
