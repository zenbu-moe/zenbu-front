<template>
    <div class="item">
        <a href="" class="cover">
        </a>
        <div class="title">
            <h4>Item Title</h4>
            <p>Item Source</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'relationsItem'
}
</script>

<style scoped>
    .item {
        display: flex;
        flex-direction: column;
        margin: 10px 0px 10px 0px;
    }

    .title h4 {
        margin: 0px 0px 5px 0px;
        color: rgb(var(--color-text))
    }

    .title p {
        margin: 0px 0px 10px 0px;
        color: rgb(var(--color-text));
        font-size: 14px;
    }

    .cover {
        background-color: rgb(var(--color-background));
        transition: 1s;
        animation: zoomIn 0.3s;
        width: 100px;
        height: 140px;
        margin-bottom: 10px;
        border-radius: 10px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50%;
    }
</style>