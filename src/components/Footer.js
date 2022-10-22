import React from "react";
import { Stack, Text, Link } from "@chakra-ui/react";

class Footer extends React.Component {
    render() {
        return (
            <Stack p={10}>
                <Text>Made with 💖 By <Link href="https://github.com/jordanholtdev" isExternal>Jordan Holt</Link></Text>
            </Stack>
        )
    }
};

export default Footer;