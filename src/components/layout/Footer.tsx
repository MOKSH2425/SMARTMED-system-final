export default function Footer() {
  return (
    <footer className="bg-neutral-50 border-t">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-neutral-800">SMARTMED</h3>
            <p className="mt-3 text-sm text-neutral-600">Modern, simple telehealth and appointment booking for clinics and patients.</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-neutral-700 uppercase">Quick links</h4>
            <ul className="mt-4 space-y-2 text-neutral-600">
              <li><a href="#">Find Doctors</a></li>
              <li><a href="#">Book Appointments</a></li>
              <li><a href="#">Symptom Checker</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-neutral-700 uppercase">Support</h4>
            <ul className="mt-4 space-y-2 text-neutral-600">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-6">
          <p className="text-center text-sm text-neutral-500">&copy; {new Date().getFullYear()} SMARTMED. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}