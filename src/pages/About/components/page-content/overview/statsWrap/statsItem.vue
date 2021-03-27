<template>
    <div class="stat-item" @click="computeProgress">
        <div class="progress">
            <progressCircle :radius="60" :progress="100" :stroke="10" :strokeColor="'transparent'" />
            <progressCircle class="progress-circle" :style="{ transform: 'rotate(' + (((stats.completed + stats.inProgress + stats.dropped)/ total) * 360 - 90) + 'deg)' }" :radius="75" :progress="stats.planning / total * 100" :stroke="15" :strokeColor="'rgb(var(--color-planning))'" />
            <progressCircle class="progress-circle" :style="{ transform: 'rotate(' + (((stats.completed + stats.inProgress)/ total) * 360 - 90) + 'deg)' }" :radius="75" :progress="stats.dropped / total * 100" :stroke="15" :strokeColor="'rgb(var(--color-dropped))'" />
            <progressCircle class="progress-circle" :style="{ transform: 'rotate(' + (((stats.completed)/ total) * 360 - 90) + 'deg)' }" :radius="75" :progress="stats.inProgress / total * 100" :stroke="15" :strokeColor="'rgb(var(--color-watching))'" />
            <progressCircle class="progress-circle" :style="{ transform: 'rotate(-90deg)' }" :radius="75" :progress="stats.completed / total * 100" :stroke="15" :strokeColor="'rgb(var(--color-completed))'" />
            <div class="total">
                <p class="number">{{ total }}</p>
                <p class="media">{{ stats.name }}</p>
            </div>
        </div>
        <div class="stat-entry" v-if="stats.name == 'Anime'">
            <p class="number">101.2</p>
            <p>Days watched</p>
        </div>
        <div class="stat-entry" v-if="stats.name == 'Manga'">
            <p class="number">12131</p>
            <p>Chapters read</p>
        </div>
        <div class="stat-entry" v-if="stats.name == 'Novels'">
            <p class="number">687</p>
            <p>Volumes read</p>
        </div>
        <div class="stat-entry">
            <p class="number">6.8</p>
            <p>Mean score</p>
        </div>
    </div>
</template>

<script>
import progressCircle from './progressCircle'

export default {
    name: "statsItem",
    components: {
        progressCircle
    },
    props: ["stats"],
    data() {
        return { 
            total: null,
        }
    },
    methods: {
        computeProgress() {

        }
    },
    beforeMount() {
        this.total = this.stats.completed + this.stats.inProgress + this.stats.dropped + this.stats.planning
    },
}
</script>

<style scoped>
    .stat-item {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .stat-entry {
        display: flex;
        align-items: center;
        margin: 5px 0px;
    }

    .stat-entry p {
        margin: 0px 10px 0px 0px;
    }

    .progress {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .progress-circle {
        position: absolute;
    }

    .total {
        position: absolute;
        top: 32%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .media {
        font-size: 0.8rem;
    }

    .total p {
        color: black;
        margin: 0;
    }

    .total .number {
        font-size: 1.5rem;
        font-weight: bold;
    }

    .number {
        font-weight: bold;
    }
</style>