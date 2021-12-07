import _react from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2019,mode=imports/optimized/react.js";
import _isomorphicFetch from "/-/isomorphic-fetch@v2.2.1-rA8qaHibNHjyRBO8TIWm/dist=es2019,mode=imports/optimized/isomorphic-fetch.js";
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var reactFetch = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _createClass = function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  var _get = function get(_x, _x2, _x3) {
    var _again = true;
    _function:
      while (_again) {
        var object = _x, property = _x2, receiver = _x3;
        _again = false;
        if (object === null)
          object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);
        if (desc === void 0) {
          var parent = Object.getPrototypeOf(object);
          if (parent === null) {
            return void 0;
          } else {
            _x = parent;
            _x2 = property;
            _x3 = receiver;
            _again = true;
            desc = parent = void 0;
            continue _function;
          }
        } else if ("value" in desc) {
          return desc.value;
        } else {
          var getter = desc.get;
          if (getter === void 0) {
            return void 0;
          }
          return getter.call(receiver);
        }
      }
  };
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, enumerable: false, writable: true, configurable: true}});
    if (superClass)
      Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var _react2 = _interopRequireDefault(_react);
  var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);
  var fetch = _isomorphicFetch2["default"].bind(void 0);
  var Fetch = function(_React$Component) {
    _inherits(Fetch2, _React$Component);
    function Fetch2(props) {
      _classCallCheck(this, Fetch2);
      _get(Object.getPrototypeOf(Fetch2.prototype), "constructor", this).call(this);
      this.state = {};
      this.fetchData(props);
    }
    _createClass(Fetch2, [{
      key: "fetchData",
      value: function fetchData(props) {
        var _this = this;
        fetch(props.url, props.options || {}).then(function(res) {
          return res.json();
        }).then(function(json) {
          _this.setState(json);
          if (_this.props.onSuccess)
            _this.props.onSuccess(json);
        })["catch"](function(error) {
          if (_this.props.onError)
            _this.props.onError(error);
        });
      }
    }, {
      key: "children",
      value: function children() {
        var _this2 = this;
        return _react2["default"].Children.map(this.props.children, function(child) {
          return _react2["default"].cloneElement(child, _this2.state);
        });
      }
    }, {
      key: "render",
      value: function render() {
        return _react2["default"].createElement("div", null, this.children());
      }
    }]);
    return Fetch2;
  }(_react2["default"].Component);
  exports["default"] = Fetch;
  module.exports = exports["default"];
});
var reactFetch$1 = /* @__PURE__ */ getDefaultExportFromCjs(reactFetch);
export default reactFetch$1;
