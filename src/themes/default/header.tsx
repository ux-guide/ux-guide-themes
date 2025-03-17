import React from "react";
import {ChatboxHeaderProps} from "@/theme_provider";

export function ChatboxHeader(_props: ChatboxHeaderProps) {
  return (
    <div className="chatbox-header">
      <p>UX Guide</p>
      <p className="close">&#x2715;</p>
    </div>
  );
}
