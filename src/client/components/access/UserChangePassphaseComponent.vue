<script>
import uuidv4 from "uuid/v4";
import {store, mutations }from "../../mjs";
export default {
  components:{

  },
  computed:{
    getUser(){
      return store.username;
    }
  },
  data() {
    return {
      id:uuidv4(),
      oldpassphrase:'',
      newpassphrase:'',
    }
  },
  created(){
    //var user = this.$gun.user();
    //console.log(user);
    //this.username = user.is.alias;
    //this.pubid = user.is.pub;
  },
  mounted(){

  },
  methods:{
    changepassphrase(){
      let user = this.$gun.user();
      //$("#dialog").dialog('open');
      console.log(user);
      if (user.is ==null){
        //this.$root.$emit('dialogmessage',"Alias is Null");
        return
      }
      //let self = this;
        
      user.auth(user.is.alias, this.oldpassphrase, (ack) => {//user auth call
        //console.log(ack);
        let status = ack.err || "Saved!";//check if there error else saved message.
        //displayeffectmessage(status);//dsiplay message effect
        console.log(status);
        //this.message = status;
        //$("#dialog").dialog('open');
        //self.$root.$emit('dialogmessage',status);
            
        },
      {change: this.newpassphrase});//set config to change password
        
    }
  }
};
</script>

<template>
  <div :id="id">
      Change Passphrase:
      <table>
      <tr>
        <td>Passphrase</td>
        <td><input v-model="oldpassphrase"></td>
      </tr>
      <tr>
        <td>New Passphrase</td>
        <td><input v-model="newpassphrase"></td>
      </tr>
      <tr>
        <td></td>
        <td><button @click="changepassphrase">Change</button></td>
      </tr>
      </table>
  </div>
</template>