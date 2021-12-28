<template>
    <button class="btn">{{text}}</button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent ({
    name: "Button",
    props:{
        text: String,
    }
})
</script>
<style scoped>
    .btn {
    background-color: #ee00f7; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
}
.disable{
    background-color: grey
}
</style>