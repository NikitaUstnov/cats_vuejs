<template>
 <header class="header" ref="head">
        <div class="logo" @click="$router.push('/')">InstaCats</div>
        <nav class="navbar">
         <div><Button style="margin-right: 15px" text="Home" @click="$router.push('/')" /></div>
         <div><Button style="margin-right: 15px" text="View" @click="$router.push('/cats/my')"/></div>
         <div><Button style="margin-right: 15px" text="Upload" @click="$router.push('/cats/new')"/></div>
        </nav>
    </header>
</template>
 
<script lang='ts'>
import { defineComponent, ref, onMounted} from 'vue';
 
export default defineComponent({

setup() {
    const head = ref()

onMounted(() => {
    window.onscroll = function() {myFunction()};
    const header = head.value;
    const sticky = header.offsetTop;
    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    } 
})
return {head: head}
}

});
</script>
 
<style lang='css' scoped>
.logo{
font-size: 23px;
font-weight: bold;

color: white;
}
.header {
 /* width: 100%; */
padding: 10px;
background-color: teal;
display: flex;
justify-content: space-between;
align-items: center;
}

.sticky {
position: fixed;
top: 0;
width: 100%
}
.navbar{
    display: flex;
}
 
</style>