<template>
    <div>
        <div class="toolbar" v-if="edit">
            <div class="item" @click="feedPosition = 0">
                <i class="fas fa-lightbulb"></i>
            </div>
            <div class="item" @click="feedChooseToggle()" @mouseleave="feedChooseMode = false">
                <i class="fas fa-cog"></i><p>Feed options</p>
                <div class="selection" v-if="edit && feedChooseMode">
                    <div class="selection-item" @click="feedPosition = 1">
                        <i class="fas fa-arrow-to-right"></i><p>Feed position: right</p>
                    </div>
                    <div class="selection-item" @click="feedPosition = 0">
                        <i class="fas fa-arrow-to-left"></i><p>Feed position: left</p>
                    </div>
                    <div class="selection-item">
                        <i class="fas fa-arrows-h"></i><p>Wide feed</p>
                    </div>
                    <div class="selection-item" v-if="feedShown" @click="feedShown = false">
                        <i class="fas fa-power-off"></i><p>Hide feed</p>
                    </div>
                    <div class="selection-item" v-if="!feedShown" @click="feedShown = true">
                        <i class="fas fa-power-off"></i><p>Show feed</p>
                    </div>
                </div>
            </div>
            <div class="item" @click="feedPosition = 1">
                <i class="fas fa-th-large"></i><p>Templates</p>
            </div>
            <div class="item" @click="chooseToggle()" @mouseleave="chooseMode = false">
                <i class="fas fa-plus"></i><p>Add module...</p>
                <div class="selection" v-if="edit && chooseMode">
                <div v-for="item in selection" :key="item.id">
                    <div class="selection-item" @click="addWidget(item.id)" v-if="item.available == true">
                        <i :class="item.class"></i><p>{{ item.title }}</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class="grid-stack grid-stack-9" gs-static="true">
            <widget v-for="widget in cells" :widget="widget" :edit="edit" :key="widget.id" @remove-widget="deleteWidget" ref="wgt"/>
            <div class="grid-stack-item"  style="z-index: 0" v-bind:gs-h="feedHeight" v-bind:gs-x="feedPosition" gs-y="1" v-bind:gs-w="feedWidth" ref="fd" gs-no-move="true" gs-no-resize="true" :class="{'hidden': edit}">
                <div class="grid-stack-item-content" style="overflow: hidden">
                    <feedWrap @set-height="setHeight" ref="fw" v-if="!edit && feedShown"/>
                </div>
            </div>
        </div>
        <div class="grid-stack grid-stack-9" gs-static="false">
            <div class="grid-stack-item"  style="z-index: 0" v-bind:gs-h="blankHeight" gs-max-h="13" gs-min-h="13" gs-min-w="3" gs-x="9999" gs-y="1" v-bind:gs-w="feedWidth" ref="fdH" gs-no-move="false" gs-no-resize="false" :class="{'hidden': !edit}">
                <div class="grid-stack-item-content" style="overflow: hidden">
                    <div class="fake-feed">
                        <div class="fake-cover">
                            <p>Feed</p>
                        </div>
                    </div>
                    <!-- <feedWrap @set-height="setHeight" ref="fw" v-if="edit && feedShown"/> -->
                </div>
            </div>
        </div>
    </div>
</template>              

<script>
import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.css';
import 'gridstack/dist/h5/gridstack-dd-native';
import 'gridstack/dist/gridstack-extra.css';

import widget from './widget';
import feedWrap from './overview/feedWrap';

export default {
    name: 'overview',
    props: ["edit"],
    components: {
        widget,
        feedWrap
    },
    methods: {
        chooseToggle() {
            this.chooseMode = !this.chooseMode
        },
        feedChooseToggle() {
            this.feedChooseMode = !this.feedChooseMode
        },
        addNewWidget: function () {
            const node = this.$options.items[this.count] || {
              x: Math.round(12 * Math.random()),
              y: Math.round(5 * Math.random()),
              w: Math.round(1 + 3 * Math.random()),
              h: Math.round(1 + 3 * Math.random()),
            };
            node.id = node.content = String(this.count++);
            this.grid[0].addWidget(node);
        },
        lockGrid: function() {
            this.grid[0].setStatic(true)
            this.grid[1].setStatic(true)
        },
        unlockGrid: function() {
            this.grid[0].setStatic(false)
            this.grid[1].setStatic(false)
        },
        addWidget(id) {
            const widget = {
                id: id,
                maxH: 100
            };

            if (id == 2 || id == 3 || id == 4) {
                widget.maxH = 9;
            }

            this.selection[id].available = false;
            this.cells.push(widget);
            this.$nextTick(() => {
                this.grid[0].makeWidget(`#${widget.id}`);
            });
        },
        deleteWidget(element, id) {
            
            console.log(element.target.parentElement)
            this.grid[0].removeWidget(element.target.parentElement)

            for (var i = 0; i < this.cells.length; i++) {
                if (this.cells[i].id == id) {
                    this.cells.splice(i, 1)
                }
            }
            this.checkAvailable()
        },
        checkAvailable() {
            for (var i = 0; i < this.selection.length; i++) {
                this.selection[i].available = true
                for (var j = 0; j < this.cells.length; j++) {
                    if (this.selection[i].id == this.cells[j].id) {
                        this.selection[i].available = false 
                    }
                }
            }
        },
        setGridStatic() {
            if (this.edit == true) {
                this.unlockGrid()
            } else {
                this.lockGrid()
            }
        },
        computeProperties() {
            this.grid.on('change', function(event, element) {
                const node = element.gridstackNode;
                console.log(node.id)
            });
        },
        setHeight(element) {
            var feedHeight = Math.ceil(element.clientHeight/25)
            var widget = this.$refs.fd
            var widgetH = this.$refs.fdH

            if (this.edit) {
                this.grid[1].update(widgetH, { h: 12 })
                this.grid[0].update(widget, { h: 0 })
            } else {
                this.grid[0].update(widget, { h: feedHeight })
                this.grid[1].update(widgetH, { h: 0 })
            }          
        },
        manageFeed() {
            var widget = this.$refs.fd;
            var widgetH = this.$refs.fdH

            if (this.edit) {
                this.grid[0].update(widget, { w: 5, x: 9999, y: 0, h: 0})

                if (!this.feedShown) {
                    this.grid[1].update(widgetH, { w: 5, x: 9999, y: 0, h: 0})
                } else {
                    this.grid[1].update(widgetH, { w: this.feedWidth, x: this.feedPosition, y: 9999, h: this.blankHeight})
                }

            } else {
                this.grid[1].update(widgetH, { w: 5, x: 9999, y: 0, h: 0})

                if (!this.feedShown) {
                    this.grid[0].update(widget, { w: 5, x: 9999, y: 0, h: 0})
                } else {
                    this.grid[0].update(widget, { w: this.feedWidth, x: this.feedPosition, y: 9999})
                }
            }
        },
        swapFeed() {
            /* var widget = this.$refs.fd */
            /* var widgetH = this.$refs.fdH

            if (this.edit) {
                let pos = parseInt(this.$refs.fd.getAttribute('gs-x'))
                this.grid[1].update(widgetH, { w: 1, x: pos, y: 9999})
            } */
        }
    },
    data() {
        return {
            chooseMode: false,
            feedChooseMode: false,
            feedPosition: 4,
            feedHeight: 1,
            feedWidth: 5,
            blankHeight: 13,
            feedShown: true,
            cells: [

            ],
            selection: [
                {
                    id: 0,
                    name: 'bio',
                    available: true,
                    title: 'About Me',
                    class: 'fas fa-user'
                },
                {
                    id: 1,
                    name: 'stat',
                    available: true,
                    title: 'Quick Stats',
                    class: 'fas fa-chart-pie'
                },
                {
                    id: 2,
                    name: 'anime',
                    available: true,
                    title: 'Favorite Anime',
                    class: 'fas fa-play-circle'
                },
                {
                    id: 3,
                    name: 'manga',
                    available: true,
                    title: 'Favorite Manga',
                    class: 'fas fa-book-open'
                },
                {
                    id: 4,
                    name: 'ranobe',
                    available: true,
                    title: 'Favorite Ranobe',
                    class: 'fas fa-book'
                },
                /* {
                    id: 5,
                    name: 'log',
                    available: true,
                    title: 'Activity Log',
                    class: 'fas fa-calendar-alt'
                },
                {
                    id: 6,
                    name: 'chars',
                    available: true,
                    title: 'Favorite Characters',
                    class: 'fas fa-heart-circle'
                }, */
            ]
        }
    },
    mounted: function() {
        let options = { 
                acceptWidgets: false,
                float: false, 
                column: 9,
                cellHeight: '25px',
                removable: false,
                removeTimeout: 100,
                minRow: 1,
                marginLeft: 20,
                marginRight: 20,
                animate: false,
            }
        this.grid = GridStack.initAll(options);

        this.grid[1].on('dragstop', (event, el) => {
            let x = parseInt(el.getAttribute('gs-x'));
            this.feedPosition = x
        });
        this.grid[1].on('resizestop', (event, el) => {
            let w = parseInt(el.getAttribute('gs-w'));
            this.feedWidth = w
        });
    },
    updated() {
        this.setGridStatic();
        this.manageFeed();
    }
}
</script>

<style scoped>
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
        display: grid;
        grid-template-columns: 50% 50%;
        padding: 20px;
    }

    .hidden {
        height: 0;
    }

    .blank {
        border: 2px dashed rgb(133, 133, 133);
        height: 200px;
        width: 100%;
        border-radius: 20px;
        transition: 0.2s;
        cursor: pointer;
    }

    .toolbar {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .toolbar .item {
        display: flex;
        align-items: center;
        background-color: rgb(var(--color-foreground));
        color: rgb(var(--color-text));
        border-radius: 15px;
        height: 50px;
        margin: 20px 20px 20px 0px;
        padding: 10px 20px;
        cursor: pointer;
        transition: 1s;
        animation: zoomIn 0.3s;
    }

    .toolbar p {
        margin-left: 10px;
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

    .selection {
        display: flex;
        flex-direction: column;
        padding: 15px;
        position: absolute;
        z-index: 999;
        margin: 0px 0px 0px -100px;
        width: 300px;
        height: auto;
        background-color: rgba(var(--color-foreground), 1);
        border-radius: 20px;
        animation: zoomIn 0.3s;
        box-shadow: 0px 0px 30px rgba(0,0,0, 0.2);
    }

    .selection-item {
        border-radius: 10px;
        background-color: rgba(var(--color-foreground), 1);
        height: 40px;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 10px;
        cursor: pointer;
        margin: 5px 0px;
        transition: 0.2s;
        color: rgb(var(--color-text))
    }

    .selection-item:hover {
        background-color: rgba(var(--color-foreground-dark), 0.5);
        transition: 0.2s;
    }

    .selection p {
        font-size: 1.2rem;
        margin-left: 5px;
    }

    .selection h3 {
        margin-top: 10px;
    }

    btn {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        height: 50px;
        width: 50px;
        border-radius: 50%;
        z-index: 500;
        background-color: red;
        cursor: pointer;
    }

    .fake-feed {
        border-radius: 15px;
        background-color: rgba(var(--color-foreground), 1);
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 300px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    
    .fake-cover p {
        color: rgb(var(--color-text));
        font-size: 2rem;
        margin: 0;
    }

    .fake-cover {
        border-radius: 15px;
        background-color: rgba(var(--color-background), 0.8);
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 300px;
        cursor: pointer;
        position: absolute;
        z-index: 5;
        backdrop-filter: blur(5px);
    }

</style>