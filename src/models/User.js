"use strict";
exports.__esModule = true;
exports.User = void 0;
var axios_1 = require("axios");
var User = /** @class */ (function () {
    function User(data) {
        this.data = data;
    }
    User.prototype.get = function (propName) {
        return this.data[propName];
    };
    User.prototype.set = function (update) {
        // @ts-ignore
        Object.assign(this.data, update);
    };
    User.prototype.fetch = function () {
        var _this = this;
        axios_1["default"].get("http://localhost:3000/users/" + this.get('id'))
            .then(function (res) {
            _this.set(res.data);
        });
    };
    User.prototype.save = function () {
        var id = this.get('id');
        if (id) {
            //put
            axios_1["default"].put("http://localhost:3000/users/" + id, this.data);
        }
        else {
            //post
            axios_1["default"].post('http://localhost:3000/users', this.data);
        }
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map