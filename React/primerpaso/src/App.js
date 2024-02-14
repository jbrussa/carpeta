import "./App.css";
import Titulo from "./components/Titulo/Titulo";
import Parrafo from "./components/Parrafo/Parrafo";
import {Container} from "./components/Container/Container";

function App() {
  return (
    <Container>
      <Titulo/>
      <Parrafo> Holaaa </Parrafo>
    </Container>
  
  );
}

export default App;
