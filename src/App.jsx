import "./App.css"
import Footer from "./Componentes/Footer";
import Corpo from "./Pagina/Corpo/Corpo";
import './Componentes/lib/i18n';
import Menu from "./Componentes/Menu/index";


function App() {

  return (
    <>
      <Menu style={{ backgroundColor: "#000916", with:"100%" }}/>
      <main className="main">
      <Corpo />
      </main>
      <Footer />
    </>
  );
}

export default App;
