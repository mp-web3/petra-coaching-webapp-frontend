import { useEffect, useState } from 'react'
import { Box, Container, Heading, Spinner, Text } from '@chakra-ui/react'
import { CURRENT_TERMS_VERSION, fetchLegalMarkdown } from '@/lib/legal'
import Markdown from '@/components/Markdown'

export default function TermsPage() {
  const [content, setContent] = useState<string>('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchLegalMarkdown('terms', CURRENT_TERMS_VERSION)
      .then(setContent)
      .finally(() => setLoading(false))
  }, [])

  return (
    <Container maxW='container.md' px={[4, 6, 8]} py={[24, 28, 32]}>
      <Heading as='h1' textStyle='h2' color='heading.onPage'>Termini di Servizio</Heading>
      <Text color='text.muted' mt={2}>Versione: {CURRENT_TERMS_VERSION}</Text>
      <Box mt={6}>
        {loading ? (
          <Spinner />
        ) : (
          <Markdown>{content}</Markdown>
        )}
      </Box>
    </Container>
  )
}
