import React, { useState, useEffect } from "react";

const useForm = (initialState, callback, validate) => {
	const [values, setValues] = useState(initialState);
	const [errors, setErrors] = useState({});
	const [isSubmitting, setSubmitting] = React.useState(false);

	useEffect(() => {
		if (isSubmitting) {
			const noErrors = Object.keys(errors).length === 0;
			if (noErrors) {
				console.log("authenticated!", values.email_address, values.full_name);
				setSubmitting(false);
				callback();
			} else {
				setSubmitting(false);
			}
		}
	}, [errors]);

	const handleChange = event => {
		event.preventDefault();
		const { name, value } = event.target;
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		const validationErrors = validate(values);
		setErrors(validationErrors);
		setSubmitting(true);
	};

	const handleBlur = () => {
		const validationErrors = validate(values);
		setErrors(validationErrors);

	};

	return {
		handleSubmit,
		handleChange,
		handleBlur,
		values,
		errors,
		isSubmitting
	};
};

export default useForm;
