export default function useValidForm(init = {}) {
	const form = reactive({})

	for (const [key, value] of Object.entries(init)) {
		form[key] = useValidField(value)
	}

	form.valid = computed(
		() => Object
			.keys(form)
			.filter(key => key != 'valid')
			.every(key => form[key].valid)
	)

	// form.allTouch = () => {
	// 	Object.keys(form)
	// 		.forEach(key => {
	// 			if (key != 'valid') form[key].touched = true
	// 		})
	// }

	// form.resetTouch = () => {
	// 	Object.keys(form)
	// 		.forEach(key => {
	// 			if (key != 'valid') form[key].touched = false
	// 		})
	// }

	return form
}
