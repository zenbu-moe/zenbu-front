<template>
    <div class="info-box">
        <div class="section-header">
            <h3><a >Top Groups</a></h3>
            <!-- kinda ugly button change implementation -->
            <a class="button-more browse more" @click="expand()" v-if="!isExpanded"><p>MORE</p><i class="fas fa-angle-down"></i></a> 
            <a class="button-more browse less" @click="expand()" v-if="isExpanded"><p>LESS</p><i class="fas fa-angle-up"></i></a>
        </div>
        <div class="content-wrap maximized" v-if="state == 0">
            <div v-for="item in x" :key="item.id" class="uhh">
                <groupItem />
            </div>
        </div>
        <div class="content-wrap minimized" v-if="state != 0">
            <div v-for="item in 5" :key="item.id" class="uhh">
                <groupItem />
            </div>
        </div>
        <div class="browse-more" v-if="isExpanded">
            <router-link @mousedown="$emit('set-tab', 5);" to="/browse" class="button-more browse open-browse"><p>BROWSE MORE</P><i class="fas fa-angle-right"></i></router-link>
        </div>
    </div>
</template>

<script>
import groupItem from './groups/groupItem';

export default {
    name: 'topGroups',
    components: {
        groupItem
    },
    props: ["state"],
    data() {
        return {
            isExpanded: false,
            x: 3 // number of items displayed by default in maximized view (wrapState 0)
        }
    },
    methods: {
        expand() {
            this.isExpanded = !this.isExpanded;
            if (this.state == 0) { // checks if top groups are in focus - if yes, expands the container; if they are not, emits an event to set them in focus
                if (this.x == 3) {
                    this.x = 5 // sets number of items displayed to 12
                } else {
                    this.x = 3
                }
            } else {
                this.$emit('set-wrap', 0)
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
        margin-bottom: 40px;
    }

    .section-header {
        justify-content: space-between;
    }

    .info-box .content-wrap {
        padding: 0px 15px;
        background-color: rgb(var(--color-foreground));
        border-radius: 15px;
        box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
        transition: 1s;
    }

    .maximized {
        display: grid;
        grid-template-columns: auto;
    }

    .minimized {
        display: flex;
        flex-direction: column;
    }

    .browse-more {
        margin-top: 10px;
        display: flex;
        justify-content: flex-end;
    }

    .uhh {
        border-bottom: 1px solid rgb(var(--color-text), 0.1);
    }

    .uhh:last-child {
        border-bottom: 0px solid rgb(var(--color-text), 0.3);
    }
</style>