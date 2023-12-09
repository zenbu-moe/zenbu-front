<template>
    <div class="nav-item" 
    :class="{'active': active === link.to}"
    @click="handleClick()">
        {{ link.label }}
    </div>
</template>

<script lang="ts" setup>
type CategoryModel = {
    label: string,
    to: string
}

const props = defineProps<{
    link: CategoryModel,
    active: string
}>();

const emits = defineEmits<{
    activeChange: [id: string]
}>();

const handleClick = () => {
    emits('activeChange', props.link.to)
}
</script>

<style lang="scss" scoped>
.nav-item {
    color: var(--text-secondary);
    padding: 1px 16px;
    margin: 6px 0px;
    font-size: 0.9em;
    border-left: solid 1px var(--text-gray);
    margin-left: -1px;
    user-select: none;
}

.nav-item:hover {
    border-left: solid 1px var(--text-secondary);
    color: var(--link-inactive);
    cursor: pointer;
}

.active {
    border-left: solid 1px var(--accent);
    color: var(--accent);
}

.active:hover {
    border-left: solid 1px var(--accent);
    color: var(--accent);
}
</style>
