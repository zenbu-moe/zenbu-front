<template>
    <div class="reply-button" id="reply">
        <!-- this doesnt deserve its own component but i was too lazy to copypaste the code all the time -->
        
        <reply-button class="button"><i class="far fa-reply"></i></reply-button>
    </div>	
</template>

<script>
export default {
    name: 'buttonMore',
}

</script>

<style>
    reply-button {
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

    reply-button:hover {
        background-color: rgba(144, 115, 145, 0.1);
        color: rgb(185, 169, 211);
        transition: 0.1s;
    }
</style>