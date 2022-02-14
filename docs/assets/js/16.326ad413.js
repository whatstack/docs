(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{451:function(t,a,s){"use strict";s.r(a);var e=s(36),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"whatstackapi-technologiesapi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#whatstackapi-technologiesapi"}},[t._v("#")]),t._v(" WhatStackApi.TechnologiesApi")]),t._v(" "),s("p",[t._v("All URIs are relative to "),s("em",[t._v("https://api.whatstack.io")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Method")]),t._v(" "),s("th",[t._v("HTTP request")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("RouterLink",{attrs:{to:"/api/latest/sdks/javascript/docs/TechnologiesApi.html#getTechnologies"}},[s("strong",[t._v("getTechnologies")])])],1),t._v(" "),s("td",[s("strong",[t._v("GET")]),t._v(" /technologies")]),t._v(" "),s("td",[t._v("Retreive the list of technologies")])])])]),t._v(" "),s("h2",{attrs:{id:"gettechnologies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gettechnologies"}},[t._v("#")]),t._v(" getTechnologies")]),t._v(" "),s("blockquote",[s("p",[t._v("[Technology] getTechnologies()")])]),t._v(" "),s("p",[t._v("Retreive the list of technologies")]),t._v(" "),s("p",[t._v("Retreive the list of technologies. TIER 3")]),t._v(" "),s("h3",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" WhatStackApi "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'what_stack_api'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" defaultClient "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" WhatStackApi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ApiClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Configure API key authorization: ApiKeyAuth")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" ApiKeyAuth "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" defaultClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("authentications"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ApiKeyAuth'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nApiKeyAuth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apiKey "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YOUR API KEY'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//ApiKeyAuth.apiKeyPrefix = 'Token';")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" apiInstance "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WhatStackApi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TechnologiesApi")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napiInstance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTechnologies")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'API called successfully. Returned data: '")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("p",[t._v("This endpoint does not need any parameter.")]),t._v(" "),s("h3",{attrs:{id:"return-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#return-type"}},[t._v("#")]),t._v(" Return type")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/api/latest/sdks/javascript/docs/Technology.html"}},[s("strong",[t._v("[Technology]")])])],1),t._v(" "),s("h3",{attrs:{id:"authorization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authorization"}},[t._v("#")]),t._v(" Authorization")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/api/latest/sdks/javascript/#ApiKeyAuth"}},[t._v("ApiKeyAuth")])],1),t._v(" "),s("h3",{attrs:{id:"http-request-headers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-request-headers"}},[t._v("#")]),t._v(" HTTP request headers")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Content-Type")]),t._v(": Not defined")]),t._v(" "),s("li",[s("strong",[t._v("Accept")]),t._v(": application/json")])])])}),[],!1,null,null,null);a.default=n.exports}}]);