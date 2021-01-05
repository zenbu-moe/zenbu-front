<template>
    <div class="feed">
        <div class="section-header">
            <h3 @click="$emit('set-wrap', 2)"><a>Recent group activity</a></h3>
            <a @click="$emit('set-wrap', 2)" class="button-more"><i class="fas fa-angle-right"></i></a>
        </div>
        <!-- next code block checks if group feed is in focus, and if not, it only displays 2 latest posts -->
        <div v-if="state == 1" class="content-wrap">
            <div v-for="entry in feedEntries.slice(0,2)" :key="entry.id">
                <groupEntry :entry="entry" :expanded="expanded" :state="state" @set-wrap="$emit('set-wrap', 2)" @expand="$emit('expand', entry.id)"/>
            </div>
        </div>
        <div v-if="state != 1">
            <div v-for="entry in feedEntries" :key="entry.id">
                <groupEntry :entry="entry" :expanded="expanded" :state="state" @set-wrap="$emit('set-wrap', 2)" @expand="$emit('expand', entry.id)"/>
            </div>
        </div>
        <!-- end of weird code block -->
    </div>
</template>

<script>
import groupEntry from './groups/groupEntry';

export default {
    name: 'recentGroups',
    components: {
        groupEntry
    },
    props: ["expanded", "state"],
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

    .textbox {
        background-color: rgb(var(--color-foreground));
        border-radius: 15px;
        padding: 5px 10px;
        margin-bottom: 30px;
        box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
        transition: 1s;
    }

    .section-header a {
        text-decoration: none;
        color: rgb(var(--color-text));
    }

    .group-entry {
        margin-top: 0px;
    }

    .textbox form {
        padding: 10px;
    }

    input[type = text]{
        color: rgb(var(--color-text-markdown))
    }

    .content-wrap {
        padding: 20px 20px 0px 20px;
        background-color: rgb(var(--color-foreground));
        border-radius: 20px;
        box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
        transition: 1s;
        display: flex;
        flex-direction: column;
    }

</style>