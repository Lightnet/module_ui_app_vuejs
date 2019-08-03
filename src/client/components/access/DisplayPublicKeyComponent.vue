<script>
import uuidv4 from "uuid/v4";
import {store, mutations }from "../../mjs";
export default {
  components:{

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
  }
};
</script>

<template>
  <div :id="id">
      <br>Public Key: <input :id="publickey" v-model="getPub" readonly> <button @click="copykey">Copy</button>
  </div>
</template>