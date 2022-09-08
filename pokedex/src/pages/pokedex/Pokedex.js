import React from "react";
import { useNavigate } from "react-router-dom";
import {
  goToDetailsPage,
  goToHomePage,
  goToPokedex,
} from "../../routes/Coordinator";
import { Container, Headers, ImgLogo } from "../homePage/Style";
import Logo from "../../img/pokelogo.png";

function Pokedex() {
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
        </Headers>
      </Container>
    </div>
  );
}

export default Pokedex;
