import MiComponente from './components/MiComponente';
import Boton from './components/buttons/Boton';
import Navbar from './components/Navbar';
import Title from './components/texto/Title';
import './App.css'
function App() {
    const manejarClick = () => {
    alert('¡Botón presionado! 🚀');
  };
  return (
   <>
      <Navbar />
       <Title
        headingParts={[
          { text: "Alejandro Serrano", color: "white" },
          { text: "Developer", color: "rgb(109, 247, 253)" }
        ]}
        paragraph="Bienvenido a mi portafolio de React."
      />

      <MiComponente />
      <Boton texto="Haz clic aquí" onClick={manejarClick} />
    </>
  );
}

export default App;
