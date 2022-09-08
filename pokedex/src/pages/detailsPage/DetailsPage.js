import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonImg,
  CardContainer,
  Container,
  Headers,
  ImgLogo,
  ImgPokebola,
} from "../homePage/Style";
import {
  goToDetailsPage,
  goToHomePage,
  goToPokedex,
} from "../../routes/Coordinator";
import Logo from "../../img/pokelogo.png";
import Pokebola from "../../img/pokebola.png";

function DetailsPage() {
  const navigate = useNavigate();

  return (
    <div>
      <Container>
        <Headers>
          <div>
            <ImgLogo
              src={Logo}
              title="Home"
              onClick={() => {
                goToHomePage(navigate);
              }}
            ></ImgLogo>
          </div>
          <div>
            <ButtonImg
              onClick={() => {
                goToPokedex(navigate);
              }}
            >
              <ImgPokebola src={Pokebola} title="Pokedex" />
            </ButtonImg>
          </div>
        </Headers>
      </Container>
    </div>
  );
}

export default DetailsPage;
