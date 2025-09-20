import { Heading, SimpleGrid, Text, VStack, Container } from '@chakra-ui/react'
import MainButton from './MainButton'

interface TwoColumnIntroProps {
    heading: string | React.ReactNode
    text: string
    buttonText: string
    buttonLink: string
    reverse?: boolean
}

function TwoColumnIntro({ heading, text, buttonText, buttonLink, reverse = false }: TwoColumnIntroProps) {
    return (
        <Container 
        position={'relative'} 
        zIndex={3}
        maxW='container.xl'
        px={[4, 6, 8]}
        py={[16, 20, 24]}
        h='auto'
        display='flex'
        alignItems='center'
        border='1px solid green'
    >
        <SimpleGrid
            columns={{ base: 1, md: 2 }} 
            gap={[11, 6, 8]}
            alignItems='stretch'
            justifyItems='flex-start'
            w='100%'
            border='1px solid orange'
        >
            <Heading
                as='h2'
                textStyle='h2'
                color='heading.onPage'
                whiteSpace='pre-line'
                lineHeight={1}
                order={{ base: 0, md: reverse ? 1 : 0 }}
            >
                {heading}
            </Heading>
            <VStack 
                align='flex-start'
                justify='center'
                gap={[4, 4, 8]} 
                order={{ base: 1, md: reverse ? 0 : 1 }}
            >
                <Text
                    textStyle='md'
                    color='text.onPage'
                    whiteSpace='pre-line'
                >
                    {text}
                </Text>
                <MainButton text={buttonText} link={buttonLink} />
            </VStack>
        </SimpleGrid>
        </Container>
    )
}

export default TwoColumnIntro


