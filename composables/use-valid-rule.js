export default function useValidRule(...payload) {

	const regex = {
		email: /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/,
		one_az: /[a-z]+/,
		one_AZ: /[A-Z]+/,
		one_digit: /[0-9]+/,
		one_spec_char: /[^a-zA-Z0-9_]+/,
	}
	const allRules = {
		required: val => !!val,
		email: val => regex.email.test(String(val).toLowerCase()),
		one_az: val => regex.one_az.test(String(val)),
		one_AZ: val => regex.one_AZ.test(String(val)),
		one_digit: val => regex.one_digit.test(String(val)),
		none_digit: val => !regex.one_digit.test(String(val)),
		one_spec_char: val => regex.one_spec_char.test(String(val)),
		regex: regex => val => regex.test(String(val)),
		noregex: regex => val => !regex.test(String(val)),
		minLength: num => val => val.length >= num,
		maxLength: num => val => val.length <= num
	}

	const activeRules = {}

	payload.forEach(item => {
		switch (typeof item) {
			case ("string"):
				if (Object.keys(allRules).includes(item)) activeRules[item] = allRules[item]
				break;
			case ("object"):
				if (item != null 
					&& Object.keys(item).length == 1 
					&& Object.keys(allRules).includes(Object.keys(item)[0])) {
						let key = Object.keys(item)[0]
						let value = Object.values(item)[0]
						activeRules[key] = allRules[key](value)
				}
				break;
			default:
				break;
		} 
	});

	return activeRules
}
