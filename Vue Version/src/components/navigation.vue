<template>
    <div class="navbar">
        <navleft />
        <navmid />
        <navright @change-theme="$emit('change-theme')" :isDark="isDark" @open-popup="$emit('open-popup', id)" />
    </div>
</template>

<script>
import navleft from './navigation/navleft'
import navmid from './navigation/navmid';
import navright from './navigation/navright';

export default {
    name: 'navigation',
    components: {
        navleft,
        navmid,
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
    @import url('../fonts/bootstrap-icons/bootstrap-icons.css');

    .navbar {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 54px;
        background-color: rgb(var(--color-navigation));
        position: fixed;
        padding: 5px 0px 5px 0px;
        z-index: 999;
        box-shadow: 0px 1px 2px rgba(0,0,0,0.4);
        transition: 1s;
    }
</style>