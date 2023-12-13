<template>
    <transition name="navactive" mode="out-in">
        <div class="nav-slim__wrapper"  v-if="isScrolled" :class="{
            navShow: isSearching,
        }">
            <div class="navigation" :class="{
                fadeNav: scrollDirection,
                navShow: !scrollDirection,
                expand: isSearching
            }">
                <div class="wrapper">
                    <div class="links">
                        <div class="logo">全</div>
                        <div class="links__inner" :class="{ fade: focused }">
                            <NuxtLink to="/feed">Feed</NuxtLink>
                            <NuxtLink to="/anime">Anime</NuxtLink>
                            <NuxtLink to="/manga">Manga</NuxtLink>
                            <NuxtLink to="/light-novels">Light Novels</NuxtLink>
                            <NuxtLink to="/community">Community</NuxtLink>
                        </div>
                    </div>
                </div>

                <div ref="search__wrapper" class="wrapper search">
                    <input ref="search" placeholder="Search" id="search"
                        autocomplete="off" v-model="searchInput">
                    <i class="bi bi-search"></i>
                </div>

                <MainSearch :look="'slim'" :activeTab="activeTab"
                    @change-tab="handleTabChange" ref="searchWrapper"
                    :results="searchResults" :isOpen="isSearchOpen" />

                <div class="wrapper ">
                    <i class="bi bi-inbox"></i>
                    <i class="bi bi-bell"></i>
                    <UserAvatar :mode="'slim'" />
                    <i class="bi bi-chevron-down"></i>
                </div>
            </div>
        </div>
    </transition>
</template>

<script lang="ts" setup generic="T">

const search = ref();
const searchInput = ref('');
const searchWrapper = ref(null);
const searchResults = ref([]);
const search__wrapper = ref();

const emits = defineEmits<{
    moveSearch: [input: string, results: Array<T>]
    focusSearch: [val: boolean]
}>();

const activeTab = ref('anime');

const handleTabChange = (tab: string): any => {
    activeTab.value = tab;
}

const isSearchOpen = ref(false);
const isSearching = ref(false);

const { focused } = useFocus(search, { initialValue: false })

const toggleSearch = (state: boolean) => {
    isSearchOpen.value = state;
}

onClickOutside(searchWrapper, event => {
    if (event.target === search__wrapper.value ||
        Array.from(search__wrapper.value.childNodes)
            .includes(event.target)
    ) {
        return;
    }
    if (isSearchOpen.value) {
        toggleSearch(false);
        focused.value = false;
        isSearching.value = false;
        searchInput.value = '';
        searchResults.value = [];
    }
});

const API = useState('API');

const debouncedFn = useDebounceFn((val, type) => {
    $fetch(`${API.value}/${type}/search`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer",
        body: JSON.stringify({
            name: val
        })
    }).then(res => searchResults.value = res);
}, 1000);

watch(searchInput, (val) => {
    if (isSearching.value) {
        debouncedFn(val, activeTab.value);
    }
});

watch(searchResults, (val) => {
    /*  console.log(val); */
})

watch(activeTab, (tab) => {
    searchResults.value = [];
    debouncedFn(searchInput.value, tab);
})

watch(focused, (newCount, oldCOunt) => {
    if (!isSearchOpen.value) {
        isSearching.value = newCount;
    }

    emits("focusSearch", newCount);

    /* if (!newCount) {
        toggleSearch(false);
        searchInput.value = '';
    } */
});

watch(searchInput, (newCount, oldCount) => {
    if (newCount !== '') {
        toggleSearch(true);
    }
});


watch(focused, (newCount, oldCount) => {
    if (newCount) {
        scrollDirection.value = false;
    } else {
        scrollDirection.value = true;
    }
})

const { x, y } = useWindowScroll()
const scrollDirection = ref(false);
const isScrolled = ref(false);

/* const handleScroll = () => {
    console.log(window.scrollY);
    scrollPosition.value = window.scrollY;

    if (scrollPosition.value > 100) {
        isScrolled.value = true;
    } else {
        isScrolled.value = false;
    }
}; */

watch(y, (newCount, oldCount) => {
    if (newCount > 180) {
        isScrolled.value = true;
    } else {
        toggleSearch(false);
        focused.value = false;

        if (isSearching.value) {
            emits("moveSearch", searchInput.value, searchResults.value);
        }

        isSearching.value = false;
        searchInput.value = '';
        searchResults.value = [];
        isScrolled.value = false;
    }

    if (newCount > oldCount) {
        scrollDirection.value = true;
    } else {
        scrollDirection.value = false;
    }
})
</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
    color: var(--link-inactive);
    font-weight: 700;
}


.active {
    color: var(--text-primary);
}

.expand {
    grid-template-columns: 76px 684px 300px !important;
}

.fade {
    opacity: 0;
}

.nav-slim__wrapper {
    position: fixed;
    width: 100%;
    z-index: 1000;
    width: 1100px;
    top: 0px;
    transition: all 0.3s;
    animation: fade-in-bottom 0.3s ease;
}

.navigation {
    display: grid;
    justify-content: space-between;
    grid-template-columns: 540px 220px 300px;
    column-gap: 20px;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 40px;
    z-index: 1000;
    width: 1100px;
    transition: all 0.3s;
    top: 0px;
    filter: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.15));

    &:hover {
        opacity: 1 !important;
    }
}

.wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--foreground);
    border-radius: 24px;
    padding: 8px 12px;
    overflow: hidden;
}

.links {
    min-width: 504px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    transition: opacity 0.5s ease;

    .links__inner {
        transition: opacity 0.5s ease;
    }

    a {
        margin: 0 16px;
        white-space: nowrap;
        font-size: 0.925rem;
    }
}

.logo {
    width: 32px;
    height: 32px;
    margin: 0 14px;
    font-family: "Dela Gothic One";
    font-size: 24px;
    margin-top: -8px;
}

.hidden {
    pointer-events: none;
}

.fadeNav {
    opacity: 0.3;
}

.navShow {
    opacity: 1;
}

.search {

    input {
        background: none;
        border: none;
        font-family: "Nunito";
        font-size: 1em;
        font-weight: 500;
        margin: 0 12px;
        width: 100%;
    }

    &::placeholder {
        font-weight: 700;
    }

    input:focus {
        outline: none;
    }

    i {
        margin: 4px 12px 0px 12px;
    }
}

.wrapper {
    i {
        margin: 3px 12px 0px 12px;
        font-size: 18px;
    }
}

@keyframes fade-in-bottom {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
