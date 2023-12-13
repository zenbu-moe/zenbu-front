<template>
    <div class="search__item">
        <div class="item__main-content">
            <div class="item__cover">
                <img src="">
            </div>
            <div class="item__content">
                <div class="content__header">
                    <p class="content__title">{{ data.name }}</p>
                    <div class="content__status">Finished airing</div>
                </div>
                <div class="content__subheader">
                    <p class="content__subtitle">WIT Studio</p>
                    <div class="c-divider"></div>
                    <p class="content__subtitle">Fall 2014</p>
                </div>
                <div class="h-divider"></div>
                <div class="content__body">
                    <p class="content__content">TV</p>
                    <div class="c-divider white"></div>
                    <p class="content__content">Action, Comedy</p>
                </div>
            </div>
        </div>
        <div class="item__actions">
            <el-select class="input-field" filterable v-model="listSelection"
                placeholder="Add to list">
                <el-option v-for="item in listOptions" :key="item" :label="item"
                    :value="item" />
            </el-select>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    data: any
}>();

const listOptions = [
    'Planning',
    'Watching',
    'Completed',
    'Custom...'
]

const listSelection = ref('');
</script>

<style lang="scss" scoped>
.search__item {
    display: grid;
    grid-template-columns: auto 140px;
    column-gap: 40px;
    padding: 8px;
    align-items: center;
}

.item__main-content {
    display: grid;
    grid-template-columns: 56px auto;
    column-gap: 16px;

    .item__cover {
        width: 56px;
        height: 77px;
        object-fit: cover;
        border-radius: 4px;
        background-color: var(--placeholder-fill);
    }

    .content__header {
        display: flex;
        align-items: center;
        margin-bottom: 2px;
        margin-top: -2px;

        .content__status {
            border-radius: 8px;
            border: solid 1px var(--text-secondary);
            padding: 0 12px;
            font-size: 0.825rem;
            margin-left: 12px;
            height: fit-content;
        }

        .content__title {
            font-size: 1.0rem;
            font-weight: 600;
        }
    }

    .content__subheader {
        display: flex;
        align-items: center;

        .content__subtitle {
            font-size: 0.875rem;
            color: var(--text-secondary);
        }

        .c-divider {
            background-color: var(--text-secondary);
        }

    }

    .content__body {
        display: flex;
        align-items: center;

        .content__content {
            font-size: 0.875rem;
            color: var(--text-primary);
        }

        .c-divider {
            background-color: var(--text-primary);
        }

    }

    .c-divider {
        display: block;
        width: 3px;
        height: 3px;
        margin: 0px 8px;
        border-radius: 12px;
    }

    .h-divider {
        width: 72px;
        height: 1px;
        background-color: var(--text-secondary);
        margin: 4px 0px;
    }

}
</style>
