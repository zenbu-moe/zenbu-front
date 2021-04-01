<template>
    <div class="page-content">
        <div class="banner">
            <div class="banner-cover" :class="{'bright': isExpanded, 'dark': !isExpanded}"></div>
        </div>
        <headerWrap @expand-banner="expand()" :currentTab="currentTab" @set-tab="setTab"/>
        <!-- <div class="button-jump" @click="scroll()">
            <p>Jump to reviews</p>
        </div> -->
        <div class="nav">
            <p @click="currentTab = 0" :class="{'active': currentTab == 0, 'inactive': currentTab != 0}">Overview</p>
            <p @click="currentTab = 1" :class="{'active': currentTab == 1, 'inactive': currentTab != 1}">Relations</p>
            <p @click="currentTab = 2" :class="{'active': currentTab == 2, 'inactive': currentTab != 2}">Characters</p>
            <p @click="currentTab = 3" :class="{'active': currentTab == 3, 'inactive': currentTab != 3}">Staff</p>
            <p @click="currentTab = 4" :class="{'active': currentTab == 4, 'inactive': currentTab != 4}">Reviews</p>
            <p @click="currentTab = 5" :class="{'active': currentTab == 5, 'inactive': currentTab != 5}">Social</p>
        </div>
        <div class="overview">
            <contentWrap v-if="currentTab == 0"/>
            <relations v-if="currentTab == 1"/>
            <contentWrap v-if="currentTab == 2"/>
            <contentWrap v-if="currentTab == 3"/>
            <reviewWrap v-if="currentTab == 4"/>
            <contentWrap v-if="currentTab == 5"/>
        </div>
    </div>
</template>

<script>
import headerWrap from './headerWrap';
import reviewWrap from './reviewWrap';
import contentWrap from './content';
import relations from './relations';

export default {
    name: 'pageContent',
    components: {
        headerWrap,
        contentWrap,
        reviewWrap,
        relations
    },
    data() {
        return {
            isExpanded: false,
            currentTab: 0,
            previousTab: null,
        }
    },
    methods: {
        expand() {
            this.isExpanded = !this.isExpanded
        },
        /* scroll() {
            this.$refs.review.$refs.review.scrollIntoView()
        }, */
        setTab(int) {
            this.previousTab = this.currentTab
            this.currentTab = int
        }
    }
}
</script>

<style scoped>
    h1 {
        font-size: 1.6rem;
        color: rgb(var(--color-text));
    }

    p {
        color: rgb(var(--color-text));
        margin: 0;
    }

    .page-content {
        padding-top: 50px;
        position: relative;
        overflow: hidden;
    }

    .nav {
        display: flex;
        width: 1380px;
        margin: 40px auto 0 auto;
        align-items: flex-end;
    }

    .nav p {
        font-weight: 500;
        margin: 0 30px 0 0;
        cursor: pointer;
    }

    .inactive {
        font-size: 1.5rem;
        color: rgba(var(--color-text), 0.5);
    }

    .active {
        font-size: 1.8rem;
        color: rgba(var(--color-text), 1);
        animation: zoomIn 0.2s;
    }

    .overview {
        width: auto;
        margin: auto;
        display: grid;
        border-radius: 10px;
        transition: 1s;
        grid-template-columns: 1fr;
    }

    .overview div {
        grid-row-start: 1;
        grid-column-start: 1;
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

    .button-jump {
        padding: 5px 10px;
        position: absolute;
        left: calc(50% - 100px);
        background-color: rgb(var(--color-foreground));
        width: 200px;
        margin: 30px auto 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 30px;
        cursor: pointer;
        z-index: 0;
    }

    .slide-leave-active,
    .slide-enter-active {
        transition: 1s;
    }

    .slide-enter-from {
        transform: translate(150%, 0);
    }

    .slide-leave-to {
        transform: translate(-150%, 0);
    }

    .slideback-leave-active,
    .slideback-enter-active {
        transition: 1s;
    }

    .slideback-enter-from {
        transform: translate(-150%, 0);
    }

    .slideback-leave-to {
        transform: translate(150%, 0);
    }
</style>