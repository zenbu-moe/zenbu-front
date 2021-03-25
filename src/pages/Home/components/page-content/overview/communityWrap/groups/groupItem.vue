<template>
    <div class="group-item">
        <div class="description">
            <div class="item-cover">
            </div>
            <div class="item-details">
                <span class="title">Group Title</span>
                <span class="description">
                    Lorem ipsum
                </span>
            </div>
        </div>
        <div class="misc">
            <div class="actions">
                <p>Join</p>
            </div>
            <div class="followers">
                <span><i class="fas fa-users"></i></span>
                <span class="count">10</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'groupItem',
}
</script>

<style scoped>
    .group-item {
        min-width: 350px;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: space-between;
        cursor: pointer;
        animation: zoomIn 0.3s;
        padding: 15px 0px;
    }

    .description {
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: flex-start;
        cursor: pointer;
        animation: zoomIn 0.3s;       
    }

    .item-cover {
        min-width: 90px;
        min-height: 90px;
        max-width: 90px;
        max-height: 90px;
        margin-right: 10px;
        border-radius: 10px;
        overflow: hidden;
        position: relative;
        transition: 0.3s;
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
        font-family: "Raleway";
        font-weight: 600;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: rgb(var(--color-text));
        margin-bottom: 5px;
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
        padding: 5px;
        border-radius: 15px;
        color: rgb(var(--color-text));
        transition: 1s;
    }

    .count {
        font-family: "Raleway";
        margin-left: 3px;
    }

    .item-details .description {
        font-size: 13px;
        font-weight: 300;
        color: rgb(var(--color-text));
    }

    .actions {
        display: flex;
        align-items: center;
        background: rgba(112,192,100,0.50);
        border-radius: 15px;
        color: rgb(var(--color-text));
        transition: 1s;
        margin-right: 5px;
        padding: 5px 25px;
    }

    .actions p {
        margin: 0;
        color: white;
        font-family: "Raleway";
    }
</style>