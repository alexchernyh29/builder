<template>
    <div>
		<template v-for="local in ['draft', 'ru']" :key="local">
			<div v-if="local == lang">
				<div
					v-for="(item, i) in pageData?.[local]"
					:key="i + item.key + local">
					<component
						v-if="i == iEditingComponent"
						:is="'builder-edit-' + pageData[local][i].category + '-' + pageData[local][i].key"
						v-model:data="pageData[local][i].props"
						:page_uid="pageData?.uid"
					/>
				</div>
			</div>
		</template>
    </div>
</template>
<script setup>
const pageData = useBuilderStatesPageData()
const lang = useBuilderStatesLang()
const iEditingComponent = useBuilderStatesIEditingComponent()
</script>
<style lang="scss" scoped>
@import "../../../assets/scss/builder.scss";
</style>
