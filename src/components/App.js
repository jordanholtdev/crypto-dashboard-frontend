import { ChakraProvider, Container } from '@chakra-ui/react'
import Header from "./Header"
import { Routes, Route } from 'react-router-dom';
import CoinList from './CoinList';
import CoinInfo from './CoinInfo';

function App() {
  return (
    <ChakraProvider>
      <Container maxW='850px'>
        <Header />
        <Routes>
          <Route path='/' element={<CoinList />} />
          <Route path='/info' element={<CoinInfo />} />
        </Routes>
      </Container>
    </ChakraProvider>
  );
}

export default App;
