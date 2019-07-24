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
      <br>Change Forgot Hint
      <br>Question #1:<input type="text">
      <br>Question #2:<input type="text">
      <br>Hint:<input type="text">
      <br><button>Change</button>
  </div>
</template>