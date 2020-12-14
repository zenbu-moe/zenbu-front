<template>
    <div class="navmid">
        <a href="" class="button-nav"><i class="fa fa-home"></i></a>
        <a href="" class="button-nav"><i class="fas fa-user"></i></a>
        <a href="" class="button-nav"><i class="fas fa-comments"></i></a>
    </div>
</template>

<script>
export default {
    name: 'navmid',
    components: {

    }
}
</script>

<style scoped>
    .navmid {
        width: 30%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    .button-nav {
        padding: 10px 40px;
        border: none;
        background-color: rgba(0,0,0,0.00);
        color: rgb(255,255,255);
        margin: 0px 3px 1px 3px;
        font-size: 23px;
        cursor: pointer;
        transition: 0.3s ease 0s;
        border-radius: 5px;       
    }

    .button-nav:hover {
        background-color: rgba(189,189,189,0.10);
        transition: 0.1s ease 0s;
    }
</style>