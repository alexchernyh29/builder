<template>
	<div class="components-list">
		<Html>
			<Head>
				<Title>{{page.meta?.[lang]?.title}}</Title>
				<Meta name="description" :content="page.meta?.[lang]?.description"/>
			</Head>
		</Html>
		<template v-if="subHidden">
        <component
            v-for="(item, i) in page?.[lang]"
            :key="i + item.key"
            :is="'lazy-' + item.category + '-' + item.key"
            v-bind="item.props"
			:lang="lang"
        />
		</template>
		<div v-else class="mit_wrapper wrap">
            <h2 v-if="user" class="wrap__text" style="color: white;">У вас не оформлена подписка!</h2>
            <h2 v-else class="wrap__text" style="color: white;">Вы не авторизованы!</h2>
        </div>
	</div>
</template>
<script setup>
const props = defineProps({
	page: {
		default: null
	}
})
const event = useRequestEvent()
const lang = 'ru'
const sub = useSub()
const user = useSupabaseUser()

if (props.page === null) {
	setResponseStatus(event, 404, 'Page Not Found')
	showError({ statusCode: 404, statusMessage: 'Page Not Found'})
}

const subHidden = computed(() => {
    if (!props.page.hidden || (props.page.hidden && sub.value && sub.value.active)) return true
    else return false
})
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.components-list {
	display: flex;
	flex-direction: column;
}
	.wrap{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 580px;
		border-radius: 60px;
		background: linear-gradient(202deg, #EF5DA8 0%, #8E1CBA 100%);

		&__reg {
			padding: 16px 26px;
			margin-left: 16px;
			background-color: #fff;
			border-radius: 60px;
			color: var(--text-black, #1B1B29);
			text-align: center;
			font-size: 12px;
			font-weight: 600;
			line-height: 18px;
			text-transform: uppercase;
		}

		&__login {
			border-radius: 60px;
			background-color: #34057B;
			border: none;
			color: #fff;
			display: flex;
			padding: 16px 26px;
			justify-content: center;
			align-items: center;
		}

		&__btn {
			display: flex;
			flex-direction: row;
		}

		&__text {
			color:#FFF;
			text-align: center;
			font-size: 56px;
			font-weight: 700;
			line-height: 96px;
			@media (max-width: 768px) {
				font-size: 32px;
				line-height: 42px;
			}
		}
	}

</style>
