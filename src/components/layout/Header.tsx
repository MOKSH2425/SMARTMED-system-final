import { Link } from 'react-router-dom';
import { useState } from 'react';
import { UserIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../ui/Button';

export default function Header() {
  const { user, logout, isAuthenticated } = useAuth();
  const [open, setOpen] = useState(false);

  const navItems = [
    { to: '/doctors', label: 'Find Doctors' },
    { to: '/appointments', label: 'Appointments' },
    { to: '/symptom-checker', label: 'Symptom Checker' },
  ];

  return (
    <header className="bg-white shadow-sm" role="banner">
      <div className="container" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-3 text-smartmed-700">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-smartmed-50 text-smartmed-700 font-bold">SM</span>
              <span className="text-xl font-bold tracking-tight">SMARTMED</span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} className="text-sm font-medium text-neutral-700 hover:text-neutral-900">
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {isAuthenticated && user ? (
              <>
                <span className="hidden sm:inline text-sm text-neutral-700">Hello, {user.name}</span>
                <Button variant="ghost" onClick={logout}>Logout</Button>
              </>
            ) : (
              <div className="hidden sm:flex items-center gap-2">
                <Link to="/auth/login" className="p-2 text-neutral-500 hover:text-neutral-700">
                  <UserIcon className="h-6 w-6" aria-hidden="true" />
                </Link>
                <Link to="/signup">
                  <Button variant="primary">Sign up</Button>
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen((s) => !s)}
              className="ml-2 inline-flex items-center justify-center rounded-md p-2 text-neutral-600 hover:bg-neutral-100 md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div id="mobile-menu" className="md:hidden mt-2 pb-4 border-t">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="px-2 py-2 text-neutral-700 font-medium rounded-md hover:bg-neutral-50">
                  {item.label}
                </Link>
              ))}
              <div className="pt-2 border-t mt-2 flex items-center justify-between">
                {isAuthenticated && user ? (
                  <div className="flex items-center gap-2">
                    <UserIcon className="h-6 w-6 text-neutral-600" />
                    <span className="text-sm">{user.name}</span>
                    <Button variant="ghost" onClick={logout} className="ml-2">Logout</Button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Link to="/auth/login" onClick={() => setOpen(false)} className="text-sm text-neutral-700">Login</Link>
                    <Link to="/signup" onClick={() => setOpen(false)}>
                      <Button variant="primary">Sign up</Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}