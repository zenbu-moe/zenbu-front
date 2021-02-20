<template>
    <div class="feed">
        <h3>Feed</h3>
        <div class="textbox">
            <div class="top">
                <div class="avatar">
                </div>
                <form>
                    <input 
                        v-model="formValue"
                        style="width: 100%" type="text" placeholder="How is it going today?">
                </form>
            </div>
            <div class="bottom">
                <div class="button">
                    <i class="far fa-bookmark"></i>
                    <p>Add a reference</p>
                </div>
                <div class="button">
                    <i class="far fa-edit"></i>
                    <p>Advanced editing</p>
                </div>
                <div class="button">
                    <i class="far fa-flag"></i>
                    <p>Flag this post</p>
                </div>
            </div>
            <div class="wrap" v-if="formValue != ''">
                <div class="post-button">
                    <p>Post</p>
                </div>
                <div class="post-button">
                    <i class="far fa-users"></i>
                    <p>Public</p>
                </div>
            </div>
        </div>
        <div v-for="entry in feedEntries" :key="entry.id">
            <feedEntry :entry="entry" :state="state"/>
        </div>
    </div>
</template>

<script>
import feedEntry from './feed/feedEntry';
export default {
    name: 'feed',
    props: ["state"],
    components: {
        feedEntry
    },
    data() {
        return { // this is where feed data should enter
            formValue: '',
            feedEntries: [
                {
                    username: 'Sigma',
                    date: 'November 12, 2020',
                    content: 'hey',
                    nsfw: true,
                    spoiler: false,
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
                    nsfw: false,
                    spoiler: false,
                    id: 2
                },
                {
                    username: 'cakes',
                    date: 'November 11, 2020',
                    content: 'Finally updated my CSS.',
                    replies: [],
                    nsfw: false,
                    spoiler: true,
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
        padding: 10px;
        margin-bottom: 30px;
        box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
        transition: 1s;
        color: rgb(var(--color-text));
    }

    .top {
        display: flex;
        align-items: center;
        border-bottom: 1px solid rgba(var(--color-text), 0.1);
        padding: 5px 5px 10px 5px; 
    }

    .avatar {
        background: rgb(var(--color-background-dark));
        border-radius: 50%;
        min-width: 40px;
        max-width: 40px;
        height: 40px;
        margin-right: 10px;
    }

    .textbox form {
        width: 100%;
    }

    input[type = text]{
        color: rgb(var(--color-text-markdown));
        background: rgb(var(--color-background), 0.5);
        border-radius: 50px;
        padding: 10px;
    }

    .bottom {
        display: flex;
        align-items: center;
        padding-top: 10px;
        font-family: 'Raleway';
        justify-content: space-between;
    }

    .bottom p, .post-button p {
        margin: 0px 5px;
        font-size: 1rem;
    }

    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        padding: 10px;
        width: 100%;
        cursor: pointer;
    }

    .button:hover, .post-button:hover {
        background: rgb(var(--color-background), 0.5);
    }

    .wrap {
        margin-top: 10px;
        border-top: 1px solid rgba(var(--color-text), 0.1);
        padding-top: 10px;
        display: grid;
        grid-template-columns: auto 200px;
    }

    .post-button {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        padding: 10px;
        width: 100%;
        cursor: pointer;
        font-family: 'Raleway';
    }

</style>