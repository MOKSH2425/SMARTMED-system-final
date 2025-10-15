import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CalendarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';

const bookingSchema = z.object({
  patientName: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Invalid phone number'),
  email: z.string().email('Invalid email address'),
  reason: z.string().min(10, 'Please provide more details about your visit'),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export default function BookAppointmentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { doctorId, doctorName, slot, day } = location.state || {};

  const { register, handleSubmit, formState: { errors } } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    try {
      // TODO: Implement appointment booking logic
      console.log('Booking data:', { ...data, doctorId, slot, day });
      navigate('/appointments');
    } catch (error) {
      console.error('Booking failed:', error);
    }
  };

  if (!doctorId || !doctorName || !slot || !day) {
    return (
      <div className="text-center text-red-600">
        Invalid booking information. Please select a doctor and time slot first.
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Book Appointment</h1>
        <p className="text-gray-600 mt-2">
          Fill in your details to confirm your appointment
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Appointment Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <UserIcon className="h-5 w-5 text-gray-400" />
            <div>
              <p className="text-gray-500">Doctor</p>
              <p className="font-medium">{doctorName}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <CalendarIcon className="h-5 w-5 text-gray-400" />
            <div>
              <p className="text-gray-500">Day</p>
              <p className="font-medium">{day}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <ClockIcon className="h-5 w-5 text-gray-400" />
            <div>
              <p className="text-gray-500">Time</p>
              <p className="font-medium">{slot}</p>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-sm p-6 space-y-6">
        <div>
          <label htmlFor="patientName" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            {...register('patientName')}
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
          {errors.patientName && (
            <p className="mt-1 text-sm text-red-600">{errors.patientName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            {...register('phone')}
            type="tel"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            {...register('email')}
            type="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
            Reason for Visit
          </label>
          <textarea
            {...register('reason')}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
          {errors.reason && (
            <p className="mt-1 text-sm text-red-600">{errors.reason.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}