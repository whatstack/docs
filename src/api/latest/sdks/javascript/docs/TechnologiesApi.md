# WhatStackApi.TechnologiesApi

All URIs are relative to *https://api.whatstack.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTechnologies**](TechnologiesApi.md#getTechnologies) | **GET** /technologies | Retreive the list of technologies



## getTechnologies

> [Technology] getTechnologies()

Retreive the list of technologies

Retreive the list of technologies. TIER 3

### Example

```javascript
import WhatStackApi from 'what_stack_api';
let defaultClient = WhatStackApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhatStackApi.TechnologiesApi();
apiInstance.getTechnologies((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Technology]**](Technology.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

