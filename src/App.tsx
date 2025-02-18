import Header from "./components/Header";
import ImagePreview from "./components/Screens/imagePreview/ImagePreview";
import Iconos from "./components/Screens/Formulario/Iconos/Iconos";
import BotonesEnmarcado from "./components/Screens/Formulario/BotonesEnmarcado";
import SubirImagen from "./components/Screens/Formulario/SubirImagen";
import Dimensiones from "./components/Screens/Formulario/Dimensiones";
import Tamanios from "./components/Screens/Formulario/Tamanios";
import TextInputContainer from "./components/Screens/Formulario/TextInputComentarios";
import AgregarAlCarro from "./components/Screens/Formulario/AgregarAlCarro";
import styles from './App.module.css';

function App() {
  return <>
    <Header />
    <div className={styles.container}>
      <div className={`${styles.column} ${styles.imagePreviewColumn}`}>
        <ImagePreview />
      </div>
      <div className={`${styles.column} ${styles.formColumn}`}>
        <Iconos />
        <BotonesEnmarcado />
        <SubirImagen />
        <Dimensiones  />
        <Tamanios />
        <TextInputContainer />
        <AgregarAlCarro />
      </div>
    </div>
  </>
}

export default App
