<script>
import uuidv4 from "uuid/v4";
export default {
  components:{

  },
  data() {
    return {
      id:uuidv4()
    }
  },
};
</script>
<style>
  .splittercomp{
    width:100%;
    height:10px;
    background-color: #000000;
    color: white;
  }
</style>
<template>
  <div :id="id" class="splittercomp">
  </div>
</template>