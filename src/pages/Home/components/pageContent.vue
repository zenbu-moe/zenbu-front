<template>
    <div class="page-content">
        <div class="sidebar">
            <div class="nav-wrap" @mouseover="sidebarHover = true" @mouseleave="sidebarHover = false">
                <!-- <div class="nav">
                    <button @click="setActive(1)" :class="{'is-active': currentTab == 1}">
                        <i v-if="currentTab != 1" class="fal fa-house"></i>
                        <i v-if="currentTab == 1" class="fas fa-house"></i>                          
                    </button>
                    <button @click="setActive(2)" :class="{'is-active': currentTab == 2}">
                        <i v-if="currentTab != 2" class="fal fa-play-circle"></i>
                        <i v-if="currentTab == 2" class="fas fa-play-circle"></i>                          
                    </button>
                    <button @click="setActive(3)" :class="{'is-active': currentTab == 3}">
                        <i v-if="currentTab != 3" class="fal fa-book-open"></i>
                        <i v-if="currentTab == 3" class="fas fa-book-open"></i>                         
                    </button>
                    <button @click="setActive(4)" :class="{'is-active': currentTab == 4}">
                        <i v-if="currentTab != 4" class="fal fa-book"></i>  
                        <i v-if="currentTab == 4" class="fas fa-book"></i>                       
                    </button>
                    <button @click="setActive(5)" :class="{'is-active': currentTab == 5}">
                        <i v-if="currentTab != 5" class="fal fa-users"></i>
                        <i v-if="currentTab == 5" class="fas fa-users"></i>
                    </button>
                </div> -->
                <div class="nav">
                    <button @click="setActive(1)" :class="{'is-active': currentTab == 1}">
                        <svg-icon icon="light/house" v-if="currentTab != 1"></svg-icon>
                        <svg-icon icon="solid/house" v-if="currentTab == 1"></svg-icon>                          
                    </button>
                    <button @click="setActive(2)" :class="{'is-active': currentTab == 2}">
                        <svg-icon icon="light/play-circle" v-if="currentTab != 2"></svg-icon>
                        <svg-icon icon="solid/play-circle" v-if="currentTab == 2"></svg-icon>                         
                    </button>
                    <button @click="setActive(3)" :class="{'is-active': currentTab == 3}">
                        <svg-icon icon="light/book-open" v-if="currentTab != 3"></svg-icon>
                        <svg-icon icon="solid/book-open" v-if="currentTab == 3"></svg-icon>                        
                    </button>
                    <button @click="setActive(4)" :class="{'is-active': currentTab == 4}">
                        <svg-icon icon="light/book" v-if="currentTab != 4"></svg-icon>
                        <svg-icon icon="solid/book" v-if="currentTab == 4"></svg-icon>                        
                    </button>
                    <button @click="setActive(5)" :class="{'is-active': currentTab == 5}">
                        <svg-icon icon="light/users" v-if="currentTab != 5"></svg-icon>
                        <svg-icon icon="solid/users" v-if="currentTab == 5"></svg-icon>  
                    </button>
                </div>
                <div class="tooltips" v-if="sidebarHover">
                    <p @click="setActive(1)" :class="{'is-active': currentTab == 1}">Feed</p>
                    <p @click="setActive(2)" :class="{'is-active': currentTab == 2}">Anime</p>
                    <p @click="setActive(3)" :class="{'is-active': currentTab == 3}">Manga</p>
                    <p @click="setActive(4)" :class="{'is-active': currentTab == 4}">Light Novels</p>
                    <p @click="setActive(5)" :class="{'is-active': currentTab == 5}">Community</p>
                </div>
            </div>
        </div>
        <div class="wrap">
            <div class="overview" :style="height">
                <!-- uhhhh this is horrible but this is all i'll ever have, and writing it in js is a pain -->
                <!-- this is also funny bc up there in 'nav' buttons arent hardcoded, so i guess i originally
                thought of modular functionality, but this project doesnt require it so cbf -->
                <transition-group :name="(currentTab < previousTab) ? 'slideback' : 'slide'">
                    <feedWrap v-if="currentTab == 1" key="feed"/>
                    <animeWrap v-if="currentTab == 2" key="anime" @set-tab="setBrowseTab"/>
                    <mangaWrap v-if="currentTab == 3" key="manga" @set-tab="setBrowseTab"/>
                    <ranobeWrap v-if="currentTab == 4" key="ranobe" @set-tab="setBrowseTab"/>
                    <communityWrap v-if="currentTab == 5" key="community" @set-tab="setBrowseTab"/>
                </transition-group>
            </div>
        </div>
    </div>
</template>

<script>
import feedWrap from './page-content/overview/feedWrap';
import animeWrap from './page-content/overview/animeWrap';
import mangaWrap from './page-content/overview/mangaWrap';
import ranobeWrap from './page-content/overview/ranobeWrap';
import communityWrap from './page-content/overview/communityWrap';

export default {
   name: 'pageContent', 
   components: {
       feedWrap,
       animeWrap,
       mangaWrap,
       ranobeWrap,
       communityWrap,
   },
   data() {
        return {
            currentTab: 1,
            previousTab: null,
            sidebarHover: false,
        }
    },

    methods: {
        setActive(selectedTab) {
            this.previousTab = this.currentTab;
            this.currentTab = selectedTab;
        },
        setBrowseTab(int) {
            this.$emit('set-tab', int)
        }
    },
}
</script>

<style scoped>
    .page-content {
        margin: auto; 
        height: auto;
        background-color: rgb(var(--color-background));
        transition: 1s;
        overflow: hidden;
        max-width: 100%;
    }

    .wrap {
        max-width: 1130px;
        margin: auto;
    }

    h4 {
        font-family: 'Raleway';
        font-size: 1.1rem;
        padding: 15px;
        margin: 0;
    }

    .sidebar {
        position: absolute;
        top: -147px;
        height: 100%;
        z-index: 2;
        background-color: rgb(var(--color-background-dark), 1);
        width: 50px;
        transition: 0.5s;
    }

    .sidebar:hover {
        background-color: rgb(var(--color-foreground), 1);
        transition: 0.2s;
    }

    .nav-wrap {
        padding: 0px 0px;
        display: flex;
        top: 100px;
        margin: auto;
        transition: 1s;
        margin-bottom: 20px;
        border-radius: 10px;
        /* box-shadow: 0px 1px 2px rgba(0,0,0,0.2); */
        position: fixed;
    }

    .nav {
        /* border-top: 1px solid rgba(var(--color-text), 0.1); */
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        margin: auto;
    }

    button {
        color: rgba(var(--color-text), 0.5);
        font-size: 1.2rem;
        font-weight: bold;
        font-family: "Raleway";
        transition: 0.3s;
        background-color: transparent;
        border: none;
        padding: 15px;
        text-align: start;
        cursor: pointer;
        display: flex;
        align-items: center;
        margin: 2px 0;
    }

    button p {
        margin: 0 0 0 30px;
        padding: 0;
    }

    .is-active {
        color: rgba(var(--color-text), 0.8);
        /* border-bottom: 2px solid rgba(var(--color-text), 0.5); */
    }

    button:hover {
        /* border-bottom: 2px solid rgba(var(--color-text), 0.5); */
        transition: 0.1s;
    }

    .tooltips {
        color: rgba(var(--color-text), 0.5);
        font-size: 1.2rem;
        font-weight: bold;
        font-family: "Raleway";
        transition: 0.3s;
        white-space: nowrap;
        background-color: transparent;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        padding: 15px;
        margin: 1px 0;
        animation: fadeIn 0.2s;
        cursor: pointer;
    }

    .tooltips p {
        margin: 0px 0;
    }

    .overview {
        /* padding: 10px; */
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

    .visible {
        visibility: visible;
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