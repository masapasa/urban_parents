const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema({
    location: {
        required: true,
        type: String
    },
    activityType: {
        required: true,
        type: String
    },
    time: {
        required: true,
        type: Date
    }
});
const Activity = mongoose.model("Activity", activitySchema);
module.exports = Activity;
