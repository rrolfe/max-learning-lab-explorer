/* Max's featured places. Family memories were supplied by his parent.
   Geographic and science sources were checked on 2026-09-26.
   Coordinates locate public cities or geographic features, never family homes. */
window.MLL_PLACES_FAMILY = [
  {
    id: 'guayaquil',
    name: 'Guayaquil',
    country: 'Ecuador',
    category: 'Family',
    lat: -2.1894,
    lon: -79.8891,
    hook: 'Mom\'s city has a park full of iguanas!',
    facts: [
      'Iguanas climb trees and wander through Seminario Park, right in the city.',
      'Guayaquil sits beside the Guayas River. Its waterfront walkway is called the Malecón.',
      'There are 444 steps up Santa Ana Hill to its lighthouse. That is a LOT of climbing!'
    ],
    familyNote: 'Mom is from Guayaquil! Your abuelitos, your tío, two tías, and four primos live there. Ask Mom about her favorite childhood place.',
    stretch: {
      question: 'Why might people build a city beside a river?',
      answer: 'Boats can bring people, food, and other supplies. A river can connect a city with the sea.'
    },
    quiz: {
      question: 'Which animal wanders through Guayaquil\'s Seminario Park?',
      options: ['Penguins', 'Iguanas', 'Kangaroos'],
      answer: 1,
      explain: 'Iguanas! Seminario Park is also known as Iguana Park.'
    },
    photoQuery: 'Guayaquil Malecon 2000 river waterfront Ecuador',
    wikiTitle: 'Malecón 2000',
    photoAlt: 'The Malecón waterfront in Guayaquil, Ecuador',
    sources: [
      {title: 'City of Guayaquil: Seminario Park', url: 'https://guayaquil.gob.ec/parque-seminario-reune-historia-naturaleza-tradicion-guayaquilena/'},
      {title: 'Ecuador Tourism: Pacific Coast', url: 'https://ecuador.travel/en/pacific-coast/'},
      {title: 'City of Guayaquil: Santa Ana and its 444 steps', url: 'https://guayaquil.gob.ec/santa-ana-360-atrae-visitantes-iconicas-galerias-arte-guayaquil/'}
    ]
  },
  {
    id: 'kirkland',
    name: 'Kirkland & family stops',
    country: 'Washington, USA',
    category: 'Family',
    lat: 47.6815,
    lon: -122.2087,
    hook: 'Follow Dad\'s family across three states.',
    facts: [
      'Kirkland sits beside Lake Washington. This lake has fresh water, unlike the salty ocean.',
      'Juanita Bay has boardwalks where you can look for birds, turtles, and other wetland animals.',
      'Washington is a state in America\'s northwest. Washington, D.C., the country\'s capital city, is a different place!'
    ],
    familyNote: 'Dad is from Kirkland, where Nana and your uncle live. Your aunt and other uncle live in Boise, Idaho. Grampa splits his time between Manson, Washington, and La Quinta, California.',
    familyStops: [
      {name: 'Boise', state: 'Idaho', lat: 43.6150, lon: -116.2023, connection: 'Your aunt and uncle live here.'},
      {name: 'Manson', state: 'Washington', lat: 47.8849, lon: -120.1584, connection: 'One of Grampa\'s two home towns.'},
      {name: 'La Quinta', state: 'California', lat: 33.6634, lon: -116.3100, connection: 'Grampa also spends time here.'}
    ],
    stretch: {
      question: 'Can you sort the family stops into three states?',
      answer: 'Kirkland and Manson are in Washington. Boise is in Idaho. La Quinta is in California.'
    },
    quiz: {
      question: 'Which family stop is in Idaho?',
      options: ['Boise', 'Kirkland', 'La Quinta'],
      answer: 0,
      explain: 'Boise is in Idaho. Kirkland is in Washington, and La Quinta is in California.'
    },
    photoQuery: 'Kirkland Washington Marina Park Lake Washington waterfront',
    wikiTitle: 'Kirkland, Washington',
    photoAlt: 'Kirkland on the shore of Lake Washington',
    sources: [
      {title: 'City of Kirkland: Juanita Beach Park', url: 'https://www.kirklandwa.gov/Government/Departments/Parks-and-Community-Services/Find-a-Park/Juanita-Beach-Park'},
      {title: 'City of Kirkland: Juanita Bay Park', url: 'https://www.kirklandwa.gov/Government/Departments/Parks-and-Community-Services/Find-a-Park/Juanita-Bay-Park'},
      {title: 'Eastside Audubon: Kirkland park wildlife', url: 'https://www.eastsideaudubon.org/eastside-audubon-kirkland-rangers'}
    ]
  },
  {
    id: 'exuma',
    name: 'Exuma',
    country: 'The Bahamas',
    category: 'Family',
    lat: 23.6193,
    lon: -75.9695,
    hook: 'Your own lemon shark adventure happened here!',
    facts: [
      'The Exumas are a chain of hundreds of islands and small islands called cays. Say it like “keys.”',
      'Lemon sharks get their name from their yellow-brown color. It helps them blend in above a sandy seabed.',
      'On Big Major Cay, pigs paddle in the sea. Exuma really does have swimming pigs!'
    ],
    familyNote: 'You visited Exuma on a family vacation, went fishing, and caught a lemon shark! What do you remember about that moment?',
    stretch: {
      question: 'Why can shallow water be helpful to a baby shark?',
      answer: 'Young lemon sharks can grow in sheltered, shallow areas. These shark nurseries offer food and some protection from bigger predators.'
    },
    quiz: {
      question: 'Why is a lemon shark called a lemon shark?',
      options: ['It eats lemons', 'Its yellow-brown color', 'It lives in lemon trees'],
      answer: 1,
      explain: 'Its yellow-brown color gave it the name. Lemon sharks eat sea animals, not lemons!'
    },
    photoQuery: 'Exuma Bahamas aerial islands turquoise sea',
    wikiTitle: 'Exuma',
    photoAlt: 'Islands and turquoise water in the Exumas, The Bahamas',
    sources: [
      {title: 'Bahamas Tourism: Island hopping in the Exumas', url: 'https://www.bahamas.com/experiences/island-hopping-in-the-exumas'},
      {title: 'Florida Museum: Lemon shark', url: 'https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/lemon-shark/'},
      {title: 'Bahamas Tourism: Home of the swimming pigs', url: 'https://www.bahamas.com/experiences/official-home-swimming-pigs'},
      {title: 'Florida Fish and Wildlife: Lemon shark nurseries', url: 'https://myfwc.com/research/saltwater/sharks-rays/shark-species/lemon/'}
    ]
  },
  {
    id: 'hawaii',
    name: 'Hawaiʻi',
    country: 'USA',
    category: 'Islands',
    lat: 20.7,
    lon: -157.0,
    hook: 'Islands built by volcanoes, with turtles and black sand.',
    facts: [
      'Hawaiʻi is America\'s 50th state. Like Exuma, it has tropical islands, but it is in the Pacific Ocean.',
      'Volcanoes built the Hawaiian Islands from the ocean floor. Lava cooled into rock, and the islands slowly grew.',
      'Some beaches have black sand made from volcanic rock. Green sea turtles can rest on the shore.'
    ],
    familyNote: 'You have not visited Hawaiʻi yet. Would you look for a sea turtle, explore a volcano, or try a black-sand beach?',
    stretch: {
      question: 'How can a volcano build an island?',
      answer: 'Lava comes out, cools, and becomes rock. Many eruptions pile up enough rock to rise above the ocean.'
    },
    quiz: {
      question: 'What built the Hawaiian Islands?',
      options: ['Giant sandcastles', 'Icebergs', 'Volcanoes'],
      answer: 2,
      explain: 'Volcanoes! Layer after layer of cooled lava built islands above the sea.'
    },
    photoQuery: 'Na Pali Coast Hawaii green cliffs ocean',
    wikiTitle: 'Nā Pali Coast State Park',
    photoAlt: 'Green coastal cliffs above the Pacific Ocean on Kauaʻi, Hawaiʻi',
    sources: [
      {title: 'US Senate: Hawaiʻi statehood', url: 'https://www.senate.gov/states/HI/timeline.shtml'},
      {title: 'National Park Service: Hawaiian geology and volcanoes', url: 'https://www.nps.gov/locations/hawaii/geology.htm'},
      {title: 'Hawaiʻi Tourism: Island of Hawaiʻi beaches', url: 'https://www.gohawaii.com/islands/hawaii-big-island/things-to-do/beaches'}
    ]
  },
  {
    id: 'antarctica',
    name: 'Antarctica',
    country: 'The southernmost continent',
    category: 'Wild places',
    lat: -77.53,
    lon: 167.17,
    hook: 'Secret lakes, steamy ice caves, and strange fish!',
    facts: [
      'Antarctica hides liquid lakes beneath its thick ice. Heat from inside Earth helps keep water from freezing.',
      'Mount Erebus is a volcano in Antarctica. Its heat and steam make caves inside the ice!',
      'Some Antarctic fish have nearly clear blood! Icefish lack the red substance that colors our blood.'
    ],
    stretch: {
      question: 'How can a cold continent have a hot volcano?',
      answer: 'Cold air chills the surface, but deep inside Earth it is hot. Melted rock can rise through a volcano, even in Antarctica.'
    },
    quiz: {
      question: 'What surprising thing can hide beneath Antarctica\'s ice?',
      options: ['Liquid lakes', 'A tropical rainforest', 'A busy shopping mall'],
      answer: 0,
      explain: 'Liquid lakes! Antarctica can hide water below the ice, even when the air above is freezing.'
    },
    photoQuery: 'Mount Erebus Antarctica snowy volcano',
    wikiTitle: 'Mount Erebus',
    photoAlt: 'Mount Erebus, an active volcano surrounded by Antarctic snow and ice',
    sources: [
      {title: 'British Antarctic Survey: Antarctica\'s hidden lakes', url: 'https://legacy.bas.ac.uk/bas_research/science_briefings/antarcticas_hidden_lakes.php'},
      {title: 'Australian Antarctic Program: Volcanic ice caves', url: 'https://www.antarctica.gov.au/news/2014/volcanoes-provided-ice-age-refuge-for-antarctic-biodiversity/'},
      {title: 'NSF GAGE: Mapping the ice caves of Mount Erebus', url: 'https://www.unavco.org/news/seals-a-lava-lake-and-subglacial-microbes-2013-2014-antarctic-tls-highlights-part-1/'},
      {title: 'Australian Antarctic Program: Antarctic fish', url: 'https://www.antarctica.gov.au/about-antarctica/animals/fish/'}
    ]
  }
];
