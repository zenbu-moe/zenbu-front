<template>
    <div class="entry-reply">
        <replyItem />
        <div class="textbox">
            <form>
				<input type="text" placeholder="Reply...">
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
    }
}
</script>

<style scoped>
    .entry-reply {
        padding: 10px
    }

    .textbox {
        background-color: white;
        border-radius: 20px;
        padding: 5px 5px;
        box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
    }

    .textbox form {
        padding: 5px;
    }
</style>