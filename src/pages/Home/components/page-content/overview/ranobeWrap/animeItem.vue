<template>
    <div class="anime-item">
        <div class="item-cover">
        </div>
        <div class="item-details">
            <span class="title">Novel Title</span>
            <span class="studio">Studio Name</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'animeItem'
}
</script>

<style scoped>
    .anime-item {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        cursor: pointer;
        animation: zoomIn 0.3s;
    }

    .item-cover {
        width: 115px;
        min-height: 160px;
        max-height: 160px;
        border-radius: 10px;
        overflow: hidden;
        position: relative;
        transition: 0.3s;
        margin-bottom: 5px;
        background-color: rgb(var(--color-gray));
        transition: 1s;
    }

    .item-cover img {
        height: 200px;
        position: absolute;
    }

    .item-cover:hover {
        box-shadow: 0px 0px 10px rgba(var(--color-text),0.2);
        transition: 0.2s ease;
    }

    .item-details {
        width: 115px;
        display: flex;
        flex-direction: column;
    }

    .item-details .title {
        font-family: "Raleway";
        font-weight: 600;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: rgb(var(--color-text));
    }

    .item-details .studio {
        font-size: 13px;
        font-weight: 300;
        color: rgb(var(--color-text));
    }
</style>