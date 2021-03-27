<template>
    <div class="activity-body">
        <div class="activity-entry">
            <a href="" class="cover" style="background-image: url('images/akudama.png')"></a>
            <div class="details">
                <div class="header">
                    <div class="profile">
                        <a href="" class="avatar" style="background-image: url('images/sigma.png')"></a>
                        <div class="name-block">
                            <a href="" class="name">{{ activity.username }}</a>
                            <p class="date">#time</p>
                        </div>
                    </div>
                    <span class="actions">
                        <likeButton />
                        <buttonReply @click="setRepliesVisible(); $emit('expand', activity.id)"/>
                    </span>
                </div>
                <span class="progress">
                    <p v-if="activityState == 0">Plans to watch <a>{{ activity.title }}</a></p>
                    <p v-if="activityState == 1">Watched episode {{ activity.episodesWatched }}/{{ activity.episodesTotal }} of <a>{{ activity.title }}</a></p>
                    <p v-if="activityState == 2">Dropped <a>{{ activity.title }}</a></p>
                    <p v-if="activityState == 3">Completed <a>{{ activity.title }}</a></p>
                </span>
            </div>
        </div>
        <div v-if="state != 0 && isRepliesVisible" class="replies">
            <div class="activity-replies">
                <div v-for="reply in activity.replies" :key="reply.id">
                    <replyItem :reply="reply"/>
                </div>
            </div>
            <div class="textbox">
                <form>
                    <input style="width: 100%" type="text" placeholder="Reply...">
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import likeButton from '../../../../../../../components/likeButton';
import buttonReply from '../../../../../../../components/buttonReply';
import replyItem from '../feed/replyItem';

export default {
    name: 'activityFriend',
    props: ["activity", "state", "expand"],
    components: {
        likeButton,
        buttonReply,
        replyItem
    },
    data() {
        return {
            activityState: this.activity.progressState,
            isRepliesVisible: false,
            id: this.activity.id
        }
    },
    methods: {
        setRepliesVisible() {
            this.isRepliesVisible = !this.isRepliesVisible;
            if (this.state != 2) {
                this.$emit('set-wrap')
            }
        }
    },
    beforeMount() {
        if (this.id == this.expand) {
            this.isRepliesVisible = true
        }
    }
}
</script>

<style scoped>
    a {
        cursor: pointer;
    }

    p {
        color: rgb(var(--color-text));
        transition: 1s;
    }

    .activity-replies {
        border-top: 1px solid rgba(var(--color-text), 0.1);
        padding-top: 15px;
        animation: zoomIn 0.3s;
    }

    .activity-entry {
        padding: 12px;
        display: flex;
    }

    .activity-entry .cover {
        min-width: 60px;
        min-height: 84px;
        border-radius: 10px;
        display: inline-block;
        background-color: rgb(var(--color-foreground-dark));
        background-size: cover;
        background-position: center;
        transition: 1s;
    }

    .activity-entry .details {
        max-height: 84px;
        margin-left: 15px;
        display: grid;
        width: 100%;
    }

    .activity-entry .details p {
        font-size: 15px;
    }

    .activity-entry .details .progress {
        margin-top: -20px;
    }

    .activity-entry .details span a {
        font-size: 15px;
        text-decoration: none;
        color: rgb(var(--color-link));
        font-weight: 400;
    }

    .activity-entry .details .header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    .activity-entry .details .profile {
        display: flex;
        align-items: flex-start;
    }

   .activity-entry .details .profile .avatar {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        display: inline-block;
        background-color: rgb(var(--color-foreground-dark));
        background-size: cover;
        background-position: center;
        margin-right: 8px;
        transition: 1s;
    }

    .activity-entry .details .profile p {
        margin-top: 2px;
        font-size: 13px;
    }

    .like-button {
        flex-direction: row-reverse;
    }

    .name-block {
        display: flex;
        flex-direction: column;
        margin-left: 3px;	
    }

    .name {
        font-weight: bold;
        color: rgb(var(--color-link));
    }

    .date {
        margin-top: 0px;
        color: rgba(var(--color-gray-darker));
    }

    .actions {
        display: inline-flex;
    }

    .replies {
        padding: 10px;
    }

    .textbox {
        background-color: rgb(var(--color-background-dark));
        border-radius: 20px;
        padding: 3px 5px;
        transition: 1s;
    }

    .textbox form {
        padding: 5px;
    }

    input[type = text]{
        color: rgb(var(--color-text-markdown))
    }

</style>