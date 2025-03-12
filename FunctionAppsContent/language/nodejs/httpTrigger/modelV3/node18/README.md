# Azure Functions HTTP Triggers

This project contains several HTTP trigger functions. Below is a list of available APIs and their endpoints.

## List of APIs

### HelloWorld Function
- **Endpoint:** `/api/HttpTriggerModelV3Node18/helloWorld`
- **Methods:** GET, POST
- **Description:** Handles HTTP requests and responds with a greeting message.

### HTTP Cookies Function
- **Endpoint:** `/api/HttpTriggerModelV3Node18/httpCookies`
- **Methods:** GET, POST
- **Description:** Handles HTTP requests and responds with cookies.

### HTTP Trigger Query
- **Endpoint:** `/api/HttpTriggerModelV3Node18/httpTriggerQuery`
- **Methods:** GET, POST
- **Description:** Handles HTTP requests and returns query parameters.

### HTTP Trigger Route Params
- **Endpoint:** `/api/HttpTriggerModelV3Node18/httpTriggerRouteParams/{param1}/{param2}`
- **Methods:** GET, POST
- **Description:** Handles HTTP requests and returns route parameters.

## Usage

To use these APIs, send HTTP requests to the specified endpoints using the supported methods. Below are examples of how to use `curl` to test the APIs.

### Example Requests

#### HelloWorld Function
```sh
curl -X GET "https://<your-domain>/api/HttpTriggerModelV3Node18/helloWorld?name=John"
```

#### HTTP Cookies Function
```sh
curl -i "https://<your-domain>/api/HttpTriggerModelV3Node18/httpCookies"
```

#### HTTP Trigger for Hooks
```sh
curl -X GET "http://localhost:7071/api/HttpTriggerModelV3Node18/invocationHooks"
```

#### HTTP Trigger Query
```sh
curl -X GET "https://<your-domain>/api/HttpTriggerModelV3Node18/httpTriggerQuery?dupe=value1&dupe=value2"
```

#### HTTP Trigger Route Params
```sh
curl -X GET "https://<your-domain>/api/HttpTriggerModelV3Node18/httpTriggerRouteParams/John/123"
```

Replace `<your-domain>` with the actual domain where your Azure Functions are hosted.
