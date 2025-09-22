import { Box, Heading, Text, VStack, Accordion } from '@chakra-ui/react'

export interface FAQItem {
    q: string
    a: string
}

interface FAQsSectionProps {
    heading: string
    highlight: string
    subheading?: string
    items: FAQItem[]
}

export default function FAQsSection({ heading, highlight, subheading, items }: FAQsSectionProps) {
    return (
        <Box bg='surface.page' color='text.onPage' px={[4, 6, 8]} py={[16, 20, 24]}>
            <VStack gap={6} maxW='container.xl' mx='auto' textAlign='center'>
                <Heading as='h2' textStyle='h2'>
                    {heading} <Text as='span' color='primary.default'>{highlight}</Text>
                </Heading>
                {subheading && (
                    <Text textStyle='md' color='text.onPage'>{subheading}</Text>
                )}

                <Accordion.Root collapsible>
                    {items.map((f, i) => (
                        <Accordion.Item key={i} value={`item-${i}`} bg='neutralLight.default' borderRadius='md' mb={4} border='1px solid' borderColor='border.subtle'>
                            <Accordion.ItemTrigger asChild>
                                <Box as='button' w='full' textAlign='left' px={6} py={4} _hover={{ bg: 'neutralLight.light' }} borderRadius='md'>
                                    <Text fontWeight='semibold'>{f.q}</Text>
                                </Box>
                            </Accordion.ItemTrigger>
                            <Accordion.ItemContent>
                                <Box px={6} py={4} textAlign='left'>
                                    <Text whiteSpace='pre-line'>{f.a}</Text>
                                </Box>
                            </Accordion.ItemContent>
                        </Accordion.Item>
                    ))}
                </Accordion.Root>
            </VStack>
        </Box>
    )
}


