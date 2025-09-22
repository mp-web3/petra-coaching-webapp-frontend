import { Accordion, Box, HStack, Icon, Text, VStack } from '@chakra-ui/react'
import { LuChevronDown } from 'react-icons/lu'

type AccordionItemData = {
    title: string
    text: string
}

interface TripleAccordionProps {
    items: [AccordionItemData, AccordionItemData, AccordionItemData] | AccordionItemData[]
    allowMultiple?: boolean
}

function TripleAccordion({ items, allowMultiple = false }: TripleAccordionProps) {
    const values = items.map((_, idx) => `item-${idx + 1}`)

    return (
        <Accordion.Root defaultValue={[values[0]]} multiple={allowMultiple} collapsible>
            <VStack align='stretch' gap={0}>
                {items.slice(0, 3).map((item, index) => (
                    <Accordion.Item key={values[index]} value={values[index]} borderTopWidth={index === 0 ? '1px' : 0} borderBottomWidth='1px' borderColor='border.default'>
                        <Accordion.ItemTrigger asChild>
                            <Box as='button' w='full' textAlign='left' justifyContent='center' px={4} py={5} bg='secondary.dark' color='text.onDark'>
                                <HStack justify='space-between' align='center'>
                                    <Text textStyle='h3'>{item.title}</Text>
                                    <Accordion.ItemIndicator asChild>
                                        <Icon as={LuChevronDown} transformOrigin='center' transition='transform 0.2s' />
                                    </Accordion.ItemIndicator>
                                </HStack>
                            </Box>
                        </Accordion.ItemTrigger>
                        <Accordion.ItemContent>
                            <Box px={4} py={5} bg='secondary.dark' color='text.onDark'>
                                <Text>{item.text}</Text>
                            </Box>
                        </Accordion.ItemContent>
                    </Accordion.Item>
                ))}
            </VStack>
        </Accordion.Root>
    )
}

export default TripleAccordion


