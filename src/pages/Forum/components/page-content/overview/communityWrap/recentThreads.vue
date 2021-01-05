<template>
    <div class="info-box">
        <div class="section-header">
            <h3><a >Recently active forum threads</a></h3>
            <!-- kinda ugly button change implementation -->
            <a class="button-more" @click="expand()"><i class="fas fa-angle-right"></i></a>
        </div>
        <div class="content-wrap">
            <div v-for="thread in 3" :key="thread.id"> <!-- 3 is temporary, should be array.slice(0,3) -->
                <threadItem :threadData="threads"/>
            </div>
        </div>
    </div>
</template>

<script>
import threadItem from './threads/threadItem';

export default {
    name: 'recentThreads',
    components: {
        threadItem
    }
}
</script>

<style scoped>
    h3 {
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: rgb(var(--color-text));
        animation: fadeInUp 0.3s;
    }

    .info-box {
        margin-bottom: 20px;
    }

    .info-box .content-wrap {
        padding: 10px;
        background-color: rgb(var(--color-foreground));
        border-radius: 20px;
        box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
        transition: 1s;
        display: flex;
        flex-direction: column;
    }
</style>