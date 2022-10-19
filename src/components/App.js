import { ChakraProvider, Container } from '@chakra-ui/react'
import Header from "./Header"
import { Routes, Route } from 'react-router-dom';
import Coins from './Coins';

function App() {
  return (
    <ChakraProvider>
      <Container maxW='550px'>
        <Header />
        <Routes>
          <Route path='/' element={<Coins />} />
        </Routes>
      </Container>
    </ChakraProvider>
  );
}

export default App;
