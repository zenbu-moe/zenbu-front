<template>
    <!-- <div class="navmid">
        <a href="/index.html" class="button-nav"><i class="fas fa-home-alt"></i></a>
        <a href="/about.html" class="button-nav"><i class="fal fa-user-alt"></i></a>
        <a href="/forum.html" class="button-nav"><i class="fal fa-comments"></i></a>
    </div> -->
    <div class="navmid-alt">
        <!-- <a href="/index.html" class="button-nav alt"><p>Discord</p></a>
        <a href="/about.html" class="button-nav alt"><p>Profile</p></a>
        <a href="/forum.html" class="button-nav alt"><p>Forum</p></a> -->
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

    .navmid-alt {
        width: 30%;
        display: inline-flex;
        align-items: center;
        justify-content: flex-start;
    }

    .button-nav {
        border: none;
        background-color: rgba(0,0,0,0.00);
        color: rgb(255,255,255, 1);
        margin: 0px 3px 1px 3px;
        cursor: pointer;
        transition: 0.3s ease 0s;
        border-radius: 30px;
        font-size: 1.5rem;
        padding: 10px 40px;       
    }

    .home {
        font-size: 1.6rem;
        padding: 5px 40px 10px 40px;
    }

    .user {
        font-size: 1.8rem;
        padding: 3px 40px 8px 40px;
    }

    .forum {
        font-size: 1.5rem;
        padding: 5px 40px 11px 40px;
    }

    .alt {
        font-size: 1rem;
        font-weight: 500;
        padding: 10px 20px;
    }

    p {
        margin: 0;
    }

    .button-nav:hover {
        background-color: rgba(189,189,189,0.10);
        transition: 0.1s ease 0s;
    }

</style>