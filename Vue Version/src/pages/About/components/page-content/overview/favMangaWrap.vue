<template>
    <div class="wrap" :class="{'chosen': edit}">
        <div class="title" :class="{'disabled': edit}">
            <h2>Favorite Manga</h2>
            <a class="button-more browse more" @click="expand()" v-if="!isExpanded"><p>MORE</p><i class="fas fa-angle-down"></i></a>
            <a class="button-more browse less" @click="expand()" v-if="isExpanded"><p>LESS</p><i class="fas fa-angle-up"></i></a>
        </div>
        <div class="content-box relations" :class="{'disabled': edit}">
            <div v-for="item in x" :key="item.name">
                <relationsItem />
            </div>
        </div>
    </div>
</template>

<script>
import relationsItem from './favMangaWrap/relationsItem'

export default {
    name: 'favMangaWrap',
    props: ["edit"],
    components: {
        relationsItem
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
                this.x = 12
            } else {
                this.x = 5
            }
        }
    }
}
</script>

<style scoped>
    .relations {
        display: grid;
        grid-template-columns: auto auto auto auto auto;
        justify-content: space-between;;
    }

    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }

    .wrap {
        /* background-color: rgb(var(--color-foreground)); */
        border-radius: 20px;
        padding: 10px;
    }

    h2 {
        font-size: 1.2rem;
        font-family: "Raleway";
        color: rgb(var(--color-text));
        margin: 0px;
    }

    .chosen {
        transition: 0.2s;
        cursor: pointer;
    }

    .chosen:hover {
        background-color: rgba(var(--color-foreground), 0.7);
        transition: 0.2s;
    }

    .disabled {
        pointer-events: none;
    }
</style>