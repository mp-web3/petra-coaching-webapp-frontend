import { useEffect, useMemo, useRef, useState } from 'react'
import { Box, Button, Heading, Spinner, Text, useDisclosure, Dialog } from '@chakra-ui/react'
import { fetchLegalMarkdown, CURRENT_TERMS_VERSION } from '@/lib/legal'
import Markdown from '@/components/Markdown'

interface TermsScrollAcceptProps {
  triggerText?: string
  onAccept: (version: string) => void
}

export default function TermsScrollAccept({ triggerText = 'Termini di Servizio', onAccept }: TermsScrollAcceptProps) {
  const { open, onOpen, onClose } = useDisclosure()
  const [content, setContent] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [canAccept, setCanAccept] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    setCanAccept(false)
    setLoading(true)
    fetchLegalMarkdown('terms', CURRENT_TERMS_VERSION)
      .then(setContent)
      .catch(() => setContent('Impossibile caricare i Termini di Servizio. Riprova più tardi.'))
      .finally(() => setLoading(false))
  }, [open])

  const onScroll = useMemo(() => {
    return () => {
      const el = scrollRef.current
      if (!el) return
      const reachedBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 4
      if (reachedBottom) setCanAccept(true)
    }
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', onScroll)
    return () => el.removeEventListener('scroll', onScroll)
  }, [onScroll])

  return (
    <>
      <Button variant='plain' color='text.link' onClick={onOpen}>
        {triggerText}
      </Button>

      <Dialog.Root open={open} onOpenChange={(e) => (e.open ? onOpen() : onClose())}>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content maxW='100vw' w='100vw' h='100vh'>
            <Dialog.Header>
              <Heading as='h3' size='lg'>Termini di Servizio</Heading>
              <Text mt={2} color='text.muted'>Versione: {CURRENT_TERMS_VERSION}</Text>
            </Dialog.Header>
            <Dialog.CloseTrigger />
            <Dialog.Body display='flex' flexDirection='column' h='calc(100vh - 160px)'>
              {loading ? (
                <Box display='flex' alignItems='center' justifyContent='center' flex='1'>
                  <Spinner />
                </Box>
              ) : (
                <Box
                  ref={scrollRef}
                  role='region'
                  aria-label='Contenuto dei Termini di Servizio'
                  tabIndex={0}
                  flex='1'
                  overflowY='auto'
                  px={2}
                  py={2}
                  borderWidth='1px'
                  borderRadius='md'
                  borderColor='border.subtle'
                  zIndex={100}
                >
                  <Markdown>{content}</Markdown>
                </Box>
              )}
            </Dialog.Body>
            <Dialog.Footer display='flex' gap={3}>
              <Button variant='ghost' onClick={onClose}>Chiudi</Button>
              <Button colorPalette='primary' disabled={!canAccept} onClick={() => { onAccept(CURRENT_TERMS_VERSION); onClose(); }}>Ho letto e accetto</Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </>
  )
}
