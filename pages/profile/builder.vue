<template>
    <div class="builder2 mit_wrapper" v-if="open == '105105'">
        <BuilderControlLine/>
        <div v-if="!!pageData?.[lang]" :key="lang">
			<div>
				<div class="wrap-container">
					<div :class="{'shrink-wrapper': choosingComponent || editingComponent}" style="width: 100%;">
						<div>
							<BuilderSettingsBlog v-if="pageData.category == 'blog' && !loading" :pageUid="pageData.page_uid" v-model:data="pageData.custom"/>
							<BuilderSettingsBase v-if="pageData.category == 'base' && !loading" :pageUid="pageData.page_uid" v-model:data="pageData.custom"/>
							<BuilderSettingsNews v-if="pageData.category == 'news' && !loading" :pageUid="pageData.page_uid" v-model:data="pageData.custom"/>
							<BuilderModal v-if="editingMeta">
								<button
									@click.prevent="editingMeta = false"
									style="display: block; margin-left: auto;  position: sticky; top: 0; text-decoration: none;">
										Close
								</button>
								<p>{{ pageData.title }}</p>
								<p>{{ pageData.description }}</p>
								<BuilderMetaEditor v-model:meta="pageData.meta"/>
							</BuilderModal>
						</div>
						<BuilderControlComponents/>
						<button
							style="cursor: pointer; font-size: 20px; background: blue; color: white; display: block; margin: 50px auto; border: 1px solid white; padding: 5px 10px; border-radius: 5px;"
							@click.prevent="choosingComponent = true"
						>
							+
						</button>
					</div>
					<div id="wrap-modal-builder" :class="{'shrink-modal-wrapper': choosingComponent || editingComponent}">

					</div>
				</div>
			</div>
			<BuilderModalUi v-if="choosingComponent">
				<BuilderAddComponentsToPage/>
			</BuilderModalUi>
			<BuilderModalUi
				class="modal"
				v-if="editingComponent"
			>
				<div style="display: flex; flex-direction: row; justify-content: space-between; width: 100%; padding-bottom: 8px;">
					<p class="modal-title">Component:</p>
					<button
						@click.prevent="editingComponent = false"
						style="display: block; margin-left: auto; position: sticky; top: 0; border: none; cursor: pointer; width: 24px;">
							<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L6 5.29289L10.6464 0.646447C10.8417 0.451184 11.1583 0.451184 11.3536 0.646447C11.5488 0.841709 11.5488 1.15829 11.3536 1.35355L6.70711 6L11.3536 10.6464C11.5488 10.8417 11.5488 11.1583 11.3536 11.3536C11.1583 11.5488 10.8417 11.5488 10.6464 11.3536L6 6.70711L1.35355 11.3536C1.15829 11.5488 0.841709 11.5488 0.646447 11.3536C0.451184 11.1583 0.451184 10.8417 0.646447 10.6464L5.29289 6L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#ABA7B3"/>
							</svg>
					</button>
				</div>
				<BuilderEditingComponents/>
			</BuilderModalUi>
		</div>
		<div
			v-if="loading"
			style="position: fixed; top: 0; left: 0; height: 100vh; width: 100vw; background-color: rgba(137, 43, 226, 0.3); z-index: 100; display: flex; justify-content: center; align-items: center;">
			<svg width="140" height="64" viewBox="0 0 140 64" xmlns="http://www.w3.org/2000/svg" fill="#fff">
				<path d="M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.717-6.002 11.47-7.65 17.305-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z" fill-opacity=".5">
					<animate attributeName="fill-opacity"
						begin="0s" dur="1.4s"
						values="0.5;1;0.5"
						calcMode="linear"
						repeatCount="indefinite" />
				</path>
				<path d="M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.592-2.32 17.307 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z" fill-opacity=".5">
					<animate attributeName="fill-opacity"
						begin="0.7s" dur="1.4s"
						values="0.5;1;0.5"
						calcMode="linear"
						repeatCount="indefinite" />
				</path>
				<path d="M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z" />
			</svg>
		</div>
    </div>
</template>
<script setup>
import BuilderControlLine from "../../components/builder/components/controlLine.vue";
import BuilderControlComponents from "../../components/builder/components/controlComponents.client.vue";
import BuilderAddComponentsToPage from "../../components/builder/components/addComponentsToPage.vue";
import BuilderEditingComponents from "../../components/builder/components/editingComponets.client.vue";
import BuilderModal from "../../components/builder/components/modal.vue";
import BuilderModalUi from "../../components/builder/components/modalUi.vue";
import BuilderMetaEditor from "../../components/builder/components/metaEditor.client.vue";
import BuilderSettingsBlog from "../../components/builder/components/settingsBlog.client.vue"
import BuilderSettingsBase from "../../components/builder/components/settingsBase.client.vue"
import BuilderSettingsNews from "../../components/builder/components/settingsNews.client.vue"

const h1Page = useH1Page()
h1Page.value = 'Редактор страниц'

const pageData = useBuilderStatesPageData()
const listPage = useBuilderStatesListPagesInCategory()
const editingComponent = useBuilderStatesEditingComponent()
const loading = useBuilderStatesLoading()
const lang = useBuilderStatesLang()
const choosingComponent = useBuilderStatesChoosingComponent()
const editingMeta = useBuilderStatesEditingMeta()

listPage.value = await useBuilderFuncGetPagesPathInCategory()

const supabase = useSupabaseClient()
// const user = useSupabaseUser()
// const { data, error } = await supabase
// 	.from('admins')
// 		.select('*')
// 			.eq('user_uid', user.value?.id ?? '')
// const accessAllowed = ref(data.length > 0)

const open = ref(false) 
onMounted(() => {
  open.value = prompt('скажи пароль?', 1);
})
</script>
<style lang="scss" scoped>
@import "./../../assets/scss/builder.scss";
@import './../../assets/scss/main.scss';

</style>
