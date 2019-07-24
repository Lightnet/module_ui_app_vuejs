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
  },
  methods:{
    btntest:function(e){
      //console.log(e);
      //console.log("test...");
      //this.$eventHub("eventhub");
      //console.log(this);
      //this.$root.$eventHub.$emit("eventhub");
      //console.log(this.$root.$gun);
    }
  },
  beforeDestroy() {
    //this.$root.$eventHub.$off('eventhub');
  },
};
</script>
<style>
  .editorheader{
    width:100%;
    height:22px;
    background-color: #333;
    color: white;
  }
</style>
<template>
  <div :id="id" class="editorheader">
      <slot></slot>
  </div>
</template>