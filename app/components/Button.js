"use client";

import React from "react";

const Button = ({ className, buttonName, handleClick }) => {
  return (
    <button onClick={handleClick} className={className}>
      {buttonName}
    </button>
  );
};

export default Button;
