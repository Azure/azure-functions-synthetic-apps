import { AzureFunction, Context, HttpRequest } from "@azure/functions";

/**
 * This function handles HTTP requests and responds with a personalized message.
 * 
 * @param {Context} context - The context object for the function execution.
 * @param {HttpRequest} req - The HTTP request object.
 * @returns {Promise<void>} - A promise that resolves when the function execution is complete.
 */
const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    // Log the request processing
    context.log('HTTP trigger function processed a request.');

    // Extract route parameters
    const param1 = req.params.param1;
    const param2 = req.params.param2;

    // Create a response message
    const responseMessage = `Received parameters: param1 = ${param1}, param2 = ${param2}`;

    // Set the HTTP response
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
};

export default httpTrigger;