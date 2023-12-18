<template>
	<div class="mit_wrapper" style="border-radius: 30px; overflow: hidden; background: white;">
		<LazyUiContentBuilder :page="pageData"/>
	</div>
</template>
<script setup>
const route = useRoute()
const {data: pageData} = await useLazyFetch(`/api/getPageFromBuilderJson/?category=main&lang=ru&path=` + route.params.slug)

</script>
<style lang="scss" scoped>
	@import "../assets/scss/blog.scss";
</style>