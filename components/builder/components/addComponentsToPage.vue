<template>
    <div>
        <div style="display: flex; flex-direction: row; justify-content: space-between; width: 100%; padding-bottom: 8px;">
            <p class="modal-title">Выбрать компонент</p>
            <button
                @click.prevent="closeModal"
                style="display: block; margin-left: auto; position: sticky; top: 0; border: none; cursor: pointer; width: 24px;">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L6 5.29289L10.6464 0.646447C10.8417 0.451184 11.1583 0.451184 11.3536 0.646447C11.5488 0.841709 11.5488 1.15829 11.3536 1.35355L6.70711 6L11.3536 10.6464C11.5488 10.8417 11.5488 11.1583 11.3536 11.3536C11.1583 11.5488 10.8417 11.5488 10.6464 11.3536L6 6.70711L1.35355 11.3536C1.15829 11.5488 0.841709 11.5488 0.646447 11.3536C0.451184 11.1583 0.451184 10.8417 0.646447 10.6464L5.29289 6L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#ABA7B3"/>
                </svg>
            </button>
        </div>
        <div style="display: flex; flex-direction: row; justify-content: space-between; width: 100%; padding-bottom: 8px;">
            <BuilderComponentsUiInput placeholder="Поиск" v-model="searchComponentList" style="width: 100%; padding-bottom: 8px;"/>
        </div>
        <div style="display: flex; flex-direction: row; flex-wrap: wrap; overflow: scroll;">
            <template
                v-for="(el, e) in componetList.filter(element => element.name.toLowerCase().includes(searchComponentList.toLowerCase()))"
                :key="e + el.key">
                <div class="card-component" @click="addComponent(el)">
                    <img
                        class="hover-filter"
                        :src="el.image"
                        :alt="el.name"
                        style="width: 130px; height: 60px;"
                    >
                    <p class="card-title">{{ el.name }}</p>
                </div>
            </template>
        </div>
    </div>
</template>
<script setup>
import { docs, contact, heading, space, people, event, content } from "../../../common/components/base"
import { blogText, blogImage, blogCta, blogSpace, blogHeading, blogIframe, blogFaq, blogLink } from "../../../common/components/blog"

const componetList = computed(() => {
    try {
        switch (pageData.value.category) {
        case 'main':
            return [docs, contact, heading, space, people, event, content ]
        case 'promo':
            return [docs, heading, space ]
        case 'blog':
            return [blogHeading, blogText, blogImage, blogIframe, blogFaq, blogLink]
        case 'base':
            return [blogHeading, blogText, blogImage, blogIframe, blogFaq, blogLink]
        case 'legal':
            return [blogHeading, blogText, blogImage, blogCta, blogSpace, blogIframe]
        case 'reports':
            return [blogHeading, blogText, blogImage, blogCta, blogSpace, blogIframe]
        case 'cases':
            return [blogHeading, blogText, blogImage, blogCta, blogSpace, blogIframe]
        case 'news':
            return [blogHeading, blogText, blogImage, blogIframe, blogFaq, blogLink]
        default:
            return [ zigzag ]
    }
    } catch (error) {
        return []
    }
})

const pageData = useBuilderStatesPageData()
const searchComponentList = useBuilderStatesSearchComponentList()
const lang = useBuilderStatesLang()
const choosingComponent = useBuilderStatesChoosingComponent()
const placeEditing = useBuilderStatesPlaceEditing()


const closeModal = () => {
	choosingComponent.value = false
	placeEditing.value = 0
}

const addComponent = async (arg) => {
	let updateProps = JSON.parse(JSON.stringify(arg.props))

	if (placeEditing.value == 0) pageData.value[lang.value].push({
		category: arg.category,
		key: arg.key,
		props: updateProps
	})
	else {
		pageData.value[lang.value].splice(placeEditing.value, 0, {
			category: arg.category,
			key: arg.key,
			props: updateProps
		})
	}

	choosingComponent.value = false
	placeEditing.value = 0
}

</script>
<style lang="scss" scoped>
@import "../../../assets/scss/builder.scss";
</style>
