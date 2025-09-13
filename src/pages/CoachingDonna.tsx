import { Box, Container, Heading, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import Hero from '@/components/Hero'
import donnaCoachingOnline from '@/assets/images/donna-coaching-online-trx.jpg'
import giovaneDonnaClienteTipo from '@/assets/images/giovane-donna-cliente-tipo-coaching-online.jpg'


const CoachingDonna = () => {
    return (
        <Box>
            <Hero 
                backgroundImage={donnaCoachingOnline}
                titleLine1='coaching donna'
                titleLine2='online'
                buttonText='inizia ora'
                buttonLink=''
                objectionReducingInfoText='Insieme costruiamo il tuo percorso: coaching individuale e sostegno continuo da donna a donna per il cambiamento che hai sempre desiderato.'

            />

            <SimpleGrid
                columns={{ base: 1, md: 2 }} 
                gap={[11, 6, 8]}
                px={[4, 6, 8]}
                py={[16, 20, 24]}
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
                    color='text.onPage'
                    lineHeight={1}
                    >
                        il mio programma fa per te?
                    </Heading>
                    <Image
                        src={giovaneDonnaClienteTipo}
                        aspectRatio={['1/1']}
                        alt='Giovane donna coaching online'
                    />
                </VStack>

                <Text
                    textStyle='sm'
                    color='text.onPage'
                >
                    Sogni di iniziare ad allenarti ma non sai come muovere i primi passi?
                    Ti senti persa quando varchi la soglia della palestra? Ti alleni da tempo senza vedere i risultati che desideri?
                    Cerchi un programma specificamente pensato per il corpo e le esigenze femminili? Vuoi spingerti oltre i tuoi limiti e scoprire di cosa sei davvero capace? Vuoi rimetterti in forma e sentirti bene con te stessa?
                    Se ti riconosci in almeno una di queste domande, sei nel posto giusto.
                    Il mio coaching è nato proprio per rispondere a questi bisogni, per offrirti la guida e il supporto che hai sempre cercato. Non importa da dove parti o quali sono i tuoi obiettivi: insieme troveremo la strada giusta per te.
                </Text>


            </SimpleGrid>
        </Box>
    )
}

export default CoachingDonna;