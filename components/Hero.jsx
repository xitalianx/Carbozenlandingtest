import Link from 'next/link';
import { Button } from './ui/button';
import { Download, Send } from 'lucide-react';

import {
  RiTimerFill,
  RiEmotionFill,
  RiImageFill,
  RiArrowDownSLine,
} from 'react-icons/ri';

// components
import DevImg from './DevImg';
import Badge from './Badge';
import Socials from './Socials';

const Hero = () => {
  return (
    <section className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
      <div className='container mx-auto'>
        <div className='flex justify-between gap-x-8'>
          {/* text */}
          <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
            <h1 className='h1 mb-4 text-secondary-foreground'>Gestisci la glicemia nei pasti</h1>
            <h1 className='h1 mb-4 text-secondary-foreground'>Vivi con serenità!</h1>
            <h2 className='h2 max-w-[490px] mx-auto xl:mx-0 '>
              Carbozen è la prima app sviluppata per migliorare la vita dei diabetici.
            </h2>
            <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 items-center mx-auto xl:mx-0 mb-12'>
              <Link href='/tutorial'>
                <Button className='text-tertiary gap-x-2'>
                  Scopri di più
                </Button>
              </Link>

              <p className='subtitle2 flex items-center h-10 mt-5'>oppure</p>

              <Link href='https://app.carbozen.it'>
                <Button className='text-tertiary gap-x-2'>
                  Inizia subito!
                </Button>
              </Link>
            </div>
            {/* socials */}
           {/* <Socials
              containerStyles='flex gap-x-6 mx-auto xl:mx-0'
              iconsStyles='text-secondary-foreground text-[22px] hover:text-primary transition-all'
            />*/}
          </div>
          {/* image */}
          <div className='hidden xl:flex relative'>
            {/* badge 1 */}
            <Badge
              containerStyles='absolute top-[24%] -left-[5rem]'
              icon={<RiTimerFill />}
              endCountNum={3}
              badgeText='Minuti per registrarsi '
            />
            {/* badge 2 */}
            <Badge
              containerStyles='absolute top-[80%] -left-[1rem]'
              icon={<RiImageFill />}
              endCountNum={6}
              endCountText='k'
              badgeText='Foto analizzate'
            />
            {/* badge 3 */}
            <Badge
              containerStyles='absolute top-[55%] -right-8'
              icon={<RiEmotionFill />}
              endCountNum={0}
              badgeText='Pensieri'
            />
            <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'></div>
            <DevImg
              containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom'
              imgSrc='/hero/developer.png'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;




