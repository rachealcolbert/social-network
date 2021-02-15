const {
    Schema,
    model
} = require('mongoose');

const UserSocial = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: {
            isEmail: true
        }
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
});

// social count 
// UserSocial.virtual 

const User = model('User', UserSocial);
module.exports = User;