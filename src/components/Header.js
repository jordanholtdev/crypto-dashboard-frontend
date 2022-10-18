import React from "react"
import { Heading, Box } from '@chakra-ui/react'

class Header extends React.Component {
    render() {
        return (
            <Box>
                <Heading py={8} as='h1' size='3xl'>Crypto Dashboard</Heading>
            </Box>
        )
    }
}

export default Header;