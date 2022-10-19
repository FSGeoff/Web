import {User} from "./models/User";

const user = new User({name: 'Iniko', age: 8});

user.save();