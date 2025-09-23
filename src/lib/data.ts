import type { Product, CoffeeOrigin, BrewingMethod, ShippingOption } from '../types';

// Empresas de envío argentinas B Corp y sostenibles
export const SHIPPING_OPTIONS: ShippingOption[] = [
  {
    company: 'Andreani Green',
    isBCorp: true,
    deliveryTime: '2-4 días hábiles',
    cost: 2500,
    description: 'Envío carbono neutral con compensación de emisiones'
  },
  {
    company: 'OCA Sustentable',
    isBCorp: false,
    deliveryTime: '3-5 días hábiles', 
    cost: 2200,
    description: 'Programa de logística verde con vehículos eléctricos'
  },
  {
    company: 'Correo Argentino Eco',
    isBCorp: false,
    deliveryTime: '4-7 días hábiles',
    cost: 1800,
    description: 'Servicio postal con iniciativas de sostenibilidad'
  },
  {
    company: 'Via Cargo B Corp',
    isBCorp: true,
    deliveryTime: '1-3 días hábiles',
    cost: 3200,
    description: 'Empresa B certificada con impacto social positivo'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'cafe-brasil',
    name: 'CAFÉ DE BRASIL',
    price: 20900,
    image: 'https://zsucsanecavdmpnpatct.supabase.co/storage/v1/object/sign/e-commerces/kaapeh/8.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YTVkNTQ5Yi1jNjE5LTQxNzgtYjFiNy1jY2FkMjBlMTlhOTQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJlLWNvbW1lcmNlcy9rYWFwZWgvOC5qcGciLCJpYXQiOjE3NTgzMTc2NTUsImV4cCI6MTc4OTg1MzY1NX0.QMj7rzahtdNx-7eiuVWM5d69SKuKKQO-DAeG6FDWewU',
    description:
      'Brasil – Producto sostenible para disfrutar. Este café de Brasil se procesa con métodos ecológicos que respetan el medio ambiente. Certificado por comercio justo, cada compra apoya a productores locales y prácticas agrícolas responsables. Perfecto para quienes buscan calidad premium con impacto positivo.',
    category: 'Cafés de Origen',
    tastingNotes: {
      aroma: ['Caramelo', 'Frutos secos', 'Chocolate'],
      flavor: ['Dulzura cálida', 'Caramelo', 'Frutos secos tostados'],
      body: 'Intenso y sedoso',
      acidity: 'Suave y pasajera',
      finish: 'Amable y duradero'
    },
    carbonFootprintSaved: 2.3,
    shippingOptions: SHIPPING_OPTIONS
  },
  {
    id: 'cafe-colombia',
    name: 'CAFÉ DE COLOMBIA',
    price: 24100,
    image: 'https://zsucsanecavdmpnpatct.supabase.co/storage/v1/object/sign/e-commerces/kaapeh/6.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YTVkNTQ5Yi1jNjE5LTQxNzgtYjFiNy1jY2FkMjBlMTlhOTQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJlLWNvbW1lcmNlcy9rYWFwZWgvNi5qcGciLCJpYXQiOjE3NTgzMTc2ODksImV4cCI6MTc4OTg1MzY4OX0.4aPCaAC1n2MwmGXwxAKqRp2uEImJsmeys9BOSS_h5Vw',
    description:
      'Colombia – Versátil y vibrante. En Kaapeh tostamos este café de Colombia con una técnica de omni tueste, pensada para que brille tanto en espresso como en filtrado. En taza revela una acidez media-alta y brillante, sostenida por un cuerpo medio y sedoso que lo vuelve sumamente placentero. Su dulzor equilibrado, cercano a frutas maduras y azúcar suave, lo hace expresivo y versátil, capaz de adaptarse a cada preparación sin perder su identidad.',
    category: 'Cafés de Origen',
    tastingNotes: {
      aroma: ['Frutas maduras', 'Azúcar suave', 'Floral'],
      flavor: ['Frutas maduras', 'Dulzor equilibrado', 'Notas cítricas'],
      body: 'Medio y sedoso',
      acidity: 'Media-alta y brillante',
      finish: 'Expresivo y versátil'
    },
    carbonFootprintSaved: 2.8,
    shippingOptions: SHIPPING_OPTIONS
  },
  {
    id: 'cafe-bolivia',
    name: 'CAFÉ DE BOLIVIA',
    price: 24100,
    image: 'https://zsucsanecavdmpnpatct.supabase.co/storage/v1/object/sign/e-commerces/kaapeh/21.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YTVkNTQ5Yi1jNjE5LTQxNzgtYjFiNy1jY2FkMjBlMTlhOTQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJlLWNvbW1lcmNlcy9rYWFwZWgvMjEuanBnIiwiaWF0IjoxNzU4MzE3ODQ1LCJleHAiOjE3ODk4NTM4NDV9.h5R4wf__RLH7YAAEnAG6FsydNgEuNHBTAvkzlF5eQfY',
    description:
      'Bolivia – Elegancia en cada sorbo. Kaapeh selecciona este café boliviano por su pureza y delicadeza natural. Lo tostamos para resaltar una acidez brillante pero amable, sostenida por un cuerpo medio y jugoso que llena la boca de frescura. Su dulzor refinado, como miel clara y frutas frescas, lo convierte en una taza limpia, equilibrada y profundamente elegante que se disfruta tanto en espresso como en filtrado.',
    category: 'Cafés de Origen',
    carbonFootprintSaved: 3.1,
    shippingOptions: SHIPPING_OPTIONS
  },
  {
    id: 'colombia-natural',
    name: 'COLOMBIA NATURAL',
    price: 26600,
    image: 'https://zsucsanecavdmpnpatct.supabase.co/storage/v1/object/sign/e-commerces/kaapeh/6.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YTVkNTQ5Yi1jNjE5LTQxNzgtYjFiNy1jY2FkMjBlMTlhOTQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJlLWNvbW1lcmNlcy9rYWFwZWgvNi5qcGciLCJpYXQiOjE3NTgzMTc2ODksImV4cCI6MTc4OTg1MzY4OX0.4aPCaAC1n2MwmGXwxAKqRp2uEImJsmeys9BOSS_h5Vw',
    description:
      'Colombia – Explosión de dulzura. Este Colombia natural de doble fermentación se presenta en latas de 100 g como una experiencia para descubrir sin prisa. En boca es intensamente dulce, jugoso y vibrante, con una acidez marcada de uva fresca que aporta brillo y elegancia. El perfil se completa con una carga de frutas maduras y destellos florales, creando una taza potente y compleja, difícil de olvidar.',
    category: 'Ediciones Especiales',
    carbonFootprintSaved: 1.9,
    shippingOptions: SHIPPING_OPTIONS
  },
  {
    id: 'blend-kaapeh',
    name: 'BLEND ECOSALES',
    price: 23000,
    image: 'https://zsucsanecavdmpnpatct.supabase.co/storage/v1/object/sign/e-commerces/kaapeh/28.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YTVkNTQ5Yi1jNjE5LTQxNzgtYjFiNy1jY2FkMjBlMTlhOTQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJlLWNvbW1lcmNlcy9rYWFwZWgvMjguanBnIiwiaWF0IjoxNzU4NDk1NjQxLCJleHAiOjE3OTAwMzE2NDF9.Ef9ztSIOCrz1xYtUUaQ9d78lwi2uJYV4nxKuPNHNVlE',
    description:
      'Blend de la casa – El alma de EcoSales. Este blend representa nuestros valores: productos sostenibles que combinan calidad premium con responsabilidad ambiental. Certificado por múltiples organizaciones ecológicas, cada compra contribuye a un futuro más verde. Es un producto que habla de compromiso, sostenibilidad e identidad: la firma de EcoSales en cada experiencia.',
    category: 'Blends',
    carbonFootprintSaved: 2.5,
    shippingOptions: SHIPPING_OPTIONS
  },
  {
    id: 'kit-indeciso',
    name: 'KIT INDECISO',
    price: 30000,
    image: 'https://zsucsanecavdmpnpatct.supabase.co/storage/v1/object/sign/e-commerces/kaapeh/29.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YTVkNTQ5Yi1jNjE5LTQxNzgtYjFiNy1jY2FkMjBlMTlhOTQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJlLWNvbW1lcmNlcy9rYWFwZWgvMjkuanBnIiwiaWF0IjoxNzU4NDk1NTM2LCJleHAiOjE3OTAwMzE1MzZ9.39QKIu8jYIeyHHOwyouETs-4p_yhkqaQSRP3StVbP5o',
    description:
      'Combo indeciso – ¿Cuál probar primero? Tres cafés, tres historias, 300 g de sabores para descubrir. Desde la dulzura del Brasil hasta la acidez del Colombia y la elegancia de Bolivia: elige, prueba y déjate sorprender.',
    category: 'Kits',
    carbonFootprintSaved: 4.2,
    shippingOptions: SHIPPING_OPTIONS
  }
];

export const FEATURED_PRODUCTS = PRODUCTS.slice(0, 3);

export const COFFEE_ORIGINS: CoffeeOrigin[] = [
  { name: 'Brasil', description: 'Cuerpos intensos y dulces cálidos que recuerdan al caramelo y frutos secos' },
  { name: 'Colombia', description: 'Versatilidad vibrante con acidez brillante y dulzor equilibrado' },
  { name: 'Bolivia', description: 'Tazas limpias y elegantes con frescura jugosa y miel clara' }
];

export const BREWING_METHODS: BrewingMethod[] = [
  { name: 'Espresso', description: 'Extracción a presión que resalta el cuerpo y la intensidad' },
  { name: 'Pour Over', description: 'Método por goteo que resalta la claridad y los sabores delicados' },
  { name: 'Prensa Francesa', description: 'Inmersión que produce un café con cuerpo y textura rica' },
  { name: 'AeroPress', description: 'Método versátil que combina presión e inmersión' },
  { name: 'Cold Brew', description: 'Extracción en frío que produce un café suave y dulce' }
];
