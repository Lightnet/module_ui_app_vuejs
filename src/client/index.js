//===============================================
//
//===============================================
import Vue from 'vue';
import App from './App.vue';
import style from "./global.css";
import Gun from "gun/gun";
import SEA from "gun/sea";
import mjs from "./mjs";
//console.log(Vue);
//===============================================
// Event Hub
//https://medium.com/vuejobs/create-a-global-event-bus-in-vue-js-838a5d9ab03a
Vue.prototype.$eventHub = new Vue(); // Global event bus
//===============================================
// Gun
//console.log(window.location.origin);
//console.log(window.location.hostname);
//var gun = Gun(window.location.origin + "/gun");
var gun;
if(window.location.hostname == "localhost"){//dev mode
  gun = Gun("http://localhost:8080/gun");
}else{
  gun = Gun(window.location.origin + "/gun");
}
Vue.prototype.$gun = gun;
mjs.gun = gun;

gun.on('hi', peer => {//peer connect
  //console.log('connect peer to',peer);
  console.log('peer connect!');
});
gun.on('bye', (peer)=>{// peer disconnect
  //console.log('disconnected from', peer);
  console.log('disconnected from peer!');
});
gun.get('mark').put({
  name: "Mark",
  email: "mark@gunDB.io",
});
gun.get('mark').on(function(data, key){
  console.log("update:", data);
});
//===============================================
// App
var app = new Vue({
  el: '#app',
  render: h => h(App),
});
/*
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});
*/
//console.log(app);