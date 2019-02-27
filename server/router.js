const express = require("express");

//const bodyParser = require("body-parser");
const router = express.Router();

const db = require('./db/mongoose.js');
const Users = db.users;
const Quizz =db.quizz;

router
  .get("/users", (req, res) => {
    Users
      .find({})
      .exec((err, data) => {
        if (err) console.log("error", err);
        else res.json(data);
      });
  }).get("/allquestion", (req, res) => {
    Quizz
      .find({})
      .exec((err, data) => {
        if (err) console.log("error", err);
        else res.json(data);
      });
  }).get("/users/:id", (req, res) => {
  Users.findOne({
      _id: req.params.id
  }).exec((err, data) => {
      if (err) return res.status(500).send(err);
      else res.json(data);
  });
}).get("/quiz/:id", (req, res) => {
Quizz.findOne({
    _id: req.params.id
}).exec((err, data) => {
    if (err) return res.status(500).send(err);
    else res.json(data);
});
})
.post("/newQuestion", (req, res) => {
const q = new Quizz(req.body);

// The json object is the body of the request
q.save()                          // Save the object.
 .then(item => res.json(item))     // send the object in response
 .catch(err => res.status(400).send("unable to save to database "+err));
})
  .post("/newUsers", (req, res) => {
  const q = new Users(req.body);
 // The json object is the body of the request
  q.save()                          // Save the object.
   .then(item => res.json(item))     // send the object in response
   .catch(err => res.status(400).send("unable to save to database "+err));
})
  .use((req, res) => {
    console.log("ok");
    res.status(400);
    res.json({
      error: "Bad request"
    });
  });




module.exports = router;
