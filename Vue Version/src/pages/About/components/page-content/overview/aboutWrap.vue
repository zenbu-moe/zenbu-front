<template>
    <div class="about-wrap">
        <div class="markdown">
        </div>
        <div class="blank">
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
        height: 550px;
        width: 100%;
        border-radius: 20px;
        padding: 10px;
        margin-bottom: 10px;
    }

    .markdown {
        background-color: rgb(var(--color-background));
        border-radius: 20px;
        height: 100%;
        width: 100%;
    }

</style>