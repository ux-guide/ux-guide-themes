import React from "react";
import {ButtonMessageProps} from "@/themes/theme_provider";

export function ButtonMessage({
  content,
  onClick,
}: ButtonMessageProps) {
  return (
    <button className="form-button" onClick={onClick}>
      {content}
    </button>
  );
}
