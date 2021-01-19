/**
 * Class that contains the API endpoints for the Skaikru Backend Service.
 */
export class SkaikruApi {
    public static readonly HOME: string = 'http://localhost:8080/';
    public static readonly SEND_MAILS: string = 'http://localhost:8080/send-mails';
    public static readonly CREATE_TEMPLATE: string = 'http://localhost:8080/add-template';
    public static readonly FETCH_TEMPLATES: string = 'http://localhost:8080/fetch-templates';
    public static readonly DELETE_TEMPLATE: string = 'http://localhost:8080/delete-template';
}
