<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <app-header words="This is a prop testing!" v-bind:title="title" />
    <app-menu v-bind:menuText="textoMenu" />

    <!--dynamic component -->
    <!-- <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
    <button v-on:click="component = 'app-header'">Show Header</button>
    <button v-on:click="component = 'app-menu'">Show Menu</button> -->
    <!-- end of dynamic component -->
 
    <app-home v-bind:msg="msg" v-bind:names_list="names_list" />
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
  },
   data(){
    return {
      names_list: [
        {firstName: "Fernando", game:"the player", show: false},
        {firstName: "Kratos", game:"Gods of war", show: false},
        {firstName: "Claire", game:"re2", show: false},
        {firstName: "Leon", game: "re2", show: false},
        {firstName: "Parker", game: "spiderman", show: false}
      ],
      title: "Fernando Web developer",
      msg: "Fernando Webpage update!!",
      textoMenu: "menuText",
      component: "app-header"

    }
  },
  // beforeCreate(){
  //   alert('beforeCreated');
  // },
  // created(){
  //   alert('creaeted');
  // },
  // beforeMount(){
  //   alert('beforeMount');
  // },
  // mounted(){
  //   alert('mounted');
  // },
  // beforeUpdated(){
  //   alert('beforeUpdated')
  // },
  // updated(){
  //   alert('updated');
  // }
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
