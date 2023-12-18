import { supabase } from "./../libs/supabaseClient.js";
export default defineEventHandler(async (event) => {
	const query = getQuery(event)
	const queryPath = query?.path ? query?.path : 'main'
	const queryCategory = query?.category ? query?.category : 'main'

	const { data: page, error } = await supabase
	.from('builder_pages')
		.select('hidden, meta, custom, ru')
			.match({ active: true, path: queryPath, category: queryCategory })
				.single()
	console.log(page)
	console.log(error)
	return !!page ? page : false
})
