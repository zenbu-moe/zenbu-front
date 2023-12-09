<template>
    <div :id="item.type === 'TextArea' ? 'textarea' : ''"
        class="media__input-field">
        <div class="title">
            <p class="label">{{ item.label }}</p>
        </div>
        <!-- <input :placeholder="item.placeholder"> -->
        <!-- <UInput size="md" variant="outline" :placeholder="item.placeholder"
            v-model="value" v-if="item.type === 'Text'" /> -->

        <el-input class="input-field" v-if="item.type === 'Text'" v-model="value"
            :placeholder="item.placeholder" size="large"/>

        <el-input class="input-field" type="textarea"
            :autosize="{ minRows: 3, maxRows: 10 }" :rows="2"
            v-if="item.type === 'TextArea'" v-model="value"
            :placeholder="item.placeholder" size="large"/>

        <el-input-number class="input-field"
            v-if="item.type === 'Number' && !(item.id === 13)" :value="item"
            v-model="number" :min="0" size="large"/>

        <el-input class="input-field" :controls="false" type="number"
            v-if="item.type === 'Number' && (item.id === 13)" v-model="number"
            placeholder="25" size="large">
            <template #append>min</template>
        </el-input>

        <el-select class="input-field" filterable
            v-if="item.type === 'Dropdown' && !item.multiple"
            :disabled="options.length > 0 ? false : true" v-model="selected"
            placeholder="Select" size="large">
            <el-option v-for="item in options" :key="item" :label="item"
                :value="item" />
        </el-select>

        <el-select class="input-field" :allow-create="item.creatable" filterable
            multiple collapse-tags collapse-tags-tooltip
            v-if="item.type === 'Dropdown' && item.multiple" v-model="selected"
            placeholder="Select" size="large">
            <el-option v-for="item in options" :key="item" :label="item"
                :value="item" />
        </el-select>

        <el-date-picker :style="{'--el-date-editor-width': '270px'}" v-if="item.type === 'Date'" v-model="value" type="date"
            placeholder="Pick a date" size="large"/>
    </div>
</template>

<script lang="ts" setup>
const value = ref('');
const selected = ref('');
const number = ref(0);

const mediaType = useState('mediaType');
const genresArr = useState('genresArr');

const MediaTypes = {
    'Anime': ['TV', 'OVA', 'ONA'],
    'Manga': ['Manga', 'One-shot', 'Doujin'],
    'Light Novel': ['Light Novel']
}

const StatusTypes = {
    'Anime': ['Announced', 'Ongoing', 'Finished', 'Hiatus'],
    'Manga': ['Announced', 'Releasaing', 'Finished', 'Hiatus'],
    'Light Novel': ['Announced', 'Publishing', 'Finished', 'Hiatus']
}

const props = defineProps<{
    item: { [key: string]: any }
}>()

const options = ref(props.item.options);

const emits = defineEmits<{
    valueChange: [id: number, value: any];
    optionsChange: [id: number, value: any]
}>();

onMounted(() => {
    value.value = props.item.value ? props.item.value : '';
    selected.value = props.item.value ? props.item.value : '';
    number.value = props.item.value ? props.item.value : 0;
})

watch(value, (newCount, oldCount) => {
    emits('valueChange', props.item.id, newCount);
});

watch(selected, (newCount, oldCount) => {
    emits('valueChange', props.item.id, newCount);
});

watch(number, (newCount, oldCount) => {
    emits('valueChange', props.item.id, newCount);
});


watch(mediaType, (newCount, oldCount) => {
    if (props.item.id === 2) {
        // @ts-ignore
        options.value = MediaTypes[newCount];
    }

    if (props.item.id === 5) {
        // @ts-ignore
        options.value = StatusTypes[newCount];
    }
});

watch(genresArr, (newCount, oldCount) => {
    if (props.item.id === 10) {
        // @ts-ignore
        const genres = newCount.map(el => el.name)
        options.value = genres;
        emits('optionsChange', props.item.id, options.value);
    }
});
</script>

<style lang="scss" scoped>
.media__input-field {
    min-width: 270px;
}

.input-field {
    min-width: 270px;
}

.el-input {

    .el-input__inner::-webkit-outer-spin-button,
    .el-input__inner::-webkit-inner-spin-button {
        -webkit-appearance: none !important;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield !important;
    }
}

input {
    background-color: var(--foreground);
    border: none;
    outline: none;
    border-radius: 8px;
    padding: 12px;
    color: var(--text-primary);
    font-family: 'Nunito';
}

p {
    margin: 0;
    margin-bottom: 4px;
    font-size: 0.9em;
    color: var(--text-secondary);
}

#textarea {
    grid-column-start: 1;
    grid-column-end: -1;
}
</style>
