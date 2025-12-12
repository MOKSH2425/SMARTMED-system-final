import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import Layout from './components/layout/Layout.tsx'
import HomePage from './pages/HomePage'
import LandingPage from './pages/LandingPage'
import DoctorsPage from './pages/doctors/DoctorsPage'
import DoctorDetailPage from './pages/doctors/DoctorDetailPage.tsx'
import AppointmentsPage from './pages/appointments/AppointmentsPage'
import SymptomCheckerPage from './pages/symptom-checker/SymptomCheckerPage'
import ProfilePage from './pages/profile/ProfilePage'
import LoginPage from './pages/auth/LoginPage'
import SignupPage from './pages/auth/SignupPage.tsx'
import BookAppointmentPage from './pages/appointments/BookAppointmentPage.tsx'
import { AuthProvider, useAuth } from './contexts/AuthContext'

const queryClient = new QueryClient()

interface ProtectedRouteProps {
  children: React.ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/" element={<Layout />}>
              <Route index element={<LandingPage />} />
              <Route path="home" element={<HomePage />} />
              <Route path="doctors" element={<DoctorsPage />} />
              <Route path="doctors/:id" element={<DoctorDetailPage />} />
              <Route
                path="appointments"
                element={
                  <ProtectedRoute>
                    <AppointmentsPage />
                  </ProtectedRoute>
                }
              />
              <Route path="appointments/book" element={<BookAppointmentPage />} />
              <Route path="symptom-checker" element={<SymptomCheckerPage />} />
              <Route
                path="profile"
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default App
