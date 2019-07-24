<script>
/*

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
  .PropertiesEditor{
    width:100%;
    height:100%;
    background-color: #333;
    color: white;
  }

  .tab{
    width:32px;
    height:100%;
    float:left;
    background-color: aquamarine;
  }

  .tabpanel{
    width:calc(100% -32px);
    /*width:calc(100%);*/
    height:100%;
    float:left;
    background-color:cadetblue;
  }
</style>
<template>
  <div :id="id" class="PropertiesEditor">
      <!--PropertiesEditorComponent-->
      <div class="tab">
        0
      </div>

      <div class="tabpanel">
        0
      </div>

  </div>
</template>