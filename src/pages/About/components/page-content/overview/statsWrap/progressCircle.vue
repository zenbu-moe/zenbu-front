<template>
    <svg
      :height="radius * 2"
      :width="radius * 2"
    >
        <filter id="f1">
            <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0" />
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="1" />
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>
        <circle
            :stroke="strokeColor"
            :stroke-dasharray="circumference + ' ' + circumference"
            :style="{ strokeDashoffset: strokeDashoffset }"
            :stroke-width="stroke"
            fill="transparent"
            stroke-linecap="butt"
            shape-rendering="geometricPrecision"
            :r="normalizedRadius"
            :cx="radius"
            :cy="radius"
            filter="url(#f1)"
        />
    </svg>
</template>

<script>
export default {
    name: "progressCircle",
    props: {
        radius: Number,
        progress: Number,
        stroke: Number,
        strokeColor: String
    },
    data() {
        const normalizedRadius = this.radius - this.stroke * 2;
        const circumference = normalizedRadius * 2 * Math.PI;
        
        return {
            normalizedRadius,
            circumference
        };
    },
    computed: {
        strokeDashoffset() {
            return this.circumference - this.progress / 100 * this.circumference;
        }
    },
}
</script>

<style scoped>

</style>