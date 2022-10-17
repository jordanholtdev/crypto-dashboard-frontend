import Header from "./components/Header"
import { Container } from "react-bootstrap";
import Coins from "./components/Coins";

function App() {
  return (
    <Container className="mx-auto">
      <Header />
      <Coins />
    </Container>
  );
}

export default App;
