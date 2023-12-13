<template>
    <div class="search__item">
        <MediaThumbnail :size="'medium'" :data="data" />
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    data: any
}>();
</script>

<style lang="scss" scoped>
</style>
