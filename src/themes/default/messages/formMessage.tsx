import { Message } from "@/message_types";
import React from "react";
import {FormMessageProps} from "@/theme_provider";

export function FormMessage({
  theme,
  title,
  children,
}: FormMessageProps) {
  const { ButtonMessage, InputMessage } = theme;

  return (
    <div className="form-message">
      <p>{title}</p>
      {children.map((child, i) => {
        return child instanceof Message.Button ? (
          <ButtonMessage
            key={i}
            content={child.content}
            onClick={child.onClick}
          />
        ) : child instanceof Message.Input ? (
          <InputMessage
            key={i}
            value={child.value}
            type={child.type}
            placeholder={child.placeholder}
          />
        ) : (
          <></>
        );
      })}
    </div>
  );
}
