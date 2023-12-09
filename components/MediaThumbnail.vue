<template>
    <div class="thumbnail__wrapper">
        <div class="thumbnail__image">
            <img src="">
        </div>

        <div class="thumbnail__content">
            <p class="content__title">{{ data.name }}</p>
            <p class="content__subtitle">StudioName</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
interface LooseObject {
    [key: string]: any
}

/* 

type MediaEntry = {
    _private: boolean,
    _media_type: string,
    _show_type: string,
    status: string,
    id: number,
    name: string,
    short_name?: String,
    description?: String,
    localisation?: LooseObject,
    rating: string,
    family_id: number,
    sequel_id?: Number,
    genres: [string],
    characters?: [LooseObject],
    staff?: [LooseObject],
    reviews?: [LooseObject],
    episodes: {
        count: number,
        duration: number,
        names?: [LooseObject],
    },
    medias?: [LooseObject],
    stats: {
        favs: number,
        score?: LooseObject,
        watching: number,
        completed: number,
        planning: number,
        paused: number,
        dropped: number,
    },
    producers?: [{
        name: string,
        [key: string]: any
    }],
    studios?: [{
        name: string,
        [key: string]: any
    }],
    links?: [String],
    threads?: [LooseObject],
    tags?: [LooseObject],
    started_at: { type: Date, required: true },
    finished_at?: Date,
    created_at: { type: Date, required: true },
    updated_at: { type: Date, required: true },
} */

const props = defineProps<{
    data: any
}>();

</script>

<style lang="scss" scoped>
.thumbnail__image {
    width: 140px;
    height: 192.5px;
    background-color: var(--placeholder-fill);
    border-radius: 8px;
}

.thumbnail__content {
    display: grid;
    grid-template-rows: auto auto;
    margin-top: 8px;

    p {
        margin: 0;
    }

    .content__title {}

    .content__subtitle {
        color: var(--text-secondary);
        font-size: 0.8em;
    }
}
</style>
