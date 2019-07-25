<script>
//https://vuejs.org/v2/examples/modal.html
import AliasSearchComponent from "./AliasSearchComponent";
import ModalComponent from "../base/ModalComponent"

import uuidv4 from "uuid/v4";
import {store, mutations }from "../../mjs";
export default {
  components:{
    AliasSearchComponent,
    ModalComponent,
  },
  computed:{
    getUser(){
      return store.username;
    },
    getPub(){
      return store.pub;
    }
  },
  data() {
    return {
      id:uuidv4(),
      publickey:uuidv4(),
      alias:'',
      born:'',
      education:'',
      skills:'',
      showModal:false,
      profiledata:"",
      grantkey:"",
      labelalias:"",
      showmodal_grant:false,
      showmodal_alias:false,
      showmodal_message:false,
      modal_message:"",
    }
  },
  mounted(){

  },
  methods:{
    copykey(){
      //let CodeToCopy = document.querySelector('#currentowneraliaspulbickey');
      let CodeToCopy = document.getElementById(this.publickey);
      CodeToCopy.select();
      document.execCommand('copy');
    },
    async inputalias(event){
      let user = this.$gun.user();
      console.log(user);
      //user.get('profile').get('alias').secret(this.alias,ack=>{
      //console.log(ack);
      //});
      //user.get('profile').get('alias').put(this.alias);
      //user.get('profile').get('alias').secret(this.alias);
      console.log("alias");
    },
    async inputborn(event){
      let user = this.$gun.user();
      //user.get('profile').get('born').secret(this.born,ack=>{
      //console.log(ack);
      //});
      //user.get('profile').get('born').secret(this.born);
      console.log("born");
    },
    async inputeducation(event){
      let user = this.$gun.user();
      //user.get('profile').get('education').secret(this.education,ack=>{
      //console.log(ack);
      //});
      //user.get('profile').get('education').secret(this.education);
      console.log("education");
    },
    async inputskills(event){
      //console.log("enter",event.target.value);
      let user = this.$gun.user();
      //user.get('profile').get('skills').secret(this.skills,ack=>{
      //console.log(ack);
      //});
      //user.get('profile').get('skills').secret(this.skills);
      console.log("skills");
    },
    grant(param){
      //console.log(param);
      this.profiledata = param;
      this.showmodal_grant = true;
    },
    async modal_grant_ok(){
      let key = this.grantkey;
      //console.log(key);
      let to = this.$gun.user(key);
      let who = await to.get('alias').then();
      if((!who)||(key.length == 0)){
        console.log('No Alias!');
        this.modal_message = "No Alias!";
        this.showmodal_grant = false;
        this.showmodal_message = true;
        //alert('No Alias!');
      }else{
        //AliasTag
        //console.log(who);
        this.labelalias = who;
        this.showmodal_grant = false;
        this.showmodal_alias = true;
      }
    },
    modal_grant_close(){
      this.showmodal_grant = false;
    },
    modal_alias_ok(){
      this.showmodal_alias = false;
      let user = this.$gun.user();
      //console.log(user);
      let key = this.grantkey;
      let to = this.$gun.user(key);
      //user.get('profile').get(this.profiledata).grant(to);
      user.get('profile').get(this.profiledata).trust(to);
    },
    modal_alias_close(){
      this.showmodal_alias = false;
    },
    modal_message_close(){
      this.showmodal_message=false;
    }
  }
};
</script>

<template>
  <div :id="id">
    <br>User Name:{{getUser}}
    <br>Public Key: <input :id="publickey" v-model="getPub" readonly> <button @click="copykey">Copy</button>

    <br>Profile: (Press Enter to update profile.)
    <table>
    <tr>
      <td>Alias</td>
      <td><input v-on:keyup.13="inputalias" v-model="alias"><button @click="grant('alias')">+</button></td>
    </tr>
    <tr>
      <td>Born</td>
      <td><input v-on:keyup.13="inputborn" v-model="born"><button @click="grant('born')">+</button></td>
    </tr>
    <tr>
      <td>Education</td>
      <td><input v-on:keyup.13="inputeducation" v-model="education"><button @click="grant('education')">+</button></td>
    </tr>
    <tr>
      <td>Skills</td>
      <td><input v-on:keyup.13="inputskills" v-model="skills"><button @click="grant('skills')">+</button></td>
    </tr>
    </table>

    <ModalComponent :showModal="showmodal_grant">
      <span slot="header">
        Grant Acccess:
      </span>

      <span slot="body">
        <label>Public Key:</label> <input type="text" v-model="grantkey">
      </span>

      <span slot="footer">
        <button @click="modal_grant_ok">OK</button><button @click="modal_grant_close">Cancel</button>
      </span>
    </ModalComponent>

    <ModalComponent :showModal="showmodal_alias">
      <span slot="header">
        Grant Alias to:
      </span>

      <span slot="body">
        <label> {{labelalias}} </label>
      </span>

      <span slot="footer">
        <button @click="modal_alias_ok">OK</button><button @click="modal_alias_close">Cancel</button>
      </span>
    </ModalComponent>

    <ModalComponent :showModal="showmodal_message">
      <span slot="header">
        Message:
      </span>

      <span slot="body">
        <label> {{modal_message}} </label>
      </span>

      <span slot="footer">
        <button @click="modal_message_close">OK</button>
      </span>
    </ModalComponent>

  </div>
</template>