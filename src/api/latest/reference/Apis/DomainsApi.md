# DomainsApi

All URIs are relative to *https://api.whatstack.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**domainsSearch**](DomainsApi.md#domainsSearch) | **POST** /domains/search | Perform a technology lookup against one or multiple domains


<a name="domainsSearch"></a>
# **domainsSearch**
> List domainsSearch(request\_body)

Perform a technology lookup against one or multiple domains

    Perform a technology lookup against one or multiple domains. TIER 3

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request\_body** | [**List**](../Models/string.md)| An array of domains |

### Return type

[**List**](../Models/DomainsSearchResult.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

