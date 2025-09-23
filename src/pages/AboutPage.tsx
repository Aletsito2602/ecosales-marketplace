import { motion } from 'framer-motion';
import { useScrollToTop } from '../hooks/useScrollToTop';
import PageBanner from '../components/ui/PageBanner';

const AboutPage = () => {
  // Scroll to top on page load
  useScrollToTop();

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18 },
    },
  };

  const values = [
    {
      title: 'Refugio cafetero',
      description:
        'Káapeh nació como un espacio para encontrarnos alrededor de una taza honesta. Cada persona que cruza la puerta se convierte en parte de la historia.',
    },
    {
      title: 'Pasión por enseñar',
      description:
        'Compartimos el oficio con talleres, catas y mentorías para que más personas se animen a explorar el café de especialidad.',
    },
    {
      title: 'Compromiso con la calidad',
      description:
        'Seleccionamos granos con trazabilidad completa y trabajamos con tostadores aliados para resaltar cada origen latinoamericano.',
    },
  ];

  const luchoProfile = {
    name: 'Luciano "Lucho" Cuello',
    role: 'Pionero del Café de Especialidad en Córdoba',
    titles: ['Fundador', 'Instructor Certificado', 'Asesor Técnico'],
    bio: 'Luciano Cuello, conocido como Lucho, es un referente en el mundo del café de especialidad en Córdoba. Fundador de la primera academia de baristas en la región y del Refugio Cafetero Kaapeh, ha sido clave en la formación de una comunidad apasionada por el café. Con certificaciones de la Specialty Coffee Association (SCA) en Brewing, Barista Skills, Green Coffee y Roasting, su experiencia y conocimiento han elevado los estándares del café en la ciudad. Como asesor técnico del tostador Kaapeh y jurado en competencias nacionales, Lucho es una figura central en la evolución de la cultura cafetera en Argentina.',
    image: '/lucho.png',
  };

  return (
    <div className="w-full space-y-16">
      <PageBanner
        title="Káapeh · Cafetería de Especialidad"
        description="Somos un refugio cafetero, y a Káapeh lo construimos con cada persona que nos visita."
        backgroundImage="https://zsucsanecavdmpnpatct.supabase.co/storage/v1/object/sign/e-commerces/kaapeh/28.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YTVkNTQ5Yi1jNjE5LTQxNzgtYjFiNy1jY2FkMjBlMTlhOTQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJlLWNvbW1lcmNlcy9rYWFwZWgvMjguanBnIiwiaWF0IjoxNzU4MzE3NzM1LCJleHAiOjE3ODk4NTM3MzV9.wfn5lMMvo2ugqhLriqdT2qdd7Yyni0vsJKjAxJPqC3c"
        cta={{ label: 'Sumate a una cata', to: '/brewing' }}
      />

      <section className="space-y-10 px-6 md:px-12 py-20 relative overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-turquoise-50 via-neutral-50 to-coffee-50"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-turquoise-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-coffee-200 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-neutral-300 rounded-full blur-2xl"></div>
        </div>
        
        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-120px' }}
          variants={fadeUp}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-coffee-800">Nuestra filosofía</h2>
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-xl border border-white border-opacity-50">
            <p className="text-coffee-700 text-xl leading-relaxed">
              En Káapeh creemos que cada taza es una oportunidad para conectar historias. Cuidamos la trazabilidad, honramos a productores aliados y brindamos hospitalidad para que siempre tengas un refugio al que volver.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className={`bg-gradient-to-br ${
                index === 0 
                  ? 'from-turquoise-100 to-turquoise-50' 
                  : index === 1 
                  ? 'from-coffee-100 to-coffee-50' 
                  : 'from-neutral-100 to-neutral-50'
              } p-8 shadow-lg border border-white border-opacity-60 rounded-2xl backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
            >
              <div className={`w-12 h-12 rounded-full ${
                index === 0 
                  ? 'bg-turquoise-500' 
                  : index === 1 
                  ? 'bg-coffee-500' 
                  : 'bg-neutral-500'
              } flex items-center justify-center mb-4`}>
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-coffee-800 mb-4">{value.title}</h3>
              <p className="text-coffee-700 leading-relaxed text-base">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="px-6 md:px-12 py-20 bg-neutral-50">
        
        <motion.div
          className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.div className="order-2 lg:order-1 space-y-6" variants={fadeUp}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-coffee-800">Conocé a Lucho</h2>
            <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white border-opacity-50">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-coffee-800 mb-2">{luchoProfile.name}</h3>
                <p className="text-turquoise-600 text-lg font-semibold mb-4">{luchoProfile.role}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {luchoProfile.titles.map((title, index) => (
                    <span 
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        index === 0 
                          ? 'bg-turquoise-100 text-turquoise-800' 
                          : index === 1 
                          ? 'bg-coffee-100 text-coffee-800' 
                          : 'bg-neutral-100 text-neutral-800'
                      }`}
                    >
                      {title}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-r from-turquoise-50 to-coffee-50 rounded-xl p-6 border-l-4 border-turquoise-500">
                <p className="text-coffee-800 leading-relaxed font-medium">{luchoProfile.bio}</p>
              </div>
            </div>
          </motion.div>
          <motion.div className="order-1 lg:order-2" variants={fadeUp}>
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <img src={luchoProfile.image} alt={luchoProfile.name} className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Locations Section */}
      <section className="px-6 md:px-12 py-20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-turquoise-50 to-coffee-50"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-48 h-48 bg-turquoise-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-36 h-36 bg-coffee-300 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          className="relative z-10 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div className="text-center mb-16" variants={fadeUp}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-coffee-800 mb-6">
              Nuestros Refugios
            </h2>
            <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white border-opacity-50 max-w-4xl mx-auto">
              <p className="text-coffee-700 text-xl leading-relaxed mb-4">
                Tenemos dos lugares en dónde podes venir a compartir y disfrutar con un café de por medio.
              </p>
              <p className="text-turquoise-600 text-2xl font-bold">
                ¡Vení a visitarnos!
              </p>
            </div>
          </motion.div>

          {/* Locations Grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={staggerContainer}
          >
            {/* Location 1 - José Baigorri */}
            <motion.div
              className="group relative rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 h-80"
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src="/alta-cba.png" 
                alt="Refugio Cafetero José Baigorri" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Default overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-0 transition-opacity duration-300"></div>
              <div className="absolute bottom-6 left-6 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-white text-3xl font-bold">Refugio Cafetero</h3>
                <p className="text-gray-200 text-lg">Alta Córdoba</p>
              </div>

              {/* Hover overlay with full info */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-8">
                <div className="text-center text-white space-y-4">
                  <h3 className="text-3xl font-bold mb-2">Refugio Cafetero</h3>
                  <h4 className="text-xl font-semibold text-turquoise-300 mb-6">Káapeh - Café de Especialidad</h4>
                  
                  <div className="space-y-3 text-left max-w-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-turquoise-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold">Dirección:</p>
                        <p className="text-gray-300">José Baigorri 608, Córdoba Capital</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-turquoise-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold">Teléfono:</p>
                        <p className="text-gray-300">+54 9 351 273-8370</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-turquoise-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold">Horarios:</p>
                        <p className="text-gray-300">Lun. | Dom. 8:00-13:00 y 16:30-21:00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Location 2 - Belgrano */}
            <motion.div
              className="group relative rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 h-80"
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src="/guemes.png" 
                alt="Refugio Cafetero Belgrano" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Default overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-0 transition-opacity duration-300"></div>
              <div className="absolute bottom-6 left-6 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-white text-3xl font-bold">Refugio Cafetero</h3>
                <p className="text-gray-200 text-lg">Güemes</p>
              </div>

              {/* Hover overlay with full info */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-8">
                <div className="text-center text-white space-y-4">
                  <h3 className="text-3xl font-bold mb-2">Refugio Cafetero</h3>
                  <h4 className="text-xl font-semibold text-turquoise-300 mb-6">Káapeh - Café de Especialidad</h4>
                  
                  <div className="space-y-3 text-left max-w-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-turquoise-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold">Dirección:</p>
                        <p className="text-gray-300">Belgrano 647, Córdoba Capital</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-turquoise-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold">Teléfono:</p>
                        <p className="text-gray-300">+54 9 351 202-5984</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-turquoise-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold">Horarios:</p>
                        <p className="text-gray-300">Lun. | Dom. 8:00-13:00 y 16:30-21:00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;
