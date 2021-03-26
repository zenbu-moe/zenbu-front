<template>
    <div class="navbar">
        <div class="wrap">
            <navleft @open-search="$emit('open-search')" @on-type="onType" />
            <navmid />
            <navright @change-theme="$emit('change-theme')" :isDark="isDark" @open-popup="$emit('open-popup', id)" />
        </div>
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
    },
    methods: {
        onType(str) {
           console.log(str)
           this.$emit('on-type', str)
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

    .wrap {
        width: 1130px;
        display: flex;
        justify-content: space-between;
    }
</style>