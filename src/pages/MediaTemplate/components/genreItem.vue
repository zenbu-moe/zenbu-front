<template>
    <div class="genre-item">
        <p>{{ genre }}</p>
    </div>
</template>

<script>
export default {
    name: 'genreItem',
    props: ["genre"]
}
</script>

<style scoped>
    .genre-item {
        background-color: rgb(var(--color-background));
        padding: 10px;
        margin-right: 10px;
        border-radius: 20px;
        transition: 1s;
        cursor: pointer;
    }

    .genre-item:hover {
        background-color: rgb(var(--color-gray));
        transition: 0.2s;
    }
    
    p {
        color: rgb(var(--color-text));
        margin: 0;
        font-family: "Raleway";
    }
</style>