import React, { useState } from "react";
import styled from "styled-components";
import {ChatboxProps} from "@/themes/theme_provider";

const ChatboxStyled = styled.div`
  border-radius: 16px;
  background-color: #3d3d3d;
  width: 20vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: fixed;
  bottom: 32px;
  right: 32px;
  color: white;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export function ChatboxComponent(props: ChatboxProps) {
  const [inputValue, setInputValue] = useState("");

  const { ChatboxHeader, ChatboxInput, ChatboxMessages } = props.theme;

  async function sendPrompt() {
    if (!inputValue) {
      return;
    }
    // TODO: handle that potential error
    props.sendPrompt(inputValue || "").catch(console.error);
    setInputValue("");
  }

  return (
    <ChatboxStyled>
      <ChatboxHeader />
      <ChatboxMessages messages={props.messages} sendPrompt={sendPrompt} />
      <ChatboxInput
        onChange={e => setInputValue(e.target.value)}
        inputValue={inputValue}
        sendPrompt={sendPrompt}
      />
    </ChatboxStyled>
  );
}
