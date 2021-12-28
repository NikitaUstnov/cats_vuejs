<template>
   <img :src="url" :alt="id" width="300" >
</template>
 
<script lang='ts'>
import { defineComponent} from 'vue';
export default defineComponent({
 props: {
    cat: {
      type: Object,
      required: true,
    }
  },
  data(){
      return {
          url: this.cat.url,
          id: this.cat.id
      }
  },
});
</script>
 
<style lang='css' scoped>
 img{
     display: block;
 }
</style>