<template>
    <div class="like-button" id="like">
        <button-like class="button"><i class="far fa-heart"></i></button-like>
        <span class="count">{{ this.count }}</span>
    </div>	
</template>

<script>
export default {
    name: 'likeButton',
}

</script>

<style>
    button-like {
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

    .like-button:hover button-like {
        background-color: rgba(236,15,77,0.10);
        color: rgba(231,92,139,1.00);
        transition: 0.1s;
    }
    
    .like-button .count {
        font-family: "Raleway";
        font-weight: 100;
        color: gray;
        cursor: pointer;
    }

    .like-button:hover .count {
        color: rgba(231,92,139,1.00);
    }
</style>