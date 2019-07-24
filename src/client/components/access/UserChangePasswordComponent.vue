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
      <br>Change Password:
      <br> Current Password :<input>
      <br> New Password:<input>
  </div>
</template>