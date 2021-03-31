<template>
    <div class="preview-wrap">
        <div class="user-wrap">
            <div class="avatar">
            </div>
        </div>
        <div class="body">
            <div class="name">
                <p>An1meDweeb</p>
            </div>
            <div class="description">
                <p>
                    First season of the Monogatari Series, part 1/6. Contains the arcs Hitagi Crab, Mayoi Snail, Suruga Monkey, Nadeko Snake, 
                    and Tsubasa Cat from the Bakemonogatari light novels.
                </p>
            </div>
            <div class="misc">
                <div class="left">
                    <div class="info">
                        <p>Recommended</p>
                    </div>
                    <div class="info">
                        <p>Helpful</p>
                    </div>
                </div>
                <div class="stats">
                    <div class="counter">
                        <svg-icon icon="solid/eye"></svg-icon>
                        <p>1732</p>
                    </div>
                    <div class="counter">
                        <svg-icon icon="solid/thumbs-up"></svg-icon>
                        <p>153</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "reviewItem"
}
</script>

<style scoped>
    .preview-wrap {
        border-radius: 20px;
        background-color: rgb(var(--color-foreground));
        box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
        padding: 15px;
        display: flex;
    }

    .user-wrap {
        display: flex;
        flex-direction: column;
        margin-right: 10px;
    }

    .avatar {
        width: 60px;
        background-color: rgb(var(--color-background));
        height: 60px;
        border-radius: 50%;
    }

    .description {
        max-height: 100px;
        overflow: hidden;
    }

    .description p {
        font-size: 0.9rem;
    }

    p {
        margin: 0;
        color: rgb(var(--color-text));
    }

    svg.icon {
        color: rgb(var(--color-text));
    }

    .misc {
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .left {
        display: flex;
        align-items: center;
    }

    .score {
        padding: 5px 10px;
        border-radius: 15px;
        font-size: 1.5rem;
        font-family: "Lexend";
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .info {
        background-color: rgb(var(--color-background));
        padding: 5px 10px;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
    }

    .stats {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .counter {
        font-weight: bold;
        font-size: 0.9rem;
        margin: 0px 10px;
        display: flex;
        align-items: center;
    }

    .counter p {
        margin: 0px 5px;
    }
</style>