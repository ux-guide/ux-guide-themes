import React, {ChangeEvent} from "react";
import {ChatboxComponent} from "@/themes/default/chatbox";
import {Message, Writable} from "@@/src";
import {SendPrompt} from "@/message_types";
import {ChatboxHeader} from "@/themes/default/header";
import {ChatboxInput} from "@/themes/default/input";
import {ChatboxMessages} from "@/themes/default/messages";
import {ChatboxMessage} from "@/themes/default/message";
import {ButtonMessage} from "@/themes/default/messages/buttonMessage";
import {TextMessage} from "@/themes/default/messages/textMessage";
import {LoaderMessage} from "@/themes/default/messages/loaderMessage";
import {FormMessage} from "@/themes/default/messages/formMessage";
import {InputMessage} from "@/themes/default/messages/inputMessage";

type Component<T> = (props: T) => React.JSX.Element;

type ChatboxPropsNoTheme = Omit<ChatboxProps, "theme">;
type ChatboxHeaderPropsNoTheme = Omit<ChatboxHeaderProps, "theme">;
type ChatboxInputPropsNoTheme = Omit<ChatboxInputProps, "theme">;
type ChatboxMessagesPropsNoTheme = Omit<ChatboxMessagesProps, "theme">;
type ChatboxMessagePropsNoTheme = Omit<ChatboxMessageProps, "theme">;

type ButtonMessagePropsNoTheme = Omit<ButtonMessageProps, "theme">;
type TextMessagePropsNoTheme = Omit<TextMessageProps, "theme">;
type LoaderMessagePropsNoTheme = Omit<LoaderMessageProps, "theme">;
type FormMessagePropsNoTheme = Omit<FormMessageProps, "theme">;
type InputMessagePropsNoTheme = Omit<InputMessageProps, "theme">;

export interface ChatboxProps {
    theme: ThemeProvider;
    messages: Message[];
    sendPrompt: SendPrompt;
}

export type ChatboxHeaderProps = {
    theme: ThemeProvider;
};

export interface ChatboxInputProps {
    theme: ThemeProvider;
    onChange: (value: ChangeEvent<HTMLInputElement>) => void;
    inputValue: string;
    sendPrompt: () => void;
}

export interface ChatboxMessagesProps {
    theme: ThemeProvider;
    messages: Message[];
    sendPrompt: () => void;
}

export interface ChatboxMessageProps {
    theme: ThemeProvider;
    message: Message;
}

export interface ButtonMessageProps {
    theme: ThemeProvider;
    content: string;
    onClick: () => Promise<void> | void;
}

export interface TextMessageProps {
    theme: ThemeProvider;
    sender: "bot" | "user";
    content: string;
}

export interface LoaderMessageProps {
    theme: ThemeProvider;
}

export interface FormMessageProps {
    theme: ThemeProvider;
    title: string;
    children: Message[];
}

export interface InputMessageProps {
    theme: ThemeProvider;
    value: Writable<string>;
    type: "normal" | "password";
    placeholder: string;
}

export class ThemeProvider {
    // Takes a component and injects the theme prop into it
    private injectTheme<T>(component: (props: T & { theme: ThemeProvider }) => React.JSX.Element) {
        return (props: T) => component({...props, theme: this});
    }

    // --- Default chatbox components ---
    private chatbox = this.injectTheme<ChatboxPropsNoTheme>(ChatboxComponent);
    private chatboxHeader = this.injectTheme<ChatboxHeaderPropsNoTheme>(ChatboxHeader);
    private chatboxInput = this.injectTheme<ChatboxInputPropsNoTheme>(ChatboxInput);
    private chatboxMessages = this.injectTheme<ChatboxMessagesPropsNoTheme>(ChatboxMessages);
    private chatboxMessage = this.injectTheme<ChatboxMessagePropsNoTheme>(ChatboxMessage);

    // --- Default message components ---
    private buttonMessage = this.injectTheme<ButtonMessagePropsNoTheme>(ButtonMessage);
    private textMessage = this.injectTheme<TextMessagePropsNoTheme>(TextMessage);
    private loaderMessage = this.injectTheme<LoaderMessagePropsNoTheme>(LoaderMessage);
    private formMessage = this.injectTheme<FormMessagePropsNoTheme>(FormMessage);
    private inputMessage = this.injectTheme<InputMessagePropsNoTheme>(InputMessage);

    public get Chatbox() {
        return this.chatbox;
    }

    public set Chatbox(value: Component<ChatboxPropsNoTheme>) {
        this.chatbox = this.injectTheme(value);
    }

    public get ChatboxHeader() {
        return this.chatboxHeader;
    }

    public set ChatboxHeader(value: Component<ChatboxHeaderPropsNoTheme>) {
        this.chatboxHeader = this.injectTheme(value);
    }

    public get ChatboxInput() {
        return this.chatboxInput;
    }

    public set ChatboxInput(value: Component<ChatboxInputPropsNoTheme>) {
        this.chatboxInput = this.injectTheme(value);
    }

    public get ChatboxMessages() {
        return this.chatboxMessages;
    }

    public set ChatboxMessages(value: Component<ChatboxMessagesPropsNoTheme>) {
        this.chatboxMessages = this.injectTheme(value);
    }

    public get ChatboxMessage() {
        return this.chatboxMessage;
    }

    public set ChatboxMessage(value: Component<ChatboxMessagePropsNoTheme>) {
        this.chatboxMessage = this.injectTheme(value);
    }

    public get ButtonMessage() {
        return this.buttonMessage;
    }

    public set ButtonMessage(value: Component<ButtonMessagePropsNoTheme>) {
        this.buttonMessage = this.injectTheme(value);
    }

    public get TextMessage() {
        return this.textMessage;
    }

    public set TextMessage(value: Component<TextMessagePropsNoTheme>) {
        this.textMessage = this.injectTheme(value);
    }

    public get LoaderMessage() {
        return this.loaderMessage;
    }

    public set LoaderMessage(value: Component<LoaderMessagePropsNoTheme>) {
        this.loaderMessage = this.injectTheme(value);
    }

    public get FormMessage() {
        return this.formMessage;
    }

    public set FormMessage(value: Component<FormMessagePropsNoTheme>) {
        this.formMessage = this.injectTheme(value);
    }

    public get InputMessage() {
        return this.inputMessage;
    }

    public set InputMessage(value: Component<InputMessagePropsNoTheme>) {
        this.inputMessage = this.injectTheme(value);
    }

    public copyThemeFrom(theme: ThemeProvider) {
        this.Chatbox = theme.Chatbox;
        this.ChatboxHeader = theme.ChatboxHeader;
        this.ChatboxInput = theme.ChatboxInput;
        this.ChatboxMessages = theme.ChatboxMessages;
        this.ChatboxMessage = theme.ChatboxMessage;

        this.ButtonMessage = theme.ButtonMessage;
        this.TextMessage = theme.TextMessage;
        this.LoaderMessage = theme.LoaderMessage;
        this.FormMessage = theme.FormMessage;
        this.InputMessage = theme.InputMessage;
    }
}