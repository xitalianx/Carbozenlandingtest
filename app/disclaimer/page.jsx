// pages/disclaimer.jsx
export default function Disclaimer() {
  return (
    <div className="min-h-screen py-10 px-4">
                {/* Titolo */}
        <h2 className='section-title mb-8 xl:mb-16 mt-36 text-center mx-auto text-tertiary'>
          Disclaimer – Uso di Carbozen
        </h2>
      <div className="max-w-4xl mx-auto bg-secondary-foreground shadow-lg rounded-2xl p-8">
        
        {/* Introduzione */}
        <p className="subtitle4 text-tertiary mb-4">
          <strong>Carbozen</strong> è uno strumento di supporto per le persone
          con diabete, progettato per aiutare a calcolare la dose stimata di
          insulina rapida da assumere prima dei pasti. <span className="font-semibold">Non è un dispositivo medico</span> e non sostituisce in alcun modo la valutazione di un medico o di un diabetologo.
        </p>

        <p className="subtitle4 text-tertiary mb-6">
          L'utente è responsabile dell’uso delle informazioni fornite e deve
          sempre confrontarsi con il proprio team sanitario prima di modificare
          la terapia insulinica.
        </p>

        {/* Sezione formula */}
        <h3 className="h3 text-tertiary mb-4">
          La formula utilizzata
        </h3>
        <p className="subtitle4 text-tertiary mb-4">
          Carbozen utilizza una formula comunemente adottata nella pratica
          clinica diabetologica internazionale per stimare il <em>bolo
          prandiale</em>. La formula combina:
        </p>

        <ul className="list-disc list-inside text-tertiary mb-4">
          <li>
            <strong>I/C (Insulina / Carboidrati):</strong> numero di grammi di
            carboidrati coperti da 1 unità di insulina.
          </li>
          <li>
            <strong>FSI (Fattore di Sensibilità Insulinica):</strong> riduzione
            della glicemia (in mg/dL) ottenuta con 1 unità di insulina rapida.
          </li>
        </ul>

        <div className="bg-tertiary border-l-4 border-secondary-foreground p-4 rounded-lg mb-6">
          <p className="subtitle4 text-secondary-foreground">
            <strong>Formula:</strong>  
            <br />
            <code className="bg-tertiary px-2 py-1 rounded text-secondary-foreground">
              Dose totale = (Carboidrati / I/C) + ((Glicemia attuale − Glicemia target) / FSI)
            </code>
          </p>
        </div>

        {/* Fonti */}
        <h3 className="h3 text-tertiary mb-4">
          Fonti e riconoscimento clinico
        </h3>
        <p className="text-tertiary mb-4">
          Questa formula è descritta e utilizzata in diversi contesti clinici e
          formativi:
        </p>
        <ul className="list-disc list-inside text-tertiary mb-6">
          <li>
            <strong>NIH (National Institutes of Health)</strong> – Linee guida educative per il diabete.
          </li>
          <li>
            <strong>SID (Società Italiana di Diabetologia)</strong> – Materiali didattici per operatori sanitari e pazienti.
          </li>
          <li>
            <strong>Pratica clinica diabetologica</strong> – Utilizzo quotidiano da parte di diabetologi in Italia e nel mondo.
          </li>
        </ul>

        {/* Nota finale */}
        <div className="bg-secondary-foreground border-l-4 border-yellow-400 p-4 rounded-lg">
          <p className="text-tertiary">
            <strong>Nota:</strong> Le informazioni fornite da Carbozen sono a
            scopo educativo e di supporto. Non iniziare, modificare o interrompere alcuna terapia
            senza l’approvazione del proprio medico.
          </p>
        </div>
      </div>
    </div>
  );
}

