import { motion } from 'framer-motion';
import { FaLeaf, FaRecycle, FaWater, FaTree, FaGlobe, FaBolt, FaStore } from 'react-icons/fa';
import { useScrollToTop } from '../hooks/useScrollToTop';
import PageBanner from '../components/ui/PageBanner';

const HuellaPage = () => {
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

  // KPIs principales de impacto ambiental
  const mainKPIs = [
    {
      value: '15.4',
      unit: 'toneladas',
      label: 'CO₂ Ahorrado',
      description: 'Emisiones evitadas gracias a productos sostenibles',
      icon: <FaLeaf />,
      color: 'green',
      trend: '+12%'
    },
    {
      value: '2,340',
      unit: 'litros',
      label: 'Agua Conservada',
      description: 'Agua ahorrada por prácticas eficientes',
      icon: <FaWater />,
      color: 'blue',
      trend: '+8%'
    },
    {
      value: '890',
      unit: 'kg',
      label: 'Residuos Reciclados',
      description: 'Material desviado de vertederos',
      icon: <FaRecycle />,
      color: 'primary',
      trend: '+15%'
    },
    {
      value: '156',
      unit: 'árboles',
      label: 'Equivalente Plantado',
      description: 'Impacto equivalente en reforestación',
      icon: <FaTree />,
      color: 'green',
      trend: '+10%'
    }
  ];

  // KPIs secundarios
  const secondaryKPIs = [
    { label: 'Energía Renovable', value: '78%', icon: <FaBolt />, color: 'accent' },
    { label: 'Packaging Sostenible', value: '92%', icon: <FaRecycle />, color: 'green' },
    { label: 'Transporte Verde', value: '65%', icon: <FaGlobe />, color: 'blue' },
    { label: 'Certificaciones Eco', value: '100%', icon: <FaLeaf />, color: 'primary' }
  ];

  // Impacto por categoría
  const categoryImpact = [
    {
      category: 'Productos Ecológicos',
      co2Saved: '8.2 ton',
      products: 45,
      stores: 28,
      color: 'green'
    },
    {
      category: 'Empresas B Corp',
      co2Saved: '4.1 ton',
      products: 32,
      stores: 18,
      color: 'primary'
    },
    {
      category: 'Economía Circular',
      co2Saved: '2.1 ton',
      products: 23,
      stores: 12,
      color: 'accent'
    },
    {
      category: 'Comercio Justo',
      co2Saved: '1.0 ton',
      products: 15,
      stores: 8,
      color: 'bean'
    }
  ];

  // Metas y objetivos
  const goals = [
    {
      title: 'Carbono Neutral 2025',
      current: 67,
      target: 100,
      description: 'Compensar 100% de las emisiones de la plataforma'
    },
    {
      title: 'Tiendas Certificadas',
      current: 85,
      target: 100,
      description: 'Todas las tiendas con certificación sostenible'
    },
    {
      title: 'Packaging Cero Residuo',
      current: 92,
      target: 100,
      description: 'Eliminar completamente el packaging no reciclable'
    }
  ];

  return (
    <div className="w-full space-y-16">
      <PageBanner
        title="Nuestra Huella Ambiental"
        description="Transparencia total sobre nuestro impacto positivo. Cada compra en EcoSales contribuye a un planeta más sostenible y un futuro más verde para todos."
        backgroundImage="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop"
        cta={{ label: 'Ver Certificaciones', to: '/tienda' }}
      />

      {/* Main KPIs */}
      <section className="py-16 bg-gradient-to-br from-green-50 via-neutral-50 to-primary-50">
        <motion.div 
          className="max-w-6xl mx-auto px-6 md:px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-12" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-espresso mb-4">
              Impacto Ambiental Acumulado
            </h2>
            <p className="text-espresso/70 max-w-2xl mx-auto">
              Estos son los resultados reales del compromiso de nuestra comunidad con la sostenibilidad
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainKPIs.map((kpi, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 ${
                  kpi.color === 'green' ? 'border-l-4 border-l-green-500' :
                  kpi.color === 'blue' ? 'border-l-4 border-l-blue-500' :
                  kpi.color === 'primary' ? 'border-l-4 border-l-primary' :
                  'border-l-4 border-l-accent'
                }`}
                variants={fadeUp}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`text-2xl p-3 rounded-full ${
                    kpi.color === 'green' ? 'bg-green-100 text-green-600' :
                    kpi.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                    kpi.color === 'primary' ? 'bg-primary/10 text-primary' :
                    'bg-accent/10 text-accent'
                  }`}>
                    {kpi.icon}
                  </div>
                  <span className={`text-sm font-semibold px-2 py-1 rounded-full ${
                    kpi.color === 'green' ? 'bg-green-100 text-green-700' :
                    kpi.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                    kpi.color === 'primary' ? 'bg-primary/10 text-primary' :
                    'bg-accent/10 text-accent'
                  }`}>
                    {kpi.trend}
                  </span>
                </div>
                <div className="mb-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-espresso">{kpi.value}</span>
                    <span className="text-espresso/60 text-sm">{kpi.unit}</span>
                  </div>
                  <h3 className="font-semibold text-espresso">{kpi.label}</h3>
                </div>
                <p className="text-espresso/60 text-sm">{kpi.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Secondary KPIs */}
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
              Indicadores de Sostenibilidad
            </h2>
            <p className="text-espresso/70 max-w-2xl mx-auto">
              Métricas clave que demuestran nuestro compromiso con prácticas responsables
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {secondaryKPIs.map((kpi, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                variants={fadeUp}
              >
                <div className={`text-3xl mb-3 flex justify-center ${
                  kpi.color === 'green' ? 'text-green-600' :
                  kpi.color === 'blue' ? 'text-blue-600' :
                  kpi.color === 'primary' ? 'text-primary' :
                  'text-accent'
                }`}>
                  {kpi.icon}
                </div>
                <div className="text-2xl font-bold text-espresso mb-2">{kpi.value}</div>
                <p className="text-espresso/70 text-sm">{kpi.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Category Impact */}
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
              Impacto por Categoría
            </h2>
            <p className="text-espresso/70 max-w-2xl mx-auto">
              Desglose del impacto ambiental según las diferentes categorías de productos sostenibles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categoryImpact.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
                variants={fadeUp}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-espresso">{category.category}</h3>
                  <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    category.color === 'green' ? 'bg-green-100 text-green-700' :
                    category.color === 'primary' ? 'bg-primary/10 text-primary' :
                    category.color === 'accent' ? 'bg-accent/10 text-accent' :
                    'bg-bean/10 text-bean'
                  }`}>
                    {category.co2Saved} CO₂
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-center mb-2">
                      <FaLeaf className="text-green-600 mr-2" />
                      <span className="text-2xl font-bold text-espresso">{category.products}</span>
                    </div>
                    <p className="text-espresso/60 text-sm">Productos</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-center mb-2">
                      <FaStore className="text-primary mr-2" />
                      <span className="text-2xl font-bold text-espresso">{category.stores}</span>
                    </div>
                    <p className="text-espresso/60 text-sm">Tiendas</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Goals and Targets */}
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
              Metas y Objetivos 2025
            </h2>
            <p className="text-espresso/70 max-w-2xl mx-auto">
              Nuestros compromisos ambientales con fechas específicas y progreso transparente
            </p>
          </motion.div>

          <div className="space-y-8">
            {goals.map((goal, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                variants={fadeUp}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-espresso mb-2">{goal.title}</h3>
                    <p className="text-espresso/70 mb-4">{goal.description}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold text-primary">{goal.current}%</span>
                      <span className="text-espresso/60">de {goal.target}% completado</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-full md:w-48">
                    <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
                      <motion.div
                        className="bg-primary h-full rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${goal.current}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-primary">
        <motion.div 
          className="max-w-4xl mx-auto px-6 md:px-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Cada Compra Cuenta
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Únete a nuestra misión de crear un impacto positivo. Cada producto que eliges 
            contribuye directamente a estos resultados ambientales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-colors"
            >
              Explorar Productos Sostenibles
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-primary transition-colors"
            >
              Descargar Reporte Completo
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HuellaPage;
