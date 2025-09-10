import Hero from '@/components/Hero'
import BaseCard from '@/components/BaseCard'
import { Box, Container, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import heroBackgroundHome from '@/assets/images/hero-background-home.png'
import weightsBackground from '@/assets/images/weights-background.jpg'

const Home = () => {
    return (
        <Box>
            {/* <Heading as="h1" textStyle='title'>
                Coaching Online Personalizzato
            </Heading>
            <Button bg='surface.action'>scopri i piani</Button> */}
            <Hero 
                backgroundImage={heroBackgroundHome}
                title='coaching online personalizzato'
                buttonText='inizia ora'
                buttonLink=''
                objectionReducingInfoText='Scopri i miei metodi provati di coaching online personalizzato per uomo e donna'
            
            />

            <SimpleGrid 
                columns={{ base: 1, md: 3 }} 
                gap={[4, 6, 8]}
                mx="auto"
                alignItems="stretch"
                justifyItems="center"
                w='100%'
            >
                <BaseCard
                    heading='coaching donna'
                    description='Percorsi personalizzati dedicati alle donne che vogliono essere guidate e sostenute nella trasformazione del proprio corpo.'
                    link=''
                    backgroundColor='surface.card.red'
                    headingColor='text.onPrimary'
                    descriptionColor='text.onPrimary'
                />
                <BaseCard
                    heading='coaching uomo'
                    description='Programmi su misura per massa, forza e prestazioni, con analisi tecnica approfondita e supporto dedicato per raggiungere i tuoi obiettivi.'
                    link=''
                    backgroundColor='surface.card.dark'
                    headingColor='text.onDark'
                    descriptionColor='text.onDark'
                />
                <BaseCard
                    heading='coaching in persona'
                    description='Programmi su misura per massa, forza e prestazioni, con analisi tecnica approfondita e supporto dedicato per raggiungere i tuoi obiettivi.'
                    link=''
                    backgroundColor='surface.card.light'
                    headingColor='text.onDark'
                    descriptionColor='text.onDark'
                />
            </SimpleGrid>
            <Box minH={'100vh'} position={'relative'}>
            {/* Background Image */}
            <Box 
                position={'absolute'} 
                top={0}
                left={0}
                right={0}
                bottom={0}
                backgroundImage={`url(${weightsBackground})`}
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
                py={[16, 20, 24]}
                h='100vh'
                display='flex'
                alignItems='center'
                border='1px solid green'
            >

                <SimpleGrid
                    columns={{ base: 1, md: 3 }} 
                    gap={[4, 6, 8]}
                    mx="auto"
                    alignItems="stretch"
                    justifyItems="flex-start"
                    w='100%'
                    border='1px solid white'
                >
                    <Heading
                    as = 'h2'
                    textStyle='h2'
                    color='text.onDefaultHoverlay'
                    whiteSpace="pre-line"
                    >
                        {`fitness
                        strength
                        performance`}
                    </Heading>

                </SimpleGrid>

            </Container>
        </Box>


        
        </Box>
    )
}

export default Home;