import { AzureFunction, Context, HttpRequest } from "@azure/functions"

export const helloWorld: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = "Hello World!";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };

};
