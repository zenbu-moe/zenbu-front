<template>
    <div class="wrap">
        <div class="nav">
            <h2 @click="currentTab = 0" :class="{'active': (currentTab == 0)}">Browse</h2>
            <h2 @click="currentTab = 1" :class="{'active': (currentTab == 1)}">Trending</h2>
            <h2 @click="currentTab = 2" :class="{'active': (currentTab == 2)}">Top Anime</h2>
            <h2 @click="currentTab = 3" :class="{'active': (currentTab == 3)}">Top Manga</h2>
            <h2 @click="currentTab = 4" :class="{'active': (currentTab == 4)}">Top Light Novels</h2>
            <h2 @click="currentTab = 5" :class="{'active': (currentTab == 5)}">Community</h2>
        </div>
        <searchHeader v-if="currentTab == 0"/>
        <communitySearch v-if="currentTab == 5" />
    </div>
</template>

<script>
import searchHeader from './searchHeader'
import communitySearch from './communitySearch'

export default {
    name: 'pageContent',
    props: ["tab"],
    components: {
        searchHeader,
        communitySearch
    },
    data() {
        return {
            currentTab: 0,
        }
    },
    beforeMount() {
        this.currentTab = this.tab
        window.scrollTo(0,0)
    }
}
</script>

<style scoped>
    .wrap {
        width: 1280px;
        margin: 100px auto 0px auto;
        min-height: 1000px;
    }

    .nav {
        display: flex;
        align-items: baseline;
    }

    h2 {
        font-size: 1.2rem;
        color: rgba(var(--color-text), 0.5);
        margin-right: 30px;
        cursor: pointer;
    }

    .active {
        color: rgba(var(--color-text), 1);
        font-size: 1.8rem;
        animation: zoomIn 0.2s;
    }
</style>