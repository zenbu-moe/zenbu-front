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
                        <p>Theme</p>
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
                        <p>Size</p>
                        <i class="fas fa-sort-down"></i>
                    </div>
                    <div class="filter-list" v-if="filtersExpanded[1]">
                        <div v-for="filter in filters.size" :key="filter.name">
                            <filterItem :item="filter" @expand="filterToggle"/>
                        </div>
                    </div>
                </div>
                <div class="filter-item">
                    <div class="small" :class="{'expanded': filtersExpanded[2]}" @click="setActive(2)">
                        <p>State (WIP)</p>
                        <i class="fas fa-sort-down"></i>
                    </div>
                    <div class="filter-list" v-if="filtersExpanded[2]">
                        <div v-for="filter in filters.state" :key="filter.name">
                            <filterItem :item="filter" @expand="filterToggle"/>
                        </div>
                    </div>
                </div>
                <!-- <div class="filter-item">
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
                </div> -->
            </div>
            <div class="search-results">
            </div>
        </div>
    </div>
</template>

<script>
import filterItem from './filterItem'

export default {
    name: 'communitySearch',
    components: {
        filterItem
    },
    data() {
        return {
            filtersExpanded: [false, false, false, false, false],
            filters: {
                type: [
                    {
                        name: 'Media',
                        type: 'type',
                        chosen: false
                    },
                    {
                        name: 'Food',
                        type: 'type',
                        chosen: false
                    },
                    {
                        name: 'Tech',
                        type: 'type',
                        chosen: false
                    },
                    {
                        name: 'News',
                        type: 'type',
                        chosen: false
                    },
                    {
                        name: 'idk smth else',
                        type: 'type',
                        chosen: false
                    },
                ],
                size: [
                    {
                        name: 'this will be the dragging thing',
                        type: 'size',
                        chosen: false
                    },
                ],
                state: [
                    {
                        name: 'Public',
                        type: 'state',
                        chosen: false
                    },
                    {
                        name: 'Private',
                        type: 'state',
                        chosen: false
                    },
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
        width: 100%;
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