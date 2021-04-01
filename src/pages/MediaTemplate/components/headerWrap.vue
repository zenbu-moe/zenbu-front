<template>
    <div class="header-wrap" :class="{'expanded': isExpanded, 'minimized': !isExpanded}">
        <div class="button-wrap">
            <btn-expand @click="expand()" class="button" v-if="!isExpanded"><svg-icon icon="solid/angle-down"></svg-icon></btn-expand>
            <btn-expand @click="expand()" class="button" v-if="isExpanded"><svg-icon icon="solid/angle-up"></svg-icon></btn-expand>
        </div>
        <div class="header">
            <div class="media-info">
                <div class="media-cover-wrap">
                    <div class="media-cover">
                    </div>
                    <div class="media-misc">
                        <buttonAddToList />
                        <btn-fav class="button-fav">
                            <svg-icon icon="regular/heart"></svg-icon>
                            <p>Add to favorites</p>
                        </btn-fav>
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
        <!-- <div class="nav">
            <div class="button-nav" @click="$emit('set-tab', 0)" :class="{'active': currentTab == 0}">
                <p>Overview</p>
            </div>
            <div class="button-nav" @click="$emit('set-tab', 1)" :class="{'active': currentTab == 1}">
                <p>Characters</p>
            </div>
            <div class="button-nav" @click="$emit('set-tab', 2)" :class="{'active': currentTab == 2}">
                <p>Staff</p>
            </div>
            <div class="button-nav" @click="$emit('set-tab', 3)" :class="{'active': currentTab == 3}">
                <p>Reviews</p>
            </div>
            <div class="button-nav" @click="$emit('set-tab', 4)" :class="{'active': currentTab == 4}">
                <p>Social</p>
            </div>
            <div class="button-nav" @click="$emit('set-tab', 5)" :class="{'active': currentTab == 5}">
                <p>Statistics</p>
            </div>
        </div> -->
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
    props: ['currentTab'],
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
        font-size: 1.6rem;
        color: rgb(var(--color-text));
    }

    h4 {
        font-size: 1rem;
        color: rgb(var(--color-text));
        margin: 0;
    }

    p {
        color: rgb(var(--color-text));
    }

    .header-wrap {
        transition: 1s;
        width: 1380px;
        margin: 0px auto 0px auto;
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
        background-color: rgb(var(--color-foreground));
        height: auto;
        width: 100%;
        border-radius: 20px 20px 20px 20px;
        padding: 20px 20px 20px 20px;
        display: flex;
        justify-content: space-between;
        transition: 0.3s;
    }

    .nav {
        width: 100%;
        background-color: rgb(var(--color-foreground));
        padding: 0px 0px 0px 240px;
        border-radius: 0px 0px 20px 20px;
        border-top: 1px solid rgba(var(--color-background), 1);
        display: flex;
        align-items: center;
        transition: 0.3s;
    }

    .button-nav {
        margin-right: 40px;
        padding: 15px;
        cursor: pointer;
        border-bottom: 2px solid rgba(var(--color-text), 0);
    }

    .button-nav p {
        color: rgba(var(--color-text), 0.5);
        font-weight: 500;
    }

    .active {
        border-bottom: 2px solid rgba(var(--color-text), 1);
    }

    .active p {
        color: rgba(var(--color-text), 1);
    }

    .button-nav:hover {
        border-bottom: 2px solid rgba(var(--color-text), 0.5);
    }

    .nav p {
        margin: 0;
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
    }

    .media-genres {
        display: flex;
        margin-top: 20px;
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
        width: 342%;
    }

    .button-fav {
        display: flex;
        overflow: hidden;
        align-items: center;
        white-space: nowrap;
    }

    .button-fav p {
        margin-left: 12px;
        color: white;
    }

    .button-fav svg.icon {
        font-size: 1rem;
        min-width: 1em;
    }
</style>