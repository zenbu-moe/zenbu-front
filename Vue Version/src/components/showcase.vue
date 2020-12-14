<template>
    <div class="page-showcase">
        <div class="section-header">
            <h3><a href="">Popular this season</a></h3>
            <a class="button-more"><i class="fas fa-angle-right"></i></a>
        </div>
        <div class="showcase">
            <showcaseItem />
            <showcaseItem />
            <showcaseItem />
            <showcaseItem />
            <showcaseItem />
            <showcaseItem />
            <showcaseItem />
        </div>
    </div>
</template>

<script>
import showcaseItem from './showcase/showcaseItem';

export default {
    name: 'showcase',
    components: {
        showcaseItem
    }
}
</script>

<style scoped>
    a {
        text-decoration: none;
        color: black;
    }

    .page-showcase {
        width: 1280px;
        padding-top: 60px;
        margin: auto auto -10px auto;
    }

    .section-header {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .button-more {
        cursor: pointer;
        font-size: 17px;
        border-radius: 50%;
        text-align: center;
        transition: 0.3s;
        width: 20px;
        height: 20px;
        margin-left: 5px;
    }

    .button-more:hover {
        background: rgba(188,195,208,1.00);
        transition: 0.1s;
    }

    .showcase {
        margin-top: -5px;
        height: 270px;
        background-color: rgba(228,231,236,1.00);
        display: flex;
        justify-content: space-between;
    }

</style>