<template>
    <div class="overlay">
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default  defineComponent({
    name : "Loader",

})
</script>
<style scoped>
.overlay{
  width: 100%;
  height: 100%;
background-color: rgba(46, 138, 138, 0.4); 
  position: absolute;
   top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%);
}
    .lds-ring {
  display: inline-block;
  position: absolute;
  z-index: 99999;
  width: 80px;
  height: 80px;
   top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%);
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid grey;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: grey transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>