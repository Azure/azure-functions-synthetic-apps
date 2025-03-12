# Azure Functions HTTP Triggers

This project contains several HTTP trigger functions. Below is a list of available APIs and their endpoints.

## List of APIs

### HelloWorld Function
- **Endpoint:** `/api/httpTriggerModeV4Node22/helloWorld`
- **Methods:** GET, POST
- **Description:** Handles HTTP requests and responds with a greeting message.

### HTTP Cookies Function
- **Endpoint:** `/api/httpTriggerModeV4Node22/httpCookies`
- **Methods:** GET, POST
- **Description:** Handles HTTP requests and responds with cookies.

### HTTP Trigger for Hooks
- **Endpoint:** `/api/httpTriggerModeV4Node22/invocationHooks`
- **Methods:** GET, POST
- **Description:** Handles HTTP requests and logs an additional input.

### HTTP Trigger Query
- **Endpoint:** `/api/httpTriggerModeV4Node22/httpTriggerQuery`
- **Methods:** GET, POST
- **Description:** Handles HTTP requests and returns query parameters.

### HTTP Trigger Route Params
- **Endpoint:** `/api/httpTriggerModeV4Node22/httpTriggerRouteParams/{name}/{id}`
- **Methods:** GET, POST
- **Description:** Handles HTTP requests and returns route parameters.

## Usage

To use these APIs, send HTTP requests to the specified endpoints using the supported methods. Below are examples of how to use `curl` to test the APIs.

### Example Requests

#### HelloWorld Function
```sh
curl -X GET "https://<your-domain>/api/httpTriggerModeV4Node22/helloWorld?name=John"
```

#### HTTP Cookies Function
```sh
curl -i "https://<your-domain>/api/httpTriggerModeV4Node22/httpCookies"
```

#### HTTP Trigger for Hooks
```sh
curl.exe -X GET "http://localhost:7071/api/httpTriggerModeV4Node22/invocationHooks" 
```

#### HTTP Trigger Query
```sh
curl -X GET "https://<your-domain>/api/httpTriggerModeV4Node22/httpTriggerQuery?dupe=value1&dupe=value2"
```

#### HTTP Trigger Route Params
```sh
curl -X GET "https://<your-domain>/api/httpTriggerModeV4Node22/httpTriggerRouteParams/John/123"
```

Replace `<your-domain>` with the actual domain where your Azure Functions are hosted.
