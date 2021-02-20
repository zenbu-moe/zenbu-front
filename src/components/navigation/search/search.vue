<template>
    <div class="search">
        <button type="submit"><i class="fal fa-search"></i></button>
		<input type="text" placeholder="Search Zenbu...">
    </div>
</template>

<script>
export default {
    name: 'search',
    components: {

    }
}
</script>

<style scoped>
    .search {
        background: rgba(255,255,255,0.05);
        padding: 5px 10px 2px 10px;
        border-radius: 30px;
        display: inline-flex;
    }

    .search button {
        background: rgba(0,0,0,0.0);
        font-size: 20px;
        border: none;
        color: rgba(255,255,255,0.43);
        cursor: pointer;
        transition: 0.5s;
    }

    button:hover {
        color: rgba(255,255,255,1);
        transition: 0.1s;
    }

    input[type=text] {
        color: white;
    }

</style>