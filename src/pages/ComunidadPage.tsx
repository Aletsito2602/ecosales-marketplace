import { motion } from 'framer-motion';
import { FaStore, FaUsers, FaLeaf, FaHandshake, FaGlobe, FaRecycle, FaHeart, FaStar } from 'react-icons/fa';
import { useScrollToTop } from '../hooks/useScrollToTop';
import PageBanner from '../components/ui/PageBanner';

const ComunidadPage = () => {
  // Scroll to top on page load
  useScrollToTop();

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const communityStats = [
    { number: '150+', label: 'Tiendas Sostenibles', icon: <FaStore /> },
    { number: '25K+', label: 'Miembros Activos', icon: <FaUsers /> },
    { number: '500+', label: 'Productos Ecológicos', icon: <FaLeaf /> },
    { number: '12', label: 'Países', icon: <FaGlobe /> }
  ];

  const benefits = [
    {
      icon: <FaHandshake className="text-primary" />,
      title: 'Red de Colaboración',
      description: 'Conectá con otras tiendas sostenibles y creá alianzas estratégicas para impulsar el comercio responsable.'
    },
    {
      icon: <FaRecycle className="text-green-600" />,
      title: 'Intercambio de Recursos',
      description: 'Compartí mejores prácticas, proveedores ecológicos y estrategias de sostenibilidad con la comunidad.'
    },
    {
      icon: <FaStar className="text-accent" />,
      title: 'Certificación Comunitaria',
      description: 'Obtené reconocimiento por tus prácticas sostenibles y destacá entre los consumidores conscientes.'
    },
    {
      icon: <FaHeart className="text-bean" />,
      title: 'Impacto Colectivo',
      description: 'Sumate a iniciativas grupales que generen un impacto ambiental y social positivo a gran escala.'
    }
  ];

  const featuredStores = [
    {
      name: 'Verde Natural',
      category: 'Productos Orgánicos',
      location: 'Buenos Aires, Argentina',
      impact: '2.5 toneladas CO₂ reducidas',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=400&auto=format&fit=crop'
    },
    {
      name: 'Eco Textiles',
      category: 'Moda Sostenible',
      location: 'Córdoba, Argentina',
      impact: '1.8 toneladas CO₂ reducidas',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=400&auto=format&fit=crop'
    },
    {
      name: 'Hogar Verde',
      category: 'Productos para el Hogar',
      location: 'Rosario, Argentina',
      impact: '3.2 toneladas CO₂ reducidas',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=400&auto=format&fit=crop'
    }
  ];

  const events = [
    {
      title: 'Feria de Comercio Sostenible 2024',
      date: '15-17 Noviembre',
      location: 'Centro de Convenciones, CABA',
      type: 'Presencial',
      description: 'Encuentro anual de tiendas sostenibles con talleres, networking y exhibiciones.'
    },
    {
      title: 'Webinar: Certificaciones Ecológicas',
      date: '28 Octubre',
      location: 'Online',
      type: 'Virtual',
      description: 'Aprende sobre las principales certificaciones ambientales para tu negocio.'
    },
    {
      title: 'Workshop: Marketing Verde',
      date: '5 Noviembre',
      location: 'Córdoba',
      type: 'Híbrido',
      description: 'Estrategias de marketing para comunicar tu propuesta de valor sostenible.'
    }
  ];

  return (
    <div className="w-full space-y-16">
      <PageBanner
        title="Comunidad EcoSales"
        description="Únete a la red más grande de tiendas sostenibles de Latinoamérica. Conectá, colaborá y creá impacto positivo junto a otros comerciantes comprometidos con el planeta."
        backgroundImage="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1600&auto=format&fit=crop"
        cta={{ label: 'Unirse a la Comunidad', to: '/tienda' }}
      />

      {/* Community Stats */}
      <section className="py-16 bg-gradient-to-br from-primary-50 via-neutral-50 to-green-50">
        <motion.div 
          className="max-w-6xl mx-auto px-6 md:px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-12" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-espresso mb-4">
              Nuestra Comunidad en Números
            </h2>
            <p className="text-espresso/70 max-w-2xl mx-auto">
              Una red creciente de comerciantes comprometidos con la sostenibilidad y el impacto positivo
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {communityStats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                variants={fadeUp}
              >
                <div className="text-3xl text-primary mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-espresso mb-2">
                  {stat.number}
                </div>
                <p className="text-espresso/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <motion.div 
          className="max-w-6xl mx-auto px-6 md:px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-12" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-espresso mb-4">
              Beneficios de Ser Parte
            </h2>
            <p className="text-espresso/70 max-w-2xl mx-auto">
              Descubrí las ventajas de formar parte de la comunidad de tiendas sostenibles más activa de la región
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
                variants={fadeUp}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl p-3 bg-gray-50 rounded-full">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-espresso mb-3">{benefit.title}</h3>
                    <p className="text-espresso/70 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured Stores */}
      <section className="py-16 bg-neutral-50">
        <motion.div 
          className="max-w-6xl mx-auto px-6 md:px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-12" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-espresso mb-4">
              Tiendas Destacadas
            </h2>
            <p className="text-espresso/70 max-w-2xl mx-auto">
              Conocé algunas de las tiendas que están liderando el cambio hacia un comercio más sostenible
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredStores.map((store, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
                variants={fadeUp}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={store.image} 
                    alt={store.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-primary text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {store.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-espresso mb-2">{store.name}</h3>
                  <p className="text-espresso/70 text-sm mb-3">{store.location}</p>
                  <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                    <p className="text-green-700 text-sm font-semibold">
                      🌱 {store.impact}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Events Section */}
      <section className="py-16">
        <motion.div 
          className="max-w-6xl mx-auto px-6 md:px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-12" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-espresso mb-4">
              Próximos Eventos
            </h2>
            <p className="text-espresso/70 max-w-2xl mx-auto">
              Participá en nuestros eventos, talleres y encuentros para seguir aprendiendo y conectando
            </p>
          </motion.div>

          <div className="space-y-6">
            {events.map((event, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                variants={fadeUp}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-espresso">{event.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        event.type === 'Presencial' ? 'bg-primary text-white' :
                        event.type === 'Virtual' ? 'bg-green-100 text-green-800' :
                        'bg-accent text-white'
                      }`}>
                        {event.type}
                      </span>
                    </div>
                    <p className="text-espresso/70 mb-3">{event.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-espresso/60">
                      <span>📅 {event.date}</span>
                      <span>📍 {event.location}</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                    >
                      Inscribirse
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
        <motion.div 
          className="max-w-4xl mx-auto px-6 md:px-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            ¿Lista tu tienda para el cambio?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Únete a nuestra comunidad de tiendas sostenibles y comenzá a generar un impacto positivo 
            mientras hacés crecer tu negocio de manera responsable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-colors"
            >
              Registrar mi Tienda
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-primary transition-colors"
            >
              Conocer más
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ComunidadPage;
