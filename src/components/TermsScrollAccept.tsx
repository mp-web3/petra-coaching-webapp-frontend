import { useEffect, useMemo, useRef, useState } from 'react'
import { Box, Button, Heading, Spinner, Text, useDisclosure, Dialog, HStack, VisuallyHidden, Checkbox } from '@chakra-ui/react'
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
  const [loadError, setLoadError] = useState<string | null>(null)
  const [canAccept, setCanAccept] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  async function load() {
    setLoading(true)
    setLoadError(null)
    setCanAccept(false)
    try {
      const md = await fetchLegalMarkdown('terms', CURRENT_TERMS_VERSION)
      setContent(md)
    } catch (e: any) {
      setLoadError('Impossibile caricare i Termini di Servizio. Riprova.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!open) return
    load()
  }, [open])

  const onScroll = useMemo(() => {
    return () => {
      const el = scrollRef.current
      if (!el) return
      const fits = el.scrollHeight <= el.clientHeight + 2
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 4
      if (fits || atBottom) setCanAccept(true)
    }
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const fits = el.scrollHeight <= el.clientHeight + 2
    if (fits) setCanAccept(true)

    el.addEventListener('scroll', onScroll)
    return () => el.removeEventListener('scroll', onScroll)
  }, [content, onScroll])

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
              ) : loadError ? (
                <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' gap={3} flex='1'>
                  <Text role='alert'>{loadError}</Text>
                  <Button onClick={load}>Riprova</Button>
                </Box>
              ) : (
                <>
                  <VisuallyHidden>
                    <p>Scorri fino in fondo per abilitare la conferma di accettazione.</p>
                  </VisuallyHidden>
                  <HStack justify='space-between' mb={2}>
                    <Text color='text.muted' fontSize='sm'>Scorri per leggere</Text>
                    <Button variant='plain' asChild>
                      <a href='/terms' target='_blank' rel='noreferrer'>Apri in una nuova scheda</a>
                    </Button>
                  </HStack>
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
                  >
                    <Markdown>{content}</Markdown>
                  </Box>

                  {canAccept && (
                    <Box mt={3}>
                      <Checkbox.Root onCheckedChange={(e) => { if (e.checked === true) { onAccept(CURRENT_TERMS_VERSION); onClose(); } }}>
                        <Checkbox.Control />
                        <Checkbox.Label>
                          Confermo di aver letto, di aver compreso e di accettare i termini di servizio
                        </Checkbox.Label>
                        <Checkbox.HiddenInput />
                      </Checkbox.Root>
                    </Box>
                  )}
                </>
              )}
            </Dialog.Body>
            <Dialog.Footer display='flex' gap={3}>
              <Button variant='ghost' onClick={onClose}>Chiudi</Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </>
  )
}
