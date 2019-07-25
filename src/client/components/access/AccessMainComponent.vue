<script>
import LoginComponent from "./LoginComponent";
import DisplayUserComponent from "./DisplayUserComponent";

import UserProfileComponent from "./UserProfileComponent";
import UserChangePassphaseComponent from "./UserChangePassphaseComponent";
import UserContactsComponent from "./UserContactsComponent";
import UserPassphaseHintComponent from "./UserPassphaseHintComponent";
//import AliasSearchComponent from "./AliasSearchComponent";


import uuidv4 from "uuid/v4";
import {store, mutations } from "../../mjs";

export default {
  components:{
    LoginComponent,
    DisplayUserComponent,
    UserProfileComponent,
    UserContactsComponent,
    UserPassphaseHintComponent,
    UserChangePassphaseComponent,
    //AliasSearchComponent,
  },
  computed: {
    UserName() {
      return store.username;
    },
    LoginStatus(){
      return store.blogin;
    }
  },
  data() {
    return {
      id:uuidv4(),
      currentview:UserProfileComponent,
      navmenus:[
        {name:"Profile",context:"profile",comp:UserProfileComponent},
        {name:"Contacts",context:"contacts",comp:UserContactsComponent},
        {name:"Passphase Hint",context:"passphasehint",comp:UserPassphaseHintComponent},
        {name:"Change Passphase",context:"changepassphase",comp:UserChangePassphaseComponent},
      ]
    }
  },
  mounted(){
    //console.log("this");
    //console.log(this);
  },
  methods:{
    btnlogin(){
      //console.log("btnlogin");
    },
    btnselect(e){
      //console.log("btnselect",e);
      for(let i=0;i<this.navmenus.length;i++){
        if(this.navmenus[i].context==e){
          this.currentview = this.navmenus[i].comp;
          break;
        }
      }
    }
  }
};
</script>
<style>
  .accesscomp{
    width:100%;
    height:100%;
    background-color: gray;
    color: white;
  }

</style>
<template>
  <div :id="id" class="accesscomp">
      <DisplayUserComponent />
      <template v-if="LoginStatus">
        <a href="#" v-for="(item, index) in navmenus" :key="index" v-on:click="btnselect(item.context)">
          {{item.name}}
        </a>
        <component v-bind:is="currentview"></component>
      </template >
      <template v-else>
        <LoginComponent />
      </template>
  </div>
</template>