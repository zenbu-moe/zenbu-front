<template>
    <div class="item-cover">
    </div>
</template>

<script>
export default {
    name: 'watchingItem'
}
</script>

<style scoped>
    .anime-item {
        margin: 0px
    }

    .item-cover {
        width: 80px;
        min-height: 112px;
        max-height: 112px;
        border-radius: 10px;
        overflow: hidden;
        position: relative;
        transition: 0.3s;
        background-color: rgb(var(--color-gray));
        transition: 1s;
    }

    .item-cover img {
        height: 120px;
        position: absolute;
    }

    .item-cover:hover {
        box-shadow: 0px 0px 10px rgba(var(--color-text),0.2);
        transition: 0.2s ease;
    }
</style>