export default function validate(values) {
	let errors = {};
	if (!values.name) {
		errors.name = "Required Name"
	} else if (!values.name.length < 3 && !values.name === "") {
		errors.name = "Name is invalid";
	}
	if (!values.portfolio) {
		errors.portfolio = "Required Portfolio"
	} else if (!/(http[s]?:\/\/)?[^\s(["<,>]*\.[^\s[",><]*/.test(values.portfolio)) {
		errors.portfolio = "Portfolio is invalid";
	}

	if (!values.image) {
		errors.image = "Required Image"
	} else if (!/\.(gif|jpg|jpeg|tiff|png)$/i.test(values.image)) {
		errors.image = "Image is invalid";
	}

	if (!values.job) {
		errors.job = "Required job"
	} else if (values.job.length < 2) {
		errors.job = "Job is invalid";
	}

	if (!values.email) {
		errors.email = "Required Email"
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = "Email address is invalid";
	}
	return errors;
}
