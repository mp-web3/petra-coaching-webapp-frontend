import { Box, Heading, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'

interface SectionWithImageAndTextProps {
    heading: string
    imageUrl: string
    imageAlt?: string
    text: string
}

function SectionWithImageAndText({ heading, imageUrl, imageAlt = '', text }: SectionWithImageAndTextProps) {
    return (
        <Box>
            <SimpleGrid
                columns={{ base: 1, md: 2 }}
                gap={[11, 6, 8]}
                px={[4, 6, 8]}
                py={[16, 20, 24]}
                mx='auto'
                alignItems='stretch'
                justifyItems='flex-start'
                w='100%'
            >
                <VStack align={'flex-start'} gap={[4, 4, 8]}>
                    <Heading
                        as='h2'
                        textStyle='h2'
                        color='text.onPage'
                        lineHeight={1}
                    >
                        {heading}
                    </Heading>
                    <Image
                        src={imageUrl}
                        aspectRatio={['1/1']}
                        alt={imageAlt || heading}
                    />
                </VStack>

                <Text
                    textStyle='sm'
                    color='text.onPage'
                >
                    {text}
                </Text>
            </SimpleGrid>
        </Box>
    )
}

export default SectionWithImageAndText


