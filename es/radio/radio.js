import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
import * as React from 'react';
import RcCheckbox from 'rc-checkbox';
import classNames from 'classnames';
import { composeRef } from "rc-util/es/ref";
import { useContext } from 'react';
import { FormItemInputContext } from '../form/context';
import { ConfigContext } from '../config-provider';
import RadioGroupContext, { RadioOptionTypeContext } from './context';
import devWarning from '../_util/devWarning';
var InternalRadio = function InternalRadio(props, ref) {
  var _classNames;
  var groupContext = React.useContext(RadioGroupContext);
  var radioOptionTypeContext = React.useContext(RadioOptionTypeContext);
  var _React$useContext = React.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var innerRef = React.useRef();
  var mergedRef = composeRef(ref, innerRef);
  var _useContext = useContext(FormItemInputContext),
    isFormItemInput = _useContext.isFormItemInput;
  React.useEffect(function () {
    devWarning(!('optionType' in props), 'Radio', '`optionType` is only support in Radio.Group.');
  }, []);
  var onChange = function onChange(e) {
    var _a, _b;
    (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, e);
    (_b = groupContext === null || groupContext === void 0 ? void 0 : groupContext.onChange) === null || _b === void 0 ? void 0 : _b.call(groupContext, e);
  };
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    children = props.children,
    style = props.style,
    restProps = __rest(props, ["prefixCls", "className", "children", "style"]);
  var radioPrefixCls = getPrefixCls('radio', customizePrefixCls);
  var prefixCls = ((groupContext === null || groupContext === void 0 ? void 0 : groupContext.optionType) || radioOptionTypeContext) === 'button' ? "".concat(radioPrefixCls, "-button") : radioPrefixCls;
  var radioProps = _extends({}, restProps);
  if (groupContext) {
    radioProps.name = groupContext.name;
    radioProps.onChange = onChange;
    radioProps.checked = props.value === groupContext.value;
    radioProps.disabled = props.disabled || groupContext.disabled;
  }
  var wrapperClassString = classNames("".concat(prefixCls, "-wrapper"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-wrapper-checked"), radioProps.checked), _defineProperty(_classNames, "".concat(prefixCls, "-wrapper-disabled"), radioProps.disabled), _defineProperty(_classNames, "".concat(prefixCls, "-wrapper-rtl"), direction === 'rtl'), _defineProperty(_classNames, "".concat(prefixCls, "-wrapper-in-form-item"), isFormItemInput), _classNames), className);
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    React.createElement("label", {
      className: wrapperClassString,
      style: style,
      onMouseEnter: props.onMouseEnter,
      onMouseLeave: props.onMouseLeave
    }, /*#__PURE__*/React.createElement(RcCheckbox, _extends({}, radioProps, {
      type: "radio",
      prefixCls: prefixCls,
      ref: mergedRef
    })), children !== undefined ? /*#__PURE__*/React.createElement("span", null, children) : null)
  );
};
var Radio = /*#__PURE__*/React.forwardRef(InternalRadio);
Radio.displayName = 'Radio';
export default Radio;