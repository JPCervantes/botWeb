var grammars = {
  poema: {
    origin: ["#oracionSencilla#"],

    oracionSencilla: [
      "#principios# #verbos# #predicado#.",
      "#principios# #verbos# #predicado#. #predicadoComplemento#.",
      "#principios# #verbos#. \n#predicado.capitalize#.",
      "#principioContinuacion# no #verbos# #predicado#.",
      "#principioContinuacion# no regresar #lugares#.",
      "#principios# #verbos#. \nSiento #sentimiento#.",
      "#adverbioTiempoPasado.capitalize# tuve miedo de #verbos#.",
      "#principioContinuacion# no tener #sujetosPertenencia#.",
    ],

    principio: ["Temo", "Me da #sinonimoMiedo#", "Me #sinonimoMiedo2#"],

    principioContinuacion: [
      "Tengo #sinonimoMiedo# de",
      "A veces tengo #sinonimoMiedo# de",
      "#adverbioTiempo.capitalize# tengo #sinonimoMiedo# de",
    ],

    principios: ["#principio#", "#principioContinuacion#"],

    predicado: [
      "y no poder #verboConj1er#",
      "y sentirme #adjetivos#",
      "y #verboPasivo#",
      "y #verboActivo#",
      "y ver #sujetos#",
      "y me dio #sentimiento#",
      "#sujetos# #tiempoDescriptivo#",
    ],

    predicadoComplemento: [
      "\nDe que me falten #sujetosPertenencia#",
      "\nDe que me falte #sujetoPertenencia#",
      "\nDe que me #verboSubjuntivo#",
    ],

    sinonimoMiedo: [
      "miedo",
      "cosa",
      "pánico",
      "desconfianza",
      "fobia",
      "horror",
      "pavor",
      "susto",
      "temor",
      "terror",
    ],

    sinonimoMiedo2: ["alarma", "asusta", "atemoriza", "intimida", "espanta"],

    sujetos: ["#sujetoSingular#", "#sujetosPlural#"],

    sujetoSingular: [
      "#sujetoSingularFEM# #adjetivoFEM#",
      "#sujetoSingularMAS# #adjetivoMAS#",
      "#sujetoSingularFEM#",
      "#sujetoSingularMAS#",
    ],

    sujetosPlural: [
      "#sujetoSingularFEM# #adjetivoFEM#",
      "#sujetoSingularMAS# #adjetivoMAS#",
      "#sujetoSingularFEM#",
      "#sujetoSingularMAS#",
    ],

    sujetoSingularFEM: [
      "la noche",
      "la risa",
      "la arena",
      "la ternura",
      "mi madre",
      "la policía",
      "la lluvia",
      "la tarde",
      "la casa",
      "la nieve",
      "una mano",
      "una desgracia",
      "una serpiente",
      "una araña",
    ],

    sujetoSingularMAS: [
      "otro humano",
      "algo no humano",
      "un alienígena",
      "un cuento",
      "un asesinato",
      "un cuadro",
      "un abrazo",
      "un autobús",
      "un carro",
      "un auto",
      "el recuerdo",
      "el amanecer",
      "el examen",
      "el tiempo",
      "el sol",
      "el viento",
      "mi padre",
      "tu recuerdo",
    ],

    sujetosPluralFEM: [
      "las paredes",
      "las mujeres",
      "las maestras",
      "las navajas",
      "las muertas",
      "las flores",
      "las cruces",
      "las ruinas",
      "tus manos",
    ],

    sujetosPluralMAS: [
      "los hombres",
      "los cuchillos",
      "los errores",
      "los obreros",
      "los albañiles",
      "los doctores",
      "los maestros",
      "los huérfanos",
      "los dioses",
      "los taxistas",
      "los policías",
    ],

    tiempoDescriptivo: [
      "en la noche",
      "en la tarde",
      "mientras duermo",
      "en la madrugada",
      "cuando todo está en silencio",
      "en mi cabeza",
    ],

    sujetoPertenencia: [
      "dinero",
      "una casa",
      "trabajo",
      "amor",
      "corazón",
      "vida",
      "coraje",
      "un carro",
      "una vida",
      "pareja",
      "felicidad",
      "amistad verdadera",
      "cariño",
      "estabilidad económica",
      "un buen trabajo",
      "un trabajo que me guste",
    ],

    sujetosPertenencia: [
      "#partesDelCuerpo#",
      "los sueños",
      "las ganas",
      "los dientes",
      "los días soleados",
      "los gestos",
      "los recuerdos",
      "los buenos momentos",
      "las fuerzas",
      "las ganas",
      "las tardes",
      "tus abrazos",
      "tus huellas",
    ],

    partesDelCuerpo: [
      "los cabellos",
      "los ojos",
      "los brazos",
      "las piernas",
      "los pies",
      "las manos",
    ],

    lugares: [
      "a casa",
      "a la escuela",
      "al templo",
      "al parque",
      "al cine",
      "a la universidad",
      "a la facultad",
      "a la esquina",
      "a la tienda",
      "al bosque",
      "al mar",
      "a la playa",
    ],

    verboSubjuntivo: [
      "maten",
      "violen",
      "desaparezcan",
      "golpeen",
      "jaloneen",
      "empujen",
      "chiflen",
      "coman",
    ],

    verboPasivo: [
      "despertar en #lugares#",
      "despertar",
      "caminar #lugares#",
      "ver",
      "escuchar",
      "presenciar",
      "fingir",
      "llorar",
      "cantar",
      "enfermar",
      "perder #sujetosPertenencia#",
      "morir",
      "olvidar a #sujetos#",
      "percibir a #sujetos#",
      "abrazar a #sujetos#",
      "besar a #sujetos#",

      "olvidar",
      "percibir",
      "abrazar",
      "besar",
    ],

    verboActivo: [
      "gritar",
      "tomar",
      "engañar",
      "apretar",
      "golpear",
      "correr #lugares#",
      "huir #lugares#",
      "bailar",
      "jugar",
      "cortar",
      "engañar a #sujetos#",
      "apretar a #sujetos#",
      "golpear a #sujetos#",
    ],

    verbos: ["#verboActivo#", "#verboActivo#"],

    adverbioLimitado: [
      "#adverbioLugar#",
      "#adverbioModo#",
      "#adverbioCantidad#",
    ],

    adjetivos: ["#adjetivoMAS#", "#adjetivoFEM#"],

    adjetivoMAS: [
      "atrapado",
      "engañado",
      "solo",
      "triste",
      "preocupado",
      "mareado",
      "tonto",
      "vulnerable",
      "atraído",
      "amado",
      "desubicado",
      "hambriento",
      "viejo",
      "enfermo",
      "cansado",
      "roto",
      "loco",
      "asfixiado",
    ],

    adjetivoFEM: [
      "atrapada",
      "engañada",
      "sola",
      "triste",
      "preocupada",
      "mareada",
      "tonta",
      "vulnerable",
      "atraída",
      "amada",
      "desubicada",
      "hambrienta",
      "vieja",
      "enferma",
      "cansada",
      "rota",
      "loca",
      "asfixiada",
    ],

    verboConj1er: [
      "moverme",
      "reirme",
      "sentirme",
      "quererme",
      "hablarme",
      "gritarme",
      "odiarme",
      "olerme",
      "tocarme",
      "calmarme",
    ],

    sentimiento: [
      "dolor",
      "desesperación",
      "angustia",
      "cosquillas",
      "mareo",
      "náuseas ",
      "repulsión",
      "asco",
    ],

    adverbio: ["#adverbioTiempo#", "#adverbioModo#", "#adverbioCantidad#", ""],

    adverbioLugar: [
      "aquí",
      "allá",
      "arriba",
      "cerca",
      "fuera",
      "adelante",
      "allí",
      "acá",
      "detrás",
      "atrás",
      "enfrente",
      "afuera",
      "ahí",
      "lejos",
      "encima",
      "dentro",
      "alrededor",
    ],

    adverbioTiempo: [
      "hoy",
      "siempre",
      "aún",
      "todavía",
      "a veces",
      "mañana",
      "luego",
      "ahora",
      "después",
      "mientras",
    ],

    adverbioTiempoPasado: [
      "antes",
      "siempre",
      "aún",
      "temprano",
      "ahora",
      "anoche",
      "ayer",
      "después",
      "mientras",
    ],

    adverbioModo: [
      "así",
      "bien",
      "como",
      "alto",
      "claro",
      "rápido",
      "mejor",
      "mal",
      "adrede",
      "despacio",
      "fuerte",
      "lento",
      "según",
      "peor",
      "igual",
      "bajo",
      "deprisa",
      "regular",
      "raro",
    ],

    adverbioCantidad: [
      "nada",
      "mucho",
      "casi",
      "bastante",
      "medio",
      "totalmente",
      "todo",
      "poco",
      "más",
      "apenas",
      "algo",
      "demasiado",
      "bien",
      "menos",
      "tanto",
    ],
  },
};
