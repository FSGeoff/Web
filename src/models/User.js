"use strict";
exports.__esModule = true;
exports.User = void 0;
var Eventing_1 = require("./Eventing");
var User = /** @class */ (function () {
    function User(data) {
        this.data = data;
        this.events = new Eventing_1.Eventing();
    }
    User.prototype.get = function (propName) {
        return this.data[propName];
    };
    User.prototype.set = function (update) {
        // @ts-ignore
        Object.assign(this.data, update);
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map