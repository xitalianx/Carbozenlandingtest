import { Button } from './ui/button';
import Link from 'next/link';

const Cta = () => {
  return (
    <section className='py-24 bg-tertiary dark:bg-secondary/40'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center'>
          <h2 className='h2 max-w-xl text-center mb-8 text-secondary-foreground'>
            Pronto a migliorare la tua vita? Inizia subito ad usare CarboZen
          </h2>
          <Link href='https://app.carbozen.it'>
            <Button className='text-tertiary gap-x-2'>Clicca qui!</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
