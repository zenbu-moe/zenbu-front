<template>
    <div class="overview-grid" >
        <overview :edit="edit" ref="ow"/>
    </div>
</template>

<script>
import overview from './overview'

export default {
    name: 'overviewWrap',
    props: ["edit"],
    components: {
        overview
    },
    data() {

    },
    methods: {

    }
}
</script>

<style scoped>
    .overview-grid {
        display: flex;
        flex-direction: column;
        background-color: rgb(var(--color-background-dark));
        border-radius: 20px;
        max-width: 1400px;
        height: auto;
        margin: 20px auto;
        padding: 10px 0px;
        transition: 1s;
    }
</style>