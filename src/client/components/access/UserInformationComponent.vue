<script>
//https://vuejs.org/v2/examples/modal.html
import ModalComponent from "../base/ModalComponent"

import uuidv4 from "uuid/v4";
import {store, mutations }from "../../mjs";
export default {
  components:{
    ModalComponent,
  },
  computed:{
    getUser(){
      return store.username;
    },
    //getPub(){
      //return store.pub;
    //}
  },
  data() {
    return {
      id:uuidv4(),
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
      show_RevokeKeyModel:false,
      show_RevokeConfirmModel:false,
      showmodal_message:false,
      modal_message:"",
    }
  },
  mounted(){
    let gun = this.$gun;
    let user = gun.user();
    console.log(gun)
    console.log(user)
    let p = user.get('profile');
    console.log(p);
    this.getprofiledata();
  },
  methods:{
    async getprofiledata(){
      let user = this.$gun.user();
      let self = this;
      user.get('profile').get('alias').decryptvalue(ack=>{
        self.alias = ack;
      });
      user.get('profile').get('born').decryptvalue(ack=>{
        self.born = ack;
      });
      user.get('profile').get('education').decryptvalue(ack=>{
        self.education = ack;
      });
      user.get('profile').get('skills').decryptvalue(ack=>{
        self.skills = ack;
      });
    },
    async inputalias(event){
      let user = this.$gun.user();
      console.log(user);
      user.get('profile').get('alias').encryptput(this.alias);
      console.log("alias",this.alias);
    },
    async inputborn(event){
      let user = this.$gun.user();
      user.get('profile').get('born').encryptput(this.born);
      console.log("born");
    },
    async inputeducation(event){
      let user = this.$gun.user();
      user.get('profile').get('education').encryptput(this.education);
      console.log("education");
    },
    async inputskills(event){
      //console.log("enter",event.target.value);
      let user = this.$gun.user();
      user.get('profile').get('skills').encryptput(this.skills);
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
      console.log(this.profiledata)

      user.get('profile').get(this.profiledata).grantkey(to);

    },
    modal_alias_close(){
      this.showmodal_alias = false;
    },
    modal_message_close(){
      this.showmodal_message=false;
    },
    async model_getRevokeKey(e){
      console.log(this.profiledata);
      this.show_RevokeKeyModel=false;
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
        this.show_RevokeConfirmModel=true;
        //this.showmodal_grant = false;
        //this.showmodal_alias = true;
      }
    },
    async model_getRevokeConrfirm(e){
      this.show_RevokeConfirmModel=false;
      console.log("finish!");
      let user = this.$gun.user();
      let key = this.grantkey;
      let to = this.$gun.user(key);
      user.get('profile').get(this.profiledata).revokekey(to);
    }
  }
};
</script>

<template>
  <div :id="id">
    <br>User Name:{{getUser}}
    <br>Profile: (Press Enter to update profile.)
    <table>
    <tr>
      <td>Alias</td>
      <td>
        <input v-on:keyup.13="inputalias" v-model="alias">
        <button @click="grant('alias')">+</button>
        <button @click="show_RevokeKeyModel=true;profiledata='alias'">-</button>
      </td>
    </tr>
    <tr>
      <td>Born</td>
      <td><input v-on:keyup.13="inputborn" v-model="born">
      <button @click="grant('born')">+</button>
      <button @click="show_RevokeKeyModel=true;profiledata='born'">-</button>
      </td>
    </tr>
    <tr>
      <td>Education</td>
      <td><input v-on:keyup.13="inputeducation" v-model="education">
      <button @click="grant('education')">+</button>
      <button @click="show_RevokeKeyModel=true;profiledata='education'">-</button>
      </td>
    </tr>
    <tr>
      <td>Skills</td>
      <td><input v-on:keyup.13="inputskills" v-model="skills">
      <button @click="grant('skills')">+</button>
      <button @click="show_RevokeKeyModel=true;profiledata='skills'">-</button>
      </td>
    </tr>
    </table>

    <ModalComponent :showModal="showmodal_grant">
      <span slot="header">
        Grant Access:
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

    <ModalComponent :showModal="show_RevokeKeyModel">
      <span slot="header">
        Revoke Access:
      </span>
      <span slot="body">
        <label>Public Key:</label> <input type="text" v-model="grantkey">
      </span>
      <span slot="footer">
        <button @click="model_getRevokeKey">OK</button><button @click="show_RevokeKeyModel=false;" >Cancel</button>
      </span>
    </ModalComponent>

    <ModalComponent :showModal="show_RevokeConfirmModel">
      <span slot="header">
        Revoke Access to:
      </span>
      <span slot="body">
        <label> {{labelalias}} </label>
      </span>
      <span slot="footer">
        <button @click="model_getRevokeConrfirm">OK</button><button @click="show_RevokeConfirmModel=false;" >Cancel</button>
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