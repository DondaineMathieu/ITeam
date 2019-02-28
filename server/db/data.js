db.quizzes.drop();
db.quizzes.insert({
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


db.allquestion.insert({
  name: 'Lens Louvre Quizz',
  icon: 'quizzSpecial/quizzSpecial.jpg',
  keywords: ['Lans', 'Louvre'],
  questions:
      [{
          question: 'When was official opening?',
          video: null,
          txtAnswers: ["4th December 2012", "14th March 2016", "3rd December 2001", "9th September 2005"],
          imgAnswers: [],
          solutions: [0],
          points: 3
      },
      {
          question: 'Which galery in the Museum of Louvre Lens is free?',
          video: null,
          txtAnswers: ["Underway gallery", "Time gallery", "Every gallery", "None"],
          // imgAnswers: ["quizz1/bathroom.jpg", "quizz1/kitchen.jpg"],
          imgAnswers: [],
          solutions: [1], 
          points: 3
      }, { 
          question: 'Is there any Sarcophagus in the Time gallery?', 
          video: null, 
          txtAnswers: ["Yes", "No"], 
          imgAnswers: [], 
          solutions: [0], 
          points: 1 
      },
      {
          question: 'Which picture(s) was taken in the museum Louvre Lens?',
          video: null,
          txtAnswers: [],
          imgAnswers: ["quizzSpecial/cat3.jpg", "quizzSpecial/cat1.jpg","quizzSpecial/cat4.jpg", "quizzSpecial/cat2.jpg"],
          solutions: [1, 2],
          points: 3
      },
      {
          question: 'Which of thoose style is not an art style ?',
          video: null,
          txtAnswers: ["Realism", "Cubism", "Pop art", "Lulitism"],
          imgAnswers: [],
          solutions: [3], 
          points: 2
      }, { 
          question: 'How many art pieces are in Time gallery in Louvre Lens?', 
          video: 'video/video.mp4', 
          txtAnswers: ["123", "598", "362", "233"], 
          imgAnswers: [], 
          solutions: [3], 
          points: 3 
      }], 
  published: true, 
  ownerId: 1, 
  scores: []
});