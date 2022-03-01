(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{457:function(t,a,s){"use strict";s.r(a);var e=s(36),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"what-stack-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-stack-api"}},[t._v("#")]),t._v(" what_stack_api")]),t._v(" "),s("p",[t._v("WhatStackApi - JavaScript client for what_stack_api\nVisit our "),s("a",{attrs:{href:"https://docs.whatstack.io/api/",target:"_blank",rel:"noopener noreferrer"}},[t._v("API documentation"),s("OutboundLink")],1),t._v(" for more information.")]),t._v(" "),s("p",[t._v("This SDK is automatically generated by the "),s("a",{attrs:{href:"https://openapi-generator.tech",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenAPI Generator"),s("OutboundLink")],1),t._v(" project:")]),t._v(" "),s("ul",[s("li",[t._v("API version: 1.0.0")]),t._v(" "),s("li",[t._v("Package version: 1.0.0")]),t._v(" "),s("li",[t._v("Build package: org.openapitools.codegen.languages.JavascriptClientCodegen\nFor more information, please visit "),s("a",{attrs:{href:"https://docs.whatstack.io/api",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.whatstack.io/api"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("h3",{attrs:{id:"for-node-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#for-node-js"}},[t._v("#")]),t._v(" For "),s("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"npm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm"}},[t._v("#")]),t._v(" npm")]),t._v(" "),s("p",[t._v("To publish the library as a "),s("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm"),s("OutboundLink")],1),t._v(", please follow the procedure in "),s("a",{attrs:{href:"https://docs.npmjs.com/getting-started/publishing-npm-packages",target:"_blank",rel:"noopener noreferrer"}},[t._v('"Publishing npm packages"'),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("Then install it via:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" what_stack_api --save\n")])])]),s("p",[t._v("Finally, you need to build the module:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n")])])]),s("h5",{attrs:{id:"local-development"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#local-development"}},[t._v("#")]),t._v(" Local development")]),t._v(" "),s("p",[t._v("To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing "),s("code",[t._v("package.json")]),t._v(" (and this README). Let's call this "),s("code",[t._v("JAVASCRIPT_CLIENT_DIR")]),t._v(". Then run:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),s("p",[t._v("Next, "),s("a",{attrs:{href:"https://docs.npmjs.com/cli/link",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),s("OutboundLink")],1),t._v(" it globally in npm with the following, also from "),s("code",[t._v("JAVASCRIPT_CLIENT_DIR")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("link")]),t._v("\n")])])]),s("p",[t._v("To use the link you just defined in your project, switch to the directory you want to use your what_stack_api from, and run:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("link")]),t._v(" /path/to/"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("JAVASCRIPT_CLIENT_DIR"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("Finally, you need to build the module:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n")])])]),s("h4",{attrs:{id:"git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" git")]),t._v(" "),s("p",[t._v("If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID\nthen install it via:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" GIT_USER_ID/GIT_REPO_ID --save\n")])])]),s("h3",{attrs:{id:"for-browser"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#for-browser"}},[t._v("#")]),t._v(" For browser")]),t._v(" "),s("p",[t._v("The library also works in the browser environment via npm and "),s("a",{attrs:{href:"http://browserify.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("browserify"),s("OutboundLink")],1),t._v(". After following\nthe above steps with Node.js and installing browserify with "),s("code",[t._v("npm install -g browserify")]),t._v(",\nperform the following (assuming "),s("em",[t._v("main.js")]),t._v(" is your entry file):")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("browserify main.js "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" bundle.js\n")])])]),s("p",[t._v("Then include "),s("em",[t._v("bundle.js")]),t._v(" in the HTML pages.")]),t._v(" "),s("h3",{attrs:{id:"webpack-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-configuration"}},[t._v("#")]),t._v(" Webpack Configuration")]),t._v(" "),s("p",[t._v('Using Webpack you may encounter the following error: "Module not found: Error:\nCannot resolve module", most certainly you should disable AMD loader. Add/merge\nthe following section to your webpack config:')]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("module")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("rules")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("parser")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("amd")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),s("p",[t._v("Please follow the "),s("a",{attrs:{href:"#installation"}},[t._v("installation")]),t._v(" instruction and execute the following JS code:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" WhatStackApi "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'what_stack_api'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" defaultClient "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" WhatStackApi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ApiClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Configure API key authorization: ApiKeyAuth")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ApiKeyAuth "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" defaultClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("authentications"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ApiKeyAuth'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nApiKeyAuth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apiKey "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YOUR API KEY"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//ApiKeyAuth.apiKeyPrefix['X-API-KEY'] = \"Token\"")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" api "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WhatStackApi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DomainsApi")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" requestBody "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"null"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// {[String]} An array of domains")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("callback")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'API called successfully. Returned data: '")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("domainsSearch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("requestBody"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"documentation-for-api-endpoints"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#documentation-for-api-endpoints"}},[t._v("#")]),t._v(" Documentation for API Endpoints")]),t._v(" "),s("p",[t._v("All URIs are relative to "),s("em",[t._v("https://api.whatstack.io")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Class")]),t._v(" "),s("th",[t._v("Method")]),t._v(" "),s("th",[t._v("HTTP request")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("em",[t._v("WhatStackApi.DomainsApi")])]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/api/latest/sdks/javascript/docs/DomainsApi.html#domainsSearch"}},[s("strong",[t._v("domainsSearch")])])],1),t._v(" "),s("td",[s("strong",[t._v("POST")]),t._v(" /domains/search")]),t._v(" "),s("td",[t._v("Perform a technology lookup against one or multiple domains")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("WhatStackApi.TechnologiesApi")])]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/api/latest/sdks/javascript/docs/TechnologiesApi.html#getTechnologies"}},[s("strong",[t._v("getTechnologies")])])],1),t._v(" "),s("td",[s("strong",[t._v("GET")]),t._v(" /technologies")]),t._v(" "),s("td",[t._v("Retreive the list of technologies")])])])]),t._v(" "),s("h2",{attrs:{id:"documentation-for-models"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#documentation-for-models"}},[t._v("#")]),t._v(" Documentation for Models")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/api/latest/sdks/javascript/docs/ApiError.html"}},[t._v("WhatStackApi.ApiError")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/latest/sdks/javascript/docs/ApiErrorError.html"}},[t._v("WhatStackApi.ApiErrorError")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/latest/sdks/javascript/docs/ApiErrorErrorInnerError.html"}},[t._v("WhatStackApi.ApiErrorErrorInnerError")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/latest/sdks/javascript/docs/DomainsSearchResult.html"}},[t._v("WhatStackApi.DomainsSearchResult")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/latest/sdks/javascript/docs/Technology.html"}},[t._v("WhatStackApi.Technology")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/latest/sdks/javascript/docs/TechnologyResult.html"}},[t._v("WhatStackApi.TechnologyResult")])],1)]),t._v(" "),s("h2",{attrs:{id:"documentation-for-authorization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#documentation-for-authorization"}},[t._v("#")]),t._v(" Documentation for Authorization")]),t._v(" "),s("h3",{attrs:{id:"apikeyauth"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apikeyauth"}},[t._v("#")]),t._v(" ApiKeyAuth")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type")]),t._v(": API key")]),t._v(" "),s("li",[s("strong",[t._v("API key parameter name")]),t._v(": X-API-KEY")]),t._v(" "),s("li",[s("strong",[t._v("Location")]),t._v(": HTTP header")])])])}),[],!1,null,null,null);a.default=n.exports}}]);