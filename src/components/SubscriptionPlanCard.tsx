import { Button, HStack, Heading, Text, VStack, Image } from '@chakra-ui/react'
import checkCirclePrimaryIcon from '@/assets/icons/check_circle_primary.svg'
import cancelCircleIcon from '@/assets/icons/cancel_primary.svg'

export interface SubscriptionPlanFeature {
    id: string
    label: string
    checked: boolean
}

export interface SubscriptionPlanCardProps {
    title: string
    subtitle?: string
    priceLabel: string
    ctaText: string
    onCtaClick?: () => void
    features: SubscriptionPlanFeature[]
    highlighted?: boolean
}

export default function SubscriptionPlanCard({ title, subtitle, priceLabel, ctaText, onCtaClick, features, highlighted = false }: SubscriptionPlanCardProps) {
    return (
        <VStack
            bg={highlighted ? 'surface.card.dark' : 'neutralLight.default'}
            color='text.onPage'
            borderRadius='lg'
            boxShadow='md'
            p={6}
            minW={['100%', '33.3%']}
            css={{ scrollSnapAlign: 'center' }}
            gap={6}
            border='2px solid black'
        >
            <VStack gap={2} w='full' align='flex-start'>
                <Heading as='h3' textStyle='h3' color='heading.onPage'>
                    {title}
                </Heading>
                {subtitle && (
                    <Text color='text.muted'>{subtitle}</Text>
                )}
            </VStack>

            <Heading as='p' size='3xl' color='primary.default'>
                {priceLabel}
            </Heading>

            <VStack as='ul' m={0} p={0} w='full' align='flex-start' gap={3}>
                {features.map((f) => (
                    <HStack as='li' key={f.id} alignItems='flex-start' gap={3}>
                        <Image src={ features.checked ? checkCirclePrimaryIcon : cancelCircleIcon} alt='' boxSize={5} mt={0.5} />
                        <Text>{f.label}</Text>
                    </HStack>
                ))}
            </VStack>

            <Button
                onClick={onCtaClick}
                bg='surface.action'
                color='text.onSurfaceAction'
                textStyle='button'
                px={8}
                py={4}
                borderRadius='md'
                _hover={{ bg: 'interactive.primaryHover' }}
                w='full'
            >
                {ctaText}
            </Button>
        </VStack>
    )
}


