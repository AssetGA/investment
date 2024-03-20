"use client";

import PropTypes from "prop-types";

const TextField = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  placeholder,
}) => {
  return (
    <div className="mb-4">
      <label className="tracking-wide py-2 px-5">{label}</label>
      <div className="input-group">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="bg-cyan-50 w-72 rounded-md px-2"
          placeholder={placeholder}
        />
        {error && (
          <div className="flex justify-center text-xs text-red-400">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};
TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  placeholder: PropTypes.string,
};

export default TextField;
