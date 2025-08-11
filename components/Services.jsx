import { motion } from "framer-motion";
import { GanttChartSquare, Blocks, Gem } from "lucide-react";

const servicesData = [
  {
    icon: <GanttChartSquare size={48} strokeWidth={1.2} />,
    title: "1 Versione Beta",
    description:
      "Già disponibile e utilizzabile la versione beta gratuita. Ogni feedback è ben accetto.",
  },
  {
    icon: <Blocks size={48} strokeWidth={1.2} />,
    title: "2 Lancio App",
    description:
      "Terminata la fase beta nel 2026 è atteso il lancio della versione definitiva.",
  },
  {
    icon: <Gem size={48} strokeWidth={1.2} />,
    title: "3 Miglioramenti continui",
    description:
      "Una volta completato il lancio verrà sviluppato tutto l'ecosistema complementare per dare all'utente la miglior esperienza possibile.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36 relative">
      <div className="container mx-auto">
        <h2 className="section-title mb-16 text-center text-tertiary">
          Prossimi Step
        </h2>

        {/* Linea centrale desktop */}
        <div className="absolute top-[160px] left-0 w-full h-[4px] bg-blue-300 hidden xl:block" />

        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between relative gap-16 xl:gap-0">
          {servicesData.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50, // mobile alterna direzioni
                y: 50,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-yellow-400 text-center p-6 rounded-2xl shadow-lg max-w-xs relative z-10 cursor-pointer hover:shadow-2xl transition-shadow duration-300 xl:mx-auto"
            >
              <motion.div
                className="text-blue-800 mb-4 flex justify-center"
                whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.4 } }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-lg font-bold text-blue-800 mb-2">{item.title}</h3>
              <p className="text-blue-900 text-sm">{item.description}</p>

              {/* Punto desktop */}
              <div className="hidden xl:block absolute -top-14 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-lg" />

              {/* Linea + punto mobile */}
              <div className="xl:hidden absolute -left-10 top-8 w-[2px] h-full bg-blue-300">
                <span className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-blue-500 border-4 border-white shadow-lg" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
