import DevImg from './DevImg';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';


const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className='xl:h-[860px] pb-12 xl:py-24'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 mt-36 text-center mx-auto text-tertiary'>
          CarboZen in breve
        </h2>
        <div className='flex flex-col xl:flex-row'>
          {/* image */}
          <div className='hidden xl:flex flex-1 relative'>
            <DevImg
              containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative'
              imgSrc='/about/developer.png'
            />
          </div>
          {/* tabs */}
          <div className='flex-1'>
            <Tabs defaultValue='personal'>
              <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                <TabsTrigger className='w-[162px] xl:w-auto text-tertiary' value='personal'>
                  L'idea
                </TabsTrigger>
                <TabsTrigger
                  className='w-[162px] xl:w-auto text-tertiary'
                  value='qualifications'
                >
                  Come funziona
                </TabsTrigger>
                <TabsTrigger className='w-[162px] xl:w-auto text-tertiary' value='skills'>
                  Piani futuri
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className='text-lg mt-12 xl:mt-8'>
                {/* personal */}
                <TabsContent value='personal'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-4 text-tertiary'>
                      Come nasce CarboZen
                    </h3>
                <p className='subtitle3 max-w-xl mx-auto xl:mx-0'>
                  CarboZen nasce da un'esperienza personale, quella di <strong>Giovanni Cerri</strong>, che ha scoperto oltre dieci anni fa di avere il <strong>diabete mellito tipo 1 LADA</strong>. Sin da subito, convivere con la patologia si è rivelato impegnativo, soprattutto quando si trattava di <strong>stimare i carboidrati dei pasti</strong> specialmente fuori casa, e di <strong>calcolare con precisione le unità di insulina</strong> necessarie.
                  <br /><br />
                  Gestire l'alimentazione con libertà stava diventando una sfida quotidiana, spesso fonte di frustrazione. Da qui è nata l'esigenza di creare <strong>CarboZen</strong>, <strong>un'app progettata per semplificare la vita di chi convive con il diabete</strong>, offrendo un supporto <strong>concreto</strong>, <strong>veloce</strong> e <strong>affidabile</strong>.
                </p>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value='qualifications'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-4 text-tertiary'>
                      Come funziona CarboZen
                    </h3>
                  <p className='subtitle3 max-w-xl mx-auto xl:mx-0 mt-6'>
                    Con <strong>CarboZen</strong> è possibile <strong>stimare i carboidrati a partire da una semplice foto del piatto</strong>. Inserendo i propri parametri personali come <strong>rapporto insulina/carboidrati (I/C)</strong>, <strong>fattore di sensibilità insulinica (FSI)</strong> e <strong>glicemia target</strong>, l'app è in grado di <strong>calcolare automaticamente le unità di insulina necessarie</strong> per ogni pasto. 
                    <br /><br />
                    È inoltre possibile <strong>monitorare le proprie statistiche</strong>, <strong>rivedere i piatti consumati</strong> e consultare le <strong>stime effettuate nel tempo</strong>, per un controllo più consapevole e continuo.
                  </p>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value='skills'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-4 text-tertiary'>
                      Piani futuri
                    </h3>
                  <p className='subtitle3 max-w-xl mx-auto xl:mx-0 mt-6'>
                  <strong>CarboZen è un progetto in continua evoluzione</strong>, nato da un bisogno reale e sviluppato con passione. Siamo costantemente alla ricerca di <strong>risorse e collaborazioni</strong> per offrire un’esperienza sempre più completa, <strong>ampliare le funzionalità dell’app</strong> e integrarla con strumenti utili alla gestione quotidiana del diabete. 
                  <br /><br />
                  L’obiettivo è costruire un ecosistema affidabile, innovativo e capace di <strong>collaborare con le eccellenze in campo diabetologico</strong>, mettendo la persona al centro.
                  </p>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
