<template>
    <div class="character-submission__wrapper">
        <div class="character__add">
            <el-input ref="search" v-model="value" size="large"
                placeholder="Start typing to search a character..."
                class="input-with-select">
                <template #prepend>
                    <el-button :icon="Search" />
                </template>
            </el-input>
        </div>

        <transition name="fade" mode="out-in">
            <div v-if="isSearchOpen" class="character__search-results">
                <div v-if="searchResults[0]" class="character__item"
                    v-for="character in searchResults"
                    @click="addCharacter(character)">
                    <div class="item__avatar">
                        <img src="">
                    </div>
                    <div class="item__content">
                        <p class="content__name">{{ character.name }}</p>
                        <p class="content__subtitle"> {{ character.gender }} — {{
                            character.media_id }}</p>
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

        <CharacterItem v-for="character in characterList" :key="character.id"
            :character="character" />
    </div>
</template>

<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'

const characterList = ref<any[]>([]); // iterable, for frontend

const outList = ref<any[]>([]); // output character list with unique entries

const searchResults = ref<any[]>([]);

const value = ref('');

const search = ref(null);
onClickOutside(search, (evt) => closeSearch());

const isSearchOpen = ref(false);

const closeSearch = () => {
    isSearchOpen.value = false;
}

const openSearch = () => {
    isSearchOpen.value = true;
}

type InputParams = {
    id: number,
    label: string,
    type: string,
    placeholder: string,
    group: string,
    priority: number,
    value?: []
}

const props = defineProps<{
    inputs: InputParams[]
}>();

const outputArr = [];

onMounted(() => {
    searchResults.value = [];
    characterList.value =
        props.inputs.find(el => el.label === "Characters")!.value!;
});

const debouncedFn = useDebounceFn((type) => {
    switch (type) {
        case 'char':
            fetchCharacters(value.value);
            break;
    }
}, 1000)

const addCharacter = (character: any) => {
    characterList.value.push(character);

    if (outList.value.find(el => el.id === character.id)) {
        return
    }

    outList.value.push(character);
};

watch(value, (newCount, oldCount) => {
    if (oldCount === '' || newCount === '') {
        searchResults.value = [];
    }
    openSearch();
    debouncedFn('char');
})

async function fetchCharacters(val: String) {
    fetch(`http://localhost:3069/characters/search`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({
            name: val
        })
    })
        .then(res => res.json())
        .then(obj => { searchResults.value = obj });
}

</script>

<style lang="scss" scoped>
.character-submission__wrapper {
    position: relative;
}

.character__search-results {
    background-color: var(--foreground);
    box-shadow: 0px 0px 1em rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    padding: 8px;
    transition: all 0.5s;
    animation: fade-in 0.2s ease;
    display: grid;
    row-gap: 4px;
    margin-top: 12px;
    border: solid 1px var(--foreground-gray-700);
    position: absolute;
    z-index: 1000;
    width: 100%;
}

.icon {
    align-self: center;
    width: 24px;
    height: 24px;
    margin-right: 0px;
    background-color: var(--text-secondary);
}

.search-results__placeholder {
    column-gap: 0 !important;
    cursor: default !important;

    &:hover {
        background-color: var(--foreground) !important;
    }
}

.character__item {
    display: grid;
    background-color: rgba(0, 0, 0, 0);
    grid-template-columns: 48px auto;
    column-gap: 20px;
    padding: 10px;
    border-radius: 6px;
    transition: background-color 0.3s ease;
    cursor: pointer;

    &:hover {
        background-color: var(--background);
        cursor: pointer;
    }

    .item__avatar {
        border-radius: 4px;
        background-color: var(--placeholder-fill);
        height: 48px;
        width: 48px;
        pointer-events: none;

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
}
</style>

<style lang="scss">
.role__input {
    .el-input-wrapper {
        width: 226px !important;
    }
}
</style>
