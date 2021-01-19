import { EmailTemplate } from "./email-template";
import { Recipient } from "./recipient";

export class SendMailRequest extends EmailTemplate {
    recipients: Array<Recipient>;
}
