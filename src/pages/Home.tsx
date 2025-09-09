import Hero from "@/components/Hero";
import { Box } from "@chakra-ui/react";
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
                title='Coaching Online Personalizzato'
                buttonText='inizia ora'
                buttonLink=''
                objectionReducingInfoText='Scopri i miei metodi provati di coaching online personalizzato per uomo e donna'
            
            />
        
        </Box>
    )
}

export default Home;