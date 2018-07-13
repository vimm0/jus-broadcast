// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(5);
var isBuffer = __webpack_require__(19);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(68);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: "Helper",
  data: function data() {
    return {
      activeTab: 0,
      videosObject: '',
      // isComponentModalActive: false,
      hideButton: true
    };
  },

  filters: {
    truncate: function truncate(text, stop, clamp) {
      return text.split(" ").slice(0, stop).join(" ") + (stop < text.length ? clamp || "  ..." : "");
    },
    capitalizeText: function capitalizeText(data) {
      return data.replace(/\b\w/g, function (l) {
        return l.toUpperCase();
      });
    }
  },
  methods: {
    checkUserLogin: function checkUserLogin() {
      if (this.$store.state.user !== null) {
        // console.log('Authorized')
        return true;
      } else {
        // console.log('Un-Authorized')
        return false;
      }
    },

    signUpComplete: function signUpComplete(updatedTab) {
      // Usage: ModalAuthentication, Navbar
      // this.activeTab = 1 // reach conceptual $emit (child-parent) data passing but at last applied hardwired value for activeTab.
      // if (updatedTab === 1) {
      // this.$snackbar.open({
      //   duration: 5000,
      //   message: this.$options.filters.capitalizeText(' Sign Up Completed '),
      //   type: 'is-success',
      //   position: 'is-top'
      // })
      // }
      this.activeTab = updatedTab;
    },
    // openModal () {
    //   // this.$route.router.push('/modal')
    //   this.isComponentModalActive = !this.isComponentModalActive
    // },
    chunkedVideo: function chunkedVideo(val) {
      var chunk = __webpack_require__(13);
      return chunk(val, 4);
    },
    chunkedHomeVideo: function chunkedHomeVideo(videos) {
      var counter = [];
      var chunk = __webpack_require__(13);
      videos.forEach(function (element) {
        if (element.is_completed === true) {
          counter.unshift(element);
        }
      });
      global.Vue.set(this.$data, 'videosObject', counter.length);
      if (counter.length > 4) {
        this.addLoadMoreButtonForVideoList();
      }
      return chunk(videos, 4);
    },
    shuffleArray: function shuffleArray(array) {
      // Using Durstenfeld shuffle algorithm.
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    },
    sliderChunked: function sliderChunked(objs) {
      var filterSlugId = this.$route.params.slugId;
      var filtered = objs.filter(function (el) {
        return el.id !== Number(filterSlugId);
      });
      return this.shuffleArray(filtered.slice(0, 3));
    },
    addLoadMoreButtonForVideoList: function addLoadMoreButtonForVideoList() {
      global.Vue.set(this.$data, 'hideButton', false);
    },
    getDescription: function getDescription(data) {
      if (this.showMore === false) {
        data.length > 20 ? this.moreOrLess = "More" : this.showMore = false;
        return this.$options.filters.truncate(data, 20, " ...");
      } else if (this.showMore === true) {
        this.moreOrLess = "Less";
        return data;
      }
    },
    tzDateToJsDate: function tzDateToJsDate(date) {
      var ts = new Date(date);
      return ts.toLocaleDateString("en-US");
    },
    humanizeCount: function humanizeCount(count) {
      if (count > 1) {
        return "s";
      } else {
        return "";
      }
    }
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(21);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(6);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(6);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var settle = __webpack_require__(22);
var buildURL = __webpack_require__(24);
var parseHeaders = __webpack_require__(25);
var isURLSameOrigin = __webpack_require__(26);
var createError = __webpack_require__(7);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(27);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(28);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(23);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(42)
)

/* script */
__vue_exports__ = __webpack_require__(43)

/* template */
var __vue_template__ = __webpack_require__(77)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/home/awecode/test/jus-broadcast/src/components/app/Layout.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1e24e908"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(44);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(78)
)

/* script */
__vue_exports__ = __webpack_require__(79)

/* template */
var __vue_template__ = __webpack_require__(80)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/home/awecode/test/jus-broadcast/src/components/app/video/VideoList.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-18804db7"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {

    function chunk (collection, size) {
    
        var result = [];
        
        // default size to two item
        size = parseInt(size) || 2;
        
        // add each chunk to the result
        for (var x = 0; x < Math.ceil(collection.length / size); x++) {
            
            var start = x * size;
            var end = start + size;
            
            result.push(collection.slice(start, end));
            
        }
        
        return result;
        
    };

    // export in node or browser
    if (true) {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = chunk;
        }
        exports.chunk = chunk;
    } else {
        this.chunk = chunk;
    }

}.call(this));


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(81)
)

/* script */
__vue_exports__ = __webpack_require__(82)

/* template */
var __vue_template__ = __webpack_require__(87)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/home/awecode/test/jus-broadcast/src/components/app/user/SignIn.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-8135d450"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _VueForm = __webpack_require__(83);

var _VueForm2 = _interopRequireDefault(_VueForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import VueForm from '@/helpers/components/form/VueForm.vue'

exports.default = {
  components: { VueForm: _VueForm2.default },
  data: function data() {
    return {
      loading: true,
      fields: {}
    };
  },

  methods: {
    endpoint: function endpoint() {
      var endpoint = this.$options.endpoint;
      if (this.$route.params.pk) {
        endpoint += this.$route.params.pk + '/';
      } else if (this.formInstanceId) {
        endpoint += this.formInstanceId + '/';
      }
      return endpoint;
    },
    successCallback: function successCallback(data) {
      if (this.$options.success_url) {
        this.$router.push({ path: this.$options.success_url });
      }
    }
  },
  computed: {
    success_message: function success_message() {
      return this.$options.success_message || 'Saved';
    },
    pk: function pk() {
      return this.$route.params.pk;
    }
  },
  created: function created() {
    var _this = this;

    // if (this.saveAsModalCallback)
    if (this.$route.params.pk || this.formInstanceId) {
      global.axios.get(this.endpoint()).then(function (_ref) {
        var data = _ref.data;

        _this.fields = data;
      });
    }
    if (this.$options.dependencies) {
      this.$options.dependencies.forEach(function (model) {
        global.axios.get(model.endpoint).then(function (_ref2) {
          var data = _ref2.data;

          _this.$store.commit('update_collection', [model.collection_name, data]);
        });
      });
    }
  },
  mounted: function mounted() {
    // this.$on('success', this.successCallback)
  }
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _vuex = __webpack_require__(17);

var _vuex2 = _interopRequireDefault(_vuex);

var _axios = __webpack_require__(4);

var _axios2 = _interopRequireDefault(_axios);

var _vuejsJwt = __webpack_require__(36);

var _vuejsJwt2 = _interopRequireDefault(_vuejsJwt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*global Vue*/

/* weex initialized here, please do not move this line */
var router = __webpack_require__(37);
var App = __webpack_require__(104);
// const store = require('./store');

// import fontawesome from '@fortawesome/fontawesome'
// import {
//   faUser
// } from '@fortawesome/fontawesome-free-solid'

Vue.use(_vuex2.default);
Vue.use(_vuejsJwt2.default);
var storage = weex.requireModule('storage');

var store = new _vuex2.default.Store({
    state: {
        count: 0,
        user: storage.getItem('user', function (e) {
            console.log(e);
        }),
        userInfo: storage.getItem('userInfo', function (e) {
            console.log(e);
        })
    },
    mutations: {
        increment: function increment(state) {
            state.count++;
        },
        update_object: function update_object(state, _ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                objectName = _ref2[0],
                data = _ref2[1];

            Vue.set(state, objectName, data);
        },
        logout: function logout(state) {
            // state.user = null
            // delete axios.defaults.headers.common['Authorization']
        }
    },
    actions: {
        login: function login(_ref3, payload) {
            // let userData = global.Vue.$jwt.decode(payload.userData.token)
            // commit('update_object', ['userInfo', userData])
            // commit('update_object', ['user', payload['userData']])
            // storage.setItem('userInfo', event => {
            //     store.state.user = JSON.stringify(userData)
            //     console.log(JSON.stringify(userData))
            // })
            // storage.setItem('user', event => {
            //     store.state.user = payload['userData']
            //     console.log(payload['userData'])
            // })
            // axios.defaults.headers.common['Authorization'] = `JWT ${state.user.token}`

            var commit = _ref3.commit,
                state = _ref3.state,
                getters = _ref3.getters;
        },
        logout: function logout(_ref4) {
            var commit = _ref4.commit;

            // delete axios.defaults.headers.common['Authorization']
            storage.removeItem('user', function (e) {
                console.log(e);
            });
            // commit('logout')
            router.go();
            router.push('/');
        }
    },
    getters: {
        token: function token(state) {
            if (state.user) {
                return state.user.token;
            } else {
                return null;
            }
        },
        user: function user(state) {
            if (state.user) {
                return state.user.user;
            } else {
                return null;
            }
        },
        userInfo: function userInfo(state) {
            if (state.user) {
                return state.user.userInfo;
            } else {
                return null;
            }
        }
    },
    strict: false
});
exports.default = store;
/* eslint-disable no-new */

new Vue(Vue.util.extend({ el: '#root', store: store, router: router }, App));
router.push('/');

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (process.env.NODE_ENV !== 'production') {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (process.env.NODE_ENV !== 'production') {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (process.env.NODE_ENV !== 'production') {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  var state = options.state; if ( state === void 0 ) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  if (process.env.NODE_ENV !== 'production') {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    process.env.NODE_ENV !== 'production' &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  this._actionSubscribers.forEach(function (sub) { return sub(action, this$1.state); });

  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  return genericSubscribe(fn, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if (process.env.NODE_ENV !== 'production') {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (process.env.NODE_ENV !== 'production') {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (process.env.NODE_ENV !== 'production' && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (process.env.NODE_ENV !== 'production' && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (process.env.NODE_ENV !== 'production') {
      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (process.env.NODE_ENV !== 'production' && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (process.env.NODE_ENV !== 'production' && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.0.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};


/* harmony default export */ __webpack_exports__["default"] = (index_esm);


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(5);
var Axios = __webpack_require__(20);
var defaults = __webpack_require__(3);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(9);
axios.CancelToken = __webpack_require__(34);
axios.isCancel = __webpack_require__(8);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(35);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(3);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(29);
var dispatchRequest = __webpack_require__(30);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(7);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(31);
var isCancel = __webpack_require__(8);
var defaults = __webpack_require__(3);
var isAbsoluteURL = __webpack_require__(32);
var combineURLs = __webpack_require__(33);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(9);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["vuejs-jwt"]=t():e["vuejs-jwt"]=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=120)}([function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}},function(e,t,r){"use strict";(function(e){function n(){return o.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function i(e,t){if(n()<t)throw new RangeError("Invalid typed array length");return o.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t),e.__proto__=o.prototype):(null===e&&(e=new o(t)),e.length=t),e}function o(e,t,r){if(!(o.TYPED_ARRAY_SUPPORT||this instanceof o))return new o(e,t,r);if("number"==typeof e){if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string");return c(this,e)}return a(this,e,t,r)}function a(e,t,r,n){if("number"==typeof t)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?d(e,t,r,n):"string"==typeof t?u(e,t,r):l(e,t)}function f(e){if("number"!=typeof e)throw new TypeError('"size" argument must be a number');if(e<0)throw new RangeError('"size" argument must not be negative')}function s(e,t,r,n){return f(t),t<=0?i(e,t):void 0!==r?"string"==typeof n?i(e,t).fill(r,n):i(e,t).fill(r):i(e,t)}function c(e,t){if(f(t),e=i(e,t<0?0:0|p(t)),!o.TYPED_ARRAY_SUPPORT)for(var r=0;r<t;++r)e[r]=0;return e}function u(e,t,r){if("string"==typeof r&&""!==r||(r="utf8"),!o.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var n=0|y(t,r);e=i(e,n);var a=e.write(t,r);return a!==n&&(e=e.slice(0,a)),e}function h(e,t){var r=t.length<0?0:0|p(t.length);e=i(e,r);for(var n=0;n<r;n+=1)e[n]=255&t[n];return e}function d(e,t,r,n){if(t.byteLength,r<0||t.byteLength<r)throw new RangeError("'offset' is out of bounds");if(t.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");return t=void 0===r&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,r):new Uint8Array(t,r,n),o.TYPED_ARRAY_SUPPORT?(e=t,e.__proto__=o.prototype):e=h(e,t),e}function l(e,t){if(o.isBuffer(t)){var r=0|p(t.length);return e=i(e,r),0===e.length?e:(t.copy(e,0,0,r),e)}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||G(t.length)?i(e,0):h(e,t);if("Buffer"===t.type&&Z(t.data))return h(e,t.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function p(e){if(e>=n())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+n().toString(16)+" bytes");return 0|e}function b(e){return+e!=e&&(e=0),o.alloc(+e)}function y(e,t){if(o.isBuffer(e))return e.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;"string"!=typeof e&&(e=""+e);var r=e.length;if(0===r)return 0;for(var n=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return H(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return W(e).length;default:if(n)return H(e).length;t=(""+t).toLowerCase(),n=!0}}function v(e,t,r){var n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if(r>>>=0,t>>>=0,r<=t)return"";for(e||(e="utf8");;)switch(e){case"hex":return O(this,t,r);case"utf8":case"utf-8":return B(this,t,r);case"ascii":return j(this,t,r);case"latin1":case"binary":return R(this,t,r);case"base64":return A(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return P(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function g(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function m(e,t,r,n,i){if(0===e.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return-1;r=e.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof t&&(t=o.from(t,n)),o.isBuffer(t))return 0===t.length?-1:_(e,t,r,n,i);if("number"==typeof t)return t&=255,o.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):_(e,[t],r,n,i);throw new TypeError("val must be string, number or Buffer")}function _(e,t,r,n,i){function o(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}var a=1,f=e.length,s=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1;a=2,f/=2,s/=2,r/=2}var c;if(i){var u=-1;for(c=r;c<f;c++)if(o(e,c)===o(t,-1===u?0:c-u)){if(-1===u&&(u=c),c-u+1===s)return u*a}else-1!==u&&(c-=c-u),u=-1}else for(r+s>f&&(r=f-s),c=r;c>=0;c--){for(var h=!0,d=0;d<s;d++)if(o(e,c+d)!==o(t,d)){h=!1;break}if(h)return c}return-1}function w(e,t,r,n){r=Number(r)||0;var i=e.length-r;n?(n=Number(n))>i&&(n=i):n=i;var o=t.length;if(o%2!=0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var a=0;a<n;++a){var f=parseInt(t.substr(2*a,2),16);if(isNaN(f))return a;e[r+a]=f}return a}function S(e,t,r,n){return J(H(t,e.length-r),e,r,n)}function M(e,t,r,n){return J(V(t),e,r,n)}function E(e,t,r,n){return M(e,t,r,n)}function k(e,t,r,n){return J(W(t),e,r,n)}function x(e,t,r,n){return J(Y(t,e.length-r),e,r,n)}function A(e,t,r){return 0===t&&r===e.length?X.fromByteArray(e):X.fromByteArray(e.slice(t,r))}function B(e,t,r){r=Math.min(e.length,r);for(var n=[],i=t;i<r;){var o=e[i],a=null,f=o>239?4:o>223?3:o>191?2:1;if(i+f<=r){var s,c,u,h;switch(f){case 1:o<128&&(a=o);break;case 2:s=e[i+1],128==(192&s)&&(h=(31&o)<<6|63&s)>127&&(a=h);break;case 3:s=e[i+1],c=e[i+2],128==(192&s)&&128==(192&c)&&(h=(15&o)<<12|(63&s)<<6|63&c)>2047&&(h<55296||h>57343)&&(a=h);break;case 4:s=e[i+1],c=e[i+2],u=e[i+3],128==(192&s)&&128==(192&c)&&128==(192&u)&&(h=(15&o)<<18|(63&s)<<12|(63&c)<<6|63&u)>65535&&h<1114112&&(a=h)}}null===a?(a=65533,f=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|1023&a),n.push(a),i+=f}return I(n)}function I(e){var t=e.length;if(t<=Q)return String.fromCharCode.apply(String,e);for(var r="",n=0;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=Q));return r}function j(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}function R(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}function O(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var i="",o=t;o<r;++o)i+=F(e[o]);return i}function P(e,t,r){for(var n=e.slice(t,r),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function T(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function C(e,t,r,n,i,a){if(!o.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<a)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}function D(e,t,r,n){t<0&&(t=65535+t+1);for(var i=0,o=Math.min(e.length-r,2);i<o;++i)e[r+i]=(t&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function L(e,t,r,n){t<0&&(t=4294967295+t+1);for(var i=0,o=Math.min(e.length-r,4);i<o;++i)e[r+i]=t>>>8*(n?i:3-i)&255}function z(e,t,r,n,i,o){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function N(e,t,r,n,i){return i||z(e,t,r,4,3.4028234663852886e38,-3.4028234663852886e38),$.write(e,t,r,n,23,4),r+4}function U(e,t,r,n,i){return i||z(e,t,r,8,1.7976931348623157e308,-1.7976931348623157e308),$.write(e,t,r,n,52,8),r+8}function q(e){if(e=K(e).replace(ee,""),e.length<2)return"";for(;e.length%4!=0;)e+="=";return e}function K(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function F(e){return e<16?"0"+e.toString(16):e.toString(16)}function H(e,t){t=t||1/0;for(var r,n=e.length,i=null,o=[],a=0;a<n;++a){if((r=e.charCodeAt(a))>55295&&r<57344){if(!i){if(r>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(a+1===n){(t-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&o.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(t-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;o.push(r)}else if(r<2048){if((t-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function V(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}function Y(e,t){for(var r,n,i,o=[],a=0;a<e.length&&!((t-=2)<0);++a)r=e.charCodeAt(a),n=r>>8,i=r%256,o.push(i),o.push(n);return o}function W(e){return X.toByteArray(q(e))}function J(e,t,r,n){for(var i=0;i<n&&!(i+r>=t.length||i>=e.length);++i)t[i+r]=e[i];return i}function G(e){return e!==e}/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var X=r(159),$=r(160),Z=r(80);t.Buffer=o,t.SlowBuffer=b,t.INSPECT_MAX_BYTES=50,o.TYPED_ARRAY_SUPPORT=void 0!==e.TYPED_ARRAY_SUPPORT?e.TYPED_ARRAY_SUPPORT:function(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(e){return!1}}(),t.kMaxLength=n(),o.poolSize=8192,o._augment=function(e){return e.__proto__=o.prototype,e},o.from=function(e,t,r){return a(null,e,t,r)},o.TYPED_ARRAY_SUPPORT&&(o.prototype.__proto__=Uint8Array.prototype,o.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&o[Symbol.species]===o&&Object.defineProperty(o,Symbol.species,{value:null,configurable:!0})),o.alloc=function(e,t,r){return s(null,e,t,r)},o.allocUnsafe=function(e){return c(null,e)},o.allocUnsafeSlow=function(e){return c(null,e)},o.isBuffer=function(e){return!(null==e||!e._isBuffer)},o.compare=function(e,t){if(!o.isBuffer(e)||!o.isBuffer(t))throw new TypeError("Arguments must be Buffers");if(e===t)return 0;for(var r=e.length,n=t.length,i=0,a=Math.min(r,n);i<a;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},o.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.concat=function(e,t){if(!Z(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return o.alloc(0);var r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var n=o.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){var a=e[r];if(!o.isBuffer(a))throw new TypeError('"list" argument must be an Array of Buffers');a.copy(n,i),i+=a.length}return n},o.byteLength=y,o.prototype._isBuffer=!0,o.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)g(this,t,t+1);return this},o.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)g(this,t,t+3),g(this,t+1,t+2);return this},o.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)g(this,t,t+7),g(this,t+1,t+6),g(this,t+2,t+5),g(this,t+3,t+4);return this},o.prototype.toString=function(){var e=0|this.length;return 0===e?"":0===arguments.length?B(this,0,e):v.apply(this,arguments)},o.prototype.equals=function(e){if(!o.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===o.compare(this,e)},o.prototype.inspect=function(){var e="",r=t.INSPECT_MAX_BYTES;return this.length>0&&(e=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(e+=" ... ")),"<Buffer "+e+">"},o.prototype.compare=function(e,t,r,n,i){if(!o.isBuffer(e))throw new TypeError("Argument must be a Buffer");if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&t>=r)return 0;if(n>=i)return-1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,i>>>=0,this===e)return 0;for(var a=i-n,f=r-t,s=Math.min(a,f),c=this.slice(n,i),u=e.slice(t,r),h=0;h<s;++h)if(c[h]!==u[h]){a=c[h],f=u[h];break}return a<f?-1:f<a?1:0},o.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},o.prototype.indexOf=function(e,t,r){return m(this,e,t,r,!0)},o.prototype.lastIndexOf=function(e,t,r){return m(this,e,t,r,!1)},o.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var i=this.length-t;if((void 0===r||r>i)&&(r=i),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return w(this,e,t,r);case"utf8":case"utf-8":return S(this,e,t,r);case"ascii":return M(this,e,t,r);case"latin1":case"binary":return E(this,e,t,r);case"base64":return k(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return x(this,e,t,r);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var Q=4096;o.prototype.slice=function(e,t){var r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);var n;if(o.TYPED_ARRAY_SUPPORT)n=this.subarray(e,t),n.__proto__=o.prototype;else{var i=t-e;n=new o(i,void 0);for(var a=0;a<i;++a)n[a]=this[a+e]}return n},o.prototype.readUIntLE=function(e,t,r){e|=0,t|=0,r||T(e,t,this.length);for(var n=this[e],i=1,o=0;++o<t&&(i*=256);)n+=this[e+o]*i;return n},o.prototype.readUIntBE=function(e,t,r){e|=0,t|=0,r||T(e,t,this.length);for(var n=this[e+--t],i=1;t>0&&(i*=256);)n+=this[e+--t]*i;return n},o.prototype.readUInt8=function(e,t){return t||T(e,1,this.length),this[e]},o.prototype.readUInt16LE=function(e,t){return t||T(e,2,this.length),this[e]|this[e+1]<<8},o.prototype.readUInt16BE=function(e,t){return t||T(e,2,this.length),this[e]<<8|this[e+1]},o.prototype.readUInt32LE=function(e,t){return t||T(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},o.prototype.readUInt32BE=function(e,t){return t||T(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},o.prototype.readIntLE=function(e,t,r){e|=0,t|=0,r||T(e,t,this.length);for(var n=this[e],i=1,o=0;++o<t&&(i*=256);)n+=this[e+o]*i;return i*=128,n>=i&&(n-=Math.pow(2,8*t)),n},o.prototype.readIntBE=function(e,t,r){e|=0,t|=0,r||T(e,t,this.length);for(var n=t,i=1,o=this[e+--n];n>0&&(i*=256);)o+=this[e+--n]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*t)),o},o.prototype.readInt8=function(e,t){return t||T(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},o.prototype.readInt16LE=function(e,t){t||T(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},o.prototype.readInt16BE=function(e,t){t||T(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},o.prototype.readInt32LE=function(e,t){return t||T(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},o.prototype.readInt32BE=function(e,t){return t||T(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},o.prototype.readFloatLE=function(e,t){return t||T(e,4,this.length),$.read(this,e,!0,23,4)},o.prototype.readFloatBE=function(e,t){return t||T(e,4,this.length),$.read(this,e,!1,23,4)},o.prototype.readDoubleLE=function(e,t){return t||T(e,8,this.length),$.read(this,e,!0,52,8)},o.prototype.readDoubleBE=function(e,t){return t||T(e,8,this.length),$.read(this,e,!1,52,8)},o.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t|=0,r|=0,!n){C(this,e,t,r,Math.pow(2,8*r)-1,0)}var i=1,o=0;for(this[t]=255&e;++o<r&&(i*=256);)this[t+o]=e/i&255;return t+r},o.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t|=0,r|=0,!n){C(this,e,t,r,Math.pow(2,8*r)-1,0)}var i=r-1,o=1;for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255;return t+r},o.prototype.writeUInt8=function(e,t,r){return e=+e,t|=0,r||C(this,e,t,1,255,0),o.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1},o.prototype.writeUInt16LE=function(e,t,r){return e=+e,t|=0,r||C(this,e,t,2,65535,0),o.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):D(this,e,t,!0),t+2},o.prototype.writeUInt16BE=function(e,t,r){return e=+e,t|=0,r||C(this,e,t,2,65535,0),o.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):D(this,e,t,!1),t+2},o.prototype.writeUInt32LE=function(e,t,r){return e=+e,t|=0,r||C(this,e,t,4,4294967295,0),o.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):L(this,e,t,!0),t+4},o.prototype.writeUInt32BE=function(e,t,r){return e=+e,t|=0,r||C(this,e,t,4,4294967295,0),o.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):L(this,e,t,!1),t+4},o.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t|=0,!n){var i=Math.pow(2,8*r-1);C(this,e,t,r,i-1,-i)}var o=0,a=1,f=0;for(this[t]=255&e;++o<r&&(a*=256);)e<0&&0===f&&0!==this[t+o-1]&&(f=1),this[t+o]=(e/a>>0)-f&255;return t+r},o.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t|=0,!n){var i=Math.pow(2,8*r-1);C(this,e,t,r,i-1,-i)}var o=r-1,a=1,f=0;for(this[t+o]=255&e;--o>=0&&(a*=256);)e<0&&0===f&&0!==this[t+o+1]&&(f=1),this[t+o]=(e/a>>0)-f&255;return t+r},o.prototype.writeInt8=function(e,t,r){return e=+e,t|=0,r||C(this,e,t,1,127,-128),o.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[t]=255&e,t+1},o.prototype.writeInt16LE=function(e,t,r){return e=+e,t|=0,r||C(this,e,t,2,32767,-32768),o.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):D(this,e,t,!0),t+2},o.prototype.writeInt16BE=function(e,t,r){return e=+e,t|=0,r||C(this,e,t,2,32767,-32768),o.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):D(this,e,t,!1),t+2},o.prototype.writeInt32LE=function(e,t,r){return e=+e,t|=0,r||C(this,e,t,4,2147483647,-2147483648),o.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):L(this,e,t,!0),t+4},o.prototype.writeInt32BE=function(e,t,r){return e=+e,t|=0,r||C(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),o.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):L(this,e,t,!1),t+4},o.prototype.writeFloatLE=function(e,t,r){return N(this,e,t,!0,r)},o.prototype.writeFloatBE=function(e,t,r){return N(this,e,t,!1,r)},o.prototype.writeDoubleLE=function(e,t,r){return U(this,e,t,!0,r)},o.prototype.writeDoubleBE=function(e,t,r){return U(this,e,t,!1,r)},o.prototype.copy=function(e,t,r,n){if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var i,a=n-r;if(this===e&&r<t&&t<n)for(i=a-1;i>=0;--i)e[i+t]=this[i+r];else if(a<1e3||!o.TYPED_ARRAY_SUPPORT)for(i=0;i<a;++i)e[i+t]=this[i+r];else Uint8Array.prototype.set.call(e,this.subarray(r,r+a),t);return a},o.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===e.length){var i=e.charCodeAt(0);i<256&&(e=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!o.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof e&&(e&=255);if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0);var a;if("number"==typeof e)for(a=t;a<r;++a)this[a]=e;else{var f=o.isBuffer(e)?e:H(new o(e,n).toString()),s=f.length;for(a=0;a<r-t;++a)this[a+t]=f[a%s]}return this};var ee=/[^+\/0-9A-Za-z-_]/g}).call(t,r(9))},function(e,t,r){function n(e,t){for(var r in e)t[r]=e[r]}function i(e,t,r){return a(e,t,r)}var o=r(1),a=o.Buffer;a.from&&a.alloc&&a.allocUnsafe&&a.allocUnsafeSlow?e.exports=o:(n(o,t),t.Buffer=i),n(a,i),i.from=function(e,t,r){if("number"==typeof e)throw new TypeError("Argument must not be a number");return a(e,t,r)},i.alloc=function(e,t,r){if("number"!=typeof e)throw new TypeError("Argument must be a number");var n=a(e);return void 0!==t?"string"==typeof r?n.fill(t,r):n.fill(t):n.fill(0),n},i.allocUnsafe=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return a(e)},i.allocUnsafeSlow=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return o.SlowBuffer(e)}},function(e,t,r){(function(e){!function(e,t){"use strict";function n(e,t){if(!e)throw new Error(t||"Assertion failed")}function i(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}function o(e,t,r){if(o.isBN(e))return e;this.negative=0,this.words=null,this.length=0,this.red=null,null!==e&&("le"!==t&&"be"!==t||(r=t,t=10),this._init(e||0,t||10,r||"be"))}function a(e,t,r){for(var n=0,i=Math.min(e.length,r),o=t;o<i;o++){var a=e.charCodeAt(o)-48;n<<=4,n|=a>=49&&a<=54?a-49+10:a>=17&&a<=22?a-17+10:15&a}return n}function f(e,t,r,n){for(var i=0,o=Math.min(e.length,r),a=t;a<o;a++){var f=e.charCodeAt(a)-48;i*=n,i+=f>=49?f-49+10:f>=17?f-17+10:f}return i}function s(e){for(var t=new Array(e.bitLength()),r=0;r<t.length;r++){var n=r/26|0,i=r%26;t[r]=(e.words[n]&1<<i)>>>i}return t}function c(e,t,r){r.negative=t.negative^e.negative;var n=e.length+t.length|0;r.length=n,n=n-1|0;var i=0|e.words[0],o=0|t.words[0],a=i*o,f=67108863&a,s=a/67108864|0;r.words[0]=f;for(var c=1;c<n;c++){for(var u=s>>>26,h=67108863&s,d=Math.min(c,t.length-1),l=Math.max(0,c-e.length+1);l<=d;l++){var p=c-l|0;i=0|e.words[p],o=0|t.words[l],a=i*o+h,u+=a/67108864|0,h=67108863&a}r.words[c]=0|h,s=0|u}return 0!==s?r.words[c]=0|s:r.length--,r.strip()}function u(e,t,r){r.negative=t.negative^e.negative,r.length=e.length+t.length;for(var n=0,i=0,o=0;o<r.length-1;o++){var a=i;i=0;for(var f=67108863&n,s=Math.min(o,t.length-1),c=Math.max(0,o-e.length+1);c<=s;c++){var u=o-c,h=0|e.words[u],d=0|t.words[c],l=h*d,p=67108863&l;a=a+(l/67108864|0)|0,p=p+f|0,f=67108863&p,a=a+(p>>>26)|0,i+=a>>>26,a&=67108863}r.words[o]=f,n=a,a=i}return 0!==n?r.words[o]=n:r.length--,r.strip()}function h(e,t,r){return(new d).mulp(e,t,r)}function d(e,t){this.x=e,this.y=t}function l(e,t){this.name=e,this.p=new o(t,16),this.n=this.p.bitLength(),this.k=new o(1).iushln(this.n).isub(this.p),this.tmp=this._tmp()}function p(){l.call(this,"k256","ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")}function b(){l.call(this,"p224","ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")}function y(){l.call(this,"p192","ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")}function v(){l.call(this,"25519","7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")}function g(e){if("string"==typeof e){var t=o._prime(e);this.m=t.p,this.prime=t}else n(e.gtn(1),"modulus must be greater than 1"),this.m=e,this.prime=null}function m(e){g.call(this,e),this.shift=this.m.bitLength(),this.shift%26!=0&&(this.shift+=26-this.shift%26),this.r=new o(1).iushln(this.shift),this.r2=this.imod(this.r.sqr()),this.rinv=this.r._invmp(this.m),this.minv=this.rinv.mul(this.r).isubn(1).div(this.m),this.minv=this.minv.umod(this.r),this.minv=this.r.sub(this.minv)}"object"==typeof e?e.exports=o:t.BN=o,o.BN=o,o.wordSize=26;var _;try{_=r(206).Buffer}catch(e){}o.isBN=function(e){return e instanceof o||null!==e&&"object"==typeof e&&e.constructor.wordSize===o.wordSize&&Array.isArray(e.words)},o.max=function(e,t){return e.cmp(t)>0?e:t},o.min=function(e,t){return e.cmp(t)<0?e:t},o.prototype._init=function(e,t,r){if("number"==typeof e)return this._initNumber(e,t,r);if("object"==typeof e)return this._initArray(e,t,r);"hex"===t&&(t=16),n(t===(0|t)&&t>=2&&t<=36),e=e.toString().replace(/\s+/g,"");var i=0;"-"===e[0]&&i++,16===t?this._parseHex(e,i):this._parseBase(e,t,i),"-"===e[0]&&(this.negative=1),this.strip(),"le"===r&&this._initArray(this.toArray(),t,r)},o.prototype._initNumber=function(e,t,r){e<0&&(this.negative=1,e=-e),e<67108864?(this.words=[67108863&e],this.length=1):e<4503599627370496?(this.words=[67108863&e,e/67108864&67108863],this.length=2):(n(e<9007199254740992),this.words=[67108863&e,e/67108864&67108863,1],this.length=3),"le"===r&&this._initArray(this.toArray(),t,r)},o.prototype._initArray=function(e,t,r){if(n("number"==typeof e.length),e.length<=0)return this.words=[0],this.length=1,this;this.length=Math.ceil(e.length/3),this.words=new Array(this.length);for(var i=0;i<this.length;i++)this.words[i]=0;var o,a,f=0;if("be"===r)for(i=e.length-1,o=0;i>=0;i-=3)a=e[i]|e[i-1]<<8|e[i-2]<<16,this.words[o]|=a<<f&67108863,this.words[o+1]=a>>>26-f&67108863,(f+=24)>=26&&(f-=26,o++);else if("le"===r)for(i=0,o=0;i<e.length;i+=3)a=e[i]|e[i+1]<<8|e[i+2]<<16,this.words[o]|=a<<f&67108863,this.words[o+1]=a>>>26-f&67108863,(f+=24)>=26&&(f-=26,o++);return this.strip()},o.prototype._parseHex=function(e,t){this.length=Math.ceil((e.length-t)/6),this.words=new Array(this.length);for(var r=0;r<this.length;r++)this.words[r]=0;var n,i,o=0;for(r=e.length-6,n=0;r>=t;r-=6)i=a(e,r,r+6),this.words[n]|=i<<o&67108863,this.words[n+1]|=i>>>26-o&4194303,(o+=24)>=26&&(o-=26,n++);r+6!==t&&(i=a(e,t,r+6),this.words[n]|=i<<o&67108863,this.words[n+1]|=i>>>26-o&4194303),this.strip()},o.prototype._parseBase=function(e,t,r){this.words=[0],this.length=1;for(var n=0,i=1;i<=67108863;i*=t)n++;n--,i=i/t|0;for(var o=e.length-r,a=o%n,s=Math.min(o,o-a)+r,c=0,u=r;u<s;u+=n)c=f(e,u,u+n,t),this.imuln(i),this.words[0]+c<67108864?this.words[0]+=c:this._iaddn(c);if(0!==a){var h=1;for(c=f(e,u,e.length,t),u=0;u<a;u++)h*=t;this.imuln(h),this.words[0]+c<67108864?this.words[0]+=c:this._iaddn(c)}},o.prototype.copy=function(e){e.words=new Array(this.length);for(var t=0;t<this.length;t++)e.words[t]=this.words[t];e.length=this.length,e.negative=this.negative,e.red=this.red},o.prototype.clone=function(){var e=new o(null);return this.copy(e),e},o.prototype._expand=function(e){for(;this.length<e;)this.words[this.length++]=0;return this},o.prototype.strip=function(){for(;this.length>1&&0===this.words[this.length-1];)this.length--;return this._normSign()},o.prototype._normSign=function(){return 1===this.length&&0===this.words[0]&&(this.negative=0),this},o.prototype.inspect=function(){return(this.red?"<BN-R: ":"<BN: ")+this.toString(16)+">"};var w=["","0","00","000","0000","00000","000000","0000000","00000000","000000000","0000000000","00000000000","000000000000","0000000000000","00000000000000","000000000000000","0000000000000000","00000000000000000","000000000000000000","0000000000000000000","00000000000000000000","000000000000000000000","0000000000000000000000","00000000000000000000000","000000000000000000000000","0000000000000000000000000"],S=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],M=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,1e7,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64e6,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,243e5,28629151,33554432,39135393,45435424,52521875,60466176];o.prototype.toString=function(e,t){e=e||10,t=0|t||1;var r;if(16===e||"hex"===e){r="";for(var i=0,o=0,a=0;a<this.length;a++){var f=this.words[a],s=(16777215&(f<<i|o)).toString(16);o=f>>>24-i&16777215,r=0!==o||a!==this.length-1?w[6-s.length]+s+r:s+r,i+=2,i>=26&&(i-=26,a--)}for(0!==o&&(r=o.toString(16)+r);r.length%t!=0;)r="0"+r;return 0!==this.negative&&(r="-"+r),r}if(e===(0|e)&&e>=2&&e<=36){var c=S[e],u=M[e];r="";var h=this.clone();for(h.negative=0;!h.isZero();){var d=h.modn(u).toString(e);h=h.idivn(u),r=h.isZero()?d+r:w[c-d.length]+d+r}for(this.isZero()&&(r="0"+r);r.length%t!=0;)r="0"+r;return 0!==this.negative&&(r="-"+r),r}n(!1,"Base should be between 2 and 36")},o.prototype.toNumber=function(){var e=this.words[0];return 2===this.length?e+=67108864*this.words[1]:3===this.length&&1===this.words[2]?e+=4503599627370496+67108864*this.words[1]:this.length>2&&n(!1,"Number can only safely store up to 53 bits"),0!==this.negative?-e:e},o.prototype.toJSON=function(){return this.toString(16)},o.prototype.toBuffer=function(e,t){return n(void 0!==_),this.toArrayLike(_,e,t)},o.prototype.toArray=function(e,t){return this.toArrayLike(Array,e,t)},o.prototype.toArrayLike=function(e,t,r){var i=this.byteLength(),o=r||Math.max(1,i);n(i<=o,"byte array longer than desired length"),n(o>0,"Requested array length <= 0"),this.strip();var a,f,s="le"===t,c=new e(o),u=this.clone();if(s){for(f=0;!u.isZero();f++)a=u.andln(255),u.iushrn(8),c[f]=a;for(;f<o;f++)c[f]=0}else{for(f=0;f<o-i;f++)c[f]=0;for(f=0;!u.isZero();f++)a=u.andln(255),u.iushrn(8),c[o-f-1]=a}return c},Math.clz32?o.prototype._countBits=function(e){return 32-Math.clz32(e)}:o.prototype._countBits=function(e){var t=e,r=0;return t>=4096&&(r+=13,t>>>=13),t>=64&&(r+=7,t>>>=7),t>=8&&(r+=4,t>>>=4),t>=2&&(r+=2,t>>>=2),r+t},o.prototype._zeroBits=function(e){if(0===e)return 26;var t=e,r=0;return 0==(8191&t)&&(r+=13,t>>>=13),0==(127&t)&&(r+=7,t>>>=7),0==(15&t)&&(r+=4,t>>>=4),0==(3&t)&&(r+=2,t>>>=2),0==(1&t)&&r++,r},o.prototype.bitLength=function(){var e=this.words[this.length-1],t=this._countBits(e);return 26*(this.length-1)+t},o.prototype.zeroBits=function(){if(this.isZero())return 0;for(var e=0,t=0;t<this.length;t++){var r=this._zeroBits(this.words[t]);if(e+=r,26!==r)break}return e},o.prototype.byteLength=function(){return Math.ceil(this.bitLength()/8)},o.prototype.toTwos=function(e){return 0!==this.negative?this.abs().inotn(e).iaddn(1):this.clone()},o.prototype.fromTwos=function(e){return this.testn(e-1)?this.notn(e).iaddn(1).ineg():this.clone()},o.prototype.isNeg=function(){return 0!==this.negative},o.prototype.neg=function(){return this.clone().ineg()},o.prototype.ineg=function(){return this.isZero()||(this.negative^=1),this},o.prototype.iuor=function(e){for(;this.length<e.length;)this.words[this.length++]=0;for(var t=0;t<e.length;t++)this.words[t]=this.words[t]|e.words[t];return this.strip()},o.prototype.ior=function(e){return n(0==(this.negative|e.negative)),this.iuor(e)},o.prototype.or=function(e){return this.length>e.length?this.clone().ior(e):e.clone().ior(this)},o.prototype.uor=function(e){return this.length>e.length?this.clone().iuor(e):e.clone().iuor(this)},o.prototype.iuand=function(e){var t;t=this.length>e.length?e:this;for(var r=0;r<t.length;r++)this.words[r]=this.words[r]&e.words[r];return this.length=t.length,this.strip()},o.prototype.iand=function(e){return n(0==(this.negative|e.negative)),this.iuand(e)},o.prototype.and=function(e){return this.length>e.length?this.clone().iand(e):e.clone().iand(this)},o.prototype.uand=function(e){return this.length>e.length?this.clone().iuand(e):e.clone().iuand(this)},o.prototype.iuxor=function(e){var t,r;this.length>e.length?(t=this,r=e):(t=e,r=this);for(var n=0;n<r.length;n++)this.words[n]=t.words[n]^r.words[n];if(this!==t)for(;n<t.length;n++)this.words[n]=t.words[n];return this.length=t.length,this.strip()},o.prototype.ixor=function(e){return n(0==(this.negative|e.negative)),this.iuxor(e)},o.prototype.xor=function(e){return this.length>e.length?this.clone().ixor(e):e.clone().ixor(this)},o.prototype.uxor=function(e){return this.length>e.length?this.clone().iuxor(e):e.clone().iuxor(this)},o.prototype.inotn=function(e){n("number"==typeof e&&e>=0);var t=0|Math.ceil(e/26),r=e%26;this._expand(t),r>0&&t--;for(var i=0;i<t;i++)this.words[i]=67108863&~this.words[i];return r>0&&(this.words[i]=~this.words[i]&67108863>>26-r),this.strip()},o.prototype.notn=function(e){return this.clone().inotn(e)},o.prototype.setn=function(e,t){n("number"==typeof e&&e>=0);var r=e/26|0,i=e%26;return this._expand(r+1),this.words[r]=t?this.words[r]|1<<i:this.words[r]&~(1<<i),this.strip()},o.prototype.iadd=function(e){var t;if(0!==this.negative&&0===e.negative)return this.negative=0,t=this.isub(e),this.negative^=1,this._normSign();if(0===this.negative&&0!==e.negative)return e.negative=0,t=this.isub(e),e.negative=1,t._normSign();var r,n;this.length>e.length?(r=this,n=e):(r=e,n=this);for(var i=0,o=0;o<n.length;o++)t=(0|r.words[o])+(0|n.words[o])+i,this.words[o]=67108863&t,i=t>>>26;for(;0!==i&&o<r.length;o++)t=(0|r.words[o])+i,this.words[o]=67108863&t,i=t>>>26;if(this.length=r.length,0!==i)this.words[this.length]=i,this.length++;else if(r!==this)for(;o<r.length;o++)this.words[o]=r.words[o];return this},o.prototype.add=function(e){var t;return 0!==e.negative&&0===this.negative?(e.negative=0,t=this.sub(e),e.negative^=1,t):0===e.negative&&0!==this.negative?(this.negative=0,t=e.sub(this),this.negative=1,t):this.length>e.length?this.clone().iadd(e):e.clone().iadd(this)},o.prototype.isub=function(e){if(0!==e.negative){e.negative=0;var t=this.iadd(e);return e.negative=1,t._normSign()}if(0!==this.negative)return this.negative=0,this.iadd(e),this.negative=1,this._normSign();var r=this.cmp(e);if(0===r)return this.negative=0,this.length=1,this.words[0]=0,this;var n,i;r>0?(n=this,i=e):(n=e,i=this);for(var o=0,a=0;a<i.length;a++)t=(0|n.words[a])-(0|i.words[a])+o,o=t>>26,this.words[a]=67108863&t;for(;0!==o&&a<n.length;a++)t=(0|n.words[a])+o,o=t>>26,this.words[a]=67108863&t;if(0===o&&a<n.length&&n!==this)for(;a<n.length;a++)this.words[a]=n.words[a];return this.length=Math.max(this.length,a),n!==this&&(this.negative=1),this.strip()},o.prototype.sub=function(e){return this.clone().isub(e)};var E=function(e,t,r){var n,i,o,a=e.words,f=t.words,s=r.words,c=0,u=0|a[0],h=8191&u,d=u>>>13,l=0|a[1],p=8191&l,b=l>>>13,y=0|a[2],v=8191&y,g=y>>>13,m=0|a[3],_=8191&m,w=m>>>13,S=0|a[4],M=8191&S,E=S>>>13,k=0|a[5],x=8191&k,A=k>>>13,B=0|a[6],I=8191&B,j=B>>>13,R=0|a[7],O=8191&R,P=R>>>13,T=0|a[8],C=8191&T,D=T>>>13,L=0|a[9],z=8191&L,N=L>>>13,U=0|f[0],q=8191&U,K=U>>>13,F=0|f[1],H=8191&F,V=F>>>13,Y=0|f[2],W=8191&Y,J=Y>>>13,G=0|f[3],X=8191&G,$=G>>>13,Z=0|f[4],Q=8191&Z,ee=Z>>>13,te=0|f[5],re=8191&te,ne=te>>>13,ie=0|f[6],oe=8191&ie,ae=ie>>>13,fe=0|f[7],se=8191&fe,ce=fe>>>13,ue=0|f[8],he=8191&ue,de=ue>>>13,le=0|f[9],pe=8191&le,be=le>>>13;r.negative=e.negative^t.negative,r.length=19,n=Math.imul(h,q),i=Math.imul(h,K),i=i+Math.imul(d,q)|0,o=Math.imul(d,K);var ye=(c+n|0)+((8191&i)<<13)|0;c=(o+(i>>>13)|0)+(ye>>>26)|0,ye&=67108863,n=Math.imul(p,q),i=Math.imul(p,K),i=i+Math.imul(b,q)|0,o=Math.imul(b,K),n=n+Math.imul(h,H)|0,i=i+Math.imul(h,V)|0,i=i+Math.imul(d,H)|0,o=o+Math.imul(d,V)|0;var ve=(c+n|0)+((8191&i)<<13)|0;c=(o+(i>>>13)|0)+(ve>>>26)|0,ve&=67108863,n=Math.imul(v,q),i=Math.imul(v,K),i=i+Math.imul(g,q)|0,o=Math.imul(g,K),n=n+Math.imul(p,H)|0,i=i+Math.imul(p,V)|0,i=i+Math.imul(b,H)|0,o=o+Math.imul(b,V)|0,n=n+Math.imul(h,W)|0,i=i+Math.imul(h,J)|0,i=i+Math.imul(d,W)|0,o=o+Math.imul(d,J)|0;var ge=(c+n|0)+((8191&i)<<13)|0;c=(o+(i>>>13)|0)+(ge>>>26)|0,ge&=67108863,n=Math.imul(_,q),i=Math.imul(_,K),i=i+Math.imul(w,q)|0,o=Math.imul(w,K),n=n+Math.imul(v,H)|0,i=i+Math.imul(v,V)|0,i=i+Math.imul(g,H)|0,o=o+Math.imul(g,V)|0,n=n+Math.imul(p,W)|0,i=i+Math.imul(p,J)|0,i=i+Math.imul(b,W)|0,o=o+Math.imul(b,J)|0,n=n+Math.imul(h,X)|0,i=i+Math.imul(h,$)|0,i=i+Math.imul(d,X)|0,o=o+Math.imul(d,$)|0;var me=(c+n|0)+((8191&i)<<13)|0;c=(o+(i>>>13)|0)+(me>>>26)|0,me&=67108863,n=Math.imul(M,q),i=Math.imul(M,K),i=i+Math.imul(E,q)|0,o=Math.imul(E,K),n=n+Math.imul(_,H)|0,i=i+Math.imul(_,V)|0,i=i+Math.imul(w,H)|0,o=o+Math.imul(w,V)|0,n=n+Math.imul(v,W)|0,i=i+Math.imul(v,J)|0,i=i+Math.imul(g,W)|0,o=o+Math.imul(g,J)|0,n=n+Math.imul(p,X)|0,i=i+Math.imul(p,$)|0,i=i+Math.imul(b,X)|0,o=o+Math.imul(b,$)|0,n=n+Math.imul(h,Q)|0,i=i+Math.imul(h,ee)|0,i=i+Math.imul(d,Q)|0,o=o+Math.imul(d,ee)|0;var _e=(c+n|0)+((8191&i)<<13)|0;c=(o+(i>>>13)|0)+(_e>>>26)|0,_e&=67108863,n=Math.imul(x,q),i=Math.imul(x,K),i=i+Math.imul(A,q)|0,o=Math.imul(A,K),n=n+Math.imul(M,H)|0,i=i+Math.imul(M,V)|0,i=i+Math.imul(E,H)|0,o=o+Math.imul(E,V)|0,n=n+Math.imul(_,W)|0,i=i+Math.imul(_,J)|0,i=i+Math.imul(w,W)|0,o=o+Math.imul(w,J)|0,n=n+Math.imul(v,X)|0,i=i+Math.imul(v,$)|0,i=i+Math.imul(g,X)|0,o=o+Math.imul(g,$)|0,n=n+Math.imul(p,Q)|0,i=i+Math.imul(p,ee)|0,i=i+Math.imul(b,Q)|0,o=o+Math.imul(b,ee)|0,n=n+Math.imul(h,re)|0,i=i+Math.imul(h,ne)|0,i=i+Math.imul(d,re)|0,o=o+Math.imul(d,ne)|0;var we=(c+n|0)+((8191&i)<<13)|0;c=(o+(i>>>13)|0)+(we>>>26)|0,we&=67108863,n=Math.imul(I,q),i=Math.imul(I,K),i=i+Math.imul(j,q)|0,o=Math.imul(j,K),n=n+Math.imul(x,H)|0,i=i+Math.imul(x,V)|0,i=i+Math.imul(A,H)|0,o=o+Math.imul(A,V)|0,n=n+Math.imul(M,W)|0,i=i+Math.imul(M,J)|0,i=i+Math.imul(E,W)|0,o=o+Math.imul(E,J)|0,n=n+Math.imul(_,X)|0,i=i+Math.imul(_,$)|0,i=i+Math.imul(w,X)|0,o=o+Math.imul(w,$)|0,n=n+Math.imul(v,Q)|0,i=i+Math.imul(v,ee)|0,i=i+Math.imul(g,Q)|0,o=o+Math.imul(g,ee)|0,n=n+Math.imul(p,re)|0,i=i+Math.imul(p,ne)|0,i=i+Math.imul(b,re)|0,o=o+Math.imul(b,ne)|0,n=n+Math.imul(h,oe)|0,i=i+Math.imul(h,ae)|0,i=i+Math.imul(d,oe)|0,o=o+Math.imul(d,ae)|0;var Se=(c+n|0)+((8191&i)<<13)|0;c=(o+(i>>>13)|0)+(Se>>>26)|0,Se&=67108863,n=Math.imul(O,q),i=Math.imul(O,K),i=i+Math.imul(P,q)|0,o=Math.imul(P,K),n=n+Math.imul(I,H)|0,i=i+Math.imul(I,V)|0,i=i+Math.imul(j,H)|0,o=o+Math.imul(j,V)|0,n=n+Math.imul(x,W)|0,i=i+Math.imul(x,J)|0,i=i+Math.imul(A,W)|0,o=o+Math.imul(A,J)|0,n=n+Math.imul(M,X)|0,i=i+Math.imul(M,$)|0,i=i+Math.imul(E,X)|0,o=o+Math.imul(E,$)|0,n=n+Math.imul(_,Q)|0,i=i+Math.imul(_,ee)|0,i=i+Math.imul(w,Q)|0,o=o+Math.imul(w,ee)|0,n=n+Math.imul(v,re)|0,i=i+Math.imul(v,ne)|0,i=i+Math.imul(g,re)|0,o=o+Math.imul(g,ne)|0,n=n+Math.imul(p,oe)|0,i=i+Math.imul(p,ae)|0,i=i+Math.imul(b,oe)|0,o=o+Math.imul(b,ae)|0,n=n+Math.imul(h,se)|0,i=i+Math.imul(h,ce)|0,i=i+Math.imul(d,se)|0,o=o+Math.imul(d,ce)|0;var Me=(c+n|0)+((8191&i)<<13)|0;c=(o+(i>>>13)|0)+(Me>>>26)|0,Me&=67108863,n=Math.imul(C,q),i=Math.imul(C,K),i=i+Math.imul(D,q)|0,o=Math.imul(D,K),n=n+Math.imul(O,H)|0,i=i+Math.imul(O,V)|0,i=i+Math.imul(P,H)|0,o=o+Math.imul(P,V)|0,n=n+Math.imul(I,W)|0,i=i+Math.imul(I,J)|0,i=i+Math.imul(j,W)|0,o=o+Math.imul(j,J)|0,n=n+Math.imul(x,X)|0,i=i+Math.imul(x,$)|0,i=i+Math.imul(A,X)|0,o=o+Math.imul(A,$)|0,n=n+Math.imul(M,Q)|0,i=i+Math.imul(M,ee)|0,i=i+Math.imul(E,Q)|0,o=o+Math.imul(E,ee)|0,n=n+Math.imul(_,re)|0,i=i+Math.imul(_,ne)|0,i=i+Math.imul(w,re)|0,o=o+Math.imul(w,ne)|0,n=n+Math.imul(v,oe)|0,i=i+Math.imul(v,ae)|0,i=i+Math.imul(g,oe)|0,o=o+Math.imul(g,ae)|0,n=n+Math.imul(p,se)|0,i=i+Math.imul(p,ce)|0,i=i+Math.imul(b,se)|0,o=o+Math.imul(b,ce)|0,n=n+Math.imul(h,he)|0,i=i+Math.imul(h,de)|0,i=i+Math.imul(d,he)|0,o=o+Math.imul(d,de)|0;var Ee=(c+n|0)+((8191&i)<<13)|0;c=(o+(i>>>13)|0)+(Ee>>>26)|0,Ee&=67108863,n=Math.imul(z,q),i=Math.imul(z,K),i=i+Math.imul(N,q)|0,o=Math.imul(N,K),n=n+Math.imul(C,H)|0,i=i+Math.imul(C,V)|0,i=i+Math.imul(D,H)|0,o=o+Math.imul(D,V)|0,n=n+Math.imul(O,W)|0,i=i+Math.imul(O,J)|0,i=i+Math.imul(P,W)|0,o=o+Math.imul(P,J)|0,n=n+Math.imul(I,X)|0,i=i+Math.imul(I,$)|0,i=i+Math.imul(j,X)|0,o=o+Math.imul(j,$)|0,n=n+Math.imul(x,Q)|0,i=i+Math.imul(x,ee)|0,i=i+Math.imul(A,Q)|0,o=o+Math.imul(A,ee)|0,n=n+Math.imul(M,re)|0,i=i+Math.imul(M,ne)|0,i=i+Math.imul(E,re)|0,o=o+Math.imul(E,ne)|0,n=n+Math.imul(_,oe)|0,i=i+Math.imul(_,ae)|0,i=i+Math.imul(w,oe)|0,o=o+Math.imul(w,ae)|0,n=n+Math.imul(v,se)|0,i=i+Math.imul(v,ce)|0,i=i+Math.imul(g,se)|0,o=o+Math.imul(g,ce)|0,n=n+Math.imul(p,he)|0,i=i+Math.imul(p,de)|0,i=i+Math.imul(b,he)|0,o=o+Math.imul(b,de)|0,n=n+Math.imul(h,pe)|0,i=i+Math.imul(h,be)|0,i=i+Math.imul(d,pe)|0,o=o+Math.imul(d,be)|0;var ke=(c+n|0)+((8191&i)<<13)|0;c=(o+(i>>>13)|0)+(ke>>>26)|0,ke&=67108863,n=Math.imul(z,H),i=Math.imul(z,V),i=i+Math.imul(N,H)|0,o=Math.imul(N,V),n=n+Math.imul(C,W)|0,i=i+Math.imul(C,J)|0,i=i+Math.imul(D,W)|0,o=o+Math.imul(D,J)|0,n=n+Math.imul(O,X)|0,i=i+Math.imul(O,$)|0,i=i+Math.imul(P,X)|0,o=o+Math.imul(P,$)|0,n=n+Math.imul(I,Q)|0,i=i+Math.imul(I,ee)|0,i=i+Math.imul(j,Q)|0,o=o+Math.imul(j,ee)|0,n=n+Math.imul(x,re)|0,i=i+Math.imul(x,ne)|0,i=i+Math.imul(A,re)|0,o=o+Math.imul(A,ne)|0,n=n+Math.imul(M,oe)|0,i=i+Math.imul(M,ae)|0,i=i+Math.imul(E,oe)|0,o=o+Math.imul(E,ae)|0,n=n+Math.imul(_,se)|0,i=i+Math.imul(_,ce)|0,i=i+Math.imul(w,se)|0,o=o+Math.imul(w,ce)|0,n=n+Math.imul(v,he)|0,i=i+Math.imul(v,de)|0,i=i+Math.imul(g,he)|0,o=o+Math.imul(g,de)|0,n=n+Math.imul(p,pe)|0,i=i+Math.imul(p,be)|0,i=i+Math.imul(b,pe)|0,o=o+Math.imul(b,be)|0;var xe=(c+n|0)+((8191&i)<<13)|0;c=(o+(i>>>13)|0)+(xe>>>26)|0,xe&=67108863,n=Math.imul(z,W),i=Math.imul(z,J),i=i+Math.imul(N,W)|0,o=Math.imul(N,J),n=n+Math.imul(C,X)|0,i=i+Math.imul(C,$)|0,i=i+Math.imul(D,X)|0,o=o+Math.imul(D,$)|0,n=n+Math.imul(O,Q)|0,i=i+Math.imul(O,ee)|0,i=i+Math.imul(P,Q)|0,o=o+Math.imul(P,ee)|0,n=n+Math.imul(I,re)|0,i=i+Math.imul(I,ne)|0,i=i+Math.imul(j,re)|0,o=o+Math.imul(j,ne)|0,n=n+Math.imul(x,oe)|0,i=i+Math.imul(x,ae)|0,i=i+Math.imul(A,oe)|0,o=o+Math.imul(A,ae)|0,n=n+Math.imul(M,se)|0,i=i+Math.imul(M,ce)|0,i=i+Math.imul(E,se)|0,o=o+Math.imul(E,ce)|0,n=n+Math.imul(_,he)|0,i=i+Math.imul(_,de)|0,i=i+Math.imul(w,he)|0,o=o+Math.imul(w,de)|0,n=n+Math.imul(v,pe)|0,i=i+Math.imul(v,be)|0,i=i+Math.imul(g,pe)|0,o=o+Math.imul(g,be)|0;var Ae=(c+n|0)+((8191&i)<<13)|0;c=(o+(i>>>13)|0)+(Ae>>>26)|0,Ae&=67108863,n=Math.imul(z,X),i=Math.imul(z,$),i=i+Math.imul(N,X)|0,o=Math.imul(N,$),n=n+Math.imul(C,Q)|0,i=i+Math.imul(C,ee)|0,i=i+Math.imul(D,Q)|0,o=o+Math.imul(D,ee)|0,n=n+Math.imul(O,re)|0,i=i+Math.imul(O,ne)|0,i=i+Math.imul(P,re)|0,o=o+Math.imul(P,ne)|0,n=n+Math.imul(I,oe)|0,i=i+Math.imul(I,ae)|0,i=i+Math.imul(j,oe)|0,o=o+Math.imul(j,ae)|0,n=n+Math.imul(x,se)|0,i=i+Math.imul(x,ce)|0,i=i+Math.imul(A,se)|0,o=o+Math.imul(A,ce)|0,n=n+Math.imul(M,he)|0,i=i+Math.imul(M,de)|0,i=i+Math.imul(E,he)|0,o=o+Math.imul(E,de)|0,n=n+Math.imul(_,pe)|0,i=i+Math.imul(_,be)|0,i=i+Math.imul(w,pe)|0,o=o+Math.imul(w,be)|0;var Be=(c+n|0)+((8191&i)<<13)|0;c=(o+(i>>>13)|0)+(Be>>>26)|0,Be&=67108863,n=Math.imul(z,Q),i=Math.imul(z,ee),i=i+Math.imul(N,Q)|0,o=Math.imul(N,ee),n=n+Math.imul(C,re)|0,i=i+Math.imul(C,ne)|0,i=i+Math.imul(D,re)|0,o=o+Math.imul(D,ne)|0,n=n+Math.imul(O,oe)|0,i=i+Math.imul(O,ae)|0,i=i+Math.imul(P,oe)|0,o=o+Math.imul(P,ae)|0,n=n+Math.imul(I,se)|0,i=i+Math.imul(I,ce)|0,i=i+Math.imul(j,se)|0,o=o+Math.imul(j,ce)|0,n=n+Math.imul(x,he)|0,i=i+Math.imul(x,de)|0,i=i+Math.imul(A,he)|0,o=o+Math.imul(A,de)|0,n=n+Math.imul(M,pe)|0,i=i+Math.imul(M,be)|0,i=i+Math.imul(E,pe)|0,o=o+Math.imul(E,be)|0;var Ie=(c+n|0)+((8191&i)<<13)|0;c=(o+(i>>>13)|0)+(Ie>>>26)|0,Ie&=67108863,n=Math.imul(z,re),i=Math.imul(z,ne),i=i+Math.imul(N,re)|0,o=Math.imul(N,ne),n=n+Math.imul(C,oe)|0,i=i+Math.imul(C,ae)|0,i=i+Math.imul(D,oe)|0,o=o+Math.imul(D,ae)|0,n=n+Math.imul(O,se)|0,i=i+Math.imul(O,ce)|0,i=i+Math.imul(P,se)|0,o=o+Math.imul(P,ce)|0,n=n+Math.imul(I,he)|0,i=i+Math.imul(I,de)|0,i=i+Math.imul(j,he)|0,o=o+Math.imul(j,de)|0,n=n+Math.imul(x,pe)|0,i=i+Math.imul(x,be)|0,i=i+Math.imul(A,pe)|0,o=o+Math.imul(A,be)|0;var je=(c+n|0)+((8191&i)<<13)|0;c=(o+(i>>>13)|0)+(je>>>26)|0,je&=67108863,n=Math.imul(z,oe),i=Math.imul(z,ae),i=i+Math.imul(N,oe)|0,o=Math.imul(N,ae),n=n+Math.imul(C,se)|0,i=i+Math.imul(C,ce)|0,i=i+Math.imul(D,se)|0,o=o+Math.imul(D,ce)|0,n=n+Math.imul(O,he)|0,i=i+Math.imul(O,de)|0,i=i+Math.imul(P,he)|0,o=o+Math.imul(P,de)|0,n=n+Math.imul(I,pe)|0,i=i+Math.imul(I,be)|0,i=i+Math.imul(j,pe)|0,o=o+Math.imul(j,be)|0;var Re=(c+n|0)+((8191&i)<<13)|0;c=(o+(i>>>13)|0)+(Re>>>26)|0,Re&=67108863,n=Math.imul(z,se),i=Math.imul(z,ce),i=i+Math.imul(N,se)|0,o=Math.imul(N,ce),n=n+Math.imul(C,he)|0,i=i+Math.imul(C,de)|0,i=i+Math.imul(D,he)|0,o=o+Math.imul(D,de)|0,n=n+Math.imul(O,pe)|0,i=i+Math.imul(O,be)|0,i=i+Math.imul(P,pe)|0,o=o+Math.imul(P,be)|0;var Oe=(c+n|0)+((8191&i)<<13)|0;c=(o+(i>>>13)|0)+(Oe>>>26)|0,Oe&=67108863,n=Math.imul(z,he),i=Math.imul(z,de),i=i+Math.imul(N,he)|0,o=Math.imul(N,de),n=n+Math.imul(C,pe)|0,i=i+Math.imul(C,be)|0,i=i+Math.imul(D,pe)|0,o=o+Math.imul(D,be)|0;var Pe=(c+n|0)+((8191&i)<<13)|0;c=(o+(i>>>13)|0)+(Pe>>>26)|0,Pe&=67108863,n=Math.imul(z,pe),i=Math.imul(z,be),i=i+Math.imul(N,pe)|0,o=Math.imul(N,be);var Te=(c+n|0)+((8191&i)<<13)|0;return c=(o+(i>>>13)|0)+(Te>>>26)|0,Te&=67108863,s[0]=ye,s[1]=ve,s[2]=ge,s[3]=me,s[4]=_e,s[5]=we,s[6]=Se,s[7]=Me,s[8]=Ee,s[9]=ke,s[10]=xe,s[11]=Ae,s[12]=Be,s[13]=Ie,s[14]=je,s[15]=Re,s[16]=Oe,s[17]=Pe,s[18]=Te,0!==c&&(s[19]=c,r.length++),r};Math.imul||(E=c),o.prototype.mulTo=function(e,t){var r=this.length+e.length;return 10===this.length&&10===e.length?E(this,e,t):r<63?c(this,e,t):r<1024?u(this,e,t):h(this,e,t)},d.prototype.makeRBT=function(e){for(var t=new Array(e),r=o.prototype._countBits(e)-1,n=0;n<e;n++)t[n]=this.revBin(n,r,e);return t},d.prototype.revBin=function(e,t,r){if(0===e||e===r-1)return e;for(var n=0,i=0;i<t;i++)n|=(1&e)<<t-i-1,e>>=1;return n},d.prototype.permute=function(e,t,r,n,i,o){for(var a=0;a<o;a++)n[a]=t[e[a]],i[a]=r[e[a]]},d.prototype.transform=function(e,t,r,n,i,o){this.permute(o,e,t,r,n,i);for(var a=1;a<i;a<<=1)for(var f=a<<1,s=Math.cos(2*Math.PI/f),c=Math.sin(2*Math.PI/f),u=0;u<i;u+=f)for(var h=s,d=c,l=0;l<a;l++){var p=r[u+l],b=n[u+l],y=r[u+l+a],v=n[u+l+a],g=h*y-d*v;v=h*v+d*y,y=g,r[u+l]=p+y,n[u+l]=b+v,r[u+l+a]=p-y,n[u+l+a]=b-v,l!==f&&(g=s*h-c*d,d=s*d+c*h,h=g)}},d.prototype.guessLen13b=function(e,t){var r=1|Math.max(t,e),n=1&r,i=0;for(r=r/2|0;r;r>>>=1)i++;return 1<<i+1+n},d.prototype.conjugate=function(e,t,r){if(!(r<=1))for(var n=0;n<r/2;n++){var i=e[n];e[n]=e[r-n-1],e[r-n-1]=i,i=t[n],t[n]=-t[r-n-1],t[r-n-1]=-i}},d.prototype.normalize13b=function(e,t){for(var r=0,n=0;n<t/2;n++){var i=8192*Math.round(e[2*n+1]/t)+Math.round(e[2*n]/t)+r;e[n]=67108863&i,r=i<67108864?0:i/67108864|0}return e},d.prototype.convert13b=function(e,t,r,i){for(var o=0,a=0;a<t;a++)o+=0|e[a],r[2*a]=8191&o,o>>>=13,r[2*a+1]=8191&o,o>>>=13;for(a=2*t;a<i;++a)r[a]=0;n(0===o),n(0==(-8192&o))},d.prototype.stub=function(e){for(var t=new Array(e),r=0;r<e;r++)t[r]=0;return t},d.prototype.mulp=function(e,t,r){var n=2*this.guessLen13b(e.length,t.length),i=this.makeRBT(n),o=this.stub(n),a=new Array(n),f=new Array(n),s=new Array(n),c=new Array(n),u=new Array(n),h=new Array(n),d=r.words;d.length=n,this.convert13b(e.words,e.length,a,n),this.convert13b(t.words,t.length,c,n),this.transform(a,o,f,s,n,i),this.transform(c,o,u,h,n,i);for(var l=0;l<n;l++){var p=f[l]*u[l]-s[l]*h[l];s[l]=f[l]*h[l]+s[l]*u[l],f[l]=p}return this.conjugate(f,s,n),this.transform(f,s,d,o,n,i),this.conjugate(d,o,n),this.normalize13b(d,n),r.negative=e.negative^t.negative,r.length=e.length+t.length,r.strip()},o.prototype.mul=function(e){var t=new o(null);return t.words=new Array(this.length+e.length),this.mulTo(e,t)},o.prototype.mulf=function(e){var t=new o(null);return t.words=new Array(this.length+e.length),h(this,e,t)},o.prototype.imul=function(e){return this.clone().mulTo(e,this)},o.prototype.imuln=function(e){n("number"==typeof e),n(e<67108864);for(var t=0,r=0;r<this.length;r++){var i=(0|this.words[r])*e,o=(67108863&i)+(67108863&t);t>>=26,t+=i/67108864|0,t+=o>>>26,this.words[r]=67108863&o}return 0!==t&&(this.words[r]=t,this.length++),this},o.prototype.muln=function(e){return this.clone().imuln(e)},o.prototype.sqr=function(){return this.mul(this)},o.prototype.isqr=function(){return this.imul(this.clone())},o.prototype.pow=function(e){var t=s(e);if(0===t.length)return new o(1);for(var r=this,n=0;n<t.length&&0===t[n];n++,r=r.sqr());if(++n<t.length)for(var i=r.sqr();n<t.length;n++,i=i.sqr())0!==t[n]&&(r=r.mul(i));return r},o.prototype.iushln=function(e){n("number"==typeof e&&e>=0);var t,r=e%26,i=(e-r)/26,o=67108863>>>26-r<<26-r;if(0!==r){var a=0;for(t=0;t<this.length;t++){var f=this.words[t]&o,s=(0|this.words[t])-f<<r;this.words[t]=s|a,a=f>>>26-r}a&&(this.words[t]=a,this.length++)}if(0!==i){for(t=this.length-1;t>=0;t--)this.words[t+i]=this.words[t];for(t=0;t<i;t++)this.words[t]=0;this.length+=i}return this.strip()},o.prototype.ishln=function(e){return n(0===this.negative),this.iushln(e)},o.prototype.iushrn=function(e,t,r){n("number"==typeof e&&e>=0);var i;i=t?(t-t%26)/26:0;var o=e%26,a=Math.min((e-o)/26,this.length),f=67108863^67108863>>>o<<o,s=r;if(i-=a,i=Math.max(0,i),s){for(var c=0;c<a;c++)s.words[c]=this.words[c];s.length=a}if(0===a);else if(this.length>a)for(this.length-=a,c=0;c<this.length;c++)this.words[c]=this.words[c+a];else this.words[0]=0,this.length=1;var u=0;for(c=this.length-1;c>=0&&(0!==u||c>=i);c--){var h=0|this.words[c];this.words[c]=u<<26-o|h>>>o,u=h&f}return s&&0!==u&&(s.words[s.length++]=u),0===this.length&&(this.words[0]=0,this.length=1),this.strip()},o.prototype.ishrn=function(e,t,r){return n(0===this.negative),this.iushrn(e,t,r)},o.prototype.shln=function(e){return this.clone().ishln(e)},o.prototype.ushln=function(e){return this.clone().iushln(e)},o.prototype.shrn=function(e){return this.clone().ishrn(e)},o.prototype.ushrn=function(e){return this.clone().iushrn(e)},o.prototype.testn=function(e){n("number"==typeof e&&e>=0);var t=e%26,r=(e-t)/26,i=1<<t;return!(this.length<=r)&&!!(this.words[r]&i)},o.prototype.imaskn=function(e){n("number"==typeof e&&e>=0);var t=e%26,r=(e-t)/26;if(n(0===this.negative,"imaskn works only with positive numbers"),this.length<=r)return this;if(0!==t&&r++,this.length=Math.min(r,this.length),0!==t){var i=67108863^67108863>>>t<<t;this.words[this.length-1]&=i}return this.strip()},o.prototype.maskn=function(e){return this.clone().imaskn(e)},o.prototype.iaddn=function(e){return n("number"==typeof e),n(e<67108864),e<0?this.isubn(-e):0!==this.negative?1===this.length&&(0|this.words[0])<e?(this.words[0]=e-(0|this.words[0]),this.negative=0,this):(this.negative=0,this.isubn(e),this.negative=1,this):this._iaddn(e)},o.prototype._iaddn=function(e){this.words[0]+=e;for(var t=0;t<this.length&&this.words[t]>=67108864;t++)this.words[t]-=67108864,t===this.length-1?this.words[t+1]=1:this.words[t+1]++;return this.length=Math.max(this.length,t+1),this},o.prototype.isubn=function(e){if(n("number"==typeof e),n(e<67108864),e<0)return this.iaddn(-e);if(0!==this.negative)return this.negative=0,this.iaddn(e),this.negative=1,this;if(this.words[0]-=e,1===this.length&&this.words[0]<0)this.words[0]=-this.words[0],this.negative=1;else for(var t=0;t<this.length&&this.words[t]<0;t++)this.words[t]+=67108864,this.words[t+1]-=1;return this.strip()},o.prototype.addn=function(e){return this.clone().iaddn(e)},o.prototype.subn=function(e){return this.clone().isubn(e)},o.prototype.iabs=function(){return this.negative=0,this},o.prototype.abs=function(){return this.clone().iabs()},o.prototype._ishlnsubmul=function(e,t,r){var i,o=e.length+r;this._expand(o);var a,f=0;for(i=0;i<e.length;i++){a=(0|this.words[i+r])+f;var s=(0|e.words[i])*t;a-=67108863&s,f=(a>>26)-(s/67108864|0),this.words[i+r]=67108863&a}for(;i<this.length-r;i++)a=(0|this.words[i+r])+f,f=a>>26,this.words[i+r]=67108863&a;if(0===f)return this.strip();for(n(-1===f),f=0,i=0;i<this.length;i++)a=-(0|this.words[i])+f,f=a>>26,this.words[i]=67108863&a;return this.negative=1,this.strip()},o.prototype._wordDiv=function(e,t){var r=this.length-e.length,n=this.clone(),i=e,a=0|i.words[i.length-1];0!==(r=26-this._countBits(a))&&(i=i.ushln(r),n.iushln(r),a=0|i.words[i.length-1]);var f,s=n.length-i.length;if("mod"!==t){f=new o(null),f.length=s+1,f.words=new Array(f.length);for(var c=0;c<f.length;c++)f.words[c]=0}var u=n.clone()._ishlnsubmul(i,1,s);0===u.negative&&(n=u,f&&(f.words[s]=1));for(var h=s-1;h>=0;h--){var d=67108864*(0|n.words[i.length+h])+(0|n.words[i.length+h-1]);for(d=Math.min(d/a|0,67108863),n._ishlnsubmul(i,d,h);0!==n.negative;)d--,n.negative=0,n._ishlnsubmul(i,1,h),n.isZero()||(n.negative^=1);f&&(f.words[h]=d)}return f&&f.strip(),n.strip(),"div"!==t&&0!==r&&n.iushrn(r),{div:f||null,mod:n}},o.prototype.divmod=function(e,t,r){if(n(!e.isZero()),this.isZero())return{div:new o(0),mod:new o(0)};var i,a,f;return 0!==this.negative&&0===e.negative?(f=this.neg().divmod(e,t),"mod"!==t&&(i=f.div.neg()),"div"!==t&&(a=f.mod.neg(),r&&0!==a.negative&&a.iadd(e)),{div:i,mod:a}):0===this.negative&&0!==e.negative?(f=this.divmod(e.neg(),t),"mod"!==t&&(i=f.div.neg()),{div:i,mod:f.mod}):0!=(this.negative&e.negative)?(f=this.neg().divmod(e.neg(),t),"div"!==t&&(a=f.mod.neg(),r&&0!==a.negative&&a.isub(e)),{div:f.div,mod:a}):e.length>this.length||this.cmp(e)<0?{div:new o(0),mod:this}:1===e.length?"div"===t?{div:this.divn(e.words[0]),mod:null}:"mod"===t?{div:null,mod:new o(this.modn(e.words[0]))}:{div:this.divn(e.words[0]),mod:new o(this.modn(e.words[0]))}:this._wordDiv(e,t)},o.prototype.div=function(e){return this.divmod(e,"div",!1).div},o.prototype.mod=function(e){return this.divmod(e,"mod",!1).mod},o.prototype.umod=function(e){return this.divmod(e,"mod",!0).mod},o.prototype.divRound=function(e){var t=this.divmod(e);if(t.mod.isZero())return t.div;var r=0!==t.div.negative?t.mod.isub(e):t.mod,n=e.ushrn(1),i=e.andln(1),o=r.cmp(n);return o<0||1===i&&0===o?t.div:0!==t.div.negative?t.div.isubn(1):t.div.iaddn(1)},o.prototype.modn=function(e){n(e<=67108863);for(var t=(1<<26)%e,r=0,i=this.length-1;i>=0;i--)r=(t*r+(0|this.words[i]))%e;return r},o.prototype.idivn=function(e){n(e<=67108863);for(var t=0,r=this.length-1;r>=0;r--){var i=(0|this.words[r])+67108864*t;this.words[r]=i/e|0,t=i%e}return this.strip()},o.prototype.divn=function(e){return this.clone().idivn(e)},o.prototype.egcd=function(e){n(0===e.negative),n(!e.isZero());var t=this,r=e.clone();t=0!==t.negative?t.umod(e):t.clone();for(var i=new o(1),a=new o(0),f=new o(0),s=new o(1),c=0;t.isEven()&&r.isEven();)t.iushrn(1),r.iushrn(1),++c;for(var u=r.clone(),h=t.clone();!t.isZero();){for(var d=0,l=1;0==(t.words[0]&l)&&d<26;++d,l<<=1);if(d>0)for(t.iushrn(d);d-- >0;)(i.isOdd()||a.isOdd())&&(i.iadd(u),a.isub(h)),i.iushrn(1),a.iushrn(1);for(var p=0,b=1;0==(r.words[0]&b)&&p<26;++p,b<<=1);if(p>0)for(r.iushrn(p);p-- >0;)(f.isOdd()||s.isOdd())&&(f.iadd(u),s.isub(h)),f.iushrn(1),s.iushrn(1);t.cmp(r)>=0?(t.isub(r),i.isub(f),a.isub(s)):(r.isub(t),f.isub(i),s.isub(a))}return{a:f,b:s,gcd:r.iushln(c)}},o.prototype._invmp=function(e){n(0===e.negative),n(!e.isZero());var t=this,r=e.clone();t=0!==t.negative?t.umod(e):t.clone();for(var i=new o(1),a=new o(0),f=r.clone();t.cmpn(1)>0&&r.cmpn(1)>0;){for(var s=0,c=1;0==(t.words[0]&c)&&s<26;++s,c<<=1);if(s>0)for(t.iushrn(s);s-- >0;)i.isOdd()&&i.iadd(f),i.iushrn(1);for(var u=0,h=1;0==(r.words[0]&h)&&u<26;++u,h<<=1);if(u>0)for(r.iushrn(u);u-- >0;)a.isOdd()&&a.iadd(f),a.iushrn(1);t.cmp(r)>=0?(t.isub(r),i.isub(a)):(r.isub(t),a.isub(i))}var d;return d=0===t.cmpn(1)?i:a,d.cmpn(0)<0&&d.iadd(e),d},o.prototype.gcd=function(e){if(this.isZero())return e.abs();if(e.isZero())return this.abs();var t=this.clone(),r=e.clone();t.negative=0,r.negative=0;for(var n=0;t.isEven()&&r.isEven();n++)t.iushrn(1),r.iushrn(1);for(;;){for(;t.isEven();)t.iushrn(1);for(;r.isEven();)r.iushrn(1);var i=t.cmp(r);if(i<0){var o=t;t=r,r=o}else if(0===i||0===r.cmpn(1))break;t.isub(r)}return r.iushln(n)},o.prototype.invm=function(e){return this.egcd(e).a.umod(e)},o.prototype.isEven=function(){return 0==(1&this.words[0])},o.prototype.isOdd=function(){return 1==(1&this.words[0])},o.prototype.andln=function(e){return this.words[0]&e},o.prototype.bincn=function(e){n("number"==typeof e);var t=e%26,r=(e-t)/26,i=1<<t;if(this.length<=r)return this._expand(r+1),this.words[r]|=i,this;for(var o=i,a=r;0!==o&&a<this.length;a++){var f=0|this.words[a];f+=o,o=f>>>26,f&=67108863,this.words[a]=f}return 0!==o&&(this.words[a]=o,this.length++),this},o.prototype.isZero=function(){return 1===this.length&&0===this.words[0]},o.prototype.cmpn=function(e){var t=e<0;if(0!==this.negative&&!t)return-1;if(0===this.negative&&t)return 1;this.strip();var r;if(this.length>1)r=1;else{t&&(e=-e),n(e<=67108863,"Number is too big");var i=0|this.words[0];r=i===e?0:i<e?-1:1}return 0!==this.negative?0|-r:r},o.prototype.cmp=function(e){if(0!==this.negative&&0===e.negative)return-1;if(0===this.negative&&0!==e.negative)return 1;var t=this.ucmp(e);return 0!==this.negative?0|-t:t},o.prototype.ucmp=function(e){if(this.length>e.length)return 1;if(this.length<e.length)return-1;for(var t=0,r=this.length-1;r>=0;r--){var n=0|this.words[r],i=0|e.words[r];if(n!==i){n<i?t=-1:n>i&&(t=1);break}}return t},o.prototype.gtn=function(e){return 1===this.cmpn(e)},o.prototype.gt=function(e){return 1===this.cmp(e)},o.prototype.gten=function(e){return this.cmpn(e)>=0},o.prototype.gte=function(e){return this.cmp(e)>=0},o.prototype.ltn=function(e){return-1===this.cmpn(e)},o.prototype.lt=function(e){return-1===this.cmp(e)},o.prototype.lten=function(e){return this.cmpn(e)<=0},o.prototype.lte=function(e){return this.cmp(e)<=0},o.prototype.eqn=function(e){return 0===this.cmpn(e)},o.prototype.eq=function(e){return 0===this.cmp(e)},o.red=function(e){return new g(e)},o.prototype.toRed=function(e){return n(!this.red,"Already a number in reduction context"),n(0===this.negative,"red works only with positives"),e.convertTo(this)._forceRed(e)},o.prototype.fromRed=function(){return n(this.red,"fromRed works only with numbers in reduction context"),this.red.convertFrom(this)},o.prototype._forceRed=function(e){return this.red=e,this},o.prototype.forceRed=function(e){return n(!this.red,"Already a number in reduction context"),this._forceRed(e)},o.prototype.redAdd=function(e){return n(this.red,"redAdd works only with red numbers"),this.red.add(this,e)},o.prototype.redIAdd=function(e){return n(this.red,"redIAdd works only with red numbers"),this.red.iadd(this,e)},o.prototype.redSub=function(e){return n(this.red,"redSub works only with red numbers"),this.red.sub(this,e)},o.prototype.redISub=function(e){return n(this.red,"redISub works only with red numbers"),this.red.isub(this,e)},o.prototype.redShl=function(e){return n(this.red,"redShl works only with red numbers"),this.red.shl(this,e)},o.prototype.redMul=function(e){return n(this.red,"redMul works only with red numbers"),this.red._verify2(this,e),this.red.mul(this,e)},o.prototype.redIMul=function(e){return n(this.red,"redMul works only with red numbers"),this.red._verify2(this,e),this.red.imul(this,e)},o.prototype.redSqr=function(){return n(this.red,"redSqr works only with red numbers"),this.red._verify1(this),this.red.sqr(this)},o.prototype.redISqr=function(){return n(this.red,"redISqr works only with red numbers"),this.red._verify1(this),this.red.isqr(this)},o.prototype.redSqrt=function(){return n(this.red,"redSqrt works only with red numbers"),this.red._verify1(this),this.red.sqrt(this)},o.prototype.redInvm=function(){return n(this.red,"redInvm works only with red numbers"),this.red._verify1(this),this.red.invm(this)},o.prototype.redNeg=function(){return n(this.red,"redNeg works only with red numbers"),this.red._verify1(this),this.red.neg(this)},o.prototype.redPow=function(e){return n(this.red&&!e.red,"redPow(normalNum)"),this.red._verify1(this),this.red.pow(this,e)};var k={k256:null,p224:null,p192:null,p25519:null};l.prototype._tmp=function(){var e=new o(null);return e.words=new Array(Math.ceil(this.n/13)),e},l.prototype.ireduce=function(e){var t,r=e;do{this.split(r,this.tmp),r=this.imulK(r),r=r.iadd(this.tmp),t=r.bitLength()}while(t>this.n);var n=t<this.n?-1:r.ucmp(this.p);return 0===n?(r.words[0]=0,r.length=1):n>0?r.isub(this.p):r.strip(),r},l.prototype.split=function(e,t){e.iushrn(this.n,0,t)},l.prototype.imulK=function(e){return e.imul(this.k)},i(p,l),p.prototype.split=function(e,t){for(var r=Math.min(e.length,9),n=0;n<r;n++)t.words[n]=e.words[n];if(t.length=r,e.length<=9)return e.words[0]=0,void(e.length=1);var i=e.words[9];for(t.words[t.length++]=4194303&i,n=10;n<e.length;n++){var o=0|e.words[n];e.words[n-10]=(4194303&o)<<4|i>>>22,i=o}i>>>=22,e.words[n-10]=i,0===i&&e.length>10?e.length-=10:e.length-=9},p.prototype.imulK=function(e){e.words[e.length]=0,e.words[e.length+1]=0,e.length+=2;for(var t=0,r=0;r<e.length;r++){var n=0|e.words[r];t+=977*n,e.words[r]=67108863&t,t=64*n+(t/67108864|0)}return 0===e.words[e.length-1]&&(e.length--,0===e.words[e.length-1]&&e.length--),e},i(b,l),i(y,l),i(v,l),v.prototype.imulK=function(e){for(var t=0,r=0;r<e.length;r++){var n=19*(0|e.words[r])+t,i=67108863&n;n>>>=26,e.words[r]=i,t=n}return 0!==t&&(e.words[e.length++]=t),e},o._prime=function(e){if(k[e])return k[e];var t;if("k256"===e)t=new p;else if("p224"===e)t=new b;else if("p192"===e)t=new y;else{if("p25519"!==e)throw new Error("Unknown prime "+e);t=new v}return k[e]=t,t},g.prototype._verify1=function(e){n(0===e.negative,"red works only with positives"),n(e.red,"red works only with red numbers")},g.prototype._verify2=function(e,t){n(0==(e.negative|t.negative),"red works only with positives"),n(e.red&&e.red===t.red,"red works only with red numbers")},g.prototype.imod=function(e){return this.prime?this.prime.ireduce(e)._forceRed(this):e.umod(this.m)._forceRed(this)},g.prototype.neg=function(e){return e.isZero()?e.clone():this.m.sub(e)._forceRed(this)},g.prototype.add=function(e,t){this._verify2(e,t);var r=e.add(t);return r.cmp(this.m)>=0&&r.isub(this.m),r._forceRed(this)},g.prototype.iadd=function(e,t){this._verify2(e,t);var r=e.iadd(t);return r.cmp(this.m)>=0&&r.isub(this.m),r},g.prototype.sub=function(e,t){this._verify2(e,t);var r=e.sub(t);return r.cmpn(0)<0&&r.iadd(this.m),r._forceRed(this)},g.prototype.isub=function(e,t){this._verify2(e,t);var r=e.isub(t);return r.cmpn(0)<0&&r.iadd(this.m),r},g.prototype.shl=function(e,t){return this._verify1(e),this.imod(e.ushln(t))},g.prototype.imul=function(e,t){return this._verify2(e,t),this.imod(e.imul(t))},g.prototype.mul=function(e,t){return this._verify2(e,t),this.imod(e.mul(t))},g.prototype.isqr=function(e){return this.imul(e,e.clone())},g.prototype.sqr=function(e){return this.mul(e,e)},g.prototype.sqrt=function(e){if(e.isZero())return e.clone();var t=this.m.andln(3);if(n(t%2==1),3===t){var r=this.m.add(new o(1)).iushrn(2);return this.pow(e,r)}for(var i=this.m.subn(1),a=0;!i.isZero()&&0===i.andln(1);)a++,i.iushrn(1);n(!i.isZero());var f=new o(1).toRed(this),s=f.redNeg(),c=this.m.subn(1).iushrn(1),u=this.m.bitLength();for(u=new o(2*u*u).toRed(this);0!==this.pow(u,c).cmp(s);)u.redIAdd(s);for(var h=this.pow(u,i),d=this.pow(e,i.addn(1).iushrn(1)),l=this.pow(e,i),p=a;0!==l.cmp(f);){for(var b=l,y=0;0!==b.cmp(f);y++)b=b.redSqr();n(y<p);var v=this.pow(h,new o(1).iushln(p-y-1));d=d.redMul(v),h=v.redSqr(),l=l.redMul(h),p=y}return d},g.prototype.invm=function(e){var t=e._invmp(this.m);return 0!==t.negative?(t.negative=0,this.imod(t).redNeg()):this.imod(t)},g.prototype.pow=function(e,t){if(t.isZero())return new o(1).toRed(this);if(0===t.cmpn(1))return e.clone();var r=new Array(16);r[0]=new o(1).toRed(this),r[1]=e;for(var n=2;n<r.length;n++)r[n]=this.mul(r[n-1],e);var i=r[0],a=0,f=0,s=t.bitLength()%26;for(0===s&&(s=26),n=t.length-1;n>=0;n--){for(var c=t.words[n],u=s-1;u>=0;u--){var h=c>>u&1;i!==r[0]&&(i=this.sqr(i)),0!==h||0!==a?(a<<=1,a|=h,(4===++f||0===n&&0===u)&&(i=this.mul(i,r[a]),f=0,a=0)):f=0}s=26}return i},g.prototype.convertTo=function(e){var t=e.umod(this.m);return t===e?t.clone():t},g.prototype.convertFrom=function(e){var t=e.clone();return t.red=null,t},o.mont=function(e){return new m(e)},i(m,g),m.prototype.convertTo=function(e){return this.imod(e.ushln(this.shift))},m.prototype.convertFrom=function(e){var t=this.imod(e.mul(this.rinv));return t.red=null,t},m.prototype.imul=function(e,t){if(e.isZero()||t.isZero())return e.words[0]=0,e.length=1,e;var r=e.imul(t),n=r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),i=r.isub(n).iushrn(this.shift),o=i;return i.cmp(this.m)>=0?o=i.isub(this.m):i.cmpn(0)<0&&(o=i.iadd(this.m)),o._forceRed(this)},m.prototype.mul=function(e,t){if(e.isZero()||t.isZero())return new o(0)._forceRed(this);var r=e.mul(t),n=r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),i=r.isub(n).iushrn(this.shift),a=i;return i.cmp(this.m)>=0?a=i.isub(this.m):i.cmpn(0)<0&&(a=i.iadd(this.m)),a._forceRed(this)},m.prototype.invm=function(e){return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)}}(void 0===e||e,this)}).call(t,r(205)(e))},function(e,t,r){"use strict";var n=t;n.version=r(212).version,n.utils=r(213),n.rand=r(102),n.curve=r(40),n.curves=r(218),n.ec=r(226),n.eddsa=r(230)},function(e,t){function r(e,t){if(!e)throw new Error(t||"Assertion failed")}e.exports=r,r.equal=function(e,t,r){if(e!=t)throw new Error(r||"Assertion failed: "+e+" != "+t)}},function(e,t,r){"use strict";function n(e,t){if(Array.isArray(e))return e.slice();if(!e)return[];var r=[];if("string"==typeof e)if(t){if("hex"===t)for(e=e.replace(/[^a-z0-9]+/gi,""),e.length%2!=0&&(e="0"+e),n=0;n<e.length;n+=2)r.push(parseInt(e[n]+e[n+1],16))}else for(var n=0;n<e.length;n++){var i=e.charCodeAt(n),o=i>>8,a=255&i;o?r.push(o,a):r.push(a)}else for(n=0;n<e.length;n++)r[n]=0|e[n];return r}function i(e){for(var t="",r=0;r<e.length;r++)t+=f(e[r].toString(16));return t}function o(e){return(e>>>24|e>>>8&65280|e<<8&16711680|(255&e)<<24)>>>0}function a(e,t){for(var r="",n=0;n<e.length;n++){var i=e[n];"little"===t&&(i=o(i)),r+=s(i.toString(16))}return r}function f(e){return 1===e.length?"0"+e:e}function s(e){return 7===e.length?"0"+e:6===e.length?"00"+e:5===e.length?"000"+e:4===e.length?"0000"+e:3===e.length?"00000"+e:2===e.length?"000000"+e:1===e.length?"0000000"+e:e}function c(e,t,r,n){var i=r-t;B(i%4==0);for(var o=new Array(i/4),a=0,f=t;a<o.length;a++,f+=4){var s;s="big"===n?e[f]<<24|e[f+1]<<16|e[f+2]<<8|e[f+3]:e[f+3]<<24|e[f+2]<<16|e[f+1]<<8|e[f],o[a]=s>>>0}return o}function u(e,t){for(var r=new Array(4*e.length),n=0,i=0;n<e.length;n++,i+=4){var o=e[n];"big"===t?(r[i]=o>>>24,r[i+1]=o>>>16&255,r[i+2]=o>>>8&255,r[i+3]=255&o):(r[i+3]=o>>>24,r[i+2]=o>>>16&255,r[i+1]=o>>>8&255,r[i]=255&o)}return r}function h(e,t){return e>>>t|e<<32-t}function d(e,t){return e<<t|e>>>32-t}function l(e,t){return e+t>>>0}function p(e,t,r){return e+t+r>>>0}function b(e,t,r,n){return e+t+r+n>>>0}function y(e,t,r,n,i){return e+t+r+n+i>>>0}function v(e,t,r,n){var i=e[t],o=e[t+1],a=n+o>>>0,f=(a<n?1:0)+r+i;e[t]=f>>>0,e[t+1]=a}function g(e,t,r,n){return(t+n>>>0<t?1:0)+e+r>>>0}function m(e,t,r,n){return t+n>>>0}function _(e,t,r,n,i,o,a,f){var s=0,c=t;return c=c+n>>>0,s+=c<t?1:0,c=c+o>>>0,s+=c<o?1:0,c=c+f>>>0,s+=c<f?1:0,e+r+i+a+s>>>0}function w(e,t,r,n,i,o,a,f){return t+n+o+f>>>0}function S(e,t,r,n,i,o,a,f,s,c){var u=0,h=t;return h=h+n>>>0,u+=h<t?1:0,h=h+o>>>0,u+=h<o?1:0,h=h+f>>>0,u+=h<f?1:0,h=h+c>>>0,u+=h<c?1:0,e+r+i+a+s+u>>>0}function M(e,t,r,n,i,o,a,f,s,c){return t+n+o+f+c>>>0}function E(e,t,r){return(t<<32-r|e>>>r)>>>0}function k(e,t,r){return(e<<32-r|t>>>r)>>>0}function x(e,t,r){return e>>>r}function A(e,t,r){return(e<<32-r|t>>>r)>>>0}var B=r(5),I=r(0);t.inherits=I,t.toArray=n,t.toHex=i,t.htonl=o,t.toHex32=a,t.zero2=f,t.zero8=s,t.join32=c,t.split32=u,t.rotr32=h,t.rotl32=d,t.sum32=l,t.sum32_3=p,t.sum32_4=b,t.sum32_5=y,t.sum64=v,t.sum64_hi=g,t.sum64_lo=m,t.sum64_4_hi=_,t.sum64_4_lo=w,t.sum64_5_hi=S,t.sum64_5_lo=M,t.rotr64_hi=E,t.rotr64_lo=k,t.shr64_hi=x,t.shr64_lo=A},function(e,t){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function i(e){if(u===setTimeout)return setTimeout(e,0);if((u===r||!u)&&setTimeout)return u=setTimeout,setTimeout(e,0);try{return u(e,0)}catch(t){try{return u.call(null,e,0)}catch(t){return u.call(this,e,0)}}}function o(e){if(h===clearTimeout)return clearTimeout(e);if((h===n||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(e);try{return h(e)}catch(t){try{return h.call(null,e)}catch(t){return h.call(this,e)}}}function a(){b&&l&&(b=!1,l.length?p=l.concat(p):y=-1,p.length&&f())}function f(){if(!b){var e=i(a);b=!0;for(var t=p.length;t;){for(l=p,p=[];++y<t;)l&&l[y].run();y=-1,t=p.length}l=null,b=!1,o(e)}}function s(e,t){this.fun=e,this.array=t}function c(){}var u,h,d=e.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:r}catch(e){u=r}try{h="function"==typeof clearTimeout?clearTimeout:n}catch(e){h=n}}();var l,p=[],b=!1,y=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];p.push(new s(e,t)),1!==p.length||b||i(f)},s.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.prependListener=c,d.prependOnceListener=c,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,t){var r=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){function n(e){o.call(this),this.hashMode="string"==typeof e,this.hashMode?this[e]=this._finalOrDigest:this.final=this._finalOrDigest,this._final&&(this.__final=this._final,this._final=null),this._decoder=null,this._encoding=null}var i=r(2).Buffer,o=r(12).Transform,a=r(60).StringDecoder;r(0)(n,o),n.prototype.update=function(e,t,r){"string"==typeof e&&(e=i.from(e,t));var n=this._update(e);return this.hashMode?this:(r&&(n=this._toString(n,r)),n)},n.prototype.setAutoPadding=function(){},n.prototype.getAuthTag=function(){throw new Error("trying to get auth tag in unsupported state")},n.prototype.setAuthTag=function(){throw new Error("trying to set auth tag in unsupported state")},n.prototype.setAAD=function(){throw new Error("trying to set aad in unsupported state")},n.prototype._transform=function(e,t,r){var n;try{this.hashMode?this._update(e):this.push(this._update(e))}catch(e){n=e}finally{r(n)}},n.prototype._flush=function(e){var t;try{this.push(this.__final())}catch(e){t=e}e(t)},n.prototype._finalOrDigest=function(e){var t=this.__final()||i.alloc(0);return e&&(t=this._toString(t,e,!0)),t},n.prototype._toString=function(e,t,r){if(this._decoder||(this._decoder=new a(t),this._encoding=t),this._encoding!==t)throw new Error("can't switch encodings");var n=this._decoder.write(e);return r&&(n+=this._decoder.end()),n},e.exports=n},function(e,t){var r={}.hasOwnProperty;e.exports=function(e,t){return r.call(e,t)}},function(e,t,r){function n(){i.call(this)}e.exports=n;var i=r(57).EventEmitter;r(0)(n,i),n.Readable=r(58),n.Writable=r(168),n.Duplex=r(169),n.Transform=r(170),n.PassThrough=r(171),n.Stream=n,n.prototype.pipe=function(e,t){function r(t){e.writable&&!1===e.write(t)&&c.pause&&c.pause()}function n(){c.readable&&c.resume&&c.resume()}function o(){u||(u=!0,e.end())}function a(){u||(u=!0,"function"==typeof e.destroy&&e.destroy())}function f(e){if(s(),0===i.listenerCount(this,"error"))throw e}function s(){c.removeListener("data",r),e.removeListener("drain",n),c.removeListener("end",o),c.removeListener("close",a),c.removeListener("error",f),e.removeListener("error",f),c.removeListener("end",s),c.removeListener("close",s),e.removeListener("close",s)}var c=this;c.on("data",r),e.on("drain",n),e._isStdio||t&&!1===t.end||(c.on("end",o),c.on("close",a));var u=!1;return c.on("error",f),e.on("error",f),c.on("end",s),c.on("close",s),e.on("close",s),e.emit("pipe",c),e}},function(e,t,r){"use strict";function n(e){if(!(this instanceof n))return new n(e);c.call(this,e),u.call(this,e),e&&!1===e.readable&&(this.readable=!1),e&&!1===e.writable&&(this.writable=!1),this.allowHalfOpen=!0,e&&!1===e.allowHalfOpen&&(this.allowHalfOpen=!1),this.once("end",i)}function i(){this.allowHalfOpen||this._writableState.ended||a(o,this)}function o(e){e.end()}var a=r(36),f=Object.keys||function(e){var t=[];for(var r in e)t.push(r);return t};e.exports=n;var s=r(21);s.inherits=r(0);var c=r(82),u=r(59);s.inherits(n,c);for(var h=f(u.prototype),d=0;d<h.length;d++){var l=h[d];n.prototype[l]||(n.prototype[l]=u.prototype[l])}Object.defineProperty(n.prototype,"destroyed",{get:function(){return void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed&&this._writableState.destroyed)},set:function(e){void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed=e,this._writableState.destroyed=e)}}),n.prototype._destroy=function(e,t){this.push(null),this.end(),a(t,e)}},function(e,t,r){var n=r(15),i=r(31);e.exports=r(16)?function(e,t,r){return n.f(e,t,i(1,r))}:function(e,t,r){return e[t]=r,e}},function(e,t,r){var n=r(29),i=r(70),o=r(47),a=Object.defineProperty;t.f=r(16)?Object.defineProperty:function(e,t,r){if(n(e),t=o(t,!0),n(r),i)try{return a(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},function(e,t,r){e.exports=!r(20)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t,r){var n=r(75),i=r(44);e.exports=function(e){return n(i(e))}},function(e,t,r){var n=r(50)("wks"),i=r(33),o=r(8).Symbol,a="function"==typeof o;(e.exports=function(e){return n[e]||(n[e]=a&&o[e]||(a?o:i)("Symbol."+e))}).store=n},function(e,t,r){function n(e,t){this._block=i.alloc(e),this._finalSize=t,this._blockSize=e,this._len=0}var i=r(2).Buffer;n.prototype.update=function(e,t){"string"==typeof e&&(t=t||"utf8",e=i.from(e,t));for(var r=this._block,n=this._blockSize,o=e.length,a=this._len,f=0;f<o;){for(var s=a%n,c=Math.min(o-f,n-s),u=0;u<c;u++)r[s+u]=e[f+u];a+=c,f+=c,a%n==0&&this._update(r)}return this._len+=o,this},n.prototype.digest=function(e){var t=this._len%this._blockSize;this._block[t]=128,this._block.fill(0,t+1),t>=this._finalSize&&(this._update(this._block),this._block.fill(0));var r=8*this._len;if(r<=4294967295)this._block.writeUInt32BE(r,this._blockSize-4);else{var n=4294967295&r,i=(r-n)/4294967296;this._block.writeUInt32BE(i,this._blockSize-8),this._block.writeUInt32BE(n,this._blockSize-4)}this._update(this._block);var o=this._hash();return e?o.toString(e):o},n.prototype._update=function(){throw new Error("_update must be implemented by subclass")},e.exports=n},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,r){(function(e){function r(e){return Array.isArray?Array.isArray(e):"[object Array]"===y(e)}function n(e){return"boolean"==typeof e}function i(e){return null===e}function o(e){return null==e}function a(e){return"number"==typeof e}function f(e){return"string"==typeof e}function s(e){return"symbol"==typeof e}function c(e){return void 0===e}function u(e){return"[object RegExp]"===y(e)}function h(e){return"object"==typeof e&&null!==e}function d(e){return"[object Date]"===y(e)}function l(e){return"[object Error]"===y(e)||e instanceof Error}function p(e){return"function"==typeof e}function b(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e}function y(e){return Object.prototype.toString.call(e)}t.isArray=r,t.isBoolean=n,t.isNull=i,t.isNullOrUndefined=o,t.isNumber=a,t.isString=f,t.isSymbol=s,t.isUndefined=c,t.isRegExp=u,t.isObject=h,t.isDate=d,t.isError=l,t.isFunction=p,t.isPrimitive=b,t.isBuffer=e.isBuffer}).call(t,r(1).Buffer)},function(e,t,r){"use strict";(function(t,n){function i(){throw new Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11")}function o(e,r){if(e>65536)throw new Error("requested too many random bytes");var i=new t.Uint8Array(e);e>0&&f.getRandomValues(i);var o=a.from(i.buffer);return"function"==typeof r?n.nextTick(function(){r(null,o)}):o}var a=r(2).Buffer,f=t.crypto||t.msCrypto;f&&f.getRandomValues?e.exports=o:e.exports=i}).call(t,r(9),r(7))},function(e,t,r){"use strict";(function(t){function n(e){c.call(this,"digest"),this._hash=e,this.buffers=[]}function i(e){c.call(this,"digest"),this._hash=e}var o=r(0),a=r(61),f=r(62),s=r(63),c=r(10);o(n,c),n.prototype._update=function(e){this.buffers.push(e)},n.prototype._final=function(){var e=t.concat(this.buffers),r=this._hash(e);return this.buffers=null,r},o(i,c),i.prototype._update=function(e){this._hash.update(e)},i.prototype._final=function(){return this._hash.digest()},e.exports=function(e){return e=e.toLowerCase(),"md5"===e?new n(a):new i("rmd160"===e||"ripemd160"===e?new f:s(e))}}).call(t,r(1).Buffer)},function(e,t,r){(function(t){e.exports=function(e,r){for(var n=Math.min(e.length,r.length),i=new t(n),o=0;o<n;++o)i[o]=e[o]^r[o];return i}}).call(t,r(1).Buffer)},function(e,t,r){"use strict";function n(){this.pending=null,this.pendingTotal=0,this.blockSize=this.constructor.blockSize,this.outSize=this.constructor.outSize,this.hmacStrength=this.constructor.hmacStrength,this.padLength=this.constructor.padLength/8,this.endian="big",this._delta8=this.blockSize/8,this._delta32=this.blockSize/32}var i=r(6),o=r(5);t.BlockHash=n,n.prototype.update=function(e,t){if(e=i.toArray(e,t),this.pending?this.pending=this.pending.concat(e):this.pending=e,this.pendingTotal+=e.length,this.pending.length>=this._delta8){e=this.pending;var r=e.length%this._delta8;this.pending=e.slice(e.length-r,e.length),0===this.pending.length&&(this.pending=null),e=i.join32(e,0,e.length-r,this.endian);for(var n=0;n<e.length;n+=this._delta32)this._update(e,n,n+this._delta32)}return this},n.prototype.digest=function(e){return this.update(this._pad()),o(null===this.pending),this._digest(e)},n.prototype._pad=function(){var e=this.pendingTotal,t=this._delta8,r=t-(e+this.padLength)%t,n=new Array(r+this.padLength);n[0]=128;for(var i=1;i<r;i++)n[i]=0;if(e<<=3,"big"===this.endian){for(var o=8;o<this.padLength;o++)n[i++]=0;n[i++]=0,n[i++]=0,n[i++]=0,n[i++]=0,n[i++]=e>>>24&255,n[i++]=e>>>16&255,n[i++]=e>>>8&255,n[i++]=255&e}else for(n[i++]=255&e,n[i++]=e>>>8&255,n[i++]=e>>>16&255,n[i++]=e>>>24&255,n[i++]=0,n[i++]=0,n[i++]=0,n[i++]=0,o=8;o<this.padLength;o++)n[i++]=0;return n}},function(e,t,r){var n=t;n.bignum=r(3),n.define=r(234).define,n.base=r(27),n.constants=r(108),n.decoders=r(240),n.encoders=r(242)},function(e,t,r){var n=t;n.Reporter=r(237).Reporter,n.DecoderBuffer=r(107).DecoderBuffer,n.EncoderBuffer=r(107).EncoderBuffer,n.Node=r(238)},function(e,t){var r=e.exports={version:"2.5.1"};"number"==typeof __e&&(__e=r)},function(e,t,r){var n=r(30);e.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,r){var n=r(74),i=r(51);e.exports=Object.keys||function(e){return n(e,i)}},function(e,t){var r=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++r+n).toString(36))}},function(e,t){t.f={}.propertyIsEnumerable},function(e,t,r){e.exports=r(158).default,e.exports.default=e.exports},function(e,t,r){"use strict";(function(t){function r(e,r,n,i){if("function"!=typeof e)throw new TypeError('"callback" argument must be a function');var o,a,f=arguments.length;switch(f){case 0:case 1:return t.nextTick(e);case 2:return t.nextTick(function(){e.call(null,r)});case 3:return t.nextTick(function(){e.call(null,r,n)});case 4:return t.nextTick(function(){e.call(null,r,n,i)});default:for(o=new Array(f-1),a=0;a<o.length;)o[a++]=arguments[a];return t.nextTick(function(){e.apply(null,o)})}}!t.version||0===t.version.indexOf("v0.")||0===t.version.indexOf("v1.")&&0!==t.version.indexOf("v1.8.")?e.exports=r:e.exports=t.nextTick}).call(t,r(7))},function(e,t,r){(function(e,n){function i(e,r){var n={seen:[],stylize:a};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),b(r)?n.showHidden=r:r&&t._extend(n,r),w(n.showHidden)&&(n.showHidden=!1),w(n.depth)&&(n.depth=2),w(n.colors)&&(n.colors=!1),w(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=o),s(n,e,n.depth)}function o(e,t){var r=i.styles[t];return r?"["+i.colors[r][0]+"m"+e+"["+i.colors[r][1]+"m":e}function a(e,t){return e}function f(e){var t={};return e.forEach(function(e,r){t[e]=!0}),t}function s(e,r,n){if(e.customInspect&&r&&x(r.inspect)&&r.inspect!==t.inspect&&(!r.constructor||r.constructor.prototype!==r)){var i=r.inspect(n,e);return m(i)||(i=s(e,i,n)),i}var o=c(e,r);if(o)return o;var a=Object.keys(r),b=f(a);if(e.showHidden&&(a=Object.getOwnPropertyNames(r)),k(r)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return u(r);if(0===a.length){if(x(r)){var y=r.name?": "+r.name:"";return e.stylize("[Function"+y+"]","special")}if(S(r))return e.stylize(RegExp.prototype.toString.call(r),"regexp");if(E(r))return e.stylize(Date.prototype.toString.call(r),"date");if(k(r))return u(r)}var v="",g=!1,_=["{","}"];if(p(r)&&(g=!0,_=["[","]"]),x(r)){v=" [Function"+(r.name?": "+r.name:"")+"]"}if(S(r)&&(v=" "+RegExp.prototype.toString.call(r)),E(r)&&(v=" "+Date.prototype.toUTCString.call(r)),k(r)&&(v=" "+u(r)),0===a.length&&(!g||0==r.length))return _[0]+v+_[1];if(n<0)return S(r)?e.stylize(RegExp.prototype.toString.call(r),"regexp"):e.stylize("[Object]","special");e.seen.push(r);var w;return w=g?h(e,r,n,b,a):a.map(function(t){return d(e,r,n,b,t,g)}),e.seen.pop(),l(w,v,_)}function c(e,t){if(w(t))return e.stylize("undefined","undefined");if(m(t)){var r="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(r,"string")}return g(t)?e.stylize(""+t,"number"):b(t)?e.stylize(""+t,"boolean"):y(t)?e.stylize("null","null"):void 0}function u(e){return"["+Error.prototype.toString.call(e)+"]"}function h(e,t,r,n,i){for(var o=[],a=0,f=t.length;a<f;++a)R(t,String(a))?o.push(d(e,t,r,n,String(a),!0)):o.push("");return i.forEach(function(i){i.match(/^\d+$/)||o.push(d(e,t,r,n,i,!0))}),o}function d(e,t,r,n,i,o){var a,f,c;if(c=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]},c.get?f=c.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):c.set&&(f=e.stylize("[Setter]","special")),R(n,i)||(a="["+i+"]"),f||(e.seen.indexOf(c.value)<0?(f=y(r)?s(e,c.value,null):s(e,c.value,r-1),f.indexOf("\n")>-1&&(f=o?f.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+f.split("\n").map(function(e){return"   "+e}).join("\n"))):f=e.stylize("[Circular]","special")),w(a)){if(o&&i.match(/^\d+$/))return f;a=JSON.stringify(""+i),a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=e.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=e.stylize(a,"string"))}return a+": "+f}function l(e,t,r){var n=0;return e.reduce(function(e,t){return n++,t.indexOf("\n")>=0&&n++,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60?r[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+r[1]:r[0]+t+" "+e.join(", ")+" "+r[1]}function p(e){return Array.isArray(e)}function b(e){return"boolean"==typeof e}function y(e){return null===e}function v(e){return null==e}function g(e){return"number"==typeof e}function m(e){return"string"==typeof e}function _(e){return"symbol"==typeof e}function w(e){return void 0===e}function S(e){return M(e)&&"[object RegExp]"===B(e)}function M(e){return"object"==typeof e&&null!==e}function E(e){return M(e)&&"[object Date]"===B(e)}function k(e){return M(e)&&("[object Error]"===B(e)||e instanceof Error)}function x(e){return"function"==typeof e}function A(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e}function B(e){return Object.prototype.toString.call(e)}function I(e){return e<10?"0"+e.toString(10):e.toString(10)}function j(){var e=new Date,t=[I(e.getHours()),I(e.getMinutes()),I(e.getSeconds())].join(":");return[e.getDate(),C[e.getMonth()],t].join(" ")}function R(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var O=/%[sdj%]/g;t.format=function(e){if(!m(e)){for(var t=[],r=0;r<arguments.length;r++)t.push(i(arguments[r]));return t.join(" ")}for(var r=1,n=arguments,o=n.length,a=String(e).replace(O,function(e){if("%%"===e)return"%";if(r>=o)return e;switch(e){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(e){return"[Circular]"}default:return e}}),f=n[r];r<o;f=n[++r])y(f)||!M(f)?a+=" "+f:a+=" "+i(f);return a},t.deprecate=function(r,i){function o(){if(!a){if(n.throwDeprecation)throw new Error(i);n.traceDeprecation?console.trace(i):console.error(i),a=!0}return r.apply(this,arguments)}if(w(e.process))return function(){return t.deprecate(r,i).apply(this,arguments)};if(!0===n.noDeprecation)return r;var a=!1;return o};var P,T={};t.debuglog=function(e){if(w(P)&&(P=Object({NODE_ENV:"production"}).NODE_DEBUG||""),e=e.toUpperCase(),!T[e])if(new RegExp("\\b"+e+"\\b","i").test(P)){var r=n.pid;T[e]=function(){var n=t.format.apply(t,arguments);console.error("%s %d: %s",e,r,n)}}else T[e]=function(){};return T[e]},t.inspect=i,i.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},i.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=p,t.isBoolean=b,t.isNull=y,t.isNullOrUndefined=v,t.isNumber=g,t.isString=m,t.isSymbol=_,t.isUndefined=w,t.isRegExp=S,t.isObject=M,t.isDate=E,t.isError=k,t.isFunction=x,t.isPrimitive=A,t.isBuffer=r(172);var C=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];t.log=function(){console.log("%s - %s",j(),t.format.apply(t,arguments))},t.inherits=r(173),t._extend=function(e,t){if(!t||!M(t))return e;for(var r=Object.keys(t),n=r.length;n--;)e[r[n]]=t[r[n]];return e}}).call(t,r(9),r(7))},function(e,t,r){function n(e,t,r,n){if(i.isBuffer(e)||(e=i.from(e,"binary")),t&&(i.isBuffer(t)||(t=i.from(t,"binary")),8!==t.length))throw new RangeError("salt should be Buffer with 8 byte length");for(var a=r/8,f=i.alloc(a),s=i.alloc(n||0),c=i.alloc(0);a>0||n>0;){var u=new o;u.update(c),u.update(e),t&&u.update(t),c=u.digest();var h=0;if(a>0){var d=f.length-a;h=Math.min(a,c.length),c.copy(f,d,0,h),a-=h}if(h<c.length&&n>0){var l=s.length-n,p=Math.min(n,c.length-h);c.copy(s,l,h,h+p),n-=p}}return c.fill(0),{key:f,iv:s}}var i=r(2).Buffer,o=r(186);e.exports=n},function(e,t,r){function n(e){f.isBuffer(e)||(e=f.from(e));for(var t=e.length/4|0,r=new Array(t),n=0;n<t;n++)r[n]=e.readUInt32BE(4*n);return r}function i(e){for(;0<e.length;e++)e[0]=0}function o(e,t,r,n,i){for(var o,a,f,s,c=r[0],u=r[1],h=r[2],d=r[3],l=e[0]^t[0],p=e[1]^t[1],b=e[2]^t[2],y=e[3]^t[3],v=4,g=1;g<i;g++)o=c[l>>>24]^u[p>>>16&255]^h[b>>>8&255]^d[255&y]^t[v++],a=c[p>>>24]^u[b>>>16&255]^h[y>>>8&255]^d[255&l]^t[v++],f=c[b>>>24]^u[y>>>16&255]^h[l>>>8&255]^d[255&p]^t[v++],s=c[y>>>24]^u[l>>>16&255]^h[p>>>8&255]^d[255&b]^t[v++],l=o,p=a,b=f,y=s;return o=(n[l>>>24]<<24|n[p>>>16&255]<<16|n[b>>>8&255]<<8|n[255&y])^t[v++],a=(n[p>>>24]<<24|n[b>>>16&255]<<16|n[y>>>8&255]<<8|n[255&l])^t[v++],f=(n[b>>>24]<<24|n[y>>>16&255]<<16|n[l>>>8&255]<<8|n[255&p])^t[v++],s=(n[y>>>24]<<24|n[l>>>16&255]<<16|n[p>>>8&255]<<8|n[255&b])^t[v++],o>>>=0,a>>>=0,f>>>=0,s>>>=0,[o,a,f,s]}function a(e){this._key=n(e),this._reset()}var f=r(2).Buffer,s=[0,1,2,4,8,16,32,64,128,27,54],c=function(){for(var e=new Array(256),t=0;t<256;t++)e[t]=t<128?t<<1:t<<1^283;for(var r=[],n=[],i=[[],[],[],[]],o=[[],[],[],[]],a=0,f=0,s=0;s<256;++s){var c=f^f<<1^f<<2^f<<3^f<<4;c=c>>>8^255&c^99,r[a]=c,n[c]=a;var u=e[a],h=e[u],d=e[h],l=257*e[c]^16843008*c;i[0][a]=l<<24|l>>>8,i[1][a]=l<<16|l>>>16,i[2][a]=l<<8|l>>>24,i[3][a]=l,l=16843009*d^65537*h^257*u^16843008*a,o[0][c]=l<<24|l>>>8,o[1][c]=l<<16|l>>>16,o[2][c]=l<<8|l>>>24,o[3][c]=l,0===a?a=f=1:(a=u^e[e[e[d^u]]],f^=e[e[f]])}return{SBOX:r,INV_SBOX:n,SUB_MIX:i,INV_SUB_MIX:o}}();a.blockSize=16,a.keySize=32,a.prototype.blockSize=a.blockSize,a.prototype.keySize=a.keySize,a.prototype._reset=function(){for(var e=this._key,t=e.length,r=t+6,n=4*(r+1),i=[],o=0;o<t;o++)i[o]=e[o];for(o=t;o<n;o++){var a=i[o-1];o%t==0?(a=a<<8|a>>>24,a=c.SBOX[a>>>24]<<24|c.SBOX[a>>>16&255]<<16|c.SBOX[a>>>8&255]<<8|c.SBOX[255&a],a^=s[o/t|0]<<24):t>6&&o%t==4&&(a=c.SBOX[a>>>24]<<24|c.SBOX[a>>>16&255]<<16|c.SBOX[a>>>8&255]<<8|c.SBOX[255&a]),i[o]=i[o-t]^a}for(var f=[],u=0;u<n;u++){var h=n-u,d=i[h-(u%4?0:4)];f[u]=u<4||h<=4?d:c.INV_SUB_MIX[0][c.SBOX[d>>>24]]^c.INV_SUB_MIX[1][c.SBOX[d>>>16&255]]^c.INV_SUB_MIX[2][c.SBOX[d>>>8&255]]^c.INV_SUB_MIX[3][c.SBOX[255&d]]}this._nRounds=r,this._keySchedule=i,this._invKeySchedule=f},a.prototype.encryptBlockRaw=function(e){return e=n(e),o(e,this._keySchedule,c.SUB_MIX,c.SBOX,this._nRounds)},a.prototype.encryptBlock=function(e){var t=this.encryptBlockRaw(e),r=f.allocUnsafe(16);return r.writeUInt32BE(t[0],0),r.writeUInt32BE(t[1],4),r.writeUInt32BE(t[2],8),r.writeUInt32BE(t[3],12),r},a.prototype.decryptBlock=function(e){e=n(e);var t=e[1];e[1]=e[3],e[3]=t;var r=o(e,this._invKeySchedule,c.INV_SUB_MIX,c.INV_SBOX,this._nRounds),i=f.allocUnsafe(16);return i.writeUInt32BE(r[0],0),i.writeUInt32BE(r[3],4),i.writeUInt32BE(r[2],8),i.writeUInt32BE(r[1],12),i},a.prototype.scrub=function(){i(this._keySchedule),i(this._invKeySchedule),i(this._key)},e.exports.AES=a},function(e,t,r){"use strict";var n=t;n.base=r(214),n.short=r(215),n.mont=r(216),n.edwards=r(217)},function(e,t,r){(function(t){function n(e){var r;"object"!=typeof e||t.isBuffer(e)||(r=e.passphrase,e=e.key),"string"==typeof e&&(e=new t(e));var n,a,s=f(e,r),c=s.tag,u=s.data;switch(c){case"CERTIFICATE":a=o.certificate.decode(u,"der").tbsCertificate.subjectPublicKeyInfo;case"PUBLIC KEY":switch(a||(a=o.PublicKey.decode(u,"der")),n=a.algorithm.algorithm.join(".")){case"1.2.840.113549.1.1.1":return o.RSAPublicKey.decode(a.subjectPublicKey.data,"der");case"1.2.840.10045.2.1":return a.subjectPrivateKey=a.subjectPublicKey,{type:"ec",data:a};case"1.2.840.10040.4.1":return a.algorithm.params.pub_key=o.DSAparam.decode(a.subjectPublicKey.data,"der"),{type:"dsa",data:a.algorithm.params};default:throw new Error("unknown key id "+n)}throw new Error("unknown key type "+c);case"ENCRYPTED PRIVATE KEY":u=o.EncryptedPrivateKey.decode(u,"der"),u=i(u,r);case"PRIVATE KEY":switch(a=o.PrivateKey.decode(u,"der"),n=a.algorithm.algorithm.join(".")){case"1.2.840.113549.1.1.1":return o.RSAPrivateKey.decode(a.subjectPrivateKey,"der");case"1.2.840.10045.2.1":return{curve:a.algorithm.curve,privateKey:o.ECPrivateKey.decode(a.subjectPrivateKey,"der").privateKey};case"1.2.840.10040.4.1":return a.algorithm.params.priv_key=o.DSAparam.decode(a.subjectPrivateKey,"der"),{type:"dsa",params:a.algorithm.params};default:throw new Error("unknown key id "+n)}throw new Error("unknown key type "+c);case"RSA PUBLIC KEY":return o.RSAPublicKey.decode(u,"der");case"RSA PRIVATE KEY":return o.RSAPrivateKey.decode(u,"der");case"DSA PRIVATE KEY":return{type:"dsa",params:o.DSAPrivateKey.decode(u,"der")};case"EC PRIVATE KEY":return u=o.ECPrivateKey.decode(u,"der"),{curve:u.parameters.value,privateKey:u.privateKey};default:throw new Error("unknown key type "+c)}}function i(e,r){var n=e.algorithm.decrypt.kde.kdeparams.salt,i=parseInt(e.algorithm.decrypt.kde.kdeparams.iters.toString(),10),o=a[e.algorithm.decrypt.cipher.algo.join(".")],f=e.algorithm.decrypt.cipher.iv,u=e.subjectPrivateKey,h=parseInt(o.split("-")[1],10)/8,d=c.pbkdf2Sync(r,n,i,h),l=s.createDecipheriv(o,d,f),p=[];return p.push(l.update(u)),p.push(l.final()),t.concat(p)}var o=r(233),a=r(245),f=r(246),s=r(64),c=r(91);e.exports=n,n.signature=o.signature}).call(t,r(1).Buffer)},function(e,t){var r=function(e,t){Error.call(this,e),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name="JsonWebTokenError",this.message=e,t&&(this.inner=t)};r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,e.exports=r},function(e,t){var r=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:r)(e)}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t){e.exports=!0},function(e,t,r){var n=r(8),i=r(28),o=r(126),a=r(14),f=function(e,t,r){var s,c,u,h=e&f.F,d=e&f.G,l=e&f.S,p=e&f.P,b=e&f.B,y=e&f.W,v=d?i:i[t]||(i[t]={}),g=v.prototype,m=d?n:l?n[t]:(n[t]||{}).prototype;d&&(r=t);for(s in r)(c=!h&&m&&void 0!==m[s])&&s in v||(u=c?m[s]:r[s],v[s]=d&&"function"!=typeof m[s]?r[s]:b&&c?o(u,n):y&&m[s]==u?function(e){var t=function(t,r,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,r)}return new e(t,r,n)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(u):p&&"function"==typeof u?o(Function.call,u):u,p&&((v.virtual||(v.virtual={}))[s]=u,e&f.R&&g&&!g[s]&&a(g,s,u)))};f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,e.exports=f},function(e,t,r){var n=r(30);e.exports=function(e,t){if(!n(e))return e;var r,i;if(t&&"function"==typeof(r=e.toString)&&!n(i=r.call(e)))return i;if("function"==typeof(r=e.valueOf)&&!n(i=r.call(e)))return i;if(!t&&"function"==typeof(r=e.toString)&&!n(i=r.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports={}},function(e,t,r){var n=r(50)("keys"),i=r(33);e.exports=function(e){return n[e]||(n[e]=i(e))}},function(e,t,r){var n=r(8),i=n["__core-js_shared__"]||(n["__core-js_shared__"]={});e.exports=function(e){return i[e]||(i[e]={})}},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t,r){var n=r(15).f,i=r(11),o=r(18)("toStringTag");e.exports=function(e,t,r){e&&!i(e=r?e:e.prototype,o)&&n(e,o,{configurable:!0,value:t})}},function(e,t,r){t.f=r(18)},function(e,t,r){var n=r(8),i=r(28),o=r(45),a=r(53),f=r(15).f;e.exports=function(e){var t=i.Symbol||(i.Symbol=o?{}:n.Symbol||{});"_"==e.charAt(0)||e in t||f(t,e,{value:a.f(e)})}},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,r){var n=r(157),i=r(254),o=["HS256","HS384","HS512","RS256","RS384","RS512","ES256","ES384","ES512"];t.ALGORITHMS=o,t.sign=n.sign,t.verify=i.verify,t.decode=i.decode,t.isValid=i.isValid,t.createSign=function(e){return new n(e)},t.createVerify=function(e){return new i(e)}},function(e,t){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function n(e){return"function"==typeof e}function i(e){return"number"==typeof e}function o(e){return"object"==typeof e&&null!==e}function a(e){return void 0===e}e.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(e){if(!i(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},r.prototype.emit=function(e){var t,r,i,f,s,c;if(this._events||(this._events={}),"error"===e&&(!this._events.error||o(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var u=new Error('Uncaught, unspecified "error" event. ('+t+")");throw u.context=t,u}if(r=this._events[e],a(r))return!1;if(n(r))switch(arguments.length){case 1:r.call(this);break;case 2:r.call(this,arguments[1]);break;case 3:r.call(this,arguments[1],arguments[2]);break;default:f=Array.prototype.slice.call(arguments,1),r.apply(this,f)}else if(o(r))for(f=Array.prototype.slice.call(arguments,1),c=r.slice(),i=c.length,s=0;s<i;s++)c[s].apply(this,f);return!0},r.prototype.addListener=function(e,t){var i;if(!n(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,n(t.listener)?t.listener:t),this._events[e]?o(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,o(this._events[e])&&!this._events[e].warned&&(i=a(this._maxListeners)?r.defaultMaxListeners:this._maxListeners)&&i>0&&this._events[e].length>i&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(e,t){function r(){this.removeListener(e,r),i||(i=!0,t.apply(this,arguments))}if(!n(t))throw TypeError("listener must be a function");var i=!1;return r.listener=t,this.on(e,r),this},r.prototype.removeListener=function(e,t){var r,i,a,f;if(!n(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(r=this._events[e],a=r.length,i=-1,r===t||n(r.listener)&&r.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(o(r)){for(f=a;f-- >0;)if(r[f]===t||r[f].listener&&r[f].listener===t){i=f;break}if(i<0)return this;1===r.length?(r.length=0,delete this._events[e]):r.splice(i,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},r.prototype.removeAllListeners=function(e){var t,r;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(r=this._events[e],n(r))this.removeListener(e,r);else if(r)for(;r.length;)this.removeListener(e,r[r.length-1]);return delete this._events[e],this},r.prototype.listeners=function(e){return this._events&&this._events[e]?n(this._events[e])?[this._events[e]]:this._events[e].slice():[]},r.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(n(t))return 1;if(t)return t.length}return 0},r.listenerCount=function(e,t){return e.listenerCount(t)}},function(e,t,r){t=e.exports=r(82),t.Stream=t,t.Readable=t,t.Writable=r(59),t.Duplex=r(13),t.Transform=r(85),t.PassThrough=r(167)},function(e,t,r){"use strict";(function(t,n,i){function o(e){var t=this;this.next=null,this.entry=null,this.finish=function(){A(t,e)}}function a(e){return T.from(e)}function f(e){return T.isBuffer(e)||e instanceof C}function s(){}function c(e,t){I=I||r(13),e=e||{},this.objectMode=!!e.objectMode,t instanceof I&&(this.objectMode=this.objectMode||!!e.writableObjectMode);var n=e.highWaterMark,i=this.objectMode?16:16384;this.highWaterMark=n||0===n?n:i,this.highWaterMark=Math.floor(this.highWaterMark),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;var a=!1===e.decodeStrings;this.decodeStrings=!a,this.defaultEncoding=e.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(e){g(t,e)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.bufferedRequestCount=0,this.corkedRequestsFree=new o(this)}function u(e){if(I=I||r(13),!(L.call(u,this)||this instanceof I))return new u(e);this._writableState=new c(e,this),this.writable=!0,e&&("function"==typeof e.write&&(this._write=e.write),"function"==typeof e.writev&&(this._writev=e.writev),"function"==typeof e.destroy&&(this._destroy=e.destroy),"function"==typeof e.final&&(this._final=e.final)),P.call(this)}function h(e,t){var r=new Error("write after end");e.emit("error",r),B(t,r)}function d(e,t,r,n){var i=!0,o=!1;return null===r?o=new TypeError("May not write null values to stream"):"string"==typeof r||void 0===r||t.objectMode||(o=new TypeError("Invalid non-string/buffer chunk")),o&&(e.emit("error",o),B(n,o),i=!1),i}function l(e,t,r){return e.objectMode||!1===e.decodeStrings||"string"!=typeof t||(t=T.from(t,r)),t}function p(e,t,r,n,i,o){if(!r){var a=l(t,n,i);n!==a&&(r=!0,i="buffer",n=a)}var f=t.objectMode?1:n.length;t.length+=f;var s=t.length<t.highWaterMark;if(s||(t.needDrain=!0),t.writing||t.corked){var c=t.lastBufferedRequest;t.lastBufferedRequest={chunk:n,encoding:i,isBuf:r,callback:o,next:null},c?c.next=t.lastBufferedRequest:t.bufferedRequest=t.lastBufferedRequest,t.bufferedRequestCount+=1}else b(e,t,!1,f,n,i,o);return s}function b(e,t,r,n,i,o,a){t.writelen=n,t.writecb=a,t.writing=!0,t.sync=!0,r?e._writev(i,t.onwrite):e._write(i,o,t.onwrite),t.sync=!1}function y(e,t,r,n,i){--t.pendingcb,r?(B(i,n),B(k,e,t),e._writableState.errorEmitted=!0,e.emit("error",n)):(i(n),e._writableState.errorEmitted=!0,e.emit("error",n),k(e,t))}function v(e){e.writing=!1,e.writecb=null,e.length-=e.writelen,e.writelen=0}function g(e,t){var r=e._writableState,n=r.sync,i=r.writecb;if(v(r),t)y(e,r,n,t,i);else{var o=S(r);o||r.corked||r.bufferProcessing||!r.bufferedRequest||w(e,r),n?j(m,e,r,o,i):m(e,r,o,i)}}function m(e,t,r,n){r||_(e,t),t.pendingcb--,n(),k(e,t)}function _(e,t){0===t.length&&t.needDrain&&(t.needDrain=!1,e.emit("drain"))}function w(e,t){t.bufferProcessing=!0;var r=t.bufferedRequest;if(e._writev&&r&&r.next){var n=t.bufferedRequestCount,i=new Array(n),a=t.corkedRequestsFree;a.entry=r;for(var f=0,s=!0;r;)i[f]=r,r.isBuf||(s=!1),r=r.next,f+=1;i.allBuffers=s,b(e,t,!0,t.length,i,"",a.finish),t.pendingcb++,t.lastBufferedRequest=null,a.next?(t.corkedRequestsFree=a.next,a.next=null):t.corkedRequestsFree=new o(t)}else{for(;r;){var c=r.chunk,u=r.encoding,h=r.callback;if(b(e,t,!1,t.objectMode?1:c.length,c,u,h),r=r.next,t.writing)break}null===r&&(t.lastBufferedRequest=null)}t.bufferedRequestCount=0,t.bufferedRequest=r,t.bufferProcessing=!1}function S(e){return e.ending&&0===e.length&&null===e.bufferedRequest&&!e.finished&&!e.writing}function M(e,t){e._final(function(r){t.pendingcb--,r&&e.emit("error",r),t.prefinished=!0,e.emit("prefinish"),k(e,t)})}function E(e,t){t.prefinished||t.finalCalled||("function"==typeof e._final?(t.pendingcb++,t.finalCalled=!0,B(M,e,t)):(t.prefinished=!0,e.emit("prefinish")))}function k(e,t){var r=S(t);return r&&(E(e,t),0===t.pendingcb&&(t.finished=!0,e.emit("finish"))),r}function x(e,t,r){t.ending=!0,k(e,t),r&&(t.finished?B(r):e.once("finish",r)),t.ended=!0,e.writable=!1}function A(e,t,r){var n=e.entry;for(e.entry=null;n;){var i=n.callback;t.pendingcb--,i(r),n=n.next}t.corkedRequestsFree?t.corkedRequestsFree.next=e:t.corkedRequestsFree=e}var B=r(36);e.exports=u;var I,j=!t.browser&&["v0.10","v0.9."].indexOf(t.version.slice(0,5))>-1?n:B;u.WritableState=c;var R=r(21);R.inherits=r(0);var O={deprecate:r(166)},P=r(83),T=r(2).Buffer,C=i.Uint8Array||function(){},D=r(84);R.inherits(u,P),c.prototype.getBuffer=function(){for(var e=this.bufferedRequest,t=[];e;)t.push(e),e=e.next;return t},function(){try{Object.defineProperty(c.prototype,"buffer",{get:O.deprecate(function(){return this.getBuffer()},"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch(e){}}();var L;"function"==typeof Symbol&&Symbol.hasInstance&&"function"==typeof Function.prototype[Symbol.hasInstance]?(L=Function.prototype[Symbol.hasInstance],Object.defineProperty(u,Symbol.hasInstance,{value:function(e){return!!L.call(this,e)||e&&e._writableState instanceof c}})):L=function(e){return e instanceof this},u.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe, not readable"))},u.prototype.write=function(e,t,r){var n=this._writableState,i=!1,o=f(e)&&!n.objectMode;return o&&!T.isBuffer(e)&&(e=a(e)),"function"==typeof t&&(r=t,t=null),o?t="buffer":t||(t=n.defaultEncoding),"function"!=typeof r&&(r=s),n.ended?h(this,r):(o||d(this,n,e,r))&&(n.pendingcb++,i=p(this,n,o,e,t,r)),i},u.prototype.cork=function(){this._writableState.corked++},u.prototype.uncork=function(){var e=this._writableState;e.corked&&(e.corked--,e.writing||e.corked||e.finished||e.bufferProcessing||!e.bufferedRequest||w(this,e))},u.prototype.setDefaultEncoding=function(e){if("string"==typeof e&&(e=e.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((e+"").toLowerCase())>-1))throw new TypeError("Unknown encoding: "+e);return this._writableState.defaultEncoding=e,this},u.prototype._write=function(e,t,r){r(new Error("_write() is not implemented"))},u.prototype._writev=null,u.prototype.end=function(e,t,r){var n=this._writableState;"function"==typeof e?(r=e,e=null,t=null):"function"==typeof t&&(r=t,t=null),null!==e&&void 0!==e&&this.write(e,t),n.corked&&(n.corked=1,this.uncork()),n.ending||n.finished||x(this,n,r)},Object.defineProperty(u.prototype,"destroyed",{get:function(){return void 0!==this._writableState&&this._writableState.destroyed},set:function(e){this._writableState&&(this._writableState.destroyed=e)}}),u.prototype.destroy=D.destroy,u.prototype._undestroy=D.undestroy,u.prototype._destroy=function(e,t){this.end(),t(e)}}).call(t,r(7),r(164).setImmediate,r(9))},function(e,t,r){function n(e){if(e&&!s(e))throw new Error("Unknown encoding: "+e)}function i(e){return e.toString(this.encoding)}function o(e){this.charReceived=e.length%2,this.charLength=this.charReceived?2:0}function a(e){this.charReceived=e.length%3,this.charLength=this.charReceived?3:0}var f=r(1).Buffer,s=f.isEncoding||function(e){switch(e&&e.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}},c=t.StringDecoder=function(e){switch(this.encoding=(e||"utf8").toLowerCase().replace(/[-_]/,""),n(e),this.encoding){case"utf8":this.surrogateSize=3;break;case"ucs2":case"utf16le":this.surrogateSize=2,this.detectIncompleteChar=o;break;case"base64":this.surrogateSize=3,this.detectIncompleteChar=a;break;default:return void(this.write=i)}this.charBuffer=new f(6),this.charReceived=0,this.charLength=0};c.prototype.write=function(e){for(var t="";this.charLength;){var r=e.length>=this.charLength-this.charReceived?this.charLength-this.charReceived:e.length;if(e.copy(this.charBuffer,this.charReceived,0,r),this.charReceived+=r,this.charReceived<this.charLength)return"";e=e.slice(r,e.length),t=this.charBuffer.slice(0,this.charLength).toString(this.encoding);var n=t.charCodeAt(t.length-1);if(!(n>=55296&&n<=56319)){if(this.charReceived=this.charLength=0,0===e.length)return t;break}this.charLength+=this.surrogateSize,t=""}this.detectIncompleteChar(e);var i=e.length;this.charLength&&(e.copy(this.charBuffer,0,e.length-this.charReceived,i),i-=this.charReceived),t+=e.toString(this.encoding,0,i);var i=t.length-1,n=t.charCodeAt(i);if(n>=55296&&n<=56319){var o=this.surrogateSize;return this.charLength+=o,this.charReceived+=o,this.charBuffer.copy(this.charBuffer,o,0,o),e.copy(this.charBuffer,0,0,o),t.substring(0,i)}return t},c.prototype.detectIncompleteChar=function(e){for(var t=e.length>=3?3:e.length;t>0;t--){var r=e[e.length-t];if(1==t&&r>>5==6){this.charLength=2;break}if(t<=2&&r>>4==14){this.charLength=3;break}if(t<=3&&r>>3==30){this.charLength=4;break}}this.charReceived=t},c.prototype.end=function(e){var t="";if(e&&e.length&&(t=this.write(e)),this.charReceived){var r=this.charReceived,n=this.charBuffer,i=this.encoding;t+=n.slice(0,r).toString(i)}return t}},function(e,t,r){"use strict";function n(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var r=1732584193,n=-271733879,i=-1732584194,u=271733878,h=0;h<e.length;h+=16){var d=r,l=n,p=i,b=u;r=o(r,n,i,u,e[h+0],7,-680876936),u=o(u,r,n,i,e[h+1],12,-389564586),i=o(i,u,r,n,e[h+2],17,606105819),n=o(n,i,u,r,e[h+3],22,-1044525330),r=o(r,n,i,u,e[h+4],7,-176418897),u=o(u,r,n,i,e[h+5],12,1200080426),i=o(i,u,r,n,e[h+6],17,-1473231341),n=o(n,i,u,r,e[h+7],22,-45705983),r=o(r,n,i,u,e[h+8],7,1770035416),u=o(u,r,n,i,e[h+9],12,-1958414417),i=o(i,u,r,n,e[h+10],17,-42063),n=o(n,i,u,r,e[h+11],22,-1990404162),r=o(r,n,i,u,e[h+12],7,1804603682),u=o(u,r,n,i,e[h+13],12,-40341101),i=o(i,u,r,n,e[h+14],17,-1502002290),n=o(n,i,u,r,e[h+15],22,1236535329),r=a(r,n,i,u,e[h+1],5,-165796510),u=a(u,r,n,i,e[h+6],9,-1069501632),i=a(i,u,r,n,e[h+11],14,643717713),n=a(n,i,u,r,e[h+0],20,-373897302),r=a(r,n,i,u,e[h+5],5,-701558691),u=a(u,r,n,i,e[h+10],9,38016083),i=a(i,u,r,n,e[h+15],14,-660478335),n=a(n,i,u,r,e[h+4],20,-405537848),r=a(r,n,i,u,e[h+9],5,568446438),u=a(u,r,n,i,e[h+14],9,-1019803690),i=a(i,u,r,n,e[h+3],14,-187363961),n=a(n,i,u,r,e[h+8],20,1163531501),r=a(r,n,i,u,e[h+13],5,-1444681467),u=a(u,r,n,i,e[h+2],9,-51403784),i=a(i,u,r,n,e[h+7],14,1735328473),n=a(n,i,u,r,e[h+12],20,-1926607734),r=f(r,n,i,u,e[h+5],4,-378558),u=f(u,r,n,i,e[h+8],11,-2022574463),i=f(i,u,r,n,e[h+11],16,1839030562),n=f(n,i,u,r,e[h+14],23,-35309556),r=f(r,n,i,u,e[h+1],4,-1530992060),u=f(u,r,n,i,e[h+4],11,1272893353),i=f(i,u,r,n,e[h+7],16,-155497632),n=f(n,i,u,r,e[h+10],23,-1094730640),r=f(r,n,i,u,e[h+13],4,681279174),u=f(u,r,n,i,e[h+0],11,-358537222),i=f(i,u,r,n,e[h+3],16,-722521979),n=f(n,i,u,r,e[h+6],23,76029189),r=f(r,n,i,u,e[h+9],4,-640364487),u=f(u,r,n,i,e[h+12],11,-421815835),i=f(i,u,r,n,e[h+15],16,530742520),n=f(n,i,u,r,e[h+2],23,-995338651),r=s(r,n,i,u,e[h+0],6,-198630844),u=s(u,r,n,i,e[h+7],10,1126891415),i=s(i,u,r,n,e[h+14],15,-1416354905),n=s(n,i,u,r,e[h+5],21,-57434055),r=s(r,n,i,u,e[h+12],6,1700485571),u=s(u,r,n,i,e[h+3],10,-1894986606),i=s(i,u,r,n,e[h+10],15,-1051523),n=s(n,i,u,r,e[h+1],21,-2054922799),r=s(r,n,i,u,e[h+8],6,1873313359),u=s(u,r,n,i,e[h+15],10,-30611744),i=s(i,u,r,n,e[h+6],15,-1560198380),n=s(n,i,u,r,e[h+13],21,1309151649),r=s(r,n,i,u,e[h+4],6,-145523070),u=s(u,r,n,i,e[h+11],10,-1120210379),i=s(i,u,r,n,e[h+2],15,718787259),n=s(n,i,u,r,e[h+9],21,-343485551),r=c(r,d),n=c(n,l),i=c(i,p),u=c(u,b)}return[r,n,i,u]}function i(e,t,r,n,i,o){return c(u(c(c(t,e),c(n,o)),i),r)}function o(e,t,r,n,o,a,f){return i(t&r|~t&n,e,t,o,a,f)}function a(e,t,r,n,o,a,f){return i(t&n|r&~n,e,t,o,a,f)}function f(e,t,r,n,o,a,f){return i(t^r^n,e,t,o,a,f)}function s(e,t,r,n,o,a,f){return i(r^(t|~n),e,t,o,a,f)}function c(e,t){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function u(e,t){return e<<t|e>>>32-t}var h=r(176);e.exports=function(e){return h(e,n)}},function(e,t,r){"use strict";(function(t){function n(){h.call(this,64),this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520}function i(e,t){return e<<t|e>>>32-t}function o(e,t,r,n,o,a,f,s){return i(e+(t^r^n)+a+f|0,s)+o|0}function a(e,t,r,n,o,a,f,s){return i(e+(t&r|~t&n)+a+f|0,s)+o|0}function f(e,t,r,n,o,a,f,s){return i(e+((t|~r)^n)+a+f|0,s)+o|0}function s(e,t,r,n,o,a,f,s){return i(e+(t&n|r&~n)+a+f|0,s)+o|0}function c(e,t,r,n,o,a,f,s){return i(e+(t^(r|~n))+a+f|0,s)+o|0}var u=r(0),h=r(177);u(n,h),n.prototype._update=function(){for(var e=new Array(16),t=0;t<16;++t)e[t]=this._block.readInt32LE(4*t);var r=this._a,n=this._b,u=this._c,h=this._d,d=this._e;r=o(r,n,u,h,d,e[0],0,11),u=i(u,10),d=o(d,r,n,u,h,e[1],0,14),n=i(n,10),h=o(h,d,r,n,u,e[2],0,15),r=i(r,10),u=o(u,h,d,r,n,e[3],0,12),d=i(d,10),n=o(n,u,h,d,r,e[4],0,5),h=i(h,10),r=o(r,n,u,h,d,e[5],0,8),u=i(u,10),d=o(d,r,n,u,h,e[6],0,7),n=i(n,10),h=o(h,d,r,n,u,e[7],0,9),r=i(r,10),u=o(u,h,d,r,n,e[8],0,11),d=i(d,10),n=o(n,u,h,d,r,e[9],0,13),h=i(h,10),r=o(r,n,u,h,d,e[10],0,14),u=i(u,10),d=o(d,r,n,u,h,e[11],0,15),n=i(n,10),h=o(h,d,r,n,u,e[12],0,6),r=i(r,10),u=o(u,h,d,r,n,e[13],0,7),d=i(d,10),n=o(n,u,h,d,r,e[14],0,9),h=i(h,10),r=o(r,n,u,h,d,e[15],0,8),u=i(u,10),d=a(d,r,n,u,h,e[7],1518500249,7),n=i(n,10),h=a(h,d,r,n,u,e[4],1518500249,6),r=i(r,10),u=a(u,h,d,r,n,e[13],1518500249,8),d=i(d,10),n=a(n,u,h,d,r,e[1],1518500249,13),h=i(h,10),r=a(r,n,u,h,d,e[10],1518500249,11),u=i(u,10),d=a(d,r,n,u,h,e[6],1518500249,9),n=i(n,10),h=a(h,d,r,n,u,e[15],1518500249,7),r=i(r,10),u=a(u,h,d,r,n,e[3],1518500249,15),d=i(d,10),n=a(n,u,h,d,r,e[12],1518500249,7),h=i(h,10),r=a(r,n,u,h,d,e[0],1518500249,12),u=i(u,10),d=a(d,r,n,u,h,e[9],1518500249,15),n=i(n,10),h=a(h,d,r,n,u,e[5],1518500249,9),r=i(r,10),u=a(u,h,d,r,n,e[2],1518500249,11),d=i(d,10),n=a(n,u,h,d,r,e[14],1518500249,7),h=i(h,10),r=a(r,n,u,h,d,e[11],1518500249,13),u=i(u,10),d=a(d,r,n,u,h,e[8],1518500249,12),n=i(n,10),h=f(h,d,r,n,u,e[3],1859775393,11),r=i(r,10),u=f(u,h,d,r,n,e[10],1859775393,13),d=i(d,10),n=f(n,u,h,d,r,e[14],1859775393,6),h=i(h,10),r=f(r,n,u,h,d,e[4],1859775393,7),u=i(u,10),d=f(d,r,n,u,h,e[9],1859775393,14),n=i(n,10),h=f(h,d,r,n,u,e[15],1859775393,9),r=i(r,10),u=f(u,h,d,r,n,e[8],1859775393,13),d=i(d,10),n=f(n,u,h,d,r,e[1],1859775393,15),h=i(h,10),r=f(r,n,u,h,d,e[2],1859775393,14),u=i(u,10),d=f(d,r,n,u,h,e[7],1859775393,8),n=i(n,10),h=f(h,d,r,n,u,e[0],1859775393,13),r=i(r,10),u=f(u,h,d,r,n,e[6],1859775393,6),d=i(d,10),n=f(n,u,h,d,r,e[13],1859775393,5),h=i(h,10),r=f(r,n,u,h,d,e[11],1859775393,12),u=i(u,10),d=f(d,r,n,u,h,e[5],1859775393,7),n=i(n,10),h=f(h,d,r,n,u,e[12],1859775393,5),r=i(r,10),u=s(u,h,d,r,n,e[1],2400959708,11),d=i(d,10),n=s(n,u,h,d,r,e[9],2400959708,12),h=i(h,10),r=s(r,n,u,h,d,e[11],2400959708,14),u=i(u,10),d=s(d,r,n,u,h,e[10],2400959708,15),n=i(n,10),h=s(h,d,r,n,u,e[0],2400959708,14),r=i(r,10),u=s(u,h,d,r,n,e[8],2400959708,15),d=i(d,10),n=s(n,u,h,d,r,e[12],2400959708,9),h=i(h,10),r=s(r,n,u,h,d,e[4],2400959708,8),u=i(u,10),d=s(d,r,n,u,h,e[13],2400959708,9),n=i(n,10),h=s(h,d,r,n,u,e[3],2400959708,14),r=i(r,10),u=s(u,h,d,r,n,e[7],2400959708,5),d=i(d,10),n=s(n,u,h,d,r,e[15],2400959708,6),h=i(h,10),r=s(r,n,u,h,d,e[14],2400959708,8),u=i(u,10),d=s(d,r,n,u,h,e[5],2400959708,6),n=i(n,10),h=s(h,d,r,n,u,e[6],2400959708,5),r=i(r,10),u=s(u,h,d,r,n,e[2],2400959708,12),d=i(d,10),n=c(n,u,h,d,r,e[4],2840853838,9),h=i(h,10),r=c(r,n,u,h,d,e[0],2840853838,15),u=i(u,10),d=c(d,r,n,u,h,e[5],2840853838,5),n=i(n,10),h=c(h,d,r,n,u,e[9],2840853838,11),r=i(r,10),u=c(u,h,d,r,n,e[7],2840853838,6),d=i(d,10),n=c(n,u,h,d,r,e[12],2840853838,8),h=i(h,10),r=c(r,n,u,h,d,e[2],2840853838,13),u=i(u,10),d=c(d,r,n,u,h,e[10],2840853838,12),n=i(n,10),h=c(h,d,r,n,u,e[14],2840853838,5),r=i(r,10),u=c(u,h,d,r,n,e[1],2840853838,12),d=i(d,10),n=c(n,u,h,d,r,e[3],2840853838,13),h=i(h,10),r=c(r,n,u,h,d,e[8],2840853838,14),u=i(u,10),d=c(d,r,n,u,h,e[11],2840853838,11),n=i(n,10),h=c(h,d,r,n,u,e[6],2840853838,8),r=i(r,10),u=c(u,h,d,r,n,e[15],2840853838,5),d=i(d,10),n=c(n,u,h,d,r,e[13],2840853838,6),h=i(h,10);var l=this._a,p=this._b,b=this._c,y=this._d,v=this._e;l=c(l,p,b,y,v,e[5],1352829926,8),b=i(b,10),v=c(v,l,p,b,y,e[14],1352829926,9),p=i(p,10),y=c(y,v,l,p,b,e[7],1352829926,9),l=i(l,10),b=c(b,y,v,l,p,e[0],1352829926,11),v=i(v,10),p=c(p,b,y,v,l,e[9],1352829926,13),y=i(y,10),l=c(l,p,b,y,v,e[2],1352829926,15),b=i(b,10),v=c(v,l,p,b,y,e[11],1352829926,15),p=i(p,10),y=c(y,v,l,p,b,e[4],1352829926,5),l=i(l,10),b=c(b,y,v,l,p,e[13],1352829926,7),v=i(v,10),p=c(p,b,y,v,l,e[6],1352829926,7),y=i(y,10),l=c(l,p,b,y,v,e[15],1352829926,8),b=i(b,10),v=c(v,l,p,b,y,e[8],1352829926,11),p=i(p,10),y=c(y,v,l,p,b,e[1],1352829926,14),l=i(l,10),b=c(b,y,v,l,p,e[10],1352829926,14),v=i(v,10),p=c(p,b,y,v,l,e[3],1352829926,12),y=i(y,10),l=c(l,p,b,y,v,e[12],1352829926,6),b=i(b,10),v=s(v,l,p,b,y,e[6],1548603684,9),p=i(p,10),y=s(y,v,l,p,b,e[11],1548603684,13),l=i(l,10),b=s(b,y,v,l,p,e[3],1548603684,15),v=i(v,10),p=s(p,b,y,v,l,e[7],1548603684,7),y=i(y,10),l=s(l,p,b,y,v,e[0],1548603684,12),b=i(b,10),v=s(v,l,p,b,y,e[13],1548603684,8),p=i(p,10),y=s(y,v,l,p,b,e[5],1548603684,9),l=i(l,10),b=s(b,y,v,l,p,e[10],1548603684,11),v=i(v,10),p=s(p,b,y,v,l,e[14],1548603684,7),y=i(y,10),l=s(l,p,b,y,v,e[15],1548603684,7),b=i(b,10),v=s(v,l,p,b,y,e[8],1548603684,12),p=i(p,10),y=s(y,v,l,p,b,e[12],1548603684,7),l=i(l,10),b=s(b,y,v,l,p,e[4],1548603684,6),v=i(v,10),p=s(p,b,y,v,l,e[9],1548603684,15),y=i(y,10),l=s(l,p,b,y,v,e[1],1548603684,13),b=i(b,10),v=s(v,l,p,b,y,e[2],1548603684,11),p=i(p,10),y=f(y,v,l,p,b,e[15],1836072691,9),l=i(l,10),b=f(b,y,v,l,p,e[5],1836072691,7),v=i(v,10),p=f(p,b,y,v,l,e[1],1836072691,15),y=i(y,10),l=f(l,p,b,y,v,e[3],1836072691,11),b=i(b,10),v=f(v,l,p,b,y,e[7],1836072691,8),p=i(p,10),y=f(y,v,l,p,b,e[14],1836072691,6),l=i(l,10),b=f(b,y,v,l,p,e[6],1836072691,6),v=i(v,10),p=f(p,b,y,v,l,e[9],1836072691,14),y=i(y,10),l=f(l,p,b,y,v,e[11],1836072691,12),b=i(b,10),v=f(v,l,p,b,y,e[8],1836072691,13),p=i(p,10),y=f(y,v,l,p,b,e[12],1836072691,5),l=i(l,10),b=f(b,y,v,l,p,e[2],1836072691,14),v=i(v,10),p=f(p,b,y,v,l,e[10],1836072691,13),y=i(y,10),l=f(l,p,b,y,v,e[0],1836072691,13),b=i(b,10),v=f(v,l,p,b,y,e[4],1836072691,7),p=i(p,10),y=f(y,v,l,p,b,e[13],1836072691,5),l=i(l,10),b=a(b,y,v,l,p,e[8],2053994217,15),v=i(v,10),p=a(p,b,y,v,l,e[6],2053994217,5),y=i(y,10),l=a(l,p,b,y,v,e[4],2053994217,8),b=i(b,10),v=a(v,l,p,b,y,e[1],2053994217,11),p=i(p,10),y=a(y,v,l,p,b,e[3],2053994217,14),l=i(l,10),b=a(b,y,v,l,p,e[11],2053994217,14),v=i(v,10),p=a(p,b,y,v,l,e[15],2053994217,6),y=i(y,10),l=a(l,p,b,y,v,e[0],2053994217,14),b=i(b,10),v=a(v,l,p,b,y,e[5],2053994217,6),p=i(p,10),y=a(y,v,l,p,b,e[12],2053994217,9),l=i(l,10),b=a(b,y,v,l,p,e[2],2053994217,12),v=i(v,10),p=a(p,b,y,v,l,e[13],2053994217,9),y=i(y,10),l=a(l,p,b,y,v,e[9],2053994217,12),b=i(b,10),v=a(v,l,p,b,y,e[7],2053994217,5),p=i(p,10),y=a(y,v,l,p,b,e[10],2053994217,15),l=i(l,10),b=a(b,y,v,l,p,e[14],2053994217,8),v=i(v,10),p=o(p,b,y,v,l,e[12],0,8),y=i(y,10),l=o(l,p,b,y,v,e[15],0,5),b=i(b,10),v=o(v,l,p,b,y,e[10],0,12),p=i(p,10),y=o(y,v,l,p,b,e[4],0,9),l=i(l,10),b=o(b,y,v,l,p,e[1],0,12),v=i(v,10),p=o(p,b,y,v,l,e[5],0,5),y=i(y,10),l=o(l,p,b,y,v,e[8],0,14),b=i(b,10),v=o(v,l,p,b,y,e[7],0,6),p=i(p,10),y=o(y,v,l,p,b,e[6],0,8),l=i(l,10),b=o(b,y,v,l,p,e[2],0,13),v=i(v,10),p=o(p,b,y,v,l,e[13],0,6),y=i(y,10),l=o(l,p,b,y,v,e[14],0,5),b=i(b,10),v=o(v,l,p,b,y,e[0],0,15),p=i(p,10),y=o(y,v,l,p,b,e[3],0,13),l=i(l,10),b=o(b,y,v,l,p,e[9],0,11),v=i(v,10),p=o(p,b,y,v,l,e[11],0,11),y=i(y,10);var g=this._b+u+y|0;this._b=this._c+h+v|0,this._c=this._d+d+l|0,this._d=this._e+r+p|0,this._e=this._a+n+b|0,this._a=g},n.prototype._digest=function(){this._block[this._blockOffset++]=128,this._blockOffset>56&&(this._block.fill(0,this._blockOffset,64),this._update(),this._blockOffset=0),this._block.fill(0,this._blockOffset,56),this._block.writeUInt32LE(this._length[0],56),this._block.writeUInt32LE(this._length[1],60),this._update();var e=new t(20);return e.writeInt32LE(this._a,0),e.writeInt32LE(this._b,4),e.writeInt32LE(this._c,8),e.writeInt32LE(this._d,12),e.writeInt32LE(this._e,16),e},e.exports=n}).call(t,r(1).Buffer)},function(e,t,r){var t=e.exports=function(e){e=e.toLowerCase();var r=t[e];if(!r)throw new Error(e+" is not supported (we accept pull requests)");return new r};t.sha=r(178),t.sha1=r(179),t.sha224=r(180),t.sha256=r(87),t.sha384=r(181),t.sha512=r(88)},function(e,t,r){function n(){return Object.keys(a)}var i=r(188),o=r(196),a=r(97);t.createCipher=t.Cipher=i.createCipher,t.createCipheriv=t.Cipheriv=i.createCipheriv,t.createDecipher=t.Decipher=o.createDecipher,t.createDecipheriv=t.Decipheriv=o.createDecipheriv,t.listCiphers=t.getCiphers=n},function(e,t,r){var n={ECB:r(189),CBC:r(190),CFB:r(191),CFB8:r(192),CFB1:r(193),OFB:r(194),CTR:r(95),GCM:r(95)},i=r(97);for(var o in i)i[o].module=n[i[o].mode];e.exports=i},function(e,t,r){"use strict";t.utils=r(198),t.Cipher=r(199),t.DES=r(200),t.CBC=r(201),t.EDE=r(202)},function(e,t,r){(function(t){function n(e){var t=o(e);return{blinder:t.toRed(a.mont(e.modulus)).redPow(new a(e.publicExponent)).fromRed(),unblinder:t.invm(e.modulus)}}function i(e,r){var i=n(r),o=r.modulus.byteLength(),f=(a.mont(r.modulus),new a(e).mul(i.blinder).umod(r.modulus)),s=f.toRed(a.mont(r.prime1)),c=f.toRed(a.mont(r.prime2)),u=r.coefficient,h=r.prime1,d=r.prime2,l=s.redPow(r.exponent1),p=c.redPow(r.exponent2);l=l.fromRed(),p=p.fromRed();var b=l.isub(p).imul(u).umod(h);return b.imul(d),p.iadd(b),new t(p.imul(i.unblinder).umod(r.modulus).toArray(!1,o))}function o(e){for(var t=e.modulus.byteLength(),r=new a(f(t));r.cmp(e.modulus)>=0||!r.umod(e.prime1)||!r.umod(e.prime2);)r=new a(f(t));return r}var a=r(3),f=r(22);e.exports=i,i.getr=o}).call(t,r(1).Buffer)},function(e,t,r){var n=t;n.utils=r(6),n.common=r(25),n.sha=r(219),n.ripemd=r(223),n.hmac=r(224),n.sha1=n.sha.sha1,n.sha256=n.sha.sha256,n.sha224=n.sha.sha224,n.sha384=n.sha.sha384,n.sha512=n.sha.sha512,n.ripemd160=n.ripemd.ripemd160},function(e,t,r){"use strict";var n=r(45),i=r(46),o=r(72),a=r(14),f=r(11),s=r(48),c=r(128),u=r(52),h=r(134),d=r(18)("iterator"),l=!([].keys&&"next"in[].keys()),p=function(){return this};e.exports=function(e,t,r,b,y,v,g){c(r,t,b);var m,_,w,S=function(e){if(!l&&e in x)return x[e];switch(e){case"keys":case"values":return function(){return new r(this,e)}}return function(){return new r(this,e)}},M=t+" Iterator",E="values"==y,k=!1,x=e.prototype,A=x[d]||x["@@iterator"]||y&&x[y],B=A||S(y),I=y?E?S("entries"):B:void 0,j="Array"==t?x.entries||A:A;if(j&&(w=h(j.call(new e)))!==Object.prototype&&w.next&&(u(w,M,!0),n||f(w,d)||a(w,d,p)),E&&A&&"values"!==A.name&&(k=!0,B=function(){return A.call(this)}),n&&!g||!l&&!k&&x[d]||a(x,d,B),s[t]=B,s[M]=p,y)if(m={values:E?B:S("values"),keys:v?B:S("keys"),entries:I},g)for(_ in m)_ in x||o(x,_,m[_]);else i(i.P+i.F*(l||k),t,m);return m}},function(e,t,r){e.exports=!r(16)&&!r(20)(function(){return 7!=Object.defineProperty(r(71)("div"),"a",{get:function(){return 7}}).a})},function(e,t,r){var n=r(30),i=r(8).document,o=n(i)&&n(i.createElement);e.exports=function(e){return o?i.createElement(e):{}}},function(e,t,r){e.exports=r(14)},function(e,t,r){var n=r(29),i=r(129),o=r(51),a=r(49)("IE_PROTO"),f=function(){},s=function(){var e,t=r(71)("iframe"),n=o.length;for(t.style.display="none",r(133).appendChild(t),t.src="javascript:",e=t.contentWindow.document,e.open(),e.write("<script>document.F=Object<\/script>"),e.close(),s=e.F;n--;)delete s.prototype[o[n]];return s()};e.exports=Object.create||function(e,t){var r;return null!==e?(f.prototype=n(e),r=new f,f.prototype=null,r[a]=e):r=s(),void 0===t?r:i(r,t)}},function(e,t,r){var n=r(11),i=r(17),o=r(130)(!1),a=r(49)("IE_PROTO");e.exports=function(e,t){var r,f=i(e),s=0,c=[];for(r in f)r!=a&&n(f,r)&&c.push(r);for(;t.length>s;)n(f,r=t[s++])&&(~o(c,r)||c.push(r));return c}},function(e,t,r){var n=r(76);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},function(e,t){var r={}.toString;e.exports=function(e){return r.call(e).slice(8,-1)}},function(e,t,r){var n=r(44);e.exports=function(e){return Object(n(e))}},function(e,t,r){var n=r(74),i=r(51).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,i)}},function(e,t,r){var n=r(56);e.exports=function(e,t){t=t||{};var r=n.decode(e,t);if(!r)return null;var i=r.payload;if("string"==typeof i)try{var o=JSON.parse(i);"object"==typeof o&&(i=o)}catch(e){}return!0===t.complete?{header:r.header,payload:i,signature:r.signature}:i}},function(e,t){var r={}.toString;e.exports=Array.isArray||function(e){return"[object Array]"==r.call(e)}},function(e,t,r){(function(t){function n(e){if(this.buffer=null,this.writable=!0,this.readable=!0,!e)return this.buffer=i.alloc(0),this;if("function"==typeof e.pipe)return this.buffer=i.alloc(0),e.pipe(this),this;if(e.length||"object"==typeof e)return this.buffer=e,this.writable=!1,t.nextTick(function(){this.emit("end",e),this.readable=!1,this.emit("close")}.bind(this)),this;throw new TypeError("Unexpected data type ("+typeof e+")")}var i=r(2).Buffer,o=r(12);r(37).inherits(n,o),n.prototype.write=function(e){this.buffer=i.concat([this.buffer,i.from(e)]),this.emit("data",e)},n.prototype.end=function(e){e&&this.write(e),this.emit("end",e),this.emit("close"),this.writable=!1,this.readable=!1},e.exports=n}).call(t,r(7))},function(e,t,r){"use strict";(function(t,n){function i(e){return L.from(e)}function o(e){return L.isBuffer(e)||e instanceof z}function a(e,t,r){if("function"==typeof e.prependListener)return e.prependListener(t,r);e._events&&e._events[t]?T(e._events[t])?e._events[t].unshift(r):e._events[t]=[r,e._events[t]]:e.on(t,r)}function f(e,t){P=P||r(13),e=e||{},this.objectMode=!!e.objectMode,t instanceof P&&(this.objectMode=this.objectMode||!!e.readableObjectMode);var n=e.highWaterMark,i=this.objectMode?16:16384;this.highWaterMark=n||0===n?n:i,this.highWaterMark=Math.floor(this.highWaterMark),this.buffer=new F,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.destroyed=!1,this.defaultEncoding=e.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,e.encoding&&(K||(K=r(60).StringDecoder),this.decoder=new K(e.encoding),this.encoding=e.encoding)}function s(e){if(P=P||r(13),!(this instanceof s))return new s(e);this._readableState=new f(e,this),this.readable=!0,e&&("function"==typeof e.read&&(this._read=e.read),"function"==typeof e.destroy&&(this._destroy=e.destroy)),D.call(this)}function c(e,t,r,n,o){var a=e._readableState;if(null===t)a.reading=!1,b(e,a);else{var f;o||(f=h(a,t)),f?e.emit("error",f):a.objectMode||t&&t.length>0?("string"==typeof t||a.objectMode||Object.getPrototypeOf(t)===L.prototype||(t=i(t)),n?a.endEmitted?e.emit("error",new Error("stream.unshift() after end event")):u(e,a,t,!0):a.ended?e.emit("error",new Error("stream.push() after EOF")):(a.reading=!1,a.decoder&&!r?(t=a.decoder.write(t),a.objectMode||0!==t.length?u(e,a,t,!1):g(e,a)):u(e,a,t,!1))):n||(a.reading=!1)}return d(a)}function u(e,t,r,n){t.flowing&&0===t.length&&!t.sync?(e.emit("data",r),e.read(0)):(t.length+=t.objectMode?1:r.length,n?t.buffer.unshift(r):t.buffer.push(r),t.needReadable&&y(e)),g(e,t)}function h(e,t){var r;return o(t)||"string"==typeof t||void 0===t||e.objectMode||(r=new TypeError("Invalid non-string/buffer chunk")),r}function d(e){return!e.ended&&(e.needReadable||e.length<e.highWaterMark||0===e.length)}function l(e){return e>=Y?e=Y:(e--,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e++),e}function p(e,t){return e<=0||0===t.length&&t.ended?0:t.objectMode?1:e!==e?t.flowing&&t.length?t.buffer.head.data.length:t.length:(e>t.highWaterMark&&(t.highWaterMark=l(e)),e<=t.length?e:t.ended?t.length:(t.needReadable=!0,0))}function b(e,t){if(!t.ended){if(t.decoder){var r=t.decoder.end();r&&r.length&&(t.buffer.push(r),t.length+=t.objectMode?1:r.length)}t.ended=!0,y(e)}}function y(e){var t=e._readableState;t.needReadable=!1,t.emittedReadable||(q("emitReadable",t.flowing),t.emittedReadable=!0,t.sync?O(v,e):v(e))}function v(e){q("emit readable"),e.emit("readable"),E(e)}function g(e,t){t.readingMore||(t.readingMore=!0,O(m,e,t))}function m(e,t){for(var r=t.length;!t.reading&&!t.flowing&&!t.ended&&t.length<t.highWaterMark&&(q("maybeReadMore read 0"),e.read(0),r!==t.length);)r=t.length;t.readingMore=!1}function _(e){return function(){var t=e._readableState;q("pipeOnDrain",t.awaitDrain),t.awaitDrain&&t.awaitDrain--,0===t.awaitDrain&&C(e,"data")&&(t.flowing=!0,E(e))}}function w(e){q("readable nexttick read 0"),e.read(0)}function S(e,t){t.resumeScheduled||(t.resumeScheduled=!0,O(M,e,t))}function M(e,t){t.reading||(q("resume read 0"),e.read(0)),t.resumeScheduled=!1,t.awaitDrain=0,e.emit("resume"),E(e),t.flowing&&!t.reading&&e.read(0)}function E(e){var t=e._readableState;for(q("flow",t.flowing);t.flowing&&null!==e.read(););}function k(e,t){if(0===t.length)return null;var r;return t.objectMode?r=t.buffer.shift():!e||e>=t.length?(r=t.decoder?t.buffer.join(""):1===t.buffer.length?t.buffer.head.data:t.buffer.concat(t.length),t.buffer.clear()):r=x(e,t.buffer,t.decoder),r}function x(e,t,r){var n;return e<t.head.data.length?(n=t.head.data.slice(0,e),t.head.data=t.head.data.slice(e)):n=e===t.head.data.length?t.shift():r?A(e,t):B(e,t),n}function A(e,t){var r=t.head,n=1,i=r.data;for(e-=i.length;r=r.next;){var o=r.data,a=e>o.length?o.length:e;if(a===o.length?i+=o:i+=o.slice(0,e),0===(e-=a)){a===o.length?(++n,r.next?t.head=r.next:t.head=t.tail=null):(t.head=r,r.data=o.slice(a));break}++n}return t.length-=n,i}function B(e,t){var r=L.allocUnsafe(e),n=t.head,i=1;for(n.data.copy(r),e-=n.data.length;n=n.next;){var o=n.data,a=e>o.length?o.length:e;if(o.copy(r,r.length-e,0,a),0===(e-=a)){a===o.length?(++i,n.next?t.head=n.next:t.head=t.tail=null):(t.head=n,n.data=o.slice(a));break}++i}return t.length-=i,r}function I(e){var t=e._readableState;if(t.length>0)throw new Error('"endReadable()" called on non-empty stream');t.endEmitted||(t.ended=!0,O(j,t,e))}function j(e,t){e.endEmitted||0!==e.length||(e.endEmitted=!0,t.readable=!1,t.emit("end"))}function R(e,t){for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return-1}var O=r(36);e.exports=s;var P,T=r(80);s.ReadableState=f;var C=(r(57).EventEmitter,function(e,t){return e.listeners(t).length}),D=r(83),L=r(2).Buffer,z=t.Uint8Array||function(){},N=r(21);N.inherits=r(0);var U=r(162),q=void 0;q=U&&U.debuglog?U.debuglog("stream"):function(){};var K,F=r(163),H=r(84);N.inherits(s,D);var V=["error","close","destroy","pause","resume"];Object.defineProperty(s.prototype,"destroyed",{get:function(){return void 0!==this._readableState&&this._readableState.destroyed},set:function(e){this._readableState&&(this._readableState.destroyed=e)}}),s.prototype.destroy=H.destroy,s.prototype._undestroy=H.undestroy,s.prototype._destroy=function(e,t){this.push(null),t(e)},s.prototype.push=function(e,t){var r,n=this._readableState;return n.objectMode?r=!0:"string"==typeof e&&(t=t||n.defaultEncoding,t!==n.encoding&&(e=L.from(e,t),t=""),r=!0),c(this,e,t,!1,r)},s.prototype.unshift=function(e){return c(this,e,null,!0,!1)},s.prototype.isPaused=function(){return!1===this._readableState.flowing},s.prototype.setEncoding=function(e){return K||(K=r(60).StringDecoder),this._readableState.decoder=new K(e),this._readableState.encoding=e,this};var Y=8388608;s.prototype.read=function(e){q("read",e),e=parseInt(e,10);var t=this._readableState,r=e;if(0!==e&&(t.emittedReadable=!1),0===e&&t.needReadable&&(t.length>=t.highWaterMark||t.ended))return q("read: emitReadable",t.length,t.ended),0===t.length&&t.ended?I(this):y(this),null;if(0===(e=p(e,t))&&t.ended)return 0===t.length&&I(this),null;var n=t.needReadable;q("need readable",n),(0===t.length||t.length-e<t.highWaterMark)&&(n=!0,q("length less than watermark",n)),t.ended||t.reading?(n=!1,q("reading or ended",n)):n&&(q("do read"),t.reading=!0,t.sync=!0,0===t.length&&(t.needReadable=!0),this._read(t.highWaterMark),t.sync=!1,t.reading||(e=p(r,t)));var i;return i=e>0?k(e,t):null,null===i?(t.needReadable=!0,e=0):t.length-=e,0===t.length&&(t.ended||(t.needReadable=!0),r!==e&&t.ended&&I(this)),null!==i&&this.emit("data",i),i},s.prototype._read=function(e){this.emit("error",new Error("_read() is not implemented"))},s.prototype.pipe=function(e,t){function r(e,t){q("onunpipe"),e===d&&t&&!1===t.hasUnpiped&&(t.hasUnpiped=!0,o())}function i(){q("onend"),e.end()}function o(){q("cleanup"),e.removeListener("close",c),e.removeListener("finish",u),e.removeListener("drain",y),e.removeListener("error",s),e.removeListener("unpipe",r),d.removeListener("end",i),d.removeListener("end",h),d.removeListener("data",f),v=!0,!l.awaitDrain||e._writableState&&!e._writableState.needDrain||y()}function f(t){q("ondata"),g=!1,!1!==e.write(t)||g||((1===l.pipesCount&&l.pipes===e||l.pipesCount>1&&-1!==R(l.pipes,e))&&!v&&(q("false write response, pause",d._readableState.awaitDrain),d._readableState.awaitDrain++,g=!0),d.pause())}function s(t){q("onerror",t),h(),e.removeListener("error",s),0===C(e,"error")&&e.emit("error",t)}function c(){e.removeListener("finish",u),h()}function u(){q("onfinish"),e.removeListener("close",c),h()}function h(){q("unpipe"),d.unpipe(e)}var d=this,l=this._readableState;switch(l.pipesCount){case 0:l.pipes=e;break;case 1:l.pipes=[l.pipes,e];break;default:l.pipes.push(e)}l.pipesCount+=1,q("pipe count=%d opts=%j",l.pipesCount,t);var p=(!t||!1!==t.end)&&e!==n.stdout&&e!==n.stderr,b=p?i:h;l.endEmitted?O(b):d.once("end",b),e.on("unpipe",r);var y=_(d);e.on("drain",y);var v=!1,g=!1;return d.on("data",f),a(e,"error",s),e.once("close",c),e.once("finish",u),e.emit("pipe",d),l.flowing||(q("pipe resume"),d.resume()),e},s.prototype.unpipe=function(e){var t=this._readableState,r={hasUnpiped:!1};if(0===t.pipesCount)return this;if(1===t.pipesCount)return e&&e!==t.pipes?this:(e||(e=t.pipes),t.pipes=null,t.pipesCount=0,t.flowing=!1,e&&e.emit("unpipe",this,r),this);if(!e){var n=t.pipes,i=t.pipesCount;t.pipes=null,t.pipesCount=0,t.flowing=!1;for(var o=0;o<i;o++)n[o].emit("unpipe",this,r);return this}var a=R(t.pipes,e);return-1===a?this:(t.pipes.splice(a,1),t.pipesCount-=1,1===t.pipesCount&&(t.pipes=t.pipes[0]),e.emit("unpipe",this,r),this)},s.prototype.on=function(e,t){var r=D.prototype.on.call(this,e,t);if("data"===e)!1!==this._readableState.flowing&&this.resume();else if("readable"===e){var n=this._readableState;n.endEmitted||n.readableListening||(n.readableListening=n.needReadable=!0,n.emittedReadable=!1,n.reading?n.length&&y(this):O(w,this))}return r},s.prototype.addListener=s.prototype.on,s.prototype.resume=function(){var e=this._readableState;return e.flowing||(q("resume"),e.flowing=!0,S(this,e)),this},s.prototype.pause=function(){return q("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(q("pause"),this._readableState.flowing=!1,this.emit("pause")),this},s.prototype.wrap=function(e){var t=this._readableState,r=!1,n=this;e.on("end",function(){if(q("wrapped end"),t.decoder&&!t.ended){var e=t.decoder.end();e&&e.length&&n.push(e)}n.push(null)}),e.on("data",function(i){if(q("wrapped data"),t.decoder&&(i=t.decoder.write(i)),(!t.objectMode||null!==i&&void 0!==i)&&(t.objectMode||i&&i.length)){n.push(i)||(r=!0,e.pause())}});for(var i in e)void 0===this[i]&&"function"==typeof e[i]&&(this[i]=function(t){return function(){return e[t].apply(e,arguments)}}(i));for(var o=0;o<V.length;o++)e.on(V[o],n.emit.bind(n,V[o]));return n._read=function(t){q("wrapped _read",t),r&&(r=!1,e.resume())},n},s._fromList=k}).call(t,r(9),r(7))},function(e,t,r){e.exports=r(57).EventEmitter},function(e,t,r){"use strict";function n(e,t){var r=this,n=this._readableState&&this._readableState.destroyed,i=this._writableState&&this._writableState.destroyed;if(n||i)return void(t?t(e):!e||this._writableState&&this._writableState.errorEmitted||a(o,this,e));this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(e||null,function(e){!t&&e?(a(o,r,e),r._writableState&&(r._writableState.errorEmitted=!0)):t&&t(e)})}function i(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)}function o(e,t){e.emit("error",t)}var a=r(36);e.exports={destroy:n,undestroy:i}},function(e,t,r){"use strict";function n(e){this.afterTransform=function(t,r){return i(e,t,r)},this.needTransform=!1,this.transforming=!1,this.writecb=null,this.writechunk=null,this.writeencoding=null}function i(e,t,r){var n=e._transformState;n.transforming=!1;var i=n.writecb;if(!i)return e.emit("error",new Error("write callback called multiple times"));n.writechunk=null,n.writecb=null,null!==r&&void 0!==r&&e.push(r),i(t);var o=e._readableState;o.reading=!1,(o.needReadable||o.length<o.highWaterMark)&&e._read(o.highWaterMark)}function o(e){if(!(this instanceof o))return new o(e);f.call(this,e),this._transformState=new n(this);var t=this;this._readableState.needReadable=!0,this._readableState.sync=!1,e&&("function"==typeof e.transform&&(this._transform=e.transform),"function"==typeof e.flush&&(this._flush=e.flush)),this.once("prefinish",function(){"function"==typeof this._flush?this._flush(function(e,r){a(t,e,r)}):a(t)})}function a(e,t,r){if(t)return e.emit("error",t);null!==r&&void 0!==r&&e.push(r);var n=e._writableState,i=e._transformState;if(n.length)throw new Error("Calling transform done when ws.length != 0");if(i.transforming)throw new Error("Calling transform done when still transforming");return e.push(null)}e.exports=o;var f=r(13),s=r(21);s.inherits=r(0),s.inherits(o,f),o.prototype.push=function(e,t){return this._transformState.needTransform=!1,f.prototype.push.call(this,e,t)},o.prototype._transform=function(e,t,r){throw new Error("_transform() is not implemented")},o.prototype._write=function(e,t,r){var n=this._transformState;if(n.writecb=r,n.writechunk=e,n.writeencoding=t,!n.transforming){var i=this._readableState;(n.needTransform||i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}},o.prototype._read=function(e){var t=this._transformState;null!==t.writechunk&&t.writecb&&!t.transforming?(t.transforming=!0,this._transform(t.writechunk,t.writeencoding,t.afterTransform)):t.needTransform=!0},o.prototype._destroy=function(e,t){var r=this;f.prototype._destroy.call(this,e,function(e){t(e),r.emit("close")})}},function(e,t,r){function n(e){var t=[].slice.call(arguments,1),r=m.format.bind(m,e).apply(null,t);return new TypeError(r)}function i(e){return y.isBuffer(e)||"string"==typeof e}function o(e){return i(e)||(e=JSON.stringify(e)),e}function a(e){return function(t,r){if(!i(r))throw n(_);t=o(t);var a=v.createHmac("sha"+e,r),f=(a.update(t),a.digest("base64"));return b.fromBase64(f)}}function f(e){return function(t,r,n){var i=a(e)(t,n);return p(y.from(r),y.from(i))}}function s(e){return function(t,r){if(!i(r)&&"object"!=typeof r)throw n(S);t=o(t);var a=v.createSign("RSA-SHA"+e),f=(a.update(t),a.sign(r,"base64"));return b.fromBase64(f)}}function c(e){return function(t,r,a){if(!i(a))throw n(w);t=o(t),r=b.toBase64(r);var f=v.createVerify("RSA-SHA"+e);return f.update(t),f.verify(a,r,"base64")}}function u(e){var t=s(e);return function(){var r=t.apply(null,arguments);return r=g.derToJose(r,"ES"+e)}}function h(e){var t=c(e);return function(r,n,i){return n=g.joseToDer(n,"ES"+e).toString("base64"),t(r,n,i)}}function d(){return function(){return""}}function l(){return function(e,t){return""===t}}var p=r(174),b=r(35),y=r(2).Buffer,v=r(175),g=r(252),m=r(37),_="secret must be a string or buffer",w="key must be a string or a buffer",S="key must be a string, a buffer or an object";e.exports=function(e){var t={hs:a,rs:s,es:u,none:d},r={hs:f,rs:c,es:h,none:l},i=e.match(/^(RS|ES|HS)(256|384|512)$|^(none)$/i);if(!i)throw n('"%s" is not a valid algorithm.\n  Supported algorithms are:\n  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512" and "none".',e);var o=(i[1]||i[3]).toLowerCase(),p=i[2];return{sign:t[o](p),verify:r[o](p)}}},function(e,t,r){function n(){this.init(),this._w=p,h.call(this,64,56)}function i(e,t,r){return r^e&(t^r)}function o(e,t,r){return e&t|r&(e|t)}function a(e){return(e>>>2|e<<30)^(e>>>13|e<<19)^(e>>>22|e<<10)}function f(e){return(e>>>6|e<<26)^(e>>>11|e<<21)^(e>>>25|e<<7)}function s(e){return(e>>>7|e<<25)^(e>>>18|e<<14)^e>>>3}function c(e){return(e>>>17|e<<15)^(e>>>19|e<<13)^e>>>10}var u=r(0),h=r(19),d=r(2).Buffer,l=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],p=new Array(64);u(n,h),n.prototype.init=function(){return this._a=1779033703,this._b=3144134277,this._c=1013904242,this._d=2773480762,this._e=1359893119,this._f=2600822924,this._g=528734635,this._h=1541459225,this},n.prototype._update=function(e){for(var t=this._w,r=0|this._a,n=0|this._b,u=0|this._c,h=0|this._d,d=0|this._e,p=0|this._f,b=0|this._g,y=0|this._h,v=0;v<16;++v)t[v]=e.readInt32BE(4*v);for(;v<64;++v)t[v]=c(t[v-2])+t[v-7]+s(t[v-15])+t[v-16]|0;for(var g=0;g<64;++g){var m=y+f(d)+i(d,p,b)+l[g]+t[g]|0,_=a(r)+o(r,n,u)|0;y=b,b=p,p=d,d=h+m|0,h=u,u=n,n=r,r=m+_|0}this._a=r+this._a|0,this._b=n+this._b|0,this._c=u+this._c|0,this._d=h+this._d|0,this._e=d+this._e|0,this._f=p+this._f|0,this._g=b+this._g|0,this._h=y+this._h|0},n.prototype._hash=function(){var e=d.allocUnsafe(32);return e.writeInt32BE(this._a,0),e.writeInt32BE(this._b,4),e.writeInt32BE(this._c,8),e.writeInt32BE(this._d,12),e.writeInt32BE(this._e,16),e.writeInt32BE(this._f,20),e.writeInt32BE(this._g,24),e.writeInt32BE(this._h,28),e},e.exports=n},function(e,t,r){function n(){this.init(),this._w=v,p.call(this,128,112)}function i(e,t,r){return r^e&(t^r)}function o(e,t,r){return e&t|r&(e|t)}function a(e,t){return(e>>>28|t<<4)^(t>>>2|e<<30)^(t>>>7|e<<25)}function f(e,t){return(e>>>14|t<<18)^(e>>>18|t<<14)^(t>>>9|e<<23)}function s(e,t){return(e>>>1|t<<31)^(e>>>8|t<<24)^e>>>7}function c(e,t){return(e>>>1|t<<31)^(e>>>8|t<<24)^(e>>>7|t<<25)}function u(e,t){return(e>>>19|t<<13)^(t>>>29|e<<3)^e>>>6}function h(e,t){return(e>>>19|t<<13)^(t>>>29|e<<3)^(e>>>6|t<<26)}function d(e,t){return e>>>0<t>>>0?1:0}var l=r(0),p=r(19),b=r(2).Buffer,y=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],v=new Array(160);l(n,p),n.prototype.init=function(){return this._ah=1779033703,this._bh=3144134277,this._ch=1013904242,this._dh=2773480762,this._eh=1359893119,this._fh=2600822924,this._gh=528734635,this._hh=1541459225,this._al=4089235720,this._bl=2227873595,this._cl=4271175723,this._dl=1595750129,this._el=2917565137,this._fl=725511199,this._gl=4215389547,this._hl=327033209,this},n.prototype._update=function(e){for(var t=this._w,r=0|this._ah,n=0|this._bh,l=0|this._ch,p=0|this._dh,b=0|this._eh,v=0|this._fh,g=0|this._gh,m=0|this._hh,_=0|this._al,w=0|this._bl,S=0|this._cl,M=0|this._dl,E=0|this._el,k=0|this._fl,x=0|this._gl,A=0|this._hl,B=0;B<32;B+=2)t[B]=e.readInt32BE(4*B),t[B+1]=e.readInt32BE(4*B+4);for(;B<160;B+=2){var I=t[B-30],j=t[B-30+1],R=s(I,j),O=c(j,I);I=t[B-4],j=t[B-4+1];var P=u(I,j),T=h(j,I),C=t[B-14],D=t[B-14+1],L=t[B-32],z=t[B-32+1],N=O+D|0,U=R+C+d(N,O)|0;N=N+T|0,U=U+P+d(N,T)|0,N=N+z|0,U=U+L+d(N,z)|0,t[B]=U,t[B+1]=N}for(var q=0;q<160;q+=2){U=t[q],N=t[q+1];var K=o(r,n,l),F=o(_,w,S),H=a(r,_),V=a(_,r),Y=f(b,E),W=f(E,b),J=y[q],G=y[q+1],X=i(b,v,g),$=i(E,k,x),Z=A+W|0,Q=m+Y+d(Z,A)|0;Z=Z+$|0,Q=Q+X+d(Z,$)|0,Z=Z+G|0,Q=Q+J+d(Z,G)|0,Z=Z+N|0,Q=Q+U+d(Z,N)|0;var ee=V+F|0,te=H+K+d(ee,V)|0;m=g,A=x,g=v,x=k,v=b,k=E,E=M+Z|0,b=p+Q+d(E,M)|0,p=l,M=S,l=n,S=w,n=r,w=_,_=Z+ee|0,r=Q+te+d(_,Z)|0}this._al=this._al+_|0,this._bl=this._bl+w|0,this._cl=this._cl+S|0,this._dl=this._dl+M|0,this._el=this._el+E|0,this._fl=this._fl+k|0,this._gl=this._gl+x|0,this._hl=this._hl+A|0,this._ah=this._ah+r+d(this._al,_)|0,this._bh=this._bh+n+d(this._bl,w)|0,this._ch=this._ch+l+d(this._cl,S)|0,this._dh=this._dh+p+d(this._dl,M)|0,this._eh=this._eh+b+d(this._el,E)|0,this._fh=this._fh+v+d(this._fl,k)|0,this._gh=this._gh+g+d(this._gl,x)|0,this._hh=this._hh+m+d(this._hl,A)|0},n.prototype._hash=function(){function e(e,r,n){t.writeInt32BE(e,n),t.writeInt32BE(r,n+4)}var t=b.allocUnsafe(64);return e(this._ah,this._al,0),e(this._bh,this._bl,8),e(this._ch,this._cl,16),e(this._dh,this._dl,24),e(this._eh,this._el,32),e(this._fh,this._fl,40),e(this._gh,this._gl,48),e(this._hh,this._hl,56),t},e.exports=n},function(e,t,r){"use strict";function n(e,t){a.call(this,"digest"),"string"==typeof t&&(t=f.from(t));var r="sha512"===e||"sha384"===e?128:64;if(this._alg=e,this._key=t,t.length>r){t=("rmd160"===e?new c:u(e)).update(t).digest()}else t.length<r&&(t=f.concat([t,h],r));for(var n=this._ipad=f.allocUnsafe(r),i=this._opad=f.allocUnsafe(r),o=0;o<r;o++)n[o]=54^t[o],i[o]=92^t[o];this._hash="rmd160"===e?new c:u(e),this._hash.update(n)}var i=r(0),o=r(182),a=r(10),f=r(2).Buffer,s=r(61),c=r(62),u=r(63),h=f.alloc(128);i(n,a),n.prototype._update=function(e){this._hash.update(e)},n.prototype._final=function(){var e=this._hash.digest();return("rmd160"===this._alg?new c:u(this._alg)).update(this._opad).update(e).digest()},e.exports=function(e,t){return e=e.toLowerCase(),"rmd160"===e||"ripemd160"===e?new n("rmd160",t):"md5"===e?new o(s,t):new n(e,t)}},function(e,t){e.exports={sha224WithRSAEncryption:{sign:"rsa",hash:"sha224",id:"302d300d06096086480165030402040500041c"},"RSA-SHA224":{sign:"ecdsa/rsa",hash:"sha224",id:"302d300d06096086480165030402040500041c"},sha256WithRSAEncryption:{sign:"rsa",hash:"sha256",id:"3031300d060960864801650304020105000420"},"RSA-SHA256":{sign:"ecdsa/rsa",hash:"sha256",id:"3031300d060960864801650304020105000420"},sha384WithRSAEncryption:{sign:"rsa",hash:"sha384",id:"3041300d060960864801650304020205000430"},"RSA-SHA384":{sign:"ecdsa/rsa",hash:"sha384",id:"3041300d060960864801650304020205000430"},sha512WithRSAEncryption:{sign:"rsa",hash:"sha512",id:"3051300d060960864801650304020305000440"},"RSA-SHA512":{sign:"ecdsa/rsa",hash:"sha512",id:"3051300d060960864801650304020305000440"},"RSA-SHA1":{sign:"rsa",hash:"sha1",id:"3021300906052b0e03021a05000414"},"ecdsa-with-SHA1":{sign:"ecdsa",hash:"sha1",id:""},sha256:{sign:"ecdsa",hash:"sha256",id:""},sha224:{sign:"ecdsa",hash:"sha224",id:""},sha384:{sign:"ecdsa",hash:"sha384",id:""},sha512:{sign:"ecdsa",hash:"sha512",id:""},"DSA-SHA":{sign:"dsa",hash:"sha1",id:""},"DSA-SHA1":{sign:"dsa",hash:"sha1",id:""},DSA:{sign:"dsa",hash:"sha1",id:""},"DSA-WITH-SHA224":{sign:"dsa",hash:"sha224",id:""},"DSA-SHA224":{sign:"dsa",hash:"sha224",id:""},"DSA-WITH-SHA256":{sign:"dsa",hash:"sha256",id:""},"DSA-SHA256":{sign:"dsa",hash:"sha256",id:""},"DSA-WITH-SHA384":{sign:"dsa",hash:"sha384",id:""},"DSA-SHA384":{sign:"dsa",hash:"sha384",id:""},"DSA-WITH-SHA512":{sign:"dsa",hash:"sha512",id:""},"DSA-SHA512":{sign:"dsa",hash:"sha512",id:""},"DSA-RIPEMD160":{sign:"dsa",hash:"rmd160",id:""},ripemd160WithRSA:{sign:"rsa",hash:"rmd160",id:"3021300906052b2403020105000414"},"RSA-RIPEMD160":{sign:"rsa",hash:"rmd160",id:"3021300906052b2403020105000414"},md5WithRSAEncryption:{sign:"rsa",hash:"md5",id:"3020300c06082a864886f70d020505000410"},"RSA-MD5":{sign:"rsa",hash:"md5",id:"3020300c06082a864886f70d020505000410"}}},function(e,t,r){t.pbkdf2=r(184),t.pbkdf2Sync=r(94)},function(e,t){var r=Math.pow(2,30)-1;e.exports=function(e,t){if("number"!=typeof e)throw new TypeError("Iterations not a number");if(e<0)throw new TypeError("Bad iterations");if("number"!=typeof t)throw new TypeError("Key length not a number");if(t<0||t>r||t!==t)throw new TypeError("Bad key length")}},function(e,t,r){(function(t){var r;if(t.browser)r="utf-8";else{r=parseInt(t.version.split(".")[0].slice(1),10)>=6?"utf-8":"binary"}e.exports=r}).call(t,r(7))},function(e,t,r){function n(e,t,r){var n=i(e),o="sha512"===e||"sha384"===e?128:64;t.length>o?t=n(t):t.length<o&&(t=h.concat([t,d],o));for(var a=h.allocUnsafe(o+l[e]),f=h.allocUnsafe(o+l[e]),s=0;s<o;s++)a[s]=54^t[s],f[s]=92^t[s];var c=h.allocUnsafe(o+r+4);a.copy(c,0,0,o),this.ipad1=c,this.ipad2=a,this.opad=f,this.alg=e,this.blocksize=o,this.hash=n,this.size=l[e]}function i(e){function t(t){return s(e).update(t).digest()}return"rmd160"===e||"ripemd160"===e?f:"md5"===e?a:t}function o(e,t,r,i,o){h.isBuffer(e)||(e=h.from(e,u)),h.isBuffer(t)||(t=h.from(t,u)),c(r,i),o=o||"sha1";var a=new n(o,e,t.length),f=h.allocUnsafe(i),s=h.allocUnsafe(t.length+4);t.copy(s,0,0,t.length);for(var d=0,p=l[o],b=Math.ceil(i/p),y=1;y<=b;y++){s.writeUInt32BE(y,t.length);for(var v=a.run(s,a.ipad1),g=v,m=1;m<r;m++){g=a.run(g,a.ipad2);for(var _=0;_<p;_++)v[_]^=g[_]}v.copy(f,d),d+=p}return f}var a=r(61),f=r(62),s=r(63),c=r(92),u=r(93),h=r(2).Buffer,d=h.alloc(128),l={md5:16,sha1:20,sha224:28,sha256:32,sha384:48,sha512:64,rmd160:20,ripemd160:20};n.prototype.run=function(e,t){return e.copy(t,this.blocksize),this.hash(t).copy(this.opad,this.blocksize),this.hash(this.opad)},e.exports=o},function(e,t,r){function n(e){var t=e._cipher.encryptBlockRaw(e._prev);return a(e._prev),t}var i=r(24),o=r(2).Buffer,a=r(96);t.encrypt=function(e,t){var r=Math.ceil(t.length/16),a=e._cache.length;e._cache=o.concat([e._cache,o.allocUnsafe(16*r)]);for(var f=0;f<r;f++){var s=n(e),c=a+16*f;e._cache.writeUInt32BE(s[0],c+0),e._cache.writeUInt32BE(s[1],c+4),e._cache.writeUInt32BE(s[2],c+8),e._cache.writeUInt32BE(s[3],c+12)}var u=e._cache.slice(0,t.length);return e._cache=e._cache.slice(t.length),i(t,u)}},function(e,t){function r(e){for(var t,r=e.length;r--;){if(255!==(t=e.readUInt8(r))){t++,e.writeUInt8(t,r);break}e.writeUInt8(0,r)}}e.exports=r},function(e,t){e.exports={"aes-128-ecb":{cipher:"AES",key:128,iv:0,mode:"ECB",type:"block"},"aes-192-ecb":{cipher:"AES",key:192,iv:0,mode:"ECB",type:"block"},"aes-256-ecb":{cipher:"AES",key:256,iv:0,mode:"ECB",type:"block"},"aes-128-cbc":{cipher:"AES",key:128,iv:16,mode:"CBC",type:"block"},"aes-192-cbc":{cipher:"AES",key:192,iv:16,mode:"CBC",type:"block"},"aes-256-cbc":{cipher:"AES",key:256,iv:16,mode:"CBC",type:"block"},aes128:{cipher:"AES",key:128,iv:16,mode:"CBC",type:"block"},aes192:{cipher:"AES",key:192,iv:16,mode:"CBC",type:"block"},aes256:{cipher:"AES",key:256,iv:16,mode:"CBC",type:"block"},"aes-128-cfb":{cipher:"AES",key:128,iv:16,mode:"CFB",type:"stream"},"aes-192-cfb":{cipher:"AES",key:192,iv:16,mode:"CFB",type:"stream"},"aes-256-cfb":{cipher:"AES",key:256,iv:16,mode:"CFB",type:"stream"},"aes-128-cfb8":{cipher:"AES",key:128,iv:16,mode:"CFB8",type:"stream"},"aes-192-cfb8":{cipher:"AES",key:192,iv:16,mode:"CFB8",type:"stream"},"aes-256-cfb8":{cipher:"AES",key:256,iv:16,mode:"CFB8",type:"stream"},"aes-128-cfb1":{cipher:"AES",key:128,iv:16,mode:"CFB1",type:"stream"},"aes-192-cfb1":{cipher:"AES",key:192,iv:16,mode:"CFB1",type:"stream"},"aes-256-cfb1":{cipher:"AES",key:256,iv:16,mode:"CFB1",type:"stream"},"aes-128-ofb":{cipher:"AES",key:128,iv:16,mode:"OFB",type:"stream"},"aes-192-ofb":{cipher:"AES",key:192,iv:16,mode:"OFB",type:"stream"},"aes-256-ofb":{cipher:"AES",key:256,iv:16,mode:"OFB",type:"stream"},"aes-128-ctr":{cipher:"AES",key:128,iv:16,mode:"CTR",type:"stream"},"aes-192-ctr":{cipher:"AES",key:192,iv:16,mode:"CTR",type:"stream"},"aes-256-ctr":{cipher:"AES",key:256,iv:16,mode:"CTR",type:"stream"},"aes-128-gcm":{cipher:"AES",key:128,iv:12,mode:"GCM",type:"auth"},"aes-192-gcm":{cipher:"AES",key:192,iv:12,mode:"GCM",type:"auth"},"aes-256-gcm":{cipher:"AES",key:256,iv:12,mode:"GCM",type:"auth"}}},function(e,t,r){function n(e,t){var r=0;e.length!==t.length&&r++;for(var n=Math.min(e.length,t.length),i=0;i<n;++i)r+=e[i]^t[i];return r}function i(e,t,r){if(12===t.length)return e._finID=f.concat([t,f.from([0,0,0,1])]),f.concat([t,f.from([0,0,0,2])]);var n=new u(r),i=t.length,o=i%16;n.update(t),o&&(o=16-o,n.update(f.alloc(o,0))),n.update(f.alloc(8,0));var a=8*i,s=f.alloc(8);s.writeUIntBE(a,0,8),n.update(s),e._finID=n.state;var c=f.from(e._finID);return d(c),c}function o(e,t,r,n){s.call(this);var o=f.alloc(4,0);this._cipher=new a.AES(t);var c=this._cipher.encryptBlock(o);this._ghash=new u(c),r=i(this,r,c),this._prev=f.from(r),this._cache=f.allocUnsafe(0),this._secCache=f.allocUnsafe(0),this._decrypt=n,this._alen=0,this._len=0,this._mode=e,this._authTag=null,this._called=!1}var a=r(39),f=r(2).Buffer,s=r(10),c=r(0),u=r(195),h=r(24),d=r(96);c(o,s),o.prototype._update=function(e){if(!this._called&&this._alen){var t=16-this._alen%16;t<16&&(t=f.alloc(t,0),this._ghash.update(t))}this._called=!0;var r=this._mode.encrypt(this,e);return this._decrypt?this._ghash.update(e):this._ghash.update(r),this._len+=e.length,r},o.prototype._final=function(){if(this._decrypt&&!this._authTag)throw new Error("Unsupported state or unable to authenticate data");var e=h(this._ghash.final(8*this._alen,8*this._len),this._cipher.encryptBlock(this._finID));if(this._decrypt&&n(e,this._authTag))throw new Error("Unsupported state or unable to authenticate data");this._authTag=e,this._cipher.scrub()},o.prototype.getAuthTag=function(){if(this._decrypt||!f.isBuffer(this._authTag))throw new Error("Attempting to get auth tag in unsupported state");return this._authTag},o.prototype.setAuthTag=function(e){if(!this._decrypt)throw new Error("Attempting to set auth tag in unsupported state");this._authTag=e},o.prototype.setAAD=function(e){if(this._called)throw new Error("Attempting to set AAD in unsupported state");this._ghash.update(e),this._alen+=e.length},e.exports=o},function(e,t,r){function n(e,t,r,n){a.call(this),this._cipher=new i.AES(t),this._prev=o.from(r),this._cache=o.allocUnsafe(0),this._secCache=o.allocUnsafe(0),this._decrypt=n,this._mode=e}var i=r(39),o=r(2).Buffer,a=r(10);r(0)(n,a),n.prototype._update=function(e){return this._mode.encrypt(this,e,this._decrypt)},n.prototype._final=function(){this._cipher.scrub()},e.exports=n},function(e,t,r){function n(){if(null!==m)return m;var e=[];e[0]=2;for(var t=1,r=3;r<1048576;r+=2){for(var n=Math.ceil(Math.sqrt(r)),i=0;i<t&&e[i]<=n&&r%e[i]!=0;i++);t!==i&&e[i]<=n||(e[t++]=r)}return m=e,e}function i(e){for(var t=n(),r=0;r<t.length;r++)if(0===e.modn(t[r]))return 0===e.cmpn(t[r]);return!0}function o(e){var t=s.mont(e);return 0===l.toRed(t).redPow(e.subn(1)).fromRed().cmpn(1)}function a(e,t){if(e<16)return new s(2===t||5===t?[140,123]:[140,39]);t=new s(t);for(var r,n;;){for(r=new s(f(Math.ceil(e/8)));r.bitLength()>e;)r.ishrn(1);if(r.isEven()&&r.iadd(d),r.testn(1)||r.iadd(l),t.cmp(l)){if(!t.cmp(p))for(;r.mod(b).cmp(y);)r.iadd(g)}else for(;r.mod(c).cmp(v);)r.iadd(g);if(n=r.shrn(1),i(n)&&i(r)&&o(n)&&o(r)&&h.test(n)&&h.test(r))return r}}var f=r(22);e.exports=a,a.simpleSieve=i,a.fermatTest=o;var s=r(3),c=new s(24),u=r(101),h=new u,d=new s(1),l=new s(2),p=new s(5),b=(new s(16),new s(8),new s(10)),y=new s(3),v=(new s(7),new s(11)),g=new s(4),m=(new s(12),null)},function(e,t,r){function n(e){this.rand=e||new o.Rand}var i=r(3),o=r(102);e.exports=n,n.create=function(e){return new n(e)},n.prototype._randbelow=function(e){var t=e.bitLength(),r=Math.ceil(t/8);do{var n=new i(this.rand.generate(r))}while(n.cmp(e)>=0);return n},n.prototype._randrange=function(e,t){var r=t.sub(e);return e.add(this._randbelow(r))},n.prototype.test=function(e,t,r){var n=e.bitLength(),o=i.mont(e),a=new i(1).toRed(o);t||(t=Math.max(1,n/48|0));for(var f=e.subn(1),s=0;!f.testn(s);s++);for(var c=e.shrn(s),u=f.toRed(o);t>0;t--){var h=this._randrange(new i(2),f);r&&r(h);var d=h.toRed(o).redPow(c);if(0!==d.cmp(a)&&0!==d.cmp(u)){for(var l=1;l<s;l++){if(d=d.redSqr(),0===d.cmp(a))return!1;if(0===d.cmp(u))break}if(l===s)return!1}}return!0},n.prototype.getDivisor=function(e,t){var r=e.bitLength(),n=i.mont(e),o=new i(1).toRed(n);t||(t=Math.max(1,r/48|0));for(var a=e.subn(1),f=0;!a.testn(f);f++);for(var s=e.shrn(f),c=a.toRed(n);t>0;t--){var u=this._randrange(new i(2),a),h=e.gcd(u);if(0!==h.cmpn(1))return h;var d=u.toRed(n).redPow(s);if(0!==d.cmp(o)&&0!==d.cmp(c)){for(var l=1;l<f;l++){if(d=d.redSqr(),0===d.cmp(o))return d.fromRed().subn(1).gcd(e);if(0===d.cmp(c))break}if(l===f)return d=d.redSqr(),d.fromRed().subn(1).gcd(e)}}return!1}},function(e,t,r){function n(e){this.rand=e}var i;if(e.exports=function(e){return i||(i=new n(null)),i.generate(e)},e.exports.Rand=n,n.prototype.generate=function(e){return this._rand(e)},n.prototype._rand=function(e){if(this.rand.getBytes)return this.rand.getBytes(e);for(var t=new Uint8Array(e),r=0;r<t.length;r++)t[r]=this.rand.getByte();return t},"object"==typeof self)self.crypto&&self.crypto.getRandomValues?n.prototype._rand=function(e){var t=new Uint8Array(e);return self.crypto.getRandomValues(t),t}:self.msCrypto&&self.msCrypto.getRandomValues?n.prototype._rand=function(e){var t=new Uint8Array(e);return self.msCrypto.getRandomValues(t),t}:"object"==typeof window&&(n.prototype._rand=function(){throw new Error("Not implemented yet")});else try{var o=r(207);if("function"!=typeof o.randomBytes)throw new Error("Not supported");n.prototype._rand=function(e){return o.randomBytes(e)}}catch(e){}},function(e,t,r){"use strict";function n(e,t){if(Array.isArray(e))return e.slice();if(!e)return[];var r=[];if("string"!=typeof e){for(var n=0;n<e.length;n++)r[n]=0|e[n];return r}if("hex"===t){e=e.replace(/[^a-z0-9]+/gi,""),e.length%2!=0&&(e="0"+e);for(var n=0;n<e.length;n+=2)r.push(parseInt(e[n]+e[n+1],16))}else for(var n=0;n<e.length;n++){var i=e.charCodeAt(n),o=i>>8,a=255&i;o?r.push(o,a):r.push(a)}return r}function i(e){return 1===e.length?"0"+e:e}function o(e){for(var t="",r=0;r<e.length;r++)t+=i(e[r].toString(16));return t}var a=t;a.toArray=n,a.zero2=i,a.toHex=o,a.encode=function(e,t){return"hex"===t?o(e):e}},function(e,t,r){"use strict";function n(e,t,r,n){return 0===e?i(t,r,n):1===e||3===e?a(t,r,n):2===e?o(t,r,n):void 0}function i(e,t,r){return e&t^~e&r}function o(e,t,r){return e&t^e&r^t&r}function a(e,t,r){return e^t^r}function f(e){return d(e,2)^d(e,13)^d(e,22)}function s(e){return d(e,6)^d(e,11)^d(e,25)}function c(e){return d(e,7)^d(e,18)^e>>>3}function u(e){return d(e,17)^d(e,19)^e>>>10}var h=r(6),d=h.rotr32;t.ft_1=n,t.ch32=i,t.maj32=o,t.p32=a,t.s0_256=f,t.s1_256=s,t.g0_256=c,t.g1_256=u},function(e,t,r){"use strict";function n(){if(!(this instanceof n))return new n;v.call(this),this.h=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],this.k=g,this.W=new Array(64)}var i=r(6),o=r(25),a=r(104),f=r(5),s=i.sum32,c=i.sum32_4,u=i.sum32_5,h=a.ch32,d=a.maj32,l=a.s0_256,p=a.s1_256,b=a.g0_256,y=a.g1_256,v=o.BlockHash,g=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];i.inherits(n,v),e.exports=n,n.blockSize=512,n.outSize=256,n.hmacStrength=192,n.padLength=64,n.prototype._update=function(e,t){for(var r=this.W,n=0;n<16;n++)r[n]=e[t+n];for(;n<r.length;n++)r[n]=c(y(r[n-2]),r[n-7],b(r[n-15]),r[n-16]);var i=this.h[0],o=this.h[1],a=this.h[2],v=this.h[3],g=this.h[4],m=this.h[5],_=this.h[6],w=this.h[7];for(f(this.k.length===r.length),n=0;n<r.length;n++){var S=u(w,p(g),h(g,m,_),this.k[n],r[n]),M=s(l(i),d(i,o,a));w=_,_=m,m=g,g=s(v,S),v=a,a=o,o=i,i=s(S,M)}this.h[0]=s(this.h[0],i),this.h[1]=s(this.h[1],o),this.h[2]=s(this.h[2],a),this.h[3]=s(this.h[3],v),this.h[4]=s(this.h[4],g),this.h[5]=s(this.h[5],m),this.h[6]=s(this.h[6],_),this.h[7]=s(this.h[7],w)},n.prototype._digest=function(e){return"hex"===e?i.toHex32(this.h,"big"):i.split32(this.h,"big")}},function(e,t,r){"use strict";function n(){if(!(this instanceof n))return new n;j.call(this),this.h=[1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209],this.k=R,this.W=new Array(160)}function i(e,t,r,n,i){var o=e&r^~e&i;return o<0&&(o+=4294967296),o}function o(e,t,r,n,i,o){var a=t&n^~t&o;return a<0&&(a+=4294967296),a}function a(e,t,r,n,i){var o=e&r^e&i^r&i;return o<0&&(o+=4294967296),o}function f(e,t,r,n,i,o){var a=t&n^t&o^n&o;return a<0&&(a+=4294967296),a}function s(e,t){var r=m(e,t,28),n=m(t,e,2),i=m(t,e,7),o=r^n^i;return o<0&&(o+=4294967296),o}function c(e,t){var r=_(e,t,28),n=_(t,e,2),i=_(t,e,7),o=r^n^i;return o<0&&(o+=4294967296),o}function u(e,t){var r=m(e,t,14),n=m(e,t,18),i=m(t,e,9),o=r^n^i;return o<0&&(o+=4294967296),o}function h(e,t){var r=_(e,t,14),n=_(e,t,18),i=_(t,e,9),o=r^n^i;return o<0&&(o+=4294967296),o}function d(e,t){var r=m(e,t,1),n=m(e,t,8),i=w(e,t,7),o=r^n^i;return o<0&&(o+=4294967296),o}function l(e,t){var r=_(e,t,1),n=_(e,t,8),i=S(e,t,7),o=r^n^i;return o<0&&(o+=4294967296),o}function p(e,t){var r=m(e,t,19),n=m(t,e,29),i=w(e,t,6),o=r^n^i;return o<0&&(o+=4294967296),o}function b(e,t){var r=_(e,t,19),n=_(t,e,29),i=S(e,t,6),o=r^n^i;return o<0&&(o+=4294967296),o}var y=r(6),v=r(25),g=r(5),m=y.rotr64_hi,_=y.rotr64_lo,w=y.shr64_hi,S=y.shr64_lo,M=y.sum64,E=y.sum64_hi,k=y.sum64_lo,x=y.sum64_4_hi,A=y.sum64_4_lo,B=y.sum64_5_hi,I=y.sum64_5_lo,j=v.BlockHash,R=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];y.inherits(n,j),e.exports=n,n.blockSize=1024,n.outSize=512,n.hmacStrength=192,n.padLength=128,n.prototype._prepareBlock=function(e,t){for(var r=this.W,n=0;n<32;n++)r[n]=e[t+n];for(;n<r.length;n+=2){var i=p(r[n-4],r[n-3]),o=b(r[n-4],r[n-3]),a=r[n-14],f=r[n-13],s=d(r[n-30],r[n-29]),c=l(r[n-30],r[n-29]),u=r[n-32],h=r[n-31];r[n]=x(i,o,a,f,s,c,u,h),r[n+1]=A(i,o,a,f,s,c,u,h)}},n.prototype._update=function(e,t){this._prepareBlock(e,t);var r=this.W,n=this.h[0],d=this.h[1],l=this.h[2],p=this.h[3],b=this.h[4],y=this.h[5],v=this.h[6],m=this.h[7],_=this.h[8],w=this.h[9],S=this.h[10],x=this.h[11],A=this.h[12],j=this.h[13],R=this.h[14],O=this.h[15];g(this.k.length===r.length);for(var P=0;P<r.length;P+=2){var T=R,C=O,D=u(_,w),L=h(_,w),z=i(_,w,S,x,A),N=o(_,w,S,x,A,j),U=this.k[P],q=this.k[P+1],K=r[P],F=r[P+1],H=B(T,C,D,L,z,N,U,q,K,F),V=I(T,C,D,L,z,N,U,q,K,F);T=s(n,d),C=c(n,d),D=a(n,d,l,p,b),L=f(n,d,l,p,b,y);var Y=E(T,C,D,L),W=k(T,C,D,L);R=A,O=j,A=S,j=x,S=_,x=w,_=E(v,m,H,V),w=k(m,m,H,V),v=b,m=y,b=l,y=p,l=n,p=d,n=E(H,V,Y,W),d=k(H,V,Y,W)}M(this.h,0,n,d),M(this.h,2,l,p),M(this.h,4,b,y),M(this.h,6,v,m),M(this.h,8,_,w),M(this.h,10,S,x),M(this.h,12,A,j),M(this.h,14,R,O)},n.prototype._digest=function(e){return"hex"===e?y.toHex32(this.h,"big"):y.split32(this.h,"big")}},function(e,t,r){function n(e,t){if(a.call(this,t),!f.isBuffer(e))return void this.error("Input not Buffer");this.base=e,this.offset=0,this.length=e.length}function i(e,t){if(Array.isArray(e))this.length=0,this.value=e.map(function(e){return e instanceof i||(e=new i(e,t)),this.length+=e.length,e},this);else if("number"==typeof e){if(!(0<=e&&e<=255))return t.error("non-byte EncoderBuffer value");this.value=e,this.length=1}else if("string"==typeof e)this.value=e,this.length=f.byteLength(e);else{if(!f.isBuffer(e))return t.error("Unsupported type: "+typeof e);this.value=e,this.length=e.length}}var o=r(0),a=r(27).Reporter,f=r(1).Buffer;o(n,a),t.DecoderBuffer=n,n.prototype.save=function(){return{offset:this.offset,reporter:a.prototype.save.call(this)}},n.prototype.restore=function(e){var t=new n(this.base);return t.offset=e.offset,t.length=this.offset,this.offset=e.offset,a.prototype.restore.call(this,e.reporter),t},n.prototype.isEmpty=function(){return this.offset===this.length},n.prototype.readUInt8=function(e){return this.offset+1<=this.length?this.base.readUInt8(this.offset++,!0):this.error(e||"DecoderBuffer overrun")},n.prototype.skip=function(e,t){if(!(this.offset+e<=this.length))return this.error(t||"DecoderBuffer overrun");var r=new n(this.base);return r._reporterState=this._reporterState,r.offset=this.offset,r.length=this.offset+e,this.offset+=e,r},n.prototype.raw=function(e){return this.base.slice(e?e.offset:this.offset,this.length)},t.EncoderBuffer=i,i.prototype.join=function(e,t){return e||(e=new f(this.length)),t||(t=0),0===this.length?e:(Array.isArray(this.value)?this.value.forEach(function(r){r.join(e,t),t+=r.length}):("number"==typeof this.value?e[t]=this.value:"string"==typeof this.value?e.write(this.value,t):f.isBuffer(this.value)&&this.value.copy(e,t),t+=this.length),e)}},function(e,t,r){var n=t;n._reverse=function(e){var t={};return Object.keys(e).forEach(function(r){(0|r)==r&&(r|=0);var n=e[r];t[n]=r}),t},n.der=r(239)},function(e,t,r){function n(e){this.enc="der",this.name=e.name,this.entity=e,this.tree=new i,this.tree._init(e.body)}function i(e){c.Node.call(this,"der",e)}function o(e,t){var r=e.readUInt8(t);if(e.isError(r))return r;var n=h.tagClass[r>>6],i=0==(32&r);if(31==(31&r)){var o=r;for(r=0;128==(128&o);){if(o=e.readUInt8(t),e.isError(o))return o;r<<=7,r|=127&o}}else r&=31;return{cls:n,primitive:i,tag:r,tagStr:h.tag[r]}}function a(e,t,r){var n=e.readUInt8(r);if(e.isError(n))return n;if(!t&&128===n)return null;if(0==(128&n))return n;var i=127&n;if(i>4)return e.error("length octect is too long");n=0;for(var o=0;o<i;o++){n<<=8;var a=e.readUInt8(r);if(e.isError(a))return a;n|=a}return n}var f=r(0),s=r(26),c=s.base,u=s.bignum,h=s.constants.der;e.exports=n,n.prototype.decode=function(e,t){return e instanceof c.DecoderBuffer||(e=new c.DecoderBuffer(e,t)),this.tree._decode(e,t)},f(i,c.Node),i.prototype._peekTag=function(e,t,r){if(e.isEmpty())return!1;var n=e.save(),i=o(e,'Failed to peek tag: "'+t+'"');return e.isError(i)?i:(e.restore(n),i.tag===t||i.tagStr===t||i.tagStr+"of"===t||r)},i.prototype._decodeTag=function(e,t,r){var n=o(e,'Failed to decode tag of "'+t+'"');if(e.isError(n))return n;var i=a(e,n.primitive,'Failed to get length of "'+t+'"');if(e.isError(i))return i;if(!r&&n.tag!==t&&n.tagStr!==t&&n.tagStr+"of"!==t)return e.error('Failed to match tag: "'+t+'"');if(n.primitive||null!==i)return e.skip(i,'Failed to match body of: "'+t+'"');var f=e.save(),s=this._skipUntilEnd(e,'Failed to skip indefinite length body: "'+this.tag+'"');return e.isError(s)?s:(i=e.offset-f.offset,e.restore(f),e.skip(i,'Failed to match body of: "'+t+'"'))},i.prototype._skipUntilEnd=function(e,t){for(;;){var r=o(e,t);if(e.isError(r))return r;var n=a(e,r.primitive,t);if(e.isError(n))return n;var i;if(i=r.primitive||null!==n?e.skip(n):this._skipUntilEnd(e,t),e.isError(i))return i;if("end"===r.tagStr)break}},i.prototype._decodeList=function(e,t,r,n){for(var i=[];!e.isEmpty();){var o=this._peekTag(e,"end");if(e.isError(o))return o;var a=r.decode(e,"der",n);if(e.isError(a)&&o)break;i.push(a)}return i},i.prototype._decodeStr=function(e,t){if("bitstr"===t){var r=e.readUInt8();return e.isError(r)?r:{unused:r,data:e.raw()}}if("bmpstr"===t){var n=e.raw();if(n.length%2==1)return e.error("Decoding of string type: bmpstr length mismatch");for(var i="",o=0;o<n.length/2;o++)i+=String.fromCharCode(n.readUInt16BE(2*o));return i}if("numstr"===t){var a=e.raw().toString("ascii");return this._isNumstr(a)?a:e.error("Decoding of string type: numstr unsupported characters")}if("octstr"===t)return e.raw();if("objDesc"===t)return e.raw();if("printstr"===t){var f=e.raw().toString("ascii");return this._isPrintstr(f)?f:e.error("Decoding of string type: printstr unsupported characters")}return/str$/.test(t)?e.raw().toString():e.error("Decoding of string type: "+t+" unsupported")},i.prototype._decodeObjid=function(e,t,r){for(var n,i=[],o=0;!e.isEmpty();){var a=e.readUInt8();o<<=7,o|=127&a,0==(128&a)&&(i.push(o),o=0)}128&a&&i.push(o);var f=i[0]/40|0,s=i[0]%40;if(n=r?i:[f,s].concat(i.slice(1)),t){var c=t[n.join(" ")];void 0===c&&(c=t[n.join(".")]),void 0!==c&&(n=c)}return n},i.prototype._decodeTime=function(e,t){var r=e.raw().toString();if("gentime"===t)var n=0|r.slice(0,4),i=0|r.slice(4,6),o=0|r.slice(6,8),a=0|r.slice(8,10),f=0|r.slice(10,12),s=0|r.slice(12,14);else{if("utctime"!==t)return e.error("Decoding "+t+" time is not supported yet");var n=0|r.slice(0,2),i=0|r.slice(2,4),o=0|r.slice(4,6),a=0|r.slice(6,8),f=0|r.slice(8,10),s=0|r.slice(10,12);n=n<70?2e3+n:1900+n}return Date.UTC(n,i-1,o,a,f,s,0)},i.prototype._decodeNull=function(e){return null},i.prototype._decodeBool=function(e){var t=e.readUInt8();return e.isError(t)?t:0!==t},i.prototype._decodeInt=function(e,t){var r=e.raw(),n=new u(r);return t&&(n=t[n.toString(10)]||n),n},i.prototype._use=function(e,t){return"function"==typeof e&&(e=e(t)),e._getDecoder("der").tree}},function(e,t,r){function n(e){this.enc="der",this.name=e.name,this.entity=e,this.tree=new i,this.tree._init(e.body)}function i(e){u.Node.call(this,"der",e)}function o(e){return e<10?"0"+e:e}function a(e,t,r,n){var i;if("seqof"===e?e="seq":"setof"===e&&(e="set"),h.tagByName.hasOwnProperty(e))i=h.tagByName[e];else{if("number"!=typeof e||(0|e)!==e)return n.error("Unknown tag: "+e);i=e}return i>=31?n.error("Multi-octet tag encoding unsupported"):(t||(i|=32),i|=h.tagClassByName[r||"universal"]<<6)}var f=r(0),s=r(1).Buffer,c=r(26),u=c.base,h=c.constants.der;e.exports=n,n.prototype.encode=function(e,t){return this.tree._encode(e,t).join()},f(i,u.Node),i.prototype._encodeComposite=function(e,t,r,n){var i=a(e,t,r,this.reporter);if(n.length<128){var o=new s(2);return o[0]=i,o[1]=n.length,this._createEncoderBuffer([o,n])}for(var f=1,c=n.length;c>=256;c>>=8)f++;var o=new s(2+f);o[0]=i,o[1]=128|f;for(var c=1+f,u=n.length;u>0;c--,u>>=8)o[c]=255&u;return this._createEncoderBuffer([o,n])},i.prototype._encodeStr=function(e,t){if("bitstr"===t)return this._createEncoderBuffer([0|e.unused,e.data]);if("bmpstr"===t){for(var r=new s(2*e.length),n=0;n<e.length;n++)r.writeUInt16BE(e.charCodeAt(n),2*n);return this._createEncoderBuffer(r)}return"numstr"===t?this._isNumstr(e)?this._createEncoderBuffer(e):this.reporter.error("Encoding of string type: numstr supports only digits and space"):"printstr"===t?this._isPrintstr(e)?this._createEncoderBuffer(e):this.reporter.error("Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark"):/str$/.test(t)?this._createEncoderBuffer(e):"objDesc"===t?this._createEncoderBuffer(e):this.reporter.error("Encoding of string type: "+t+" unsupported")},i.prototype._encodeObjid=function(e,t,r){if("string"==typeof e){if(!t)return this.reporter.error("string objid given, but no values map found");if(!t.hasOwnProperty(e))return this.reporter.error("objid not found in values map");e=t[e].split(/[\s\.]+/g);for(var n=0;n<e.length;n++)e[n]|=0}else if(Array.isArray(e)){e=e.slice();for(var n=0;n<e.length;n++)e[n]|=0}if(!Array.isArray(e))return this.reporter.error("objid() should be either array or string, got: "+JSON.stringify(e));if(!r){if(e[1]>=40)return this.reporter.error("Second objid identifier OOB");e.splice(0,2,40*e[0]+e[1])}for(var i=0,n=0;n<e.length;n++){var o=e[n];for(i++;o>=128;o>>=7)i++}for(var a=new s(i),f=a.length-1,n=e.length-1;n>=0;n--){var o=e[n];for(a[f--]=127&o;(o>>=7)>0;)a[f--]=128|127&o}return this._createEncoderBuffer(a)},i.prototype._encodeTime=function(e,t){var r,n=new Date(e);return"gentime"===t?r=[o(n.getFullYear()),o(n.getUTCMonth()+1),o(n.getUTCDate()),o(n.getUTCHours()),o(n.getUTCMinutes()),o(n.getUTCSeconds()),"Z"].join(""):"utctime"===t?r=[o(n.getFullYear()%100),o(n.getUTCMonth()+1),o(n.getUTCDate()),o(n.getUTCHours()),o(n.getUTCMinutes()),o(n.getUTCSeconds()),"Z"].join(""):this.reporter.error("Encoding "+t+" time is not supported yet"),this._encodeStr(r,"octstr")},i.prototype._encodeNull=function(){return this._createEncoderBuffer("")},i.prototype._encodeInt=function(e,t){if("string"==typeof e){if(!t)return this.reporter.error("String int or enum given, but no values map");if(!t.hasOwnProperty(e))return this.reporter.error("Values map doesn't contain: "+JSON.stringify(e));e=t[e]}if("number"!=typeof e&&!s.isBuffer(e)){var r=e.toArray();!e.sign&&128&r[0]&&r.unshift(0),e=new s(r)}if(s.isBuffer(e)){var n=e.length;0===e.length&&n++;var i=new s(n);return e.copy(i),0===e.length&&(i[0]=0),this._createEncoderBuffer(i)}if(e<128)return this._createEncoderBuffer(e);if(e<256)return this._createEncoderBuffer([0,e]);for(var n=1,o=e;o>=256;o>>=8)n++;for(var i=new Array(n),o=i.length-1;o>=0;o--)i[o]=255&e,e>>=8;return 128&i[0]&&i.unshift(0),this._createEncoderBuffer(new s(i))},i.prototype._encodeBool=function(e){return this._createEncoderBuffer(e?255:0)},i.prototype._use=function(e,t){return"function"==typeof e&&(e=e(t)),e._getEncoder("der").tree},i.prototype._skipDefault=function(e,t,r){var n,i=this._baseState;if(null===i.default)return!1;var o=e.join();if(void 0===i.defaultBuffer&&(i.defaultBuffer=this._encodeValue(i.default,t,r).join()),o.length!==i.defaultBuffer.length)return!1;for(n=0;n<o.length;n++)if(o[n]!==i.defaultBuffer[n])return!1;return!0}},function(e,t){e.exports={"1.3.132.0.10":"secp256k1","1.3.132.0.33":"p224","1.2.840.10045.3.1.1":"p192","1.2.840.10045.3.1.7":"p256","1.3.132.0.34":"p384","1.3.132.0.35":"p521"}},function(e,t,r){(function(t){function n(e){var r=new t(4);return r.writeUInt32BE(e,0),r}var i=r(23);e.exports=function(e,r){for(var o,a=new t(""),f=0;a.length<r;)o=n(f++),a=t.concat([a,i("sha1").update(e).update(o).digest()]);return a.slice(0,r)}}).call(t,r(1).Buffer)},function(e,t){e.exports=function(e,t){for(var r=e.length,n=-1;++n<r;)e[n]^=t[n];return e}},function(e,t,r){(function(t){function n(e,r){return new t(e.toRed(i.mont(r.modulus)).redPow(new i(r.publicExponent)).fromRed().toArray())}var i=r(3);e.exports=n}).call(t,r(1).Buffer)},function(e,t,r){var n=r(1).Buffer;e.exports=function(e){return"string"==typeof e?e:"number"==typeof e||n.isBuffer(e)?e.toString():JSON.stringify(e)}},function(e,t,r){var n=r(42),i=function(e,t){n.call(this,e),this.name="NotBeforeError",this.date=t};i.prototype=Object.create(n.prototype),i.prototype.constructor=i,e.exports=i},function(e,t,r){var n=r(42),i=function(e,t){n.call(this,e),this.name="TokenExpiredError",this.expiredAt=t};i.prototype=Object.create(n.prototype),i.prototype.constructor=i,e.exports=i},function(e,t,r){var n=r(256);e.exports=function(e,t){var r=t||Math.floor(Date.now()/1e3);if("string"==typeof e){var i=n(e);if(void 0===i)return;return Math.floor(r+i/1e3)}return"number"==typeof e?r+e:void 0}},function(e,t){function r(){for(var e={},t=0;t<arguments.length;t++){var r=arguments[t];for(var i in r)n.call(r,i)&&(e[i]=r[i])}return e}e.exports=r;var n=Object.prototype.hasOwnProperty},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var i,o,a=r(121),f=n(a),s=r(150),c=n(s);!function(){var n=r(154),a=r(156),s=["cookie","localStorage"],u={storage:"localStorage",keyName:"auth_token",signKey:null,audience:null,issuer:null,ignoreExpiration:!1,ignoreNotBefore:!1,subject:null,clockTolerance:0},h={options:{},setOptions:function(e){return this.options=(0,c.default)({},u,e),e&&e.storage&&-1===s.indexOf(e.storage)&&console.warn("[Vue JWT] suppored storages are 'cookie' and 'localStorage'. Using localStorage as default."),this},hasToken:function(){var e=this.getToken();return e&&e.length>0},getToken:function(){return"cookie"===this.options.storage?n.get(this.options.keyName):localStorage.getItem(this.options.keyName)},decode:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=e||this.getToken(),n=t||this.options.signKey;try{var i={audience:this.options.audience,issuer:this.options.issuer,ignoreExpiration:this.options.ignoreExpiration,ignoreNotBefore:this.options.ignoreNotBefore,subject:this.options.subject,clockTolerance:this.options.clockTolerance};return null===n?a.decode(r,i):a.verify(r,n,i)}catch(e){return console.error("[Vue JWT] Can not decode token: "+e.message),null}}},d={install:function(e,t){var r=h.setOptions(t);e.prototype.$jwt=r,e.$jwt=r}};"object"===(0,f.default)(t)?e.exports=d:(i=[],void 0!==(o=function(){return d}.apply(t,i))&&(e.exports=o))}()},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=r(122),o=n(i),a=r(139),f=n(a),s="function"==typeof f.default&&"symbol"==typeof o.default?function(e){return typeof e}:function(e){return e&&"function"==typeof f.default&&e.constructor===f.default&&e!==f.default.prototype?"symbol":typeof e};t.default="function"==typeof f.default&&"symbol"===s(o.default)?function(e){return void 0===e?"undefined":s(e)}:function(e){return e&&"function"==typeof f.default&&e.constructor===f.default&&e!==f.default.prototype?"symbol":void 0===e?"undefined":s(e)}},function(e,t,r){e.exports={default:r(123),__esModule:!0}},function(e,t,r){r(124),r(135),e.exports=r(53).f("iterator")},function(e,t,r){"use strict";var n=r(125)(!0);r(69)(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,r=this._i;return r>=t.length?{value:void 0,done:!0}:(e=n(t,r),this._i+=e.length,{value:e,done:!1})})},function(e,t,r){var n=r(43),i=r(44);e.exports=function(e){return function(t,r){var o,a,f=String(i(t)),s=n(r),c=f.length;return s<0||s>=c?e?"":void 0:(o=f.charCodeAt(s),o<55296||o>56319||s+1===c||(a=f.charCodeAt(s+1))<56320||a>57343?e?f.charAt(s):o:e?f.slice(s,s+2):a-56320+(o-55296<<10)+65536)}}},function(e,t,r){var n=r(127);e.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,i){return e.call(t,r,n,i)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,r){"use strict";var n=r(73),i=r(31),o=r(52),a={};r(14)(a,r(18)("iterator"),function(){return this}),e.exports=function(e,t,r){e.prototype=n(a,{next:i(1,r)}),o(e,t+" Iterator")}},function(e,t,r){var n=r(15),i=r(29),o=r(32);e.exports=r(16)?Object.defineProperties:function(e,t){i(e);for(var r,a=o(t),f=a.length,s=0;f>s;)n.f(e,r=a[s++],t[r]);return e}},function(e,t,r){var n=r(17),i=r(131),o=r(132);e.exports=function(e){return function(t,r,a){var f,s=n(t),c=i(s.length),u=o(a,c);if(e&&r!=r){for(;c>u;)if((f=s[u++])!=f)return!0}else for(;c>u;u++)if((e||u in s)&&s[u]===r)return e||u||0;return!e&&-1}}},function(e,t,r){var n=r(43),i=Math.min;e.exports=function(e){return e>0?i(n(e),9007199254740991):0}},function(e,t,r){var n=r(43),i=Math.max,o=Math.min;e.exports=function(e,t){return e=n(e),e<0?i(e+t,0):o(e,t)}},function(e,t,r){var n=r(8).document;e.exports=n&&n.documentElement},function(e,t,r){var n=r(11),i=r(77),o=r(49)("IE_PROTO"),a=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=i(e),n(e,o)?e[o]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?a:null}},function(e,t,r){r(136);for(var n=r(8),i=r(14),o=r(48),a=r(18)("toStringTag"),f="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),s=0;s<f.length;s++){var c=f[s],u=n[c],h=u&&u.prototype;h&&!h[a]&&i(h,a,c),o[c]=o.Array}},function(e,t,r){"use strict";var n=r(137),i=r(138),o=r(48),a=r(17);e.exports=r(69)(Array,"Array",function(e,t){this._t=a(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,i(1)):"keys"==t?i(0,r):"values"==t?i(0,e[r]):i(0,[r,e[r]])},"values"),o.Arguments=o.Array,n("keys"),n("values"),n("entries")},function(e,t){e.exports=function(){}},function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},function(e,t,r){e.exports={default:r(140),__esModule:!0}},function(e,t,r){r(141),r(147),r(148),r(149),e.exports=r(28).Symbol},function(e,t,r){"use strict";var n=r(8),i=r(11),o=r(16),a=r(46),f=r(72),s=r(142).KEY,c=r(20),u=r(50),h=r(52),d=r(33),l=r(18),p=r(53),b=r(54),y=r(143),v=r(144),g=r(29),m=r(17),_=r(47),w=r(31),S=r(73),M=r(145),E=r(146),k=r(15),x=r(32),A=E.f,B=k.f,I=M.f,j=n.Symbol,R=n.JSON,O=R&&R.stringify,P=l("_hidden"),T=l("toPrimitive"),C={}.propertyIsEnumerable,D=u("symbol-registry"),L=u("symbols"),z=u("op-symbols"),N=Object.prototype,U="function"==typeof j,q=n.QObject,K=!q||!q.prototype||!q.prototype.findChild,F=o&&c(function(){return 7!=S(B({},"a",{get:function(){return B(this,"a",{value:7}).a}})).a})?function(e,t,r){var n=A(N,t);n&&delete N[t],B(e,t,r),n&&e!==N&&B(N,t,n)}:B,H=function(e){var t=L[e]=S(j.prototype);return t._k=e,t},V=U&&"symbol"==typeof j.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof j},Y=function(e,t,r){return e===N&&Y(z,t,r),g(e),t=_(t,!0),g(r),i(L,t)?(r.enumerable?(i(e,P)&&e[P][t]&&(e[P][t]=!1),r=S(r,{enumerable:w(0,!1)})):(i(e,P)||B(e,P,w(1,{})),e[P][t]=!0),F(e,t,r)):B(e,t,r)},W=function(e,t){g(e);for(var r,n=y(t=m(t)),i=0,o=n.length;o>i;)Y(e,r=n[i++],t[r]);return e},J=function(e,t){return void 0===t?S(e):W(S(e),t)},G=function(e){var t=C.call(this,e=_(e,!0));return!(this===N&&i(L,e)&&!i(z,e))&&(!(t||!i(this,e)||!i(L,e)||i(this,P)&&this[P][e])||t)},X=function(e,t){if(e=m(e),t=_(t,!0),e!==N||!i(L,t)||i(z,t)){var r=A(e,t);return!r||!i(L,t)||i(e,P)&&e[P][t]||(r.enumerable=!0),r}},$=function(e){for(var t,r=I(m(e)),n=[],o=0;r.length>o;)i(L,t=r[o++])||t==P||t==s||n.push(t);return n},Z=function(e){for(var t,r=e===N,n=I(r?z:m(e)),o=[],a=0;n.length>a;)!i(L,t=n[a++])||r&&!i(N,t)||o.push(L[t]);return o};U||(j=function(){if(this instanceof j)throw TypeError("Symbol is not a constructor!");var e=d(arguments.length>0?arguments[0]:void 0),t=function(r){this===N&&t.call(z,r),i(this,P)&&i(this[P],e)&&(this[P][e]=!1),F(this,e,w(1,r))};return o&&K&&F(N,e,{configurable:!0,set:t}),H(e)},f(j.prototype,"toString",function(){return this._k}),E.f=X,k.f=Y,r(78).f=M.f=$,r(34).f=G,r(55).f=Z,o&&!r(45)&&f(N,"propertyIsEnumerable",G,!0),p.f=function(e){return H(l(e))}),a(a.G+a.W+a.F*!U,{Symbol:j});for(var Q="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ee=0;Q.length>ee;)l(Q[ee++]);for(var te=x(l.store),re=0;te.length>re;)b(te[re++]);a(a.S+a.F*!U,"Symbol",{for:function(e){return i(D,e+="")?D[e]:D[e]=j(e)},keyFor:function(e){if(!V(e))throw TypeError(e+" is not a symbol!");for(var t in D)if(D[t]===e)return t},useSetter:function(){K=!0},useSimple:function(){K=!1}}),a(a.S+a.F*!U,"Object",{create:J,defineProperty:Y,defineProperties:W,getOwnPropertyDescriptor:X,getOwnPropertyNames:$,getOwnPropertySymbols:Z}),R&&a(a.S+a.F*(!U||c(function(){var e=j();return"[null]"!=O([e])||"{}"!=O({a:e})||"{}"!=O(Object(e))})),"JSON",{stringify:function(e){if(void 0!==e&&!V(e)){for(var t,r,n=[e],i=1;arguments.length>i;)n.push(arguments[i++]);return t=n[1],"function"==typeof t&&(r=t),!r&&v(t)||(t=function(e,t){if(r&&(t=r.call(this,e,t)),!V(t))return t}),n[1]=t,O.apply(R,n)}}}),j.prototype[T]||r(14)(j.prototype,T,j.prototype.valueOf),h(j,"Symbol"),h(Math,"Math",!0),h(n.JSON,"JSON",!0)},function(e,t,r){var n=r(33)("meta"),i=r(30),o=r(11),a=r(15).f,f=0,s=Object.isExtensible||function(){return!0},c=!r(20)(function(){return s(Object.preventExtensions({}))}),u=function(e){a(e,n,{value:{i:"O"+ ++f,w:{}}})},h=function(e,t){if(!i(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,n)){if(!s(e))return"F";if(!t)return"E";u(e)}return e[n].i},d=function(e,t){if(!o(e,n)){if(!s(e))return!0;if(!t)return!1;u(e)}return e[n].w},l=function(e){return c&&p.NEED&&s(e)&&!o(e,n)&&u(e),e},p=e.exports={KEY:n,NEED:!1,fastKey:h,getWeak:d,onFreeze:l}},function(e,t,r){var n=r(32),i=r(55),o=r(34);e.exports=function(e){var t=n(e),r=i.f;if(r)for(var a,f=r(e),s=o.f,c=0;f.length>c;)s.call(e,a=f[c++])&&t.push(a);return t}},function(e,t,r){var n=r(76);e.exports=Array.isArray||function(e){return"Array"==n(e)}},function(e,t,r){var n=r(17),i=r(78).f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],f=function(e){try{return i(e)}catch(e){return a.slice()}};e.exports.f=function(e){return a&&"[object Window]"==o.call(e)?f(e):i(n(e))}},function(e,t,r){var n=r(34),i=r(31),o=r(17),a=r(47),f=r(11),s=r(70),c=Object.getOwnPropertyDescriptor;t.f=r(16)?c:function(e,t){if(e=o(e),t=a(t,!0),s)try{return c(e,t)}catch(e){}if(f(e,t))return i(!n.f.call(e,t),e[t])}},function(e,t){},function(e,t,r){r(54)("asyncIterator")},function(e,t,r){r(54)("observable")},function(e,t,r){e.exports={default:r(151),__esModule:!0}},function(e,t,r){r(152),e.exports=r(28).Object.assign},function(e,t,r){var n=r(46);n(n.S+n.F,"Object",{assign:r(153)})},function(e,t,r){"use strict";var n=r(32),i=r(55),o=r(34),a=r(77),f=r(75),s=Object.assign;e.exports=!s||r(20)(function(){var e={},t={},r=Symbol(),n="abcdefghijklmnopqrst";return e[r]=7,n.split("").forEach(function(e){t[e]=e}),7!=s({},e)[r]||Object.keys(s({},t)).join("")!=n})?function(e,t){for(var r=a(e),s=arguments.length,c=1,u=i.f,h=o.f;s>c;)for(var d,l=f(arguments[c++]),p=u?n(l).concat(u(l)):n(l),b=p.length,y=0;b>y;)h.call(l,d=p[y++])&&(r[d]=l[d]);return r}:s},function(e,t,r){"use strict";function n(){var e=new RegExp("(?:^|; )@key@=1(?:;|$)");document.cookie="@key@=1";var t=e.test(document.cookie);return t&&f("@key@"),t}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:decodeURIComponent;if("string"!=typeof e||!e)return null;var r=new RegExp("(?:^|; )"+(0,h.escapeRe)(e)+"(?:=([^;]*))?(?:;|$)"),n=r.exec(document.cookie);return null===n?null:"function"==typeof t?t(n[1]):n[1]}function o(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:decodeURIComponent,t=/(?:^|; )([^=]+?)(?:=([^;]*))?(?:;|$)/g,r={},n=void 0;n=t.exec(document.cookie);)t.lastIndex=n.index+n.length-1,r[n[1]]="function"==typeof e?e(n[2]):n[2];return r}function a(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:encodeURIComponent,n=arguments[3];"object"===(void 0===r?"undefined":u(r))&&null!==r&&(n=r,r=null);var i=(0,h.convert)(n||{}),o="function"==typeof r?r(t):t,a=e+"="+o+i;document.cookie=a}function f(e){return a(e,"a",{expires:-1})}function s(e){return i(e,null)}function c(e,t,r){return a(e,t,null,r)}t.__esModule=!0,t.removeCookie=t.setRawCookie=t.getRawCookie=t.setCookie=t.getAllCookies=t.getCookie=t.isCookieEnabled=t.remove=t.setRaw=t.getRaw=t.set=t.getAll=t.get=t.isEnabled=void 0;var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h=r(155);t.isEnabled=n,t.get=i,t.getAll=o,t.set=a,t.getRaw=s,t.setRaw=c,t.remove=f,t.isCookieEnabled=n,t.getCookie=i,t.getAllCookies=o,t.setCookie=a,t.getRawCookie=s,t.setRawCookie=c,t.removeCookie=f},function(e,t,r){"use strict";function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function i(e){return e.replace(/[.*+?^$|[\](){}\\-]/g,"\\$&")}function o(e){var t=e.charAt(e.length-1),r=parseInt(e,10),n=new Date;switch(t){case"Y":n.setFullYear(n.getFullYear()+r);break;case"M":n.setMonth(n.getMonth()+r);break;case"D":n.setDate(n.getDate()+r);break;case"h":n.setHours(n.getHours()+r);break;case"m":n.setMinutes(n.getMinutes()+r);break;case"s":n.setSeconds(n.getSeconds()+r);break;default:n=new Date(e)}return n}function a(e){var t="";for(var r in e)if(n(e,r))if(/^expires$/i.test(r)){var i=e[r];"object"!==(void 0===i?"undefined":f(i))&&(i+="number"==typeof i?"D":"",i=o(i)),t+=";"+r+"="+i.toUTCString()}else/^secure$/.test(r)?e[r]&&(t+=";"+r):t+=";"+r+"="+e[r];return n(e,"path")||(t+=";path=/"),t}t.__esModule=!0;var f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.hasOwn=n,t.escapeRe=i,t.computeExpires=o,t.convert=a},function(e,t,r){e.exports={decode:r(79),verify:r(255),sign:r(257),JsonWebTokenError:r(42),NotBeforeError:r(116),TokenExpiredError:r(117)}},function(e,t,r){function n(e,t,r){r=r||"utf8";var n=a(u(e),"binary"),i=a(u(t),r);return h.format("%s.%s",n,i)}function i(e){var t=e.header,r=e.payload,i=e.secret||e.privateKey,o=e.encoding,a=s(t.alg),f=n(t,r,o),c=a.sign(f,i);return h.format("%s.%s",f,c)}function o(e){var t=e.secret||e.privateKey||e.key,r=new f(t);this.readable=!0,this.header=e.header,this.encoding=e.encoding,this.secret=this.privateKey=this.key=r,this.payload=new f(e.payload),this.secret.once("close",function(){!this.payload.writable&&this.readable&&this.sign()}.bind(this)),this.payload.once("close",function(){!this.secret.writable&&this.readable&&this.sign()}.bind(this))}var a=r(35),f=r(81),s=r(86),c=r(12),u=r(115),h=r(37);h.inherits(o,c),o.prototype.sign=function(){try{var e=i({header:this.header,payload:this.payload.buffer,secret:this.secret.buffer,encoding:this.encoding});return this.emit("done",e),this.emit("data",e),this.emit("end"),this.readable=!1,e}catch(e){this.readable=!1,this.emit("error",e),this.emit("close")}},o.sign=i,e.exports=o},function(e,t,r){"use strict";(function(e){function n(t,r){return void 0===r&&(r="utf8"),a(e.isBuffer(t)?t.toString("base64"):new e(t,r).toString("base64"))}function i(t,r){return void 0===r&&(r="utf8"),new e(o(t),"base64").toString(r)}function o(e){return e=e.toString(),s.default(e).replace(/\-/g,"+").replace(/_/g,"/")}function a(e){return e.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function f(t){return new e(o(t),"base64")}var s=r(161),c=n;c.encode=n,c.decode=i,c.toBase64=o,c.fromBase64=a,c.toBuffer=f,Object.defineProperty(t,"__esModule",{value:!0}),t.default=c}).call(t,r(1).Buffer)},function(e,t,r){"use strict";function n(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");return"="===e[t-2]?2:"="===e[t-1]?1:0}function i(e){return 3*e.length/4-n(e)}function o(e){var t,r,i,o,a,f=e.length;o=n(e),a=new h(3*f/4-o),r=o>0?f-4:f;var s=0;for(t=0;t<r;t+=4)i=u[e.charCodeAt(t)]<<18|u[e.charCodeAt(t+1)]<<12|u[e.charCodeAt(t+2)]<<6|u[e.charCodeAt(t+3)],a[s++]=i>>16&255,a[s++]=i>>8&255,a[s++]=255&i;return 2===o?(i=u[e.charCodeAt(t)]<<2|u[e.charCodeAt(t+1)]>>4,a[s++]=255&i):1===o&&(i=u[e.charCodeAt(t)]<<10|u[e.charCodeAt(t+1)]<<4|u[e.charCodeAt(t+2)]>>2,a[s++]=i>>8&255,a[s++]=255&i),a}function a(e){return c[e>>18&63]+c[e>>12&63]+c[e>>6&63]+c[63&e]}function f(e,t,r){for(var n,i=[],o=t;o<r;o+=3)n=(e[o]<<16)+(e[o+1]<<8)+e[o+2],i.push(a(n));return i.join("")}function s(e){for(var t,r=e.length,n=r%3,i="",o=[],a=0,s=r-n;a<s;a+=16383)o.push(f(e,a,a+16383>s?s:a+16383));return 1===n?(t=e[r-1],i+=c[t>>2],i+=c[t<<4&63],i+="=="):2===n&&(t=(e[r-2]<<8)+e[r-1],i+=c[t>>10],i+=c[t>>4&63],i+=c[t<<2&63],i+="="),o.push(i),o.join("")}t.byteLength=i,t.toByteArray=o,t.fromByteArray=s;for(var c=[],u=[],h="undefined"!=typeof Uint8Array?Uint8Array:Array,d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=0,p=d.length;l<p;++l)c[l]=d[l],u[d.charCodeAt(l)]=l;u["-".charCodeAt(0)]=62,u["_".charCodeAt(0)]=63},function(e,t){t.read=function(e,t,r,n,i){var o,a,f=8*i-n-1,s=(1<<f)-1,c=s>>1,u=-7,h=r?i-1:0,d=r?-1:1,l=e[t+h];for(h+=d,o=l&(1<<-u)-1,l>>=-u,u+=f;u>0;o=256*o+e[t+h],h+=d,u-=8);for(a=o&(1<<-u)-1,o>>=-u,u+=n;u>0;a=256*a+e[t+h],h+=d,u-=8);if(0===o)o=1-c;else{if(o===s)return a?NaN:1/0*(l?-1:1);a+=Math.pow(2,n),o-=c}return(l?-1:1)*a*Math.pow(2,o-n)},t.write=function(e,t,r,n,i,o){var a,f,s,c=8*o-i-1,u=(1<<c)-1,h=u>>1,d=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,l=n?0:o-1,p=n?1:-1,b=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(f=isNaN(t)?1:0,a=u):(a=Math.floor(Math.log(t)/Math.LN2),t*(s=Math.pow(2,-a))<1&&(a--,s*=2),t+=a+h>=1?d/s:d*Math.pow(2,1-h),t*s>=2&&(a++,s/=2),a+h>=u?(f=0,a=u):a+h>=1?(f=(t*s-1)*Math.pow(2,i),a+=h):(f=t*Math.pow(2,h-1)*Math.pow(2,i),a=0));i>=8;e[r+l]=255&f,l+=p,f/=256,i-=8);for(a=a<<i|f,c+=i;c>0;e[r+l]=255&a,l+=p,a/=256,c-=8);e[r+l-p]|=128*b}},function(e,t,r){"use strict";(function(e){function r(t){var r=t.length,n=r%4;if(!n)return t;var i=r,o=4-n,a=r+o,f=new e(a);for(f.write(t);o--;)f.write("=",i++);return f.toString()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r}).call(t,r(1).Buffer)},function(e,t){},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t,r){e.copy(t,r)}var o=r(2).Buffer;e.exports=function(){function e(){n(this,e),this.head=null,this.tail=null,this.length=0}return e.prototype.push=function(e){var t={data:e,next:null};this.length>0?this.tail.next=t:this.head=t,this.tail=t,++this.length},e.prototype.unshift=function(e){var t={data:e,next:this.head};0===this.length&&(this.tail=t),this.head=t,++this.length},e.prototype.shift=function(){if(0!==this.length){var e=this.head.data;return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,e}},e.prototype.clear=function(){this.head=this.tail=null,this.length=0},e.prototype.join=function(e){if(0===this.length)return"";for(var t=this.head,r=""+t.data;t=t.next;)r+=e+t.data;return r},e.prototype.concat=function(e){if(0===this.length)return o.alloc(0);if(1===this.length)return this.head.data;for(var t=o.allocUnsafe(e>>>0),r=this.head,n=0;r;)i(r.data,t,n),n+=r.data.length,r=r.next;return t},e}()},function(e,t,r){function n(e,t){this._id=e,this._clearFn=t}var i=Function.prototype.apply;t.setTimeout=function(){return new n(i.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new n(i.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},n.prototype.unref=n.prototype.ref=function(){},n.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},r(165),t.setImmediate=setImmediate,t.clearImmediate=clearImmediate},function(e,t,r){(function(e,t){!function(e,r){"use strict";function n(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),r=0;r<t.length;r++)t[r]=arguments[r+1];var n={callback:e,args:t};return c[s]=n,f(s),s++}function i(e){delete c[e]}function o(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(r,n)}}function a(e){if(u)setTimeout(a,0,e);else{var t=c[e];if(t){u=!0;try{o(t)}finally{i(e),u=!1}}}}if(!e.setImmediate){var f,s=1,c={},u=!1,h=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?function(){f=function(e){t.nextTick(function(){a(e)})}}():function(){if(e.postMessage&&!e.importScripts){var t=!0,r=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=r,t}}()?function(){var t="setImmediate$"+Math.random()+"$",r=function(r){r.source===e&&"string"==typeof r.data&&0===r.data.indexOf(t)&&a(+r.data.slice(t.length))};e.addEventListener?e.addEventListener("message",r,!1):e.attachEvent("onmessage",r),f=function(r){e.postMessage(t+r,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){a(e.data)},f=function(t){e.port2.postMessage(t)}}():h&&"onreadystatechange"in h.createElement("script")?function(){var e=h.documentElement;f=function(t){var r=h.createElement("script");r.onreadystatechange=function(){a(t),r.onreadystatechange=null,e.removeChild(r),r=null},e.appendChild(r)}}():function(){f=function(e){setTimeout(a,0,e)}}(),d.setImmediate=n,d.clearImmediate=i}}("undefined"==typeof self?void 0===e?this:e:self)}).call(t,r(9),r(7))},function(e,t,r){(function(t){function r(e,t){function r(){if(!i){if(n("throwDeprecation"))throw new Error(t);n("traceDeprecation")?console.trace(t):console.warn(t),i=!0}return e.apply(this,arguments)}if(n("noDeprecation"))return e;var i=!1;return r}function n(e){try{if(!t.localStorage)return!1}catch(e){return!1}var r=t.localStorage[e];return null!=r&&"true"===String(r).toLowerCase()}e.exports=r}).call(t,r(9))},function(e,t,r){"use strict";function n(e){if(!(this instanceof n))return new n(e);i.call(this,e)}e.exports=n;var i=r(85),o=r(21);o.inherits=r(0),o.inherits(n,i),n.prototype._transform=function(e,t,r){r(null,e)}},function(e,t,r){e.exports=r(59)},function(e,t,r){e.exports=r(13)},function(e,t,r){e.exports=r(58).Transform},function(e,t,r){e.exports=r(58).PassThrough},function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}},function(e,t,r){"use strict";function n(e,t){if(!i.isBuffer(e)||!i.isBuffer(t))return!1;if(e.length!==t.length)return!1;for(var r=0,n=0;n<e.length;n++)r|=e[n]^t[n];return 0===r}var i=r(1).Buffer,o=r(1).SlowBuffer;e.exports=n,n.install=function(){i.prototype.equal=o.prototype.equal=function(e){return n(this,e)}};var a=i.prototype.equal,f=o.prototype.equal;n.restore=function(){i.prototype.equal=a,o.prototype.equal=f}},function(e,t,r){"use strict";t.randomBytes=t.rng=t.pseudoRandomBytes=t.prng=r(22),t.createHash=t.Hash=r(23),t.createHmac=t.Hmac=r(89);var n=r(183),i=Object.keys(n),o=["sha1","sha224","sha256","sha384","sha512","md5","rmd160"].concat(i);t.getHashes=function(){return o};var a=r(91);t.pbkdf2=a.pbkdf2,t.pbkdf2Sync=a.pbkdf2Sync;var f=r(185);t.Cipher=f.Cipher,t.createCipher=f.createCipher,t.Cipheriv=f.Cipheriv,t.createCipheriv=f.createCipheriv,t.Decipher=f.Decipher,t.createDecipher=f.createDecipher,t.Decipheriv=f.Decipheriv,t.createDecipheriv=f.createDecipheriv,t.getCiphers=f.getCiphers,t.listCiphers=f.listCiphers;var s=r(204);t.DiffieHellmanGroup=s.DiffieHellmanGroup,t.createDiffieHellmanGroup=s.createDiffieHellmanGroup,t.getDiffieHellman=s.getDiffieHellman,t.createDiffieHellman=s.createDiffieHellman,t.DiffieHellman=s.DiffieHellman;var c=r(210);t.createSign=c.createSign,t.Sign=c.Sign,t.createVerify=c.createVerify,t.Verify=c.Verify,t.createECDH=r(248);var u=r(249);t.publicEncrypt=u.publicEncrypt,t.privateEncrypt=u.privateEncrypt,t.publicDecrypt=u.publicDecrypt,t.privateDecrypt=u.privateDecrypt,t.createCredentials=function(){throw new Error(["sorry, createCredentials is not implemented yet","we accept pull requests","https://github.com/crypto-browserify/crypto-browserify"].join("\n"))},t.constants={DH_CHECK_P_NOT_SAFE_PRIME:2,DH_CHECK_P_NOT_PRIME:1,DH_UNABLE_TO_CHECK_GENERATOR:4,DH_NOT_SUITABLE_GENERATOR:8,NPN_ENABLED:1,ALPN_ENABLED:1,RSA_PKCS1_PADDING:1,RSA_SSLV23_PADDING:2,RSA_NO_PADDING:3,RSA_PKCS1_OAEP_PADDING:4,RSA_X931_PADDING:5,RSA_PKCS1_PSS_PADDING:6,POINT_CONVERSION_COMPRESSED:2,POINT_CONVERSION_UNCOMPRESSED:4,POINT_CONVERSION_HYBRID:6}},function(e,t,r){"use strict";(function(t){function r(e){if(e.length%n!=0){var r=e.length+(n-e.length%n);e=t.concat([e,i],r)}for(var o=new Array(e.length>>>2),a=0,f=0;a<e.length;a+=n,f++)o[f]=e.readInt32LE(a);return o}var n=4,i=new t(n);i.fill(0);e.exports=function(e,n){var i=n(r(e),8*e.length);e=new t(16);for(var o=0;o<i.length;o++)e.writeInt32LE(i[o],o<<2,!0);return e}}).call(t,r(1).Buffer)},function(e,t,r){"use strict";(function(t){function n(e){i.call(this),this._block=new t(e),this._blockSize=e,this._blockOffset=0,this._length=[0,0,0,0],this._finalized=!1}var i=r(12).Transform;r(0)(n,i),n.prototype._transform=function(e,r,n){var i=null;try{"buffer"!==r&&(e=new t(e,r)),this.update(e)}catch(e){i=e}n(i)},n.prototype._flush=function(e){var t=null;try{this.push(this._digest())}catch(e){t=e}e(t)},n.prototype.update=function(e,r){if(!t.isBuffer(e)&&"string"!=typeof e)throw new TypeError("Data must be a string or a buffer");if(this._finalized)throw new Error("Digest already called");t.isBuffer(e)||(e=new t(e,r||"binary"));for(var n=this._block,i=0;this._blockOffset+e.length-i>=this._blockSize;){for(var o=this._blockOffset;o<this._blockSize;)n[o++]=e[i++];this._update(),this._blockOffset=0}for(;i<e.length;)n[this._blockOffset++]=e[i++];for(var a=0,f=8*e.length;f>0;++a)this._length[a]+=f,(f=this._length[a]/4294967296|0)>0&&(this._length[a]-=4294967296*f);return this},n.prototype._update=function(e){throw new Error("_update is not implemented")},n.prototype.digest=function(e){if(this._finalized)throw new Error("Digest already called");this._finalized=!0;var t=this._digest();return void 0!==e&&(t=t.toString(e)),t},n.prototype._digest=function(){throw new Error("_digest is not implemented")},e.exports=n}).call(t,r(1).Buffer)},function(e,t,r){function n(){this.init(),this._w=h,s.call(this,64,56)}function i(e){return e<<5|e>>>27}function o(e){return e<<30|e>>>2}function a(e,t,r,n){return 0===e?t&r|~t&n:2===e?t&r|t&n|r&n:t^r^n}var f=r(0),s=r(19),c=r(2).Buffer,u=[1518500249,1859775393,-1894007588,-899497514],h=new Array(80);f(n,s),n.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},n.prototype._update=function(e){for(var t=this._w,r=0|this._a,n=0|this._b,f=0|this._c,s=0|this._d,c=0|this._e,h=0;h<16;++h)t[h]=e.readInt32BE(4*h);for(;h<80;++h)t[h]=t[h-3]^t[h-8]^t[h-14]^t[h-16];for(var d=0;d<80;++d){var l=~~(d/20),p=i(r)+a(l,n,f,s)+c+t[d]+u[l]|0;c=s,s=f,f=o(n),n=r,r=p}this._a=r+this._a|0,this._b=n+this._b|0,this._c=f+this._c|0,this._d=s+this._d|0,this._e=c+this._e|0},n.prototype._hash=function(){var e=c.allocUnsafe(20);return e.writeInt32BE(0|this._a,0),e.writeInt32BE(0|this._b,4),e.writeInt32BE(0|this._c,8),e.writeInt32BE(0|this._d,12),e.writeInt32BE(0|this._e,16),e},e.exports=n},function(e,t,r){function n(){this.init(),this._w=d,c.call(this,64,56)}function i(e){return e<<1|e>>>31}function o(e){return e<<5|e>>>27}function a(e){return e<<30|e>>>2}function f(e,t,r,n){return 0===e?t&r|~t&n:2===e?t&r|t&n|r&n:t^r^n}var s=r(0),c=r(19),u=r(2).Buffer,h=[1518500249,1859775393,-1894007588,-899497514],d=new Array(80);s(n,c),n.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},n.prototype._update=function(e){for(var t=this._w,r=0|this._a,n=0|this._b,s=0|this._c,c=0|this._d,u=0|this._e,d=0;d<16;++d)t[d]=e.readInt32BE(4*d);for(;d<80;++d)t[d]=i(t[d-3]^t[d-8]^t[d-14]^t[d-16]);for(var l=0;l<80;++l){var p=~~(l/20),b=o(r)+f(p,n,s,c)+u+t[l]+h[p]|0;u=c,c=s,s=a(n),n=r,r=b}this._a=r+this._a|0,this._b=n+this._b|0,this._c=s+this._c|0,this._d=c+this._d|0,this._e=u+this._e|0},n.prototype._hash=function(){var e=u.allocUnsafe(20);return e.writeInt32BE(0|this._a,0),e.writeInt32BE(0|this._b,4),e.writeInt32BE(0|this._c,8),e.writeInt32BE(0|this._d,12),e.writeInt32BE(0|this._e,16),e},e.exports=n},function(e,t,r){function n(){this.init(),this._w=s,a.call(this,64,56)}var i=r(0),o=r(87),a=r(19),f=r(2).Buffer,s=new Array(64);i(n,o),n.prototype.init=function(){return this._a=3238371032,this._b=914150663,this._c=812702999,this._d=4144912697,this._e=4290775857,this._f=1750603025,this._g=1694076839,this._h=3204075428,this},n.prototype._hash=function(){var e=f.allocUnsafe(28);return e.writeInt32BE(this._a,0),e.writeInt32BE(this._b,4),e.writeInt32BE(this._c,8),e.writeInt32BE(this._d,12),e.writeInt32BE(this._e,16),e.writeInt32BE(this._f,20),e.writeInt32BE(this._g,24),e},e.exports=n},function(e,t,r){function n(){this.init(),this._w=s,a.call(this,128,112)}var i=r(0),o=r(88),a=r(19),f=r(2).Buffer,s=new Array(160);i(n,o),n.prototype.init=function(){return this._ah=3418070365,this._bh=1654270250,this._ch=2438529370,this._dh=355462360,this._eh=1731405415,this._fh=2394180231,this._gh=3675008525,this._hh=1203062813,this._al=3238371032,this._bl=914150663,this._cl=812702999,this._dl=4144912697,this._el=4290775857,this._fl=1750603025,this._gl=1694076839,this._hl=3204075428,this},n.prototype._hash=function(){function e(e,r,n){t.writeInt32BE(e,n),t.writeInt32BE(r,n+4)}var t=f.allocUnsafe(48);return e(this._ah,this._al,0),e(this._bh,this._bl,8),e(this._ch,this._cl,16),e(this._dh,this._dl,24),e(this._eh,this._el,32),e(this._fh,this._fl,40),t},e.exports=n},function(e,t,r){"use strict";function n(e,t){a.call(this,"digest"),"string"==typeof t&&(t=o.from(t)),this._alg=e,this._key=t,t.length>s?t=e(t):t.length<s&&(t=o.concat([t,f],s));for(var r=this._ipad=o.allocUnsafe(s),n=this._opad=o.allocUnsafe(s),i=0;i<s;i++)r[i]=54^t[i],n[i]=92^t[i];this._hash=[r]}var i=r(0),o=r(2).Buffer,a=r(10),f=o.alloc(128),s=64;i(n,a),n.prototype._update=function(e){this._hash.push(e)},n.prototype._final=function(){var e=this._alg(o.concat(this._hash));return this._alg(o.concat([this._opad,e]))},e.exports=n},function(e,t,r){e.exports=r(90)},function(e,t,r){(function(t,n){function i(e){if(t.process&&!t.process.browser)return Promise.resolve(!1);if(!d||!d.importKey||!d.deriveBits)return Promise.resolve(!1);if(void 0!==p[e])return p[e];f=f||h.alloc(8);var r=o(f,f,10,128,e).then(function(){return!0}).catch(function(){return!1});return p[e]=r,r}function o(e,t,r,n,i){return d.importKey("raw",e,{name:"PBKDF2"},!1,["deriveBits"]).then(function(e){return d.deriveBits({name:"PBKDF2",salt:t,iterations:r,hash:{name:i}},e,n<<3)}).then(function(e){return h.from(e)})}function a(e,t){e.then(function(e){n.nextTick(function(){t(null,e)})},function(e){n.nextTick(function(){t(e)})})}var f,s=r(92),c=r(93),u=r(94),h=r(2).Buffer,d=t.crypto&&t.crypto.subtle,l={sha:"SHA-1","sha-1":"SHA-1",sha1:"SHA-1",sha256:"SHA-256","sha-256":"SHA-256",sha384:"SHA-384","sha-384":"SHA-384","sha-512":"SHA-512",sha512:"SHA-512"},p=[];e.exports=function(e,r,f,d,p,b){if(h.isBuffer(e)||(e=h.from(e,c)),h.isBuffer(r)||(r=h.from(r,c)),s(f,d),"function"==typeof p&&(b=p,p=void 0),"function"!=typeof b)throw new Error("No callback provided to pbkdf2");p=p||"sha1";var y=l[p.toLowerCase()];if(!y||"function"!=typeof t.Promise)return n.nextTick(function(){var t;try{t=u(e,r,f,d,p)}catch(e){return b(e)}b(null,t)});a(i(y).then(function(t){return t?o(e,r,f,d,y):u(e,r,f,d,p)}),b)}}).call(t,r(9),r(7))},function(e,t,r){function n(e,t){var r,n;if(e=e.toLowerCase(),d[e])r=d[e].key,n=d[e].iv;else{if(!h[e])throw new TypeError("invalid suite type");r=8*h[e].key,n=h[e].iv}var i=s(t,!1,r,n);return o(e,i.key,i.iv)}function i(e,t){var r,n;if(e=e.toLowerCase(),d[e])r=d[e].key,n=d[e].iv;else{if(!h[e])throw new TypeError("invalid suite type");r=8*h[e].key,n=h[e].iv}var i=s(t,!1,r,n);return a(e,i.key,i.iv)}function o(e,t,r){if(e=e.toLowerCase(),d[e])return c.createCipheriv(e,t,r);if(h[e])return new u({key:t,iv:r,mode:e});throw new TypeError("invalid suite type")}function a(e,t,r){if(e=e.toLowerCase(),d[e])return c.createDecipheriv(e,t,r);if(h[e])return new u({key:t,iv:r,mode:e,decrypt:!0});throw new TypeError("invalid suite type")}function f(){return Object.keys(h).concat(c.getCiphers())}var s=r(38),c=r(64),u=r(197),h=r(203),d=r(65);t.createCipher=t.Cipher=n,t.createCipheriv=t.Cipheriv=o,t.createDecipher=t.Decipher=i,t.createDecipheriv=t.Decipheriv=a,t.listCiphers=t.getCiphers=f},function(e,t,r){"use strict";(function(t){function n(){u.call(this,64),this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878}function i(e,t){return e<<t|e>>>32-t}function o(e,t,r,n,o,a,f){return i(e+(t&r|~t&n)+o+a|0,f)+t|0}function a(e,t,r,n,o,a,f){return i(e+(t&n|r&~n)+o+a|0,f)+t|0}function f(e,t,r,n,o,a,f){return i(e+(t^r^n)+o+a|0,f)+t|0}function s(e,t,r,n,o,a,f){return i(e+(r^(t|~n))+o+a|0,f)+t|0}var c=r(0),u=r(187),h=new Array(16);c(n,u),n.prototype._update=function(){for(var e=h,t=0;t<16;++t)e[t]=this._block.readInt32LE(4*t);var r=this._a,n=this._b,i=this._c,c=this._d;r=o(r,n,i,c,e[0],3614090360,7),c=o(c,r,n,i,e[1],3905402710,12),i=o(i,c,r,n,e[2],606105819,17),n=o(n,i,c,r,e[3],3250441966,22),r=o(r,n,i,c,e[4],4118548399,7),c=o(c,r,n,i,e[5],1200080426,12),i=o(i,c,r,n,e[6],2821735955,17),n=o(n,i,c,r,e[7],4249261313,22),r=o(r,n,i,c,e[8],1770035416,7),c=o(c,r,n,i,e[9],2336552879,12),i=o(i,c,r,n,e[10],4294925233,17),n=o(n,i,c,r,e[11],2304563134,22),r=o(r,n,i,c,e[12],1804603682,7),c=o(c,r,n,i,e[13],4254626195,12),i=o(i,c,r,n,e[14],2792965006,17),n=o(n,i,c,r,e[15],1236535329,22),r=a(r,n,i,c,e[1],4129170786,5),c=a(c,r,n,i,e[6],3225465664,9),i=a(i,c,r,n,e[11],643717713,14),n=a(n,i,c,r,e[0],3921069994,20),r=a(r,n,i,c,e[5],3593408605,5),c=a(c,r,n,i,e[10],38016083,9),i=a(i,c,r,n,e[15],3634488961,14),n=a(n,i,c,r,e[4],3889429448,20),r=a(r,n,i,c,e[9],568446438,5),c=a(c,r,n,i,e[14],3275163606,9),i=a(i,c,r,n,e[3],4107603335,14),n=a(n,i,c,r,e[8],1163531501,20),r=a(r,n,i,c,e[13],2850285829,5),c=a(c,r,n,i,e[2],4243563512,9),i=a(i,c,r,n,e[7],1735328473,14),n=a(n,i,c,r,e[12],2368359562,20),r=f(r,n,i,c,e[5],4294588738,4),c=f(c,r,n,i,e[8],2272392833,11),i=f(i,c,r,n,e[11],1839030562,16),n=f(n,i,c,r,e[14],4259657740,23),r=f(r,n,i,c,e[1],2763975236,4),c=f(c,r,n,i,e[4],1272893353,11),i=f(i,c,r,n,e[7],4139469664,16),n=f(n,i,c,r,e[10],3200236656,23),r=f(r,n,i,c,e[13],681279174,4),c=f(c,r,n,i,e[0],3936430074,11),i=f(i,c,r,n,e[3],3572445317,16),n=f(n,i,c,r,e[6],76029189,23),r=f(r,n,i,c,e[9],3654602809,4),c=f(c,r,n,i,e[12],3873151461,11),i=f(i,c,r,n,e[15],530742520,16),n=f(n,i,c,r,e[2],3299628645,23),r=s(r,n,i,c,e[0],4096336452,6),c=s(c,r,n,i,e[7],1126891415,10),i=s(i,c,r,n,e[14],2878612391,15),n=s(n,i,c,r,e[5],4237533241,21),r=s(r,n,i,c,e[12],1700485571,6),c=s(c,r,n,i,e[3],2399980690,10),i=s(i,c,r,n,e[10],4293915773,15),n=s(n,i,c,r,e[1],2240044497,21),r=s(r,n,i,c,e[8],1873313359,6),c=s(c,r,n,i,e[15],4264355552,10),i=s(i,c,r,n,e[6],2734768916,15),n=s(n,i,c,r,e[13],1309151649,21),r=s(r,n,i,c,e[4],4149444226,6),c=s(c,r,n,i,e[11],3174756917,10),i=s(i,c,r,n,e[2],718787259,15),n=s(n,i,c,r,e[9],3951481745,21),this._a=this._a+r|0,this._b=this._b+n|0,this._c=this._c+i|0,this._d=this._d+c|0},n.prototype._digest=function(){this._block[this._blockOffset++]=128,this._blockOffset>56&&(this._block.fill(0,this._blockOffset,64),this._update(),this._blockOffset=0),this._block.fill(0,this._blockOffset,56),this._block.writeUInt32LE(this._length[0],56),this._block.writeUInt32LE(this._length[1],60),this._update();var e=new t(16);return e.writeInt32LE(this._a,0),e.writeInt32LE(this._b,4),e.writeInt32LE(this._c,8),e.writeInt32LE(this._d,12),e},e.exports=n}).call(t,r(1).Buffer)},function(e,t,r){"use strict";function n(e,t){if(!o.isBuffer(e)&&"string"!=typeof e)throw new TypeError(t+" must be a string or a buffer")}function i(e){a.call(this),this._block=o.allocUnsafe(e),this._blockSize=e,this._blockOffset=0,this._length=[0,0,0,0],this._finalized=!1}var o=r(2).Buffer,a=r(12).Transform;r(0)(i,a),i.prototype._transform=function(e,t,r){var n=null;try{this.update(e,t)}catch(e){n=e}r(n)},i.prototype._flush=function(e){var t=null;try{this.push(this.digest())}catch(e){t=e}e(t)},i.prototype.update=function(e,t){if(n(e,"Data"),this._finalized)throw new Error("Digest already called");o.isBuffer(e)||(e=o.from(e,t));for(var r=this._block,i=0;this._blockOffset+e.length-i>=this._blockSize;){for(var a=this._blockOffset;a<this._blockSize;)r[a++]=e[i++];this._update(),this._blockOffset=0}for(;i<e.length;)r[this._blockOffset++]=e[i++];for(var f=0,s=8*e.length;s>0;++f)this._length[f]+=s,(s=this._length[f]/4294967296|0)>0&&(this._length[f]-=4294967296*s);return this},i.prototype._update=function(){throw new Error("_update is not implemented")},i.prototype.digest=function(e){if(this._finalized)throw new Error("Digest already called");this._finalized=!0;var t=this._digest();void 0!==e&&(t=t.toString(e)),this._block.fill(0),this._blockOffset=0;for(var r=0;r<4;++r)this._length[r]=0;return t},i.prototype._digest=function(){throw new Error("_digest is not implemented")},e.exports=i},function(e,t,r){function n(e,t,r){h.call(this),this._cache=new i,this._cipher=new d.AES(t),this._prev=c.from(r),this._mode=e,this._autopadding=!0}function i(){this.cache=c.allocUnsafe(0)}function o(e,t,r){var i=f[e.toLowerCase()];if(!i)throw new TypeError("invalid suite type");if("string"==typeof t&&(t=c.from(t)),t.length!==i.key/8)throw new TypeError("invalid key length "+t.length);if("string"==typeof r&&(r=c.from(r)),"GCM"!==i.mode&&r.length!==i.iv)throw new TypeError("invalid iv length "+r.length);return"stream"===i.type?new u(i.module,t,r):"auth"===i.type?new s(i.module,t,r):new n(i.module,t,r)}function a(e,t){var r=f[e.toLowerCase()];if(!r)throw new TypeError("invalid suite type");var n=l(t,!1,r.key,r.iv);return o(e,n.key,n.iv)}var f=r(65),s=r(98),c=r(2).Buffer,u=r(99),h=r(10),d=r(39),l=r(38);r(0)(n,h),n.prototype._update=function(e){this._cache.add(e);for(var t,r,n=[];t=this._cache.get();)r=this._mode.encrypt(this,t),n.push(r);return c.concat(n)};var p=c.alloc(16,16);n.prototype._final=function(){var e=this._cache.flush();if(this._autopadding)return e=this._mode.encrypt(this,e),this._cipher.scrub(),e;if(!e.equals(p))throw this._cipher.scrub(),new Error("data not multiple of block length")},n.prototype.setAutoPadding=function(e){return this._autopadding=!!e,this},i.prototype.add=function(e){this.cache=c.concat([this.cache,e])},i.prototype.get=function(){if(this.cache.length>15){var e=this.cache.slice(0,16);return this.cache=this.cache.slice(16),e}return null},i.prototype.flush=function(){for(var e=16-this.cache.length,t=c.allocUnsafe(e),r=-1;++r<e;)t.writeUInt8(e,r);return c.concat([this.cache,t])},t.createCipheriv=o,t.createCipher=a},function(e,t){t.encrypt=function(e,t){return e._cipher.encryptBlock(t)},t.decrypt=function(e,t){return e._cipher.decryptBlock(t)}},function(e,t,r){var n=r(24);t.encrypt=function(e,t){var r=n(t,e._prev);return e._prev=e._cipher.encryptBlock(r),e._prev},t.decrypt=function(e,t){var r=e._prev;e._prev=t;var i=e._cipher.decryptBlock(t);return n(i,r)}},function(e,t,r){function n(e,t,r){var n=t.length,a=o(t,e._cache);return e._cache=e._cache.slice(n),e._prev=i.concat([e._prev,r?t:a]),a}var i=r(2).Buffer,o=r(24);t.encrypt=function(e,t,r){for(var o,a=i.allocUnsafe(0);t.length;){if(0===e._cache.length&&(e._cache=e._cipher.encryptBlock(e._prev),e._prev=i.allocUnsafe(0)),!(e._cache.length<=t.length)){a=i.concat([a,n(e,t,r)]);break}o=e._cache.length,a=i.concat([a,n(e,t.slice(0,o),r)]),t=t.slice(o)}return a}},function(e,t,r){function n(e,t,r){var n=e._cipher.encryptBlock(e._prev),o=n[0]^t;return e._prev=i.concat([e._prev.slice(1),i.from([r?t:o])]),o}var i=r(2).Buffer;t.encrypt=function(e,t,r){for(var o=t.length,a=i.allocUnsafe(o),f=-1;++f<o;)a[f]=n(e,t[f],r);return a}},function(e,t,r){function n(e,t,r){for(var n,o,a,f=-1,s=0;++f<8;)n=e._cipher.encryptBlock(e._prev),o=t&1<<7-f?128:0,a=n[0]^o,s+=(128&a)>>f%8,e._prev=i(e._prev,r?o:a);return s}function i(e,t){var r=e.length,n=-1,i=o.allocUnsafe(e.length);for(e=o.concat([e,o.from([t])]);++n<r;)i[n]=e[n]<<1|e[n+1]>>7;return i}var o=r(2).Buffer;t.encrypt=function(e,t,r){for(var i=t.length,a=o.allocUnsafe(i),f=-1;++f<i;)a[f]=n(e,t[f],r);return a}},function(e,t,r){(function(e){function n(e){return e._prev=e._cipher.encryptBlock(e._prev),e._prev}var i=r(24);t.encrypt=function(t,r){for(;t._cache.length<r.length;)t._cache=e.concat([t._cache,n(t)]);var o=t._cache.slice(0,r.length);return t._cache=t._cache.slice(r.length),i(r,o)}}).call(t,r(1).Buffer)},function(e,t,r){function n(e){return[e.readUInt32BE(0),e.readUInt32BE(4),e.readUInt32BE(8),e.readUInt32BE(12)]}function i(e){var t=a.allocUnsafe(16);return t.writeUInt32BE(e[0]>>>0,0),t.writeUInt32BE(e[1]>>>0,4),t.writeUInt32BE(e[2]>>>0,8),t.writeUInt32BE(e[3]>>>0,12),t}function o(e){this.h=e,this.state=a.alloc(16,0),this.cache=a.allocUnsafe(0)}var a=r(2).Buffer,f=a.alloc(16,0);o.prototype.ghash=function(e){for(var t=-1;++t<e.length;)this.state[t]^=e[t];this._multiply()},o.prototype._multiply=function(){for(var e,t,r,o=n(this.h),a=[0,0,0,0],f=-1;++f<128;){for(t=0!=(this.state[~~(f/8)]&1<<7-f%8),t&&(a[0]^=o[0],a[1]^=o[1],a[2]^=o[2],a[3]^=o[3]),r=0!=(1&o[3]),e=3;e>0;e--)o[e]=o[e]>>>1|(1&o[e-1])<<31;o[0]=o[0]>>>1,r&&(o[0]=o[0]^225<<24)}this.state=i(a)},o.prototype.update=function(e){this.cache=a.concat([this.cache,e]);for(var t;this.cache.length>=16;)t=this.cache.slice(0,16),this.cache=this.cache.slice(16),this.ghash(t)},o.prototype.final=function(e,t){return this.cache.length&&this.ghash(a.concat([this.cache,f],16)),this.ghash(i([0,e,0,t])),this.state},e.exports=o},function(e,t,r){function n(e,t,r){d.call(this),this._cache=new i,this._last=void 0,this._cipher=new l.AES(t),this._prev=c.from(r),this._mode=e,this._autopadding=!0}function i(){this.cache=c.allocUnsafe(0)}function o(e){for(var t=e[15],r=-1;++r<t;)if(e[r+(16-t)]!==t)throw new Error("unable to decrypt data");if(16!==t)return e.slice(0,16-t)}function a(e,t,r){var i=u[e.toLowerCase()];if(!i)throw new TypeError("invalid suite type");if("string"==typeof r&&(r=c.from(r)),"GCM"!==i.mode&&r.length!==i.iv)throw new TypeError("invalid iv length "+r.length);if("string"==typeof t&&(t=c.from(t)),t.length!==i.key/8)throw new TypeError("invalid key length "+t.length);return"stream"===i.type?new h(i.module,t,r,!0):"auth"===i.type?new s(i.module,t,r,!0):new n(i.module,t,r)}function f(e,t){var r=u[e.toLowerCase()];if(!r)throw new TypeError("invalid suite type");var n=p(t,!1,r.key,r.iv);return a(e,n.key,n.iv)}var s=r(98),c=r(2).Buffer,u=r(65),h=r(99),d=r(10),l=r(39),p=r(38);r(0)(n,d),n.prototype._update=function(e){this._cache.add(e);for(var t,r,n=[];t=this._cache.get(this._autopadding);)r=this._mode.decrypt(this,t),n.push(r);return c.concat(n)},n.prototype._final=function(){var e=this._cache.flush();if(this._autopadding)return o(this._mode.decrypt(this,e));if(e)throw new Error("data not multiple of block length")},n.prototype.setAutoPadding=function(e){return this._autopadding=!!e,this},i.prototype.add=function(e){this.cache=c.concat([this.cache,e])},i.prototype.get=function(e){var t;if(e){if(this.cache.length>16)return t=this.cache.slice(0,16),this.cache=this.cache.slice(16),t}else if(this.cache.length>=16)return t=this.cache.slice(0,16),this.cache=this.cache.slice(16),t;return null},i.prototype.flush=function(){if(this.cache.length)return this.cache},t.createDecipher=f,t.createDecipheriv=a},function(e,t,r){(function(t){function n(e){i.call(this);var r,n=e.mode.toLowerCase(),o=f[n];r=e.decrypt?"decrypt":"encrypt";var a=e.key;"des-ede"!==n&&"des-ede-cbc"!==n||(a=t.concat([a,a.slice(0,8)]));var s=e.iv;this._des=o.create({key:a,iv:s,type:r})}var i=r(10),o=r(66),a=r(0),f={"des-ede3-cbc":o.CBC.instantiate(o.EDE),"des-ede3":o.EDE,"des-ede-cbc":o.CBC.instantiate(o.EDE),"des-ede":o.EDE,"des-cbc":o.CBC.instantiate(o.DES),"des-ecb":o.DES};f.des=f["des-cbc"],f.des3=f["des-ede3-cbc"],e.exports=n,a(n,i),n.prototype._update=function(e){return new t(this._des.update(e))},n.prototype._final=function(){return new t(this._des.final())}}).call(t,r(1).Buffer)},function(e,t,r){"use strict";t.readUInt32BE=function(e,t){return(e[0+t]<<24|e[1+t]<<16|e[2+t]<<8|e[3+t])>>>0},t.writeUInt32BE=function(e,t,r){e[0+r]=t>>>24,e[1+r]=t>>>16&255,e[2+r]=t>>>8&255,e[3+r]=255&t},t.ip=function(e,t,r,n){for(var i=0,o=0,a=6;a>=0;a-=2){for(var f=0;f<=24;f+=8)i<<=1,i|=t>>>f+a&1;for(var f=0;f<=24;f+=8)i<<=1,i|=e>>>f+a&1}for(var a=6;a>=0;a-=2){for(var f=1;f<=25;f+=8)o<<=1,o|=t>>>f+a&1;for(var f=1;f<=25;f+=8)o<<=1,o|=e>>>f+a&1}r[n+0]=i>>>0,r[n+1]=o>>>0},t.rip=function(e,t,r,n){for(var i=0,o=0,a=0;a<4;a++)for(var f=24;f>=0;f-=8)i<<=1,i|=t>>>f+a&1,i<<=1,i|=e>>>f+a&1;for(var a=4;a<8;a++)for(var f=24;f>=0;f-=8)o<<=1,o|=t>>>f+a&1,o<<=1,o|=e>>>f+a&1;r[n+0]=i>>>0,r[n+1]=o>>>0},t.pc1=function(e,t,r,n){for(var i=0,o=0,a=7;a>=5;a--){for(var f=0;f<=24;f+=8)i<<=1,i|=t>>f+a&1;for(var f=0;f<=24;f+=8)i<<=1,i|=e>>f+a&1}for(var f=0;f<=24;f+=8)i<<=1,i|=t>>f+a&1;for(var a=1;a<=3;a++){for(var f=0;f<=24;f+=8)o<<=1,o|=t>>f+a&1;for(var f=0;f<=24;f+=8)o<<=1,o|=e>>f+a&1}for(var f=0;f<=24;f+=8)o<<=1,o|=e>>f+a&1;r[n+0]=i>>>0,r[n+1]=o>>>0},t.r28shl=function(e,t){return e<<t&268435455|e>>>28-t};var n=[14,11,17,4,27,23,25,0,13,22,7,18,5,9,16,24,2,20,12,21,1,8,15,26,15,4,25,19,9,1,26,16,5,11,23,8,12,7,17,0,22,3,10,14,6,20,27,24];t.pc2=function(e,t,r,i){for(var o=0,a=0,f=n.length>>>1,s=0;s<f;s++)o<<=1,o|=e>>>n[s]&1;for(var s=f;s<n.length;s++)a<<=1,a|=t>>>n[s]&1;r[i+0]=o>>>0,r[i+1]=a>>>0},t.expand=function(e,t,r){var n=0,i=0;n=(1&e)<<5|e>>>27;for(var o=23;o>=15;o-=4)n<<=6,n|=e>>>o&63;for(var o=11;o>=3;o-=4)i|=e>>>o&63,i<<=6;i|=(31&e)<<1|e>>>31,t[r+0]=n>>>0,t[r+1]=i>>>0};var i=[14,0,4,15,13,7,1,4,2,14,15,2,11,13,8,1,3,10,10,6,6,12,12,11,5,9,9,5,0,3,7,8,4,15,1,12,14,8,8,2,13,4,6,9,2,1,11,7,15,5,12,11,9,3,7,14,3,10,10,0,5,6,0,13,15,3,1,13,8,4,14,7,6,15,11,2,3,8,4,14,9,12,7,0,2,1,13,10,12,6,0,9,5,11,10,5,0,13,14,8,7,10,11,1,10,3,4,15,13,4,1,2,5,11,8,6,12,7,6,12,9,0,3,5,2,14,15,9,10,13,0,7,9,0,14,9,6,3,3,4,15,6,5,10,1,2,13,8,12,5,7,14,11,12,4,11,2,15,8,1,13,1,6,10,4,13,9,0,8,6,15,9,3,8,0,7,11,4,1,15,2,14,12,3,5,11,10,5,14,2,7,12,7,13,13,8,14,11,3,5,0,6,6,15,9,0,10,3,1,4,2,7,8,2,5,12,11,1,12,10,4,14,15,9,10,3,6,15,9,0,0,6,12,10,11,1,7,13,13,8,15,9,1,4,3,5,14,11,5,12,2,7,8,2,4,14,2,14,12,11,4,2,1,12,7,4,10,7,11,13,6,1,8,5,5,0,3,15,15,10,13,3,0,9,14,8,9,6,4,11,2,8,1,12,11,7,10,1,13,14,7,2,8,13,15,6,9,15,12,0,5,9,6,10,3,4,0,5,14,3,12,10,1,15,10,4,15,2,9,7,2,12,6,9,8,5,0,6,13,1,3,13,4,14,14,0,7,11,5,3,11,8,9,4,14,3,15,2,5,12,2,9,8,5,12,15,3,10,7,11,0,14,4,1,10,7,1,6,13,0,11,8,6,13,4,13,11,0,2,11,14,7,15,4,0,9,8,1,13,10,3,14,12,3,9,5,7,12,5,2,10,15,6,8,1,6,1,6,4,11,11,13,13,8,12,1,3,4,7,10,14,7,10,9,15,5,6,0,8,15,0,14,5,2,9,3,2,12,13,1,2,15,8,13,4,8,6,10,15,3,11,7,1,4,10,12,9,5,3,6,14,11,5,0,0,14,12,9,7,2,7,2,11,1,4,14,1,7,9,4,12,10,14,8,2,13,0,15,6,12,10,9,13,0,15,3,3,5,5,6,8,11];t.substitute=function(e,t){for(var r=0,n=0;n<4;n++){var o=e>>>18-6*n&63,a=i[64*n+o];r<<=4,r|=a}for(var n=0;n<4;n++){var o=t>>>18-6*n&63,a=i[256+64*n+o];r<<=4,r|=a}return r>>>0};var o=[16,25,12,11,3,20,4,15,31,17,9,6,27,14,1,22,30,24,8,18,0,5,29,23,13,19,2,26,10,21,28,7];t.permute=function(e){for(var t=0,r=0;r<o.length;r++)t<<=1,t|=e>>>o[r]&1;return t>>>0},t.padSplit=function(e,t,r){for(var n=e.toString(2);n.length<t;)n="0"+n;for(var i=[],o=0;o<t;o+=r)i.push(n.slice(o,o+r));return i.join(" ")}},function(e,t,r){"use strict";function n(e){this.options=e,this.type=this.options.type,this.blockSize=8,this._init(),this.buffer=new Array(this.blockSize),this.bufferOff=0}var i=r(5);e.exports=n,n.prototype._init=function(){},n.prototype.update=function(e){return 0===e.length?[]:"decrypt"===this.type?this._updateDecrypt(e):this._updateEncrypt(e)},n.prototype._buffer=function(e,t){for(var r=Math.min(this.buffer.length-this.bufferOff,e.length-t),n=0;n<r;n++)this.buffer[this.bufferOff+n]=e[t+n];return this.bufferOff+=r,r},n.prototype._flushBuffer=function(e,t){return this._update(this.buffer,0,e,t),this.bufferOff=0,this.blockSize},n.prototype._updateEncrypt=function(e){var t=0,r=0,n=(this.bufferOff+e.length)/this.blockSize|0,i=new Array(n*this.blockSize);0!==this.bufferOff&&(t+=this._buffer(e,t),this.bufferOff===this.buffer.length&&(r+=this._flushBuffer(i,r)));for(var o=e.length-(e.length-t)%this.blockSize;t<o;t+=this.blockSize)this._update(e,t,i,r),r+=this.blockSize;for(;t<e.length;t++,this.bufferOff++)this.buffer[this.bufferOff]=e[t];return i},n.prototype._updateDecrypt=function(e){for(var t=0,r=0,n=Math.ceil((this.bufferOff+e.length)/this.blockSize)-1,i=new Array(n*this.blockSize);n>0;n--)t+=this._buffer(e,t),r+=this._flushBuffer(i,r);return t+=this._buffer(e,t),i},n.prototype.final=function(e){var t;e&&(t=this.update(e));var r;return r="encrypt"===this.type?this._finalEncrypt():this._finalDecrypt(),t?t.concat(r):r},n.prototype._pad=function(e,t){if(0===t)return!1;for(;t<e.length;)e[t++]=0;return!0},n.prototype._finalEncrypt=function(){if(!this._pad(this.buffer,this.bufferOff))return[];var e=new Array(this.blockSize);return this._update(this.buffer,0,e,0),e},n.prototype._unpad=function(e){return e},n.prototype._finalDecrypt=function(){i.equal(this.bufferOff,this.blockSize,"Not enough data to decrypt");var e=new Array(this.blockSize);return this._flushBuffer(e,0),this._unpad(e)}},function(e,t,r){"use strict";function n(){this.tmp=new Array(2),this.keys=null}function i(e){c.call(this,e);var t=new n;this._desState=t,this.deriveKeys(t,e.key)}var o=r(5),a=r(0),f=r(66),s=f.utils,c=f.Cipher;a(i,c),e.exports=i,i.create=function(e){return new i(e)};var u=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1];i.prototype.deriveKeys=function(e,t){e.keys=new Array(32),o.equal(t.length,this.blockSize,"Invalid key length");var r=s.readUInt32BE(t,0),n=s.readUInt32BE(t,4);s.pc1(r,n,e.tmp,0),r=e.tmp[0],n=e.tmp[1];for(var i=0;i<e.keys.length;i+=2){var a=u[i>>>1];r=s.r28shl(r,a),n=s.r28shl(n,a),s.pc2(r,n,e.keys,i)}},i.prototype._update=function(e,t,r,n){var i=this._desState,o=s.readUInt32BE(e,t),a=s.readUInt32BE(e,t+4);s.ip(o,a,i.tmp,0),o=i.tmp[0],a=i.tmp[1],"encrypt"===this.type?this._encrypt(i,o,a,i.tmp,0):this._decrypt(i,o,a,i.tmp,0),o=i.tmp[0],a=i.tmp[1],s.writeUInt32BE(r,o,n),s.writeUInt32BE(r,a,n+4)},i.prototype._pad=function(e,t){for(var r=e.length-t,n=t;n<e.length;n++)e[n]=r;return!0},i.prototype._unpad=function(e){for(var t=e[e.length-1],r=e.length-t;r<e.length;r++)o.equal(e[r],t);return e.slice(0,e.length-t)},i.prototype._encrypt=function(e,t,r,n,i){for(var o=t,a=r,f=0;f<e.keys.length;f+=2){var c=e.keys[f],u=e.keys[f+1];s.expand(a,e.tmp,0),c^=e.tmp[0],u^=e.tmp[1];var h=s.substitute(c,u),d=s.permute(h),l=a;a=(o^d)>>>0,o=l}s.rip(a,o,n,i)},i.prototype._decrypt=function(e,t,r,n,i){for(var o=r,a=t,f=e.keys.length-2;f>=0;f-=2){var c=e.keys[f],u=e.keys[f+1];s.expand(o,e.tmp,0),c^=e.tmp[0],u^=e.tmp[1];var h=s.substitute(c,u),d=s.permute(h),l=o;o=(a^d)>>>0,a=l}s.rip(o,a,n,i)}},function(e,t,r){"use strict";function n(e){o.equal(e.length,8,"Invalid IV length"),this.iv=new Array(8);for(var t=0;t<this.iv.length;t++)this.iv[t]=e[t]}function i(e){function t(t){e.call(this,t),this._cbcInit()}a(t,e);for(var r=Object.keys(f),n=0;n<r.length;n++){var i=r[n];t.prototype[i]=f[i]}return t.create=function(e){return new t(e)},t}var o=r(5),a=r(0),f={};t.instantiate=i,f._cbcInit=function(){var e=new n(this.options.iv);this._cbcState=e},f._update=function(e,t,r,n){var i=this._cbcState,o=this.constructor.super_.prototype,a=i.iv;if("encrypt"===this.type){for(var f=0;f<this.blockSize;f++)a[f]^=e[t+f];o._update.call(this,a,0,r,n);for(var f=0;f<this.blockSize;f++)a[f]=r[n+f]}else{o._update.call(this,e,t,r,n);for(var f=0;f<this.blockSize;f++)r[n+f]^=a[f];for(var f=0;f<this.blockSize;f++)a[f]=e[t+f]}}},function(e,t,r){"use strict";function n(e,t){o.equal(t.length,24,"Invalid key length");var r=t.slice(0,8),n=t.slice(8,16),i=t.slice(16,24);this.ciphers="encrypt"===e?[c.create({type:"encrypt",key:r}),c.create({type:"decrypt",key:n}),c.create({type:"encrypt",key:i})]:[c.create({type:"decrypt",key:i}),c.create({type:"encrypt",key:n}),c.create({type:"decrypt",key:r})]}function i(e){s.call(this,e);var t=new n(this.type,this.options.key);this._edeState=t}var o=r(5),a=r(0),f=r(66),s=f.Cipher,c=f.DES;a(i,s),e.exports=i,i.create=function(e){return new i(e)},i.prototype._update=function(e,t,r,n){var i=this._edeState;i.ciphers[0]._update(e,t,r,n),i.ciphers[1]._update(r,n,r,n),i.ciphers[2]._update(r,n,r,n)},i.prototype._pad=c.prototype._pad,i.prototype._unpad=c.prototype._unpad},function(e,t){t["des-ecb"]={key:8,iv:0},t["des-cbc"]=t.des={key:8,iv:8},t["des-ede3-cbc"]=t.des3={key:24,iv:8},t["des-ede3"]={key:24,iv:0},t["des-ede-cbc"]={key:16,iv:8},t["des-ede"]={key:16,iv:0}},function(e,t,r){(function(e){function n(t){var r=new e(a[t].prime,"hex"),n=new e(a[t].gen,"hex");return new f(r,n)}function i(t,r,n,a){return e.isBuffer(r)||void 0===s[r]?i(t,"binary",r,n):(r=r||"binary",a=a||"binary",n=n||new e([2]),e.isBuffer(n)||(n=new e(n,a)),"number"==typeof t?new f(o(t,n),n,!0):(e.isBuffer(t)||(t=new e(t,r)),new f(t,n,!0)))}var o=r(100),a=r(208),f=r(209),s={binary:!0,hex:!0,base64:!0};t.DiffieHellmanGroup=t.createDiffieHellmanGroup=t.getDiffieHellman=n,t.createDiffieHellman=t.DiffieHellman=i}).call(t,r(1).Buffer)},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t){},function(e,t){},function(e,t){e.exports={modp1:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"},modp2:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"},modp5:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"},modp14:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"},modp15:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"},modp16:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"},modp17:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"},modp18:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"}}},function(e,t,r){(function(t){function n(e,r){return r=r||"utf8",t.isBuffer(e)||(e=new t(e,r)),this._pub=new s(e),this}function i(e,r){return r=r||"utf8",t.isBuffer(e)||(e=new t(e,r)),this._priv=new s(e),this}function o(e,t){var r=t.toString("hex"),n=[r,e.toString(16)].join("_");if(n in g)return g[n];var i=0;if(e.isEven()||!y.simpleSieve||!y.fermatTest(e)||!u.test(e))return i+=1,i+="02"===r||"05"===r?8:4,g[n]=i,i;u.test(e.shrn(1))||(i+=2);var o;switch(r){case"02":e.mod(h).cmp(d)&&(i+=8);break;case"05":o=e.mod(l),o.cmp(p)&&o.cmp(b)&&(i+=8);break;default:i+=4}return g[n]=i,i}function a(e,t,r){this.setGenerator(t),this.__prime=new s(e),this._prime=s.mont(this.__prime),this._primeLen=e.length,this._pub=void 0,this._priv=void 0,this._primeCode=void 0,r?(this.setPublicKey=n,this.setPrivateKey=i):this._primeCode=8}function f(e,r){var n=new t(e.toArray());return r?n.toString(r):n}var s=r(3),c=r(101),u=new c,h=new s(24),d=new s(11),l=new s(10),p=new s(3),b=new s(7),y=r(100),v=r(22);e.exports=a;var g={};Object.defineProperty(a.prototype,"verifyError",{enumerable:!0,get:function(){return"number"!=typeof this._primeCode&&(this._primeCode=o(this.__prime,this.__gen)),this._primeCode}}),a.prototype.generateKeys=function(){return this._priv||(this._priv=new s(v(this._primeLen))),this._pub=this._gen.toRed(this._prime).redPow(this._priv).fromRed(),this.getPublicKey()},a.prototype.computeSecret=function(e){e=new s(e),e=e.toRed(this._prime);var r=e.redPow(this._priv).fromRed(),n=new t(r.toArray()),i=this.getPrime();if(n.length<i.length){var o=new t(i.length-n.length);o.fill(0),n=t.concat([o,n])}return n},a.prototype.getPublicKey=function(e){return f(this._pub,e)},a.prototype.getPrivateKey=function(e){return f(this._priv,e)},a.prototype.getPrime=function(e){return f(this.__prime,e)},a.prototype.getGenerator=function(e){return f(this._gen,e)},a.prototype.setGenerator=function(e,r){return r=r||"utf8",t.isBuffer(e)||(e=new t(e,r)),this.__gen=e,this._gen=new s(e),this}}).call(t,r(1).Buffer)},function(e,t,r){(function(t){function n(e){s.Writable.call(this);var t=d[e];if(!t)throw new Error("Unknown message digest");this._hashType=t.hash,this._hash=f(t.hash),this._tag=t.id,this._signType=t.sign}function i(e){s.Writable.call(this);var t=d[e];if(!t)throw new Error("Unknown message digest");this._hash=f(t.hash),this._tag=t.id,this._signType=t.sign}function o(e){return new n(e)}function a(e){return new i(e)}var f=r(23),s=r(12),c=r(0),u=r(211),h=r(247),d=r(90);Object.keys(d).forEach(function(e){d[e].id=new t(d[e].id,"hex"),d[e.toLowerCase()]=d[e]}),c(n,s.Writable),n.prototype._write=function(e,t,r){this._hash.update(e),r()},n.prototype.update=function(e,r){return"string"==typeof e&&(e=new t(e,r)),this._hash.update(e),this},n.prototype.sign=function(e,t){this.end();var r=this._hash.digest(),n=u(r,e,this._hashType,this._signType,this._tag);return t?n.toString(t):n},c(i,s.Writable),i.prototype._write=function(e,t,r){this._hash.update(e),r()},i.prototype.update=function(e,r){return"string"==typeof e&&(e=new t(e,r)),this._hash.update(e),this},i.prototype.verify=function(e,r,n){"string"==typeof r&&(r=new t(r,n)),this.end();var i=this._hash.digest();return h(r,i,e,this._signType,this._tag)},e.exports={Sign:o,Verify:a,createSign:o,createVerify:a}}).call(t,r(1).Buffer)},function(e,t,r){(function(t){function n(e,r,n,a,f){var s=y(r);if(s.curve){if("ecdsa"!==a&&"ecdsa/rsa"!==a)throw new Error("wrong private key type");return i(e,s)}if("dsa"===s.type){if("dsa"!==a)throw new Error("wrong private key type");return o(e,s,n)}if("rsa"!==a&&"ecdsa/rsa"!==a)throw new Error("wrong private key type");e=t.concat([f,e]);for(var c=s.modulus.byteLength(),u=[0,1];e.length+u.length+1<c;)u.push(255);u.push(0);for(var h=-1;++h<e.length;)u.push(e[h]);return l(u,s)}function i(e,r){var n=v[r.curve.join(".")];if(!n)throw new Error("unknown curve "+r.curve.join("."));var i=new p(n),o=i.keyFromPrivate(r.privateKey),a=o.sign(e);return new t(a.toDER())}function o(e,t,r){for(var n,i=t.params.priv_key,o=t.params.p,c=t.params.q,d=t.params.g,l=new b(0),p=s(e,c).mod(c),y=!1,v=f(i,c,e,r);!1===y;)n=u(c,v,r),l=h(d,n,o,c),y=n.invm(c).imul(p.add(i.mul(l))).mod(c),0===y.cmpn(0)&&(y=!1,l=new b(0));return a(l,y)}function a(e,r){e=e.toArray(),r=r.toArray(),128&e[0]&&(e=[0].concat(e)),128&r[0]&&(r=[0].concat(r));var n=e.length+r.length+4,i=[48,n,2,e.length];return i=i.concat(e,[2,r.length],r),new t(i)}function f(e,r,n,i){if(e=new t(e.toArray()),e.length<r.byteLength()){var o=new t(r.byteLength()-e.length);o.fill(0),e=t.concat([o,e])}var a=n.length,f=c(n,r),s=new t(a);s.fill(1);var u=new t(a);return u.fill(0),u=d(i,u).update(s).update(new t([0])).update(e).update(f).digest(),s=d(i,u).update(s).digest(),u=d(i,u).update(s).update(new t([1])).update(e).update(f).digest(),s=d(i,u).update(s).digest(),{k:u,v:s}}function s(e,t){var r=new b(e),n=(e.length<<3)-t.bitLength();return n>0&&r.ishrn(n),r}function c(e,r){e=s(e,r),e=e.mod(r);var n=new t(e.toArray());if(n.length<r.byteLength()){var i=new t(r.byteLength()-n.length);i.fill(0),n=t.concat([i,n])}return n}function u(e,r,n){var i,o;do{for(i=new t(0);8*i.length<e.bitLength();)r.v=d(n,r.k).update(r.v).digest(),i=t.concat([i,r.v]);o=s(i,e),r.k=d(n,r.k).update(r.v).update(new t([0])).digest(),r.v=d(n,r.k).update(r.v).digest()}while(-1!==o.cmp(e));return o}function h(e,t,r,n){return e.toRed(b.mont(r)).redPow(t).fromRed().mod(n)}var d=r(89),l=r(67),p=r(4).ec,b=r(3),y=r(41),v=r(111);e.exports=n,e.exports.getKey=f,e.exports.makeKey=u}).call(t,r(1).Buffer)},function(e,t){e.exports={_from:"elliptic@^6.0.0",_id:"elliptic@6.4.0",_inBundle:!1,_integrity:"sha1-ysmvh2LIWDYYcAPI3+GT5eLq5d8=",_location:"/elliptic",_phantomChildren:{},_requested:{type:"range",registry:!0,raw:"elliptic@^6.0.0",name:"elliptic",escapedName:"elliptic",rawSpec:"^6.0.0",saveSpec:null,fetchSpec:"^6.0.0"},_requiredBy:["/browserify-sign","/create-ecdh"],_resolved:"https://registry.npmjs.org/elliptic/-/elliptic-6.4.0.tgz",_shasum:"cac9af8762c85836187003c8dfe193e5e2eae5df",_spec:"elliptic@^6.0.0",_where:"/Data/webstudio/vuejs/vuejs-jwt/node_modules/browserify-sign",author:{name:"Fedor Indutny",email:"fedor@indutny.com"},bugs:{url:"https://github.com/indutny/elliptic/issues"},bundleDependencies:!1,dependencies:{"bn.js":"^4.4.0",brorand:"^1.0.1","hash.js":"^1.0.0","hmac-drbg":"^1.0.0",inherits:"^2.0.1","minimalistic-assert":"^1.0.0","minimalistic-crypto-utils":"^1.0.0"},deprecated:!1,description:"EC cryptography",devDependencies:{brfs:"^1.4.3",coveralls:"^2.11.3",grunt:"^0.4.5","grunt-browserify":"^5.0.0","grunt-cli":"^1.2.0","grunt-contrib-connect":"^1.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^1.0.1","grunt-mocha-istanbul":"^3.0.1","grunt-saucelabs":"^8.6.2",istanbul:"^0.4.2",jscs:"^2.9.0",jshint:"^2.6.0",mocha:"^2.1.0"},files:["lib"],homepage:"https://github.com/indutny/elliptic",keywords:["EC","Elliptic","curve","Cryptography"],license:"MIT",main:"lib/elliptic.js",name:"elliptic",repository:{type:"git",url:"git+ssh://git@github.com/indutny/elliptic.git"},scripts:{jscs:"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",jshint:"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",lint:"npm run jscs && npm run jshint",test:"npm run lint && npm run unit",unit:"istanbul test _mocha --reporter=spec test/index.js",version:"grunt dist && git add dist/"},version:"6.4.0"}},function(e,t,r){"use strict";function n(e,t){for(var r=[],n=1<<t+1,i=e.clone();i.cmpn(1)>=0;){var o;if(i.isOdd()){var a=i.andln(n-1);o=a>(n>>1)-1?(n>>1)-a:a,i.isubn(o)}else o=0;r.push(o);for(var f=0!==i.cmpn(0)&&0===i.andln(n-1)?t+1:1,s=1;s<f;s++)r.push(0);i.iushrn(f)}return r}function i(e,t){var r=[[],[]];e=e.clone(),t=t.clone();for(var n=0,i=0;e.cmpn(-n)>0||t.cmpn(-i)>0;){var o=e.andln(3)+n&3,a=t.andln(3)+i&3;3===o&&(o=-1),3===a&&(a=-1);var f;if(0==(1&o))f=0;else{var s=e.andln(7)+n&7;f=3!==s&&5!==s||2!==a?o:-o}r[0].push(f);var c;if(0==(1&a))c=0;else{var s=t.andln(7)+i&7;c=3!==s&&5!==s||2!==o?a:-a}r[1].push(c),2*n===f+1&&(n=1-n),2*i===c+1&&(i=1-i),e.iushrn(1),t.iushrn(1)}return r}function o(e,t,r){var n="_"+t;e.prototype[t]=function(){return void 0!==this[n]?this[n]:this[n]=r.call(this)}}function a(e){return"string"==typeof e?s.toArray(e,"hex"):e}function f(e){return new c(e,"hex","le")}var s=t,c=r(3),u=r(5),h=r(103);s.assert=u,s.toArray=h.toArray,s.zero2=h.zero2,s.toHex=h.toHex,s.encode=h.encode,s.getNAF=n,s.getJSF=i,s.cachedProperty=o,s.parseBytes=a,s.intFromLE=f},function(e,t,r){"use strict";function n(e,t){this.type=e,this.p=new o(t.p,16),this.red=t.prime?o.red(t.prime):o.mont(this.p),this.zero=new o(0).toRed(this.red),this.one=new o(1).toRed(this.red),this.two=new o(2).toRed(this.red),this.n=t.n&&new o(t.n,16),this.g=t.g&&this.pointFromJSON(t.g,t.gRed),this._wnafT1=new Array(4),this._wnafT2=new Array(4),this._wnafT3=new Array(4),this._wnafT4=new Array(4);var r=this.n&&this.p.div(this.n);!r||r.cmpn(100)>0?this.redN=null:(this._maxwellTrick=!0,this.redN=this.n.toRed(this.red))}function i(e,t){this.curve=e,this.type=t,this.precomputed=null}var o=r(3),a=r(4),f=a.utils,s=f.getNAF,c=f.getJSF,u=f.assert;e.exports=n,n.prototype.point=function(){throw new Error("Not implemented")},n.prototype.validate=function(){throw new Error("Not implemented")},n.prototype._fixedNafMul=function(e,t){u(e.precomputed);var r=e._getDoubles(),n=s(t,1),i=(1<<r.step+1)-(r.step%2==0?2:1);i/=3;for(var o=[],a=0;a<n.length;a+=r.step){for(var f=0,t=a+r.step-1;t>=a;t--)f=(f<<1)+n[t];o.push(f)}for(var c=this.jpoint(null,null,null),h=this.jpoint(null,null,null),d=i;d>0;d--){for(var a=0;a<o.length;a++){var f=o[a];f===d?h=h.mixedAdd(r.points[a]):f===-d&&(h=h.mixedAdd(r.points[a].neg()))}c=c.add(h)}return c.toP()},n.prototype._wnafMul=function(e,t){var r=4,n=e._getNAFPoints(r);r=n.wnd;for(var i=n.points,o=s(t,r),a=this.jpoint(null,null,null),f=o.length-1;f>=0;f--){for(var t=0;f>=0&&0===o[f];f--)t++;if(f>=0&&t++,a=a.dblp(t),f<0)break;var c=o[f];u(0!==c),a="affine"===e.type?c>0?a.mixedAdd(i[c-1>>1]):a.mixedAdd(i[-c-1>>1].neg()):c>0?a.add(i[c-1>>1]):a.add(i[-c-1>>1].neg())}return"affine"===e.type?a.toP():a},n.prototype._wnafMulAdd=function(e,t,r,n,i){for(var o=this._wnafT1,a=this._wnafT2,f=this._wnafT3,u=0,h=0;h<n;h++){var d=t[h],l=d._getNAFPoints(e);o[h]=l.wnd,a[h]=l.points}for(var h=n-1;h>=1;h-=2){var p=h-1,b=h;if(1===o[p]&&1===o[b]){var y=[t[p],null,null,t[b]];0===t[p].y.cmp(t[b].y)?(y[1]=t[p].add(t[b]),y[2]=t[p].toJ().mixedAdd(t[b].neg())):0===t[p].y.cmp(t[b].y.redNeg())?(y[1]=t[p].toJ().mixedAdd(t[b]),y[2]=t[p].add(t[b].neg())):(y[1]=t[p].toJ().mixedAdd(t[b]),y[2]=t[p].toJ().mixedAdd(t[b].neg()));var v=[-3,-1,-5,-7,0,7,5,1,3],g=c(r[p],r[b]);u=Math.max(g[0].length,u),f[p]=new Array(u),f[b]=new Array(u);for(var m=0;m<u;m++){var _=0|g[0][m],w=0|g[1][m];f[p][m]=v[3*(_+1)+(w+1)],f[b][m]=0,a[p]=y}}else f[p]=s(r[p],o[p]),f[b]=s(r[b],o[b]),u=Math.max(f[p].length,u),u=Math.max(f[b].length,u)}for(var S=this.jpoint(null,null,null),M=this._wnafT4,h=u;h>=0;h--){for(var E=0;h>=0;){for(var k=!0,m=0;m<n;m++)M[m]=0|f[m][h],0!==M[m]&&(k=!1);if(!k)break;E++,h--}if(h>=0&&E++,S=S.dblp(E),h<0)break;for(var m=0;m<n;m++){var d,x=M[m];0!==x&&(x>0?d=a[m][x-1>>1]:x<0&&(d=a[m][-x-1>>1].neg()),S="affine"===d.type?S.mixedAdd(d):S.add(d))}}for(var h=0;h<n;h++)a[h]=null;return i?S:S.toP()},n.BasePoint=i,i.prototype.eq=function(){throw new Error("Not implemented")},i.prototype.validate=function(){return this.curve.validate(this)},n.prototype.decodePoint=function(e,t){e=f.toArray(e,t);var r=this.p.byteLength();if((4===e[0]||6===e[0]||7===e[0])&&e.length-1==2*r){6===e[0]?u(e[e.length-1]%2==0):7===e[0]&&u(e[e.length-1]%2==1);return this.point(e.slice(1,1+r),e.slice(1+r,1+2*r))}if((2===e[0]||3===e[0])&&e.length-1===r)return this.pointFromX(e.slice(1,1+r),3===e[0]);throw new Error("Unknown point format")},i.prototype.encodeCompressed=function(e){return this.encode(e,!0)},i.prototype._encode=function(e){var t=this.curve.p.byteLength(),r=this.getX().toArray("be",t);return e?[this.getY().isEven()?2:3].concat(r):[4].concat(r,this.getY().toArray("be",t))},i.prototype.encode=function(e,t){return f.encode(this._encode(t),e)},i.prototype.precompute=function(e){if(this.precomputed)return this;var t={doubles:null,naf:null,beta:null};return t.naf=this._getNAFPoints(8),t.doubles=this._getDoubles(4,e),t.beta=this._getBeta(),this.precomputed=t,this},i.prototype._hasDoubles=function(e){if(!this.precomputed)return!1;var t=this.precomputed.doubles;return!!t&&t.points.length>=Math.ceil((e.bitLength()+1)/t.step)},i.prototype._getDoubles=function(e,t){if(this.precomputed&&this.precomputed.doubles)return this.precomputed.doubles;for(var r=[this],n=this,i=0;i<t;i+=e){for(var o=0;o<e;o++)n=n.dbl();r.push(n)}return{step:e,points:r}},i.prototype._getNAFPoints=function(e){if(this.precomputed&&this.precomputed.naf)return this.precomputed.naf;for(var t=[this],r=(1<<e)-1,n=1===r?null:this.dbl(),i=1;i<r;i++)t[i]=t[i-1].add(n);return{wnd:e,points:t}},i.prototype._getBeta=function(){return null},i.prototype.dblp=function(e){for(var t=this,r=0;r<e;r++)t=t.dbl();return t}},function(e,t,r){"use strict";function n(e){u.call(this,"short",e),this.a=new s(e.a,16).toRed(this.red),this.b=new s(e.b,16).toRed(this.red),this.tinv=this.two.redInvm(),this.zeroA=0===this.a.fromRed().cmpn(0),this.threeA=0===this.a.fromRed().sub(this.p).cmpn(-3),this.endo=this._getEndomorphism(e),this._endoWnafT1=new Array(4),this._endoWnafT2=new Array(4)}function i(e,t,r,n){u.BasePoint.call(this,e,"affine"),null===t&&null===r?(this.x=null,this.y=null,this.inf=!0):(this.x=new s(t,16),this.y=new s(r,16),n&&(this.x.forceRed(this.curve.red),this.y.forceRed(this.curve.red)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.inf=!1)}function o(e,t,r,n){u.BasePoint.call(this,e,"jacobian"),null===t&&null===r&&null===n?(this.x=this.curve.one,this.y=this.curve.one,this.z=new s(0)):(this.x=new s(t,16),this.y=new s(r,16),this.z=new s(n,16)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.zOne=this.z===this.curve.one}var a=r(40),f=r(4),s=r(3),c=r(0),u=a.base,h=f.utils.assert;c(n,u),e.exports=n,n.prototype._getEndomorphism=function(e){if(this.zeroA&&this.g&&this.n&&1===this.p.modn(3)){var t,r;if(e.beta)t=new s(e.beta,16).toRed(this.red);else{var n=this._getEndoRoots(this.p);t=n[0].cmp(n[1])<0?n[0]:n[1],t=t.toRed(this.red)}if(e.lambda)r=new s(e.lambda,16);else{var i=this._getEndoRoots(this.n);0===this.g.mul(i[0]).x.cmp(this.g.x.redMul(t))?r=i[0]:(r=i[1],h(0===this.g.mul(r).x.cmp(this.g.x.redMul(t))))}var o;return o=e.basis?e.basis.map(function(e){return{a:new s(e.a,16),b:new s(e.b,16)}}):this._getEndoBasis(r),{beta:t,lambda:r,basis:o}}},n.prototype._getEndoRoots=function(e){var t=e===this.p?this.red:s.mont(e),r=new s(2).toRed(t).redInvm(),n=r.redNeg(),i=new s(3).toRed(t).redNeg().redSqrt().redMul(r);return[n.redAdd(i).fromRed(),n.redSub(i).fromRed()]},n.prototype._getEndoBasis=function(e){for(var t,r,n,i,o,a,f,c,u,h=this.n.ushrn(Math.floor(this.n.bitLength()/2)),d=e,l=this.n.clone(),p=new s(1),b=new s(0),y=new s(0),v=new s(1),g=0;0!==d.cmpn(0);){var m=l.div(d);c=l.sub(m.mul(d)),u=y.sub(m.mul(p));var _=v.sub(m.mul(b));if(!n&&c.cmp(h)<0)t=f.neg(),r=p,n=c.neg(),i=u;else if(n&&2==++g)break;f=c,l=d,d=c,y=p,p=u,v=b,b=_}o=c.neg(),a=u;var w=n.sqr().add(i.sqr());return o.sqr().add(a.sqr()).cmp(w)>=0&&(o=t,a=r),n.negative&&(n=n.neg(),i=i.neg()),o.negative&&(o=o.neg(),a=a.neg()),[{a:n,b:i},{a:o,b:a}]},n.prototype._endoSplit=function(e){var t=this.endo.basis,r=t[0],n=t[1],i=n.b.mul(e).divRound(this.n),o=r.b.neg().mul(e).divRound(this.n),a=i.mul(r.a),f=o.mul(n.a),s=i.mul(r.b),c=o.mul(n.b);return{k1:e.sub(a).sub(f),k2:s.add(c).neg()}},n.prototype.pointFromX=function(e,t){e=new s(e,16),e.red||(e=e.toRed(this.red));var r=e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),n=r.redSqrt();if(0!==n.redSqr().redSub(r).cmp(this.zero))throw new Error("invalid point");var i=n.fromRed().isOdd();return(t&&!i||!t&&i)&&(n=n.redNeg()),this.point(e,n)},n.prototype.validate=function(e){if(e.inf)return!0;var t=e.x,r=e.y,n=this.a.redMul(t),i=t.redSqr().redMul(t).redIAdd(n).redIAdd(this.b);return 0===r.redSqr().redISub(i).cmpn(0)},n.prototype._endoWnafMulAdd=function(e,t,r){for(var n=this._endoWnafT1,i=this._endoWnafT2,o=0;o<e.length;o++){var a=this._endoSplit(t[o]),f=e[o],s=f._getBeta();a.k1.negative&&(a.k1.ineg(),f=f.neg(!0)),a.k2.negative&&(a.k2.ineg(),s=s.neg(!0)),n[2*o]=f,n[2*o+1]=s,i[2*o]=a.k1,i[2*o+1]=a.k2}for(var c=this._wnafMulAdd(1,n,i,2*o,r),u=0;u<2*o;u++)n[u]=null,i[u]=null;return c},c(i,u.BasePoint),n.prototype.point=function(e,t,r){return new i(this,e,t,r)},n.prototype.pointFromJSON=function(e,t){return i.fromJSON(this,e,t)},i.prototype._getBeta=function(){if(this.curve.endo){var e=this.precomputed;if(e&&e.beta)return e.beta;var t=this.curve.point(this.x.redMul(this.curve.endo.beta),this.y);if(e){var r=this.curve,n=function(e){return r.point(e.x.redMul(r.endo.beta),e.y)};e.beta=t,t.precomputed={beta:null,naf:e.naf&&{wnd:e.naf.wnd,points:e.naf.points.map(n)},doubles:e.doubles&&{step:e.doubles.step,points:e.doubles.points.map(n)}}}return t}},i.prototype.toJSON=function(){return this.precomputed?[this.x,this.y,this.precomputed&&{doubles:this.precomputed.doubles&&{step:this.precomputed.doubles.step,points:this.precomputed.doubles.points.slice(1)},naf:this.precomputed.naf&&{wnd:this.precomputed.naf.wnd,points:this.precomputed.naf.points.slice(1)}}]:[this.x,this.y]},i.fromJSON=function(e,t,r){function n(t){return e.point(t[0],t[1],r)}"string"==typeof t&&(t=JSON.parse(t));var i=e.point(t[0],t[1],r);if(!t[2])return i;var o=t[2];return i.precomputed={beta:null,doubles:o.doubles&&{step:o.doubles.step,points:[i].concat(o.doubles.points.map(n))},naf:o.naf&&{wnd:o.naf.wnd,points:[i].concat(o.naf.points.map(n))}},i},i.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,2)+">"},i.prototype.isInfinity=function(){return this.inf},i.prototype.add=function(e){if(this.inf)return e;if(e.inf)return this;if(this.eq(e))return this.dbl();if(this.neg().eq(e))return this.curve.point(null,null);if(0===this.x.cmp(e.x))return this.curve.point(null,null);var t=this.y.redSub(e.y);0!==t.cmpn(0)&&(t=t.redMul(this.x.redSub(e.x).redInvm()));var r=t.redSqr().redISub(this.x).redISub(e.x),n=t.redMul(this.x.redSub(r)).redISub(this.y);return this.curve.point(r,n)},i.prototype.dbl=function(){if(this.inf)return this;var e=this.y.redAdd(this.y);if(0===e.cmpn(0))return this.curve.point(null,null);var t=this.curve.a,r=this.x.redSqr(),n=e.redInvm(),i=r.redAdd(r).redIAdd(r).redIAdd(t).redMul(n),o=i.redSqr().redISub(this.x.redAdd(this.x)),a=i.redMul(this.x.redSub(o)).redISub(this.y);return this.curve.point(o,a)},i.prototype.getX=function(){return this.x.fromRed()},i.prototype.getY=function(){return this.y.fromRed()},i.prototype.mul=function(e){return e=new s(e,16),this._hasDoubles(e)?this.curve._fixedNafMul(this,e):this.curve.endo?this.curve._endoWnafMulAdd([this],[e]):this.curve._wnafMul(this,e)},i.prototype.mulAdd=function(e,t,r){var n=[this,t],i=[e,r];return this.curve.endo?this.curve._endoWnafMulAdd(n,i):this.curve._wnafMulAdd(1,n,i,2)},i.prototype.jmulAdd=function(e,t,r){var n=[this,t],i=[e,r];return this.curve.endo?this.curve._endoWnafMulAdd(n,i,!0):this.curve._wnafMulAdd(1,n,i,2,!0)},i.prototype.eq=function(e){return this===e||this.inf===e.inf&&(this.inf||0===this.x.cmp(e.x)&&0===this.y.cmp(e.y))},i.prototype.neg=function(e){if(this.inf)return this;var t=this.curve.point(this.x,this.y.redNeg());if(e&&this.precomputed){var r=this.precomputed,n=function(e){return e.neg()};t.precomputed={naf:r.naf&&{wnd:r.naf.wnd,points:r.naf.points.map(n)},doubles:r.doubles&&{step:r.doubles.step,points:r.doubles.points.map(n)}}}return t},i.prototype.toJ=function(){return this.inf?this.curve.jpoint(null,null,null):this.curve.jpoint(this.x,this.y,this.curve.one)},c(o,u.BasePoint),n.prototype.jpoint=function(e,t,r){return new o(this,e,t,r)},o.prototype.toP=function(){if(this.isInfinity())return this.curve.point(null,null);var e=this.z.redInvm(),t=e.redSqr(),r=this.x.redMul(t),n=this.y.redMul(t).redMul(e);return this.curve.point(r,n)},o.prototype.neg=function(){return this.curve.jpoint(this.x,this.y.redNeg(),this.z)},o.prototype.add=function(e){if(this.isInfinity())return e;if(e.isInfinity())return this;var t=e.z.redSqr(),r=this.z.redSqr(),n=this.x.redMul(t),i=e.x.redMul(r),o=this.y.redMul(t.redMul(e.z)),a=e.y.redMul(r.redMul(this.z)),f=n.redSub(i),s=o.redSub(a);if(0===f.cmpn(0))return 0!==s.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl();var c=f.redSqr(),u=c.redMul(f),h=n.redMul(c),d=s.redSqr().redIAdd(u).redISub(h).redISub(h),l=s.redMul(h.redISub(d)).redISub(o.redMul(u)),p=this.z.redMul(e.z).redMul(f);return this.curve.jpoint(d,l,p)},o.prototype.mixedAdd=function(e){if(this.isInfinity())return e.toJ();if(e.isInfinity())return this;var t=this.z.redSqr(),r=this.x,n=e.x.redMul(t),i=this.y,o=e.y.redMul(t).redMul(this.z),a=r.redSub(n),f=i.redSub(o);if(0===a.cmpn(0))return 0!==f.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl();var s=a.redSqr(),c=s.redMul(a),u=r.redMul(s),h=f.redSqr().redIAdd(c).redISub(u).redISub(u),d=f.redMul(u.redISub(h)).redISub(i.redMul(c)),l=this.z.redMul(a);return this.curve.jpoint(h,d,l)},o.prototype.dblp=function(e){if(0===e)return this;if(this.isInfinity())return this;if(!e)return this.dbl();if(this.curve.zeroA||this.curve.threeA){for(var t=this,r=0;r<e;r++)t=t.dbl();return t}for(var n=this.curve.a,i=this.curve.tinv,o=this.x,a=this.y,f=this.z,s=f.redSqr().redSqr(),c=a.redAdd(a),r=0;r<e;r++){var u=o.redSqr(),h=c.redSqr(),d=h.redSqr(),l=u.redAdd(u).redIAdd(u).redIAdd(n.redMul(s)),p=o.redMul(h),b=l.redSqr().redISub(p.redAdd(p)),y=p.redISub(b),v=l.redMul(y);v=v.redIAdd(v).redISub(d);var g=c.redMul(f);r+1<e&&(s=s.redMul(d)),o=b,f=g,c=v}return this.curve.jpoint(o,c.redMul(i),f)},o.prototype.dbl=function(){return this.isInfinity()?this:this.curve.zeroA?this._zeroDbl():this.curve.threeA?this._threeDbl():this._dbl()},o.prototype._zeroDbl=function(){var e,t,r;if(this.zOne){var n=this.x.redSqr(),i=this.y.redSqr(),o=i.redSqr(),a=this.x.redAdd(i).redSqr().redISub(n).redISub(o);a=a.redIAdd(a);var f=n.redAdd(n).redIAdd(n),s=f.redSqr().redISub(a).redISub(a),c=o.redIAdd(o);c=c.redIAdd(c),c=c.redIAdd(c),e=s,t=f.redMul(a.redISub(s)).redISub(c),r=this.y.redAdd(this.y)}else{var u=this.x.redSqr(),h=this.y.redSqr(),d=h.redSqr(),l=this.x.redAdd(h).redSqr().redISub(u).redISub(d);l=l.redIAdd(l);var p=u.redAdd(u).redIAdd(u),b=p.redSqr(),y=d.redIAdd(d);y=y.redIAdd(y),y=y.redIAdd(y),e=b.redISub(l).redISub(l),t=p.redMul(l.redISub(e)).redISub(y),r=this.y.redMul(this.z),r=r.redIAdd(r)}return this.curve.jpoint(e,t,r)},o.prototype._threeDbl=function(){var e,t,r;if(this.zOne){var n=this.x.redSqr(),i=this.y.redSqr(),o=i.redSqr(),a=this.x.redAdd(i).redSqr().redISub(n).redISub(o);a=a.redIAdd(a);var f=n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),s=f.redSqr().redISub(a).redISub(a);e=s;var c=o.redIAdd(o);c=c.redIAdd(c),c=c.redIAdd(c),t=f.redMul(a.redISub(s)).redISub(c),r=this.y.redAdd(this.y)}else{var u=this.z.redSqr(),h=this.y.redSqr(),d=this.x.redMul(h),l=this.x.redSub(u).redMul(this.x.redAdd(u));l=l.redAdd(l).redIAdd(l);var p=d.redIAdd(d);p=p.redIAdd(p);var b=p.redAdd(p);e=l.redSqr().redISub(b),r=this.y.redAdd(this.z).redSqr().redISub(h).redISub(u);var y=h.redSqr();y=y.redIAdd(y),y=y.redIAdd(y),y=y.redIAdd(y),t=l.redMul(p.redISub(e)).redISub(y)}return this.curve.jpoint(e,t,r)},o.prototype._dbl=function(){var e=this.curve.a,t=this.x,r=this.y,n=this.z,i=n.redSqr().redSqr(),o=t.redSqr(),a=r.redSqr(),f=o.redAdd(o).redIAdd(o).redIAdd(e.redMul(i)),s=t.redAdd(t);s=s.redIAdd(s);var c=s.redMul(a),u=f.redSqr().redISub(c.redAdd(c)),h=c.redISub(u),d=a.redSqr();d=d.redIAdd(d),d=d.redIAdd(d),d=d.redIAdd(d);var l=f.redMul(h).redISub(d),p=r.redAdd(r).redMul(n);return this.curve.jpoint(u,l,p)},o.prototype.trpl=function(){if(!this.curve.zeroA)return this.dbl().add(this);var e=this.x.redSqr(),t=this.y.redSqr(),r=this.z.redSqr(),n=t.redSqr(),i=e.redAdd(e).redIAdd(e),o=i.redSqr(),a=this.x.redAdd(t).redSqr().redISub(e).redISub(n);a=a.redIAdd(a),a=a.redAdd(a).redIAdd(a),a=a.redISub(o);var f=a.redSqr(),s=n.redIAdd(n);s=s.redIAdd(s),s=s.redIAdd(s),s=s.redIAdd(s);var c=i.redIAdd(a).redSqr().redISub(o).redISub(f).redISub(s),u=t.redMul(c);u=u.redIAdd(u),u=u.redIAdd(u);var h=this.x.redMul(f).redISub(u);h=h.redIAdd(h),h=h.redIAdd(h);var d=this.y.redMul(c.redMul(s.redISub(c)).redISub(a.redMul(f)));d=d.redIAdd(d),d=d.redIAdd(d),d=d.redIAdd(d);var l=this.z.redAdd(a).redSqr().redISub(r).redISub(f);return this.curve.jpoint(h,d,l)},o.prototype.mul=function(e,t){return e=new s(e,t),this.curve._wnafMul(this,e)},o.prototype.eq=function(e){if("affine"===e.type)return this.eq(e.toJ());if(this===e)return!0;var t=this.z.redSqr(),r=e.z.redSqr();if(0!==this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0))return!1;var n=t.redMul(this.z),i=r.redMul(e.z);return 0===this.y.redMul(i).redISub(e.y.redMul(n)).cmpn(0)},o.prototype.eqXToP=function(e){var t=this.z.redSqr(),r=e.toRed(this.curve.red).redMul(t);if(0===this.x.cmp(r))return!0;for(var n=e.clone(),i=this.curve.redN.redMul(t);;){if(n.iadd(this.curve.n),n.cmp(this.curve.p)>=0)return!1;if(r.redIAdd(i),0===this.x.cmp(r))return!0}return!1},o.prototype.inspect=function(){return this.isInfinity()?"<EC JPoint Infinity>":"<EC JPoint x: "+this.x.toString(16,2)+" y: "+this.y.toString(16,2)+" z: "+this.z.toString(16,2)+">"},o.prototype.isInfinity=function(){return 0===this.z.cmpn(0)}},function(e,t,r){"use strict";function n(e){s.call(this,"mont",e),this.a=new a(e.a,16).toRed(this.red),this.b=new a(e.b,16).toRed(this.red),this.i4=new a(4).toRed(this.red).redInvm(),this.two=new a(2).toRed(this.red),this.a24=this.i4.redMul(this.a.redAdd(this.two))}function i(e,t,r){s.BasePoint.call(this,e,"projective"),null===t&&null===r?(this.x=this.curve.one,this.z=this.curve.zero):(this.x=new a(t,16),this.z=new a(r,16),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)))}var o=r(40),a=r(3),f=r(0),s=o.base,c=r(4),u=c.utils;f(n,s),e.exports=n,n.prototype.validate=function(e){var t=e.normalize().x,r=t.redSqr(),n=r.redMul(t).redAdd(r.redMul(this.a)).redAdd(t);return 0===n.redSqrt().redSqr().cmp(n)},f(i,s.BasePoint),n.prototype.decodePoint=function(e,t){return this.point(u.toArray(e,t),1)},n.prototype.point=function(e,t){return new i(this,e,t)},n.prototype.pointFromJSON=function(e){return i.fromJSON(this,e)},i.prototype.precompute=function(){},i.prototype._encode=function(){return this.getX().toArray("be",this.curve.p.byteLength())},i.fromJSON=function(e,t){return new i(e,t[0],t[1]||e.one)},i.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" z: "+this.z.fromRed().toString(16,2)+">"},i.prototype.isInfinity=function(){return 0===this.z.cmpn(0)},i.prototype.dbl=function(){var e=this.x.redAdd(this.z),t=e.redSqr(),r=this.x.redSub(this.z),n=r.redSqr(),i=t.redSub(n),o=t.redMul(n),a=i.redMul(n.redAdd(this.curve.a24.redMul(i)));return this.curve.point(o,a)},i.prototype.add=function(){throw new Error("Not supported on Montgomery curve")},i.prototype.diffAdd=function(e,t){var r=this.x.redAdd(this.z),n=this.x.redSub(this.z),i=e.x.redAdd(e.z),o=e.x.redSub(e.z),a=o.redMul(r),f=i.redMul(n),s=t.z.redMul(a.redAdd(f).redSqr()),c=t.x.redMul(a.redISub(f).redSqr());return this.curve.point(s,c)},i.prototype.mul=function(e){for(var t=e.clone(),r=this,n=this.curve.point(null,null),i=this,o=[];0!==t.cmpn(0);t.iushrn(1))o.push(t.andln(1));for(var a=o.length-1;a>=0;a--)0===o[a]?(r=r.diffAdd(n,i),n=n.dbl()):(n=r.diffAdd(n,i),r=r.dbl());return n},i.prototype.mulAdd=function(){throw new Error("Not supported on Montgomery curve")},i.prototype.jumlAdd=function(){throw new Error("Not supported on Montgomery curve")},i.prototype.eq=function(e){return 0===this.getX().cmp(e.getX())},i.prototype.normalize=function(){return this.x=this.x.redMul(this.z.redInvm()),this.z=this.curve.one,this},i.prototype.getX=function(){return this.normalize(),this.x.fromRed()}},function(e,t,r){"use strict";function n(e){this.twisted=1!=(0|e.a),this.mOneA=this.twisted&&-1==(0|e.a),this.extended=this.mOneA,c.call(this,"edwards",e),this.a=new f(e.a,16).umod(this.red.m),this.a=this.a.toRed(this.red),this.c=new f(e.c,16).toRed(this.red),this.c2=this.c.redSqr(),this.d=new f(e.d,16).toRed(this.red),this.dd=this.d.redAdd(this.d),u(!this.twisted||0===this.c.fromRed().cmpn(1)),this.oneC=1==(0|e.c)}function i(e,t,r,n,i){c.BasePoint.call(this,e,"projective"),null===t&&null===r&&null===n?(this.x=this.curve.zero,this.y=this.curve.one,this.z=this.curve.one,this.t=this.curve.zero,this.zOne=!0):(this.x=new f(t,16),this.y=new f(r,16),this.z=n?new f(n,16):this.curve.one,this.t=i&&new f(i,16),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.t&&!this.t.red&&(this.t=this.t.toRed(this.curve.red)),this.zOne=this.z===this.curve.one,this.curve.extended&&!this.t&&(this.t=this.x.redMul(this.y),this.zOne||(this.t=this.t.redMul(this.z.redInvm()))))}var o=r(40),a=r(4),f=r(3),s=r(0),c=o.base,u=a.utils.assert;s(n,c),e.exports=n,n.prototype._mulA=function(e){return this.mOneA?e.redNeg():this.a.redMul(e)},n.prototype._mulC=function(e){return this.oneC?e:this.c.redMul(e)},n.prototype.jpoint=function(e,t,r,n){return this.point(e,t,r,n)},n.prototype.pointFromX=function(e,t){e=new f(e,16),e.red||(e=e.toRed(this.red));var r=e.redSqr(),n=this.c2.redSub(this.a.redMul(r)),i=this.one.redSub(this.c2.redMul(this.d).redMul(r)),o=n.redMul(i.redInvm()),a=o.redSqrt();if(0!==a.redSqr().redSub(o).cmp(this.zero))throw new Error("invalid point");var s=a.fromRed().isOdd();return(t&&!s||!t&&s)&&(a=a.redNeg()),this.point(e,a)},n.prototype.pointFromY=function(e,t){e=new f(e,16),e.red||(e=e.toRed(this.red));var r=e.redSqr(),n=r.redSub(this.one),i=r.redMul(this.d).redAdd(this.one),o=n.redMul(i.redInvm());if(0===o.cmp(this.zero)){if(t)throw new Error("invalid point");return this.point(this.zero,e)}var a=o.redSqrt();if(0!==a.redSqr().redSub(o).cmp(this.zero))throw new Error("invalid point");return a.isOdd()!==t&&(a=a.redNeg()),this.point(a,e)},n.prototype.validate=function(e){if(e.isInfinity())return!0;e.normalize();var t=e.x.redSqr(),r=e.y.redSqr(),n=t.redMul(this.a).redAdd(r),i=this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(r)));return 0===n.cmp(i)},s(i,c.BasePoint),n.prototype.pointFromJSON=function(e){return i.fromJSON(this,e)},n.prototype.point=function(e,t,r,n){return new i(this,e,t,r,n)},i.fromJSON=function(e,t){return new i(e,t[0],t[1],t[2])},i.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,2)+" z: "+this.z.fromRed().toString(16,2)+">"},i.prototype.isInfinity=function(){return 0===this.x.cmpn(0)&&0===this.y.cmp(this.z)},i.prototype._extDbl=function(){var e=this.x.redSqr(),t=this.y.redSqr(),r=this.z.redSqr();r=r.redIAdd(r);var n=this.curve._mulA(e),i=this.x.redAdd(this.y).redSqr().redISub(e).redISub(t),o=n.redAdd(t),a=o.redSub(r),f=n.redSub(t),s=i.redMul(a),c=o.redMul(f),u=i.redMul(f),h=a.redMul(o);return this.curve.point(s,c,h,u)},i.prototype._projDbl=function(){var e,t,r,n=this.x.redAdd(this.y).redSqr(),i=this.x.redSqr(),o=this.y.redSqr();if(this.curve.twisted){var a=this.curve._mulA(i),f=a.redAdd(o);if(this.zOne)e=n.redSub(i).redSub(o).redMul(f.redSub(this.curve.two)),t=f.redMul(a.redSub(o)),r=f.redSqr().redSub(f).redSub(f);else{var s=this.z.redSqr(),c=f.redSub(s).redISub(s);e=n.redSub(i).redISub(o).redMul(c),t=f.redMul(a.redSub(o)),r=f.redMul(c)}}else{var a=i.redAdd(o),s=this.curve._mulC(this.c.redMul(this.z)).redSqr(),c=a.redSub(s).redSub(s);e=this.curve._mulC(n.redISub(a)).redMul(c),t=this.curve._mulC(a).redMul(i.redISub(o)),r=a.redMul(c)}return this.curve.point(e,t,r)},i.prototype.dbl=function(){return this.isInfinity()?this:this.curve.extended?this._extDbl():this._projDbl()},i.prototype._extAdd=function(e){var t=this.y.redSub(this.x).redMul(e.y.redSub(e.x)),r=this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),n=this.t.redMul(this.curve.dd).redMul(e.t),i=this.z.redMul(e.z.redAdd(e.z)),o=r.redSub(t),a=i.redSub(n),f=i.redAdd(n),s=r.redAdd(t),c=o.redMul(a),u=f.redMul(s),h=o.redMul(s),d=a.redMul(f);return this.curve.point(c,u,d,h)},i.prototype._projAdd=function(e){var t,r,n=this.z.redMul(e.z),i=n.redSqr(),o=this.x.redMul(e.x),a=this.y.redMul(e.y),f=this.curve.d.redMul(o).redMul(a),s=i.redSub(f),c=i.redAdd(f),u=this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(o).redISub(a),h=n.redMul(s).redMul(u);return this.curve.twisted?(t=n.redMul(c).redMul(a.redSub(this.curve._mulA(o))),r=s.redMul(c)):(t=n.redMul(c).redMul(a.redSub(o)),r=this.curve._mulC(s).redMul(c)),this.curve.point(h,t,r)},i.prototype.add=function(e){return this.isInfinity()?e:e.isInfinity()?this:this.curve.extended?this._extAdd(e):this._projAdd(e)},i.prototype.mul=function(e){return this._hasDoubles(e)?this.curve._fixedNafMul(this,e):this.curve._wnafMul(this,e)},i.prototype.mulAdd=function(e,t,r){return this.curve._wnafMulAdd(1,[this,t],[e,r],2,!1)},i.prototype.jmulAdd=function(e,t,r){return this.curve._wnafMulAdd(1,[this,t],[e,r],2,!0)},i.prototype.normalize=function(){if(this.zOne)return this;var e=this.z.redInvm();return this.x=this.x.redMul(e),this.y=this.y.redMul(e),this.t&&(this.t=this.t.redMul(e)),this.z=this.curve.one,this.zOne=!0,this},i.prototype.neg=function(){return this.curve.point(this.x.redNeg(),this.y,this.z,this.t&&this.t.redNeg())},i.prototype.getX=function(){return this.normalize(),this.x.fromRed()},i.prototype.getY=function(){return this.normalize(),this.y.fromRed()},i.prototype.eq=function(e){return this===e||0===this.getX().cmp(e.getX())&&0===this.getY().cmp(e.getY())},i.prototype.eqXToP=function(e){var t=e.toRed(this.curve.red).redMul(this.z);if(0===this.x.cmp(t))return!0;for(var r=e.clone(),n=this.curve.redN.redMul(this.z);;){if(r.iadd(this.curve.n),r.cmp(this.curve.p)>=0)return!1;if(t.redIAdd(n),0===this.x.cmp(t))return!0}return!1},i.prototype.toP=i.prototype.normalize,i.prototype.mixedAdd=i.prototype.add},function(e,t,r){"use strict";function n(e){"short"===e.type?this.curve=new f.curve.short(e):"edwards"===e.type?this.curve=new f.curve.edwards(e):this.curve=new f.curve.mont(e),this.g=this.curve.g,this.n=this.curve.n,this.hash=e.hash,s(this.g.validate(),"Invalid curve"),s(this.g.mul(this.n).isInfinity(),"Invalid curve, G*N != O")}function i(e,t){Object.defineProperty(o,e,{configurable:!0,enumerable:!0,get:function(){var r=new n(t);return Object.defineProperty(o,e,{configurable:!0,enumerable:!0,value:r}),r}})}var o=t,a=r(68),f=r(4),s=f.utils.assert;o.PresetCurve=n,i("p192",{type:"short",prime:"p192",p:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",a:"ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",b:"64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",n:"ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",hash:a.sha256,gRed:!1,g:["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012","07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]}),i("p224",{type:"short",prime:"p224",p:"ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",a:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",b:"b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",n:"ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",hash:a.sha256,gRed:!1,g:["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21","bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]}),i("p256",{type:"short",prime:null,p:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",a:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",b:"5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",n:"ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",hash:a.sha256,gRed:!1,g:["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296","4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]}),i("p384",{type:"short",prime:null,p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",a:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",b:"b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",n:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",hash:a.sha384,gRed:!1,g:["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7","3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]}),i("p521",{type:"short",prime:null,p:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",a:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",b:"00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",n:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",hash:a.sha512,gRed:!1,g:["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66","00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]}),i("curve25519",{type:"mont",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"76d06",b:"1",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:a.sha256,gRed:!1,g:["9"]}),i("ed25519",{type:"edwards",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"-1",c:"1",d:"52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:a.sha256,gRed:!1,g:["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a","6666666666666666666666666666666666666666666666666666666666666658"]});var c;try{c=r(225)}catch(e){c=void 0}i("secp256k1",{type:"short",prime:"k256",p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",a:"0",b:"7",n:"ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",h:"1",hash:a.sha256,beta:"7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",lambda:"5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",basis:[{a:"3086d221a7d46bcde86c90e49284eb15",b:"-e4437ed6010e88286f547fa90abfe4c3"},{a:"114ca50f7a8e2f3f657c1108d9d44cfd8",b:"3086d221a7d46bcde86c90e49284eb15"}],gRed:!1,g:["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",c]})},function(e,t,r){"use strict";t.sha1=r(220),t.sha224=r(221),t.sha256=r(105),t.sha384=r(222),t.sha512=r(106)},function(e,t,r){"use strict";function n(){if(!(this instanceof n))return new n;h.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.W=new Array(80)}var i=r(6),o=r(25),a=r(104),f=i.rotl32,s=i.sum32,c=i.sum32_5,u=a.ft_1,h=o.BlockHash,d=[1518500249,1859775393,2400959708,3395469782];i.inherits(n,h),e.exports=n,n.blockSize=512,n.outSize=160,n.hmacStrength=80,n.padLength=64,n.prototype._update=function(e,t){for(var r=this.W,n=0;n<16;n++)r[n]=e[t+n];for(;n<r.length;n++)r[n]=f(r[n-3]^r[n-8]^r[n-14]^r[n-16],1);var i=this.h[0],o=this.h[1],a=this.h[2],h=this.h[3],l=this.h[4];for(n=0;n<r.length;n++){var p=~~(n/20),b=c(f(i,5),u(p,o,a,h),l,r[n],d[p]);l=h,h=a,a=f(o,30),o=i,i=b}this.h[0]=s(this.h[0],i),this.h[1]=s(this.h[1],o),this.h[2]=s(this.h[2],a),this.h[3]=s(this.h[3],h),this.h[4]=s(this.h[4],l)},n.prototype._digest=function(e){return"hex"===e?i.toHex32(this.h,"big"):i.split32(this.h,"big")}},function(e,t,r){"use strict";function n(){if(!(this instanceof n))return new n;o.call(this),this.h=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428]}var i=r(6),o=r(105);i.inherits(n,o),e.exports=n,n.blockSize=512,n.outSize=224,n.hmacStrength=192,n.padLength=64,n.prototype._digest=function(e){return"hex"===e?i.toHex32(this.h.slice(0,7),"big"):i.split32(this.h.slice(0,7),"big")}},function(e,t,r){"use strict";function n(){if(!(this instanceof n))return new n;o.call(this),this.h=[3418070365,3238371032,1654270250,914150663,2438529370,812702999,355462360,4144912697,1731405415,4290775857,2394180231,1750603025,3675008525,1694076839,1203062813,3204075428]}var i=r(6),o=r(106);i.inherits(n,o),e.exports=n,n.blockSize=1024,n.outSize=384,n.hmacStrength=192,n.padLength=128,n.prototype._digest=function(e){return"hex"===e?i.toHex32(this.h.slice(0,12),"big"):i.split32(this.h.slice(0,12),"big")}},function(e,t,r){"use strict";function n(){if(!(this instanceof n))return new n;l.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.endian="little"}function i(e,t,r,n){return e<=15?t^r^n:e<=31?t&r|~t&n:e<=47?(t|~r)^n:e<=63?t&n|r&~n:t^(r|~n)}function o(e){return e<=15?0:e<=31?1518500249:e<=47?1859775393:e<=63?2400959708:2840853838}function a(e){return e<=15?1352829926:e<=31?1548603684:e<=47?1836072691:e<=63?2053994217:0}var f=r(6),s=r(25),c=f.rotl32,u=f.sum32,h=f.sum32_3,d=f.sum32_4,l=s.BlockHash;f.inherits(n,l),t.ripemd160=n,n.blockSize=512,n.outSize=160,n.hmacStrength=192,n.padLength=64,n.prototype._update=function(e,t){for(var r=this.h[0],n=this.h[1],f=this.h[2],s=this.h[3],l=this.h[4],g=r,m=n,_=f,w=s,S=l,M=0;M<80;M++){var E=u(c(d(r,i(M,n,f,s),e[p[M]+t],o(M)),y[M]),l);r=l,l=s,s=c(f,10),f=n,n=E,E=u(c(d(g,i(79-M,m,_,w),e[b[M]+t],a(M)),v[M]),S),g=S,S=w,w=c(_,10),_=m,m=E}E=h(this.h[1],f,w),this.h[1]=h(this.h[2],s,S),this.h[2]=h(this.h[3],l,g),this.h[3]=h(this.h[4],r,m),this.h[4]=h(this.h[0],n,_),this.h[0]=E},n.prototype._digest=function(e){return"hex"===e?f.toHex32(this.h,"little"):f.split32(this.h,"little")};var p=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],b=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],y=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],v=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]},function(e,t,r){"use strict";function n(e,t,r){if(!(this instanceof n))return new n(e,t,r);this.Hash=e,this.blockSize=e.blockSize/8,this.outSize=e.outSize/8,this.inner=null,this.outer=null,this._init(i.toArray(t,r))}var i=r(6),o=r(5);e.exports=n,n.prototype._init=function(e){e.length>this.blockSize&&(e=(new this.Hash).update(e).digest()),o(e.length<=this.blockSize);for(var t=e.length;t<this.blockSize;t++)e.push(0);for(t=0;t<e.length;t++)e[t]^=54;for(this.inner=(new this.Hash).update(e),t=0;t<e.length;t++)e[t]^=106;this.outer=(new this.Hash).update(e)},n.prototype.update=function(e,t){return this.inner.update(e,t),this},n.prototype.digest=function(e){return this.outer.update(this.inner.digest()),this.outer.digest(e)}},function(e,t){e.exports={doubles:{step:4,points:[["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a","f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"],["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508","11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"],["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739","d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"],["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640","4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"],["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c","4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"],["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda","96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"],["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa","5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"],["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0","cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"],["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d","9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"],["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d","e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"],["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1","9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"],["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0","5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"],["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047","10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"],["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862","283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"],["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7","7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"],["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd","56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"],["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83","7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"],["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a","53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"],["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8","bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"],["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d","4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"],["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725","7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"],["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754","4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"],["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c","17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"],["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6","6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"],["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39","c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"],["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891","893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"],["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b","febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"],["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03","2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"],["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d","eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"],["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070","7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"],["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4","e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"],["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da","662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"],["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11","1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"],["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e","efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"],["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41","2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"],["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef","67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"],["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8","db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"],["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d","648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"],["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96","35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"],["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd","ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"],["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5","9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"],["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266","40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"],["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71","34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"],["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac","c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"],["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751","1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"],["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e","493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"],["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241","c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"],["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3","be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"],["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f","4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"],["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19","aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"],["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be","b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"],["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9","6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"],["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2","8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"],["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13","7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"],["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c","ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"],["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba","2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"],["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151","e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"],["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073","d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"],["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458","38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"],["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b","69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"],["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366","d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"],["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa","40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"],["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0","620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"],["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787","7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"],["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e","ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]]},naf:{wnd:7,points:[["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9","388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"],["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4","d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"],["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc","6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"],["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe","cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"],["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb","d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"],["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8","ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"],["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e","581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"],["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34","4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"],["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c","85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"],["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5","321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"],["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f","2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"],["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714","73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"],["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729","a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"],["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db","2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"],["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4","e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"],["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5","b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"],["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479","2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"],["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d","80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"],["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f","1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"],["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb","d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"],["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9","eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"],["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963","758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"],["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74","958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"],["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530","e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"],["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b","5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"],["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247","cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"],["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1","cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"],["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120","4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"],["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435","91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"],["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18","673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"],["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8","59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"],["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb","3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"],["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f","55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"],["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143","efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"],["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba","e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"],["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45","f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"],["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a","744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"],["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e","c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"],["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8","e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"],["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c","30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"],["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519","e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"],["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab","100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"],["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca","ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"],["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf","8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"],["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610","68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"],["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4","f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"],["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c","d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"],["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940","edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"],["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980","a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"],["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3","66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"],["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf","9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"],["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63","4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"],["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448","fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"],["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf","5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"],["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5","8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"],["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6","8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"],["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5","5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"],["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99","f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"],["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51","f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"],["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5","42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"],["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5","204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"],["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997","4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"],["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881","73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"],["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5","39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"],["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66","d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"],["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726","ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"],["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede","6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"],["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94","60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"],["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31","3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"],["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51","b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"],["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252","ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"],["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5","cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"],["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b","6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"],["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4","322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"],["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f","6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"],["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889","2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"],["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246","b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"],["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984","998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"],["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a","b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"],["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030","bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"],["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197","6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"],["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593","c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"],["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef","21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"],["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38","60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"],["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a","49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"],["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111","5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"],["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502","7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"],["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea","be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"],["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26","8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"],["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986","39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"],["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e","62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"],["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4","25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"],["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda","ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"],["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859","cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"],["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f","f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"],["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c","6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"],["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942","fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"],["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a","1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"],["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80","5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"],["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d","438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"],["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1","cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"],["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63","c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"],["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352","6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"],["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193","ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"],["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00","9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"],["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58","ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"],["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7","d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"],["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8","c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"],["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e","67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"],["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d","cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"],["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b","299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"],["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f","f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"],["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6","462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"],["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297","62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"],["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a","7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"],["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c","ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"],["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52","4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"],["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb","bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"],["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065","bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"],["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917","603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"],["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9","cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"],["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3","553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"],["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57","712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"],["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66","ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"],["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8","9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"],["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721","9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"],["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180","4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]]}}},function(e,t,r){"use strict";function n(e){if(!(this instanceof n))return new n(e);"string"==typeof e&&(s(a.curves.hasOwnProperty(e),"Unknown curve "+e),e=a.curves[e]),e instanceof a.curves.PresetCurve&&(e={curve:e}),this.curve=e.curve.curve,this.n=this.curve.n,this.nh=this.n.ushrn(1),this.g=this.curve.g,this.g=e.curve.g,this.g.precompute(e.curve.n.bitLength()+1),this.hash=e.hash||e.curve.hash}var i=r(3),o=r(227),a=r(4),f=a.utils,s=f.assert,c=r(228),u=r(229);e.exports=n,n.prototype.keyPair=function(e){return new c(this,e)},n.prototype.keyFromPrivate=function(e,t){return c.fromPrivate(this,e,t)},n.prototype.keyFromPublic=function(e,t){return c.fromPublic(this,e,t)},n.prototype.genKeyPair=function(e){e||(e={});for(var t=new o({hash:this.hash,pers:e.pers,persEnc:e.persEnc||"utf8",entropy:e.entropy||a.rand(this.hash.hmacStrength),entropyEnc:e.entropy&&e.entropyEnc||"utf8",nonce:this.n.toArray()}),r=this.n.byteLength(),n=this.n.sub(new i(2));;){var f=new i(t.generate(r));if(!(f.cmp(n)>0))return f.iaddn(1),this.keyFromPrivate(f)}},n.prototype._truncateToN=function(e,t){var r=8*e.byteLength()-this.n.bitLength();return r>0&&(e=e.ushrn(r)),!t&&e.cmp(this.n)>=0?e.sub(this.n):e},n.prototype.sign=function(e,t,r,n){"object"==typeof r&&(n=r,r=null),n||(n={}),t=this.keyFromPrivate(t,r),e=this._truncateToN(new i(e,16));for(var a=this.n.byteLength(),f=t.getPrivate().toArray("be",a),s=e.toArray("be",a),c=new o({hash:this.hash,entropy:f,nonce:s,pers:n.pers,persEnc:n.persEnc||"utf8"}),h=this.n.sub(new i(1)),d=0;!0;d++){var l=n.k?n.k(d):new i(c.generate(this.n.byteLength()));if(l=this._truncateToN(l,!0),!(l.cmpn(1)<=0||l.cmp(h)>=0)){var p=this.g.mul(l);if(!p.isInfinity()){var b=p.getX(),y=b.umod(this.n);if(0!==y.cmpn(0)){var v=l.invm(this.n).mul(y.mul(t.getPrivate()).iadd(e));if(v=v.umod(this.n),0!==v.cmpn(0)){var g=(p.getY().isOdd()?1:0)|(0!==b.cmp(y)?2:0);return n.canonical&&v.cmp(this.nh)>0&&(v=this.n.sub(v),g^=1),new u({r:y,s:v,recoveryParam:g})}}}}}},n.prototype.verify=function(e,t,r,n){e=this._truncateToN(new i(e,16)),r=this.keyFromPublic(r,n),t=new u(t,"hex");var o=t.r,a=t.s;if(o.cmpn(1)<0||o.cmp(this.n)>=0)return!1;if(a.cmpn(1)<0||a.cmp(this.n)>=0)return!1;var f=a.invm(this.n),s=f.mul(e).umod(this.n),c=f.mul(o).umod(this.n);if(!this.curve._maxwellTrick){var h=this.g.mulAdd(s,r.getPublic(),c);return!h.isInfinity()&&0===h.getX().umod(this.n).cmp(o)}var h=this.g.jmulAdd(s,r.getPublic(),c);return!h.isInfinity()&&h.eqXToP(o)},n.prototype.recoverPubKey=function(e,t,r,n){s((3&r)===r,"The recovery param is more than two bits"),t=new u(t,n);var o=this.n,a=new i(e),f=t.r,c=t.s,h=1&r,d=r>>1;if(f.cmp(this.curve.p.umod(this.curve.n))>=0&&d)throw new Error("Unable to find sencond key candinate");f=d?this.curve.pointFromX(f.add(this.curve.n),h):this.curve.pointFromX(f,h);var l=t.r.invm(o),p=o.sub(a).mul(l).umod(o),b=c.mul(l).umod(o);return this.g.mulAdd(p,f,b)},n.prototype.getKeyRecoveryParam=function(e,t,r,n){if(t=new u(t,n),null!==t.recoveryParam)return t.recoveryParam;for(var i=0;i<4;i++){var o;try{o=this.recoverPubKey(e,t,i)}catch(e){continue}if(o.eq(r))return i}throw new Error("Unable to find valid recovery factor")}},function(e,t,r){"use strict";function n(e){if(!(this instanceof n))return new n(e);this.hash=e.hash,this.predResist=!!e.predResist,this.outLen=this.hash.outSize,this.minEntropy=e.minEntropy||this.hash.hmacStrength,this._reseed=null,this.reseedInterval=null,this.K=null,this.V=null;var t=o.toArray(e.entropy,e.entropyEnc||"hex"),r=o.toArray(e.nonce,e.nonceEnc||"hex"),i=o.toArray(e.pers,e.persEnc||"hex");a(t.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._init(t,r,i)}var i=r(68),o=r(103),a=r(5);e.exports=n,n.prototype._init=function(e,t,r){var n=e.concat(t).concat(r);this.K=new Array(this.outLen/8),this.V=new Array(this.outLen/8);for(var i=0;i<this.V.length;i++)this.K[i]=0,this.V[i]=1;this._update(n),this._reseed=1,this.reseedInterval=281474976710656},n.prototype._hmac=function(){return new i.hmac(this.hash,this.K)},n.prototype._update=function(e){var t=this._hmac().update(this.V).update([0]);e&&(t=t.update(e)),this.K=t.digest(),this.V=this._hmac().update(this.V).digest(),e&&(this.K=this._hmac().update(this.V).update([1]).update(e).digest(),this.V=this._hmac().update(this.V).digest())},n.prototype.reseed=function(e,t,r,n){"string"!=typeof t&&(n=r,r=t,t=null),e=o.toArray(e,t),r=o.toArray(r,n),a(e.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._update(e.concat(r||[])),this._reseed=1},n.prototype.generate=function(e,t,r,n){if(this._reseed>this.reseedInterval)throw new Error("Reseed is required");"string"!=typeof t&&(n=r,r=t,t=null),r&&(r=o.toArray(r,n||"hex"),this._update(r));for(var i=[];i.length<e;)this.V=this._hmac().update(this.V).digest(),i=i.concat(this.V);var a=i.slice(0,e);return this._update(r),this._reseed++,o.encode(a,t)}},function(e,t,r){"use strict";function n(e,t){this.ec=e,this.priv=null,this.pub=null,t.priv&&this._importPrivate(t.priv,t.privEnc),t.pub&&this._importPublic(t.pub,t.pubEnc)}var i=r(3),o=r(4),a=o.utils,f=a.assert;e.exports=n,n.fromPublic=function(e,t,r){return t instanceof n?t:new n(e,{pub:t,pubEnc:r})},n.fromPrivate=function(e,t,r){return t instanceof n?t:new n(e,{priv:t,privEnc:r})},n.prototype.validate=function(){var e=this.getPublic();return e.isInfinity()?{result:!1,reason:"Invalid public key"}:e.validate()?e.mul(this.ec.curve.n).isInfinity()?{result:!0,reason:null}:{result:!1,reason:"Public key * N != O"}:{result:!1,reason:"Public key is not a point"}},n.prototype.getPublic=function(e,t){return"string"==typeof e&&(t=e,e=null),this.pub||(this.pub=this.ec.g.mul(this.priv)),t?this.pub.encode(t,e):this.pub},n.prototype.getPrivate=function(e){return"hex"===e?this.priv.toString(16,2):this.priv},n.prototype._importPrivate=function(e,t){this.priv=new i(e,t||16),this.priv=this.priv.umod(this.ec.curve.n)},n.prototype._importPublic=function(e,t){if(e.x||e.y)return"mont"===this.ec.curve.type?f(e.x,"Need x coordinate"):"short"!==this.ec.curve.type&&"edwards"!==this.ec.curve.type||f(e.x&&e.y,"Need both x and y coordinate"),void(this.pub=this.ec.curve.point(e.x,e.y));this.pub=this.ec.curve.decodePoint(e,t)},n.prototype.derive=function(e){return e.mul(this.priv).getX()},n.prototype.sign=function(e,t,r){return this.ec.sign(e,this,t,r)},n.prototype.verify=function(e,t){return this.ec.verify(e,t,this)},n.prototype.inspect=function(){return"<Key priv: "+(this.priv&&this.priv.toString(16,2))+" pub: "+(this.pub&&this.pub.inspect())+" >"}},function(e,t,r){"use strict";function n(e,t){if(e instanceof n)return e;this._importDER(e,t)||(h(e.r&&e.s,"Signature without r or s"),this.r=new s(e.r,16),this.s=new s(e.s,16),void 0===e.recoveryParam?this.recoveryParam=null:this.recoveryParam=e.recoveryParam)}function i(){this.place=0}function o(e,t){var r=e[t.place++];if(!(128&r))return r;for(var n=15&r,i=0,o=0,a=t.place;o<n;o++,a++)i<<=8,i|=e[a];return t.place=a,i}function a(e){for(var t=0,r=e.length-1;!e[t]&&!(128&e[t+1])&&t<r;)t++;return 0===t?e:e.slice(t)}function f(e,t){if(t<128)return void e.push(t);var r=1+(Math.log(t)/Math.LN2>>>3);for(e.push(128|r);--r;)e.push(t>>>(r<<3)&255);e.push(t)}var s=r(3),c=r(4),u=c.utils,h=u.assert;e.exports=n,n.prototype._importDER=function(e,t){e=u.toArray(e,t);var r=new i;if(48!==e[r.place++])return!1;if(o(e,r)+r.place!==e.length)return!1;if(2!==e[r.place++])return!1;var n=o(e,r),a=e.slice(r.place,n+r.place);if(r.place+=n,2!==e[r.place++])return!1;var f=o(e,r);if(e.length!==f+r.place)return!1;var c=e.slice(r.place,f+r.place);return 0===a[0]&&128&a[1]&&(a=a.slice(1)),0===c[0]&&128&c[1]&&(c=c.slice(1)),this.r=new s(a),this.s=new s(c),this.recoveryParam=null,!0},n.prototype.toDER=function(e){var t=this.r.toArray(),r=this.s.toArray();for(128&t[0]&&(t=[0].concat(t)),128&r[0]&&(r=[0].concat(r)),t=a(t),r=a(r);!(r[0]||128&r[1]);)r=r.slice(1);var n=[2];f(n,t.length),n=n.concat(t),n.push(2),f(n,r.length);var i=n.concat(r),o=[48];return f(o,i.length),o=o.concat(i),u.encode(o,e)}},function(e,t,r){"use strict";function n(e){if(f("ed25519"===e,"only tested with ed25519 so far"),!(this instanceof n))return new n(e);var e=o.curves[e].curve;this.curve=e,this.g=e.g,this.g.precompute(e.n.bitLength()+1),this.pointClass=e.point().constructor,this.encodingLength=Math.ceil(e.n.bitLength()/8),this.hash=i.sha512}var i=r(68),o=r(4),a=o.utils,f=a.assert,s=a.parseBytes,c=r(231),u=r(232);e.exports=n,n.prototype.sign=function(e,t){e=s(e);var r=this.keyFromSecret(t),n=this.hashInt(r.messagePrefix(),e),i=this.g.mul(n),o=this.encodePoint(i),a=this.hashInt(o,r.pubBytes(),e).mul(r.priv()),f=n.add(a).umod(this.curve.n);return this.makeSignature({R:i,S:f,Rencoded:o})},n.prototype.verify=function(e,t,r){e=s(e),t=this.makeSignature(t);var n=this.keyFromPublic(r),i=this.hashInt(t.Rencoded(),n.pubBytes(),e),o=this.g.mul(t.S());return t.R().add(n.pub().mul(i)).eq(o)},n.prototype.hashInt=function(){for(var e=this.hash(),t=0;t<arguments.length;t++)e.update(arguments[t]);return a.intFromLE(e.digest()).umod(this.curve.n)},n.prototype.keyFromPublic=function(e){return c.fromPublic(this,e)},n.prototype.keyFromSecret=function(e){return c.fromSecret(this,e)},n.prototype.makeSignature=function(e){return e instanceof u?e:new u(this,e)},n.prototype.encodePoint=function(e){var t=e.getY().toArray("le",this.encodingLength);return t[this.encodingLength-1]|=e.getX().isOdd()?128:0,t},n.prototype.decodePoint=function(e){e=a.parseBytes(e);var t=e.length-1,r=e.slice(0,t).concat(-129&e[t]),n=0!=(128&e[t]),i=a.intFromLE(r);return this.curve.pointFromY(i,n)},n.prototype.encodeInt=function(e){return e.toArray("le",this.encodingLength)},n.prototype.decodeInt=function(e){return a.intFromLE(e)},n.prototype.isPoint=function(e){return e instanceof this.pointClass}},function(e,t,r){"use strict";function n(e,t){this.eddsa=e,this._secret=f(t.secret),e.isPoint(t.pub)?this._pub=t.pub:this._pubBytes=f(t.pub)}var i=r(4),o=i.utils,a=o.assert,f=o.parseBytes,s=o.cachedProperty;n.fromPublic=function(e,t){return t instanceof n?t:new n(e,{pub:t})},n.fromSecret=function(e,t){return t instanceof n?t:new n(e,{secret:t})},n.prototype.secret=function(){return this._secret},s(n,"pubBytes",function(){return this.eddsa.encodePoint(this.pub())}),s(n,"pub",function(){return this._pubBytes?this.eddsa.decodePoint(this._pubBytes):this.eddsa.g.mul(this.priv())}),s(n,"privBytes",function(){var e=this.eddsa,t=this.hash(),r=e.encodingLength-1,n=t.slice(0,e.encodingLength);return n[0]&=248,n[r]&=127,n[r]|=64,n}),s(n,"priv",function(){return this.eddsa.decodeInt(this.privBytes())}),s(n,"hash",function(){return this.eddsa.hash().update(this.secret()).digest()}),s(n,"messagePrefix",function(){return this.hash().slice(this.eddsa.encodingLength)}),n.prototype.sign=function(e){return a(this._secret,"KeyPair can only verify"),this.eddsa.sign(e,this)},n.prototype.verify=function(e,t){return this.eddsa.verify(e,t,this)},n.prototype.getSecret=function(e){return a(this._secret,"KeyPair is public only"),o.encode(this.secret(),e)},n.prototype.getPublic=function(e){return o.encode(this.pubBytes(),e)},e.exports=n},function(e,t,r){"use strict";function n(e,t){this.eddsa=e,"object"!=typeof t&&(t=c(t)),Array.isArray(t)&&(t={R:t.slice(0,e.encodingLength),S:t.slice(e.encodingLength)}),f(t.R&&t.S,"Signature without R or S"),e.isPoint(t.R)&&(this._R=t.R),t.S instanceof i&&(this._S=t.S),this._Rencoded=Array.isArray(t.R)?t.R:t.Rencoded,this._Sencoded=Array.isArray(t.S)?t.S:t.Sencoded}var i=r(3),o=r(4),a=o.utils,f=a.assert,s=a.cachedProperty,c=a.parseBytes;s(n,"S",function(){return this.eddsa.decodeInt(this.Sencoded())}),s(n,"R",function(){return this.eddsa.decodePoint(this.Rencoded())}),s(n,"Rencoded",function(){return this.eddsa.encodePoint(this.R())}),s(n,"Sencoded",function(){return this.eddsa.encodeInt(this.S())}),n.prototype.toBytes=function(){return this.Rencoded().concat(this.Sencoded())},n.prototype.toHex=function(){return a.encode(this.toBytes(),"hex").toUpperCase()},e.exports=n},function(e,t,r){"use strict";var n=r(26);t.certificate=r(244);var i=n.define("RSAPrivateKey",function(){this.seq().obj(this.key("version").int(),this.key("modulus").int(),this.key("publicExponent").int(),this.key("privateExponent").int(),this.key("prime1").int(),this.key("prime2").int(),this.key("exponent1").int(),this.key("exponent2").int(),this.key("coefficient").int())});t.RSAPrivateKey=i;var o=n.define("RSAPublicKey",function(){this.seq().obj(this.key("modulus").int(),this.key("publicExponent").int())});t.RSAPublicKey=o;var a=n.define("SubjectPublicKeyInfo",function(){this.seq().obj(this.key("algorithm").use(f),this.key("subjectPublicKey").bitstr())});t.PublicKey=a;var f=n.define("AlgorithmIdentifier",function(){this.seq().obj(this.key("algorithm").objid(),this.key("none").null_().optional(),this.key("curve").objid().optional(),this.key("params").seq().obj(this.key("p").int(),this.key("q").int(),this.key("g").int()).optional())}),s=n.define("PrivateKeyInfo",function(){this.seq().obj(this.key("version").int(),this.key("algorithm").use(f),this.key("subjectPrivateKey").octstr())});t.PrivateKey=s;var c=n.define("EncryptedPrivateKeyInfo",function(){this.seq().obj(this.key("algorithm").seq().obj(this.key("id").objid(),this.key("decrypt").seq().obj(this.key("kde").seq().obj(this.key("id").objid(),this.key("kdeparams").seq().obj(this.key("salt").octstr(),this.key("iters").int())),this.key("cipher").seq().obj(this.key("algo").objid(),this.key("iv").octstr()))),this.key("subjectPrivateKey").octstr())});t.EncryptedPrivateKey=c;var u=n.define("DSAPrivateKey",function(){this.seq().obj(this.key("version").int(),this.key("p").int(),this.key("q").int(),this.key("g").int(),this.key("pub_key").int(),this.key("priv_key").int())});t.DSAPrivateKey=u,t.DSAparam=n.define("DSAparam",function(){this.int()});var h=n.define("ECPrivateKey",function(){this.seq().obj(this.key("version").int(),this.key("privateKey").octstr(),this.key("parameters").optional().explicit(0).use(d),this.key("publicKey").optional().explicit(1).bitstr())});t.ECPrivateKey=h;var d=n.define("ECParameters",function(){this.choice({namedCurve:this.objid()})});t.signature=n.define("signature",function(){this.seq().obj(this.key("r").int(),this.key("s").int())})},function(e,t,r){function n(e,t){this.name=e,this.body=t,this.decoders={},this.encoders={}}var i=r(26),o=r(0);t.define=function(e,t){return new n(e,t)},n.prototype._createNamed=function(e){var t;try{t=r(235).runInThisContext("(function "+this.name+"(entity) {\n  this._initNamed(entity);\n})")}catch(e){t=function(e){this._initNamed(e)}}return o(t,e),t.prototype._initNamed=function(t){e.call(this,t)},new t(this)},n.prototype._getDecoder=function(e){return e=e||"der",this.decoders.hasOwnProperty(e)||(this.decoders[e]=this._createNamed(i.decoders[e])),this.decoders[e]},n.prototype.decode=function(e,t,r){return this._getDecoder(t).decode(e,r)},n.prototype._getEncoder=function(e){return e=e||"der",this.encoders.hasOwnProperty(e)||(this.encoders[e]=this._createNamed(i.encoders[e])),this.encoders[e]},n.prototype.encode=function(e,t,r){return this._getEncoder(t).encode(e,r)}},function(module,exports,__webpack_require__){function Context(){}var indexOf=__webpack_require__(236),Object_keys=function(e){if(Object.keys)return Object.keys(e);var t=[];for(var r in e)t.push(r);return t},forEach=function(e,t){if(e.forEach)return e.forEach(t);for(var r=0;r<e.length;r++)t(e[r],r,e)},defineProp=function(){try{return Object.defineProperty({},"_",{}),function(e,t,r){Object.defineProperty(e,t,{writable:!0,enumerable:!1,configurable:!0,value:r})}}catch(e){return function(e,t,r){e[t]=r}}}(),globals=["Array","Boolean","Date","Error","EvalError","Function","Infinity","JSON","Math","NaN","Number","Object","RangeError","ReferenceError","RegExp","String","SyntaxError","TypeError","URIError","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","eval","isFinite","isNaN","parseFloat","parseInt","undefined","unescape"];Context.prototype={};var Script=exports.Script=function(e){if(!(this instanceof Script))return new Script(e);this.code=e};Script.prototype.runInContext=function(e){if(!(e instanceof Context))throw new TypeError("needs a 'context' argument.");var t=document.createElement("iframe");t.style||(t.style={}),t.style.display="none",document.body.appendChild(t);var r=t.contentWindow,n=r.eval,i=r.execScript;!n&&i&&(i.call(r,"null"),n=r.eval),forEach(Object_keys(e),function(t){r[t]=e[t]}),forEach(globals,function(t){e[t]&&(r[t]=e[t])});var o=Object_keys(r),a=n.call(r,this.code);return forEach(Object_keys(r),function(t){(t in e||-1===indexOf(o,t))&&(e[t]=r[t])}),forEach(globals,function(t){t in e||defineProp(e,t,r[t])}),document.body.removeChild(t),a},Script.prototype.runInThisContext=function(){return eval(this.code)},Script.prototype.runInNewContext=function(e){var t=Script.createContext(e),r=this.runInContext(t);return forEach(Object_keys(t),function(r){e[r]=t[r]}),r},forEach(Object_keys(Script.prototype),function(e){exports[e]=Script[e]=function(t){var r=Script(t);return r[e].apply(r,[].slice.call(arguments,1))}}),exports.createScript=function(e){return exports.Script(e)},exports.createContext=Script.createContext=function(e){var t=new Context;return"object"==typeof e&&forEach(Object_keys(e),function(r){t[r]=e[r]}),t}},function(e,t){var r=[].indexOf;e.exports=function(e,t){if(r)return e.indexOf(t);for(var n=0;n<e.length;++n)if(e[n]===t)return n;return-1}},function(e,t,r){function n(e){this._reporterState={obj:null,path:[],options:e||{},errors:[]}}function i(e,t){this.path=e,this.rethrow(t)}var o=r(0);t.Reporter=n,n.prototype.isError=function(e){return e instanceof i},n.prototype.save=function(){var e=this._reporterState;return{obj:e.obj,pathLen:e.path.length}},n.prototype.restore=function(e){var t=this._reporterState;t.obj=e.obj,t.path=t.path.slice(0,e.pathLen)},n.prototype.enterKey=function(e){return this._reporterState.path.push(e)},n.prototype.exitKey=function(e){var t=this._reporterState;t.path=t.path.slice(0,e-1)},n.prototype.leaveKey=function(e,t,r){var n=this._reporterState;this.exitKey(e),null!==n.obj&&(n.obj[t]=r)},n.prototype.path=function(){return this._reporterState.path.join("/")},n.prototype.enterObject=function(){var e=this._reporterState,t=e.obj;return e.obj={},t},n.prototype.leaveObject=function(e){var t=this._reporterState,r=t.obj;return t.obj=e,r},n.prototype.error=function(e){var t,r=this._reporterState,n=e instanceof i;if(t=n?e:new i(r.path.map(function(e){return"["+JSON.stringify(e)+"]"}).join(""),e.message||e,e.stack),!r.options.partial)throw t;return n||r.errors.push(t),t},n.prototype.wrapResult=function(e){var t=this._reporterState;return t.options.partial?{result:this.isError(e)?null:e,errors:t.errors}:e},o(i,Error),i.prototype.rethrow=function(e){if(this.message=e+" at: "+(this.path||"(shallow)"),Error.captureStackTrace&&Error.captureStackTrace(this,i),!this.stack)try{throw new Error(this.message)}catch(e){this.stack=e.stack}return this}},function(e,t,r){function n(e,t){var r={};this._baseState=r,r.enc=e,r.parent=t||null,r.children=null,r.tag=null,r.args=null,r.reverseArgs=null,r.choice=null,r.optional=!1,r.any=!1,r.obj=!1,r.use=null,r.useDecoder=null,r.key=null,r.default=null,r.explicit=null,r.implicit=null,r.contains=null,r.parent||(r.children=[],this._wrap())}var i=r(27).Reporter,o=r(27).EncoderBuffer,a=r(27).DecoderBuffer,f=r(5),s=["seq","seqof","set","setof","objid","bool","gentime","utctime","null_","enum","int","objDesc","bitstr","bmpstr","charstr","genstr","graphstr","ia5str","iso646str","numstr","octstr","printstr","t61str","unistr","utf8str","videostr"],c=["key","obj","use","optional","explicit","implicit","def","choice","any","contains"].concat(s),u=["_peekTag","_decodeTag","_use","_decodeStr","_decodeObjid","_decodeTime","_decodeNull","_decodeInt","_decodeBool","_decodeList","_encodeComposite","_encodeStr","_encodeObjid","_encodeTime","_encodeNull","_encodeInt","_encodeBool"];e.exports=n;var h=["enc","parent","children","tag","args","reverseArgs","choice","optional","any","obj","use","alteredUse","key","default","explicit","implicit","contains"];n.prototype.clone=function(){var e=this._baseState,t={};h.forEach(function(r){t[r]=e[r]});var r=new this.constructor(t.parent);return r._baseState=t,r},n.prototype._wrap=function(){var e=this._baseState;c.forEach(function(t){this[t]=function(){var r=new this.constructor(this);return e.children.push(r),r[t].apply(r,arguments)}},this)},n.prototype._init=function(e){var t=this._baseState;f(null===t.parent),e.call(this),t.children=t.children.filter(function(e){return e._baseState.parent===this},this),f.equal(t.children.length,1,"Root node can have only one child")},n.prototype._useArgs=function(e){var t=this._baseState,r=e.filter(function(e){return e instanceof this.constructor},this);e=e.filter(function(e){return!(e instanceof this.constructor)},this),0!==r.length&&(f(null===t.children),t.children=r,r.forEach(function(e){e._baseState.parent=this},this)),0!==e.length&&(f(null===t.args),t.args=e,t.reverseArgs=e.map(function(e){if("object"!=typeof e||e.constructor!==Object)return e;var t={};return Object.keys(e).forEach(function(r){r==(0|r)&&(r|=0);var n=e[r];t[n]=r}),t}))},u.forEach(function(e){n.prototype[e]=function(){var t=this._baseState;throw new Error(e+" not implemented for encoding: "+t.enc)}}),s.forEach(function(e){n.prototype[e]=function(){var t=this._baseState,r=Array.prototype.slice.call(arguments);return f(null===t.tag),t.tag=e,this._useArgs(r),this}}),n.prototype.use=function(e){f(e);var t=this._baseState;return f(null===t.use),t.use=e,this},n.prototype.optional=function(){return this._baseState.optional=!0,this},n.prototype.def=function(e){var t=this._baseState;return f(null===t.default),t.default=e,t.optional=!0,this},n.prototype.explicit=function(e){var t=this._baseState;return f(null===t.explicit&&null===t.implicit),t.explicit=e,this},n.prototype.implicit=function(e){var t=this._baseState;return f(null===t.explicit&&null===t.implicit),t.implicit=e,this},n.prototype.obj=function(){var e=this._baseState,t=Array.prototype.slice.call(arguments);return e.obj=!0,0!==t.length&&this._useArgs(t),this},n.prototype.key=function(e){var t=this._baseState;return f(null===t.key),t.key=e,this},n.prototype.any=function(){return this._baseState.any=!0,this},n.prototype.choice=function(e){var t=this._baseState;return f(null===t.choice),t.choice=e,this._useArgs(Object.keys(e).map(function(t){return e[t]})),this},n.prototype.contains=function(e){var t=this._baseState;return f(null===t.use),t.contains=e,this},n.prototype._decode=function(e,t){var r=this._baseState;if(null===r.parent)return e.wrapResult(r.children[0]._decode(e,t));var n=r.default,i=!0,o=null;if(null!==r.key&&(o=e.enterKey(r.key)),r.optional){var f=null;if(null!==r.explicit?f=r.explicit:null!==r.implicit?f=r.implicit:null!==r.tag&&(f=r.tag),null!==f||r.any){if(i=this._peekTag(e,f,r.any),e.isError(i))return i}else{var s=e.save();try{null===r.choice?this._decodeGeneric(r.tag,e,t):this._decodeChoice(e,t),i=!0}catch(e){i=!1}e.restore(s)}}var c;if(r.obj&&i&&(c=e.enterObject()),i){if(null!==r.explicit){var u=this._decodeTag(e,r.explicit);if(e.isError(u))return u;e=u}var h=e.offset;if(null===r.use&&null===r.choice){if(r.any)var s=e.save();var d=this._decodeTag(e,null!==r.implicit?r.implicit:r.tag,r.any);if(e.isError(d))return d;r.any?n=e.raw(s):e=d}if(t&&t.track&&null!==r.tag&&t.track(e.path(),h,e.length,"tagged"),t&&t.track&&null!==r.tag&&t.track(e.path(),e.offset,e.length,"content"),n=r.any?n:null===r.choice?this._decodeGeneric(r.tag,e,t):this._decodeChoice(e,t),e.isError(n))return n;if(r.any||null!==r.choice||null===r.children||r.children.forEach(function(r){r._decode(e,t)}),r.contains&&("octstr"===r.tag||"bitstr"===r.tag)){var l=new a(n);n=this._getUse(r.contains,e._reporterState.obj)._decode(l,t)}}return r.obj&&i&&(n=e.leaveObject(c)),null===r.key||null===n&&!0!==i?null!==o&&e.exitKey(o):e.leaveKey(o,r.key,n),n},n.prototype._decodeGeneric=function(e,t,r){var n=this._baseState;return"seq"===e||"set"===e?null:"seqof"===e||"setof"===e?this._decodeList(t,e,n.args[0],r):/str$/.test(e)?this._decodeStr(t,e,r):"objid"===e&&n.args?this._decodeObjid(t,n.args[0],n.args[1],r):"objid"===e?this._decodeObjid(t,null,null,r):"gentime"===e||"utctime"===e?this._decodeTime(t,e,r):"null_"===e?this._decodeNull(t,r):"bool"===e?this._decodeBool(t,r):"objDesc"===e?this._decodeStr(t,e,r):"int"===e||"enum"===e?this._decodeInt(t,n.args&&n.args[0],r):null!==n.use?this._getUse(n.use,t._reporterState.obj)._decode(t,r):t.error("unknown tag: "+e)},n.prototype._getUse=function(e,t){var r=this._baseState;return r.useDecoder=this._use(e,t),f(null===r.useDecoder._baseState.parent),r.useDecoder=r.useDecoder._baseState.children[0],r.implicit!==r.useDecoder._baseState.implicit&&(r.useDecoder=r.useDecoder.clone(),r.useDecoder._baseState.implicit=r.implicit),r.useDecoder},n.prototype._decodeChoice=function(e,t){var r=this._baseState,n=null,i=!1;return Object.keys(r.choice).some(function(o){var a=e.save(),f=r.choice[o];try{var s=f._decode(e,t);if(e.isError(s))return!1;n={type:o,value:s},i=!0}catch(t){return e.restore(a),!1}return!0},this),i?n:e.error("Choice not matched")},n.prototype._createEncoderBuffer=function(e){return new o(e,this.reporter)},n.prototype._encode=function(e,t,r){var n=this._baseState;if(null===n.default||n.default!==e){var i=this._encodeValue(e,t,r);if(void 0!==i&&!this._skipDefault(i,t,r))return i}},n.prototype._encodeValue=function(e,t,r){var n=this._baseState;if(null===n.parent)return n.children[0]._encode(e,t||new i);var o=null;if(this.reporter=t,n.optional&&void 0===e){if(null===n.default)return;e=n.default}var a=null,f=!1;if(n.any)o=this._createEncoderBuffer(e);else if(n.choice)o=this._encodeChoice(e,t);else if(n.contains)a=this._getUse(n.contains,r)._encode(e,t),f=!0;else if(n.children)a=n.children.map(function(r){if("null_"===r._baseState.tag)return r._encode(null,t,e);if(null===r._baseState.key)return t.error("Child should have a key");var n=t.enterKey(r._baseState.key);if("object"!=typeof e)return t.error("Child expected, but input is not object");var i=r._encode(e[r._baseState.key],t,e);return t.leaveKey(n),i},this).filter(function(e){return e}),a=this._createEncoderBuffer(a);else if("seqof"===n.tag||"setof"===n.tag){if(!n.args||1!==n.args.length)return t.error("Too many args for : "+n.tag);if(!Array.isArray(e))return t.error("seqof/setof, but data is not Array");var s=this.clone();s._baseState.implicit=null,a=this._createEncoderBuffer(e.map(function(r){var n=this._baseState;return this._getUse(n.args[0],e)._encode(r,t)},s))}else null!==n.use?o=this._getUse(n.use,r)._encode(e,t):(a=this._encodePrimitive(n.tag,e),f=!0);var o;if(!n.any&&null===n.choice){var c=null!==n.implicit?n.implicit:n.tag,u=null===n.implicit?"universal":"context";null===c?null===n.use&&t.error("Tag could be ommited only for .use()"):null===n.use&&(o=this._encodeComposite(c,f,u,a))}return null!==n.explicit&&(o=this._encodeComposite(n.explicit,!1,"context",o)),o},n.prototype._encodeChoice=function(e,t){var r=this._baseState,n=r.choice[e.type];return n||f(!1,e.type+" not found in "+JSON.stringify(Object.keys(r.choice))),n._encode(e.value,t)},n.prototype._encodePrimitive=function(e,t){var r=this._baseState;if(/str$/.test(e))return this._encodeStr(t,e);if("objid"===e&&r.args)return this._encodeObjid(t,r.reverseArgs[0],r.args[1]);if("objid"===e)return this._encodeObjid(t,null,null);if("gentime"===e||"utctime"===e)return this._encodeTime(t,e);if("null_"===e)return this._encodeNull();if("int"===e||"enum"===e)return this._encodeInt(t,r.args&&r.reverseArgs[0]);if("bool"===e)return this._encodeBool(t);if("objDesc"===e)return this._encodeStr(t,e);throw new Error("Unsupported tag: "+e)},n.prototype._isNumstr=function(e){return/^[0-9 ]*$/.test(e)},n.prototype._isPrintstr=function(e){return/^[A-Za-z0-9 '\(\)\+,\-\.\/:=\?]*$/.test(e)}},function(e,t,r){var n=r(108);t.tagClass={0:"universal",1:"application",2:"context",3:"private"},t.tagClassByName=n._reverse(t.tagClass),t.tag={0:"end",1:"bool",2:"int",3:"bitstr",4:"octstr",5:"null_",6:"objid",7:"objDesc",8:"external",9:"real",10:"enum",11:"embed",12:"utf8str",13:"relativeOid",16:"seq",17:"set",18:"numstr",19:"printstr",20:"t61str",21:"videostr",22:"ia5str",23:"utctime",24:"gentime",25:"graphstr",26:"iso646str",27:"genstr",28:"unistr",29:"charstr",30:"bmpstr"},t.tagByName=n._reverse(t.tag)},function(e,t,r){var n=t;n.der=r(109),n.pem=r(241)},function(e,t,r){function n(e){a.call(this,e),this.enc="pem"}var i=r(0),o=r(1).Buffer,a=r(109);i(n,a),e.exports=n,n.prototype.decode=function(e,t){for(var r=e.toString().split(/[\r\n]+/g),n=t.label.toUpperCase(),i=/^-----(BEGIN|END) ([^-]+)-----$/,f=-1,s=-1,c=0;c<r.length;c++){var u=r[c].match(i);if(null!==u&&u[2]===n){if(-1!==f){if("END"!==u[1])break;s=c;break}if("BEGIN"!==u[1])break;f=c}}if(-1===f||-1===s)throw new Error("PEM section not found for: "+n);var h=r.slice(f+1,s).join("");h.replace(/[^a-z0-9\+\/=]+/gi,"");var d=new o(h,"base64");return a.prototype.decode.call(this,d,t)}},function(e,t,r){var n=t;n.der=r(110),n.pem=r(243)},function(e,t,r){function n(e){o.call(this,e),this.enc="pem"}var i=r(0),o=r(110);i(n,o),e.exports=n,n.prototype.encode=function(e,t){for(var r=o.prototype.encode.call(this,e),n=r.toString("base64"),i=["-----BEGIN "+t.label+"-----"],a=0;a<n.length;a+=64)i.push(n.slice(a,a+64));return i.push("-----END "+t.label+"-----"),i.join("\n")}},function(e,t,r){"use strict";var n=r(26),i=n.define("Time",function(){this.choice({utcTime:this.utctime(),generalTime:this.gentime()})}),o=n.define("AttributeTypeValue",function(){this.seq().obj(this.key("type").objid(),this.key("value").any())}),a=n.define("AlgorithmIdentifier",function(){this.seq().obj(this.key("algorithm").objid(),this.key("parameters").optional())}),f=n.define("SubjectPublicKeyInfo",function(){this.seq().obj(this.key("algorithm").use(a),this.key("subjectPublicKey").bitstr())}),s=n.define("RelativeDistinguishedName",function(){this.setof(o)}),c=n.define("RDNSequence",function(){this.seqof(s)}),u=n.define("Name",function(){this.choice({rdnSequence:this.use(c)})}),h=n.define("Validity",function(){this.seq().obj(this.key("notBefore").use(i),this.key("notAfter").use(i))}),d=n.define("Extension",function(){this.seq().obj(this.key("extnID").objid(),this.key("critical").bool().def(!1),this.key("extnValue").octstr())}),l=n.define("TBSCertificate",function(){this.seq().obj(this.key("version").explicit(0).int(),this.key("serialNumber").int(),this.key("signature").use(a),this.key("issuer").use(u),this.key("validity").use(h),this.key("subject").use(u),this.key("subjectPublicKeyInfo").use(f),this.key("issuerUniqueID").implicit(1).bitstr().optional(),this.key("subjectUniqueID").implicit(2).bitstr().optional(),this.key("extensions").explicit(3).seqof(d).optional())}),p=n.define("X509Certificate",function(){this.seq().obj(this.key("tbsCertificate").use(l),this.key("signatureAlgorithm").use(a),this.key("signatureValue").bitstr())});e.exports=p},function(e,t){e.exports={"2.16.840.1.101.3.4.1.1":"aes-128-ecb","2.16.840.1.101.3.4.1.2":"aes-128-cbc","2.16.840.1.101.3.4.1.3":"aes-128-ofb","2.16.840.1.101.3.4.1.4":"aes-128-cfb","2.16.840.1.101.3.4.1.21":"aes-192-ecb","2.16.840.1.101.3.4.1.22":"aes-192-cbc","2.16.840.1.101.3.4.1.23":"aes-192-ofb","2.16.840.1.101.3.4.1.24":"aes-192-cfb","2.16.840.1.101.3.4.1.41":"aes-256-ecb","2.16.840.1.101.3.4.1.42":"aes-256-cbc","2.16.840.1.101.3.4.1.43":"aes-256-ofb","2.16.840.1.101.3.4.1.44":"aes-256-cfb"}},function(e,t,r){(function(t){var n=/Proc-Type: 4,ENCRYPTED\n\r?DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)\n\r?\n\r?([0-9A-z\n\r\+\/\=]+)\n\r?/m,i=/^-----BEGIN ((?:.* KEY)|CERTIFICATE)-----\n/m,o=/^-----BEGIN ((?:.* KEY)|CERTIFICATE)-----\n\r?([0-9A-z\n\r\+\/\=]+)\n\r?-----END \1-----$/m,a=r(38),f=r(64);e.exports=function(e,r){var s,c=e.toString(),u=c.match(n);if(u){var h="aes"+u[1],d=new t(u[2],"hex"),l=new t(u[3].replace(/\r?\n/g,""),"base64"),p=a(r,d.slice(0,8),parseInt(u[1],10)).key,b=[],y=f.createDecipheriv(h,p,d);b.push(y.update(l)),b.push(y.final()),s=t.concat(b)}else{var v=c.match(o);s=new t(v[2].replace(/\r?\n/g,""),"base64")}return{tag:c.match(i)[1],data:s}}}).call(t,r(1).Buffer)},function(e,t,r){(function(t){function n(e,r,n,a,s){var u=c(n);if("ec"===u.type){if("ecdsa"!==a&&"ecdsa/rsa"!==a)throw new Error("wrong public key type");return i(e,r,u)}if("dsa"===u.type){if("dsa"!==a)throw new Error("wrong public key type");return o(e,r,u)}if("rsa"!==a&&"ecdsa/rsa"!==a)throw new Error("wrong public key type");r=t.concat([s,r]);for(var h=u.modulus.byteLength(),d=[1],l=0;r.length+d.length+2<h;)d.push(255),l++;d.push(0);for(var p=-1;++p<r.length;)d.push(r[p]);d=new t(d);var b=f.mont(u.modulus);e=new f(e).toRed(b),e=e.redPow(new f(u.publicExponent)),e=new t(e.fromRed().toArray());var y=l<8?1:0;for(h=Math.min(e.length,d.length),e.length!==d.length&&(y=1),p=-1;++p<h;)y|=e[p]^d[p];return 0===y}function i(e,t,r){var n=u[r.data.algorithm.curve.join(".")];if(!n)throw new Error("unknown curve "+r.data.algorithm.curve.join("."));var i=new s(n),o=r.data.subjectPrivateKey.data;return i.verify(t,e,o)}function o(e,t,r){var n=r.data.p,i=r.data.q,o=r.data.g,s=r.data.pub_key,u=c.signature.decode(e,"der"),h=u.s,d=u.r;a(h,i),a(d,i);var l=f.mont(n),p=h.invm(i);return 0===o.toRed(l).redPow(new f(t).mul(p).mod(i)).fromRed().mul(s.toRed(l).redPow(d.mul(p).mod(i)).fromRed()).mod(n).mod(i).cmp(d)}function a(e,t){if(e.cmpn(0)<=0)throw new Error("invalid sig");if(e.cmp(t)>=t)throw new Error("invalid sig")}var f=r(3),s=r(4).ec,c=r(41),u=r(111);e.exports=n}).call(t,r(1).Buffer)},function(e,t,r){(function(t){function n(e){this.curveType=f[e],this.curveType||(this.curveType={name:e}),this.curve=new o.ec(this.curveType.name),this.keys=void 0}function i(e,r,n){Array.isArray(e)||(e=e.toArray());var i=new t(e);if(n&&i.length<n){var o=new t(n-i.length);o.fill(0),i=t.concat([o,i])}return r?i.toString(r):i}var o=r(4),a=r(3);e.exports=function(e){return new n(e)};var f={secp256k1:{name:"secp256k1",byteLength:32},secp224r1:{name:"p224",byteLength:28},prime256v1:{name:"p256",byteLength:32},prime192v1:{name:"p192",byteLength:24},ed25519:{name:"ed25519",byteLength:32},secp384r1:{name:"p384",byteLength:48},secp521r1:{name:"p521",byteLength:66}};f.p224=f.secp224r1,f.p256=f.secp256r1=f.prime256v1,f.p192=f.secp192r1=f.prime192v1,f.p384=f.secp384r1,f.p521=f.secp521r1,n.prototype.generateKeys=function(e,t){return this.keys=this.curve.genKeyPair(),this.getPublicKey(e,t)},n.prototype.computeSecret=function(e,r,n){return r=r||"utf8",t.isBuffer(e)||(e=new t(e,r)),i(this.curve.keyFromPublic(e).getPublic().mul(this.keys.getPrivate()).getX(),n,this.curveType.byteLength)},n.prototype.getPublicKey=function(e,t){var r=this.keys.getPublic("compressed"===t,!0);return"hybrid"===t&&(r[r.length-1]%2?r[0]=7:r[0]=6),i(r,e)},n.prototype.getPrivateKey=function(e){return i(this.keys.getPrivate(),e)},n.prototype.setPublicKey=function(e,r){return r=r||"utf8",t.isBuffer(e)||(e=new t(e,r)),this.keys._importPublic(e),this},n.prototype.setPrivateKey=function(e,r){r=r||"utf8",t.isBuffer(e)||(e=new t(e,r));var n=new a(e);return n=n.toString(16),this.keys._importPrivate(n),this}}).call(t,r(1).Buffer)},function(e,t,r){t.publicEncrypt=r(250),t.privateDecrypt=r(251),t.privateEncrypt=function(e,r){return t.publicEncrypt(e,r,!0)},t.publicDecrypt=function(e,r){return t.privateDecrypt(e,r,!0)}},function(e,t,r){(function(t){function n(e,r){var n=e.modulus.byteLength(),i=r.length,o=s("sha1").update(new t("")).digest(),a=o.length,d=2*a;if(i>n-d-2)throw new Error("message too long");var l=new t(n-i-d-2);l.fill(0);var p=n-a-1,b=f(a),y=u(t.concat([o,l,new t([1]),r],p),c(b,p)),v=u(b,c(y,a));return new h(t.concat([new t([0]),v,y],n))}function i(e,r,n){var i=r.length,a=e.modulus.byteLength();if(i>a-11)throw new Error("message too long");var f;return n?(f=new t(a-i-3),f.fill(255)):f=o(a-i-3),new h(t.concat([new t([0,n?1:2]),f,new t([0]),r],a))}function o(e,r){for(var n,i=new t(e),o=0,a=f(2*e),s=0;o<e;)s===a.length&&(a=f(2*e),s=0),(n=a[s++])&&(i[o++]=n);return i}var a=r(41),f=r(22),s=r(23),c=r(112),u=r(113),h=r(3),d=r(114),l=r(67);e.exports=function(e,t,r){var o;o=e.padding?e.padding:r?1:4;var f,s=a(e);if(4===o)f=n(s,t);else if(1===o)f=i(s,t,r);else{if(3!==o)throw new Error("unknown padding");if(f=new h(t),f.cmp(s.modulus)>=0)throw new Error("data too long for modulus")}return r?l(f,s):d(f,s)}}).call(t,r(1).Buffer)},function(e,t,r){(function(t){function n(e,r){var n=(e.modulus,e.modulus.byteLength()),i=(r.length,h("sha1").update(new t("")).digest()),a=i.length;if(0!==r[0])throw new Error("decryption error");var c=r.slice(1,a+1),u=r.slice(a+1),d=s(c,f(u,a)),l=s(u,f(d,n-a-1));if(o(i,l.slice(0,a)))throw new Error("decryption error");for(var p=a;0===l[p];)p++;if(1!==l[p++])throw new Error("decryption error");return l.slice(p)}function i(e,t,r){for(var n=t.slice(0,2),i=2,o=0;0!==t[i++];)if(i>=t.length){o++;break}var a=t.slice(2,i-1);t.slice(i-1,i);if(("0002"!==n.toString("hex")&&!r||"0001"!==n.toString("hex")&&r)&&o++,a.length<8&&o++,o)throw new Error("decryption error");return t.slice(i)}function o(e,r){e=new t(e),r=new t(r);var n=0,i=e.length;e.length!==r.length&&(n++,i=Math.min(e.length,r.length));for(var o=-1;++o<i;)n+=e[o]^r[o];return n}var a=r(41),f=r(112),s=r(113),c=r(3),u=r(67),h=r(23),d=r(114);e.exports=function(e,r,o){var f;f=e.padding?e.padding:o?1:4;var s=a(e),h=s.modulus.byteLength();if(r.length>h||new c(r).cmp(s.modulus)>=0)throw new Error("decryption error");var l;l=o?d(new c(r),s):u(r,s);var p=new t(h-l.length);if(p.fill(0),l=t.concat([p,l],h),4===f)return n(s,l);if(1===f)return i(s,l,o);if(3===f)return l;throw new Error("unknown padding")}}).call(t,r(1).Buffer)},function(e,t,r){"use strict";function n(e){if(s.isBuffer(e))return e;if("string"==typeof e)return s.from(e,"base64");throw new TypeError("ECDSA signature must be a Base64 string or a Buffer")}function i(e,t){e=n(e);var r=c(t),i=r+1,o=e.length,a=0;if(e[a++]!==h)throw new Error('Could not find expected "seq"');var l=e[a++];if(l===(1|u)&&(l=e[a++]),o-a<l)throw new Error('"seq" specified length of "'+l+'", only "'+(o-a)+'" remaining');if(e[a++]!==d)throw new Error('Could not find expected "int" for "r"');var p=e[a++];if(o-a-2<p)throw new Error('"r" specified length of "'+p+'", only "'+(o-a-2)+'" available');if(i<p)throw new Error('"r" specified length of "'+p+'", max of "'+i+'" is acceptable');var b=a;if(a+=p,e[a++]!==d)throw new Error('Could not find expected "int" for "s"');var y=e[a++];if(o-a!==y)throw new Error('"s" specified length of "'+y+'", expected "'+(o-a)+'"');if(i<y)throw new Error('"s" specified length of "'+y+'", max of "'+i+'" is acceptable');var v=a;if((a+=y)!==o)throw new Error('Expected to consume entire buffer, but "'+(o-a)+'" bytes remain');var g=r-p,m=r-y,_=s.allocUnsafe(g+p+m+y);for(a=0;a<g;++a)_[a]=0;e.copy(_,a,b+Math.max(-g,0),b+p),a=r;for(var w=a;a<w+m;++a)_[a]=0;return e.copy(_,a,v+Math.max(-m,0),v+y),_=_.toString("base64"),_=f(_)}function o(e,t,r){for(var n=0;t+n<r&&0===e[t+n];)++n;return e[t+n]>=u&&--n,n}function a(e,t){e=n(e);var r=c(t),i=e.length;if(i!==2*r)throw new TypeError('"'+t+'" signatures must be "'+2*r+'" bytes, saw "'+i+'"');var a=o(e,0,r),f=o(e,r,e.length),l=r-a,p=r-f,b=2+l+1+1+p,y=b<u,v=s.allocUnsafe((y?2:3)+b),g=0;return v[g++]=h,y?v[g++]=b:(v[g++]=1|u,v[g++]=255&b),v[g++]=d,v[g++]=l,a<0?(v[g++]=0,g+=e.copy(v,g,0,r)):g+=e.copy(v,g,a,r),v[g++]=d,v[g++]=p,f<0?(v[g++]=0,e.copy(v,g,r)):e.copy(v,g,r+f),v}var f=r(35).fromBase64,s=r(2).Buffer,c=r(253),u=128,h=48,d=2;e.exports={derToJose:i,joseToDer:a}},function(e,t,r){"use strict";function n(e){return(e/8|0)+(e%8==0?0:1)}function i(e){var t=o[e];if(t)return t;throw new Error('Unknown algorithm "'+e+'"')}var o={ES256:n(256),ES384:n(384),ES512:n(521)};e.exports=i},function(e,t,r){function n(e){return"[object Object]"===Object.prototype.toString.call(e)}function i(e){if(n(e))return e;try{return JSON.parse(e)}catch(e){return}}function o(e){var t=e.split(".",1)[0];return i(l.decode(t,"binary"))}function a(e){return e.split(".",2).join(".")}function f(e){return e.split(".")[2]}function s(e,t){t=t||"utf8";var r=e.split(".")[1];return l.decode(r,t)}function c(e){return g.test(e)&&!!o(e)}function u(e,t,r){if(!t){var n=new Error("Missing algorithm parameter for jws.verify");throw n.code="MISSING_ALGORITHM",n}e=v(e);var i=f(e),o=a(e);return b(t).verify(o,i,r)}function h(e,t){if(t=t||{},e=v(e),!c(e))return null;var r=o(e);if(!r)return null;var n=s(e);return("JWT"===r.typ||t.json)&&(n=JSON.parse(n,t.encoding)),{header:r,payload:n,signature:f(e)}}function d(e){e=e||{};var t=e.secret||e.publicKey||e.key,r=new p(t);this.readable=!0,this.algorithm=e.algorithm,this.encoding=e.encoding,this.secret=this.publicKey=this.key=r,this.signature=new p(e.signature),this.secret.once("close",function(){!this.signature.writable&&this.readable&&this.verify()}.bind(this)),this.signature.once("close",function(){!this.secret.writable&&this.readable&&this.verify()}.bind(this))}var l=r(35),p=r(81),b=r(86),y=r(12),v=r(115),g=/^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;r(37).inherits(d,y),d.prototype.verify=function(){try{var e=u(this.signature.buffer,this.algorithm,this.key.buffer),t=h(this.signature.buffer,this.encoding);return this.emit("done",e,t),this.emit("data",e),this.emit("end"),this.readable=!1,e}catch(e){this.readable=!1,this.emit("error",e),this.emit("close")}},d.decode=h,d.isValid=c,d.verify=u,e.exports=d},function(e,t,r){var n=r(42),i=r(116),o=r(117),a=r(79),f=r(118),s=r(56),c=r(119);e.exports=function(e,t,r,u){"function"!=typeof r||u||(u=r,r={}),r||(r={}),r=c(r);var h;if(h=u||function(e,t){if(e)throw e;return t},r.clockTimestamp&&"number"!=typeof r.clockTimestamp)return h(new n("clockTimestamp must be a number"));var d=r.clockTimestamp||Math.floor(Date.now()/1e3);if(!e)return h(new n("jwt must be provided"));if("string"!=typeof e)return h(new n("jwt must be a string"));var l=e.split(".");if(3!==l.length)return h(new n("jwt malformed"));var p=""!==l[2].trim();if(!p&&t)return h(new n("jwt signature is required"));if(p&&!t)return h(new n("secret or public key must be provided"));p||r.algorithms||(r.algorithms=["none"]),r.algorithms||(r.algorithms=~t.toString().indexOf("BEGIN CERTIFICATE")||~t.toString().indexOf("BEGIN PUBLIC KEY")?["RS256","RS384","RS512","ES256","ES384","ES512"]:~t.toString().indexOf("BEGIN RSA PUBLIC KEY")?["RS256","RS384","RS512"]:["HS256","HS384","HS512"]);var b;try{b=s.decode(e)}catch(e){return h(e)}if(!b)return h(new n("invalid token"));var y=b.header;if(!~r.algorithms.indexOf(y.alg))return h(new n("invalid algorithm"));var v;try{v=s.verify(e,y.alg,t)}catch(e){return h(e)}if(!v)return h(new n("invalid signature"));var g;try{g=a(e)}catch(e){return h(e)}if(void 0!==g.nbf&&!r.ignoreNotBefore){if("number"!=typeof g.nbf)return h(new n("invalid nbf value"));if(g.nbf>d+(r.clockTolerance||0))return h(new i("jwt not active",new Date(1e3*g.nbf)))}if(void 0!==g.exp&&!r.ignoreExpiration){if("number"!=typeof g.exp)return h(new n("invalid exp value"));if(d>=g.exp+(r.clockTolerance||0))return h(new o("jwt expired",new Date(1e3*g.exp)))}if(r.audience){var m=Array.isArray(r.audience)?r.audience:[r.audience];if(!(Array.isArray(g.aud)?g.aud:[g.aud]).some(function(e){return m.some(function(t){return t instanceof RegExp?t.test(e):t===e})}))return h(new n("jwt audience invalid. expected: "+m.join(" or ")))}if(r.issuer){if("string"==typeof r.issuer&&g.iss!==r.issuer||Array.isArray(r.issuer)&&-1===r.issuer.indexOf(g.iss))return h(new n("jwt issuer invalid. expected: "+r.issuer))}if(r.subject&&g.sub!==r.subject)return h(new n("jwt subject invalid. expected: "+r.subject));if(r.jwtid&&g.jti!==r.jwtid)return h(new n("jwt jwtid invalid. expected: "+r.jwtid));if(r.maxAge){if("number"!=typeof g.iat)return h(new n("iat required when maxAge is specified"));var _=f(r.maxAge,g.iat);if(void 0===_)return h(new n('"maxAge" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));if(d>=_+(r.clockTolerance||0))return h(new o("maxAge exceeded",new Date(1e3*_)))}return h(null,g)}},function(e,t){function r(e){if(e=String(e),!(e.length>100)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var r=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return r*u;case"days":case"day":case"d":return r*c;case"hours":case"hour":case"hrs":case"hr":case"h":return r*s;case"minutes":case"minute":case"mins":case"min":case"m":return r*f;case"seconds":case"second":case"secs":case"sec":case"s":return r*a;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r;default:return}}}}function n(e){return e>=c?Math.round(e/c)+"d":e>=s?Math.round(e/s)+"h":e>=f?Math.round(e/f)+"m":e>=a?Math.round(e/a)+"s":e+"ms"}function i(e){return o(e,c,"day")||o(e,s,"hour")||o(e,f,"minute")||o(e,a,"second")||e+" ms"}function o(e,t,r){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+r:Math.ceil(e/t)+" "+r+"s"}var a=1e3,f=60*a,s=60*f,c=24*s,u=365.25*c;e.exports=function(e,t){t=t||{};var o=typeof e;if("string"===o&&e.length>0)return r(e);if("number"===o&&!1===isNaN(e))return t.long?i(e):n(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},function(e,t,r){(function(t){function n(e,t,r,n){if(!l(r))throw new Error('Expected "'+n+'" to be a plain object.');Object.keys(r).forEach(function(i){var o=e[i];if(o){if(!o.isValid(r[i]))throw new Error(o.message)}else if(!t)throw new Error('"'+i+'" is not allowed in "'+n+'"')})}function i(e){return n(y,!1,e,"options")}function o(e){return n(v,!0,e,"payload")}var a=r(118),f=r(119),s=r(56),c=r(258),u=r(259),h=r(260),d=r(261),l=r(262),p=r(263),b=r(264),y={expiresIn:{isValid:function(e){return h(e)||p(e)},message:'"expiresIn" should be a number of seconds or string representing a timespan'},notBefore:{isValid:function(e){return h(e)||p(e)},message:'"notBefore" should be a number of seconds or string representing a timespan'},audience:{isValid:function(e){return p(e)||Array.isArray(e)},message:'"audience" must be a string or array'},algorithm:{isValid:c.bind(null,["RS256","RS384","RS512","ES256","ES384","ES512","HS256","HS384","HS512","none"]),message:'"algorithm" must be a valid string enum value'},header:{isValid:l,message:'"header" must be an object'},encoding:{isValid:p,message:'"encoding" must be a string'},issuer:{isValid:p,message:'"issuer" must be a string'},subject:{isValid:p,message:'"subject" must be a string'},jwtid:{isValid:p,message:'"jwtid" must be a string'},noTimestamp:{isValid:u,message:'"noTimestamp" must be a boolean'},keyid:{isValid:p,message:'"keyid" must be a string'}},v={iat:{isValid:d,message:'"iat" should be a number of seconds'},exp:{isValid:d,message:'"exp" should be a number of seconds'},nbf:{isValid:d,message:'"nbf" should be a number of seconds'}},g={audience:"aud",issuer:"iss",subject:"sub",jwtid:"jti"},m=["expiresIn","notBefore","noTimestamp","audience","issuer","subject","jwtid"];e.exports=function(e,r,n,c){function u(e){if(c)return c(e);throw e}"function"==typeof n?(c=n,n={}):n=n||{};var h="object"==typeof e&&!t.isBuffer(e),d=f({alg:n.algorithm||"HS256",typ:h?"JWT":void 0,kid:n.keyid},n.header);if(!r&&"none"!==n.algorithm)return u(new Error("secretOrPrivateKey must have a value"));if(void 0===e)return u(new Error("payload is required"));if(h){try{o(e)}catch(e){return u(e)}e=f(e)}else{var l=m.filter(function(e){return void 0!==n[e]});if(l.length>0)return u(new Error("invalid "+l.join(",")+" option for "+typeof e+" payload"))}if(void 0!==e.exp&&void 0!==n.expiresIn)return u(new Error('Bad "options.expiresIn" option the payload already has an "exp" property.'));if(void 0!==e.nbf&&void 0!==n.notBefore)return u(new Error('Bad "options.notBefore" option the payload already has an "nbf" property.'));try{i(n)}catch(e){return u(e)}var p=e.iat||Math.floor(Date.now()/1e3);if(n.noTimestamp?delete e.iat:e.iat=p,void 0!==n.notBefore&&(e.nbf=a(n.notBefore),void 0===e.nbf))return u(new Error('"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));if(void 0!==n.expiresIn&&"object"==typeof e&&(e.exp=a(n.expiresIn,p),void 0===e.exp))return u(new Error('"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));Object.keys(g).forEach(function(t){var r=g[t];if(void 0!==n[t]){if(void 0!==e[r])return u(new Error('Bad "options.'+t+'" option. The payload already has an "'+r+'" property.'));e[r]=n[t]}});var y=n.encoding||"utf8";if("function"!=typeof c)return s.sign({header:d,payload:e,secret:r,encoding:y});c=c&&b(c),s.createSign({header:d,privateKey:r,payload:e,encoding:y}).once("error",c).once("done",function(e){c(null,e)})}}).call(t,r(1).Buffer)},function(e,t){function r(e,t){for(var r=-1,n=e?e.length:0,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i}function n(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1}function i(e,t,r){if(t!==t)return n(e,o,r);for(var i=r-1,a=e.length;++i<a;)if(e[i]===t)return i;return-1}function o(e){return e!==e}function a(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function f(e,t){return r(t,function(t){return e[t]})}function s(e,t){var r=J(e)||l(e)?a(e.length,String):[],n=r.length,i=!!n;for(var o in e)!t&&!F.call(e,o)||i&&("length"==o||u(o,n))||r.push(o);return r}function c(e){if(!h(e))return Y(e);var t=[];for(var r in Object(e))F.call(e,r)&&"constructor"!=r&&t.push(r);return t}function u(e,t){return!!(t=null==t?B:t)&&("number"==typeof e||U.test(e))&&e>-1&&e%1==0&&e<t}function h(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||K)}function d(e,t,r,n){e=p(e)?e:x(e),r=r&&!n?M(r):0;var o=e.length;return r<0&&(r=W(o+r,0)),_(e)?r<=o&&e.indexOf(t,r)>-1:!!o&&i(e,t,r)>-1}function l(e){return b(e)&&F.call(e,"callee")&&(!V.call(e,"callee")||H.call(e)==R)}function p(e){return null!=e&&v(e.length)&&!y(e)}function b(e){return m(e)&&p(e)}function y(e){var t=g(e)?H.call(e):"";return t==O||t==P}function v(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=B}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function m(e){return!!e&&"object"==typeof e}function _(e){return"string"==typeof e||!J(e)&&m(e)&&H.call(e)==T}function w(e){return"symbol"==typeof e||m(e)&&H.call(e)==C}function S(e){if(!e)return 0===e?e:0;if((e=E(e))===A||e===-A){return(e<0?-1:1)*I}return e===e?e:0}function M(e){var t=S(e),r=t%1;return t===t?r?t-r:t:0}function E(e){if("number"==typeof e)return e;if(w(e))return j;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(D,"");var r=z.test(e);return r||N.test(e)?q(e.slice(2),r?2:8):L.test(e)?j:+e}function k(e){return p(e)?s(e):c(e)}function x(e){return e?f(e,k(e)):[]}var A=1/0,B=9007199254740991,I=1.7976931348623157e308,j=NaN,R="[object Arguments]",O="[object Function]",P="[object GeneratorFunction]",T="[object String]",C="[object Symbol]",D=/^\s+|\s+$/g,L=/^[-+]0x[0-9a-f]+$/i,z=/^0b[01]+$/i,N=/^0o[0-7]+$/i,U=/^(?:0|[1-9]\d*)$/,q=parseInt,K=Object.prototype,F=K.hasOwnProperty,H=K.toString,V=K.propertyIsEnumerable,Y=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),W=Math.max,J=Array.isArray;e.exports=d},function(e,t){function r(e){return!0===e||!1===e||n(e)&&a.call(e)==i}function n(e){return!!e&&"object"==typeof e}var i="[object Boolean]",o=Object.prototype,a=o.toString;e.exports=r},function(e,t){function r(e){return"number"==typeof e&&e==f(e)}function n(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==typeof e}function o(e){return"symbol"==typeof e||i(e)&&m.call(e)==d}function a(e){if(!e)return 0===e?e:0;if((e=s(e))===c||e===-c){return(e<0?-1:1)*u}return e===e?e:0}function f(e){var t=a(e),r=t%1;return t===t?r?t-r:t:0}function s(e){if("number"==typeof e)return e;if(o(e))return h;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var r=b.test(e);return r||y.test(e)?v(e.slice(2),r?2:8):p.test(e)?h:+e}var c=1/0,u=1.7976931348623157e308,h=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,y=/^0o[0-7]+$/i,v=parseInt,g=Object.prototype,m=g.toString;e.exports=r},function(e,t){function r(e){return!!e&&"object"==typeof e}function n(e){return"number"==typeof e||r(e)&&a.call(e)==i}var i="[object Number]",o=Object.prototype,a=o.toString;e.exports=n},function(e,t){function r(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function n(e){return!!e&&"object"==typeof e}function i(e){if(!n(e)||h.call(e)!=o||r(e))return!1;var t=d(e);if(null===t)return!0;var i=c.call(t,"constructor")&&t.constructor;return"function"==typeof i&&i instanceof i&&s.call(i)==u}var o="[object Object]",a=Function.prototype,f=Object.prototype,s=a.toString,c=f.hasOwnProperty,u=s.call(Object),h=f.toString,d=function(e,t){return function(r){return e(t(r))}}(Object.getPrototypeOf,Object);e.exports=i},function(e,t){function r(e){return!!e&&"object"==typeof e}function n(e){return"string"==typeof e||!f(e)&&r(e)&&a.call(e)==i}var i="[object String]",o=Object.prototype,a=o.toString,f=Array.isArray;e.exports=n},function(e,t){function r(e,t){var r;if("function"!=typeof t)throw new TypeError(u);return e=s(e),function(){return--e>0&&(r=t.apply(this,arguments)),e<=1&&(t=void 0),r}}function n(e){return r(2,e)}function i(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function o(e){return!!e&&"object"==typeof e}function a(e){return"symbol"==typeof e||o(e)&&w.call(e)==p}function f(e){if(!e)return 0===e?e:0;if((e=c(e))===h||e===-h){return(e<0?-1:1)*d}return e===e?e:0}function s(e){var t=f(e),r=t%1;return t===t?r?t-r:t:0}function c(e){if("number"==typeof e)return e;if(a(e))return l;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(b,"");var r=v.test(e);return r||g.test(e)?m(e.slice(2),r?2:8):y.test(e)?l:+e}var u="Expected a function",h=1/0,d=1.7976931348623157e308,l=NaN,p="[object Symbol]",b=/^\s+|\s+$/g,y=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,g=/^0o[0-7]+$/i,m=parseInt,_=Object.prototype,w=_.toString;e.exports=n}])});

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vueRouter = __webpack_require__(38);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _Home = __webpack_require__(39);

var _Home2 = _interopRequireDefault(_Home);

var _VideoList = __webpack_require__(12);

var _VideoList2 = _interopRequireDefault(_VideoList);

var _ExternalVideoDetail = __webpack_require__(89);

var _ExternalVideoDetail2 = _interopRequireDefault(_ExternalVideoDetail);

var _WatchList = __webpack_require__(93);

var _WatchList2 = _interopRequireDefault(_WatchList);

var _SignUp = __webpack_require__(97);

var _SignUp2 = _interopRequireDefault(_SignUp);

var _SignIn = __webpack_require__(14);

var _SignIn2 = _interopRequireDefault(_SignIn);

var _Profile = __webpack_require__(101);

var _Profile2 = _interopRequireDefault(_Profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Card from '@/components/app/payment/Card.vue'
// import Invoice from '@/components/app/payment/Invoice.vue'
// import Subscription from '@/components/app/payment/Subscription.vue'
// import Error from '@/components/UIComponent/Error.vue'

// import LocalVideoDetail from '@/components/app/video/detail/LocalVideoDetail.vue'
/*global Vue*/
Vue.use(_vueRouter2.default);

module.exports = new _vueRouter2.default({
    // mode: 'abstract',
    routes: [{
        path: '/',
        name: 'Home',
        component: _Home2.default
    }, {
        path: '/signup',
        name: 'Sign Up',
        component: _SignUp2.default
    }, {
        path: '/signin',
        name: 'Sign In',
        component: _SignIn2.default
    },
    // {
    //     path: '/video',
    //     name: 'VideoList',
    //     component: VideoList
    // },
    {
        path: ':slugId',
        name: 'External Video Detail',
        component: _ExternalVideoDetail2.default
    },
    // {
    //     path: ':slugId',
    //     name: 'Local Video Detail',
    //     component: LocalVideoDetail
    // },
    {
        path: '/watchlist',
        name: 'WatchList',
        component: _WatchList2.default
    },
    // {
    //     path: '/card',
    //     name: 'Card',
    //     component: Card
    // },
    // {
    //     path: '/subscription',
    //     name: 'Subscription',
    //     component: Subscription
    // },
    // {
    //     path: '/invoice',
    //     name: 'Invoice',
    //     component: Invoice
    // },
    {
        path: '/profile',
        name: 'Profile',
        component: _Profile2.default
    }]
});

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
  * vue-router v3.0.1
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if (process.env.NODE_ENV !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

function extend (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  return to
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    process.env.NODE_ENV !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (process.env.NODE_ENV !== 'production') {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(
    path,
    parent,
    pathToRegexpOptions.strict
  );

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (process.env.NODE_ENV !== 'production') {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (process.env.NODE_ENV !== 'production') {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent, strict) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (process.env.NODE_ENV !== 'production') {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (process.env.NODE_ENV !== 'production') {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  // Fix for #1585 for Firefox
  window.history.replaceState({ key: getStateKey() }, '');
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition((shouldScroll), position);
      }).catch(function (err) {
        if (process.env.NODE_ENV !== 'production') {
          assert(false, err.toString());
        }
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          process.env.NODE_ENV !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (expectScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (process.env.NODE_ENV !== 'production') {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  process.env.NODE_ENV !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.0.1';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["default"] = (VueRouter);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(40)
)

/* script */
__vue_exports__ = __webpack_require__(41)

/* template */
var __vue_template__ = __webpack_require__(88)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/home/awecode/test/jus-broadcast/src/views/Home.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-fae5bece"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Layout = __webpack_require__(10);

var _Layout2 = _interopRequireDefault(_Layout);

var _VideoList = __webpack_require__(12);

var _VideoList2 = _interopRequireDefault(_VideoList);

var _SignIn = __webpack_require__(14);

var _SignIn2 = _interopRequireDefault(_SignIn);

var _Helper = __webpack_require__(2);

var _Helper2 = _interopRequireDefault(_Helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//    import WatchList from '@/components/app/video/feature/WatchList'

//    import SignUp from '../components/app/user/SignUp'
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: 'home',
    data: function data() {
        return {};
    },

    components: {
        'layout': _Layout2.default,
        'video-list': _VideoList2.default,
        //            'sign-up': SignUp,
        //            'slider': Slider,
        'sign-in': _SignIn2.default
        //            WatchList
    },
    mixins: [_Helper2.default],
    mounted: function mounted() {
        console.log(this.$route.name);
    }
};
//    import Slider from '../components/UIComponent/Slider'

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = {
  "navigation": {
    "display": "inline"
  },
  "nav-weex-icon": {
    "fontSize": "48",
    "marginRight": 4,
    "float": "left"
  },
  "nav-home-icon": {
    "float": "right"
  },
  "fas": {
    "float": "left"
  }
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _wxcCell = __webpack_require__(11);

var _wxcCell2 = _interopRequireDefault(_wxcCell);

var _wxcIcon = __webpack_require__(52);

var _wxcIcon2 = _interopRequireDefault(_wxcIcon);

var _wxcPopup = __webpack_require__(58);

var _wxcPopup2 = _interopRequireDefault(_wxcPopup);

var _wxcButton = __webpack_require__(1);

var _wxcButton2 = _interopRequireDefault(_wxcButton);

var _MiniBar = __webpack_require__(73);

var _MiniBar2 = _interopRequireDefault(_MiniBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {
  components: { WxcButton: _wxcButton2.default, WxcPopup: _wxcPopup2.default, WxcIcon: _wxcIcon2.default, WxcCell: _wxcCell2.default, MiniBar: _MiniBar2.default },
  data: function data() {
    return {
      isShow: false,
      view: ""
    };
  },
  computed: {
    getRoute: function getRoute() {
      return this.$route.name;
    }
  },
  methods: {
    backIconClicked: function backIconClicked() {

      //      this.$router.push({ path: "/" });
    },

    //    userIconClicked() {
    //      this.isShow = true;
    //    },
    rightButtonClicked: function rightButtonClicked() {
      this.isShow = true;
    },
    overlayClicked: function overlayClicked() {
      this.isShow = false;
    },
    profileCellClicked: function profileCellClicked(e) {
      this.$router.push({ name: "Profile" });
      this.isShow = false;
    },
    watchListCellClicked: function watchListCellClicked() {
      this.$router.push({ name: "WatchList" });
      this.isShow = false;
    },
    cardCellClicked: function cardCellClicked() {
      this.$router.push({ name: "Card" });
      this.isShow = false;
    },
    subscriptionCellClicked: function subscriptionCellClicked() {
      this.$router.push({ name: "Subscription" });
      this.isShow = false;
    },
    invoiceCellClicked: function invoiceCellClicked() {
      this.$router.push({ name: "Invoice" });
      this.isShow = false;
    },
    signOutCellClicked: function signOutCellClicked() {
      var _this = this;

      this.$store.dispatch("logout").then(function () {
        _this.$router.push("/");
      });
    }
  }
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(45)
)

/* script */
__vue_exports__ = __webpack_require__(46)

/* template */
var __vue_template__ = __webpack_require__(51)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/home/awecode/test/jus-broadcast/node_modules/weex-ui/packages/wxc-cell/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-eff0e228"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-cell": {
    "flexDirection": "row",
    "alignItems": "center",
    "paddingLeft": "24",
    "paddingRight": "24",
    "backgroundColor": "#ffffff"
  },
  "cell-margin": {
    "marginBottom": "24"
  },
  "cell-title": {
    "flex": 1
  },
  "cell-indent": {
    "paddingBottom": "30",
    "paddingTop": "30"
  },
  "has-desc": {
    "paddingBottom": "18",
    "paddingTop": "18"
  },
  "cell-top-border": {
    "borderTopColor": "#e2e2e2",
    "borderTopWidth": "1"
  },
  "cell-bottom-border": {
    "borderBottomColor": "#e2e2e2",
    "borderBottomWidth": "1"
  },
  "cell-label-text": {
    "fontSize": "30",
    "color": "#666666",
    "width": "188",
    "marginRight": "10"
  },
  "cell-arrow-icon": {
    "width": "22",
    "height": "22"
  },
  "cell-content": {
    "color": "#333333",
    "fontSize": "30",
    "lineHeight": "40"
  },
  "cell-desc-text": {
    "color": "#999999",
    "fontSize": "24",
    "lineHeight": "30",
    "marginTop": "4",
    "marginRight": "30"
  },
  "extra-content-text": {
    "fontSize": "28",
    "color": "#999999",
    "marginRight": "4"
  }
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(47);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    label: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    extraContent: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    hasTopBorder: {
      type: Boolean,
      default: false
    },
    hasMargin: {
      type: Boolean,
      default: false
    },
    hasBottomBorder: {
      type: Boolean,
      default: true
    },
    hasArrow: {
      type: Boolean,
      default: false
    },
    arrowIcon: {
      type: String,
      default: 'https://gw.alicdn.com/tfs/TB11zBUpwMPMeJjy1XbXXcwxVXa-22-22.png'
    },
    hasVerticalIndent: {
      type: Boolean,
      default: true
    },
    cellStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    autoAccessible: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    cellClicked: function cellClicked(e) {
      var link = this.link;
      this.$emit('wxcCellClicked', { e: e });
      link && _utils2.default.goToH5Page(link, true);
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                                * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
                                                                                                                                                                                                                                                                                * Created by Tw93 on 17/11/01
                                                                                                                                                                                                                                                                                */

var _urlParse = __webpack_require__(48);

var _urlParse2 = _interopRequireDefault(_urlParse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Utils = {
  UrlParser: _urlParse2.default,
  _typeof: function _typeof(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  },
  isPlainObject: function isPlainObject(obj) {
    return Utils._typeof(obj) === 'object';
  },
  isString: function isString(obj) {
    return typeof obj === 'string';
  },
  isNonEmptyArray: function isNonEmptyArray() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    return obj && obj.length > 0 && Array.isArray(obj) && typeof obj !== 'undefined';
  },
  isObject: function isObject(item) {
    return item && (typeof item === 'undefined' ? 'undefined' : _typeof2(item)) === 'object' && !Array.isArray(item);
  },
  isEmptyObject: function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  },
  decodeIconFont: function decodeIconFont(text) {
    // 正则匹配 图标和文字混排 eg: 我去上学校&#xe600;,天天不&#xe600;迟到
    var regExp = /&#x[a-z|0-9]{4,5};?/g;
    if (regExp.test(text)) {
      return text.replace(new RegExp(regExp, 'g'), function (iconText) {
        var replace = iconText.replace(/&#x/, '0x').replace(/;$/, '');
        return String.fromCharCode(replace);
      });
    } else {
      return text;
    }
  },
  mergeDeep: function mergeDeep(target) {
    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }

    if (!sources.length) return target;
    var source = sources.shift();
    if (Utils.isObject(target) && Utils.isObject(source)) {
      for (var key in source) {
        if (Utils.isObject(source[key])) {
          if (!target[key]) {
            Object.assign(target, _defineProperty({}, key, {}));
          }
          Utils.mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, _defineProperty({}, key, source[key]));
        }
      }
    }
    return Utils.mergeDeep.apply(Utils, [target].concat(sources));
  },
  appendProtocol: function appendProtocol(url) {
    if (/^\/\//.test(url)) {
      var bundleUrl = weex.config.bundleUrl;

      return 'http' + (/^https:/.test(bundleUrl) ? 's' : '') + ':' + url;
    }
    return url;
  },
  encodeURLParams: function encodeURLParams(url) {
    var parsedUrl = new _urlParse2.default(url, true);
    return parsedUrl.toString();
  },
  goToH5Page: function goToH5Page(jumpUrl) {
    var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    var Navigator = weex.requireModule('navigator');
    var jumpUrlObj = new Utils.UrlParser(jumpUrl, true);
    var url = Utils.appendProtocol(jumpUrlObj.toString());
    Navigator.push({
      url: Utils.encodeURLParams(url),
      animated: animated.toString()
    }, callback);
  },

  env: {
    isTaobao: function isTaobao() {
      var appName = weex.config.env.appName;

      return (/(tb|taobao|淘宝)/i.test(appName)
      );
    },
    isTrip: function isTrip() {
      var appName = weex.config.env.appName;

      return appName === 'LX';
    },
    isBoat: function isBoat() {
      var appName = weex.config.env.appName;

      return appName === 'Boat' || appName === 'BoatPlayground';
    },
    isWeb: function isWeb() {
      var platform = weex.config.env.platform;

      return (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) === 'object' && platform.toLowerCase() === 'web';
    },
    isIOS: function isIOS() {
      var platform = weex.config.env.platform;

      return platform.toLowerCase() === 'ios';
    },

    /**
     * 是否为 iPhone X
     * @returns {boolean}
     */
    isIPhoneX: function isIPhoneX() {
      var deviceHeight = weex.config.env.deviceHeight;

      if (Utils.env.isWeb()) {
        return (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) !== undefined && window.screen && window.screen.width && window.screen.height && parseInt(window.screen.width, 10) === 375 && parseInt(window.screen.height, 10) === 812;
      }
      return Utils.env.isIOS() && deviceHeight === 2436;
    },
    isAndroid: function isAndroid() {
      var platform = weex.config.env.platform;

      return platform.toLowerCase() === 'android';
    },
    isAlipay: function isAlipay() {
      var appName = weex.config.env.appName;

      return appName === 'AP';
    },
    isTmall: function isTmall() {
      var appName = weex.config.env.appName;

      return (/(tm|tmall|天猫)/i.test(appName)
      );
    },
    isAliWeex: function isAliWeex() {
      return Utils.env.isTmall() || Utils.env.isTrip() || Utils.env.isTaobao();
    },

    /**
     * 获取weex屏幕真实的设置高度，需要减去导航栏高度
     * @returns {Number}
     */
    getPageHeight: function getPageHeight() {
      var env = weex.config.env;

      var navHeight = Utils.env.isWeb() ? 0 : Utils.env.isIPhoneX() ? 176 : 132;
      return env.deviceHeight / env.deviceWidth * 750 - navHeight;
    },

    /**
     * 获取weex屏幕真实的设置高度
     * @returns {Number}
     */
    getScreenHeight: function getScreenHeight() {
      var env = weex.config.env;

      return env.deviceHeight / env.deviceWidth * 750;
    }
  },

  /**
   * 版本号比较
   * @memberOf Utils
   * @param currVer {string}
   * @param promoteVer {string}
   * @returns {boolean}
   * @example
   *
   * const { Utils } = require('@ali/wx-bridge');
   * const { compareVersion } = Utils;
   * console.log(compareVersion('0.1.100', '0.1.11')); // 'true'
   */
  compareVersion: function compareVersion() {
    var currVer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0.0.0';
    var promoteVer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0.0.0';

    if (currVer === promoteVer) return true;
    var currVerArr = currVer.split('.');
    var promoteVerArr = promoteVer.split('.');
    var len = Math.max(currVerArr.length, promoteVerArr.length);
    for (var i = 0; i < len; i++) {
      var proVal = ~~promoteVerArr[i];
      var curVal = ~~currVerArr[i];
      if (proVal < curVal) {
        return true;
      } else if (proVal > curVal) {
        return false;
      }
    }
    return false;
  },

  /**
   * 分割数组
   * @param arr 被分割数组
   * @param size 分割数组的长度
   * @returns {Array}
   */
  arrayChunk: function arrayChunk() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

    var groups = [];
    if (arr && arr.length > 0) {
      groups = arr.map(function (e, i) {
        return i % size === 0 ? arr.slice(i, i + size) : null;
      }).filter(function (e) {
        return e;
      });
    }
    return groups;
  },

  /*
   * 截断字符串
   * @param str 传入字符串
   * @param len 截断长度
   * @param hasDot 末尾是否...
   * @returns {String}
   */
  truncateString: function truncateString(str, len) {
    var hasDot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var newLength = 0;
    var newStr = '';
    var singleChar = '';
    var chineseRegex = /[^\x00-\xff]/g;
    var strLength = str.replace(chineseRegex, '**').length;
    for (var i = 0; i < strLength; i++) {
      singleChar = str.charAt(i).toString();
      if (singleChar.match(chineseRegex) !== null) {
        newLength += 2;
      } else {
        newLength++;
      }
      if (newLength > len) {
        break;
      }
      newStr += singleChar;
    }

    if (hasDot && strLength > len) {
      newStr += '...';
    }
    return newStr;
  },

  /*
   * 转换 obj 为 url params参数
   * @param obj 传入字符串
   * @returns {String}
   */
  objToParams: function objToParams(obj) {
    var str = "";
    for (var key in obj) {
      if (str !== "") {
        str += "&";
      }
      str += key + "=" + encodeURIComponent(obj[key]);
    }
    return str;
  },

  /*
   * 转换 url params参数为obj
   * @param str 传入url参数字符串
   * @returns {Object}
   */
  paramsToObj: function paramsToObj(str) {
    var obj = {};
    try {
      obj = JSON.parse('{"' + decodeURI(str).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    } catch (e) {
      console.log(e);
    }
    return obj;
  },

  animation: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param ref
     * @param transform 运动类型
     * @param status
     * @param callback 回调函数
     */
    pageTransitionAnimation: function pageTransitionAnimation(ref, transform, status, callback) {
      var animation = weex.requireModule('animation');
      animation.transition(ref, {
        styles: {
          transform: transform
        },
        duration: status ? 250 : 300, // ms
        timingFunction: status ? 'ease-in' : 'ease-out',
        delay: 0 // ms
      }, function () {
        callback && callback();
      });
    }
  },
  uiStyle: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param animationType 页面转场动画的类型 push，model
     * @param size 分割数组的长度
     * @returns {}
     */
    pageTransitionAnimationStyle: function pageTransitionAnimationStyle(animationType) {
      if (animationType === 'push') {
        return {
          left: '750px',
          top: '0px',
          height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px'
        };
      } else if (animationType === 'model') {
        return {
          top: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px',
          left: '0px',
          height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px'
        };
      }
      return {};
    }
  }
};

exports.default = Utils;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var required = __webpack_require__(49)
  , qs = __webpack_require__(50)
  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @api public
 */
function lolcation(loc) {
  var location = global && global.location || {};
  loc = loc || location;

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new URL(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new URL(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @api private
 */
function extractProtocol(address) {
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @api private
 */
function resolve(relative, base) {
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} location Location defaults for relative paths.
 * @param {Boolean|Function} parser Parser for the query string.
 * @api public
 */
function URL(address, location, parser) {
  if (!(this instanceof URL)) {
    return new URL(address, location, parser);
  }

  var relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[2] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];
    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL}
 * @api public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String}
 * @api public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query
    , url = this
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
}

URL.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
URL.extractProtocol = extractProtocol;
URL.location = lolcation;
URL.qs = qs;

module.exports = URL;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String} The decoded string.
 * @api private
 */
function decode(input) {
  return decodeURIComponent(input.replace(/\+/g, ' '));
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g
    , result = {}
    , part;

  while (part = parser.exec(query)) {
    var key = decode(part[1])
      , value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    if (key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = [];

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (var key in obj) {
    if (has.call(obj, key)) {
      pairs.push(encodeURIComponent(key) +'='+ encodeURIComponent(obj[key]));
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;


/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wxc-cell', _vm.hasTopBorder && 'cell-top-border', _vm.hasBottomBorder && 'cell-bottom-border', _vm.hasMargin && 'cell-margin', _vm.hasVerticalIndent && 'cell-indent', _vm.desc && 'has-desc'],
    style: _vm.cellStyle,
    attrs: {
      "accessible": _vm.autoAccessible,
      "ariaLabel": (_vm.label + "," + _vm.title + "," + _vm.desc)
    },
    on: {
      "click": _vm.cellClicked
    }
  }, [_vm._t("label", [(_vm.label) ? _c('div', [_c('text', {
    staticClass: ["cell-label-text"]
  }, [_vm._v(_vm._s(_vm.label))])]) : _vm._e()]), _c('div', {
    staticClass: ["cell-title"]
  }, [_vm._t("title", [_c('text', {
    staticClass: ["cell-content"]
  }, [_vm._v(_vm._s(_vm.title))]), (_vm.desc) ? _c('text', {
    staticClass: ["cell-desc-text"]
  }, [_vm._v(_vm._s(_vm.desc))]) : _vm._e()])], 2), _vm._t("value"), _vm._t("default"), (_vm.extraContent) ? _c('text', {
    staticClass: ["extra-content-text"]
  }, [_vm._v(_vm._s(_vm.extraContent))]) : _vm._e(), (_vm.hasArrow) ? _c('image', {
    staticClass: ["cell-arrow-icon"],
    attrs: {
      "src": _vm.arrowIcon,
      "ariaHidden": true
    }
  }) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(53);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(54)
)

/* script */
__vue_exports__ = __webpack_require__(55)

/* template */
var __vue_template__ = __webpack_require__(57)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/home/awecode/test/jus-broadcast/node_modules/weex-ui/packages/wxc-icon/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-37129143"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = {
  "icon-font": {
    "color": "#666666"
  }
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//

var _type = __webpack_require__(56);

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dom = weex.requireModule('dom');

exports.default = {
  props: {
    name: {
      default: 'success',
      type: String
    },
    size: {
      default: 'small',
      type: String
    },
    iconStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      Icon: _type2.default
    };
  },
  beforeCreate: function beforeCreate() {
    dom.addRule('fontFace', {
      'fontFamily': "weexUiIconFont",
      'src': "url('https://at.alicdn.com/t/font_520368_r89ekv69euahsemi.ttf')"
    });
  },

  computed: {
    mergeStyle: function mergeStyle() {
      var iconStyle = this.iconStyle,
          size = this.size;

      var fontSize = '48px';
      switch (size) {
        case 'xs':
          fontSize = '24px';
          break;
        case 'small':
          fontSize = '48px';
          break;
        case 'medium':
          fontSize = '72px';
          break;
        case 'big':
          fontSize = '128px';
          break;
        default:
          fontSize = '48px';
      }
      return _extends({
        fontFamily: 'weexUiIconFont',
        fontSize: fontSize
      }, iconStyle);
    }
  },
  methods: {
    itemClicked: function itemClicked(name) {
      this.$emit('wxcIconClicked', {
        name: name
      });
    }
  }
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  less: '\uE6A5',
  'more_unfold': '\uE6A6',
  back: '\uE697',
  more: '\uE6A7',
  add: '\uE6B9',
  subtract: '\uE6FE',
  close: '\uE69A',
  cry: '\uE69C',
  delete: '\uE69D',
  help: '\uE6A3',
  refresh: '\uE6AA',
  search: '\uE6AC',
  success: '\uE6B1',
  warning: '\uE6B6',
  wrong: '\uE6B7',
  clock: '\uE6BB',
  scanning: '\uE6EC',
  filter: '\uE6F1',
  map: '\uE715',
  play: '\uE719'
};

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    staticClass: ["icon-font"],
    style: _vm.mergeStyle,
    on: {
      "click": function($event) {
        _vm.itemClicked(_vm.name)
      }
    }
  }, [_vm._v(_vm._s(_vm.Icon[_vm.name]))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(59);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(60)
)

/* script */
__vue_exports__ = __webpack_require__(61)

/* template */
var __vue_template__ = __webpack_require__(67)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/home/awecode/test/jus-broadcast/node_modules/weex-ui/packages/wxc-popup/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-28869db8"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-popup": {
    "position": "fixed",
    "width": "750"
  },
  "top": {
    "left": 0,
    "right": 0
  },
  "bottom": {
    "left": 0,
    "right": 0
  },
  "left": {
    "bottom": 0,
    "top": 0
  },
  "right": {
    "bottom": 0,
    "top": 0
  }
}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _wxcOverlay = __webpack_require__(62);

var _wxcOverlay2 = _interopRequireDefault(_wxcOverlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var animation = weex.requireModule('animation');
var platform = weex.config.env.platform;

var isWeb = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && platform.toLowerCase() === 'web';
exports.default = {
  components: { WxcOverlay: _wxcOverlay2.default },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    pos: {
      type: String,
      default: 'bottom'
    },
    popupColor: {
      type: String,
      default: '#FFFFFF'
    },
    overlayCfg: {
      type: Object,
      default: function _default() {
        return {
          hasAnimation: true,
          timingFunction: ['ease-in', 'ease-out'],
          duration: 300,
          opacity: 0.6
        };
      }
    },
    height: {
      type: [Number, String],
      default: 840
    },
    standOut: {
      type: [Number, String],
      default: 0
    },
    width: {
      type: [Number, String],
      default: 750
    },
    animation: {
      type: Object,
      default: function _default() {
        return {
          timingFunction: 'ease-in'
        };
      }
    }
  },
  data: function data() {
    return {
      haveOverlay: true,
      isOverShow: true
    };
  },
  computed: {
    isNeedShow: function isNeedShow() {
      var _this = this;

      setTimeout(function () {
        _this.appearPopup(_this.show);
      }, 50);
      return this.show;
    },
    _height: function _height() {
      this.appearPopup(this.show, 150);
      return this.height;
    },
    padStyle: function padStyle() {
      var pos = this.pos,
          width = this.width,
          height = this.height,
          popupColor = this.popupColor,
          standOut = this.standOut;

      var style = {
        width: width + 'px',
        backgroundColor: popupColor
      };
      pos === 'top' && (style = _extends({}, style, {
        top: -height + standOut + 'px',
        height: height + 'px'
      }));
      pos === 'bottom' && (style = _extends({}, style, {
        bottom: -height + standOut + 'px',
        height: height + 'px'
      }));
      pos === 'left' && (style = _extends({}, style, {
        left: -width + standOut + 'px'
      }));
      pos === 'right' && (style = _extends({}, style, {
        right: -width + standOut + 'px'
      }));
      return style;
    }
  },
  methods: {
    handleTouchEnd: function handleTouchEnd(e) {
      // 在支付宝上面有点击穿透问题
      var platform = weex.config.env.platform;

      platform === 'Web' && e.preventDefault && e.preventDefault();
    },
    hide: function hide() {
      this.appearPopup(false);
      this.$refs.overlay.appearOverlay(false);
    },
    wxcOverlayBodyClicking: function wxcOverlayBodyClicking() {
      this.isShow && this.appearPopup(false);
    },
    appearPopup: function appearPopup(bool) {
      var _this2 = this;

      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

      this.isShow = bool;
      var popupEl = this.$refs['wxc-popup'];
      if (!popupEl) {
        return;
      }
      animation.transition(popupEl, _extends({
        styles: {
          transform: this.getTransform(this.pos, this.width, this.height, !bool)
        },
        duration: duration,
        delay: 0
      }, this.animation), function () {
        if (!bool) {
          _this2.$emit('wxcPopupOverlayClicked', { pos: _this2.pos });
        }
      });
    },
    getTransform: function getTransform(pos, width, height, bool) {
      var _size = pos === 'top' || pos === 'bottom' ? height : width;
      bool && (_size = 0);
      var _transform = void 0;
      switch (pos) {
        case 'top':
          _transform = 'translateY(' + _size + 'px)';
          break;
        case 'bottom':
          _transform = 'translateY(-' + _size + 'px)';
          break;
        case 'left':
          _transform = 'translateX(' + _size + 'px)';
          break;
        case 'right':
          _transform = 'translateX(-' + _size + 'px)';
          break;
      }
      return _transform;
    }
  }
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(63);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(64)
)

/* script */
__vue_exports__ = __webpack_require__(65)

/* template */
var __vue_template__ = __webpack_require__(66)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/home/awecode/test/jus-broadcast/node_modules/weex-ui/packages/wxc-overlay/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-389bbc1c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-overlay": {
    "width": "750",
    "position": "fixed",
    "left": 0,
    "top": 0,
    "bottom": 0,
    "right": 0
  }
}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var animation = weex.requireModule('animation');
exports.default = {
  props: {
    show: {
      type: Boolean,
      default: true
    },
    hasAnimation: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 300
    },
    timingFunction: {
      type: Array,
      default: function _default() {
        return ['ease-in', 'ease-out'];
      }
    },
    opacity: {
      type: [Number, String],
      default: 0.6
    },
    canAutoClose: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    overlayStyle: function overlayStyle() {
      return {
        opacity: this.hasAnimation ? 0 : 1,
        backgroundColor: 'rgba(0, 0, 0,' + this.opacity + ')'
      };
    },
    shouldShow: function shouldShow() {
      var _this = this;

      var show = this.show,
          hasAnimation = this.hasAnimation;

      hasAnimation && setTimeout(function () {
        _this.appearOverlay(show);
      }, 50);
      return show;
    }
  },
  methods: {
    overlayClicked: function overlayClicked(e) {
      this.canAutoClose ? this.appearOverlay(false) : this.$emit('wxcOverlayBodyClicked', {});
    },
    appearOverlay: function appearOverlay(bool) {
      var _this2 = this;

      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.duration;
      var hasAnimation = this.hasAnimation,
          timingFunction = this.timingFunction,
          canAutoClose = this.canAutoClose;

      var needEmit = !bool && canAutoClose;
      needEmit && this.$emit('wxcOverlayBodyClicking', {});
      var overlayEl = this.$refs['wxc-overlay'];
      if (hasAnimation && overlayEl) {
        animation.transition(overlayEl, {
          styles: {
            opacity: bool ? 1 : 0
          },
          duration: duration,
          timingFunction: timingFunction[bool ? 0 : 1],
          delay: 0
        }, function () {
          needEmit && _this2.$emit('wxcOverlayBodyClicked', {});
        });
      } else {
        needEmit && this.$emit('wxcOverlayBodyClicked', {});
      }
    }
  }
};

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.show) ? _c('div', {
    ref: "wxc-overlay",
    staticClass: ["wxc-overlay"],
    style: _vm.overlayStyle,
    attrs: {
      "hack": _vm.shouldShow
    },
    on: {
      "click": _vm.overlayClicked
    }
  }) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    on: {
      "touchend": _vm.handleTouchEnd
    }
  }, [(_vm.show) ? _c('wxc-overlay', _vm._b({
    ref: "overlay",
    attrs: {
      "show": _vm.haveOverlay && _vm.isOverShow
    },
    on: {
      "wxcOverlayBodyClicking": _vm.wxcOverlayBodyClicking
    }
  }, 'wxc-overlay', _vm.overlayCfg, false)) : _vm._e()], 1), (_vm.show) ? _c('div', {
    ref: "wxc-popup",
    class: ['wxc-popup', _vm.pos],
    style: _vm.padStyle,
    attrs: {
      "height": _vm._height,
      "hack": _vm.isNeedShow
    },
    on: {
      "click": function () {}
    }
  }, [_vm._t("default")], 2) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(69)
)

/* script */
__vue_exports__ = __webpack_require__(70)

/* template */
var __vue_template__ = __webpack_require__(72)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/home/awecode/test/jus-broadcast/node_modules/weex-ui/packages/wxc-button/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6273a8fc"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-btn": {
    "width": "702",
    "height": "88",
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": "12",
    "opacity": 1
  },
  "btn-text": {
    "textOverflow": "ellipsis",
    "lines": 1,
    "fontSize": "36",
    "color": "#ffffff"
  }
}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//

var _type = __webpack_require__(71);

exports.default = {
  props: {
    text: {
      type: String,
      default: '确认'
    },
    size: {
      type: String,
      default: 'none'
    },
    type: {
      type: String,
      default: 'red'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    btnStyle: Object,
    textStyle: Object
  },
  computed: {
    mrBtnStyle: function mrBtnStyle() {
      var type = this.type,
          disabled = this.disabled,
          btnStyle = this.btnStyle,
          size = this.size;


      var mrBtnStyle = _extends({}, _type.STYLE_MAP[type], btnStyle, _type.BUTTON_STYLE_MAP[size]);

      var disableStyle = { opacity: 0.2 };
      if (type === 'white') {
        disableStyle = { backgroundColor: 'rgba(0, 0, 0, 0.1)' };
      }

      return disabled ? _extends({}, mrBtnStyle, disableStyle, {
        borderWidth: 0
      }) : mrBtnStyle;
    },
    mrTextStyle: function mrTextStyle() {
      var type = this.type,
          disabled = this.disabled,
          textStyle = this.textStyle,
          size = this.size;

      var mrTextStyle = _extends({}, _type.TEXT_STYLE_MAP[type], textStyle, _type.TEXT_FONTSIZE_STYLE_MAP[size]);
      return disabled ? _extends({}, mrTextStyle, { color: '#FFFFFF' }) : mrTextStyle;
    }
  },
  methods: {
    onClicked: function onClicked(e) {
      var type = this.type,
          disabled = this.disabled;

      this.$emit('wxcButtonClicked', { e: e, type: type, disabled: disabled });
    }
  }
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var STYLE_MAP = exports.STYLE_MAP = {
  red: {
    backgroundColor: '#FF5000'
  },
  yellow: {
    backgroundColor: '#FFC900'
  },
  white: {
    backgroundColor: '#FFFFFF',
    borderColor: '#A5A5A5',
    borderWidth: '1px'
  },
  blue: {
    backgroundColor: '#0F8DE8'
  }
};

var TEXT_STYLE_MAP = exports.TEXT_STYLE_MAP = {
  red: {
    color: '#FFFFFF'
  },
  yellow: {
    color: '#FFFFFF'
  },
  blue: {
    color: '#FFFFFF'
  },
  white: {
    color: '#3D3D3D'
  }
};

var BUTTON_STYLE_MAP = exports.BUTTON_STYLE_MAP = {
  full: {
    width: '702px',
    height: '88px'
  },
  big: {
    width: '339px',
    height: '70px'
  },
  medium: {
    width: '218px',
    height: '60px'
  },
  small: {
    width: '157px',
    height: '44px'
  }
};

var TEXT_FONTSIZE_STYLE_MAP = exports.TEXT_FONTSIZE_STYLE_MAP = {
  full: {
    fontSize: '36px'
  },
  big: {
    fontSize: '32px'
  },
  medium: {
    fontSize: '28px'
  },
  small: {
    fontSize: '24px'
  }
};

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wxc-btn"],
    style: _vm.mrBtnStyle,
    attrs: {
      "accessible": true,
      "ariaLabel": _vm.text
    },
    on: {
      "click": _vm.onClicked
    }
  }, [_c('text', {
    staticClass: ["btn-text"],
    style: _vm.mrTextStyle
  }, [_vm._v(_vm._s(_vm.text))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(74)
)

/* script */
__vue_exports__ = __webpack_require__(75)

/* template */
var __vue_template__ = __webpack_require__(76)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/home/awecode/test/jus-broadcast/src/components/UIComponent/MiniBar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-16dbe3f6"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-minibar": {
    "width": "750",
    "height": "90",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "backgroundColor": "#009ff0"
  },
  "left": {
    "width": "180",
    "paddingLeft": "32"
  },
  "middle-title": {
    "fontSize": "30",
    "color": "#ffffff",
    "height": "36",
    "lineHeight": "34"
  },
  "right": {
    "width": "180",
    "paddingRight": "32",
    "alignItems": "flex-end"
  },
  "left-button": {
    "width": "21",
    "height": "36"
  },
  "right-button": {
    "width": "32",
    "height": "32"
  },
  "icon-text": {
    "fontSize": "28",
    "color": "#ffffff"
  }
}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var Navigator = weex.requireModule('navigator');
exports.default = {
    props: {
        backgroundColor: {
            type: String,
            default: '#FFC900'
        },
        leftButton: {
            type: String,
            default: 'https://gw.alicdn.com/tfs/TB1x18VpwMPMeJjy1XdXXasrXXa-21-36.png'
        },
        textColor: {
            type: String,
            default: '#3D3D3D'
        },
        rightButton: {
            type: String,
            default: 'http://getdrawings.com/img/user-silhouette-icon-3.png'
        },
        title: {
            type: String,
            default: '标题'
        },
        leftText: {
            type: String,
            default: ''
        },
        rightText: {
            type: String,
            default: ''
        },
        useDefaultReturn: {
            type: Boolean,
            default: true
        },
        show: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        leftButtonClicked: function leftButtonClicked() {
            console.log('Do nothing for now');
            this.$router.back();
            //                    Navigator.pop({}, e => {
            //                    });
            //                }
            //                this.$emit('wxcMinibarLeftButtonClicked', {});
        },
        rightButtonClicked: function rightButtonClicked() {
            this.$emit('rightButtonClicked');
            var hasRightContent = this.rightText || this.rightButton || this.$slots && this.$slots.right;
            hasRightContent && this.$emit('wxcMinibarRightButtonClicked', {});
        }
    }
};

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.show) ? _c('div', {
    staticClass: ["wxc-minibar"],
    style: {
      backgroundColor: _vm.backgroundColor
    }
  }, [_c('div', {
    staticClass: ["left"],
    attrs: {
      "ariaLabel": "返回",
      "accessible": true
    },
    on: {
      "click": _vm.leftButtonClicked
    }
  }, [_vm._t("left", [(_vm.leftButton && !_vm.leftText) ? _c('image', {
    staticClass: ["left-button"],
    attrs: {
      "src": _vm.leftButton
    }
  }) : _vm._e(), (_vm.leftText) ? _c('text', {
    staticClass: ["icon-text"],
    style: {
      color: _vm.textColor
    }
  }, [_vm._v(_vm._s(_vm.leftText) + "\n            ")]) : _vm._e()])], 2), _vm._t("middle", [_c('text', {
    staticClass: ["middle-title"],
    style: {
      color: _vm.textColor
    }
  }, [_vm._v(_vm._s(_vm.title))])]), _c('div', {
    staticClass: ["right"],
    on: {
      "click": _vm.rightButtonClicked
    }
  }, [_vm._t("right", [(_vm.rightButton && !_vm.rightText) ? _c('image', {
    staticClass: ["right-button"],
    attrs: {
      "src": _vm.rightButton,
      "ariaHidden": true
    }
  }) : _vm._e(), (_vm.rightText) ? _c('text', {
    staticClass: ["icon-text"],
    style: {
      color: _vm.textColor
    }
  }, [_vm._v(_vm._s(_vm.rightText) + "\n            ")]) : _vm._e()])], 2)], 2) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: ["navigation"]
  }, [_c('mini-bar', {
    attrs: {
      "title": _vm.getRoute
    },
    on: {
      "rightButtonClicked": _vm.rightButtonClicked
    }
  })], 1), _c('wxc-popup', {
    attrs: {
      "width": "500",
      "pos": "left",
      "show": _vm.isShow
    },
    on: {
      "wxcPopupOverlayClicked": _vm.overlayClicked
    }
  }, [_c('div', {
    staticClass: ["container"]
  }, [_c('div', {
    staticClass: ["demo"]
  }, [_c('wxc-cell', {
    attrs: {
      "title": "PROFILE",
      "hasArrow": true,
      "hasTopBorder": false
    },
    on: {
      "wxcCellClicked": _vm.profileCellClicked
    }
  }), _c('wxc-cell', {
    attrs: {
      "title": "WATCHLIST",
      "hasArrow": true,
      "hasTopBorder": false
    },
    on: {
      "wxcCellClicked": _vm.watchListCellClicked
    }
  }), _c('wxc-cell', {
    attrs: {
      "title": "SIGN OUT",
      "hasTopBorder": true
    },
    on: {
      "wxcCellClicked": _vm.signOutCellClicked
    }
  })], 1)])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "flexDirection": "column",
    "justifyContent": "center"
  },
  "group": {
    "flexDirection": "row",
    "justifyContent": "center",
    "marginBottom": "40"
  },
  "title": {
    "fontSize": "45",
    "color": "#888888"
  },
  "count": {
    "fontSize": "45",
    "fontWeight": "bold",
    "marginLeft": "12",
    "color": "#41B883"
  },
  "panel": {
    "borderColor": "rgb(79,192,141)",
    "backgroundColor": "rgba(79,192,141,0.2)"
  },
  "video-image": {
    "width": "700",
    "height": "450",
    "marginTop": "35",
    "marginBottom": "35",
    "flexDirection": "column",
    "justifyContent": "center"
  },
  "meta": {
    "marginLeft": "7",
    "marginRight": "7"
  },
  "text": {
    "fontSize": "30"
  }
}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Helper = __webpack_require__(2);

var _Helper2 = _interopRequireDefault(_Helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//    import External from './detail/ExternalVideoDetail'
//    import router from '../../../router'

var stream = weex.requireModule('stream'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            videoObjects: ''
        };
    },

    components: {
        //            External
    },
    methods: {
        getVideos: function getVideos(url, callback) {
            return stream.fetch({
                method: 'GET',
                type: 'json',
                url: 'http://52.202.70.246/v1/' + url
            }, callback);
        },
        routeTo: function routeTo(slug) {
            //                if (obj.is_local){
            //                    this.$router.push({ name: 'Local Video Detail', params: { slugId: obj.slug } })
            //                } else {
            console.log('clicked me');
            this.$router.push({ name: 'External Video Detail', params: { slugId: slug } });
            //                }
        }
    },
    mixins: [_Helper2.default],
    created: function created() {
        var _this = this;

        this.getVideos('video/?page_size=0', function (res) {
            _this.videoObjects = res.ok ? res.data : '(network error)';
        });
    }
};

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('list', _vm._l((_vm.videoObjects), function(obj) {
    return (obj.is_completed) ? _c('cell', {
      key: obj.slug,
      staticClass: ["column"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["text-cell"],
      on: {
        "click": function($event) {
          _vm.routeTo(obj.slug)
        }
      }
    }, [_c('image', {
      staticClass: ["video-image"],
      attrs: {
        "src": obj.pic
      }
    }), _c('div', {
      staticClass: ["meta"]
    }, [_c('text', {
      staticClass: ["text"]
    }, [_vm._v(_vm._s(obj.name))]), _c('text', {
      staticClass: ["text"]
    }, [_vm._v(_vm._s(obj.created))])])])]) : _vm._e()
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = {
  "weex-input": {
    "border": "solid 1px black",
    "marginTop": 0.61,
    "marginRight": 0.61,
    "marginBottom": 0.61,
    "marginLeft": 0.61,
    "height": 1
  },
  "login-message": {
    "textAlign": "center"
  }
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcButton = __webpack_require__(1);

var _wxcButton2 = _interopRequireDefault(_wxcButton);

var _Form = __webpack_require__(15);

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var stream = weex.requireModule('stream');
var config = __webpack_require__(86);

var modal = weex.requireModule('modal');

exports.default = {
    name: "Signin",
    data: function data() {
        return { username: "", results: "" };
    },

    components: { WxcButton: _wxcButton2.default },

    mixins: [_Form2.default],
    endpoint: "jwt/create/",
    methods: {
        wxcButtonClicked: function wxcButtonClicked(e) {
            console.log(e);
            modal.toast({
                message: e
            });
        },
        axiosTest: function axiosTest() {
            console.log(this);
            var self = this;
            modal.toast({
                message: 'videos: comming'
            });
            stream.fetch({
                method: 'POST',
                url: 'http://52.202.70.246/v1/jwt/create/',
                type: 'json',
                body: config.toParams({
                    email: 'admin@admin.com',
                    password: 'admin'
                }),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }, function (ret) {
                if (!ret.ok) {
                    console.log("request failed");
                    modal.toast({
                        message: ret
                    });
                } else {
                    console.log(ret.data.user.full_name);
                    console.log(ret.data);
                    self.results = ret.data;
                    modal.toast({
                        message: 'username: ' + ret.data.user.full_name
                    });
                }
            }, function (response) {
                console.log(response);
            });
            console.log(this.$data.results);
            this.$store.dispatch("login", {
                userData: this.results
            });
            this.$router.push({ name: "Home" });
        },


        //            signUpFirst(e) {
        //                this.$router.push({name: "Sign Up"});
        //            },
        //            onreturn() {
        //                console.log(this.$refs);
        //                const elem = this.$refs.signin
        //                elem.click()
        //                // TODO: Take to list page on return signin
        //                // console.log(elem.click)
        //                modal.toast({
        //                    message: 'sign in callback'
        //                })
        //
        //            },
        //            signIn() {
        //                console.log('signed in')
        //            },
        successCallback: function successCallback(data) {
            //                modal.toast({
            //                    message: 'sign in callback'
            //                })
            //                console.log(store);
            //
            //                this.$store.dispatch("login", {
            //                    userData: ret.data
            //                });
            //                modal.toast({
            //                    message: 'user: ' + data
            //                })
            //                this.$router.push({name: "Home"});
            ////                this.test = data
            //                modal.toast({
            //                    message: 'user: ' + data
            //                })
        }
    },
    mounted: function mounted() {
        this.$refs.email.focus();
    }
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(84)

/* template */
var __vue_template__ = __webpack_require__(85)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/home/awecode/test/jus-broadcast/src/components/Form/VueForm.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var Errors = function () {
    function Errors() {
        _classCallCheck(this, Errors);

        this.errors = {};
    }

    _createClass(Errors, [{
        key: 'has',
        value: function has(field) {
            return this.errors.hasOwnProperty(field);
        }
    }, {
        key: 'any',
        value: function any() {
            return Object.keys(this.errors).length > 0;
        }
    }, {
        key: 'get',
        value: function get(field) {
            if (this.errors[field]) {
                return this.errors[field][0];
            }
        }
    }, {
        key: 'nestedGet',
        value: function nestedGet() {
            var value = null;

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            for (var arg in args) {
                //        console.log(args[arg])
                if (this.errors[args[arg]]) {
                    value = this.errors[args[arg]];
                }
            }
            return value;
        }
    }, {
        key: 'record',
        value: function record(errors) {
            this.errors = errors;
        }
    }, {
        key: 'clear',
        value: function clear() {
            var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            if (event) {
                var field = event.target.name;
                if (event.target.getAttribute('row') === 'true' && this.errors.hasOwnProperty('rows')) {
                    global.Vue.delete(this.errors, 'rows');
                    return;
                }
                if (field) {
                    global.Vue.delete(this.errors, field);
                    return;
                }
            }
            this.errors = {};
        }
    }]);

    return Errors;
}();

exports.default = {
    props: ['fields', 'action', 'submitAsModal', 'defaultFieldsValues', 'successUrl', 'formStyle', 'cardStyle', 'enableResetFormOnSuccess'],
    //        props: {
    //            fields: {
    //                type: String,
    //                default: 'yellow'
    //            }
    //        },
    //        props: ['fields'],
    data: function data() {
        var dct = {};
        dct.original_fields = Object.assign({}, this.fields);
        dct.field_names = [];
        for (var field in this.data) {
            dct.field_names.push(field);
        }
        dct.errors = new Errors();
        return dct;
    },

    //    created(){
    //      debugger
    //    },
    methods: {
        reset: function reset() {
            this.errors.clear();
        },
        getFieldsData: function getFieldsData() {
            var payload = this.fields;
            if (this.defaultFieldsValues !== 'undefined') {
                payload = Object.assign({}, payload, this.defaultFieldsValues);
            }

            return payload;
        },
        save: function save(url) {
            var verb = void 0;
            if (this.fields.id || this.formInstanceId) {
                verb = 'put';
            } else {
                verb = 'post';
            }
            this.submit(verb, url).then(function (data) {
                console.log(data);
            });
        },
        post: function post(url) {
            return this.submit('post', url);
        },
        put: function put(url) {
            return this.submit('put', url);
        },
        patch: function patch(url) {
            return this.submit('patch', url);
        },
        remove: function remove(url) {
            return this.submit('delete', url);
        },
        resetForm: function resetForm() {
            Object.assign(this.fields, this.original_fields);
        },
        submit: function submit(requestType, url) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                global.axios[requestType](url, _this.getFieldsData()).then(function (_ref) {
                    var data = _ref.data;

                    _this.onSuccess(data);
                    // console.log(this.submitAsModal)
                    if (_this.submitAsModal) {
                        _this.$emit('saveAsModal', data); // catch by Modal.vue, to update selectize options
                    } else {
                        if (_this.successUrl) {
                            _this.$emit('success', data, _this.successUrl);
                        } else {
                            _this.$emit('success', data);
                        }
                    }
                    if (_this.enableResetFormOnSuccess) {
                        _this.resetForm();
                    }
                    resolve(data);
                }).catch(function (error) {
                    // console.log(error.response.data)
                    _this.onFail(error.response.data);
                    _this.$parent.$emit('failure', error.response.data);
                    reject(error.response.data);
                });
            });
        },
        onSuccess: function onSuccess(data) {
            this.reset();
        },
        onFail: function onFail(errors) {
            var _this2 = this;

            if (errors.hasOwnProperty('error')) {
                this.$error(errors.error[0]);
                setTimeout(function () {
                    global.Vue.delete(_this2.errors.errors, 'error');
                }, 1000);
            }
            this.errors.record(errors);
        }
    }
};

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["vue-form", "non-printable"],
    style: this.formStyle
  }, [_c('div', {
    staticClass: ["card"],
    style: this.cardStyle
  }, [_c('form', {
    attrs: {
      "method": "POST",
      "enctype": "multipart/form-data"
    },
    on: {
      "submit": function($event) {
        _vm.save(_vm.action)
      },
      "focusin": function($event) {
        _vm.errors.clear($event)
      }
    }
  }, [_vm._t("form-header"), _c('div', {
    staticClass: ["card-content"]
  }, [_c('div', {
    staticClass: ["content"]
  }, [_vm._t("form-fields", null, {
    errors: _vm.errors
  })], 2)]), _c('text', [_vm._v(_vm._s(_vm.fields))])], 2)], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toParams = toParams;
function toParams(obj) {

    var param = "";
    for (var name in obj) {
        if (typeof obj[name] != 'function') {
            param += "&" + name + "=" + encodeURI(obj[name]);
        }
    }
    console.log(param.substring(1));
    return param.substring(1);
}

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["signin"]
  }, [_c('vue-form', {
    attrs: {
      "fields": _vm.fields,
      "action": _vm.endpoint()
    },
    on: {
      "success": _vm.successCallback
    },
    scopedSlots: _vm._u([{
      key: "form-fields",
      fn: function(form) {
        return [_c('input', {
          ref: "email",
          staticClass: ["input"],
          attrs: {
            "slot": "fields",
            "type": "email",
            "placeholder": "Email",
            "value": (_vm.fields.email)
          },
          on: {
            "input": function($event) {
              _vm.$set(_vm.fields, "email", $event.target.attr.value)
            }
          },
          slot: "fields"
        }), _c('input', {
          staticClass: ["input"],
          attrs: {
            "type": "password",
            "placeholder": "Password",
            "returnKeyType": "done",
            "value": (_vm.fields.password)
          },
          on: {
            "return": _vm.onreturn,
            "input": function($event) {
              _vm.$set(_vm.fields, "password", $event.target.attr.value)
            }
          }
        }), _c('text', {
          on: {
            "click": _vm.axiosTest
          }
        }, [_vm._v("axiosTest")])]
      }
    }])
  }), _c('p', [_vm._v("sign in form")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["home"]
  }, [(_vm.checkUserLogin()) ? [_c('header', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('layout')], 1), _c('scroller')] : [_c('p', [_vm._v("UnAuthenticated")]), _c('sign-in')]], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(90)
)

/* script */
__vue_exports__ = __webpack_require__(91)

/* template */
var __vue_template__ = __webpack_require__(92)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/home/awecode/test/jus-broadcast/src/components/app/video/detail/ExternalVideoDetail.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2ac2dad5"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = {
  "external-video-detail__video-container": {
    "position": "relative",
    "paddingBottom": 56.25,
    "paddingTop": "30",
    "height": 0,
    "overflow": "hidden"
  },
  "video": {
    "width": "630",
    "height": "350",
    "marginTop": "60",
    "marginLeft": "60"
  },
  "info": {
    "marginTop": "40",
    "fontSize": "40",
    "textAlign": "center"
  }
}

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Helper = __webpack_require__(2);

var _Helper2 = _interopRequireDefault(_Helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var stream = weex.requireModule('stream'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


exports.default = {
    name: 'ExternalVideoDetail',
    data: function data() {
        return {
            obj: '',
            showMore: false,
            moreOrLess: '',
            videoId: '',
            state: '----',
            src: 'http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4'
        };
    },

    mixins: [_Helper2.default],
    created: function created() {
        var _this = this;

        if (this.$route.params.slugId) {
            this.getVideo('external/video/' + this.$route.params.slugId, function (res) {
                console.log(res.data);
                _this.obj = res.ok ? res.data : '(network error)';
                _this.videoId = res.ok ? 'http://www.youtube.com/embed/' + res.data.video_id : '(network error)';
                console.log(_this.videoId);
            });
        }
    },

    methods: {
        getVideo: function getVideo(url, callback) {
            return stream.fetch({
                method: 'GET',
                type: 'json',
                url: 'http://52.202.70.246/v1/' + url
            }, callback);
        },
        onstart: function onstart(event) {
            this.state = 'onstart';
        },
        onpause: function onpause(event) {
            this.state = 'onpause';
        },
        onfinish: function onfinish(event) {
            this.state = 'onfinish';
        },
        onfail: function onfail(event) {
            this.state = 'onfinish';
        }
    }
};

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["external-video-detail"]
  }, [_c('div', {
    staticClass: ["external-video-detail__video-container"]
  }, [_c('video', {
    staticClass: ["video"],
    attrs: {
      "src": _vm.videoId,
      "autoplay": "",
      "controls": ""
    },
    on: {
      "start": _vm.onstart,
      "pause": _vm.onpause,
      "finish": _vm.onfinish,
      "fail": _vm.onfail
    }
  }), _c('text', {
    staticClass: ["info"]
  }, [_vm._v("state: " + _vm._s(_vm.state))])]), _c('div', {
    staticClass: ["content", "video-meta"]
  }, [_c('p', {
    staticClass: ["title"]
  }, [_vm._v(_vm._s(_vm.obj.name))]), _c('p', {
    staticClass: ["p__release-date"]
  }, [_vm._v("\n            Published On: " + _vm._s(_vm.obj.release_date))]), _c('p', {
    staticClass: ["p__views"]
  }, [_vm._v("\n            9,000,000 views")]), (_vm.obj.description) ? _c('p', {
    staticClass: ["p__description"]
  }, [_vm._v("\n            " + _vm._s(_vm.obj.description) + "\n            ")]) : _vm._e()], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(94)
)

/* script */
__vue_exports__ = __webpack_require__(95)

/* template */
var __vue_template__ = __webpack_require__(96)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/home/awecode/test/jus-broadcast/src/components/app/video/feature/WatchList.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-afd9c69c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = {
  "bookmark": {
    "verticalAlign": "middle",
    "textAlign": "center",
    "left": 40,
    "position": "relative",
    "display": "table-cell",
    "borderRadius": 2,
    "border": "solid 1px",
    "width": 2,
    "height": 2
  },
  "start-browsing": {
    "left": 7
  }
}

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wxcButton = __webpack_require__(1);

var _wxcButton2 = _interopRequireDefault(_wxcButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: "WatchList",
  components: {
    WxcButton: _wxcButton2.default
  }
}; //
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('p', {
    staticClass: ["bookmark"],
    attrs: {
      "align": "right"
    }
  }, [_c('i', {
    staticClass: ["fas", "fa-bookmark"]
  })], 1), _c('p', {
    staticStyle: {
      fontSize: "0.71rem",
      textAlign: "center"
    }
  }, [_vm._v("\n        Nothing on your watchlist\n    ")]), _c('wxc-button', {
    staticClass: ["start-browsing"],
    staticStyle: {
      width: "650px",
      backgroundColor: "#000"
    },
    attrs: {
      "text": "Start Browsing"
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(98)
)

/* script */
__vue_exports__ = __webpack_require__(99)

/* template */
var __vue_template__ = __webpack_require__(100)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/home/awecode/test/jus-broadcast/src/components/app/user/SignUp.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-58092764"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = {
  "weex-input": {
    "border": "solid 1px black",
    "marginTop": 0.61,
    "marginRight": 0.61,
    "marginBottom": 0.61,
    "marginLeft": 0.61,
    "height": 1
  },
  "login-message": {
    "textAlign": "center"
  }
}

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wxcButton = __webpack_require__(1);

var _wxcButton2 = _interopRequireDefault(_wxcButton);

var _Form = __webpack_require__(15);

var _Form2 = _interopRequireDefault(_Form);

var _Helper = __webpack_require__(2);

var _Helper2 = _interopRequireDefault(_Helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: "Signup",
  data: function data() {
    return {
      currentActiveTab: 1
    };
  },

  components: { WxcButton: _wxcButton2.default },
  mixins: [_Form2.default, _Helper2.default],
  endpoint: "users/create/",
  methods: {
    successCallback: function successCallback(data) {
      // this.$emit('notify', 'Signed up successfully. Please sign in with  your credentials.')
      this.$router.push({ name: 'Home' });
    },
    wxcButtonClicked: function wxcButtonClicked(e) {
      console.log(e);
    }
  },
  mounted: function mounted() {
    // console.log(this.$refs.kl)
    if (this.$store.state.user) {
      this.$router.push({ path: "/" });
    }
  }
};

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["signup"]
  }, [_c('vue-form', {
    attrs: {
      "fields": _vm.fields,
      "action": _vm.endpoint()
    },
    on: {
      "success": _vm.successCallback
    },
    scopedSlots: _vm._u([{
      key: "form-fields",
      fn: function(form) {
        return [_c('input', {
          ref: "kl",
          staticClass: ["input"],
          attrs: {
            "type": "text",
            "placeholder": "Full Name",
            "autofocus": true,
            "value": (_vm.fields.full_name)
          },
          on: {
            "input": function($event) {
              _vm.$set(_vm.fields, "full_name", $event.target.attr.value)
            }
          }
        }), _c('input', {
          staticClass: ["input"],
          attrs: {
            "type": "email",
            "placeholder": "Email",
            "value": (_vm.fields.email)
          },
          on: {
            "input": function($event) {
              _vm.$set(_vm.fields, "email", $event.target.attr.value)
            }
          }
        }), _c('input', {
          staticClass: ["input"],
          attrs: {
            "type": "password",
            "placeholder": "Password",
            "value": (_vm.fields.password)
          },
          on: {
            "input": function($event) {
              _vm.$set(_vm.fields, "password", $event.target.attr.value)
            }
          }
        }), _c('div', {
          staticClass: ["form-button", "has-text-centered"],
          attrs: {
            "slot": "submit control"
          },
          slot: "submit control"
        }, [_c('button', [_vm._v("Sign Up")])], 1)]
      }
    }])
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(102)

/* template */
var __vue_template__ = __webpack_require__(103)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/home/awecode/test/jus-broadcast/src/components/app/user/Profile.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wxcCell = __webpack_require__(11);

var _wxcCell2 = _interopRequireDefault(_wxcCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: "Profile",
  components: {
    WxcCell: _wxcCell2.default
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('image', {
    staticStyle: {
      width: "500px",
      height: "500px",
      margin: "auto",
      padding: "auto",
      borderRadius: "5rem"
    },
    attrs: {
      "src": "https://avatars3.githubusercontent.com/u/17888497?s=460&v=4"
    }
  }), _c('wxc-cell', {
    attrs: {
      "label": "User",
      "title": "Vimm0",
      "hasTopBorder": false
    }
  }), _c('wxc-cell', {
    attrs: {
      "label": "Name",
      "title": "Sandesh Rana",
      "hasTopBorder": false
    }
  }), _c('wxc-cell', {
    attrs: {
      "label": "Email",
      "title": "vimmrana0@gmail.com",
      "hasTopBorder": false
    }
  }), _c('wxc-cell', {
    attrs: {
      "label": "Mobile",
      "title": "**********",
      "hasTopBorder": false
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(105)
)

/* script */
__vue_exports__ = __webpack_require__(106)

/* template */
var __vue_template__ = __webpack_require__(108)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/home/awecode/test/jus-broadcast/src/App.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7ba5bd90"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "logo": {
    "width": "424",
    "height": "200"
  },
  "greeting": {
    "textAlign": "center",
    "marginTop": "70",
    "fontSize": "50",
    "color": "#41B883"
  },
  "message": {
    "marginTop": "30",
    "marginRight": "30",
    "marginBottom": "30",
    "marginLeft": "30",
    "fontSize": "32",
    "color": "#727272"
  }
}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Layout = __webpack_require__(10);

var _Layout2 = _interopRequireDefault(_Layout);

var _axios = __webpack_require__(4);

var _axios2 = _interopRequireDefault(_axios);

var _vue = __webpack_require__(107);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import Helper from "./mixins/Helper";
//import { mapState, mapGetters } from "vuex";
exports.default = {
    name: 'App',
    data: function data() {
        return {
            view: ""
            //                logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
        };
    },

    components: {
        // 'nav': Nav,
        Layout: _Layout2.default
    },
    created: function created() {
        _axios2.default.defaults.xsrfHeaderName = "X-CSRFTOKEN";
        _axios2.default.defaults.xsrfCookieName = "csrftoken";
        _axios2.default.defaults.baseURL = 'http://localhost:8000/v1/';
        global.axios = _axios2.default;
        global.Vue = _vue2.default;
    },

    methods: {
        back: function back() {
            this.$router.back();
        }
    }
};
//    import config from "../configs/config";
//
//
//
//
//
//
//
//
//
//
//
//

//    import Nav from './components/UIComponent/Nav.vue'

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/*!
 * Vue.js v2.5.16
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it... e.g.
 * PhantomJS 1.x. Technically we don't need this anymore since native bind is
 * now more performant in most browsers, but removing it would be breaking for
 * code that was able to run in PhantomJS 1.x, so this must be kept for
 * backwards compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */


/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: process.env.NODE_ENV !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: process.env.NODE_ENV !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
})

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (process.env.NODE_ENV !== 'production') {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  if (!getter && arguments.length === 2) {
    val = obj[key];
  }
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (process.env.NODE_ENV !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (process.env.NODE_ENV !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (process.env.NODE_ENV !== 'production') {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    process.env.NODE_ENV !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (process.env.NODE_ENV !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && process.env.NODE_ENV !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (process.env.NODE_ENV !== 'production') {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (process.env.NODE_ENV !== 'production') {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (process.env.NODE_ENV !== 'production') {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (process.env.NODE_ENV !== 'production') {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    process.env.NODE_ENV !== 'production' &&
    // skip validation for weex recycle-list child component props
    !(false && isObject(value) && ('@binding' in value))
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (process.env.NODE_ENV !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
      ", got " + (toRawType(value)) + ".",
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (process.env.NODE_ENV !== 'production') {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both microtasks and (macro) tasks.
// In < 2.4 we used microtasks everywhere, but there are some scenarios where
// microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using (macro) tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use microtask by default, but expose a way to force (macro) task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine microtask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (process.env.NODE_ENV !== 'production') {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (process.env.NODE_ENV !== 'production') {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    /* istanbul ignore if */
    if (isUndef(cur)) {
      process.env.NODE_ENV !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (process.env.NODE_ENV !== 'production') {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      process.env.NODE_ENV !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                process.env.NODE_ENV !== 'production'
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (process.env.NODE_ENV !== 'production') {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (process.env.NODE_ENV !== 'production') {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (process.env.NODE_ENV !== 'production') {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (process.env.NODE_ENV !== 'production') {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (process.env.NODE_ENV !== 'production') {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = process.env.NODE_ENV !== 'production'
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      process.env.NODE_ENV !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    process.env.NODE_ENV !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (process.env.NODE_ENV !== 'production') {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      process.env.NODE_ENV !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (process.env.NODE_ENV !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (process.env.NODE_ENV !== 'production') {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if (process.env.NODE_ENV !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (process.env.NODE_ENV !== 'production') {
      if (methods[key] == null) {
        warn(
          "Method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (process.env.NODE_ENV !== 'production') {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        defineReactive(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (process.env.NODE_ENV !== 'production') {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if (process.env.NODE_ENV !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      if (process.env.NODE_ENV !== 'production' && slotNodes._rendered) {
        warn(
          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
          "- this will likely cause render errors.",
          this
        );
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      process.env.NODE_ENV !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      process.env.NODE_ENV !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */




// Register the component hook to weex native render engine.
// The hook will be triggered by native, not javascript.


// Updates the state of the component to weex native render engine.

/*  */

// https://github.com/Hanks10100/weex-native-directive/tree/master/component

// listening on native callback

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (process.env.NODE_ENV !== 'production') {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  // Weex specific: invoke recycle-list optimized @render function for
  // extracting cell-slot template.
  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
  /* istanbul ignore if */
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var options = {
    _isComponent: true,
    parent: parent,
    _parentVnode: vnode,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    hooks[key] = componentVNodeHooks[key];
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    process.env.NODE_ENV !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (process.env.NODE_ENV !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (process.env.NODE_ENV !== 'production') {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    // reset _rendered flag on slots for duplicate slot check
    if (process.env.NODE_ENV !== 'production') {
      for (var key in vm.$slots) {
        // $flow-disable-line
        vm.$slots[key]._rendered = false;
      }
    }

    if (_parentVnode) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (process.env.NODE_ENV !== 'production' && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production' && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
}

var builtInComponents = {
  KeepAlive: KeepAlive
}

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (process.env.NODE_ENV !== 'production') {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.5.16';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);



var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      process.env.NODE_ENV !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
}

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (process.env.NODE_ENV !== 'production') {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (process.env.NODE_ENV !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (process.env.NODE_ENV !== 'production') {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (process.env.NODE_ENV !== 'production') {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (process.env.NODE_ENV !== 'production') {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (process.env.NODE_ENV !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (process.env.NODE_ENV !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (process.env.NODE_ENV !== 'production') {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
}

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
]

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
}

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
}

/*  */

/*  */









// add a raw attr (use this in preTransforms)








// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.

/*  */

/**
 * Cross-platform code generation for component v-model
 */


/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
}

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
}

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def) {
  if (!def) {
    return
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res
  } else if (typeof def === 'string') {
    return autoCssTransition(def)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (process.env.NODE_ENV !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (process.env.NODE_ENV !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {}

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
]

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    process.env.NODE_ENV !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
}

var platformDirectives = {
  model: directive,
  show: show
}

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (process.env.NODE_ENV !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
}

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (process.env.NODE_ENV !== 'production') {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
}

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
}

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        process.env.NODE_ENV !== 'production' &&
        process.env.NODE_ENV !== 'test' &&
        isChrome
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if (process.env.NODE_ENV !== 'production' &&
      process.env.NODE_ENV !== 'test' &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);


/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    on: {
      "androidback": _vm.back
    }
  }, [_c('router-view', {
    staticStyle: {
      flex: "1"
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);