<template>
    <div class="relations-wrap">
        <div class="filters">
            <div class="left">
                <div class="search-bar-scoped">
                    <input type="text" placeholder="Start typing to search..." />
                    <svg-icon style="color: rgba(var(--color-text), 0.5)" icon="light/search"></svg-icon>
                </div>
            </div>
            <div class="right">
                <div class="filter-item-alt">
                    <svg-icon style="color: rgb(var(--color-foreground))" icon="solid/square"></svg-icon>
                    <p>On my list</p>
                </div>
                <div class="filter-item-alt">
                    <svg-icon icon="solid/sort-circle"></svg-icon>
                    <p>Sort by</p>
                </div>
            </div>
        </div>
        <div class="section">
            <h2>Related anime</h2>
            <div class="grid">
                <div v-for="item in 2" :key="item.id">
                    <item :type="'anime'"/>
                </div>
            </div>
        </div>
        <div class="section">
            <h2>Related manga</h2>
            <div class="grid">
                <div v-for="item in 5" :key="item.id">
                    <item :type="'manga'"/>
                </div>
            </div>
        </div>
        <div class="section">
            <h2>Related light novels</h2>
            <div class="grid">
                <div v-for="item in 1" :key="item.id">
                    <item :type="'ranobe'"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import item from './relations/item'

export default {
    name: "relations",
    components: {
        item
    }
}
</script>

<style scoped>
    h2 {
        font-size: 1.8rem;
        color: rgb(var(--color-text));
        margin: 0px;
    }

    .relations-wrap {
        width: 1380px;
        margin: 10px auto;
    }

    .filters {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;
    }

    .left, .right {
        display: flex;
        align-items: center;
    }

    .left {
        width: 80%;
    }

    .filter-item {
        padding: 7px 15px;
        border-radius: 10px;
        background-color: rgb(var(--color-foreground));
        box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        margin-right: 10px;
    }

    .filter-item-alt {
        padding: 7px 10px;
        display: flex;
        align-items: center;
        margin-right: 10px;
        cursor: pointer;
    }

    .filter-item-alt p {
        font-weight: 500;
    }

    .filter-item-alt svg.icon {
        margin-right: 5px;
    }

    .filter-item svg.icon {
        margin-left: 50px;
    }

    .search-bar-scoped {
        padding: 7px 15px;
        border-radius: 10px;
        background-color: rgb(var(--color-foreground));
        box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        width: 100%;
        margin-right: 10px;
    }

    input[type=text] {
        font-size: 1rem;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        width: 100%
    }

    p {
        margin: 0;
        color: rgb(var(--color-text));
    }

    .section {
        width: 100%;
        border-radius: 20px;
        margin-bottom: 20px;
    }

    .section h2 {
        font-size: 1.4rem;
        margin-bottom: 10px;
    }

    .grid {
        display: grid;
        grid-template-columns: 426.7px 426.7px 426.7px;
        grid-column-gap: 50px;
        grid-row-gap: 30px;
    }
</style>