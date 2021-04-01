<template>
    <div class="preview-wrap">
        <div class="body">
            <div class="user-wrap">
                <div class="avatar">
                </div>
                <div class="name">
                    <div class="nameblock">
                        <p>An1meDweeb</p>
                    </div>
                    <p class="date">April 1, 2021</p>
                </div>
            </div>
            <div class="opinion">
                <div class="icon">
                    <svg-icon icon="solid/thumbs-up"></svg-icon>
                </div>
                <div class="block">
                    <h2>Recommended</h2>
                    <p>Finished this entry on Mar 25, 2021</p>
                </div>
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
                        <p>Helpful</p>
                    </div>
                </div>
                <div class="stats">
                    <div class="counter">
                        <svg-icon icon="solid/thumbs-up"></svg-icon>
                        <p>127</p>
                    </div>
                    <div class="counter">
                        <svg-icon icon="solid/eye"></svg-icon>
                        <p>1732</p>
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
        margin-bottom: 10px;
        align-items: flex-start;
    }

    .avatar {
        width: 40px;
        background-color: rgb(var(--color-background));
        height: 40px;
        border-radius: 50%;
        margin-right: 5px;
    }

    .description {
        max-height: 200px;
        overflow: hidden;
        border-bottom: 1px solid rgb(var(--color-text), 0.1);
        transition: 0.3s;
        padding-bottom: 10px;
    }

    .description p {
        font-size: 0.9rem;
        margin-bottom: 5px;
    }

    .date {
        font-family: "Lexend";
        font-weight: 300;
        font-size: 0.8rem;
        color: rgb(var(--color-text))
    }

    .opinion {
        background-color: rgb(var(--color-background), 0.5);
        padding: 10px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        width: 30%;
        margin-bottom: 10px;
    }

    .opinion svg.icon {
        font-size: 2rem;
        margin: 0 10px;
    }

    .opinion h2 {
        margin: 0;
        font-size: 1.2rem;
    }

    .opinion p {
        font-size: 0.8rem;
    }

    p {
        margin: 0;
        color: rgb(var(--color-text));
    }

    svg.icon {
        color: rgb(var(--color-text));
    }

    .misc {
        margin-top: 15px;
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
        padding: 3px 10px;
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