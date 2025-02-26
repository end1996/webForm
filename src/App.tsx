import { useState, useContext } from "react";
import Header from "./components/Header";
import ImagePreview from "./components/Screens/imagePreview/ImagePreview";
import Iconos from "./components/Screens/Formulario/Iconos/Iconos";
import BotonesEnmarcado from "./components/Screens/Formulario/BotonesEnmarcado/BotonesEnmarcado";
import SubirImagen from "./components/Screens/Formulario/SubirImagen/SubirImagen";
import Tamanios from "./components/Screens/Formulario/TamanioGrid/Tamanios";
import TextInputContainer from "./components/Screens/Formulario/TextInput/TextInputComentarios";
import AgregarAlCarro from "./components/Screens/Formulario/AgregarAlCarro/AgregarAlCarro";
import styles from './App.module.css';
import MarcosView from "./components/Screens/Formulario/Iconos/Marco/MarcosView";
import { DimensionProvider } from './context/DimensionContext';
import { OrientationProvider, OrientationContext } from './context/OrientationContext';
import Dimensiones from "./components/Screens/Formulario/Dimensiones/Dimensiones";
import TamaniosHorizontal from "./components/Screens/Formulario/TamaniosHorizontalGrid/TamaniosHorizontal";

function App() {
  const [activeView, setActiveView] = useState<string>('main');
  const [selectedButton, setSelectedButton] = useState<string>('soloImpresion'); // solo impresión por defecto
  const [selectedMarco, setSelectedMarco] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('1.5 cm'); // Estado para el tamaño seleccionado

  const handleIconClick = (view: string) => {
    setActiveView(view);
  };

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
    (buttonName === 'enmarcacionImpresion') ? setSelectedMarco('Clásico') : setSelectedMarco(''); // Nombre del primer marco
  };

  // Manejar el cambio de marco seleccionado
  const handleMarcoChange = (marcoName: string) => {
    setSelectedMarco(marcoName);
  };

  // Manejar el cambio de tamaño seleccionado
  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const MainContent = () => {
    const { orientation } = useContext(OrientationContext);

    return (
      <>
        <SubirImagen />
        <BotonesEnmarcado selectedButton={selectedButton} onButtonClick={handleButtonClick} />
        <Dimensiones />
        {orientation === 'horizontal' ? <TamaniosHorizontal /> : <Tamanios />}
        <TextInputContainer />
        <AgregarAlCarro />
      </>
    );
  };

  return (
    <DimensionProvider>
      <OrientationProvider>
        <Header />
        <div className={styles.container}>
          <div className={`${styles.column} ${styles.imagePreviewColumn}`}>
            <ImagePreview
              selectedButton={selectedButton}
              selectedMarco={selectedMarco}
              selectedSize={selectedSize}
            />
          </div>
          <div className={`${styles.column} ${styles.formColumn}`}>
            <Iconos onIconClick={handleIconClick} />
            {activeView === 'main' && <MainContent />}
            {activeView === 'marcos' && (
              <>
                <MarcosView
                  selectedMarco={selectedMarco}
                  onMarcoClick={handleMarcoChange}
                  onSizeChange={handleSizeChange}
                />
                <AgregarAlCarro />
              </>
            )}
          </div>
        </div>
      </OrientationProvider>
    </DimensionProvider>
  );
}

export default App;