<script>
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
  .appcontent {
    background-color: gray;
    width:100%;
    height:100%;
  }
</style>

<template>
  <div :id="id" class="appcontent">
      <!--Hello World Comp.-->
      <slot></slot>
  </div>
</template>