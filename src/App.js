import { ChakraProvider, Container } from '@chakra-ui/react'
import Header from "./components/Header"
import Coins from "./components/Coins";

function App() {
  return (
    <ChakraProvider>
      <Container maxW='550px'>
        <Header />
        <Coins />
      </Container>
    </ChakraProvider>
  );
}

export default App;
