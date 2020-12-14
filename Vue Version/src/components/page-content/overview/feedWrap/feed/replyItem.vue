<template>
    <div class="reply-item">
        <div class="reply-body">
            <div class="header">
                <div class="profile">
                    <a href="" class="avatar" style="background-image: url('{{ placeholder }}')"></a>
                    <div class="name-block">
                        <a href="" class="name">{{ placeholder }}</a>
                        <p class="date">{{ placeholder }}</p>
                    </div>
                </div>
                <div class="entry-settings">
                    <buttonMore />
                </div>
            </div>
            <div class="text-markdown">
                {{ placeholder }}
            </div>
        </div>
        <div class="actions">
            <likeButton />
        </div>
    </div>
</template>

<script>
import buttonMore from '../../../../buttonMore.vue'
import likeButton from '../../../../likeButton'

export default {
    name: 'replyItem',
    components: {
        likeButton,
        buttonMore
    }
}
</script>

<style scoped>
    .reply-item {
        margin-bottom: 10px;
    }

    .reply-body {
        background-color: white;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        padding: 20px;
    }

    .reply-body .header {
        display: flex;
        justify-content: space-between;
    }

    .reply-body .header .profile {
        display: flex;
        align-items: flex-start;
    }

    .reply-body .header .profile .name-block a {
        text-decoration: none;
        color: black;
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
        color: black;
    }

    .date {
        font-family: "Raleway";
        margin-top: 0px;
        color: rgba(31,31,31,0.65);
    }

    .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: inline-block;
        background-color: rgba(236,236,236,1.00);
        background-size: cover;
        background-position: center;
    }

    .text-markdown {
        color: black;
        font-weight: 300;
    }

    .actions {
        background-color: white;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        border-bottom-right-radius: 20px;
        border-bottom-left-radius: 20px;
        padding: 10px 20px 10px 20px;
    }

    .like-button {
        flex-direction: row-reverse;
    }

</style>