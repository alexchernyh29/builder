import { supabase } from "./../libs/supabaseClient.js";
export default defineEventHandler(async (event) => {
	const query = getQuery(event)
	const queryKey = query?.key ? query?.key : 'blog'
	try {
		const { data: request } = await supabase
		.from('settings')
			.select(`id, topic_id, key, json, tags, autor`)
				.eq('key', queryKey)
		return request[0]
	} catch (error) {
		return error
	}
})
