<template>
    <div class="info-box">
        <div class="section-header">
            <h3><a >Latest Light Novel Updates</a></h3>
            <a class="button-more browse more" @click="expand()" v-if="!isExpanded"><p>MORE</p><i class="fas fa-angle-down"></i></a>
            <a class="button-more browse less" @click="expand()" v-if="isExpanded"><p>LESS</p><i class="fas fa-angle-up"></i></a>
        </div>
        <div class="content-wrap">
            <div v-for="item in x" :key="item.id">
                <mangaItem />
            </div>
        </div>
        <div class="browse-more" v-if="isExpanded">
            <a class="button-more browse open-browse"><p>BROWSE MORE</P><i class="fas fa-angle-right"></i></a>
        </div>
    </div>
</template>

<script>
import mangaItem from './mangaItem';

export default {
    name: 'latestUpdates',
    components: {
        mangaItem
    },
    data() {
        return {
            isExpanded: false,
            x: 5
        }
    },
    methods: {
        expand() {
            this.isExpanded = !this.isExpanded;
            if (this.x == 5) {
                this.x = 10
            } else {
                this.x = 5
            }
        }
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

    .section-header {
        justify-content: space-between;
    }

    .info-box .content-wrap {
        padding: 20px;
        background-color: rgb(var(--color-foreground));
        border-radius: 20px;
        box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
        transition: 1s;
        display: grid;
        grid-template-columns: auto auto auto auto auto;
        grid-column-gap: 15px;
        grid-row-gap: 15px;
    }

    .browse-more {
        margin-top: 10px;
        display: flex;
        justify-content: flex-end;
    }

</style>