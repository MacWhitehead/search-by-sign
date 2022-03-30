import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "./aboutUs.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import beth from "../assets/beth.jpg";
import mackayla from "../assets/mackayla.jpg";
import daxon from "../assets/daxon.jpg";
import lyndsie from "../assets/lyndsie.jpeg";

const AboutUsPage = () => {
  return (
    <Container className="aboutUsMainContainer">
      <p className="aboutUsHeader">About Us</p>
      <Carousel controls={false} variant="dark" className="carouselContainer">
        <Carousel.Item>
          <div className="image-wrapper">
            <img
              className="d-block circle-image"
              src={beth}
              alt="Creator - Elisabeth Sheber"
            />
          </div>
          <h3>Creator</h3>
          <p>Elisabeth Sheber</p>
          {/* <p>Deaf Studies: Interpreting BA</p> */}
          <p>
            In my time as a Deaf Studies Interpreting student at UVU, one of the
            biggest struggles is when I saw a sign used in a place I couldn't
            have it clarified, and I had no idea what it meant or how to then
            reproduce and use it myself. I wanted to create a dictionary app
            that allowed the user to search for a sign by submitting a video of
            it.
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image-wrapper">
            <img
              className="d-block circle-image"
              src={mackayla}
              alt="App Developer - MacKayla Whitehead"
            />
          </div>

          <h3>App Developer</h3>
          <p>MacKayla Whitehead</p>
          <p>
            MacKayla was born and raised in Utah. She is a sophomore at UVU
            studying for a BAS in Software Development. She currently works as a
            Junior Developer making websites and apps. In her spare time she
            likes to paint with watercolor, garden, and play video games.
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image-wrapper">
            <img
              className="d-block circle-image"
              src={lyndsie}
              alt="App Designer - Lyndsie Leavitt"
            />
          </div>

          <h3>App Designer</h3>
          <p>Lyndsie Leavitt</p>
          <p>
            Lyndsie is working towards her Bachelors of Fine Arts Degree as a
            Graphic Design student at Utah Valley University. She hopes to
            eventually work in the publishing industry or doing advertising for
            entertainment industries. When she isn't working on art, she enjoys
            hiking, eating good food, and experimenting with new hobbies
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image-wrapper">
            <img
              className="d-block circle-image"
              src={daxon}
              alt="Videographer - Daxon Geldmacher"
            />
          </div>

          <h3>Videographer</h3>
          <p>Daxon Geldmacher</p>
          <p>
            Daxon Geldmacher is a sophomore at UVU currently studying towards
            his BA in Digital Cinema Studies. He loves movies, video games,
            hiking, and Del Taco. He one day hopes to direct feature films.
          </p>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default AboutUsPage;
