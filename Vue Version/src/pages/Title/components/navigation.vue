<template>
    <div class="navbar">
        <navleft />
        <navright @change-theme="$emit('change-theme')" :isDark="isDark" @open-popup="$emit('open-popup', id)" />
    </div>
</template>

<script>
import navleft from './navigation/navleft'
import navright from './navigation/navright';

export default {
    name: 'navigation',
    components: {
        navleft,
        navright
    },
    props: ["isDark"],
    data() {
        return {
            isOverlayVisible: true
        }
    }
}
</script>

<style scoped>

    .navbar {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 60px;
        background-color: rgb(var(--color-navigation));
        position: fixed;
        padding: 5px 0px 5px 0px;
        z-index: 999;
        box-shadow: 0px 1px 5px rgba(0,0,0,0.5);
        transition: 1s;
    }
</style>