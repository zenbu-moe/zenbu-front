<template>
    <div class="grid-stack-item sub" v-bind="gridStackAttributes" ref="item">
        <btn v-if="edit" @click="$emit('remove-widget', $event, widget.id)" style="z-index: 15" >
            <i class="fas fa-trash-alt"></i>
        </btn>
        <div class="grid-stack-item-content" style="z-index: 10">
            <aboutWrap :wgtdata="wgtdata" :edit="edit" v-if="widget.id == 0"/>
            <statsWrap :wgtdata="wgtdata" :edit="edit" v-if="widget.id == 1" />
            <favAnimeWrap :wgtdata="wgtdata" :edit="edit" :widget="widgetProps" v-if="widget.id == 2" ref="anime" :grid="grid"/>
            <favMangaWrap :wgtdata="wgtdata" :edit="edit" v-if="widget.id == 3" ref="manga"/>
            <favRanobeWrap :wgtdata="wgtdata" :edit="edit" v-if="widget.id == 4" ref="ranobe"/>
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
    props: ["widget", "edit", "wgtdata", "grid"],
    computed: {
        gridStackAttributes() {
            return {
                id: this.widget.id,
                "gs-id": this.widget.id,
                "gs-x": 0,
                "gs-y": 0,
                "gs-w": 2,
                "gs-min-w": 2,
                "gs-h": this.widget.h,
                "gs-min-h": this.widget.minH,
                "gs-max-h": this.widget.maxH,
            }
        }
    },
    data() {
        return {
            widgetProps: {
                id: this.widget.id,
                width: null,
                height: null
            },
        }
    },
    methods: {

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

    .grid-stack .grid-stack-item > .grid-stack-item-content {
        inset: 15px;
    }
</style>