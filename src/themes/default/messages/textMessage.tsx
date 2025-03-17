import Markdown from "marked-react";
import React from "react";
import {TextMessageProps} from "@/themes/theme_provider";

export function TextMessage({
  sender,
  content,
}: TextMessageProps) {
  return (
    <div
      className={`message ${sender === "bot" ? "message-bot" : "message-user"}`}
    >
      <div className="message-content">
        <Markdown gfm={true}>{content}</Markdown>
      </div>
    </div>
  );
}
