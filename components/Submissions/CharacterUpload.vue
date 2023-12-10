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
            :character="character" @char-role-change="handleCharRoleChange" @va-change="handleVaChange" @char-delete="deleteCharacter"/>
    </div>
</template>

<script lang="ts" setup generic="T">
import { Search } from '@element-plus/icons-vue'

// TODO: this whole section needs to be cleaned up

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

const emits = defineEmits<{
    vaChange: [id: number, value: any, action: String];
    valueChange: [id: number, value: any];
    charDelete: [uid: string, value: any]
    charRoleChange: [uid: string, value: any]
}>();

const outputArr = [];

onBeforeMount(() => {
    characterList.value =
        props.inputs.find(el => el.label === "Characters")!.value!;

    outList.value =
        props.inputs.find(el => el.label === "Characters")!.value!;

    // characterList.value = displayCharacters(characterList.value);
});

onMounted(() => {
    searchResults.value = [];
});

// unused function, but im keeping it here anyways

/* const displayCharacters = (arr: Array<T>) => {
    // this function iterates over characters array and reassigns them
    // to a new array to link each character with each voice actor

    const newArr: Array<T> = [];

    for (let i = 0; i < arr.length; i++) {
        const char: any = arr[i];
        const charVA: Array<T> = char.voice_actors;

        for (let j = 0; j < charVA.length; j++) {
            const VA: any = charVA[j];
            newArr.push({ ...char, voice_actors: [VA] });
        }
    }
    return newArr;
} */

const debouncedFn = useDebounceFn((type) => {
    switch (type) {
        case 'char':
            fetchCharacters(value.value);
            break;
    }
}, 1000)

const addCharacter = (character: any) => {
    characterList.value.push({...character, uid: generateUUID()});
    searchResults.value = [];
    value.value = '';

    /* if (outList.value.find(el => el.id === character.id)) {
        return
    }

    outList.value.push(character); */
    emits("valueChange", 100, characterList.value);
};

const handleVaChange = (id: number, value: any, action: String) => {
    emits("vaChange", id, value, action);
}

const deleteCharacter = (uid: string) => {
    emits("charDelete", uid, null);
};

const handleCharRoleChange = (uid: string, value: any) => {
    emits("charRoleChange", uid, value);
}

watch(value, (newCount, oldCount) => {
    if (oldCount === '' || newCount === '') {
        searchResults.value = [];
        return;
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

// generateUUID() taken from https://stackoverflow.com/a/8809472

function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
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
