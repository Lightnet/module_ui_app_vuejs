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
      this.$emit("editorevent",{detail:{
        context:"viewport3d"
      }});
      console.log("call button");
    },
    btnview:function(e){
      this.$emit("editorevent",{detail:{
        context:"viewport3d"
      }});
    },
    btnselect:function(e){
      this.$emit("editorevent",{detail:{
        context:"properties"
      }});
    },
    btnadd:function(e){
      this.$emit("editorevent",{detail:{
        context:"preferences"
      }});
    },
    btnobject:function(e){
      this.$emit("editorevent",{detail:{
        context:"outliner"
      }});
    }
  },
  beforeDestroy() {
    //this.$root.$eventHub.$off('eventhub');
  },
};
</script>
<style>
  .editormenu{
    width:100%;
    height:100%;
    background-color: #333;
    color: white;
  }
</style>
<template>
  <div :id="id" class="editormenu">
       <button v-on:click="btnview"> btnview </button>
       <button v-on:click="btnselect"> btnselect </button>
       <button v-on:click="btnadd"> btnadd </button>
       <button v-on:click="btnobject"> btnobject </button>
  </div>
</template>