export const useBuilderStatesDefaultPageData = () => { return {
	"path": "",
	"created_by": "none",
	"category": "blog",
	"hidden": true,
	"active": true,
	"cockie": "a",
	"page_uid": "",
	"custom": {},
	"meta": {
		"ru": {
			"title": "Title",
			"description": "Description",
			"image": ""
		}
	},
	"ru": []
}}
export const useBuilderStatesListCategory = () => {return [
	{'text': 'Корневые страницы', 'value': 'main'},
	{'text': 'Блог', 'value': 'blog'},
	{'text': 'База знаний', 'value': 'base'},
	{'text': 'Документы', 'value': 'legal'},
	{'text': 'Отчеты', 'value': 'reports'},
	{'text': 'Успешные кейсы', 'value': 'cases'},
	{'text': 'Рекламные лендинги', 'value': 'promo'},
	{'text': 'Новости', 'value': 'news'}
]}
export const useBuilderStatesTimestampId = () => { return Date.now() } 
export const useBuilderStatesRandomInt = () => { return Math.floor(Math.random() * 999) } 
export const useBuilderStatesTablePages = () => { return 'builder_pages' } 
export const useBuilderStatesSearchComponentList = () => useState('builderStatesSearchComponentList', () => '')
export const useBuilderStatesCategoryPagesBuilder = () => useState('builderStatesCategoryPagesBulder', () => 'blog')
export const useBuilderStatesLoading = () => useState('builderStatesLoading', () => false)
export const useBuilderStatesShowLocalizeControl = () => useState('builderStatesShowLocalizeControl', () => false)
export const useBuilderStatesPagePath = () => useState('builderStatesPagePath', () => null)
export const useBuilderStatesPageData = () => useState('builderStatesPageData', () => null)
export const useBuilderStatesListPagesInCategory = () => useState('builderStatesListPagesInCategory', () => [])
export const useBuilderStatesLang = () => useState('builderStatesLang', () => 'draft')
export const useBuilderStatesEditingComponent = () => useState('builderStatesEditingComponent', () => null)
export const useBuilderStatesIEditingComponent = () => useState('builderStatesIEditingComponent', () => null)
export const useBuilderStatesChoosingComponent = () => useState('builderStatesChoosingComponent', () => false)
export const useBuilderStatesEditingMeta = () => useState('builderStatesEditingMeta', () => false)
export const useBuilderStatesPlaceEditing = () => useState('builderStatesPlaceEditing', () => 0)