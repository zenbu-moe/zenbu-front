<template>
    <div class="header-wrap" :class="{'expanded': isExpanded, 'minimized': !isExpanded}">
        <div class="button-wrap">
            <btn-expand @click="expand()" class="button" v-if="!isExpanded"><i class="fas fa-angle-down"></i></btn-expand>
            <btn-expand @click="expand()" class="button" v-if="isExpanded"><i class="fas fa-angle-up"></i></btn-expand>
        </div>
        <div class="header">
            <div class="media-info">
                <div class="media-cover-wrap">
                    <div class="media-cover">
                    </div>
                    <div class="media-misc">
                        <buttonAddToList />
                        <btn-fav class="button-fav"><i class="far fa-heart"></i><p>Add to favorites</p></btn-fav>
                    </div>
                </div>
                <div class="media-description-wrap">
                    <div class="media-description">
                        <h1>Bakemonogatari</h1>
                        <div class="description">
                            <p>
                                First season of the Monogatari Series, part 1/6. Contains the arcs Hitagi Crab, Mayoi Snail, Suruga Monkey, Nadeko Snake, 
                                and Tsubasa Cat from the Bakemonogatari light novels.
                            </p>
                            <p>
                                Thanks to Meme Oshino, Koyomi Araragi, a high school student, is able to remain a human after coming across a female vampire... However, since the incident, Koyomi seems to meet girls who have an apparition-related issue. Hitagi Senjyogahara doesn’t weigh anything, Suruga Kanbaru’s right arm becomes like that of a monkey’s, and a young girl, Mayoi, cannot find her way home no matter how many times she tries. Koyomi, a Mr. Nice Guy, ends up helping each and every girl solve her problem with the help of Meme Oshino.
                            </p>
                            <p>
                                (Source: Aniplex)
                            </p>
                        </div>
                        <div class="media-details">
                            <div class="details-entry non-last">
                                <h4>Format</h4>
                                <p>TV</p>
                            </div>
                            <div class="details-entry non-last">
                                <h4>Status</h4>
                                <p>Finished</p>
                            </div>
                            <div class="details-entry non-last">
                                <h4>Studios</h4>
                                <p>SHAFT</p>
                            </div>
                            <div class="details-entry non-last">
                                <h4>Started Airing</h4>
                                <p>July 3, 2009</p>
                            </div>
                            <div class="details-entry non-last">
                                <h4>Finished Airing</h4>
                                <p>June 25, 2010</p>
                            </div>
                            <div class="details-entry">
                                <h4>Episode Duration</h4>
                                <p>25 minutes</p>
                            </div>
                        </div>
                        <div class="media-genres">
                            <div v-for="genre in genres" :key="genre">
                                <genreItem :genre="genre" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <mediaScore />
        </div>
    </div>
</template>

<script>
import genreItem from './genreItem';
import buttonAddToList from './buttonAddToList';
import mediaScore from './mediaScore';

export default {
    name: 'headerWrap',
    components: {
        genreItem,
        buttonAddToList,
        mediaScore
    },
    data() {
        return {
            isExpanded: false,
            genres: ["Comedy", "Drama", "Mystery", "Psychological", "Romance", "Supernatural"]
        }
    },
    methods: {
        expand() {
            this.isExpanded = !this.isExpanded;
            this.$emit('expand-banner')
        }
    }
}
</script>

<style scoped>
    h1 {
        font-family: "Raleway";
        font-size: 1.6rem;
        color: rgb(var(--color-text));
    }

    h4 {
        font-family: "Raleway";
        font-size: 1rem;
        color: rgb(var(--color-text));
        margin: 0;
    }

    p {
        color: rgb(var(--color-text));
    }

    .header-wrap {
        transition: 1s;
    }

    .expanded {
        margin-top: 40px;
    }

    .minimized {
        margin-top: -310px;
    }

    .button-wrap {
        display: flex;
        justify-content: center;
        margin-bottom: 40px;
    }

    btn-expand {
        display: inline-block;
        color: rgb(255,255,255, 0.1);
        background-color: rgba(138, 122, 163, 0.05);
        width: 35px;
        height: 35px;
        text-align: center;
        border-radius: 50%;
        padding: 9px;
        transition: 0.3s ease-out;
        cursor: pointer;
        margin-right: 10px;
        animation: fadeIn 0.3s;
    }

    btn-expand:hover {
        background-color: rgb(188, 174, 211);
        color: white;
        transition: 0.1s;
    }

    .header {
        background-color: rgb(var(--color-background-dark));
        height: auto;
        width: 1380px;
        margin: 0px auto 0px auto;
        border-radius: 20px;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        transition: 1s;
    }

    .media-actions {
        margin-bottom: 30px;
        margin-top: 30px;
    }

    .media-info {
        display: flex;
        align-items: flex-start;
        width: 75%;
    }

    .media-cover-wrap {
        display: flex;
        flex-direction: column;
    }

    .media-description-wrap {
        margin-left: 20px;
    }

    .description {
        height: auto;
        margin-bottom: 30px;
        overflow: hidden;
    }

    .media-details {
        display: flex;
    }

    .details-entry {
        display: flex;
        flex-direction: column;
        padding: 5px 20px 5px 20px;
    }

    .non-last {
        border-right: 2px solid rgb(var(--color-background));
        transition: 1s;
    }

    .details-entry p {
        color: rgb(var(--color-text));
        margin: 5px 0px 5px 0px;
        font-family: "Raleway";
        
    }

    .media-genres {
        display: flex;
        margin-top: 30px;
    }

    .media-misc {
        margin-top: 15px;
        display: flex;
        max-width: 210px;
    }

    .media-cover {
        background-color: rgb(var(--color-background));
        height: 300px;
        width: 210px;
        border-radius: 10px;
        transition: 1s;
    }

    btn-fav {
        display: inline-block;
        color: rgba(var(--color-button));
        background-color: rgba(var(--color-background));
        width: 35px;
        height: 35px;
        text-align: left;
        border-radius: 30px;
        padding: 5px 9px 5px 9px;
        transition: 0.4s ease-out;
        cursor: pointer;
        animation: fadeIn 0.3s;
    }

    btn-fav:hover {
        background-color: rgba(231,92,139,0.6);
        color: rgb(255, 73, 134);
        transition: 0.6s;
        width: 345%;
    }

    .button-fav {
        display: flex;
        overflow: hidden;
        align-items: center;
        white-space: nowrap;
    }

    .button-fav p {
        margin-left: 12px;
        font-family: "Raleway";
        color: white;
    }
</style>