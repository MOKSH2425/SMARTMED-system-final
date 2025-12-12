import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-12">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-smartmed-50 via-purple-50 to-coral-50 rounded-lg shadow-sm p-8 border border-smartmed-100">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-smartmed-900\">Healthcare made simple for everyone</h1>
          <p className="mt-4 text-smartmed-600 max-w-xl\">Find trusted doctors nearby, book appointments online, and check symptoms — all in one secure place. Fast, friendly, and designed for real patients.</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="primary" onClick={() => navigate('/doctors')}>Find Doctors</Button>
            <Button variant="secondary" onClick={() => navigate('/appointments')}>Book Appointment</Button>
            <Button variant="ghost" onClick={() => navigate('/symptom-checker')}>Symptom Checker</Button>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-smartmed-50 to-blue-50 p-4 rounded-md border border-smartmed-200">
              <h4 className="text-sm font-semibold text-smartmed-700">✓ Trusted professionals</h4>
              <p className="text-sm text-smartmed-600 mt-1">Verified doctors with ratings and specialties.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-md border border-purple-200">
              <h4 className="text-sm font-semibold text-purple-700">🔒 Secure & Private</h4>
              <p className="text-sm text-purple-600 mt-1">HIPAA-alike privacy practices and secure messaging.</p>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <div className="w-full max-w-md bg-gradient-to-br from-white to-smartmed-50 p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-neutral-900">Quick search</h3>
                <p className="text-sm text-neutral-600">Find a doctor by specialty or name</p>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center gap-2">
                <input aria-label="search" placeholder="e.g. Cardiologist, Dr. Smith" className="flex-grow rounded-md border border-neutral-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-smartmed-300" />
                <Button variant="primary">Search</Button>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-neutral-600">
              <div className="p-2 bg-white rounded-md shadow-sm">
                Dr. A. Patel
                <div className="text-xs text-neutral-400">Cardiology</div>
              </div>
              <div className="p-2 bg-white rounded-md shadow-sm">
                Dr. L. Chen
                <div className="text-xs text-neutral-400">Pediatrics</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-900">Find Doctors</h3>
            <p className="mt-2 text-neutral-600 text-sm">Browse by specialty, distance, and availability.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-900">Book Appointments</h3>
            <p className="mt-2 text-neutral-600 text-sm">Easily schedule visits with instant confirmation.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-900">Symptom Checker</h3>
            <p className="mt-2 text-neutral-600 text-sm">Get quick guidance and next steps based on symptoms.</p>
          </div>
        </div>
      </section>
    </div>
  );
}