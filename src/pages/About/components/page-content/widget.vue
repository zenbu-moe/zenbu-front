<template>
    <div class="grid-stack-item" v-bind="gridStackAttributes">
        <btn v-if="edit" @click="$emit('remove-widget', $event, widget.id)" style="z-index: 15" >
            <i class="fas fa-trash-alt"></i>
        </btn>
        <div class="grid-stack-item-content" style="z-index: 10" >
            <aboutWrap :edit="edit" v-if="widget.id == 0" />
            <statsWrap :edit="edit" v-if="widget.id == 1"/>
            <favAnimeWrap :edit="edit" :widget="widgetProps" v-if="widget.id == 2"/>
            <favMangaWrap :edit="edit" v-if="widget.id == 3"/>
            <favRanobeWrap :edit="edit" v-if="widget.id == 4"/>
        </div>
    </div>
</template>

<script>
import statsWrap from './overview/statsWrap';
import favAnimeWrap from './overview/favAnimeWrap';
import favMangaWrap from './overview/favMangaWrap';
import favRanobeWrap from './overview/favRanobeWrap';
import aboutWrap from './overview/aboutWrap';

export default {
    name: 'widget',
    components: {
        statsWrap,
        favAnimeWrap,
        favMangaWrap,
        favRanobeWrap,
        aboutWrap,
    },
    props: ["widget", "edit"],
    computed: {
        gridStackAttributes() {
            return {
                id: this.widget.id,
                "gs-id": this.widget.id,
                "gs-x": 0,
                "gs-y": 0,
                "gs-w": 1,
                "gs-h": 5,
                "gs-min-h": 5,
            }
        }
    },
    data() {
        return {
            widgetProps: {
                id: this.widget.id,
                width: null,
                height: null
            }
        }
    },
    methods: {
        /* logme: function(event) { // a regular event object is passed by $event in template
            console.log(event.target.parentElement) // parent element
        }, */
    }
}
</script>

<style scoped>
    btn {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 96%;
        height: 30px;
        width: 30px;
        border-radius: 50%;
        z-index: 500;
        background-color: rgb(var(--color-background));
        color: rgb(228, 113, 113);
        cursor: pointer;
        transition: 0.5s;
        animation: zoomIn 0.3s;
    }

    btn i {
        pointer-events: none;
    }

    btn:hover {
        background-color: rgb(var(--color-background-dark));
        transition: 0.2s;
    }

</style>