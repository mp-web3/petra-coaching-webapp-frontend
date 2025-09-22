import { Box, Container, VStack, Heading, Text } from '@chakra-ui/react'
import MainButton from '@/components/MainButton'

interface HeroProps {
    backgroundImage: string
    titleLine1: string
    titleLine2?: string
    buttonText: string
    buttonLink: string
    objectionReducingInfoText: string
}

const Hero = ({ 
    backgroundImage, 
    titleLine1, 
    titleLine2, 
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
                backgroundSize='cover'
                backgroundPosition='center'
                backgroundRepeat='no-repeat'
                zIndex={1}
            />
            
            {/* Dark Overlay */}
            <Box 
                position={'absolute'} 
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg='hoverlay.default'
                zIndex={2}
            />
            
            {/* Content */}
            <Container 
                position={'relative'} 
                zIndex={3}
                maxW='container.xl'
                px={[4, 6, 8]}
                h='100vh'
                display='flex'
                alignItems='center'
                // border='1px solid green'
            >
                <VStack 
                    align='flex-start' 
                    gap={[6, 8, 10]}
                    pr={[6, 6, 8]}
                    maxW='2xl'
                    // border='1px solid white'
                >
                    {/* Main Heading */}
                    <Heading 
                        as='h1' 
                        textStyle='title'
                        color='text.onDefaultHoverlay'
                        whiteSpace='pre-line'
                    >
                        {titleLine1}
                        {titleLine2 ? (
                            <>
                                <br />
                                {titleLine2}
                            </>
                        ) : null}
                    </Heading>
                    
                    {/* Call-to-Action Button */}
                    <MainButton 
                        text={buttonText}
                        link={buttonLink}
                    />
                    
                    {/* objectionReducingInfo Text */}
                    <Text
                        textStyle='objectionReducing' 
                        color='text.onDefaultHoverlay'
                    >
                        {objectionReducingInfoText}
                    </Text>
                </VStack>
            </Container>
        </Box>
    )
}

export default Hero