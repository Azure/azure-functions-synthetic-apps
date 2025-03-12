import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

/**
 * Handles HTTP requests and responds with a greeting message.
 * 
 * @param {HttpRequest} request - The HTTP request object.
 * @param {InvocationContext} context - The context for the function invocation.
 * @returns {Promise<HttpResponseInit>} - The HTTP response object.
 */
export async function helloWorld(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get('name') || await request.text() || 'world';

    return { body: `Hello, ${name}!` };
}

export async function httpCookies(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    return {
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
                maxAge: 200000,
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
}

/**
 * Pre-invocation hook.
 * 
 * @param {HttpRequest} request - The HTTP request object.
 * @param {InvocationContext} context - The context for the function invocation.
 * @returns {Promise<HttpResponseInit | null>} - The HTTP response object if validation fails, otherwise null.
 */
async function preInvocationHook(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit | null> {
    // Example: Validate the presence of a query parameter
    context.log('Pre-invocation hook executed');

    if (!request.query.get('name')) {
        context.log('Validation failed: "name" parameter is required.');
        return { status: 400, body: 'Validation failed: "name" parameter is required.' };
    }
    // If validation passes, return null
    return null;
}

/**
 * Handles invocation hooks.
 * 
 * @param {HttpRequest} request - The HTTP request object.
 * @param {InvocationContext} context - The context for the function invocation.
 * @returns {Promise<HttpResponseInit>} - The HTTP response object.
 */
export async function invocationHooks(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    // Run the pre-invocation hook
    const validationResponse = await preInvocationHook(request, context);
    if (validationResponse) {
        return validationResponse;
    }

    context.log(`Invocation hook triggered for url "${request.url}"`);
    return { body: 'Invocation hook response' };
}

export async function httpTriggerQuery(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    return {
        jsonBody: {
            query: Object.fromEntries(request.query),
            dupe: request.query.get('dupe'),
            dupeAll: request.query.getAll('dupe'),
        },
    };
}

export async function httpTriggerRouteParams(
    request: HttpRequest,
    context: InvocationContext
): Promise<HttpResponseInit> {
    return { jsonBody: request.params };
}

app.http('httpTriggerRouteParams', {
    methods: ['GET', 'POST'],
    route: 'httpTriggerModeV4Node22/httpTriggerRouteParams/{name}/{id}',
    authLevel: 'anonymous',
    handler: httpTriggerRouteParams
});

app.http('httpTriggerQuery', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: httpTriggerQuery,
    route: 'httpTriggerModeV4Node22/httpTriggerQuery'
});

app.http('httpCookies', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: httpCookies,
    route: 'httpTriggerModeV4Node22/httpCookies'
});

// Configure the HTTP endpoint with the specified path, methods, and handler function.
app.http('helloWorldFunction', { // Use a valid function name
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: helloWorld,
    route: 'httpTriggerModeV4Node22/helloWorld'
});

// Configure the HTTP endpoint with the specified path, methods, and handler function.
app.http('invocationHooks', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: invocationHooks,
    route: 'httpTriggerModeV4Node22/invocationHooks'
});
