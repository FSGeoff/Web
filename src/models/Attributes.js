"use strict";
exports.__esModule = true;
exports.Attributes = void 0;
var Attributes = /** @class */ (function () {
    function Attributes(data) {
        this.data = data;
    }
    Attributes.prototype.get = function (key) {
        return this.data[key];
    };
    Attributes.prototype.set = function (update) {
        // @ts-ignore
        Object.assign(this.data, update);
    };
    return Attributes;
}());
exports.Attributes = Attributes;
//# sourceMappingURL=Attributes.js.map