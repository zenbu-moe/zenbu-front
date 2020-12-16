<template>
    <div>
        <!-- this looks horrible bc it is, sorry for that... layout is determined by current 'wrapState' which is ok
        but then i build layout with if-statements... not very modular but who cares, 3 states is all i'll ever have
        
        well maybe 4 or 5, but adding 1 or 2 isnt really an issue.. takes less time than fucking with javascript trust me -->

        <div class="wrap column" v-if="wrapState == 0">
            <feed :state="wrapState"/>
            <div class="content-box" >
                <infoActivities @set-wrap="setWrap" :state="wrapState"/>
                <infoActivitiesFriend @set-wrap="setWrap" @expand="expandActivity" :state="wrapState"/>
            </div>
        </div>
        <div class="wrap activities" v-if="wrapState == 1">
            <div class="wrap column">
                <div class="content-box">
                    <infoActivities @set-wrap="setWrap(0)" :state="wrapState"/>
                </div>
                <div class="content-box">
                    <infoActivitiesFriend @set-wrap="setWrap" @expand="expandActivity" :state="wrapState"/>
                </div>
            </div>
            <div class="wrap column">
                <feed :state="wrapState"/>
            </div>           
        </div>
        <div class="wrap activities" v-if="wrapState == 2">
            <div class="wrap column">
                <div class="content-box">
                    <infoActivitiesFriend @set-wrap="setWrap(0)" :state="wrapState" :expanded="expandedActivity"/>
                </div>
                <div class="content-box">
                    <infoActivities @set-wrap="setWrap" :state="wrapState"/>
                </div>
            </div>
            <div class="wrap column">
                <feed :state="wrapState"/>
            </div> 
        </div>
    </div>
</template>

<script>
import feed from './feedWrap/feed';
import infoActivities from './feedWrap/sidebar/infoActivities';
import infoActivitiesFriend from './feedWrap/sidebar/infoActivitiesFriend';

export default {
    name: 'feedWrap',
    components: {
        feed,
        infoActivities,
        infoActivitiesFriend
    },
    data() {
        return {
            wrapState: 0, // layout state (0 - default, feed in focus; 1 - user activities in focus; 2 - friend activities in focus)
            expandedActivity: null // records if any activity had repliesExpand called from within it before DOM update
        }
    },
    methods: {  // below are some shenanigans that set some values to some parameters that you should care about its all frontend anyways
        setWrap(id) {
            this.wrapState = id;
        },
        expandActivity(id) {
            this.expandedActivity = id
        }
    }
}
</script>

<style scoped>
    .wrap {
        display: grid;
        grid-gap: 10px;
        animation: fadeInUp 0.5s;
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