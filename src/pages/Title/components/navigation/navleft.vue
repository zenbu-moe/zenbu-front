<template>
    <div class="navleft">
        <div class="logo">
            <a href=""><img src="../../../../assets/logo_light.png" alt="Zenbu"></a>
        </div>
    </div>
</template>

<script>

export default {
    name: 'navleft',
    components: {
   } 
}
</script>

<style scoped>
    .navleft {
        display: inline-flex;
        justify-content: flex-start;
        width: 40%;
        margin-bottom: 1.5px;
    }
    
    .logo {
        margin-right: 5px;
        display: inline-flex;
        align-items: center;
        margin-left: 20px;
        padding: 3px;
    }

    img {
        height: 34px;
    }

    a {
        margin-bottom: -4px;
    }

</style>