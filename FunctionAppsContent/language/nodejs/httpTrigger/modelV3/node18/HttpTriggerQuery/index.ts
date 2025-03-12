import { AzureFunction, Context, HttpRequest } from "@azure/functions"

/**
 * This function handles HTTP requests and responds with the query parameters.
 * 
 * @param {Context} context - The context object for the function execution.
 * @param {HttpRequest} req - The HTTP request object.
 * @returns {Promise<void>} - A promise that resolves when the function execution is complete.
 */
export const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.res = {
        body: {
            query: req.query,
            dupe: req.query.dupe,
            dupeAll: [req.query.dupe],
        },
    };
};