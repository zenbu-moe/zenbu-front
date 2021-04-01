<template>
    <div class="header">
        <div class="nav">
            <div class="links">
                <a>Home</a>
                <a>Social</a>
                <a>Library <i class="fas fa-angle-down"></i></a>
                <a>More <i class="fas fa-angle-down"></i></a>
            </div>
            <div class="avatar-wrap">
                <div class="avatar">
                    <div class="edit-button" v-if="edit">
                        <i class="fal fa-pen"></i>
                    </div>
                </div>
                <div class="name">
                    <h1>Sigma</h1><!-- <i class="fad fa-heart-circle"></i> -->
                </div>
            </div>
            <div class="actions">
                <button class="btn-sup"><i class="fad fa-heart-circle"></i><p>SIMP</p></button>
                <!-- <button class="btn"><i class="fas fa-user-plus"></i><p>Follow</p></button>
                <button class="btn"><i class="fas fa-envelope"></i></button> -->
                <!-- <button class="btn"><i class="fas fa-user-clock"></i><p>Follow back</p></button>
                <button class="btn"><i class="fas fa-envelope"></i></button> -->
                <!-- <button class="btn"><i class="fas fa-envelope"></i><p>Message</p></button>
                <button class="btn"><i class="fas fa-user-friends"></i></button> -->
                <button @click="$emit('toggle-edit')" class="btn" v-if="!edit"><i class="fas fa-user-edit"></i><p>Edit profile</p></button>
                <button @click="$emit('toggle-edit')" class="btn" v-if="edit"><i class="fas fa-user-edit"></i><p>Stop editing</p></button>
                <button class="btn"><i class="far fa-ellipsis-h"></i></button>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'headerWrap',
    props: ['edit']
}
</script>

<style scoped>
    .header {
        background-color: rgb(var(--color-foreground));
        height: 60px;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        transition: 1s;
    }

    .avatar-wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 5px;
    }

    .avatar-wrap h1 {
        font-weight: bold;
        margin-top: 0px;
        margin-bottom: 1px;
        margin-right: 5px;
        font-size: 1.5rem;
        color: rgb(var(--color-text));
        transition: 1s;
    }

    .avatar {
        width: 160px;
        height: 160px;
        border-radius: 50%;
        background-color: rgb(var(--color-background));
        border: 5px solid rgb(var(--color-foreground));
        margin-bottom: 25px;
        transition: 1s;
    }

    .avatar i {
        color: rgb(66, 66, 66);
        font-size: 1.5rem;
    }

    .name {
        display: flex;
        align-items: center;
    }

    .name i {
        color: rgb(219, 65, 111);
        font-size: 1.5rem;
    }

    .nav {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        width: 1290px;
        margin: 0 auto 10px auto;
        transition: 1s;
        padding: 0px 10px;
    }

    .links {
        margin-bottom: 8px;
        width: 35%;
    }

    .nav .links a {
        font-size: 1.1rem;
        color: rgba(var(--color-text), 0.75);
        transition: 1s;
        margin: 0px 30px 0px 0px;
        cursor: pointer;
        padding: 16px 10px;
        border-bottom: 2px solid rgba(106, 93, 136, 0);
        transition: 0.3s;
        font-weight: 500;
    }

    .links a:hover {
        border-bottom: 2px solid rgba(var(--color-text), 0.75);
        transition: 0.1s;
    }

    .links i {
        font-size: 1rem;
    }

    .actions {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 35%
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

    .btn-sup {
        background-color: rgba(255, 125, 184, 0.3);
        border-radius: 10px;
        min-width: 60px;
        height: 40px;
        border: none;
        margin-left: 10px;
        transition: 0.5s;
        cursor: pointer;
    }

    .btn-sup i {
        font-size: 1.5rem;
        color: rgb(219, 65, 111);
    }

    .btn:hover {
        background-color: rgba(var(--color-background));
        transition: 0.1s;
    }

    button {
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

    .edit-button {
        background-color: rgba(var(--color-foreground), 0.5);
        transition: 0.5s;
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0px 0px 20px 110px;
        animation: zoomIn 0.3s;
    }

    .edit-button:hover {
        background-color: rgba(var(--color-foreground), 1);
        transition: 0.2s;
    }
</style>