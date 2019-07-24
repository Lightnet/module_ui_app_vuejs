<script>
import uuidv4 from "uuid/v4";
export default {
  components:{

  },
  props:{
    menus:{type: Array},
  },
  data() {
    return {
      id:uuidv4(),
      bdropmenu:false,
    }
  },
  mounted(){
    //console.log("this");
    //console.log(this);


    window.addEventListener('click',this.btnclick)
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
    },
    btndropmenu:function(event){
      //console.log("click?");
      //console.log(event);
      this.bdropmenu = !this.bdropmenu;
    },
    btndropmenuselect:function(event){
      console.log("click?");
      console.log(event);
      //this.bdropmenu = !this.bdropmenu;
      this.$emit("editorevent",{detail:{
        context:event
      }});
    },
    btnclick:function(event){
      //console.log(event);
      if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        //console.log("?");
        //console.log(this.bdropmenu == false)
        this.bdropmenu = false;
        /*
        for (i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            this.bdropmenu = false;
            //console.log(this.bdropmenu);
          }
        }
        */
      }
    }
  },
  beforeDestroy() {
    //this.$root.$eventHub.$off('eventhub');
    window.removeEventListener('click',this.btnclick)
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
  .dropbtn {
    background-color: #3498DB;
    color: white;
    /*padding: 16px;*/
    /*font-size: 16px;*/
    height:22px;
    border: none;
    cursor: pointer;
  }

  .dropbtn:hover, .dropbtn:focus {
    background-color: #2980B9;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    /*display: none;*/
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }

  .dropdown-content a {
    /*color: black;*/
    /*padding: 12px 16px;*/
    font-size: 12px;
    height:22px;
    text-decoration: none;
    display: block;
  }
  .dropdown-content a:hover {
    background-color: #3498DB;
  }

</style>
<template>
  <div :id="id" class="editormenu">
    <div class="dropdown">
      <button v-on:click="btndropmenu" class="dropbtn">Menu</button>
      <template v-if="bdropmenu">
      <div id="myDropdown" class="dropdown-content">
        <a v-for="(item, index) in menus" :key="index" href="#" v-on:click="btndropmenuselect(item.context)">
          <!--{{item.name}} {{index}}-->
          {{item.name}}
          <!--
          {{menus[index].name}}
          -->
        </a>

      </div>
      </template>
    </div>
    <!--
    <button v-on:click="btnview"> btnview </button>
    <button v-on:click="btnselect"> btnselect </button>
    <button v-on:click="btnadd"> btnadd </button>
    <button v-on:click="btnobject"> btnobject </button>
    -->
  </div>
</template>