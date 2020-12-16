<template>
    <div class="page-showcase">
        <div class="section-header">
            <h3><a href="">Popular this season</a></h3>
            <a class="button-more"><i class="fas fa-angle-right"></i></a> <!-- button should lead somewhere %TODO% -->
        </div>
        <div class="showcase">
            <div v-for="item in 7" :key="item.name"> <!-- this should be array.slice(0,7), not just 7 %TODO% -->
                <showcaseItem />
            </div>
        </div>
    </div>
</template>

<script>
import showcaseItem from './showcase/showcaseItem';

export default {
    name: 'showcase',
    components: {
        showcaseItem
    },
    data() {
        return {
            showcaseItems: [
                {
                    title: "Akudama Drive",
                    cover: "url()",
                    studio: "Studio Pierrot",
                    link: "#",
                    id: 1
                },
                {
                    title: "Nisemonogatari",
                    cover: "url()",
                    studio: "SHAFT",
                    link: "#",
                    id: 2
                },
                {
                    title: "Toaru Kagaku no Railgun",
                    cover: "url()",
                    studio: "J.C.Staff",
                    link: "#",
                    id: 3
                },
            ]
        }
    }
}
</script>

<style scoped>
    a {
        text-decoration: none;
        color: rgb(var(--color-text));
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
        display: flex;
        justify-content: space-between;
    }

</style>