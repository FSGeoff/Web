"use strict";
exports.__esModule = true;
exports.User = void 0;
var Eventing_1 = require("./Eventing");
var Sync_1 = require("./Sync");
var Attributes_1 = require("./Attributes");
var rootUrl = 'http://localhost:3000/users';
var User = /** @class */ (function () {
    function User(attrs) {
        this.events = new Eventing_1.Eventing();
        this.sync = new Sync_1.Sync(rootUrl);
        this.attributes = new Attributes_1.Attributes(attrs);
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map