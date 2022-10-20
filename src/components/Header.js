import React from "react"
import { Link as RouterLink } from 'react-router-dom';
import { Heading, Box, Link, Flex } from '@chakra-ui/react'


class Header extends React.Component {
    render() {
        return (
            <Box>
                <Heading py={8} as='h1' size='3xl'>Crypto Dashboard</Heading>
                <Flex>
                    <Link p={2} as={RouterLink} to='/'>Coin Price</Link>
                    <Link p={2} as={RouterLink} to='/info'>Coin Info</Link>
                    <Link p={2} as={RouterLink} to='/portfolio'>Portfolio</Link>
                </Flex>
            </Box>
        )
    }
}

export default Header;