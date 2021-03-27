<template>
    <div class="info-box">
        <div class="section-header">
            <h3 @click="setWrap(1)">Recent activity</h3>
            <a @click="setWrap(1)" class="button-more"><i class="fas fa-angle-right"></i></a>
        </div>
        <div v-if="state != 1">
            <div class="recent-activity">
                <div v-for="activity in activities.slice(0, 4)" :key="activity.id">
                    <activityEntry :activity="activity"/>
                </div>
            </div>
        </div>
        <div v-if="state == 1">
            <div  v-for="activity in activities" :key="activity.id">
                <div class="recent-activity" style="margin-bottom: 20px">
                    <activityUser :activity="activity" :username="username"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import activityEntry from './activityEntry';
import activityUser from './activityUser';

export default {
    name: 'infoActivities',
    components: {
        activityEntry,
        activityUser
    },
    props: ['state'],
    data() {
        return {
            username: "Sigma",
            activities: [
                {
                    title: "Akudama Drive",
                    type: "anime",
                    progressState: 1,
                    episodesWatched: 3,
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
                    title: "Nisemonogatari",
                    type: "anime",
                    progressState: 3,
                    episodesWatched: 13,
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
                    title: "Monster",
                    type: "anime",
                    progressState: 0,
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
                    title: "Tonikaku Kawaii",
                    type: "anime",
                    progressState: 2,
                    episodesWatched: 8,
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
                }
            ]
        }
    },
    methods: {
        setWrap(id) {
            this.$emit('set-wrap', id);
        },
        getUser() {

        }
    }
}
</script>

<style scoped>
    h3 {
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: rgb(var(--color-text));
    }

    .info-box {
        margin-bottom: 20px;
    }

    .info-box .recent-activity,
    .info-box .recent-activity-friend {
        padding: 5px;
        background-color: rgb(var(--color-foreground));
        border-radius: 12px;
        box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
        transition: 1s;
    }
</style>