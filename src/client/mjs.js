import Vue from 'vue';

export var version = "0.0.1";
export var gun = null;

const bus = new Vue();

export default {
    version,
    bus,
    gun,
}