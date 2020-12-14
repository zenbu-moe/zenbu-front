<template>
    <div class="feed">
        <h3>Feed</h3>
        <div class="textbox">
            <form>
				<input type="text" placeholder="What's on your mind?">
			</form>
        </div>
        <div>
            <feedEntry />
        </div>
    </div>
</template>

<script>
import feedEntry from './feed/feedEntry';
export default {
    name: 'feed',
    components: {
        feedEntry
    }
}
</script>

<style scoped>
    .feed {
        padding: 15px;
    }

    .textbox {
        background-color: white;
        border-radius: 20px;
        padding: 5px 10px;
        margin-bottom: 30px;
        box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
    }

    .textbox form {
        padding: 10px;
    }

</style>