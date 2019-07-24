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
        contacts:[],

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
      Contacts
      <ul>
      <li v-for="(item, index) in contacts" :key="index">
        {{item.name}}
      </li>
      </ul>
  </div>
</template>