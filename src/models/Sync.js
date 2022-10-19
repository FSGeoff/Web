"use strict";
exports.__esModule = true;
exports.Sync = void 0;
var axios_1 = require("axios");
var Sync = /** @class */ (function () {
    function Sync(rootUrl) {
        this.rootUrl = rootUrl;
    }
    ;
    Sync.prototype.fetch = function (id) {
        return axios_1["default"].get(this.rootUrl + "/" + id);
    };
    Sync.prototype.save = function (data) {
        var id = data.id;
        if (id) {
            //put
            return axios_1["default"].put(this.rootUrl + "/" + id, data);
        }
        else {
            //post
            return axios_1["default"].post(this.rootUrl, data);
        }
    };
    return Sync;
}());
exports.Sync = Sync;
//# sourceMappingURL=Sync.js.map