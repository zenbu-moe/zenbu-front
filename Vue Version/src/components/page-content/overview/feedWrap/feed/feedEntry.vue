<template>
    <div class="feed-entry">
        <div class="entry-body">
            <div class="header">
                <div class="profile">
                    <a href="" class="avatar" style="background-image: url('{{ placeholder }}')"></a>
                    <div class="name-block">
                        <a href="" class="name">{{ placeholder }}</a>
                        <p class="date">{{ placeholder }}</p>
                    </div>
                </div>
                <div class="entry-settings">
                    <button-more class="button"><i class="fas fa-ellipsis-h"></i></button-more>
                </div>
            </div>
            <div class="text-markdown">
                {{ placeholder }}
            </div>
        </div>
        <div class="misc">
            <div class="entry-actions">
                <div class="reply-button">
                    <button-reply class="button"><i class="fas fa-reply"></i></button-reply>
                </div>
                <likeButton />
            </div>
            <div class="comments">
                <span class="count">{{ placeholder }}</span>
                <span> comments</span>
            </div>
        </div>
    </div>
</template>

<script>
import likeButton from '../../../../likeButton';

export default {
    name: 'feedEntry',
    components: {
        likeButton
    }
}
</script>

<style>
    .feed-entry {
        background-color: white;
        border-radius: 20px;
        padding: 10px;
        margin: 20px 0px;
        box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
    }

    .entry-body {
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

    .entry-body .header .profile .name-block a {
        text-decoration: none;
        color: black;
    }

    .entry-body .header .entry-settings button-more {
        display: inline-block;
        color: gray;
        width: 40px;
        height: 40px;
        text-align: center;
        border-radius: 50%;
        padding: 11px;
        transition: 0.3s ease-out;
        cursor: pointer;
    }

    .entry-body .header .entry-settings button-more:hover {
        background-color: rgba(232,232,232,1.00);
        transition: 0.1s;
    }

    .feed-entry .misc {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 10px 0px 10px;
    }

    .entry-actions {
        display: flex;
    }

    .entry-actions div {
        margin-right: 5px;
    }

    button-reply {
        display: inline-block;
        color: gray;
        width: 40px;
        height: 40px;
        text-align: center;
        border-radius: 50%;
        padding: 11px;
        transition: 0.3s ease-out;
        cursor: pointer;
    }

    button-reply:hover {
        background-color: rgba(79,53,244,0.10);
        color: rgba(119,114,224,1.00);
        transition: 0.1s;
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

</style>