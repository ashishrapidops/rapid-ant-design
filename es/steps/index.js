import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
import * as React from 'react';
import RcSteps from 'rc-steps';
import CheckOutlined from "@ant-design/icons/es/icons/CheckOutlined";
import CloseOutlined from "@ant-design/icons/es/icons/CloseOutlined";
import classNames from 'classnames';
import { ConfigContext } from '../config-provider';
import Progress from '../progress';
import useBreakpoint from '../grid/hooks/useBreakpoint';
var Steps = function Steps(props) {
  var _classNames;
  var percent = props.percent,
    size = props.size,
    className = props.className,
    direction = props.direction,
    responsive = props.responsive,
    restProps = __rest(props, ["percent", "size", "className", "direction", "responsive"]);
  var _useBreakpoint = useBreakpoint(responsive),
    xs = _useBreakpoint.xs;
  var _React$useContext = React.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    rtlDirection = _React$useContext.direction;
  var getDirection = React.useCallback(function () {
    return responsive && xs ? 'vertical' : direction;
  }, [xs, direction]);
  var prefixCls = getPrefixCls('steps', props.prefixCls);
  var iconPrefix = getPrefixCls('', props.iconPrefix);
  var stepsClassName = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-rtl"), rtlDirection === 'rtl'), _defineProperty(_classNames, "".concat(prefixCls, "-with-progress"), percent !== undefined), _classNames), className);
  var icons = {
    finish: /*#__PURE__*/React.createElement(CheckOutlined, {
      className: "".concat(prefixCls, "-finish-icon")
    }),
    error: /*#__PURE__*/React.createElement(CloseOutlined, {
      className: "".concat(prefixCls, "-error-icon")
    })
  };
  var stepIconRender = function stepIconRender(_ref) {
    var node = _ref.node,
      status = _ref.status;
    if (status === 'process' && percent !== undefined) {
      // currently it's hard-coded, since we can't easily read the actually width of icon
      var progressWidth = size === 'small' ? 32 : 40;
      var iconWithProgress = /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-progress-icon")
      }, /*#__PURE__*/React.createElement(Progress, {
        type: "circle",
        percent: percent,
        width: progressWidth,
        strokeWidth: 4,
        format: function format() {
          return null;
        }
      }), node);
      return iconWithProgress;
    }
    return node;
  };
  return /*#__PURE__*/React.createElement(RcSteps, _extends({
    icons: icons
  }, restProps, {
    size: size,
    direction: getDirection(),
    stepIcon: stepIconRender,
    prefixCls: prefixCls,
    iconPrefix: iconPrefix,
    className: stepsClassName
  }));
};
Steps.Step = RcSteps.Step;
Steps.defaultProps = {
  current: 0,
  responsive: true
};
export default Steps;