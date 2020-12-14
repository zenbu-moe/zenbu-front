<template>
    <div class="showcase-item">
        <div class="showcase-cover">
        </div>
        <div class="showcase-details">
            <span class="title">Anime Title</span>
            <span class="studio">Studio Name</span>
        </div>
    </div>
</template>

<script>
export default {
    
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
    }

    .showcase-cover img {
        height: 200px;
        position: absolute;
    }

    .showcase-cover:hover {
        box-shadow: 0px 0px 50px rgba(0,0,0,0.2);
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
    }

    .showcase-details .studio {
        font-size: 13px;
        font-weight: 300;
    }
</style>