/**
 * WhatStack API
 * Visit our [API documentation](https://docs.whatstack.io/api/) for more information. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@nbold.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.WhatStackApi);
  }
}(this, function(expect, WhatStackApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new WhatStackApi.ApiErrorError();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ApiErrorError', function() {
    it('should create an instance of ApiErrorError', function() {
      // uncomment below and update the code to test ApiErrorError
      //var instance = new WhatStackApi.ApiErrorError();
      //expect(instance).to.be.a(WhatStackApi.ApiErrorError);
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instance = new WhatStackApi.ApiErrorError();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new WhatStackApi.ApiErrorError();
      //expect(instance).to.be();
    });

    it('should have the property innerError (base name: "innerError")', function() {
      // uncomment below and update the code to test the property innerError
      //var instance = new WhatStackApi.ApiErrorError();
      //expect(instance).to.be();
    });

  });

}));
