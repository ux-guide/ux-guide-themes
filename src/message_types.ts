import { Writable } from "@/utils";

export type SendPrompt = (message: string) => Promise<void>;

export type SenderType = "bot" | "user";
export type InputType = "normal" | "password";

export interface FormMessage {
  title: string;
  children: Message[];
}

export interface ButtonMessage {
  onClick: () => Promise<void> | void;
  content: string;
}

export interface TextMessage {
  content: string;
  sender: SenderType;
}

export interface InputMessage {
  value: Writable<string>;
  type: InputType;
  placeholder: string;
}

export abstract class Message {
  public static Loader = class extends Message { };

  public static Text = class extends Message {
    public content: string;
    public sender: "bot" | "user";

    constructor(value: TextMessage) {
      super();
      this.content = value.content;
      this.sender = value.sender;
    }
  };

  public static Form = class extends Message {
    public title: string;
    public children: Message[];

    constructor(value: FormMessage) {
      super();
      this.title = value.title;
      this.children = value.children;
    }
  };

  public static Input = class extends Message {
    public value: Writable<string>;
    public type: "normal" | "password";
    public placeholder: string;

    constructor(value: InputMessage) {
      super();
      this.value = value.value;
      this.type = value.type;
      this.placeholder = value.placeholder;
    }
  };

  public static Button = class extends Message {
    public content: string;
    public onClick: () => Promise<void> | void;

    constructor(value: ButtonMessage) {
      super();
      this.content = value.content;
      this.onClick = value.onClick;
    }
  };
}
