<template>
    <div class="stats-wrap">
        <div class="stats">
            <statsItem :stats="animeStats"/>
            <statsItem :stats="mangaStats"/>
            <statsItem :stats="ranobeStats"/>
        </div>
    </div>
</template>

<script>
import statsItem from './statsWrap/statsItem'

export default {
    name: 'statsWrap',
    props: ["wgtdata"],
    components: {
        statsItem
    },
    data() {
        return {
            animeStats: {
                name: "Anime",
                completed: 182,
                inProgress: 16,
                dropped: 12,
                planning: 65
            },
            mangaStats: {
                name: "Manga",
                completed: 365,
                inProgress: 121,
                dropped: 56,
                planning: 12
            },
            ranobeStats: {
                name: "Novels",
                completed: 43,
                inProgress: 65,
                dropped: 3,
                planning: 10
            }
        }
    }
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
        padding: 15px;
        display: flex;
        justify-content: space-between;
    }
</style>