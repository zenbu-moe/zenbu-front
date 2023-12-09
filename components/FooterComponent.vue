<template>
    <div class="footer">
        <div class="block"></div>
        <div class="block"></div>
    </div>
</template>

<script lang="ts">

</script>

<style lang="scss" scoped>
.footer {
    margin-top: 80px;
    margin-bottom: 20px;
    width: 100%;
    left: 0;
    bottom: 0;
    display: grid;
    grid-template-columns: 80px auto;
    column-gap: 20px;
    position: absolute;

    .block {
        background-color: var(--foreground);
        padding: 40px 0;
        border-radius: 8px;
    }
}
</style>
