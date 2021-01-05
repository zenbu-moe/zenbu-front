<template>
    <div>
        <!-- I'm pretty sure you are familiar with my amazing method of choosing the layout with if statements... well,
        it's in this component as well HAHAHAH lol -->

        <div class="wrap column" v-if="wrapState == 0" :class="{'animate': (wrapState != previousState)}">
            <div class="content-box">
                <latestUpdates :anime="airingAnime"/>
                <topAnime :anime="topAnime"/>
                <seasonalAnime :anime="seasonalAnime"/>
            </div>
            <div class="content-box">
                <currentlyWatching :anime="watchingAnime" @expand="setWrap" :state="wrapState" />
                <infoActivities />
            </div>
        </div>
        <div class="wrap column" v-if="wrapState == 1" :class="{'animate': (wrapState != previousState)}">
            <div class="content-box">
                <currentlyWatching :anime="watchingAnime" @expand="setWrap(0)" :state="wrapState" />
                <latestUpdates :anime="airingAnime"/>
                <topAnime :anime="topAnime"/>
                <seasonalAnime :anime="seasonalAnime"/>
            </div>
            <div class="content-box">
                <infoActivities />
            </div>
        </div>
    </div>
</template>

<script>
import latestUpdates from './animeWrap/latestUpdates';
import currentlyWatching from './animeWrap/currentlyWatching';
import topAnime from './animeWrap/topAnime';
import seasonalAnime from './animeWrap/seasonalAnime';
import infoActivities from './feedWrap/sidebar/infoActivities';

export default {
    name: 'animeWrap',
    props: ["tab"],
    components: {
        latestUpdates,
        currentlyWatching,
        topAnime,
        seasonalAnime,
        infoActivities
    },
    data() {
        return { // this should contain references to databases from where it will assemble an array of animeItems
            wrapState: 0,
            previousState: 0,
            topAnime: [],
            airingAnime: [],
            seasonalAnime: [],
            watchingAnime: []
        }
    },
    methods: {
        setWrap(id) {
            this.previousState = this.wrapState
            this.wrapState = id
        }
    }
}
</script>

<style scoped>
    .wrap {
        display: grid;
        grid-gap: 20px;
    }

    .animate {
        animation: zoomIn 0.3s;
    }

    .column {
        grid-template-columns: auto 440px;
    }

    .content-box {
        padding: 10px;
    }

</style>