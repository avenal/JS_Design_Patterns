const User = function(name) {
    this.name = name;
    this.chatroom = null;
}

User.prototype = {
    send: function(message, to) {
        this.chatroom.send(message, this, to);
    },
    recieve: function(message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
}

const Chatroom = function() {
    let users = {};

    return {
        register: function(user) {
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function(message, from, to) {
            if(to) {
                to.recieve(message, from);
            } else {
                for(key in users)
                {
                    if(users[key] != from)
                    {
                        users[key].recieve(message, from);
                    }
                }
            }
        }
    }
}

const user1 = new User('John');
const user2 = new User('Rob');
const user3 = new User('Mike');

const chatroom = new Chatroom();

chatroom.register(user1);
chatroom.register(user2);
chatroom.register(user3);

user1.send('Hi! (sorry for bad english)', user2);
user2.send('Hi');
user3.send('Leerooooy Jenkins', user1);

