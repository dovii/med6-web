const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let quizSchema = new Schema({
    title: {
        type: String,
    },
    description: {
        type: Number,
    },

    question: {
        type: String,
    },
});

const Quiz = mongoose.model("Quiz", quizSchema);
module.exports = Quiz;