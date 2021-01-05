<template>
    <div class="info-box">
        <div class="section-header">
            <h3 @click="setWrap(2)"><a>Recent friend activity</a></h3>
            <a @click="setWrap(2)" class="button-more"><i class="fas fa-angle-right"></i></a>
        </div>
        <div>
            <div v-if="state == 2">
                <div v-for="activity in activitiesFriends" :key="activity.id">
                    <div class="recent-activity-friend" style="margin-bottom: 20px">
                        <activityFriend :activity="activity" :state="state" @set-wrap="setWrap(2)" :expand="expanded"/>
                    </div>
                </div>
            </div>
            <div v-if="state != 2">
                <div class="recent-activity-friend">
                    <div v-for="activity in activitiesFriends.slice(0,3)" :key="activity.id">
                        <activityFriend :activity="activity" :state="state" @set-wrap="setWrap(2)" @expand="$emit('expand', activity.id)"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import activityFriend from './activityFriend';

export default {
    name: 'infoActivitiesFriend',
    components: {
        activityFriend
    },
    props: ["state", "expanded"],
    methods: {
        setWrap(id) {
            this.$emit('set-wrap', id)
        }
    },
    data() {
        return {
            activitiesFriends: [
                {
                    username: "cakes",
                    title: "One Piece",
                    type: "anime",
                    progressState: 0,
                    episodesWatched: 0,
                    episodesTotal: 13,
                    id: 1,
                    replies: [
                                {
                                    username: 'Sigma',
                                    date: 'November 12, 2020',
                                    content: 'Hello, my name is Max!',
                                    replies: [],
                                    id: 1
                                },
                                {
                                    username: 'cakes',
                                    date: 'November 11, 2020',
                                    content: 'Finally updated my CSS.',
                                    replies: [],
                                    id: 2
                                }
                            ]
                },
                {
                    username: "cakes",
                    title: "One Piece",
                    type: "anime",
                    progressState: 1,
                    episodesWatched: 0,
                    episodesTotal: 13,
                    id: 2,
                    replies: [
                                {
                                    username: 'Sigma',
                                    date: 'November 12, 2020',
                                    content: 'Hello, my name is Max!',
                                    replies: [],
                                    id: 1
                                },
                                {
                                    username: 'cakes',
                                    date: 'November 11, 2020',
                                    content: 'Finally updated my CSS.',
                                    replies: [],
                                    id: 2
                                }
                            ]
                },
                {
                    username: "cakes",
                    title: "One Piece",
                    type: "anime",
                    progressState: 2,
                    episodesWatched: 0,
                    episodesTotal: 13,
                    id: 3,
                    replies: [
                                {
                                    username: 'Sigma',
                                    date: 'November 12, 2020',
                                    content: 'Hello, my name is Max!',
                                    replies: [],
                                    id: 1
                                },
                                {
                                    username: 'cakes',
                                    date: 'November 11, 2020',
                                    content: 'Finally updated my CSS.',
                                    replies: [],
                                    id: 2
                                }
                            ]
                },
                {
                    username: "cakes",
                    title: "One Piece",
                    type: "anime",
                    progressState: 3,
                    episodesWatched: 0,
                    episodesTotal: 13,
                    id: 4,
                    replies: [
                                {
                                    username: 'Sigma',
                                    date: 'November 12, 2020',
                                    content: 'Hello, my name is Max!',
                                    replies: [],
                                    id: 1
                                },
                                {
                                    username: 'cakes',
                                    date: 'November 11, 2020',
                                    content: 'Finally updated my CSS.',
                                    replies: [],
                                    id: 2
                                }
                            ]
                },
            ]
        }
    }
}
</script>

<style>
    h3 {
        cursor: pointer;
    }

    .section-header a {
        text-decoration: none;
        color: rgb(var(--color-text));
    }

    .info-box {
        margin-bottom: 20px;
    }

    .info-box .recent-activity,
    .info-box .recent-activity-friend {
        padding: 10px;
        background-color: rgb(var(--color-foreground));
        border-radius: 12px;
        box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
        transition: 1s;
    }
</style>