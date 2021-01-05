<template>
    <div class="page-content">
         <div class="nav">
             <div v-for="tab in tabs" :key="tab.id">
                <button @click="setActive(tab.id)" :class="{'is-active': currentTab == tab.id}">{{tab.title}}</button>
            </div>
        </div>
        <div class="wrap">
            <div class="overview" :style="height">
                <!-- uhhhh this is horrible but this is all i'll ever have, and writing it in js is a pain -->
                <!-- this is also funny bc up there in 'nav' buttons arent hardcoded, so i guess i originally
                thought of modular functionality, but this project doesnt require it so cbf -->
                <transition-group :name="(currentTab < previousTab) ? 'slideback' : 'slide'">
                    <feedWrap v-if="currentTab == 1" key="feed"/>
                    <animeWrap v-if="currentTab == 2" key="anime"/>
                    <mangaWrap v-if="currentTab == 3" key="manga"/>
                    <ranobeWrap v-if="currentTab == 4" key="ranobe"/>
                    <communityWrap v-if="currentTab == 5" key="community"/>
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
       communityWrap
   },
   data() {
        return {
            tabs: [
                {
                    id: 1,
                    title: 'Feed'
                },
                {
                    id: 2,
                    title: 'Anime',
                },
                 {
                    id: 3,
                    title: 'Manga',
                },
                 {
                    id: 4,
                    title: 'Ranobe',
                },
                 {
                    id: 5,
                    title: 'Community',
                }
                
            ],

            currentTab: 1,
            previousTab: null
        }
    },

    methods: {
        setActive(selectedTab) {
            this.previousTab = this.currentTab;
            this.currentTab = selectedTab;
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
        max-width: 1280px;
    }

    .wrap {
        max-width: 1280px;
        margin: auto;
    }

    .nav {
        padding: 0px 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(var(--color-navigation));
        max-width: 1280px;
        border-radius: 10px;
        margin: auto;
        transition: 1s;
        margin-bottom: 20px;
    }

    button {
        color: white;
        margin: auto 50px;
        font-size: 1.2rem;
        font-weight: 400;
        font-family: "Raleway", sans-serif;
        text-decoration: none;
        transition: 0.3s;
        padding: 15px 0px 15px 0px;
        background-color: transparent;
        border-left: none;
        border-right: none;
        border-top: 2px solid rgba(0,0,0,0.00);
        border-bottom: 2px solid rgba(var(--color-navigation));
        cursor: pointer;
    }

    .is-active {
        border-bottom: 2px solid white;
    }

    button:hover {
        border-bottom: 2px solid white;
        transition: 0.1s;
    }

    .overview {
        padding: 10px;
        width: 1280px;
        margin: auto;
        display: grid;
        background-color: rgb(var(--color-background-dark));
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
        transform: translate(100%, 0);
    }

    .slide-leave-to {
        transform: translate(-100%, 0);
    }

    .slideback-leave-active,
    .slideback-enter-active {
        transition: 1s;
    }

    .slideback-enter-from {
        transform: translate(-100%, 0);
    }

    .slideback-leave-to {
        transform: translate(100%, 0);
    }

</style>