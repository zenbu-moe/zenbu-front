<template>
    <div class="feed" ref="feed">
        <h3>Feed</h3>
        <div class="textbox">
            <form @mousemove="setHeight">
				<input style="width: 100%" type="text" placeholder="What's on your mind?">
			</form>
        </div>
        <div v-for="entry in feedEntries" :key="entry.id">
            <feedEntry :entry="entry" :state="state"/>
        </div>
    </div>
</template>

<script>
import feedEntry from './feedWrap/feedEntry';
export default {
    name: 'feedWrap',
    props: ["state"],
    methods: {
        logme: function(event) {
            console.log(event.target.parentElement)
            console.log(event.target.parentElement.clientHeight) 
        },
        setHeight() {
            var element = this.$refs.feed
            console.log(element.clientHeight)
            console.log(element)

            this.height = element.clientHeight
            
            this.$nextTick(() => {
                this.$emit('set-height', element);
                this.$emit('element', element)
            })
        }
    },
    components: {
        feedEntry
    },
    watch: {
        
    },
    mounted() {
        this.setHeight()
    },
    data() {
        return { // this is where feed data should enter
            height: 0,
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
                },
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
                    id: 4
                },
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
                    id: 5
                },
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
                    id: 6
                },
            ]
        }
    }
}
</script>

<style scoped>
    h3 {
        color: rgb(var(--color-text));
        margin-top: 0px;
    }

    .feed {
        padding-bottom: 10px;
        width: 100%;
    }

    .textbox {
        background-color: rgb(var(--color-foreground));
        border-radius: 15px;
        padding: 2px 5px;
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