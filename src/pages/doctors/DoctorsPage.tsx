import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  experience: number;
  rating: number;
  image: string;
}

const mockDoctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialization: "Cardiologist",
    experience: 12,
    rating: 4.8,
    image: "https://placekitten.com/200/200", // Placeholder image
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialization: "Pediatrician",
    experience: 8,
    rating: 4.9,
    image: "https://placekitten.com/201/201",
  },
  // Add more mock doctors as needed
];

export default function DoctorsPage() {
  const { data: doctors, isLoading, error } = useQuery<Doctor[]>({
    queryKey: ['doctors'],
    queryFn: () => Promise.resolve(mockDoctors), // Replace with actual API call
  });

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
        An error occurred while loading doctors.
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Find a Doctor</h1>
        <p className="text-gray-600 mt-2">
          Browse through our list of experienced healthcare professionals
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors?.map((doctor) => (
          <Link
            key={doctor.id}
            to={`/doctors/${doctor.id}`}
            className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {doctor.name}
                  </h2>
                  <p className="text-sm text-gray-500">{doctor.specialization}</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Experience:</span>
                  <p className="font-medium">{doctor.experience} years</p>
                </div>
                <div>
                  <span className="text-gray-500">Rating:</span>
                  <p className="font-medium">{doctor.rating}/5</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}