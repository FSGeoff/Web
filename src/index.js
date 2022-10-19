"use strict";
exports.__esModule = true;
var User_1 = require("./models/User");
var user = new User_1.User({ name: 'Inity', age: 16 });
user.events.on('change', function () {
    console.log('change!');
});
user.events.trigger('change');
//# sourceMappingURL=index.js.map