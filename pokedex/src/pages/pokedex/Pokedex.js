import React from "react";
import { useNavigate } from "react-router-dom";
import { goToBack, goToHomePage } from "../../routes/Coordinator";
import { Container, Headers, LogoImage, BackImage } from "../homePage/Style";
import Logo from "../../img/pokelogo.png";
import ButtonBack from "../../img/voltar.png";

function Pokedex() {
  const navigate = useNavigate();

  return (
    <div>
      <Container>
        <Headers>
          <LogoImage
            src={Logo}
            title="Home"
            onClick={() => {
              goToHomePage(navigate);
            }}
          ></LogoImage>
          <BackImage
            src={ButtonBack}
            title="Voltar"
            onClick={() => {
              goToBack(navigate);
            }}
          ></BackImage>
        </Headers>
      </Container>
    </div>
  );
}

export default Pokedex;
