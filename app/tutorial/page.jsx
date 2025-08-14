import { GanttChartSquare, Blocks, Gem } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../../components/ui/button.jsx';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: 'Registrati o accedi',
    image: '/tutorial/img1.jpg',
    description:
      'Registrati con la tua mail, inserisci i parametri e rispondi alle semplici domande di registrazione. Se sei già iscritto, accedi direttamente.',
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: 'Fai una foto',
    image: '/tutorial/img2.jpg',
    description:
      "Fotografa il piatto di cui vuoi stimare i carboidrati e attendi finchè l'analisi è completata.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: 'Inserisci la tua glicemia attuale',
    image: '/tutorial/img3.jpg',
    description:
      "Inserisci la tua glicemia attuale nel riquadro dopo aver calcolato i carboidrati del pasto.",
  },
    {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: 'Calcola le unità insuliniche',
    image: '/tutorial/img4.jpg',
    description:
        "Clicca sul bottone per calcolare quante unità insuliniche ti servono.",
    },
        {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: 'Gusta il tuo pasto',
    image: '/tutorial/img5.jpg',
    description:
        "Goditi il tuo pasto senza preoccupazioni!",
    },
];

const Tutorial = () => {
  return (
    <section className='mb-12 xl:mb-36'>
      <div className='container mx-auto'>
        <h2 className='section-title mt-5 mb-12 xl:mb-24 mt-5 text-center mx-auto text-tertiary'>
          Tutorial
        </h2>
        <p className='subtitle3 mb-5 text-center'>Usare Carbozen è semplice e intuitivo, di seguito i passaggi.</p>
        {/* grid items */}
        <div className="flex flex-col items-center gap-y-12 xl:gap-y-24">
          {servicesData.map((item, index) => {
            return (
              <Card
                className='bg-secondary-foreground w-full max-w-[1200px] flex flex-col pt-16 pb-10 justify-center items-center relative'
                key={index}
              >
                <CardContent className='text-center'>
                  <CardTitle className='mb-4 text-tertiary'>{item.title}</CardTitle>

                  {/* Immagine tra titolo e descrizione */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className='mx-auto mb-4 w-240 h-240 object-contain border-2 border-tertiary rounded-lg'
                  />

                  <CardDescription className='text-lg text-tertiary'>
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center'>
          <h2 className='h2 max-w-xl text-center mb-8 mt-10  text-tertiary'>
            Provalo subito!
          </h2>
          <Link href='https://app.carbozen.it'>
            <Button className='text-tertiary gap-x-2'>Clicca qui</Button>
          </Link>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Tutorial;