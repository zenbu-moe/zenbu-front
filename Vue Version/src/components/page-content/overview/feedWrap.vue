<template>
    <div class="wrap">
        <feed />
        <sidebar />
    </div>
</template>

<script>
import feed from './feedWrap/feed';
import sidebar from './feedWrap/sidebar';

export default {
    name: 'feedWrap',
    components: {
        feed,
        sidebar
    }
}
</script>

<style scoped>
    .wrap {
        display: grid;
        grid-template-columns: auto 430px;
        grid-gap: 10px;
        animation: fadeInUp 0.5s;
    }

</style>