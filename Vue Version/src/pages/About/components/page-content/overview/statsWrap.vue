<template>
    <div class="stats-wrap">
        <div class="stats">
        </div>
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
        height: 100%;
    }

    .stats {
        border-radius: 15px;
        background-color: rgb(var(--color-foreground));
        height: 99%;
        width: 100%;
        box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
    }
</style>