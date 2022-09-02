import Rotas from "./routes/Routes";
import "./App.css";
import CartContext from "./context/Context";
import { useState } from "react";



function App() {
  const [pokedex, setPokedex] = useState([]);


  return (
    <CartContext.Provider value={{pokedex:pokedex, setPokedex:setPokedex}}>
      <Rotas />
     </CartContext.Provider>
  );
}

export default App;
