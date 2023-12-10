<template>
    <div class="navigation" :class="{
        expand: focused,
        hidden: !isScrolled,
        navShow: isScrolled,
        fadeNav: !scrollDirection && isScrolled
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

        <div class="wrapper search">
            <input ref="search" placeholder="Search" id="search" autocomplete="off">
            <i class="bi bi-search"></i>
        </div>

        <div class="wrapper ">
            <i class="bi bi-inbox"></i>
            <i class="bi bi-bell"></i>
            <UserAvatar :mode="'slim'" />
            <i class="bi bi-chevron-down"></i>
        </div>
    </div>
</template>

<script lang="ts" setup>

const search = ref();
const { focused } = useFocus(search, { initialValue: false })
watch(focused, (newCount, oldCount) => {
    if (newCount) {
        scrollDirection.value = false;
    } else {
        scrollDirection.value = true;
    }

    console.log(newCount);
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

.navigation {
    position: fixed;
    display: grid;
    justify-content: space-between;
    grid-template-columns: 540px 220px 300px;
    column-gap: 20px;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 40px;
    transition: all 0.25s;
    z-index: 1000;
    width: 1100px;
    top: 0px;
    filter: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.15));
    opacity: 0;

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

.navShow {
    opacity: 0.3;
}

.fadeNav {
    opacity: 1;
}

.search {

    input {
        background: none;
        border: none;
        font-family: "Nunito";
        font-size: 1em;
        font-weight: 700;
        margin: 0 12px;
        width: 100%;
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
