<template>
    <div class="page-content">
        <div class="banner-wrap">
            <div class="banner"></div>
        </div>
        <div class="overview-wrap">
            <headerWrap />
            <overview />
        </div>
    </div>
</template>

<script>
import headerWrap from './page-content/overview/headerWrap';
import overview from './page-content/overview/overview'

export default {
   name: 'pageContent', 
   components: {
       headerWrap,
       overview
   },
   data() {
        return {
            
        }
    },

    methods: {

    },
}
</script>

<style scoped>
    .page-content {
        background-color: rgb(var(--color-background));
        transition: 1s;
        margin-top: 50px;
    }

    .banner-wrap {
        height: 350px;
        transition: 1s;
        background-image: url("../assets/banner.jpg");
        background-size: cover;
        background-position: 50% 0%;
        background-repeat: no-repeat;
    }

    .banner {
        background-color: rgba(0,0,0,0);
        height: 100%;
    }

    .overview-wrap {
        width: 1400px;
        margin: auto;
        border-radius: 20px;
        margin-top: -280px;
        transition: 1s;
        height: auto;
        padding-bottom: 50px;
    }
</style>