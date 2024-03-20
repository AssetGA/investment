"use client";

import React, { useState } from "react";

const CopyButton = ({ text }) => {
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess("Copied!");
    } catch (err) {
      console.error("Failed to copy: ", err);
      setCopySuccess("Failed to copy :(");
    }
  };

  return (
    <div className="flex flex-row">
      <h2 className="px-5 py-1">{text}</h2>
      <button
        onClick={copyToClipboard}
        className="bg-gray-200 hover:bg-gray-400 rounded-sm py-1 px-3 ring-2 ring-slate-300"
      >
        <span>{!copySuccess ? "copy" : copySuccess}</span>
      </button>
    </div>
  );
};

export default CopyButton;
