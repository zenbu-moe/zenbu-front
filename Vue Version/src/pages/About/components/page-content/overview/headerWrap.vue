<template>
    <div class="header">
        <div class="avatar-wrap">
            <div class="avatar">
            </div>
            <div class="name">
                <h1>Sigma</h1>
            </div>
        </div>
        <div class="nav">
            <div class="links">
                <a>Home</a>
                <a>Anime List</a>
                <a>Manga List</a>
                <a>Ranobe List</a>
                <a>Social</a>
                <a>Statistics</a>
            </div>
             <div class="actions">
                <button class="btn"><i class="fas fa-user-plus"></i><p>Follow</p></button>
                <button class="btn"><i class="fas fa-envelope"></i></button>
                <button class="btn"><i class="far fa-ellipsis-h"></i></button>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'headerWrap'
}
</script>

<style scoped>
    .header {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .avatar-wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 40px;
    }

    .avatar-wrap h1 {
        font-family: "Raleway";
        font-weight: bold;
        margin-top: 0px;
        margin-bottom: 0px;
        font-size: 1.5rem;
        color: white;
        transition: 1s;
    }

    .avatar {
        width: 160px;
        height: 160px;
        border-radius: 50%;
        background-color: rgb(var(--color-foreground));
        border: 5px solid rgb(var(--color-background-dark));
        margin-bottom: 20px;
        transition: 1s;
    }

    .nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: rgb(var(--color-foreground));
        border-radius: 20px;
        height: 60px;
        width: 100%;
        transition: 1s;
        padding: 0px 10px;
    }


    .nav .links a {
        font-family: "Raleway";
        font-size: 1.2rem;
        color: rgb(var(--color-text));
        transition: 1s;
        margin: 0 40px;
        cursor: pointer;
        padding: 16px 0px;
        border-bottom: 3px solid rgba(106, 93, 136, 0);
        transition: 0.3s;
    }

    .links a:hover {
        border-bottom: 3px solid rgb(106, 93, 136);
        transition: 0.1s;
    }

    .actions {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .btn {
        background-color: rgba(var(--color-background-dark));
        border-radius: 10px;
        min-width: 60px;
        height: 40px;
        border: none;
        margin-left: 10px;
        transition: 0.5s;
        cursor: pointer;
    }

    .btn:hover {
        background-color: rgba(var(--color-background));
        transition: 0.1s;
    }

    button {
        font-family: "Raleway";
        font-size: 1.1rem;
        color: rgb(var(--color-text));
        transition: 1s;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    button i {
        margin: 0px 10px;
    }

    button p {
        margin-right: 10px;
    }

</style>