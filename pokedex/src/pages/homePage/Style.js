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
export const CardContainer = styled.section`
  width: 18vw;
  height: 45vh;
  color: black;
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid whitesmoke;
  box-shadow: 5px 5px 5px lightgray;
  :hover {
    transform: translate(0px, -2%);
    background: rgb(255, 236, 157);
    background: linear-gradient(
      0deg,
      rgba(255, 236, 157, 1) 0%,
      48%,
      #7eceb3 100%
    );
    transition: 0.3s;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ImgPoke = styled.img`
  width: 12vw;
`;
export const ImgPokebola = styled.img`
  width: 5vw;
`;
export const ButtonImg = styled.button`
  border: none;
  border-radius: 100%;
  margin-right: 35px;
  :hover {
    transform: rotate(1turn);
    transition: 0.8s;
    cursor: pointer;
  }
`;
export const H2 = styled.h2`
  color: orange;
  text-shadow: 1px 1px 1px black;
  font-size: 2vw;
  margin: 10px;
`;

export const ImgLogo = styled.img`
  width: 22vw;
  margin: 30px;
  margin-bottom: 10px;
  :hover {
    transform: translate(0px, -0.5%);
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const Buttons = styled.button`
  color: whitesmoke;
  border: none;
  padding: 10px;
  background-color: #3fa796;
  border-radius: 10px;
  margin: 10px;
  :hover {
    background-color: orange;
    transition: 0.1s;
    cursor: pointer;
  }
`;
