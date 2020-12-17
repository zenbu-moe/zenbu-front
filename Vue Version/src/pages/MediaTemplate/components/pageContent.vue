<template>
    <div class="page-content">
        <div class="banner">
            <div class="banner-cover" :class="{'bright': isExpanded, 'dark': !isExpanded}"></div>
        </div>
        <headerWrap @expand-banner="expand()"/>
        <div class="content">
        </div>
    </div>
</template>

<script>
import headerWrap from './headerWrap';

export default {
    name: 'pageContent',
    components: {
        headerWrap
    },
    data() {
        return {
            isExpanded: false
        }
    },
    methods: {
        expand() {
            this.isExpanded = !this.isExpanded
        }
    }
}
</script>

<style scoped>
    h1 {
        font-family: "Raleway";
        font-size: 1.6rem;
        color: rgb(var(--color-text));
    }

    p {
        color: rgb(var(--color-text));
    }

    .page-content {
        padding-top: 50px;
    }

    .banner {
        height: 360px;
        background-image: url("../assets/bakemonogatari.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .banner-cover {
        height: 360px;
        transition: 0.5s ease-in-out;
    }

    .bright {
        background-color: rgba(18, 15, 19, 0.1);
    }

    .dark {
        background-color: rgba(18, 15, 19, 0.7);
    }

    .content {
        width: 1380px;
        margin: 30px auto 0px auto;
        border-radius: 20px;
        background-color: rgb(var(--color-background-dark));
        height: 2000px;
        transition: 1s;
    }

</style>