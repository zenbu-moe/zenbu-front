<template>
    <div class="page-content">
         <div class="nav">
             <div v-for="tab in tabs" :key="tab.id">
                <button @click="setActive(tab.id)" :class="{'is-active': currentTab == tab.id}">{{tab.title}}</button>
            </div>
        </div>
        <div class="overview">
            <feedWrap v-if="currentTab == 1" />
            <animeWrap v-if="currentTab == 2" />
            <mangaWrap v-if="currentTab == 3" />
            <ranobeWrap v-if="currentTab == 4" />
            <communityWrap v-if="currentTab == 5" />
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
                    title: 'Feed',
                    content: 'feedWrap'
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

            currentTab: 1
        }
    },

    methods: {
        setActive(selectedTab) {
            this.currentTab = selectedTab
        }
    }
}
</script>

<style scoped>
    .page-content {
        max-width: 1280px;
        margin: auto; 
        height: auto;
        background-color: rgb(240,242,245);
        border-radius: 10px;
    }

    .nav {
        padding: 0px 0px;
        border-radius: 10px;
        background-color: rgba(50,44,55,1.00);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    button {
        color: white;
        margin: auto 50px;
        font-size: 1.2rem;
        font-weight: 400;
        font-family: "Raleway", sans-serif;
        text-decoration: none;
        transition: 0.3s;
        padding: 13px 0px 13px 0px;
        background-color: transparent;
        border-left: none;
        border-right: none;
        border-top: 2px solid rgba(0,0,0,0.00);
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
        padding: 12px;
        height: auto;
    }

    .visible {
        visibility: visible;
    }

</style>