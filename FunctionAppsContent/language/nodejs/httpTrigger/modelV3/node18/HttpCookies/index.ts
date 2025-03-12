import { AzureFunction, Context, HttpRequest } from "@azure/functions"

/**
 * This function handles HTTP requests and responds with a personalized message.
 * It also handles pre-invocation (OPTIONS) requests for CORS.
 * 
 * @param {Context} context - The context object for the function execution.
 * @param {HttpRequest} req - The HTTP request object.
 * @returns {Promise<void>} - A promise that resolves when the function execution is complete.
 */
export const httpCookies: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log(`Http function processed request for url "${req.url}"`);

    context.res = {
        cookies: [
            {
                name: 'mycookie',
                value: 'myvalue',
                maxAge: 200000,
            },
            {
                name: 'mycookie2',
                value: 'myvalue',
                path: '/',
                maxAge: '200000',
            },
            {
                name: 'mycookie3-expires',
                value: 'myvalue3-expires',
                maxAge: 0,
            },
            {
                name: 'mycookie4-samesite-lax',
                value: 'myvalue',
                sameSite: 'Lax',
            },
            {
                name: 'mycookie5-samesite-strict',
                value: 'myvalue',
                sameSite: 'Strict',
            },
        ],
    };
};
