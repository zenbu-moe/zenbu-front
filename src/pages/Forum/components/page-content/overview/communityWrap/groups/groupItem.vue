<template>
    <div class="group-item">
        <div class="description">
            <div class="item-cover">
            </div>
            <div class="item-details">
                <span class="title">Group Title</span>
                <span class="description">Group description</span>
            </div>
        </div>
        <div class="misc">
            <div class="followers">
                <span><i class="fas fa-users"></i></span>
                <span class="count">10</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'groupItem'
}
</script>

<style scoped>
    .group-item {
        width: 350px;
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: space-between;
        cursor: pointer;
        animation: zoomIn 0.3s;
    }

    .description {
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: center;
        cursor: pointer;
        animation: zoomIn 0.3s;       
    }

    .item-cover {
        min-width: 80px;
        min-height: 80px;
        max-width: 80px;
        max-height: 80px;
        margin-right: 10px;
        border-radius: 20px;
        overflow: hidden;
        position: relative;
        transition: 0.3s;
        margin-bottom: 5px;
        background-color: rgb(var(--color-gray));
        transition: 1s;
    }

    .item-cover img {
        height: 90px;
        position: absolute;
    }

    .item-cover:hover {
        box-shadow: 0px 0px 10px rgba(var(--color-text),0.2);
        transition: 0.2s ease;
    }

    .item-details {
        display: flex;
        flex-direction: column;
    }

    .item-details .title {
        font-weight: 600;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: rgb(var(--color-text));
    }

    .misc {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .followers {
        display: flex;
        align-items: center;
        background: rgb(var(--color-background-dark));
        padding: 3px;
        border-radius: 10px;
        color: rgb(var(--color-text));
        transition: 1s;
    }

    .count {
        margin-left: 3px;
    }

    .item-details .description {
        font-size: 13px;
        font-weight: 300;
        color: rgb(var(--color-text));
    }
</style>