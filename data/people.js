/* Short profiles and optional offline activities. Checked 2026-09-26.
   Activity prompts are new learning suggestions, not historical claims. */
window.MLL_PEOPLE = [
  {
    id: 'einstein',
    name: 'Albert Einstein',
    role: 'Physicist',
    country: 'Born in Germany',
    hook: 'A compass sparked a lifetime of questions.',
    facts: [
      'When Albert was little, a compass amazed him. What invisible thing made its needle move?',
      'He became a physicist, a scientist who studies matter and energy. His ideas about light helped earn him a Nobel Prize.',
      'Albert also played the violin. Scientists can love music, art, and all sorts of other things!'
    ],
    stretch: {
      question: 'Can you study something you cannot see?',
      answer: 'Yes! You can look for what it does. You cannot see magnetic force, but you can watch it move a compass needle.'
    },
    quiz: {
      question: 'Which object amazed Albert when he was a child?',
      options: ['A compass', 'A tablet', 'A skateboard'],
      answer: 0,
      explain: 'A compass! Its moving needle made him wonder about invisible forces.'
    },
    activity: {
      title: 'Try a scientist question',
      prompt: 'Look around you. Choose one thing and ask: “Why does that happen?” Tell a grown-up your best guess.'
    },
    photoQuery: 'Albert Einstein portrait photograph',
    wikiTitle: 'Albert Einstein',
    photoAlt: 'A portrait of scientist Albert Einstein',
    sources: [
      {title: 'American Museum of Natural History: Einstein in Time', url: 'https://www.amnh.org/explore/ology/physics/einstein-in-time2'},
      {title: 'Nobel Prize: Albert Einstein facts', url: 'https://www.nobelprize.org/prizes/physics/1921/einstein/facts/'},
      {title: 'American Institute of Physics: Einstein and his violin', url: 'https://history.aip.org/exhibits/einstein/quantum3.htm'}
    ]
  },
  {
    id: 'katherine-johnson',
    name: 'Katherine Johnson',
    role: 'Space mathematician',
    country: 'United States',
    hook: 'Her numbers helped astronauts find their way.',
    facts: [
      'Katherine loved counting as a child. She counted steps, dishes, and almost anything she could!',
      'At NASA, she worked with a team and used math to help plan safe paths for spacecraft.',
      'Before astronaut John Glenn circled Earth, he asked Katherine to check the electronic computer\'s answers.'
    ],
    stretch: {
      question: 'Why check an answer even when a computer found it?',
      answer: 'Computers follow instructions written by people. Checking in another way can catch mistakes before they cause a problem.'
    },
    quiz: {
      question: 'What did Katherine use to help space missions?',
      options: ['A magic wand', 'Math', 'A fishing net'],
      answer: 1,
      explain: 'Math! Her calculations helped the NASA team plan and check spacecraft paths.'
    },
    activity: {
      title: 'Count it two ways',
      prompt: 'Make a group of 12 small objects. Count by ones, then by twos. Did both ways give you the same total?'
    },
    photoQuery: 'Katherine Johnson NASA portrait',
    wikiTitle: 'Katherine Johnson',
    photoAlt: 'NASA mathematician Katherine Johnson',
    sources: [
      {title: 'NASA Science: Katherine Johnson', url: 'https://science.nasa.gov/people/katherine-johnson/'},
      {title: 'NASA: The Girl Who Loved to Count', url: 'https://www.nasa.gov/centers-and-facilities/langley/katherine-johnson-the-girl-who-loved-to-count/'}
    ]
  },
  {
    id: 'cousteau',
    name: 'Jacques Cousteau',
    role: 'Ocean explorer',
    country: 'France',
    hook: 'He helped people explore a world underwater.',
    facts: [
      'Jacques and his team explored the ocean aboard their ship, Calypso. He filmed sea life so people on land could see its wonders.',
      'He and engineer Émile Gagnan developed the Aqua-Lung, equipment that let divers carry their own breathing air underwater.',
      'He worked to protect the ocean from pollution and other damage. Exploring and caring can go together.'
    ],
    stretch: {
      question: 'Why does a diver carry air, but a fish does not?',
      answer: 'Our lungs need air to breathe. Fish use gills to take oxygen from water. A diver\'s tank holds breathing gas.'
    },
    quiz: {
      question: 'Who helped Cousteau develop the Aqua-Lung?',
      options: ['Nobody; he worked alone', 'Albert Einstein', 'Engineer Émile Gagnan'],
      answer: 2,
      explain: 'Émile Gagnan! The Aqua-Lung was a team invention, built on earlier ideas too.'
    },
    activity: {
      title: 'Plan an ocean mission',
      prompt: 'Choose one sea animal to study. Draw it and tell a grown-up one question you would ask about its life.'
    },
    photoQuery: 'Jacques Cousteau portrait red cap',
    wikiTitle: 'Jacques Cousteau',
    photoAlt: 'Ocean explorer Jacques Cousteau',
    sources: [
      {title: 'The Cousteau Society: Legacy', url: 'https://www.cousteau.org/know/legacy/'},
      {title: 'The Cousteau Society: The Aqua-Lung', url: 'https://www.cousteau.org/know/inventions/aqua-lung/'}
    ]
  },
  {
    id: 'frida-kahlo',
    name: 'Frida Kahlo',
    role: 'Artist',
    country: 'Mexico',
    hook: 'She painted stories about her own life.',
    facts: [
      'Frida was an artist from Mexico. Her paintings used colors, animals, and plants to tell stories about her life and feelings.',
      'She made many self-portraits. A self-portrait is a picture an artist makes of themself.',
      'Her home was called Casa Azul, or Blue House. Today it is a museum where people learn about her.'
    ],
    stretch: {
      question: 'Can a picture tell a story without words?',
      answer: 'Yes! Colors, faces, places, and objects can give us clues about a person\'s feelings and the things they care about.'
    },
    quiz: {
      question: 'What is a self-portrait?',
      options: ['A picture you make of yourself', 'A painting of only clouds', 'A map of the whole world'],
      answer: 0,
      explain: 'A picture you make of yourself! You can add things that help tell your own story.'
    },
    activity: {
      title: 'Make a Max portrait',
      prompt: 'Draw yourself with three things you love. A baseball? A shark? A family place? Tell someone why you chose them.'
    },
    photoQuery: 'Frida Kahlo portrait photograph Guillermo Kahlo',
    wikiTitle: 'Frida Kahlo',
    photoAlt: 'A portrait photograph of artist Frida Kahlo',
    sources: [
      {title: 'Frida Kahlo Museum: Frida', url: 'https://www.museofridakahlo.org.mx/frida/?lang=en'},
      {title: 'Frida Kahlo Museum: The Blue House', url: 'https://www.museofridakahlo.org.mx/museo/?lang=en'}
    ]
  }
];
