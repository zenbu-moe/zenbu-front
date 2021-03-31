<template>
    <div class="content" :class="{'expanded': isScrollOnTop, 'minimized': !isScrollOnTop}">
        <div>
            <div class="wrap">
                <div class="title">
                    <h2>Related media</h2>
                    <a class="button-more browse more" @click="expand()" v-if="!isExpanded"><p>MORE</p><i class="fas fa-angle-down"></i></a>
                    <a class="button-more browse less" @click="expand()" v-if="isExpanded"><p>LESS</p><i class="fas fa-angle-up"></i></a>
                </div>
                <div class="content-box relations">
                    <div v-for="item in x" :key="item.name">
                        <relationsItem />
                    </div>
                </div>
            </div>
            <div class="wrap">
                <div class="title">
                    <h2>Trailer</h2>
                </div>
                <div class="content-box">
                    <div class="trailer-box">
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="wrap">
                <div class="title">
                    <h2>Characters</h2>
                </div>
                <div class="content-box">
                </div>
            </div>
            <div class="wrap">
                <div class="title">
                    <h2>Staff</h2>
                </div>
                <div class="content-box">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import relationsItem from './relationsItem';

export default {
    name: 'contentWrap',
    components: {
        relationsItem
    },
    data() {
        return {
            isExpanded: false,
            x: 5,
            isScrollOnTop: null,
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        expand() {
            this.isExpanded = !this.isExpanded;
            if (this.x == 5) {
                this.x = 12
            } else {
                this.x = 5
            }
        },
        checkScroll() {
            if (window.scrollY < 100) {
                this.isScrollOnTop = true
            } else {
                this.isScrollOnTop = false
            }
        },
        handleScroll() {
            this.checkScroll()
        }
    },
    mounted() {
        this.checkScroll()
    }
}
</script>

<style scoped>
    h2 {
        font-size: 1.8rem;
        color: rgb(var(--color-text));
        margin: 0px;
    }

    .content {
        position: relative;
        width: 1380px;
        border-radius: 20px;
        background-color: rgb(var(--color-foreground));
        box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
        height: auto;
        transition: 0.3s;
        display: grid;
        grid-template-columns: 50% 50%;
        grid-column-gap: 20px;
        grid-row-gap: 20px;
        padding: 20px;
    }

    .expanded {
        margin: 90px auto 0px auto;
    }

    .minimized {
        margin: 30px auto 0px auto;
    }

    .wrap {
        /* background-color: rgb(var(--color-foreground)); */
        border-radius: 20px;
        padding: 30px;
    }

    .trailer-box {
        background-color: rgb(var(--color-background));
        width: 100%;
        height: 300px;
        border-radius: 10px;
        margin-top: 10px;
    }

    .relations {
        display: grid;
        grid-template-columns: auto auto auto auto auto;
        justify-content: space-between;;
    }

    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }

</style>