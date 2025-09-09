import Hero from '@/components/Hero'
import BaseCard from '@/components/BaseCard'
import { Box, SimpleGrid } from '@chakra-ui/react';
import heroBackgroundHome from '@/assets/images/hero-background-home.png'

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
                columns={{ base: 1, md: 2 }} 
                gap={[4, 6, 8]}
                maxW={["375px", "container.xl"]}
                mx="auto"
                alignItems="stretch"
                justifyItems="center"
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
            </SimpleGrid>


        
        </Box>
    )
}

export default Home;