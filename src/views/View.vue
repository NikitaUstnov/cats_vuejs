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
    setPage: "myCats/setPage",
    resetPage: "myCats/resetPage"
  }),
  ...mapActions({
    getAllCats: "myCats/getAllCats",
  })
},

  computed:{

   ...mapGetters({
     getCats: "myCats/getCats",
     isLoaded: "myCats/isLoadedState"
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