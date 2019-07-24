<script>
//https://vuejs.org/v2/api/#destroyed
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
  },
  destroyed(){

  }
};
</script>
<style>
  .btncomp{
    width:100%;
    height:22px;
    background-color: #333;
    color: white;
  }
</style>
<template>
  <div :id="id" class="btncomp">
      Footer
  </div>
</template>