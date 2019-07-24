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
      <br>User Name:{{getUser}}
      <br>Public Key: <input v-model="getPub" readonly> <button>Copy</button>
  </div>
</template>