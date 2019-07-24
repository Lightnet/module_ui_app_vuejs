<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="setCount(count + 1);">+ 1</button>
    <button @click="setCount(count - 1);">- 1</button>
  </div>
</template>

<script>
  import { store, mutations } from "../../mjs";

  export default {
    computed: {
      count() {
        return store.count;
      }
    },
    methods: {
      setCount: mutations.setCount
    }
  };
</script>