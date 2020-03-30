import { R as ResponsiveButton, M as __makeTemplateObject, N as BaseButton, Q as BaseCard, W as CardType, _ as __assign, X as States, Y as __rest, Z as BaseCardLabel, $ as defaultStyledTheme, a0 as ButtonGroupItem, a1 as __extends, a2 as Animations, a3 as ButtonGroupWrapper, a4 as Components, a5 as inject, a6 as observer, a7 as ToolbarIcons, a8 as SimpleBar, a9 as CardType$1, aa as AdjustmentIcons, ab as TextToolStore, T as Tool, ac as __decorate, ad as ToolControlBarIcons, ae as FocusToolStore, af as ColorList, ag as StickerToolStore, ah as AlignIcons, ai as TextDesignToolStore, aj as FrameToolStore, ak as BrushToolStore, al as TransformScaleInput, am as FlipRotateControls, an as Modal, ao as CanvasArea, ap as CanvasBar, aq as CanvasContainer, ar as CustomComponentsFactory, as as Provider } from './index-1287cbee.js';
export { b as deepmergeAll, d as defaultConfig } from './index-1287cbee.js';
import React from 'react';
import 'react-dom';
import './engine.development.js';
import styled, { css, ThemeProvider } from 'styled-components';

var OutlinedPrimaryButton = styled(ResponsiveButton)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n  min-height: 32px;\n  min-width: 32px;\n"], ["\n  background: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n  min-height: 32px;\n  min-width: 32px;\n"])), function (props) { return props.theme.button.outlinedPrimaryBackground; }, function (props) { return props.theme.button.outlinedPrimaryForeground; }, function (props) { return props.theme.button.outlinedBorderColor; });
var templateObject_1;

var OutlinedSecondaryButton = styled(ResponsiveButton)(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  background: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n  min-height: 32px;\n  min-width: 32px;\n"], ["\n  background: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n  min-height: 32px;\n  min-width: 32px;\n"])), function (props) { return props.theme.button.outlinedSecondaryBackground; }, function (props) { return props.theme.button.outlinedSecondaryForeground; }, function (props) { return props.theme.button.outlinedBorderColor; });
var templateObject_1$1;

var TextSecondaryButton = styled(BaseButton)(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  color: ", ";\n  height: 32px;\n  span.disabled {\n    display: none;\n  }\n  &:disabled,\n  &.disabled {\n    opacity: ", ";\n  }\n"], ["\n  color: ", ";\n  height: 32px;\n  span.disabled {\n    display: none;\n  }\n  &:disabled,\n  &.disabled {\n    opacity: ", ";\n  }\n"])), function (props) { return props.theme.button.textSecondaryForeground; }, function (props) { return props.theme.button.textInactiveOpacity; });
var templateObject_1$2;

var MediumCard = styled(BaseCard)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  margin: 2px;\n  width: ", "px;\n  height: ", "px;\n"], ["\n  margin: 2px;\n  width: ", "px;\n  height: ", "px;\n"])), function (props) { return props.theme.measurements.basicCard.medium.width; }, function (props) { return props.theme.measurements.basicCard.medium.height; });
var templateObject_1$3;

var LargeCard = styled(BaseCard)(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  margin: 2px;\n  width: ", "px;\n  height: ", "px;\n"], ["\n  margin: 2px;\n  width: ", "px;\n  height: ", "px;\n"])), function (props) { return props.theme.measurements.basicCard.large.width; }, function (props) { return props.theme.measurements.basicCard.large.height; });
var templateObject_1$4;

var Card = function (props) {
    var isLargeCard = props.type === CardType.LARGE;
    var CardOfType = MediumCard;
    if (isLargeCard) {
        CardOfType = LargeCard;
    }
    return React.createElement(CardOfType, __assign({}, props));
};

var ContainerStyles = css(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  width: 100%;\n  height: inherit;\n  white-space: nowrap;\n  overflow: auto;\n  transition-property: width;\n  transition-duration: 0.4s;\n  transition-timing-function: ease-in;\n  ", "\n"], ["\n  width: 100%;\n  height: inherit;\n  white-space: nowrap;\n  overflow: auto;\n  transition-property: width;\n  transition-duration: 0.4s;\n  transition-timing-function: ease-in;\n  ", "\n"])), States.HiddenScrollbar);
var Div = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding-top: 4px;\n"], ["\n  padding-top: 4px;\n"])));
var HorizontalScrollableContainerStyles = styled.div.attrs({
    'data-simplebar': 'init',
    'data-simplebar-auto-hide': 'false',
})(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), ContainerStyles);
var HorizontalScrollableContainer = function (props) {
    var children = props.children, rest = __rest(props, ["children"]);
    return (React.createElement(HorizontalScrollableContainerStyles, __assign({}, rest),
        React.createElement(Div, null, children)));
};
var HorizontalDynamicScrollableContainerStyles = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), ContainerStyles);
var HorizontalDynamicScrollableContainer = function (props) {
    var children = props.children, rest = __rest(props, ["children"]);
    return (React.createElement(HorizontalDynamicScrollableContainerStyles, __assign({}, rest),
        React.createElement(Div, null, children)));
};
var templateObject_1$5, templateObject_2, templateObject_3, templateObject_4;

var CardLabel = styled(BaseCardLabel)(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  height: 32px;\n  font-size: ", "px;\n"], ["\n  height: 32px;\n  font-size: ", "px;\n"])), function (props) { return props.theme.measurements.fontSystem.label2.size; });
var templateObject_1$6;

var ToolOptionsbarStyles = styled.div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  flex-shrink: 0;\n  height: ", "px;\n  width: 100%;\n  text-align: center;\n  z-index: ", ";\n  ", "\n"], ["\n  position: relative;\n  overflow: hidden;\n  flex-shrink: 0;\n  height: ", "px;\n  width: 100%;\n  text-align: center;\n  z-index: ", ";\n  ",
    "\n"])), function (props) { return props.theme.measurements.basicToolControlBar.itemsBarHeight; }, function (props) { return props.theme.measurements.zIndex.toolControlBar; }, function (props) {
    return props.show
        ? css(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n          transition-timing-function: ease-in;\n          transition-duration: 0.3s;\n          transition-property: all;\n          padding: 2px;\n          max-height: ", "px;\n          background: ", ";\n          color: ", ";\n        "], ["\n          transition-timing-function: ease-in;\n          transition-duration: 0.3s;\n          transition-property: all;\n          padding: 2px;\n          max-height: ", "px;\n          background: ", ";\n          color: ", ";\n        "])), props.theme.measurements.basicToolControlBar.itemsBarHeight, props.theme.toolControlBar.background, props.theme.toolControlBar.inputLabelForeground) : css(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n          max-height: 0px;\n        "], ["\n          max-height: 0px;\n        "])));
});
var ToolOptionsbar = function (_a) {
    var show = _a.show, children = _a.children;
    return (React.createElement(ToolOptionsbarStyles, { show: show }, children));
};
ToolOptionsbarStyles.defaultProps = { theme: defaultStyledTheme, show: true };
var templateObject_1$7, templateObject_2$1, templateObject_3$1;

var Separator = styled.div(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  height: ", "px;\n  width: 2px;\n  margin: 0 10px;\n  display: inline-flex;\n  position: relative;\n  &:after {\n    content: ' ';\n    right: 0px;\n    position: absolute;\n    top: 8px;\n    height: calc(100% - 16px);\n    border-right: 1px solid ", ";\n  }\n"], ["\n  height: ", "px;\n  width: 2px;\n  margin: 0 10px;\n  display: inline-flex;\n  position: relative;\n  &:after {\n    content: ' ';\n    right: 0px;\n    position: absolute;\n    top: 8px;\n    height: calc(100% - 16px);\n    border-right: 1px solid ", ";\n  }\n"])), function (props) { return props.theme.measurements.basicToolControlBar.itemsBarHeight; }, function (props) { return props.theme.toolControlBar.separatorColor; });
var templateObject_1$8;

var BasicToolControlsBar = styled.div(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  flex-shrink: 0;\n  height: auto;\n  transition: max-height 0.4s ease-in-out;\n  ", "\n"], ["\n  position: relative;\n  display: flex;\n  flex-shrink: 0;\n  height: auto;\n  transition: max-height 0.4s ease-in-out;\n  ",
    "\n"])), function (props) {
    return props.show
        ? css(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n          max-height: 80px;\n        "], ["\n          max-height: 80px;\n        "]))) : css(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n          max-height: 0px;\n        "], ["\n          max-height: 0px;\n        "])));
});
BasicToolControlsBar.defaultProps = { theme: defaultStyledTheme, show: true };
var templateObject_1$9, templateObject_2$2, templateObject_3$2;

var Separator$1 = styled.div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  &:after {\n    content: '';\n    position: absolute;\n    bottom: 0px;\n    ", "\n    border-bottom: 1px solid ", ";\n  }\n"], ["\n  &:after {\n    content: '';\n    position: absolute;\n    bottom: 0px;\n    ",
    "\n    border-bottom: 1px solid ", ";\n  }\n"])), function (props) {
    return props.full
        ? css(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n            left: -24px;\n            width: calc(100% + 48px);\n          "], ["\n            left: -24px;\n            width: calc(100% + 48px);\n          "]))) : "\n      left: 24px;\n      width: calc(100% - 48px);\n    ";
}, function (props) { return props.theme.toolControlBar.separatorColor; });
Separator$1.defaultProps = { theme: defaultStyledTheme };
var templateObject_1$a, templateObject_2$3;

var ControlsWrapper = styled.div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  text-align: -moz-center;\n  text-align: center;\n  text-align: -webkit-center;\n  overflow: visible;\n  margin: 0 10vw;\n  height: auto;\n  @media all and (min-width: 0) and (max-width: 599px) {\n    margin: 0 5vw;\n  }\n"], ["\n  text-align: -moz-center;\n  text-align: center;\n  text-align: -webkit-center;\n  overflow: visible;\n  margin: 0 10vw;\n  height: auto;\n  @media all and (min-width: 0) and (max-width: 599px) {\n    margin: 0 5vw;\n  }\n"])));
var templateObject_1$b;

var FlexWrapper = styled.div(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  position: absolute;\n  left: 0%;\n  transform: translateY(0%) scaleY(0);\n  justify-content: center;\n  padding: 0 5vw;\n  width: 90%;\n  height: ", "px;\n  display: flex;\n  align-items: center;\n  overflow-y: hidden;\n  transition: transform 0.4s ease-in-out;\n  z-index: ", ";\n  background: ", ";\n  color: ", ";\n  &.show {\n    transform: translateY(-100%) scaleY(1);\n    overflow: visible;\n  }\n"], ["\n  position: absolute;\n  left: 0%;\n  transform: translateY(0%) scaleY(0);\n  justify-content: center;\n  padding: 0 5vw;\n  width: 90%;\n  height: ", "px;\n  display: flex;\n  align-items: center;\n  overflow-y: hidden;\n  transition: transform 0.4s ease-in-out;\n  z-index: ", ";\n  background: ", ";\n  color: ", ";\n  &.show {\n    transform: translateY(-100%) scaleY(1);\n    overflow: visible;\n  }\n"])), function (props) { return props.theme.measurements.basicToolControlBar.controlsBarHeight; }, function (props) { return props.theme.measurements.zIndex.controlsBar; }, function (props) { return props.theme.toolControlBar.background; }, function (props) { return props.theme.toolControlBar.inputLabelForeground; });
var templateObject_1$c;

var Label = styled.span(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  display: flex;\n  cursor: pointer;\n  z-index: ", ";\n  transition: bottom 0.3s linear;\n"], ["\n  display: flex;\n  cursor: pointer;\n  z-index: ", ";\n  transition: bottom 0.3s linear;\n"])), function (props) { return props.theme.measurements.zIndex.label; });
var IconBaseCard = styled(BaseButton)(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  position: absolute;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  color: ", ";\n  background-color: ", ";\n  border: unset;\n  box-shadow: unset;\n  font-size: ", "px;\n  letter-spacing: ", "px;\n  text-transform: ", ";\n  font-family: '", "', sans-serif;\n  &:active,\n  &.active {\n    background-color: ", ";\n    color: ", ";\n  }\n  svg {\n    display: flex;\n    transition: visibility 0s, opacity 0.5s linear;\n    visibility: visible;\n    opacity: 1;\n  }\n"], ["\n  position: absolute;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  color: ", ";\n  background-color: ", ";\n  border: unset;\n  box-shadow: unset;\n  font-size: ", "px;\n  letter-spacing: ", "px;\n  text-transform: ", ";\n  font-family: '", "', sans-serif;\n  &:active,\n  &.active {\n    background-color: ", ";\n    color: ", ";\n  }\n  svg {\n    display: flex;\n    transition: visibility 0s, opacity 0.5s linear;\n    visibility: visible;\n    opacity: 1;\n  }\n"])), function (props) { return props.theme.toolbar.foreground; }, function (props) { return props.theme.toolbar.background; }, function (props) { return props.theme.measurements.fontSystem.headline2.size; }, function (props) { return props.theme.measurements.fontSystem.label.letterSpacing; }, function (props) { return props.theme.measurements.fontSystem.label.case; }, function (props) { return props.theme.typography.fontFamily; }, function (props) { return props.theme.toolbar.activeBackground; }, function (props) { return props.theme.toolbar.activeForeground; });
var IconBaseCardContainer = styled.div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])));
var CardWrapper = styled.li.attrs({
    role: 'none',
})(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  height: ", "px;\n  text-align: center;\n  min-width: 100px;\n  position: relative;\n  display: inline-block;\n  margin: 1px;\n"], ["\n  height: ", "px;\n  text-align: center;\n  min-width: 100px;\n  position: relative;\n  display: inline-block;\n  margin: 1px;\n"])), function (props) { return props.theme.measurements.basicUIToolbar.openHeight; });
var templateObject_1$d, templateObject_2$4, templateObject_3$3, templateObject_4$1;

var Toolbar = styled.ul.attrs(function () { return ({
    role: 'menubar',
    'aria-label': 'Tool Navigation',
    'data-simplebar': 'init',
    'data-simplebar-auto-hide': 'false',
}); })(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  width: 100%;\n  white-space: nowrap;\n  overflow-y: hidden;\n  text-align: center;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  position: relative;\n  display: flex;\n  flex-shrink: 0;\n  justify-content: center;\n  transition: height 0.2s ease-out, display 0.1s fade-out;\n  background-color: ", ";\n  color: ", ";\n  z-index: ", ";\n  ", "\n  ", "\n"], ["\n  width: 100%;\n  white-space: nowrap;\n  overflow-y: hidden;\n  text-align: center;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  position: relative;\n  display: flex;\n  flex-shrink: 0;\n  justify-content: center;\n  transition: height 0.2s ease-out, display 0.1s fade-out;\n  background-color: ", ";\n  color: ", ";\n  z-index: ", ";\n  ",
    "\n  ", "\n"])), function (props) { return props.theme.toolbar.background; }, function (props) { return props.theme.toolbar.foreground; }, function (props) { return props.theme.measurements.zIndex.toolbar; }, function (props) {
    return props.show
        ? css(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n          height: ", "px;\n          ", " {\n            &:active,\n            &.active {\n              border: none;\n              &:after {\n                background-color: transparent !important;\n              }\n            }\n            svg {\n              visibility: hidden;\n              opacity: 0;\n              height: 0;\n            }\n          }\n          ", " {\n            height: ", "px;\n          }\n        "], ["\n          height: ", "px;\n          ", " {\n            &:active,\n            &.active {\n              border: none;\n              &:after {\n                background-color: transparent !important;\n              }\n            }\n            svg {\n              visibility: hidden;\n              opacity: 0;\n              height: 0;\n            }\n          }\n          ", " {\n            height: ", "px;\n          }\n        "])), props.theme.measurements.basicUIToolbar.closeHeight, IconBaseCard, CardWrapper, props.theme.measurements.basicUIToolbar.closeHeight) : css(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n          height: ", "px;\n        "], ["\n          height: ", "px;\n        "])), props.theme.measurements.basicUIToolbar.openHeight);
}, States.HiddenScrollbar);
Toolbar.defaultProps = { theme: defaultStyledTheme, show: false };
var templateObject_1$e, templateObject_2$5, templateObject_3$4;

var ToolbarItem = function (_a) {
    var children = _a.children, label = _a.label, active = _a.active, onClick = _a.onClick;
    return (React.createElement(CardWrapper, { "aria-haspopup": true, "aria-expanded": active },
        React.createElement(IconBaseCard, { ariaLabel: label, onClick: onClick, className: active ? 'active' : '' },
            React.createElement(IconBaseCardContainer, null,
                children,
                React.createElement(Label, null, label)))));
};

var Separator$2 = styled.li.attrs({
    role: 'none',
})(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  ", "\n  width: 2px;\n  display: inline-block;\n  position: relative;\n  &:after {\n    content: ' ';\n    right: 0px;\n    position: absolute;\n    top: 8px;\n    height: calc(100% - 16px);\n    border-right: 1px solid ", ";\n  }\n"], ["\n  ",
    "\n  width: 2px;\n  display: inline-block;\n  position: relative;\n  &:after {\n    content: ' ';\n    right: 0px;\n    position: absolute;\n    top: 8px;\n    height: calc(100% - 16px);\n    border-right: 1px solid ", ";\n  }\n"])), function (props) {
    return !props.active
        ? css(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n          height: ", "px;\n        "], ["\n          height: ", "px;\n        "])), props.theme.measurements.basicUIToolbar.openHeight) : css(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n          height: ", "px;\n        "], ["\n          height: ", "px;\n        "])), props.theme.measurements.basicUIToolbar.closeHeight);
}, function (props) { return props.theme.toolControlBar.separatorColor; });
var templateObject_1$f, templateObject_2$6, templateObject_3$5;

var Root = styled.div(templateObject_1$g || (templateObject_1$g = __makeTemplateObject([""], [""])));
var Tab = function (_a) {
    var label = _a.label, className = _a.className, children = _a.children;
    return (React.createElement(Root, { "aria-label": label, className: className }, children));
};
var templateObject_1$g;

var TabTitleStyles = styled(ButtonGroupItem)(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  display: inline-flex;\n  font-size: ", "px;\n  letter-spacing: ", "px;\n  text-transform: ", ";\n  line-height: 16px;\n  color: ", ";\n  border-radius: unset;\n  padding: 1px 12px 2px;\n  background: ", ";\n  &.active,\n  &:active {\n    background: ", ";\n    color: ", ";\n    border-bottom: 1px solid ", ";\n  }\n  @media all and (min-width: 0) and (max-width: 599px) {\n    max-width: 150px;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"], ["\n  display: inline-flex;\n  font-size: ", "px;\n  letter-spacing: ", "px;\n  text-transform: ", ";\n  line-height: 16px;\n  color: ", ";\n  border-radius: unset;\n  padding: 1px 12px 2px;\n  background: ", ";\n  &.active,\n  &:active {\n    background: ", ";\n    color: ", ";\n    border-bottom: 1px solid ", ";\n  }\n  @media all and (min-width: 0) and (max-width: 599px) {\n    max-width: 150px;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"])), function (props) { return props.theme.measurements.fontSystem.headline2.size; }, function (props) { return props.theme.measurements.fontSystem.headline2.letterSpacing; }, function (props) { return props.theme.measurements.fontSystem.headline2.case; }, function (props) { return props.theme.tabTitle.foreground; }, function (props) { return props.theme.tabTitle.background; }, function (props) { return props.theme.tabTitle.activeBackground; }, function (props) { return props.theme.tabTitle.activeForeground; }, function (props) { return props.theme.tabTitle.activeBorderColor; });
var TabTitle = /** @class */ (function (_super) {
    __extends(TabTitle, _super);
    function TabTitle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onClick = function () {
            var _a = _this.props, label = _a.label, onClick = _a.onClick;
            onClick(label);
        };
        return _this;
    }
    TabTitle.prototype.render = function () {
        var _a = this.props, activeTab = _a.activeTab, label = _a.label;
        return (React.createElement(TabTitleStyles, { ariaLabel: label, isActive: activeTab === label, onClick: this.onClick }, label));
    };
    return TabTitle;
}(React.Component));
var templateObject_1$h;

var TabBody = styled.div(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  animation: ", " 0.2s linear;\n  animation-fill-mode: both;\n  overflow: visible;\n  height: 40px;\n  padding-top: 8px;\n  min-width: 350px;\n  @media all and (min-width: 0) and (max-width: 599px) {\n    min-width: 280px;\n  }\n"], ["\n  animation: ", " 0.2s linear;\n  animation-fill-mode: both;\n  overflow: visible;\n  height: 40px;\n  padding-top: 8px;\n  min-width: 350px;\n  @media all and (min-width: 0) and (max-width: 599px) {\n    min-width: 280px;\n  }\n"])), Animations.scale);
var templateObject_1$i;

var Button = styled(TextSecondaryButton)(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  display: inline-flex;\n  padding: 0 4px;\n  height: 20px;\n  font-size: 16px;\n"], ["\n  display: inline-flex;\n  padding: 0 4px;\n  height: 20px;\n  font-size: 16px;\n"])));
var ExtendedButtonGroup = styled(ButtonGroupWrapper)(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  transform: translate(-100%, -120%);\n"], ["\n  transform: translate(-100%, -120%);\n"
    /**
     * Based on the length prop, for the extra elemnts a ... buttin is shown
     * By default all the tab items are shown
     */
])));
var TabWrapper = /** @class */ (function (_super) {
    __extends(TabWrapper, _super);
    function TabWrapper(props) {
        var _this = _super.call(this, props) || this;
        _this.onTabClick = function (tab) {
            _this.setState({ activeTab: tab, toggleExtend: false });
        };
        /** Extra tabs will be shown as a button group of drop */
        _this.getDropUp = function () {
            var children = React.Children.toArray(_this.props.children);
            var remaining = children.slice(_this.state.length);
            return (React.createElement(ExtendedButtonGroup, { show: _this.state.toggleExtend }, remaining.map(function (c) {
                var label = c.props.label || '';
                return (React.createElement(ButtonGroupItem, { onClick: function () { return _this.onTabClick(label); }, key: label, ariaLabel: 'More Options' }, label));
            })));
        };
        _this.extend = function () {
            _this.setState(function (_a) {
                var toggleExtend = _a.toggleExtend;
                return ({ toggleExtend: !toggleExtend });
            });
        };
        _this.getExtension = function () {
            return (React.createElement(Button, { onClick: _this.extend, ariaLabel: 'Select Next' }, "..."));
        };
        var count = React.Children.count(_this.props.children);
        var children = React.Children.toArray(_this.props.children);
        _this.state = {
            activeTab: count ? (children[0].props && children[0].props.label) || '' : '',
            toggleExtend: false,
            length: _this.props.length || 0,
        };
        return _this;
    }
    TabWrapper.prototype.componentDidUpdate = function (nextProps) {
        if (this.props.length !== nextProps.length) {
            this.setState({ length: nextProps.length });
        }
    };
    TabWrapper.prototype.render = function () {
        var _this = this;
        var length = this.props.length;
        var _a = this.state, activeTab = _a.activeTab, toggleExtend = _a.toggleExtend;
        var children = React.Children.toArray(this.props.children).slice(0, length);
        /** Checking if there are extra available elements, than desired tab length */
        var shouldExtend = React.Children.count(this.props.children) > length;
        return (React.createElement("div", null,
            children.map(function (child) {
                if (child) {
                    var label = child.props.label || '';
                    return React.createElement(TabTitle, { activeTab: activeTab, key: label, label: label, onClick: _this.onTabClick });
                }
                return null;
            }),
            shouldExtend ? this.getExtension() : null,
            toggleExtend ? this.getDropUp() : null,
            React.Children.map(this.props.children, function (child) {
                if (!child || (child.props && child.props.label !== activeTab)) {
                    return null;
                }
                return React.createElement(TabBody, { key: child.props.label }, child.props.children);
            })));
    };
    return TabWrapper;
}(React.Component));
var templateObject_1$j, templateObject_2$7;

var Div$1 = styled.div(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  overflow: visible;\n  white-space: nowrap;\n  display: flex;\n  transition: all 0.2s linear;\n"], ["\n  overflow: visible;\n  white-space: nowrap;\n  display: flex;\n  transition: all 0.2s linear;\n"])));
var ResponsiveTabWrapper = /** @class */ (function (_super) {
    __extends(ResponsiveTabWrapper, _super);
    function ResponsiveTabWrapper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { length: 0 };
        _this.updateLength = function () {
            var maxContainerWidth;
            if (_this.props.maxWidth) {
                maxContainerWidth = _this.props.maxWidth;
            }
            else {
                var windowWidth = window.innerWidth;
                /** on mobile buttons text turns into icons */
                var buttonWidths = windowWidth > 600 ? 300 : 200;
                maxContainerWidth = windowWidth - buttonWidths;
            }
            var count = React.Children.count(_this.props.children);
            var diff = maxContainerWidth - count * ResponsiveTabWrapper.TAB_WIDTH;
            if (diff < 0) {
                var length_1 = Math.floor(Math.abs(diff / ResponsiveTabWrapper.TAB_WIDTH));
                _this.setState({ length: count - length_1 });
            }
        };
        return _this;
    }
    ResponsiveTabWrapper.prototype.componentDidMount = function () {
        this.setState({ length: React.Children.count(this.props.children) });
        window.addEventListener('resize', this.updateLength);
        this.updateLength();
    };
    ResponsiveTabWrapper.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this.updateLength);
    };
    ResponsiveTabWrapper.prototype.render = function () {
        var length = this.state.length;
        if (length) {
            return (React.createElement(Div$1, null,
                React.createElement(TabWrapper, { length: length }, this.props.children)));
        }
        return null;
    };
    ResponsiveTabWrapper.TAB_WIDTH = 120;
    return ResponsiveTabWrapper;
}(React.Component));
var templateObject_1$k;

/**
 * This empty div is used for alignment of tabbar,
 * it should stay in center even when there's button on one side, so this div balences out the other half
 */
var EmptyDiv = styled.div(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  width: 100px;\n  @media all and (min-width: 0) and (max-width: 599px) {\n    width: 42px;\n  }\n"], ["\n  width: 100px;\n  @media all and (min-width: 0) and (max-width: 599px) {\n    width: 42px;\n  }\n"])));
var templateObject_1$l;

var Slider = styled(Components.Input.Slider).attrs(function () { return ({ centerSlider: true }); })(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  max-width: 224px;\n"], ["\n  max-width: 224px;\n"])));
var templateObject_1$m;

var BasicUIComponents = {
    CardContainer: HorizontalScrollableContainer,
    DynamicCardContainer: HorizontalDynamicScrollableContainer,
    Card: Card,
    CardLabel: CardLabel,
    Toolbar: {
        Index: Toolbar,
        Item: ToolbarItem,
        Separator: Separator$2,
    },
    Button: {
        OutlinedSecondary: OutlinedSecondaryButton,
        OutlinedPrimary: OutlinedPrimaryButton,
        TextSecondary: TextSecondaryButton,
    },
    BarSeparator: Separator$1,
    ItemsSeparator: Separator,
    Itemsbar: ToolOptionsbar,
    Controlsbar: BasicToolControlsBar,
    ControlsbarContainer: FlexWrapper,
    ResponsiveTabWrapper: ResponsiveTabWrapper,
    Slider: Slider,
    TabWrapper: TabWrapper,
    Tab: Tab,
    Other: {
        ControlsWrapper: ControlsWrapper,
        EmptyDiv: EmptyDiv,
    },
};

var ToolbarComponent = function (_a) {
    var config = _a.config, active = _a.active;
    var tools = config.tools;
    var activeTool = active.tool;
    var renderIcon = function (tool) {
        var ToolIcon = ToolbarIcons[tool];
        return React.createElement(ToolIcon, null) || null;
    };
    var getToolTitle = function (tool) {
        return config.locale[tool].title;
    };
    var update = function (tool) {
        active.selectTool(tool, true);
    };
    var renderTools = function (tool, index) {
        return (tool && (React.createElement(BasicUIComponents.Toolbar.Item, { onClick: function () { return update(tool); }, key: tool, label: getToolTitle(tool), active: activeTool === tool }, renderIcon(tool)))) || React.createElement(BasicUIComponents.Toolbar.Separator, { key: tool + index, active: !!activeTool });
    };
    return (React.createElement(BasicUIComponents.Toolbar.Index, { role: "menubar", show: !!activeTool }, tools.map(renderTools)));
};
var Toolbar$1 = inject('config', 'active')(observer(ToolbarComponent));

var Items = /** @class */ (function (_super) {
    __extends(Items, _super);
    function Items() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onImageClick = function (identifier) {
            _this.props.active.newImage(identifier);
        };
        _this.onCatgoryClick = function (categoryIdentifier) {
            _this.library.toggleCategorySelection(categoryIdentifier);
            _this.library.recalculateScrollContainer();
        };
        _this.onClick = function (type, identifier) {
            if (type === CardType$1.LARGE) {
                _this.onCatgoryClick(identifier);
            }
            else {
                _this.onImageClick(identifier);
            }
        };
        _this.renderCard = function (card, index) { return (React.createElement(BasicUIComponents.Card, { isActive: false, type: card.type, onClick: function () { return _this.onClick(card.type, card.identifier); }, key: card.defaultName + index, image: card.coverImage, style: { animationDelay: (card.delay || 0) + "s" }, label: card.defaultName }, card.type === CardType$1.LARGE ? (React.createElement(BasicUIComponents.CardLabel, { withBackground: true }, card.defaultName)) : null)); };
        return _this;
    }
    Items.prototype.componentDidMount = function () {
        this.simpleBar = new SimpleBar(document.getElementById('LibraryConfig'), { autoHide: false });
        this.library.saveScrollbar(this.simpleBar);
    };
    Object.defineProperty(Items.prototype, "library", {
        get: function () {
            return this.props.library;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "locale", {
        get: function () {
            return this.library.locale.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "config", {
        get: function () {
            return this.library.config;
        },
        enumerable: true,
        configurable: true
    });
    Items.prototype.renderCategoryList = function () {
        var categories = this.library.categoriesAndOptions;
        return React.createElement("div", null, categories && categories.length ? categories.map(this.renderCard) : null);
    };
    Items.prototype.renderImages = function () {
        var images = this.library.images;
        var noResults = this.library.locale.controls.noResults;
        return React.createElement("div", null, images.length ? images.map(this.renderCard) : React.createElement("p", null, noResults));
    };
    Items.prototype.render = function () {
        var query = this.library.query;
        return (React.createElement(BasicUIComponents.DynamicCardContainer, { id: "LibraryConfig" }, query ? this.renderImages() : this.renderCategoryList()));
    };
    return Items;
}(React.Component));
var LibraryItemsBar = inject('library', 'active')(observer(Items));

var Items$1 = /** @class */ (function (_super) {
    __extends(Items, _super);
    function Items() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onFilterCilck = function (filter) {
            _this.filterTool.selectFilter(filter.identifier, filter.defaultIntensity);
        };
        _this.onCatgoryClick = function (selectedCategoryIdentifier) {
            _this.filterTool.toggleCategorySelection(selectedCategoryIdentifier);
        };
        _this.onClick = function (card) {
            if (card.type === CardType$1.LARGE) {
                _this.onCatgoryClick(card.identifier);
                setTimeout(function () { return _this.simpleBar.recalculate(); }, 0);
            }
            else {
                _this.onFilterCilck(card);
            }
        };
        _this.renderCard = function (card) {
            var identifier = _this.filterTool.identifier;
            return (React.createElement(BasicUIComponents.Card, { isActive: identifier === card.identifier, type: card.type, onClick: function () { return _this.onClick(card); }, key: card.identifier, image: card.thumbnailURI, style: { animationDelay: (card.delay || 0) + "s" }, label: card.name },
                React.createElement(BasicUIComponents.CardLabel, { withBackground: true }, card.name)));
        };
        return _this;
    }
    Items.prototype.componentDidMount = function () {
        this.simpleBar = new SimpleBar(document.getElementById('FilterItems'), { autoHide: false });
    };
    Object.defineProperty(Items.prototype, "filterTool", {
        get: function () {
            return this.props.filterTool;
        },
        enumerable: true,
        configurable: true
    });
    Items.prototype.render = function () {
        var entities = this.filterTool.entities;
        return (React.createElement(BasicUIComponents.DynamicCardContainer, { id: "FilterItems" },
            React.createElement("div", null, entities && entities.length ? entities.map(this.renderCard) : null)));
    };
    return Items;
}(React.Component));
var FilterItemsBar = inject('filterTool', 'active')(observer(Items$1));

var Items$2 = function (_a) {
    var focusTool = _a.focusTool;
    var onFocusClick = function (identifier) {
        focusTool.selectFocus(identifier);
    };
    var renderFocusOption = function (option) { return (React.createElement(BasicUIComponents.Card, { key: option.identifier, image: option.thumbnailURI, onClick: function () { return onFocusClick(option.identifier); }, isActive: option.identifier === focusTool.identifier, style: { animationDelay: (option.delay || 0) + "s" }, label: option.name },
        React.createElement(BasicUIComponents.CardLabel, { withBackground: true }, option.name))); };
    return React.createElement(BasicUIComponents.CardContainer, null, focusTool.entities.map(renderFocusOption));
};
var FocusItemsBar = inject('focusTool')(observer(Items$2));

var Icon = styled.div(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  position: relative;\n  top: -8px;\n  color: ", ";\n"], ["\n  position: relative;\n  top: -8px;\n  color: ", ";\n"])), function (props) { return props.theme.card.foreground; });
var Items$3 = function (_a) {
    var adjustmentsTool = _a.adjustmentsTool;
    var onClick = function (option) {
        adjustmentsTool.toggleOptionSelection(option);
    };
    var renderAdjustment = function (option, index) {
        var SVG = AdjustmentIcons[option.identifier];
        return option ? (React.createElement(BasicUIComponents.Card, { key: option.identifier, onClick: function () { return onClick(option.identifier); }, isActive: option.identifier === adjustmentsTool.selectedAdjustmentType, style: { animationDelay: index * 0.08 + "s" }, label: option.name },
            React.createElement(Icon, null,
                React.createElement(SVG, null)),
            React.createElement(BasicUIComponents.CardLabel, null, option.name))) : null;
    };
    return (React.createElement(BasicUIComponents.CardContainer, null, adjustmentsTool.items.map(renderAdjustment)));
};
Icon.defaultProps = { theme: defaultStyledTheme };
var AdjustItemsBar = inject('adjustmentsTool')(observer(Items$3));
var templateObject_1$n;

var Items$4 = function (_a) {
    var overlayTool = _a.overlayTool;
    var selectedIdentifier = overlayTool.identifier;
    var onOverlayCilck = function (identifier) {
        overlayTool.selectOverlay(identifier);
    };
    var renderOverlayOption = function (option) { return (React.createElement(BasicUIComponents.Card, { isActive: option.identifier === selectedIdentifier, onClick: function () { return onOverlayCilck(option.identifier); }, key: option.identifier, image: option.thumbnailURI, style: { animationDelay: (option.delay || 0) + "s" }, label: option.name },
        React.createElement(BasicUIComponents.CardLabel, { withBackground: true }, option.name))); };
    return (React.createElement(BasicUIComponents.CardContainer, null, overlayTool.entities.map(renderOverlayOption)));
};
var OverlayItemsBar = inject('overlayTool')(observer(Items$4));

var Items$5 = /** @class */ (function (_super) {
    __extends(Items, _super);
    function Items() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onClick = function (card) {
            if (card.type === CardType$1.LARGE) {
                _this.sticker.toggleCategorySelection(card.identifier);
                setTimeout(function () { return _this.simpleBar.recalculate(); }, 0);
            }
            else {
                _this.sticker.add(card.identifier);
            }
        };
        _this.renderCategories = function (categories) {
            return categories.map(_this.renderCard);
        };
        _this.renderCard = function (card) {
            var categoryIdentifier = _this.sticker.selectedCategoryIdentifier;
            return card.type === CardType$1.LARGE ? (React.createElement(BasicUIComponents.Card, { isActive: categoryIdentifier === card.identifier, type: card.type, onClick: function () { return _this.onClick(card); }, key: card.identifier, image: card.thumbnailURI, style: { animationDelay: (card.delay || 0) + "s" }, label: card.name },
                React.createElement(BasicUIComponents.CardLabel, { withBackground: true }, card.name))) : (React.createElement(BasicUIComponents.Card, { type: card.type, onClick: function () { return _this.onClick(card); }, key: card.identifier, image: card.thumbnailURI, style: { backgroundSize: '55%', animationDelay: (card.delay || 0) + "s" }, label: card.name },
                React.createElement(BasicUIComponents.CardLabel, { hidden: true }, card.name)));
        };
        return _this;
    }
    Items.prototype.componentDidMount = function () {
        this.simpleBar = new SimpleBar(document.getElementById('StickerConfig'), { autoHide: false });
    };
    Object.defineProperty(Items.prototype, "sticker", {
        get: function () {
            return this.props.stickerTool;
        },
        enumerable: true,
        configurable: true
    });
    Items.prototype.render = function () {
        var categories = this.sticker.entities;
        return (React.createElement(BasicUIComponents.DynamicCardContainer, { id: "StickerConfig" },
            React.createElement("div", null, categories && categories.length ? this.renderCategories(categories) : null)));
    };
    return Items;
}(React.Component));
var StickerItemsBar = inject('stickerTool', 'active')(observer(Items$5));

var Div$2 = styled.div(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  font-size: 20px;\n  position: absolute;\n  left: 50%;\n  transform-origin: left top;\n"], ["\n  font-size: 20px;\n  position: absolute;\n  left: 50%;\n  transform-origin: left top;\n"])));
var Items$6 = /** @class */ (function (_super) {
    __extends(Items, _super);
    function Items() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getWidth = function (_a, label) {
            var fontFamily = _a.fontFamily, fontStyle = _a.fontStyle, fontWeight = _a.fontWeight;
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            ctx.font = fontStyle + " " + fontWeight + " 20px " + fontFamily;
            ctx.fillText(label, 0, 0);
            return ctx.measureText(label).width;
        };
        _this.renderFonts = function () {
            var config = _this.props.config;
            var fontsLoaded = _this.textTool.fontsLoaded;
            if (fontsLoaded) {
                var options = _this.textTool.fontFamilies;
                var selected_1 = _this.textTool.identifier;
                return options.map(function (font, index) {
                    var fontFamily = font.fontFamily, fontWeight = font.fontWeight, fontStyle = font.fontStyle, identifier = font.identifier;
                    var label = font.fontFamily + " " + TextToolStore.getDisplayFontStyle(font);
                    var width = _this.getWidth(font, label);
                    var scale = (config.measurements.basicCard.medium.width - 20) / width; // 20 is offset here
                    return (React.createElement(BasicUIComponents.Card, { isDisabled: !_this.textTool.isTextSelected, isActive: selected_1 === identifier, key: label, onClick: function () { return _this.textTool.changeFont(identifier); }, style: { animationDelay: index * 0.08 + "s" }, label: label },
                        React.createElement(Div$2, { style: {
                                transform: "scale(" + scale + ") translate(-50%, -50%)",
                                fontFamily: fontFamily,
                                fontStyle: fontStyle,
                                fontWeight: fontWeight,
                            } }, label)));
                });
            }
            return null;
        };
        return _this;
    }
    Object.defineProperty(Items.prototype, "textTool", {
        get: function () {
            return this.props.textTool;
        },
        enumerable: true,
        configurable: true
    });
    Items.prototype.render = function () {
        return React.createElement(BasicUIComponents.CardContainer, null, this.renderFonts());
    };
    return Items;
}(React.Component));
var TextItemsBar = inject('textTool', 'config')(observer(Items$6));
var templateObject_1$o;

var Items$7 = /** @class */ (function (_super) {
    __extends(Items, _super);
    function Items() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderOptions = function (text) { return (React.createElement(BasicUIComponents.Card, { isDisabled: !_this.textDesignTool.isTextDesignSelected, isActive: _this.props.textDesignTool.identifier === text.identifier, key: text.identifier, image: text.thumbnailURI, style: { backgroundSize: '60%', animationDelay: (text.delay || 0) + "s" }, onClick: function () { return _this.textDesignTool.changeIdentifier(text.identifier); }, label: text.name },
            React.createElement(BasicUIComponents.CardLabel, { hidden: true }, text.name))); };
        return _this;
    }
    Object.defineProperty(Items.prototype, "textDesignTool", {
        get: function () {
            return this.props.textDesignTool;
        },
        enumerable: true,
        configurable: true
    });
    Items.prototype.render = function () {
        return (React.createElement(BasicUIComponents.CardContainer, null, this.textDesignTool.entities.map(this.renderOptions)));
    };
    return Items;
}(React.Component));
var TextDesignItemsBar = inject('textDesignTool')(observer(Items$7));

var Items$8 = function (_a) {
    var frameTool = _a.frameTool;
    var selectedIdentifier = frameTool.identifier;
    var renderFrameOption = function (option) { return (React.createElement(BasicUIComponents.Card, { key: option.identifier, image: option.thumbnailURI, onClick: function () { return frameTool.selectFrame(option.identifier); }, isActive: option.identifier === selectedIdentifier, style: { animationDelay: (option.delay || 0) + "s", backgroundSize: '60%' }, label: option.name },
        React.createElement(BasicUIComponents.CardLabel, { hidden: true }, option.name))); };
    return React.createElement(BasicUIComponents.CardContainer, null, frameTool.entities.map(renderFrameOption));
};
var FrameItemsBar = inject('frameTool')(observer(Items$8));

var Items$9 = function (_a) {
    var transformTool = _a.transformTool;
    var renderTransform = function (option, index) {
        return option ? (React.createElement(BasicUIComponents.Card, { key: option.identifier, onClick: function () { return transformTool.changeIdentifier(option.identifier); }, image: option.thumbnailURI, style: { animationDelay: index * 0.08 + "s", backgroundSize: '50%' }, isActive: option.identifier === transformTool.identifier, label: option.name },
            React.createElement(BasicUIComponents.CardLabel, null, option.name))) : (React.createElement(BasicUIComponents.ItemsSeparator, { key: "transform" + index }));
    };
    return React.createElement(BasicUIComponents.CardContainer, null, transformTool.items.map(renderTransform));
};
var TransfromItemsBar = inject('transformTool')(observer(Items$9));

var ToolItemsBarComponent = /** @class */ (function (_super) {
    __extends(ToolItemsBarComponent, _super);
    function ToolItemsBarComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getToolItemsComponent = function (activeTool) {
            switch (activeTool) {
                case Tool.LIBRARY:
                    return React.createElement(LibraryItemsBar, null);
                case Tool.FILTER:
                    return React.createElement(FilterItemsBar, null);
                case Tool.FOCUS:
                    return React.createElement(FocusItemsBar, null);
                case Tool.ADJUSTMENT:
                    return React.createElement(AdjustItemsBar, null);
                case Tool.OVERLAY:
                    return React.createElement(OverlayItemsBar, null);
                case Tool.STICKER:
                    return React.createElement(StickerItemsBar, null);
                case Tool.TEXT:
                    return React.createElement(TextItemsBar, null);
                case Tool.TEXT_DESIGN:
                    return React.createElement(TextDesignItemsBar, null);
                case Tool.FRAME:
                    return React.createElement(FrameItemsBar, null);
                case Tool.TRANSFORM:
                    return React.createElement(TransfromItemsBar, null);
            }
            return null;
        };
        return _this;
    }
    ToolItemsBarComponent.prototype.render = function () {
        var activeTool = this.props.active.tool;
        return activeTool === Tool.BRUSH ? null : (React.createElement(BasicUIComponents.Itemsbar, { show: !!activeTool }, this.getToolItemsComponent(activeTool)));
    };
    ToolItemsBarComponent = __decorate([
        inject('active'),
        observer
    ], ToolItemsBarComponent);
    return ToolItemsBarComponent;
}(React.Component));

var Controls = function (_a) {
    var filterTool = _a.filterTool;
    var state = filterTool.state;
    var filterControlLocale = filterTool.locale.controls;
    var onRelease = function () {
        filterTool.toolSnapshot();
    };
    return (React.createElement(BasicUIComponents.ControlsbarContainer, { className: filterTool.isOptionSelected ? 'show' : '' },
        React.createElement(BasicUIComponents.Button.OutlinedSecondary, { ariaLabel: filterTool.locale.controls.buttonReset, onClick: filterTool.reset, icon: React.createElement(ToolControlBarIcons.reset, null) }, filterTool.locale.controls.buttonReset),
        React.createElement(BasicUIComponents.Other.ControlsWrapper, null,
            React.createElement(Components.Spacer, { count: 2 }),
            React.createElement(BasicUIComponents.Slider, { "aria-hidden": !filterTool.isOptionSelected, style: { width: '280px' }, name: filterControlLocale.sliderIntensity, value: state.intensity, min: 0, max: 1, onMouseUp: onRelease, onTouchEnd: onRelease, onChange: filterTool.changeIntensity, snap: state.isDuotone ? 0.5 : null }),
            React.createElement(Components.Spacer, { count: 2 }),
            React.createElement(BasicUIComponents.BarSeparator, null)),
        React.createElement(BasicUIComponents.Other.EmptyDiv, null)));
};
var FilterControlsBar = inject('filterTool')(observer(Controls));

var Controls$1 = function (_a) {
    var focusTool = _a.focusTool;
    var focusControlLocale = focusTool.locale.controls;
    var onRelease = function () {
        focusTool.toolSnapshot(focusControlLocale.sliderIntensity);
    };
    return (React.createElement(BasicUIComponents.ControlsbarContainer, { className: focusTool.isOptionSelected ? 'show' : '' },
        React.createElement(BasicUIComponents.Button.OutlinedSecondary, { ariaLabel: focusControlLocale.buttonReset, onClick: focusTool.reset, icon: React.createElement(ToolControlBarIcons.reset, null) }, focusControlLocale.buttonReset),
        React.createElement(BasicUIComponents.Other.ControlsWrapper, null,
            React.createElement(Components.Spacer, { count: 2 }),
            React.createElement(BasicUIComponents.Slider, { "aria-hidden": !focusTool.isOptionSelected, style: { width: '280px' }, name: focusControlLocale.sliderIntensity, value: focusTool.intensity, min: FocusToolStore.minIntensity, max: focusTool.maxIntensity, divider: 1, onChange: focusTool.changeIntensity, onMouseUp: onRelease, onTouchEnd: onRelease }),
            React.createElement(Components.Spacer, { count: 2 }),
            React.createElement(BasicUIComponents.BarSeparator, null)),
        React.createElement(BasicUIComponents.Other.EmptyDiv, null)));
};
var FocusControlsBar = inject('focusTool')(observer(Controls$1));

var Controls$2 = function (_a) {
    var adjustmentsTool = _a.adjustmentsTool;
    var state = adjustmentsTool.selectedAdjustmentType.toLowerCase();
    var onRelease = function () {
        adjustmentsTool.toolSnapshot();
    };
    return (React.createElement(BasicUIComponents.ControlsbarContainer, { className: state ? 'show' : '' },
        React.createElement(BasicUIComponents.Button.OutlinedSecondary, { ariaLabel: adjustmentsTool.locale.controls.buttonReset, onClick: adjustmentsTool.reset, icon: React.createElement(ToolControlBarIcons.reset, null) }, adjustmentsTool.locale.controls.buttonReset),
        React.createElement(BasicUIComponents.Other.ControlsWrapper, null,
            React.createElement(Components.Spacer, { count: 2 }),
            React.createElement(BasicUIComponents.Slider, { "aria-hidden": !state, adjust: true, style: { width: '280px' }, name: adjustmentsTool.selectedOptionLabel, value: adjustmentsTool[state], onChange: function (value) { return adjustmentsTool.editAdjustments({ type: state, value: value }); }, onMouseUp: onRelease, onTouchEnd: onRelease, snap: 0 }),
            React.createElement(Components.Spacer, { count: 2 }),
            React.createElement(BasicUIComponents.BarSeparator, null)),
        React.createElement(BasicUIComponents.Other.EmptyDiv, null)));
};
var AdjustControlsBar = inject('adjustmentsTool')(observer(Controls$2));

var Tabs = BasicUIComponents.TabWrapper;
var Tab$1 = BasicUIComponents.Tab;
var Controls$3 = function (_a) {
    var overlayTool = _a.overlayTool;
    var state = overlayTool.state;
    var overlayControlLocale = overlayTool.locale.controls;
    var allBlendModes = overlayTool.allBlendModes;
    var blendMode = overlayTool.blendMode;
    var onRelease = function () {
        overlayTool.toolSnapshot();
    };
    var changeBlendMode = function (newBlendMode) {
        overlayTool.changeBlendMode(newBlendMode);
    };
    return (React.createElement(BasicUIComponents.ControlsbarContainer, { className: overlayTool.isOptionSelected ? 'show' : '' },
        React.createElement(BasicUIComponents.Button.OutlinedSecondary, { ariaLabel: overlayControlLocale.buttonReset, onClick: overlayTool.reset, icon: React.createElement(ToolControlBarIcons.reset, null) }, overlayControlLocale.buttonReset),
        React.createElement(BasicUIComponents.Other.ControlsWrapper, null,
            React.createElement(Components.Spacer, null),
            React.createElement(Tabs, null,
                React.createElement(Tab$1, { label: overlayControlLocale.tabBlendMode },
                    React.createElement(Components.Input.CarouselSlider, { showLabel: false, label: overlayControlLocale.carouselBlendMode, defaultIdentifier: blendMode, onSelect: changeBlendMode, list: allBlendModes })),
                React.createElement(Tab$1, { label: overlayControlLocale.tabOpacity },
                    React.createElement(BasicUIComponents.Slider, { "aria-hidden": !overlayTool.isOptionSelected, showLabel: false, style: { width: '280px' }, name: overlayControlLocale.sliderOpacity, value: state.opacity, min: 0, max: 1, onChange: overlayTool.changeOpacity, onMouseUp: onRelease, onTouchEnd: onRelease }))),
            React.createElement(BasicUIComponents.BarSeparator, null)),
        React.createElement(BasicUIComponents.Other.EmptyDiv, null)));
};
var OverlayControlsBar = inject('overlayTool')(observer(Controls$3));

var Controls$4 = function (_a) {
    var library = _a.library, active = _a.active;
    var placeholderSearch = library.locale.controls.placeholderSearch;
    var searchQuery = function (query) {
        library.fetchImages(query);
        library.recalculateScrollContainer();
    };
    var onFilesAdded = function (e) {
        var files = e.target.files;
        if (files.length) {
            var reader = new FileReader();
            reader.onload = function (evt) {
                active.newImage(evt.target.result);
            };
            reader.readAsDataURL(files[0]);
        }
    };
    var onWebcamClick = function () {
        active.selectWebcam(true);
    };
    var uploadImage = function () {
        var input = document.getElementById('fileUpload');
        if (input) {
            input.click();
        }
    };
    return (React.createElement(BasicUIComponents.ControlsbarContainer, { className: "show" },
        React.createElement(BasicUIComponents.Button.OutlinedPrimary, { ariaLabel: library.locale.controls.buttonUpload, onClick: uploadImage, icon: React.createElement(ToolControlBarIcons.uploadImage, null) },
            library.locale.controls.buttonUpload,
            React.createElement(Components.Input.File, { onChange: onFilesAdded })),
        React.createElement(BasicUIComponents.Other.ControlsWrapper, null,
            React.createElement(Components.Spacer, { count: 2 }),
            React.createElement(Components.Input.Search, { onChange: searchQuery, placeholder: placeholderSearch }),
            React.createElement(Components.Spacer, { count: 2 }),
            React.createElement(BasicUIComponents.BarSeparator, null)),
        React.createElement(BasicUIComponents.Button.OutlinedSecondary, { ariaLabel: library.locale.controls.buttonWebcamOpen, onClick: onWebcamClick, icon: React.createElement(ToolControlBarIcons.openWebcam, null) }, library.locale.controls.buttonWebcamOpen)));
};
var LibraryControlsBar = inject('library', 'active')(observer(Controls$4));

var Tabs$1 = BasicUIComponents.TabWrapper;
var Tab$2 = BasicUIComponents.Tab;
var FileInput = styled.input.attrs({
    type: 'file',
    id: 'fileUpload',
    accept: 'image/*',
    multiple: true,
})(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), States.VisuallyHidden);
var Controls$5 = function (_a) {
    var stickerTool = _a.stickerTool;
    var labels = stickerTool.locale.controls;
    var labelsColor = stickerTool.localeColor.colorPicker;
    var colorList = StickerToolStore.defaultColors;
    var tintColor = stickerTool.activeTintColor;
    var onRelease = function () {
        stickerTool.toolSnapshot();
    };
    var onUploadClick = function () {
        var input = document.getElementById('fileUpload');
        if (input) {
            input.value = null;
            input.click();
        }
    };
    var onFilesAdded = function (e) {
        var files = e.target.files;
        stickerTool.addFiles(files);
    };
    var stickerControls = function () { return (React.createElement("div", null,
        React.createElement(Components.Spacer, { count: 2 }),
        React.createElement(BasicUIComponents.Slider, { isDisabled: !stickerTool.isStickerSelected, style: { width: '280px' }, name: labels.sliderOpacity, value: stickerTool.opacity, min: 0, max: 1, onMouseUp: onRelease, onTouchEnd: onRelease, onChange: stickerTool.changeOpacity }),
        React.createElement(Components.Spacer, { count: 2 }))); };
    var shapeControls = function () { return (React.createElement("div", null,
        React.createElement(Components.Spacer, null),
        React.createElement(Tabs$1, null,
            React.createElement(Tab$2, { label: labels.tabColor },
                React.createElement(Components.Spacer, { count: 1 }),
                React.createElement(Components.Input.Selection, { isDisabled: !stickerTool.isStickerSelected, showLabel: false, label: labels.selectColor },
                    React.createElement(ColorList, { activeColor: tintColor, colors: colorList, labelsColor: labelsColor, isDisabled: !stickerTool.isStickerSelected, colorPickerDirection: "top", onChange: stickerTool.changeTintColor, onAddSnapshot: stickerTool.tintColorSnapshot }))),
            React.createElement(Tab$2, { label: labels.tabOpacity },
                React.createElement(BasicUIComponents.Slider, { isDisabled: !stickerTool.isStickerSelected, showLabel: false, style: { width: '280px' }, name: labels.sliderOpacity, value: stickerTool.opacity, min: 0, max: 1, onMouseUp: onRelease, onTouchEnd: onRelease, onChange: stickerTool.changeOpacity }))))); };
    var getCustomStickerButton = function () {
        if (stickerTool.isCustomStickerEnabled) {
            return (React.createElement(BasicUIComponents.Button.OutlinedPrimary, { ariaLabel: labels.buttonUpload, onClick: onUploadClick, icon: React.createElement(ToolControlBarIcons.uploadImage, null) },
                labels.buttonUpload,
                React.createElement(FileInput, { onChange: onFilesAdded })));
        }
        return null;
    };
    return (React.createElement(BasicUIComponents.ControlsbarContainer, { className: 'show' },
        getCustomStickerButton(),
        React.createElement(BasicUIComponents.Other.ControlsWrapper, null,
            (stickerTool.tintable && shapeControls()) || stickerControls(),
            React.createElement(BasicUIComponents.BarSeparator, null)),
        React.createElement(BasicUIComponents.Other.EmptyDiv, null)));
};
var StickerControlsBar = inject('stickerTool')(observer(Controls$5));
var templateObject_1$p;

var Tabs$2 = BasicUIComponents.ResponsiveTabWrapper;
var Tab$3 = BasicUIComponents.Tab;
var AlignmentButton = styled(BasicUIComponents.Button.TextSecondary)(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (props) { return props.theme.textInput.foreground; });
var Text = styled(Components.Input.NummericInput)(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  max-width: 55px;\n  > div > input {\n    text-align: center;\n  }\n"], ["\n  max-width: 55px;\n  > div > input {\n    text-align: center;\n  }\n"])));
var Controls$6 = function (_a) {
    var textTool = _a.textTool;
    var textControlsLocale = textTool.locale.controls;
    var labelsColor = textTool.localeColor.colorPicker;
    var colorList = TextToolStore.defaultColors;
    var backgroundColorList = TextToolStore.defaultBackgroundColors;
    var alignmentList = ['left', 'center', 'right'];
    var AlignmentList = alignmentList.map(function (item) {
        var Icon = AlignIcons[item];
        return (React.createElement(AlignmentButton, { isDisabled: !textTool.isTextSelected, ariaLabel: "Align " + item, isActive: item === textTool.alignment, key: item, onClick: function () { return textTool.changeAlignment(item); } },
            React.createElement(Icon, null)));
    });
    var onRelease = function () {
        textTool.toolSnapshot();
    };
    var onChangeFontSize = function (value) {
        var fontSize = value ? parseFloat(value) : 0;
        textTool.setFontSize(Math.max(10, Math.min(690, fontSize)));
    };
    return (React.createElement(BasicUIComponents.ControlsbarContainer, { className: 'show' },
        React.createElement(BasicUIComponents.Button.OutlinedPrimary, { ariaLabel: textControlsLocale.buttonNew, onClick: textTool.add, icon: React.createElement(ToolControlBarIcons.addText, null) }, textControlsLocale.buttonNew),
        React.createElement(BasicUIComponents.Other.ControlsWrapper, null,
            React.createElement(Components.Spacer, null),
            React.createElement(Tabs$2, null,
                React.createElement(Tab$3, { label: textControlsLocale.tabFontSize },
                    React.createElement(Text, { value: textTool.fontSize.toFixed(0), onSubmit: onChangeFontSize, isDisabled: !textTool.isTextSelected })),
                React.createElement(Tab$3, { label: textControlsLocale.tabAlignment },
                    React.createElement(Components.Input.Selection, { isDisabled: !textTool.isTextSelected, showLabel: false, label: textControlsLocale.selectAlignment }, AlignmentList)),
                React.createElement(Tab$3, { label: textControlsLocale.tabColor },
                    React.createElement(Components.Spacer, null),
                    React.createElement(Components.Input.Selection, { isDisabled: !textTool.isTextSelected, showLabel: false, label: textControlsLocale.selectFontColor },
                        React.createElement(ColorList, { activeColor: textTool.activeTextColor, colors: colorList, labelsColor: labelsColor, colorPickerDirection: "top", isDisabled: !textTool.isTextSelected, onChange: textTool.changeColor, onAddSnapshot: textTool.colorSnapshot }))),
                React.createElement(Tab$3, { label: textControlsLocale.tabBgColor },
                    React.createElement(Components.Spacer, null),
                    React.createElement(Components.Input.Selection, { isDisabled: !textTool.isTextSelected, showLabel: false, label: textControlsLocale.selectBackgroundColor },
                        React.createElement(ColorList, { activeColor: textTool.activeBackgroundColor, colors: backgroundColorList, labelsColor: labelsColor, colorPickerDirection: "top", isDisabled: !textTool.isTextSelected, onChange: textTool.changeBackgroundColor, onAddSnapshot: textTool.backgroundColorSnapshot }))),
                React.createElement(Tab$3, { label: textControlsLocale.tabLineHeight },
                    React.createElement(BasicUIComponents.Slider, { isDisabled: !textTool.isTextSelected, showLabel: false, name: textControlsLocale.sliderLineSpacing, value: textTool.lineHeight, min: 0.5, max: 3, onChange: textTool.changeLineHeight, onMouseUp: onRelease, onTouchEnd: onRelease, snap: 1, divider: 1, decimal: 1 }))),
            React.createElement(BasicUIComponents.BarSeparator, null)),
        React.createElement(BasicUIComponents.Other.EmptyDiv, null)));
};
var TextControlsBar = inject('textTool')(observer(Controls$6));
var templateObject_1$q, templateObject_2$8;

var Controls$7 = function (_a) {
    var textDesignTool = _a.textDesignTool;
    var textControlsLocale = textDesignTool.locale.controls;
    var labelsColor = textDesignTool.localeColor.colorPicker;
    var colorList = TextDesignToolStore.colors;
    return (React.createElement(BasicUIComponents.ControlsbarContainer, { className: 'show' },
        React.createElement(BasicUIComponents.Button.OutlinedPrimary, { ariaLabel: textControlsLocale.buttonNew, onClick: textDesignTool.add, icon: React.createElement(ToolControlBarIcons.addText, null) }, textControlsLocale.buttonNew),
        React.createElement(BasicUIComponents.Other.ControlsWrapper, null,
            React.createElement(Components.Input.Selection, { isDisabled: !textDesignTool.isTextDesignSelected, label: textControlsLocale.selectColor },
                React.createElement(ColorList, { activeColor: textDesignTool.activeTextColor, colors: colorList, labelsColor: labelsColor, colorPickerDirection: "top", isDisabled: !textDesignTool.isTextDesignSelected, onChange: textDesignTool.changeColor, onAddSnapshot: textDesignTool.colorSnapshot }))),
        React.createElement(BasicUIComponents.Button.OutlinedSecondary, { ariaLabel: textControlsLocale.buttonShuffle, onClick: textDesignTool.changeSeed, icon: React.createElement(ToolControlBarIcons.shuffle, null) }, textControlsLocale.buttonShuffle),
        React.createElement(BasicUIComponents.BarSeparator, null)));
};
var TextDesignControlsBar = inject('textDesignTool')(observer(Controls$7));

var Tabs$3 = BasicUIComponents.TabWrapper;
var Tab$4 = BasicUIComponents.Tab;
var Controls$8 = function (_a) {
    var frameTool = _a.frameTool;
    var frameControlLocale = frameTool.locale.controls;
    var labelsColor = frameTool.localeColor.colorPicker;
    var tintable = frameTool.tintable;
    var colorList = FrameToolStore.colors;
    var onRelease = function (description) {
        frameTool.toolSnapshot(description);
    };
    return (React.createElement(BasicUIComponents.ControlsbarContainer, { className: frameTool.isOptionSelected ? 'show' : '' },
        React.createElement(BasicUIComponents.Button.OutlinedSecondary, { ariaLabel: frameControlLocale.buttonReset, onClick: frameTool.reset, icon: React.createElement(ToolControlBarIcons.reset, null) }, frameControlLocale.buttonReset),
        React.createElement(BasicUIComponents.Other.ControlsWrapper, null,
            React.createElement(Components.Spacer, null),
            React.createElement(Tabs$3, null,
                React.createElement(Tab$4, { label: frameControlLocale.tabOpacity },
                    React.createElement(BasicUIComponents.Slider, { "aria-hidden": !frameTool.isOptionSelected, showLabel: false, style: { width: '280px' }, name: frameControlLocale.sliderOpacity, value: frameTool.opacity, min: 0, max: 1, onChange: frameTool.changeOpacity, onMouseUp: function () {
                            onRelease(frameControlLocale.sliderOpacity);
                        }, onTouchEnd: function () {
                            onRelease(frameControlLocale.sliderOpacity);
                        } })),
                React.createElement(Tab$4, { label: frameControlLocale.tabSize },
                    React.createElement(BasicUIComponents.Slider, { "aria-hidden": !frameTool.isOptionSelected, showLabel: false, style: { width: '280px' }, name: frameControlLocale.sliderSize, value: frameTool.size, min: frameTool.minSize, max: frameTool.maxSize, divider: 1, onChange: frameTool.changeWidth, onMouseUp: function () {
                            onRelease(frameControlLocale.sliderSize);
                        }, onTouchEnd: function () {
                            onRelease(frameControlLocale.sliderSize);
                        } })),
                tintable && React.createElement(Tab$4, { label: frameControlLocale.tabColor },
                    React.createElement(Components.Spacer, { count: 1 }),
                    React.createElement(Components.Input.Selection, { label: frameControlLocale.selectColor, showLabel: false },
                        React.createElement(ColorList, { activeColor: frameTool.activeColor, colors: colorList, labelsColor: labelsColor, colorPickerDirection: "top", onChange: frameTool.changeColor, onAddSnapshot: frameTool.colorSnapshot }))) || null),
            React.createElement(BasicUIComponents.BarSeparator, null)),
        React.createElement(BasicUIComponents.Other.EmptyDiv, null)));
};
var FrameControlsBar = inject('frameTool', 'canvas')(observer(Controls$8));

var Tabs$4 = BasicUIComponents.TabWrapper;
var Tab$5 = BasicUIComponents.Tab;
var Controls$9 = function (_a) {
    var brushTool = _a.brushTool;
    var brushControlLocale = brushTool.locale.controls;
    var labelsColor = brushTool.localeColor.colorPicker;
    var colorList = BrushToolStore.colors;
    return (React.createElement(BasicUIComponents.ControlsbarContainer, { style: { justifyContent: 'center' }, className: "show" },
        React.createElement(BasicUIComponents.Button.OutlinedSecondary, { ariaLabel: brushControlLocale.buttonReset, onClick: brushTool.reset, icon: React.createElement(ToolControlBarIcons.reset, null), isDisabled: !brushTool.isDirty }, brushControlLocale.buttonReset),
        React.createElement(BasicUIComponents.Other.ControlsWrapper, null,
            React.createElement(Components.Input.Form, null,
                React.createElement(Tabs$4, null,
                    React.createElement(Tab$5, { label: brushControlLocale.tabColor },
                        React.createElement(Components.Spacer, { count: 1 }),
                        React.createElement(Components.Input.Selection, { showLabel: false, label: brushControlLocale.selectColor },
                            React.createElement(ColorList, { activeColor: brushTool.activeColor, colors: colorList, labelsColor: labelsColor, colorPickerDirection: "top", onChange: brushTool.changeColor }))),
                    React.createElement(Tab$5, { label: brushControlLocale.tabSize },
                        React.createElement(BasicUIComponents.Slider, { style: { width: '280px' }, showLabel: false, name: brushControlLocale.sliderSize, value: brushTool.size, min: 1, max: 100, divider: 1, onChange: brushTool.changeSize })),
                    React.createElement(Tab$5, { label: brushControlLocale.tabHardness },
                        React.createElement(BasicUIComponents.Slider, { style: { width: '280px' }, showLabel: false, name: brushControlLocale.sliderHardness, value: brushTool.hardness, min: 0, max: 1, onChange: brushTool.changeHardness })))))));
};
var BrushControlsBar = inject('brushTool')(observer(Controls$9));

var Tabs$5 = BasicUIComponents.ResponsiveTabWrapper;
var Tab$6 = BasicUIComponents.Tab;
var Controls$a = function (_a) {
    var transformTool = _a.transformTool;
    var controlLabels = transformTool.locale.controls;
    var forceDimensions = transformTool.forceDimensions;
    return (React.createElement(BasicUIComponents.ControlsbarContainer, { className: 'show' },
        React.createElement(BasicUIComponents.Button.OutlinedSecondary, { ariaLabel: transformTool.locale.controls.buttonReset, onClick: transformTool.reset, icon: React.createElement(ToolControlBarIcons.reset, null) }, transformTool.locale.controls.buttonReset),
        React.createElement(BasicUIComponents.Other.ControlsWrapper, null,
            React.createElement(Components.Spacer, null),
            React.createElement(Tabs$5, null,
                React.createElement(Tab$6, { label: controlLabels.tabCropSize },
                    React.createElement(TransformScaleInput, { isDisabled: forceDimensions, showLabel: false, valueHeight: transformTool.localOutputHeight, valueWidth: transformTool.localOutputWidth, onBlurWidth: transformTool.onBlurWidth, onBlurHeight: transformTool.onBlurHeight, onChangeHeight: transformTool.changeLocalOutputHeight, onChangeWidth: transformTool.changeLocalOutputWidth, label: controlLabels.inputCropSize, labelHeight: controlLabels.inputHeight, labelWidth: controlLabels.inputWidth })),
                React.createElement(Tab$6, { label: controlLabels.tabFlipAndRotate },
                    React.createElement(FlipRotateControls, null)),
                React.createElement(Tab$6, { label: controlLabels.tabResolution },
                    React.createElement(Components.Input.Checkbox, { isDisabled: forceDimensions, style: { left: '70px' }, value: transformTool.lockResolution, label: controlLabels.checkboxKeepResolution, onChange: transformTool.changeLockResolution }))),
            React.createElement(BasicUIComponents.BarSeparator, null)),
        React.createElement(BasicUIComponents.Other.EmptyDiv, null)));
};
var TransformControlsBar = inject('transformTool')(observer(Controls$a));

var ToolControlsBarComponent = /** @class */ (function (_super) {
    __extends(ToolControlsBarComponent, _super);
    function ToolControlsBarComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToolControlsBarComponent.prototype.render = function () {
        var activeTool = this.props.active.tool;
        return (React.createElement(BasicUIComponents.Controlsbar, { show: !!activeTool },
            React.createElement(Components.Switch.Index, { type: activeTool },
                React.createElement(Components.Switch.Case, { value: Tool.FILTER },
                    React.createElement(FilterControlsBar, null)),
                React.createElement(Components.Switch.Case, { value: Tool.FOCUS },
                    React.createElement(FocusControlsBar, null)),
                React.createElement(Components.Switch.Case, { value: Tool.ADJUSTMENT },
                    React.createElement(AdjustControlsBar, null)),
                React.createElement(Components.Switch.Case, { value: Tool.OVERLAY },
                    React.createElement(OverlayControlsBar, null)),
                React.createElement(Components.Switch.Case, { value: Tool.STICKER },
                    React.createElement(StickerControlsBar, null)),
                React.createElement(Components.Switch.Case, { value: Tool.TEXT },
                    React.createElement(TextControlsBar, null)),
                React.createElement(Components.Switch.Case, { value: Tool.TEXT_DESIGN },
                    React.createElement(TextDesignControlsBar, null)),
                React.createElement(Components.Switch.Case, { value: Tool.LIBRARY },
                    React.createElement(LibraryControlsBar, null)),
                React.createElement(Components.Switch.Case, { value: Tool.FRAME },
                    React.createElement(FrameControlsBar, null)),
                React.createElement(Components.Switch.Case, { value: Tool.BRUSH },
                    React.createElement(BrushControlsBar, null)),
                React.createElement(Components.Switch.Case, { value: Tool.TRANSFORM },
                    React.createElement(TransformControlsBar, null)))));
    };
    ToolControlsBarComponent = __decorate([
        inject('active', 'config'),
        observer
    ], ToolControlsBarComponent);
    return ToolControlsBarComponent;
}(React.Component));

var Disable = styled.div(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  position: absolute;\n  width: 100%;\n  height: ", "px;\n  bottom: 0;\n  left: 0;\n  background: ", ";\n  z-index: ", ";\n"], ["\n  position: absolute;\n  width: 100%;\n  height: ", "px;\n  bottom: 0;\n  left: 0;\n  background: ", ";\n  z-index: ", ";\n"])), function (props) { return props.theme.measurements.basicToolControlBar.maxHeight; }, function (props) { return props.theme.webcam.backdrop; }, function (props) { return props.theme.measurements.zIndex.disable; });
var Basic = function (_a) {
    var active = _a.active;
    return (React.createElement(Components.Container, null,
        active.isWebcam ? React.createElement(Disable, null) : null,
        React.createElement(Modal, null),
        React.createElement(CanvasArea, null,
            React.createElement(CanvasBar, null),
            React.createElement(CanvasContainer, null),
            React.createElement(ToolControlsBarComponent, null),
            React.createElement(ToolItemsBarComponent, null),
            React.createElement(Toolbar$1, null))));
};
var Layout = inject('active')(observer(Basic));
var templateObject_1$r;

var BasicUI = /** @class */ (function (_super) {
    __extends(BasicUI, _super);
    function BasicUI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BasicUI.prototype.componentDidMount = function () {
        this.editor = this.props.editor;
        this.storeProps = this.props.storeProps;
        var factory = new CustomComponentsFactory(this.editor.configStore.config.custom.components, {
            loader: Components.Loader,
        });
        var custom = {
            getLoader: factory.getLoader,
            getButton: factory.getButton,
        };
        this.storeProps.custom = custom;
        this.forceUpdate();
    };
    BasicUI.prototype.render = function () {
        return this.storeProps ? (React.createElement(Provider, __assign({}, this.storeProps),
            React.createElement(ThemeProvider, { theme: __assign({}, this.editor.configStore.theme, { measurements: this.editor.configStore.measurements }) },
                React.createElement(Layout, null)))) : null;
    };
    return BasicUI;
}(React.Component));

export { BasicUI };
