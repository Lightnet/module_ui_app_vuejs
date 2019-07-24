import Vue from 'vue';

export var version = "0.0.1";
export var gun = null;

const bus = new Vue();

export const store = Vue.observable({
    count: 0,
    username:"unknown",
    loginid:"",
    password:"Guest",
    epriv:"",
    epub:"",
    priv:"",
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
    setSea(sea){
        store.epriv = sea.epriv;
        store.epub = sea.epub;
        store.priv = sea.priv;
        store.pub = sea.pub;
    },
    pair(){
        return {
            epriv:store.epriv,
            epub:store.epub, 
            priv:store.priv,
            pub:store.pub
        }
    }
};

export default {
    version,
    bus,
    gun,
}