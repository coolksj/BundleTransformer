/*!
 * Less - Leaner CSS v3.0.1
 * http://lesscss.org
 *
 * Copyright (c) 2009-2018, Alexis Sellier <self@cloudhead.net>
 * Licensed under the Apache-2.0 License.
 *
 */

 /** * @license Apache-2.0
 */
var Less = (function(virtualFileManager /*BT+*/){
	var modules = {},
		loadedModules = {},
		require = function(name) {
			var result;

			if (typeof loadedModules[name] !== 'undefined') {
				result = loadedModules[name];
			}
			else {
				if (typeof modules[name] !== 'undefined') {
					result = modules[name].call(this);

					loadedModules[name] = (typeof result !== 'undefined') ? result : null;
					modules[name] = undefined;
				}
				else {
					throw new Error("Can't load '" + name + "' module.");
				}
			}

			return result;
		}
		;

	//#region URL: /data
	modules['/data'] = function () {
		var exports = {
			colors: require('/data/colors'),
			unitConversions: require('/data/unit-conversions')
		};

		return exports;
	};
	//#endregion

	//#region URL: /data/colors
	modules['/data/colors'] = function () {
		var exports = exports = {
			'aliceblue':'#f0f8ff',
			'antiquewhite':'#faebd7',
			'aqua':'#00ffff',
			'aquamarine':'#7fffd4',
			'azure':'#f0ffff',
			'beige':'#f5f5dc',
			'bisque':'#ffe4c4',
			'black':'#000000',
			'blanchedalmond':'#ffebcd',
			'blue':'#0000ff',
			'blueviolet':'#8a2be2',
			'brown':'#a52a2a',
			'burlywood':'#deb887',
			'cadetblue':'#5f9ea0',
			'chartreuse':'#7fff00',
			'chocolate':'#d2691e',
			'coral':'#ff7f50',
			'cornflowerblue':'#6495ed',
			'cornsilk':'#fff8dc',
			'crimson':'#dc143c',
			'cyan':'#00ffff',
			'darkblue':'#00008b',
			'darkcyan':'#008b8b',
			'darkgoldenrod':'#b8860b',
			'darkgray':'#a9a9a9',
			'darkgrey':'#a9a9a9',
			'darkgreen':'#006400',
			'darkkhaki':'#bdb76b',
			'darkmagenta':'#8b008b',
			'darkolivegreen':'#556b2f',
			'darkorange':'#ff8c00',
			'darkorchid':'#9932cc',
			'darkred':'#8b0000',
			'darksalmon':'#e9967a',
			'darkseagreen':'#8fbc8f',
			'darkslateblue':'#483d8b',
			'darkslategray':'#2f4f4f',
			'darkslategrey':'#2f4f4f',
			'darkturquoise':'#00ced1',
			'darkviolet':'#9400d3',
			'deeppink':'#ff1493',
			'deepskyblue':'#00bfff',
			'dimgray':'#696969',
			'dimgrey':'#696969',
			'dodgerblue':'#1e90ff',
			'firebrick':'#b22222',
			'floralwhite':'#fffaf0',
			'forestgreen':'#228b22',
			'fuchsia':'#ff00ff',
			'gainsboro':'#dcdcdc',
			'ghostwhite':'#f8f8ff',
			'gold':'#ffd700',
			'goldenrod':'#daa520',
			'gray':'#808080',
			'grey':'#808080',
			'green':'#008000',
			'greenyellow':'#adff2f',
			'honeydew':'#f0fff0',
			'hotpink':'#ff69b4',
			'indianred':'#cd5c5c',
			'indigo':'#4b0082',
			'ivory':'#fffff0',
			'khaki':'#f0e68c',
			'lavender':'#e6e6fa',
			'lavenderblush':'#fff0f5',
			'lawngreen':'#7cfc00',
			'lemonchiffon':'#fffacd',
			'lightblue':'#add8e6',
			'lightcoral':'#f08080',
			'lightcyan':'#e0ffff',
			'lightgoldenrodyellow':'#fafad2',
			'lightgray':'#d3d3d3',
			'lightgrey':'#d3d3d3',
			'lightgreen':'#90ee90',
			'lightpink':'#ffb6c1',
			'lightsalmon':'#ffa07a',
			'lightseagreen':'#20b2aa',
			'lightskyblue':'#87cefa',
			'lightslategray':'#778899',
			'lightslategrey':'#778899',
			'lightsteelblue':'#b0c4de',
			'lightyellow':'#ffffe0',
			'lime':'#00ff00',
			'limegreen':'#32cd32',
			'linen':'#faf0e6',
			'magenta':'#ff00ff',
			'maroon':'#800000',
			'mediumaquamarine':'#66cdaa',
			'mediumblue':'#0000cd',
			'mediumorchid':'#ba55d3',
			'mediumpurple':'#9370d8',
			'mediumseagreen':'#3cb371',
			'mediumslateblue':'#7b68ee',
			'mediumspringgreen':'#00fa9a',
			'mediumturquoise':'#48d1cc',
			'mediumvioletred':'#c71585',
			'midnightblue':'#191970',
			'mintcream':'#f5fffa',
			'mistyrose':'#ffe4e1',
			'moccasin':'#ffe4b5',
			'navajowhite':'#ffdead',
			'navy':'#000080',
			'oldlace':'#fdf5e6',
			'olive':'#808000',
			'olivedrab':'#6b8e23',
			'orange':'#ffa500',
			'orangered':'#ff4500',
			'orchid':'#da70d6',
			'palegoldenrod':'#eee8aa',
			'palegreen':'#98fb98',
			'paleturquoise':'#afeeee',
			'palevioletred':'#d87093',
			'papayawhip':'#ffefd5',
			'peachpuff':'#ffdab9',
			'peru':'#cd853f',
			'pink':'#ffc0cb',
			'plum':'#dda0dd',
			'powderblue':'#b0e0e6',
			'purple':'#800080',
			'rebeccapurple':'#663399',
			'red':'#ff0000',
			'rosybrown':'#bc8f8f',
			'royalblue':'#4169e1',
			'saddlebrown':'#8b4513',
			'salmon':'#fa8072',
			'sandybrown':'#f4a460',
			'seagreen':'#2e8b57',
			'seashell':'#fff5ee',
			'sienna':'#a0522d',
			'silver':'#c0c0c0',
			'skyblue':'#87ceeb',
			'slateblue':'#6a5acd',
			'slategray':'#708090',
			'slategrey':'#708090',
			'snow':'#fffafa',
			'springgreen':'#00ff7f',
			'steelblue':'#4682b4',
			'tan':'#d2b48c',
			'teal':'#008080',
			'thistle':'#d8bfd8',
			'tomato':'#ff6347',
			'turquoise':'#40e0d0',
			'violet':'#ee82ee',
			'wheat':'#f5deb3',
			'white':'#ffffff',
			'whitesmoke':'#f5f5f5',
			'yellow':'#ffff00',
			'yellowgreen':'#9acd32'
		};

		return exports;
	};
	//#endregion

	//#region URL: /data/unit-conversions
	modules['/data/unit-conversions'] = function () {
		var exports = {
			length: {
				'm': 1,
				'cm': 0.01,
				'mm': 0.001,
				'in': 0.0254,
				'px': 0.0254 / 96,
				'pt': 0.0254 / 72,
				'pc': 0.0254 / 72 * 12
			},
			duration: {
				's': 1,
				'ms': 0.001
			},
			angle: {
				'rad': 1 / (2 * Math.PI),
				'deg': 1 / 360,
				'grad': 1 / 400,
				'turn': 1
			}
		};

		return exports;
	};
	//#endregion

	//#region URL: /environment/abstract-file-manager
	modules['/environment/abstract-file-manager'] = function () {
		var abstractFileManager = function() {
		};

		abstractFileManager.prototype.getPath = function (filename) {
			var j = filename.lastIndexOf('?');
			if (j > 0) {
				filename = filename.slice(0, j);
			}
			j = filename.lastIndexOf('/');
			if (j < 0) {
				j = filename.lastIndexOf('\\');
			}
			if (j < 0) {
				return "";
			}
			return filename.slice(0, j + 1);
		};

		abstractFileManager.prototype.tryAppendExtension = function(path, ext) {
			return /(\.[a-z]*$)|([\?;].*)$/.test(path) ? path : path + ext;
		};

		abstractFileManager.prototype.tryAppendLessExtension = function(path) {
			return this.tryAppendExtension(path, '.less');
		};

		abstractFileManager.prototype.supportsSync = function() {
			return false;
		};

		abstractFileManager.prototype.alwaysMakePathsAbsolute = function() {
			return false;
		};

		abstractFileManager.prototype.isPathAbsolute = function(filename) {
			return (/^(?:[a-z-]+:|\/|\\|#)/i).test(filename);
		};
		// TODO: pull out / replace?
		abstractFileManager.prototype.join = function(basePath, laterPath) {
			if (!basePath) {
				return laterPath;
			}
			return basePath + laterPath;
		};

		abstractFileManager.prototype.pathDiff = function pathDiff(url, baseUrl) {
			// diff between two paths to create a relative path

			var urlParts = this.extractUrlParts(url),
				baseUrlParts = this.extractUrlParts(baseUrl),
				i, max, urlDirectories, baseUrlDirectories, diff = "";
			if (urlParts.hostPart !== baseUrlParts.hostPart) {
				return "";
			}
			max = Math.max(baseUrlParts.directories.length, urlParts.directories.length);
			for (i = 0; i < max; i++) {
				if (baseUrlParts.directories[i] !== urlParts.directories[i]) { break; }
			}
			baseUrlDirectories = baseUrlParts.directories.slice(i);
			urlDirectories = urlParts.directories.slice(i);
			for (i = 0; i < baseUrlDirectories.length - 1; i++) {
				diff += "../";
			}
			for (i = 0; i < urlDirectories.length - 1; i++) {
				diff += urlDirectories[i] + "/";
			}
			return diff;
		};
		// helper function, not part of API
		abstractFileManager.prototype.extractUrlParts = function extractUrlParts(url, baseUrl) {
			// urlParts[1] = protocol://hostname/ OR /
			// urlParts[2] = / if path relative to host base
			// urlParts[3] = directories
			// urlParts[4] = filename
			// urlParts[5] = parameters

			var urlPartsRegex = /^((?:[a-z-]+:)?\/{2}(?:[^\/\?#]*\/)|([\/\\]))?((?:[^\/\\\?#]*[\/\\])*)([^\/\\\?#]*)([#\?].*)?$/i,
				urlParts = url.match(urlPartsRegex),
				returner = {}, rawDirectories = [], directories = [], i, baseUrlParts;

			if (!urlParts) {
				throw new Error("Could not parse sheet href - '" + url + "'");
			}

			// Stylesheets in IE don't always return the full path
			if (baseUrl && (!urlParts[1] || urlParts[2])) {
				baseUrlParts = baseUrl.match(urlPartsRegex);
				if (!baseUrlParts) {
					throw new Error("Could not parse page url - '" + baseUrl + "'");
				}
				urlParts[1] = urlParts[1] || baseUrlParts[1] || "";
				if (!urlParts[2]) {
					urlParts[3] = baseUrlParts[3] + urlParts[3];
				}
			}

			if (urlParts[3]) {
				rawDirectories = urlParts[3].replace(/\\/g, "/").split("/");

				// collapse '..' and skip '.'
				for (i = 0; i < rawDirectories.length; i++) {

					if (rawDirectories[i] === "..") {
						directories.pop();
					}
					else if (rawDirectories[i] !== ".") {
						directories.push(rawDirectories[i]);
					}
				
				}
			}

			returner.hostPart = urlParts[1];
			returner.directories = directories;
			returner.rawPath = (urlParts[1] || "") + rawDirectories.join("/");
			returner.path = (urlParts[1] || "") + directories.join("/");
			returner.filename = urlParts[4];
			returner.fileUrl = returner.path + (urlParts[4] || "");
			returner.url = returner.fileUrl + (urlParts[5] || "");
			return returner;
		};

		return abstractFileManager;
	};
	//#endregion

	//#region URL: /environment/environment
	modules['/environment/environment'] = function () {
		/**
		 * @todo Document why this abstraction exists, and the relationship between
		 *       environment, file managers, and plugin manager
		 */

		/*BT-
		var logger = require("/logger");
		*/
		var environment = function(externalEnvironment, fileManagers) {
			this.fileManagers = fileManagers || [];
			externalEnvironment = externalEnvironment || {};

			var optionalFunctions = ["encodeBase64", "mimeLookup", "charsetLookup"/*BT- , "getSourceMapGenerator"*/],
				requiredFunctions = [],
				functions = requiredFunctions.concat(optionalFunctions);

			for (var i = 0; i < functions.length; i++) {
				var propName = functions[i],
					environmentFunc = externalEnvironment[propName];
				if (environmentFunc) {
					this[propName] = environmentFunc.bind(externalEnvironment);
				} else if (i < requiredFunctions.length) {
					this.warn("missing required function in environment - " + propName);
				}
			}
		};

		environment.prototype.getFileManager = function (filename, currentDirectory, options, environment, isSync) {
			var logger = Less.logger; //BT+
			if (!filename) {
				logger.warn("getFileManager called with no filename.. Please report this issue. continuing.");
			}
			if (currentDirectory == null) {
				logger.warn("getFileManager called with null directory.. Please report this issue. continuing.");
			}

			var fileManagers = this.fileManagers;
			/*BT-
			if (options.pluginManager) {
				fileManagers = [].concat(fileManagers).concat(options.pluginManager.getFileManagers());
			}
			*/
			for (var i = fileManagers.length - 1; i >= 0 ; i--) {
				var fileManager = fileManagers[i];
				if (fileManager[isSync ? "supportsSync" : "supports"](filename, currentDirectory, options, environment)) {
					return fileManager;
				}
			}
			return null;
		};

		environment.prototype.addFileManager = function (fileManager) {
			this.fileManagers.push(fileManager);
		};

		environment.prototype.clearFileManagers = function () {
			this.fileManagers = [];
		};

		return environment;
	};
	//#endregion

	//#region URL: /functions
	modules['/functions'] = function () {
		var exports = function(environment) {
			var functions = {
				functionRegistry: require("/functions/function-registry"),
				functionCaller: require("/functions/function-caller")
			};

			// register functions
			require("/functions/boolean");
			require("/functions/default");
			require("/functions/color");
			require("/functions/color-blending");
			require("/functions/data-uri")(environment);
			require("/functions/math");
			require("/functions/number");
			require("/functions/string");
			require("/functions/svg")(environment);
			require("/functions/types");

			return functions;
		};

		return exports;
	};
	//#endregion

	//#region URL: /functions/boolean
	modules['/functions/boolean'] = function () {
		var functionRegistry = require("/functions/function-registry"),
			Anonymous = require("/tree/anonymous"),
			Keyword = require("/tree/keyword");

		functionRegistry.addMultiple({
			boolean: function(condition) {
				return condition ? Keyword.True : Keyword.False;
			},

			'if': function(condition, trueValue, falseValue) {
				return condition ? trueValue
					: (falseValue || new Anonymous);
			}
		});
	};
	//#endregion

	//#region URL: /functions/color
	modules['/functions/color'] = function () {
		var Dimension = require("/tree/dimension"),
			Color = require("/tree/color"),
			Quoted = require("/tree/quoted"),
			Anonymous = require("/tree/anonymous"),
			functionRegistry = require("/functions/function-registry"),
			colorFunctions;

		function clamp(val) {
			return Math.min(1, Math.max(0, val));
		}
		function hsla(color) {
			return colorFunctions.hsla(color.h, color.s, color.l, color.a);
		}
		function number(n) {
			if (n instanceof Dimension) {
				return parseFloat(n.unit.is('%') ? n.value / 100 : n.value);
			} else if (typeof n === 'number') {
				return n;
			} else {
				throw {
					type: "Argument",
					message: "color functions take numbers as parameters"
				};
			}
		}
		function scaled(n, size) {
			if (n instanceof Dimension && n.unit.is('%')) {
				return parseFloat(n.value * size / 100);
			} else {
				return number(n);
			}
		}
		colorFunctions = {
			rgb: function (r, g, b) {
				return colorFunctions.rgba(r, g, b, 1.0);
			},
			rgba: function (r, g, b, a) {
				var rgb = [r, g, b].map(function (c) { return scaled(c, 255); });
				a = number(a);
				return new Color(rgb, a);
			},
			hsl: function (h, s, l) {
				return colorFunctions.hsla(h, s, l, 1.0);
			},
			hsla: function (h, s, l, a) {

				var m1, m2;

				function hue(h) {
					h = h < 0 ? h + 1 : (h > 1 ? h - 1 : h);
					if (h * 6 < 1) {
						return m1 + (m2 - m1) * h * 6;
					}
					else if (h * 2 < 1) {
						return m2;
					}
					else if (h * 3 < 2) {
						return m1 + (m2 - m1) * (2 / 3 - h) * 6;
					}
					else {
						return m1;
					}
				}

				h = (number(h) % 360) / 360;
				s = clamp(number(s)); l = clamp(number(l)); a = clamp(number(a));

				m2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
				m1 = l * 2 - m2;

				return colorFunctions.rgba(hue(h + 1 / 3) * 255,
					hue(h)       * 255,
					hue(h - 1 / 3) * 255,
					a);
			},

			hsv: function(h, s, v) {
				return colorFunctions.hsva(h, s, v, 1.0);
			},

			hsva: function(h, s, v, a) {
				h = ((number(h) % 360) / 360) * 360;
				s = number(s); v = number(v); a = number(a);

				var i, f;
				i = Math.floor((h / 60) % 6);
				f = (h / 60) - i;

				var vs = [v,
					v * (1 - s),
					v * (1 - f * s),
					v * (1 - (1 - f) * s)];
				var perm = [[0, 3, 1],
					[2, 0, 1],
					[1, 0, 3],
					[1, 2, 0],
					[3, 1, 0],
					[0, 1, 2]];

				return colorFunctions.rgba(vs[perm[i][0]] * 255,
					vs[perm[i][1]] * 255,
					vs[perm[i][2]] * 255,
					a);
			},

			hue: function (color) {
				return new Dimension(color.toHSL().h);
			},
			saturation: function (color) {
				return new Dimension(color.toHSL().s * 100, '%');
			},
			lightness: function (color) {
				return new Dimension(color.toHSL().l * 100, '%');
			},
			hsvhue: function(color) {
				return new Dimension(color.toHSV().h);
			},
			hsvsaturation: function (color) {
				return new Dimension(color.toHSV().s * 100, '%');
			},
			hsvvalue: function (color) {
				return new Dimension(color.toHSV().v * 100, '%');
			},
			red: function (color) {
				return new Dimension(color.rgb[0]);
			},
			green: function (color) {
				return new Dimension(color.rgb[1]);
			},
			blue: function (color) {
				return new Dimension(color.rgb[2]);
			},
			alpha: function (color) {
				return new Dimension(color.toHSL().a);
			},
			luma: function (color) {
				return new Dimension(color.luma() * color.alpha * 100, '%');
			},
			luminance: function (color) {
				var luminance =
					(0.2126 * color.rgb[0] / 255) +
						(0.7152 * color.rgb[1] / 255) +
						(0.0722 * color.rgb[2] / 255);

				return new Dimension(luminance * color.alpha * 100, '%');
			},
			saturate: function (color, amount, method) {
				// filter: saturate(3.2);
				// should be kept as is, so check for color
				if (!color.rgb) {
					return null;
				}
				var hsl = color.toHSL();

				if (typeof method !== "undefined" && method.value === "relative") {
					hsl.s +=  hsl.s * amount.value / 100;
				}
				else {
					hsl.s += amount.value / 100;
				}
				hsl.s = clamp(hsl.s);
				return hsla(hsl);
			},
			desaturate: function (color, amount, method) {
				var hsl = color.toHSL();

				if (typeof method !== "undefined" && method.value === "relative") {
					hsl.s -=  hsl.s * amount.value / 100;
				}
				else {
					hsl.s -= amount.value / 100;
				}
				hsl.s = clamp(hsl.s);
				return hsla(hsl);
			},
			lighten: function (color, amount, method) {
				var hsl = color.toHSL();

				if (typeof method !== "undefined" && method.value === "relative") {
					hsl.l +=  hsl.l * amount.value / 100;
				}
				else {
					hsl.l += amount.value / 100;
				}
				hsl.l = clamp(hsl.l);
				return hsla(hsl);
			},
			darken: function (color, amount, method) {
				var hsl = color.toHSL();

				if (typeof method !== "undefined" && method.value === "relative") {
					hsl.l -=  hsl.l * amount.value / 100;
				}
				else {
					hsl.l -= amount.value / 100;
				}
				hsl.l = clamp(hsl.l);
				return hsla(hsl);
			},
			fadein: function (color, amount, method) {
				var hsl = color.toHSL();

				if (typeof method !== "undefined" && method.value === "relative") {
					hsl.a +=  hsl.a * amount.value / 100;
				}
				else {
					hsl.a += amount.value / 100;
				}
				hsl.a = clamp(hsl.a);
				return hsla(hsl);
			},
			fadeout: function (color, amount, method) {
				var hsl = color.toHSL();

				if (typeof method !== "undefined" && method.value === "relative") {
					hsl.a -=  hsl.a * amount.value / 100;
				}
				else {
					hsl.a -= amount.value / 100;
				}
				hsl.a = clamp(hsl.a);
				return hsla(hsl);
			},
			fade: function (color, amount) {
				var hsl = color.toHSL();

				hsl.a = amount.value / 100;
				hsl.a = clamp(hsl.a);
				return hsla(hsl);
			},
			spin: function (color, amount) {
				var hsl = color.toHSL();
				var hue = (hsl.h + amount.value) % 360;

				hsl.h = hue < 0 ? 360 + hue : hue;

				return hsla(hsl);
			},
			//
			// Copyright (c) 2006-2009 Hampton Catlin, Natalie Weizenbaum, and Chris Eppstein
			// http://sass-lang.com
			//
			mix: function (color1, color2, weight) {
				if (!color1.toHSL || !color2.toHSL) {
					console.log(color2.type);
					console.dir(color2);
				}
				if (!weight) {
					weight = new Dimension(50);
				}
				var p = weight.value / 100.0;
				var w = p * 2 - 1;
				var a = color1.toHSL().a - color2.toHSL().a;

				var w1 = (((w * a == -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
				var w2 = 1 - w1;

				var rgb = [color1.rgb[0] * w1 + color2.rgb[0] * w2,
					color1.rgb[1] * w1 + color2.rgb[1] * w2,
					color1.rgb[2] * w1 + color2.rgb[2] * w2];

				var alpha = color1.alpha * p + color2.alpha * (1 - p);

				return new Color(rgb, alpha);
			},
			greyscale: function (color) {
				return colorFunctions.desaturate(color, new Dimension(100));
			},
			contrast: function (color, dark, light, threshold) {
				// filter: contrast(3.2);
				// should be kept as is, so check for color
				if (!color.rgb) {
					return null;
				}
				if (typeof light === 'undefined') {
					light = colorFunctions.rgba(255, 255, 255, 1.0);
				}
				if (typeof dark === 'undefined') {
					dark = colorFunctions.rgba(0, 0, 0, 1.0);
				}
				// Figure out which is actually light and dark:
				if (dark.luma() > light.luma()) {
					var t = light;
					light = dark;
					dark = t;
				}
				if (typeof threshold === 'undefined') {
					threshold = 0.43;
				} else {
					threshold = number(threshold);
				}
				if (color.luma() < threshold) {
					return light;
				} else {
					return dark;
				}
			},
			// Changes made in 2.7.0 - Reverted in 3.0.0
			// contrast: function (color, color1, color2, threshold) {
			//     // Return which of `color1` and `color2` has the greatest contrast with `color`
			//     // according to the standard WCAG contrast ratio calculation.
			//     // http://www.w3.org/TR/WCAG20/#contrast-ratiodef
			//     // The threshold param is no longer used, in line with SASS.
			//     // filter: contrast(3.2);
			//     // should be kept as is, so check for color
			//     if (!color.rgb) {
			//         return null;
			//     }
			//     if (typeof color1 === 'undefined') {
			//         color1 = colorFunctions.rgba(0, 0, 0, 1.0);
			//     }
			//     if (typeof color2 === 'undefined') {
			//         color2 = colorFunctions.rgba(255, 255, 255, 1.0);
			//     }
			//     var contrast1, contrast2;
			//     var luma = color.luma();
			//     var luma1 = color1.luma();
			//     var luma2 = color2.luma();
			//     // Calculate contrast ratios for each color
			//     if (luma > luma1) {
			//         contrast1 = (luma + 0.05) / (luma1 + 0.05);
			//     } else {
			//         contrast1 = (luma1 + 0.05) / (luma + 0.05);
			//     }
			//     if (luma > luma2) {
			//         contrast2 = (luma + 0.05) / (luma2 + 0.05);
			//     } else {
			//         contrast2 = (luma2 + 0.05) / (luma + 0.05);
			//     }
			//     if (contrast1 > contrast2) {
			//         return color1;
			//     } else {
			//         return color2;
			//     }
			// },
			argb: function (color) {
				return new Anonymous(color.toARGB());
			},
			color: function(c) {
				if ((c instanceof Quoted) &&
					(/^#([a-f0-9]{6}|[a-f0-9]{3})$/i.test(c.value))) {
					return new Color(c.value.slice(1));
				}
				if ((c instanceof Color) || (c = Color.fromKeyword(c.value))) {
					c.value = undefined;
					return c;
				}
				throw {
					type:    "Argument",
					message: "argument must be a color keyword or 3/6 digit hex e.g. #FFF"
				};
			},
			tint: function(color, amount) {
				return colorFunctions.mix(colorFunctions.rgb(255, 255, 255), color, amount);
			},
			shade: function(color, amount) {
				return colorFunctions.mix(colorFunctions.rgb(0, 0, 0), color, amount);
			}
		};
		functionRegistry.addMultiple(colorFunctions);
	};
	//#endregion

	//#region URL: /functions/color-blending
	modules['/functions/color-blending'] = function () {
		var Color = require('/tree/color'),
			functionRegistry = require('/functions/function-registry');

		// Color Blending
		// ref: http://www.w3.org/TR/compositing-1

		function colorBlend(mode, color1, color2) {
			var ab = color1.alpha, cb, // backdrop
				as = color2.alpha, cs, // source
				ar, cr, r = [];        // result

			ar = as + ab * (1 - as);
			for (var i = 0; i < 3; i++) {
				cb = color1.rgb[i] / 255;
				cs = color2.rgb[i] / 255;
				cr = mode(cb, cs);
				if (ar) {
					cr = (as * cs + ab * (cb -
						  as * (cb + cs - cr))) / ar;
				}
				r[i] = cr * 255;
			}

			return new Color(r, ar);
		}

		var colorBlendModeFunctions = {
			multiply: function(cb, cs) {
				return cb * cs;
			},
			screen: function(cb, cs) {
				return cb + cs - cb * cs;
			},
			overlay: function(cb, cs) {
				cb *= 2;
				return (cb <= 1) ?
					colorBlendModeFunctions.multiply(cb, cs) :
					colorBlendModeFunctions.screen(cb - 1, cs);
			},
			softlight: function(cb, cs) {
				var d = 1, e = cb;
				if (cs > 0.5) {
					e = 1;
					d = (cb > 0.25) ? Math.sqrt(cb)
						: ((16 * cb - 12) * cb + 4) * cb;
				}
				return cb - (1 - 2 * cs) * e * (d - cb);
			},
			hardlight: function(cb, cs) {
				return colorBlendModeFunctions.overlay(cs, cb);
			},
			difference: function(cb, cs) {
				return Math.abs(cb - cs);
			},
			exclusion: function(cb, cs) {
				return cb + cs - 2 * cb * cs;
			},

			// non-w3c functions:
			average: function(cb, cs) {
				return (cb + cs) / 2;
			},
			negation: function(cb, cs) {
				return 1 - Math.abs(cb + cs - 1);
			}
		};

		for (var f in colorBlendModeFunctions) {
			if (colorBlendModeFunctions.hasOwnProperty(f)) {
				colorBlend[f] = colorBlend.bind(null, colorBlendModeFunctions[f]);
			}
		}

		functionRegistry.addMultiple(colorBlend);
	};
	//#endregion

	//#region URL: /functions/data-uri
	modules['/functions/data-uri'] = function () {
		var exports = function(environment) {
			var Quoted = require("/tree/quoted"),
				URL = require("/tree/url"),
				utils = require('/utils'),
				functionRegistry = require("/functions/function-registry"),
				fallback = function(functionThis, node) {
					return new URL(node, functionThis.index, functionThis.currentFileInfo).eval(functionThis.context);
				}/*BT- ,
				logger = require('/logger')*/;

			functionRegistry.add("data-uri", function(mimetypeNode, filePathNode) {
				var logger = Less.logger; //BT+

				if (!filePathNode) {
					filePathNode = mimetypeNode;
					mimetypeNode = null;
				}

				var mimetype = mimetypeNode && mimetypeNode.value;
				var filePath = filePathNode.value;
				var currentFileInfo = this.currentFileInfo;
				var currentDirectory = currentFileInfo.relativeUrls ?
					currentFileInfo.currentDirectory : currentFileInfo.entryPath;

				var fragmentStart = filePath.indexOf('#');
				var fragment = '';
				if (fragmentStart !== -1) {
					fragment = filePath.slice(fragmentStart);
					filePath = filePath.slice(0, fragmentStart);
				}
				var context = utils.clone(this.context);
				context.rawBuffer = true;

				var queryStringStart = filePath.indexOf('?'); //BT+
				if (queryStringStart !== -1) { //BT+
					filePath = filePath.slice(0, queryStringStart); //BT+
				} //BT+

				var fileManager = environment.getFileManager(filePath, currentDirectory, context, environment, true);

				if (!fileManager) {
					return fallback(this, filePathNode);
				}

				var useBase64 = false;

				// detect the mimetype if not given
				if (!mimetypeNode) {

					mimetype = environment.mimeLookup(filePath);

					if (mimetype === "image/svg+xml") {
						useBase64 = false;
					} else {
						// use base 64 unless it's an ASCII or UTF-8 format
						var charset = environment.charsetLookup(mimetype);
						useBase64 = ['US-ASCII', 'UTF-8'].indexOf(charset) < 0;
					}
					if (useBase64) { mimetype += ';base64'; }
				}
				else {
					useBase64 = /;base64$/.test(mimetype);
				}

				var encoding = !useBase64 ? 'utf-8' : null; //BT+
				var fileSync = fileManager.loadFileSync(filePath, currentDirectory, context, environment, encoding /*BT+*/);
				if (!fileSync.contents) {
					logger.warn("Skipped data-uri embedding of " + filePath + " because file not found");
					return fallback(this, filePathNode || mimetypeNode);
				}
				var buf = fileSync.contents;
				if (useBase64 && !environment.encodeBase64) {
					return fallback(this, filePathNode);
				}

				buf = useBase64 ? environment.encodeBase64(buf) : encodeURIComponent(buf);

				var uri = "data:" + mimetype + ',' + buf + fragment;

				// IE8 cannot handle a data-uri larger than 32,768 characters. If this is exceeded
				// and the --ieCompat flag is enabled, return a normal url() instead.
				var DATA_URI_MAX = 32768;
				if (uri.length >= DATA_URI_MAX) {

					if (this.context.ieCompat !== false) {
						logger.warn("Skipped data-uri embedding of " + filePath + " because its size (" + uri.length +
							" characters) exceeds IE8-safe " + DATA_URI_MAX + " characters!");

						return fallback(this, filePathNode || mimetypeNode);
					}
				}

				return new URL(new Quoted('"' + uri + '"', uri, false, this.index, this.currentFileInfo), this.index, this.currentFileInfo);
			});
		};

		return exports;
	};
	//#endregion

	//#region URL: /functions/default
	modules['/functions/default'] = function () {
		var Keyword = require('/tree/keyword'),
			functionRegistry = require('/functions/function-registry');

		var defaultFunc = {
			eval: function () {
				var v = this.value_, e = this.error_;
				if (e) {
					throw e;
				}
				if (v != null) {
					return v ? Keyword.True : Keyword.False;
				}
			},
			value: function (v) {
				this.value_ = v;
			},
			error: function (e) {
				this.error_ = e;
			},
			reset: function () {
				this.value_ = this.error_ = null;
			}
		};

		functionRegistry.add("default", defaultFunc.eval.bind(defaultFunc));

		return defaultFunc;
	};
	//#endregion

	//#region URL: /functions/function-caller
	modules['/functions/function-caller'] = function () {
		var Expression = require("/tree/expression");

		var functionCaller = function(name, context, index, currentFileInfo) {
			this.name = name.toLowerCase();
			this.index = index;
			this.context = context;
			this.currentFileInfo = currentFileInfo;

			this.func = context.frames[0].functionRegistry.get(this.name);
		};
		functionCaller.prototype.isValid = function() {
			return Boolean(this.func);
		};

		functionCaller.prototype.call = function(args) {
			// This code is terrible and should be replaced as per this issue...
			// https://github.com/less/less.js/issues/2477
			if (Array.isArray(args)) {
				args = args.filter(function (item) {
					if (item.type === "Comment") {
						return false;
					}
					return true;
				})
				.map(function(item) {
					if (item.type === "Expression") {
						var subNodes = item.value.filter(function (item) {
							if (item.type === "Comment") {
								return false;
							}
							return true;
						});
						if (subNodes.length === 1) {
							return subNodes[0];
						} else {
							return new Expression(subNodes);
						}
					}
					return item;
				});
			}

			return this.func.apply(this, args);
		};

		return functionCaller;
	};
	//#endregion

	//#region URL: /functions/function-registry
	modules['/functions/function-registry'] = function () {
		function makeRegistry( base ) {
			return {
				_data: {},
				add: function(name, func) {
					// precautionary case conversion, as later querying of
					// the registry by function-caller uses lower case as well.
					name = name.toLowerCase();

					if (this._data.hasOwnProperty(name)) {
						// TODO warn
					}
					this._data[name] = func;
				},
				addMultiple: function(functions) {
					Object.keys(functions).forEach(
						function(name) {
							this.add(name, functions[name]);
						}.bind(this));
				},
				get: function(name) {
					return this._data[name] || ( base && base.get( name ));
				},
				getLocalFunctions: function() {
					return this._data;
				},
				inherit: function() {
					return makeRegistry( this );
				},
				create: function(base) {
					return makeRegistry(base);
				}
			};
		}

		return makeRegistry( null );
	};
	//#endregion

	//#region URL: /functions/math
	modules['/functions/math'] = function () {
		var functionRegistry = require('/functions/function-registry'),
			mathHelper = require('/functions/math-helper');

		var mathFunctions = {
			// name,  unit
			ceil:  null,
			floor: null,
			sqrt:  null,
			abs:   null,
			tan:   "",
			sin:   "",
			cos:   "",
			atan:  "rad",
			asin:  "rad",
			acos:  "rad"
		};

		for (var f in mathFunctions) {
			if (mathFunctions.hasOwnProperty(f)) {
				mathFunctions[f] = mathHelper._math.bind(null, Math[f], mathFunctions[f]);
			}
		}

		mathFunctions.round = function (n, f) {
			var fraction = typeof f === "undefined" ? 0 : f.value;
			return mathHelper._math(function(num) { return num.toFixed(fraction); }, null, n);
		};

		functionRegistry.addMultiple(mathFunctions);
	};
	//#endregion

	//#region URL: /functions/math-helper
	modules['/functions/math-helper'] = function () {
		var Dimension = require('/tree/dimension');

		var MathHelper = function() {
		};
		MathHelper._math = function (fn, unit, n) {
			if (!(n instanceof Dimension)) {
				throw { type: "Argument", message: "argument must be a number" };
			}
			if (unit == null) {
				unit = n.unit;
			} else {
				n = n.unify();
			}
			return new Dimension(fn(parseFloat(n.value)), unit);
		};

		return MathHelper;
	};
	//#endregion

	//#region URL: /functions/number
	modules['/functions/number'] = function () {
		var Dimension = require("/tree/dimension"),
			Anonymous = require("/tree/anonymous"),
			functionRegistry = require("/functions/function-registry"),
			mathHelper = require("/functions/math-helper");

		var minMax = function (isMin, args) {
			args = Array.prototype.slice.call(args);
			switch (args.length) {
				case 0: throw { type: "Argument", message: "one or more arguments required" };
			}
			var i, j, current, currentUnified, referenceUnified, unit, unitStatic, unitClone,
				order  = [], // elems only contains original argument values.
				values = {}; // key is the unit.toString() for unified Dimension values,
			// value is the index into the order array.
			for (i = 0; i < args.length; i++) {
				current = args[i];
				if (!(current instanceof Dimension)) {
					if (Array.isArray(args[i].value)) {
						Array.prototype.push.apply(args, Array.prototype.slice.call(args[i].value));
					}
					continue;
				}
				currentUnified = current.unit.toString() === "" && unitClone !== undefined ? new Dimension(current.value, unitClone).unify() : current.unify();
				unit = currentUnified.unit.toString() === "" && unitStatic !== undefined ? unitStatic : currentUnified.unit.toString();
				unitStatic = unit !== "" && unitStatic === undefined || unit !== "" && order[0].unify().unit.toString() === "" ? unit : unitStatic;
				unitClone = unit !== "" && unitClone === undefined ? current.unit.toString() : unitClone;
				j = values[""] !== undefined && unit !== "" && unit === unitStatic ? values[""] : values[unit];
				if (j === undefined) {
					if (unitStatic !== undefined && unit !== unitStatic) {
						throw { type: "Argument", message: "incompatible types" };
					}
					values[unit] = order.length;
					order.push(current);
					continue;
				}
				referenceUnified = order[j].unit.toString() === "" && unitClone !== undefined ? new Dimension(order[j].value, unitClone).unify() : order[j].unify();
				if ( isMin && currentUnified.value < referenceUnified.value ||
					!isMin && currentUnified.value > referenceUnified.value) {
					order[j] = current;
				}
			}
			if (order.length == 1) {
				return order[0];
			}
			args = order.map(function (a) { return a.toCSS(this.context); }).join(this.context.compress ? "," : ", ");
			return new Anonymous((isMin ? "min" : "max") + "(" + args + ")");
		};
		functionRegistry.addMultiple({
			min: function () {
				return minMax(true, arguments);
			},
			max: function () {
				return minMax(false, arguments);
			},
			convert: function (val, unit) {
				return val.convertTo(unit.value);
			},
			pi: function () {
				return new Dimension(Math.PI);
			},
			mod: function(a, b) {
				return new Dimension(a.value % b.value, a.unit);
			},
			pow: function(x, y) {
				if (typeof x === "number" && typeof y === "number") {
					x = new Dimension(x);
					y = new Dimension(y);
				} else if (!(x instanceof Dimension) || !(y instanceof Dimension)) {
					throw { type: "Argument", message: "arguments must be numbers" };
				}

				return new Dimension(Math.pow(x.value, y.value), x.unit);
			},
			percentage: function (n) {
				var result = mathHelper._math(function(num) {
					return num * 100;
				}, '%', n);

				return result;
			}
		});
	};
	//#endregion

	//#region URL: /functions/string
	modules['/functions/string'] = function () {
		var Quoted = require("/tree/quoted"),
			Anonymous = require("/tree/anonymous"),
			JavaScript = require("/tree/javascript"),
			functionRegistry = require("/functions/function-registry");

		functionRegistry.addMultiple({
			e: function (str) {
				return new Anonymous(str instanceof JavaScript ? str.evaluated : str.value);
			},
			escape: function (str) {
				return new Anonymous(
					encodeURI(str.value).replace(/=/g, "%3D").replace(/:/g, "%3A").replace(/#/g, "%23").replace(/;/g, "%3B")
						.replace(/\(/g, "%28").replace(/\)/g, "%29"));
			},
			replace: function (string, pattern, replacement, flags) {
				var result = string.value;
				replacement = (replacement.type === "Quoted") ?
					replacement.value : replacement.toCSS();
				result = result.replace(new RegExp(pattern.value, flags ? flags.value : ''), replacement);
				return new Quoted(string.quote || '', result, string.escaped);
			},
			'%': function (string /* arg, arg, ... */) {
				var args = Array.prototype.slice.call(arguments, 1),
					result = string.value;

				for (var i = 0; i < args.length; i++) {
					/* jshint loopfunc:true */
					result = result.replace(/%[sda]/i, function(token) {
						var value = ((args[i].type === "Quoted") &&
							token.match(/s/i)) ? args[i].value : args[i].toCSS();
						return token.match(/[A-Z]$/) ? encodeURIComponent(value) : value;
					});
				}
				result = result.replace(/%%/g, '%');
				return new Quoted(string.quote || '', result, string.escaped);
			}
		});
	};
	//#endregion

	//#region URL: /functions/svg
	modules['/functions/svg'] = function () {
		var exports = function(environment) {
			var Dimension = require("/tree/dimension"),
				Color = require("/tree/color"),
				Expression = require("/tree/expression"),
				Quoted = require("/tree/quoted"),
				URL = require("/tree/url"),
				functionRegistry = require("/functions/function-registry");

			functionRegistry.add("svg-gradient", function(direction) {

				var stops,
					gradientDirectionSvg,
					gradientType = "linear",
					rectangleDimension = 'x="0" y="0" width="1" height="1"',
					renderEnv = {compress: false},
					returner,
					directionValue = direction.toCSS(renderEnv),
					i, color, position, positionValue, alpha;

				function throwArgumentDescriptor() {
					throw { type: "Argument",
						message: "svg-gradient expects direction, start_color [start_position], [color position,]...," +
									" end_color [end_position] or direction, color list" };
				}

				if (arguments.length == 2) {
					if (arguments[1].value.length < 2) {
						throwArgumentDescriptor();
					}
					stops = arguments[1].value;
				} else if (arguments.length < 3) {
					throwArgumentDescriptor();
				} else {
					stops = Array.prototype.slice.call(arguments, 1);
				}

				switch (directionValue) {
					case "to bottom":
						gradientDirectionSvg = 'x1="0%" y1="0%" x2="0%" y2="100%"';
						break;
					case "to right":
						gradientDirectionSvg = 'x1="0%" y1="0%" x2="100%" y2="0%"';
						break;
					case "to bottom right":
						gradientDirectionSvg = 'x1="0%" y1="0%" x2="100%" y2="100%"';
						break;
					case "to top right":
						gradientDirectionSvg = 'x1="0%" y1="100%" x2="100%" y2="0%"';
						break;
					case "ellipse":
					case "ellipse at center":
						gradientType = "radial";
						gradientDirectionSvg = 'cx="50%" cy="50%" r="75%"';
						rectangleDimension = 'x="-50" y="-50" width="101" height="101"';
						break;
					default:
						throw { type: "Argument", message: "svg-gradient direction must be 'to bottom', 'to right'," +
							" 'to bottom right', 'to top right' or 'ellipse at center'" };
				}
				returner = '<?xml version="1.0" ?>' +
					'<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewBox="0 0 1 1" preserveAspectRatio="none">' +
					'<' + gradientType + 'Gradient id="gradient" gradientUnits="userSpaceOnUse" ' + gradientDirectionSvg + '>';

				for (i = 0; i < stops.length; i += 1) {
					if (stops[i] instanceof Expression) {
						color = stops[i].value[0];
						position = stops[i].value[1];
					} else {
						color = stops[i];
						position = undefined;
					}

					if (!(color instanceof Color) || (!((i === 0 || i + 1 === stops.length) && position === undefined) && !(position instanceof Dimension))) {
						throwArgumentDescriptor();
					}
					positionValue = position ? position.toCSS(renderEnv) : i === 0 ? "0%" : "100%";
					alpha = color.alpha;
					returner += '<stop offset="' + positionValue + '" stop-color="' + color.toRGB() + '"' + (alpha < 1 ? ' stop-opacity="' + alpha + '"' : '') + '/>';
				}
				returner += '</' + gradientType + 'Gradient>' +
					'<rect ' + rectangleDimension + ' fill="url(#gradient)" /></svg>';

				returner = encodeURIComponent(returner);

				returner = "data:image/svg+xml," + returner;
				return new URL(new Quoted("'" + returner + "'", returner, false, this.index, this.currentFileInfo), this.index, this.currentFileInfo);
			});
		};

		return exports;
	};
	//#endregion

	//#region URL: /functions/types
	modules['/functions/types'] = function () {
		var Keyword = require('/tree/keyword'),
			DetachedRuleset = require('/tree/detached-ruleset'),
			Dimension = require('/tree/dimension'),
			Color = require('/tree/color'),
			Quoted = require('/tree/quoted'),
			Anonymous = require('/tree/anonymous'),
			URL = require('/tree/url'),
			Operation = require('/tree/operation'),
			functionRegistry = require('/functions/function-registry');

		var isa = function (n, Type) {
				return (n instanceof Type) ? Keyword.True : Keyword.False;
			},
			isunit = function (n, unit) {
				if (unit === undefined) {
					throw { type: "Argument", message: "missing the required second argument to isunit." };
				}
				unit = typeof unit.value === "string" ? unit.value : unit;
				if (typeof unit !== "string") {
					throw { type: "Argument", message: "Second argument to isunit should be a unit or a string." };
				}
				return (n instanceof Dimension) && n.unit.is(unit) ? Keyword.True : Keyword.False;
			},
			getItemsFromNode = function(node) {
				// handle non-array values as an array of length 1
				// return 'undefined' if index is invalid
				var items = Array.isArray(node.value) ?
					node.value : Array(node);

				return items;
			};
		functionRegistry.addMultiple({
			isruleset: function (n) {
				return isa(n, DetachedRuleset);
			},
			iscolor: function (n) {
				return isa(n, Color);
			},
			isnumber: function (n) {
				return isa(n, Dimension);
			},
			isstring: function (n) {
				return isa(n, Quoted);
			},
			iskeyword: function (n) {
				return isa(n, Keyword);
			},
			isurl: function (n) {
				return isa(n, URL);
			},
			ispixel: function (n) {
				return isunit(n, 'px');
			},
			ispercentage: function (n) {
				return isunit(n, '%');
			},
			isem: function (n) {
				return isunit(n, 'em');
			},
			isunit: isunit,
			unit: function (val, unit) {
				if (!(val instanceof Dimension)) {
					throw { type: "Argument",
						message: "the first argument to unit must be a number" +
							(val instanceof Operation ? ". Have you forgotten parenthesis?" : "") };
				}
				if (unit) {
					if (unit instanceof Keyword) {
						unit = unit.value;
					} else {
						unit = unit.toCSS();
					}
				} else {
					unit = "";
				}
				return new Dimension(val.value, unit);
			},
			"get-unit": function (n) {
				return new Anonymous(n.unit);
			},
			extract: function(values, index) {
				index = index.value - 1; // (1-based index)

				return getItemsFromNode(values)[index];
			},
			length: function(values) {
				return new Dimension(getItemsFromNode(values).length);
			}
		});
	};
	//#endregion

	//#region URL: /parser/chunker
	modules['/parser/chunker'] = function () {
		// Split the input into chunks.
		var exports = function (input, fail) {
			var len = input.length, level = 0, parenLevel = 0,
				lastOpening, lastOpeningParen, lastMultiComment, lastMultiCommentEndBrace,
				chunks = [], emitFrom = 0,
				chunkerCurrentIndex, currentChunkStartIndex, cc, cc2, matched;

			function emitChunk(force) {
				var len = chunkerCurrentIndex - emitFrom;
				if (((len < 512) && !force) || !len) {
					return;
				}
				chunks.push(input.slice(emitFrom, chunkerCurrentIndex + 1));
				emitFrom = chunkerCurrentIndex + 1;
			}

			for (chunkerCurrentIndex = 0; chunkerCurrentIndex < len; chunkerCurrentIndex++) {
				cc = input.charCodeAt(chunkerCurrentIndex);
				if (((cc >= 97) && (cc <= 122)) || (cc < 34)) {
					// a-z or whitespace
					continue;
				}

				switch (cc) {
					case 40:                        // (
						parenLevel++;
						lastOpeningParen = chunkerCurrentIndex;
						continue;
					case 41:                        // )
						if (--parenLevel < 0) {
							return fail("missing opening `(`", chunkerCurrentIndex);
						}
						continue;
					case 59:                        // ;
						if (!parenLevel) { emitChunk(); }
						continue;
					case 123:                       // {
						level++;
						lastOpening = chunkerCurrentIndex;
						continue;
					case 125:                       // }
						if (--level < 0) {
							return fail("missing opening `{`", chunkerCurrentIndex);
						}
						if (!level && !parenLevel) { emitChunk(); }
						continue;
					case 92:                        // \
						if (chunkerCurrentIndex < len - 1) { chunkerCurrentIndex++; continue; }
						return fail("unescaped `\\`", chunkerCurrentIndex);
					case 34:
					case 39:
					case 96:                        // ", ' and `
						matched = 0;
						currentChunkStartIndex = chunkerCurrentIndex;
						for (chunkerCurrentIndex = chunkerCurrentIndex + 1; chunkerCurrentIndex < len; chunkerCurrentIndex++) {
							cc2 = input.charCodeAt(chunkerCurrentIndex);
							if (cc2 > 96) { continue; }
							if (cc2 == cc) { matched = 1; break; }
							if (cc2 == 92) {        // \
								if (chunkerCurrentIndex == len - 1) {
									return fail("unescaped `\\`", chunkerCurrentIndex);
								}
								chunkerCurrentIndex++;
							}
						}
						if (matched) { continue; }
						return fail("unmatched `" + String.fromCharCode(cc) + "`", currentChunkStartIndex);
					case 47:                        // /, check for comment
						if (parenLevel || (chunkerCurrentIndex == len - 1)) { continue; }
						cc2 = input.charCodeAt(chunkerCurrentIndex + 1);
						if (cc2 == 47) {
							// //, find lnfeed
							for (chunkerCurrentIndex = chunkerCurrentIndex + 2; chunkerCurrentIndex < len; chunkerCurrentIndex++) {
								cc2 = input.charCodeAt(chunkerCurrentIndex);
								if ((cc2 <= 13) && ((cc2 == 10) || (cc2 == 13))) { break; }
							}
						} else if (cc2 == 42) {
							// /*, find */
							lastMultiComment = currentChunkStartIndex = chunkerCurrentIndex;
							for (chunkerCurrentIndex = chunkerCurrentIndex + 2; chunkerCurrentIndex < len - 1; chunkerCurrentIndex++) {
								cc2 = input.charCodeAt(chunkerCurrentIndex);
								if (cc2 == 125) { lastMultiCommentEndBrace = chunkerCurrentIndex; }
								if (cc2 != 42) { continue; }
								if (input.charCodeAt(chunkerCurrentIndex + 1) == 47) { break; }
							}
							if (chunkerCurrentIndex == len - 1) {
								return fail("missing closing `*/`", currentChunkStartIndex);
							}
							chunkerCurrentIndex++;
						}
						continue;
					case 42:                       // *, check for unmatched */
						if ((chunkerCurrentIndex < len - 1) && (input.charCodeAt(chunkerCurrentIndex + 1) == 47)) {
							return fail("unmatched `/*`", chunkerCurrentIndex);
						}
						continue;
				}
			}

			if (level !== 0) {
				if ((lastMultiComment > lastOpening) && (lastMultiCommentEndBrace > lastMultiComment)) {
					return fail("missing closing `}` or `*/`", lastOpening);
				} else {
					return fail("missing closing `}`", lastOpening);
				}
			} else if (parenLevel !== 0) {
				return fail("missing closing `)`", lastOpeningParen);
			}

			emitChunk(true);
			return chunks;
		};

		return exports;
	};
	//#endregion

	//#region URL: /parser/parser
	modules['/parser/parser'] = function () {
		var LessError = require('/less-error'),
			tree = require("/tree"),
			visitors = require("/visitors"),
			getParserInput = require("/parser/parser-input"),
			utils = require("/utils"),
			functionRegistry = require('/functions/function-registry');

		//
		// less.js - parser
		//
		//    A relatively straight-forward predictive parser.
		//    There is no tokenization/lexing stage, the input is parsed
		//    in one sweep.
		//
		//    To make the parser fast enough to run in the browser, several
		//    optimization had to be made:
		//
		//    - Matching and slicing on a huge input is often cause of slowdowns.
		//      The solution is to chunkify the input into smaller strings.
		//      The chunks are stored in the `chunks` var,
		//      `j` holds the current chunk index, and `currentPos` holds
		//      the index of the current chunk in relation to `input`.
		//      This gives us an almost 4x speed-up.
		//
		//    - In many cases, we don't need to match individual tokens;
		//      for example, if a value doesn't hold any variables, operations
		//      or dynamic references, the parser can effectively 'skip' it,
		//      treating it as a literal.
		//      An example would be '1px solid #000' - which evaluates to itself,
		//      we don't need to know what the individual components are.
		//      The drawback, of course is that you don't get the benefits of
		//      syntax-checking on the CSS. This gives us a 50% speed-up in the parser,
		//      and a smaller speed-up in the code-gen.
		//
		//
		//    Token matching is done with the `$` function, which either takes
		//    a terminal string or regexp, or a non-terminal function to call.
		//    It also takes care of moving all the indices forwards.
		//

		var Parser = function Parser(context, imports, fileInfo) {
			var parsers,
				parserInput = getParserInput();

			function error(msg, type) {
				throw new LessError(
					{
						index: parserInput.i,
						filename: fileInfo.filename,
						type: type || 'Syntax',
						message: msg
					},
					imports
				);
			}

			function expect(arg, msg, index) {
				// some older browsers return typeof 'function' for RegExp
				var result = (arg instanceof Function) ? arg.call(parsers) : parserInput.$re(arg);
				if (result) {
					return result;
				}
				error(msg || (typeof arg === 'string' ? "expected '" + arg + "' got '" + parserInput.currentChar() + "'"
													   : "unexpected token"));
			}

			// Specialization of expect()
			function expectChar(arg, msg) {
				if (parserInput.$char(arg)) {
					return arg;
				}
				error(msg || "expected '" + arg + "' got '" + parserInput.currentChar() + "'");
			}

			function getDebugInfo(index) {
				var filename = fileInfo.filename;

				return {
					lineNumber: utils.getLocation(index, parserInput.getInput()).line + 1,
					fileName: filename
				};
			}

			/**
			 *  Used after initial parsing to create nodes on the fly
			 * 
			 *  @param {String} str          - string to parse 
			 *  @param {Array}  parseList    - array of parsers to run input through e.g. ["value", "important"]
			 *  @param {Number} currentIndex - start number to begin indexing
			 *  @param {Object} fileInfo     - fileInfo to attach to created nodes
			 */
			function parseNode(str, parseList, currentIndex, fileInfo, callback) {
				var result, returnNodes = [];
				var parser = parserInput;

				try {
					parser.start(str, false, function fail(msg, index) {
						callback({
							message: msg,
							index: index + currentIndex
						});
					});
					for (var x = 0, p, i; (p = parseList[x]); x++) {
						i = parser.i;
						result = parsers[p]();
						if (result) {
							result._index = i + currentIndex;
							result._fileInfo = fileInfo;
							returnNodes.push(result);
						}
						else {
							returnNodes.push(null);
						}
					}

					var endInfo = parser.end();
					if (endInfo.isFinished) {
						callback(null, returnNodes);
					}
					else {
						callback(true, null);
					}
				} catch (e) {
					throw new LessError({
						index: e.index + currentIndex,
						message: e.message
					}, imports, fileInfo.filename);
				}
			}
			
			//
			// The Parser
			//
			return {
				parserInput: parserInput,
				imports: imports,
				fileInfo: fileInfo,
				parseNode: parseNode,
				//
				// Parse an input string into an abstract syntax tree,
				// @param str A string containing 'less' markup
				// @param callback call `callback` when done.
				// @param [additionalData] An optional map which can contains vars - a map (key, value) of variables to apply
				//
				parse: function (str, callback/*BT- , additionalData*/) {
					var root, error = null/*BT- , globalVars, modifyVars, ignored, preText = ""*/;

					/*BT-
					globalVars = (additionalData && additionalData.globalVars) ? Parser.serializeVars(additionalData.globalVars) + '\n' : '';
					modifyVars = (additionalData && additionalData.modifyVars) ? '\n' + Parser.serializeVars(additionalData.modifyVars) : '';

					if (context.pluginManager) {
						var preProcessors = context.pluginManager.getPreProcessors();
						for (var i = 0; i < preProcessors.length; i++) {
							str = preProcessors[i].process(str, { context: context, imports: imports, fileInfo: fileInfo });
						}
					}

					if (globalVars || (additionalData && additionalData.banner)) {
						preText = ((additionalData && additionalData.banner) ? additionalData.banner : "") + globalVars;
						ignored = imports.contentsIgnoredChars;
						ignored[fileInfo.filename] = ignored[fileInfo.filename] || 0;
						ignored[fileInfo.filename] += preText.length;
					}
					*/

					str = str.replace(/\r\n?/g, '\n');
					// Remove potential UTF Byte Order Mark
					str = /*BT- preText + */str.replace(/^\uFEFF/, '')/*BT- + modifyVars*/;
					imports.contents[fileInfo.filename] = str;

					// Start with the primary rule.
					// The whole syntax tree is held under a Ruleset node,
					// with the `root` property set to true, so no `{}` are
					// output. The callback is called when the input is parsed.
					try {
						parserInput.start(str, context.chunkInput, function fail(msg, index) {
							throw new LessError({
								index: index,
								type: 'Parse',
								message: msg,
								filename: fileInfo.filename
							}, imports);
						});

						tree.Node.prototype.parse = this;
						root = new tree.Ruleset(null, this.parsers.primary());
						tree.Node.prototype.rootNode = root;
						root.root = true;
						root.firstRoot = true;
						root.functionRegistry = functionRegistry.inherit();
						
					} catch (e) {
						return callback(new LessError(e, imports, fileInfo.filename));
					}

					// If `i` is smaller than the `input.length - 1`,
					// it means the parser wasn't able to parse the whole
					// string, so we've got a parsing error.
					//
					// We try to extract a \n delimited string,
					// showing the line where the parse error occurred.
					// We split it up into two parts (the part which parsed,
					// and the part which didn't), so we can color them differently.
					var endInfo = parserInput.end();
					if (!endInfo.isFinished) {

						var message = endInfo.furthestPossibleErrorMessage;

						if (!message) {
							message = "Unrecognised input";
							if (endInfo.furthestChar === '}') {
								message += ". Possibly missing opening '{'";
							} else if (endInfo.furthestChar === ')') {
								message += ". Possibly missing opening '('";
							} else if (endInfo.furthestReachedEnd) {
								message += ". Possibly missing something";
							}
						}

						error = new LessError({
							type: "Parse",
							message: message,
							index: endInfo.furthest,
							filename: fileInfo.filename
						}, imports);
					}

					var finish = function (e) {
						e = error || e || imports.error;

						if (e) {
							if (!(e instanceof LessError)) {
								e = new LessError(e, imports, fileInfo.filename);
							}

							return callback(e);
						}
						else {
							return callback(null, root);
						}
					};

					if (context.processImports !== false) {
						new visitors.ImportVisitor(imports, finish)
							.run(root);
					} else {
						return finish();
					}
				},

				//
				// Here in, the parsing rules/functions
				//
				// The basic structure of the syntax tree generated is as follows:
				//
				//   Ruleset ->  Declaration -> Value -> Expression -> Entity
				//
				// Here's some Less code:
				//
				//    .class {
				//      color: #fff;
				//      border: 1px solid #000;
				//      width: @w + 4px;
				//      > .child {...}
				//    }
				//
				// And here's what the parse tree might look like:
				//
				//     Ruleset (Selector '.class', [
				//         Declaration ("color",  Value ([Expression [Color #fff]]))
				//         Declaration ("border", Value ([Expression [Dimension 1px][Keyword "solid"][Color #000]]))
				//         Declaration ("width",  Value ([Expression [Operation " + " [Variable "@w"][Dimension 4px]]]))
				//         Ruleset (Selector [Element '>', '.child'], [...])
				//     ])
				//
				//  In general, most rules will try to parse a token with the `$re()` function, and if the return
				//  value is truly, will return a new node, of the relevant type. Sometimes, we need to check
				//  first, before parsing, that's when we use `peek()`.
				//
				parsers: parsers = {
					//
					// The `primary` rule is the *entry* and *exit* point of the parser.
					// The rules here can appear at any level of the parse tree.
					//
					// The recursive nature of the grammar is an interplay between the `block`
					// rule, which represents `{ ... }`, the `ruleset` rule, and this `primary` rule,
					// as represented by this simplified grammar:
					//
					//     primary  →  (ruleset | declaration)+
					//     ruleset  →  selector+ block
					//     block    →  '{' primary '}'
					//
					// Only at one point is the primary rule not called from the
					// block rule: at the root level.
					//
					primary: function () {
						var mixin = this.mixin, root = [], node;

						while (true) {
							while (true) {
								node = this.comment();
								if (!node) { break; }
								root.push(node);
							}
							// always process comments before deciding if finished
							if (parserInput.finished) {
								break;
							}
							if (parserInput.peek('}')) {
								break;
							}

							node = this.extendRule();
							if (node) {
								root = root.concat(node);
								continue;
							}

							node = mixin.definition() || this.declaration() || this.ruleset() ||
								mixin.call() || this.variableCall() || this.entities.call() || this.atrule();
							if (node) {
								root.push(node);
							} else {
								var foundSemiColon = false;
								while (parserInput.$char(";")) {
									foundSemiColon = true;
								}
								if (!foundSemiColon) {
									break;
								}
							}
						}

						return root;
					},

					// comments are collected by the main parsing mechanism and then assigned to nodes
					// where the current structure allows it
					comment: function () {
						if (parserInput.commentStore.length) {
							var comment = parserInput.commentStore.shift();
							return new(tree.Comment)(comment.text, comment.isLineComment, comment.index, fileInfo);
						}
					},

					//
					// Entities are tokens which can be found inside an Expression
					//
					entities: {
						//
						// A string, which supports escaping " and '
						//
						//     "milky way" 'he\'s the one!'
						//
						quoted: function () {
							var str, index = parserInput.i, isEscaped = false;

							parserInput.save();
							if (parserInput.$char("~")) {
								isEscaped = true;
							}
							str = parserInput.$quoted();
							if (!str) {
								parserInput.restore();
								return;
							}
							parserInput.forget();

							return new(tree.Quoted)(str.charAt(0), str.substr(1, str.length - 2), isEscaped, index, fileInfo);
						},

						//
						// A catch-all word, such as:
						//
						//     black border-collapse
						//
						keyword: function () {
							var k = parserInput.$char("%") || parserInput.$re(/^\[?[_A-Za-z-][_A-Za-z0-9-]*\]?/);
							if (k) {
								return tree.Color.fromKeyword(k) || new(tree.Keyword)(k);
							}
						},

						//
						// A function call
						//
						//     rgb(255, 0, 255)
						//
						// The arguments are parsed with the `entities.arguments` parser.
						//
						call: function () {
							var name, args, func, index = parserInput.i;

							// http://jsperf.com/case-insensitive-regex-vs-strtolower-then-regex/18
							if (parserInput.peek(/^url\(/i)) {
								return;
							}

							parserInput.save();

							name = parserInput.$re(/^([\w-]+|%|progid:[\w\.]+)\(/);
							if (!name) {
								parserInput.forget(); 
								return;
							}

							name = name[1];
							func = this.customFuncCall(name);
							if (func) {
								args = func.parse();
								if (args && func.stop) {
									parserInput.forget();
									return args;
								}
							}

							args = this.arguments(args);

							if (!parserInput.$char(')')) {
								parserInput.restore("Could not parse call arguments or missing ')'");
								return;
							}

							parserInput.forget();
							
							return new(tree.Call)(name, args, index, fileInfo);
						},
						
						//
						// Parsing rules for functions with non-standard args, e.g.:
						//
						//     boolean(not(2 > 1))
						//
						//     This is a quick prototype, to be modified/improved when
						//     more custom-parsed funcs come (e.g. `selector(...)`)
						//

						customFuncCall: function (name) {
							/* Ideally the table is to be moved out of here for faster perf.,
							   but it's quite tricky since it relies on all these `parsers`
							   and `expect` available only here */
							return {
								alpha:   f(parsers.ieAlpha, true),
								boolean: f(condition),
								'if':    f(condition)
							}[name.toLowerCase()];

							function f(parse, stop) {
								return {
									parse: parse, // parsing function
									stop:  stop   // when true - stop after parse() and return its result, 
												  // otherwise continue for plain args
								};
							}
						
							function condition() {
								return [expect(parsers.condition, 'expected condition')];
							}
						},

						arguments: function (prevArgs) {
							var argsComma = prevArgs || [],
								argsSemiColon = [],
								isSemiColonSeparated, value;

							parserInput.save();

							while (true) {
								if (prevArgs) {
									prevArgs = false;
								} else {
									value = parsers.detachedRuleset() || this.assignment() || parsers.expression();
									if (!value) {
										break;
									}

									if (value.value && value.value.length == 1) {
										value = value.value[0];
									}

									argsComma.push(value);
								}

								if (parserInput.$char(',')) {
									continue;
								}

								if (parserInput.$char(';') || isSemiColonSeparated) {
									isSemiColonSeparated = true;
									value = (argsComma.length < 1) ? argsComma[0]
										: new tree.Value(argsComma);
									argsSemiColon.push(value);
									argsComma = [];
								}
							}

							parserInput.forget();
							return isSemiColonSeparated ? argsSemiColon : argsComma;
						},
						literal: function () {
							return this.dimension() ||
								   this.color() ||
								   this.quoted() ||
								   this.unicodeDescriptor();
						},

						// Assignments are argument entities for calls.
						// They are present in ie filter properties as shown below.
						//
						//     filter: progid:DXImageTransform.Microsoft.Alpha( *opacity=50* )
						//

						assignment: function () {
							var key, value;
							parserInput.save();
							key = parserInput.$re(/^\w+(?=\s?=)/i);
							if (!key) {
								parserInput.restore();
								return;
							}
							if (!parserInput.$char('=')) {
								parserInput.restore();
								return;
							}
							value = parsers.entity();
							if (value) {
								parserInput.forget();
								return new(tree.Assignment)(key, value);
							} else {
								parserInput.restore();
							}
						},

						//
						// Parse url() tokens
						//
						// We use a specific rule for urls, because they don't really behave like
						// standard function calls. The difference is that the argument doesn't have
						// to be enclosed within a string, so it can't be parsed as an Expression.
						//
						url: function () {
							var value, index = parserInput.i;

							parserInput.autoCommentAbsorb = false;

							if (!parserInput.$str("url(")) {
								parserInput.autoCommentAbsorb = true;
								return;
							}

							value = this.quoted() || this.variable() || this.property() ||
									parserInput.$re(/^(?:(?:\\[\(\)'"])|[^\(\)'"])+/) || "";

							parserInput.autoCommentAbsorb = true;

							expectChar(')');

							return new(tree.URL)((value.value != null || 
								value instanceof tree.Variable || 
								value instanceof tree.Property) ?
								value : new(tree.Anonymous)(value, index), index, fileInfo);
						},

						//
						// A Variable entity, such as `@fink`, in
						//
						//     width: @fink + 2px
						//
						// We use a different parser for variable definitions,
						// see `parsers.variable`.
						//
						variable: function () {
							var name, index = parserInput.i;

							if (parserInput.currentChar() === '@' && (name = parserInput.$re(/^@@?[\w-]+/))) {
								return new(tree.Variable)(name, index, fileInfo);
							}
						},

						// A variable entity using the protective {} e.g. @{var}
						variableCurly: function () {
							var curly, index = parserInput.i;

							if (parserInput.currentChar() === '@' && (curly = parserInput.$re(/^@\{([\w-]+)\}/))) {
								return new(tree.Variable)("@" + curly[1], index, fileInfo);
							}
						},
						//
						// A Property accessor, such as `$color`, in
						//
						//     background-color: $color
						//
						property: function () {
							var name, index = parserInput.i;

							if (parserInput.currentChar() === '$' && (name = parserInput.$re(/^\$[\w-]+/))) {
								return new(tree.Property)(name, index, fileInfo);
							}
						},

						// A property entity useing the protective {} e.g. ${prop}
						propertyCurly: function () {
							var curly, index = parserInput.i;

							if (parserInput.currentChar() === '$' && (curly = parserInput.$re(/^\$\{([\w-]+)\}/))) {
								return new(tree.Property)("$" + curly[1], index, fileInfo);
							}
						},
						//
						// A Hexadecimal color
						//
						//     #4F3C2F
						//
						// `rgb` and `hsl` colors are parsed through the `entities.call` parser.
						//
						color: function () {
							var rgb;

							if (parserInput.currentChar() === '#' && (rgb = parserInput.$re(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/))) {
								// strip colons, brackets, whitespaces and other characters that should not
								// definitely be part of color string
								var colorCandidateString = rgb.input.match(/^#([\w]+).*/);
								colorCandidateString = colorCandidateString[1];
								if (!colorCandidateString.match(/^[A-Fa-f0-9]+$/)) { // verify if candidate consists only of allowed HEX characters
									error("Invalid HEX color code");
								}
								return new(tree.Color)(rgb[1], undefined, '#' + colorCandidateString);
							}
						},

						colorKeyword: function () {
							parserInput.save();
							var autoCommentAbsorb = parserInput.autoCommentAbsorb;
							parserInput.autoCommentAbsorb = false;
							var k = parserInput.$re(/^[_A-Za-z-][_A-Za-z0-9-]+/);
							parserInput.autoCommentAbsorb = autoCommentAbsorb;
							if (!k) {
								parserInput.forget();
								return;
							}
							parserInput.restore();
							var color = tree.Color.fromKeyword(k);
							if (color) {
								parserInput.$str(k);
								return color;
							}
						},

						//
						// A Dimension, that is, a number and a unit
						//
						//     0.5em 95%
						//
						dimension: function () {
							if (parserInput.peekNotNumeric()) {
								return;
							}

							var value = parserInput.$re(/^([+-]?\d*\.?\d+)(%|[a-z_]+)?/i);
							if (value) {
								return new(tree.Dimension)(value[1], value[2]);
							}
						},

						//
						// A unicode descriptor, as is used in unicode-range
						//
						// U+0??  or U+00A1-00A9
						//
						unicodeDescriptor: function () {
							var ud;

							ud = parserInput.$re(/^U\+[0-9a-fA-F?]+(\-[0-9a-fA-F?]+)?/);
							if (ud) {
								return new(tree.UnicodeDescriptor)(ud[0]);
							}
						},

						//
						// JavaScript code to be evaluated
						//
						//     `window.location.href`
						//
						javascript: function () {
							var js, index = parserInput.i;

							parserInput.save();

							var escape = parserInput.$char("~");
							var jsQuote = parserInput.$char("`");

							if (!jsQuote) {
								parserInput.restore();
								return;
							}

							js = parserInput.$re(/^[^`]*`/);
							if (js) {
								parserInput.forget();
								return new(tree.JavaScript)(js.substr(0, js.length - 1), Boolean(escape), index, fileInfo);
							}
							parserInput.restore("invalid javascript definition");
						}
					},

					//
					// The variable part of a variable definition. Used in the `rule` parser
					//
					//     @fink:
					//
					variable: function () {
						var name;

						if (parserInput.currentChar() === '@' && (name = parserInput.$re(/^(@[\w-]+)\s*:/))) { return name[1]; }
					},

					//
					// Call a variable value
					//
					//     @fink()
					//
					variableCall: function () {
						var name;

						if (parserInput.currentChar() === '@'
							&& (name = parserInput.$re(/^(@[\w-]+)\(\s*\)/))
							&& parsers.end()) {
							return new tree.VariableCall(name[1]);
						}
					},

					//
					// extend syntax - used to extend selectors
					//
					extend: function(isRule) {
						var elements, e, index = parserInput.i, option, extendList, extend;

						if (!parserInput.$str(isRule ? "&:extend(" : ":extend(")) {
							return;
						}

						do {
							option = null;
							elements = null;
							while (!(option = parserInput.$re(/^(all)(?=\s*(\)|,))/))) {
								e = this.element();
								if (!e) {
									break;
								}
								if (elements) {
									elements.push(e);
								} else {
									elements = [ e ];
								}
							}

							option = option && option[1];
							if (!elements) {
								error("Missing target selector for :extend().");
							}
							extend = new(tree.Extend)(new(tree.Selector)(elements), option, index, fileInfo);
							if (extendList) {
								extendList.push(extend);
							} else {
								extendList = [ extend ];
							}
						} while (parserInput.$char(","));

						expect(/^\)/);

						if (isRule) {
							expect(/^;/);
						}

						return extendList;
					},

					//
					// extendRule - used in a rule to extend all the parent selectors
					//
					extendRule: function() {
						return this.extend(true);
					},

					//
					// Mixins
					//
					mixin: {
						//
						// A Mixin call, with an optional argument list
						//
						//     #mixins > .square(#fff);
						//     .rounded(4px, black);
						//     .button;
						//
						// The `while` loop is there because mixins can be
						// namespaced, but we only support the child and descendant
						// selector for now.
						//
						call: function () {
							var s = parserInput.currentChar(), important = false, index = parserInput.i, elemIndex,
								elements, elem, e, c, args;

							if (s !== '.' && s !== '#') { return; }

							parserInput.save(); // stop us absorbing part of an invalid selector

							while (true) {
								elemIndex = parserInput.i;
								e = parserInput.$re(/^[#.](?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+/);
								if (!e) {
									break;
								}
								elem = new(tree.Element)(c, e, elemIndex, fileInfo);
								if (elements) {
									elements.push(elem);
								} else {
									elements = [ elem ];
								}
								c = parserInput.$char('>');
							}

							if (elements) {
								if (parserInput.$char('(')) {
									args = this.args(true).args;
									expectChar(')');
								}

								if (parsers.important()) {
									important = true;
								}

								if (parsers.end()) {
									parserInput.forget();
									return new(tree.mixin.Call)(elements, args, index, fileInfo, important);
								}
							}

							parserInput.restore();
						},
						args: function (isCall) {
							var entities = parsers.entities,
								returner = { args:null, variadic: false },
								expressions = [], argsSemiColon = [], argsComma = [],
								isSemiColonSeparated, expressionContainsNamed, name, nameLoop,
								value, arg, expand;

							parserInput.save();

							while (true) {
								if (isCall) {
									arg = parsers.detachedRuleset() || parsers.expression();
								} else {
									parserInput.commentStore.length = 0;
									if (parserInput.$str("...")) {
										returner.variadic = true;
										if (parserInput.$char(";") && !isSemiColonSeparated) {
											isSemiColonSeparated = true;
										}
										(isSemiColonSeparated ? argsSemiColon : argsComma)
											.push({ variadic: true });
										break;
									}
									arg = entities.variable() || entities.property() || entities.literal() || entities.keyword();
								}

								if (!arg) {
									break;
								}

								nameLoop = null;
								if (arg.throwAwayComments) {
									arg.throwAwayComments();
								}
								value = arg;
								var val = null;

								if (isCall) {
									// Variable
									if (arg.value && arg.value.length == 1) {
										val = arg.value[0];
									}
								} else {
									val = arg;
								}

								if (val && (val instanceof tree.Variable || val instanceof tree.Property)) {
									if (parserInput.$char(':')) {
										if (expressions.length > 0) {
											if (isSemiColonSeparated) {
												error("Cannot mix ; and , as delimiter types");
											}
											expressionContainsNamed = true;
										}

										value = parsers.detachedRuleset() || parsers.expression();

										if (!value) {
											if (isCall) {
												error("could not understand value for named argument");
											} else {
												parserInput.restore();
												returner.args = [];
												return returner;
											}
										}
										nameLoop = (name = val.name);
									} else if (parserInput.$str("...")) {
										if (!isCall) {
											returner.variadic = true;
											if (parserInput.$char(";") && !isSemiColonSeparated) {
												isSemiColonSeparated = true;
											}
											(isSemiColonSeparated ? argsSemiColon : argsComma)
												.push({ name: arg.name, variadic: true });
											break;
										} else {
											expand = true;
										}
									} else if (!isCall) {
										name = nameLoop = val.name;
										value = null;
									}
								}

								if (value) {
									expressions.push(value);
								}

								argsComma.push({ name:nameLoop, value:value, expand:expand });

								if (parserInput.$char(',')) {
									continue;
								}

								if (parserInput.$char(';') || isSemiColonSeparated) {

									if (expressionContainsNamed) {
										error("Cannot mix ; and , as delimiter types");
									}

									isSemiColonSeparated = true;

									if (expressions.length > 1) {
										value = new(tree.Value)(expressions);
									}
									argsSemiColon.push({ name:name, value:value, expand:expand });

									name = null;
									expressions = [];
									expressionContainsNamed = false;
								}
							}

							parserInput.forget();
							returner.args = isSemiColonSeparated ? argsSemiColon : argsComma;
							return returner;
						},
						//
						// A Mixin definition, with a list of parameters
						//
						//     .rounded (@radius: 2px, @color) {
						//        ...
						//     }
						//
						// Until we have a finer grained state-machine, we have to
						// do a look-ahead, to make sure we don't have a mixin call.
						// See the `rule` function for more information.
						//
						// We start by matching `.rounded (`, and then proceed on to
						// the argument list, which has optional default values.
						// We store the parameters in `params`, with a `value` key,
						// if there is a value, such as in the case of `@radius`.
						//
						// Once we've got our params list, and a closing `)`, we parse
						// the `{...}` block.
						//
						definition: function () {
							var name, params = [], match, ruleset, cond, variadic = false;
							if ((parserInput.currentChar() !== '.' && parserInput.currentChar() !== '#') ||
								parserInput.peek(/^[^{]*\}/)) {
								return;
							}

							parserInput.save();

							match = parserInput.$re(/^([#.](?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+)\s*\(/);
							if (match) {
								name = match[1];

								var argInfo = this.args(false);
								params = argInfo.args;
								variadic = argInfo.variadic;

								// .mixincall("@{a}");
								// looks a bit like a mixin definition..
								// also
								// .mixincall(@a: {rule: set;});
								// so we have to be nice and restore
								if (!parserInput.$char(')')) {
									parserInput.restore("Missing closing ')'");
									return;
								}

								parserInput.commentStore.length = 0;

								if (parserInput.$str("when")) { // Guard
									cond = expect(parsers.conditions, 'expected condition');
								}

								ruleset = parsers.block();

								if (ruleset) {
									parserInput.forget();
									return new(tree.mixin.Definition)(name, params, ruleset, cond, variadic);
								} else {
									parserInput.restore();
								}
							} else {
								parserInput.forget();
							}
						}
					},

					//
					// Entities are the smallest recognized token,
					// and can be found inside a rule's value.
					//
					entity: function () {
						var entities = this.entities;

						return this.comment() || entities.literal() || entities.variable() || entities.url() ||
							   entities.property() || entities.call() || entities.keyword()  || entities.javascript();
					},

					//
					// A Declaration terminator. Note that we use `peek()` to check for '}',
					// because the `block` rule will be expecting it, but we still need to make sure
					// it's there, if ';' was omitted.
					//
					end: function () {
						return parserInput.$char(';') || parserInput.peek('}');
					},

					//
					// IE's alpha function
					//
					//     alpha(opacity=88)
					//
					ieAlpha: function () {
						var value;

						// http://jsperf.com/case-insensitive-regex-vs-strtolower-then-regex/18
						if (!parserInput.$re(/^opacity=/i)) { return; }
						value = parserInput.$re(/^\d+/);
						if (!value) {
							value = expect(parsers.entities.variable, "Could not parse alpha");
							value = '@{' + value.name.slice(1) + '}';
						}
						expectChar(')');
						return new tree.Quoted('', 'alpha(opacity=' + value + ')');
					},

					//
					// A Selector Element
					//
					//     div
					//     + h1
					//     #socks
					//     input[type="text"]
					//
					// Elements are the building blocks for Selectors,
					// they are made out of a `Combinator` (see combinator rule),
					// and an element name, such as a tag a class, or `*`.
					//
					element: function () {
						var e, c, v, index = parserInput.i;

						c = this.combinator();

						e = parserInput.$re(/^(?:\d+\.\d+|\d+)%/) ||
							parserInput.$re(/^(?:[.#]?|:*)(?:[\w-]|[^\x00-\x9f]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+/) ||
							parserInput.$char('*') || parserInput.$char('&') || this.attribute() ||
							parserInput.$re(/^\([^&()@]+\)/) ||  parserInput.$re(/^[\.#:](?=@)/) ||
							this.entities.variableCurly();

						if (!e) {
							parserInput.save();
							if (parserInput.$char('(')) {
								if ((v = this.selector(false)) && parserInput.$char(')')) {
									e = new(tree.Paren)(v);
									parserInput.forget();
								} else {
									parserInput.restore("Missing closing ')'");
								}
							} else {
								parserInput.forget();
							}
						}

						if (e) { return new(tree.Element)(c, e, index, fileInfo); }
					},

					//
					// Combinators combine elements together, in a Selector.
					//
					// Because our parser isn't white-space sensitive, special care
					// has to be taken, when parsing the descendant combinator, ` `,
					// as it's an empty space. We have to check the previous character
					// in the input, to see if it's a ` ` character. More info on how
					// we deal with this in *combinator.js*.
					//
					combinator: function () {
						var c = parserInput.currentChar();

						if (c === '/') {
							parserInput.save();
							var slashedCombinator = parserInput.$re(/^\/[a-z]+\//i);
							if (slashedCombinator) {
								parserInput.forget();
								return new(tree.Combinator)(slashedCombinator);
							}
							parserInput.restore();
						}

						if (c === '>' || c === '+' || c === '~' || c === '|' || c === '^') {
							parserInput.i++;
							if (c === '^' && parserInput.currentChar() === '^') {
								c = '^^';
								parserInput.i++;
							}
							while (parserInput.isWhitespace()) { parserInput.i++; }
							return new(tree.Combinator)(c);
						} else if (parserInput.isWhitespace(-1)) {
							return new(tree.Combinator)(" ");
						} else {
							return new(tree.Combinator)(null);
						}
					},
					//
					// A CSS Selector
					// with less extensions e.g. the ability to extend and guard
					//
					//     .class > div + h1
					//     li a:hover
					//
					// Selectors are made out of one or more Elements, see above.
					//
					selector: function (isLess) {
						var index = parserInput.i, elements, extendList, c, e, allExtends, when, condition;
						isLess = isLess !== false;
						while ((isLess && (extendList = this.extend())) || (isLess && (when = parserInput.$str("when"))) || (e = this.element())) {
							if (when) {
								condition = expect(this.conditions, 'expected condition');
							} else if (condition) {
								error("CSS guard can only be used at the end of selector");
							} else if (extendList) {
								if (allExtends) {
									allExtends = allExtends.concat(extendList);
								} else {
									allExtends = extendList;
								}
							} else {
								if (allExtends) { error("Extend can only be used at the end of selector"); }
								c = parserInput.currentChar();
								if (elements) {
									elements.push(e);
								} else {
									elements = [ e ];
								}
								e = null;
							}
							if (c === '{' || c === '}' || c === ';' || c === ',' || c === ')') {
								break;
							}
						}

						if (elements) { return new(tree.Selector)(elements, allExtends, condition, index, fileInfo); }
						if (allExtends) { error("Extend must be used to extend a selector, it cannot be used on its own"); }
					},
					attribute: function () {
						if (!parserInput.$char('[')) { return; }

						var entities = this.entities,
							key, val, op;

						if (!(key = entities.variableCurly())) {
							key = expect(/^(?:[_A-Za-z0-9-\*]*\|)?(?:[_A-Za-z0-9-]|\\.)+/);
						}

						op = parserInput.$re(/^[|~*$^]?=/);
						if (op) {
							val = entities.quoted() || parserInput.$re(/^[0-9]+%/) || parserInput.$re(/^[\w-]+/) || entities.variableCurly();
						}

						expectChar(']');

						return new(tree.Attribute)(key, op, val);
					},

					//
					// The `block` rule is used by `ruleset` and `mixin.definition`.
					// It's a wrapper around the `primary` rule, with added `{}`.
					//
					block: function () {
						var content;
						if (parserInput.$char('{') && (content = this.primary()) && parserInput.$char('}')) {
							return content;
						}
					},

					blockRuleset: function() {
						var block = this.block();

						if (block) {
							block = new tree.Ruleset(null, block);
						}
						return block;
					},

					detachedRuleset: function() {
						var blockRuleset = this.blockRuleset();
						if (blockRuleset) {
							return new tree.DetachedRuleset(blockRuleset);
						}
					},

					//
					// div, .class, body > p {...}
					//
					ruleset: function () {
						var selectors, s, rules, debugInfo;

						parserInput.save();

						if (context.dumpLineNumbers) {
							debugInfo = getDebugInfo(parserInput.i);
						}

						while (true) {
							s = this.selector();
							if (!s) {
								break;
							}
							if (selectors) {
								selectors.push(s);
							} else {
								selectors = [ s ];
							}
							parserInput.commentStore.length = 0;
							if (s.condition && selectors.length > 1) {
								error("Guards are only currently allowed on a single selector.");
							}
							if (!parserInput.$char(',')) { break; }
							if (s.condition) {
								error("Guards are only currently allowed on a single selector.");
							}
							parserInput.commentStore.length = 0;
						}

						if (selectors && (rules = this.block())) {
							parserInput.forget();
							var ruleset = new(tree.Ruleset)(selectors, rules, context.strictImports);
							if (context.dumpLineNumbers) {
								ruleset.debugInfo = debugInfo;
							}
							return ruleset;
						} else {
							parserInput.restore();
						}
					},
					declaration: function () {
						var name, value, startOfRule = parserInput.i, c = parserInput.currentChar(), important, merge, isVariable;

						if (c === '.' || c === '#' || c === '&' || c === ':') { return; }

						parserInput.save();

						name = this.variable() || this.ruleProperty();
						if (name) {
							isVariable = typeof name === "string";

							if (isVariable) {
								value = this.detachedRuleset();
							}

							parserInput.commentStore.length = 0;
							if (!value) {
								// a name returned by this.ruleProperty() is always an array of the form:
								// [string-1, ..., string-n, ""] or [string-1, ..., string-n, "+"]
								// where each item is a tree.Keyword or tree.Variable
								merge = !isVariable && name.length > 1 && name.pop().value;

								// Try to store values as anonymous
								// If we need the value later we'll re-parse it in ruleset.parseValue
								value = this.anonymousValue();
								if (value) {
									parserInput.forget();
									// anonymous values absorb the end ';' which is required for them to work
									return new (tree.Declaration)(name, value, false, merge, startOfRule, fileInfo);
								}

								if (!value) {
									value = this.value();
								}

								important = this.important();
							}

							if (value && this.end()) {
								parserInput.forget();
								return new (tree.Declaration)(name, value, important, merge, startOfRule, fileInfo);
							}
							else {
								parserInput.restore();
							}
						} else {
							parserInput.restore();
						}
					},
					anonymousValue: function () {
						var index = parserInput.i;
						var match = parserInput.$re(/^([^@\$+\/'"*`(;{}-]*);/);
						if (match) {
							return new(tree.Anonymous)(match[1], index);
						}
					},

					//
					// An @import atrule
					//
					//     @import "lib";
					//
					// Depending on our environment, importing is done differently:
					// In the browser, it's an XHR request, in Node, it would be a
					// file-system operation. The function used for importing is
					// stored in `import`, which we pass to the Import constructor.
					//
					"import": function () {
						var path, features, index = parserInput.i;

						var dir = parserInput.$re(/^@import?\s+/);

						if (dir) {
							var options = (dir ? this.importOptions() : null) || {};

							if ((path = this.entities.quoted() || this.entities.url())) {
								features = this.mediaFeatures();

								if (!parserInput.$char(';')) {
									parserInput.i = index;
									error("missing semi-colon or unrecognised media features on import");
								}
								features = features && new(tree.Value)(features);
								return new(tree.Import)(path, features, options, index, fileInfo);
							}
							else {
								parserInput.i = index;
								error("malformed import statement");
							}
						}
					},

					importOptions: function() {
						var o, options = {}, optionName, value;

						// list of options, surrounded by parens
						if (!parserInput.$char('(')) { return null; }
						do {
							o = this.importOption();
							if (o) {
								optionName = o;
								value = true;
								switch (optionName) {
									case "css":
										optionName = "less";
										value = false;
										break;
									case "once":
										optionName = "multiple";
										value = false;
										break;
								}
								options[optionName] = value;
								if (!parserInput.$char(',')) { break; }
							}
						} while (o);
						expectChar(')');
						return options;
					},

					importOption: function() {
						var opt = parserInput.$re(/^(less|css|multiple|once|inline|reference|optional)/);
						if (opt) {
							return opt[1];
						}
					},

					mediaFeature: function () {
						var entities = this.entities, nodes = [], e, p;
						parserInput.save();
						do {
							e = entities.keyword() || entities.variable();
							if (e) {
								nodes.push(e);
							} else if (parserInput.$char('(')) {
								p = this.property();
								e = this.value();
								if (parserInput.$char(')')) {
									if (p && e) {
										nodes.push(new(tree.Paren)(new(tree.Declaration)(p, e, null, null, parserInput.i, fileInfo, true)));
									} else if (e) {
										nodes.push(new(tree.Paren)(e));
									} else {
										error("badly formed media feature definition");
									}
								} else {
									error("Missing closing ')'", "Parse");
								}
							}
						} while (e);

						parserInput.forget();
						if (nodes.length > 0) {
							return new(tree.Expression)(nodes);
						}
					},

					mediaFeatures: function () {
						var entities = this.entities, features = [], e;
						do {
							e = this.mediaFeature();
							if (e) {
								features.push(e);
								if (!parserInput.$char(',')) { break; }
							} else {
								e = entities.variable();
								if (e) {
									features.push(e);
									if (!parserInput.$char(',')) { break; }
								}
							}
						} while (e);

						return features.length > 0 ? features : null;
					},

					media: function () {
						var features, rules, media, debugInfo, index = parserInput.i;

						if (context.dumpLineNumbers) {
							debugInfo = getDebugInfo(index);
						}

						parserInput.save();

						if (parserInput.$str("@media")) {
							features = this.mediaFeatures();

							rules = this.block();

							if (!rules) {
								error("media definitions require block statements after any features");
							}

							parserInput.forget();

							media = new(tree.Media)(rules, features, index, fileInfo);
							if (context.dumpLineNumbers) {
								media.debugInfo = debugInfo;
							}

							return media;
						}

						parserInput.restore();
					},

					//

					// A @plugin directive, used to import plugins dynamically.
					//
					//     @plugin (args) "lib";
					//
					plugin: function () {
						var path, args, options,
							index = parserInput.i,
							dir   = parserInput.$re(/^@plugin?\s+/);

						if (dir) {
							error("BundleTransformer.Less does not support `@plugin` directive."); //BT+

							/*BT-
							args = this.pluginArgs();

							if (args) {
								options = {
									pluginArgs: args,
									isPlugin: true
								};
							}
							else {
								options = { isPlugin: true };
							}

							if ((path = this.entities.quoted() || this.entities.url())) {

								if (!parserInput.$char(';')) {
									parserInput.i = index;
									error("missing semi-colon on @plugin");
								}
								return new(tree.Import)(path, null, options, index, fileInfo);
							}
							else {
								parserInput.i = index;
								error("malformed @plugin statement");
							}
							*/
						}
					},

					pluginArgs: function() {
						// list of options, surrounded by parens
						parserInput.save();
						if (!parserInput.$char('(')) {
							parserInput.restore();
							return null;
						}
						var args = parserInput.$re(/^\s*([^\);]+)\)\s*/);
						if (args[1]) {
							parserInput.forget();
							return args[1].trim();
						}
						else { 
							parserInput.restore();
							return null;
						}
					},

					//
					// A CSS AtRule
					//
					//     @charset "utf-8";
					//
					atrule: function () {
						var index = parserInput.i, name, value, rules, nonVendorSpecificName,
							hasIdentifier, hasExpression, hasUnknown, hasBlock = true, isRooted = true;

						if (parserInput.currentChar() !== '@') { return; }

						value = this['import']() || this.plugin() || this.media();
						if (value) {
							return value;
						}

						parserInput.save();

						name = parserInput.$re(/^@[a-z-]+/);

						if (!name) { return; }

						nonVendorSpecificName = name;
						if (name.charAt(1) == '-' && name.indexOf('-', 2) > 0) {
							nonVendorSpecificName = "@" + name.slice(name.indexOf('-', 2) + 1);
						}

						switch (nonVendorSpecificName) {
							case "@charset":
								hasIdentifier = true;
								hasBlock = false;
								break;
							case "@namespace":
								hasExpression = true;
								hasBlock = false;
								break;
							case "@keyframes":
							case "@counter-style":
								hasIdentifier = true;
								break;
							case "@document":
							case "@supports":
								hasUnknown = true;
								isRooted = false;
								break;
							default:
								hasUnknown = true;
								break;
						}

						parserInput.commentStore.length = 0;

						if (hasIdentifier) {
							value = this.entity();
							if (!value) {
								error("expected " + name + " identifier");
							}
						} else if (hasExpression) {
							value = this.expression();
							if (!value) {
								error("expected " + name + " expression");
							}
						} else if (hasUnknown) {
							value = (parserInput.$re(/^[^{;]+/) || '').trim();
							hasBlock = (parserInput.currentChar() == '{');
							if (value) {
								value = new(tree.Anonymous)(value);
							}
						}

						if (hasBlock) {
							rules = this.blockRuleset();
						}

						if (rules || (!hasBlock && value && parserInput.$char(';'))) {
							parserInput.forget();
							return new (tree.AtRule)(name, value, rules, index, fileInfo,
								context.dumpLineNumbers ? getDebugInfo(index) : null,
								isRooted
							);
						}

						parserInput.restore("at-rule options not recognised");
					},

					//
					// A Value is a comma-delimited list of Expressions
					//
					//     font-family: Baskerville, Georgia, serif;
					//
					// In a Rule, a Value represents everything after the `:`,
					// and before the `;`.
					//
					value: function () {
						var e, expressions = [], index = parserInput.i;

						do {
							e = this.expression();
							if (e) {
								expressions.push(e);
								if (!parserInput.$char(',')) { break; }
							}
						} while (e);

						if (expressions.length > 0) {
							return new(tree.Value)(expressions, index);
						}
					},
					important: function () {
						if (parserInput.currentChar() === '!') {
							return parserInput.$re(/^! *important/);
						}
					},
					sub: function () {
						var a, e;

						parserInput.save();
						if (parserInput.$char('(')) {
							a = this.addition();
							if (a && parserInput.$char(')')) {
								parserInput.forget();
								e = new(tree.Expression)([a]);
								e.parens = true;
								return e;
							}
							parserInput.restore("Expected ')'");
							return;
						}
						parserInput.restore();
					},
					multiplication: function () {
						var m, a, op, operation, isSpaced;
						m = this.operand();
						if (m) {
							isSpaced = parserInput.isWhitespace(-1);
							while (true) {
								if (parserInput.peek(/^\/[*\/]/)) {
									break;
								}

								parserInput.save();

								op = parserInput.$char('/') || parserInput.$char('*');

								if (!op) { parserInput.forget(); break; }

								a = this.operand();

								if (!a) { parserInput.restore(); break; }
								parserInput.forget();

								m.parensInOp = true;
								a.parensInOp = true;
								operation = new(tree.Operation)(op, [operation || m, a], isSpaced);
								isSpaced = parserInput.isWhitespace(-1);
							}
							return operation || m;
						}
					},
					addition: function () {
						var m, a, op, operation, isSpaced;
						m = this.multiplication();
						if (m) {
							isSpaced = parserInput.isWhitespace(-1);
							while (true) {
								op = parserInput.$re(/^[-+]\s+/) || (!isSpaced && (parserInput.$char('+') || parserInput.$char('-')));
								if (!op) {
									break;
								}
								a = this.multiplication();
								if (!a) {
									break;
								}

								m.parensInOp = true;
								a.parensInOp = true;
								operation = new(tree.Operation)(op, [operation || m, a], isSpaced);
								isSpaced = parserInput.isWhitespace(-1);
							}
							return operation || m;
						}
					},
					conditions: function () {
						var a, b, index = parserInput.i, condition;

						a = this.condition();
						if (a) {
							while (true) {
								if (!parserInput.peek(/^,\s*(not\s*)?\(/) || !parserInput.$char(',')) {
									break;
								}
								b = this.condition();
								if (!b) {
									break;
								}
								condition = new(tree.Condition)('or', condition || a, b, index);
							}
							return condition || a;
						}
					},
					condition: function () {
						var result, logical, next;
						function or() {
							return parserInput.$str("or");
						}

						result = this.conditionAnd(this);
						if (!result) {
							return ;
						}
						logical = or();
						if (logical) {
							next = this.condition();
							if (next) {
								result = new(tree.Condition)(logical, result, next);
							} else {
								return ;
							}
						}
						return result;
					},
					conditionAnd: function () {
						var result, logical, next;
						function insideCondition(me) {
							return me.negatedCondition() || me.parenthesisCondition();
						}
						function and() {
							return parserInput.$str("and");
						}

						result = insideCondition(this);
						if (!result) {
							return ;
						}
						logical = and();
						if (logical) {
							next = this.conditionAnd();
							if (next) {
								result = new(tree.Condition)(logical, result, next);
							} else {
								return ;
							}
						}
						return result;
					},
					negatedCondition: function () {
						if (parserInput.$str("not")) {
							var result = this.parenthesisCondition();
							if (result) {
								result.negate = !result.negate;
							}
							return result;
						}
					},
					parenthesisCondition: function () {
						function tryConditionFollowedByParenthesis(me) {
							var body;
							parserInput.save();
							body = me.condition();
							if (!body) {
								parserInput.restore();
								return ;
							}
							if (!parserInput.$char(')')) {
								parserInput.restore();
								return ;
							}
							parserInput.forget();
							return body;
						}

						var body;
						parserInput.save();
						if (!parserInput.$str("(")) {
							parserInput.restore();
							return ;
						}
						body = tryConditionFollowedByParenthesis(this);
						if (body) {
							parserInput.forget();
							return body;
						}

						body = this.atomicCondition();
						if (!body) {
							parserInput.restore();
							return ;
						}
						if (!parserInput.$char(')')) {
							parserInput.restore("expected ')' got '" + parserInput.currentChar() + "'");
							return ;
						}
						parserInput.forget();
						return body;
					},
					atomicCondition: function () {
						var entities = this.entities, index = parserInput.i, a, b, c, op;

						a = this.addition() || entities.keyword() || entities.quoted();
						if (a) {
							if (parserInput.$char('>')) {
								if (parserInput.$char('=')) {
									op = ">=";
								} else {
									op = '>';
								}
							} else
							if (parserInput.$char('<')) {
								if (parserInput.$char('=')) {
									op = "<=";
								} else {
									op = '<';
								}
							} else
							if (parserInput.$char('=')) {
								if (parserInput.$char('>')) {
									op = "=>";
								} else if (parserInput.$char('<')) {
									op = '=<';
								} else {
									op = '=';
								}
							}
							if (op) {
								b = this.addition() || entities.keyword() || entities.quoted();
								if (b) {
									c = new(tree.Condition)(op, a, b, index, false);
								} else {
									error('expected expression');
								}
							} else {
								c = new(tree.Condition)('=', a, new(tree.Keyword)('true'), index, false);
							}
							return c;
						}
					},

					//
					// An operand is anything that can be part of an operation,
					// such as a Color, or a Variable
					//
					operand: function () {
						var entities = this.entities, negate;

						if (parserInput.peek(/^-[@\$\(]/)) {
							negate = parserInput.$char('-');
						}

						var o = this.sub() || entities.dimension() ||
								entities.color() || entities.variable() ||
								entities.property() || entities.call() ||
								entities.colorKeyword();

						if (negate) {
							o.parensInOp = true;
							o = new(tree.Negative)(o);
						}

						return o;
					},

					//
					// Expressions either represent mathematical operations,
					// or white-space delimited Entities.
					//
					//     1px solid black
					//     @var * 2
					//
					expression: function () {
						var entities = [], e, delim, index = parserInput.i;

						do {
							e = this.comment();
							if (e) {
								entities.push(e);
								continue;
							}
							e = this.addition() || this.entity();
							if (e) {
								entities.push(e);
								// operations do not allow keyword "/" dimension (e.g. small/20px) so we support that here
								if (!parserInput.peek(/^\/[\/*]/)) {
									delim = parserInput.$char('/');
									if (delim) {
										entities.push(new(tree.Anonymous)(delim, index));
									}
								}
							}
						} while (e);
						if (entities.length > 0) {
							return new(tree.Expression)(entities);
						}
					},
					property: function () {
						var name = parserInput.$re(/^(\*?-?[_a-zA-Z0-9-]+)\s*:/);
						if (name) {
							return name[1];
						}
					},
					ruleProperty: function () {
						var name = [], index = [], s, k;

						parserInput.save();

						var simpleProperty = parserInput.$re(/^([_a-zA-Z0-9-]+)\s*:/);
						if (simpleProperty) {
							name = [new(tree.Keyword)(simpleProperty[1])];
							parserInput.forget();
							return name;
						}

						function match(re) {
							var i = parserInput.i,
								chunk = parserInput.$re(re);
							if (chunk) {
								index.push(i);
								return name.push(chunk[1]);
							}
						}

						match(/^(\*?)/);
						while (true) {
							if (!match(/^((?:[\w-]+)|(?:[@\$]\{[\w-]+\}))/)) {
								break;
							}
						}

						if ((name.length > 1) && match(/^((?:\+_|\+)?)\s*:/)) {
							parserInput.forget();

							// at last, we have the complete match now. move forward,
							// convert name particles to tree objects and return:
							if (name[0] === '') {
								name.shift();
								index.shift();
							}
							for (k = 0; k < name.length; k++) {
								s = name[k];
								name[k] = (s.charAt(0) !== '@' && s.charAt(0) !== '$') ?
									new(tree.Keyword)(s) :
									(s.charAt(0) === '@' ?
										new(tree.Variable)('@' + s.slice(2, -1), index[k], fileInfo) :
										new(tree.Property)('$' + s.slice(2, -1), index[k], fileInfo));
							}
							return name;
						}
						parserInput.restore();
					}
				}
			};
		};
		/*BT-
		Parser.serializeVars = function(vars) {
			var s = '';

			for (var name in vars) {
				if (Object.hasOwnProperty.call(vars, name)) {
					var value = vars[name];
					s += ((name[0] === '@') ? '' : '@') + name + ': ' + value +
						((String(value).slice(-1) === ';') ? '' : ';');
				}
			}

			return s;
		};
		*/

		return Parser;
	};
	//#endregion

	//#region URL: /parser/parser-input
	modules['/parser/parser-input'] = function () {
		var chunker = require('/parser/chunker');

		var exports = function() {
			var input,       // Less input string
				j,           // current chunk
				saveStack = [],   // holds state for backtracking
				furthest,    // furthest index the parser has gone to
				furthestPossibleErrorMessage, // if this is furthest we got to, this is the probably cause
				chunks,      // chunkified input
				current,     // current chunk
				currentPos,  // index of current chunk, in `input`
				parserInput = {};

			var CHARCODE_SPACE = 32,
				CHARCODE_TAB = 9,
				CHARCODE_LF = 10,
				CHARCODE_CR = 13,
				CHARCODE_PLUS = 43,
				CHARCODE_COMMA = 44,
				CHARCODE_FORWARD_SLASH = 47,
				CHARCODE_9 = 57;

			function skipWhitespace(length) {
				var oldi = parserInput.i, oldj = j,
					curr = parserInput.i - currentPos,
					endIndex = parserInput.i + current.length - curr,
					mem = (parserInput.i += length),
					inp = input,
					c, nextChar, comment;

				for (; parserInput.i < endIndex; parserInput.i++) {
					c = inp.charCodeAt(parserInput.i);

					if (parserInput.autoCommentAbsorb && c === CHARCODE_FORWARD_SLASH) {
						nextChar = inp.charAt(parserInput.i + 1);
						if (nextChar === '/') {
							comment = {index: parserInput.i, isLineComment: true};
							var nextNewLine = inp.indexOf("\n", parserInput.i + 2);
							if (nextNewLine < 0) {
								nextNewLine = endIndex;
							}
							parserInput.i = nextNewLine;
							comment.text = inp.substr(comment.index, parserInput.i - comment.index);
							parserInput.commentStore.push(comment);
							continue;
						} else if (nextChar === '*') {
							var nextStarSlash = inp.indexOf("*/", parserInput.i + 2);
							if (nextStarSlash >= 0) {
								comment = {
									index: parserInput.i,
									text: inp.substr(parserInput.i, nextStarSlash + 2 - parserInput.i),
									isLineComment: false
								};
								parserInput.i += comment.text.length - 1;
								parserInput.commentStore.push(comment);
								continue;
							}
						}
						break;
					}

					if ((c !== CHARCODE_SPACE) && (c !== CHARCODE_LF) && (c !== CHARCODE_TAB) && (c !== CHARCODE_CR)) {
						break;
					}
				}

				current = current.slice(length + parserInput.i - mem + curr);
				currentPos = parserInput.i;

				if (!current.length) {
					if (j < chunks.length - 1) {
						current = chunks[++j];
						skipWhitespace(0); // skip space at the beginning of a chunk
						return true; // things changed
					}
					parserInput.finished = true;
				}

				return oldi !== parserInput.i || oldj !== j;
			}

			parserInput.save = function() {
				currentPos = parserInput.i;
				saveStack.push( { current: current, i: parserInput.i, j: j });
			};
			parserInput.restore = function(possibleErrorMessage) {

				if (parserInput.i > furthest || (parserInput.i === furthest && possibleErrorMessage && !furthestPossibleErrorMessage)) {
					furthest = parserInput.i;
					furthestPossibleErrorMessage = possibleErrorMessage;
				}
				var state = saveStack.pop();
				current = state.current;
				currentPos = parserInput.i = state.i;
				j = state.j;
			};
			parserInput.forget = function() {
				saveStack.pop();
			};
			parserInput.isWhitespace = function (offset) {
				var pos = parserInput.i + (offset || 0),
					code = input.charCodeAt(pos);
				return (code === CHARCODE_SPACE || code === CHARCODE_CR || code === CHARCODE_TAB || code === CHARCODE_LF);
			};

			// Specialization of $(tok)
			parserInput.$re = function(tok) {
				if (parserInput.i > currentPos) {
					current = current.slice(parserInput.i - currentPos);
					currentPos = parserInput.i;
				}

				var m = tok.exec(current);
				if (!m) {
					return null;
				}

				skipWhitespace(m[0].length);
				if (typeof m === "string") {
					return m;
				}

				return m.length === 1 ? m[0] : m;
			};

			parserInput.$char = function(tok) {
				if (input.charAt(parserInput.i) !== tok) {
					return null;
				}
				skipWhitespace(1);
				return tok;
			};

			parserInput.$str = function(tok) {
				var tokLength = tok.length;

				// https://jsperf.com/string-startswith/21
				for (var i = 0; i < tokLength; i++) {
					if (input.charAt(parserInput.i + i) !== tok.charAt(i)) {
						return null;
					}
				}

				skipWhitespace(tokLength);
				return tok;
			};

			parserInput.$quoted = function() {

				var startChar = input.charAt(parserInput.i);
				if (startChar !== "'" && startChar !== '"') {
					return;
				}
				var length = input.length,
					currentPosition = parserInput.i;

				for (var i = 1; i + currentPosition < length; i++) {
					var nextChar = input.charAt(i + currentPosition);
					switch (nextChar) {
						case "\\":
							i++;
							continue;
						case "\r":
						case "\n":
							break;
						case startChar:
							var str = input.substr(currentPosition, i + 1);
							skipWhitespace(i + 1);
							return str;
						default:
					}
				}
				return null;
			};

			parserInput.autoCommentAbsorb = true;
			parserInput.commentStore = [];
			parserInput.finished = false;

			// Same as $(), but don't change the state of the parser,
			// just return the match.
			parserInput.peek = function(tok) {
				if (typeof tok === 'string') {
					// https://jsperf.com/string-startswith/21
					for (var i = 0; i < tok.length; i++) {
						if (input.charAt(parserInput.i + i) !== tok.charAt(i)) {
							return false;
						}
					}
					return true;
				} else {
					return tok.test(current);
				}
			};

			// Specialization of peek()
			// TODO remove or change some currentChar calls to peekChar
			parserInput.peekChar = function(tok) {
				return input.charAt(parserInput.i) === tok;
			};

			parserInput.currentChar = function() {
				return input.charAt(parserInput.i);
			};

			parserInput.getInput = function() {
				return input;
			};

			parserInput.peekNotNumeric = function() {
				var c = input.charCodeAt(parserInput.i);
				// Is the first char of the dimension 0-9, '.', '+' or '-'
				return (c > CHARCODE_9 || c < CHARCODE_PLUS) || c === CHARCODE_FORWARD_SLASH || c === CHARCODE_COMMA;
			};

			parserInput.start = function(str, chunkInput, failFunction) {
				input = str;
				parserInput.i = j = currentPos = furthest = 0;

				// chunking apparently makes things quicker (but my tests indicate
				// it might actually make things slower in node at least)
				// and it is a non-perfect parse - it can't recognise
				// unquoted urls, meaning it can't distinguish comments
				// meaning comments with quotes or {}() in them get 'counted'
				// and then lead to parse errors.
				// In addition if the chunking chunks in the wrong place we might
				// not be able to parse a parser statement in one go
				// this is officially deprecated but can be switched on via an option
				// in the case it causes too much performance issues.
				if (chunkInput) {
					chunks = chunker(str, failFunction);
				} else {
					chunks = [str];
				}

				current = chunks[0];

				skipWhitespace(0);
			};

			parserInput.end = function() {
				var message,
					isFinished = parserInput.i >= input.length;

				if (parserInput.i < furthest) {
					message = furthestPossibleErrorMessage;
					parserInput.i = furthest;
				}
				return {
					isFinished: isFinished,
					furthest: parserInput.i,
					furthestPossibleErrorMessage: message,
					furthestReachedEnd: parserInput.i >= input.length - 1,
					furthestChar: input[parserInput.i]
				};
			};

			return parserInput;
		};

		return exports;
	};
	//#endregion

	//#region URL: /tree
	modules['/tree'] = function () {
		var tree = Object.create(null);

		tree.Node = require('/tree/node');
		tree.Color = require('/tree/color');
		tree.AtRule = require('/tree/atrule');
		tree.DetachedRuleset = require('/tree/detached-ruleset');
		tree.Operation = require('/tree/operation');
		tree.Dimension = require('/tree/dimension');
		tree.Unit = require('/tree/unit');
		tree.Keyword = require('/tree/keyword');
		tree.Variable = require('/tree/variable');
		tree.Property = require('/tree/property');
		tree.Ruleset = require('/tree/ruleset');
		tree.Element = require('/tree/element');
		tree.Attribute = require('/tree/attribute');
		tree.Combinator = require('/tree/combinator');
		tree.Selector = require('/tree/selector');
		tree.Quoted = require('/tree/quoted');
		tree.Expression = require('/tree/expression');
		tree.Declaration = require('/tree/declaration');
		tree.Call = require('/tree/call');
		tree.URL = require('/tree/url');
		tree.Import = require('/tree/import');
		tree.mixin = {
			Call: require('/tree/mixin-call'),
			Definition: require('/tree/mixin-definition')
		};
		tree.Comment = require('/tree/comment');
		tree.Anonymous = require('/tree/anonymous');
		tree.Value = require('/tree/value');
		tree.JavaScript = require('/tree/javascript');
		tree.Assignment = require('/tree/assignment');
		tree.Condition = require('/tree/condition');
		tree.Paren = require('/tree/paren');
		tree.Media = require('/tree/media');
		tree.UnicodeDescriptor = require('/tree/unicode-descriptor');
		tree.Negative = require('/tree/negative');
		tree.Extend = require('/tree/extend');
		tree.VariableCall = require('/tree/variable-call');

		return tree;
	};
	//#endregion

	//#region URL: /tree/anonymous
	modules['/tree/anonymous'] = function () {
		var Node = require("/tree/node");

		var Anonymous = function (value, index, currentFileInfo, mapLines, rulesetLike, visibilityInfo) {
			this.value = value;
			this._index = index;
			this._fileInfo = currentFileInfo;
			this.mapLines = mapLines;
			this.rulesetLike = (typeof rulesetLike === 'undefined') ? false : rulesetLike;
			this.allowRoot = true;
			this.copyVisibilityInfo(visibilityInfo);
		};
		Anonymous.prototype = new Node();
		Anonymous.prototype.type = "Anonymous";
		Anonymous.prototype.eval = function () {
			return new Anonymous(this.value, this._index, this._fileInfo, this.mapLines, this.rulesetLike, this.visibilityInfo());
		};
		Anonymous.prototype.compare = function (other) {
			return other.toCSS && this.toCSS() === other.toCSS() ? 0 : undefined;
		};
		Anonymous.prototype.isRulesetLike = function() {
			return this.rulesetLike;
		};
		Anonymous.prototype.genCSS = function (context, output) {
			this.nodeVisible = Boolean(this.value);
			if (this.nodeVisible) {
				output.add(this.value, this._fileInfo, this._index, this.mapLines);
			}
		};

		return Anonymous;
	};
	//#endregion

	//#region URL: /tree/assignment
	modules['/tree/assignment'] = function () {
		var Node = require('/tree/node');

		var Assignment = function (key, val) {
			this.key = key;
			this.value = val;
		};

		Assignment.prototype = new Node();
		Assignment.prototype.type = "Assignment";
		Assignment.prototype.accept = function (visitor) {
			this.value = visitor.visit(this.value);
		};
		Assignment.prototype.eval = function (context) {
			if (this.value.eval) {
				return new Assignment(this.key, this.value.eval(context));
			}
			return this;
		};
		Assignment.prototype.genCSS = function (context, output) {
			output.add(this.key + '=');
			if (this.value.genCSS) {
				this.value.genCSS(context, output);
			} else {
				output.add(this.value);
			}
		};

		return Assignment;
	};
	//#endregion

	//#region URL: /tree/atrule
	modules['/tree/atrule'] = function () {
		var Node = require("/tree/node"),
			Selector = require("/tree/selector"),
			Ruleset = require("/tree/ruleset"),
			Anonymous = require('/tree/anonymous');

		var AtRule = function (name, value, rules, index, currentFileInfo, debugInfo, isRooted, visibilityInfo) {
			var i;

			this.name  = name;
			this.value = (value instanceof Node) ? value : (value ? new Anonymous(value) : value);
			if (rules) {
				if (Array.isArray(rules)) {
					this.rules = rules;
				} else {
					this.rules = [rules];
					this.rules[0].selectors = (new Selector([], null, null, index, currentFileInfo)).createEmptySelectors();
				}
				for (i = 0; i < this.rules.length; i++) {
					this.rules[i].allowImports = true;
				}
				this.setParent(this.rules, this);
			}
			this._index = index;
			this._fileInfo = currentFileInfo;
			this.debugInfo = debugInfo;
			this.isRooted = isRooted || false;
			this.copyVisibilityInfo(visibilityInfo);
			this.allowRoot = true;
		};

		AtRule.prototype = new Node();
		AtRule.prototype.type = "AtRule";
		AtRule.prototype.accept = function (visitor) {
			var value = this.value, rules = this.rules;
			if (rules) {
				this.rules = visitor.visitArray(rules);
			}
			if (value) {
				this.value = visitor.visit(value);
			}
		};
		AtRule.prototype.isRulesetLike = function() {
			return this.rules || !this.isCharset();
		};
		AtRule.prototype.isCharset = function() {
			return "@charset" === this.name;
		};
		AtRule.prototype.genCSS = function (context, output) {
			var value = this.value, rules = this.rules;
			output.add(this.name, this.fileInfo(), this.getIndex());
			if (value) {
				output.add(' ');
				value.genCSS(context, output);
			}
			if (rules) {
				this.outputRuleset(context, output, rules);
			} else {
				output.add(';');
			}
		};
		AtRule.prototype.eval = function (context) {
			var mediaPathBackup, mediaBlocksBackup, value = this.value, rules = this.rules;

			// media stored inside other atrule should not bubble over it
			// backpup media bubbling information
			mediaPathBackup = context.mediaPath;
			mediaBlocksBackup = context.mediaBlocks;
			// deleted media bubbling information
			context.mediaPath = [];
			context.mediaBlocks = [];

			if (value) {
				value = value.eval(context);
			}
			if (rules) {
				// assuming that there is only one rule at this point - that is how parser constructs the rule
				rules = [rules[0].eval(context)];
				rules[0].root = true;
			}
			// restore media bubbling information
			context.mediaPath = mediaPathBackup;
			context.mediaBlocks = mediaBlocksBackup;

			return new AtRule(this.name, value, rules,
				this.getIndex(), this.fileInfo(), this.debugInfo, this.isRooted, this.visibilityInfo());
		};
		AtRule.prototype.variable = function (name) {
			if (this.rules) {
				// assuming that there is only one rule at this point - that is how parser constructs the rule
				return Ruleset.prototype.variable.call(this.rules[0], name);
			}
		};
		AtRule.prototype.find = function () {
			if (this.rules) {
				// assuming that there is only one rule at this point - that is how parser constructs the rule
				return Ruleset.prototype.find.apply(this.rules[0], arguments);
			}
		};
		AtRule.prototype.rulesets = function () {
			if (this.rules) {
				// assuming that there is only one rule at this point - that is how parser constructs the rule
				return Ruleset.prototype.rulesets.apply(this.rules[0]);
			}
		};
		AtRule.prototype.outputRuleset = function (context, output, rules) {
			var ruleCnt = rules.length, i;
			context.tabLevel = (context.tabLevel | 0) + 1;

			// Compressed
			if (context.compress) {
				output.add('{');
				for (i = 0; i < ruleCnt; i++) {
					rules[i].genCSS(context, output);
				}
				output.add('}');
				context.tabLevel--;
				return;
			}

			// Non-compressed
			var tabSetStr = '\n' + Array(context.tabLevel).join("  "), tabRuleStr = tabSetStr + "  ";
			if (!ruleCnt) {
				output.add(" {" + tabSetStr + '}');
			} else {
				output.add(" {" + tabRuleStr);
				rules[0].genCSS(context, output);
				for (i = 1; i < ruleCnt; i++) {
					output.add(tabRuleStr);
					rules[i].genCSS(context, output);
				}
				output.add(tabSetStr + '}');
			}

			context.tabLevel--;
		};

		return AtRule;
	};
	//#endregion

	//#region URL: /tree/attribute
	modules['/tree/attribute'] = function () {
		var Node = require('/tree/node');

		var Attribute = function (key, op, value) {
			this.key = key;
			this.op = op;
			this.value = value;
		};
		Attribute.prototype = new Node();
		Attribute.prototype.type = "Attribute";
		Attribute.prototype.eval = function (context) {
			return new Attribute(this.key.eval ? this.key.eval(context) : this.key,
				this.op, (this.value && this.value.eval) ? this.value.eval(context) : this.value);
		};
		Attribute.prototype.genCSS = function (context, output) {
			output.add(this.toCSS(context));
		};
		Attribute.prototype.toCSS = function (context) {
			var value = this.key.toCSS ? this.key.toCSS(context) : this.key;

			if (this.op) {
				value += this.op;
				value += (this.value.toCSS ? this.value.toCSS(context) : this.value);
			}

			return '[' + value + ']';
		};

		return Attribute;
	};
	//#endregion

	//#region URL: /tree/call
	modules['/tree/call'] = function () {
		var Node = require("/tree/node"),
			Anonymous = require("/tree/anonymous"),
			FunctionCaller = require("/functions/function-caller");
		//
		// A function call node.
		//
		var Call = function (name, args, index, currentFileInfo) {
			this.name = name;
			this.args = args;
			this.mathOn = name === 'calc' ? false : true;
			this._index = index;
			this._fileInfo = currentFileInfo;
		};
		Call.prototype = new Node();
		Call.prototype.type = "Call";
		Call.prototype.accept = function (visitor) {
			if (this.args) {
				this.args = visitor.visitArray(this.args);
			}
		};
		//
		// When evaluating a function call,
		// we either find the function in the functionRegistry,
		// in which case we call it, passing the  evaluated arguments,
		// if this returns null or we cannot find the function, we
		// simply print it out as it appeared originally [2].
		//
		// The reason why we evaluate the arguments, is in the case where
		// we try to pass a variable to a function, like: `saturate(@color)`.
		// The function should receive the value, not the variable.
		//
		Call.prototype.eval = function (context) {

			/**
			 * Turn off math for calc(), and switch back on for evaluating nested functions
			 */
			var currentMathContext = context.mathOn;
			context.mathOn = this.mathOn;
			var args = this.args.map(function (a) { return a.eval(context); });
			context.mathOn = currentMathContext;

			var result, funcCaller = new FunctionCaller(this.name, context, this.getIndex(), this.fileInfo());
			
			if (funcCaller.isValid()) {
				try {
					result = funcCaller.call(args);
				} catch (e) {
					throw { 
						type: e.type || "Runtime",
						message: "error evaluating function `" + this.name + "`" +
								 (e.message ? ': ' + e.message : ''),
						index: this.getIndex(), 
						filename: this.fileInfo().filename,
						line: e.lineNumber,
						column: e.columnNumber
					};
				}

				if (result !== null && result !== undefined) {
					// Results that that are not nodes are cast as Anonymous nodes
					// Falsy values or booleans are returned as empty nodes
					if (!(result instanceof Node)) {
						if (!result || result === true) {
							result = new Anonymous(null); 
						}
						else {
							result = new Anonymous(result.toString()); 
						}
						
					}
					result._index = this._index;
					result._fileInfo = this._fileInfo;
					return result;
				}

			}

			return new Call(this.name, args, this.getIndex(), this.fileInfo());
		};
		Call.prototype.genCSS = function (context, output) {
			output.add(this.name + "(", this.fileInfo(), this.getIndex());

			for (var i = 0; i < this.args.length; i++) {
				this.args[i].genCSS(context, output);
				if (i + 1 < this.args.length) {
					output.add(", ");
				}
			}

			output.add(")");
		};

		return Call;
	};
	//#endregion

	//#region URL: /tree/color
	modules['/tree/color'] = function () {
		var Node = require("/tree/node"),
			colors = require("/data/colors");

		//
		// RGB Colors - #ff0014, #eee
		//
		var Color = function (rgb, a, originalForm) {
			//
			// The end goal here, is to parse the arguments
			// into an integer triplet, such as `128, 255, 0`
			//
			// This facilitates operations and conversions.
			//
			if (Array.isArray(rgb)) {
				this.rgb = rgb;
			} else if (rgb.length == 6) {
				this.rgb = rgb.match(/.{2}/g).map(function (c) {
					return parseInt(c, 16);
				});
			} else {
				this.rgb = rgb.split('').map(function (c) {
					return parseInt(c + c, 16);
				});
			}
			this.alpha = typeof a === 'number' ? a : 1;
			if (typeof originalForm !== 'undefined') {
				this.value = originalForm;
			}
		};

		Color.prototype = new Node();
		Color.prototype.type = "Color";

		function clamp(v, max) {
			return Math.min(Math.max(v, 0), max);
		}

		function toHex(v) {
			return '#' + v.map(function (c) {
				c = clamp(Math.round(c), 255);
				return (c < 16 ? '0' : '') + c.toString(16);
			}).join('');
		}

		Color.prototype.luma = function () {
			var r = this.rgb[0] / 255,
				g = this.rgb[1] / 255,
				b = this.rgb[2] / 255;

			r = (r <= 0.03928) ? r / 12.92 : Math.pow(((r + 0.055) / 1.055), 2.4);
			g = (g <= 0.03928) ? g / 12.92 : Math.pow(((g + 0.055) / 1.055), 2.4);
			b = (b <= 0.03928) ? b / 12.92 : Math.pow(((b + 0.055) / 1.055), 2.4);

			return 0.2126 * r + 0.7152 * g + 0.0722 * b;
		};
		Color.prototype.genCSS = function (context, output) {
			output.add(this.toCSS(context));
		};
		Color.prototype.toCSS = function (context, doNotCompress) {
			var compress = context && context.compress && !doNotCompress, color, alpha;

			// `value` is set if this color was originally
			// converted from a named color string so we need
			// to respect this and try to output named color too.
			if (this.value) {
				return this.value;
			}

			// If we have some transparency, the only way to represent it
			// is via `rgba`. Otherwise, we use the hex representation,
			// which has better compatibility with older browsers.
			// Values are capped between `0` and `255`, rounded and zero-padded.
			alpha = this.fround(context, this.alpha);
			if (alpha < 1) {
				return "rgba(" + this.rgb.map(function (c) {
					return clamp(Math.round(c), 255);
				}).concat(clamp(alpha, 1))
					.join(',' + (compress ? '' : ' ')) + ")";
			}

			color = this.toRGB();

			if (compress) {
				var splitcolor = color.split('');

				// Convert color to short format
				if (splitcolor[1] === splitcolor[2] && splitcolor[3] === splitcolor[4] && splitcolor[5] === splitcolor[6]) {
					color = '#' + splitcolor[1] + splitcolor[3] + splitcolor[5];
				}
			}

			return color;
		};

		//
		// Operations have to be done per-channel, if not,
		// channels will spill onto each other. Once we have
		// our result, in the form of an integer triplet,
		// we create a new Color node to hold the result.
		//
		Color.prototype.operate = function (context, op, other) {
			var rgb = new Array(3);
			var alpha = this.alpha * (1 - other.alpha) + other.alpha;
			for (var c = 0; c < 3; c++) {
				rgb[c] = this._operate(context, op, this.rgb[c], other.rgb[c]);
			}
			return new Color(rgb, alpha);
		};
		Color.prototype.toRGB = function () {
			return toHex(this.rgb);
		};
		Color.prototype.toHSL = function () {
			var r = this.rgb[0] / 255,
				g = this.rgb[1] / 255,
				b = this.rgb[2] / 255,
				a = this.alpha;

			var max = Math.max(r, g, b), min = Math.min(r, g, b);
			var h, s, l = (max + min) / 2, d = max - min;

			if (max === min) {
				h = s = 0;
			} else {
				s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

				switch (max) {
					case r: h = (g - b) / d + (g < b ? 6 : 0); break;
					case g: h = (b - r) / d + 2;               break;
					case b: h = (r - g) / d + 4;               break;
				}
				h /= 6;
			}
			return { h: h * 360, s: s, l: l, a: a };
		};
		// Adapted from http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
		Color.prototype.toHSV = function () {
			var r = this.rgb[0] / 255,
				g = this.rgb[1] / 255,
				b = this.rgb[2] / 255,
				a = this.alpha;

			var max = Math.max(r, g, b), min = Math.min(r, g, b);
			var h, s, v = max;

			var d = max - min;
			if (max === 0) {
				s = 0;
			} else {
				s = d / max;
			}

			if (max === min) {
				h = 0;
			} else {
				switch (max) {
					case r: h = (g - b) / d + (g < b ? 6 : 0); break;
					case g: h = (b - r) / d + 2; break;
					case b: h = (r - g) / d + 4; break;
				}
				h /= 6;
			}
			return { h: h * 360, s: s, v: v, a: a };
		};
		Color.prototype.toARGB = function () {
			return toHex([this.alpha * 255].concat(this.rgb));
		};
		Color.prototype.compare = function (x) {
			return (x.rgb &&
				x.rgb[0] === this.rgb[0] &&
				x.rgb[1] === this.rgb[1] &&
				x.rgb[2] === this.rgb[2] &&
				x.alpha  === this.alpha) ? 0 : undefined;
		};

		Color.fromKeyword = function(keyword) {
			var c, key = keyword.toLowerCase();
			if (colors.hasOwnProperty(key)) {
				c = new Color(colors[key].slice(1));
			}
			else if (key === "transparent") {
				c = new Color([0, 0, 0], 0);
			}

			if (c) {
				c.value = keyword;
				return c;
			}
		};

		return Color;
	};
	//#endregion

	//#region URL: /tree/combinator
	modules['/tree/combinator'] = function () {
		var Node = require('/tree/node');

		var Combinator = function (value) {
			if (value === ' ') {
				this.value = ' ';
				this.emptyOrWhitespace = true;
			} else {
				this.value = value ? value.trim() : "";
				this.emptyOrWhitespace = this.value === "";
			}
		};
		Combinator.prototype = new Node();
		Combinator.prototype.type = "Combinator";
		var _noSpaceCombinators = {
			'': true,
			' ': true,
			'|': true
		};
		Combinator.prototype.genCSS = function (context, output) {
			var spaceOrEmpty = (context.compress || _noSpaceCombinators[this.value]) ? '' : ' ';
			output.add(spaceOrEmpty + this.value + spaceOrEmpty);
		};

		return Combinator;
	};
	//#endregion

	//#region URL: /tree/comment
	modules['/tree/comment'] = function () {
		var Node = require("/tree/node"),
			getDebugInfo = require("/tree/debug-info");

		var Comment = function (value, isLineComment, index, currentFileInfo) {
			this.value = value;
			this.isLineComment = isLineComment;
			this._index = index;
			this._fileInfo = currentFileInfo;
			this.allowRoot = true;
		};
		Comment.prototype = new Node();
		Comment.prototype.type = "Comment";
		Comment.prototype.genCSS = function (context, output) {
			if (this.debugInfo) {
				output.add(getDebugInfo(context, this), this.fileInfo(), this.getIndex());
			}
			output.add(this.value);
		};
		Comment.prototype.isSilent = function(context) {
			var isCompressed = context.compress && this.value[2] !== "!";
			return this.isLineComment || isCompressed;
		};

		return Comment;
	};
	//#endregion

	//#region URL: /tree/condition
	modules['/tree/condition'] = function () {
		var Node = require("/tree/node");

		var Condition = function (op, l, r, i, negate) {
			this.op = op.trim();
			this.lvalue = l;
			this.rvalue = r;
			this._index = i;
			this.negate = negate;
		};
		Condition.prototype = new Node();
		Condition.prototype.type = "Condition";
		Condition.prototype.accept = function (visitor) {
			this.lvalue = visitor.visit(this.lvalue);
			this.rvalue = visitor.visit(this.rvalue);
		};
		Condition.prototype.eval = function (context) {
			var result = (function (op, a, b) {
				switch (op) {
					case 'and': return a && b;
					case 'or':  return a || b;
					default:
						switch (Node.compare(a, b)) {
							case -1:
								return op === '<' || op === '=<' || op === '<=';
							case 0:
								return op === '=' || op === '>=' || op === '=<' || op === '<=';
							case 1:
								return op === '>' || op === '>=';
							default:
								return false;
						}
				}
			})(this.op, this.lvalue.eval(context), this.rvalue.eval(context));

			return this.negate ? !result : result;
		};

		return Condition;
	};
	//#endregion

	//#region URL: /tree/debug-info
	modules['/tree/debug-info'] = function () {
		var debugInfo = function(context, ctx, lineSeparator) {
			var result = "";
			if (context.dumpLineNumbers && !context.compress) {
				switch (context.dumpLineNumbers) {
					case 'comments':
						result = debugInfo.asComment(ctx);
						break;
					case 'mediaquery':
						result = debugInfo.asMediaQuery(ctx);
						break;
					case 'all':
						result = debugInfo.asComment(ctx) + (lineSeparator || "") + debugInfo.asMediaQuery(ctx);
						break;
				}
			}
			return result;
		};

		debugInfo.asComment = function(ctx) {
			return '/* line ' + ctx.debugInfo.lineNumber + ', ' + ctx.debugInfo.fileName + ' */\n';
		};

		debugInfo.asMediaQuery = function(ctx) {
			var filenameWithProtocol = ctx.debugInfo.fileName;
			if (!/^[a-z]+:\/\//i.test(filenameWithProtocol)) {
				filenameWithProtocol = 'file://' + filenameWithProtocol;
			}
			return '@media -sass-debug-info{filename{font-family:' +
				filenameWithProtocol.replace(/([.:\/\\])/g, function (a) {
					if (a == '\\') {
						a = '\/';
					}
					return '\\' + a;
				}) +
				'}line{font-family:\\00003' + ctx.debugInfo.lineNumber + '}}\n';
		};

		return debugInfo;
	};
	//#endregion

	//#region URL: /tree/declaration
	modules['/tree/declaration'] = function () {
		var Node = require("/tree/node"),
			Value = require("/tree/value"),
			Keyword = require("/tree/keyword"),
			Anonymous = require("/tree/anonymous");

		var Declaration = function (name, value, important, merge, index, currentFileInfo, inline, variable) {
			this.name = name;
			this.value = (value instanceof Node) ? value : new Value([value ? new Anonymous(value) : null]);
			this.important = important ? ' ' + important.trim() : '';
			this.merge = merge;
			this._index = index;
			this._fileInfo = currentFileInfo;
			this.inline = inline || false;
			this.variable = (variable !== undefined) ? variable
				: (name.charAt && (name.charAt(0) === '@'));
			this.allowRoot = true;
			this.setParent(this.value, this);
		};

		function evalName(context, name) {
			var value = "", i, n = name.length,
				output = {add: function (s) {value += s;}};
			for (i = 0; i < n; i++) {
				name[i].eval(context).genCSS(context, output);
			}
			return value;
		}

		Declaration.prototype = new Node();
		Declaration.prototype.type = "Declaration";
		Declaration.prototype.genCSS = function (context, output) {
			output.add(this.name + (context.compress ? ':' : ': '), this.fileInfo(), this.getIndex());
			try {
				this.value.genCSS(context, output);
			}
			catch (e) {
				e.index = this._index;
				e.filename = this._fileInfo.filename;
				throw e;
			}
			output.add(this.important + ((this.inline || (context.lastRule && context.compress)) ? "" : ";"), this._fileInfo, this._index);
		};
		Declaration.prototype.eval = function (context) {
			var strictMathBypass = false, name = this.name, evaldValue, variable = this.variable;
			if (typeof name !== "string") {
				// expand 'primitive' name directly to get
				// things faster (~10% for benchmark.less):
				name = (name.length === 1) && (name[0] instanceof Keyword) ?
						name[0].value : evalName(context, name);
				variable = false; // never treat expanded interpolation as new variable name
			}
			if (name === "font" && !context.strictMath) {
				strictMathBypass = true;
				context.strictMath = true;
			}
			try {
				context.importantScope.push({});
				evaldValue = this.value.eval(context);

				if (!this.variable && evaldValue.type === "DetachedRuleset") {
					throw { message: "Rulesets cannot be evaluated on a property.",
						index: this.getIndex(), filename: this.fileInfo().filename };
				}
				var important = this.important,
					importantResult = context.importantScope.pop();
				if (!important && importantResult.important) {
					important = importantResult.important;
				}

				return new Declaration(name,
								  evaldValue,
								  important,
								  this.merge,
								  this.getIndex(), this.fileInfo(), this.inline,
									  variable);
			}
			catch (e) {
				if (typeof e.index !== 'number') {
					e.index = this.getIndex();
					e.filename = this.fileInfo().filename;
				}
				throw e;
			}
			finally {
				if (strictMathBypass) {
					context.strictMath = false;
				}
			}
		};
		Declaration.prototype.makeImportant = function () {
			return new Declaration(this.name,
								  this.value,
								  "!important",
								  this.merge,
								  this.getIndex(), this.fileInfo(), this.inline);
		};

		return Declaration;
	};
	//#endregion

	//#region URL: /tree/detached-ruleset
	modules['/tree/detached-ruleset'] = function () {
		var Node = require("/tree/node"),
			contexts = require("/contexts"),
			utils = require("/utils");

		var DetachedRuleset = function (ruleset, frames) {
			this.ruleset = ruleset;
			this.frames = frames;
			this.setParent(this.ruleset, this);
		};
		DetachedRuleset.prototype = new Node();
		DetachedRuleset.prototype.type = "DetachedRuleset";
		DetachedRuleset.prototype.evalFirst = true;
		DetachedRuleset.prototype.accept = function (visitor) {
			this.ruleset = visitor.visit(this.ruleset);
		};
		DetachedRuleset.prototype.eval = function (context) {
			var frames = this.frames || utils.copyArray(context.frames);
			return new DetachedRuleset(this.ruleset, frames);
		};
		DetachedRuleset.prototype.callEval = function (context) {
			return this.ruleset.eval(this.frames ? new contexts.Eval(context, this.frames.concat(context.frames)) : context);
		};

		return DetachedRuleset;
	};
	//#endregion

	//#region URL: /tree/dimension
	modules['/tree/dimension'] = function () {
		var Node = require("/tree/node"),
			unitConversions = require("/data/unit-conversions"),
			Unit = require("/tree/unit"),
			Color = require("/tree/color");

		//
		// A number with a unit
		//
		var Dimension = function (value, unit) {
			this.value = parseFloat(value);
			if (isNaN(this.value)) {
				throw new Error("Dimension is not a number.");
			}
			this.unit = (unit && unit instanceof Unit) ? unit :
			  new Unit(unit ? [unit] : undefined);
			this.setParent(this.unit, this);
		};

		Dimension.prototype = new Node();
		Dimension.prototype.type = "Dimension";
		Dimension.prototype.accept = function (visitor) {
			this.unit = visitor.visit(this.unit);
		};
		Dimension.prototype.eval = function (context) {
			return this;
		};
		Dimension.prototype.toColor = function () {
			return new Color([this.value, this.value, this.value]);
		};
		Dimension.prototype.genCSS = function (context, output) {
			if ((context && context.strictUnits) && !this.unit.isSingular()) {
				throw new Error("Multiple units in dimension. Correct the units or use the unit function. Bad unit: " + this.unit.toString());
			}

			var value = this.fround(context, this.value),
				strValue = String(value);

			if (value !== 0 && value < 0.000001 && value > -0.000001) {
				// would be output 1e-6 etc.
				strValue = value.toFixed(20).replace(/0+$/, "");
			}

			if (context && context.compress) {
				// Zero values doesn't need a unit
				if (value === 0 && this.unit.isLength()) {
					output.add(strValue);
					return;
				}

				// Float values doesn't need a leading zero
				if (value > 0 && value < 1) {
					strValue = (strValue).substr(1);
				}
			}

			output.add(strValue);
			this.unit.genCSS(context, output);
		};

		// In an operation between two Dimensions,
		// we default to the first Dimension's unit,
		// so `1px + 2` will yield `3px`.
		Dimension.prototype.operate = function (context, op, other) {
			/* jshint noempty:false */
			var value = this._operate(context, op, this.value, other.value),
				unit = this.unit.clone();

			if (op === '+' || op === '-') {
				if (unit.numerator.length === 0 && unit.denominator.length === 0) {
					unit = other.unit.clone();
					if (this.unit.backupUnit) {
						unit.backupUnit = this.unit.backupUnit;
					}
				} else if (other.unit.numerator.length === 0 && unit.denominator.length === 0) {
					// do nothing
				} else {
					other = other.convertTo(this.unit.usedUnits());

					if (context.strictUnits && other.unit.toString() !== unit.toString()) {
						throw new Error("Incompatible units. Change the units or use the unit function. Bad units: '" + unit.toString() +
							"' and '" + other.unit.toString() + "'.");
					}

					value = this._operate(context, op, this.value, other.value);
				}
			} else if (op === '*') {
				unit.numerator = unit.numerator.concat(other.unit.numerator).sort();
				unit.denominator = unit.denominator.concat(other.unit.denominator).sort();
				unit.cancel();
			} else if (op === '/') {
				unit.numerator = unit.numerator.concat(other.unit.denominator).sort();
				unit.denominator = unit.denominator.concat(other.unit.numerator).sort();
				unit.cancel();
			}
			return new Dimension(value, unit);
		};
		Dimension.prototype.compare = function (other) {
			var a, b;

			if (!(other instanceof Dimension)) {
				return undefined;
			}

			if (this.unit.isEmpty() || other.unit.isEmpty()) {
				a = this;
				b = other;
			} else {
				a = this.unify();
				b = other.unify();
				if (a.unit.compare(b.unit) !== 0) {
					return undefined;
				}
			}

			return Node.numericCompare(a.value, b.value);
		};
		Dimension.prototype.unify = function () {
			return this.convertTo({ length: 'px', duration: 's', angle: 'rad' });
		};
		Dimension.prototype.convertTo = function (conversions) {
			var value = this.value, unit = this.unit.clone(),
				i, groupName, group, targetUnit, derivedConversions = {}, applyUnit;

			if (typeof conversions === 'string') {
				for (i in unitConversions) {
					if (unitConversions[i].hasOwnProperty(conversions)) {
						derivedConversions = {};
						derivedConversions[i] = conversions;
					}
				}
				conversions = derivedConversions;
			}
			applyUnit = function (atomicUnit, denominator) {
				/* jshint loopfunc:true */
				if (group.hasOwnProperty(atomicUnit)) {
					if (denominator) {
						value = value / (group[atomicUnit] / group[targetUnit]);
					} else {
						value = value * (group[atomicUnit] / group[targetUnit]);
					}

					return targetUnit;
				}

				return atomicUnit;
			};

			for (groupName in conversions) {
				if (conversions.hasOwnProperty(groupName)) {
					targetUnit = conversions[groupName];
					group = unitConversions[groupName];

					unit.map(applyUnit);
				}
			}

			unit.cancel();

			return new Dimension(value, unit);
		};

		return Dimension;
	};
	//#endregion

	//#region URL: /tree/element
	modules['/tree/element'] = function () {
		var Node = require("/tree/node"),
			Paren = require("/tree/paren"),
			Combinator = require("/tree/combinator");

		var Element = function (combinator, value, index, currentFileInfo, visibilityInfo) {
			this.combinator = combinator instanceof Combinator ?
							  combinator : new Combinator(combinator);

			if (typeof value === 'string') {
				this.value = value.trim();
			} else if (value) {
				this.value = value;
			} else {
				this.value = "";
			}
			this._index = index;
			this._fileInfo = currentFileInfo;
			this.copyVisibilityInfo(visibilityInfo);
			this.setParent(this.combinator, this);
		};
		Element.prototype = new Node();
		Element.prototype.type = "Element";
		Element.prototype.accept = function (visitor) {
			var value = this.value;
			this.combinator = visitor.visit(this.combinator);
			if (typeof value === "object") {
				this.value = visitor.visit(value);
			}
		};
		Element.prototype.eval = function (context) {
			return new Element(this.combinator,
									 this.value.eval ? this.value.eval(context) : this.value,
									 this.getIndex(),
									 this.fileInfo(), this.visibilityInfo());
		};
		Element.prototype.clone = function () {
			return new Element(this.combinator,
				this.value,
				this.getIndex(),
				this.fileInfo(), this.visibilityInfo());
		};
		Element.prototype.genCSS = function (context, output) {
			output.add(this.toCSS(context), this.fileInfo(), this.getIndex());
		};
		Element.prototype.toCSS = function (context) {
			context = context || {};
			var value = this.value, firstSelector = context.firstSelector;
			if (value instanceof Paren) {
				// selector in parens should not be affected by outer selector
				// flags (breaks only interpolated selectors - see #1973)
				context.firstSelector = true;
			}
			value = value.toCSS ? value.toCSS(context) : value;
			context.firstSelector = firstSelector;
			if (value === '' && this.combinator.value.charAt(0) === '&') {
				return '';
			} else {
				return this.combinator.toCSS(context) + value;
			}
		};

		return Element;
	};
	//#endregion

	//#region URL: /tree/expression
	modules['/tree/expression'] = function () {
		var Node = require('/tree/node'),
			Paren = require('/tree/paren'),
			Comment = require('/tree/comment');

		var Expression = function (value) {
			this.value = value;
			if (!value) {
				throw new Error("Expression requires an array parameter");
			}
		};
		Expression.prototype = new Node();
		Expression.prototype.type = "Expression";
		Expression.prototype.accept = function (visitor) {
			this.value = visitor.visitArray(this.value);
		};
		Expression.prototype.eval = function (context) {
			var returnValue,
				inParenthesis = this.parens && !this.parensInOp,
				doubleParen = false;
			if (inParenthesis) {
				context.inParenthesis();
			}
			if (this.value.length > 1) {
				returnValue = new Expression(this.value.map(function (e) {
					return e.eval(context);
				}));
			} else if (this.value.length === 1) {
				if (this.value[0].parens && !this.value[0].parensInOp) {
					doubleParen = true;
				}
				returnValue = this.value[0].eval(context);
			} else {
				returnValue = this;
			}
			if (inParenthesis) {
				context.outOfParenthesis();
			}
			if (this.parens && this.parensInOp && !(context.isMathOn()) && !doubleParen) {
				returnValue = new Paren(returnValue);
			}
			return returnValue;
		};
		Expression.prototype.genCSS = function (context, output) {
			for (var i = 0; i < this.value.length; i++) {
				this.value[i].genCSS(context, output);
				if (i + 1 < this.value.length) {
					output.add(" ");
				}
			}
		};
		Expression.prototype.throwAwayComments = function () {
			this.value = this.value.filter(function(v) {
				return !(v instanceof Comment);
			});
		};

		return Expression;
	};
	//#endregion

	//#region URL: /tree/extend
	modules['/tree/extend'] = function () {
		var Node = require("/tree/node"),
			Selector = require("/tree/selector");

		var Extend = function Extend(selector, option, index, currentFileInfo, visibilityInfo) {
			this.selector = selector;
			this.option = option;
			this.object_id = Extend.next_id++;
			this.parent_ids = [this.object_id];
			this._index = index;
			this._fileInfo = currentFileInfo;
			this.copyVisibilityInfo(visibilityInfo);
			this.allowRoot = true;

			switch (option) {
				case "all":
					this.allowBefore = true;
					this.allowAfter = true;
					break;
				default:
					this.allowBefore = false;
					this.allowAfter = false;
					break;
			}
			this.setParent(this.selector, this);
		};
		Extend.next_id = 0;

		Extend.prototype = new Node();
		Extend.prototype.type = "Extend";
		Extend.prototype.accept = function (visitor) {
			this.selector = visitor.visit(this.selector);
		};
		Extend.prototype.eval = function (context) {
			return new Extend(this.selector.eval(context), this.option, this.getIndex(), this.fileInfo(), this.visibilityInfo());
		};
		Extend.prototype.clone = function (context) {
			return new Extend(this.selector, this.option, this.getIndex(), this.fileInfo(), this.visibilityInfo());
		};
		// it concatenates (joins) all selectors in selector array
		Extend.prototype.findSelfSelectors = function (selectors) {
			var selfElements = [],
				i,
				selectorElements;

			for (i = 0; i < selectors.length; i++) {
				selectorElements = selectors[i].elements;
				// duplicate the logic in genCSS function inside the selector node.
				// future TODO - move both logics into the selector joiner visitor
				if (i > 0 && selectorElements.length && selectorElements[0].combinator.value === "") {
					selectorElements[0].combinator.value = ' ';
				}
				selfElements = selfElements.concat(selectors[i].elements);
			}

			this.selfSelectors = [new Selector(selfElements)];
			this.selfSelectors[0].copyVisibilityInfo(this.visibilityInfo());
		};

		return Extend;
	};
	//#endregion

	//#region URL: /tree/import
	modules['/tree/import'] = function () {
		var Node = require("/tree/node"),
			Media = require("/tree/media"),
			URL = require("/tree/url"),
			Quoted = require("/tree/quoted"),
			Ruleset = require("/tree/ruleset"),
			Anonymous = require("/tree/anonymous"),
			utils = require("/utils"),
			LessError = require("/less-error");

		//
		// CSS @import node
		//
		// The general strategy here is that we don't want to wait
		// for the parsing to be completed, before we start importing
		// the file. That's because in the context of a browser,
		// most of the time will be spent waiting for the server to respond.
		//
		// On creation, we push the import path to our import queue, though
		// `import,push`, we also pass it a callback, which it'll call once
		// the file has been fetched, and parsed.
		//
		var Import = function (path, features, options, index, currentFileInfo, visibilityInfo) {
			this.options = options;
			this._index = index;
			this._fileInfo = currentFileInfo;
			this.path = path;
			this.features = features;
			this.allowRoot = true;

			if (this.options.less !== undefined || this.options.inline) {
				this.css = !this.options.less || this.options.inline;
			} else {
				var pathValue = this.getPath();
				if (pathValue && /[#\.\&\?]css([\?;].*)?$/.test(pathValue)) {
					this.css = true;
				}
			}
			this.copyVisibilityInfo(visibilityInfo);
			this.setParent(this.features, this);
			this.setParent(this.path, this);
		};

		//
		// The actual import node doesn't return anything, when converted to CSS.
		// The reason is that it's used at the evaluation stage, so that the rules
		// it imports can be treated like any other rules.
		//
		// In `eval`, we make sure all Import nodes get evaluated, recursively, so
		// we end up with a flat structure, which can easily be imported in the parent
		// ruleset.
		//
		Import.prototype = new Node();
		Import.prototype.type = "Import";
		Import.prototype.accept = function (visitor) {
			if (this.features) {
				this.features = visitor.visit(this.features);
			}
			this.path = visitor.visit(this.path);
			if (/*BT- !this.options.isPlugin && */!this.options.inline && this.root) {
				this.root = visitor.visit(this.root);
			}
		};
		Import.prototype.genCSS = function (context, output) {
			if (this.css && this.path._fileInfo.reference === undefined) {
				output.add("@import ", this._fileInfo, this._index);
				this.path.genCSS(context, output);
				if (this.features) {
					output.add(" ");
					this.features.genCSS(context, output);
				}
				output.add(';');
			}
		};
		Import.prototype.getPath = function () {
			return (this.path instanceof URL) ?
				this.path.value.value : this.path.value;
		};
		Import.prototype.isVariableImport = function () {
			var path = this.path;
			if (path instanceof URL) {
				path = path.value;
			}
			if (path instanceof Quoted) {
				return path.containsVariables();
			}

			return true;
		};
		Import.prototype.evalForImport = function (context) {
			var path = this.path;

			if (path instanceof URL) {
				path = path.value;
			}

			return new Import(path.eval(context), this.features, this.options, this._index, this._fileInfo, this.visibilityInfo());
		};
		Import.prototype.evalPath = function (context) {
			var path = this.path.eval(context);
			var rootpath = this._fileInfo && this._fileInfo.rootpath;

			if (!(path instanceof URL)) {
				if (utils.isAppRelativePath(path.value)) { //BT+
					path.value = virtualFileManager.ToAbsolutePath(path.value); //BT+
				} //BT+

				if (rootpath) {
					if (utils.isAppRelativePath(rootpath)) { //BT+
						rootpath = virtualFileManager.ToAbsolutePath(rootpath); //BT+
					} //BT+

					var pathValue = path.value;
					// Add the base path if the import is relative
					if (pathValue && context.isPathRelative(pathValue)) {
						path.value = rootpath + pathValue;
					}
				}
				path.value = context.normalizePath(path.value);
			}

			return path;
		};
		Import.prototype.eval = function (context) {
			var result = this.doEval(context);
			if (this.options.reference || this.blocksVisibility()) {
				if (result.length || result.length === 0) {
					result.forEach(function (node) {
						node.addVisibilityBlock();
					}
					);
				} else {
					result.addVisibilityBlock();
				}
			}
			return result;
		};
		Import.prototype.doEval = function (context) {
			var ruleset, registry,
				features = this.features && this.features.eval(context);

			/*BT-
			if (this.options.isPlugin) {
				if (this.root && this.root.eval) {
					try {
						this.root.eval(context);
					}
					catch (e) {
						e.message = "Plugin error during evaluation";
						throw new LessError(e, this.root.imports, this.root.filename);
					}
				}
				registry = context.frames[0] && context.frames[0].functionRegistry;
				if ( registry && this.root && this.root.functions ) {
					registry.addMultiple( this.root.functions );
				}

				return [];
			}
			*/

			if (this.skip) {
				if (typeof this.skip === "function") {
					this.skip = this.skip();
				}
				if (this.skip) {
					return [];
				}
			}
			if (this.options.inline) {
				var contents = new Anonymous(this.root, 0,
					{
						filename: this.importedFilename,
						reference: this.path._fileInfo && this.path._fileInfo.reference
					}, true, true);

				return this.features ? new Media([contents], this.features.value) : [contents];
			} else if (this.css) {
				var newImport = new Import(this.evalPath(context), features, this.options, this._index);
				if (!newImport.css && this.error) {
					throw this.error;
				}
				return newImport;
			} else {
				ruleset = new Ruleset(null, utils.copyArray(this.root.rules));
				ruleset.evalImports(context);

				return this.features ? new Media(ruleset.rules, this.features.value) : ruleset.rules;
			}
		};

		return Import;
	};
	//#endregion

	//#region URL: /tree/javascript
	modules['/tree/javascript'] = function () {
		var JsEvalNode = require("/tree/js-eval-node"),
			Dimension = require("/tree/dimension"),
			Quoted = require("/tree/quoted"),
			Anonymous = require("/tree/anonymous");

		var JavaScript = function (string, escaped, index, currentFileInfo) {
			this.escaped = escaped;
			this.expression = string;
			this._index = index;
			this._fileInfo = currentFileInfo;
		};
		JavaScript.prototype = new JsEvalNode();
		JavaScript.prototype.type = "JavaScript";
		JavaScript.prototype.eval = function(context) {
			var result = this.evaluateJavaScript(this.expression, context);

			if (typeof result === 'number') {
				return new Dimension(result);
			} else if (typeof result === 'string') {
				return new Quoted('"' + result + '"', result, this.escaped, this._index);
			} else if (Array.isArray(result)) {
				return new Anonymous(result.join(', '));
			} else {
				return new Anonymous(result);
			}
		};

		return JavaScript;
	};
	//#endregion

	//#region URL: /tree/js-eval-node
	modules['/tree/js-eval-node'] = function () {
		var Node = require("/tree/node"),
			Variable = require("/tree/variable");

		var JsEvalNode = function() {
		};
		JsEvalNode.prototype = new Node();

		JsEvalNode.prototype.evaluateJavaScript = function (expression, context) {
			var result,
				that = this,
				evalContext = {};

			if (!context.javascriptEnabled) {
				throw { message: "Inline JavaScript is not enabled. Is it set in your options?",
					filename: this.fileInfo().filename,
					index: this.getIndex() };
			}

			expression = expression.replace(/@\{([\w-]+)\}/g, function (_, name) {
				return that.jsify(new Variable('@' + name, that.getIndex(), that.fileInfo()).eval(context));
			});

			try {
				expression = new Function('return (' + expression + ')');
			} catch (e) {
				throw { message: "JavaScript evaluation error: " + e.message + " from `" + expression + "`" ,
					filename: this.fileInfo().filename,
					index: this.getIndex() };
			}

			var variables = context.frames[0].variables();
			for (var k in variables) {
				if (variables.hasOwnProperty(k)) {
					/* jshint loopfunc:true */
					evalContext[k.slice(1)] = {
						value: variables[k].value,
						toJS: function () {
							return this.value.eval(context).toCSS();
						}
					};
				}
			}

			try {
				result = expression.call(evalContext);
			} catch (e) {
				throw { message: "JavaScript evaluation error: '" + e.name + ': ' + e.message.replace(/["]/g, "'") + "'" ,
					filename: this.fileInfo().filename,
					index: this.getIndex() };
			}
			return result;
		};
		JsEvalNode.prototype.jsify = function (obj) {
			if (Array.isArray(obj.value) && (obj.value.length > 1)) {
				return '[' + obj.value.map(function (v) { return v.toCSS(); }).join(', ') + ']';
			} else {
				return obj.toCSS();
			}
		};

		return JsEvalNode;
	};
	//#endregion

	//#region URL: /tree/keyword
	modules['/tree/keyword'] = function () {
		var Node = require('/tree/node');

		var Keyword = function (value) { this.value = value; };
		Keyword.prototype = new Node();
		Keyword.prototype.type = "Keyword";
		Keyword.prototype.genCSS = function (context, output) {
			if (this.value === '%') { throw { type: "Syntax", message: "Invalid % without number" }; }
			output.add(this.value);
		};

		Keyword.True = new Keyword('true');
		Keyword.False = new Keyword('false');

		return Keyword;
	};
	//#endregion

	//#region URL: /tree/media
	modules['/tree/media'] = function () {
		var Ruleset = require("/tree/ruleset"),
			Value = require("/tree/value"),
			Selector = require("/tree/selector"),
			Anonymous = require("/tree/anonymous"),
			Expression = require("/tree/expression"),
			AtRule = require("/tree/atrule"),
			utils = require("/utils");

		var Media = function (value, features, index, currentFileInfo, visibilityInfo) {
			this._index = index;
			this._fileInfo = currentFileInfo;

			var selectors = (new Selector([], null, null, this._index, this._fileInfo)).createEmptySelectors();

			this.features = new Value(features);
			this.rules = [new Ruleset(selectors, value)];
			this.rules[0].allowImports = true;
			this.copyVisibilityInfo(visibilityInfo);
			this.allowRoot = true;
			this.setParent(selectors, this);
			this.setParent(this.features, this);
			this.setParent(this.rules, this);
		};
		Media.prototype = new AtRule();
		Media.prototype.type = "Media";
		Media.prototype.isRulesetLike = function() { return true; };
		Media.prototype.accept = function (visitor) {
			if (this.features) {
				this.features = visitor.visit(this.features);
			}
			if (this.rules) {
				this.rules = visitor.visitArray(this.rules);
			}
		};
		Media.prototype.genCSS = function (context, output) {
			output.add('@media ', this._fileInfo, this._index);
			this.features.genCSS(context, output);
			this.outputRuleset(context, output, this.rules);
		};
		Media.prototype.eval = function (context) {
			if (!context.mediaBlocks) {
				context.mediaBlocks = [];
				context.mediaPath = [];
			}

			var media = new Media(null, [], this._index, this._fileInfo, this.visibilityInfo());
			if (this.debugInfo) {
				this.rules[0].debugInfo = this.debugInfo;
				media.debugInfo = this.debugInfo;
			}
			
			media.features = this.features.eval(context);

			context.mediaPath.push(media);
			context.mediaBlocks.push(media);

			this.rules[0].functionRegistry = context.frames[0].functionRegistry.inherit();
			context.frames.unshift(this.rules[0]);
			media.rules = [this.rules[0].eval(context)];
			context.frames.shift();

			context.mediaPath.pop();

			return context.mediaPath.length === 0 ? media.evalTop(context) :
						media.evalNested(context);
		};
		Media.prototype.evalTop = function (context) {
			var result = this;

			// Render all dependent Media blocks.
			if (context.mediaBlocks.length > 1) {
				var selectors = (new Selector([], null, null, this.getIndex(), this.fileInfo())).createEmptySelectors();
				result = new Ruleset(selectors, context.mediaBlocks);
				result.multiMedia = true;
				result.copyVisibilityInfo(this.visibilityInfo());
				this.setParent(result, this);
			}

			delete context.mediaBlocks;
			delete context.mediaPath;

			return result;
		};
		Media.prototype.evalNested = function (context) {
			var i, value,
				path = context.mediaPath.concat([this]);

			// Extract the media-query conditions separated with `,` (OR).
			for (i = 0; i < path.length; i++) {
				value = path[i].features instanceof Value ?
							path[i].features.value : path[i].features;
				path[i] = Array.isArray(value) ? value : [value];
			}

			// Trace all permutations to generate the resulting media-query.
			//
			// (a, b and c) with nested (d, e) ->
			//    a and d
			//    a and e
			//    b and c and d
			//    b and c and e
			this.features = new Value(this.permute(path).map(function (path) {
				path = path.map(function (fragment) {
					return fragment.toCSS ? fragment : new Anonymous(fragment);
				});

				for (i = path.length - 1; i > 0; i--) {
					path.splice(i, 0, new Anonymous("and"));
				}

				return new Expression(path);
			}));
			this.setParent(this.features, this);

			// Fake a tree-node that doesn't output anything.
			return new Ruleset([], []);
		};
		Media.prototype.permute = function (arr) {
			if (arr.length === 0) {
				return [];
			} else if (arr.length === 1) {
				return arr[0];
			} else {
				var result = [];
				var rest = this.permute(arr.slice(1));
				for (var i = 0; i < rest.length; i++) {
					for (var j = 0; j < arr[0].length; j++) {
						result.push([arr[0][j]].concat(rest[i]));
					}
				}
				return result;
			}
		};
		Media.prototype.bubbleSelectors = function (selectors) {
			if (!selectors) {
				return;
			}
			this.rules = [new Ruleset(utils.copyArray(selectors), [this.rules[0]])];
			this.setParent(this.rules, this);
		};

		return Media;
	};
	//#endregion

	//#region URL: /tree/mixin-call
	modules['/tree/mixin-call'] = function () {
		var Node = require("/tree/node"),
			Selector = require("/tree/selector"),
			MixinDefinition = require("/tree/mixin-definition"),
			defaultFunc = require("/functions/default");

		var MixinCall = function (elements, args, index, currentFileInfo, important) {
			this.selector = new Selector(elements);
			this.arguments = args || [];
			this._index = index;
			this._fileInfo = currentFileInfo;
			this.important = important;
			this.allowRoot = true;
			this.setParent(this.selector, this);
		};
		MixinCall.prototype = new Node();
		MixinCall.prototype.type = "MixinCall";
		MixinCall.prototype.accept = function (visitor) {
			if (this.selector) {
				this.selector = visitor.visit(this.selector);
			}
			if (this.arguments.length) {
				this.arguments = visitor.visitArray(this.arguments);
			}
		};
		MixinCall.prototype.eval = function (context) {
			var mixins, mixin, mixinPath, args = [], arg, argValue,
				rules = [], match = false, i, m, f, isRecursive, isOneFound,
				candidates = [], candidate, conditionResult = [], defaultResult, defFalseEitherCase = -1,
				defNone = 0, defTrue = 1, defFalse = 2, count, originalRuleset, noArgumentsFilter;

			function calcDefGroup(mixin, mixinPath) {
				var f, p, namespace;

				for (f = 0; f < 2; f++) {
					conditionResult[f] = true;
					defaultFunc.value(f);
					for (p = 0; p < mixinPath.length && conditionResult[f]; p++) {
						namespace = mixinPath[p];
						if (namespace.matchCondition) {
							conditionResult[f] = conditionResult[f] && namespace.matchCondition(null, context);
						}
					}
					if (mixin.matchCondition) {
						conditionResult[f] = conditionResult[f] && mixin.matchCondition(args, context);
					}
				}
				if (conditionResult[0] || conditionResult[1]) {
					if (conditionResult[0] != conditionResult[1]) {
						return conditionResult[1] ?
							defTrue : defFalse;
					}

					return defNone;
				}
				return defFalseEitherCase;
			}

			for (i = 0; i < this.arguments.length; i++) {
				arg = this.arguments[i];
				argValue = arg.value.eval(context);
				if (arg.expand && Array.isArray(argValue.value)) {
					argValue = argValue.value;
					for (m = 0; m < argValue.length; m++) {
						args.push({value: argValue[m]});
					}
				} else {
					args.push({name: arg.name, value: argValue});
				}
			}

			noArgumentsFilter = function(rule) {return rule.matchArgs(null, context);};

			for (i = 0; i < context.frames.length; i++) {
				if ((mixins = context.frames[i].find(this.selector, null, noArgumentsFilter)).length > 0) {
					isOneFound = true;

					// To make `default()` function independent of definition order we have two "subpasses" here.
					// At first we evaluate each guard *twice* (with `default() == true` and `default() == false`),
					// and build candidate list with corresponding flags. Then, when we know all possible matches,
					// we make a final decision.

					for (m = 0; m < mixins.length; m++) {
						mixin = mixins[m].rule;
						mixinPath = mixins[m].path;
						isRecursive = false;
						for (f = 0; f < context.frames.length; f++) {
							if ((!(mixin instanceof MixinDefinition)) && mixin === (context.frames[f].originalRuleset || context.frames[f])) {
								isRecursive = true;
								break;
							}
						}
						if (isRecursive) {
							continue;
						}

						if (mixin.matchArgs(args, context)) {
							candidate = {mixin: mixin, group: calcDefGroup(mixin, mixinPath)};

							if (candidate.group !== defFalseEitherCase) {
								candidates.push(candidate);
							}

							match = true;
						}
					}

					defaultFunc.reset();

					count = [0, 0, 0];
					for (m = 0; m < candidates.length; m++) {
						count[candidates[m].group]++;
					}

					if (count[defNone] > 0) {
						defaultResult = defFalse;
					} else {
						defaultResult = defTrue;
						if ((count[defTrue] + count[defFalse]) > 1) {
							throw { type: 'Runtime',
								message: 'Ambiguous use of `default()` found when matching for `' + this.format(args) + '`',
								index: this.getIndex(), filename: this.fileInfo().filename };
						}
					}

					for (m = 0; m < candidates.length; m++) {
						candidate = candidates[m].group;
						if ((candidate === defNone) || (candidate === defaultResult)) {
							try {
								mixin = candidates[m].mixin;
								if (!(mixin instanceof MixinDefinition)) {
									originalRuleset = mixin.originalRuleset || mixin;
									mixin = new MixinDefinition("", [], mixin.rules, null, false, null, originalRuleset.visibilityInfo());
									mixin.originalRuleset = originalRuleset;
								}
								var newRules = mixin.evalCall(context, args, this.important).rules;
								this._setVisibilityToReplacement(newRules);
								Array.prototype.push.apply(rules, newRules);
							} catch (e) {
								throw { message: e.message, index: this.getIndex(), filename: this.fileInfo().filename, stack: e.stack };
							}
						}
					}

					if (match) {
						return rules;
					}
				}
			}
			if (isOneFound) {
				throw { type:    'Runtime',
					message: 'No matching definition was found for `' + this.format(args) + '`',
					index:   this.getIndex(), filename: this.fileInfo().filename };
			} else {
				throw { type:    'Name',
					message: this.selector.toCSS().trim() + " is undefined",
					index:   this.getIndex(), filename: this.fileInfo().filename };
			}
		};

		MixinCall.prototype._setVisibilityToReplacement = function (replacement) {
			var i, rule;
			if (this.blocksVisibility()) {
				for (i = 0; i < replacement.length; i++) {
					rule = replacement[i];
					rule.addVisibilityBlock();
				}
			}
		};
		MixinCall.prototype.format = function (args) {
			return this.selector.toCSS().trim() + '(' +
				(args ? args.map(function (a) {
					var argValue = "";
					if (a.name) {
						argValue += a.name + ":";
					}
					if (a.value.toCSS) {
						argValue += a.value.toCSS();
					} else {
						argValue += "???";
					}
					return argValue;
				}).join(', ') : "") + ")";
		};

		return MixinCall;
	};
	//#endregion

	//#region URL: /tree/mixin-definition
	modules['/tree/mixin-definition'] = function () {
		var Selector = require("/tree/selector"),
			Element = require("/tree/element"),
			Ruleset = require("/tree/ruleset"),
			Declaration = require("/tree/declaration"),
			Expression = require("/tree/expression"),
			contexts = require("/contexts"),
			utils = require("/utils");

		var Definition = function (name, params, rules, condition, variadic, frames, visibilityInfo) {
			this.name = name;
			this.selectors = [new Selector([new Element(null, name, this._index, this._fileInfo)])];
			this.params = params;
			this.condition = condition;
			this.variadic = variadic;
			this.arity = params.length;
			this.rules = rules;
			this._lookups = {};
			var optionalParameters = [];
			this.required = params.reduce(function (count, p) {
				if (!p.name || (p.name && !p.value)) {
					return count + 1;
				}
				else {
					optionalParameters.push(p.name);
					return count;
				}
			}, 0);
			this.optionalParameters = optionalParameters;
			this.frames = frames;
			this.copyVisibilityInfo(visibilityInfo);
			this.allowRoot = true;
		};
		Definition.prototype = new Ruleset();
		Definition.prototype.type = "MixinDefinition";
		Definition.prototype.evalFirst = true;
		Definition.prototype.accept = function (visitor) {
			if (this.params && this.params.length) {
				this.params = visitor.visitArray(this.params);
			}
			this.rules = visitor.visitArray(this.rules);
			if (this.condition) {
				this.condition = visitor.visit(this.condition);
			}
		};
		Definition.prototype.evalParams = function (context, mixinEnv, args, evaldArguments) {
			/* jshint boss:true */
			var frame = new Ruleset(null, null),
				varargs, arg,
				params = utils.copyArray(this.params),
				i, j, val, name, isNamedFound, argIndex, argsLength = 0;

			if (mixinEnv.frames && mixinEnv.frames[0] && mixinEnv.frames[0].functionRegistry) {
				frame.functionRegistry = mixinEnv.frames[0].functionRegistry.inherit();
			}
			mixinEnv = new contexts.Eval(mixinEnv, [frame].concat(mixinEnv.frames));

			if (args) {
				args = utils.copyArray(args);
				argsLength = args.length;

				for (i = 0; i < argsLength; i++) {
					arg = args[i];
					if (name = (arg && arg.name)) {
						isNamedFound = false;
						for (j = 0; j < params.length; j++) {
							if (!evaldArguments[j] && name === params[j].name) {
								evaldArguments[j] = arg.value.eval(context);
								frame.prependRule(new Declaration(name, arg.value.eval(context)));
								isNamedFound = true;
								break;
							}
						}
						if (isNamedFound) {
							args.splice(i, 1);
							i--;
							continue;
						} else {
							throw { type: 'Runtime', message: "Named argument for " + this.name +
								' ' + args[i].name + ' not found' };
						}
					}
				}
			}
			argIndex = 0;
			for (i = 0; i < params.length; i++) {
				if (evaldArguments[i]) { continue; }

				arg = args && args[argIndex];

				if (name = params[i].name) {
					if (params[i].variadic) {
						varargs = [];
						for (j = argIndex; j < argsLength; j++) {
							varargs.push(args[j].value.eval(context));
						}
						frame.prependRule(new Declaration(name, new Expression(varargs).eval(context)));
					} else {
						val = arg && arg.value;
						if (val) {
							val = val.eval(context);
						} else if (params[i].value) {
							val = params[i].value.eval(mixinEnv);
							frame.resetCache();
						} else {
							throw { type: 'Runtime', message: "wrong number of arguments for " + this.name +
								' (' + argsLength + ' for ' + this.arity + ')' };
						}

						frame.prependRule(new Declaration(name, val));
						evaldArguments[i] = val;
					}
				}

				if (params[i].variadic && args) {
					for (j = argIndex; j < argsLength; j++) {
						evaldArguments[j] = args[j].value.eval(context);
					}
				}
				argIndex++;
			}

			return frame;
		};
		Definition.prototype.makeImportant = function() {
			var rules = !this.rules ? this.rules : this.rules.map(function (r) {
				if (r.makeImportant) {
					return r.makeImportant(true);
				} else {
					return r;
				}
			});
			var result = new Definition(this.name, this.params, rules, this.condition, this.variadic, this.frames);
			return result;
		};
		Definition.prototype.eval = function (context) {
			return new Definition(this.name, this.params, this.rules, this.condition, this.variadic, this.frames || utils.copyArray(context.frames));
		};
		Definition.prototype.evalCall = function (context, args, important) {
			var _arguments = [],
				mixinFrames = this.frames ? this.frames.concat(context.frames) : context.frames,
				frame = this.evalParams(context, new contexts.Eval(context, mixinFrames), args, _arguments),
				rules, ruleset;

			frame.prependRule(new Declaration('@arguments', new Expression(_arguments).eval(context)));

			rules = utils.copyArray(this.rules);

			ruleset = new Ruleset(null, rules);
			ruleset.originalRuleset = this;
			ruleset = ruleset.eval(new contexts.Eval(context, [this, frame].concat(mixinFrames)));
			if (important) {
				ruleset = ruleset.makeImportant();
			}
			return ruleset;
		};
		Definition.prototype.matchCondition = function (args, context) {
			if (this.condition && !this.condition.eval(
				new contexts.Eval(context,
					[this.evalParams(context, /* the parameter variables */
						new contexts.Eval(context, this.frames ? this.frames.concat(context.frames) : context.frames), args, [])]
					.concat(this.frames || []) // the parent namespace/mixin frames
					.concat(context.frames)))) { // the current environment frames
				return false;
			}
			return true;
		};
		Definition.prototype.matchArgs = function (args, context) {
			var allArgsCnt = (args && args.length) || 0, len, optionalParameters = this.optionalParameters;
			var requiredArgsCnt = !args ? 0 : args.reduce(function (count, p) {
				if (optionalParameters.indexOf(p.name) < 0) {
					return count + 1;
				} else {
					return count;
				}
			}, 0);

			if (!this.variadic) {
				if (requiredArgsCnt < this.required) {
					return false;
				}
				if (allArgsCnt > this.params.length) {
					return false;
				}
			} else {
				if (requiredArgsCnt < (this.required - 1)) {
					return false;
				}
			}

			// check patterns
			len = Math.min(requiredArgsCnt, this.arity);

			for (var i = 0; i < len; i++) {
				if (!this.params[i].name && !this.params[i].variadic) {
					if (args[i].value.eval(context).toCSS() != this.params[i].value.eval(context).toCSS()) {
						return false;
					}
				}
			}
			return true;
		};

		return Definition;
	};
	//#endregion

	//#region URL: /tree/negative
	modules['/tree/negative'] = function () {
		var Node = require('/tree/node'),
			Operation = require('/tree/operation'),
			Dimension = require('/tree/dimension');

		var Negative = function (node) {
			this.value = node;
		};
		Negative.prototype = new Node();
		Negative.prototype.type = "Negative";
		Negative.prototype.genCSS = function (context, output) {
			output.add('-');
			this.value.genCSS(context, output);
		};
		Negative.prototype.eval = function (context) {
			if (context.isMathOn()) {
				return (new Operation('*', [new Dimension(-1), this.value])).eval(context);
			}
			return new Negative(this.value.eval(context));
		};

		return Negative;
	};
	//#endregion

	//#region URL: /tree/node
	modules['/tree/node'] = function () {
		var Node = function() {
			this.parent = null;
			this.visibilityBlocks = undefined;
			this.nodeVisible = undefined;
			this.rootNode = null;
			this.parsed = null;

			var self = this;
			Object.defineProperty(this, "currentFileInfo", {
				get: function() { return self.fileInfo(); }
			});
			Object.defineProperty(this, "index", {
				get: function() { return self.getIndex(); }
			});

		};
		Node.prototype.setParent = function(nodes, parent) {
			function set(node) {
				if (node && node instanceof Node) {
					node.parent = parent;
				}
			}
			if (Array.isArray(nodes)) {
				nodes.forEach(set);
			}
			else {
				set(nodes);
			}
		};
		Node.prototype.getIndex = function() {
			return this._index || (this.parent && this.parent.getIndex()) || 0;
		};
		Node.prototype.fileInfo = function() {
			return this._fileInfo || (this.parent && this.parent.fileInfo()) || {};
		};
		Node.prototype.isRulesetLike = function() { return false; };
		Node.prototype.toCSS = function (context) {
			var strs = [];
			this.genCSS(context, {
				add: function(chunk, fileInfo, index) {
					strs.push(chunk);
				},
				isEmpty: function () {
					return strs.length === 0;
				}
			});
			return strs.join('');
		};
		Node.prototype.genCSS = function (context, output) {
			output.add(this.value);
		};
		Node.prototype.accept = function (visitor) {
			this.value = visitor.visit(this.value);
		};
		Node.prototype.eval = function () { return this; };
		Node.prototype._operate = function (context, op, a, b) {
			switch (op) {
				case '+': return a + b;
				case '-': return a - b;
				case '*': return a * b;
				case '/': return a / b;
			}
		};
		Node.prototype.fround = function(context, value) {
			var precision = context && context.numPrecision;
			// add "epsilon" to ensure numbers like 1.000000005 (represented as 1.000000004999...) are properly rounded:
			return (precision) ? Number((value + 2e-16).toFixed(precision)) : value;
		};
		Node.compare = function (a, b) {
			/* returns:
			 -1: a < b
			 0: a = b
			 1: a > b
			 and *any* other value for a != b (e.g. undefined, NaN, -2 etc.) */

			if ((a.compare) &&
				// for "symmetric results" force toCSS-based comparison
				// of Quoted or Anonymous if either value is one of those
				!(b.type === "Quoted" || b.type === "Anonymous")) {
				return a.compare(b);
			} else if (b.compare) {
				return -b.compare(a);
			} else if (a.type !== b.type) {
				return undefined;
			}

			a = a.value;
			b = b.value;
			if (!Array.isArray(a)) {
				return a === b ? 0 : undefined;
			}
			if (a.length !== b.length) {
				return undefined;
			}
			for (var i = 0; i < a.length; i++) {
				if (Node.compare(a[i], b[i]) !== 0) {
					return undefined;
				}
			}
			return 0;
		};

		Node.numericCompare = function (a, b) {
			return a  <  b ? -1
				: a === b ?  0
				: a  >  b ?  1 : undefined;
		};
		// Returns true if this node represents root of ast imported by reference
		Node.prototype.blocksVisibility = function () {
			if (this.visibilityBlocks == null) {
				this.visibilityBlocks = 0;
			}
			return this.visibilityBlocks !== 0;
		};
		Node.prototype.addVisibilityBlock = function () {
			if (this.visibilityBlocks == null) {
				this.visibilityBlocks = 0;
			}
			this.visibilityBlocks = this.visibilityBlocks + 1;
		};
		Node.prototype.removeVisibilityBlock = function () {
			if (this.visibilityBlocks == null) {
				this.visibilityBlocks = 0;
			}
			this.visibilityBlocks = this.visibilityBlocks - 1;
		};
		// Turns on node visibility - if called node will be shown in output regardless
		// of whether it comes from import by reference or not
		Node.prototype.ensureVisibility = function () {
			this.nodeVisible = true;
		};
		// Turns off node visibility - if called node will NOT be shown in output regardless
		// of whether it comes from import by reference or not
		Node.prototype.ensureInvisibility = function () {
			this.nodeVisible = false;
		};
		// return values:
		// false - the node must not be visible
		// true - the node must be visible
		// undefined or null - the node has the same visibility as its parent
		Node.prototype.isVisible = function () {
			return this.nodeVisible;
		};
		Node.prototype.visibilityInfo = function() {
			return {
				visibilityBlocks: this.visibilityBlocks,
				nodeVisible: this.nodeVisible
			};
		};
		Node.prototype.copyVisibilityInfo = function(info) {
			if (!info) {
				return;
			}
			this.visibilityBlocks = info.visibilityBlocks;
			this.nodeVisible = info.nodeVisible;
		};

		return Node;
	};
	//#endregion

	//#region URL: /tree/operation
	modules['/tree/operation'] = function () {
		var Node = require("/tree/node"),
			Color = require("/tree/color"),
			Dimension = require("/tree/dimension");

		var Operation = function (op, operands, isSpaced) {
			this.op = op.trim();
			this.operands = operands;
			this.isSpaced = isSpaced;
		};
		Operation.prototype = new Node();
		Operation.prototype.type = "Operation";
		Operation.prototype.accept = function (visitor) {
			this.operands = visitor.visit(this.operands);
		};
		Operation.prototype.eval = function (context) {
			var a = this.operands[0].eval(context),
				b = this.operands[1].eval(context);

			if (context.isMathOn()) {
				if (a instanceof Dimension && b instanceof Color) {
					a = a.toColor();
				}
				if (b instanceof Dimension && a instanceof Color) {
					b = b.toColor();
				}
				if (!a.operate) {
					throw { type: "Operation",
						message: "Operation on an invalid type" };
				}

				return a.operate(context, this.op, b);
			} else {
				return new Operation(this.op, [a, b], this.isSpaced);
			}
		};
		Operation.prototype.genCSS = function (context, output) {
			this.operands[0].genCSS(context, output);
			if (this.isSpaced) {
				output.add(" ");
			}
			output.add(this.op);
			if (this.isSpaced) {
				output.add(" ");
			}
			this.operands[1].genCSS(context, output);
		};

		return Operation;
	};
	//#endregion

	//#region URL: /tree/paren
	modules['/tree/paren'] = function () {
		var Node = require('/tree/node');

		var Paren = function (node) {
			this.value = node;
		};
		Paren.prototype = new Node();
		Paren.prototype.type = "Paren";
		Paren.prototype.genCSS = function (context, output) {
			output.add('(');
			this.value.genCSS(context, output);
			output.add(')');
		};
		Paren.prototype.eval = function (context) {
			return new Paren(this.value.eval(context));
		};

		return Paren;
	};
	//#endregion

	//#region URL: /tree/property
	modules['/tree/property'] = function () {
		var Node = require("/tree/node"),
			Declaration = require("/tree/declaration");

		var Property = function (name, index, currentFileInfo) {
			this.name = name;
			this._index = index;
			this._fileInfo = currentFileInfo;
		};
		Property.prototype = new Node();
		Property.prototype.type = "Property";
		Property.prototype.eval = function (context) {
			var property, name = this.name;
			// TODO: shorten this reference
			var mergeRules = context.pluginManager.less.visitors.ToCSSVisitor.prototype._mergeRules;

			if (this.evaluating) {
				throw { type: 'Name',
					message: "Recursive property reference for " + name,
					filename: this.fileInfo().filename,
					index: this.getIndex() };
			}

			this.evaluating = true;

			property = this.find(context.frames, function (frame) {

				var v, vArr = frame.property(name);
				if (vArr) {
					for (var i = 0; i < vArr.length; i++) {
						v = vArr[i];

						vArr[i] = new Declaration(v.name,
							v.value,
							v.important,
							v.merge,
							v.index,
							v.currentFileInfo,
							v.inline,
							v.variable
						);
					}
					mergeRules(vArr);

					v = vArr[vArr.length - 1];
					if (v.important) {
						var importantScope = context.importantScope[context.importantScope.length - 1];
						importantScope.important = v.important;
					}
					v = v.value.eval(context);
					return v;
				}
			});
			if (property) {
				this.evaluating = false;
				return property;
			} else {
				throw { type: 'Name',
					message: "Property '" + name + "' is undefined",
					filename: this.currentFileInfo.filename,
					index: this.index };
			}
		};
		Property.prototype.find = function (obj, fun) {
			for (var i = 0, r; i < obj.length; i++) {
				r = fun.call(obj, obj[i]);
				if (r) { return r; }
			}
			return null;
		};

		return Property;
	};
	//#endregion

	//#region URL: /tree/quoted
	modules['/tree/quoted'] = function () {
		var Node = require("/tree/node"),
			Variable = require("/tree/variable"),
			Property = require("/tree/property");

		var Quoted = function (str, content, escaped, index, currentFileInfo) {
			this.escaped = (escaped == null) ? true : escaped;
			this.value = content || '';
			this.quote = str.charAt(0);
			this._index = index;
			this._fileInfo = currentFileInfo;
		};
		Quoted.prototype = new Node();
		Quoted.prototype.type = "Quoted";
		Quoted.prototype.genCSS = function (context, output) {
			if (!this.escaped) {
				output.add(this.quote, this.fileInfo(), this.getIndex());
			}
			output.add(this.value);
			if (!this.escaped) {
				output.add(this.quote);
			}
		};
		Quoted.prototype.containsVariables = function() {
			return this.value.match(/@\{([\w-]+)\}/);
		};
		Quoted.prototype.eval = function (context) {
			var that = this, value = this.value;
			var variableReplacement = function (_, name) {
				var v = new Variable('@' + name, that.getIndex(), that.fileInfo()).eval(context, true);
				return (v instanceof Quoted) ? v.value : v.toCSS();
			};
			var propertyReplacement = function (_, name) {
				var v = new Property('$' + name, that.getIndex(), that.fileInfo()).eval(context, true);
				return (v instanceof Quoted) ? v.value : v.toCSS();
			};
			function iterativeReplace(value, regexp, replacementFnc) {
				var evaluatedValue = value;
				do {
					value = evaluatedValue;
					evaluatedValue = value.replace(regexp, replacementFnc);
				} while (value !== evaluatedValue);
				return evaluatedValue;
			}
			value = iterativeReplace(value, /@\{([\w-]+)\}/g, variableReplacement);
			value = iterativeReplace(value, /\$\{([\w-]+)\}/g, propertyReplacement);
			return new Quoted(this.quote + value + this.quote, value, this.escaped, this.getIndex(), this.fileInfo());
		};
		Quoted.prototype.compare = function (other) {
			// when comparing quoted strings allow the quote to differ
			if (other.type === "Quoted" && !this.escaped && !other.escaped) {
				return Node.numericCompare(this.value, other.value);
			} else {
				return other.toCSS && this.toCSS() === other.toCSS() ? 0 : undefined;
			}
		};

		return Quoted;
	};
	//#endregion

	//#region URL: /tree/ruleset
	modules['/tree/ruleset'] = function () {
		var Node = require("/tree/node"),
			Declaration = require("/tree/declaration"),
			Keyword = require("/tree/keyword"),
			Comment = require("/tree/comment"),
			Paren = require("/tree/paren"),
			Selector = require("/tree/selector"),
			Element = require("/tree/element"),
			Anonymous = require("/tree/anonymous"),
			contexts = require("/contexts"),
			globalFunctionRegistry = require("/functions/function-registry"),
			defaultFunc = require("/functions/default"),
			getDebugInfo = require("/tree/debug-info"),
			utils = require("/utils");

		var Ruleset = function (selectors, rules, strictImports, visibilityInfo) {
			this.selectors = selectors;
			this.rules = rules;
			this._lookups = {};
			this._variables = null;
			this._properties = null;
			this.strictImports = strictImports;
			this.copyVisibilityInfo(visibilityInfo);
			this.allowRoot = true;

			this.setParent(this.selectors, this);
			this.setParent(this.rules, this);

		};
		Ruleset.prototype = new Node();
		Ruleset.prototype.type = "Ruleset";
		Ruleset.prototype.isRuleset = true;
		Ruleset.prototype.isRulesetLike = function() { return true; };
		Ruleset.prototype.accept = function (visitor) {
			if (this.paths) {
				this.paths = visitor.visitArray(this.paths, true);
			} else if (this.selectors) {
				this.selectors = visitor.visitArray(this.selectors);
			}
			if (this.rules && this.rules.length) {
				this.rules = visitor.visitArray(this.rules);
			}
		};
		Ruleset.prototype.eval = function (context) {
			var thisSelectors = this.selectors, selectors,
				selCnt, selector, i, hasOnePassingSelector = false;

			if (thisSelectors && (selCnt = thisSelectors.length)) {
				selectors = new Array(selCnt);
				defaultFunc.error({
					type: "Syntax",
					message: "it is currently only allowed in parametric mixin guards,"
				});
				for (i = 0; i < selCnt; i++) {
					selector = thisSelectors[i].eval(context);
					selectors[i] = selector;
					if (selector.evaldCondition) {
						hasOnePassingSelector = true;
					}
				}
				defaultFunc.reset();
			} else {
				hasOnePassingSelector = true;
			}

			var rules = this.rules ? utils.copyArray(this.rules) : null,
				ruleset = new Ruleset(selectors, rules, this.strictImports, this.visibilityInfo()),
				rule, subRule;

			ruleset.originalRuleset = this;
			ruleset.root = this.root;
			ruleset.firstRoot = this.firstRoot;
			ruleset.allowImports = this.allowImports;

			if (this.debugInfo) {
				ruleset.debugInfo = this.debugInfo;
			}

			if (!hasOnePassingSelector) {
				rules.length = 0;
			}

			// inherit a function registry from the frames stack when possible;
			// otherwise from the global registry
			ruleset.functionRegistry = (function (frames) {
				var i = 0,
					n = frames.length,
					found;
				for ( ; i !== n ; ++i ) {
					found = frames[ i ].functionRegistry;
					if ( found ) { return found; }
				}
				return globalFunctionRegistry;
			}(context.frames)).inherit();

			// push the current ruleset to the frames stack
			var ctxFrames = context.frames;
			ctxFrames.unshift(ruleset);

			// currrent selectors
			var ctxSelectors = context.selectors;
			if (!ctxSelectors) {
				context.selectors = ctxSelectors = [];
			}
			ctxSelectors.unshift(this.selectors);

			// Evaluate imports
			if (ruleset.root || ruleset.allowImports || !ruleset.strictImports) {
				ruleset.evalImports(context);
			}

			// Store the frames around mixin definitions,
			// so they can be evaluated like closures when the time comes.
			var rsRules = ruleset.rules;
			for (i = 0; (rule = rsRules[i]); i++) {
				if (rule.evalFirst) {
					rsRules[i] = rule.eval(context);
				}
			}

			var mediaBlockCount = (context.mediaBlocks && context.mediaBlocks.length) || 0;

			// Evaluate mixin calls.
			for (i = 0; (rule = rsRules[i]); i++) {
				if (rule.type === "MixinCall") {
					/* jshint loopfunc:true */
					rules = rule.eval(context).filter(function(r) {
						if ((r instanceof Declaration) && r.variable) {
							// do not pollute the scope if the variable is
							// already there. consider returning false here
							// but we need a way to "return" variable from mixins
							return !(ruleset.variable(r.name));
						}
						return true;
					});
					rsRules.splice.apply(rsRules, [i, 1].concat(rules));
					i += rules.length - 1;
					ruleset.resetCache();
				} else if (rule.type ===  "VariableCall") {
					/* jshint loopfunc:true */
					rules = rule.eval(context).rules.filter(function(r) {
						if ((r instanceof Declaration) && r.variable) {
							// do not pollute the scope at all
							return false;
						}
						return true;
					});
					rsRules.splice.apply(rsRules, [i, 1].concat(rules));
					i += rules.length - 1;
					ruleset.resetCache();
				}
			}

			// Evaluate everything else
			for (i = 0; (rule = rsRules[i]); i++) {
				if (!rule.evalFirst) {
					rsRules[i] = rule = rule.eval ? rule.eval(context) : rule;
				}
			}

			// Evaluate everything else
			for (i = 0; (rule = rsRules[i]); i++) {
				// for rulesets, check if it is a css guard and can be removed
				if (rule instanceof Ruleset && rule.selectors && rule.selectors.length === 1) {
					// check if it can be folded in (e.g. & where)
					if (rule.selectors[0].isJustParentSelector()) {
						rsRules.splice(i--, 1);

						for (var j = 0; (subRule = rule.rules[j]); j++) {
							if (subRule instanceof Node) {
								subRule.copyVisibilityInfo(rule.visibilityInfo());
								if (!(subRule instanceof Declaration) || !subRule.variable) {
									rsRules.splice(++i, 0, subRule);
								}
							}
						}
					}
				}
			}

			// Pop the stack
			ctxFrames.shift();
			ctxSelectors.shift();

			if (context.mediaBlocks) {
				for (i = mediaBlockCount; i < context.mediaBlocks.length; i++) {
					context.mediaBlocks[i].bubbleSelectors(selectors);
				}
			}

			return ruleset;
		};
		Ruleset.prototype.evalImports = function(context) {
			var rules = this.rules, i, importRules;
			if (!rules) { return; }

			for (i = 0; i < rules.length; i++) {
				if (rules[i].type === "Import") {
					importRules = rules[i].eval(context);
					if (importRules && (importRules.length || importRules.length === 0)) {
						rules.splice.apply(rules, [i, 1].concat(importRules));
						i += importRules.length - 1;
					} else {
						rules.splice(i, 1, importRules);
					}
					this.resetCache();
				}
			}
		};
		Ruleset.prototype.makeImportant = function() {
			var result = new Ruleset(this.selectors, this.rules.map(function (r) {
				if (r.makeImportant) {
					return r.makeImportant();
				} else {
					return r;
				}
			}), this.strictImports, this.visibilityInfo());

			return result;
		};
		Ruleset.prototype.matchArgs = function (args) {
			return !args || args.length === 0;
		};
		// lets you call a css selector with a guard
		Ruleset.prototype.matchCondition = function (args, context) {
			var lastSelector = this.selectors[this.selectors.length - 1];
			if (!lastSelector.evaldCondition) {
				return false;
			}
			if (lastSelector.condition &&
				!lastSelector.condition.eval(
					new contexts.Eval(context,
						context.frames))) {
				return false;
			}
			return true;
		};
		Ruleset.prototype.resetCache = function () {
			this._rulesets = null;
			this._variables = null;
			this._properties = null;
			this._lookups = {};
		};
		Ruleset.prototype.variables = function () {
			if (!this._variables) {
				this._variables = !this.rules ? {} : this.rules.reduce(function (hash, r) {
					if (r instanceof Declaration && r.variable === true) {
						hash[r.name] = r;
					}
					// when evaluating variables in an import statement, imports have not been eval'd
					// so we need to go inside import statements.
					// guard against root being a string (in the case of inlined less)
					if (r.type === "Import" && r.root && r.root.variables) {
						var vars = r.root.variables();
						for (var name in vars) {
							if (vars.hasOwnProperty(name)) {
								hash[name] = vars[name];
							}
						}
					}
					return hash;
				}, {});
			}
			return this._variables;
		};
		Ruleset.prototype.properties = function () {
			if (!this._properties) {
				this._properties = !this.rules ? {} : this.rules.reduce(function (hash, r) {
					if (r instanceof Declaration && r.variable !== true) {
						var name = (r.name.length === 1) && (r.name[0] instanceof Keyword) ?
							r.name[0].value : r.name;
						// Properties don't overwrite as they can merge
						if (!hash['$' + name]) {
							hash['$' + name] = [ r ];
						}
						else {
							hash['$' + name].push(r);
						}
					}
					return hash;
				}, {});
			}
			return this._properties;
		};
		Ruleset.prototype.variable = function (name) {
			var decl = this.variables()[name];
			if (decl) {
				return this.parseValue(decl);
			}
		};
		Ruleset.prototype.property = function (name) {
			var decl = this.properties()[name];
			if (decl) {
				return this.parseValue(decl);
			}
		};
		Ruleset.prototype.parseValue = function(toParse) {
			var self = this;
			function transformDeclaration(decl) {
				if (decl.value instanceof Anonymous && !decl.parsed) {
					this.parse.parseNode(
						decl.value.value, 
						["value", "important"], 
						decl.value.getIndex(), 
						decl.fileInfo(), 
						function(err, result) {
							if (err) {
								decl.parsed = true;
							}
							if (result) {
								decl.value = result[0];
								decl.important = result[1] || '';
								decl.parsed = true;
							}
						});

					return decl;
				}
				else {
					return decl;
				}
			}
			if (!Array.isArray(toParse)) {
				return transformDeclaration.call(self, toParse);
			}
			else {
				var nodes = [];
				toParse.forEach(function(n) {
					nodes.push(transformDeclaration.call(self, n));
				});
				return nodes;
			}
		};
		Ruleset.prototype.rulesets = function () {
			if (!this.rules) { return []; }

			var filtRules = [], rules = this.rules,
				i, rule;

			for (i = 0; (rule = rules[i]); i++) {
				if (rule.isRuleset) {
					filtRules.push(rule);
				}
			}

			return filtRules;
		};
		Ruleset.prototype.prependRule = function (rule) {
			var rules = this.rules;
			if (rules) {
				rules.unshift(rule);
			} else {
				this.rules = [ rule ];
			}
			this.setParent(rule, this);
		};
		Ruleset.prototype.find = function (selector, self, filter) {
			self = self || this;
			var rules = [], match, foundMixins,
				key = selector.toCSS();

			if (key in this._lookups) { return this._lookups[key]; }

			this.rulesets().forEach(function (rule) {
				if (rule !== self) {
					for (var j = 0; j < rule.selectors.length; j++) {
						match = selector.match(rule.selectors[j]);
						if (match) {
							if (selector.elements.length > match) {
								if (!filter || filter(rule)) {
									foundMixins = rule.find(new Selector(selector.elements.slice(match)), self, filter);
									for (var i = 0; i < foundMixins.length; ++i) {
										foundMixins[i].path.push(rule);
									}
									Array.prototype.push.apply(rules, foundMixins);
								}
							} else {
								rules.push({ rule: rule, path: []});
							}
							break;
						}
					}
				}
			});
			this._lookups[key] = rules;
			return rules;
		};
		Ruleset.prototype.genCSS = function (context, output) {
			var i, j,
				charsetRuleNodes = [],
				ruleNodes = [],
				debugInfo,     // Line number debugging
				rule,
				path;

			context.tabLevel = (context.tabLevel || 0);

			if (!this.root) {
				context.tabLevel++;
			}

			var tabRuleStr = context.compress ? '' : Array(context.tabLevel + 1).join("  "),
				tabSetStr = context.compress ? '' : Array(context.tabLevel).join("  "),
				sep;

			var charsetNodeIndex = 0;
			var importNodeIndex = 0;
			for (i = 0; (rule = this.rules[i]); i++) {
				if (rule instanceof Comment) {
					if (importNodeIndex === i) {
						importNodeIndex++;
					}
					ruleNodes.push(rule);
				} else if (rule.isCharset && rule.isCharset()) {
					ruleNodes.splice(charsetNodeIndex, 0, rule);
					charsetNodeIndex++;
					importNodeIndex++;
				} else if (rule.type === "Import") {
					ruleNodes.splice(importNodeIndex, 0, rule);
					importNodeIndex++;
				} else {
					ruleNodes.push(rule);
				}
			}
			ruleNodes = charsetRuleNodes.concat(ruleNodes);

			// If this is the root node, we don't render
			// a selector, or {}.
			if (!this.root) {
				debugInfo = getDebugInfo(context, this, tabSetStr);

				if (debugInfo) {
					output.add(debugInfo);
					output.add(tabSetStr);
				}

				var paths = this.paths, pathCnt = paths.length,
					pathSubCnt;

				sep = context.compress ? ',' : (',\n' + tabSetStr);

				for (i = 0; i < pathCnt; i++) {
					path = paths[i];
					if (!(pathSubCnt = path.length)) { continue; }
					if (i > 0) { output.add(sep); }

					context.firstSelector = true;
					path[0].genCSS(context, output);

					context.firstSelector = false;
					for (j = 1; j < pathSubCnt; j++) {
						path[j].genCSS(context, output);
					}
				}

				output.add((context.compress ? '{' : ' {\n') + tabRuleStr);
			}

			// Compile rules and rulesets
			for (i = 0; (rule = ruleNodes[i]); i++) {

				if (i + 1 === ruleNodes.length) {
					context.lastRule = true;
				}

				var currentLastRule = context.lastRule;
				if (rule.isRulesetLike(rule)) {
					context.lastRule = false;
				}

				if (rule.genCSS) {
					rule.genCSS(context, output);
				} else if (rule.value) {
					output.add(rule.value.toString());
				}

				context.lastRule = currentLastRule;

				if (!context.lastRule && rule.isVisible()) {
					output.add(context.compress ? '' : ('\n' + tabRuleStr));
				} else {
					context.lastRule = false;
				}
			}

			if (!this.root) {
				output.add((context.compress ? '}' : '\n' + tabSetStr + '}'));
				context.tabLevel--;
			}

			if (!output.isEmpty() && !context.compress && this.firstRoot) {
				output.add('\n');
			}
		};

		Ruleset.prototype.joinSelectors = function (paths, context, selectors) {
			for (var s = 0; s < selectors.length; s++) {
				this.joinSelector(paths, context, selectors[s]);
			}
		};

		Ruleset.prototype.joinSelector = function (paths, context, selector) {

			function createParenthesis(elementsToPak, originalElement) {
				var replacementParen, j;
				if (elementsToPak.length === 0) {
					replacementParen = new Paren(elementsToPak[0]);
				} else {
					var insideParent = new Array(elementsToPak.length);
					for (j = 0; j < elementsToPak.length; j++) {
						insideParent[j] = new Element(null, elementsToPak[j], originalElement._index, originalElement._fileInfo);
					}
					replacementParen = new Paren(new Selector(insideParent));
				}
				return replacementParen;
			}

			function createSelector(containedElement, originalElement) {
				var element, selector;
				element = new Element(null, containedElement, originalElement._index, originalElement._fileInfo);
				selector = new Selector([element]);
				return selector;
			}

			// joins selector path from `beginningPath` with selector path in `addPath`
			// `replacedElement` contains element that is being replaced by `addPath`
			// returns concatenated path
			function addReplacementIntoPath(beginningPath, addPath, replacedElement, originalSelector) {
				var newSelectorPath, lastSelector, newJoinedSelector;
				// our new selector path
				newSelectorPath = [];

				// construct the joined selector - if & is the first thing this will be empty,
				// if not newJoinedSelector will be the last set of elements in the selector
				if (beginningPath.length > 0) {
					newSelectorPath = utils.copyArray(beginningPath);
					lastSelector = newSelectorPath.pop();
					newJoinedSelector = originalSelector.createDerived(utils.copyArray(lastSelector.elements));
				}
				else {
					newJoinedSelector = originalSelector.createDerived([]);
				}

				if (addPath.length > 0) {
					// /deep/ is a combinator that is valid without anything in front of it
					// so if the & does not have a combinator that is "" or " " then
					// and there is a combinator on the parent, then grab that.
					// this also allows + a { & .b { .a & { ... though not sure why you would want to do that
					var combinator = replacedElement.combinator, parentEl = addPath[0].elements[0];
					if (combinator.emptyOrWhitespace && !parentEl.combinator.emptyOrWhitespace) {
						combinator = parentEl.combinator;
					}
					// join the elements so far with the first part of the parent
					newJoinedSelector.elements.push(new Element(combinator, parentEl.value, replacedElement._index, replacedElement._fileInfo));
					newJoinedSelector.elements = newJoinedSelector.elements.concat(addPath[0].elements.slice(1));
				}

				// now add the joined selector - but only if it is not empty
				if (newJoinedSelector.elements.length !== 0) {
					newSelectorPath.push(newJoinedSelector);
				}

				// put together the parent selectors after the join (e.g. the rest of the parent)
				if (addPath.length > 1) {
					var restOfPath = addPath.slice(1);
					restOfPath = restOfPath.map(function (selector) {
						return selector.createDerived(selector.elements, []);
					});
					newSelectorPath = newSelectorPath.concat(restOfPath);
				}
				return newSelectorPath;
			}

			// joins selector path from `beginningPath` with every selector path in `addPaths` array
			// `replacedElement` contains element that is being replaced by `addPath`
			// returns array with all concatenated paths
			function addAllReplacementsIntoPath( beginningPath, addPaths, replacedElement, originalSelector, result) {
				var j;
				for (j = 0; j < beginningPath.length; j++) {
					var newSelectorPath = addReplacementIntoPath(beginningPath[j], addPaths, replacedElement, originalSelector);
					result.push(newSelectorPath);
				}
				return result;
			}

			function mergeElementsOnToSelectors(elements, selectors) {
				var i, sel;

				if (elements.length === 0) {
					return ;
				}
				if (selectors.length === 0) {
					selectors.push([ new Selector(elements) ]);
					return;
				}

				for (i = 0; (sel = selectors[i]); i++) {
					// if the previous thing in sel is a parent this needs to join on to it
					if (sel.length > 0) {
						sel[sel.length - 1] = sel[sel.length - 1].createDerived(sel[sel.length - 1].elements.concat(elements));
					}
					else {
						sel.push(new Selector(elements));
					}
				}
			}

			// replace all parent selectors inside `inSelector` by content of `context` array
			// resulting selectors are returned inside `paths` array
			// returns true if `inSelector` contained at least one parent selector
			function replaceParentSelector(paths, context, inSelector) {
				// The paths are [[Selector]]
				// The first list is a list of comma separated selectors
				// The inner list is a list of inheritance separated selectors
				// e.g.
				// .a, .b {
				//   .c {
				//   }
				// }
				// == [[.a] [.c]] [[.b] [.c]]
				//
				var i, j, k, currentElements, newSelectors, selectorsMultiplied, sel, el, hadParentSelector = false, length, lastSelector;
				function findNestedSelector(element) {
					var maybeSelector;
					if (!(element.value instanceof Paren)) {
						return null;
					}

					maybeSelector = element.value.value;
					if (!(maybeSelector instanceof Selector)) {
						return null;
					}

					return maybeSelector;
				}

				// the elements from the current selector so far
				currentElements = [];
				// the current list of new selectors to add to the path.
				// We will build it up. We initiate it with one empty selector as we "multiply" the new selectors
				// by the parents
				newSelectors = [
					[]
				];

				for (i = 0; (el = inSelector.elements[i]); i++) {
					// non parent reference elements just get added
					if (el.value !== "&") {
						var nestedSelector = findNestedSelector(el);
						if (nestedSelector != null) {
							// merge the current list of non parent selector elements
							// on to the current list of selectors to add
							mergeElementsOnToSelectors(currentElements, newSelectors);

							var nestedPaths = [], replaced, replacedNewSelectors = [];
							replaced = replaceParentSelector(nestedPaths, context, nestedSelector);
							hadParentSelector = hadParentSelector || replaced;
							// the nestedPaths array should have only one member - replaceParentSelector does not multiply selectors
							for (k = 0; k < nestedPaths.length; k++) {
								var replacementSelector = createSelector(createParenthesis(nestedPaths[k], el), el);
								addAllReplacementsIntoPath(newSelectors, [replacementSelector], el, inSelector, replacedNewSelectors);
							}
							newSelectors = replacedNewSelectors;
							currentElements = [];

						} else {
							currentElements.push(el);
						}

					} else {
						hadParentSelector = true;
						// the new list of selectors to add
						selectorsMultiplied = [];

						// merge the current list of non parent selector elements
						// on to the current list of selectors to add
						mergeElementsOnToSelectors(currentElements, newSelectors);

						// loop through our current selectors
						for (j = 0; j < newSelectors.length; j++) {
							sel = newSelectors[j];
							// if we don't have any parent paths, the & might be in a mixin so that it can be used
							// whether there are parents or not
							if (context.length === 0) {
								// the combinator used on el should now be applied to the next element instead so that
								// it is not lost
								if (sel.length > 0) {
									sel[0].elements.push(new Element(el.combinator, '', el._index, el._fileInfo));
								}
								selectorsMultiplied.push(sel);
							}
							else {
								// and the parent selectors
								for (k = 0; k < context.length; k++) {
									// We need to put the current selectors
									// then join the last selector's elements on to the parents selectors
									var newSelectorPath = addReplacementIntoPath(sel, context[k], el, inSelector);
									// add that to our new set of selectors
									selectorsMultiplied.push(newSelectorPath);
								}
							}
						}

						// our new selectors has been multiplied, so reset the state
						newSelectors = selectorsMultiplied;
						currentElements = [];
					}
				}

				// if we have any elements left over (e.g. .a& .b == .b)
				// add them on to all the current selectors
				mergeElementsOnToSelectors(currentElements, newSelectors);

				for (i = 0; i < newSelectors.length; i++) {
					length = newSelectors[i].length;
					if (length > 0) {
						paths.push(newSelectors[i]);
						lastSelector = newSelectors[i][length - 1];
						newSelectors[i][length - 1] = lastSelector.createDerived(lastSelector.elements, inSelector.extendList);
					}
				}

				return hadParentSelector;
			}

			function deriveSelector(visibilityInfo, deriveFrom) {
				var newSelector = deriveFrom.createDerived(deriveFrom.elements, deriveFrom.extendList, deriveFrom.evaldCondition);
				newSelector.copyVisibilityInfo(visibilityInfo);
				return newSelector;
			}

			// joinSelector code follows
			var i, newPaths, hadParentSelector;

			newPaths = [];
			hadParentSelector = replaceParentSelector(newPaths, context, selector);

			if (!hadParentSelector) {
				if (context.length > 0) {
					newPaths = [];
					for (i = 0; i < context.length; i++) {

						var concatenated = context[i].map(deriveSelector.bind(this, selector.visibilityInfo()));

						concatenated.push(selector);
						newPaths.push(concatenated);
					}
				}
				else {
					newPaths = [[selector]];
				}
			}

			for (i = 0; i < newPaths.length; i++) {
				paths.push(newPaths[i]);
			}

		};

		return Ruleset;
	};
	//#endregion

	//#region URL: /tree/selector
	modules['/tree/selector'] = function () {
		var Node = require("/tree/node"),
			Element = require("/tree/element"),
			LessError = require("/less-error");

		var Selector = function (elements, extendList, condition, index, currentFileInfo, visibilityInfo) {
			this.extendList = extendList;
			this.condition = condition;
			this.evaldCondition = !condition;
			this._index = index;
			this._fileInfo = currentFileInfo;
			this.elements = this.getElements(elements);
			this.mixinElements_ = undefined;
			this.copyVisibilityInfo(visibilityInfo);
			this.setParent(this.elements, this);
		};
		Selector.prototype = new Node();
		Selector.prototype.type = "Selector";
		Selector.prototype.accept = function (visitor) {
			if (this.elements) {
				this.elements = visitor.visitArray(this.elements);
			}
			if (this.extendList) {
				this.extendList = visitor.visitArray(this.extendList);
			}
			if (this.condition) {
				this.condition = visitor.visit(this.condition);
			}
		};
		Selector.prototype.createDerived = function(elements, extendList, evaldCondition) {
			elements = this.getElements(elements);
			var newSelector = new Selector(elements, extendList || this.extendList,
				null, this.getIndex(), this.fileInfo(), this.visibilityInfo());
			newSelector.evaldCondition = (evaldCondition != null) ? evaldCondition : this.evaldCondition;
			newSelector.mediaEmpty = this.mediaEmpty;
			return newSelector;
		};
		Selector.prototype.getElements = function(els) {
			if (typeof els === "string") {
				this.parse.parseNode(
					els, 
					["selector"],
					this._index, 
					this._fileInfo, 
					function(err, result) {
						if (err) {
							throw new LessError({
								index: err.index,
								message: err.message
							}, this.parse.imports, this._fileInfo.filename);
						}
						els = result[0].elements;
					});
			}
			return els;
		};
		Selector.prototype.createEmptySelectors = function() {
			var el = new Element('', '&', this._index, this._fileInfo),
				sels = [new Selector([el], null, null, this._index, this._fileInfo)];
			sels[0].mediaEmpty = true;
			return sels;
		};
		Selector.prototype.match = function (other) {
			var elements = this.elements,
				len = elements.length,
				olen, i;

			other = other.mixinElements();
			olen = other.length;
			if (olen === 0 || len < olen) {
				return 0;
			} else {
				for (i = 0; i < olen; i++) {
					if (elements[i].value !== other[i]) {
						return 0;
					}
				}
			}

			return olen; // return number of matched elements
		};
		Selector.prototype.mixinElements = function() {
			if (this.mixinElements_) {
				return this.mixinElements_;
			}

			var elements = this.elements.map( function(v) {
				return v.combinator.value + (v.value.value || v.value);
			}).join("").match(/[,&#\*\.\w-]([\w-]|(\\.))*/g);

			if (elements) {
				if (elements[0] === "&") {
					elements.shift();
				}
			} else {
				elements = [];
			}

			return (this.mixinElements_ = elements);
		};
		Selector.prototype.isJustParentSelector = function() {
			return !this.mediaEmpty &&
				this.elements.length === 1 &&
				this.elements[0].value === '&' &&
				(this.elements[0].combinator.value === ' ' || this.elements[0].combinator.value === '');
		};
		Selector.prototype.eval = function (context) {
			var evaldCondition = this.condition && this.condition.eval(context),
				elements = this.elements, extendList = this.extendList;

			elements = elements && elements.map(function (e) { return e.eval(context); });
			extendList = extendList && extendList.map(function(extend) { return extend.eval(context); });

			return this.createDerived(elements, extendList, evaldCondition);
		};
		Selector.prototype.genCSS = function (context, output) {
			var i, element;
			if ((!context || !context.firstSelector) && this.elements[0].combinator.value === "") {
				output.add(' ', this.fileInfo(), this.getIndex());
			}
			for (i = 0; i < this.elements.length; i++) {
				element = this.elements[i];
				element.genCSS(context, output);
			}
		};
		Selector.prototype.getIsOutput = function() {
			return this.evaldCondition;
		};

		return Selector;
	};
	//#endregion

	//#region URL: /tree/unicode-descriptor
	modules['/tree/unicode-descriptor'] = function () {
		var Node = require('/tree/node');

		var UnicodeDescriptor = function (value) {
			this.value = value;
		};
		UnicodeDescriptor.prototype = new Node();
		UnicodeDescriptor.prototype.type = "UnicodeDescriptor";

		return UnicodeDescriptor;
	};
	//#endregion

	//#region URL: /tree/unit
	modules['/tree/unit'] = function () {
		var Node = require("/tree/node"),
			unitConversions = require("/data/unit-conversions"),
			utils = require("/utils");

		var Unit = function (numerator, denominator, backupUnit) {
			this.numerator = numerator ? utils.copyArray(numerator).sort() : [];
			this.denominator = denominator ? utils.copyArray(denominator).sort() : [];
			if (backupUnit) {
				this.backupUnit = backupUnit;
			} else if (numerator && numerator.length) {
				this.backupUnit = numerator[0];
			}
		};

		Unit.prototype = new Node();
		Unit.prototype.type = "Unit";
		Unit.prototype.clone = function () {
			return new Unit(utils.copyArray(this.numerator), utils.copyArray(this.denominator), this.backupUnit);
		};
		Unit.prototype.genCSS = function (context, output) {
			// Dimension checks the unit is singular and throws an error if in strict math mode.
			var strictUnits = context && context.strictUnits;
			if (this.numerator.length === 1) {
				output.add(this.numerator[0]); // the ideal situation
			} else if (!strictUnits && this.backupUnit) {
				output.add(this.backupUnit);
			} else if (!strictUnits && this.denominator.length) {
				output.add(this.denominator[0]);
			}
		};
		Unit.prototype.toString = function () {
			var i, returnStr = this.numerator.join("*");
			for (i = 0; i < this.denominator.length; i++) {
				returnStr += "/" + this.denominator[i];
			}
			return returnStr;
		};
		Unit.prototype.compare = function (other) {
			return this.is(other.toString()) ? 0 : undefined;
		};
		Unit.prototype.is = function (unitString) {
			return this.toString().toUpperCase() === unitString.toUpperCase();
		};
		Unit.prototype.isLength = function () {
			return Boolean(this.toCSS().match(/px|em|%|in|cm|mm|pc|pt|ex/));
		};
		Unit.prototype.isEmpty = function () {
			return this.numerator.length === 0 && this.denominator.length === 0;
		};
		Unit.prototype.isSingular = function() {
			return this.numerator.length <= 1 && this.denominator.length === 0;
		};
		Unit.prototype.map = function(callback) {
			var i;

			for (i = 0; i < this.numerator.length; i++) {
				this.numerator[i] = callback(this.numerator[i], false);
			}

			for (i = 0; i < this.denominator.length; i++) {
				this.denominator[i] = callback(this.denominator[i], true);
			}
		};
		Unit.prototype.usedUnits = function() {
			var group, result = {}, mapUnit, groupName;

			mapUnit = function (atomicUnit) {
				/* jshint loopfunc:true */
				if (group.hasOwnProperty(atomicUnit) && !result[groupName]) {
					result[groupName] = atomicUnit;
				}

				return atomicUnit;
			};

			for (groupName in unitConversions) {
				if (unitConversions.hasOwnProperty(groupName)) {
					group = unitConversions[groupName];

					this.map(mapUnit);
				}
			}

			return result;
		};
		Unit.prototype.cancel = function () {
			var counter = {}, atomicUnit, i;

			for (i = 0; i < this.numerator.length; i++) {
				atomicUnit = this.numerator[i];
				counter[atomicUnit] = (counter[atomicUnit] || 0) + 1;
			}

			for (i = 0; i < this.denominator.length; i++) {
				atomicUnit = this.denominator[i];
				counter[atomicUnit] = (counter[atomicUnit] || 0) - 1;
			}

			this.numerator = [];
			this.denominator = [];

			for (atomicUnit in counter) {
				if (counter.hasOwnProperty(atomicUnit)) {
					var count = counter[atomicUnit];

					if (count > 0) {
						for (i = 0; i < count; i++) {
							this.numerator.push(atomicUnit);
						}
					} else if (count < 0) {
						for (i = 0; i < -count; i++) {
							this.denominator.push(atomicUnit);
						}
					}
				}
			}

			this.numerator.sort();
			this.denominator.sort();
		};

		return Unit;
	};
	//#endregion

	//#region URL: /tree/url
	modules['/tree/url'] = function () {
		var Node = require("/tree/node"),
			utils = require("/utils") //BT+
			;

		var URL = function (val, index, currentFileInfo, isEvald) {
			this.value = val;
			this._index = index;
			this._fileInfo = currentFileInfo;
			this.isEvald = isEvald;
		};
		URL.prototype = new Node();
		URL.prototype.type = "Url";
		URL.prototype.accept = function (visitor) {
			this.value = visitor.visit(this.value);
		};
		URL.prototype.genCSS = function (context, output) {
			output.add("url(");
			this.value.genCSS(context, output);
			output.add(")");
		};
		URL.prototype.eval = function (context) {
			var val = this.value.eval(context),
				rootpath;

			if (utils.isAppRelativePath(val.value)) { //BT+
				val.value = virtualFileManager.ToAbsolutePath(val.value); //BT+
			} //BT+

			if (!this.isEvald) {
				// Add the base path if the URL is relative
				rootpath = this.fileInfo() && this.fileInfo().rootpath;
				if (rootpath &&
					typeof val.value === "string" &&
					context.isPathRelative(val.value)) {

					if (!val.quote) {
						rootpath = rootpath.replace(/[\(\)'"\s]/g, function(match) { return "\\" + match; });
					}

					if (utils.isAppRelativePath(rootpath)) { //BT+
						rootpath = virtualFileManager.ToAbsolutePath(rootpath); //BT+
					} //BT+

					val.value = rootpath + val.value;
				}

				val.value = context.normalizePath(val.value);

				// Add url args if enabled
				if (context.urlArgs) {
					if (!val.value.match(/^\s*data:/)) {
						var delimiter = val.value.indexOf('?') === -1 ? '?' : '&';
						var urlArgs = delimiter + context.urlArgs;
						if (val.value.indexOf('#') !== -1) {
							val.value = val.value.replace('#', urlArgs + '#');
						} else {
							val.value += urlArgs;
						}
					}
				}
			}

			return new URL(val, this.getIndex(), this.fileInfo(), true);
		};

		return URL;
	};
	//#endregion

	//#region URL: /tree/value
	modules['/tree/value'] = function () {
		var Node = require("/tree/node");

		var Value = function (value) {
			if (!value) {
				throw new Error("Value requires an array argument");
			}
			if (!Array.isArray(value)) {
				this.value = [ value ];
			}
			else {
				this.value = value;
			}
		};
		Value.prototype = new Node();
		Value.prototype.type = "Value";
		Value.prototype.accept = function (visitor) {
			if (this.value) {
				this.value = visitor.visitArray(this.value);
			}
		};
		Value.prototype.eval = function (context) {
			if (this.value.length === 1) {
				return this.value[0].eval(context);
			} else {
				return new Value(this.value.map(function (v) {
					return v.eval(context);
				}));
			}
		};
		Value.prototype.genCSS = function (context, output) {
			var i;
			for (i = 0; i < this.value.length; i++) {
				this.value[i].genCSS(context, output);
				if (i + 1 < this.value.length) {
					output.add((context && context.compress) ? ',' : ', ');
				}
			}
		};

		return Value;
	};
	//#endregion

	//#region URL: /tree/variable
	modules['/tree/variable'] = function () {
		var Node = require("/tree/node");

		var Variable = function (name, index, currentFileInfo) {
			this.name = name;
			this._index = index;
			this._fileInfo = currentFileInfo;
		};
		Variable.prototype = new Node();
		Variable.prototype.type = "Variable";
		Variable.prototype.eval = function (context) {
			var variable, name = this.name;

			if (name.indexOf('@@') === 0) {
				name = '@' + new Variable(name.slice(1), this.getIndex(), this.fileInfo()).eval(context).value;
			}

			if (this.evaluating) {
				throw { type: 'Name',
					message: "Recursive variable definition for " + name,
					filename: this.fileInfo().filename,
					index: this.getIndex() };
			}

			this.evaluating = true;

			variable = this.find(context.frames, function (frame) {
				var v = frame.variable(name);
				if (v) {
					if (v.important) {
						var importantScope = context.importantScope[context.importantScope.length - 1];
						importantScope.important = v.important;
					}
					return v.value.eval(context);
				}
			});
			if (variable) {
				this.evaluating = false;
				return variable;
			} else {
				throw { type: 'Name',
					message: "variable " + name + " is undefined",
					filename: this.fileInfo().filename,
					index: this.getIndex() };
			}
		};
		Variable.prototype.find = function (obj, fun) {
			for (var i = 0, r; i < obj.length; i++) {
				r = fun.call(obj, obj[i]);
				if (r) { return r; }
			}
			return null;
		};

		return Variable;
	};
	//#endregion

	//#region URL: /tree/variable-call
	modules['/tree/variable-call'] = function () {
		var Node = require("/tree/node"),
			Variable = require("/tree/variable");

		var VariableCall = function (variable) {
			this.variable = variable;
			this.allowRoot = true;
		};
		VariableCall.prototype = new Node();
		VariableCall.prototype.type = "VariableCall";
		VariableCall.prototype.eval = function (context) {
			var detachedRuleset = new Variable(this.variable).eval(context);
			return detachedRuleset.callEval(context);
		};

		return VariableCall;
	};
	//#endregion

	//#region URL: /visitors
	modules['/visitors'] = function () {
		var visitors = {
			Visitor: require('/visitors/visitor'),
			ImportVisitor: require('/visitors/import-visitor'),
			MarkVisibleSelectorsVisitor: require('/visitors/set-tree-visibility-visitor'),
			ExtendVisitor: require('/visitors/extend-visitor'),
			JoinSelectorVisitor: require('/visitors/join-selector-visitor'),
			ToCSSVisitor: require('/visitors/to-css-visitor')
		};

		return visitors;
	};
	//#endregion

	//#region URL: /visitors/extend-visitor
	modules['/visitors/extend-visitor'] = function () {
		var tree = require("/tree"),
			Visitor = require("/visitors/visitor")/*BT- ,
			logger = require("/logger"),*/
			utils = require("/utils");

		/* jshint loopfunc:true */

		var ExtendFinderVisitor = function() {
			this._visitor = new Visitor(this);
			this.contexts = [];
			this.allExtendsStack = [[]];
		};

		ExtendFinderVisitor.prototype = {
			run: function (root) {
				root = this._visitor.visit(root);
				root.allExtends = this.allExtendsStack[0];
				return root;
			},
			visitDeclaration: function (declNode, visitArgs) {
				visitArgs.visitDeeper = false;
			},
			visitMixinDefinition: function (mixinDefinitionNode, visitArgs) {
				visitArgs.visitDeeper = false;
			},
			visitRuleset: function (rulesetNode, visitArgs) {
				if (rulesetNode.root) {
					return;
				}

				var i, j, extend, allSelectorsExtendList = [], extendList;

				// get &:extend(.a); rules which apply to all selectors in this ruleset
				var rules = rulesetNode.rules, ruleCnt = rules ? rules.length : 0;
				for (i = 0; i < ruleCnt; i++) {
					if (rulesetNode.rules[i] instanceof tree.Extend) {
						allSelectorsExtendList.push(rules[i]);
						rulesetNode.extendOnEveryPath = true;
					}
				}

				// now find every selector and apply the extends that apply to all extends
				// and the ones which apply to an individual extend
				var paths = rulesetNode.paths;
				for (i = 0; i < paths.length; i++) {
					var selectorPath = paths[i],
						selector = selectorPath[selectorPath.length - 1],
						selExtendList = selector.extendList;

					extendList = selExtendList ? utils.copyArray(selExtendList).concat(allSelectorsExtendList)
											   : allSelectorsExtendList;

					if (extendList) {
						extendList = extendList.map(function(allSelectorsExtend) {
							return allSelectorsExtend.clone();
						});
					}

					for (j = 0; j < extendList.length; j++) {
						this.foundExtends = true;
						extend = extendList[j];
						extend.findSelfSelectors(selectorPath);
						extend.ruleset = rulesetNode;
						if (j === 0) { extend.firstExtendOnThisSelectorPath = true; }
						this.allExtendsStack[this.allExtendsStack.length - 1].push(extend);
					}
				}

				this.contexts.push(rulesetNode.selectors);
			},
			visitRulesetOut: function (rulesetNode) {
				if (!rulesetNode.root) {
					this.contexts.length = this.contexts.length - 1;
				}
			},
			visitMedia: function (mediaNode, visitArgs) {
				mediaNode.allExtends = [];
				this.allExtendsStack.push(mediaNode.allExtends);
			},
			visitMediaOut: function (mediaNode) {
				this.allExtendsStack.length = this.allExtendsStack.length - 1;
			},
			visitAtRule: function (atRuleNode, visitArgs) {
				atRuleNode.allExtends = [];
				this.allExtendsStack.push(atRuleNode.allExtends);
			},
			visitAtRuleOut: function (atRuleNode) {
				this.allExtendsStack.length = this.allExtendsStack.length - 1;
			}
		};

		var ProcessExtendsVisitor = function() {
			this._visitor = new Visitor(this);
		};

		ProcessExtendsVisitor.prototype = {
			run: function(root) {
				var extendFinder = new ExtendFinderVisitor();
				this.extendIndices = {};
				extendFinder.run(root);
				if (!extendFinder.foundExtends) { return root; }
				root.allExtends = root.allExtends.concat(this.doExtendChaining(root.allExtends, root.allExtends));
				this.allExtendsStack = [root.allExtends];
				var newRoot = this._visitor.visit(root);
				this.checkExtendsForNonMatched(root.allExtends);
				return newRoot;
			},
			checkExtendsForNonMatched: function(extendList) {
				var logger = Less.logger; //BT+
				var indices = this.extendIndices;
				extendList.filter(function(extend) {
					return !extend.hasFoundMatches && extend.parent_ids.length == 1;
				}).forEach(function(extend) {
					var selector = "_unknown_";
					try {
						selector = extend.selector.toCSS({});
					}
					catch (_) {}

					if (!indices[extend.index + ' ' + selector]) {
						indices[extend.index + ' ' + selector] = true;
						logger.warn("extend '" + selector + "' has no matches");
					}
				});
			},
			doExtendChaining: function (extendsList, extendsListTarget, iterationCount) {
				//
				// chaining is different from normal extension.. if we extend an extend then we are not just copying, altering
				// and pasting the selector we would do normally, but we are also adding an extend with the same target selector
				// this means this new extend can then go and alter other extends
				//
				// this method deals with all the chaining work - without it, extend is flat and doesn't work on other extend selectors
				// this is also the most expensive.. and a match on one selector can cause an extension of a selector we had already
				// processed if we look at each selector at a time, as is done in visitRuleset

				var extendIndex, targetExtendIndex, matches, extendsToAdd = [], newSelector, extendVisitor = this, selectorPath,
					extend, targetExtend, newExtend;

				iterationCount = iterationCount || 0;

				// loop through comparing every extend with every target extend.
				// a target extend is the one on the ruleset we are looking at copy/edit/pasting in place
				// e.g.  .a:extend(.b) {}  and .b:extend(.c) {} then the first extend extends the second one
				// and the second is the target.
				// the separation into two lists allows us to process a subset of chains with a bigger set, as is the
				// case when processing media queries
				for (extendIndex = 0; extendIndex < extendsList.length; extendIndex++) {
					for (targetExtendIndex = 0; targetExtendIndex < extendsListTarget.length; targetExtendIndex++) {

						extend = extendsList[extendIndex];
						targetExtend = extendsListTarget[targetExtendIndex];

						// look for circular references
						if ( extend.parent_ids.indexOf( targetExtend.object_id ) >= 0 ) { continue; }

						// find a match in the target extends self selector (the bit before :extend)
						selectorPath = [targetExtend.selfSelectors[0]];
						matches = extendVisitor.findMatch(extend, selectorPath);

						if (matches.length) {
							extend.hasFoundMatches = true;

							// we found a match, so for each self selector..
							extend.selfSelectors.forEach(function(selfSelector) {
								var info = targetExtend.visibilityInfo();

								// process the extend as usual
								newSelector = extendVisitor.extendSelector(matches, selectorPath, selfSelector, extend.isVisible());

								// but now we create a new extend from it
								newExtend = new(tree.Extend)(targetExtend.selector, targetExtend.option, 0, targetExtend.fileInfo(), info);
								newExtend.selfSelectors = newSelector;

								// add the extend onto the list of extends for that selector
								newSelector[newSelector.length - 1].extendList = [newExtend];

								// record that we need to add it.
								extendsToAdd.push(newExtend);
								newExtend.ruleset = targetExtend.ruleset;

								//remember its parents for circular references
								newExtend.parent_ids = newExtend.parent_ids.concat(targetExtend.parent_ids, extend.parent_ids);

								// only process the selector once.. if we have :extend(.a,.b) then multiple
								// extends will look at the same selector path, so when extending
								// we know that any others will be duplicates in terms of what is added to the css
								if (targetExtend.firstExtendOnThisSelectorPath) {
									newExtend.firstExtendOnThisSelectorPath = true;
									targetExtend.ruleset.paths.push(newSelector);
								}
							});
						}
					}
				}

				if (extendsToAdd.length) {
					// try to detect circular references to stop a stack overflow.
					// may no longer be needed.
					this.extendChainCount++;
					if (iterationCount > 100) {
						var selectorOne = "{unable to calculate}";
						var selectorTwo = "{unable to calculate}";
						try {
							selectorOne = extendsToAdd[0].selfSelectors[0].toCSS();
							selectorTwo = extendsToAdd[0].selector.toCSS();
						}
						catch (e) {}
						throw { message: "extend circular reference detected. One of the circular extends is currently:" +
							selectorOne + ":extend(" + selectorTwo + ")"};
					}

					// now process the new extends on the existing rules so that we can handle a extending b extending c extending
					// d extending e...
					return extendsToAdd.concat(extendVisitor.doExtendChaining(extendsToAdd, extendsListTarget, iterationCount + 1));
				} else {
					return extendsToAdd;
				}
			},
			visitDeclaration: function (ruleNode, visitArgs) {
				visitArgs.visitDeeper = false;
			},
			visitMixinDefinition: function (mixinDefinitionNode, visitArgs) {
				visitArgs.visitDeeper = false;
			},
			visitSelector: function (selectorNode, visitArgs) {
				visitArgs.visitDeeper = false;
			},
			visitRuleset: function (rulesetNode, visitArgs) {
				if (rulesetNode.root) {
					return;
				}
				var matches, pathIndex, extendIndex, allExtends = this.allExtendsStack[this.allExtendsStack.length - 1],
					selectorsToAdd = [], extendVisitor = this, selectorPath;

				// look at each selector path in the ruleset, find any extend matches and then copy, find and replace

				for (extendIndex = 0; extendIndex < allExtends.length; extendIndex++) {
					for (pathIndex = 0; pathIndex < rulesetNode.paths.length; pathIndex++) {
						selectorPath = rulesetNode.paths[pathIndex];

						// extending extends happens initially, before the main pass
						if (rulesetNode.extendOnEveryPath) { continue; }
						var extendList = selectorPath[selectorPath.length - 1].extendList;
						if (extendList && extendList.length) { continue; }

						matches = this.findMatch(allExtends[extendIndex], selectorPath);

						if (matches.length) {
							allExtends[extendIndex].hasFoundMatches = true;

							allExtends[extendIndex].selfSelectors.forEach(function(selfSelector) {
								var extendedSelectors;
								extendedSelectors = extendVisitor.extendSelector(matches, selectorPath, selfSelector, allExtends[extendIndex].isVisible());
								selectorsToAdd.push(extendedSelectors);
							});
						}
					}
				}
				rulesetNode.paths = rulesetNode.paths.concat(selectorsToAdd);
			},
			findMatch: function (extend, haystackSelectorPath) {
				//
				// look through the haystack selector path to try and find the needle - extend.selector
				// returns an array of selector matches that can then be replaced
				//
				var haystackSelectorIndex, hackstackSelector, hackstackElementIndex, haystackElement,
					targetCombinator, i,
					extendVisitor = this,
					needleElements = extend.selector.elements,
					potentialMatches = [], potentialMatch, matches = [];

				// loop through the haystack elements
				for (haystackSelectorIndex = 0; haystackSelectorIndex < haystackSelectorPath.length; haystackSelectorIndex++) {
					hackstackSelector = haystackSelectorPath[haystackSelectorIndex];

					for (hackstackElementIndex = 0; hackstackElementIndex < hackstackSelector.elements.length; hackstackElementIndex++) {

						haystackElement = hackstackSelector.elements[hackstackElementIndex];

						// if we allow elements before our match we can add a potential match every time. otherwise only at the first element.
						if (extend.allowBefore || (haystackSelectorIndex === 0 && hackstackElementIndex === 0)) {
							potentialMatches.push({pathIndex: haystackSelectorIndex, index: hackstackElementIndex, matched: 0,
								initialCombinator: haystackElement.combinator});
						}

						for (i = 0; i < potentialMatches.length; i++) {
							potentialMatch = potentialMatches[i];

							// selectors add " " onto the first element. When we use & it joins the selectors together, but if we don't
							// then each selector in haystackSelectorPath has a space before it added in the toCSS phase. so we need to
							// work out what the resulting combinator will be
							targetCombinator = haystackElement.combinator.value;
							if (targetCombinator === '' && hackstackElementIndex === 0) {
								targetCombinator = ' ';
							}

							// if we don't match, null our match to indicate failure
							if (!extendVisitor.isElementValuesEqual(needleElements[potentialMatch.matched].value, haystackElement.value) ||
								(potentialMatch.matched > 0 && needleElements[potentialMatch.matched].combinator.value !== targetCombinator)) {
								potentialMatch = null;
							} else {
								potentialMatch.matched++;
							}

							// if we are still valid and have finished, test whether we have elements after and whether these are allowed
							if (potentialMatch) {
								potentialMatch.finished = potentialMatch.matched === needleElements.length;
								if (potentialMatch.finished &&
									(!extend.allowAfter &&
										(hackstackElementIndex + 1 < hackstackSelector.elements.length || haystackSelectorIndex + 1 < haystackSelectorPath.length))) {
									potentialMatch = null;
								}
							}
							// if null we remove, if not, we are still valid, so either push as a valid match or continue
							if (potentialMatch) {
								if (potentialMatch.finished) {
									potentialMatch.length = needleElements.length;
									potentialMatch.endPathIndex = haystackSelectorIndex;
									potentialMatch.endPathElementIndex = hackstackElementIndex + 1; // index after end of match
									potentialMatches.length = 0; // we don't allow matches to overlap, so start matching again
									matches.push(potentialMatch);
								}
							} else {
								potentialMatches.splice(i, 1);
								i--;
							}
						}
					}
				}
				return matches;
			},
			isElementValuesEqual: function(elementValue1, elementValue2) {
				if (typeof elementValue1 === "string" || typeof elementValue2 === "string") {
					return elementValue1 === elementValue2;
				}
				if (elementValue1 instanceof tree.Attribute) {
					if (elementValue1.op !== elementValue2.op || elementValue1.key !== elementValue2.key) {
						return false;
					}
					if (!elementValue1.value || !elementValue2.value) {
						if (elementValue1.value || elementValue2.value) {
							return false;
						}
						return true;
					}
					elementValue1 = elementValue1.value.value || elementValue1.value;
					elementValue2 = elementValue2.value.value || elementValue2.value;
					return elementValue1 === elementValue2;
				}
				elementValue1 = elementValue1.value;
				elementValue2 = elementValue2.value;
				if (elementValue1 instanceof tree.Selector) {
					if (!(elementValue2 instanceof tree.Selector) || elementValue1.elements.length !== elementValue2.elements.length) {
						return false;
					}
					for (var i = 0; i  < elementValue1.elements.length; i++) {
						if (elementValue1.elements[i].combinator.value !== elementValue2.elements[i].combinator.value) {
							if (i !== 0 || (elementValue1.elements[i].combinator.value || ' ') !== (elementValue2.elements[i].combinator.value || ' ')) {
								return false;
							}
						}
						if (!this.isElementValuesEqual(elementValue1.elements[i].value, elementValue2.elements[i].value)) {
							return false;
						}
					}
					return true;
				}
				return false;
			},
			extendSelector:function (matches, selectorPath, replacementSelector, isVisible) {

				// for a set of matches, replace each match with the replacement selector

				var currentSelectorPathIndex = 0,
					currentSelectorPathElementIndex = 0,
					path = [],
					matchIndex,
					selector,
					firstElement,
					match,
					newElements;

				for (matchIndex = 0; matchIndex < matches.length; matchIndex++) {
					match = matches[matchIndex];
					selector = selectorPath[match.pathIndex];
					firstElement = new tree.Element(
						match.initialCombinator,
						replacementSelector.elements[0].value,
						replacementSelector.elements[0].getIndex(),
						replacementSelector.elements[0].fileInfo()
					);

					if (match.pathIndex > currentSelectorPathIndex && currentSelectorPathElementIndex > 0) {
						path[path.length - 1].elements = path[path.length - 1]
							.elements.concat(selectorPath[currentSelectorPathIndex].elements.slice(currentSelectorPathElementIndex));
						currentSelectorPathElementIndex = 0;
						currentSelectorPathIndex++;
					}

					newElements = selector.elements
						.slice(currentSelectorPathElementIndex, match.index)
						.concat([firstElement])
						.concat(replacementSelector.elements.slice(1));

					if (currentSelectorPathIndex === match.pathIndex && matchIndex > 0) {
						path[path.length - 1].elements =
							path[path.length - 1].elements.concat(newElements);
					} else {
						path = path.concat(selectorPath.slice(currentSelectorPathIndex, match.pathIndex));

						path.push(new tree.Selector(
							newElements
						));
					}
					currentSelectorPathIndex = match.endPathIndex;
					currentSelectorPathElementIndex = match.endPathElementIndex;
					if (currentSelectorPathElementIndex >= selectorPath[currentSelectorPathIndex].elements.length) {
						currentSelectorPathElementIndex = 0;
						currentSelectorPathIndex++;
					}
				}

				if (currentSelectorPathIndex < selectorPath.length && currentSelectorPathElementIndex > 0) {
					path[path.length - 1].elements = path[path.length - 1]
						.elements.concat(selectorPath[currentSelectorPathIndex].elements.slice(currentSelectorPathElementIndex));
					currentSelectorPathIndex++;
				}

				path = path.concat(selectorPath.slice(currentSelectorPathIndex, selectorPath.length));
				path = path.map(function (currentValue) {
					// we can re-use elements here, because the visibility property matters only for selectors
					var derived = currentValue.createDerived(currentValue.elements);
					if (isVisible) {
						derived.ensureVisibility();
					} else {
						derived.ensureInvisibility();
					}
					return derived;
				});
				return path;
			},
			visitMedia: function (mediaNode, visitArgs) {
				var newAllExtends = mediaNode.allExtends.concat(this.allExtendsStack[this.allExtendsStack.length - 1]);
				newAllExtends = newAllExtends.concat(this.doExtendChaining(newAllExtends, mediaNode.allExtends));
				this.allExtendsStack.push(newAllExtends);
			},
			visitMediaOut: function (mediaNode) {
				var lastIndex = this.allExtendsStack.length - 1;
				this.allExtendsStack.length = lastIndex;
			},
			visitAtRule: function (atRuleNode, visitArgs) {
				var newAllExtends = atRuleNode.allExtends.concat(this.allExtendsStack[this.allExtendsStack.length - 1]);
				newAllExtends = newAllExtends.concat(this.doExtendChaining(newAllExtends, atRuleNode.allExtends));
				this.allExtendsStack.push(newAllExtends);
			},
			visitAtRuleOut: function (atRuleNode) {
				var lastIndex = this.allExtendsStack.length - 1;
				this.allExtendsStack.length = lastIndex;
			}
		};

		return ProcessExtendsVisitor;
	};
	//#endregion

	//#region URL: /visitors/import-sequencer
	modules['/visitors/import-sequencer'] = function () {
		function ImportSequencer(onSequencerEmpty) {
			this.imports = [];
			this.variableImports = [];
			this._onSequencerEmpty = onSequencerEmpty;
			this._currentDepth = 0;
		}

		ImportSequencer.prototype.addImport = function(callback) {
			var importSequencer = this,
				importItem = {
					callback: callback,
					args: null,
					isReady: false
				};
			this.imports.push(importItem);
			return function() {
				importItem.args = Array.prototype.slice.call(arguments, 0);
				importItem.isReady = true;
				importSequencer.tryRun();
			};
		};

		ImportSequencer.prototype.addVariableImport = function(callback) {
			this.variableImports.push(callback);
		};

		ImportSequencer.prototype.tryRun = function() {
			this._currentDepth++;
			try {
				while (true) {
					while (this.imports.length > 0) {
						var importItem = this.imports[0];
						if (!importItem.isReady) {
							return;
						}
						this.imports = this.imports.slice(1);
						importItem.callback.apply(null, importItem.args);
					}
					if (this.variableImports.length === 0) {
						break;
					}
					var variableImport = this.variableImports[0];
					this.variableImports = this.variableImports.slice(1);
					variableImport();
				}
			} finally {
				this._currentDepth--;
			}
			if (this._currentDepth === 0 && this._onSequencerEmpty) {
				this._onSequencerEmpty();
			}
		};

		return ImportSequencer;
	};
	//#endregion

	//#region URL: /visitors/import-visitor
	modules['/visitors/import-visitor'] = function () {
		var contexts = require("/contexts"),
			Visitor = require("/visitors/visitor"),
			ImportSequencer = require("/visitors/import-sequencer"),
			utils = require("/utils");

		var ImportVisitor = function(importer, finish) {

			this._visitor = new Visitor(this);
			this._importer = importer;
			this._finish = finish;
			this.context = new contexts.Eval();
			this.importCount = 0;
			this.onceFileDetectionMap = {};
			this.recursionDetector = {};
			this._sequencer = new ImportSequencer(this._onSequencerEmpty.bind(this));
		};

		ImportVisitor.prototype = {
			isReplacing: false,
			run: function (root) {
				try {
					// process the contents
					this._visitor.visit(root);
				}
				catch (e) {
					this.error = e;
				}

				this.isFinished = true;
				this._sequencer.tryRun();
			},
			_onSequencerEmpty: function() {
				if (!this.isFinished) {
					return;
				}
				this._finish(this.error);
			},
			visitImport: function (importNode, visitArgs) {
				var inlineCSS = importNode.options.inline;

				if (!importNode.css || inlineCSS) {

					var context = new contexts.Eval(this.context, utils.copyArray(this.context.frames));
					var importParent = context.frames[0];

					this.importCount++;
					if (importNode.isVariableImport()) {
						this._sequencer.addVariableImport(this.processImportNode.bind(this, importNode, context, importParent));
					} else {
						this.processImportNode(importNode, context, importParent);
					}
				}
				visitArgs.visitDeeper = false;
			},
			processImportNode: function(importNode, context, importParent) {
				var evaldImportNode,
					inlineCSS = importNode.options.inline;

				try {
					evaldImportNode = importNode.evalForImport(context);
				} catch (e) {
					if (!e.filename) { e.index = importNode.getIndex(); e.filename = importNode.fileInfo().filename; }
					// attempt to eval properly and treat as css
					importNode.css = true;
					// if that fails, this error will be thrown
					importNode.error = e;
				}

				if (evaldImportNode && (!evaldImportNode.css || inlineCSS)) {

					if (evaldImportNode.options.multiple) {
						context.importMultiple = true;
					}

					// try appending if we haven't determined if it is css or not
					var tryAppendLessExtension = evaldImportNode.css === undefined;

					for (var i = 0; i < importParent.rules.length; i++) {
						if (importParent.rules[i] === importNode) {
							importParent.rules[i] = evaldImportNode;
							break;
						}
					}

					var onImported = this.onImported.bind(this, evaldImportNode, context),
						sequencedOnImported = this._sequencer.addImport(onImported);

					this._importer.push(evaldImportNode.getPath(), tryAppendLessExtension, evaldImportNode.fileInfo(),
						evaldImportNode.options, sequencedOnImported);
				} else {
					this.importCount--;
					if (this.isFinished) {
						this._sequencer.tryRun();
					}
				}
			},
			onImported: function (importNode, context, e, root, importedAtRoot, fullPath) {
				if (e) {
					if (!e.filename) {
						e.index = importNode.getIndex(); e.filename = importNode.fileInfo().filename;
					}
					this.error = e;
				}

				var importVisitor = this,
					inlineCSS = importNode.options.inline,
					/*BT-
					isPlugin = importNode.options.isPlugin,
					*/
					isOptional = importNode.options.optional,
					duplicateImport = importedAtRoot || fullPath in importVisitor.recursionDetector;

				if (!context.importMultiple) {
					if (duplicateImport) {
						importNode.skip = true;
					} else {
						importNode.skip = function() {
							if (fullPath in importVisitor.onceFileDetectionMap) {
								return true;
							}
							importVisitor.onceFileDetectionMap[fullPath] = true;
							return false;
						};
					}
				}

				if (!fullPath && isOptional) {
					importNode.skip = true;
				}

				if (root) {
					importNode.root = root;
					importNode.importedFilename = fullPath;

					if (!inlineCSS/*BT- && !isPlugin*/ && (context.importMultiple || !duplicateImport)) {
						importVisitor.recursionDetector[fullPath] = true;

						var oldContext = this.context;
						this.context = context;
						try {
							this._visitor.visit(root);
						} catch (e) {
							this.error = e;
						}
						this.context = oldContext;
					}
				}

				importVisitor.importCount--;

				if (importVisitor.isFinished) {
					importVisitor._sequencer.tryRun();
				}
			},
			visitDeclaration: function (declNode, visitArgs) {
				if (declNode.value.type === "DetachedRuleset") {
					this.context.frames.unshift(declNode);
				} else {
					visitArgs.visitDeeper = false;
				}
			},
			visitDeclarationOut: function(declNode) {
				if (declNode.value.type === "DetachedRuleset") {
					this.context.frames.shift();
				}
			},
			visitAtRule: function (atRuleNode, visitArgs) {
				this.context.frames.unshift(atRuleNode);
			},
			visitAtRuleOut: function (atRuleNode) {
				this.context.frames.shift();
			},
			visitMixinDefinition: function (mixinDefinitionNode, visitArgs) {
				this.context.frames.unshift(mixinDefinitionNode);
			},
			visitMixinDefinitionOut: function (mixinDefinitionNode) {
				this.context.frames.shift();
			},
			visitRuleset: function (rulesetNode, visitArgs) {
				this.context.frames.unshift(rulesetNode);
			},
			visitRulesetOut: function (rulesetNode) {
				this.context.frames.shift();
			},
			visitMedia: function (mediaNode, visitArgs) {
				this.context.frames.unshift(mediaNode.rules[0]);
			},
			visitMediaOut: function (mediaNode) {
				this.context.frames.shift();
			}
		};

		return ImportVisitor;
	};
	//#endregion

	//#region URL: /visitors/join-selector-visitor
	modules['/visitors/join-selector-visitor'] = function () {
		var Visitor = require("/visitors/visitor");

		var JoinSelectorVisitor = function() {
			this.contexts = [[]];
			this._visitor = new Visitor(this);
		};

		JoinSelectorVisitor.prototype = {
			run: function (root) {
				return this._visitor.visit(root);
			},
			visitDeclaration: function (declNode, visitArgs) {
				visitArgs.visitDeeper = false;
			},
			visitMixinDefinition: function (mixinDefinitionNode, visitArgs) {
				visitArgs.visitDeeper = false;
			},

			visitRuleset: function (rulesetNode, visitArgs) {
				var context = this.contexts[this.contexts.length - 1],
					paths = [], selectors;

				this.contexts.push(paths);

				if (!rulesetNode.root) {
					selectors = rulesetNode.selectors;
					if (selectors) {
						selectors = selectors.filter(function(selector) { return selector.getIsOutput(); });
						rulesetNode.selectors = selectors.length ? selectors : (selectors = null);
						if (selectors) { rulesetNode.joinSelectors(paths, context, selectors); }
					}
					if (!selectors) { rulesetNode.rules = null; }
					rulesetNode.paths = paths;
				}
			},
			visitRulesetOut: function (rulesetNode) {
				this.contexts.length = this.contexts.length - 1;
			},
			visitMedia: function (mediaNode, visitArgs) {
				var context = this.contexts[this.contexts.length - 1];
				mediaNode.rules[0].root = (context.length === 0 || context[0].multiMedia);
			},
			visitAtRule: function (atRuleNode, visitArgs) {
				var context = this.contexts[this.contexts.length - 1];
				if (atRuleNode.rules && atRuleNode.rules.length) {
					atRuleNode.rules[0].root = (atRuleNode.isRooted || context.length === 0 || null);
				}
			}
		};

		return JoinSelectorVisitor;
	};
	//#endregion

	//#region URL: /visitors/set-tree-visibility-visitor
	modules['/visitors/set-tree-visibility-visitor'] = function () {
		var SetTreeVisibilityVisitor = function(visible) {
			this.visible = visible;
		};
		SetTreeVisibilityVisitor.prototype.run = function(root) {
			this.visit(root);
		};
		SetTreeVisibilityVisitor.prototype.visitArray = function(nodes) {
			if (!nodes) {
				return nodes;
			}

			var cnt = nodes.length, i;
			for (i = 0; i < cnt; i++) {
				this.visit(nodes[i]);
			}
			return nodes;
		};
		SetTreeVisibilityVisitor.prototype.visit = function(node) {
			if (!node) {
				return node;
			}
			if (node.constructor === Array) {
				return this.visitArray(node);
			}

			if (!node.blocksVisibility || node.blocksVisibility()) {
				return node;
			}
			if (this.visible) {
				node.ensureVisibility();
			} else {
				node.ensureInvisibility();
			}

			node.accept(this);
			return node;
		};

		return SetTreeVisibilityVisitor;
	};
	//#endregion

	//#region URL: /visitors/to-css-visitor
	modules['/visitors/to-css-visitor'] = function () {
		var tree = require("/tree"),
			Visitor = require("/visitors/visitor");

		var CSSVisitorUtils = function(context) {
			this._visitor = new Visitor(this);
			this._context = context;
		};

		CSSVisitorUtils.prototype = {
			containsSilentNonBlockedChild: function(bodyRules) {
				var rule;
				if (!bodyRules) {
					return false;
				}
				for (var r = 0; r < bodyRules.length; r++) {
					rule = bodyRules[r];
					if (rule.isSilent && rule.isSilent(this._context) && !rule.blocksVisibility()) {
						// the atrule contains something that was referenced (likely by extend)
						// therefore it needs to be shown in output too
						return true;
					}
				}
				return false;
			},

			keepOnlyVisibleChilds: function(owner) {
				if (owner && owner.rules) {
					owner.rules = owner.rules.filter(function(thing) {
						return thing.isVisible();
					});
				}
			},

			isEmpty: function(owner) {
				return (owner && owner.rules) 
					? (owner.rules.length === 0) : true;
			},

			hasVisibleSelector: function(rulesetNode) {
				return (rulesetNode && rulesetNode.paths)
					? (rulesetNode.paths.length > 0) : false;
			},

			resolveVisibility: function (node, originalRules) {
				if (!node.blocksVisibility()) {
					if (this.isEmpty(node) && !this.containsSilentNonBlockedChild(originalRules)) {
						return ;
					}

					return node;
				}

				var compiledRulesBody = node.rules[0];
				this.keepOnlyVisibleChilds(compiledRulesBody);

				if (this.isEmpty(compiledRulesBody)) {
					return ;
				}

				node.ensureVisibility();
				node.removeVisibilityBlock();

				return node;
			},

			isVisibleRuleset: function(rulesetNode) {
				if (rulesetNode.firstRoot) {
					return true;
				}

				if (this.isEmpty(rulesetNode)) {
					return false;
				}

				if (!rulesetNode.root && !this.hasVisibleSelector(rulesetNode)) {
					return false;
				}

				return true;
			}

		};

		var ToCSSVisitor = function(context) {
			this._visitor = new Visitor(this);
			this._context = context;
			this.utils = new CSSVisitorUtils(context);
		};

		ToCSSVisitor.prototype = {
			isReplacing: true,
			run: function (root) {
				return this._visitor.visit(root);
			},

			visitDeclaration: function (declNode, visitArgs) {
				if (declNode.blocksVisibility() || declNode.variable) {
					return;
				}
				return declNode;
			},

			visitMixinDefinition: function (mixinNode, visitArgs) {
				// mixin definitions do not get eval'd - this means they keep state
				// so we have to clear that state here so it isn't used if toCSS is called twice
				mixinNode.frames = [];
			},

			visitExtend: function (extendNode, visitArgs) {
			},

			visitComment: function (commentNode, visitArgs) {
				if (commentNode.blocksVisibility() || commentNode.isSilent(this._context)) {
					return;
				}
				return commentNode;
			},

			visitMedia: function(mediaNode, visitArgs) {
				var originalRules = mediaNode.rules[0].rules;
				mediaNode.accept(this._visitor);
				visitArgs.visitDeeper = false;

				return this.utils.resolveVisibility(mediaNode, originalRules);
			},

			visitImport: function (importNode, visitArgs) {
				if (importNode.blocksVisibility()) {
					return ;
				}
				return importNode;
			},

			visitAtRule: function(atRuleNode, visitArgs) {
				if (atRuleNode.rules && atRuleNode.rules.length) {
					return this.visitAtRuleWithBody(atRuleNode, visitArgs);
				} else {
					return this.visitAtRuleWithoutBody(atRuleNode, visitArgs);
				}
			},

			visitAnonymous: function(anonymousNode, visitArgs) {
				if (!anonymousNode.blocksVisibility()) {
					anonymousNode.accept(this._visitor);
					return anonymousNode;
				}
			},

			visitAtRuleWithBody: function(atRuleNode, visitArgs) {
				// if there is only one nested ruleset and that one has no path, then it is
				// just fake ruleset
				function hasFakeRuleset(atRuleNode) {
					var bodyRules = atRuleNode.rules;
					return bodyRules.length === 1 && (!bodyRules[0].paths || bodyRules[0].paths.length === 0);
				}
				function getBodyRules(atRuleNode) {
					var nodeRules = atRuleNode.rules;
					if (hasFakeRuleset(atRuleNode)) {
						return nodeRules[0].rules;
					}

					return nodeRules;
				}
				// it is still true that it is only one ruleset in array
				// this is last such moment
				// process childs
				var originalRules = getBodyRules(atRuleNode);
				atRuleNode.accept(this._visitor);
				visitArgs.visitDeeper = false;

				if (!this.utils.isEmpty(atRuleNode)) {
					this._mergeRules(atRuleNode.rules[0].rules);
				}

				return this.utils.resolveVisibility(atRuleNode, originalRules);
			},

			visitAtRuleWithoutBody: function(atRuleNode, visitArgs) {
				if (atRuleNode.blocksVisibility()) {
					return;
				}

				if (atRuleNode.name === "@charset") {
					// Only output the debug info together with subsequent @charset definitions
					// a comment (or @media statement) before the actual @charset atrule would
					// be considered illegal css as it has to be on the first line
					if (this.charset) {
						if (atRuleNode.debugInfo) {
							var comment = new tree.Comment("/* " + atRuleNode.toCSS(this._context).replace(/\n/g, "") + " */\n");
							comment.debugInfo = atRuleNode.debugInfo;
							return this._visitor.visit(comment);
						}
						return;
					}
					this.charset = true;
				}

				return atRuleNode;
			},

			checkValidNodes: function(rules, isRoot) {
				if (!rules) {
					return;
				}

				for (var i = 0; i < rules.length; i++) {
					var ruleNode = rules[i];
					if (isRoot && ruleNode instanceof tree.Declaration && !ruleNode.variable) {
						throw { message: "Properties must be inside selector blocks. They cannot be in the root",
							index: ruleNode.getIndex(), filename: ruleNode.fileInfo() && ruleNode.fileInfo().filename};
					}
					if (ruleNode instanceof tree.Call) {
						throw { message: "Function '" + ruleNode.name + "' is undefined",
							index: ruleNode.getIndex(), filename: ruleNode.fileInfo() && ruleNode.fileInfo().filename};
					}
					if (ruleNode.type && !ruleNode.allowRoot) {
						throw { message: ruleNode.type + " node returned by a function is not valid here",
							index: ruleNode.getIndex(), filename: ruleNode.fileInfo() && ruleNode.fileInfo().filename};
					}
				}
			},

			visitRuleset: function (rulesetNode, visitArgs) {
				// at this point rulesets are nested into each other
				var rule, rulesets = [];

				this.checkValidNodes(rulesetNode.rules, rulesetNode.firstRoot);

				if (!rulesetNode.root) {
					// remove invisible paths
					this._compileRulesetPaths(rulesetNode);

					// remove rulesets from this ruleset body and compile them separately
					var nodeRules = rulesetNode.rules, nodeRuleCnt = nodeRules ? nodeRules.length : 0;
					for (var i = 0; i < nodeRuleCnt; ) {
						rule = nodeRules[i];
						if (rule && rule.rules) {
							// visit because we are moving them out from being a child
							rulesets.push(this._visitor.visit(rule));
							nodeRules.splice(i, 1);
							nodeRuleCnt--;
							continue;
						}
						i++;
					}
					// accept the visitor to remove rules and refactor itself
					// then we can decide nogw whether we want it or not
					// compile body
					if (nodeRuleCnt > 0) {
						rulesetNode.accept(this._visitor);
					} else {
						rulesetNode.rules = null;
					}
					visitArgs.visitDeeper = false;

				} else { // if (! rulesetNode.root) {
					rulesetNode.accept(this._visitor);
					visitArgs.visitDeeper = false;
				}

				if (rulesetNode.rules) {
					this._mergeRules(rulesetNode.rules);
					this._removeDuplicateRules(rulesetNode.rules);
				}

				// now decide whether we keep the ruleset
				if (this.utils.isVisibleRuleset(rulesetNode)) {
					rulesetNode.ensureVisibility();
					rulesets.splice(0, 0, rulesetNode);
				}

				if (rulesets.length === 1) {
					return rulesets[0];
				}
				return rulesets;
			},

			_compileRulesetPaths: function(rulesetNode) {
				if (rulesetNode.paths) {
					rulesetNode.paths = rulesetNode.paths
						.filter(function(p) {
							var i;
							if (p[0].elements[0].combinator.value === ' ') {
								p[0].elements[0].combinator = new(tree.Combinator)('');
							}
							for (i = 0; i < p.length; i++) {
								if (p[i].isVisible() && p[i].getIsOutput()) {
									return true;
								}
							}
							return false;
						});
				}
			},

			_removeDuplicateRules: function(rules) {
				if (!rules) { return; }

				// remove duplicates
				var ruleCache = {},
					ruleList, rule, i;

				for (i = rules.length - 1; i >= 0 ; i--) {
					rule = rules[i];
					if (rule instanceof tree.Declaration) {
						if (!ruleCache[rule.name]) {
							ruleCache[rule.name] = rule;
						} else {
							ruleList = ruleCache[rule.name];
							if (ruleList instanceof tree.Declaration) {
								ruleList = ruleCache[rule.name] = [ruleCache[rule.name].toCSS(this._context)];
							}
							var ruleCSS = rule.toCSS(this._context);
							if (ruleList.indexOf(ruleCSS) !== -1) {
								rules.splice(i, 1);
							} else {
								ruleList.push(ruleCSS);
							}
						}
					}
				}
			},

			_mergeRules: function(rules) {
				if (!rules) {
					return; 
				}

				var groups    = {},
					groupsArr = [];
				
				for (var i = 0; i < rules.length; i++) {
					var rule = rules[i];
					if (rule.merge) {
						var key = rule.name;
						groups[key] ? rules.splice(i--, 1) : 
							groupsArr.push(groups[key] = []);
						groups[key].push(rule);
					}
				}

				groupsArr.forEach(function(group) {
					if (group.length > 0) {
						var result = group[0],
							space  = [],
							comma  = [new tree.Expression(space)];
						group.forEach(function(rule) {
							if ((rule.merge === '+') && (space.length > 0)) {
								comma.push(new tree.Expression(space = []));
							}
							space.push(rule.value);
							result.important = result.important || rule.important;
						});
						result.value = new tree.Value(comma);
					}
				});
			}
		};

		return ToCSSVisitor;
	};
	//#endregion

	//#region URL: /visitors/visitor
	modules['/visitors/visitor'] = function () {
		var tree = require("/tree");

		var _visitArgs = { visitDeeper: true },
			_hasIndexed = false;

		function _noop(node) {
			return node;
		}

		function indexNodeTypes(parent, ticker) {
			// add .typeIndex to tree node types for lookup table
			var key, child;
			for (key in parent) { 
				/* eslint guard-for-in: 0 */
				child = parent[key];
				switch (typeof child) {
					case "function":
						// ignore bound functions directly on tree which do not have a prototype
						// or aren't nodes
						if (child.prototype && child.prototype.type) {
							child.prototype.typeIndex = ticker++;
						}
						break;
					case "object":
						ticker = indexNodeTypes(child, ticker);
						break;
				
				}
			}
			return ticker;
		}

		var Visitor = function(implementation) {
			this._implementation = implementation;
			this._visitFnCache = [];

			if (!_hasIndexed) {
				indexNodeTypes(tree, 1);
				_hasIndexed = true;
			}
		};

		Visitor.prototype = {
			visit: function(node) {
				if (!node) {
					return node;
				}

				var nodeTypeIndex = node.typeIndex;
				if (!nodeTypeIndex) {
					return node;
				}

				var visitFnCache = this._visitFnCache,
					impl = this._implementation,
					aryIndx = nodeTypeIndex << 1,
					outAryIndex = aryIndx | 1,
					func = visitFnCache[aryIndx],
					funcOut = visitFnCache[outAryIndex],
					visitArgs = _visitArgs,
					fnName;

				visitArgs.visitDeeper = true;

				if (!func) {
					fnName = "visit" + node.type;
					func = impl[fnName] || _noop;
					funcOut = impl[fnName + "Out"] || _noop;
					visitFnCache[aryIndx] = func;
					visitFnCache[outAryIndex] = funcOut;
				}

				if (func !== _noop) {
					var newNode = func.call(impl, node, visitArgs);
					if (impl.isReplacing) {
						node = newNode;
					}
				}

				if (visitArgs.visitDeeper && node && node.accept) {
					node.accept(this);
				}

				if (funcOut != _noop) {
					funcOut.call(impl, node);
				}

				return node;
			},
			visitArray: function(nodes, nonReplacing) {
				if (!nodes) {
					return nodes;
				}

				var cnt = nodes.length, i;

				// Non-replacing
				if (nonReplacing || !this._implementation.isReplacing) {
					for (i = 0; i < cnt; i++) {
						this.visit(nodes[i]);
					}
					return nodes;
				}

				// Replacing
				var out = [];
				for (i = 0; i < cnt; i++) {
					var evald = this.visit(nodes[i]);
					if (evald === undefined) { continue; }
					if (!evald.splice) {
						out.push(evald);
					} else if (evald.length) {
						this.flatten(evald, out);
					}
				}
				return out;
			},
			flatten: function(arr, out) {
				if (!out) {
					out = [];
				}

				var cnt, i, item,
					nestedCnt, j, nestedItem;

				for (i = 0, cnt = arr.length; i < cnt; i++) {
					item = arr[i];
					if (item === undefined) {
						continue;
					}
					if (!item.splice) {
						out.push(item);
						continue;
					}

					for (j = 0, nestedCnt = item.length; j < nestedCnt; j++) {
						nestedItem = item[j];
						if (nestedItem === undefined) {
							continue;
						}
						if (!nestedItem.splice) {
							out.push(nestedItem);
						} else if (nestedItem.length) {
							this.flatten(nestedItem, out);
						}
					}
				}

				return out;
			}
		};

		return Visitor;
	};
	//#endregion

	//#region URL: /
	modules['/'] = function () {
		var exports = function(environment, fileManagers) {
			var /*BT- SourceMapOutput, SourceMapBuilder, */ParseTree, ImportManager, Environment;

			var initial = {
				version: [3, 0, 1],
				data: require('/data'),
				tree: require('/tree'),
				Environment: (Environment = require("/environment/environment")),
				AbstractFileManager: require("/environment/abstract-file-manager"),
				/*BT-
				AbstractPluginLoader: require("/environment/abstract-plugin-loader"),
				*/
				environment: (environment = new Environment(environment, fileManagers)),
				visitors: require('/visitors'),
				Parser: require('/parser/parser'),
				functions: require('/functions')(environment),
				contexts: require("/contexts"),
				/*BT-
				SourceMapOutput: (SourceMapOutput = require('/source-map-output')(environment)),
				SourceMapBuilder: (SourceMapBuilder = require('/source-map-builder')(SourceMapOutput, environment)),
				*/
				ParseTree: (ParseTree = require('/parse-tree')(/*BT- SourceMapBuilder*/)),
				ImportManager: (ImportManager = require('/import-manager')(environment)),
				render: require("/render")(environment, ParseTree, ImportManager),
				parse: require("/parse")(environment, ParseTree, ImportManager),
				LessError: require('/less-error'),
				transformTree: require('/transform-tree'),
				utils: require('/utils')/*BT- ,
				PluginManager: require('/plugin-manager'),
				logger: require('/logger')*/
			};

			// Create a public API

			var ctor = function(t) {
				return function() {
					var obj = Object.create(t.prototype);
					t.apply(obj, Array.prototype.slice.call(arguments, 0));
					return obj;
				};
			};
			var t, api = Object.create(initial);
			for (var n in initial.tree) {
				/* eslint guard-for-in: 0 */
				t = initial.tree[n];
				if (typeof t === "function") {
					api[n.toLowerCase()] = ctor(t);
				}
				else {
					api[n] = Object.create(null);
					for (var o in t) {
						/* eslint guard-for-in: 0 */
						api[n][o.toLowerCase()] = ctor(t[o]);
					}
				}
			}

			// provide image-size functionality
			require("/image-size")(api.environment); //BT+

			return api;
		};

		return exports;
	};
	//#endregion

	//#region URL: /contexts
	modules['/contexts'] = function () {
		var contexts = {};

		var copyFromOriginal = function copyFromOriginal(original, destination, propertiesToCopy) {
			if (!original) { return; }

			for (var i = 0; i < propertiesToCopy.length; i++) {
				if (original.hasOwnProperty(propertiesToCopy[i])) {
					destination[propertiesToCopy[i]] = original[propertiesToCopy[i]];
				}
			}
		};

		/*
		 parse is used whilst parsing
		 */
		var parseCopyProperties = [
			// options
			'paths',            // option - unmodified - paths to search for imports on
			'relativeUrls',     // option - whether to adjust URL's to be relative
			'rootpath',         // option - rootpath to append to URL's
			'strictImports',    // option -
			'insecure',         // option - whether to allow imports from insecure ssl hosts
			'dumpLineNumbers',  // option - whether to dump line numbers
			'compress',         // option - whether to compress
			'syncImport',       // option - whether to import synchronously
			'chunkInput',       // option - whether to chunk input. more performant but causes parse issues.
			'mime',             // browser only - mime type for sheet import
			'useFileCache',     // browser only - whether to use the per file session cache
			// context
			'processImports',   // option & context - whether to process imports. if false then imports will not be imported.
								// Used by the import manager to stop multiple import visitors being created.
			'pluginManager'     // Used as the plugin manager for the session
		];

		contexts.Parse = function(options) {
			copyFromOriginal(options, this, parseCopyProperties);

			if (typeof this.paths === "string") { this.paths = [this.paths]; }
		};

		var evalCopyProperties = [
			'paths',             // additional include paths
			'compress',          // whether to compress
			'ieCompat',          // whether to enforce IE compatibility (IE8 data-uri)
			'strictMath',        // whether math has to be within parenthesis
			'strictUnits',       // whether units need to evaluate correctly
			'sourceMap',         // whether to output a source map
			'importMultiple',    // whether we are currently importing multiple copies
			'urlArgs',           // whether to add args into url tokens
			'javascriptEnabled', // option - whether Inline JavaScript is enabled. if undefined, defaults to false
			'pluginManager',     // Used as the plugin manager for the session
			'importantScope'     // used to bubble up !important statements
		];

		contexts.Eval = function(options, frames) {
			copyFromOriginal(options, this, evalCopyProperties);

			if (typeof this.paths === "string") { this.paths = [this.paths]; }

			this.frames = frames || [];
			this.importantScope = this.importantScope || [];
		};

		contexts.Eval.prototype.inParenthesis = function () {
			if (!this.parensStack) {
				this.parensStack = [];
			}
			this.parensStack.push(true);
		};

		contexts.Eval.prototype.outOfParenthesis = function () {
			this.parensStack.pop();
		};

		contexts.Eval.prototype.mathOn = true;
		contexts.Eval.prototype.isMathOn = function () {
			if (!this.mathOn) {
				return false;
			}
			return this.strictMath ? (this.parensStack && this.parensStack.length) : true;
		};

		contexts.Eval.prototype.isPathRelative = function (path) {
			return !/^(?:[a-z-]+:|\/|#)/i.test(path);
		};

		contexts.Eval.prototype.normalizePath = function( path ) {
			var
				segments = path.split("/").reverse(),
				segment;

			path = [];
			while (segments.length !== 0 ) {
				segment = segments.pop();
				switch ( segment ) {
					case ".":
						break;
					case "..":
						if ((path.length === 0) || (path[path.length - 1] === "..")) {
							path.push( segment );
						} else {
							path.pop();
						}
						break;
					default:
						path.push( segment );
						break;
				}
			}

			return path.join("/");
		};

		// todo - do the same for the toCSS ?

		return contexts;
	};
	//#endregion

	//#region URL: /image-size
	modules['/image-size'] = function () {
		var exports = function() {

			var functionRegistry = require('/functions/function-registry');

			function imageSize() {
				throw {
					type: "Runtime",
					message: "Image size functions are not supported in BundleTransformer.Less."
				};
			}

			var imageFunctions = {
				"image-size": function(filePathNode) {
					imageSize(this, filePathNode);
					return -1;
				},
				"image-width": function(filePathNode) {
					imageSize(this, filePathNode);
					return -1;
				},
				"image-height": function(filePathNode) {
					imageSize(this, filePathNode);
					return -1;
				}
			};

			functionRegistry.addMultiple(imageFunctions);
		};
		
		return exports;
	};
	//#endregion

	//#region URL: /import-manager
	modules['/import-manager'] = function () {
		var contexts = require("/contexts"),
			Parser = require('/parser/parser'),
			LessError = require('/less-error'),
			utils = require('/utils')/*BT- ,
			PromiseConstructor = typeof Promise === 'undefined' ? require('promise') : Promise*/;

		var exports = function(environment) {

			// FileInfo = {
			//  'relativeUrls' - option - whether to adjust URL's to be relative
			//  'filename' - full resolved filename of current file
			//  'rootpath' - path to append to normal URLs for this node
			//  'currentDirectory' - path to the current file, absolute
			//  'rootFilename' - filename of the base file
			//  'entryPath' - absolute path to the entry file
			//  'reference' - whether the file should not be output and only output parts that are referenced

			var ImportManager = function(less, context, rootFileInfo) {
				this.less = less;
				this.rootFilename = rootFileInfo.filename;
				this.paths = context.paths || [];  // Search paths, when importing
				this.contents = {};             // map - filename to contents of all the files
				this.contentsIgnoredChars = {}; // map - filename to lines at the beginning of each file to ignore
				this.mime = context.mime;
				this.error = null;
				this.context = context;
				// Deprecated? Unused outside of here, could be useful.
				this.queue = [];        // Files which haven't been imported yet
				this.files = {};        // Holds the imported parse trees.
			};
			
			/**
			 * Add an import to be imported
			 * @param path - the raw path
			 * @param tryAppendExtension - whether to try appending a file extension (.less or .js if the path has no extension)
			 * @param currentFileInfo - the current file info (used for instance to work out relative paths)
			 * @param importOptions - import options
			 * @param callback - callback for when it is imported
			 */
			ImportManager.prototype.push = function (path, tryAppendExtension, currentFileInfo, importOptions, callback) {
				var importManager = this/*BT- ,
					pluginLoader = this.context.pluginManager.Loader*/;

				this.queue.push(path);

				var fileParsedFunc = function (e, root, fullPath) {
					importManager.queue.splice(importManager.queue.indexOf(path), 1); // Remove the path from the queue

					var importedEqualsRoot = fullPath === importManager.rootFilename;
					if (importOptions.optional && e) {
						callback(null, {rules:[]}, false, null);
					}
					else {
						if (!importManager.files[fullPath]) {
							importManager.files[fullPath] = { root: root, options: importOptions };
						} 
						if (e && !importManager.error) { importManager.error = e; }
						callback(e, root, importedEqualsRoot, fullPath);
					}
				};

				var newFileInfo = {
					relativeUrls: this.context.relativeUrls,
					entryPath: currentFileInfo.entryPath,
					rootpath: currentFileInfo.rootpath,
					rootFilename: currentFileInfo.rootFilename
				};

				var fileManager = environment.getFileManager(path, currentFileInfo.currentDirectory, this.context, environment);

				if (!fileManager) {
					fileParsedFunc({ message: "Could not find a file-manager for " + path });
					return;
				}

				var loadFileCallback = function(loadedFile) {
					var /*BT- plugin,
						*/resolvedFilename = loadedFile.filename,
						contents = loadedFile.contents.replace(/^\uFEFF/, '');

					// Pass on an updated rootpath if path of imported file is relative and file
					// is in a (sub|sup) directory
					//
					// Examples:
					// - If path of imported file is 'module/nav/nav.less' and rootpath is 'less/',
					//   then rootpath should become 'less/module/nav/'
					// - If path of imported file is '../mixins.less' and rootpath is 'less/',
					//   then rootpath should become 'less/../'
					newFileInfo.currentDirectory = fileManager.getPath(resolvedFilename);
					if (newFileInfo.relativeUrls) {
						newFileInfo.rootpath = fileManager.join(
							(importManager.context.rootpath || ""),
							fileManager.pathDiff(newFileInfo.currentDirectory, newFileInfo.entryPath));

						if (!fileManager.isPathAbsolute(newFileInfo.rootpath) && fileManager.alwaysMakePathsAbsolute()) {
							newFileInfo.rootpath = fileManager.join(newFileInfo.entryPath, newFileInfo.rootpath);
						}
					}
					newFileInfo.filename = resolvedFilename;

					var newEnv = new contexts.Parse(importManager.context);

					newEnv.processImports = false;
					importManager.contents[resolvedFilename] = contents;

					if (currentFileInfo.reference || importOptions.reference) {
						newFileInfo.reference = true;
					}

					/*BT-
					if (importOptions.isPlugin) {
						plugin = pluginLoader.evalPlugin(contents, newEnv, importManager, importOptions.pluginArgs, newFileInfo);
						if (plugin instanceof LessError) {
							fileParsedFunc(plugin, null, resolvedFilename);
						}
						else {
							fileParsedFunc(null, plugin, resolvedFilename);
						}
					} else */if (importOptions.inline) {
						fileParsedFunc(null, contents, resolvedFilename);
					} else {
						
						// import (multiple) parse trees apparently get altered and can't be cached.
						// TODO: investigate why this is
						if (importManager.files[resolvedFilename] 
							&& !importManager.files[resolvedFilename].options.multiple
							&& !importOptions.multiple) {

							fileParsedFunc(null, importManager.files[resolvedFilename].root, resolvedFilename);
						}
						else {
							new Parser(newEnv, importManager, newFileInfo).parse(contents, function (e, root) {
								fileParsedFunc(e, root, resolvedFilename);
							});
						}
					}
				};
				var /*BT- promise, */context = utils.clone(this.context);

				if (tryAppendExtension) {
					context.ext = /*BT- importOptions.isPlugin ? ".js" : */".less";
				}

				/*BT-
				if (importOptions.isPlugin) {
					promise = pluginLoader.loadPlugin(path, currentFileInfo.currentDirectory, context, environment, fileManager);
				}
				else {
					promise = */fileManager.loadFile(path, currentFileInfo.currentDirectory, context, environment, 
						function(err, loadedFile) {
							if (err) {
								fileParsedFunc(err);
							} else {
								loadFileCallback(loadedFile);
							}
						});
				/*BT-
				}
				if (promise) {
					promise.then(loadFileCallback, fileParsedFunc);
				}
				*/

			};
			return ImportManager;
		};

		return exports;
	};
	//#endregion

	//#region URL: /less-error
	modules['/less-error'] = function () {
		var utils = require('/utils');
		/**
		 * This is a centralized class of any error that could be thrown internally (mostly by the parser).
		 * Besides standard .message it keeps some additional data like a path to the file where the error
		 * occurred along with line and column numbers.
		 *
		 * @class
		 * @extends Error
		 * @type {module.LessError}
		 *
		 * @prop {string} type
		 * @prop {string} filename
		 * @prop {number} index
		 * @prop {number} line
		 * @prop {number} column
		 * @prop {number} callLine
		 * @prop {number} callExtract
		 * @prop {string[]} extract
		 *
		 * @param {Object} e              - An error object to wrap around or just a descriptive object
		 * @param {Object} fileContentMap - An object with file contents in 'contents' property (like importManager) @todo - move to fileManager?
		 * @param {string} [currentFilename]
		 */
		var LessError = function LessError(e, fileContentMap, currentFilename) {
			Error.call(this);

			var filename = e.filename || currentFilename;

			this.message = e.message;
			this.stack = e.stack;

			if (fileContentMap && filename) {
				var input = fileContentMap.contents[filename],
					loc = utils.getLocation(e.index, input),
					line = loc.line,
					col  = loc.column,
					callLine = e.call && utils.getLocation(e.call, input).line,
					lines = input ? input.split('\n') : '';

				this.type = e.type || 'Syntax';
				this.filename = filename;
				this.index = e.index;
				this.line = typeof line === 'number' ? line + 1 : null;
				this.column = col;

				if (!this.line && this.stack) {
					var found = this.stack.match(/(<anonymous>|Function):(\d+):(\d+)/);

					if (found) {
						if (found[2]) {
							this.line = parseInt(found[2]) - 2;
						}
						if (found[3]) {
							this.column = parseInt(found[3]);
						}
					}
				}

				this.callLine = callLine + 1;
				this.callExtract = lines[callLine];

				this.extract = [
					lines[this.line - 2],
					lines[this.line - 1],
					lines[this.line]
				];

			}

		};

		if (typeof Object.create === 'undefined') {
			var F = function () {};
			F.prototype = Error.prototype;
			LessError.prototype = new F();
		} else {
			LessError.prototype = Object.create(Error.prototype);
		}

		LessError.prototype.constructor = LessError;

		/**
		 * An overridden version of the default Object.prototype.toString
		 * which uses additional information to create a helpful message.
		 *
		 * @param {Object} options
		 * @returns {string}
		 */
		LessError.prototype.toString = function(options) {
			options = options || {};

			var message = '';
			var extract = this.extract || [];
			var error = [];
			var stylize = function (str) { return str; };
			if (options.stylize) {
				var type = typeof options.stylize;
				if (type !== 'function') {
					throw Error('options.stylize should be a function, got a ' + type + '!');
				}
				stylize = options.stylize;
			}

			if (this.line !== null) {
				if (typeof extract[0] === 'string') {
					error.push(stylize((this.line - 1) + ' ' + extract[0], 'grey'));
				}

				if (typeof extract[1] === 'string') {
					var errorTxt = this.line + ' ';
					if (extract[1]) {
						errorTxt += extract[1].slice(0, this.column) +
							stylize(stylize(stylize(extract[1].substr(this.column, 1), 'bold') +
								extract[1].slice(this.column + 1), 'red'), 'inverse');
					}
					error.push(errorTxt);
				}

				if (typeof extract[2] === 'string') {
					error.push(stylize((this.line + 1) + ' ' + extract[2], 'grey'));
				}
				error = error.join('\n') + stylize('', 'reset') + '\n';
			}

			message += stylize(this.type + 'Error: ' + this.message, 'red');
			if (this.filename) {
				message += stylize(' in ', 'red') + this.filename;
			}
			if (this.line) {
				message += stylize(' on line ' + this.line + ', column ' + (this.column + 1) + ':', 'grey');
			}

			message += '\n' + error;

			if (this.callLine) {
				message += stylize('from ', 'red') + (this.filename || '') + '/n';
				message += stylize(this.callLine, 'grey') + ' ' + this.callExtract + '/n';
			}

			return message;
		};

		return LessError;
	};
	//#endregion

	//#region URL: /parse
	modules['/parse'] = function () {
		var /*BT- PromiseConstructor,*/
			contexts = require("/contexts"),
			Parser = require('/parser/parser')/*BT- ,
			PluginManager = require('/plugin-manager')*/,
			LessError = require('/less-error'),
			utils = require('/utils');

		var exports = function(environment, ParseTree, ImportManager) {
			var parse = function (input, options, callback) {

				if (typeof options === 'function') {
					callback = options;
					options = utils.defaults(this.options, {});
				}
				else {
					options = utils.defaults(this.options, options || {});
				}

				/*BT-
				if (!callback) {
					if (!PromiseConstructor) {
						PromiseConstructor = typeof Promise === 'undefined' ? require('promise') : Promise;
					}
					var self = this;
					return new PromiseConstructor(function (resolve, reject) {
						parse.call(self, input, options, function(err, output) {
							if (err) {
								reject(err);
							} else {
								resolve(output);
							}
						});
					});
				} else {
				*/
					var context,
						rootFileInfo/*BT- ,
						pluginManager = new PluginManager(this, !options.reUsePluginManager)*/;

					/*BT-
					options.pluginManager = pluginManager;
					*/

					context = new contexts.Parse(options);

					if (options.rootFileInfo) {
						rootFileInfo = options.rootFileInfo;
					} else {
						var filename = options.filename || "input";
						var entryPath = filename.replace(/[^\/\\]*$/, "");
						rootFileInfo = {
							filename: filename,
							relativeUrls: context.relativeUrls,
							rootpath: context.rootpath || "",
							currentDirectory: entryPath,
							entryPath: entryPath,
							rootFilename: filename
						};
						// add in a missing trailing slash
						if (rootFileInfo.rootpath && rootFileInfo.rootpath.slice(-1) !== "/") {
							rootFileInfo.rootpath += "/";
						}
					}

					var imports = new ImportManager(this, context, rootFileInfo);
					this.importManager = imports;

					// TODO: allow the plugins to be just a list of paths or names
					// Do an async plugin queue like lessc

					/*BT-
					if (options.plugins) {
						options.plugins.forEach(function(plugin) {
							var evalResult, contents;
							if (plugin.fileContent) {
								contents = plugin.fileContent.replace(/^\uFEFF/, '');
								evalResult = pluginManager.Loader.evalPlugin(contents, context, imports, plugin.options, plugin.filename);
								if (evalResult instanceof LessError) {
									return callback(evalResult);
								}
							}
							else {
								pluginManager.addPlugin(plugin);
							}
						});
					}
					*/

					new Parser(context, imports, rootFileInfo)
						.parse(input, function (e, root) {
							if (e) { return callback(e); }
							callback(null, root, imports, options);
						}, options);
				/*BT-
				}
				*/
			};
			return parse;
		};

		return exports;
	};
	//#endregion

	//#region URL: /parse-tree
	modules['/parse-tree'] = function () {
		var LessError = require('/less-error'),
			transformTree = require('/transform-tree')/*BT- ,
			logger = require('/logger')*/;

		var exports = function(/*BT- SourceMapBuilder*/) {
			var ParseTree = function(root, imports) {
				this.root = root;
				this.imports = imports;
			};

			ParseTree.prototype.toCSS = function(options) {
				var evaldRoot, result = {}/*BT- , sourceMapBuilder*/;
				try {
					evaldRoot = transformTree(this.root, options);
				} catch (e) {
					throw new LessError(e, this.imports);
				}

				try {
					var compress = Boolean(options.compress);
					/*BT-
					if (compress) {
						logger.warn("The compress option has been deprecated. We recommend you use a dedicated css minifier, for instance see less-plugin-clean-css.");
					}
					*/

					var toCSSOptions = {
						compress: compress,
						dumpLineNumbers: options.dumpLineNumbers,
						strictUnits: Boolean(options.strictUnits),
						numPrecision: 8};

					/*BT-
					if (options.sourceMap) {
						sourceMapBuilder = new SourceMapBuilder(options.sourceMap);
						result.css = sourceMapBuilder.toCSS(evaldRoot, toCSSOptions, this.imports);
					} else {
					*/
						result.css = evaldRoot.toCSS(toCSSOptions);
					/*BT-
					}
					*/
				} catch (e) {
					throw new LessError(e, this.imports);
				}

				/*BT-
				if (options.pluginManager) {
					var postProcessors = options.pluginManager.getPostProcessors();
					for (var i = 0; i < postProcessors.length; i++) {
						result.css = postProcessors[i].process(result.css, { sourceMap: sourceMapBuilder, options: options, imports: this.imports });
					}
				}
				if (options.sourceMap) {
					result.map = sourceMapBuilder.getExternalSourceMap();
				}
				*/

				result.imports = [];
				for (var file in this.imports.files) {
					if (this.imports.files.hasOwnProperty(file) && file !== this.imports.rootFilename) {
						result.imports.push(file);
					}
				}
				return result;
			};
			return ParseTree;
		};

		return exports;
	};
	//#endregion

	//#region URL: /render
	modules['/render'] = function () {
		var /*BT-PromiseConstructor,
			*/utils = require('/utils');

		var exports = function(environment, ParseTree, ImportManager) {
			var render = function (input, options, callback) {
				if (typeof options === 'function') {
					callback = options;
					options = utils.defaults(this.options, {});
				}
				else {
					options = utils.defaults(this.options, options || {});
				}

				/*BT-
				if (!callback) {
					if (!PromiseConstructor) {
						PromiseConstructor = typeof Promise === 'undefined' ? require('promise') : Promise;
					}
					var self = this;
					return new PromiseConstructor(function (resolve, reject) {
						render.call(self, input, options, function(err, output) {
							if (err) {
								reject(err);
							} else {
								resolve(output);
							}
						});
					});
				} else {
				*/
					this.parse(input, options, function(err, root, imports, options) {
						if (err) { return callback(err); }

						var result;
						try {
							var parseTree = new ParseTree(root, imports);
							result = parseTree.toCSS(options);
						}
						catch (err) { return callback(err); }

						callback(null, result);
					});
				/*BT-
				}
				*/
			};

			return render;
		};

		return exports;
	};
	//#endregion

	//#region URL: /transform-tree
	modules['/transform-tree'] = function () {
		var contexts = require("/contexts"),
			visitor = require("/visitors"),
			tree = require("/tree");

		var exports = function(root, options) {
			options = options || {};
			var evaldRoot,
				variables = options.variables,
				evalEnv = new contexts.Eval(options);

			//
			// Allows setting variables with a hash, so:
			//
			//   `{ color: new tree.Color('#f01') }` will become:
			//
			//   new tree.Declaration('@color',
			//     new tree.Value([
			//       new tree.Expression([
			//         new tree.Color('#f01')
			//       ])
			//     ])
			//   )
			//
			if (typeof variables === 'object' && !Array.isArray(variables)) {
				variables = Object.keys(variables).map(function (k) {
					var value = variables[k];

					if (!(value instanceof tree.Value)) {
						if (!(value instanceof tree.Expression)) {
							value = new tree.Expression([value]);
						}
						value = new tree.Value([value]);
					}
					return new tree.Declaration('@' + k, value, false, null, 0);
				});
				evalEnv.frames = [new tree.Ruleset(null, variables)];
			}

			var visitors = [
					new visitor.JoinSelectorVisitor(),
					new visitor.MarkVisibleSelectorsVisitor(true),
					new visitor.ExtendVisitor(),
					new visitor.ToCSSVisitor({compress: Boolean(options.compress)})
				], v, visitorIterator;

			// first() / get() allows visitors to be added while visiting
			/*BT-
			if (options.pluginManager) {
				visitorIterator = options.pluginManager.visitor();
				visitorIterator.first();
				while ((v = visitorIterator.get())) {
					if (v.isPreEvalVisitor) {
						v.run(root);
					}
				}
			}
			*/

			evaldRoot = root.eval(evalEnv);

			for (var i = 0; i < visitors.length; i++) {
				visitors[i].run(evaldRoot);
			}

			/*BT-
			if (options.pluginManager) {
				visitorIterator.first();
				while ((v = visitorIterator.get())) {
					if (!v.isPreEvalVisitor) {
						v.run(evaldRoot);
					}
				}
			}
			*/

			return evaldRoot;
		};

		return exports;
	};
	//#endregion

	//#region URL: /utils
	modules['/utils'] = function () {
		/* jshint proto: true */
		var exports = {
			getLocation: function(index, inputStream) {
				var n = index + 1,
					line = null,
					column = -1;

				while (--n >= 0 && inputStream.charAt(n) !== '\n') {
					column++;
				}

				if (typeof index === 'number') {
					line = (inputStream.slice(0, index).match(/\n/g) || "").length;
				}

				return {
					line: line,
					column: column
				};
			},
			copyArray: function(arr) {
				var i, length = arr.length,
					copy = new Array(length);
				
				for (i = 0; i < length; i++) {
					copy[i] = arr[i];
				}
				return copy;
			},
			clone: function (obj) {
				var cloned = {};
				for (var prop in obj) {
					if (obj.hasOwnProperty(prop)) {
						cloned[prop] = obj[prop];
					}
				}
				return cloned;
			},
			defaults: function(obj1, obj2) {
				if (!obj2._defaults || obj2._defaults !== obj1) {
					for (var prop in obj1) {
						if (obj1.hasOwnProperty(prop)) {
							if (!obj2.hasOwnProperty(prop)) {
								obj2[prop] = obj1[prop];
							}
							else if (Array.isArray(obj1[prop])
								&& Array.isArray(obj2[prop])) {

								obj1[prop].forEach(function(p) {
									if (obj2[prop].indexOf(p) === -1) {
										obj2[prop].push(p);
									}
								});
							}
						}
					}
				}
				obj2._defaults = obj1;
				return obj2;
			},
			merge: function(obj1, obj2) {
				for (var prop in obj2) {
					if (obj2.hasOwnProperty(prop)) {
						obj1[prop] = obj2[prop];
					}
				}
				return obj1;
			},
			isAppRelativePath: function(path) { //BT+
				return path.length >= 2 && path.charAt(0) === '~' && (path.charAt(1) === '/' || path.charAt(1) === '\\'); //BT+
			} //BT+
		};

		return exports;
	};
	//#endregion

	return {
		AbstractFileManager: require('/environment/abstract-file-manager'),
		createFromEnvironment: require('/'),
		logger: null,
		utils: require('/utils')
	};
})(VirtualFileManager /*BT+*/);