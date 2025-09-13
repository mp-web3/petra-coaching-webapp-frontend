import { Box, Container, Heading, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import Hero from '@/components/Hero'
import donnaCoachingOnline from '@/assets/images/donna-coaching-online-trx.jpg'


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
        </Box>
    )
}

export default CoachingDonna;