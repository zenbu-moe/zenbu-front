<template>
    <div class="reply-item">
        <div class="reply-body">
            <div class="header">
                <div class="profile">
                    <a href="" class="avatar" style="background-image: url('{{ placeholder }}')"></a>
                    <div class="name-block">
                        <a href="" class="name">{{ reply.username }}</a>
                        <p class="date">5 min</p>
                    </div>
                </div>
                <div class="entry-settings">
                    <likeButton />
                    <p class="count">{{ reply.replies.length }}</P>
                    <buttonReply @click="setRepliesVisible()"/>
                    <buttonMore />
                </div>
            </div>
            <div class="text-markdown">
                {{ reply.content }}
            </div>
        </div>
        <div v-if="replyToVisible">
            <div v-for="replyTo in reply.replies" :key="replyTo.id">
                <replyToItem :replyTo="replyTo"/>
            </div>
        </div>
        <div class="textbox" v-if="replyToVisible">
            <form>
				<input style="width: 100%" ref="replyToBox" type="text" placeholder="Reply...">
			</form>
        </div>
    </div>
</template>

<script>
import buttonMore from '../../../../buttonMore';
import likeButton from '../../../../likeButton';
import buttonReply from '../../../../buttonReply';
import replyToItem from './replyToItem';

export default {
    name: 'replyItem',
    components: {
        likeButton,
        buttonMore,
        buttonReply,
        replyToItem
    },
    props: ["reply"],
    data() {
        return {
            replyToVisible: false
        }
    },
    methods: {
        setRepliesVisible() {
            this.replyToVisible = !this.replyToVisible
        }
    }
}
</script>

<style scoped>
    .reply-item {
        margin-bottom: 10px;
    }

    .reply-body {
        background-color: rgb(var(--color-background-dark));
        border-radius: 20px;
        padding: 15px;
        margin-bottom: 10px;
        transition: 1s;
    }

    .reply-body .header {
        display: flex;
        justify-content: space-between;
    }

    .reply-body .header .profile {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
    }

    span {
        font-family: "Raleway";
    }

    .reply-body .name-block {
        display: flex;
        margin-left: 8px;	
    }

    .reply-to-body .name-block {
        display: flex;
        margin-left: 8px;
        margin-top: 3px;
        font-size: 14px;	
    }

    .name {
        font-family: "Raleway";
        font-weight: bold;
        color: rgba(var(--color-link));
    }

    .date {
        font-family: "Raleway";
        margin-left: 5px;
        color: rgba(var(--color-gray-darker));
        font-size: 0.8rem;
    }

    .reply-body .avatar {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        display: inline-block;
        background-color: rgb(var(--color-foreground-dark));
        background-size: cover;
        background-position: center;
        transition: 1s;
    }

    .entry-settings {
        display: flex;
        align-items: center;
    }

    .text-markdown {
        color: rgba(var(--color-text-markdown));;
        font-weight: 300;
        margin-left: 43px;
        font-size: 1rem;
    }

    .like-button {
        flex-direction: row-reverse;
        margin-right: 5px;
    }

    .reply-button {
        margin-right: 5px;
    }

    .count {
        margin-right: 2px;
        color: rgb(var(--color-button));
        font-family: "Raleway";
    }

    p {
        margin: 0px;
    }

    .textbox {
        background-color: rgb(var(--color-background-dark));
        border-radius: 20px;
        margin-left: 50px;
        margin-bottom: 20px;
        max-width: 80%;
        padding: 0px 8px;
        animation: zoomIn 0.3s;
    }

    .textbox form {
        padding: 5px;
        width: 100%;
    }

    input[type = text]{
        color: rgb(var(--color-text-markdown))
    }

</style>