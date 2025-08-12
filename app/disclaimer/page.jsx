// pages/disclaimer.jsx
export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        
        {/* Titolo */}
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Disclaimer – Uso di Carbozen
        </h1>

        {/* Introduzione */}
        <p className="text-gray-700 mb-4">
          <strong>Carbozen</strong> è uno strumento di supporto per le persone
          con diabete, progettato per aiutare a calcolare la dose stimata di
          insulina rapida da assumere prima dei pasti. <span className="font-semibold">Non è un dispositivo medico</span> e non sostituisce in alcun modo la valutazione di un medico o di un diabetologo.
        </p>

        <p className="text-gray-700 mb-6">
          L'utente è responsabile dell’uso delle informazioni fornite e deve
          sempre confrontarsi con il proprio team sanitario prima di modificare
          la terapia insulinica.
        </p>

        {/* Sezione formula */}
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          La formula utilizzata
        </h2>
        <p className="text-gray-700 mb-4">
          Carbozen utilizza una formula comunemente adottata nella pratica
          clinica diabetologica internazionale per stimare il <em>bolo
          prandiale</em>. La formula combina:
        </p>

        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            <strong>I/C (Insulina / Carboidrati):</strong> numero di grammi di
            carboidrati coperti da 1 unità di insulina.
          </li>
          <li>
            <strong>FSI (Fattore di Sensibilità Insulinica):</strong> riduzione
            della glicemia (in mg/dL) ottenuta con 1 unità di insulina rapida.
          </li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-6">
          <p className="text-gray-800">
            <strong>Formula:</strong>  
            <br />
            <code className="bg-gray-100 px-2 py-1 rounded">
              Dose totale = (Carboidrati / I/C) + ((Glicemia attuale − Glicemia target) / FSI)
            </code>
          </p>
        </div>

        {/* Fonti */}
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Fonti e riconoscimento clinico
        </h2>
        <p className="text-gray-700 mb-4">
          Questa formula è descritta e utilizzata in diversi contesti clinici e
          formativi:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
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
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
          <p className="text-gray-800">
            <strong>Nota:</strong> Le informazioni fornite da Carbozen sono a
            scopo educativo e di supporto. Non iniziare, modificare o interrompere alcuna terapia
            senza l’approvazione del proprio medico.
          </p>
        </div>
      </div>
    </div>
  );
}
