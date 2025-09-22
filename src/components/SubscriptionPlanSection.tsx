import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import type { SubscriptionPlanCardProps } from './SubscriptionPlanCard'
import SubscriptionPlanCardsSlider from './SubscriptionPlanCardsSlider'

interface SubscriptionPlanSectionProps {
    header: string
    subHeader: string
    plans: SubscriptionPlanCardProps[]
}

function SubscriptionPlanSection({ header, subHeader, plans}: SubscriptionPlanSectionProps) {
    return (
        <Box
            py={[16, 20, 24]}
            mx='auto'
            alignItems='stretch'
            justifyItems='center'
        >
            <VStack align={'center'} gap={[4, 4, 8]} w='100%'>
                <Heading
                    as='h2'
                    textStyle='h2'
                    color='text.onPage'
                    lineHeight={1}
                >
                    {header}
                </Heading>
                <Text
                    textStyle='sm'
                    color='text.onPage'
                >
                    {subHeader}
                </Text>
                <SubscriptionPlanCardsSlider plans={plans} />

            </VStack>

        </Box>
    )
}

export default SubscriptionPlanSection


