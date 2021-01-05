<template>
    <div class="about-wrap">
        <div class="markdown">
            <img src="https://i.imgur.com/2nvAlGa.gif">
        </div>
    </div>
</template>

<script>
export default {
    name: 'aboutWrap'
}
</script>

<style scoped>
    .about-wrap {
        display: flex;
        height: 100%;
        width: 100%;
        border-radius: 15px;
        background-color: rgb(var(--color-background));
        overflow: hidden;
    }

    .about-wrap:hover {
        overflow: overlay;
    }

    .markdown {
        border-radius: 20px;
        height: auto;
        width: 100%;
    }

    .markdown * {
        width: 100%;
    }

</style>