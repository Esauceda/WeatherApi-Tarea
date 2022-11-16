import './App.css';
import MenuBar from './Componentes/MenuBar';
import BuscarCiudad from './Componentes/BuscarCiudad';
import TablaCiudades from './Componentes/TablaCiudades';
import Footer from './Componentes/Footer';

function App() {
  return (
    <div className='mainScreen'>   
        <MenuBar/>
        <div>
          <BuscarCiudad/>
          <TablaCiudades/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
