<template>
    <div class="user">
        <div class="user-avatar">

        </div>
        <div class="user-header">
            <p class="display-name">Sigma</p>
            <p class="user-handle">@sigmacw_</p>
        </div>
    </div>
</template>

<script lang="ts">

</script>

<style lang="scss" scoped>
    .user {
        display: grid;
        grid-template-columns: 36px auto;
        column-gap: 12px;
        margin: 0 12px;
        align-items: center;
    }

    .user-avatar {
        background-color: var(--placeholder-fill);
        width: 36px;
        height: 36px;
        border-radius: 18px;
    }

    p {
        margin: 0;
    }

    .display-name {
        font-weight: 500;
    }

    .user-handle {
        color: var(--link-inactive);
        font-size: 0.85em;
    }
</style>
