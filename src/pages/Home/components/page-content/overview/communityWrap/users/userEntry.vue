<template>
    <div class="user-entry" :class="{'maximized': (state == 1), 'minimized': (state != 1)}">
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
                    <buttonMore />
                </div>
            </div>
            <div class="text-markdown">
                {{ entry.content }}
            </div>
        </div>
        <div class="misc">
            <div class="entry-actions">
                <div class="reply-button">
                    <buttonReply @click="setVisible()" />
                </div>
                <likeButton />
            </div>
            <div class="comments " @click="setVisible()" :class="{'visible':entry.replies.length > 0}">
                <span class="count">{{ entry.replies.length }}</span>
                <span> replies</span>
            </div>
        </div>
        <feedReply v-if="repliesVisible && state == 1" :replies="entry.replies"/>
    </div>
</template>

<script>
import likeButton from '../../../../../../../components/likeButton';
import buttonMore from '../../../../../../../components/buttonMore';
import buttonReply from '../../../../../../../components/buttonReply';
import feedReply from '../../feedWrap/feed/feedReply';

export default {
    name: 'userEntry',
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
            id: this.entry.id
        }
    },
    methods: {
        setVisible() {
            this.repliesVisible = !this.repliesVisible
            if (this.state != 1) {
                this.$emit('set-wrap', 1);
                this.$emit('expand', this.entry.id)
            }
        }
    },
    beforeMount() {
        if (this.id == this.expanded) {
            this.repliesVisible = true
        }
    }
}
</script>

<style scoped>
    .user-entry {
        border-radius: 15px;
        margin-bottom: 20px;
        padding: 10px;
        animation: zoomIn 0.3s;
        transition: 1s;
    }

    .minimized {
        background-color: rgb(var(--color-foreground));
        box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
    }

    .maximized {
        background-color: rgb(var(--color-foreground));
        box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
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

    .user-entry .misc {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom-right-radius: 15px;
        border-bottom-left-radius: 15px;
        padding: 10px 10px 5px 10px;
    }

    .entry-actions {
        display: flex;
    }

    .entry-actions div {
        margin-right: 5px;
    }

    span {
        font-family: "Raleway";
    }

    .name-block {
        display: flex;
        flex-direction: column;
        margin-left: 15px;	
    }

    .name {
        font-family: "Raleway";
        font-weight: bold;
        color: rgba(var(--color-link));
    }

    .date {
        font-family: "Raleway";
        margin-top: 0px;
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
        font-weight: 300;
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

</style>