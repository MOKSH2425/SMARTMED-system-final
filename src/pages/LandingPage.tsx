import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

export default function LandingPage() {
  return (
    <div className="space-y-12">
      <header className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-smartmed-600 via-smartmed-500 to-coral-500 text-white py-24">
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 bg-white/10 rounded-full px-3 py-1 text-sm font-medium backdrop-blur">
                <span className="px-2 py-1 bg-white/20 rounded">New</span>
                SmartMed — modern care platform
              </div>

              <h1 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight">Healthcare that moves with you — simple, fast, and trusted</h1>

              <p className="mt-4 text-lg text-white/90">Search verified doctors, book appointments in seconds, and access care guidance from anywhere. Built for patients and clinics who value speed, privacy and clarity.</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/doctors"><Button variant="gradient" size="lg">Find Doctors</Button></Link>
                <Link to="/appointments"><Button variant="ghost" size="md">Book Appointment</Button></Link>
                <Link to="/symptom-checker"><Button variant="secondary" size="md">Symptom Checker</Button></Link>
              </div>

              <div className="mt-6 flex items-center gap-6 text-sm opacity-95">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center font-bold">SM</div>
                  <div>
                    <div className="text-xs text-white/80">Trusted by</div>
                    <div className="font-medium">2,000+ clinics</div>
                  </div>
                </div>

                <div className="text-sm text-white/80">HIPAA-ready • Secure data • 24/7 support</div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/90 dark:bg-white/5 rounded-2xl p-6 shadow-xl">
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

              <div className="hidden md:block absolute -right-8 top-6 w-[420px] transform-gpu animate-float">
                <img src="/src/assets/landing-illustration.svg" alt="Medical illustration" className="w-full rounded-lg shadow-2xl" />
              </div>
            </div>
          </div>
        </div>

        <svg className="absolute left-0 right-0 -bottom-1 w-full" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M0 40 C240 80 480 0 720 20 C960 40 1200 0 1440 20 V60 H0z" fill="white" />
        </svg>
      </header>

      <section className="container -mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="font-semibold text-neutral-900">Trusted Professionals</h3>
          <p className="mt-2 text-neutral-600 text-sm">Verified doctors with authenticated credentials and transparent ratings.</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="font-semibold text-neutral-900">Easy Booking</h3>
          <p className="mt-2 text-neutral-600 text-sm">See availability and reserve times that work with your schedule.</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="font-semibold text-neutral-900">Care Guidance</h3>
          <p className="mt-2 text-neutral-600 text-sm">Symptom checks and next-step recommendations when you need them.</p>
        </div>
      </section>

      <section className="container py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold">Why clinics choose SmartMed</h2>
          <p className="mt-3 text-neutral-600">Tools built to simplify workflows, reduce no-shows, and improve patient satisfaction.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"> 
            <div className="h-12 w-12 bg-smartmed-50 text-smartmed-700 rounded-md flex items-center justify-center">📅</div>
            <h4 className="mt-4 font-medium">Smart Scheduling</h4>
            <p className="mt-2 text-sm text-neutral-600">Automated reminders and easy rescheduling for fewer no-shows.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"> 
            <div className="h-12 w-12 bg-smartmed-50 text-smartmed-700 rounded-md flex items-center justify-center">🔒</div>
            <h4 className="mt-4 font-medium">Secure Records</h4>
            <p className="mt-2 text-sm text-neutral-600">Encrypted patient data and access controls that respect privacy.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"> 
            <div className="h-12 w-12 bg-smartmed-50 text-smartmed-700 rounded-md flex items-center justify-center">⚕️</div>
            <h4 className="mt-4 font-medium">Integrated Care</h4>
            <p className="mt-2 text-sm text-neutral-600">Coordinate teams and share treatment plans seamlessly.</p>
          </div>
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
