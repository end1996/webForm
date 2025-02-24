import { useState } from "react";
import Header from "./components/Header";
import ImagePreview from "./components/Screens/imagePreview/ImagePreview";
import Iconos from "./components/Screens/Formulario/Iconos/Iconos";
import BotonesEnmarcado from "./components/Screens/Formulario/BotonesEnmarcado/BotonesEnmarcado";
import SubirImagen from "./components/Screens/Formulario/SubirImagen/SubirImagen";
/*import Dimensiones from "./components/Screens/Formulario/Dimensiones";*/
import Tamanios from "./components/Screens/Formulario/TamanioGrid/Tamanios";
import TextInputContainer from "./components/Screens/Formulario/TextInput/TextInputComentarios";
import AgregarAlCarro from "./components/Screens/Formulario/AgregarAlCarro/AgregarAlCarro";
import styles from './App.module.css';
import MarcosView from "./components/Screens/Formulario/Iconos/Marco/MarcosView";

function App() {
  const [activeView, setActiveView] = useState<string>('main');
  const [selectedButton, setSelectedButton] = useState<string>('soloImpresion'); // solo impresión por defecto
  const [selectedMarco, setSelectedMarco] = useState<string>('');

  const handleIconClick = (view: string) => {
    setActiveView(view);
  };

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  // Manejar el cambio de marco seleccionado
  const handleMarcoChange = (marcoName: string) => {
    setSelectedMarco(marcoName);
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={`${styles.column} ${styles.imagePreviewColumn}`}>
          <ImagePreview selectedButton={selectedButton} selectedMarco={selectedMarco} />
        </div>
        <div className={`${styles.column} ${styles.formColumn}`}>
          <Iconos onIconClick={handleIconClick} />
          {activeView === 'main' && (
            <>
              <SubirImagen />
              <BotonesEnmarcado selectedButton={selectedButton} onButtonClick={handleButtonClick} />
              {/*<Dimensiones  />*/}
              <Tamanios />
              <TextInputContainer />
              <AgregarAlCarro />
            </>
          )}
          {activeView === 'marcos' && (
            <>
              <MarcosView selectedMarco={selectedMarco} onMarcoClick={handleMarcoChange} />
              <AgregarAlCarro />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;