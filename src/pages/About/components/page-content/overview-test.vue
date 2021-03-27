<template>
    <div>
        <div class="toolbar" v-if="edit">
            <div class="item">
                <i class="fas fa-lightbulb"></i>
            </div>
            <div class="item">
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
        <div class="grid-stack grid-stack-9" gs-static="true" ref="grid">
            <widget v-for="widget in cells" :widget="widget" :wgtdata="widgetData" :edit="edit" :key="widget.id" @remove-widget="deleteWidget" :ref="'wgt-' + widget.id" :grid="grid"/>
            <div class="grid-stack-item"  style="z-index: 0" v-bind:gs-h="feedHeight" v-bind:gs-x="feedPosition" gs-y="1" v-bind:gs-w="feedWidth" ref="fd" gs-no-move="true" gs-no-resize="true" :class="{'hidden': edit}">
                <div class="grid-stack-item-content" style="overflow: hidden">
                    <feedWrap @set-height="setHeight" ref="fw" v-if="!edit && feedShown"/>
                </div>
            </div>
            <div class="grid-stack-item"  style="z-index: 0" v-bind:gs-h="blankHeight" gs-max-h="36" gs-min-w="3" gs-x="9999" gs-y="1" v-bind:gs-w="feedWidth" ref="fdH" gs-no-move="false" gs-no-resize="false" :class="{'hidden': !edit}">
                <div class="grid-stack-item-content" style="overflow: hidden">
                    <div class="fake-feed" v-if="edit && feedShown">
                        <div class="fake-cover">
                            <p>Feed</p>
                        </div>
                    </div>
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
        lockGrid: function() {
            this.grid.setStatic(true)
        },
        unlockGrid: function() {
            this.grid.setStatic(false)
        },
        addWidget(id) {
            const widget = {
                id: id,
                maxH: 200,
                h: 22,
                minH: 22,
                name: ''
            };

            switch(id) {
                case 0: widget.name = "about";
                        break;
                case 1: widget.name = "stats";
                        widget.h = 24;
                        widget.minH = 24;
                        break;
                case 2: widget.name = "anime";
                        break;
                case 3: widget.name = "manga";
                        break;
                case 4: widget.name = "ranobe";
                        break;
                
            }


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
            var feedHeight = Math.ceil(element.clientHeight/10 + 3)
            var widget = this.$refs.fd

            if (this.edit) {
                this.grid.update(widget, { h: 0 })
            } else {
                this.grid.update(widget, { h: feedHeight })
            }          
        },
        manageFeed() {
            var widget = this.$refs.fd;
            var widgetH = this.$refs.fdH

            if (this.edit) {
                this.grid.update(widget, { w: 5, x: 9999, y: 0, h: 0})

                if (!this.feedShown) {
                    this.grid.update(widgetH, { w: 5, x: 9999, y: 0, h: 0})
                } else {
                    this.grid.update(widgetH, { w: this.feedWidth, x: this.feedPosition, y: 9999, h: this.blankHeight, minH: 36})
                }

            } else {
                this.grid.update(widgetH, { w: 5, x: 9999, y: 0, h: 0, minH: 0})

                if (!this.feedShown) {
                    this.grid.update(widget, { w: 5, x: 9999, y: 0, h: 0})
                } else {
                    this.grid.update(widget, { w: this.feedWidth, x: this.feedPosition, y: 9999, minH: 36})
                }
            }
        },
    },
    data() {
        return {
            chooseMode: false,
            feedChooseMode: false,
            feedPosition: 4,
            feedHeight: 1,
            feedWidth: 5,
            blankHeight: 36,
            feedShown: true,
            widgetData: [
                {
                    id: "0",
                    name: 'about',
                    h: null,
                    w: null,
                },
                {
                    id: "1",
                    name: 'stats',
                    h: null,
                    w: null,
                },
                {
                    id: "2",
                    name: 'anime',
                    h: null,
                    w: null,
                    rows: 1,
                    itemWidth: null,
                },
                {
                    id: "3",
                    name: 'manga',
                    h: null,
                    w: null,
                    rows: 1,
                    itemWidth: null,
                },
                {
                    id: "4",
                    name: 'ranobe',
                    h: null,
                    w: null,
                    rows: 1,
                    itemWidth: null,
                }
            ],
            cells: [],
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
                    title: 'Favorite Light Novels',
                    class: 'fas fa-book'
                },
                {
                    id: 5,
                    name: 'chars',
                    available: true,
                    title: 'Favorite Characters',
                    class: 'fas fa-heart-circle'
                },
                {
                    id: 6,
                    name: 'staff',
                    available: true,
                    title: 'Favorite Staff',
                    class: 'fas fa-users-class'
                },
                {
                    id: 7,
                    name: 'studio',
                    available: true,
                    title: 'Favorite Studios',
                    class: 'fas fa-building'
                },
                {
                    id: 8,
                    name: 'log',
                    available: true,
                    title: 'Activity Log',
                    class: 'fas fa-calendar-alt'
                },
                {
                    id: 9,
                    name: 'badges',
                    available: true,
                    title: 'Achievements',
                    class: 'fas fa-star'
                },
                {
                    id: 10,
                    name: 'badges',
                    available: true,
                    title: 'Level Display',
                    class: 'far fa-star'
                },
                {
                    id: 11,
                    name: 'badges',
                    available: true,
                    title: 'User statistics',
                    class: 'fas fa-user'
                },
            ]
        }
    },
    mounted: function() {
        let options = { 
                acceptWidgets: false,
                float: false, 
                column: 9,
                cellHeight: '10px',
                removable: false,
                removeTimeout: 100,
                minRow: 1,
                margin: 20,
                animate: false,
            }
        this.grid = GridStack.init(options);
        this.manageFeed();



        let widgetH = this.$refs.fdH

        this.grid.on('dragstop', (event, el) => {
            if (el == widgetH) {
                let x = parseInt(el.getAttribute('gs-x'));
                this.feedPosition = x
            }

            this.grid.update(widgetH, { w: this.feedWidth, x: this.feedPosition, y: 9999, h: this.blankHeight, minH: 13})   
        });

        this.grid.on('resizestop', (event, el) => {
            if (el == widgetH) {
                let w = parseInt(el.getAttribute('gs-w'));
                this.feedWidth = w
            }

            let id = parseInt(el.id)

            if (el.id == "2" || el.id == "3" || el.id == "4") {
                let w = parseInt(el.getAttribute('gs-w'))
                this.widgetData[id].w = w

                if (el.id == "2") {
                    this.$refs['wgt-2'].$refs.anime.test()
                    let ratio = Math.floor(parseInt(el.getAttribute('gs-h')) /  Math.ceil(this.$refs['wgt-2'].$refs.anime.itemWidth / 10))
                    console.log('rows = ', ratio)
                    if (ratio > 5) {
                        ratio = 5
                    }
                    if (ratio < 1) {
                        ratio = 1
                    }
                    this.widgetData[id].rows = ratio
                    let newHeight = Math.ceil(ratio * this.$refs['wgt-2'].$refs.anime.itemWidth / 10 + Math.round(0.0714 * (ratio)^2 + 1.87 * ratio + 7.8))
                    console.log('newHeight = ', newHeight)
                    this.grid.update(el, {h: newHeight})
                    this.$refs['wgt-2'].$refs.anime.test()
                }

                if (el.id == "3") {
                    this.$refs['wgt-3'].$refs.manga.test()
                    let ratio = Math.floor(parseInt(el.getAttribute('gs-h')) /  Math.ceil(this.$refs['wgt-3'].$refs.manga.itemWidth / 10))                 
                    if (ratio > 5) {
                        ratio = 5
                    }
                    if (ratio < 1) {
                        ratio = 1
                    }
                    this.widgetData[id].rows = ratio
                    let newHeight = Math.ceil(ratio * this.$refs['wgt-3'].$refs.manga.itemWidth / 10 + Math.round(0.0714 * (ratio)^2 + 1.87 * ratio + 7.8))
                    this.grid.update(el, {h: newHeight})
                    this.$refs['wgt-3'].$refs.manga.test()
                }
                
                if (el.id == "4") {
                    this.$refs['wgt-4'].$refs.ranobe.test()
                    let ratio = Math.floor(parseInt(el.getAttribute('gs-h')) /  Math.ceil(this.$refs['wgt-4'].$refs.ranobe.itemWidth / 10))                
                    if (ratio > 5) {
                        ratio = 5
                    }
                    if (ratio < 1) {
                        ratio = 1
                    }
                    this.widgetData[id].rows = ratio
                    let newHeight = Math.ceil(ratio * this.$refs['wgt-4'].$refs.ranobe.itemWidth / 10 + Math.round(0.0714 * (ratio)^2 + 1.87 * ratio + 7.8))
                    this.grid.update(el, {h: newHeight})
                    this.$refs['wgt-4'].$refs.ranobe.test()
                }
            }
            this.grid.update(widgetH, { w: this.feedWidth, x: this.feedPosition, y: 9999, h: this.blankHeight, minH: 13})
        });


        this.grid.on('added', () => {      
            this.grid.update(widgetH, { w: this.feedWidth, x: this.feedPosition, y: 9999, h: this.blankHeight, minH: 13})
        });

        this.grid.on('removed', () => {      
            this.grid.update(widgetH, { w: this.feedWidth, x: this.feedPosition, y: 9999, h: this.blankHeight, minH: 13})
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
        background-color: rgba(var(--color-foreground), 0.8);
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

    .grid-stack .grid-stack-item > .grid-stack-item-content {
        inset: 20px;
    }

</style>