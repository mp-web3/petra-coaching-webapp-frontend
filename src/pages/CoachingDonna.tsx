import { Box } from '@chakra-ui/react';
import { Hero, SectionWithImageAndText, TripleAccordion, Steps } from '@/components'
import donnaCoachingOnline from '@/assets/images/donna-coaching-online-trx.jpg'
import giovaneDonnaClienteTipo from '@/assets/images/giovane-donna-cliente-tipo-coaching-online.jpg'


const CoachingDonna = () => {
    return (
        <Box>
            <Hero 
                backgroundImage={donnaCoachingOnline}
                titleLine1='coaching donna'
                titleLine2='online'
                buttonText='inizia ora'
                buttonLink=''
                objectionReducingInfoText='Insieme costruiamo il tuo percorso: coaching individuale e sostegno continuo da donna a donna per il cambiamento che hai sempre desiderato.'

            />

            <SectionWithImageAndText
                heading='il mio programma fa per te?'
                imageUrl={giovaneDonnaClienteTipo}
                imageAlt='Giovane donna coaching online'
                text={`Sogni di iniziare ad allenarti ma non sai come muovere i primi passi?
                        Ti senti persa quando varchi la soglia della palestra? Ti alleni da tempo senza vedere i risultati che desideri?
                        Cerchi un programma specificamente pensato per il corpo e le esigenze femminili? Vuoi spingerti oltre i tuoi limiti e scoprire di cosa sei davvero capace? Vuoi rimetterti in forma e sentirti bene con te stessa?
                        Se ti riconosci in almeno una di queste domande, sei nel posto giusto.
                        Il mio coaching è nato proprio per rispondere a questi bisogni, per offrirti la guida e il supporto che hai sempre cercato. Non importa da dove parti o quali sono i tuoi obiettivi: insieme troveremo la strada giusta per te.`}
            />


            {/* Accordion */}
            <TripleAccordion 
                items={[
                    {
                        title: 'valorizzazione forme femminili', 
                        text: `Percorso mirato a valorizzare le forme femminili, puntando a un rimodellamento armonico del corpo, con focus specifico su glutei, schiena e addome per creare quella "V-shape" tanto desiderata. 
                                Un approccio "su misura" che combina sviluppo muscolare mirato e tonificazione total body per esaltare la naturale bellezza del corpo femminile.`,
                    },
                    {
                        title: 'sviluppo forza', 
                        text: `persorso mirato allo sviluppo della forza: siamo donne, siamo forti! Un cammino per le donne coraggiose, pronte a fidarsi del proprio corpo e scoprire tutte le sue potenzialità. 
                                Un percorso che sfida i "limiti" autoimposti e rivela la vera forza che è in ogni donna.`,
                    },
                    {
                        title: 'fitness', 
                        text: `percorso dedicato a ritrovare la forma fisica e benessere generale. 
                                Un programma completo per chi si sente "fuori forma" e vuole riconquistare tonicità, energia e consapevolezza del proprio corpo.`,
                    },
                    ]}
            
            />

            <Steps 
                heading="Passo a passo la tua trasformazione assieme a me"
                items={[
                    {
                        number: 1,
                        title: 'STEP 1',
                        subtitle: 'Consulenza video iniziale',
                        bullets: [
                            'Ti ascolterò per conoscere la tua storia e le tue esperienze passate con fitness e sport',
                            'Analizzeremo insieme il tuo punto di partenza attuale, esploreremo i tuoi obiettivi e le tue aspettative',
                            'Definiremo il percorso più adatto a te, valutando impegno e motivazione',
                        ],
                    },
                    {
                        number: 2,
                        title: 'STEP 2',
                        subtitle: 'Il tuo primo piano personalizzato',
                        bullets: [
                            'Creerò un programma di allenamento pensato esclusivamente per te',
                            "Riceverai l'accesso alla tua App personale entro 5 giorni lavorativi",
                            'Troverai la prima scheda di 6 settimane con video dimostrativi per ogni esercizio',
                        ],
                    },
                    {
                        number: 3,
                        title: 'STEP 3',
                        subtitle: 'Feedback e monitoraggio costante',
                        bullets: [
                            'Potrai contattarmi via WhatsApp per qualsiasi dubbio o domanda',
                            'Potrai inviarmi video esecuzioni degli esercizi per ricevere feedback immediati sulla tecnica',
                            'Ogni 5 settimane faremo una consulenza video (inclusa nel pacchetto)',
                            'Insieme faremo il punto sui progressi e pianificheremo i passi successivi',
                        ],
                    },
                ]}
            />

        </Box>
    )
}

export default CoachingDonna;