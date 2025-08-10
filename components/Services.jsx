import { GanttChartSquare, Blocks, Gem } from 'lucide-react';
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
    title: '1 Versione Beta',
    description:
      'Già disponibile e utilizzabile la versione beta gratuita. Ogni feedback è ben accetto.',
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: '2 Lancio App',
    description:
      'Terminata la fase beta nel 2026 è atteso il lancio della versione definitiva',
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: '3 Miglioramenti continui',
    description:
      "Una volta completato il lancio verrà sviluppato tutto l'ecosistema complementare per dare all'utente la miglior esperienza possibile.",
  },
];

const Services = () => {
  return (
    <section className='mb-12 xl:mb-36'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto text-tertiary'>
          Prossimi Step
        </h2>
        {/* grid items */}
        <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
          {servicesData.map((item, index) => {
            return (
              <Card
                className='bg-secondary-foreground w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative'
                key={index}
              >
                <CardContent className='text-center'>
                  <CardTitle className='mb-4 text-tertiary'>{item.title}</CardTitle>
                  <CardDescription className='text-lg text-tertiary'>
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
