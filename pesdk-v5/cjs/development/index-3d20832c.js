'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var index = require('./index-c8fee060.js');
var React = require('react');
var React__default = _interopDefault(React);
require('react-dom');
require('./engine.development.js');
var styled = require('styled-components');
var styled__default = _interopDefault(styled);

var OutlinedPrimaryButton = styled__default(index.ResponsiveButton)(templateObject_1 || (templateObject_1 = index.__makeTemplateObject(["\n  background: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n  min-height: 32px;\n  min-width: 32px;\n"], ["\n  background: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n  min-height: 32px;\n  min-width: 32px;\n"])), function (props) { return props.theme.button.outlinedPrimaryBackground; }, function (props) { return props.theme.button.outlinedPrimaryForeground; }, function (props) { return props.theme.button.outlinedBorderColor; });
var templateObject_1;

var OutlinedSecondaryButton = styled__default(index.ResponsiveButton)(templateObject_1$1 || (templateObject_1$1 = index.__makeTemplateObject(["\n  background: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n  min-height: 32px;\n  min-width: 32px;\n"], ["\n  background: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n  min-height: 32px;\n  min-width: 32px;\n"])), function (props) { return props.theme.button.outlinedSecondaryBackground; }, function (props) { return props.theme.button.outlinedSecondaryForeground; }, function (props) { return props.theme.button.outlinedBorderColor; });
var templateObject_1$1;

var TextSecondaryButton = styled__default(index.BaseButton)(templateObject_1$2 || (templateObject_1$2 = index.__makeTemplateObject(["\n  color: ", ";\n  height: 32px;\n  span.disabled {\n    display: none;\n  }\n  &:disabled,\n  &.disabled {\n    opacity: ", ";\n  }\n"], ["\n  color: ", ";\n  height: 32px;\n  span.disabled {\n    display: none;\n  }\n  &:disabled,\n  &.disabled {\n    opacity: ", ";\n  }\n"])), function (props) { return props.theme.button.textSecondaryForeground; }, function (props) { return props.theme.button.textInactiveOpacity; });
var templateObject_1$2;

var MediumCard = styled__default(index.BaseCard)(templateObject_1$3 || (templateObject_1$3 = index.__makeTemplateObject(["\n  margin: 2px;\n  width: ", "px;\n  height: ", "px;\n"], ["\n  margin: 2px;\n  width: ", "px;\n  height: ", "px;\n"])), function (props) { return props.theme.measurements.basicCard.medium.width; }, function (props) { return props.theme.measurements.basicCard.medium.height; });
var templateObject_1$3;

var LargeCard = styled__default(index.BaseCard)(templateObject_1$4 || (templateObject_1$4 = index.__makeTemplateObject(["\n  margin: 2px;\n  width: ", "px;\n  height: ", "px;\n"], ["\n  margin: 2px;\n  width: ", "px;\n  height: ", "px;\n"])), function (props) { return props.theme.measurements.basicCard.large.width; }, function (props) { return props.theme.measurements.basicCard.large.height; });
var templateObject_1$4;

var Card = function (props) {
    var isLargeCard = props.type === index.CardType.LARGE;
    var CardOfType = MediumCard;
    if (isLargeCard) {
        CardOfType = LargeCard;
    }
    return React__default.createElement(CardOfType, index.__assign({}, props));
};

var ContainerStyles = styled.css(templateObject_1$5 || (templateObject_1$5 = index.__makeTemplateObject(["\n  width: 100%;\n  height: inherit;\n  white-space: nowrap;\n  overflow: auto;\n  transition-property: width;\n  transition-duration: 0.4s;\n  transition-timing-function: ease-in;\n  ", "\n"], ["\n  width: 100%;\n  height: inherit;\n  white-space: nowrap;\n  overflow: auto;\n  transition-property: width;\n  transition-duration: 0.4s;\n  transition-timing-function: ease-in;\n  ", "\n"])), index.States.HiddenScrollbar);
var Div = styled__default.div(templateObject_2 || (templateObject_2 = index.__makeTemplateObject(["\n  padding-top: 4px;\n"], ["\n  padding-top: 4px;\n"])));
var HorizontalScrollableContainerStyles = styled__default.div.attrs({
    'data-simplebar': 'init',
    'data-simplebar-auto-hide': 'false',
})(templateObject_3 || (templateObject_3 = index.__makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), ContainerStyles);
var HorizontalScrollableContainer = function (props) {
    var children = props.children, rest = index.__rest(props, ["children"]);
    return (React__default.createElement(HorizontalScrollableContainerStyles, index.__assign({}, rest),
        React__default.createElement(Div, null, children)));
};
var HorizontalDynamicScrollableContainerStyles = styled__default.div(templateObject_4 || (templateObject_4 = index.__makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), ContainerStyles);
var HorizontalDynamicScrollableContainer = function (props) {
    var children = props.children, rest = index.__rest(props, ["children"]);
    return (React__default.createElement(HorizontalDynamicScrollableContainerStyles, index.__assign({}, rest),
        React__default.createElement(Div, null, children)));
};
var templateObject_1$5, templateObject_2, templateObject_3, templateObject_4;

var CardLabel = styled__default(index.BaseCardLabel)(templateObject_1$6 || (templateObject_1$6 = index.__makeTemplateObject(["\n  height: 32px;\n  font-size: ", "px;\n"], ["\n  height: 32px;\n  font-size: ", "px;\n"])), function (props) { return props.theme.measurements.fontSystem.label2.size; });
var templateObject_1$6;

var ToolOptionsbarStyles = styled__default.div(templateObject_3$1 || (templateObject_3$1 = index.__makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  flex-shrink: 0;\n  height: ", "px;\n  width: 100%;\n  text-align: center;\n  z-index: ", ";\n  ", "\n"], ["\n  position: relative;\n  overflow: hidden;\n  flex-shrink: 0;\n  height: ", "px;\n  width: 100%;\n  text-align: center;\n  z-index: ", ";\n  ",
    "\n"])), function (props) { return props.theme.measurements.basicToolControlBar.itemsBarHeight; }, function (props) { return props.theme.measurements.zIndex.toolControlBar; }, function (props) {
    return props.show
        ? styled.css(templateObject_1$7 || (templateObject_1$7 = index.__makeTemplateObject(["\n          transition-timing-function: ease-in;\n          transition-duration: 0.3s;\n          transition-property: all;\n          padding: 2px;\n          max-height: ", "px;\n          background: ", ";\n          color: ", ";\n        "], ["\n          transition-timing-function: ease-in;\n          transition-duration: 0.3s;\n          transition-property: all;\n          padding: 2px;\n          max-height: ", "px;\n          background: ", ";\n          color: ", ";\n        "])), props.theme.measurements.basicToolControlBar.itemsBarHeight, props.theme.toolControlBar.background, props.theme.toolControlBar.inputLabelForeground) : styled.css(templateObject_2$1 || (templateObject_2$1 = index.__makeTemplateObject(["\n          max-height: 0px;\n        "], ["\n          max-height: 0px;\n        "])));
});
var ToolOptionsbar = function (_a) {
    var show = _a.show, children = _a.children;
    return (React__default.createElement(ToolOptionsbarStyles, { show: show }, children));
};
ToolOptionsbarStyles.defaultProps = { theme: index.defaultStyledTheme, show: true };
var templateObject_1$7, templateObject_2$1, templateObject_3$1;

var Separator = styled__default.div(templateObject_1$8 || (templateObject_1$8 = index.__makeTemplateObject(["\n  height: ", "px;\n  width: 2px;\n  margin: 0 10px;\n  display: inline-flex;\n  position: relative;\n  &:after {\n    content: ' ';\n    right: 0px;\n    position: absolute;\n    top: 8px;\n    height: calc(100% - 16px);\n    border-right: 1px solid ", ";\n  }\n"], ["\n  height: ", "px;\n  width: 2px;\n  margin: 0 10px;\n  display: inline-flex;\n  position: relative;\n  &:after {\n    content: ' ';\n    right: 0px;\n    position: absolute;\n    top: 8px;\n    height: calc(100% - 16px);\n    border-right: 1px solid ", ";\n  }\n"])), function (props) { return props.theme.measurements.basicToolControlBar.itemsBarHeight; }, function (props) { return props.theme.toolControlBar.separatorColor; });
var templateObject_1$8;

var BasicToolControlsBar = styled__default.div(templateObject_3$2 || (templateObject_3$2 = index.__makeTemplateObject(["\n  position: relative;\n  display: flex;\n  flex-shrink: 0;\n  height: auto;\n  transition: max-height 0.4s ease-in-out;\n  ", "\n"], ["\n  position: relative;\n  display: flex;\n  flex-shrink: 0;\n  height: auto;\n  transition: max-height 0.4s ease-in-out;\n  ",
    "\n"])), function (props) {
    return props.show
        ? styled.css(templateObject_1$9 || (templateObject_1$9 = index.__makeTemplateObject(["\n          max-height: 80px;\n        "], ["\n          max-height: 80px;\n        "]))) : styled.css(templateObject_2$2 || (templateObject_2$2 = index.__makeTemplateObject(["\n          max-height: 0px;\n        "], ["\n          max-height: 0px;\n        "])));
});
BasicToolControlsBar.defaultProps = { theme: index.defaultStyledTheme, show: true };
var templateObject_1$9, templateObject_2$2, templateObject_3$2;

var Separator$1 = styled__default.div(templateObject_2$3 || (templateObject_2$3 = index.__makeTemplateObject(["\n  &:after {\n    content: '';\n    position: absolute;\n    bottom: 0px;\n    ", "\n    border-bottom: 1px solid ", ";\n  }\n"], ["\n  &:after {\n    content: '';\n    position: absolute;\n    bottom: 0px;\n    ",
    "\n    border-bottom: 1px solid ", ";\n  }\n"])), function (props) {
    return props.full
        ? styled.css(templateObject_1$a || (templateObject_1$a = index.__makeTemplateObject(["\n            left: -24px;\n            width: calc(100% + 48px);\n          "], ["\n            left: -24px;\n            width: calc(100% + 48px);\n          "]))) : "\n      left: 24px;\n      width: calc(100% - 48px);\n    ";
}, function (props) { return props.theme.toolControlBar.separatorColor; });
Separator$1.defaultProps = { theme: index.defaultStyledTheme };
var templateObject_1$a, templateObject_2$3;

var ControlsWrapper = styled__default.div(templateObject_1$b || (templateObject_1$b = index.__makeTemplateObject(["\n  text-align: -moz-center;\n  text-align: center;\n  text-align: -webkit-center;\n  overflow: visible;\n  margin: 0 10vw;\n  height: auto;\n  box-shadow: ", ";\n  @media all and (min-width: 0) and (max-width: 599px) {\n    margin: 0 5vw;\n  }\n"], ["\n  text-align: -moz-center;\n  text-align: center;\n  text-align: -webkit-center;\n  overflow: visible;\n  margin: 0 10vw;\n  height: auto;\n  box-shadow: ", ";\n  @media all and (min-width: 0) and (max-width: 599px) {\n    margin: 0 5vw;\n  }\n"])), function (props) { return props.theme.toolControlBar.shadow; });
var templateObject_1$b;

var FlexWrapper = styled__default.div(templateObject_1$c || (templateObject_1$c = index.__makeTemplateObject(["\n  position: absolute;\n  left: 0%;\n  transform: translateY(0%) scaleY(0);\n  justify-content: center;\n  padding: 0 5vw;\n  width: 90%;\n  height: ", "px;\n  display: flex;\n  align-items: center;\n  overflow-y: hidden;\n  transition: transform 0.4s ease-in-out;\n  z-index: ", ";\n  background: ", ";\n  color: ", ";\n  &.show {\n    transform: translateY(-100%) scaleY(1);\n    overflow: visible;\n  }\n"], ["\n  position: absolute;\n  left: 0%;\n  transform: translateY(0%) scaleY(0);\n  justify-content: center;\n  padding: 0 5vw;\n  width: 90%;\n  height: ", "px;\n  display: flex;\n  align-items: center;\n  overflow-y: hidden;\n  transition: transform 0.4s ease-in-out;\n  z-index: ", ";\n  background: ", ";\n  color: ", ";\n  &.show {\n    transform: translateY(-100%) scaleY(1);\n    overflow: visible;\n  }\n"])), function (props) { return props.theme.measurements.basicToolControlBar.controlsBarHeight; }, function (props) { return props.theme.measurements.zIndex.controlsBar; }, function (props) { return props.theme.toolControlBar.background; }, function (props) { return props.theme.toolControlBar.inputLabelForeground; });
var templateObject_1$c;

var Label = styled__default.span(templateObject_1$d || (templateObject_1$d = index.__makeTemplateObject(["\n  display: flex;\n  cursor: pointer;\n  z-index: ", ";\n  transition: bottom 0.3s linear;\n"], ["\n  display: flex;\n  cursor: pointer;\n  z-index: ", ";\n  transition: bottom 0.3s linear;\n"])), function (props) { return props.theme.measurements.zIndex.label; });
var IconBaseCard = styled__default(index.BaseButton)(templateObject_2$4 || (templateObject_2$4 = index.__makeTemplateObject(["\n  position: absolute;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  color: ", ";\n  background-color: ", ";\n  border: unset;\n  box-shadow: unset;\n  font-size: ", "px;\n  letter-spacing: ", "px;\n  text-transform: ", ";\n  font-family: '", "', sans-serif;\n  &:active,\n  &.active {\n    background-color: ", ";\n    color: ", ";\n  }\n  svg {\n    display: flex;\n    transition: visibility 0s, opacity 0.5s linear;\n    visibility: visible;\n    opacity: 1;\n  }\n"], ["\n  position: absolute;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  color: ", ";\n  background-color: ", ";\n  border: unset;\n  box-shadow: unset;\n  font-size: ", "px;\n  letter-spacing: ", "px;\n  text-transform: ", ";\n  font-family: '", "', sans-serif;\n  &:active,\n  &.active {\n    background-color: ", ";\n    color: ", ";\n  }\n  svg {\n    display: flex;\n    transition: visibility 0s, opacity 0.5s linear;\n    visibility: visible;\n    opacity: 1;\n  }\n"])), function (props) { return props.theme.toolbar.foreground; }, function (props) { return props.theme.toolbar.background; }, function (props) { return props.theme.measurements.fontSystem.headline2.size; }, function (props) { return props.theme.measurements.fontSystem.label.letterSpacing; }, function (props) { return props.theme.measurements.fontSystem.label.case; }, function (props) { return props.theme.typography.fontFamily; }, function (props) { return props.theme.toolbar.activeBackground; }, function (props) { return props.theme.toolbar.activeForeground; });
var IconBaseCardContainer = styled__default.div(templateObject_3$3 || (templateObject_3$3 = index.__makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])));
var CardWrapper = styled__default.li.attrs({
    role: 'none',
})(templateObject_4$1 || (templateObject_4$1 = index.__makeTemplateObject(["\n  height: ", "px;\n  text-align: center;\n  min-width: 100px;\n  position: relative;\n  display: inline-block;\n  margin: 1px;\n"], ["\n  height: ", "px;\n  text-align: center;\n  min-width: 100px;\n  position: relative;\n  display: inline-block;\n  margin: 1px;\n"])), function (props) { return props.theme.measurements.basicUIToolbar.openHeight; });
var templateObject_1$d, templateObject_2$4, templateObject_3$3, templateObject_4$1;

var Toolbar = styled__default.ul.attrs(function () { return ({
    role: 'menubar',
    'aria-label': 'Tool Navigation',
    'data-simplebar': 'init',
    'data-simplebar-auto-hide': 'false',
}); })(templateObject_3$4 || (templateObject_3$4 = index.__makeTemplateObject(["\n  width: 100%;\n  white-space: nowrap;\n  overflow-y: hidden;\n  text-align: center;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  position: relative;\n  display: flex;\n  flex-shrink: 0;\n  justify-content: center;\n  transition: height 0.2s ease-out, display 0.1s fade-out;\n  background-color: ", ";\n  color: ", ";\n  z-index: ", ";\n  ", "\n  ", "\n"], ["\n  width: 100%;\n  white-space: nowrap;\n  overflow-y: hidden;\n  text-align: center;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  position: relative;\n  display: flex;\n  flex-shrink: 0;\n  justify-content: center;\n  transition: height 0.2s ease-out, display 0.1s fade-out;\n  background-color: ", ";\n  color: ", ";\n  z-index: ", ";\n  ",
    "\n  ", "\n"])), function (props) { return props.theme.toolbar.background; }, function (props) { return props.theme.toolbar.foreground; }, function (props) { return props.theme.measurements.zIndex.toolbar; }, function (props) {
    return props.show
        ? styled.css(templateObject_1$e || (templateObject_1$e = index.__makeTemplateObject(["\n          height: ", "px;\n          ", " {\n            &:active,\n            &.active {\n              border: none;\n              &:after {\n                background-color: transparent !important;\n              }\n            }\n            svg {\n              visibility: hidden;\n              opacity: 0;\n              height: 0;\n            }\n          }\n          ", " {\n            height: ", "px;\n          }\n        "], ["\n          height: ", "px;\n          ", " {\n            &:active,\n            &.active {\n              border: none;\n              &:after {\n                background-color: transparent !important;\n              }\n            }\n            svg {\n              visibility: hidden;\n              opacity: 0;\n              height: 0;\n            }\n          }\n          ", " {\n            height: ", "px;\n          }\n        "])), props.theme.measurements.basicUIToolbar.closeHeight, IconBaseCard, CardWrapper, props.theme.measurements.basicUIToolbar.closeHeight) : styled.css(templateObject_2$5 || (templateObject_2$5 = index.__makeTemplateObject(["\n          height: ", "px;\n        "], ["\n          height: ", "px;\n        "])), props.theme.measurements.basicUIToolbar.openHeight);
}, index.States.HiddenScrollbar);
Toolbar.defaultProps = { theme: index.defaultStyledTheme, show: false };
var templateObject_1$e, templateObject_2$5, templateObject_3$4;

var ToolbarItem = function (_a) {
    var children = _a.children, label = _a.label, active = _a.active, onClick = _a.onClick;
    return (React__default.createElement(CardWrapper, { "aria-haspopup": true, "aria-expanded": active },
        React__default.createElement(IconBaseCard, { ariaLabel: label, onClick: onClick, className: active ? 'active' : '' },
            React__default.createElement(IconBaseCardContainer, null,
                children,
                React__default.createElement(Label, null, label)))));
};

var Separator$2 = styled__default.li.attrs({
    role: 'none',
})(templateObject_3$5 || (templateObject_3$5 = index.__makeTemplateObject(["\n  ", "\n  width: 2px;\n  display: inline-block;\n  position: relative;\n  &:after {\n    content: ' ';\n    right: 0px;\n    position: absolute;\n    top: 8px;\n    height: calc(100% - 16px);\n    border-right: 1px solid ", ";\n  }\n"], ["\n  ",
    "\n  width: 2px;\n  display: inline-block;\n  position: relative;\n  &:after {\n    content: ' ';\n    right: 0px;\n    position: absolute;\n    top: 8px;\n    height: calc(100% - 16px);\n    border-right: 1px solid ", ";\n  }\n"])), function (props) {
    return !props.active
        ? styled.css(templateObject_1$f || (templateObject_1$f = index.__makeTemplateObject(["\n          height: ", "px;\n        "], ["\n          height: ", "px;\n        "])), props.theme.measurements.basicUIToolbar.openHeight) : styled.css(templateObject_2$6 || (templateObject_2$6 = index.__makeTemplateObject(["\n          height: ", "px;\n        "], ["\n          height: ", "px;\n        "])), props.theme.measurements.basicUIToolbar.closeHeight);
}, function (props) { return props.theme.toolControlBar.separatorColor; });
var templateObject_1$f, templateObject_2$6, templateObject_3$5;

var Root = styled__default.div(templateObject_1$g || (templateObject_1$g = index.__makeTemplateObject([""], [""])));
var Tab = function (_a) {
    var label = _a.label, className = _a.className, children = _a.children;
    return (React__default.createElement(Root, { "aria-label": label, className: className }, children));
};
var templateObject_1$g;

var TabTitleStyles = styled__default(index.ButtonGroupItem)(templateObject_1$h || (templateObject_1$h = index.__makeTemplateObject(["\n  display: inline-flex;\n  font-size: ", "px;\n  letter-spacing: ", "px;\n  text-transform: ", ";\n  line-height: 16px;\n  color: ", ";\n  border-radius: unset;\n  padding: 1px 12px 2px;\n  background: ", ";\n  &.active,\n  &:active {\n    background: ", ";\n    color: ", ";\n    border-bottom: 1px solid ", ";\n  }\n  @media all and (min-width: 0) and (max-width: 599px) {\n    max-width: 150px;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"], ["\n  display: inline-flex;\n  font-size: ", "px;\n  letter-spacing: ", "px;\n  text-transform: ", ";\n  line-height: 16px;\n  color: ", ";\n  border-radius: unset;\n  padding: 1px 12px 2px;\n  background: ", ";\n  &.active,\n  &:active {\n    background: ", ";\n    color: ", ";\n    border-bottom: 1px solid ", ";\n  }\n  @media all and (min-width: 0) and (max-width: 599px) {\n    max-width: 150px;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"])), function (props) { return props.theme.measurements.fontSystem.headline2.size; }, function (props) { return props.theme.measurements.fontSystem.headline2.letterSpacing; }, function (props) { return props.theme.measurements.fontSystem.headline2.case; }, function (props) { return props.theme.tabTitle.foreground; }, function (props) { return props.theme.tabTitle.background; }, function (props) { return props.theme.tabTitle.activeBackground; }, function (props) { return props.theme.tabTitle.activeForeground; }, function (props) { return props.theme.tabTitle.activeBorderColor; });
var TabTitle = /** @class */ (function (_super) {
    index.__extends(TabTitle, _super);
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
        return (React__default.createElement(TabTitleStyles, { ariaLabel: label, isActive: activeTab === label, onClick: this.onClick }, label));
    };
    return TabTitle;
}(React__default.Component));
var templateObject_1$h;

var TabBody = styled__default.div(templateObject_1$i || (templateObject_1$i = index.__makeTemplateObject(["\n  animation: ", " 0.2s linear;\n  animation-fill-mode: both;\n  overflow: visible;\n  height: 40px;\n  padding-top: 8px;\n  min-width: 350px;\n  @media all and (min-width: 0) and (max-width: 599px) {\n    min-width: 280px;\n  }\n"], ["\n  animation: ", " 0.2s linear;\n  animation-fill-mode: both;\n  overflow: visible;\n  height: 40px;\n  padding-top: 8px;\n  min-width: 350px;\n  @media all and (min-width: 0) and (max-width: 599px) {\n    min-width: 280px;\n  }\n"])), index.Animations.scale);
var templateObject_1$i;

var Button = styled__default(TextSecondaryButton)(templateObject_1$j || (templateObject_1$j = index.__makeTemplateObject(["\n  display: inline-flex;\n  padding: 0 4px;\n  height: 20px;\n  font-size: 16px;\n"], ["\n  display: inline-flex;\n  padding: 0 4px;\n  height: 20px;\n  font-size: 16px;\n"])));
var ExtendedButtonGroup = styled__default(index.ButtonGroupWrapper)(templateObject_2$7 || (templateObject_2$7 = index.__makeTemplateObject(["\n  transform: translate(-100%, -120%);\n"], ["\n  transform: translate(-100%, -120%);\n"
    /**
     * Based on the length prop, for the extra elemnts a ... buttin is shown
     * By default all the tab items are shown
     */
])));
var TabWrapper = /** @class */ (function (_super) {
    index.__extends(TabWrapper, _super);
    function TabWrapper(props) {
        var _this = _super.call(this, props) || this;
        _this.onTabClick = function (tab) {
            _this.setState({ activeTab: tab, toggleExtend: false });
        };
        /** Extra tabs will be shown as a button group of drop */
        _this.getDropUp = function () {
            var children = React__default.Children.toArray(_this.props.children);
            var remaining = children.slice(_this.state.length);
            return (React__default.createElement(ExtendedButtonGroup, { show: _this.state.toggleExtend }, remaining.map(function (c) {
                var label = c.props.label || '';
                return (React__default.createElement(index.ButtonGroupItem, { onClick: function () { return _this.onTabClick(label); }, key: label, ariaLabel: 'More Options' }, label));
            })));
        };
        _this.extend = function () {
            _this.setState(function (_a) {
                var toggleExtend = _a.toggleExtend;
                return ({ toggleExtend: !toggleExtend });
            });
        };
        _this.getExtension = function () {
            return (React__default.createElement(Button, { onClick: _this.extend, ariaLabel: 'Select Next' }, "..."));
        };
        var count = React__default.Children.count(_this.props.children);
        var children = React__default.Children.toArray(_this.props.children);
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
        var children = React__default.Children.toArray(this.props.children).slice(0, length);
        /** Checking if there are extra available elements, than desired tab length */
        var shouldExtend = React__default.Children.count(this.props.children) > length;
        return (React__default.createElement("div", null,
            children.map(function (child) {
                if (child) {
                    var label = child.props.label || '';
                    return React__default.createElement(TabTitle, { activeTab: activeTab, key: label, label: label, onClick: _this.onTabClick });
                }
                return null;
            }),
            shouldExtend ? this.getExtension() : null,
            toggleExtend ? this.getDropUp() : null,
            React__default.Children.map(this.props.children, function (child) {
                if (!child || (child.props && child.props.label !== activeTab)) {
                    return null;
                }
                return React__default.createElement(TabBody, { key: child.props.label }, child.props.children);
            })));
    };
    return TabWrapper;
}(React__default.Component));
var templateObject_1$j, templateObject_2$7;

var Div$1 = styled__default.div(templateObject_1$k || (templateObject_1$k = index.__makeTemplateObject(["\n  overflow: visible;\n  white-space: nowrap;\n  display: flex;\n  transition: all 0.2s linear;\n"], ["\n  overflow: visible;\n  white-space: nowrap;\n  display: flex;\n  transition: all 0.2s linear;\n"])));
var ResponsiveTabWrapper = /** @class */ (function (_super) {
    index.__extends(ResponsiveTabWrapper, _super);
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
            var count = React__default.Children.count(_this.props.children);
            var diff = maxContainerWidth - count * ResponsiveTabWrapper.TAB_WIDTH;
            if (diff < 0) {
                var length_1 = Math.floor(Math.abs(diff / ResponsiveTabWrapper.TAB_WIDTH));
                _this.setState({ length: count - length_1 });
            }
        };
        return _this;
    }
    ResponsiveTabWrapper.prototype.componentDidMount = function () {
        this.setState({ length: React__default.Children.count(this.props.children) });
        window.addEventListener('resize', this.updateLength);
        this.updateLength();
    };
    ResponsiveTabWrapper.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this.updateLength);
    };
    ResponsiveTabWrapper.prototype.render = function () {
        var length = this.state.length;
        if (length) {
            return (React__default.createElement(Div$1, null,
                React__default.createElement(TabWrapper, { length: length }, this.props.children)));
        }
        return null;
    };
    ResponsiveTabWrapper.TAB_WIDTH = 120;
    return ResponsiveTabWrapper;
}(React__default.Component));
var templateObject_1$k;

/**
 * This empty div is used for alignment of tabbar,
 * it should stay in center even when there's button on one side, so this div balences out the other half
 */
var EmptyDiv = styled__default.div(templateObject_1$l || (templateObject_1$l = index.__makeTemplateObject(["\n  width: 100px;\n  @media all and (min-width: 0) and (max-width: 599px) {\n    width: 42px;\n  }\n"], ["\n  width: 100px;\n  @media all and (min-width: 0) and (max-width: 599px) {\n    width: 42px;\n  }\n"])));
var templateObject_1$l;

var Slider = styled__default(index.Components.Input.Slider).attrs(function () { return ({ centerSlider: true }); })(templateObject_1$m || (templateObject_1$m = index.__makeTemplateObject(["\n  max-width: 224px;\n"], ["\n  max-width: 224px;\n"])));
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
        var ToolIcon = index.ToolbarIcons[tool];
        return React__default.createElement(ToolIcon, null) || null;
    };
    var getToolTitle = function (tool) {
        return config.locale[tool].title;
    };
    var update = function (tool) {
        active.selectTool(tool, true);
    };
    var renderTools = function (tool, index) {
        return (tool && (React__default.createElement(BasicUIComponents.Toolbar.Item, { onClick: function () { return update(tool); }, key: tool, label: getToolTitle(tool), active: activeTool === tool }, renderIcon(tool)))) || React__default.createElement(BasicUIComponents.Toolbar.Separator, { key: tool + index, active: !!activeTool });
    };
    return (React__default.createElement(BasicUIComponents.Toolbar.Index, { role: "menubar", show: !!activeTool }, tools.map(renderTools)));
};
var Toolbar$1 = index.inject('config', 'active')(index.observer(ToolbarComponent));

var Items = /** @class */ (function (_super) {
    index.__extends(Items, _super);
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
            if (type === index.CardType$1.LARGE) {
                _this.onCatgoryClick(identifier);
            }
            else {
                _this.onImageClick(identifier);
            }
        };
        _this.renderCard = function (card, index$1) { return (React__default.createElement(BasicUIComponents.Card, { isActive: false, type: card.type, onClick: function () { return _this.onClick(card.type, card.identifier); }, key: card.defaultName + index$1, image: card.coverImage, style: { animationDelay: (card.delay || 0) + "s" }, label: card.defaultName }, card.type === index.CardType$1.LARGE ? (React__default.createElement(BasicUIComponents.CardLabel, { withBackground: true }, card.defaultName)) : null)); };
        return _this;
    }
    Items.prototype.componentDidMount = function () {
        this.simpleBar = new index.SimpleBar(document.getElementById('LibraryConfig'), { autoHide: false });
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
        return React__default.createElement("div", null, categories && categories.length ? categories.map(this.renderCard) : null);
    };
    Items.prototype.renderImages = function () {
        var images = this.library.images;
        var noResults = this.library.locale.controls.noResults;
        return React__default.createElement("div", null, images.length ? images.map(this.renderCard) : React__default.createElement("p", null, noResults));
    };
    Items.prototype.render = function () {
        var query = this.library.query;
        return (React__default.createElement(BasicUIComponents.DynamicCardContainer, { id: "LibraryConfig" }, query ? this.renderImages() : this.renderCategoryList()));
    };
    return Items;
}(React__default.Component));
var LibraryItemsBar = index.inject('library', 'active')(index.observer(Items));

var Items$1 = /** @class */ (function (_super) {
    index.__extends(Items, _super);
    function Items() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onFilterCilck = function (filter) {
            _this.filterTool.selectFilter(filter.identifier, filter.defaultIntensity);
        };
        _this.onCatgoryClick = function (selectedCategoryIdentifier) {
            _this.filterTool.toggleCategorySelection(selectedCategoryIdentifier);
        };
        _this.onClick = function (card) {
            if (card.type === index.CardType$1.LARGE) {
                _this.onCatgoryClick(card.identifier);
                setTimeout(function () { return _this.simpleBar.recalculate(); }, 0);
            }
            else {
                _this.onFilterCilck(card);
            }
        };
        _this.renderCard = function (card) {
            var identifier = _this.filterTool.identifier;
            return (React__default.createElement(BasicUIComponents.Card, { isActive: identifier === card.identifier, type: card.type, onClick: function () { return _this.onClick(card); }, key: card.identifier, image: card.thumbnailURI, style: { animationDelay: (card.delay || 0) + "s" }, label: card.name },
                React__default.createElement(BasicUIComponents.CardLabel, { withBackground: true }, card.name)));
        };
        return _this;
    }
    Items.prototype.componentDidMount = function () {
        this.simpleBar = new index.SimpleBar(document.getElementById('FilterItems'), { autoHide: false });
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
        return (React__default.createElement(BasicUIComponents.DynamicCardContainer, { id: "FilterItems" },
            React__default.createElement("div", null, entities && entities.length ? entities.map(this.renderCard) : null)));
    };
    return Items;
}(React__default.Component));
var FilterItemsBar = index.inject('filterTool', 'active')(index.observer(Items$1));

var Items$2 = function (_a) {
    var focusTool = _a.focusTool;
    var onFocusClick = function (identifier) {
        focusTool.selectFocus(identifier);
    };
    var renderFocusOption = function (option) { return (React__default.createElement(BasicUIComponents.Card, { key: option.identifier, image: option.thumbnailURI, onClick: function () { return onFocusClick(option.identifier); }, isActive: option.identifier === focusTool.identifier, style: { animationDelay: (option.delay || 0) + "s" }, label: option.name },
        React__default.createElement(BasicUIComponents.CardLabel, { withBackground: true }, option.name))); };
    return React__default.createElement(BasicUIComponents.CardContainer, null, focusTool.entities.map(renderFocusOption));
};
var FocusItemsBar = index.inject('focusTool')(index.observer(Items$2));

var Icon = styled__default.div(templateObject_1$n || (templateObject_1$n = index.__makeTemplateObject(["\n  position: relative;\n  top: -8px;\n  color: ", ";\n"], ["\n  position: relative;\n  top: -8px;\n  color: ", ";\n"])), function (props) { return props.theme.card.foreground; });
var Items$3 = function (_a) {
    var adjustmentsTool = _a.adjustmentsTool;
    var onClick = function (option) {
        adjustmentsTool.toggleOptionSelection(option);
    };
    var renderAdjustment = function (option, index$1) {
        var SVG = index.AdjustmentIcons[option.identifier];
        return option ? (React__default.createElement(BasicUIComponents.Card, { key: option.identifier, onClick: function () { return onClick(option.identifier); }, isActive: option.identifier === adjustmentsTool.selectedAdjustmentType, style: { animationDelay: index$1 * 0.08 + "s" }, label: option.name },
            React__default.createElement(Icon, null,
                React__default.createElement(SVG, null)),
            React__default.createElement(BasicUIComponents.CardLabel, null, option.name))) : null;
    };
    return (React__default.createElement(BasicUIComponents.CardContainer, null, adjustmentsTool.items.map(renderAdjustment)));
};
Icon.defaultProps = { theme: index.defaultStyledTheme };
var AdjustItemsBar = index.inject('adjustmentsTool')(index.observer(Items$3));
var templateObject_1$n;

var Items$4 = function (_a) {
    var overlayTool = _a.overlayTool;
    var selectedIdentifier = overlayTool.identifier;
    var onOverlayCilck = function (identifier) {
        overlayTool.selectOverlay(identifier);
    };
    var renderOverlayOption = function (option) { return (React__default.createElement(BasicUIComponents.Card, { isActive: option.identifier === selectedIdentifier, onClick: function () { return onOverlayCilck(option.identifier); }, key: option.identifier, image: option.thumbnailURI, style: { animationDelay: (option.delay || 0) + "s" }, label: option.name },
        React__default.createElement(BasicUIComponents.CardLabel, { withBackground: true }, option.name))); };
    return (React__default.createElement(BasicUIComponents.CardContainer, null, overlayTool.entities.map(renderOverlayOption)));
};
var OverlayItemsBar = index.inject('overlayTool')(index.observer(Items$4));

var Items$5 = /** @class */ (function (_super) {
    index.__extends(Items, _super);
    function Items() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onClick = function (card) {
            if (card.type === index.CardType$1.LARGE) {
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
            return card.type === index.CardType$1.LARGE ? (React__default.createElement(BasicUIComponents.Card, { isActive: categoryIdentifier === card.identifier, type: card.type, onClick: function () { return _this.onClick(card); }, key: card.identifier, image: card.thumbnailURI, style: { animationDelay: (card.delay || 0) + "s" }, label: card.name },
                React__default.createElement(BasicUIComponents.CardLabel, { withBackground: true }, card.name))) : (React__default.createElement(BasicUIComponents.Card, { type: card.type, onClick: function () { return _this.onClick(card); }, key: card.identifier, image: card.thumbnailURI, style: { backgroundSize: '55%', animationDelay: (card.delay || 0) + "s" }, label: card.name },
                React__default.createElement(BasicUIComponents.CardLabel, { hidden: true }, card.name)));
        };
        return _this;
    }
    Items.prototype.componentDidMount = function () {
        this.simpleBar = new index.SimpleBar(document.getElementById('StickerConfig'), { autoHide: false });
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
        return (React__default.createElement(BasicUIComponents.DynamicCardContainer, { id: "StickerConfig" },
            React__default.createElement("div", null, categories && categories.length ? this.renderCategories(categories) : null)));
    };
    return Items;
}(React__default.Component));
var StickerItemsBar = index.inject('stickerTool', 'active')(index.observer(Items$5));

var Div$2 = styled__default.div(templateObject_1$o || (templateObject_1$o = index.__makeTemplateObject(["\n  font-size: 20px;\n  position: absolute;\n  left: 50%;\n  transform-origin: left top;\n"], ["\n  font-size: 20px;\n  position: absolute;\n  left: 50%;\n  transform-origin: left top;\n"])));
var Items$6 = /** @class */ (function (_super) {
    index.__extends(Items, _super);
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
                return options.map(function (font, index$1) {
                    var fontFamily = font.fontFamily, fontWeight = font.fontWeight, fontStyle = font.fontStyle, identifier = font.identifier;
                    var label = font.fontFamily + " " + index.TextToolStore.getDisplayFontStyle(font);
                    var width = _this.getWidth(font, label);
                    var scale = (config.measurements.basicCard.medium.width - 20) / width; // 20 is offset here
                    return (React__default.createElement(BasicUIComponents.Card, { isDisabled: !_this.textTool.isTextSelected, isActive: selected_1 === identifier, key: label, onClick: function () { return _this.textTool.changeFont(identifier); }, style: { animationDelay: index$1 * 0.08 + "s" }, label: label },
                        React__default.createElement(Div$2, { style: {
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
        return React__default.createElement(BasicUIComponents.CardContainer, null, this.renderFonts());
    };
    return Items;
}(React__default.Component));
var TextItemsBar = index.inject('textTool', 'config')(index.observer(Items$6));
var templateObject_1$o;

var Items$7 = /** @class */ (function (_super) {
    index.__extends(Items, _super);
    function Items() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderOptions = function (text) { return (React__default.createElement(BasicUIComponents.Card, { isDisabled: !_this.textDesignTool.isTextDesignSelected, isActive: _this.props.textDesignTool.identifier === text.identifier, key: text.identifier, image: text.thumbnailURI, style: { backgroundSize: '60%', animationDelay: (text.delay || 0) + "s" }, onClick: function () { return _this.textDesignTool.changeIdentifier(text.identifier); }, label: text.name },
            React__default.createElement(BasicUIComponents.CardLabel, { hidden: true }, text.name))); };
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
        return (React__default.createElement(BasicUIComponents.CardContainer, null, this.textDesignTool.entities.map(this.renderOptions)));
    };
    return Items;
}(React__default.Component));
var TextDesignItemsBar = index.inject('textDesignTool')(index.observer(Items$7));

var Items$8 = function (_a) {
    var frameTool = _a.frameTool;
    var selectedIdentifier = frameTool.identifier;
    var renderFrameOption = function (option) { return (React__default.createElement(BasicUIComponents.Card, { key: option.identifier, image: option.thumbnailURI, onClick: function () { return frameTool.selectFrame(option.identifier); }, isActive: option.identifier === selectedIdentifier, style: { animationDelay: (option.delay || 0) + "s", backgroundSize: '60%' }, label: option.name },
        React__default.createElement(BasicUIComponents.CardLabel, { hidden: true }, option.name))); };
    return React__default.createElement(BasicUIComponents.CardContainer, null, frameTool.entities.map(renderFrameOption));
};
var FrameItemsBar = index.inject('frameTool')(index.observer(Items$8));

var LargeCardContainer = styled__default.div(templateObject_1$p || (templateObject_1$p = index.__makeTemplateObject(["\n  svg {\n    margin-bottom: 12px;\n  }\n"], ["\n  svg {\n    margin-bottom: 12px;\n  }\n"])));
var Container = styled__default.div(templateObject_2$8 || (templateObject_2$8 = index.__makeTemplateObject(["\n  svg {\n    width: ", "px;\n    height: ", "px;\n    &.common-crop-thumbnail {\n      width: ", "px;\n      height: ", "px;\n      padding: 6px 0px 24px;\n    }\n  }\n"], ["\n  svg {\n    width: ", "px;\n    height: ", "px;\n    &.common-crop-thumbnail {\n      width: ", "px;\n      height: ", "px;\n      padding: 6px 0px 24px;\n    }\n  }\n"])), function (props) { return props.theme.measurements.basicCard.medium.height; }, function (props) { return props.theme.measurements.basicCard.medium.height; }, function (props) { return props.theme.measurements.basicCard.medium.width - 32; }, function (props) { return props.theme.measurements.basicCard.medium.height - 32; });
var Items$9 = /** @class */ (function (_super) {
    index.__extends(Items, _super);
    function Items() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onClick = function (card) {
            var transformTool = _this.props.transformTool;
            if (card.type === index.CardType$1.LARGE) {
                transformTool.toggleCategorySelection(card.identifier);
                setTimeout(function () { return _this.simpleBar.recalculate(); }, 0);
            }
            else {
                transformTool.changeIdentifier(card.identifier);
            }
        };
        _this.renderCategories = function (categories) {
            return categories.map(_this.renderCard);
        };
        _this.renderCard = function (card) {
            var _a = _this.props, config = _a.config, transformTool = _a.transformTool;
            var theme = config.theme;
            var component = null;
            if (card.type === index.CardType$1.LARGE && card.thumbnailURI === 'assets/transform') {
                component = (React__default.createElement(BasicUIComponents.Card, { type: card.type, onClick: function () { return _this.onClick(card); }, key: card.identifier, image: "", style: { animationDelay: (card.delay || 0) + "s" }, label: card.name },
                    React__default.createElement(LargeCardContainer, null,
                        index.TransformIcons.categories[card.identifier] &&
                            React__default.createElement(index.TransformIcons.categories[card.identifier]),
                        React__default.createElement(BasicUIComponents.CardLabel, null, card.name))));
            }
            else if (card.type === index.CardType$1.LARGE) {
                component = (React__default.createElement(BasicUIComponents.Card, { type: card.type, onClick: function () { return _this.onClick(card); }, key: card.identifier, image: card.thumbnailURI, style: { animationDelay: (card.delay || 0) + "s" }, label: card.name },
                    React__default.createElement(BasicUIComponents.CardLabel, null, card.name)));
            }
            else if (card.thumbnailURI === 'assets/transform') {
                component = (React__default.createElement(BasicUIComponents.Card, { key: card.identifier, type: card.type, onClick: function () { return _this.onClick(card); }, image: "", style: { backgroundSize: '55%', animationDelay: (card.delay || 0) + "s" }, isActive: card.identifier === transformTool.identifier, label: card.name },
                    React__default.createElement(Container, null,
                        React__default.createElement(index.TransformIcons.crops[card.identifier], {
                            main: theme.transform.crops.main,
                            highlight: theme.transform.crops.highlight,
                            shadow: theme.transform.crops.shadow,
                        }),
                        React__default.createElement(BasicUIComponents.CardLabel, null, card.name))));
            }
            else {
                component = (React__default.createElement(BasicUIComponents.Card, { key: card.identifier, type: card.type, onClick: function () { return _this.onClick(card); }, image: card.thumbnailURI, style: { backgroundSize: '55%', animationDelay: (card.delay || 0) + "s" }, isActive: card.identifier === transformTool.identifier, label: card.name },
                    React__default.createElement(BasicUIComponents.CardLabel, null, card.name)));
            }
            return component;
        };
        return _this;
    }
    Items.prototype.componentDidMount = function () {
        this.simpleBar = new index.SimpleBar(document.getElementById('TransformConfig'), { autoHide: false });
    };
    Items.prototype.render = function () {
        var transformTool = this.props.transformTool;
        var categories = transformTool.entities;
        return (React__default.createElement(BasicUIComponents.DynamicCardContainer, { id: "TransformConfig" },
            React__default.createElement("div", null, categories && categories.length ? this.renderCategories(categories) : null)));
    };
    return Items;
}(React__default.Component));
var TransfromItemsBar = index.inject('transformTool', 'config')(index.observer(Items$9));
var templateObject_1$p, templateObject_2$8;

var ToolItemsBarComponent = /** @class */ (function (_super) {
    index.__extends(ToolItemsBarComponent, _super);
    function ToolItemsBarComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getToolItemsComponent = function (activeTool) {
            switch (activeTool) {
                case index.Tool.LIBRARY:
                    return React__default.createElement(LibraryItemsBar, null);
                case index.Tool.FILTER:
                    return React__default.createElement(FilterItemsBar, null);
                case index.Tool.FOCUS:
                    return React__default.createElement(FocusItemsBar, null);
                case index.Tool.ADJUSTMENT:
                    return React__default.createElement(AdjustItemsBar, null);
                case index.Tool.OVERLAY:
                    return React__default.createElement(OverlayItemsBar, null);
                case index.Tool.STICKER:
                    return React__default.createElement(StickerItemsBar, null);
                case index.Tool.TEXT:
                    return React__default.createElement(TextItemsBar, null);
                case index.Tool.TEXT_DESIGN:
                    return React__default.createElement(TextDesignItemsBar, null);
                case index.Tool.FRAME:
                    return React__default.createElement(FrameItemsBar, null);
                case index.Tool.TRANSFORM:
                    return React__default.createElement(TransfromItemsBar, null);
            }
            return null;
        };
        return _this;
    }
    ToolItemsBarComponent.prototype.render = function () {
        var activeTool = this.props.active.tool;
        return activeTool === index.Tool.BRUSH ? null : (React__default.createElement(BasicUIComponents.Itemsbar, { show: !!activeTool }, this.getToolItemsComponent(activeTool)));
    };
    ToolItemsBarComponent = index.__decorate([
        index.inject('active'),
        index.observer
    ], ToolItemsBarComponent);
    return ToolItemsBarComponent;
}(React__default.Component));

var Controls = function (_a) {
    var filterTool = _a.filterTool;
    var state = filterTool.state;
    var filterControlLocale = filterTool.locale.controls;
    var onRelease = function () {
        filterTool.toolSnapshot();
    };
    return (React__default.createElement(BasicUIComponents.ControlsbarContainer, { className: filterTool.isOptionSelected ? 'show' : '' },
        React__default.createElement(BasicUIComponents.Button.OutlinedSecondary, { ariaLabel: filterTool.locale.controls.buttonReset, onClick: filterTool.reset, icon: React__default.createElement(index.ToolControlBarIcons.reset, null) }, filterTool.locale.controls.buttonReset),
        React__default.createElement(BasicUIComponents.Other.ControlsWrapper, null,
            React__default.createElement(index.Components.Spacer, { count: 2 }),
            React__default.createElement(BasicUIComponents.Slider, { "aria-hidden": !filterTool.isOptionSelected, style: { width: '280px' }, name: filterControlLocale.sliderIntensity, value: state.intensity, min: 0, max: 1, onMouseUp: onRelease, onTouchEnd: onRelease, onChange: filterTool.changeIntensity, snap: state.isDuotone ? 0.5 : null }),
            React__default.createElement(index.Components.Spacer, { count: 2 }),
            React__default.createElement(BasicUIComponents.BarSeparator, null)),
        React__default.createElement(BasicUIComponents.Other.EmptyDiv, null)));
};
var FilterControlsBar = index.inject('filterTool')(index.observer(Controls));

var Controls$1 = function (_a) {
    var focusTool = _a.focusTool;
    var focusControlLocale = focusTool.locale.controls;
    var onRelease = function () {
        focusTool.toolSnapshot(focusControlLocale.sliderIntensity);
    };
    return (React__default.createElement(BasicUIComponents.ControlsbarContainer, { className: focusTool.isOptionSelected ? 'show' : '' },
        React__default.createElement(BasicUIComponents.Button.OutlinedSecondary, { ariaLabel: focusControlLocale.buttonReset, onClick: focusTool.reset, icon: React__default.createElement(index.ToolControlBarIcons.reset, null) }, focusControlLocale.buttonReset),
        React__default.createElement(BasicUIComponents.Other.ControlsWrapper, null,
            React__default.createElement(index.Components.Spacer, { count: 2 }),
            React__default.createElement(BasicUIComponents.Slider, { "aria-hidden": !focusTool.isOptionSelected, style: { width: '280px' }, name: focusControlLocale.sliderIntensity, value: focusTool.intensity, min: index.FocusToolStore.minIntensity, max: focusTool.maxIntensity, divider: 1, onChange: focusTool.changeIntensity, onMouseUp: onRelease, onTouchEnd: onRelease }),
            React__default.createElement(index.Components.Spacer, { count: 2 }),
            React__default.createElement(BasicUIComponents.BarSeparator, null)),
        React__default.createElement(BasicUIComponents.Other.EmptyDiv, null)));
};
var FocusControlsBar = index.inject('focusTool')(index.observer(Controls$1));

var Controls$2 = function (_a) {
    var adjustmentsTool = _a.adjustmentsTool;
    var state = adjustmentsTool.selectedAdjustmentType.toLowerCase();
    var onRelease = function () {
        adjustmentsTool.toolSnapshot();
    };
    return (React__default.createElement(BasicUIComponents.ControlsbarContainer, { className: state ? 'show' : '' },
        React__default.createElement(BasicUIComponents.Button.OutlinedSecondary, { ariaLabel: adjustmentsTool.locale.controls.buttonReset, onClick: adjustmentsTool.reset, icon: React__default.createElement(index.ToolControlBarIcons.reset, null) }, adjustmentsTool.locale.controls.buttonReset),
        React__default.createElement(BasicUIComponents.Other.ControlsWrapper, null,
            React__default.createElement(index.Components.Spacer, { count: 2 }),
            React__default.createElement(BasicUIComponents.Slider, { "aria-hidden": !state, adjust: true, style: { width: '280px' }, name: adjustmentsTool.selectedOptionLabel, value: adjustmentsTool[state], onChange: function (value) { return adjustmentsTool.editAdjustments({ type: state, value: value }); }, onMouseUp: onRelease, onTouchEnd: onRelease, snap: 0 }),
            React__default.createElement(index.Components.Spacer, { count: 2 }),
            React__default.createElement(BasicUIComponents.BarSeparator, null)),
        React__default.createElement(BasicUIComponents.Other.EmptyDiv, null)));
};
var AdjustControlsBar = index.inject('adjustmentsTool')(index.observer(Controls$2));

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
    return (React__default.createElement(BasicUIComponents.ControlsbarContainer, { className: overlayTool.isOptionSelected ? 'show' : '' },
        React__default.createElement(BasicUIComponents.Button.OutlinedSecondary, { ariaLabel: overlayControlLocale.buttonReset, onClick: overlayTool.reset, icon: React__default.createElement(index.ToolControlBarIcons.reset, null) }, overlayControlLocale.buttonReset),
        React__default.createElement(BasicUIComponents.Other.ControlsWrapper, null,
            React__default.createElement(index.Components.Spacer, null),
            React__default.createElement(Tabs, null,
                React__default.createElement(Tab$1, { label: overlayControlLocale.tabBlendMode },
                    React__default.createElement(index.Components.Input.CarouselSlider, { showLabel: false, label: overlayControlLocale.carouselBlendMode, defaultIdentifier: blendMode, onSelect: changeBlendMode, list: allBlendModes })),
                React__default.createElement(Tab$1, { label: overlayControlLocale.tabOpacity },
                    React__default.createElement(BasicUIComponents.Slider, { "aria-hidden": !overlayTool.isOptionSelected, showLabel: false, style: { width: '280px' }, name: overlayControlLocale.sliderOpacity, value: state.opacity, min: 0, max: 1, onChange: overlayTool.changeOpacity, onMouseUp: onRelease, onTouchEnd: onRelease }))),
            React__default.createElement(BasicUIComponents.BarSeparator, null)),
        React__default.createElement(BasicUIComponents.Other.EmptyDiv, null)));
};
var OverlayControlsBar = index.inject('overlayTool')(index.observer(Controls$3));

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
    return (React__default.createElement(BasicUIComponents.ControlsbarContainer, { className: "show" },
        React__default.createElement(BasicUIComponents.Button.OutlinedPrimary, { ariaLabel: library.locale.controls.buttonUpload, onClick: uploadImage, icon: React__default.createElement(index.ToolControlBarIcons.uploadImage, null) },
            library.locale.controls.buttonUpload,
            React__default.createElement(index.Components.Input.File, { onChange: onFilesAdded })),
        React__default.createElement(BasicUIComponents.Other.ControlsWrapper, null,
            React__default.createElement(index.Components.Spacer, { count: 2 }),
            React__default.createElement(index.Components.Input.Search, { onChange: searchQuery, placeholder: placeholderSearch }),
            React__default.createElement(index.Components.Spacer, { count: 2 }),
            React__default.createElement(BasicUIComponents.BarSeparator, null)),
        React__default.createElement(BasicUIComponents.Button.OutlinedSecondary, { ariaLabel: library.locale.controls.buttonWebcamOpen, onClick: onWebcamClick, icon: React__default.createElement(index.ToolControlBarIcons.openWebcam, null) }, library.locale.controls.buttonWebcamOpen)));
};
var LibraryControlsBar = index.inject('library', 'active')(index.observer(Controls$4));

var Tabs$1 = BasicUIComponents.TabWrapper;
var Tab$2 = BasicUIComponents.Tab;
var FileInput = styled__default.input.attrs({
    type: 'file',
    id: 'fileUpload',
    accept: 'image/*',
    multiple: true,
})(templateObject_1$q || (templateObject_1$q = index.__makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), index.States.VisuallyHidden);
var Controls$5 = function (_a) {
    var stickerTool = _a.stickerTool;
    var labels = stickerTool.locale.controls;
    var labelsColor = stickerTool.localeColor.colorPicker;
    var colorList = index.StickerToolStore.defaultColors;
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
    var stickerControls = function () { return (React__default.createElement("div", null,
        React__default.createElement(index.Components.Spacer, { count: 2 }),
        React__default.createElement(BasicUIComponents.Slider, { isDisabled: !stickerTool.isStickerSelected, style: { width: '280px' }, name: labels.sliderOpacity, value: stickerTool.opacity, min: 0, max: 1, onMouseUp: onRelease, onTouchEnd: onRelease, onChange: stickerTool.changeOpacity }),
        React__default.createElement(index.Components.Spacer, { count: 2 }))); };
    var shapeControls = function () { return (React__default.createElement("div", null,
        React__default.createElement(index.Components.Spacer, null),
        React__default.createElement(Tabs$1, null,
            React__default.createElement(Tab$2, { label: labels.tabColor },
                React__default.createElement(index.Components.Spacer, { count: 1 }),
                React__default.createElement(index.Components.Input.Selection, { isDisabled: !stickerTool.isStickerSelected, showLabel: false, label: labels.selectColor },
                    React__default.createElement(index.ColorList, { activeColor: tintColor, colors: colorList, labelsColor: labelsColor, isDisabled: !stickerTool.isStickerSelected, colorPickerDirection: "top", onChange: stickerTool.changeTintColor, onAddSnapshot: stickerTool.tintColorSnapshot }))),
            React__default.createElement(Tab$2, { label: labels.tabOpacity },
                React__default.createElement(BasicUIComponents.Slider, { isDisabled: !stickerTool.isStickerSelected, showLabel: false, style: { width: '280px' }, name: labels.sliderOpacity, value: stickerTool.opacity, min: 0, max: 1, onMouseUp: onRelease, onTouchEnd: onRelease, onChange: stickerTool.changeOpacity }))))); };
    var getCustomStickerButton = function () {
        if (stickerTool.isCustomStickerEnabled) {
            return (React__default.createElement(BasicUIComponents.Button.OutlinedPrimary, { ariaLabel: labels.buttonUpload, onClick: onUploadClick, icon: React__default.createElement(index.ToolControlBarIcons.uploadImage, null) },
                labels.buttonUpload,
                React__default.createElement(FileInput, { onChange: onFilesAdded })));
        }
        return null;
    };
    return (React__default.createElement(BasicUIComponents.ControlsbarContainer, { className: 'show' },
        getCustomStickerButton(),
        React__default.createElement(BasicUIComponents.Other.ControlsWrapper, null,
            (stickerTool.tintable && shapeControls()) || stickerControls(),
            React__default.createElement(BasicUIComponents.BarSeparator, null)),
        React__default.createElement(BasicUIComponents.Other.EmptyDiv, null)));
};
var StickerControlsBar = index.inject('stickerTool')(index.observer(Controls$5));
var templateObject_1$q;

var Tabs$2 = BasicUIComponents.ResponsiveTabWrapper;
var Tab$3 = BasicUIComponents.Tab;
var AlignmentButton = styled__default(BasicUIComponents.Button.TextSecondary)(templateObject_1$r || (templateObject_1$r = index.__makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (props) { return props.theme.textInput.foreground; });
var Text = styled__default(index.Components.Input.NummericInput)(templateObject_2$9 || (templateObject_2$9 = index.__makeTemplateObject(["\n  max-width: 55px;\n  > div > input {\n    text-align: center;\n  }\n"], ["\n  max-width: 55px;\n  > div > input {\n    text-align: center;\n  }\n"])));
var Controls$6 = function (_a) {
    var textTool = _a.textTool;
    var textControlsLocale = textTool.locale.controls;
    var labelsColor = textTool.localeColor.colorPicker;
    var colorList = index.TextToolStore.defaultColors;
    var backgroundColorList = index.TextToolStore.defaultBackgroundColors;
    var alignmentList = ['left', 'center', 'right'];
    var AlignmentList = alignmentList.map(function (item) {
        var Icon = index.AlignIcons[item];
        return (React__default.createElement(AlignmentButton, { isDisabled: !textTool.isTextSelected, ariaLabel: "Align " + item, isActive: item === textTool.alignment, key: item, onClick: function () { return textTool.changeAlignment(item); } },
            React__default.createElement(Icon, null)));
    });
    var onRelease = function () {
        textTool.toolSnapshot();
    };
    var onChangeFontSize = function (value) {
        var fontSize = value ? parseFloat(value) : 0;
        textTool.setFontSize(Math.max(10, Math.min(690, fontSize)));
    };
    return (React__default.createElement(BasicUIComponents.ControlsbarContainer, { className: 'show' },
        React__default.createElement(BasicUIComponents.Button.OutlinedPrimary, { ariaLabel: textControlsLocale.buttonNew, onClick: textTool.add, icon: React__default.createElement(index.ToolControlBarIcons.addText, null) }, textControlsLocale.buttonNew),
        React__default.createElement(BasicUIComponents.Other.ControlsWrapper, null,
            React__default.createElement(index.Components.Spacer, null),
            React__default.createElement(Tabs$2, null,
                React__default.createElement(Tab$3, { label: textControlsLocale.tabFontSize },
                    React__default.createElement(Text, { value: textTool.fontSize.toFixed(0), onSubmit: onChangeFontSize, isDisabled: !textTool.isTextSelected })),
                React__default.createElement(Tab$3, { label: textControlsLocale.tabAlignment },
                    React__default.createElement(index.Components.Input.Selection, { isDisabled: !textTool.isTextSelected, showLabel: false, label: textControlsLocale.selectAlignment }, AlignmentList)),
                React__default.createElement(Tab$3, { label: textControlsLocale.tabColor },
                    React__default.createElement(index.Components.Spacer, null),
                    React__default.createElement(index.Components.Input.Selection, { isDisabled: !textTool.isTextSelected, showLabel: false, label: textControlsLocale.selectFontColor },
                        React__default.createElement(index.ColorList, { activeColor: textTool.activeTextColor, colors: colorList, labelsColor: labelsColor, colorPickerDirection: "top", isDisabled: !textTool.isTextSelected, onChange: textTool.changeColor, onAddSnapshot: textTool.colorSnapshot }))),
                React__default.createElement(Tab$3, { label: textControlsLocale.tabBgColor },
                    React__default.createElement(index.Components.Spacer, null),
                    React__default.createElement(index.Components.Input.Selection, { isDisabled: !textTool.isTextSelected, showLabel: false, label: textControlsLocale.selectBackgroundColor },
                        React__default.createElement(index.ColorList, { activeColor: textTool.activeBackgroundColor, colors: backgroundColorList, labelsColor: labelsColor, colorPickerDirection: "top", isDisabled: !textTool.isTextSelected, onChange: textTool.changeBackgroundColor, onAddSnapshot: textTool.backgroundColorSnapshot }))),
                React__default.createElement(Tab$3, { label: textControlsLocale.tabLineHeight },
                    React__default.createElement(BasicUIComponents.Slider, { isDisabled: !textTool.isTextSelected, showLabel: false, name: textControlsLocale.sliderLineSpacing, value: textTool.lineHeight, min: 0.5, max: 3, onChange: textTool.changeLineHeight, onMouseUp: onRelease, onTouchEnd: onRelease, snap: 1, divider: 1, decimal: 1 }))),
            React__default.createElement(BasicUIComponents.BarSeparator, null)),
        React__default.createElement(BasicUIComponents.Other.EmptyDiv, null)));
};
var TextControlsBar = index.inject('textTool')(index.observer(Controls$6));
var templateObject_1$r, templateObject_2$9;

var Controls$7 = function (_a) {
    var textDesignTool = _a.textDesignTool;
    var textControlsLocale = textDesignTool.locale.controls;
    var labelsColor = textDesignTool.localeColor.colorPicker;
    var colorList = index.TextDesignToolStore.colors;
    return (React__default.createElement(BasicUIComponents.ControlsbarContainer, { className: 'show' },
        React__default.createElement(BasicUIComponents.Button.OutlinedPrimary, { ariaLabel: textControlsLocale.buttonNew, onClick: textDesignTool.add, icon: React__default.createElement(index.ToolControlBarIcons.addText, null) }, textControlsLocale.buttonNew),
        React__default.createElement(BasicUIComponents.Other.ControlsWrapper, null,
            React__default.createElement(index.Components.Input.Selection, { isDisabled: !textDesignTool.isTextDesignSelected, label: textControlsLocale.selectColor },
                React__default.createElement(index.ColorList, { activeColor: textDesignTool.activeTextColor, colors: colorList, labelsColor: labelsColor, colorPickerDirection: "top", isDisabled: !textDesignTool.isTextDesignSelected, onChange: textDesignTool.changeColor, onAddSnapshot: textDesignTool.colorSnapshot }))),
        React__default.createElement(BasicUIComponents.Button.OutlinedSecondary, { ariaLabel: textControlsLocale.buttonShuffle, onClick: textDesignTool.changeSeed, icon: React__default.createElement(index.ToolControlBarIcons.shuffle, null) }, textControlsLocale.buttonShuffle),
        React__default.createElement(BasicUIComponents.BarSeparator, null)));
};
var TextDesignControlsBar = index.inject('textDesignTool')(index.observer(Controls$7));

var Tabs$3 = BasicUIComponents.TabWrapper;
var Tab$4 = BasicUIComponents.Tab;
var Controls$8 = function (_a) {
    var frameTool = _a.frameTool;
    var frameControlLocale = frameTool.locale.controls;
    var labelsColor = frameTool.localeColor.colorPicker;
    var tintable = frameTool.tintable;
    var colorList = index.FrameToolStore.colors;
    var onRelease = function (description) {
        frameTool.toolSnapshot(description);
    };
    return (React__default.createElement(BasicUIComponents.ControlsbarContainer, { className: frameTool.isOptionSelected ? 'show' : '' },
        React__default.createElement(BasicUIComponents.Button.OutlinedSecondary, { ariaLabel: frameControlLocale.buttonReset, onClick: frameTool.reset, icon: React__default.createElement(index.ToolControlBarIcons.reset, null) }, frameControlLocale.buttonReset),
        React__default.createElement(BasicUIComponents.Other.ControlsWrapper, null,
            React__default.createElement(index.Components.Spacer, null),
            React__default.createElement(Tabs$3, null,
                React__default.createElement(Tab$4, { label: frameControlLocale.tabOpacity },
                    React__default.createElement(BasicUIComponents.Slider, { "aria-hidden": !frameTool.isOptionSelected, showLabel: false, style: { width: '280px' }, name: frameControlLocale.sliderOpacity, value: frameTool.opacity, min: 0, max: 1, onChange: frameTool.changeOpacity, onMouseUp: function () {
                            onRelease(frameControlLocale.sliderOpacity);
                        }, onTouchEnd: function () {
                            onRelease(frameControlLocale.sliderOpacity);
                        } })),
                React__default.createElement(Tab$4, { label: frameControlLocale.tabSize },
                    React__default.createElement(BasicUIComponents.Slider, { "aria-hidden": !frameTool.isOptionSelected, showLabel: false, style: { width: '280px' }, name: frameControlLocale.sliderSize, value: frameTool.size, min: frameTool.minSize, max: frameTool.maxSize, divider: 1, onChange: frameTool.changeWidth, onMouseUp: function () {
                            onRelease(frameControlLocale.sliderSize);
                        }, onTouchEnd: function () {
                            onRelease(frameControlLocale.sliderSize);
                        } })),
                tintable && React__default.createElement(Tab$4, { label: frameControlLocale.tabColor },
                    React__default.createElement(index.Components.Spacer, { count: 1 }),
                    React__default.createElement(index.Components.Input.Selection, { label: frameControlLocale.selectColor, showLabel: false },
                        React__default.createElement(index.ColorList, { activeColor: frameTool.activeColor, colors: colorList, labelsColor: labelsColor, colorPickerDirection: "top", onChange: frameTool.changeColor, onAddSnapshot: frameTool.colorSnapshot }))) || null),
            React__default.createElement(BasicUIComponents.BarSeparator, null)),
        React__default.createElement(BasicUIComponents.Other.EmptyDiv, null)));
};
var FrameControlsBar = index.inject('frameTool', 'canvas')(index.observer(Controls$8));

var Tabs$4 = BasicUIComponents.TabWrapper;
var Tab$5 = BasicUIComponents.Tab;
var Controls$9 = function (_a) {
    var brushTool = _a.brushTool;
    var brushControlLocale = brushTool.locale.controls;
    var labelsColor = brushTool.localeColor.colorPicker;
    var colorList = index.BrushToolStore.colors;
    return (React__default.createElement(BasicUIComponents.ControlsbarContainer, { style: { justifyContent: 'center' }, className: "show" },
        React__default.createElement(BasicUIComponents.Button.OutlinedSecondary, { ariaLabel: brushControlLocale.buttonReset, onClick: brushTool.reset, icon: React__default.createElement(index.ToolControlBarIcons.reset, null), isDisabled: !brushTool.isDirty }, brushControlLocale.buttonReset),
        React__default.createElement(BasicUIComponents.Other.ControlsWrapper, null,
            React__default.createElement(index.Components.Input.Form, null,
                React__default.createElement(Tabs$4, null,
                    React__default.createElement(Tab$5, { label: brushControlLocale.tabColor },
                        React__default.createElement(index.Components.Spacer, { count: 1 }),
                        React__default.createElement(index.Components.Input.Selection, { showLabel: false, label: brushControlLocale.selectColor },
                            React__default.createElement(index.ColorList, { activeColor: brushTool.activeColor, colors: colorList, labelsColor: labelsColor, colorPickerDirection: "top", onChange: brushTool.changeColor }))),
                    React__default.createElement(Tab$5, { label: brushControlLocale.tabSize },
                        React__default.createElement(BasicUIComponents.Slider, { style: { width: '280px' }, showLabel: false, name: brushControlLocale.sliderSize, value: brushTool.size, min: 1, max: 100, divider: 1, onChange: brushTool.changeSize })),
                    React__default.createElement(Tab$5, { label: brushControlLocale.tabHardness },
                        React__default.createElement(BasicUIComponents.Slider, { style: { width: '280px' }, showLabel: false, name: brushControlLocale.sliderHardness, value: brushTool.hardness, min: 0, max: 1, onChange: brushTool.changeHardness })))))));
};
var BrushControlsBar = index.inject('brushTool')(index.observer(Controls$9));

var Tabs$5 = BasicUIComponents.ResponsiveTabWrapper;
var Tab$6 = BasicUIComponents.Tab;
var Controls$a = function (_a) {
    var transformTool = _a.transformTool;
    var controlLabels = transformTool.locale.controls;
    var forceDimensions = transformTool.forceDimensions;
    return (React__default.createElement(BasicUIComponents.ControlsbarContainer, { className: 'show' },
        React__default.createElement(BasicUIComponents.Button.OutlinedSecondary, { ariaLabel: transformTool.locale.controls.buttonReset, onClick: transformTool.reset, icon: React__default.createElement(index.ToolControlBarIcons.reset, null) }, transformTool.locale.controls.buttonReset),
        React__default.createElement(BasicUIComponents.Other.ControlsWrapper, null,
            React__default.createElement(index.Components.Spacer, null),
            React__default.createElement(Tabs$5, null,
                React__default.createElement(Tab$6, { label: controlLabels.tabCropSize },
                    React__default.createElement(index.TransformScaleInput, { isDisabled: forceDimensions, showLabel: false, valueHeight: transformTool.localOutputHeight, valueWidth: transformTool.localOutputWidth, onBlurWidth: transformTool.onBlurWidth, onBlurHeight: transformTool.onBlurHeight, onChangeHeight: transformTool.changeLocalOutputHeight, onChangeWidth: transformTool.changeLocalOutputWidth, label: controlLabels.inputCropSize, labelHeight: controlLabels.inputHeight, labelWidth: controlLabels.inputWidth })),
                React__default.createElement(Tab$6, { label: controlLabels.tabFlipAndRotate },
                    React__default.createElement(index.FlipRotateControls, null)),
                React__default.createElement(Tab$6, { label: controlLabels.tabResolution },
                    React__default.createElement(index.Components.Input.Checkbox, { isDisabled: forceDimensions, style: { left: '70px' }, value: transformTool.lockResolution, label: controlLabels.checkboxKeepResolution, onChange: transformTool.changeLockResolution }))),
            React__default.createElement(BasicUIComponents.BarSeparator, null)),
        React__default.createElement(BasicUIComponents.Other.EmptyDiv, null)));
};
var TransformControlsBar = index.inject('transformTool')(index.observer(Controls$a));

var ToolControlsBarComponent = /** @class */ (function (_super) {
    index.__extends(ToolControlsBarComponent, _super);
    function ToolControlsBarComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToolControlsBarComponent.prototype.render = function () {
        var activeTool = this.props.active.tool;
        return (React__default.createElement(BasicUIComponents.Controlsbar, { show: !!activeTool },
            React__default.createElement(index.Components.Switch.Index, { type: activeTool },
                React__default.createElement(index.Components.Switch.Case, { value: index.Tool.FILTER },
                    React__default.createElement(FilterControlsBar, null)),
                React__default.createElement(index.Components.Switch.Case, { value: index.Tool.FOCUS },
                    React__default.createElement(FocusControlsBar, null)),
                React__default.createElement(index.Components.Switch.Case, { value: index.Tool.ADJUSTMENT },
                    React__default.createElement(AdjustControlsBar, null)),
                React__default.createElement(index.Components.Switch.Case, { value: index.Tool.OVERLAY },
                    React__default.createElement(OverlayControlsBar, null)),
                React__default.createElement(index.Components.Switch.Case, { value: index.Tool.STICKER },
                    React__default.createElement(StickerControlsBar, null)),
                React__default.createElement(index.Components.Switch.Case, { value: index.Tool.TEXT },
                    React__default.createElement(TextControlsBar, null)),
                React__default.createElement(index.Components.Switch.Case, { value: index.Tool.TEXT_DESIGN },
                    React__default.createElement(TextDesignControlsBar, null)),
                React__default.createElement(index.Components.Switch.Case, { value: index.Tool.LIBRARY },
                    React__default.createElement(LibraryControlsBar, null)),
                React__default.createElement(index.Components.Switch.Case, { value: index.Tool.FRAME },
                    React__default.createElement(FrameControlsBar, null)),
                React__default.createElement(index.Components.Switch.Case, { value: index.Tool.BRUSH },
                    React__default.createElement(BrushControlsBar, null)),
                React__default.createElement(index.Components.Switch.Case, { value: index.Tool.TRANSFORM },
                    React__default.createElement(TransformControlsBar, null)))));
    };
    ToolControlsBarComponent = index.__decorate([
        index.inject('active', 'config'),
        index.observer
    ], ToolControlsBarComponent);
    return ToolControlsBarComponent;
}(React__default.Component));

var Disable = styled__default.div(templateObject_1$s || (templateObject_1$s = index.__makeTemplateObject(["\n  position: absolute;\n  width: 100%;\n  height: ", "px;\n  bottom: 0;\n  left: 0;\n  background: ", ";\n  z-index: ", ";\n"], ["\n  position: absolute;\n  width: 100%;\n  height: ", "px;\n  bottom: 0;\n  left: 0;\n  background: ", ";\n  z-index: ", ";\n"])), function (props) { return props.theme.measurements.basicToolControlBar.maxHeight; }, function (props) { return props.theme.webcam.backdrop; }, function (props) { return props.theme.measurements.zIndex.disable; });
var Basic = function (_a) {
    var active = _a.active;
    return (React__default.createElement(index.Components.Container, null,
        active.isWebcam ? React__default.createElement(Disable, null) : null,
        React__default.createElement(index.Modal, null),
        React__default.createElement(index.CanvasArea, null,
            React__default.createElement(index.CanvasBar, null),
            React__default.createElement(index.CanvasContainer, null),
            React__default.createElement(ToolControlsBarComponent, null),
            React__default.createElement(ToolItemsBarComponent, null),
            React__default.createElement(Toolbar$1, null))));
};
var Layout = index.inject('active')(index.observer(Basic));
var templateObject_1$s;

var BasicUI = /** @class */ (function (_super) {
    index.__extends(BasicUI, _super);
    function BasicUI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BasicUI.prototype.componentDidMount = function () {
        this.editor = this.props.editor;
        this.storeProps = this.props.storeProps;
        var factory = new index.CustomComponentsFactory(this.editor.configStore.config.custom.components, {
            loader: index.Components.Loader,
        });
        var custom = {
            getLoader: factory.getLoader,
            getButton: factory.getButton,
        };
        this.storeProps.custom = custom;
        this.forceUpdate();
    };
    BasicUI.prototype.render = function () {
        return this.storeProps ? (React__default.createElement(index.Provider, index.__assign({}, this.storeProps),
            React__default.createElement(styled.ThemeProvider, { theme: index.__assign({}, this.editor.configStore.theme, { measurements: this.editor.configStore.measurements }) },
                React__default.createElement(Layout, null)))) : null;
    };
    return BasicUI;
}(React__default.Component));

exports.deepmergeAll = index.deepmergeAll;
exports.defaultConfig = index.defaultConfig;
exports.BasicUI = BasicUI;
