import { ThemeProvider } from "./theme_provider";

export { ThemeProvider };
export { Writable } from "./utils";
export { Message } from "./message_types";
export type { SenderType, InputType, SendPrompt } from './message_types';

export const defaultTheme = () => new ThemeProvider();
