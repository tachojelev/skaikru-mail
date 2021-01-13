import { Recipient } from "./recipient";

export class EmailTemplate {
    title: string;
    subtitle: string;
    message: string;
    placeholders: Array<string>;
    recipients: Array<Recipient>;
}
