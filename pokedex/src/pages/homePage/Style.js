import styled from "styled-components";

export const Headers = styled.div`
  font-family: Dax;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: linear-gradient(#254949, #7eceb3, #407072);
  color: whitesmoke;
  width: 100vw;
  height: 20vh;
  padding-left: 30px;
  padding-right: 30px;
`;
export const CardContainer = styled.div`
  width: 18vw;
  height: 45vh;
  color: black;
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid lightgrey;
  box-shadow: 5px 5px 5px lightgray;
  :hover {
    transform: translate(0px, -2%);
    background-color: whitesmoke;
    transition: 0.3s;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const PokemonPhoto = styled.img`
  width: 12vw;
`;
export const ImgPokeball = styled.img`
  width: 5vw;
`;
export const PokeButton = styled.button`
  border: none;
  border-radius: 100%;
  margin-right: 35px;
  :hover {
    transform: rotate(1turn);
    transition: 0.8s;
    cursor: pointer;
  }
`;
export const PokemonName = styled.h2`
  color: orange;
  text-shadow: 1px 1px 1px darkslategrey;
  font-size: 2vw;
  margin: 10px;
`;

export const LogoImage = styled.img`
  width: 22vw;
  margin: 30px;
  margin-bottom: 10px;
  :hover {
    transform: translate(0px, -0.5%);
    cursor: pointer;
    opacity: 0.9;
  }
`;
export const BackImage = styled.img`
  width: 8vw;
  margin: 30px;
  margin-bottom: 10px;
  :hover {
    transform: translate(0px, -1%);
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const CardButtons = styled.button`
  color: whitesmoke;
  border: none;
  padding: 10px;
  background-color: #3fa796;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 3px 3px 3px lightgray;
  :hover {
    background-color: orangered;
    transition: 0.2s;
    cursor: pointer;
  }
`;
