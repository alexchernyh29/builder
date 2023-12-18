export const useBuilderFuncGenerateRandomId = () => {
    const timestampId = useBuilderStatesTimestampId()
	const randomInt =  useBuilderStatesRandomInt()
    return timestampId + '' + randomInt
}
export const useBuilderFuncCreatePage = async (objForNewPage) => {
    const clientAPI = useSupabaseClient()

    let buffObj = objForNewPage
	const randomInt =  useBuilderFuncGenerateRandomId()
	const bufName = useBuilderStatesTimestampId() + useBuilderStatesTablePages() + useBuilderStatesRandomInt()
	const currentUser = 'vinkovatov2016@yandex.ru'
	const category = useBuilderStatesCategoryPagesBuilder()

	buffObj.path = bufName
	buffObj.page_uid = randomInt
	buffObj.created_by = currentUser
	buffObj.hidden = true
	buffObj.category = category.value

	try {
		await clientAPI
			.from(useBuilderStatesTablePages())
				.insert([ buffObj ])
		await clientAPI
			.from('builder_pages_draft')
				.insert([ buffObj ])
		alert("Page created")
        return bufName
	} catch (error) {
		console.log(error)
	} 
}
export const useBuilderFuncGetPagesPathInCategory = async () => {
    const clientAPI = useSupabaseClient()
	const category = useBuilderStatesCategoryPagesBuilder()
	const table_pages = useBuilderStatesTablePages()

	try {
		const { data: data } = await clientAPI
			.from(table_pages)
				.select('path')
					.eq('category', category.value)
						.eq('active', true)
		return data.map(item => item.path)
	} catch (error) {
		console.log(error)
	} 
}
export const useBuilderFuncGetPageFromBD = async (path) => {
    const clientAPI = useSupabaseClient()
	const category = useBuilderStatesCategoryPagesBuilder()
	const table_pages = useBuilderStatesTablePages()
	try {
		const { data: pageData } = await clientAPI
			.from(table_pages)
				.select('*')
					.match({ active: true, category: category.value, path: path})
						.single()
		return pageData
		
	} catch (error) {
		console.log(error)
	}
}
export const useBuilderFuncCheckUrl = async () => {
    const clientAPI = useSupabaseClient()
	const pageData = useBuilderStatesPageData()
	pageData.value.path = pageData.value.path.trim()
	pageData.value.path = pageData.value.path.replace(/[^\w\d-]/g, '_').toLowerCase()
	const { data: checkingUrl } = await clientAPI
		.from('builder_pages')
		.select(`
			id, path, page_uid
		`)
		.match({
			active: pageData.value.active,
			category: pageData.value.category,
			path: pageData.value.path
		})
	console.log(checkingUrl)
	if (typeof checkingUrl == undefined || checkingUrl == null) return true
	else if (checkingUrl.length < 1) return true
	else if (checkingUrl[0].page_uid == pageData.value.page_uid) return true
	else {
		alert('url is busy')
		pageData.value.path = pageData.value.path + Date.now()
		return false
	}
}
export const useBuilderFuncSavePage = async () => {
    const clientAPI = useSupabaseClient()
	const table_pages = useBuilderStatesTablePages()
	const pageData = useBuilderStatesPageData()
	try {
		const { data2, error2 } = await clientAPI
			.from(table_pages)
				.update({ active: false })
					.match({
						page_uid: pageData.value.page_uid
					})
		if (error2) {
			console.log(error2)
			throw error2
		}

		let objForSavePage = JSON.parse(JSON.stringify(pageData.value))
		objForSavePage.active = true
		objForSavePage.created_by = 'a.vinkovatov@smartcat.ai'
		delete objForSavePage.id
		delete objForSavePage.created_at

		const { data, error } = await clientAPI
			.from(table_pages)
				.insert([ objForSavePage ])
		if (error) {
			console.log(error)
			throw error
		}

		const { data3, error3 } = await clientAPI
			.from('builder_pages_draft')
			.upsert(objForSavePage, { onConflict: 'page_uid' })
			.select()
		
	} catch (error) {
		alert(error.error_description || error.message)
	}
}
export const useBuilderFuncSaveProd = async () => {
    const clientAPI = useSupabaseClient()
	const pageData = useBuilderStatesPageData()
	try {
		let objForSavePage = JSON.parse(JSON.stringify(pageData.value))
		delete objForSavePage.id
		delete objForSavePage.created_at
		delete objForSavePage.active
		delete objForSavePage.lang
		delete objForSavePage.draft

		const { data3, error3 } = await clientAPI
			.from('builder_pages_prod')
			.upsert(objForSavePage, { onConflict: 'page_uid' })
			.select()

		alert("Page changes saved")
		
	} catch (error) {
		alert(error.error_description || error.message)
	}
}
export const useBuilderFuncRemovePage = async () => {
    const clientAPI = useSupabaseClient()
	const table_pages = useBuilderStatesTablePages()
	const pageData = useBuilderStatesPageData()
	try {
		const { data2, error2 } = await clientAPI
			.from(table_pages)
				.update({ active: false })
					.match({
						category: pageData.value.category,
						page_uid: pageData.value.page_uid
					})
		if (error2) {
			console.log(error2)
			throw error2
		}
		const { data3, error3 } = await clientAPI
			.from('builder_pages_prod')
			.delete()
			.eq('page_uid', pageData.value.page_uid)
		if (error3) {
			console.log(error3)
			throw error3
		}
		const { data, error } = await clientAPI
			.from('builder_pages_draft')
			.delete()
			.eq('page_uid', pageData.value.page_uid)
		if (error) {
			console.log(error)
			throw error
		}
	} catch (error) {
		console.log(error)
	} finally {
		pageData.value = null
	}
}
export const useBuilderFuncLoadingFile = async (event, size) => {
	const clientAPI = useSupabaseClient()
	console.log(event.target.files[0].type)
	let loadingFile
	let nameFile
	if (((event.target.files[0].size/1024).toFixed(0)) > size) {
		alert("The file should not be more than " + size + "kb!");
		return ''
	} else {
		loadingFile = event.target.files[0]
		nameFile = Date.now() + event.target.files[0].name.replace(/[^\w\d\.\-]/g, '_')
		try {
			const { data, error } = await clientAPI.storage
				.from('mit-store')
				.upload(nameFile, loadingFile)

			const { data: publicUrl } = await clientAPI.storage
				.from('mit-store')
				.getPublicUrl(data.path)
			console.log(publicUrl.publicUrl)
			return publicUrl.publicUrl
		} catch (error) {
			alert(error)
		}
	}
}