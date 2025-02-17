import Header from "./components/Header";
import ImagePreview from "./components/Screens/imagePreview/ImagePreview";
import Iconos from "./components/Screens/Formulario/Iconos";
import BotonesEnmarcado from "./components/Screens/Formulario/BotonesEnmarcado";
import SubirImagen from "./components/Screens/Formulario/SubirImagen";
import styles from './App.module.css';

function App() {
  return <>
    <Header />
    <div className={styles.container}>
      <div className={`${styles.column} ${styles.imagePreviewColumn}`}>
        <ImagePreview />
      </div>
      <div className={`${styles.column} ${styles.iconosColumn}`}>
        <Iconos />
        <BotonesEnmarcado />
        <SubirImagen />
      </div>
    </div>
  </>
}

export default App
