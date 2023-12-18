<template>
    <div>
        <div
            v-for="(item, i) in pageData?.[lang]"
            :key="i + item.key"
            class="group-component"
            style="margin-bottom: 16px;"
            :class="blog ? 'blog' : ''">
            <component
                v-if="blog"
                :is="'builder-edit-' + pageData[lang][i].category + '-' + pageData[lang][i].key"
                v-model:data="pageData[lang][i].props"
                :page_uid="pageData?.uid"
                style="margin-bottom: 50px;"
            />
            <component
                v-else
                :is="item.category + '-' + item.key"
                v-bind="item.props"
            />
            <div class="control-component-panel">
                <button
                    @click.prevent="removeComponents(i)"
                    class="action-btn-header">
                    <svg width="20" height="20" style="margin-top: 4px;" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.99496 6.01499L7.84197 13.9595M9.99987 6.01499V13.9842M13.1237 6.01499L12.2767 13.9595M3.50955 4.9969L5.01437 15.5933C5.16153 16.6296 6.04866 17.3996 7.09527 17.3996H12.9045C13.9511 17.3996 14.8382 16.6296 14.9854 15.5933L16.4902 4.9969C16.6699 3.73126 15.6876 2.59961 14.4093 2.59961H5.59045C4.31212 2.59961 3.32982 3.73126 3.50955 4.9969Z" stroke="white" stroke-width="1.1" stroke-linecap="round"/>
                    </svg>
                </button>
                <button
                    @click.prevent="copyComponents(i)"
                    style="background: orange; border: 1px solid white; padding: 2px 5px; border-radius: 5px;"
                    v-show="pageData[lang].length-1 > i"
                    class="action-btn-header">
                    <svg width="20" height="20" style="margin-top: 4px;" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.81985 12.2196H4.07985C3.68733 12.2196 3.31089 12.0637 3.03333 11.7861C2.75578 11.5086 2.59985 11.1321 2.59985 10.7396V4.07961C2.59985 3.68709 2.75578 3.31064 3.03333 3.03309C3.31089 2.75554 3.68733 2.59961 4.07985 2.59961H10.7398C11.1324 2.59961 11.5088 2.75554 11.7863 3.03309C12.0639 3.31064 12.2198 3.68709 12.2198 4.07961V4.8196M9.25987 7.77963H15.9199C16.7372 7.77963 17.3999 8.44225 17.3999 9.25963V15.9196C17.3999 16.737 16.7372 17.3996 15.9199 17.3996H9.25987C8.44249 17.3996 7.77988 16.737 7.77988 15.9196V9.25963C7.77988 8.44225 8.44249 7.77963 9.25987 7.77963Z" stroke="white" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <button
                    @click.prevent="switchComponents(i-1, i)"
                    v-show="i > 0"
                    class="action-btn-header">
                    <svg width="14" height="15" style="margin-top: 4px;" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.933058 7.81694C0.68898 7.57287 0.68898 7.17714 0.933058 6.93306L7 0.866118L13.0669 6.93306C13.311 7.17714 13.311 7.57286 13.0669 7.81694C12.8229 8.06102 12.4271 8.06102 12.1831 7.81694L7.625 3.25889L7.625 14.25C7.625 14.5952 7.34518 14.875 7 14.875C6.65482 14.875 6.375 14.5952 6.375 14.25L6.375 3.25888L1.81694 7.81694C1.57286 8.06102 1.17714 8.06102 0.933058 7.81694Z" fill="white"/>
                    </svg>
                </button>
                <button
                    @click.prevent="switchComponents(i, i+1)"
                    v-show="pageData[lang].length-1 > i"
                    class="action-btn-header">
                    <svg width="14" height="15" style="margin-top: 4px;" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0669 7.18306C13.311 7.42714 13.311 7.82286 13.0669 8.06694L7 14.1339L0.933057 8.06694C0.68898 7.82286 0.68898 7.42714 0.933057 7.18306C1.17714 6.93898 1.57286 6.93898 1.81694 7.18306L6.375 11.7411L6.375 0.75C6.375 0.404822 6.65482 0.125 7 0.125C7.34518 0.125 7.625 0.404822 7.625 0.75L7.625 11.7411L12.1831 7.18306C12.4271 6.93898 12.8229 6.93898 13.0669 7.18306Z" fill="white"/>
                    </svg>
                </button>
                <button
                    v-if="!blog"
                    @click.prevent="openEditModal(i)"
                    class="action-btn-header">
                        Изменить
                </button>
            </div>
            <button
                @click.prevent="openModal(i)"
                class="action-btn-header add-block">
                    +
            </button>
        </div>
    </div>
</template>
<script setup>
const pageData = useBuilderStatesPageData()
const editingComponent = useBuilderStatesEditingComponent()
const lang = useBuilderStatesLang()
const choosingComponent = useBuilderStatesChoosingComponent()
const placeEditing = useBuilderStatesPlaceEditing()
const iEditingComponent = useBuilderStatesIEditingComponent()
const category = useBuilderStatesCategoryPagesBuilder()

const blog = computed(() => {
    if (category.value == 'main' || category.value == 'promo') return false
    else return true
})

const switchComponents = (i, n) => {
	editingComponent.value = false
	let tmp = JSON.parse(JSON.stringify(pageData.value[lang.value][i]));
	pageData.value[lang.value][i] = pageData.value[lang.value][n];
	pageData.value[lang.value][n] = tmp;
}

const copyComponents = (i) => {
	editingComponent.value = false
	let tmp = JSON.parse(JSON.stringify(pageData.value[lang.value][i]))
	pageData.value[lang.value].splice(i, 0, tmp)
}

const removeComponents = (i) => {
	console.log(i)
	console.log(pageData.value[lang.value])
	pageData.value[lang.value].splice(i, 1)
}

const openEditModal = (i) => {
	editingComponent.value = false
	iEditingComponent.value = i
	editingComponent.value = true
	choosingComponent.value = false
}

const openModal = (i) => {
	choosingComponent.value = true
	placeEditing.value = i + 1
	editingComponent.value = false
}
</script>
<style lang="scss" scoped>
@import "../../../assets/scss/builder.scss";
</style>
