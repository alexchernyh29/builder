<template>
    <label :style="{'background-image': 'url(' + data + ')'}">						
        <input
            type="file"
            style="display: none;"
            :accept="accept"
            @change="loadFile($event, size)">
        <p>{{ text }}</p>
    </label>
</template>

<script setup>
const props = defineProps({
	data: {
		type: Object,
		default: ''
	},
    accept: {
        type: String,
        default: ".png, .jpg, .jpeg, .svg"
    },
    size: {
        type: String,
        default: 250
    },
    text: {
        type: String,
        default: "Загрузить изображение"
    }
})
const emit = defineEmits(['update:data'])
const loading = useBuilderStatesLoading()
const loadFile = async (event, size) => {
	loading.value = true
    emit('update:data', await useBuilderFuncLoadingFile(event, size));
    setTimeout(() => loading.value = false , 2000)
}
</script>

<style lang="scss" scoped>
label {
	height: 200px;
	width: 100%;
	border: 1px dashed grey;
	border-radius: 16px;
	background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
    transition: .2s;
	p {
		background-color: rgba(255, 255, 255, 0.8);
		color: black;
		padding: 16px;
		border-radius: 8px;
		font-size: 16px;
        transition: .2s;
        opacity: .1;
	}
    &:hover {
        border-color: violet;
        p {
            background: violet;
            color: white;
            opacity: 1;
        }
    }
}
</style>
