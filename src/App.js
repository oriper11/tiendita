import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <>
      TITULO
      </>
        <NavBar />
        <Routes>
        <Route path="/" element= {<ItemListContainer /> }></Route>
        <Route path="/category/:category:id" element= {<ItemListContainer /> }></Route>
        <Route path="/detalle/:id" element= {<ItemDetailContainer /> }></Route>
        <Route path="*" element={<h1>404: Ruta no encontrada</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;