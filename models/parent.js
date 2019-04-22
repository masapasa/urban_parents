const mongoose = require('mongoose');
  const Schema = mongoose.Schema;

  const parentSchema = new Schema({
    id:{
      type:String,
      required:true,
      unique: true
    },
    userName: {
      type: String,
      required: true
    },
    firstName : {
      type: String,
      required: true

    },
    lastName : {
      type: String,
      required: true
    },
    email: {
      type:String,
      required:true
    },
    age: Number,
    gender: String,
    languages: Array,
    nationality: String,
    location: String,
    occupation:String,
    picture:String,
    child: [ { type : Schema.Types.ObjectId, ref: 'Child' } ],
    activity: [ { type : Schema.Types.ObjectId, ref: 'Activity' } ]
  })

const Parent = mongoose.model("Parent", parentSchema);
module.exports = Parent;
