import { av as __values, N as __makeTemplateObject, a0 as defaultStyledTheme, a2 as __extends, aw as debounce, a5 as Components, a6 as inject, a7 as observer } from './index-4ccbf950.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './engine.development.js';
import styled, { css } from 'styled-components';
import 'react-dom/server';

/**
 * Check to see if string passed in is a percentage
 * @hidden
 */
function isPercentage(n) {
    return typeof n === 'string' && n.includes('%');
}
/**
 * Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
 * <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
 * @hidden
 */
function isOnePointZero(n) {
    return typeof n === 'string' && n.includes('.') && parseFloat(n) === 1;
}
/**
 * Take input from [0, n] and return it as [0, 1]
 */
function bound01(n, max) {
    if (isOnePointZero(n)) {
        n = '100%';
    }
    var processPercent = isPercentage(n);
    n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
    // Automatically convert percentage into number
    if (processPercent) {
        n = parseInt(String(n * max), 10) / 100;
    }
    // Handle floating point rounding errors
    if (Math.abs(n - max) < 0.000001) {
        return 1;
    }
    // Convert into [0, 1] range if it isn't already
    if (max === 360) {
        // If n is a hue given in degrees,
        // wrap around out-of-range values into [0, 360] range
        // then convert into [0, 1].
        n = (n < 0 ? (n % max) + max : n % max) / parseFloat(String(max));
    }
    else {
        // If n not a hue given in degrees
        // Convert into [0, 1] range if it isn't already.
        n = (n % max) / parseFloat(String(max));
    }
    return n;
}
/**
 * Return a valid alpha value [0,1] with all invalid values being set to 1
 */
function boundAlpha(a) {
    a = parseFloat(a);
    if (Number.isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }
    return a;
}
/**
 * Replace a decimal with it's percentage value
 */
function convertToPercentage(n) {
    if (n <= 1) {
        return Number(n) * 100 + "%";
    }
    return n;
}
/**
 * Force a hex value to have 2 characters
 */
function pad2(c) {
    return c.length === 1 ? "0" + c : String(c);
}

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
/**
 * Handle bounds / percentage checking to conform to CSS color spec
 * <http://www.w3.org/TR/css3-color/>
 * *Assumes:* r, g, b in [0, 255] or [0, 1]
 * *Returns:* { r, g, b } in [0, 255]
 */
function rgbToRgb(r, g, b) {
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255,
    };
}
/**
 * Converts an RGB color value to HSL.
 * *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
 * *Returns:* { h, s, l } in [0,1]
 */
function rgbToHsl(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var s = 0;
    var l = (max + min) / 2;
    if (max === min) {
        s = 0;
        h = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, l: l };
}
/**
 * Converts an HSL color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hslToRgb(h, s, l) {
    var r;
    var g;
    var b;
    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);
    function hue2rgb(p, q, t) {
        if (t < 0) {
            t += 1;
        }
        if (t > 1) {
            t -= 1;
        }
        if (t < 1 / 6) {
            return p + (q - p) * (6 * t);
        }
        if (t < 1 / 2) {
            return q;
        }
        if (t < 2 / 3) {
            return p + (q - p) * (2 / 3 - t) * 6;
        }
        return p;
    }
    if (s === 0) {
        // achromatic
        g = l;
        b = l;
        r = l;
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color value to HSV
 *
 * *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
 * *Returns:* { h, s, v } in [0,1]
 */
function rgbToHsv(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var v = max;
    var d = max - min;
    var s = max === 0 ? 0 : d / max;
    if (max === min) {
        h = 0; // achromatic
    }
    else {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}
/**
 * Converts an HSV color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hsvToRgb(h, s, v) {
    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);
    var i = Math.floor(h);
    var f = h - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    var mod = i % 6;
    var r = [v, q, p, p, t, v][mod];
    var g = [t, v, v, q, p, p][mod];
    var b = [p, p, t, v, v, q][mod];
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color to hex
 *
 * Assumes r, g, and b are contained in the set [0, 255]
 * Returns a 3 or 6 character hex
 */
function rgbToHex(r, g, b, allow3Char) {
    var hex = [pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16))];
    // Return a 3 character hex if possible
    if (allow3Char &&
        hex[0].charAt(0) === hex[0].charAt(1) &&
        hex[1].charAt(0) === hex[1].charAt(1) &&
        hex[2].charAt(0) === hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join('');
}
/** Converts a decimal to a hex value */
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
/** Parse a base-16 hex value into a base-10 integer */
function parseIntFromHex(val) {
    return parseInt(val, 16);
}
/** Converts a hex value to a decimal */
function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
}
/**
 * Converts an RGBA color plus alpha transparency to hex
 *
 * Assumes r, g, b are contained in the set [0, 255] and
 * a in [0, 1]. Returns a 4 or 8 character rgba hex
 */
function rgbaToHex(r, g, b, a, allow4Char) {
    var hex = [
        pad2(Math.round(r).toString(16)),
        pad2(Math.round(g).toString(16)),
        pad2(Math.round(b).toString(16)),
        pad2(convertDecimalToHex(a)),
    ];
    // Return a 4 character hex if possible
    if (allow4Char &&
        hex[0].charAt(0) === hex[0].charAt(1) &&
        hex[1].charAt(0) === hex[1].charAt(1) &&
        hex[2].charAt(0) === hex[2].charAt(1) &&
        hex[3].charAt(0) === hex[3].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }
    return hex.join('');
}

var names = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    gold: '#ffd700',
    goldenrod: '#daa520',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavender: '#e6e6fa',
    lavenderblush: '#fff0f5',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
};

// <http://www.w3.org/TR/css3-values/#integers>
var CSS_INTEGER = '[-\\+]?\\d+%?';
// <http://www.w3.org/TR/css3-values/#number-value>
var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?';
// Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
// Actual matching.
// Parentheses and commas are optional, but not required.
// Whitespace can take the place of commas or opening paren
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var matchers = {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
    rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
    hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
    hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
    hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
    hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
};
/**
 * Check to see if it looks like a CSS unit
 * (see `matchers` above for definition).
 */
function isValidCSSUnit(color) {
    return Boolean(matchers.CSS_UNIT.exec(String(color)));
}
/**
 * Permissive string parsing.  Take in a number of formats, and output an object
 * based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
 */
function stringInputToObject(color) {
    color = color.trim().toLowerCase();
    if (color.length === 0) {
        return false;
    }
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color === 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
    }
    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match = matchers.rgb.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    match = matchers.rgba.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    match = matchers.hsl.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    match = matchers.hsla.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    match = matchers.hsv.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    match = matchers.hsva.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    match = matchers.hex8.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex6.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    match = matchers.hex4.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            a: convertHexToDecimal(match[4] + match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex3.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    return false;
}
/**
 * Given a string or object, convert that input to RGB
 *
 * Possible string inputs:
 * ```
 * "#f00" or "f00"
 * "#ff0000" or "ff0000"
 * "#ff000000" or "ff000000"
 * "rgb 255 0 0" or "rgb (255, 0, 0)"
 * "rgb 1.0 0 0" or "rgb (1, 0, 0)"
 * "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
 * "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
 * "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
 * "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
 * "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
 * ```
 */
function inputToRGB(color) {
    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;
    if (typeof color === 'string') {
        color = stringInputToObject(color);
    }
    if (typeof color === 'object') {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = 'hsv';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = 'hsl';
        }
        if (Object.prototype.hasOwnProperty.call(color, 'a')) {
            a = color.a;
        }
    }
    a = boundAlpha(a);
    return {
        ok: ok,
        format: color.format || format,
        r: Math.min(255, Math.max(rgb.r, 0)),
        g: Math.min(255, Math.max(rgb.g, 0)),
        b: Math.min(255, Math.max(rgb.b, 0)),
        a: a,
    };
}

var Color = /** @class */ (function () {
    function Color(color, opts) {
        if (color === void 0) { color = ''; }
        if (opts === void 0) { opts = {}; }
        // If input is already a Color, return itself
        if (color instanceof Color) {
            return color;
        }
        this.originalInput = color;
        var rgb = inputToRGB(color);
        this.originalInput = color;
        this.r = rgb.r;
        this.g = rgb.g;
        this.b = rgb.b;
        this.a = rgb.a;
        this.roundA = Math.round(100 * this.a) / 100;
        this.format = opts.format || rgb.format;
        this.gradientType = opts.gradientType;
        // Don't let the range of [0,255] come back in [0,1].
        // Potentially lose a little bit of precision here, but will fix issues where
        // .5 gets interpreted as half of the total, instead of half of 1
        // If it was supposed to be 128, this was already taken care of by `inputToRgb`
        if (this.r < 1) {
            this.r = Math.round(this.r);
        }
        if (this.g < 1) {
            this.g = Math.round(this.g);
        }
        if (this.b < 1) {
            this.b = Math.round(this.b);
        }
        this.isValid = rgb.ok;
    }
    /**
     * Returns the alpha value of a color, from 0-1.
     */
    Color.prototype.getAlpha = function () {
        return this.a;
    };
    /**
     * Sets the alpha value on the current color.
     *
     * @param alpha - The new alpha value. The accepted range is 0-1.
     */
    Color.prototype.setAlpha = function (alpha) {
        this.a = boundAlpha(alpha);
        this.roundA = Math.round(100 * this.a) / 100;
        return this;
    };
    /**
     * Returns the object as a HSVA object.
     */
    Color.prototype.toHsv = function () {
        var hsv = rgbToHsv(this.r, this.g, this.b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
    };
    /**
     * Returns the hsva values interpolated into a string with the following format:
     * "hsva(xxx, xxx, xxx, xx)".
     */
    Color.prototype.toHsvString = function () {
        var hsv = rgbToHsv(this.r, this.g, this.b);
        var h = Math.round(hsv.h * 360);
        var s = Math.round(hsv.s * 100);
        var v = Math.round(hsv.v * 100);
        return this.a === 1 ? "hsv(" + h + ", " + s + "%, " + v + "%)" : "hsva(" + h + ", " + s + "%, " + v + "%, " + this.roundA + ")";
    };
    /**
     * Returns the object as a HSLA object.
     */
    Color.prototype.toHsl = function () {
        var hsl = rgbToHsl(this.r, this.g, this.b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
    };
    /**
     * Returns the hsla values interpolated into a string with the following format:
     * "hsla(xxx, xxx, xxx, xx)".
     */
    Color.prototype.toHslString = function () {
        var hsl = rgbToHsl(this.r, this.g, this.b);
        var h = Math.round(hsl.h * 360);
        var s = Math.round(hsl.s * 100);
        var l = Math.round(hsl.l * 100);
        return this.a === 1 ? "hsl(" + h + ", " + s + "%, " + l + "%)" : "hsla(" + h + ", " + s + "%, " + l + "%, " + this.roundA + ")";
    };
    /**
     * Returns the hex value of the color.
     * @param allow3Char will shorten hex value to 3 char if possible
     */
    Color.prototype.toHex = function (allow3Char) {
        if (allow3Char === void 0) { allow3Char = false; }
        return rgbToHex(this.r, this.g, this.b, allow3Char);
    };
    /**
     * Returns the hex value of the color -with a # appened.
     * @param allow3Char will shorten hex value to 3 char if possible
     */
    Color.prototype.toHexString = function (allow3Char) {
        if (allow3Char === void 0) { allow3Char = false; }
        return "#" + this.toHex(allow3Char);
    };
    /**
     * Returns the hex 8 value of the color.
     * @param allow4Char will shorten hex value to 4 char if possible
     */
    Color.prototype.toHex8 = function (allow4Char) {
        if (allow4Char === void 0) { allow4Char = false; }
        return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
    };
    /**
     * Returns the hex 8 value of the color -with a # appened.
     * @param allow4Char will shorten hex value to 4 char if possible
     */
    Color.prototype.toHex8String = function (allow4Char) {
        if (allow4Char === void 0) { allow4Char = false; }
        return "#" + this.toHex8(allow4Char);
    };
    /**
     * Returns the object as a RGBA object.
     */
    Color.prototype.toRgb = function () {
        return {
            r: Math.round(this.r),
            g: Math.round(this.g),
            b: Math.round(this.b),
            a: this.a,
        };
    };
    /**
     * Returns the object as a RGBA object.
     */
    Color.prototype.toRgbArray = function () {
        return [Math.round(this.r), Math.round(this.g), Math.round(this.b), this.a];
    };
    /**
     * Returns the RGBA values interpolated into a string with the following format:
     * "RGBA(xxx, xxx, xxx, xx)".
     */
    Color.prototype.toRgbString = function () {
        var r = Math.round(this.r);
        var g = Math.round(this.g);
        var b = Math.round(this.b);
        return this.a === 1 ? "rgb(" + r + ", " + g + ", " + b + ")" : "rgba(" + r + ", " + g + ", " + b + ", " + this.roundA + ")";
    };
    /**
     * Returns the object as a RGBA object.
     */
    Color.prototype.toPercentageRgb = function () {
        var fmt = function (x) { return Math.round(bound01(x, 255) * 100) + "%"; };
        return {
            r: fmt(this.r),
            g: fmt(this.g),
            b: fmt(this.b),
            a: this.a,
        };
    };
    /**
     * Returns the RGBA relative values interpolated into a string
     */
    Color.prototype.toPercentageRgbString = function () {
        var rnd = function (x) { return Math.round(bound01(x, 255) * 100); };
        return this.a === 1
            ? "rgb(" + rnd(this.r) + "%, " + rnd(this.g) + "%, " + rnd(this.b) + "%)"
            : "rgba(" + rnd(this.r) + "%, " + rnd(this.g) + "%, " + rnd(this.b) + "%, " + this.roundA + ")";
    };
    /**
     * The 'real' name of the color -if there is one.
     */
    Color.prototype.toName = function () {
        var e_1, _a;
        if (this.a === 0) {
            return 'transparent';
        }
        if (this.a < 1) {
            return false;
        }
        var hex = "#" + rgbToHex(this.r, this.g, this.b, false);
        try {
            // eslint-disable-next-line no-restricted-syntax
            for (var _b = __values(Object.keys(names)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                if (names[key] === hex) {
                    return key;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return false;
    };
    /**
     * String representation of the color.
     *
     * @param format - The format to be used when displaying the string representation.
     */
    Color.prototype.toString = function (format) {
        var formatSet = Boolean(format);
        format = format || this.format;
        var hasAlpha = this.a < 1 && this.a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && format && (format.startsWith('hex') || format === 'name');
        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === 'name' && this.a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        switch (format) {
            case 'rgb':
                return this.toRgbString();
            case 'prgb':
                return this.toPercentageRgbString();
            case 'hex':
            case 'hex6':
                return this.toHexString();
            case 'hex3':
                return this.toHexString(true);
            case 'hex4':
                return this.toHex8String(true);
            case 'hex8':
                return this.toHex8String();
            case 'hsl':
                return this.toHslString();
            case 'hsv':
                return this.toHsvString();
            case 'name':
                return this.toName();
            default:
                return this.toHexString();
        }
    };
    Color.prototype.clone = function () {
        return new Color(this.toString());
    };
    return Color;
}());

var CircleSliderKnob = styled.div.attrs(function (props) { return ({
    style: { left: props.position.x || 0 + "px", top: props.position.y || 0 + "px" },
}); })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  height: ", "px;\n  width: ", "px;\n  border-radius: 50%;\n  border: 2px solid ", ";\n  box-sizing: border-box;\n  cursor: pointer;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.11), 0 1px 3px 0 rgba(0, 0, 0, 0.46);\n  z-index: 2;\n  pointer-events: none;\n"], ["\n  position: absolute;\n  height: ", "px;\n  width: ", "px;\n  border-radius: 50%;\n  border: 2px solid ", ";\n  box-sizing: border-box;\n  cursor: pointer;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.11), 0 1px 3px 0 rgba(0, 0, 0, 0.46);\n  z-index: 2;\n  pointer-events: none;\n"])), function (props) { return props.theme.measurements.color.colorPicker.thumb.size; }, function (props) { return props.theme.measurements.color.colorPicker.thumb.size; }, function (props) { return props.theme.colorPicker.controlsColor; });
CircleSliderKnob.defaultProps = { theme: defaultStyledTheme };
var templateObject_1;

var Root = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  position: relative;\n  height: 14px;\n  width: 100%;\n"], ["\n  position: relative;\n  height: 14px;\n  width: 100%;\n"])));
var SliderArea = /** @class */ (function (_super) {
    __extends(SliderArea, _super);
    function SliderArea(props) {
        var _this = _super.call(this, props) || this;
        _this.onDragStart = function (e) {
            _this.setState({ dragging: true });
            _this.onPositionChange(e);
        };
        _this.onPositionChange = function (e) {
            var _a = _this.props, onChange = _a.onChange, config = _a.config;
            var halfKnobSize = config.measurements.color.colorPicker.thumb.size / 2;
            var knobSize = config.measurements.color.colorPicker.thumb.size;
            var clientX = 0;
            var clientY = 0;
            clientX = e.clientX;
            clientY = e.clientY;
            var node = ReactDOM.findDOMNode(_this);
            if (node && node instanceof HTMLElement) {
                var _b = node.getBoundingClientRect(), top_1 = _b.top, left = _b.left, width = _b.width, height = _b.height;
                var x = clientX - left - halfKnobSize;
                var y = clientY - top_1 - halfKnobSize;
                x = Math.max(0, Math.min(width - knobSize, x));
                y = Math.max(0, Math.min(height - knobSize, y));
                if (onChange) {
                    onChange({ x: x, y: y });
                }
                _this.setState({ x: x, y: y });
            }
        };
        _this.onDrag = function (e) {
            if (_this.state.dragging) {
                _this.onPositionChange(e);
            }
        };
        _this.onDragStop = function () {
            if (_this.state.dragging) {
                _this.setState({ dragging: false });
            }
        };
        _this.state = {
            dragging: false,
            x: props.defaultPosition.x,
            y: props.defaultPosition.y,
        };
        _this.debouncedOnDrag = debounce(_this.onDrag, 10);
        return _this;
    }
    SliderArea.prototype.componentWillUnmount = function () {
        /** prevents invariant if unmounted while dragging */
        this.setState({ dragging: false });
    };
    SliderArea.prototype.render = function () {
        var _a = this.props, surface = _a.surface, setInnerRef = _a.setInnerRef, className = _a.className, children = _a.children;
        return (React.createElement(Root, { ref: setInnerRef, className: className },
            React.createElement(Components.DraggableCore, { onStart: this.onDragStart, onDrag: this.debouncedOnDrag, onStop: this.onDragStop }, surface),
            children));
    };
    SliderArea.defaultProps = {
        defaultPosition: { x: 0, y: 0 },
    };
    return SliderArea;
}(React.Component));
var SliderArea$1 = inject('config', 'active')(observer(SliderArea));
var templateObject_1$1;

var SliderBackgroundStyle = css(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  position: absolute;\n  top: 3px;\n  left: 0;\n  width: 100%;\n  height: 8px;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n"], ["\n  position: absolute;\n  top: 3px;\n  left: 0;\n  width: 100%;\n  height: 8px;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n"])));
var templateObject_1$2;

var Background = styled.div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  ", "\n  background: linear-gradient(90deg, #F00 0%, #FF0 16.66%, #0F0 33.33%, #0FF 50%, #00F 66.66%, #F0F 83.33%, #F00 100%);\n  height: 8px;\n"], ["\n  ", "\n  background: linear-gradient(90deg, #F00 0%, #FF0 16.66%, #0F0 33.33%, #0FF 50%, #00F 66.66%, #F0F 83.33%, #F00 100%);\n  height: 8px;\n"])), SliderBackgroundStyle);
var HueSlider = /** @class */ (function (_super) {
    __extends(HueSlider, _super);
    function HueSlider(props) {
        var _this = _super.call(this, props) || this;
        _this.onKnob = function (_a) {
            var x = _a.x;
            var _b = _this.props, onChange = _b.onChange, config = _b.config;
            var width = _this.node.offsetWidth;
            var sliderWidth = width - config.measurements.color.colorPicker.thumb.size;
            var colorX = (x * width) / sliderWidth;
            var value = Math.max(0, Math.min(360, (colorX / width) * 360));
            onChange(value);
            _this.setState({ x: x });
        };
        _this.setPositionFromColor = function (color) {
            var config = _this.props.config;
            var width = _this.node.offsetWidth;
            var x = 0;
            var sliderWidth = width - config.measurements.color.colorPicker.thumb.size;
            if (_this.node) {
                x = (color.toHsv().h * width) / 360;
            }
            _this.setState({ x: (x * sliderWidth) / width });
        };
        _this.nodeRef = function (element) {
            _this.node = element;
        };
        _this.state = {
            x: 0,
        };
        return _this;
    }
    HueSlider.prototype.render = function () {
        var x = this.state.x;
        return (React.createElement(SliderArea$1, { surface: React.createElement(Background, null), setInnerRef: this.nodeRef, onChange: this.onKnob },
            React.createElement(CircleSliderKnob, { position: { x: x, y: 0 } })));
    };
    return HueSlider;
}(React.Component));
var HueSlider$1 = inject('config')(observer(HueSlider));
var templateObject_1$3;

var Background$1 = styled.div.attrs(function (props) { return ({
    style: { background: "linear-gradient(to left, " + props.transparentColor + " 0%, " + props.opaqueColor + " 100%)" },
}); })(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  ", "\n  z-index: 1;\n"], ["\n  ", "\n  z-index: 1;\n"])), SliderBackgroundStyle);
var TiledBackground = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n  z-index: 0;\n  background-repeat: repeat-x;\n  background-size: contain;\n  background-position: left;\n  background-image: url(", ");\n"], ["\n  ", "\n  z-index: 0;\n  background-repeat: repeat-x;\n  background-size: contain;\n  background-position: left;\n  background-image: url(", ");\n"])), SliderBackgroundStyle, function (props) { return props.url; });
var OpacitySlider = /** @class */ (function (_super) {
    __extends(OpacitySlider, _super);
    function OpacitySlider(props) {
        var _this = _super.call(this, props) || this;
        _this.onKnob = function (_a) {
            var x = _a.x;
            var _b = _this.props, onChange = _b.onChange, config = _b.config;
            var width = _this.node.offsetWidth;
            var sliderWidth = width - config.measurements.color.colorPicker.thumb.size;
            var colorX = (x * width) / sliderWidth;
            var value = Math.min(1, Math.max(0, (width - colorX) / width));
            onChange(value);
            _this.setState({ x: x });
        };
        _this.setPositionFromColor = function (color) {
            var config = _this.props.config;
            var width = _this.node.offsetWidth;
            var x = 0;
            var sliderWidth = width - config.measurements.color.colorPicker.thumb.size;
            if (_this.node) {
                x = (1 - color.toHsv().a) * width;
            }
            _this.setState({ x: (x * sliderWidth) / width });
        };
        _this.nodeRef = function (element) {
            _this.node = element;
        };
        _this.state = {
            x: 0,
        };
        return _this;
    }
    OpacitySlider.prototype.render = function () {
        var _a = this.props, opaqueColor = _a.opaqueColor, transparentColor = _a.transparentColor, config = _a.config;
        var x = this.state.x;
        var url = config.assetProvider.getAbsolutePath('controls/tiled-background.png');
        return (React.createElement(SliderArea$1, { surface: React.createElement(Background$1, { opaqueColor: opaqueColor, transparentColor: transparentColor }), setInnerRef: this.nodeRef, onChange: this.onKnob },
            React.createElement(TiledBackground, { url: url }),
            React.createElement(CircleSliderKnob, { position: { x: x, y: 0 } })));
    };
    return OpacitySlider;
}(React.Component));
var OpacitySlider$1 = inject('config')(observer(OpacitySlider));
var templateObject_1$4, templateObject_2;

var Background$2 = styled.div.attrs(function (props) { return ({
    style: { backgroundColor: "hsl(" + props.hue + ", 100%, 50%)" },
}); })(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  ", "\n  background: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0)),\n   linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0));\n  height: ", "px;\n  top: 0px;\n"], ["\n  ", "\n  background: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0)),\n   linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0));\n  height: ", "px;\n  top: 0px;\n"])), SliderBackgroundStyle, function (props) { return props.theme.measurements.color.colorPicker.saturationSlider.height; });
var Slider = styled(SliderArea$1)(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  height: ", "px;\n  margin-top: 0px;\n"], ["\n  height: ", "px;\n  margin-top: 0px;\n"])), function (props) { return props.theme.measurements.color.colorPicker.saturationSlider.height; });
var SaturationSlider = /** @class */ (function (_super) {
    __extends(SaturationSlider, _super);
    function SaturationSlider(props) {
        var _this = _super.call(this, props) || this;
        _this.setPositionFromColor = function (color) {
            var config = _this.props.config;
            var position = { x: 0, y: 0 };
            if (_this.node) {
                var _a = color.toHsv(), s = _a.s, v = _a.v;
                var _b = _this.node, width = _b.offsetWidth, height = _b.offsetHeight;
                var sliderWidth = width - config.measurements.color.colorPicker.thumb.size;
                var sliderHeight = height - config.measurements.color.colorPicker.thumb.size;
                var x = s * width;
                var y = (1 - v) * height;
                position.x = (x * sliderWidth) / width;
                position.y = (y * sliderHeight) / height;
            }
            _this.setState({ position: position });
        };
        _this.onChange = function (_a) {
            var x = _a.x, y = _a.y;
            var _b = _this.props, onChange = _b.onChange, config = _b.config;
            var _c = _this.node, height = _c.offsetHeight, width = _c.offsetWidth;
            var sliderWidth = width - config.measurements.color.colorPicker.thumb.size;
            var sliderHeight = height - config.measurements.color.colorPicker.thumb.size;
            var colorX = (x * width) / sliderWidth;
            var colorY = (y * height) / sliderHeight;
            var saturation = Math.min(1, Math.max(0, colorX / width));
            var brightness = Math.min(1, Math.max(0, (height - colorY) / height));
            onChange(saturation, brightness);
            _this.setState({ position: { x: x, y: y } });
        };
        _this.nodeRef = function (element) {
            _this.node = element;
        };
        _this.state = {
            position: { x: 0, y: 0 },
        };
        return _this;
    }
    SaturationSlider.prototype.render = function () {
        var hue = this.props.hue;
        var position = this.state.position;
        return (React.createElement(Slider, { surface: React.createElement(Background$2, { hue: hue }), setInnerRef: this.nodeRef, onChange: this.onChange },
            React.createElement(CircleSliderKnob, { position: position })));
    };
    return SaturationSlider;
}(React.Component));
var SaturationSlider$1 = inject('config')(observer(SaturationSlider));
var templateObject_1$5, templateObject_2$1;

var Container = styled.div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  text-align: center;\n  width: 28px;\n  padding-left: 4px;\n"], ["\n  text-align: center;\n  width: 28px;\n  padding-left: 4px;\n"])));
var StyledText = styled(Components.Input.Text)(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  input {\n    text-align: center;\n    border-bottom: 1px solid ", ";\n  }\n"], ["\n  input {\n    text-align: center;\n    border-bottom: 1px solid ", ";\n  }\n"])), function (props) { return props.theme.colorPicker.inputBorderColor; });
var ColorInputComponent = function (_a) {
    var value = _a.value, label = _a.label, onChange = _a.onChange;
    return (React.createElement(Container, null,
        React.createElement(Components.Input.Label, { name: label }),
        React.createElement(StyledText, { min: 0, max: 255, value: value, onChange: onChange })));
};
var templateObject_1$6, templateObject_2$2;

var Container$1 = styled.div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  text-align: left;\n  width: 62px;\n"], ["\n  text-align: left;\n  width: 62px;\n"])));
var StyledText$1 = styled(Components.Input.Text)(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  input {\n    text-align: left;\n    border-bottom: 1px solid ", ";\n  }\n"], ["\n  input {\n    text-align: left;\n    border-bottom: 1px solid ", ";\n  }\n"])), function (props) { return props.theme.colorPicker.inputBorderColor; });
var HexInputComponent = function (_a) {
    var value = _a.value, label = _a.label, onChange = _a.onChange;
    return (React.createElement(Container$1, null,
        React.createElement(Components.Input.Label, { name: label }),
        React.createElement(StyledText$1, { value: value.toUpperCase(), onChange: onChange })));
};
var templateObject_1$7, templateObject_2$3;

var ColorPickerContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  left: -24px;\n  ", "\n  z-index: ", ";\n  display: none;\n  opacity: 0;\n  transition: opacity 0.3s ease-out;\n  ", "\n"], ["\n  position: absolute;\n  left: -24px;\n  ",
    "\n  z-index: ", ";\n  display: none;\n  opacity: 0;\n  transition: opacity 0.3s ease-out;\n  ",
    "\n"])), function (props) {
    return props.direction === 'bottom'
        ? css(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n          bottom: -", "px;\n        "], ["\n          bottom: -", "px;\n        "])), props.theme.measurements.color.colorPicker.arrow.width / 4) : css(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n          top: -", "px;\n        "], ["\n          top: -", "px;\n        "])), props.theme.measurements.color.colorPicker.arrow.width / 4);
}, function (props) { return props.theme.measurements.zIndex.input.list; }, function (props) {
    return props.show && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      display: block;\n      opacity: 1;\n      transition: opacity 0.3s ease-out;\n    "], ["\n      display: block;\n      opacity: 1;\n      transition: opacity 0.3s ease-out;\n    "])));
});
var TopArrow = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  position: absolute;\n  width: ", "px;\n  height: ", "px;\n  overflow: hidden;\n  pointer-events: none;\n  ", "\n  left: ", "px;\n  :after {\n    content: '';\n    position: absolute;\n    width: ", "px;\n    height: ", "px;\n    left: 50%;\n    ", "\n    background-color: ", ";\n    pointer-events: none;\n  }\n"], ["\n  position: absolute;\n  width: ", "px;\n  height: ", "px;\n  overflow: hidden;\n  pointer-events: none;\n  ",
    "\n  left: ", "px;\n  :after {\n    content: '';\n    position: absolute;\n    width: ", "px;\n    height: ", "px;\n    left: 50%;\n    ",
    "\n    background-color: ", ";\n    pointer-events: none;\n  }\n"])), function (props) { return props.theme.measurements.color.colorPicker.arrow.width; }, function (props) { return props.theme.measurements.color.colorPicker.arrow.width / 2; }, function (props) {
    return props.direction === 'bottom'
        ? css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n          bottom: 100%;\n        "], ["\n          bottom: 100%;\n        "]))) : css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n          top: 100%;\n        "], ["\n          top: 100%;\n        "])));
}, function (props) { return props.arrowOffset || props.theme.measurements.color.colorPicker.arrow.width; }, function (props) { return props.theme.measurements.color.colorPicker.arrow.width / 2; }, function (props) { return props.theme.measurements.color.colorPicker.arrow.width / 2; }, function (props) {
    return props.direction === 'bottom'
        ? css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n            transform: translate(-50%, 50%) rotate(45deg);\n          "], ["\n            transform: translate(-50%, 50%) rotate(45deg);\n          "]))) : css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n            transform: translate(-50%, -50%) rotate(45deg);\n          "], ["\n            transform: translate(-50%, -50%) rotate(45deg);\n          "])));
}, function (props) { return props.theme.colorPicker.listBackground; });
var ColorPickerComponent = styled.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  position: absolute;\n  ", "\n  padding: 16px;\n  box-sizing: border-box;\n  box-shadow: ", ";\n  background: ", ";\n  border-radius: ", "px;\n  width: ", "px;\n  left: 8px;\n  z-index: 1;\n  label.left {\n    text-align: left;\n  }\n"], ["\n  position: absolute;\n  ",
    "\n  padding: 16px;\n  box-sizing: border-box;\n  box-shadow: ", ";\n  background: ", ";\n  border-radius: ", "px;\n  width: ", "px;\n  left: 8px;\n  z-index: 1;\n  label.left {\n    text-align: left;\n  }\n"])), function (props) {
    return props.direction === 'top' && css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n      transform: translate(0, -100%);\n    "], ["\n      transform: translate(0, -100%);\n    "])));
}, function (props) { return props.theme.colorPicker.listShadow; }, function (props) { return props.theme.colorPicker.listBackground; }, function (props) { return props.theme.shape.radiusMedium; }, function (props) { return props.theme.measurements.color.colorPicker.width; });
var HueSliderComponent = styled(HueSlider$1)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  margin-top: 8px;\n"], ["\n  margin-top: 8px;\n"])));
var OpacitySliderComponent = styled(OpacitySlider$1)(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  margin-top: 8px;\n"], ["\n  margin-top: 8px;\n"])));
var ColorValueInputs = styled.div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 30px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 30px;\n"])));
var RGBContainer = styled.div(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"])));
var ColorPicker = /** @class */ (function (_super) {
    __extends(ColorPicker, _super);
    function ColorPicker(props) {
        var _this = _super.call(this, props) || this;
        _this.saturationRef = null;
        _this.hueRef = null;
        _this.opacityRef = null;
        // check if the selected element is a sibling of the open color picker
        _this.checkId = function (start, id, depth) {
            var el = start;
            var i = 0;
            while (el.parentElement && i < depth) {
                el = el.parentElement;
                i += 1;
                if (el.id === id) {
                    return true;
                }
            }
            return false;
        };
        _this.handleOutsideClick = function (e) {
            var _a = _this.props, parentId = _a.parentId, onRequestClose = _a.onRequestClose, onAddSnapshot = _a.onAddSnapshot;
            var color = _this.state.color;
            if ((_this.node && _this.node.contains(e.target)) ||
                (_this.checkId(e.target, parentId.replace(' ', '-'), 5) && e.target.classList.contains('active'))) {
                return;
            }
            _this.setState({ hexInputValue: color.toHexString() });
            if (onRequestClose) {
                onRequestClose();
            }
            if (onAddSnapshot) {
                onAddSnapshot();
            }
        };
        _this.onChange = function (color) {
            var onChange = _this.props.onChange;
            onChange({ color: color.toRgbArray(), colorString: color.toRgbString() });
        };
        _this.onHexValueChange = function (value) {
            if (value.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i)) {
                var color = new Color(value);
                _this.onChange(color);
                _this.setState({ color: color, hue: color.toHsl().h });
                _this.saturationRef.current.wrappedInstance.setPositionFromColor(color);
                _this.hueRef.current.wrappedInstance.setPositionFromColor(color);
            }
            _this.setState({ hexInputValue: value });
        };
        _this.onAlphaChange = function (value) {
            var color = _this.state.color;
            var nextColor = color.setAlpha(value);
            _this.onChange(nextColor);
            _this.setState({ color: nextColor, hexInputValue: nextColor.toHexString() });
        };
        _this.onHueChange = function (hue) {
            var color = _this.state.color;
            var _a = color.toHsv(), s = _a.s, v = _a.v, a = _a.a;
            var nextColor = new Color({ h: hue, s: s, v: v, a: a });
            _this.onChange(nextColor);
            _this.setState({
                color: nextColor,
                hexInputValue: nextColor.toHexString(),
                hue: hue,
            });
        };
        _this.onSaturationBrightnessChange = function (saturation, brightness) {
            var _a = _this.state, color = _a.color, hue = _a.hue;
            var a = color.toHsv().a;
            var nextColor = new Color({ h: hue, s: saturation, v: brightness, a: a });
            _this.onChange(nextColor);
            _this.setState({ color: nextColor, hexInputValue: nextColor.toHexString() });
        };
        _this.onInputChange = function (key) { return function (value) {
            var color = _this.state.color;
            // make sure that value is between 0 and 255
            if (value.match(/0*([0-9]|[1-8][0-9]|9[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])/g) || !value.trim()) {
                var rgba = color.toRgb();
                rgba[key] = parseInt(value, 10) || 0;
                var nextColor = new Color(rgba);
                _this.onChange(nextColor);
                _this.saturationRef.current.wrappedInstance.setPositionFromColor(nextColor);
                _this.hueRef.current.wrappedInstance.setPositionFromColor(nextColor);
                _this.setState({
                    color: nextColor,
                    hexInputValue: nextColor.toHexString(),
                    hue: nextColor.toHsl().h,
                });
            }
        }; };
        var color = new Color(_this.props.color);
        _this.state = {
            color: color,
            hue: color.toHsl().h,
            hexInputValue: color.toHexString(),
        };
        _this.nodeRef = function (element) {
            _this.node = element;
        };
        _this.saturationRef = React.createRef();
        _this.hueRef = React.createRef();
        _this.opacityRef = React.createRef();
        return _this;
    }
    ColorPicker.prototype.componentDidMount = function () {
        var color = this.state.color;
        document.addEventListener('mousedown', this.handleOutsideClick, false);
        document.addEventListener('touchstart', this.handleOutsideClick, false);
        document.addEventListener('keydown', this.handleOutsideClick, false);
        this.saturationRef.current.wrappedInstance.setPositionFromColor(color);
        this.hueRef.current.wrappedInstance.setPositionFromColor(color);
        this.opacityRef.current.wrappedInstance.setPositionFromColor(color);
    };
    ColorPicker.prototype.componentDidUpdate = function (prevProps) {
        var _a = this.props, color = _a.color, show = _a.show;
        if (show && !prevProps.show) {
            var nextColor = new Color(color);
            this.saturationRef.current.wrappedInstance.setPositionFromColor(nextColor);
            this.hueRef.current.wrappedInstance.setPositionFromColor(nextColor);
            this.opacityRef.current.wrappedInstance.setPositionFromColor(nextColor);
            this.setState({
                color: nextColor,
                hue: nextColor.toHsl().h,
                hexInputValue: nextColor.toHexString(),
            });
        }
    };
    ColorPicker.prototype.componentWillUnmount = function () {
        document.removeEventListener('mousedown', this.handleOutsideClick, false);
        document.removeEventListener('touchstart', this.handleOutsideClick, false);
        document.removeEventListener('keydown', this.handleOutsideClick, false);
    };
    ColorPicker.prototype.render = function () {
        var _a = this.props, show = _a.show, direction = _a.direction, arrowOffset = _a.arrowOffset, labelHex = _a.labelHex, labelR = _a.labelR, labelG = _a.labelG, labelB = _a.labelB, labelSliderHue = _a.labelSliderHue, labelSliderOpacity = _a.labelSliderOpacity;
        var _b = this.state, color = _b.color, hexInputValue = _b.hexInputValue, hue = _b.hue;
        var _c = color.toRgb(), r = _c.r, g = _c.g, b = _c.b;
        var opaqueColor = color
            .clone()
            .setAlpha(1)
            .toRgbString();
        var transparentColor = color
            .clone()
            .setAlpha(0)
            .toRgbString();
        return (React.createElement("div", { ref: this.nodeRef },
            React.createElement(ColorPickerContainer, { show: show, direction: direction },
                React.createElement(ColorPickerComponent, { direction: direction },
                    React.createElement(TopArrow, { direction: direction, arrowOffset: arrowOffset }),
                    React.createElement(SaturationSlider$1, { ref: this.saturationRef, hue: hue, onChange: this.onSaturationBrightnessChange }),
                    React.createElement(Components.Spacer, { count: 2 }),
                    React.createElement(Components.Input.Label, { className: "left", name: labelSliderHue }),
                    React.createElement(HueSliderComponent, { ref: this.hueRef, onChange: this.onHueChange }),
                    React.createElement(Components.Spacer, { count: 2 }),
                    React.createElement(Components.Input.Label, { className: "left", name: labelSliderOpacity }),
                    React.createElement(OpacitySliderComponent, { ref: this.opacityRef, opaqueColor: opaqueColor, transparentColor: transparentColor, onChange: this.onAlphaChange }),
                    React.createElement(ColorValueInputs, null,
                        React.createElement(HexInputComponent, { value: hexInputValue, label: labelHex, onChange: this.onHexValueChange }),
                        React.createElement(RGBContainer, null,
                            React.createElement(ColorInputComponent, { value: r, label: labelR, onChange: this.onInputChange('r') }),
                            React.createElement(ColorInputComponent, { value: g, label: labelG, onChange: this.onInputChange('g') }),
                            React.createElement(ColorInputComponent, { value: b, label: labelB, onChange: this.onInputChange('b') })))))));
    };
    ColorPicker.defaultProps = {
        direction: 'bottom',
    };
    return ColorPicker;
}(React.Component));
TopArrow.defaultProps = { theme: defaultStyledTheme };
ColorPickerComponent.defaultProps = { theme: defaultStyledTheme };
var templateObject_1$8, templateObject_2$4, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15;

export { Color, ColorPicker };
