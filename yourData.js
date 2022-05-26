import gif from './public/happycampersimg.png'
import pocketSandwichImg from './public/PSLogolarge.png'

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
      description: "A frontend app allows users to search National Parks and view the weather at the selected park at the time of the search.",
      //Project Image - Add Your Project Image Here
      imageSrc: gif,
      //Project URL - Add Your Project Url Here
      url: "https://happy-campers-app-working.netlify.app/",
    },
    {
      title: "Pocket Sandwich", //Project Title - Add Your Project Title Here
      description: "A backend app uses the Yelp API to find restaurants via zip code and displays options based on dietary restrictions (Vegan, Vegetarian, etc).",
      //Project Image - Add Your Project Image Here
      imageSrc:
      pocketSandwichImg,
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
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

  services: [
    {
      title: "Art Direction",
      description:
        "We help with the creation and development of online advertising ideas, with particular focus on their visual appearance.",
    },
    {
      title: "Branding",
      description:
        "We design key brand elements such as the logo, color scheme, typography, and other design components that makes your brand stand out from competitors.",
    },
    {
      title: "Web Design",
      description:
        "We build and optimize your online presence.  Website is the digital entry point into your business and a powerful revenue channel.",
    },
    {
      title: "3D Design",
      description:
        "We combine creative design and technical skills to build striking 3D visualisations that bring your project to life.",
    },
  ],

  // End Services Section --------------------------

  // About Secton --------------
  aboutpara:
    "I am a Full Stack Software Devloper seeking a new career. I attended DigitalCrafts immserive full-stack web development bootcamp. In this program I learned JavaScript, React, Node.js, Express, HTML, CSS and Bootstrap. ",
  //   End About Section ---------------------
};

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
