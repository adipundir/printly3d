var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res, err) => function __init() {
  if (err) throw err[0];
  try {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  } catch (e) {
    throw err = [e], e;
  }
};
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/@jscad/modeling/src/utils/flatten.js
var require_flatten = __commonJS({
  "node_modules/@jscad/modeling/src/utils/flatten.js"(exports, module) {
    var flatten = (arr) => arr.flat(Infinity);
    module.exports = flatten;
  }
});

// node_modules/@jscad/modeling/src/geometries/geom2/clone.js
var require_clone = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/geom2/clone.js"(exports, module) {
    var clone = (geometry) => Object.assign({}, geometry);
    module.exports = clone;
  }
});

// node_modules/@jscad/modeling/src/maths/mat4/add.js
var require_add = __commonJS({
  "node_modules/@jscad/modeling/src/maths/mat4/add.js"(exports, module) {
    var add = (out, a, b) => {
      out[0] = a[0] + b[0];
      out[1] = a[1] + b[1];
      out[2] = a[2] + b[2];
      out[3] = a[3] + b[3];
      out[4] = a[4] + b[4];
      out[5] = a[5] + b[5];
      out[6] = a[6] + b[6];
      out[7] = a[7] + b[7];
      out[8] = a[8] + b[8];
      out[9] = a[9] + b[9];
      out[10] = a[10] + b[10];
      out[11] = a[11] + b[11];
      out[12] = a[12] + b[12];
      out[13] = a[13] + b[13];
      out[14] = a[14] + b[14];
      out[15] = a[15] + b[15];
      return out;
    };
    module.exports = add;
  }
});

// node_modules/@jscad/modeling/src/maths/mat4/create.js
var require_create = __commonJS({
  "node_modules/@jscad/modeling/src/maths/mat4/create.js"(exports, module) {
    var create = () => [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ];
    module.exports = create;
  }
});

// node_modules/@jscad/modeling/src/maths/mat4/clone.js
var require_clone2 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/mat4/clone.js"(exports, module) {
    var create = require_create();
    var clone = (matrix) => {
      const out = create();
      out[0] = matrix[0];
      out[1] = matrix[1];
      out[2] = matrix[2];
      out[3] = matrix[3];
      out[4] = matrix[4];
      out[5] = matrix[5];
      out[6] = matrix[6];
      out[7] = matrix[7];
      out[8] = matrix[8];
      out[9] = matrix[9];
      out[10] = matrix[10];
      out[11] = matrix[11];
      out[12] = matrix[12];
      out[13] = matrix[13];
      out[14] = matrix[14];
      out[15] = matrix[15];
      return out;
    };
    module.exports = clone;
  }
});

// node_modules/@jscad/modeling/src/maths/mat4/copy.js
var require_copy = __commonJS({
  "node_modules/@jscad/modeling/src/maths/mat4/copy.js"(exports, module) {
    var copy = (out, matrix) => {
      out[0] = matrix[0];
      out[1] = matrix[1];
      out[2] = matrix[2];
      out[3] = matrix[3];
      out[4] = matrix[4];
      out[5] = matrix[5];
      out[6] = matrix[6];
      out[7] = matrix[7];
      out[8] = matrix[8];
      out[9] = matrix[9];
      out[10] = matrix[10];
      out[11] = matrix[11];
      out[12] = matrix[12];
      out[13] = matrix[13];
      out[14] = matrix[14];
      out[15] = matrix[15];
      return out;
    };
    module.exports = copy;
  }
});

// node_modules/@jscad/modeling/src/maths/mat4/invert.js
var require_invert = __commonJS({
  "node_modules/@jscad/modeling/src/maths/mat4/invert.js"(exports, module) {
    var invert = (out, matrix) => {
      const a00 = matrix[0];
      const a01 = matrix[1];
      const a02 = matrix[2];
      const a03 = matrix[3];
      const a10 = matrix[4];
      const a11 = matrix[5];
      const a12 = matrix[6];
      const a13 = matrix[7];
      const a20 = matrix[8];
      const a21 = matrix[9];
      const a22 = matrix[10];
      const a23 = matrix[11];
      const a30 = matrix[12];
      const a31 = matrix[13];
      const a32 = matrix[14];
      const a33 = matrix[15];
      const b00 = a00 * a11 - a01 * a10;
      const b01 = a00 * a12 - a02 * a10;
      const b02 = a00 * a13 - a03 * a10;
      const b03 = a01 * a12 - a02 * a11;
      const b04 = a01 * a13 - a03 * a11;
      const b05 = a02 * a13 - a03 * a12;
      const b06 = a20 * a31 - a21 * a30;
      const b07 = a20 * a32 - a22 * a30;
      const b08 = a20 * a33 - a23 * a30;
      const b09 = a21 * a32 - a22 * a31;
      const b10 = a21 * a33 - a23 * a31;
      const b11 = a22 * a33 - a23 * a32;
      let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
      if (!det) {
        return null;
      }
      det = 1 / det;
      out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
      out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
      out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
      out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
      out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
      out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
      out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
      out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
      out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
      out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
      out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
      out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
      out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
      out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
      out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
      out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
      return out;
    };
    module.exports = invert;
  }
});

// node_modules/@jscad/modeling/src/maths/mat4/equals.js
var require_equals = __commonJS({
  "node_modules/@jscad/modeling/src/maths/mat4/equals.js"(exports, module) {
    var equals = (a, b) => a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
    module.exports = equals;
  }
});

// node_modules/@jscad/modeling/src/maths/constants.js
var require_constants = __commonJS({
  "node_modules/@jscad/modeling/src/maths/constants.js"(exports, module) {
    var spatialResolution = 1e5;
    var EPS = 1e-5;
    var NEPS = 1e-13;
    var TAU = Math.PI * 2;
    module.exports = {
      EPS,
      NEPS,
      TAU,
      spatialResolution
    };
  }
});

// node_modules/@jscad/modeling/src/maths/utils/trigonometry.js
var require_trigonometry = __commonJS({
  "node_modules/@jscad/modeling/src/maths/utils/trigonometry.js"(exports, module) {
    var { NEPS } = require_constants();
    var rezero = (n) => Math.abs(n) < NEPS ? 0 : n;
    var sin = (radians) => rezero(Math.sin(radians));
    var cos = (radians) => rezero(Math.cos(radians));
    module.exports = { sin, cos };
  }
});

// node_modules/@jscad/modeling/src/maths/mat4/identity.js
var require_identity = __commonJS({
  "node_modules/@jscad/modeling/src/maths/mat4/identity.js"(exports, module) {
    var identity = (out) => {
      out[0] = 1;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = 1;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = 1;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out;
    };
    module.exports = identity;
  }
});

// node_modules/@jscad/modeling/src/maths/mat4/fromRotation.js
var require_fromRotation = __commonJS({
  "node_modules/@jscad/modeling/src/maths/mat4/fromRotation.js"(exports, module) {
    var { EPS } = require_constants();
    var { sin, cos } = require_trigonometry();
    var identity = require_identity();
    var fromRotation = (out, rad, axis) => {
      let [x, y, z] = axis;
      const lengthSquared = x * x + y * y + z * z;
      if (Math.abs(lengthSquared) < EPS) {
        return identity(out);
      }
      const len = 1 / Math.sqrt(lengthSquared);
      x *= len;
      y *= len;
      z *= len;
      const s = sin(rad);
      const c = cos(rad);
      const t = 1 - c;
      out[0] = x * x * t + c;
      out[1] = y * x * t + z * s;
      out[2] = z * x * t - y * s;
      out[3] = 0;
      out[4] = x * y * t - z * s;
      out[5] = y * y * t + c;
      out[6] = z * y * t + x * s;
      out[7] = 0;
      out[8] = x * z * t + y * s;
      out[9] = y * z * t - x * s;
      out[10] = z * z * t + c;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out;
    };
    module.exports = fromRotation;
  }
});

// node_modules/@jscad/modeling/src/maths/mat4/fromScaling.js
var require_fromScaling = __commonJS({
  "node_modules/@jscad/modeling/src/maths/mat4/fromScaling.js"(exports, module) {
    var fromScaling = (out, vector) => {
      out[0] = vector[0];
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = vector[1];
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = vector[2];
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out;
    };
    module.exports = fromScaling;
  }
});

// node_modules/@jscad/modeling/src/maths/mat4/fromTaitBryanRotation.js
var require_fromTaitBryanRotation = __commonJS({
  "node_modules/@jscad/modeling/src/maths/mat4/fromTaitBryanRotation.js"(exports, module) {
    var { sin, cos } = require_trigonometry();
    var fromTaitBryanRotation = (out, yaw, pitch, roll) => {
      const sy = sin(yaw);
      const cy = cos(yaw);
      const sp = sin(pitch);
      const cp = cos(pitch);
      const sr = sin(roll);
      const cr = cos(roll);
      out[0] = cp * cy;
      out[1] = cp * sy;
      out[2] = -sp;
      out[3] = 0;
      out[4] = sr * sp * cy - cr * sy;
      out[5] = cr * cy + sr * sp * sy;
      out[6] = sr * cp;
      out[7] = 0;
      out[8] = sr * sy + cr * sp * cy;
      out[9] = cr * sp * sy - sr * cy;
      out[10] = cr * cp;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out;
    };
    module.exports = fromTaitBryanRotation;
  }
});

// node_modules/@jscad/modeling/src/maths/mat4/fromTranslation.js
var require_fromTranslation = __commonJS({
  "node_modules/@jscad/modeling/src/maths/mat4/fromTranslation.js"(exports, module) {
    var fromTranslation = (out, vector) => {
      out[0] = 1;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = 1;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = 1;
      out[11] = 0;
      out[12] = vector[0];
      out[13] = vector[1];
      out[14] = vector[2];
      out[15] = 1;
      return out;
    };
    module.exports = fromTranslation;
  }
});

// node_modules/@jscad/modeling/src/maths/mat4/fromValues.js
var require_fromValues = __commonJS({
  "node_modules/@jscad/modeling/src/maths/mat4/fromValues.js"(exports, module) {
    var create = require_create();
    var fromValues = (m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) => {
      const out = create();
      out[0] = m00;
      out[1] = m01;
      out[2] = m02;
      out[3] = m03;
      out[4] = m10;
      out[5] = m11;
      out[6] = m12;
      out[7] = m13;
      out[8] = m20;
      out[9] = m21;
      out[10] = m22;
      out[11] = m23;
      out[12] = m30;
      out[13] = m31;
      out[14] = m32;
      out[15] = m33;
      return out;
    };
    module.exports = fromValues;
  }
});

// node_modules/@jscad/modeling/src/maths/vec3/abs.js
var require_abs = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec3/abs.js"(exports, module) {
    var abs = (out, vector) => {
      out[0] = Math.abs(vector[0]);
      out[1] = Math.abs(vector[1]);
      out[2] = Math.abs(vector[2]);
      return out;
    };
    module.exports = abs;
  }
});

// node_modules/@jscad/modeling/src/maths/vec3/add.js
var require_add2 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec3/add.js"(exports, module) {
    var add = (out, a, b) => {
      out[0] = a[0] + b[0];
      out[1] = a[1] + b[1];
      out[2] = a[2] + b[2];
      return out;
    };
    module.exports = add;
  }
});

// node_modules/@jscad/modeling/src/maths/vec3/dot.js
var require_dot = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec3/dot.js"(exports, module) {
    var dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    module.exports = dot;
  }
});

// node_modules/@jscad/modeling/src/maths/vec3/angle.js
var require_angle = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec3/angle.js"(exports, module) {
    var dot = require_dot();
    var angle = (a, b) => {
      const ax = a[0];
      const ay = a[1];
      const az = a[2];
      const bx = b[0];
      const by = b[1];
      const bz = b[2];
      const mag1 = Math.sqrt(ax * ax + ay * ay + az * az);
      const mag2 = Math.sqrt(bx * bx + by * by + bz * bz);
      const mag = mag1 * mag2;
      const cosine = mag && dot(a, b) / mag;
      return Math.acos(Math.min(Math.max(cosine, -1), 1));
    };
    module.exports = angle;
  }
});

// node_modules/@jscad/modeling/src/maths/vec3/create.js
var require_create2 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec3/create.js"(exports, module) {
    var create = () => [0, 0, 0];
    module.exports = create;
  }
});

// node_modules/@jscad/modeling/src/maths/vec3/clone.js
var require_clone3 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec3/clone.js"(exports, module) {
    var create = require_create2();
    var clone = (vector) => {
      const out = create();
      out[0] = vector[0];
      out[1] = vector[1];
      out[2] = vector[2];
      return out;
    };
    module.exports = clone;
  }
});

// node_modules/@jscad/modeling/src/maths/vec3/copy.js
var require_copy2 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec3/copy.js"(exports, module) {
    var copy = (out, vector) => {
      out[0] = vector[0];
      out[1] = vector[1];
      out[2] = vector[2];
      return out;
    };
    module.exports = copy;
  }
});

// node_modules/@jscad/modeling/src/maths/vec3/cross.js
var require_cross = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec3/cross.js"(exports, module) {
    var cross = (out, a, b) => {
      const ax = a[0];
      const ay = a[1];
      const az = a[2];
      const bx = b[0];
      const by = b[1];
      const bz = b[2];
      out[0] = ay * bz - az * by;
      out[1] = az * bx - ax * bz;
      out[2] = ax * by - ay * bx;
      return out;
    };
    module.exports = cross;
  }
});

// node_modules/@jscad/modeling/src/maths/vec3/distance.js
var require_distance = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec3/distance.js"(exports, module) {
    var distance = (a, b) => {
      const x = b[0] - a[0];
      const y = b[1] - a[1];
      const z = b[2] - a[2];
      return Math.sqrt(x * x + y * y + z * z);
    };
    module.exports = distance;
  }
});

// node_modules/@jscad/modeling/src/maths/vec3/divide.js
var require_divide = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec3/divide.js"(exports, module) {
    var divide = (out, a, b) => {
      out[0] = a[0] / b[0];
      out[1] = a[1] / b[1];
      out[2] = a[2] / b[2];
      return out;
    };
    module.exports = divide;
  }
});

// node_modules/@jscad/modeling/src/maths/vec3/equals.js
var require_equals2 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec3/equals.js"(exports, module) {
    var equals = (a, b) => a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
    module.exports = equals;
  }
});

// node_modules/@jscad/modeling/src/maths/vec3/fromScalar.js
var require_fromScalar = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec3/fromScalar.js"(exports, module) {
    var fromScalar = (out, scalar) => {
      out[0] = scalar;
      out[1] = scalar;
      out[2] = scalar;
      return out;
    };
    module.exports = fromScalar;
  }
});

// node_modules/@jscad/modeling/src/maths/vec3/fromValues.js
var require_fromValues2 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec3/fromValues.js"(exports, module) {
    var create = require_create2();
    var fromValues = (x, y, z) => {
      const out = create();
      out[0] = x;
      out[1] = y;
      out[2] = z;
      return out;
    };
    module.exports = fromValues;
  }
});

// node_modules/@jscad/modeling/src/maths/vec3/fromVec2.js
var require_fromVec2 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec3/fromVec2.js"(exports, module) {
    var fromVector2 = (out, vector, z = 0) => {
      out[0] = vector[0];
      out[1] = vector[1];
      out[2] = z;
      return out;
    };
    module.exports = fromVector2;
  }
});

// node_modules/@jscad/modeling/src/maths/vec3/length.js
var require_length = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec3/length.js"(exports, module) {
    var length = (vector) => {
      const x = vector[0];
      const y = vector[1];
      const z = vector[2];
      return Math.sqrt(x * x + y * y + z * z);
    };
    module.exports = length;
  }
});

// node_modules/@jscad/modeling/src/maths/vec3/lerp.js
var require_lerp = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec3/lerp.js"(exports, module) {
    var lerp = (out, a, b, t) => {
      out[0] = a[0] + t * (b[0] - a[0]);
      out[1] = a[1] + t * (b[1] - a[1]);
      out[2] = a[2] + t * (b[2] - a[2]);
      return out;
    };
    module.exports = lerp;
  }
});

// node_modules/@jscad/modeling/src/maths/vec3/max.js
var require_max = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec3/max.js"(exports, module) {
    var max = (out, a, b) => {
      out[0] = Math.max(a[0], b[0]);
      out[1] = Math.max(a[1], b[1]);
      out[2] = Math.max(a[2], b[2]);
      return out;
    };
    module.exports = max;
  }
});

// node_modules/@jscad/modeling/src/maths/vec3/min.js
var require_min = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec3/min.js"(exports, module) {
    var min = (out, a, b) => {
      out[0] = Math.min(a[0], b[0]);
      out[1] = Math.min(a[1], b[1]);
      out[2] = Math.min(a[2], b[2]);
      return out;
    };
    module.exports = min;
  }
});

// node_modules/@jscad/modeling/src/maths/vec3/multiply.js
var require_multiply = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec3/multiply.js"(exports, module) {
    var multiply = (out, a, b) => {
      out[0] = a[0] * b[0];
      out[1] = a[1] * b[1];
      out[2] = a[2] * b[2];
      return out;
    };
    module.exports = multiply;
  }
});

// node_modules/@jscad/modeling/src/maths/vec3/negate.js
var require_negate = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec3/negate.js"(exports, module) {
    var negate = (out, vector) => {
      out[0] = -vector[0];
      out[1] = -vector[1];
      out[2] = -vector[2];
      return out;
    };
    module.exports = negate;
  }
});

// node_modules/@jscad/modeling/src/maths/vec3/normalize.js
var require_normalize = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec3/normalize.js"(exports, module) {
    var normalize = (out, vector) => {
      const x = vector[0];
      const y = vector[1];
      const z = vector[2];
      let len = x * x + y * y + z * z;
      if (len > 0) {
        len = 1 / Math.sqrt(len);
      }
      out[0] = x * len;
      out[1] = y * len;
      out[2] = z * len;
      return out;
    };
    module.exports = normalize;
  }
});

// node_modules/@jscad/modeling/src/maths/vec3/orthogonal.js
var require_orthogonal = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec3/orthogonal.js"(exports, module) {
    var abs = require_abs();
    var create = require_create2();
    var cross = require_cross();
    var orthogonal = (out, vector) => {
      const bV = abs(create(), vector);
      const b0 = 0 + (bV[0] < bV[1] && bV[0] < bV[2]);
      const b1 = 0 + (bV[1] <= bV[0] && bV[1] < bV[2]);
      const b2 = 0 + (bV[2] <= bV[0] && bV[2] <= bV[1]);
      return cross(out, vector, [b0, b1, b2]);
    };
    module.exports = orthogonal;
  }
});

// node_modules/@jscad/modeling/src/maths/vec3/rotateX.js
var require_rotateX = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec3/rotateX.js"(exports, module) {
    var rotateX = (out, vector, origin, radians) => {
      const p = [];
      const r = [];
      p[0] = vector[0] - origin[0];
      p[1] = vector[1] - origin[1];
      p[2] = vector[2] - origin[2];
      r[0] = p[0];
      r[1] = p[1] * Math.cos(radians) - p[2] * Math.sin(radians);
      r[2] = p[1] * Math.sin(radians) + p[2] * Math.cos(radians);
      out[0] = r[0] + origin[0];
      out[1] = r[1] + origin[1];
      out[2] = r[2] + origin[2];
      return out;
    };
    module.exports = rotateX;
  }
});

// node_modules/@jscad/modeling/src/maths/vec3/rotateY.js
var require_rotateY = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec3/rotateY.js"(exports, module) {
    var rotateY = (out, vector, origin, radians) => {
      const p = [];
      const r = [];
      p[0] = vector[0] - origin[0];
      p[1] = vector[1] - origin[1];
      p[2] = vector[2] - origin[2];
      r[0] = p[2] * Math.sin(radians) + p[0] * Math.cos(radians);
      r[1] = p[1];
      r[2] = p[2] * Math.cos(radians) - p[0] * Math.sin(radians);
      out[0] = r[0] + origin[0];
      out[1] = r[1] + origin[1];
      out[2] = r[2] + origin[2];
      return out;
    };
    module.exports = rotateY;
  }
});

// node_modules/@jscad/modeling/src/maths/vec3/rotateZ.js
var require_rotateZ = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec3/rotateZ.js"(exports, module) {
    var rotateZ = (out, vector, origin, radians) => {
      const p = [];
      const r = [];
      p[0] = vector[0] - origin[0];
      p[1] = vector[1] - origin[1];
      r[0] = p[0] * Math.cos(radians) - p[1] * Math.sin(radians);
      r[1] = p[0] * Math.sin(radians) + p[1] * Math.cos(radians);
      out[0] = r[0] + origin[0];
      out[1] = r[1] + origin[1];
      out[2] = vector[2];
      return out;
    };
    module.exports = rotateZ;
  }
});

// node_modules/@jscad/modeling/src/maths/vec3/scale.js
var require_scale = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec3/scale.js"(exports, module) {
    var scale = (out, vector, amount) => {
      out[0] = vector[0] * amount;
      out[1] = vector[1] * amount;
      out[2] = vector[2] * amount;
      return out;
    };
    module.exports = scale;
  }
});

// node_modules/@jscad/modeling/src/maths/vec3/snap.js
var require_snap = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec3/snap.js"(exports, module) {
    var snap = (out, vector, epsilon) => {
      out[0] = Math.round(vector[0] / epsilon) * epsilon + 0;
      out[1] = Math.round(vector[1] / epsilon) * epsilon + 0;
      out[2] = Math.round(vector[2] / epsilon) * epsilon + 0;
      return out;
    };
    module.exports = snap;
  }
});

// node_modules/@jscad/modeling/src/maths/vec3/squaredDistance.js
var require_squaredDistance = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec3/squaredDistance.js"(exports, module) {
    var squaredDistance = (a, b) => {
      const x = b[0] - a[0];
      const y = b[1] - a[1];
      const z = b[2] - a[2];
      return x * x + y * y + z * z;
    };
    module.exports = squaredDistance;
  }
});

// node_modules/@jscad/modeling/src/maths/vec3/squaredLength.js
var require_squaredLength = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec3/squaredLength.js"(exports, module) {
    var squaredLength = (vector) => {
      const x = vector[0];
      const y = vector[1];
      const z = vector[2];
      return x * x + y * y + z * z;
    };
    module.exports = squaredLength;
  }
});

// node_modules/@jscad/modeling/src/maths/vec3/subtract.js
var require_subtract = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec3/subtract.js"(exports, module) {
    var subtract = (out, a, b) => {
      out[0] = a[0] - b[0];
      out[1] = a[1] - b[1];
      out[2] = a[2] - b[2];
      return out;
    };
    module.exports = subtract;
  }
});

// node_modules/@jscad/modeling/src/maths/vec3/toString.js
var require_toString = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec3/toString.js"(exports, module) {
    var toString = (vec) => `[${vec[0].toFixed(7)}, ${vec[1].toFixed(7)}, ${vec[2].toFixed(7)}]`;
    module.exports = toString;
  }
});

// node_modules/@jscad/modeling/src/maths/vec3/transform.js
var require_transform = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec3/transform.js"(exports, module) {
    var transform = (out, vector, matrix) => {
      const x = vector[0];
      const y = vector[1];
      const z = vector[2];
      let w = matrix[3] * x + matrix[7] * y + matrix[11] * z + matrix[15];
      w = w || 1;
      out[0] = (matrix[0] * x + matrix[4] * y + matrix[8] * z + matrix[12]) / w;
      out[1] = (matrix[1] * x + matrix[5] * y + matrix[9] * z + matrix[13]) / w;
      out[2] = (matrix[2] * x + matrix[6] * y + matrix[10] * z + matrix[14]) / w;
      return out;
    };
    module.exports = transform;
  }
});

// node_modules/@jscad/modeling/src/maths/vec3/index.js
var require_vec3 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec3/index.js"(exports, module) {
    module.exports = {
      abs: require_abs(),
      add: require_add2(),
      angle: require_angle(),
      clone: require_clone3(),
      copy: require_copy2(),
      create: require_create2(),
      cross: require_cross(),
      distance: require_distance(),
      divide: require_divide(),
      dot: require_dot(),
      equals: require_equals2(),
      fromScalar: require_fromScalar(),
      fromValues: require_fromValues2(),
      fromVec2: require_fromVec2(),
      length: require_length(),
      lerp: require_lerp(),
      max: require_max(),
      min: require_min(),
      multiply: require_multiply(),
      negate: require_negate(),
      normalize: require_normalize(),
      orthogonal: require_orthogonal(),
      rotateX: require_rotateX(),
      rotateY: require_rotateY(),
      rotateZ: require_rotateZ(),
      scale: require_scale(),
      snap: require_snap(),
      squaredDistance: require_squaredDistance(),
      squaredLength: require_squaredLength(),
      subtract: require_subtract(),
      toString: require_toString(),
      transform: require_transform()
    };
  }
});

// node_modules/@jscad/modeling/src/maths/mat4/fromVectorRotation.js
var require_fromVectorRotation = __commonJS({
  "node_modules/@jscad/modeling/src/maths/mat4/fromVectorRotation.js"(exports, module) {
    var vec3 = require_vec3();
    var fromRotation = require_fromRotation();
    var fromVectorRotation = (out, source, target) => {
      const sourceNormal = vec3.normalize(vec3.create(), source);
      const targetNormal = vec3.normalize(vec3.create(), target);
      const axis = vec3.cross(vec3.create(), targetNormal, sourceNormal);
      const cosA = vec3.dot(targetNormal, sourceNormal);
      if (cosA === -1) return fromRotation(out, Math.PI, vec3.orthogonal(axis, sourceNormal));
      const k = 1 / (1 + cosA);
      out[0] = axis[0] * axis[0] * k + cosA;
      out[1] = axis[1] * axis[0] * k - axis[2];
      out[2] = axis[2] * axis[0] * k + axis[1];
      out[3] = 0;
      out[4] = axis[0] * axis[1] * k + axis[2];
      out[5] = axis[1] * axis[1] * k + cosA;
      out[6] = axis[2] * axis[1] * k - axis[0];
      out[7] = 0;
      out[8] = axis[0] * axis[2] * k - axis[1];
      out[9] = axis[1] * axis[2] * k + axis[0];
      out[10] = axis[2] * axis[2] * k + cosA;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out;
    };
    module.exports = fromVectorRotation;
  }
});

// node_modules/@jscad/modeling/src/maths/mat4/fromXRotation.js
var require_fromXRotation = __commonJS({
  "node_modules/@jscad/modeling/src/maths/mat4/fromXRotation.js"(exports, module) {
    var { sin, cos } = require_trigonometry();
    var fromXRotation = (out, radians) => {
      const s = sin(radians);
      const c = cos(radians);
      out[0] = 1;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = c;
      out[6] = s;
      out[7] = 0;
      out[8] = 0;
      out[9] = -s;
      out[10] = c;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out;
    };
    module.exports = fromXRotation;
  }
});

// node_modules/@jscad/modeling/src/maths/mat4/fromYRotation.js
var require_fromYRotation = __commonJS({
  "node_modules/@jscad/modeling/src/maths/mat4/fromYRotation.js"(exports, module) {
    var { sin, cos } = require_trigonometry();
    var fromYRotation = (out, radians) => {
      const s = sin(radians);
      const c = cos(radians);
      out[0] = c;
      out[1] = 0;
      out[2] = -s;
      out[3] = 0;
      out[4] = 0;
      out[5] = 1;
      out[6] = 0;
      out[7] = 0;
      out[8] = s;
      out[9] = 0;
      out[10] = c;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out;
    };
    module.exports = fromYRotation;
  }
});

// node_modules/@jscad/modeling/src/maths/mat4/fromZRotation.js
var require_fromZRotation = __commonJS({
  "node_modules/@jscad/modeling/src/maths/mat4/fromZRotation.js"(exports, module) {
    var { sin, cos } = require_trigonometry();
    var fromZRotation = (out, radians) => {
      const s = sin(radians);
      const c = cos(radians);
      out[0] = c;
      out[1] = s;
      out[2] = 0;
      out[3] = 0;
      out[4] = -s;
      out[5] = c;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = 1;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out;
    };
    module.exports = fromZRotation;
  }
});

// node_modules/@jscad/modeling/src/maths/mat4/isIdentity.js
var require_isIdentity = __commonJS({
  "node_modules/@jscad/modeling/src/maths/mat4/isIdentity.js"(exports, module) {
    var isIdentity = (matrix) => matrix[0] === 1 && matrix[1] === 0 && matrix[2] === 0 && matrix[3] === 0 && matrix[4] === 0 && matrix[5] === 1 && matrix[6] === 0 && matrix[7] === 0 && matrix[8] === 0 && matrix[9] === 0 && matrix[10] === 1 && matrix[11] === 0 && matrix[12] === 0 && matrix[13] === 0 && matrix[14] === 0 && matrix[15] === 1;
    module.exports = isIdentity;
  }
});

// node_modules/@jscad/modeling/src/maths/mat4/isOnlyTransformScale.js
var require_isOnlyTransformScale = __commonJS({
  "node_modules/@jscad/modeling/src/maths/mat4/isOnlyTransformScale.js"(exports, module) {
    var isOnlyTransformScale = (matrix) => (
      // TODO check if it is worth the effort to add recognition of 90 deg rotations
      isZero(matrix[1]) && isZero(matrix[2]) && isZero(matrix[3]) && isZero(matrix[4]) && isZero(matrix[6]) && isZero(matrix[7]) && isZero(matrix[8]) && isZero(matrix[9]) && isZero(matrix[11]) && matrix[15] === 1
    );
    var isZero = (num) => Math.abs(num) < Number.EPSILON;
    module.exports = isOnlyTransformScale;
  }
});

// node_modules/@jscad/modeling/src/maths/mat4/isMirroring.js
var require_isMirroring = __commonJS({
  "node_modules/@jscad/modeling/src/maths/mat4/isMirroring.js"(exports, module) {
    var isMirroring = (matrix) => {
      const x = matrix[4] * matrix[9] - matrix[8] * matrix[5];
      const y = matrix[8] * matrix[1] - matrix[0] * matrix[9];
      const z = matrix[0] * matrix[5] - matrix[4] * matrix[1];
      const d = x * matrix[2] + y * matrix[6] + z * matrix[10];
      return d < 0;
    };
    module.exports = isMirroring;
  }
});

// node_modules/@jscad/modeling/src/maths/mat4/mirrorByPlane.js
var require_mirrorByPlane = __commonJS({
  "node_modules/@jscad/modeling/src/maths/mat4/mirrorByPlane.js"(exports, module) {
    var mirrorByPlane = (out, plane) => {
      const [nx, ny, nz, w] = plane;
      out[0] = 1 - 2 * nx * nx;
      out[1] = -2 * ny * nx;
      out[2] = -2 * nz * nx;
      out[3] = 0;
      out[4] = -2 * nx * ny;
      out[5] = 1 - 2 * ny * ny;
      out[6] = -2 * nz * ny;
      out[7] = 0;
      out[8] = -2 * nx * nz;
      out[9] = -2 * ny * nz;
      out[10] = 1 - 2 * nz * nz;
      out[11] = 0;
      out[12] = 2 * nx * w;
      out[13] = 2 * ny * w;
      out[14] = 2 * nz * w;
      out[15] = 1;
      return out;
    };
    module.exports = mirrorByPlane;
  }
});

// node_modules/@jscad/modeling/src/maths/mat4/multiply.js
var require_multiply2 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/mat4/multiply.js"(exports, module) {
    var multiply = (out, a, b) => {
      const a00 = a[0];
      const a01 = a[1];
      const a02 = a[2];
      const a03 = a[3];
      const a10 = a[4];
      const a11 = a[5];
      const a12 = a[6];
      const a13 = a[7];
      const a20 = a[8];
      const a21 = a[9];
      const a22 = a[10];
      const a23 = a[11];
      const a30 = a[12];
      const a31 = a[13];
      const a32 = a[14];
      const a33 = a[15];
      let b0 = b[0];
      let b1 = b[1];
      let b2 = b[2];
      let b3 = b[3];
      out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
      out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
      out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
      out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
      b0 = b[4];
      b1 = b[5];
      b2 = b[6];
      b3 = b[7];
      out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
      out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
      out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
      out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
      b0 = b[8];
      b1 = b[9];
      b2 = b[10];
      b3 = b[11];
      out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
      out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
      out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
      out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
      b0 = b[12];
      b1 = b[13];
      b2 = b[14];
      b3 = b[15];
      out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
      out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
      out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
      out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
      return out;
    };
    module.exports = multiply;
  }
});

// node_modules/@jscad/modeling/src/maths/mat4/rotate.js
var require_rotate = __commonJS({
  "node_modules/@jscad/modeling/src/maths/mat4/rotate.js"(exports, module) {
    var { EPS } = require_constants();
    var { sin, cos } = require_trigonometry();
    var copy = require_copy();
    var rotate = (out, matrix, radians, axis) => {
      let [x, y, z] = axis;
      const lengthSquared = x * x + y * y + z * z;
      if (Math.abs(lengthSquared) < EPS) {
        return copy(out, matrix);
      }
      const len = 1 / Math.sqrt(lengthSquared);
      x *= len;
      y *= len;
      z *= len;
      const s = sin(radians);
      const c = cos(radians);
      const t = 1 - c;
      const a00 = matrix[0];
      const a01 = matrix[1];
      const a02 = matrix[2];
      const a03 = matrix[3];
      const a10 = matrix[4];
      const a11 = matrix[5];
      const a12 = matrix[6];
      const a13 = matrix[7];
      const a20 = matrix[8];
      const a21 = matrix[9];
      const a22 = matrix[10];
      const a23 = matrix[11];
      const b00 = x * x * t + c;
      const b01 = y * x * t + z * s;
      const b02 = z * x * t - y * s;
      const b10 = x * y * t - z * s;
      const b11 = y * y * t + c;
      const b12 = z * y * t + x * s;
      const b20 = x * z * t + y * s;
      const b21 = y * z * t - x * s;
      const b22 = z * z * t + c;
      out[0] = a00 * b00 + a10 * b01 + a20 * b02;
      out[1] = a01 * b00 + a11 * b01 + a21 * b02;
      out[2] = a02 * b00 + a12 * b01 + a22 * b02;
      out[3] = a03 * b00 + a13 * b01 + a23 * b02;
      out[4] = a00 * b10 + a10 * b11 + a20 * b12;
      out[5] = a01 * b10 + a11 * b11 + a21 * b12;
      out[6] = a02 * b10 + a12 * b11 + a22 * b12;
      out[7] = a03 * b10 + a13 * b11 + a23 * b12;
      out[8] = a00 * b20 + a10 * b21 + a20 * b22;
      out[9] = a01 * b20 + a11 * b21 + a21 * b22;
      out[10] = a02 * b20 + a12 * b21 + a22 * b22;
      out[11] = a03 * b20 + a13 * b21 + a23 * b22;
      if (matrix !== out) {
        out[12] = matrix[12];
        out[13] = matrix[13];
        out[14] = matrix[14];
        out[15] = matrix[15];
      }
      return out;
    };
    module.exports = rotate;
  }
});

// node_modules/@jscad/modeling/src/maths/mat4/rotateX.js
var require_rotateX2 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/mat4/rotateX.js"(exports, module) {
    var { sin, cos } = require_trigonometry();
    var rotateX = (out, matrix, radians) => {
      const s = sin(radians);
      const c = cos(radians);
      const a10 = matrix[4];
      const a11 = matrix[5];
      const a12 = matrix[6];
      const a13 = matrix[7];
      const a20 = matrix[8];
      const a21 = matrix[9];
      const a22 = matrix[10];
      const a23 = matrix[11];
      if (matrix !== out) {
        out[0] = matrix[0];
        out[1] = matrix[1];
        out[2] = matrix[2];
        out[3] = matrix[3];
        out[12] = matrix[12];
        out[13] = matrix[13];
        out[14] = matrix[14];
        out[15] = matrix[15];
      }
      out[4] = a10 * c + a20 * s;
      out[5] = a11 * c + a21 * s;
      out[6] = a12 * c + a22 * s;
      out[7] = a13 * c + a23 * s;
      out[8] = a20 * c - a10 * s;
      out[9] = a21 * c - a11 * s;
      out[10] = a22 * c - a12 * s;
      out[11] = a23 * c - a13 * s;
      return out;
    };
    module.exports = rotateX;
  }
});

// node_modules/@jscad/modeling/src/maths/mat4/rotateY.js
var require_rotateY2 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/mat4/rotateY.js"(exports, module) {
    var { sin, cos } = require_trigonometry();
    var rotateY = (out, matrix, radians) => {
      const s = sin(radians);
      const c = cos(radians);
      const a00 = matrix[0];
      const a01 = matrix[1];
      const a02 = matrix[2];
      const a03 = matrix[3];
      const a20 = matrix[8];
      const a21 = matrix[9];
      const a22 = matrix[10];
      const a23 = matrix[11];
      if (matrix !== out) {
        out[4] = matrix[4];
        out[5] = matrix[5];
        out[6] = matrix[6];
        out[7] = matrix[7];
        out[12] = matrix[12];
        out[13] = matrix[13];
        out[14] = matrix[14];
        out[15] = matrix[15];
      }
      out[0] = a00 * c - a20 * s;
      out[1] = a01 * c - a21 * s;
      out[2] = a02 * c - a22 * s;
      out[3] = a03 * c - a23 * s;
      out[8] = a00 * s + a20 * c;
      out[9] = a01 * s + a21 * c;
      out[10] = a02 * s + a22 * c;
      out[11] = a03 * s + a23 * c;
      return out;
    };
    module.exports = rotateY;
  }
});

// node_modules/@jscad/modeling/src/maths/mat4/rotateZ.js
var require_rotateZ2 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/mat4/rotateZ.js"(exports, module) {
    var { sin, cos } = require_trigonometry();
    var rotateZ = (out, matrix, radians) => {
      const s = sin(radians);
      const c = cos(radians);
      const a00 = matrix[0];
      const a01 = matrix[1];
      const a02 = matrix[2];
      const a03 = matrix[3];
      const a10 = matrix[4];
      const a11 = matrix[5];
      const a12 = matrix[6];
      const a13 = matrix[7];
      if (matrix !== out) {
        out[8] = matrix[8];
        out[9] = matrix[9];
        out[10] = matrix[10];
        out[11] = matrix[11];
        out[12] = matrix[12];
        out[13] = matrix[13];
        out[14] = matrix[14];
        out[15] = matrix[15];
      }
      out[0] = a00 * c + a10 * s;
      out[1] = a01 * c + a11 * s;
      out[2] = a02 * c + a12 * s;
      out[3] = a03 * c + a13 * s;
      out[4] = a10 * c - a00 * s;
      out[5] = a11 * c - a01 * s;
      out[6] = a12 * c - a02 * s;
      out[7] = a13 * c - a03 * s;
      return out;
    };
    module.exports = rotateZ;
  }
});

// node_modules/@jscad/modeling/src/maths/mat4/scale.js
var require_scale2 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/mat4/scale.js"(exports, module) {
    var scale = (out, matrix, dimensions) => {
      const x = dimensions[0];
      const y = dimensions[1];
      const z = dimensions[2];
      out[0] = matrix[0] * x;
      out[1] = matrix[1] * x;
      out[2] = matrix[2] * x;
      out[3] = matrix[3] * x;
      out[4] = matrix[4] * y;
      out[5] = matrix[5] * y;
      out[6] = matrix[6] * y;
      out[7] = matrix[7] * y;
      out[8] = matrix[8] * z;
      out[9] = matrix[9] * z;
      out[10] = matrix[10] * z;
      out[11] = matrix[11] * z;
      out[12] = matrix[12];
      out[13] = matrix[13];
      out[14] = matrix[14];
      out[15] = matrix[15];
      return out;
    };
    module.exports = scale;
  }
});

// node_modules/@jscad/modeling/src/maths/mat4/subtract.js
var require_subtract2 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/mat4/subtract.js"(exports, module) {
    var subtract = (out, a, b) => {
      out[0] = a[0] - b[0];
      out[1] = a[1] - b[1];
      out[2] = a[2] - b[2];
      out[3] = a[3] - b[3];
      out[4] = a[4] - b[4];
      out[5] = a[5] - b[5];
      out[6] = a[6] - b[6];
      out[7] = a[7] - b[7];
      out[8] = a[8] - b[8];
      out[9] = a[9] - b[9];
      out[10] = a[10] - b[10];
      out[11] = a[11] - b[11];
      out[12] = a[12] - b[12];
      out[13] = a[13] - b[13];
      out[14] = a[14] - b[14];
      out[15] = a[15] - b[15];
      return out;
    };
    module.exports = subtract;
  }
});

// node_modules/@jscad/modeling/src/maths/mat4/toString.js
var require_toString2 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/mat4/toString.js"(exports, module) {
    var toString = (mat) => mat.map((n) => n.toFixed(7)).toString();
    module.exports = toString;
  }
});

// node_modules/@jscad/modeling/src/maths/mat4/translate.js
var require_translate = __commonJS({
  "node_modules/@jscad/modeling/src/maths/mat4/translate.js"(exports, module) {
    var translate = (out, matrix, offsets) => {
      const x = offsets[0];
      const y = offsets[1];
      const z = offsets[2];
      let a00;
      let a01;
      let a02;
      let a03;
      let a10;
      let a11;
      let a12;
      let a13;
      let a20;
      let a21;
      let a22;
      let a23;
      if (matrix === out) {
        out[12] = matrix[0] * x + matrix[4] * y + matrix[8] * z + matrix[12];
        out[13] = matrix[1] * x + matrix[5] * y + matrix[9] * z + matrix[13];
        out[14] = matrix[2] * x + matrix[6] * y + matrix[10] * z + matrix[14];
        out[15] = matrix[3] * x + matrix[7] * y + matrix[11] * z + matrix[15];
      } else {
        a00 = matrix[0];
        a01 = matrix[1];
        a02 = matrix[2];
        a03 = matrix[3];
        a10 = matrix[4];
        a11 = matrix[5];
        a12 = matrix[6];
        a13 = matrix[7];
        a20 = matrix[8];
        a21 = matrix[9];
        a22 = matrix[10];
        a23 = matrix[11];
        out[0] = a00;
        out[1] = a01;
        out[2] = a02;
        out[3] = a03;
        out[4] = a10;
        out[5] = a11;
        out[6] = a12;
        out[7] = a13;
        out[8] = a20;
        out[9] = a21;
        out[10] = a22;
        out[11] = a23;
        out[12] = a00 * x + a10 * y + a20 * z + matrix[12];
        out[13] = a01 * x + a11 * y + a21 * z + matrix[13];
        out[14] = a02 * x + a12 * y + a22 * z + matrix[14];
        out[15] = a03 * x + a13 * y + a23 * z + matrix[15];
      }
      return out;
    };
    module.exports = translate;
  }
});

// node_modules/@jscad/modeling/src/maths/mat4/index.js
var require_mat4 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/mat4/index.js"(exports, module) {
    module.exports = {
      add: require_add(),
      clone: require_clone2(),
      copy: require_copy(),
      create: require_create(),
      invert: require_invert(),
      equals: require_equals(),
      fromRotation: require_fromRotation(),
      fromScaling: require_fromScaling(),
      fromTaitBryanRotation: require_fromTaitBryanRotation(),
      fromTranslation: require_fromTranslation(),
      fromValues: require_fromValues(),
      fromVectorRotation: require_fromVectorRotation(),
      fromXRotation: require_fromXRotation(),
      fromYRotation: require_fromYRotation(),
      fromZRotation: require_fromZRotation(),
      identity: require_identity(),
      isIdentity: require_isIdentity(),
      isOnlyTransformScale: require_isOnlyTransformScale(),
      isMirroring: require_isMirroring(),
      mirrorByPlane: require_mirrorByPlane(),
      multiply: require_multiply2(),
      rotate: require_rotate(),
      rotateX: require_rotateX2(),
      rotateY: require_rotateY2(),
      rotateZ: require_rotateZ2(),
      scale: require_scale2(),
      subtract: require_subtract2(),
      toString: require_toString2(),
      translate: require_translate()
    };
  }
});

// node_modules/@jscad/modeling/src/geometries/geom2/create.js
var require_create3 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/geom2/create.js"(exports, module) {
    var mat4 = require_mat4();
    var create = (sides) => {
      if (sides === void 0) {
        sides = [];
      }
      return {
        sides,
        transforms: mat4.create()
      };
    };
    module.exports = create;
  }
});

// node_modules/@jscad/modeling/src/maths/vec2/abs.js
var require_abs2 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec2/abs.js"(exports, module) {
    var abs = (out, vector) => {
      out[0] = Math.abs(vector[0]);
      out[1] = Math.abs(vector[1]);
      return out;
    };
    module.exports = abs;
  }
});

// node_modules/@jscad/modeling/src/maths/vec2/add.js
var require_add3 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec2/add.js"(exports, module) {
    var add = (out, a, b) => {
      out[0] = a[0] + b[0];
      out[1] = a[1] + b[1];
      return out;
    };
    module.exports = add;
  }
});

// node_modules/@jscad/modeling/src/maths/vec2/angleRadians.js
var require_angleRadians = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec2/angleRadians.js"(exports, module) {
    var angleRadians = (vector) => Math.atan2(vector[1], vector[0]);
    module.exports = angleRadians;
  }
});

// node_modules/@jscad/modeling/src/maths/vec2/angle.js
var require_angle2 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec2/angle.js"(exports, module) {
    module.exports = require_angleRadians();
  }
});

// node_modules/@jscad/modeling/src/maths/vec2/angleDegrees.js
var require_angleDegrees = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec2/angleDegrees.js"(exports, module) {
    var angleRadians = require_angleRadians();
    var angleDegrees = (vector) => angleRadians(vector) * 57.29577951308232;
    module.exports = angleDegrees;
  }
});

// node_modules/@jscad/modeling/src/maths/vec2/create.js
var require_create4 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec2/create.js"(exports, module) {
    var create = () => [0, 0];
    module.exports = create;
  }
});

// node_modules/@jscad/modeling/src/maths/vec2/clone.js
var require_clone4 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec2/clone.js"(exports, module) {
    var create = require_create4();
    var clone = (vector) => {
      const out = create();
      out[0] = vector[0];
      out[1] = vector[1];
      return out;
    };
    module.exports = clone;
  }
});

// node_modules/@jscad/modeling/src/maths/vec2/copy.js
var require_copy3 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec2/copy.js"(exports, module) {
    var copy = (out, vector) => {
      out[0] = vector[0];
      out[1] = vector[1];
      return out;
    };
    module.exports = copy;
  }
});

// node_modules/@jscad/modeling/src/maths/vec2/cross.js
var require_cross2 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec2/cross.js"(exports, module) {
    var cross = (out, a, b) => {
      out[0] = 0;
      out[1] = 0;
      out[2] = a[0] * b[1] - a[1] * b[0];
      return out;
    };
    module.exports = cross;
  }
});

// node_modules/@jscad/modeling/src/maths/vec2/distance.js
var require_distance2 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec2/distance.js"(exports, module) {
    var distance = (a, b) => {
      const x = b[0] - a[0];
      const y = b[1] - a[1];
      return Math.sqrt(x * x + y * y);
    };
    module.exports = distance;
  }
});

// node_modules/@jscad/modeling/src/maths/vec2/divide.js
var require_divide2 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec2/divide.js"(exports, module) {
    var divide = (out, a, b) => {
      out[0] = a[0] / b[0];
      out[1] = a[1] / b[1];
      return out;
    };
    module.exports = divide;
  }
});

// node_modules/@jscad/modeling/src/maths/vec2/dot.js
var require_dot2 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec2/dot.js"(exports, module) {
    var dot = (a, b) => a[0] * b[0] + a[1] * b[1];
    module.exports = dot;
  }
});

// node_modules/@jscad/modeling/src/maths/vec2/equals.js
var require_equals3 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec2/equals.js"(exports, module) {
    var equals = (a, b) => a[0] === b[0] && a[1] === b[1];
    module.exports = equals;
  }
});

// node_modules/@jscad/modeling/src/maths/vec2/fromAngleRadians.js
var require_fromAngleRadians = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec2/fromAngleRadians.js"(exports, module) {
    var { sin, cos } = require_trigonometry();
    var fromAngleRadians = (out, radians) => {
      out[0] = cos(radians);
      out[1] = sin(radians);
      return out;
    };
    module.exports = fromAngleRadians;
  }
});

// node_modules/@jscad/modeling/src/maths/vec2/fromAngleDegrees.js
var require_fromAngleDegrees = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec2/fromAngleDegrees.js"(exports, module) {
    var fromAngleRadians = require_fromAngleRadians();
    var fromAngleDegrees = (out, degrees) => fromAngleRadians(out, degrees * 0.017453292519943295);
    module.exports = fromAngleDegrees;
  }
});

// node_modules/@jscad/modeling/src/maths/vec2/fromScalar.js
var require_fromScalar2 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec2/fromScalar.js"(exports, module) {
    var fromScalar = (out, scalar) => {
      out[0] = scalar;
      out[1] = scalar;
      return out;
    };
    module.exports = fromScalar;
  }
});

// node_modules/@jscad/modeling/src/maths/vec2/fromValues.js
var require_fromValues3 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec2/fromValues.js"(exports, module) {
    var create = require_create4();
    var fromValues = (x, y) => {
      const out = create();
      out[0] = x;
      out[1] = y;
      return out;
    };
    module.exports = fromValues;
  }
});

// node_modules/@jscad/modeling/src/maths/vec2/length.js
var require_length2 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec2/length.js"(exports, module) {
    var length = (vector) => Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1]);
    module.exports = length;
  }
});

// node_modules/@jscad/modeling/src/maths/vec2/lerp.js
var require_lerp2 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec2/lerp.js"(exports, module) {
    var lerp = (out, a, b, t) => {
      const ax = a[0];
      const ay = a[1];
      out[0] = ax + t * (b[0] - ax);
      out[1] = ay + t * (b[1] - ay);
      return out;
    };
    module.exports = lerp;
  }
});

// node_modules/@jscad/modeling/src/maths/vec2/max.js
var require_max2 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec2/max.js"(exports, module) {
    var max = (out, a, b) => {
      out[0] = Math.max(a[0], b[0]);
      out[1] = Math.max(a[1], b[1]);
      return out;
    };
    module.exports = max;
  }
});

// node_modules/@jscad/modeling/src/maths/vec2/min.js
var require_min2 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec2/min.js"(exports, module) {
    var min = (out, a, b) => {
      out[0] = Math.min(a[0], b[0]);
      out[1] = Math.min(a[1], b[1]);
      return out;
    };
    module.exports = min;
  }
});

// node_modules/@jscad/modeling/src/maths/vec2/multiply.js
var require_multiply3 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec2/multiply.js"(exports, module) {
    var multiply = (out, a, b) => {
      out[0] = a[0] * b[0];
      out[1] = a[1] * b[1];
      return out;
    };
    module.exports = multiply;
  }
});

// node_modules/@jscad/modeling/src/maths/vec2/negate.js
var require_negate2 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec2/negate.js"(exports, module) {
    var negate = (out, vector) => {
      out[0] = -vector[0];
      out[1] = -vector[1];
      return out;
    };
    module.exports = negate;
  }
});

// node_modules/@jscad/modeling/src/maths/vec2/rotate.js
var require_rotate2 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec2/rotate.js"(exports, module) {
    var rotate = (out, vector, origin, radians) => {
      const x = vector[0] - origin[0];
      const y = vector[1] - origin[1];
      const c = Math.cos(radians);
      const s = Math.sin(radians);
      out[0] = x * c - y * s + origin[0];
      out[1] = x * s + y * c + origin[1];
      return out;
    };
    module.exports = rotate;
  }
});

// node_modules/@jscad/modeling/src/maths/vec2/normal.js
var require_normal = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec2/normal.js"(exports, module) {
    var { TAU } = require_constants();
    var create = require_create4();
    var rotate = require_rotate2();
    var normal = (out, vector) => rotate(out, vector, create(), TAU / 4);
    module.exports = normal;
  }
});

// node_modules/@jscad/modeling/src/maths/vec2/normalize.js
var require_normalize2 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec2/normalize.js"(exports, module) {
    var normalize = (out, vector) => {
      const x = vector[0];
      const y = vector[1];
      let len = x * x + y * y;
      if (len > 0) {
        len = 1 / Math.sqrt(len);
      }
      out[0] = x * len;
      out[1] = y * len;
      return out;
    };
    module.exports = normalize;
  }
});

// node_modules/@jscad/modeling/src/maths/vec2/scale.js
var require_scale3 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec2/scale.js"(exports, module) {
    var scale = (out, vector, amount) => {
      out[0] = vector[0] * amount;
      out[1] = vector[1] * amount;
      return out;
    };
    module.exports = scale;
  }
});

// node_modules/@jscad/modeling/src/maths/vec2/snap.js
var require_snap2 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec2/snap.js"(exports, module) {
    var snap = (out, vector, epsilon) => {
      out[0] = Math.round(vector[0] / epsilon) * epsilon + 0;
      out[1] = Math.round(vector[1] / epsilon) * epsilon + 0;
      return out;
    };
    module.exports = snap;
  }
});

// node_modules/@jscad/modeling/src/maths/vec2/squaredDistance.js
var require_squaredDistance2 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec2/squaredDistance.js"(exports, module) {
    var squaredDistance = (a, b) => {
      const x = b[0] - a[0];
      const y = b[1] - a[1];
      return x * x + y * y;
    };
    module.exports = squaredDistance;
  }
});

// node_modules/@jscad/modeling/src/maths/vec2/squaredLength.js
var require_squaredLength2 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec2/squaredLength.js"(exports, module) {
    var squaredLength = (vector) => {
      const x = vector[0];
      const y = vector[1];
      return x * x + y * y;
    };
    module.exports = squaredLength;
  }
});

// node_modules/@jscad/modeling/src/maths/vec2/subtract.js
var require_subtract3 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec2/subtract.js"(exports, module) {
    var subtract = (out, a, b) => {
      out[0] = a[0] - b[0];
      out[1] = a[1] - b[1];
      return out;
    };
    module.exports = subtract;
  }
});

// node_modules/@jscad/modeling/src/maths/vec2/toString.js
var require_toString3 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec2/toString.js"(exports, module) {
    var toString = (vector) => `[${vector[0].toFixed(7)}, ${vector[1].toFixed(7)}]`;
    module.exports = toString;
  }
});

// node_modules/@jscad/modeling/src/maths/vec2/transform.js
var require_transform2 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec2/transform.js"(exports, module) {
    var transform = (out, vector, matrix) => {
      const x = vector[0];
      const y = vector[1];
      out[0] = matrix[0] * x + matrix[4] * y + matrix[12];
      out[1] = matrix[1] * x + matrix[5] * y + matrix[13];
      return out;
    };
    module.exports = transform;
  }
});

// node_modules/@jscad/modeling/src/maths/vec2/index.js
var require_vec2 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec2/index.js"(exports, module) {
    module.exports = {
      abs: require_abs2(),
      add: require_add3(),
      angle: require_angle2(),
      angleDegrees: require_angleDegrees(),
      angleRadians: require_angleRadians(),
      clone: require_clone4(),
      copy: require_copy3(),
      create: require_create4(),
      cross: require_cross2(),
      distance: require_distance2(),
      divide: require_divide2(),
      dot: require_dot2(),
      equals: require_equals3(),
      fromAngleDegrees: require_fromAngleDegrees(),
      fromAngleRadians: require_fromAngleRadians(),
      fromScalar: require_fromScalar2(),
      fromValues: require_fromValues3(),
      length: require_length2(),
      lerp: require_lerp2(),
      max: require_max2(),
      min: require_min2(),
      multiply: require_multiply3(),
      negate: require_negate2(),
      normal: require_normal(),
      normalize: require_normalize2(),
      rotate: require_rotate2(),
      scale: require_scale3(),
      snap: require_snap2(),
      squaredDistance: require_squaredDistance2(),
      squaredLength: require_squaredLength2(),
      subtract: require_subtract3(),
      toString: require_toString3(),
      transform: require_transform2()
    };
  }
});

// node_modules/@jscad/modeling/src/geometries/geom2/fromPoints.js
var require_fromPoints = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/geom2/fromPoints.js"(exports, module) {
    var vec2 = require_vec2();
    var create = require_create3();
    var fromPoints = (points) => {
      if (!Array.isArray(points)) {
        throw new Error("the given points must be an array");
      }
      let length = points.length;
      if (length < 3) {
        throw new Error("the given points must define a closed geometry with three or more points");
      }
      if (vec2.equals(points[0], points[length - 1])) --length;
      const sides = [];
      let prevpoint = points[length - 1];
      for (let i = 0; i < length; i++) {
        const point = points[i];
        sides.push([vec2.clone(prevpoint), vec2.clone(point)]);
        prevpoint = point;
      }
      return create(sides);
    };
    module.exports = fromPoints;
  }
});

// node_modules/@jscad/modeling/src/geometries/geom2/fromCompactBinary.js
var require_fromCompactBinary = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/geom2/fromCompactBinary.js"(exports, module) {
    var mat4 = require_mat4();
    var vec2 = require_vec2();
    var create = require_create3();
    var fromCompactBinary = (data) => {
      if (data[0] !== 0) throw new Error("invalid compact binary data");
      const created = create();
      created.transforms = mat4.clone(data.slice(1, 17));
      for (let i = 21; i < data.length; i += 4) {
        const point0 = vec2.fromValues(data[i + 0], data[i + 1]);
        const point1 = vec2.fromValues(data[i + 2], data[i + 3]);
        created.sides.push([point0, point1]);
      }
      if (data[17] >= 0) {
        created.color = [data[17], data[18], data[19], data[20]];
      }
      return created;
    };
    module.exports = fromCompactBinary;
  }
});

// node_modules/@jscad/modeling/src/geometries/geom2/isA.js
var require_isA = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/geom2/isA.js"(exports, module) {
    var isA = (object) => {
      if (object && typeof object === "object") {
        if ("sides" in object && "transforms" in object) {
          if (Array.isArray(object.sides) && "length" in object.transforms) {
            return true;
          }
        }
      }
      return false;
    };
    module.exports = isA;
  }
});

// node_modules/@jscad/modeling/src/geometries/geom2/applyTransforms.js
var require_applyTransforms = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/geom2/applyTransforms.js"(exports, module) {
    var mat4 = require_mat4();
    var vec2 = require_vec2();
    var applyTransforms = (geometry) => {
      if (mat4.isIdentity(geometry.transforms)) return geometry;
      geometry.sides = geometry.sides.map((side) => {
        const p0 = vec2.transform(vec2.create(), side[0], geometry.transforms);
        const p1 = vec2.transform(vec2.create(), side[1], geometry.transforms);
        return [p0, p1];
      });
      geometry.transforms = mat4.create();
      return geometry;
    };
    module.exports = applyTransforms;
  }
});

// node_modules/@jscad/modeling/src/geometries/geom2/toSides.js
var require_toSides = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/geom2/toSides.js"(exports, module) {
    var applyTransforms = require_applyTransforms();
    var toSides = (geometry) => applyTransforms(geometry).sides;
    module.exports = toSides;
  }
});

// node_modules/@jscad/modeling/src/geometries/geom2/reverse.js
var require_reverse = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/geom2/reverse.js"(exports, module) {
    var create = require_create3();
    var toSides = require_toSides();
    var reverse = (geometry) => {
      const oldsides = toSides(geometry);
      const newsides = oldsides.map((side) => [side[1], side[0]]);
      newsides.reverse();
      return create(newsides);
    };
    module.exports = reverse;
  }
});

// node_modules/@jscad/modeling/src/geometries/geom2/toOutlines.js
var require_toOutlines = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/geom2/toOutlines.js"(exports, module) {
    var vec2 = require_vec2();
    var toSides = require_toSides();
    var toSharedVertices = (sides) => {
      const unique = /* @__PURE__ */ new Map();
      const getUniqueVertex = (vertex) => {
        const key = vertex.toString();
        if (unique.has(key)) {
          return unique.get(key);
        } else {
          unique.set(key, vertex);
          return vertex;
        }
      };
      return sides.map((side) => side.map(getUniqueVertex));
    };
    var toVertexMap = (sides) => {
      const vertexMap = /* @__PURE__ */ new Map();
      const edges = toSharedVertices(sides);
      edges.forEach((edge) => {
        if (vertexMap.has(edge[0])) {
          vertexMap.get(edge[0]).push(edge);
        } else {
          vertexMap.set(edge[0], [edge]);
        }
      });
      return vertexMap;
    };
    var toOutlines = (geometry) => {
      const vertexMap = toVertexMap(toSides(geometry));
      const outlines = [];
      while (true) {
        let startSide;
        for (const [vertex, edges] of vertexMap) {
          startSide = edges.shift();
          if (!startSide) {
            vertexMap.delete(vertex);
            continue;
          }
          break;
        }
        if (startSide === void 0) break;
        const connectedVertexPoints = [];
        const startVertex = startSide[0];
        while (true) {
          connectedVertexPoints.push(startSide[0]);
          const nextVertex = startSide[1];
          if (nextVertex === startVertex) break;
          const nextPossibleSides = vertexMap.get(nextVertex);
          if (!nextPossibleSides) {
            throw new Error(`geometry is not closed at vertex ${nextVertex}`);
          }
          const nextSide = popNextSide(startSide, nextPossibleSides);
          if (nextPossibleSides.length === 0) {
            vertexMap.delete(nextVertex);
          }
          startSide = nextSide;
        }
        if (connectedVertexPoints.length > 0) {
          connectedVertexPoints.push(connectedVertexPoints.shift());
        }
        outlines.push(connectedVertexPoints);
      }
      vertexMap.clear();
      return outlines;
    };
    var popNextSide = (startSide, nextSides) => {
      if (nextSides.length === 1) {
        return nextSides.pop();
      }
      const v0 = vec2.create();
      const startAngle = vec2.angleDegrees(vec2.subtract(v0, startSide[1], startSide[0]));
      let bestAngle;
      let bestIndex;
      nextSides.forEach((nextSide2, index) => {
        const nextAngle = vec2.angleDegrees(vec2.subtract(v0, nextSide2[1], nextSide2[0]));
        let angle = nextAngle - startAngle;
        if (angle < -180) angle += 360;
        if (angle >= 180) angle -= 360;
        if (bestIndex === void 0 || angle > bestAngle) {
          bestIndex = index;
          bestAngle = angle;
        }
      });
      const nextSide = nextSides[bestIndex];
      nextSides.splice(bestIndex, 1);
      return nextSide;
    };
    module.exports = toOutlines;
  }
});

// node_modules/@jscad/modeling/src/geometries/geom2/toPoints.js
var require_toPoints = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/geom2/toPoints.js"(exports, module) {
    var toSides = require_toSides();
    var toPoints = (geometry) => {
      const sides = toSides(geometry);
      const points = sides.map((side) => side[0]);
      if (points.length > 0) {
        points.push(points.shift());
      }
      return points;
    };
    module.exports = toPoints;
  }
});

// node_modules/@jscad/modeling/src/geometries/geom2/toString.js
var require_toString4 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/geom2/toString.js"(exports, module) {
    var vec2 = require_vec2();
    var toSides = require_toSides();
    var toString = (geometry) => {
      const sides = toSides(geometry);
      let result = "geom2 (" + sides.length + " sides):\n[\n";
      sides.forEach((side) => {
        result += "  [" + vec2.toString(side[0]) + ", " + vec2.toString(side[1]) + "]\n";
      });
      result += "]\n";
      return result;
    };
    module.exports = toString;
  }
});

// node_modules/@jscad/modeling/src/geometries/geom2/toCompactBinary.js
var require_toCompactBinary = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/geom2/toCompactBinary.js"(exports, module) {
    var toCompactBinary = (geometry) => {
      const sides = geometry.sides;
      const transforms3 = geometry.transforms;
      let color = [-1, -1, -1, -1];
      if (geometry.color) color = geometry.color;
      const compacted = new Float32Array(1 + 16 + 4 + sides.length * 4);
      compacted[0] = 0;
      compacted[1] = transforms3[0];
      compacted[2] = transforms3[1];
      compacted[3] = transforms3[2];
      compacted[4] = transforms3[3];
      compacted[5] = transforms3[4];
      compacted[6] = transforms3[5];
      compacted[7] = transforms3[6];
      compacted[8] = transforms3[7];
      compacted[9] = transforms3[8];
      compacted[10] = transforms3[9];
      compacted[11] = transforms3[10];
      compacted[12] = transforms3[11];
      compacted[13] = transforms3[12];
      compacted[14] = transforms3[13];
      compacted[15] = transforms3[14];
      compacted[16] = transforms3[15];
      compacted[17] = color[0];
      compacted[18] = color[1];
      compacted[19] = color[2];
      compacted[20] = color[3];
      for (let i = 0; i < sides.length; i++) {
        const ci = i * 4 + 21;
        const point0 = sides[i][0];
        const point1 = sides[i][1];
        compacted[ci + 0] = point0[0];
        compacted[ci + 1] = point0[1];
        compacted[ci + 2] = point1[0];
        compacted[ci + 3] = point1[1];
      }
      return compacted;
    };
    module.exports = toCompactBinary;
  }
});

// node_modules/@jscad/modeling/src/geometries/geom2/transform.js
var require_transform3 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/geom2/transform.js"(exports, module) {
    var mat4 = require_mat4();
    var reverse = require_reverse();
    var transform = (matrix, geometry) => {
      const transforms3 = mat4.multiply(mat4.create(), matrix, geometry.transforms);
      const transformed = Object.assign({}, geometry, { transforms: transforms3 });
      if (matrix[0] * matrix[5] - matrix[4] * matrix[1] < 0) {
        return reverse(transformed);
      }
      return transformed;
    };
    module.exports = transform;
  }
});

// node_modules/@jscad/modeling/src/geometries/geom2/validate.js
var require_validate = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/geom2/validate.js"(exports, module) {
    var vec2 = require_vec2();
    var isA = require_isA();
    var toOutlines = require_toOutlines();
    var validate = (object) => {
      if (!isA(object)) {
        throw new Error("invalid geom2 structure");
      }
      toOutlines(object);
      object.sides.forEach((side) => {
        if (vec2.equals(side[0], side[1])) {
          throw new Error(`geom2 self-edge ${side[0]}`);
        }
      });
      if (!object.transforms.every(Number.isFinite)) {
        throw new Error(`geom2 invalid transforms ${object.transforms}`);
      }
    };
    module.exports = validate;
  }
});

// node_modules/@jscad/modeling/src/geometries/geom2/index.js
var require_geom2 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/geom2/index.js"(exports, module) {
    module.exports = {
      clone: require_clone(),
      create: require_create3(),
      fromPoints: require_fromPoints(),
      fromCompactBinary: require_fromCompactBinary(),
      isA: require_isA(),
      reverse: require_reverse(),
      toOutlines: require_toOutlines(),
      toPoints: require_toPoints(),
      toSides: require_toSides(),
      toString: require_toString4(),
      toCompactBinary: require_toCompactBinary(),
      transform: require_transform3(),
      validate: require_validate()
    };
  }
});

// node_modules/@jscad/modeling/src/geometries/geom3/clone.js
var require_clone5 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/geom3/clone.js"(exports, module) {
    var clone = (geometry) => Object.assign({}, geometry);
    module.exports = clone;
  }
});

// node_modules/@jscad/modeling/src/geometries/geom3/create.js
var require_create5 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/geom3/create.js"(exports, module) {
    var mat4 = require_mat4();
    var create = (polygons) => {
      if (polygons === void 0) {
        polygons = [];
      }
      return {
        polygons,
        transforms: mat4.create()
      };
    };
    module.exports = create;
  }
});

// node_modules/@jscad/modeling/src/operations/hulls/quickhull/point-line-distance.js
var require_point_line_distance = __commonJS({
  "node_modules/@jscad/modeling/src/operations/hulls/quickhull/point-line-distance.js"(exports, module) {
    var cross = require_cross();
    var subtract = require_subtract();
    var squaredLength = require_squaredLength();
    var distanceSquared = (p, a, b) => {
      const ab = [];
      const ap = [];
      const cr = [];
      subtract(ab, b, a);
      subtract(ap, p, a);
      const area = squaredLength(cross(cr, ap, ab));
      const s = squaredLength(ab);
      if (s === 0) {
        throw Error("a and b are the same point");
      }
      return area / s;
    };
    var pointLineDistance = (point, a, b) => Math.sqrt(distanceSquared(point, a, b));
    module.exports = pointLineDistance;
  }
});

// node_modules/@jscad/modeling/src/operations/hulls/quickhull/get-plane-normal.js
var require_get_plane_normal = __commonJS({
  "node_modules/@jscad/modeling/src/operations/hulls/quickhull/get-plane-normal.js"(exports, module) {
    var cross = require_cross();
    var normalize = require_normalize();
    var subtract = require_subtract();
    var planeNormal = (out, point1, point2, point3) => {
      const tmp = [0, 0, 0];
      subtract(out, point1, point2);
      subtract(tmp, point2, point3);
      cross(out, out, tmp);
      return normalize(out, out);
    };
    module.exports = planeNormal;
  }
});

// node_modules/@jscad/modeling/src/operations/hulls/quickhull/VertexList.js
var require_VertexList = __commonJS({
  "node_modules/@jscad/modeling/src/operations/hulls/quickhull/VertexList.js"(exports, module) {
    var VertexList = class {
      constructor() {
        this.head = null;
        this.tail = null;
      }
      clear() {
        this.head = this.tail = null;
      }
      /**
       * Inserts a `node` before `target`, it's assumed that
       * `target` belongs to this doubly linked list
       *
       * @param {*} target
       * @param {*} node
       */
      insertBefore(target, node) {
        node.prev = target.prev;
        node.next = target;
        if (!node.prev) {
          this.head = node;
        } else {
          node.prev.next = node;
        }
        target.prev = node;
      }
      /**
       * Inserts a `node` after `target`, it's assumed that
       * `target` belongs to this doubly linked list
       *
       * @param {Vertex} target
       * @param {Vertex} node
       */
      insertAfter(target, node) {
        node.prev = target;
        node.next = target.next;
        if (!node.next) {
          this.tail = node;
        } else {
          node.next.prev = node;
        }
        target.next = node;
      }
      /**
       * Appends a `node` to the end of this doubly linked list
       * Note: `node.next` will be unlinked from `node`
       * Note: if `node` is part of another linked list call `addAll` instead
       *
       * @param {*} node
       */
      add(node) {
        if (!this.head) {
          this.head = node;
        } else {
          this.tail.next = node;
        }
        node.prev = this.tail;
        node.next = null;
        this.tail = node;
      }
      /**
       * Appends a chain of nodes where `node` is the head,
       * the difference with `add` is that it correctly sets the position
       * of the node list `tail` property
       *
       * @param {*} node
       */
      addAll(node) {
        if (!this.head) {
          this.head = node;
        } else {
          this.tail.next = node;
        }
        node.prev = this.tail;
        while (node.next) {
          node = node.next;
        }
        this.tail = node;
      }
      /**
       * Deletes a `node` from this linked list, it's assumed that `node` is a
       * member of this linked list
       *
       * @param {*} node
       */
      remove(node) {
        if (!node.prev) {
          this.head = node.next;
        } else {
          node.prev.next = node.next;
        }
        if (!node.next) {
          this.tail = node.prev;
        } else {
          node.next.prev = node.prev;
        }
      }
      /**
       * Removes a chain of nodes whose head is `a` and whose tail is `b`,
       * it's assumed that `a` and `b` belong to this list and also that `a`
       * comes before `b` in the linked list
       *
       * @param {*} a
       * @param {*} b
       */
      removeChain(a, b) {
        if (!a.prev) {
          this.head = b.next;
        } else {
          a.prev.next = b.next;
        }
        if (!b.next) {
          this.tail = a.prev;
        } else {
          b.next.prev = a.prev;
        }
      }
      first() {
        return this.head;
      }
      isEmpty() {
        return !this.head;
      }
    };
    module.exports = VertexList;
  }
});

// node_modules/@jscad/modeling/src/operations/hulls/quickhull/Vertex.js
var require_Vertex = __commonJS({
  "node_modules/@jscad/modeling/src/operations/hulls/quickhull/Vertex.js"(exports, module) {
    var Vertex = class {
      constructor(point, index) {
        this.point = point;
        this.index = index;
        this.next = null;
        this.prev = null;
        this.face = null;
      }
    };
    module.exports = Vertex;
  }
});

// node_modules/@jscad/modeling/src/operations/hulls/quickhull/HalfEdge.js
var require_HalfEdge = __commonJS({
  "node_modules/@jscad/modeling/src/operations/hulls/quickhull/HalfEdge.js"(exports, module) {
    var distance = require_distance();
    var squaredDistance = require_squaredDistance();
    var HalfEdge = class {
      constructor(vertex, face) {
        this.vertex = vertex;
        this.face = face;
        this.next = null;
        this.prev = null;
        this.opposite = null;
      }
      head() {
        return this.vertex;
      }
      tail() {
        return this.prev ? this.prev.vertex : null;
      }
      length() {
        if (this.tail()) {
          return distance(
            this.tail().point,
            this.head().point
          );
        }
        return -1;
      }
      lengthSquared() {
        if (this.tail()) {
          return squaredDistance(
            this.tail().point,
            this.head().point
          );
        }
        return -1;
      }
      setOpposite(edge) {
        this.opposite = edge;
        edge.opposite = this;
      }
    };
    module.exports = HalfEdge;
  }
});

// node_modules/@jscad/modeling/src/operations/hulls/quickhull/Face.js
var require_Face = __commonJS({
  "node_modules/@jscad/modeling/src/operations/hulls/quickhull/Face.js"(exports, module) {
    var add = require_add2();
    var copy = require_copy2();
    var cross = require_cross();
    var dot = require_dot();
    var length = require_length();
    var normalize = require_normalize();
    var scale = require_scale();
    var subtract = require_subtract();
    var HalfEdge = require_HalfEdge();
    var VISIBLE = 0;
    var NON_CONVEX = 1;
    var DELETED = 2;
    var Face = class _Face {
      constructor() {
        this.normal = [];
        this.centroid = [];
        this.offset = 0;
        this.outside = null;
        this.mark = VISIBLE;
        this.edge = null;
        this.nVertices = 0;
      }
      getEdge(i) {
        if (typeof i !== "number") {
          throw Error("requires a number");
        }
        let it = this.edge;
        while (i > 0) {
          it = it.next;
          i -= 1;
        }
        while (i < 0) {
          it = it.prev;
          i += 1;
        }
        return it;
      }
      computeNormal() {
        const e0 = this.edge;
        const e1 = e0.next;
        let e2 = e1.next;
        const v2 = subtract([], e1.head().point, e0.head().point);
        const t = [];
        const v1 = [];
        this.nVertices = 2;
        this.normal = [0, 0, 0];
        while (e2 !== e0) {
          copy(v1, v2);
          subtract(v2, e2.head().point, e0.head().point);
          add(this.normal, this.normal, cross(t, v1, v2));
          e2 = e2.next;
          this.nVertices += 1;
        }
        this.area = length(this.normal);
        this.normal = scale(this.normal, this.normal, 1 / this.area);
      }
      computeNormalMinArea(minArea) {
        this.computeNormal();
        if (this.area < minArea) {
          let maxEdge;
          let maxSquaredLength = 0;
          let edge = this.edge;
          do {
            const lengthSquared = edge.lengthSquared();
            if (lengthSquared > maxSquaredLength) {
              maxEdge = edge;
              maxSquaredLength = lengthSquared;
            }
            edge = edge.next;
          } while (edge !== this.edge);
          const p1 = maxEdge.tail().point;
          const p2 = maxEdge.head().point;
          const maxVector = subtract([], p2, p1);
          const maxLength = Math.sqrt(maxSquaredLength);
          scale(maxVector, maxVector, 1 / maxLength);
          const maxProjection = dot(this.normal, maxVector);
          scale(maxVector, maxVector, -maxProjection);
          add(this.normal, this.normal, maxVector);
          normalize(this.normal, this.normal);
        }
      }
      computeCentroid() {
        this.centroid = [0, 0, 0];
        let edge = this.edge;
        do {
          add(this.centroid, this.centroid, edge.head().point);
          edge = edge.next;
        } while (edge !== this.edge);
        scale(this.centroid, this.centroid, 1 / this.nVertices);
      }
      computeNormalAndCentroid(minArea) {
        if (typeof minArea !== "undefined") {
          this.computeNormalMinArea(minArea);
        } else {
          this.computeNormal();
        }
        this.computeCentroid();
        this.offset = dot(this.normal, this.centroid);
      }
      distanceToPlane(point) {
        return dot(this.normal, point) - this.offset;
      }
      /**
       * @private
       *
       * Connects two edges assuming that prev.head().point === next.tail().point
       *
       * @param {HalfEdge} prev
       * @param {HalfEdge} next
       */
      connectHalfEdges(prev, next) {
        let discardedFace;
        if (prev.opposite.face === next.opposite.face) {
          const oppositeFace = next.opposite.face;
          let oppositeEdge;
          if (prev === this.edge) {
            this.edge = next;
          }
          if (oppositeFace.nVertices === 3) {
            oppositeEdge = next.opposite.prev.opposite;
            oppositeFace.mark = DELETED;
            discardedFace = oppositeFace;
          } else {
            oppositeEdge = next.opposite.next;
            if (oppositeFace.edge === oppositeEdge.prev) {
              oppositeFace.edge = oppositeEdge;
            }
            oppositeEdge.prev = oppositeEdge.prev.prev;
            oppositeEdge.prev.next = oppositeEdge;
          }
          next.prev = prev.prev;
          next.prev.next = next;
          next.setOpposite(oppositeEdge);
          oppositeFace.computeNormalAndCentroid();
        } else {
          prev.next = next;
          next.prev = prev;
        }
        return discardedFace;
      }
      mergeAdjacentFaces(adjacentEdge, discardedFaces) {
        const oppositeEdge = adjacentEdge.opposite;
        const oppositeFace = oppositeEdge.face;
        discardedFaces.push(oppositeFace);
        oppositeFace.mark = DELETED;
        let adjacentEdgePrev = adjacentEdge.prev;
        let adjacentEdgeNext = adjacentEdge.next;
        let oppositeEdgePrev = oppositeEdge.prev;
        let oppositeEdgeNext = oppositeEdge.next;
        while (adjacentEdgePrev.opposite.face === oppositeFace) {
          adjacentEdgePrev = adjacentEdgePrev.prev;
          oppositeEdgeNext = oppositeEdgeNext.next;
        }
        while (adjacentEdgeNext.opposite.face === oppositeFace) {
          adjacentEdgeNext = adjacentEdgeNext.next;
          oppositeEdgePrev = oppositeEdgePrev.prev;
        }
        let edge;
        for (edge = oppositeEdgeNext; edge !== oppositeEdgePrev.next; edge = edge.next) {
          edge.face = this;
        }
        this.edge = adjacentEdgeNext;
        let discardedFace;
        discardedFace = this.connectHalfEdges(oppositeEdgePrev, adjacentEdgeNext);
        if (discardedFace) {
          discardedFaces.push(discardedFace);
        }
        discardedFace = this.connectHalfEdges(adjacentEdgePrev, oppositeEdgeNext);
        if (discardedFace) {
          discardedFaces.push(discardedFace);
        }
        this.computeNormalAndCentroid();
        return discardedFaces;
      }
      collectIndices() {
        const indices = [];
        let edge = this.edge;
        do {
          indices.push(edge.head().index);
          edge = edge.next;
        } while (edge !== this.edge);
        return indices;
      }
      static createTriangle(v0, v1, v2, minArea = 0) {
        const face = new _Face();
        const e0 = new HalfEdge(v0, face);
        const e1 = new HalfEdge(v1, face);
        const e2 = new HalfEdge(v2, face);
        e0.next = e2.prev = e1;
        e1.next = e0.prev = e2;
        e2.next = e1.prev = e0;
        face.edge = e0;
        face.computeNormalAndCentroid(minArea);
        return face;
      }
    };
    module.exports = {
      VISIBLE,
      NON_CONVEX,
      DELETED,
      Face
    };
  }
});

// node_modules/@jscad/modeling/src/operations/hulls/quickhull/QuickHull.js
var require_QuickHull = __commonJS({
  "node_modules/@jscad/modeling/src/operations/hulls/quickhull/QuickHull.js"(exports, module) {
    var dot = require_dot();
    var pointLineDistance = require_point_line_distance();
    var getPlaneNormal = require_get_plane_normal();
    var VertexList = require_VertexList();
    var Vertex = require_Vertex();
    var { Face, VISIBLE, NON_CONVEX, DELETED } = require_Face();
    var MERGE_NON_CONVEX_WRT_LARGER_FACE = 1;
    var MERGE_NON_CONVEX = 2;
    var QuickHull = class {
      constructor(points) {
        if (!Array.isArray(points)) {
          throw TypeError("input is not a valid array");
        }
        if (points.length < 4) {
          throw Error("cannot build a simplex out of <4 points");
        }
        this.tolerance = -1;
        this.nFaces = 0;
        this.nPoints = points.length;
        this.faces = [];
        this.newFaces = [];
        this.claimed = new VertexList();
        this.unclaimed = new VertexList();
        this.vertices = [];
        for (let i = 0; i < points.length; i += 1) {
          this.vertices.push(new Vertex(points[i], i));
        }
        this.discardedFaces = [];
        this.vertexPointIndices = [];
      }
      addVertexToFace(vertex, face) {
        vertex.face = face;
        if (!face.outside) {
          this.claimed.add(vertex);
        } else {
          this.claimed.insertBefore(face.outside, vertex);
        }
        face.outside = vertex;
      }
      /**
       * Removes `vertex` for the `claimed` list of vertices, it also makes sure
       * that the link from `face` to the first vertex it sees in `claimed` is
       * linked correctly after the removal
       *
       * @param {Vertex} vertex
       * @param {Face} face
       */
      removeVertexFromFace(vertex, face) {
        if (vertex === face.outside) {
          if (vertex.next && vertex.next.face === face) {
            face.outside = vertex.next;
          } else {
            face.outside = null;
          }
        }
        this.claimed.remove(vertex);
      }
      /**
       * Removes all the visible vertices that `face` is able to see which are
       * stored in the `claimed` vertext list
       *
       * @param {Face} face
       * @return {Vertex|undefined} If face had visible vertices returns
       * `face.outside`, otherwise undefined
       */
      removeAllVerticesFromFace(face) {
        if (face.outside) {
          let end = face.outside;
          while (end.next && end.next.face === face) {
            end = end.next;
          }
          this.claimed.removeChain(face.outside, end);
          end.next = null;
          return face.outside;
        }
      }
      /**
       * Removes all the visible vertices that `face` is able to see, additionally
       * checking the following:
       *
       * If `absorbingFace` doesn't exist then all the removed vertices will be
       * added to the `unclaimed` vertex list
       *
       * If `absorbingFace` exists then this method will assign all the vertices of
       * `face` that can see `absorbingFace`, if a vertex cannot see `absorbingFace`
       * it's added to the `unclaimed` vertex list
       *
       * @param {Face} face
       * @param {Face} [absorbingFace]
       */
      deleteFaceVertices(face, absorbingFace) {
        const faceVertices = this.removeAllVerticesFromFace(face);
        if (faceVertices) {
          if (!absorbingFace) {
            this.unclaimed.addAll(faceVertices);
          } else {
            let nextVertex;
            for (let vertex = faceVertices; vertex; vertex = nextVertex) {
              nextVertex = vertex.next;
              const distance = absorbingFace.distanceToPlane(vertex.point);
              if (distance > this.tolerance) {
                this.addVertexToFace(vertex, absorbingFace);
              } else {
                this.unclaimed.add(vertex);
              }
            }
          }
        }
      }
      /**
       * Reassigns as many vertices as possible from the unclaimed list to the new
       * faces
       *
       * @param {Faces[]} newFaces
       */
      resolveUnclaimedPoints(newFaces) {
        let vertexNext = this.unclaimed.first();
        for (let vertex = vertexNext; vertex; vertex = vertexNext) {
          vertexNext = vertex.next;
          let maxDistance = this.tolerance;
          let maxFace;
          for (let i = 0; i < newFaces.length; i += 1) {
            const face = newFaces[i];
            if (face.mark === VISIBLE) {
              const dist = face.distanceToPlane(vertex.point);
              if (dist > maxDistance) {
                maxDistance = dist;
                maxFace = face;
              }
              if (maxDistance > 1e3 * this.tolerance) {
                break;
              }
            }
          }
          if (maxFace) {
            this.addVertexToFace(vertex, maxFace);
          }
        }
      }
      /**
       * Computes the extremes of a tetrahedron which will be the initial hull
       *
       * @return {number[]} The min/max vertices in the x,y,z directions
       */
      computeExtremes() {
        const min = [];
        const max = [];
        const minVertices = [];
        const maxVertices = [];
        let i, j;
        for (i = 0; i < 3; i += 1) {
          minVertices[i] = maxVertices[i] = this.vertices[0];
        }
        for (i = 0; i < 3; i += 1) {
          min[i] = max[i] = this.vertices[0].point[i];
        }
        for (i = 1; i < this.vertices.length; i += 1) {
          const vertex = this.vertices[i];
          const point = vertex.point;
          for (j = 0; j < 3; j += 1) {
            if (point[j] < min[j]) {
              min[j] = point[j];
              minVertices[j] = vertex;
            }
          }
          for (j = 0; j < 3; j += 1) {
            if (point[j] > max[j]) {
              max[j] = point[j];
              maxVertices[j] = vertex;
            }
          }
        }
        this.tolerance = 3 * Number.EPSILON * (Math.max(Math.abs(min[0]), Math.abs(max[0])) + Math.max(Math.abs(min[1]), Math.abs(max[1])) + Math.max(Math.abs(min[2]), Math.abs(max[2])));
        return [minVertices, maxVertices];
      }
      /**
       * Compues the initial tetrahedron assigning to its faces all the points that
       * are candidates to form part of the hull
       */
      createInitialSimplex() {
        const vertices = this.vertices;
        const [min, max] = this.computeExtremes();
        let v2, v3;
        let i, j;
        let maxDistance = 0;
        let indexMax = 0;
        for (i = 0; i < 3; i += 1) {
          const distance = max[i].point[i] - min[i].point[i];
          if (distance > maxDistance) {
            maxDistance = distance;
            indexMax = i;
          }
        }
        const v0 = min[indexMax];
        const v1 = max[indexMax];
        maxDistance = 0;
        for (i = 0; i < this.vertices.length; i += 1) {
          const vertex = this.vertices[i];
          if (vertex !== v0 && vertex !== v1) {
            const distance = pointLineDistance(
              vertex.point,
              v0.point,
              v1.point
            );
            if (distance > maxDistance) {
              maxDistance = distance;
              v2 = vertex;
            }
          }
        }
        const normal = getPlaneNormal([], v0.point, v1.point, v2.point);
        const distPO = dot(v0.point, normal);
        maxDistance = -1;
        for (i = 0; i < this.vertices.length; i += 1) {
          const vertex = this.vertices[i];
          if (vertex !== v0 && vertex !== v1 && vertex !== v2) {
            const distance = Math.abs(dot(normal, vertex.point) - distPO);
            if (distance > maxDistance) {
              maxDistance = distance;
              v3 = vertex;
            }
          }
        }
        const faces = [];
        if (dot(v3.point, normal) - distPO < 0) {
          faces.push(
            Face.createTriangle(v0, v1, v2),
            Face.createTriangle(v3, v1, v0),
            Face.createTriangle(v3, v2, v1),
            Face.createTriangle(v3, v0, v2)
          );
          for (i = 0; i < 3; i += 1) {
            const j2 = (i + 1) % 3;
            faces[i + 1].getEdge(2).setOpposite(faces[0].getEdge(j2));
            faces[i + 1].getEdge(1).setOpposite(faces[j2 + 1].getEdge(0));
          }
        } else {
          faces.push(
            Face.createTriangle(v0, v2, v1),
            Face.createTriangle(v3, v0, v1),
            Face.createTriangle(v3, v1, v2),
            Face.createTriangle(v3, v2, v0)
          );
          for (i = 0; i < 3; i += 1) {
            const j2 = (i + 1) % 3;
            faces[i + 1].getEdge(2).setOpposite(faces[0].getEdge((3 - i) % 3));
            faces[i + 1].getEdge(0).setOpposite(faces[j2 + 1].getEdge(1));
          }
        }
        for (i = 0; i < 4; i += 1) {
          this.faces.push(faces[i]);
        }
        for (i = 0; i < vertices.length; i += 1) {
          const vertex = vertices[i];
          if (vertex !== v0 && vertex !== v1 && vertex !== v2 && vertex !== v3) {
            maxDistance = this.tolerance;
            let maxFace;
            for (j = 0; j < 4; j += 1) {
              const distance = faces[j].distanceToPlane(vertex.point);
              if (distance > maxDistance) {
                maxDistance = distance;
                maxFace = faces[j];
              }
            }
            if (maxFace) {
              this.addVertexToFace(vertex, maxFace);
            }
          }
        }
      }
      reindexFaceAndVertices() {
        const activeFaces = [];
        for (let i = 0; i < this.faces.length; i += 1) {
          const face = this.faces[i];
          if (face.mark === VISIBLE) {
            activeFaces.push(face);
          }
        }
        this.faces = activeFaces;
      }
      collectFaces(skipTriangulation) {
        const faceIndices = [];
        for (let i = 0; i < this.faces.length; i += 1) {
          if (this.faces[i].mark !== VISIBLE) {
            throw Error("attempt to include a destroyed face in the hull");
          }
          const indices = this.faces[i].collectIndices();
          if (skipTriangulation) {
            faceIndices.push(indices);
          } else {
            for (let j = 0; j < indices.length - 2; j += 1) {
              faceIndices.push(
                [indices[0], indices[j + 1], indices[j + 2]]
              );
            }
          }
        }
        return faceIndices;
      }
      /**
       * Finds the next vertex to make faces with the current hull
       *
       * - let `face` be the first face existing in the `claimed` vertex list
       *  - if `face` doesn't exist then return since there're no vertices left
       *  - otherwise for each `vertex` that face sees find the one furthest away
       *  from `face`
       *
       * @return {Vertex|undefined} Returns undefined when there're no more
       * visible vertices
       */
      nextVertexToAdd() {
        if (!this.claimed.isEmpty()) {
          let eyeVertex, vertex;
          let maxDistance = 0;
          const eyeFace = this.claimed.first().face;
          for (vertex = eyeFace.outside; vertex && vertex.face === eyeFace; vertex = vertex.next) {
            const distance = eyeFace.distanceToPlane(vertex.point);
            if (distance > maxDistance) {
              maxDistance = distance;
              eyeVertex = vertex;
            }
          }
          return eyeVertex;
        }
      }
      /**
       * Computes a chain of half edges in ccw order called the `horizon`, for an
       * edge to be part of the horizon it must join a face that can see
       * `eyePoint` and a face that cannot see `eyePoint`
       *
       * @param {number[]} eyePoint - The coordinates of a point
       * @param {HalfEdge} crossEdge - The edge used to jump to the current `face`
       * @param {Face} face - The current face being tested
       * @param {HalfEdge[]} horizon - The edges that form part of the horizon in
       * ccw order
       */
      computeHorizon(eyePoint, crossEdge, face, horizon) {
        this.deleteFaceVertices(face);
        face.mark = DELETED;
        let edge;
        if (!crossEdge) {
          edge = crossEdge = face.getEdge(0);
        } else {
          edge = crossEdge.next;
        }
        do {
          const oppositeEdge = edge.opposite;
          const oppositeFace = oppositeEdge.face;
          if (oppositeFace.mark === VISIBLE) {
            if (oppositeFace.distanceToPlane(eyePoint) > this.tolerance) {
              this.computeHorizon(eyePoint, oppositeEdge, oppositeFace, horizon);
            } else {
              horizon.push(edge);
            }
          }
          edge = edge.next;
        } while (edge !== crossEdge);
      }
      /**
       * Creates a face with the points `eyeVertex.point`, `horizonEdge.tail` and
       * `horizonEdge.tail` in ccw order
       *
       * @param {Vertex} eyeVertex
       * @param {HalfEdge} horizonEdge
       * @return {HalfEdge} The half edge whose vertex is the eyeVertex
       */
      addAdjoiningFace(eyeVertex, horizonEdge) {
        const face = Face.createTriangle(
          eyeVertex,
          horizonEdge.tail(),
          horizonEdge.head()
        );
        this.faces.push(face);
        face.getEdge(-1).setOpposite(horizonEdge.opposite);
        return face.getEdge(0);
      }
      /**
       * Adds horizon.length faces to the hull, each face will be 'linked' with the
       * horizon opposite face and the face on the left/right
       *
       * @param {Vertex} eyeVertex
       * @param {HalfEdge[]} horizon - A chain of half edges in ccw order
       */
      addNewFaces(eyeVertex, horizon) {
        this.newFaces = [];
        let firstSideEdge, previousSideEdge;
        for (let i = 0; i < horizon.length; i += 1) {
          const horizonEdge = horizon[i];
          const sideEdge = this.addAdjoiningFace(eyeVertex, horizonEdge);
          if (!firstSideEdge) {
            firstSideEdge = sideEdge;
          } else {
            sideEdge.next.setOpposite(previousSideEdge);
          }
          this.newFaces.push(sideEdge.face);
          previousSideEdge = sideEdge;
        }
        firstSideEdge.next.setOpposite(previousSideEdge);
      }
      /**
       * Computes the distance from `edge` opposite face's centroid to
       * `edge.face`
       *
       * @param {HalfEdge} edge
       * @return {number}
       * - A positive number when the centroid of the opposite face is above the
       *   face i.e. when the faces are concave
       * - A negative number when the centroid of the opposite face is below the
       *   face i.e. when the faces are convex
       */
      oppositeFaceDistance(edge) {
        return edge.face.distanceToPlane(edge.opposite.face.centroid);
      }
      /**
       * Merges a face with none/any/all its neighbors according to the strategy
       * used
       *
       * if `mergeType` is MERGE_NON_CONVEX_WRT_LARGER_FACE then the merge will be
       * decided based on the face with the larger area, the centroid of the face
       * with the smaller area will be checked against the one with the larger area
       * to see if it's in the merge range [tolerance, -tolerance] i.e.
       *
       *    dot(centroid smaller face, larger face normal) - larger face offset > -tolerance
       *
       * Note that the first check (with +tolerance) was done on `computeHorizon`
       *
       * If the above is not true then the check is done with respect to the smaller
       * face i.e.
       *
       *    dot(centroid larger face, smaller face normal) - smaller face offset > -tolerance
       *
       * If true then it means that two faces are non convex (concave), even if the
       * dot(...) - offset value is > 0 (that's the point of doing the merge in the
       * first place)
       *
       * If two faces are concave then the check must also be done on the other face
       * but this is done in another merge pass, for this to happen the face is
       * marked in a temporal NON_CONVEX state
       *
       * if `mergeType` is MERGE_NON_CONVEX then two faces will be merged only if
       * they pass the following conditions
       *
       *    dot(centroid smaller face, larger face normal) - larger face offset > -tolerance
       *    dot(centroid larger face, smaller face normal) - smaller face offset > -tolerance
       *
       * @param {Face} face
       * @param {number} mergeType - Either MERGE_NON_CONVEX_WRT_LARGER_FACE or
       * MERGE_NON_CONVEX
       */
      doAdjacentMerge(face, mergeType) {
        let edge = face.edge;
        let convex = true;
        let it = 0;
        do {
          if (it >= face.nVertices) {
            throw Error("merge recursion limit exceeded");
          }
          const oppositeFace = edge.opposite.face;
          let merge = false;
          if (mergeType === MERGE_NON_CONVEX) {
            if (this.oppositeFaceDistance(edge) > -this.tolerance || this.oppositeFaceDistance(edge.opposite) > -this.tolerance) {
              merge = true;
            }
          } else {
            if (face.area > oppositeFace.area) {
              if (this.oppositeFaceDistance(edge) > -this.tolerance) {
                merge = true;
              } else if (this.oppositeFaceDistance(edge.opposite) > -this.tolerance) {
                convex = false;
              }
            } else {
              if (this.oppositeFaceDistance(edge.opposite) > -this.tolerance) {
                merge = true;
              } else if (this.oppositeFaceDistance(edge) > -this.tolerance) {
                convex = false;
              }
            }
          }
          if (merge) {
            const discardedFaces = face.mergeAdjacentFaces(edge, []);
            for (let i = 0; i < discardedFaces.length; i += 1) {
              this.deleteFaceVertices(discardedFaces[i], face);
            }
            return true;
          }
          edge = edge.next;
          it += 1;
        } while (edge !== face.edge);
        if (!convex) {
          face.mark = NON_CONVEX;
        }
        return false;
      }
      /**
       * Adds a vertex to the hull with the following algorithm
       *
       * - Compute the `horizon` which is a chain of half edges, for an edge to
       *   belong to this group it must be the edge connecting a face that can
       *   see `eyeVertex` and a face which cannot see `eyeVertex`
       * - All the faces that can see `eyeVertex` have its visible vertices removed
       *   from the claimed VertexList
       * - A new set of faces is created with each edge of the `horizon` and
       *   `eyeVertex`, each face is connected with the opposite horizon face and
       *   the face on the left/right
       * - The new faces are merged if possible with the opposite horizon face first
       *   and then the faces on the right/left
       * - The vertices removed from all the visible faces are assigned to the new
       *   faces if possible
       *
       * @param {Vertex} eyeVertex
       */
      addVertexToHull(eyeVertex) {
        const horizon = [];
        this.unclaimed.clear();
        this.removeVertexFromFace(eyeVertex, eyeVertex.face);
        this.computeHorizon(eyeVertex.point, null, eyeVertex.face, horizon);
        this.addNewFaces(eyeVertex, horizon);
        for (let i = 0; i < this.newFaces.length; i += 1) {
          const face = this.newFaces[i];
          if (face.mark === VISIBLE) {
            while (this.doAdjacentMerge(face, MERGE_NON_CONVEX_WRT_LARGER_FACE)) {
            }
          }
        }
        for (let i = 0; i < this.newFaces.length; i += 1) {
          const face = this.newFaces[i];
          if (face.mark === NON_CONVEX) {
            face.mark = VISIBLE;
            while (this.doAdjacentMerge(face, MERGE_NON_CONVEX)) {
            }
          }
        }
        this.resolveUnclaimedPoints(this.newFaces);
      }
      build() {
        let eyeVertex;
        this.createInitialSimplex();
        while (eyeVertex = this.nextVertexToAdd()) {
          this.addVertexToHull(eyeVertex);
        }
        this.reindexFaceAndVertices();
      }
    };
    module.exports = QuickHull;
  }
});

// node_modules/@jscad/modeling/src/operations/hulls/quickhull/index.js
var require_quickhull = __commonJS({
  "node_modules/@jscad/modeling/src/operations/hulls/quickhull/index.js"(exports, module) {
    var QuickHull = require_QuickHull();
    var runner = (points, options = {}) => {
      const instance = new QuickHull(points);
      instance.build();
      return instance.collectFaces(options.skipTriangulation);
    };
    module.exports = runner;
  }
});

// node_modules/@jscad/modeling/src/geometries/poly3/create.js
var require_create6 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/poly3/create.js"(exports, module) {
    var create = (vertices) => {
      if (vertices === void 0 || vertices.length < 3) {
        vertices = [];
      }
      return { vertices };
    };
    module.exports = create;
  }
});

// node_modules/@jscad/modeling/src/geometries/poly3/clone.js
var require_clone6 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/poly3/clone.js"(exports, module) {
    var create = require_create6();
    var vec3 = require_vec3();
    var clone = (...params) => {
      let out;
      let poly3;
      if (params.length === 1) {
        out = create();
        poly3 = params[0];
      } else {
        out = params[0];
        poly3 = params[1];
      }
      out.vertices = poly3.vertices.map((vec) => vec3.clone(vec));
      return out;
    };
    module.exports = clone;
  }
});

// node_modules/@jscad/modeling/src/geometries/poly3/fromPoints.js
var require_fromPoints2 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/poly3/fromPoints.js"(exports, module) {
    var vec3 = require_vec3();
    var create = require_create6();
    var fromPoints = (points) => {
      const vertices = points.map((point) => vec3.clone(point));
      return create(vertices);
    };
    module.exports = fromPoints;
  }
});

// node_modules/@jscad/modeling/src/geometries/poly3/fromPointsAndPlane.js
var require_fromPointsAndPlane = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/poly3/fromPointsAndPlane.js"(exports, module) {
    var create = require_create6();
    var fromPointsAndPlane = (vertices, plane) => {
      const poly = create(vertices);
      poly.plane = plane;
      return poly;
    };
    module.exports = fromPointsAndPlane;
  }
});

// node_modules/@jscad/modeling/src/maths/vec4/create.js
var require_create7 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec4/create.js"(exports, module) {
    var create = () => [0, 0, 0, 0];
    module.exports = create;
  }
});

// node_modules/@jscad/modeling/src/maths/vec4/clone.js
var require_clone7 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec4/clone.js"(exports, module) {
    var create = require_create7();
    var clone = (vector) => {
      const out = create();
      out[0] = vector[0];
      out[1] = vector[1];
      out[2] = vector[2];
      out[3] = vector[3];
      return out;
    };
    module.exports = clone;
  }
});

// node_modules/@jscad/modeling/src/maths/vec4/copy.js
var require_copy4 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec4/copy.js"(exports, module) {
    var copy = (out, vector) => {
      out[0] = vector[0];
      out[1] = vector[1];
      out[2] = vector[2];
      out[3] = vector[3];
      return out;
    };
    module.exports = copy;
  }
});

// node_modules/@jscad/modeling/src/maths/vec4/equals.js
var require_equals4 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec4/equals.js"(exports, module) {
    var equals = (a, b) => a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
    module.exports = equals;
  }
});

// node_modules/@jscad/modeling/src/maths/plane/flip.js
var require_flip = __commonJS({
  "node_modules/@jscad/modeling/src/maths/plane/flip.js"(exports, module) {
    var flip = (out, plane) => {
      out[0] = -plane[0];
      out[1] = -plane[1];
      out[2] = -plane[2];
      out[3] = -plane[3];
      return out;
    };
    module.exports = flip;
  }
});

// node_modules/@jscad/modeling/src/maths/plane/fromNormalAndPoint.js
var require_fromNormalAndPoint = __commonJS({
  "node_modules/@jscad/modeling/src/maths/plane/fromNormalAndPoint.js"(exports, module) {
    var vec3 = require_vec3();
    var fromNormalAndPoint = (out, normal, point) => {
      const u = vec3.normalize(vec3.create(), normal);
      const w = vec3.dot(point, u);
      out[0] = u[0];
      out[1] = u[1];
      out[2] = u[2];
      out[3] = w;
      return out;
    };
    module.exports = fromNormalAndPoint;
  }
});

// node_modules/@jscad/modeling/src/maths/vec4/fromValues.js
var require_fromValues4 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec4/fromValues.js"(exports, module) {
    var create = require_create7();
    var fromValues = (x, y, z, w) => {
      const out = create();
      out[0] = x;
      out[1] = y;
      out[2] = z;
      out[3] = w;
      return out;
    };
    module.exports = fromValues;
  }
});

// node_modules/@jscad/modeling/src/maths/plane/fromNoisyPoints.js
var require_fromNoisyPoints = __commonJS({
  "node_modules/@jscad/modeling/src/maths/plane/fromNoisyPoints.js"(exports, module) {
    var vec3 = require_vec3();
    var fromNormalAndPoint = require_fromNormalAndPoint();
    var fromNoisyPoints = (out, ...vertices) => {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      const n = vertices.length;
      vertices.forEach((v) => {
        vec3.add(out, out, v);
      });
      vec3.scale(out, out, 1 / n);
      let xx = 0;
      let xy = 0;
      let xz = 0;
      let yy = 0;
      let yz = 0;
      let zz = 0;
      const vn = vec3.create();
      vertices.forEach((v) => {
        vec3.subtract(vn, v, out);
        xx += vn[0] * vn[0];
        xy += vn[0] * vn[1];
        xz += vn[0] * vn[2];
        yy += vn[1] * vn[1];
        yz += vn[1] * vn[2];
        zz += vn[2] * vn[2];
      });
      xx /= n;
      xy /= n;
      xz /= n;
      yy /= n;
      yz /= n;
      zz /= n;
      vn[0] = 0;
      vn[1] = 0;
      vn[2] = 0;
      const wdv = vec3.create();
      let det = yy * zz - yz * yz;
      wdv[0] = det;
      wdv[1] = xz * yz - xy * zz;
      wdv[2] = xy * yz - xz * yy;
      let weight = det * det;
      vec3.add(vn, vn, vec3.scale(wdv, wdv, weight));
      det = xx * zz - xz * xz;
      wdv[0] = xz * yz - xy * zz;
      wdv[1] = det;
      wdv[2] = xy * xz - yz * xx;
      weight = det * det;
      if (vec3.dot(vn, wdv) < 0) {
        weight = -weight;
      }
      vec3.add(vn, vn, vec3.scale(wdv, wdv, weight));
      det = xx * yy - xy * xy;
      wdv[0] = xy * yz - xz * yy;
      wdv[1] = xy * xz - yz * xx;
      wdv[2] = det;
      weight = det * det;
      if (vec3.dot(vn, wdv) < 0) {
        weight = -weight;
      }
      vec3.add(vn, vn, vec3.scale(wdv, wdv, weight));
      return fromNormalAndPoint(out, vn, out);
    };
    module.exports = fromNoisyPoints;
  }
});

// node_modules/@jscad/modeling/src/maths/plane/fromPoints.js
var require_fromPoints3 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/plane/fromPoints.js"(exports, module) {
    var vec3 = require_vec3();
    var fromPoints = (out, ...vertices) => {
      const len = vertices.length;
      const ba = vec3.create();
      const ca = vec3.create();
      const vertexNormal = (index) => {
        const a = vertices[index];
        const b = vertices[(index + 1) % len];
        const c = vertices[(index + 2) % len];
        vec3.subtract(ba, b, a);
        vec3.subtract(ca, c, a);
        vec3.cross(ba, ba, ca);
        vec3.normalize(ba, ba);
        return ba;
      };
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      if (len === 3) {
        vec3.copy(out, vertexNormal(0));
      } else {
        vertices.forEach((v, i) => {
          vec3.add(out, out, vertexNormal(i));
        });
        vec3.normalize(out, out);
      }
      out[3] = vec3.dot(out, vertices[0]);
      return out;
    };
    module.exports = fromPoints;
  }
});

// node_modules/@jscad/modeling/src/maths/plane/fromPointsRandom.js
var require_fromPointsRandom = __commonJS({
  "node_modules/@jscad/modeling/src/maths/plane/fromPointsRandom.js"(exports, module) {
    var { EPS } = require_constants();
    var vec3 = require_vec3();
    var fromPointsRandom = (out, a, b, c) => {
      let ba = vec3.subtract(vec3.create(), b, a);
      let ca = vec3.subtract(vec3.create(), c, a);
      if (vec3.length(ba) < EPS) {
        ba = vec3.orthogonal(ba, ca);
      }
      if (vec3.length(ca) < EPS) {
        ca = vec3.orthogonal(ca, ba);
      }
      let normal = vec3.cross(vec3.create(), ba, ca);
      if (vec3.length(normal) < EPS) {
        ca = vec3.orthogonal(ca, ba);
        normal = vec3.cross(normal, ba, ca);
      }
      normal = vec3.normalize(normal, normal);
      const w = vec3.dot(normal, a);
      out[0] = normal[0];
      out[1] = normal[1];
      out[2] = normal[2];
      out[3] = w;
      return out;
    };
    module.exports = fromPointsRandom;
  }
});

// node_modules/@jscad/modeling/src/maths/plane/projectionOfPoint.js
var require_projectionOfPoint = __commonJS({
  "node_modules/@jscad/modeling/src/maths/plane/projectionOfPoint.js"(exports, module) {
    var vec3 = require_vec3();
    var projectionOfPoint = (plane, point) => {
      const a = point[0] * plane[0] + point[1] * plane[1] + point[2] * plane[2] - plane[3];
      const x = point[0] - a * plane[0];
      const y = point[1] - a * plane[1];
      const z = point[2] - a * plane[2];
      return vec3.fromValues(x, y, z);
    };
    module.exports = projectionOfPoint;
  }
});

// node_modules/@jscad/modeling/src/maths/plane/signedDistanceToPoint.js
var require_signedDistanceToPoint = __commonJS({
  "node_modules/@jscad/modeling/src/maths/plane/signedDistanceToPoint.js"(exports, module) {
    var vec3 = require_vec3();
    var signedDistanceToPoint = (plane, point) => vec3.dot(plane, point) - plane[3];
    module.exports = signedDistanceToPoint;
  }
});

// node_modules/@jscad/modeling/src/maths/vec4/toString.js
var require_toString5 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec4/toString.js"(exports, module) {
    var toString = (vec) => `(${vec[0].toFixed(9)}, ${vec[1].toFixed(9)}, ${vec[2].toFixed(9)}, ${vec[3].toFixed(9)})`;
    module.exports = toString;
  }
});

// node_modules/@jscad/modeling/src/maths/plane/transform.js
var require_transform4 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/plane/transform.js"(exports, module) {
    var mat4 = require_mat4();
    var vec3 = require_vec3();
    var fromPoints = require_fromPoints3();
    var flip = require_flip();
    var transform = (out, plane, matrix) => {
      const ismirror = mat4.isMirroring(matrix);
      const r = vec3.orthogonal(vec3.create(), plane);
      const u = vec3.cross(r, plane, r);
      const v = vec3.cross(vec3.create(), plane, u);
      let point1 = vec3.fromScalar(vec3.create(), plane[3]);
      vec3.multiply(point1, point1, plane);
      let point2 = vec3.add(vec3.create(), point1, u);
      let point3 = vec3.add(vec3.create(), point1, v);
      point1 = vec3.transform(point1, point1, matrix);
      point2 = vec3.transform(point2, point2, matrix);
      point3 = vec3.transform(point3, point3, matrix);
      fromPoints(out, point1, point2, point3);
      if (ismirror) {
        flip(out, out);
      }
      return out;
    };
    module.exports = transform;
  }
});

// node_modules/@jscad/modeling/src/maths/plane/index.js
var require_plane = __commonJS({
  "node_modules/@jscad/modeling/src/maths/plane/index.js"(exports, module) {
    module.exports = {
      /**
       * @see [vec4.clone()]{@link module:modeling/maths/vec4.clone}
       * @function clone
       */
      clone: require_clone7(),
      /**
       * @see [vec4.copy()]{@link module:modeling/maths/vec4.copy}
       * @function copy
       */
      copy: require_copy4(),
      /**
       * @see [vec4.create()]{@link module:modeling/maths/vec4.create}
       * @function create
       */
      create: require_create7(),
      /**
       * @see [vec4.equals()]{@link module:modeling/maths/vec4.equals}
       * @function equals
       */
      equals: require_equals4(),
      flip: require_flip(),
      fromNormalAndPoint: require_fromNormalAndPoint(),
      /**
       * @see [vec4.fromValues()]{@link module:modeling/maths/vec4.fromValues}
       * @function fromValues
       */
      fromValues: require_fromValues4(),
      fromNoisyPoints: require_fromNoisyPoints(),
      fromPoints: require_fromPoints3(),
      fromPointsRandom: require_fromPointsRandom(),
      projectionOfPoint: require_projectionOfPoint(),
      signedDistanceToPoint: require_signedDistanceToPoint(),
      /**
       * @see [vec4.toString()]{@link module:modeling/maths/vec4.toString}
       * @function toString
       */
      toString: require_toString5(),
      transform: require_transform4()
    };
  }
});

// node_modules/@jscad/modeling/src/geometries/poly3/invert.js
var require_invert2 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/poly3/invert.js"(exports, module) {
    var plane = require_plane();
    var create = require_create6();
    var invert = (polygon) => {
      const vertices = polygon.vertices.slice().reverse();
      const inverted = create(vertices);
      if (polygon.plane) {
        inverted.plane = plane.flip(plane.create(), polygon.plane);
      }
      return inverted;
    };
    module.exports = invert;
  }
});

// node_modules/@jscad/modeling/src/geometries/poly3/isA.js
var require_isA2 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/poly3/isA.js"(exports, module) {
    var isA = (object) => {
      if (object && typeof object === "object") {
        if ("vertices" in object) {
          if (Array.isArray(object.vertices)) {
            return true;
          }
        }
      }
      return false;
    };
    module.exports = isA;
  }
});

// node_modules/@jscad/modeling/src/geometries/poly3/isConvex.js
var require_isConvex = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/poly3/isConvex.js"(exports, module) {
    var plane = require_plane();
    var vec3 = require_vec3();
    var isConvex = (polygon) => areVerticesConvex(polygon.vertices);
    var areVerticesConvex = (vertices) => {
      const numvertices = vertices.length;
      if (numvertices > 2) {
        const normal = plane.fromPoints(plane.create(), ...vertices);
        let prevprevpos = vertices[numvertices - 2];
        let prevpos = vertices[numvertices - 1];
        for (let i = 0; i < numvertices; i++) {
          const pos = vertices[i];
          if (!isConvexPoint(prevprevpos, prevpos, pos, normal)) {
            return false;
          }
          prevprevpos = prevpos;
          prevpos = pos;
        }
      }
      return true;
    };
    var isConvexPoint = (prevpoint, point, nextpoint, normal) => {
      const crossproduct = vec3.cross(
        vec3.create(),
        vec3.subtract(vec3.create(), point, prevpoint),
        vec3.subtract(vec3.create(), nextpoint, point)
      );
      const crossdotnormal = vec3.dot(crossproduct, normal);
      return crossdotnormal >= 0;
    };
    module.exports = isConvex;
  }
});

// node_modules/@jscad/modeling/src/geometries/poly3/plane.js
var require_plane2 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/poly3/plane.js"(exports, module) {
    var mplane = require_plane();
    var plane = (polygon) => {
      if (!polygon.plane) {
        polygon.plane = mplane.fromPoints(mplane.create(), ...polygon.vertices);
      }
      return polygon.plane;
    };
    module.exports = plane;
  }
});

// node_modules/@jscad/modeling/src/geometries/poly3/measureArea.js
var require_measureArea = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/poly3/measureArea.js"(exports, module) {
    var plane = require_plane2();
    var measureArea = (polygon) => {
      const n = polygon.vertices.length;
      if (n < 3) {
        return 0;
      }
      const vertices = polygon.vertices;
      const normal = plane(polygon);
      const ax = Math.abs(normal[0]);
      const ay = Math.abs(normal[1]);
      const az = Math.abs(normal[2]);
      if (ax + ay + az === 0) {
        return 0;
      }
      let coord = 3;
      if (ax > ay && ax > az) {
        coord = 1;
      } else if (ay > az) {
        coord = 2;
      }
      let area = 0;
      let h = 0;
      let i = 1;
      let j = 2;
      switch (coord) {
        case 1:
          for (i = 1; i < n; i++) {
            h = i - 1;
            j = (i + 1) % n;
            area += vertices[i][1] * (vertices[j][2] - vertices[h][2]);
          }
          area += vertices[0][1] * (vertices[1][2] - vertices[n - 1][2]);
          area /= 2 * normal[0];
          break;
        case 2:
          for (i = 1; i < n; i++) {
            h = i - 1;
            j = (i + 1) % n;
            area += vertices[i][2] * (vertices[j][0] - vertices[h][0]);
          }
          area += vertices[0][2] * (vertices[1][0] - vertices[n - 1][0]);
          area /= 2 * normal[1];
          break;
        case 3:
        // ignore Z coordinates
        default:
          for (i = 1; i < n; i++) {
            h = i - 1;
            j = (i + 1) % n;
            area += vertices[i][0] * (vertices[j][1] - vertices[h][1]);
          }
          area += vertices[0][0] * (vertices[1][1] - vertices[n - 1][1]);
          area /= 2 * normal[2];
          break;
      }
      return area;
    };
    module.exports = measureArea;
  }
});

// node_modules/@jscad/modeling/src/geometries/poly3/measureBoundingBox.js
var require_measureBoundingBox = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/poly3/measureBoundingBox.js"(exports, module) {
    var vec3 = require_vec3();
    var measureBoundingBox = (polygon) => {
      const vertices = polygon.vertices;
      const numvertices = vertices.length;
      const min = numvertices === 0 ? vec3.create() : vec3.clone(vertices[0]);
      const max = vec3.clone(min);
      for (let i = 1; i < numvertices; i++) {
        vec3.min(min, min, vertices[i]);
        vec3.max(max, max, vertices[i]);
      }
      return [min, max];
    };
    module.exports = measureBoundingBox;
  }
});

// node_modules/@jscad/modeling/src/maths/vec4/dot.js
var require_dot3 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec4/dot.js"(exports, module) {
    var dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
    module.exports = dot;
  }
});

// node_modules/@jscad/modeling/src/maths/vec4/fromScalar.js
var require_fromScalar3 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec4/fromScalar.js"(exports, module) {
    var fromScalar = (out, scalar) => {
      out[0] = scalar;
      out[1] = scalar;
      out[2] = scalar;
      out[3] = scalar;
      return out;
    };
    module.exports = fromScalar;
  }
});

// node_modules/@jscad/modeling/src/maths/vec4/transform.js
var require_transform5 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec4/transform.js"(exports, module) {
    var transform = (out, vector, matrix) => {
      const [x, y, z, w] = vector;
      out[0] = matrix[0] * x + matrix[4] * y + matrix[8] * z + matrix[12] * w;
      out[1] = matrix[1] * x + matrix[5] * y + matrix[9] * z + matrix[13] * w;
      out[2] = matrix[2] * x + matrix[6] * y + matrix[10] * z + matrix[14] * w;
      out[3] = matrix[3] * x + matrix[7] * y + matrix[11] * z + matrix[15] * w;
      return out;
    };
    module.exports = transform;
  }
});

// node_modules/@jscad/modeling/src/maths/vec4/index.js
var require_vec4 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/vec4/index.js"(exports, module) {
    module.exports = {
      clone: require_clone7(),
      copy: require_copy4(),
      create: require_create7(),
      dot: require_dot3(),
      equals: require_equals4(),
      fromScalar: require_fromScalar3(),
      fromValues: require_fromValues4(),
      toString: require_toString5(),
      transform: require_transform5()
    };
  }
});

// node_modules/@jscad/modeling/src/geometries/poly3/measureBoundingSphere.js
var require_measureBoundingSphere = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/poly3/measureBoundingSphere.js"(exports, module) {
    var vec4 = require_vec4();
    var cache = /* @__PURE__ */ new WeakMap();
    var measureBoundingSphere = (polygon) => {
      const boundingSphere = cache.get(polygon);
      if (boundingSphere) return boundingSphere;
      const vertices = polygon.vertices;
      const out = vec4.create();
      if (vertices.length === 0) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        return out;
      }
      let minx = vertices[0];
      let miny = minx;
      let minz = minx;
      let maxx = minx;
      let maxy = minx;
      let maxz = minx;
      vertices.forEach((v) => {
        if (minx[0] > v[0]) minx = v;
        if (miny[1] > v[1]) miny = v;
        if (minz[2] > v[2]) minz = v;
        if (maxx[0] < v[0]) maxx = v;
        if (maxy[1] < v[1]) maxy = v;
        if (maxz[2] < v[2]) maxz = v;
      });
      out[0] = (minx[0] + maxx[0]) * 0.5;
      out[1] = (miny[1] + maxy[1]) * 0.5;
      out[2] = (minz[2] + maxz[2]) * 0.5;
      const x = out[0] - maxx[0];
      const y = out[1] - maxy[1];
      const z = out[2] - maxz[2];
      out[3] = Math.sqrt(x * x + y * y + z * z);
      cache.set(polygon, out);
      return out;
    };
    module.exports = measureBoundingSphere;
  }
});

// node_modules/@jscad/modeling/src/geometries/poly3/measureSignedVolume.js
var require_measureSignedVolume = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/poly3/measureSignedVolume.js"(exports, module) {
    var vec3 = require_vec3();
    var measureSignedVolume = (polygon) => {
      let signedVolume = 0;
      const vertices = polygon.vertices;
      const cross = vec3.create();
      for (let i = 0; i < vertices.length - 2; i++) {
        vec3.cross(cross, vertices[i + 1], vertices[i + 2]);
        signedVolume += vec3.dot(vertices[0], cross);
      }
      signedVolume /= 6;
      return signedVolume;
    };
    module.exports = measureSignedVolume;
  }
});

// node_modules/@jscad/modeling/src/geometries/poly3/toPoints.js
var require_toPoints2 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/poly3/toPoints.js"(exports, module) {
    var toPoints = (polygon) => polygon.vertices;
    module.exports = toPoints;
  }
});

// node_modules/@jscad/modeling/src/geometries/poly3/toString.js
var require_toString6 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/poly3/toString.js"(exports, module) {
    var vec3 = require_vec3();
    var toString = (polygon) => {
      let result = "poly3: vertices: [";
      polygon.vertices.forEach((vertex) => {
        result += `${vec3.toString(vertex)}, `;
      });
      result += "]";
      return result;
    };
    module.exports = toString;
  }
});

// node_modules/@jscad/modeling/src/geometries/poly3/transform.js
var require_transform6 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/poly3/transform.js"(exports, module) {
    var mat4 = require_mat4();
    var vec3 = require_vec3();
    var create = require_create6();
    var transform = (matrix, polygon) => {
      const vertices = polygon.vertices.map((vertex) => vec3.transform(vec3.create(), vertex, matrix));
      if (mat4.isMirroring(matrix)) {
        vertices.reverse();
      }
      return create(vertices);
    };
    module.exports = transform;
  }
});

// node_modules/@jscad/modeling/src/geometries/poly3/validate.js
var require_validate2 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/poly3/validate.js"(exports, module) {
    var signedDistanceToPoint = require_signedDistanceToPoint();
    var { NEPS } = require_constants();
    var vec3 = require_vec3();
    var isA = require_isA2();
    var isConvex = require_isConvex();
    var measureArea = require_measureArea();
    var plane = require_plane2();
    var validate = (object) => {
      if (!isA(object)) {
        throw new Error("invalid poly3 structure");
      }
      if (object.vertices.length < 3) {
        throw new Error(`poly3 not enough vertices ${object.vertices.length}`);
      }
      if (measureArea(object) <= 0) {
        throw new Error("poly3 area must be greater than zero");
      }
      for (let i = 0; i < object.vertices.length; i++) {
        if (vec3.equals(object.vertices[i], object.vertices[(i + 1) % object.vertices.length])) {
          throw new Error(`poly3 duplicate vertex ${object.vertices[i]}`);
        }
      }
      if (!isConvex(object)) {
        throw new Error("poly3 must be convex");
      }
      object.vertices.forEach((vertex) => {
        if (!vertex.every(Number.isFinite)) {
          throw new Error(`poly3 invalid vertex ${vertex}`);
        }
      });
      if (object.vertices.length > 3) {
        const normal = plane(object);
        object.vertices.forEach((vertex) => {
          const dist = Math.abs(signedDistanceToPoint(normal, vertex));
          if (dist > NEPS) {
            throw new Error(`poly3 must be coplanar: vertex ${vertex} distance ${dist}`);
          }
        });
      }
    };
    module.exports = validate;
  }
});

// node_modules/@jscad/modeling/src/geometries/poly3/index.js
var require_poly3 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/poly3/index.js"(exports, module) {
    module.exports = {
      clone: require_clone6(),
      create: require_create6(),
      fromPoints: require_fromPoints2(),
      fromPointsAndPlane: require_fromPointsAndPlane(),
      invert: require_invert2(),
      isA: require_isA2(),
      isConvex: require_isConvex(),
      measureArea: require_measureArea(),
      measureBoundingBox: require_measureBoundingBox(),
      measureBoundingSphere: require_measureBoundingSphere(),
      measureSignedVolume: require_measureSignedVolume(),
      plane: require_plane2(),
      toPoints: require_toPoints2(),
      toString: require_toString6(),
      transform: require_transform6(),
      validate: require_validate2()
    };
  }
});

// node_modules/@jscad/modeling/src/geometries/geom3/fromPointsConvex.js
var require_fromPointsConvex = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/geom3/fromPointsConvex.js"(exports, module) {
    var quickhull = require_quickhull();
    var create = require_create5();
    var poly3 = require_poly3();
    var fromPointsConvex = (uniquePoints) => {
      if (!Array.isArray(uniquePoints)) {
        throw new Error("the given points must be an array");
      }
      const faces = quickhull(uniquePoints, { skipTriangulation: true });
      const polygons = faces.map((face) => {
        const vertices = face.map((index) => uniquePoints[index]);
        return poly3.create(vertices);
      });
      return create(polygons);
    };
    module.exports = fromPointsConvex;
  }
});

// node_modules/@jscad/modeling/src/geometries/geom3/fromPoints.js
var require_fromPoints4 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/geom3/fromPoints.js"(exports, module) {
    var poly3 = require_poly3();
    var create = require_create5();
    var fromPoints = (listofpoints) => {
      if (!Array.isArray(listofpoints)) {
        throw new Error("the given points must be an array");
      }
      const polygons = listofpoints.map((points, index) => {
        const polygon = poly3.create(points);
        return polygon;
      });
      const result = create(polygons);
      return result;
    };
    module.exports = fromPoints;
  }
});

// node_modules/@jscad/modeling/src/geometries/geom3/fromCompactBinary.js
var require_fromCompactBinary2 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/geom3/fromCompactBinary.js"(exports, module) {
    var vec3 = require_vec3();
    var mat4 = require_mat4();
    var poly3 = require_poly3();
    var create = require_create5();
    var fromCompactBinary = (data) => {
      if (data[0] !== 1) throw new Error("invalid compact binary data");
      const created = create();
      created.transforms = mat4.clone(data.slice(1, 17));
      const numberOfVertices = data[21];
      let ci = 22;
      let vi = data.length - numberOfVertices * 3;
      while (vi < data.length) {
        const verticesPerPolygon = data[ci];
        ci++;
        const vertices = [];
        for (let i = 0; i < verticesPerPolygon; i++) {
          vertices.push(vec3.fromValues(data[vi], data[vi + 1], data[vi + 2]));
          vi += 3;
        }
        created.polygons.push(poly3.create(vertices));
      }
      if (data[17] >= 0) {
        created.color = [data[17], data[18], data[19], data[20]];
      }
      return created;
    };
    module.exports = fromCompactBinary;
  }
});

// node_modules/@jscad/modeling/src/geometries/geom3/applyTransforms.js
var require_applyTransforms2 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/geom3/applyTransforms.js"(exports, module) {
    var mat4 = require_mat4();
    var poly3 = require_poly3();
    var applyTransforms = (geometry) => {
      if (mat4.isIdentity(geometry.transforms)) return geometry;
      geometry.polygons = geometry.polygons.map((polygon) => poly3.transform(geometry.transforms, polygon));
      geometry.transforms = mat4.create();
      return geometry;
    };
    module.exports = applyTransforms;
  }
});

// node_modules/@jscad/modeling/src/geometries/geom3/toPolygons.js
var require_toPolygons = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/geom3/toPolygons.js"(exports, module) {
    var applyTransforms = require_applyTransforms2();
    var toPolygons = (geometry) => applyTransforms(geometry).polygons;
    module.exports = toPolygons;
  }
});

// node_modules/@jscad/modeling/src/geometries/geom3/invert.js
var require_invert3 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/geom3/invert.js"(exports, module) {
    var poly3 = require_poly3();
    var create = require_create5();
    var toPolygons = require_toPolygons();
    var invert = (geometry) => {
      const polygons = toPolygons(geometry);
      const newpolygons = polygons.map((polygon) => poly3.invert(polygon));
      return create(newpolygons);
    };
    module.exports = invert;
  }
});

// node_modules/@jscad/modeling/src/geometries/geom3/isA.js
var require_isA3 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/geom3/isA.js"(exports, module) {
    var isA = (object) => {
      if (object && typeof object === "object") {
        if ("polygons" in object && "transforms" in object) {
          if (Array.isArray(object.polygons) && "length" in object.transforms) {
            return true;
          }
        }
      }
      return false;
    };
    module.exports = isA;
  }
});

// node_modules/@jscad/modeling/src/geometries/geom3/isConvex.js
var require_isConvex2 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/geom3/isConvex.js"(exports, module) {
    var { EPS } = require_constants();
    var vec3 = require_vec3();
    var geom3 = require_isA3();
    var toPolygons = require_toPolygons();
    var poly3 = require_poly3();
    var isConvex = (geometry) => {
      if (!geom3(geometry)) {
        throw new Error("isConvex requires a geom3 geometry");
      }
      const polygons = toPolygons(geometry);
      if (polygons.length === 0) {
        return true;
      }
      const vertices = [];
      const found = /* @__PURE__ */ new Set();
      for (let i = 0; i < polygons.length; i++) {
        const verts = polygons[i].vertices;
        for (let j = 0; j < verts.length; j++) {
          const v = verts[j];
          const key = `${v[0]},${v[1]},${v[2]}`;
          if (!found.has(key)) {
            found.add(key);
            vertices.push(v);
          }
        }
      }
      for (let i = 0; i < polygons.length; i++) {
        const plane = poly3.plane(polygons[i]);
        for (let j = 0; j < vertices.length; j++) {
          const v = vertices[j];
          const distance = vec3.dot(plane, v) - plane[3];
          if (distance > EPS) {
            return false;
          }
        }
      }
      return true;
    };
    module.exports = isConvex;
  }
});

// node_modules/@jscad/modeling/src/geometries/geom3/toPoints.js
var require_toPoints3 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/geom3/toPoints.js"(exports, module) {
    var poly3 = require_poly3();
    var toPolygons = require_toPolygons();
    var toPoints = (geometry) => {
      const polygons = toPolygons(geometry);
      const listofpoints = polygons.map((polygon) => poly3.toPoints(polygon));
      return listofpoints;
    };
    module.exports = toPoints;
  }
});

// node_modules/@jscad/modeling/src/geometries/geom3/toString.js
var require_toString7 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/geom3/toString.js"(exports, module) {
    var poly3 = require_poly3();
    var toPolygons = require_toPolygons();
    var toString = (geometry) => {
      const polygons = toPolygons(geometry);
      let result = "geom3 (" + polygons.length + " polygons):\n";
      polygons.forEach((polygon) => {
        result += "  " + poly3.toString(polygon) + "\n";
      });
      return result;
    };
    module.exports = toString;
  }
});

// node_modules/@jscad/modeling/src/geometries/geom3/toCompactBinary.js
var require_toCompactBinary2 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/geom3/toCompactBinary.js"(exports, module) {
    var poly3 = require_poly3();
    var toCompactBinary = (geometry) => {
      const polygons = geometry.polygons;
      const transforms3 = geometry.transforms;
      const numberOfPolygons = polygons.length;
      const numberOfVertices = polygons.reduce((count, polygon) => count + polygon.vertices.length, 0);
      let color = [-1, -1, -1, -1];
      if (geometry.color) color = geometry.color;
      const compacted = new Float32Array(1 + 16 + 4 + 1 + numberOfPolygons + numberOfVertices * 3);
      compacted[0] = 1;
      compacted[1] = transforms3[0];
      compacted[2] = transforms3[1];
      compacted[3] = transforms3[2];
      compacted[4] = transforms3[3];
      compacted[5] = transforms3[4];
      compacted[6] = transforms3[5];
      compacted[7] = transforms3[6];
      compacted[8] = transforms3[7];
      compacted[9] = transforms3[8];
      compacted[10] = transforms3[9];
      compacted[11] = transforms3[10];
      compacted[12] = transforms3[11];
      compacted[13] = transforms3[12];
      compacted[14] = transforms3[13];
      compacted[15] = transforms3[14];
      compacted[16] = transforms3[15];
      compacted[17] = color[0];
      compacted[18] = color[1];
      compacted[19] = color[2];
      compacted[20] = color[3];
      compacted[21] = numberOfVertices;
      let ci = 22;
      let vi = ci + numberOfPolygons;
      polygons.forEach((polygon) => {
        const points = poly3.toPoints(polygon);
        compacted[ci] = points.length;
        ci++;
        for (let i = 0; i < points.length; i++) {
          const point = points[i];
          compacted[vi + 0] = point[0];
          compacted[vi + 1] = point[1];
          compacted[vi + 2] = point[2];
          vi += 3;
        }
      });
      return compacted;
    };
    module.exports = toCompactBinary;
  }
});

// node_modules/@jscad/modeling/src/geometries/geom3/transform.js
var require_transform7 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/geom3/transform.js"(exports, module) {
    var mat4 = require_mat4();
    var transform = (matrix, geometry) => {
      const transforms3 = mat4.multiply(mat4.create(), matrix, geometry.transforms);
      return Object.assign({}, geometry, { transforms: transforms3 });
    };
    module.exports = transform;
  }
});

// node_modules/@jscad/modeling/src/geometries/geom3/validate.js
var require_validate3 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/geom3/validate.js"(exports, module) {
    var poly3 = require_poly3();
    var isA = require_isA3();
    var validate = (object) => {
      if (!isA(object)) {
        throw new Error("invalid geom3 structure");
      }
      object.polygons.forEach(poly3.validate);
      validateManifold(object);
      if (!object.transforms.every(Number.isFinite)) {
        throw new Error(`geom3 invalid transforms ${object.transforms}`);
      }
    };
    var validateManifold = (object) => {
      const edgeCount = /* @__PURE__ */ new Map();
      object.polygons.forEach(({ vertices }) => {
        vertices.forEach((v, i) => {
          const v1 = `${v}`;
          const v2 = `${vertices[(i + 1) % vertices.length]}`;
          const edge = `${v1}/${v2}`;
          const count = edgeCount.has(edge) ? edgeCount.get(edge) : 0;
          edgeCount.set(edge, count + 1);
        });
      });
      const nonManifold = [];
      edgeCount.forEach((count, edge) => {
        const complementEdge = edge.split("/").reverse().join("/");
        const complementCount = edgeCount.get(complementEdge);
        if (count !== complementCount) {
          nonManifold.push(edge.replace("/", " -> "));
        }
      });
      if (nonManifold.length > 0) {
        throw new Error(`non-manifold edges ${nonManifold.length}
${nonManifold.join("\n")}`);
      }
    };
    module.exports = validate;
  }
});

// node_modules/@jscad/modeling/src/geometries/geom3/index.js
var require_geom3 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/geom3/index.js"(exports, module) {
    module.exports = {
      clone: require_clone5(),
      create: require_create5(),
      fromPointsConvex: require_fromPointsConvex(),
      fromPoints: require_fromPoints4(),
      fromCompactBinary: require_fromCompactBinary2(),
      invert: require_invert3(),
      isA: require_isA3(),
      isConvex: require_isConvex2(),
      toPoints: require_toPoints3(),
      toPolygons: require_toPolygons(),
      toString: require_toString7(),
      toCompactBinary: require_toCompactBinary2(),
      transform: require_transform7(),
      validate: require_validate3()
    };
  }
});

// node_modules/@jscad/modeling/src/geometries/path2/clone.js
var require_clone8 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/path2/clone.js"(exports, module) {
    var clone = (geometry) => Object.assign({}, geometry);
    module.exports = clone;
  }
});

// node_modules/@jscad/modeling/src/geometries/path2/close.js
var require_close = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/path2/close.js"(exports, module) {
    var { EPS } = require_constants();
    var vec2 = require_vec2();
    var clone = require_clone8();
    var close = (geometry) => {
      if (geometry.isClosed) return geometry;
      const cloned = clone(geometry);
      cloned.isClosed = true;
      if (cloned.points.length > 1) {
        const points = cloned.points;
        const p0 = points[0];
        let pn = points[points.length - 1];
        while (vec2.distance(p0, pn) < EPS * EPS) {
          points.pop();
          if (points.length === 1) break;
          pn = points[points.length - 1];
        }
      }
      return cloned;
    };
    module.exports = close;
  }
});

// node_modules/@jscad/modeling/src/geometries/path2/create.js
var require_create8 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/path2/create.js"(exports, module) {
    var mat4 = require_mat4();
    var create = (points) => {
      if (points === void 0) {
        points = [];
      }
      return {
        points,
        isClosed: false,
        transforms: mat4.create()
      };
    };
    module.exports = create;
  }
});

// node_modules/@jscad/modeling/src/geometries/path2/fromPoints.js
var require_fromPoints5 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/path2/fromPoints.js"(exports, module) {
    var { EPS } = require_constants();
    var vec2 = require_vec2();
    var close = require_close();
    var create = require_create8();
    var fromPoints = (options, points) => {
      const defaults = { closed: false };
      let { closed } = Object.assign({}, defaults, options);
      let created = create();
      created.points = points.map((point) => vec2.clone(point));
      if (created.points.length > 1) {
        const p0 = created.points[0];
        const pn = created.points[created.points.length - 1];
        if (vec2.distance(p0, pn) < EPS * EPS) {
          closed = true;
        }
      }
      if (closed === true) created = close(created);
      return created;
    };
    module.exports = fromPoints;
  }
});

// node_modules/@jscad/modeling/src/geometries/path2/applyTransforms.js
var require_applyTransforms3 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/path2/applyTransforms.js"(exports, module) {
    var mat4 = require_mat4();
    var vec2 = require_vec2();
    var applyTransforms = (geometry) => {
      if (mat4.isIdentity(geometry.transforms)) return geometry;
      geometry.points = geometry.points.map((point) => vec2.transform(vec2.create(), point, geometry.transforms));
      geometry.transforms = mat4.create();
      return geometry;
    };
    module.exports = applyTransforms;
  }
});

// node_modules/@jscad/modeling/src/geometries/path2/toPoints.js
var require_toPoints4 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/path2/toPoints.js"(exports, module) {
    var applyTransforms = require_applyTransforms3();
    var toPoints = (geometry) => applyTransforms(geometry).points;
    module.exports = toPoints;
  }
});

// node_modules/@jscad/modeling/src/geometries/path2/appendArc.js
var require_appendArc = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/path2/appendArc.js"(exports, module) {
    var { TAU } = require_constants();
    var vec2 = require_vec2();
    var fromPoints = require_fromPoints5();
    var toPoints = require_toPoints4();
    var appendArc = (options, geometry) => {
      const defaults = {
        radius: [0, 0],
        // X and Y radius
        xaxisrotation: 0,
        clockwise: false,
        large: false,
        segments: 16
      };
      let { endpoint, radius, xaxisrotation, clockwise, large, segments } = Object.assign({}, defaults, options);
      if (!Array.isArray(endpoint)) throw new Error("endpoint must be an array of X and Y values");
      if (endpoint.length < 2) throw new Error("endpoint must contain X and Y values");
      endpoint = vec2.clone(endpoint);
      if (!Array.isArray(radius)) throw new Error("radius must be an array of X and Y values");
      if (radius.length < 2) throw new Error("radius must contain X and Y values");
      if (segments < 4) throw new Error("segments must be four or more");
      const decimals = 1e5;
      if (geometry.isClosed) {
        throw new Error("the given path cannot be closed");
      }
      const points = toPoints(geometry);
      if (points.length < 1) {
        throw new Error("the given path must contain one or more points (as the starting point for the arc)");
      }
      let xradius = radius[0];
      let yradius = radius[1];
      const startpoint = points[points.length - 1];
      xradius = Math.round(xradius * decimals) / decimals;
      yradius = Math.round(yradius * decimals) / decimals;
      endpoint = vec2.fromValues(Math.round(endpoint[0] * decimals) / decimals, Math.round(endpoint[1] * decimals) / decimals);
      const sweepFlag = !clockwise;
      let newpoints = [];
      if (xradius === 0 || yradius === 0) {
        newpoints.push(endpoint);
      } else {
        xradius = Math.abs(xradius);
        yradius = Math.abs(yradius);
        const phi = xaxisrotation;
        const cosphi = Math.cos(phi);
        const sinphi = Math.sin(phi);
        const minushalfdistance = vec2.subtract(vec2.create(), startpoint, endpoint);
        vec2.scale(minushalfdistance, minushalfdistance, 0.5);
        const x = Math.round((cosphi * minushalfdistance[0] + sinphi * minushalfdistance[1]) * decimals) / decimals;
        const y = Math.round((-sinphi * minushalfdistance[0] + cosphi * minushalfdistance[1]) * decimals) / decimals;
        const startTranslated = vec2.fromValues(x, y);
        const biglambda = startTranslated[0] * startTranslated[0] / (xradius * xradius) + startTranslated[1] * startTranslated[1] / (yradius * yradius);
        if (biglambda > 1) {
          const sqrtbiglambda = Math.sqrt(biglambda);
          xradius *= sqrtbiglambda;
          yradius *= sqrtbiglambda;
          xradius = Math.round(xradius * decimals) / decimals;
          yradius = Math.round(yradius * decimals) / decimals;
        }
        let multiplier1 = Math.sqrt((xradius * xradius * yradius * yradius - xradius * xradius * startTranslated[1] * startTranslated[1] - yradius * yradius * startTranslated[0] * startTranslated[0]) / (xradius * xradius * startTranslated[1] * startTranslated[1] + yradius * yradius * startTranslated[0] * startTranslated[0]));
        if (sweepFlag === large) multiplier1 = -multiplier1;
        const centerTranslated = vec2.fromValues(xradius * startTranslated[1] / yradius, -yradius * startTranslated[0] / xradius);
        vec2.scale(centerTranslated, centerTranslated, multiplier1);
        let center = vec2.fromValues(cosphi * centerTranslated[0] - sinphi * centerTranslated[1], sinphi * centerTranslated[0] + cosphi * centerTranslated[1]);
        center = vec2.add(center, center, vec2.scale(vec2.create(), vec2.add(vec2.create(), startpoint, endpoint), 0.5));
        const vector1 = vec2.fromValues((startTranslated[0] - centerTranslated[0]) / xradius, (startTranslated[1] - centerTranslated[1]) / yradius);
        const vector2 = vec2.fromValues((-startTranslated[0] - centerTranslated[0]) / xradius, (-startTranslated[1] - centerTranslated[1]) / yradius);
        const theta1 = vec2.angleRadians(vector1);
        const theta2 = vec2.angleRadians(vector2);
        let deltatheta = theta2 - theta1;
        deltatheta = deltatheta % TAU;
        if (!sweepFlag && deltatheta > 0) {
          deltatheta -= TAU;
        } else if (sweepFlag && deltatheta < 0) {
          deltatheta += TAU;
        }
        let numsteps = Math.floor(segments * (Math.abs(deltatheta) / TAU));
        if (numsteps < 1) numsteps = 1;
        for (let step = 1; step < numsteps; step++) {
          const theta = theta1 + step / numsteps * deltatheta;
          const costheta = Math.cos(theta);
          const sintheta = Math.sin(theta);
          const point = vec2.fromValues(cosphi * xradius * costheta - sinphi * yradius * sintheta, sinphi * xradius * costheta + cosphi * yradius * sintheta);
          vec2.add(point, point, center);
          newpoints.push(point);
        }
        if (numsteps) newpoints.push(options.endpoint);
      }
      newpoints = points.concat(newpoints);
      const result = fromPoints({}, newpoints);
      return result;
    };
    module.exports = appendArc;
  }
});

// node_modules/@jscad/modeling/src/geometries/path2/concat.js
var require_concat = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/path2/concat.js"(exports, module) {
    var fromPoints = require_fromPoints5();
    var toPoints = require_toPoints4();
    var { equals } = require_vec2();
    var concat = (...paths) => {
      let isClosed = false;
      let newpoints = [];
      paths.forEach((path, i) => {
        const tmp = toPoints(path).slice();
        if (newpoints.length > 0 && tmp.length > 0 && equals(tmp[0], newpoints[newpoints.length - 1])) tmp.shift();
        if (tmp.length > 0 && isClosed) {
          throw new Error(`Cannot concatenate to a closed path; check the ${i}th path`);
        }
        isClosed = path.isClosed;
        newpoints = newpoints.concat(tmp);
      });
      return fromPoints({ closed: isClosed }, newpoints);
    };
    module.exports = concat;
  }
});

// node_modules/@jscad/modeling/src/geometries/path2/appendPoints.js
var require_appendPoints = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/path2/appendPoints.js"(exports, module) {
    var concat = require_concat();
    var create = require_create8();
    var appendPoints = (points, geometry) => concat(geometry, create(points));
    module.exports = appendPoints;
  }
});

// node_modules/@jscad/modeling/src/geometries/path2/appendBezier.js
var require_appendBezier = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/path2/appendBezier.js"(exports, module) {
    var { TAU } = require_constants();
    var vec2 = require_vec2();
    var vec3 = require_vec2();
    var appendPoints = require_appendPoints();
    var toPoints = require_toPoints4();
    var appendBezier = (options, geometry) => {
      const defaults = {
        segments: 16
      };
      let { controlPoints, segments } = Object.assign({}, defaults, options);
      if (!Array.isArray(controlPoints)) throw new Error("controlPoints must be an array of one or more points");
      if (controlPoints.length < 1) throw new Error("controlPoints must be an array of one or more points");
      if (segments < 4) throw new Error("segments must be four or more");
      if (geometry.isClosed) {
        throw new Error("the given geometry cannot be closed");
      }
      const points = toPoints(geometry);
      if (points.length < 1) {
        throw new Error("the given path must contain one or more points (as the starting point for the bezier curve)");
      }
      controlPoints = controlPoints.slice();
      const firstControlPoint = controlPoints[0];
      if (firstControlPoint === null) {
        if (controlPoints.length < 2) {
          throw new Error("a null control point must be passed with one more control points");
        }
        let lastBezierControlPoint = points[points.length - 2];
        if ("lastBezierControlPoint" in geometry) {
          lastBezierControlPoint = geometry.lastBezierControlPoint;
        }
        if (!Array.isArray(lastBezierControlPoint)) {
          throw new Error("the given path must contain TWO or more points if given a null control point");
        }
        const controlpoint = vec2.scale(vec2.create(), points[points.length - 1], 2);
        vec2.subtract(controlpoint, controlpoint, lastBezierControlPoint);
        controlPoints[0] = controlpoint;
      }
      controlPoints.unshift(points[points.length - 1]);
      const bezierOrder = controlPoints.length - 1;
      const factorials = [];
      let fact = 1;
      for (let i = 0; i <= bezierOrder; ++i) {
        if (i > 0) fact *= i;
        factorials.push(fact);
      }
      const binomials = [];
      for (let i = 0; i <= bezierOrder; ++i) {
        const binomial = factorials[bezierOrder] / (factorials[i] * factorials[bezierOrder - i]);
        binomials.push(binomial);
      }
      const v0 = vec2.create();
      const v1 = vec2.create();
      const v3 = vec3.create();
      const getPointForT = (t) => {
        let tk = 1;
        let oneMinusTNMinusK = Math.pow(1 - t, bezierOrder);
        const invOneMinusT = t !== 1 ? 1 / (1 - t) : 1;
        const point = vec2.create();
        for (let k = 0; k <= bezierOrder; ++k) {
          if (k === bezierOrder) oneMinusTNMinusK = 1;
          const bernsteinCoefficient = binomials[k] * tk * oneMinusTNMinusK;
          const derivativePoint = vec2.scale(v0, controlPoints[k], bernsteinCoefficient);
          vec2.add(point, point, derivativePoint);
          tk *= t;
          oneMinusTNMinusK *= invOneMinusT;
        }
        return point;
      };
      const newpoints = [];
      const newpointsT = [];
      const numsteps = bezierOrder + 1;
      for (let i = 0; i < numsteps; ++i) {
        const t = i / (numsteps - 1);
        const point = getPointForT(t);
        newpoints.push(point);
        newpointsT.push(t);
      }
      let subdivideBase = 1;
      const maxangle = TAU / segments;
      const maxsinangle = Math.sin(maxangle);
      while (subdivideBase < newpoints.length - 1) {
        const dir1 = vec2.subtract(v0, newpoints[subdivideBase], newpoints[subdivideBase - 1]);
        vec2.normalize(dir1, dir1);
        const dir2 = vec2.subtract(v1, newpoints[subdivideBase + 1], newpoints[subdivideBase]);
        vec2.normalize(dir2, dir2);
        const sinangle = vec2.cross(v3, dir1, dir2);
        if (Math.abs(sinangle[2]) > maxsinangle) {
          const t0 = newpointsT[subdivideBase - 1];
          const t1 = newpointsT[subdivideBase + 1];
          const newt0 = t0 + (t1 - t0) * 1 / 3;
          const newt1 = t0 + (t1 - t0) * 2 / 3;
          const point0 = getPointForT(newt0);
          const point1 = getPointForT(newt1);
          newpoints.splice(subdivideBase, 1, point0, point1);
          newpointsT.splice(subdivideBase, 1, newt0, newt1);
          subdivideBase--;
          if (subdivideBase < 1) subdivideBase = 1;
        } else {
          ++subdivideBase;
        }
      }
      newpoints.shift();
      const result = appendPoints(newpoints, geometry);
      result.lastBezierControlPoint = controlPoints[controlPoints.length - 2];
      return result;
    };
    module.exports = appendBezier;
  }
});

// node_modules/@jscad/modeling/src/geometries/path2/equals.js
var require_equals5 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/path2/equals.js"(exports, module) {
    var vec2 = require_vec2();
    var toPoints = require_toPoints4();
    var equals = (a, b) => {
      if (a.isClosed !== b.isClosed) {
        return false;
      }
      if (a.points.length !== b.points.length) {
        return false;
      }
      const apoints = toPoints(a);
      const bpoints = toPoints(b);
      const length = apoints.length;
      let offset = 0;
      do {
        let unequal = false;
        for (let i = 0; i < length; i++) {
          if (!vec2.equals(apoints[i], bpoints[(i + offset) % length])) {
            unequal = true;
            break;
          }
        }
        if (unequal === false) {
          return true;
        }
        if (!a.isClosed) {
          return false;
        }
      } while (++offset < length);
      return false;
    };
    module.exports = equals;
  }
});

// node_modules/@jscad/modeling/src/geometries/path2/fromCompactBinary.js
var require_fromCompactBinary3 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/path2/fromCompactBinary.js"(exports, module) {
    var mat4 = require_mat4();
    var vec2 = require_vec2();
    var create = require_create8();
    var fromCompactBinary = (data) => {
      if (data[0] !== 2) throw new Error("invalid compact binary data");
      const created = create();
      created.transforms = mat4.clone(data.slice(1, 17));
      created.isClosed = !!data[17];
      for (let i = 22; i < data.length; i += 2) {
        const point = vec2.fromValues(data[i], data[i + 1]);
        created.points.push(point);
      }
      if (data[18] >= 0) {
        created.color = [data[18], data[19], data[20], data[21]];
      }
      return created;
    };
    module.exports = fromCompactBinary;
  }
});

// node_modules/@jscad/modeling/src/geometries/path2/isA.js
var require_isA4 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/path2/isA.js"(exports, module) {
    var isA = (object) => {
      if (object && typeof object === "object") {
        if ("points" in object && "transforms" in object && "isClosed" in object) {
          if (Array.isArray(object.points) && "length" in object.transforms) {
            return true;
          }
        }
      }
      return false;
    };
    module.exports = isA;
  }
});

// node_modules/@jscad/modeling/src/geometries/path2/reverse.js
var require_reverse2 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/path2/reverse.js"(exports, module) {
    var clone = require_clone8();
    var reverse = (geometry) => {
      const cloned = clone(geometry);
      cloned.points = geometry.points.slice().reverse();
      return cloned;
    };
    module.exports = reverse;
  }
});

// node_modules/@jscad/modeling/src/geometries/path2/toString.js
var require_toString8 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/path2/toString.js"(exports, module) {
    var vec2 = require_vec2();
    var toPoints = require_toPoints4();
    var toString = (geometry) => {
      const points = toPoints(geometry);
      let result = "path (" + points.length + " points, " + geometry.isClosed + "):\n[\n";
      points.forEach((point) => {
        result += "  " + vec2.toString(point) + ",\n";
      });
      result += "]\n";
      return result;
    };
    module.exports = toString;
  }
});

// node_modules/@jscad/modeling/src/geometries/path2/toCompactBinary.js
var require_toCompactBinary3 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/path2/toCompactBinary.js"(exports, module) {
    var toCompactBinary = (geometry) => {
      const points = geometry.points;
      const transforms3 = geometry.transforms;
      let color = [-1, -1, -1, -1];
      if (geometry.color) color = geometry.color;
      const compacted = new Float32Array(1 + 16 + 1 + 4 + points.length * 2);
      compacted[0] = 2;
      compacted[1] = transforms3[0];
      compacted[2] = transforms3[1];
      compacted[3] = transforms3[2];
      compacted[4] = transforms3[3];
      compacted[5] = transforms3[4];
      compacted[6] = transforms3[5];
      compacted[7] = transforms3[6];
      compacted[8] = transforms3[7];
      compacted[9] = transforms3[8];
      compacted[10] = transforms3[9];
      compacted[11] = transforms3[10];
      compacted[12] = transforms3[11];
      compacted[13] = transforms3[12];
      compacted[14] = transforms3[13];
      compacted[15] = transforms3[14];
      compacted[16] = transforms3[15];
      compacted[17] = geometry.isClosed ? 1 : 0;
      compacted[18] = color[0];
      compacted[19] = color[1];
      compacted[20] = color[2];
      compacted[21] = color[3];
      for (let j = 0; j < points.length; j++) {
        const ci = j * 2 + 22;
        const point = points[j];
        compacted[ci] = point[0];
        compacted[ci + 1] = point[1];
      }
      return compacted;
    };
    module.exports = toCompactBinary;
  }
});

// node_modules/@jscad/modeling/src/geometries/path2/transform.js
var require_transform8 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/path2/transform.js"(exports, module) {
    var mat4 = require_mat4();
    var transform = (matrix, geometry) => {
      const transforms3 = mat4.multiply(mat4.create(), matrix, geometry.transforms);
      return Object.assign({}, geometry, { transforms: transforms3 });
    };
    module.exports = transform;
  }
});

// node_modules/@jscad/modeling/src/geometries/path2/validate.js
var require_validate4 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/path2/validate.js"(exports, module) {
    var vec2 = require_vec2();
    var isA = require_isA4();
    var validate = (object) => {
      if (!isA(object)) {
        throw new Error("invalid path2 structure");
      }
      if (object.points.length > 1) {
        for (let i = 0; i < object.points.length; i++) {
          if (vec2.equals(object.points[i], object.points[(i + 1) % object.points.length])) {
            throw new Error(`path2 duplicate points ${object.points[i]}`);
          }
        }
      }
      object.points.forEach((point) => {
        if (!point.every(Number.isFinite)) {
          throw new Error(`path2 invalid point ${point}`);
        }
      });
      if (!object.transforms.every(Number.isFinite)) {
        throw new Error(`path2 invalid transforms ${object.transforms}`);
      }
    };
    module.exports = validate;
  }
});

// node_modules/@jscad/modeling/src/geometries/path2/index.js
var require_path2 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/path2/index.js"(exports, module) {
    module.exports = {
      appendArc: require_appendArc(),
      appendBezier: require_appendBezier(),
      appendPoints: require_appendPoints(),
      clone: require_clone8(),
      close: require_close(),
      concat: require_concat(),
      create: require_create8(),
      equals: require_equals5(),
      fromPoints: require_fromPoints5(),
      fromCompactBinary: require_fromCompactBinary3(),
      isA: require_isA4(),
      reverse: require_reverse2(),
      toPoints: require_toPoints4(),
      toString: require_toString8(),
      toCompactBinary: require_toCompactBinary3(),
      transform: require_transform8(),
      validate: require_validate4()
    };
  }
});

// node_modules/@jscad/modeling/src/colors/colorize.js
var require_colorize = __commonJS({
  "node_modules/@jscad/modeling/src/colors/colorize.js"(exports, module) {
    var flatten = require_flatten();
    var geom2 = require_geom2();
    var geom3 = require_geom3();
    var path2 = require_path2();
    var poly3 = require_poly3();
    var colorGeom2 = (color, object) => {
      const newgeom2 = geom2.clone(object);
      newgeom2.color = color;
      return newgeom2;
    };
    var colorGeom3 = (color, object) => {
      const newgeom3 = geom3.clone(object);
      newgeom3.color = color;
      return newgeom3;
    };
    var colorPath2 = (color, object) => {
      const newpath2 = path2.clone(object);
      newpath2.color = color;
      return newpath2;
    };
    var colorPoly3 = (color, object) => {
      const newpoly = poly3.clone(object);
      newpoly.color = color;
      return newpoly;
    };
    var colorize = (color, ...objects) => {
      if (!Array.isArray(color)) throw new Error("color must be an array");
      if (color.length < 3) throw new Error("color must contain R, G and B values");
      if (color.length === 3) color = [color[0], color[1], color[2], 1];
      objects = flatten(objects);
      if (objects.length === 0) throw new Error("wrong number of arguments");
      const results = objects.map((object) => {
        if (geom2.isA(object)) return colorGeom2(color, object);
        if (geom3.isA(object)) return colorGeom3(color, object);
        if (path2.isA(object)) return colorPath2(color, object);
        if (poly3.isA(object)) return colorPoly3(color, object);
        object.color = color;
        return object;
      });
      return results.length === 1 ? results[0] : results;
    };
    module.exports = colorize;
  }
});

// node_modules/@jscad/modeling/src/colors/cssColors.js
var require_cssColors = __commonJS({
  "node_modules/@jscad/modeling/src/colors/cssColors.js"(exports, module) {
    var cssColors = {
      // basic color keywords
      black: [0 / 255, 0 / 255, 0 / 255],
      silver: [192 / 255, 192 / 255, 192 / 255],
      gray: [128 / 255, 128 / 255, 128 / 255],
      white: [255 / 255, 255 / 255, 255 / 255],
      maroon: [128 / 255, 0 / 255, 0 / 255],
      red: [255 / 255, 0 / 255, 0 / 255],
      purple: [128 / 255, 0 / 255, 128 / 255],
      fuchsia: [255 / 255, 0 / 255, 255 / 255],
      green: [0 / 255, 128 / 255, 0 / 255],
      lime: [0 / 255, 255 / 255, 0 / 255],
      olive: [128 / 255, 128 / 255, 0 / 255],
      yellow: [255 / 255, 255 / 255, 0 / 255],
      navy: [0 / 255, 0 / 255, 128 / 255],
      blue: [0 / 255, 0 / 255, 255 / 255],
      teal: [0 / 255, 128 / 255, 128 / 255],
      aqua: [0 / 255, 255 / 255, 255 / 255],
      // extended color keywords
      aliceblue: [240 / 255, 248 / 255, 255 / 255],
      antiquewhite: [250 / 255, 235 / 255, 215 / 255],
      // 'aqua': [ 0 / 255, 255 / 255, 255 / 255 ],
      aquamarine: [127 / 255, 255 / 255, 212 / 255],
      azure: [240 / 255, 255 / 255, 255 / 255],
      beige: [245 / 255, 245 / 255, 220 / 255],
      bisque: [255 / 255, 228 / 255, 196 / 255],
      // 'black': [ 0 / 255, 0 / 255, 0 / 255 ],
      blanchedalmond: [255 / 255, 235 / 255, 205 / 255],
      // 'blue': [ 0 / 255, 0 / 255, 255 / 255 ],
      blueviolet: [138 / 255, 43 / 255, 226 / 255],
      brown: [165 / 255, 42 / 255, 42 / 255],
      burlywood: [222 / 255, 184 / 255, 135 / 255],
      cadetblue: [95 / 255, 158 / 255, 160 / 255],
      chartreuse: [127 / 255, 255 / 255, 0 / 255],
      chocolate: [210 / 255, 105 / 255, 30 / 255],
      coral: [255 / 255, 127 / 255, 80 / 255],
      cornflowerblue: [100 / 255, 149 / 255, 237 / 255],
      cornsilk: [255 / 255, 248 / 255, 220 / 255],
      crimson: [220 / 255, 20 / 255, 60 / 255],
      cyan: [0 / 255, 255 / 255, 255 / 255],
      darkblue: [0 / 255, 0 / 255, 139 / 255],
      darkcyan: [0 / 255, 139 / 255, 139 / 255],
      darkgoldenrod: [184 / 255, 134 / 255, 11 / 255],
      darkgray: [169 / 255, 169 / 255, 169 / 255],
      darkgreen: [0 / 255, 100 / 255, 0 / 255],
      darkgrey: [169 / 255, 169 / 255, 169 / 255],
      darkkhaki: [189 / 255, 183 / 255, 107 / 255],
      darkmagenta: [139 / 255, 0 / 255, 139 / 255],
      darkolivegreen: [85 / 255, 107 / 255, 47 / 255],
      darkorange: [255 / 255, 140 / 255, 0 / 255],
      darkorchid: [153 / 255, 50 / 255, 204 / 255],
      darkred: [139 / 255, 0 / 255, 0 / 255],
      darksalmon: [233 / 255, 150 / 255, 122 / 255],
      darkseagreen: [143 / 255, 188 / 255, 143 / 255],
      darkslateblue: [72 / 255, 61 / 255, 139 / 255],
      darkslategray: [47 / 255, 79 / 255, 79 / 255],
      darkslategrey: [47 / 255, 79 / 255, 79 / 255],
      darkturquoise: [0 / 255, 206 / 255, 209 / 255],
      darkviolet: [148 / 255, 0 / 255, 211 / 255],
      deeppink: [255 / 255, 20 / 255, 147 / 255],
      deepskyblue: [0 / 255, 191 / 255, 255 / 255],
      dimgray: [105 / 255, 105 / 255, 105 / 255],
      dimgrey: [105 / 255, 105 / 255, 105 / 255],
      dodgerblue: [30 / 255, 144 / 255, 255 / 255],
      firebrick: [178 / 255, 34 / 255, 34 / 255],
      floralwhite: [255 / 255, 250 / 255, 240 / 255],
      forestgreen: [34 / 255, 139 / 255, 34 / 255],
      // 'fuchsia': [ 255 / 255, 0 / 255, 255 / 255 ],
      gainsboro: [220 / 255, 220 / 255, 220 / 255],
      ghostwhite: [248 / 255, 248 / 255, 255 / 255],
      gold: [255 / 255, 215 / 255, 0 / 255],
      goldenrod: [218 / 255, 165 / 255, 32 / 255],
      // 'gray': [ 128 / 255, 128 / 255, 128 / 255 ],
      // 'green': [ 0 / 255, 128 / 255, 0 / 255 ],
      greenyellow: [173 / 255, 255 / 255, 47 / 255],
      grey: [128 / 255, 128 / 255, 128 / 255],
      honeydew: [240 / 255, 255 / 255, 240 / 255],
      hotpink: [255 / 255, 105 / 255, 180 / 255],
      indianred: [205 / 255, 92 / 255, 92 / 255],
      indigo: [75 / 255, 0 / 255, 130 / 255],
      ivory: [255 / 255, 255 / 255, 240 / 255],
      khaki: [240 / 255, 230 / 255, 140 / 255],
      lavender: [230 / 255, 230 / 255, 250 / 255],
      lavenderblush: [255 / 255, 240 / 255, 245 / 255],
      lawngreen: [124 / 255, 252 / 255, 0 / 255],
      lemonchiffon: [255 / 255, 250 / 255, 205 / 255],
      lightblue: [173 / 255, 216 / 255, 230 / 255],
      lightcoral: [240 / 255, 128 / 255, 128 / 255],
      lightcyan: [224 / 255, 255 / 255, 255 / 255],
      lightgoldenrodyellow: [250 / 255, 250 / 255, 210 / 255],
      lightgray: [211 / 255, 211 / 255, 211 / 255],
      lightgreen: [144 / 255, 238 / 255, 144 / 255],
      lightgrey: [211 / 255, 211 / 255, 211 / 255],
      lightpink: [255 / 255, 182 / 255, 193 / 255],
      lightsalmon: [255 / 255, 160 / 255, 122 / 255],
      lightseagreen: [32 / 255, 178 / 255, 170 / 255],
      lightskyblue: [135 / 255, 206 / 255, 250 / 255],
      lightslategray: [119 / 255, 136 / 255, 153 / 255],
      lightslategrey: [119 / 255, 136 / 255, 153 / 255],
      lightsteelblue: [176 / 255, 196 / 255, 222 / 255],
      lightyellow: [255 / 255, 255 / 255, 224 / 255],
      // 'lime': [ 0 / 255, 255 / 255, 0 / 255 ],
      limegreen: [50 / 255, 205 / 255, 50 / 255],
      linen: [250 / 255, 240 / 255, 230 / 255],
      magenta: [255 / 255, 0 / 255, 255 / 255],
      // 'maroon': [ 128 / 255, 0 / 255, 0 / 255 ],
      mediumaquamarine: [102 / 255, 205 / 255, 170 / 255],
      mediumblue: [0 / 255, 0 / 255, 205 / 255],
      mediumorchid: [186 / 255, 85 / 255, 211 / 255],
      mediumpurple: [147 / 255, 112 / 255, 219 / 255],
      mediumseagreen: [60 / 255, 179 / 255, 113 / 255],
      mediumslateblue: [123 / 255, 104 / 255, 238 / 255],
      mediumspringgreen: [0 / 255, 250 / 255, 154 / 255],
      mediumturquoise: [72 / 255, 209 / 255, 204 / 255],
      mediumvioletred: [199 / 255, 21 / 255, 133 / 255],
      midnightblue: [25 / 255, 25 / 255, 112 / 255],
      mintcream: [245 / 255, 255 / 255, 250 / 255],
      mistyrose: [255 / 255, 228 / 255, 225 / 255],
      moccasin: [255 / 255, 228 / 255, 181 / 255],
      navajowhite: [255 / 255, 222 / 255, 173 / 255],
      // 'navy': [ 0 / 255, 0 / 255, 128 / 255 ],
      oldlace: [253 / 255, 245 / 255, 230 / 255],
      // 'olive': [ 128 / 255, 128 / 255, 0 / 255 ],
      olivedrab: [107 / 255, 142 / 255, 35 / 255],
      orange: [255 / 255, 165 / 255, 0 / 255],
      orangered: [255 / 255, 69 / 255, 0 / 255],
      orchid: [218 / 255, 112 / 255, 214 / 255],
      palegoldenrod: [238 / 255, 232 / 255, 170 / 255],
      palegreen: [152 / 255, 251 / 255, 152 / 255],
      paleturquoise: [175 / 255, 238 / 255, 238 / 255],
      palevioletred: [219 / 255, 112 / 255, 147 / 255],
      papayawhip: [255 / 255, 239 / 255, 213 / 255],
      peachpuff: [255 / 255, 218 / 255, 185 / 255],
      peru: [205 / 255, 133 / 255, 63 / 255],
      pink: [255 / 255, 192 / 255, 203 / 255],
      plum: [221 / 255, 160 / 255, 221 / 255],
      powderblue: [176 / 255, 224 / 255, 230 / 255],
      // 'purple': [ 128 / 255, 0 / 255, 128 / 255 ],
      // 'red': [ 255 / 255, 0 / 255, 0 / 255 ],
      rosybrown: [188 / 255, 143 / 255, 143 / 255],
      royalblue: [65 / 255, 105 / 255, 225 / 255],
      saddlebrown: [139 / 255, 69 / 255, 19 / 255],
      salmon: [250 / 255, 128 / 255, 114 / 255],
      sandybrown: [244 / 255, 164 / 255, 96 / 255],
      seagreen: [46 / 255, 139 / 255, 87 / 255],
      seashell: [255 / 255, 245 / 255, 238 / 255],
      sienna: [160 / 255, 82 / 255, 45 / 255],
      // 'silver': [ 192 / 255, 192 / 255, 192 / 255 ],
      skyblue: [135 / 255, 206 / 255, 235 / 255],
      slateblue: [106 / 255, 90 / 255, 205 / 255],
      slategray: [112 / 255, 128 / 255, 144 / 255],
      slategrey: [112 / 255, 128 / 255, 144 / 255],
      snow: [255 / 255, 250 / 255, 250 / 255],
      springgreen: [0 / 255, 255 / 255, 127 / 255],
      steelblue: [70 / 255, 130 / 255, 180 / 255],
      tan: [210 / 255, 180 / 255, 140 / 255],
      // 'teal': [ 0 / 255, 128 / 255, 128 / 255 ],
      thistle: [216 / 255, 191 / 255, 216 / 255],
      tomato: [255 / 255, 99 / 255, 71 / 255],
      turquoise: [64 / 255, 224 / 255, 208 / 255],
      violet: [238 / 255, 130 / 255, 238 / 255],
      wheat: [245 / 255, 222 / 255, 179 / 255],
      // 'white': [ 255 / 255, 255 / 255, 255 / 255 ],
      whitesmoke: [245 / 255, 245 / 255, 245 / 255],
      // 'yellow': [ 255 / 255, 255 / 255, 0 / 255 ],
      yellowgreen: [154 / 255, 205 / 255, 50 / 255]
    };
    module.exports = cssColors;
  }
});

// node_modules/@jscad/modeling/src/colors/colorNameToRgb.js
var require_colorNameToRgb = __commonJS({
  "node_modules/@jscad/modeling/src/colors/colorNameToRgb.js"(exports, module) {
    var cssColors = require_cssColors();
    var colorNameToRgb = (s) => cssColors[s.toLowerCase()];
    module.exports = colorNameToRgb;
  }
});

// node_modules/@jscad/modeling/src/colors/hexToRgb.js
var require_hexToRgb = __commonJS({
  "node_modules/@jscad/modeling/src/colors/hexToRgb.js"(exports, module) {
    var hexToRgb = (notation) => {
      notation = notation.replace("#", "");
      if (notation.length < 6) throw new Error("the given notation must contain 3 or more hex values");
      const r = parseInt(notation.substring(0, 2), 16) / 255;
      const g = parseInt(notation.substring(2, 4), 16) / 255;
      const b = parseInt(notation.substring(4, 6), 16) / 255;
      if (notation.length >= 8) {
        const a = parseInt(notation.substring(6, 8), 16) / 255;
        return [r, g, b, a];
      }
      return [r, g, b];
    };
    module.exports = hexToRgb;
  }
});

// node_modules/@jscad/modeling/src/colors/hueToColorComponent.js
var require_hueToColorComponent = __commonJS({
  "node_modules/@jscad/modeling/src/colors/hueToColorComponent.js"(exports, module) {
    var hueToColorComponent = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    module.exports = hueToColorComponent;
  }
});

// node_modules/@jscad/modeling/src/colors/hslToRgb.js
var require_hslToRgb = __commonJS({
  "node_modules/@jscad/modeling/src/colors/hslToRgb.js"(exports, module) {
    var flatten = require_flatten();
    var hueToColorComponent = require_hueToColorComponent();
    var hslToRgb = (...values) => {
      values = flatten(values);
      if (values.length < 3) throw new Error("values must contain H, S and L values");
      const h = values[0];
      const s = values[1];
      const l = values[2];
      let r = l;
      let g = l;
      let b = l;
      if (s !== 0) {
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hueToColorComponent(p, q, h + 1 / 3);
        g = hueToColorComponent(p, q, h);
        b = hueToColorComponent(p, q, h - 1 / 3);
      }
      if (values.length > 3) {
        const a = values[3];
        return [r, g, b, a];
      }
      return [r, g, b];
    };
    module.exports = hslToRgb;
  }
});

// node_modules/@jscad/modeling/src/colors/hsvToRgb.js
var require_hsvToRgb = __commonJS({
  "node_modules/@jscad/modeling/src/colors/hsvToRgb.js"(exports, module) {
    var flatten = require_flatten();
    var hsvToRgb = (...values) => {
      values = flatten(values);
      if (values.length < 3) throw new Error("values must contain H, S and V values");
      const h = values[0];
      const s = values[1];
      const v = values[2];
      let r = 0;
      let g = 0;
      let b = 0;
      const i = Math.floor(h * 6);
      const f = h * 6 - i;
      const p = v * (1 - s);
      const q = v * (1 - f * s);
      const t = v * (1 - (1 - f) * s);
      switch (i % 6) {
        case 0:
          r = v;
          g = t;
          b = p;
          break;
        case 1:
          r = q;
          g = v;
          b = p;
          break;
        case 2:
          r = p;
          g = v;
          b = t;
          break;
        case 3:
          r = p;
          g = q;
          b = v;
          break;
        case 4:
          r = t;
          g = p;
          b = v;
          break;
        case 5:
          r = v;
          g = p;
          b = q;
          break;
      }
      if (values.length > 3) {
        const a = values[3];
        return [r, g, b, a];
      }
      return [r, g, b];
    };
    module.exports = hsvToRgb;
  }
});

// node_modules/@jscad/modeling/src/colors/rgbToHex.js
var require_rgbToHex = __commonJS({
  "node_modules/@jscad/modeling/src/colors/rgbToHex.js"(exports, module) {
    var flatten = require_flatten();
    var rgbToHex = (...values) => {
      values = flatten(values);
      if (values.length < 3) throw new Error("values must contain R, G and B values");
      const r = values[0] * 255;
      const g = values[1] * 255;
      const b = values[2] * 255;
      let s = `#${Number(16777216 + r * 65536 + g * 256 + b).toString(16).substring(1, 7)}`;
      if (values.length > 3) {
        s = s + Number(values[3] * 255).toString(16);
      }
      return s;
    };
    module.exports = rgbToHex;
  }
});

// node_modules/@jscad/modeling/src/colors/rgbToHsl.js
var require_rgbToHsl = __commonJS({
  "node_modules/@jscad/modeling/src/colors/rgbToHsl.js"(exports, module) {
    var flatten = require_flatten();
    var rgbToHsl = (...values) => {
      values = flatten(values);
      if (values.length < 3) throw new Error("values must contain R, G and B values");
      const r = values[0];
      const g = values[1];
      const b = values[2];
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      let h;
      let s;
      const l = (max + min) / 2;
      if (max === min) {
        h = s = 0;
      } else {
        const d = max - min;
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
      if (values.length > 3) {
        const a = values[3];
        return [h, s, l, a];
      }
      return [h, s, l];
    };
    module.exports = rgbToHsl;
  }
});

// node_modules/@jscad/modeling/src/colors/rgbToHsv.js
var require_rgbToHsv = __commonJS({
  "node_modules/@jscad/modeling/src/colors/rgbToHsv.js"(exports, module) {
    var flatten = require_flatten();
    var rgbToHsv = (...values) => {
      values = flatten(values);
      if (values.length < 3) throw new Error("values must contain R, G and B values");
      const r = values[0];
      const g = values[1];
      const b = values[2];
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      let h;
      const v = max;
      const d = max - min;
      const s = max === 0 ? 0 : d / max;
      if (max === min) {
        h = 0;
      } else {
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
      if (values.length > 3) {
        const a = values[3];
        return [h, s, v, a];
      }
      return [h, s, v];
    };
    module.exports = rgbToHsv;
  }
});

// node_modules/@jscad/modeling/src/colors/index.js
var require_colors = __commonJS({
  "node_modules/@jscad/modeling/src/colors/index.js"(exports, module) {
    module.exports = {
      colorize: require_colorize(),
      colorNameToRgb: require_colorNameToRgb(),
      cssColors: require_cssColors(),
      hexToRgb: require_hexToRgb(),
      hslToRgb: require_hslToRgb(),
      hsvToRgb: require_hsvToRgb(),
      hueToColorComponent: require_hueToColorComponent(),
      rgbToHex: require_rgbToHex(),
      rgbToHsl: require_rgbToHsl(),
      rgbToHsv: require_rgbToHsv()
    };
  }
});

// node_modules/@jscad/modeling/src/curves/bezier/create.js
var require_create9 = __commonJS({
  "node_modules/@jscad/modeling/src/curves/bezier/create.js"(exports, module) {
    var create = (points) => {
      if (!Array.isArray(points)) throw new Error("Bezier points must be a valid array/");
      if (points.length < 2) throw new Error("Bezier points must contain at least 2 values.");
      const pointType = getPointType(points);
      return {
        points,
        pointType,
        dimensions: pointType === "float_single" ? 0 : points[0].length,
        permutations: getPermutations(points.length - 1),
        tangentPermutations: getPermutations(points.length - 2)
      };
    };
    var getPointType = function(points) {
      let firstPointType = null;
      points.forEach((point) => {
        let pType = "";
        if (Number.isFinite(point)) {
          pType = "float_single";
        } else if (Array.isArray(point)) {
          point.forEach((val) => {
            if (!Number.isFinite(val)) throw new Error("Bezier point values must all be numbers.");
          });
          pType = "float_" + point.length;
        } else throw new Error("Bezier points must all be numbers or arrays of number.");
        if (firstPointType == null) {
          firstPointType = pType;
        } else {
          if (firstPointType !== pType) {
            throw new Error("Bezier points must be either all numbers or all arrays of numbers of the same size.");
          }
        }
      });
      return firstPointType;
    };
    var getPermutations = function(c) {
      const permutations = [];
      for (let i = 0; i <= c; i++) {
        permutations.push(factorial(c) / (factorial(i) * factorial(c - i)));
      }
      return permutations;
    };
    var factorial = function(b) {
      let out = 1;
      for (let i = 2; i <= b; i++) {
        out *= i;
      }
      return out;
    };
    module.exports = create;
  }
});

// node_modules/@jscad/modeling/src/curves/bezier/valueAt.js
var require_valueAt = __commonJS({
  "node_modules/@jscad/modeling/src/curves/bezier/valueAt.js"(exports, module) {
    var valueAt = (t, bezier) => {
      if (t < 0 || t > 1) {
        throw new Error("Bezier valueAt() input must be between 0 and 1");
      }
      if (bezier.pointType === "float_single") {
        return bezierFunction(bezier, bezier.points, t);
      } else {
        const result = [];
        for (let i = 0; i < bezier.dimensions; i++) {
          const singleDimensionPoints = [];
          for (let j = 0; j < bezier.points.length; j++) {
            singleDimensionPoints.push(bezier.points[j][i]);
          }
          result.push(bezierFunction(bezier, singleDimensionPoints, t));
        }
        return result;
      }
    };
    var bezierFunction = function(bezier, p, t) {
      const n = p.length - 1;
      let result = 0;
      for (let i = 0; i <= n; i++) {
        result += bezier.permutations[i] * Math.pow(1 - t, n - i) * Math.pow(t, i) * p[i];
      }
      return result;
    };
    module.exports = valueAt;
  }
});

// node_modules/@jscad/modeling/src/curves/bezier/tangentAt.js
var require_tangentAt = __commonJS({
  "node_modules/@jscad/modeling/src/curves/bezier/tangentAt.js"(exports, module) {
    var tangentAt = (t, bezier) => {
      if (t < 0 || t > 1) {
        throw new Error("Bezier tangentAt() input must be between 0 and 1");
      }
      if (bezier.pointType === "float_single") {
        return bezierTangent(bezier, bezier.points, t);
      } else {
        const result = [];
        for (let i = 0; i < bezier.dimensions; i++) {
          const singleDimensionPoints = [];
          for (let j = 0; j < bezier.points.length; j++) {
            singleDimensionPoints.push(bezier.points[j][i]);
          }
          result.push(bezierTangent(bezier, singleDimensionPoints, t));
        }
        return result;
      }
    };
    var bezierTangent = function(bezier, p, t) {
      const n = p.length - 1;
      let result = 0;
      for (let i = 0; i < n; i++) {
        const q = n * (p[i + 1] - p[i]);
        result += bezier.tangentPermutations[i] * Math.pow(1 - t, n - 1 - i) * Math.pow(t, i) * q;
      }
      return result;
    };
    module.exports = tangentAt;
  }
});

// node_modules/@jscad/modeling/src/curves/bezier/lengths.js
var require_lengths = __commonJS({
  "node_modules/@jscad/modeling/src/curves/bezier/lengths.js"(exports, module) {
    var valueAt = require_valueAt();
    var lengths = (segments, bezier) => {
      let sum = 0;
      const lengths2 = [0];
      let previous = valueAt(0, bezier);
      for (let index = 1; index <= segments; index++) {
        const current = valueAt(index / segments, bezier);
        sum += distanceBetween(current, previous);
        lengths2.push(sum);
        previous = current;
      }
      return lengths2;
    };
    var distanceBetween = (a, b) => {
      if (Number.isFinite(a) && Number.isFinite(b)) {
        return Math.abs(a - b);
      } else if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) {
          throw new Error("The operands must have the same number of dimensions.");
        }
        let sum = 0;
        for (let i = 0; i < a.length; i++) {
          sum += (b[i] - a[i]) * (b[i] - a[i]);
        }
        return Math.sqrt(sum);
      } else {
        throw new Error("The operands must be of the same type, either number or array.");
      }
    };
    module.exports = lengths;
  }
});

// node_modules/@jscad/modeling/src/curves/bezier/length.js
var require_length3 = __commonJS({
  "node_modules/@jscad/modeling/src/curves/bezier/length.js"(exports, module) {
    var lengths = require_lengths();
    var length = (segments, bezier) => lengths(segments, bezier)[segments];
    module.exports = length;
  }
});

// node_modules/@jscad/modeling/src/curves/bezier/arcLengthToT.js
var require_arcLengthToT = __commonJS({
  "node_modules/@jscad/modeling/src/curves/bezier/arcLengthToT.js"(exports, module) {
    var lengths = require_lengths();
    var arcLengthToT = (options, bezier) => {
      const defaults = {
        distance: 0,
        segments: 100
      };
      const { distance, segments } = Object.assign({}, defaults, options);
      const arcLengths = lengths(segments, bezier);
      let startIndex = 0;
      let endIndex = segments;
      while (startIndex <= endIndex) {
        const middleIndex = Math.floor(startIndex + (endIndex - startIndex) / 2);
        const diff = arcLengths[middleIndex] - distance;
        if (diff < 0) {
          startIndex = middleIndex + 1;
        } else if (diff > 0) {
          endIndex = middleIndex - 1;
        } else {
          endIndex = middleIndex;
          break;
        }
      }
      const targetIndex = endIndex;
      if (arcLengths[targetIndex] === distance) {
        return targetIndex / segments;
      }
      const lengthBefore = arcLengths[targetIndex];
      const lengthAfter = arcLengths[targetIndex + 1];
      const segmentLength = lengthAfter - lengthBefore;
      const segmentFraction = (distance - lengthBefore) / segmentLength;
      return (targetIndex + segmentFraction) / segments;
    };
    module.exports = arcLengthToT;
  }
});

// node_modules/@jscad/modeling/src/curves/bezier/index.js
var require_bezier = __commonJS({
  "node_modules/@jscad/modeling/src/curves/bezier/index.js"(exports, module) {
    module.exports = {
      create: require_create9(),
      valueAt: require_valueAt(),
      tangentAt: require_tangentAt(),
      lengths: require_lengths(),
      length: require_length3(),
      arcLengthToT: require_arcLengthToT()
    };
  }
});

// node_modules/@jscad/modeling/src/curves/index.js
var require_curves = __commonJS({
  "node_modules/@jscad/modeling/src/curves/index.js"(exports, module) {
    module.exports = {
      bezier: require_bezier()
    };
  }
});

// node_modules/@jscad/modeling/src/maths/utils/area.js
var require_area = __commonJS({
  "node_modules/@jscad/modeling/src/maths/utils/area.js"(exports, module) {
    var area = (points) => {
      let area2 = 0;
      for (let i = 0; i < points.length; i++) {
        const j = (i + 1) % points.length;
        area2 += points[i][0] * points[j][1];
        area2 -= points[j][0] * points[i][1];
      }
      return area2 / 2;
    };
    module.exports = area;
  }
});

// node_modules/@jscad/modeling/src/geometries/poly2/measureArea.js
var require_measureArea2 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/poly2/measureArea.js"(exports, module) {
    var area = require_area();
    var measureArea = (polygon) => area(polygon.vertices);
    module.exports = measureArea;
  }
});

// node_modules/@jscad/modeling/src/geometries/poly2/create.js
var require_create10 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/poly2/create.js"(exports, module) {
    var create = (vertices) => {
      if (vertices === void 0 || vertices.length < 3) {
        vertices = [];
      }
      return { vertices };
    };
    module.exports = create;
  }
});

// node_modules/@jscad/modeling/src/geometries/poly2/flip.js
var require_flip2 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/poly2/flip.js"(exports, module) {
    var create = require_create10();
    var flip = (polygon) => {
      const vertices = polygon.vertices.slice().reverse();
      return create(vertices);
    };
    module.exports = flip;
  }
});

// node_modules/@jscad/modeling/src/geometries/poly2/arePointsInside.js
var require_arePointsInside = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/poly2/arePointsInside.js"(exports, module) {
    var measureArea = require_measureArea2();
    var flip = require_flip2();
    var arePointsInside = (points, polygon) => {
      if (points.length === 0) return 0;
      const vertices = polygon.vertices;
      if (vertices.length < 3) return 0;
      if (measureArea(polygon) < 0) {
        polygon = flip(polygon);
      }
      const sum = points.reduce((acc, point) => acc + isPointInside(point, vertices), 0);
      return sum === points.length ? 1 : 0;
    };
    var isPointInside = (point, polygon) => {
      const numverts = polygon.length;
      const tx = point[0];
      const ty = point[1];
      let vtx0 = polygon[numverts - 1];
      let vtx1 = polygon[0];
      let yflag0 = vtx0[1] > ty;
      let insideFlag = 0;
      let i = 0;
      for (let j = numverts + 1; --j; ) {
        const yflag1 = vtx1[1] > ty;
        if (yflag0 !== yflag1) {
          const xflag0 = vtx0[0] > tx;
          const xflag1 = vtx1[0] > tx;
          if (xflag0 && xflag1) {
            insideFlag = !insideFlag;
          } else {
            if (vtx1[0] - (vtx1[1] - ty) * (vtx0[0] - vtx1[0]) / (vtx0[1] - vtx1[1]) >= tx) {
              insideFlag = !insideFlag;
            }
          }
        }
        yflag0 = yflag1;
        vtx0 = vtx1;
        vtx1 = polygon[++i];
      }
      return insideFlag;
    };
    module.exports = arePointsInside;
  }
});

// node_modules/@jscad/modeling/src/geometries/poly2/index.js
var require_poly2 = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/poly2/index.js"(exports, module) {
    module.exports = {
      arePointsInside: require_arePointsInside(),
      create: require_create10(),
      flip: require_flip2(),
      measureArea: require_measureArea2()
    };
  }
});

// node_modules/@jscad/modeling/src/geometries/index.js
var require_geometries = __commonJS({
  "node_modules/@jscad/modeling/src/geometries/index.js"(exports, module) {
    module.exports = {
      geom2: require_geom2(),
      geom3: require_geom3(),
      path2: require_path2(),
      poly2: require_poly2(),
      poly3: require_poly3()
    };
  }
});

// node_modules/@jscad/modeling/src/maths/line2/create.js
var require_create11 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/line2/create.js"(exports, module) {
    var create = () => [0, 1, 0];
    module.exports = create;
  }
});

// node_modules/@jscad/modeling/src/maths/line2/clone.js
var require_clone9 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/line2/clone.js"(exports, module) {
    var create = require_create11();
    var clone = (line) => {
      const out = create();
      out[0] = line[0];
      out[1] = line[1];
      out[2] = line[2];
      return out;
    };
    module.exports = clone;
  }
});

// node_modules/@jscad/modeling/src/maths/line2/direction.js
var require_direction = __commonJS({
  "node_modules/@jscad/modeling/src/maths/line2/direction.js"(exports, module) {
    var vec2 = require_vec2();
    var direction = (line) => {
      const vector = vec2.normal(vec2.create(), line);
      vec2.negate(vector, vector);
      return vector;
    };
    module.exports = direction;
  }
});

// node_modules/@jscad/modeling/src/maths/line2/origin.js
var require_origin = __commonJS({
  "node_modules/@jscad/modeling/src/maths/line2/origin.js"(exports, module) {
    var vec2 = require_vec2();
    var origin = (line) => vec2.scale(vec2.create(), line, line[2]);
    module.exports = origin;
  }
});

// node_modules/@jscad/modeling/src/maths/line2/closestPoint.js
var require_closestPoint = __commonJS({
  "node_modules/@jscad/modeling/src/maths/line2/closestPoint.js"(exports, module) {
    var vec2 = require_vec2();
    var direction = require_direction();
    var origin = require_origin();
    var closestPoint = (line, point) => {
      const orig = origin(line);
      const dir = direction(line);
      const v = vec2.subtract(vec2.create(), point, orig);
      const dist = vec2.dot(v, dir);
      vec2.scale(v, dir, dist);
      vec2.add(v, v, orig);
      return v;
    };
    module.exports = closestPoint;
  }
});

// node_modules/@jscad/modeling/src/maths/line2/copy.js
var require_copy5 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/line2/copy.js"(exports, module) {
    var copy = (out, line) => {
      out[0] = line[0];
      out[1] = line[1];
      out[2] = line[2];
      return out;
    };
    module.exports = copy;
  }
});

// node_modules/@jscad/modeling/src/maths/line2/distanceToPoint.js
var require_distanceToPoint = __commonJS({
  "node_modules/@jscad/modeling/src/maths/line2/distanceToPoint.js"(exports, module) {
    var vec2 = require_vec2();
    var distanceToPoint = (line, point) => {
      let distance = vec2.dot(point, line);
      distance = Math.abs(distance - line[2]);
      return distance;
    };
    module.exports = distanceToPoint;
  }
});

// node_modules/@jscad/modeling/src/maths/line2/equals.js
var require_equals6 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/line2/equals.js"(exports, module) {
    var equals = (line1, line2) => line1[0] === line2[0] && (line1[1] === line2[1] && line1[2] === line2[2]);
    module.exports = equals;
  }
});

// node_modules/@jscad/modeling/src/maths/line2/fromPoints.js
var require_fromPoints6 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/line2/fromPoints.js"(exports, module) {
    var vec2 = require_vec2();
    var fromPoints = (out, point1, point2) => {
      const vector = vec2.subtract(vec2.create(), point2, point1);
      vec2.normal(vector, vector);
      vec2.normalize(vector, vector);
      const distance = vec2.dot(point1, vector);
      out[0] = vector[0];
      out[1] = vector[1];
      out[2] = distance;
      return out;
    };
    module.exports = fromPoints;
  }
});

// node_modules/@jscad/modeling/src/maths/line2/fromValues.js
var require_fromValues5 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/line2/fromValues.js"(exports, module) {
    var create = require_create11();
    var fromValues = (x, y, d) => {
      const out = create();
      out[0] = x;
      out[1] = y;
      out[2] = d;
      return out;
    };
    module.exports = fromValues;
  }
});

// node_modules/@jscad/modeling/src/maths/utils/aboutEqualNormals.js
var require_aboutEqualNormals = __commonJS({
  "node_modules/@jscad/modeling/src/maths/utils/aboutEqualNormals.js"(exports, module) {
    var { NEPS } = require_constants();
    var aboutEqualNormals = (a, b) => Math.abs(a[0] - b[0]) <= NEPS && Math.abs(a[1] - b[1]) <= NEPS && Math.abs(a[2] - b[2]) <= NEPS;
    module.exports = aboutEqualNormals;
  }
});

// node_modules/@jscad/modeling/src/maths/utils/interpolateBetween2DPointsForY.js
var require_interpolateBetween2DPointsForY = __commonJS({
  "node_modules/@jscad/modeling/src/maths/utils/interpolateBetween2DPointsForY.js"(exports, module) {
    var interpolateBetween2DPointsForY = (point1, point2, y) => {
      let f1 = y - point1[1];
      let f2 = point2[1] - point1[1];
      if (f2 < 0) {
        f1 = -f1;
        f2 = -f2;
      }
      let t;
      if (f1 <= 0) {
        t = 0;
      } else if (f1 >= f2) {
        t = 1;
      } else if (f2 < 1e-10) {
        t = 0.5;
      } else {
        t = f1 / f2;
      }
      const result = point1[0] + t * (point2[0] - point1[0]);
      return result;
    };
    module.exports = interpolateBetween2DPointsForY;
  }
});

// node_modules/@jscad/modeling/src/maths/utils/intersect.js
var require_intersect = __commonJS({
  "node_modules/@jscad/modeling/src/maths/utils/intersect.js"(exports, module) {
    var intersect = (p1, p2, p3, p4) => {
      if (p1[0] === p2[0] && p1[1] === p2[1] || p3[0] === p4[0] && p3[1] === p4[1]) {
        return void 0;
      }
      const denominator = (p4[1] - p3[1]) * (p2[0] - p1[0]) - (p4[0] - p3[0]) * (p2[1] - p1[1]);
      if (Math.abs(denominator) < Number.MIN_VALUE) {
        return void 0;
      }
      const ua = ((p4[0] - p3[0]) * (p1[1] - p3[1]) - (p4[1] - p3[1]) * (p1[0] - p3[0])) / denominator;
      const ub = ((p2[0] - p1[0]) * (p1[1] - p3[1]) - (p2[1] - p1[1]) * (p1[0] - p3[0])) / denominator;
      if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {
        return void 0;
      }
      const x = p1[0] + ua * (p2[0] - p1[0]);
      const y = p1[1] + ua * (p2[1] - p1[1]);
      return [x, y];
    };
    module.exports = intersect;
  }
});

// node_modules/@jscad/modeling/src/maths/utils/solve2Linear.js
var require_solve2Linear = __commonJS({
  "node_modules/@jscad/modeling/src/maths/utils/solve2Linear.js"(exports, module) {
    var solve2Linear = (a, b, c, d, u, v) => {
      const det = a * d - b * c;
      const invdet = 1 / det;
      let x = u * d - b * v;
      let y = -u * c + a * v;
      x *= invdet;
      y *= invdet;
      return [x, y];
    };
    module.exports = solve2Linear;
  }
});

// node_modules/@jscad/modeling/src/maths/utils/index.js
var require_utils = __commonJS({
  "node_modules/@jscad/modeling/src/maths/utils/index.js"(exports, module) {
    module.exports = {
      aboutEqualNormals: require_aboutEqualNormals(),
      area: require_area(),
      cos: require_trigonometry().cos,
      interpolateBetween2DPointsForY: require_interpolateBetween2DPointsForY(),
      intersect: require_intersect(),
      sin: require_trigonometry().sin,
      solve2Linear: require_solve2Linear()
    };
  }
});

// node_modules/@jscad/modeling/src/maths/line2/intersectPointOfLines.js
var require_intersectPointOfLines = __commonJS({
  "node_modules/@jscad/modeling/src/maths/line2/intersectPointOfLines.js"(exports, module) {
    var vec2 = require_vec2();
    var { solve2Linear } = require_utils();
    var intersectToLine = (line1, line2) => {
      const point = solve2Linear(line1[0], line1[1], line2[0], line2[1], line1[2], line2[2]);
      return vec2.clone(point);
    };
    module.exports = intersectToLine;
  }
});

// node_modules/@jscad/modeling/src/maths/line2/reverse.js
var require_reverse3 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/line2/reverse.js"(exports, module) {
    var vec2 = require_vec2();
    var copy = require_copy5();
    var fromValues = require_fromValues5();
    var reverse = (out, line) => {
      const normal = vec2.negate(vec2.create(), line);
      const distance = -line[2];
      return copy(out, fromValues(normal[0], normal[1], distance));
    };
    module.exports = reverse;
  }
});

// node_modules/@jscad/modeling/src/maths/line2/toString.js
var require_toString9 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/line2/toString.js"(exports, module) {
    var toString = (line) => `line2: (${line[0].toFixed(7)}, ${line[1].toFixed(7)}, ${line[2].toFixed(7)})`;
    module.exports = toString;
  }
});

// node_modules/@jscad/modeling/src/maths/line2/transform.js
var require_transform9 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/line2/transform.js"(exports, module) {
    var vec2 = require_vec2();
    var fromPoints = require_fromPoints6();
    var origin = require_origin();
    var direction = require_direction();
    var transform = (out, line, matrix) => {
      const org = origin(line);
      const dir = direction(line);
      vec2.transform(org, org, matrix);
      vec2.transform(dir, dir, matrix);
      return fromPoints(out, org, dir);
    };
    module.exports = transform;
  }
});

// node_modules/@jscad/modeling/src/maths/line2/xAtY.js
var require_xAtY = __commonJS({
  "node_modules/@jscad/modeling/src/maths/line2/xAtY.js"(exports, module) {
    var origin = require_origin();
    var xAtY = (line, y) => {
      let x = (line[2] - line[1] * y) / line[0];
      if (Number.isNaN(x)) {
        const org = origin(line);
        x = org[0];
      }
      return x;
    };
    module.exports = xAtY;
  }
});

// node_modules/@jscad/modeling/src/maths/line2/index.js
var require_line2 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/line2/index.js"(exports, module) {
    module.exports = {
      clone: require_clone9(),
      closestPoint: require_closestPoint(),
      copy: require_copy5(),
      create: require_create11(),
      direction: require_direction(),
      distanceToPoint: require_distanceToPoint(),
      equals: require_equals6(),
      fromPoints: require_fromPoints6(),
      fromValues: require_fromValues5(),
      intersectPointOfLines: require_intersectPointOfLines(),
      origin: require_origin(),
      reverse: require_reverse3(),
      toString: require_toString9(),
      transform: require_transform9(),
      xAtY: require_xAtY()
    };
  }
});

// node_modules/@jscad/modeling/src/maths/line3/create.js
var require_create12 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/line3/create.js"(exports, module) {
    var vec3 = require_vec3();
    var create = () => [
      vec3.fromValues(0, 0, 0),
      // origin
      vec3.fromValues(0, 0, 1)
      // direction
    ];
    module.exports = create;
  }
});

// node_modules/@jscad/modeling/src/maths/line3/clone.js
var require_clone10 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/line3/clone.js"(exports, module) {
    var vec3 = require_vec3();
    var create = require_create12();
    var clone = (line) => {
      const out = create();
      vec3.copy(out[0], line[0]);
      vec3.copy(out[1], line[1]);
      return out;
    };
    module.exports = clone;
  }
});

// node_modules/@jscad/modeling/src/maths/line3/closestPoint.js
var require_closestPoint2 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/line3/closestPoint.js"(exports, module) {
    var vec3 = require_vec3();
    var closestPoint = (line, point) => {
      const lpoint = line[0];
      const ldirection = line[1];
      const a = vec3.dot(vec3.subtract(vec3.create(), point, lpoint), ldirection);
      const b = vec3.dot(ldirection, ldirection);
      const t = a / b;
      const closestpoint = vec3.scale(vec3.create(), ldirection, t);
      vec3.add(closestpoint, closestpoint, lpoint);
      return closestpoint;
    };
    module.exports = closestPoint;
  }
});

// node_modules/@jscad/modeling/src/maths/line3/copy.js
var require_copy6 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/line3/copy.js"(exports, module) {
    var vec3 = require_vec3();
    var copy = (out, line) => {
      vec3.copy(out[0], line[0]);
      vec3.copy(out[1], line[1]);
      return out;
    };
    module.exports = copy;
  }
});

// node_modules/@jscad/modeling/src/maths/line3/direction.js
var require_direction2 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/line3/direction.js"(exports, module) {
    var direction = (line) => line[1];
    module.exports = direction;
  }
});

// node_modules/@jscad/modeling/src/maths/line3/distanceToPoint.js
var require_distanceToPoint2 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/line3/distanceToPoint.js"(exports, module) {
    var vec3 = require_vec3();
    var closestPoint = require_closestPoint2();
    var distanceToPoint = (line, point) => {
      const closest = closestPoint(line, point);
      const distancevector = vec3.subtract(vec3.create(), point, closest);
      return vec3.length(distancevector);
    };
    module.exports = distanceToPoint;
  }
});

// node_modules/@jscad/modeling/src/maths/line3/equals.js
var require_equals7 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/line3/equals.js"(exports, module) {
    var vec3 = require_vec3();
    var equals = (line1, line2) => {
      if (!vec3.equals(line1[1], line2[1])) return false;
      if (!vec3.equals(line1[0], line2[0])) return false;
      return true;
    };
    module.exports = equals;
  }
});

// node_modules/@jscad/modeling/src/maths/line3/fromPointAndDirection.js
var require_fromPointAndDirection = __commonJS({
  "node_modules/@jscad/modeling/src/maths/line3/fromPointAndDirection.js"(exports, module) {
    var vec3 = require_vec3();
    var fromPointAndDirection = (out, point, direction) => {
      const unit = vec3.normalize(vec3.create(), direction);
      vec3.copy(out[0], point);
      vec3.copy(out[1], unit);
      return out;
    };
    module.exports = fromPointAndDirection;
  }
});

// node_modules/@jscad/modeling/src/maths/line3/fromPlanes.js
var require_fromPlanes = __commonJS({
  "node_modules/@jscad/modeling/src/maths/line3/fromPlanes.js"(exports, module) {
    var vec3 = require_vec3();
    var { solve2Linear } = require_utils();
    var { EPS } = require_constants();
    var fromPointAndDirection = require_fromPointAndDirection();
    var fromPlanes = (out, plane1, plane2) => {
      let direction = vec3.cross(vec3.create(), plane1, plane2);
      let length = vec3.length(direction);
      if (length < EPS) {
        throw new Error("parallel planes do not intersect");
      }
      length = 1 / length;
      direction = vec3.scale(direction, direction, length);
      const absx = Math.abs(direction[0]);
      const absy = Math.abs(direction[1]);
      const absz = Math.abs(direction[2]);
      let origin;
      let r;
      if (absx >= absy && absx >= absz) {
        r = solve2Linear(plane1[1], plane1[2], plane2[1], plane2[2], plane1[3], plane2[3]);
        origin = vec3.fromValues(0, r[0], r[1]);
      } else if (absy >= absx && absy >= absz) {
        r = solve2Linear(plane1[0], plane1[2], plane2[0], plane2[2], plane1[3], plane2[3]);
        origin = vec3.fromValues(r[0], 0, r[1]);
      } else {
        r = solve2Linear(plane1[0], plane1[1], plane2[0], plane2[1], plane1[3], plane2[3]);
        origin = vec3.fromValues(r[0], r[1], 0);
      }
      return fromPointAndDirection(out, origin, direction);
    };
    module.exports = fromPlanes;
  }
});

// node_modules/@jscad/modeling/src/maths/line3/fromPoints.js
var require_fromPoints7 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/line3/fromPoints.js"(exports, module) {
    var vec3 = require_vec3();
    var fromPointAndDirection = require_fromPointAndDirection();
    var fromPoints = (out, point1, point2) => {
      const direction = vec3.subtract(vec3.create(), point2, point1);
      return fromPointAndDirection(out, point1, direction);
    };
    module.exports = fromPoints;
  }
});

// node_modules/@jscad/modeling/src/maths/line3/intersectPointOfLineAndPlane.js
var require_intersectPointOfLineAndPlane = __commonJS({
  "node_modules/@jscad/modeling/src/maths/line3/intersectPointOfLineAndPlane.js"(exports, module) {
    var vec3 = require_vec3();
    var intersectToPlane = (line, plane) => {
      const pnormal = plane;
      const pw = plane[3];
      const lpoint = line[0];
      const ldirection = line[1];
      const labda = (pw - vec3.dot(pnormal, lpoint)) / vec3.dot(pnormal, ldirection);
      const point = vec3.add(vec3.create(), lpoint, vec3.scale(vec3.create(), ldirection, labda));
      return point;
    };
    module.exports = intersectToPlane;
  }
});

// node_modules/@jscad/modeling/src/maths/line3/origin.js
var require_origin2 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/line3/origin.js"(exports, module) {
    var origin = (line) => line[0];
    module.exports = origin;
  }
});

// node_modules/@jscad/modeling/src/maths/line3/reverse.js
var require_reverse4 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/line3/reverse.js"(exports, module) {
    var vec3 = require_vec3();
    var fromPointAndDirection = require_fromPointAndDirection();
    var reverse = (out, line) => {
      const point = vec3.clone(line[0]);
      const direction = vec3.negate(vec3.create(), line[1]);
      return fromPointAndDirection(out, point, direction);
    };
    module.exports = reverse;
  }
});

// node_modules/@jscad/modeling/src/maths/line3/toString.js
var require_toString10 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/line3/toString.js"(exports, module) {
    var toString = (line) => {
      const point = line[0];
      const direction = line[1];
      return `line3: point: (${point[0].toFixed(7)}, ${point[1].toFixed(7)}, ${point[2].toFixed(7)}) direction: (${direction[0].toFixed(7)}, ${direction[1].toFixed(7)}, ${direction[2].toFixed(7)})`;
    };
    module.exports = toString;
  }
});

// node_modules/@jscad/modeling/src/maths/line3/transform.js
var require_transform10 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/line3/transform.js"(exports, module) {
    var vec3 = require_vec3();
    var fromPointAndDirection = require_fromPointAndDirection();
    var transform = (out, line, matrix) => {
      const point = line[0];
      const direction = line[1];
      const pointPlusDirection = vec3.add(vec3.create(), point, direction);
      const newpoint = vec3.transform(vec3.create(), point, matrix);
      const newPointPlusDirection = vec3.transform(pointPlusDirection, pointPlusDirection, matrix);
      const newdirection = vec3.subtract(newPointPlusDirection, newPointPlusDirection, newpoint);
      return fromPointAndDirection(out, newpoint, newdirection);
    };
    module.exports = transform;
  }
});

// node_modules/@jscad/modeling/src/maths/line3/index.js
var require_line3 = __commonJS({
  "node_modules/@jscad/modeling/src/maths/line3/index.js"(exports, module) {
    module.exports = {
      clone: require_clone10(),
      closestPoint: require_closestPoint2(),
      copy: require_copy6(),
      create: require_create12(),
      direction: require_direction2(),
      distanceToPoint: require_distanceToPoint2(),
      equals: require_equals7(),
      fromPlanes: require_fromPlanes(),
      fromPointAndDirection: require_fromPointAndDirection(),
      fromPoints: require_fromPoints7(),
      intersectPointOfLineAndPlane: require_intersectPointOfLineAndPlane(),
      origin: require_origin2(),
      reverse: require_reverse4(),
      toString: require_toString10(),
      transform: require_transform10()
    };
  }
});

// node_modules/@jscad/modeling/src/maths/index.js
var require_maths = __commonJS({
  "node_modules/@jscad/modeling/src/maths/index.js"(exports, module) {
    module.exports = {
      constants: require_constants(),
      line2: require_line2(),
      line3: require_line3(),
      mat4: require_mat4(),
      plane: require_plane(),
      utils: require_utils(),
      vec2: require_vec2(),
      vec3: require_vec3(),
      vec4: require_vec4()
    };
  }
});

// node_modules/@jscad/modeling/src/measurements/measureArea.js
var require_measureArea3 = __commonJS({
  "node_modules/@jscad/modeling/src/measurements/measureArea.js"(exports, module) {
    var flatten = require_flatten();
    var geom2 = require_geom2();
    var geom3 = require_geom3();
    var path2 = require_path2();
    var poly3 = require_poly3();
    var cache = /* @__PURE__ */ new WeakMap();
    var measureAreaOfPath2 = () => 0;
    var measureAreaOfGeom2 = (geometry) => {
      let area = cache.get(geometry);
      if (area) return area;
      const sides = geom2.toSides(geometry);
      area = sides.reduce((area2, side) => area2 + (side[0][0] * side[1][1] - side[0][1] * side[1][0]), 0);
      area *= 0.5;
      cache.set(geometry, area);
      return area;
    };
    var measureAreaOfGeom3 = (geometry) => {
      let area = cache.get(geometry);
      if (area) return area;
      const polygons = geom3.toPolygons(geometry);
      area = polygons.reduce((area2, polygon) => area2 + poly3.measureArea(polygon), 0);
      cache.set(geometry, area);
      return area;
    };
    var measureArea = (...geometries2) => {
      geometries2 = flatten(geometries2);
      if (geometries2.length === 0) throw new Error("wrong number of arguments");
      const results = geometries2.map((geometry) => {
        if (path2.isA(geometry)) return measureAreaOfPath2(geometry);
        if (geom2.isA(geometry)) return measureAreaOfGeom2(geometry);
        if (geom3.isA(geometry)) return measureAreaOfGeom3(geometry);
        return 0;
      });
      return results.length === 1 ? results[0] : results;
    };
    module.exports = measureArea;
  }
});

// node_modules/@jscad/modeling/src/measurements/measureAggregateArea.js
var require_measureAggregateArea = __commonJS({
  "node_modules/@jscad/modeling/src/measurements/measureAggregateArea.js"(exports, module) {
    var flatten = require_flatten();
    var measureArea = require_measureArea3();
    var measureAggregateArea = (...geometries2) => {
      geometries2 = flatten(geometries2);
      if (geometries2.length === 0) throw new Error("measureAggregateArea: no geometries supplied");
      const areas = measureArea(geometries2);
      if (geometries2.length === 1) {
        return areas;
      }
      const result = 0;
      return areas.reduce((result2, area) => result2 + area, result);
    };
    module.exports = measureAggregateArea;
  }
});

// node_modules/@jscad/modeling/src/measurements/measureBoundingBox.js
var require_measureBoundingBox2 = __commonJS({
  "node_modules/@jscad/modeling/src/measurements/measureBoundingBox.js"(exports, module) {
    var flatten = require_flatten();
    var vec2 = require_vec2();
    var vec3 = require_vec3();
    var geom2 = require_geom2();
    var geom3 = require_geom3();
    var path2 = require_path2();
    var poly3 = require_poly3();
    var cache = /* @__PURE__ */ new WeakMap();
    var measureBoundingBoxOfPath2 = (geometry) => {
      let boundingBox = cache.get(geometry);
      if (boundingBox) return boundingBox;
      const points = path2.toPoints(geometry);
      let minpoint;
      if (points.length === 0) {
        minpoint = vec2.create();
      } else {
        minpoint = vec2.clone(points[0]);
      }
      let maxpoint = vec2.clone(minpoint);
      points.forEach((point) => {
        vec2.min(minpoint, minpoint, point);
        vec2.max(maxpoint, maxpoint, point);
      });
      minpoint = [minpoint[0], minpoint[1], 0];
      maxpoint = [maxpoint[0], maxpoint[1], 0];
      boundingBox = [minpoint, maxpoint];
      cache.set(geometry, boundingBox);
      return boundingBox;
    };
    var measureBoundingBoxOfGeom2 = (geometry) => {
      let boundingBox = cache.get(geometry);
      if (boundingBox) return boundingBox;
      const points = geom2.toPoints(geometry);
      let minpoint;
      if (points.length === 0) {
        minpoint = vec2.create();
      } else {
        minpoint = vec2.clone(points[0]);
      }
      let maxpoint = vec2.clone(minpoint);
      points.forEach((point) => {
        vec2.min(minpoint, minpoint, point);
        vec2.max(maxpoint, maxpoint, point);
      });
      minpoint = [minpoint[0], minpoint[1], 0];
      maxpoint = [maxpoint[0], maxpoint[1], 0];
      boundingBox = [minpoint, maxpoint];
      cache.set(geometry, boundingBox);
      return boundingBox;
    };
    var measureBoundingBoxOfGeom3 = (geometry) => {
      let boundingBox = cache.get(geometry);
      if (boundingBox) return boundingBox;
      const polygons = geom3.toPolygons(geometry);
      let minpoint = vec3.create();
      if (polygons.length > 0) {
        const points = poly3.toPoints(polygons[0]);
        vec3.copy(minpoint, points[0]);
      }
      let maxpoint = vec3.clone(minpoint);
      polygons.forEach((polygon) => {
        poly3.toPoints(polygon).forEach((point) => {
          vec3.min(minpoint, minpoint, point);
          vec3.max(maxpoint, maxpoint, point);
        });
      });
      minpoint = [minpoint[0], minpoint[1], minpoint[2]];
      maxpoint = [maxpoint[0], maxpoint[1], maxpoint[2]];
      boundingBox = [minpoint, maxpoint];
      cache.set(geometry, boundingBox);
      return boundingBox;
    };
    var measureBoundingBox = (...geometries2) => {
      geometries2 = flatten(geometries2);
      if (geometries2.length === 0) throw new Error("wrong number of arguments");
      const results = geometries2.map((geometry) => {
        if (path2.isA(geometry)) return measureBoundingBoxOfPath2(geometry);
        if (geom2.isA(geometry)) return measureBoundingBoxOfGeom2(geometry);
        if (geom3.isA(geometry)) return measureBoundingBoxOfGeom3(geometry);
        return [[0, 0, 0], [0, 0, 0]];
      });
      return results.length === 1 ? results[0] : results;
    };
    module.exports = measureBoundingBox;
  }
});

// node_modules/@jscad/modeling/src/measurements/measureAggregateBoundingBox.js
var require_measureAggregateBoundingBox = __commonJS({
  "node_modules/@jscad/modeling/src/measurements/measureAggregateBoundingBox.js"(exports, module) {
    var flatten = require_flatten();
    var vec3min = require_min();
    var vec3max = require_max();
    var measureBoundingBox = require_measureBoundingBox2();
    var measureAggregateBoundingBox = (...geometries2) => {
      geometries2 = flatten(geometries2);
      if (geometries2.length === 0) throw new Error("measureAggregateBoundingBox: no geometries supplied");
      const bounds = measureBoundingBox(geometries2);
      if (geometries2.length === 1) {
        return bounds;
      }
      const result = [[Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE], [-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE]];
      return bounds.reduce((result2, item) => {
        result2 = [vec3min(result2[0], result2[0], item[0]), vec3max(result2[1], result2[1], item[1])];
        return result2;
      }, result);
    };
    module.exports = measureAggregateBoundingBox;
  }
});

// node_modules/@jscad/modeling/src/measurements/calculateEpsilonFromBounds.js
var require_calculateEpsilonFromBounds = __commonJS({
  "node_modules/@jscad/modeling/src/measurements/calculateEpsilonFromBounds.js"(exports, module) {
    var { EPS } = require_constants();
    var calculateEpsilonFromBounds = (bounds, dimensions) => {
      let total = 0;
      for (let i = 0; i < dimensions; i++) {
        total += bounds[1][i] - bounds[0][i];
      }
      return EPS * total / dimensions;
    };
    module.exports = calculateEpsilonFromBounds;
  }
});

// node_modules/@jscad/modeling/src/measurements/measureAggregateEpsilon.js
var require_measureAggregateEpsilon = __commonJS({
  "node_modules/@jscad/modeling/src/measurements/measureAggregateEpsilon.js"(exports, module) {
    var flatten = require_flatten();
    var measureAggregateBoundingBox = require_measureAggregateBoundingBox();
    var calculateEpsilonFromBounds = require_calculateEpsilonFromBounds();
    var { geom2, geom3, path2 } = require_geometries();
    var measureAggregateEpsilon = (...geometries2) => {
      geometries2 = flatten(geometries2);
      if (geometries2.length === 0) throw new Error("measureAggregateEpsilon: no geometries supplied");
      const bounds = measureAggregateBoundingBox(geometries2);
      let dimensions = 0;
      dimensions = geometries2.reduce((dimensions2, geometry) => {
        if (path2.isA(geometry) || geom2.isA(geometry)) return Math.max(dimensions2, 2);
        if (geom3.isA(geometry)) return Math.max(dimensions2, 3);
        return 0;
      }, dimensions);
      return calculateEpsilonFromBounds(bounds, dimensions);
    };
    module.exports = measureAggregateEpsilon;
  }
});

// node_modules/@jscad/modeling/src/measurements/measureVolume.js
var require_measureVolume = __commonJS({
  "node_modules/@jscad/modeling/src/measurements/measureVolume.js"(exports, module) {
    var flatten = require_flatten();
    var geom2 = require_geom2();
    var geom3 = require_geom3();
    var path2 = require_path2();
    var poly3 = require_poly3();
    var cache = /* @__PURE__ */ new WeakMap();
    var measureVolumeOfPath2 = () => 0;
    var measureVolumeOfGeom2 = () => 0;
    var measureVolumeOfGeom3 = (geometry) => {
      let volume = cache.get(geometry);
      if (volume) return volume;
      const polygons = geom3.toPolygons(geometry);
      volume = polygons.reduce((volume2, polygon) => volume2 + poly3.measureSignedVolume(polygon), 0);
      cache.set(geometry, volume);
      return volume;
    };
    var measureVolume = (...geometries2) => {
      geometries2 = flatten(geometries2);
      if (geometries2.length === 0) throw new Error("wrong number of arguments");
      const results = geometries2.map((geometry) => {
        if (path2.isA(geometry)) return measureVolumeOfPath2(geometry);
        if (geom2.isA(geometry)) return measureVolumeOfGeom2(geometry);
        if (geom3.isA(geometry)) return measureVolumeOfGeom3(geometry);
        return 0;
      });
      return results.length === 1 ? results[0] : results;
    };
    module.exports = measureVolume;
  }
});

// node_modules/@jscad/modeling/src/measurements/measureAggregateVolume.js
var require_measureAggregateVolume = __commonJS({
  "node_modules/@jscad/modeling/src/measurements/measureAggregateVolume.js"(exports, module) {
    var flatten = require_flatten();
    var measureVolume = require_measureVolume();
    var measureAggregateVolume = (...geometries2) => {
      geometries2 = flatten(geometries2);
      if (geometries2.length === 0) throw new Error("measureAggregateVolume: no geometries supplied");
      const volumes = measureVolume(geometries2);
      if (geometries2.length === 1) {
        return volumes;
      }
      const result = 0;
      return volumes.reduce((result2, volume) => result2 + volume, result);
    };
    module.exports = measureAggregateVolume;
  }
});

// node_modules/@jscad/modeling/src/measurements/measureBoundingSphere.js
var require_measureBoundingSphere2 = __commonJS({
  "node_modules/@jscad/modeling/src/measurements/measureBoundingSphere.js"(exports, module) {
    var flatten = require_flatten();
    var vec2 = require_vec2();
    var vec3 = require_vec3();
    var geom2 = require_geom2();
    var geom3 = require_geom3();
    var path2 = require_path2();
    var poly3 = require_poly3();
    var cacheOfBoundingSpheres = /* @__PURE__ */ new WeakMap();
    var measureBoundingSphereOfPath2 = (geometry) => {
      let boundingSphere = cacheOfBoundingSpheres.get(geometry);
      if (boundingSphere !== void 0) return boundingSphere;
      const centroid = vec3.create();
      let radius = 0;
      const points = path2.toPoints(geometry);
      if (points.length > 0) {
        let numPoints = 0;
        const temp = vec3.create();
        points.forEach((point) => {
          vec3.add(centroid, centroid, vec3.fromVec2(temp, point, 0));
          numPoints++;
        });
        vec3.scale(centroid, centroid, 1 / numPoints);
        points.forEach((point) => {
          radius = Math.max(radius, vec2.squaredDistance(centroid, point));
        });
        radius = Math.sqrt(radius);
      }
      boundingSphere = [centroid, radius];
      cacheOfBoundingSpheres.set(geometry, boundingSphere);
      return boundingSphere;
    };
    var measureBoundingSphereOfGeom2 = (geometry) => {
      let boundingSphere = cacheOfBoundingSpheres.get(geometry);
      if (boundingSphere !== void 0) return boundingSphere;
      const centroid = vec3.create();
      let radius = 0;
      const sides = geom2.toSides(geometry);
      if (sides.length > 0) {
        let numPoints = 0;
        const temp = vec3.create();
        sides.forEach((side) => {
          vec3.add(centroid, centroid, vec3.fromVec2(temp, side[0], 0));
          numPoints++;
        });
        vec3.scale(centroid, centroid, 1 / numPoints);
        sides.forEach((side) => {
          radius = Math.max(radius, vec2.squaredDistance(centroid, side[0]));
        });
        radius = Math.sqrt(radius);
      }
      boundingSphere = [centroid, radius];
      cacheOfBoundingSpheres.set(geometry, boundingSphere);
      return boundingSphere;
    };
    var measureBoundingSphereOfGeom3 = (geometry) => {
      let boundingSphere = cacheOfBoundingSpheres.get(geometry);
      if (boundingSphere !== void 0) return boundingSphere;
      const centroid = vec3.create();
      let radius = 0;
      const polygons = geom3.toPolygons(geometry);
      if (polygons.length > 0) {
        let numPoints = 0;
        polygons.forEach((polygon) => {
          poly3.toPoints(polygon).forEach((point) => {
            vec3.add(centroid, centroid, point);
            numPoints++;
          });
        });
        vec3.scale(centroid, centroid, 1 / numPoints);
        polygons.forEach((polygon) => {
          poly3.toPoints(polygon).forEach((point) => {
            radius = Math.max(radius, vec3.squaredDistance(centroid, point));
          });
        });
        radius = Math.sqrt(radius);
      }
      boundingSphere = [centroid, radius];
      cacheOfBoundingSpheres.set(geometry, boundingSphere);
      return boundingSphere;
    };
    var measureBoundingSphere = (...geometries2) => {
      geometries2 = flatten(geometries2);
      const results = geometries2.map((geometry) => {
        if (path2.isA(geometry)) return measureBoundingSphereOfPath2(geometry);
        if (geom2.isA(geometry)) return measureBoundingSphereOfGeom2(geometry);
        if (geom3.isA(geometry)) return measureBoundingSphereOfGeom3(geometry);
        return [[0, 0, 0], 0];
      });
      return results.length === 1 ? results[0] : results;
    };
    module.exports = measureBoundingSphere;
  }
});

// node_modules/@jscad/modeling/src/measurements/measureCenter.js
var require_measureCenter = __commonJS({
  "node_modules/@jscad/modeling/src/measurements/measureCenter.js"(exports, module) {
    var flatten = require_flatten();
    var measureBoundingBox = require_measureBoundingBox2();
    var measureCenter = (...geometries2) => {
      geometries2 = flatten(geometries2);
      const results = geometries2.map((geometry) => {
        const bounds = measureBoundingBox(geometry);
        return [
          bounds[0][0] + (bounds[1][0] - bounds[0][0]) / 2,
          bounds[0][1] + (bounds[1][1] - bounds[0][1]) / 2,
          bounds[0][2] + (bounds[1][2] - bounds[0][2]) / 2
        ];
      });
      return results.length === 1 ? results[0] : results;
    };
    module.exports = measureCenter;
  }
});

// node_modules/@jscad/modeling/src/measurements/measureCenterOfMass.js
var require_measureCenterOfMass = __commonJS({
  "node_modules/@jscad/modeling/src/measurements/measureCenterOfMass.js"(exports, module) {
    var flatten = require_flatten();
    var vec3 = require_vec3();
    var geom2 = require_geom2();
    var geom3 = require_geom3();
    var cacheOfCenterOfMass = /* @__PURE__ */ new WeakMap();
    var measureCenterOfMassGeom2 = (geometry) => {
      let centerOfMass = cacheOfCenterOfMass.get(geometry);
      if (centerOfMass !== void 0) return centerOfMass;
      const sides = geom2.toSides(geometry);
      let area = 0;
      let x = 0;
      let y = 0;
      if (sides.length > 0) {
        for (let i = 0; i < sides.length; i++) {
          const p1 = sides[i][0];
          const p2 = sides[i][1];
          const a = p1[0] * p2[1] - p1[1] * p2[0];
          area += a;
          x += (p1[0] + p2[0]) * a;
          y += (p1[1] + p2[1]) * a;
        }
        area /= 2;
        const f = 1 / (area * 6);
        x *= f;
        y *= f;
      }
      centerOfMass = vec3.fromValues(x, y, 0);
      cacheOfCenterOfMass.set(geometry, centerOfMass);
      return centerOfMass;
    };
    var measureCenterOfMassGeom3 = (geometry) => {
      let centerOfMass = cacheOfCenterOfMass.get(geometry);
      if (centerOfMass !== void 0) return centerOfMass;
      centerOfMass = vec3.create();
      const polygons = geom3.toPolygons(geometry);
      if (polygons.length === 0) return centerOfMass;
      let totalVolume = 0;
      const vector = vec3.create();
      polygons.forEach((polygon) => {
        const vertices = polygon.vertices;
        for (let i = 0; i < vertices.length - 2; i++) {
          vec3.cross(vector, vertices[i + 1], vertices[i + 2]);
          const volume = vec3.dot(vertices[0], vector) / 6;
          totalVolume += volume;
          vec3.add(vector, vertices[0], vertices[i + 1]);
          vec3.add(vector, vector, vertices[i + 2]);
          const weightedCenter = vec3.scale(vector, vector, 1 / 4 * volume);
          vec3.add(centerOfMass, centerOfMass, weightedCenter);
        }
      });
      vec3.scale(centerOfMass, centerOfMass, 1 / totalVolume);
      cacheOfCenterOfMass.set(geometry, centerOfMass);
      return centerOfMass;
    };
    var measureCenterOfMass = (...geometries2) => {
      geometries2 = flatten(geometries2);
      const results = geometries2.map((geometry) => {
        if (geom2.isA(geometry)) return measureCenterOfMassGeom2(geometry);
        if (geom3.isA(geometry)) return measureCenterOfMassGeom3(geometry);
        return [0, 0, 0];
      });
      return results.length === 1 ? results[0] : results;
    };
    module.exports = measureCenterOfMass;
  }
});

// node_modules/@jscad/modeling/src/measurements/measureDimensions.js
var require_measureDimensions = __commonJS({
  "node_modules/@jscad/modeling/src/measurements/measureDimensions.js"(exports, module) {
    var flatten = require_flatten();
    var measureBoundingBox = require_measureBoundingBox2();
    var measureDimensions = (...geometries2) => {
      geometries2 = flatten(geometries2);
      const results = geometries2.map((geometry) => {
        const boundingBox = measureBoundingBox(geometry);
        return [
          boundingBox[1][0] - boundingBox[0][0],
          boundingBox[1][1] - boundingBox[0][1],
          boundingBox[1][2] - boundingBox[0][2]
        ];
      });
      return results.length === 1 ? results[0] : results;
    };
    module.exports = measureDimensions;
  }
});

// node_modules/@jscad/modeling/src/measurements/measureEpsilon.js
var require_measureEpsilon = __commonJS({
  "node_modules/@jscad/modeling/src/measurements/measureEpsilon.js"(exports, module) {
    var flatten = require_flatten();
    var { geom2, geom3, path2 } = require_geometries();
    var calculateEpsilonFromBounds = require_calculateEpsilonFromBounds();
    var measureBoundingBox = require_measureBoundingBox2();
    var measureEpsilonOfPath2 = (geometry) => calculateEpsilonFromBounds(measureBoundingBox(geometry), 2);
    var measureEpsilonOfGeom2 = (geometry) => calculateEpsilonFromBounds(measureBoundingBox(geometry), 2);
    var measureEpsilonOfGeom3 = (geometry) => calculateEpsilonFromBounds(measureBoundingBox(geometry), 3);
    var measureEpsilon = (...geometries2) => {
      geometries2 = flatten(geometries2);
      if (geometries2.length === 0) throw new Error("wrong number of arguments");
      const results = geometries2.map((geometry) => {
        if (path2.isA(geometry)) return measureEpsilonOfPath2(geometry);
        if (geom2.isA(geometry)) return measureEpsilonOfGeom2(geometry);
        if (geom3.isA(geometry)) return measureEpsilonOfGeom3(geometry);
        return 0;
      });
      return results.length === 1 ? results[0] : results;
    };
    module.exports = measureEpsilon;
  }
});

// node_modules/@jscad/modeling/src/measurements/index.js
var require_measurements = __commonJS({
  "node_modules/@jscad/modeling/src/measurements/index.js"(exports, module) {
    module.exports = {
      measureAggregateArea: require_measureAggregateArea(),
      measureAggregateBoundingBox: require_measureAggregateBoundingBox(),
      measureAggregateEpsilon: require_measureAggregateEpsilon(),
      measureAggregateVolume: require_measureAggregateVolume(),
      measureArea: require_measureArea3(),
      measureBoundingBox: require_measureBoundingBox2(),
      measureBoundingSphere: require_measureBoundingSphere2(),
      measureCenter: require_measureCenter(),
      measureCenterOfMass: require_measureCenterOfMass(),
      measureDimensions: require_measureDimensions(),
      measureEpsilon: require_measureEpsilon(),
      measureVolume: require_measureVolume()
    };
  }
});

// node_modules/@jscad/modeling/src/primitives/commonChecks.js
var require_commonChecks = __commonJS({
  "node_modules/@jscad/modeling/src/primitives/commonChecks.js"(exports, module) {
    var isNumberArray = (array, dimension) => {
      if (Array.isArray(array) && array.length >= dimension) {
        return array.every((n) => Number.isFinite(n));
      }
      return false;
    };
    var isGT = (value, constant) => Number.isFinite(value) && value > constant;
    var isGTE = (value, constant) => Number.isFinite(value) && value >= constant;
    module.exports = {
      isNumberArray,
      isGT,
      isGTE
    };
  }
});

// node_modules/@jscad/modeling/src/primitives/arc.js
var require_arc = __commonJS({
  "node_modules/@jscad/modeling/src/primitives/arc.js"(exports, module) {
    var { EPS, TAU } = require_constants();
    var vec2 = require_vec2();
    var path2 = require_path2();
    var { isGT, isGTE, isNumberArray } = require_commonChecks();
    var arc = (options) => {
      const defaults = {
        center: [0, 0],
        radius: 1,
        startAngle: 0,
        endAngle: TAU,
        makeTangent: false,
        segments: 32
      };
      let { center, radius, startAngle, endAngle, makeTangent, segments } = Object.assign({}, defaults, options);
      if (!isNumberArray(center, 2)) throw new Error("center must be an array of X and Y values");
      if (!isGT(radius, 0)) throw new Error("radius must be greater than zero");
      if (!isGTE(startAngle, 0)) throw new Error("startAngle must be positive");
      if (!isGTE(endAngle, 0)) throw new Error("endAngle must be positive");
      if (!isGTE(segments, 4)) throw new Error("segments must be four or more");
      startAngle = startAngle % TAU;
      endAngle = endAngle % TAU;
      let rotation = TAU;
      if (startAngle < endAngle) {
        rotation = endAngle - startAngle;
      }
      if (startAngle > endAngle) {
        rotation = endAngle + (TAU - startAngle);
      }
      const minangle = Math.acos((radius * radius + radius * radius - EPS * EPS) / (2 * radius * radius));
      const centerv = vec2.clone(center);
      let point;
      const pointArray = [];
      if (rotation < minangle) {
        point = vec2.fromAngleRadians(vec2.create(), startAngle);
        vec2.scale(point, point, radius);
        vec2.add(point, point, centerv);
        pointArray.push(point);
      } else {
        const numsteps = Math.floor(segments * (Math.abs(rotation) / TAU));
        let edgestepsize = numsteps * 0.5 / rotation;
        if (edgestepsize > 0.25) edgestepsize = 0.25;
        const totalsteps = makeTangent ? numsteps + 2 : numsteps;
        for (let i = 0; i <= totalsteps; i++) {
          let step = i;
          if (makeTangent) {
            step = (i - 1) * (numsteps - 2 * edgestepsize) / numsteps + edgestepsize;
            if (step < 0) step = 0;
            if (step > numsteps) step = numsteps;
          }
          const angle = startAngle + step * (rotation / numsteps);
          point = vec2.fromAngleRadians(vec2.create(), angle);
          vec2.scale(point, point, radius);
          vec2.add(point, point, centerv);
          pointArray.push(point);
        }
      }
      return path2.fromPoints({ closed: false }, pointArray);
    };
    module.exports = arc;
  }
});

// node_modules/@jscad/modeling/src/primitives/ellipse.js
var require_ellipse = __commonJS({
  "node_modules/@jscad/modeling/src/primitives/ellipse.js"(exports, module) {
    var { EPS, TAU } = require_constants();
    var vec2 = require_vec2();
    var geom2 = require_geom2();
    var { sin, cos } = require_trigonometry();
    var { isGTE, isNumberArray } = require_commonChecks();
    var ellipse = (options) => {
      const defaults = {
        center: [0, 0],
        radius: [1, 1],
        startAngle: 0,
        endAngle: TAU,
        segments: 32
      };
      let { center, radius, startAngle, endAngle, segments } = Object.assign({}, defaults, options);
      if (!isNumberArray(center, 2)) throw new Error("center must be an array of X and Y values");
      if (!isNumberArray(radius, 2)) throw new Error("radius must be an array of X and Y values");
      if (!radius.every((n) => n >= 0)) throw new Error("radius values must be positive");
      if (!isGTE(startAngle, 0)) throw new Error("startAngle must be positive");
      if (!isGTE(endAngle, 0)) throw new Error("endAngle must be positive");
      if (!isGTE(segments, 3)) throw new Error("segments must be three or more");
      if (radius[0] === 0 || radius[1] === 0) return geom2.create();
      startAngle = startAngle % TAU;
      endAngle = endAngle % TAU;
      let rotation = TAU;
      if (startAngle < endAngle) {
        rotation = endAngle - startAngle;
      }
      if (startAngle > endAngle) {
        rotation = endAngle + (TAU - startAngle);
      }
      const minradius = Math.min(radius[0], radius[1]);
      const minangle = Math.acos((minradius * minradius + minradius * minradius - EPS * EPS) / (2 * minradius * minradius));
      if (rotation < minangle) throw new Error("startAngle and endAngle do not define a significant rotation");
      segments = Math.floor(segments * (rotation / TAU));
      const centerv = vec2.clone(center);
      const step = rotation / segments;
      const points = [];
      segments = rotation < TAU ? segments + 1 : segments;
      for (let i = 0; i < segments; i++) {
        const angle = step * i + startAngle;
        const point = vec2.fromValues(radius[0] * cos(angle), radius[1] * sin(angle));
        vec2.add(point, centerv, point);
        points.push(point);
      }
      if (rotation < TAU) points.push(centerv);
      return geom2.fromPoints(points);
    };
    module.exports = ellipse;
  }
});

// node_modules/@jscad/modeling/src/primitives/circle.js
var require_circle = __commonJS({
  "node_modules/@jscad/modeling/src/primitives/circle.js"(exports, module) {
    var { TAU } = require_constants();
    var ellipse = require_ellipse();
    var { isGTE } = require_commonChecks();
    var circle = (options) => {
      const defaults = {
        center: [0, 0],
        radius: 1,
        startAngle: 0,
        endAngle: TAU,
        segments: 32
      };
      let { center, radius, startAngle, endAngle, segments } = Object.assign({}, defaults, options);
      if (!isGTE(radius, 0)) throw new Error("radius must be positive");
      radius = [radius, radius];
      return ellipse({ center, radius, startAngle, endAngle, segments });
    };
    module.exports = circle;
  }
});

// node_modules/@jscad/modeling/src/primitives/cuboid.js
var require_cuboid = __commonJS({
  "node_modules/@jscad/modeling/src/primitives/cuboid.js"(exports, module) {
    var geom3 = require_geom3();
    var poly3 = require_poly3();
    var { isNumberArray } = require_commonChecks();
    var cuboid = (options) => {
      const defaults = {
        center: [0, 0, 0],
        size: [2, 2, 2]
      };
      const { center, size: size2 } = Object.assign({}, defaults, options);
      if (!isNumberArray(center, 3)) throw new Error("center must be an array of X, Y and Z values");
      if (!isNumberArray(size2, 3)) throw new Error("size must be an array of width, depth and height values");
      if (!size2.every((n) => n >= 0)) throw new Error("size values must be positive");
      if (size2[0] === 0 || size2[1] === 0 || size2[2] === 0) return geom3.create();
      const result = geom3.create(
        // adjust a basic shape to size
        [
          [[0, 4, 6, 2], [-1, 0, 0]],
          [[1, 3, 7, 5], [1, 0, 0]],
          [[0, 1, 5, 4], [0, -1, 0]],
          [[2, 6, 7, 3], [0, 1, 0]],
          [[0, 2, 3, 1], [0, 0, -1]],
          [[4, 5, 7, 6], [0, 0, 1]]
        ].map((info) => {
          const points = info[0].map((i) => {
            const pos = [
              center[0] + size2[0] / 2 * (2 * !!(i & 1) - 1),
              center[1] + size2[1] / 2 * (2 * !!(i & 2) - 1),
              center[2] + size2[2] / 2 * (2 * !!(i & 4) - 1)
            ];
            return pos;
          });
          return poly3.create(points);
        })
      );
      return result;
    };
    module.exports = cuboid;
  }
});

// node_modules/@jscad/modeling/src/primitives/cube.js
var require_cube = __commonJS({
  "node_modules/@jscad/modeling/src/primitives/cube.js"(exports, module) {
    var cuboid = require_cuboid();
    var { isGTE } = require_commonChecks();
    var cube = (options) => {
      const defaults = {
        center: [0, 0, 0],
        size: 2
      };
      let { center, size: size2 } = Object.assign({}, defaults, options);
      if (!isGTE(size2, 0)) throw new Error("size must be positive");
      size2 = [size2, size2, size2];
      return cuboid({ center, size: size2 });
    };
    module.exports = cube;
  }
});

// node_modules/@jscad/modeling/src/primitives/cylinderElliptic.js
var require_cylinderElliptic = __commonJS({
  "node_modules/@jscad/modeling/src/primitives/cylinderElliptic.js"(exports, module) {
    var { EPS, TAU } = require_constants();
    var vec3 = require_vec3();
    var geom3 = require_geom3();
    var poly3 = require_poly3();
    var { sin, cos } = require_trigonometry();
    var { isGT, isGTE, isNumberArray } = require_commonChecks();
    var cylinderElliptic = (options) => {
      const defaults = {
        center: [0, 0, 0],
        height: 2,
        startRadius: [1, 1],
        startAngle: 0,
        endRadius: [1, 1],
        endAngle: TAU,
        segments: 32
      };
      let { center, height, startRadius, startAngle, endRadius, endAngle, segments } = Object.assign({}, defaults, options);
      if (!isNumberArray(center, 3)) throw new Error("center must be an array of X, Y and Z values");
      if (!isGT(height, 0)) throw new Error("height must be greater then zero");
      if (!isNumberArray(startRadius, 2)) throw new Error("startRadius must be an array of X and Y values");
      if (!startRadius.every((n) => n >= 0)) throw new Error("startRadius values must be positive");
      if (!isNumberArray(endRadius, 2)) throw new Error("endRadius must be an array of X and Y values");
      if (!endRadius.every((n) => n >= 0)) throw new Error("endRadius values must be positive");
      if (endRadius.every((n) => n === 0) && startRadius.every((n) => n === 0)) throw new Error("at least one radius must be positive");
      if (!isGTE(startAngle, 0)) throw new Error("startAngle must be positive");
      if (!isGTE(endAngle, 0)) throw new Error("endAngle must be positive");
      if (!isGTE(segments, 4)) throw new Error("segments must be four or more");
      startAngle = startAngle % TAU;
      endAngle = endAngle % TAU;
      let rotation = TAU;
      if (startAngle < endAngle) {
        rotation = endAngle - startAngle;
      }
      if (startAngle > endAngle) {
        rotation = endAngle + (TAU - startAngle);
      }
      const minradius = Math.min(startRadius[0], startRadius[1], endRadius[0], endRadius[1]);
      const minangle = Math.acos((minradius * minradius + minradius * minradius - EPS * EPS) / (2 * minradius * minradius));
      if (rotation < minangle) throw new Error("startAngle and endAngle do not define a significant rotation");
      const slices = Math.floor(segments * (rotation / TAU));
      const start = vec3.fromValues(0, 0, -(height / 2));
      const end = vec3.fromValues(0, 0, height / 2);
      const ray = vec3.subtract(vec3.create(), end, start);
      const axisX = vec3.fromValues(1, 0, 0);
      const axisY = vec3.fromValues(0, 1, 0);
      const v1 = vec3.create();
      const v2 = vec3.create();
      const v3 = vec3.create();
      const point = (stack, slice2, radius) => {
        const angle = slice2 * rotation + startAngle;
        vec3.scale(v1, axisX, radius[0] * cos(angle));
        vec3.scale(v2, axisY, radius[1] * sin(angle));
        vec3.add(v1, v1, v2);
        vec3.scale(v3, ray, stack);
        vec3.add(v3, v3, start);
        return vec3.add(vec3.create(), v1, v3);
      };
      const fromPoints = (...points) => {
        const newpoints = points.map((point2) => vec3.add(vec3.create(), point2, center));
        return poly3.create(newpoints);
      };
      const polygons = [];
      for (let i = 0; i < slices; i++) {
        const t0 = i / slices;
        let t1 = (i + 1) / slices;
        if (rotation === TAU && i === slices - 1) t1 = 0;
        if (endRadius[0] === startRadius[0] && endRadius[1] === startRadius[1]) {
          polygons.push(fromPoints(start, point(0, t1, endRadius), point(0, t0, endRadius)));
          polygons.push(fromPoints(point(0, t1, endRadius), point(1, t1, endRadius), point(1, t0, endRadius), point(0, t0, endRadius)));
          polygons.push(fromPoints(end, point(1, t0, endRadius), point(1, t1, endRadius)));
        } else {
          if (startRadius[0] > 0 && startRadius[1] > 0) {
            polygons.push(fromPoints(start, point(0, t1, startRadius), point(0, t0, startRadius)));
          }
          if (startRadius[0] > 0 || startRadius[1] > 0) {
            polygons.push(fromPoints(point(0, t0, startRadius), point(0, t1, startRadius), point(1, t0, endRadius)));
          }
          if (endRadius[0] > 0 && endRadius[1] > 0) {
            polygons.push(fromPoints(end, point(1, t0, endRadius), point(1, t1, endRadius)));
          }
          if (endRadius[0] > 0 || endRadius[1] > 0) {
            polygons.push(fromPoints(point(1, t0, endRadius), point(0, t1, startRadius), point(1, t1, endRadius)));
          }
        }
      }
      if (rotation < TAU) {
        polygons.push(fromPoints(start, point(0, 0, startRadius), end));
        polygons.push(fromPoints(point(0, 0, startRadius), point(1, 0, endRadius), end));
        polygons.push(fromPoints(start, end, point(0, 1, startRadius)));
        polygons.push(fromPoints(point(0, 1, startRadius), end, point(1, 1, endRadius)));
      }
      const result = geom3.create(polygons);
      return result;
    };
    module.exports = cylinderElliptic;
  }
});

// node_modules/@jscad/modeling/src/primitives/cylinder.js
var require_cylinder = __commonJS({
  "node_modules/@jscad/modeling/src/primitives/cylinder.js"(exports, module) {
    var geom3 = require_geom3();
    var cylinderElliptic = require_cylinderElliptic();
    var { isGTE } = require_commonChecks();
    var cylinder = (options) => {
      const defaults = {
        center: [0, 0, 0],
        height: 2,
        radius: 1,
        segments: 32
      };
      const { center, height, radius, segments } = Object.assign({}, defaults, options);
      if (!isGTE(radius, 0)) throw new Error("radius must be positive");
      if (height === 0 || radius === 0) return geom3.create();
      const newoptions = {
        center,
        height,
        startRadius: [radius, radius],
        endRadius: [radius, radius],
        segments
      };
      return cylinderElliptic(newoptions);
    };
    module.exports = cylinder;
  }
});

// node_modules/@jscad/modeling/src/primitives/ellipsoid.js
var require_ellipsoid = __commonJS({
  "node_modules/@jscad/modeling/src/primitives/ellipsoid.js"(exports, module) {
    var { TAU } = require_constants();
    var vec3 = require_vec3();
    var geom3 = require_geom3();
    var poly3 = require_poly3();
    var { sin, cos } = require_trigonometry();
    var { isGTE, isNumberArray } = require_commonChecks();
    var ellipsoid = (options) => {
      const defaults = {
        center: [0, 0, 0],
        radius: [1, 1, 1],
        segments: 32,
        axes: [[1, 0, 0], [0, -1, 0], [0, 0, 1]]
      };
      const { center, radius, segments, axes } = Object.assign({}, defaults, options);
      if (!isNumberArray(center, 3)) throw new Error("center must be an array of X, Y and Z values");
      if (!isNumberArray(radius, 3)) throw new Error("radius must be an array of X, Y and Z values");
      if (!radius.every((n) => n >= 0)) throw new Error("radius values must be positive");
      if (!isGTE(segments, 4)) throw new Error("segments must be four or more");
      if (radius[0] === 0 || radius[1] === 0 || radius[2] === 0) return geom3.create();
      const xvector = vec3.scale(vec3.create(), vec3.normalize(vec3.create(), axes[0]), radius[0]);
      const yvector = vec3.scale(vec3.create(), vec3.normalize(vec3.create(), axes[1]), radius[1]);
      const zvector = vec3.scale(vec3.create(), vec3.normalize(vec3.create(), axes[2]), radius[2]);
      const qsegments = Math.round(segments / 4);
      let prevcylinderpoint;
      const polygons = [];
      const p1 = vec3.create();
      const p2 = vec3.create();
      for (let slice1 = 0; slice1 <= segments; slice1++) {
        const angle = TAU * slice1 / segments;
        const cylinderpoint = vec3.add(vec3.create(), vec3.scale(p1, xvector, cos(angle)), vec3.scale(p2, yvector, sin(angle)));
        if (slice1 > 0) {
          let prevcospitch, prevsinpitch;
          for (let slice2 = 0; slice2 <= qsegments; slice2++) {
            const pitch = TAU / 4 * slice2 / qsegments;
            const cospitch = cos(pitch);
            const sinpitch = sin(pitch);
            if (slice2 > 0) {
              let points = [];
              let point;
              point = vec3.subtract(vec3.create(), vec3.scale(p1, prevcylinderpoint, prevcospitch), vec3.scale(p2, zvector, prevsinpitch));
              points.push(vec3.add(point, point, center));
              point = vec3.subtract(vec3.create(), vec3.scale(p1, cylinderpoint, prevcospitch), vec3.scale(p2, zvector, prevsinpitch));
              points.push(vec3.add(point, point, center));
              if (slice2 < qsegments) {
                point = vec3.subtract(vec3.create(), vec3.scale(p1, cylinderpoint, cospitch), vec3.scale(p2, zvector, sinpitch));
                points.push(vec3.add(point, point, center));
              }
              point = vec3.subtract(vec3.create(), vec3.scale(p1, prevcylinderpoint, cospitch), vec3.scale(p2, zvector, sinpitch));
              points.push(vec3.add(point, point, center));
              polygons.push(poly3.create(points));
              points = [];
              point = vec3.add(vec3.create(), vec3.scale(p1, prevcylinderpoint, prevcospitch), vec3.scale(p2, zvector, prevsinpitch));
              points.push(vec3.add(vec3.create(), center, point));
              point = vec3.add(point, vec3.scale(p1, cylinderpoint, prevcospitch), vec3.scale(p2, zvector, prevsinpitch));
              points.push(vec3.add(vec3.create(), center, point));
              if (slice2 < qsegments) {
                point = vec3.add(point, vec3.scale(p1, cylinderpoint, cospitch), vec3.scale(p2, zvector, sinpitch));
                points.push(vec3.add(vec3.create(), center, point));
              }
              point = vec3.add(point, vec3.scale(p1, prevcylinderpoint, cospitch), vec3.scale(p2, zvector, sinpitch));
              points.push(vec3.add(vec3.create(), center, point));
              points.reverse();
              polygons.push(poly3.create(points));
            }
            prevcospitch = cospitch;
            prevsinpitch = sinpitch;
          }
        }
        prevcylinderpoint = cylinderpoint;
      }
      return geom3.create(polygons);
    };
    module.exports = ellipsoid;
  }
});

// node_modules/@jscad/modeling/src/primitives/polyhedron.js
var require_polyhedron = __commonJS({
  "node_modules/@jscad/modeling/src/primitives/polyhedron.js"(exports, module) {
    var geom3 = require_geom3();
    var poly3 = require_poly3();
    var { isNumberArray } = require_commonChecks();
    var polyhedron = (options) => {
      const defaults = {
        points: [],
        faces: [],
        colors: void 0,
        orientation: "outward"
      };
      const { points, faces, colors, orientation } = Object.assign({}, defaults, options);
      if (!(Array.isArray(points) && Array.isArray(faces))) {
        throw new Error("points and faces must be arrays");
      }
      if (points.length < 3) {
        throw new Error("three or more points are required");
      }
      if (faces.length < 1) {
        throw new Error("one or more faces are required");
      }
      if (colors) {
        if (!Array.isArray(colors)) {
          throw new Error("colors must be an array");
        }
        if (colors.length !== faces.length) {
          throw new Error("faces and colors must have the same length");
        }
      }
      points.forEach((point, i) => {
        if (!isNumberArray(point, 3)) throw new Error(`point ${i} must be an array of X, Y, Z values`);
      });
      faces.forEach((face, i) => {
        if (face.length < 3) throw new Error(`face ${i} must contain 3 or more indexes`);
        if (!isNumberArray(face, face.length)) throw new Error(`face ${i} must be an array of numbers`);
      });
      if (orientation !== "outward") {
        faces.forEach((face) => face.reverse());
      }
      const polygons = faces.map((face, findex) => {
        const polygon = poly3.create(face.map((pindex) => points[pindex]));
        if (colors && colors[findex]) polygon.color = colors[findex];
        return polygon;
      });
      return geom3.create(polygons);
    };
    module.exports = polyhedron;
  }
});

// node_modules/@jscad/modeling/src/primitives/geodesicSphere.js
var require_geodesicSphere = __commonJS({
  "node_modules/@jscad/modeling/src/primitives/geodesicSphere.js"(exports, module) {
    var mat4 = require_mat4();
    var vec3 = require_vec3();
    var geom3 = require_geom3();
    var polyhedron = require_polyhedron();
    var { isGTE } = require_commonChecks();
    var geodesicSphere = (options) => {
      const defaults = {
        radius: 1,
        frequency: 6
      };
      let { radius, frequency } = Object.assign({}, defaults, options);
      if (!isGTE(radius, 0)) throw new Error("radius must be positive");
      if (!isGTE(frequency, 6)) throw new Error("frequency must be six or more");
      if (radius === 0) return geom3.create();
      frequency = Math.floor(frequency / 6);
      const ci = [
        // hard-coded data of icosahedron (20 faces, all triangles)
        [0.850651, 0, -0.525731],
        [0.850651, -0, 0.525731],
        [-0.850651, -0, 0.525731],
        [-0.850651, 0, -0.525731],
        [0, -0.525731, 0.850651],
        [0, 0.525731, 0.850651],
        [0, 0.525731, -0.850651],
        [0, -0.525731, -0.850651],
        [-0.525731, -0.850651, -0],
        [0.525731, -0.850651, -0],
        [0.525731, 0.850651, 0],
        [-0.525731, 0.850651, 0]
      ];
      const ti = [
        [0, 9, 1],
        [1, 10, 0],
        [6, 7, 0],
        [10, 6, 0],
        [7, 9, 0],
        [5, 1, 4],
        [4, 1, 9],
        [5, 10, 1],
        [2, 8, 3],
        [3, 11, 2],
        [2, 5, 4],
        [4, 8, 2],
        [2, 11, 5],
        [3, 7, 6],
        [6, 11, 3],
        [8, 7, 3],
        [9, 8, 4],
        [11, 10, 5],
        [10, 11, 6],
        [8, 9, 7]
      ];
      const geodesicSubDivide = (p, frequency2, offset2) => {
        const p1 = p[0];
        const p2 = p[1];
        const p3 = p[2];
        let n = offset2;
        const c = [];
        const f = [];
        for (let i = 0; i < frequency2; i++) {
          for (let j = 0; j < frequency2 - i; j++) {
            const t0 = i / frequency2;
            const t1 = (i + 1) / frequency2;
            const s0 = j / (frequency2 - i);
            const s1 = (j + 1) / (frequency2 - i);
            const s2 = frequency2 - i - 1 ? j / (frequency2 - i - 1) : 1;
            const q = [];
            q[0] = mix3(mix3(p1, p2, s0), p3, t0);
            q[1] = mix3(mix3(p1, p2, s1), p3, t0);
            q[2] = mix3(mix3(p1, p2, s2), p3, t1);
            for (let k = 0; k < 3; k++) {
              const r = vec3.length(q[k]);
              for (let l = 0; l < 3; l++) {
                q[k][l] /= r;
              }
            }
            c.push(q[0], q[1], q[2]);
            f.push([n, n + 1, n + 2]);
            n += 3;
            if (j < frequency2 - i - 1) {
              const s3 = frequency2 - i - 1 ? (j + 1) / (frequency2 - i - 1) : 1;
              q[0] = mix3(mix3(p1, p2, s1), p3, t0);
              q[1] = mix3(mix3(p1, p2, s3), p3, t1);
              q[2] = mix3(mix3(p1, p2, s2), p3, t1);
              for (let k = 0; k < 3; k++) {
                const r = vec3.length(q[k]);
                for (let l = 0; l < 3; l++) {
                  q[k][l] /= r;
                }
              }
              c.push(q[0], q[1], q[2]);
              f.push([n, n + 1, n + 2]);
              n += 3;
            }
          }
        }
        return { points: c, triangles: f, offset: n };
      };
      const mix3 = (a, b, f) => {
        const _f = 1 - f;
        const c = [];
        for (let i = 0; i < 3; i++) {
          c[i] = a[i] * _f + b[i] * f;
        }
        return c;
      };
      let points = [];
      let faces = [];
      let offset = 0;
      for (let i = 0; i < ti.length; i++) {
        const g = geodesicSubDivide([ci[ti[i][0]], ci[ti[i][1]], ci[ti[i][2]]], frequency, offset);
        points = points.concat(g.points);
        faces = faces.concat(g.triangles);
        offset = g.offset;
      }
      let geometry = polyhedron({ points, faces, orientation: "inward" });
      if (radius !== 1) geometry = geom3.transform(mat4.fromScaling(mat4.create(), [radius, radius, radius]), geometry);
      return geometry;
    };
    module.exports = geodesicSphere;
  }
});

// node_modules/@jscad/modeling/src/primitives/line.js
var require_line = __commonJS({
  "node_modules/@jscad/modeling/src/primitives/line.js"(exports, module) {
    var path2 = require_path2();
    var line = (points) => {
      if (!Array.isArray(points)) throw new Error("points must be an array");
      return path2.fromPoints({}, points);
    };
    module.exports = line;
  }
});

// node_modules/@jscad/modeling/src/primitives/polygon.js
var require_polygon = __commonJS({
  "node_modules/@jscad/modeling/src/primitives/polygon.js"(exports, module) {
    var geom2 = require_geom2();
    var polygon = (options) => {
      const defaults = {
        points: [],
        paths: [],
        orientation: "counterclockwise"
      };
      const { points, paths, orientation } = Object.assign({}, defaults, options);
      if (!(Array.isArray(points) && Array.isArray(paths))) throw new Error("points and paths must be arrays");
      let listofpolys = points;
      if (Array.isArray(points[0])) {
        if (!Array.isArray(points[0][0])) {
          listofpolys = [points];
        }
      }
      listofpolys.forEach((list, i) => {
        if (!Array.isArray(list)) throw new Error("list of points " + i + " must be an array");
        if (list.length < 3) throw new Error("list of points " + i + " must contain three or more points");
        list.forEach((point, j) => {
          if (!Array.isArray(point)) throw new Error("list of points " + i + ", point " + j + " must be an array");
          if (point.length < 2) throw new Error("list of points " + i + ", point " + j + " must contain by X and Y values");
        });
      });
      let listofpaths = paths;
      if (paths.length === 0) {
        let count = 0;
        listofpaths = listofpolys.map((list) => list.map((point) => count++));
      }
      const allpoints = [];
      listofpolys.forEach((list) => list.forEach((point) => allpoints.push(point)));
      let sides = [];
      listofpaths.forEach((path) => {
        const setofpoints = path.map((index) => allpoints[index]);
        const geometry2 = geom2.fromPoints(setofpoints);
        sides = sides.concat(geom2.toSides(geometry2));
      });
      let geometry = geom2.create(sides);
      if (orientation === "clockwise") {
        geometry = geom2.reverse(geometry);
      }
      return geometry;
    };
    module.exports = polygon;
  }
});

// node_modules/@jscad/modeling/src/primitives/rectangle.js
var require_rectangle = __commonJS({
  "node_modules/@jscad/modeling/src/primitives/rectangle.js"(exports, module) {
    var vec2 = require_vec2();
    var geom2 = require_geom2();
    var { isNumberArray } = require_commonChecks();
    var rectangle = (options) => {
      const defaults = {
        center: [0, 0],
        size: [2, 2]
      };
      const { center, size: size2 } = Object.assign({}, defaults, options);
      if (!isNumberArray(center, 2)) throw new Error("center must be an array of X and Y values");
      if (!isNumberArray(size2, 2)) throw new Error("size must be an array of X and Y values");
      if (!size2.every((n) => n >= 0)) throw new Error("size values must be positive");
      if (size2[0] === 0 || size2[1] === 0) return geom2.create();
      const point = [size2[0] / 2, size2[1] / 2];
      const pswap = [point[0], -point[1]];
      const points = [
        vec2.subtract(vec2.create(), center, point),
        vec2.add(vec2.create(), center, pswap),
        vec2.add(vec2.create(), center, point),
        vec2.subtract(vec2.create(), center, pswap)
      ];
      return geom2.fromPoints(points);
    };
    module.exports = rectangle;
  }
});

// node_modules/@jscad/modeling/src/primitives/roundedCuboid.js
var require_roundedCuboid = __commonJS({
  "node_modules/@jscad/modeling/src/primitives/roundedCuboid.js"(exports, module) {
    var { EPS, TAU } = require_constants();
    var vec2 = require_vec2();
    var vec3 = require_vec3();
    var geom3 = require_geom3();
    var poly3 = require_poly3();
    var { sin, cos } = require_trigonometry();
    var { isGTE, isNumberArray } = require_commonChecks();
    var cuboid = require_cuboid();
    var createCorners = (center, size2, radius, segments, slice2, positive) => {
      const pitch = TAU / 4 * slice2 / segments;
      const cospitch = cos(pitch);
      const sinpitch = sin(pitch);
      const layersegments = segments - slice2;
      let layerradius = radius * cospitch;
      let layeroffset = size2[2] - (radius - radius * sinpitch);
      if (!positive) layeroffset = radius - radius * sinpitch - size2[2];
      layerradius = layerradius > EPS ? layerradius : 0;
      const corner0 = vec3.add(vec3.create(), center, [size2[0] - radius, size2[1] - radius, layeroffset]);
      const corner1 = vec3.add(vec3.create(), center, [radius - size2[0], size2[1] - radius, layeroffset]);
      const corner2 = vec3.add(vec3.create(), center, [radius - size2[0], radius - size2[1], layeroffset]);
      const corner3 = vec3.add(vec3.create(), center, [size2[0] - radius, radius - size2[1], layeroffset]);
      const corner0Points = [];
      const corner1Points = [];
      const corner2Points = [];
      const corner3Points = [];
      for (let i = 0; i <= layersegments; i++) {
        const radians = layersegments > 0 ? TAU / 4 * i / layersegments : 0;
        const point2d = vec2.fromAngleRadians(vec2.create(), radians);
        vec2.scale(point2d, point2d, layerradius);
        const point3d = vec3.fromVec2(vec3.create(), point2d);
        corner0Points.push(vec3.add(vec3.create(), corner0, point3d));
        vec3.rotateZ(point3d, point3d, [0, 0, 0], TAU / 4);
        corner1Points.push(vec3.add(vec3.create(), corner1, point3d));
        vec3.rotateZ(point3d, point3d, [0, 0, 0], TAU / 4);
        corner2Points.push(vec3.add(vec3.create(), corner2, point3d));
        vec3.rotateZ(point3d, point3d, [0, 0, 0], TAU / 4);
        corner3Points.push(vec3.add(vec3.create(), corner3, point3d));
      }
      if (!positive) {
        corner0Points.reverse();
        corner1Points.reverse();
        corner2Points.reverse();
        corner3Points.reverse();
        return [corner3Points, corner2Points, corner1Points, corner0Points];
      }
      return [corner0Points, corner1Points, corner2Points, corner3Points];
    };
    var stitchCorners = (previousCorners, currentCorners) => {
      const polygons = [];
      for (let i = 0; i < previousCorners.length; i++) {
        const previous = previousCorners[i];
        const current = currentCorners[i];
        for (let j = 0; j < previous.length - 1; j++) {
          polygons.push(poly3.create([previous[j], previous[j + 1], current[j]]));
          if (j < current.length - 1) {
            polygons.push(poly3.create([current[j], previous[j + 1], current[j + 1]]));
          }
        }
      }
      return polygons;
    };
    var stitchWalls = (previousCorners, currentCorners) => {
      const polygons = [];
      for (let i = 0; i < previousCorners.length; i++) {
        let previous = previousCorners[i];
        let current = currentCorners[i];
        const p0 = previous[previous.length - 1];
        const c0 = current[current.length - 1];
        const j = (i + 1) % previousCorners.length;
        previous = previousCorners[j];
        current = currentCorners[j];
        const p1 = previous[0];
        const c1 = current[0];
        polygons.push(poly3.create([p0, p1, c1, c0]));
      }
      return polygons;
    };
    var stitchSides = (bottomCorners, topCorners) => {
      bottomCorners = [bottomCorners[3], bottomCorners[2], bottomCorners[1], bottomCorners[0]];
      bottomCorners = bottomCorners.map((corner) => corner.slice().reverse());
      const bottomPoints = [];
      bottomCorners.forEach((corner) => {
        corner.forEach((point) => bottomPoints.push(point));
      });
      const topPoints = [];
      topCorners.forEach((corner) => {
        corner.forEach((point) => topPoints.push(point));
      });
      const polygons = [];
      for (let i = 0; i < topPoints.length; i++) {
        const j = (i + 1) % topPoints.length;
        polygons.push(poly3.create([bottomPoints[i], bottomPoints[j], topPoints[j], topPoints[i]]));
      }
      return polygons;
    };
    var roundedCuboid = (options) => {
      const defaults = {
        center: [0, 0, 0],
        size: [2, 2, 2],
        roundRadius: 0.2,
        segments: 32
      };
      let { center, size: size2, roundRadius, segments } = Object.assign({}, defaults, options);
      if (!isNumberArray(center, 3)) throw new Error("center must be an array of X, Y and Z values");
      if (!isNumberArray(size2, 3)) throw new Error("size must be an array of X, Y and Z values");
      if (!size2.every((n) => n >= 0)) throw new Error("size values must be positive");
      if (!isGTE(roundRadius, 0)) throw new Error("roundRadius must be positive");
      if (!isGTE(segments, 4)) throw new Error("segments must be four or more");
      if (size2[0] === 0 || size2[1] === 0 || size2[2] === 0) return geom3.create();
      if (roundRadius === 0) return cuboid({ center, size: size2 });
      size2 = size2.map((v) => v / 2);
      if (roundRadius > size2[0] - EPS || roundRadius > size2[1] - EPS || roundRadius > size2[2] - EPS) throw new Error("roundRadius must be smaller than the radius of all dimensions");
      segments = Math.floor(segments / 4);
      let prevCornersPos = null;
      let prevCornersNeg = null;
      let polygons = [];
      for (let slice2 = 0; slice2 <= segments; slice2++) {
        const cornersPos = createCorners(center, size2, roundRadius, segments, slice2, true);
        const cornersNeg = createCorners(center, size2, roundRadius, segments, slice2, false);
        if (slice2 === 0) {
          polygons = polygons.concat(stitchSides(cornersNeg, cornersPos));
        }
        if (prevCornersPos) {
          polygons = polygons.concat(
            stitchCorners(prevCornersPos, cornersPos),
            stitchWalls(prevCornersPos, cornersPos)
          );
        }
        if (prevCornersNeg) {
          polygons = polygons.concat(
            stitchCorners(prevCornersNeg, cornersNeg),
            stitchWalls(prevCornersNeg, cornersNeg)
          );
        }
        if (slice2 === segments) {
          let points = cornersPos.map((corner) => corner[0]);
          polygons.push(poly3.create(points));
          points = cornersNeg.map((corner) => corner[0]);
          polygons.push(poly3.create(points));
        }
        prevCornersPos = cornersPos;
        prevCornersNeg = cornersNeg;
      }
      return geom3.create(polygons);
    };
    module.exports = roundedCuboid;
  }
});

// node_modules/@jscad/modeling/src/primitives/roundedCylinder.js
var require_roundedCylinder = __commonJS({
  "node_modules/@jscad/modeling/src/primitives/roundedCylinder.js"(exports, module) {
    var { EPS, TAU } = require_constants();
    var vec3 = require_vec3();
    var geom3 = require_geom3();
    var poly3 = require_poly3();
    var { sin, cos } = require_trigonometry();
    var { isGTE, isNumberArray } = require_commonChecks();
    var cylinder = require_cylinder();
    var roundedCylinder = (options) => {
      const defaults = {
        center: [0, 0, 0],
        height: 2,
        radius: 1,
        roundRadius: 0.2,
        segments: 32
      };
      const { center, height, radius, roundRadius, segments } = Object.assign({}, defaults, options);
      if (!isNumberArray(center, 3)) throw new Error("center must be an array of X, Y and Z values");
      if (!isGTE(height, 0)) throw new Error("height must be positive");
      if (!isGTE(radius, 0)) throw new Error("radius must be positive");
      if (!isGTE(roundRadius, 0)) throw new Error("roundRadius must be positive");
      if (roundRadius > radius) throw new Error("roundRadius must be smaller than the radius");
      if (!isGTE(segments, 4)) throw new Error("segments must be four or more");
      if (height === 0 || radius === 0) return geom3.create();
      if (roundRadius === 0) return cylinder({ center, height, radius });
      const start = [0, 0, -(height / 2)];
      const end = [0, 0, height / 2];
      const direction = vec3.subtract(vec3.create(), end, start);
      const length = vec3.length(direction);
      if (2 * roundRadius > length - EPS) throw new Error("height must be larger than twice roundRadius");
      let defaultnormal;
      if (Math.abs(direction[0]) > Math.abs(direction[1])) {
        defaultnormal = vec3.fromValues(0, 1, 0);
      } else {
        defaultnormal = vec3.fromValues(1, 0, 0);
      }
      const zvector = vec3.scale(vec3.create(), vec3.normalize(vec3.create(), direction), roundRadius);
      const xvector = vec3.scale(vec3.create(), vec3.normalize(vec3.create(), vec3.cross(vec3.create(), zvector, defaultnormal)), radius);
      const yvector = vec3.scale(vec3.create(), vec3.normalize(vec3.create(), vec3.cross(vec3.create(), xvector, zvector)), radius);
      vec3.add(start, start, zvector);
      vec3.subtract(end, end, zvector);
      const qsegments = Math.floor(0.25 * segments);
      const fromPoints = (points) => {
        const newpoints = points.map((point) => vec3.add(point, point, center));
        return poly3.create(newpoints);
      };
      const polygons = [];
      const v1 = vec3.create();
      const v2 = vec3.create();
      let prevcylinderpoint;
      for (let slice1 = 0; slice1 <= segments; slice1++) {
        const angle = TAU * slice1 / segments;
        const cylinderpoint = vec3.add(vec3.create(), vec3.scale(v1, xvector, cos(angle)), vec3.scale(v2, yvector, sin(angle)));
        if (slice1 > 0) {
          let points = [];
          points.push(vec3.add(vec3.create(), start, cylinderpoint));
          points.push(vec3.add(vec3.create(), start, prevcylinderpoint));
          points.push(vec3.add(vec3.create(), end, prevcylinderpoint));
          points.push(vec3.add(vec3.create(), end, cylinderpoint));
          polygons.push(fromPoints(points));
          let prevcospitch, prevsinpitch;
          for (let slice2 = 0; slice2 <= qsegments; slice2++) {
            const pitch = TAU / 4 * slice2 / qsegments;
            const cospitch = cos(pitch);
            const sinpitch = sin(pitch);
            if (slice2 > 0) {
              points = [];
              let point;
              point = vec3.add(vec3.create(), start, vec3.subtract(v1, vec3.scale(v1, prevcylinderpoint, prevcospitch), vec3.scale(v2, zvector, prevsinpitch)));
              points.push(point);
              point = vec3.add(vec3.create(), start, vec3.subtract(v1, vec3.scale(v1, cylinderpoint, prevcospitch), vec3.scale(v2, zvector, prevsinpitch)));
              points.push(point);
              if (slice2 < qsegments) {
                point = vec3.add(vec3.create(), start, vec3.subtract(v1, vec3.scale(v1, cylinderpoint, cospitch), vec3.scale(v2, zvector, sinpitch)));
                points.push(point);
              }
              point = vec3.add(vec3.create(), start, vec3.subtract(v1, vec3.scale(v1, prevcylinderpoint, cospitch), vec3.scale(v2, zvector, sinpitch)));
              points.push(point);
              polygons.push(fromPoints(points));
              points = [];
              point = vec3.add(vec3.create(), vec3.scale(v1, prevcylinderpoint, prevcospitch), vec3.scale(v2, zvector, prevsinpitch));
              vec3.add(point, point, end);
              points.push(point);
              point = vec3.add(vec3.create(), vec3.scale(v1, cylinderpoint, prevcospitch), vec3.scale(v2, zvector, prevsinpitch));
              vec3.add(point, point, end);
              points.push(point);
              if (slice2 < qsegments) {
                point = vec3.add(vec3.create(), vec3.scale(v1, cylinderpoint, cospitch), vec3.scale(v2, zvector, sinpitch));
                vec3.add(point, point, end);
                points.push(point);
              }
              point = vec3.add(vec3.create(), vec3.scale(v1, prevcylinderpoint, cospitch), vec3.scale(v2, zvector, sinpitch));
              vec3.add(point, point, end);
              points.push(point);
              points.reverse();
              polygons.push(fromPoints(points));
            }
            prevcospitch = cospitch;
            prevsinpitch = sinpitch;
          }
        }
        prevcylinderpoint = cylinderpoint;
      }
      const result = geom3.create(polygons);
      return result;
    };
    module.exports = roundedCylinder;
  }
});

// node_modules/@jscad/modeling/src/primitives/roundedRectangle.js
var require_roundedRectangle = __commonJS({
  "node_modules/@jscad/modeling/src/primitives/roundedRectangle.js"(exports, module) {
    var { EPS, TAU } = require_constants();
    var vec2 = require_vec2();
    var geom2 = require_geom2();
    var { isGTE, isNumberArray } = require_commonChecks();
    var rectangle = require_rectangle();
    var roundedRectangle = (options) => {
      const defaults = {
        center: [0, 0],
        size: [2, 2],
        roundRadius: 0.2,
        segments: 32
      };
      let { center, size: size2, roundRadius, segments } = Object.assign({}, defaults, options);
      if (!isNumberArray(center, 2)) throw new Error("center must be an array of X and Y values");
      if (!isNumberArray(size2, 2)) throw new Error("size must be an array of X and Y values");
      if (!size2.every((n) => n >= 0)) throw new Error("size values must be positive");
      if (!isGTE(roundRadius, 0)) throw new Error("roundRadius must be positive");
      if (!isGTE(segments, 4)) throw new Error("segments must be four or more");
      if (size2[0] === 0 || size2[1] === 0) return geom2.create();
      if (roundRadius === 0) return rectangle({ center, size: size2 });
      size2 = size2.map((v) => v / 2);
      if (roundRadius > size2[0] - EPS || roundRadius > size2[1] - EPS) throw new Error("roundRadius must be smaller than the radius of all dimensions");
      const cornersegments = Math.floor(segments / 4);
      const corner0 = vec2.add(vec2.create(), center, [size2[0] - roundRadius, size2[1] - roundRadius]);
      const corner1 = vec2.add(vec2.create(), center, [roundRadius - size2[0], size2[1] - roundRadius]);
      const corner2 = vec2.add(vec2.create(), center, [roundRadius - size2[0], roundRadius - size2[1]]);
      const corner3 = vec2.add(vec2.create(), center, [size2[0] - roundRadius, roundRadius - size2[1]]);
      const corner0Points = [];
      const corner1Points = [];
      const corner2Points = [];
      const corner3Points = [];
      for (let i = 0; i <= cornersegments; i++) {
        const radians = TAU / 4 * i / cornersegments;
        const point = vec2.fromAngleRadians(vec2.create(), radians);
        vec2.scale(point, point, roundRadius);
        corner0Points.push(vec2.add(vec2.create(), corner0, point));
        vec2.rotate(point, point, vec2.create(), TAU / 4);
        corner1Points.push(vec2.add(vec2.create(), corner1, point));
        vec2.rotate(point, point, vec2.create(), TAU / 4);
        corner2Points.push(vec2.add(vec2.create(), corner2, point));
        vec2.rotate(point, point, vec2.create(), TAU / 4);
        corner3Points.push(vec2.add(vec2.create(), corner3, point));
      }
      return geom2.fromPoints(corner0Points.concat(corner1Points, corner2Points, corner3Points));
    };
    module.exports = roundedRectangle;
  }
});

// node_modules/@jscad/modeling/src/primitives/sphere.js
var require_sphere = __commonJS({
  "node_modules/@jscad/modeling/src/primitives/sphere.js"(exports, module) {
    var ellipsoid = require_ellipsoid();
    var { isGTE } = require_commonChecks();
    var sphere = (options) => {
      const defaults = {
        center: [0, 0, 0],
        radius: 1,
        segments: 32,
        axes: [[1, 0, 0], [0, -1, 0], [0, 0, 1]]
      };
      let { center, radius, segments, axes } = Object.assign({}, defaults, options);
      if (!isGTE(radius, 0)) throw new Error("radius must be positive");
      radius = [radius, radius, radius];
      return ellipsoid({ center, radius, segments, axes });
    };
    module.exports = sphere;
  }
});

// node_modules/@jscad/modeling/src/primitives/square.js
var require_square = __commonJS({
  "node_modules/@jscad/modeling/src/primitives/square.js"(exports, module) {
    var rectangle = require_rectangle();
    var { isGTE } = require_commonChecks();
    var square = (options) => {
      const defaults = {
        center: [0, 0],
        size: 2
      };
      let { center, size: size2 } = Object.assign({}, defaults, options);
      if (!isGTE(size2, 0)) throw new Error("size must be positive");
      size2 = [size2, size2];
      return rectangle({ center, size: size2 });
    };
    module.exports = square;
  }
});

// node_modules/@jscad/modeling/src/primitives/star.js
var require_star = __commonJS({
  "node_modules/@jscad/modeling/src/primitives/star.js"(exports, module) {
    var { TAU } = require_constants();
    var vec2 = require_vec2();
    var geom2 = require_geom2();
    var { isGT, isGTE, isNumberArray } = require_commonChecks();
    var getRadiusRatio = (vertices, density) => {
      if (vertices > 0 && density > 1 && density < vertices / 2) {
        return Math.cos(Math.PI * density / vertices) / Math.cos(Math.PI * (density - 1) / vertices);
      }
      return 0;
    };
    var getPoints = (vertices, radius, startAngle, center) => {
      const a = TAU / vertices;
      const points = [];
      for (let i = 0; i < vertices; i++) {
        const point = vec2.fromAngleRadians(vec2.create(), a * i + startAngle);
        vec2.scale(point, point, radius);
        vec2.add(point, center, point);
        points.push(point);
      }
      return points;
    };
    var star = (options) => {
      const defaults = {
        center: [0, 0],
        vertices: 5,
        outerRadius: 1,
        innerRadius: 0,
        density: 2,
        startAngle: 0
      };
      let { center, vertices, outerRadius, innerRadius, density, startAngle } = Object.assign({}, defaults, options);
      if (!isNumberArray(center, 2)) throw new Error("center must be an array of X and Y values");
      if (!isGTE(vertices, 2)) throw new Error("vertices must be two or more");
      if (!isGT(outerRadius, 0)) throw new Error("outerRadius must be greater than zero");
      if (!isGTE(innerRadius, 0)) throw new Error("innerRadius must be greater than zero");
      if (!isGTE(startAngle, 0)) throw new Error("startAngle must be greater than zero");
      vertices = Math.floor(vertices);
      density = Math.floor(density);
      startAngle = startAngle % TAU;
      if (innerRadius === 0) {
        if (!isGTE(density, 2)) throw new Error("density must be two or more");
        innerRadius = outerRadius * getRadiusRatio(vertices, density);
      }
      const centerv = vec2.clone(center);
      const outerPoints = getPoints(vertices, outerRadius, startAngle, centerv);
      const innerPoints = getPoints(vertices, innerRadius, startAngle + Math.PI / vertices, centerv);
      const allPoints = [];
      for (let i = 0; i < vertices; i++) {
        allPoints.push(outerPoints[i]);
        allPoints.push(innerPoints[i]);
      }
      return geom2.fromPoints(allPoints);
    };
    module.exports = star;
  }
});

// node_modules/@jscad/modeling/src/operations/transforms/mirror.js
var require_mirror = __commonJS({
  "node_modules/@jscad/modeling/src/operations/transforms/mirror.js"(exports, module) {
    var flatten = require_flatten();
    var mat4 = require_mat4();
    var plane = require_plane();
    var geom2 = require_geom2();
    var geom3 = require_geom3();
    var path2 = require_path2();
    var mirror = (options, ...objects) => {
      const defaults = {
        origin: [0, 0, 0],
        normal: [0, 0, 1]
        // Z axis
      };
      const { origin, normal } = Object.assign({}, defaults, options);
      objects = flatten(objects);
      if (objects.length === 0) throw new Error("wrong number of arguments");
      const planeOfMirror = plane.fromNormalAndPoint(plane.create(), normal, origin);
      if (Number.isNaN(planeOfMirror[0])) {
        throw new Error("the given origin and normal do not define a proper plane");
      }
      const matrix = mat4.mirrorByPlane(mat4.create(), planeOfMirror);
      const results = objects.map((object) => {
        if (path2.isA(object)) return path2.transform(matrix, object);
        if (geom2.isA(object)) return geom2.transform(matrix, object);
        if (geom3.isA(object)) return geom3.transform(matrix, object);
        return object;
      });
      return results.length === 1 ? results[0] : results;
    };
    var mirrorX = (...objects) => mirror({ normal: [1, 0, 0] }, objects);
    var mirrorY = (...objects) => mirror({ normal: [0, 1, 0] }, objects);
    var mirrorZ = (...objects) => mirror({ normal: [0, 0, 1] }, objects);
    module.exports = {
      mirror,
      mirrorX,
      mirrorY,
      mirrorZ
    };
  }
});

// node_modules/@jscad/modeling/src/operations/extrusions/slice/calculatePlane.js
var require_calculatePlane = __commonJS({
  "node_modules/@jscad/modeling/src/operations/extrusions/slice/calculatePlane.js"(exports, module) {
    var plane = require_plane();
    var vec3 = require_vec3();
    var calculatePlane = (slice2) => {
      const edges = slice2.edges;
      if (edges.length < 3) throw new Error("slices must have 3 or more edges to calculate a plane");
      const midpoint = edges.reduce((point, edge) => vec3.add(vec3.create(), point, edge[0]), vec3.create());
      vec3.scale(midpoint, midpoint, 1 / edges.length);
      let farthestEdge;
      let distance = 0;
      edges.forEach((edge) => {
        if (!vec3.equals(edge[0], edge[1])) {
          const d = vec3.squaredDistance(midpoint, edge[0]);
          if (d > distance) {
            farthestEdge = edge;
            distance = d;
          }
        }
      });
      const beforeEdge = edges.find((edge) => vec3.equals(edge[1], farthestEdge[0]));
      return plane.fromPoints(plane.create(), beforeEdge[0], farthestEdge[0], farthestEdge[1]);
    };
    module.exports = calculatePlane;
  }
});

// node_modules/@jscad/modeling/src/operations/extrusions/slice/create.js
var require_create13 = __commonJS({
  "node_modules/@jscad/modeling/src/operations/extrusions/slice/create.js"(exports, module) {
    var create = (edges) => {
      if (!edges) {
        edges = [];
      }
      return { edges };
    };
    module.exports = create;
  }
});

// node_modules/@jscad/modeling/src/operations/extrusions/slice/clone.js
var require_clone11 = __commonJS({
  "node_modules/@jscad/modeling/src/operations/extrusions/slice/clone.js"(exports, module) {
    var create = require_create13();
    var vec3 = require_vec3();
    var clone = (...params) => {
      let out;
      let slice2;
      if (params.length === 1) {
        out = create();
        slice2 = params[0];
      } else {
        out = params[0];
        slice2 = params[1];
      }
      out.edges = slice2.edges.map((edge) => [vec3.clone(edge[0]), vec3.clone(edge[1])]);
      return out;
    };
    module.exports = clone;
  }
});

// node_modules/@jscad/modeling/src/operations/extrusions/slice/equals.js
var require_equals8 = __commonJS({
  "node_modules/@jscad/modeling/src/operations/extrusions/slice/equals.js"(exports, module) {
    var vec3 = require_vec3();
    var equals = (a, b) => {
      const aedges = a.edges;
      const bedges = b.edges;
      if (aedges.length !== bedges.length) {
        return false;
      }
      const isEqual = aedges.reduce((acc, aedge, i) => {
        const bedge = bedges[i];
        const d = vec3.squaredDistance(aedge[0], bedge[0]);
        return acc && d < Number.EPSILON;
      }, true);
      return isEqual;
    };
    module.exports = equals;
  }
});

// node_modules/@jscad/modeling/src/operations/extrusions/slice/fromPoints.js
var require_fromPoints8 = __commonJS({
  "node_modules/@jscad/modeling/src/operations/extrusions/slice/fromPoints.js"(exports, module) {
    var vec3 = require_vec3();
    var create = require_create13();
    var fromPoints = (points) => {
      if (!Array.isArray(points)) throw new Error("the given points must be an array");
      if (points.length < 3) throw new Error("the given points must contain THREE or more points");
      const edges = [];
      let prevpoint = points[points.length - 1];
      points.forEach((point) => {
        if (point.length === 2) edges.push([vec3.fromVec2(vec3.create(), prevpoint), vec3.fromVec2(vec3.create(), point)]);
        if (point.length === 3) edges.push([prevpoint, point]);
        prevpoint = point;
      });
      return create(edges);
    };
    module.exports = fromPoints;
  }
});

// node_modules/@jscad/modeling/src/operations/extrusions/slice/fromSides.js
var require_fromSides = __commonJS({
  "node_modules/@jscad/modeling/src/operations/extrusions/slice/fromSides.js"(exports, module) {
    var vec3 = require_vec3();
    var create = require_create13();
    var fromSides = (sides) => {
      if (!Array.isArray(sides)) throw new Error("the given sides must be an array");
      const edges = [];
      sides.forEach((side) => {
        edges.push([vec3.fromVec2(vec3.create(), side[0]), vec3.fromVec2(vec3.create(), side[1])]);
      });
      return create(edges);
    };
    module.exports = fromSides;
  }
});

// node_modules/@jscad/modeling/src/operations/extrusions/slice/isA.js
var require_isA5 = __commonJS({
  "node_modules/@jscad/modeling/src/operations/extrusions/slice/isA.js"(exports, module) {
    var isA = (object) => {
      if (object && typeof object === "object") {
        if ("edges" in object) {
          if (Array.isArray(object.edges)) {
            return true;
          }
        }
      }
      return false;
    };
    module.exports = isA;
  }
});

// node_modules/@jscad/modeling/src/operations/extrusions/slice/reverse.js
var require_reverse5 = __commonJS({
  "node_modules/@jscad/modeling/src/operations/extrusions/slice/reverse.js"(exports, module) {
    var create = require_create13();
    var reverse = (...params) => {
      let out;
      let slice2;
      if (params.length === 1) {
        out = create();
        slice2 = params[0];
      } else {
        out = params[0];
        slice2 = params[1];
      }
      out.edges = slice2.edges.map((edge) => [edge[1], edge[0]]);
      return out;
    };
    module.exports = reverse;
  }
});

// node_modules/@jscad/modeling/src/operations/extrusions/slice/toEdges.js
var require_toEdges = __commonJS({
  "node_modules/@jscad/modeling/src/operations/extrusions/slice/toEdges.js"(exports, module) {
    var toEdges = (slice2) => slice2.edges;
    module.exports = toEdges;
  }
});

// node_modules/@jscad/modeling/src/operations/extrusions/earcut/linkedListSort.js
var require_linkedListSort = __commonJS({
  "node_modules/@jscad/modeling/src/operations/extrusions/earcut/linkedListSort.js"(exports, module) {
    var sortLinked = (list, fn) => {
      let i, p, q, e, numMerges;
      let inSize = 1;
      do {
        p = list;
        list = null;
        let tail = null;
        numMerges = 0;
        while (p) {
          numMerges++;
          q = p;
          let pSize = 0;
          for (i = 0; i < inSize; i++) {
            pSize++;
            q = q.nextZ;
            if (!q) break;
          }
          let qSize = inSize;
          while (pSize > 0 || qSize > 0 && q) {
            if (pSize !== 0 && (qSize === 0 || !q || fn(p) <= fn(q))) {
              e = p;
              p = p.nextZ;
              pSize--;
            } else {
              e = q;
              q = q.nextZ;
              qSize--;
            }
            if (tail) tail.nextZ = e;
            else list = e;
            e.prevZ = tail;
            tail = e;
          }
          p = q;
        }
        tail.nextZ = null;
        inSize *= 2;
      } while (numMerges > 1);
      return list;
    };
    module.exports = sortLinked;
  }
});

// node_modules/@jscad/modeling/src/operations/extrusions/earcut/linkedList.js
var require_linkedList = __commonJS({
  "node_modules/@jscad/modeling/src/operations/extrusions/earcut/linkedList.js"(exports, module) {
    var sortLinked = require_linkedListSort();
    var Node3 = class {
      constructor(i, x, y) {
        this.i = i;
        this.x = x;
        this.y = y;
        this.prev = null;
        this.next = null;
        this.z = null;
        this.prevZ = null;
        this.nextZ = null;
        this.steiner = false;
      }
    };
    var insertNode = (i, x, y, last) => {
      const p = new Node3(i, x, y);
      if (!last) {
        p.prev = p;
        p.next = p;
      } else {
        p.next = last.next;
        p.prev = last;
        last.next.prev = p;
        last.next = p;
      }
      return p;
    };
    var removeNode = (p) => {
      p.next.prev = p.prev;
      p.prev.next = p.next;
      if (p.prevZ) p.prevZ.nextZ = p.nextZ;
      if (p.nextZ) p.nextZ.prevZ = p.prevZ;
    };
    module.exports = { Node: Node3, insertNode, removeNode, sortLinked };
  }
});

// node_modules/@jscad/modeling/src/operations/extrusions/earcut/triangle.js
var require_triangle = __commonJS({
  "node_modules/@jscad/modeling/src/operations/extrusions/earcut/triangle.js"(exports, module) {
    var pointInTriangle = (ax, ay, bx, by, cx, cy, px, py) => (cx - px) * (ay - py) - (ax - px) * (cy - py) >= 0 && (ax - px) * (by - py) - (bx - px) * (ay - py) >= 0 && (bx - px) * (cy - py) - (cx - px) * (by - py) >= 0;
    var area = (p, q, r) => (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
    module.exports = { area, pointInTriangle };
  }
});

// node_modules/@jscad/modeling/src/operations/extrusions/earcut/linkedPolygon.js
var require_linkedPolygon = __commonJS({
  "node_modules/@jscad/modeling/src/operations/extrusions/earcut/linkedPolygon.js"(exports, module) {
    var { Node: Node3, insertNode, removeNode } = require_linkedList();
    var { area } = require_triangle();
    var linkedPolygon = (data, start, end, dim, clockwise) => {
      let last;
      if (clockwise === signedArea(data, start, end, dim) > 0) {
        for (let i = start; i < end; i += dim) {
          last = insertNode(i, data[i], data[i + 1], last);
        }
      } else {
        for (let i = end - dim; i >= start; i -= dim) {
          last = insertNode(i, data[i], data[i + 1], last);
        }
      }
      if (last && equals(last, last.next)) {
        removeNode(last);
        last = last.next;
      }
      return last;
    };
    var filterPoints = (start, end) => {
      if (!start) return start;
      if (!end) end = start;
      let p = start;
      let again;
      do {
        again = false;
        if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
          removeNode(p);
          p = end = p.prev;
          if (p === p.next) break;
          again = true;
        } else {
          p = p.next;
        }
      } while (again || p !== end);
      return end;
    };
    var cureLocalIntersections = (start, triangles, dim) => {
      let p = start;
      do {
        const a = p.prev;
        const b = p.next.next;
        if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {
          triangles.push(a.i / dim);
          triangles.push(p.i / dim);
          triangles.push(b.i / dim);
          removeNode(p);
          removeNode(p.next);
          p = start = b;
        }
        p = p.next;
      } while (p !== start);
      return filterPoints(p);
    };
    var intersectsPolygon = (a, b) => {
      let p = a;
      do {
        if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i && intersects(p, p.next, a, b)) return true;
        p = p.next;
      } while (p !== a);
      return false;
    };
    var locallyInside = (a, b) => area(a.prev, a, a.next) < 0 ? area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 : area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
    var middleInside = (a, b) => {
      let p = a;
      let inside = false;
      const px = (a.x + b.x) / 2;
      const py = (a.y + b.y) / 2;
      do {
        if (p.y > py !== p.next.y > py && p.next.y !== p.y && px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x) {
          inside = !inside;
        }
        p = p.next;
      } while (p !== a);
      return inside;
    };
    var splitPolygon = (a, b) => {
      const a2 = new Node3(a.i, a.x, a.y);
      const b2 = new Node3(b.i, b.x, b.y);
      const an = a.next;
      const bp = b.prev;
      a.next = b;
      b.prev = a;
      a2.next = an;
      an.prev = a2;
      b2.next = a2;
      a2.prev = b2;
      bp.next = b2;
      b2.prev = bp;
      return b2;
    };
    var isValidDiagonal = (a, b) => a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) && // doesn't intersect other edges
    (locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b) && // locally visible
    (area(a.prev, a, b.prev) || area(a, b.prev, b)) || // does not create opposite-facing sectors
    equals(a, b) && area(a.prev, a, a.next) > 0 && area(b.prev, b, b.next) > 0);
    var intersects = (p1, q1, p2, q2) => {
      const o1 = Math.sign(area(p1, q1, p2));
      const o2 = Math.sign(area(p1, q1, q2));
      const o3 = Math.sign(area(p2, q2, p1));
      const o4 = Math.sign(area(p2, q2, q1));
      if (o1 !== o2 && o3 !== o4) return true;
      if (o1 === 0 && onSegment(p1, p2, q1)) return true;
      if (o2 === 0 && onSegment(p1, q2, q1)) return true;
      if (o3 === 0 && onSegment(p2, p1, q2)) return true;
      if (o4 === 0 && onSegment(p2, q1, q2)) return true;
      return false;
    };
    var onSegment = (p, q, r) => q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) && q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y);
    var signedArea = (data, start, end, dim) => {
      let sum = 0;
      for (let i = start, j = end - dim; i < end; i += dim) {
        sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
        j = i;
      }
      return sum;
    };
    var equals = (p1, p2) => p1.x === p2.x && p1.y === p2.y;
    module.exports = { cureLocalIntersections, filterPoints, isValidDiagonal, linkedPolygon, locallyInside, splitPolygon };
  }
});

// node_modules/@jscad/modeling/src/operations/extrusions/earcut/eliminateHoles.js
var require_eliminateHoles = __commonJS({
  "node_modules/@jscad/modeling/src/operations/extrusions/earcut/eliminateHoles.js"(exports, module) {
    var { filterPoints, linkedPolygon, locallyInside, splitPolygon } = require_linkedPolygon();
    var { area, pointInTriangle } = require_triangle();
    var eliminateHoles = (data, holeIndices, outerNode, dim) => {
      const queue = [];
      for (let i = 0, len = holeIndices.length; i < len; i++) {
        const start = holeIndices[i] * dim;
        const end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
        const list = linkedPolygon(data, start, end, dim, false);
        if (list === list.next) list.steiner = true;
        queue.push(getLeftmost(list));
      }
      queue.sort((a, b) => a.x - b.x);
      for (let i = 0; i < queue.length; i++) {
        outerNode = eliminateHole(queue[i], outerNode);
        outerNode = filterPoints(outerNode, outerNode.next);
      }
      return outerNode;
    };
    var eliminateHole = (hole, outerNode) => {
      const bridge = findHoleBridge(hole, outerNode);
      if (!bridge) {
        return outerNode;
      }
      const bridgeReverse = splitPolygon(bridge, hole);
      const filteredBridge = filterPoints(bridge, bridge.next);
      filterPoints(bridgeReverse, bridgeReverse.next);
      return outerNode === bridge ? filteredBridge : outerNode;
    };
    var findHoleBridge = (hole, outerNode) => {
      let p = outerNode;
      const hx = hole.x;
      const hy = hole.y;
      let qx = -Infinity;
      let m;
      do {
        if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
          const x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
          if (x <= hx && x > qx) {
            qx = x;
            if (x === hx) {
              if (hy === p.y) return p;
              if (hy === p.next.y) return p.next;
            }
            m = p.x < p.next.x ? p : p.next;
          }
        }
        p = p.next;
      } while (p !== outerNode);
      if (!m) return null;
      if (hx === qx) return m;
      const stop = m;
      const mx = m.x;
      const my = m.y;
      let tanMin = Infinity;
      p = m;
      do {
        if (hx >= p.x && p.x >= mx && hx !== p.x && pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {
          const tan = Math.abs(hy - p.y) / (hx - p.x);
          if (locallyInside(p, hole) && (tan < tanMin || tan === tanMin && (p.x > m.x || p.x === m.x && sectorContainsSector(m, p)))) {
            m = p;
            tanMin = tan;
          }
        }
        p = p.next;
      } while (p !== stop);
      return m;
    };
    var sectorContainsSector = (m, p) => area(m.prev, m, p.prev) < 0 && area(p.next, m, m.next) < 0;
    var getLeftmost = (start) => {
      let p = start;
      let leftmost = start;
      do {
        if (p.x < leftmost.x || p.x === leftmost.x && p.y < leftmost.y) leftmost = p;
        p = p.next;
      } while (p !== start);
      return leftmost;
    };
    module.exports = eliminateHoles;
  }
});

// node_modules/@jscad/modeling/src/operations/extrusions/earcut/index.js
var require_earcut = __commonJS({
  "node_modules/@jscad/modeling/src/operations/extrusions/earcut/index.js"(exports, module) {
    var eliminateHoles = require_eliminateHoles();
    var { removeNode, sortLinked } = require_linkedList();
    var { cureLocalIntersections, filterPoints, isValidDiagonal, linkedPolygon, splitPolygon } = require_linkedPolygon();
    var { area, pointInTriangle } = require_triangle();
    var triangulate = (data, holeIndices, dim = 2) => {
      const hasHoles = holeIndices && holeIndices.length;
      const outerLen = hasHoles ? holeIndices[0] * dim : data.length;
      let outerNode = linkedPolygon(data, 0, outerLen, dim, true);
      const triangles = [];
      if (!outerNode || outerNode.next === outerNode.prev) return triangles;
      let minX, minY, maxX, maxY, invSize;
      if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);
      if (data.length > 80 * dim) {
        minX = maxX = data[0];
        minY = maxY = data[1];
        for (let i = dim; i < outerLen; i += dim) {
          const x = data[i];
          const y = data[i + 1];
          if (x < minX) minX = x;
          if (y < minY) minY = y;
          if (x > maxX) maxX = x;
          if (y > maxY) maxY = y;
        }
        invSize = Math.max(maxX - minX, maxY - minY);
        invSize = invSize !== 0 ? 1 / invSize : 0;
      }
      earcutLinked(outerNode, triangles, dim, minX, minY, invSize);
      return triangles;
    };
    var earcutLinked = (ear, triangles, dim, minX, minY, invSize, pass) => {
      if (!ear) return;
      if (!pass && invSize) indexCurve(ear, minX, minY, invSize);
      let stop = ear;
      let prev;
      let next;
      while (ear.prev !== ear.next) {
        prev = ear.prev;
        next = ear.next;
        if (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear)) {
          triangles.push(prev.i / dim);
          triangles.push(ear.i / dim);
          triangles.push(next.i / dim);
          removeNode(ear);
          ear = next.next;
          stop = next.next;
          continue;
        }
        ear = next;
        if (ear === stop) {
          if (!pass) {
            earcutLinked(filterPoints(ear), triangles, dim, minX, minY, invSize, 1);
          } else if (pass === 1) {
            ear = cureLocalIntersections(filterPoints(ear), triangles, dim);
            earcutLinked(ear, triangles, dim, minX, minY, invSize, 2);
          } else if (pass === 2) {
            splitEarcut(ear, triangles, dim, minX, minY, invSize);
          }
          break;
        }
      }
    };
    var isEar = (ear) => {
      const a = ear.prev;
      const b = ear;
      const c = ear.next;
      if (area(a, b, c) >= 0) return false;
      let p = ear.next.next;
      while (p !== ear.prev) {
        if (pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0) {
          return false;
        }
        p = p.next;
      }
      return true;
    };
    var isEarHashed = (ear, minX, minY, invSize) => {
      const a = ear.prev;
      const b = ear;
      const c = ear.next;
      if (area(a, b, c) >= 0) return false;
      const minTX = a.x < b.x ? a.x < c.x ? a.x : c.x : b.x < c.x ? b.x : c.x;
      const minTY = a.y < b.y ? a.y < c.y ? a.y : c.y : b.y < c.y ? b.y : c.y;
      const maxTX = a.x > b.x ? a.x > c.x ? a.x : c.x : b.x > c.x ? b.x : c.x;
      const maxTY = a.y > b.y ? a.y > c.y ? a.y : c.y : b.y > c.y ? b.y : c.y;
      const minZ = zOrder(minTX, minTY, minX, minY, invSize);
      const maxZ = zOrder(maxTX, maxTY, minX, minY, invSize);
      let p = ear.prevZ;
      let n = ear.nextZ;
      while (p && p.z >= minZ && n && n.z <= maxZ) {
        if (p !== ear.prev && p !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;
        if (n !== ear.prev && n !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) && area(n.prev, n, n.next) >= 0) return false;
        n = n.nextZ;
      }
      while (p && p.z >= minZ) {
        if (p !== ear.prev && p !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;
      }
      while (n && n.z <= maxZ) {
        if (n !== ear.prev && n !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) && area(n.prev, n, n.next) >= 0) return false;
        n = n.nextZ;
      }
      return true;
    };
    var splitEarcut = (start, triangles, dim, minX, minY, invSize) => {
      let a = start;
      do {
        let b = a.next.next;
        while (b !== a.prev) {
          if (a.i !== b.i && isValidDiagonal(a, b)) {
            let c = splitPolygon(a, b);
            a = filterPoints(a, a.next);
            c = filterPoints(c, c.next);
            earcutLinked(a, triangles, dim, minX, minY, invSize);
            earcutLinked(c, triangles, dim, minX, minY, invSize);
            return;
          }
          b = b.next;
        }
        a = a.next;
      } while (a !== start);
    };
    var indexCurve = (start, minX, minY, invSize) => {
      let p = start;
      do {
        if (p.z === null) p.z = zOrder(p.x, p.y, minX, minY, invSize);
        p.prevZ = p.prev;
        p.nextZ = p.next;
        p = p.next;
      } while (p !== start);
      p.prevZ.nextZ = null;
      p.prevZ = null;
      sortLinked(p, (p2) => p2.z);
    };
    var zOrder = (x, y, minX, minY, invSize) => {
      x = 32767 * (x - minX) * invSize;
      y = 32767 * (y - minY) * invSize;
      x = (x | x << 8) & 16711935;
      x = (x | x << 4) & 252645135;
      x = (x | x << 2) & 858993459;
      x = (x | x << 1) & 1431655765;
      y = (y | y << 8) & 16711935;
      y = (y | y << 4) & 252645135;
      y = (y | y << 2) & 858993459;
      y = (y | y << 1) & 1431655765;
      return x | y << 1;
    };
    module.exports = triangulate;
  }
});

// node_modules/@jscad/modeling/src/operations/extrusions/earcut/assignHoles.js
var require_assignHoles = __commonJS({
  "node_modules/@jscad/modeling/src/operations/extrusions/earcut/assignHoles.js"(exports, module) {
    var { area } = require_utils();
    var { toOutlines } = require_geom2();
    var { arePointsInside } = require_poly2();
    var assignHoles = (geometry) => {
      const outlines = toOutlines(geometry);
      const solids = [];
      const holes = [];
      outlines.forEach((outline, i) => {
        const a = area(outline);
        if (a < 0) {
          holes.push(i);
        } else if (a > 0) {
          solids.push(i);
        }
      });
      const children = [];
      const parents = [];
      solids.forEach((s, i) => {
        const solid = outlines[s];
        children[i] = [];
        holes.forEach((h, j) => {
          const hole = outlines[h];
          if (arePointsInside([hole[0]], { vertices: solid })) {
            children[i].push(h);
            if (!parents[j]) parents[j] = [];
            parents[j].push(i);
          }
        });
      });
      holes.forEach((h, j) => {
        if (parents[j] && parents[j].length > 1) {
          const directParent = minIndex(parents[j], (p) => children[p].length);
          parents[j].forEach((p, i) => {
            if (i !== directParent) {
              children[p] = children[p].filter((c) => c !== h);
            }
          });
        }
      });
      return children.map((holes2, i) => ({
        solid: outlines[solids[i]],
        holes: holes2.map((h) => outlines[h])
      }));
    };
    var minIndex = (list, score) => {
      let bestIndex;
      let best;
      list.forEach((item, index) => {
        const value = score(item);
        if (best === void 0 || value < best) {
          bestIndex = index;
          best = value;
        }
      });
      return bestIndex;
    };
    module.exports = assignHoles;
  }
});

// node_modules/@jscad/modeling/src/operations/extrusions/earcut/polygonHierarchy.js
var require_polygonHierarchy = __commonJS({
  "node_modules/@jscad/modeling/src/operations/extrusions/earcut/polygonHierarchy.js"(exports, module) {
    var geom2 = require_geom2();
    var plane = require_plane();
    var vec2 = require_vec2();
    var vec3 = require_vec3();
    var calculatePlane = require_calculatePlane();
    var assignHoles = require_assignHoles();
    var PolygonHierarchy = class {
      constructor(slice2) {
        this.plane = calculatePlane(slice2);
        const rightvector = vec3.orthogonal(vec3.create(), this.plane);
        const perp = vec3.cross(vec3.create(), this.plane, rightvector);
        this.v = vec3.normalize(perp, perp);
        this.u = vec3.cross(vec3.create(), this.v, this.plane);
        this.basisMap = /* @__PURE__ */ new Map();
        const projected = slice2.edges.map((e) => e.map((v) => this.to2D(v)));
        const geometry = geom2.create(projected);
        this.roots = assignHoles(geometry);
      }
      /*
       * project a 3D point onto the 2D plane
       */
      to2D(vector3) {
        const vector2 = vec2.fromValues(vec3.dot(vector3, this.u), vec3.dot(vector3, this.v));
        this.basisMap.set(vector2, vector3);
        return vector2;
      }
      /*
       * un-project a 2D point back into 3D
       */
      to3D(vector2) {
        const original = this.basisMap.get(vector2);
        if (original) {
          return original;
        } else {
          console.log("Warning: point not in original slice");
          const v1 = vec3.scale(vec3.create(), this.u, vector2[0]);
          const v2 = vec3.scale(vec3.create(), this.v, vector2[1]);
          const planeOrigin = vec3.scale(vec3.create(), plane, plane[3]);
          const v3 = vec3.add(v1, v1, planeOrigin);
          return vec3.add(v2, v2, v3);
        }
      }
    };
    module.exports = PolygonHierarchy;
  }
});

// node_modules/@jscad/modeling/src/operations/extrusions/slice/toPolygons.js
var require_toPolygons2 = __commonJS({
  "node_modules/@jscad/modeling/src/operations/extrusions/slice/toPolygons.js"(exports, module) {
    var poly3 = require_poly3();
    var earcut = require_earcut();
    var PolygonHierarchy = require_polygonHierarchy();
    var toPolygons = (slice2) => {
      const hierarchy = new PolygonHierarchy(slice2);
      const polygons = [];
      hierarchy.roots.forEach(({ solid, holes }) => {
        let index = solid.length;
        const holesIndex = [];
        holes.forEach((hole, i) => {
          holesIndex.push(index);
          index += hole.length;
        });
        const vertices = [solid, ...holes].flat();
        const data = vertices.flat();
        const getVertex = (i) => hierarchy.to3D(vertices[i]);
        const indices = earcut(data, holesIndex);
        for (let i = 0; i < indices.length; i += 3) {
          const tri = indices.slice(i, i + 3).map(getVertex);
          polygons.push(poly3.fromPointsAndPlane(tri, hierarchy.plane));
        }
      });
      return polygons;
    };
    module.exports = toPolygons;
  }
});

// node_modules/@jscad/modeling/src/operations/extrusions/slice/toString.js
var require_toString11 = __commonJS({
  "node_modules/@jscad/modeling/src/operations/extrusions/slice/toString.js"(exports, module) {
    var vec3 = require_vec3();
    var edgesToString = (edges) => edges.reduce((result, edge) => result += `[${vec3.toString(edge[0])}, ${vec3.toString(edge[1])}], `, "");
    var toString = (slice2) => `[${edgesToString(slice2.edges)}]`;
    module.exports = toString;
  }
});

// node_modules/@jscad/modeling/src/operations/extrusions/slice/transform.js
var require_transform11 = __commonJS({
  "node_modules/@jscad/modeling/src/operations/extrusions/slice/transform.js"(exports, module) {
    var vec3 = require_vec3();
    var create = require_create13();
    var transform = (matrix, slice2) => {
      const edges = slice2.edges.map((edge) => [vec3.transform(vec3.create(), edge[0], matrix), vec3.transform(vec3.create(), edge[1], matrix)]);
      return create(edges);
    };
    module.exports = transform;
  }
});

// node_modules/@jscad/modeling/src/operations/extrusions/slice/index.js
var require_slice = __commonJS({
  "node_modules/@jscad/modeling/src/operations/extrusions/slice/index.js"(exports, module) {
    module.exports = {
      calculatePlane: require_calculatePlane(),
      clone: require_clone11(),
      create: require_create13(),
      equals: require_equals8(),
      fromPoints: require_fromPoints8(),
      fromSides: require_fromSides(),
      isA: require_isA5(),
      reverse: require_reverse5(),
      toEdges: require_toEdges(),
      toPolygons: require_toPolygons2(),
      toString: require_toString11(),
      transform: require_transform11()
    };
  }
});

// node_modules/@jscad/modeling/src/operations/extrusions/slice/repair.js
var require_repair = __commonJS({
  "node_modules/@jscad/modeling/src/operations/extrusions/slice/repair.js"(exports, module) {
    var vec3 = require_vec3();
    var create = require_create13();
    var repair = (slice2) => {
      if (!slice2.edges) return slice2;
      let edges = slice2.edges;
      const vertexMap = /* @__PURE__ */ new Map();
      const edgeCount = /* @__PURE__ */ new Map();
      edges = edges.filter((e) => !vec3.equals(e[0], e[1]));
      edges.forEach((edge) => {
        const inKey = edge[0].toString();
        const outKey = edge[1].toString();
        vertexMap.set(inKey, edge[0]);
        vertexMap.set(outKey, edge[1]);
        edgeCount.set(inKey, (edgeCount.get(inKey) || 0) + 1);
        edgeCount.set(outKey, (edgeCount.get(outKey) || 0) - 1);
      });
      const missingIn = [];
      const missingOut = [];
      edgeCount.forEach((count, vertex) => {
        if (count < 0) missingIn.push(vertex);
        if (count > 0) missingOut.push(vertex);
      });
      missingIn.forEach((key1) => {
        const v1 = vertexMap.get(key1);
        let bestDistance = Infinity;
        let bestReplacement;
        missingOut.forEach((key2) => {
          const v2 = vertexMap.get(key2);
          const distance = vec3.distance(v1, v2);
          if (distance < bestDistance) {
            bestDistance = distance;
            bestReplacement = v2;
          }
        });
        console.warn(`slice.repair: repairing vertex gap ${v1} to ${bestReplacement} distance ${bestDistance}`);
        edges = edges.map((edge) => {
          if (edge[0].toString() === key1) return [bestReplacement, edge[1]];
          if (edge[1].toString() === key1) return [edge[0], bestReplacement];
          return edge;
        });
      });
      return create(edges);
    };
    module.exports = repair;
  }
});

// node_modules/@jscad/modeling/src/operations/extrusions/extrudeWalls.js
var require_extrudeWalls = __commonJS({
  "node_modules/@jscad/modeling/src/operations/extrusions/extrudeWalls.js"(exports, module) {
    var { EPS } = require_constants();
    var vec3 = require_vec3();
    var poly3 = require_poly3();
    var slice2 = require_slice();
    var gcd = (a, b) => {
      if (a === b) {
        return a;
      }
      if (a < b) {
        return gcd(b, a);
      }
      if (b === 1) {
        return 1;
      }
      if (b === 0) {
        return a;
      }
      return gcd(b, a % b);
    };
    var lcm = (a, b) => a * b / gcd(a, b);
    var repartitionEdges = (newlength, edges) => {
      const multiple = newlength / edges.length;
      if (multiple === 1) {
        return edges;
      }
      const divisor = vec3.fromValues(multiple, multiple, multiple);
      const increment = vec3.create();
      const newEdges = [];
      edges.forEach((edge) => {
        vec3.subtract(increment, edge[1], edge[0]);
        vec3.divide(increment, increment, divisor);
        let prev = edge[0];
        for (let i = 1; i <= multiple; ++i) {
          const next = vec3.add(vec3.create(), prev, increment);
          newEdges.push([prev, next]);
          prev = next;
        }
      });
      return newEdges;
    };
    var EPSAREA = EPS * EPS / 2 * Math.sin(Math.PI / 3);
    var extrudeWalls = (slice0, slice1) => {
      let edges0 = slice2.toEdges(slice0);
      let edges1 = slice2.toEdges(slice1);
      if (edges0.length !== edges1.length) {
        const newlength = lcm(edges0.length, edges1.length);
        if (newlength !== edges0.length) edges0 = repartitionEdges(newlength, edges0);
        if (newlength !== edges1.length) edges1 = repartitionEdges(newlength, edges1);
      }
      const walls = [];
      edges0.forEach((edge0, i) => {
        const edge1 = edges1[i];
        const poly0 = poly3.create([edge0[0], edge0[1], edge1[1]]);
        const poly0area = poly3.measureArea(poly0);
        if (Number.isFinite(poly0area) && poly0area > EPSAREA) walls.push(poly0);
        const poly1 = poly3.create([edge0[0], edge1[1], edge1[0]]);
        const poly1area = poly3.measureArea(poly1);
        if (Number.isFinite(poly1area) && poly1area > EPSAREA) walls.push(poly1);
      });
      return walls;
    };
    module.exports = extrudeWalls;
  }
});

// node_modules/@jscad/modeling/src/operations/extrusions/extrudeFromSlices.js
var require_extrudeFromSlices = __commonJS({
  "node_modules/@jscad/modeling/src/operations/extrusions/extrudeFromSlices.js"(exports, module) {
    var mat4 = require_mat4();
    var geom2 = require_geom2();
    var geom3 = require_geom3();
    var poly3 = require_poly3();
    var slice2 = require_slice();
    var repairSlice = require_repair();
    var extrudeWalls = require_extrudeWalls();
    var defaultCallback = (progress, index, base) => {
      let baseSlice = null;
      if (geom2.isA(base)) baseSlice = slice2.fromSides(geom2.toSides(base));
      if (poly3.isA(base)) baseSlice = slice2.fromPoints(poly3.toPoints(base));
      return progress === 0 || progress === 1 ? slice2.transform(mat4.fromTranslation(mat4.create(), [0, 0, progress]), baseSlice) : null;
    };
    var extrudeFromSlices = (options, base) => {
      const defaults = {
        numberOfSlices: 2,
        capStart: true,
        capEnd: true,
        close: false,
        repair: true,
        callback: defaultCallback
      };
      const { numberOfSlices, capStart, capEnd, close, repair, callback: generate } = Object.assign({}, defaults, options);
      if (numberOfSlices < 2) throw new Error("numberOfSlices must be 2 or more");
      if (repair) {
        base = repairSlice(base);
      }
      const sMax = numberOfSlices - 1;
      let startSlice = null;
      let endSlice = null;
      let prevSlice = null;
      let polygons = [];
      for (let s = 0; s < numberOfSlices; s++) {
        const currentSlice = generate(s / sMax, s, base);
        if (currentSlice) {
          if (!slice2.isA(currentSlice)) throw new Error("the callback function must return slice objects");
          const edges = slice2.toEdges(currentSlice);
          if (edges.length === 0) throw new Error("the callback function must return slices with one or more edges");
          if (prevSlice) {
            const walls = extrudeWalls(prevSlice, currentSlice);
            for (let i = 0; i < walls.length; i++) {
              polygons.push(walls[i]);
            }
          }
          if (s === 0) startSlice = currentSlice;
          if (s === numberOfSlices - 1) endSlice = currentSlice;
          prevSlice = currentSlice;
        }
      }
      if (capEnd) {
        const endPolygons = slice2.toPolygons(endSlice);
        for (let i = 0; i < endPolygons.length; i++) {
          polygons.push(endPolygons[i]);
        }
      }
      if (capStart) {
        const startPolygons = slice2.toPolygons(startSlice).map(poly3.invert);
        for (let i = 0; i < startPolygons.length; i++) {
          polygons.push(startPolygons[i]);
        }
      }
      if (!capStart && !capEnd) {
        if (close && !slice2.equals(endSlice, startSlice)) {
          const walls = extrudeWalls(endSlice, startSlice);
          for (let i = 0; i < walls.length; i++) {
            polygons.push(walls[i]);
          }
        }
      }
      return geom3.create(polygons);
    };
    module.exports = extrudeFromSlices;
  }
});

// node_modules/@jscad/modeling/src/operations/extrusions/extrudeRotate.js
var require_extrudeRotate = __commonJS({
  "node_modules/@jscad/modeling/src/operations/extrusions/extrudeRotate.js"(exports, module) {
    var { TAU } = require_constants();
    var mat4 = require_mat4();
    var { mirrorX } = require_mirror();
    var geom2 = require_geom2();
    var slice2 = require_slice();
    var extrudeFromSlices = require_extrudeFromSlices();
    var extrudeRotate = (options, geometry) => {
      const defaults = {
        segments: 12,
        startAngle: 0,
        angle: TAU,
        overflow: "cap"
      };
      let { segments, startAngle, angle, overflow } = Object.assign({}, defaults, options);
      if (segments < 3) throw new Error("segments must be greater then 3");
      startAngle = Math.abs(startAngle) > TAU ? startAngle % TAU : startAngle;
      angle = Math.abs(angle) > TAU ? angle % TAU : angle;
      let endAngle = startAngle + angle;
      endAngle = Math.abs(endAngle) > TAU ? endAngle % TAU : endAngle;
      if (endAngle < startAngle) {
        const x = startAngle;
        startAngle = endAngle;
        endAngle = x;
      }
      let totalRotation = endAngle - startAngle;
      if (totalRotation <= 0) totalRotation = TAU;
      if (Math.abs(totalRotation) < TAU) {
        const anglePerSegment = TAU / segments;
        segments = Math.floor(Math.abs(totalRotation) / anglePerSegment);
        if (Math.abs(totalRotation) > segments * anglePerSegment) segments++;
      }
      let shapeSides = geom2.toSides(geometry);
      if (shapeSides.length === 0) throw new Error("the given geometry cannot be empty");
      const pointsWithNegativeX = shapeSides.filter((s) => s[0][0] < 0);
      const pointsWithPositiveX = shapeSides.filter((s) => s[0][0] >= 0);
      const arePointsWithNegAndPosX = pointsWithNegativeX.length > 0 && pointsWithPositiveX.length > 0;
      if (arePointsWithNegAndPosX && overflow === "cap") {
        if (pointsWithNegativeX.length > pointsWithPositiveX.length) {
          shapeSides = shapeSides.map((side) => {
            let point0 = side[0];
            let point1 = side[1];
            point0 = [Math.min(point0[0], 0), point0[1]];
            point1 = [Math.min(point1[0], 0), point1[1]];
            return [point0, point1];
          });
          geometry = geom2.create(shapeSides);
          geometry = mirrorX(geometry);
        } else if (pointsWithPositiveX.length >= pointsWithNegativeX.length) {
          shapeSides = shapeSides.map((side) => {
            let point0 = side[0];
            let point1 = side[1];
            point0 = [Math.max(point0[0], 0), point0[1]];
            point1 = [Math.max(point1[0], 0), point1[1]];
            return [point0, point1];
          });
          geometry = geom2.create(shapeSides);
        }
      }
      const rotationPerSlice = totalRotation / segments;
      const isCapped = Math.abs(totalRotation) < TAU;
      const baseSlice = slice2.fromSides(geom2.toSides(geometry));
      slice2.reverse(baseSlice, baseSlice);
      const matrix = mat4.create();
      const xRotationMatrix = mat4.fromXRotation(mat4.create(), TAU / 4);
      const zRotationMatrix = mat4.create();
      const createSlice = (progress, index, base) => {
        let Zrotation = rotationPerSlice * index + startAngle;
        if (totalRotation === TAU && index === segments) {
          Zrotation = startAngle;
        }
        mat4.fromZRotation(zRotationMatrix, Zrotation);
        mat4.multiply(matrix, zRotationMatrix, xRotationMatrix);
        return slice2.transform(matrix, base);
      };
      options = {
        numberOfSlices: segments + 1,
        capStart: isCapped,
        capEnd: isCapped,
        close: !isCapped,
        callback: createSlice
      };
      return extrudeFromSlices(options, baseSlice);
    };
    module.exports = extrudeRotate;
  }
});

// node_modules/@jscad/modeling/src/operations/transforms/rotate.js
var require_rotate3 = __commonJS({
  "node_modules/@jscad/modeling/src/operations/transforms/rotate.js"(exports, module) {
    var flatten = require_flatten();
    var mat4 = require_mat4();
    var geom2 = require_geom2();
    var geom3 = require_geom3();
    var path2 = require_path2();
    var rotate = (angles, ...objects) => {
      if (!Array.isArray(angles)) throw new Error("angles must be an array");
      objects = flatten(objects);
      if (objects.length === 0) throw new Error("wrong number of arguments");
      angles = angles.slice();
      while (angles.length < 3) angles.push(0);
      const yaw = angles[2];
      const pitch = angles[1];
      const roll = angles[0];
      const matrix = mat4.fromTaitBryanRotation(mat4.create(), yaw, pitch, roll);
      const results = objects.map((object) => {
        if (path2.isA(object)) return path2.transform(matrix, object);
        if (geom2.isA(object)) return geom2.transform(matrix, object);
        if (geom3.isA(object)) return geom3.transform(matrix, object);
        return object;
      });
      return results.length === 1 ? results[0] : results;
    };
    var rotateX = (angle, ...objects) => rotate([angle, 0, 0], objects);
    var rotateY = (angle, ...objects) => rotate([0, angle, 0], objects);
    var rotateZ = (angle, ...objects) => rotate([0, 0, angle], objects);
    module.exports = {
      rotate,
      rotateX,
      rotateY,
      rotateZ
    };
  }
});

// node_modules/@jscad/modeling/src/operations/transforms/translate.js
var require_translate2 = __commonJS({
  "node_modules/@jscad/modeling/src/operations/transforms/translate.js"(exports, module) {
    var flatten = require_flatten();
    var mat4 = require_mat4();
    var geom2 = require_geom2();
    var geom3 = require_geom3();
    var path2 = require_path2();
    var translate = (offset, ...objects) => {
      if (!Array.isArray(offset)) throw new Error("offset must be an array");
      objects = flatten(objects);
      if (objects.length === 0) throw new Error("wrong number of arguments");
      offset = offset.slice();
      while (offset.length < 3) offset.push(0);
      const matrix = mat4.fromTranslation(mat4.create(), offset);
      const results = objects.map((object) => {
        if (path2.isA(object)) return path2.transform(matrix, object);
        if (geom2.isA(object)) return geom2.transform(matrix, object);
        if (geom3.isA(object)) return geom3.transform(matrix, object);
        return object;
      });
      return results.length === 1 ? results[0] : results;
    };
    var translateX = (offset, ...objects) => translate([offset, 0, 0], objects);
    var translateY = (offset, ...objects) => translate([0, offset, 0], objects);
    var translateZ = (offset, ...objects) => translate([0, 0, offset], objects);
    module.exports = {
      translate,
      translateX,
      translateY,
      translateZ
    };
  }
});

// node_modules/@jscad/modeling/src/primitives/torus.js
var require_torus = __commonJS({
  "node_modules/@jscad/modeling/src/primitives/torus.js"(exports, module) {
    var { TAU } = require_constants();
    var extrudeRotate = require_extrudeRotate();
    var { rotate } = require_rotate3();
    var { translate } = require_translate2();
    var circle = require_circle();
    var { isGT, isGTE } = require_commonChecks();
    var torus = (options) => {
      const defaults = {
        innerRadius: 1,
        innerSegments: 32,
        outerRadius: 4,
        outerSegments: 32,
        innerRotation: 0,
        startAngle: 0,
        outerRotation: TAU
      };
      const { innerRadius, innerSegments, outerRadius, outerSegments, innerRotation, startAngle, outerRotation } = Object.assign({}, defaults, options);
      if (!isGT(innerRadius, 0)) throw new Error("innerRadius must be greater than zero");
      if (!isGTE(innerSegments, 3)) throw new Error("innerSegments must be three or more");
      if (!isGT(outerRadius, 0)) throw new Error("outerRadius must be greater than zero");
      if (!isGTE(outerSegments, 3)) throw new Error("outerSegments must be three or more");
      if (!isGTE(startAngle, 0)) throw new Error("startAngle must be positive");
      if (!isGT(outerRotation, 0)) throw new Error("outerRotation must be greater than zero");
      if (innerRadius >= outerRadius) throw new Error("inner circle is too large to rotate about the outer circle");
      let innerCircle = circle({ radius: innerRadius, segments: innerSegments });
      if (innerRotation !== 0) {
        innerCircle = rotate([0, 0, innerRotation], innerCircle);
      }
      innerCircle = translate([outerRadius, 0], innerCircle);
      const extrudeOptions = {
        startAngle,
        angle: outerRotation,
        segments: outerSegments
      };
      return extrudeRotate(extrudeOptions, innerCircle);
    };
    module.exports = torus;
  }
});

// node_modules/@jscad/modeling/src/primitives/triangle.js
var require_triangle2 = __commonJS({
  "node_modules/@jscad/modeling/src/primitives/triangle.js"(exports, module) {
    var { NEPS } = require_constants();
    var vec2 = require_vec2();
    var geom2 = require_geom2();
    var { isNumberArray } = require_commonChecks();
    var solveAngleFromSSS = (a, b, c) => Math.acos((a * a + b * b - c * c) / (2 * a * b));
    var solveSideFromSAS = (a, C, b) => {
      if (C > NEPS) {
        return Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(C));
      }
      return Math.sqrt((a - b) * (a - b) + a * b * C * C * (1 - C * C / 12));
    };
    var solveAAA = (angles) => {
      const eps = Math.abs(angles[0] + angles[1] + angles[2] - Math.PI);
      if (eps > NEPS) throw new Error("AAA triangles require angles that sum to PI");
      const A = angles[0];
      const B = angles[1];
      const C = Math.PI - A - B;
      const c = 1;
      const a = c / Math.sin(C) * Math.sin(A);
      const b = c / Math.sin(C) * Math.sin(B);
      return createTriangle(A, B, C, a, b, c);
    };
    var solveAAS = (values) => {
      const A = values[0];
      const B = values[1];
      const C = Math.PI + NEPS - A - B;
      if (C < NEPS) throw new Error("AAS triangles require angles that sum to PI");
      const a = values[2];
      const b = a / Math.sin(A) * Math.sin(B);
      const c = a / Math.sin(A) * Math.sin(C);
      return createTriangle(A, B, C, a, b, c);
    };
    var solveASA = (values) => {
      const A = values[0];
      const B = values[2];
      const C = Math.PI + NEPS - A - B;
      if (C < NEPS) throw new Error("ASA triangles require angles that sum to PI");
      const c = values[1];
      const a = c / Math.sin(C) * Math.sin(A);
      const b = c / Math.sin(C) * Math.sin(B);
      return createTriangle(A, B, C, a, b, c);
    };
    var solveSAS = (values) => {
      const c = values[0];
      const B = values[1];
      const a = values[2];
      const b = solveSideFromSAS(c, B, a);
      const A = solveAngleFromSSS(b, c, a);
      const C = Math.PI - A - B;
      return createTriangle(A, B, C, a, b, c);
    };
    var solveSSA = (values) => {
      const c = values[0];
      const a = values[1];
      const C = values[2];
      const A = Math.asin(a * Math.sin(C) / c);
      const B = Math.PI - A - C;
      const b = c / Math.sin(C) * Math.sin(B);
      return createTriangle(A, B, C, a, b, c);
    };
    var solveSSS = (lengths) => {
      const a = lengths[1];
      const b = lengths[2];
      const c = lengths[0];
      if (a + b <= c || b + c <= a || c + a <= b) {
        throw new Error("SSS triangle is incorrect, as the longest side is longer than the sum of the other sides");
      }
      const A = solveAngleFromSSS(b, c, a);
      const B = solveAngleFromSSS(c, a, b);
      const C = Math.PI - A - B;
      return createTriangle(A, B, C, a, b, c);
    };
    var createTriangle = (A, B, C, a, b, c) => {
      const p0 = vec2.fromValues(0, 0);
      const p1 = vec2.fromValues(c, 0);
      const p2 = vec2.fromValues(a, 0);
      vec2.add(p2, vec2.rotate(p2, p2, [0, 0], Math.PI - B), p1);
      return geom2.fromPoints([p0, p1, p2]);
    };
    var triangle = (options) => {
      const defaults = {
        type: "SSS",
        values: [1, 1, 1]
      };
      let { type, values } = Object.assign({}, defaults, options);
      if (typeof type !== "string") throw new Error("triangle type must be a string");
      type = type.toUpperCase();
      if (!((type[0] === "A" || type[0] === "S") && (type[1] === "A" || type[1] === "S") && (type[2] === "A" || type[2] === "S"))) throw new Error("triangle type must contain three letters; A or S");
      if (!isNumberArray(values, 3)) throw new Error("triangle values must contain three values");
      if (!values.every((n) => n > 0)) throw new Error("triangle values must be greater than zero");
      switch (type) {
        case "AAA":
          return solveAAA(values);
        case "AAS":
          return solveAAS(values);
        case "ASA":
          return solveASA(values);
        case "SAS":
          return solveSAS(values);
        case "SSA":
          return solveSSA(values);
        case "SSS":
          return solveSSS(values);
        default:
          throw new Error("invalid triangle type, try again");
      }
    };
    module.exports = triangle;
  }
});

// node_modules/@jscad/modeling/src/primitives/index.js
var require_primitives = __commonJS({
  "node_modules/@jscad/modeling/src/primitives/index.js"(exports, module) {
    module.exports = {
      arc: require_arc(),
      circle: require_circle(),
      cube: require_cube(),
      cuboid: require_cuboid(),
      cylinder: require_cylinder(),
      cylinderElliptic: require_cylinderElliptic(),
      ellipse: require_ellipse(),
      ellipsoid: require_ellipsoid(),
      geodesicSphere: require_geodesicSphere(),
      line: require_line(),
      polygon: require_polygon(),
      polyhedron: require_polyhedron(),
      rectangle: require_rectangle(),
      roundedCuboid: require_roundedCuboid(),
      roundedCylinder: require_roundedCylinder(),
      roundedRectangle: require_roundedRectangle(),
      sphere: require_sphere(),
      square: require_square(),
      star: require_star(),
      torus: require_torus(),
      triangle: require_triangle2()
    };
  }
});

// node_modules/@jscad/modeling/src/text/fonts/single-line/hershey/simplex.js
var require_simplex = __commonJS({
  "node_modules/@jscad/modeling/src/text/fonts/single-line/hershey/simplex.js"(exports, module) {
    module.exports = {
      height: 14,
      32: [16],
      33: [10, 5, 21, 5, 7, void 0, 5, 2, 4, 1, 5, 0, 6, 1, 5, 2],
      34: [16, 4, 21, 4, 14, void 0, 12, 21, 12, 14],
      35: [21, 11, 25, 4, -7, void 0, 17, 25, 10, -7, void 0, 4, 12, 18, 12, void 0, 3, 6, 17, 6],
      36: [20, 8, 25, 8, -4, void 0, 12, 25, 12, -4, void 0, 17, 18, 15, 20, 12, 21, 8, 21, 5, 20, 3, 18, 3, 16, 4, 14, 5, 13, 7, 12, 13, 10, 15, 9, 16, 8, 17, 6, 17, 3, 15, 1, 12, 0, 8, 0, 5, 1, 3, 3],
      37: [24, 21, 21, 3, 0, void 0, 8, 21, 10, 19, 10, 17, 9, 15, 7, 14, 5, 14, 3, 16, 3, 18, 4, 20, 6, 21, 8, 21, 10, 20, 13, 19, 16, 19, 19, 20, 21, 21, void 0, 17, 7, 15, 6, 14, 4, 14, 2, 16, 0, 18, 0, 20, 1, 21, 3, 21, 5, 19, 7, 17, 7],
      38: [26, 23, 12, 23, 13, 22, 14, 21, 14, 20, 13, 19, 11, 17, 6, 15, 3, 13, 1, 11, 0, 7, 0, 5, 1, 4, 2, 3, 4, 3, 6, 4, 8, 5, 9, 12, 13, 13, 14, 14, 16, 14, 18, 13, 20, 11, 21, 9, 20, 8, 18, 8, 16, 9, 13, 11, 10, 16, 3, 18, 1, 20, 0, 22, 0, 23, 1, 23, 2],
      39: [10, 5, 19, 4, 20, 5, 21, 6, 20, 6, 18, 5, 16, 4, 15],
      40: [14, 11, 25, 9, 23, 7, 20, 5, 16, 4, 11, 4, 7, 5, 2, 7, -2, 9, -5, 11, -7],
      41: [14, 3, 25, 5, 23, 7, 20, 9, 16, 10, 11, 10, 7, 9, 2, 7, -2, 5, -5, 3, -7],
      42: [16, 8, 21, 8, 9, void 0, 3, 18, 13, 12, void 0, 13, 18, 3, 12],
      43: [26, 13, 18, 13, 0, void 0, 4, 9, 22, 9],
      44: [10, 6, 1, 5, 0, 4, 1, 5, 2, 6, 1, 6, -1, 5, -3, 4, -4],
      45: [26, 4, 9, 22, 9],
      46: [10, 5, 2, 4, 1, 5, 0, 6, 1, 5, 2],
      47: [22, 20, 25, 2, -7],
      48: [20, 9, 21, 6, 20, 4, 17, 3, 12, 3, 9, 4, 4, 6, 1, 9, 0, 11, 0, 14, 1, 16, 4, 17, 9, 17, 12, 16, 17, 14, 20, 11, 21, 9, 21],
      49: [20, 6, 17, 8, 18, 11, 21, 11, 0],
      50: [20, 4, 16, 4, 17, 5, 19, 6, 20, 8, 21, 12, 21, 14, 20, 15, 19, 16, 17, 16, 15, 15, 13, 13, 10, 3, 0, 17, 0],
      51: [20, 5, 21, 16, 21, 10, 13, 13, 13, 15, 12, 16, 11, 17, 8, 17, 6, 16, 3, 14, 1, 11, 0, 8, 0, 5, 1, 4, 2, 3, 4],
      52: [20, 13, 21, 3, 7, 18, 7, void 0, 13, 21, 13, 0],
      53: [20, 15, 21, 5, 21, 4, 12, 5, 13, 8, 14, 11, 14, 14, 13, 16, 11, 17, 8, 17, 6, 16, 3, 14, 1, 11, 0, 8, 0, 5, 1, 4, 2, 3, 4],
      54: [20, 16, 18, 15, 20, 12, 21, 10, 21, 7, 20, 5, 17, 4, 12, 4, 7, 5, 3, 7, 1, 10, 0, 11, 0, 14, 1, 16, 3, 17, 6, 17, 7, 16, 10, 14, 12, 11, 13, 10, 13, 7, 12, 5, 10, 4, 7],
      55: [20, 17, 21, 7, 0, void 0, 3, 21, 17, 21],
      56: [20, 8, 21, 5, 20, 4, 18, 4, 16, 5, 14, 7, 13, 11, 12, 14, 11, 16, 9, 17, 7, 17, 4, 16, 2, 15, 1, 12, 0, 8, 0, 5, 1, 4, 2, 3, 4, 3, 7, 4, 9, 6, 11, 9, 12, 13, 13, 15, 14, 16, 16, 16, 18, 15, 20, 12, 21, 8, 21],
      57: [20, 16, 14, 15, 11, 13, 9, 10, 8, 9, 8, 6, 9, 4, 11, 3, 14, 3, 15, 4, 18, 6, 20, 9, 21, 10, 21, 13, 20, 15, 18, 16, 14, 16, 9, 15, 4, 13, 1, 10, 0, 8, 0, 5, 1, 4, 3],
      58: [10, 5, 14, 4, 13, 5, 12, 6, 13, 5, 14, void 0, 5, 2, 4, 1, 5, 0, 6, 1, 5, 2],
      59: [10, 5, 14, 4, 13, 5, 12, 6, 13, 5, 14, void 0, 6, 1, 5, 0, 4, 1, 5, 2, 6, 1, 6, -1, 5, -3, 4, -4],
      60: [24, 20, 18, 4, 9, 20, 0],
      61: [26, 4, 12, 22, 12, void 0, 4, 6, 22, 6],
      62: [24, 4, 18, 20, 9, 4, 0],
      63: [18, 3, 16, 3, 17, 4, 19, 5, 20, 7, 21, 11, 21, 13, 20, 14, 19, 15, 17, 15, 15, 14, 13, 13, 12, 9, 10, 9, 7, void 0, 9, 2, 8, 1, 9, 0, 10, 1, 9, 2],
      64: [27, 18, 13, 17, 15, 15, 16, 12, 16, 10, 15, 9, 14, 8, 11, 8, 8, 9, 6, 11, 5, 14, 5, 16, 6, 17, 8, void 0, 12, 16, 10, 14, 9, 11, 9, 8, 10, 6, 11, 5, void 0, 18, 16, 17, 8, 17, 6, 19, 5, 21, 5, 23, 7, 24, 10, 24, 12, 23, 15, 22, 17, 20, 19, 18, 20, 15, 21, 12, 21, 9, 20, 7, 19, 5, 17, 4, 15, 3, 12, 3, 9, 4, 6, 5, 4, 7, 2, 9, 1, 12, 0, 15, 0, 18, 1, 20, 2, 21, 3, void 0, 19, 16, 18, 8, 18, 6, 19, 5],
      65: [18, 9, 21, 1, 0, void 0, 9, 21, 17, 0, void 0, 4, 7, 14, 7],
      66: [21, 4, 21, 4, 0, void 0, 4, 21, 13, 21, 16, 20, 17, 19, 18, 17, 18, 15, 17, 13, 16, 12, 13, 11, void 0, 4, 11, 13, 11, 16, 10, 17, 9, 18, 7, 18, 4, 17, 2, 16, 1, 13, 0, 4, 0],
      67: [21, 18, 16, 17, 18, 15, 20, 13, 21, 9, 21, 7, 20, 5, 18, 4, 16, 3, 13, 3, 8, 4, 5, 5, 3, 7, 1, 9, 0, 13, 0, 15, 1, 17, 3, 18, 5],
      68: [21, 4, 21, 4, 0, void 0, 4, 21, 11, 21, 14, 20, 16, 18, 17, 16, 18, 13, 18, 8, 17, 5, 16, 3, 14, 1, 11, 0, 4, 0],
      69: [19, 4, 21, 4, 0, void 0, 4, 21, 17, 21, void 0, 4, 11, 12, 11, void 0, 4, 0, 17, 0],
      70: [18, 4, 21, 4, 0, void 0, 4, 21, 17, 21, void 0, 4, 11, 12, 11],
      71: [21, 18, 16, 17, 18, 15, 20, 13, 21, 9, 21, 7, 20, 5, 18, 4, 16, 3, 13, 3, 8, 4, 5, 5, 3, 7, 1, 9, 0, 13, 0, 15, 1, 17, 3, 18, 5, 18, 8, void 0, 13, 8, 18, 8],
      72: [22, 4, 21, 4, 0, void 0, 18, 21, 18, 0, void 0, 4, 11, 18, 11],
      73: [8, 4, 21, 4, 0],
      74: [16, 12, 21, 12, 5, 11, 2, 10, 1, 8, 0, 6, 0, 4, 1, 3, 2, 2, 5, 2, 7],
      75: [21, 4, 21, 4, 0, void 0, 18, 21, 4, 7, void 0, 9, 12, 18, 0],
      76: [17, 4, 21, 4, 0, void 0, 4, 0, 16, 0],
      77: [24, 4, 21, 4, 0, void 0, 4, 21, 12, 0, void 0, 20, 21, 12, 0, void 0, 20, 21, 20, 0],
      78: [22, 4, 21, 4, 0, void 0, 4, 21, 18, 0, void 0, 18, 21, 18, 0],
      79: [22, 9, 21, 7, 20, 5, 18, 4, 16, 3, 13, 3, 8, 4, 5, 5, 3, 7, 1, 9, 0, 13, 0, 15, 1, 17, 3, 18, 5, 19, 8, 19, 13, 18, 16, 17, 18, 15, 20, 13, 21, 9, 21],
      80: [21, 4, 21, 4, 0, void 0, 4, 21, 13, 21, 16, 20, 17, 19, 18, 17, 18, 14, 17, 12, 16, 11, 13, 10, 4, 10],
      81: [22, 9, 21, 7, 20, 5, 18, 4, 16, 3, 13, 3, 8, 4, 5, 5, 3, 7, 1, 9, 0, 13, 0, 15, 1, 17, 3, 18, 5, 19, 8, 19, 13, 18, 16, 17, 18, 15, 20, 13, 21, 9, 21, void 0, 12, 4, 18, -2],
      82: [21, 4, 21, 4, 0, void 0, 4, 21, 13, 21, 16, 20, 17, 19, 18, 17, 18, 15, 17, 13, 16, 12, 13, 11, 4, 11, void 0, 11, 11, 18, 0],
      83: [20, 17, 18, 15, 20, 12, 21, 8, 21, 5, 20, 3, 18, 3, 16, 4, 14, 5, 13, 7, 12, 13, 10, 15, 9, 16, 8, 17, 6, 17, 3, 15, 1, 12, 0, 8, 0, 5, 1, 3, 3],
      84: [16, 8, 21, 8, 0, void 0, 1, 21, 15, 21],
      85: [22, 4, 21, 4, 6, 5, 3, 7, 1, 10, 0, 12, 0, 15, 1, 17, 3, 18, 6, 18, 21],
      86: [18, 1, 21, 9, 0, void 0, 17, 21, 9, 0],
      87: [24, 2, 21, 7, 0, void 0, 12, 21, 7, 0, void 0, 12, 21, 17, 0, void 0, 22, 21, 17, 0],
      88: [20, 3, 21, 17, 0, void 0, 17, 21, 3, 0],
      89: [18, 1, 21, 9, 11, 9, 0, void 0, 17, 21, 9, 11],
      90: [20, 17, 21, 3, 0, void 0, 3, 21, 17, 21, void 0, 3, 0, 17, 0],
      91: [14, 4, 25, 4, -7, void 0, 5, 25, 5, -7, void 0, 4, 25, 11, 25, void 0, 4, -7, 11, -7],
      92: [14, 0, 21, 14, -3],
      93: [14, 9, 25, 9, -7, void 0, 10, 25, 10, -7, void 0, 3, 25, 10, 25, void 0, 3, -7, 10, -7],
      94: [16, 6, 15, 8, 18, 10, 15, void 0, 3, 12, 8, 17, 13, 12, void 0, 8, 17, 8, 0],
      95: [16, 0, -2, 16, -2],
      96: [10, 6, 21, 5, 20, 4, 18, 4, 16, 5, 15, 6, 16, 5, 17],
      97: [19, 15, 14, 15, 0, void 0, 15, 11, 13, 13, 11, 14, 8, 14, 6, 13, 4, 11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0, 11, 0, 13, 1, 15, 3],
      98: [19, 4, 21, 4, 0, void 0, 4, 11, 6, 13, 8, 14, 11, 14, 13, 13, 15, 11, 16, 8, 16, 6, 15, 3, 13, 1, 11, 0, 8, 0, 6, 1, 4, 3],
      99: [18, 15, 11, 13, 13, 11, 14, 8, 14, 6, 13, 4, 11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0, 11, 0, 13, 1, 15, 3],
      100: [19, 15, 21, 15, 0, void 0, 15, 11, 13, 13, 11, 14, 8, 14, 6, 13, 4, 11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0, 11, 0, 13, 1, 15, 3],
      101: [18, 3, 8, 15, 8, 15, 10, 14, 12, 13, 13, 11, 14, 8, 14, 6, 13, 4, 11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0, 11, 0, 13, 1, 15, 3],
      102: [12, 10, 21, 8, 21, 6, 20, 5, 17, 5, 0, void 0, 2, 14, 9, 14],
      103: [19, 15, 14, 15, -2, 14, -5, 13, -6, 11, -7, 8, -7, 6, -6, void 0, 15, 11, 13, 13, 11, 14, 8, 14, 6, 13, 4, 11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0, 11, 0, 13, 1, 15, 3],
      104: [19, 4, 21, 4, 0, void 0, 4, 10, 7, 13, 9, 14, 12, 14, 14, 13, 15, 10, 15, 0],
      105: [8, 3, 21, 4, 20, 5, 21, 4, 22, 3, 21, void 0, 4, 14, 4, 0],
      106: [10, 5, 21, 6, 20, 7, 21, 6, 22, 5, 21, void 0, 6, 14, 6, -3, 5, -6, 3, -7, 1, -7],
      107: [17, 4, 21, 4, 0, void 0, 14, 14, 4, 4, void 0, 8, 8, 15, 0],
      108: [8, 4, 21, 4, 0],
      109: [30, 4, 14, 4, 0, void 0, 4, 10, 7, 13, 9, 14, 12, 14, 14, 13, 15, 10, 15, 0, void 0, 15, 10, 18, 13, 20, 14, 23, 14, 25, 13, 26, 10, 26, 0],
      110: [19, 4, 14, 4, 0, void 0, 4, 10, 7, 13, 9, 14, 12, 14, 14, 13, 15, 10, 15, 0],
      111: [19, 8, 14, 6, 13, 4, 11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0, 11, 0, 13, 1, 15, 3, 16, 6, 16, 8, 15, 11, 13, 13, 11, 14, 8, 14],
      112: [19, 4, 14, 4, -7, void 0, 4, 11, 6, 13, 8, 14, 11, 14, 13, 13, 15, 11, 16, 8, 16, 6, 15, 3, 13, 1, 11, 0, 8, 0, 6, 1, 4, 3],
      113: [19, 15, 14, 15, -7, void 0, 15, 11, 13, 13, 11, 14, 8, 14, 6, 13, 4, 11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0, 11, 0, 13, 1, 15, 3],
      114: [13, 4, 14, 4, 0, void 0, 4, 8, 5, 11, 7, 13, 9, 14, 12, 14],
      115: [17, 14, 11, 13, 13, 10, 14, 7, 14, 4, 13, 3, 11, 4, 9, 6, 8, 11, 7, 13, 6, 14, 4, 14, 3, 13, 1, 10, 0, 7, 0, 4, 1, 3, 3],
      116: [12, 5, 21, 5, 4, 6, 1, 8, 0, 10, 0, void 0, 2, 14, 9, 14],
      117: [19, 4, 14, 4, 4, 5, 1, 7, 0, 10, 0, 12, 1, 15, 4, void 0, 15, 14, 15, 0],
      118: [16, 2, 14, 8, 0, void 0, 14, 14, 8, 0],
      119: [22, 3, 14, 7, 0, void 0, 11, 14, 7, 0, void 0, 11, 14, 15, 0, void 0, 19, 14, 15, 0],
      120: [17, 3, 14, 14, 0, void 0, 14, 14, 3, 0],
      121: [16, 2, 14, 8, 0, void 0, 14, 14, 8, 0, 6, -4, 4, -6, 2, -7, 1, -7],
      122: [17, 14, 14, 3, 0, void 0, 3, 14, 14, 14, void 0, 3, 0, 14, 0],
      123: [14, 9, 25, 7, 24, 6, 23, 5, 21, 5, 19, 6, 17, 7, 16, 8, 14, 8, 12, 6, 10, void 0, 7, 24, 6, 22, 6, 20, 7, 18, 8, 17, 9, 15, 9, 13, 8, 11, 4, 9, 8, 7, 9, 5, 9, 3, 8, 1, 7, 0, 6, -2, 6, -4, 7, -6, void 0, 6, 8, 8, 6, 8, 4, 7, 2, 6, 1, 5, -1, 5, -3, 6, -5, 7, -6, 9, -7],
      124: [8, 4, 25, 4, -7],
      125: [14, 5, 25, 7, 24, 8, 23, 9, 21, 9, 19, 8, 17, 7, 16, 6, 14, 6, 12, 8, 10, void 0, 7, 24, 8, 22, 8, 20, 7, 18, 6, 17, 5, 15, 5, 13, 6, 11, 10, 9, 6, 7, 5, 5, 5, 3, 6, 1, 7, 0, 8, -2, 8, -4, 7, -6, void 0, 8, 8, 6, 6, 6, 4, 7, 2, 8, 1, 9, -1, 9, -3, 8, -5, 7, -6, 5, -7],
      126: [24, 3, 6, 3, 8, 4, 11, 6, 12, 8, 12, 10, 11, 14, 8, 16, 7, 18, 7, 20, 8, 21, 10, void 0, 3, 8, 4, 10, 6, 11, 8, 11, 10, 10, 14, 7, 16, 6, 18, 6, 20, 7, 21, 10, 21, 12]
    };
  }
});

// node_modules/@jscad/modeling/src/text/vectorParams.js
var require_vectorParams = __commonJS({
  "node_modules/@jscad/modeling/src/text/vectorParams.js"(exports, module) {
    var defaultFont = require_simplex();
    var defaultsVectorParams = {
      xOffset: 0,
      yOffset: 0,
      input: "?",
      align: "left",
      font: defaultFont,
      height: 14,
      // == old vector_xxx simplex font height
      lineSpacing: 2.142857142857143,
      // == 30/14 == old vector_xxx ratio
      letterSpacing: 1,
      extrudeOffset: 0
    };
    var vectorParams = (options, input) => {
      if (!input && typeof options === "string") {
        options = { input: options };
      }
      options = options || {};
      const params = Object.assign({}, defaultsVectorParams, options);
      params.input = input || params.input;
      return params;
    };
    module.exports = vectorParams;
  }
});

// node_modules/@jscad/modeling/src/text/vectorChar.js
var require_vectorChar = __commonJS({
  "node_modules/@jscad/modeling/src/text/vectorChar.js"(exports, module) {
    var vectorParams = require_vectorParams();
    var vectorChar = (options, char) => {
      const {
        xOffset,
        yOffset,
        input,
        font,
        height,
        extrudeOffset
      } = vectorParams(options, char);
      let code = input.charCodeAt(0);
      if (!code || !font[code]) {
        code = 63;
      }
      const glyph = [].concat(font[code]);
      const ratio = (height - extrudeOffset) / font.height;
      const extrudeYOffset = extrudeOffset / 2;
      const width = glyph.shift() * ratio;
      const segments = [];
      let polyline = [];
      for (let i = 0, il = glyph.length; i < il; i += 2) {
        const gx = ratio * glyph[i] + xOffset;
        const gy = ratio * glyph[i + 1] + yOffset + extrudeYOffset;
        if (glyph[i] !== void 0) {
          polyline.push([gx, gy]);
          continue;
        }
        segments.push(polyline);
        polyline = [];
        i--;
      }
      if (polyline.length) {
        segments.push(polyline);
      }
      return { width, height, segments };
    };
    module.exports = vectorChar;
  }
});

// node_modules/@jscad/modeling/src/text/vectorText.js
var require_vectorText = __commonJS({
  "node_modules/@jscad/modeling/src/text/vectorText.js"(exports, module) {
    var vectorChar = require_vectorChar();
    var vectorParams = require_vectorParams();
    var translateLine = (options, line) => {
      const { x, y } = Object.assign({ x: 0, y: 0 }, options || {});
      const segments = line.segments;
      let segment = null;
      let point = null;
      for (let i = 0, il = segments.length; i < il; i++) {
        segment = segments[i];
        for (let j = 0, jl = segment.length; j < jl; j++) {
          point = segment[j];
          segment[j] = [point[0] + x, point[1] + y];
        }
      }
      return line;
    };
    var vectorText = (options, text2) => {
      const {
        xOffset,
        yOffset,
        input,
        font,
        height,
        align,
        extrudeOffset,
        lineSpacing,
        letterSpacing
      } = vectorParams(options, text2);
      let [x, y] = [xOffset, yOffset];
      let i, il, char, vect, width, diff;
      let line = { width: 0, segments: [] };
      const lines = [];
      let output = [];
      let maxWidth = 0;
      const lineStart = x;
      const pushLine = () => {
        lines.push(line);
        maxWidth = Math.max(maxWidth, line.width);
        line = { width: 0, segments: [] };
      };
      for (i = 0, il = input.length; i < il; i++) {
        char = input[i];
        vect = vectorChar({ xOffset: x, yOffset: y, font, height, extrudeOffset }, char);
        if (char === "\n") {
          x = lineStart;
          y -= vect.height * lineSpacing;
          pushLine();
          continue;
        }
        width = vect.width * letterSpacing;
        line.width += width;
        x += width;
        if (char !== " ") {
          line.segments = line.segments.concat(vect.segments);
        }
      }
      if (line.segments.length) {
        pushLine();
      }
      for (i = 0, il = lines.length; i < il; i++) {
        line = lines[i];
        if (maxWidth > line.width) {
          diff = maxWidth - line.width;
          if (align === "right") {
            line = translateLine({ x: diff }, line);
          } else if (align === "center") {
            line = translateLine({ x: diff / 2 }, line);
          }
        }
        output = output.concat(line.segments);
      }
      return output;
    };
    module.exports = vectorText;
  }
});

// node_modules/@jscad/modeling/src/text/index.js
var require_text = __commonJS({
  "node_modules/@jscad/modeling/src/text/index.js"(exports, module) {
    module.exports = {
      vectorChar: require_vectorChar(),
      vectorText: require_vectorText()
    };
  }
});

// node_modules/@jscad/modeling/src/utils/areAllShapesTheSameType.js
var require_areAllShapesTheSameType = __commonJS({
  "node_modules/@jscad/modeling/src/utils/areAllShapesTheSameType.js"(exports, module) {
    var geom2 = require_geom2();
    var geom3 = require_geom3();
    var path2 = require_path2();
    var areAllShapesTheSameType = (shapes) => {
      let previousType;
      for (const shape of shapes) {
        let currentType = 0;
        if (geom2.isA(shape)) currentType = 1;
        if (geom3.isA(shape)) currentType = 2;
        if (path2.isA(shape)) currentType = 3;
        if (previousType && currentType !== previousType) return false;
        previousType = currentType;
      }
      return true;
    };
    module.exports = areAllShapesTheSameType;
  }
});

// node_modules/@jscad/modeling/src/utils/degToRad.js
var require_degToRad = __commonJS({
  "node_modules/@jscad/modeling/src/utils/degToRad.js"(exports, module) {
    var degToRad = (degrees) => degrees * 0.017453292519943295;
    module.exports = degToRad;
  }
});

// node_modules/@jscad/modeling/src/utils/fnNumberSort.js
var require_fnNumberSort = __commonJS({
  "node_modules/@jscad/modeling/src/utils/fnNumberSort.js"(exports, module) {
    var fnNumberSort = (a, b) => a - b;
    module.exports = fnNumberSort;
  }
});

// node_modules/@jscad/modeling/src/utils/insertSorted.js
var require_insertSorted = __commonJS({
  "node_modules/@jscad/modeling/src/utils/insertSorted.js"(exports, module) {
    var insertSorted = (array, element, comparefunc) => {
      let leftbound = 0;
      let rightbound = array.length;
      while (rightbound > leftbound) {
        const testindex = Math.floor((leftbound + rightbound) / 2);
        const testelement = array[testindex];
        const compareresult = comparefunc(element, testelement);
        if (compareresult > 0) {
          leftbound = testindex + 1;
        } else {
          rightbound = testindex;
        }
      }
      array.splice(leftbound, 0, element);
    };
    module.exports = insertSorted;
  }
});

// node_modules/@jscad/modeling/src/utils/radiusToSegments.js
var require_radiusToSegments = __commonJS({
  "node_modules/@jscad/modeling/src/utils/radiusToSegments.js"(exports, module) {
    var { TAU } = require_constants();
    var radiusToSegments = (radius, minimumLength, minimumAngle) => {
      const ss = minimumLength > 0 ? radius * TAU / minimumLength : 0;
      const as = minimumAngle > 0 ? TAU / minimumAngle : 0;
      return Math.ceil(Math.max(ss, as, 4));
    };
    module.exports = radiusToSegments;
  }
});

// node_modules/@jscad/modeling/src/utils/radToDeg.js
var require_radToDeg = __commonJS({
  "node_modules/@jscad/modeling/src/utils/radToDeg.js"(exports, module) {
    var radToDeg = (radians) => radians * 57.29577951308232;
    module.exports = radToDeg;
  }
});

// node_modules/@jscad/modeling/src/utils/index.js
var require_utils2 = __commonJS({
  "node_modules/@jscad/modeling/src/utils/index.js"(exports, module) {
    module.exports = {
      areAllShapesTheSameType: require_areAllShapesTheSameType(),
      degToRad: require_degToRad(),
      flatten: require_flatten(),
      fnNumberSort: require_fnNumberSort(),
      insertSorted: require_insertSorted(),
      radiusToSegments: require_radiusToSegments(),
      radToDeg: require_radToDeg()
    };
  }
});

// node_modules/@jscad/modeling/src/operations/booleans/fromFakePolygons.js
var require_fromFakePolygons = __commonJS({
  "node_modules/@jscad/modeling/src/operations/booleans/fromFakePolygons.js"(exports, module) {
    var vec2 = require_vec2();
    var geom2 = require_geom2();
    var fromFakePolygon = (epsilon, polygon) => {
      if (polygon.vertices.length < 4) {
        return null;
      }
      const vert1Indices = [];
      const points3D = polygon.vertices.filter((vertex, i) => {
        if (vertex[2] > 0) {
          vert1Indices.push(i);
          return true;
        }
        return false;
      });
      if (points3D.length !== 2) {
        throw new Error("Assertion failed: fromFakePolygon: not enough points found");
      }
      const points2D = points3D.map((v3) => {
        const x = Math.round(v3[0] / epsilon) * epsilon + 0;
        const y = Math.round(v3[1] / epsilon) * epsilon + 0;
        return vec2.fromValues(x, y);
      });
      if (vec2.equals(points2D[0], points2D[1])) return null;
      const d = vert1Indices[1] - vert1Indices[0];
      if (d === 1 || d === 3) {
        if (d === 1) {
          points2D.reverse();
        }
      } else {
        throw new Error("Assertion failed: fromFakePolygon: unknown index ordering");
      }
      return points2D;
    };
    var fromFakePolygons = (epsilon, polygons) => {
      const sides = polygons.map((polygon) => fromFakePolygon(epsilon, polygon)).filter((polygon) => polygon !== null);
      return geom2.create(sides);
    };
    module.exports = fromFakePolygons;
  }
});

// node_modules/@jscad/modeling/src/operations/booleans/to3DWalls.js
var require_to3DWalls = __commonJS({
  "node_modules/@jscad/modeling/src/operations/booleans/to3DWalls.js"(exports, module) {
    var vec3 = require_vec3();
    var geom2 = require_geom2();
    var geom3 = require_geom3();
    var poly3 = require_poly3();
    var to3DWall = (z0, z1, side) => {
      const points = [
        vec3.fromVec2(vec3.create(), side[0], z0),
        vec3.fromVec2(vec3.create(), side[1], z0),
        vec3.fromVec2(vec3.create(), side[1], z1),
        vec3.fromVec2(vec3.create(), side[0], z1)
      ];
      return poly3.create(points);
    };
    var to3DWalls = (options, geometry) => {
      const sides = geom2.toSides(geometry);
      const polygons = sides.map((side) => to3DWall(options.z0, options.z1, side));
      const result = geom3.create(polygons);
      return result;
    };
    module.exports = to3DWalls;
  }
});

// node_modules/@jscad/modeling/src/maths/OrthoNormalBasis.js
var require_OrthoNormalBasis = __commonJS({
  "node_modules/@jscad/modeling/src/maths/OrthoNormalBasis.js"(exports, module) {
    var mat4 = require_mat4();
    var vec2 = require_vec2();
    var vec3 = require_vec3();
    var OrthoNormalBasis = function(plane, rightvector) {
      if (arguments.length < 2) {
        rightvector = vec3.orthogonal(vec3.create(), plane);
      }
      this.v = vec3.normalize(vec3.create(), vec3.cross(vec3.create(), plane, rightvector));
      this.u = vec3.cross(vec3.create(), this.v, plane);
      this.plane = plane;
      this.planeorigin = vec3.scale(vec3.create(), plane, plane[3]);
    };
    OrthoNormalBasis.prototype = {
      getProjectionMatrix: function() {
        return mat4.fromValues(
          this.u[0],
          this.v[0],
          this.plane[0],
          0,
          this.u[1],
          this.v[1],
          this.plane[1],
          0,
          this.u[2],
          this.v[2],
          this.plane[2],
          0,
          0,
          0,
          -this.plane[3],
          1
        );
      },
      getInverseProjectionMatrix: function() {
        const p = vec3.scale(vec3.create(), this.plane, this.plane[3]);
        return mat4.fromValues(
          this.u[0],
          this.u[1],
          this.u[2],
          0,
          this.v[0],
          this.v[1],
          this.v[2],
          0,
          this.plane[0],
          this.plane[1],
          this.plane[2],
          0,
          p[0],
          p[1],
          p[2],
          1
        );
      },
      to2D: function(point) {
        return vec2.fromValues(vec3.dot(point, this.u), vec3.dot(point, this.v));
      },
      to3D: function(point) {
        const v1 = vec3.scale(vec3.create(), this.u, point[0]);
        const v2 = vec3.scale(vec3.create(), this.v, point[1]);
        const v3 = vec3.add(v1, v1, this.planeorigin);
        const v4 = vec3.add(v2, v2, v3);
        return v4;
      }
    };
    module.exports = OrthoNormalBasis;
  }
});

// node_modules/@jscad/modeling/src/operations/modifiers/reTesselateCoplanarPolygons.js
var require_reTesselateCoplanarPolygons = __commonJS({
  "node_modules/@jscad/modeling/src/operations/modifiers/reTesselateCoplanarPolygons.js"(exports, module) {
    var { EPS } = require_constants();
    var line2 = require_line2();
    var vec2 = require_vec2();
    var OrthoNormalBasis = require_OrthoNormalBasis();
    var interpolateBetween2DPointsForY = require_interpolateBetween2DPointsForY();
    var { insertSorted, fnNumberSort } = require_utils2();
    var poly3 = require_poly3();
    var reTesselateCoplanarPolygons = (sourcepolygons) => {
      if (sourcepolygons.length < 2) return sourcepolygons;
      const destpolygons = [];
      const numpolygons = sourcepolygons.length;
      const plane = poly3.plane(sourcepolygons[0]);
      const orthobasis = new OrthoNormalBasis(plane);
      const polygonvertices2d = [];
      const polygontopvertexindexes = [];
      const topy2polygonindexes = /* @__PURE__ */ new Map();
      const ycoordinatetopolygonindexes = /* @__PURE__ */ new Map();
      const ycoordinatebins = /* @__PURE__ */ new Map();
      const ycoordinateBinningFactor = 10 / EPS;
      for (let polygonindex = 0; polygonindex < numpolygons; polygonindex++) {
        const poly3d = sourcepolygons[polygonindex];
        let vertices2d = [];
        let numvertices = poly3d.vertices.length;
        let minindex = -1;
        if (numvertices > 0) {
          let miny;
          let maxy;
          for (let i = 0; i < numvertices; i++) {
            let pos2d = orthobasis.to2D(poly3d.vertices[i]);
            const ycoordinatebin = Math.floor(pos2d[1] * ycoordinateBinningFactor);
            let newy;
            if (ycoordinatebins.has(ycoordinatebin)) {
              newy = ycoordinatebins.get(ycoordinatebin);
            } else if (ycoordinatebins.has(ycoordinatebin + 1)) {
              newy = ycoordinatebins.get(ycoordinatebin + 1);
            } else if (ycoordinatebins.has(ycoordinatebin - 1)) {
              newy = ycoordinatebins.get(ycoordinatebin - 1);
            } else {
              newy = pos2d[1];
              ycoordinatebins.set(ycoordinatebin, pos2d[1]);
            }
            pos2d = vec2.fromValues(pos2d[0], newy);
            vertices2d.push(pos2d);
            const y = pos2d[1];
            if (i === 0 || y < miny) {
              miny = y;
              minindex = i;
            }
            if (i === 0 || y > maxy) {
              maxy = y;
            }
            let polygonindexes = ycoordinatetopolygonindexes.get(y);
            if (!polygonindexes) {
              polygonindexes = {};
              ycoordinatetopolygonindexes.set(y, polygonindexes);
            }
            polygonindexes[polygonindex] = true;
          }
          if (miny >= maxy) {
            vertices2d = [];
            numvertices = 0;
            minindex = -1;
          } else {
            let polygonindexes = topy2polygonindexes.get(miny);
            if (!polygonindexes) {
              polygonindexes = [];
              topy2polygonindexes.set(miny, polygonindexes);
            }
            polygonindexes.push(polygonindex);
          }
        }
        vertices2d.reverse();
        minindex = numvertices - minindex - 1;
        polygonvertices2d.push(vertices2d);
        polygontopvertexindexes.push(minindex);
      }
      const ycoordinates = [];
      ycoordinatetopolygonindexes.forEach((polylist, y) => ycoordinates.push(y));
      ycoordinates.sort(fnNumberSort);
      let activepolygons = [];
      let prevoutpolygonrow = [];
      for (let yindex = 0; yindex < ycoordinates.length; yindex++) {
        const newoutpolygonrow = [];
        const ycoordinate = ycoordinates[yindex];
        const polygonindexeswithcorner = ycoordinatetopolygonindexes.get(ycoordinate);
        let removeCount = 0;
        for (let activepolygonindex = 0; activepolygonindex < activepolygons.length; ++activepolygonindex) {
          const activepolygon = activepolygons[activepolygonindex];
          const polygonindex = activepolygon.polygonindex;
          if (polygonindexeswithcorner[polygonindex]) {
            const vertices2d = polygonvertices2d[polygonindex];
            const numvertices = vertices2d.length;
            let newleftvertexindex = activepolygon.leftvertexindex;
            let newrightvertexindex = activepolygon.rightvertexindex;
            while (true) {
              let nextleftvertexindex = newleftvertexindex + 1;
              if (nextleftvertexindex >= numvertices) nextleftvertexindex = 0;
              if (vertices2d[nextleftvertexindex][1] !== ycoordinate) break;
              newleftvertexindex = nextleftvertexindex;
            }
            let nextrightvertexindex = newrightvertexindex - 1;
            if (nextrightvertexindex < 0) nextrightvertexindex = numvertices - 1;
            if (vertices2d[nextrightvertexindex][1] === ycoordinate) {
              newrightvertexindex = nextrightvertexindex;
            }
            if (newleftvertexindex !== activepolygon.leftvertexindex && newleftvertexindex === newrightvertexindex) {
              activepolygon._remove = true;
              removeCount++;
            } else {
              activepolygon.leftvertexindex = newleftvertexindex;
              activepolygon.rightvertexindex = newrightvertexindex;
              activepolygon.topleft = vertices2d[newleftvertexindex];
              activepolygon.topright = vertices2d[newrightvertexindex];
              let nextleftvertexindex = newleftvertexindex + 1;
              if (nextleftvertexindex >= numvertices) nextleftvertexindex = 0;
              activepolygon.bottomleft = vertices2d[nextleftvertexindex];
              let nextrightvertexindex2 = newrightvertexindex - 1;
              if (nextrightvertexindex2 < 0) nextrightvertexindex2 = numvertices - 1;
              activepolygon.bottomright = vertices2d[nextrightvertexindex2];
            }
          }
        }
        if (removeCount > 0) {
          activepolygons = activepolygons.filter((p) => !p._remove);
        }
        let nextycoordinate;
        if (yindex >= ycoordinates.length - 1) {
          activepolygons = [];
          nextycoordinate = null;
        } else {
          nextycoordinate = Number(ycoordinates[yindex + 1]);
          const middleycoordinate = 0.5 * (ycoordinate + nextycoordinate);
          const startingpolygonindexes = topy2polygonindexes.get(ycoordinate);
          for (const polygonindexKey in startingpolygonindexes) {
            const polygonindex = startingpolygonindexes[polygonindexKey];
            const vertices2d = polygonvertices2d[polygonindex];
            const numvertices = vertices2d.length;
            const topvertexindex = polygontopvertexindexes[polygonindex];
            let topleftvertexindex = topvertexindex;
            while (true) {
              let i = topleftvertexindex + 1;
              if (i >= numvertices) i = 0;
              if (vertices2d[i][1] !== ycoordinate) break;
              if (i === topvertexindex) break;
              topleftvertexindex = i;
            }
            let toprightvertexindex = topvertexindex;
            while (true) {
              let i = toprightvertexindex - 1;
              if (i < 0) i = numvertices - 1;
              if (vertices2d[i][1] !== ycoordinate) break;
              if (i === topleftvertexindex) break;
              toprightvertexindex = i;
            }
            let nextleftvertexindex = topleftvertexindex + 1;
            if (nextleftvertexindex >= numvertices) nextleftvertexindex = 0;
            let nextrightvertexindex = toprightvertexindex - 1;
            if (nextrightvertexindex < 0) nextrightvertexindex = numvertices - 1;
            const newactivepolygon = {
              polygonindex,
              leftvertexindex: topleftvertexindex,
              rightvertexindex: toprightvertexindex,
              topleft: vertices2d[topleftvertexindex],
              topright: vertices2d[toprightvertexindex],
              bottomleft: vertices2d[nextleftvertexindex],
              bottomright: vertices2d[nextrightvertexindex]
            };
            insertSorted(activepolygons, newactivepolygon, (el1, el2) => {
              const x1 = interpolateBetween2DPointsForY(el1.topleft, el1.bottomleft, middleycoordinate);
              const x2 = interpolateBetween2DPointsForY(el2.topleft, el2.bottomleft, middleycoordinate);
              if (x1 > x2) return 1;
              if (x1 < x2) return -1;
              return 0;
            });
          }
        }
        for (const activepolygonKey in activepolygons) {
          const activepolygon = activepolygons[activepolygonKey];
          let x = interpolateBetween2DPointsForY(activepolygon.topleft, activepolygon.bottomleft, ycoordinate);
          const topleft = vec2.fromValues(x, ycoordinate);
          x = interpolateBetween2DPointsForY(activepolygon.topright, activepolygon.bottomright, ycoordinate);
          const topright = vec2.fromValues(x, ycoordinate);
          x = interpolateBetween2DPointsForY(activepolygon.topleft, activepolygon.bottomleft, nextycoordinate);
          const bottomleft = vec2.fromValues(x, nextycoordinate);
          x = interpolateBetween2DPointsForY(activepolygon.topright, activepolygon.bottomright, nextycoordinate);
          const bottomright = vec2.fromValues(x, nextycoordinate);
          const outpolygon = {
            topleft,
            topright,
            bottomleft,
            bottomright,
            leftline: line2.fromPoints(line2.create(), topleft, bottomleft),
            rightline: line2.fromPoints(line2.create(), bottomright, topright)
          };
          if (newoutpolygonrow.length > 0) {
            const prevoutpolygon = newoutpolygonrow[newoutpolygonrow.length - 1];
            const d1 = vec2.distance(outpolygon.topleft, prevoutpolygon.topright);
            const d2 = vec2.distance(outpolygon.bottomleft, prevoutpolygon.bottomright);
            if (d1 < EPS && d2 < EPS) {
              outpolygon.topleft = prevoutpolygon.topleft;
              outpolygon.leftline = prevoutpolygon.leftline;
              outpolygon.bottomleft = prevoutpolygon.bottomleft;
              newoutpolygonrow.splice(newoutpolygonrow.length - 1, 1);
            }
          }
          newoutpolygonrow.push(outpolygon);
        }
        if (yindex > 0) {
          const prevcontinuedindexes = /* @__PURE__ */ new Set();
          const matchedindexes = /* @__PURE__ */ new Set();
          for (let i = 0; i < newoutpolygonrow.length; i++) {
            const thispolygon = newoutpolygonrow[i];
            for (let ii = 0; ii < prevoutpolygonrow.length; ii++) {
              if (!matchedindexes.has(ii)) {
                const prevpolygon = prevoutpolygonrow[ii];
                if (vec2.distance(prevpolygon.bottomleft, thispolygon.topleft) < EPS) {
                  if (vec2.distance(prevpolygon.bottomright, thispolygon.topright) < EPS) {
                    matchedindexes.add(ii);
                    const v1 = line2.direction(thispolygon.leftline);
                    const v2 = line2.direction(prevpolygon.leftline);
                    const d1 = v1[0] - v2[0];
                    const v3 = line2.direction(thispolygon.rightline);
                    const v4 = line2.direction(prevpolygon.rightline);
                    const d2 = v3[0] - v4[0];
                    const leftlinecontinues = Math.abs(d1) < EPS;
                    const rightlinecontinues = Math.abs(d2) < EPS;
                    const leftlineisconvex = leftlinecontinues || d1 >= 0;
                    const rightlineisconvex = rightlinecontinues || d2 >= 0;
                    if (leftlineisconvex && rightlineisconvex) {
                      thispolygon.outpolygon = prevpolygon.outpolygon;
                      thispolygon.leftlinecontinues = leftlinecontinues;
                      thispolygon.rightlinecontinues = rightlinecontinues;
                      prevcontinuedindexes.add(ii);
                    }
                    break;
                  }
                }
              }
            }
          }
          for (let ii = 0; ii < prevoutpolygonrow.length; ii++) {
            if (!prevcontinuedindexes.has(ii)) {
              const prevpolygon = prevoutpolygonrow[ii];
              prevpolygon.outpolygon.rightpoints.push(prevpolygon.bottomright);
              if (vec2.distance(prevpolygon.bottomright, prevpolygon.bottomleft) > EPS) {
                prevpolygon.outpolygon.leftpoints.push(prevpolygon.bottomleft);
              }
              prevpolygon.outpolygon.leftpoints.reverse();
              const points2d = prevpolygon.outpolygon.rightpoints.concat(prevpolygon.outpolygon.leftpoints);
              const vertices3d = points2d.map((point2d) => orthobasis.to3D(point2d));
              const polygon = poly3.fromPointsAndPlane(vertices3d, plane);
              if (polygon.vertices.length) destpolygons.push(polygon);
            }
          }
        }
        for (let i = 0; i < newoutpolygonrow.length; i++) {
          const thispolygon = newoutpolygonrow[i];
          if (!thispolygon.outpolygon) {
            thispolygon.outpolygon = {
              leftpoints: [],
              rightpoints: []
            };
            thispolygon.outpolygon.leftpoints.push(thispolygon.topleft);
            if (vec2.distance(thispolygon.topleft, thispolygon.topright) > EPS) {
              thispolygon.outpolygon.rightpoints.push(thispolygon.topright);
            }
          } else {
            if (!thispolygon.leftlinecontinues) {
              thispolygon.outpolygon.leftpoints.push(thispolygon.topleft);
            }
            if (!thispolygon.rightlinecontinues) {
              thispolygon.outpolygon.rightpoints.push(thispolygon.topright);
            }
          }
        }
        prevoutpolygonrow = newoutpolygonrow;
      }
      return destpolygons;
    };
    module.exports = reTesselateCoplanarPolygons;
  }
});

// node_modules/@jscad/modeling/src/operations/modifiers/retessellate.js
var require_retessellate = __commonJS({
  "node_modules/@jscad/modeling/src/operations/modifiers/retessellate.js"(exports, module) {
    var geom3 = require_geom3();
    var poly3 = require_poly3();
    var { NEPS } = require_constants();
    var reTesselateCoplanarPolygons = require_reTesselateCoplanarPolygons();
    var retessellate = (geometry) => {
      if (geometry.isRetesselated) {
        return geometry;
      }
      const polygons = geom3.toPolygons(geometry).map((polygon, index) => ({ vertices: polygon.vertices, plane: poly3.plane(polygon), index }));
      const classified = classifyPolygons(polygons);
      const destPolygons = [];
      classified.forEach((group) => {
        if (Array.isArray(group)) {
          const coplanarPolygons = reTesselateCoplanarPolygons(group);
          for (let i = 0; i < coplanarPolygons.length; i++) {
            destPolygons.push(coplanarPolygons[i]);
          }
        } else {
          destPolygons.push(group);
        }
      });
      const result = geom3.create(destPolygons);
      result.isRetesselated = true;
      return result;
    };
    var classifyPolygons = (polygons) => {
      let clusters = [polygons];
      const nonCoplanar = [];
      for (let component = 3; component >= 0; component--) {
        const maybeCoplanar = [];
        const tolerance = component === 3 ? 15e-9 : NEPS;
        clusters.forEach((cluster) => {
          cluster.sort(byPlaneComponent(component, tolerance));
          let startIndex = 0;
          for (let i = 1; i < cluster.length; i++) {
            if (cluster[i].plane[component] - cluster[startIndex].plane[component] > tolerance) {
              if (i - startIndex === 1) {
                nonCoplanar.push(cluster[startIndex]);
              } else {
                maybeCoplanar.push(cluster.slice(startIndex, i));
              }
              startIndex = i;
            }
          }
          if (cluster.length - startIndex === 1) {
            nonCoplanar.push(cluster[startIndex]);
          } else {
            maybeCoplanar.push(cluster.slice(startIndex));
          }
        });
        clusters = maybeCoplanar;
      }
      const result = [];
      clusters.forEach((cluster) => {
        if (cluster[0]) result[cluster[0].index] = cluster;
      });
      nonCoplanar.forEach((polygon) => {
        result[polygon.index] = polygon;
      });
      return result;
    };
    var byPlaneComponent = (component, tolerance) => (a, b) => {
      if (a.plane[component] - b.plane[component] > tolerance) {
        return 1;
      } else if (b.plane[component] - a.plane[component] > tolerance) {
        return -1;
      }
      return 0;
    };
    module.exports = retessellate;
  }
});

// node_modules/@jscad/modeling/src/operations/booleans/mayOverlap.js
var require_mayOverlap = __commonJS({
  "node_modules/@jscad/modeling/src/operations/booleans/mayOverlap.js"(exports, module) {
    var { EPS } = require_constants();
    var measureBoundingBox = require_measureBoundingBox2();
    var mayOverlap = (geometry1, geometry2) => {
      if (geometry1.polygons.length === 0 || geometry2.polygons.length === 0) {
        return false;
      }
      const bounds1 = measureBoundingBox(geometry1);
      const min1 = bounds1[0];
      const max1 = bounds1[1];
      const bounds2 = measureBoundingBox(geometry2);
      const min2 = bounds2[0];
      const max2 = bounds2[1];
      if (min2[0] - max1[0] > EPS) return false;
      if (min1[0] - max2[0] > EPS) return false;
      if (min2[1] - max1[1] > EPS) return false;
      if (min1[1] - max2[1] > EPS) return false;
      if (min2[2] - max1[2] > EPS) return false;
      if (min1[2] - max2[2] > EPS) return false;
      return true;
    };
    module.exports = mayOverlap;
  }
});

// node_modules/@jscad/modeling/src/operations/booleans/trees/Node.js
var require_Node = __commonJS({
  "node_modules/@jscad/modeling/src/operations/booleans/trees/Node.js"(exports, module) {
    var plane = require_plane();
    var poly3 = require_poly3();
    var Node3 = class _Node3 {
      constructor(parent) {
        this.plane = null;
        this.front = null;
        this.back = null;
        this.polygontreenodes = [];
        this.parent = parent;
      }
      // Convert solid space to empty space and empty space to solid space.
      invert() {
        const queue = [this];
        let node;
        for (let i = 0; i < queue.length; i++) {
          node = queue[i];
          if (node.plane) node.plane = plane.flip(plane.create(), node.plane);
          if (node.front) queue.push(node.front);
          if (node.back) queue.push(node.back);
          const temp = node.front;
          node.front = node.back;
          node.back = temp;
        }
      }
      // clip polygontreenodes to our plane
      // calls remove() for all clipped PolygonTreeNodes
      clipPolygons(polygontreenodes, alsoRemovecoplanarFront) {
        let current = { node: this, polygontreenodes };
        let node;
        const stack = [];
        do {
          node = current.node;
          polygontreenodes = current.polygontreenodes;
          if (node.plane) {
            const plane2 = node.plane;
            const backnodes = [];
            const frontnodes = [];
            const coplanarfrontnodes = alsoRemovecoplanarFront ? backnodes : frontnodes;
            const numpolygontreenodes = polygontreenodes.length;
            for (let i = 0; i < numpolygontreenodes; i++) {
              const treenode = polygontreenodes[i];
              if (!treenode.isRemoved()) {
                treenode.splitByPlane(plane2, coplanarfrontnodes, backnodes, frontnodes, backnodes);
              }
            }
            if (node.front && frontnodes.length > 0) {
              stack.push({ node: node.front, polygontreenodes: frontnodes });
            }
            const numbacknodes = backnodes.length;
            if (node.back && numbacknodes > 0) {
              stack.push({ node: node.back, polygontreenodes: backnodes });
            } else {
              for (let i = 0; i < numbacknodes; i++) {
                backnodes[i].remove();
              }
            }
          }
          current = stack.pop();
        } while (current !== void 0);
      }
      // Remove all polygons in this BSP tree that are inside the other BSP tree
      // `tree`.
      clipTo(tree, alsoRemovecoplanarFront) {
        let node = this;
        const stack = [];
        do {
          if (node.polygontreenodes.length > 0) {
            tree.rootnode.clipPolygons(node.polygontreenodes, alsoRemovecoplanarFront);
          }
          if (node.front) stack.push(node.front);
          if (node.back) stack.push(node.back);
          node = stack.pop();
        } while (node !== void 0);
      }
      addPolygonTreeNodes(newpolygontreenodes) {
        let current = { node: this, polygontreenodes: newpolygontreenodes };
        const stack = [];
        do {
          const node = current.node;
          const polygontreenodes = current.polygontreenodes;
          if (polygontreenodes.length === 0) {
            current = stack.pop();
            continue;
          }
          if (!node.plane) {
            let index = 0;
            index = Math.floor(polygontreenodes.length / 2);
            const bestpoly = polygontreenodes[index].getPolygon();
            node.plane = poly3.plane(bestpoly);
          }
          const frontnodes = [];
          const backnodes = [];
          const n = polygontreenodes.length;
          for (let i = 0; i < n; ++i) {
            polygontreenodes[i].splitByPlane(node.plane, node.polygontreenodes, backnodes, frontnodes, backnodes);
          }
          if (frontnodes.length > 0) {
            if (!node.front) node.front = new _Node3(node);
            const stopCondition = n === frontnodes.length && backnodes.length === 0;
            if (stopCondition) node.front.polygontreenodes = frontnodes;
            else stack.push({ node: node.front, polygontreenodes: frontnodes });
          }
          if (backnodes.length > 0) {
            if (!node.back) node.back = new _Node3(node);
            const stopCondition = n === backnodes.length && frontnodes.length === 0;
            if (stopCondition) node.back.polygontreenodes = backnodes;
            else stack.push({ node: node.back, polygontreenodes: backnodes });
          }
          current = stack.pop();
        } while (current !== void 0);
      }
    };
    module.exports = Node3;
  }
});

// node_modules/@jscad/modeling/src/operations/booleans/trees/splitLineSegmentByPlane.js
var require_splitLineSegmentByPlane = __commonJS({
  "node_modules/@jscad/modeling/src/operations/booleans/trees/splitLineSegmentByPlane.js"(exports, module) {
    var vec3 = require_vec3();
    var splitLineSegmentByPlane = (plane, p1, p2) => {
      const direction = vec3.subtract(vec3.create(), p2, p1);
      let lambda = (plane[3] - vec3.dot(plane, p1)) / vec3.dot(plane, direction);
      if (Number.isNaN(lambda)) lambda = 0;
      if (lambda > 1) lambda = 1;
      if (lambda < 0) lambda = 0;
      vec3.scale(direction, direction, lambda);
      vec3.add(direction, p1, direction);
      return direction;
    };
    module.exports = splitLineSegmentByPlane;
  }
});

// node_modules/@jscad/modeling/src/operations/booleans/trees/splitPolygonByPlane.js
var require_splitPolygonByPlane = __commonJS({
  "node_modules/@jscad/modeling/src/operations/booleans/trees/splitPolygonByPlane.js"(exports, module) {
    var { EPS } = require_constants();
    var plane = require_plane();
    var vec3 = require_vec3();
    var poly3 = require_poly3();
    var splitLineSegmentByPlane = require_splitLineSegmentByPlane();
    var EPS_SQUARED = EPS * EPS;
    var removeConsecutiveDuplicates = (vertices) => {
      const result = [];
      let prevvertex = vertices[vertices.length - 1];
      for (let i = 0; i < vertices.length; i++) {
        const vertex = vertices[i];
        if (vec3.squaredDistance(vertex, prevvertex) >= EPS_SQUARED) {
          result.push(vertex);
        }
        prevvertex = vertex;
      }
      return result;
    };
    var splitPolygonByPlane = (splane, polygon) => {
      const result = {
        type: null,
        front: null,
        back: null
      };
      const vertices = polygon.vertices;
      const numvertices = vertices.length;
      const pplane = poly3.plane(polygon);
      if (plane.equals(pplane, splane)) {
        result.type = 0;
      } else {
        let hasfront = false;
        let hasback = false;
        const vertexIsBack = [];
        const MINEPS = -EPS;
        for (let i = 0; i < numvertices; i++) {
          const t = vec3.dot(splane, vertices[i]) - splane[3];
          const isback = t < MINEPS;
          vertexIsBack.push(isback);
          if (t > EPS) hasfront = true;
          if (t < MINEPS) hasback = true;
        }
        if (!hasfront && !hasback) {
          const t = vec3.dot(splane, pplane);
          result.type = t >= 0 ? 0 : 1;
        } else if (!hasback) {
          result.type = 2;
        } else if (!hasfront) {
          result.type = 3;
        } else {
          result.type = 4;
          const frontvertices = [];
          const backvertices = [];
          let isback = vertexIsBack[0];
          for (let vertexindex = 0; vertexindex < numvertices; vertexindex++) {
            const vertex = vertices[vertexindex];
            let nextvertexindex = vertexindex + 1;
            if (nextvertexindex >= numvertices) nextvertexindex = 0;
            const nextisback = vertexIsBack[nextvertexindex];
            if (isback === nextisback) {
              if (isback) {
                backvertices.push(vertex);
              } else {
                frontvertices.push(vertex);
              }
            } else {
              const nextpoint = vertices[nextvertexindex];
              const intersectionpoint = splitLineSegmentByPlane(splane, vertex, nextpoint);
              if (isback) {
                backvertices.push(vertex);
                backvertices.push(intersectionpoint);
                frontvertices.push(intersectionpoint);
              } else {
                frontvertices.push(vertex);
                frontvertices.push(intersectionpoint);
                backvertices.push(intersectionpoint);
              }
            }
            isback = nextisback;
          }
          if (frontvertices.length >= 3) {
            const frontFiltered = removeConsecutiveDuplicates(frontvertices);
            if (frontFiltered.length >= 3) {
              result.front = poly3.fromPointsAndPlane(frontFiltered, pplane);
            }
          }
          if (backvertices.length >= 3) {
            const backFiltered = removeConsecutiveDuplicates(backvertices);
            if (backFiltered.length >= 3) {
              result.back = poly3.fromPointsAndPlane(backFiltered, pplane);
            }
          }
        }
      }
      return result;
    };
    module.exports = splitPolygonByPlane;
  }
});

// node_modules/@jscad/modeling/src/operations/booleans/trees/PolygonTreeNode.js
var require_PolygonTreeNode = __commonJS({
  "node_modules/@jscad/modeling/src/operations/booleans/trees/PolygonTreeNode.js"(exports, module) {
    var { EPS } = require_constants();
    var vec3 = require_vec3();
    var poly3 = require_poly3();
    var splitPolygonByPlane = require_splitPolygonByPlane();
    var PolygonTreeNode = class _PolygonTreeNode {
      // constructor creates the root node
      constructor(parent, polygon) {
        this.parent = parent;
        this.children = [];
        this.polygon = polygon;
        this.removed = false;
      }
      // fill the tree with polygons. Should be called on the root node only; child nodes must
      // always be a derivate (split) of the parent node.
      addPolygons(polygons) {
        if (!this.isRootNode()) {
          throw new Error("Assertion failed");
        }
        const _this = this;
        polygons.forEach((polygon) => {
          _this.addChild(polygon);
        });
      }
      // remove a node
      // - the siblings become toplevel nodes
      // - the parent is removed recursively
      remove() {
        if (!this.removed) {
          this.removed = true;
          this.polygon = null;
          this.parent.recursivelyInvalidatePolygon();
        }
      }
      isRemoved() {
        return this.removed;
      }
      isRootNode() {
        return !this.parent;
      }
      // invert all polygons in the tree. Call on the root node
      invert() {
        if (!this.isRootNode()) throw new Error("Assertion failed");
        this.invertSub();
      }
      getPolygon() {
        if (!this.polygon) throw new Error("Assertion failed");
        return this.polygon;
      }
      getPolygons(result) {
        if (this.isRootNode() && this.children.length > 0) {
          const compacted = [];
          for (let i2 = 0; i2 < this.children.length; i2++) {
            if (!this.children[i2].removed) compacted.push(this.children[i2]);
          }
          this.children = compacted;
        }
        let children = [this];
        const queue = [children];
        let i, j, l, node;
        for (i = 0; i < queue.length; ++i) {
          children = queue[i];
          for (j = 0, l = children.length; j < l; j++) {
            node = children[j];
            if (node.polygon) {
              result.push(node.polygon);
            } else {
              if (node.children.length > 0) queue.push(node.children);
            }
          }
        }
      }
      // split the node by a plane; add the resulting nodes to the frontnodes and backnodes array
      // If the plane doesn't intersect the polygon, the 'this' object is added to one of the arrays
      // If the plane does intersect the polygon, two new child nodes are created for the front and back fragments,
      //  and added to both arrays.
      splitByPlane(plane, coplanarfrontnodes, coplanarbacknodes, frontnodes, backnodes) {
        if (this.children.length) {
          const queue = [this.children];
          let i;
          let j;
          let l;
          let node;
          let nodes;
          for (i = 0; i < queue.length; i++) {
            nodes = queue[i];
            for (j = 0, l = nodes.length; j < l; j++) {
              node = nodes[j];
              if (node.children.length > 0) {
                queue.push(node.children);
              } else {
                node._splitByPlane(plane, coplanarfrontnodes, coplanarbacknodes, frontnodes, backnodes);
              }
            }
          }
        } else {
          this._splitByPlane(plane, coplanarfrontnodes, coplanarbacknodes, frontnodes, backnodes);
        }
      }
      // only to be called for nodes with no children
      _splitByPlane(splane, coplanarfrontnodes, coplanarbacknodes, frontnodes, backnodes) {
        const polygon = this.polygon;
        if (polygon) {
          const bound = poly3.measureBoundingSphere(polygon);
          const sphereradius = bound[3] + EPS;
          const spherecenter = bound;
          const d = vec3.dot(splane, spherecenter) - splane[3];
          if (d > sphereradius) {
            frontnodes.push(this);
          } else if (d < -sphereradius) {
            backnodes.push(this);
          } else {
            const splitresult = splitPolygonByPlane(splane, polygon);
            switch (splitresult.type) {
              case 0:
                coplanarfrontnodes.push(this);
                break;
              case 1:
                coplanarbacknodes.push(this);
                break;
              case 2:
                frontnodes.push(this);
                break;
              case 3:
                backnodes.push(this);
                break;
              case 4:
                if (splitresult.front) {
                  const frontnode = this.addChild(splitresult.front);
                  frontnodes.push(frontnode);
                }
                if (splitresult.back) {
                  const backnode = this.addChild(splitresult.back);
                  backnodes.push(backnode);
                }
                break;
            }
          }
        }
      }
      // PRIVATE methods from here:
      // add child to a node
      // this should be called whenever the polygon is split
      // a child should be created for every fragment of the split polygon
      // returns the newly created child
      addChild(polygon) {
        const newchild = new _PolygonTreeNode(this, polygon);
        this.children.push(newchild);
        return newchild;
      }
      invertSub() {
        let children = [this];
        const queue = [children];
        let i, j, l, node;
        for (i = 0; i < queue.length; i++) {
          children = queue[i];
          for (j = 0, l = children.length; j < l; j++) {
            node = children[j];
            if (node.polygon) {
              node.polygon = poly3.invert(node.polygon);
            }
            if (node.children.length > 0) queue.push(node.children);
          }
        }
      }
      // private method
      // remove the polygon from the node, and all parent nodes above it
      // called to invalidate parents of removed nodes
      recursivelyInvalidatePolygon() {
        this.polygon = null;
        if (this.parent) {
          this.parent.recursivelyInvalidatePolygon();
        }
      }
      clear() {
        let children = [this];
        const queue = [children];
        for (let i = 0; i < queue.length; ++i) {
          children = queue[i];
          const l = children.length;
          for (let j = 0; j < l; j++) {
            const node = children[j];
            if (node.polygon) {
              node.polygon = null;
            }
            if (node.parent) {
              node.parent = null;
            }
            if (node.children.length > 0) queue.push(node.children);
            node.children = [];
          }
        }
      }
      toString() {
        let result = "";
        let children = [this];
        const queue = [children];
        let i, j, l, node;
        for (i = 0; i < queue.length; ++i) {
          children = queue[i];
          const prefix = " ".repeat(i);
          for (j = 0, l = children.length; j < l; j++) {
            node = children[j];
            result += `${prefix}PolygonTreeNode (${node.isRootNode()}): ${node.children.length}`;
            if (node.polygon) {
              result += `
 ${prefix}polygon: ${node.polygon.vertices}
`;
            } else {
              result += "\n";
            }
            if (node.children.length > 0) queue.push(node.children);
          }
        }
        return result;
      }
    };
    module.exports = PolygonTreeNode;
  }
});

// node_modules/@jscad/modeling/src/operations/booleans/trees/Tree.js
var require_Tree = __commonJS({
  "node_modules/@jscad/modeling/src/operations/booleans/trees/Tree.js"(exports, module) {
    var Node3 = require_Node();
    var PolygonTreeNode = require_PolygonTreeNode();
    var Tree = class {
      constructor(polygons) {
        this.polygonTree = new PolygonTreeNode();
        this.rootnode = new Node3(null);
        if (polygons) this.addPolygons(polygons);
      }
      invert() {
        this.polygonTree.invert();
        this.rootnode.invert();
      }
      // Remove all polygons in this BSP tree that are inside the other BSP tree
      // `tree`.
      clipTo(tree, alsoRemovecoplanarFront = false) {
        this.rootnode.clipTo(tree, alsoRemovecoplanarFront);
      }
      allPolygons() {
        const result = [];
        this.polygonTree.getPolygons(result);
        return result;
      }
      addPolygons(polygons) {
        const polygontreenodes = new Array(polygons.length);
        for (let i = 0; i < polygons.length; i++) {
          polygontreenodes[i] = this.polygonTree.addChild(polygons[i]);
        }
        this.rootnode.addPolygonTreeNodes(polygontreenodes);
      }
      clear() {
        this.polygonTree.clear();
      }
      toString() {
        const result = "Tree: " + this.polygonTree.toString("");
        return result;
      }
    };
    module.exports = Tree;
  }
});

// node_modules/@jscad/modeling/src/operations/booleans/trees/index.js
var require_trees = __commonJS({
  "node_modules/@jscad/modeling/src/operations/booleans/trees/index.js"(exports, module) {
    module.exports = {
      Tree: require_Tree()
    };
  }
});

// node_modules/@jscad/modeling/src/operations/booleans/intersectGeom3Sub.js
var require_intersectGeom3Sub = __commonJS({
  "node_modules/@jscad/modeling/src/operations/booleans/intersectGeom3Sub.js"(exports, module) {
    var geom3 = require_geom3();
    var mayOverlap = require_mayOverlap();
    var { Tree } = require_trees();
    var intersectGeom3Sub = (geometry1, geometry2) => {
      if (!mayOverlap(geometry1, geometry2)) {
        return geom3.create();
      }
      const a = new Tree(geom3.toPolygons(geometry1));
      const b = new Tree(geom3.toPolygons(geometry2));
      a.invert();
      b.clipTo(a);
      b.invert();
      a.clipTo(b);
      b.clipTo(a);
      a.addPolygons(b.allPolygons());
      a.invert();
      const newpolygons = a.allPolygons();
      return geom3.create(newpolygons);
    };
    module.exports = intersectGeom3Sub;
  }
});

// node_modules/@jscad/modeling/src/operations/booleans/intersectGeom3.js
var require_intersectGeom3 = __commonJS({
  "node_modules/@jscad/modeling/src/operations/booleans/intersectGeom3.js"(exports, module) {
    var flatten = require_flatten();
    var retessellate = require_retessellate();
    var intersectSub = require_intersectGeom3Sub();
    var intersect = (...geometries2) => {
      geometries2 = flatten(geometries2);
      let newgeometry = geometries2.shift();
      geometries2.forEach((geometry) => {
        newgeometry = intersectSub(newgeometry, geometry);
      });
      newgeometry = retessellate(newgeometry);
      return newgeometry;
    };
    module.exports = intersect;
  }
});

// node_modules/@jscad/modeling/src/operations/booleans/intersectGeom2.js
var require_intersectGeom2 = __commonJS({
  "node_modules/@jscad/modeling/src/operations/booleans/intersectGeom2.js"(exports, module) {
    var flatten = require_flatten();
    var geom3 = require_geom3();
    var measureEpsilon = require_measureEpsilon();
    var fromFakePolygons = require_fromFakePolygons();
    var to3DWalls = require_to3DWalls();
    var intersectGeom3 = require_intersectGeom3();
    var intersect = (...geometries2) => {
      geometries2 = flatten(geometries2);
      const newgeometries = geometries2.map((geometry) => to3DWalls({ z0: -1, z1: 1 }, geometry));
      const newgeom3 = intersectGeom3(newgeometries);
      const epsilon = measureEpsilon(newgeom3);
      return fromFakePolygons(epsilon, geom3.toPolygons(newgeom3));
    };
    module.exports = intersect;
  }
});

// node_modules/@jscad/modeling/src/operations/booleans/intersect.js
var require_intersect2 = __commonJS({
  "node_modules/@jscad/modeling/src/operations/booleans/intersect.js"(exports, module) {
    var flatten = require_flatten();
    var areAllShapesTheSameType = require_areAllShapesTheSameType();
    var geom2 = require_geom2();
    var geom3 = require_geom3();
    var intersectGeom2 = require_intersectGeom2();
    var intersectGeom3 = require_intersectGeom3();
    var intersect = (...geometries2) => {
      geometries2 = flatten(geometries2);
      if (geometries2.length === 0) throw new Error("wrong number of arguments");
      if (!areAllShapesTheSameType(geometries2)) {
        throw new Error("only intersect of the types are supported");
      }
      const geometry = geometries2[0];
      if (geom2.isA(geometry)) return intersectGeom2(geometries2);
      if (geom3.isA(geometry)) return intersectGeom3(geometries2);
      return geometry;
    };
    module.exports = intersect;
  }
});

// node_modules/@jscad/modeling/src/operations/hulls/hullPoints3.js
var require_hullPoints3 = __commonJS({
  "node_modules/@jscad/modeling/src/operations/hulls/hullPoints3.js"(exports, module) {
    var poly3 = require_poly3();
    var quickhull = require_quickhull();
    var hullPoints3 = (uniquePoints) => {
      const faces = quickhull(uniquePoints, { skipTriangulation: true });
      const polygons = faces.map((face) => {
        const vertices = face.map((index) => uniquePoints[index]);
        return poly3.create(vertices);
      });
      return polygons;
    };
    module.exports = hullPoints3;
  }
});

// node_modules/@jscad/modeling/src/operations/booleans/unionGeom3Sub.js
var require_unionGeom3Sub = __commonJS({
  "node_modules/@jscad/modeling/src/operations/booleans/unionGeom3Sub.js"(exports, module) {
    var geom3 = require_geom3();
    var mayOverlap = require_mayOverlap();
    var { Tree } = require_trees();
    var unionSub = (geometry1, geometry2) => {
      if (!mayOverlap(geometry1, geometry2)) {
        return unionForNonIntersecting(geometry1, geometry2);
      }
      const a = new Tree(geom3.toPolygons(geometry1));
      const b = new Tree(geom3.toPolygons(geometry2));
      a.clipTo(b, false);
      b.clipTo(a);
      b.invert();
      b.clipTo(a);
      b.invert();
      const newpolygons = a.allPolygons().concat(b.allPolygons());
      const result = geom3.create(newpolygons);
      return result;
    };
    var unionForNonIntersecting = (geometry1, geometry2) => {
      let newpolygons = geom3.toPolygons(geometry1);
      newpolygons = newpolygons.concat(geom3.toPolygons(geometry2));
      return geom3.create(newpolygons);
    };
    module.exports = unionSub;
  }
});

// node_modules/@jscad/modeling/src/operations/booleans/unionGeom3.js
var require_unionGeom3 = __commonJS({
  "node_modules/@jscad/modeling/src/operations/booleans/unionGeom3.js"(exports, module) {
    var flatten = require_flatten();
    var retessellate = require_retessellate();
    var unionSub = require_unionGeom3Sub();
    var union = (...geometries2) => {
      geometries2 = flatten(geometries2);
      let i;
      for (i = 1; i < geometries2.length; i += 2) {
        geometries2.push(unionSub(geometries2[i - 1], geometries2[i]));
      }
      let newgeometry = geometries2[i - 1];
      newgeometry = retessellate(newgeometry);
      return newgeometry;
    };
    module.exports = union;
  }
});

// node_modules/@jscad/modeling/src/operations/minkowski/minkowskiSum.js
var require_minkowskiSum = __commonJS({
  "node_modules/@jscad/modeling/src/operations/minkowski/minkowskiSum.js"(exports, module) {
    var flatten = require_flatten();
    var geom3 = require_geom3();
    var poly3 = require_poly3();
    var hullPoints3 = require_hullPoints3();
    var unionGeom3 = require_unionGeom3();
    var minkowskiSum = (...geometries2) => {
      geometries2 = flatten(geometries2);
      if (geometries2.length !== 2) {
        throw new Error("minkowskiSum requires exactly two geometries");
      }
      const [geomA, geomB] = geometries2;
      if (!geom3.isA(geomA) || !geom3.isA(geomB)) {
        throw new Error("minkowskiSum requires geom3 geometries");
      }
      const aConvex = geom3.isConvex(geomA);
      const bConvex = geom3.isConvex(geomB);
      if (aConvex && bConvex) {
        return minkowskiSumConvex(geomA, geomB);
      }
      if (!aConvex && bConvex) {
        return minkowskiSumNonConvexConvex(geomA, geomB);
      }
      if (aConvex && !bConvex) {
        return minkowskiSumNonConvexConvex(geomB, geomA);
      }
      throw new Error("minkowskiSum of two non-convex geometries is not yet supported");
    };
    var minkowskiSumNonConvexConvex = (geomA, geomB) => {
      const tetrahedra = decomposeIntoTetrahedra(geomA);
      if (tetrahedra.length === 0) {
        return geom3.create();
      }
      const parts = tetrahedra.map((tet) => minkowskiSumConvex(tet, geomB));
      if (parts.length === 1) {
        return parts[0];
      }
      return unionGeom3(parts);
    };
    var decomposeIntoTetrahedra = (geometry) => {
      const polygons = geom3.toPolygons(geometry);
      if (polygons.length === 0) {
        return [];
      }
      const tetrahedra = [];
      for (let i = 0; i < polygons.length; i++) {
        const polygon = polygons[i];
        const vertices = polygon.vertices;
        let cx = 0, cy = 0, cz = 0;
        for (let k = 0; k < vertices.length; k++) {
          cx += vertices[k][0];
          cy += vertices[k][1];
          cz += vertices[k][2];
        }
        cx /= vertices.length;
        cy /= vertices.length;
        cz /= vertices.length;
        const plane = poly3.plane(polygon);
        const nx = plane[0], ny = plane[1], nz = plane[2];
        const offset = 0.1;
        const apex = [
          // Vertex used as apex in tetrahedron polygons below
          cx - nx * offset,
          cy - ny * offset,
          cz - nz * offset
        ];
        for (let j = 1; j < vertices.length - 1; j++) {
          const v0 = vertices[0];
          const v1 = vertices[j];
          const v2 = vertices[j + 1];
          const tetPolygons = createTetrahedronPolygons(apex, v0, v1, v2);
          tetrahedra.push(geom3.create(tetPolygons));
        }
      }
      return tetrahedra;
    };
    var createTetrahedronPolygons = (p0, p1, p2, p3) => {
      return [
        poly3.create([p0, p2, p1]),
        // base seen from p3
        poly3.create([p0, p1, p3]),
        // face opposite p2
        poly3.create([p1, p2, p3]),
        // face opposite p0
        poly3.create([p2, p0, p3])
        // face opposite p1
      ];
    };
    var minkowskiSumConvex = (geomA, geomB) => {
      const pointsA = extractUniqueVertices(geomA);
      const pointsB = extractUniqueVertices(geomB);
      if (pointsA.length === 0 || pointsB.length === 0) {
        return geom3.create();
      }
      const summedPoints = [];
      for (let i = 0; i < pointsA.length; i++) {
        const a = pointsA[i];
        for (let j = 0; j < pointsB.length; j++) {
          const b = pointsB[j];
          summedPoints.push([a[0] + b[0], a[1] + b[1], a[2] + b[2]]);
        }
      }
      const hullPolygons = hullPoints3(summedPoints);
      return geom3.create(hullPolygons);
    };
    var extractUniqueVertices = (geometry) => {
      const found = /* @__PURE__ */ new Set();
      const unique = [];
      const polygons = geom3.toPolygons(geometry);
      for (let i = 0; i < polygons.length; i++) {
        const vertices = polygons[i].vertices;
        for (let j = 0; j < vertices.length; j++) {
          const v = vertices[j];
          const key = `${v[0]},${v[1]},${v[2]}`;
          if (!found.has(key)) {
            found.add(key);
            unique.push(v);
          }
        }
      }
      return unique;
    };
    module.exports = minkowskiSum;
  }
});

// node_modules/@jscad/modeling/src/operations/booleans/scissionGeom3.js
var require_scissionGeom3 = __commonJS({
  "node_modules/@jscad/modeling/src/operations/booleans/scissionGeom3.js"(exports, module) {
    var vec3 = require_vec3();
    var measureEpsilon = require_measureEpsilon();
    var geom3 = require_geom3();
    var sortNb = (array) => array.sort((a, b) => a - b).filter((item, pos, ary) => !pos || item !== ary[pos - 1]);
    var insertMapping = (map, point, index) => {
      const key = `${point}`;
      const mapping = map.get(key);
      if (mapping === void 0) {
        map.set(key, [index]);
      } else {
        mapping.push(index);
      }
    };
    var findMapping = (map, point) => {
      const key = `${point}`;
      return map.get(key);
    };
    var scissionGeom3 = (geometry) => {
      const eps = measureEpsilon(geometry);
      const polygons = geom3.toPolygons(geometry);
      const pl = polygons.length;
      const indexesPerPoint = /* @__PURE__ */ new Map();
      const temp = vec3.create();
      polygons.forEach((polygon, index) => {
        polygon.vertices.forEach((point) => {
          insertMapping(indexesPerPoint, vec3.snap(temp, point, eps), index);
        });
      });
      const indexesPerPolygon = polygons.map((polygon) => {
        let indexes = [];
        polygon.vertices.forEach((point) => {
          indexes = indexes.concat(findMapping(indexesPerPoint, vec3.snap(temp, point, eps)));
        });
        return { e: 1, d: sortNb(indexes) };
      });
      indexesPerPoint.clear();
      let merges = 0;
      const ippl = indexesPerPolygon.length;
      for (let i = 0; i < ippl; i++) {
        const mapi = indexesPerPolygon[i];
        if (mapi.e > 0) {
          const indexes = new Array(pl);
          indexes[i] = true;
          do {
            merges = 0;
            indexes.forEach((e, j) => {
              const mapj = indexesPerPolygon[j];
              if (mapj.e > 0) {
                mapj.e = -1;
                for (let d = 0; d < mapj.d.length; d++) {
                  indexes[mapj.d[d]] = true;
                }
                merges++;
              }
            });
          } while (merges > 0);
          mapi.indexes = indexes;
        }
      }
      const newgeometries = [];
      for (let i = 0; i < ippl; i++) {
        if (indexesPerPolygon[i].indexes) {
          const newpolygons = [];
          indexesPerPolygon[i].indexes.forEach((e, p) => newpolygons.push(polygons[p]));
          newgeometries.push(geom3.create(newpolygons));
        }
      }
      return newgeometries;
    };
    module.exports = scissionGeom3;
  }
});

// node_modules/@jscad/modeling/src/operations/booleans/scission.js
var require_scission = __commonJS({
  "node_modules/@jscad/modeling/src/operations/booleans/scission.js"(exports, module) {
    var flatten = require_flatten();
    var geom3 = require_geom3();
    var scissionGeom3 = require_scissionGeom3();
    var scission = (...objects) => {
      objects = flatten(objects);
      if (objects.length === 0) throw new Error("wrong number of arguments");
      const results = objects.map((object) => {
        if (geom3.isA(object)) return scissionGeom3(object);
        return object;
      });
      return results.length === 1 ? results[0] : results;
    };
    module.exports = scission;
  }
});

// node_modules/@jscad/modeling/src/operations/booleans/subtractGeom3Sub.js
var require_subtractGeom3Sub = __commonJS({
  "node_modules/@jscad/modeling/src/operations/booleans/subtractGeom3Sub.js"(exports, module) {
    var geom3 = require_geom3();
    var mayOverlap = require_mayOverlap();
    var { Tree } = require_trees();
    var subtractGeom3Sub = (geometry1, geometry2) => {
      if (!mayOverlap(geometry1, geometry2)) {
        return geom3.clone(geometry1);
      }
      const a = new Tree(geom3.toPolygons(geometry1));
      const b = new Tree(geom3.toPolygons(geometry2));
      a.invert();
      a.clipTo(b);
      b.clipTo(a, true);
      a.addPolygons(b.allPolygons());
      a.invert();
      const newpolygons = a.allPolygons();
      return geom3.create(newpolygons);
    };
    module.exports = subtractGeom3Sub;
  }
});

// node_modules/@jscad/modeling/src/operations/booleans/subtractGeom3.js
var require_subtractGeom3 = __commonJS({
  "node_modules/@jscad/modeling/src/operations/booleans/subtractGeom3.js"(exports, module) {
    var flatten = require_flatten();
    var retessellate = require_retessellate();
    var subtractSub = require_subtractGeom3Sub();
    var subtract = (...geometries2) => {
      geometries2 = flatten(geometries2);
      let newgeometry = geometries2.shift();
      geometries2.forEach((geometry) => {
        newgeometry = subtractSub(newgeometry, geometry);
      });
      newgeometry = retessellate(newgeometry);
      return newgeometry;
    };
    module.exports = subtract;
  }
});

// node_modules/@jscad/modeling/src/operations/booleans/subtractGeom2.js
var require_subtractGeom2 = __commonJS({
  "node_modules/@jscad/modeling/src/operations/booleans/subtractGeom2.js"(exports, module) {
    var flatten = require_flatten();
    var geom3 = require_geom3();
    var measureEpsilon = require_measureEpsilon();
    var fromFakePolygons = require_fromFakePolygons();
    var to3DWalls = require_to3DWalls();
    var subtractGeom3 = require_subtractGeom3();
    var subtract = (...geometries2) => {
      geometries2 = flatten(geometries2);
      const newgeometries = geometries2.map((geometry) => to3DWalls({ z0: -1, z1: 1 }, geometry));
      const newgeom3 = subtractGeom3(newgeometries);
      const epsilon = measureEpsilon(newgeom3);
      return fromFakePolygons(epsilon, geom3.toPolygons(newgeom3));
    };
    module.exports = subtract;
  }
});

// node_modules/@jscad/modeling/src/operations/booleans/subtract.js
var require_subtract4 = __commonJS({
  "node_modules/@jscad/modeling/src/operations/booleans/subtract.js"(exports, module) {
    var flatten = require_flatten();
    var areAllShapesTheSameType = require_areAllShapesTheSameType();
    var geom2 = require_geom2();
    var geom3 = require_geom3();
    var subtractGeom2 = require_subtractGeom2();
    var subtractGeom3 = require_subtractGeom3();
    var subtract = (...geometries2) => {
      geometries2 = flatten(geometries2);
      if (geometries2.length === 0) throw new Error("wrong number of arguments");
      if (!areAllShapesTheSameType(geometries2)) {
        throw new Error("only subtract of the types are supported");
      }
      const geometry = geometries2[0];
      if (geom2.isA(geometry)) return subtractGeom2(geometries2);
      if (geom3.isA(geometry)) return subtractGeom3(geometries2);
      return geometry;
    };
    module.exports = subtract;
  }
});

// node_modules/@jscad/modeling/src/operations/booleans/unionGeom2.js
var require_unionGeom2 = __commonJS({
  "node_modules/@jscad/modeling/src/operations/booleans/unionGeom2.js"(exports, module) {
    var flatten = require_flatten();
    var geom3 = require_geom3();
    var measureEpsilon = require_measureEpsilon();
    var fromFakePolygons = require_fromFakePolygons();
    var to3DWalls = require_to3DWalls();
    var unionGeom3 = require_unionGeom3();
    var union = (...geometries2) => {
      geometries2 = flatten(geometries2);
      const newgeometries = geometries2.map((geometry) => to3DWalls({ z0: -1, z1: 1 }, geometry));
      const newgeom3 = unionGeom3(newgeometries);
      const epsilon = measureEpsilon(newgeom3);
      return fromFakePolygons(epsilon, geom3.toPolygons(newgeom3));
    };
    module.exports = union;
  }
});

// node_modules/@jscad/modeling/src/operations/booleans/union.js
var require_union = __commonJS({
  "node_modules/@jscad/modeling/src/operations/booleans/union.js"(exports, module) {
    var flatten = require_flatten();
    var areAllShapesTheSameType = require_areAllShapesTheSameType();
    var geom2 = require_geom2();
    var geom3 = require_geom3();
    var unionGeom2 = require_unionGeom2();
    var unionGeom3 = require_unionGeom3();
    var union = (...geometries2) => {
      geometries2 = flatten(geometries2);
      if (geometries2.length === 0) throw new Error("wrong number of arguments");
      if (!areAllShapesTheSameType(geometries2)) {
        throw new Error("only unions of the same type are supported");
      }
      const geometry = geometries2[0];
      if (geom2.isA(geometry)) return unionGeom2(geometries2);
      if (geom3.isA(geometry)) return unionGeom3(geometries2);
      return geometry;
    };
    module.exports = union;
  }
});

// node_modules/@jscad/modeling/src/operations/booleans/index.js
var require_booleans = __commonJS({
  "node_modules/@jscad/modeling/src/operations/booleans/index.js"(exports, module) {
    module.exports = {
      intersect: require_intersect2(),
      minkowski: require_minkowskiSum(),
      scission: require_scission(),
      subtract: require_subtract4(),
      union: require_union()
    };
  }
});

// node_modules/@jscad/modeling/src/operations/expansions/offsetFromPoints.js
var require_offsetFromPoints = __commonJS({
  "node_modules/@jscad/modeling/src/operations/expansions/offsetFromPoints.js"(exports, module) {
    var { EPS, TAU } = require_constants();
    var intersect = require_intersect();
    var line2 = require_line2();
    var vec2 = require_vec2();
    var area = require_area();
    var offsetFromPoints = (options, points) => {
      const defaults = {
        delta: 1,
        corners: "edge",
        closed: false,
        segments: 16
      };
      let { delta, corners, closed, segments } = Object.assign({}, defaults, options);
      if (Math.abs(delta) < EPS) return points;
      let rotation = options.closed ? area(points) : 1;
      if (rotation === 0) rotation = 1;
      const orientation = rotation > 0 && delta >= 0 || rotation < 0 && delta < 0;
      delta = Math.abs(delta);
      let previousSegment = null;
      let newPoints = [];
      const newCorners = [];
      const of = vec2.create();
      const n = points.length;
      for (let i = 0; i < n; i++) {
        const j = (i + 1) % n;
        const p0 = points[i];
        const p1 = points[j];
        orientation ? vec2.subtract(of, p0, p1) : vec2.subtract(of, p1, p0);
        vec2.normal(of, of);
        vec2.normalize(of, of);
        vec2.scale(of, of, delta);
        const n0 = vec2.add(vec2.create(), p0, of);
        const n1 = vec2.add(vec2.create(), p1, of);
        const currentSegment = [n0, n1];
        if (previousSegment != null) {
          if (closed || !closed && j !== 0) {
            const ip = intersect(previousSegment[0], previousSegment[1], currentSegment[0], currentSegment[1]);
            if (ip) {
              newPoints.pop();
              currentSegment[0] = ip;
            } else {
              newCorners.push({ c: p0, s0: previousSegment, s1: currentSegment });
            }
          }
        }
        previousSegment = [n0, n1];
        if (j === 0 && !closed) continue;
        newPoints.push(currentSegment[0]);
        newPoints.push(currentSegment[1]);
      }
      if (closed && previousSegment != null) {
        const n0 = newPoints[0];
        const n1 = newPoints[1];
        const ip = intersect(previousSegment[0], previousSegment[1], n0, n1);
        if (ip) {
          newPoints[0] = ip;
          newPoints.pop();
        } else {
          const p0 = points[0];
          const cursegment = [n0, n1];
          newCorners.push({ c: p0, s0: previousSegment, s1: cursegment });
        }
      }
      if (corners === "edge") {
        const pointIndex = /* @__PURE__ */ new Map();
        newPoints.forEach((point, index) => pointIndex.set(point, index));
        const line0 = line2.create();
        const line1 = line2.create();
        newCorners.forEach((corner) => {
          line2.fromPoints(line0, corner.s0[0], corner.s0[1]);
          line2.fromPoints(line1, corner.s1[0], corner.s1[1]);
          const ip = line2.intersectPointOfLines(line0, line1);
          if (Number.isFinite(ip[0]) && Number.isFinite(ip[1])) {
            const p0 = corner.s0[1];
            const i = pointIndex.get(p0);
            newPoints[i] = ip;
            newPoints[(i + 1) % newPoints.length] = void 0;
          } else {
            const p0 = corner.s1[0];
            const i = pointIndex.get(p0);
            newPoints[i] = void 0;
          }
        });
        newPoints = newPoints.filter((p) => p !== void 0);
      }
      if (corners === "round") {
        let cornersegments = Math.floor(segments / 4);
        const v0 = vec2.create();
        newCorners.forEach((corner) => {
          let rotation2 = vec2.angle(vec2.subtract(v0, corner.s1[0], corner.c));
          rotation2 -= vec2.angle(vec2.subtract(v0, corner.s0[1], corner.c));
          if (orientation && rotation2 < 0) {
            rotation2 = rotation2 + Math.PI;
            if (rotation2 < 0) rotation2 = rotation2 + Math.PI;
          }
          if (!orientation && rotation2 > 0) {
            rotation2 = rotation2 - Math.PI;
            if (rotation2 > 0) rotation2 = rotation2 - Math.PI;
          }
          if (rotation2 !== 0) {
            cornersegments = Math.floor(segments * (Math.abs(rotation2) / TAU));
            const step = rotation2 / cornersegments;
            const start = vec2.angle(vec2.subtract(v0, corner.s0[1], corner.c));
            const cornerpoints = [];
            for (let i = 1; i < cornersegments; i++) {
              const radians = start + step * i;
              const point = vec2.fromAngleRadians(vec2.create(), radians);
              vec2.scale(point, point, delta);
              vec2.add(point, point, corner.c);
              cornerpoints.push(point);
            }
            if (cornerpoints.length > 0) {
              const p0 = corner.s0[1];
              let i = newPoints.findIndex((point) => vec2.equals(p0, point));
              i = (i + 1) % newPoints.length;
              newPoints.splice(i, 0, ...cornerpoints);
            }
          } else {
            const p0 = corner.s1[0];
            const i = newPoints.findIndex((point) => vec2.equals(p0, point));
            newPoints.splice(i, 1);
          }
        });
      }
      return newPoints;
    };
    module.exports = offsetFromPoints;
  }
});

// node_modules/@jscad/modeling/src/operations/expansions/expandGeom2.js
var require_expandGeom2 = __commonJS({
  "node_modules/@jscad/modeling/src/operations/expansions/expandGeom2.js"(exports, module) {
    var geom2 = require_geom2();
    var offsetFromPoints = require_offsetFromPoints();
    var expandGeom2 = (options, geometry) => {
      const defaults = {
        delta: 1,
        corners: "edge",
        segments: 16
      };
      const { delta, corners, segments } = Object.assign({}, defaults, options);
      if (!(corners === "edge" || corners === "chamfer" || corners === "round")) {
        throw new Error('corners must be "edge", "chamfer", or "round"');
      }
      const outlines = geom2.toOutlines(geometry);
      const newoutlines = outlines.map((outline) => {
        options = {
          delta,
          corners,
          closed: true,
          segments
        };
        return offsetFromPoints(options, outline);
      });
      const allsides = newoutlines.reduce((sides, newoutline) => sides.concat(geom2.toSides(geom2.fromPoints(newoutline))), []);
      return geom2.create(allsides);
    };
    module.exports = expandGeom2;
  }
});

// node_modules/@jscad/modeling/src/operations/expansions/extrudePolygon.js
var require_extrudePolygon = __commonJS({
  "node_modules/@jscad/modeling/src/operations/expansions/extrudePolygon.js"(exports, module) {
    var mat4 = require_mat4();
    var vec3 = require_vec3();
    var geom3 = require_geom3();
    var poly3 = require_poly3();
    var extrudePolygon = (offsetvector, polygon1) => {
      const direction = vec3.dot(poly3.plane(polygon1), offsetvector);
      if (direction > 0) {
        polygon1 = poly3.invert(polygon1);
      }
      const newpolygons = [polygon1];
      const polygon2 = poly3.transform(mat4.fromTranslation(mat4.create(), offsetvector), polygon1);
      const numvertices = polygon1.vertices.length;
      for (let i = 0; i < numvertices; i++) {
        const nexti = i < numvertices - 1 ? i + 1 : 0;
        const sideFacePolygon = poly3.create([
          polygon1.vertices[i],
          polygon2.vertices[i],
          polygon2.vertices[nexti],
          polygon1.vertices[nexti]
        ]);
        newpolygons.push(sideFacePolygon);
      }
      newpolygons.push(poly3.invert(polygon2));
      return geom3.create(newpolygons);
    };
    module.exports = extrudePolygon;
  }
});

// node_modules/@jscad/modeling/src/operations/expansions/expandShell.js
var require_expandShell = __commonJS({
  "node_modules/@jscad/modeling/src/operations/expansions/expandShell.js"(exports, module) {
    var { EPS, TAU } = require_constants();
    var mat4 = require_mat4();
    var vec3 = require_vec3();
    var fnNumberSort = require_fnNumberSort();
    var geom3 = require_geom3();
    var poly3 = require_poly3();
    var sphere = require_sphere();
    var retessellate = require_retessellate();
    var unionGeom3Sub = require_unionGeom3Sub();
    var extrudePolygon = require_extrudePolygon();
    var mapPlaneToVertex = (map, vertex, plane) => {
      const key = vertex.toString();
      if (!map.has(key)) {
        const entry = [vertex, [plane]];
        map.set(key, entry);
      } else {
        const planes = map.get(key)[1];
        planes.push(plane);
      }
    };
    var mapPlaneToEdge = (map, edge, plane) => {
      const key0 = edge[0].toString();
      const key1 = edge[1].toString();
      const key = key0 < key1 ? `${key0},${key1}` : `${key1},${key0}`;
      if (!map.has(key)) {
        const entry = [edge, [plane]];
        map.set(key, entry);
      } else {
        const planes = map.get(key)[1];
        planes.push(plane);
      }
    };
    var addUniqueAngle = (map, angle) => {
      const i = map.findIndex((item) => item === angle);
      if (i < 0) {
        map.push(angle);
      }
    };
    var expandShell = (options, geometry) => {
      const defaults = {
        delta: 1,
        segments: 12
      };
      const { delta, segments } = Object.assign({}, defaults, options);
      let result = geom3.create();
      const vertices2planes = /* @__PURE__ */ new Map();
      const edges2planes = /* @__PURE__ */ new Map();
      const v1 = vec3.create();
      const v2 = vec3.create();
      const polygons = geom3.toPolygons(geometry);
      polygons.forEach((polygon, index) => {
        const extrudevector = vec3.scale(vec3.create(), poly3.plane(polygon), 2 * delta);
        const translatedpolygon = poly3.transform(mat4.fromTranslation(mat4.create(), vec3.scale(vec3.create(), extrudevector, -0.5)), polygon);
        const extrudedface = extrudePolygon(extrudevector, translatedpolygon);
        result = unionGeom3Sub(result, extrudedface);
        const vertices = polygon.vertices;
        for (let i = 0; i < vertices.length; i++) {
          mapPlaneToVertex(vertices2planes, vertices[i], poly3.plane(polygon));
          const j = (i + 1) % vertices.length;
          const edge = [vertices[i], vertices[j]];
          mapPlaneToEdge(edges2planes, edge, poly3.plane(polygon));
        }
      });
      edges2planes.forEach((item) => {
        const edge = item[0];
        const planes = item[1];
        const startpoint = edge[0];
        const endpoint = edge[1];
        const zbase = vec3.subtract(vec3.create(), endpoint, startpoint);
        vec3.normalize(zbase, zbase);
        const xbase = planes[0];
        const ybase = vec3.cross(vec3.create(), xbase, zbase);
        let angles = [];
        for (let i = 0; i < segments; i++) {
          addUniqueAngle(angles, i * TAU / segments);
        }
        for (let i = 0, iMax = planes.length; i < iMax; i++) {
          const planenormal = planes[i];
          const si = vec3.dot(ybase, planenormal);
          const co = vec3.dot(xbase, planenormal);
          let angle = Math.atan2(si, co);
          if (angle < 0) angle += TAU;
          addUniqueAngle(angles, angle);
          angle = Math.atan2(-si, -co);
          if (angle < 0) angle += TAU;
          addUniqueAngle(angles, angle);
        }
        angles = angles.sort(fnNumberSort);
        const numangles = angles.length;
        let prevp1;
        let prevp2;
        const startfacevertices = [];
        const endfacevertices = [];
        const polygons2 = [];
        for (let i = -1; i < numangles; i++) {
          const angle = angles[i < 0 ? i + numangles : i];
          const si = Math.sin(angle);
          const co = Math.cos(angle);
          vec3.scale(v1, xbase, co * delta);
          vec3.scale(v2, ybase, si * delta);
          vec3.add(v1, v1, v2);
          const p1 = vec3.add(vec3.create(), startpoint, v1);
          const p2 = vec3.add(vec3.create(), endpoint, v1);
          let skip = false;
          if (i >= 0) {
            if (vec3.distance(p1, prevp1) < EPS) {
              skip = true;
            }
          }
          if (!skip) {
            if (i >= 0) {
              startfacevertices.push(p1);
              endfacevertices.push(p2);
              const points = [prevp2, p2, p1, prevp1];
              const polygon = poly3.create(points);
              polygons2.push(polygon);
            }
            prevp1 = p1;
            prevp2 = p2;
          }
        }
        endfacevertices.reverse();
        polygons2.push(poly3.create(startfacevertices));
        polygons2.push(poly3.create(endfacevertices));
        const cylinder = geom3.create(polygons2);
        result = unionGeom3Sub(result, cylinder);
      });
      vertices2planes.forEach((item) => {
        const vertex = item[0];
        const planes = item[1];
        const xaxis = planes[0];
        let bestzaxis = null;
        let bestzaxisorthogonality = 0;
        for (let i = 1; i < planes.length; i++) {
          const normal = planes[i];
          const cross = vec3.cross(v1, xaxis, normal);
          const crosslength = vec3.length(cross);
          if (crosslength > 0.05) {
            if (crosslength > bestzaxisorthogonality) {
              bestzaxisorthogonality = crosslength;
              bestzaxis = normal;
            }
          }
        }
        if (!bestzaxis) {
          bestzaxis = vec3.orthogonal(v1, xaxis);
        }
        const yaxis = vec3.cross(v1, xaxis, bestzaxis);
        vec3.normalize(yaxis, yaxis);
        const zaxis = vec3.cross(v2, yaxis, xaxis);
        const corner = sphere({
          center: [vertex[0], vertex[1], vertex[2]],
          radius: delta,
          segments,
          axes: [xaxis, yaxis, zaxis]
        });
        result = unionGeom3Sub(result, corner);
      });
      return retessellate(result);
    };
    module.exports = expandShell;
  }
});

// node_modules/@jscad/modeling/src/operations/expansions/expandGeom3.js
var require_expandGeom3 = __commonJS({
  "node_modules/@jscad/modeling/src/operations/expansions/expandGeom3.js"(exports, module) {
    var geom3 = require_geom3();
    var union = require_union();
    var expandShell = require_expandShell();
    var expandGeom3 = (options, geometry) => {
      const defaults = {
        delta: 1,
        corners: "round",
        segments: 12
      };
      const { delta, corners, segments } = Object.assign({}, defaults, options);
      if (!(corners === "round")) {
        throw new Error('corners must be "round" for 3D geometries');
      }
      const polygons = geom3.toPolygons(geometry);
      if (polygons.length === 0) throw new Error("the given geometry cannot be empty");
      options = { delta, corners, segments };
      const expanded = expandShell(options, geometry);
      return union(geometry, expanded);
    };
    module.exports = expandGeom3;
  }
});

// node_modules/@jscad/modeling/src/operations/expansions/expandPath2.js
var require_expandPath2 = __commonJS({
  "node_modules/@jscad/modeling/src/operations/expansions/expandPath2.js"(exports, module) {
    var area = require_area();
    var vec2 = require_vec2();
    var geom2 = require_geom2();
    var path2 = require_path2();
    var offsetFromPoints = require_offsetFromPoints();
    var createGeometryFromClosedOffsets = (paths) => {
      let { external, internal } = paths;
      if (area(external) < 0) {
        external = external.reverse();
      } else {
        internal = internal.reverse();
      }
      const externalPath = path2.fromPoints({ closed: true }, external);
      const internalPath = path2.fromPoints({ closed: true }, internal);
      const externalSides = geom2.toSides(geom2.fromPoints(path2.toPoints(externalPath)));
      const internalSides = geom2.toSides(geom2.fromPoints(path2.toPoints(internalPath)));
      externalSides.push(...internalSides);
      return geom2.create(externalSides);
    };
    var createGeometryFromExpandedOpenPath = (paths, segments, corners, delta) => {
      const { points, external, internal } = paths;
      const capSegments = Math.floor(segments / 2);
      const e2iCap = [];
      const i2eCap = [];
      if (corners === "round" && capSegments > 0) {
        const step = Math.PI / capSegments;
        const eCorner = points[points.length - 1];
        const e2iStart = vec2.angle(vec2.subtract(vec2.create(), external[external.length - 1], eCorner));
        const iCorner = points[0];
        const i2eStart = vec2.angle(vec2.subtract(vec2.create(), internal[0], iCorner));
        for (let i = 1; i < capSegments; i++) {
          let radians = e2iStart + step * i;
          let point = vec2.fromAngleRadians(vec2.create(), radians);
          vec2.scale(point, point, delta);
          vec2.add(point, point, eCorner);
          e2iCap.push(point);
          radians = i2eStart + step * i;
          point = vec2.fromAngleRadians(vec2.create(), radians);
          vec2.scale(point, point, delta);
          vec2.add(point, point, iCorner);
          i2eCap.push(point);
        }
      }
      const allPoints = [];
      allPoints.push(...external, ...e2iCap, ...internal.reverse(), ...i2eCap);
      return geom2.fromPoints(allPoints);
    };
    var expandPath2 = (options, geometry) => {
      const defaults = {
        delta: 1,
        corners: "edge",
        segments: 16
      };
      options = Object.assign({}, defaults, options);
      const { delta, corners, segments } = options;
      if (delta <= 0) throw new Error("the given delta must be positive for paths");
      if (!(corners === "edge" || corners === "chamfer" || corners === "round")) {
        throw new Error('corners must be "edge", "chamfer", or "round"');
      }
      const closed = geometry.isClosed;
      const points = path2.toPoints(geometry);
      if (points.length === 0) throw new Error("the given geometry cannot be empty");
      const paths = {
        points,
        external: offsetFromPoints({ delta, corners, segments, closed }, points),
        internal: offsetFromPoints({ delta: -delta, corners, segments, closed }, points)
      };
      if (geometry.isClosed) {
        return createGeometryFromClosedOffsets(paths);
      } else {
        return createGeometryFromExpandedOpenPath(paths, segments, corners, delta);
      }
    };
    module.exports = expandPath2;
  }
});

// node_modules/@jscad/modeling/src/operations/expansions/expand.js
var require_expand = __commonJS({
  "node_modules/@jscad/modeling/src/operations/expansions/expand.js"(exports, module) {
    var flatten = require_flatten();
    var geom2 = require_geom2();
    var geom3 = require_geom3();
    var path2 = require_path2();
    var expandGeom2 = require_expandGeom2();
    var expandGeom3 = require_expandGeom3();
    var expandPath2 = require_expandPath2();
    var expand = (options, ...objects) => {
      objects = flatten(objects);
      if (objects.length === 0) throw new Error("wrong number of arguments");
      const results = objects.map((object) => {
        if (path2.isA(object)) return expandPath2(options, object);
        if (geom2.isA(object)) return expandGeom2(options, object);
        if (geom3.isA(object)) return expandGeom3(options, object);
        return object;
      });
      return results.length === 1 ? results[0] : results;
    };
    module.exports = expand;
  }
});

// node_modules/@jscad/modeling/src/operations/expansions/offsetGeom2.js
var require_offsetGeom2 = __commonJS({
  "node_modules/@jscad/modeling/src/operations/expansions/offsetGeom2.js"(exports, module) {
    var geom2 = require_geom2();
    var poly2 = require_poly2();
    var offsetFromPoints = require_offsetFromPoints();
    var offsetGeom2 = (options, geometry) => {
      const defaults = {
        delta: 1,
        corners: "edge",
        segments: 0
      };
      const { delta, corners, segments } = Object.assign({}, defaults, options);
      if (!(corners === "edge" || corners === "chamfer" || corners === "round")) {
        throw new Error('corners must be "edge", "chamfer", or "round"');
      }
      const outlines = geom2.toOutlines(geometry);
      const newoutlines = outlines.map((outline) => {
        const level = outlines.reduce((acc, polygon) => acc + poly2.arePointsInside(outline, poly2.create(polygon)), 0);
        const outside = level % 2 === 0;
        options = {
          delta: outside ? delta : -delta,
          corners,
          closed: true,
          segments
        };
        return offsetFromPoints(options, outline);
      });
      const allsides = newoutlines.reduce((sides, newoutline) => sides.concat(geom2.toSides(geom2.fromPoints(newoutline))), []);
      return geom2.create(allsides);
    };
    module.exports = offsetGeom2;
  }
});

// node_modules/@jscad/modeling/src/operations/expansions/offsetPath2.js
var require_offsetPath2 = __commonJS({
  "node_modules/@jscad/modeling/src/operations/expansions/offsetPath2.js"(exports, module) {
    var path2 = require_path2();
    var offsetFromPoints = require_offsetFromPoints();
    var offsetPath2 = (options, geometry) => {
      const defaults = {
        delta: 1,
        corners: "edge",
        closed: geometry.isClosed,
        segments: 16
      };
      const { delta, corners, closed, segments } = Object.assign({}, defaults, options);
      if (!(corners === "edge" || corners === "chamfer" || corners === "round")) {
        throw new Error('corners must be "edge", "chamfer", or "round"');
      }
      options = { delta, corners, closed, segments };
      const newpoints = offsetFromPoints(options, path2.toPoints(geometry));
      return path2.fromPoints({ closed }, newpoints);
    };
    module.exports = offsetPath2;
  }
});

// node_modules/@jscad/modeling/src/operations/expansions/offset.js
var require_offset = __commonJS({
  "node_modules/@jscad/modeling/src/operations/expansions/offset.js"(exports, module) {
    var flatten = require_flatten();
    var geom2 = require_geom2();
    var path2 = require_path2();
    var offsetGeom2 = require_offsetGeom2();
    var offsetPath2 = require_offsetPath2();
    var offset = (options, ...objects) => {
      objects = flatten(objects);
      if (objects.length === 0) throw new Error("wrong number of arguments");
      const results = objects.map((object) => {
        if (path2.isA(object)) return offsetPath2(options, object);
        if (geom2.isA(object)) return offsetGeom2(options, object);
        return object;
      });
      return results.length === 1 ? results[0] : results;
    };
    module.exports = offset;
  }
});

// node_modules/@jscad/modeling/src/operations/expansions/index.js
var require_expansions = __commonJS({
  "node_modules/@jscad/modeling/src/operations/expansions/index.js"(exports, module) {
    module.exports = {
      expand: require_expand(),
      offset: require_offset()
    };
  }
});

// node_modules/@jscad/modeling/src/operations/extrusions/extrudeLinearGeom2.js
var require_extrudeLinearGeom2 = __commonJS({
  "node_modules/@jscad/modeling/src/operations/extrusions/extrudeLinearGeom2.js"(exports, module) {
    var mat4 = require_mat4();
    var vec3 = require_vec3();
    var geom2 = require_geom2();
    var slice2 = require_slice();
    var extrudeFromSlices = require_extrudeFromSlices();
    var extrudeGeom2 = (options, geometry) => {
      const defaults = {
        offset: [0, 0, 1],
        twistAngle: 0,
        twistSteps: 12,
        repair: true
      };
      let { offset, twistAngle, twistSteps, repair } = Object.assign({}, defaults, options);
      if (twistSteps < 1) throw new Error("twistSteps must be 1 or more");
      if (twistAngle === 0) {
        twistSteps = 1;
      }
      const offsetv = vec3.clone(offset);
      const baseSides = geom2.toSides(geometry);
      if (baseSides.length === 0) throw new Error("the given geometry cannot be empty");
      const baseSlice = slice2.fromSides(baseSides);
      if (offsetv[2] < 0) slice2.reverse(baseSlice, baseSlice);
      const matrix = mat4.create();
      const createTwist = (progress, index, base) => {
        const Zrotation = index / twistSteps * twistAngle;
        const Zoffset = vec3.scale(vec3.create(), offsetv, index / twistSteps);
        mat4.multiply(matrix, mat4.fromZRotation(matrix, Zrotation), mat4.fromTranslation(mat4.create(), Zoffset));
        return slice2.transform(matrix, base);
      };
      options = {
        numberOfSlices: twistSteps + 1,
        capStart: true,
        capEnd: true,
        repair,
        callback: createTwist
      };
      return extrudeFromSlices(options, baseSlice);
    };
    module.exports = extrudeGeom2;
  }
});

// node_modules/@jscad/modeling/src/operations/extrusions/extrudeLinearPath2.js
var require_extrudeLinearPath2 = __commonJS({
  "node_modules/@jscad/modeling/src/operations/extrusions/extrudeLinearPath2.js"(exports, module) {
    var geom2 = require_geom2();
    var path2 = require_path2();
    var extrudeLinearGeom2 = require_extrudeLinearGeom2();
    var extrudePath2 = (options, geometry) => {
      if (!geometry.isClosed) throw new Error("extruded path must be closed");
      const points = path2.toPoints(geometry);
      const geometry2 = geom2.fromPoints(points);
      return extrudeLinearGeom2(options, geometry2);
    };
    module.exports = extrudePath2;
  }
});

// node_modules/@jscad/modeling/src/operations/extrusions/extrudeLinear.js
var require_extrudeLinear = __commonJS({
  "node_modules/@jscad/modeling/src/operations/extrusions/extrudeLinear.js"(exports, module) {
    var flatten = require_flatten();
    var geom2 = require_geom2();
    var path2 = require_path2();
    var extrudeLinearGeom2 = require_extrudeLinearGeom2();
    var extrudeLinearPath2 = require_extrudeLinearPath2();
    var extrudeLinear = (options, ...objects) => {
      const defaults = {
        height: 1,
        twistAngle: 0,
        twistSteps: 1,
        repair: true
      };
      const { height, twistAngle, twistSteps, repair } = Object.assign({}, defaults, options);
      objects = flatten(objects);
      if (objects.length === 0) throw new Error("wrong number of arguments");
      options = { offset: [0, 0, height], twistAngle, twistSteps, repair };
      const results = objects.map((object) => {
        if (path2.isA(object)) return extrudeLinearPath2(options, object);
        if (geom2.isA(object)) return extrudeLinearGeom2(options, object);
        return object;
      });
      return results.length === 1 ? results[0] : results;
    };
    module.exports = extrudeLinear;
  }
});

// node_modules/@jscad/modeling/src/operations/extrusions/extrudeRectangularPath2.js
var require_extrudeRectangularPath2 = __commonJS({
  "node_modules/@jscad/modeling/src/operations/extrusions/extrudeRectangularPath2.js"(exports, module) {
    var path2 = require_path2();
    var expand = require_expand();
    var extrudeLinearGeom2 = require_extrudeLinearGeom2();
    var extrudeRectangularPath2 = (options, geometry) => {
      const defaults = {
        size: 1,
        height: 1
      };
      const { size: size2, height } = Object.assign({}, defaults, options);
      options.delta = size2;
      options.offset = [0, 0, height];
      const points = path2.toPoints(geometry);
      if (points.length === 0) throw new Error("the given geometry cannot be empty");
      const newgeometry = expand(options, geometry);
      return extrudeLinearGeom2(options, newgeometry);
    };
    module.exports = extrudeRectangularPath2;
  }
});

// node_modules/@jscad/modeling/src/operations/extrusions/extrudeRectangularGeom2.js
var require_extrudeRectangularGeom2 = __commonJS({
  "node_modules/@jscad/modeling/src/operations/extrusions/extrudeRectangularGeom2.js"(exports, module) {
    var { area } = require_utils();
    var geom2 = require_geom2();
    var path2 = require_path2();
    var expand = require_expand();
    var extrudeLinearGeom2 = require_extrudeLinearGeom2();
    var extrudeRectangularGeom2 = (options, geometry) => {
      const defaults = {
        size: 1,
        height: 1
      };
      const { size: size2, height } = Object.assign({}, defaults, options);
      options.delta = size2;
      options.offset = [0, 0, height];
      const outlines = geom2.toOutlines(geometry);
      if (outlines.length === 0) throw new Error("the given geometry cannot be empty");
      const newparts = outlines.map((outline) => {
        if (area(outline) < 0) outline.reverse();
        return expand(options, path2.fromPoints({ closed: true }, outline));
      });
      const allsides = newparts.reduce((sides, part) => sides.concat(geom2.toSides(part)), []);
      const newgeometry = geom2.create(allsides);
      return extrudeLinearGeom2(options, newgeometry);
    };
    module.exports = extrudeRectangularGeom2;
  }
});

// node_modules/@jscad/modeling/src/operations/extrusions/extrudeRectangular.js
var require_extrudeRectangular = __commonJS({
  "node_modules/@jscad/modeling/src/operations/extrusions/extrudeRectangular.js"(exports, module) {
    var flatten = require_flatten();
    var geom2 = require_geom2();
    var path2 = require_path2();
    var extrudeRectangularPath2 = require_extrudeRectangularPath2();
    var extrudeRectangularGeom2 = require_extrudeRectangularGeom2();
    var extrudeRectangular = (options, ...objects) => {
      const defaults = {
        size: 1,
        height: 1
      };
      const { size: size2, height } = Object.assign({}, defaults, options);
      objects = flatten(objects);
      if (objects.length === 0) throw new Error("wrong number of arguments");
      if (size2 <= 0) throw new Error("size must be positive");
      if (height <= 0) throw new Error("height must be positive");
      const results = objects.map((object) => {
        if (path2.isA(object)) return extrudeRectangularPath2(options, object);
        if (geom2.isA(object)) return extrudeRectangularGeom2(options, object);
        return object;
      });
      return results.length === 1 ? results[0] : results;
    };
    module.exports = extrudeRectangular;
  }
});

// node_modules/@jscad/modeling/src/operations/extrusions/extrudeHelical.js
var require_extrudeHelical = __commonJS({
  "node_modules/@jscad/modeling/src/operations/extrusions/extrudeHelical.js"(exports, module) {
    var { TAU } = require_constants();
    var mat4 = require_mat4();
    var geom2 = require_geom2();
    var extrudeFromSlices = require_extrudeFromSlices();
    var slice2 = require_slice();
    var extrudeHelical = (options, geometry) => {
      const defaults = {
        angle: TAU,
        startAngle: 0,
        pitch: 10,
        height: 0,
        endOffset: 0,
        segmentsPerRotation: 32
      };
      let { angle, startAngle, pitch, height, endOffset, segmentsPerRotation } = Object.assign({}, defaults, options);
      if (height != 0) {
        pitch = height / (angle / TAU);
      }
      const minNumberOfSegments = 3;
      if (segmentsPerRotation < minNumberOfSegments) {
        throw new Error("The number of segments per rotation needs to be at least 3.");
      }
      const shapeSides = geom2.toSides(geometry);
      if (shapeSides.length === 0) throw new Error("The given geometry cannot be empty");
      const pointsWithPositiveX = shapeSides.filter((s) => s[0][0] >= 0);
      let baseSlice = slice2.fromSides(shapeSides);
      if (pointsWithPositiveX.length === 0) {
        baseSlice = slice2.reverse(baseSlice);
      }
      const calculatedSegments = Math.round(segmentsPerRotation / TAU * Math.abs(angle));
      const segments = calculatedSegments >= 2 ? calculatedSegments : 2;
      const step1 = mat4.create();
      const step2 = mat4.create();
      const sliceCallback = (progress, index, base) => {
        const zRotation = startAngle + angle / segments * index;
        const xOffset = endOffset / segments * index;
        const zOffset = (zRotation - startAngle) / TAU * pitch;
        mat4.multiply(
          step1,
          // then apply offsets
          mat4.fromTranslation(mat4.create(), [xOffset, 0, zOffset * Math.sign(angle)]),
          // first rotate "flat" 2D shape from XY to XZ plane
          mat4.fromXRotation(mat4.create(), -TAU / 4 * Math.sign(angle))
          // rotate the slice correctly to not create inside-out polygon
        );
        mat4.multiply(
          step2,
          // finally rotate around Z axis
          mat4.fromZRotation(mat4.create(), zRotation),
          step1
        );
        return slice2.transform(step2, base);
      };
      return extrudeFromSlices(
        {
          // "base" slice is counted as segment, so add one for complete final rotation
          numberOfSlices: segments + 1,
          callback: sliceCallback
        },
        baseSlice
      );
    };
    module.exports = extrudeHelical;
  }
});

// node_modules/@jscad/modeling/src/operations/extrusions/project.js
var require_project = __commonJS({
  "node_modules/@jscad/modeling/src/operations/extrusions/project.js"(exports, module) {
    var flatten = require_flatten();
    var aboutEqualNormals = require_aboutEqualNormals();
    var plane = require_plane();
    var mat4 = require_mat4();
    var geom2 = require_geom2();
    var geom3 = require_geom3();
    var poly3 = require_poly3();
    var measureEpsilon = require_measureEpsilon();
    var unionGeom2 = require_unionGeom2();
    var projectGeom3 = (options, geometry) => {
      const projplane = plane.fromNormalAndPoint(plane.create(), options.axis, options.origin);
      if (Number.isNaN(projplane[0]) || Number.isNaN(projplane[1]) || Number.isNaN(projplane[2]) || Number.isNaN(projplane[3])) {
        throw new Error("project: invalid axis or origin");
      }
      const epsilon = measureEpsilon(geometry);
      const epsilonArea = epsilon * epsilon * Math.sqrt(3) / 4;
      if (epsilon === 0) return geom2.create();
      const polygons = geom3.toPolygons(geometry);
      let projpolys = [];
      for (let i = 0; i < polygons.length; i++) {
        const newpoints = polygons[i].vertices.map((v) => plane.projectionOfPoint(projplane, v));
        const newpoly = poly3.create(newpoints);
        const newplane = poly3.plane(newpoly);
        if (!aboutEqualNormals(projplane, newplane)) continue;
        if (poly3.measureArea(newpoly) < epsilonArea) continue;
        projpolys.push(newpoly);
      }
      if (!aboutEqualNormals(projplane, [0, 0, 1])) {
        const rotation = mat4.fromVectorRotation(mat4.create(), projplane, [0, 0, 1]);
        projpolys = projpolys.map((p) => poly3.transform(rotation, p));
      }
      projpolys = projpolys.sort((a, b) => poly3.measureArea(b) - poly3.measureArea(a));
      const projgeoms = projpolys.map((p) => geom2.fromPoints(p.vertices));
      return unionGeom2(projgeoms);
    };
    var project = (options, ...objects) => {
      const defaults = {
        axis: [0, 0, 1],
        // Z axis
        origin: [0, 0, 0]
      };
      const { axis, origin } = Object.assign({}, defaults, options);
      objects = flatten(objects);
      if (objects.length === 0) throw new Error("wrong number of arguments");
      options = { axis, origin };
      const results = objects.map((object) => {
        if (geom3.isA(object)) return projectGeom3(options, object);
        return object;
      });
      return results.length === 1 ? results[0] : results;
    };
    module.exports = project;
  }
});

// node_modules/@jscad/modeling/src/operations/extrusions/index.js
var require_extrusions = __commonJS({
  "node_modules/@jscad/modeling/src/operations/extrusions/index.js"(exports, module) {
    module.exports = {
      extrudeFromSlices: require_extrudeFromSlices(),
      extrudeLinear: require_extrudeLinear(),
      extrudeRectangular: require_extrudeRectangular(),
      extrudeRotate: require_extrudeRotate(),
      extrudeHelical: require_extrudeHelical(),
      project: require_project(),
      slice: require_slice()
    };
  }
});

// node_modules/@jscad/modeling/src/operations/hulls/hullPoints2.js
var require_hullPoints2 = __commonJS({
  "node_modules/@jscad/modeling/src/operations/hulls/hullPoints2.js"(exports, module) {
    var vec2 = require_vec2();
    var hullPoints2 = (uniquePoints) => {
      let min = vec2.fromValues(Infinity, Infinity);
      uniquePoints.forEach((point) => {
        if (point[1] < min[1] || point[1] === min[1] && point[0] < min[0]) {
          min = point;
        }
      });
      const points = [];
      uniquePoints.forEach((point) => {
        const angle = fakeAtan2(point[1] - min[1], point[0] - min[0]);
        const distSq = vec2.squaredDistance(point, min);
        points.push({ point, angle, distSq });
      });
      points.sort((pt1, pt2) => pt1.angle !== pt2.angle ? pt1.angle - pt2.angle : pt1.distSq - pt2.distSq);
      const stack = [];
      points.forEach((point) => {
        let cnt = stack.length;
        while (cnt > 1 && ccw(stack[cnt - 2], stack[cnt - 1], point.point) <= Number.EPSILON) {
          stack.pop();
          cnt = stack.length;
        }
        stack.push(point.point);
      });
      return stack;
    };
    var ccw = (v1, v2, v3) => (v2[0] - v1[0]) * (v3[1] - v1[1]) - (v2[1] - v1[1]) * (v3[0] - v1[0]);
    var fakeAtan2 = (y, x) => {
      if (y === 0 && x === 0) {
        return -Infinity;
      } else {
        return -x / y;
      }
    };
    module.exports = hullPoints2;
  }
});

// node_modules/@jscad/modeling/src/operations/hulls/toUniquePoints.js
var require_toUniquePoints = __commonJS({
  "node_modules/@jscad/modeling/src/operations/hulls/toUniquePoints.js"(exports, module) {
    var geom2 = require_geom2();
    var geom3 = require_geom3();
    var path2 = require_path2();
    var toUniquePoints = (geometries2) => {
      const found = /* @__PURE__ */ new Set();
      const uniquePoints = [];
      const addPoint = (point) => {
        const key = point.toString();
        if (!found.has(key)) {
          uniquePoints.push(point);
          found.add(key);
        }
      };
      geometries2.forEach((geometry) => {
        if (geom2.isA(geometry)) {
          geom2.toPoints(geometry).forEach(addPoint);
        } else if (geom3.isA(geometry)) {
          geom3.toPoints(geometry).forEach((points) => points.forEach(addPoint));
        } else if (path2.isA(geometry)) {
          path2.toPoints(geometry).forEach(addPoint);
        }
      });
      return uniquePoints;
    };
    module.exports = toUniquePoints;
  }
});

// node_modules/@jscad/modeling/src/operations/hulls/hullPath2.js
var require_hullPath2 = __commonJS({
  "node_modules/@jscad/modeling/src/operations/hulls/hullPath2.js"(exports, module) {
    var flatten = require_flatten();
    var path2 = require_path2();
    var hullPoints2 = require_hullPoints2();
    var toUniquePoints = require_toUniquePoints();
    var hullPath2 = (...geometries2) => {
      geometries2 = flatten(geometries2);
      const unique = toUniquePoints(geometries2);
      const hullPoints = hullPoints2(unique);
      return path2.fromPoints({ closed: true }, hullPoints);
    };
    module.exports = hullPath2;
  }
});

// node_modules/@jscad/modeling/src/operations/hulls/hullGeom2.js
var require_hullGeom2 = __commonJS({
  "node_modules/@jscad/modeling/src/operations/hulls/hullGeom2.js"(exports, module) {
    var flatten = require_flatten();
    var geom2 = require_geom2();
    var hullPoints2 = require_hullPoints2();
    var toUniquePoints = require_toUniquePoints();
    var hullGeom2 = (...geometries2) => {
      geometries2 = flatten(geometries2);
      const unique = toUniquePoints(geometries2);
      const hullPoints = hullPoints2(unique);
      if (hullPoints.length < 3) return geom2.create();
      return geom2.fromPoints(hullPoints);
    };
    module.exports = hullGeom2;
  }
});

// node_modules/@jscad/modeling/src/operations/hulls/hullGeom3.js
var require_hullGeom3 = __commonJS({
  "node_modules/@jscad/modeling/src/operations/hulls/hullGeom3.js"(exports, module) {
    var flatten = require_flatten();
    var geom3 = require_geom3();
    var toUniquePoints = require_toUniquePoints();
    var hullPoints3 = require_hullPoints3();
    var hullGeom3 = (...geometries2) => {
      geometries2 = flatten(geometries2);
      const unique = toUniquePoints(geometries2);
      if (unique.length === 0) return geom3.create();
      return geom3.create(hullPoints3(unique));
    };
    module.exports = hullGeom3;
  }
});

// node_modules/@jscad/modeling/src/operations/hulls/hull.js
var require_hull = __commonJS({
  "node_modules/@jscad/modeling/src/operations/hulls/hull.js"(exports, module) {
    var flatten = require_flatten();
    var areAllShapesTheSameType = require_areAllShapesTheSameType();
    var geom2 = require_geom2();
    var geom3 = require_geom3();
    var path2 = require_path2();
    var hullPath2 = require_hullPath2();
    var hullGeom2 = require_hullGeom2();
    var hullGeom3 = require_hullGeom3();
    var hull = (...geometries2) => {
      geometries2 = flatten(geometries2);
      if (geometries2.length === 0) throw new Error("wrong number of arguments");
      if (!areAllShapesTheSameType(geometries2)) {
        throw new Error("only hulls of the same type are supported");
      }
      const geometry = geometries2[0];
      if (path2.isA(geometry)) return hullPath2(geometries2);
      if (geom2.isA(geometry)) return hullGeom2(geometries2);
      if (geom3.isA(geometry)) return hullGeom3(geometries2);
      return geometry;
    };
    module.exports = hull;
  }
});

// node_modules/@jscad/modeling/src/operations/hulls/hullChain.js
var require_hullChain = __commonJS({
  "node_modules/@jscad/modeling/src/operations/hulls/hullChain.js"(exports, module) {
    var flatten = require_flatten();
    var union = require_union();
    var hull = require_hull();
    var hullChain = (...geometries2) => {
      geometries2 = flatten(geometries2);
      if (geometries2.length < 2) throw new Error("wrong number of arguments");
      const hulls = [];
      for (let i = 1; i < geometries2.length; i++) {
        hulls.push(hull(geometries2[i - 1], geometries2[i]));
      }
      return union(hulls);
    };
    module.exports = hullChain;
  }
});

// node_modules/@jscad/modeling/src/operations/hulls/index.js
var require_hulls = __commonJS({
  "node_modules/@jscad/modeling/src/operations/hulls/index.js"(exports, module) {
    module.exports = {
      hull: require_hull(),
      hullChain: require_hullChain(),
      hullPoints2: require_hullPoints2(),
      hullPoints3: require_hullPoints3()
    };
  }
});

// node_modules/@jscad/modeling/src/operations/minkowski/index.js
var require_minkowski = __commonJS({
  "node_modules/@jscad/modeling/src/operations/minkowski/index.js"(exports, module) {
    module.exports = {
      minkowskiSum: require_minkowskiSum()
    };
  }
});

// node_modules/@jscad/modeling/src/operations/modifiers/snapPolygons.js
var require_snapPolygons = __commonJS({
  "node_modules/@jscad/modeling/src/operations/modifiers/snapPolygons.js"(exports, module) {
    var vec3 = require_vec3();
    var poly3 = require_poly3();
    var isValidPoly3 = (epsilon, polygon) => {
      const area = Math.abs(poly3.measureArea(polygon));
      return Number.isFinite(area) && area > epsilon;
    };
    var snapPolygons = (epsilon, polygons) => {
      let newpolygons = polygons.map((polygon) => {
        const snapvertices = polygon.vertices.map((vertice) => vec3.snap(vec3.create(), vertice, epsilon));
        const newvertices = [];
        for (let i = 0; i < snapvertices.length; i++) {
          const j = (i + 1) % snapvertices.length;
          if (!vec3.equals(snapvertices[i], snapvertices[j])) newvertices.push(snapvertices[i]);
        }
        const newpolygon = poly3.create(newvertices);
        if (polygon.color) newpolygon.color = polygon.color;
        return newpolygon;
      });
      const epsilonArea = epsilon * epsilon * Math.sqrt(3) / 4;
      newpolygons = newpolygons.filter((polygon) => isValidPoly3(epsilonArea, polygon));
      return newpolygons;
    };
    module.exports = snapPolygons;
  }
});

// node_modules/@jscad/modeling/src/operations/modifiers/mergePolygons.js
var require_mergePolygons = __commonJS({
  "node_modules/@jscad/modeling/src/operations/modifiers/mergePolygons.js"(exports, module) {
    var aboutEqualNormals = require_aboutEqualNormals();
    var vec3 = require_vec3();
    var poly3 = require_poly3();
    var createEdges = (polygon) => {
      const points = poly3.toPoints(polygon);
      const edges = [];
      for (let i = 0; i < points.length; i++) {
        const j = (i + 1) % points.length;
        const edge = {
          v1: points[i],
          v2: points[j]
        };
        edges.push(edge);
      }
      for (let i = 0; i < edges.length; i++) {
        const j = (i + 1) % points.length;
        edges[i].next = edges[j];
        edges[j].prev = edges[i];
      }
      return edges;
    };
    var insertEdge = (edges, edge) => {
      const key = `${edge.v1}:${edge.v2}`;
      edges.set(key, edge);
    };
    var deleteEdge = (edges, edge) => {
      const key = `${edge.v1}:${edge.v2}`;
      edges.delete(key);
    };
    var findOppositeEdge = (edges, edge) => {
      const key = `${edge.v2}:${edge.v1}`;
      return edges.get(key);
    };
    var calculateAnglesBetween = (current, opposite, normal) => {
      let v0 = current.prev.v1;
      let v12 = current.prev.v2;
      let v22 = opposite.next.v2;
      const angle1 = calculateAngle(v0, v12, v22, normal);
      v0 = opposite.prev.v1;
      v12 = opposite.prev.v2;
      v22 = current.next.v2;
      const angle2 = calculateAngle(v0, v12, v22, normal);
      return [angle1, angle2];
    };
    var v1 = vec3.create();
    var v2 = vec3.create();
    var calculateAngle = (prevpoint, point, nextpoint, normal) => {
      const d0 = vec3.subtract(v1, point, prevpoint);
      const d1 = vec3.subtract(v2, nextpoint, point);
      vec3.cross(d0, d0, d1);
      return vec3.dot(d0, normal);
    };
    var createPolygonAnd = (edge) => {
      let polygon;
      const points = [];
      while (edge.next) {
        const next = edge.next;
        points.push(edge.v1);
        edge.v1 = null;
        edge.v2 = null;
        edge.next = null;
        edge.prev = null;
        edge = next;
      }
      if (points.length > 0) polygon = poly3.create(points);
      return polygon;
    };
    var mergeCoplanarPolygons = (sourcepolygons) => {
      if (sourcepolygons.length < 2) return sourcepolygons;
      const normal = sourcepolygons[0].plane;
      const polygons = sourcepolygons.slice();
      const edgeList = /* @__PURE__ */ new Map();
      while (polygons.length > 0) {
        const polygon = polygons.shift();
        const edges = createEdges(polygon);
        for (let i = 0; i < edges.length; i++) {
          const current = edges[i];
          const opposite = findOppositeEdge(edgeList, current);
          if (opposite) {
            const angles = calculateAnglesBetween(current, opposite, normal);
            if (angles[0] >= 0 && angles[1] >= 0) {
              const edge1 = opposite.next;
              const edge2 = current.next;
              current.prev.next = opposite.next;
              current.next.prev = opposite.prev;
              opposite.prev.next = current.next;
              opposite.next.prev = current.prev;
              current.v1 = null;
              current.v2 = null;
              current.next = null;
              current.prev = null;
              deleteEdge(edgeList, opposite);
              opposite.v1 = null;
              opposite.v2 = null;
              opposite.next = null;
              opposite.prev = null;
              const mergeEdges = (list, e1, e2) => {
                const newedge = {
                  v1: e2.v1,
                  v2: e1.v2,
                  next: e1.next,
                  prev: e2.prev
                };
                e2.prev.next = newedge;
                e1.next.prev = newedge;
                deleteEdge(list, e1);
                e1.v1 = null;
                e1.v2 = null;
                e1.next = null;
                e1.prev = null;
                deleteEdge(list, e2);
                e2.v1 = null;
                e2.v2 = null;
                e2.next = null;
                e2.prev = null;
              };
              if (angles[0] === 0) {
                mergeEdges(edgeList, edge1, edge1.prev);
              }
              if (angles[1] === 0) {
                mergeEdges(edgeList, edge2, edge2.prev);
              }
            }
          } else {
            if (current.next) insertEdge(edgeList, current);
          }
        }
      }
      const destpolygons = [];
      edgeList.forEach((edge) => {
        const polygon = createPolygonAnd(edge);
        if (polygon) destpolygons.push(polygon);
      });
      edgeList.clear();
      return destpolygons;
    };
    var coplanar = (plane1, plane2) => {
      if (Math.abs(plane1[3] - plane2[3]) < 15e-8) {
        return aboutEqualNormals(plane1, plane2);
      }
      return false;
    };
    var mergePolygons = (epsilon, polygons) => {
      const polygonsPerPlane = [];
      polygons.forEach((polygon) => {
        const mapping = polygonsPerPlane.find((element) => coplanar(element[0], poly3.plane(polygon)));
        if (mapping) {
          const polygons2 = mapping[1];
          polygons2.push(polygon);
        } else {
          polygonsPerPlane.push([poly3.plane(polygon), [polygon]]);
        }
      });
      let destpolygons = [];
      polygonsPerPlane.forEach((mapping) => {
        const sourcepolygons = mapping[1];
        const retesselayedpolygons = mergeCoplanarPolygons(sourcepolygons);
        destpolygons = destpolygons.concat(retesselayedpolygons);
      });
      return destpolygons;
    };
    module.exports = mergePolygons;
  }
});

// node_modules/@jscad/modeling/src/operations/modifiers/insertTjunctions.js
var require_insertTjunctions = __commonJS({
  "node_modules/@jscad/modeling/src/operations/modifiers/insertTjunctions.js"(exports, module) {
    var constants = require_constants();
    var vec3 = require_vec3();
    var poly3 = require_poly3();
    var assert = false;
    var getTag = (vertex) => `${vertex}`;
    var addSide = (sidemap, vertextag2sidestart, vertextag2sideend, vertex0, vertex1, polygonindex) => {
      const starttag = getTag(vertex0);
      const endtag = getTag(vertex1);
      if (assert && starttag === endtag) throw new Error("assert failed");
      const newsidetag = `${starttag}/${endtag}`;
      const reversesidetag = `${endtag}/${starttag}`;
      if (sidemap.has(reversesidetag)) {
        deleteSide(sidemap, vertextag2sidestart, vertextag2sideend, vertex1, vertex0, null);
        return null;
      }
      const newsideobj = {
        vertex0,
        vertex1,
        polygonindex
      };
      if (!sidemap.has(newsidetag)) {
        sidemap.set(newsidetag, [newsideobj]);
      } else {
        sidemap.get(newsidetag).push(newsideobj);
      }
      if (vertextag2sidestart.has(starttag)) {
        vertextag2sidestart.get(starttag).push(newsidetag);
      } else {
        vertextag2sidestart.set(starttag, [newsidetag]);
      }
      if (vertextag2sideend.has(endtag)) {
        vertextag2sideend.get(endtag).push(newsidetag);
      } else {
        vertextag2sideend.set(endtag, [newsidetag]);
      }
      return newsidetag;
    };
    var deleteSide = (sidemap, vertextag2sidestart, vertextag2sideend, vertex0, vertex1, polygonindex) => {
      const starttag = getTag(vertex0);
      const endtag = getTag(vertex1);
      const sidetag = `${starttag}/${endtag}`;
      if (assert && !sidemap.has(sidetag)) throw new Error("assert failed");
      let idx = -1;
      const sideobjs = sidemap.get(sidetag);
      for (let i = 0; i < sideobjs.length; i++) {
        const sideobj = sideobjs[i];
        let sidetag2 = getTag(sideobj.vertex0);
        if (sidetag2 !== starttag) continue;
        sidetag2 = getTag(sideobj.vertex1);
        if (sidetag2 !== endtag) continue;
        if (polygonindex !== null) {
          if (sideobj.polygonindex !== polygonindex) continue;
        }
        idx = i;
        break;
      }
      if (assert && idx < 0) throw new Error("assert failed");
      sideobjs.splice(idx, 1);
      if (sideobjs.length === 0) {
        sidemap.delete(sidetag);
      }
      idx = vertextag2sidestart.get(starttag).indexOf(sidetag);
      if (assert && idx < 0) throw new Error("assert failed");
      vertextag2sidestart.get(starttag).splice(idx, 1);
      if (vertextag2sidestart.get(starttag).length === 0) {
        vertextag2sidestart.delete(starttag);
      }
      idx = vertextag2sideend.get(endtag).indexOf(sidetag);
      if (assert && idx < 0) throw new Error("assert failed");
      vertextag2sideend.get(endtag).splice(idx, 1);
      if (vertextag2sideend.get(endtag).length === 0) {
        vertextag2sideend.delete(endtag);
      }
    };
    var insertTjunctions = (polygons) => {
      const sidemap = /* @__PURE__ */ new Map();
      for (let polygonindex = 0; polygonindex < polygons.length; polygonindex++) {
        const polygon = polygons[polygonindex];
        const numvertices = polygon.vertices.length;
        if (numvertices >= 3) {
          let vertex = polygon.vertices[0];
          let vertextag = getTag(vertex);
          for (let vertexindex = 0; vertexindex < numvertices; vertexindex++) {
            let nextvertexindex = vertexindex + 1;
            if (nextvertexindex === numvertices) nextvertexindex = 0;
            const nextvertex = polygon.vertices[nextvertexindex];
            const nextvertextag = getTag(nextvertex);
            const sidetag = `${vertextag}/${nextvertextag}`;
            const reversesidetag = `${nextvertextag}/${vertextag}`;
            if (sidemap.has(reversesidetag)) {
              const ar = sidemap.get(reversesidetag);
              ar.splice(-1, 1);
              if (ar.length === 0) {
                sidemap.delete(reversesidetag);
              }
            } else {
              const sideobj = {
                vertex0: vertex,
                vertex1: nextvertex,
                polygonindex
              };
              if (!sidemap.has(sidetag)) {
                sidemap.set(sidetag, [sideobj]);
              } else {
                sidemap.get(sidetag).push(sideobj);
              }
            }
            vertex = nextvertex;
            vertextag = nextvertextag;
          }
        } else {
          console.warn("warning: invalid polygon found during insertTjunctions");
        }
      }
      if (sidemap.size > 0) {
        const vertextag2sidestart = /* @__PURE__ */ new Map();
        const vertextag2sideend = /* @__PURE__ */ new Map();
        const sidesToCheck = /* @__PURE__ */ new Map();
        for (const [sidetag, sideobjs] of sidemap) {
          sidesToCheck.set(sidetag, true);
          sideobjs.forEach((sideobj) => {
            const starttag = getTag(sideobj.vertex0);
            const endtag = getTag(sideobj.vertex1);
            if (vertextag2sidestart.has(starttag)) {
              vertextag2sidestart.get(starttag).push(sidetag);
            } else {
              vertextag2sidestart.set(starttag, [sidetag]);
            }
            if (vertextag2sideend.has(endtag)) {
              vertextag2sideend.get(endtag).push(sidetag);
            } else {
              vertextag2sideend.set(endtag, [sidetag]);
            }
          });
        }
        const newpolygons = polygons.slice(0);
        while (true) {
          if (sidemap.size === 0) break;
          for (const sidetag of sidemap.keys()) {
            sidesToCheck.set(sidetag, true);
          }
          let donesomething = false;
          while (true) {
            const sidetags = Array.from(sidesToCheck.keys());
            if (sidetags.length === 0) break;
            const sidetagtocheck = sidetags[0];
            let donewithside = true;
            if (sidemap.has(sidetagtocheck)) {
              const sideobjs = sidemap.get(sidetagtocheck);
              if (assert && sideobjs.length === 0) throw new Error("assert failed");
              const sideobj = sideobjs[0];
              for (let directionindex = 0; directionindex < 2; directionindex++) {
                const startvertex = directionindex === 0 ? sideobj.vertex0 : sideobj.vertex1;
                const endvertex = directionindex === 0 ? sideobj.vertex1 : sideobj.vertex0;
                const startvertextag = getTag(startvertex);
                const endvertextag = getTag(endvertex);
                let matchingsides = [];
                if (directionindex === 0) {
                  if (vertextag2sideend.has(startvertextag)) {
                    matchingsides = vertextag2sideend.get(startvertextag);
                  }
                } else {
                  if (vertextag2sidestart.has(startvertextag)) {
                    matchingsides = vertextag2sidestart.get(startvertextag);
                  }
                }
                for (let matchingsideindex = 0; matchingsideindex < matchingsides.length; matchingsideindex++) {
                  const matchingsidetag = matchingsides[matchingsideindex];
                  const matchingside = sidemap.get(matchingsidetag)[0];
                  const matchingsidestartvertex = directionindex === 0 ? matchingside.vertex0 : matchingside.vertex1;
                  const matchingsideendvertex = directionindex === 0 ? matchingside.vertex1 : matchingside.vertex0;
                  const matchingsidestartvertextag = getTag(matchingsidestartvertex);
                  const matchingsideendvertextag = getTag(matchingsideendvertex);
                  if (assert && matchingsideendvertextag !== startvertextag) throw new Error("assert failed");
                  if (matchingsidestartvertextag === endvertextag) {
                    deleteSide(sidemap, vertextag2sidestart, vertextag2sideend, startvertex, endvertex, null);
                    deleteSide(sidemap, vertextag2sidestart, vertextag2sideend, endvertex, startvertex, null);
                    donewithside = false;
                    directionindex = 2;
                    donesomething = true;
                    break;
                  } else {
                    const startpos = startvertex;
                    const endpos = endvertex;
                    const checkpos = matchingsidestartvertex;
                    const direction = vec3.subtract(vec3.create(), checkpos, startpos);
                    const t = vec3.dot(vec3.subtract(vec3.create(), endpos, startpos), direction) / vec3.dot(direction, direction);
                    if (t > 0 && t < 1) {
                      const closestpoint = vec3.scale(vec3.create(), direction, t);
                      vec3.add(closestpoint, closestpoint, startpos);
                      const distancesquared = vec3.squaredDistance(closestpoint, endpos);
                      if (distancesquared < constants.EPS * constants.EPS) {
                        const polygonindex = matchingside.polygonindex;
                        const polygon = newpolygons[polygonindex];
                        const insertionvertextag = getTag(matchingside.vertex1);
                        let insertionvertextagindex = -1;
                        for (let i = 0; i < polygon.vertices.length; i++) {
                          if (getTag(polygon.vertices[i]) === insertionvertextag) {
                            insertionvertextagindex = i;
                            break;
                          }
                        }
                        if (assert && insertionvertextagindex < 0) throw new Error("assert failed");
                        const newvertices = polygon.vertices.slice(0);
                        newvertices.splice(insertionvertextagindex, 0, endvertex);
                        const newpolygon = poly3.create(newvertices);
                        newpolygons[polygonindex] = newpolygon;
                        deleteSide(sidemap, vertextag2sidestart, vertextag2sideend, matchingside.vertex0, matchingside.vertex1, polygonindex);
                        const newsidetag1 = addSide(sidemap, vertextag2sidestart, vertextag2sideend, matchingside.vertex0, endvertex, polygonindex);
                        const newsidetag2 = addSide(sidemap, vertextag2sidestart, vertextag2sideend, endvertex, matchingside.vertex1, polygonindex);
                        if (newsidetag1 !== null) sidesToCheck.set(newsidetag1, true);
                        if (newsidetag2 !== null) sidesToCheck.set(newsidetag2, true);
                        donewithside = false;
                        directionindex = 2;
                        donesomething = true;
                        break;
                      }
                    }
                  }
                }
              }
            }
            if (donewithside) {
              sidesToCheck.delete(sidetagtocheck);
            }
          }
          if (!donesomething) break;
        }
        polygons = newpolygons;
      }
      sidemap.clear();
      return polygons;
    };
    module.exports = insertTjunctions;
  }
});

// node_modules/@jscad/modeling/src/operations/modifiers/triangulatePolygons.js
var require_triangulatePolygons = __commonJS({
  "node_modules/@jscad/modeling/src/operations/modifiers/triangulatePolygons.js"(exports, module) {
    var vec3 = require_vec3();
    var poly3 = require_poly3();
    var triangulatePolygon = (epsilon, polygon, triangles) => {
      const nv = polygon.vertices.length;
      if (nv > 3) {
        if (nv > 4) {
          const midpoint = [0, 0, 0];
          polygon.vertices.forEach((vertice) => vec3.add(midpoint, midpoint, vertice));
          vec3.snap(midpoint, vec3.divide(midpoint, midpoint, [nv, nv, nv]), epsilon);
          for (let i = 0; i < nv; i++) {
            const poly = poly3.create([midpoint, polygon.vertices[i], polygon.vertices[(i + 1) % nv]]);
            if (polygon.color) poly.color = polygon.color;
            triangles.push(poly);
          }
          return;
        }
        const poly0 = poly3.create([polygon.vertices[0], polygon.vertices[1], polygon.vertices[2]]);
        const poly1 = poly3.create([polygon.vertices[0], polygon.vertices[2], polygon.vertices[3]]);
        if (polygon.color) {
          poly0.color = polygon.color;
          poly1.color = polygon.color;
        }
        triangles.push(poly0, poly1);
        return;
      }
      triangles.push(polygon);
    };
    var triangulatePolygons = (epsilon, polygons) => {
      const triangles = [];
      polygons.forEach((polygon) => {
        triangulatePolygon(epsilon, polygon, triangles);
      });
      return triangles;
    };
    module.exports = triangulatePolygons;
  }
});

// node_modules/@jscad/modeling/src/operations/modifiers/generalize.js
var require_generalize = __commonJS({
  "node_modules/@jscad/modeling/src/operations/modifiers/generalize.js"(exports, module) {
    var flatten = require_flatten();
    var measureEpsilon = require_measureEpsilon();
    var geom2 = require_geom2();
    var geom3 = require_geom3();
    var path2 = require_path2();
    var snapPolygons = require_snapPolygons();
    var mergePolygons = require_mergePolygons();
    var insertTjunctions = require_insertTjunctions();
    var triangulatePolygons = require_triangulatePolygons();
    var generalizePath2 = (options, geometry) => geometry;
    var generalizeGeom2 = (options, geometry) => geometry;
    var generalizeGeom3 = (options, geometry) => {
      const defaults = {
        snap: false,
        simplify: false,
        triangulate: false
      };
      const { snap, simplify, triangulate } = Object.assign({}, defaults, options);
      const epsilon = measureEpsilon(geometry);
      let polygons = geom3.toPolygons(geometry);
      if (snap) {
        polygons = snapPolygons(epsilon, polygons);
      }
      if (simplify) {
        polygons = mergePolygons(epsilon, polygons);
      }
      if (triangulate) {
        polygons = insertTjunctions(polygons);
        polygons = triangulatePolygons(epsilon, polygons);
      }
      const clone = Object.assign({}, geometry);
      clone.polygons = polygons;
      return clone;
    };
    var generalize = (options, ...geometries2) => {
      geometries2 = flatten(geometries2);
      if (geometries2.length === 0) throw new Error("wrong number of arguments");
      const results = geometries2.map((geometry) => {
        if (path2.isA(geometry)) return generalizePath2(options, geometry);
        if (geom2.isA(geometry)) return generalizeGeom2(options, geometry);
        if (geom3.isA(geometry)) return generalizeGeom3(options, geometry);
        throw new Error("invalid geometry");
      });
      return results.length === 1 ? results[0] : results;
    };
    module.exports = generalize;
  }
});

// node_modules/@jscad/modeling/src/operations/modifiers/snap.js
var require_snap3 = __commonJS({
  "node_modules/@jscad/modeling/src/operations/modifiers/snap.js"(exports, module) {
    var flatten = require_flatten();
    var vec2 = require_vec2();
    var geom2 = require_geom2();
    var geom3 = require_geom3();
    var path2 = require_path2();
    var measureEpsilon = require_measureEpsilon();
    var snapPolygons = require_snapPolygons();
    var snapPath2 = (geometry) => {
      const epsilon = measureEpsilon(geometry);
      const points = path2.toPoints(geometry);
      const newpoints = points.map((point) => vec2.snap(vec2.create(), point, epsilon));
      return path2.create(newpoints);
    };
    var snapGeom2 = (geometry) => {
      const epsilon = measureEpsilon(geometry);
      const sides = geom2.toSides(geometry);
      let newsides = sides.map((side) => [vec2.snap(vec2.create(), side[0], epsilon), vec2.snap(vec2.create(), side[1], epsilon)]);
      newsides = newsides.filter((side) => !vec2.equals(side[0], side[1]));
      return geom2.create(newsides);
    };
    var snapGeom3 = (geometry) => {
      const epsilon = measureEpsilon(geometry);
      const polygons = geom3.toPolygons(geometry);
      const newpolygons = snapPolygons(epsilon, polygons);
      return geom3.create(newpolygons);
    };
    var snap = (...geometries2) => {
      geometries2 = flatten(geometries2);
      if (geometries2.length === 0) throw new Error("wrong number of arguments");
      const results = geometries2.map((geometry) => {
        if (path2.isA(geometry)) return snapPath2(geometry);
        if (geom2.isA(geometry)) return snapGeom2(geometry);
        if (geom3.isA(geometry)) return snapGeom3(geometry);
        return geometry;
      });
      return results.length === 1 ? results[0] : results;
    };
    module.exports = snap;
  }
});

// node_modules/@jscad/modeling/src/operations/modifiers/index.js
var require_modifiers = __commonJS({
  "node_modules/@jscad/modeling/src/operations/modifiers/index.js"(exports, module) {
    module.exports = {
      generalize: require_generalize(),
      snap: require_snap3(),
      retessellate: require_retessellate()
    };
  }
});

// node_modules/@jscad/modeling/src/utils/padArrayToLength.js
var require_padArrayToLength = __commonJS({
  "node_modules/@jscad/modeling/src/utils/padArrayToLength.js"(exports, module) {
    var padArrayToLength = (anArray, padding, targetLength) => {
      anArray = anArray.slice();
      while (anArray.length < targetLength) {
        anArray.push(padding);
      }
      return anArray;
    };
    module.exports = padArrayToLength;
  }
});

// node_modules/@jscad/modeling/src/operations/transforms/align.js
var require_align = __commonJS({
  "node_modules/@jscad/modeling/src/operations/transforms/align.js"(exports, module) {
    var flatten = require_flatten();
    var padArrayToLength = require_padArrayToLength();
    var measureAggregateBoundingBox = require_measureAggregateBoundingBox();
    var { translate } = require_translate2();
    var validateOptions = (options) => {
      if (!Array.isArray(options.modes) || options.modes.length > 3) throw new Error("align(): modes must be an array of length <= 3");
      options.modes = padArrayToLength(options.modes, "none", 3);
      if (options.modes.filter((mode) => ["center", "max", "min", "none"].includes(mode)).length !== 3) throw new Error('align(): all modes must be one of "center", "max" or "min"');
      if (!Array.isArray(options.relativeTo) || options.relativeTo.length > 3) throw new Error("align(): relativeTo must be an array of length <= 3");
      options.relativeTo = padArrayToLength(options.relativeTo, 0, 3);
      if (options.relativeTo.filter((alignVal) => Number.isFinite(alignVal) || alignVal == null).length !== 3) throw new Error("align(): all relativeTo values must be a number, or null.");
      if (typeof options.grouped !== "boolean") throw new Error("align(): grouped must be a boolean value.");
      return options;
    };
    var populateRelativeToFromBounds = (relativeTo, modes, bounds) => {
      for (let i = 0; i < 3; i++) {
        if (relativeTo[i] == null) {
          if (modes[i] === "center") {
            relativeTo[i] = (bounds[0][i] + bounds[1][i]) / 2;
          } else if (modes[i] === "max") {
            relativeTo[i] = bounds[1][i];
          } else if (modes[i] === "min") {
            relativeTo[i] = bounds[0][i];
          }
        }
      }
      return relativeTo;
    };
    var alignGeometries = (geometry, modes, relativeTo) => {
      const bounds = measureAggregateBoundingBox(geometry);
      const translation = [0, 0, 0];
      for (let i = 0; i < 3; i++) {
        if (modes[i] === "center") {
          translation[i] = relativeTo[i] - (bounds[0][i] + bounds[1][i]) / 2;
        } else if (modes[i] === "max") {
          translation[i] = relativeTo[i] - bounds[1][i];
        } else if (modes[i] === "min") {
          translation[i] = relativeTo[i] - bounds[0][i];
        }
      }
      return translate(translation, geometry);
    };
    var align = (options, ...geometries2) => {
      const defaults = {
        modes: ["center", "center", "min"],
        relativeTo: [0, 0, 0],
        grouped: false
      };
      options = Object.assign({}, defaults, options);
      options = validateOptions(options);
      let { modes, relativeTo, grouped } = options;
      geometries2 = flatten(geometries2);
      if (geometries2.length === 0) throw new Error("align(): No geometries were provided to act upon");
      if (relativeTo.filter((val) => val == null).length) {
        const bounds = measureAggregateBoundingBox(geometries2);
        relativeTo = populateRelativeToFromBounds(relativeTo, modes, bounds);
      }
      if (grouped) {
        geometries2 = alignGeometries(geometries2, modes, relativeTo);
      } else {
        geometries2 = geometries2.map((geometry) => alignGeometries(geometry, modes, relativeTo));
      }
      return geometries2.length === 1 ? geometries2[0] : geometries2;
    };
    module.exports = align;
  }
});

// node_modules/@jscad/modeling/src/operations/transforms/center.js
var require_center = __commonJS({
  "node_modules/@jscad/modeling/src/operations/transforms/center.js"(exports, module) {
    var flatten = require_flatten();
    var geom2 = require_geom2();
    var geom3 = require_geom3();
    var path2 = require_path2();
    var measureBoundingBox = require_measureBoundingBox2();
    var { translate } = require_translate2();
    var centerGeometry = (options, object) => {
      const defaults = {
        axes: [true, true, true],
        relativeTo: [0, 0, 0]
      };
      const { axes, relativeTo } = Object.assign({}, defaults, options);
      const bounds = measureBoundingBox(object);
      const offset = [0, 0, 0];
      if (axes[0]) offset[0] = relativeTo[0] - (bounds[0][0] + (bounds[1][0] - bounds[0][0]) / 2);
      if (axes[1]) offset[1] = relativeTo[1] - (bounds[0][1] + (bounds[1][1] - bounds[0][1]) / 2);
      if (axes[2]) offset[2] = relativeTo[2] - (bounds[0][2] + (bounds[1][2] - bounds[0][2]) / 2);
      return translate(offset, object);
    };
    var center = (options, ...objects) => {
      const defaults = {
        axes: [true, true, true],
        relativeTo: [0, 0, 0]
        // TODO: Add additional 'methods' of centering: midpoint, centroid
      };
      const { axes, relativeTo } = Object.assign({}, defaults, options);
      objects = flatten(objects);
      if (objects.length === 0) throw new Error("wrong number of arguments");
      if (relativeTo.length !== 3) throw new Error("relativeTo must be an array of length 3");
      options = { axes, relativeTo };
      const results = objects.map((object) => {
        if (path2.isA(object)) return centerGeometry(options, object);
        if (geom2.isA(object)) return centerGeometry(options, object);
        if (geom3.isA(object)) return centerGeometry(options, object);
        return object;
      });
      return results.length === 1 ? results[0] : results;
    };
    var centerX = (...objects) => center({ axes: [true, false, false] }, objects);
    var centerY = (...objects) => center({ axes: [false, true, false] }, objects);
    var centerZ = (...objects) => center({ axes: [false, false, true] }, objects);
    module.exports = {
      center,
      centerX,
      centerY,
      centerZ
    };
  }
});

// node_modules/@jscad/modeling/src/operations/transforms/scale.js
var require_scale4 = __commonJS({
  "node_modules/@jscad/modeling/src/operations/transforms/scale.js"(exports, module) {
    var flatten = require_flatten();
    var mat4 = require_mat4();
    var geom2 = require_geom2();
    var geom3 = require_geom3();
    var path2 = require_path2();
    var scale = (factors, ...objects) => {
      if (!Array.isArray(factors)) throw new Error("factors must be an array");
      objects = flatten(objects);
      if (objects.length === 0) throw new Error("wrong number of arguments");
      factors = factors.slice();
      while (factors.length < 3) factors.push(1);
      if (factors[0] <= 0 || factors[1] <= 0 || factors[2] <= 0) throw new Error("factors must be positive");
      const matrix = mat4.fromScaling(mat4.create(), factors);
      const results = objects.map((object) => {
        if (path2.isA(object)) return path2.transform(matrix, object);
        if (geom2.isA(object)) return geom2.transform(matrix, object);
        if (geom3.isA(object)) return geom3.transform(matrix, object);
        return object;
      });
      return results.length === 1 ? results[0] : results;
    };
    var scaleX = (factor, ...objects) => scale([factor, 1, 1], objects);
    var scaleY = (factor, ...objects) => scale([1, factor, 1], objects);
    var scaleZ = (factor, ...objects) => scale([1, 1, factor], objects);
    module.exports = {
      scale,
      scaleX,
      scaleY,
      scaleZ
    };
  }
});

// node_modules/@jscad/modeling/src/operations/transforms/transform.js
var require_transform12 = __commonJS({
  "node_modules/@jscad/modeling/src/operations/transforms/transform.js"(exports, module) {
    var flatten = require_flatten();
    var geom2 = require_geom2();
    var geom3 = require_geom3();
    var path2 = require_path2();
    var transform = (matrix, ...objects) => {
      objects = flatten(objects);
      if (objects.length === 0) throw new Error("wrong number of arguments");
      const results = objects.map((object) => {
        if (path2.isA(object)) return path2.transform(matrix, object);
        if (geom2.isA(object)) return geom2.transform(matrix, object);
        if (geom3.isA(object)) return geom3.transform(matrix, object);
        return object;
      });
      return results.length === 1 ? results[0] : results;
    };
    module.exports = transform;
  }
});

// node_modules/@jscad/modeling/src/operations/transforms/index.js
var require_transforms = __commonJS({
  "node_modules/@jscad/modeling/src/operations/transforms/index.js"(exports, module) {
    module.exports = {
      align: require_align(),
      center: require_center().center,
      centerX: require_center().centerX,
      centerY: require_center().centerY,
      centerZ: require_center().centerZ,
      mirror: require_mirror().mirror,
      mirrorX: require_mirror().mirrorX,
      mirrorY: require_mirror().mirrorY,
      mirrorZ: require_mirror().mirrorZ,
      rotate: require_rotate3().rotate,
      rotateX: require_rotate3().rotateX,
      rotateY: require_rotate3().rotateY,
      rotateZ: require_rotate3().rotateZ,
      scale: require_scale4().scale,
      scaleX: require_scale4().scaleX,
      scaleY: require_scale4().scaleY,
      scaleZ: require_scale4().scaleZ,
      transform: require_transform12(),
      translate: require_translate2().translate,
      translateX: require_translate2().translateX,
      translateY: require_translate2().translateY,
      translateZ: require_translate2().translateZ
    };
  }
});

// node_modules/@jscad/modeling/src/index.js
var require_src = __commonJS({
  "node_modules/@jscad/modeling/src/index.js"(exports, module) {
    module.exports = {
      colors: require_colors(),
      curves: require_curves(),
      geometries: require_geometries(),
      maths: require_maths(),
      measurements: require_measurements(),
      primitives: require_primitives(),
      text: require_text(),
      utils: require_utils2(),
      booleans: require_booleans(),
      expansions: require_expansions(),
      extrusions: require_extrusions(),
      hulls: require_hulls(),
      minkowski: require_minkowski(),
      modifiers: require_modifiers(),
      transforms: require_transforms()
    };
  }
});

// node_modules/@jscad/array-utils/src/flatten.js
var require_flatten2 = __commonJS({
  "node_modules/@jscad/array-utils/src/flatten.js"(exports, module) {
    var flatten = (arr) => arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
    module.exports = flatten;
  }
});

// node_modules/@jscad/array-utils/src/fnNumberSort.js
var require_fnNumberSort2 = __commonJS({
  "node_modules/@jscad/array-utils/src/fnNumberSort.js"(exports, module) {
    var fnNumberSort = (a, b) => a - b;
    module.exports = fnNumberSort;
  }
});

// node_modules/@jscad/array-utils/src/head.js
var require_head = __commonJS({
  "node_modules/@jscad/array-utils/src/head.js"(exports, module) {
    var head = (array) => {
      if (!Array.isArray(array) || array.length === 0) {
        return void 0;
      }
      return array[0];
    };
    module.exports = head;
  }
});

// node_modules/@jscad/array-utils/src/insertSorted.js
var require_insertSorted2 = __commonJS({
  "node_modules/@jscad/array-utils/src/insertSorted.js"(exports, module) {
    var insertSorted = (array, element, compareFunction) => {
      let leftbound = 0;
      let rightbound = array.length;
      while (rightbound > leftbound) {
        const testindex = Math.floor((leftbound + rightbound) / 2);
        const testelement = array[testindex];
        const compareresult = compareFunction(element, testelement);
        if (compareresult > 0) {
          leftbound = testindex + 1;
        } else {
          rightbound = testindex;
        }
      }
      array.splice(leftbound, 0, element);
      return array;
    };
    module.exports = insertSorted;
  }
});

// node_modules/@jscad/array-utils/src/nth.js
var require_nth = __commonJS({
  "node_modules/@jscad/array-utils/src/nth.js"(exports, module) {
    var nth = (array, index) => {
      if (!Array.isArray(array) || array.length < index) {
        return void 0;
      }
      return array[index];
    };
    module.exports = nth;
  }
});

// node_modules/@jscad/array-utils/src/padToLength.js
var require_padToLength = __commonJS({
  "node_modules/@jscad/array-utils/src/padToLength.js"(exports, module) {
    var padToLength = (anArray, padding, targetLength) => {
      anArray = anArray.slice();
      while (anArray.length < targetLength) {
        anArray.push(padding);
      }
      return anArray;
    };
    module.exports = padToLength;
  }
});

// node_modules/@jscad/array-utils/src/toArray.js
var require_toArray = __commonJS({
  "node_modules/@jscad/array-utils/src/toArray.js"(exports, module) {
    var toArray = (array) => {
      if (Array.isArray(array)) return array;
      if (array === void 0 || array === null) return [];
      return [array];
    };
    module.exports = toArray;
  }
});

// node_modules/@jscad/array-utils/src/index.js
var require_src2 = __commonJS({
  "node_modules/@jscad/array-utils/src/index.js"(exports, module) {
    module.exports = {
      flatten: require_flatten2(),
      fnNumberSort: require_fnNumberSort2(),
      head: require_head(),
      insertSorted: require_insertSorted2(),
      nth: require_nth(),
      padToLength: require_padToLength(),
      toArray: require_toArray()
    };
  }
});

// node_modules/@jscad/stl-serializer/CSGToStlb.js
var require_CSGToStlb = __commonJS({
  "node_modules/@jscad/stl-serializer/CSGToStlb.js"(exports, module) {
    var { geometries: geometries2 } = require_src();
    var serializeBinary = (objects, options) => {
      options.statusCallback && options.statusCallback({ progress: 0 });
      const buffer = new ArrayBuffer(4);
      const int32buffer = new Int32Array(buffer, 0, 1);
      const int8buffer = new Int8Array(buffer, 0, 4);
      int32buffer[0] = 287454020;
      if (int8buffer[0] !== 68) {
        throw new Error("Binary STL output is currently only supported on little-endian (Intel) processors");
      }
      let numtriangles = 0;
      let numpolygons = 0;
      objects.forEach((object, i) => {
        const polygons = geometries2.geom3.toPolygons(object);
        polygons.forEach((polygon) => {
          const numvertices = polygon.vertices.length;
          const thisnumtriangles = numvertices >= 3 ? numvertices - 2 : 0;
          numtriangles += thisnumtriangles;
          numpolygons += 1;
        });
      });
      const headerarray = new Uint8Array(80);
      for (let i = 0; i < 80; i++) {
        headerarray[i] = 65;
      }
      const ar1 = new Uint32Array(1);
      ar1[0] = numtriangles;
      const allTrianglesBuffer = new ArrayBuffer(50 * numtriangles);
      const allTrianglesBufferAsInt8 = new Int8Array(allTrianglesBuffer);
      const triangleBuffer = new ArrayBuffer(50);
      const triangleBufferAsInt8 = new Int8Array(triangleBuffer);
      const triangleFloat32array = new Float32Array(triangleBuffer, 0, 12);
      const triangleUint16array = new Uint16Array(triangleBuffer, 48, 1);
      let byteoffset = 0;
      objects.forEach((object) => {
        const polygons = geometries2.geom3.toPolygons(object);
        polygons.forEach((polygon, index) => {
          const vertices = polygon.vertices;
          const numvertices = vertices.length;
          const plane = geometries2.poly3.plane(polygon);
          for (let i = 0; i < numvertices - 2; i++) {
            triangleFloat32array[0] = plane[0];
            triangleFloat32array[1] = plane[1];
            triangleFloat32array[2] = plane[2];
            let arindex = 3;
            for (let v = 0; v < 3; v++) {
              const vv = v + (v > 0 ? i : 0);
              const vertex = vertices[vv];
              triangleFloat32array[arindex++] = vertex[0];
              triangleFloat32array[arindex++] = vertex[1];
              triangleFloat32array[arindex++] = vertex[2];
            }
            triangleUint16array[0] = 0;
            allTrianglesBufferAsInt8.set(triangleBufferAsInt8, byteoffset);
            byteoffset += 50;
          }
          options.statusCallback && options.statusCallback({ progress: 100 * index / numpolygons });
        });
      });
      options.statusCallback && options.statusCallback({ progress: 100 });
      return [headerarray.buffer, ar1.buffer, allTrianglesBuffer];
    };
    module.exports = {
      serializeBinary
    };
  }
});

// node_modules/@jscad/stl-serializer/CSGToStla.js
var require_CSGToStla = __commonJS({
  "node_modules/@jscad/stl-serializer/CSGToStla.js"(exports, module) {
    var { geometries: geometries2 } = require_src();
    var serializeText = (objects, options) => {
      options.statusCallback && options.statusCallback({ progress: 0 });
      const result = `solid JSCAD
${convertToStl(objects, options)}
endsolid JSCAD
`;
      options.statusCallback && options.statusCallback({ progress: 100 });
      return [result];
    };
    var convertToStl = (objects, options) => {
      const result = [];
      objects.forEach((object, i) => {
        result.push(convertToFacets(object, options));
        options.statusCallback && options.statusCallback({ progress: 100 * i / objects.length });
      });
      return result.join("\n");
    };
    var convertToFacets = (object, options) => {
      const result = [];
      const polygons = geometries2.geom3.toPolygons(object);
      polygons.forEach((polygon, i) => {
        result.push(convertToFacet(polygon));
      });
      return result.join("\n");
    };
    var vector3DtoStlString = (v) => `${v[0]} ${v[1]} ${v[2]}`;
    var vertextoStlString = (vertex) => `vertex ${vector3DtoStlString(vertex)}`;
    var convertToFacet = (polygon) => {
      const result = [];
      if (polygon.vertices.length >= 3) {
        const firstVertexStl = vertextoStlString(polygon.vertices[0]);
        for (let i = 0; i < polygon.vertices.length - 2; i++) {
          const facet = `facet normal ${vector3DtoStlString(geometries2.poly3.plane(polygon))}
outer loop
${firstVertexStl}
${vertextoStlString(polygon.vertices[i + 1])}
${vertextoStlString(polygon.vertices[i + 2])}
endloop
endfacet`;
          result.push(facet);
        }
      }
      return result.join("\n");
    };
    module.exports = {
      serializeText
    };
  }
});

// node_modules/@jscad/stl-serializer/index.js
var require_stl_serializer = __commonJS({
  "node_modules/@jscad/stl-serializer/index.js"(exports, module) {
    var { geometries: geometries2, modifiers } = require_src();
    var { flatten, toArray } = require_src2();
    var { serializeBinary } = require_CSGToStlb();
    var { serializeText } = require_CSGToStla();
    var mimeType = "application/sla";
    var serialize = (options, ...objects) => {
      const defaults = {
        binary: true,
        statusCallback: null
      };
      options = Object.assign({}, defaults, options);
      objects = flatten(objects);
      let objects3d = objects.filter((object) => geometries2.geom3.isA(object));
      if (objects3d.length === 0) throw new Error("only 3D geometries can be serialized to STL");
      if (objects.length !== objects3d.length) console.warn("some objects could not be serialized to STL");
      objects3d = toArray(modifiers.generalize({ snap: true, triangulate: true }, objects3d));
      return options.binary ? serializeBinary(objects3d, options) : serializeText(objects3d, options);
    };
    module.exports = {
      mimeType,
      serialize
    };
  }
});

// node_modules/viem/_esm/utils/data/isHex.js
function isHex(value, { strict = true } = {}) {
  if (!value)
    return false;
  if (typeof value !== "string")
    return false;
  return strict ? /^0x[0-9a-fA-F]*$/.test(value) : value.startsWith("0x");
}
var init_isHex = __esm({
  "node_modules/viem/_esm/utils/data/isHex.js"() {
  }
});

// node_modules/viem/_esm/utils/data/size.js
function size(value) {
  if (isHex(value, { strict: false }))
    return Math.ceil((value.length - 2) / 2);
  return value.length;
}
var init_size = __esm({
  "node_modules/viem/_esm/utils/data/size.js"() {
    init_isHex();
  }
});

// node_modules/viem/_esm/errors/version.js
var version;
var init_version = __esm({
  "node_modules/viem/_esm/errors/version.js"() {
    version = "2.55.2";
  }
});

// node_modules/viem/_esm/errors/base.js
function walk(err, fn) {
  if (fn?.(err))
    return err;
  if (err && typeof err === "object" && "cause" in err && err.cause !== void 0)
    return walk(err.cause, fn);
  return fn ? null : err;
}
var errorConfig, BaseError;
var init_base = __esm({
  "node_modules/viem/_esm/errors/base.js"() {
    init_version();
    errorConfig = {
      getDocsUrl: ({ docsBaseUrl, docsPath = "", docsSlug }) => docsPath ? `${docsBaseUrl ?? "https://viem.sh"}${docsPath}${docsSlug ? `#${docsSlug}` : ""}` : void 0,
      version: `viem@${version}`
    };
    BaseError = class _BaseError extends Error {
      constructor(shortMessage, args = {}) {
        const details = (() => {
          if (args.cause instanceof _BaseError)
            return args.cause.details;
          if (args.cause?.message)
            return args.cause.message;
          return args.details;
        })();
        const docsPath = (() => {
          if (args.cause instanceof _BaseError)
            return args.cause.docsPath || args.docsPath;
          return args.docsPath;
        })();
        const docsUrl = errorConfig.getDocsUrl?.({ ...args, docsPath });
        const message = [
          shortMessage || "An error occurred.",
          "",
          ...args.metaMessages ? [...args.metaMessages, ""] : [],
          ...docsUrl ? [`Docs: ${docsUrl}`] : [],
          ...details ? [`Details: ${details}`] : [],
          ...errorConfig.version ? [`Version: ${errorConfig.version}`] : []
        ].join("\n");
        super(message, args.cause ? { cause: args.cause } : void 0);
        Object.defineProperty(this, "details", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "docsPath", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "metaMessages", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "shortMessage", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "version", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "BaseError"
        });
        this.details = details;
        this.docsPath = docsPath;
        this.metaMessages = args.metaMessages;
        this.name = args.name ?? this.name;
        this.shortMessage = shortMessage;
        this.version = version;
      }
      walk(fn) {
        return walk(this, fn);
      }
    };
  }
});

// node_modules/viem/_esm/errors/abi.js
var AbiEncodingArrayLengthMismatchError, AbiEncodingBytesSizeMismatchError, AbiEncodingLengthMismatchError, BytesSizeMismatchError, InvalidAbiEncodingTypeError, InvalidArrayError, UnsupportedPackedAbiType;
var init_abi = __esm({
  "node_modules/viem/_esm/errors/abi.js"() {
    init_size();
    init_base();
    AbiEncodingArrayLengthMismatchError = class extends BaseError {
      constructor({ expectedLength, givenLength, type }) {
        super([
          `ABI encoding array length mismatch for type ${type}.`,
          `Expected length: ${expectedLength}`,
          `Given length: ${givenLength}`
        ].join("\n"), { name: "AbiEncodingArrayLengthMismatchError" });
      }
    };
    AbiEncodingBytesSizeMismatchError = class extends BaseError {
      constructor({ expectedSize, value }) {
        super(`Size of bytes "${value}" (bytes${size(value)}) does not match expected size (bytes${expectedSize}).`, { name: "AbiEncodingBytesSizeMismatchError" });
      }
    };
    AbiEncodingLengthMismatchError = class extends BaseError {
      constructor({ expectedLength, givenLength }) {
        super([
          "ABI encoding params/values length mismatch.",
          `Expected length (params): ${expectedLength}`,
          `Given length (values): ${givenLength}`
        ].join("\n"), { name: "AbiEncodingLengthMismatchError" });
      }
    };
    BytesSizeMismatchError = class extends BaseError {
      constructor({ expectedSize, givenSize }) {
        super(`Expected bytes${expectedSize}, got bytes${givenSize}.`, {
          name: "BytesSizeMismatchError"
        });
      }
    };
    InvalidAbiEncodingTypeError = class extends BaseError {
      constructor(type, { docsPath }) {
        super([
          `Type "${type}" is not a valid encoding type.`,
          "Please provide a valid ABI type."
        ].join("\n"), { docsPath, name: "InvalidAbiEncodingType" });
      }
    };
    InvalidArrayError = class extends BaseError {
      constructor(value) {
        super([`Value "${value}" is not a valid array.`].join("\n"), {
          name: "InvalidArrayError"
        });
      }
    };
    UnsupportedPackedAbiType = class extends BaseError {
      constructor(type) {
        super(`Type "${type}" is not supported for packed encoding.`, {
          name: "UnsupportedPackedAbiType"
        });
      }
    };
  }
});

// node_modules/viem/_esm/errors/data.js
var SliceOffsetOutOfBoundsError, SizeExceedsPaddingSizeError;
var init_data = __esm({
  "node_modules/viem/_esm/errors/data.js"() {
    init_base();
    SliceOffsetOutOfBoundsError = class extends BaseError {
      constructor({ offset, position, size: size2 }) {
        super(`Slice ${position === "start" ? "starting" : "ending"} at offset "${offset}" is out-of-bounds (size: ${size2}).`, { name: "SliceOffsetOutOfBoundsError" });
      }
    };
    SizeExceedsPaddingSizeError = class extends BaseError {
      constructor({ size: size2, targetSize, type }) {
        super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (${size2}) exceeds padding size (${targetSize}).`, { name: "SizeExceedsPaddingSizeError" });
      }
    };
  }
});

// node_modules/viem/_esm/utils/data/pad.js
function pad(hexOrBytes, { dir, size: size2 = 32 } = {}) {
  if (typeof hexOrBytes === "string")
    return padHex(hexOrBytes, { dir, size: size2 });
  return padBytes(hexOrBytes, { dir, size: size2 });
}
function padHex(hex_, { dir, size: size2 = 32 } = {}) {
  if (size2 === null)
    return hex_;
  const hex = hex_.replace("0x", "");
  if (hex.length > size2 * 2)
    throw new SizeExceedsPaddingSizeError({
      size: Math.ceil(hex.length / 2),
      targetSize: size2,
      type: "hex"
    });
  return `0x${hex[dir === "right" ? "padEnd" : "padStart"](size2 * 2, "0")}`;
}
function padBytes(bytes, { dir, size: size2 = 32 } = {}) {
  if (size2 === null)
    return bytes;
  if (bytes.length > size2)
    throw new SizeExceedsPaddingSizeError({
      size: bytes.length,
      targetSize: size2,
      type: "bytes"
    });
  const paddedBytes = new Uint8Array(size2);
  for (let i = 0; i < size2; i++) {
    const padEnd = dir === "right";
    paddedBytes[padEnd ? i : size2 - i - 1] = bytes[padEnd ? i : bytes.length - i - 1];
  }
  return paddedBytes;
}
var init_pad = __esm({
  "node_modules/viem/_esm/utils/data/pad.js"() {
    init_data();
  }
});

// node_modules/viem/_esm/errors/encoding.js
var IntegerOutOfRangeError, SizeOverflowError;
var init_encoding = __esm({
  "node_modules/viem/_esm/errors/encoding.js"() {
    init_base();
    IntegerOutOfRangeError = class extends BaseError {
      constructor({ max, min, signed, size: size2, value }) {
        super(`Number "${value}" is not in safe ${size2 ? `${size2 * 8}-bit ${signed ? "signed" : "unsigned"} ` : ""}integer range ${max ? `(${min} to ${max})` : `(above ${min})`}`, { name: "IntegerOutOfRangeError" });
      }
    };
    SizeOverflowError = class extends BaseError {
      constructor({ givenSize, maxSize }) {
        super(`Size cannot exceed ${maxSize} bytes. Given size: ${givenSize} bytes.`, { name: "SizeOverflowError" });
      }
    };
  }
});

// node_modules/viem/_esm/utils/encoding/fromHex.js
function assertSize(hexOrBytes, { size: size2 }) {
  if (size(hexOrBytes) > size2)
    throw new SizeOverflowError({
      givenSize: size(hexOrBytes),
      maxSize: size2
    });
}
var init_fromHex = __esm({
  "node_modules/viem/_esm/utils/encoding/fromHex.js"() {
    init_encoding();
    init_size();
  }
});

// node_modules/viem/_esm/utils/encoding/toHex.js
function toHex(value, opts = {}) {
  if (typeof value === "number" || typeof value === "bigint")
    return numberToHex(value, opts);
  if (typeof value === "string") {
    return stringToHex(value, opts);
  }
  if (typeof value === "boolean")
    return boolToHex(value, opts);
  return bytesToHex(value, opts);
}
function boolToHex(value, opts = {}) {
  const hex = `0x${Number(value)}`;
  if (typeof opts.size === "number") {
    assertSize(hex, { size: opts.size });
    return pad(hex, { size: opts.size });
  }
  return hex;
}
function bytesToHex(value, opts = {}) {
  let string = "";
  for (let i = 0; i < value.length; i++) {
    string += hexes[value[i]];
  }
  const hex = `0x${string}`;
  if (typeof opts.size === "number") {
    assertSize(hex, { size: opts.size });
    return pad(hex, { dir: "right", size: opts.size });
  }
  return hex;
}
function numberToHex(value_, opts = {}) {
  const { signed, size: size2 } = opts;
  const value = BigInt(value_);
  let maxValue;
  if (size2) {
    if (signed)
      maxValue = (1n << BigInt(size2) * 8n - 1n) - 1n;
    else
      maxValue = 2n ** (BigInt(size2) * 8n) - 1n;
  } else if (typeof value_ === "number") {
    maxValue = BigInt(Number.MAX_SAFE_INTEGER);
  }
  const minValue = typeof maxValue === "bigint" && signed ? -maxValue - 1n : 0;
  if (maxValue && value > maxValue || value < minValue) {
    const suffix = typeof value_ === "bigint" ? "n" : "";
    throw new IntegerOutOfRangeError({
      max: maxValue ? `${maxValue}${suffix}` : void 0,
      min: `${minValue}${suffix}`,
      signed,
      size: size2,
      value: `${value_}${suffix}`
    });
  }
  const hex = `0x${(signed && value < 0 ? (1n << BigInt(size2 * 8)) + BigInt(value) : value).toString(16)}`;
  if (size2)
    return pad(hex, { size: size2 });
  return hex;
}
function stringToHex(value_, opts = {}) {
  const value = encoder.encode(value_);
  return bytesToHex(value, opts);
}
var hexes, encoder;
var init_toHex = __esm({
  "node_modules/viem/_esm/utils/encoding/toHex.js"() {
    init_encoding();
    init_pad();
    init_fromHex();
    hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_v, i) => i.toString(16).padStart(2, "0"));
    encoder = /* @__PURE__ */ new TextEncoder();
  }
});

// node_modules/viem/_esm/utils/encoding/toBytes.js
function toBytes(value, opts = {}) {
  if (typeof value === "number" || typeof value === "bigint")
    return numberToBytes(value, opts);
  if (typeof value === "boolean")
    return boolToBytes(value, opts);
  if (isHex(value))
    return hexToBytes(value, opts);
  return stringToBytes(value, opts);
}
function boolToBytes(value, opts = {}) {
  const bytes = new Uint8Array(1);
  bytes[0] = Number(value);
  if (typeof opts.size === "number") {
    assertSize(bytes, { size: opts.size });
    return pad(bytes, { size: opts.size });
  }
  return bytes;
}
function charCodeToBase16(char) {
  if (char >= charCodeMap.zero && char <= charCodeMap.nine)
    return char - charCodeMap.zero;
  if (char >= charCodeMap.A && char <= charCodeMap.F)
    return char - (charCodeMap.A - 10);
  if (char >= charCodeMap.a && char <= charCodeMap.f)
    return char - (charCodeMap.a - 10);
  return void 0;
}
function hexToBytes(hex_, opts = {}) {
  let hex = hex_;
  if (opts.size) {
    assertSize(hex, { size: opts.size });
    hex = pad(hex, { dir: "right", size: opts.size });
  }
  let hexString = hex.slice(2);
  if (hexString.length % 2)
    hexString = `0${hexString}`;
  const length = hexString.length / 2;
  const bytes = new Uint8Array(length);
  for (let index = 0, j = 0; index < length; index++) {
    const nibbleLeft = charCodeToBase16(hexString.charCodeAt(j++));
    const nibbleRight = charCodeToBase16(hexString.charCodeAt(j++));
    if (nibbleLeft === void 0 || nibbleRight === void 0) {
      throw new BaseError(`Invalid byte sequence ("${hexString[j - 2]}${hexString[j - 1]}" in "${hexString}").`);
    }
    bytes[index] = nibbleLeft * 16 + nibbleRight;
  }
  return bytes;
}
function numberToBytes(value, opts) {
  const hex = numberToHex(value, opts);
  return hexToBytes(hex);
}
function stringToBytes(value, opts = {}) {
  const bytes = encoder2.encode(value);
  if (typeof opts.size === "number") {
    assertSize(bytes, { size: opts.size });
    return pad(bytes, { dir: "right", size: opts.size });
  }
  return bytes;
}
var encoder2, charCodeMap;
var init_toBytes = __esm({
  "node_modules/viem/_esm/utils/encoding/toBytes.js"() {
    init_base();
    init_isHex();
    init_pad();
    init_fromHex();
    init_toHex();
    encoder2 = /* @__PURE__ */ new TextEncoder();
    charCodeMap = {
      zero: 48,
      nine: 57,
      A: 65,
      F: 70,
      a: 97,
      f: 102
    };
  }
});

// node_modules/@noble/hashes/esm/_u64.js
function fromBig(n, le = false) {
  if (le)
    return { h: Number(n & U32_MASK64), l: Number(n >> _32n & U32_MASK64) };
  return { h: Number(n >> _32n & U32_MASK64) | 0, l: Number(n & U32_MASK64) | 0 };
}
function split(lst, le = false) {
  const len = lst.length;
  let Ah = new Uint32Array(len);
  let Al = new Uint32Array(len);
  for (let i = 0; i < len; i++) {
    const { h, l } = fromBig(lst[i], le);
    [Ah[i], Al[i]] = [h, l];
  }
  return [Ah, Al];
}
var U32_MASK64, _32n, rotlSH, rotlSL, rotlBH, rotlBL;
var init_u64 = __esm({
  "node_modules/@noble/hashes/esm/_u64.js"() {
    U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
    _32n = /* @__PURE__ */ BigInt(32);
    rotlSH = (h, l, s) => h << s | l >>> 32 - s;
    rotlSL = (h, l, s) => l << s | h >>> 32 - s;
    rotlBH = (h, l, s) => l << s - 32 | h >>> 64 - s;
    rotlBL = (h, l, s) => h << s - 32 | l >>> 64 - s;
  }
});

// node_modules/@noble/hashes/esm/utils.js
function isBytes(a) {
  return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === "Uint8Array";
}
function anumber(n) {
  if (!Number.isSafeInteger(n) || n < 0)
    throw new Error("positive integer expected, got " + n);
}
function abytes(b, ...lengths) {
  if (!isBytes(b))
    throw new Error("Uint8Array expected");
  if (lengths.length > 0 && !lengths.includes(b.length))
    throw new Error("Uint8Array expected of length " + lengths + ", got length=" + b.length);
}
function aexists(instance, checkFinished = true) {
  if (instance.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (checkFinished && instance.finished)
    throw new Error("Hash#digest() has already been called");
}
function aoutput(out, instance) {
  abytes(out);
  const min = instance.outputLen;
  if (out.length < min) {
    throw new Error("digestInto() expects output buffer of length at least " + min);
  }
}
function u32(arr) {
  return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
}
function clean2(...arrays) {
  for (let i = 0; i < arrays.length; i++) {
    arrays[i].fill(0);
  }
}
function byteSwap(word) {
  return word << 24 & 4278190080 | word << 8 & 16711680 | word >>> 8 & 65280 | word >>> 24 & 255;
}
function byteSwap32(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = byteSwap(arr[i]);
  }
  return arr;
}
function utf8ToBytes(str) {
  if (typeof str !== "string")
    throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(str));
}
function toBytes2(data) {
  if (typeof data === "string")
    data = utf8ToBytes(data);
  abytes(data);
  return data;
}
function createHasher(hashCons) {
  const hashC = (msg) => hashCons().update(toBytes2(msg)).digest();
  const tmp = hashCons();
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = () => hashCons();
  return hashC;
}
var isLE, swap32IfBE, Hash;
var init_utils = __esm({
  "node_modules/@noble/hashes/esm/utils.js"() {
    isLE = /* @__PURE__ */ (() => new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68)();
    swap32IfBE = isLE ? (u) => u : byteSwap32;
    Hash = class {
    };
  }
});

// node_modules/@noble/hashes/esm/sha3.js
function keccakP(s, rounds = 24) {
  const B = new Uint32Array(5 * 2);
  for (let round = 24 - rounds; round < 24; round++) {
    for (let x = 0; x < 10; x++)
      B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
    for (let x = 0; x < 10; x += 2) {
      const idx1 = (x + 8) % 10;
      const idx0 = (x + 2) % 10;
      const B0 = B[idx0];
      const B1 = B[idx0 + 1];
      const Th = rotlH(B0, B1, 1) ^ B[idx1];
      const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
      for (let y = 0; y < 50; y += 10) {
        s[x + y] ^= Th;
        s[x + y + 1] ^= Tl;
      }
    }
    let curH = s[2];
    let curL = s[3];
    for (let t = 0; t < 24; t++) {
      const shift = SHA3_ROTL[t];
      const Th = rotlH(curH, curL, shift);
      const Tl = rotlL(curH, curL, shift);
      const PI = SHA3_PI[t];
      curH = s[PI];
      curL = s[PI + 1];
      s[PI] = Th;
      s[PI + 1] = Tl;
    }
    for (let y = 0; y < 50; y += 10) {
      for (let x = 0; x < 10; x++)
        B[x] = s[y + x];
      for (let x = 0; x < 10; x++)
        s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
    }
    s[0] ^= SHA3_IOTA_H[round];
    s[1] ^= SHA3_IOTA_L[round];
  }
  clean2(B);
}
var _0n, _1n, _2n, _7n, _256n, _0x71n, SHA3_PI, SHA3_ROTL, _SHA3_IOTA, IOTAS, SHA3_IOTA_H, SHA3_IOTA_L, rotlH, rotlL, Keccak, gen, keccak_256;
var init_sha3 = __esm({
  "node_modules/@noble/hashes/esm/sha3.js"() {
    init_u64();
    init_utils();
    _0n = BigInt(0);
    _1n = BigInt(1);
    _2n = BigInt(2);
    _7n = BigInt(7);
    _256n = BigInt(256);
    _0x71n = BigInt(113);
    SHA3_PI = [];
    SHA3_ROTL = [];
    _SHA3_IOTA = [];
    for (let round = 0, R = _1n, x = 1, y = 0; round < 24; round++) {
      [x, y] = [y, (2 * x + 3 * y) % 5];
      SHA3_PI.push(2 * (5 * y + x));
      SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
      let t = _0n;
      for (let j = 0; j < 7; j++) {
        R = (R << _1n ^ (R >> _7n) * _0x71n) % _256n;
        if (R & _2n)
          t ^= _1n << (_1n << /* @__PURE__ */ BigInt(j)) - _1n;
      }
      _SHA3_IOTA.push(t);
    }
    IOTAS = split(_SHA3_IOTA, true);
    SHA3_IOTA_H = IOTAS[0];
    SHA3_IOTA_L = IOTAS[1];
    rotlH = (h, l, s) => s > 32 ? rotlBH(h, l, s) : rotlSH(h, l, s);
    rotlL = (h, l, s) => s > 32 ? rotlBL(h, l, s) : rotlSL(h, l, s);
    Keccak = class _Keccak extends Hash {
      // NOTE: we accept arguments in bytes instead of bits here.
      constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
        super();
        this.pos = 0;
        this.posOut = 0;
        this.finished = false;
        this.destroyed = false;
        this.enableXOF = false;
        this.blockLen = blockLen;
        this.suffix = suffix;
        this.outputLen = outputLen;
        this.enableXOF = enableXOF;
        this.rounds = rounds;
        anumber(outputLen);
        if (!(0 < blockLen && blockLen < 200))
          throw new Error("only keccak-f1600 function is supported");
        this.state = new Uint8Array(200);
        this.state32 = u32(this.state);
      }
      clone() {
        return this._cloneInto();
      }
      keccak() {
        swap32IfBE(this.state32);
        keccakP(this.state32, this.rounds);
        swap32IfBE(this.state32);
        this.posOut = 0;
        this.pos = 0;
      }
      update(data) {
        aexists(this);
        data = toBytes2(data);
        abytes(data);
        const { blockLen, state } = this;
        const len = data.length;
        for (let pos = 0; pos < len; ) {
          const take = Math.min(blockLen - this.pos, len - pos);
          for (let i = 0; i < take; i++)
            state[this.pos++] ^= data[pos++];
          if (this.pos === blockLen)
            this.keccak();
        }
        return this;
      }
      finish() {
        if (this.finished)
          return;
        this.finished = true;
        const { state, suffix, pos, blockLen } = this;
        state[pos] ^= suffix;
        if ((suffix & 128) !== 0 && pos === blockLen - 1)
          this.keccak();
        state[blockLen - 1] ^= 128;
        this.keccak();
      }
      writeInto(out) {
        aexists(this, false);
        abytes(out);
        this.finish();
        const bufferOut = this.state;
        const { blockLen } = this;
        for (let pos = 0, len = out.length; pos < len; ) {
          if (this.posOut >= blockLen)
            this.keccak();
          const take = Math.min(blockLen - this.posOut, len - pos);
          out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
          this.posOut += take;
          pos += take;
        }
        return out;
      }
      xofInto(out) {
        if (!this.enableXOF)
          throw new Error("XOF is not possible for this instance");
        return this.writeInto(out);
      }
      xof(bytes) {
        anumber(bytes);
        return this.xofInto(new Uint8Array(bytes));
      }
      digestInto(out) {
        aoutput(out, this);
        if (this.finished)
          throw new Error("digest() was already called");
        this.writeInto(out);
        this.destroy();
        return out;
      }
      digest() {
        return this.digestInto(new Uint8Array(this.outputLen));
      }
      destroy() {
        this.destroyed = true;
        clean2(this.state);
      }
      _cloneInto(to) {
        const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
        to || (to = new _Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
        to.state32.set(this.state32);
        to.pos = this.pos;
        to.posOut = this.posOut;
        to.finished = this.finished;
        to.rounds = rounds;
        to.suffix = suffix;
        to.outputLen = outputLen;
        to.enableXOF = enableXOF;
        to.destroyed = this.destroyed;
        return to;
      }
    };
    gen = (suffix, blockLen, outputLen) => createHasher(() => new Keccak(blockLen, suffix, outputLen));
    keccak_256 = /* @__PURE__ */ (() => gen(1, 136, 256 / 8))();
  }
});

// node_modules/viem/_esm/utils/hash/keccak256.js
function keccak256(value, to_) {
  const to = to_ || "hex";
  const bytes = keccak_256(isHex(value, { strict: false }) ? toBytes(value) : value);
  if (to === "bytes")
    return bytes;
  return toHex(bytes);
}
var init_keccak256 = __esm({
  "node_modules/viem/_esm/utils/hash/keccak256.js"() {
    init_sha3();
    init_isHex();
    init_toBytes();
    init_toHex();
  }
});

// node_modules/viem/_esm/errors/address.js
var InvalidAddressError;
var init_address = __esm({
  "node_modules/viem/_esm/errors/address.js"() {
    init_base();
    InvalidAddressError = class extends BaseError {
      constructor({ address }) {
        super(`Address "${address}" is invalid.`, {
          metaMessages: [
            "- Address must be a hex value of 20 bytes (40 hex characters).",
            "- Address must match its checksum counterpart."
          ],
          name: "InvalidAddressError"
        });
      }
    };
  }
});

// node_modules/viem/_esm/utils/lru.js
var LruMap;
var init_lru = __esm({
  "node_modules/viem/_esm/utils/lru.js"() {
    LruMap = class extends Map {
      constructor(size2) {
        super();
        Object.defineProperty(this, "maxSize", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.maxSize = size2;
      }
      get(key) {
        const value = super.get(key);
        if (super.has(key)) {
          super.delete(key);
          super.set(key, value);
        }
        return value;
      }
      set(key, value) {
        if (super.has(key))
          super.delete(key);
        super.set(key, value);
        if (this.maxSize && this.size > this.maxSize) {
          const firstKey = super.keys().next().value;
          if (firstKey !== void 0)
            super.delete(firstKey);
        }
        return this;
      }
    };
  }
});

// node_modules/viem/_esm/utils/address/getAddress.js
function checksumAddress(address_, chainId) {
  if (checksumAddressCache.has(`${address_}.${chainId}`))
    return checksumAddressCache.get(`${address_}.${chainId}`);
  const hexAddress = chainId ? `${chainId}${address_.toLowerCase()}` : address_.substring(2).toLowerCase();
  const hash = keccak256(stringToBytes(hexAddress), "bytes");
  const address = (chainId ? hexAddress.substring(`${chainId}0x`.length) : hexAddress).split("");
  for (let i = 0; i < 40; i += 2) {
    if (hash[i >> 1] >> 4 >= 8 && address[i]) {
      address[i] = address[i].toUpperCase();
    }
    if ((hash[i >> 1] & 15) >= 8 && address[i + 1]) {
      address[i + 1] = address[i + 1].toUpperCase();
    }
  }
  const result = `0x${address.join("")}`;
  checksumAddressCache.set(`${address_}.${chainId}`, result);
  return result;
}
var checksumAddressCache;
var init_getAddress = __esm({
  "node_modules/viem/_esm/utils/address/getAddress.js"() {
    init_toBytes();
    init_keccak256();
    init_lru();
    checksumAddressCache = /* @__PURE__ */ new LruMap(8192);
  }
});

// node_modules/viem/_esm/utils/address/isAddress.js
function isAddress(address, options) {
  const { strict = true } = options ?? {};
  const cacheKey = `${address}.${strict}`;
  if (isAddressCache.has(cacheKey))
    return isAddressCache.get(cacheKey);
  const result = (() => {
    if (!addressRegex.test(address))
      return false;
    if (address.toLowerCase() === address)
      return true;
    if (strict)
      return checksumAddress(address) === address;
    return true;
  })();
  isAddressCache.set(cacheKey, result);
  return result;
}
var addressRegex, isAddressCache;
var init_isAddress = __esm({
  "node_modules/viem/_esm/utils/address/isAddress.js"() {
    init_lru();
    init_getAddress();
    addressRegex = /^0x[a-fA-F0-9]{40}$/;
    isAddressCache = /* @__PURE__ */ new LruMap(8192);
  }
});

// node_modules/viem/_esm/utils/data/concat.js
function concatHex(values) {
  return `0x${values.reduce((acc, x) => acc + x.replace("0x", ""), "")}`;
}
var init_concat = __esm({
  "node_modules/viem/_esm/utils/data/concat.js"() {
  }
});

// node_modules/viem/_esm/utils/data/slice.js
function slice(value, start, end, { strict } = {}) {
  if (isHex(value, { strict: false }))
    return sliceHex(value, start, end, {
      strict
    });
  return sliceBytes(value, start, end, {
    strict
  });
}
function assertStartOffset(value, start) {
  if (typeof start === "number" && start > 0 && start > size(value) - 1)
    throw new SliceOffsetOutOfBoundsError({
      offset: start,
      position: "start",
      size: size(value)
    });
}
function assertEndOffset(value, start, end) {
  if (typeof start === "number" && typeof end === "number" && size(value) !== end - start) {
    throw new SliceOffsetOutOfBoundsError({
      offset: end,
      position: "end",
      size: size(value)
    });
  }
}
function sliceBytes(value_, start, end, { strict } = {}) {
  assertStartOffset(value_, start);
  const value = value_.slice(start, end);
  if (strict)
    assertEndOffset(value, start, end);
  return value;
}
function sliceHex(value_, start, end, { strict } = {}) {
  assertStartOffset(value_, start);
  const value = `0x${value_.replace("0x", "").slice((start ?? 0) * 2, (end ?? value_.length) * 2)}`;
  if (strict)
    assertEndOffset(value, start, end);
  return value;
}
var init_slice = __esm({
  "node_modules/viem/_esm/utils/data/slice.js"() {
    init_data();
    init_isHex();
    init_size();
  }
});

// node_modules/viem/_esm/utils/regex.js
var arrayRegex, bytesRegex, integerRegex;
var init_regex = __esm({
  "node_modules/viem/_esm/utils/regex.js"() {
    arrayRegex = /^(.*)\[([0-9]*)\]$/;
    bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
    integerRegex = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
  }
});

// node_modules/viem/_esm/utils/abi/encodeAbiParameters.js
function encodeAbiParameters(params, values) {
  if (params.length !== values.length)
    throw new AbiEncodingLengthMismatchError({
      expectedLength: params.length,
      givenLength: values.length
    });
  const preparedParams = prepareParams({
    params,
    values
  });
  return encodeParams(preparedParams);
}
function prepareParams({ params, values }) {
  const preparedParams = [];
  for (let i = 0; i < params.length; i++) {
    preparedParams.push(prepareParam({ param: params[i], value: values[i] }));
  }
  return preparedParams;
}
function prepareParam({ param, value }) {
  const arrayComponents = getArrayComponents(param.type);
  if (arrayComponents) {
    const [length, type] = arrayComponents;
    return encodeArray(value, { length, param: { ...param, type } });
  }
  if (param.type === "tuple") {
    return encodeTuple(value, {
      param
    });
  }
  if (param.type === "address") {
    return encodeAddress(value);
  }
  if (param.type === "bool") {
    return encodeBool(value);
  }
  if (param.type.startsWith("uint") || param.type.startsWith("int")) {
    const signed = param.type.startsWith("int");
    const [, , size2 = "256"] = integerRegex.exec(param.type) ?? [];
    return encodeNumber(value, {
      signed,
      size: Number(size2)
    });
  }
  if (param.type.startsWith("bytes")) {
    return encodeBytes(value, { param });
  }
  if (param.type === "string") {
    return encodeString(value);
  }
  throw new InvalidAbiEncodingTypeError(param.type, {
    docsPath: "/docs/contract/encodeAbiParameters"
  });
}
function encodeParams(preparedParams) {
  let staticSize = 0;
  for (let i = 0; i < preparedParams.length; i++) {
    const { dynamic, encoded } = preparedParams[i];
    if (dynamic)
      staticSize += 32;
    else
      staticSize += size(encoded);
  }
  const staticParams = [];
  const dynamicParams = [];
  let dynamicSize = 0;
  for (let i = 0; i < preparedParams.length; i++) {
    const { dynamic, encoded } = preparedParams[i];
    if (dynamic) {
      staticParams.push(numberToHex(staticSize + dynamicSize, { size: 32 }));
      dynamicParams.push(encoded);
      dynamicSize += size(encoded);
    } else {
      staticParams.push(encoded);
    }
  }
  return concatHex([...staticParams, ...dynamicParams]);
}
function encodeAddress(value) {
  if (!isAddress(value))
    throw new InvalidAddressError({ address: value });
  return { dynamic: false, encoded: padHex(value.toLowerCase()) };
}
function encodeArray(value, { length, param }) {
  const dynamic = length === null;
  if (!Array.isArray(value))
    throw new InvalidArrayError(value);
  if (!dynamic && value.length !== length)
    throw new AbiEncodingArrayLengthMismatchError({
      expectedLength: length,
      givenLength: value.length,
      type: `${param.type}[${length}]`
    });
  let dynamicChild = value.length === 0 && isDynamicType(param);
  const preparedParams = [];
  for (let i = 0; i < value.length; i++) {
    const preparedParam = prepareParam({ param, value: value[i] });
    if (preparedParam.dynamic)
      dynamicChild = true;
    preparedParams.push(preparedParam);
  }
  if (dynamic || dynamicChild) {
    const data = encodeParams(preparedParams);
    if (dynamic) {
      const length2 = numberToHex(preparedParams.length, { size: 32 });
      return {
        dynamic: true,
        encoded: concatHex([length2, data])
      };
    }
    if (dynamicChild)
      return { dynamic: true, encoded: data };
  }
  return {
    dynamic: false,
    encoded: concatHex(preparedParams.map(({ encoded }) => encoded))
  };
}
function encodeBytes(value, { param }) {
  const [, paramSize] = param.type.split("bytes");
  const bytesSize = size(value);
  if (!paramSize) {
    let value_ = value;
    if (bytesSize % 32 !== 0)
      value_ = padHex(value_, {
        dir: "right",
        size: Math.ceil((value.length - 2) / 2 / 32) * 32
      });
    return {
      dynamic: true,
      encoded: concatHex([
        padHex(numberToHex(bytesSize, { size: 32 })),
        value_
      ])
    };
  }
  if (bytesSize !== Number.parseInt(paramSize, 10))
    throw new AbiEncodingBytesSizeMismatchError({
      expectedSize: Number.parseInt(paramSize, 10),
      value
    });
  return { dynamic: false, encoded: padHex(value, { dir: "right" }) };
}
function encodeBool(value) {
  if (typeof value !== "boolean")
    throw new BaseError(`Invalid boolean value: "${value}" (type: ${typeof value}). Expected: \`true\` or \`false\`.`);
  return { dynamic: false, encoded: padHex(boolToHex(value)) };
}
function encodeNumber(value, { signed, size: size2 = 256 }) {
  if (typeof size2 === "number") {
    const max = 2n ** (BigInt(size2) - (signed ? 1n : 0n)) - 1n;
    const min = signed ? -max - 1n : 0n;
    if (value > max || value < min)
      throw new IntegerOutOfRangeError({
        max: max.toString(),
        min: min.toString(),
        signed,
        size: size2 / 8,
        value: value.toString()
      });
  }
  return {
    dynamic: false,
    encoded: numberToHex(value, {
      size: 32,
      signed
    })
  };
}
function encodeString(value) {
  const hexValue = stringToHex(value);
  const partsLength = Math.ceil(size(hexValue) / 32);
  const parts = [];
  for (let i = 0; i < partsLength; i++) {
    parts.push(padHex(slice(hexValue, i * 32, (i + 1) * 32), {
      dir: "right"
    }));
  }
  return {
    dynamic: true,
    encoded: concatHex([
      padHex(numberToHex(size(hexValue), { size: 32 })),
      ...parts
    ])
  };
}
function encodeTuple(value, { param }) {
  let dynamic = false;
  const preparedParams = [];
  for (let i = 0; i < param.components.length; i++) {
    const param_ = param.components[i];
    const index = Array.isArray(value) ? i : param_.name;
    const preparedParam = prepareParam({
      param: param_,
      value: value[index]
    });
    preparedParams.push(preparedParam);
    if (preparedParam.dynamic)
      dynamic = true;
  }
  return {
    dynamic,
    encoded: dynamic ? encodeParams(preparedParams) : concatHex(preparedParams.map(({ encoded }) => encoded))
  };
}
function getArrayComponents(type) {
  const matches = type.match(/^(.*)\[(\d+)?\]$/);
  return matches ? (
    // Return `null` if the array is dynamic.
    [matches[2] ? Number(matches[2]) : null, matches[1]]
  ) : void 0;
}
function isDynamicType(param) {
  const { type } = param;
  if (type === "string")
    return true;
  if (type === "bytes")
    return true;
  if (type.endsWith("[]"))
    return true;
  if (type === "tuple")
    return param.components.some(isDynamicType);
  const arrayComponents = getArrayComponents(type);
  if (arrayComponents)
    return isDynamicType({ ...param, type: arrayComponents[1] });
  return false;
}
var init_encodeAbiParameters = __esm({
  "node_modules/viem/_esm/utils/abi/encodeAbiParameters.js"() {
    init_abi();
    init_address();
    init_base();
    init_encoding();
    init_isAddress();
    init_concat();
    init_pad();
    init_size();
    init_slice();
    init_toHex();
    init_regex();
  }
});

// node_modules/viem/_esm/utils/abi/encodePacked.js
function encodePacked(types, values) {
  if (types.length !== values.length)
    throw new AbiEncodingLengthMismatchError({
      expectedLength: types.length,
      givenLength: values.length
    });
  const data = [];
  for (let i = 0; i < types.length; i++) {
    const type = types[i];
    const value = values[i];
    data.push(encode(type, value));
  }
  return concatHex(data);
}
function encode(type, value, isArray = false) {
  if (type === "address") {
    const address = value;
    if (!isAddress(address))
      throw new InvalidAddressError({ address });
    return pad(address.toLowerCase(), {
      size: isArray ? 32 : null
    });
  }
  if (type === "string")
    return stringToHex(value);
  if (type === "bytes")
    return value;
  if (type === "bool")
    return pad(boolToHex(value), { size: isArray ? 32 : 1 });
  const intMatch = type.match(integerRegex);
  if (intMatch) {
    const [_type, baseType, bits = "256"] = intMatch;
    const size2 = Number.parseInt(bits, 10) / 8;
    return numberToHex(value, {
      size: isArray ? 32 : size2,
      signed: baseType === "int"
    });
  }
  const bytesMatch = type.match(bytesRegex);
  if (bytesMatch) {
    const [_type, size2] = bytesMatch;
    if (Number.parseInt(size2, 10) !== (value.length - 2) / 2)
      throw new BytesSizeMismatchError({
        expectedSize: Number.parseInt(size2, 10),
        givenSize: (value.length - 2) / 2
      });
    return pad(value, { dir: "right", size: isArray ? 32 : null });
  }
  const arrayMatch = type.match(arrayRegex);
  if (arrayMatch && Array.isArray(value)) {
    const [_type, childType] = arrayMatch;
    const data = [];
    for (let i = 0; i < value.length; i++) {
      data.push(encode(childType, value[i], true));
    }
    if (data.length === 0)
      return "0x";
    return concatHex(data);
  }
  throw new UnsupportedPackedAbiType(type);
}
var init_encodePacked = __esm({
  "node_modules/viem/_esm/utils/abi/encodePacked.js"() {
    init_abi();
    init_address();
    init_isAddress();
    init_concat();
    init_pad();
    init_toHex();
    init_regex();
  }
});

// node_modules/viem/_esm/index.js
var init_esm = __esm({
  "node_modules/viem/_esm/index.js"() {
    init_encodeAbiParameters();
    init_encodePacked();
    init_keccak256();
  }
});

// node_modules/@okxweb3/app-x402-core/dist/esm/chunk-CKXR4QVD.mjs
function getSubscriptionExtra(req) {
  const extra = req.extra;
  if (!extra || !extra.contracts || !extra.plan || !extra.domain) {
    throw new Error(
      "subscription codec: PaymentRequirements.extra is missing contracts/plan/domain"
    );
  }
  return extra;
}
function defaultPermitAmount(extra) {
  const initialChargePeriods = BigInt(extra.initialCharge?.periodCount ?? 0);
  const initialChargeAmount = BigInt(extra.initialCharge?.totalAmount ?? "0");
  const remainingPeriods = BigInt(extra.maxPeriods) - initialChargePeriods;
  const remainingAmount = remainingPeriods > 0n ? remainingPeriods * BigInt(extra.amountPerPeriod) : 0n;
  return (initialChargeAmount + remainingAmount).toString();
}
function buildPermit2TypedData(input) {
  const extra = getSubscriptionExtra(input.selected);
  const amount = input.amount ?? defaultPermitAmount(extra);
  const chainId = parseChainIdFromNetwork(input.selected.network);
  return {
    domain: {
      name: "Permit2",
      chainId,
      verifyingContract: extra.contracts.permit2
    },
    types: PERMIT2_TYPES,
    primaryType: "PermitSingle",
    message: {
      details: {
        token: input.selected.asset,
        amount,
        expiration: input.expiration,
        nonce: input.nonce
      },
      spender: extra.contracts.subscription,
      sigDeadline: input.sigDeadline
    }
  };
}
function computePermitSingleStructHash(permit) {
  const PERMIT_DETAILS_TYPEHASH = keccak256(
    new TextEncoder().encode(
      "PermitDetails(address token,uint160 amount,uint48 expiration,uint48 nonce)"
    )
  );
  const detailsHash = keccak256(
    encodeAbiParameters(
      [
        { type: "bytes32" },
        { type: "address" },
        { type: "uint160" },
        { type: "uint48" },
        { type: "uint48" }
      ],
      [
        PERMIT_DETAILS_TYPEHASH,
        permit.details.token,
        BigInt(permit.details.amount),
        Number(permit.details.expiration),
        Number(permit.details.nonce)
      ]
    )
  );
  const PERMIT_SINGLE_TYPEHASH = keccak256(
    new TextEncoder().encode(
      "PermitSingle(PermitDetails details,address spender,uint256 sigDeadline)PermitDetails(address token,uint160 amount,uint48 expiration,uint48 nonce)"
    )
  );
  return keccak256(
    encodeAbiParameters(
      [{ type: "bytes32" }, { type: "bytes32" }, { type: "address" }, { type: "uint256" }],
      [PERMIT_SINGLE_TYPEHASH, detailsHash, permit.spender, BigInt(permit.sigDeadline)]
    )
  );
}
function buildSubscriptionTermsTypedData(input) {
  const extra = getSubscriptionExtra(input.selected);
  const domain = input.domain ?? extra.domain;
  let changeEffectiveAt = 0;
  if (input.changeFrom?.effectiveAt === "immediate") changeEffectiveAt = 1;
  else if (input.changeFrom?.effectiveAt === "period_end") changeEffectiveAt = 2;
  const message = {
    payer: input.payer,
    merchant: input.selected.payTo,
    facilitator: extra.facilitator,
    token: input.selected.asset,
    amountPerPeriod: extra.amountPerPeriod,
    periodSec: extra.periodSec,
    maxPeriods: extra.maxPeriods,
    startAt: input.startAt,
    initialChargePeriods: extra.initialCharge?.periodCount ?? 0,
    initialChargeAmount: extra.initialCharge?.totalAmount ?? "0",
    termsDeadline: input.termsDeadline,
    permitHash: input.permitHash,
    salt: input.salt,
    planTier: extra.plan.tier,
    changeFromSubId: input.changeFrom?.fromSubId ?? ZERO_BYTES32,
    changeEffectiveAt,
    periodMode: extra.periodMode ?? 0
  };
  return {
    domain,
    types: SUBSCRIPTION_TERMS_TYPES,
    primaryType: "SubscriptionTerms",
    message
  };
}
function buildCancelAuthTypedData(input) {
  return {
    domain: input.domain,
    types: CANCEL_AUTH_TYPES,
    primaryType: "CancelAuth",
    message: {
      action: 0,
      subId: input.subId,
      initiator: CANCEL_INITIATOR_TO_ENUM[input.initiator],
      nonce: input.nonce,
      deadline: input.deadline
    }
  };
}
function buildPendingChangeCancelAuthTypedData(input) {
  return {
    domain: input.domain,
    types: PENDING_CHANGE_CANCEL_AUTH_TYPES,
    primaryType: "PendingChangeCancelAuth",
    message: {
      subId: input.subId,
      newSubId: input.newSubId,
      nonce: input.nonce,
      deadline: input.deadline
    }
  };
}
function parseChainIdFromNetwork(network) {
  const parts = network.split(":");
  if (parts.length !== 2 || parts[0] !== "eip155") {
    throw new Error(`parseChainIdFromNetwork: expected "eip155:<chainId>", got "${network}"`);
  }
  const id = Number(parts[1]);
  if (!Number.isInteger(id) || id <= 0) {
    throw new Error(`parseChainIdFromNetwork: invalid chainId "${parts[1]}"`);
  }
  return id;
}
function base64EncodeUtf8(value) {
  if (hasBuffer) return Buffer.from(value, "utf8").toString("base64");
  const binary = unescape(encodeURIComponent(value));
  return globalThis.btoa(binary);
}
function base64DecodeUtf8(value) {
  if (hasBuffer) return Buffer.from(value, "base64").toString("utf8");
  const binary = globalThis.atob(value);
  return decodeURIComponent(escape(binary));
}
function parsePaymentRequired(headerValue) {
  const json = base64DecodeUtf8(headerValue);
  const parsed = JSON.parse(json);
  if (!parsed || !Array.isArray(parsed.accepts)) {
    throw new Error("parsePaymentRequired: missing or invalid `accepts` array");
  }
  return parsed.accepts;
}
function encodePaymentPayload(input) {
  const payload = {
    x402Version: 2,
    accepted: input.selected,
    payload: {
      permitSingle: input.permitSingle,
      permitSingleSignature: input.permitSingleSignature,
      terms: input.terms,
      termsSignature: input.termsSignature
    }
  };
  return base64EncodeUtf8(JSON.stringify(payload));
}
function decodePaymentPayload(headerValue) {
  const json = base64DecodeUtf8(headerValue);
  return JSON.parse(json);
}
function asSubscriptionPaymentInner(payload) {
  const inner = payload.payload;
  if (!inner || !inner.permitSingle || !inner.terms || !inner.permitSingleSignature || !inner.termsSignature) {
    throw new Error(
      "asSubscriptionPaymentInner: payload.payload is missing required permitSingle/terms fields"
    );
  }
  return inner;
}
var ZERO_BYTES32, PERMIT2_TYPES, SUBSCRIPTION_TERMS_TYPES, CANCEL_AUTH_TYPES, PENDING_CHANGE_CANCEL_AUTH_TYPES, CANCEL_INITIATOR_TO_ENUM, hasBuffer;
var init_chunk_CKXR4QVD = __esm({
  "node_modules/@okxweb3/app-x402-core/dist/esm/chunk-CKXR4QVD.mjs"() {
    init_esm();
    ZERO_BYTES32 = `0x${"0".repeat(64)}`;
    PERMIT2_TYPES = {
      PermitSingle: [
        { name: "details", type: "PermitDetails" },
        { name: "spender", type: "address" },
        { name: "sigDeadline", type: "uint256" }
      ],
      PermitDetails: [
        { name: "token", type: "address" },
        { name: "amount", type: "uint160" },
        { name: "expiration", type: "uint48" },
        { name: "nonce", type: "uint48" }
      ]
    };
    SUBSCRIPTION_TERMS_TYPES = {
      SubscriptionTerms: [
        { name: "payer", type: "address" },
        { name: "merchant", type: "address" },
        { name: "facilitator", type: "address" },
        { name: "token", type: "address" },
        { name: "amountPerPeriod", type: "uint160" },
        { name: "periodSec", type: "uint64" },
        { name: "maxPeriods", type: "uint32" },
        { name: "startAt", type: "uint64" },
        { name: "initialChargePeriods", type: "uint32" },
        { name: "initialChargeAmount", type: "uint160" },
        { name: "termsDeadline", type: "uint64" },
        { name: "permitHash", type: "bytes32" },
        { name: "salt", type: "bytes32" },
        { name: "planTier", type: "uint8" },
        { name: "changeFromSubId", type: "bytes32" },
        { name: "changeEffectiveAt", type: "uint8" },
        { name: "periodMode", type: "uint8" }
      ]
    };
    CANCEL_AUTH_TYPES = {
      CancelAuth: [
        { name: "action", type: "uint8" },
        { name: "subId", type: "bytes32" },
        { name: "initiator", type: "uint8" },
        { name: "nonce", type: "bytes32" },
        { name: "deadline", type: "uint64" }
      ]
    };
    PENDING_CHANGE_CANCEL_AUTH_TYPES = {
      PendingChangeCancelAuth: [
        { name: "subId", type: "bytes32" },
        { name: "newSubId", type: "bytes32" },
        { name: "nonce", type: "bytes32" },
        { name: "deadline", type: "uint64" }
      ]
    };
    CANCEL_INITIATOR_TO_ENUM = {
      payer: 0,
      merchant: 1
    };
    hasBuffer = typeof Buffer !== "undefined";
  }
});

// node_modules/@okxweb3/app-x402-core/dist/esm/subscription/index.mjs
var subscription_exports = {};
__export(subscription_exports, {
  CANCEL_AUTH_TYPES: () => CANCEL_AUTH_TYPES,
  ChargeError: () => ChargeError,
  ChargeErrorCode: () => ChargeErrorCode,
  ErrorCode: () => ErrorCode,
  InMemoryStore: () => InMemoryStore,
  PENDING_CHANGE_CANCEL_AUTH_TYPES: () => PENDING_CHANGE_CANCEL_AUTH_TYPES,
  PERMIT2_TYPES: () => PERMIT2_TYPES,
  SUBSCRIPTION_TERMS_TYPES: () => SUBSCRIPTION_TERMS_TYPES,
  SubscriptionClient: () => SubscriptionClient,
  ZERO_BYTES32: () => ZERO_BYTES32,
  addCalendarMonths: () => addCalendarMonths,
  asSubscriptionPaymentInner: () => asSubscriptionPaymentInner,
  base64DecodeUtf8: () => base64DecodeUtf8,
  base64EncodeUtf8: () => base64EncodeUtf8,
  buildAccessProofMessage: () => buildAccessProofMessage,
  buildCancelAuthTypedData: () => buildCancelAuthTypedData,
  buildPendingChangeCancelAuthTypedData: () => buildPendingChangeCancelAuthTypedData,
  buildPermit2TypedData: () => buildPermit2TypedData,
  buildSubscriptionTermsTypedData: () => buildSubscriptionTermsTypedData,
  computeElapsedPeriods: () => computeElapsedPeriods,
  computePermitSingleStructHash: () => computePermitSingleStructHash,
  decodeAccessProof: () => decodeAccessProof,
  decodePaymentPayload: () => decodePaymentPayload,
  elapsedCalendarMonths: () => elapsedCalendarMonths,
  encodeAccessProof: () => encodeAccessProof,
  encodePaymentPayload: () => encodePaymentPayload,
  hasSubscriptionCapability: () => hasSubscriptionCapability,
  parseChainIdFromNetwork: () => parseChainIdFromNetwork,
  parsePaymentRequired: () => parsePaymentRequired,
  supportsSubscription: () => supportsSubscription,
  verifyTermsBindRequirements: () => verifyTermsBindRequirements
});
function hasSubscriptionCapability(scheme) {
  return typeof scheme === "object" && scheme !== null && "verifyAccess" in scheme && "settlementMode" in scheme && scheme.settlementMode === "pre";
}
function addrEq(a, b) {
  return a.toLowerCase() === b.toLowerCase();
}
function hexEq(a, b) {
  return !!a && a.toLowerCase() === b.toLowerCase();
}
function verifyTermsBindRequirements(terms, requirements) {
  const extra = requirements.extra ?? {};
  if (!extra.plan || extra.amountPerPeriod === void 0 || extra.facilitator === void 0) {
    return ErrorCode.TermsBindingInvalid;
  }
  if (!addrEq(terms.merchant, requirements.payTo)) return ErrorCode.MerchantMismatch;
  if (!addrEq(terms.token, requirements.asset)) return ErrorCode.TermsBindingInvalid;
  if (!addrEq(terms.facilitator, extra.facilitator)) return ErrorCode.TermsBindingInvalid;
  if (terms.amountPerPeriod !== extra.amountPerPeriod) return ErrorCode.TermsBindingInvalid;
  if (terms.periodSec !== extra.periodSec) return ErrorCode.TermsBindingInvalid;
  if (terms.maxPeriods !== extra.maxPeriods) return ErrorCode.TermsBindingInvalid;
  if (terms.periodMode !== (extra.periodMode ?? 0)) return ErrorCode.TermsBindingInvalid;
  if (terms.planTier !== extra.plan.tier) return ErrorCode.TermsBindingInvalid;
  if (extra.startAt !== void 0 && terms.startAt !== extra.startAt) {
    return ErrorCode.TermsBindingInvalid;
  }
  const expectedInitPeriods = extra.initialCharge?.periodCount ?? 0;
  const expectedInitAmount = extra.initialCharge?.totalAmount ?? "0";
  if (terms.initialChargePeriods !== expectedInitPeriods) return ErrorCode.TermsBindingInvalid;
  if (terms.initialChargeAmount !== expectedInitAmount) return ErrorCode.TermsBindingInvalid;
  if (extra.changeFrom) {
    if (!hexEq(terms.changeFromSubId, extra.changeFrom.fromSubId)) {
      return ErrorCode.TermsBindingInvalid;
    }
    const expectedEff = extra.changeFrom.effectiveAt === "immediate" ? 1 : extra.changeFrom.effectiveAt === "period_end" ? 2 : 0;
    if (terms.changeEffectiveAt !== expectedEff) return ErrorCode.TermsBindingInvalid;
  } else {
    if (terms.changeFromSubId !== ZERO_BYTES32) return ErrorCode.TermsBindingInvalid;
    if (terms.changeEffectiveAt !== 0) return ErrorCode.TermsBindingInvalid;
  }
  return null;
}
function computeElapsedPeriods(periodMode, startAt, billingAnchorAt, periodSec, nowSec) {
  if (nowSec < startAt) return 0;
  if (periodMode === PERIOD_MODE_CALENDAR_MONTH) {
    const anchor = billingAnchorAt > 0 ? billingAnchorAt : startAt;
    const startOffset = elapsedCalendarMonths(anchor, startAt);
    return elapsedCalendarMonths(anchor, nowSec) - startOffset + 1;
  }
  if (periodSec <= 0) return 0;
  return Math.floor((nowSec - startAt) / periodSec) + 1;
}
function elapsedCalendarMonths(anchorSec, tsSec) {
  if (tsSec <= anchorSec) return 0;
  const anchor = new Date(anchorSec * 1e3);
  const ts = new Date(tsSec * 1e3);
  let diff = (ts.getUTCFullYear() - anchor.getUTCFullYear()) * 12 + (ts.getUTCMonth() - anchor.getUTCMonth());
  if (diff < 0) return 0;
  if (addCalendarMonths(anchorSec, diff) > tsSec) diff--;
  return Math.max(diff, 0);
}
function addCalendarMonths(anchorSec, n) {
  const anchor = new Date(anchorSec * 1e3);
  const targetYear = anchor.getUTCFullYear() + Math.floor((anchor.getUTCMonth() + n) / 12);
  const targetMonth = ((anchor.getUTCMonth() + n) % 12 + 12) % 12;
  const daysInTargetMonth = new Date(Date.UTC(targetYear, targetMonth + 1, 0)).getUTCDate();
  const day = Math.min(anchor.getUTCDate(), daysInTargetMonth);
  const ts = Date.UTC(
    targetYear,
    targetMonth,
    day,
    anchor.getUTCHours(),
    anchor.getUTCMinutes(),
    anchor.getUTCSeconds(),
    anchor.getUTCMilliseconds()
  );
  return Math.floor(ts / 1e3);
}
function buildAccessProofMessage(input) {
  return keccak256(
    encodePacked(
      ["bytes32", "address", "uint256"],
      [input.subId, input.payer, BigInt(input.timestamp)]
    )
  );
}
function encodeAccessProof(proof) {
  return base64EncodeUtf8(JSON.stringify(proof));
}
function decodeAccessProof(headerValue) {
  const json = base64DecodeUtf8(headerValue);
  const parsed = JSON.parse(json);
  if (!parsed || parsed.kind !== "subscription-id") {
    throw new Error(`decodeAccessProof: expected kind="subscription-id", got "${parsed?.kind}"`);
  }
  return parsed;
}
function supportsSubscription(client) {
  const c = client;
  return typeof c.subscribe === "function" && typeof c.changeSubscription === "function" && typeof c.cancelSubscription === "function" && typeof c.cancelPendingChange === "function" && typeof c.chargeSubscription === "function" && typeof c.finalizeExpired === "function" && typeof c.getCharges === "function" && typeof c.getPendingChange === "function" && typeof c.getSubscription === "function";
}
var ErrorCode, ChargeErrorCode, ChargeError, InMemoryStore, SubscriptionClient, PERIOD_MODE_CALENDAR_MONTH;
var init_subscription = __esm({
  "node_modules/@okxweb3/app-x402-core/dist/esm/subscription/index.mjs"() {
    init_chunk_CKXR4QVD();
    init_esm();
    ErrorCode = {
      // subscribe / change
      TermsBindingInvalid: "terms_binding_invalid",
      AllowanceInsufficient: "allowance_insufficient",
      AllowanceExpired: "allowance_expired",
      // charge
      PeriodNotDue: "period_not_due",
      InsufficientBalance: "insufficient_balance",
      // charge / cancel / access
      SubscriptionNotActive: "subscription_not_active",
      /**
       * SDK-local code. Surfaced by `verifyAccess` when local period math
       * yields `currentCalculatePeriod === 0` — subscription exists but
       * `nowSec < startAt`, i.e. has not yet entered its first chargeable
       * period.
       */
      SubscriptionNotYetActive: "subscription_not_yet_active",
      UnauthorizedCaller: "unauthorized_caller",
      // cancel
      CancelSignatureInvalid: "cancel_signature_invalid",
      CancelNonceUsed: "cancel_nonce_used",
      // change
      TierSame: "tier_same",
      ChangeEffectiveAtMismatch: "change_effective_at_mismatch",
      MerchantMismatch: "merchant_mismatch",
      PayerMismatch: "payer_mismatch",
      PendingChangeExists: "pending_change_exists",
      SubNotActiveForChange: "sub_not_active_for_change",
      // cancel-pending-change
      NoPendingChange: "no_pending_change",
      // all writes
      ConfirmationTimeout: "confirmation_timeout"
    };
    ChargeErrorCode = {
      PeriodNotDue: ErrorCode.PeriodNotDue,
      SubscriptionNotActive: ErrorCode.SubscriptionNotActive,
      InsufficientBalance: ErrorCode.InsufficientBalance,
      AllowanceExpired: ErrorCode.AllowanceExpired,
      UnauthorizedCaller: ErrorCode.UnauthorizedCaller,
      ConfirmationTimeout: ErrorCode.ConfirmationTimeout
    };
    ChargeError = class extends Error {
      constructor(code, subId, txHash) {
        super(`charge failed: ${code} (sub=${subId})`);
        this.name = "ChargeError";
        this.code = code;
        this.subId = subId;
        this.txHash = txHash;
      }
    };
    InMemoryStore = class {
      constructor() {
        this.data = /* @__PURE__ */ new Map();
      }
      async get(subId) {
        const sub = this.data.get(subId);
        return sub ? { ...sub } : null;
      }
      async put(sub) {
        this.data.set(sub.subId, { ...sub });
      }
      async delete(subId) {
        this.data.delete(subId);
      }
      /**
       * Return all subscriptions, ordered by `startAt` ascending. Not part of
       * the SubscriptionStore interface — admin/debug helper, not used by the
       * scheme. Production backends should expose paginated equivalents.
       */
      async list() {
        return Array.from(this.data.values()).map((s) => ({ ...s })).sort((a, b) => a.startAt - b.startAt);
      }
    };
    SubscriptionClient = class {
      constructor(config) {
        this.scheme = config.scheme;
        this.store = config.store;
      }
      /**
       * Run one charge period for a subscription. Throws `ChargeError` (one of 6
       * codes) on facilitator-side failure. Internally `scheme.charge` already
       * updates the store on success (and on `planChangeTriggered`); the client is
       * a pass-through.
       */
      async charge(subId) {
        return this.scheme.charge(subId);
      }
      /**
       * Seller-initiated cancel (e.g. ToS violation, fraud, business reason).
       *
       * The SDK does NOT hold the Seller's merchant private key; the Seller must
       * construct + sign a `CancelAuth` with `by=1 (MERCHANT)` outside and pass
       * it in. SDK runs verifyCancel (sanity check on the auth) then settleCancel
       * (facilitator + store mark canceled).
       *
       * Throws on either verify or settle failure.
       */
      async cancelBySeller(subId, auth, _reason) {
        const v = await this.scheme.verifyCancel(auth, subId);
        if (!v.ok) {
          throw new Error(`cancelBySeller.verify failed: ${v.error}`);
        }
        const r = await this.scheme.settleCancel(auth, subId);
        if (!r.success) {
          throw new Error(`cancelBySeller.settle failed: ${r.error}`);
        }
      }
      /**
       * Re-sync a subscription from chain and repair the store. Use when:
       *   - `charge` threw `SubscriptionNotActive` (buyer may have cancelled
       *     directly via the facilitator or contract)
       *   - `charge` threw `ConfirmationTimeout` (network-level failure; chain
       *     may or may not have written)
       *   - periodic reconciliation
       *
       * If the synced sub is in `"changed"` state, the downstream `changedToSubId`
       * is also fetched and persisted, so the Seller's `dueIndex` can switch over
       * to the new sub without manual intervention.
       */
      async syncFromChain(subId) {
        const latest = await this.scheme.getSubscription(subId);
        if (!latest) return null;
        await this.store.put(latest);
        if (latest.state === "changed" && latest.changedToSubId) {
          const newSub = await this.scheme.getSubscription(latest.changedToSubId);
          if (newSub) await this.store.put(newSub);
        }
        return latest;
      }
      /**
       * Direct store read. Cheap; does NOT touch the chain. Use this for hot-path
       * lookups (e.g. resolving subId to plan/tier for business logic). For chain
       * state of record, use `syncFromChain`.
       */
      async getSubscription(subId) {
        return this.store.get(subId);
      }
    };
    PERIOD_MODE_CALENDAR_MONTH = 1;
  }
});

// node_modules/hono/dist/compose.js
var compose = (middleware, onError, onNotFound) => {
  return (context, next) => {
    let index = -1;
    return dispatch(0);
    async function dispatch(i) {
      if (i <= index) {
        throw new Error("next() called multiple times");
      }
      index = i;
      let res;
      let isError = false;
      let handler2;
      if (middleware[i]) {
        handler2 = middleware[i][0][0];
        context.req.routeIndex = i;
      } else {
        handler2 = i === middleware.length && next || void 0;
      }
      if (handler2) {
        try {
          res = await handler2(context, () => dispatch(i + 1));
        } catch (err) {
          if (err instanceof Error && onError) {
            context.error = err;
            res = await onError(err, context);
            isError = true;
          } else {
            throw err;
          }
        }
      } else {
        if (context.finalized === false && onNotFound) {
          res = await onNotFound(context);
        }
      }
      if (res && (context.finalized === false || isError)) {
        context.res = res;
      }
      return context;
    }
  };
};

// node_modules/hono/dist/request/constants.js
var GET_MATCH_RESULT = /* @__PURE__ */ Symbol();

// node_modules/hono/dist/utils/buffer.js
var bufferToFormData = (arrayBuffer, contentType) => {
  const response = new Response(arrayBuffer, {
    headers: {
      // Normalize the media type (case-insensitive) while keeping parameters like the boundary
      "Content-Type": contentType.replace(/^[^;]+/, (mediaType) => mediaType.toLowerCase())
    }
  });
  return response.formData();
};

// node_modules/hono/dist/utils/body.js
var isRawRequest = (request) => "headers" in request;
var parseBody = async (request, options = /* @__PURE__ */ Object.create(null)) => {
  const { all = false, dot = false } = options;
  const headers = isRawRequest(request) ? request.headers : request.raw.headers;
  const contentType = headers.get("Content-Type");
  const mediaType = contentType?.split(";")[0].trim().toLowerCase();
  if (mediaType === "multipart/form-data" || mediaType === "application/x-www-form-urlencoded") {
    return parseFormData(request, { all, dot });
  }
  return {};
};
async function parseFormData(request, options) {
  const headers = isRawRequest(request) ? request.headers : request.raw.headers;
  const arrayBuffer = await request.arrayBuffer();
  const formDataPromise = bufferToFormData(arrayBuffer, headers.get("Content-Type") || "");
  if (!isRawRequest(request)) {
    request.bodyCache.formData = formDataPromise;
  }
  const formData = await formDataPromise;
  if (formData) {
    return convertFormDataToBodyData(formData, options);
  }
  return {};
}
function convertFormDataToBodyData(formData, options) {
  const form = /* @__PURE__ */ Object.create(null);
  formData.forEach((value, key) => {
    const shouldParseAllValues = options.all || key.endsWith("[]");
    if (!shouldParseAllValues) {
      form[key] = value;
    } else {
      handleParsingAllValues(form, key, value);
    }
  });
  if (options.dot) {
    Object.entries(form).forEach(([key, value]) => {
      const shouldParseDotValues = key.includes(".");
      if (shouldParseDotValues) {
        handleParsingNestedValues(form, key, value);
        delete form[key];
      }
    });
  }
  return form;
}
var handleParsingAllValues = (form, key, value) => {
  if (form[key] !== void 0) {
    if (Array.isArray(form[key])) {
      ;
      form[key].push(value);
    } else {
      form[key] = [form[key], value];
    }
  } else {
    if (!key.endsWith("[]")) {
      form[key] = value;
    } else {
      form[key] = [value];
    }
  }
};
var handleParsingNestedValues = (form, key, value) => {
  if (/(?:^|\.)__proto__\./.test(key)) {
    return;
  }
  let nestedForm = form;
  const keys = key.split(".");
  keys.forEach((key2, index) => {
    if (index === keys.length - 1) {
      nestedForm[key2] = value;
    } else {
      if (!nestedForm[key2] || typeof nestedForm[key2] !== "object" || Array.isArray(nestedForm[key2]) || nestedForm[key2] instanceof File) {
        nestedForm[key2] = /* @__PURE__ */ Object.create(null);
      }
      nestedForm = nestedForm[key2];
    }
  });
};

// node_modules/hono/dist/utils/url.js
var splitPath = (path) => {
  const paths = path.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  return paths;
};
var splitRoutingPath = (routePath) => {
  const { groups, path } = extractGroupsFromPath(routePath);
  const paths = splitPath(path);
  return replaceGroupMarks(paths, groups);
};
var extractGroupsFromPath = (path) => {
  const groups = [];
  path = path.replace(/\{[^}]+\}/g, (match2, index) => {
    const mark = `@${index}`;
    groups.push([mark, match2]);
    return mark;
  });
  return { groups, path };
};
var replaceGroupMarks = (paths, groups) => {
  for (let i = groups.length - 1; i >= 0; i--) {
    const [mark] = groups[i];
    for (let j = paths.length - 1; j >= 0; j--) {
      if (paths[j].includes(mark)) {
        paths[j] = paths[j].replace(mark, groups[i][1]);
        break;
      }
    }
  }
  return paths;
};
var patternCache = {};
var getPattern = (label, next) => {
  if (label === "*") {
    return "*";
  }
  const match2 = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match2) {
    const cacheKey = `${label}#${next}`;
    if (!patternCache[cacheKey]) {
      if (match2[2]) {
        patternCache[cacheKey] = next && next[0] !== ":" && next[0] !== "*" ? [cacheKey, match2[1], new RegExp(`^${match2[2]}(?=/${next})`)] : [label, match2[1], new RegExp(`^${match2[2]}$`)];
      } else {
        patternCache[cacheKey] = [label, match2[1], true];
      }
    }
    return patternCache[cacheKey];
  }
  return null;
};
var tryDecode = (str, decoder) => {
  try {
    return decoder(str);
  } catch {
    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match2) => {
      try {
        return decoder(match2);
      } catch {
        return match2;
      }
    });
  }
};
var tryDecodeURI = (str) => tryDecode(str, decodeURI);
var getPath = (request) => {
  const url = request.url;
  const start = url.indexOf("/", url.indexOf(":") + 4);
  let i = start;
  for (; i < url.length; i++) {
    const charCode = url.charCodeAt(i);
    if (charCode === 37) {
      const queryIndex = url.indexOf("?", i);
      const hashIndex = url.indexOf("#", i);
      const end = queryIndex === -1 ? hashIndex === -1 ? void 0 : hashIndex : hashIndex === -1 ? queryIndex : Math.min(queryIndex, hashIndex);
      const path = url.slice(start, end);
      return tryDecodeURI(path.includes("%25") ? path.replace(/%25/g, "%2525") : path);
    } else if (charCode === 63 || charCode === 35) {
      break;
    }
  }
  return url.slice(start, i);
};
var getPathNoStrict = (request) => {
  const result = getPath(request);
  return result.length > 1 && result.at(-1) === "/" ? result.slice(0, -1) : result;
};
var mergePath = (base, sub, ...rest) => {
  if (rest.length) {
    sub = mergePath(sub, ...rest);
  }
  return `${base?.[0] === "/" ? "" : "/"}${base}${sub === "/" ? "" : `${base?.at(-1) === "/" ? "" : "/"}${sub?.[0] === "/" ? sub.slice(1) : sub}`}`;
};
var checkOptionalParameter = (path) => {
  if (path.charCodeAt(path.length - 1) !== 63 || !path.includes(":")) {
    return null;
  }
  const segments = path.split("/");
  const results = [];
  let basePath = "";
  segments.forEach((segment) => {
    if (segment !== "" && !/\:/.test(segment)) {
      basePath += "/" + segment;
    } else if (/\:/.test(segment)) {
      if (/\?/.test(segment)) {
        if (results.length === 0 && basePath === "") {
          results.push("/");
        } else {
          results.push(basePath);
        }
        const optionalSegment = segment.replace("?", "");
        basePath += "/" + optionalSegment;
        results.push(basePath);
      } else {
        basePath += "/" + segment;
      }
    }
  });
  return results.filter((v, i, a) => a.indexOf(v) === i);
};
var _decodeURI = (value) => {
  if (!/[%+]/.test(value)) {
    return value;
  }
  if (value.indexOf("+") !== -1) {
    value = value.replace(/\+/g, " ");
  }
  return value.indexOf("%") !== -1 ? tryDecode(value, decodeURIComponent_) : value;
};
var _getQueryParam = (url, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url.indexOf("?", 8);
    if (keyIndex2 === -1) {
      return void 0;
    }
    if (!url.startsWith(key, keyIndex2 + 1)) {
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key.length + 2;
        const endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(url.slice(valueIndex, endIndex === -1 ? void 0 : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) {
      return void 0;
    }
  }
  const results = {};
  encoded ??= /[%+]/.test(url);
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name = url.slice(
      keyIndex + 1,
      valueIndex === -1 ? nextKeyIndex === -1 ? void 0 : nextKeyIndex : valueIndex
    );
    if (encoded) {
      name = _decodeURI(name);
    }
    keyIndex = nextKeyIndex;
    if (name === "") {
      continue;
    }
    let value;
    if (valueIndex === -1) {
      value = "";
    } else {
      value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? void 0 : nextKeyIndex);
      if (encoded) {
        value = _decodeURI(value);
      }
    }
    if (multiple) {
      if (!(results[name] && Array.isArray(results[name]))) {
        results[name] = [];
      }
      ;
      results[name].push(value);
    } else {
      results[name] ??= value;
    }
  }
  return key ? results[key] : results;
};
var getQueryParam = _getQueryParam;
var getQueryParams = (url, key) => {
  return _getQueryParam(url, key, true);
};
var decodeURIComponent_ = decodeURIComponent;

// node_modules/hono/dist/request.js
var tryDecodeURIComponent = (str) => tryDecode(str, decodeURIComponent_);
var HonoRequest = class {
  /**
   * `.raw` can get the raw Request object.
   *
   * @see {@link https://hono.dev/docs/api/request#raw}
   *
   * @example
   * ```ts
   * // For Cloudflare Workers
   * app.post('/', async (c) => {
   *   const metadata = c.req.raw.cf?.hostMetadata?
   *   ...
   * })
   * ```
   */
  raw;
  #validatedData;
  // Short name of validatedData
  #matchResult;
  routeIndex = 0;
  /**
   * `.path` can get the pathname of the request.
   *
   * @see {@link https://hono.dev/docs/api/request#path}
   *
   * @example
   * ```ts
   * app.get('/about/me', (c) => {
   *   const pathname = c.req.path // `/about/me`
   * })
   * ```
   */
  path;
  bodyCache = {};
  constructor(request, path = "/", matchResult = [[]]) {
    this.raw = request;
    this.path = path;
    this.#matchResult = matchResult;
    this.#validatedData = {};
  }
  param(key) {
    return key ? this.#getDecodedParam(key) : this.#getAllDecodedParams();
  }
  #getDecodedParam(key) {
    const paramKey = this.#matchResult[0][this.routeIndex][1][key];
    const param = this.#getParamValue(paramKey);
    return param && /\%/.test(param) ? tryDecodeURIComponent(param) : param;
  }
  #getAllDecodedParams() {
    const decoded = {};
    const keys = Object.keys(this.#matchResult[0][this.routeIndex][1]);
    for (const key of keys) {
      const value = this.#getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
      if (value !== void 0) {
        decoded[key] = /\%/.test(value) ? tryDecodeURIComponent(value) : value;
      }
    }
    return decoded;
  }
  #getParamValue(paramKey) {
    return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name) {
      return this.raw.headers.get(name) ?? void 0;
    }
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  async parseBody(options) {
    return parseBody(this, options);
  }
  #cachedBody = (key) => {
    const { bodyCache, raw: raw2 } = this;
    const cachedBody = bodyCache[key];
    if (cachedBody) {
      return cachedBody;
    }
    const anyCachedKey = Object.keys(bodyCache)[0];
    if (anyCachedKey) {
      return bodyCache[anyCachedKey].then((body) => {
        if (anyCachedKey === "json") {
          body = JSON.stringify(body);
        }
        return new Response(body)[key]();
      });
    }
    return bodyCache[key] = raw2[key]();
  };
  /**
   * `.json()` can parse Request body of type `application/json`
   *
   * @see {@link https://hono.dev/docs/api/request#json}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.json()
   * })
   * ```
   */
  json() {
    return this.#cachedBody("text").then((text2) => JSON.parse(text2));
  }
  /**
   * `.text()` can parse Request body of type `text/plain`
   *
   * @see {@link https://hono.dev/docs/api/request#text}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.text()
   * })
   * ```
   */
  text() {
    return this.#cachedBody("text");
  }
  /**
   * `.arrayBuffer()` parse Request body as an `ArrayBuffer`
   *
   * @see {@link https://hono.dev/docs/api/request#arraybuffer}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.arrayBuffer()
   * })
   * ```
   */
  arrayBuffer() {
    return this.#cachedBody("arrayBuffer");
  }
  /**
   * `.bytes()` parses the request body as a `Uint8Array`.
   *
   * @see {@link https://hono.dev/docs/api/request#bytes}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.bytes()
   * })
   * ```
   */
  bytes() {
    return this.#cachedBody("arrayBuffer").then((buffer) => new Uint8Array(buffer));
  }
  /**
   * Parses the request body as a `Blob`.
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.blob();
   * });
   * ```
   * @see https://hono.dev/docs/api/request#blob
   */
  blob() {
    return this.#cachedBody("blob");
  }
  /**
   * Parses the request body as `FormData`.
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.formData();
   * });
   * ```
   * @see https://hono.dev/docs/api/request#formdata
   */
  formData() {
    return this.#cachedBody("formData");
  }
  /**
   * Adds validated data to the request.
   *
   * @param target - The target of the validation.
   * @param data - The validated data to add.
   */
  addValidatedData(target, data) {
    this.#validatedData[target] = data;
  }
  valid(target) {
    return this.#validatedData[target];
  }
  /**
   * `.url()` can get the request url strings.
   *
   * @see {@link https://hono.dev/docs/api/request#url}
   *
   * @example
   * ```ts
   * app.get('/about/me', (c) => {
   *   const url = c.req.url // `http://localhost:8787/about/me`
   *   ...
   * })
   * ```
   */
  get url() {
    return this.raw.url;
  }
  /**
   * `.method()` can get the method name of the request.
   *
   * @see {@link https://hono.dev/docs/api/request#method}
   *
   * @example
   * ```ts
   * app.get('/about/me', (c) => {
   *   const method = c.req.method // `GET`
   * })
   * ```
   */
  get method() {
    return this.raw.method;
  }
  get [GET_MATCH_RESULT]() {
    return this.#matchResult;
  }
  /**
   * `.matchedRoutes()` can return a matched route in the handler
   *
   * @deprecated
   *
   * Use matchedRoutes helper defined in "hono/route" instead.
   *
   * @see {@link https://hono.dev/docs/api/request#matchedroutes}
   *
   * @example
   * ```ts
   * app.use('*', async function logger(c, next) {
   *   await next()
   *   c.req.matchedRoutes.forEach(({ handler, method, path }, i) => {
   *     const name = handler.name || (handler.length < 2 ? '[handler]' : '[middleware]')
   *     console.log(
   *       method,
   *       ' ',
   *       path,
   *       ' '.repeat(Math.max(10 - path.length, 0)),
   *       name,
   *       i === c.req.routeIndex ? '<- respond from here' : ''
   *     )
   *   })
   * })
   * ```
   */
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, route]]) => route);
  }
  /**
   * `routePath()` can retrieve the path registered within the handler
   *
   * @deprecated
   *
   * Use routePath helper defined in "hono/route" instead.
   *
   * @see {@link https://hono.dev/docs/api/request#routepath}
   *
   * @example
   * ```ts
   * app.get('/posts/:id', (c) => {
   *   return c.json({ path: c.req.routePath })
   * })
   * ```
   */
  get routePath() {
    return this.#matchResult[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
};

// node_modules/hono/dist/utils/html.js
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var raw = (value, callbacks) => {
  const escapedString = new String(value);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
};
var resolveCallback = async (str, phase, preserveCallbacks, context, buffer) => {
  if (typeof str === "object" && !(str instanceof String)) {
    if (!(str instanceof Promise)) {
      str = str.toString();
    }
    if (str instanceof Promise) {
      str = await str;
    }
  }
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return Promise.resolve(str);
  }
  if (buffer) {
    buffer[0] += str;
  } else {
    buffer = [str];
  }
  const resStr = Promise.all(callbacks.map((c) => c({ phase, buffer, context }))).then(
    (res) => Promise.all(
      res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context, buffer))
    ).then(() => buffer[0])
  );
  if (preserveCallbacks) {
    return raw(await resStr, callbacks);
  } else {
    return resStr;
  }
};

// node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setDefaultContentType = (contentType, headers) => {
  return {
    "Content-Type": contentType,
    ...headers
  };
};
var createResponseInstance = (body, init) => new Response(body, init);
var Context = class {
  #rawRequest;
  #req;
  /**
   * `.env` can get bindings (environment variables, secrets, KV namespaces, D1 database, R2 bucket etc.) in Cloudflare Workers.
   *
   * @see {@link https://hono.dev/docs/api/context#env}
   *
   * @example
   * ```ts
   * // Environment object for Cloudflare Workers
   * app.get('*', async c => {
   *   const counter = c.env.COUNTER
   * })
   * ```
   */
  env = {};
  #var;
  finalized = false;
  /**
   * `.error` can get the error object from the middleware if the Handler throws an error.
   *
   * @see {@link https://hono.dev/docs/api/context#error}
   *
   * @example
   * ```ts
   * app.use('*', async (c, next) => {
   *   await next()
   *   if (c.error) {
   *     // do something...
   *   }
   * })
   * ```
   */
  error;
  #status;
  #executionCtx;
  #res;
  #layout;
  #renderer;
  #notFoundHandler;
  #preparedHeaders;
  #matchResult;
  #path;
  /**
   * Creates an instance of the Context class.
   *
   * @param req - The Request object.
   * @param options - Optional configuration options for the context.
   */
  constructor(req, options) {
    this.#rawRequest = req;
    if (options) {
      this.#executionCtx = options.executionCtx;
      this.env = options.env;
      this.#notFoundHandler = options.notFoundHandler;
      this.#path = options.path;
      this.#matchResult = options.matchResult;
    }
  }
  /**
   * `.req` is the instance of {@link HonoRequest}.
   */
  get req() {
    this.#req ??= new HonoRequest(this.#rawRequest, this.#path, this.#matchResult);
    return this.#req;
  }
  /**
   * @see {@link https://hono.dev/docs/api/context#event}
   * The FetchEvent associated with the current request.
   *
   * @throws Will throw an error if the context does not have a FetchEvent.
   */
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  /**
   * @see {@link https://hono.dev/docs/api/context#executionctx}
   * The ExecutionContext associated with the current request.
   *
   * @throws Will throw an error if the context does not have an ExecutionContext.
   */
  get executionCtx() {
    if (this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  /**
   * @see {@link https://hono.dev/docs/api/context#res}
   * The Response object for the current request.
   */
  get res() {
    return this.#res ||= createResponseInstance(null, {
      headers: this.#preparedHeaders ??= new Headers()
    });
  }
  /**
   * Sets the Response object for the current request.
   *
   * @param _res - The Response object to set.
   */
  set res(_res) {
    if (this.#res && _res) {
      _res = createResponseInstance(_res.body, _res);
      for (const [k, v] of this.#res.headers.entries()) {
        if (k === "content-type") {
          continue;
        }
        if (k === "set-cookie") {
          const cookies = this.#res.headers.getSetCookie();
          _res.headers.delete("set-cookie");
          for (const cookie of cookies) {
            _res.headers.append("set-cookie", cookie);
          }
        } else {
          _res.headers.set(k, v);
        }
      }
    }
    this.#res = _res;
    this.finalized = true;
  }
  /**
   * `.render()` can create a response within a layout.
   *
   * @see {@link https://hono.dev/docs/api/context#render-setrenderer}
   *
   * @example
   * ```ts
   * app.get('/', (c) => {
   *   return c.render('Hello!')
   * })
   * ```
   */
  render = (...args) => {
    this.#renderer ??= (content) => this.html(content);
    return this.#renderer(...args);
  };
  /**
   * Sets the layout for the response.
   *
   * @param layout - The layout to set.
   * @returns The layout function.
   */
  setLayout = (layout) => this.#layout = layout;
  /**
   * Gets the current layout for the response.
   *
   * @returns The current layout function.
   */
  getLayout = () => this.#layout;
  /**
   * `.setRenderer()` can set the layout in the custom middleware.
   *
   * @see {@link https://hono.dev/docs/api/context#render-setrenderer}
   *
   * @example
   * ```tsx
   * app.use('*', async (c, next) => {
   *   c.setRenderer((content) => {
   *     return c.html(
   *       <html>
   *         <body>
   *           <p>{content}</p>
   *         </body>
   *       </html>
   *     )
   *   })
   *   await next()
   * })
   * ```
   */
  setRenderer = (renderer) => {
    this.#renderer = renderer;
  };
  /**
   * `.header()` can set headers.
   *
   * @see {@link https://hono.dev/docs/api/context#header}
   *
   * @example
   * ```ts
   * app.get('/welcome', (c) => {
   *   // Set headers
   *   c.header('X-Message', 'Hello!')
   *   c.header('Content-Type', 'text/plain')
   *
   *   return c.body('Thank you for coming')
   * })
   * ```
   */
  header = (name, value, options) => {
    if (this.finalized) {
      this.#res = createResponseInstance(this.#res.body, this.#res);
    }
    const headers = this.#res ? this.#res.headers : this.#preparedHeaders ??= new Headers();
    if (value === void 0) {
      headers.delete(name);
    } else if (options?.append) {
      headers.append(name, value);
    } else {
      headers.set(name, value);
    }
  };
  status = (status) => {
    this.#status = status;
  };
  /**
   * `.set()` can set the value specified by the key.
   *
   * @see {@link https://hono.dev/docs/api/context#set-get}
   *
   * @example
   * ```ts
   * app.use('*', async (c, next) => {
   *   c.set('message', 'Hono is hot!!')
   *   await next()
   * })
   * ```
   */
  set = (key, value) => {
    this.#var ??= /* @__PURE__ */ new Map();
    this.#var.set(key, value);
  };
  /**
   * `.get()` can use the value specified by the key.
   *
   * @see {@link https://hono.dev/docs/api/context#set-get}
   *
   * @example
   * ```ts
   * app.get('/', (c) => {
   *   const message = c.get('message')
   *   return c.text(`The message is "${message}"`)
   * })
   * ```
   */
  get = (key) => {
    return this.#var ? this.#var.get(key) : void 0;
  };
  /**
   * `.var` can access the value of a variable.
   *
   * @see {@link https://hono.dev/docs/api/context#var}
   *
   * @example
   * ```ts
   * const result = c.var.client.oneMethod()
   * ```
   */
  // c.var.propName is a read-only
  get var() {
    if (!this.#var) {
      return {};
    }
    return Object.fromEntries(this.#var);
  }
  #newResponse(data, arg, headers) {
    const responseHeaders = this.#res ? new Headers(this.#res.headers) : this.#preparedHeaders ?? new Headers();
    if (typeof arg === "object" && "headers" in arg) {
      const argHeaders = arg.headers instanceof Headers ? arg.headers : new Headers(arg.headers);
      for (const [key, value] of argHeaders) {
        if (key.toLowerCase() === "set-cookie") {
          responseHeaders.append(key, value);
        } else {
          responseHeaders.set(key, value);
        }
      }
    }
    if (headers) {
      for (const [k, v] of Object.entries(headers)) {
        if (typeof v === "string") {
          responseHeaders.set(k, v);
        } else {
          responseHeaders.delete(k);
          for (const v2 of v) {
            responseHeaders.append(k, v2);
          }
        }
      }
    }
    const status = typeof arg === "number" ? arg : arg?.status ?? this.#status;
    return createResponseInstance(data, { status, headers: responseHeaders });
  }
  newResponse = (...args) => this.#newResponse(...args);
  /**
   * `.body()` can return the HTTP response.
   * You can set headers with `.header()` and set HTTP status code with `.status`.
   * This can also be set in `.text()`, `.json()` and so on.
   *
   * @see {@link https://hono.dev/docs/api/context#body}
   *
   * @example
   * ```ts
   * app.get('/welcome', (c) => {
   *   // Set headers
   *   c.header('X-Message', 'Hello!')
   *   c.header('Content-Type', 'text/plain')
   *   // Set HTTP status code
   *   c.status(201)
   *
   *   // Return the response body
   *   return c.body('Thank you for coming')
   * })
   * ```
   */
  body = (data, arg, headers) => this.#newResponse(data, arg, headers);
  /**
   * `.text()` can render text as `Content-Type:text/plain`.
   *
   * @see {@link https://hono.dev/docs/api/context#text}
   *
   * @example
   * ```ts
   * app.get('/say', (c) => {
   *   return c.text('Hello!')
   * })
   * ```
   */
  text = (text2, arg, headers) => {
    return !this.#preparedHeaders && !this.#status && !arg && !headers && !this.finalized ? new Response(text2) : this.#newResponse(
      text2,
      arg,
      setDefaultContentType(TEXT_PLAIN, headers)
    );
  };
  /**
   * `.json()` can render JSON as `Content-Type:application/json`.
   *
   * @see {@link https://hono.dev/docs/api/context#json}
   *
   * @example
   * ```ts
   * app.get('/api', (c) => {
   *   return c.json({ message: 'Hello!' })
   * })
   * ```
   */
  json = (object, arg, headers) => {
    return this.#newResponse(
      JSON.stringify(object),
      arg,
      setDefaultContentType("application/json", headers)
    );
  };
  html = (html, arg, headers) => {
    const res = (html2) => this.#newResponse(html2, arg, setDefaultContentType("text/html; charset=UTF-8", headers));
    return typeof html === "object" ? resolveCallback(html, HtmlEscapedCallbackPhase.Stringify, false, {}).then(res) : res(html);
  };
  /**
   * `.redirect()` can Redirect, default status code is 302.
   *
   * @see {@link https://hono.dev/docs/api/context#redirect}
   *
   * @example
   * ```ts
   * app.get('/redirect', (c) => {
   *   return c.redirect('/')
   * })
   * app.get('/redirect-permanently', (c) => {
   *   return c.redirect('/', 301)
   * })
   * ```
   */
  redirect = (location, status) => {
    const locationString = String(location);
    this.header(
      "Location",
      // Multibyes should be encoded
      // eslint-disable-next-line no-control-regex
      !/[^\x00-\xFF]/.test(locationString) ? locationString : encodeURI(locationString)
    );
    return this.newResponse(null, status ?? 302);
  };
  /**
   * `.notFound()` can return the Not Found Response.
   *
   * @see {@link https://hono.dev/docs/api/context#notfound}
   *
   * @example
   * ```ts
   * app.get('/notfound', (c) => {
   *   return c.notFound()
   * })
   * ```
   */
  notFound = () => {
    this.#notFoundHandler ??= () => createResponseInstance();
    return this.#notFoundHandler(this);
  };
};

// node_modules/hono/dist/router.js
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = class extends Error {
};

// node_modules/hono/dist/utils/constants.js
var COMPOSED_HANDLER = "__COMPOSED_HANDLER";

// node_modules/hono/dist/hono-base.js
var notFoundHandler = (c) => {
  return c.text("404 Not Found", 404);
};
var errorHandler = (err, c) => {
  if ("getResponse" in err) {
    const res = err.getResponse();
    return c.newResponse(res.body, res);
  }
  console.error(err);
  return c.text("Internal Server Error", 500);
};
var Hono = class _Hono {
  get;
  post;
  put;
  delete;
  options;
  patch;
  all;
  on;
  use;
  /*
    This class is like an abstract class and does not have a router.
    To use it, inherit the class and implement router in the constructor.
  */
  router;
  getPath;
  // Cannot use `#` because it requires visibility at JavaScript runtime.
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(options = {}) {
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.forEach((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          this.#path = args1;
        } else {
          this.#addRoute(method, this.#path, args1);
        }
        args.forEach((handler2) => {
          this.#addRoute(method, this.#path, handler2);
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      for (const p of [path].flat()) {
        this.#path = p;
        for (const m of [method].flat()) {
          handlers.map((handler2) => {
            this.#addRoute(m.toUpperCase(), this.#path, handler2);
          });
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        this.#path = arg1;
      } else {
        this.#path = "*";
        handlers.unshift(arg1);
      }
      handlers.forEach((handler2) => {
        this.#addRoute(METHOD_NAME_ALL, this.#path, handler2);
      });
      return this;
    };
    const { strict, ...optionsWithoutStrict } = options;
    Object.assign(this, optionsWithoutStrict);
    this.getPath = strict ?? true ? options.getPath ?? getPath : getPathNoStrict;
  }
  #clone() {
    const clone = new _Hono({
      router: this.router,
      getPath: this.getPath
    });
    clone.errorHandler = this.errorHandler;
    clone.#notFoundHandler = this.#notFoundHandler;
    clone.routes = this.routes;
    return clone;
  }
  #notFoundHandler = notFoundHandler;
  // Cannot use `#` because it requires visibility at JavaScript runtime.
  errorHandler = errorHandler;
  /**
   * `.route()` allows grouping other Hono instance in routes.
   *
   * @see {@link https://hono.dev/docs/api/routing#grouping}
   *
   * @param {string} path - base Path
   * @param {Hono} app - other Hono instance
   * @returns {Hono} routed Hono instance
   *
   * @example
   * ```ts
   * const app = new Hono()
   * const app2 = new Hono()
   *
   * app2.get("/user", (c) => c.text("user"))
   * app.route("/api", app2) // GET /api/user
   * ```
   */
  route(path, app2) {
    const subApp = this.basePath(path);
    app2.routes.map((r) => {
      let handler2;
      if (app2.errorHandler === errorHandler) {
        handler2 = r.handler;
      } else {
        handler2 = async (c, next) => (await compose([], app2.errorHandler)(c, () => r.handler(c, next))).res;
        handler2[COMPOSED_HANDLER] = r.handler;
      }
      subApp.#addRoute(r.method, r.path, handler2, r.basePath);
    });
    return this;
  }
  /**
   * `.basePath()` allows base paths to be specified.
   *
   * @see {@link https://hono.dev/docs/api/routing#base-path}
   *
   * @param {string} path - base Path
   * @returns {Hono} changed Hono instance
   *
   * @example
   * ```ts
   * const api = new Hono().basePath('/api')
   * ```
   */
  basePath(path) {
    const subApp = this.#clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  /**
   * `.onError()` handles an error and returns a customized Response.
   *
   * @see {@link https://hono.dev/docs/api/hono#error-handling}
   *
   * @param {ErrorHandler} handler - request Handler for error
   * @returns {Hono} changed Hono instance
   *
   * @example
   * ```ts
   * app.onError((err, c) => {
   *   console.error(`${err}`)
   *   return c.text('Custom Error Message', 500)
   * })
   * ```
   */
  onError = (handler2) => {
    this.errorHandler = handler2;
    return this;
  };
  /**
   * `.notFound()` allows you to customize a Not Found Response.
   *
   * @see {@link https://hono.dev/docs/api/hono#not-found}
   *
   * @param {NotFoundHandler} handler - request handler for not-found
   * @returns {Hono} changed Hono instance
   *
   * @example
   * ```ts
   * app.notFound((c) => {
   *   return c.text('Custom 404 Message', 404)
   * })
   * ```
   */
  notFound = (handler2) => {
    this.#notFoundHandler = handler2;
    return this;
  };
  /**
   * `.mount()` allows you to mount applications built with other frameworks into your Hono application.
   *
   * @see {@link https://hono.dev/docs/api/hono#mount}
   *
   * @param {string} path - base Path
   * @param {Function} applicationHandler - other Request Handler
   * @param {MountOptions} [options] - options of `.mount()`
   * @returns {Hono} mounted Hono instance
   *
   * @example
   * ```ts
   * import { Router as IttyRouter } from 'itty-router'
   * import { Hono } from 'hono'
   * // Create itty-router application
   * const ittyRouter = IttyRouter()
   * // GET /itty-router/hello
   * ittyRouter.get('/hello', () => new Response('Hello from itty-router'))
   *
   * const app = new Hono()
   * app.mount('/itty-router', ittyRouter.handle)
   * ```
   *
   * @example
   * ```ts
   * const app = new Hono()
   * // Send the request to another application without modification.
   * app.mount('/app', anotherApp, {
   *   replaceRequest: (req) => req,
   * })
   * ```
   */
  mount(path, applicationHandler, options) {
    let replaceRequest;
    let optionHandler;
    if (options) {
      if (typeof options === "function") {
        optionHandler = options;
      } else {
        optionHandler = options.optionHandler;
        if (options.replaceRequest === false) {
          replaceRequest = (request) => request;
        } else {
          replaceRequest = options.replaceRequest;
        }
      }
    }
    const getOptions = optionHandler ? (c) => {
      const options2 = optionHandler(c);
      return Array.isArray(options2) ? options2 : [options2];
    } : (c) => {
      let executionContext = void 0;
      try {
        executionContext = c.executionCtx;
      } catch {
      }
      return [c.env, executionContext];
    };
    replaceRequest ||= (() => {
      const mergedPath = mergePath(this._basePath, path);
      const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
      return (request) => {
        const url = new URL(request.url);
        url.pathname = this.getPath(request).slice(pathPrefixLength) || "/";
        return new Request(url, request);
      };
    })();
    const handler2 = async (c, next) => {
      const res = await applicationHandler(replaceRequest(c.req.raw), ...getOptions(c));
      if (res) {
        return res;
      }
      await next();
    };
    this.#addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler2);
    return this;
  }
  #addRoute(method, path, handler2, baseRoutePath) {
    method = method.toUpperCase();
    path = mergePath(this._basePath, path);
    const r = {
      basePath: baseRoutePath !== void 0 ? mergePath(this._basePath, baseRoutePath) : this._basePath,
      path,
      method,
      handler: handler2
    };
    this.router.add(method, path, [handler2, r]);
    this.routes.push(r);
  }
  #handleError(err, c) {
    if (err instanceof Error) {
      return this.errorHandler(err, c);
    }
    throw err;
  }
  #dispatch(request, executionCtx, env, method) {
    if (method === "HEAD") {
      return (async () => new Response(null, await this.#dispatch(request, executionCtx, env, "GET")))();
    }
    const path = this.getPath(request, { env });
    const matchResult = this.router.match(method, path);
    const c = new Context(request, {
      path,
      matchResult,
      env,
      executionCtx,
      notFoundHandler: this.#notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
          c.res = await this.#notFoundHandler(c);
        });
      } catch (err) {
        return this.#handleError(err, c);
      }
      return res instanceof Promise ? res.then(
        (resolved) => resolved || (c.finalized ? c.res : this.#notFoundHandler(c))
      ).catch((err) => this.#handleError(err, c)) : res ?? this.#notFoundHandler(c);
    }
    const composed = compose(matchResult[0], this.errorHandler, this.#notFoundHandler);
    return (async () => {
      try {
        const context = await composed(c);
        if (!context.finalized) {
          throw new Error(
            "Context is not finalized. Did you forget to return a Response object or `await next()`?"
          );
        }
        return context.res;
      } catch (err) {
        return this.#handleError(err, c);
      }
    })();
  }
  /**
   * `.fetch()` will be entry point of your app.
   *
   * @see {@link https://hono.dev/docs/api/hono#fetch}
   *
   * @param {Request} request - request Object of request
   * @param {Env} Env - env Object
   * @param {ExecutionContext} - context of execution
   * @returns {Response | Promise<Response>} response of request
   *
   */
  fetch = (request, ...rest) => {
    return this.#dispatch(request, rest[1], rest[0], request.method);
  };
  /**
   * `.request()` is a useful method for testing.
   * You can pass a URL or pathname to send a GET request.
   * app will return a Response object.
   * ```ts
   * test('GET /hello is ok', async () => {
   *   const res = await app.request('/hello')
   *   expect(res.status).toBe(200)
   * })
   * ```
   * @see https://hono.dev/docs/api/hono#request
   */
  request = (input, requestInit, Env, executionCtx) => {
    if (input instanceof Request) {
      return this.fetch(requestInit ? new Request(input, requestInit) : input, Env, executionCtx);
    }
    input = input.toString();
    return this.fetch(
      new Request(
        /^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`,
        requestInit
      ),
      Env,
      executionCtx
    );
  };
  /**
   * `.fire()` automatically adds a global fetch event listener.
   * This can be useful for environments that adhere to the Service Worker API, such as non-ES module Cloudflare Workers.
   * @deprecated
   * Use `fire` from `hono/service-worker` instead.
   * ```ts
   * import { Hono } from 'hono'
   * import { fire } from 'hono/service-worker'
   *
   * const app = new Hono()
   * // ...
   * fire(app)
   * ```
   * @see https://hono.dev/docs/api/hono#fire
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
   * @see https://developers.cloudflare.com/workers/reference/migrate-to-module-workers/
   */
  fire = () => {
    addEventListener("fetch", (event) => {
      event.respondWith(this.#dispatch(event.request, event, void 0, event.request.method));
    });
  };
};

// node_modules/hono/dist/router/reg-exp-router/matcher.js
var emptyParam = [];
function match(method, path) {
  const matchers = this.buildAllMatchers();
  const match2 = ((method2, path2) => {
    const matcher = matchers[method2] || matchers[METHOD_NAME_ALL];
    const staticMatch = matcher[2][path2];
    if (staticMatch) {
      return staticMatch;
    }
    const match3 = path2.match(matcher[0]);
    if (!match3) {
      return [[], emptyParam];
    }
    const index = match3.indexOf("", 1);
    return [matcher[1][index], match3];
  });
  this.match = match2;
  return match2(method, path);
}

// node_modules/hono/dist/router/reg-exp-router/node.js
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = /* @__PURE__ */ Symbol();
var regExpMetaChars = new Set(".\\+*[^]$()");
function compareKey(a, b) {
  if (a.length === 1) {
    return b.length === 1 ? a < b ? -1 : 1 : -1;
  }
  if (b.length === 1) {
    return 1;
  }
  if (a === ONLY_WILDCARD_REG_EXP_STR || a === TAIL_WILDCARD_REG_EXP_STR) {
    return 1;
  } else if (b === ONLY_WILDCARD_REG_EXP_STR || b === TAIL_WILDCARD_REG_EXP_STR) {
    return -1;
  }
  if (a === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a.length === b.length ? a < b ? -1 : 1 : b.length - a.length;
}
var Node = class _Node {
  #index;
  #varIndex;
  #children = /* @__PURE__ */ Object.create(null);
  insert(tokens, index, paramMap, context, pathErrorCheckOnly) {
    if (tokens.length === 0) {
      if (this.#index !== void 0) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      this.#index = index;
      return;
    }
    const [token, ...restTokens] = tokens;
    const pattern = token === "*" ? restTokens.length === 0 ? ["", "", ONLY_WILDCARD_REG_EXP_STR] : ["", "", LABEL_REG_EXP_STR] : token === "/*" ? ["", "", TAIL_WILDCARD_REG_EXP_STR] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let node;
    if (pattern) {
      const name = pattern[1];
      let regexpStr = pattern[2] || LABEL_REG_EXP_STR;
      if (name && pattern[2]) {
        if (regexpStr === ".*") {
          throw PATH_ERROR;
        }
        regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
        if (/\((?!\?:)/.test(regexpStr)) {
          throw PATH_ERROR;
        }
      }
      node = this.#children[regexpStr];
      if (!node) {
        if (Object.keys(this.#children).some(
          (k) => k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[regexpStr] = new _Node();
        if (name !== "") {
          node.#varIndex = context.varIndex++;
        }
      }
      if (!pathErrorCheckOnly && name !== "") {
        paramMap.push([name, node.#varIndex]);
      }
    } else {
      node = this.#children[token];
      if (!node) {
        if (Object.keys(this.#children).some(
          (k) => k.length > 1 && k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[token] = new _Node();
      }
    }
    node.insert(restTokens, index, paramMap, context, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.#children).sort(compareKey);
    const strList = childKeys.map((k) => {
      const c = this.#children[k];
      return (typeof c.#varIndex === "number" ? `(${k})@${c.#varIndex}` : regExpMetaChars.has(k) ? `\\${k}` : k) + c.buildRegExpStr();
    });
    if (typeof this.#index === "number") {
      strList.unshift(`#${this.#index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
};

// node_modules/hono/dist/router/reg-exp-router/trie.js
var Trie = class {
  #context = { varIndex: 0 };
  #root = new Node();
  insert(path, index, pathErrorCheckOnly) {
    const paramAssoc = [];
    const groups = [];
    for (let i = 0; ; ) {
      let replaced = false;
      path = path.replace(/\{[^}]+\}/g, (m) => {
        const mark = `@\\${i}`;
        groups[i] = [mark, m];
        i++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens = path.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i = groups.length - 1; i >= 0; i--) {
      const [mark] = groups[i];
      for (let j = tokens.length - 1; j >= 0; j--) {
        if (tokens[j].indexOf(mark) !== -1) {
          tokens[j] = tokens[j].replace(mark, groups[i][1]);
          break;
        }
      }
    }
    this.#root.insert(tokens, index, paramAssoc, this.#context, pathErrorCheckOnly);
    return paramAssoc;
  }
  buildRegExp() {
    let regexp = this.#root.buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_, handlerIndex, paramIndex) => {
      if (handlerIndex !== void 0) {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (paramIndex !== void 0) {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
};

// node_modules/hono/dist/router/reg-exp-router/router.js
var nullMatcher = [/^$/, [], /* @__PURE__ */ Object.create(null)];
var wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
function buildWildcardRegExp(path) {
  return wildcardRegExpCache[path] ??= new RegExp(
    path === "*" ? "" : `^${path.replace(
      /\/\*$|([.\\+*[^\]$()])/g,
      (_, metaChar) => metaChar ? `\\${metaChar}` : "(?:|/.*)"
    )}$`
  );
}
function clearWildcardRegExpCache() {
  wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
}
function buildMatcherFromPreprocessedRoutes(routes2) {
  const trie = new Trie();
  const handlerData = [];
  if (routes2.length === 0) {
    return nullMatcher;
  }
  const routesWithStaticPathFlag = routes2.map(
    (route) => [!/\*|\/:/.test(route[0]), ...route]
  ).sort(
    ([isStaticA, pathA], [isStaticB, pathB]) => isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length
  );
  const staticMap = /* @__PURE__ */ Object.create(null);
  for (let i = 0, j = -1, len = routesWithStaticPathFlag.length; i < len; i++) {
    const [pathErrorCheckOnly, path, handlers] = routesWithStaticPathFlag[i];
    if (pathErrorCheckOnly) {
      staticMap[path] = [handlers.map(([h]) => [h, /* @__PURE__ */ Object.create(null)]), emptyParam];
    } else {
      j++;
    }
    let paramAssoc;
    try {
      paramAssoc = trie.insert(path, j, pathErrorCheckOnly);
    } catch (e) {
      throw e === PATH_ERROR ? new UnsupportedPathError(path) : e;
    }
    if (pathErrorCheckOnly) {
      continue;
    }
    handlerData[j] = handlers.map(([h, paramCount]) => {
      const paramIndexMap = /* @__PURE__ */ Object.create(null);
      paramCount -= 1;
      for (; paramCount >= 0; paramCount--) {
        const [key, value] = paramAssoc[paramCount];
        paramIndexMap[key] = value;
      }
      return [h, paramIndexMap];
    });
  }
  const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
  for (let i = 0, len = handlerData.length; i < len; i++) {
    for (let j = 0, len2 = handlerData[i].length; j < len2; j++) {
      const map = handlerData[i][j]?.[1];
      if (!map) {
        continue;
      }
      const keys = Object.keys(map);
      for (let k = 0, len3 = keys.length; k < len3; k++) {
        map[keys[k]] = paramReplacementMap[map[keys[k]]];
      }
    }
  }
  const handlerMap = [];
  for (const i in indexReplacementMap) {
    handlerMap[i] = handlerData[indexReplacementMap[i]];
  }
  return [regexp, handlerMap, staticMap];
}
function findMiddleware(middleware, path) {
  if (!middleware) {
    return void 0;
  }
  for (const k of Object.keys(middleware).sort((a, b) => b.length - a.length)) {
    if (buildWildcardRegExp(k).test(path)) {
      return [...middleware[k]];
    }
  }
  return void 0;
}
var RegExpRouter = class {
  name = "RegExpRouter";
  #middleware;
  #routes;
  constructor() {
    this.#middleware = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
    this.#routes = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
  }
  add(method, path, handler2) {
    const middleware = this.#middleware;
    const routes2 = this.#routes;
    if (!middleware || !routes2) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    if (!middleware[method]) {
      ;
      [middleware, routes2].forEach((handlerMap) => {
        handlerMap[method] = /* @__PURE__ */ Object.create(null);
        Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p) => {
          handlerMap[method][p] = [...handlerMap[METHOD_NAME_ALL][p]];
        });
      });
    }
    if (path === "/*") {
      path = "*";
    }
    const paramCount = (path.match(/\/:/g) || []).length;
    if (/\*$/.test(path)) {
      const re = buildWildcardRegExp(path);
      if (method === METHOD_NAME_ALL) {
        Object.keys(middleware).forEach((m) => {
          middleware[m][path] ||= findMiddleware(middleware[m], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
        });
      } else {
        middleware[method][path] ||= findMiddleware(middleware[method], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
      }
      Object.keys(middleware).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(middleware[m]).forEach((p) => {
            re.test(p) && middleware[m][p].push([handler2, paramCount]);
          });
        }
      });
      Object.keys(routes2).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(routes2[m]).forEach(
            (p) => re.test(p) && routes2[m][p].push([handler2, paramCount])
          );
        }
      });
      return;
    }
    const paths = checkOptionalParameter(path) || [path];
    for (let i = 0, len = paths.length; i < len; i++) {
      const path2 = paths[i];
      Object.keys(routes2).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          routes2[m][path2] ||= [
            ...findMiddleware(middleware[m], path2) || findMiddleware(middleware[METHOD_NAME_ALL], path2) || []
          ];
          routes2[m][path2].push([handler2, paramCount - len + i + 1]);
        }
      });
    }
  }
  match = match;
  buildAllMatchers() {
    const matchers = /* @__PURE__ */ Object.create(null);
    Object.keys(this.#routes).concat(Object.keys(this.#middleware)).forEach((method) => {
      matchers[method] ||= this.#buildMatcher(method);
    });
    this.#middleware = this.#routes = void 0;
    clearWildcardRegExpCache();
    return matchers;
  }
  #buildMatcher(method) {
    const routes2 = [];
    let hasOwnRoute = method === METHOD_NAME_ALL;
    [this.#middleware, this.#routes].forEach((r) => {
      const ownRoute = r[method] ? Object.keys(r[method]).map((path) => [path, r[method][path]]) : [];
      if (ownRoute.length !== 0) {
        hasOwnRoute ||= true;
        routes2.push(...ownRoute);
      } else if (method !== METHOD_NAME_ALL) {
        routes2.push(
          ...Object.keys(r[METHOD_NAME_ALL]).map((path) => [path, r[METHOD_NAME_ALL][path]])
        );
      }
    });
    if (!hasOwnRoute) {
      return null;
    } else {
      return buildMatcherFromPreprocessedRoutes(routes2);
    }
  }
};

// node_modules/hono/dist/router/smart-router/router.js
var SmartRouter = class {
  name = "SmartRouter";
  #routers = [];
  #routes = [];
  constructor(init) {
    this.#routers = init.routers;
  }
  add(method, path, handler2) {
    if (!this.#routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    this.#routes.push([method, path, handler2]);
  }
  match(method, path) {
    if (!this.#routes) {
      throw new Error("Fatal error");
    }
    const routers = this.#routers;
    const routes2 = this.#routes;
    const len = routers.length;
    let i = 0;
    let res;
    for (; i < len; i++) {
      const router = routers[i];
      try {
        for (let i2 = 0, len2 = routes2.length; i2 < len2; i2++) {
          router.add(...routes2[i2]);
        }
        res = router.match(method, path);
      } catch (e) {
        if (e instanceof UnsupportedPathError) {
          continue;
        }
        throw e;
      }
      this.match = router.match.bind(router);
      this.#routers = [router];
      this.#routes = void 0;
      break;
    }
    if (i === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.#routes || this.#routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.#routers[0];
  }
};

// node_modules/hono/dist/router/trie-router/node.js
var emptyParams = /* @__PURE__ */ Object.create(null);
var hasChildren = (children) => {
  for (const _ in children) {
    return true;
  }
  return false;
};
var Node2 = class _Node2 {
  #methods;
  #children;
  #patterns;
  #order = 0;
  #params = emptyParams;
  constructor(method, handler2, children) {
    this.#children = children || /* @__PURE__ */ Object.create(null);
    this.#methods = [];
    if (method && handler2) {
      const m = /* @__PURE__ */ Object.create(null);
      m[method] = { handler: handler2, possibleKeys: [], score: 0 };
      this.#methods = [m];
    }
    this.#patterns = [];
  }
  insert(method, path, handler2) {
    this.#order = ++this.#order;
    let curNode = this;
    const parts = splitRoutingPath(path);
    const possibleKeys = [];
    for (let i = 0, len = parts.length; i < len; i++) {
      const p = parts[i];
      const nextP = parts[i + 1];
      const pattern = getPattern(p, nextP);
      const key = Array.isArray(pattern) ? pattern[0] : p;
      if (key in curNode.#children) {
        curNode = curNode.#children[key];
        if (pattern) {
          possibleKeys.push(pattern[1]);
        }
        continue;
      }
      curNode.#children[key] = new _Node2();
      if (pattern) {
        curNode.#patterns.push(pattern);
        possibleKeys.push(pattern[1]);
      }
      curNode = curNode.#children[key];
    }
    curNode.#methods.push({
      [method]: {
        handler: handler2,
        possibleKeys: possibleKeys.filter((v, i, a) => a.indexOf(v) === i),
        score: this.#order
      }
    });
    return curNode;
  }
  #pushHandlerSets(handlerSets, node, method, nodeParams, params) {
    for (let i = 0, len = node.#methods.length; i < len; i++) {
      const m = node.#methods[i];
      const handlerSet = m[method] || m[METHOD_NAME_ALL];
      const processedSet = {};
      if (handlerSet !== void 0) {
        handlerSet.params = /* @__PURE__ */ Object.create(null);
        handlerSets.push(handlerSet);
        if (nodeParams !== emptyParams || params && params !== emptyParams) {
          for (let i2 = 0, len2 = handlerSet.possibleKeys.length; i2 < len2; i2++) {
            const key = handlerSet.possibleKeys[i2];
            const processed = processedSet[handlerSet.score];
            handlerSet.params[key] = params?.[key] && !processed ? params[key] : nodeParams[key] ?? params?.[key];
            processedSet[handlerSet.score] = true;
          }
        }
      }
    }
  }
  search(method, path) {
    const handlerSets = [];
    this.#params = emptyParams;
    const curNode = this;
    let curNodes = [curNode];
    const parts = splitPath(path);
    const curNodesQueue = [];
    const len = parts.length;
    let partOffsets = null;
    for (let i = 0; i < len; i++) {
      const part = parts[i];
      const isLast = i === len - 1;
      const tempNodes = [];
      for (let j = 0, len2 = curNodes.length; j < len2; j++) {
        const node = curNodes[j];
        const nextNode = node.#children[part];
        if (nextNode) {
          nextNode.#params = node.#params;
          if (isLast) {
            if (nextNode.#children["*"]) {
              this.#pushHandlerSets(handlerSets, nextNode.#children["*"], method, node.#params);
            }
            this.#pushHandlerSets(handlerSets, nextNode, method, node.#params);
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k = 0, len3 = node.#patterns.length; k < len3; k++) {
          const pattern = node.#patterns[k];
          const params = node.#params === emptyParams ? {} : { ...node.#params };
          if (pattern === "*") {
            const astNode = node.#children["*"];
            if (astNode) {
              this.#pushHandlerSets(handlerSets, astNode, method, node.#params);
              astNode.#params = params;
              tempNodes.push(astNode);
            }
            continue;
          }
          const [key, name, matcher] = pattern;
          if (!part && !(matcher instanceof RegExp)) {
            continue;
          }
          const child = node.#children[key];
          if (matcher instanceof RegExp) {
            if (partOffsets === null) {
              partOffsets = new Array(len);
              let offset = path[0] === "/" ? 1 : 0;
              for (let p = 0; p < len; p++) {
                partOffsets[p] = offset;
                offset += parts[p].length + 1;
              }
            }
            const restPathString = path.substring(partOffsets[i]);
            const m = matcher.exec(restPathString);
            if (m) {
              params[name] = m[0];
              this.#pushHandlerSets(handlerSets, child, method, node.#params, params);
              if (m[0].length === restPathString.length && child.#children["*"]) {
                this.#pushHandlerSets(
                  handlerSets,
                  child.#children["*"],
                  method,
                  node.#params,
                  params
                );
              }
              if (hasChildren(child.#children)) {
                child.#params = params;
                const componentCount = m[0].match(/\//)?.length ?? 0;
                const targetCurNodes = curNodesQueue[componentCount] ||= [];
                targetCurNodes.push(child);
              }
              continue;
            }
          }
          if (matcher === true || matcher.test(part)) {
            params[name] = part;
            if (isLast) {
              this.#pushHandlerSets(handlerSets, child, method, params, node.#params);
              if (child.#children["*"]) {
                this.#pushHandlerSets(
                  handlerSets,
                  child.#children["*"],
                  method,
                  params,
                  node.#params
                );
              }
            } else {
              child.#params = params;
              tempNodes.push(child);
            }
          }
        }
      }
      const shifted = curNodesQueue.shift();
      curNodes = shifted ? tempNodes.concat(shifted) : tempNodes;
    }
    if (handlerSets.length > 1) {
      handlerSets.sort((a, b) => {
        return a.score - b.score;
      });
    }
    return [handlerSets.map(({ handler: handler2, params }) => [handler2, params])];
  }
};

// node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = class {
  name = "TrieRouter";
  #node;
  constructor() {
    this.#node = new Node2();
  }
  add(method, path, handler2) {
    const results = checkOptionalParameter(path);
    if (results) {
      for (let i = 0, len = results.length; i < len; i++) {
        this.#node.insert(method, results[i], handler2);
      }
      return;
    }
    this.#node.insert(method, path, handler2);
  }
  match(method, path) {
    return this.#node.search(method, path);
  }
};

// node_modules/hono/dist/hono.js
var Hono2 = class extends Hono {
  /**
   * Creates an instance of the Hono class.
   *
   * @param options - Optional configuration options for the Hono instance.
   */
  constructor(options = {}) {
    super(options);
    this.router = options.router ?? new SmartRouter({
      routers: [new RegExpRouter(), new TrieRouter()]
    });
  }
};

// src/stl/generate.ts
var import_modeling = __toESM(require_src(), 1);
var import_stl_serializer = __toESM(require_stl_serializer(), 1);
var { primitives, booleans, extrusions, transforms, text, geometries, expansions, measurements } = import_modeling.default;
function solidText(str, capHeight, depth, strokeWidth) {
  const segments = text.vectorText({ input: str || " ", height: capHeight });
  if (!segments.length) throw new Error("no glyphs produced for text");
  const outlines = segments.map((points) => {
    const path = geometries.path2.fromPoints({ closed: false }, points);
    return expansions.expand({ delta: strokeWidth, corners: "round" }, path);
  });
  const flat = outlines.length === 1 ? outlines[0] : booleans.union(outlines);
  const solid = extrusions.extrudeLinear({ height: depth }, flat);
  const [min, max] = measurements.measureBoundingBox(solid);
  const cx = (min[0] + max[0]) / 2;
  const cy = (min[1] + max[1]) / 2;
  return transforms.translate([-cx, -cy, 0], solid);
}
function textFootprint(g) {
  const [min, max] = measurements.measureBoundingBox(g);
  return { w: max[0] - min[0], h: max[1] - min[1] };
}
function makeKeychain(spec) {
  const capH = spec.textSize ?? 8;
  const base = spec.height ?? 3;
  const textDepth = base;
  const stroke = Math.max(0.8, capH * 0.14);
  const label = solidText(spec.text, capH, textDepth, stroke);
  const { w, h } = textFootprint(label);
  const padX = capH * 0.9;
  const padY = capH * 0.7;
  const plateW = w + padX * 2;
  const plateH = h + padY * 2;
  const r = Math.min(plateH / 2, 6);
  const plate = extrusions.extrudeLinear(
    { height: base },
    expansions.expand(
      { delta: r, corners: "round" },
      primitives.rectangle({ size: [plateW - 2 * r, plateH - 2 * r] })
    )
  );
  const ringR = plateH * 0.28;
  const ring = booleans.subtract(
    primitives.cylinder({ radius: ringR, height: base, segments: 48 }),
    primitives.cylinder({ radius: ringR * 0.5, height: base + 2, segments: 48 })
  );
  const ringPlaced = transforms.translate([-plateW / 2 - ringR * 0.4, 0, base / 2], ring);
  const body = booleans.union(plate, ringPlaced);
  const raisedText = transforms.translate([0, 0, base * 0.5], label);
  return booleans.union(body, raisedText);
}
function makeNameplate(spec) {
  const capH = spec.textSize ?? 12;
  const base = spec.height ?? 4;
  const stroke = Math.max(1, capH * 0.13);
  const label = solidText(spec.text, capH, base * 0.6, stroke);
  const { w, h } = textFootprint(label);
  const padX = capH * 1.1;
  const padY = capH * 0.9;
  const plateW = w + padX * 2;
  const plateH = h + padY * 2;
  const plate = primitives.roundedRectangle ? extrusions.extrudeLinear(
    { height: base },
    primitives.roundedRectangle({ size: [plateW, plateH], roundRadius: Math.min(padY, 8) })
  ) : extrusions.extrudeLinear({ height: base }, primitives.rectangle({ size: [plateW, plateH] }));
  const raisedText = transforms.translate([0, 0, base], label);
  return booleans.union(plate, raisedText);
}
function makeCoin(spec) {
  const capH = spec.textSize ?? 9;
  const base = spec.height ?? 3;
  const stroke = Math.max(0.9, capH * 0.14);
  const label = solidText(spec.text, capH, base * 0.6, stroke);
  const { w, h } = textFootprint(label);
  const needed = Math.max(w, h) / 2 + capH * 0.8;
  const radius = Math.max(needed, 12);
  const disc = primitives.cylinder({ radius, height: base, segments: 96 });
  const rim = booleans.subtract(
    primitives.cylinder({ radius, height: base, segments: 96 }),
    primitives.cylinder({ radius: radius - Math.max(1, radius * 0.08), height: base + 2, segments: 96 })
  );
  const raisedText = transforms.translate([0, 0, base / 2], label);
  return booleans.union(disc, transforms.translate([0, 0, base * 0], rim), raisedText);
}
function buildGeometry(spec) {
  switch (spec.shape) {
    case "keychain":
      return makeKeychain(spec);
    case "nameplate":
      return makeNameplate(spec);
    case "coin":
      return makeCoin(spec);
    default:
      throw new Error(`unknown shape: ${spec.shape}`);
  }
}
function finalize(geom) {
  const [min, max] = measurements.measureBoundingBox(geom);
  const volumeMm3 = measurements.measureVolume(geom);
  const raw2 = import_stl_serializer.default.serialize({ binary: true }, geom);
  const buffers = (Array.isArray(raw2) ? raw2 : [raw2]).map((a) => Buffer.from(a));
  return {
    stl: Buffer.concat(buffers),
    bbox: { x: max[0] - min[0], y: max[1] - min[1], z: max[2] - min[2] },
    volumeMm3
  };
}
function generateModel(spec) {
  return finalize(buildGeometry(spec));
}

// src/stl/dsl.ts
var import_modeling2 = __toESM(require_src(), 1);
var { primitives: primitives2, booleans: booleans2, transforms: transforms2 } = import_modeling2.default;
var MAX_PARTS = 120;
var MAX_DIM = 250;
var MIN_DIM = 0.2;
var MAX_TEXT = 40;
function clamp(n, lo, hi, dflt) {
  const v = typeof n === "number" && isFinite(n) ? n : dflt;
  return Math.max(lo, Math.min(hi, v));
}
function clampDim(n, dflt) {
  return clamp(n, MIN_DIM, MAX_DIM, dflt);
}
var deg2rad = (d) => d * Math.PI / 180;
function buildNode(node) {
  let g;
  switch (node.type) {
    case "box": {
      const s = Array.isArray(node.size) ? node.size : [10, 10, 10];
      g = primitives2.cuboid({ size: [clampDim(s[0], 10), clampDim(s[1], 10), clampDim(s[2], 10)] });
      break;
    }
    case "cylinder":
      g = primitives2.cylinder({
        radius: clampDim(node.radius, 5),
        height: clampDim(node.height, 10),
        segments: 64
      });
      break;
    case "cone":
      g = primitives2.cylinderElliptic({
        height: clampDim(node.height, 10),
        startRadius: [clampDim(node.radiusBottom ?? node.radius, 5), clampDim(node.radiusBottom ?? node.radius, 5)],
        endRadius: [clamp(node.radiusTop, 0, MAX_DIM, 0), clamp(node.radiusTop, 0, MAX_DIM, 0)],
        segments: 64
      });
      break;
    case "sphere":
      g = primitives2.sphere({ radius: clampDim(node.radius, 5), segments: 48 });
      break;
    case "torus":
      g = primitives2.torus({
        innerRadius: clampDim(node.tubeRadius, 2),
        outerRadius: clampDim(node.ringRadius, 8),
        innerSegments: 24,
        outerSegments: 48
      });
      break;
    case "text": {
      const str = String(node.text ?? "").slice(0, MAX_TEXT) || "A";
      const cap = clamp(node.fontSize, 2, 120, 10);
      const depth = clampDim(node.thickness, Math.max(2, cap * 0.3));
      g = solidText(str, cap, depth, Math.max(0.8, cap * 0.13));
      break;
    }
    default:
      throw new Error(`unknown part type: ${node.type}`);
  }
  if (Array.isArray(node.rotate)) {
    g = transforms2.rotate(
      [deg2rad(node.rotate[0] || 0), deg2rad(node.rotate[1] || 0), deg2rad(node.rotate[2] || 0)],
      g
    );
  }
  if (Array.isArray(node.translate)) {
    g = transforms2.translate(
      [
        clamp(node.translate[0], -MAX_DIM, MAX_DIM, 0),
        clamp(node.translate[1], -MAX_DIM, MAX_DIM, 0),
        clamp(node.translate[2], -MAX_DIM, MAX_DIM, 0)
      ],
      g
    );
  }
  return g;
}
function buildRecipe(recipe) {
  if (!recipe || !Array.isArray(recipe.parts) || recipe.parts.length === 0) {
    throw new Error("recipe has no parts");
  }
  if (recipe.parts.length > MAX_PARTS) {
    throw new Error(`too many parts (${recipe.parts.length} > ${MAX_PARTS})`);
  }
  const solids = [];
  const cuts = [];
  for (const node of recipe.parts) {
    const g = buildNode(node);
    (node.cut ? cuts : solids).push(g);
  }
  if (solids.length === 0) throw new Error("recipe has no additive parts");
  let body = solids.length === 1 ? solids[0] : booleans2.union(solids);
  if (cuts.length) {
    body = booleans2.subtract(body, cuts.length === 1 ? cuts[0] : booleans2.union(cuts));
  }
  return body;
}
function isRecipe(x) {
  return x && Array.isArray(x.parts) && x.parts.every((p) => p && typeof p.type === "string");
}
function generateFromRecipe(recipe) {
  return finalize(buildRecipe(recipe));
}

// src/stl/estimate.ts
var DENSITY_PLA = 1.24;
var INFILL = 0.2;
var FILL_FACTOR = INFILL + 0.22;
var SETUP_USD = 1.5;
var PER_GRAM_USD = 0.08;
var MINUTES_PER_CM3 = 4.5;
function estimatePrint(volumeMm3) {
  const volCm3 = volumeMm3 / 1e3;
  const grams = volCm3 * DENSITY_PLA * FILL_FACTOR;
  const printMinutes = Math.max(6, Math.round(volCm3 * MINUTES_PER_CM3));
  const priceUsd = Math.round((SETUP_USD + grams * PER_GRAM_USD) * 100) / 100;
  return {
    material: "PLA",
    infillPct: INFILL * 100,
    densityGCm3: DENSITY_PLA,
    grams: Math.round(grams * 10) / 10,
    printMinutes,
    priceUsd,
    assumptions: `PLA @ ${DENSITY_PLA} g/cm\xB3, ${INFILL * 100}% infill + solid shells; price = $${SETUP_USD} setup + $${PER_GRAM_USD}/g`
  };
}

// src/stl/spec.ts
var SHAPE_WORDS = [
  ["keychain", /\b(keychain|key chain|key ring|keyring|key fob|keyfob|key tag)\b/i],
  ["coin", /\b(coin|medallion|token|badge|disc|disk|medal)\b/i],
  ["nameplate", /\b(nameplate|name plate|sign|plaque|plate|desk sign|door sign|label)\b/i]
];
var MAX_TEXT2 = 24;
function parsePrompt(prompt) {
  const raw2 = (prompt ?? "").trim();
  if (!raw2) throw new Error("empty prompt");
  let shape = "keychain";
  for (const [kind, re] of SHAPE_WORDS) {
    if (re.test(raw2)) {
      shape = kind;
      break;
    }
  }
  const text2 = extractText(raw2) || "HELLO";
  let textSize;
  const mm = raw2.match(/(\d+(?:\.\d+)?)\s*mm\b/i);
  const cm = raw2.match(/(\d+(?:\.\d+)?)\s*cm\b/i);
  if (mm) textSize = clampSize(parseFloat(mm[1]) * 0.3);
  else if (cm) textSize = clampSize(parseFloat(cm[1]) * 3);
  return {
    shape,
    text: text2,
    textSize,
    note: `shape=${shape}, text="${text2}"${textSize ? `, textSize\u2248${textSize.toFixed(1)}mm` : ""}`
  };
}
function clampSize(n) {
  return Math.max(5, Math.min(30, n));
}
function extractText(prompt) {
  const quoted = prompt.match(/["'“”‘’]([^"'“”‘’]{1,40})["'“”‘’]/);
  if (quoted) return clean(quoted[1]);
  const says = prompt.match(/\b(?:says|saying|reads|reading|with(?:\s+the)?(?:\s+name|\s+text|\s+word)?|labeled|labelled|engraved with|that says|for)\s+(.+)$/i);
  if (says) return clean(says[1]);
  let s = prompt;
  for (const [, re] of SHAPE_WORDS) s = s.replace(re, " ");
  s = s.replace(/\b(a|an|the|make|create|generate|me|please|for|with|of|3d|print|printable|stl|model|small|big|large|desk|door|my|name)\b/gi, " ");
  return clean(s);
}
function clean(s) {
  const out = s.replace(/\s+/g, " ").trim().slice(0, MAX_TEXT2);
  return out;
}

// src/ai/openrouter.ts
var ENDPOINT = "https://openrouter.ai/api/v1/chat/completions";
var DEFAULT_MODEL = "poolside/laguna-xs-2.1:free";
var SYSTEM = `You are a 3D modeller for 3D printing. Given an object description, design the OBJECT AS A REAL SHAPE by composing solid primitives, and output ONLY a JSON "recipe". No prose, no markdown fences.

JSON shape: {"name":"<short name>","parts":[Part,...]}
Part fields (millimetres):
- "type": "box" | "cylinder" | "cone" | "sphere" | "torus" | "text"
- box: "size":[x,y,z]
- cylinder: "radius","height" (axis along +z)
- cone: "radiusBottom","radiusTop","height"  (a nose/point = small radiusTop; a full point = radiusTop 0)
- sphere: "radius"
- torus: "ringRadius","tubeRadius"
- text: "text","fontSize","thickness"
- "translate":[x,y,z] (default [0,0,0])
- "rotate":[x,y,z] degrees (default [0,0,0])
- "cut": true to subtract this part (holes/hollows)

HARD RULES:
1. Build the actual 3D SHAPE of the object. NEVER spell the prompt words as 3D text. Only use "type":"text" when the user explicitly asks for letters, a name, a word, a keychain-with-text, a nameplate, or a sign.
2. Decompose the object into recognizable parts and place them by anatomy. Think about what the thing looks like and approximate it with these primitives.
3. Printability: the result must be ONE connected solid. Parts MUST overlap or touch (no floating gaps). Give it a flat, stable base sitting on the plate (all z >= 0). Avoid thin fragile spikes and tiny disconnected bits. Keep total size 30 to 120 mm.
4. Use 5 to 25 parts. Center it near x,y = 0. Primitives are centred at the origin before transform; a cylinder/cone of height h spans -h/2..+h/2 in z, so translate z by h/2 to rest on the plate.

Worked examples of GOOD decomposition (build shapes, not words):
- rocket: a cone nose (radiusTop 0) on top of a tall cylinder body; 3 or 4 thin boxes as fins around the base; a short wider cylinder as the tail. NO text.
- mug: a cylinder body, a slightly smaller cylinder cut from the top (hollow), a torus on the side as the handle.
- house: a box for walls, a wider short box or a 4-sided pyramid (cone with 4 segments feel) as the roof on top; small box door.
- car: a long low box chassis, a smaller box cabin on top, four short cylinders (rotated 90 on x) as wheels at the corners.
- tree: a cylinder trunk with 2 or 3 stacked spheres or cones as the foliage on top.

Output ONLY the JSON object.`;
function hasOpenRouter() {
  return !!process.env.OPENROUTER_API_KEY;
}
var AI_BUDGET_MS = Number(process.env.AI_BUDGET_MS ?? 2e4);
async function promptToRecipe(prompt, budgetMs = AI_BUDGET_MS) {
  const key = process.env.OPENROUTER_API_KEY;
  if (!key) throw new Error("OPENROUTER_API_KEY not set");
  const model = process.env.OPENROUTER_MODEL || DEFAULT_MODEL;
  const deadline = Date.now() + budgetMs;
  let content = await callModel(key, model, prompt, true, deadline).catch(async (e) => {
    if (String(e?.message).includes("400") && Date.now() < deadline) {
      return callModel(key, model, prompt, false, deadline);
    }
    throw e;
  });
  const recipe = parseRecipe(content);
  return { recipe, model };
}
async function callModel(key, model, prompt, jsonMode, deadline, attempt = 0) {
  const remaining = deadline - Date.now();
  if (remaining <= 0) throw new Error("AI budget exhausted");
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), remaining);
  try {
    const body = {
      model,
      messages: [
        { role: "system", content: SYSTEM },
        { role: "user", content: prompt }
      ],
      temperature: 0.3,
      max_tokens: 4e3
    };
    if (jsonMode) body.response_format = { type: "json_object" };
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        "X-Title": "Printly"
      },
      body: JSON.stringify(body),
      signal: controller.signal
    });
    if (res.status === 429 && attempt < 1 && deadline - Date.now() > 8e3) {
      await new Promise((r) => setTimeout(r, 2e3));
      return callModel(key, model, prompt, jsonMode, deadline, attempt + 1);
    }
    if (!res.ok) {
      const t = await res.text().catch(() => "");
      throw new Error(`OpenRouter ${res.status}: ${t.slice(0, 160)}`);
    }
    const data = await res.json();
    const content = data?.choices?.[0]?.message?.content;
    if (!content || typeof content !== "string") throw new Error("empty model response");
    return content;
  } finally {
    clearTimeout(timer);
  }
}
function parseRecipe(content) {
  let s = content.trim();
  s = s.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();
  const start = s.indexOf("{");
  const end = s.lastIndexOf("}");
  if (start >= 0 && end > start) s = s.slice(start, end + 1);
  let obj;
  try {
    obj = JSON.parse(s);
  } catch {
    throw new Error("model output was not valid JSON");
  }
  if (!isRecipe(obj)) throw new Error("model output was not a valid recipe");
  return obj;
}

// src/server/spec-codec.ts
import { gzipSync, gunzipSync } from "node:zlib";
function encodeSpec(spec) {
  const json = JSON.stringify({ shape: spec.shape, text: spec.text, textSize: spec.textSize });
  return Buffer.from(json, "utf8").toString("base64url");
}
function decodeSpec(s) {
  const obj = JSON.parse(Buffer.from(s, "base64url").toString("utf8"));
  if (!obj || typeof obj.shape !== "string" || typeof obj.text !== "string") {
    throw new Error("bad spec");
  }
  return obj;
}
function encodeRecipe(recipe) {
  const json = JSON.stringify(recipe);
  return gzipSync(Buffer.from(json, "utf8")).toString("base64url");
}
function decodeRecipe(r) {
  const json = gunzipSync(Buffer.from(r, "base64url")).toString("utf8");
  const obj = JSON.parse(json);
  if (!isRecipe(obj)) throw new Error("bad recipe");
  return obj;
}

// src/stl/config.ts
var X402_NETWORK = process.env.X402_NETWORK ?? "eip155:196";
var MODEL_PRICE_USD = `$${process.env.MODEL_PRICE_USD ?? "0.05"}`;
var PAY_TO = process.env.PAY_TO ?? "0x0000000000000000000000000000000000000000";
var OKX = {
  apiKey: process.env.OKX_API_KEY ?? "",
  secretKey: process.env.OKX_SECRET_KEY ?? "",
  passphrase: process.env.OKX_PASSPHRASE ?? "",
  baseUrl: process.env.OKX_BASE_URL ?? "https://web3.okx.com"
};
var EXEMPT_PAYERS = (process.env.X402_EXEMPT_PAYERS ?? "").split(",").map((a) => a.trim()).filter(Boolean);
var SERVICE_DESCRIPTION = "Generate one printable STL model from a text prompt";
var PRINT_HANDOFF_URL = process.env.PRINT_HANDOFF_URL ?? "https://craftcloud3d.com/";
var PUBLIC_BASE_URL = process.env.PUBLIC_BASE_URL ?? "";

// src/server/viewer.ts
function viewerPage(d) {
  const title = d.title;
  const dims = `${d.dims.x.toFixed(1)} \xD7 ${d.dims.y.toFixed(1)} \xD7 ${d.dims.z.toFixed(1)} mm`;
  const stlPath = `/stl?${d.stlQuery}`;
  const dlPath = `${stlPath}&dl=1`;
  return `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)} \xB7 Printly</title>
<link rel="icon" type="image/png" href="/favicon.png">
<meta name="theme-color" content="#f4f1ea">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)} \xB7 Printly">
<meta property="og:description" content="A 3D-printable model generated by Printly. Preview it in 3D and download the STL.">
<meta property="og:image" content="https://printly3d.vercel.app/og.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://printly3d.vercel.app/og.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500&family=Hanken+Grotesk:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  :root{--paper:#f4f1ea;--ink:#17150f;--ink-2:#5c564a;--ink-3:#8a8271;--line:#e0dacd;--ember:#e0552b;--card:#faf8f3;
    --serif:'Fraunces',Georgia,serif;--sans:'Hanken Grotesk',system-ui,sans-serif;--mono:'JetBrains Mono',monospace}
  *{box-sizing:border-box}
  body{margin:0;font-family:var(--sans);font-size:15px;line-height:1.5;background:var(--paper);color:var(--ink);-webkit-font-smoothing:antialiased}
  header{padding:15px 22px;border-bottom:1px solid var(--line);display:flex;align-items:center;gap:13px;flex-wrap:wrap}
  header .home{display:flex;align-items:center;gap:9px;font-weight:600;text-decoration:none;color:var(--ink)}
  header .home img{width:26px;height:26px;border-radius:7px}
  header h1{font-family:var(--serif);font-weight:500;font-size:19px;margin:0}
  .tag{font-family:var(--mono);font-size:11.5px;color:var(--ink-3);border:1px solid var(--line);border-radius:999px;padding:3px 11px}
  #stage{width:100%;height:60vh;min-height:340px;display:block;background:radial-gradient(120% 120% at 50% 25%,#fbfaf6,#eae4d8);cursor:grab}
  #stage:active{cursor:grabbing}
  .panel{max-width:820px;margin:0 auto;padding:22px 22px 44px}
  .facts{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;margin:12px 0}
  .fact{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:14px}
  .fact .k{font-family:var(--mono);font-size:11px;letter-spacing:.05em;color:var(--ink-3);text-transform:uppercase}
  .fact .v{font-family:var(--serif);font-size:22px;font-weight:500;margin-top:4px}
  .actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:16px}
  a.btn{display:inline-block;text-decoration:none;padding:12px 20px;border-radius:11px;font-weight:600;font-size:14.5px;transition:transform .2s,box-shadow .2s}
  a.primary{background:var(--ink);color:var(--paper)}
  a.primary:hover{transform:translateY(-2px);box-shadow:0 10px 22px rgba(23,21,15,.16)}
  a.ghost{background:transparent;color:var(--ink);border:1px solid var(--line)}
  a.ghost:hover{border-color:var(--ink);transform:translateY(-2px)}
  .note{font-size:12.5px;color:var(--ink-3);margin-top:16px}
  .err{color:#b23b1e;padding:16px 22px;font-family:var(--mono);font-size:13px}
</style>
<script type="importmap">
{"imports":{"three":"https://unpkg.com/three@0.160.0/build/three.module.js","three/addons/":"https://unpkg.com/three@0.160.0/examples/jsm/"}}
</script>
</head><body>
<header>
  <a class="home" href="/"><img src="/icon.png" alt="">Printly</a>
  <h1>${esc(d.title)}</h1>
  <span class="tag">${esc(d.subtitle)}</span>
  <span class="tag">${dims}</span>
</header>
<canvas id="stage"></canvas>
<div class="panel">
  <div class="facts">
    <div class="fact"><div class="k">Size</div><div class="v">${dims}</div></div>
    <div class="fact"><div class="k">Material</div><div class="v">${d.estimate.grams} g</div></div>
    <div class="fact"><div class="k">Print time</div><div class="v">${d.estimate.printMinutes} min</div></div>
    <div class="fact"><div class="k">Print cost</div><div class="v">$${d.estimate.priceUsd.toFixed(2)}</div></div>
  </div>
  <div class="actions">
    <a class="btn primary" href="${dlPath}">Download STL</a>
    <a class="btn ghost" href="${esc(PRINT_HANDOFF_URL)}" target="_blank" rel="noopener noreferrer">Order a print \u2197</a>
  </div>
  <p class="note">Estimate: ${esc(d.estimate.assumptions)}. "Order a print" opens an external print service. Payment and shipping happen there, not here.</p>
</div>
<script type="module">
  import * as THREE from 'three';
  import { STLLoader } from 'three/addons/loaders/STLLoader.js';
  import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

  const fail = (m) => document.body.insertAdjacentHTML('beforeend', '<p class="err">3D preview failed: ' + m + '. The STL download still works.</p>');
  window.addEventListener('error', (e) => fail(e.message || 'load error'));

  const canvas = document.getElementById('stage');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 5000);
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true; controls.dampingFactor = 0.08;
  scene.add(new THREE.HemisphereLight(0xffffff, 0xcfc7b4, 1.05));
  const key = new THREE.DirectionalLight(0xffffff, 1.5); key.position.set(2,3,2); scene.add(key);
  const rim = new THREE.DirectionalLight(0xffe6cf, 0.5); rim.position.set(-2,1,-2); scene.add(rim);

  function resize(){
    const w = canvas.clientWidth, h = canvas.clientHeight;
    renderer.setSize(w, h, false); camera.aspect = w/h; camera.updateProjectionMatrix();
  }
  new STLLoader().load('${stlPath}', (geo) => {
    geo.computeVertexNormals(); geo.center();
    const mat = new THREE.MeshStandardMaterial({ color: 0xcfc9bb, roughness: 0.82, metalness: 0.02 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.rotation.x = -Math.PI/2;
    scene.add(mesh);
    geo.computeBoundingSphere();
    const r = geo.boundingSphere.radius;
    camera.position.set(r*1.5, r*1.2, r*1.9);
    controls.target.set(0,0,0); controls.update();
    resize();
    (function loop(){ requestAnimationFrame(loop); mesh.rotation.z += 0.0035; controls.update(); renderer.render(scene, camera); })();
  }, undefined, () => {
    document.body.insertAdjacentHTML('beforeend','<p class="err">Could not load model. The STL download still works.</p>');
  });
  window.addEventListener('resize', resize);
</script>
</body></html>`;
}
function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}

// node_modules/@okxweb3/app-x402-core/dist/esm/chunk-U6BM6DW7.mjs
init_chunk_CKXR4QVD();
import crypto2 from "crypto";
var OKXFacilitatorClient = class {
  constructor(config) {
    this.config = {
      baseUrl: "https://web3.okx.com",
      ...config
    };
  }
  /**
   *
   */
  async getSupported() {
    const path = "/api/v6/pay/x402/supported";
    const res = await fetch(this.config.baseUrl + path, {
      headers: this.createHeaders("GET", path)
    });
    if (!res.ok) throw new Error(`OKX getSupported failed: ${res.status}`);
    const json = await res.json();
    const data = json.data ?? json;
    return data;
  }
  /**
   *
   * @param payload
   * @param requirements
   */
  async verify(payload, requirements) {
    const path = "/api/v6/pay/x402/verify";
    const body = JSON.stringify({
      x402Version: 2,
      paymentPayload: payload,
      paymentRequirements: requirements
    });
    const res = await fetch(this.config.baseUrl + path, {
      method: "POST",
      headers: this.createHeaders("POST", path, body),
      body
    });
    if (!res.ok) throw new Error(`OKX verify failed: ${res.status}`);
    const json = await res.json();
    const data = json.data ?? json;
    return data;
  }
  /**
   *
   * @param payload
   * @param requirements
   */
  async settle(payload, requirements) {
    const path = "/api/v6/pay/x402/settle";
    const bodyObj = {
      x402Version: 2,
      paymentPayload: payload,
      paymentRequirements: requirements
    };
    if (this.config.syncSettle !== void 0) {
      bodyObj.syncSettle = this.config.syncSettle;
    }
    const body = JSON.stringify(bodyObj);
    const res = await fetch(this.config.baseUrl + path, {
      method: "POST",
      headers: this.createHeaders("POST", path, body),
      body
    });
    if (!res.ok) throw new Error(`OKX settle failed: ${res.status}`);
    const json = await res.json();
    const data = json.data ?? json;
    return data;
  }
  /**
   * Verify only the payment signature (doc §3, `POST /verify-signature`).
   *
   * Unlike {@link verify}, this performs no blacklist / KYS / parameter-match /
   * time-window / on-chain (balance / nonce / allowance) / anti-replay checks —
   * a valid result means "signature is authentic", NOT "safe to settle". The
   * request body matches `/verify`; `paymentRequirements` does not participate in
   * signature verification and may be omitted.
   *
   * @param payload - The payment payload carrying the signature
   * @param requirements - Optional payment requirements (not used for verification)
   * @returns Signature verification response
   */
  async verifySignature(payload, requirements) {
    const path = "/api/v6/pay/x402/verify-signature";
    const body = JSON.stringify({
      x402Version: 2,
      paymentPayload: payload,
      ...requirements ? { paymentRequirements: requirements } : {}
    });
    const res = await fetch(this.config.baseUrl + path, {
      method: "POST",
      headers: this.createHeaders("POST", path, body),
      body
    });
    if (!res.ok) throw new Error(`OKX verifySignature failed: ${res.status}`);
    const json = await res.json();
    const data = json.data ?? json;
    return data;
  }
  /**
   * Query on-chain settlement status by transaction hash.
   *
   * @param txHash - The transaction hash to query
   * @returns Settlement status response
   */
  async getSettleStatus(txHash) {
    const path = `/api/v6/pay/x402/settle/status?txHash=${encodeURIComponent(txHash)}`;
    const res = await fetch(this.config.baseUrl + path, {
      headers: this.createHeaders("GET", path)
    });
    if (!res.ok) throw new Error(`OKX getSettleStatus failed: ${res.status}`);
    const json = await res.json();
    const data = json.data ?? json;
    return data;
  }
  // ── SubscriptionFacilitatorClient (period) ─────────────
  //
  // Subscription endpoints share OKX's HMAC-SHA256 auth (createHeaders) so
  // production sellers route ALL facilitator HTTP through this single
  // client — exact/upto/aggr_deferred go via verify/settle, period
  // goes via these five methods.
  /**
   * Build `{chainIndex, terms, permit, termsSig, permitSig, syncSettle}` —
   * request body shared by subscribe / change endpoints.
   */
  buildWriteBody(payload, requirements, syncSettle) {
    const inner = asSubscriptionPaymentInner(payload);
    return {
      chainIndex: parseChainIdFromNetwork(requirements.network),
      terms: inner.terms,
      permit: inner.permitSingle,
      termsSig: inner.termsSignature,
      permitSig: inner.permitSingleSignature,
      syncSettle: syncSettle ?? true
    };
  }
  async subscribe(paymentPayload, paymentRequirements, syncSettle) {
    const path = "/api/v6/pay/x402/subscriptions";
    const body = JSON.stringify(
      this.buildWriteBody(paymentPayload, paymentRequirements, syncSettle)
    );
    const res = await fetch(this.config.baseUrl + path, {
      method: "POST",
      headers: this.createHeaders("POST", path, body),
      body
    });
    if (!res.ok) throw new Error(`OKX subscribe failed: ${res.status}`);
    return await res.json();
  }
  async changeSubscription(paymentPayload, paymentRequirements, oldSubId, syncSettle) {
    const path = "/api/v6/pay/x402/subscriptions/change";
    const inner = asSubscriptionPaymentInner(paymentPayload);
    const body = JSON.stringify({
      chainIndex: parseChainIdFromNetwork(paymentRequirements.network),
      oldSubId,
      newTerms: inner.terms,
      permit: inner.permitSingle,
      termsSig: inner.termsSignature,
      permitSig: inner.permitSingleSignature,
      syncSettle: syncSettle ?? true
    });
    const res = await fetch(this.config.baseUrl + path, {
      method: "POST",
      headers: this.createHeaders("POST", path, body),
      body
    });
    if (!res.ok) throw new Error(`OKX changeSubscription failed: ${res.status}`);
    return await res.json();
  }
  async cancelSubscription(subId, cancelAuth, syncSettle) {
    const path = "/api/v6/pay/x402/subscriptions/cancel";
    const body = JSON.stringify({ subId, cancelAuth, syncSettle: syncSettle ?? true });
    const res = await fetch(this.config.baseUrl + path, {
      method: "POST",
      headers: this.createHeaders("POST", path, body),
      body
    });
    if (!res.ok) throw new Error(`OKX cancelSubscription failed: ${res.status}`);
    return await res.json();
  }
  async cancelPendingChange(subId, cancelAuth, syncSettle) {
    const path = "/api/v6/pay/x402/subscriptions/cancel-pending-change";
    const body = JSON.stringify({ subId, cancelAuth, syncSettle: syncSettle ?? true });
    const res = await fetch(this.config.baseUrl + path, {
      method: "POST",
      headers: this.createHeaders("POST", path, body),
      body
    });
    if (!res.ok) throw new Error(`OKX cancelPendingChange failed: ${res.status}`);
    return await res.json();
  }
  async chargeSubscription(subId, syncSettle) {
    const path = "/api/v6/pay/x402/subscriptions/charge";
    const body = JSON.stringify({ subId, syncSettle: syncSettle ?? true });
    const res = await fetch(this.config.baseUrl + path, {
      method: "POST",
      headers: this.createHeaders("POST", path, body),
      body
    });
    if (!res.ok) {
      const errBody = await res.text().catch(() => "");
      throw new Error(`OKX chargeSubscription failed: ${res.status} ${errBody}`);
    }
    return await res.json();
  }
  async finalizeExpired(subId, syncSettle) {
    const path = "/api/v6/pay/x402/subscriptions/finalize-expired";
    const body = JSON.stringify({ subId, syncSettle: syncSettle ?? true });
    const res = await fetch(this.config.baseUrl + path, {
      method: "POST",
      headers: this.createHeaders("POST", path, body),
      body
    });
    if (!res.ok) {
      const errBody = await res.text().catch(() => "");
      throw new Error(`OKX finalizeExpired failed: ${res.status} ${errBody}`);
    }
    return await res.json();
  }
  async getCharges(subId, limit = 50, offset = 0) {
    const q = new URLSearchParams({ subId, limit: String(limit), offset: String(offset) });
    const path = `/api/v6/pay/x402/subscriptions/charges?${q.toString()}`;
    const res = await fetch(this.config.baseUrl + path, {
      headers: this.createHeaders("GET", path)
    });
    if (!res.ok) {
      const errBody = await res.text().catch(() => "");
      throw new Error(`OKX getCharges failed: ${res.status} ${errBody}`);
    }
    return await res.json();
  }
  async getPendingChange(subId) {
    const path = `/api/v6/pay/x402/subscriptions/pending?subId=${encodeURIComponent(subId)}`;
    const res = await fetch(this.config.baseUrl + path, {
      headers: this.createHeaders("GET", path)
    });
    if (!res.ok) {
      const errBody = await res.text().catch(() => "");
      throw new Error(`OKX getPendingChange failed: ${res.status} ${errBody}`);
    }
    return await res.json();
  }
  async getSubscription(subId) {
    const path = `/api/v6/pay/x402/subscriptions/detail?subId=${encodeURIComponent(subId)}`;
    const res = await fetch(this.config.baseUrl + path, {
      headers: this.createHeaders("GET", path)
    });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      throw new Error(`OKX getSubscription failed: ${res.status} ${body}`);
    }
    return await res.json();
  }
  /**
   * Build the OKX REST authentication headers (HMAC-SHA256 over
   * timestamp + method + path + body) shared by every request method.
   *
   * @param method - HTTP method
   * @param path - Request path (including query string)
   * @param body - Optional request body
   * @returns The authentication headers
   */
  createHeaders(method, path, body) {
    const timestamp = (/* @__PURE__ */ new Date()).toISOString();
    const prehash = timestamp + method + path + (body ?? "");
    const sign = crypto2.createHmac("sha256", this.config.secretKey).update(prehash).digest("base64");
    return {
      "OK-ACCESS-KEY": this.config.apiKey,
      "OK-ACCESS-SIGN": sign,
      "OK-ACCESS-TIMESTAMP": timestamp,
      "OK-ACCESS-PASSPHRASE": this.config.passphrase,
      "Content-Type": "application/json"
    };
  }
};
var x402Version = 2;

// node_modules/@okxweb3/app-x402-core/dist/esm/index.mjs
init_chunk_CKXR4QVD();

// node_modules/@okxweb3/app-x402-core/dist/esm/chunk-E75BE7CV.mjs
init_chunk_CKXR4QVD();

// node_modules/@okxweb3/app-x402-core/dist/esm/chunk-CAXWAW23.mjs
var VerifyError = class extends Error {
  /**
   * Creates a VerifyError from a failed verification response.
   *
   * @param statusCode - HTTP status code from the facilitator
   * @param response - The verify response containing error details
   */
  constructor(statusCode, response) {
    const reason = response.invalidReason || "unknown reason";
    const message = response.invalidMessage;
    super(message ? `${reason}: ${message}` : reason);
    this.name = "VerifyError";
    this.statusCode = statusCode;
    this.invalidReason = response.invalidReason;
    this.invalidMessage = response.invalidMessage;
    this.payer = response.payer;
  }
};
var SettleError = class extends Error {
  /**
   * Creates a SettleError from a failed settlement response.
   *
   * @param statusCode - HTTP status code from the facilitator
   * @param response - The settle response containing error details
   */
  constructor(statusCode, response) {
    const reason = response.errorReason || "unknown reason";
    const message = response.errorMessage;
    super(message ? `${reason}: ${message}` : reason);
    this.name = "SettleError";
    this.statusCode = statusCode;
    this.errorReason = response.errorReason;
    this.errorMessage = response.errorMessage;
    this.payer = response.payer;
    this.transaction = response.transaction;
    this.network = response.network;
  }
};
var FacilitatorResponseError = class extends Error {
  /**
   * Creates a FacilitatorResponseError for malformed facilitator responses.
   *
   * @param message - The boundary error message
   */
  constructor(message) {
    super(message);
    this.name = "FacilitatorResponseError";
  }
};
function getFacilitatorResponseError(error) {
  let current = error;
  while (current instanceof Error) {
    if (current instanceof FacilitatorResponseError) {
      return current;
    }
    current = current.cause;
  }
  return null;
}

// node_modules/@okxweb3/app-x402-core/dist/esm/chunk-TDLQZ6MP.mjs
var findSchemesByNetwork = (map, network) => {
  let implementationsByScheme = map.get(network);
  if (!implementationsByScheme) {
    for (const [registeredNetworkPattern, implementations] of map.entries()) {
      const pattern = registeredNetworkPattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\\\*/g, ".*");
      const regex = new RegExp(`^${pattern}$`);
      if (regex.test(network)) {
        implementationsByScheme = implementations;
        break;
      }
    }
  }
  return implementationsByScheme;
};
var findByNetworkAndScheme = (map, scheme, network) => {
  return findSchemesByNetwork(map, network)?.get(scheme);
};
var Base64EncodedRegex = /^[A-Za-z0-9+/]*={0,2}$/;
function safeBase64Encode(data) {
  if (typeof globalThis !== "undefined" && typeof globalThis.btoa === "function") {
    const bytes = new TextEncoder().encode(data);
    const binaryString = Array.from(bytes, (byte) => String.fromCharCode(byte)).join("");
    return globalThis.btoa(binaryString);
  }
  return Buffer.from(data, "utf8").toString("base64");
}
function safeBase64Decode(data) {
  if (typeof globalThis !== "undefined" && typeof globalThis.atob === "function") {
    const binaryString = globalThis.atob(data);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    const decoder = new TextDecoder("utf-8");
    return decoder.decode(bytes);
  }
  return Buffer.from(data, "base64").toString("utf-8");
}
function deepEqual(obj1, obj2) {
  const normalize = (obj) => {
    if (obj === null || obj === void 0) return JSON.stringify(obj);
    if (typeof obj !== "object") return JSON.stringify(obj);
    if (Array.isArray(obj)) {
      return JSON.stringify(
        obj.map(
          (item) => typeof item === "object" && item !== null ? JSON.parse(normalize(item)) : item
        )
      );
    }
    const sorted = {};
    Object.keys(obj).sort().forEach((key) => {
      const value = obj[key];
      sorted[key] = typeof value === "object" && value !== null ? JSON.parse(normalize(value)) : value;
    });
    return JSON.stringify(sorted);
  };
  try {
    return normalize(obj1) === normalize(obj2);
  } catch {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }
}

// node_modules/zod/v3/external.js
var external_exports = {};
__export(external_exports, {
  BRAND: () => BRAND,
  DIRTY: () => DIRTY,
  EMPTY_PATH: () => EMPTY_PATH,
  INVALID: () => INVALID,
  NEVER: () => NEVER,
  OK: () => OK,
  ParseStatus: () => ParseStatus,
  Schema: () => ZodType,
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBigInt: () => ZodBigInt,
  ZodBoolean: () => ZodBoolean,
  ZodBranded: () => ZodBranded,
  ZodCatch: () => ZodCatch,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodEffects: () => ZodEffects,
  ZodEnum: () => ZodEnum,
  ZodError: () => ZodError,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFunction: () => ZodFunction,
  ZodIntersection: () => ZodIntersection,
  ZodIssueCode: () => ZodIssueCode,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNativeEnum: () => ZodNativeEnum,
  ZodNever: () => ZodNever,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodParsedType: () => ZodParsedType,
  ZodPipeline: () => ZodPipeline,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRecord: () => ZodRecord,
  ZodSchema: () => ZodType,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodSymbol: () => ZodSymbol,
  ZodTransformer: () => ZodEffects,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  addIssueToContext: () => addIssueToContext,
  any: () => anyType,
  array: () => arrayType,
  bigint: () => bigIntType,
  boolean: () => booleanType,
  coerce: () => coerce,
  custom: () => custom,
  date: () => dateType,
  datetimeRegex: () => datetimeRegex,
  defaultErrorMap: () => en_default,
  discriminatedUnion: () => discriminatedUnionType,
  effect: () => effectsType,
  enum: () => enumType,
  function: () => functionType,
  getErrorMap: () => getErrorMap,
  getParsedType: () => getParsedType,
  instanceof: () => instanceOfType,
  intersection: () => intersectionType,
  isAborted: () => isAborted,
  isAsync: () => isAsync,
  isDirty: () => isDirty,
  isValid: () => isValid,
  late: () => late,
  lazy: () => lazyType,
  literal: () => literalType,
  makeIssue: () => makeIssue,
  map: () => mapType,
  nan: () => nanType,
  nativeEnum: () => nativeEnumType,
  never: () => neverType,
  null: () => nullType,
  nullable: () => nullableType,
  number: () => numberType,
  object: () => objectType,
  objectUtil: () => objectUtil,
  oboolean: () => oboolean,
  onumber: () => onumber,
  optional: () => optionalType,
  ostring: () => ostring,
  pipeline: () => pipelineType,
  preprocess: () => preprocessType,
  promise: () => promiseType,
  quotelessJson: () => quotelessJson,
  record: () => recordType,
  set: () => setType,
  setErrorMap: () => setErrorMap,
  strictObject: () => strictObjectType,
  string: () => stringType,
  symbol: () => symbolType,
  transformer: () => effectsType,
  tuple: () => tupleType,
  undefined: () => undefinedType,
  union: () => unionType,
  unknown: () => unknownType,
  util: () => util,
  void: () => voidType
});

// node_modules/zod/v3/helpers/util.js
var util;
(function(util2) {
  util2.assertEqual = (_) => {
  };
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
      // second overwrites first
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};

// node_modules/zod/v3/ZodError.js
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};
var ZodError = class _ZodError extends Error {
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof _ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        const firstEl = sub.path[0];
        fieldErrors[firstEl] = fieldErrors[firstEl] || [];
        fieldErrors[firstEl].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};

// node_modules/zod/v3/locales/en.js
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "bigint")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var en_default = errorMap;

// node_modules/zod/v3/errors.js
var overrideErrorMap = en_default;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}

// node_modules/zod/v3/helpers/parseUtil.js
var makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== void 0) {
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  }
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      overrideMap,
      // then global override map
      overrideMap === en_default ? void 0 : en_default
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class _ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return _ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x) => x.status === "aborted";
var isDirty = (x) => x.status === "dirty";
var isValid = (x) => x.status === "valid";
var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;

// node_modules/zod/v3/helpers/errorUtil.js
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));

// node_modules/zod/v3/types.js
var ParseInputLazyPath = class {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (Array.isArray(this._key)) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message ?? ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: message ?? required_error ?? ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: message ?? invalid_type_error ?? ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
var ZodType = class {
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    const ctx = {
      common: {
        issues: [],
        async: params?.async ?? false,
        contextualErrorMap: params?.errorMap
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async) {
      try {
        const result = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        if (err?.message?.toLowerCase()?.includes("encountered")) {
          this["~standard"].async = true;
        }
        ctx.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params?.errorMap,
        async: true
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (data) => this["~validate"](data)
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let secondsRegexSource = `[0-5]\\d`;
  if (args.precision) {
    secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
  }
  const secondsQuantifier = args.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version2) {
  if ((version2 === "v4" || !version2) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version2 === "v6" || !version2) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split(".");
    if (!header)
      return false;
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null)
      return false;
    if ("typ" in decoded && decoded?.typ !== "JWT")
      return false;
    if (!decoded.alg)
      return false;
    if (alg && decoded.alg !== alg)
      return false;
    return true;
  } catch {
    return false;
  }
}
function isValidCidr(ip, version2) {
  if ((version2 === "v4" || !version2) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version2 === "v6" || !version2) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}
var ZodString = class _ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "jwt") {
        if (!isValidJWT(input.data, check.alg)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cidr") {
        if (!isValidCidr(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64url") {
        if (!base64urlRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  cidr(options) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      offset: options?.offset ?? false,
      local: options?.local ?? false,
      ...errorUtil.errToObj(options?.message)
    });
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options
      });
    }
    return this._addCheck({
      kind: "time",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      ...errorUtil.errToObj(options?.message)
    });
  }
  duration(message) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options?.position,
      ...errorUtil.errToObj(options?.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = (params) => {
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
var ZodNumber = class _ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null;
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class _ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      try {
        input.data = BigInt(input.data);
      } catch {
        return this._getInvalidInput(input);
      }
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      return this._getInvalidInput(input);
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _getInvalidInput(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    });
    return INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodBigInt.create = (params) => {
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodDate = class _ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (Number.isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new _ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: params?.coerce || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodSymbol = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class _ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new _ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new _ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new _ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
var ZodObject = class _ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    this._cached = { shape, keys };
    return this._cached;
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip") {
      } else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: errorUtil.errToObj(message).message ?? defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new _ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new _ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new _ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    for (const key of util.objectKeys(mask)) {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional) {
    return [void 0, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
};
var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new _ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}
var ZodIntersection = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class _ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new _ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class _ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new _ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new _ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
var ZodMap = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class _ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new _ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new _ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size2, message) {
    return this.min(size2, message).max(size2, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class _ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new _ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new _ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new _ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
};
var ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ZodEnum = class _ZodEnum extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(this._def.values);
    }
    if (!this._cache.has(input.data)) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return _ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(util.getValidEnumValues(this._def.values));
    }
    if (!this._cache.has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        });
      } else {
        if (status.value === "aborted")
          return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result.status === "aborted")
          return INVALID;
        if (result.status === "dirty")
          return DIRTY(result.value);
        if (status.value === "dirty")
          return DIRTY(result.value);
        return result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return INVALID;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return INVALID;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
            status: status.value,
            value: result
          }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
var ZodCatch = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = /* @__PURE__ */ Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class _ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new _ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
var ZodReadonly = class extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    const freeze = (data) => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    };
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
function cleanParams(params, data) {
  const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
  const p2 = typeof p === "string" ? { message: p } : p;
  return p2;
}
function custom(check, _params = {}, fatal) {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      const r = check(data);
      if (r instanceof Promise) {
        return r.then((r2) => {
          if (!r2) {
            const params = cleanParams(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
          }
        });
      }
      if (!r) {
        const params = cleanParams(_params, data);
        const _fatal = params.fatal ?? fatal ?? true;
        ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
      }
      return;
    });
  return ZodAny.create();
}
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: ((arg) => ZodString.create({ ...arg, coerce: true })),
  number: ((arg) => ZodNumber.create({ ...arg, coerce: true })),
  boolean: ((arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  })),
  bigint: ((arg) => ZodBigInt.create({ ...arg, coerce: true })),
  date: ((arg) => ZodDate.create({ ...arg, coerce: true }))
};
var NEVER = INVALID;

// node_modules/@okxweb3/app-x402-core/dist/esm/chunk-CS33MEMU.mjs
var NonEmptyString = external_exports.string().min(1);
var Any = external_exports.record(external_exports.unknown());
var OptionalAny = external_exports.record(external_exports.unknown()).optional().nullable();
var NetworkSchema = external_exports.string().min(3).refine((val) => val.includes(":"), {
  message: "Network must be in CAIP-2 format (e.g., 'eip155:196')"
});
var ResourceInfoSchema = external_exports.object({
  url: NonEmptyString,
  description: external_exports.string().optional(),
  mimeType: external_exports.string().optional()
});
var PaymentRequirementsSchema = external_exports.object({
  scheme: NonEmptyString,
  network: NetworkSchema,
  amount: NonEmptyString,
  asset: NonEmptyString,
  payTo: NonEmptyString,
  maxTimeoutSeconds: external_exports.number().positive(),
  extra: OptionalAny
});
var PaymentRequiredSchema = external_exports.object({
  x402Version: external_exports.literal(2),
  error: external_exports.string().optional(),
  resource: ResourceInfoSchema,
  accepts: external_exports.array(PaymentRequirementsSchema).min(1),
  extensions: OptionalAny
});
var PaymentPayloadSchema = external_exports.object({
  x402Version: external_exports.literal(2),
  resource: ResourceInfoSchema.optional(),
  accepted: PaymentRequirementsSchema,
  payload: Any,
  extensions: OptionalAny
});

// node_modules/@okxweb3/app-x402-core/dist/esm/chunk-E75BE7CV.mjs
var DEFAULT_FACILITATOR_URL = "https://web3.okx.com/facilitator";
var GET_SUPPORTED_RETRIES = 3;
var GET_SUPPORTED_RETRY_DELAY_MS = 1e3;
var verifyResponseSchema = external_exports.object({
  isValid: external_exports.boolean(),
  invalidReason: external_exports.string().nullish().transform((v) => v ?? void 0),
  invalidMessage: external_exports.string().nullish().transform((v) => v ?? void 0),
  payer: external_exports.string().nullish().transform((v) => v ?? void 0),
  extensions: external_exports.record(external_exports.string(), external_exports.unknown()).nullish().transform((v) => v ?? void 0)
});
var settleResponseSchema = external_exports.object({
  success: external_exports.boolean(),
  // OKX extension: pending (async), success (immediate), timeout (on-chain timed out)
  status: external_exports.enum(["pending", "success", "timeout"]).nullish().transform((v) => v ?? void 0).optional(),
  errorReason: external_exports.string().nullish().transform((v) => v ?? void 0),
  errorMessage: external_exports.string().nullish().transform((v) => v ?? void 0),
  payer: external_exports.string().nullish().transform((v) => v ?? void 0),
  transaction: external_exports.string(),
  network: external_exports.custom((value) => typeof value === "string"),
  amount: external_exports.string().nullish().transform((v) => v ?? void 0),
  extensions: external_exports.record(external_exports.string(), external_exports.unknown()).nullish().transform((v) => v ?? void 0)
});
var supportedKindSchema = external_exports.object({
  x402Version: external_exports.number(),
  scheme: external_exports.string(),
  network: external_exports.custom(
    (value) => typeof value === "string"
  ),
  extra: external_exports.record(external_exports.string(), external_exports.unknown()).nullish().transform((v) => v ?? void 0)
});
var supportedResponseSchema = external_exports.object({
  kinds: external_exports.array(supportedKindSchema),
  extensions: external_exports.array(external_exports.string()).default([]),
  signers: external_exports.record(external_exports.string(), external_exports.array(external_exports.string())).default({})
});
function responseExcerpt(text2, limit = 200) {
  const compact = text2.trim().replace(/\s+/g, " ");
  if (!compact) {
    return "<empty response>";
  }
  if (compact.length <= limit) {
    return compact;
  }
  return `${compact.slice(0, limit - 3)}...`;
}
async function parseSuccessResponse(response, schema, operation) {
  const text2 = await response.text();
  let data;
  try {
    data = JSON.parse(text2);
  } catch {
    throw new FacilitatorResponseError(
      `Facilitator ${operation} returned invalid JSON: ${responseExcerpt(text2)}`
    );
  }
  const parsed = schema.safeParse(data);
  if (!parsed.success) {
    throw new FacilitatorResponseError(
      `Facilitator ${operation} returned invalid data: ${responseExcerpt(text2)}`
    );
  }
  return parsed.data;
}
var HTTPFacilitatorClient = class {
  /**
   * Creates a new HTTPFacilitatorClient instance.
   *
   * @param config - Configuration options for the facilitator client
   */
  constructor(config) {
    this.url = config?.url || DEFAULT_FACILITATOR_URL;
    this._createAuthHeaders = config?.createAuthHeaders;
    this._createSubscriptionAuthHeaders = config?.createSubscriptionAuthHeaders;
    this._fetchFn = config?.fetchFn ?? fetch;
  }
  /**
   * Verify a payment with the facilitator
   *
   * @param paymentPayload - The payment to verify
   * @param paymentRequirements - The requirements to verify against
   * @returns Verification response
   */
  async verify(paymentPayload, paymentRequirements) {
    let headers = {
      "Content-Type": "application/json"
    };
    if (this._createAuthHeaders) {
      const authHeaders = await this.createAuthHeaders("verify");
      headers = { ...headers, ...authHeaders.headers };
    }
    const response = await this._fetchFn(`${this.url}/verify`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        x402Version: paymentPayload.x402Version,
        paymentPayload: this.toJsonSafe(paymentPayload),
        paymentRequirements: this.toJsonSafe(paymentRequirements)
      })
    });
    if (!response.ok) {
      const text2 = await response.text();
      let data;
      try {
        data = JSON.parse(text2);
      } catch {
        throw new Error(`Facilitator verify failed (${response.status}): ${responseExcerpt(text2)}`);
      }
      if (typeof data === "object" && data !== null && "isValid" in data) {
        throw new VerifyError(response.status, data);
      }
      throw new Error(
        `Facilitator verify failed (${response.status}): ${responseExcerpt(JSON.stringify(data))}`
      );
    }
    return parseSuccessResponse(response, verifyResponseSchema, "verify");
  }
  /**
   * Settle a payment with the facilitator
   *
   * @param paymentPayload - The payment to settle
   * @param paymentRequirements - The requirements for settlement
   * @returns Settlement response
   */
  async settle(paymentPayload, paymentRequirements) {
    let headers = {
      "Content-Type": "application/json"
    };
    if (this._createAuthHeaders) {
      const authHeaders = await this.createAuthHeaders("settle");
      headers = { ...headers, ...authHeaders.headers };
    }
    const response = await this._fetchFn(`${this.url}/settle`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        x402Version: paymentPayload.x402Version,
        paymentPayload: this.toJsonSafe(paymentPayload),
        paymentRequirements: this.toJsonSafe(paymentRequirements)
      })
    });
    if (!response.ok) {
      const text2 = await response.text();
      let data;
      try {
        data = JSON.parse(text2);
      } catch {
        throw new Error(`Facilitator settle failed (${response.status}): ${responseExcerpt(text2)}`);
      }
      if (typeof data === "object" && data !== null && "success" in data) {
        throw new SettleError(response.status, data);
      }
      throw new Error(
        `Facilitator settle failed (${response.status}): ${responseExcerpt(JSON.stringify(data))}`
      );
    }
    return parseSuccessResponse(response, settleResponseSchema, "settle");
  }
  /**
   * Get supported payment kinds and extensions from the facilitator.
   * Retries with exponential backoff on 429 rate limit errors.
   *
   * @returns Supported payment kinds and extensions
   */
  async getSupported() {
    let headers = {
      "Content-Type": "application/json"
    };
    if (this._createAuthHeaders) {
      const authHeaders = await this.createAuthHeaders("supported");
      headers = { ...headers, ...authHeaders.headers };
    }
    let lastError = null;
    for (let attempt = 0; attempt < GET_SUPPORTED_RETRIES; attempt++) {
      const response = await this._fetchFn(`${this.url}/supported`, {
        method: "GET",
        headers
      });
      if (response.ok) {
        return parseSuccessResponse(response, supportedResponseSchema, "supported");
      }
      const errorText = await response.text().catch(() => response.statusText);
      lastError = new Error(
        `Facilitator getSupported failed (${response.status}): ${responseExcerpt(errorText)}`
      );
      if (response.status === 429 && attempt < GET_SUPPORTED_RETRIES - 1) {
        const delay = GET_SUPPORTED_RETRY_DELAY_MS * Math.pow(2, attempt);
        await new Promise((resolve) => setTimeout(resolve, delay));
        continue;
      }
      throw lastError;
    }
    throw lastError ?? new Error("Facilitator getSupported failed after retries");
  }
  /**
   * Query on-chain settlement status by transaction hash.
   *
   * @param txHash - The transaction hash to query
   * @returns Settlement status response
   */
  async getSettleStatus(txHash) {
    let headers = {
      "Content-Type": "application/json"
    };
    if (this._createAuthHeaders) {
      const authHeaders = await this.createAuthHeaders("settle/status");
      headers = { ...headers, ...authHeaders.headers };
    }
    const response = await this._fetchFn(
      `${this.url}/settle/status?txHash=${encodeURIComponent(txHash)}`,
      {
        method: "GET",
        headers
      }
    );
    if (!response.ok) {
      const text2 = await response.text().catch(() => response.statusText);
      throw new Error(
        `Facilitator getSettleStatus failed (${response.status}): ${responseExcerpt(text2)}`
      );
    }
    const json = await response.json();
    return json;
  }
  /**
   * Creates authentication headers for a specific path.
   *
   * @param path - The path to create authentication headers for (e.g., "verify", "settle", "supported")
   * @returns An object containing the authentication headers for the specified path
   */
  async createAuthHeaders(path) {
    if (this._createAuthHeaders) {
      const authHeaders = await this._createAuthHeaders();
      return {
        headers: authHeaders[path] ?? {}
      };
    }
    return {
      headers: {}
    };
  }
  /**
   * Helper to convert objects to JSON-safe format.
   * Handles BigInt and other non-JSON types.
   *
   * @param obj - The object to convert
   * @returns The JSON-safe representation of the object
   */
  toJsonSafe(obj) {
    return JSON.parse(
      JSON.stringify(obj, (_, value) => typeof value === "bigint" ? value.toString() : value)
    );
  }
  // ── SubscriptionFacilitatorClient (period) ─────────────
  //
  // Generic JSON POST / GET helpers parameterized by `op` so the same code
  // path covers all five subscription endpoints. The standard OKX envelope
  // `{ code, msg?, data? }` is returned to the caller unparsed (the
  // subscription scheme reads `code === "0"` and `data` directly).
  async subscriptionAuthHeaders(op) {
    if (!this._createSubscriptionAuthHeaders) return {};
    return this._createSubscriptionAuthHeaders(op);
  }
  async subscriptionPost(op, path, body) {
    const headers = {
      "Content-Type": "application/json",
      ...await this.subscriptionAuthHeaders(op)
    };
    const resp = await this._fetchFn(`${this.url}${path}`, {
      method: "POST",
      headers,
      body: JSON.stringify(this.toJsonSafe(body))
    });
    if (!resp.ok) {
      throw new Error(`facilitator ${op} returned HTTP ${resp.status}: ${await resp.text()}`);
    }
    return await resp.json();
  }
  async subscriptionGet(op, path) {
    const headers = await this.subscriptionAuthHeaders(op);
    const resp = await this._fetchFn(`${this.url}${path}`, { method: "GET", headers });
    if (!resp.ok) {
      throw new Error(`facilitator ${op} returned HTTP ${resp.status}: ${await resp.text()}`);
    }
    return await resp.json();
  }
  /**
   * Build the {chainIndex, terms, permit, termsSig, permitSig, syncSettle}
   * request body shared by subscribe / change endpoints.
   */
  buildWriteBody(payload, requirements, syncSettle) {
    const inner = asSubscriptionPaymentInner(payload);
    return {
      chainIndex: parseChainIdFromNetwork(requirements.network),
      terms: inner.terms,
      permit: inner.permitSingle,
      termsSig: inner.termsSignature,
      permitSig: inner.permitSingleSignature,
      syncSettle: syncSettle ?? true
    };
  }
  async subscribe(paymentPayload, paymentRequirements, syncSettle) {
    return this.subscriptionPost(
      "subscribe",
      "/api/v6/pay/x402/subscriptions",
      this.buildWriteBody(paymentPayload, paymentRequirements, syncSettle)
    );
  }
  async changeSubscription(paymentPayload, paymentRequirements, oldSubId, syncSettle) {
    return this.subscriptionPost(
      "change",
      "/api/v6/pay/x402/subscriptions/change",
      {
        ...this.buildWriteBody(paymentPayload, paymentRequirements, syncSettle),
        // `oldSubId` is informational — server reads
        // newTerms.changeFromSubId for the authoritative value.
        oldSubId,
        // change body uses `newTerms` not `terms`.
        newTerms: asSubscriptionPaymentInner(paymentPayload).terms,
        terms: void 0
      }
    );
  }
  async cancelSubscription(subId, cancelAuth, syncSettle) {
    return this.subscriptionPost(
      "cancel",
      "/api/v6/pay/x402/subscriptions/cancel",
      { subId, cancelAuth, syncSettle: syncSettle ?? true }
    );
  }
  async cancelPendingChange(subId, cancelAuth, syncSettle) {
    return this.subscriptionPost(
      "cancel-pending-change",
      "/api/v6/pay/x402/subscriptions/cancel-pending-change",
      { subId, cancelAuth, syncSettle: syncSettle ?? true }
    );
  }
  async chargeSubscription(subId, syncSettle) {
    return this.subscriptionPost(
      "charge",
      "/api/v6/pay/x402/subscriptions/charge",
      { subId, syncSettle: syncSettle ?? true }
    );
  }
  async finalizeExpired(subId, syncSettle) {
    return this.subscriptionPost(
      "finalize-expired",
      "/api/v6/pay/x402/subscriptions/finalize-expired",
      { subId, syncSettle: syncSettle ?? true }
    );
  }
  async getCharges(subId, limit = 50, offset = 0) {
    const q = new URLSearchParams({ subId, limit: String(limit), offset: String(offset) });
    return this.subscriptionGet(
      "getCharges",
      `/api/v6/pay/x402/subscriptions/charges?${q.toString()}`
    );
  }
  async getPendingChange(subId) {
    return this.subscriptionGet(
      "getPendingChange",
      `/api/v6/pay/x402/subscriptions/pending?subId=${encodeURIComponent(subId)}`
    );
  }
  async getSubscription(subId) {
    return this.subscriptionGet(
      "getSubscription",
      `/api/v6/pay/x402/subscriptions/detail?subId=${encodeURIComponent(subId)}`
    );
  }
};
var DEFAULT_POLL_INTERVAL_MS = 1e3;
var DEFAULT_POLL_DEADLINE_MS = 5e3;
function resolveSettlementOverrideAmount(rawAmount, requirements) {
  const percentMatch = rawAmount.match(/^(\d+(?:\.\d{0,2})?)%$/);
  if (percentMatch) {
    const [intPart, decPart = ""] = percentMatch[1].split(".");
    const scaledPercent = BigInt(intPart) * 100n + BigInt(decPart.padEnd(2, "0").slice(0, 2));
    const base = BigInt(requirements.amount);
    return (base * scaledPercent / 10000n).toString();
  }
  const dollarMatch = rawAmount.match(/^\$(\d+(?:\.\d+)?)$/);
  if (dollarMatch) {
    const decimals = typeof requirements.extra?.decimals === "number" ? requirements.extra.decimals : 6;
    const dollars = parseFloat(dollarMatch[1]);
    return Math.round(dollars * 10 ** decimals).toString();
  }
  return rawAmount;
}
var x402ResourceServer = class {
  /**
   * Creates a new x402ResourceServer instance.
   *
   * @param facilitatorClients - Optional facilitator client(s) for payment processing
   */
  constructor(facilitatorClients) {
    this.registeredServerSchemes = /* @__PURE__ */ new Map();
    this.supportedResponsesMap = /* @__PURE__ */ new Map();
    this.facilitatorClientsMap = /* @__PURE__ */ new Map();
    this.registeredExtensions = /* @__PURE__ */ new Map();
    this.beforeVerifyHooks = [];
    this.afterVerifyHooks = [];
    this.onVerifyFailureHooks = [];
    this.beforeSettleHooks = [];
    this.afterSettleHooks = [];
    this.onSettleFailureHooks = [];
    this.exemptPayerSet = /* @__PURE__ */ new Set();
    if (!facilitatorClients) {
      this.facilitatorClients = [new HTTPFacilitatorClient()];
    } else if (Array.isArray(facilitatorClients)) {
      this.facilitatorClients = facilitatorClients.length > 0 ? facilitatorClients : [new HTTPFacilitatorClient()];
    } else {
      this.facilitatorClients = [facilitatorClients];
    }
  }
  /**
   * Register a scheme/network server implementation.
   *
   * @param network - The network identifier
   * @param server - The scheme/network server implementation
   * @returns The x402ResourceServer instance for chaining
   */
  register(network, server) {
    if (!this.registeredServerSchemes.has(network)) {
      this.registeredServerSchemes.set(network, /* @__PURE__ */ new Map());
    }
    const serverByScheme = this.registeredServerSchemes.get(network);
    if (!serverByScheme.has(server.scheme)) {
      serverByScheme.set(server.scheme, server);
    }
    return this;
  }
  /**
   * Check if a scheme is registered for a given network.
   *
   * @param network - The network identifier
   * @param scheme - The payment scheme name
   * @returns True if the scheme is registered for the network, false otherwise
   */
  hasRegisteredScheme(network, scheme) {
    return !!findByNetworkAndScheme(this.registeredServerSchemes, scheme, network);
  }
  /**
   * Look up the registered SchemeNetworkServer for a given network + scheme.
   * Exposed so the HTTP dispatch layer can perform capability detection
   * (e.g. `hasSubscriptionCapability(scheme)`) on the actual instance.
   *
   * Pattern matching follows the same CAIP-style rules as `verifyPayment`:
   * registered keys may use wildcards like `eip155:*`.
   *
   * @param network - The network identifier
   * @param scheme - The payment scheme name
   * @returns The registered scheme server, or undefined if none matches.
   */
  findScheme(network, scheme) {
    return findByNetworkAndScheme(this.registeredServerSchemes, scheme, network);
  }
  /**
   * Registers a resource service extension that can enrich extension declarations.
   *
   * @param extension - The extension to register
   * @returns The x402ResourceServer instance for chaining
   */
  registerExtension(extension) {
    this.registeredExtensions.set(extension.key, extension);
    return this;
  }
  /**
   * Check if an extension is registered.
   *
   * @param key - The extension key
   * @returns True if the extension is registered
   */
  hasExtension(key) {
    return this.registeredExtensions.has(key);
  }
  /**
   * Get all registered extensions.
   *
   * @returns Array of registered extensions
   */
  getExtensions() {
    return Array.from(this.registeredExtensions.values());
  }
  /**
   * Enriches declared extensions using registered extension hooks.
   *
   * @param declaredExtensions - Extensions declared on the route
   * @param transportContext - Transport-specific context (HTTP, A2A, MCP, etc.)
   * @returns Enriched extensions map
   */
  enrichExtensions(declaredExtensions, transportContext) {
    const enriched = {};
    for (const [key, declaration] of Object.entries(declaredExtensions)) {
      const extension = this.registeredExtensions.get(key);
      if (extension?.enrichDeclaration) {
        enriched[key] = extension.enrichDeclaration(declaration, transportContext);
      } else {
        enriched[key] = declaration;
      }
    }
    return enriched;
  }
  /**
   * Register a hook to execute before payment verification.
   * Can abort verification by returning { abort: true, reason: string }
   *
   * @param hook - The hook function to register
   * @returns The x402ResourceServer instance for chaining
   */
  onBeforeVerify(hook) {
    this.beforeVerifyHooks.push(hook);
    return this;
  }
  /**
   * Register a hook to execute after successful payment verification.
   *
   * @param hook - The hook function to register
   * @returns The x402ResourceServer instance for chaining
   */
  onAfterVerify(hook) {
    this.afterVerifyHooks.push(hook);
    return this;
  }
  /**
   * Register a hook to execute when payment verification fails.
   * Can recover from failure by returning { recovered: true, result: VerifyResponse }
   *
   * @param hook - The hook function to register
   * @returns The x402ResourceServer instance for chaining
   */
  onVerifyFailure(hook) {
    this.onVerifyFailureHooks.push(hook);
    return this;
  }
  /**
   * Register a hook to execute before payment settlement.
   * Can abort settlement by returning { abort: true, reason: string }
   *
   * @param hook - The hook function to register
   * @returns The x402ResourceServer instance for chaining
   */
  onBeforeSettle(hook) {
    this.beforeSettleHooks.push(hook);
    return this;
  }
  /**
   * Register a hook to execute after successful payment settlement.
   *
   * @param hook - The hook function to register
   * @returns The x402ResourceServer instance for chaining
   */
  onAfterSettle(hook) {
    this.afterSettleHooks.push(hook);
    return this;
  }
  /**
   * Register a hook to execute when payment settlement fails.
   * Can recover from failure by returning { recovered: true, result: SettleResponse }
   *
   * @param hook - The hook function to register
   * @returns The x402ResourceServer instance for chaining
   */
  onSettleFailure(hook) {
    this.onSettleFailureHooks.push(hook);
    return this;
  }
  /**
   * Register settlement-exempt payer addresses.
   *
   * When a payment's declared payer is on this list, the request skips the whole
   * verify + settle (charge) flow: the signature is confirmed via the
   * facilitator's `verifySignature` endpoint (doc §3) and, on success, access is
   * granted without charging. Addresses are matched case-insensitively; calling
   * this multiple times adds to the existing set.
   *
   * @param addresses - Payer addresses to exempt from settlement
   * @returns The x402ResourceServer instance for chaining
   */
  exemptPayers(addresses) {
    for (const address of addresses) {
      const normalized = address.trim().toLowerCase();
      if (normalized) this.exemptPayerSet.add(normalized);
    }
    return this;
  }
  /**
   * Attempt the settlement-exemption bypass for a payment.
   *
   * First checks whether the payload's declared payer is on the exempt allowlist
   * — reading `from` from either exact payload shape: EIP-3009
   * (`authorization.from`) or Permit2 (`permit2Authorization.from`). Only when it
   * matches does it call the facilitator's `verifySignature` (doc §3) to confirm
   * the signature; if valid, returns the result so the caller can skip the entire
   * verify + settle flow and deliver the resource. Returns null in every other
   * case — no allowlist, non-exempt payer, facilitator without `verifySignature`,
   * invalid signature, or any error — so the caller runs the normal flow.
   *
   * The declared `from` is only used to gate the allowlist lookup (so
   * `verifySignature` runs solely for exempt candidates); trust comes from the
   * signature check.
   *
   * @param paymentPayload - The payment payload carrying the signature
   * @param requirements - The matching payment requirements
   * @returns A valid VerifyResponse to grant access, or null
   */
  async tryExemptSignatureBypass(paymentPayload, requirements) {
    if (this.exemptPayerSet.size === 0) return null;
    const inner = paymentPayload.payload;
    const payer = inner?.authorization?.from ?? inner?.permit2Authorization?.from;
    if (!payer || !this.exemptPayerSet.has(payer.toLowerCase())) return null;
    const client = this.getFacilitatorClient(
      paymentPayload.x402Version,
      requirements.network,
      requirements.scheme
    ) ?? this.facilitatorClients[0];
    if (!client?.verifySignature) return null;
    try {
      const result = await client.verifySignature(paymentPayload, requirements);
      return result.isValid ? result : null;
    } catch (error) {
      console.error("[x402] exempt verifySignature failed; falling back to normal flow:", error);
      return null;
    }
  }
  /**
   * Initialize by fetching supported kinds from all facilitators
   * Creates mappings for supported responses and facilitator clients
   * Earlier facilitators in the array get precedence
   */
  async initialize() {
    this.supportedResponsesMap.clear();
    this.facilitatorClientsMap.clear();
    let lastError;
    for (const facilitatorClient of this.facilitatorClients) {
      try {
        const supported = await facilitatorClient.getSupported();
        for (const kind of supported.kinds) {
          const x402Version2 = kind.x402Version;
          if (!this.supportedResponsesMap.has(x402Version2)) {
            this.supportedResponsesMap.set(x402Version2, /* @__PURE__ */ new Map());
          }
          const responseVersionMap = this.supportedResponsesMap.get(x402Version2);
          if (!this.facilitatorClientsMap.has(x402Version2)) {
            this.facilitatorClientsMap.set(x402Version2, /* @__PURE__ */ new Map());
          }
          const clientVersionMap = this.facilitatorClientsMap.get(x402Version2);
          if (!responseVersionMap.has(kind.network)) {
            responseVersionMap.set(kind.network, /* @__PURE__ */ new Map());
          }
          const responseNetworkMap = responseVersionMap.get(kind.network);
          if (!clientVersionMap.has(kind.network)) {
            clientVersionMap.set(kind.network, /* @__PURE__ */ new Map());
          }
          const clientNetworkMap = clientVersionMap.get(kind.network);
          if (!responseNetworkMap.has(kind.scheme)) {
            responseNetworkMap.set(kind.scheme, supported);
            clientNetworkMap.set(kind.scheme, facilitatorClient);
          }
        }
      } catch (error) {
        lastError = error;
        console.warn(`Failed to fetch supported kinds from facilitator: ${error}`);
      }
    }
    if (this.supportedResponsesMap.size === 0) {
      throw lastError ? new Error(
        "Failed to initialize: no supported payment kinds loaded from any facilitator.",
        {
          cause: lastError
        }
      ) : new Error(
        "Failed to initialize: no supported payment kinds loaded from any facilitator."
      );
    }
  }
  /**
   * Get supported kind for a specific version, network, and scheme
   *
   * @param x402Version - The x402 version
   * @param network - The network identifier
   * @param scheme - The payment scheme
   * @returns The supported kind or undefined if not found
   */
  getSupportedKind(x402Version2, network, scheme) {
    const versionMap = this.supportedResponsesMap.get(x402Version2);
    if (!versionMap) return void 0;
    const supportedResponse = findByNetworkAndScheme(versionMap, scheme, network);
    if (!supportedResponse) return void 0;
    return supportedResponse.kinds.find(
      (kind) => kind.x402Version === x402Version2 && kind.network === network && kind.scheme === scheme
    );
  }
  /**
   * Get facilitator extensions for a specific version, network, and scheme
   *
   * @param x402Version - The x402 version
   * @param network - The network identifier
   * @param scheme - The payment scheme
   * @returns The facilitator extensions or empty array if not found
   */
  getFacilitatorExtensions(x402Version2, network, scheme) {
    const versionMap = this.supportedResponsesMap.get(x402Version2);
    if (!versionMap) return [];
    const supportedResponse = findByNetworkAndScheme(versionMap, scheme, network);
    return supportedResponse?.extensions || [];
  }
  /**
   * Build payment requirements for a protected resource
   *
   * @param resourceConfig - Configuration for the protected resource
   * @returns Array of payment requirements
   */
  async buildPaymentRequirements(resourceConfig) {
    const requirements = [];
    const scheme = resourceConfig.scheme;
    const SchemeNetworkServer = findByNetworkAndScheme(
      this.registeredServerSchemes,
      scheme,
      resourceConfig.network
    );
    if (!SchemeNetworkServer) {
      console.warn(
        `No server implementation registered for scheme: ${scheme}, network: ${resourceConfig.network}`
      );
      return requirements;
    }
    const supportedKind = this.getSupportedKind(
      x402Version,
      resourceConfig.network,
      SchemeNetworkServer.scheme
    );
    if (!supportedKind) {
      throw new Error(
        `Facilitator does not support ${SchemeNetworkServer.scheme} on ${resourceConfig.network}. Make sure to call initialize() to fetch supported kinds from facilitators.`
      );
    }
    const facilitatorExtensions = this.getFacilitatorExtensions(
      x402Version,
      resourceConfig.network,
      SchemeNetworkServer.scheme
    );
    const parsedPrice = await SchemeNetworkServer.parsePrice(
      resourceConfig.price,
      resourceConfig.network
    );
    const baseRequirements = {
      scheme: SchemeNetworkServer.scheme,
      network: resourceConfig.network,
      amount: parsedPrice.amount,
      asset: parsedPrice.asset,
      payTo: resourceConfig.payTo,
      maxTimeoutSeconds: resourceConfig.maxTimeoutSeconds || 300,
      // Default 5 minutes
      extra: {
        ...parsedPrice.extra,
        ...resourceConfig.extra
        // Merge user-provided extra
      }
    };
    const requirement = await SchemeNetworkServer.enhancePaymentRequirements(
      baseRequirements,
      {
        ...supportedKind,
        x402Version
      },
      facilitatorExtensions
    );
    requirements.push(requirement);
    return requirements;
  }
  /**
   * Build payment requirements from multiple payment options
   * This method handles resolving dynamic payTo/price functions and builds requirements for each option
   *
   * @param paymentOptions - Array of payment options to convert
   * @param context - HTTP request context for resolving dynamic functions
   * @returns Array of payment requirements (one per option)
   */
  async buildPaymentRequirementsFromOptions(paymentOptions, context) {
    const allRequirements = [];
    for (const option of paymentOptions) {
      const resolvedPayTo = typeof option.payTo === "function" ? await option.payTo(context) : option.payTo;
      const resolvedPrice = typeof option.price === "function" ? await option.price(context) : option.price;
      const resourceConfig = {
        scheme: option.scheme,
        payTo: resolvedPayTo,
        price: resolvedPrice,
        network: option.network,
        maxTimeoutSeconds: option.maxTimeoutSeconds,
        extra: option.extra
      };
      const requirements = await this.buildPaymentRequirements(resourceConfig);
      allRequirements.push(...requirements);
    }
    return allRequirements;
  }
  /**
   * Create a payment required response
   *
   * @param requirements - Payment requirements
   * @param resourceInfo - Resource information
   * @param error - Error message
   * @param extensions - Optional declared extensions (for per-key enrichment)
   * @param transportContext - Optional transport-specific context (e.g., HTTP request, MCP tool context)
   * @returns Payment required response object
   */
  async createPaymentRequiredResponse(requirements, resourceInfo, error, extensions, transportContext) {
    let response = {
      x402Version: 2,
      error,
      resource: resourceInfo,
      accepts: requirements
    };
    if (extensions && Object.keys(extensions).length > 0) {
      response.extensions = extensions;
    }
    if (extensions) {
      for (const [key, declaration] of Object.entries(extensions)) {
        const extension = this.registeredExtensions.get(key);
        if (extension?.enrichPaymentRequiredResponse) {
          try {
            const context = {
              requirements,
              resourceInfo,
              error,
              paymentRequiredResponse: response,
              transportContext
            };
            const extensionData = await extension.enrichPaymentRequiredResponse(
              declaration,
              context
            );
            if (extensionData !== void 0) {
              if (!response.extensions) {
                response.extensions = {};
              }
              response.extensions[key] = extensionData;
            }
          } catch (error2) {
            console.error(
              `Error in enrichPaymentRequiredResponse hook for extension ${key}:`,
              error2
            );
          }
        }
      }
    }
    return response;
  }
  /**
   * Verify a payment against requirements
   *
   * @param paymentPayload - The payment payload to verify
   * @param requirements - The payment requirements
   * @returns Verification response
   */
  async verifyPayment(paymentPayload, requirements) {
    const context = {
      paymentPayload,
      requirements
    };
    for (const hook of this.beforeVerifyHooks) {
      try {
        const result = await hook(context);
        if (result && "abort" in result && result.abort) {
          return {
            isValid: false,
            invalidReason: result.reason,
            invalidMessage: result.message
          };
        }
      } catch (error) {
        throw new VerifyError(400, {
          isValid: false,
          invalidReason: "before_verify_hook_error",
          invalidMessage: error instanceof Error ? error.message : ""
        });
      }
    }
    try {
      const facilitatorClient = this.getFacilitatorClient(
        paymentPayload.x402Version,
        requirements.network,
        requirements.scheme
      );
      let verifyResult;
      if (!facilitatorClient) {
        let lastError;
        for (const client of this.facilitatorClients) {
          try {
            verifyResult = await client.verify(paymentPayload, requirements);
            break;
          } catch (error) {
            lastError = error;
          }
        }
        if (!verifyResult) {
          throw lastError || new Error(
            `No facilitator supports ${requirements.scheme} on ${requirements.network} for v${paymentPayload.x402Version}`
          );
        }
      } else {
        verifyResult = await facilitatorClient.verify(paymentPayload, requirements);
      }
      const resultContext = {
        ...context,
        result: verifyResult
      };
      for (const hook of this.afterVerifyHooks) {
        await hook(resultContext);
      }
      return verifyResult;
    } catch (error) {
      const failureContext = {
        ...context,
        error
      };
      for (const hook of this.onVerifyFailureHooks) {
        const result = await hook(failureContext);
        if (result && "recovered" in result && result.recovered) {
          return result.result;
        }
      }
      throw error;
    }
  }
  /**
   * Settle a verified payment
   *
   * @param paymentPayload - The payment payload to settle
   * @param requirements - The payment requirements
   * @param declaredExtensions - Optional declared extensions (for per-key enrichment)
   * @param transportContext - Optional transport-specific context (e.g., HTTP request/response, MCP tool context)
   * @param settlementOverrides - Optional overrides for settlement parameters (e.g., partial settlement amount)
   * @returns Settlement response
   */
  async settlePayment(paymentPayload, requirements, declaredExtensions, transportContext, settlementOverrides) {
    let effectiveRequirements = requirements;
    if (settlementOverrides?.amount !== void 0) {
      effectiveRequirements = {
        ...requirements,
        amount: resolveSettlementOverrideAmount(settlementOverrides.amount, requirements)
      };
    }
    const context = {
      paymentPayload,
      requirements: effectiveRequirements
    };
    for (const hook of this.beforeSettleHooks) {
      try {
        const result = await hook(context);
        if (result && "abort" in result && result.abort) {
          throw new SettleError(400, {
            success: false,
            errorReason: result.reason,
            errorMessage: result.message,
            transaction: "",
            network: requirements.network
          });
        }
      } catch (error) {
        if (error instanceof SettleError) {
          throw error;
        }
        throw new SettleError(400, {
          success: false,
          errorReason: "before_settle_hook_error",
          errorMessage: error instanceof Error ? error.message : "",
          transaction: "",
          network: requirements.network
        });
      }
    }
    try {
      const facilitatorClient = this.getFacilitatorClient(
        paymentPayload.x402Version,
        effectiveRequirements.network,
        effectiveRequirements.scheme
      );
      let settleResult;
      if (!facilitatorClient) {
        let lastError;
        for (const client of this.facilitatorClients) {
          try {
            settleResult = await client.settle(paymentPayload, effectiveRequirements);
            break;
          } catch (error) {
            lastError = error;
          }
        }
        if (!settleResult) {
          throw lastError || new Error(
            `No facilitator supports ${effectiveRequirements.scheme} on ${effectiveRequirements.network} for v${paymentPayload.x402Version}`
          );
        }
      } else {
        settleResult = await facilitatorClient.settle(paymentPayload, effectiveRequirements);
      }
      const resultContext = {
        ...context,
        result: settleResult,
        transportContext
      };
      for (const hook of this.afterSettleHooks) {
        await hook(resultContext);
      }
      if (declaredExtensions) {
        for (const [key, declaration] of Object.entries(declaredExtensions)) {
          const extension = this.registeredExtensions.get(key);
          if (extension?.enrichSettlementResponse) {
            try {
              const extensionData = await extension.enrichSettlementResponse(
                declaration,
                resultContext
              );
              if (extensionData !== void 0) {
                if (!settleResult.extensions) {
                  settleResult.extensions = {};
                }
                settleResult.extensions[key] = extensionData;
              }
            } catch (error) {
              console.error(`Error in enrichSettlementResponse hook for extension ${key}:`, error);
            }
          }
        }
      }
      return settleResult;
    } catch (error) {
      const failureContext = {
        ...context,
        error
      };
      for (const hook of this.onSettleFailureHooks) {
        const result = await hook(failureContext);
        if (result && "recovered" in result && result.recovered) {
          return result.result;
        }
      }
      throw error;
    }
  }
  /**
   * Find matching payment requirements for a payment
   *
   * @param availableRequirements - Array of available payment requirements
   * @param paymentPayload - The payment payload
   * @returns Matching payment requirements or undefined
   */
  findMatchingRequirements(availableRequirements, paymentPayload) {
    return availableRequirements.find((serverReq) => {
      const { extra: serverExtra, ...serverBase } = serverReq;
      const { extra: buyerExtra, ...buyerBase } = paymentPayload.accepted ?? {};
      if (!deepEqual(serverBase, buyerBase)) return false;
      if (!serverExtra && !buyerExtra) return true;
      if (!serverExtra) return true;
      if (!buyerExtra) return false;
      for (const [key, value] of Object.entries(serverExtra)) {
        if (!deepEqual(buyerExtra[key], value)) return false;
      }
      return true;
    });
  }
  /**
   * Process a payment request
   *
   * @param paymentPayload - Optional payment payload if provided
   * @param resourceConfig - Configuration for the protected resource
   * @param resourceInfo - Information about the resource being accessed
   * @param extensions - Optional extensions to include in the response
   * @returns Processing result
   */
  async processPaymentRequest(paymentPayload, resourceConfig, resourceInfo, extensions) {
    const requirements = await this.buildPaymentRequirements(resourceConfig);
    if (!paymentPayload) {
      return {
        success: false,
        requiresPayment: await this.createPaymentRequiredResponse(
          requirements,
          resourceInfo,
          "Payment required",
          extensions
        )
      };
    }
    const matchingRequirements = this.findMatchingRequirements(requirements, paymentPayload);
    if (!matchingRequirements) {
      return {
        success: false,
        requiresPayment: await this.createPaymentRequiredResponse(
          requirements,
          resourceInfo,
          "No matching payment requirements found",
          extensions
        )
      };
    }
    const verificationResult = await this.verifyPayment(paymentPayload, matchingRequirements);
    if (!verificationResult.isValid) {
      return {
        success: false,
        error: verificationResult.invalidReason,
        verificationResult
      };
    }
    return {
      success: true,
      verificationResult
    };
  }
  /**
   * Poll `GET /settle/status` until a terminal state is reached or deadline expires.
   *
   * Used when settle returns `status="timeout"` (exact + syncSettle=true).
   * Mirrors Rust: `X402ResourceServer::poll_settle_status`.
   *
   * @param txHash - Transaction hash to query
   * @param paymentPayload - The payment payload (used to find the correct facilitator client)
   * @param requirements - The payment requirements (used to find the correct facilitator client)
   * @param pollDeadlineMs - Max time to poll in ms (default 5000)
   * @returns Poll result: "success", "failed", or "timeout"
   */
  async pollSettleStatus(txHash, paymentPayload, requirements, pollDeadlineMs = DEFAULT_POLL_DEADLINE_MS) {
    const facilitatorClient = this.getFacilitatorClient(
      paymentPayload.x402Version,
      requirements.network,
      requirements.scheme
    ) ?? this.facilitatorClients[0];
    if (!facilitatorClient?.getSettleStatus) {
      return "timeout";
    }
    const deadline = Date.now() + pollDeadlineMs;
    while (Date.now() < deadline) {
      try {
        const resp = await facilitatorClient.getSettleStatus(txHash);
        if (!resp.success) {
          return "failed";
        }
        if (resp.status === "success") {
          return "success";
        }
      } catch {
      }
      const remaining = deadline - Date.now();
      if (remaining <= 0) break;
      await new Promise(
        (resolve) => setTimeout(resolve, Math.min(DEFAULT_POLL_INTERVAL_MS, remaining))
      );
    }
    return "timeout";
  }
  /**
   * Get facilitator client for a specific version, network, and scheme
   *
   * @param x402Version - The x402 version
   * @param network - The network identifier
   * @param scheme - The payment scheme
   * @returns The facilitator client or undefined if not found
   */
  getFacilitatorClient(x402Version2, network, scheme) {
    const versionMap = this.facilitatorClientsMap.get(x402Version2);
    if (!versionMap) return void 0;
    return findByNetworkAndScheme(versionMap, scheme, network);
  }
};
function decodePaymentSignatureHeader(paymentSignatureHeader) {
  if (!Base64EncodedRegex.test(paymentSignatureHeader)) {
    throw new Error("Invalid payment signature header");
  }
  return JSON.parse(safeBase64Decode(paymentSignatureHeader));
}
function encodePaymentRequiredHeader(paymentRequired) {
  return safeBase64Encode(JSON.stringify(paymentRequired));
}
function encodePaymentResponseHeader(paymentResponse) {
  return safeBase64Encode(JSON.stringify(paymentResponse));
}
var SETTLEMENT_OVERRIDES_HEADER = "settlement-overrides";
var RouteConfigurationError = class extends Error {
  /**
   * Creates a new RouteConfigurationError with the given validation errors.
   *
   * @param errors - The validation errors that caused this exception.
   */
  constructor(errors) {
    const message = `x402 Route Configuration Errors:
${errors.map((e) => `  - ${e.message}`).join("\n")}`;
    super(message);
    this.name = "RouteConfigurationError";
    this.errors = errors;
  }
};
var x402HTTPResourceServer = class {
  /**
   * Creates a new x402HTTPResourceServer instance.
   *
   * @param ResourceServer - The core x402ResourceServer instance to use
   * @param routes - Route configuration for payment-protected endpoints
   */
  constructor(ResourceServer, routes2) {
    this.compiledRoutes = [];
    this.protectedRequestHooks = [];
    this.beforeAccessHooks = [];
    this.pollDeadlineMs = DEFAULT_POLL_DEADLINE_MS;
    this.ResourceServer = ResourceServer;
    this.routesConfig = routes2;
    const normalizedRoutes = typeof routes2 === "object" && !("accepts" in routes2) ? routes2 : { "*": routes2 };
    for (const [pattern, config] of Object.entries(normalizedRoutes)) {
      const parsed = this.parseRoutePattern(pattern);
      this.compiledRoutes.push({
        verb: parsed.verb,
        regex: parsed.regex,
        config,
        pattern: parsed.path
      });
    }
  }
  /**
   * Get the underlying x402ResourceServer instance.
   *
   * @returns The underlying x402ResourceServer instance
   */
  get server() {
    return this.ResourceServer;
  }
  /**
   * Get the routes configuration.
   *
   * @returns The routes configuration
   */
  get routes() {
    return this.routesConfig;
  }
  /**
   * Initialize the HTTP resource server.
   *
   * This method initializes the underlying resource server (fetching facilitator support)
   * and then validates that all route payment configurations have corresponding
   * registered schemes and facilitator support.
   *
   * @throws RouteConfigurationError if any route's payment options don't have
   *         corresponding registered schemes or facilitator support
   *
   * @example
   * ```typescript
   * const httpServer = new x402HTTPResourceServer(server, routes);
   * await httpServer.initialize();
   * ```
   */
  async initialize() {
    await this.ResourceServer.initialize();
    const errors = this.validateRouteConfiguration();
    if (errors.length > 0) {
      throw new RouteConfigurationError(errors);
    }
  }
  /**
   * Register a custom paywall provider for generating HTML
   *
   * @param provider - PaywallProvider instance
   * @returns This service instance for chaining
   */
  registerPaywallProvider(provider) {
    this.paywallProvider = provider;
    return this;
  }
  /**
   * Register a hook that runs on every request to a protected route, before payment processing.
   * Hooks are executed in order of registration. The first hook to return a non-void result wins.
   *
   * @param hook - The request hook function
   * @returns The x402HTTPResourceServer instance for chaining
   */
  onProtectedRequest(hook) {
    this.protectedRequestHooks.push(hook);
    return this;
  }
  /**
   * Register a seller-global `onBeforeAccess` hook fired on every access-
   * verified subscription request, AFTER `verifyAccess` (signature + payer
   * + plan allowlist + period math) but BEFORE the handler runs. Seller
   * uses it for cross-cutting access policy (quota / ban list / feature
   * gating). Hooks are executed in order of registration; the first one
   * to return `{ ok: false }` denies (→ 402). Route-level
   * `RouteConfig.onBeforeAccess` runs AFTER all global hooks.
   *
   * @param hook - The hook function
   * @returns The x402HTTPResourceServer instance for chaining
   */
  onBeforeAccess(hook) {
    this.beforeAccessHooks.push(hook);
    return this;
  }
  /**
   * Register a hook to call when the facilitator returns status="timeout".
   * The hook should verify the tx on-chain and return { confirmed: boolean }.
   * If confirmed=true the resource is delivered (200); otherwise 402 is returned.
   *
   * @param hook - On-chain verification callback
   * @returns The x402HTTPResourceServer instance for chaining
   */
  onSettlementTimeout(hook) {
    this.timeoutRecoveryHook = hook;
    return this;
  }
  /**
   * Set the poll deadline for settle/status polling on timeout recovery.
   * Default is 5000ms.
   *
   * @param deadlineMs - Maximum time to poll in milliseconds
   * @returns The x402HTTPResourceServer instance for chaining
   */
  setPollDeadline(deadlineMs) {
    this.pollDeadlineMs = deadlineMs;
    return this;
  }
  /**
   * Process HTTP request and return response instructions
   * This is the main entry point for framework middleware
   *
   * @param context - HTTP request context
   * @param paywallConfig - Optional paywall configuration
   * @returns Process result indicating next action for middleware
   */
  async processHTTPRequest(context, paywallConfig) {
    const { adapter, path, method } = context;
    const routeMatch = this.getRouteConfig(path, method);
    if (!routeMatch) {
      return { type: "no-payment-required" };
    }
    const { config: routeConfig, pattern: routePattern } = routeMatch;
    const enrichedContext = { ...context, routePattern };
    for (const hook of this.protectedRequestHooks) {
      const result = await hook(enrichedContext, routeConfig);
      if (result && "grantAccess" in result) {
        return { type: "no-payment-required" };
      }
      if (result && "abort" in result) {
        return {
          type: "payment-error",
          response: {
            status: 403,
            headers: { "Content-Type": "application/json" },
            body: { error: result.reason }
          }
        };
      }
    }
    const paymentOptions = this.normalizePaymentOptions(routeConfig);
    const paymentPayload = this.extractPayment(adapter);
    if (routeConfig.operation === "cancel") {
      const cancelResult = await this.tryDispatchCancelFlow(adapter, routeConfig, paymentOptions);
      if (cancelResult) return cancelResult;
    }
    if (routeConfig.operation === "cancel-pending-change") {
      const r = await this.tryDispatchCancelPendingChangeFlow(adapter, routeConfig, paymentOptions);
      if (r) return r;
    }
    const resourceInfo = {
      url: routeConfig.resource || enrichedContext.adapter.getUrl(),
      description: routeConfig.description || "",
      mimeType: routeConfig.mimeType || ""
    };
    let requirements = await this.ResourceServer.buildPaymentRequirementsFromOptions(
      paymentOptions,
      enrichedContext
    );
    if (routeConfig.operation === "change") {
      let scheme = null;
      for (const opt of paymentOptions) {
        if (!opt.network || !opt.scheme) continue;
        scheme = await this.resolveSubscriptionScheme(opt.network, opt.scheme);
        if (scheme) break;
      }
      if (!scheme) {
        return {
          type: "payment-error",
          response: {
            status: 500,
            headers: { "Content-Type": "application/json" },
            body: { error: "change route: no subscription scheme registered" }
          }
        };
      }
      let currentSubId;
      if (paymentPayload) {
        const innerTerms = paymentPayload.payload?.terms;
        currentSubId = innerTerms?.changeFromSubId;
      } else {
        const accessHeader = this.extractAccessProofHeader(enrichedContext.adapter);
        if (!accessHeader) {
          return {
            type: "payment-error",
            response: {
              status: 401,
              headers: { "Content-Type": "application/json" },
              body: { error: "change route: missing APP-Access header" }
            }
          };
        }
        const { decodeAccessProof: decodeAccessProof2 } = await this.loadSubscriptionModule();
        let proof;
        try {
          proof = decodeAccessProof2(accessHeader);
        } catch {
          return {
            type: "payment-error",
            response: {
              status: 400,
              headers: { "Content-Type": "application/json" },
              body: { error: "change route: invalid APP-Access header" }
            }
          };
        }
        const verify = await scheme.verifyOwnership(proof);
        if (!verify.ok) {
          return {
            type: "payment-error",
            response: {
              status: 401,
              headers: { "Content-Type": "application/json" },
              body: { error: verify.error }
            }
          };
        }
        currentSubId = verify.subId;
      }
      if (!currentSubId) {
        return {
          type: "payment-error",
          response: {
            status: 400,
            headers: { "Content-Type": "application/json" },
            body: { error: "change route: cannot resolve currentSubId" }
          }
        };
      }
      const enriched = await scheme.enrichAcceptsForChange(requirements, currentSubId);
      if (enriched === null) {
        return {
          type: "payment-error",
          response: {
            status: 404,
            headers: { "Content-Type": "application/json" },
            body: { error: "sub_not_active_for_change" }
          }
        };
      }
      requirements = enriched;
    }
    let extensions = routeConfig.extensions;
    if (extensions) {
      extensions = this.ResourceServer.enrichExtensions(extensions, enrichedContext);
    }
    const transportContext = { request: enrichedContext };
    const paymentRequired = await this.ResourceServer.createPaymentRequiredResponse(
      requirements,
      resourceInfo,
      !paymentPayload ? "Payment required" : void 0,
      extensions,
      transportContext
    );
    if (routeConfig.operation !== "change") {
      const accessResult = await this.tryDispatchAccessFlow(
        adapter,
        routeConfig,
        paymentOptions,
        paymentRequired
      );
      if (accessResult) return accessResult;
    }
    if (paymentPayload) {
      const subResult = await this.tryDispatchSubscriptionPresettle(
        paymentPayload,
        paymentRequired.accepts,
        routeConfig.operation === "change" ? "change" : "subscribe"
      );
      if (subResult) return subResult;
    }
    if (!paymentPayload) {
      const unpaidBody = routeConfig.unpaidResponseBody ? await routeConfig.unpaidResponseBody(enrichedContext) : void 0;
      return {
        type: "payment-error",
        response: this.createHTTPResponse(
          paymentRequired,
          this.isWebBrowser(adapter),
          paywallConfig,
          routeConfig.customPaywallHtml,
          unpaidBody
        )
      };
    }
    try {
      const matchingRequirements = this.ResourceServer.findMatchingRequirements(
        paymentRequired.accepts,
        paymentPayload
      );
      if (!matchingRequirements) {
        const errorResponse = await this.ResourceServer.createPaymentRequiredResponse(
          requirements,
          resourceInfo,
          "No matching payment requirements",
          routeConfig.extensions,
          transportContext
        );
        return {
          type: "payment-error",
          response: this.createHTTPResponse(errorResponse, false, paywallConfig)
        };
      }
      const exemptBypass = await this.ResourceServer.tryExemptSignatureBypass(
        paymentPayload,
        matchingRequirements
      );
      if (exemptBypass) {
        return { type: "no-payment-required" };
      }
      const verifyResult = await this.ResourceServer.verifyPayment(
        paymentPayload,
        matchingRequirements
      );
      if (!verifyResult.isValid) {
        const errorResponse = await this.ResourceServer.createPaymentRequiredResponse(
          requirements,
          resourceInfo,
          verifyResult.invalidReason,
          routeConfig.extensions,
          transportContext
        );
        return {
          type: "payment-error",
          response: this.createHTTPResponse(errorResponse, false, paywallConfig)
        };
      }
      return {
        type: "payment-verified",
        paymentPayload,
        paymentRequirements: matchingRequirements,
        declaredExtensions: routeConfig.extensions
      };
    } catch (error) {
      if (error instanceof FacilitatorResponseError) {
        throw error;
      }
      const errorResponse = await this.ResourceServer.createPaymentRequiredResponse(
        requirements,
        resourceInfo,
        error instanceof Error ? error.message : "Payment verification failed",
        routeConfig.extensions,
        transportContext
      );
      return {
        type: "payment-error",
        response: this.createHTTPResponse(errorResponse, false, paywallConfig)
      };
    }
  }
  /**
   * Process settlement after successful response
   *
   * @param paymentPayload - The verified payment payload
   * @param requirements - The matching payment requirements
   * @param declaredExtensions - Optional declared extensions (for per-key enrichment)
   * @param transportContext - Optional HTTP transport context
   * @param settlementOverrides - Optional settlement overrides (e.g., partial settlement amount)
   * @returns ProcessSettleResultResponse - SettleResponse with headers if success or errorReason if failure
   */
  async processSettlement(paymentPayload, requirements, declaredExtensions, transportContext, settlementOverrides) {
    try {
      let resolvedOverrides = settlementOverrides;
      if (!resolvedOverrides && transportContext?.responseHeaders?.[SETTLEMENT_OVERRIDES_HEADER]) {
        try {
          resolvedOverrides = JSON.parse(
            transportContext.responseHeaders[SETTLEMENT_OVERRIDES_HEADER]
          );
        } catch {
        }
      }
      const settleResponse = await this.ResourceServer.settlePayment(
        paymentPayload,
        requirements,
        declaredExtensions,
        transportContext,
        resolvedOverrides
      );
      if (settleResponse.status === "timeout") {
        if (settleResponse.transaction) {
          const pollResult = await this.ResourceServer.pollSettleStatus(
            settleResponse.transaction,
            paymentPayload,
            requirements,
            this.pollDeadlineMs
          );
          if (pollResult === "success") {
            const recovered = { ...settleResponse, status: "success" };
            return {
              ...recovered,
              success: true,
              headers: this.createSettlementHeaders(recovered),
              requirements
            };
          }
          if (this.timeoutRecoveryHook) {
            try {
              const { confirmed } = await this.timeoutRecoveryHook(
                settleResponse.transaction,
                settleResponse.network
              );
              if (confirmed) {
                const recovered = { ...settleResponse, status: "success" };
                return {
                  ...recovered,
                  success: true,
                  headers: this.createSettlementHeaders(recovered),
                  requirements
                };
              }
            } catch (err) {
              console.warn("[x402] onSettlementTimeout hook error:", err);
            }
          }
        }
        const failure = {
          ...settleResponse,
          success: false,
          errorReason: "settlement_timeout",
          errorMessage: "Settlement timed out waiting for on-chain confirmation",
          headers: this.createSettlementHeaders(settleResponse)
        };
        const response = await this.buildSettlementFailureResponse(failure, transportContext);
        return { ...failure, response };
      }
      if (settleResponse.status === "success" || settleResponse.status === "pending") {
        return {
          ...settleResponse,
          success: true,
          headers: this.createSettlementHeaders(settleResponse),
          requirements
        };
      }
      if (!settleResponse.success) {
        const failure = {
          ...settleResponse,
          success: false,
          errorReason: settleResponse.errorReason || "Settlement failed",
          errorMessage: settleResponse.errorMessage || settleResponse.errorReason || "Settlement failed",
          headers: this.createSettlementHeaders(settleResponse)
        };
        const response = await this.buildSettlementFailureResponse(failure, transportContext);
        return { ...failure, response };
      }
      return {
        ...settleResponse,
        success: true,
        headers: this.createSettlementHeaders(settleResponse),
        requirements
      };
    } catch (error) {
      if (error instanceof FacilitatorResponseError) {
        throw error;
      }
      if (error instanceof SettleError) {
        const errorReason2 = error.errorReason || error.message;
        const settleResponse2 = {
          success: false,
          errorReason: errorReason2,
          errorMessage: error.errorMessage || errorReason2,
          payer: error.payer,
          network: error.network,
          transaction: error.transaction
        };
        const failure2 = {
          ...settleResponse2,
          success: false,
          errorReason: errorReason2,
          headers: this.createSettlementHeaders(settleResponse2)
        };
        const response2 = await this.buildSettlementFailureResponse(failure2, transportContext);
        return { ...failure2, response: response2 };
      }
      const errorReason = error instanceof Error ? error.message : "Settlement failed";
      const settleResponse = {
        success: false,
        errorReason,
        errorMessage: errorReason,
        network: requirements.network,
        transaction: ""
      };
      const failure = {
        ...settleResponse,
        success: false,
        errorReason,
        headers: this.createSettlementHeaders(settleResponse)
      };
      const response = await this.buildSettlementFailureResponse(failure, transportContext);
      return { ...failure, response };
    }
  }
  /**
   * Check if a request requires payment based on route configuration
   *
   * @param context - HTTP request context
   * @returns True if the route requires payment, false otherwise
   */
  requiresPayment(context) {
    return this.getRouteConfig(context.path, context.method) !== void 0;
  }
  /**
   * Lazy loader for the subscription submodule. The `import()` cache makes
   * this effectively free after the first hit; isolating it in one place
   * keeps dispatch helpers free of dynamic-import boilerplate and lets
   * bundlers tree-shake the entire subscription path when no caller touches
   * it.
   */
  loadSubscriptionModule() {
    return Promise.resolve().then(() => (init_subscription(), subscription_exports));
  }
  /**
   * Single chokepoint for "is this (network, scheme) backed by a
   * SubscriptionCapability-implementing scheme?". Returns the narrowed
   * capability (so callers get full typing on `verifyAccess` / `verifySubscribe`
   * / etc.) or null if not registered or not a subscription scheme.
   */
  async resolveSubscriptionScheme(network, schemeName) {
    const registered = this.ResourceServer.findScheme(network, schemeName);
    if (!registered) return null;
    const { hasSubscriptionCapability: hasSubscriptionCapability2 } = await this.loadSubscriptionModule();
    return hasSubscriptionCapability2(registered) ? registered : null;
  }
  /**
   * period dispatch helper — Access flow.
   *
   * Returns an `access-verified` (or `payment-error`) HTTPProcessResult when
   * the request carries `APP-Access` AND a subscription-capable scheme is
   * registered for one of the route's accepted (scheme, network) pairs.
   * Returns `null` to indicate the dispatcher should fall through to classic
   * pay-per-request handling.
   */
  async tryDispatchAccessFlow(adapter, routeConfig, paymentOptions, paymentRequired) {
    const headerB64 = this.extractAccessProofHeader(adapter);
    if (!headerB64) return null;
    const { decodeAccessProof: decodeAccessProof2 } = await this.loadSubscriptionModule();
    let proof;
    try {
      proof = decodeAccessProof2(headerB64);
    } catch (err) {
      return {
        type: "payment-error",
        response: {
          status: 401,
          headers: { "Content-Type": "application/json" },
          body: { error: `invalid APP-Access: ${err.message}` }
        }
      };
    }
    const acceptedPlanIds = collectAcceptedPlanIds(paymentOptions);
    for (const opt of paymentOptions) {
      if (!opt.network || !opt.scheme) continue;
      const scheme = await this.resolveSubscriptionScheme(opt.network, opt.scheme);
      if (!scheme) continue;
      const result = await scheme.verifyAccess(proof, { acceptedPlanIds });
      if (!result.ok) {
        return {
          type: "payment-error",
          response: {
            status: 402,
            headers: {
              "Content-Type": "application/json",
              "PAYMENT-REQUIRED": encodePaymentRequiredHeader(paymentRequired)
            },
            body: { error: result.error }
          }
        };
      }
      const hooks = [
        ...this.beforeAccessHooks,
        ...routeConfig.onBeforeAccess ? [routeConfig.onBeforeAccess] : []
      ];
      for (const hook of hooks) {
        const decision = await hook({
          subscription: result.subscription,
          request: {
            path: adapter.getPath(),
            method: adapter.getMethod(),
            headers: adapter.getHeaders?.() ?? {}
          },
          route: { acceptedPlanIds, accepts: paymentRequired.accepts }
        });
        if (!decision.ok) {
          return {
            type: "payment-error",
            response: {
              status: 402,
              headers: { "Content-Type": "application/json" },
              body: {
                error: decision.error ?? "access_denied",
                retryAfter: decision.retryAfter,
                upgradeOffers: decision.upgradeOffers
              }
            }
          };
        }
      }
      return {
        type: "access-verified",
        subscription: result.subscription,
        headers: {}
      };
    }
    return {
      type: "payment-error",
      response: {
        status: 401,
        headers: { "Content-Type": "application/json" },
        body: { error: "no subscription scheme registered for this route" }
      }
    };
  }
  /**
   * period dispatch helper — Subscribe presettle flow.
   *
   * When the buyer presents a PaymentPayload whose `accepted.scheme` is a
   * subscription scheme with `settlementMode === "pre"`, this runs verify +
   * (settle on demand) and returns `payment-presettle`. The middleware is
   * expected to call `result.settle()` AFTER decision-time but BEFORE
   * `next()` so handler only runs when the chain creation succeeded.
   *
   * Returns `null` to fall through to classic post-settle path-verified flow.
   */
  async tryDispatchSubscriptionPresettle(paymentPayload, serverAccepts, operation) {
    const { accepted } = paymentPayload;
    const scheme = await this.resolveSubscriptionScheme(accepted.network, accepted.scheme);
    if (!scheme) return null;
    const serverReq = this.ResourceServer.findMatchingRequirements(serverAccepts, paymentPayload);
    if (!serverReq) {
      return {
        type: "payment-error",
        response: {
          status: 402,
          headers: { "Content-Type": "application/json" },
          body: { error: "no_matching_requirements" }
        }
      };
    }
    if (operation === "change") {
      const verifyResult2 = await scheme.verifyChange(paymentPayload, serverReq);
      if (!verifyResult2.ok) {
        return {
          type: "payment-error",
          response: {
            status: 402,
            headers: { "Content-Type": "application/json" },
            body: { error: verifyResult2.error }
          }
        };
      }
      return {
        type: "payment-presettle",
        paymentPayload,
        paymentRequirements: serverReq,
        operation: "change",
        settle: async () => {
          const r = await scheme.settleChange(paymentPayload, serverReq);
          return r.success ? {
            success: true,
            headers: r.headers,
            data: {
              newSubId: r.newSubId,
              oldSubId: r.oldSubId,
              operationType: r.operationType,
              scheduledFromPeriod: r.scheduledFromPeriod
            }
          } : { success: false, error: r.error };
        }
      };
    }
    const verifyResult = await scheme.verifySubscribe(paymentPayload, serverReq);
    if (!verifyResult.ok) {
      return {
        type: "payment-error",
        response: {
          status: 402,
          headers: { "Content-Type": "application/json" },
          body: { error: verifyResult.error }
        }
      };
    }
    return {
      type: "payment-presettle",
      paymentPayload,
      paymentRequirements: serverReq,
      operation: "subscribe",
      settle: async () => {
        const r = await scheme.settleSubscribe(paymentPayload, serverReq);
        return r.success ? {
          success: true,
          headers: r.headers,
          data: { subId: r.subId, subscription: r.subscription }
        } : { success: false, error: r.error };
      }
    };
  }
  /**
   * period dispatch helper — Cancel flow.
   *
   * Reads JSON body { auth: CancelAuth, subId: string }, runs verifyCancel
   * then wraps settleCancel as a payment-presettle (settle-before-handler so
   * the cancelation is on-chain before the seller's response).
   */
  async tryDispatchCancelFlow(adapter, routeConfig, paymentOptions) {
    let scheme = null;
    for (const opt of paymentOptions) {
      if (!opt.network || !opt.scheme) continue;
      const resolved = await this.resolveSubscriptionScheme(opt.network, opt.scheme);
      if (resolved) {
        scheme = resolved;
        break;
      }
    }
    if (!scheme) return null;
    const body = adapter.getBody?.() ?? {};
    if (!body.auth || !body.subId) {
      return {
        type: "payment-error",
        response: {
          status: 400,
          headers: { "Content-Type": "application/json" },
          body: { error: "cancel: body must include auth and subId" }
        }
      };
    }
    const verifyResult = await scheme.verifyCancel(body.auth, body.subId);
    if (!verifyResult.ok) {
      return {
        type: "payment-error",
        response: {
          status: 402,
          headers: { "Content-Type": "application/json" },
          body: { error: verifyResult.error }
        }
      };
    }
    void routeConfig;
    const settleScheme = scheme;
    const auth = body.auth;
    const subId = body.subId;
    return {
      type: "payment-presettle",
      paymentPayload: { x402Version: 2, accepted: null, payload: {} },
      paymentRequirements: null,
      operation: "cancel",
      settle: async () => {
        const r = await settleScheme.settleCancel(auth, subId);
        return r.success ? { success: true, headers: r.headers, data: { subId } } : { success: false, error: r.error };
      }
    };
  }
  /**
   * period dispatch helper — Cancel-Pending-Change flow.
   *
   * Reads JSON body `{ auth: PendingChangeCancelAuth, subId: string }`. The
   * auth must carry `newSubId` (matches the currently PENDING downgrade
   * target). Runs verifyCancelPendingChange then wraps
   * settleCancelPendingChange as a payment-presettle.
   */
  async tryDispatchCancelPendingChangeFlow(adapter, routeConfig, paymentOptions) {
    let scheme = null;
    for (const opt of paymentOptions) {
      if (!opt.network || !opt.scheme) continue;
      const resolved = await this.resolveSubscriptionScheme(opt.network, opt.scheme);
      if (resolved) {
        scheme = resolved;
        break;
      }
    }
    if (!scheme) return null;
    const body = adapter.getBody?.() ?? {};
    if (!body.auth || !body.subId) {
      return {
        type: "payment-error",
        response: {
          status: 400,
          headers: { "Content-Type": "application/json" },
          body: { error: "cancel-pending-change: body must include auth and subId" }
        }
      };
    }
    if (!body.auth.newSubId) {
      return {
        type: "payment-error",
        response: {
          status: 400,
          headers: { "Content-Type": "application/json" },
          body: { error: "cancel-pending-change: auth.newSubId is required" }
        }
      };
    }
    const verifyResult = await scheme.verifyCancelPendingChange(body.auth, body.subId);
    if (!verifyResult.ok) {
      return {
        type: "payment-error",
        response: {
          status: 402,
          headers: { "Content-Type": "application/json" },
          body: { error: verifyResult.error }
        }
      };
    }
    void routeConfig;
    const settleScheme = scheme;
    const auth = body.auth;
    const subId = body.subId;
    return {
      type: "payment-presettle",
      paymentPayload: { x402Version: 2, accepted: null, payload: {} },
      paymentRequirements: null,
      operation: "cancel-pending-change",
      settle: async () => {
        const r = await settleScheme.settleCancelPendingChange(auth, subId);
        return r.success ? { success: true, headers: r.headers, data: { subId: r.subId } } : { success: false, error: r.error };
      }
    };
  }
  /**
   * Build HTTPResponseInstructions for settlement failure.
   * Uses settlementFailedResponseBody hook if configured, otherwise defaults to empty body.
   *
   * @param failure - Settlement failure result with headers
   * @param transportContext - Optional HTTP transport context for the request
   * @returns HTTP response instructions for the 402 settlement failure response
   */
  async buildSettlementFailureResponse(failure, transportContext) {
    const settlementHeaders = failure.headers;
    const routeConfig = transportContext ? this.getRouteConfig(transportContext.request.path, transportContext.request.method) : void 0;
    const customBody = routeConfig?.config.settlementFailedResponseBody ? await routeConfig.config.settlementFailedResponseBody(transportContext.request, failure) : void 0;
    const contentType = customBody ? customBody.contentType : "application/json";
    const body = customBody ? customBody.body : {};
    return {
      status: 402,
      headers: {
        "Content-Type": contentType,
        ...settlementHeaders
      },
      body,
      isHtml: contentType.includes("text/html")
    };
  }
  /**
   * Normalizes a RouteConfig's accepts field into an array of PaymentOptions
   * Handles both single PaymentOption and array formats
   *
   * @param routeConfig - Route configuration
   * @returns Array of payment options
   */
  normalizePaymentOptions(routeConfig) {
    return Array.isArray(routeConfig.accepts) ? routeConfig.accepts : [routeConfig.accepts];
  }
  /**
   * Validates that all payment options in routes have corresponding registered schemes
   * and facilitator support.
   *
   * @returns Array of validation errors (empty if all routes are valid)
   */
  validateRouteConfiguration() {
    const errors = [];
    const normalizedRoutes = typeof this.routesConfig === "object" && !("accepts" in this.routesConfig) ? Object.entries(this.routesConfig) : [["*", this.routesConfig]];
    for (const [pattern, config] of normalizedRoutes) {
      const pathPart = pattern.includes(" ") ? pattern.split(/\s+/)[1] : pattern;
      if (pathPart && pathPart.includes("*") && config.extensions && "bazaar" in config.extensions) {
        console.warn(
          `[x402] Route "${pattern}": Wildcard (*) patterns with bazaar discovery extensions will auto-generate parameter names (var1, var2, ...). Consider using named parameters instead (e.g. /weather/:city) for better discovery metadata.`
        );
      }
      const paymentOptions = this.normalizePaymentOptions(config);
      for (const option of paymentOptions) {
        if (!this.ResourceServer.hasRegisteredScheme(option.network, option.scheme)) {
          errors.push({
            routePattern: pattern,
            scheme: option.scheme,
            network: option.network,
            reason: "missing_scheme",
            message: `Route "${pattern}": No scheme implementation registered for "${option.scheme}" on network "${option.network}"`
          });
          continue;
        }
        const supportedKind = this.ResourceServer.getSupportedKind(
          x402Version,
          option.network,
          option.scheme
        );
        if (!supportedKind) {
          errors.push({
            routePattern: pattern,
            scheme: option.scheme,
            network: option.network,
            reason: "missing_facilitator",
            message: `Route "${pattern}": Facilitator does not support scheme "${option.scheme}" on network "${option.network}"`
          });
        }
      }
    }
    return errors;
  }
  /**
   * Get route configuration for a request
   *
   * @param path - Request path
   * @param method - HTTP method
   * @returns Route configuration and pattern, or undefined if no match
   */
  getRouteConfig(path, method) {
    const normalizedPath = this.normalizePath(path);
    const upperMethod = method.toUpperCase();
    const matchingRoute = this.compiledRoutes.find(
      (route) => route.regex.test(normalizedPath) && (route.verb === "*" || route.verb === upperMethod)
    );
    if (!matchingRoute) return void 0;
    return { config: matchingRoute.config, pattern: matchingRoute.pattern };
  }
  /**
   * Extract payment from HTTP headers (handles v1 and v2)
   *
   * @param adapter - HTTP adapter
   * @returns Decoded payment payload or null
   */
  extractPayment(adapter) {
    const header = adapter.getHeader("payment-signature") || adapter.getHeader("PAYMENT-SIGNATURE");
    if (header) {
      try {
        return decodePaymentSignatureHeader(header);
      } catch (error) {
        console.warn("Failed to decode PAYMENT-SIGNATURE header:", error);
      }
    }
    const subHeader = adapter.getHeader("app-payment") || adapter.getHeader("APP-PAYMENT");
    if (subHeader) {
      try {
        const json = Buffer.from(subHeader, "base64").toString("utf8");
        return JSON.parse(json);
      } catch (error) {
        console.warn("Failed to decode APP-PAYMENT header:", error);
      }
    }
    return null;
  }
  /**
   * Extract `APP-Access` header (subscription access-flow). Returns the raw
   * base64 string so callers can pass it through to `decodeAccessProof` in
   * the subscription codec.
   */
  extractAccessProofHeader(adapter) {
    return adapter.getHeader("app-access") || adapter.getHeader("APP-Access") || null;
  }
  /**
   * Check if request is from a web browser
   *
   * @param adapter - HTTP adapter
   * @returns True if request appears to be from a browser
   */
  isWebBrowser(adapter) {
    const accept = adapter.getAcceptHeader();
    const userAgent = adapter.getUserAgent();
    return accept.includes("text/html") && userAgent.includes("Mozilla");
  }
  /**
   * Create HTTP response instructions from payment required
   *
   * @param paymentRequired - Payment requirements
   * @param isWebBrowser - Whether request is from browser
   * @param paywallConfig - Paywall configuration
   * @param customHtml - Custom HTML template
   * @param unpaidResponse - Optional custom response (content type and body) for unpaid API requests
   * @returns Response instructions
   */
  createHTTPResponse(paymentRequired, isWebBrowser, paywallConfig, customHtml, unpaidResponse) {
    const status = paymentRequired.error === "permit2_allowance_required" ? 412 : 402;
    if (isWebBrowser) {
      const html = this.generatePaywallHTML(paymentRequired, paywallConfig, customHtml);
      return {
        status,
        headers: { "Content-Type": "text/html" },
        body: html,
        isHtml: true
      };
    }
    const response = this.createHTTPPaymentRequiredResponse(paymentRequired);
    const contentType = unpaidResponse ? unpaidResponse.contentType : "application/json";
    const body = unpaidResponse ? unpaidResponse.body : {};
    return {
      status,
      headers: {
        "Content-Type": contentType,
        ...response.headers
      },
      body
    };
  }
  /**
   * Create HTTP payment required response (v1 puts in body, v2 puts in header)
   *
   * @param paymentRequired - Payment required object
   * @returns Headers and body for the HTTP response
   */
  createHTTPPaymentRequiredResponse(paymentRequired) {
    return {
      headers: {
        "PAYMENT-REQUIRED": encodePaymentRequiredHeader(paymentRequired)
      }
    };
  }
  /**
   * Create settlement response headers
   *
   * @param settleResponse - Settlement response
   * @returns Headers to add to response
   */
  createSettlementHeaders(settleResponse) {
    const encoded = encodePaymentResponseHeader(settleResponse);
    return { "PAYMENT-RESPONSE": encoded };
  }
  /**
   * Parse route pattern into verb and regex
   *
   * @param pattern - Route pattern like "GET /api/*", "/api/[id]", or "/api/:id"
   * @returns Parsed pattern with verb and regex
   */
  parseRoutePattern(pattern) {
    const [verb, path] = pattern.includes(" ") ? pattern.split(/\s+/) : ["*", pattern];
    const regex = new RegExp(
      `^${path.replace(/[$()+.?^{|}]/g, "\\$&").replace(/\*/g, ".*?").replace(/\[([^\]]+)\]/g, "[^/]+").replace(/:([a-zA-Z_][a-zA-Z0-9_]*)/g, "[^/]+").replace(/\//g, "\\/")}$`,
      "i"
    );
    return { verb: verb.toUpperCase(), regex, path };
  }
  /**
   * Normalize path for matching
   *
   * @param path - Raw path from request
   * @returns Normalized path
   */
  normalizePath(path) {
    const pathWithoutQuery = path.split(/[?#]/)[0];
    let decodedOrRawPath;
    try {
      decodedOrRawPath = decodeURIComponent(pathWithoutQuery);
    } catch {
      decodedOrRawPath = pathWithoutQuery;
    }
    return decodedOrRawPath.replace(/\\/g, "/").replace(/\/+/g, "/").replace(/(.+?)\/+$/, "$1");
  }
  /**
   * Generate paywall HTML for browser requests
   *
   * @param paymentRequired - Payment required response
   * @param paywallConfig - Optional paywall configuration
   * @param customHtml - Optional custom HTML template
   * @returns HTML string
   */
  generatePaywallHTML(paymentRequired, paywallConfig, customHtml) {
    if (customHtml) {
      return customHtml;
    }
    if (this.paywallProvider) {
      return this.paywallProvider.generateHtml(paymentRequired, paywallConfig);
    }
    const resource = paymentRequired.resource;
    const displayAmount = this.getDisplayAmount(paymentRequired);
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Payment Required</title>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body>
          <div style="max-width: 600px; margin: 50px auto; padding: 20px; font-family: system-ui, -apple-system, sans-serif;">
            ${paywallConfig?.appLogo ? `<img src="${paywallConfig.appLogo}" alt="${paywallConfig.appName || "App"}" style="max-width: 200px; margin-bottom: 20px;">` : ""}
            <h1>Payment Required</h1>
            ${resource ? `<p><strong>Resource:</strong> ${resource.description || resource.url}</p>` : ""}
            <p><strong>Amount:</strong> $${displayAmount.toFixed(2)} USDC</p>
            <div id="payment-widget" 
                 data-requirements='${JSON.stringify(paymentRequired)}'
                 data-app-name="${paywallConfig?.appName || ""}"
                 data-testnet="${paywallConfig?.testnet || false}">
            </div>
          </div>
        </body>
      </html>
    `;
  }
  /**
   * Extract display amount from payment requirements.
   *
   * @param paymentRequired - The payment required object
   * @returns The display amount in decimal format
   */
  getDisplayAmount(paymentRequired) {
    const accepts = paymentRequired.accepts;
    if (accepts && accepts.length > 0) {
      const firstReq = accepts[0];
      if ("amount" in firstReq) {
        return parseFloat(firstReq.amount) / 1e6;
      }
    }
    return 0;
  }
};
function collectAcceptedPlanIds(options) {
  const seen = /* @__PURE__ */ new Set();
  for (const opt of options) {
    const extra = opt.extra;
    const id = extra?.plan?.id;
    if (typeof id === "string" && id.length > 0) seen.add(id);
  }
  return Array.from(seen);
}

// node_modules/@okxweb3/app-x402-core/dist/esm/server/index.mjs
init_chunk_CKXR4QVD();

// node_modules/@okxweb3/app-x402-evm/dist/esm/chunk-2DOYYP3L.mjs
var DEFAULT_STABLECOINS = {
  "eip155:196": {
    address: "0x779ded0c9e1022225f8e0630b35a9b54be713736",
    name: "USD\u20AE0",
    version: "1",
    decimals: 6
  },
  // X Layer mainnet USDT0 (EIP-3009)
  "eip155:1952": {
    address: "0x9e29b3aada05bf2d2c827af80bd28dc0b9b4fb0c",
    name: "USD\u20AE0",
    version: "1",
    decimals: 6
  }
};
function getDefaultAsset(network) {
  const info = DEFAULT_STABLECOINS[network];
  if (!info) {
    throw new Error(`No default asset configured for network ${network}`);
  }
  return info;
}

// node_modules/@okxweb3/app-x402-evm/dist/esm/exact/server/index.mjs
var ExactEvmScheme = class {
  constructor() {
    this.scheme = "exact";
    this.moneyParsers = [];
  }
  /**
   * Register a custom money parser in the parser chain.
   * Multiple parsers can be registered - they will be tried in registration order.
   * Each parser receives a decimal amount (e.g., 1.50 for $1.50).
   * If a parser returns null, the next parser in the chain will be tried.
   * The default parser is always the final fallback.
   *
   * @param parser - Custom function to convert amount to AssetAmount (or null to skip)
   * @returns The server instance for chaining
   *
   * @example
   * evmServer.registerMoneyParser(async (amount, network) => {
   *   // Custom conversion logic
   *   if (amount > 100) {
   *     // Use different token for large amounts
   *     return { amount: (amount * 1e18).toString(), asset: "0xCustomToken" };
   *   }
   *   return null; // Use next parser
   * });
   */
  registerMoneyParser(parser) {
    this.moneyParsers.push(parser);
    return this;
  }
  /**
   * Parses a price into an asset amount.
   * If price is already an AssetAmount, returns it directly.
   * If price is Money (string | number), parses to decimal and tries custom parsers.
   * Falls back to default conversion if all custom parsers return null.
   *
   * @param price - The price to parse
   * @param network - The network to use
   * @returns Promise that resolves to the parsed asset amount
   */
  async parsePrice(price, network) {
    if (typeof price === "object" && price !== null && "amount" in price) {
      if (!price.asset) {
        throw new Error(`Asset address must be specified for AssetAmount on network ${network}`);
      }
      return {
        amount: price.amount,
        asset: price.asset,
        extra: price.extra || {}
      };
    }
    const amount = this.parseMoneyToDecimal(price);
    for (const parser of this.moneyParsers) {
      const result = await parser(amount, network);
      if (result !== null) {
        return result;
      }
    }
    return this.defaultMoneyConversion(amount, network);
  }
  /**
   * Build payment requirements for this scheme/network combination
   *
   * @param paymentRequirements - The base payment requirements
   * @param supportedKind - The supported kind from facilitator (unused)
   * @param supportedKind.x402Version - The x402 version
   * @param supportedKind.scheme - The logical payment scheme
   * @param supportedKind.network - The network identifier in CAIP-2 format
   * @param supportedKind.extra - Optional extra metadata regarding scheme/network implementation details
   * @param extensionKeys - Extension keys supported by the facilitator (unused)
   * @returns Payment requirements ready to be sent to clients
   */
  enhancePaymentRequirements(paymentRequirements, supportedKind, extensionKeys) {
    void supportedKind;
    void extensionKeys;
    return Promise.resolve(paymentRequirements);
  }
  /**
   * Parse Money (string | number) to a decimal number.
   * Handles formats like "$1.50", "1.50", 1.50, etc.
   *
   * @param money - The money value to parse
   * @returns Decimal number
   */
  parseMoneyToDecimal(money) {
    if (typeof money === "number") {
      return money;
    }
    const cleanMoney = money.replace(/^\$/, "").trim();
    const amount = parseFloat(cleanMoney);
    if (isNaN(amount)) {
      throw new Error(`Invalid money format: ${money}`);
    }
    return amount;
  }
  /**
   * Converts a numeric dollar amount to an AssetAmount using the default token for the network.
   *
   * @param amount - The dollar amount as a number
   * @param network - The target network
   * @returns The converted asset amount with token metadata
   */
  defaultMoneyConversion(amount, network) {
    const assetInfo = getDefaultAsset(network);
    const tokenAmount = this.convertToTokenAmount(amount.toString(), assetInfo.decimals);
    const includeEip712Domain = !assetInfo.assetTransferMethod || assetInfo.supportsEip2612;
    return {
      amount: tokenAmount,
      asset: assetInfo.address,
      extra: {
        ...includeEip712Domain && {
          name: assetInfo.name,
          version: assetInfo.version
        },
        ...assetInfo.assetTransferMethod && {
          assetTransferMethod: assetInfo.assetTransferMethod
        }
      }
    };
  }
  /**
   * Converts a decimal string amount to an integer token amount using the given decimals.
   *
   * @param decimalAmount - The amount as a decimal string (e.g. "1.5")
   * @param decimals - The number of decimal places for the token
   * @returns The token amount as an integer string in smallest units
   */
  convertToTokenAmount(decimalAmount, decimals) {
    const amount = parseFloat(decimalAmount);
    if (isNaN(amount)) {
      throw new Error(`Invalid amount: ${decimalAmount}`);
    }
    const [intPart, decPart = ""] = String(amount).split(".");
    const paddedDec = decPart.padEnd(decimals, "0").slice(0, decimals);
    const tokenAmount = (intPart + paddedDec).replace(/^0+/, "") || "0";
    return tokenAmount;
  }
};

// node_modules/@okxweb3/app-x402-hono/dist/esm/index.mjs
var HonoAdapter = class {
  /**
   * Creates a new HonoAdapter instance.
   *
   * @param c - The Hono context object
   */
  constructor(c) {
    this.c = c;
  }
  /**
   * Gets a header value from the request.
   *
   * @param name - The header name
   * @returns The header value or undefined
   */
  getHeader(name) {
    return this.c.req.header(name);
  }
  /**
   * Gets the HTTP method of the request.
   *
   * @returns The HTTP method
   */
  getMethod() {
    return this.c.req.method;
  }
  /**
   * Gets the path of the request.
   *
   * @returns The request path
   */
  getPath() {
    return this.c.req.path;
  }
  /**
   * Gets the full URL of the request.
   *
   * @returns The full request URL
   */
  getUrl() {
    return this.c.req.url;
  }
  /**
   * Gets the Accept header from the request.
   *
   * @returns The Accept header value or empty string
   */
  getAcceptHeader() {
    return this.c.req.header("Accept") || "";
  }
  /**
   * Gets the User-Agent header from the request.
   *
   * @returns The User-Agent header value or empty string
   */
  getUserAgent() {
    return this.c.req.header("User-Agent") || "";
  }
  /**
   * Gets all query parameters from the request URL.
   *
   * @returns Record of query parameter key-value pairs
   */
  getQueryParams() {
    const query = this.c.req.query();
    const result = {};
    for (const [key, value] of Object.entries(query)) {
      result[key] = value;
    }
    return result;
  }
  /**
   * Gets a specific query parameter by name.
   *
   * @param name - The query parameter name
   * @returns The query parameter value(s) or undefined
   */
  getQueryParam(name) {
    return this.c.req.query(name);
  }
  /**
   * Gets the parsed request body.
   * Requires appropriate body parsing middleware.
   *
   * @returns The parsed request body
   */
  async getBody() {
    try {
      return await this.c.req.json();
    } catch {
      return void 0;
    }
  }
  /**
   * Return all request headers as a lowercase-keyed map. Hono's
   * `req.raw.headers` is a WHATWG Headers instance — lowercase keys by spec.
   */
  getHeaders() {
    const out = {};
    this.c.req.raw.headers.forEach((v, k) => {
      out[k.toLowerCase()] = v;
    });
    return out;
  }
};
function facilitatorErrorResponse(c, error) {
  return c.json({ error: error.message }, 502);
}
function paymentMiddlewareFromHTTPServer(httpServer, paywallConfig, paywall, syncFacilitatorOnStart = true) {
  if (paywall) {
    httpServer.registerPaywallProvider(paywall);
  }
  let initPromise = syncFacilitatorOnStart ? httpServer.initialize() : null;
  let isInitialized = false;
  async function initializeHttpServer() {
    if (!syncFacilitatorOnStart || isInitialized) {
      return;
    }
    if (!initPromise) {
      initPromise = httpServer.initialize();
    }
    try {
      await initPromise;
      isInitialized = true;
    } catch (error) {
      initPromise = null;
      throw error;
    }
  }
  return async (c, next) => {
    var _a, _b;
    const adapter = new HonoAdapter(c);
    const context = {
      adapter,
      path: c.req.path,
      method: c.req.method,
      paymentHeader: adapter.getHeader("payment-signature") || adapter.getHeader("x-payment")
    };
    if (!httpServer.requiresPayment(context)) {
      return next();
    }
    if (syncFacilitatorOnStart && !isInitialized) {
      try {
        await initializeHttpServer();
      } catch (error) {
        const facError = getFacilitatorResponseError(error);
        if (facError) {
          return facilitatorErrorResponse(c, facError);
        }
        throw error;
      }
    }
    let result;
    try {
      result = await httpServer.processHTTPRequest(context, paywallConfig);
    } catch (error) {
      if (error instanceof FacilitatorResponseError) {
        return facilitatorErrorResponse(c, error);
      }
      throw error;
    }
    switch (result.type) {
      case "no-payment-required":
        return next();
      case "payment-error": {
        const { response } = result;
        Object.entries(response.headers).forEach(([key, value]) => {
          c.header(key, value);
        });
        if (response.isHtml) {
          return c.html(response.body, response.status);
        } else {
          return c.json(response.body || {}, response.status);
        }
      }
      case "payment-presettle": {
        try {
          const settleResult = await result.settle();
          if (!settleResult.success) {
            return c.json({ error: settleResult.error ?? "subscription settle failed" }, 402);
          }
          if (settleResult.headers) {
            for (const [k, v] of Object.entries(settleResult.headers)) {
              c.header(k, v);
            }
          }
          c.set("x402", {
            ...c.get("x402") ?? {},
            subscription: (_a = settleResult.data) == null ? void 0 : _a.subscription,
            subId: (_b = settleResult.data) == null ? void 0 : _b.subId,
            paymentPayload: result.paymentPayload,
            paymentRequirements: result.paymentRequirements,
            settleResult
          });
          await next();
          return;
        } catch (err) {
          if (err instanceof FacilitatorResponseError) {
            return facilitatorErrorResponse(c, err);
          }
          console.error("payment-presettle error:", err);
          return c.json(
            { error: err instanceof Error ? err.message : "subscription settle threw" },
            402
          );
        }
      }
      case "access-verified": {
        if (result.headers) {
          for (const [k, v] of Object.entries(result.headers)) {
            c.header(k, v);
          }
        }
        c.set("x402", {
          ...c.get("x402") ?? {},
          subscription: result.subscription
        });
        await next();
        return;
      }
      case "payment-verified": {
        const { paymentPayload, paymentRequirements, declaredExtensions } = result;
        await next();
        let res = c.res;
        if (res.status >= 400) {
          return;
        }
        const responseBody = Buffer.from(await res.clone().arrayBuffer());
        c.res = void 0;
        try {
          const settleResult = await httpServer.processSettlement(
            paymentPayload,
            paymentRequirements,
            declaredExtensions,
            { request: context, responseBody }
          );
          if (!settleResult.success) {
            const { response: settleResponse } = settleResult;
            const body = settleResponse.isHtml ? String(settleResponse.body ?? "") : JSON.stringify(settleResponse.body ?? {});
            res = new Response(body, {
              status: settleResponse.status,
              headers: settleResponse.headers
            });
          } else {
            Object.entries(settleResult.headers).forEach(([key, value]) => {
              res.headers.set(key, value);
            });
          }
        } catch (error) {
          if (error instanceof FacilitatorResponseError) {
            res = facilitatorErrorResponse(c, error);
            c.res = res;
            return;
          }
          console.error(error);
          res = c.json({}, 402);
        }
        c.res = res;
        return;
      }
    }
  };
}

// src/x402/payment.ts
function paymentsMisconfiguration() {
  const missing = [];
  if (!OKX.apiKey) missing.push("OKX_API_KEY");
  if (!OKX.secretKey) missing.push("OKX_SECRET_KEY");
  if (!OKX.passphrase) missing.push("OKX_PASSPHRASE");
  if (missing.length) return `missing ${missing.join(", ")}`;
  if (!/^0x[a-fA-F0-9]{40}$/.test(PAY_TO) || /^0x0+$/.test(PAY_TO)) {
    return "PAY_TO is not a real address";
  }
  return null;
}
var routes = {
  "GET /v1/model": {
    accepts: {
      scheme: "exact",
      network: X402_NETWORK,
      payTo: PAY_TO,
      price: MODEL_PRICE_USD,
      maxTimeoutSeconds: 300
    },
    description: SERVICE_DESCRIPTION,
    mimeType: "application/json"
  },
  "POST /v1/model": {
    accepts: {
      scheme: "exact",
      network: X402_NETWORK,
      payTo: PAY_TO,
      price: MODEL_PRICE_USD,
      maxTimeoutSeconds: 300
    },
    description: SERVICE_DESCRIPTION,
    mimeType: "application/json"
  }
};
function buildResourceServer(facilitator) {
  const server = new x402ResourceServer(facilitator).register(
    X402_NETWORK,
    new ExactEvmScheme()
  );
  if (EXEMPT_PAYERS.length) server.exemptPayers(EXEMPT_PAYERS);
  return server;
}
function x402Middleware(server) {
  const httpServer = new x402HTTPResourceServer(server, routes);
  const inner = paymentMiddlewareFromHTTPServer(httpServer, void 0, void 0, false);
  let ready = null;
  const ensureReady = () => {
    if (!ready) {
      ready = httpServer.initialize().catch((err) => {
        ready = null;
        throw err;
      });
    }
    return ready;
  };
  return async (c, next) => {
    if (!c.req.path.startsWith("/v1/model")) return next();
    try {
      await ensureReady();
    } catch (err) {
      console.error("[printly] OKX facilitator handshake failed:", err?.message ?? err);
      return c.json(
        {
          ok: false,
          error: "payment service unavailable",
          detail: "could not reach the OKX facilitator to build a payment challenge"
        },
        503
      );
    }
    return inner(c, next);
  };
}
function createPaymentMiddleware() {
  const problem = paymentsMisconfiguration();
  if (problem) {
    console.warn(
      `[printly] x402 payments disabled \u2014 ${problem}. /v1/model will refuse requests. Create an API key at https://web3.okx.com/onchainos/dev-portal and set OKX_API_KEY / OKX_SECRET_KEY / OKX_PASSPHRASE.`
    );
    return null;
  }
  const facilitator = new OKXFacilitatorClient({
    apiKey: OKX.apiKey,
    secretKey: OKX.secretKey,
    passphrase: OKX.passphrase,
    baseUrl: OKX.baseUrl,
    // Do NOT block the response on on-chain confirmation. Settlement runs after the handler,
    // so syncSettle=true would add block time to every paid call — enough, stacked on model
    // generation, to time out the caller. The facilitator answers "pending" and completes the
    // transfer itself; the buyer can follow it up via the tx in PAYMENT-RESPONSE.
    syncSettle: false
  });
  return x402Middleware(buildResourceServer(facilitator));
}

// src/server/app.ts
function baseUrl(c) {
  if (PUBLIC_BASE_URL) return PUBLIC_BASE_URL.replace(/\/$/, "");
  const url = new URL(c.req.url);
  return `${url.protocol}//${url.host}`;
}
function modelFromQuery(c) {
  const r = c.req.query("r");
  const s = c.req.query("s");
  if (r) {
    const recipe = decodeRecipe(r);
    const model = generateFromRecipe(recipe);
    const name = recipe.name || "model";
    return { model, title: name, subtitle: `${recipe.parts.length} parts`, fname: name.replace(/[^a-z0-9]+/gi, "_").toLowerCase() || "model" };
  }
  if (s) {
    const spec = decodeSpec(s);
    const model = generateModel(spec);
    return { model, title: spec.text, subtitle: spec.shape, fname: `${spec.shape}-${spec.text}`.replace(/[^a-z0-9]+/gi, "_").toLowerCase() || "model" };
  }
  throw new Error("missing model reference");
}
function createApp(payment) {
  const app2 = new Hono2();
  if (payment) {
    app2.use("*", payment);
  } else {
    app2.all(
      "/v1/model",
      (c) => c.json(
        { ok: false, error: "payment service unavailable", detail: paymentsMisconfiguration() },
        503
      )
    );
  }
  app2.get(
    "/health",
    (c) => c.json({ ok: true, service: "printly", payments: payment ? "okx-sdk" : "unconfigured" })
  );
  app2.get(
    "/",
    (c) => c.json({
      service: "Printly",
      what: "Prompt -> printable STL, with a 3D preview page and print-cost estimate.",
      call: 'POST /v1/model  body {"prompt":"a keychain that says ADITYA"}',
      shapes: ["keychain", "nameplate", "coin"],
      payment: `x402 exact / USD\u20AE0 on ${X402_NETWORK}, ${MODEL_PRICE_USD} per model, verified and settled through the OKX facilitator`
    })
  );
  app2.get(
    "/v1/model",
    (c) => c.json({
      ok: true,
      service: "Printly",
      call: 'POST /v1/model  body {"prompt":"a keychain that says ADITYA"}',
      shapes: ["keychain", "nameplate", "coin"]
    })
  );
  app2.post("/v1/model", async (c) => {
    let body = {};
    try {
      body = await c.req.json();
    } catch {
    }
    const prompt = typeof body?.prompt === "string" ? body.prompt : "";
    if (!prompt.trim()) return c.json({ ok: false, error: "missing 'prompt'" }, 400);
    const base = baseUrl(c);
    if (hasOpenRouter()) {
      try {
        const { recipe, model: modelName } = await promptToRecipe(prompt);
        const built = generateFromRecipe(recipe);
        const query = `r=${encodeRecipe(recipe)}`;
        return c.json({
          ok: true,
          source: "ai",
          model: modelName,
          prompt,
          name: recipe.name ?? prompt,
          parts: recipe.parts.length,
          dimensionsMm: built.bbox,
          volumeMm3: Math.round(built.volumeMm3),
          printEstimate: estimatePrint(built.volumeMm3),
          viewerUrl: `${base}/m?${query}`,
          stlUrl: `${base}/stl?${query}`
        });
      } catch (e) {
        console.error("[printly] AI path failed, falling back to templates:", e?.message ?? e);
      }
    }
    let spec;
    let model;
    try {
      spec = parsePrompt(prompt);
      model = generateModel(spec);
    } catch (e) {
      return c.json({ ok: false, error: `could not build model: ${e?.message ?? e}` }, 422);
    }
    const encoded = encodeSpec(spec);
    return c.json({
      ok: true,
      source: "template",
      prompt,
      understood: spec.note,
      spec: { shape: spec.shape, text: spec.text },
      dimensionsMm: model.bbox,
      volumeMm3: Math.round(model.volumeMm3),
      printEstimate: estimatePrint(model.volumeMm3),
      viewerUrl: `${base}/m?s=${encoded}`,
      stlUrl: `${base}/stl?s=${encoded}`
    });
  });
  app2.get("/stl", (c) => {
    let built;
    try {
      built = modelFromQuery(c);
    } catch (e) {
      return c.text(`bad or missing model reference: ${e?.message ?? e}`, 400);
    }
    const { model, fname } = built;
    c.header("Content-Type", "model/stl");
    if (c.req.query("dl")) c.header("Content-Disposition", `attachment; filename="${fname}.stl"`);
    const ab = model.stl.buffer.slice(model.stl.byteOffset, model.stl.byteOffset + model.stl.byteLength);
    return c.body(ab);
  });
  app2.get("/m", (c) => {
    let built;
    try {
      built = modelFromQuery(c);
    } catch (e) {
      return c.text(`bad or missing model reference: ${e?.message ?? e}`, 400);
    }
    const { model, title, subtitle } = built;
    const stlQuery = c.req.query("r") ? `r=${c.req.query("r")}` : `s=${c.req.query("s")}`;
    const html = viewerPage({ title, subtitle, stlQuery, dims: model.bbox, estimate: estimatePrint(model.volumeMm3) });
    return c.html(html);
  });
  return app2;
}
var app = createApp(createPaymentMiddleware());

// src/server/vercel-entry.ts
async function handler(req, res) {
  try {
    const proto = req.headers["x-forwarded-proto"] || "https";
    const host = req.headers["x-forwarded-host"] || req.headers.host || "localhost";
    const url = `${proto}://${host}${req.url}`;
    const headers = new Headers();
    for (const [k, v] of Object.entries(req.headers)) {
      if (typeof v === "string") headers.set(k, v);
      else if (Array.isArray(v)) headers.set(k, v.join(", "));
    }
    let body;
    if (req.method && req.method !== "GET" && req.method !== "HEAD") {
      if (req.body !== void 0 && req.body !== null) {
        body = typeof req.body === "string" ? req.body : JSON.stringify(req.body);
        if (!headers.has("content-type")) headers.set("content-type", "application/json");
      }
    }
    const request = new Request(url, { method: req.method, headers, body });
    const response = await app.fetch(request);
    res.statusCode = response.status;
    response.headers.forEach((val, key) => res.setHeader(key, val));
    const ab = await response.arrayBuffer();
    res.end(Buffer.from(ab));
  } catch (err) {
    res.statusCode = 500;
    res.setHeader("content-type", "application/json");
    res.end(JSON.stringify({ ok: false, error: `handler error: ${err?.message ?? err}` }));
  }
}
export {
  handler as default
};
/*! Bundled license information:

@noble/hashes/esm/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
*/
