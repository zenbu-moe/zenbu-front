<template>
    <div class="stats-wrap">
        <div class="stats">
        </div>
        <!-- <div class="blank">
        </div> -->
    </div>
</template>

<script>
export default {
    name: 'statsWrap'
}
</script>

<style scoped>
    h3 {
        color: rgb(var(--color-text))
    }

    .stats-wrap {
        width: 100%;
        padding: 10px;
    }

    .blank {
        border: 2px dashed rgb(133, 133, 133);
        height: 100%;
        width: 100%;
        border-radius: 20px;
    }

    .stats {
        border-radius: 20px;
        background-color: rgb(var(--color-foreground));
        height: 250px;
        width: 100%;
        box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
    }
</style>