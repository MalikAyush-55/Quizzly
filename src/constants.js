export const jsQuizz = {
questions : [
    {
      question: "What is React primarily used for?",
      choices: [
        "Data analysis",
        "Building user interfaces",
        "Server-side rendering",
        "Machine learning"
      ],
      correctAnswer: "Building user interfaces"
    },
    {
      question: "What is a component in React?",
      choices: [
        "A function or class that optionally accepts input and returns a React element",
        "A JavaScript function that doesn't return anything",
        "A type of variable",
        "A method to manage state"
      ],
      correctAnswer: "A function or class that optionally accepts input and returns a React element"
    },
    {
      question: "How do you pass data to a component in React?",
      choices: [
        "Through props",
        "Through state",
        "Using context",
        "Using hooks"
      ],
      correctAnswer: "Through props"
    },
    {
      question: "What hook is used to manage side effects in functional components?",
      choices: [
        "useState",
        "useContext",
        "useEffect",
        "useReducer"
      ],
      correctAnswer: "useEffect"
    },
    {
      question: "What is JSX in React?",
      choices: [
        "JavaScript XML, a syntax extension for JavaScript",
        "A styling library",
        "A server-side templating engine",
        "A type of JavaScript"
      ],
      correctAnswer: "JavaScript XML, a syntax extension for JavaScript"
    }
  ]
};

export const resultInitialState = {
    score: 0,
    correctAnswers: 0,
    wrongAnswers:0,
};
  