# Documentation for WhatStack API

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *https://api.whatstack.io*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DomainsApi* | [**domainsSearch**](Apis/DomainsApi.md#domainssearch) | **POST** /domains/search | Perform a technology lookup against one or multiple domains
*TechnologiesApi* | [**getTechnologies**](Apis/TechnologiesApi.md#gettechnologies) | **GET** /technologies | Retreive the list of technologies


<a name="documentation-for-models"></a>
## Documentation for Models

 - [ApiError](./Models/ApiError.md)
 - [ApiError_error](./Models/ApiError_error.md)
 - [ApiError_error_innerError](./Models/ApiError_error_innerError.md)
 - [DomainsSearchResult](./Models/DomainsSearchResult.md)
 - [Technology](./Models/Technology.md)
 - [TechnologyResult](./Models/TechnologyResult.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="ApiKeyAuth"></a>
### ApiKeyAuth

- **Type**: API key
- **API key parameter name**: X-API-KEY
- **Location**: HTTP header

