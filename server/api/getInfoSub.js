import { supabase } from "../libs/supabaseClient.js";
export default defineEventHandler(async (event) => {
	const body = await readBody(event);

	if (body?.type == 'personal')
		try {
			const { data, error } = await supabase
				.from('sub')
				.select(`type, finish`)
				.eq('uuid', body?.uuid)
				.single()
			return {
				type: data?.type ?? 'none',
				finish: data?.finish ?? '0',
				active: Number(data.finish) > Date.now()
			}
		} catch (error) {
			return error
		}
	else if (body?.type == 'company') 
		try {
			const { data, error } = await supabase
				.from('members_nko')
				.select(`type, finish`)
				.eq('uuid', body?.uuid)
				.single()
			return {
				type: data?.type ?? 'none',
				finish: data?.finish ?? '0',
				active: Number(data.finish) > Date.now()
			}
		} catch (error) {
			return error
		}
	else return false
})