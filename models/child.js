const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const childSchema = new Schema({
    name: String,
    language: Array,
    age: {
        type: Number,
        required: true
    },
    gender: String,
    languages: Array
});

const Child = mongoose.model("Child", childSchema);
module.exports = Child;
