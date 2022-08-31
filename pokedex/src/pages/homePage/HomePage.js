import React from "react";
import { useNavigate } from "react-router-dom";
import {
  goToDetailsPage,
  goToHomePage,
  goToPokedex,
} from "../../routes/Coordinator";
import { CardContainer, Headers, Container } from "./Style";

function HomePage() {
  const navigate = useNavigate();

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

export default HomePage;
