import Rotas from "./routes/Routes";
import "./App.css";
import CartContext from "./context/Context";

function App() {
  return (
    <CartContext.Provider>
      <Rotas />
    </CartContext.Provider>
  );
}

export default App;
