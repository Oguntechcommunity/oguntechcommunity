import React from "react";

const FormInput = ({ handleChange, label, ...props }) => (
	<div className="form-group">
		<input onChange={handleChange} {...props} />
	</div>
);

export default FormInput;
