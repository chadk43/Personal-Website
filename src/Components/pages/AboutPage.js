import classes from "./About.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import CardVertical from "../Cards/CardGroup";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import kirbyimage from "../Navbar/images/kirby-paper.jpg";
import mountroyal from "../Navbar/images/mountroyal.jpg";
import resume from "../Navbar/images/resume.jpg";
import albertanursing from "../Navbar/images/albertanursing.jpg";
// import mountain from "../Navbar/images/mountain.jpg";
// import wilderness from "../Navbar/images/wilderness.jpg";
// import sunset from "../Navbar/images/sunset.jpg";
import reactimg from "../Navbar/images/react.png";
import javascriptimg from "../Navbar/images/javascript.jpg";
import sqlimg from "../Navbar/images/sql.jpg";
import leagueoflegends from "../Navbar/images/league.jpeg";
import runeterra from "../Navbar/images/runeterra.jpg";
import aoe from "../Navbar/images/aoe.jpg";
//import Card from "../Components/Cards/Card";
//className={classes["rounded"]}
//<h1>Photography</h1>

//title={Card1.title} imgUrl={Card1.imgUrl} body={Card1.body}

const About1 = {
  title: "Schooling",
  imgUrl: mountroyal,
  body: "Mount Royal University",
  buttontitle: "Details",
  buttonref: "",
  bodydepth: "Graduated with a Bachelor of Science: Computer Science, with a focus in mathematics. I especially enjoyed learning web development, databases and algorithms."
};

const About2 = {
  title: "Resume",
  imgUrl: resume,
  body: "",
  buttontitle: "Download",
  buttonref: "",
  bodydepth: ""
};
const About3 = {
  title: "Work Experience",
  imgUrl: albertanursing,
  body: "Alberta Nursing",
  buttontitle: "Details",
  buttonref: "",
  bodydepth: "I am a part-time web designer for the Alberta Association of Nurses. I utilize wordpress, photoshop and mailchimp to maintain and update their website."
};

// const Photography1 = {
//   title: "White Rock, BC",
//   imgUrl: sunset,
//   body: "",
//   buttontitle: "View Full",
//   buttonref: "",
// };

// const Photography2 = {
//   title: "Spray Valley Provincial Park",
//   imgUrl: wilderness,
//   body: "",
//   buttontitle: "View Full",
//   buttonref: "",
// };
// const Photography3 = {
//   title: "Kananaskis, Alberta",
//   imgUrl: mountain,
//   body: "",
//   buttontitle: "View Full",
//   buttonref: "",
// };

const Gaming1 = {
  title: "League of Legends",
  imgUrl: leagueoflegends,
  body: "",
  buttontitle: "Details",
  buttonref: "",
  bodydepth: "A fun MOBA that fuels my competitive spirit."
};

const Gaming2 = {
  title: "Age of Empires 4",
  imgUrl: aoe,
  body: "",
  buttontitle: "Details",
  buttonref: "",
  bodydepth: "An RTS that simulates ancient civilizations."
};
const Gaming3 = {
  title: "Legends of Runeterra",
  imgUrl: runeterra,
  body: "",
  buttontitle: "Details",
  buttonref: "",
  bodydepth: "A card game with beautiful art"
};

const Programming1 = {
  title: "JavaScript",
  imgUrl: javascriptimg,
  body: "",
  buttontitle: "Details",
  buttonref: "",
  bodydepth: "My main language of choice because of its versatility, support and ease of use. Most of my personal projects are written in javascript."
};

const Programming2 = {
  title: "React",
  imgUrl: reactimg,
  body: "",
  buttontitle: "Details",
  buttonref: "",
  bodydepth: "I used this framework for my website along, with bootstrap."
};
const Programming3 = {
  title: "SQL",
  imgUrl: sqlimg,
  body: "",
  buttontitle: "Details",
  buttonref: "",
  bodydepth: "A language I really enjoyed in school. A data project will be next up for this website."
};

const AboutPage = () => {
  const [aboutIsOpen, setAboutIsOpen] = useState(false);
  const [photographyIsOpen, setPhotographyIsOpen] = useState(false);
  const [programmingIsOpen, setProgrammingIsOpen] = useState(false);
  const [gamingIsOpen, setGamingIsOpen] = useState(false);

  const aboutCards = () => {
    return setAboutIsOpen(!aboutIsOpen);
  };

  const photographyCards = () => {
    return setPhotographyIsOpen(!photographyIsOpen);
  };

  const programmingCards = () => {
    return setProgrammingIsOpen(!programmingIsOpen);
  };

  const gamingCards = () => {
    return setGamingIsOpen(!gamingIsOpen);
  };

  return (
    <div>
      <button className={classes["button"]} onClick={() => aboutCards()}>
        Career
      </button>
      {aboutIsOpen ? (
        <CardVertical
          title1={About1.title}
          title2={About2.title}
          title3={About3.title}
          body1={About1.body}
          body2={About2.body}
          body3={About3.body}
          image1={About1.imgUrl}
          image2={About2.imgUrl}
          image3={About3.imgUrl}
          button1={About1.buttontitle}
          button2={About2.buttontitle}
          button3={About3.buttontitle}
          bodydepth1={About1.bodydepth}
          bodydepth2={About2.bodydepth}
          bodydepth3={About3.bodydepth}
        />
      ) : (
        ""
      )}
      
      <button className={classes["button"]} onClick={() => programmingCards()}>
        Programming
      </button>
      {programmingIsOpen ? (
        <CardVertical
          title1={Programming1.title}
          title2={Programming2.title}
          title3={Programming3.title}
          body1={Programming1.body}
          body2={Programming2.body}
          body3={Programming3.body}
          image1={Programming1.imgUrl}
          image2={Programming2.imgUrl}
          image3={Programming3.imgUrl}
          button1={Programming1.buttontitle}
          button2={Programming2.buttontitle}
          button3={Programming3.buttontitle}
          bodydepth1={Programming1.bodydepth}
          bodydepth2={Programming2.bodydepth}
          bodydepth3={Programming3.bodydepth}
        />
      ) : (
        ""
      )}
      
      <button className={classes["button"]} onClick={() => gamingCards()}>
        Gaming
      </button>
      {gamingIsOpen ? (
        <CardVertical
          title1={Gaming1.title}
          title2={Gaming2.title}
          title3={Gaming3.title}
          body1={Gaming1.body}
          body2={Gaming2.body}
          body3={Gaming3.body}
          image1={Gaming1.imgUrl}
          image2={Gaming2.imgUrl}
          image3={Gaming3.imgUrl}
          button1={Gaming1.buttontitle}
          button2={Gaming2.buttontitle}
          button3={Gaming3.buttontitle}
          bodydepth1={Gaming1.bodydepth}
          bodydepth2={Gaming2.bodydepth}
          bodydepth3={Gaming3.bodydepth}
        />
      ) : (
        ""
      )}
    
    </div>
  );
};
export default AboutPage;
