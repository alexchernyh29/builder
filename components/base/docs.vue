<template>
	<AtomWrapper :ab="ab" :abdata="ab_page" :bgcolor="bg" :fullwidth="full">
		<div class="mit-docs content">
			<div class="content__wrap">
                <div v-for="(item, i) in superarr" :key="i" class="content__wrap-item">
                    <img src="/images/document.png" alt="" class="content__wrap-item-icon">
                    <p class="content__wrap-item-title">{{ item.text_title }}</p>
                    <div class="content__wrap-item-footer">
                        <p class="content__wrap-item-footer-size">{{ item.size }}</p>
                        <a :href="item.link" target="_blank" class="content__wrap-item-footer-download">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
								<g clip-path="url(#clip0_535_15793)">
									<path d="M6 1.5199L6 10.4799" stroke="white" stroke-width="0.96" stroke-linecap="round"/>
									<path d="M9.83984 6.63989L5.99984 10.7999L2.15984 6.63989" stroke="white" stroke-width="0.96" stroke-linecap="round" stroke-linejoin="round"/>
								</g>
								<defs>
									<clipPath id="clip0_535_15793">
										<rect width="11.52" height="11.52" fill="white" transform="translate(11.7598 0.240112) rotate(90)"/>
									</clipPath>
								</defs>
							</svg>
                        </a>
                    </div>
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
					text_title: "Название документа",
					size: '',
					link: ""
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
        max-width: 264px;
        width: 100%;
        padding: 24px;
        background: #F2F2F2;
        border-radius: 40px;
    }

    &__wrap-item-icon {
        width: 32px;
        height: 32px;
    }

    &__wrap-item-title {
        margin-top: 8px;
        font-family: 'Inter';
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #1B1B29;
    }

    &__wrap-item-footer{
        padding-top: 52px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
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
    }

    &__wrap-item-footer-download-icon {
        width: 11px;
        height: 11px;
    }
}
</style>
