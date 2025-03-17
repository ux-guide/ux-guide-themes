import React from "react";
import {InputMessageProps} from "@/themes/theme_provider";

export function InputMessage({
  value,
  type,
  placeholder,
}: InputMessageProps) {
  return (
    <div className="form-input-container">
      <input
        className="form-input input"
        type={type}
        placeholder={placeholder}
        defaultValue={value.value}
        onChange={e => value.set(e.target.value)}
      />
      <span>&#9998;</span>
    </div>
  );
}
