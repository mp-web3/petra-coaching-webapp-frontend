import { Box, Heading, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import MainButton from '@/components/MainButton'

interface BenefitItem {
    iconSrc: string
    iconAlt: string
    title: string
    description: string
}

interface PremiumBenefitsSectionProps {
    heading: string
    highlight: string
    items: BenefitItem[]
    ctaText?: string
    ctaLink?: string
    onCtaClick?: () => void
    showCta?: boolean
}

export default function PremiumBenefitsSection({ heading, highlight, items, ctaText = 'inizia il tuo percorso premium', ctaLink = '#', onCtaClick, showCta = true }: PremiumBenefitsSectionProps) {
    return (
        <Box bg='secondary.dark' color='text.onDark' px={[4, 6, 8]} py={[12, 16, 20]}>
            <VStack gap={[8, 10]} align='center' textAlign='center' maxW='container.xl' mx='auto'>
                <Heading as='h2' textStyle='h2' color='text.onDark'>
                    {heading} <Text as='span' color='primary.default'>{highlight}</Text>
                </Heading>

                <SimpleGrid columns={{ base: 1, md: 3 }} gap={[10, 16]} alignItems='start' w='full'>
                    {items.map((it) => (
                        <VStack key={it.title} gap={4} align='center'>
                            <Image src={it.iconSrc} alt={it.iconAlt} boxSize={[12, 14]} />
                            <Heading as='h3' textStyle='h4' color='text.onDark'>{it.title}</Heading>
                            <Text maxW={{ md: 'sm' }} color='text.onDark'>{it.description}</Text>
                        </VStack>
                    ))}
                </SimpleGrid>

                {showCta && (
                    <MainButton text={ctaText} link={ctaLink} onClick={onCtaClick} />
                )}
            </VStack>
        </Box>
    )
}


