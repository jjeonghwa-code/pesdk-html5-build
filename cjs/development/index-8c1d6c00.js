'use strict';

var index = require('./index-491a9a11.js');
require('react');
require('react-dom');
require('./engine.development.js');
require('styled-components');

var name = "photoeditorsdk";
var version = "5.0.0-rc-3";
var description = "The most comprehensive photo editor SDK for HTML5";
var repository = "http://github.com/imgly/pesdk-html5";
var author = "PhotoEditorSDK (img.ly GmbH) <contact@img.ly>";
var license = "SEE LICENSE IN LICENSE.md";
var bin = {
};
var scripts = {
	"lerna:bootstrap": "$(npm bin)/lerna bootstrap",
	"lerna:clean": "$(npm bin)/lerna clean --yes",
	"lerna:publish": "$(npm bin)/lerna publish",
	"clean-peer-deps": "node scripts/clean-peer-deps.js",
	prestart: "node scripts/pre.js",
	start: "cross-env ENV=development node --max-old-space-size=8192 $(npm bin)/rollup -c -w",
	prebuild: "node scripts/pre.js",
	build: "npm run dev-build && npm run prod-build",
	"build-package": "node scripts/build-for-package.js",
	"dev-build": "cross-env ENV=development NODE_ENV=development rollup -c",
	"prod-build": "cross-env ENV=production NODE_ENV=production rollup -c",
	"lint:css": "stylelint './packages/**/*.tsx'",
	"lint:ts": "eslint --ext .tsx,.ts  packages",
	lint: "npm run lint:ts && npm run lint:css",
	"lint-ts:fix": "eslint --fix --ext .tsx,.ts  packages",
	test: "$(npm bin)/jest",
	deploy: "node scripts/deploy-ui.js",
	init: "node scripts/init.js",
	setup: "node scripts/setup.js",
	"build-example": "node scripts/build-example.js",
	merge: "node scripts/merge.js",
	"build-typings": "$(npm bin)/tsc -p ./tsconfig-typings.json",
	validate: "npm run lint:ts && npm run lint:css && npm run build && npm t"
};
var devDependencies = {
	"@rollup/plugin-image": "^2.0.0",
	"@rollup/plugin-json": "^4.0.0",
	"@rollup/plugin-node-resolve": "^6.0.0",
	"@rollup/plugin-url": "^4.0.0",
	"@svgr/rollup": "^4.3.3",
	"@testing-library/react": "^8.0.4",
	"@types/jest": "^24.0.11",
	"@types/react": "^16.8.13",
	"@types/react-dom": "^16.8.4",
	"@types/styled-components": "^4.1.10",
	"@typescript-eslint/eslint-plugin": "^2.19.0",
	"@typescript-eslint/parser": "^2.19.0",
	autoprefixer: "^9.7.4",
	"cross-env": "^5.1.1",
	eslint: "^6.8.0",
	"eslint-config-airbnb": "^18.0.1",
	"eslint-config-prettier": "^6.10.0",
	"eslint-plugin-import": "^2.20.1",
	"eslint-plugin-jsx-a11y": "^6.2.3",
	"eslint-plugin-prettier": "^3.1.2",
	"eslint-plugin-react": "^7.18.3",
	husky: "^1.2.0",
	jest: "^24.7.1",
	"jest-axe": "^3.2.0",
	"jest-dom": "^3.1.3",
	jsdoc: "^3.6.3",
	"json-loader": "^0.5.7",
	lerna: "^3.13.4",
	"lint-staged": "^8.1.0",
	"lodash.defaults": "^4.2.0",
	"mobx-react-devtools": "^6.1.1",
	ncp: "^2.0.0",
	"node-sass": "^4.12.0",
	"node-static": "^0.7.10",
	"optimize-css-assets-webpack-plugin": "^3.2.0",
	prettier: "^1.19.1",
	react: "^16.8.3",
	"react-dom": "^16.8.3",
	"replace-in-file": "^5.0.2",
	rollup: "^1.27.8",
	"rollup-plugin-commonjs": "^10.1.0",
	"rollup-plugin-css-only": "^1.0.0",
	"rollup-plugin-node-builtins": "^2.1.2",
	"rollup-plugin-postcss": "^2.2.0",
	"rollup-plugin-terser": "^5.1.0",
	"rollup-plugin-typescript2": "^0.25.0",
	"styled-components": "^4.2.0",
	stylelint: "^13.2.0",
	"stylelint-config-recommended": "^3.0.0",
	"stylelint-config-standard": "^20.0.0",
	"stylelint-config-styled-components": "^0.1.1",
	"stylelint-processor-styled-components": "^1.10.0",
	"ts-jest": "^24.0.2",
	typescript: "~3.3.0"
};
var dependencies = {
	"lodash.debounce": "^4.0.8",
	"lodash.memoize": "^4.1.2",
	"lodash.throttle": "^4.1.1",
	mobx: "^4.0.0",
	"mobx-react": "^5.0.0",
	"resize-observer-polyfill": "^1.5.1",
	"can-use-dom": "^0.1.0"
};
var devEngines = {
	node: "8.x || 9.x || 10.x || 11.x || 12.x"
};
var peerDependencies = {
	react: "^16.3.0",
	"react-dom": "^16.3.0",
	"styled-components": "^4.4.0"
};
var husky = {
	hooks: {
		"pre-commit": "lint-staged",
		"pre-push": "true"
	}
};
var pkg = {
	name: name,
	version: version,
	description: description,
	repository: repository,
	author: author,
	license: license,
	bin: bin,
	scripts: scripts,
	devDependencies: devDependencies,
	dependencies: dependencies,
	devEngines: devEngines,
	peerDependencies: peerDependencies,
	"lint-staged": {
	"*.{ts,tsx}": [
		"npm run lint-ts:fix",
		"npm run lint:css",
		"git add"
	]
},
	husky: husky
};

var Serializer = /** @class */ (function () {
    function Serializer(previewPosition, previewSize, transformedImageSize, untransformedImageSize) {
        var _this = this;
        this.serializeMaxWidth = function (width) {
            return width / _this.untransformedImageSize.width;
        };
        this.previewRelativeToImageDimensions = function (point) {
            return _this.relativeToOutputContainer(point).divide(index.Vector2.fromSize(_this.previewSize));
        };
        this.relativeToOutputContainer = function (point) {
            return new index.Vector2(point).subtract(new index.Vector2(_this.previewPosition));
        };
        this.relativeToImageDimensions = function (point) {
            return new index.Vector2(point).divide(index.Vector2.fromSize(_this.previewSize));
        };
        this.relativeToShotestImageEdge = function (value) {
            return value / Math.min(_this.transformedImageSize.height, _this.transformedImageSize.width);
        };
        this.getPointInDirection = function (origin, rotation, distance) {
            if (rotation === void 0) { rotation = 0; }
            if (distance === void 0) { distance = 3; }
            var slope = Math.tan(rotation);
            var factor = Math.sqrt(Math.pow(slope, 2) + 1);
            return {
                x: origin.x + distance / factor,
                y: origin.y + (distance * slope) / factor,
            };
        };
        this.previewPosition = previewPosition;
        this.previewSize = previewSize;
        this.transformedImageSize = transformedImageSize;
        this.untransformedImageSize = untransformedImageSize;
    }
    Serializer.serializeFilters = function (filter) {
        return {
            type: 'filter',
            options: {
                intensity: filter.intensity,
                identifier: filter.identifier,
            },
        };
    };
    Serializer.serializeAdjustments = function (adjustment) {
        return {
            type: 'adjustments',
            options: adjustment,
        };
    };
    Serializer.serialzeOverlay = function (overlay) {
        return {
            type: 'overlay',
            options: {
                identifier: overlay.identifier,
                intensity: overlay.opacity,
                // Camel case to lower case with spaces
                blendMode: overlay.blendMode.replace(/[A-Z]/g, function (letter) { return " " + letter.toLowerCase(); }),
            },
        };
    };
    Serializer.serializeMetaData = function () {
        return {
            platform: 'html5',
            version: pkg.version,
            createdAt: new Date().toISOString(),
        };
    };
    Serializer.prototype.serialise = function (appState, imageData) {
        var _this = this;
        var meta = Serializer.serializeMetaData();
        var image = {
            width: this.transformedImageSize.width,
            height: this.transformedImageSize.height,
        };
        if (imageData) {
            image.data = imageData;
        }
        var operations = [];
        var spriteOptions = [];
        /** get operations */
        /** adjustments */
        var adjustment = appState.adjustment;
        if (Object.keys(adjustment)
            .map(function (key) { return adjustment[key]; })
            .filter(Boolean).length) {
            operations.push(Serializer.serializeAdjustments(adjustment));
        }
        /** filters */
        var filter = appState.filter;
        if (filter.identifier !== 'identity') {
            operations.push(Serializer.serializeFilters(filter));
        }
        /** overlay */
        var overlay = appState.overlay;
        if (overlay.identifier !== 'identity') {
            spriteOptions.push(Serializer.serialzeOverlay(overlay));
        }
        /** frame */
        var frame = appState.frame;
        if (frame.identifier !== 'identity') {
            spriteOptions.push(this.serialzeFrame(frame));
        }
        /** focus */
        var focus = appState.focus;
        if (focus.identifier !== 'identity') {
            operations.push(this.serialzeFocus(focus));
        }
        /** transform */
        if (appState.transform && appState.transform.end.x !== 0 && appState.transform.end.y !== 0) {
            var _a = this.serializeTransform(appState.transform), transform = _a.transform, orientation_1 = _a.orientation;
            operations.push(transform);
            operations.push(orientation_1);
        }
        /** sprites */
        if (appState.sprite) {
            appState.sprite.spriteIdList.forEach(function (id) {
                var common = appState.sprite.common[id];
                switch (common.tool) {
                    case 'sticker':
                        // eslint-disable-next-line no-case-declarations
                        var sticker = appState.sprite.sticker[id];
                        spriteOptions.push(_this.serializeSticker(sticker, common));
                        break;
                    case 'text':
                        // eslint-disable-next-line no-case-declarations
                        var text = appState.sprite.text[id];
                        spriteOptions.push(_this.serializeText(text, common));
                        break;
                    case 'textdesign':
                        // eslint-disable-next-line no-case-declarations
                        var textdesign = appState.sprite.textdesign[id];
                        spriteOptions.push(_this.serializeTextDesign(textdesign, common));
                        break;
                }
            });
        }
        /** brush */
        if (appState.brush.strokes.length) {
            spriteOptions.push({
                type: 'brush',
                options: {
                    paths: appState.brush.strokes.map(function (stroke) {
                        return {
                            points: stroke.path.controlPoints.map(_this.relativeToImageDimensions),
                            brush: {
                                color: { rgba: stroke.brush.color },
                                size: _this.relativeToShotestImageEdge(stroke.brush.size),
                                hardness: stroke.brush.hardness,
                            },
                        };
                    }),
                },
            });
        }
        if (spriteOptions.length) {
            var spriteOperation = {
                type: 'sprite',
                options: {
                    sprites: spriteOptions,
                },
            };
            operations.push(spriteOperation);
        }
        var assetLibrary = {
            assets: { stickers: appState.customStickers || [] },
        };
        return {
            version: Serializer.version,
            meta: meta,
            image: image,
            operations: operations,
            assetLibrary: assetLibrary,
        };
    };
    Serializer.prototype.serialzeFrame = function (frame) {
        return {
            type: 'frame',
            options: {
                identifier: frame.identifier,
                alpha: frame.opacity,
                tintColor: { rgba: frame.color },
                size: this.relativeToShotestImageEdge(frame.width),
            },
        };
    };
    Serializer.prototype.serialzeFocus = function (focus) {
        var hypotenuse = Math.sqrt(Math.pow(this.previewSize.width, 2) + Math.pow(this.previewSize.height, 2));
        switch (focus.identifier) {
            case index.FocusIdentifier.LINEAR:
                return {
                    type: 'focus',
                    options: {
                        type: 'linear',
                        options: {
                            start: this.previewRelativeToImageDimensions(focus.linear.start),
                            end: this.previewRelativeToImageDimensions(focus.linear.end),
                            blurRadius: this.relativeToShotestImageEdge(focus.linear.blurRadius),
                        },
                    },
                };
            case index.FocusIdentifier.RADIAL:
                return {
                    type: 'focus',
                    options: {
                        type: 'radial',
                        options: {
                            start: this.previewRelativeToImageDimensions(focus.radial.center),
                            end: this.previewRelativeToImageDimensions(this.getPointInDirection(focus.radial.center, 0, focus.radial.radius)),
                            blurRadius: this.relativeToShotestImageEdge(focus.radial.blurRadius),
                            gradientRadius: 0.1,
                        },
                    },
                };
            case index.FocusIdentifier.MIRRORED:
                // eslint-disable-next-line no-case-declarations
                var mirrored = focus.mirrored;
                return {
                    type: 'focus',
                    options: {
                        type: 'mirrored',
                        options: {
                            start: this.previewRelativeToImageDimensions(this.getPointInDirection(mirrored.origin, mirrored.rotation, hypotenuse / 2)),
                            end: this.previewRelativeToImageDimensions(this.getPointInDirection(mirrored.origin, mirrored.rotation, -hypotenuse / 2)),
                            size: this.relativeToShotestImageEdge(focus.mirrored.size),
                            blurRadius: this.relativeToShotestImageEdge(focus.mirrored.blurRadius),
                            gradientSize: 0.1,
                        },
                    },
                };
            default:
                return {
                    type: 'focus',
                    options: {
                        type: 'gaussian',
                        options: {
                            blurRadius: this.relativeToShotestImageEdge(focus.gaussian.blurRadius),
                        },
                    },
                };
        }
    };
    Serializer.prototype.serializeSticker = function (sticker, common) {
        return {
            type: 'sticker',
            options: {
                position: this.previewRelativeToImageDimensions(common.position),
                dimensions: {
                    x: this.relativeToShotestImageEdge(common.size.width),
                    y: this.relativeToShotestImageEdge(common.size.height),
                },
                rotation: common.rotation,
                flipVertically: false,
                flipHorizontally: false,
                identifier: sticker.identifier,
                alpha: sticker.opacity,
                tintColor: { rgba: sticker.tintColor },
                tintMode: sticker.tintMode,
            },
        };
    };
    Serializer.prototype.serializeText = function (text, common) {
        return {
            type: 'text',
            options: {
                position: this.previewRelativeToImageDimensions(common.position),
                rotation: common.rotation,
                flipVertically: false,
                flipHorizontally: false,
                fontIdentifier: text.identifier,
                fontSize: this.relativeToShotestImageEdge(text.fontSize),
                maxWidth: this.serializeMaxWidth(text.width),
                text: text.text,
                lineHeight: text.lineHeight,
                color: { rgba: text.textColor },
                backgroundColor: { rgba: text.backgroundColor },
                alignment: text.alignment,
            },
        };
    };
    Serializer.prototype.serializeTextDesign = function (textdesign, common) {
        return {
            type: 'textdesign',
            options: {
                position: this.previewRelativeToImageDimensions(common.position),
                rotation: common.rotation,
                flipVertically: false,
                flipHorizontally: false,
                identifier: textdesign.identifier,
                inverted: textdesign.isInverted,
                width: this.serializeMaxWidth(textdesign.width),
                seed: textdesign.seed,
                padding: textdesign.padding,
                text: textdesign.text,
                color: { rgba: textdesign.color },
            },
        };
    };
    Serializer.prototype.serializeTransform = function (state) {
        var start = this.relativeToImageDimensions(state.start);
        var end = this.relativeToImageDimensions(state.end);
        var transform = {
            type: 'transform',
            options: {
                start: start,
                end: end,
                rotation: state.rotation,
                // dimensions: state.dimensions,
                meta: {
                    identifier: state.identifier,
                },
            },
        };
        var orientation = {
            type: 'orientation',
            options: {
                rotation: state.outputRotation,
                flipHorizontally: state.flipHorizontally,
                flipVertically: state.flipVertically,
            },
        };
        return { transform: transform, orientation: orientation };
    };
    Serializer.version = '3.8.0';
    return Serializer;
}());

var Data64 = function (type) {
    if (type === void 0) { type = index.ImageFormat.PNG; }
    return "data:" + type + ";base64,";
};
var Deserializer = /** @class */ (function () {
    function Deserializer(previewPosition, previewSize, transformedImageSize, untransformedImageSize) {
        var _this = this;
        this.deserializeMaxWidth = function (width) {
            return width * _this.untransformedImageSize.width;
        };
        this.previewRelativeToImageDimensions = function (point) {
            return _this.relativeToOutputContainer(new index.Vector2(point).multiply(index.Vector2.fromSize(_this.previewSize)));
        };
        this.relativeToOutputContainer = function (point) {
            return new index.Vector2(point).add(new index.Vector2(_this.previewPosition));
        };
        this.relativeToImageDimensions = function (point) {
            return new index.Vector2(point).multiply(index.Vector2.fromSize(_this.previewSize));
        };
        // relative to shortest edge of image
        this.relativeToShotestImageEdge = function (value) {
            return value * Math.min(_this.transformedImageSize.height, _this.transformedImageSize.width);
        };
        this.previewPosition = previewPosition;
        this.previewSize = previewSize;
        this.transformedImageSize = transformedImageSize;
        this.untransformedImageSize = untransformedImageSize;
    }
    Deserializer.deserializeFilter = function (filter) {
        return {
            intensity: filter.intensity,
            identifier: filter.identifier,
        };
    };
    Deserializer.deserializeAdjustments = function (adjustment) {
        return index.__assign({}, adjustment);
    };
    Deserializer.deserializeOverlay = function (overlay) {
        return {
            identifier: overlay.identifier,
            opacity: overlay.intensity,
            // lower case with spaces to camelCase
            blendMode: overlay.blendMode.replace(/([ _][a-z])/g, function (group) {
                return group
                    .toUpperCase()
                    .replace(' ', '')
                    .replace('_', '');
            }),
        };
    };
    Deserializer.initializeEmptyOrientation = function () {
        return {
            outputRotation: 0,
            flipHorizontally: false,
            flipVertically: false,
        };
    };
    Deserializer.initializeEmptyTransform = function () {
        return {
            start: { x: 0, y: 0 },
            end: { x: 0, y: 0 },
            rotation: 0,
        };
    };
    Deserializer.deserialzeColor = function (color) {
        if (color) {
            // @ts-ignore TS2339
            if (color.rgba) {
                // @ts-ignore TS2339
                return color.rgba;
                // @ts-ignore TS2339
            }
        }
        return undefined;
    };
    Deserializer.validateVersion = function (version) {
        return Deserializer.version === version;
    };
    Deserializer.checkIfPlatformHTML = function (platform) {
        return platform === 'html5';
    };
    Deserializer.deserializeStickers = function (sticker) {
        return {
            identifier: sticker.identifier,
            opacity: sticker.alpha || 0,
            tintMode: (sticker.tintMode || 'none'),
            tintColor: Deserializer.deserialzeColor(sticker.tintColor),
        };
    };
    Deserializer.prototype.deserialise = function (state, errorHandler) {
        var _this = this;
        if (typeof state !== 'string') {
            var appState_1 = {};
            if (!Deserializer.validateVersion(state.version)) {
                errorHandler({ identifier: 'unsupportedVersion', message: state.version });
                return null;
            }
            if (state.meta ? !Deserializer.checkIfPlatformHTML(state.meta.platform) : false) {
                // eslint-disable-next-line no-console
                console.warn('Platform mismatch');
            }
            /** Image */
            if (state.image) {
                appState_1.image = {
                    width: state.image.width,
                    height: state.image.height,
                    data: state.image.data ? state.image.data.replace(Data64(), '') : '',
                };
                appState_1.image.data = appState_1.image.data ? Data64() + appState_1.image.data : '';
            }
            state.operations.forEach(function (operation) {
                switch (operation.type) {
                    case 'filter':
                        appState_1.filter = Deserializer.deserializeFilter(operation.options);
                        break;
                    case 'adjustments':
                        appState_1.adjustment = Deserializer.deserializeAdjustments(operation.options);
                        break;
                    case 'focus':
                        appState_1.focus = _this.deserializeFocus(operation.options);
                        break;
                    case 'transform':
                        if (!appState_1.transform) {
                            appState_1.transform = Deserializer.initializeEmptyOrientation();
                        }
                        appState_1.transform.start = _this.relativeToImageDimensions(operation.options.start);
                        appState_1.transform.end = _this.relativeToImageDimensions(operation.options.end);
                        appState_1.transform.rotation = operation.options.rotation || 0;
                        break;
                    case 'orientation':
                        if (!appState_1.transform) {
                            appState_1.transform = Deserializer.initializeEmptyTransform();
                        }
                        appState_1.transform.outputRotation = operation.options.rotation;
                        appState_1.transform.flipHorizontally = operation.options.flipHorizontally || false;
                        appState_1.transform.flipVertically = operation.options.flipVertically || false;
                        break;
                    case 'sprite':
                        // eslint-disable-next-line no-case-declarations
                        var sprites = operation.options.sprites;
                        sprites.forEach(function (sprite) {
                            switch (sprite.type) {
                                case 'frame':
                                    appState_1.frame = _this.deserializeFrame(sprite.options);
                                    break;
                                case 'overlay':
                                    appState_1.overlay = Deserializer.deserializeOverlay(sprite.options);
                                    break;
                                case 'sticker':
                                case 'text':
                                case 'textdesign':
                                    if (!appState_1.sprite) {
                                        appState_1.sprite = {
                                            spriteIdList: [],
                                            sticker: {},
                                            text: {},
                                            textdesign: {},
                                            common: {},
                                        };
                                    }
                                    // eslint-disable-next-line no-case-declarations
                                    var id = index.uuid();
                                    appState_1.sprite.spriteIdList.push(id);
                                    appState_1.sprite.common[id] = {
                                        position: _this.previewRelativeToImageDimensions(sprite.options.position),
                                        tool: index.Tool.STICKER,
                                        rotation: sprite.options.rotation || 0,
                                        flipHorizontally: sprite.options.flipHorizontally,
                                        flipVertically: sprite.options.flipVertically,
                                    };
                                    if (sprite.type === index.Tool.STICKER) {
                                        appState_1.sprite.common[id].size = {
                                            width: _this.relativeToShotestImageEdge(sprite.options.dimensions.x),
                                            height: _this.relativeToShotestImageEdge(sprite.options.dimensions.y),
                                        };
                                        appState_1.sprite.sticker[id] = Deserializer.deserializeStickers(sprite.options);
                                    }
                                    else if (sprite.type === index.Tool.TEXT) {
                                        appState_1.sprite.common[id].tool = index.Tool.TEXT;
                                        appState_1.sprite.text[id] = _this.deserializeTexts(sprite.options);
                                    }
                                    else if (sprite.type === index.Tool.TEXT_DESIGN) {
                                        appState_1.sprite.common[id].tool = index.Tool.TEXT_DESIGN;
                                        appState_1.sprite.textdesign[id] = _this.deserializeTextDesign(sprite.options);
                                    }
                                    break;
                            }
                        });
                        break;
                }
            });
            if (state.assetLibrary) {
                appState_1.customStickers =
                    (state.assetLibrary && state.assetLibrary.assets && state.assetLibrary.assets.stickers) || [];
                appState_1.customStickers = appState_1.customStickers.map(function (c) {
                    var img = c.raster.data.replace(Data64(c.raster.type), '');
                    return index.__assign({}, c, { raster: index.__assign({}, c.raster, { data: Data64(c.raster.type) + img }) });
                });
            }
            return appState_1;
        }
        throw new Error('Invalid input of type string, please provide an object');
    };
    Deserializer.prototype.deserializeFrame = function (frame) {
        return {
            identifier: frame.identifier,
            opacity: frame.alpha,
            width: this.relativeToShotestImageEdge(frame.size),
            color: Deserializer.deserialzeColor(frame.tintColor),
        };
    };
    Deserializer.prototype.deserializeFocus = function (focus) {
        switch (focus.type) {
            case 'linear':
                return {
                    identifier: 'linear',
                    linear: this.deserializeLinearFocus(focus.options),
                };
            case 'gaussian':
                return {
                    identifier: 'gaussian',
                    gaussian: this.deserializeGaussianFocus(focus.options),
                };
            case 'radial':
                return {
                    identifier: 'radial',
                    radial: this.deserializeRadialFocus(focus.options),
                };
            case 'mirrored':
                return {
                    identifier: 'mirrored',
                    mirrored: this.deserializeMirroredFocus(focus.options),
                };
        }
        return undefined;
    };
    Deserializer.prototype.deserializeRadialFocus = function (radialFocus) {
        return {
            center: this.previewRelativeToImageDimensions(radialFocus.start),
            radius: this.previewRelativeToImageDimensions(radialFocus.start).subtract(this.previewRelativeToImageDimensions(radialFocus.end)).magnitude,
            blurRadius: this.relativeToShotestImageEdge(radialFocus.blurRadius),
        };
    };
    Deserializer.prototype.deserializeLinearFocus = function (linearFocus) {
        return {
            start: this.previewRelativeToImageDimensions(linearFocus.start),
            end: this.previewRelativeToImageDimensions(linearFocus.end),
            blurRadius: this.relativeToShotestImageEdge(linearFocus.blurRadius),
        };
    };
    Deserializer.prototype.deserializeGaussianFocus = function (gaussianFocus) {
        return {
            blurRadius: this.relativeToShotestImageEdge(gaussianFocus.blurRadius),
        };
    };
    Deserializer.prototype.deserializeMirroredFocus = function (mirroredFocus) {
        var distance = this.previewRelativeToImageDimensions(mirroredFocus.start).subtract(this.previewRelativeToImageDimensions(mirroredFocus.end));
        return {
            origin: this.previewRelativeToImageDimensions(mirroredFocus.start)
                .add(this.previewRelativeToImageDimensions(mirroredFocus.end))
                .divide(2),
            rotation: Math.atan2(distance.y, distance.x),
            size: this.relativeToShotestImageEdge(mirroredFocus.size),
            blurRadius: this.relativeToShotestImageEdge(mirroredFocus.blurRadius),
        };
    };
    Deserializer.prototype.deserializeTexts = function (text) {
        return {
            identifier: text.fontIdentifier,
            fontSize: this.relativeToShotestImageEdge(text.fontSize),
            width: this.deserializeMaxWidth(text.maxWidth),
            alignment: text.alignment,
            textColor: Deserializer.deserialzeColor(text.color),
            backgroundColor: Deserializer.deserialzeColor(text.backgroundColor),
            lineHeight: text.lineHeight,
            text: text.text,
        };
    };
    Deserializer.prototype.deserializeTextDesign = function (textDesign) {
        return {
            identifier: textDesign.identifier,
            width: this.deserializeMaxWidth(textDesign.width),
            padding: textDesign.padding,
            color: Deserializer.deserialzeColor(textDesign.color),
            seed: textDesign.seed,
            text: textDesign.text,
            isInverted: textDesign.inverted,
        };
    };
    Deserializer.version = '3.8.0';
    return Deserializer;
}());

exports.Deserializer = Deserializer;
exports.Serializer = Serializer;
