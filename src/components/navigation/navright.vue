<template>
    <div class="navright">
        <!-- <button-user v-if="!isDark" @click="$emit('change-theme')" class="dark"><i class="bi-brightness-high-fill"></i></button-user>
        <button-user v-if="isDark" @click="$emit('change-theme')" class="dark"><i class="bi-moon"></i></button-user> -->
        <button-profile>
            <router-link to="/browse"><p>Browse</p></router-link>
        </button-profile>
        <button-profile>
            <p>Forum</p>
        </button-profile>
        <button-profile class="user" @click="profileDropdownVisible = true" @mouseleave="profileDropdownVisible = false">
            <div class="avatar">
            </div>
            <p>Sigma</p>
            <div class="dropdown" v-if="profileDropdownVisible" >
                <router-link to="about" class="button-wrap">
                    <a class="avatar"></a>
                    <div class="details">
                        <h2>Sigma</h2>
                        <p>Go to your profile</p>
                    </div>
                </router-link>
                <hr>
                <div class="button-wrap settings">
                    <svg-icon icon="solid/play-circle"></svg-icon>
                    <p>Anime List</p>
                </div>
                <div class="button-wrap settings">
                    <svg-icon icon="solid/book-open"></svg-icon>
                    <p>Manga List</p>
                </div>
                <div class="button-wrap settings">
                    <svg-icon icon="solid/book"></svg-icon>
                    <p>Ranobe List</p>
                </div>
                <hr>
                <div class="settings-wrap">
                    <div class="button-wrap settings">
                        <svg-icon icon="solid/user-circle"></svg-icon>
                        <p>Preferences</p>
                    </div>
                    <div class="button-wrap settings">
                        <svg-icon icon="solid/cog"></svg-icon>
                        <p>Account settings</p>
                    </div>
                    <div class="button-wrap settings dark-mode-wrap" @click="$emit('change-theme')" >
                        <div class="dark-mode">
                            <svg-icon icon="solid/moon"></svg-icon>
                            <p>Dark mode</p>
                        </div>
                        <div class="switch">
                            <svg-icon v-if="!isDark" icon="regular/toggle-off"></svg-icon>
                            <svg-icon v-if="isDark" icon="regular/toggle-on"></svg-icon>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="button-wrap settings">
                    <svg-icon icon="solid/sign-out"></svg-icon>
                    <p>Log out</p>
                </div>
            </div>
            <div class="overlay" v-if="profileDropdownVisible">
            </div>
        </button-profile>
        <button-user>
            <svg-icon icon="solid/bell"></svg-icon>
        </button-user>
        <button-user>
            <svg-icon icon="solid/inbox"></svg-icon>
        </button-user>
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
    a {
        color: white;
    }

    .overlay {
        position: absolute;
        width: 80px;
        top: 30px;
        height: 10vh;
        z-index: 2;
        margin-left: -20px;
    }

    .navright {
        width: 40%;
        display: inline-flex;
        min-width: 160px;
        justify-content: flex-end;
        /* flex-direction: row-reverse; */
        position: relative;
        z-index: 1000;
    }

    .avatar {
        background-color: rgb(var(--color-gray-dark), 0.1);
        border-radius: 50%;
        width: 30px;
        height: 30px;
        margin-right: 10px;
    }

    button-user {
        justify-content: center;
        text-align: center;
        font-size: 1.3rem;
        color: white;
        background: rgba(255,255,255,0);
        margin-left: 15px;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        padding-top: 7px;
        cursor: pointer;
        transition: background 0.3s ease 0s;
    }

    button-profile {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 0.95rem;
        color: white;
        background: rgba(255,255,255,0);
        margin-left: 15px;
        border-radius: 50px;
        width: auto;
        padding: 0px 10px 0px 6px;
        cursor: pointer;
        transition: background 0.3s ease 0s;
        font-family: 'Raleway';
        height: auto;
    }

    button-profile p {
        margin: 0;
    }

    button-user:hover, .user:hover {
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
        animation: fadeIn 0.5s;
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

    .settings svg {
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
        max-height: 39px;
        align-items: center;
    }

    .dark-mode {
        display: flex;
        align-items: center;
    }

    .switch svg {
        font-size: 1.5rem;
    }

</style>