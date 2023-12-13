<template>
    <div class="navigation" :class="{ expand: isSearching }">
        <div class="wrapper">
            <div class="links">
                <div class="logo">全</div>
                <div class="links__inner" :class="{ fade: isSearching }">
                    <NuxtLink to="/feed">Feed</NuxtLink>
                    <NuxtLink to="/anime">Anime</NuxtLink>
                    <NuxtLink to="/manga">Manga</NuxtLink>
                    <NuxtLink to="/light-novels">Light Novels</NuxtLink>
                    <NuxtLink to="/community">Community</NuxtLink>
                </div>
            </div>
        </div>

        <div ref="search__wrapper" class="wrapper search">
            <input ref="search" placeholder="Search" id="search" autocomplete="off"
                v-model="searchInput">
            <i class="bi bi-search"></i>
        </div>

        <MainSearch :look="'regular'" :activeTab="activeTab"
            @change-tab="handleTabChange" ref="searchWrapper"
            :results="searchResults" :isOpen="isSearchOpen" />

        <div class="wrapper ">
            <i class="bi bi-inbox"></i>
            <i class="bi bi-bell"></i>
            <UserAvatar :mode="'normal'" />
            <i class="bi bi-chevron-down"></i>
        </div>
    </div>
</template>

<script lang="ts" setup generic="T">
const props = defineProps<{
    slimSearchData: any
}>();

const search = ref();
const searchInput = ref('');
const searchWrapper = ref(null);
const searchResults = ref([]);
const search__wrapper = ref();
const slimSearchData = ref(props.slimSearchData);

const activeTab = ref('anime');

const handleTabChange = (tab: string): any => {
    activeTab.value = tab;
}

const isSearchOpen = ref(false);
const isSearching = ref(false);

const ignoreSearchValueChange = ref(false);

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

    if (ignoreSearchValueChange.value) {
        ignoreSearchValueChange.value = false;
        return;
    }

    if (val !== '') {
        toggleSearch(true);
    }

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

    /* if (!newCount) {
        toggleSearch(false);
        searchInput.value = '';
    } */
});

watch(props, (val) => {

    console.log(val.slimSearchData[3]);

    if (val.slimSearchData[3] === 'expand') {
        isSearching.value = val.slimSearchData[3];
    }

    if (val.slimSearchData[3] === 'move') {
        /* focused.value = true; */
        toggleSearch(true);

        ignoreSearchValueChange.value = true;

        isSearching.value = true;
        searchInput.value = val.slimSearchData[0];
        searchResults.value = val.slimSearchData[1];
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
    grid-template-columns: 88px 672px 300px !important;
}

.fade {
    opacity: 0;
}

.navigation {
    position: absolute;
    display: grid;
    justify-content: space-between;
    grid-template-columns: 540px 220px 300px;
    column-gap: 20px;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 40px;
    animation: fade-in-bottom 0.5s ease-out;
    transition: all 0.5s;
    z-index: 1000;
    width: 1100px;
    top: 0px;
}

.wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--foreground);
    border-radius: 8px;
    padding: 14px 14px;
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
        margin: 0 14px;
        white-space: nowrap;
    }
}

.logo {
    width: 32px;
    height: 32px;
    margin: 0 14px;
    font-family: "Dela Gothic One";
    font-size: 32px;
    margin-top: -16px;
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

        &::placeholder {
            font-weight: 700;
        }
    }

    input:focus {
        outline: none;
    }

    i {
        margin: 0 12px;
    }
}

.wrapper {
    i {
        margin: 0 12px;
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
