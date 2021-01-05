<template>
    <div @click="chooseToggle()" @mouseleave="chooseMode = false">
        <div class="selection" v-if="chooseMode && edit">
            <h3>Choose a module</h3>
            <div v-for="item in cellsAvailable" :key="item.id">
                <div class="selection-item" @click="$emit('set-content', item.name)" v-if="item.available == true">
                    <i :class="item.class"></i><p>{{ item.title }}</p>
                </div>
            </div>
            <div class="selection-item" @click="$emit('set-content', 'blank')" v-if="cell != 'blank'">
                <i class="fas fa-trash-alt"></i><p>Remove Module</p>
            </div>
        </div>

        <aboutWrap :edit="edit" v-if="cell == 'bio'"/>
        <statsWrap :edit="edit" v-if="cell == 'stat'"/>
        <favAnimeWrap :edit="edit" v-if="cell == 'anime'"/>
        <favMangaWrap :edit="edit" v-if="cell == 'manga'"/>
        <favRanobeWrap :edit="edit" v-if="cell == 'ranobe'"/>

        <div v-if="edit && cell == 'blank'" class="wrap">
            <div class="blank">
            </div>
        </div>
    </div>
</template>

<script>
import statsWrap from './overview/statsWrap';
import favAnimeWrap from './overview/favAnimeWrap';
import favMangaWrap from './overview/favMangaWrap';
import favRanobeWrap from './overview/favRanobeWrap';
import aboutWrap from './overview/aboutWrap';

export default {
    name: 'overviewItem',
    props: ["edit", "cell", "id", "cells"],
    components: {
        statsWrap,
        favAnimeWrap,
        favMangaWrap,
        favRanobeWrap,
        aboutWrap
    },
    data() {
        return {
            chooseMode: false,
            currentCell: this.id,
            cellsAvailable: [
                {
                    id: 0,
                    name: 'bio',
                    available: true,
                    title: 'About Me',
                    class: 'fas fa-user'
                },
                {
                    id: 1,
                    name: 'anime',
                    available: true,
                    title: 'Favorite Anime',
                    class: 'fas fa-play-circle'
                },
                {
                    id: 2,
                    name: 'manga',
                    available: true,
                    title: 'Favorite Manga',
                    class: 'fas fa-book-open'
                },
                {
                    id: 3,
                    name: 'ranobe',
                    available: true,
                    title: 'Favorite Ranobe',
                    class: 'fas fa-book'
                },
                {
                    id: 4,
                    name: 'stat',
                    available: true,
                    title: 'Quick Stats',
                    class: 'fas fa-chart-pie'
                },
                {
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
                },
            ]
        }
    },
    methods: {
        chooseToggle() {
            this.chooseMode = !this.chooseMode
        },
        checkAvailable() {
            for (var j = 0; j < this.cellsAvailable.length; j++) {
                this.cellsAvailable[j].available = true
                for (var i = 0; i < this.cells.leftCol.length; i++) {
                    if (this.cells.leftCol[i].content == this.cellsAvailable[j].name || 
                        this.cells.rightCol[i].content == this.cellsAvailable[j].name ||
                        this.cells.leftColBot[i].content == this.cellsAvailable[j].name ||
                        this.cells.rightColBot[i].content == this.cellsAvailable[j].name) {
                            this.cellsAvailable[j].available = false
                    }
                }
                for (var k = 0; k < this.cells.header.length; k++) {
                    if (this.cells.header[k].content == this.cellsAvailable[j].name) {
                            this.cellsAvailable[j].available = false
                    }
                }
            }
        }
    },
    updated() {
        this.checkAvailable()
    }
}
</script>

<style scoped>
    h3 {
        margin: 0px 0px 10px 0px;
        color: rgb(var(--color-text))
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

    .blank:hover {
        background-color: rgba(var(--color-foreground), 0.7);
        transition: 0.2s;
    }

    .selection {
        display: flex;
        flex-direction: column;
        padding: 20px;
        position: absolute;
        margin: 0px auto 0px 180px;
        width: 300px;
        height: auto;
        background-color: rgba(var(--color-foreground), 1);
        border-radius: 20px;
        animation: zoomIn 0.3s;
        box-shadow: 0px 0px 30px rgba(0,0,0, 0.2);
    }

    .selection-item {
        border-radius: 20px;
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

</style>