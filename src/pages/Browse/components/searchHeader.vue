<template>
    <div class="header">
        <div class="search-bar">
            <form>
                <input type="text" placeholder="Enter some words, please">
            </form>
        </div>
        <div class="wrap">
            <div class="filters">
                <div class="filter-item">
                    <div class="small" :class="{'expanded': filtersExpanded[0]}" @click="setActive(0)">
                        <p>Type</p>
                        <i class="fas fa-sort-down"></i>
                    </div>
                    <div class="filter-list" v-if="filtersExpanded[0]">
                        <div v-for="filter in filters.type" :key="filter.name">
                            <filterItem :item="filter" @expand="filterToggle"/>
                        </div>
                    </div>
                </div>
                <div class="filter-item">
                    <div class="small" :class="{'expanded': filtersExpanded[1]}" @click="setActive(1)">
                        <p>Genre</p>
                        <i class="fas fa-sort-down"></i>
                    </div>
                    <div class="filter-list" v-if="filtersExpanded[1]">
                        <div v-for="filter in filters.genres" :key="filter.name">
                            <filterItem :item="filter" @expand="filterToggle"/>
                        </div>
                    </div>
                </div>
                <div class="filter-item">
                    <div class="small">
                        <p>Year</p>
                        <i class="fas fa-sort-down"></i>
                    </div>
                </div>
                <div class="filter-item">
                    <div class="small">
                        <p>Season</p>
                        <i class="fas fa-sort-down"></i>
                    </div>
                </div>
                <div class="filter-item">
                    <div class="small" :class="{'expanded': filtersExpanded[4]}" @click="setActive(4)">
                        <p>Format</p>
                        <i class="fas fa-sort-down"></i>
                    </div>
                    <div class="filter-list" v-if="filtersExpanded[4]">
                        <div v-for="filter in filters.format" :key="filter.name">
                            <filterItem :item="filter" :filters="filters.type" @expand="filterToggle"/>
                        </div>
                        <div class="item" v-if="!filters.type[0].chosen && !filters.type[1].chosen">
                            <p style="font-weight: 200">Select a relevant type...</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="search-results">
            </div>
        </div>
    </div>
</template>

<script>
import filterItem from './filterItem'

export default {
    name: 'searchHeader',
    components: {
        filterItem
    },
    data() {
        return {
            filtersExpanded: [false, false, false, false, false],
            filters: {
                type: [
                    {
                        name: 'Anime',
                        type: 'type',
                        chosen: false
                    },
                    {
                        name: 'Manga',
                        type: 'type',
                        chosen: false
                    },
                    {
                        name: 'Light Novels',
                        type: 'type',
                        chosen: false
                    },
                    {
                        name: 'Manhwa',
                        type: 'type',
                        chosen: false
                    },
                    {
                        name: 'Manhua',
                        type: 'type',
                        chosen: false
                    },
                ],
                genres: [
                    {
                        name: 'Action',
                        type: 'genres',
                        chosen: false
                    },
                    {
                        name: 'Comedy',
                        type: 'genres',
                        chosen: false
                    },
                    {
                        name: 'Psychological',
                        type: 'genres',
                        chosen: false
                    },
                    {
                        name: 'Romance',
                        type: 'genres',
                        chosen: false
                    }
                ],
                format: [
                    {
                        name: 'TV',
                        type: 'format',
                        id: 'anime',
                        chosen: false
                    },
                    {
                        name: 'TV Short',
                        type: 'format',
                        id: 'anime',
                        chosen: false
                    },
                    {
                        name: 'Manga',
                        type: 'format',
                        id: 'manga',
                        chosen: false
                    },
                    {
                        name: 'One-Shot',
                        type: 'format',
                        id: 'manga',
                        chosen: false
                    }
                       
                ]
            }
        }
    },
    methods: {
        setActive(id) {
            this.filtersExpanded[id] = !this.filtersExpanded[id]
        },
        filterToggle(obj) {
            for (let i = 0; i < this.filters[obj.type].length; i++) {
                if (obj.name == this.filters[obj.type][i].name) {
                    this.filters[obj.type][i].chosen = !this.filters[obj.type][i].chosen
                }
            }

            /* for (let type of this.filters[obj.type]) {
                if (obj.name === type.name) {
                    type.chosen != type.chosen
                }
            } */

            console.log(obj)
        }
    }
}
</script>

<style scoped>
    .search-bar {
        background: rgba(var(--color-background-dark));
        color: rgba(var(--color-text));
        padding: 10px 15px;
        margin: 0px 0px 20px 0px;
        border-radius: 7px;
    }

    .wrap {
        display: grid;
        grid-template-columns: 250px auto;
    }

    .filters {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .header {
        display: flex;
        flex-direction: column;
    }

    .filter-item {
        color: rgba(var(--color-text));
        background: rgba(var(--color-background-dark));
        border-radius: 7px;
        padding: 10px;
        margin: 10px 10px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .small {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 3px 5px;
        cursor: pointer;
    }

    .filter-item p {
        margin: 0;
        font-family: "Raleway";
        font-weight: bold;
    }

    .filter-list {
        display: flex;
        flex-direction: column;
        border-top: 1px solid rgba(var(--color-text), 0.1);
        padding-top: 10px;
    }

    .expanded {
        margin-bottom: 10px;
    }

    .item {
        margin: 5px 0px;
        font-family: "Raleway";
        border-radius: 10px;
        cursor: pointer;
        padding: 5px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>