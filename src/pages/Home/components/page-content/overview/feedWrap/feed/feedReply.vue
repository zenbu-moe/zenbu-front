<template>
    <div class="entry-reply">
        <div v-for="reply in replies" :key="reply.id">
            <replyItem :reply="reply"/>
        </div>
        <div class="textbox">
            <form>
				<input ref="feedReply" style="width: 100%" type="text" placeholder="Reply...">
			</form>
        </div>
    </div>
</template>

<script>
import replyItem from './replyItem'

export default {
    name: 'feedReply',
    components: {
        replyItem
    },
    props: ["replies"]
}
</script>

<style scoped>
    .entry-reply {
        padding: 15px;
        animation: zoomIn 0.3s;
        border-top: 1px solid rgb(var(--color-foreground-dark));
        transition: 1s;
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