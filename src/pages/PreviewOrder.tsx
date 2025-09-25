import React, { useEffect, useMemo, useRef, useState } from 'react';
import { getPlanBySlug } from '@/lib/plans';

const API_BASE = (import.meta as any).env?.VITE_API_URL || 'http://localhost:3001';
const DISCLOSURE_VERSION = 'v1.0';

function uuid() {
  return crypto?.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2);
}

export default function PreviewOrder() {
  const [acceptTos, setAcceptTos] = useState(false);
  const [acceptDisclosure, setAcceptDisclosure] = useState(false);
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
    if (!acceptTos || !acceptDisclosure) {
      setError('Devi accettare i Termini di Servizio e le condizioni del programma.');
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
          acceptedDisclosure: true,
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
      <main style={{ maxWidth: 720, margin: '40px auto', padding: '0 16px' }}>
        <h1>Rivedi il tuo piano</h1>
        <div role="alert" aria-live="assertive" tabIndex={-1}>
          Piano non valido. Torna ai piani e selezionane uno.
        </div>
        <p style={{ marginTop: 16 }}>
          <a href="/coaching-donna-online#piani">Torna ai piani</a>
        </p>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: 820, margin: '40px auto', padding: '0 16px' }}>
      <h1>Rivedi il tuo piano</h1>

      <section aria-labelledby="summary-h">
        <h2 id="summary-h" style={{ marginTop: 16 }}>Riepilogo</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <caption className="sr-only">Dettagli del piano selezionato</caption>
          <tbody>
            <tr>
              <th scope="row" style={{ textAlign: 'left', padding: '8px 0' }}>Piano</th>
              <td style={{ padding: '8px 0' }}>{plan.title}</td>
            </tr>
            <tr>
              <th scope="row" style={{ textAlign: 'left', padding: '8px 0' }}>Durata</th>
              <td style={{ padding: '8px 0' }}>{plan.subtitle}</td>
            </tr>
            <tr>
              <th scope="row" style={{ textAlign: 'left', padding: '8px 0' }}>Prezzo</th>
              <td style={{ padding: '8px 0' }}>{plan.priceLabel}</td>
            </tr>
            <tr>
              <th scope="row" style={{ textAlign: 'left', padding: '8px 0' }}>Note</th>
              <td style={{ padding: '8px 0' }}>Il totale finale e le tasse applicabili saranno mostrati su Stripe.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section aria-labelledby="includes-h" style={{ marginTop: 16 }}>
        <h2 id="includes-h">Cosa è incluso</h2>
        <ul>
          {plan.features.map((f) => (
            <li key={f.id}>{f.label}</li>
          ))}
        </ul>
      </section>

      <form onSubmit={onSubmit} aria-busy={loading} style={{ marginTop: 24 }}>
        {error && (
          <div
            role="alert"
            tabIndex={-1}
            ref={errorRef}
            style={{ padding: 12, border: '1px solid #f00', background: '#ffe6e6', marginBottom: 12 }}
          >
            {error}
          </div>
        )}

        <fieldset style={{ border: 'none', padding: 0 }}>
          <legend className="sr-only">Consensi richiesti</legend>
          <label style={{ display: 'flex', gap: 8, alignItems: 'start', marginBottom: 8 }}>
            <input
              type="checkbox"
              checked={acceptTos}
              onChange={(e) => setAcceptTos(e.target.checked)}
              aria-describedby="tos-help"
            />
            <span>
              Ho letto e accetto i <a href="/terms" target="_blank" rel="noreferrer">Termini di Servizio</a>.
              <div id="tos-help" style={{ color: '#666' }}>Versione disclosure: {DISCLOSURE_VERSION}</div>
            </span>
          </label>

          <label style={{ display: 'flex', gap: 8, alignItems: 'start', marginBottom: 8 }}>
            <input
              type="checkbox"
              checked={acceptDisclosure}
              onChange={(e) => setAcceptDisclosure(e.target.checked)}
              aria-describedby="disc-help"
            />
            <span>
              Confermo di aver letto e compreso le specifiche del programma e le politiche indicate.
              <div id="disc-help" style={{ color: '#666' }}>Questo consenso è obbligatorio per procedere.</div>
            </span>
          </label>

          <label style={{ display: 'flex', gap: 8, alignItems: 'start' }}>
            <input
              type="checkbox"
              checked={marketingOptIn}
              onChange={(e) => setMarketingOptIn(e.target.checked)}
            />
            <span>Acconsento a ricevere comunicazioni informative e promozionali (opzionale).</span>
          </label>
        </fieldset>

        <div style={{ marginTop: 16, display: 'flex', gap: 12 }}>
          <button
            type="submit"
            disabled={!acceptTos || !acceptDisclosure || loading}
            style={{ padding: '10px 16px' }}
          >
            {loading ? 'Attendere…' : 'Continua al pagamento'}
          </button>
          <a href="/coaching-donna#piani" style={{ alignSelf: 'center' }}>Annulla</a>
        </div>
      </form>
    </main>
  );
}