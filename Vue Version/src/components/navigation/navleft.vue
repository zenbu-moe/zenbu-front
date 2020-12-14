<template>
    <div class="navleft">
        <div class="logo">
            <img src="../../assets/logo_light.png" alt="Zenbu">
        </div>
        <search />
    </div>
</template>

<script>
import search from './search/search'

export default {
    name: 'navleft',
    components: {
        search
   } 
}
</script>

<style scoped>
    .navleft {
        display: inline-flex;
        justify-content: flex-start;
        width: 30%;
        margin-bottom: 3px;
    }
    
    .logo {
        margin-right: 5px;
        display: inline-flex;
        margin-left: 20px;
        padding: 3px;
    }

    img {
        height: 34px;
    }

</style>