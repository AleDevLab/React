import MiComponente from './components/MiComponente';
import Boton from './components/buttons/Boton';
import Navbar from './components/Navbar';
import './App.css'
function App() {
    const manejarClick = () => {
    alert('¡Botón presionado! 🚀');
  };
  return (
   <>
      <Navbar />
      <h1>¡Hola mundo desde React! 😎</h1>
      <MiComponente />
      <Boton texto="Haz clic aquí" onClick={manejarClick} />
    </>
  );
}

export default App;
