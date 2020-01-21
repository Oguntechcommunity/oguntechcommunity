export default function validate(values) {
	let errors = {};
	if (!values.full_name) {
		errors.full_name = "Required Name";
	} else if (!values.full_name.length < 3 && !values.full_name === "") {
		errors.full_name = "Name is invalid";
	}
	if (!values.portfolio) {
		errors.portfolio = "Required Portfolio";
	} else if (
		!/(http[s]?:\/\/)?[^\s(["<,>]*\.[^\s[",><]*/.test(values.portfolio)
	) {
		errors.portfolio = "Portfolio is invalid";
	}

	if (!values.avatar) {
		errors.avatar = "Required Image";
	} else if (!/\.(gif|jpg|jpeg|tiff|png)$/i.test(values.avatar)) {
		errors.avatar = "Image is invalid";
	}

	if (!values.job_title) {
		errors.job_title = "Required job";
	} else if (values.job_title.length < 2) {
		errors.job_title = "Job is invalid";
	}

	if (!values.email_address) {
		errors.email_address = "Required Email";
	} else if (!/\S+@\S+\.\S+/.test(values.email_address)) {
		errors.email_address = "Email address is invalid";
	}
	return errors;
}
