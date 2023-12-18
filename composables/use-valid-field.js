export default function useValidField(field) {
	const valid = ref(true)

	const touched = ref(false)
	const errors = reactive({})

	const reassign = val => {
		valid.value = true
		Object.keys(field.validators ?? {})
			.forEach(name => {
				const isValid = field.validators[name](val)
				errors[name] = !isValid
				if (!isValid) valid.value = false
			})
	}
	reassign(field.value)

	const valueField = ref(field.value)
	watch(valueField, reassign)

	return reactive({
		value: valueField, 
		valid, 
		errors, 
		touched, 
		blur: () => touched.value = true
	})
}
