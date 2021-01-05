<template>
    <div class="more-button" id="more">
        <!-- i really thought id make it modular originally didnt i...... -->

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
        color: rgb(var(--color-button));
        width: 35px;
        height: 35px;
        text-align: center;
        border-radius: 50%;
        padding: 9px;
        transition: 0.3s ease-out;
        cursor: pointer;
    }

    .more-button:hover more-button {
        background-color: rgba(var(--color-button), 0.2);
        transition: 0.1s;
    }

    .more-button .is-not-clicked {
        color: rgb(var(--color-button));
    }

    .more-button .is-clicked {
        color: rgb(235, 235, 235);
    }
</style>