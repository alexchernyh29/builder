<template>
	<AtomWrapper :ab="ab" :abdata="ab_page" :bgcolor="bg" :fullwidth="full">
		<div class="mit-docs content">
			<div class="content__wrap">
                <div v-for="(item, i) in superarr" :key="i" class="content__wrap-item">
                    <img :src="item.img" alt="" class="content__wrap-item-icon">
                    <a class="content__wrap-item-title" :href="item.link_profile" >{{ item.text_title }}</a>
                    <p class="content__wrap-item-title">{{ item.post }}</p>
                    <p class="content__wrap-item-title">{{ item.description }}</p>
                </div>
			</div>
		</div>
	</AtomWrapper>
</template>
<script setup>
	const props = defineProps({
		bg: {
			default: "",
		},
		full: {
			default: false,
		},
		ab_page: {
			default: "0",
		},
		pd:  {
			default: true,
		},
		ab: {
			default: '0'
		},
		superarr: {
			default: [
				{
					text_title: "ФИО",
                    post: "Должность",
                    description: "Описание",
                    img: "",
                    link_profile: "",
				}
			],
			type: Array
		}
	})
</script>

<style lang="scss" scoped>
.content{
    padding: 48px;
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    border-radius: 60px;
    @media (max-width: 720px) {
		padding: 24px;
        border-radius: 36px;
	}

    &__wrap {
        margin-top: 16px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 16px;
        &:first-child {
            margin-top: 0;
        }
    }

    &__wrap-item {
        max-width: 205px;
        width: 100%;
        padding: 10px;
        background: transparent;
        border-radius: 40px;
        display: flex;
        flex-direction: column;
    }

    &__wrap-item-icon {
        width: 150px;
        height: 150px;
        border: 1px solid #7C3AED;
        border-radius: 50%;
        align-self: center;
    }

    &__wrap-item-title {
        font-family: 'Inter';
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #1B1B29;
        margin-left: 10px;
    }

    &__wrap-item-footer{
        padding-top: 52px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        cursor: pointer;
    }

    &__wrap-item-footer-size {
        font-family: 'Inter';
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #828282;
    }

    &__wrap-item-footer-download {
        padding: 10px;
        background: #025BFF;
		border-radius: 50%;
    	width: 34px;
        height: 34px;
    }

    &__wrap-item-footer-download-icon {
        width: 11px;
        height: 11px;
    }
}
</style>
