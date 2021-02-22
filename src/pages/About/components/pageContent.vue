<template>
    <div class="page-content">
        <div class="banner-wrap">
            <div v-if="editOn" class="banner"></div>
            <btn v-if="editOn" class="upload"><i class="fal fa-pen"></i>Edit banner</btn>
        </div>
        <div class="overview-wrap">
            <headerWrap @toggle-edit="toggleEdit()" :edit="editOn"/>
            <overviewWrap :edit="editOn" ref="oww"/>
        </div>
    </div>
</template>

<script>
import headerWrap from './page-content/headerWrap';
import overviewWrap from './page-content/overviewWrap'

export default {
   name: 'pageContent', 
   components: {
       headerWrap,
       overviewWrap
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

    .upload {
        display: flex;
        align-items: center;
    }

    .upload i {
        margin-right: 7px;
    }

    btn {
        position: absolute;
        top: 70px;
        left: 10px;
        background-color: rgba(var(--color-foreground), 0.2);
        color: rgb(var(--color-text));
        font-family: "Raleway";
        padding: 10px;
        transition: 0.5s;
        animation: zoomIn 0.3s;
        border-radius: 15px;
        cursor: pointer;
    }   

    btn:hover {
        transition: 0.2s;
        background-color: rgba(var(--color-foreground), 1);
    }
</style>