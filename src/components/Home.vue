<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <h1 class="animate__animated animate__fadeInDown" v-if="isShow">An animated element</h1>
    <button v-on:click="isShow =!isShow">Title to show</button>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <div v-if="calculate(4, 5) < 6">{{ calculate(4,5) }} you can see me </div>
    <div v-else>
      Now you don't
    </div>
    <h4>List of games chars</h4>
    <ul>
      <li v-for="name in names_list" v-bind:key="name.id" v-on:click="name.show = !name.show">
        <button>{{ name.firstName }}</button>
        <p v-show="name.show" > {{ name.game }} </p>
      </li>
    </ul>
    <button v-on:click="deleteName()">Delete names</button>

    <form> 
      <label>First Name</label>
      <input type="text" v-model.lazy="firstName" required />
      <label>Email</label>
      <input type="email" v-model="email" required />
      <label>Leave your message </label>
      <textarea v-model.lazy="firstName"></textarea>
      
      <div id="checkboxes" style="margin-top:20px;">
        <label>God of War
        <input type="checkbox" value="God of War" v-model="games.categories" /></label>
        <label>Spiderman
        <input type="checkbox" value="Spiderman" v-model="games.categories" /></label>
        <label>Resident Evil 2
        <input type="checkbox" value="Resident Evil 2" v-model="games.categories" /></label>
        <label>NBA 2K
        <input type="checkbox" value="NBA 2K" v-model="games.categories" /></label>
        <label>PES 2020
        <input type="checkbox" value="PES 2020" v-model="games.categories" /></label>
      </div>

      <div id="selections">
        <select v-model="games.charname">
          <option v-for="name in gnames" v-bind:key="name.id">{{ name }}</option>
        </select>
      </div>
    </form>

    <p>{{ firstName }}</p>
    <p>content: </p>
    <p>{{ email }}</p>
    <p>Blog categories</p>
    <ul>
      <li v-for="category in games.categories" v-bind:key="category.id">{{ category }}</li>
    </ul>
    <p>Character name: {{ games.charname }}</p>

    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
          >babel</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex"
          target="_blank"
          rel="noopener"
          >vuex</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
          >eslint</a
        >
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener"
          >vue-router</a
        >
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
          >vue-devtools</a
        >
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
          >vue-loader</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
          >awesome-vue</a
        >
      </li>
    </ul>
    <hr>

    <h2>Contact me</h2>

    <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]">
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <div class="field">
    <div data-netlify-recaptcha="true"></div>
  </div>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String,
    names_list: Array
  },
  data(){
    return{
        firstName: "",
        email:"",
        games:{
          categories:[],
          charname: ""
        },
        gnames:['','Kratos', 'Parker','Leon', "Ai", 'Milan'],
        isShow: false
    }
  },
  methods:{
    deleteName: function(){
      this.names_list.pop();
    },
    calculate: function(a, b){
      let c = 0;
      c = a + b
      return c
    }
  }
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
