<template>
    <div>
        <div @click="emitToggle()" class="item" v-if="item.type != 'format'">
            {{ item.name }}
            <div class="indicator" v-if="item.chosen">
                <i class="fas fa-circle"></i>
            </div>
        </div>
        <div @click="emitToggle()" class="item" v-if="item.type == 'format' && item.id == 'anime' && filters[0].chosen">
            {{ item.name }}
            <div class="indicator" v-if="item.chosen">
                <i class="fas fa-circle"></i>
            </div>
        </div>
        <div @click="emitToggle()" class="item" v-if="item.type == 'format' && item.id == 'manga' && filters[1].chosen">
            {{ item.name }}
            <div class="indicator" v-if="item.chosen">
                <i class="fas fa-circle"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'filterItem',
    props: ['item', 'filters'],
    methods: {
        emitToggle() {
            const obj = this.item
            this.$emit('expand', obj)
            console.log(obj)
        }
    }

}
</script>

<style scoped>
    .item {
        margin: 5px 0px;
        border-radius: 10px;
        cursor: pointer;
        padding: 5px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .indicator {
        color: rgba(var(--color-text));
        font-size: 0.8rem;
    }

    .item:hover {
        background: rgba(var(--color-background));
    }
</style>