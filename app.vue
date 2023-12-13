<template>
    <div id="zenbu" class="site-theme-dark">
        <div class="zenbu__content">
            <Navigation :slimSearchData="slimSearchData" />
            <NavigationSlim @move-search="handleSearchTransfer"
                @focus-search="handleFocusSearch" />
            <NuxtPage :api="api" />
            <FooterComponent />
        </div>
    </div>
</template>

<script lang="ts" setup generic="T">
import { useDark, useToggle } from '@vueuse/core';

const slimSearchData = ref(['', [], false, '']);

const isDark = useDark()
const toggleDark = useToggle(isDark)

const api = 'http://127.0.0.1:3069';
useState('API', () => {
    const api = 'http://127.0.0.1:3069';
    return api
});

const handleSearchTransfer = (input: string, results: any) => {
    // console.log('Scrolled all the way up while searchin', input, results);
    slimSearchData.value[0] = input;
    slimSearchData.value[1] = results;
    slimSearchData.value[3] = 'move';
}

const handleFocusSearch = (val: boolean) => {
    slimSearchData.value[2] = val;
    slimSearchData.value[3] = 'expand';
}
</script>

<style lang="scss">
@import url('element-plus/theme-chalk/dark/css-vars.css');

.site-theme-dark {
    --accent: #DBBFFF;
    --background: #151515;
    --foreground: #1E1E1E;
    --text-primary: #FFFFFF;
    --text-secondary: #858585;
    --text-inactive: #4B4B4B;
    --text-gray: #3E3E3E;
    --link-inactive: #9E9E9E;
    --placeholder-fill: #D9D9D9;
    --foreground-gray: #454545;
    --foreground-gray-700: #303030;
    --like-pink: #FF5271;
}

:root {
    --el-border-radius-base: 0.375rem !important;
    --el-color-primary: #DBBFFF !important;
}

html {
    font-family: "Nunito";
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    word-spacing: 1px;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    overflow-x: hidden;
}

body {
    margin: 0;
    font-family: "Nunito";
    text-decoration: none;
}

.zenbu__content {
    width: 1100px;
    min-height: 100vh;
    height: 100%;
    position: relative;
    margin: 0 auto;
    padding-bottom: 200px;
    padding-top: 140px;
}

#zenbu {
    min-height: 100vh;
    height: 100%;
    background: var(--background);
    color: var(--text-primary);
    margin: 0 auto;
    position: relative;
    width: 100vw;
}

#zenbu {
    display: flex;
    flex-direction: column;
}

i {
    color: var(--text-primary);
}

/* .el-input__wrapper {
    padding: 3px 11px !important;
} */

.el-popper {
    border-radius: 0.375rem !important;
}

.nav-enter-active,
.nav-leave-active {
    transition: all 0.3s;
    pointer-events: none;
}

.nav-enter,
.nav-leave-to {
    transform: translateY(-20px) !important;
    opacity: 0 !important;
}

.nav-leave {
    transform: translateY(0px) !important;
}

.navactive-enter-to {
    opacity: 1 !important;
}

.navactive-enter-active,
.navactive-leave-active {
    pointer-events: none;
}

.navactive-enter,
.navactive-leave-to {
    transform: translateY(-20px) !important;
    opacity: 0 !important;
}

.navactive-leave {
    transform: translateY(0px) !important;
}

.navactive-enter-to {
    opacity: 1 !important;
}
</style>
