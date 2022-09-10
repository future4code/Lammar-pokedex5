import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"
import {
  PokeButton,
  Container,
  Headers,
  LogoImage,
  ImgPokeball,
} from "../homePage/Style";
import {
   ImgDetails, PowerDetails, SuperPowerDetails, SuperPowerDetailsMini 
  } from "./Style";
import {
  goToHomePage,
  goToPokedex,
} from "../../routes/Coordinator";
import Logo from "../../img/pokelogo.png";
import Pokebola from "../../img/pokebola.png";

const DetailsPage = () => {
  const navigate = useNavigate()
  const [selectPoke, setSelectPoke] = useState({})
  
  

  // const getDetailsPoke = () => {
  //   axios.get(`https://pokeapi.co/api/v2/pokemon/2`)
  //   .then((res) => {
  //     setSelectPoke(res.data)
  //     console.log(res.data)
  //   })
  //   .catch((err) => {
  //     alert("Erro")
  //   })
  // }

  // useEffect(() => {
  //  getDetailsPoke()
  // }, [])
  useEffect(() => {
    //O useParams está retornando um Objeto - transformando o objeto em string para conseguir chamar o axios
    // var nameObject = JSON.stringify(name);
    // var nameString = nameObject.slice(7, -3);

    
    
   
    axios.get(`https://pokeapi.co/api/v2/pokemon/1/`)
        .then((res) => {
          setSelectPoke(res.data)
        }).catch((error) => {
            console.log(error)
        })
}, ([navigate]))

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
        <div>
              <ImgDetails><img src={selectPoke && selectPoke.sprites && selectPoke.sprites.front_default} /></ImgDetails>
              <ImgDetails><img src={selectPoke && selectPoke.sprites && selectPoke.sprites.back_default} /></ImgDetails>
              </div>
              
              <div>
              <PowerDetails>                    <div>
                        <h2>Stats</h2>
                        {
                        selectPoke.stats && selectPoke.stats.map((stat) => {
                            return (
                                <div key={stat.stat.name}>
                                    <strong> {stat.stat.name}: </strong> <p>{stat.base_stat}</p>
                                </div>
                            )
                        })
                    }
                    </div></PowerDetails>
              </div>
              <div>
              <SuperPowerDetailsMini><div>                 {
                            selectPoke.types && selectPoke.types.map((type) => {
                                return (
                                    <div key={type.type.name}>
                                        <p> {type.type.name} </p>
                                    </div>
                                )
                            })
                        }</div></SuperPowerDetailsMini>
              <SuperPowerDetails><div>            {
                            selectPoke.moves && selectPoke.moves.map((move,index) => {
                                if (index <= 3 && selectPoke.moves.length ) {
                                return (
                                        <div key={move.move.name}>
                                            <p> {move.move.name} </p>
                                        </div>
                                    

                                )}
                        })
                        }</div></SuperPowerDetails>
              </div>
      </Container>
    </div>
  );
}

  export default DetailsPage;
