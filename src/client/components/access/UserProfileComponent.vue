<script>
//https://vuejs.org/v2/examples/modal.html
import AliasSearchComponent from "./AliasSearchComponent";
import UserInformationComponent from "./UserInformationComponent";
import ModalComponent from "../base/ModalComponent";
import DisplayPublicKeyComponent from "./DisplayPublicKeyComponent";

import uuidv4 from "uuid/v4";
//import {store, mutations }from "../../mjs";
export default {
  components:{
    AliasSearchComponent,
    ModalComponent,
    UserInformationComponent,
    DisplayPublicKeyComponent,
  },
  computed:{
    //getUser(){
      //return store.username;
    //},
    //getPub(){
      //return store.pub;
    //}
  },
  data() {
    return {
      id:uuidv4()
    }
  },
  mounted(){

  },
  methods:{

  }
};
</script>

<template>
  <div :id="id">
    <DisplayPublicKeyComponent></DisplayPublicKeyComponent>
    <UserInformationComponent></UserInformationComponent>
    <AliasSearchComponent></AliasSearchComponent>
  </div>
</template>