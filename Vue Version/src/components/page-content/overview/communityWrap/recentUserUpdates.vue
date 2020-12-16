<template>
    <div class="feed">
        <div class="section-header">
            <h3 @click="$emit('set-wrap', 1)"><a>Recent user activity</a></h3>
            <a @click="$emit('set-wrap', 1)" class="button-more"><i class="fas fa-angle-right"></i></a>
        </div>
        <!-- next code block checks if user feed is in focus, and if not, it only displays 2 latest posts -->
        <div v-if="state == 1">
            <div v-for="entry in feedEntries" :key="entry.id">
                <userEntry :entry="entry" @expand="$emit('expand', entry.id)" :state="state" :expanded="expanded" @set-wrap="$emit('set-wrap', 1)"/>
            </div>
        </div>
        <div v-else>
            <div v-for="entry in feedEntries.slice(0,2)" :key="entry.id">
                <userEntry :entry="entry" @expand="$emit('expand', entry.id)" :state="state" :expanded="expanded" @set-wrap="$emit('set-wrap', 1)"/>
            </div>
        </div>
        <!-- end of weird code block -->
    </div>
</template>

<script>
import userEntry from './users/userEntry';
export default {
    name: 'recentUserUpdates',
    components: {
        userEntry
    },
    props: ["state", "expanded"],
    data() {
        return {
            feedEntries: [
                {
                    username: 'Sigma',
                    date: 'November 12, 2020',
                    content: 'Hello, my name is Max!',
                    replies: [
                        {
                            username: 'Kyokino',
                            date: 'November 15, 2020',
                            content: 'I posted a funny meme!',
                            id: 1,
                            replies: [
                                {
                                    username: 'Sigma',
                                    date: 'November 12, 2020',
                                    content: 'Hello, my name is Max!',
                                    id: 1
                                },
                                {
                                    username: 'cakes',
                                    date: 'November 11, 2020',
                                    content: 'Finally updated my CSS.',
                                    id: 2
                                }
                            ]
                        }
                    ],
                    id: 1
                },
                {
                    username: 'Kyokino',
                    date: 'November 15, 2020',
                    content: 'I posted a funny meme!',
                    replies: [],
                    id: 2
                },
                {
                    username: 'cakes',
                    date: 'November 11, 2020',
                    content: 'Finally updated my CSS.',
                    replies: [],
                    id: 3
                }
            ]
        }
    }
}
</script>

<style scoped>
    h3 {
        color: rgb(var(--color-text))
    }

    .section-header a {
        text-decoration: none;
        color: rgb(var(--color-text));
    }

    .textbox {
        background-color: rgb(var(--color-foreground));
        border-radius: 20px;
        padding: 5px 10px;
        margin-bottom: 30px;
        box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
        transition: 1s;
    }

    .textbox form {
        padding: 10px;
    }

    input[type = text]{
        color: rgb(var(--color-text-markdown))
    }

</style>