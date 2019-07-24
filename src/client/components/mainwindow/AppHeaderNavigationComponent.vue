<script>
import DropDownMenuComponent from "../base/DropDownMenuComponent";
import uuidv4 from "uuid/v4";


export default {
  components:{
    DropDownMenuComponent,
  },
  data() {
    return {
      id:uuidv4(),
      bcompactmenu:false,
      filemenus:[
        {name:"Save",context:"access",icon:null}
      ],
      editmenus:[
        {name:"Preferences"}
      ],
      rendermenus:[
        {name:"Unknown"}
      ],
      windowmenus:[
        {name:"FullScreen"}
      ],
      helpmenus:[
        {name:"About"}
      ],
      workspace:[],
    }
  },
  methods:{
    handle_menuselect(e){

    },
  }
};
</script>
<style>
  .appheadernavigation{
    width:100%;
    height:22px;
    background-color: #333;
    color: white;
  }
  .btnicon{
    width: 22px;
    height:22px;
  }

</style>
<template>
  <div :id="id" class="appheadernavigation">
      <!--Header Comp.-->
      <button class="btnicon">0/1</button>
      <DropDownMenuComponent v-bind:menus="filemenus" v-on:select="handle_menuselect"  SelectName="File" />
      <DropDownMenuComponent v-bind:menus="editmenus" v-on:select="handle_menuselect"  SelectName="Edit" />
      <DropDownMenuComponent v-bind:menus="rendermenus" v-on:select="handle_menuselect"  SelectName="Render" />
      <DropDownMenuComponent v-bind:menus="windowmenus" v-on:select="handle_menuselect"  SelectName="Window" />
      <DropDownMenuComponent v-bind:menus="helpmenus" v-on:select="handle_menuselect"  SelectName="Help" />

  </div>
</template>