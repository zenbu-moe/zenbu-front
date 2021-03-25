<template>
    <div class="wrap">
        <div class="page-showcase">
            <div class="expand">
                <i class="fal fa-arrow-right"></i>
            </div>
            <div class="section-header">
                <h3><a href="">Popular this season</a></h3>
                <a class="button-more"><i class="fas fa-angle-right"></i></a> <!-- button should lead somewhere %TODO% -->
            </div>
            <div class="showcase">
                <div v-for="item in showcaseItems" :key="item.name"> <!-- this should be array.slice(0,7), not just 7 %TODO% -->
                    <showcaseItem :item="item"/>
                </div>
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
                    cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b116566-gPdsIhCeCpL9.png",
                    studio: "Studio Pierrot",
                    link: "#",
                    id: 1
                },
                {
                    title: "Nisemonogatari",
                    cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx11597-ApDcMuPvRhgr.jpg",
                    studio: "SHAFT",
                    link: "#",
                    id: 2
                },
                {
                    title: "Toaru Kagaku no Railgun",
                    cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx104462-KrVWRvPcR7ci.jpg",
                    studio: "J.C.Staff",
                    link: "#",
                    id: 3
                },
                {
                    title: "Mahouka Koukou no Rettousei: Raihousha-hen",
                    cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx112300-I5ucx66OvqWX.png",
                    studio: "8-bit",
                    link: "#",
                    id: 4
                },
                {
                    title: "Tonikaku Kawaii",
                    cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b116267-JArFvMYRdnbd.jpg",
                    studio: "Seven Arcs",
                    link: "#",
                    id: 5
                },
                {
                    title: "Noblesse",
                    cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx116005-9JRcdXOixDgz.png",
                    studio: "Production I.G",
                    link: "#",
                    id: 6
                },
                {
                    title: "Shingeki no Kyojin: Final Season",
                    cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx110277-Yxit7fu0jYOJ.png",
                    studio: "MAPPA",
                    link: "#",
                    id: 7
                },
            ],
        }
    }
}
</script>

<style scoped>
    a {
        text-decoration: none;
        color: rgb(var(--color-text));
    }

    .wrap {
        width: 100%;
    }

    .page-showcase {
        width: 1130px;
        padding: 20px 0px 30px 0px;
        margin: auto;
        transition: 1s;
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
        height: auto;
        display: flex;
        justify-content: space-between;
    }

    .expand {
        position: relative;
        font-size: 1.2rem;
        left: 1110px;
        top: 180px;
        z-index: 5;
        background: rgba(var(--color-foreground));
        color: rgba(var(--color-text), 0.5);
        display: flex;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 0px 5px rgba(var(--color-text), 0.5);
        cursor: pointer;
        transition: 0.5s;
    }

    .expand:hover {
        color: rgba(var(--color-text), 0.3);
        transition: 0.2s;
    }

</style>