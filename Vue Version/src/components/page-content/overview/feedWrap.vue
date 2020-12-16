<template>
    <div>
        <div class="wrap column" v-if="wrapState == 0">
            <feed />
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
                <feed />
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
                <feed />
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
            wrapState: 0,
            expandedActivity: 0
        }
    },
    methods: {
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