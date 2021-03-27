<template>
    <div class="button-add">
        <div @mouseover="setHover(true)" @mouseleave="setHover(false)">
            <btn-add v-if="!isHovering" class="button plus"><i class="fas fa-plus"></i></btn-add>
            <btn-add v-if="isHovering" class="button caret"><i class="fas fa-angle-down"></i></btn-add>
        </div>
        <p>Start watching</p>
    </div>
</template>

<script>
export default {
    name: 'buttonAddToList',
    data() {
        return {
            isHovering: false
        }
    },
    methods: {
        setHover(bool) {
            this.isHovering = bool
        }
    },
    beforeMount() {
        this.isHovering = false
    }
}
</script>

<!--  -->

<style scoped>
    .button-add {
        width: 165px;
        display: flex;
        overflow: hidden;
        align-items: center;
        white-space: nowrap;
        background-color: rgba(138, 122, 163, 0.7);
        border-radius: 30px;
        margin-right: 10px;
        transition: 0.3s ease-out;
        cursor: pointer;
        animation: fadeIn 0.3s;
    }

    i {
        transition: 1s;
    }

    .button-add p {
        color: white;
        margin: 0;
    }

    .button-add:hover {
        background-color: rgba(138, 122, 163, 0.85);
        transition: 0.1s;
    }

    btn-add {
        display: inline-block;
        color: white;
        background-color: rgba(138, 122, 163, 0.4);
        width: 35px;
        min-width: 35px;
        height: 35px;
        text-align: left;
        border-radius: 30px;
        transition: 0.3s ease-out;
        cursor: pointer;
        margin-right: 10px;
        animation: fadeIn 0.3s;
    }

    .plus {
        padding: 8px 9px 9px 10px;
    }

    .caret {
        font-size: 25px;
        padding: 4px 9px 9px 9px;
    }

    btn-add:hover {
        background-color: rgba(138, 122, 163, 1);
        transition: 0.1s;
    }
</style>