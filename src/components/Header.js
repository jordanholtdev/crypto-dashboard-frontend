import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Heading, Box, Flex, Button } from '@chakra-ui/react';

class Header extends React.Component {
    render() {
        return (
            <Box>
                <Heading py={8} as='h1' size='3xl' color='teal.600'>
                    Crypto Dashboard
                </Heading>
                <Flex justifyContent='center'>
                    <Button colorScheme='teal' variant='outline' m={2} p={2} as={RouterLink} to='/'>
                        Coin Price
                    </Button>
                    <Button
                        colorScheme='teal'
                        variant='outline'
                        m={2}
                        p={2}
                        as={RouterLink}
                        to='/portfolio'
                    >
                        Portfolio
                    </Button>
                </Flex>
            </Box>
        );
    }
}

export default Header;
