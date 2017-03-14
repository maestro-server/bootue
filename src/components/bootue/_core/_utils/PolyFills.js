/**
 * Array.find
 */
if (!Array.prototype.find) {
  Array.prototype.find = function (predicate) {
    'use strict';
    if (this == null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    let list = Object(this);
    let length = list.length >>> 0;
    let thisArg = arguments[1];
    let value;

    for (let i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}

/*
 * classList.js: Cross-browser full element.classList implementation.
 * 1.1.20150312
 *
 * By Eli Grey, http://eligrey.com
 * License: Dedicated to the public domain.
 *   See https://github.com/eligrey/classList.js/blob/master/LICENSE.md
 */
/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
if ("document" in self) {
  // Full polyfill for browsers with no classList support
  // Including IE < Edge missing SVGElement.classList
  if (!("classList" in document.createElement("_")) ||
    document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg", "g"))) {

    (function (view) {

      "use strict";

      if (!('Element' in view)) return;

      let classListProp = "classList"
      let protoProp = "prototype"
      let elemCtrProto = view.Element[protoProp]
      let objCtr = Object
      let strTrim = String[protoProp].trim || function () {
        return this.replace(/^\s+|\s+$/g, "");
      }

      let arrIndexOf = Array[protoProp].indexOf || function (item) {
        let i = 0
        let len = this.length

        for (; i < len; i++) {
          if (i in this && this[i] === item) {
            return i;
          }
        }

        return -1
      }

      let DOMEx = function (type, message) {
        this.name = type;
        this.code = DOMException[type];
        this.message = message;
      }

      let checkTokenAndGetIndex = function (classList, token) {
        if (token === "") {
          throw new DOMEx(
            "SYNTAX_ERR"
            , "An invalid or illegal string was specified"
          );
        }
        if (/\s/.test(token)) {
          throw new DOMEx(
            "INVALID_CHARACTER_ERR"
            , "String contains an invalid character"
          );
        }
        return arrIndexOf.call(classList, token);
      }

      let ClassList = function (elem) {
        let trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
        let classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
        let i = 0
        let len = classes.length

        for (; i < len; i++) {
          this.push(classes[i]);
        }
        this._updateClassName = function () {
          elem.setAttribute("class", this.toString());
        };
      }

      let classListProto = ClassList[protoProp] = []
      let classListGetter = function () {
        return new ClassList(this);
      };
      // Most DOMException implementations don't allow calling DOMException's toString()
      // on non-DOMExceptions. Error's toString() is sufficient here.
      DOMEx[protoProp] = Error[protoProp];
      classListProto.item = function (i) {
        return this[i] || null;
      };
      classListProto.contains = function (token) {
        token += "";
        return checkTokenAndGetIndex(this, token) !== -1;
      };
      classListProto.add = function () {
        var tokens = arguments
        let i = 0
        let l = tokens.length
        let token
        let updated = false

        do {
          token = tokens[i] + "";
          if (checkTokenAndGetIndex(this, token) === -1) {
            this.push(token);
            updated = true;
          }
        }
        while (++i < l);

        if (updated) {
          this._updateClassName();
        }
      };
      classListProto.remove = function () {
        let tokens = arguments
        let i = 0
        let l = tokens.length
        let token
        let updated = false
        let index

        do {
          token = tokens[i] + "";
          index = checkTokenAndGetIndex(this, token);
          while (index !== -1) {
            this.splice(index, 1);
            updated = true;
            index = checkTokenAndGetIndex(this, token);
          }
        }
        while (++i < l);

        if (updated) {
          this._updateClassName();
        }
      };
      classListProto.toggle = function (token, force) {
        token += "";

        let result = this.contains(token)
        let method = result ? force !== true && "remove" : force !== false && "add";

        if (method) {
          this[method](token);
        }

        if (force === true || force === false) {
          return force;
        } else {
          return !result;
        }
      };
      classListProto.toString = function () {
        return this.join(" ");
      };

      if (objCtr.defineProperty) {
        let classListPropDesc = {
          get: classListGetter, enumerable: true, configurable: true
        };
        try {
          objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
        } catch (ex) { // IE 8 doesn't support enumerable:true
          if (ex.number === -0x7FF5EC54) {
            classListPropDesc.enumerable = false;
            objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
          }
        }
      } else if (objCtr[protoProp].__defineGetter__) {
        elemCtrProto.__defineGetter__(classListProp, classListGetter);
      }

    }(self));

  } else {
    // There is full or partial native classList support, so just check if we need
    // to normalize the add/remove and toggle APIs.

    (function () {
      "use strict";

      let testElement = document.createElement("_");

      testElement.classList.add("c1", "c2");

      // Polyfill for IE 10/11 and Firefox <26, where classList.add and
      // classList.remove exist but support only one argument at a time.
      if (!testElement.classList.contains("c2")) {
        let createMethod = function (method) {
          let original = DOMTokenList.prototype[method];

          DOMTokenList.prototype[method] = function (token) {
            let i
            let len = arguments.length

            for (i = 0; i < len; i++) {
              token = arguments[i];
              original.call(this, token);
            }
          };
        };
        createMethod('add');
        createMethod('remove');
      }

      testElement.classList.toggle("c3", false);

      // Polyfill for IE 10 and Firefox <24, where classList.toggle does not
      // support the second argument.
      if (testElement.classList.contains("c3")) {
        let _toggle = DOMTokenList.prototype.toggle;

        DOMTokenList.prototype.toggle = function (token, force) {
          if (1 in arguments && !this.contains(token) === !force) {
            return force;
          } else {
            return _toggle.call(this, token);
          }
        };

      }

      testElement = null;
    }());

  }

}
