<template>
	<AtomWrapper 
		:ab="ab"
		:abdata="ab_page"
		:bgcolor="bg"
		:fullwidth="full"
	>
		<div class="sc20-space" :class="[space]">
		
		</div>
	</AtomWrapper>
</template>

<script setup>
	const props = defineProps({
			space: {
				default: "medium", // large, bigger, big, medium, small, last, less
			},
			ab_page: {
				default: "0",
				
			},
			bg: {
				default: "",	
			},
			full: {
				default: false,
			},
            ab: {
                default: '0'
            },
	})
</script>

<style lang="scss" scoped>
.sc20-space {
	display: block;
	width: 100%;
	&.less{
		height: 8px;
	}
	&.small {
		height: 24px;
	}
	&.medium {
		height: 48px;
	}
	&.big {
		height: 60px;
	}
	&.bigger {
		height: 80px;
	}
	&.large {
		height: 100px;
	}
	&.last {
		height: 160px;
	}
}
</style>
