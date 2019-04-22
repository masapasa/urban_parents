//parent route view
const express = require("express");
const router = express.Router();
const Parent = require("../models/parent");
const uuidv4 = require('uuid/v4')

// parent route
router.get("/registration", (req, res, next) => {
  res.render("parent");
});

router.post("/parent", (req, res, next) => {
  const { userName, firstName, lastName, age, email, languages, nationality, gender, location, ocupation, child, activity, pictureUrl } = req.body;
  const id = uuidv4();
  const newParent = new Parent({
    id,
    userName,
    firstName,
    lastName,
    email,
    age,
    languages,
    nationality,
    gender,
    location,
    ocupation,
    child,
    activity,
    pictureUrl
  });
  newParent
    .save()
    .then(parent => {
      res.render("parent_details", parent);
    })
    .catch(error => {
      console.log(error);
    });
});

//child route
router.get("/parent/:parentId/child", (req, res, next) => {
  res.render("child");
});

router.post("/child", (req, res, next) => {
  const {name,languages,age, gender} = req.body
  const newChild = new Child({
    name,
    languages,
    age,
    gender
  }); 
  newChild
  .save()
  .then(child => {
    res.render("child_details",child);
  })
  .catch(error => {
    console.log(error);
  });
})



//activity 
router.get("/parent/:parentId/activity", (req, res, next) => {
  res.render("activity");
});
router.post("/activity", (req, res, next) => {
  const {} = req.body
  const newActivity = new Activity({
    location,
    activityType,
    time,
  }); 
  newActivity
  .save()
  .then(activity=> {
    res.render("`activity_details", activity);
  })
  .catch(error => {
    console.log(error);
  });
})

module.exports = router;
