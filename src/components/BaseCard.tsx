import { Box, Heading, Link, Text, VStack } from '@chakra-ui/react'

interface BaseCardProps {
    heading: string
    description: string
    link: string
    backgroundColor: string
    headingColor: string
    descriptionColor: string
}

const BaseCard = ({ heading, description, link, backgroundColor, headingColor, descriptionColor}: BaseCardProps) => {

    return (
        <Link href={link}>
            <Box 
            display={'flex'} 
            aspectRatio={1/1}
            bg={backgroundColor}
            px={[4, 6, 8]}
            border='1px solid blue'
            >
                <VStack
                    maxW='350px'
                    align='center'
                    justify='center'
                    gap={'22px'} 
                    borderRadius={2}
                >
                    <Heading
                        as='h3'
                        textStyle='h3'
                        color={headingColor}
                        border='1px solid green'
                    >
                        {heading}
                    </Heading>
                    <Text
                        textStyle=''
                        color={descriptionColor}
                        border='1px solid green'
                        textAlign='center'
                    >
                        {description}
                    </Text>
                </VStack>
            </Box>
        </Link>
    )
}

export default BaseCard