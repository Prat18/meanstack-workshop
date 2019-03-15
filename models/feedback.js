const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const feedbackSchema = new Schema({
    email: { type: String, required: true, unique: true, lowercase: true },
    name: { type: String, required: true, lowercase: true},
    usn: {type: String, required: true, unique: true, lowercase: true},
    feedback: {type: String, required: true, lowercase: true}
});

module.exports = mongoose.model('Feedback', feedbackSchema);