<template>
    <div class="page-content">
        <div class="banner-wrap">
            <div v-if="editOn" class="banner"></div>
        </div>
        <div class="overview-wrap">
            <headerWrap @toggle-edit="toggleEdit()" :edit="editOn"/>
            <overview :edit="editOn"/>
        </div>
    </div>
</template>

<script>
import headerWrap from './page-content/headerWrap';
import overview from './page-content/overview'

export default {
   name: 'pageContent', 
   components: {
       headerWrap,
       overview
   },
   data() {
        return {
            editOn: false,
        }
    },

    methods: {
        toggleEdit() {
            this.editOn = !this.editOn
        }
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
        background-color: rgba(var(--color-background), 0.5);
        height: 100%;
    }

    .overview-wrap {
        margin: auto;
        border-radius: 20px;
        margin-top: -50px;
        transition: 1s;
        height: auto;
        padding-bottom: 50px;
    }
</style>