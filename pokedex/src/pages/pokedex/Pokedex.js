import React from "react";
import { useNavigate } from "react-router-dom";
import { goToDetailsPage, goToHomePage, goToPokedex } from "../../routes/Coordinator";
import {Container, Headers } from "../homePage/Style";


function Pokedex() {
    const navigate = useNavigate();
    
    return (
      <div>
      <Container>
        <Headers>
          <div>
            <h1>Pokedex</h1>
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
      </Container>
    </div>
    );
  }
  
  export default Pokedex;