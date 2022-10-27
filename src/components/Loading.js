import { Center, Flex, Spinner } from '@chakra-ui/react';

function Loading(props) {
    return (
        <Flex justify='center' h='75vh'>
            <Center>
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='teal.200'
                    color='teal.500'
                    size='xl'
                />
            </Center>
        </Flex>
    );
}

export default Loading;
