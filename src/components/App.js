import { ChakraProvider, Container } from '@chakra-ui/react'
import Header from "./Header"
import { Routes, Route } from 'react-router-dom';
import CoinList from './CoinList';
import CoinInfo from './CoinInfo';
import Portfolio from './Portfolio';

function App() {
  return (
    <ChakraProvider>
      <Container maxW='975px'>
        <Header />
        <Routes>
          <Route path='/' element={<CoinList />} />
          <Route path='/info' element={<CoinInfo />} />
          <Route path='/portfolio' element={<Portfolio />} />
        </Routes>
      </Container>
    </ChakraProvider>
  );
}

export default App;
