import Hero from '@/components/Hero'
import { PersonalTrainingSection } from '@/components'
import videoLibraryIcon from '@/assets/icons/video_library_primary.svg'
import videoCamIcon from '@/assets/icons/videocam_primary.svg'
import starIcon from '@/assets/icons/star_border_primary.svg'
// import BaseCard from '@/components/BaseCard'
import { Box, Container, Heading, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { useRef } from 'react'
import heroBackgroundHome from '@/assets/images/hero-background-home.png'
import weightsBackground from '@/assets/images/weights-background.jpg'
import fitnessStrengthPerformanceNatalieCollars from '@/assets/images/fitness-strength-performance-natalie-collars-light-background.jpg'
import vintageMedicineBallsBackground from '@/assets/images/vintage-medicine-balls-background.webp'
import petraPrimoPiano from '@/assets/images/petra-primo-piano.webp'
// import MainButton from '@/components/MainButton'
import { TwoColumnIntro, ReadMore } from '@/components'
import Testimonials from '@/components/Testimonials'
import avatarWoman1 from '@/assets/images/placeholders/avatar-user-testimonial-woman.webp'
import avatarWoman2 from '@/assets/images/placeholders/avatar-user-testimonial-woman-2.webp'
import avatarMan1 from '@/assets/images/placeholders/avatar-user-testimonial-man.webp'
import avatarMan2 from '@/assets/images/placeholders/avatar-user-testimonial-man-2.webp'

const Home = () => {
    const coachingGridRef = useRef<HTMLDivElement | null>(null)

    const scrollToCoachingGrid = () => {
        coachingGridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <Box>
            <Hero 
                backgroundImage={heroBackgroundHome}
                titleLine1='coaching online'
                titleLine2='personalizzato'
                buttonText='scopri di più'
                buttonOnClick={scrollToCoachingGrid}
                objectionReducingInfoText='Scopri i miei percorsi di coaching online personalizzati per uomo e donna'
            
            />

            <SimpleGrid
                columns={{ base: 1, md: 2 }} 
                mx='auto'
                alignItems='stretch'
                justifyItems='flex-start'
                w='100%'
                h='vh'
                ref={coachingGridRef}
            >
                {/* Coaching Online Donna*/}
                <TwoColumnIntro
                    heading={`coaching online donna`}
                    text={`Il nostro percorso di coaching online inizia qui. Propongo percorsi su misura, che prevedono programmazione personalizzata e feedback periodici, e percorsi che comprendono supporto continuo e completo, supervisione tecnica e ottimizzazione dell'esecuzione degli esercizi.`}
                    buttonText='esplora i piani donna'
                    buttonLink='/coaching-donna-online#piani'
                />

                {/* Coaching Online Uomo*/}
                <TwoColumnIntro
                    heading={`coaching online uomo`}
                    text={`Il nostro percorso di coaching online inizia qui. Propongo percorsi su misura, che prevedono programmazione personalizzata e feedback periodici, e percorsi che comprendono supporto continuo e completo, supervisione tecnica e ottimizzazione dell'esecuzione degli esercizi.`}
                    buttonText='esplora i piani uomo'
                    buttonLink=''
                    variant='dark'
                />
            </SimpleGrid>
            

            {/* IL METODO */}
            <Box minH={'auto'} position={'relative'}>
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
                    h='auto'
                    display='flex'
                    alignItems='center'
                >

                    <SimpleGrid
                        columns={{ base: 1, md: 2 }} 
                        gap={[11, 6, 8]}
                        mx='auto'
                        alignItems='stretch'
                        justifyItems='flex-start'
                        w='100%'
                    >
                        <VStack align={'flex-start'} gap={[4, 4, 8]}>
                            <Heading
                            as = 'h2'
                            textStyle='h2'
                            color='text.onDefaultHoverlay'
                            whiteSpace='pre-line'
                            lineHeight={1}
                            >
                                {`il metodo`}
                            </Heading>
                            <ReadMore
                                text={`Credo che un coaching efficace nasca da un legame autentico tra coach e atleta. Non si tratta solo di allenamenti e risultati, ma di fiducia, comunicazione e condivisione.
                                    Il coaching non è solo una scheda da seguire, ma un percorso personalizzato che tiene conto delle tue esigenze, dei tuoi ritmi e delle tue aspirazioni.
                                    Per me, l'obiettivo è costruire insieme un cambiamento duraturo, porsi nuove sfide, impegnarsi con passione e, soprattutto, divertirsi lungo il percorso.`}
                                truncateAt={`ma un percorso personalizzato`}
                                textProps={{ textStyle: 'md', color: 'text.onDefaultHoverlay', textAlign: 'left', whiteSpace: 'pre-line' }}
                            />
                        </VStack>

                        <Image
                            src={fitnessStrengthPerformanceNatalieCollars}
                            aspectRatio={['1/1']}
                            alt='Fitness strength performance'
                        />

                    </SimpleGrid>
                </Container>
            </Box>

            {/* Personal Training */}
            <PersonalTrainingSection
                heading={'PERSONAL TRAINING'}
                highlight={'1:1 IN PRESENZA'}
                subheading={'Vuoi portare il tuo allenamento al livello successivo?'}
                features={[
                    {
                        iconSrc: videoLibraryIcon,
                        iconAlt: 'Attenzione personalizzata',
                        title: 'Attenzione Personalizzata',
                        description:
                            'Allenamenti one\‑to\‑one dove ogni sessione è studiata esclusivamente per te e i tuoi obiettivi specifici.',
                        variant: 'light',
                        align: 'center',
                        rounded: 'lg',
                        hasCardBorder: true,
                    },
                    {
                        iconSrc: videoCamIcon,
                        iconAlt: 'Correzione immediata',
                        title: 'Correzione Immediata',
                        description:
                            'Feedback istantaneo sulla tecnica e progressioni in tempo reale per massimizzare ogni movimento.',
                        variant: 'light',
                        align: 'center',
                        rounded: 'lg',
                        hasCardBorder: true,
                    },
                    {
                        iconSrc: starIcon,
                        iconAlt: 'Risultati garantiti',
                        title: 'Risultati Garantiti',
                        description:
                            "L'intensità e la personalizzazione del training 1:1 ti assicurano progressi rapidi e duraturi.",
                        variant: 'light',
                        align: 'center',
                        rounded: 'lg',
                        hasCardBorder: true,
                    },
                ]}
                ctaText={'vai al form'}
                ctaLink={''}
            />

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
                    gap={[4, 4, 8]}
                    h='100vh'
                    display='flex'
                    alignItems='center'
                    flexDirection='column'
                >
                    <Heading
                        as='h4'
                        textStyle='h4'
                        color='heading.onDark'
                        textAlign='center'
                    >
                        incontra la tua coach
                    </Heading>

                    <SimpleGrid
                        columns={{ base: 1, md: 2 }} 
                        gap={[11, 6, 8]}
                        mx='auto'
                        alignItems='stretch'
                        justifyItems={['center', 'flex-start']}
                        w='100%'
                    >
                        <VStack align={['center', 'flex-start']} justifySelf='left' gap={[4, 4, 8]}>
                            <Heading
                                as = 'h2'
                                textStyle='h2'
                                color='primary.default'
                                whiteSpace='pre-line'
                                lineHeight={1}
                                textAlign={['center', 'left']}
                            >
                                {`petra
                                scaringelli`}
                            </Heading>
                            {/* Mobile-only image under heading */}
                            <Image
                                src={petraPrimoPiano}
                                aspectRatio={['1/1']}
                                alt='Coach P - Petra Scaringelli'
                                objectPosition='center'
                                objectFit='cover'
                                maxW={['60%', '100%']}
                                display={['block', 'none']}
                            />
                            <Text
                                textStyle='md'
                                color='text.onDefaultHoverlay'
                                textAlign={['center', 'left']}
                                whiteSpace='pre-line'
                            >
                                {`Mi chiamo Petra e il mio primo amore… aveva i guantoni.
                                
                                Il pugilato agonistico mi ha introdotta al mondo dello sport, insegnandomi disciplina, forza mentale e il coraggio di superare i miei limiti. Dopo questa esperienza, ho continuato il mio percorso in palestra, tra body-building, allenamento funzionale e powerlifting.
                                
                                Oggi sono una personal trainer e coach online, e propongo percorsi personalizzati con un approccio basato sull'ascolto, la fiducia e il rapporto autentico tra coach e atleta. Perché, per me, l'allenamento è molto più di serie e ripetizioni: è un modo per sentirsi forti, presenti e… nel posto giusto.`}
                            </Text>

                        </VStack>
                        <Image
                            src={petraPrimoPiano}
                            aspectRatio={['1/1']}
                            alt='Coach P - Petra Scaringelli'
                            objectPosition='center'
                            objectFit='cover'
                            maxW={['50%', '100%']}
                            display={['none', 'block']}
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