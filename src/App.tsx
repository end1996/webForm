import Header from "./components/Header";
import ImagePreview from "./components/Screens/imagePreview/ImagePreview";
import Iconos from "./components/Screens/Formulario/Iconos/Iconos";
import BotonesEnmarcado from "./components/Screens/Formulario/BotonesEnmarcado/BotonesEnmarcado";
import SubirImagen from "./components/Screens/Formulario/SubirImagen/SubirImagen";
import TextInputContainer from "./components/Screens/Formulario/TextInput/TextInputComentarios";
import styles from './App.module.css';
import MarcosView from "./components/Screens/Formulario/Iconos/Marco/MarcosView";
import Dimensiones from "./components/Screens/Formulario/Dimensiones/Dimensiones";
import TamaniosHorizontal from "./components/Screens/Formulario/TamaniosHorizontalGrid/TamaniosHorizontal";
import { AgregarAlCarro } from "./components/Screens/Formulario/AgregarAlCarro/AgregarAlCarro";
import { useAppStore } from "./stores/app.store";
import { useOrientationStore } from "./stores/orientations.store";
import Tamanios from "./components/Screens/Formulario/TamanioGrid/Tamanios";

function App() {
  // Zustand: Estados globales
  const {
    selectedButton, selectedMarco, selectedSize, imageSrc, activeView,
    setSelectedButton, setSelectedMarco, setSelectedSize, setActiveView,
  } = useAppStore();

  const { orientation } = useOrientationStore();

  // Manejar cambios de vista
  const handleIconClick = (view: string) => setActiveView(view);

  // Manejar cambios en los estados globales
  const handleButtonClick = (button: string) => setSelectedButton(button);
  const handleMarcoChange = (marco: string) => setSelectedMarco(marco);
  const handleSizeChange = (size: string) => setSelectedSize(size);

  // Componente de contenido principal
  const MainContent = () => (
    <>
      {<SubirImagen />}
      <BotonesEnmarcado selectedButton={selectedButton} onButtonClick={handleButtonClick} />
      <Dimensiones />
      {orientation === 'horizontal' ? <TamaniosHorizontal /> : <Tamanios />}
      <TextInputContainer />
      <AgregarAlCarro selectedMarco={selectedMarco} selectedSize={selectedSize} imageSrc={imageSrc} id={0}/>
    </>
  );

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={`${styles.column} ${styles.imagePreviewColumn}`}>
          <ImagePreview selectedButton={selectedButton} selectedMarco={selectedMarco} selectedSize={selectedSize} />
        </div>
        <div className={`${styles.column} ${styles.formColumn}`}>
          <Iconos onIconClick={handleIconClick} />
          {activeView === 'main' && <MainContent />}
          {activeView === 'marcos' && (
            <>
              <MarcosView selectedMarco={selectedMarco} onMarcoClick={handleMarcoChange} onSizeChange={handleSizeChange} />
              <AgregarAlCarro selectedMarco={selectedMarco} selectedSize={selectedSize} imageSrc={imageSrc} id={0}/>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;