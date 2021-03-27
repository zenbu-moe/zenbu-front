<template>
    <div class="feed-entry">
        <div class="entry-body">
            <div class="header">
                <div class="profile">
                    <a href="" class="avatar" style="background-image: url('{{ placeholder }}')"></a>
                    <div class="name-block">
                        <a href="" class="name">{{ entry.username }}</a>
                        <p class="date">{{ entry.date }}</p>
                    </div>
                </div>
                <div class="entry-settings">
                    <div class="flags">
                        <div class="nsfw" v-if="entry.nsfw">
                            <p>NSFW</p>
                        </div>
                        <div class="spoiler" v-if="entry.spoiler">
                            <p>Spoiler</p>
                        </div>
                    </div>
                    <buttonMore />
                </div>
            </div>
            <div class="text-markdown">
                <div class="flag-shadow" v-if="postFlagged">
                    <div class="reveal-button" @click="postFlagged = false">
                        <p v-if="entry.spoiler && !entry.nsfw">Click to reveal spoiler</p>
                        <p v-if="!entry.spoiler && entry.nsfw">Click to reveal NSFW content</p>
                        <p v-if="entry.spoiler && entry.nsfw">Click to reveal</p>
                    </div>
                </div>
                <!-- {{ entry.content }} -->
                <p>
                    hi
                    <br>
                    i was inactive for like a week
                    <br>
                    that's cuz i was making a new osu skin
                </p>
                <p>
                    so for some reason i made an akai haato skin this time around, so uhhh yeah
                    <br>
                    click the image below to go to osu! forums and check it out there
                </p>
                <img src="https://i.ppy.sh/57b00a3061681c0fd6623aac3eea5dda3bf92733/68747470733a2f2f692e696d6775722e636f6d2f426470467a36422e706e67">
            </div>
        </div>
        <div class="misc">
            <div class="entry-actions">
                <div class="reply-button">
                    <buttonReply @click="setVisible(); $emit('expand')" />
                    <span v-if="entry.replies.length > 0" class="count">{{ entry.replies.length }}</span>
                </div>
                <likeButton />
            </div>
            <div class="reference">
                <p>Bakemonogatari</p>
            </div>
        </div>
        <feedReply v-if="repliesVisible" :replies="entry.replies" ref="feedReplies"/>
    </div>
</template>

<script>
import likeButton from '../../../../../../../components/likeButton';
import buttonMore from '../../../../../../../components/buttonMore';
import buttonReply from '../../../../../../../components/buttonReply';
import feedReply from './feedReply';

export default {
    name: 'feedEntry',
    props: ["entry", "state", "expanded"],
    components: {
        likeButton,
        feedReply,
        buttonMore,
        buttonReply
    },
    data() {
        return {
            repliesVisible: false,
            postFlagged: false
        }
    },
    methods: {
        setVisible() {
            this.repliesVisible = !this.repliesVisible
        }
    },
    beforeMount() {
        if (this.entry.id == this.expanded) {
            this.repliesVisible = true
        }

        if (this.entry.nsfw || this.entry.spoiler) {
            this.postFlagged = true
        }
    }
}
</script>

<style scoped>
    .feed-entry {
        background-color: rgb(var(--color-foreground));
        border-radius: 15px;
        margin: 20px 0px;
        padding: 7px 7px 0px 7px;
        box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
        animation: zoomIn 0.3s;
        transition: 1s;
    }

    .entry-body {
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
        padding: 10px;
    }

    .entry-body .header {
        display: flex;
        justify-content: space-between;
    }

    .entry-body .header .profile {
        display: flex;
        align-items: flex-start;
    }

    .feed-entry .misc {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid rgba(var(--color-text), 0.1);
        border-bottom-right-radius: 15px;
        border-bottom-left-radius: 15px;
        padding: 5px;
    }

    .entry-actions {
        display: flex;
    }

    .entry-actions div {
        margin-right: 5px;
    }

    .count {
        margin-right: 2px;
        color: rgb(var(--color-button));
    }

    .name-block {
        display: flex;
        flex-direction: column;
        margin-left: 15px;	
    }

    .name {
        color: rgba(var(--color-link));
    }

    .date {
        font-size: 0.85rem;
        margin: 2px 0px 0px 0px;
        color: rgba(var(--color-gray-darker));
    }

    .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: inline-block;
        background-color: rgb(var(--color-foreground-dark));
        background-size: cover;
        background-position: center;
        transition: 1s;
    }

    .text-markdown {
        color: rgba(var(--color-text-markdown));
        line-height: normal;
        position: relative;
    }

    img {
        max-width: 100%;
        max-height: 100%;
    }

    .comments {
        cursor: pointer;
        visibility: hidden;
        color: rgba(var(--color-text));
    }

    .comments:hover {
        text-decoration: underline;
    }

    .visible {
        visibility: visible;
    }

    .reply-button {
        display: flex;
        align-items: center;
    }

    .entry-settings, .flags {
        display: flex;
        align-items: center;
    }

    .nsfw {
        display: flex;
        align-items: center;
        padding: 5px;
        border-radius: 30px;
        background-color: rgb(255, 158, 158);
        margin: 0 5px 0 0;
    }

    .spoiler {
        display: flex;
        align-items: center;
        padding: 5px;
        border-radius: 30px;
        background-color: rgba(128, 128, 128, 0.445);
        margin: 0 5px 0 0;  
    }

    .reference {
        display: flex;
        align-items: center;
        padding: 5px;
        border-radius: 30px;
        background-color: rgba(var(--color-background));
        margin: 0 5px;
        cursor: pointer;  
        transition: 0.5s;
    }

    .reference:hover {
        background-color: rgba(var(--color-background), 0.7);
        transition: 0.1s;
    }

    .flags p {
        margin: 0;
        font-size: 0.8rem;
        color: white;
    }

    .reveal-button {
        padding: 20px;
        position: absolute;
        z-index: 3;
        background-color: rgba(var(--color-background), 0.2);
        top: 40%;
        left: 200px;
        right: 200px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid rgb(255,255,255, 0.5);
        cursor: pointer;
        transition: 0.5s;
    }

    .reveal-button:hover {
        background-color: rgba(var(--color-background), 0.5);
        transition: 0.2s;
    }

    .reveal-button p {
        margin: 0;
        font-size: 1rem;
        color: white;
    }

    .reference p {
        margin: 0;
        font-size: 0.8rem;
        color: rgba(var(--color-text));
    }

    .flag-shadow {
        position: absolute;
        top: -5px;
        left: -15px;
        right: -15px;
        bottom: -10px;
        backdrop-filter: blur(50px);
    }
</style>