const {
    Schema,
    model
} = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const SocialThought = new Schema({
    thoughtText: {
        type: String,
        required: true,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        Required: true
    },
    reactions: [ReactionSchema]
});

const Thought = model('Thought', SocialThought);
module.exports = Thought;