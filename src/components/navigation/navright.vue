<template>
    <div class="navright">
        <!-- <button-user v-if="!isDark" @click="$emit('change-theme')" class="dark"><i class="bi-brightness-high-fill"></i></button-user>
        <button-user v-if="isDark" @click="$emit('change-theme')" class="dark"><i class="bi-moon"></i></button-user> -->
        <button-user @click="profileDropdownVisible = true" @mouseleave="profileDropdownVisible = false">
            <div class="dropdown" v-if="profileDropdownVisible" >
                <div class="button-wrap">
                    <a class="avatar"></a>
                    <div class="details">
                        <h2>Sigma</h2>
                        <p>Go to your profile</p>
                    </div>
                </div>
                <hr>
                <div class="button-wrap settings">
                    <i class="fas fa-play-circle"></i>
                    <p>Anime List</p>
                </div>
                <div class="button-wrap settings">
                    <i class="fas fa-book-open"></i>
                    <p>Manga List</p>
                </div>
                <div class="button-wrap settings">
                    <i class="fas fa-book"></i>
                    <p>Ranobe List</p>
                </div>
                <hr>
                <div class="settings-wrap">
                    <div class="button-wrap settings">
                        <i class="fas fa-user-circle"></i>
                        <p>Preferences</p>
                    </div>
                    <div class="button-wrap settings">
                        <i class="fas fa-cog"></i>
                        <p>Account settings</p>
                    </div>
                    <div class="button-wrap settings dark-mode-wrap" @click="$emit('change-theme')" >
                        <div class="dark-mode">
                            <i class="fas fa-moon"></i>
                            <p>Dark mode</p>
                        </div>
                        <div class="switch">
                            <i v-if="!isDark" class="far fa-toggle-off"></i>
                            <i v-if="isDark" class="far fa-toggle-on"></i>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="button-wrap settings">
                    <i class="fas fa-sign-out"></i>
                    <p>Log out</p>
                </div>
            </div>
            <div class="overlay" v-if="profileDropdownVisible">
            </div>
        </button-user>
        <button-user>
            <i class="fal fa-bell"></i>
        </button-user>
        <button-user><i class="fal fa-inbox"></i></button-user>
    </div>
</template>

<script>
export default {
    name: 'navright',
    components: {

    },
    props: ["isDark"],
    data() {
        return {
            profileDropdownVisible: false,
            messageDropdownVisible: false,
            notifDropdownVisible: false
        }
    },
    methods: {
        setProfileVisible() {
            this.profileDropdownVisible = !this.profileDropdownVisible
        }
    }
}
</script>

<style scoped>
    .overlay {
        position: absolute;
        width: 80px;
        top: 30px;
        height: 10vh;
        z-index: 2;
        margin-left: -20px;
    }

    .navright {
        width: 30%;
        display: inline-flex;
        min-width: 160px;
        justify-content: flex-start;
        flex-direction: row-reverse;
        position: relative;
        z-index: 1000;
    }

    button-user {
        justify-content: center;
        text-align: center;
        font-size: 1.3rem;
        color: white;
        background: rgba(255,255,255,0.1);
        margin-right: 15px;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        padding-top: 7px;
        cursor: pointer;
        transition: background 0.3s ease 0s;
    }

    button-user:hover {
        background: rgba(255,255,255,0.2);
        transition: background 0.1s ease 0s;
    }

    .dark {
        animation: rotateIn 1s;
    }

    .dropdown hr {
        width: 90%;
        color: rgb(var(--color-gray-dark));
        margin: 10px 0px;
    }

    .dropdown {
        padding: 10px;
        background-color: rgb(var(--color-foreground));
        position: absolute;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: -170px;
        top: 53px;
        width: 300px;
        box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.3);
        animation: fadeInUp 0.5s;
        transition: 0.7;
        z-index: 9999;
    }

    .dropdown .avatar {
        background-color: rgb(var(--color-gray-dark));
        border-radius: 50%;
        width: 60px;
        height: 60px;
    }

    .dropdown h2, .dropdown p{
        color: rgb(var(--color-text));
        font-family: "Raleway";
        margin-top: 0px;
    }

    .dropdown p {
        margin-bottom: 0;
        font-size: 1rem;
    }

    .dropdown h2 {
        margin-bottom: 5px;
        font-size: 1.2rem;
    }

    .button-wrap {
        display: flex;
        width: 100%;
        padding: 10px;
        border-radius: 20px;
        align-items: center;
    }

    .button-wrap:hover {
        background-color: rgb(var(--color-gray))
    }

    .button-wrap  .details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin-left: 10px;
    }

    .settings i {
        color: rgb(var(--color-text));
        margin-right: 10px;
        margin-left: 5px;
    }

    .settings-wrap {
        width: 100%;
    }

    .dark-mode-wrap {
        display: flex;
        justify-content: space-between;
    }

    .dark-mode {
        display: flex;
    }

    .switch i {
        font-size: 1.5rem;
    }

</style>