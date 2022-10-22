import { ChakraProvider, Container, Center } from '@chakra-ui/react'
import Header from "./Header"
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import CoinList from './CoinList';
import CoinInfo from './CoinInfo';
import ChartsList from './ChartsList';
import Portfolio from './Portfolio';

function App() {
  return (
    <ChakraProvider>
      <Container minW='100%'>
        <Center>
          <Header />
        </Center>
        <Container maxW='975px'>
          <Routes>
            <Route path='/' element={<CoinList />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/charts' element={<ChartsList />} />
            <Route path='/info' element={<CoinInfo />} />
          </Routes>
        </Container>
        <Center>
          <Footer />
        </Center>
      </Container>
    </ChakraProvider>
  );
}

export default App;
