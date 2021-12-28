<template>
<div class="grid" v-if="cats.length > 0">
    <CatCard   v-for="cat in cats" :key="cat.id" :cat="cat"/>
</div>
<div v-else>Котов нет</div>
</template>
 
<script lang='ts'>
import { defineComponent} from 'vue';
import CatCard from "@/components/Home/CatCard.vue"
export default defineComponent({
    components: {CatCard},
  props: {
    cats: {
      type: Array,
      required: true
    }
  }
});
</script>
 
<style lang='css' scoped>

.grid{
display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: auto;

  margin-top: 30px
}
 
</style>