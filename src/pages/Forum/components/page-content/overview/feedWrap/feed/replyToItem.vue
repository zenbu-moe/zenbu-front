<template>
    <div class="reply-to-body">
        <div class="header">
            <div class="profile">
                <a href="" class="avatar" style="background-image: url('{{ placeholder }}')"></a>
                <div class="name-block">
                    <a href="" class="name">{{ replyTo.username }}</a>
                    <p class="date">2h</p>
                </div>
            </div>
            <div class="entry-settings">
                <likeButton />
                <buttonMore />
            </div>
        </div>
        <div class="text-markdown">
            {{ replyTo.content }}
        </div>
    </div>
</template>

<script>
import likeButton from '../../../../../../../components/likeButton';
import buttonMore from '../../../../../../../components/buttonMore';

export default {
    name: 'replyToItem',
    props: ["replyTo"],
    components: {
        buttonMore,
        likeButton
    }
}
</script>

<style scoped>
    .reply-to-body {
        background-color: rgb(var(--color-background-dark));
        border-radius: 20px;
        padding: 15px;
        min-width: 50%;
        max-width: 80%;
        margin: 0px 0px 10px 50px;
        animation: zoomIn 0.3s;
        transition: 1s;
    }

    .reply-to-body .header {
        display: flex;
        justify-content: space-between;
    }

    .reply-to-body .header .profile {
        display: flex;
        align-items: flex-start;
    }

    .reply-to-body .avatar {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        display: inline-block;
        background-color: rgb(var(--color-foreground-dark));
        background-size: cover;
        background-position: center;
        transition: 1s;
    }

    .reply-to-body .name-block {
        display: flex;
        margin-left: 8px;	
    }

    .entry-settings {
        display: flex;
        margin-top: -10px;
        align-items: flex-start;
    }

    .text-markdown {
        color: rgba(var(--color-text-markdown));;
        font-weight: 300;
        margin-left: 33px;
        font-size: 1rem;
    }

    .like-button {
        flex-direction: row-reverse;
        margin-right: 5px;
    }

    .reply-button {
        margin-right: 5px;
    }

    p {
        margin: 0px;
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
    }
</style>