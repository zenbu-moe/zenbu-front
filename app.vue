<template>
    <el-scrollbar height="100vh">
        <div id="zenbu" class="site-theme-dark">
            <div class="zenbu__content">
                <Navigation />
                <NuxtPage :api="api" />
                <FooterComponent />
            </div>
        </div>
    </el-scrollbar>
</template>

<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark()
const toggleDark = useToggle(isDark)

console.log(isDark);

const api = 'http://127.0.0.1:3069';
useState('API', () => {
    const api = 'http://127.0.0.1:3069';
    return api
});
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
</style>
