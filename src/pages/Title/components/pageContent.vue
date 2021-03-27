<template>
    <div class="page-content">
        <div class="title-wrap" data-aos="fade-down">
            <div class="launch">
                <p>COMING SOON</p>
            </div>
            <div class="text-box">
                <h1>Discover and track your anime.</h1>
                <h1>In an old way. On a new platform.</h1>
            </div>
            <hr>
            <div class="dictionary">
                <p><strong>Zenbu</strong> (全部) - <i>jap. noun</i> <strong>everything</strong></p>
            </div>
            <hr>
            <div class="text-box wrap">
                <p>Discover new anime and keep track of old shows. Find your community or make one. 
                Be in the spotlight or track privately. You can do <i>everything</i>. On <i>Zenbu.</i></p>
            </div>
            <a class="wip bottom" href="https://github.com/zenbu-moe">
                <i class="fab fa-github"></i><p>Visit our GitHub</p>
            </a>
            <img class="site-pictures" src="../assets/zenbu-dark.png">
        </div>
        <div class="showcase" id="showcase">
            <div class="showcase-item" data-aos="fade-left">
                <div class="info">
                    <h2>Modern design. Simple and responsive layout.</h2>
                    <p>
                        Zenbu is a modern platform, so, naturally, it comes with a modern look
                        and feel. It is easy to navigate, and just makes sense. Zenbu also offers
                        a mobile site that makes you want to keep using it.
                    </p>
                </div>
                <div>
                    <video loop muted autoplay class="image">
                        <source src="../assets/layout-dark.mp4">
                    </video>
                </div>
            </div>
            <hr>
            <div class="showcase-item" data-aos="fade-right">
                <div>
                    <video loop muted autoplay class="image">
                        <source src="../assets/profile-dark.mp4">
                    </video>
                </div>
                 <div class="info">
                    <h2>Make your page your own.</h2>
                    <p>
                        User pages feature a fully customizable grid layout with an option of disabling absolutely
                        everything (including even the social feed), allowing users to tweak their experience
                        to their own tastes. 
                    </p>
                </div>
            </div>
            <hr>
            <!-- <div class="showcase-item">
                <div class="info">
                    <h2>Join a community. Or create your own.</h2>
                    <p>
                        Forums are great, but we believe that groups (or clubs, or communities) are better. Engage
                        with an established group, or create your own. Big or small - no difference, as long as you are comfortable.
                        Meet new friends, and expand your horizons.
                    </p>
                </div>
                <div class="image">
                    <img class="image" src="../assets/community.png">
                </div>
            </div> -->
            <a class="wip top" style="width: 380px;" href="https://github.com/zenbu-moe">
                <i class="fab fa-github"></i><p>More features in development</p>
            </a>
        </div>
    </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
    name: 'pageContent',
    created() {
        AOS.init();
    }
}
</script>

<style scoped>
    .page-content {
        padding-top: 50px;
    }

    .site-pictures {
        background-image: url("../assets/zenbu-light.png");
        background-size: cover;
        border-radius: 15px;
        background-position-x: 50%;
        width: 70%;
        margin: auto;
        border: 2px solid rgb(var(--color-gray))
    }

    .title-wrap hr {
        width: 400px;
    }

    hr {
        width: 1280px;
        opacity: 0.5
    }

    p, h1, h2, h3, h4 {
        color: rgb(var(--color-text))
    }

    .showcase-item {
        height: 300px;
        width: 1280px;
        display: flex;
        margin: 100px auto;
        justify-content: space-between;
        align-items: center;
    }

    .info {
        width: 600px;
        line-height: 150%;
    }

    .image {
        width: 600px;
        /* height: 320px; */
        /* background-color: rgb(var(--color-gray-dark)); */
        border-radius: 10px;
        background-size: cover;
        background-position-x: 50%;
        border: 1px solid rgb(var(--color-gray))
    }

    /* .img1 {
        background-image: url("../assets/layout.gif");
    } */

    .title-wrap {
        padding: 100px 0px;
        display: flex;
        background-color: rgb(var(--color-background-dark));
        flex-direction: column;
        align-items: center;
        transition: 1s;
    }

    .text-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 30px;
    }

    .wrap {
        max-width: 500px;
    }

    .text-box h1 {
        font-size: 3rem;
        margin: 20px 0px 0px 0px;
        text-align: center;
    }

    .text-box p {
        font-size: 1.2rem;
        margin-top: 35px;
        line-height: 200%;
        text-align: center;
    }

    .wip {
        display: flex;
        align-items: center;
        font-size: 1.2rem;
        padding: 0px 20px;
        border-radius: 40px;
        background-color: rgb(var(--color-foreground));
        cursor: pointer;
        transition: 0.5s;
    }

    .wip:hover {
        background-color: rgba(205, 174, 240, 0.377);
        transition: 0.2s;
    }

    .wip i {
        margin-right: 20px;
        font-size: 1.6rem;
    }

    .top {
        margin: 50px auto 20px auto;
    }

    .bottom {
        margin: 20px auto 50px auto;
    }

    @media screen and (max-width: 1280px) {
        .showcase-item {
            display: flex;
            width: auto;
            flex-direction: column;
            height: 450px;
            justify-content: flex-start;
            align-items: center;
        }

        .image {
            width: 80%;
            margin: auto auto;
            display: flex;
            align-items: center;
        }
    }
</style>