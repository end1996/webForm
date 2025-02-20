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

  const handleIconClick = (view: string) => {
    setActiveView(view);
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={`${styles.column} ${styles.imagePreviewColumn}`}>
          <ImagePreview />
        </div>
        <div className={`${styles.column} ${styles.formColumn}`}>
          <Iconos onIconClick={handleIconClick} />
          {activeView === 'main' && (
            <>
              <SubirImagen />
              <BotonesEnmarcado />
              {/*<Dimensiones  />*/}
              <Tamanios />
              <TextInputContainer />
              <AgregarAlCarro />
            </>
          )}
          {activeView === 'marcos' && (
            <>
              <MarcosView />
              <AgregarAlCarro />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;