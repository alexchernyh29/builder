<template>
	<AtomWrapper :ab="ab" :abdata="ab_page" :bgcolor="bg" :fullwidth="full">
		<div class="content__wrap-document" style="display: flex;">
			<a
				:href="link_href"
				class="content__wrap-block-info-text"
				style="margin-left: 12px;"
				rel="nofollow"
				target="_blank">
				{{ text_text }}
			</a>
			<svg style="background: rgb(2, 91, 255);border-radius: 50%;padding: 6px; height: 25px; width: 25px;" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clip-path="url(#clip0_1207_2002)">
					<path d="M1.51953 6H10.4795" stroke="white" stroke-width="0.96" stroke-linecap="round"/>
					<path d="M6.63965 2.15991L10.7996 5.99991L6.63965 9.83991" stroke="white" stroke-width="0.96" stroke-linecap="round" stroke-linejoin="round"/>
				</g>
				<defs>
					<clipPath id="clip0_1207_2002">
						<rect width="11.52" height="11.52" fill="white" transform="translate(0.240234 0.23999)"/>
					</clipPath>
				</defs>
			</svg>
		</div>
	</AtomWrapper>
</template>

<script setup>
	const props = defineProps({
		text_text: {
			default: "Название ссылки",
		},
		link_href: {
			default: "#",
		},
		bg: {
			default: "",
		},
		full: {
			default: false,
		},
		ab_page: {
			default: "0",
		},
		ab: {
			default: '0'
		},
		size: {
			default: "2"
		}
	})
</script>
<style lang="scss" scoped>
.content {
	&__wrap-document {
		margin-top: 8px;
		margin-bottom: 24px;
		padding: 24px;
		background: #F2F2F2;
		border-radius: 24px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		@media (max-width: 720px) {
			padding: 12px;
		}
	}

	&__wrap-document-info {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}

	&__wrap-document-donwload {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 32px;
		height: 32px;
		background: #025BFF;
		border-radius: 16px;
		@media (max-width: 720px) {
			width: 25px;
			height: 25px;
		}
	}
	&__wrap-block-info-text {
        margin-left: 16px;
        font-family: 'Inter';
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        color: #333333;
        @media (max-width: 720px) {
            margin-left: 0;
            font-size: 10px;
            line-height: 16px;
        }
        @media (max-width: 390px) {
            max-width: 100px;
            &:last-child {
                max-width: 100%;
            }
        }
    }
}
</style>