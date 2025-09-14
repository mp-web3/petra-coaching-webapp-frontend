import { Accordion } from '@chakra-ui/react'
import { Box, HStack, Icon, Text } from '@chakra-ui/react'
import { LuChevronDown } from 'react-icons/lu'

interface SingleAccordionProps {
    title: string
    text: string
    isOpenByDefault?: boolean
}

function SingleAccordion({ title, text, isOpenByDefault = true }: SingleAccordionProps) {
    return (
        <Accordion.Root defaultValue={isOpenByDefault ? ['item-1'] : []} multiple collapsible>
            <Accordion.Item value="item-1" borderTopWidth="1px" borderBottomWidth="1px" borderColor="border.default">
                <Accordion.ItemTrigger asChild>
                    <Box as="button" w="full" textAlign="left" px={4} py={5} bg="secondary.dark" color="text.onDark">
                        <HStack justify="space-between" align="center">
                            <Text textStyle="h3">{title}</Text>
                            <Accordion.ItemIndicator asChild>
                                <Icon as={LuChevronDown} transformOrigin="center" transition="transform 0.2s" />
                            </Accordion.ItemIndicator>
                        </HStack>
                    </Box>
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                    <Box px={4} py={5} bg="neutralDark.dark" color="text.onDark">
                        <Text>{text}</Text>
                    </Box>
                </Accordion.ItemContent>
            </Accordion.Item>
        </Accordion.Root>
    )
}

export default SingleAccordion


