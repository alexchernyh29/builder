<template>
	<div class="mit_wrapper">
        <div class="content">
            <div class="content__wrap" style="width: 100%;">
                <div class="content__wrap-card">
					<h1 class="content__wrap-title">{{ pageData?.custom?.title }}</h1>
                    <div class="content__wrap-card-link" style="margin-bottom:32px;">
                        <p class="content__wrap-card-link-date">{{ pageData?.custom?.date}}</p>
						<p class="content__wrap-card-link-document">{{ settings?.tags?.[pageData?.custom?.tags] }}</p>
						<p class="content__wrap-card-link-text">Автор: {{ settings?.autor?.[pageData?.custom?.autor] }}</p>
                    </div>
					<UiContentBuilder :page="pageData"/>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
const route = useRoute()
const [{ data: pageData },{ data: settings }] = await Promise.all([
	useFetch(`/api/getPageFromBuilderJson/?category=blog&path=` + route.params.slug, { server: true }),
	useFetch(`/api/getSettings/?key=blog`, { server: true })
]);
</script>
<style lang="scss" scoped>
	@import "../../assets/scss/blog.scss";
</style>
