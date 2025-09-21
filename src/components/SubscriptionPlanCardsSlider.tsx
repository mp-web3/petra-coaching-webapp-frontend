import { Box, HStack, IconButton } from '@chakra-ui/react'
import { useRef } from 'react'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'
import SubscriptionPlanCard from './SubscriptionPlanCard'
import type { SubscriptionPlanCardProps } from './SubscriptionPlanCard'

interface SubscriptionPlanCardsSliderProps {
    plans: SubscriptionPlanCardProps[]
}

export default function SubscriptionPlanCardsSlider({ plans }: SubscriptionPlanCardsSliderProps) {
    const scrollerRef = useRef<HTMLDivElement | null>(null)

    const scrollBy = (delta: number) => {
        const el = scrollerRef.current
        if (!el) return
        el.scrollBy({ left: delta, behavior: 'smooth' })
    }

    return (
        <HStack w='full' align='center' border='3px solid green'>
            <IconButton aria-label='Previous' variant='ghost' onClick={() => scrollBy(-320)}>
                <LuChevronLeft />
            </IconButton>

            <Box
                ref={scrollerRef}
                overflowX='auto'
                display='flex'
                gap={4}
                px={[2, 4]}
                py={[4, 6]}
                scrollSnapType='x mandatory'
                css={{
                    'scrollbar-width': 'none',
                    '&::-webkit-scrollbar': { display: 'none' },
                }}
                flex='1'
                border='1px solid red'
            >
                {plans.map((p, idx) => (
                    <SubscriptionPlanCard key={`${p.title}-${idx}`} {...p} />
                ))}
            </Box>

            <IconButton aria-label='Next' variant='ghost' onClick={() => scrollBy(320)}>
                <LuChevronRight />
            </IconButton>
        </HStack>
    )
}


