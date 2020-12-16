<template>
    <div class="navright">
        <button-user v-if="!isDark" @click="$emit('change-theme')"><i class="far fa-moon"></i></button-user>
        <button-user v-if="isDark" @click="$emit('change-theme')"><i class="fas fa-moon"></i></button-user>
        <button-user>S</button-user>
        <button-user><i class="fas fa-bell"></i></button-user>
        <button-user><i class="fas fa-envelope"></i></button-user>
    </div>
</template>

<script>
export default {
    name: 'navright',
    components: {

    },
    props: ["isDark"]
}
</script>

<style scoped>
    .navright {
        width: 30%;
        display: inline-flex;
        min-width: 160px;
        justify-content: flex-start;
        flex-direction: row-reverse;
    }

    button-user {
        justify-content: center;
        text-align: center;
        font-size: 18px;
        color: white;
        background: rgba(255,255,255,0.1);
        margin-right: 15px;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        padding-top: 9px;
        cursor: pointer;
        transition: background 0.3s ease 0s;
    }

    button-user:hover {
        background: rgba(255,255,255,0.2);
        transition: background 0.1s ease 0s;
    }
</style>