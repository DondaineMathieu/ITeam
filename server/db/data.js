db.quizes.drop();
db.quizes.insert({
    name: 'quizz1',
  icon: 'quizz1/quizz1.jpg',
  keywords: ['kitchen', 'english'],
  questions: [{
    question: 'where is brian?',
    video: null,
    txtAnswers: ["in the living room", "in the kitchen", "in the garden", "in the bathroom"],
    imgAnswers: [],
    solutions: [1, 2],
    points: 3
  }, {
    question: 'Where is Jenny, the sister of Brian?',
    video: null,
    txtAnswers: [],
    imgAnswers: ["quizz1/bathroom.jpg", "quizz1/kitchen.jpg"],
    solutions: [0],
    points: 3
  }, {
    question: 'who is brian?',
    video: null,
    txtAnswers: ["a girl", "a boy"],
    imgAnswers: [],
    solutions: [0],
    points: 1
  }],
  published: true,
  ownerId: 1,
  scores: []
})
// // drugi inseert
// db.quizes.insert({
//     _uid: 1,
//     name: 'quizz1',
//   icon: 'quizz1/quizz1.jpg',
//   keywords: ['kitchen', 'english'],
//   questions: [{
//     question: 'where is brian?',
//     video: null,
//     txtAnswers: ["in the living room", "in the kitchen", "in the garden", "in the bathroom"],
//     imgAnswers: [],
//     solutions: [1, 2],
//     points: 3
//   }, {
//     question: 'Where is Jenny, the sister of Brian?',
//     video: null,
//     txtAnswers: [],
//     imgAnswers: ["quizz1/bathroom.jpg", "quizz1/kitchen.jpg"],
//     solutions: [0],
//     points: 3
//   }, {
//     question: 'who is brian?',
//     video: null,
//     txtAnswers: ["a girl", "a boy"],
//     imgAnswers: [],
//     solutions: [0],
//     points: 1
//   }],
//   published: true,
//   ownerId: 1,
//   scores: []
// })