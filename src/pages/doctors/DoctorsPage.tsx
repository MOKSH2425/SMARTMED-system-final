import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { useState, useMemo } from 'react';
import Button from '../../components/ui/Button';
import { optimizeUnsplashUrl } from '../../lib/imageOptimization';

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  experience: number;
  rating: number;
  reviewCount: number;
  image: string;
  consultationFee: number;
  nextAvailable: string;
  icon: string;
}

const mockDoctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialization: "Cardiologist",
    experience: 12,
    rating: 4.8,
    reviewCount: 342,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    consultationFee: 150,
    nextAvailable: "Today, 3:00 PM",
    icon: "❤️",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialization: "Pediatrician",
    experience: 8,
    rating: 4.9,
    reviewCount: 287,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7",
    consultationFee: 120,
    nextAvailable: "Tomorrow, 10:00 AM",
    icon: "👶",
  },
  {
    id: 3,
    name: "Dr. Priya Patel",
    specialization: "Dermatologist",
    experience: 10,
    rating: 4.7,
    reviewCount: 215,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    consultationFee: 130,
    nextAvailable: "Today, 5:30 PM",
    icon: "🧴",
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialization: "Orthopedist",
    experience: 15,
    rating: 4.6,
    reviewCount: 401,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    consultationFee: 160,
    nextAvailable: "Dec 14, 2:00 PM",
    icon: "🦴",
  },
  {
    id: 5,
    name: "Dr. Emily Rodriguez",
    specialization: "Neurologist",
    experience: 11,
    rating: 4.9,
    reviewCount: 298,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    consultationFee: 170,
    nextAvailable: "Today, 4:15 PM",
    icon: "🧠",
  },
  {
    id: 6,
    name: "Dr. Ahmad Hassan",
    specialization: "General Practitioner",
    experience: 9,
    rating: 4.5,
    reviewCount: 523,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    consultationFee: 100,
    nextAvailable: "Today, 2:00 PM",
    icon: "⚕️",
  },
];

const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <span key={i}>
          {i < fullStars ? "★" : i === fullStars && hasHalf ? "⯨" : "☆"}
        </span>
      ))}
    </div>
  );
};

export default function DoctorsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);
  const [minRating, setMinRating] = useState(0);

  const { data: doctors, isLoading, error } = useQuery<Doctor[]>({
    queryKey: ['doctors'],
    queryFn: () => Promise.resolve(mockDoctors),
  });

  const specialties = useMemo(() => {
    return [...new Set(mockDoctors.map(d => d.specialization))].sort();
  }, []);

  const filteredDoctors = useMemo(() => {
    if (!doctors) return [];
    return doctors.filter(doctor => {
      const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSpecialty = !selectedSpecialty || doctor.specialization === selectedSpecialty;
      const matchesRating = doctor.rating >= minRating;
      return matchesSearch && matchesSpecialty && matchesRating;
    });
  }, [doctors, searchTerm, selectedSpecialty, minRating]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-smartmed-600"></div>
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
        <h1 className="text-3xl font-bold text-neutral-900">Find a Doctor</h1>
        <p className="text-neutral-600 mt-2">Browse verified healthcare professionals and book appointments instantly</p>
      </div>

      <div className="mb-8 space-y-4">
        <div>
          <label className="text-sm font-medium text-neutral-700">Search by name or specialty</label>
          <input
            type="text"
            placeholder="Dr. Sarah, Cardiologist..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full mt-2 px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-smartmed-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-neutral-700">Specialty</label>
            <select
              value={selectedSpecialty || ""}
              onChange={(e) => setSelectedSpecialty(e.target.value || null)}
              className="w-full mt-2 px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-smartmed-500"
            >
              <option value="">All specialties</option>
              {specialties.map(specialty => (
                <option key={specialty} value={specialty}>{specialty}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-neutral-700">Minimum rating</label>
            <select
              value={minRating}
              onChange={(e) => setMinRating(Number(e.target.value))}
              className="w-full mt-2 px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-smartmed-500"
            >
              <option value={0}>All ratings</option>
              <option value={4}>4.0+ ⭐</option>
              <option value={4.5}>4.5+ ⭐</option>
              <option value={4.7}>4.7+ ⭐</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mb-4 text-sm text-neutral-600">
        Found {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3 flex-1">
                  <img
                    src={optimizeUnsplashUrl(doctor.image, 120, 'medium')}
                    alt={doctor.name}
                    loading="lazy"
                    className="h-16 w-16 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h2 className="font-semibold text-neutral-900 truncate">{doctor.name}</h2>
                    <p className="text-sm text-neutral-600 truncate">{doctor.specialization}</p>
                  </div>
                </div>
                <div className="text-2xl ml-2 flex-shrink-0">{doctor.icon}</div>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex items-center gap-2">
                    {renderStars(doctor.rating)}
                    <span className="text-sm font-medium text-neutral-900">{doctor.rating}</span>
                    <span className="text-xs text-neutral-500">({doctor.reviewCount})</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-neutral-500">Experience</span>
                    <p className="font-medium text-neutral-900">{doctor.experience} years</p>
                  </div>
                  <div>
                    <span className="text-neutral-500">Consultation</span>
                    <p className="font-medium text-neutral-900">${doctor.consultationFee}</p>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded px-3 py-2">
                  <p className="text-xs text-green-700 font-medium">✓ {doctor.nextAvailable}</p>
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <Link to={`/doctors/${doctor.id}`} className="flex-1">
                  <Button variant="secondary" size="md" className="w-full">View Profile</Button>
                </Link>
                <Link to={`/appointments/book?doctorId=${doctor.id}`} className="flex-1">
                  <Button variant="primary" size="md" className="w-full">Book</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredDoctors.length === 0 && (
        <div className="text-center py-12">
          <p className="text-neutral-600">No doctors match your criteria. Try adjusting your filters.</p>
        </div>
      )}
    </div>
  );
}