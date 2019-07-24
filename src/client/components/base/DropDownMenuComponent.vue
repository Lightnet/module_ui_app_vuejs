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
    window.addEventListener('click',this.btnclick)
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
    },
    btnclick:function(event){
      //console.log(event);
      if (!event.target.matches('.dropbtn')) {
        //let dropdowns = document.getElementsByClassName("dropdown-content");
        //let i;
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
    background-color: #3498DB;
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
    background-color: #f1f1f1;
    min-width: 160px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }

  .dropdown-content a {
    color: black;
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
  <div :id="id" class="dropdown">
    <button v-on:click="btndropmenu" class="dropbtn">Menu</button>
    <template v-if="bdropmenu">
    <div class="dropdown-content">
      <a v-for="(item, index) in menus" :key="index" href="#" v-on:click="btndropmenuselect(item.context)">
        {{item.name}}
      </a>
    </div>
    </template>
  </div>
</template>