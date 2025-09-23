import { motion } from 'framer-motion';
import { FaCoffee, FaThermometerHalf, FaClock, FaBalanceScale, FaEye, FaHeart, FaStar } from 'react-icons/fa';
import { useScrollToTop } from '../hooks/useScrollToTop';
import PageBanner from '../components/ui/PageBanner';
import { BREWING_METHODS } from '../lib/data';

const methodDetails = {
  Espresso: {
    ratio: '1:2',
    grind: 'Fino como sal de mesa',
    time: '25 - 30 segundos',
    temperature: '92-94°C',
    difficulty: 'Avanzado',
    flavor: 'Intenso y concentrado',
    icon: FaCoffee,
    color: 'from-coffee-500 to-coffee-600',
    tips: ['Presión constante de 9 bares', 'Tamping uniforme', 'Extracción dorada']
  },
  'Pour Over': {
    ratio: '1:16',
    grind: 'Medio, con textura similar a arena',
    time: '3:00 - 3:30 minutos',
    temperature: '92-96°C',
    difficulty: 'Intermedio',
    flavor: 'Limpio y brillante',
    icon: FaEye,
    color: 'from-turquoise-500 to-turquoise-600',
    tips: ['Vertido circular lento', 'Bloom de 30 segundos', 'Mantener nivel constante']
  },
  'Prensa Francesa': {
    ratio: '1:15',
    grind: 'Grueso para evitar sedimentos',
    time: '4 minutos de inmersión',
    temperature: '93-96°C',
    difficulty: 'Fácil',
    flavor: 'Cuerpo completo',
    icon: FaHeart,
    color: 'from-neutral-500 to-neutral-600',
    tips: ['Agitar suavemente', 'Presionar lentamente', 'Servir inmediatamente']
  },
  AeroPress: {
    ratio: '1:13',
    grind: 'Medio-fino',
    time: '2 minutos incluyendo agitación',
    temperature: '85-92°C',
    difficulty: 'Fácil',
    flavor: 'Versátil y suave',
    icon: FaStar,
    color: 'from-yellow-500 to-orange-500',
    tips: ['Agitar 10 segundos', 'Presión constante', 'Experimentar con invertido']
  },
  'Cold Brew': {
    ratio: '1:8',
    grind: 'Muy grueso',
    time: '12 - 16 horas en frío',
    temperature: 'Ambiente/Frío',
    difficulty: 'Fácil',
    flavor: 'Dulce y suave',
    icon: FaThermometerHalf,
    color: 'from-blue-500 to-cyan-500',
    tips: ['Filtrar bien', 'Diluir al servir', 'Conservar refrigerado']
  },
};

const BrewingPage = () => {
  // Scroll to top on page load
  useScrollToTop();

  const fadeIn = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const staggerParent = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const brewingTips = [
    {
      title: 'Molido fresco',
      description:
        'Moler justo antes de preparar maximiza los aromas. Ajustá la granulometría según la resistencia del método.',
    },
    {
      title: 'Agua de calidad',
      description:
        'Utilizá agua filtrada con un perfil balanceado de minerales para resaltar la dulzura natural del café.',
    },
    {
      title: 'Control de temperatura',
      description:
        'La mayoría de los métodos brillan entre 92 °C y 96 °C. Excepciones como el cold brew se extraen en frío.',
    },
    {
      title: 'Consistencia',
      description:
        'Registra cantidades, tiempos y temperaturas. Pequeños ajustes permiten encontrar tu perfil ideal.',
    },
  ];

  const equipmentBundles = [
    {
      name: 'Filtro manual básico',
      description: 'Ideal para comenzar en pour over con control simple y resultados limpios.',
      items: ['Dripper V60 o Kalita', 'Filtros de papel', 'Balanza digital', 'Kettle de cuello de ganso'],
    },
    {
      name: 'Equipo de espresso en casa',
      description: 'Para quienes buscan replicar la barra en casa con control de extracción y vapor.',
      items: ['Máquina espresso de grupo simple', 'Molino cónico de muela', 'Tamper y balanza', 'Jarra texturadora'],
    },
    {
      name: 'Kit de exploración en frío',
      description: 'Preparaciones suaves y dulces pensadas para bebidas refrescantes.',
      items: ['Jarra cold brew de 1L', 'Molino manual', 'Filtro reutilizable', 'Botellas herméticas'],
    },
  ];

  return (
    <div className="w-full space-y-16">
      <PageBanner
        title="Métodos para revelar cada perfil"
        description="Descubrí cómo extraer lo mejor de nuestros cafés Kaapeh con guías claras, proporciones y tips de barista."
        backgroundImage="https://zsucsanecavdmpnpatct.supabase.co/storage/v1/object/sign/e-commerces/kaapeh/18.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YTVkNTQ5Yi1jNjE5LTQxNzgtYjFiNy1jY2FkMjBlMTlhOTQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJlLWNvbW1lcmNlcy9rYWFwZWgvMTguanBnIiwiaWF0IjoxNzU4MzE3NTM1LCJleHAiOjE3ODk4NTM1MzV9.VIKT_dVa__s44m_zHH3Me8J-_GkqN1RzSbLH8kdefUM"
        cta={{ label: 'Elegir tu café', to: '/products' }}
      />

      <section className="space-y-12 px-6 md:px-12 py-20 bg-gradient-to-br from-neutral-50 via-turquoise-50/30 to-coffee-50/30">
        <motion.div 
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-coffee-800">Guías Esenciales</h2>
          <p className="mx-auto max-w-3xl text-lg text-coffee-600 leading-relaxed">
            Cada método resalta atributos distintos: cuerpo, acidez, textura o dulzor. Descubrí el equilibrio ideal con nuestras recomendaciones de barista.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerParent}
        >
          {BREWING_METHODS.map((method) => {
            const details = methodDetails[method.name as keyof typeof methodDetails];
            const IconComponent = details?.icon || FaCoffee;
            
            return (
              <motion.article
                key={method.name}
                className="group relative bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl p-8 flex flex-col space-y-6 border border-white/50 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${details?.color || 'from-coffee-500 to-coffee-600'} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Header with Icon */}
                <div className="relative z-10 flex items-center gap-4">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${details?.color || 'from-coffee-500 to-coffee-600'} text-white shadow-lg`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-coffee-800">{method.name}</h3>
                    {details && (
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                        details.difficulty === 'Fácil' ? 'bg-green-100 text-green-800' :
                        details.difficulty === 'Intermedio' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {details.difficulty}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="relative z-10 text-coffee-600 leading-relaxed">{method.description}</p>

                {/* Flavor Profile */}
                {details && (
                  <div className="relative z-10 bg-gradient-to-r from-turquoise-50 to-coffee-50 rounded-xl p-4 border border-turquoise-100">
                    <p className="text-sm font-semibold text-turquoise-700 mb-1">Perfil de Sabor</p>
                    <p className="text-coffee-700 font-medium">{details.flavor}</p>
                  </div>
                )}

                {/* Parameters */}
                {details && (
                  <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-gray-100 shadow-sm">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-coffee-500 mb-4 flex items-center gap-2">
                      <FaBalanceScale className="w-3 h-3" />
                      Parámetros Sugeridos
                    </h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <FaBalanceScale className="w-3 h-3 text-turquoise-500" />
                        <div>
                          <p className="font-semibold text-coffee-800">Ratio</p>
                          <p className="text-coffee-600">{details.ratio}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaThermometerHalf className="w-3 h-3 text-red-500" />
                        <div>
                          <p className="font-semibold text-coffee-800">Temp.</p>
                          <p className="text-coffee-600">{details.temperature}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 col-span-2">
                        <FaClock className="w-3 h-3 text-blue-500" />
                        <div>
                          <p className="font-semibold text-coffee-800">Tiempo</p>
                          <p className="text-coffee-600">{details.time}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="font-semibold text-coffee-800 mb-2">Molido</p>
                      <p className="text-sm text-coffee-600">{details.grind}</p>
                    </div>
                  </div>
                )}

                {/* Tips */}
                {details?.tips && (
                  <div className="relative z-10 bg-gradient-to-r from-coffee-50 to-neutral-50 rounded-xl p-4 border border-coffee-100">
                    <h5 className="text-sm font-bold text-coffee-700 mb-3 flex items-center gap-2">
                      <FaStar className="w-3 h-3 text-yellow-500" />
                      Tips de Barista
                    </h5>
                    <ul className="space-y-2">
                      {details.tips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <span className="w-1.5 h-1.5 bg-turquoise-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-coffee-600">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      <section className="bg-gradient-to-br from-coffee-50 via-neutral-50 to-turquoise-50 space-y-12 px-6 md:px-12 py-20">
        <motion.div 
          className="text-center space-y-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-coffee-800">Consejos de Barista</h2>
          <p className="text-lg text-coffee-600 leading-relaxed">
            Pequeños ajustes marcan la diferencia. Tomá nota de estas prácticas profesionales para llevar cada taza a su mejor versión.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerParent}
        >
          {brewingTips.map((tip, index) => {
            const tipIcons = [FaCoffee, FaThermometerHalf, FaBalanceScale, FaClock];
            const tipColors = [
              'from-coffee-500 to-coffee-600',
              'from-red-500 to-red-600', 
              'from-turquoise-500 to-turquoise-600',
              'from-blue-500 to-blue-600'
            ];
            const TipIcon = tipIcons[index] || FaCoffee;
            
            return (
              <motion.div
                key={tip.title}
                className="group bg-white/90 backdrop-blur-sm p-6 shadow-xl hover:shadow-2xl border border-white/50 rounded-2xl transition-all duration-500 hover:-translate-y-1"
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${tipColors[index]} text-white shadow-lg mb-4`}>
                  <TipIcon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-coffee-800 mb-3">{tip.title}</h3>
                <p className="text-coffee-600 leading-relaxed">{tip.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <section className="space-y-12 px-6 md:px-12 py-20 bg-white">
        <motion.div 
          className="text-center max-w-4xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-coffee-800">Armá tu Estación Kaapeh</h2>
          <p className="text-lg text-coffee-600 leading-relaxed">
            Combinamos herramientas accesibles con accesorios clave para que puedas experimentar con confianza y consistencia en casa.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerParent}
        >
          {equipmentBundles.map((bundle, index) => {
            const bundleColors = [
              'from-turquoise-500 to-turquoise-600',
              'from-coffee-500 to-coffee-600',
              'from-blue-500 to-cyan-500'
            ];
            const bundleIcons = [FaEye, FaCoffee, FaThermometerHalf];
            const BundleIcon = bundleIcons[index] || FaCoffee;
            
            return (
              <motion.div
                key={bundle.name}
                className="group bg-gradient-to-br from-white to-gray-50 border border-gray-100 p-8 shadow-xl hover:shadow-2xl rounded-2xl flex flex-col transition-all duration-500 hover:-translate-y-2"
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${bundleColors[index]} text-white shadow-lg mb-6 self-start`}>
                  <BundleIcon className="w-6 h-6" />
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-coffee-800 mb-3">{bundle.name}</h3>
                <p className="text-coffee-600 mb-6 leading-relaxed flex-grow">{bundle.description}</p>
                
                <div className="bg-gradient-to-r from-neutral-50 to-gray-50 rounded-xl p-5 border border-gray-100">
                  <h4 className="font-bold text-coffee-700 mb-4 flex items-center gap-2">
                    <FaStar className="w-4 h-4 text-yellow-500" />
                    Incluye
                  </h4>
                  <ul className="space-y-3">
                    {bundle.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${bundleColors[index]} flex-shrink-0`}></span>
                        <span className="text-coffee-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </div>
  );
};

export default BrewingPage;
