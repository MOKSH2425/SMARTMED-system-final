import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Your Health, Our Priority
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg leading-7 text-gray-600">
          Access quality healthcare from the comfort of your home. Find the right doctor, book
          appointments, and get expert medical advice — quickly and securely.
        </p>

        <div className="mt-6 flex justify-center">
          <svg width="220" height="120" viewBox="0 0 220 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
            <rect x="0" y="0" width="220" height="120" rx="16" fill="#eef2ff" />
            <circle cx="60" cy="60" r="28" fill="#6366f1" />
            <rect x="100" y="40" width="90" height="12" rx="6" fill="#a78bfa" />
            <rect x="100" y="64" width="60" height="10" rx="5" fill="#8b5cf6" />
          </svg>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <Button variant="primary" onClick={() => navigate('/doctors')}>Find Doctors</Button>
          <Button variant="secondary" onClick={() => navigate('/symptom-checker')}>Symptom Checker</Button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Find Doctors</h2>
          <p className="text-gray-600">Search and connect with the best healthcare professionals in your area.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Book Appointments</h2>
          <p className="text-gray-600">Schedule visits at your convenience, with instant confirmation.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Symptom Checker</h2>
          <p className="text-gray-600">Get instant insights about your health symptoms and recommended actions.</p>
        </div>
      </section>
    </div>
  );
}