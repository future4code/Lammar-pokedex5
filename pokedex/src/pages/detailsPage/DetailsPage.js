import React from "react";
import { useNavigate } from "react-router-dom";
import { CardContainer, Container, Headers } from "../homePage/Style";
import { goToDetailsPage, goToHomePage, goToPokedex } from "../../routes/Coordinator";


function DetailsPage() {
    const navigate = useNavigate();
    
    return (
      <div>
      <Container>
        <Headers>
          <div>
            <h1>Detalhes</h1>
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
        <CardContainer></CardContainer>
        <CardContainer></CardContainer>
        <CardContainer></CardContainer>
        <CardContainer></CardContainer>
        <CardContainer></CardContainer>
        <CardContainer></CardContainer>
        <CardContainer></CardContainer>
        <CardContainer></CardContainer>
      </Container>
    </div>
    );
  }
  
  export default DetailsPage;