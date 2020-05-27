<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <app-header words="This is a prop testing!" />
    <app-menu />
    <app-home msg="Welcome to Fernando's Webpage" />
    <app-home />
    <app-home />
    <app-footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";
import Home from "./components/Home.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    'app-header': Header,
    'app-menu': Menu,
    'app-home': Home,
    'app-footer': Footer
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}

/* Apply style to all elements inside the component (Entire component) */
#menu-component{
  background-color: steelblue;
  color: white;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
}

#footer-component{
  background-color: black;
  color: white;
  padding: 20px 0 20px 0;
}

</style>
