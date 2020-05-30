
<template>
 <div id="contact-form">
   <form name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true">
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
        <div data-netlify-recaptcha="true"></div>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
 </div>
</template>
<script>
export default {
  name: "Contact",
  methods: {
   
  },
  data () {
    return {
      
     
    }
  }
}
</script>