import React from "react";
import { useNavigate } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import {
  goToHomePage,
  goToPokedex,
} from "../../routes/Coordinator";
import {
  CardContainer,
  Headers,
  Container,
  PokemonPhoto,
  LogoImage,
  CardButtons,
  PokemonName,
  ImgPokeball,
  PokeButton,
} from "./Style";
import { BASE_URL } from "../../constants/Constants";
// import CartContext from "../../context/Context";
// import Pokedex from "../pokedex/Pokedex";
import { useState } from "react";
import axios from "axios";
import Logo from "../../img/pokelogo.png";
import Pokebola from "../../img/pokebola.png";

function HomePage(item) {
  const navigate = useNavigate();

  const [cartPoke, setCartPoke] = useState([]);
  const addToPoke = (pokemon) => {
    const newCart = [...cartPoke];

    const productIndex = cartPoke.findIndex((item) => item.id === pokemon.id);

    if (productIndex === -1) {
      newCart.push({ ...pokemon });
    } else {
      newCart[productIndex].quantity++;
    }

    setCartPoke(newCart);
    console.log(newCart);
  };

  const [data] = useRequestData(BASE_URL);

  const pokemon =
    data &&
    data.results.map((item) => {
      const goToDetailsPage = () => {
        navigate("/details-page");
        localStorage.setItem("url", item.url);
      };

      const Imgs = () => {
        const [img, setImg] = useState("");
        axios.get(item.url).then((response) => {
          setImg(response.data.sprites.front_default);
        });
        return <PokemonPhoto src={img} alt="imagem-pokemon" />;
      };

      return (
        <CardContainer key={item.name} addToPoke={addToPoke}>
          <Imgs />
          <PokemonName>{item.name}</PokemonName>

          <CardButtons onClick={() => addToPoke(pokemon)}>Capturar</CardButtons>
          <CardButtons onClick={() => goToDetailsPage(navigate, pokemon.name)}>Detalhes</CardButtons>
        </CardContainer>
      );
    });
    

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
        {pokemon}
      </Container>
    </div>
  );
}

export default HomePage;
