<template>
    <div class="overview-grid" >
        <overviewTest :edit="edit" ref="ow"/>
    </div>
</template>

<script>
import overviewTest from './overview-test'

export default {
    name: 'overviewWrap',
    props: ["edit"],
    components: {
        overviewTest
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
        /* background-color: rgb(var(--color-background-dark));
        border-radius: 20px; */
        max-width: 1300px;
        height: auto;
        margin: 20px auto 0px auto;
        padding: 10px 0px 0px 0px;
        transition: 1s;
    }
</style>