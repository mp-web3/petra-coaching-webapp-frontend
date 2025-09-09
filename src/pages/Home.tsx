import { Box, Button, Heading } from "@chakra-ui/react";

const Home = () => {
    return (
        <Box>
            <Heading as="h1" textStyle='title'>
                Coaching Online Personalizzato
            </Heading>
            <Button bg='surface.action'>scopri i piani</Button>
        </Box>
    )
}

export default Home;