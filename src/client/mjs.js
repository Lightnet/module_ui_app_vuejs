import Vue from 'vue';

export var version = "0.0.1";
export var gun = null;

const bus = new Vue();

export const store = Vue.observable({
    count: 0,
    username:"unknown",
    loginid:"",
    password:"Guest",
    pub:"",
    hashid:"",
    sessionhash:"",
    accesskey:"",
    blogin:false,
});

export const mutations = {
    setCount(count) {
      store.count = count;
    },
    setUser(value){
        store.username = value;
    },
    setHashID(value){
        store.hashid = value;
    },
    setLogin(value){
        store.blogin = value;
    },
    setPub(value){
        store.pub = value;
    }
};

export default {
    version,
    bus,
    gun,
}