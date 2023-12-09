<template>
    <div class="input__wrapper">
        <h1>{{ group }}</h1>
        <div class="input-section">
            <div class="fields">
                <AdminInput :ref="item.label"
                    v-for="item in inputs.sort((a, b) => b.priority - a.priority)"
                    :key="item.id" :item="item" @value-change="handleValueChange"
                    @options-change="handleOptionsChange" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" generic="T">
type InputParams = {
    id: number,
    label: string,
    type: string,
    placeholder: string,
    group: string,
    priority: number
}

const props = defineProps<{
    group: string,
    inputs: InputParams[]
}>();

const emits = defineEmits<{
    valueChange: [id: number, value: any];
    optionsChange: [id: number, value: any];
}>();

const handleValueChange = (id: number, value: any) => {
    // Emit the custom event 'valueChange' with the data
    emits('valueChange', id, value);
};

const handleOptionsChange = (id: number, value: any) => {
    // Emit the custom event 'valueChange' with the data
    emits('optionsChange', id, value);
};
</script>

<style lang="scss" scoped>
h1 {
    margin: 0;
    font-size: 1.2em;
    margin-bottom: 8px;
    font-weight: 600;
    font-family: 'Nunito Sans';
}

.input-section {
    /* background-color: var(--foreground); */
    border-radius: 12px;

    .fields {
        display: grid;
        grid-template-columns: 270px 270px auto;
        row-gap: 20px;
        column-gap: 20px;
    }

    .horizontal-divider {
        background-color: var(--foreground-gray);
        opacity: 0.1;
    }
}

.input__wrapper {
    animation: fade-in 0.2s ease;
}
</style>

<style>
@keyframes fade-in {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>
