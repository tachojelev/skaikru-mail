import { EmailTemplate } from "./email-template";
import { Recipient } from "./recipient";

export class EmailRequest extends EmailTemplate {
    recipients: Array<Recipient>;
}
