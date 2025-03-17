import Header from "./Componentes/Header/Header";
import Projects from "./Componentes/Projects/Projects";
import Footer from "./Componentes/Footer/Footer";
import Menu from "./Componentes/Menu/Menu";

function App() {
  return (
    <>
      <main className="main">
        <Header />
        <Projects />
      </main>
      <div style={{ backgroundColor: "#000916"}}>
        <Menu />
      </div>
      <Footer />
    </>
  );
}

export default App;
