import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Portfolio Grkovic Goran', // e.g: 'Name | Developer'
  lang: 'fr', // e.g: en, es, fr, jp
  description: 'Bienvenu sur mon Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Bonjour, je suis ',
  name: 'Goran Grkovic',
  subtitle: 'developpeur FullStack',
  cta: 'En savoir plus',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "Actuellement à Chambery, j'étudie à l'école 42, une école de programmation informatique qui se base sur l'apprentissage par projet.",
  paragraphTwo: "Je suis un passionné de programmation. Autodidacte et motivé.",
  paragraphThree:  "Je vous invite à parcourir mon CV.",
  resume: 'https://drive.google.com/file/d/1oevApxvlan_s51N72yYcLasrBNiTKf3F/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'plazzaStatus.jpeg',
    title: 'PlazzaStatus stage Orange Ocws',
    info: "Création d'un site de monitoring pour Orange, afin de suivre l'état de Plazza (intranet d'orange) pour c'est utilisateur." +
        "Connection par Oauth, graphique avec temps de réponse, calendrier maintenance,...",
    info2: 'ReactJS, NodeJS, ExpressJS, Mongodb, Boostrap, Elatsticsearch, Kibana, Figma',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Hypertube.jpg',
    title: 'Hypertube',
    info: "Création d'une application web permettant à un utilisateur de rechercher et visionner des vidéos. Le lecteur est intégré au site, et les vidéos sont téléchargées au travers du protocole BitTorrent. Le moteur de recherche interroge plusieurs sources externes. Une fois un élément sélectionné, il sera téléchargé sur le serveur et diffusé sur le player web en même temps. Autrement dit, le lecteur ne se contente pas d’afficher la vidéo une fois le téléchargement complété, mais est capable de streamer directement le flux.",
    info2: 'ReactJS, NodeJS, ExpressJS, SQL',
    url: 'https://github.com/GoranGrkovic/HyperTube',
    repo: 'https://github.com/GoranGrkovic/HyperTube', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Matcha.jpg',
    title: 'Matcha',
    info: "Création d'un site de rencontres. Conception d'une application permettant à deux potentielles âmes soeurs de se rencontrer, de l’inscription au contact final. L'utilisateur peut s’inscrire, se connecter, compléter son profil, parcourir et rechercher d’autres utilisateurs, les liker, et chatter avec ceux qui auront liké en retour.",
    info2: 'HTML, CSS, Handlebars, SQL',
    url: 'https://github.com/GoranGrkovic/Matcha',
    repo: 'https://github.com/GoranGrkovic/Matcha', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Camagru.jpg',
    title: 'Camagru',
    info: 'Premier projet de la branche Web de 42, mini-Instagram qui permet à des utilisateurs de se connecter et de réaliser et partager des photo-montages.',
    info2: 'PHP/Javascript Natif, SQL',
    url: 'https://github.com/GoranGrkovic/Camagru',
    repo: 'https://github.com/GoranGrkovic/Camagru', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'fillit.jpg',
    title: 'fillit',
    info: 'Algorithme de backtracking permettant de positionner des pièces de tetris dans le plus petit carré possible',
    info2: 'C',
    url: 'https://github.com/GoranGrkovic/fillit',
    repo: 'https://github.com/GoranGrkovic/fillit', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    
    title: 'Libft',
    info: 'Réécriture et optimisation des fonctions de la libC',
    info2: 'C',
    url: 'https://github.com/GoranGrkovic/libft',
    repo: 'https://github.com/GoranGrkovic/libft', // if no repo, the button will not show up
  },

];

// CONTACT DATA
export const contactData = {
  cta: 'Mon profil vous interesse, n`hesitez pas à me contacter!',
  btn: 'Gorangrko@gmail.com',
  email: 'gorangrko@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
   /* {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },*/
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/goran-grkovic-1a0238b4/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/GoranGrkovic?tab=repositories',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
