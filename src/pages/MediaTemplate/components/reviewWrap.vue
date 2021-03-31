<template>
    <!-- <div class="review-wrap">
        <div class="left">
            <div class="wrap">
                <h1>Reviews</h1>
                <div v-for="review in 2" :key="review.id">
                    <reviewItem />
                </div>
                <div class="expand">
                    <p>More reviews</p>
                </div>
            </div>
            <div class="wrap">
                <h1>Threads</h1>
                <div v-for="review in 3" :key="review.id">
                    <threadItem />
                </div>
                <div class="expand">
                    <p>More</p>
                </div>
            </div>
        </div>
        <div class="wrap">
            <h1>Recent user activity</h1>
            <feed />
        </div>
    </div> -->
    <div class="review-wrap">
        <div class="wrap" ref="review">
            <h1>Reviews</h1>
            <div v-for="review in 2" :key="review.id">
                <reviewItem />
            </div>
            <div class="expand">
                <p>More reviews</p>
            </div>
        </div>
        <div class="wrap">
            <h1>Threads</h1>
            <div v-for="review in 1" :key="review.id">
                <threadItem />
            </div>
        </div>
    </div>
</template>

<script>
import reviewItem from './reviewItem'
import threadItem from './threadItem'
/* import feed from './userActivity/feed' */

export default {
    name: "reviewWrap",
    components: {
        reviewItem,
        threadItem,
        /* feed */
    }
}
</script>

<style scoped>
    .review-wrap {
        width: 1380px;
        margin: 30px auto 0px auto;
        border-radius: 20px;
        /* background-color: rgb(var(--color-background-dark)); */
        height: auto;
        transition: 1s;
        display: grid;
        grid-template-columns: 670px 670px;
        grid-column-gap: 40px;
    }

    .expand {
        background-color: rgb(var(--color-background-dark));
        padding: 3px 10px;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin: 0 auto 0 auto;
        font-size: 0.9rem;
    }

    p, h1 {
        margin: 0;
        color: rgb(var(--color-text))
    }

    .left {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .wrap {
        width: 100%;
        display: grid;
        grid-template-columns: auto;
        grid-column-gap: 20px;
        grid-row-gap: 20px;
        align-self: start;
    }
</style>