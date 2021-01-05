<template>
    <div class="media-stats">
        <div class="score">
            <p>Average Score</p>
            <h1>{{ mediaScore }}</h1>
            <div class="visual-score">
                <div v-for="star in fullStar" :key="star">
                    <i class="fas fa-star"></i>
                </div>
                <div v-for="star in halfStar" :key="star">
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <div v-for="star in emptyStar" :key="star">
                    <i class="far fa-star"></i>
                </div>
            </div>
        </div>
        <div class="short-stats">
        </div>
    </div>
</template>

<script>
export default {
    name: 'mediaScore',
    data() {
        return {
            score: null,
            mediaScore: 4.6,
            fullStars: null,
            fullStar: null,
            halfStar: null,
            emptyStar: null,
        }
    },
    methods: {
        calculateStars() {
            this.score = Math.floor((this.mediaScore * 10)/5)*5;

            if ((this.score % 10) != 0) {
                this.halfStar = 1;
                this.fullStar = Math.floor(this.score / 10);
                this.emptyStar = 10 - (this.halfStar + this.fullStar);
            }
            else {
                this.fullStar = Math.floor(this.score / 10);
                this.emptyStar = 10 - this.fullStar;
            }
        }
    },
    beforeMount() {
        this.calculateStars()
    }
}
</script>

<style scoped>
    .media-stats {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 25%;
    }

    .score {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: rgb(var(--color-text))
    }

    .score p {
        font-family: "Raleway";
        margin: 20px 0 5px 0;
        font-weight: bold;
    }

    .score h1 {
        font-family: "Raleway";
        font-size: 3.5em;
        margin: 0;
    }

    .visual-score {
        display: flex;
        margin-top: 20px;
        color: rgb(255, 178, 34)
    }

    .short-stats {
        background-color: rgb(var(--color-background));
        border-radius: 20px;
        padding: 20px;
    }

</style>