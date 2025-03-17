import React from "react";
import {LoaderMessageProps} from "@/theme_provider";

export function LoaderMessage(_props: LoaderMessageProps) {
  return (
    <div className="message message-bot">
      <div className="message-content loader">
        <div className="dot one"></div>
        <div className="dot two"></div>
        <div className="dot three"></div>
      </div>
    </div>
  );
}
