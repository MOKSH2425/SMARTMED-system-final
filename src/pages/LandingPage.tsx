import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

export default function LandingPage() {
  return (
    <div className="space-y-12">
      <header className="bg-gradient-to-r from-smartmed-500 to-coral-500 text-white py-20">
        <div className="container flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold hero-entrance">Healthcare that fits your life</h1>
            <p className="mt-4 text-lg max-w-xl hero-entrance" style={{ animationDelay: '120ms' }}>Find doctors, book appointments, and get trustworthy guidance online — fast and secure. Designed for modern patients and clinics.</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/doctors"><Button variant="gradient" size="lg">Find Doctors</Button></Link>
              <Link to="/appointments"><Button variant="secondary" size="md">Book Appointment</Button></Link>
              <Link to="/symptom-checker"><Button variant="ghost" size="md">Symptom Checker</Button></Link>
            </div>

            <div className="mt-8 flex gap-6 items-center text-sm">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center font-bold">SM</div>
                <div>
                  <div className="text-xs">Trusted by</div>
                  <div className="font-medium">2,000+ clinics</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-sm text-neutral-500">Quick search</div>
              <h3 className="mt-2 font-semibold text-neutral-900">Find a doctor in minutes</h3>
              <div className="mt-4 flex gap-2">
                <input aria-label="search" placeholder="Cardiologist, Dr. Smith" className="flex-grow rounded-md border border-neutral-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-smartmed-300" />
                <Button variant="primary">Search</Button>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-neutral-600">
                <div className="p-3 bg-neutral-50 rounded-md">Dr. A. Patel
                  <div className="text-xs text-neutral-400">Cardiology</div>
                </div>
                <div className="p-3 bg-neutral-50 rounded-md">Dr. L. Chen
                  <div className="text-xs text-neutral-400">Pediatrics</div>
                </div>
              </div>
            </div>
            <div className="mt-6 hidden md:block float-illustration">
              <img src="/src/assets/landing-illustration.svg" alt="Medical illustration" className="w-full rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </header>

      <section className="container grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="font-semibold text-neutral-900">Trusted Professionals</h3>
          <p className="mt-2 text-neutral-600 text-sm">Verified doctors with verified credentials and patient ratings.</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="font-semibold text-neutral-900">Easy Booking</h3>
          <p className="mt-2 text-neutral-600 text-sm">Schedule appointments with transparent availability and reminders.</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="font-semibold text-neutral-900">Helpful Guidance</h3>
          <p className="mt-2 text-neutral-600 text-sm">Symptom checks and care recommendations to guide next steps.</p>
        </div>
      </section>

      <section className="container bg-gradient-to-r from-white to-smartmed-50 rounded-lg p-8">
        <div className="md:flex md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-neutral-900">Ready to get started?</h3>
            <p className="text-neutral-600 mt-2">Create an account and manage your healthcare in one place.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link to="/signup"><Button variant="primary">Create account</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
