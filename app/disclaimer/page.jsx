export default function Disclaimer() {
  return (
    <div className="min-h-screen py-10 px-4">
      {/* Titolo */}
      <h2 className="section-title mb-5 xl:mb-8 mt-8 text-center mx-auto text-tertiary">
        Disclaimer – T&C
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {/* Introduzione */}
        <p className="text-tertiary text-lg leading-relaxed">
          <strong>CarboZen</strong> è uno strumento di supporto per le persone
          con diabete, progettato per aiutare a calcolare la dose stimata di
          insulina rapida da assumere prima dei pasti.{" "}
          CarboZen <span className="font-semibold">non è un dispositivo medico</span> e
          non sostituisce in alcun modo la valutazione di un medico o di un
          diabetologo.
        </p>

        <p className="text-tertiary text-lg leading-relaxed">
          L'utente è responsabile dell’uso delle informazioni fornite e deve
          sempre confrontarsi con il proprio diabetologo prima di modificare
          la terapia insulinica.
        </p>

        {/* Sezione formula */}
        <h3 className="h3 text-tertiary">La formula utilizzata</h3>
        <p className="text-tertiary text-lg leading-relaxed">
          CarboZen per il calcolo del bolo insulinico utilizza una formula comunemente adottata nella pratica
          clinica diabetologica internazionale per stimare il{" "}
          <em>bolo prandiale</em>. La formula combina:
        </p>

        <ul className="list-disc list-inside text-tertiary text-lg space-y-1">
          <li>
            <strong>I-C (Rapporto Insulina / Carboidrati):</strong> grammi di
            carboidrati coperti da 1 unità di insulina.
          </li>
          <li>
            <strong>FSI (Fattore di Sensibilità Insulinica):</strong> riduzione
            della glicemia (in mg/dL) ottenuta con 1 unità di insulina rapida.
          </li>
        </ul>

        <div className="bg-tertiary border-l-4 border-secondary-foreground p-4 rounded-lg mb-6">
          <p className="subtitle4 text-secondary-foreground text-lg">
            <strong>Formula:</strong>
            <br />
            <code className="bg-tertiary px-2 py-1 rounded text-secondary-foreground text-lg">
              UI = (Carboidrati / I-C) + ((Glicemia attuale − Glicemia target) / FSI)
            </code>
          </p>
        </div>

        {/* Fonti */}
        <h3 className="h3 text-tertiary">Fonti e riconoscimento clinico</h3>
        <p className="text-tertiary text-lg leading-relaxed">
          Questa formula è descritta e utilizzata in diversi contesti clinici e
          formativi:
        </p>
        <ul className="list-disc list-inside text-tertiary text-lg space-y-1">
          <li>
            <strong><a
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4455388/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tertiary hover:underline"
            >
              NIH (National Institutes of Health)
            </a></strong>{" "}
            – Linee guida educative per il diabete.
          </li>
          <li>
            <strong><a
              href="https://www.siditalia.it/pdf/materiale-didattico/guest/VALENTINI.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tertiary hover:underline"
            >
              SID (Società Italiana di Diabetologia)
            </a></strong>{" "}
            – Materiali didattici per operatori sanitari e pazienti.
          </li>
          <li>
            <strong>Pratica clinica diabetologica</strong> – Utilizzo quotidiano,
            da parte di diabetologi, in Italia e nel mondo.
          </li>
        </ul>

        {/* Nota finale */}
        <div className="bg-secondary-foreground border-l-4 border-tertiary p-4 rounded-lg mt-8">
          <p className="text-tertiary text-lg leading-relaxed">
            <strong>Nota:</strong> Le informazioni fornite da CarboZen sono a
            scopo educativo e di supporto. Non iniziare, modificare o
            interrompere alcuna terapia senza l’approvazione del proprio medico.
          </p>
        </div>
      </div>
    </div>
  );
}



