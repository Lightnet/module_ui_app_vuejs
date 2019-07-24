

<script>
/*
  Created by: Lightnet

  License: MIT

  Information: Prototype build.

*/
//import HelloWorld from "./components/HelloWorld.vue";
import AppHeaderNavigationComponent from "./components/mainwindow/AppHeaderNavigationComponent.vue";
import HeaderSplitterComponent from "./components/mainwindow/HeaderSplitterComponent.vue";
import AppContentComponent from "./components/mainwindow/AppContentComponent.vue";
import AppFooterComponent from "./components/mainwindow/AppFooterComponent.vue";

import EditorMainComponent from "./components/editor/EditorMainComponent.vue";

export default {
  components:{
    AppContentComponent,
    AppHeaderNavigationComponent,
    HeaderSplitterComponent,
    AppFooterComponent,
    EditorMainComponent
  },
  data() {
    return {
      message: 'Hello World',
    };
  },
  mounted(){
    //console.log("this");
    //https://vuejs.org/v2/guide/state-management.html
    //console.log(this.$root);
    //console.log(this.$root.$data);
    this.$root.$eventHub.$on('eventhub',(e)=>{
      console.log("app test");
    });

  },
  beforeDestroy() {
    this.$root.$eventHub.$off('eventhub');
  },
};
/*
properties
access
*/
</script>

<style>
#app {
  /*font-size: 18px;*/
  /*font-family: 'Roboto', sans-serif;*/
  /*color: blue;*/
  width:100%;
  height:calc(100% - 22px - 22px - 10px);
}
</style>

<template>
  <div id="app">
    <AppHeaderNavigationComponent />
    <!--{{ message }}-->
    <HeaderSplitterComponent />
    <AppContentComponent>

      <EditorMainComponent editorcontext="access" />

    </AppContentComponent>
    
    <AppFooterComponent />
  </div>
</template>