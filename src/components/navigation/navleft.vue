<template>
    <div class="navleft">
        <router-link to="/" class="logo">
            <a href=""><img src="../../assets/logo_light.png" alt="Zenbu"></a>
        </router-link>
        <search @open-search="$emit('open-search')" @on-type="onType" />
    </div>
</template>

<script>
import search from './search/search'

export default {
    name: 'navleft',
    components: {
        search
   },
   methods: {
       onType(str) {
           console.log(str)
           this.$emit('on-type', str)
       }
   },
}
</script>

<style scoped>
    .navleft {
        display: inline-flex;
        justify-content: flex-start;
        width: 33%;
        margin-bottom: 1.5px;
    }
    
    .logo {
        margin-right: 5px;
        display: inline-flex;
        align-items: center;
        margin-left: 5px;
        padding: 3px;
    }

    img {
        height: 34px;
    }

    a {
        margin-bottom: -4px;
    }

</style>