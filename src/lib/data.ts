import type { Product, CoffeeOrigin, BrewingMethod } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'cafe-brasil',
    name: 'CAFÉ DE BRASIL',
    price: 20900,
    image: 'https://zsucsanecavdmpnpatct.supabase.co/storage/v1/object/sign/e-commerces/kaapeh/8.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YTVkNTQ5Yi1jNjE5LTQxNzgtYjFiNy1jY2FkMjBlMTlhOTQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJlLWNvbW1lcmNlcy9rYWFwZWgvOC5qcGciLCJpYXQiOjE3NTgzMTc2NTUsImV4cCI6MTc4OTg1MzY1NX0.QMj7rzahtdNx-7eiuVWM5d69SKuKKQO-DAeG6FDWewU',
    description:
      'Brasil – Espresso para disfrutar. Este café de Brasil lo tostamos en Kaapeh con el equilibrio justo para dejar que hable por sí mismo. En cada sorbo se siente un cuerpo intenso y sedoso, envuelto en una dulzura cálida que recuerda al caramelo y a los frutos secos recién tostados. La acidez, suave y pasajera, deja paso a una sensación amable y duradera, perfecta para quienes buscan un espresso confortante y lleno de carácter.',
    category: 'Cafés de Origen',
    tastingNotes: {
      aroma: ['Caramelo', 'Frutos secos', 'Chocolate'],
      flavor: ['Dulzura cálida', 'Caramelo', 'Frutos secos tostados'],
      body: 'Intenso y sedoso',
      acidity: 'Suave y pasajera',
      finish: 'Amable y duradero'
    }
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
    }
  },
  {
    id: 'cafe-bolivia',
    name: 'CAFÉ DE BOLIVIA',
    price: 24100,
    image: 'https://zsucsanecavdmpnpatct.supabase.co/storage/v1/object/sign/e-commerces/kaapeh/21.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YTVkNTQ5Yi1jNjE5LTQxNzgtYjFiNy1jY2FkMjBlMTlhOTQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJlLWNvbW1lcmNlcy9rYWFwZWgvMjEuanBnIiwiaWF0IjoxNzU4MzE3ODQ1LCJleHAiOjE3ODk4NTM4NDV9.h5R4wf__RLH7YAAEnAG6FsydNgEuNHBTAvkzlF5eQfY',
    description:
      'Bolivia – Elegancia en cada sorbo. Kaapeh selecciona este café boliviano por su pureza y delicadeza natural. Lo tostamos para resaltar una acidez brillante pero amable, sostenida por un cuerpo medio y jugoso que llena la boca de frescura. Su dulzor refinado, como miel clara y frutas frescas, lo convierte en una taza limpia, equilibrada y profundamente elegante que se disfruta tanto en espresso como en filtrado.',
    category: 'Cafés de Origen'
  },
  {
    id: 'colombia-natural',
    name: 'COLOMBIA NATURAL',
    price: 26600,
    image: 'https://zsucsanecavdmpnpatct.supabase.co/storage/v1/object/sign/e-commerces/kaapeh/6.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YTVkNTQ5Yi1jNjE5LTQxNzgtYjFiNy1jY2FkMjBlMTlhOTQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJlLWNvbW1lcmNlcy9rYWFwZWgvNi5qcGciLCJpYXQiOjE3NTgzMTc2ODksImV4cCI6MTc4OTg1MzY4OX0.4aPCaAC1n2MwmGXwxAKqRp2uEImJsmeys9BOSS_h5Vw',
    description:
      'Colombia – Explosión de dulzura. Este Colombia natural de doble fermentación se presenta en latas de 100 g como una experiencia para descubrir sin prisa. En boca es intensamente dulce, jugoso y vibrante, con una acidez marcada de uva fresca que aporta brillo y elegancia. El perfil se completa con una carga de frutas maduras y destellos florales, creando una taza potente y compleja, difícil de olvidar.',
    category: 'Ediciones Especiales'
  },
  {
    id: 'blend-kaapeh',
    name: 'BLEND KAAPEH',
    price: 23000,
    image: 'https://zsucsanecavdmpnpatct.supabase.co/storage/v1/object/sign/e-commerces/kaapeh/28.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YTVkNTQ5Yi1jNjE5LTQxNzgtYjFiNy1jY2FkMjBlMTlhOTQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJlLWNvbW1lcmNlcy9rYWFwZWgvMjguanBnIiwiaWF0IjoxNzU4NDk1NjQxLCJleHAiOjE3OTAwMzE2NDF9.Ef9ztSIOCrz1xYtUUaQ9d78lwi2uJYV4nxKuPNHNVlE',
    description:
      'Blend de la casa – El alma de Kaapeh. Este blend es nuestra manera de contar quiénes somos: la dulzura con cuerpo del Brasil se encuentra con la vitalidad jugosa y brillante del Colombia. Juntos crean un espresso equilibrado y lleno de matices, que viaja entre lo cálido del caramelo, la suavidad de los frutos secos y el destello fresco de las frutas maduras. Es un café que habla de encuentro, mezcla e identidad: la firma de Kaapeh en cada taza.',
    category: 'Blends'
  },
  {
    id: 'kit-indeciso',
    name: 'KIT INDECISO',
    price: 30000,
    image: 'https://zsucsanecavdmpnpatct.supabase.co/storage/v1/object/sign/e-commerces/kaapeh/29.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YTVkNTQ5Yi1jNjE5LTQxNzgtYjFiNy1jY2FkMjBlMTlhOTQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJlLWNvbW1lcmNlcy9rYWFwZWgvMjkuanBnIiwiaWF0IjoxNzU4NDk1NTM2LCJleHAiOjE3OTAwMzE1MzZ9.39QKIu8jYIeyHHOwyouETs-4p_yhkqaQSRP3StVbP5o',
    description:
      'Combo indeciso – ¿Cuál probar primero? Tres cafés, tres historias, 300 g de sabores para descubrir. Desde la dulzura del Brasil hasta la acidez del Colombia y la elegancia de Bolivia: elige, prueba y déjate sorprender.',
    category: 'Kits'
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
