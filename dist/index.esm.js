import ConfigProvider from 'antd/lib/config-provider';
import zhCN from 'antd/lib/locale/zh_CN';
import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { Modal, Form } from 'antd';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".modal :global .ant-modal {\n  font-size: 12px;\n}\n.modal :global .ant-modal-header {\n  padding: 8px 16px;\n}\n.modal :global .ant-modal-title {\n  font-weight: 500;\n  font-size: 14px;\n  letter-spacing: 2px;\n}\n.modal :global .ant-modal-close-x {\n  height: 39px;\n  font-size: 12px;\n  line-height: 39px;\n}\n.modal :global .ant-btn {\n  font-size: 12px;\n}\n.modal :global .ant-modal-footer {\n  padding: 6px 16px;\n}\n.modal :global .ant-form-item {\n  margin: 0;\n  font-size: 12px;\n}\n.modal :global .ant-form-item-label > label {\n  font-size: 12px;\n}\n.modal :global .ant-modal-body {\n  padding: 16px 16px 24px 16px;\n}\n";
styleInject(css_248z);

var _excluded = ["afterClose"],
    _excluded2 = ["afterClose"],
    _excluded3 = ["onOk", "onCancel", "children", "okButtonProps"];
var destroyFns = [];
var uuid = 0;
/**
 * 构建Modal
 */

function createModal(component, modalProps) {
  var _ref = modalProps || {},
      afterClose = _ref.afterClose,
      restModalProps = _objectWithoutProperties(_ref, _excluded);

  var modalRoot;
  return new Promise(function (resolve, reject) {
    uuid += 1;

    var removeDom = function removeDom() {
      setTimeout(function () {
        var _modalRoot;

        return (_modalRoot = modalRoot) === null || _modalRoot === void 0 ? void 0 : _modalRoot.unmount();
      }, 1000);
      document.body.contains(rootEl) && document.body.removeChild(rootEl);
    };

    var handleSubmit = function handleSubmit(value) {
      resolve(value);
    };

    var handleAfterClose = function handleAfterClose() {
      removeDom();
      destroyFns = destroyFns.filter(function (fn) {
        return fn === removeDom;
      });
      reject();
      afterClose && afterClose();
    };

    var ele = /*#__PURE__*/React.cloneElement(component, _objectSpread2({
      key: uuid,
      afterClose: handleAfterClose,
      onSubmit: handleSubmit
    }, restModalProps));
    var modal = /*#__PURE__*/React.createElement(ConfigProvider, {
      locale: zhCN
    }, ele);
    var rootEl = document.createElement('div');
    document.body.appendChild(rootEl);
    modalRoot = ReactDOM.createRoot(rootEl);
    modalRoot.render(modal);
    destroyFns.push(removeDom);
  });
}
function createFormModalOrigin(formComponent, modalProps) {
  var _ref2 = modalProps || {},
      afterClose = _ref2.afterClose,
      restModalProps = _objectWithoutProperties(_ref2, _excluded2);

  var modalRoot;
  return new Promise(function (resolve, reject) {
    uuid += 1;
    var ref = /*#__PURE__*/React.createRef();

    var removeDom = function removeDom() {
      setTimeout(function () {
        var _modalRoot2;

        return (_modalRoot2 = modalRoot) === null || _modalRoot2 === void 0 ? void 0 : _modalRoot2.unmount();
      }, 1000);
      document.body.contains(rootEl) && document.body.removeChild(rootEl);
    };

    var handleSubmit = function handleSubmit(value) {
      resolve(value);
    };

    var handleFinish = function handleFinish(values) {
      var _ref$current;

      (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.setVisible(false);
    };

    var handleAfterClose = function handleAfterClose() {
      removeDom();
      destroyFns = destroyFns.filter(function (fn) {
        return fn === removeDom;
      });
      reject();
      afterClose && afterClose();
    };

    var ele = /*#__PURE__*/React.cloneElement(formComponent, {
      onSubmit: handleSubmit,
      onFinish: handleFinish
    });
    var modal = /*#__PURE__*/React.createElement(ConfigProvider, {
      locale: zhCN
    }, /*#__PURE__*/React.createElement(ModalComponent, _objectSpread2({
      ref: ref,
      key: uuid,
      afterClose: handleAfterClose
    }, restModalProps), ele));
    var rootEl = document.createElement('div');
    document.body.appendChild(rootEl);
    modalRoot = ReactDOM.createRoot(rootEl);
    modalRoot.render(modal);
    destroyFns.push(removeDom);
  }).catch(function () {});
}
function createFormModal(component, modalProps, formProps) {
  var FormComponent = createModalFormComponent(component, formProps);
  return createFormModalOrigin( /*#__PURE__*/React.createElement(FormComponent, null), modalProps);
}
/**
 * 弹窗组件
 * @param props
 */

var ModalComponent = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _onOk = props.onOk,
      _onCancel = props.onCancel,
      children = props.children,
      okButtonProps = props.okButtonProps,
      restProps = _objectWithoutProperties(props, _excluded3);

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var contentRef = useRef();
  var realChildren = /*#__PURE__*/React.cloneElement(children, {
    ref: contentRef
  });
  ref.current = {
    visible: visible,
    setVisible: setVisible
  };
  return /*#__PURE__*/React.createElement(Modal, _objectSpread2({
    className: css_248z.modal,
    visible: visible,
    title: "\u5BF9\u8BDD\u6846",
    mask: false,
    onCancel: function onCancel(e) {
      _onCancel && _onCancel(e);
      setVisible(false);
    },
    onOk: function () {
      var _onOk2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        var contentInstance;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setLoading(true);
                contentInstance = contentRef.current;
                _context.prev = 2;
                _context.next = 5;
                return (contentInstance === null || contentInstance === void 0 ? void 0 : contentInstance.submit) && contentInstance.submit();

              case 5:
                _onOk && _onOk(e);
                setVisible(false);
                _context.next = 11;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](2);

              case 11:
                setLoading(false);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 9]]);
      }));

      function onOk(_x) {
        return _onOk2.apply(this, arguments);
      }

      return onOk;
    }(),
    okButtonProps: _objectSpread2({
      loading: loading
    }, okButtonProps)
  }, restProps), realChildren);
});
/**
 * 默认弹窗表单组件
 */

function createModalFormComponent(component, formProps) {
  return /*#__PURE__*/function (_React$Component) {
    _inherits(ModalFormComponent, _React$Component);

    var _super = _createSuper(ModalFormComponent);

    function ModalFormComponent() {
      var _this;

      _classCallCheck(this, ModalFormComponent);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      _this.formRef = /*#__PURE__*/React.createRef();

      _this.handleFinish = function (values) {
        _this.props.onSubmit && _this.props.onSubmit(values);
        _this.props.onFinish && _this.props.onFinish(values);
      };

      return _this;
    }

    _createClass(ModalFormComponent, [{
      key: "submit",
      value: function submit() {
        var _this$formRef, _this$formRef$current;

        var onSubmit = this.props.onSubmit;
        return (_this$formRef = this.formRef) === null || _this$formRef === void 0 ? void 0 : (_this$formRef$current = _this$formRef.current) === null || _this$formRef$current === void 0 ? void 0 : _this$formRef$current.validateFields().then(function (values) {
          onSubmit && onSubmit(values);
        });
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement(Form, _objectSpread2({
          ref: this.formRef,
          onFinish: this.handleFinish
        }, formProps), component);
      }
    }]);

    return ModalFormComponent;
  }(React.Component);
}

export { createFormModal, createFormModalOrigin, createModal, createModalFormComponent };
