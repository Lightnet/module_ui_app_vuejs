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
  props:{
    menus:{type: Array},
    bselectname:{type: Boolean, default: false},
    bicon:{type: Boolean, default: false},
    SelectName:{type: String, default: "Menu"}
  },
  //watch:{
    //SelectName(value){
      //console.log(value);
      //console.log("test");
      //console.log(this.SelectName);
      //this.selectname =
    //}
  //},
  /*
  computed:{
    SelectName:{
      // getter
      get: function () {
        return this.selectname;
      },
      // setter
      set: function (newValue) {
        console.log(this.data);

        //this.selectname = newValue
      }
    }
  },
  */
  data() {
    return {
      id:uuidv4(),
      iddropdown:uuidv4(),
      bdropmenu:false,
      selecticon:null,
      selectname:this.SelectName,
    }
  },
  mounted(){
    window.addEventListener('click',this.btnclick);
  },
  methods:{
    btndropmenu:function(event){
      //console.log(event);
      this.bdropmenu = !this.bdropmenu;
    },
    btndropmenuselect:function(value){
      //console.log(value);
      //this.bdropmenu = !this.bdropmenu;
      this.$emit("select",{detail:{
        context:value
      }});
      for(let i=0;i<this.menus.length;i++){
        if(this.menus[i].context==value){
          if(this.bselectname){
            this.selectname = this.menus[i].name;
          }
          if(this.bicon){
            //this.selecticon = this.menus[i].icon;
          }
          break;
        }
      }
    },
    btnclick:function(event){
      //console.log(event);
      //console.log(event.target);
      //console.dir(event.target);
      if(event.target.id == null){
        this.bdropmenu = false;
        return;
      }
      if(event.target.id != this.iddropdown){
        this.bdropmenu = false;
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener('click',this.btnclick)
  },
};
</script>
<style>
  .dropbtn {
    background-color: #333;
    color: white;
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
    position: absolute;
    color: white;
    background-color: #333;
    /*background-color: #f1f1f1;*/
    min-width: 128px;
    overflow: auto;
    padding: 0;
    margin:0 auto;
    z-index: 1;
  }

  .dropdown-content a {
    color: white;
    height:22px;
    text-align: center;
    padding:0;
    margin:0;
    line-height:22px;
    font-size: 12px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content a:hover {
    color: white;
    background-color: #3498DB;
  }

</style>
<template>
  <div :id="id" class="dropdown">
    <button :id="iddropdown" v-on:click="btndropmenu" class="dropbtn">
      <template v-if="bicon">

      </template>
      <template v-if="bselectname">
        {{selectname}}
      </template>
      <template v-else>
        {{selectname}}
      </template>
    </button>
    <template v-if="bdropmenu">
    <div class="dropdown-content">
      <a v-for="(item, index) in menus" :key="index" href="#" v-on:click="btndropmenuselect(item.context)">
        {{item.name}}
      </a>
    </div>
    </template>
  </div>
</template>