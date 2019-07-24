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
</style>
<template>
  <div :id="id" class="appheadernavigation">
      Header Comp.
      <DropDownMenuComponent v-bind:menus="filemenus" v-on:select="handle_menuselect"  SelectName="File" />
  </div>
</template>