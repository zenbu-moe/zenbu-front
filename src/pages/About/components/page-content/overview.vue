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
                <h3>Choose a module</h3>
                <div v-for="item in selection" :key="item.id">
                    <div class="selection-item" @click="addWidget(item.id)" v-if="item.available == true">
                        <i :class="item.class"></i><p>{{ item.title }}</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class="grid-stack grid-stack-2" gs-static="true">
            <widget v-for="widget in cells" :widget="widget" :edit="edit" :key="widget.id" @remove-widget="deleteWidget" ref="wgt"/>
            <div class="grid-stack-item"  style="z-index: 0" v-bind:gs-h="feedHeight" gs-x="1" gs-y="1" gs-w="1" ref="fd" gs-no-move="true" gs-no-resize="true" :class="{'hidden': edit}">
                <div class="grid-stack-item-content" style="overflow: hidden">
                    <feedWrap @set-height="setHeight" ref="fw" v-if="!edit && feedShown"/>
                </div>
            </div>
        </div>
        <div class="wrap" v-if="edit && feedShown">
            <div class="left" v-if="feedPosition == 0">
                <feedWrap @set-height="setHeight" ref="fw"/>
            </div>
            <div class="right" v-if="feedPosition == 1">
                <feedWrap @set-height="setHeight" ref="fw"/>
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
            this.grid.addWidget(node);
        },
        lockGrid: function() {
            this.grid.setStatic(true)
        },
        unlockGrid: function() {
            this.grid.setStatic(false)
        },
        addWidget(id) {
            const widget = {
                id: id
            };
            this.selection[id].available = false;
            this.cells.push(widget);
            this.$nextTick(() => {
                this.grid.makeWidget(`#${widget.id}`);
            });
        },
        deleteWidget(element, id) {
            
            console.log(element.target.parentElement)
            this.grid.removeWidget(element.target.parentElement)

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
            /* console.log(element.clientHeight) */
            var widget = element.parentElement.parentElement
            this.grid.update(widget, { h: feedHeight })
        },
        manageFeed() {
            var widget = this.$refs.fd;

            if (this.edit) {
                this.grid.float(true)
                this.grid.update(widget, { w: 1, x: 9999, y: 0, h: 0})
            } else {
                this.grid.float(false)
                if (!this.feedShown) {
                    this.grid.update(widget, { w: 1, x: 9999, y: 0, h: 0})
                } else {
                    this.grid.update(widget, { w: 1, x: this.feedPosition, y: 9999})
                }
            }
        }
    },
    data() {
        return {
            chooseMode: false,
            feedChooseMode: false,
            feedPosition: 1,
            feedHeight: 1,
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
                acceptWidgets: true,
                dragIn: '.newWidget',
                dragInOptions: { revert: 'invalid', scroll: false, appendTo: 'body', helper: 'clone' },
                float: false, 
                column: 2,
                cellHeight: '25px',
                removable: false,
                removeTimeout: 100,
                minRow: 1,
                marginLeft: 20,
                marginRight: 20,
            }

        /* let items = [
                {x: 0, y: 0, w: 1, h: 1},
                {x: 3, y: 1, h: 1},
                {x: 4, y: 1},
                {x: 2, y: 3, w: 1},
                {x: 2, y: 5}
            ]; */

        this.grid = GridStack.init(options);
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
        font-family: "Raleway";
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
        font-family: "Raleway";
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

</style>