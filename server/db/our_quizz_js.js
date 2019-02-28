db.quizzes.insert({
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