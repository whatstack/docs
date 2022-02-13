# WhatStackApi.DomainsApi

All URIs are relative to *https://api.whatstack.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**domainsSearch**](DomainsApi.md#domainsSearch) | **POST** /domains/search | Perform a technology lookup against one or multiple domains



## domainsSearch

> [DomainsSearchResult] domainsSearch(requestBody)

Perform a technology lookup against one or multiple domains

Perform a technology lookup against one or multiple domains. TIER 3

### Example

```javascript
import WhatStackApi from 'what_stack_api';
let defaultClient = WhatStackApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatStackApi.DomainsApi();
let requestBody = ["null"]; // [String] | An array of domains
apiInstance.domainsSearch(requestBody, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestBody** | [**[String]**](String.md)| An array of domains | 

### Return type

[**[DomainsSearchResult]**](DomainsSearchResult.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

