import React from 'react';
import { Stack, Text, Link } from '@chakra-ui/react';

class Footer extends React.Component {
    render() {
        return (
            <Stack p={10} alignItems='center'>
                <Text as='b' fontSize='md'>
                    Crypto Dashboard
                </Text>
                <Text>
                    Made with 💖 By{' '}
                    <Link href='https:jordanholt.dev' isExternal>
                        Jordan Holt
                    </Link>
                </Text>
                <Text>
                    <Link href='https://github.com/jordanholtdev/crypto-dashboard-frontend' isExternal>
                        GitHub Repo
                    </Link>
                </Text>
                <Text>
                    <Link href='https://www.coingecko.com/' isExternal>
                        Powered by CoinGecko
                    </Link>
                </Text>
                <Text>Site design © 2022 Jordan Holt</Text>
            </Stack>
        );
    }
}

export default Footer;
