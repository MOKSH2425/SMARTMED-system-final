import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { CalendarIcon } from '@heroicons/react/24/outline';

interface Appointment {
  id: number;
  doctorName: string;
  specialization: string;
  date: string;
  time: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}

const mockAppointments: Appointment[] = [
  {
    id: 1,
    doctorName: "Dr. Sarah Johnson",
    specialization: "Cardiologist",
    date: "2025-10-20",
    time: "10:00 AM",
    status: "upcoming"
  },
  {
    id: 2,
    doctorName: "Dr. Michael Chen",
    specialization: "Pediatrician",
    date: "2025-10-15",
    time: "02:00 PM",
    status: "completed"
  }
];

export default function AppointmentsPage() {
  const { data: appointments, isLoading, error } = useQuery<Appointment[]>({
    queryKey: ['appointments'],
    queryFn: () => Promise.resolve(mockAppointments), // Replace with actual API call
  });

  const getStatusColor = (status: Appointment['status']) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600">
        An error occurred while loading appointments.
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">My Appointments</h1>
        <p className="text-gray-600 mt-2">
          View and manage your appointments
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm divide-y">
        {appointments?.map((appointment) => (
          <div key={appointment.id} className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold">{appointment.doctorName}</h3>
                <p className="text-gray-500">{appointment.specialization}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${getStatusColor(appointment.status)}`}>
                {appointment.status}
              </span>
            </div>
            <div className="mt-4 flex items-center text-gray-500">
              <CalendarIcon className="h-5 w-5 mr-2" />
              <span>
                {format(new Date(appointment.date), 'MMMM d, yyyy')} at {appointment.time}
              </span>
            </div>
            {appointment.status === 'upcoming' && (
              <div className="mt-4 flex space-x-4">
                <button className="text-sm text-primary-600 hover:text-primary-700">
                  Reschedule
                </button>
                <button className="text-sm text-red-600 hover:text-red-700">
                  Cancel
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}