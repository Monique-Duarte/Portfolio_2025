import "./App.css"
import Footer from "./Componentes/Footer";
import Corpo from "./Pagina/Corpo/Corpo";
import './Componentes/lib/i18n';


function App() {

  return (
    <>
      <main className="main">
        <Corpo />
      </main>
      <Footer />
    </>
  );
}

export default App;
