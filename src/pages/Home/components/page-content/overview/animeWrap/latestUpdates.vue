<template>
    <div class="info-box">
        <div class="section-header">
            <h3><a >Latest Airing Updates</a></h3>
            <!-- kinda ugly button change implementation -->
            <a class="button-more browse more" @click="expand()" v-if="!isExpanded"><p>MORE</p><i class="fas fa-angle-down"></i></a>
            <a class="button-more browse less" @click="expand()" v-if="isExpanded"><p>LESS</p><i class="fas fa-angle-up"></i></a>
        </div>
        <div class="content-wrap">
            <div v-for="item in x" :key="item.id">
                <animeItem />
            </div>
        </div>
        <div class="browse-more" v-if="isExpanded">
            <router-link @mousedown="$emit('set-tab', 1)" class="button-more browse open-browse"><p>BROWSE MORE</P><i class="fas fa-angle-right"></i></router-link>
        </div>
    </div>
</template>

<script>
import animeItem from './animeItem';

export default {
    name: 'latestUpdates',
    components: {
        animeItem
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

    a, router-link {
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
        padding: 15px;
        background-color: rgb(var(--color-foreground));
        border-radius: 15px;
        box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
        transition: 1s;
        display: grid;
        grid-template-columns: auto auto auto auto auto;
        justify-content: space-between;
        grid-column-gap: 15px;
        grid-row-gap: 15px;
    }

    .browse-more {
        margin-top: 10px;
        display: flex;
        justify-content: flex-end;
    }

</style>