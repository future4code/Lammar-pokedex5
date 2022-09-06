import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import {
  goToDetailsPage,
  goToHomePage,
  goToPokedex,
} from "../../routes/Coordinator";

import { CardContainer, Headers, Container, Imgs } from "./Style";
import { BASE_URL } from "../../constants/Constants";
import CartContext from "../../context/Context";
import Pokedex from "../pokedex/Pokedex";

function HomePage(item) {
  const navigate = useNavigate();
  const context = useContext(CartContext)
  const [data] = useRequestData(
    `${BASE_URL}/`
  );

// const { id } = useParams();

const [img] = useRequestData( 
    `${BASE_URL}/1`
  );


  const pokemon =        
  data&&
  data.results.map((pokemons, index) => {
    return (
      //data.sprites.front_default
      <div>
      <CardContainer key={pokemons.index}>
       <Imgs alt= "pokemons" src={img.sprites.front_default}></Imgs>
       <h2>{pokemons.name}</h2>
       <button >Adicionar à Pokedex</button>
 
      </CardContainer>
      </div>
    );
  });
  // const addToPokedex = (poke) => {
  //   const newPokedex = [...context.pokedex]

  //   const pokeIndex = context.pokedex.findIndex((item) => item.id === poke.id)
    
  //   if(pokeIndex === -1){
  //     newPokedex.push({...poke, quantity: 1})
  //   } else {
  //     newPokedex[pokeIndex].quantity++
  //   }

  //   context.setPokedex(newPokedex)
  
  // }




  return (
    <div>
      <Container>
        <Headers>
          <div>            
            <h1>HomePage</h1>
            
          </div>
          <div>
            <button
              onClick={() => {
                goToPokedex(navigate);
              }}
            >
              Pokedex
            </button>
            <button
              onClick={() => {
                goToDetailsPage(navigate);
              }}
            >
              Detalhes
            </button>
            <button
              onClick={() => {
                goToHomePage(navigate);
              }}
            >
              HomePage
            </button>
          </div>
        </Headers>
        {pokemon}      
{/* <div>
{data && data.results.map((poke) => {
        return <Pokedex key={poke.id} poke={poke} addToPokedex={addToPokedex}/>
      })}
</div> */}

      </Container>
    </div>
  );
}

export default HomePage;
