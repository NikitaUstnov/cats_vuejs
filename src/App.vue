<template>
<Navbar />
<div class="container">
    <router-view></router-view>
</div>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import Navbar from "@/components/UI/Navbar.vue"

export default defineComponent({
components:{
    Navbar
}
})

</script>

<style>
*{
   margin: 0;
    box-sizing: border-box;
}

    .container {
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        justify-content: center;

        width: 100%;
        max-width: 1280px;
        margin-left: auto;
        margin-right: auto;
    }
</style>