import {User} from "./models/User";

const user = new User({name: 'Inity', age: 16});

user.events.on('change', ()=> {
    console.log('change!');
});

user.events.trigger('change');