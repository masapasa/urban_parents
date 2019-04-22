const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const childSchema = new Schema({
    name: String,
    languages: Array,
    age: {
        type: Number,
        required: true
    },
    gender: String,
});

const Child = mongoose.model("Child", childSchema);
module.exports = Child;
