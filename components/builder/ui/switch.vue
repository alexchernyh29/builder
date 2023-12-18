<template>
    <div class="switch-wrap">
		<p>{{label}}</p>
        <label style="margin-top: -20px;">
            <input
                v-model="bufData"
                :placeholder="placeholder"
                type="checkbox"
            />
            <span>Toggle</span>
        </label>
	</div>
</template>
<script setup>
const props = defineProps({
    placeholder: {
        type: String,
        default: "",
    },
    label: {
        type: String,
        default: "",
    },
    modelValue: {
        type: Boolean,
    }
});
const emit = defineEmits(["update:modelValue"]);
const bufData = ref(props.modelValue)
watchEffect(() => {
	emit('update:modelValue', bufData.value)
})
</script>
<style lang="scss" scoped>
.switch-wrap{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    span {
        cursor: pointer;
        text-indent: -9999px;
        width: 30px;
        height: 18px;
        background: grey;
        display: block;
        border-radius: 20px;
        position: relative;
    }
    span:after {
	    content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        width: 14px;
        height: 14px;
        background: #fff;
        border-radius: 50%;
        transition: 0.3s;
    }
    input:checked + span {
        background: #DBD1F2;
    }
    input:checked + span:after {
        left: calc(100% - 2px);
        transform: translateX(-100%);
    }
    span:active:after {
        width: 14px;
    }
}
p{
    font-family: 'Inter';
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #4B445C;
}
input[type=checkbox]{
	height: 0;
	width: 0;
	visibility: hidden;
}

</style>