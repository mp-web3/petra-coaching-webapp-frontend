import { Link as RouterLink } from 'react-router-dom'
import { Box, Container, HStack, IconButton, useDisclosure, Drawer, VStack, Text, Image, CloseButton } from '@chakra-ui/react'
import { LuMenu } from 'react-icons/lu'
import logo2 from '@/assets/logos/logo-2.png'

function Navigation() {
  const { open, onOpen, onClose } = useDisclosure()

  return (
    <Box as='header' position='fixed' top={0} left={0} right={0} zIndex={99} bg='whiteAlpha.50'>
      <Container maxW='container.xl' px={[4, 6, 8]} py={4}>
        <HStack justify='space-between' align='center'>
          <Image src={logo2} />
          <IconButton aria-label='Apri menu' variant='ghost' color='white' onClick={onOpen} css={{ _icon: { width: '6', height: '6' } }}>
            <LuMenu />
          </IconButton>
        </HStack>
      </Container>

      <Drawer.Root placement='end' open={open} onOpenChange={(e) => (e.open ? onOpen() : onClose())} size={{ base: 'full', md: 'lg' }}>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content bg='surface.page' color='text.primary'>
            <Drawer.Body>
              <HStack justify='flex-end' w='full'>
                <Drawer.CloseTrigger asChild>
                  <CloseButton size='lg' />
                </Drawer.CloseTrigger>
              </HStack>
              <VStack align='flex-start' gap={8} mt={20}>
                <RouterLink to='/' onClick={onClose}>
                  <Text fontSize={['3xl','4xl','5xl']} fontWeight='bold'>Home</Text>
                </RouterLink>
                <RouterLink to='/about' onClick={onClose}>
                  <Text fontSize={['3xl','4xl','5xl']} fontWeight='bold'>About</Text>
                </RouterLink>
                <RouterLink to='/coaching-donna-online' onClick={onClose}>
                  <Text fontSize={['3xl','4xl','5xl']} fontWeight='bold'>Coaching Donna</Text>
                </RouterLink>
              </VStack>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </Box>
  )
}

export default Navigation