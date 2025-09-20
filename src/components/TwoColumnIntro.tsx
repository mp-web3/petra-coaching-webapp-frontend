import { Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import MainButton from './MainButton'

interface TwoColumnIntroProps {
    heading: string | React.ReactNode
    text: string
    buttonText: string
    buttonLink: string
}

function TwoColumnIntro({ heading, text, buttonText, buttonLink }: TwoColumnIntroProps) {
    return (
        <SimpleGrid
            columns={{ base: 1, md: 2 }} 
            gap={[11, 6, 8]}
            px={[4, 6, 8]}
            py={[16, 20, 24]}
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
            >
                {heading}
            </Heading>
            <VStack 
                align='flex-start'
                gap={[4, 4, 8]} 
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
    )
}

export default TwoColumnIntro


