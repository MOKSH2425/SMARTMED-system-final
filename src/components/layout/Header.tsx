import { Link } from 'react-router-dom';
import { UserIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../ui/Button';

export default function Header() {
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <header className="border-b bg-white">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-extrabold tracking-tight text-indigo-600">
              SMARTMED
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link
              to="/doctors"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
            >
              Find Doctors
            </Link>
            <Link
              to="/appointments"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
            >
              Appointments
            </Link>
            <Link
              to="/symptom-checker"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
            >
              Symptom Checker
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {isAuthenticated && user ? (
              <>
                <span className="text-sm text-gray-700">Hello, {user.name}</span>
                <Button variant="ghost" onClick={logout}>Logout</Button>
              </>
            ) : (
              <Link to="/auth/login" className="p-2 text-gray-400 hover:text-gray-500">
                <UserIcon className="h-6 w-6" aria-hidden="true" />
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}