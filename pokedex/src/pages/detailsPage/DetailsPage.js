import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Headers,
  LogoImage,
  BackImage
} from "../homePage/Style";
import {
  goToBack,
  goToHomePage,
} from "../../routes/Coordinator";
import Logo from "../../img/pokelogo.png";
import ButtonBack from "../../img/voltar.png";

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
          <BackImage
            src={ButtonBack}
            title="Voltar"
            onClick={() => {
              goToBack(navigate);
            }}
          ></BackImage>
          </div>
        </Headers>
      </Container>
    </div>
  );
}

export default DetailsPage;
