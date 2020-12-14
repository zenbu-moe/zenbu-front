<template>
    <div class="more-button" id="like">
        <more-button class="button"><i class="fas fa-ellipsis-h"></i></more-button>
    </div>	
</template>

<script>
export default {
    name: 'buttonMore',
}

</script>

<style>
    more-button {
        display: inline-block;
        color: gray;
        width: 40px;
        height: 40px;
        text-align: center;
        border-radius: 50%;
        padding: 11px;
        transition: 0.3s ease-out;
        cursor: pointer;
    }

    .more-button:hover more-button {
        background-color: rgb(230, 230, 230);
        transition: 0.1s;
    }

    .more-button .is-not-clicked {
        color: gray;
    }

    .more-button .is-clicked {
        color: rgb(235, 235, 235);
    }
</style>