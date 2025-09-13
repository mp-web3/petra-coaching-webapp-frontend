import Hero from '@/components/Hero'
import BaseCard from '@/components/BaseCard'
import { Box, Container, Heading, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import heroBackgroundHome from '@/assets/images/hero-background-home.png'
import weightsBackground from '@/assets/images/weights-background.jpg'
import fitnessStrengthPerformanceNatalieCollars from '@/assets/images/fitness-strength-performance-natalie-collars-light-background.jpg'
import vintageMedicineBallsBackground from '@/assets/images/vintage-medicine-balls-background.webp'
import petraPrimoPiano from '@/assets/images/petra-primo-piano.webp'
import MainButton from '@/components/MainButton'
import Testimonials from '@/components/Testimonials'
import avatarWoman1 from '@/assets/images/placeholders/avatar-user-testimonial-woman.webp'
import avatarWoman2 from '@/assets/images/placeholders/avatar-user-testimonial-woman-2.webp'
import avatarMan1 from '@/assets/images/placeholders/avatar-user-testimonial-man.webp'
import avatarMan2 from '@/assets/images/placeholders/avatar-user-testimonial-man-2.webp'

const Home = () => {
    return (
        <Box>
            {/* <Heading as='h1' textStyle='title'>
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
                py={[16, 20, 24]}
                gap={[4, 6, 8]}
                mx='auto'
                alignItems='stretch'
                justifyItems='center'
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
                        columns={{ base: 1, md: 2 }} 
                        gap={[11, 6, 8]}
                        mx='auto'
                        alignItems='stretch'
                        justifyItems='flex-start'
                        w='100%'
                        border='1px solid white'
                    >
                        <VStack align={'flex-start'} gap={[4, 4, 8]}>
                            <Heading
                            as = 'h2'
                            textStyle='h2'
                            color='text.onDefaultHoverlay'
                            whiteSpace='pre-line'
                            lineHeight={1}
                            >
                                {`fitness
                                strength
                                performance`}
                            </Heading>

                            <Text
                                textStyle='md'
                                color='text.onDefaultHoverlay'
                            >
                                Copy che spiega l’approccio all’allenamento, i risultati visti e come 
                                l’allenamento spinga chi si dedica a trasformare non solo 
                                le sue performance sportive e il fisico in meglio, 
                                ma la sua vita intera
                            </Text>
                        </VStack>

                        <Image
                            src={fitnessStrengthPerformanceNatalieCollars}
                            aspectRatio={['1/1']}
                            alt='Fitness strength performance'
                        />

                    </SimpleGrid>
                </Container>
            </Box>

            <SimpleGrid
                columns={{ base: 1, md: 2 }} 
                gap={[11, 6, 8]}
                px={[4, 6, 8]}
                py={[16, 20, 24]}
                alignItems='stretch'
                justifyItems='flex-start'
                w='100%'
                border='3px solid green'
            >
                <Heading
                as = 'h2'
                textStyle='h2'
                color='heading.onPage'
                whiteSpace='pre-line'
                lineHeight={1}
                >
                    {`coaching
                    online`}
                </Heading>
                <VStack 
                    align='flex-start'
                    gap={[4, 4, 8]} 
                    border='1px solid black'
                >
                    <Text
                        textStyle='md'
                        color='text.onPage'
                    >
                        Descrizione generale coaching online, specificare che gli esercizi e la programmazione vengono definiti sulla base del livello dell’atleta o dell’amatore.
                        Fare riferimento sia a uomini che donne. Frase effetto di chiusura
                    </Text>
                    <MainButton
                        text='scopri di più'
                        link=''
                        >

                    </MainButton>
                </VStack>

            </SimpleGrid>

            {/* Incontra la tua coach section */}
            <Box minH={'100vh'} position={'relative'}>
                {/* Background Image */}
                <Box 
                    position={'absolute'} 
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    backgroundImage={`url(${vintageMedicineBallsBackground})`}
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
                        columns={{ base: 1, md: 2 }} 
                        gap={[11, 6, 8]}
                        mx='auto'
                        alignItems='stretch'
                        justifyItems='flex-start'
                        w='100%'
                        border='1px solid white'
                    >
                        <VStack align={'center'} gap={[4, 4, 8]}>
                            <Heading
                                as='h4'
                                textStyle='h4'
                                color='heading.onDark'
                                textAlign='center'
                            >
                                incontra la tua coach

                            </Heading>
                            <Heading
                                as = 'h2'
                                textStyle='h2'
                                color='primary.default'
                                whiteSpace='pre-line'
                                lineHeight={1}
                                textAlign='center'
                            >
                                {`petra
                                scaringelli`}
                            </Heading>

                            <Text
                                textStyle='md'
                                color='text.onDefaultHoverlay'
                                textAlign='center'
                            >
                                Copy che spiega l’approccio all’allenamento, i risultati visti e come 
                                l’allenamento spinga chi si dedica a trasformare non solo 
                                le sue performance sportive e il fisico in meglio, 
                                ma la sua vita intera
                            </Text>
                        </VStack>

                        <Image
                            src={petraPrimoPiano}
                            aspectRatio={['1/1']}
                            alt='Coach P - Petra Scaringelli'
                            objectPosition='center'
                            objectFit='cover'
                        />

                    </SimpleGrid>
                </Container>
            </Box>

            <Testimonials
              items={[
                {
                  id: 't1',
                  quote:
                    'Con Petra ho trovato il giusto equilibrio tra tecnica e motivazione. I risultati sono arrivati in poche settimane.',
                  author: 'Giulia R.',
                  role: 'Cliente coaching online',
                  avatarUrl: avatarWoman2
                },
                {
                  id: 't2',
                  quote:
                    'Programmi chiari, supporto costante e attenzione ai dettagli. Mi sento più forte che mai.',
                  author: 'Luca M.',
                  role: 'Atleta amatoriale',
                  avatarUrl: avatarMan1
                },
                {
                  id: 't3',
                  quote:
                    'Allenamenti personalizzati e adattati ai miei ritmi. Professionalità e umanità rare.',
                  author: 'Sara P.',
                  role: 'Coaching donna',
                  avatarUrl: avatarWoman1
                },
                {
                  id: 't4',
                  quote:
                    'Ho migliorato postura e performance senza infortuni. Consigliatissima.',
                  author: 'Marco D.',
                  role: 'Preparazione forza',
                  avatarUrl: avatarMan2
                },
              ]}
            />

        </Box>
    )
}

export default Home;