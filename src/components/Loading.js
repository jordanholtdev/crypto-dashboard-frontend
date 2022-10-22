import { Stack, Skeleton } from '@chakra-ui/react'

function Loading(props) {
    return (
        <Stack m='2'>
            <Skeleton
                height='80px'
                isLoaded={props.isLoaded}
                startColor='gray.50'
                endColor='green.200'
                fadeDuration={1}
            />
            <Skeleton
                height='80px'
                isLoaded={props.isLoaded}
                startColor='gray.50'
                endColor='green.200'
                fadeDuration={1}
            />
            <Skeleton
                height='80px'
                isLoaded={props.isLoaded}
                startColor='gray.50'
                endColor='green.200'
                fadeDuration={1}
            />
            <Skeleton
                height='80px'
                isLoaded={props.isLoaded}
                startColor='gray.50'
                endColor='green.200'
                fadeDuration={1}
            />
        </Stack>
    );
}

export default Loading;