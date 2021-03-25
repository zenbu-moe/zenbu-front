<template>
    <div class="wrap" :class="{'chosen': edit}" ref="wrap">
        <div class="title" :class="{'disabled': edit}" @click="test">
            <h2>Favorite Manga</h2>
        </div>
        <div v-if="wgtdata[3].w < 3" class="content-box relations" :class="{
            'one': wgtdata[3].rows == 1,
            'two': wgtdata[3].rows == 2,
            'three': wgtdata[3].rows == 3,
            'four': wgtdata[3].rows == 4,
            'five': wgtdata[3].rows == 5
            }">
            <div v-for="item in wgtdata[3].rows" :key="item.name">
                <relationsItem :width="itemWidth"/>
            </div>
        </div>
        <div v-if="wgtdata[3].w >= 3" class="content-box relations" :class="{
            'one': wgtdata[3].rows == 1,
            'two': wgtdata[3].rows == 2,
            'three': wgtdata[3].rows == 3,
            'four': wgtdata[3].rows == 4,
            'five': wgtdata[3].rows == 5
            }">
            <div v-for="item in x" :key="item.name">
                <relationsItem :width="itemWidth"/>
            </div>
        </div>
    </div>
</template>

<script>
import relationsItem from './relationsItem'

export default {
    name: 'favMangaWrap',
    props: ["edit", "wgtdata"],
    components: {
        relationsItem
    },
    data() {
        return {
            isExpanded: false,
            x: 1,
            expanded: false,
            itemWidth: null,
        }
    },
    methods: {
        expand() {
            this.$nextTick(() => { 
                console.log('debug id=0', this.wgtdata[3]) 
                this.x = this.wgtdata[3].w
            })
        },
        test() {
            console.log(this.$refs.wrap.offsetWidth)
            this.x = Math.round(this.wgtdata[3].w * 1.15) * this.wgtdata[3].rows
            if (this.x != 1) {
                this.itemWidth = ((this.$refs.wrap.offsetWidth - 30 - Math.round(this.wgtdata[3].w * 1.15) * 15) / Math.round(this.wgtdata[3].w * 1.15)) * 4/3
            } else {
                this.itemWidth = 90
            }
        },
    },
    mounted() {
        this.itemWidth = 120
    }
}
</script>

<style scoped>
    .relations {
        display: grid;
        grid-auto-flow: column;
        grid-column-gap: 15px;
    }

    .one {
        grid-template-rows: auto;
    }

    .two {
        grid-template-rows: auto auto;
    }

    .three {
        grid-template-rows: auto auto auto;
    }

    .four {
        grid-template-rows: auto auto auto auto;
    }

    .five {
        grid-template-rows: auto auto auto auto auto;
    }

    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 25px;
        margin-bottom: 5px;
    }

    .wrap {
        background-color: rgb(var(--color-foreground));
        border-radius: 15px;
        padding: 15px 15px 5px 15px;
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