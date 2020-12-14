<template>
    <div class="like-button" id="like">
        <button-like class="button" v-if="!isActive" @click="setLiked()"><i class="far fa-heart"></i></button-like>
        <button-like class="button" v-if="isActive" style="color: rgba(231,92,139,1.00)" @click="setLiked()"><i class="fas fa-heart"></i></button-like>
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
        color: gray;
        width: 40px;
        height: 40px;
        text-align: center;
        border-radius: 50%;
        padding: 11px;
        transition: 0.3s ease-out;
        cursor: pointer;
        animation: fadeInUp 0.1s;
    }

    .like-button:hover button-like {
        background-color: rgba(236,15,77,0.10);
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
        color: gray;
    }

    .like-button .is-clicked {
        color: rgba(231,92,139,1.00);
    }

    .like-button {
        display: flex;
        align-items: center;
    }

</style>