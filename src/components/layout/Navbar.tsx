import { useLocation } from 'react-router-dom';
import PillNav from '../ui/PillNav';
import './PillNav.css';

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
      items={navItems}
      activeHref={location.pathname}
      baseColor="#bb8251"
      pillColor="#fefbf7"
      hoveredPillTextColor="#fefbf7"
      pillTextColor="#bb8251"
      ease="power3.easeOut"
      initialLoadAnimation={true}
    />
  );
};

export default Navbar;
