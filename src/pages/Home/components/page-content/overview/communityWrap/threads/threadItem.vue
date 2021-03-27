<template>
    <a href="">
        <div class="thread-item">
            <div class="item-body">
                <div class="item-title">
                    <h3>Thread Name</h3>
                </div>
                <div class="item-content">
                    <a class="avatar"></a>
                    <p>Last reply 5 minutes ago by <a class="username">Username</a></p> <!-- 5 minutes ago should be changed to the time -->
                </div>
            </div>
            <div class="item-info">
                <div class="details">
                    <span class="count"><i class="far fa-comment"></i> 150</span>
                </div>
                <div class="tags">
                </div>
            </div>
        </div>
    </a>
</template>

<script>
export default {
    name: 'threadItem',
    props: ["threadData"]
}
</script>

<style scoped>
    h3 {
        margin: 0px 0px 10px 0px;
        color: rgb(var(--color-link));
        font-size: 1.05rem;
    }

    a {
        color: rgb(var(--color-link));
    }

    .thread-item {
        border-radius: 15px;
        padding: 15px;
        /* margin: 10px; */
        margin-bottom: 15px;
        animation: zoomIn 0.3s;
        transition: 1s;
        display: flex;
        justify-content: space-between;
        background-color: rgb(var(--color-foreground));
        box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
        cursor: pointer;
    }

    .avatar {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        display: inline-block;
        background-color: rgb(var(--color-foreground-dark));
        background-size: cover;
        background-position: center;
        margin-right: 5px;
        transition: 1s;
    }

    .item-content {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .item-content p {
        margin: 0px;
        font-size: 0.9rem;
        color: rgb(var(--color-text));
    }

    .item-body {
        display: flex;
        flex-direction: column;
    }

    .count {
        font-size: 0.9rem;
        color: rgb(var(--color-text));
    }

</style>