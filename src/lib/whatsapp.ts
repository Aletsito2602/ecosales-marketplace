import type { Product } from '../types';
import { formatARS } from './currency';

// Número de WhatsApp de Kaapeh (reemplazar con el número real)
const WHATSAPP_NUMBER = '5493513919014'; // Formato: código país + número sin espacios ni símbolos

export const generateWhatsAppMessage = (product: Product, quantity: number = 1) => {
  const totalPrice = product.price * quantity;
  
  const message = `¡Hola! 👋 Me interesa comprar café de Kaapeh:

🔸 *Producto:* ${product.name}
🔸 *Categoría:* ${product.category}
🔸 *Precio unitario:* ${formatARS(product.price)} (cuarto kilo)
🔸 *Cantidad:* ${quantity} ${quantity === 1 ? 'unidad' : 'unidades'}
🔸 *Total:* ${formatARS(totalPrice)}

📝 *Descripción:*
${product.description}

¿Podrías confirmarme la disponibilidad y los métodos de pago? ¡Gracias! ☕`;

  return encodeURIComponent(message);
};

export const openWhatsApp = (product: Product, quantity: number = 1) => {
  const message = generateWhatsAppMessage(product, quantity);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  
  // Abrir en nueva ventana/pestaña
  window.open(whatsappUrl, '_blank');
};
