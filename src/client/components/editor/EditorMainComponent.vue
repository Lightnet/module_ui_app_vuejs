<script>
import uuidv4 from "uuid/v4";
import EditorHeaderComponent from "./EditorHeaderComponent";
import EditorContextComponent from "./EditorContextComponent";
import EditorFooterComponent from "./EditorFooterComponent";
//import EditorMenuComponent from "./EditorMenuComponent";

import PreferencesEditorComponent from "../preferences/PreferencesEditorComponent";
import PropertiesEditorComponent from "../properties/PropertiesEditorComponent";
import OutlinerEditorComponent from "../outliner/OutlinerEditorComponent";
import Viewport3DEditorComponent from "../viewport3d/Viewport3DEditorComponent";
import AccessMainComponent from "../access/AccessMainComponent";

import DropDownMenuComponent from "../base/DropDownMenuComponent";

export default {
  props:{
    editorcontext:{
      type: String,
      default: "properties",
    }
  },
  components:{
    EditorHeaderComponent,
    EditorContextComponent,
    EditorFooterComponent,
    //EditorMenuComponent,

    PreferencesEditorComponent,
    PropertiesEditorComponent,
    OutlinerEditorComponent,
    Viewport3DEditorComponent,
    DropDownMenuComponent,

    AccessMainComponent,

  },
  data() {
    return {
      id:uuidv4(),
      editortype:[
        {name:"Access",context:"access",comp:AccessMainComponent,icon:null},
        {name:"Viewport 3D",context:"viewport3d",comp:Viewport3DEditorComponent,icon:null},
        {name:"Properties",context:"properties",comp:PropertiesEditorComponent,icon:null},
        {name:"Preferences",context:"preferences",comp:PreferencesEditorComponent,icon:null},
        {name:"Outliner",context:"outliner",comp:OutlinerEditorComponent,icon:null},
      ],
      currentcontextview:PropertiesEditorComponent,
    }
  },
  mounted(){
    //console.log("this");
    //console.log(this);
    //console.log(this.editorcontext);
    this.editorselect(this.editorcontext);
  },
  methods:{
    editorselect(value){
      for(let i=0;i < this.editortype.length;i++){
        //console.log(this.editortype[i]);
        if(value == this.editortype[i].context){
          //console.log(this.editortype[i].name);
          this.currentcontextview = this.editortype[i].comp;
          break;
        }
      }
    },
    btntest:function(e){
      //console.log(e);
      //console.log("test...");
      //this.$eventHub("eventhub");
      //console.log(this);
      //this.$root.$eventHub.$emit("eventhub");
      //console.log(this.$root.$gun);
    },
    handle_menuselect:function(e){
      //console.log(e);
      //console.log("top call?");
      if(e.detail !=null){
        if(e.detail.context !=null){
          for(let i=0;i < this.editortype.length;i++){
            //console.log(this.editortype[i]);
            if(e.detail.context == this.editortype[i].context){
              //console.log(this.editortype[i].name);
              this.currentcontextview = this.editortype[i].comp;
              break;
            }
          }
        }
      }
    }
  },
  beforeDestroy() {
    //this.$root.$eventHub.$off('eventhub');
  },
};
</script>
<style>
  .editorcomp{
    width:100%;
    height:100%;
    background-color: #333;
    color: white;
  }
</style>
<template>
  <div :id="id" class="editorcomp">
    <EditorHeaderComponent>
      <!--Header Editor <button v-on:click="btntest"> Test </button>-->
      <!--<EditorMenuComponent  v-bind:menus="editortype" v-on:editorevent="handle_editor" />-->
      <DropDownMenuComponent v-bind:menus="editortype" v-on:select="handle_menuselect" :bselectname="true" :SelectName="editorcontext" />

    </EditorHeaderComponent>
    <EditorContextComponent>
      <!--Context Editor-->
      <component v-bind:is="currentcontextview"></component>
    </EditorContextComponent>
    <EditorFooterComponent>
      Footer Editor
    </EditorFooterComponent>
  </div>
</template>