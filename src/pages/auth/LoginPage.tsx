import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useAuth } from '../../contexts/AuthContext';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '../../components/ui/Button';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const { login } = useAuth();
  
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data.email, data.password);
      navigate('/'); 
    } catch {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-smartmed-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-neutral-900">Sign in to your account</h2>
          <p className="mt-2 text-center text-sm text-neutral-600">Welcome back — sign in to continue.</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <div className="text-sm text-red-700">{error}</div>
            </div>
          )}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                {...register('email')}
                id="email"
                type="email"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-neutral-200 placeholder-neutral-400 text-neutral-900 rounded-t-md focus:outline-none focus:ring-smartmed-300 focus:border-smartmed-300 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
              {errors.email && (<p className="mt-1 text-sm text-red-600">{errors.email.message}</p>)}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                {...register('password')}
                id="password"
                type="password"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-neutral-200 placeholder-neutral-400 text-neutral-900 rounded-b-md focus:outline-none focus:ring-smartmed-300 focus:border-smartmed-300 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
              {errors.password && (<p className="mt-1 text-sm text-red-600">{errors.password.message}</p>)}
            </div>
          </div>

          <div>
            <Button type="submit" className="w-full">Sign in</Button>
          </div>

          <div className="text-sm text-center">
            <Link to="/signup" className="font-medium text-smartmed-700 hover:text-smartmed-800">Don't have an account? Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
}