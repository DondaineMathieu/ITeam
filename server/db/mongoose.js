const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// db connexionq
mongoose.connect('mongodb://localhost/Quizz',{ useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("connected to", db.client.s.url);

});

// database collections
const usersSchema = Schema({
  name: String,
  password: String,
  score:String
});

/*const quizzSchema = Schema({
  name:String,
  icon:String,
  keywords:[String],
  questions:[
    {
      question:String,
      video:String,
      txtAnswers:[String],
      imgAnswers:[String],
      solutions:[Number],
      points:Number
    }
  ],
  published:Boolean,


});*/

const quizzesSchema = mongoose.Schema({
  name: String,
  icon: String,
  keywords: [],
  questions: [],
  published: Boolean,
  ownerId: Schema.Types.ObjectId,
  scores: []
});

// exports
const Users = mongoose.model('Users', usersSchema);
const Quizzes=mongoose.model("Quizzes",quizzesSchema);
module.exports = {};
module.exports.users = Users;
module.exports.quizzes=Quizzes;
