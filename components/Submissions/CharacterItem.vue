<template>
    <div class="character">
        <div class="character__wrapper">
            <div class="character__avatar">
                <img src="">
            </div>
            <div class="character__content">
                <p class="content__name">{{ character.name }}</p>
                <p class="content__subtitle"> {{ character.gender }} — {{
                    character.media_id }}</p>
            </div>
            <div class="character__settings">
                <div class="dropdowns">
                    <div class="role__input">
                        <el-select class="input-field" filterable
                            v-model="characterRole" placeholder="Role in the story">
                            <el-option v-for="item in roleOptions" :key="item"
                                :label="item" :value="item" />
                        </el-select>
                        <el-button class="delete-button" type="danger" plain
                            :icon="Delete">
                        </el-button>
                    </div>
                    <div class="va__input">
                        <el-input ref="search_va" v-model="value_va"
                            placeholder="Search a voice actor"
                            class="input-with-select">
                            <template #prepend>
                                <el-button :icon="Search" />
                            </template>
                        </el-input>

                        <el-input style="margin-left: 12px; width: 192px;"
                            v-model="va_role"
                            placeholder="Role? Leave empty for main"
                            class="input-with-select">
                        </el-input>

                        <transition name="fade" mode="out-in">
                            <div v-if="isSearchOpenVA"
                                class="character__search-results">
                                <div v-if="searchResultsVA[0]"
                                    class="character__item"
                                    v-for="staff in searchResultsVA"
                                    @click="addVA(staff, character)">
                                    <div class="item__avatar">
                                        <img src="">
                                    </div>
                                    <div class="item__content">
                                        <p class="content__name">
                                            {{ staff.name }}
                                        </p>
                                    </div>
                                </div>
                                <div v-else
                                    class="search-results__placeholder character__item">
                                    <div class="i-svg-spinners-3-dots-bounce icon">
                                    </div>
                                    <p style="color: var(--text-secondary)">
                                        Searching...
                                    </p>
                                </div>
                            </div>
                        </transition>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Delete } from '@element-plus/icons-vue'
import { Search } from '@element-plus/icons-vue'

const roleOptions = ['Main', 'Supporting', 'Cameo', 'Background'];

const props = defineProps<{
    character: any
}>();

const value_va = ref('');
const va_role = ref('');
const characterRole = ref('');
const searchResultsVA = ref<any[]>([]);

const isSearchOpenVA = ref(false);

const closeSearchVA = () => {
    isSearchOpenVA.value = false;
}

const openSearchVA = () => {
    isSearchOpenVA.value = true;
}

const search_va = ref(null);
onClickOutside(search_va, (evt) => closeSearchVA());

onMounted(() => {
    searchResultsVA.value = [];
});

const addVA = (staff: any, char: any) => {
    char.voice_actors.push()
};

const debouncedFn = useDebounceFn((type) => {
    switch (type) {
        case 'staff':
            fetchStaff(value_va.value);
            break;
    }
}, 1000)

watch(value_va, (newCount, oldCount) => {
    if (oldCount === '' || newCount === '') {
        searchResultsVA.value = [];
    }
    openSearchVA();
    debouncedFn('staff');
})

async function fetchStaff(val: String, charid?: Number) {
    fetch(`http://localhost:3069/staff/search`, {
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
            name: val,
            type: 'voice-actor'
        })
    })
        .then(res => res.json())
        .then(obj => {
            searchResultsVA.value = obj;
            const VA = searchResultsVA.value.find(el => el.name === value_va);
            /* if (VA) {
                outputArr.push(
                    
                )
            } */
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
    bottom: 0px;
    transform: translateY(calc(100% + 8px));
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

.character__wrapper {
    display: grid;
    grid-template-columns: 64px auto 400px;
    column-gap: 20px;
    padding: 0.75rem;
    border-radius: 8px;
    background: var(--foreground);
    margin-top: 20px;
    align-items: center;

    .character__avatar {
        width: 64px;
        height: 84px;
        border-radius: 6px;
        background: var(--placeholder-fill);
    }

    .content__name {
        font-size: 1.2rem;
    }

    .content__subtitle {
        color: var(--text-secondary);
    }

    .subheader {
        font-size: 0.8em;
        color: var(--text-secondary)
    }

    .va__input {
        margin-top: 8px;
        position: relative;
        display: flex;

        .character__search-results {

            padding: 4px;

            .character__item {
                padding: 8px;
                border-radius: 4px;
                column-gap: 4px;
                align-items: center;
            }

            .content__name {
                font-size: 1em;
            }

            .item__avatar {
                width: 28px;
                height: 28px;
            }
        }
    }

    .dropdowns {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding-right: 10px;
    }

    .character__settings {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        align-self: center;

        .delete-button {
            margin-left: 12px;
        }
    }
}
</style>
