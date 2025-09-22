import { Box, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import MainButton from '@/components/MainButton'
import FeatureCard from '@/components/FeatureCard'

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

export default function PremiumBenefitsSection({ heading, highlight, items, ctaText, ctaLink, onCtaClick, showCta = true }: PremiumBenefitsSectionProps) {
    return (
        <Box bg='secondary.dark' color='text.onDark' px={[4, 6, 8]} py={[12, 16, 20]}>
            <VStack gap={[8, 10]} align='center' textAlign='center' maxW='container.xl' mx='auto'>
                <Heading as='h2' textStyle='h2' color='text.onDark'>
                    {heading} <Text as='span' color='primary.default'>{highlight}</Text>
                </Heading>

                <SimpleGrid columns={{ base: 1, md: 3 }} gap={[10, 16]} alignItems='start' w='full'>
                    {items.map((it) => (
                        <FeatureCard key={it.title} iconSrc={it.iconSrc} iconAlt={it.iconAlt} title={it.title} description={it.description} variant='dark' />
                    ))}
                </SimpleGrid>

                {showCta && (
                    <MainButton text={ctaText} link={ctaLink} onClick={onCtaClick} />
                )}
            </VStack>
        </Box>
    )
}


