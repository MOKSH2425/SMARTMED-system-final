import { useQuery } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';
import { CalendarIcon, ClockIcon, StarIcon } from '@heroicons/react/24/outline';
import Button from '../../components/ui/Button';

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  experience: number;
  rating: number;
  image: string;
  education: string[];
  languages: string[];
  about: string;
  availability: {
    day: string;
    slots: string[];
  }[];
}

const mockDoctor: Doctor = {
  id: 1,
  name: "Dr. Sarah Johnson",
  specialization: "Cardiologist",
  experience: 12,
  rating: 4.8,
  image: "https://placekitten.com/200/200",
  education: [
    "MD - Cardiology, Stanford University",
    "MBBS - Harvard Medical School"
  ],
  languages: ["English", "Spanish"],
  about: "Dr. Sarah Johnson is a board-certified cardiologist with over 12 years of experience in treating heart conditions. She specializes in preventive cardiology and heart failure management.",
  availability: [
    {
      day: "Monday",
      slots: ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM"]
    },
    {
      day: "Wednesday",
      slots: ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM"]
    },
    {
      day: "Friday",
      slots: ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM"]
    }
  ]
};

export default function DoctorDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const { data: doctor, isLoading, error } = useQuery<Doctor>({
    queryKey: ['doctor', id],
    queryFn: () => Promise.resolve(mockDoctor), // Replace with actual API call
  });

  const handleBookAppointment = (slot: string, day: string) => {
    navigate('/appointments/book', { 
      state: { 
        doctorId: id,
        doctorName: doctor?.name,
        slot,
        day
      } 
    });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-smartmed-600"></div>
      </div>
    );
  }

  if (error || !doctor) {
    return (
      <div className="text-center text-red-600">
        An error occurred while loading doctor details.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex items-start space-x-6">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="h-32 w-32 rounded-lg object-cover"
          />
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-neutral-900">{doctor.name}</h1>
            <p className="text-lg text-neutral-600">{doctor.specialization}</p>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div>
                <div className="flex items-center text-neutral-500">
                  <ClockIcon className="h-5 w-5 mr-2" />
                  Experience
                </div>
                <p className="font-medium text-neutral-900">{doctor.experience} years</p>
              </div>
              <div>
                <div className="flex items-center text-neutral-500">
                  <StarIcon className="h-5 w-5 mr-2" />
                  Rating
                </div>
                <p className="font-medium text-neutral-900">{doctor.rating}/5</p>
              </div>
              <div>
                <div className="flex items-center text-neutral-500">
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  Availability
                </div>
                <p className="font-medium text-neutral-900">{doctor.availability.length} days/week</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">About</h2>
            <p className="text-gray-600">{doctor.about}</p>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Education</h2>
            <ul className="space-y-2">
              {doctor.education.map((edu, index) => (
                <li key={index} className="text-gray-600">{edu}</li>
              ))}
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Languages</h2>
            <div className="flex flex-wrap gap-2">
              {doctor.languages.map((lang, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                >
                  {lang}
                </span>
              ))}
            </div>
          </section>
        </div>

        <div className="md:col-span-1">
          <section className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
            <h2 className="text-xl font-semibold mb-4">Book Appointment</h2>
            <div className="space-y-4">
              {doctor.availability.map((schedule, index) => (
                <div key={index}>
                  <h3 className="font-medium text-gray-900 mb-2">{schedule.day}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {schedule.slots.map((slot, slotIndex) => (
                      <Button
                        key={slotIndex}
                        onClick={() => handleBookAppointment(slot, schedule.day)}
                        variant="secondary"
                        className="text-sm"
                      >
                        {slot}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}