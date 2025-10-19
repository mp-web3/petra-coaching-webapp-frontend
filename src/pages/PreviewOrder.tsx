import React, { useEffect, useMemo, useRef, useState } from 'react';
import { getPlanBySlug } from '@/lib/plans';
import { Box, Button, Container, Grid, GridItem, HStack, Heading, Stack, Text } from '@chakra-ui/react';
import { LuCircleCheck } from 'react-icons/lu';
import ConsentsForm from '@/components/ConsentsForm';
import TermsScrollAccept from '@/components/TermsScrollAccept';

// Data that the form edits
export type ConsentsFormValues = {
  email: string
  acceptTos: boolean
  acceptPrivacy: boolean
  marketingOptIn: boolean
}

export type ConsentsFormErrors = Partial<Record<keyof ConsentsFormValues, string>>

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateField<K extends keyof ConsentsFormValues>(
  key: K,
  value: ConsentsFormValues[K]
): string | undefined {
  switch (key) {
    case 'email':
      if (!value) return 'Email richiesta'
      if (typeof value === 'string' && !emailRegex.test(value)) return 'Email non valida'
      return
    case 'acceptTos':
      return value ? undefined : 'Richiesto'
    case 'acceptPrivacy':
      return value ? undefined : 'Richiesto'
    case 'marketingOptIn':
      return undefined
    default:
      return undefined
  }
}

export function validateForm(form: ConsentsFormValues): ConsentsFormErrors {
  return {
    email: validateField('email', form.email),
    acceptTos: validateField('acceptTos', form.acceptTos),
    acceptPrivacy: validateField('acceptPrivacy', form.acceptPrivacy)
  }
}

export function canSubmit(form: ConsentsFormValues, loading: boolean) {
  const errs = validateForm(form)
  return !loading && Object.values(errs).every((e) => !e)
}

const API_BASE = (import.meta as any).env?.VITE_API_URL || 'http://localhost:3001';

function uuid() {
  return crypto?.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2);
}

export default function PreviewOrder() {
  const [form, setForm] = useState<ConsentsFormValues>({
    email: '',
    acceptTos: false,
    acceptPrivacy: false,
    marketingOptIn: false,
  })
  const [errors, setErrors] = useState<ConsentsFormErrors>({})
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null)
  const errorRef = useRef<HTMLDivElement>(null);

  const search = useMemo(() => new URLSearchParams(window.location.search), []);
  const planId = search.get('plan') || '';
  const plan = getPlanBySlug(planId);

  const [termsVersion, setTermsVersion] = useState<string | null>(null)

  useEffect(() => {
    if (submitError) errorRef.current?.focus();
  }, [submitError]);

  function handleFormChange(patch: Partial<ConsentsFormValues>) {
    setForm(prev => ({ ...prev, ...patch }))
    const [k, v] = Object.entries(patch)[0] as [keyof ConsentsFormValues, any]
    setErrors(prev => ({ ...prev, [k]: validateField(k, v) }))
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitError(null)

    const nextErrors = validateForm(form)
    if (Object.values(nextErrors).some(Boolean)) {
      setErrors(nextErrors)
      return
    }

    setLoading(true)
    try {
      const res = await fetch(`${API_BASE}/api/checkout/sessions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-idempotency-key': uuid(),
        },
        body: JSON.stringify({
          planId,
          acceptedTos: true,
          acceptedDisclosure: form.acceptPrivacy,
          marketingOptIn: form.marketingOptIn,
          disclosureVersion: 'v1.0',
        }),
      })
      const data = await res.json()
      if (!res.ok || !data?.url) throw new Error(data?.error || 'Errore nella creazione della sessione')
      window.location.assign(data.url)
    } catch (err: any) {
      setSubmitError(err.message || 'Si è verificato un errore. Riprova.')
      setLoading(false)
    }
  }

  if (!plan) {
    return (
      <Container maxW='container.md' px={[4,6,8]} py={[24,28,32]}>
        <Heading as='h1' textStyle='h2'>Rivedi il tuo piano</Heading>
        <Box role="alert" aria-live="assertive" tabIndex={-1} mt={4}>
          Piano non valido. Torna ai piani e selezionane uno.
        </Box>
        <Button variant='plain' mt={4} asChild>
          <a href="/coaching-donna-online#piani">Torna ai piani</a>
        </Button>
      </Container>
    );
  }

  return (
    <Container maxW='container.xl' px={[4,6,8]} py={[24,28,32]}>
      <Heading as='h1' textStyle='h2'>Rivedi il tuo piano</Heading>

      <Grid templateColumns={{ base: '1fr', md: '2fr 1fr' }} gap={8} mt={6}>
        <GridItem>
          <Stack gap={6}>
            <Box borderWidth='1px' borderRadius='lg' p={6} bg='surface.elevated'>
              <Heading as='h2' size='lg' id='summary-h'>Riepilogo del piano</Heading>
              <Box as='table' mt={4} w='full' borderCollapse='collapse'>
                <Box as='tbody'>
                  <Box as='tr'>
                    <Box as='th' textAlign='left' py={2}>Nome piano</Box>
                    <Box as='td' py={2}>{plan.title}</Box>
                  </Box>
                  <Box as='tr'>
                    <Box as='th' textAlign='left' py={2}>Durata</Box>
                    <Box as='td' py={2}>{plan.subtitle}</Box>
                  </Box>
                  <Box as='tr'>
                    <Box as='th' textAlign='left' py={2}>Prezzo</Box>
                    <Box as='td' py={2}>{plan.priceLabel}</Box>
                  </Box>
                  <Box as='tr'>
                    <Box as='th' textAlign='left' py={2}>IVA/Note</Box>
                    <Box as='td' py={2}>Il totale finale sarà mostrato nella pagina di pagamento</Box>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box borderWidth='1px' borderRadius='lg' p={6} bg='surface.elevated'>
              <Heading as='h2' size='lg' id='includes-h'>Cosa è incluso</Heading>
              <Box as='ul' mt={4} css={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {plan.features.map((f) => (
                  <Box as='li' key={f.id} display='flex' alignItems='flex-start' gap={2} py={1}>
                    <Box as={LuCircleCheck} color='primary' aria-hidden='true' />
                    <Text>{f.label}</Text>
                  </Box>
                ))}
              </Box>
            </Box>
          </Stack>
        </GridItem>

        <GridItem>
          <Box as='form' onSubmit={onSubmit} aria-busy={loading} borderWidth='1px' borderRadius='lg' p={6} bg='surface.elevated' border='1px solid red'>
            <Stack gap={4}>
              <Heading as='h2' size='lg' id='includes-h'>Cosa è incluso</Heading>
              <Text>Prima di poter continuare al pagamento devi{' '}
                <TermsScrollAccept
                  triggerText='cliccare qui' 
                  checked={form.acceptTos}
                  onChange={(next, version) => {
                    handleFormChange({ acceptTos: next })
                    if (next) setTermsVersion(version)
                  }}
                  onAccept={(version) => {
                    handleFormChange({ acceptTos: true })
                    setTermsVersion(version)
                  }}
                />
                {' '}per leggere e accettare i Termini di Servizio
              </Text>
              <ConsentsForm value={form} onChange={handleFormChange} errors={errors} disabled={loading} />

              {submitError && (
                <Box
                  role="alert"
                  tabIndex={-1}
                  ref={errorRef}
                  p={3}
                  borderWidth='1px'
                  borderColor='status.error'
                  bg='status.errorLight'
                >
                  {submitError}
                </Box>
              )}

              <HStack gap={3}>
                <Button type='submit' colorPalette='primary' disabled={!canSubmit(form, loading)}>
                  {loading ? 'Attendere…' : 'Continua al pagamento'}
                </Button>
                <Button variant='plain' asChild>
                  <a href='/coaching-donna#piani'>Annulla</a>
                </Button>
              </HStack>
            </Stack>
          </Box>
        </GridItem>
      </Grid>

    </Container>
  );
}