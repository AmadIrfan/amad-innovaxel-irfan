import React from "react";

interface InputFieldProps {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({
	value,
	onChange,
	placeholder,
}) => {
	return (
		<input
			type="text"
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			className="w-full p-2 border rounded mb-4"
		/>
	);
};

export default InputField;
