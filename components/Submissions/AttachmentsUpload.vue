<template>
    <div class="attachments-upload__wrapper">
        <div class="banner">
            <el-upload drag class="avatar-uploader" action=""
                :show-file-list="false" :on-success="handleBannerSuccess"
                :before-upload="beforeBannerUpload">
                <img v-if="bannerUrl" :src="bannerUrl" class="avatar" />
                <el-icon v-else class="avatar-uploader-icon">
                    <Plus />
                </el-icon>
            </el-upload>
        </div>
        <div class="header">
            <div class="cover">
                <el-upload drag class="avatar-uploader" action=""
                    :show-file-list="false" :on-success="handleCoverSuccess"
                    :before-upload="beforeCoverUpload">
                    <img v-if="coverUrl" :src="coverUrl" class="avatar" />
                    <el-icon v-else class="avatar-uploader-icon">
                        <Plus />
                    </el-icon>
                </el-upload>
            </div>
            <div class="header__title">
                <div class="title">
                    <div class="_blank"></div>
                </div>
                <div class="header__subheader">
                    <div class="_blank"></div>
                    •
                    <div class="_blank"></div>
                </div>
                <p></p>
            </div>
        </div>

        <!-- <h1>Screenshots</h1>
        <div class="screenshots">
            <el-upload v-model:file-list="fileList" action=""
                list-type="picture-card" :on-remove="handleRemove">
                <el-icon>
                    <Plus />
                </el-icon>
            </el-upload>
        </div> -->
    </div>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus';
import { Plus } from '@element-plus/icons-vue';

import type { UploadProps, UploadUserFile } from 'element-plus';

const props = defineProps<{
    inputs: any
}>();

const banner = props.inputs.find((el: any) => el.label === "Banner");
const cover = props.inputs.find((el: any) => el.label === "Cover");
const ss = props.inputs.find((el: any) => el.label === "Screenshots");

const bannerUrl = ref('');
const coverUrl = ref('');
const fileList = ref<UploadUserFile[]>([]);

const emits = defineEmits<{
    valueChange: [id: number, value: any];
}>();

watch(bannerUrl, (newCount, oldCount) => {
    emits('valueChange', banner.id, newCount);
});

watch(coverUrl, (newCount, oldCount) => {
    emits('valueChange', cover.id, newCount);
});

watch(fileList, (newCount, oldCount) => {
    emits('valueChange', ss.id, newCount);
});

onMounted(() => {
    bannerUrl.value = banner.value ? banner.value : '';
    coverUrl.value = cover.value ? cover.value : '';
    fileList.value = ss.value ? ss.value : [];
})

const handleBannerSuccess: UploadProps['onSuccess'] = (
    response,
    uploadFile
) => {
    bannerUrl.value = URL.createObjectURL(uploadFile.raw!);
};

const beforeBannerUpload: UploadProps['beforeUpload'] = (rawFile) => {
    if (rawFile.type !== 'image/jpeg' && rawFile.type !== 'image/png') {
        ElMessage.error('Must be a valid image (.png, .jpg)!')
        return false
    } else if (rawFile.size / 1024 / 1024 > 2) {
        ElMessage.error('Banner image size can not exceed 2MB!')
        return false
    }
    return true
};

const handleCoverSuccess: UploadProps['onSuccess'] = (
    response,
    uploadFile
) => {
    coverUrl.value = URL.createObjectURL(uploadFile.raw!);
};

const beforeCoverUpload: UploadProps['beforeUpload'] = (rawFile) => {
    if (rawFile.type !== 'image/jpeg' && rawFile.type !== 'image/png') {
        ElMessage.error('Must be a valid image (.png, .jpg)!')
        return false
    } else if (rawFile.size / 1024 / 1024 > 2) {
        ElMessage.error('Banner image size can not exceed 2MB!')
        return false
    }
    return true
};

const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
}
</script>

<style lang="scss" scoped>
.attachments-upload__wrapper {
    animation: fade-in 0.2s ease;
}

h1 {
    margin: 0;
    font-size: 1.4em;
    margin-top: 32px;
    font-weight: 600;
    font-family: 'Nunito';
}

._blank {
    background: var(--placeholder-fill);
    opacity: 0.2;
    height: 20px;
    width: 100px;
    border-radius: 100px;
}

.banner {
    border-radius: 8px;
    background: rgba(0, 0, 0, 0.2);
    opacity: 1;
    width: 100%;
    height: 140px;

    .banner__upload {
        height: 140px;
    }

    .el-icon--upload {
        position: absolute;
    }

    .avatar-uploader {
        height: 140px;
        position: relative;
    }

    .avatar-uploader .avatar {
        width: 100%;
        height: 140px;
        display: block;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
    }
}

.header {
    display: grid;
    grid-template-columns: 140px auto;
    column-gap: 20px;
    margin-top: 20px;
    padding-left: 30px;
    border-radius: 8px;
    background: var(--foreground);
    padding-bottom: 30px;
}

.cover {
    border-radius: 8px;
    background: var(--placeholder-fill);
    width: 140px;
    height: 192px;
    margin-top: -50px;
    position: relative;
    z-index: 20;

    .avatar-uploader {
        height: 100%;
        position: relative;
    }

    .avatar-uploader .avatar {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
    }
}

.title {
    margin-top: 16px;
    margin-left: 12px;

    ._blank {
        width: 300px;
        height: 30px;
        margin-top: 24px;
    }
}

.header__subheader {
    display: grid;
    grid-template-columns: 100px 20px 100px;
    justify-content: start;
    align-items: center;
    text-align: center;
    margin-top: 8px;
    margin-left: 12px;
}

.screenshots {
    margin-top: 8px;
    padding: 30px;
    border-radius: 8px;
    background: var(--foreground);
}
</style>

<style lang="scss">
.attachments-upload__wrapper {
    .banner {
        .avatar-uploader .el-upload {
            border: 1px dashed var(--el-border-color);
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            transition: var(--el-transition-duration-fast);
        }

        .avatar-uploader .el-upload:hover {
            border-color: var(--el-color-primary);
        }

        .el-icon.avatar-uploader-icon {
            font-size: 28px;
            color: #8c939d;
            width: 140px;
            height: 140px;
            text-align: center;
        }

        .el-upload-dragger {
            height: 140px;
            padding: unset;
            transition: opacity 0.5s;

            &:hover {
                opacity: 0.5;
            }
        }

        .is-dragover {
            box-sizing: border-box;
            z-index: 10;
            opacity: 0.5;
            border-width: 1px !important;
            border-style: solid !important;
        }
    }

    .cover {
        .avatar-uploader .el-upload {
            border: 1px dashed var(--el-border-color);
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            transition: var(--el-transition-duration-fast);
        }

        .avatar-uploader .el-upload:hover {
            border-color: var(--el-color-primary);
        }

        .el-icon.avatar-uploader-icon {
            font-size: 28px;
            color: #8c939d;
            width: 140px;
            height: 192px;
            text-align: center;
        }

        .el-upload-dragger {
            height: 192px;
            padding: unset;
            transition: opacity 0.5s;

            &:hover {
                opacity: 0.5;
            }
        }

        .is-dragover {
            box-sizing: border-box;
            z-index: 10;
            opacity: 0.5;
            border-width: 1px !important;
            border-style: solid !important;
        }
    }

    .el-icon--zoom-in {
        display: none;
    }

    .el-upload-list--picture-card .el-upload-list__item-actions span+span {
        margin-left: unset;
        margin-bottom: -6px;
    }

    .screenshots {

        .el-upload,
        .el-upload-list__item-actions,
        .el-upload-list__item {
            width: 258px;
            height: 145px;
        }

        .el-icon--close-tip {
            display: none;
        }
    }
}
</style>
