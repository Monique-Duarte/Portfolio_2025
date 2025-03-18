import Header from "./Componentes/Header/Header";
import Projects from "./Componentes/Projects/Projects";
import Footer from "./Componentes/Footer/Footer";
import Menu from "./Componentes/Menu/Menu";
import "./App.css"

function App() {
  return (
    <>
      <main className="main">
        <div style={{ backgroundColor: "#000916" }}>
          <Menu />
        </div>
        <Header />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
