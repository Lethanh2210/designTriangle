"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
var Shape_1 = require("./Shape");
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(name, color, side1, side2, side3) {
        var _this = _super.call(this, name, color) || this;
        _this._side1 = side1;
        _this._side2 = side2;
        _this._side3 = side3;
        return _this;
    }
    Object.defineProperty(Triangle.prototype, "side1", {
        get: function () {
            return this._side1;
        },
        set: function (value) {
            this._side1 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "side2", {
        get: function () {
            return this._side2;
        },
        set: function (value) {
            this._side2 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "side3", {
        get: function () {
            return this._side3;
        },
        set: function (value) {
            this._side3 = value;
        },
        enumerable: false,
        configurable: true
    });
    Triangle.prototype.getPeri = function () {
        return this._side1 + this._side2 + this._side3;
    };
    Triangle.prototype.getArea = function () {
        var a = this.getPeri();
        return Math.sqrt(a * (a - this._side1) * (a - this._side2) * (a - this._side3));
    };
    return Triangle;
}(Shape_1.Shape));
exports.Triangle = Triangle;
