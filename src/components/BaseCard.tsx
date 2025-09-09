import { Box, Heading, Link, Text, VStack } from '@chakra-ui/react'

interface BaseCardProps {
    title: string
    description: string
    link: string
    backgroundColor: string
}

const BaseCard = ({ title, description, link, backgroundColor}: BaseCardProps) => {

    return (
        <Link href={link}>

            <Box display={'flex'} bg={backgroundColor}>
                <VStack alignContent={'center'} alignItems={'center'} gap={'22px'} borderRadius={2}>
                    <Heading
                        as='h3'
                        textStyle=''
                        color=''
                    >
                        {title}
                    </Heading>
                    <Text
                        textStyle=''
                    >
                        {description}
                    </Text>
                </VStack>
            </Box>
        </Link>
    )
}

export default BaseCard