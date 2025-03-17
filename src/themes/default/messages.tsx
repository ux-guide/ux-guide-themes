import React, { useEffect } from "react";
import styled from "styled-components";
import {ChatboxMessagesProps} from "@/theme_provider";

const MessagesStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px 32px;
  overflow-y: auto;
  height: 100%;
`;

export function ChatboxMessages({
  theme,
  messages,
  sendPrompt,
}: ChatboxMessagesProps) {
  const { ChatboxMessage } = theme;

  function scrollToBottom() {
    const messagesContainer = document.querySelector(
      "." + MessagesStyled.styledComponentId
    );
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        sendPrompt();
      }
    };

    scrollToBottom();
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <MessagesStyled>
      {messages.map((message, i) => (
        <ChatboxMessage key={i} message={message} />
      ))}
    </MessagesStyled>
  );
}
