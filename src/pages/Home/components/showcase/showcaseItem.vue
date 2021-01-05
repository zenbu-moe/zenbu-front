<template>
    <div class="showcase-item">
        <!-- this shit is as raw as a living animal... need to fix it and not forget %TODO% -->

        <div class="showcase-cover" :style="{backgroundImage: 'url(' + background + ')'}">
        </div>
        <div class="showcase-details">
            <span class="title">{{ item.title }}</span>
            <span class="studio">{{ item.studio }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'showcaseItem',
    props: ["item"],
    data() {
        return {
            background: this.item.cover
        }
    }
}
</script>

<style scoped>
    .showcase-item {
        height: 240px;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        cursor: pointer;
    }

    .showcase-cover {
        width: 135px;
        min-height: 190px;
        max-height: 190px;
        border-radius: 10px;
        overflow: hidden;
        position: relative;
        transition: 0.3s;
        margin-bottom: 5px;
        background-color: rgb(var(--color-foreground));
        background-size: cover;
        transition: 1s;
    }

    .showcase-cover img {
        height: 200px;
        position: absolute;
    }

    .showcase-cover:hover {
        box-shadow: 0px 0px 50px rgba(var(--color-text),0.2);
        transition: 0.2s ease;
    }

    .showcase-details {
        width: 135px;
        display: flex;
        flex-direction: column;
    }

    .showcase-details .title {
        font-family: "Raleway";
        font-weight: 600;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: rgb(var(--color-text));
    }

    .showcase-details .studio {
        font-size: 13px;
        font-weight: 300;
        color: rgb(var(--color-text));
    }
</style>