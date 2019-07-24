<script>
import uuidv4 from "uuid/v4";
import CountComponent from "../base/CountComponent";

export default {
  components:{
    CountComponent,
  },
  data() {
    return {
      id:uuidv4()
    }
  },
  mounted(){
    //console.log("this");
    //console.log(this);
  }
};
</script>
<style>
  .base{
    width:100%;
    height:100%;
    background-color: #333;
    color: white;
  }
</style>
<template>
  <div :id="id" class="base">
      PreferencesEditorComponent
      <CountComponent />
  </div>
</template>