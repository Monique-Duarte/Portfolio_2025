import "./App.css";
import Footer from "./Componentes/Footer";
import Inicio from "./Pagina/index";
import './Componentes/lib/i18n'; // Importando o i18n para internacionalização
import Header from "./Componentes/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectsList from "./Pagina/ProjectsList";


function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/projects" element={<ProjectsList />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
