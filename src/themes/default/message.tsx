import {Message} from "@/message_types";
import React from "react";
import {ChatboxMessageProps} from "@/theme_provider";

function getSender(msg: Message): string {
    if (msg instanceof Message.Text) {
        return msg.sender;
    } else {
        throw new Error("Unknown message type");
    }
}

function getContent(msg: Message): string {
    if (msg instanceof Message.Text) {
        return msg.content;
    } else {
        throw new Error("Unknown message type");
    }
}

export function ChatboxMessage({message, theme}: ChatboxMessageProps) {
    const {
        TextMessage,
        FormMessage,
        InputMessage,
        ButtonMessage,
        LoaderMessage,
    } = theme;

    if (message instanceof Message.Text) {
        return <TextMessage sender={getSender(message) as "bot" | "user"} content={getContent(message)}/>;
    }
    if (message instanceof Message.Form) {
        return <FormMessage title={message.title} children={message.children}/>;
    }
    if (message instanceof Message.Input) {
        return <InputMessage value={message.value} type={message.type} placeholder={message.placeholder}/>;
    }
    if (message instanceof Message.Button) {
        return <ButtonMessage onClick={message.onClick} content={message.content}/>;
    }
    if (message instanceof Message.Loader) {
        return <LoaderMessage/>;
    }
    return <div>Message of unknown type</div>;
}
