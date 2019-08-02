<script>
/*
  Project Name: module_ui_app_vuejs
  
  Created by: Lightnet

  License: MIT

  Information: Prototype build.

*/

import uuidv4 from "uuid/v4";
export default {
  components:{

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
  .inputcomp{
    width:100%;
    height:22px;
    background-color: #333;
    color: white;
  }
</style>
<template>
  <div :id="id" class="inputcomp">
      Footer
  </div>
</template>