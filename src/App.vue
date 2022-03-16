<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <button @click="fetchUsers">Fetch Users</button>
  </nav>
  <router-view />
</template>

<script lang="ts">
import axios from "axios";

export default {
  name: "app",
  methods: {
    fetchUsers: function () {
      const apiKey = process.env.VUE_APP_API_KEY;
      const baseURI = `https://api.openweathermap.org/data/2.5/weather?lat=39.9612&lon=82.9988&appid=${apiKey}`;
      axios.get(baseURI).then((result) => {
        console.log(result.data);
      });
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
