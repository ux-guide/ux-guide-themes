import React from "react";
import Arrow from "./assets/Arrow.svg";
import {ChatboxInputProps} from "@/theme_provider";

export function ChatboxInput({
  onChange,
  inputValue,
  sendPrompt,
}: ChatboxInputProps) {
  return (
    <div className="inputContainer">
      <input
        type="text"
        onChange={onChange}
        value={inputValue}
        placeholder="Start typing..."
        className="input"
      />
      <div
        style={{
          display: inputValue.length > 0 ? "flex" : "none",
        }}
        onClick={sendPrompt}
      >
        <img
          src={Arrow}
          style={{
            width: "8px",
          }}
          alt=""
        />
      </div>
    </div>
  );
}
