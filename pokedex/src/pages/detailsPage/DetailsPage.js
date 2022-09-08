import React from "react";
import { useNavigate } from "react-router-dom";
import {
  PokeButton,
  Container,
  Headers,
  LogoImage,
  ImgPokeball,
} from "../homePage/Style";
import {
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
            <LogoImage
              src={Logo}
              title="Home"
              onClick={() => {
                goToHomePage(navigate);
              }}
            ></LogoImage>
          </div>
          <div>
            <PokeButton
              onClick={() => {
                goToPokedex(navigate);
              }}
            >
              <ImgPokeball src={Pokebola} title="Pokedex" />
            </PokeButton>
          </div>
        </Headers>
      </Container>
    </div>
  );
}

export default DetailsPage;
