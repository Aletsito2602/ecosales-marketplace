import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-6xl font-bold text-gray-800 dark:text-white mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">Page Not Found</h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="bg-coffee-500 text-white px-6 py-3 rounded-lg hover:bg-coffee-600 transition-colors"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
