<template>
    <div>
        <!-- I'm pretty sure you are familiar with my amazing method of choosing the layout with if statements... well,
        it's in this component as well HAHAHAH lol -->

        <div class="wrap column" v-if="wrapState == 0" :class="{'animate': (wrapState != previousState)}">
            <div class="content-box">
                <latestUpdates :manga="releasingManga"/>
                <topManga :manga="topManga"/>
                <topManhwa :manga="topManhwa"/>
                <topManhua :manga="topManhua"/>
            </div>
            <div class="content-box">
                <currentlyReading :manga="readingManga" @expand="setWrap" :state="wrapState"/>
                <infoActivities />
            </div>
        </div>
        <div class="wrap column" v-if="wrapState == 1" :class="{'animate': (wrapState != previousState)}"> 
            <div class="content-box">
                <currentlyReading :manga="readingManga" @expand="setWrap" :state="wrapState" />
                <latestUpdates :manga="airingManga"/>
                <topmanga :manga="topManga"/>
                <topManhwa :manga="topManhwa"/>
                <topManhua :manga="topManhua"/>
            </div>
            <div class="content-box">
                <infoActivities />
            </div>
        </div>
    </div>
</template>

<script>
import latestUpdates from './mangaWrap/latestUpdates';
import currentlyReading from './mangaWrap/currentlyReading';
import topManga from './mangaWrap/topManga';
import topManhwa from './mangaWrap/topManhwa';
import topManhua from './mangaWrap/topManhua';
import infoActivities from './feedWrap/sidebar/infoActivities';

export default {
    name: 'mangaWrap',
    components: {
        latestUpdates,
        currentlyReading,
        topManga,
        topManhwa,
        topManhua,
        infoActivities
    },
    data() {
        return { // this should contain references to databases from where it will assemble an array of mangaItems
            wrapState: 0,
            previousState: 0,
            topManga: [],
            topManhwa: [],
            topManhua: [],
            releasingManga: [],
            readingManga: []
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