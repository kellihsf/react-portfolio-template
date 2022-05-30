import gif from './public/happycampersimg.png'
import pocketSandwichImg from './public/PSLogolarge.png'
import bootstraplogo from './public/bootstraplogo.png'
import csslogo from './public/csslogo.png'
import expresslogo from './public/expresslogo.png'
import jslogo from './public/jslogo.png'
import htmllogo from './public/htmllogo.png'

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "kelli",
  headerTaglineOne: "Hello 👋", 
  headerTaglineTwo:
    "I'm Kelli Stone and I am an aspiring Junior Software Developer.",

  socials: [
    { title: "GitHub", link: "https://github.com/kellihsf/" },
    { title: "LinkedIn", link: "https://www.linkedin.com/in/kelli-stone/" },
    { title: "Email", link: "mailto:kellistone217@gmail.com" },
  ],

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Happy Campers", //Project Title - Add Your Project Title Here
      description: "Happy Campers is a mobile-friendly app that allows users to search National Parks and view the weather at the selected park at the time of the search.",
      team: '3 person development team',
      features:'Search by National Park name, get park information, see current weather, access reservation link. App uses the National Park and Weather APIs to retrieve data for the user.',
      icons: [jslogo, csslogo, htmllogo],
      //Project Image - Add Your Project Image Here
      imageSrc: gif,
      //Project URL - Add Your Project Url Here
      url: "https://happy-campers-app-working.netlify.app/",
      githubLink:"https://github.com/kellihsf/Happy-Campers"
    },
    {
      title: "Pocket Sandwich", //Project Title - Add Your Project Title Here
      description: "Pocket Sandwich is an app that uses the Yelp API to find restaurants via zip code and displays options based on dietary restrictions (Vegan, Vegetarian, etc).",
      team: '3 person development team',
      features:'Multipage site with an API data connection. A user can create an account or log in, and find a restaurant near by pulling data from the Yelp API.',
      icons: [jslogo, expresslogo, htmllogo, csslogo, bootstraplogo],
      //Project Image - Add Your Project Image Here
      imageSrc:
      pocketSandwichImg,
      //Project URL - Add Your Project Url Here
      url: "https://pocket-sandwich-fork.herokuapp.com/",
      githubLink:"https://github.com/kellihsf/Pocket-Sandwich-Fork"
    },
    // {
    //   title: "Spence", //Project Title - Add Your Project Title Here
    //   description: "A Full Stack Application for budgeting",
    //   //Project Image - Add Your Project Image Here
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
    //   //Project URL - Add Your Project Url Here
    //   url: "http://chetanverma.com/",
    // },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        description: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // Services Section ---------------

  // services: [
  //   {
  //     title: "Education",
  //     description:
  //       "I have a BA in Sociology from Illinois State University.I ",
  //   },
  //   {
  //     title: "Branding",
  //     description:
  //       "We design key brand elements such as the logo, color scheme, typography, and other design components that makes your brand stand out from competitors.",
  //   },
  //   {
  //     title: "Web Design",
  //     description:
  //       "We build and optimize your online presence.  Website is the digital entry point into your business and a powerful revenue channel.",
  //   }
    
  // ],

  // End Services Section --------------------------

  // About Secton --------------
  aboutpara:
    "I am a Full Stack Software Developer seeking a new career. I attended DigitalCrafts immserive full-stack web development bootcamp. In this program I learned JavaScript, React, Node.js, Express, HTML, CSS and Bootstrap. I have a BA from Illinois State University, with a demonstrated history of working in tech from being a Technical Support Engineer, to a QA Engineer and now an aspiring Full Stack Developer.",
    
  //   End About Section ---------------------
};

<p>Test</p>