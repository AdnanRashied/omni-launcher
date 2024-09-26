import React from "react";

type TextFieldProps = {
  label: string;
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

const TextField: React.FC<TextFieldProps> = ({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  required = false,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-200"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        className="bg-gray-700 border border-gray-600 text-gray-100 rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
      />
    </div>
  );
};

export default TextField;
