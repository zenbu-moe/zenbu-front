<template>
    <div>
        <!-- Based on the value of 'wrapState', different layout is chosen (0 is default) -->
        <div class="wrap column" v-if="wrapState == 0" :class="{'animate': (wrapState != previousState)}"> 
            <div class="content-box">
                <topGroups :group="topGroups" :state="wrapState" @set-wrap="setState"/>
                <recentGroups @set-wrap="setState" :expanded="expandedGroupActivity" @expand="expandGroupActivity" :state="wrapState"/>
            </div>
            <div class="content-box">
                <recentUserUpdates @expand="expandUserActivity" @set-wrap="setState" :state="wrapState"/>
                <recentThreads />
            </div>
        </div>
        <div class="wrap column" v-if="wrapState == 1" :class="{'animate': (wrapState != previousState)}">
            <div class="content-box">
                <recentUserUpdates @expand="expandUserActivity" @set-wrap="setState(0)" :state="wrapState" :expanded="expandedUserActivity"/>
            </div>
            <div class="content-box">
                <recentGroups @set-wrap="setState" :expanded="expandedGroupActivity" @expand="expandGroupActivity" :state="wrapState"/>
                <topGroups :group="topGroups" :state="wrapState" @set-wrap="setState"/>
            </div>
        </div>
        <div class="wrap column" v-if="wrapState == 2" :class="{'animate': (wrapState != previousState)}">
            <div class="content-box">
                <recentGroups @set-wrap="setState(0)" :expanded="expandedGroupActivity" @expand="expandGroupActivity" :state="wrapState"/>
            </div>
            <div class="content-box">
                <recentUserUpdates @expand="expandUserActivity" @set-wrap="setState" :state="wrapState" :expanded="expandedUserActivity"/>
                <topGroups :group="topGroups" :state="wrapState" @set-wrap="setState"/>
            </div>
        </div>
    </div>
</template>

<script>
import topGroups from './communityWrap/topGroups';
import recentGroups from './communityWrap/recentGroups';
import recentUserUpdates from './communityWrap/recentUserUpdates';
import recentThreads from './communityWrap/recentThreads';

export default {
    name: 'communityWrap',
    components: {
        topGroups,
        recentGroups,
        recentUserUpdates,
        recentThreads
    },
    data () {
        return {
            wrapState: 0, // Layout state
            previousState: 0,
            expandedGroupActivity: null, // records the activity from which repliesExpand was emitted before DOM update
            expandedUserActivity: null, // records the activity from which repliesExpand was emitted before DOM update
            topGroups: [],
        }
    },
    methods: {
        setState(id) {
            this.previousState = this.wrapState;
            this.wrapState = id // sets certain layout style (0 - default, top groups in focus; 1 - user feed in focus; 2 - group feed in focus)
        },
        expandUserActivity(id) {
            this.expandedUserActivity = id // sets the thing to id
        },
        expandGroupActivity(id) {
            this.expandedGroupActivity = id // sets the thing to id
        }  
    },
    updated() {
        this.expandedGroupActivity = null // sets the thing to null
        this.expandedUserActivity = null // sets the thing to null
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

    .row {
        grid-template-rows: auto 450px;
    }

    .column {
        grid-template-columns: auto 450px;
    }

    .activities {
        grid-template-rows: auto auto;
    }

    .content-box {
        padding: 10px;
    }
</style>