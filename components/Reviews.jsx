'use client';

import Image from 'next/image';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const reviewsData = [
  {
    avatar: '/reviews/avatar-1.png',
    name: 'Paolo Rossi',
    job: 'Impiegato',
    review:
      'La uso ogni giorno: mangiare fuori con il diabete è molto più semplice adesso.',
  },
  {
    avatar: '/reviews/avatar-2.png',
    name: 'Lina Chan',
    job: 'Interior Designer',
    review:
      'Precisa, veloce e utilissima: stimare i carboidrati nei piatti complessi non è più un problema.',
  },
  {
    avatar: '/reviews/avatar-3.png',
    name: 'Giacomo Verdi',
    job: 'Project manager',
    review:
      'Intelligente e affidabile! Le stime coincidono spesso con i miei conteggi manuali.',
  },
  {
    avatar: '/reviews/avatar-5.png',
    name: 'Marco Bianchi',
    job: 'Ingegnere ambientale',
    review:
      'Perfetta per chi ha diabete tipo 1. Ottimo supporto per evitare iper e ipo.',
  },
  {
    avatar: '/reviews/avatar-6.png',
    name: 'Carlo Neri',
    job: 'Video Editor',
    review:
      "Finalmente un'app che mi aiuta davvero! Scatto una foto e so quanta insulina fare.",
  },
];

const Reviews = () => {
  return (
    <section className='mb-12 xl:mb-32'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 text-center text-tertiary mx-auto'>Dicono di noi</h2>
        {/* slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className='h-[350px]'
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className='bg-secondary-foreground dark:bg-secondary/40 p-8 min-h-[300px]'>
                  <CardHeader className='p-0 mb-10'>
                    <div className='flex items-center gap-x-4'>
                      {/* image */}
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=''
                        priority
                      />
                      {/* name */}
                      <div className='flex flex-col text-tertiary'>
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className='text-lg text-tertiary'>
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
