<template>
    <div class="search">
        <div type="submit" class="button" @click="$emit('open-search')"><svg-icon icon="light/search"></svg-icon></div>
		<input type="text" v-model="formValue" placeholder="Search Zenbu...">
    </div>
</template>

<script>
export default {
    name: 'search',
    components: {

    },
    data() {
        return {
            formValue: ''
        }
    },
    methods: {
        onType() {
            if (this.formValue != '') {
                this.$emit('on-type', this.formValue)
            }
            this.$nextTick(() => (this.formValue = ''))
        }
    },
    updated() {
        this.onType()
    }
}
</script>

<style scoped>
    .search {
        background: rgba(255,255,255,0.05);
        padding: 0px 10px;
        border-radius: 30px;
        display: flex;
        align-items: center;
    }

    .search .button {
        background: rgba(0,0,0,0.0);
        font-size: 20px;
        border: none;
        color: rgba(255,255,255,0.43);
        cursor: pointer;
        transition: 0.5s;
        margin-right: 5px;
    }

    .button:hover {
        color: rgba(255,255,255,1);
        transition: 0.1s;
    }

    input[type=text] {
        color: white;
        padding-top: 5px;
    }

</style>