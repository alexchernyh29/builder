<template>
	<Transition>
		<div class="mit-modal" v-if="!!bodyModal">
			<div class="mit-modal_overlay" @click="bodyModal = ''"/>
			<div class="mit-modal_body">
				<svg
					style="position: absolute; top: 32px; right: 32px; cursor: pointer;"
					@click="bodyModal = ''"
					width="50"
					height="50"
					viewBox="0 0 50 50"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
						<path d="M20.0503 29.9501L29.9498 20.0506" stroke="#921CBC" stroke-width="2" stroke-linecap="round"/>
						<path d="M20.0503 20.0499L29.9498 29.9494" stroke="#921CBC" stroke-width="2" stroke-linecap="round"/>
						<rect x="1" y="1" width="48" height="48" rx="24" stroke="#921CBC" stroke-width="2"/>
				</svg>
				<div class="mit-modal_wrapper">
					<component :is="bodyModal"/>
				</div>
			</div>
		</div>
	</Transition>
</template>
<script setup>
	const bodyModal = useBodyModal()
</script>
<style lang="scss" scoped>
	.v-enter-active, .v-leave-active {
	transition: opacity 0.5s ease;
	}

	.v-enter-from, .v-leave-to {
	opacity: 0;
	}
	.mit-modal {
		display: flex;
		height: 100vh;
		width: 100vw;
		z-index: 100;
		position: fixed;
		top: 0;
		left: 0;
		justify-content: center;
		align-items: center;
		overflow: auto;
		&_overlay {
			position: absolute;
			top: 0;
			left: 0;
			height: 100vh;
			width: 100vw;
			z-index: 101;
			background: rgba(128, 128, 128, 0.9);
		}
		&_body {
			padding: 98px 56px 48px 56px;
			border-radius: 32px;
			position: relative;
			z-index: 102;
			background: white;
			min-width: 580px;
			min-height: 585px;
			@media (max-width:1000px) {
				margin: 0 20px;
			}
			@media (max-width:600px) {
				margin: 0;
				min-width: 320px;
				padding: 98px 16px 48px 16px;
			}
		}
	}
</style>