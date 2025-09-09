import { Box, Container, VStack, Heading, Text } from '@chakra-ui/react'
import MainButton from '@/components/MainButton'

interface HeroProps {
    backgroundImage: string
    title: string
    buttonText: string
    buttonLink: string
    objectionReducingInfoText: string
}

const Hero = ({ 
    backgroundImage, 
    title, 
    buttonText, 
    buttonLink, 
    objectionReducingInfoText,
}: HeroProps) => {
    return (
        <Box minH={'100vh'} position={'relative'}>
            {/* Background Image */}
            <Box 
                position={'absolute'} 
                top={0}
                left={0}
                right={0}
                bottom={0}
                backgroundImage={`url('${backgroundImage}')`}
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                zIndex={1}
            />
            
            {/* Dark Overlay */}
            <Box 
                position={'absolute'} 
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg="blackAlpha.600"
                zIndex={2}
            />
            
            {/* Content */}
            <Container 
                position={'relative'} 
                zIndex={3}
                maxW="container.xl"
                px={[4, 6, 8]}
                py={[16, 20, 24]}
                h="100vh"
                display="flex"
                alignItems="center"
            >
                <VStack 
                    align="flex-start" 
                    gap={[6, 8, 10]}
                    maxW="2xl"
                >
                    {/* Main Heading */}
                    <Heading 
                        as="h1" 
                        textStyle="title"
                        color="white"
                    >
                        {title}
                    </Heading>
                    
                    {/* Call-to-Action Button */}
                    <MainButton 
                        text={buttonText}
                        link={buttonLink}
                    />
                    
                    {/* objectionReducingInfo Text */}
                    <Text 
                        color="white"
                        fontSize={["md", "lg", "xl"]}
                        lineHeight="relaxed"
                        maxW="lg"
                    >
                        {objectionReducingInfoText}
                    </Text>
                </VStack>
            </Container>
        </Box>
    )
}

export default Hero