import { useState } from "react";
import MatrixEffect from "./MatrixEffect";
import MatrixButton from "./pages/MatrixButton";
import MatrixModal from "./pages/MatrixModal";
import MainModal from "./components/MainModal";
import GlitchButton from "./components/GlitchButton";

function App() {
  const [show, setShow] = useState(false); // controla toda la vista
  const [modalAbierto, setModalAbierto] = useState(false);
  const [activeMatrix, setActiveMatrix] = useState(true);
  

  const handleAccess = () => {
    setActiveMatrix(false);
    setModalAbierto(true);

  };

  const handleActivar = () => {
    setModalAbierto(false);
    setShow(true); 
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <MatrixEffect activeMatrix={activeMatrix} />

      {!show && (
        <div className="absolute top-10 right-10 z-10">
          <MatrixButton onClick={handleAccess} />
        </div>
      )}

      {modalAbierto && (
        <MatrixModal onClose={() => setModalAbierto(false)} onActivate={handleActivar} />
      )}

    {show && (
 <MainModal onClick={() => {
  setShow(false);            // Oculta el MainModal
  setActiveMatrix(true);     // Vuelve a prender la animación
}}>
  <GlitchButton/>
  <p className="text-center mt-4"> </p>
</MainModal>

)}

    </div>
  );
}

export default App;
