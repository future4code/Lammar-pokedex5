import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToBack, goToHomePage } from "../../routes/Coordinator";
import { Container, Headers, LogoImage, BackImage } from "../homePage/Style";
import Logo from "../../img/pokelogo.png";
import ButtonBack from "../../img/voltar.png";
import { BASE_URL } from "../../constants/Constants";
import useRequestData from "../../hooks/useRequestData";

function Pokedex({ poke, item }) {
  const navigate = useNavigate();
  
  const pokedex = item &&
  item.sort((a, b) => {
      return a.id - b.id
    })
      .map((item) => {
        return (
          <div
            id={item.id}
            key={item.name}
            name={item.name}
            item={item}
            pokedex={pokedex}
          />
        );
      });  

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
        {pokedex}
      </Container>
          </div>
  );
}

export default Pokedex;
