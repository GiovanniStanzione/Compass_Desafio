import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import Home from "./paginas/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pagina404 from "./paginas/Pagina404";
import "./assets/app.css";
import { ContextProvider } from "./context";
import Repositorio from "./paginas/Repositorio";
import RepositorioFavorito from "./paginas/RepositorioFavorito/RepositorioFavorito";

function App() {
  return (
    <ContextProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<Pagina404 />} />
          <Route path="/repos" element={<Repositorio />} />
          <Route path="/reposfav" element={<RepositorioFavorito />} />
        </Switch>
        <Footer />
      </Router>
    </ContextProvider>
  );
}

export default App;
