<template>
    <div id="feed" class="content">
        <div class="trending__wrapper">
            <div class="trending__title">
                <h2>Trending</h2>
                <ChevronRight />
            </div>
            <div class="trending__content">
                <MediaThumbnail v-for="entry in anime.data" :data="entry"
                    :key="entry.id" />
            </div>
        </div>
        <div class="feed__grid">
            <div class="feed__wrapper"></div>
            <div class="sidebar__wrapper"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
interface LooseObject {
    [key: string]: any
}

const props = defineProps<{
    api: string
}>();

const anime: LooseObject = { data: [] };

try {
    const { data: response } = await useFetch(props.api + '/anime');
    // @ts-ignore
    anime.data = await response._rawValue;
} catch (error) {
    console.error('Error fetching data:', error);
}

</script>

<style lang="scss" scoped>
.trending__title {
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    h2 {
        font-size: 1.5em;
        font-weight: 600;
        font-family: 'Nunito Sans';
    }

    svg {
        color: var(--link-inactive);
        margin: 0 12px;
        font-size: 1em;
    }
}

.trending__content {
    display: grid;
    grid-template-columns: 140px 140px 140px 140px 140px 140px 140px;
    column-gap: 20px;
}
</style>
