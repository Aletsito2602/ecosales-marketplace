import { useLocation } from 'react-router-dom';
import PillNav from '../ui/PillNav';
import '../ui/PillNav.css';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Cafés', href: '/products' },
    { label: 'Métodos', href: '/brewing' },
    { label: 'Nosotros', href: '/about' },
  ];

  return (
    <PillNav
      logo="/logo%20kaapeh.jpg"
      logoAlt="Kaapeh"
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
