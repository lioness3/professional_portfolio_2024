//data for projects
import jsLogo from "../images/jsLogo.png";
import wixLogo from "../images/wix.svg";
import cssLogo from "../images/css-3.svg";
import jQueryLogo from "../images/jquery.svg";
import reactLogo from "../images/react-native-1.svg";
import htmlLogo from "../images/html-5.svg";

//demo images
import OHC1 from "../images/OHC1.png";
import OHC2 from "../images/OHC2.png";
import OHC3 from "../images/OHC3.png";
import oldSite from "../images/oldSite.png";
import portfolioMockUp from "../images/portfolioMockUp.png";
import portfolioMockUp2 from "../images/portfolioMockUp2.png";
import portfolioMockUp3 from "../images/portfolioMockUp3.png";
import barMaster1 from "../images/barMaster1.png";
import barMaster2 from "../images/barMaster2.png";
import barMaster3 from "../images/barMaster3.png";
import azZip1 from "../images/azZip1.png";
import azZip2 from "../images/azZip2.png";
import azZip3 from "../images/azZip3.png";

const content = [
  {
    id: 1,
    title: "Ocean Harbor Condo",
    description:
      "This website serves a condominium association in Florida. It features a public section with information for those interested in visiting Ocean Harbor, and a private residents-only portal for community interaction and exclusive resources.",
    language: [wixLogo, jsLogo],
    contributions: `I thoroughly reviewed the old site, 
    noting areas for improvement, and created several wireframes. 
    I worked closely with the client, discussing different use cases to decide 
    on the functionality that best suited their needs. I then redesigned and 
    published a brand-new website using Wix, incorporating custom JavaScript to 
    dynamically show or hide information based on user interactions.`,
    colors: ["#5BC4D7", "#354156", "#ffff", "#344f83"],
    demo: [OHC1, OHC2, OHC3],
    wireframe: "src/images/privatePortalWireframe.jpg",
    afterthoughts:
      "Looking back, I would collaborate closely with the client to obtain all required content before commencing the layout design process. And, I would create detailed mockups that incorporate interactive elements to provide a realistic user experience.",
  },
  // {
  //     id: 2,
  //     title: "Dine or Ditch",
  //     description: "Dine or Ditch is a mobile application designed to assist users in choosing dining options based on their preferences, location, and current mood. The app provides a curated list of restaurant recommendations, helping users quickly decide where to eat with minimal hassle.",
  //     language: [
  //         "src/images/react-native-1.svg",
  //          "src/images/ts-logo-128.svg"],
  //     contributions: `As the sole developer on the "Dine or Ditch" app,
  //         I handled every aspect of its development from concept to deployment.
  //         I began by brainstorming and refining the app's unique features to provide
  //         users with a quick, easy way to choose dining options. I then created detailed
  //         wireframes and mockups to establish a cohesive design and layout that guides
  //         the user experience. In designing the UI/UX, I focused on building an intuitive,
  //         engaging interface. For the frontend, I used React Native to create a responsive
  //         and seamless user experience. I also developed the backend, implementing RESTful APIs
  //         to manage data flow and securely access restaurant listings. As the full-stack developer,
  //         I was responsible for ensuring all components—frontend and backend—integrated smoothly.
  //         Throughout the process, I conducted extensive testing and prototyping, including unit,
  //         integration, and end-to-end testing, to ensure the app&apos;s reliability and quality at every stage.`,
  //     colors:[
  //         '#000000',
  //         '#ffffff',
  //         '#A6A6A6',
  //         '#01A303',
  //         '#C00000'
  //     ],
  //    demo: oceanHarbor,
  //     wireframe: "src/images/privatePortalWireframe.jpg",
  //     afterthoughts:[
  //         'I need to learn Figma or another mock up site better. Obtain all content from the client before beginning the layout design.',
  //         'Create more detailed initial mockups with interactive elements like functioning buttons.'
  //     ]
  // },
  {
    id: 3,
    title: "Joann Carter Portfolio",
    description: `JoannCarter.com is my portfolio website, 
        designed to be clean and straightforward, with a focus on
        easy navigation and prominent access to project demos.
        The goal of this site is to highlight my expertise in 
        front-end development trends and user experience principles,
        creating a digital presence that effectively showcases my skills.`,
    language: [jsLogo, reactLogo, htmlLogo, cssLogo],
    contributions: `I undertook a complete review of my previous site,
        identifying areas for improvement. I then designed
        a modern web layout, gathered content, created a detailed mockup, and proceeded with the build.
        After the initial development phase, I conducted user testing to gather feedback and make necessary adjustments.`,
    colors: [
      "#09784E",
      "#739286",
      "#0f2b8d",
      "#103506",
      "#afd4a5",
      "#b3c4bd",
      "#ffffff",
      "#000000",
    ],
    demo: [portfolioMockUp, portfolioMockUp2, portfolioMockUp3],
    wireframe: "src/images/privatePortalWireframe.jpg",
    afterthoughts: ` When I first developed this project, 
       I was a new developer eager to make my website stand out with 
       a unique design. My initial goal was to create a site that was 
       user-friendly without looking like every other portfolio. However, 
       upon revisiting my original site, I realized that it 
       missed the mark in terms of usability and aesthetics. Over time,
        I learned that users often prefer familiar layouts, 
        as these make navigation easier and more intuitive. Going forward,
        I would draw inspiration from other successful portfolio sites,
        integrating the best design elements from each to create a 
        cohesive and user-centered experience.`,
  },
  {
    id: 4,
    title: "Bar Master",
    description: `Bar Master is a mock website created
        for a fictional bar company called 'Glass'.
        This site serves as a basic inventory management 
        tool, allowing users to add beer kegs to the system and 
        display them on the main screen.`,
    language: [jsLogo, reactLogo, htmlLogo, cssLogo],
    contributions: `As the sole developer on this project,
        I was responsible for designing and implementing the entire
        application from start to finish. This included setting up 
        a solid React structure to ensure a scalable, maintainable 
        codebase and applying UI design principles to create an
        intuitive user experience. The project served as a code 
        review challenge, where I demonstrated my foundational knowledge
        in React components, state management, and component-based
        architecture. I also focused on creating a cohesive visual design,
        carefully considering layout, styling, and interaction to align
        with the needs of a simple inventory management system.`,
    colors: ["#99AAAC", "#331A14", "#DA0A08", "#000000"],
    demo: [barMaster1, barMaster2, barMaster3],
    wireframe: "src/images/privatePortalWireframe.jpg",
    afterthoughts: `Reflecting on this project, I would invest more time in the design phase,
        starting with detailed mockups and a well-defined color palette, rather than
        choosing colors directly from the site to use in my demo. Additionally,
        I would create sample data to improve the visual consistency
        and usability of the interface.`,
  },
  {
    id: 5,
    title: "azZip Pizza",
    description: `AzZip Pizza is a website designed to use JavaScript
        Object Notation (JSON) to create the business logic needed for calculating 
        the total price of various pizza options. The ordering form features radio
        buttons with predefined selections for users to customize their pizza.
        If the user fails to make a selection, the form and total are reset,
        and an alert prompts the user to choose an option.`,
    language: [jQueryLogo, htmlLogo, cssLogo],
    contributions: `I independently developed this project,
     creating the logic for pricing calculations and implementing
      an intuitive form interface to enhance user experience.`,
    colors: ["#99AAAC", "#331A14", "#DA0A08", "#000000"],
    demo: [azZip1, azZip2, azZip3],
    wireframe: "src/images/privatePortalWireframe.jpg",
    gitLink: "https://github.com/lioness3/pizza-code-review-4",
    afterthoughts: `In retrospect, I would enhance the UI to improve readability 
        and user engagement. Applying a universal font would create a more 
        cohesive design, while adding shadow effects could provide depth to the interface.
        Additionally, lightening the purple background color would draw more attention
        to the input fields, improving the overall user experience
        by reducing visual distractions.`,
  },
];
export default content;
