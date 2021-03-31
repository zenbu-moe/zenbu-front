<template>
    <div class="page-content">
        <div class="banner">
            <div class="banner-cover" :class="{'bright': isExpanded, 'dark': !isExpanded}"></div>
        </div>
        <headerWrap @expand-banner="expand()"/>
        <div class="button-jump" @click="scroll()">
            <p>Jump to reviews</p>
        </div>
        <contentWrap />
        <reviewWrap ref="review" />
    </div>
</template>

<script>
import headerWrap from './headerWrap';
import reviewWrap from './reviewWrap';
import contentWrap from './content';

export default {
    name: 'pageContent',
    components: {
        headerWrap,
        contentWrap,
        reviewWrap
    },
    data() {
        return {
            isExpanded: false
        }
    },
    methods: {
        expand() {
            this.isExpanded = !this.isExpanded
        },
        scroll() {
            this.$refs.review.$refs.review.scrollIntoView()
        }
    }
}
</script>

<style scoped>
    h1 {
        font-size: 1.6rem;
        color: rgb(var(--color-text));
    }

    p {
        color: rgb(var(--color-text));
        margin: 0;
    }

    .page-content {
        padding-top: 50px;
        position: relative;
    }

    .banner {
        height: 360px;
        background-image: url("../assets/bakemonogatari.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .banner-cover {
        height: 360px;
        transition: 0.5s ease-in-out;
    }

    .bright {
        background-color: rgba(18, 15, 19, 0.1);
    }

    .dark {
        background-color: rgba(18, 15, 19, 0.7);
    }

    .button-jump {
        padding: 5px 10px;
        position: absolute;
        left: calc(50% - 100px);
        background-color: rgb(var(--color-foreground));
        width: 200px;
        margin: 30px auto 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 30px;
        cursor: pointer;
        z-index: 0;
    }
</style>