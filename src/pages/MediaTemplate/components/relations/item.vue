<template>
    <div class="item-wrap">
        <div class="cover">
        </div>
        <div class="body">
            <div class="top">
                <p>Source</p>
                <div class="title">
                    <h2>Monogatari Series: Second Season</h2>
                </div>
                <div class="sub-title">
                    <p>Light Novel</p>
                    <p>・</p>
                    <p>Finished</p>
                </div>
            </div>
            <div class="studio">
                <svg-icon icon="regular/heart"></svg-icon>
                <p>89% Mean Score</p>
                <svg-icon v-if="type == 'anime'" style="margin-left: 15px;" icon="regular/tv"></svg-icon>
                <svg-icon v-if="type == 'manga'" style="margin-left: 15px;" icon="light/book-open"></svg-icon>
                <svg-icon v-if="type == 'ranobe'" style="margin-left: 15px;" icon="light/book"></svg-icon>
                <p v-if="type == 'anime'">12 episodes</p>
                <p v-if="type == 'manga'">152 chapters</p>
                <p v-if="type == 'ranobe'">7 volumes</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "item",
    props: ["type"],
    components: {

    },
}
</script>

<style scoped>
    h2, p {
        margin: 0;
    }

    h2 {
        font-size: 1.1rem;
    }

    .item-wrap {
        padding: 10px;
        border-radius: 10px;
        background-color: rgb(var(--color-foreground));
        box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
        display: flex;
        /* flex-direction: column; */
    }

    .cover {
        border-radius: 5px 5px 5px 5px;
        background-color: rgb(var(--color-background-dark));
        min-width: 87px;
        height: 120px;
    }

    .body {
        display: flex;
        flex-direction: column;
        padding: 0px 10px 0px 10px;
        height: 120px;
        justify-content: space-between;
    }

    .top {
        display: flex;
        flex-direction: column;
    }

    .title {
        max-height: 46px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;  
        overflow: hidden;
    }

    .sub-title {
        display: flex;
        align-items: center;
    }

    .sub-title p {
        font-family: "Lexend";
        font-size: 0.8rem;
    }
    
    .studio {
        padding-top: 3px;
        font-family: "Lexend";
        font-size: 0.8em;
        margin-bottom: 5px;
        display: flex;
        align-items: center;
    }

    .studio svg.icon {
        margin-right: 5px;
    }
</style>