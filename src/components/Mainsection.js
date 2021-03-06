import styled from "styled-components";
import reeves from "../assets/transparent_banner.png";
import video from "../assets/bg_vid.mp4";
import PresaleCountdown from "./PresaleCountdown";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  padding-bottom: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden !important;
`;

const Title = styled.h1`
  padding: 5px;
  text-transform: uppercase;
  font-size: 4.5rem;
  margin: 0;
  z-index: 2;
  text-shadow: 0px 0px 7px rgba(255, 255, 255, 0.3);
  line-height: 1;
  color: transparent;
  text-transform: uppercase;
  background-image: linear-gradient(to left, darkgreen, white, green);
  -webkit-background-clip: text;
  animation: animate 7s linear infinite;
  -webkit-bacground-size: 500%--webkit-bacground-size;
  background-size: 500%;
  text-align: center;
  font-weight: bold;
  margin: 40px 0px;
  @media (max-width: 600px) {
    font-size: 4rem;
    padding-top: 250px;
  }

  @keyframes animate {
    0% {
      background-position: 0 100%;
    }
    50% {
      background-position: 100% 0;
    }
    100% {
      background-position: 0 100%;
    }
  }
`;

const Video = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  opacity: 0.1;
  background-size: cover;
  background-image: url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg);
`;

const Mainsection = () => {
  return (
    <>
      <Container>
        <Video />
        <Title>Crypto Reeves</Title>
        <img className="banner" src={reeves} />
        <div className="raritytitle">
          <p>
            Crypto Reeves is a multi-themed, 1302 NFT's Fan Art collection
            living in the Polygon chain
          </p>
        </div>
      </Container>
      <PresaleCountdown />
    </>
  );
};

export default Mainsection;
