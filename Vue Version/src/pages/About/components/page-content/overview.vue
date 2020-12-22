<template>
    <div class="overview">

        <div class="left">
            <div v-for="item in cells.leftCol.slice(0, leftUpVisible)" :key="item.id">
                <overviewItem :edit="edit" :cell="item.content" :id="item.id" @set-content="setLeftContent(item.id, $event)" :cells="cells"/>
            </div>
        </div>
        <div class="right">
            <div v-for="item in cells.rightCol.slice(0, rightUpVisible)" :key="item.id">
                <overviewItem :edit="edit" :cell="item.content" :id="item.id" @set-content="setRightContent(item.id, $event)" :cells="cells"/>
            </div>
        </div>
        
        <div class="header">
            <div v-if="edit == true" class="wrap">
                <div class="blank-about">
                </div>
            </div>
            <div v-if="edit == true" class="wrap">
                <div class="blank-details">
                </div>
            </div>
        </div>
        <div class="left">
            <div v-for="item in cells.leftColBot.slice(0, leftDownVisible)" :key="item.id">
                <overviewItem :edit="edit" :cell="item.content" :id="item.id" @set-content="setLeftBotContent(item.id, $event)" :cells="cells"/>
            </div>
        </div>
        <div class="right">
            <div v-for="item in cells.rightColBot.slice(0, rightDownVisible)" :key="item.id">
                <overviewItem :edit="edit" :cell="item.content" :id="item.id" @set-content="setRightBotContent(item.id, $event)" :cells="cells"/>
            </div>
            <feedWrap />
        </div>
        
        
    </div>
</template>

<script>
import feedWrap from './overview/feedWrap';
import overviewItem from './overviewItem';

export default {
    name: 'overview',
    props: ["edit"],
    components: {
        feedWrap,
        overviewItem
    },
    methods: {
        setLeftContent(id, content) {
            this.cells.leftCol[id].content = content
        },
        setRightContent(id, content) {
            this.cells.rightCol[id].content = content
        },
        setLeftBotContent(id, content) {
            this.cells.leftColBot[id].content = content
        },
        setRightBotContent(id, content) {
            this.cells.rightColBot[id].content = content
        },
        countVisible(array) {
            var count = 0;
            for (var i = 0; i < array.length; i++) {
                if (array[i].content == 'blank') {
                    ++count
                }
            }
            return array.length + 1 - count
        }
    },
    data() {
        return {
            cells: {
                leftCol: [
                    {
                        id: 0,
                        content: 'blank'
                    },
                    {
                        id: 1,
                        content: 'blank'
                    },
                    {
                        id: 2,
                        content: 'blank'
                    },
                    {
                        id: 3,
                        content: 'blank'
                    },
                    {
                        id: 4,
                        content: 'blank'
                    },
                    {
                        id: 5,
                        content: 'blank'
                    },
                    {
                        id: 6,
                        content: 'blank'
                    },
                ],
                rightCol: [
                    {
                        id: 0,
                        content: 'blank'
                    },
                    {
                        id: 1,
                        content: 'blank'
                    },
                    {
                        id: 2,
                        content: 'blank'
                    },
                    {
                        id: 3,
                        content: 'blank'
                    },
                    {
                        id: 4,
                        content: 'blank'
                    },
                    {
                        id: 5,
                        content: 'blank'
                    },
                    {
                        id: 6,
                        content: 'blank'
                    },
                ],
                header: [
                    {
                        id: 0,
                        content: 'blank'
                    },
                    {
                        id: 1,
                        content: 'blank'
                    },
                    {
                        id: 2,
                        content: 'blank'
                    },
                ],
                leftColBot: [
                    {
                        id: 0,
                        content: 'blank'
                    },
                    {
                        id: 1,
                        content: 'blank'
                    },
                    {
                        id: 2,
                        content: 'blank'
                    },
                    {
                        id: 3,
                        content: 'blank'
                    },
                    {
                        id: 4,
                        content: 'blank'
                    },
                    {
                        id: 5,
                        content: 'blank'
                    },
                    {
                        id: 6,
                        content: 'blank'
                    },
                ],
                rightColBot: [
                    {
                        id: 0,
                        content: 'blank'
                    },
                    {
                        id: 1,
                        content: 'blank'
                    },
                    {
                        id: 2,
                        content: 'blank'
                    },
                    {
                        id: 3,
                        content: 'blank'
                    },
                    {
                        id: 4,
                        content: 'blank'
                    },
                    {
                        id: 5,
                        content: 'blank'
                    },
                    {
                        id: 6,
                        content: 'blank'
                    },
                ],
            },
            leftUpVisible: null,
            rightUpVisible: null,
            leftDownVisible: null,
            rightDownVisible: null
        }
    },

    updated() {
        this.leftUpVisible = this.countVisible(this.cells.leftCol)
        this.leftDownVisible = this.countVisible(this.cells.leftColBot)
        this.rightUpVisible = this.countVisible(this.cells.rightCol)
        this.rightDownVisible = this.countVisible(this.cells.rightColBot)
    }
}
</script>

<style scoped>
    .overview {
        display: grid;
        grid-template-columns: 49% 49%;
        justify-content: space-between;
        background-color: rgb(var(--color-background-dark));
        border-radius: 20px;
        width: 1400px;
        margin: 20px auto;
        padding: 20px;
    }

    .header {
        grid-area: 2 / 1 / span 1 / span 2;
    }

    .left {
        grid-column: 1 / 2;
    }

    .right {
        grid-column: 2 / 3;
    }

    .wrap {
        padding: 10px;
    }

    .blank {
        border: 2px dashed rgb(133, 133, 133);
        height: 200px;
        width: 100%;
        border-radius: 20px;
        transition: 0.2s;
        cursor: pointer;
    }

    .blank:hover,
    .blank-about:hover,
    .blank-details:hover {
        background-color: rgba(var(--color-foreground), 0.7);
        transition: 0.2s;
    }

    .blank-about {
        border: 2px dashed rgb(133, 133, 133);
        height: 350px;
        width: 100%;
        border-radius: 20px;
        transition: 0.2s;
        cursor: pointer;
    }

    .blank-details {
        border: 2px dashed rgb(133, 133, 133);
        height: 50px;
        width: 100%;
        border-radius: 20px;
        transition: 0.2s;
        cursor: pointer;
    }

</style>