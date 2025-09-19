import type { Product, CoffeeOrigin, BrewingMethod } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Etiopía Yirgacheffe',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?q=80&w=1000',
    description: 'Café de especialidad con notas florales, cítricas y un cuerpo sedoso. Cultivado a 1,900 metros sobre el nivel del mar en la región de Yirgacheffe.',
    category: 'Granos Enteros'
  },
  {
    id: '2',
    name: 'Colombia Supremo',
    price: 16.50,
    image: 'https://images.unsplash.com/photo-1587734361993-0490dd1c4c8f?q=80&w=1000',
    description: 'Un café equilibrado con notas de caramelo, chocolate y un toque de nuez. Cultivado por pequeños productores en las montañas de Huila.',
    category: 'Granos Enteros'
  },
  {
    id: '3',
    name: 'Guatemala Antigua',
    price: 17.75,
    image: 'https://images.unsplash.com/photo-1580933073521-dc51f22a343b?q=80&w=1000',
    description: 'Café de cuerpo completo con notas de chocolate, especias y un final dulce. Cultivado en suelos volcánicos a la sombra de árboles nativos.',
    category: 'Granos Enteros'
  },
  {
    id: '4',
    name: 'Prensa Francesa Hario',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1570286424230-5959d91c0fb6?q=80&w=1000',
    description: 'Prensa francesa de vidrio resistente al calor con capacidad para 600ml. Perfecta para extraer todos los aceites esenciales del café.',
    category: 'Equipamiento'
  },
  {
    id: '5',
    name: 'Molinillo Manual Porlex',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1662044858767-857e7c257101?q=80&w=1000',
    description: 'Molinillo manual de precisión con muelas de cerámica ajustables. Perfecto para viajes y para mantener la frescura del café.',
    category: 'Equipamiento'
  },
  {
    id: '6',
    name: 'Blend Espresso Signature',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?q=80&w=1000',
    description: 'Nuestra mezcla exclusiva para espresso, con notas de chocolate negro, caramelo y un final persistente. Perfecto para espresso y cappuccino.',
    category: 'Granos Molidos'
  },
  {
    id: '7',
    name: 'Kit Barista Principiante',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1516224498413-84ecf3a1e7fd?q=80&w=1000',
    description: 'Todo lo que necesitas para comenzar: balanza digital, termómetro, temporizador y guía de preparación de café de especialidad.',
    category: 'Kits'
  },
  {
    id: '8',
    name: 'Taza Cerámica Artesanal',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1572119752777-3a4cf2d7a138?q=80&w=1000',
    description: 'Taza de cerámica hecha a mano por artesanos locales. Diseño único que mantiene tu café caliente por más tiempo.',
    category: 'Accesorios'
  },
  {
    id: '9',
    name: 'Chemex Clásica 6 Tazas',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1544453850-f9c7e9a0e132?q=80&w=1000',
    description: 'Icónico método de preparación que resalta la claridad y complejidad del café. Incluye 10 filtros de papel.',
    category: 'Equipamiento'
  },
  {
    id: '10',
    name: 'Suscripción Mensual',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1515283709260-ee29296f1534?q=80&w=1000',
    description: 'Recibe 250g de dos cafés diferentes cada mes, seleccionados por nuestros expertos. Incluye notas de cata y recomendaciones de preparación.',
    category: 'Suscripciones'
  }
];

export const FEATURED_PRODUCTS = PRODUCTS.slice(0, 3);

export const COFFEE_ORIGINS: CoffeeOrigin[] = [
  { name: 'Etiopía', description: 'Cuna del café, conocida por sus cafés florales y afrutados' },
  { name: 'Colombia', description: 'Cafés equilibrados con notas de caramelo y chocolate' },
  { name: 'Guatemala', description: 'Cafés complejos con notas de chocolate y especias' },
  { name: 'Brasil', description: 'Cafés con cuerpo, con notas de nuez y chocolate' },
  { name: 'Costa Rica', description: 'Cafés brillantes con acidez cítrica y dulzor' }
];

export const BREWING_METHODS: BrewingMethod[] = [
  { name: 'Espresso', description: 'Extracción a presión que resalta el cuerpo y la intensidad' },
  { name: 'Pour Over', description: 'Método por goteo que resalta la claridad y los sabores delicados' },
  { name: 'Prensa Francesa', description: 'Inmersión que produce un café con cuerpo y textura rica' },
  { name: 'AeroPress', description: 'Método versátil que combina presión e inmersión' },
  { name: 'Cold Brew', description: 'Extracción en frío que produce un café suave y dulce' }
];
