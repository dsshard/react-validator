module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("react")},function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),i=r(0),u=r.n(i),l=o.a.createContext("Validator");function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var y=function(e){function t(){var e,r,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,u=new Array(i),l=0;l<i;l++)u[l]=arguments[l];return n=this,o=(e=c(t)).call.apply(e,[this].concat(u)),r=!o||"object"!==a(o)&&"function"!=typeof o?f(n):o,d(f(r),"registerField",function(e){e&&!r.fields.includes(e)&&r.fields.push(e)}),d(f(r),"unregisterField",function(e){var t=r.fields.indexOf(e);e&&t>-1&&r.fields.splice(t,1)}),d(f(r),"getField",function(e){return r.fields.find(function(t){return t.props.id===e})||null}),d(f(r),"validate",function(){var e,t=r.props.stopAtFirstError,n=r.fields.map(function(r){return t&&e&&!1===e.isValid?null:e=r.validate()}).filter(function(e){return e}).filter(function(e){return!1===e.isValid});return n.length?Object.assign(n[0],{errors:n}):{isValid:!0,message:""}}),r}var r,i,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,n["Component"]),r=t,(i=[{key:"UNSAFE_componentWillMount",value:function(){this.fields=[]}},{key:"UNSAFE_componentWillUnmount",value:function(){this.fields=[]}},{key:"render",value:function(){var e=this.registerField,t=this.unregisterField,r=this.props.children;return o.a.createElement(l.Provider,{value:{registerField:e,unregisterField:t}},r)}}])&&s(r.prototype,i),u&&s(r,u),t}();y.propTypes={children:u.a.node.isRequired,stopAtFirstError:u.a.bool},y.defaultProps={stopAtFirstError:!1};var b=y;function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var P=function(e){function t(){var e,r,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,u=new Array(i),l=0;l<i;l++)u[l]=arguments[l];return n=this,o=(e=v(t)).call.apply(e,[this].concat(u)),r=!o||"object"!==m(o)&&"function"!=typeof o?O(n):o,function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(O(r),"validate",function(){var e=!0,t="",n=r.props,o=n.rules,i=n.value,u=n.required,l=n.id,a=!i&&0!==parseFloat(i);return!o.length||a&&!1===u?{isValid:e,message:t,id:l}:(o.forEach(function(r){e&&((e=r.rule(i))||(t=r.message))}),{isValid:e,message:t,id:l})}),r}var r,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,n["Component"]),r=t,(o=[{key:"UNSAFE_componentWillUnmount",value:function(){(0,this.props.unregisterField)(this)}},{key:"UNSAFE_componentWillMount",value:function(){(0,this.props.registerField)(this)}},{key:"render",value:function(){var e=this.props,t=e.children,r=e.value,n=this.validate();return"function"==typeof t?t(n,r):t}}])&&h(r.prototype,o),i&&h(r,i),t}(),j=function(e){return o.a.createElement(l.Consumer,null,function(t){return o.a.createElement(P,g({},e,{registerField:t.registerField,unregisterField:t.unregisterField}))})};P.propTypes={registerField:u.a.func.isRequired,unregisterField:u.a.func.isRequired,children:u.a.oneOfType([u.a.node,u.a.func]),id:u.a.string,rules:u.a.arrayOf(u.a.shape({message:u.a.string,rule:u.a.func})),required:u.a.bool,value:u.a.any},P.defaultProps={rules:[],children:null,required:!0,value:void 0,id:""};var _=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,F={notEmpty:[{rule:function(e){return""!==e&&e.length>0},message:"Value is required"}],bool:[{rule:function(e){return!!e},message:"Required value"}],password:[{rule:function(e){return e.length>0},message:"Password field cannot be empty"},{rule:function(e){return e.length>5},message:"Password field can not be less than 6 characters"}],repeatPassword:function(e){return[{rule:function(e){return e.length>0},message:"Password field cannot be empty"},{rule:function(e){return e.length>5},message:"Password field can not be less than 6 characters"},{rule:function(t){return t===e},message:"Passwords do not match"}]},email:[{rule:function(e){return""!==e&&0!==e.length},message:"Email is required"},{rule:function(e){return _.test(String(e).toLowerCase())},message:"Email is invalid"}]};r.d(t,"ValidatorField",function(){return j}),r.d(t,"rules",function(){return F});t.default=b}]);