const Footer = () => {
  return (
    <footer className="bg-coffee-800 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="text-center md:text-left">
            <p className="text-lg mb-2 font-semibold">
              Tostamos Café de Especialidad desde 2016
            </p>
            <p className="text-base text-gray-200">
              por Luciano Cuello
            </p>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-3 text-turquoise-300">Contacto</h3>
            <div className="space-y-2 text-gray-200">
              <p className="hover:text-white transition-colors">
                <a href="tel:+5493512738370">+54 9 351 273-8370</a>
              </p>
              <p className="hover:text-white transition-colors">
                <a href="https://instagram.com/kaapeh.cordoba" target="_blank" rel="noopener noreferrer">
                  @kaapeh.cordoba
                </a>
              </p>
            </div>
          </div>

          {/* Location Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-3 text-turquoise-300">Ubicación</h3>
            <p className="text-gray-200 mb-2">Encontranos en Córdoba Capital en:</p>
            <div className="space-y-1 text-sm text-gray-200">
              <p className="hover:text-white transition-colors">
                Belgrano 647, Barrio Güemes
              </p>
              <p className="hover:text-white transition-colors">
                José Baigorri 608, Barrio Alta Córdoba
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-coffee-700 pt-6 text-center">
          <p className="text-sm text-gray-300">
            Desarrollado por{' '}
            <a 
              href="https://soybourbon.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-turquoise-400 hover:text-turquoise-300 underline transition-colors"
            >
              Bourbon
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
