<template>
     <div class="activity-entry">
        <a href="" class="cover" style="background-image: url('images/akudama.png')"></a>
        <div class="details">
            <h3><a>{{ activity.title }}</a></h3>
            <p v-if="activityState == 0">Plans to watch <a>{{ activity.title }}</a></p>
            <p v-if="activityState == 1">Watched episode {{ activity.episodesWatched }}/{{ activity.episodesTotal }} of <a>{{ activity.title }}</a></p>
            <p v-if="activityState == 2">Dropped <a>{{ activity.title }}</a></p>
            <p v-if="activityState == 3">Completed <a>{{ activity.title }}</a></p>
            <div class="progress">
                <div class="progress-state" id="anime_id"
                    :class="{
                        'planned':activityState == 0,
                        'watching':activityState == 1,
                        'dropped':activityState == 2,
                        'completed':activityState == 3
                        }"
                    :style="[activityState == 1 ? displayProgress : 'width: 100%']"
                >
                    <p class="count">{{ activity.episodesWatched }}</p>
                </div>
            </div>
            <!--
            <div class='debugging-buttons'>
                <button @click="setState(0)">P</button>
                <button @click="setState(1)">W</button>
                <button @click="setState(2)">D</button>
                <button @click="setState(3)">C</button>
                <button @click="setProgress('0%')">0%</button>
                <button @click="setProgress('25%')">25%</button>
                <button @click="setProgress('50%')">50%</button>
                <button @click="setProgress('75%')">75%</button>
                <button @click="setProgress('100%')">100%</button>
                <button @click="getProgress()">X</button>
            </div>
            -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'activityEntry',
    data() {
        return {
            activityState: this.activity.progressState,
            displayProgress: {
                width: '0%'
            },
        }
    },
    methods: {
        setProgress(progress) {
            this.displayProgress.width = progress
        },
        setState(state) {
            this.activityState = state
        },
        getProgress() {
            var progress = this.activity.episodesWatched / this.activity.episodesTotal * 100;
            var width = progress.toString(10) + '%'
            this.setProgress(width)
        }
    },
    beforeMount() {
        this.getProgress()
    },
    props: ["activity"]
}
</script>

<style scoped>
    a {
        cursor: pointer;
    }

    p {
        color: rgb(var(--color-text));
        transition: 1s;
    }

    .activity-entry {
        padding: 12px;
        display: flex;
        align-items: center;
    }

    .activity-entry .cover {
        min-width: 60px;
        min-height: 84px;
        border-radius: 10px;
        display: inline-block;
        background-color: rgb(var(--color-foreground-dark));
        background-size: cover;
        background-position: center;
        transition: 1s;
    }

    .activity-entry .details {
        max-height: 84px;
        margin-left: 15px;
        width: 100%;
    }

    .activity-entry .details h3 {
        margin: 0px;
        font-size: 16px;
    }

    .activity-entry .details p {
        margin-top: 7px;
        font-size: 0.85rem;
    }

    .activity-entry .details .progress {
        background-color: rgba(var(--color-activity-progress-background));
        width: 100%;
        border-radius: 10px;
        transition: 1s;
    }

    .progress-state {
        align-items: center;
    }

    #anime_id {  
        border-radius: 10px;
        text-align: center;
    }

    .watching {
        background-color: rgba(112,192,100,1.00);
    }

    .completed {
        background-color: rgb(77, 99, 223);
    }

    .planned {
        background-color: transparent;
    }

    .dropped {
        background-color: rgb(224, 102, 102);
    }

    .count {
        font-size: 0.8rem;
        color: white;
        font-weight: 700;
        margin: 0;
    }

    .debugging-buttons {
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
    }

    .debugging-buttons button {
        width: 20px;
        font-size: 10px;
        text-align: center;
        border: none;
    }

    .debugging-buttons button:active {
        background-color: rgb(77, 99, 223);
    }

</style>