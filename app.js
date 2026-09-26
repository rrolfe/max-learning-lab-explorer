/* Max Learning Lab, English / Español. Bundled so this update needs only index.html and app.js. */

/* ===== i18n.js ===== */
/* Max's Lab bilingual runtime. Spanish lessons are bundled below. */
(function(){
  let language='en';try{if(localStorage.getItem('max-learning-lab-language')==='es')language='es';}catch{}
  const words={
    'Learning Lab':'Laboratorio de aprendizaje',
    'Progress can’t be saved in this browser.':'Este navegador no puede guardar tu progreso.',
    '← Explore the lab':'← Explora el laboratorio','⌂ Home':'⌂ Inicio','Activity navigation':'Navegación de actividades',
    '◖ Listen':'◖ Escuchar','■ Stop reading':'■ Dejar de leer','Read-aloud is not available in this browser.':'Este navegador no puede leer en voz alta.',
    'FAMILY & FAVORITES':'FAMILIA Y FAVORITOS','Surprise me!':'¡Sorpréndeme!','✦ Surprise me':'✦ Sorpréndeme',
    'Ice caves? Dragons? A giant salt mirror? Let’s find out.':'¿Cuevas de hielo? ¿Dragones? ¿Un espejo gigante de sal? ¡Vamos a descubrirlo!',
    'YOUR CURIOSITY. YOUR ADVENTURE.':'TU CURIOSIDAD. TU AVENTURA.','Big world. ':'Un mundo enorme. ',
    'For the explorer, the ballplayer, and the question-asker in you.':'Para el explorador, el beisbolista y el curioso que llevas dentro.',
    'Explore the map ↗':'Explora el mapa ↗','PLACES TO GO':'LUGARES POR DESCUBRIR','A PLACE IN YOUR STORY':'UN LUGAR EN TU HISTORIA',
    'Remember Exuma?':'¿Recuerdas Exuma?','Blue water, fishing days, and the lemon shark you caught.':'Agua azul, días de pesca y el tiburón limón que atrapaste.',
    'Choose your adventure':'Elige tu aventura','Explore. Play. Make.':'Explora. Juega. Crea.',
    'Places & people':'Lugares y personas','YOUR WORLD':'TU MUNDO','Family stories. Faraway discoveries.':'Historias de familia. Lugares por descubrir.',
    'Home Run Hero':'Héroe del jonrón','PLAY BALL':'¡A JUGAR!','Big swing. Great timing.':'Un gran batazo en el momento justo.',
    'Ocean detective':'Detective del océano','DIVE DEEP':'AL AGUA','Meet the ocean’s amazing animals.':'Conoce a los increíbles animales del océano.',
    'Big ideas':'Grandes ideas','CURIOUS MINDS':'MENTES CURIOSAS','Meet people who asked big questions.':'Conoce a personas que hicieron grandes preguntas.',
    'Block lab':'Laboratorio de bloques','PUZZLE POWER':'PIENSA Y JUEGA','Turn it. Fit it. Clear a row.':'Gira. Encaja. Completa una fila.',
    'Pattern studio':'Taller de patrones','MAKE SOMETHING':'A CREAR','Build a picture, one square at a time.':'Crea un dibujo, un cuadrito a la vez.',
    'Your passport is ready.':'Tu pasaporte está listo.','Every place you open becomes part of your story.':'Cada lugar que descubres forma parte de tu historia.',
    'My passport →':'Mi pasaporte →','PLACES & PEOPLE':'LUGARES Y PERSONAS','Where shall we go?':'¿Adónde vamos?',
    'Start with a family place, or take a leap into somewhere new.':'Elige un lugar de tu familia o descubre uno nuevo.',
    'Open world map ↗':'Abre el mapa del mundo ↗','Where these facts come from':'De dónde viene esta información',
    'YOUR TURN':'TU TURNO','Try another idea. Look at the clues above.':'Prueba otra idea. Mira las pistas de arriba.',
    '← Back to the map':'← Volver al mapa','← My passport':'← Mi pasaporte','← All places':'← Todos los lugares',
    'Find it on the world map ↗':'Encuéntralo en el mapa ↗','Your family trail':'El recorrido de tu familia','See the family pins ↗':'Ver los lugares de tu familia ↗',
    '✓ Passport stamped':'✓ Pasaporte sellado','✦ Stamp my passport':'✦ Sella mi pasaporte','Already stamped. You can always come back!':'¡Ya tienes este sello! Puedes volver cuando quieras.',
    'Try fitting falling shapes into complete rows.':'Encaja las figuras que caen para completar filas.','Play Block Lab →':'Juega con bloques →',
    'Explore more places':'Explora más lugares','✦ Another surprise':'✦ Otra sorpresa','THE WORLD IS YOUR CLASSROOM':'EL MUNDO ES TU SALÓN DE CLASES',
    'Point. Tap. Explore.':'Señala. Toca. Explora.','Tap a pin to meet a place. Zoom in to separate nearby destinations.':'Toca un punto para conocer un lugar. Acerca el mapa para ver los lugares cercanos.',
    'The map could not load. You can still explore every place below.':'El mapa no pudo cargarse. Aún puedes explorar los lugares.',
    'YOUR EXPLORER PASSPORT':'TU PASAPORTE DE EXPLORADOR','Look where you’ve been.':'Mira lo que has descubierto.',
    'Every adventure starts somewhere.':'Toda aventura tiene un comienzo.',
    'Open a place to start your passport. Come back here whenever you want to visit it again.':'Abre un lugar para empezar tu pasaporte. Vuelve aquí cuando quieras visitarlo otra vez.',
    'Find my first surprise':'Descubre mi primera sorpresa','BIG IDEAS START SMALL':'LAS GRANDES IDEAS EMPIEZAN POCO A POCO',
    'Meet a curious mind.':'Conoce una mente curiosa.','Scientists, explorers, and artists all started by asking questions. Just like you.':'Los científicos, exploradores y artistas empezaron haciendo preguntas. ¡Igual que tú!',
    '← All curious minds':'← Todas las mentes curiosas','TRY IT YOURSELF':'INTÉNTALO TÚ','Open Pattern Studio →':'Abre el taller de patrones →','Meet ocean animals →':'Conoce animales del océano →',
    'This activity did not load. Go Home and try again.':'Esta actividad no pudo cargarse. Vuelve al inicio e inténtalo otra vez.',
    'Your explorer passport is back.':'Tu pasaporte de explorador está de vuelta.','That file is not a Learning Lab progress backup.':'Ese archivo no es una copia del progreso del laboratorio.',
    'Photo credits & research':'Créditos de fotos y fuentes','← Back to the lab':'← Volver al laboratorio','Original photograph':'Fotografía original','Fact sources':'Fuentes de información',
    'World map':'Mapa del mundo','Games':'Juegos','Photo':'Foto'
  };
  window.MLL_I18N={
    get lang(){return language;},
    pick(en,es){return language==='es'?es:en;},
    t(text){return language==='es'&&typeof text==='string'?(words[text]??text):text;},
    set(lang){language=lang==='es'?'es':'en';try{localStorage.setItem('max-learning-lab-language',language);}catch{}},
    staticDOM(){
      document.documentElement.lang=language;
      document.querySelectorAll('[data-en][data-es]').forEach(n=>{n.textContent=n.dataset[language];});
      document.querySelectorAll('[data-aria-en]').forEach(n=>n.setAttribute('aria-label',n.dataset[language==='es'?'ariaEs':'ariaEn']));
      document.querySelectorAll('[data-language]').forEach(n=>n.setAttribute('aria-pressed',String(n.dataset.language===language)));
    }
  };
})();

;

/* ===== es-family-people.js ===== */
/* Spanish translations for Max Learning Lab. IDs and source links match the English data. */
window.MLL_ES_FAMILY = [
  {
    "id": "guayaquil",
    "name": "Guayaquil",
    "country": "Ecuador",
    "category": "Familia",
    "lat": -2.1894,
    "lon": -79.8891,
    "hook": "¡La ciudad de Mamá tiene un parque lleno de iguanas!",
    "facts": [
      "Las iguanas trepan a los árboles y pasean por el Parque Seminario, en plena ciudad.",
      "Guayaquil está junto al río Guayas. El paseo a la orilla del río se llama Malecón.",
      "Hay 444 escalones para subir al faro del cerro Santa Ana. ¡Son MUCHÍSIMOS escalones!"
    ],
    "familyNote": "¡Mamá es de Guayaquil! Tus abuelitos, tu tío, dos tías y cuatro primos viven allí. Pregúntale a Mamá cuál era su lugar favorito cuando era niña.",
    "stretch": {
      "question": "¿Por qué crees que la gente construiría una ciudad junto a un río?",
      "answer": "Los barcos pueden traer personas, comida y otras cosas que hacen falta. Un río puede conectar una ciudad con el mar."
    },
    "quiz": {
      "question": "¿Qué animal pasea por el Parque Seminario de Guayaquil?",
      "options": [
        "Pingüinos",
        "Iguanas",
        "Canguros"
      ],
      "answer": 1,
      "explain": "¡Iguanas! Al Parque Seminario también se lo conoce como el Parque de las Iguanas."
    },
    "photoQuery": "Guayaquil Malecon 2000 river waterfront Ecuador",
    "wikiTitle": "Malecón 2000",
    "photoAlt": "El Malecón a orillas del río en Guayaquil, Ecuador",
    "sources": [
      {
        "title": "Municipio de Guayaquil: Parque Seminario",
        "url": "https://guayaquil.gob.ec/parque-seminario-reune-historia-naturaleza-tradicion-guayaquilena/"
      },
      {
        "title": "Turismo de Ecuador: costa del Pacífico",
        "url": "https://ecuador.travel/en/pacific-coast/"
      },
      {
        "title": "Municipio de Guayaquil: Santa Ana y sus 444 escalones",
        "url": "https://guayaquil.gob.ec/santa-ana-360-atrae-visitantes-iconicas-galerias-arte-guayaquil/"
      }
    ]
  },
  {
    "id": "kirkland",
    "name": "Kirkland y otros lugares de la familia",
    "country": "Washington, Estados Unidos",
    "category": "Familia",
    "lat": 47.6815,
    "lon": -122.2087,
    "hook": "Sigue a la familia de Papá por tres estados.",
    "facts": [
      "Kirkland está junto al lago Washington. Este lago tiene agua dulce, a diferencia del océano, que tiene agua salada.",
      "La bahía de Juanita tiene pasarelas de madera desde donde puedes buscar aves, tortugas y otros animales de los humedales.",
      "Washington es un estado del noroeste de Estados Unidos. ¡Washington, D. C., la capital del país, es otro lugar!"
    ],
    "familyNote": "Papá es de Kirkland, donde viven Nana y tu tío. Tu tía y tu otro tío viven en Boise, Idaho. Grampa pasa parte del tiempo en Manson, Washington, y parte en La Quinta, California.",
    "familyStops": [
      {
        "name": "Boise",
        "state": "Idaho",
        "lat": 43.615,
        "lon": -116.2023,
        "connection": "Tu tía y tu tío viven aquí."
      },
      {
        "name": "Manson",
        "state": "Washington",
        "lat": 47.8849,
        "lon": -120.1584,
        "connection": "Uno de los dos lugares donde vive Grampa."
      },
      {
        "name": "La Quinta",
        "state": "California",
        "lat": 33.6634,
        "lon": -116.31,
        "connection": "Grampa también pasa tiempo aquí."
      }
    ],
    "stretch": {
      "question": "¿Puedes agrupar estos lugares de la familia en tres estados?",
      "answer": "Kirkland y Manson están en Washington. Boise está en Idaho. La Quinta está en California."
    },
    "quiz": {
      "question": "¿Cuál de estos lugares de la familia está en Idaho?",
      "options": [
        "Boise",
        "Kirkland",
        "La Quinta"
      ],
      "answer": 0,
      "explain": "Boise está en Idaho. Kirkland está en Washington y La Quinta está en California."
    },
    "photoQuery": "Kirkland Washington Marina Park Lake Washington waterfront",
    "wikiTitle": "Kirkland, Washington",
    "photoAlt": "Kirkland a orillas del lago Washington",
    "sources": [
      {
        "title": "Ciudad de Kirkland: parque de la playa de Juanita",
        "url": "https://www.kirklandwa.gov/Government/Departments/Parks-and-Community-Services/Find-a-Park/Juanita-Beach-Park"
      },
      {
        "title": "Ciudad de Kirkland: parque de la bahía de Juanita",
        "url": "https://www.kirklandwa.gov/Government/Departments/Parks-and-Community-Services/Find-a-Park/Juanita-Bay-Park"
      },
      {
        "title": "Eastside Audubon: animales de los parques de Kirkland",
        "url": "https://www.eastsideaudubon.org/eastside-audubon-kirkland-rangers"
      }
    ]
  },
  {
    "id": "exuma",
    "name": "Exuma",
    "country": "Las Bahamas",
    "category": "Familia",
    "lat": 23.6193,
    "lon": -75.9695,
    "hook": "¡Aquí viviste tu aventura con un tiburón limón!",
    "facts": [
      "Las Exumas forman una cadena de cientos de islas e islitas llamadas cayos. En inglés se llaman «cays» y se pronuncia «kiis».",
      "Los tiburones limón se llaman así por su color entre amarillo y café. Ese color los ayuda a confundirse con el fondo arenoso del mar.",
      "En Big Major Cay, los chanchitos nadan en el mar. ¡En Exuma de verdad hay chanchitos nadadores!"
    ],
    "familyNote": "Fuiste a Exuma de vacaciones con tu familia, saliste a pescar y ¡atrapaste un tiburón limón! ¿Qué recuerdas de ese momento?",
    "stretch": {
      "question": "¿Por qué el agua poco profunda puede ayudar a un tiburón bebé?",
      "answer": "Los tiburones limón pequeños pueden crecer en zonas protegidas y poco profundas. Estos lugares de crianza les ofrecen comida y algo de protección contra animales más grandes que podrían comérselos."
    },
    "quiz": {
      "question": "¿Por qué el tiburón limón se llama así?",
      "options": [
        "Porque come limones",
        "Por su color entre amarillo y café",
        "Porque vive en limoneros"
      ],
      "answer": 1,
      "explain": "Su color entre amarillo y café le dio su nombre. ¡Los tiburones limón comen animales marinos, no limones!"
    },
    "photoQuery": "Exuma Bahamas aerial islands turquoise sea",
    "wikiTitle": "Exuma",
    "photoAlt": "La playa de Emerald Bay y el agua turquesa en Gran Exuma, Las Bahamas",
    "sources": [
      {
        "title": "Turismo de Bahamas: de isla en isla por las Exumas",
        "url": "https://www.bahamas.com/experiences/island-hopping-in-the-exumas"
      },
      {
        "title": "Museo de Florida: tiburón limón",
        "url": "https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/lemon-shark/"
      },
      {
        "title": "Turismo de Bahamas: hogar de los chanchitos nadadores",
        "url": "https://www.bahamas.com/experiences/official-home-swimming-pigs"
      },
      {
        "title": "Comisión de Pesca y Vida Silvestre de Florida: zonas de crianza del tiburón limón",
        "url": "https://myfwc.com/research/saltwater/sharks-rays/shark-species/lemon/"
      }
    ]
  },
  {
    "id": "hawaii",
    "name": "Hawái",
    "country": "Estados Unidos",
    "category": "Islas",
    "lat": 20.7,
    "lon": -157,
    "hook": "Islas creadas por volcanes, con tortugas y arena negra.",
    "facts": [
      "Hawái es el estado número 50 de Estados Unidos. Como Exuma, tiene islas tropicales, pero está en el océano Pacífico.",
      "Los volcanes formaron las islas de Hawái desde el fondo del océano. La lava se enfrió y se convirtió en roca, y las islas fueron creciendo poco a poco.",
      "Algunas playas tienen arena negra hecha de roca volcánica. Las tortugas marinas verdes pueden descansar en la orilla."
    ],
    "familyNote": "Todavía no has visitado Hawái. ¿Te gustaría buscar una tortuga marina, explorar un volcán o conocer una playa de arena negra?",
    "stretch": {
      "question": "¿Cómo puede un volcán formar una isla?",
      "answer": "La lava sale, se enfría y se convierte en roca. Después de muchas erupciones, se acumula tanta roca que llega a sobresalir del océano."
    },
    "quiz": {
      "question": "¿Qué formó las islas de Hawái?",
      "options": [
        "Castillos de arena gigantes",
        "Icebergs",
        "Volcanes"
      ],
      "answer": 2,
      "explain": "¡Los volcanes! Capa tras capa de lava enfriada formó islas sobre el mar."
    },
    "photoQuery": "Na Pali Coast Hawaii green cliffs ocean",
    "wikiTitle": "Nā Pali Coast State Park",
    "photoAlt": "Acantilados costeros verdes sobre el océano Pacífico en Kauaʻi, Hawái",
    "sources": [
      {
        "title": "Senado de Estados Unidos: Hawái se convierte en estado",
        "url": "https://www.senate.gov/states/HI/timeline.shtml"
      },
      {
        "title": "Servicio de Parques Nacionales: geología y volcanes de Hawái",
        "url": "https://www.nps.gov/locations/hawaii/geology.htm"
      },
      {
        "title": "Turismo de Hawái: playas de la isla de Hawái",
        "url": "https://www.gohawaii.com/islands/hawaii-big-island/things-to-do/beaches"
      }
    ]
  },
  {
    "id": "antarctica",
    "name": "Antártida",
    "country": "El continente más al sur",
    "category": "Naturaleza salvaje",
    "lat": -77.53,
    "lon": 167.17,
    "hook": "¡Lagos secretos, cuevas de hielo con vapor y peces extraños!",
    "facts": [
      "La Antártida esconde lagos de agua líquida bajo su gruesa capa de hielo. El calor del interior de la Tierra ayuda a que el agua no se congele.",
      "El monte Erebus es un volcán de la Antártida. ¡Su calor y su vapor forman cuevas dentro del hielo!",
      "¡Algunos peces de la Antártida tienen sangre casi transparente! Los peces de hielo no tienen la sustancia roja que da color a nuestra sangre."
    ],
    "stretch": {
      "question": "¿Cómo puede haber un volcán caliente en un continente frío?",
      "answer": "El aire frío enfría la superficie, pero en lo profundo de la Tierra hace calor. La roca derretida puede subir por un volcán, incluso en la Antártida."
    },
    "quiz": {
      "question": "¿Qué cosa sorprendente puede esconderse bajo el hielo de la Antártida?",
      "options": [
        "Lagos de agua líquida",
        "Una selva tropical",
        "Un centro comercial lleno de gente"
      ],
      "answer": 0,
      "explain": "¡Lagos de agua líquida! Puede haber agua escondida bajo el hielo de la Antártida, aunque el aire de arriba esté helado."
    },
    "photoQuery": "Mount Erebus Antarctica snowy volcano",
    "wikiTitle": "Mount Erebus",
    "photoAlt": "El monte Erebus, un volcán activo rodeado de nieve y hielo de la Antártida",
    "sources": [
      {
        "title": "Servicio Británico de Investigación Antártica: los lagos ocultos de la Antártida",
        "url": "https://legacy.bas.ac.uk/bas_research/science_briefings/antarcticas_hidden_lakes.php"
      },
      {
        "title": "Programa Antártico Australiano: cuevas de hielo volcánicas",
        "url": "https://www.antarctica.gov.au/news/2014/volcanoes-provided-ice-age-refuge-for-antarctic-biodiversity/"
      },
      {
        "title": "NSF GAGE: mapas de las cuevas de hielo del monte Erebus",
        "url": "https://www.unavco.org/news/seals-a-lava-lake-and-subglacial-microbes-2013-2014-antarctic-tls-highlights-part-1/"
      },
      {
        "title": "Programa Antártico Australiano: peces antárticos",
        "url": "https://www.antarctica.gov.au/about-antarctica/animals/fish/"
      }
    ]
  }
];

window.MLL_ES_PEOPLE = [
  {
    "id": "einstein",
    "name": "Albert Einstein",
    "role": "Físico",
    "country": "Nació en Alemania",
    "hook": "Una brújula despertó preguntas que lo acompañaron toda la vida.",
    "facts": [
      "Cuando Albert era pequeño, una brújula lo asombró. ¿Qué cosa invisible hacía que se moviera la aguja?",
      "Se convirtió en físico, un científico que estudia la materia y la energía. Sus ideas sobre la luz lo ayudaron a ganar un Premio Nobel.",
      "Albert también tocaba el violín. ¡A los científicos les puede encantar la música, el arte y muchas otras cosas!"
    ],
    "stretch": {
      "question": "¿Puedes estudiar algo que no puedes ver?",
      "answer": "¡Sí! Puedes observar lo que hace. No puedes ver la fuerza magnética, pero sí puedes ver cómo mueve la aguja de una brújula."
    },
    "quiz": {
      "question": "¿Qué objeto asombró a Albert cuando era niño?",
      "options": [
        "Una brújula",
        "Una tableta",
        "Una patineta"
      ],
      "answer": 0,
      "explain": "¡Una brújula! Su aguja en movimiento le hizo preguntarse por las fuerzas invisibles."
    },
    "activity": {
      "title": "Haz una pregunta de científico",
      "prompt": "Mira a tu alrededor. Elige una cosa y pregunta: «¿Por qué pasa eso?». Cuéntale a un adulto cuál crees que es la respuesta."
    },
    "photoQuery": "Albert Einstein portrait photograph",
    "wikiTitle": "Albert Einstein",
    "photoAlt": "Un retrato del científico Albert Einstein",
    "sources": [
      {
        "title": "Museo Americano de Historia Natural: Einstein a través del tiempo",
        "url": "https://www.amnh.org/explore/ology/physics/einstein-in-time2"
      },
      {
        "title": "Premio Nobel: datos sobre Albert Einstein",
        "url": "https://www.nobelprize.org/prizes/physics/1921/einstein/facts/"
      },
      {
        "title": "Instituto Americano de Física: Einstein y su violín",
        "url": "https://history.aip.org/exhibits/einstein/quantum3.htm"
      }
    ]
  },
  {
    "id": "katherine-johnson",
    "name": "Katherine Johnson",
    "role": "Matemática de misiones espaciales",
    "country": "Estados Unidos",
    "hook": "Sus números ayudaron a los astronautas a encontrar el camino.",
    "facts": [
      "A Katherine le encantaba contar cuando era niña. ¡Contaba escalones, platos y casi todo lo que podía!",
      "En la NASA, trabajó en equipo y usó las matemáticas para ayudar a planear rutas seguras para las naves espaciales.",
      "Antes de que el astronauta John Glenn diera la vuelta a la Tierra, le pidió a Katherine que revisara las respuestas de la computadora electrónica."
    ],
    "stretch": {
      "question": "¿Por qué revisar una respuesta que encontró una computadora?",
      "answer": "Las computadoras siguen instrucciones escritas por personas. Revisar de otra manera puede ayudar a encontrar errores antes de que causen un problema."
    },
    "quiz": {
      "question": "¿Qué usó Katherine para ayudar en las misiones espaciales?",
      "options": [
        "Una varita mágica",
        "Las matemáticas",
        "Una red de pescar"
      ],
      "answer": 1,
      "explain": "¡Las matemáticas! Sus cálculos ayudaron al equipo de la NASA a planear y revisar las rutas de las naves espaciales."
    },
    "activity": {
      "title": "Cuenta de dos maneras",
      "prompt": "Reúne 12 objetos pequeños. Cuéntalos de uno en uno y luego de dos en dos. ¿Te dio el mismo total de las dos maneras?"
    },
    "photoQuery": "Katherine Johnson NASA portrait",
    "wikiTitle": "Katherine Johnson",
    "photoAlt": "Katherine Johnson, matemática de la NASA",
    "sources": [
      {
        "title": "Ciencia de la NASA: Katherine Johnson",
        "url": "https://science.nasa.gov/people/katherine-johnson/"
      },
      {
        "title": "NASA: la niña a la que le encantaba contar",
        "url": "https://www.nasa.gov/centers-and-facilities/langley/katherine-johnson-the-girl-who-loved-to-count/"
      }
    ]
  },
  {
    "id": "cousteau",
    "name": "Jacques Cousteau",
    "role": "Explorador del océano",
    "country": "Francia",
    "hook": "Ayudó a las personas a explorar el mundo bajo el agua.",
    "facts": [
      "Jacques y su equipo exploraron el océano a bordo de su barco, el Calypso. Filmó la vida marina para que las personas en tierra pudieran ver sus maravillas.",
      "Él y el ingeniero Émile Gagnan desarrollaron el Aqua-Lung, un equipo que permitía a los buzos llevar su propio aire para respirar bajo el agua.",
      "Trabajó para proteger el océano de la contaminación y otros daños. Explorar y cuidar pueden ir de la mano."
    ],
    "stretch": {
      "question": "¿Por qué un buzo lleva aire y un pez no?",
      "answer": "Nuestros pulmones necesitan aire para respirar. Los peces usan las branquias para tomar oxígeno del agua. El tanque del buzo contiene gas para respirar."
    },
    "quiz": {
      "question": "¿Quién ayudó a Cousteau a desarrollar el Aqua-Lung?",
      "options": [
        "Nadie; trabajó solo",
        "Albert Einstein",
        "El ingeniero Émile Gagnan"
      ],
      "answer": 2,
      "explain": "¡Émile Gagnan! El Aqua-Lung fue un invento en equipo que también aprovechó ideas anteriores."
    },
    "activity": {
      "title": "Planea una misión en el océano",
      "prompt": "Elige un animal marino para estudiar. Dibújalo y cuéntale a un adulto una pregunta que te gustaría hacer sobre su vida."
    },
    "photoQuery": "Jacques Cousteau portrait red cap",
    "wikiTitle": "Jacques Cousteau",
    "photoAlt": "Jacques Cousteau, explorador del océano",
    "sources": [
      {
        "title": "Sociedad Cousteau: su legado",
        "url": "https://www.cousteau.org/know/legacy/"
      },
      {
        "title": "Sociedad Cousteau: el Aqua-Lung",
        "url": "https://www.cousteau.org/know/inventions/aqua-lung/"
      }
    ]
  },
  {
    "id": "frida-kahlo",
    "name": "Frida Kahlo",
    "role": "Artista",
    "country": "México",
    "hook": "Pintó historias sobre su propia vida.",
    "facts": [
      "Frida fue una artista de México. En sus pinturas usaba colores, animales y plantas para contar historias sobre su vida y sus sentimientos.",
      "Hizo muchos autorretratos. Un autorretrato es una imagen que un artista hace de sí mismo.",
      "Su hogar se llamaba Casa Azul. Hoy es un museo donde las personas aprenden sobre ella."
    ],
    "stretch": {
      "question": "¿Puede una imagen contar una historia sin palabras?",
      "answer": "¡Sí! Los colores, las caras, los lugares y los objetos pueden darnos pistas sobre los sentimientos de una persona y las cosas que le importan."
    },
    "quiz": {
      "question": "¿Qué es un autorretrato?",
      "options": [
        "Una imagen que haces de ti mismo",
        "Una pintura solo de nubes",
        "Un mapa del mundo entero"
      ],
      "answer": 0,
      "explain": "¡Una imagen que haces de ti mismo! Puedes agregar cosas que ayuden a contar tu propia historia."
    },
    "activity": {
      "title": "Haz un retrato de Max",
      "prompt": "Dibújate con tres cosas que te encanten. ¿Una pelota de béisbol? ¿Un tiburón? ¿Un lugar de tu familia? Cuéntale a alguien por qué las elegiste."
    },
    "photoQuery": "Frida Kahlo portrait photograph Guillermo Kahlo",
    "wikiTitle": "Frida Kahlo",
    "photoAlt": "Una fotografía de retrato de la artista Frida Kahlo",
    "sources": [
      {
        "title": "Museo Frida Kahlo: Frida",
        "url": "https://www.museofridakahlo.org.mx/frida/?lang=en"
      },
      {
        "title": "Museo Frida Kahlo: la Casa Azul",
        "url": "https://www.museofridakahlo.org.mx/museo/?lang=en"
      }
    ]
  }
];

window.MLL_ES_PHOTO_ALT = {
  "guayaquil": "El Malecón a orillas del río en Guayaquil, Ecuador",
  "kirkland": "Kirkland a orillas del lago Washington",
  "exuma": "La playa de Emerald Bay y el agua turquesa en Gran Exuma, Las Bahamas",
  "hawaii": "Acantilados costeros verdes sobre el océano Pacífico en Kauaʻi, Hawái",
  "antarctica": "El monte Erebus, un volcán activo rodeado de nieve y hielo de la Antártida",
  "strokkur": "Un chorro de agua muy alto sale del géiser Strokkur.",
  "tromso": "Tromsø, una ciudad noruega rodeada de montañas y aguas del Ártico.",
  "giants-causeway": "Columnas de basalto que encajan unas con otras junto al mar en la Calzada del Gigante.",
  "mont-saint-michel": "La abadía y el pueblo de Mont-Saint-Michel se elevan sobre la bahía.",
  "pompeii": "Calles y edificios antiguos de piedra en Pompeya.",
  "sagrada-familia": "Las torres y los detalles de piedra de la Sagrada Familia de Barcelona.",
  "meteora": "Un monasterio de Meteora en lo alto de una columna de arenisca.",
  "cappadocia": "Formaciones rocosas puntiagudas y entradas de cuevas en Capadocia.",
  "suomenlinna": "Fortificaciones de piedra e islas de Suomenlinna en el mar Báltico.",
  "moscow": "La catedral de San Basilio en Moscú, con cúpulas de colores y dibujos.",
  "neuschwanstein": "Las torres claras del castillo de Neuschwanstein sobre colinas cubiertas de árboles.",
  "kinderdijk": "Molinos de viento junto a un canal en Kinderdijk, Países Bajos",
  "plitvice": "Lagos turquesas y cascadas entre el bosque verde de Plitvice.",
  "giza": "La Gran Pirámide de Guiza se eleva sobre la meseta arenosa.",
  "ait-benhaddou": "Torres y murallas de color tierra en una ladera de Aït Benhaddou.",
  "petra": "El inmenso Monasterio tallado en arenisca en Petra, Jordania",
  "amboseli": "Elefantes al pie del monte Kilimanjaro en el Parque Nacional de Amboseli, Kenia",
  "serengeti": "Ñus en las llanuras del oeste del Serengeti, Tanzania",
  "deadvlei": "Troncos oscuros en una llanura de arcilla blanca, al pie de dunas anaranjadas en Deadvlei.",
  "tsingy": "Un laberinto de picos afilados de piedra caliza en Tsingy de Bemaraha.",
  "boulders": "Pingüinos africanos en la orilla arenosa, entre grandes rocas en Boulders.",
  "lalibela": "La iglesia de San Jorge, con forma de cruz, tallada en la roca en Lalibela.",
  "rwanda-volcanoes": "Un gorila de montaña en los bosques del Parque Nacional de los Volcanes, Ruanda",
  "djoudj": "Un cormorán junto a una colonia de pelícanos en Djoudj, Senegal",
  "okavango": "Canales de agua que serpentean entre islas verdes en el delta del Okavango.",
  "jigokudani": "Monos de las nieves bañándose en aguas termales en el parque de monos de Jigokudani, Japón",
  "wulingyuan": "Altas columnas de arenisca y vegetación verde en Wulingyuan, China",
  "jantar-mantar": "Grandes instrumentos de piedra para estudiar los astros en Jantar Mantar, en Jaipur, India",
  "sagarmatha": "La cima nevada del monte Everest en el Himalaya",
  "tigers-nest": "El monasterio Nido del Tigre, construido en la pared de un acantilado en Bután",
  "komodo": "Un dragón de Komodo en el Parque Nacional de Komodo, Indonesia",
  "phong-nha": "Un río que entra en la cueva Phong Nha, en Vietnam",
  "supertrees": "Estructuras de superárboles en los jardines Gardens by the Bay de Singapur",
  "flaming-cliffs": "Los rojos Acantilados Llameantes en el desierto de Gobi, Mongolia",
  "great-barrier-reef": "Vista aérea del arrecife Arlington en la Gran Barrera de Coral de Australia",
  "waitomo": "Gusanitos luminosos iluminan el techo oscuro de la cueva de Waitomo, en Nueva Zelanda",
  "sigatoka": "Dunas de arena junto a la costa en Sigatoka, Fiyi",
  "jellyfish-lake": "Medusas doradas flotan en el Lago de las Medusas, Palaos",
  "bay-of-fundy": "Formaciones rocosas al descubierto durante la marea baja junto a la bahía de Fundy, Canadá",
  "chichen-itza": "El Castillo, la pirámide escalonada de Chichén Itzá, México",
  "monteverde": "Árboles verdes y neblina en el bosque nuboso de Monteverde, Costa Rica",
  "panama-canal": "Un barco pasa por las esclusas de Miraflores del canal de Panamá",
  "lencois": "Lagunas llenas de agua de lluvia entre dunas de arena clara en Lençóis Maranhenses, Brasil",
  "machu-picchu": "Edificios y terrazas de piedra en la cresta de la montaña de Machu Picchu, Perú",
  "atacama": "Antenas del telescopio ALMA bajo el cielo nocturno del desierto de Atacama, Chile",
  "perito-moreno": "El frente de hielo del glaciar Perito Moreno junto al lago Argentino, Argentina",
  "uyuni": "Montañas y cielo reflejados en el agua poco profunda del salar de Uyuni, Bolivia",
  "blue-hole": "Vista aérea del Gran Agujero Azul, de forma circular, frente a la costa de Belice",
  "tikal": "Antiguos templos mayas de piedra y bosque en Tikal, Guatemala",
  "yellowstone": "La colorida Gran Fuente Prismática en el Parque Nacional de Yellowstone",
  "einstein": "Un retrato del científico Albert Einstein",
  "katherine-johnson": "Katherine Johnson, matemática de la NASA",
  "cousteau": "Jacques Cousteau, explorador del océano",
  "frida-kahlo": "Una fotografía de retrato de la artista Frida Kahlo"
};

;

/* ===== es-places-a.js ===== */
window.MLL_ES_A = [
  {
    "id": "strokkur",
    "name": "Strokkur",
    "country": "Islandia",
    "category": "Naturaleza",
    "lat": 64.3104,
    "lon": -20.3024,
    "hook": "¡Una fuente que funciona con el calor de la Tierra!",
    "facts": [
      "Este géiser lanza agua caliente y vapor al aire cada pocos minutos.",
      "El calor del interior de la Tierra calienta el agua bajo el suelo hasta que sale disparada hacia arriba.",
      "El cercano Geysir dio su nombre a los géiseres de todo el mundo."
    ],
    "stretch": {
      "question": "¿En qué se diferencian un géiser y una fuente de jardín?",
      "answer": "Una fuente de jardín usa una bomba. Un géiser usa el calor bajo el suelo y la presión del vapor."
    },
    "quiz": {
      "question": "¿Qué hace funcionar esta fuente natural?",
      "options": [
        "Una manguera de jardín escondida",
        "El calor del interior de la Tierra",
        "La Luna, que tira del agua hacia arriba"
      ],
      "answer": 1,
      "explain": "La Tierra calienta el agua bajo el suelo. El vapor ayuda a empujar el agua hacia arriba."
    },
    "photoQuery": "Strokkur landscape Wikimedia Commons",
    "wikiTitle": "Strokkur",
    "photoAlt": "Una gran columna de agua sale del géiser Strokkur.",
    "sources": [
      {
        "title": "Visit Iceland: lugares geológicos del sur de Islandia",
        "url": "https://www.visiticeland.com/article/south-icelands-dynamic-geosites-geysers-glaciers/"
      },
      {
        "title": "Visit Iceland: Círculo Dorado",
        "url": "https://www.visiticeland.com/article/the-golden-circle/"
      }
    ]
  },
  {
    "id": "tromso",
    "name": "Tromsø",
    "country": "Noruega",
    "category": "Naturaleza",
    "lat": 69.6492,
    "lon": 18.9553,
    "hook": "¿Y si llegara la hora de dormir antes de que se esconda el Sol?",
    "facts": [
      "Durante una parte del verano, el Sol sigue sobre el horizonte incluso a medianoche.",
      "Durante una parte del invierno, el Sol no sale, pero su luz todavía puede iluminar un poco el cielo.",
      "En noches oscuras y despejadas, a veces brillan auroras boreales sobre esta ciudad del Ártico."
    ],
    "stretch": {
      "question": "Si hubiera luz del Sol a medianoche, ¿ya no necesitarías dormir?",
      "answer": "¡Igual necesitarías dormir! Las cortinas oscuras ayudan a las personas a descansar cuando el cielo sigue claro."
    },
    "quiz": {
      "question": "¿En qué estación puede haber luz del Sol a medianoche en Tromsø?",
      "options": [
        "En verano",
        "Todas las noches del año",
        "Solo en invierno"
      ],
      "answer": 0,
      "explain": "En verano llega el sol de medianoche. En invierno, el cielo es muy diferente."
    },
    "photoQuery": "Tromsø landscape Wikimedia Commons",
    "wikiTitle": "Tromsø",
    "photoAlt": "Tromsø, una ciudad de Noruega rodeada de montañas árticas y agua.",
    "sources": [
      {
        "title": "Visit Tromsø: estaciones del año",
        "url": "https://www.visittromso.no/seasons"
      },
      {
        "title": "Visit Tromsø: invierno",
        "url": "https://www.visittromso.no/winter"
      },
      {
        "title": "Visit Tromsø: auroras boreales",
        "url": "https://www.visittromso.no/look-out-for-northern-lights"
      }
    ]
  },
  {
    "id": "giants-causeway",
    "name": "Calzada del Gigante",
    "country": "Reino Unido",
    "category": "Naturaleza",
    "lat": 55.2408,
    "lon": -6.5116,
    "hook": "La naturaleza hizo un rompecabezas gigante de piedra.",
    "facts": [
      "Unas 40.000 columnas de roca se agrupan en esta costa de Irlanda del Norte.",
      "Muchas columnas tienen seis lados en la parte de arriba, como una figura llamada hexágono.",
      "Se formaron cuando una lava muy antigua se enfrió, se encogió y se agrietó."
    ],
    "stretch": {
      "question": "Una leyenda dice que un gigante construyó estas piedras. ¿Cómo podría un científico poner a prueba otra explicación?",
      "answer": "Puede estudiar la roca y compararla con lava que se enfría hoy. Las pruebas nos ayudan a comprobar las explicaciones."
    },
    "quiz": {
      "question": "¿Qué formó estas columnas de piedra?",
      "options": [
        "Bloques de juguete gigantes",
        "Olas del mar congeladas",
        "Lava que se enfrió"
      ],
      "answer": 2,
      "explain": "La lava se enfrió y se agrietó hasta formar columnas. El gigante es parte de una leyenda."
    },
    "photoQuery": "Giant's Causeway landscape Wikimedia Commons",
    "wikiTitle": "Giant's Causeway",
    "photoAlt": "Columnas de basalto que encajan unas con otras junto al mar en la Calzada del Gigante.",
    "sources": [
      {
        "title": "National Trust: historia de la Calzada del Gigante",
        "url": "https://www.nationaltrust.org.uk/visit/northern-ireland/giants-causeway/history-of-giants-causeway"
      },
      {
        "title": "Servicio Geológico Británico: Calzada del Gigante",
        "url": "https://www.bgs.ac.uk/discovering-geology/maps-and-resources/office-geology/the-giants-causeway-and-causeway-coast/"
      }
    ]
  },
  {
    "id": "mont-saint-michel",
    "name": "Mont-Saint-Michel",
    "country": "Francia",
    "category": "Historia",
    "lat": 48.636,
    "lon": -1.5115,
    "hook": "Una isla que cambia con las mareas.",
    "facts": [
      "Una abadía alta y un pueblo pequeñito están sobre una isla rocosa.",
      "Cuando baja la marea, el mar se retira mucho y deja a la vista una bahía ancha de arena.",
      "Los constructores pusieron la iglesia de la abadía sobre salas de piedra muy fuertes que la sostienen."
    ],
    "stretch": {
      "question": "¿Por qué un edificio alto necesita una base fuerte?",
      "answer": "La base debe sostener todo el peso que tiene encima. Prueba a apilar bloques sobre una base ancha y luego sobre una angosta."
    },
    "quiz": {
      "question": "¿Qué hace cambiar el nivel del agua alrededor de esta isla?",
      "options": [
        "Las mareas del océano",
        "El tapón de una tina gigante",
        "La isla, que está nadando"
      ],
      "answer": 0,
      "explain": "Las mareas hacen que el mar suba y baje alrededor de la isla rocosa."
    },
    "photoQuery": "Mont-Saint-Michel landscape Wikimedia Commons",
    "wikiTitle": "Mont-Saint-Michel",
    "photoAlt": "La abadía y el pueblo de Mont-Saint-Michel se elevan sobre la bahía.",
    "sources": [
      {
        "title": "Turismo de Mont-Saint-Michel: historia",
        "url": "https://www.ot-montsaintmichel.com/en/discover/visit-the-mont-saint-michel/visit-the-mont-saint-michel/history/"
      },
      {
        "title": "Turismo de Mont-Saint-Michel: mareas altas",
        "url": "https://www.ot-montsaintmichel.com/en/discover/our-essentials/the-high-tides-and-the-tidal-bore-a-great-spectacle-of-nature/"
      }
    ]
  },
  {
    "id": "pompeii",
    "name": "Pompeya",
    "country": "Italia",
    "category": "Historia",
    "lat": 40.7508,
    "lon": 14.4869,
    "hook": "Una ciudad con antiguos puestos de comida.",
    "facts": [
      "El volcán Vesubio sepultó esta ciudad romana bajo cenizas y rocas en el año 79.",
      "Aquí, las personas compraban comida preparada en pequeños locales, un poco como la comida para llevar de hoy.",
      "Las paredes pintadas y los mostradores nos ayudan a imaginar cómo era la vida hace casi 2.000 años."
    ],
    "stretch": {
      "question": "¿Qué podría aprender un arqueólogo de un puesto de comida?",
      "answer": "Los restos de comida, las ollas y las imágenes pueden dar pistas sobre lo que comían las personas y cómo vivían."
    },
    "quiz": {
      "question": "¿Qué podías comprar en un antiguo puesto de comida de Pompeya?",
      "options": [
        "Un cargador de celular",
        "Comida preparada",
        "Un casco de bicicleta"
      ],
      "answer": 1,
      "explain": "En los mostradores se vendían comidas y bebidas preparadas mucho antes de los restaurantes de comida para llevar de hoy."
    },
    "photoQuery": "Pompeii landscape Wikimedia Commons",
    "wikiTitle": "Pompeii",
    "photoAlt": "Calles y edificios antiguos de piedra en Pompeya.",
    "sources": [
      {
        "title": "Parque Arqueológico de Pompeya: Antiquarium",
        "url": "https://pompeiisites.org/en/pompeii-map/antiquarium/"
      },
      {
        "title": "Parque Arqueológico de Pompeya: taberna de Asellina",
        "url": "https://pompeiisites.org/en/exhibitions-and-events/asellina-en/"
      },
      {
        "title": "Parque Arqueológico de Pompeya: termopolio",
        "url": "https://pompeiisites.org/en/gallery-pompei-en/thermopolium-of-regio-v/"
      }
    ]
  },
  {
    "id": "sagrada-familia",
    "name": "Sagrada Familia",
    "country": "España",
    "category": "Ingeniería",
    "lat": 41.4036,
    "lon": 2.1744,
    "hook": "Un edificio que crece como un bosque.",
    "facts": [
      "Dentro de esta iglesia de Barcelona, las columnas altas se ramifican como troncos de árboles.",
      "Las ventanas de vidrios de colores convierten la luz del Sol en manchas de color brillantes.",
      "El arquitecto Antoni Gaudí usó formas de la naturaleza para diseñarla."
    ],
    "stretch": {
      "question": "¿Para qué podrían servir unas columnas con ramas?",
      "answer": "Las ramas reparten el peso del techo. Una forma ingeniosa puede ser hermosa y fuerte al mismo tiempo."
    },
    "quiz": {
      "question": "¿A qué se parecen las columnas con ramas?",
      "options": [
        "A troncos de árboles",
        "A tablas de surf",
        "A bolas de nieve"
      ],
      "answer": 0,
      "explain": "Gaudí diseñó columnas parecidas a árboles que ayudan a sostener el peso del edificio."
    },
    "photoQuery": "Sagrada Família landscape Wikimedia Commons",
    "wikiTitle": "Sagrada Família",
    "photoAlt": "Las torres y los detalles de piedra de la Sagrada Familia de Barcelona.",
    "sources": [
      {
        "title": "Sagrada Familia: geometría de las columnas",
        "url": "https://blog.sagradafamilia.org/en/columns-sagrada-familia-geometry-mechanics-materials-stone-forest/"
      },
      {
        "title": "Sagrada Familia: la luz de los vitrales",
        "url": "https://blog.sagradafamilia.org/en/stained-glass-light-colour-creation/"
      }
    ]
  },
  {
    "id": "meteora",
    "name": "Meteora",
    "country": "Grecia",
    "category": "Historia",
    "lat": 39.7217,
    "lon": 21.6306,
    "hook": "Edificios en lo alto de torres gigantes de roca.",
    "facts": [
      "Hay monasterios en la cima de altos pilares de roca.",
      "Un monasterio es un lugar donde vive y reza una comunidad religiosa.",
      "Algunas de estas torres de roca se elevan más de 1.300 pies sobre el suelo."
    ],
    "stretch": {
      "question": "¿Qué sería difícil al construir sobre una roca tan alta?",
      "answer": "Las personas necesitarían formas de subir herramientas y materiales pesados, y un camino seguro para llegar a la cima."
    },
    "quiz": {
      "question": "¿Dónde están los famosos monasterios de Meteora?",
      "options": [
        "Bajo el mar",
        "Dentro de un iceberg",
        "Sobre altos pilares de roca"
      ],
      "answer": 2,
      "explain": "Los constructores pusieron los monasterios en lo alto de pilares naturales de arenisca."
    },
    "photoQuery": "Meteora landscape Wikimedia Commons",
    "wikiTitle": "Meteora",
    "photoAlt": "Un monasterio de Meteora en lo alto de un pilar de arenisca.",
    "sources": [
      {
        "title": "UNESCO: Meteora",
        "url": "https://whc.unesco.org/en/list/455"
      },
      {
        "title": "UNESCO: Geoparque de Meteora Pyli",
        "url": "https://www.unesco.org/en/iggp/meteora-pyli-unesco-global-geopark"
      }
    ]
  },
  {
    "id": "cappadocia",
    "name": "Capadocia",
    "country": "Turquía",
    "category": "Naturaleza",
    "lat": 38.6431,
    "lon": 34.8307,
    "hook": "¡Torres de roca con habitaciones adentro!",
    "facts": [
      "A estas rocas altas y puntiagudas las llaman chimeneas de hadas.",
      "El viento y el agua desgastaron la roca volcánica hasta dar forma a estas torres.",
      "Las personas excavaron habitaciones, iglesias y hasta pueblos subterráneos en la roca."
    ],
    "stretch": {
      "question": "¿Puede el agua cambiar una roca sin romperla de un golpe?",
      "answer": "Sí. El agua que corre puede desgastar la roca poco a poco. Cambios muy pequeños durante muchísimo tiempo pueden crear formas enormes."
    },
    "quiz": {
      "question": "¿Qué ayudó a dar forma a las chimeneas de hadas?",
      "options": [
        "El viento y el agua",
        "Lápices gigantes",
        "Nubes congeladas"
      ],
      "answer": 0,
      "explain": "El viento y el agua desgastaron lentamente la roca volcánica."
    },
    "photoQuery": "Cappadocia landscape Wikimedia Commons",
    "wikiTitle": "Cappadocia",
    "photoAlt": "Rocas puntiagudas y entradas de cuevas en Capadocia.",
    "sources": [
      {
        "title": "UNESCO: Göreme y Capadocia",
        "url": "https://whc.unesco.org/en/list/357"
      }
    ]
  },
  {
    "id": "suomenlinna",
    "name": "Suomenlinna",
    "country": "Finlandia",
    "category": "Historia",
    "lat": 60.1456,
    "lon": 24.9881,
    "hook": "Una fortaleza en el mar, seis islas protegidas por murallas.",
    "facts": [
      "Esta fortaleza marina, cerca de Helsinki, ocupa seis islas protegidas por murallas.",
      "Las personas comenzaron a construirla en 1748, mucho antes de que existieran los carros.",
      "Sus pasadizos oscuros son túneles hechos por personas, no cuevas naturales."
    ],
    "stretch": {
      "question": "¿Cuál es la diferencia entre un túnel y una cueva?",
      "answer": "Una cueva se forma de manera natural. Las personas excavan un túnel para abrir un camino a través de algo."
    },
    "quiz": {
      "question": "¿Quién hizo los túneles de Suomenlinna: las personas o la naturaleza?",
      "options": [
        "Los peces del océano",
        "Solo la naturaleza",
        "Las personas"
      ],
      "answer": 2,
      "explain": "Las personas construyeron los túneles como parte de la fortaleza."
    },
    "photoQuery": "Suomenlinna landscape Wikimedia Commons",
    "wikiTitle": "Suomenlinna",
    "photoAlt": "Murallas de piedra e islas de Suomenlinna en el mar Báltico.",
    "sources": [
      {
        "title": "UNESCO: fortaleza de Suomenlinna",
        "url": "https://whc.unesco.org/en/list/583"
      },
      {
        "title": "Suomenlinna: preguntas frecuentes",
        "url": "https://suomenlinna.fi/en/faq-frequently-asked-questions/"
      }
    ]
  },
  {
    "id": "moscow",
    "name": "Moscú",
    "country": "Rusia",
    "category": "Ideas",
    "lat": 55.7525,
    "lon": 37.6231,
    "hook": "Una ciudad donde nació un juego de bloques famoso en todo el mundo.",
    "facts": [
      "El programador de computadoras Alexey Pajitnov creó Tetris en Moscú en 1984.",
      "Le encantaban los rompecabezas y convirtió ese interés en un juego que se disfruta en todo el mundo.",
      "La catedral de San Basilio está en la Plaza Roja, junto a las antiguas murallas del Kremlin."
    ],
    "stretch": {
      "question": "¿Puede una pequeña idea convertirse en un juego?",
      "answer": "¡Sí! Escoge una regla sencilla, crea una primera versión, pruébala y cambia lo que todavía no funciona."
    },
    "quiz": {
      "question": "¿Qué juego nació en Moscú?",
      "options": [
        "El béisbol",
        "Tetris",
        "Las escondidas"
      ],
      "answer": 1,
      "explain": "Alexey Pajitnov creó la primera versión de Tetris en Moscú en 1984."
    },
    "photoQuery": "Saint Basil's Cathedral landscape Wikimedia Commons",
    "wikiTitle": "Saint Basil's Cathedral",
    "photoAlt": "La catedral de San Basilio en Moscú, con cúpulas de colores y dibujos.",
    "sources": [
      {
        "title": "Tetris: historia oficial",
        "url": "https://tetris.com/news/the-history-of-tetris"
      },
      {
        "title": "Tetris: biografía de Alexey Pajitnov",
        "url": "https://tetris.com/corporate-bios"
      },
      {
        "title": "UNESCO: Kremlin y Plaza Roja",
        "url": "https://whc.unesco.org/en/list/545/"
      }
    ]
  },
  {
    "id": "neuschwanstein",
    "name": "Castillo de Neuschwanstein",
    "country": "Alemania",
    "category": "Ingeniería",
    "lat": 47.5576,
    "lon": 10.7498,
    "hook": "Un castillo de cuento con tecnología escondida.",
    "facts": [
      "El rey Luis Segundo comenzó a construir este castillo en 1869.",
      "Parece medieval, pero tenía agua por tuberías, calefacción central e inodoros con descarga de agua.",
      "Un elevador especial llevaba la comida a los pisos de arriba, para no tener que subir cada plato por las escaleras."
    ],
    "stretch": {
      "question": "¿Puede un edificio que parece antiguo esconder una idea nueva?",
      "answer": "Sí. El aspecto de un edificio por fuera no te cuenta toda la tecnología que tiene por dentro."
    },
    "quiz": {
      "question": "¿Qué llevaba el elevador especial del castillo a los pisos de arriba?",
      "options": [
        "Comida",
        "Ballenas",
        "Nubes"
      ],
      "answer": 0,
      "explain": "Un elevador de comida ayudaba a llevar los platos de un piso a otro."
    },
    "photoQuery": "Neuschwanstein Castle landscape Wikimedia Commons",
    "wikiTitle": "Neuschwanstein Castle",
    "photoAlt": "Las torres claras del castillo de Neuschwanstein sobre colinas cubiertas de árboles.",
    "sources": [
      {
        "title": "Administración de Palacios de Baviera: historia de la construcción",
        "url": "https://www.neuschwanstein.de/englisch/idea/"
      },
      {
        "title": "Administración de Palacios de Baviera: tecnología moderna",
        "url": "https://www.neuschwanstein.de/englisch/palace/interior.htm"
      }
    ]
  },
  {
    "id": "kinderdijk",
    "name": "Kinderdijk",
    "country": "Países Bajos",
    "category": "Ingeniería",
    "lat": 51.8825,
    "lon": 4.6428,
    "hook": "Molinos de viento que ayudan a mantener los pies secos.",
    "facts": [
      "Aquí hay diecinueve molinos de viento históricos junto a los canales.",
      "Estos molinos se construyeron para sacar el agua de los terrenos bajos.",
      "La zona está por debajo del nivel del mar, así que controlar el agua es una tarea muy importante."
    ],
    "stretch": {
      "question": "¿Por qué no dejan que el agua que sobra baje por sí sola?",
      "answer": "El terreno está tan bajo que el agua necesita ayuda para subir y salir. Las bombas y los molinos pueden elevarla."
    },
    "quiz": {
      "question": "¿Qué trabajo hacían estos molinos de viento?",
      "options": [
        "Fabricar nieve",
        "Secar el pelo de las personas",
        "Bombear agua"
      ],
      "answer": 2,
      "explain": "Los molinos movían el agua para ayudar a proteger los terrenos bajos."
    },
    "photoQuery": "Kinderdijk landscape Wikimedia Commons",
    "wikiTitle": "Kinderdijk",
    "photoAlt": "Molinos tradicionales de Kinderdijk reflejados en un canal.",
    "sources": [
      {
        "title": "Kinderdijk: molinos de viento y estaciones de bombeo",
        "url": "https://kinderdijk.nl/en/windmills-pumping-stations/"
      },
      {
        "title": "Kinderdijk: Patrimonio Mundial de la UNESCO",
        "url": "https://kinderdijk.nl/en/"
      }
    ]
  },
  {
    "id": "plitvice",
    "name": "Lagos de Plitvice",
    "country": "Croacia",
    "category": "Naturaleza",
    "lat": 44.8654,
    "lon": 15.582,
    "hook": "Lagos unidos por escalones de agua.",
    "facts": [
      "Dieciséis lagos con nombre están unidos por cascadas en este parque lleno de bosques.",
      "Los minerales del agua forman lentamente barreras naturales de roca llamadas toba calcárea.",
      "Estas barreras ayudan a mantener el agua en los lagos y pueden seguir cambiando con el tiempo."
    ],
    "stretch": {
      "question": "¿Cómo puede el agua que corre ayudar a formar roca?",
      "answer": "El agua lleva pequeños minerales disueltos. Cuando esos minerales se depositan, pueden formar poco a poco una barrera de roca."
    },
    "quiz": {
      "question": "¿Qué une a los lagos?",
      "options": [
        "Vías de tren",
        "Cascadas",
        "Cuerdas"
      ],
      "answer": 1,
      "explain": "El agua pasa de un lago a otro por encima de barreras naturales."
    },
    "photoQuery": "Plitvice Lakes National Park landscape Wikimedia Commons",
    "wikiTitle": "Plitvice Lakes National Park",
    "photoAlt": "Lagos de color turquesa y cascadas entre bosques verdes en Plitvice.",
    "sources": [
      {
        "title": "Parque Nacional de los Lagos de Plitvice: toba calcárea",
        "url": "https://np-plitvicka-jezera.hr/en/natural-and-cultural-heritage/natural-heritage/tufa/"
      },
      {
        "title": "Parque Nacional de los Lagos de Plitvice: todos los lagos",
        "url": "https://np-plitvicka-jezera.hr/en/all-plitvice-lakes/"
      }
    ]
  },
  {
    "id": "giza",
    "name": "Pirámides de Guiza",
    "country": "Egipto",
    "category": "Historia",
    "lat": 29.9792,
    "lon": 31.1342,
    "hook": "Gigantes de piedra construidos hace miles de años.",
    "facts": [
      "La Gran Pirámide se construyó para el rey Keops hace unos 4.500 años.",
      "Las tres grandes pirámides de este lugar se hicieron para Keops, su hijo y su nieto.",
      "Cerca de ellas, la Gran Esfinge tiene cabeza humana y cuerpo de león."
    ],
    "stretch": {
      "question": "¿Por qué una pirámide podría sostenerse mejor que una pirámide puesta al revés?",
      "answer": "Una pirámide tiene una base ancha y una punta angosta. Su peso se apoya sobre una superficie grande."
    },
    "quiz": {
      "question": "¿De qué animal es el cuerpo de la Gran Esfinge?",
      "options": [
        "De un león",
        "De una rana",
        "De un delfín"
      ],
      "answer": 0,
      "explain": "La Esfinge combina una cabeza humana con un cuerpo de león."
    },
    "photoQuery": "Great Pyramid of Giza landscape Wikimedia Commons",
    "wikiTitle": "Great Pyramid of Giza",
    "photoAlt": "La Gran Pirámide de Guiza se eleva sobre una meseta de arena.",
    "sources": [
      {
        "title": "Ministerio de Turismo y Antigüedades de Egipto: meseta de Guiza",
        "url": "https://egymonuments.gov.eg/archaeological-sites/giza-plateau/"
      },
      {
        "title": "Ministerio de Turismo y Antigüedades de Egipto: Gran Esfinge",
        "url": "https://egymonuments.gov.eg/monuments/the-great-sphinx/"
      }
    ]
  },
  {
    "id": "ait-benhaddou",
    "name": "Aït Benhaddou",
    "country": "Marruecos",
    "category": "Historia",
    "lat": 31.047,
    "lon": -7.1319,
    "hook": "Un pueblo construido con tierra.",
    "facts": [
      "Los edificios históricos de este lugar están hechos principalmente de tierra.",
      "Las murallas altas y las torres en las esquinas ayudaban a proteger el pueblo.",
      "Estaba en una antigua ruta de comercio entre el Sahara y la ciudad de Marrakech."
    ],
    "stretch": {
      "question": "¿Por qué los constructores podrían usar materiales que se encuentran cerca?",
      "answer": "Los materiales cercanos pueden ahorrar viajes largos. Los constructores aprenden a usar lo que les ofrece el lugar donde viven."
    },
    "quiz": {
      "question": "¿Cuál es uno de los principales materiales de construcción aquí?",
      "options": [
        "Bloques de hielo",
        "Tierra",
        "Ladrillos de plástico"
      ],
      "answer": 1,
      "explain": "Este pueblo tomó su forma con maneras locales de construir con tierra."
    },
    "photoQuery": "Aït Benhaddou landscape Wikimedia Commons",
    "wikiTitle": "Aït Benhaddou",
    "photoAlt": "Torres y murallas de color tierra en Aït Benhaddou, en la ladera de una colina.",
    "sources": [
      {
        "title": "UNESCO: pueblo fortificado de Ait-Ben-Haddou",
        "url": "https://whc.unesco.org/en/list/444"
      }
    ]
  },
  {
    "id": "petra",
    "name": "Petra",
    "country": "Jordania",
    "category": "Historia",
    "lat": 30.3285,
    "lon": 35.4444,
    "hook": "Una ciudad tallada en roca rosada.",
    "facts": [
      "Los antiguos constructores tallaron grandes fachadas directamente en paredes de arenisca.",
      "Un pasaje angosto entre rocas, llamado Siq, lleva al famoso Tesoro.",
      "El pueblo nabateo construyó canales, represas y túneles para controlar el agua, que era muy valiosa."
    ],
    "stretch": {
      "question": "¿Por qué una ciudad del desierto necesitaría guardar agua y protegerse de las inundaciones?",
      "answer": "Puede faltar agua durante mucho tiempo y luego llegar de golpe con una lluvia fuerte. Un diseño cuidadoso ayuda en las dos situaciones."
    },
    "quiz": {
      "question": "¿Cómo ayudaban las personas de este lugar a controlar el agua?",
      "options": [
        "Con canales y represas",
        "Con esponjas gigantes",
        "Con paredes de hielo"
      ],
      "answer": 0,
      "explain": "Los nabateos construyeron un ingenioso sistema de canales, represas y lugares para guardar agua."
    },
    "photoQuery": "Petra landscape Wikimedia Commons",
    "wikiTitle": "Petra",
    "photoAlt": "La fachada del Tesoro de Petra, tallada en arenisca.",
    "sources": [
      {
        "title": "Autoridad de Desarrollo y Turismo de Petra: sendero principal",
        "url": "https://www.visitpetra.jo/en/Trail/1"
      },
      {
        "title": "Autoridad de Desarrollo y Turismo de Petra: represa y túnel",
        "url": "https://visitpetra.jo/en/Location/101"
      }
    ]
  },
  {
    "id": "amboseli",
    "name": "Amboseli",
    "country": "Kenia",
    "category": "Vida silvestre",
    "lat": -2.6527,
    "lon": 37.2606,
    "hook": "Familias de elefantes al pie de una montaña enorme.",
    "facts": [
      "Grandes manadas de elefantes viven dentro y alrededor de este parque nacional.",
      "Los pantanos y otros humedales aportan agua a un paisaje que también tiene llanuras secas y abiertas.",
      "En días despejados, el monte Kilimanjaro se ve detrás del parque, al otro lado de la frontera, en Tanzania."
    ],
    "stretch": {
      "question": "¿Por qué los animales necesitan lugares fuera de los límites de un parque?",
      "answer": "La comida y el agua pueden estar muy separadas. Cuando sus hábitats están conectados, los animales pueden moverse si cambian las condiciones."
    },
    "quiz": {
      "question": "¿Por cuáles animales es especialmente conocido Amboseli?",
      "options": [
        "Osos polares",
        "Pingüinos",
        "Elefantes"
      ],
      "answer": 2,
      "explain": "Amboseli es famoso por sus grandes manadas de elefantes."
    },
    "photoQuery": "Amboseli National Park landscape Wikimedia Commons",
    "wikiTitle": "Amboseli National Park",
    "photoAlt": "Elefantes en las llanuras de Amboseli con el Kilimanjaro a lo lejos.",
    "sources": [
      {
        "title": "Servicio de Vida Silvestre de Kenia: Parque Nacional de Amboseli",
        "url": "https://kws.go.ke/park/amboseli-national-park/"
      },
      {
        "title": "Servicio de Vida Silvestre de Kenia: seguimiento de los elefantes de Amboseli",
        "url": "https://kws.go.ke/seven-giants-seven-collars-inside-amboselis-elephant-tracking-mission/"
      }
    ]
  },
  {
    "id": "serengeti",
    "name": "Serengeti",
    "country": "Tanzania",
    "category": "Vida silvestre",
    "lat": -2.3333,
    "lon": 34.8333,
    "hook": "Un viaje de animales en manadas enormes.",
    "facts": [
      "Manadas enormes de ñus recorren estas llanuras de pasto en busca de comida y agua.",
      "Las cebras y las gacelas también se unen a la gran migración.",
      "La ruta completa de la migración atraviesa partes de Tanzania y de Kenia."
    ],
    "stretch": {
      "question": "¿Por qué una manada seguiría viajando en vez de quedarse en un lugar?",
      "answer": "El pasto fresco y el agua cambian con las estaciones. Moverse ayuda a los animales a encontrar lo que necesitan."
    },
    "quiz": {
      "question": "¿Por qué viajan las manadas?",
      "options": [
        "Para encontrar pasto y agua",
        "Para alcanzar un tren",
        "Para coleccionar piedras"
      ],
      "answer": 0,
      "explain": "La cantidad de comida y agua disponible cambia con las estaciones."
    },
    "photoQuery": "Serengeti National Park landscape Wikimedia Commons",
    "wikiTitle": "Serengeti National Park",
    "photoAlt": "Ñus y cebras en las llanuras abiertas del Serengeti.",
    "sources": [
      {
        "title": "UNESCO: Parque Nacional del Serengeti",
        "url": "https://whc.unesco.org/en/list/156"
      }
    ]
  },
  {
    "id": "deadvlei",
    "name": "Deadvlei",
    "country": "Namibia",
    "category": "Naturaleza",
    "lat": -24.7617,
    "lon": 15.2922,
    "hook": "Árboles antiguos en un mar de dunas.",
    "facts": [
      "Árboles oscuros y muertos siguen de pie en una planicie de arcilla clara, entre enormes dunas de arena.",
      "Hace mucho tiempo, las dunas crecieron y bloquearon el paso del agua hacia estos árboles llamados acacias de jirafa.",
      "Los troncos de los árboles han seguido de pie durante cientos de años."
    ],
    "stretch": {
      "question": "¿Qué pistas indican que este lugar seco tuvo más agua antes?",
      "answer": "Los árboles necesitan agua para crecer. Sus troncos son pistas de que las condiciones de este lugar cambiaron hace mucho tiempo."
    },
    "quiz": {
      "question": "¿Por qué los árboles dejaron de recibir agua?",
      "options": [
        "Los árboles se fueron caminando",
        "Las dunas bloquearon el agua",
        "Los pingüinos se la tomaron"
      ],
      "answer": 1,
      "explain": "Las dunas se movieron y cortaron el paso del agua, dejando atrás los árboles antiguos."
    },
    "photoQuery": "Deadvlei landscape Wikimedia Commons",
    "wikiTitle": "Deadvlei",
    "photoAlt": "Troncos oscuros sobre una planicie de arcilla blanca, bajo dunas anaranjadas en Deadvlei.",
    "sources": [
      {
        "title": "Namibia Wildlife Resorts: protección de los árboles de Deadvlei",
        "url": "https://www.nwr.com.na/nwr-bemoans-tourist-behaviour-at-deadvlei/"
      },
      {
        "title": "Agencia de Prensa de Namibia: planicie de arcilla de Deadvlei",
        "url": "https://www.nampa.org/text/22909667"
      }
    ]
  },
  {
    "id": "tsingy",
    "name": "Tsingy de Bemaraha",
    "country": "Madagascar",
    "category": "Naturaleza",
    "lat": -18.6667,
    "lon": 44.75,
    "hook": "Un bosque hecho de agujas de piedra.",
    "facts": [
      "Las torres puntiagudas de piedra caliza hacen que este paisaje parezca un bosque de piedra.",
      "La caliza empezó a formarse bajo el mar, antes de que la tierra se elevara y el agua la desgastara.",
      "Los bosques de árboles cercanos dan refugio a lémures y a muchas clases de aves."
    ],
    "stretch": {
      "question": "¿Cómo pudo una roca que hoy está lejos de la costa haber estado bajo el mar?",
      "answer": "La Tierra cambia a lo largo de muchísimo tiempo. El terreno puede subir y el nivel del mar puede bajar."
    },
    "quiz": {
      "question": "¿De qué están hechas las torres puntiagudas?",
      "options": [
        "De piedra caliza",
        "De helado",
        "De madera"
      ],
      "answer": 0,
      "explain": "Estas torres son de piedra caliza. Los procesos de la naturaleza les dieron forma durante muchísimo tiempo."
    },
    "photoQuery": "Tsingy de Bemaraha National Park landscape Wikimedia Commons",
    "wikiTitle": "Tsingy de Bemaraha National Park",
    "photoAlt": "Un laberinto de picos de piedra caliza en Tsingy de Bemaraha.",
    "sources": [
      {
        "title": "Observatorio de la Tierra de la NASA: Tsingy de Bemaraha",
        "url": "https://science.nasa.gov/earth/earth-observatory/tsingy-de-bemaraha-national-park-madagascar-41407/"
      },
      {
        "title": "UNESCO: bosques secos de Andrefana, que incluyen Tsingy de Bemaraha",
        "url": "https://whc.unesco.org/en/list/494"
      }
    ]
  },
  {
    "id": "boulders",
    "name": "Playa Boulders",
    "country": "Sudáfrica",
    "category": "Vida silvestre",
    "lat": -34.1975,
    "lon": 18.4514,
    "hook": "¡Pingüinos en una playa de arena!",
    "facts": [
      "Los pingüinos africanos viven en esta costa rocosa cerca de Ciudad del Cabo.",
      "Estos pingüinos no necesitan el hielo de la Antártida para tener un hogar.",
      "Sus llamadas fuertes pueden sonar un poco como el rebuzno de un burro."
    ],
    "stretch": {
      "question": "¿Todos los pingüinos viven en lugares con nieve?",
      "answer": "No. Las distintas especies de pingüinos viven en lugares diferentes. Los pingüinos africanos hacen sus nidos en la costa del sur de África."
    },
    "quiz": {
      "question": "¿Qué aves viven en la playa Boulders?",
      "options": [
        "Emúes",
        "Pingüinos africanos",
        "Águilas calvas"
      ],
      "answer": 1,
      "explain": "Boulders es el hogar de una colonia protegida de pingüinos africanos."
    },
    "photoQuery": "Boulders Beach landscape Wikimedia Commons",
    "wikiTitle": "Boulders Beach",
    "photoAlt": "Pingüinos africanos en la arena, entre grandes rocas en Boulders.",
    "sources": [
      {
        "title": "SANParks: colonia de pingüinos de Boulders",
        "url": "https://www.sanparks.org/parks/table-mountain/what-to-do/attractions/boulders-penguin-colony"
      },
      {
        "title": "Turismo de Ciudad del Cabo: playa Boulders",
        "url": "https://www.capetown.travel/listing/boulders-beach/"
      }
    ]
  },
  {
    "id": "lalibela",
    "name": "Lalibela",
    "country": "Etiopía",
    "category": "Ingeniería",
    "lat": 12.0317,
    "lon": 39.0411,
    "hook": "Los constructores tallaron hacia abajo, dentro del suelo.",
    "facts": [
      "Once famosas iglesias de este lugar fueron talladas en roca.",
      "Los constructores quitaron piedra para hacer puertas, ventanas, habitaciones y pilares.",
      "Zanjas y túneles conectan distintas partes de este lugar asombroso."
    ],
    "stretch": {
      "question": "¿En qué se diferencia tallar un edificio de apilar bloques?",
      "answer": "Al apilar, agregas piezas. Al tallar, quitas material. Por eso los constructores deben decidir con cuidado qué roca dejar en su lugar."
    },
    "quiz": {
      "question": "¿Cómo se hicieron estas iglesias?",
      "options": [
        "Apilando nieve",
        "Haciendo crecer árboles",
        "Tallando la roca"
      ],
      "answer": 2,
      "explain": "Los constructores dieron forma a la roca sólida para crear iglesias, incluso sus habitaciones interiores."
    },
    "photoQuery": "Church of Saint George, Lalibela landscape Wikimedia Commons",
    "wikiTitle": "Church of Saint George, Lalibela",
    "photoAlt": "La iglesia de San Jorge, con forma de cruz, tallada en roca en Lalibela.",
    "sources": [
      {
        "title": "UNESCO: iglesias talladas en roca de Lalibela",
        "url": "https://whc.unesco.org/en/list/18"
      },
      {
        "title": "Fondo Mundial de Monumentos: iglesias talladas en roca",
        "url": "https://www.wmf.org/projects/rock-hewn-churches"
      }
    ]
  },
  {
    "id": "rwanda-volcanoes",
    "name": "Parque Nacional de los Volcanes",
    "country": "Ruanda",
    "category": "Vida silvestre",
    "lat": -1.4833,
    "lon": 29.5,
    "hook": "Conoce a los gorilas en un bosque de montaña.",
    "facts": [
      "Los gorilas de montaña viven en los bosques de estas laderas volcánicas.",
      "El parque también protege a los monos dorados y los bosques de bambú.",
      "Los gorilas viven en grupos familiares, y los investigadores los estudian para ayudar a protegerlos."
    ],
    "stretch": {
      "question": "¿Por qué proteger todo un bosque en vez de un solo animal?",
      "answer": "Los animales necesitan comida, espacio y refugio. Proteger su hábitat ayuda a muchos seres vivos al mismo tiempo."
    },
    "quiz": {
      "question": "¿Qué grandes simios viven aquí?",
      "options": [
        "Gorilas de montaña",
        "Orangutanes",
        "Gibones"
      ],
      "answer": 0,
      "explain": "Estos bosques son el hogar de gorilas de montaña, que están en peligro de extinción."
    },
    "photoQuery": "Volcanoes National Park landscape Wikimedia Commons",
    "wikiTitle": "Volcanoes National Park",
    "photoAlt": "Un gorila de montaña en los bosques verdes del Parque Nacional de los Volcanes de Ruanda.",
    "sources": [
      {
        "title": "Junta de Desarrollo de Ruanda: Parque Nacional de los Volcanes",
        "url": "https://visitrwanda.com/destinations/volcanoes-national-park/"
      },
      {
        "title": "Junta de Desarrollo de Ruanda: grupos de gorilas",
        "url": "https://visitrwanda.com/come-visit-the-gorillas/"
      }
    ]
  },
  {
    "id": "djoudj",
    "name": "Santuario de Aves de Djoudj",
    "country": "Senegal",
    "category": "Vida silvestre",
    "lat": 16.3833,
    "lon": -16.2333,
    "hook": "Una parada con agua para viajeros con alas.",
    "facts": [
      "Muchas aves migratorias se detienen aquí después de cruzar el desierto del Sahara.",
      "Los lagos, arroyos y humedales les dan lugares para descansar y alimentarse.",
      "Entre las aves que se encuentran aquí hay pelícanos, flamencos y espátulas."
    ],
    "stretch": {
      "question": "¿Por qué es importante un humedal después de cruzar un desierto?",
      "answer": "Un vuelo largo consume energía. El agua y la comida ayudan a las aves a recuperarse antes de continuar su viaje."
    },
    "quiz": {
      "question": "¿Por qué se detienen aquí las aves migratorias?",
      "options": [
        "Para comprar boletos de avión",
        "Para descansar y alimentarse",
        "Para hacer muñecos de nieve"
      ],
      "answer": 1,
      "explain": "Estos humedales son un lugar importante para comer y descansar durante los largos viajes de las aves."
    },
    "photoQuery": "Djoudj National Bird Sanctuary landscape Wikimedia Commons",
    "wikiTitle": "Djoudj National Bird Sanctuary",
    "photoAlt": "Pelícanos reunidos en los humedales del Santuario de Aves de Djoudj.",
    "sources": [
      {
        "title": "UNESCO: Santuario Nacional de Aves de Djoudj",
        "url": "https://whc.unesco.org/en/list/25"
      },
      {
        "title": "UNESCO: protección de Djoudj",
        "url": "https://whc.unesco.org/en/activities/981"
      }
    ]
  },
  {
    "id": "okavango",
    "name": "Delta del Okavango",
    "country": "Botsuana",
    "category": "Naturaleza",
    "lat": -19.2833,
    "lon": 22.9,
    "hook": "Un río que se extiende por el desierto.",
    "facts": [
      "El río Okavango se extiende por los humedales de este lugar en vez de desembocar en el océano.",
      "Su inundación de temporada llega durante la estación seca de Botsuana.",
      "Los elefantes y las cebras usan este hogar lleno de agua entre las tierras secas del Kalahari."
    ],
    "stretch": {
      "question": "¿Cómo puede inundarse un lugar durante la estación seca?",
      "answer": "La lluvia puede caer muy lejos. El río lleva esa agua en un largo viaje antes de que llegue al delta."
    },
    "quiz": {
      "question": "¿Por dónde se extiende el río aquí?",
      "options": [
        "Por humedales del desierto",
        "Dentro de un volcán",
        "Sobre la Luna"
      ],
      "answer": 0,
      "explain": "Este es un delta interior. Su agua se extiende por la tierra y no tiene salida al océano."
    },
    "photoQuery": "Okavango Delta landscape Wikimedia Commons",
    "wikiTitle": "Okavango Delta",
    "photoAlt": "Canales de agua entre islas verdes en el delta del Okavango.",
    "sources": [
      {
        "title": "UNESCO: delta del Okavango",
        "url": "https://whc.unesco.org/en/list/1432/"
      }
    ]
  }
];

;

/* ===== es-places-b.js ===== */
/* 25 descubrimientos: traducción al español latinoamericano. */
window.MLL_ES_B = [
  {
    "id": "jigokudani",
    "name": "El valle de los monos de nieve",
    "country": "Japón",
    "category": "Animales",
    "lat": 36.7327,
    "lon": 138.4622,
    "hook": "¡Los monos se dan un baño calentito en invierno!",
    "facts": [
      "Los monos de nieve de este lugar son macacos japoneses. Viven libres en un valle de montaña.",
      "Cuando hace frío, algunos monos se calientan metiéndose en aguas termales.",
      "Estos monos se mueven con libertad. El parque es un lugar para observarlos, no un zoológico lleno de jaulas."
    ],
    "stretch": {
      "question": "¿Los monos de nieve son un tipo especial de animal de la nieve?",
      "answer": "Mono de nieve es un apodo del macaco japonés. ¡Estos mismos monos siguen viviendo aquí cuando la nieve se derrite!"
    },
    "quiz": {
      "question": "¿Qué usan algunos monos de nieve para calentarse?",
      "options": [
        "Aguas termales",
        "Olas del mar",
        "Dunas de arena"
      ],
      "answer": 0,
      "explain": "Cuando hace frío, algunos monos se sientan en el agua caliente de las fuentes termales."
    },
    "photoQuery": "Jigokudani Japanese macaques snow hot spring",
    "wikiTitle": "Jigokudani Monkey Park",
    "photoAlt": "Macacos japoneses en el parque de monos de Jigokudani, en Japón",
    "sources": [
      {
        "title": "Organización Nacional de Turismo de Japón: la vida silvestre de Jigokudani",
        "url": "https://www.japan.travel/national-parks/wildlife/mammals/jigokudani-yaen-koen/"
      },
      {
        "title": "Organización Nacional de Turismo de Japón: observa a los monos de nieve bañándose",
        "url": "https://www.japan.travel/national-parks/parks/joshinetsukogen/see-and-do/see-the-bathing-snow-monkeys/"
      }
    ]
  },
  {
    "id": "wulingyuan",
    "name": "Las torres de piedra de Wulingyuan",
    "country": "China",
    "category": "Naturaleza",
    "lat": 29.3444,
    "lon": 110.4817,
    "hook": "Un bosque hecho de torres de roca gigantes.",
    "facts": [
      "Más de 3.000 columnas delgadas de roca y picos se elevan en este paisaje verde.",
      "Muchas torres miden más de 650 pies de altura. Están hechas de una roca llamada arenisca, no de bloques apilados.",
      "Entre las torres hay arroyos, cascadas, cuevas y puentes naturales de piedra."
    ],
    "stretch": {
      "question": "¿Todos los bosques tienen que estar hechos de árboles?",
      "answer": "Bosque de piedra es un apodo. Estas son columnas de roca, con árboles de verdad que crecen alrededor y encima de ellas."
    },
    "quiz": {
      "question": "¿De qué están hechas las altas torres naturales de Wulingyuan?",
      "options": [
        "Hielo",
        "Arenisca",
        "Madera"
      ],
      "answer": 1,
      "explain": "Las torres son enormes columnas naturales de arenisca."
    },
    "photoQuery": "Wulingyuan sandstone pillars landscape",
    "wikiTitle": "Wulingyuan",
    "photoAlt": "Altas columnas de arenisca y plantas verdes en Wulingyuan, China",
    "sources": [
      {
        "title": "UNESCO: Wulingyuan",
        "url": "https://whc.unesco.org/en/list/640"
      }
    ]
  },
  {
    "id": "jantar-mantar",
    "name": "El reloj de sol gigante de Jaipur",
    "country": "India",
    "category": "Ciencia",
    "lat": 26.9248,
    "lon": 75.8246,
    "hook": "Descubre la hora con una sombra gigante.",
    "facts": [
      "Jantar Mantar es un centro científico al aire libre construido hace unos 300 años.",
      "Su reloj de sol gigante indica la hora usando una sombra que produce la luz del Sol.",
      "Otros enormes instrumentos de piedra ayudaban a las personas a seguir al Sol, las estrellas y los planetas sin usar un telescopio."
    ],
    "stretch": {
      "question": "¿Un reloj de sol funcionaría igual a medianoche?",
      "answer": "No. Un reloj de sol necesita la luz del Sol para crear la sombra que permite leer la hora."
    },
    "quiz": {
      "question": "¿Qué usa el reloj de sol gigante para mostrar la hora?",
      "options": [
        "Una pila",
        "Agua que corre",
        "Una sombra"
      ],
      "answer": 2,
      "explain": "La luz del Sol crea una sombra que se mueve sobre unas marcas a lo largo del día."
    },
    "photoQuery": "Jantar Mantar Jaipur Samrat Yantra sundial",
    "wikiTitle": "Jantar Mantar, Jaipur",
    "photoAlt": "Grandes instrumentos de piedra para estudiar el cielo en Jantar Mantar, en Jaipur, India",
    "sources": [
      {
        "title": "UNESCO: Jantar Mantar, Jaipur",
        "url": "https://whc.unesco.org/en/list/1338"
      },
      {
        "title": "Incredible India: Jantar Mantar",
        "url": "https://www.incredibleindia.gov.in/en/rajasthan/jaipur/jantar-mantar"
      }
    ]
  },
  {
    "id": "sagarmatha",
    "name": "El mundo de montañas del Everest",
    "country": "Nepal",
    "category": "Naturaleza",
    "lat": 27.9881,
    "lon": 86.925,
    "hook": "Mira hacia la cima más alta de la Tierra.",
    "facts": [
      "El monte Everest está en la frontera entre Nepal y China. Su cima está más alta sobre el nivel del mar que la de cualquier otra montaña.",
      "Del lado de Nepal, el parque nacional de Sagarmatha protege glaciares, valles profundos y cimas nevadas.",
      "Los leopardos de las nieves y los pandas rojos están entre los animales poco comunes que viven en este parque."
    ],
    "stretch": {
      "question": "¿Qué significa estar más alto sobre el nivel del mar?",
      "answer": "Para comparar alturas, los científicos usan el mismo punto de partida: el nivel del mar. La cima del Everest es la que llega más arriba de ese nivel."
    },
    "quiz": {
      "question": "¿Qué felino poco común vive en el parque nacional de Sagarmatha?",
      "options": [
        "Leopardo de las nieves",
        "León",
        "Guepardo"
      ],
      "answer": 0,
      "explain": "Los leopardos de las nieves viven en este parque de alta montaña."
    },
    "photoQuery": "Mount Everest Nepal mountain landscape",
    "wikiTitle": "Mount Everest",
    "photoAlt": "La cima nevada del monte Everest en el Himalaya",
    "sources": [
      {
        "title": "UNESCO: parque nacional de Sagarmatha",
        "url": "https://whc.unesco.org/en/list/120"
      },
      {
        "title": "Parque nacional de Sagarmatha, Nepal",
        "url": "https://snp.gov.np/about-us"
      }
    ]
  },
  {
    "id": "tigers-nest",
    "name": "El Nido del Tigre",
    "country": "Bután",
    "category": "Historia",
    "lat": 27.4919,
    "lon": 89.3635,
    "hook": "Un edificio de verdad se abraza a un acantilado.",
    "facts": [
      "El Nido del Tigre es un monasterio llamado Paro Taktsang. Está junto a la pared de un acantilado muy empinado.",
      "Los edificios están unos 3.000 pies por encima del valle que queda abajo.",
      "El sendero sube por un bosque de pinos, con banderas de oración de muchos colores a lo largo del camino."
    ],
    "stretch": {
      "question": "¿Qué podría ser difícil al construir en un acantilado?",
      "answer": "Piensa como alguien que construye: hace falta llevar los materiales cuesta arriba y crear apoyos resistentes. ¿Qué planearías primero?"
    },
    "quiz": {
      "question": "¿Dónde se construyó el Nido del Tigre?",
      "options": [
        "En una playa de arena",
        "Junto a la pared de un acantilado de montaña",
        "En una isla flotante"
      ],
      "answer": 1,
      "explain": "Los edificios del monasterio se apoyan junto a la pared de un acantilado muy empinado."
    },
    "photoQuery": "Paro Taktsang Tiger's Nest monastery cliff",
    "wikiTitle": "Paro Taktsang",
    "photoAlt": "El monasterio del Nido del Tigre construido junto a un acantilado en Bután",
    "sources": [
      {
        "title": "Departamento de Turismo de Bután: una visita familiar al Nido del Tigre",
        "url": "https://bhutan.travel/journal/editorial/bhutan-is-family-friendly"
      },
      {
        "title": "Departamento de Turismo de Bután: un cuento de invierno",
        "url": "https://bhutan.travel/journal/editorial/a-winter-s-tale"
      }
    ]
  },
  {
    "id": "komodo",
    "name": "Las islas del dragón de Komodo",
    "country": "Indonesia",
    "category": "Animales",
    "lat": -8.5433,
    "lon": 119.4894,
    "hook": "Conoce a un dragón real que no lanza fuego.",
    "facts": [
      "Los dragones de Komodo son animales de verdad: son los lagartos más grandes que existen hoy.",
      "Un dragón grande puede medir unos diez pies de largo. ¡Eso es más que la altura de la mayoría de los adultos!",
      "Este parque protege varias islas y el mar que las rodea, donde hay arrecifes de coral y tortugas marinas."
    ],
    "stretch": {
      "question": "¿Por qué también se protege el agua que rodea una isla?",
      "answer": "En un parque de islas no solo hay animales terrestres. Las tortugas marinas, los peces y los corales también necesitan un hogar protegido."
    },
    "quiz": {
      "question": "¿Qué tipo de animal es un dragón de Komodo?",
      "options": [
        "Un ave",
        "Un dinosaurio",
        "Un lagarto"
      ],
      "answer": 2,
      "explain": "Los dragones de Komodo son enormes lagartos que viven hoy. Su nombre no significa que lancen fuego."
    },
    "photoQuery": "Komodo National Park Komodo dragon",
    "wikiTitle": "Komodo National Park",
    "photoAlt": "Un dragón de Komodo en el parque nacional de Komodo, en Indonesia",
    "sources": [
      {
        "title": "UNESCO: parque nacional de Komodo",
        "url": "https://whc.unesco.org/en/list/609/"
      }
    ]
  },
  {
    "id": "phong-nha",
    "name": "Las cuevas escondidas de Phong Nha",
    "country": "Vietnam",
    "category": "Naturaleza",
    "lat": 17.59,
    "lon": 106.2833,
    "hook": "Los ríos tienen caminos secretos bajo tierra.",
    "facts": [
      "Phong Nha-Ke Bang tiene una enorme red de cuevas escondidas en roca caliza.",
      "Algunos ríos fluyen bajo tierra por las cuevas en vez de quedarse al aire libre, bajo el Sol.",
      "Sobre este mundo escondido crecen bosques. El parque protege a los animales que viven tanto encima como debajo del suelo."
    ],
    "stretch": {
      "question": "¿Puede un río estar escondido de alguien que camina por encima?",
      "answer": "Sí. Un río puede fluir por una cueva subterránea mientras un bosque crece en la tierra que está encima."
    },
    "quiz": {
      "question": "¿Por dónde fluyen algunos ríos de Phong Nha?",
      "options": [
        "Por cuevas subterráneas",
        "Por la Luna",
        "Hacia arriba, entre las nubes"
      ],
      "answer": 0,
      "explain": "Algunos ríos recorren los pasadizos de las cuevas bajo tierra."
    },
    "photoQuery": "Phong Nha cave river entrance Vietnam",
    "wikiTitle": "Phong Nha Cave",
    "photoAlt": "Un río que entra en la cueva de Phong Nha, en Vietnam",
    "sources": [
      {
        "title": "UNESCO: Phong Nha-Ke Bang y Hin Nam No",
        "url": "https://whc.unesco.org/en/list/951/"
      }
    ]
  },
  {
    "id": "supertrees",
    "name": "Los superárboles de Singapur",
    "country": "Singapur",
    "category": "Ingeniería",
    "lat": 1.2816,
    "lon": 103.8636,
    "hook": "Torres de jardín gigantes ayudan a encender sus propias luces.",
    "facts": [
      "Los superárboles de Gardens by the Bay son estructuras construidas por personas con forma de árboles gigantes.",
      "Plantas de verdad crecen por sus lados y convierten las torres en jardines muy altos.",
      "Algunos superárboles recogen energía de la luz del Sol para ayudar a iluminar los jardines por la noche."
    ],
    "stretch": {
      "question": "¿Puede un invento hacer dos trabajos útiles?",
      "answer": "¡Sí! Un superárbol puede sostener un jardín y recoger energía solar al mismo tiempo. ¿Qué dos trabajos haría tu invento?"
    },
    "quiz": {
      "question": "¿De dónde obtienen algunos superárboles la energía para sus luces?",
      "options": [
        "De manivelas que se giran",
        "De la luz del Sol",
        "De las hojas que caen"
      ],
      "answer": 1,
      "explain": "Las celdas solares recogen energía del Sol."
    },
    "photoQuery": "Gardens by the Bay Supertree Grove Singapore",
    "wikiTitle": "Gardens by the Bay",
    "photoAlt": "Estructuras de superárboles con jardines en Gardens by the Bay, en Singapur",
    "sources": [
      {
        "title": "Gardens by the Bay: acciones para cuidar el ambiente",
        "url": "https://www.gardensbythebay.com.sg/en/about-us/our-gardens-story/sustainability-efforts.html"
      },
      {
        "title": "Oficina de Turismo de Singapur: Gardens by the Bay",
        "url": "https://www.visitsingapore.com/neighbourhood/featured-neighbourhood/marina-bay/gardens-by-the-bay/"
      }
    ]
  },
  {
    "id": "flaming-cliffs",
    "name": "Los acantilados de los dinosaurios",
    "country": "Mongolia",
    "category": "Historia",
    "lat": 44.14,
    "lon": 103.727,
    "hook": "Había huevos de dinosaurio escondidos en el desierto.",
    "facts": [
      "Los Acantilados Llameantes son paredes de roca roja en el desierto del Gobi, en Mongolia. ¡No están ardiendo de verdad!",
      "En la década de 1920, los buscadores de fósiles encontraron aquí nidos con huevos de dinosaurio.",
      "Entre los fósiles de este desierto hay dinosaurios, mamíferos antiguos y lagartos: todo un mundo de hace muchísimo tiempo."
    ],
    "stretch": {
      "question": "¿Qué nos puede enseñar un nido de huevos fósiles?",
      "answer": "Es una prueba de que los dinosaurios ponían huevos. Un nido fósil da a los científicos pistas sobre cómo los dinosaurios criaban a sus pequeños."
    },
    "quiz": {
      "question": "¿Qué fósiles sorprendentes se encontraron en los Acantilados Llameantes?",
      "options": [
        "Aletas de ballena",
        "Hojas de palmera",
        "Huevos de dinosaurio"
      ],
      "answer": 2,
      "explain": "Los científicos encontraron huevos fósiles de dinosaurio agrupados en nidos."
    },
    "photoQuery": "Flaming Cliffs Bayanzag Mongolia",
    "wikiTitle": "Flaming Cliffs",
    "photoAlt": "Los Acantilados Llameantes de roca roja en el desierto del Gobi, en Mongolia",
    "sources": [
      {
        "title": "Museo Americano de Historia Natural: huevos de dinosaurio",
        "url": "https://www.amnh.org/dinosaurs/dinosaur-eggs"
      },
      {
        "title": "Museo Americano de Historia Natural: búsqueda de fósiles en el Gobi",
        "url": "https://www.amnh.org/explore/videos/shelf-life/fossil-hunting-gobi-360"
      }
    ]
  },
  {
    "id": "great-barrier-reef",
    "name": "La Gran Barrera de Coral",
    "country": "Australia",
    "category": "Animales",
    "lat": -18.2861,
    "lon": 147.7,
    "hook": "Un enorme vecindario marino construido por animales diminutos.",
    "facts": [
      "Los corales son animales. Muchos animales de coral diminutos viven juntos y construyen esqueletos duros que ayudan a formar un arrecife.",
      "La Gran Barrera de Coral incluye miles de arrecifes separados a lo largo de la costa de Australia.",
      "En las aguas de este arrecife se pueden encontrar seis de las siete especies de tortugas marinas del mundo."
    ],
    "stretch": {
      "question": "¿Puede algo diminuto construir algo enorme?",
      "answer": "Sí. Muchas generaciones de pequeños animales de coral construyen esqueletos duros. Juntos, esos esqueletos ayudan a formar un gran arrecife."
    },
    "quiz": {
      "question": "¿Qué son los corales vivos?",
      "options": [
        "Animales",
        "Solo rocas",
        "Algas marinas"
      ],
      "answer": 0,
      "explain": "Los corales son animales, aunque muchos se quedan en un solo lugar y construyen un esqueleto duro."
    },
    "photoQuery": "Great Barrier Reef coral aerial Australia",
    "wikiTitle": "Great Barrier Reef",
    "photoAlt": "Vista desde el aire de la Gran Barrera de Coral, frente a la costa de Australia",
    "sources": [
      {
        "title": "Autoridad del Parque Marino de la Gran Barrera de Coral: corales",
        "url": "https://www.gbrmpa.gov.au/learn/coral"
      },
      {
        "title": "Autoridad del Parque Marino de la Gran Barrera de Coral: biodiversidad",
        "url": "https://www.gbrmpa.gov.au/learn/biodiversity"
      },
      {
        "title": "Autoridad del Parque Marino de la Gran Barrera de Coral: animales",
        "url": "https://www.gbrmpa.gov.au/learn/animals"
      }
    ]
  },
  {
    "id": "waitomo",
    "name": "Las cuevas luminosas de Waitomo",
    "country": "Nueva Zelanda",
    "category": "Animales",
    "lat": -38.2608,
    "lon": 175.103,
    "hook": "Un techo bajo tierra que parece lleno de estrellas.",
    "facts": [
      "Unos animales diminutos que brillan crean puntitos de luz en los techos oscuros de las cuevas de Waitomo.",
      "Los llaman gusanos luminosos, pero son crías de moscas, llamadas larvas. ¡No son gusanos!",
      "Cuelgan hilos pegajosos y usan su luz para atraer pequeños insectos hacia esos hilos."
    ],
    "stretch": {
      "question": "¿Para qué puede servir una luz en una cueva oscura?",
      "answer": "Para estos animales luminosos, la luz sirve para atraer insectos. Los pequeños insectos voladores se acercan a ella y pueden quedar atrapados en los hilos pegajosos."
    },
    "quiz": {
      "question": "¿Qué hace brillar el techo de las cuevas de Waitomo?",
      "options": [
        "Estrellas diminutas",
        "Animales llamados gusanos luminosos",
        "Rocas pintadas"
      ],
      "answer": 1,
      "explain": "Los llamados gusanos luminosos producen su propia luz. Esos puntitos son seres vivos, no estrellas."
    },
    "photoQuery": "Waitomo Glowworm Cave glowing ceiling",
    "wikiTitle": "Waitomo Glowworm Cave",
    "photoAlt": "El paisaje de la cueva de los gusanos luminosos de Waitomo, en Nueva Zelanda",
    "sources": [
      {
        "title": "Discover Waitomo: cuevas de los gusanos luminosos",
        "url": "https://www.waitomo.com/glowworms-and-caves/waitomo-glowworm-caves"
      },
      {
        "title": "Scientific Reports: los hilos de pesca de los gusanos luminosos",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6395680/"
      }
    ]
  },
  {
    "id": "sigatoka",
    "name": "Las dunas de arena de Sigatoka",
    "country": "Fiyi",
    "category": "Historia",
    "lat": -18.1667,
    "lon": 177.485,
    "hook": "El viento descubre pistas de hace mucho tiempo.",
    "facts": [
      "Estas altas dunas de arena están junto al mar, en la isla de Viti Levu, en Fiyi.",
      "El agua del río, las corrientes marinas y el viento ayudaron a juntar la arena y darle forma.",
      "Las vasijas antiguas y las herramientas de piedra halladas en las dunas ayudan a los científicos a conocer a las personas que vivieron aquí hace mucho tiempo."
    ],
    "stretch": {
      "question": "¿Cómo puede una vasija rota servirle a un científico?",
      "answer": "Su forma, su material y sus dibujos dan pistas sobre las personas que la hicieron y la usaron. Las cosas rotas también pueden contar historias."
    },
    "quiz": {
      "question": "¿Qué se ha encontrado bajo la arena en Sigatoka?",
      "options": [
        "Una nave espacial",
        "Pingüinos congelados",
        "Vasijas y herramientas antiguas"
      ],
      "answer": 2,
      "explain": "Los arqueólogos estudian las vasijas y herramientas de piedra descubiertas en las dunas."
    },
    "photoQuery": "Sigatoka Sand Dunes Fiji coastline",
    "wikiTitle": "Sigatoka Sand Dunes",
    "photoAlt": "Dunas de arena junto a la costa de Sigatoka, en Fiyi",
    "sources": [
      {
        "title": "Fundación Nacional de Fiyi: dunas de arena de Sigatoka",
        "url": "https://nationaltrust.org.fj/ssd/"
      },
      {
        "title": "Turismo de Fiyi: dunas de arena de la Costa de Coral",
        "url": "https://www.fiji.travel/places-to-go/coral-coast/locations/coral-coast-sand-dunes"
      }
    ]
  },
  {
    "id": "jellyfish-lake",
    "name": "El lago de las Medusas",
    "country": "Palaos",
    "category": "Animales",
    "lat": 7.1611,
    "lon": 134.3767,
    "hook": "Las medusas doradas siguen la luz del Sol.",
    "facts": [
      "Este lago en una isla contiene agua salada del mar y un tipo especial de medusa dorada.",
      "Dentro de las medusas viven algas diminutas que comparten el alimento que producen usando la luz del Sol.",
      "En los días soleados, las medusas se desplazan por el lago y ayudan a sus algas a recibir suficiente luz."
    ],
    "stretch": {
      "question": "¿Pueden ayudarse dos seres vivos diferentes?",
      "answer": "Sí. Estas algas tienen un hogar dentro de las medusas. Las medusas reciben parte del alimento de las algas. Los científicos llaman simbiosis a esta relación."
    },
    "quiz": {
      "question": "¿Por qué la luz del Sol ayuda a las medusas doradas?",
      "options": [
        "Sus algas la usan para producir alimento",
        "Las convierte en peces",
        "Hace que el lago se congele"
      ],
      "answer": 0,
      "explain": "Las algas que viven dentro de las medusas usan la luz del Sol y comparten parte del alimento que producen."
    },
    "photoQuery": "Jellyfish Lake Palau golden jellyfish",
    "wikiTitle": "Jellyfish Lake",
    "photoAlt": "Medusas doradas en el lago de las Medusas, en Palaos",
    "sources": [
      {
        "title": "Fundación para la Investigación de los Arrecifes de Coral: lago de las Medusas",
        "url": "https://coralreefpalau.org/research/marine-lakes/jellyfish-lake/"
      },
      {
        "title": "Fundación para la Investigación de los Arrecifes de Coral: estado del lago",
        "url": "https://coralreefpalau.org/research/marine-lakes/jellyfish-lake-conditions-and-forecast/"
      }
    ]
  },
  {
    "id": "bay-of-fundy",
    "name": "Las mareas gigantes de la bahía de Fundy",
    "country": "Canadá",
    "category": "Naturaleza",
    "lat": 45.6145,
    "lon": -64.9837,
    "hook": "El mar sube más que la altura de una casa.",
    "facts": [
      "La bahía de Fundy tiene algunos de los mayores cambios del mundo entre la marea baja y la marea alta.",
      "Cerca del parque nacional de Fundy, el agua puede subir unos 40 pies o más entre la marea baja y la marea alta.",
      "Cuando baja la marea, queda al descubierto una enorme parte del fondo del mar. Más tarde, el agua la cubre otra vez."
    ],
    "stretch": {
      "question": "¿Desaparece el fondo del mar cuando sube la marea?",
      "answer": "No. El suelo sigue ahí. Lo que cambia es el nivel del agua: la marea alta cubre el fondo del mar y la marea baja lo deja al descubierto."
    },
    "quiz": {
      "question": "¿Qué cambia entre la marea baja y la marea alta?",
      "options": [
        "El color de la Luna",
        "El nivel del agua",
        "La cantidad de continentes"
      ],
      "answer": 1,
      "explain": "Las mareas cambian la altura a la que llega el agua del mar en la costa."
    },
    "photoQuery": "Hopewell Rocks Bay of Fundy low tide",
    "wikiTitle": "Hopewell Rocks",
    "photoAlt": "Formaciones rocosas al descubierto durante la marea baja junto a la bahía de Fundy, en Canadá",
    "sources": [
      {
        "title": "Parques de Canadá: las mareas en el parque nacional de Fundy",
        "url": "https://parks.canada.ca/pn-np/nb/fundy/nature/environment/marees-tides"
      },
      {
        "title": "Parques de Canadá: parque nacional de Fundy",
        "url": "https://www.parcs.canada.ca/pn-np/nb/fundy/info"
      }
    ]
  },
  {
    "id": "chichen-itza",
    "name": "Chichén Itzá",
    "country": "México",
    "category": "Historia",
    "lat": 20.6843,
    "lon": -88.5678,
    "hook": "Explora una ciudad maya con una pirámide escalonada.",
    "facts": [
      "Chichén Itzá fue una gran ciudad maya. Sus edificios de piedra siguen en pie en la península de Yucatán, en México.",
      "Uno de sus edificios famosos, El Castillo, es una pirámide con escaleras que suben por sus lados.",
      "La ciudad creció cerca de huecos naturales llenos de agua, llamados cenotes. Otro edificio se usaba para estudiar el cielo."
    ],
    "stretch": {
      "question": "¿Por qué una ciudad necesitaría estar cerca del agua?",
      "answer": "Las personas necesitan agua para beber, cocinar y cultivar alimentos. Encontrar agua es una parte importante de elegir dónde vivir."
    },
    "quiz": {
      "question": "¿Qué es un cenote?",
      "options": [
        "Un tipo de nube",
        "Un instrumento musical",
        "Un hueco natural lleno de agua"
      ],
      "answer": 2,
      "explain": "Los cenotes son aberturas naturales en la roca que contienen agua."
    },
    "photoQuery": "Chichen Itza El Castillo pyramid Mexico",
    "wikiTitle": "Chichen Itza",
    "photoAlt": "El Castillo, la pirámide escalonada de Chichén Itzá, en México",
    "sources": [
      {
        "title": "UNESCO: Chichén Itzá",
        "url": "https://whc.unesco.org/en/list/483"
      }
    ]
  },
  {
    "id": "monteverde",
    "name": "El bosque nuboso de Monteverde",
    "country": "Costa Rica",
    "category": "Naturaleza",
    "lat": 10.3009,
    "lon": -84.7959,
    "hook": "Un bosque se cubre con una manta de neblina.",
    "facts": [
      "Las nubes y la neblina envuelven este bosque de montaña y mantienen húmedas muchas de sus plantas.",
      "Orquídeas, musgos y helechos crecen en las ramas de los árboles y las usan como hogares en las alturas.",
      "El bosque da refugio a unas aves de colores vivos llamadas quetzales y a muchos otros animales."
    ],
    "stretch": {
      "question": "¿Todas las plantas tienen que crecer en la tierra del suelo?",
      "answer": "No. Algunas plantas crecen sobre otras plantas. Se llaman epífitas, y muchas viven en las ramas de los árboles de Monteverde."
    },
    "quiz": {
      "question": "¿Por qué a Monteverde se lo llama bosque nuboso?",
      "options": [
        "La neblina y las nubes lo rodean a menudo",
        "Sus árboles están hechos de nubes",
        "Flota sobre la Tierra"
      ],
      "answer": 0,
      "explain": "Este bosque de montaña suele estar envuelto en nubes y neblina."
    },
    "photoQuery": "Monteverde Cloud Forest Reserve mist trees",
    "wikiTitle": "Monteverde Cloud Forest Reserve",
    "photoAlt": "Árboles verdes y neblina en el bosque nuboso de Monteverde, en Costa Rica",
    "sources": [
      {
        "title": "Reserva del Bosque Nuboso de Monteverde: el bosque nuboso",
        "url": "https://cloudforestmonteverde.com/the-cloud-forest/"
      },
      {
        "title": "Reserva del Bosque Nuboso de Monteverde: las plantas",
        "url": "https://cloudforestmonteverde.com/flora-of-the-cloud-forest/"
      }
    ]
  },
  {
    "id": "panama-canal",
    "name": "El canal de Panamá",
    "country": "Panamá",
    "category": "Ingeniería",
    "lat": 9.08,
    "lon": -79.68,
    "hook": "Barcos gigantes viajan en ascensores de agua.",
    "facts": [
      "El canal de Panamá ofrece a los barcos un atajo entre los océanos Atlántico y Pacífico.",
      "Unos enormes compartimentos de agua llamados esclusas suben y bajan los barcos mientras cruzan la tierra.",
      "El agua de un lago fluye hacia las esclusas gracias a la gravedad. Cuando el agua sube, el barco que flota también sube."
    ],
    "stretch": {
      "question": "¿Cómo puede el agua levantar un barco pesado?",
      "answer": "El barco flota en el agua. Cuando entra más agua en el compartimento de la esclusa, sube el nivel del agua y el barco también sube."
    },
    "quiz": {
      "question": "¿Qué es una esclusa del canal de Panamá?",
      "options": [
        "Una llave gigante de puerta",
        "Un compartimento que sube o baja barcos",
        "Un tren submarino"
      ],
      "answer": 1,
      "explain": "Una esclusa cambia su nivel de agua para mover un barco flotante hacia arriba o hacia abajo."
    },
    "photoQuery": "Panama Canal Miraflores locks ship",
    "wikiTitle": "Panama Canal",
    "photoAlt": "Un barco que atraviesa el sistema de esclusas del canal de Panamá",
    "sources": [
      {
        "title": "Autoridad del Canal de Panamá: diseño de las esclusas",
        "url": "https://pancanal.com/en/design-of-the-locks/"
      },
      {
        "title": "Autoridad del Canal de Panamá: historia del canal",
        "url": "https://pancanal.com/en/history-of-the-panama-canal/"
      }
    ]
  },
  {
    "id": "lencois",
    "name": "Las lagunas entre dunas de Brasil",
    "country": "Brasil",
    "category": "Naturaleza",
    "lat": -2.5328,
    "lon": -43.1175,
    "hook": "La lluvia crea piscinas azules entre dunas blancas.",
    "facts": [
      "Lençóis Maranhenses tiene grandes extensiones de dunas de arena clara junto a la costa de Brasil.",
      "Durante la época de lluvias, el agua dulce de la lluvia se acumula entre las dunas y forma lagunas.",
      "Parece un desierto, pero este lugar tiene una época de lluvias. Muchas lagunas se hacen más pequeñas cuando el clima se vuelve más seco."
    ],
    "stretch": {
      "question": "¿Un lugar lleno de arena tiene que ser un desierto?",
      "answer": "No. Un desierto es muy seco. En este paisaje de arena llueve lo suficiente para llenar las lagunas entre sus dunas."
    },
    "quiz": {
      "question": "¿Qué llena las lagunas entre estas dunas?",
      "options": [
        "Lava",
        "Glaciares derretidos",
        "Agua de lluvia"
      ],
      "answer": 2,
      "explain": "El agua de lluvia se acumula en los lugares bajos entre las dunas de arena."
    },
    "photoQuery": "Lencois Maranhenses white dunes blue lagoons",
    "wikiTitle": "Lençóis Maranhenses National Park",
    "photoAlt": "Lagunas llenas de agua de lluvia entre dunas de arena clara en Lençóis Maranhenses, Brasil",
    "sources": [
      {
        "title": "UNESCO: parque nacional de Lençóis Maranhenses",
        "url": "https://whc.unesco.org/en/list/1611"
      },
      {
        "title": "NASA: la paradoja de Lençóis Maranhenses",
        "url": "https://science.nasa.gov/earth/earth-observatory/the-paradox-of-lencois-maranhenses-national-park/"
      }
    ]
  },
  {
    "id": "machu-picchu",
    "name": "Machu Picchu",
    "country": "Perú",
    "category": "Historia",
    "lat": -13.1631,
    "lon": -72.545,
    "hook": "Edificios de piedra en las alturas de un valle verde.",
    "facts": [
      "Los constructores incas levantaron Machu Picchu sobre una cresta de montaña empinada hace cientos de años.",
      "Las terrazas de piedra forman escalones gigantes en las laderas. Algunas ofrecían lugares planos para cultivar alimentos.",
      "Este lugar está a unos 8.000 pies sobre el nivel del mar, rodeado de montañas y bosque."
    ],
    "stretch": {
      "question": "¿Por qué los agricultores podrían hacer escalones planos en una colina empinada?",
      "answer": "Una terraza ofrece un lugar más plano para cultivar. Imagina sembrar en un escalón en vez de hacerlo en una resbaladera."
    },
    "quiz": {
      "question": "¿Cómo se llaman las zonas de la ladera que parecen escalones gigantes?",
      "options": [
        "Terrazas",
        "Icebergs",
        "Arrecifes de coral"
      ],
      "answer": 0,
      "explain": "Las terrazas son escalones planos construidos en una ladera."
    },
    "photoQuery": "Machu Picchu Inca terraces Peru",
    "wikiTitle": "Machu Picchu",
    "photoAlt": "Edificios y terrazas de piedra sobre la cresta de una montaña en Machu Picchu, Perú",
    "sources": [
      {
        "title": "UNESCO: santuario histórico de Machu Picchu",
        "url": "https://whc.unesco.org/en/list/274"
      },
      {
        "title": "Ministerio de Cultura del Perú: historia de Machu Picchu",
        "url": "https://www.machupicchu.gob.pe/history/?lang=en"
      }
    ]
  },
  {
    "id": "atacama",
    "name": "Atacama, el desierto de las estrellas",
    "country": "Chile",
    "category": "Ciencia",
    "lat": -23.029,
    "lon": -67.755,
    "hook": "Un desierto seco nos ayuda a explorar el espacio.",
    "facts": [
      "Las zonas altas del desierto de Atacama son tan secas que los científicos construyen allí potentes telescopios.",
      "ALMA usa un grupo de antenas gigantes con forma de plato que trabajan juntas.",
      "Estas antenas estudian luz que nuestros ojos no pueden ver, incluidas señales de objetos muy fríos en el espacio."
    ],
    "stretch": {
      "question": "¿Por qué el aire seco le sirve a ALMA?",
      "answer": "El vapor de agua del aire bloquea algunas señales que ALMA estudia. Cuando hay menos vapor de agua, más señales pueden llegar a sus antenas."
    },
    "quiz": {
      "question": "¿Cómo explora ALMA el espacio?",
      "options": [
        "Enviando personas dentro de sus antenas",
        "Con antenas que trabajan juntas",
        "Atrapando estrellas fugaces"
      ],
      "answer": 1,
      "explain": "ALMA combina las señales que recogen muchas antenas grandes."
    },
    "photoQuery": "Atacama Large Millimeter Array ALMA antennas Chile",
    "wikiTitle": "Atacama Large Millimeter Array",
    "photoAlt": "Antenas del telescopio ALMA en una meseta alta del desierto en Chile",
    "sources": [
      {
        "title": "Observatorio Europeo Austral: ALMA",
        "url": "https://www.hq.eso.org/public/teles-instr/alma/"
      },
      {
        "title": "Observatorio Europeo Austral: observación de distintos tipos de luz",
        "url": "https://www.eso.org/public/images/potw2142a/"
      }
    ]
  },
  {
    "id": "perito-moreno",
    "name": "El glaciar Perito Moreno",
    "country": "Argentina",
    "category": "Naturaleza",
    "lat": -50.4967,
    "lon": -73.1377,
    "hook": "Un enorme río de hielo llega hasta un lago.",
    "facts": [
      "Este glaciar lleva hielo cuesta abajo desde una gran extensión de hielo en la cordillera de los Andes.",
      "Su frente llega hasta las aguas de un lago llamado lago Argentino.",
      "Grandes trozos pueden desprenderse de su frente y caer al lago, donde se convierten en bloques de hielo flotantes."
    ],
    "stretch": {
      "question": "¿En qué se diferencian un glaciar y un iceberg?",
      "answer": "Un glaciar es una gran masa de hielo sobre tierra que se mueve lentamente. Un iceberg flota en el agua después de desprenderse."
    },
    "quiz": {
      "question": "¿Hasta dónde llega el frente del glaciar Perito Moreno?",
      "options": [
        "Un desierto caliente",
        "Una calle de ciudad",
        "Un lago"
      ],
      "answer": 2,
      "explain": "El glaciar termina en el lago Argentino, donde los trozos de hielo pueden desprenderse y caer al agua."
    },
    "photoQuery": "Perito Moreno Glacier ice front Argentina",
    "wikiTitle": "Perito Moreno Glacier",
    "photoAlt": "El frente de hielo del glaciar Perito Moreno junto al lago Argentino, en Argentina",
    "sources": [
      {
        "title": "NASA: glaciar Perito Moreno",
        "url": "https://science.nasa.gov/earth/earth-observatory/perito-moreno-glacier-argentina-78754/"
      },
      {
        "title": "Inventario Nacional de Glaciares de Argentina",
        "url": "https://www.glaciaresargentinos.gob.ar/?page_id=193"
      }
    ]
  },
  {
    "id": "uyuni",
    "name": "El espejo de sal de Uyuni",
    "country": "Bolivia",
    "category": "Naturaleza",
    "lat": -20.1338,
    "lon": -67.4891,
    "hook": "A veces el suelo refleja todo el cielo.",
    "facts": [
      "El salar de Uyuni es una enorme zona plana cubierta de sal, en las tierras altas de Bolivia.",
      "Hace mucho tiempo, los lagos cubrían esta tierra. Cuando su agua desapareció, quedó la sal.",
      "Una capa delgada de agua de lluvia quieta puede convertir parte del salar en un espejo gigante del cielo."
    ],
    "stretch": {
      "question": "¿Por qué el salar no parece un espejo todo el tiempo?",
      "answer": "El efecto de espejo necesita una capa de agua lisa. Cuando la superficie está seca, se ve la sal clara."
    },
    "quiz": {
      "question": "¿Qué ayuda a Uyuni a reflejar el cielo como un espejo?",
      "options": [
        "Una capa delgada de agua quieta",
        "Una manta de hojas",
        "Una capa profunda de nieve"
      ],
      "answer": 0,
      "explain": "El agua de superficie lisa refleja el cielo que está sobre el salar."
    },
    "photoQuery": "Salar de Uyuni Bolivia mirror reflection",
    "wikiTitle": "Salar de Uyuni",
    "photoAlt": "La enorme superficie de sal del salar de Uyuni, en Bolivia",
    "sources": [
      {
        "title": "NASA: salar de Uyuni, Bolivia",
        "url": "https://science.nasa.gov/earth/earth-observatory/salar-de-uyuni-bolivia-6096/"
      },
      {
        "title": "NASA: un baño de sal en Bolivia",
        "url": "https://science.nasa.gov/earth/earth-observatory/a-salt-bath-in-bolivia-149502/"
      }
    ]
  },
  {
    "id": "blue-hole",
    "name": "El Gran Agujero Azul",
    "country": "Belice",
    "category": "Naturaleza",
    "lat": 17.316,
    "lon": -87.5348,
    "hook": "Una cueva antigua se esconde bajo el agua azul.",
    "facts": [
      "El Gran Agujero Azul es un enorme hueco natural bajo el agua, dentro de un arrecife con forma de anillo.",
      "Cuando el nivel del mar era más bajo, aquí se formó una cueva por encima del agua.",
      "Dentro de la cueva crecieron formas de piedra llamadas estalactitas. Todavía están allí, ahora bajo aguas profundas."
    ],
    "stretch": {
      "question": "¿Cómo puede una cueva submarina guardar pistas sobre tierra seca?",
      "answer": "Sus estalactitas se formaron cuando algunas partes de la cueva estaban por encima del agua. Más tarde, el mar subió y las cubrió."
    },
    "quiz": {
      "question": "¿Qué esconde el Gran Agujero Azul bajo el agua?",
      "options": [
        "Un volcán lleno de lava",
        "Partes de una cueva antigua",
        "Un palacio de hielo"
      ],
      "answer": 1,
      "explain": "El hueco contiene formaciones de roca de una cueva antigua."
    },
    "photoQuery": "Great Blue Hole Belize aerial",
    "wikiTitle": "Great Blue Hole",
    "photoAlt": "El círculo oscuro del Gran Agujero Azul rodeado por aguas poco profundas del arrecife en Belice",
    "sources": [
      {
        "title": "NASA: Gran Agujero Azul, Belice",
        "url": "https://science.nasa.gov/earth/earth-observatory/great-blue-hole-belize-37741/"
      },
      {
        "title": "NASA: el arrecife Lighthouse y el Gran Agujero Azul",
        "url": "https://science.nasa.gov/earth/earth-observatory/lighthouse-reef-and-the-great-blue-hole-147158/"
      }
    ]
  },
  {
    "id": "tikal",
    "name": "Los templos de Tikal entre los árboles",
    "country": "Guatemala",
    "category": "Historia",
    "lat": 17.222,
    "lon": -89.6237,
    "hook": "Templos antiguos se asoman sobre un bosque lleno de vida.",
    "facts": [
      "Tikal fue una gran ciudad maya. Sus altos templos de piedra todavía se elevan por encima del bosque.",
      "La antigua ciudad tenía palacios, plazas, caminos y canchas para juegos de pelota.",
      "Hoy, el parque también protege a monos aulladores, jaguares y cientos de especies de aves."
    ],
    "stretch": {
      "question": "¿Puede un mismo parque proteger la historia y la vida silvestre?",
      "answer": "Sí. Tikal protege los edificios antiguos y el bosque que los rodea. Ambos forman parte de este lugar especial."
    },
    "quiz": {
      "question": "¿Qué rodea los templos antiguos de Tikal?",
      "options": [
        "Una capa de hielo polar",
        "Un salar",
        "Un bosque tropical"
      ],
      "answer": 2,
      "explain": "Los templos de piedra de Tikal se levantan entre los árboles de la Selva Maya."
    },
    "photoQuery": "Tikal Guatemala temples forest",
    "wikiTitle": "Tikal",
    "photoAlt": "Antiguos templos mayas de piedra y bosque en Tikal, Guatemala",
    "sources": [
      {
        "title": "UNESCO: parque nacional de Tikal",
        "url": "https://whc.unesco.org/en/list/64"
      },
      {
        "title": "Museo Nacional del Indígena Americano del Smithsonian: Tik’al",
        "url": "https://maya.nmai.si.edu/gallery/tikal"
      }
    ]
  },
  {
    "id": "yellowstone",
    "name": "La tierra caliente de Yellowstone",
    "country": "Estados Unidos",
    "category": "Ciencia",
    "lat": 44.4605,
    "lon": -110.8281,
    "hook": "La Tierra crea fuentes de agua y vapor.",
    "facts": [
      "Yellowstone tiene pozas llamadas fuentes termales y fuentes naturales llamadas géiseres. Los géiseres lanzan agua caliente y vapor al aire.",
      "El calor de las profundidades de la Tierra calienta el agua de este paisaje volcánico.",
      "Unos seres vivos diminutos llamados microbios producen algunos de los colores vivos alrededor de las fuentes termales. Estas pozas están demasiado calientes para tocarlas."
    ],
    "stretch": {
      "question": "¿Un géiser es lo mismo que un volcán en erupción?",
      "answer": "No. Un géiser lanza agua caliente y vapor. Una erupción volcánica puede expulsar lava, ceniza y gases."
    },
    "quiz": {
      "question": "¿Qué sale de un géiser?",
      "options": [
        "Agua caliente y vapor",
        "Bloques de hielo",
        "Agua salada fría"
      ],
      "answer": 0,
      "explain": "Los géiseres expulsan agua caliente y vapor calentados bajo tierra."
    },
    "photoQuery": "Grand Prismatic Spring Yellowstone aerial",
    "wikiTitle": "Grand Prismatic Spring",
    "photoAlt": "El agua azul y los bordes de colores de la Gran Fuente Prismática de Yellowstone",
    "sources": [
      {
        "title": "Servicio de Parques Nacionales: las aguas termales de Yellowstone",
        "url": "https://www.nps.gov/yell/learn/nature/hydrothermal-features.htm"
      },
      {
        "title": "Servicio de Parques Nacionales: el volcán de Yellowstone",
        "url": "https://www.nps.gov/yell/learn/nature/volcano.htm"
      },
      {
        "title": "Servicio de Parques Nacionales: seguridad en zonas termales",
        "url": "https://www.nps.gov/yell/planyourvisit/safety.htm"
      }
    ]
  }
];

;

/* ===== map.js ===== */
/* Max Learning Lab: offline, touch-friendly world map.
   Land geometry: Natural Earth, ne_110m_land, public domain.
   https://www.naturalearthdata.com/about/terms-of-use/
   https://github.com/nvkelso/natural-earth-vector/blob/master/geojson/ne_110m_land.geojson
   Projection: equirectangular, longitude -180..180 and latitude 90..-90.
   Usage: const dispose = MLL_MAP.mount(element, places, {onSelect, visited: new Set()});
   Each place: {id, name, lat, lon, emoji?, family?}. No network calls or dependencies.
*/
(function (global) {
  'use strict';
  const NS = 'http://www.w3.org/2000/svg';
  const l = (en, es) => global.MLL_I18N?.pick?.(en, es) ?? en;
  const locale = () => global.MLL_I18N?.lang === 'es' ? 'es' : 'en';
  const SEARCH_ALIASES = [
    ['hawaii', 'hawai'], ['japan', 'japon'], ['russia', 'rusia'],
    ['united states', 'estados unidos', 'usa', 'ee uu'],
    ['united kingdom', 'reino unido', 'uk'], ['iceland', 'islandia'],
    ['norway', 'noruega'], ['finland', 'finlandia'], ['germany', 'alemania'],
    ['france', 'francia'], ['spain', 'espana'], ['italy', 'italia'],
    ['greece', 'grecia'], ['turkey', 'turquia', 'turkiye'],
    ['netherlands', 'paises bajos', 'holland', 'holanda'],
    ['egypt', 'egipto'], ['morocco', 'marruecos'], ['ethiopia', 'etiopia'],
    ['south africa', 'sudafrica'], ['kenya', 'kenia'], ['rwanda', 'ruanda'],
    ['singapore', 'singapur'], ['new zealand', 'nueva zelanda'],
    ['brazil', 'brasil'], ['mexico', 'mejico'], ['croatia', 'croacia'],
    ['jordan', 'jordania'], ['bhutan', 'butan'], ['belize', 'belice'],
    ['fiji', 'fiyi'], ['antarctica', 'antartida']
  ];
  function normalizeSearch(value) {
    let normalized = String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .toLocaleLowerCase().replace(/ø/g, 'o').replace(/ß/g, 'ss')
      .replace(/['’ʻʼ]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
    for (const aliases of SEARCH_ALIASES) {
      for (const alias of aliases.slice(1)) {
        normalized = normalized.replace(new RegExp(`\\b${alias}\\b`, 'g'), aliases[0]);
      }
    }
    return normalized;
  }
  const LAND_PATHS = ["M334.52,472.33L333.71,473.75L332.89,475.00L327.07,474.62L320.87,474.78L317.38,473.86L317.38,473.75L315.86,472.93L322.12,473.04L328.10,473.31L330.17,472.17L331.64,471.19L334.52,472.33Z","M57.76,470.83L52.42,471.21L48.78,470.23L47.15,469.25L47.04,469.08L45.24,468.32L45.24,468.32L46.93,467.29L52.10,467.72L54.87,468.59L56.99,469.57L57.76,470.83Z","M374.57,466.80L378.00,467.99L379.19,469.68L379.52,470.88L379.63,472.29L375.33,473.17L370.82,473.87L365.59,474.53L359.77,475.07L353.19,474.91L349.54,473.98L350.03,472.84L355.96,472.08L358.36,471.15L360.10,469.95L361.35,468.92L363.04,467.94L364.83,466.80L364.83,466.80L366.25,466.80L370.38,466.20L374.57,466.80Z","M163.30,454.17L166.89,454.60L170.21,454.11L168.63,455.09L166.02,455.80L162.16,455.58L159.38,454.60L159.38,454.60L159.98,453.68L163.30,454.17Z","M151.22,454.11L155.47,455.20L153.83,455.09L150.24,454.82L146.44,454.06L146.44,454.06L148.45,453.46L151.22,454.11Z","M225.05,449.81L228.10,450.20L231.14,449.87L232.78,451.45L230.60,451.23L227.23,451.34L223.80,451.23L220.05,451.39L217.22,450.85L215.75,449.71L215.75,449.71L217.49,449.22L221.03,449.60L225.05,449.81Z","M309.86,447.10L310.18,448.35L309.69,449.44L308.93,450.47L305.67,450.86L302.57,451.40L298.92,451.35L300.28,450.26L297.02,450.64L293.92,451.02L291.79,450.20L291.63,449.06L294.68,447.97L294.68,447.97L296.58,447.64L299.79,447.75L300.61,446.34L300.77,445.30L300.72,443.07L302.29,441.77L304.85,441.33L306.32,442.36L306.97,443.40L308.17,444.65L309.10,445.85L309.86,447.10Z","M337.18,428.20L335.99,428.80L333.92,428.36L331.63,428.64L329.73,429.29L327.72,430.00L326.36,430.81L325.98,431.90L326.14,432.94L327.44,433.86L325.54,434.52L322.93,434.73L321.41,435.66L319.77,436.53L318.03,437.73L317.60,438.76L318.58,439.90L320.05,440.77L322.33,441.43L324.45,442.30L325.59,443.39L326.19,444.42L327.01,445.51L328.31,446.44L329.13,447.47L329.51,450.03L330.33,451.06L330.55,452.15L331.42,453.24L331.04,454.71L329.51,455.85L327.88,456.78L324.18,457.16L322.93,458.14L321.24,459.06L317.05,460.10L313.35,460.53L309.87,461.13L306.12,461.73L303.89,462.87L299.43,462.98L294.53,462.87L290.12,463.09L285.44,463.09L286.31,464.18L290.56,464.67L293.66,465.43L295.40,466.41L292.30,467.28L287.51,467.01L283.54,467.72L283.38,468.86L283.27,469.95L286.53,470.87L287.13,471.91L290.67,472.94L296.54,473.38L301.55,474.14L305.52,475.01L310.58,475.88L317.49,476.32L324.29,477.08L329.02,477.90L334.19,478.82L336.91,480.13L338.27,481.16L341.64,480.18L346.21,479.37L351.06,478.50L356.82,477.79L361.77,477.03L368.68,476.97L375.48,477.35L381.09,478.01L382.88,476.81L386.75,475.99L393.76,475.94L399.26,475.34L404.48,474.74L410.25,474.36L416.40,473.87L420.69,473.16L418.74,472.18L417.54,471.20L417.54,470.17L412.15,470.28L406.44,470.71L401.00,470.71L400.24,469.68L400.62,467.61L401.87,467.01L405.84,466.36L410.52,465.70L413.89,464.89L417.27,464.07L419.77,462.98L423.58,462.49L427.33,462.11L429.24,461.89L433.53,461.78L437.62,461.40L441.04,460.86L444.42,460.21L447.46,459.55L451.33,458.68L453.77,457.76L456.38,456.94L457.20,455.85L454.26,455.20L455.24,454.06L457.09,453.18L459.98,452.64L463.02,451.99L465.85,451.12L468.03,450.03L469.39,448.72L471.40,447.96L474.72,448.12L476.08,449.05L479.40,449.16L479.51,448.12L480.92,447.03L483.91,447.31L484.62,448.34L487.94,448.50L491.53,448.01L495.01,447.69L498.17,447.85L499.36,448.99L502.41,448.07L505.24,447.58L508.40,447.20L511.50,446.82L514.33,446.16L517.43,445.73L519.82,445.13L521.51,444.15L523.58,444.86L526.46,444.48L528.47,445.78L530.05,446.76L533.21,446.22L534.46,445.13L537.29,444.37L540.93,444.53L542.02,445.56L544.30,444.53L547.30,444.20L550.56,444.09L553.50,444.15L556.60,444.48L559.59,444.64L560.90,445.56L562.69,446.38L565.74,445.89L569.00,445.78L572.16,445.78L575.26,445.73L578.03,445.35L580.97,445.02L583.42,444.26L586.03,443.77L588.86,443.50L590.98,442.73L592.51,441.21L594.08,440.28L596.97,440.72L598.06,441.70L600.45,442.35L603.33,442.14L605.29,443.12L607.36,443.82L610.19,443.17L611.17,441.97L613.67,441.48L616.55,440.56L619.27,440.18L622.54,439.63L624.71,439.03L627.00,438.38L629.18,437.78L631.79,438.11L634.29,437.13L636.09,436.37L638.70,436.42L640.98,435.77L641.53,434.79L643.87,434.03L646.15,433.48L648.93,433.05L651.48,432.83L653.93,432.99L656.54,433.26L658.77,434.03L659.04,435.22L661.49,436.15L663.18,436.91L666.50,437.24L668.35,438.00L670.63,438.76L673.30,438.92L675.53,438.38L677.92,437.24L680.53,437.84L683.25,438.16L685.87,438.49L688.59,438.71L691.36,438.71L693.65,441.59L693.54,442.30L693.21,443.55L690.55,444.26L688.37,445.29L688.75,446.38L691.85,446.33L691.47,447.42L690.06,448.45L688.75,449.59L690.87,450.46L694.08,450.74L697.29,450.25L698.81,449.16L699.74,448.12L701.26,447.25L703.00,446.44L703.71,445.46L705.18,444.09L706.92,443.82L710.08,443.71L712.85,443.39L715.68,442.95L717.04,441.86L717.86,440.83L719.76,439.80L722.48,439.09L724.82,438.54L726.34,437.62L727.92,437.13L729.93,436.69L732.71,436.96L735.21,436.69L737.93,436.37L740.98,436.53L742.99,435.77L744.41,433.92L745.44,434.68L746.75,435.98L749.09,436.53L751.75,436.75L754.42,436.42L757.25,436.64L759.86,436.69L761.60,436.42L763.94,436.58L766.06,437.18L768.56,436.80L771.55,436.80L774.11,436.42L776.99,436.80L778.84,435.88L780.26,434.95L782.16,434.19L785.65,432.12L787.44,432.50L789.56,433.26L791.41,434.24L794.95,435.93L797.67,435.98L800.23,435.98L803.22,435.66L806.21,435.28L808.50,434.52L810.40,433.70L813.50,433.59L815.57,432.99L817.74,433.54L819.16,434.41L821.12,435.28L824.16,435.17L826.07,435.88L829.39,436.58L832.87,436.86L835.75,436.64L837.93,435.77L839.78,434.90L842.28,434.68L844.78,435.06L847.67,435.33L850.28,434.90L852.78,434.90L855.23,435.17L857.79,435.44L860.29,434.95L863.28,434.52L866.11,434.41L869.27,434.41L871.82,434.13L874.33,433.92L875.09,432.56L875.20,431.41L876.94,432.17L877.43,433.43L878.35,434.57L879.49,435.49L881.83,435.98L884.99,435.82L888.63,435.77L891.14,435.60L894.78,435.60L897.39,435.55L901.04,435.66L904.14,435.88L906.10,436.75L905.55,437.78L907.35,438.60L910.34,439.25L913.44,439.96L917.03,440.45L920.79,440.88L923.62,441.32L926.77,441.37L928.57,440.45L931.02,441.21L933.14,442.08L935.59,442.73L938.96,443.01L942.17,443.33L943.53,444.42L946.69,445.07L948.81,446.05L951.91,446.49L955.12,446.44L958.11,446.60L961.43,446.54L964.75,446.76L967.85,447.14L970.73,447.80L973.62,448.34L975.57,449.16L975.25,450.25L973.78,451.23L972.53,452.48L971.55,453.46L970.24,454.60L966.60,455.04L964.97,456.02L961.37,456.61L960.12,457.70L958.22,458.74L956.21,459.61L955.06,460.75L954.36,461.78L954.08,463.04L954.14,464.07L955.72,465.16L956.31,466.19L957.62,467.17L962.79,467.55L963.88,468.75L958.87,469.19L954.63,469.79L949.35,469.90L947.01,471.47L946.52,472.78L945.32,473.81L943.86,474.85L947.56,475.77L948.97,476.92L951.36,477.95L954.74,478.88L958.60,479.75L962.79,480.62L969.15,481.49L970.57,482.85L978.57,483.45L979.10,483.66L981.18,484.48L988.85,483.77L995.21,484.65L1000.00,485.31L1000.00,500.00L0.00,500.00L0.00,485.31L0.16,485.34L2.61,483.72L7.62,484.59L7.94,484.49L8.72,484.26L9.66,483.98L10.47,483.73L10.88,483.61L11.29,483.62L11.58,483.66L15.60,484.82L19.12,483.66L19.75,483.50L27.91,483.01L30.56,483.66L31.86,483.99L36.05,484.92L43.94,485.63L50.20,486.50L60.91,487.15L68.91,486.39L80.72,486.93L87.41,487.80L94.75,486.99L102.48,486.22L103.08,484.92L92.14,484.81L83.16,484.16L80.83,483.07L73.37,482.47L73.86,481.22L74.90,480.07L75.93,479.04L75.38,477.90L70.76,477.13L68.64,476.15L64.34,475.28L71.09,475.45L77.51,475.01L81.53,475.94L86.48,475.12L91.05,474.09L93.28,473.16L92.30,472.02L88.71,471.26L84.63,470.44L78.92,470.28L73.92,469.90L68.53,469.62L66.73,468.59L63.14,467.72L60.97,466.74L60.10,463.58L61.46,463.85L63.96,464.72L68.53,464.45L72.94,464.07L75.22,465.27L79.63,465.00L83.33,464.40L86.81,463.64L89.97,462.71L94.15,462.44L94.05,461.40L93.07,460.37L93.88,459.39L97.47,458.90L99.11,459.83L103.35,459.28L106.56,458.57L110.53,458.52L114.28,458.25L118.04,457.59L121.03,457.00L124.40,456.40L126.58,456.56L128.48,456.78L132.62,456.40L136.32,456.89L140.13,456.83L143.77,456.45L147.53,456.72L151.66,457.00L155.52,456.89L159.55,456.94L163.68,457.00L167.49,456.89L170.32,456.07L173.69,455.63L177.18,456.23L180.50,455.74L183.49,454.76L185.28,455.63L186.26,456.61L188.06,457.54L190.94,456.72L194.26,457.76L198.01,458.08L201.22,458.85L205.14,458.68L208.68,458.19L212.87,458.30L216.62,458.68L220.43,459.17L221.90,457.97L220.10,457.05L218.74,456.07L215.15,455.85L213.57,454.82L212.98,453.78L212.00,451.72L214.12,452.10L217.76,452.26L221.35,452.10L224.62,452.53L227.45,453.35L228.64,454.33L232.40,454.49L235.99,454.11L239.80,453.57L243.22,453.24L246.05,453.89L249.75,453.67L252.15,451.55L254.38,452.80L257.59,453.29L261.07,453.02L263.35,454.11L267.00,454.22L270.37,454.55L273.69,455.14L275.87,454.11L276.96,453.13L279.73,454.22L283.54,453.95L286.37,454.55L288.27,455.47L291.97,455.20L294.86,454.60L297.68,453.89L301.06,453.51L304.97,453.18L308.51,452.80L311.23,452.21L312.86,451.33L313.52,450.14L313.19,448.99L312.32,447.91L311.34,446.82L310.47,445.73L309.76,444.75L309.60,443.66L309.87,442.57L311.18,441.54L312.27,440.39L312.70,439.31L312.16,438.11L311.83,437.02L313.19,435.77L314.71,434.95L316.51,433.92L318.41,433.05L320.64,432.23L321.73,431.03L323.26,430.27L325.00,429.56L327.66,429.40L329.40,428.53L331.36,427.98L333.65,427.66L335.66,426.95L337.24,426.08L339.41,425.75L341.05,426.46L340.01,427.38L337.18,428.20Z","M311.81,399.58L315.42,401.25L319.31,401.94L318.06,403.33L315.42,403.47L314.00,402.49L313.08,403.61L310.70,404.48L307.69,404.16L305.67,403.33L302.76,402.93L299.27,401.38L296.43,399.88L292.60,396.77L294.89,397.35L298.79,399.21L302.48,400.21L303.91,398.93L304.81,397.03L307.37,395.88L309.35,396.21L309.35,396.21L310.42,397.50L311.81,399.58Z","M337.36,391.94L339.58,393.19L338.75,394.17L335.00,395.00L333.75,394.03L331.39,395.28L330.00,394.03L333.33,392.36L335.69,393.06L337.36,391.94Z","M695.22,388.08L690.96,388.26L690.89,386.78L691.30,385.64L691.49,385.07L693.28,385.94L695.90,386.29L696.00,386.82L695.22,388.08Z","M903.88,363.31L906.57,364.27L908.08,363.89L910.25,363.36L911.91,363.54L912.11,366.84L911.16,367.80L910.87,370.03L909.90,369.27L907.97,371.21L907.40,371.06L905.69,370.97L903.98,368.59L903.60,366.76L901.99,364.34L902.07,363.07L903.88,363.31Z","M980.61,363.66L981.24,364.81L983.22,363.69L984.02,364.86L984.02,366.03L982.99,367.31L981.17,369.36L979.75,370.48L980.78,371.81L978.63,371.85L976.26,372.90L975.51,374.71L973.94,377.52L971.75,378.77L970.37,379.56L967.81,379.50L966.01,378.58L962.99,378.39L962.53,377.37L964.02,375.31L967.51,372.57L969.30,372.04L971.30,370.99L973.68,369.53L975.35,368.09L976.58,366.02L977.64,365.32L978.05,363.77L980.00,362.48L980.61,363.66Z","M985.03,350.43L987.05,353.36L987.10,351.46L988.36,352.22L988.77,354.32L991.01,355.23L992.89,355.45L994.47,354.39L995.88,354.71L995.21,357.17L994.36,358.80L992.24,358.74L991.50,359.58L991.76,360.78L991.35,361.29L990.30,362.79L988.92,364.69L986.78,365.80L986.30,365.07L985.14,364.67L986.74,362.39L985.83,360.86L982.84,359.75L982.92,358.74L984.93,357.77L985.40,355.63L985.27,353.84L984.14,351.98L984.22,351.49L982.89,350.34L980.71,347.88L979.54,345.91L980.58,345.70L982.09,347.24L984.25,347.96L985.03,350.43Z","M964.22,311.56L963.17,312.22L961.64,311.47L959.65,310.22L957.86,308.75L956.02,306.79L955.64,305.85L956.83,305.89L958.39,306.83L959.61,307.78L960.50,308.56L962.78,310.28L964.22,311.56Z","M995.48,298.17L996.44,298.97L995.98,300.42L994.26,300.80L992.73,300.46L992.46,299.24L993.53,298.28L994.79,298.62L995.48,298.17Z","M998.23,296.67L996.46,297.26L996.10,296.22L997.49,295.65L998.37,295.50L1000.00,294.63L1000.00,295.99L998.23,296.67Z","M0.23,295.84L0.00,295.99L0.00,294.63L0.57,294.50L0.23,295.84Z","M966.24,295.74L965.32,296.11L964.39,294.89L964.49,294.14L966.24,295.74Z","M964.19,291.48L964.64,293.72L963.89,293.37L963.31,293.52L962.92,292.76L962.86,290.63L964.19,291.48Z","M639.05,287.65L639.49,291.00L640.21,292.30L639.94,293.63L639.45,294.45L638.50,292.82L637.98,293.64L638.51,295.70L638.26,296.88L637.50,297.52L637.32,299.87L636.23,303.11L634.86,306.94L633.14,312.20L632.08,316.06L630.82,319.28L628.56,319.94L626.14,321.12L624.54,320.41L622.33,319.41L621.57,317.95L621.38,315.48L620.40,313.27L620.15,311.27L620.65,309.27L621.93,308.79L621.93,307.86L623.26,305.76L623.51,303.99L622.87,302.67L622.34,300.92L622.12,298.36L623.09,296.81L623.46,295.05L624.85,294.94L626.40,294.37L627.42,293.87L628.65,293.83L630.23,292.25L632.51,290.54L633.35,289.14L632.97,287.96L634.15,288.29L635.68,286.36L635.73,284.69L636.65,283.45L637.62,284.64L638.36,285.82L639.05,287.65Z","M898.78,288.23L899.78,290.41L901.57,289.36L902.49,290.54L903.82,291.62L903.53,292.86L904.13,295.24L904.55,296.62L905.25,296.96L906.00,299.34L905.73,300.78L906.63,302.66L909.64,304.11L911.60,305.43L913.47,306.64L913.10,307.32L914.69,309.06L915.77,312.06L916.88,311.45L918.01,312.66L918.69,312.23L919.17,315.17L921.14,316.88L922.43,317.94L924.60,320.19L925.38,322.42L925.45,324.00L925.26,325.72L926.58,328.08L926.42,330.54L925.94,331.83L925.19,334.31L925.25,335.90L924.70,337.89L923.47,340.42L921.41,341.78L920.40,343.93L919.47,345.31L918.65,347.70L917.58,349.09L916.88,351.17L916.52,353.08L916.66,353.96L915.07,354.92L911.96,355.03L909.39,356.16L908.12,357.24L906.44,358.43L904.14,357.20L902.44,356.72L902.87,355.27L901.35,355.79L898.92,357.80L896.52,357.05L894.94,356.61L893.35,356.41L890.66,355.61L888.87,353.90L888.35,351.79L887.71,350.38L886.34,349.26L883.67,348.92L884.58,347.58L883.91,345.51L882.55,347.44L880.08,347.95L881.53,346.41L881.96,344.81L883.03,343.45L882.81,341.39L880.55,343.76L878.81,344.71L877.75,346.92L875.58,345.77L875.66,344.30L873.93,342.29L872.46,341.24L872.98,340.60L869.42,338.92L867.47,338.84L864.80,337.49L859.82,337.75L856.22,338.75L853.06,339.67L850.41,339.49L847.47,340.91L845.06,341.55L844.52,343.01L843.50,344.14L841.14,344.21L839.40,344.45L836.94,343.95L834.95,344.25L833.04,344.38L831.39,345.86L830.58,345.73L829.18,346.52L827.85,347.40L825.82,347.29L823.96,347.29L821.01,345.52L819.52,344.99L819.58,343.40L820.96,343.02L821.43,342.39L821.33,341.39L821.67,339.46L821.36,337.81L819.89,335.00L819.44,333.42L819.56,331.84L818.45,330.03L818.38,329.21L817.15,328.11L816.80,325.93L815.22,323.73L814.83,322.55L816.05,323.75L815.11,321.17L816.49,321.98L817.31,323.05L817.27,321.63L815.89,319.44L815.63,318.57L814.98,317.74L815.28,316.13L815.85,315.45L816.23,314.06L815.93,312.43L817.08,310.43L817.29,312.55L818.47,310.64L820.72,309.71L822.08,308.52L824.20,307.50L825.46,307.29L826.23,307.63L828.42,306.60L830.10,306.29L830.52,305.68L831.26,305.42L832.79,305.49L835.71,304.68L837.22,303.44L837.93,301.96L839.56,300.55L839.69,299.44L839.76,297.93L841.70,295.57L842.87,297.97L844.05,297.41L843.06,296.10L843.94,294.75L845.16,295.36L845.50,293.24L847.02,291.88L847.69,290.78L849.08,290.31L849.13,289.53L850.35,289.85L850.40,289.16L851.62,288.76L852.96,288.38L855.01,289.66L856.55,291.30L858.29,291.32L860.06,291.58L859.47,290.06L860.80,287.83L862.05,287.10L861.62,286.41L862.83,284.82L864.51,283.84L865.93,284.17L868.26,283.65L868.21,282.23L866.18,281.32L867.66,280.91L869.50,281.60L870.97,282.74L873.31,283.45L874.11,283.17L875.83,284.02L877.45,283.23L878.50,283.47L879.15,282.94L880.42,284.31L879.68,285.80L878.63,286.92L877.67,287.01L877.99,288.12L877.18,289.51L876.19,290.88L876.39,291.66L878.60,293.20L880.74,294.09L882.17,295.04L884.18,296.69L884.96,296.69L886.41,297.40L886.83,298.25L889.49,299.20L891.32,298.25L891.86,296.76L892.43,295.52L892.77,294.00L893.62,291.79L893.23,290.45L893.43,289.64L893.11,288.05L893.47,285.96L894.01,285.39L893.57,284.47L894.25,282.99L894.77,281.47L894.84,280.67L895.88,279.63L896.66,280.99L896.85,282.74L897.54,283.07L897.66,284.24L898.67,285.65L898.88,287.22L898.78,288.23Z","M950.33,279.12L951.11,280.07L949.17,280.06L948.11,278.35L949.77,279.02L950.33,279.12Z","M835.32,278.44L834.15,278.50L830.47,276.55L833.06,276.00L834.52,276.85L835.49,277.69L835.32,278.44Z","M946.81,277.42L945.73,277.49L944.03,277.21L943.44,276.78L943.62,275.67L945.45,276.11L946.36,276.69L946.81,277.42Z","M949.11,276.67L948.69,277.18L946.63,274.77L946.06,273.11L947.00,273.11L948.00,275.33L949.11,276.67Z","M845.66,278.17L843.28,278.78L842.94,278.44L843.19,277.50L844.39,275.81L847.14,274.70L847.46,274.05L849.85,273.42L851.79,273.33L852.66,272.98L853.71,273.33L852.69,274.08L849.79,275.29L847.47,276.09L845.66,278.17Z","M827.50,272.49L828.50,273.23L830.22,273.00L830.91,274.18L827.70,274.74L825.77,275.11L824.28,275.09L825.23,273.49L826.76,273.47L827.50,272.49Z","M841.40,272.48L840.99,274.03L836.82,274.82L833.12,274.47L833.11,273.46L835.32,272.88L837.06,273.71L838.91,273.50L841.40,272.48Z","M944.10,273.16L944.22,273.72L942.04,272.54L940.52,271.54L939.48,270.62L939.89,270.33L941.17,271.00L943.44,272.28L944.10,273.16Z","M937.61,270.41L937.05,270.57L935.84,269.94L934.70,268.79L934.84,268.33L936.50,269.50L937.61,270.41Z","M801.73,268.83L807.05,269.10L807.67,267.96L812.82,269.29L813.83,271.10L818.00,271.60L821.40,273.25L818.23,274.31L815.18,273.19L812.67,273.27L809.78,273.06L807.18,272.56L803.97,271.50L801.93,271.23L800.77,271.57L795.71,270.43L795.22,269.24L792.68,269.03L794.59,266.38L797.96,266.54L800.20,267.63L801.35,267.84L801.73,268.83Z","M874.24,267.26L872.81,269.15L872.54,267.06L873.03,266.06L873.61,265.13L874.24,265.94L874.24,267.26Z","M933.00,268.94L932.22,269.22L931.02,268.16L929.80,266.39L929.21,264.28L929.59,264.01L929.89,264.83L930.73,265.46L932.08,267.22L933.39,268.17L933.00,268.94Z","M922.17,265.22L920.72,265.45L920.28,266.22L918.76,266.90L917.34,267.55L915.86,267.55L913.58,266.74L912.00,265.96L912.23,265.10L914.72,265.51L916.24,265.29L916.66,263.96L917.05,263.89L917.32,265.37L918.91,265.16L919.69,264.20L921.24,263.21L920.94,261.58L922.60,261.52L923.16,261.98L923.11,263.52L922.17,265.22Z","M853.47,259.61L852.43,260.53L850.51,260.02L849.97,258.83L852.78,258.69L853.47,259.61Z","M862.42,258.59L863.43,260.72L861.08,259.57L858.76,259.34L857.20,259.52L855.27,259.43L855.93,257.90L859.36,257.78L862.42,258.59Z","M925.39,262.50L924.52,263.24L924.00,261.60L923.35,260.53L922.09,259.62L920.51,258.43L918.51,257.62L919.28,256.94L920.78,257.72L921.72,258.33L922.89,259.00L924.00,260.17L925.06,261.06L925.39,262.50Z","M872.62,253.20L873.40,257.69L876.27,259.35L878.59,256.41L881.78,254.73L884.25,254.73L886.62,255.70L888.69,256.69L891.67,257.22L896.49,259.14L901.62,260.73L903.54,262.15L905.08,263.55L905.51,265.18L910.13,266.90L910.81,268.37L908.25,268.67L908.87,270.52L911.35,272.34L913.15,275.29L914.74,275.20L914.63,276.43L916.77,276.90L915.94,277.42L918.89,278.59L918.58,279.40L916.75,279.59L916.06,278.87L913.68,278.56L910.87,278.14L908.71,276.37L907.13,274.84L905.69,272.41L902.07,271.19L899.71,271.99L898.02,272.90L898.37,274.95L896.19,275.91L894.63,275.44L891.76,275.33L889.29,273.05L886.47,272.49L885.78,273.28L882.26,273.37L883.44,271.11L885.19,270.33L884.47,267.31L883.13,264.98L877.75,262.63L875.46,262.40L871.29,259.83L870.47,261.18L869.40,261.42L868.77,260.41L868.76,259.20L866.64,257.83L869.63,256.83L871.61,256.89L871.38,256.15L867.31,256.15L866.21,254.49L863.73,253.98L862.55,252.60L866.30,251.93L867.72,251.03L872.18,252.17L872.62,253.20Z","M847.89,246.06L845.66,248.81L843.57,249.35L840.90,248.80L836.27,248.94L833.84,249.34L833.45,251.44L835.93,253.91L837.43,252.66L842.61,251.71L842.38,252.99L841.17,252.59L839.97,254.21L837.52,255.29L840.15,258.85L839.64,259.80L842.14,263.01L842.12,264.84L840.63,265.65L839.55,264.67L840.89,262.40L838.16,263.48L837.47,262.71L837.83,261.63L835.83,260.01L836.03,257.30L834.18,258.14L834.42,261.38L834.53,265.36L832.77,265.76L831.57,264.94L832.37,262.39L831.94,259.71L830.77,259.69L829.91,257.78L831.06,255.96L831.45,253.76L832.85,249.57L833.43,248.43L835.79,246.36L837.96,247.18L841.47,247.57L844.66,247.45L847.41,245.44L847.89,246.06Z","M857.47,246.85L857.32,249.28L855.89,249.01L855.47,250.70L856.61,252.17L855.83,252.50L854.71,250.74L853.89,247.19L854.45,244.97L855.37,243.96L855.57,245.48L857.21,245.72L857.47,246.85Z","M793.94,266.26L790.86,266.31L788.52,263.99L784.96,261.72L783.77,260.04L781.66,257.78L780.28,255.70L778.17,251.81L775.73,249.49L774.92,247.10L773.89,244.93L771.39,243.19L769.94,240.81L767.84,239.25L764.95,236.19L764.70,234.78L766.49,234.89L770.79,235.43L773.25,238.14L775.40,240.03L776.93,241.18L779.56,244.17L782.38,244.21L784.72,246.11L786.32,248.44L788.44,249.71L787.33,251.98L788.92,252.94L789.92,253.01L790.39,254.95L791.36,256.50L793.39,256.75L794.75,258.50L794.05,261.96L793.94,266.26Z","M827.43,244.92L830.55,247.49L827.26,247.82L826.33,249.72L826.45,252.23L823.78,254.13L823.70,256.90L822.63,261.15L822.22,260.16L819.07,261.41L817.97,259.71L815.99,259.55L814.60,258.66L811.30,259.66L810.29,258.32L808.47,258.47L806.18,258.15L805.75,254.42L804.37,253.65L803.03,251.28L802.65,248.85L802.97,246.27L804.62,244.43L806.66,245.38L808.80,244.86L809.36,242.51L810.55,241.98L813.88,241.38L815.87,239.18L817.23,237.43L818.33,236.39L820.70,234.87L822.84,232.94L824.24,230.76L825.36,230.76L826.79,232.16L826.91,233.37L828.74,234.14L831.06,234.98L830.86,236.07L829.00,236.20L829.50,237.56L827.45,238.51L825.87,241.02L827.91,243.65L827.43,244.92Z","M851.05,226.63L851.33,228.47L851.49,230.03L850.55,232.57L849.53,229.74L848.23,231.15L849.12,233.20L848.32,234.50L845.05,232.89L844.27,230.87L845.12,229.55L843.36,228.24L842.49,229.39L841.18,229.29L839.13,230.83L838.67,230.02L839.76,227.68L841.51,226.90L843.02,225.85L844.00,227.11L846.12,226.35L846.57,225.11L848.53,225.04L848.37,222.89L850.62,224.21L850.85,225.60L851.05,226.63Z","M725.61,232.79L723.19,233.42L721.87,231.21L721.38,227.22L722.63,222.71L724.55,224.25L725.85,226.21L727.19,229.10L726.77,232.00L725.61,232.79Z","M330.74,221.92L328.42,222.22L327.92,221.97L328.72,221.21L328.67,220.11L330.26,219.75L330.85,219.85L330.74,221.92Z","M844.40,221.45L843.40,222.36L842.53,224.12L841.66,224.94L839.94,223.02L840.52,222.27L841.21,221.50L841.52,219.77L843.05,219.61L842.60,221.48L844.66,218.80L844.40,221.45Z","M829.18,224.12L825.48,226.76L826.85,224.81L828.85,223.10L830.52,221.18L831.98,218.42L832.47,220.68L830.64,222.21L829.18,224.12Z","M838.57,216.97L840.23,217.83L842.00,217.82L841.95,218.98L840.66,220.16L838.90,221.00L838.80,219.71L839.00,218.29L838.57,216.97Z","M848.62,216.21L849.40,219.32L847.26,218.58L847.31,219.51L847.99,221.23L846.67,221.85L846.56,219.89L845.72,219.75L845.28,218.07L846.92,218.29L846.88,217.24L845.19,215.12L847.85,215.18L848.62,216.21Z","M837.58,213.70L836.84,216.10L835.65,214.71L834.23,212.59L836.61,212.70L837.58,213.70Z","M837.00,198.60L838.72,199.39L839.57,198.67L839.82,199.38L839.37,200.53L840.32,202.52L839.59,204.83L837.95,205.75L837.51,207.99L838.14,210.20L839.61,210.50L840.84,210.18L844.31,211.72L844.04,213.23L844.95,213.90L844.66,215.18L842.49,213.81L841.47,212.35L840.75,213.37L838.99,211.71L836.46,212.12L835.08,211.51L835.22,210.36L836.09,209.65L835.26,209.01L834.90,210.01L833.53,208.41L833.11,207.20L833.01,204.55L834.13,205.46L834.42,201.11L835.32,198.60L837.00,198.60Z","M317.80,199.37L317.09,200.07L315.00,200.05L313.38,200.15L313.22,198.96L313.61,198.55L315.88,198.57L317.30,198.81L317.80,199.37Z","M286.38,200.37L285.54,200.83L283.98,200.38L282.40,199.37L282.73,198.74L283.90,198.54L284.53,198.64L286.40,198.89L287.87,199.55L288.33,200.31L286.38,200.37Z","M298.39,194.80L300.80,195.24L301.15,194.76L303.31,194.78L304.96,195.49L305.69,195.42L306.20,196.41L307.72,196.35L307.63,197.18L308.86,197.28L310.23,198.30L309.20,199.43L307.88,198.83L306.60,198.94L305.69,198.81L305.19,199.32L304.12,199.49L303.70,198.81L302.78,199.21L301.67,201.12L300.95,200.67L300.81,199.88L298.97,199.40L297.65,199.60L295.96,199.39L294.66,199.91L293.17,199.05L293.42,198.15L295.97,198.54L298.07,198.76L299.07,198.14L297.80,196.94L297.82,195.88L296.07,195.45L296.70,194.68L298.39,194.80Z","M806.50,198.12L804.10,199.45L801.82,198.59L801.74,196.20L803.11,194.94L806.14,194.16L807.74,194.23L808.36,195.29L807.14,196.51L806.50,198.12Z","M67.94,196.99L67.53,197.46L66.84,197.06L66.92,196.28L66.46,195.27L66.60,194.96L67.08,194.51L66.89,193.96L67.05,193.70L67.26,193.75L68.33,194.22L68.82,194.46L69.27,194.84L69.98,195.81L69.91,195.96L68.83,196.56L67.94,196.99Z","M66.45,192.66L65.52,192.85L65.04,192.27L64.72,192.04L64.69,191.87L64.97,191.63L65.95,191.90L66.68,192.32L66.45,192.66Z","M64.56,191.18L64.47,191.48L62.99,191.40L63.19,191.06L64.56,191.18Z","M62.08,190.77L61.92,190.93L61.73,190.90L60.76,190.80L60.41,190.17L60.30,190.06L61.04,189.68L61.27,189.85L62.08,190.77Z","M57.37,188.94L57.05,189.21L56.11,188.71L56.25,188.50L56.68,188.23L57.32,188.29L57.37,188.94Z","M278.67,186.76L279.77,187.78L282.37,187.47L283.35,188.12L285.70,189.84L287.43,191.09L288.35,191.05L290.00,191.62L289.80,192.40L291.85,192.52L293.95,193.65L293.62,194.30L291.77,194.66L289.90,194.80L287.99,194.58L284.01,194.85L285.87,193.30L284.74,192.57L282.95,192.39L281.99,191.59L281.33,190.01L279.76,190.11L277.17,189.37L276.34,188.79L272.72,188.36L271.75,187.81L272.79,187.12L270.07,186.98L268.07,188.42L266.92,188.46L266.52,189.14L265.15,189.44L263.96,189.18L265.42,188.32L266.03,187.32L267.28,186.70L268.70,186.16L270.80,185.89L271.48,185.59L273.88,185.79L276.06,185.82L278.67,186.76Z","M284.63,184.00L283.94,184.14L283.24,182.54L282.20,181.73L282.80,179.97L283.64,180.08L284.61,182.39L284.63,184.00Z","M836.60,186.69L835.41,188.97L833.94,186.63L833.63,184.57L835.26,181.84L837.49,179.73L838.75,180.56L838.27,182.24L836.60,186.69Z","M283.83,176.17L280.81,176.61L280.61,175.58L281.92,175.36L283.75,175.44L283.83,176.17Z","M286.11,176.14L285.63,178.11L285.12,177.76L285.17,176.31L283.92,175.21L283.92,174.89L286.11,176.14Z","M874.00,155.14L874.35,156.09L872.79,157.77L871.65,156.88L870.22,157.53L869.49,159.15L867.68,158.36L867.70,157.05L869.23,155.39L870.81,155.71L871.96,154.54L874.00,155.14Z","M596.05,150.91L594.17,152.10L594.37,152.62L594.46,152.84L591.61,153.97L590.25,153.61L589.60,152.49L590.92,152.39L591.12,152.37L591.52,151.70L593.52,151.74L596.05,150.91Z","M565.83,150.82L567.35,151.76L569.51,151.60L571.58,151.79L571.51,152.28L573.03,151.94L572.68,152.76L568.68,153.00L568.71,152.54L565.32,152.00L565.83,150.82Z","M543.11,143.80L542.11,145.99L542.53,146.85L541.94,148.28L539.82,147.23L538.41,146.93L534.53,145.52L534.92,144.09L538.17,144.35L541.00,144.04L543.11,143.80Z","M525.58,135.53L527.25,137.50L526.86,141.17L525.60,141.00L524.46,141.93L523.41,141.19L523.30,137.84L522.67,136.25L524.19,136.39L525.58,135.53Z","M891.60,146.83L890.55,149.04L891.04,150.44L889.59,152.39L886.04,153.70L881.16,153.87L877.20,157.04L875.34,155.97L875.22,153.90L870.39,154.51L867.10,155.82L863.85,155.87L866.67,157.92L864.81,162.64L863.02,163.81L861.67,162.73L862.35,160.22L860.60,159.42L859.47,157.51L862.09,156.66L863.55,154.91L866.35,153.47L868.38,151.57L873.91,150.75L876.88,151.31L879.79,146.38L881.64,147.70L885.72,144.92L887.30,143.84L889.04,140.45L888.56,137.32L889.74,135.57L892.69,135.06L894.21,138.91L894.12,141.16L891.55,143.96L891.60,146.83Z","M526.56,132.91L525.64,135.06L524.38,134.49L523.73,132.62L524.29,131.59L526.08,130.53L526.56,132.91Z","M899.75,127.29L901.70,127.89L903.67,126.71L904.29,129.83L900.17,130.59L897.73,133.35L893.37,131.45L891.85,134.49L888.76,134.53L888.38,131.77L889.76,129.63L892.72,129.48L893.53,125.63L894.35,123.47L897.62,126.36L899.75,127.29Z","M323.15,120.69L325.17,121.07L327.74,120.99L326.38,122.13L325.35,122.31L321.83,121.13L321.13,120.20L322.18,119.34L323.15,120.69Z","M328.32,113.60L326.96,113.65L323.36,112.78L320.78,111.46L321.74,111.23L325.39,111.93L328.23,113.09L328.32,113.60Z","M156.92,115.25L155.52,115.64L150.96,114.37L150.13,113.39L147.64,112.42L147.14,111.63L144.28,111.13L143.21,109.61L143.45,108.97L146.37,109.58L148.07,110.00L150.68,110.29L151.62,111.25L153.00,112.57L155.77,113.72L156.92,115.25Z","M344.07,109.20L342.23,111.63L344.05,110.69L345.91,111.29L344.94,112.26L347.40,113.02L348.68,112.34L351.45,113.20L350.59,115.23L352.54,114.76L352.89,116.23L353.76,117.96L352.59,120.40L351.33,120.50L349.50,119.98L350.11,117.71L349.33,117.35L346.11,119.76L344.45,119.67L346.41,118.36L343.75,117.69L340.76,117.85L335.37,117.77L334.95,116.95L336.68,115.97L335.47,115.21L337.80,113.54L340.67,109.12L342.39,107.53L344.80,106.58L346.09,106.70L345.55,107.45L344.07,109.20Z","M131.36,99.89L131.36,99.89L131.36,99.89L131.36,99.89L134.03,99.67L133.20,102.82L135.61,105.05L134.51,105.05L132.83,103.78L131.81,102.50L130.40,101.63L129.89,100.41L130.06,99.53L131.36,99.89Z","M899.02,109.03L901.82,113.95L897.71,113.04L896.00,117.05L898.70,119.90L898.63,121.84L896.52,120.16L894.70,122.31L894.19,119.98L894.50,117.28L894.18,114.28L894.82,112.18L894.94,108.47L893.32,105.73L893.56,101.94L896.13,100.66L895.03,99.37L896.26,98.98L896.99,100.82L897.95,103.50L897.88,106.23L899.02,109.03Z","M481.14,104.83L476.22,106.47L472.29,106.05L474.54,103.15L473.09,100.33L476.87,98.15L478.97,96.86L481.29,96.74L484.27,98.46L482.78,100.37L483.24,102.35L481.14,104.83Z","M535.25,95.53L533.58,97.78L530.68,96.21L530.29,95.06L534.36,94.13L535.25,95.53Z","M74.98,91.34L72.21,92.40L70.79,91.69L70.36,90.39L72.88,89.40L74.36,88.98L76.21,89.16L77.39,90.02L74.98,91.34Z","M491.65,87.13L488.68,90.13L491.51,89.75L494.56,89.76L493.83,92.03L491.34,94.52L494.21,94.69L496.90,98.26L498.80,98.71L500.51,101.87L501.31,102.97L504.67,103.50L504.33,105.28L502.92,106.09L504.03,107.53L501.53,108.98L497.81,108.96L493.08,109.72L491.79,109.18L489.95,110.48L487.38,110.16L485.43,111.22L483.95,110.67L488.03,107.75L490.51,107.15L486.15,106.68L485.37,105.58L488.27,104.72L486.75,103.22L487.28,101.40L491.41,101.65L491.82,100.04L489.92,98.29L486.54,97.80L485.88,97.05L486.89,95.81L485.98,95.04L484.48,96.36L484.32,93.68L482.92,92.26L483.93,89.39L486.08,87.14L488.30,87.36L491.65,87.13Z","M40.06,83.58L38.35,84.02L36.53,83.50L34.85,82.74L37.59,82.27L39.79,82.52L40.06,83.58Z","M279.82,77.34L278.73,78.80L277.50,78.56L276.77,77.73L276.90,77.54L277.97,76.71L279.11,76.77L279.82,77.34Z","M272.50,75.80L269.25,77.34L267.29,77.27L266.68,76.52L268.75,75.24L272.56,75.27L272.50,75.80Z","M22.97,72.83L24.68,73.36L26.41,73.07L28.66,73.80L31.42,74.17L31.19,74.48L29.08,75.06L26.97,74.46L25.91,73.96L23.46,74.12L22.80,73.87L22.97,72.83Z","M263.44,67.62L263.96,68.84L265.38,68.41L266.99,69.14L270.03,70.09L273.22,70.96L273.46,72.28L275.51,72.06L277.49,72.98L275.02,73.86L270.70,73.19L269.14,71.94L266.39,73.42L262.43,74.85L261.48,73.23L257.72,73.50L260.13,72.12L260.49,69.94L261.43,67.39L263.44,67.62Z","M459.70,65.40L459.06,67.20L462.20,69.09L458.58,71.21L450.57,73.11L448.18,73.62L444.52,73.21L436.77,72.33L439.50,71.11L433.46,69.75L438.38,69.21L438.26,68.39L432.43,67.75L434.30,65.94L438.51,65.53L442.84,67.41L447.06,65.90L450.56,66.68L455.09,65.20L459.70,65.40Z","M289.26,63.48L286.15,63.61L285.45,62.26L286.63,60.70L289.18,60.31L291.35,61.08L291.38,62.27L291.07,62.65L289.26,63.48Z","M13.85,65.04L15.72,65.73L15.08,63.72L22.62,64.13L28.06,66.73L25.30,67.94L20.75,68.23L20.68,70.94L19.57,71.52L16.97,71.44L14.85,70.47L11.16,69.66L10.54,68.45L7.71,68.00L4.56,68.36L3.05,67.39L3.65,66.36L0.32,67.02L1.58,68.32L0.00,69.50L0.00,58.43L6.81,60.56L14.09,63.32L13.85,65.04Z","M234.31,58.03L232.58,59.01L228.84,58.17L226.58,58.47L222.78,57.22L225.23,56.36L227.17,55.16L230.12,55.94L231.78,56.44L232.62,56.97L234.31,58.03Z","M1000.00,53.24L996.95,53.39L996.46,52.50L1000.00,51.35L1000.00,53.24Z","M3.63,53.07L0.00,53.24L0.00,51.35L0.36,51.23L2.71,51.23L6.73,52.03L6.49,52.41L3.63,53.07Z","M248.48,56.95L248.47,59.79L252.18,57.61L255.50,59.40L254.67,61.46L257.36,63.34L260.26,61.33L262.29,58.93L262.44,55.88L266.39,56.10L270.49,56.50L274.22,57.88L274.39,59.26L272.32,60.74L274.28,62.23L273.93,63.58L268.49,65.52L264.62,65.95L261.75,65.12L260.92,66.51L258.25,68.85L257.44,70.07L254.21,71.95L250.24,72.13L248.04,73.30L247.86,75.11L244.63,75.46L241.23,77.71L238.22,80.84L237.14,83.03L236.99,86.25L241.07,86.72L242.32,89.32L243.62,91.42L247.51,90.88L252.67,92.08L255.45,93.13L257.43,94.45L260.91,95.21L263.86,96.38L268.44,96.54L271.46,96.81L271.01,99.22L271.88,102.01L273.89,105.12L278.02,107.75L280.16,106.85L281.66,103.99L280.21,99.61L278.25,98.15L282.70,96.84L285.85,94.90L287.39,92.96L287.16,91.10L285.27,88.74L281.90,86.65L285.18,83.74L283.96,81.23L283.04,76.89L284.97,76.25L289.73,77.00L292.59,77.27L294.89,76.54L297.48,77.49L300.90,79.10L301.74,80.17L306.69,80.38L306.61,82.72L307.53,86.23L310.07,86.66L312.08,88.30L316.11,86.76L318.76,83.69L320.60,82.40L322.76,84.88L326.38,88.42L329.45,91.76L328.34,93.50L332.03,95.07L334.53,96.66L338.96,97.37L340.74,98.26L341.84,100.61L344.01,100.98L345.12,102.03L345.32,105.15L343.31,106.19L341.31,107.17L336.74,108.15L333.24,110.44L328.55,110.89L322.60,110.30L318.44,110.28L315.56,110.48L313.23,112.47L309.69,113.70L305.68,117.38L302.49,119.94L304.85,119.48L309.31,115.83L315.13,113.52L319.29,113.24L321.75,114.60L319.12,116.47L320.00,119.46L320.91,121.56L324.52,122.95L329.11,122.54L331.89,119.42L332.09,121.44L333.88,122.44L330.45,124.26L324.29,125.92L321.54,127.04L318.43,129.04L316.32,128.84L316.22,126.49L321.04,124.19L316.59,124.28L313.51,124.62L313.99,125.53L311.02,126.87L308.17,127.83L305.23,128.66L303.64,130.47L303.29,130.93L303.26,132.40L304.18,133.87L305.33,133.94L305.04,132.93L305.88,133.55L305.65,134.34L303.78,134.79L302.44,134.74L300.39,135.22L299.18,135.36L297.57,135.50L295.25,136.30L299.33,135.78L300.15,136.31L296.26,137.14L294.49,137.14L294.58,136.80L293.73,137.57L294.55,137.70L293.95,139.70L291.93,141.83L291.72,141.12L291.11,140.98L290.20,140.28L290.78,141.78L291.43,142.27L291.51,143.32L290.62,144.40L289.06,146.62L288.80,146.51L289.66,144.62L288.24,143.56L287.92,141.25L287.38,142.45L287.97,144.21L286.22,143.80L288.05,144.67L288.17,147.32L288.97,147.51L289.26,148.47L289.65,151.25L287.88,153.31L285.01,154.13L283.18,155.76L281.79,155.94L280.39,156.96L279.99,157.89L276.94,159.70L275.38,161.02L274.07,162.67L273.64,164.64L274.13,166.57L275.06,168.94L276.29,170.91L276.31,172.11L277.62,175.33L277.53,177.21L277.41,178.29L276.72,179.98L275.89,180.33L274.52,180.00L274.08,178.78L273.03,178.14L271.56,175.75L270.26,173.62L269.85,172.54L270.42,170.69L269.64,169.17L267.47,166.84L266.39,166.42L263.59,167.68L263.09,167.54L261.74,166.24L260.00,165.56L256.86,165.90L254.40,165.60L252.28,165.79L251.10,166.18L251.63,166.96L251.58,168.09L252.17,168.64L251.64,169.00L250.61,168.59L249.57,169.12L247.56,169.03L245.48,167.56L243.06,167.91L241.04,167.27L239.31,167.46L236.97,168.11L234.44,170.17L231.68,171.37L230.17,172.69L229.53,173.94L229.50,175.86L229.64,177.19L230.17,178.14L230.17,178.14L230.16,178.15L229.09,180.58L228.60,182.58L228.40,186.30L228.13,187.65L228.61,189.17L229.48,190.52L230.03,192.68L231.87,194.75L232.52,196.33L233.61,197.70L236.56,198.44L237.71,199.60L240.14,198.82L242.26,198.54L244.34,198.04L246.09,197.57L247.86,196.43L248.52,194.81L248.75,192.48L249.23,191.67L251.11,190.94L254.04,190.30L256.50,190.39L258.19,190.16L258.86,190.75L258.76,192.08L257.27,193.73L256.61,195.43L257.12,195.91L256.70,197.11L256.01,199.28L255.30,198.56L254.72,198.61L254.73,199.02L255.26,199.03L255.21,199.79L254.76,200.99L255.01,201.42L254.71,202.41L254.89,202.68L254.57,204.08L254.02,204.82L253.52,204.91L252.97,205.87L253.88,206.37L254.12,205.96L254.93,206.31L255.22,206.42L255.83,205.93L256.62,205.89L256.88,206.12L257.31,205.98L258.60,206.23L259.89,206.16L260.78,205.85L261.11,205.54L261.99,205.68L262.66,205.87L263.38,205.81L263.93,205.57L265.20,205.95L265.64,206.01L266.49,206.53L267.29,207.16L268.30,207.58L269.04,208.34L268.80,208.61L268.66,209.23L268.94,210.25L268.30,211.19L268.00,212.31L267.91,213.54L268.06,214.25L268.13,215.50L267.71,215.78L267.45,216.96L267.64,217.70L267.07,218.41L267.20,219.16L267.62,219.61L268.33,221.12L269.40,222.24L270.70,223.43L271.70,224.42L271.65,225.01L272.75,225.14L273.02,224.91L273.78,225.59L275.15,225.39L276.33,224.69L278.01,224.13L278.96,223.30L280.50,223.46L280.39,223.74L281.94,223.83L283.18,224.31L284.08,225.15L285.13,225.92L286.56,226.00L288.65,224.06L289.79,223.77L289.82,222.85L290.33,220.50L291.93,219.21L293.68,219.16L293.90,218.58L296.07,218.81L298.26,217.41L299.34,216.79L300.68,215.45L301.67,215.62L302.40,216.35L301.86,217.29L301.78,217.94L300.15,218.27L301.05,219.53L301.02,220.98L299.79,222.60L300.85,224.80L302.04,224.62L302.67,222.61L301.81,221.63L301.67,219.53L305.12,218.40L304.74,217.09L305.71,216.22L306.71,218.17L308.66,218.21L310.46,219.76L310.57,220.68L313.07,220.71L316.03,220.42L317.62,221.66L319.75,222.01L321.31,221.14L321.34,220.44L324.78,220.27L328.11,220.23L325.75,221.05L326.70,222.37L328.92,222.57L331.03,223.94L331.47,226.17L332.92,226.10L334.00,226.76L335.83,227.78L337.55,229.59L337.63,231.02L338.67,231.09L340.16,232.44L341.26,233.41L344.59,233.96L344.88,233.46L347.13,233.26L350.12,234.01L351.06,234.32L353.11,234.97L356.05,237.32L356.51,238.45L357.45,238.32L358.14,239.86L359.70,244.72L361.18,245.18L361.26,247.09L359.17,249.38L360.03,250.22L364.94,250.65L365.04,253.44L367.15,251.62L370.65,252.61L375.26,254.31L376.62,255.94L376.16,257.48L379.39,256.62L384.80,258.09L388.95,257.98L393.05,260.28L396.60,263.39L398.74,264.19L401.12,264.30L402.12,265.18L403.07,268.72L403.53,270.40L402.42,274.99L401.01,276.80L397.09,280.67L395.32,283.81L393.27,286.22L392.57,286.27L391.80,288.31L391.99,293.52L391.22,297.80L390.92,299.63L390.05,300.73L389.55,304.44L386.74,308.07L386.26,310.94L384.02,312.14L383.37,313.81L380.35,313.80L375.98,314.87L374.02,316.10L370.91,316.91L367.64,319.13L365.29,321.88L364.89,323.95L365.35,325.49L364.83,328.29L364.20,329.65L362.26,331.18L359.18,336.07L356.73,338.27L354.84,339.57L353.58,342.21L351.74,343.80L350.54,345.55L347.40,347.09L345.35,346.54L343.85,346.83L341.28,345.64L339.39,345.73L337.70,344.19L337.51,345.64L341.04,348.02L340.66,349.94L342.40,351.15L342.25,352.50L339.59,356.07L335.47,357.56L329.90,358.13L326.84,357.85L327.43,359.51L326.86,361.59L327.37,362.99L325.71,363.97L322.86,364.35L320.19,363.34L319.12,364.07L319.50,366.83L321.38,367.66L322.90,366.79L323.73,368.23L321.17,369.09L318.94,370.82L318.53,373.61L317.87,375.10L315.25,375.11L313.07,376.53L312.28,378.62L315.01,380.65L317.66,381.21L316.71,383.70L313.43,385.27L311.62,388.53L309.09,389.62L307.95,390.92L308.85,393.81L310.69,395.42L309.52,395.28L307.05,395.26L305.71,395.94L303.21,396.94L302.76,399.54L301.58,399.60L298.45,398.70L295.27,396.76L291.81,395.17L290.94,393.41L291.73,391.79L290.33,389.94L289.98,385.20L291.16,382.53L294.09,380.39L289.88,379.58L292.52,377.12L293.47,372.51L296.55,373.49L298.01,367.73L296.14,366.99L295.27,370.46L293.52,370.07L294.39,366.10L295.34,360.95L296.62,359.05L295.82,356.34L295.59,353.21L296.76,353.12L298.46,348.64L300.38,344.19L301.56,340.05L300.92,335.89L301.75,333.60L301.42,330.17L303.04,326.78L303.54,321.41L304.43,315.64L305.30,309.43L305.10,304.88L304.52,300.97L301.74,299.37L301.49,298.23L295.99,295.44L291.01,292.40L288.86,290.69L287.71,288.40L288.17,287.60L285.82,283.95L283.08,278.83L280.45,273.30L279.32,272.03L278.44,269.98L276.28,268.17L274.31,267.05L275.20,265.81L273.86,263.16L274.72,261.21L276.94,259.46L278.42,257.38L277.82,256.17L276.75,257.46L275.09,256.24L275.65,255.46L275.18,252.94L276.16,252.52L276.67,250.79L277.72,249.00L277.53,247.87L279.05,247.27L280.96,246.16L280.58,245.30L281.62,245.09L281.49,243.70L282.15,242.70L283.52,242.51L284.69,240.76L285.76,239.31L284.73,238.65L285.26,237.03L284.63,234.49L285.23,233.76L284.79,231.41L283.66,229.93L282.74,229.13L282.14,227.63L282.83,226.89L282.12,226.70L281.61,225.78L280.22,225.01L279.01,225.19L278.44,226.15L277.32,226.85L276.71,226.95L276.44,227.53L277.77,229.03L277.01,229.39L276.61,229.80L275.32,229.94L274.83,228.28L274.47,228.76L273.56,228.59L273.00,227.48L271.86,227.29L271.14,226.97L269.94,226.97L269.86,227.57L269.54,227.15L268.03,226.54L267.47,225.95L267.79,225.47L267.69,224.86L266.92,224.19L265.82,223.65L264.87,223.29L264.69,222.48L263.96,221.98L264.14,222.79L263.58,223.45L262.95,222.68L262.05,222.41L261.67,221.85L261.69,221.00L262.06,220.13L261.27,219.74L261.91,219.20L260.95,218.32L259.65,217.20L259.04,216.27L257.87,215.39L256.48,214.14L256.78,213.71L257.24,214.13L257.45,213.93L256.97,213.06L256.13,212.82L255.82,213.47L254.21,213.43L253.21,213.17L252.06,212.61L250.52,212.44L249.73,211.85L248.31,211.36L246.58,211.31L245.31,210.76L243.81,209.61L240.67,206.62L239.24,205.72L236.97,205.00L235.42,205.20L233.18,206.24L231.79,206.52L229.82,205.79L227.74,205.26L225.15,203.98L223.06,203.59L219.92,202.30L217.59,200.97L216.89,200.23L215.34,200.07L212.50,199.19L211.34,197.92L208.36,196.34L206.96,194.59L206.30,193.24L207.23,192.97L206.94,192.18L207.58,191.45L207.59,190.49L206.66,189.25L206.41,188.14L205.48,186.74L203.03,183.98L200.23,181.81L198.88,180.08L196.50,178.94L195.99,178.26L196.41,176.55L195.00,175.90L193.36,174.55L192.66,172.61L191.17,172.39L189.56,170.92L188.25,169.57L188.13,168.70L186.64,166.61L185.66,164.48L185.70,163.41L183.69,162.31L182.76,162.43L181.18,161.67L180.73,162.80L181.19,164.13L181.46,166.21L182.41,167.36L184.48,169.27L184.93,169.93L185.36,170.13L185.72,171.08L186.22,171.04L186.77,172.83L187.62,173.54L188.21,174.52L189.95,175.94L190.88,178.52L191.70,179.74L192.47,181.04L192.62,182.50L193.96,182.60L195.08,183.86L196.09,185.10L196.02,185.60L194.85,186.62L194.36,186.60L193.63,184.91L191.81,183.33L189.80,181.99L188.38,181.28L188.48,179.25L188.05,177.74L186.73,176.88L184.82,175.64L184.45,176.00L183.75,175.28L182.04,174.61L180.40,172.99L180.61,172.78L181.75,172.94L182.78,171.90L182.88,170.65L180.74,168.67L179.11,167.90L178.09,166.16L177.06,164.34L175.77,162.12L174.65,159.62L174.18,158.20L172.38,156.61L171.08,156.28L170.78,155.48L169.22,155.34L168.23,154.59L165.65,154.31L164.94,153.87L164.60,152.34L161.90,149.55L159.59,145.69L159.69,145.05L158.46,144.13L156.31,141.80L155.93,139.54L154.45,138.02L155.06,135.72L154.96,133.33L154.08,131.21L155.16,128.59L155.84,123.55L155.33,119.82L154.46,117.44L153.65,116.15L153.98,115.61L158.00,116.56L159.48,119.18L160.17,118.44L159.72,116.17L158.78,113.89L158.41,113.88L153.03,111.15L151.04,109.95L146.01,108.80L144.46,106.34L144.86,104.64L141.31,103.46L140.82,101.22L137.46,99.20L137.40,97.77L135.87,96.73L133.42,95.84L132.64,93.42L129.06,91.17L127.56,88.55L124.89,88.37L120.48,88.30L117.22,87.50L111.48,84.62L108.82,84.09L103.96,83.10L100.11,83.34L94.65,82.06L91.35,80.88L88.27,81.46L88.84,83.39L87.30,83.57L84.09,84.15L81.64,85.09L78.57,85.68L78.17,84.04L79.42,81.32L82.37,80.46L81.61,79.77L78.07,81.31L76.17,83.16L72.17,85.14L74.20,86.49L71.58,88.48L68.59,89.64L65.81,90.49L65.12,91.72L60.79,93.16L59.91,94.46L56.66,95.65L54.75,95.43L52.16,96.21L49.34,97.15L47.03,98.08L42.26,98.88L41.83,98.41L44.87,97.11L47.58,96.26L50.54,94.74L53.99,94.42L55.36,93.28L59.21,91.62L59.83,91.06L61.88,90.08L62.36,87.98L63.77,86.34L60.57,87.18L59.67,86.70L58.17,87.71L56.36,86.30L55.61,87.30L54.57,85.91L51.79,87.03L50.09,87.02L49.85,85.37L50.35,84.35L48.56,83.36L44.95,83.89L42.61,82.59L40.70,81.92L40.69,80.35L38.55,79.17L39.63,77.57L41.89,76.02L42.88,74.59L45.13,74.39L47.04,74.83L49.28,73.49L51.29,73.73L53.41,72.87L52.89,71.60L51.34,71.10L53.40,70.03L51.69,70.06L48.74,70.67L47.89,71.28L45.70,70.67L41.78,70.98L37.71,70.31L36.54,69.20L33.03,67.58L36.93,66.42L43.13,65.06L45.41,65.06L45.03,66.45L50.90,66.34L48.64,64.62L45.22,63.57L43.25,62.18L40.58,60.99L36.77,60.11L38.32,58.66L43.25,58.57L46.75,57.30L47.42,55.95L50.25,54.63L52.96,54.31L58.22,53.08L60.78,53.26L65.05,51.78L69.26,52.37L71.27,53.62L72.50,53.08L77.19,53.25L77.03,53.89L81.28,54.36L84.11,54.08L89.96,54.96L95.31,55.22L97.44,55.58L101.14,55.13L105.35,55.97L108.37,56.36L113.55,57.02L117.93,58.36L120.82,58.62L123.26,57.46L126.63,56.59L130.75,56.93L134.91,55.71L139.46,55.02L141.37,56.17L143.44,55.52L144.06,54.21L145.98,54.51L150.68,57.00L154.38,55.12L154.75,57.22L158.16,56.77L159.21,55.96L162.58,56.12L166.83,57.28L173.33,58.30L177.15,58.77L179.87,58.59L183.62,60.00L179.71,61.38L184.73,61.98L192.23,61.65L194.59,61.16L197.56,62.83L200.58,61.42L197.74,60.25L199.54,59.29L202.92,59.17L205.14,58.89L207.38,59.55L210.17,61.06L213.27,60.84L218.18,62.09L222.49,61.65L226.55,61.72L226.23,59.99L228.70,59.50L233.00,60.45L232.98,63.07L234.75,60.86L236.99,60.93L238.24,58.14L235.27,56.43L232.02,55.31L232.25,52.24L235.53,50.22L239.19,50.67L242.01,51.89L245.78,55.02L243.31,56.39L248.48,56.95Z","M182.87,46.88L181.48,48.19L187.66,47.35L191.53,48.75L194.67,47.33L197.20,48.24L199.48,50.97L200.87,49.82L198.90,46.97L201.34,46.57L204.10,47.01L207.22,48.13L208.96,50.84L209.82,52.80L214.49,54.17L219.50,55.49L219.20,56.71L214.64,56.93L216.41,58.00L215.47,59.02L210.44,58.58L205.67,57.83L202.44,58.00L197.22,58.94L188.98,59.43L185.24,59.62L183.74,58.31L179.94,57.56L177.48,57.87L174.06,55.67L175.90,55.37L180.19,54.90L184.11,55.02L187.73,54.54L182.36,53.89L176.43,54.11L172.49,54.05L171.02,53.03L177.46,51.92L173.18,51.96L168.33,51.23L170.66,49.14L172.59,48.04L180.03,46.35L182.87,46.88Z","M209.72,46.06L207.28,47.89L202.94,45.94L203.89,45.56L207.61,45.44L209.72,46.06Z","M287.94,46.94L288.19,47.70L285.24,47.62L282.25,47.56L279.20,47.94L278.40,47.77L275.34,46.30L275.46,45.30L276.80,45.11L283.15,45.41L287.94,46.94Z","M259.55,46.78L261.74,48.52L264.31,46.28L271.35,45.14L276.11,48.01L275.70,49.83L281.19,49.02L283.82,47.92L289.98,49.32L293.81,50.65L294.17,51.86L299.33,51.23L302.22,53.00L308.93,54.10L311.35,55.22L313.97,57.82L308.87,59.11L315.42,60.92L319.83,61.53L323.82,64.09L328.19,64.27L327.32,66.22L322.45,69.45L319.03,68.26L314.66,65.59L311.07,65.94L310.72,67.53L313.64,69.14L317.41,70.42L318.56,71.16L320.36,73.91L319.41,75.91L315.90,75.15L308.94,72.93L312.86,75.32L315.75,77.00L316.21,77.97L308.67,76.86L302.71,75.25L299.35,73.89L300.32,73.11L296.17,71.68L292.13,70.34L292.17,71.14L284.14,71.58L281.79,70.63L283.62,68.59L288.84,68.54L294.56,68.18L293.63,67.19L294.60,65.80L298.19,63.10L297.43,61.87L296.36,60.92L292.10,59.57L286.47,58.63L288.25,57.92L285.31,56.20L282.86,56.04L280.67,55.09L279.19,55.91L274.15,56.27L264.04,55.65L258.17,54.83L253.66,54.41L251.35,53.44L254.26,52.17L250.31,52.16L249.43,49.35L251.57,46.86L254.42,45.73L261.59,44.99L259.55,46.78Z","M221.23,44.88L224.54,45.46L229.50,45.11L230.22,45.92L227.63,47.25L231.83,48.44L231.33,50.94L226.78,52.02L224.10,51.79L222.18,50.73L215.28,48.58L215.33,47.69L221.00,48.04L217.94,46.22L221.23,44.88Z","M898.90,46.63L894.69,46.65L888.99,46.34L888.51,46.19L891.14,45.10L894.62,44.84L898.56,45.90L898.90,46.63Z","M241.12,47.86L238.14,49.93L234.97,49.83L233.24,47.39L233.28,46.01L234.73,44.83L237.49,44.07L243.28,44.17L248.58,44.84L244.43,47.32L241.12,47.86Z","M165.39,51.67L158.08,53.05L156.61,51.83L150.20,50.36L151.13,49.46L153.31,47.16L155.72,45.33L153.01,43.63L162.39,43.20L166.36,43.77L173.46,43.93L176.15,44.73L179.14,45.90L175.64,46.60L168.83,48.56L165.39,50.50L165.39,51.67Z","M918.70,41.43L915.49,42.53L911.05,42.28L905.89,41.19L906.55,40.29L911.73,40.71L918.70,41.43Z","M239.96,41.72L238.45,42.80L234.42,42.59L231.05,41.87L232.53,40.62L236.53,39.87L238.95,40.84L239.96,41.72Z","M903.02,40.10L900.83,42.17L890.59,42.09L885.99,42.75L880.48,40.94L881.98,39.03L885.64,38.51L892.98,38.63L903.02,40.10Z","M226.39,36.89L228.51,38.18L228.60,39.60L227.33,41.67L222.75,41.95L219.77,41.51L219.83,39.89L215.27,40.10L215.10,37.95L218.08,38.04L222.27,37.09L226.18,37.25L226.39,36.89Z","M199.41,38.33L200.50,39.32L202.98,38.85L205.89,38.97L206.38,40.33L204.68,41.65L195.28,42.08L188.27,43.29L184.04,43.35L183.69,42.44L189.46,41.22L176.91,41.55L173.03,41.05L176.82,38.34L179.43,37.56L187.25,38.50L192.18,40.14L197.04,40.35L193.06,37.69L195.61,36.68L198.48,37.00L199.41,38.33Z","M659.82,53.55L658.18,53.80L649.10,53.44L648.37,52.20L643.34,51.46L642.93,49.96L645.77,49.36L645.68,47.85L651.19,45.48L648.63,45.14L655.28,42.70L654.53,41.44L660.75,39.97L669.92,38.19L679.16,37.67L683.92,36.64L689.33,36.28L691.26,37.38L689.39,38.24L679.55,39.62L671.07,40.94L662.44,43.59L658.30,46.30L653.94,48.97L654.51,51.28L659.82,53.55Z","M236.99,35.84L240.07,36.73L245.54,36.73L247.94,37.64L247.31,38.68L250.49,39.31L252.26,39.97L256.00,40.09L260.06,40.33L264.47,39.72L270.13,39.49L274.64,39.68L277.62,40.73L278.24,41.88L276.51,42.62L272.36,43.22L268.81,42.88L260.84,43.31L255.14,43.35L250.65,43.01L243.27,42.12L242.31,40.59L241.97,39.21L239.18,38.00L233.44,37.66L230.22,36.80L231.26,35.66L236.99,35.84Z","M177.23,34.32L176.84,36.45L174.71,37.42L172.11,37.55L166.95,38.74L162.50,39.17L158.74,38.57L158.74,38.57L163.45,36.49L169.16,34.69L173.42,34.73L177.23,34.32Z","M797.14,36.18L797.89,37.56L800.43,36.88L808.55,36.92L814.81,38.27L817.04,39.31L816.35,40.76L813.28,41.58L805.98,43.12L803.89,43.94L807.33,44.33L811.44,45.03L813.94,44.51L815.36,46.29L816.58,45.57L821.02,45.13L829.93,45.59L830.61,46.89L842.22,47.30L842.38,45.18L848.28,45.67L852.71,45.65L857.20,47.11L858.48,48.89L856.83,50.06L860.32,52.24L864.69,53.37L867.37,50.45L871.83,51.70L876.56,50.96L881.94,51.81L883.98,51.03L888.53,51.42L886.52,48.84L890.19,47.64L915.28,49.44L917.64,51.09L924.91,53.22L936.13,52.69L941.66,53.15L943.97,54.30L943.64,56.33L947.06,57.12L950.78,56.55L955.70,56.48L960.95,57.02L966.21,56.71L971.05,59.18L974.49,58.30L972.25,56.52L973.48,55.29L982.34,56.06L988.12,55.90L996.11,57.22L1000.00,58.43L1000.00,69.50L999.98,69.52L996.41,70.74L992.81,70.53L995.31,72.01L996.97,74.30L998.25,75.05L998.57,76.20L997.86,76.93L992.68,76.33L984.91,78.42L982.44,78.74L978.19,80.69L974.16,82.40L973.14,83.66L969.17,81.74L961.93,83.92L960.67,82.89L957.99,84.08L954.28,83.70L953.38,85.52L950.05,88.21L950.15,89.34L953.31,89.96L952.94,94.00L950.36,94.10L949.17,96.43L950.33,97.62L945.47,99.04L944.50,102.21L940.36,102.89L939.53,105.71L935.53,108.30L934.50,106.39L933.31,102.34L931.76,96.16L933.10,92.31L935.44,90.65L935.58,89.36L939.90,88.73L944.86,85.24L949.64,82.38L954.64,80.16L956.87,76.25L953.50,76.48L951.83,78.77L944.78,81.82L942.51,78.41L935.34,79.35L928.38,84.00L930.68,85.71L924.48,86.43L920.18,86.72L920.38,84.71L916.07,84.29L912.62,85.65L904.13,85.18L894.99,86.00L886.00,91.42L875.35,97.97L879.73,98.32L881.09,100.06L883.79,100.68L885.57,99.29L888.62,99.47L892.63,102.53L892.72,104.89L890.55,107.67L890.31,110.98L889.06,115.43L884.87,119.45L883.94,121.37L880.17,124.60L876.43,127.81L874.64,129.45L870.94,131.08L869.18,131.12L867.44,129.77L863.71,131.80L863.28,132.72L862.22,132.56L861.02,133.50L860.19,134.44L860.29,136.44L858.86,137.05L858.36,137.54L857.32,138.36L855.47,138.82L854.26,139.56L854.17,140.77L853.85,141.07L854.95,141.53L856.53,142.74L858.92,146.02L859.61,147.82L859.63,151.02L858.59,152.55L856.07,153.08L853.85,154.23L851.35,154.47L851.04,152.96L851.55,150.88L850.33,147.98L852.39,147.52L850.49,145.14L849.14,144.61L848.80,145.13L847.99,145.36L847.89,144.84L847.17,144.59L846.42,144.14L847.18,142.92L847.84,142.59L847.59,142.09L848.30,140.59L848.11,140.13L846.49,139.83L845.18,139.09L841.30,139.89L839.25,141.19L836.26,141.95L837.74,140.66L837.16,139.58L839.36,137.72L837.89,136.26L835.47,137.24L832.33,139.17L830.62,140.97L827.90,141.10L826.48,142.40L827.94,144.27L830.22,144.73L830.31,145.98L832.51,146.79L835.62,144.80L838.09,145.89L839.88,145.96L840.33,147.41L836.40,148.19L835.10,149.69L832.40,151.08L830.98,153.03L833.97,154.55L835.06,157.29L836.75,159.83L838.63,161.97L838.59,164.03L836.85,164.79L837.51,166.27L839.14,167.13L838.72,169.39L838.01,171.60L836.46,171.85L834.43,174.85L832.18,178.50L829.60,181.81L825.78,184.38L821.92,186.71L818.79,187.03L817.09,188.27L816.13,187.37L814.56,188.75L810.68,190.14L807.74,190.56L806.79,193.50L805.25,193.66L804.52,191.64L805.18,190.57L801.45,189.68L800.14,190.13L796.43,192.51L794.12,195.13L793.51,197.06L795.63,199.99L798.23,203.62L800.75,205.33L802.44,207.56L803.71,212.71L803.33,217.59L801.02,219.42L797.84,221.21L795.57,223.53L792.11,226.11L791.10,224.33L791.88,222.45L789.82,220.87L787.49,220.46L786.36,219.02L784.96,216.15L782.46,214.87L780.09,214.92L780.50,212.74L778.05,212.76L777.83,215.81L776.33,219.87L775.43,222.32L775.62,224.34L777.43,224.42L778.55,226.96L779.05,229.36L780.60,230.95L782.29,231.28L783.73,232.72L784.36,232.98L786.00,234.65L787.17,236.51L787.33,238.38L787.03,239.65L787.30,240.60L787.51,242.25L788.49,243.01L789.58,245.47L789.52,246.41L787.55,246.59L784.93,244.54L781.64,242.33L781.32,240.92L779.71,239.06L779.33,236.76L778.32,235.24L778.63,233.22L778.02,232.04L776.92,230.98L776.44,229.60L774.97,228.03L773.62,226.72L773.17,228.35L772.64,226.81L772.94,225.07L773.76,222.41L773.49,220.35L774.35,218.22L773.41,216.57L773.64,213.55L772.51,212.11L771.60,208.79L771.10,205.28L769.90,202.98L768.07,204.37L764.91,206.35L763.36,206.10L761.64,205.45L762.59,202.01L762.01,199.41L759.84,196.20L760.18,195.20L758.55,194.85L756.58,192.58L755.79,191.13L755.63,189.72L755.10,188.38L753.94,186.76L751.38,186.65L751.63,187.80L750.76,189.34L749.58,188.78L749.17,189.29L748.39,188.98L747.31,188.73L746.91,189.75L745.02,189.71L741.60,190.29L741.76,192.38L740.28,194.02L736.28,195.89L733.17,199.16L731.08,200.91L728.31,202.73L728.31,204.01L726.92,204.69L724.42,205.69L723.12,205.84L722.29,207.95L722.87,211.57L723.02,213.87L721.84,216.51L721.83,221.23L720.39,221.36L719.13,223.48L719.97,224.40L717.44,225.19L716.50,227.08L715.39,227.87L712.76,225.28L711.47,221.39L710.41,218.59L709.43,217.27L707.96,214.61L707.27,211.13L706.79,209.40L704.26,205.58L703.11,200.20L702.28,196.64L702.29,193.28L701.75,190.68L697.71,192.34L695.75,192.01L692.12,188.64L693.46,187.64L692.64,186.55L689.38,184.19L687.34,183.49L686.52,181.49L684.37,179.37L679.25,179.90L674.74,179.95L670.83,180.34L665.60,179.50L662.57,178.86L659.44,178.50L658.25,175.09L656.92,174.60L654.79,175.10L651.99,176.44L648.59,175.52L645.79,173.39L643.11,172.60L641.26,169.96L639.21,166.26L637.71,166.71L635.95,165.79L634.91,166.87L633.26,166.73L633.84,167.96L633.59,168.59L634.49,170.69L635.58,173.08L636.94,173.72L637.42,174.69L639.31,175.86L639.48,177.01L639.20,177.93L639.56,178.87L640.35,179.64L640.72,180.56L641.14,181.24L640.96,179.22L641.70,177.76L642.46,177.46L643.30,178.33L643.35,179.96L642.75,181.59L643.28,182.65L643.77,182.52L643.87,183.28L646.05,182.84L648.34,182.91L650.02,182.99L651.93,181.12L654.00,179.34L655.75,177.62L656.56,176.68L656.90,176.92L656.64,178.07L656.28,178.57L656.66,180.76L657.90,182.66L659.45,183.67L661.49,184.03L663.14,184.54L664.39,186.13L665.14,187.05L666.13,187.41L666.13,188.03L665.12,189.68L664.67,190.46L663.50,191.35L662.47,193.25L661.21,193.11L660.63,193.77L660.18,195.18L660.52,197.03L660.26,197.38L658.98,197.37L657.25,198.40L656.98,199.76L656.34,200.34L654.62,200.32L653.53,201.02L653.54,202.14L652.20,202.91L650.66,202.65L648.81,203.59L647.52,203.75L645.51,204.49L644.98,205.73L644.91,206.67L642.15,207.85L637.71,209.14L635.22,211.10L634.00,211.26L633.16,211.09L631.54,212.24L629.77,212.78L627.44,212.92L626.74,213.08L626.13,213.81L625.40,214.02L624.97,214.72L623.60,214.66L622.71,215.04L620.79,214.90L620.06,213.28L620.14,211.76L619.69,210.94L619.15,208.88L618.35,207.74L618.90,207.61L618.62,206.34L618.95,205.80L618.83,204.59L618.47,203.40L617.63,202.57L617.42,201.46L615.98,200.46L614.50,198.13L613.72,195.87L611.80,193.96L610.56,193.50L608.72,190.86L608.40,188.93L608.52,187.28L606.92,184.20L605.62,183.11L604.12,182.54L603.21,180.95L603.36,180.32L602.59,178.88L601.78,178.26L600.69,176.19L599.00,173.95L597.58,172.05L596.20,172.06L596.63,170.53L596.76,169.56L597.10,168.45L597.01,168.05L596.23,169.17L595.63,171.27L594.87,172.71L594.23,173.20L593.30,172.30L592.05,171.06L590.06,167.08L589.78,167.33L590.93,170.26L592.64,173.06L594.74,177.38L595.76,178.89L596.65,180.46L599.15,183.54L598.59,184.02L598.68,185.83L601.92,188.32L602.41,188.89L603.30,191.61L602.69,192.12L603.10,194.98L604.12,198.29L605.17,198.98L606.69,200.00L608.31,203.22L609.07,205.77L610.60,207.12L614.39,209.75L615.93,211.33L617.44,212.93L618.30,213.89L619.67,214.72L620.33,215.58L620.24,216.74L618.66,217.40L619.85,218.16L620.75,218.67L621.30,219.82L622.55,220.98L623.93,220.99L626.55,220.28L629.57,219.95L632.02,219.09L633.39,218.91L634.39,218.40L635.97,218.30L636.86,218.25L638.14,217.84L639.61,217.56L640.92,216.61L641.98,216.60L642.04,217.37L641.78,218.98L641.79,220.44L641.21,221.45L640.42,224.45L639.09,227.55L637.37,231.10L634.98,235.17L632.61,238.28L629.35,242.07L626.57,244.32L622.41,247.08L619.82,249.19L616.78,252.55L616.14,254.02L615.51,254.68L613.57,255.78L612.88,256.94L611.84,257.15L611.45,259.10L610.56,260.23L610.01,262.07L608.90,262.99L607.61,266.41L607.78,267.99L609.56,269.00L609.64,269.72L608.87,271.40L609.03,272.24L608.85,273.57L609.82,275.31L610.97,278.05L611.99,278.66L612.44,279.90L612.33,282.67L612.67,285.11L612.78,289.45L613.27,290.81L612.44,292.80L611.36,294.72L609.59,296.45L607.05,297.50L603.92,298.85L600.78,301.83L599.71,302.34L597.77,304.31L596.63,304.96L596.39,306.94L597.71,309.04L598.26,310.67L598.29,311.50L598.79,311.36L598.71,314.09L598.26,315.38L598.91,315.85L598.50,317.01L597.34,318.00L595.04,318.93L591.70,320.44L590.49,321.46L590.72,322.63L591.43,322.82L591.19,324.28L590.50,326.31L590.17,328.61L589.45,329.87L587.56,331.27L587.02,331.67L585.84,333.08L585.06,334.51L583.49,336.50L580.35,339.37L578.39,341.03L576.29,342.30L573.39,343.37L571.97,343.52L571.61,344.29L569.92,343.88L568.55,344.41L565.54,343.87L563.86,344.21L562.71,344.07L559.84,345.16L557.47,345.60L555.75,346.65L554.49,346.72L553.31,345.73L552.38,345.68L551.18,344.44L551.05,344.82L550.68,344.08L550.69,342.45L549.79,340.59L550.69,340.08L550.62,337.95L548.80,335.35L547.40,333.00L547.40,332.99L545.40,329.38L543.34,327.28L542.25,325.25L541.64,322.55L540.95,320.54L540.02,316.26L539.96,312.94L539.60,311.42L538.52,310.27L537.09,307.98L535.63,304.65L535.02,302.90L532.76,300.19L532.60,298.06L532.33,296.31L532.72,293.87L533.68,291.33L533.82,290.14L534.72,287.63L535.38,286.49L536.98,284.68L537.87,283.44L538.16,281.38L538.02,279.81L537.19,278.82L536.45,277.13L535.77,275.46L535.91,274.89L536.77,273.79L535.93,271.10L535.36,269.24L533.97,267.48L534.23,266.94L533.84,266.08L533.10,263.99L530.82,261.05L527.96,258.25L526.13,255.96L524.44,253.09L524.53,252.16L525.13,251.28L525.81,249.25L526.37,247.19L525.85,246.78L526.80,243.66L527.21,241.46L526.12,239.63L524.86,239.16L524.29,237.91L523.58,237.51L523.61,236.74L520.73,237.74L519.67,237.60L518.61,238.22L516.38,238.16L514.90,236.42L513.98,234.41L512.02,232.58L509.93,232.62L507.48,232.61L505.18,232.94L502.94,233.53L498.59,235.16L497.05,236.11L494.54,236.92L492.07,236.13L490.80,236.15L488.86,235.61L487.08,235.64L483.79,236.13L481.86,236.93L479.11,237.95L478.58,237.88L477.85,237.90L474.99,236.58L472.46,234.46L470.10,232.94L468.23,231.15L467.48,230.94L465.48,229.83L464.03,228.34L463.54,227.32L463.20,225.27L461.99,223.63L460.91,222.54L460.19,222.18L459.50,221.63L459.19,220.40L458.78,219.79L457.97,219.33L456.49,218.17L455.32,217.99L454.68,217.20L454.70,216.78L453.85,216.19L453.67,215.60L453.22,213.47L453.57,212.24L452.43,210.07L451.04,209.08L452.26,208.56L453.61,206.61L454.27,205.18L454.03,203.68L454.80,202.31L455.15,199.70L454.84,196.95L454.51,195.57L454.78,194.19L454.07,192.87L452.60,191.67L452.72,190.49L452.85,189.21L453.92,188.45L454.83,187.00L454.65,186.06L455.60,184.10L457.15,182.34L458.09,181.89L458.82,180.27L458.89,178.79L459.89,177.07L461.74,176.06L463.50,173.22L464.95,172.12L467.53,171.81L469.72,169.91L471.11,169.17L473.43,166.85L472.74,163.40L473.79,161.01L474.16,159.54L475.95,157.67L478.74,156.40L480.80,155.25L482.65,152.37L483.53,150.67L485.57,150.68L487.25,151.86L489.89,151.67L492.77,152.28L493.97,152.31L496.64,150.79L499.65,150.31L501.40,149.16L504.07,148.32L508.78,147.82L513.38,147.60L514.78,148.01L517.39,146.91L520.36,146.89L521.49,147.54L523.39,147.37L526.42,146.25L528.36,146.58L528.28,147.99L530.64,146.97L530.83,147.50L529.44,148.86L529.43,150.15L530.39,150.84L530.02,153.24L528.19,154.64L528.72,156.15L530.16,156.20L530.86,157.52L531.91,157.95L535.18,158.91L536.34,158.67L538.66,159.13L542.35,160.37L543.65,162.84L546.14,163.38L550.06,164.55L553.02,165.93L554.37,165.21L555.70,163.93L555.06,161.80L555.93,160.45L557.93,159.15L559.84,158.77L563.60,159.34L564.55,160.58L565.58,160.59L566.47,161.06L569.23,161.39L569.90,162.31L573.60,162.26L576.27,163.00L579.03,163.82L580.32,164.25L582.45,163.37L583.60,162.57L586.05,162.34L588.02,162.70L588.78,164.07L589.42,163.17L591.65,163.82L593.82,163.98L595.18,163.28L595.99,162.36L595.80,162.21L596.54,160.91L597.10,158.81L597.50,158.11L597.57,158.08L598.56,155.82L599.94,153.86L600.00,153.76L599.74,151.64L600.42,150.50L599.39,149.24L600.45,148.19L598.75,148.43L596.43,147.79L594.52,149.39L590.30,149.70L588.05,148.21L585.06,148.12L584.42,149.27L582.50,149.60L579.81,148.12L576.78,148.17L575.14,145.41L573.11,143.87L574.46,141.71L572.70,140.38L575.78,137.72L580.06,137.61L581.22,135.50L586.52,135.87L589.86,134.07L593.09,133.28L597.69,133.22L602.54,135.18L606.52,136.25L609.76,135.83L612.15,136.07L615.43,134.62L615.84,133.44L615.15,131.54L613.54,130.52L612.00,130.20L610.99,129.35L607.44,127.00L604.28,125.95L601.88,124.32L603.90,123.88L606.20,121.55L604.65,120.45L608.74,119.32L608.67,118.71L606.18,119.16L603.96,119.38L602.11,120.28L599.51,120.43L597.12,121.46L597.28,123.19L598.64,123.86L601.47,123.69L600.93,124.69L597.89,125.17L594.12,126.77L592.57,126.21L593.19,124.90L590.15,124.09L590.64,123.56L593.30,122.63L592.50,122.00L588.18,121.30L587.99,120.26L585.41,120.60L584.38,122.13L582.23,124.19L582.30,124.90L580.95,125.50L580.11,125.24L579.33,128.59L577.89,129.74L576.87,131.73L577.77,133.31L578.10,134.38L580.52,135.28L580.02,135.96L576.72,136.11L575.53,136.97L573.22,138.47L572.34,137.17L572.38,136.60L570.69,136.52L569.24,136.26L565.87,136.98L567.80,138.54L566.39,138.99L564.84,139.00L563.37,137.57L562.85,138.18L563.47,139.84L564.86,141.14L563.81,141.75L565.36,143.03L566.74,143.83L566.78,145.40L564.21,144.67L565.03,146.08L563.26,146.37L564.32,148.83L562.47,148.86L560.19,147.65L559.15,145.43L558.67,143.58L557.58,142.31L556.16,140.72L555.97,139.93L555.50,139.74L555.44,139.12L553.91,138.19L553.66,136.87L553.90,134.97L554.28,134.11L553.81,133.67L553.23,133.46L552.45,132.55L551.25,132.00L548.64,130.97L547.03,129.97L544.49,129.15L542.15,127.10L542.71,126.89L541.45,125.73L541.39,124.79L539.61,124.35L538.76,125.55L537.94,124.62L538.00,123.66L538.10,123.61L538.72,123.36L536.50,122.95L534.25,123.94L534.40,125.32L534.06,126.11L534.97,127.52L537.57,128.92L538.97,131.22L542.06,133.46L544.24,133.44L544.92,134.05L544.14,134.61L546.63,135.61L548.66,136.45L551.05,137.90L551.33,138.42L550.82,139.41L549.27,138.12L546.86,137.66L545.69,139.46L547.70,140.49L547.37,141.94L546.21,142.10L544.73,144.48L543.57,144.70L543.58,143.85L544.14,142.36L544.75,141.77L543.66,140.16L542.82,138.75L541.66,138.41L540.84,137.21L539.06,136.70L537.86,135.59L535.80,135.41L533.63,134.15L531.09,132.35L529.20,130.75L528.33,128.00L526.95,127.68L524.69,126.76L523.41,127.14L521.81,128.42L520.65,128.63L518.14,130.20L512.66,129.45L508.61,130.35L508.29,132.02L508.44,133.63L505.81,135.48L502.25,136.07L502.00,137.00L500.30,138.54L499.23,140.81L500.31,142.39L498.70,143.63L498.10,145.44L496.00,145.99L494.04,148.13L490.51,148.17L487.86,148.12L486.12,149.10L485.06,150.15L483.70,149.92L482.68,148.98L481.89,147.38L479.30,146.95L478.18,147.67L476.71,147.28L475.28,147.59L475.71,145.41L475.44,143.70L474.20,143.45L473.54,142.40L473.76,140.58L474.87,139.57L475.06,138.45L475.64,136.78L475.58,135.60L475.03,134.60L474.90,133.66L475.04,131.69L473.91,130.48L477.84,128.48L481.24,128.98L484.97,128.96L487.92,129.43L490.23,129.29L494.72,129.38L496.15,127.71L496.68,122.18L493.82,119.27L491.77,117.86L487.52,116.79L487.24,114.77L490.85,114.16L495.51,114.88L494.63,111.73L497.25,112.92L503.72,110.76L504.55,108.48L506.98,107.92L509.21,107.37L510.64,106.61L513.07,102.52L516.87,101.36L519.18,101.44L519.72,100.85L522.05,100.70L522.56,101.31L524.45,99.94L523.81,98.90L523.68,97.33L522.56,95.78L522.47,92.94L522.94,92.19L523.73,91.36L526.18,91.19L527.15,90.42L529.39,89.64L529.29,91.07L528.47,91.97L528.81,92.75L530.31,93.17L529.63,94.22L528.81,93.92L526.81,95.92L527.56,97.27L527.61,98.34L530.42,98.99L530.39,99.98L533.21,99.45L534.77,98.69L537.91,99.79L539.22,100.67L541.12,99.86L545.45,98.57L548.95,97.63L551.72,98.10L551.93,98.78L554.61,98.82L555.25,97.59L559.08,96.69L558.49,94.36L558.58,92.27L559.95,90.52L562.57,89.57L564.77,91.65L567.00,91.60L567.54,89.46L567.86,87.82L566.84,88.17L565.07,87.19L564.83,85.59L568.35,84.82L571.85,84.41L574.86,84.87L577.73,84.79L580.88,83.26L577.97,81.93L572.93,82.16L568.05,83.17L563.53,83.76L561.92,82.24L559.23,81.33L559.85,78.60L558.50,76.09L559.82,74.47L562.34,72.73L568.70,69.72L570.55,69.13L570.26,67.96L566.40,66.65L561.62,67.43L558.93,69.37L559.36,71.07L554.94,73.31L549.58,75.70L547.55,79.61L549.53,81.56L552.19,83.11L549.64,86.24L546.75,86.89L545.69,91.55L544.11,94.15L540.74,93.89L539.17,96.09L535.95,96.22L535.07,93.59L532.74,90.44L530.63,86.51L528.77,84.81L523.28,88.02L519.58,88.67L515.74,87.26L514.75,84.27L513.87,77.86L516.42,76.07L523.76,73.74L529.24,70.87L534.33,67.00L541.00,61.64L545.66,59.55L553.29,56.06L559.38,54.85L563.95,54.99L568.19,52.69L573.25,52.82L578.24,52.26L586.93,54.29L583.35,55.04L586.39,56.78L589.26,55.82L593.82,57.50L601.43,58.16L611.92,61.30L614.06,62.62L614.24,64.47L611.16,65.93L606.62,66.67L594.22,64.56L592.18,64.91L596.71,66.94L597.07,71.07L600.64,71.92L602.81,72.64L603.17,71.29L601.44,70.05L603.27,69.05L609.98,70.78L612.32,70.10L610.45,68.06L616.93,65.34L619.49,65.50L622.08,66.47L623.70,64.57L621.38,62.91L622.74,61.25L620.70,59.53L628.47,60.42L630.06,61.97L626.54,62.32L626.56,63.86L628.75,64.81L633.04,64.21L633.72,62.44L639.52,61.11L649.22,58.73L651.31,58.87L648.57,60.55L652.02,60.84L654.01,59.89L659.21,59.82L663.34,58.66L666.50,60.34L669.66,58.50L666.75,56.89L668.19,55.97L676.40,56.81L680.24,57.68L690.31,60.85L692.17,59.40L689.35,57.93L689.26,57.34L685.92,57.07L686.83,55.75L685.35,53.59L685.26,52.70L690.39,50.18L692.21,47.66L694.28,47.11L701.63,47.84L702.21,49.39L699.58,51.64L701.31,52.53L702.20,54.47L701.57,58.28L704.63,59.98L703.44,61.83L698.00,65.78L701.18,66.19L702.28,65.19L705.34,64.47L706.07,63.10L708.48,61.78L706.86,60.20L708.16,58.36L705.12,58.13L704.45,56.59L706.67,53.80L703.06,51.54L708.03,49.66L707.39,47.69L708.77,47.62L710.23,49.17L709.14,51.85L712.11,52.35L710.84,50.35L715.49,49.26L721.26,49.11L726.39,50.69L723.92,48.38L723.64,45.42L728.47,44.86L735.15,44.98L741.17,44.62L738.92,43.17L742.13,41.34L745.32,41.27L750.72,39.89L758.06,39.52L758.98,38.76L766.28,38.50L768.55,39.12L774.78,37.65L779.89,37.69L780.65,36.49L783.31,35.31L789.87,34.17L794.63,35.07L790.85,35.76L797.14,36.18ZM636.42,135.33L637.83,137.30L639.12,137.43L639.98,138.18L637.69,138.40L637.21,140.56L636.73,141.53L635.71,142.18L635.79,143.55L636.67,145.60L639.30,146.18L641.23,147.58L645.18,148.05L649.52,147.32L649.78,146.67L649.27,144.71L649.67,141.80L647.50,140.86L648.22,138.96L646.37,138.80L646.99,136.45L649.61,137.14L652.05,136.25L650.02,134.58L649.23,132.99L646.99,133.70L646.71,135.73L645.84,133.94L645.68,133.26L646.37,132.10L645.84,131.13L642.62,130.19L641.36,127.69L639.83,126.99L639.74,126.08L642.44,126.35L642.55,124.32L644.91,123.87L647.34,124.28L647.84,121.57L647.34,119.85L644.56,119.99L642.20,119.31L638.98,120.53L636.39,121.11L635.13,122.76L632.43,123.22L629.67,126.09L632.20,128.72L631.92,130.59L634.96,133.86L636.42,135.33Z","M239.33,34.67L238.07,34.75L232.86,34.57L232.12,33.79L237.72,33.83L239.66,34.35L239.33,34.67Z","M193.93,34.17L188.75,34.97L184.63,34.08L186.88,33.19L190.93,32.91L194.85,33.34L193.93,34.17Z","M568.68,33.74L562.47,34.88L557.57,34.23L559.49,33.51L557.81,32.63L563.57,32.07L564.67,33.11L568.68,33.74Z","M195.38,31.66L192.00,32.20L187.38,32.20L187.43,31.80L190.28,30.97L191.77,31.10L195.38,31.66Z","M233.80,33.18L229.69,33.75L227.43,33.10L226.24,32.06L226.02,30.91L229.62,31.02L231.24,31.21L234.56,32.17L233.80,33.18Z","M222.06,32.43L223.14,33.59L218.60,33.28L214.03,32.38L207.84,32.28L210.53,31.45L207.17,30.78L206.97,29.72L212.42,30.10L219.93,31.11L222.06,32.43Z","M791.88,32.48L776.22,33.55L781.29,29.91L783.57,29.59L785.66,29.77L792.70,31.35L791.88,32.48Z","M550.70,28.61L559.84,30.68L552.85,31.77L551.31,33.81L548.87,34.34L547.55,36.64L544.20,36.75L538.23,35.05L540.75,34.07L536.59,33.26L531.17,30.92L529.01,28.74L536.59,27.75L538.11,28.72L542.06,28.68L543.12,27.73L547.20,27.64L550.70,28.61Z","M570.69,26.65L576.13,27.62L572.01,29.12L563.96,29.44L555.76,28.98L555.27,28.22L551.28,28.17L548.24,26.89L556.82,26.12L560.86,26.78L563.66,25.95L570.69,26.65Z","M642.04,26.26L638.32,26.62L635.82,26.83L635.43,27.29L632.18,27.75L629.17,27.09L630.76,26.22L624.57,26.14L630.00,25.63L634.22,25.60L634.79,26.35L636.38,25.68L639.00,25.23L643.12,25.83L642.04,26.26Z","M777.61,30.89L771.55,31.23L763.81,30.43L759.20,29.37L757.07,27.38L753.28,26.83L760.49,24.93L766.50,24.30L771.90,25.70L778.30,28.39L777.61,30.89Z","M258.28,28.72L261.63,29.62L257.81,30.45L252.68,32.54L247.77,32.74L242.01,32.38L239.02,31.25L239.07,30.24L241.26,29.50L236.18,29.52L233.12,28.60L231.36,27.34L233.29,26.10L235.21,25.26L238.06,25.06L236.85,24.43L243.31,24.29L246.85,25.77L251.53,26.36L256.08,26.89L258.28,28.72Z","M309.72,19.15L317.15,19.37L323.11,19.72L328.19,20.48L328.07,21.22L321.29,22.42L314.57,22.99L312.06,23.61L318.11,23.59L311.56,25.28L307.03,26.06L302.28,28.33L296.55,28.79L294.78,29.36L286.37,29.66L290.20,30.01L288.28,30.50L290.57,31.87L287.93,32.83L283.64,33.61L282.33,34.70L278.45,35.53L278.83,36.16L283.58,36.05L283.64,36.73L276.22,38.39L268.96,37.63L260.80,38.06L256.67,37.72L251.41,37.58L251.07,36.24L256.20,35.62L254.83,33.61L256.53,33.42L263.95,34.61L260.17,32.83L255.66,32.30L257.91,31.23L262.84,30.56L263.63,29.60L259.70,28.51L258.52,27.08L266.12,27.20L268.31,27.50L272.64,26.49L266.39,26.17L256.67,26.34L251.76,25.40L249.44,24.28L246.20,23.46L245.59,22.52L249.72,21.99L252.97,21.90L258.42,21.45L262.50,20.41L265.94,20.56L268.94,21.33L271.06,19.83L274.72,19.39L279.70,19.08L288.19,18.97L289.67,19.27L297.69,18.80L303.71,18.97L309.72,19.15Z","M424.72,18.00L442.10,20.20L436.97,21.27L426.34,21.40L411.39,21.67L412.79,22.16L422.62,21.86L430.99,22.81L436.38,21.96L438.69,22.96L435.64,24.58L442.71,23.54L456.20,22.47L464.53,23.00L466.09,24.19L454.76,26.17L453.19,26.81L444.32,27.29L450.75,27.42L447.50,29.44L445.26,31.25L445.35,34.34L448.69,36.15L444.35,36.27L439.78,37.14L444.91,38.62L445.56,40.98L442.59,41.23L446.19,43.62L440.02,43.82L443.24,44.95L442.33,45.93L438.41,46.36L434.54,46.37L438.02,48.25L438.06,49.49L432.56,48.34L431.13,49.08L434.88,49.78L438.52,51.48L439.57,53.71L434.62,54.25L432.48,53.18L429.05,51.58L430.00,53.47L426.77,54.93L434.09,55.04L437.92,55.20L430.47,57.61L422.92,59.80L414.80,60.76L411.73,60.78L408.86,61.85L404.99,64.78L399.02,66.73L397.10,66.84L393.40,67.52L389.41,68.17L387.03,69.89L386.99,71.84L385.59,73.66L381.06,75.88L382.18,78.05L380.93,80.35L379.50,83.06L375.59,83.23L371.49,80.96L365.94,80.95L363.24,79.43L361.39,76.71L356.57,73.26L355.17,71.45L354.79,68.95L350.94,66.39L351.94,64.34L350.09,63.36L352.83,60.12L357.01,59.08L358.11,57.92L358.69,55.75L355.52,56.74L354.01,57.15L351.51,57.55L348.10,56.64L347.92,54.75L349.00,53.27L351.58,53.23L357.25,53.97L352.47,52.21L349.99,51.26L347.22,51.65L344.90,50.96L348.01,48.37L346.32,47.34L344.11,45.42L340.77,42.47L337.23,41.39L337.26,40.23L329.81,38.60L323.91,38.40L316.49,38.51L309.71,38.72L306.49,37.83L301.66,36.09L308.95,35.21L314.54,35.07L302.66,34.34L296.40,33.21L296.78,32.13L307.30,30.79L317.47,29.46L318.54,28.45L311.05,27.45L313.47,26.34L323.09,24.41L327.13,24.11L325.97,22.86L332.55,22.13L341.09,21.69L349.63,21.67L352.66,22.53L360.03,21.00L366.66,22.04L370.56,22.26L376.32,23.16L369.72,21.67L370.10,20.48L379.43,18.82L389.17,18.94L392.72,17.92L402.53,17.65L424.72,18.00Z"];
  const CONTINENTS = [
    [-111, 49, 'NORTH AMERICA', 'AMÉRICA DEL NORTE'], [-59, -18, 'SOUTH AMERICA', 'AMÉRICA DEL SUR'],
    [16, 52, 'EUROPE', 'EUROPA'], [19, 8, 'AFRICA', 'ÁFRICA'], [92, 48, 'ASIA', 'ASIA'],
    [136, -28, 'AUSTRALIA', 'AUSTRALIA'], [25, -81, 'ANTARCTICA', 'ANTÁRTIDA']
  ];
  const project = (lat, lon) => ({x: (lon + 180) * 1000 / 360, y: (90 - lat) * 500 / 180});
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }
  function svgNode(tag, attrs, text) {
    const node = document.createElementNS(NS, tag);
    Object.entries(attrs || {}).forEach(([key, value]) => node.setAttribute(key, value));
    if (text !== undefined) node.textContent = text;
    return node;
  }
  function button(className, text, label) {
    const node = element('button', className, text);
    node.type = 'button';
    if (label) node.setAttribute('aria-label', label);
    return node;
  }
  function mount(container, rawPlaces, options = {}) {
    if (!container) throw new Error(l('A map container is required.', 'Se necesita un contenedor para el mapa.'));
    const places = (rawPlaces || []).map((place, index) => {
      const lat = Number(place.lat ?? place.latitude ?? place.coordinates?.[1]);
      const lon = Number(place.lon ?? place.lng ?? place.longitude ?? place.coordinates?.[0]);
      return {...place, id: String(place.id ?? index), name: place.name || place.title || l('A new place', 'Un lugar nuevo'),
        family: place.family !== undefined ? Boolean(place.family) : Boolean(place.familyNote || place.category === 'Family'),
        lat, lon, point: project(lat, lon)};
    }).filter(place => Number.isFinite(place.lat) && Number.isFinite(place.lon) &&
      place.lat >= -90 && place.lat <= 90 && place.lon >= -180 && place.lon <= 180);
    const visited = new Set(options.visited || []);
    const listeners = [], pointers = new Map();
    let disposed = false, frameRequest = 0, lastDragAt = 0;
    let width = 800, height = 400, fit = .8, zoom = 1, center = {x: 500, y: 250};
    let activeFilter = 'all', gesture = null;
    const shell = element('section', 'map-shell');
    shell.setAttribute('aria-label', l("Max's world map", 'El mapa del mundo de Max'));
    const toolbar = element('div', 'map-toolbar');
    const filters = element('div', 'map-filters');
    filters.setAttribute('role', 'group');
    filters.setAttribute('aria-label', l('Choose which places to show', 'Elige qué lugares mostrar'));
    const filterButtons = [];
    [['all', l('All places', 'Todos los lugares')], ['family', l('Family & favorites', 'Familia y favoritos')], ['discoveries', l('Surprises', 'Sorpresas')]].forEach(([value, label]) => {
      const node = button('map-filter', label);
      node.dataset.filter = value;
      node.setAttribute('aria-pressed', value === 'all' ? 'true' : 'false');
      filterButtons.push(node);
      filters.append(node);
    });
    const controls = element('div', 'map-controls');
    controls.setAttribute('role', 'group');
    controls.setAttribute('aria-label', l('Map zoom', 'Acercar o alejar el mapa'));
    const minus = button('map-tool', '−', l('Zoom out', 'Alejar'));
    const plus = button('map-tool', '+', l('Zoom in', 'Acercar'));
    const reset = button('map-tool map-reset', l('Whole world', 'Todo el mundo'), l('Show the whole world', 'Mostrar todo el mundo'));
    controls.append(minus, plus, reset);
    toolbar.append(filters, controls);
    const frame = element('div', 'map-frame');
    frame.tabIndex = 0;
    frame.setAttribute('role', 'group');
    frame.setAttribute('aria-label', l('Interactive world map. Drag to move, pinch or use the zoom buttons. Use arrow keys to move the map.', 'Mapa del mundo interactivo. Arrastra para moverte y usa dos dedos o los botones para acercar o alejar. Usa las flechas del teclado para mover el mapa.'));
    const world = svgNode('svg', {viewBox: '0 0 1000 500', width: 1000, height: 500, class: 'map-world', 'aria-hidden': 'true'});
    const graticule = svgNode('g', {class: 'map-graticule'});
    for (let lon = -150; lon <= 150; lon += 30) {
      const x = project(0, lon).x;
      graticule.append(svgNode('path', {d: `M${x} 0V500`}));
    }
    for (let lat = -60; lat <= 60; lat += 30) {
      const y = project(lat, 0).y;
      graticule.append(svgNode('path', {d: `M0 ${y}H1000`, class: lat === 0 ? 'map-equator' : ''}));
    }
    world.append(graticule);
    const land = svgNode('g', {class: 'map-land'});
    LAND_PATHS.forEach(d => land.append(svgNode('path', {d})));
    world.append(land);
    const labels = svgNode('g', {class: 'map-labels'});
    CONTINENTS.forEach(([lon, lat, en, es]) => {
      const p = project(lat, lon);
      labels.append(svgNode('text', {x: p.x, y: p.y, 'text-anchor': 'middle'}, l(en, es)));
    });
    const equator = project(0, -166);
    labels.append(svgNode('text', {x: equator.x, y: equator.y - 5, class: 'map-ocean-label'}, l('EQUATOR', 'ECUADOR')));
    world.append(labels);
    const pins = element('div', 'map-pins');
    const compass = element('div', 'map-compass', '↑ N');
    compass.setAttribute('aria-hidden', 'true');
    const hint = element('p', 'map-hint', l('Tap a marker. Numbers hold more places.', 'Toca un marcador. Los números agrupan más lugares.'));
    const picker = element('div', 'map-picker');
    picker.hidden = true;
    picker.setAttribute('role', 'region');
    picker.setAttribute('aria-label', l('Places in this part of the map', 'Lugares en esta parte del mapa'));
    const pickerHead = element('div', 'map-picker-head');
    const pickerTitle = element('strong', '', l('Choose a place', 'Elige un lugar'));
    const pickerClose = button('map-picker-close', '×', l('Close nearby places', 'Cerrar lugares cercanos'));
    const pickerList = element('div', 'map-picker-list');
    const pickerZoom = button('map-picker-zoom', l('Zoom in here', 'Acercar aquí'));
    let selectedCluster = null;
    pickerHead.append(pickerTitle, pickerClose);
    picker.append(pickerHead, pickerList, pickerZoom);
    frame.append(world, pins, compass, hint, picker);
    const footer = element('div', 'map-footer');
    const legend = element('p', 'map-legend');
    const familyKey = element('span', 'map-key map-key-family', l('Family & favorites', 'Familia y favoritos'));
    const newKey = element('span', 'map-key map-key-discovery', l('New discoveries', 'Nuevos descubrimientos'));
    const visitedKey = element('span', 'map-key map-key-visited', l('✓ Opened', '✓ Visitados'));
    legend.append(familyKey, newKey, visitedKey);
    const count = element('p', 'map-count');
    footer.append(legend, count);
    const directory = element('details', 'map-directory');
    const summary = element('summary', '', l('Find a place by name', 'Busca un lugar por su nombre'));
    const searchLabel = element('label', 'map-search-label', l('Find a place', 'Busca un lugar'));
    const search = element('input', 'map-search');
    search.type = 'search';
    search.placeholder = l('Try Japan, Hawaii, or Ecuador…', 'Prueba Japón, Hawái o Ecuador…');
    search.autocomplete = 'off';
    search.spellcheck = false;
    searchLabel.append(search);
    const directoryList = element('div', 'map-directory-list');
    const searchStatus = element('p', 'map-search-status');
    searchStatus.setAttribute('aria-live', 'polite');
    directory.append(summary, searchLabel, searchStatus, directoryList);
    const note = element('p', 'map-note', l('This flat map stretches shapes near the poles. Map outlines: Natural Earth.', 'Este mapa plano estira las formas cerca de los polos. Contornos del mapa: Natural Earth.'));
    const live = element('p', 'map-sr-only');
    live.setAttribute('role', 'status');
    live.setAttribute('aria-live', 'polite');
    shell.append(toolbar, frame, footer, directory, note, live);
    container.replaceChildren(shell);

    function on(node, event, handler, settings) {
      node.addEventListener(event, handler, settings);
      listeners.push(() => node.removeEventListener(event, handler, settings));
    }
    function selectedPlaces() {
      return places.filter(place => activeFilter === 'all' || (activeFilter === 'family' ? place.family : !place.family));
    }
    function constrain() {
      const scale = fit * zoom;
      const xMargin = Math.min(500, width / (2 * scale));
      const yMargin = Math.min(250, height / (2 * scale));
      center.x = clamp(center.x, xMargin, 1000 - xMargin);
      center.y = clamp(center.y, yMargin, 500 - yMargin);
    }
    function position(point) {
      const scale = fit * zoom;
      return {x: width / 2 + (point.x - center.x) * scale, y: height / 2 + (point.y - center.y) * scale};
    }
    function closePicker() { picker.hidden = true; }
    function select(place) {
      visited.add(place.id);
      closePicker();
      draw();
      if (typeof options.onSelect === 'function') options.onSelect(place.id);
    }
    function placeButton(place) {
      const node = button('map-place-button');
      const icon = element('span', 'map-place-icon', place.emoji || (place.family ? '★' : '↗'));
      icon.setAttribute('aria-hidden', 'true');
      node.append(icon, element('span', 'map-place-name', place.name));
      if (visited.has(place.id)) {
        const tick = element('span', 'map-place-tick', '✓');
        tick.setAttribute('aria-label', l('Already opened', 'Ya visitado'));
        node.append(tick);
      }
      node.addEventListener('click', () => select(place));
      return node;
    }
    function showCluster(cluster) {
      selectedCluster = cluster;
      pickerTitle.textContent = cluster.places.length === 1 ? l('Explore this place', 'Explora este lugar') : l(`${cluster.places.length} places to explore`, `${cluster.places.length} lugares para explorar`);
      pickerList.replaceChildren(...cluster.places.sort((a, b) => a.name.localeCompare(b.name, locale())).map(placeButton));
      picker.hidden = false;
      pickerZoom.disabled = zoom >= 8;
      const first = pickerList.querySelector('button');
      if (first) first.focus({preventScroll: true});
    }
    function clustersFor(list) {
      // Cluster in screen pixels so every marker keeps a full 44 px touch target.
      const groups = [];
      for (const place of list) {
        const p = position(place.point);
        if (p.x < -20 || p.y < -20 || p.x > width + 20 || p.y > height + 20) continue;
        const group = groups.find(g => Math.hypot(g.x - p.x, g.y - p.y) < 47);
        if (group) {
          group.places.push(place);
          const n = group.places.length;
          group.x += (p.x - group.x) / n;
          group.y += (p.y - group.y) / n;
        } else groups.push({x: p.x, y: p.y, places: [place]});
      }
      // Centroids can move during grouping. Merge again to avoid overlapping taps.
      let changed = true;
      while (changed) {
        changed = false;
        outer: for (let i = 0; i < groups.length; i++) for (let j = i + 1; j < groups.length; j++) {
          const a = groups[i], b = groups[j];
          if (Math.hypot(a.x - b.x, a.y - b.y) < 47) {
            const total = a.places.length + b.places.length;
            a.x = (a.x * a.places.length + b.x * b.places.length) / total;
            a.y = (a.y * a.places.length + b.y * b.places.length) / total;
            a.places.push(...b.places);
            groups.splice(j, 1);
            changed = true;
            break outer;
          }
        }
      }
      return groups;
    }
    function draw() {
      if (disposed) return;
      const scale = fit * zoom;
      world.style.transform = `translate(${width / 2 - center.x * scale}px, ${height / 2 - center.y * scale}px) scale(${scale})`;
      labels.style.opacity = zoom > 3 ? '0' : '1';
      const list = selectedPlaces();
      const nodes = clustersFor(list).map(cluster => {
        const isCluster = cluster.places.length > 1;
        const place = cluster.places[0];
        const hasFamily = cluster.places.some(item => item.family);
        const allVisited = cluster.places.every(item => visited.has(item.id));
        const names = cluster.places.map(item => item.name).join(', ');
        const label = isCluster ? l(`${cluster.places.length} places: ${names}`, `${cluster.places.length} lugares: ${names}`) : l(`Explore ${place.name}${visited.has(place.id) ? ', already opened' : ''}`, `Explora ${place.name}${visited.has(place.id) ? ', ya visitado' : ''}`);
        const node = button(`map-pin${hasFamily ? ' map-pin-family' : ''}${isCluster ? ' map-pin-cluster' : ''}${allVisited ? ' map-pin-visited' : ''}`, '', label);
        node.style.left = `${clamp(cluster.x, 23, width - 23)}px`;
        node.style.top = `${clamp(cluster.y, 23, height - 23)}px`;
        node.title = isCluster ? l(`${cluster.places.length} places here`, `${cluster.places.length} lugares aquí`) : place.name;
        const core = element('span', 'map-pin-core', isCluster ? String(cluster.places.length) : hasFamily ? '★' : '•');
        core.setAttribute('aria-hidden', 'true');
        node.append(core);
        node.addEventListener('click', () => {
          if (Date.now() - lastDragAt < 180) return;
          if (isCluster) showCluster(cluster); else select(place);
        });
        return node;
      });
      pins.replaceChildren(...nodes);
      minus.disabled = zoom <= 1.001;
      plus.disabled = zoom >= 8;
      const opened = places.filter(place => visited.has(place.id)).length;
      count.textContent = l(`${list.length} ${list.length === 1 ? 'map stop' : 'map stops'} · ${opened} opened`, `${list.length} ${list.length === 1 ? 'lugar en el mapa' : 'lugares en el mapa'} · ${opened} ${opened === 1 ? 'visitado' : 'visitados'}`);
      frame.classList.toggle('map-zoomed', zoom > 1.01);
    }
    function scheduleDraw() {
      if (frameRequest || disposed) return;
      frameRequest = global.requestAnimationFrame(() => {frameRequest = 0; draw();});
    }
    function resize() {
      const bounds = frame.getBoundingClientRect();
      width = bounds.width || frame.clientWidth || 800;
      height = bounds.height || frame.clientHeight || 400;
      fit = Math.min(width / 1000, height / 500);
      constrain();
      draw();
    }
    function changeZoom(next, anchor) {
      const old = fit * zoom;
      const point = anchor || {x: width / 2, y: height / 2};
      const worldPoint = {x: center.x + (point.x - width / 2) / old, y: center.y + (point.y - height / 2) / old};
      zoom = clamp(next, 1, 8);
      center.x = worldPoint.x - (point.x - width / 2) / (fit * zoom);
      center.y = worldPoint.y - (point.y - height / 2) / (fit * zoom);
      constrain();
      closePicker();
      draw();
    }
    function renderDirectory() {
      const query = normalizeSearch(search.value);
      const list = selectedPlaces().filter(place => normalizeSearch([place.name, place.country, place.region, place.id, place.wikiTitle, ...(Array.isArray(place.searchAliases) ? place.searchAliases : [place.searchAliases])].filter(Boolean).join(' ')).includes(query));
      directoryList.replaceChildren(...list.sort((a, b) => a.name.localeCompare(b.name, locale())).map(placeButton));
      searchStatus.textContent = list.length ? l(`${list.length} ${list.length === 1 ? 'place' : 'places'} to explore`, `${list.length} ${list.length === 1 ? 'lugar' : 'lugares'} para explorar`) : l('No match yet. Try a different place name.', 'Todavía no hay resultados. Prueba con otro nombre.');
    }
    on(filters, 'click', event => {
      const node = event.target.closest('[data-filter]');
      if (!node) return;
      activeFilter = node.dataset.filter;
      filterButtons.forEach(item => item.setAttribute('aria-pressed', String(item === node)));
      zoom = 1; center = {x: 500, y: 250};
      closePicker(); draw(); renderDirectory();
      live.textContent = l(`${selectedPlaces().length} ${node.textContent.toLowerCase()} on the map.`, `${selectedPlaces().length} ${selectedPlaces().length === 1 ? 'lugar' : 'lugares'} en el mapa. Filtro: ${node.textContent.toLocaleLowerCase('es')}.`);
    });
    on(minus, 'click', () => {changeZoom(zoom / 1.65); live.textContent = l(`Zoom ${Math.round(zoom * 100)} percent.`, `Ampliación del ${Math.round(zoom * 100)} por ciento.`);});
    on(plus, 'click', () => {changeZoom(zoom * 1.65); live.textContent = l(`Zoom ${Math.round(zoom * 100)} percent.`, `Ampliación del ${Math.round(zoom * 100)} por ciento.`);});
    on(reset, 'click', () => {zoom = 1; center = {x: 500, y: 250}; closePicker(); draw(); live.textContent = l('The whole world is showing.', 'Se muestra todo el mundo.');});
    on(pickerClose, 'click', () => {closePicker(); frame.focus({preventScroll: true});});
    on(pickerZoom, 'click', () => {
      if (!selectedCluster) return;
      const list = selectedCluster.places;
      center = {x: list.reduce((n, place) => n + place.point.x, 0) / list.length,
        y: list.reduce((n, place) => n + place.point.y, 0) / list.length};
      zoom = clamp(zoom * 2, 1, 8);
      constrain(); closePicker(); draw(); frame.focus({preventScroll: true});
      live.textContent = l('Zoomed in on those places. Tap a marker to explore.', 'Nos acercamos a esos lugares. Toca un marcador para explorar.');
    });
    on(search, 'input', renderDirectory);
    on(directory, 'toggle', () => {if (directory.open) renderDirectory();});
    on(frame, 'keydown', event => {
      if (event.key === 'Escape' && !picker.hidden) {closePicker(); frame.focus({preventScroll: true}); return;}
      if (event.target !== frame) return;
      const amount = 60 / (fit * zoom);
      if (event.key === 'ArrowLeft') center.x -= amount;
      else if (event.key === 'ArrowRight') center.x += amount;
      else if (event.key === 'ArrowUp') center.y -= amount;
      else if (event.key === 'ArrowDown') center.y += amount;
      else if (event.key === '+' || event.key === '=') changeZoom(zoom * 1.65);
      else if (event.key === '-') changeZoom(zoom / 1.65);
      else return;
      event.preventDefault(); constrain(); scheduleDraw();
    });
    function localPoint(event) {
      const bounds = frame.getBoundingClientRect();
      return {x: event.clientX - bounds.left, y: event.clientY - bounds.top};
    }
    function newGesture() {
      const points = [...pointers.values()];
      if (points.length > 1) {
        const mid = {x: (points[0].x + points[1].x) / 2, y: (points[0].y + points[1].y) / 2};
        gesture = {type: 'pinch', startZoom: zoom, distance: Math.max(1, Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y)),
          world: {x: center.x + (mid.x - width / 2) / (fit * zoom), y: center.y + (mid.y - height / 2) / (fit * zoom)}};
      } else if (points.length === 1) gesture = {type: 'pan', start: points[0], center: {...center}};
      else gesture = null;
    }
    on(frame, 'pointerdown', event => {
      if (event.target.closest('button, input, .map-picker')) return;
      if (event.pointerType === 'mouse' && event.button !== 0) return;
      pointers.set(event.pointerId, localPoint(event));
      try {frame.setPointerCapture(event.pointerId);} catch (_) {}
      newGesture();
      frame.classList.add('map-dragging');
      closePicker();
    });
    on(frame, 'pointermove', event => {
      if (!pointers.has(event.pointerId) || !gesture) return;
      pointers.set(event.pointerId, localPoint(event));
      const points = [...pointers.values()];
      if (gesture.type === 'pinch' && points.length > 1) {
        const distance = Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
        const mid = {x: (points[0].x + points[1].x) / 2, y: (points[0].y + points[1].y) / 2};
        zoom = clamp(gesture.startZoom * distance / gesture.distance, 1, 8);
        center.x = gesture.world.x - (mid.x - width / 2) / (fit * zoom);
        center.y = gesture.world.y - (mid.y - height / 2) / (fit * zoom);
        lastDragAt = Date.now();
      } else if (points.length === 1) {
        const dx = points[0].x - gesture.start.x, dy = points[0].y - gesture.start.y;
        center.x = gesture.center.x - dx / (fit * zoom);
        center.y = gesture.center.y - dy / (fit * zoom);
        if (Math.hypot(dx, dy) > 6) lastDragAt = Date.now();
      }
      constrain(); scheduleDraw();
    });
    function pointerEnd(event) {
      if (!pointers.has(event.pointerId)) return;
      pointers.delete(event.pointerId);
      if (!pointers.size) frame.classList.remove('map-dragging');
      newGesture();
    }
    on(frame, 'pointerup', pointerEnd);
    on(frame, 'pointercancel', pointerEnd);
    on(frame, 'lostpointercapture', pointerEnd);
    let observer;
    if (global.ResizeObserver) {observer = new ResizeObserver(resize); observer.observe(frame);}
    else on(global, 'resize', resize);
    resize(); renderDirectory();
    function cleanup() {
      if (disposed) return;
      disposed = true;
      if (frameRequest) global.cancelAnimationFrame(frameRequest);
      if (observer) observer.disconnect();
      listeners.forEach(remove => remove());
      pointers.clear();
      shell.remove();
    }
    cleanup.setVisited = function (ids) {
      visited.clear();
      for (const id of ids || []) visited.add(id);
      draw(); renderDirectory();
    };
    cleanup.focus = function (id) {
      if (disposed) return false;
      const place = places.find(item => item.id === String(id));
      if (!place) return false;
      if (!selectedPlaces().includes(place)) {
        activeFilter = 'all';
        filterButtons.forEach(item => item.setAttribute('aria-pressed', String(item.dataset.filter === 'all')));
        renderDirectory();
      }
      center = {...place.point};
      zoom = Math.max(zoom, 3.2);
      constrain(); draw();
      showCluster({places: [place]});
      live.textContent = l(`${place.name} is centered on the map. Choose it to learn more.`, `${place.name} está en el centro del mapa. Elígelo para aprender más.`);
      return true;
    };
    return cleanup;
  }
  function mini(place) {
    const lat = Number(place.lat ?? place.latitude ?? place.coordinates?.[1]);
    const lon = Number(place.lon ?? place.lng ?? place.longitude ?? place.coordinates?.[0]);
    const valid = Number.isFinite(lat) && Number.isFinite(lon) && lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180;
    const pin = valid ? project(lat, lon) : null;
    const escape = value => String(value).replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
    const name = place.name || place.title || l('This place', 'Este lugar');
    const label = escape(l(`${name} on a world map`, `${name} en un mapa del mundo`));
    return `<svg class="map-mini" viewBox="0 0 1000 500" role="img" aria-label="${label}" xmlns="${NS}"><rect width="1000" height="500" rx="24" fill="#cee9e2"/><g fill="#f5f1dc" stroke="#739c8a" stroke-width="1.2" fill-rule="evenodd">${LAND_PATHS.map(d => `<path d="${d}"/>`).join('')}</g><path d="M0 250H1000" fill="none" stroke="#648b86" stroke-width="1.2" stroke-dasharray="7 7"/>${pin ? `<circle cx="${pin.x.toFixed(2)}" cy="${pin.y.toFixed(2)}" r="15" fill="#f57242" stroke="#fffdf5" stroke-width="5"/><circle cx="${pin.x.toFixed(2)}" cy="${pin.y.toFixed(2)}" r="4" fill="#542610"/>` : ''}</svg>`;
  }
  global.MLL_MAP = {mount, project, mini};
})(window);

;

/* ===== games.js ===== */
/* Max Learning Lab games — original canvas / DOM games. No dependencies. */
(function () {
  'use strict';
  function localePick(en, es, api) { const i18n = window.MLL_I18N; if (i18n && typeof i18n.pick === 'function') return i18n.pick(en, es); return (i18n && i18n.lang === 'es') || (!i18n && api && api.lang === 'es') ? es : en; }
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const shuffle = a => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
  function el(tag, cls, text) { const n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; }
  function button(text, cls) { const n = el('button', 'game-button ' + (cls || ''), text); n.type = 'button'; return n; }
  function createScope(container, api) {
    const root = el('section', 'game-shell'); container.appendChild(root);
    const clean = []; let dead = false;
    const on = (target, type, fn, options) => { target.addEventListener(type, fn, options); clean.push(() => target.removeEventListener(type, fn, options)); };
    const safeApi = { get: (k, d) => { try { return api && api.get ? api.get(k, d) : d; } catch (_) { return d; } }, set: (k, v) => { try { if (api && api.set) api.set(k, v); } catch (_) {} }, award: (k, v) => { if (api && api.award) api.award(k, v); }, read: t => { if (api && api.read) api.read(t); } };
    return { root, on, clean, l: (en, es) => localePick(en, es, api), saveState() {}, api: safeApi, alive: () => !dead, dispose() { dead = true; clean.forEach(fn => fn()); root.remove(); } };
  }
  function intro(s, kicker, title, help) {
    const row = el('div', 'game-intro'), text = el('div'); text.append(el('p', 'game-kicker', kicker), el('h2', 'game-title', title), el('p', 'game-help', help)); row.append(text); s.root.append(row); return row;
  }
  function stat(label, value) { const outer = el('div', 'game-stat'), number = el('strong', 'game-stat-value', value); outer.append(el('span', 'game-stat-label', label), number); return { outer, number }; }
  function feedback() { const root = el('div', 'game-feedback'), title = el('p', 'game-feedback-title'), text = el('p', 'game-feedback-text'); root.setAttribute('role', 'status'); root.setAttribute('aria-live', 'polite'); root.setAttribute('aria-atomic', 'true'); root.append(title, text); return { root, title, text }; }
  function setupCanvas(s, canvas, aspect, redraw) {
    const ctx = canvas.getContext('2d'); let width = 800, height = width / aspect;
    function resize() { const rect = canvas.getBoundingClientRect(); width = Math.max(100, rect.width || 800); height = Math.max(100, rect.height || width / aspect); const dpr = Math.min(2, window.devicePixelRatio || 1); canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr); ctx.setTransform(dpr, 0, 0, dpr, 0, 0); redraw(); }
    if (typeof ResizeObserver !== 'undefined') { const ro = new ResizeObserver(resize); ro.observe(canvas); s.clean.push(() => ro.disconnect()); } else s.on(window, 'resize', resize);
    return { ctx, resize, get w() { return width; }, get h() { return height; } };
  }
  function path(ctx, points, fill, stroke, lineWidth) { ctx.beginPath(); points.forEach((p, i) => i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])); ctx.closePath(); if (fill) { ctx.fillStyle = fill; ctx.fill(); } if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = lineWidth || 1; ctx.stroke(); } }
  function circle(ctx, x, y, radius, fill, stroke) { ctx.beginPath(); ctx.arc(x, y, radius, 0, Math.PI * 2); if (fill) { ctx.fillStyle = fill; ctx.fill(); } if (stroke) { ctx.strokeStyle = stroke; ctx.stroke(); } }
  function roundRect(ctx, x, y, w, h, r, fill) { ctx.beginPath(); if (ctx.roundRect) ctx.roundRect(x, y, w, h, r); else ctx.rect(x, y, w, h); ctx.fillStyle = fill; ctx.fill(); }

  // HOME RUN HERO: one pitch, one decision. Hits advance every runner equally.
  function baseball(s) {
    const l = s.l;
    s.root.classList.add('game-baseball');
    intro(s, l("Timing + counting", "Coordinación + conteo"), l("Home Run Hero", "Héroe del jonrón"), l("Tap Pitch. Watch the ball come closer. Tap SWING when the timing dot reaches the bright gold zone!", "Toca Lanzar. Mira cómo se acerca la pelota. ¡Toca BATEAR cuando el punto llegue a la zona dorada!"));
    const options = el('div', 'game-action-row'), tabs = el('div', 'game-tabs'), practice = button(l("Practice", "Práctica")), regular = button(l("3-out game", "Partida de 3 outs"));
    [practice, regular].forEach(b => b.className = 'game-tab'); tabs.append(practice, regular); const read = button(l("Hear instructions", "Escuchar instrucciones"), 'game-muted-button'); options.append(tabs, read); s.root.append(options);
    let mode = 'practice', phase = 'ready', score = 0, strikes = 0, outs = 0, bases = [false, false, false], hits = 0, homers = 0, pitchT = 0, pitchElapsed = 0, flightElapsed = 0, swingStamp = 0, swingHit = false, paused = false, lastTime = null, raf = 0, resultRuns = 0, best = Number(s.api.get('baseball-best', 0)) || 0;
    const stats = el('div', 'game-stats'), runStat = stat(l("Runs", "Carreras"), 0), strikeStat = stat(l("Strikes", "Strikes"), '0 / 3'), outStat = stat(l("Outs", "Outs"), l("Practice", "Práctica")), bestStat = stat(l("Best game", "Mejor partida"), best); [runStat, strikeStat, outStat, bestStat].forEach(x => stats.append(x.outer)); s.root.append(stats);
    const stage = el('div', 'game-stage'), canvas = el('canvas', 'game-canvas'); canvas.setAttribute('aria-label', l("Baseball diamond. Use the Pitch and Swing buttons below.", "Campo de béisbol. Usa los botones Lanzar y Batear que están abajo.")); canvas.setAttribute('role', 'img'); stage.append(canvas); s.root.append(stage);
    const meterWrap = el('div'), meter = el('div', 'game-pitch-meter'), zone = el('div', 'game-pitch-zone'), sweet = el('div', 'game-pitch-sweet'), dot = el('div', 'game-pitch-dot'); meter.setAttribute('aria-hidden', 'true'); meter.append(zone, sweet, dot); const labels = el('div', 'game-meter-labels'); labels.append(el('span', '', l("Pitcher", "Lanzador")), el('span', '', l("Gold zone = swing", "Zona dorada = batear"))); meterWrap.append(meter, labels); s.root.append(meterWrap);
    const fb = feedback(); s.root.append(fb.root); const controls = el('div', 'game-controls'), pitch = button(l("Pitch", "Lanzar"), 'game-primary game-big-button'), swing = button(l("SWING!", "¡BATEAR!"), 'game-gold game-big-button'), pause = button(l("Pause", "Pausar")); controls.append(pitch, swing, pause); const keyboardHint = el('p', 'game-keyboard-hint', l("Keyboard: Space to pitch or swing · P to pause", "Teclado: Espacio para lanzar o batear · P para pausar")); s.root.append(controls, keyboardHint);
    s.root.append(el('p', 'game-footer-note', l("Our simple rules: a single moves everyone 1 base, a double 2, and a triple 3. A home run brings everyone home. A foul never adds strike 3.", "Nuestras reglas sencillas: un sencillo hace avanzar a todos 1 base; un doble, 2; y un triple, 3. Un jonrón lleva a todos al plato. Un foul nunca cuenta como el tercer strike.")));
    // Keep the ball, timing guide, and swing control together within the tablet viewport.
    const playLayout = el('div', 'game-baseball-layout'), fieldColumn = el('div', 'game-baseball-field'), controlColumn = el('div', 'game-baseball-sidebar');
    options.classList.add('game-baseball-options'); stats.classList.add('game-baseball-stats'); stage.classList.add('game-baseball-stage'); meterWrap.classList.add('game-baseball-meter'); controls.classList.add('game-baseball-controls'); fb.root.classList.add('game-baseball-feedback');
    s.root.insertBefore(playLayout, options); fieldColumn.append(stage, meterWrap); controlColumn.append(options, stats, controls, fb.root, keyboardHint); playLayout.append(fieldColumn, controlColumn);
    let view;
    function announce(title, text) { fb.title.textContent = title; fb.text.textContent = text; }
    function update() { runStat.number.textContent = score; strikeStat.number.textContent = strikes + ' / 3'; outStat.number.textContent = mode === 'practice' ? l("Practice", "Práctica") : outs + ' / 3'; bestStat.number.textContent = best; practice.setAttribute('aria-pressed', mode === 'practice'); regular.setAttribute('aria-pressed', mode === 'game'); pitch.disabled = paused || phase === 'pitching' || phase === 'flight'; pitch.textContent = phase === 'gameover' ? l("Play again", "Jugar otra vez") : l("Pitch", "Lanzar"); swing.disabled = paused || phase !== 'pitching'; pause.textContent = paused ? l("Resume", "Continuar") : l("Pause", "Pausar"); pause.disabled = phase === 'ready' || phase === 'gameover'; practice.disabled = phase === 'pitching' || phase === 'flight'; regular.disabled = practice.disabled; dot.style.left = clamp(pitchT / 1.15 * 100, 0, 99) + '%'; }
    function reset(nextMode) { if (nextMode) mode = nextMode; phase = 'ready'; score = strikes = outs = hits = homers = 0; bases = [false, false, false]; pitchT = pitchElapsed = flightElapsed = 0; paused = false; lastTime = null; swingStamp = 0; announce(mode === 'practice' ? l("Your batting practice starts here.", "Aquí empieza tu práctica de bateo.") : l("Let’s play ball, Max!", "¡A jugar béisbol, Max!"), mode === 'practice' ? l("Slower pitches. A wider hitting zone. Keep practicing as long as you like.", "Los lanzamientos son más lentos y la zona para batear es más amplia. Practica todo lo que quieras.") : l("You have 3 outs. How many runs can you bring home?", "Tienes 3 outs. ¿Cuántas carreras puedes anotar?")); stop(); update(); draw(); }
    function stop() { if (raf) cancelAnimationFrame(raf); raf = 0; lastTime = null; }
    function run() { if (!raf && !paused && !document.hidden && (phase === 'pitching' || phase === 'flight')) raf = requestAnimationFrame(frame); }
    function frame(time) { raf = 0; if (!s.alive() || paused || document.hidden) return; const dt = lastTime == null ? 0 : Math.min(time - lastTime, 80); lastTime = time; if (phase === 'pitching') { pitchElapsed += dt; pitchT = pitchElapsed / (mode === 'practice' ? 2450 : 1700); if (pitchT > 1.15) strike(l("Just a little late.", "Fue un poquito tarde."), l("The ball reached the catcher. Try swinging when the dot is in gold.", "La pelota llegó al receptor. Intenta batear cuando el punto esté en la zona dorada.")); } else if (phase === 'flight') { flightElapsed += dt; if (flightElapsed >= 900) phase = 'ready'; } update(); draw(); run(); }
    function startPitch() { if (paused || phase === 'pitching' || phase === 'flight') return; if (phase === 'gameover') reset(); phase = 'pitching'; pitchElapsed = pitchT = 0; swingStamp = 0; swingHit = false; announce(l("Here comes the pitch…", "Ahí viene la pelota…"), l("Watch the dot travel toward the gold zone.", "Mira cómo el punto se acerca a la zona dorada.")); update(); run(); }
    function strike(title, detail) { strikes++; phase = 'ready'; if (strikes >= 3) { strikes = 0; outs++; if (mode === 'game' && outs >= 3) { phase = 'gameover'; if (score > best) { best = score; s.api.set('baseball-best', best); } s.api.award('baseball-played', l("Ballpark explorer", "Explorador del estadio")); announce(l("Final score: ", "Marcador final: ") + score + (score === 1 ? l(" run!", " carrera!") : l(" runs!", " carreras!")), hits + (hits === 1 ? l(" hit", " hit") : l(" hits", " hits")) + l(" and ", " y ") + homers + (homers === 1 ? l(" home run. ", " jonrón. ") : l(" home runs. ", " jonrones. ")) + l("Want another game?", "¿Jugamos otra vez?")); } else announce(mode === 'practice' ? l("A fresh batter. Keep practicing!", "¡Llega otro bateador! Sigue practicando.") : l("Strike 3. That’s ", "Tercer strike. Llevas ") + outs + (outs === 1 ? l(" out.", " out.") : l(" outs.", " outs.")), mode === 'practice' ? l("Try the gold zone on your next pitch.", "Intenta llegar a la zona dorada en el próximo lanzamiento.") : l("Your runners stay on base. Tap Pitch when you’re ready.", "Tus corredores se quedan en sus bases. Toca Lanzar cuando estés listo.")); } else announce(title, detail + l(" Strike ", " Strike ") + strikes + '.'); stop(); update(); draw(); }
    function hit(amount) { resultRuns = 0; const next = [false, false, false]; for (let i = 0; i < 3; i++) if (bases[i]) { if (i + amount >= 3) resultRuns++; else next[i + amount] = true; } if (amount === 4) resultRuns++; else next[amount - 1] = true; bases = next; score += resultRuns; hits++; strikes = 0; if (amount === 4) { homers++; s.api.award('baseball-homer', l("Home run hero", "Héroe del jonrón")); } phase = 'flight'; flightElapsed = 0; swingHit = true; announce(['', l("Single!", "¡Sencillo!"), l("Double!", "¡Doble!"), l("Triple!", "¡Triple!"), l("HOME RUN!", "¡JONRÓN!")][amount], resultRuns ? resultRuns + (resultRuns === 1 ? l(" runner made it home. ", " corredor llegó al plato. ") : l(" runners made it home. ", " corredores llegaron al plato. ")) + l("Your total: ", "Tu total: ") + score + '.' : l("Your batter moves ", "Tu bateador avanza ") + amount + (amount === 1 ? l(" base.", " base.") : l(" bases.", " bases.")) + l(" Keep the runners moving!", " ¡Haz avanzar a los corredores!")); update(); run(); }
    function swingBat() { if (paused || phase !== 'pitching') return; const error = Math.abs(pitchT - 1); swingStamp = performance.now(); const scale = mode === 'practice' ? 1.6 : 1; if (error <= .065 * scale) hit(4); else if (error <= .10 * scale) hit(3); else if (error <= .145 * scale) hit(2); else if (error <= .20 * scale) hit(1); else if (error <= .30 * scale) { phase = 'ready'; strikes = Math.min(2, strikes + 1); announce(l("Foul ball!", "¡Foul!"), strikes === 2 ? l("You still have 2 strikes. A foul cannot be strike 3.", "Sigues con 2 strikes. Un foul no puede ser el tercer strike.") : l("The ball went outside the lines. Try the gold zone next time.", "La pelota salió de las líneas. Busca la zona dorada la próxima vez.")); stop(); update(); draw(); } else strike(l("An early swing.", "Bateaste muy pronto."), l("Let the ball come a little closer.", "Deja que la pelota se acerque un poco más.")); }
    function setPaused(v) { if (phase !== 'pitching' && phase !== 'flight') return; paused = v; stop(); update(); draw(); if (!paused) run(); }
    function draw() { if (!view) return; const { ctx: c, w, h } = view; c.clearRect(0, 0, w, h); const sky = c.createLinearGradient(0, 0, 0, h); sky.addColorStop(0, '#0e213e'); sky.addColorStop(1, '#183b42'); c.fillStyle = sky; c.fillRect(0, 0, w, h);
      // A small stadium, patterned grandstands and floodlights.
      for (let row = 0; row < 3; row++) for (let col = 0; col < 45; col++) { c.fillStyle = ['#3d6578', '#506776', '#d0b57c', '#6c93a3'][(col * 7 + row * 3) % 4]; c.fillRect(col * w / 44, h * (.12 + row * .038), Math.max(2, w / 90), Math.max(2, h / 60)); }
      c.strokeStyle = '#638899'; c.lineWidth = 3; c.beginPath(); c.moveTo(0, h * .27); c.lineTo(w, h * .27); c.stroke();
      [w * .09, w * .91].forEach(x => { c.strokeStyle = '#607782'; c.lineWidth = 5; c.beginPath(); c.moveTo(x, h * .02); c.lineTo(x, h * .24); c.stroke(); for (let n = -1; n <= 1; n++) roundRect(c, x + n * 12 - 4, h * .035, 8, 10, 2, '#fff5bb'); });
      path(c, [[0, h * .30], [w, h * .30], [w, h], [0, h]], '#256447');
      for (let n = 0; n < 8; n++) path(c, [[w * (.5 - n * .09), h * .30], [w * (.5 - (n + .5) * .09), h * .30], [w * (.5 - (n + .5) * .23), h], [w * (.5 - n * .23), h]], '#2b7050');
      const home = [w * .50, h * .87], first = [w * .71, h * .66], second = [w * .50, h * .44], third = [w * .29, h * .66]; path(c, [home, first, second, third], '#bb915d'); path(c, [[w * .5, h * .80], [w * .64, h * .66], [w * .5, h * .51], [w * .36, h * .66]], '#377755');
      c.strokeStyle = '#e4e8bd'; c.lineWidth = 2; c.beginPath(); c.moveTo(0, h * .37); c.lineTo(home[0], home[1]); c.lineTo(w, h * .37); c.stroke();
      [first, second, third].forEach((p, i) => { c.save(); c.translate(p[0], p[1]); c.rotate(Math.PI / 4); c.fillStyle = '#fcf6da'; c.fillRect(-5, -5, 10, 10); c.restore(); if (bases[i]) { circle(c, p[0], p[1] - 14, Math.max(5, w / 110), '#ffdd7b', '#493b1b'); c.fillStyle = '#273626'; c.font = 'bold 9px sans-serif'; c.textAlign = 'center'; c.fillText('M', p[0], p[1] - 11); } });
      path(c, [[home[0] - 7, home[1] - 4], [home[0] + 7, home[1] - 4], [home[0] + 7, home[1] + 3], [home[0], home[1] + 9], [home[0] - 7, home[1] + 3]], '#fffbe9');
      // Pitcher and batter are drawn as simple small ballplayers.
      circle(c, w * .5, h * .56, h * .025, '#bc9871'); roundRect(c, w * .49, h * .50, w * .02, h * .054, 3, '#a8d3c9'); circle(c, w * .5, h * .48, h * .018, '#e3bc95');
      const bx = w * .45, by = h * .86; roundRect(c, bx - w * .01, by - h * .045, w * .025, h * .055, 3, '#9ff2d1'); circle(c, bx, by - h * .068, h * .022, '#f2c992'); roundRect(c, bx - h * .025, by - h * .096, h * .05, h * .018, 4, '#1c4256'); c.strokeStyle = '#e3b965'; c.lineWidth = Math.max(4, w * .007); c.lineCap = 'round'; c.beginPath(); c.moveTo(bx + 7, by - h * .024); const swinging = swingStamp && performance.now() - swingStamp < 450; c.lineTo(bx + (swinging ? w * .11 : -w * .018), by - (swinging ? h * .06 : h * .145)); c.stroke();
      if (phase === 'pitching' || phase === 'flight') { let x, y, r; if (phase === 'flight') { const t = flightElapsed / 900; x = w * (.51 + .22 * t); y = h * (.79 - .8 * t + .24 * t * t); r = (1 - t * .65) * h * .022; } else { const t = clamp(pitchT, 0, 1.15); x = w * .505; y = h * (.54 + .32 * t); r = h * (.006 + .020 * t * t); } circle(c, x + 3, y + 5, r, '#173b37'); circle(c, x, y, r, '#fff9e9'); if (r > 4) { c.strokeStyle = '#c34a43'; c.lineWidth = 1; c.beginPath(); c.arc(x - r * .45, y, r * .6, -.8, .8); c.stroke(); } }
      c.textAlign = 'center'; c.font = '800 ' + Math.max(13, w * .025) + 'px sans-serif'; c.fillStyle = '#ecdeb0'; c.fillText(l("MAX’S BALLPARK", "ESTADIO DE MAX"), w * .5, h * .08);
      if (paused || phase === 'gameover') { c.fillStyle = 'rgba(5,19,30,.72)'; c.fillRect(0, 0, w, h); c.fillStyle = '#f7edcf'; c.font = '800 ' + Math.max(24, w * .06) + 'px sans-serif'; c.fillText(paused ? l("PAUSED", "EN PAUSA") : l("NICE GAME, MAX!", "¡BIEN JUGADO, MAX!"), w / 2, h * .45); c.font = '600 ' + Math.max(15, w * .03) + 'px sans-serif'; c.fillStyle = '#9af0d0'; c.fillText(paused ? l("Tap Resume when you’re ready.", "Toca Continuar cuando estés listo.") : score + (score === 1 ? l(" RUN", " CARRERA") : l(" RUNS", " CARRERAS")), w / 2, h * .57); }
    }
    view = setupCanvas(s, canvas, 1.68, draw); view.resize();
    s.on(practice, 'click', () => reset('practice')); s.on(regular, 'click', () => reset('game')); s.on(pitch, 'click', startPitch); s.on(swing, 'click', swingBat); s.on(pause, 'click', () => setPaused(!paused)); s.on(canvas, 'pointerdown', e => { e.preventDefault(); if (phase === 'pitching') swingBat(); }); s.on(read, 'click', () => s.api.read(l("Tap Pitch. Watch the ball and the white dot. When the dot reaches the bright gold zone, tap Swing. A hit moves your runners. Try to bring them home.", "Toca Lanzar. Mira la pelota y el punto blanco. Cuando el punto llegue a la zona dorada, toca Batear. Cada hit hace avanzar a tus corredores. Intenta llevarlos hasta el plato.")));
    s.on(document, 'keydown', e => { if (e.target.matches('input,textarea,select') || e.altKey || e.ctrlKey || e.metaKey || e.repeat) return; if (e.code === 'Space' && e.target.tagName !== 'BUTTON') { e.preventDefault(); phase === 'pitching' ? swingBat() : startPitch(); } else if (e.key.toLowerCase() === 'p') { e.preventDefault(); setPaused(!paused); } });
    s.on(document, 'visibilitychange', () => { if (document.hidden && (phase === 'pitching' || phase === 'flight')) setPaused(true); }); s.clean.push(stop); reset();
  }

  // POCKET BLOCKS: a slow, original falling-block puzzle with explicit controls.
  function blocks(s) {
    const l = s.l;
    s.root.classList.add('game-blocks');
    intro(s, l("Shapes + planning", "Figuras + planificación"), l("Pocket Blocks", "Bloques de bolsillo"), l("Move and turn the falling shape. Fill a whole row with no gaps to clear it. Take your time—there’s no speed-up.", "Mueve y gira la figura que cae. Llena una fila sin dejar huecos para borrarla. Tómate tu tiempo: las figuras no caen más rápido."));
    const layout = el('div', 'game-block-layout'), stage = el('div', 'game-stage'), canvas = el('canvas', 'game-canvas game-block-canvas'); canvas.setAttribute('aria-label', l("Falling-block board. Use the large arrow, turn, and drop buttons.", "Tablero de bloques que caen. Usa los botones grandes para mover, girar y soltar las figuras.")); canvas.setAttribute('role', 'img'); stage.append(canvas); const panel = el('div', 'game-block-panel'); layout.append(stage, panel); s.root.append(layout);
    const stats = el('div', 'game-stats'), rowsStat = stat(l("Rows", "Filas"), 0), bestStat = stat(l("Best rows", "Récord de filas"), Number(s.api.get('blocks-best', 0)) || 0); stats.append(rowsStat.outer, bestStat.outer); panel.append(stats);
    const nextBox = el('div', 'game-next'), nextLabel = el('span', 'game-small', l("NEXT", "SIGUIENTE")), nextShape = el('div', 'game-mini-shape'); nextShape.setAttribute('aria-hidden', 'true'); nextBox.append(nextLabel, nextShape); panel.append(nextBox);
    const controls = el('div', 'game-block-controls'), left = button('←'), rotate = button('↻'), right = button('→'), drop = button(l("Drop ↓", "Soltar ↓"), 'game-primary game-drop'); left.setAttribute('aria-label', l("Move left", "Mover a la izquierda")); right.setAttribute('aria-label', l("Move right", "Mover a la derecha")); rotate.setAttribute('aria-label', l("Turn shape clockwise", "Girar la figura hacia la derecha")); controls.append(left, rotate, right, drop); panel.append(controls);
    const pause = button(l("Start", "Empezar"), 'game-gold'), restart = button(l("New board", "Nuevo tablero"), 'game-muted-button'); panel.append(pause, restart);
    const fb = feedback(); fb.title.textContent = l("Build a complete row.", "Completa una fila."); fb.text.textContent = l("The dotted shape shows where your block will land.", "La figura de puntos muestra dónde caerá tu bloque."); panel.append(fb.root);
    const tip = el('div', 'game-callout'); tip.append(el('p', '', l("Try turning a shape before dropping it. You can fit it into a different space.", "Prueba girar la figura antes de soltarla. Así puedes encajarla en otro espacio."))); panel.append(tip); s.root.append(el('p', 'game-keyboard-hint', l("Keyboard: ← → move · ↑ turn · ↓ lower · Space drop · P pause", "Teclado: ← → mover · ↑ girar · ↓ bajar · Espacio soltar · P pausar")));
    s.root.append(el('p', 'game-footer-note', l("Puzzle connection: Alexey Pajitnov created Tetris in Moscow in 1984. Pocket Blocks is our own small falling-block puzzle, inspired by fitting shapes together.", "Dato curioso: Alexey Pajitnov creó Tetris en Moscú en 1984. Bloques de bolsillo es nuestro propio juego de bloques que caen, inspirado en encajar figuras.")));
    const COLS = 10, ROWS = 18, SHAPES = [ [[1,1,1,1]], [[1,1],[1,1]], [[0,1,0],[1,1,1]], [[0,1,1],[1,1,0]], [[1,1,0],[0,1,1]], [[1,0,0],[1,1,1]], [[0,0,1],[1,1,1]] ], COLORS = ['#76d6e3','#ffda7b','#bfa4ed','#91e8be','#efb295','#a9c6fc','#e3a2cb'];
    let board = [], active = null, next = null, bag = [], rows = 0, best = Number(s.api.get('blocks-best', 0)) || 0, state = 'idle', elapsed = 0, last = null, raf = 0, view;
    function freshPiece() { if (!bag.length) bag = shuffle([0,1,2,3,4,5,6]); const i = bag.pop(); return { matrix: SHAPES[i].map(r => r.slice()), color: COLORS[i], x: 3, y: 0 }; }
    function fits(piece, dx, dy, matrix) { const m = matrix || piece.matrix; for (let y = 0; y < m.length; y++) for (let x = 0; x < m[y].length; x++) if (m[y][x]) { const xx = piece.x + x + dx, yy = piece.y + y + dy; if (xx < 0 || xx >= COLS || yy >= ROWS || (yy >= 0 && board[yy][xx])) return false; } return true; }
    function displayNext() { nextShape.replaceChildren(); nextShape.style.gridTemplateColumns = 'repeat(' + next.matrix[0].length + ',17px)'; next.matrix.forEach(row => row.forEach(value => { const cell = el('span', 'game-mini-cell'); cell.style.backgroundColor = value ? next.color : 'transparent'; nextShape.append(cell); })); }
    function update() { rowsStat.number.textContent = rows; bestStat.number.textContent = best; pause.textContent = state === 'playing' ? l("Pause", "Pausar") : state === 'over' ? l("Play again", "Jugar otra vez") : state === 'idle' ? l("Start", "Empezar") : l("Resume", "Continuar"); [left, right, rotate, drop].forEach(b => b.disabled = state !== 'playing'); }
    function stop() { if (raf) cancelAnimationFrame(raf); raf = 0; last = null; }
    function run() { if (!raf && state === 'playing' && !document.hidden) raf = requestAnimationFrame(frame); }
    function spawn() { active = next; active.x = Math.floor((COLS - active.matrix[0].length) / 2); active.y = 0; next = freshPiece(); displayNext(); if (!fits(active, 0, 0)) { state = 'over'; stop(); fb.title.textContent = l("Your board is full.", "Tu tablero está lleno."); fb.text.textContent = rows + (rows === 1 ? l(" row cleared. ", " fila completada. ") : l(" rows cleared. ", " filas completadas. ")) + l("Try a fresh board and look for empty spaces.", "Prueba con un tablero nuevo y busca espacios libres."); if (rows > 0) s.api.award('blocks-builder', l("Shape builder", "Constructor de figuras")); } update(); }
    function lock() { active.matrix.forEach((row, y) => row.forEach((value, x) => { if (value && active.y + y >= 0) board[active.y + y][active.x + x] = active.color; })); const remaining = board.filter(row => row.some(cell => !cell)); const cleared = ROWS - remaining.length; while (remaining.length < ROWS) remaining.unshift(Array(COLS).fill(null)); board = remaining; if (cleared) { rows += cleared; if (rows > best) { best = rows; s.api.set('blocks-best', best); } fb.title.textContent = cleared === 1 ? l("One whole row!", "¡Una fila completa!") : l(cleared + " rows at once!", "¡" + cleared + " filas de una vez!"); fb.text.textContent = l("You filled every space. Now there is room to build again.", "Llenaste todos los espacios. Ahora hay lugar para seguir construyendo."); s.api.award('blocks-first-row', l("Shape builder", "Constructor de figuras")); } elapsed = 0; spawn(); }
    function step() { if (state !== 'playing') return; if (fits(active, 0, 1)) active.y++; else lock(); draw(); }
    function move(dx) { if (state === 'playing' && fits(active, dx, 0)) { active.x += dx; draw(); } }
    function turn() { if (state !== 'playing') return; const m = active.matrix[0].map((_, x) => active.matrix.map(row => row[x]).reverse()); for (const dx of [0, -1, 1, -2, 2]) if (fits(active, dx, 0, m)) { active.x += dx; active.matrix = m; draw(); return; } }
    function hardDrop() { if (state !== 'playing') return; while (fits(active, 0, 1)) active.y++; lock(); draw(); }
    function reset() { stop(); board = Array.from({length: ROWS}, () => Array(COLS).fill(null)); bag = []; rows = elapsed = 0; next = freshPiece(); state = 'idle'; spawn(); fb.title.textContent = l("Build a complete row.", "Completa una fila."); fb.text.textContent = l("Tap Start when you’re ready. The dotted shape is your landing guide.", "Toca Empezar cuando estés listo. La figura de puntos te muestra dónde caerá tu bloque."); update(); draw(); }
    function toggle() { if (state === 'over') reset(); state = state === 'playing' ? 'paused' : 'playing'; stop(); update(); draw(); run(); }
    function frame(time) { raf = 0; if (state !== 'playing' || !s.alive() || document.hidden) return; const dt = last == null ? 0 : Math.min(time - last, 100); last = time; elapsed += dt; if (elapsed >= 1050) { elapsed = 0; step(); } run(); }
    function drawCell(c, x, y, color, ghost) { const size = view.w / COLS, cellH = view.h / ROWS, pad = Math.max(1, size * .06); if (ghost) { c.strokeStyle = color; c.lineWidth = 2; c.setLineDash([3, 3]); c.strokeRect(x * size + pad + 1, y * cellH + pad + 1, size - pad * 2 - 2, cellH - pad * 2 - 2); c.setLineDash([]); } else { roundRect(c, x * size + pad, y * cellH + pad, size - pad * 2, cellH - pad * 2, 4, color); c.fillStyle = 'rgba(255,255,255,.24)'; c.fillRect(x * size + pad + 3, y * cellH + pad + 3, Math.max(1, size - pad * 2 - 6), 3); } }
    function draw() { if (!view || !board.length) return; const {ctx:c,w,h} = view; c.clearRect(0,0,w,h); c.fillStyle = '#091b2c'; c.fillRect(0,0,w,h); c.strokeStyle = '#142f43'; c.lineWidth = 1; for (let x=0;x<=COLS;x++) { c.beginPath(); c.moveTo(x*w/COLS,0); c.lineTo(x*w/COLS,h); c.stroke(); } for (let y=0;y<=ROWS;y++) { c.beginPath(); c.moveTo(0,y*h/ROWS); c.lineTo(w,y*h/ROWS); c.stroke(); } board.forEach((row,y) => row.forEach((color,x) => { if(color) drawCell(c,x,y,color,false); })); if (active) { let dy=0; while(fits(active,0,dy+1)) dy++; active.matrix.forEach((row,y) => row.forEach((v,x) => { if(v) drawCell(c,active.x+x,active.y+y+dy,active.color,true); })); active.matrix.forEach((row,y) => row.forEach((v,x) => { if(v) drawCell(c,active.x+x,active.y+y,active.color,false); })); } if(state!=='playing') { c.fillStyle='rgba(4,15,25,.74)'; c.fillRect(0,0,w,h); c.fillStyle='#f8efda'; c.font='800 '+Math.max(15,w*l(.09,.071))+'px sans-serif'; c.textAlign='center'; c.fillText(state==='idle'?l("READY TO BUILD?", "¿LISTO PARA CONSTRUIR?"):state==='over'?l("NICE BUILDING!", "¡BUEN TRABAJO!"):l("PAUSED", "EN PAUSA"),w/2,h*.45); c.font='500 '+Math.max(11,w*l(.046,.041))+'px sans-serif'; c.fillStyle='#9eeed3'; c.fillText(state==='over'?l("Try a fresh board.", "Prueba un tablero nuevo."):state==='idle'?l("Tap Start to begin.", "Toca Empezar."):l("Tap Resume to keep going.", "Toca Continuar para seguir."),w/2,h*.52); } }
    view = setupCanvas(s,canvas,10/18,draw); view.resize(); s.on(left,'click',()=>move(-1)); s.on(right,'click',()=>move(1)); s.on(rotate,'click',turn); s.on(drop,'click',hardDrop); s.on(pause,'click',toggle); s.on(restart,'click',reset);
    s.on(document,'keydown',e=> { if(e.target.matches('input,textarea,select') || e.altKey || e.ctrlKey || e.metaKey) return; const action = {ArrowLeft:()=>move(-1),ArrowRight:()=>move(1),ArrowUp:turn,ArrowDown:step}; if(action[e.code]) {e.preventDefault();action[e.code]();} else if(e.code==='Space' && e.target.tagName!=='BUTTON') {e.preventDefault();state==='playing'?hardDrop():toggle();} else if(e.key.toLowerCase()==='p'&&!e.repeat){e.preventDefault();toggle();} }); s.on(document,'visibilitychange',()=>{if(document.hidden&&state==='playing'){state='paused';stop();update();draw();}}); s.clean.push(stop); reset();
  }

  // PATTERN STUDIO: an eight-by-eight canvas made from real, keyboard-friendly buttons.
  function patterns(s) {
    const l = s.l;
    intro(s, l("Art + symmetry", "Arte + simetría"), l("Pattern Studio", "Taller de patrones"), l("Pick a color. Tap or slide across the squares. Turn on Mirror to make both sides match!", "Elige un color. Toca los cuadros o desliza el dedo sobre ellos. ¡Activa Espejo para que los dos lados sean iguales!"));
    const SIZE = 8, colors = ['#112738', '#f5f0d8', '#ffd97b', '#ef987f', '#bda2ed', '#78ccea', '#91e8be', '#44775e'];
    const names = [l("Midnight", "Medianoche"), l("Cream", "Crema"), l("Sunshine", "Sol"), l("Coral", "Coral"), l("Lavender", "Lavanda"), l("Ocean", "Océano"), l("Mint", "Menta"), l("Forest", "Bosque")];
    const saved = s.api.get('pattern-picture', null);
    let cells = Array.isArray(saved) && saved.length === SIZE * SIZE && saved.every(c => Number.isInteger(c) && c >= 0 && c < colors.length) ? saved.slice() : Array(SIZE * SIZE).fill(0);
    let chosen = 2, mirror = false, painting = false, pointerId = null, undoStack = [], strokeBefore = null, focusIndex = 0;
    const layout = el('div', 'game-mosaic-layout'), board = el('div', 'game-mosaic-board'), side = el('div', 'game-mosaic-side');
    board.setAttribute('role', 'group'); board.setAttribute('aria-label', l("8 by 8 drawing grid. Use arrow keys to move, then Space to color a square.", "Cuadrícula de dibujo de 8 por 8. Usa las flechas para moverte y la tecla Espacio para pintar un cuadro."));
    const palette = el('div', 'game-palette'); palette.setAttribute('role', 'group'); palette.setAttribute('aria-label', l("Choose a paint color", "Elige un color para pintar"));
    const swatches = colors.map((color, i) => { const b = button('', 'game-swatch'); b.className = 'game-swatch'; b.style.backgroundColor = color; b.setAttribute('aria-label', names[i] + (i === 0 ? l(" / erase", " / borrar") : '')); b.setAttribute('title', names[i]); s.on(b, 'click', () => { chosen = i; updatePalette(); }); palette.append(b); return b; });
    const colorLabel = el('p', 'game-small'), mirrorButton = button(l("Mirror: off", "Espejo: apagado")), tools = el('div', 'game-mosaic-tools'), undo = button(l("Undo", "Deshacer")), clear = button(l("Clear", "Borrar todo")), starter = button(l("Try a pattern", "Probar un patrón")), save = button(l("Save my picture", "Guardar mi dibujo"), 'game-primary'); tools.append(undo, clear, starter, save);
    const prompt = el('p', 'game-mosaic-question', l("Challenge: can you make a butterfly, a robot, or the letter M?", "Reto: ¿puedes dibujar una mariposa, un robot o la letra M?"));
    const fb = feedback(); fb.title.textContent = saved ? l("Your picture is back.", "Tu dibujo está de vuelta.") : l("Every great picture starts with one square.", "Todo gran dibujo empieza con un cuadro."); fb.text.textContent = saved ? l("Keep adding to it, or start a new design.", "Sigue dibujando o empieza un diseño nuevo.") : l("8 rows × 8 columns = 64 little squares.", "8 filas × 8 columnas = 64 cuadritos.");
    side.append(palette, colorLabel, mirrorButton, tools, prompt, fb.root); layout.append(board, side); s.root.append(layout);
    s.root.append(el('p', 'game-footer-note', l("Symmetry means two sides match like a reflection. Save keeps one picture in this browser on this device. Undo can bring back your last changes.", "La simetría hace que los dos lados sean iguales, como en un espejo. Guardar conserva un dibujo en este navegador y este dispositivo. Deshacer te permite volver atrás.")));
    const pixels = cells.map((_, i) => { const b = button('', ''); b.className = 'game-pixel'; b.dataset.pixel = i; b.tabIndex = i === 0 ? 0 : -1; board.append(b); return b; });
    function updatePalette() { swatches.forEach((b, i) => b.setAttribute('aria-pressed', i === chosen)); colorLabel.textContent = l("Color: ", "Color: ") + names[chosen] + (chosen === 0 ? l(" (eraser)", " (borrador)") : ''); }
    function render() { pixels.forEach((b, i) => { b.style.backgroundColor = colors[cells[i]]; b.setAttribute('aria-label', l("Row ", "Fila ") + (Math.floor(i / SIZE) + 1) + l(", column ", ", columna ") + (i % SIZE + 1) + ': ' + names[cells[i]]); }); undo.disabled = !undoStack.length; mirrorButton.setAttribute('aria-pressed', mirror); mirrorButton.textContent = mirror ? l("Mirror: on ↔", "Espejo: encendido ↔") : l("Mirror: off", "Espejo: apagado"); board.classList.toggle('game-mirror-on', mirror); }
    function record(before) { if (before.some((c, i) => c !== cells[i])) { undoStack.push(before); if (undoStack.length > 25) undoStack.shift(); } render(); }
    function colorCell(index) { if (!Number.isInteger(index) || index < 0 || index >= cells.length) return; cells[index] = chosen; if (mirror) cells[Math.floor(index / SIZE) * SIZE + SIZE - 1 - index % SIZE] = chosen; render(); }
    function beginStroke(e) { const cell = e.target.closest('[data-pixel]'); if (!cell || e.button > 0 || painting) return; e.preventDefault(); painting = true; pointerId = e.pointerId; strokeBefore = cells.slice(); focusIndex = Number(cell.dataset.pixel); setFocus(focusIndex, false); colorCell(focusIndex); if (board.setPointerCapture) { try { board.setPointerCapture(pointerId); } catch (_) {} } }
    function moveStroke(e) { if (!painting || e.pointerId !== pointerId) return; e.preventDefault(); const box = board.getBoundingClientRect(), style = getComputedStyle(board), left = parseFloat(style.borderLeftWidth) || 0, top = parseFloat(style.borderTopWidth) || 0, width = box.width - left - (parseFloat(style.borderRightWidth) || 0), height = box.height - top - (parseFloat(style.borderBottomWidth) || 0); const x = e.clientX - box.left - left, y = e.clientY - box.top - top; if (x >= 0 && y >= 0 && x < width && y < height) colorCell(Math.floor(y / height * SIZE) * SIZE + Math.floor(x / width * SIZE)); }
    function endStroke(e) { if (!painting || (e && e.pointerId !== pointerId)) return; painting = false; if (board.releasePointerCapture) { try { board.releasePointerCapture(pointerId); } catch (_) {} } pointerId = null; record(strokeBefore); strokeBefore = null; }
    function setFocus(index, focus) { focusIndex = clamp(index, 0, 63); pixels.forEach((p, i) => p.tabIndex = i === focusIndex ? 0 : -1); if (focus) pixels[focusIndex].focus(); }
    s.on(board, 'pointerdown', beginStroke); s.on(board, 'pointermove', moveStroke); s.on(board, 'pointerup', endStroke); s.on(board, 'pointercancel', endStroke); s.on(board, 'lostpointercapture', endStroke);
    // A click with detail 0 comes from a keyboard or assistive technology, not a painted pointer stroke.
    s.on(board, 'click', e => { const cell = e.target.closest('[data-pixel]'); if (cell && e.detail === 0) { const before = cells.slice(); colorCell(Number(cell.dataset.pixel)); record(before); } });
    s.on(board, 'keydown', e => { const cell = e.target.closest('[data-pixel]'); if (!cell) return; const i = Number(cell.dataset.pixel); const offsets = {ArrowLeft: -1, ArrowRight: 1, ArrowUp: -SIZE, ArrowDown: SIZE}; if (offsets[e.key]) { e.preventDefault(); setFocus(i + offsets[e.key], true); } else if (e.key === 'Home') { e.preventDefault(); setFocus(0, true); } else if (e.key === 'End') { e.preventDefault(); setFocus(63, true); } });
    s.on(mirrorButton, 'click', () => { mirror = !mirror; render(); fb.title.textContent = mirror ? l("Two sides, one idea.", "Dos lados, una idea.") : l("Free drawing is on.", "Ahora puedes dibujar libremente."); fb.text.textContent = mirror ? l("Your next square will also appear on the other side. Old squares stay where they are.", "El próximo cuadro que pintes aparecerá también del otro lado. Los cuadros anteriores se quedan donde están.") : l("Each square can now be a different color.", "Ahora cada cuadro puede tener un color diferente."); });
    s.on(undo, 'click', () => { if (undoStack.length) { cells = undoStack.pop(); render(); fb.title.textContent = l("One step back.", "Un paso atrás."); fb.text.textContent = l("Your last change has been undone.", "Se deshizo tu último cambio."); } });
    s.on(clear, 'click', () => { const before = cells.slice(); cells.fill(0); record(before); fb.title.textContent = l("A fresh canvas.", "Un lienzo nuevo."); fb.text.textContent = l("Changed your mind? Tap Undo to bring your picture back.", "¿Cambiaste de idea? Toca Deshacer para recuperar tu dibujo."); });
    s.on(starter, 'click', () => { const before = cells.slice(); cells = Array.from({length: 64}, (_, i) => { const row = Math.floor(i / SIZE), col = i % SIZE; return (Math.abs(3.5 - row) + Math.abs(3.5 - col)) % 3 < 1 ? 5 : (row + col) % 2 ? 6 : 0; }); record(before); fb.title.textContent = l("A pattern to play with.", "Un patrón para jugar."); fb.text.textContent = l("What repeats? Change any square to make this picture your own.", "¿Qué se repite? Cambia los cuadros que quieras para crear tu propio dibujo."); });
    s.on(save, 'click', () => { s.api.set('pattern-picture', cells.slice()); s.api.award('pattern-artist', l("Pattern artist", "Artista de patrones")); fb.title.textContent = l("Picture saved in your lab.", "Dibujo guardado en tu laboratorio."); fb.text.textContent = l("It will be here when you come back in this browser. You can keep creating.", "Estará aquí cuando vuelvas a este navegador. Puedes seguir creando."); });
    s.saveState = () => s.api.set('pattern-picture', cells.slice());
    s.clean.push(() => { painting = false; strokeBefore = null; }); updatePalette(); render();
  }

  // OCEAN SIZE LAB: rounded examples, not a claim that every adult has one fixed size.
  function oceanAnimals(l) { return [
    {id:'blue',name:l("Blue whale", "Ballena azul"),feet:100,color:'#84b6d3',kind:'whale',fact:l("The biggest animal eats tiny, shrimp-like animals called krill. It strains them from seawater.", "El animal más grande come unos animalitos parecidos a los camarones llamados kril. Los separa del agua de mar al filtrarla."),source:'https://www.fisheries.noaa.gov/species/blue-whale',sourceName:l("NOAA: blue whale", "NOAA: ballena azul")},
    {id:'sperm',name:l("Sperm whale", "Cachalote"),feet:52,color:'#98a4bf',kind:'sperm',fact:l("This deep diver makes clicks and listens for echoes to find food in dark water.", "Este animal bucea a gran profundidad. Hace chasquidos y escucha sus ecos para encontrar comida en aguas oscuras."),source:'https://www.fisheries.noaa.gov/species/sperm-whale',sourceName:l("NOAA: sperm whale", "NOAA: cachalote")},
    {id:'whaleshark',name:l("Whale shark", "Tiburón ballena"),feet:40,color:'#71b0bd',kind:'shark',fact:l("It is a fish, even though its name says whale! It filters tiny food from water.", "¡Es un pez, aunque su nombre diga ballena! Filtra el agua para atrapar alimentos diminutos."),source:'https://oceanservice.noaa.gov/facts/bigfish.html',sourceName:l("NOAA: whale shark", "NOAA: tiburón ballena")},
    {id:'dolphin',name:l("Bottlenose dolphin", "Delfín nariz de botella"),feet:10,color:'#a1c4d9',kind:'dolphin',fact:l("Dolphins make sounds and listen for echoes. The echoes help them find fish.", "Los delfines hacen sonidos y escuchan sus ecos. Los ecos les ayudan a encontrar peces."),source:'https://www.fisheries.noaa.gov/species/common-bottlenose-dolphin',sourceName:l("NOAA: bottlenose dolphin", "NOAA: delfín nariz de botella")},
    {id:'lemon',name:l("Lemon shark", "Tiburón limón"),feet:8,color:'#c4bf80',kind:'shark',fact:l("Its yellow-brown color helps it blend into sandy water. You met a lemon shark in Exuma, Max!", "Su color entre amarillo y café le ayuda a camuflarse en aguas con arena. ¡Conociste un tiburón limón en Exuma, Max!"),source:'https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/lemon-shark/',sourceName:l("Florida Museum: lemon shark", "Museo de Florida: tiburón limón")},
    {id:'turtle',name:l("Green sea turtle", "Tortuga verde"),feet:3,color:'#9bc78c',kind:'turtle',fact:l("Grown-up green turtles mostly eat seagrass and algae. They come to the surface to breathe air.", "Las tortugas verdes adultas comen sobre todo pastos marinos y algas. Suben a la superficie para respirar aire."),source:'https://www.fisheries.noaa.gov/species/green-turtle',sourceName:l("NOAA: green turtle", "NOAA: tortuga verde")}
  ]; }
  function animalIcon(animal) {
    const NS = 'http://www.w3.org/2000/svg', svg = document.createElementNS(NS, 'svg'); svg.setAttribute('viewBox','0 0 240 100'); svg.setAttribute('class','game-animal-icon'); svg.setAttribute('aria-hidden','true');
    function shape(tag, attrs) { const n = document.createElementNS(NS, tag); Object.keys(attrs).forEach(k => n.setAttribute(k, attrs[k])); svg.append(n); return n; }
    const color = animal.color;
    if (animal.kind === 'turtle') { shape('path',{d:'M83 32 Q35 2 50 30 L82 52 M80 66 Q49 98 74 87 L103 71 M151 35 Q194 5 176 31 L155 51 M151 65 Q183 93 166 85 L139 72',fill:color}); shape('ellipse',{cx:118,cy:53,rx:49,ry:29,fill:'#42745c',stroke:color,'stroke-width':4}); shape('ellipse',{cx:182,cy:53,rx:22,ry:12,fill:color}); shape('path',{d:'M73 52 L58 59 L76 60 M105 28 L118 53 L102 78 M137 29 L118 53 L137 78 M78 52 L162 52',fill:'none',stroke:color,'stroke-width':2}); shape('circle',{cx:191,cy:49,r:2.5,fill:'#102738'}); }
    else {
      const head = animal.kind === 'sperm' ? 'M174 31 Q215 24 216 39 L215 62 Q185 79 132 70 Q92 66 61 57 L30 77 L39 53 L24 34 L61 47 Q115 23 174 31Z' : animal.kind === 'dolphin' ? 'M51 47 Q102 25 156 39 Q178 38 190 49 L219 53 L211 59 L179 57 Q139 81 91 60 L48 60 L23 78 L34 53 L19 35Z' : animal.kind === 'shark' ? 'M58 44 Q110 31 170 40 L217 52 Q183 76 125 63 L64 57 L26 81 L39 52 L21 23Z' : 'M58 47 Q107 26 167 35 Q209 36 218 52 Q211 76 150 72 Q97 70 57 58 L31 77 L37 53 L24 33Z';
      shape('path',{d:head,fill:color});
      shape('path',{d:animal.kind==='shark'?'M109 40 L130 14 L146 43 M116 62 L149 90 L143 62':animal.kind==='dolphin'?'M107 40 Q119 17 135 42 M135 64 Q139 89 159 68':'M128 67 Q120 91 155 73',fill:color});
      if(animal.kind==='whale') shape('path',{d:'M89 54 Q146 76 207 57',fill:'none',stroke:'#d5ebef','stroke-width':2,opacity:.7});
      if(animal.kind==='sperm') shape('path',{d:'M166 65 L211 58',fill:'none',stroke:'#dbe1e8','stroke-width':2});
      if(animal.kind==='shark') [166,172,178].forEach(x=>shape('path',{d:'M'+x+' 47 l-3 12',stroke:'#2d5c67','stroke-width':2}));
      if(animal.id==='whaleshark') for(let i=0;i<19;i++) shape('circle',{cx:75+(i%7)*16,cy:44+Math.floor(i/7)*7,r:1.7,fill:'#e2ecd5'});
      shape('circle',{cx:animal.kind==='sperm'?198:196,cy:48,r:2.4,fill:'#0b2132'});
    }
    return svg;
  }
  function ocean(s) {
    const l = s.l, OCEAN_ANIMALS = oceanAnimals(l);
    intro(s, l("Ocean life + comparing numbers", "Vida marina + comparación de números"), l("Ocean Size Lab", "Laboratorio del océano"), l("Meet six ocean animals. Compare their lengths, then tap the longer example. There’s no timer.", "Conoce a seis animales del océano. Compara sus longitudes y toca el ejemplo más largo. No hay límite de tiempo."));
    const sizeNote = el('p', 'game-small', l("These are rounded examples of grown-up animals. Real animals come in different sizes. Drawings are not to scale; the comparison bars are.", "Usamos medidas redondeadas como ejemplos de animales adultos. En la naturaleza, sus tamaños varían. Los dibujos no muestran la proporción real; las barras de comparación sí.")); s.root.append(sizeNote);
    const top = el('div','game-action-row'), progress = el('div','game-ocean-progress'), progressText = el('span','game-small'), hear = button(l("Read this round", "Escuchar esta ronda"), 'game-muted-button'); top.append(progress, progressText, hear); s.root.append(top);
    const roundTitle = el('h3','game-ocean-question'), choices = el('div','game-ocean-choices'), comparison = el('div','game-ocean-comparison'), fb = feedback(), next = button(l("Next ocean pair →", "Siguiente pareja →"),'game-primary');
    s.root.append(roundTitle, choices, comparison, fb.root, next);
    const collectionTitle = el('h3','game-collection-title',l("Meet the whole crew", "Conoce a todos los animales")), collection = el('div','game-ocean-collection'); s.root.append(collectionTitle, collection);
    const sourceBox = el('details','game-source-links'), sourceSummary = el('summary','',l("Animal fact sources", "Fuentes de los datos de animales")), list = el('ul'); OCEAN_ANIMALS.forEach(a=>{const li=el('li'),link=el('a','',a.sourceName);link.href=a.source;link.target='_blank';link.rel='noopener noreferrer';li.append(link);list.append(li);}); sourceBox.append(sourceSummary,list);s.root.append(sourceBox);
    let rounds = [], round = 0, answered = false, buttons = [], dots = [], shownFact = '';
    function reset() { rounds = shuffle([[0,5],[1,4],[2,3],[5,3],[2,4],[0,1]]).map(p=>shuffle(p)); round=0; progress.replaceChildren(); dots=rounds.map((_,i)=>{const dot=el('span','game-progress-dot');dot.setAttribute('aria-hidden','true');progress.append(dot);return dot;}); showRound(); }
    function lengthLabel(a) { return a.feet + l(" feet", " pies"); }
    function showRound() { answered=false; const pair=rounds[round].map(i=>OCEAN_ANIMALS[i]); roundTitle.textContent=l("Which example is longer?", "¿Qué ejemplo es más largo?");progressText.textContent=l("Pair ", "Pareja ")+(round+1)+l(" of ", " de ")+rounds.length;choices.replaceChildren();comparison.replaceChildren();comparison.hidden=true;next.hidden=true;next.textContent=round===rounds.length-1?l("Finish this dive →", "Terminar la exploración →"):l("Next ocean pair →", "Siguiente pareja →");fb.title.textContent=l("Look at the lengths.", "Fíjate en las longitudes.");fb.text.textContent=l("A larger number means a longer animal in this comparison.", "En esta comparación, el número mayor indica el animal más largo.");shownFact='';buttons=pair.map(a=>{const b=button('','game-animal-choice');b.append(animalIcon(a),el('strong','game-animal-name',a.name),el('span','game-animal-size',lengthLabel(a)));b.setAttribute('aria-label',a.name+', '+lengthLabel(a));s.on(b,'click',()=>choose(a,pair,b));choices.append(b);return b;}); }
    function choose(animal,pair,b) { if(answered)return; const winner=pair[0].feet>pair[1].feet?pair[0]:pair[1]; if(animal!==winner){b.classList.add('game-wrong');b.setAttribute('aria-label',animal.name+', '+lengthLabel(animal)+l(". Try the other animal.", ". Prueba con el otro animal."));fb.title.textContent=l("Compare the numbers once more.", "Compara los números otra vez.");fb.text.textContent=pair[0].feet+l(" feet and ", " pies y ")+pair[1].feet+l(" feet—which number is larger?", " pies: ¿qué número es mayor?");return;} answered=true;b.classList.remove('game-wrong');b.classList.add('game-correct');buttons.forEach(x=>x.disabled=true);dots[round].classList.add('game-done');comparison.hidden=false;const biggest=Math.max(...pair.map(a=>a.feet));pair.forEach(a=>{const row=el('div','game-length-row'),label=el('div','game-length-label'),track=el('div','game-length-track'),bar=el('div','game-length-bar');label.append(el('strong','',a.name),el('span','',lengthLabel(a)));bar.style.width=(a.feet/biggest*100)+'%';bar.style.backgroundColor=a.color;track.append(bar);row.append(label,track);comparison.append(row);});fb.title.textContent=winner.name+l(" is longer in our example.", ": es el ejemplo más largo.");shownFact=winner.fact;fb.text.textContent=winner.fact;next.hidden=false; }
    function finish() { choices.replaceChildren();comparison.hidden=true;roundTitle.textContent=l("Six pairs explored. Nice dive, Max!", "Exploraste seis parejas. ¡Buen trabajo, Max!");progressText.textContent=l("6 of 6 explored", "6 de 6 exploradas");fb.title.textContent=l("Small or enormous, each animal has a story.", "Pequeño o enorme, cada animal tiene una historia.");fb.text.textContent=l("Tap any animal below to learn its special fact, or dive again with a shuffled set of pairs.", "Toca un animal de abajo para conocer un dato especial sobre él, o vuelve a explorar las parejas en otro orden.");next.textContent=l("Dive again", "Explorar otra vez");s.api.award('ocean-explorer',l("Ocean explorer", "Explorador del océano")); }
    s.on(next,'click',()=>{if(round>=rounds.length){reset();return;}round++;if(round>=rounds.length)finish();else showRound();});
    OCEAN_ANIMALS.forEach(a=>{const card=button('','game-ocean-card');card.append(animalIcon(a),el('strong','',a.name),el('span','',lengthLabel(a)+l(" example", " de ejemplo")));s.on(card,'click',()=>{fb.title.textContent=a.name;fb.text.textContent=a.fact;shownFact=a.fact;});collection.append(card);});
    s.on(hear,'click',()=>{if(shownFact)s.api.read(shownFact);else if(round<rounds.length){const pair=rounds[round].map(i=>OCEAN_ANIMALS[i]);s.api.read(l("Which example is longer? ", "¿Qué ejemplo es más largo? ")+pair.map(a=>a.name+', '+lengthLabel(a)).join('. ')+'.');}else s.api.read(l("You explored all six pairs. Tap an animal to learn its special fact.", "Exploraste las seis parejas. Toca un animal para conocer un dato especial sobre él."));}); reset();
  }

  const modules = { baseball, blocks, patterns, ocean };
  window.MLL_GAMES = {
    mount(kind, container, api) {
      const l = (en, es) => localePick(en, es, api);
      if (!container || typeof container.appendChild !== 'function') throw new TypeError(l("A game needs a container element.", "El juego necesita un elemento contenedor."));
      const s = createScope(container, api);
      if (!modules[kind]) { s.root.append(el('p','game-help',l("This game is not available yet. Choose another adventure.", "Este juego aún no está disponible. Elige otra aventura."))); return () => s.dispose(); }
      try { modules[kind](s); } catch (error) { s.dispose(); throw error; }
      const dispose = () => s.dispose();
      dispose.saveState = () => s.saveState();
      return dispose;
    }
  };
}());

;

/* ===== app.js ===== */
/* Max's Learning Lab — edit content in data/, not in this application shell. */
(function () {
  'use strict';
  const I = window.MLL_I18N, t = value => I.t(value), l = (en, es) => I.pick(en, es);
  const config = window.MLL_CONFIG;
  const english = {family:window.MLL_PLACES_FAMILY||[],a:window.MLL_PLACES_A||[],b:window.MLL_PLACES_B||[],people:window.MLL_PEOPLE||[]};
  const photos = window.MLL_PHOTOS || {};
  let family=[],surprises=[],places=[],people=[],byId=new Map();
  function localizeRecords(original,translated){const lookup=new Map((translated||[]).map(p=>[p.id,p]));return original.map(p=>I.lang==='es'?{...p,...(lookup.get(p.id)||{})}:p);}
  function loadContent(){
    family=localizeRecords(english.family,window.MLL_ES_FAMILY).map(p=>({...p,family:true}));
    surprises=[...localizeRecords(english.a,window.MLL_ES_A),...localizeRecords(english.b,window.MLL_ES_B)];
    places=[...family,...surprises];people=localizeRecords(english.people,window.MLL_ES_PEOPLE);byId=new Map(places.map(p=>[p.id,p]));
  }
  loadContent();
  const view = document.getElementById('view');
  const STORAGE = 'max-learning-lab-v1';
  const empty = () => ({version:1,name:config.name,badge:config.badges[0],visited:[],stamps:[],quiz:[],badges:{},deck:[],lastSurprise:null,games:{}});
  let memoryOnly=false;
  function normalize(input) {
    const next=empty();if(!input||typeof input!=='object')return next;
    if(typeof input.name==='string' && input.name.trim()) next.name=input.name.trim().slice(0,20);
    if(config.badges.includes(input.badge))next.badge=input.badge;
    for(const key of ['visited','stamps','deck'])if(Array.isArray(input[key]))next[key]=[...new Set(input[key].filter(id=>byId.has(id)))];
    if(Array.isArray(input.quiz))next.quiz=[...new Set(input.quiz.filter(id=>typeof id==='string'&&id.length<70))];
    if(input.badges&&typeof input.badges==='object')for(const[k,v]of Object.entries(input.badges))if(typeof v==='string'&&k.length<60)next.badges[k]=v.slice(0,90);
    if(input.games&&typeof input.games==='object'&&!Array.isArray(input.games))next.games=input.games;
    next.deck=next.deck.filter(id=>surprises.some(p=>p.id===id));
    if(byId.has(input.lastSurprise))next.lastSurprise=input.lastSurprise;
    return next;
  }
  let state;try{state=normalize(JSON.parse(localStorage.getItem(STORAGE)));}catch(e){state=empty();memoryOnly=true;}
  let dispose=null,toastTimer,readingButton=null,routeToken=0;
  const $=id=>document.getElementById(id);
  function save(){try{localStorage.setItem(STORAGE,JSON.stringify(state));}catch(e){if(!memoryOnly)toast('Progress can’t be saved in this browser.');memoryOnly=true;}updateHeader();}
  function el(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text!=null)n.textContent=t(text);return n;}
  function button(text,cls,fn){const b=el('button',cls||'button',text);b.type='button';if(fn)b.addEventListener('click',fn);return b;}
  function link(text,href,cls){const a=el('a',cls||'',text);a.href=href;return a;}
  function external(text,url,cls){const a=link(text,url,cls);a.target='_blank';a.rel='noopener noreferrer';return a;}
  function heading(kicker,title,description){const row=el('div','page-heading'),text=el('div');text.append(el('p','eyebrow',kicker),el('h1','',title));if(description)text.append(el('p','',description));row.append(text);return row;}
  function topNav(back='#home',label='← Explore the lab'){const n=el('nav','page-nav');n.setAttribute('aria-label',t('Activity navigation'));n.append(link(label,back,'back-link'));if(back!=='#home')n.append(link('⌂ Home','#home','button small ghost'));view.append(n);return n;}
  function toast(text){clearTimeout(toastTimer);$('toast').textContent=t(text);$('toast').classList.add('show');toastTimer=setTimeout(()=>$('toast').classList.remove('show'),3300);}
  function updateHeader(){ $('brand-name').textContent=l(state.name.toUpperCase()+"'S",state.name.toUpperCase());$('avatar-symbol').textContent=state.badge;$('nav-count').textContent=state.visited.length; }
  function stopReading(){if('speechSynthesis'in window)window.speechSynthesis.cancel();if(readingButton){readingButton.classList.remove('listen-on');readingButton.textContent=readingButton.dataset.beforeReading||t('◖ Listen');readingButton=null;}}
  let voices=[];function refreshVoices(){if('speechSynthesis' in window)voices=window.speechSynthesis.getVoices();}
  refreshVoices();if('speechSynthesis' in window)window.speechSynthesis.addEventListener('voiceschanged',refreshVoices);
  function read(text,b){
    if(!('speechSynthesis'in window)||!('SpeechSynthesisUtterance'in window)){toast('Read-aloud is not available in this browser.');return;}
    if(b&&readingButton===b){stopReading();return;}stopReading();refreshVoices();
    const wanted=I.lang==='es'?'es':'en';const matches=voices.filter(v=>v.lang.toLowerCase().replace('_','-').split('-')[0]===wanted);
    const preferred=I.lang==='es'?['es-EC','es-MX','es-US','es-419','es-ES']:['en-US','en-GB'];
    matches.sort((a,b)=>{const rank=v=>{const code=v.lang.replace('_','-');const index=preferred.indexOf(code);const rank=I.lang==='es'?(code==='es-ES'?9:index>=0?index:5):(index<0?10:index);return rank+(v.localService?0:.1);};return rank(a)-rank(b);});
    if(voices.length&&!matches.length){toast(l('Add an English voice in your device settings to listen.','Para escuchar, agrega una voz en español en los ajustes de tu dispositivo.'));return;}
    const u=new SpeechSynthesisUtterance(text);u.rate=.88;u.pitch=1;u.lang=I.lang==='es'?'es-MX':'en-US';if(matches[0]){u.voice=matches[0];u.lang=matches[0].lang;}
    if(b){readingButton=b;b.dataset.beforeReading=b.textContent;b.textContent=t('■ Stop reading');b.classList.add('listen-on');}
    u.onend=()=>{if(readingButton===b&&b){b.textContent=b.dataset.beforeReading||t('◖ Listen');b.classList.remove('listen-on');readingButton=null;}};
    u.onerror=event=>{u.onend();if(!['interrupted','canceled'].includes(event.error))toast(l('The voice could not start. Check the voices in your device settings.','No se pudo iniciar la voz. Revisa las voces en los ajustes de tu dispositivo.'));};
    window.speechSynthesis.speak(u);
  }
  const badgeText={
    'five-places':['Five-place explorer','Explorador de cinco lugares'],
    'twenty-places':['World wanderer','Viajero del mundo'],
    'all-places':['Every destination discovered','Todos los destinos descubiertos'],
    'curious-five':['Five curious answers','Cinco respuestas curiosas'],
    'baseball-played':['Ballpark explorer','Explorador del estadio'],
    'baseball-homer':['Home run hero','Héroe del jonrón'],
    'blocks-builder':['Shape builder','Constructor de figuras'],
    'blocks-first-row':['Shape builder','Constructor de figuras'],
    'pattern-artist':['Pattern artist','Artista de patrones'],
    'ocean-explorer':['Ocean explorer','Explorador del océano']
  };
  function badgeLabel(key,fallback){const pair=badgeText[key]||window.MLL_GAME_BADGES?.[key];return pair?l(pair[0],pair[1]):fallback;}
  function award(key,label){if(state.badges[key])return;const pair=badgeText[key]||window.MLL_GAME_BADGES?.[key];state.badges[key]=pair?pair[0]:label;save();toast('✦ '+badgeLabel(key,label));}
  function shuffle(a){const b=a.slice();for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];}return b;}
  function surprise(){if(!surprises.length)return;if(!state.deck.length){state.deck=shuffle(surprises.map(p=>p.id));if(state.deck.length>1&&state.deck[state.deck.length-1]===state.lastSurprise)[state.deck[0],state.deck[state.deck.length-1]]=[state.deck[state.deck.length-1],state.deck[0]];}const id=state.deck.pop();state.lastSurprise=id;save();location.hash='place/'+id+'?from=surprise';}
  function markVisited(id){if(!state.visited.includes(id)){state.visited.push(id);save();if(state.visited.length===5)award('five-places','Five-place explorer');if(state.visited.length===20)award('twenty-places','World wanderer');if(state.visited.length===places.length)award('all-places','Every destination discovered');}}
  function picture(p,cls,lazy=true){const photo=photos[p.id];const img=el('img',cls);img.alt=(I.lang==='es'?window.MLL_ES_PHOTO_ALT?.[p.id]:null)||photo?.alt||p.photoAlt||p.name;if(photo?.src)img.src=photo.src;img.loading=lazy?'lazy':'eager';img.decoding='async';if(photo){img.width=photo.width||1000;img.height=photo.height||700;}return img;}
  function placeCard(p,from='places'){const a=link('', '#place/'+p.id+'?from='+from,'place-card');a.append(picture(p));a.append(el('span','place-tag',p.family?'FAMILY & FAVORITES':p.country));if(state.visited.includes(p.id))a.append(el('span','visited-dot','✓'));const c=el('div','place-card-copy');c.append(el('h2','',p.name),el('p','',p.hook));a.append(c);return a;}
  function surpriseCard(){const b=button('','place-card surprise-card',surprise);b.append(el('span','tiny-label',l(surprises.length+' PLACES • A NEW ONE EACH TIME',surprises.length+' LUGARES • UNO NUEVO CADA VEZ')),el('span','surprise-symbol','✦'));const c=el('div','place-card-copy');c.append(el('h2','','Surprise me!'),el('p','','Ice caves? Dragons? A giant salt mirror? Let’s find out.'));b.append(c);return b;}
  function home(){
    document.title=l(state.name+"'s Learning Lab", "El laboratorio de "+state.name);
    const hero=el('section','home-hero'),copy=el('div','hero-copy');copy.append(el('p','eyebrow','YOUR CURIOSITY. YOUR ADVENTURE.'));const title=el('h1');title.append(document.createTextNode(t('Big world. ')),el('br'),el('em','',l('Curious '+state.name+'.','Un '+state.name+' curioso.')));copy.append(title,el('p','lede',config.homeNote));const actions=el('div','hero-actions');actions.append(button('✦ Surprise me','button primary',surprise),link('Explore the map ↗','#map','button ghost'));copy.append(actions);hero.append(copy);
    const exuma=family.find(p=>p.id==='exuma')||family[2];const photo=link('','#place/'+exuma.id+'?from=home','hero-photo');photo.append(picture(exuma,'',false));const sticker=el('span','hero-sticker');sticker.append(el('strong','',String(places.length)),el('span','','PLACES TO GO'));photo.append(sticker);const hc=el('div','hero-photo-copy');hc.append(el('span','hero-label','A PLACE IN YOUR STORY'),el('h2','','Remember Exuma?'),el('p','','Blue water, fishing days, and the lemon shark you caught.'));photo.append(hc);hero.append(photo);view.append(hero);
    const section=el('div','section-title');section.append(el('h2','','Choose your adventure'),el('p','','Explore. Play. Make.'));view.append(section);const grid=el('div','module-grid');config.modules.forEach(m=>{const a=link('','#'+m.id,'module-card');a.style.setProperty('--tile-color',m.color);const symbol=el('span','module-symbol',m.icon);symbol.setAttribute('aria-hidden','true');if(m.id==='baseball'){symbol.textContent='';const ball=el('img');ball.src='assets/ui/baseball.svg';ball.alt='';ball.width=34;ball.height=34;symbol.append(ball);}a.append(symbol,el('p','eyebrow',m.tag),el('h3','',m.name),el('p','',m.hook),el('span','module-arrow','↗'));grid.append(a);});view.append(grid);
    const strip=el('section','passport-strip'),panel=el('div');panel.append(el('h3','',state.visited.length?l(state.visited.length+' places discovered. So much more to find.',state.visited.length+' lugares descubiertos. ¡Queda mucho por explorar!'):'Your passport is ready.'),el('p','','Every place you open becomes part of your story.'));strip.append(panel,link('My passport →','#passport','button small ghost'));view.append(strip);
  }
  function placeMenu(){topNav();view.append(heading('PLACES & PEOPLE','Where shall we go?','Start with a family place, or take a leap into somewhere new.'));const grid=el('div','place-grid');family.forEach(p=>grid.append(placeCard(p)));grid.append(surpriseCard());view.append(grid);const strip=el('div','passport-strip');strip.append(el('p','',l('Want to choose a place yourself? All '+places.length+' are waiting on the map.','¿Quieres elegir adónde ir? Los '+places.length+' lugares te esperan en el mapa.')),link('Open world map ↗','#map','button small'));view.append(strip);}
  function addCredit(p,container){const photo=photos[p.id];if(!photo)return;const c=el('p','photo-credit');c.append(document.createTextNode(t('Photo')+': '+photo.credit+' · '),external(photo.license,photo.licenseUrl||photo.source));container.append(c);}
  function sources(p){const d=el('details','fact-sources');d.append(el('summary','','Where these facts come from'));(p.sources||[]).forEach(s=>d.append(external(s.title,s.url)));return d;}
  function quiz(p){const q=el('section','quiz-card');q.append(el('p','eyebrow','YOUR TURN'),el('h2','',p.quiz.question));const opts=el('div','quiz-options'),feedback=el('p','quiz-feedback');feedback.setAttribute('role','status');feedback.setAttribute('aria-live','polite');p.quiz.options.forEach((text,i)=>{const b=button(text,'',()=>{if(i===p.quiz.answer){b.classList.add('correct');feedback.textContent=l('Yes! ','¡Sí! ')+p.quiz.explain;[...opts.children].forEach(n=>n.disabled=true);b.disabled=false;if(!state.quiz.includes(p.id)){state.quiz.push(p.id);save();if(state.quiz.length===5)award('curious-five','Five curious answers');}}else{b.classList.add('retry');feedback.textContent=t('Try another idea. Look at the clues above.');}});opts.append(b);});q.append(opts,feedback);return q;}
  function stretch(p){const d=el('details','stretch');d.append(el('summary','',l('Think a little bigger: ','Piensa un poquito más: ')+p.stretch.question),el('p','',p.stretch.answer));return d;}
  function profile(p,from){
    markVisited(p.id);document.title=p.name+' · '+l(state.name+"'s Lab", "El laboratorio de "+state.name);const back=from==='map'?'#map':from==='passport'?'#passport':from==='home'?'#home':'#places';topNav(back,from==='map'?'← Back to the map':from==='passport'?'← My passport':from==='home'?'← Explore the lab':'← All places');
    const grid=el('div','profile-layout'),visual=el('div'),image=el('div','profile-photo');if(photos[p.id]?.height>photos[p.id]?.width*1.15)image.classList.add('portrait-photo');image.append(picture(p,'',false),el('span','profile-photo-tag',p.country));visual.append(image);addCredit(p,visual);
    const mini=el('div','mini-map');if(window.MLL_MAP?.mini){const rendered=MLL_MAP.mini(p);if(typeof rendered==='string')mini.innerHTML=rendered;else if(rendered)mini.append(rendered);}else{mini.append(el('p','','📍 '+p.name+' · '+p.country));}mini.append(link('Find it on the world map ↗','#map?focus='+p.id,'mini-map-label'));visual.append(mini);
    if(p.familyStops){const stops=el('section','family-stops');stops.append(el('h3','','Your family trail'));p.familyStops.forEach(s=>stops.append(el('p','',s.name+', '+s.state+' — '+s.connection)));stops.append(link('See the family pins ↗','#map?filter=family','button small ghost'));visual.append(stops);}
    const copy=el('div','profile-copy');copy.append(el('p','eyebrow',p.family?'A PLACE IN YOUR STORY':p.country.toUpperCase()+l(' / DISCOVERY',' / DESCUBRIMIENTO')),el('h1','',p.name),el('p','profile-hook',p.hook));if(p.familyNote)copy.append(el('p','family-note',p.familyNote));const facts=el('ol','fact-list');p.facts.forEach(f=>facts.append(el('li','',f)));copy.append(facts);const actions=el('div','learn-actions'),listen=button('◖ Listen','button small',()=>read(p.name+'. '+(p.familyNote||'')+' '+p.facts.join(' '),listen));actions.append(listen);const stamp=button(state.stamps.includes(p.id)?'✓ Passport stamped':'✦ Stamp my passport','button small stamp-button',()=>{if(state.stamps.includes(p.id)){toast('Already stamped. You can always come back!');return;}state.stamps.push(p.id);save();stamp.textContent=t('✓ Passport stamped');stamp.classList.add('collected');toast(l('✦ '+p.name+' added to your stamps!','✦ ¡Ya tienes el sello de '+p.name+'!'));});if(state.stamps.includes(p.id))stamp.classList.add('collected');actions.append(stamp);copy.append(actions,stretch(p),quiz(p),sources(p));
    const isMoscow=p.wikiTitle==='Moscow'||/moscow/i.test(p.id);if(isMoscow){const block=el('div','passport-strip');block.append(el('p','','Try fitting falling shapes into complete rows.'),link('Play Block Lab →','#blocks','button small'));copy.append(block);}grid.append(visual,copy);view.append(grid);const bottom=el('div','profile-bottom');bottom.append(link('Explore more places','#places','button ghost'),button('✦ Another surprise','button primary',surprise));view.append(bottom);
  }
  function mapPage(query){topNav();view.append(heading('THE WORLD IS YOUR CLASSROOM','Point. Tap. Explore.','Tap a pin to meet a place. Zoom in to separate nearby destinations.'));const host=el('div','world-map-host');view.append(host);const stops=family.flatMap(p=>(p.familyStops||[]).map(s=>({id:p.id,name:s.name+' · '+s.state,lat:s.lat,lon:s.lon,family:true,hook:s.connection})));if(window.MLL_MAP){dispose=MLL_MAP.mount(host,[...places,...stops],{onSelect:id=>{location.hash='place/'+id+'?from=map';},visited:new Set(state.visited)});const f=query.get('focus');if(f&&dispose?.focus)dispose.focus(f);if(query.get('filter')==='family')host.querySelector('[data-filter="family"]')?.click();}else host.append(el('p','error-note','The map could not load. You can still explore every place below.'));const info=el('div','passport-strip');info.append(el('p','',l('Surprise places appear in a shuffled order. Discover all '+surprises.length+' before the deck repeats.','Los lugares sorpresa salen en distinto orden. Descubre los '+surprises.length+' antes de que se repitan.')),button('✦ Surprise me','button small primary',surprise));view.append(info);}
  function passport(){topNav();const h=heading('YOUR EXPLORER PASSPORT','Look where you’ve been.',l(state.stamps.length+' passport stamps · '+state.quiz.length+' questions explored',state.stamps.length+' sellos en tu pasaporte · '+state.quiz.length+' preguntas exploradas'));h.append(el('div','passport-stat',state.visited.length+' / '+places.length));view.append(h);const bar=el('div','passport-progress'),fill=el('span');fill.style.width=(100*state.visited.length/Math.max(1,places.length))+'%';bar.append(fill);bar.setAttribute('role','img');bar.setAttribute('aria-label',l(state.visited.length+' of '+places.length+' destinations discovered',state.visited.length+' de '+places.length+' destinos descubiertos'));view.append(bar);if(Object.keys(state.badges).length){const row=el('div','badges-row');Object.entries(state.badges).forEach(([key,value])=>row.append(el('span','earned-badge','✦ '+badgeLabel(key,value))));view.append(row);}if(!state.visited.length){const e=el('section','empty-state');e.append(el('h2','','Every adventure starts somewhere.'),el('p','','Open a place to start your passport. Come back here whenever you want to visit it again.'),button('Find my first surprise','button primary',surprise));view.append(e);return;}const grid=el('div','passport-grid');state.visited.slice().reverse().forEach(id=>grid.append(placeCard(byId.get(id),'passport')));view.append(grid);}
  function peopleMenu(){topNav();view.append(heading('BIG IDEAS START SMALL','Meet a curious mind.','Scientists, explorers, and artists all started by asking questions. Just like you.'));const grid=el('div','person-grid');people.forEach(p=>{const a=link('','#person/'+p.id,'person-card');const ph=photos[p.id];if(ph){const img=picture(p);img.className='person-card-photo';a.append(img);}else a.append(el('div','person-monogram',p.name.split(' ').map(x=>x[0]).join('')));a.append(el('span','person-year',p.role),el('h2','',p.name),el('p','',p.hook));grid.append(a);});view.append(grid);}
  function person(p){topNav('#people','← All curious minds');document.title=p.name+' · '+t('Big ideas');const grid=el('div','profile-layout'),left=el('div');if(photos[p.id]){const im=el('div','profile-photo portrait-photo');im.append(picture(p,'',false));left.append(im);addCredit(p,left);}else{const poster=el('div','person-portrait');poster.append(el('strong','',p.name.split(' ').map(n=>n[0]).join('')),el('span','',p.role));left.append(poster);}const activity=el('section','quiz-card');activity.append(el('p','eyebrow','TRY IT YOURSELF'),el('h2','',p.activity.title),el('p','',p.activity.prompt));if(p.id==='frida-kahlo')activity.append(link('Open Pattern Studio →','#patterns','button'));if(p.id==='cousteau')activity.append(link('Meet ocean animals →','#ocean','button'));left.append(activity);const copy=el('div','profile-copy');copy.append(el('p','eyebrow',p.role.toUpperCase()),el('h1','',p.name),el('p','profile-hook',p.hook));const list=el('ol','fact-list');p.facts.forEach(t=>list.append(el('li','',t)));copy.append(list);const b=button('◖ Listen','button small',()=>read(p.name+'. '+p.facts.join(' '),b));copy.append(b,stretch(p),quiz(p),sources(p));grid.append(left,copy);view.append(grid);}
  function game(kind){const m=config.modules.find(m=>m.id===kind);view.classList.add('game-page');topNav();const container=el('div','game-container');view.append(container);if(window.MLL_GAMES){dispose=MLL_GAMES.mount(kind,container,{lang:I.lang,award,read,get:(key,fallback)=>state.games[key]??fallback,set:(key,value)=>{state.games[key]=value;save();}});}else container.append(el('p','error-note','This activity did not load. Go Home and try again.'));}
  function creditsPage(){
    topNav();view.append(heading('','Photo credits & research',l('Photographs are bundled with the website. Original creators keep their listed licenses.','Las fotos están incluidas en el sitio. Cada imagen conserva la licencia de su creador.')));
    view.append(el('p','small-note',l('Photos were resized and compressed; card layouts may crop them. Family connections were supplied by Max’s parent. Coordinates show public places, never home addresses.','Las fotos se redujeron y comprimieron; algunas tarjetas recortan su vista. El papá de Max compartió los vínculos familiares. Las coordenadas muestran lugares públicos, nunca direcciones de casas.')));
    const list=el('div','credits-grid');
    [...places,...people].forEach(p=>{const photo=photos[p.id];if(!photo)return;const a=el('article');a.id='credit-'+p.id;a.append(picture(p));const copy=el('div');copy.append(el('h2','',p.name),el('p','',(I.lang==='es'?window.MLL_ES_PHOTO_ALT?.[p.id]:null)||photo.alt));const credit=el('p');credit.append(document.createTextNode(t('Photo')+': '+photo.credit+' · '),external(t('Original photograph'),photo.source),document.createTextNode(' · '),external(photo.license,photo.licenseUrl||photo.source));copy.append(credit,el('p','','Fact sources'));const sources=el('ul');(p.sources||[]).forEach(source=>{const li=el('li');li.append(external(source.title,source.url));sources.append(li);});copy.append(sources);a.append(copy);list.append(a);});view.append(list);
    const mapNote=el('section','quiz-card');mapNote.append(el('h2','','World map'));const text=el('p');text.append(document.createTextNode(l('Land outlines: ','Contornos de la tierra: ')),external('Natural Earth','https://www.naturalearthdata.com/about/terms-of-use/'),document.createTextNode(l(', public domain. This flat projection stretches shapes near the poles. Location pins are approximate.',', dominio público. Esta proyección plana estira las formas cerca de los polos. Los puntos de ubicación son aproximados.')));mapNote.append(text,el('h2','','Games'),el('p','',l('The games and animal silhouettes are original code. Ocean facts link to NOAA and the Florida Museum in the game. Lengths are rounded adult examples; animals vary in size. Block Lab is an original falling-block puzzle, not an official Tetris product.','Los juegos y las siluetas de animales son código original. El juego del océano incluye enlaces a NOAA y al Museo de Florida. Las longitudes son ejemplos aproximados de adultos; el tamaño varía. El laboratorio de bloques es un rompecabezas original de figuras que caen, no un producto oficial de Tetris.')));view.append(mapNote);
  }

  function route(){routeToken++;stopReading();if(dispose){dispose();dispose=null;}view.className='';view.replaceChildren();const raw=location.hash.slice(1)||'home',parts=raw.split('?'),path=parts[0].split('/'),query=new URLSearchParams(parts[1]||'');const page=path[0];document.querySelectorAll('[data-nav]').forEach(a=>{const active=a.dataset.nav===(page==='place'?(query.get('from')==='map'?'map':'home'):page==='map'?'map':page==='passport'?'passport':'home');if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});document.title=l(state.name+"'s Learning Lab", "El laboratorio de "+state.name);
    if(page==='place'&&byId.has(path[1]))profile(byId.get(path[1]),query.get('from'));
    else if(page==='person'&&people.some(p=>p.id===path[1]))person(people.find(p=>p.id===path[1]));
    else if(page==='credits')creditsPage();else if(page==='places')placeMenu();else if(page==='map')mapPage(query);else if(page==='passport')passport();else if(page==='people')peopleMenu();else if(['baseball','blocks','patterns','ocean'].includes(page))game(page);else home();
    window.scrollTo(0,0);view.focus({preventScroll:true});
  }
  let chosenBadge=state.badge;
  $('settings-button').addEventListener('click',()=>{$('explorer-name').value=state.name;chosenBadge=state.badge;const box=$('badge-choices');box.replaceChildren();config.badges.forEach(symbol=>{const b=button(symbol,'',()=>{chosenBadge=symbol;[...box.children].forEach(n=>n.setAttribute('aria-pressed',String(n===b)));});b.setAttribute('aria-label',l('Choose '+symbol+' badge','Elige la insignia '+symbol));b.setAttribute('aria-pressed',String(symbol===chosenBadge));box.append(b);});$('settings-dialog').showModal();});
  $('save-settings').addEventListener('click',()=>{state.name=$('explorer-name').value.trim().slice(0,20)||'Max';state.badge=chosenBadge;save();route();});
  $('credits-link').addEventListener('click',()=>$('grownup-dialog').close());
  $('grownup-button').addEventListener('click',()=>{$('grownup-dialog').showModal();});$('close-grownup').addEventListener('click',()=>$('grownup-dialog').close());
  $('export-progress').addEventListener('click',()=>{const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=link('',url);a.download='max-lab-progress.json';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);});
  $('import-progress').addEventListener('change',async e=>{const file=e.target.files?.[0];if(!file)return;try{if(file.size>1000000)throw new Error();const incoming=JSON.parse(await file.text());if(incoming.version!==1||!Array.isArray(incoming.visited))throw new Error();state=normalize(incoming);save();$('grownup-dialog').close();route();toast('Your explorer passport is back.');}catch(err){toast('That file is not a Learning Lab progress backup.');}e.target.value='';});
  window.addEventListener('hashchange',route);window.addEventListener('pageshow',event=>{if(event.persisted)route();});window.addEventListener('pagehide',()=>{stopReading();if(dispose)dispose();});document.addEventListener('visibilitychange',()=>{if(document.hidden)stopReading();});
  function changeLanguage(lang){
    if(lang===I.lang)return;stopReading();if(dispose?.saveState)dispose.saveState();
    clearTimeout(toastTimer);$('toast').classList.remove('show');I.set(lang);loadContent();I.staticDOM();updateHeader();route();
    const toggle=document.querySelector('[data-language="'+I.lang+'"]');if(toggle)toggle.focus({preventScroll:true});
  }
  document.querySelectorAll('[data-language]').forEach(b=>b.addEventListener('click',()=>changeLanguage(b.dataset.language)));
  I.staticDOM();updateHeader();route();
  // A small read-only handle makes content checks possible without altering progress.
  window.MLL_APP={get language(){return I.lang;},get places(){return places.map(p=>({id:p.id,name:p.name,family:!!p.family}));},surpriseCount:surprises.length};
})();

;
