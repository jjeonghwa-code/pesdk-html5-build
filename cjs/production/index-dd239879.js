"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var t=require("./index-491a9a11.js"),n=e(require("react")),r=e(require("react-dom"));require("./engine.production.min.js");var o=require("styled-components"),a=e(o);function i(e,t){(function(e){return"string"==typeof e&&e.includes(".")&&1===parseFloat(e)})(e)&&(e="100%");var n=function(e){return"string"==typeof e&&e.includes("%")}(e);return e=360===t?e:Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:e=360===t?(e<0?e%t+t:e%t)/parseFloat(String(t)):e%t/parseFloat(String(t))}function s(e){return e=parseFloat(e),(Number.isNaN(e)||e<0||e>1)&&(e=1),e}function c(e){return e<=1?100*Number(e)+"%":e}function l(e){return 1===e.length?"0"+e:String(e)}function h(e,t,n){e=i(e,255),t=i(t,255),n=i(n,255);var r=Math.max(e,t,n),o=Math.min(e,t,n),a=0,s=0,c=(r+o)/2;if(r===o)s=0,a=0;else{var l=r-o;switch(s=c>.5?l/(2-r-o):l/(r+o),r){case e:a=(t-n)/l+(t<n?6:0);break;case t:a=(n-e)/l+2;break;case n:a=(e-t)/l+4}a/=6}return{h:a,s:s,l:c}}function u(e,t,n){e=i(e,255),t=i(t,255),n=i(n,255);var r=Math.max(e,t,n),o=Math.min(e,t,n),a=0,s=r,c=r-o,l=0===r?0:c/r;if(r===o)a=0;else{switch(r){case e:a=(t-n)/c+(t<n?6:0);break;case t:a=(n-e)/c+2;break;case n:a=(e-t)/c+4}a/=6}return{h:a,s:l,v:s}}function f(e,t,n,r){var o=[l(Math.round(e).toString(16)),l(Math.round(t).toString(16)),l(Math.round(n).toString(16))];return r&&o[0].charAt(0)===o[0].charAt(1)&&o[1].charAt(0)===o[1].charAt(1)&&o[2].charAt(0)===o[2].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function d(e){return parseInt(e,16)}function p(e){return d(e)/255}var g={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},m="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",b="[\\s|\\(]+("+m+")[,|\\s]+("+m+")[,|\\s]+("+m+")\\s*\\)?",x="[\\s|\\(]+("+m+")[,|\\s]+("+m+")[,|\\s]+("+m+")[,|\\s]+("+m+")\\s*\\)?",v={CSS_UNIT:new RegExp(m),rgb:new RegExp("rgb"+b),rgba:new RegExp("rgba"+x),hsl:new RegExp("hsl"+b),hsla:new RegExp("hsla"+x),hsv:new RegExp("hsv"+b),hsva:new RegExp("hsva"+x),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function k(e){return Boolean(v.CSS_UNIT.exec(String(e)))}function y(e){var t,n,r,o={r:0,g:0,b:0},a=1,l=null,h=null,u=null,f=!1,m=!1;return"string"==typeof e&&(e=function(e){if(0===(e=e.trim().toLowerCase()).length)return!1;var t=!1;if(g[e])e=g[e],t=!0;else if("transparent"===e)return{r:0,g:0,b:0,a:0,format:"name"};var n=v.rgb.exec(e);return n?{r:n[1],g:n[2],b:n[3]}:(n=v.rgba.exec(e))?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=v.hsl.exec(e))?{h:n[1],s:n[2],l:n[3]}:(n=v.hsla.exec(e))?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=v.hsv.exec(e))?{h:n[1],s:n[2],v:n[3]}:(n=v.hsva.exec(e))?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=v.hex8.exec(e))?{r:d(n[1]),g:d(n[2]),b:d(n[3]),a:p(n[4]),format:t?"name":"hex8"}:(n=v.hex6.exec(e))?{r:d(n[1]),g:d(n[2]),b:d(n[3]),format:t?"name":"hex"}:(n=v.hex4.exec(e))?{r:d(n[1]+n[1]),g:d(n[2]+n[2]),b:d(n[3]+n[3]),a:p(n[4]+n[4]),format:t?"name":"hex8"}:!!(n=v.hex3.exec(e))&&{r:d(n[1]+n[1]),g:d(n[2]+n[2]),b:d(n[3]+n[3]),format:t?"name":"hex"}}(e)),"object"==typeof e&&(k(e.r)&&k(e.g)&&k(e.b)?(t=e.r,n=e.g,r=e.b,o={r:255*i(t,255),g:255*i(n,255),b:255*i(r,255)},f=!0,m="%"===String(e.r).substr(-1)?"prgb":"rgb"):k(e.h)&&k(e.s)&&k(e.v)?(l=c(e.s),h=c(e.v),o=function(e,t,n){e=6*i(e,360),t=i(t,100),n=i(n,100);var r=Math.floor(e),o=e-r,a=n*(1-t),s=n*(1-o*t),c=n*(1-(1-o)*t),l=r%6;return{r:255*[n,s,a,a,c,n][l],g:255*[c,n,n,s,a,a][l],b:255*[a,a,c,n,n,s][l]}}(e.h,l,h),f=!0,m="hsv"):k(e.h)&&k(e.s)&&k(e.l)&&(l=c(e.s),u=c(e.l),o=function(e,t,n){var r,o,a;function s(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*n*(t-e):n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}if(e=i(e,360),t=i(t,100),n=i(n,100),0===t)o=n,a=n,r=n;else{var c=n<.5?n*(1+t):n+t-n*t,l=2*n-c;r=s(l,c,e+1/3),o=s(l,c,e),a=s(l,c,e-1/3)}return{r:255*r,g:255*o,b:255*a}}(e.h,l,u),f=!0,m="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(a=e.a)),a=s(a),{ok:f,format:e.format||m,r:Math.min(255,Math.max(o.r,0)),g:Math.min(255,Math.max(o.g,0)),b:Math.min(255,Math.max(o.b,0)),a:a}}var w,C=function(){function e(t,n){if(void 0===t&&(t=""),void 0===n&&(n={}),t instanceof e)return t;this.originalInput=t;var r=y(t);this.originalInput=t,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=n.format||r.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}return e.prototype.getAlpha=function(){return this.a},e.prototype.setAlpha=function(e){return this.a=s(e),this.roundA=Math.round(100*this.a)/100,this},e.prototype.toHsv=function(){var e=u(this.r,this.g,this.b);return{h:360*e.h,s:e.s,v:e.v,a:this.a}},e.prototype.toHsvString=function(){var e=u(this.r,this.g,this.b),t=Math.round(360*e.h),n=Math.round(100*e.s),r=Math.round(100*e.v);return 1===this.a?"hsv("+t+", "+n+"%, "+r+"%)":"hsva("+t+", "+n+"%, "+r+"%, "+this.roundA+")"},e.prototype.toHsl=function(){var e=h(this.r,this.g,this.b);return{h:360*e.h,s:e.s,l:e.l,a:this.a}},e.prototype.toHslString=function(){var e=h(this.r,this.g,this.b),t=Math.round(360*e.h),n=Math.round(100*e.s),r=Math.round(100*e.l);return 1===this.a?"hsl("+t+", "+n+"%, "+r+"%)":"hsla("+t+", "+n+"%, "+r+"%, "+this.roundA+")"},e.prototype.toHex=function(e){return void 0===e&&(e=!1),f(this.r,this.g,this.b,e)},e.prototype.toHexString=function(e){return void 0===e&&(e=!1),"#"+this.toHex(e)},e.prototype.toHex8=function(e){return void 0===e&&(e=!1),function(e,t,n,r,o){var a,i=[l(Math.round(e).toString(16)),l(Math.round(t).toString(16)),l(Math.round(n).toString(16)),l((a=r,Math.round(255*parseFloat(a)).toString(16)))];return o&&i[0].charAt(0)===i[0].charAt(1)&&i[1].charAt(0)===i[1].charAt(1)&&i[2].charAt(0)===i[2].charAt(1)&&i[3].charAt(0)===i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}(this.r,this.g,this.b,this.a,e)},e.prototype.toHex8String=function(e){return void 0===e&&(e=!1),"#"+this.toHex8(e)},e.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},e.prototype.toRgbArray=function(){return[Math.round(this.r),Math.round(this.g),Math.round(this.b),this.a]},e.prototype.toRgbString=function(){var e=Math.round(this.r),t=Math.round(this.g),n=Math.round(this.b);return 1===this.a?"rgb("+e+", "+t+", "+n+")":"rgba("+e+", "+t+", "+n+", "+this.roundA+")"},e.prototype.toPercentageRgb=function(){var e=function(e){return Math.round(100*i(e,255))+"%"};return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}},e.prototype.toPercentageRgbString=function(){var e=function(e){return Math.round(100*i(e,255))};return 1===this.a?"rgb("+e(this.r)+"%, "+e(this.g)+"%, "+e(this.b)+"%)":"rgba("+e(this.r)+"%, "+e(this.g)+"%, "+e(this.b)+"%, "+this.roundA+")"},e.prototype.toName=function(){var e,n;if(0===this.a)return"transparent";if(this.a<1)return!1;var r="#"+f(this.r,this.g,this.b,!1);try{for(var o=t.__values(Object.keys(g)),a=o.next();!a.done;a=o.next()){var i=a.value;if(g[i]===r)return i}}catch(t){e={error:t}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}return!1},e.prototype.toString=function(e){var t=Boolean(e);e=e||this.format;var n=this.a<1&&this.a>=0;if(!t&&n&&e&&(e.startsWith("hex")||"name"===e))return"name"===e&&0===this.a?this.toName():this.toRgbString();switch(e){case"rgb":return this.toRgbString();case"prgb":return this.toPercentageRgbString();case"hex":case"hex6":return this.toHexString();case"hex3":return this.toHexString(!0);case"hex4":return this.toHex8String(!0);case"hex8":return this.toHex8String();case"hsl":return this.toHslString();case"hsv":return this.toHsvString();case"name":return this.toName();default:return this.toHexString()}},e.prototype.clone=function(){return new e(this.toString())},e}(),S=a.div.attrs((function(e){return{style:{left:e.position.x||"0px",top:e.position.y||"0px"}}}))(w||(w=t.__makeTemplateObject(["\n  position: absolute;\n  height: ","px;\n  width: ","px;\n  border-radius: 50%;\n  border: 2px solid ",";\n  box-sizing: border-box;\n  cursor: pointer;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.11), 0 1px 3px 0 rgba(0, 0, 0, 0.46);\n  z-index: 2;\n  pointer-events: none;\n"],["\n  position: absolute;\n  height: ","px;\n  width: ","px;\n  border-radius: 50%;\n  border: 2px solid ",";\n  box-sizing: border-box;\n  cursor: pointer;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.11), 0 1px 3px 0 rgba(0, 0, 0, 0.46);\n  z-index: 2;\n  pointer-events: none;\n"])),(function(e){return e.theme.measurements.color.colorPicker.thumb.size}),(function(e){return e.theme.measurements.color.colorPicker.thumb.size}),(function(e){return e.theme.colorPicker.controlsColor}));S.defaultProps={theme:t.defaultStyledTheme};var _,M,R,P,F,A,E,O,H,I,j,T,z,q,N,D,L,V,B,W,U,$,K,G,X,Y,J=a.div(_||(_=t.__makeTemplateObject(["\n  position: relative;\n  height: 14px;\n  width: 100%;\n"],["\n  position: relative;\n  height: 14px;\n  width: 100%;\n"]))),Q=function(e){function o(n){var o=e.call(this,n)||this;return o.onDragStart=function(e){o.setState({dragging:!0}),o.onPositionChange(e)},o.onPositionChange=function(e){var t,n,a=o.props,i=a.onChange,s=a.config,c=s.measurements.color.colorPicker.thumb.size/2,l=s.measurements.color.colorPicker.thumb.size;t=e.clientX,n=e.clientY;var h=r.findDOMNode(o);if(h&&h instanceof HTMLElement){var u=h.getBoundingClientRect(),f=u.top,d=u.left,p=u.width,g=u.height,m=t-d-c,b=n-f-c;m=Math.max(0,Math.min(p-l,m)),b=Math.max(0,Math.min(g-l,b)),i&&i({x:m,y:b}),o.setState({x:m,y:b})}},o.onDrag=function(e){o.state.dragging&&o.onPositionChange(e)},o.onDragStop=function(){o.state.dragging&&o.setState({dragging:!1})},o.state={dragging:!1,x:n.defaultPosition.x,y:n.defaultPosition.y},o.debouncedOnDrag=t.debounce(o.onDrag,10),o}return t.__extends(o,e),o.prototype.componentWillUnmount=function(){this.setState({dragging:!1})},o.prototype.render=function(){var e=this.props,r=e.surface,o=e.setInnerRef,a=e.className,i=e.children;return n.createElement(J,{ref:o,className:a},n.createElement(t.Components.DraggableCore,{onStart:this.onDragStart,onDrag:this.debouncedOnDrag,onStop:this.onDragStop},r),i)},o.defaultProps={defaultPosition:{x:0,y:0}},o}(n.Component),Z=t.inject("config","active")(t.observer(Q)),ee=o.css(M||(M=t.__makeTemplateObject(["\n  position: absolute;\n  top: 3px;\n  left: 0;\n  width: 100%;\n  height: 8px;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n"],["\n  position: absolute;\n  top: 3px;\n  left: 0;\n  width: 100%;\n  height: 8px;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n"]))),te=a.div(R||(R=t.__makeTemplateObject(["\n  ","\n  background: linear-gradient(90deg, #F00 0%, #FF0 16.66%, #0F0 33.33%, #0FF 50%, #00F 66.66%, #F0F 83.33%, #F00 100%);\n  height: 8px;\n"],["\n  ","\n  background: linear-gradient(90deg, #F00 0%, #FF0 16.66%, #0F0 33.33%, #0FF 50%, #00F 66.66%, #F0F 83.33%, #F00 100%);\n  height: 8px;\n"])),ee),ne=function(e){function r(t){var n=e.call(this,t)||this;return n.onKnob=function(e){var t=e.x,r=n.props,o=r.onChange,a=r.config,i=n.node.offsetWidth,s=t*i/(i-a.measurements.color.colorPicker.thumb.size);o(Math.max(0,Math.min(360,s/i*360))),n.setState({x:t})},n.setPositionFromColor=function(e){var t=n.props.config,r=n.node.offsetWidth,o=0,a=r-t.measurements.color.colorPicker.thumb.size;n.node&&(o=e.toHsv().h*r/360),n.setState({x:o*a/r})},n.nodeRef=function(e){n.node=e},n.state={x:0},n}return t.__extends(r,e),r.prototype.render=function(){var e=this.state.x;return n.createElement(Z,{surface:n.createElement(te,null),setInnerRef:this.nodeRef,onChange:this.onKnob},n.createElement(S,{position:{x:e,y:0}}))},r}(n.Component),re=t.inject("config")(t.observer(ne)),oe=a.div.attrs((function(e){return{style:{background:"linear-gradient(to left, "+e.transparentColor+" 0%, "+e.opaqueColor+" 100%)"}}}))(P||(P=t.__makeTemplateObject(["\n  ","\n  z-index: 1;\n"],["\n  ","\n  z-index: 1;\n"])),ee),ae=a.div(F||(F=t.__makeTemplateObject(["\n  ","\n  z-index: 0;\n  background-repeat: repeat-x;\n  background-size: contain;\n  background-position: left;\n  background-image: url(assets/colorpicker/controls/tiled-background.png);\n"],["\n  ","\n  z-index: 0;\n  background-repeat: repeat-x;\n  background-size: contain;\n  background-position: left;\n  background-image: url(assets/colorpicker/controls/tiled-background.png);\n"])),ee),ie=function(e){function r(t){var n=e.call(this,t)||this;return n.onKnob=function(e){var t=e.x,r=n.props,o=r.onChange,a=r.config,i=n.node.offsetWidth,s=t*i/(i-a.measurements.color.colorPicker.thumb.size);o(Math.min(1,Math.max(0,(i-s)/i))),n.setState({x:t})},n.setPositionFromColor=function(e){var t=n.props.config,r=n.node.offsetWidth,o=0,a=r-t.measurements.color.colorPicker.thumb.size;n.node&&(o=(1-e.toHsv().a)*r),n.setState({x:o*a/r})},n.nodeRef=function(e){n.node=e},n.state={x:0},n}return t.__extends(r,e),r.prototype.render=function(){var e=this.props,t=e.opaqueColor,r=e.transparentColor,o=this.state.x;return n.createElement(Z,{surface:n.createElement(oe,{opaqueColor:t,transparentColor:r}),setInnerRef:this.nodeRef,onChange:this.onKnob},n.createElement(ae,null),n.createElement(S,{position:{x:o,y:0}}))},r}(n.Component),se=t.inject("config")(t.observer(ie)),ce=a.div.attrs((function(e){return{style:{backgroundColor:"hsl("+e.hue+", 100%, 50%)"}}}))(A||(A=t.__makeTemplateObject(["\n  ","\n  background: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0)),\n   linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0));\n  height: ","px;\n  top: 0px;\n"],["\n  ","\n  background: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0)),\n   linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0));\n  height: ","px;\n  top: 0px;\n"])),ee,(function(e){return e.theme.measurements.color.colorPicker.saturationSlider.height})),le=a(Z)(E||(E=t.__makeTemplateObject(["\n  height: ","px;\n  margin-top: 0px;\n"],["\n  height: ","px;\n  margin-top: 0px;\n"])),(function(e){return e.theme.measurements.color.colorPicker.saturationSlider.height})),he=function(e){function r(t){var n=e.call(this,t)||this;return n.setPositionFromColor=function(e){var t=n.props.config,r={x:0,y:0};if(n.node){var o=e.toHsv(),a=o.s,i=o.v,s=n.node,c=s.offsetWidth,l=s.offsetHeight,h=c-t.measurements.color.colorPicker.thumb.size,u=l-t.measurements.color.colorPicker.thumb.size,f=a*c,d=(1-i)*l;r.x=f*h/c,r.y=d*u/l}n.setState({position:r})},n.onChange=function(e){var t=e.x,r=e.y,o=n.props,a=o.onChange,i=o.config,s=n.node,c=s.offsetHeight,l=s.offsetWidth,h=t*l/(l-i.measurements.color.colorPicker.thumb.size),u=r*c/(c-i.measurements.color.colorPicker.thumb.size);a(Math.min(1,Math.max(0,h/l)),Math.min(1,Math.max(0,(c-u)/c))),n.setState({position:{x:t,y:r}})},n.nodeRef=function(e){n.node=e},n.state={position:{x:0,y:0}},n}return t.__extends(r,e),r.prototype.render=function(){var e=this.props.hue,t=this.state.position;return n.createElement(le,{surface:n.createElement(ce,{hue:e}),setInnerRef:this.nodeRef,onChange:this.onChange},n.createElement(S,{position:t}))},r}(n.Component),ue=t.inject("config")(t.observer(he)),fe=a.div(O||(O=t.__makeTemplateObject(["\n  text-align: center;\n  width: 28px;\n  padding-left: 4px;\n"],["\n  text-align: center;\n  width: 28px;\n  padding-left: 4px;\n"]))),de=a(t.Components.Input.Text)(H||(H=t.__makeTemplateObject(["\n  input {\n    text-align: center;\n    border-bottom: 1px solid ",";\n  }\n"],["\n  input {\n    text-align: center;\n    border-bottom: 1px solid ",";\n  }\n"])),(function(e){return e.theme.colorPicker.inputBorderColor})),pe=function(e){var r=e.value,o=e.label,a=e.onChange;return n.createElement(fe,null,n.createElement(t.Components.Input.Label,{name:o}),n.createElement(de,{min:0,max:255,value:r,onChange:a}))},ge=a.div(I||(I=t.__makeTemplateObject(["\n  text-align: left;\n  width: 62px;\n"],["\n  text-align: left;\n  width: 62px;\n"]))),me=a(t.Components.Input.Text)(j||(j=t.__makeTemplateObject(["\n  input {\n    text-align: left;\n    border-bottom: 1px solid ",";\n  }\n"],["\n  input {\n    text-align: left;\n    border-bottom: 1px solid ",";\n  }\n"])),(function(e){return e.theme.colorPicker.inputBorderColor})),be=function(e){var r=e.value,o=e.label,a=e.onChange;return n.createElement(ge,null,n.createElement(t.Components.Input.Label,{name:o}),n.createElement(me,{value:r.toUpperCase(),onChange:a}))},xe=a.div(N||(N=t.__makeTemplateObject(["\n  position: absolute;\n  left: -24px;\n  ","\n  z-index: ",";\n  display: none;\n  opacity: 0;\n  transition: opacity 0.3s ease-out;\n  ","\n"],["\n  position: absolute;\n  left: -24px;\n  ","\n  z-index: ",";\n  display: none;\n  opacity: 0;\n  transition: opacity 0.3s ease-out;\n  ","\n"])),(function(e){return"bottom"===e.direction?o.css(T||(T=t.__makeTemplateObject(["\n          bottom: -","px;\n        "],["\n          bottom: -","px;\n        "])),e.theme.measurements.color.colorPicker.arrow.width/4):o.css(z||(z=t.__makeTemplateObject(["\n          top: -","px;\n        "],["\n          top: -","px;\n        "])),e.theme.measurements.color.colorPicker.arrow.width/4)}),(function(e){return e.theme.measurements.zIndex.input.list}),(function(e){return e.show&&o.css(q||(q=t.__makeTemplateObject(["\n      display: block;\n      opacity: 1;\n      transition: opacity 0.3s ease-out;\n    "],["\n      display: block;\n      opacity: 1;\n      transition: opacity 0.3s ease-out;\n    "])))})),ve=a.div(W||(W=t.__makeTemplateObject(["\n  position: absolute;\n  width: ","px;\n  height: ","px;\n  overflow: hidden;\n  ","\n  left: ","px;\n  :after {\n    content: '';\n    position: absolute;\n    width: ","px;\n    height: ","px;\n    left: 50%;\n    ","\n    background-color: ",";\n    pointer-events: none;\n  }\n"],["\n  position: absolute;\n  width: ","px;\n  height: ","px;\n  overflow: hidden;\n  ","\n  left: ","px;\n  :after {\n    content: '';\n    position: absolute;\n    width: ","px;\n    height: ","px;\n    left: 50%;\n    ","\n    background-color: ",";\n    pointer-events: none;\n  }\n"])),(function(e){return e.theme.measurements.color.colorPicker.arrow.width}),(function(e){return e.theme.measurements.color.colorPicker.arrow.width/2}),(function(e){return"bottom"===e.direction?o.css(D||(D=t.__makeTemplateObject(["\n          bottom: 100%;\n        "],["\n          bottom: 100%;\n        "]))):o.css(L||(L=t.__makeTemplateObject(["\n          top: 100%;\n        "],["\n          top: 100%;\n        "])))}),(function(e){return e.arrowOffset||e.theme.measurements.color.colorPicker.arrow.width}),(function(e){return e.theme.measurements.color.colorPicker.arrow.width/2}),(function(e){return e.theme.measurements.color.colorPicker.arrow.width/2}),(function(e){return"bottom"===e.direction?o.css(V||(V=t.__makeTemplateObject(["\n            transform: translate(-50%, 50%) rotate(45deg);\n          "],["\n            transform: translate(-50%, 50%) rotate(45deg);\n          "]))):o.css(B||(B=t.__makeTemplateObject(["\n            transform: translate(-50%, -50%) rotate(45deg);\n          "],["\n            transform: translate(-50%, -50%) rotate(45deg);\n          "])))}),(function(e){return e.theme.colorPicker.listBackground})),ke=a.div($||($=t.__makeTemplateObject(["\n  position: absolute;\n  ","\n  padding: 16px;\n  box-sizing: border-box;\n  box-shadow: ",";\n  background: ",";\n  border-radius: ","px;\n  width: ","px;\n  left: 8px;\n  z-index: 1;\n  label.left {\n    text-align: left;\n  }\n"],["\n  position: absolute;\n  ","\n  padding: 16px;\n  box-sizing: border-box;\n  box-shadow: ",";\n  background: ",";\n  border-radius: ","px;\n  width: ","px;\n  left: 8px;\n  z-index: 1;\n  label.left {\n    text-align: left;\n  }\n"])),(function(e){return"top"===e.direction&&o.css(U||(U=t.__makeTemplateObject(["\n      transform: translate(0, -100%);\n    "],["\n      transform: translate(0, -100%);\n    "])))}),(function(e){return e.theme.colorPicker.listShadow}),(function(e){return e.theme.colorPicker.listBackground}),(function(e){return e.theme.shape.radiusMedium}),(function(e){return e.theme.measurements.color.colorPicker.width})),ye=a(re)(K||(K=t.__makeTemplateObject(["\n  margin-top: 8px;\n"],["\n  margin-top: 8px;\n"]))),we=a(se)(G||(G=t.__makeTemplateObject(["\n  margin-top: 8px;\n"],["\n  margin-top: 8px;\n"]))),Ce=a.div(X||(X=t.__makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 30px;\n"],["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 30px;\n"]))),Se=a.div(Y||(Y=t.__makeTemplateObject(["\n  display: flex;\n"],["\n  display: flex;\n"]))),_e=function(e){function r(t){var r=e.call(this,t)||this;r.saturationRef=null,r.hueRef=null,r.opacityRef=null,r.handleOutsideClick=function(e){var t=r.props,n=t.onRequestClose,o=t.onAddSnapshot,a=r.state.color;r.node&&r.node.contains(e.target)||e.target.classList.contains("colorItemActive")||(r.setState({hexInputValue:a.toHexString()}),n&&n(),o&&o())},r.onChange=function(e){(0,r.props.onChange)({color:e.toRgbArray(),colorString:e.toRgbString()})},r.onHexValueChange=function(e){if(e.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i)){var t=new C(e);r.onChange(t),r.setState({color:t,hue:t.toHsl().h}),r.saturationRef.current.wrappedInstance.setPositionFromColor(t),r.hueRef.current.wrappedInstance.setPositionFromColor(t)}r.setState({hexInputValue:e})},r.onAlphaChange=function(e){var t=r.state.color.setAlpha(e);r.onChange(t),r.setState({color:t,hexInputValue:t.toHexString()})},r.onHueChange=function(e){var t=r.state.color.toHsv(),n=t.s,o=t.v,a=t.a,i=new C({h:e,s:n,v:o,a:a});r.onChange(i),r.setState({color:i,hexInputValue:i.toHexString(),hue:e})},r.onSaturationBrightnessChange=function(e,t){var n=r.state,o=n.color,a=n.hue,i=o.toHsv().a,s=new C({h:a,s:e,v:t,a:i});r.onChange(s),r.setState({color:s,hexInputValue:s.toHexString()})},r.onInputChange=function(e){return function(t){var n=r.state.color;if(t.match(/0*([0-9]|[1-8][0-9]|9[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])/g)||!t.trim()){var o=n.toRgb();o[e]=parseInt(t,10)||0;var a=new C(o);r.onChange(a),r.saturationRef.current.wrappedInstance.setPositionFromColor(a),r.hueRef.current.wrappedInstance.setPositionFromColor(a),r.setState({color:a,hexInputValue:a.toHexString(),hue:a.toHsl().h})}}};var o=new C(r.props.color);return r.state={color:o,hue:o.toHsl().h,hexInputValue:o.toHexString()},r.nodeRef=function(e){r.node=e},r.saturationRef=n.createRef(),r.hueRef=n.createRef(),r.opacityRef=n.createRef(),r}return t.__extends(r,e),r.prototype.componentDidMount=function(){var e=this.state.color;document.addEventListener("mousedown",this.handleOutsideClick,!1),document.addEventListener("touchstart",this.handleOutsideClick,!1),document.addEventListener("keydown",this.handleOutsideClick,!1),this.saturationRef.current.wrappedInstance.setPositionFromColor(e),this.hueRef.current.wrappedInstance.setPositionFromColor(e),this.opacityRef.current.wrappedInstance.setPositionFromColor(e)},r.prototype.componentDidUpdate=function(e){var t=this.props,n=t.color;if(t.show&&!e.show){var r=new C(n);this.saturationRef.current.wrappedInstance.setPositionFromColor(r),this.hueRef.current.wrappedInstance.setPositionFromColor(r),this.opacityRef.current.wrappedInstance.setPositionFromColor(r),this.setState({color:r,hue:r.toHsl().h,hexInputValue:r.toHexString()})}},r.prototype.componentWillUnmount=function(){document.removeEventListener("mousedown",this.handleOutsideClick,!1),document.removeEventListener("touchstart",this.handleOutsideClick,!1),document.removeEventListener("keydown",this.handleOutsideClick,!1)},r.prototype.render=function(){var e=this.props,r=e.show,o=e.direction,a=e.arrowOffset,i=e.labelHex,s=e.labelR,c=e.labelG,l=e.labelB,h=e.labelSliderHue,u=e.labelSliderOpacity,f=this.state,d=f.color,p=f.hexInputValue,g=f.hue,m=d.toRgb(),b=m.r,x=m.g,v=m.b,k=d.clone().setAlpha(1).toRgbString(),y=d.clone().setAlpha(0).toRgbString();return n.createElement("div",{ref:this.nodeRef},n.createElement(xe,{show:r,direction:o},n.createElement(ke,{direction:o},n.createElement(ve,{direction:o,arrowOffset:a}),n.createElement(ue,{ref:this.saturationRef,hue:g,onChange:this.onSaturationBrightnessChange}),n.createElement(t.Components.Spacer,{count:2}),n.createElement(t.Components.Input.Label,{className:"left",name:h}),n.createElement(ye,{ref:this.hueRef,onChange:this.onHueChange}),n.createElement(t.Components.Spacer,{count:2}),n.createElement(t.Components.Input.Label,{className:"left",name:u}),n.createElement(we,{ref:this.opacityRef,opaqueColor:k,transparentColor:y,onChange:this.onAlphaChange}),n.createElement(Ce,null,n.createElement(be,{value:p,label:i,onChange:this.onHexValueChange}),n.createElement(Se,null,n.createElement(pe,{value:b,label:s,onChange:this.onInputChange("r")}),n.createElement(pe,{value:x,label:c,onChange:this.onInputChange("g")}),n.createElement(pe,{value:v,label:l,onChange:this.onInputChange("b")}))))))},r.defaultProps={direction:"bottom"},r}(n.Component);ve.defaultProps={theme:t.defaultStyledTheme},ke.defaultProps={theme:t.defaultStyledTheme},exports.Color=C,exports.ColorPicker=_e;
