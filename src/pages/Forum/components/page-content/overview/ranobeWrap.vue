<template>
    <div>
        <!-- I'm pretty sure you are familiar with my amazing method of choosing the layout with if statements... well,
        it's in this component as well HAHAHAH lol -->

        <div class="wrap column" v-if="wrapState == 0" :class="{'animate': (wrapState != previousState)}">
            <div class="content-box">
                <latestUpdates :ranobe="releasingRanobe"/>
                <topRanobe :ranobe="topRanobe"/>
            </div>
            <div class="content-box">
                <currentlyReading :ranobe="readingRanobe" @expand="setWrap" :state="wrapState"/>
                <infoActivities />
            </div>
        </div>
        <div class="wrap column" v-if="wrapState == 1" :class="{'animate': (wrapState != previousState)}">
            <div class="content-box">
                <currentlyReading :ranobe="readingRanobe" @expand="setWrap" :state="wrapState" />
                <latestUpdates :ranobe="airingRanobe"/>
                <topRanobe :ranobe="topRanobe"/>
            </div>
            <div class="content-box">
                <infoActivities />
            </div>
        </div>
    </div>
</template>

<script>
import latestUpdates from './ranobeWrap/latestUpdates';
import currentlyReading from './ranobeWrap/currentlyReading';
import topRanobe from './ranobeWrap/topRanobe';
import infoActivities from './feedWrap/sidebar/infoActivities';

export default {
    name: 'RanobeWrap',
    components: {
        latestUpdates,
        currentlyReading,
        topRanobe,
        infoActivities
    },
    data() {
        return { // this should contain references to databases from where it will assemble an array of ranobeItems
            wrapState: 0,
            previousState: 0,
            topRanobe: [],
            releasingRanobe: [],
            readingRanobe: []
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
        grid-gap: 10px;
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