<template>
    <div class="info-box">
        <div class="section-header">
            <h3><a @click="expand()">Currently Reading</a></h3>
            <a class="button-more" @click="expand()"><i class="fas fa-angle-right"></i></a>
        </div>
        <div class="content-wrap" v-if="state == 0">
            <div v-for="item in 12" :key="item.id">
                <readingItem />
            </div>
        </div>
        <div class="content-wrap-expanded" v-if="state == 1">
            <div v-for="item in 24" :key="item.id">
                <readingItem />
            </div>
        </div>
    </div>
</template>

<script>
import readingItem from './readingItem';

export default {
    name: 'currentlyReading',
    components: {
        readingItem
    },
    methods: {
        expand() {
            if (this.state == 0) {
                this.$emit('expand', 1)
            } else {
                this.$emit('expand', 0)
            }
        }
    },
    props: ["state"]
}
</script>

<style scoped>
    h3 {
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: rgb(var(--color-text));
    }

    .info-box {
        margin-bottom: 20px;
    }

    .info-box .content-wrap {
        padding: 20px;
        background-color: rgb(var(--color-foreground));
        border-radius: 20px;
        box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
        transition: 1s;
        display: grid;
        grid-row-gap: 15px;
        grid-column-gap: 15px;
        grid-template-columns: auto auto auto auto;
    }

    .info-box .content-wrap-expanded {
        padding: 20px;
        background-color: rgb(var(--color-foreground));
        border-radius: 20px;
        box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
        transition: 1s;
        display: grid;
        grid-template-columns: auto auto auto auto auto auto auto auto;
        grid-column-gap: 15px;
        grid-row-gap: 15px;
    }

</style>