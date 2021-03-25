<template>
    <div class="item" ref="item">
        <a class="cover" :style="{height: width + 'px'}">
        </a>
    </div>
</template>

<script>
export default {
    name: 'relationsItem',
    props: ["width"],
    methods: {

    },
}
</script>

<style scoped>
    .item {
        display: flex;
        flex-direction: column;
        margin: 10px 0px 10px 0px;
    }

    .title h4 {
        font-family: "Raleway";
        margin: 0px 0px 5px 0px;
        color: rgb(var(--color-text));
        width: 100px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .title p {
        font-family: "Raleway";
        margin: 0px 0px 10px 0px;
        color: rgb(var(--color-text));
        font-size: 12px;
    }

    .cover {
        background-color: rgb(var(--color-background));
        transition: 1s;
        animation: zoomIn 0.3s;
        width: 100%;
        border-radius: 10px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50%;
    }
</style>