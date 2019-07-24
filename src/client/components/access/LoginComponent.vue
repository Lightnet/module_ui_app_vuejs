<script>
import uuidv4 from "uuid/v4";
import {store, mutations }from "../../mjs";

export default {
  components:{

  },
  data() {
    return {
      id:uuidv4(),
      loginid:"Guest",
      password:"Guest",
      gun:null,
      user:null,
    }
  },
  mounted(){
    //console.log("this");
    //console.log(this);
    this.gun = this.$root.$gun;
    this.user =this.gun.user && this.gun.user();
    console.log(this.gun);
  },
  methods:{
    btnlogin(){
      console.log("btnlogin");
      console.log(this.loginid);
      console.log(this.password);
      this.user.auth(this.loginid, this.password,this.handle_loggin);
    },
    handle_loggin(e){
      if(e.err){
        console.log("ERROR!")
        return;
      }
      console.log('auth ack:', e);
      mutations.setUser(this.loginid)
      mutations.setPub(e.sea.pub);
      mutations.setLogin(true);
    },
    btnregister(){
      console.log("btnregister");

      this.user.create(this.loginid,this.password,this.handle_register)
    },
    handle_register(e){
      console.log('created ack:', e)
    }
  }
};
</script>
<style>
  .accesscomp{
    width:100%;
    height:22px;
    background-color: #333;
    color: white;
  }
</style>
<template>
  <div :id="id" class="accesscomp">
      <br>Access
      <br>User: <input type="text" v-model="loginid" placeholder="id">
      <br>Password: <input type="text" v-model="password" placeholder="password">
      <br><button v-on:click="btnlogin"> Login </button>
      <button v-on:click="btnregister"> Register </button>
  </div>
</template>