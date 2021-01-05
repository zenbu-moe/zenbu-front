<template>
    <div class="footer">
        <div class="wrap">
            <div class="logo">
                <img src="../assets/logo_light.png" v-if="isDark">
                <img src="../assets/logo_dark.png" v-if="!isDark">
            </div>
            <div class="actions">
                <a class="button" href="https://discord.gg/mVpKe4y">
                    <i class="fab fa-discord"></i><p>Discord</p>
                </a>
                <!-- <a class="button">
                    <i class="fab fa-twitter"></i><p>Twitter</p>
                </a> -->
                <a class="button" href="https://github.com/zenbu-moe">
                    <i class="fab fa-github"></i><p>Github</p>
                </a>
            </div>
        </div>
        <hr style="opacity: 0.3">
        <div class="copyright">
            <p>	&copy; Zenbu 2021. All rights reserved.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'footer',
    props: ["isDark"]
}
</script>

<style scoped>
    .footer {
        max-height: 200px;
        background-color: rgb(var(--color-background-dark));
        padding-top: 20px;
        font-family: "Raleway";
        margin-top: 50px;
        transition: 1s;
    }
    
    .actions {
        display: flex;
        align-items: center;
    }

    .button {
        display: flex;
        align-items: center;
        margin-left: 15px;
        transition: 0.5s;
        cursor: pointer;
        border-radius: 10px;
        padding: 10px;
    }

    .button:hover {
        background-color: rgb(var(--color-background));
        border-radius: 10px;
        transition: 0.2s;
    }

    .button i {
        font-size: 1.5rem;
        margin-right: 7px;
        color: rgb(var(--color-text))
    }

    p {
        color: rgb(var(--color-text));
        margin: 0;
    }

    .footer hr {
        width: 1280px;
    }
    
    .wrap {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 1280px;
        margin: auto;
    }

    .copyright {
        width: 1280px;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 10px 20px 10px;
    }

    .logo {
        border-radius: 50%;
        padding: 5px;
        display: flex;
        align-items: center;
    }

    .logo img {
        width: 50px;
        color: rgb(var(--color-text));
    }

    @media screen and (max-width: 1280px) {
        .wrap, .copyright, .footer hr {
            width: auto
        }
    }
</style>