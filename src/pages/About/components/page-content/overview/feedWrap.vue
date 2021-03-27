<template>
    <div class="feed" ref="feed">
        <h3>Feed</h3>
        <div class="edit-tools" v-if="advancedEditing">
            <btn><i class="fas fa-bold"></i></btn>
            <btn><i class="fas fa-italic"></i></btn>
            <btn><i class="fas fa-strikethrough"></i></btn>
            <btn><i class="fas fa-underline"></i></btn>
            <btn><i class="far fa-eye-slash"></i></btn>
            <btn><i class="fas fa-align-left"></i></btn>
            <btn><i class="fas fa-heading"></i></btn>
            <btn><i class="fas fa-images"></i></btn>
            <btn><i class="fas fa-film-alt"></i></btn>
            <btn><i class="fab fa-youtube"></i></btn>
            <btn><i class="far fa-code"></i></btn>
            <btn><i class="fas fa-quote-right"></i></btn>
        </div>
        <div class="textbox">
            <div class="top" @mousemove="setHeight">
                <div class="avatar">
                </div>
                <form>
                    <input 
                        v-model="newEntry.formValue"
                        style="width: 100%" type="text" placeholder="How is it going today?">
                </form>
            </div>
            <div class="bottom">
                <div class="button">
                    <i class="far fa-bookmark"></i>
                    <p>Add a reference</p>
                </div>
                <div class="button" @click="toggleAdvEditing()" :class="{'toggle-on': advancedEditing}">
                    <i v-if="!advancedEditing" class="far fa-edit"></i>
                    <i v-if="advancedEditing" class="fas fa-edit"></i>
                    <p>Advanced editing</p>
                </div>
                <div style="width: 100%; position: relative">
                    <div class="button" @click="toggleFlagsPopup(true)" :class="{'toggle-on': flagsPopupOn}">
                        <i v-if="!newEntry.nsfw && !newEntry.spoiler" class="far fa-flag"></i>
                        <p v-if="!newEntry.nsfw && !newEntry.spoiler">Add a label</p>
                        <div class="flags-on">
                            <div class="nsfw-small" v-if="newEntry.nsfw">NSFW</div>
                            <div class="spoiler-small" v-if="newEntry.spoiler">Spoiler</div>
                        </div>
                    </div>
                    <div class="popup-wrap" v-if="flagsPopupOn" @click="toggleFlagsPopup(false)" @mouseleave="toggleFlagsPopup(false)">
                        <div class="popup flags">
                            <div class="nsfw" @click="newEntry.nsfw = true" v-if="!newEntry.nsfw">Mark as NSFW</div>
                            <div class="nsfw" @click="newEntry.nsfw = false" v-if="newEntry.nsfw">Remove NSFW</div>
                            <div class="spoiler" @click="newEntry.spoiler = true" v-if="!newEntry.spoiler">Mark as spoiler</div>
                            <div class="spoiler" @click="newEntry.spoiler = false" v-if="newEntry.spoiler">Remove spoiler</div>
                        </div>
                        <i class="fas fa-sort-down"></i>
                        <div class="debug">
                        </div>
                    </div>
                </div>
            </div>
            <div class="wrap" v-if="newEntry.formValue != ''">
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
            /* console.log(element.clientHeight)
            console.log(element) */

            this.height = element.clientHeight
            
            this.$nextTick(() => {
                this.$emit('set-height', element);
                this.$emit('element', element)
            })
        },
        toggleAdvEditing() {
            this.advancedEditing = !this.advancedEditing
        },
        toggleFlagsPopup(bool) {
            this.flagsPopupOn = bool
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
            advancedEditing: false,
            flagsPopupOn: false,
            newEntry: {
                username: '',
                date: '',
                nsfw: false,
                spoiler: false,
                formValue: ''
            },
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
        margin: 0 0 10px 0;
    }

    .feed {
        padding-bottom: 10px;
        width: 100%;
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

    .edit-tools {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px 0px;
        background-color: rgb(var(--color-foreground));
        border-radius: 15px;
        margin-bottom: 15px;
        box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
        color: rgb(var(--color-text));
    }

    .popup {
        background-color: rgb(var(--color-foreground));
        border-radius: 15px;
        padding: 10px;
        box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
        transition: 1s;
        color: rgb(var(--color-text));
        animation: zoomIn 0.3s;
        display: flex;
        flex-direction: column;
        font-size: 1rem;
    }

    .popup-wrap {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: rgb(var(--color-foreground));
        font-size: 1.5rem;
        margin-top: -125px;
        margin-left: 15%;
        cursor: pointer;
    }

    .popup-wrap i {
        margin-top: -15px;
    }

    .debug {
        width: 100px;
        height: 40px;
    }

    .nsfw {
        display: flex;
        align-items: center;
        padding: 5px 10px;
        border-radius: 30px;
        background-color: rgb(255, 158, 158);
        margin: 0 5px 10px 0;
        color: white;
    }

    .spoiler {
        display: flex;
        align-items: center;
        padding: 5px 10px;
        border-radius: 30px;
        background-color: rgba(128, 128, 128, 0.445);
        color: white;
        margin: 0 5px 0 0;  
    }

    .flags-on {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .nsfw-small {
        display: flex;
        font-size: 0.8rem;
        align-items: center;
        padding: 2px 10px;
        border-radius: 30px;
        background-color: rgb(255, 158, 158);
        margin: 0px 5px;
        color: white;
    }

    .spoiler-small {
        display: flex;
        font-size: 0.8rem;
        align-items: center;
        padding: 2px 10px;
        border-radius: 30px;
        background-color: rgba(128, 128, 128, 0.445);
        color: white;
        margin: 0px 5px;  
    }

    btn {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        width: 40px;
        height: 40px;
        transition: 0.5s;
        animation: zoomIn 0.3s;
        cursor: pointer;
        border-radius: 5px;
        background: rgb(var(--color-background), 0);
        margin: 0px 10px;
    }

    btn:hover {
        background: rgb(var(--color-background), 0.5)
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

    .toggle-on {
        background: rgb(var(--color-background), 0.3);
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
    }

</style>