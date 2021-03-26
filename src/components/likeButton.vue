<template>
    <div class="like-button" id="like">
        <!-- this is big brain - button just changes to a different button when you click it :PogU: -->

        <button-like class="button" v-if="!isActive" @click="setLiked()"><svg-icon icon="regular/heart"></svg-icon></button-like>
        <button-like-active class="button" v-if="isActive" style="color: rgba(231,92,139,1.00)" @click="setLiked()"><svg-icon icon="solid/heart"></svg-icon></button-like-active>
        <span class="count" :class="{'is-clicked': currentState, 'is-not-clicked': !currentState }" v-if="count > 0">{{ this.count }}</span>
    </div>	
</template>

<script>
export default {
    name: 'likeButton',
    data() {
        return {
            currentState: false,
            count: 0
        }
    },

    computed: {
        isActive() {
            return this.currentState;
        },
    },
    methods: {
        setLiked() {
            if (this.currentState) {
                this.count = this.count - 1
            } else {
                ++this.count
            }
            this.currentState = !this.currentState;
        }
    }
}

</script>

<style>
    button-like {
        display: inline-block;
        color: rgb(var(--color-button));
        width: 35px;
        height: 35px;
        text-align: center;
        border-radius: 50%;
        padding: 7px;
        transition: 0.3s ease-out;
        cursor: pointer;
        animation: fadeIn 0.3s;
    }

    .like-button:hover button-like {
        background-color: rgba(219, 116, 145, 0.1);
        color: rgba(231,92,139,1.00);
        transition: 0.1s;
    }

    button-like-active {
        display: inline-block;
        color: rgb(var(--color-button));
        width: 35px;
        height: 35px;
        text-align: center;
        border-radius: 50%;
        padding: 9px;
        transition: 0.3s ease-out;
        cursor: pointer;
        animation: bounceIn 0.7s;
    }

    .like-button:hover button-like-active {
        background-color: rgba(219, 116, 145, 0.1);
        color: rgba(231,92,139,1.00);
        transition: 0.1s;
    }
    
    .like-button .count {
        font-family: "Raleway";
        font-weight: 100;
        cursor: pointer;
    }

    .like-button:hover .count {
        color: rgba(231,92,139,1.00);
    }

    .like-button .is-not-clicked {
        color: rgb(var(--color-button));
    }

    .like-button .is-clicked {
        color: rgba(231,92,139,1.00);
    }

    .like-button {
        display: flex;
        align-items: center;
    }

</style>