import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../components/layout/RootLayout';
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import TiendaPage from '../pages/TiendaPage';
import ComunidadPage from '../pages/ComunidadPage';
import HuellaPage from '../pages/HuellaPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import BrewingPage from '../pages/BrewingPage';
import AboutPage from '../pages/AboutPage';
import NotFoundPage from '../pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'products/:productId',
        element: <ProductDetailPage />,
      },
      {
        path: 'tienda',
        element: <TiendaPage />,
      },
      {
        path: 'comunidad',
        element: <ComunidadPage />,
      },
      {
        path: 'huella',
        element: <HuellaPage />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
      {
        path: 'checkout',
        element: <CheckoutPage />,
      },
      {
        path: 'brewing',
        element: <BrewingPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
    ],
  },
]);
