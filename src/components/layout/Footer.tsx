import { Link } from 'react-router-dom';
import { FaCoffee, FaInstagram, FaFacebook, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-espresso-950 text-cream-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FaCoffee className="text-coffee-400 text-2xl" />
              <h3 className="font-serif text-xl font-bold text-cream-200">Kaapeh</h3>
            </div>
            <p className="text-cream-300 mb-6">
              Café de especialidad seleccionado a mano, tostado con pasión y entregado fresco a tu puerta.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-cream-400 hover:text-coffee-400 transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-cream-400 hover:text-coffee-400 transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-cream-400 hover:text-coffee-400 transition-colors">
                <FaTwitter className="text-xl" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold text-cream-200 mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-cream-300 hover:text-coffee-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-cream-300 hover:text-coffee-400 transition-colors">
                  Cafés
                </Link>
              </li>
              <li>
                <Link to="/brewing" className="text-cream-300 hover:text-coffee-400 transition-colors">
                  Métodos de Preparación
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-cream-300 hover:text-coffee-400 transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-cream-300 hover:text-coffee-400 transition-colors">
                  Carrito
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold text-cream-200 mb-4">Contáctanos</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaEnvelope className="text-coffee-400 mt-1" />
                <span className="text-cream-300">info@kaapeh.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <FaPhone className="text-coffee-400 mt-1" />
                <span className="text-cream-300">+54 (11) 5555-1234</span>
              </li>
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-coffee-400 mt-1" />
                <span className="text-cream-300">Av. del Café 1234, Buenos Aires</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold text-cream-200 mb-4">Horario</h3>
            <ul className="space-y-2">
              <li className="text-cream-300">
                <span className="font-medium">Lunes a Viernes:</span> 8:00 - 20:00
              </li>
              <li className="text-cream-300">
                <span className="font-medium">Sábados:</span> 9:00 - 21:00
              </li>
              <li className="text-cream-300">
                <span className="font-medium">Domingos:</span> 10:00 - 18:00
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-espresso-800 mt-10 pt-8 text-center">
          <p className="text-cream-400">
            &copy; {currentYear} Kaapeh Café de Especialidad. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
