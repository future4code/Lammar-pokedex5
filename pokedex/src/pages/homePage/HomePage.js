import React from "react";
import { useNavigate } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import {
  goToDetailsPage,
  goToHomePage,
  goToPokedex,
} from "../../routes/Coordinator";

import { CardContainer, Headers, Container, Imgs } from "./Style";
import { BASE_URL } from "../../constants/Constants";
// import CartContext from "../../context/Context";
// import Pokedex from "../pokedex/Pokedex";
import { useState } from "react";
import axios from "axios";

function HomePage(item) {
  const navigate = useNavigate();
  // const context = useContext(CartContext)
//   const [data] = useRequestData(
//     ${BASE_URL}/
//   );

// // const { id } = useParams();

// const [img] = useRequestData( 
//     ${BASE_URL}/1
//   );

const [data]=useRequestData(BASE_URL)
// const info= []

const pokemon =  data && data.results.map((item)=> { 
    const goToDetailsPage = () => {
        navigate('/details-page')
        localStorage.setItem('url', item.url)
    }

    const Imgs = () =>{
        const [img, setImg] = useState('')
        axios.get(item.url).then(response => {
            setImg(response.data.sprites.front_default)
        })
        return(
            <img src={img} alt='imagem-pokemon'/>
        )
    }

return (
            <CardContainer key={item.name}>
            <Imgs/>
            <p>{item.name}</p>

            <button>Adicionar a Pokédex</button>
            <button onClick={goToDetailsPage} >Ver Detalhes</button>

            </CardContainer>
        )
    }) 



    return(
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
      </Container>
    </div>
  );
}

export default HomePage;