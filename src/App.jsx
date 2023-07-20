import 'semantic-ui-css/semantic.min.css'
import Navegacion from './Componenetes/Navegacion';
import Footer from './Componenetes/Footer';
import Home from './Componenetes/Home';
import Vite from './Componenetes/Vite';
import Formulario from './Componenetes/Formulario';
import { Routes, Route } from 'react-router-dom';
import './app.css'

function App() {
  return(
    <>
      <Navegacion />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/vite" element={ <Vite />} />
        <Route path="/formulario" element={ <Formulario />} />
        
      </Routes>
      <Footer/>
    </>
  )
}

export default App;
