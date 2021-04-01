<template>
    <div class="item">
        <a href="" class="cover">
        </a>
        <div class="title">
            <h4>Monogatari Series: Second Season</h4>
            <p>Adaptation</p>
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
        margin: 0;
        font-size: 0.9rem;
        color: rgb(var(--color-text));
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;  
        overflow: hidden;
    }

    .title p {
        margin: 0px 0px 10px 0px;
        font-family: "Lexend";
        color: rgb(var(--color-text));
        font-size: 0.75rem;
        font-weight: 300;
    }

    .cover {
        background-color: rgb(var(--color-background));
        transition: 1s;
        animation: zoomIn 0.3s;
        width: 100px;
        height: 140px;
        margin-bottom: 5px;
        border-radius: 10px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50%;
    }
</style>