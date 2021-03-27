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
import likeButton from '../../../../../../../components/likeButton';
import buttonMore from '../../../../../../../components/buttonMore';
import buttonReply from '../../../../../../../components/buttonReply';
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
            this.replyToVisible = !this.replyToVisible;
            this.$nextTick(() =>  this.$refs.replyToBox.focus());
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
        padding: 10px;
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
    }

    .reply-body .name-block {
        display: flex;
        margin-left: 8px;	
    }

    .reply-to-body .name-block {
        display: flex;
        align-items: center;
        margin-left: 8px;
        font-size: 14px;	
    }

    .name {
        color: rgba(var(--color-link));
    }

    .date {
        margin: 5px;
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
        margin-left: 43px;
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