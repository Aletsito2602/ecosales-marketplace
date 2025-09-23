import { useLocation } from 'react-router-dom';
import PillNav from '../ui/PillNav';
import '../ui/PillNav.css';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Tienda', href: '/tienda' },
    { label: 'Comunidad', href: '/comunidad' },
    { label: 'Nosotros', href: '/about' },
    { label: 'Huella', href: '/huella' },
  ];

  return (
    <PillNav
      logo="/logo%20kaapeh.jpg"
      logoAlt="EcoSales"
      items={navItems}
      activeHref={location.pathname}
      baseColor="#00afac"
      pillColor="#ffffff"
      hoveredPillTextColor="#ffffff"
      pillTextColor="#00afac"
      ease="power3.easeOut"
      initialLoadAnimation={true}
    />
  );
};

export default Navbar;
