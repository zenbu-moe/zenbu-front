<template>
    <div class="wrap">
        
    </div>
</template>

<script>
export default {
    name: 'communityWrap'
}
</script>

<style scoped>
    .wrap {
        display: grid;
        grid-gap: 10px;
        animation: fadeInUp 0.5s;
    }

    .row {
        grid-template-rows: auto 450px;
    }

    .column {
        grid-template-columns: auto 450px;
    }

    .activities {
        grid-template-rows: auto auto;
    }

    .content-box {
        padding: 10px;
    }
</style>