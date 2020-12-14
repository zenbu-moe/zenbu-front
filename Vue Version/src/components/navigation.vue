<template>
    <div class="navbar">
        <navleft />
        <navmid />
        <navright />
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
    }
}
</script>

<style scoped>
    .navbar {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 54px;
        background-color: rgba(50,44,55,1.00);
        position: fixed;
        padding: 5px 0px 5px 0px;
        z-index: 1;
        box-shadow: 0px 1px 2px rgba(0,0,0,0.4);
    }
</style>