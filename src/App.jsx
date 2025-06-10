import "./App.css";
import Footer from "./Componentes/Footer";
import Inicio from "./Pagina/index";
import "./Componentes/lib/i18n"; 
import Header from "./Componentes/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectsList from "./Pagina/ProjectsList";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <BrowserRouter>
      <Header onSearch={setSearchTerm} />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route
          path="/projects"
          element={
            <ProjectsList
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
