import React, { useEffect, useMemo, useRef, useState } from 'react';
import { getPlanBySlug } from '@/lib/plans';
import { Box, Button, Container, Grid, GridItem, HStack, Heading, Stack, Text } from '@chakra-ui/react';
import { LuCircleCheck } from 'react-icons/lu';
import TermsScrollAccept from '@/components/TermsScrollAccept';
import { CURRENT_TERMS_VERSION } from '@/lib/legal';

const API_BASE = (import.meta as any).env?.VITE_API_URL || 'http://localhost:3001';
const DISCLOSURE_VERSION = CURRENT_TERMS_VERSION;

function uuid() {
  return crypto?.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2);
}

export default function PreviewOrder() {
  const [acceptTos, setAcceptTos] = useState(false);
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);
  const [marketingOptIn, setMarketingOptIn] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const errorRef = useRef<HTMLDivElement>(null);

  const search = useMemo(() => new URLSearchParams(window.location.search), []);
  const planId = search.get('plan') || '';
  const plan = getPlanBySlug(planId);

  useEffect(() => {
    if (error) errorRef.current?.focus();
  }, [error]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!plan) {
      setError('Piano non valido.');
      return;
    }
    if (!acceptTos || !acceptPrivacy) {
      setError('Devi accettare i Termini di Servizio e la Privacy Policy.');
      return;
    }

    setLoading(true);
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
          acceptedDisclosure: acceptPrivacy,
          marketingOptIn,
          disclosureVersion: DISCLOSURE_VERSION,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data?.url) throw new Error(data?.error || 'Errore nella creazione della sessione');
      window.location.assign(data.url);
    } catch (err: any) {
      setError(err.message || 'Si è verificato un errore. Riprova.');
      setLoading(false);
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

            <Box borderWidth='1px' borderRadius='lg' p={6} bg='surface.elevated' border='1px solid green'>
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

        <GridItem display={{ base: 'block', md: 'block' }} borderWidth='1px' borderRadius='lg' p={6} bg='surface.elevated' border='1px solid red'>
          <Stack>
            <Consents
              acceptTos={acceptTos}
              setAcceptTos={setAcceptTos}
              acceptPrivacy={acceptPrivacy}
              setAcceptPrivacy={setAcceptPrivacy}
              marketingOptIn={marketingOptIn}
              setMarketingOptIn={setMarketingOptIn}
            />
            <Box as='form' onSubmit={onSubmit} aria-busy={loading} mt={6}>
              {error && (
                <Box
                  role="alert"
                  tabIndex={-1}
                  ref={errorRef}
                  p={3}
                  borderWidth='1px'
                  borderColor='status.error'
                  bg='status.errorLight'
                  mb={3}
                >
                  {error}
                </Box>
              )}

              <HStack gap={3}>
                <Button type='submit' colorPalette='primary' disabled={!acceptTos || !acceptPrivacy || loading}>
                  {loading ? 'Attendere…' : 'Continua al pagamento'}
                </Button>
                <Button variant='plain' asChild>
                  <a href='/coaching-donna#piani'>Annulla</a>
                </Button>
              </HStack>
            </Box>
          </Stack>
        </GridItem>
      </Grid>

    </Container>
  );
}

type ConsentsProps = {
  acceptTos: boolean;
  setAcceptTos: (v: boolean) => void;
  acceptPrivacy: boolean;
  setAcceptPrivacy: (v: boolean) => void;
  marketingOptIn: boolean;
  setMarketingOptIn: (v: boolean) => void;
}

function Consents({ acceptTos, setAcceptTos, acceptPrivacy, setAcceptPrivacy, marketingOptIn, setMarketingOptIn }: ConsentsProps) {
  return (
    <Box>
      <Heading as='h3' size='md' mb={3}>Consensi e Conferma</Heading>
      <Stack as='fieldset' border='none' p={0} gap={3}>
        <Box as='label' display='flex' gap={3} alignItems='flex-start'>
          <input
            type='checkbox'
            checked={acceptTos}
            onChange={(e) => setAcceptTos(e.target.checked)}
          />
          <span>
            Ho letto e accetto i <TermsScrollAccept onAccept={() => setAcceptTos(true)} />
            <Text color='text.muted'>Versione: {CURRENT_TERMS_VERSION}</Text>
          </span>
        </Box>

        <Box as='label' display='flex' gap={3} alignItems='flex-start'>
          <input
            type='checkbox'
            checked={acceptPrivacy}
            onChange={(e) => setAcceptPrivacy(e.target.checked)}
          />
          <span>
            Confermo di aver letto, compreso e accetto la <a href='/privacy-policy' target='_blank' rel='noreferrer'>Privacy Policy</a>.
          </span>
        </Box>

        <Box as='label' display='flex' gap={3} alignItems='flex-start'>
          <input
            type='checkbox'
            checked={marketingOptIn}
            onChange={(e) => setMarketingOptIn(e.target.checked)}
          />
          <span>Acconsento a ricevere comunicazioni informative e promozionali (opzionale).</span>
        </Box>
      </Stack>
    </Box>
  )
}