<template>
  <div class="home">
    <AllCatsList  :cats="getCats" />
     <div v-intersection="getAllCats" class="observer"></div>
  </div>
  <Loader  v-show="!isLoaded"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AllCatsList from "@/components/Cats/AllCatsList.vue"
import { mapGetters, mapActions, mapMutations} from 'vuex'

export default defineComponent({
  name: 'Home',
  components: {
   AllCatsList
  },
  methods: {
  ...mapMutations({
    setPage: "allCats/setPage",
    resetPage: "allCats/resetPage"
  }),
  ...mapActions({
    getAllCats: "allCats/getAllCats",
  })
},

  computed:{

   ...mapGetters({
     getCats: "allCats/getCats",
     isLoaded: "allCats/isLoadedState"
   })


},
unmounted(){
  this.resetPage()
}
});
</script>
<style scoped>
.observer {
  height: 30px;
}
</style>