<template>
    <transition name="fade" mode="default">
        <div v-if="isOpen" class="search-results__wrapper" :class="{slim: look === 'slim'}">
            <div class="search__header">
                <div class="header__tabs">

                    <p class="link" :class="{ active: activeTab === tab.tab }"
                        v-for="tab in Tabs" @click="handleTabChange(tab.tab)">
                        {{ tab.name }}
                    </p>

                </div>
                <div class="header__layout">
                    <div @click="activeLayout = 'horizontal'"
                        :class="{ active: activeLayout === 'horizontal' }"
                        class="i-ic-baseline-view-stream icon"></div>
                    <div style="transform: rotate(90deg) scale(1)"
                        @click="activeLayout = 'vertical'"
                        :class="{ active: activeLayout === 'vertical' }"
                        class="i-ic-baseline-view-agenda icon"></div>
                </div>
            </div>

            <div v-if="results[0]">
                <div v-if="activeLayout === 'vertical'" class="layout__vertical">
                    <div class="vertical__group">
                        <SearchItem v-for="result in results" :data="result" />
                    </div>
                </div>


                <div v-if="activeLayout === 'horizontal'"
                    class="layout__horizontal">
                    <SearchItemDetailed v-if="results[0]" v-for="result in results"
                        :data="result" />
                </div>
            </div>

            <div v-else class="search-results__placeholder character__item">
                <div class="i-svg-spinners-3-dots-bounce icon"></div>
                <p style="color: var(--text-secondary)">
                    The elves at Zenbu HQ are currently looking for this
                    entry...
                </p>
            </div>
        </div>
    </transition>
</template>

<script lang="ts" setup generic="T">
const props = defineProps<{
    isOpen: boolean
    activeTab: string
    results: Array<T>
    look: string
}>();

const emits = defineEmits<{
    changeTab: [val: string]
}>();

const searchResults = ref([]);

const activeLayout = ref('vertical');

const Tabs = [
    {
        name: 'Anime',
        tab: 'anime'
    },
    {
        name: 'Manga',
        tab: 'manga'
    },
    {
        name: 'Light Novels',
        tab: 'light-novels'
    },
    {
        name: 'Characters',
        tab: 'characters'
    },
    {
        name: 'Staff',
        tab: 'staff'
    },
    {
        name: 'Groups',
        tab: 'groups'
    },
]

const handleTabChange = (tab: string) => {
    emits("changeTab", tab);
}

onMounted(() => {
    handleTabChange('anime');
})

</script>

<style lang="scss" scoped>
.search-results__wrapper {
    position: absolute;
    background: var(--foreground);
    border-radius: 8px;
    padding: 12px 12px;
    left: 108px;
    top: 88px;
    width: 672px;

    .layout__vertical {
        margin-top: 8px;
        margin-bottom: -8px;
        padding: 12px;

        .vertical__group {
            display: grid;
            grid-template-columns: repeat(auto-fill, 100px);
            column-gap: 16px;
        }
    }

    .layout__horizontal {
        margin-top: 8px;
    }

    .character__item {
        display: grid;
        background-color: rgba(0, 0, 0, 0);
        grid-template-columns: 32px auto;
        column-gap: 20px;
        padding: 16px;
        margin-top: 12px;
        border-radius: 6px;
        transition: background-color 0.3s ease;
        align-items: center;

        .item__avatar {
            border-radius: 4px;
            background-color: var(--placeholder-fill);
            height: 48px;
            width: 48px;
            pointer-events: none;
            justify-self: center;

            img {
                pointer-events: none;
            }
        }

        .item-content {
            pointer-events: none;

            p {
                pointer-events: none;
            }
        }

        .content__subtitle {
            color: var(--text-secondary);
        }

        .icon {
            width: 32px;
            height: 32px;
            color: var(--text-secondary);
        }
    }

    .search__header {
        display: flex;
        justify-content: space-between;

        .header__tabs {
            margin-left: 0px;
            display: flex;

            .link {
                margin-right: 4px;
                color: var(--link-inactive);
                font-size: 0.925rem;
                font-weight: 600;
                cursor: pointer;
                padding: 4px 12px;
                background-color: var(--foreground);
                transition: background-color 0.2s ease;

                &:hover {
                    background-color: var(--background);
                    border-radius: 4px;

                }
            }

            .active {
                color: var(--text-primary);
            }
        }

        .header__layout {
            display: flex;
            align-items: center;

            .active {
                color: var(--text-primary) !important;
            }

            .icon {
                width: 24px;
                height: 24px;
                margin-left: 12px;
                margin-right: 4px;
                color: var(--text-gray);
                transition: color 0.2s ease;
                cursor: pointer;

                &:hover {
                    color: var(--text-secondary);
                }
            }
        }


    }
}

.slim {
    width: 684px;
    left: 96px;
    top: 64px;
    border-radius: 28px;
    padding: 16px;
}
</style>
