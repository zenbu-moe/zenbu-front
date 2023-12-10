<template>
    <div class="media-add">
        <div class="sidebar">
            <UButton block icon="i-heroicons-pencil-square" size="lg"
                color="primary" variant="solid" label="Submit" :trailing="false" />
            <p class="notice">
                Some important notice message here.
                About content moderation or something.
            </p>
            <HDivider />
            <p class="navigate-text">Navigate</p>
            <div class="vertical-navigation">
                <VerticalNavItem @activeChange="handleNavEvent"
                    v-for="link in categories" :link="link" :key="link.to"
                    :active="activeView" />
            </div>
        </div>
        <VDivider />
        <div class="media-add__content">
            <div class="content__header">
                <div class="header__submission-notes">
                    <h1>Submission notes</h1>
                    <UTextarea resize color="primary"
                        placeholder="Add in any relevant information and/or sources..." />
                </div>
            </div>

            <transition name="fade" mode="out-in">
                <div :key="activeView">
                    <div v-for="category in computeCategories(inputs)"
                        class="content__body" :key="category">
                        <AdminInputCategories ref="category" v-if="category.toLowerCase() === activeView &&
                            (category == 'General' || category == 'Technical')"
                            v-for="group in computeGroups(inputs, category)"
                            :inputs="inputs.filter((el) => el.group == group)"
                            :group="group" :key="group"
                            @value-change="handleValueChange"
                            @options-change="handleOptionsChange" />

                        <AttachmentsUpload :inputs="inputs"
                            @value-change="handleValueChange"
                            v-if="category.toLowerCase() === activeView && category == 'Attachments'" />

                        <CharacterUpload :inputs="inputs"
                            @value-change="handleValueChange"
                            @char-delete="handleCharacterDelete"
                            @va-change="handleVaChange"
                            @char-role-change="handleCharRoleChange"
                            v-if="category.toLowerCase() === activeView && category == 'Characters'" />

                        <StaffUpload :inputs="inputs"
                            @value-change="handleValueChange"
                            @char-delete="handleCharacterDelete"
                            v-if="category.toLowerCase() === activeView && category == 'Staff'" />
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const activeView = ref('general');
const mediaType = useState('mediaType', '');
const genresArr = useState('genresArr', () => []);

const api = useState('API');

type InputParams = {
    id: number,
    label: string,
    type: string,
    placeholder: string,
    group: string,
    category: string,
    priority: number,
    value?: any,
    options?: any[],
    multiple?: boolean,
    creatable?: boolean
}

type CategoryModel = {
    label: string,
    to: string
}

const handleNavEvent = (data: string) => {
    activeView.value = data;
};

const categories: CategoryModel[] = [
    {
        label: 'General',
        to: 'general'
    },
    {
        label: 'Attachments',
        to: 'attachments'
    },
    {
        label: 'Characters',
        to: 'characters'
    },
    {
        label: 'Staff',
        to: 'staff'
    },
    {
        label: 'Relations',
        to: 'relations'
    },
    {
        label: 'External',
        to: 'extenal'
    },
    {
        label: 'Technical',
        to: 'technical'
    }
]

// i wonder if this object can be pushed somewhere else
// its annoying as shitters here

const inputs: InputParams[] = [
    {
        id: 0,
        label: "Media ID",
        type: "Number",
        placeholder: "0",
        group: "Database Stuff",
        category: "Technical",
        priority: -1
    },
    {
        id: 1,
        label: "Official Title",
        type: "Text",
        placeholder: "e.g. 進撃の巨人",
        group: "Titles",
        category: "General",
        priority: 1000
    },
    {
        id: 8,
        label: "Romaji",
        type: "Text",
        placeholder: "e.g. Shingeki no Kyojin",
        value: "",
        group: "Titles",
        category: "General",
        priority: 1000
    },
    {
        id: 9,
        label: "English",
        type: "Text",
        placeholder: "e.g. Attack on Titan",
        group: "Titles",
        category: "General",
        priority: 1000
    },
    {
        id: 2,
        label: "Format",
        type: "Dropdown",
        placeholder: "e.g. TV, OVA",
        options: [],
        group: "Basic Information",
        category: "General",
        priority: 800
    },
    {
        id: 3,
        label: "Medium",
        type: "Dropdown",
        placeholder: "e.g. anime, manga, etc",
        options: ['Anime', 'Manga', 'Light Novel'],
        group: "Basic Information",
        category: "General",
        priority: 900
    },
    {
        id: 5,
        label: "Status",
        type: "Dropdown",
        placeholder: "e.g. Ongoing, Finished",
        group: "Basic Information",
        options: [],
        category: "General",
        priority: 600
    },
    {
        id: 10,
        label: "Genres",
        type: "Dropdown",
        multiple: true,
        creatable: true,
        placeholder: "e.g. Ongoing, Finished",
        group: "Basic Information",
        options: [],
        category: "General",
        priority: 500
    },
    {
        id: 6,
        label: "Short name",
        type: "Text",
        placeholder: "e.g. AOT",
        group: "Titles",
        category: "General",
        priority: 500
    },
    {
        id: 7,
        label: "Description",
        type: "TextArea",
        placeholder: "e.g. Ongoing, Finished",
        group: "Description",
        category: "General",
        priority: 0
    },
    {
        id: 11,
        label: "Number of episodes",
        type: "Number",
        placeholder: "e.g. Ongoing, Finished",
        group: "Basic Information",
        category: "General",
        priority: 400
    },
    {
        id: 13,
        label: "Episode duration",
        type: "Number",
        placeholder: "e.g. Ongoing, Finished",
        value: 25,
        group: "Basic Information",
        category: "General",
        priority: 395
    },
    {
        id: 14,
        label: "Rating",
        type: "Dropdown",
        placeholder: "e.g. Ongoing, Finished",
        options: ['PG-13', 'R'],
        group: "Basic Information",
        category: "General",
        priority: 390
    },
    {
        id: 15,
        label: "Tags",
        type: "Dropdown",
        multiple: true,
        placeholder: "e.g. Ongoing, Finished",
        options: [],
        group: "Basic Information",
        category: "General",
        priority: 390
    },
    {
        id: 16,
        label: "Banner",
        type: "ImageUpload",
        multiple: false,
        placeholder: "e.g. Ongoing, Finished",
        options: [],
        group: "Banner",
        category: "Attachments",
        priority: 390
    },
    {
        id: 17,
        label: "Cover",
        type: "ImageUpload",
        multiple: false,
        placeholder: "e.g. Ongoing, Finished",
        options: [],
        group: "Cover",
        category: "Attachments",
        priority: 380
    },
    {
        id: 18,
        label: "Screenshots",
        type: "ImageUpload",
        multiple: false,
        placeholder: "e.g. Ongoing, Finished",
        options: [],
        group: "Screenshots",
        category: "Attachments",
        priority: 370
    },
    {
        id: 60,
        label: "Primary Animation Studio(s)",
        type: "Dropdown",
        multiple: true,
        creatable: false,
        placeholder: "e.g. Ongoing, Finished",
        options: [],
        group: "Studios",
        category: "General",
        priority: 10
    },
    {
        id: 61,
        label: "Secondary Animation Studio(s)",
        type: "Dropdown",
        multiple: true,
        creatable: false,
        placeholder: "e.g. Ongoing, Finished",
        options: [],
        group: "Studios",
        category: "General",
        priority: 10
    },
    {
        id: 62,
        label: "Producers",
        type: "Dropdown",
        multiple: true,
        creatable: false,
        placeholder: "e.g. Ongoing, Finished",
        options: [],
        group: "Studios",
        category: "General",
        priority: 10
    },
    {
        id: 52,
        label: "Start Date",
        type: "Date",
        placeholder: "e.g. Ongoing, Finished",
        options: [],
        group: "Timeline",
        category: "General",
        priority: 20
    },
    {
        id: 53,
        label: "End Date",
        type: "Date",
        placeholder: "e.g. Ongoing, Finished",
        options: [],
        group: "Timeline",
        category: "General",
        priority: 20
    },
    {
        id: 100,
        label: "Characters",
        type: "CharacterUpload",
        placeholder: "e.g. Ongoing, Finished",
        options: [],
        value: [],
        group: "Characters",
        category: "Characters",
        priority: 20
    }
]

const handleValueChange = (id: number, value: any) => {
    // Emit the custom event 'valueChange' with the data
    const input = inputs.find((item) => item.id === id);
    if (input) {
        input.value = value;
    }

    if (id === 3) {
        mediaType.value = value;
    }
};

const handleOptionsChange = (id: number, value: any) => {
    // Emit the custom event 'valueChange' with the data

    const input = inputs.find((item) => item.id === id);
    if (input) {
        input.options = value;
    }
};

const handleVaChange = (id: number, value: any, action: String) => {
    // this function is kind of a mess because i rewrote a lot of 
    // logic, but i decided to keep using it because everything works fine

    // it's a mess though... value can be literally anything and 
    // god only knows that it's supposed to be

    const characterArr = inputs.find(item => item.id === 100);

    if (!characterArr.value) {
        return;
    }

    const character = characterArr.value.find(el => el.uid === id);

    if (!character) {
        return;
    }

    if (action === 'add') {
        // here `value` is a voice actor object
        character.voice_actors.push(value);
    }

    else if (action === 'remove') {
        // here `value` is a string
        const vaObj = character.voice_actors.find(el => el.name === value);
        const index = character.voice_actors.indexOf(vaObj);
        character.voice_actors.splice(index, 1);
    }

    else if (action === 'role') {
        // here `value` is an array of [string, string] that contains
        // VA name and VA role respectively
        //console.log(character.voice_actors.find(el => el.name === value[0]))
        character.voice_actors.find(el => el.name === value[0]).role = value[1];
    }
}

const handleCharRoleChange = (uid: string, value: any) => {
    inputs.find(el => el.id === 100)
        .value
        .find(el => el.uid === uid).role = value;
}

const handleCharacterDelete = (uid: string, value?: any) => {
    const charArr = inputs.find(el => el.id === 100).value;
    const charObj = charArr.find(el => el.uid === uid);
    const index = charArr.indexOf(charObj);
    inputs.find(el => el.id === 100).value.splice(index, 1);
}

function computeGroups(inputs: InputParams[], category: string): [string] | [] {
    const inputsFiltered: InputParams[] = inputs
        .filter((el) => el.category === category)
        .sort((a, b) => b.priority - a.priority);

    if (!inputsFiltered) {
        return []
    }

    const groups: [string] = [inputsFiltered[0].group];

    for (let i = 0; i < inputsFiltered.length; i++) {
        if (!groups.includes(inputsFiltered[i].group)) {
            groups.push(inputsFiltered[i].group);
        }
    }

    return groups;
}

function computeCategories(inputs: InputParams[]): [string] {
    const categories: [string] = [inputs[0].category];

    for (let i = 0; i < inputs.length; i++) {
        if (!categories.includes(inputs[i].category)) {
            categories.push(inputs[i].category);
        }
    }

    return categories;
}

async function fetchGenres() {
    fetch(api.value + '/genres')
        .then(res => res.json())
        .then(obj => { genresArr.value = obj });
}

onMounted(() => {
    fetchGenres();
});

onUpdated(() => {
    /* console.log(inputs); */
})
</script>

<style lang="scss" scoped>
h1 {
    margin: 0;
    font-size: 1.2em;
    margin-bottom: 8px;
    font-weight: 600;
    font-family: 'Nunito';
}

.navigate-text {
    margin-bottom: 12px;
}

.sidebar {

    button {
        font-weight: 800;
    }

    nav {
        margin-left: 12px;
    }

    .vertical-navigation {
        margin-left: 12px;
        border-left: solid 1px var(--text-gray);
    }

    .notice {
        font-size: 0.85em;
        color: var(--text-secondary);
        margin-top: 12px;
        line-height: 1.3em;
    }

    .horizontal-divider {
        margin: 20px 0px;
    }
}

.media-add {

    display: grid;
    grid-template-columns: 200px 10px auto;
    column-gap: 20px;

    .media-add__content {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: min-content auto;
        row-gap: 40px;

        .content__body {
            display: grid;
            grid-template-columns: auto;
            row-gap: 40px;
        }
    }
}
</style>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
    pointer-events: none;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
