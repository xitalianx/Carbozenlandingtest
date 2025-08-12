// pages/disclaimer.jsx
export default function Disclaimer() {
  return (
    <div className="min-h-screen py-10 px-4">
      {/* Titolo */}
      <h2 className="section-title mb-8 xl:mb-16 mt-36 text-center mx-auto text-tertiary">
        Disclaimer – Uso di Carbozen
      </h2>

      {/* Introduzione */}
      <div className="max-w-4xl mx-auto space-y-6">
        <p className="text-tertiary text-lg leading-relaxed">
          <strong>Carbozen</strong> è uno strumento di supporto per le persone
          con diabete, progettato per aiutare a calcolare la dose stimata di
          insulina rapida da assumere prima dei pasti.{" "}
          <span className="font-semibold">Non è un dispositivo medico</span> e
          non sostituisce in alcun modo la valutazione di un medico o di un
          diabetologo.
        </p>

        <p className="text-tertiary text-lg leading-relaxed">
          L'utente è responsabile dell’uso delle informazioni fornite e deve
          sempre confrontarsi con il proprio team sanitario prima di modificare
          la terapia insulinica.
        </p>

        {/* Sezione formula */}
        <h3 className="h3 text-tertiary mt-12">La formula utilizzata</h3>
        <p className="text-tertiary text-lg leading-relaxed">
          Carbozen utilizza una formula comunemente adottata nella pratica
          clinica diabetologica internazionale per stimare il{" "}
          <em>bolo prandiale</em>. La formula combina:
        </p>

        <ul className="list-disc list-inside text-tertiary text-lg space-y-1">
          <li>
            <strong>I/C (Insulina / Carboidrati):</strong> numero di grammi di
            carboidrati coperti da 1 unità di insulina.
          </li>
          <li>
            <strong>FSI (Fattore di Sensibilità Insulinica):</strong> riduzione
            della glicemia (in mg/dL) ottenuta con 1 unità di insulina rapida.
          </li>
        </ul>

        {/* Formula visuale */}
        <div className="flex flex-col items-center gap-4 mt-6">
          <span className="text-tertiary font-semibold">UI totali =</span>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="bg-secondary-foreground text-tertiary px-4 py-2 rounded-lg shadow">
              Carboidrati / I/C
            </div>
            <span className="text-tertiary font-bold text-xl">+</span>
            <div className="bg-secondary-foreground text-tertiary px-4 py-2 rounded-lg shadow">
              (Glicemia attuale − Target) / FSI
            </div>
          </div>
        </div>

        {/* Fonti */}
        <h3 className="h3 text-tertiary mt-12">Fonti e riconoscimento clinico</h3>
        <p className="text-tertiary text-lg leading-relaxed">
          Questa formula è descritta e utilizzata in diversi contesti clinici e
          formativi:
        </p>
        <ul className="list-disc list-inside text-tertiary text-lg space-y-1">
          <li>
            <strong>NIH (National Institutes of Health)</strong> – Linee guida
            educative per il diabete.
          </li>
          <li>
            <strong>SID (Società Italiana di Diabetologia)</strong> – Materiali
            didattici per operatori sanitari e pazienti.
          </li>
          <li>
            <strong>Pratica clinica diabetologica</strong> – Utilizzo quotidiano
            da parte di diabetologi in Italia e nel mondo.
          </li>
        </ul>

        {/* Nota finale */}
        <div className="bg-secondary-foreground border-l-4 border-yellow-400 p-4 rounded-lg mt-8">
          <p className="text-tertiary text-lg leading-relaxed">
            <strong>Nota:</strong> Le informazioni fornite da Carbozen sono a
            scopo educativo e di supporto. Non iniziare, modificare o
            interrompere alcuna terapia senza l’approvazione del proprio medico.
          </p>
        </div>
      </div>
    </div>
  );
}


