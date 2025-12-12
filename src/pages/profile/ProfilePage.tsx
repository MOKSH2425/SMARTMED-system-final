import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserIcon } from '@heroicons/react/24/outline';
import Button from '../../components/ui/Button';

const profileSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Invalid phone number'),
  dateOfBirth: z.string(),
  gender: z.string(),
  bloodType: z.string(),
  allergies: z.string(),
  medications: z.string(),
});

type ProfileFormData = z.infer<typeof profileSchema>;

const mockUserProfile = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '1234567890',
  dateOfBirth: '1990-01-01',
  gender: 'Male',
  bloodType: 'O+',
  allergies: 'None',
  medications: 'None',
};

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: mockUserProfile,
  });

  const onSubmit = async (data: ProfileFormData) => {
    try {
      // TODO: Implement profile update logic
      console.log('Profile update data:', data);
      setSuccessMessage('Profile updated successfully');
      setIsEditing(false);
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      console.error('Profile update failed:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 bg-gradient-to-r from-smartmed-50 via-purple-50 to-coral-50 p-6 rounded-lg border border-smartmed-100">
        <h1 className="text-3xl font-bold text-smartmed-900">My Profile</h1>
        <p className="text-smartmed-600 mt-2">View and manage your personal information and medical history</p>
      </div>

      {successMessage && (
        <div role="status" aria-live="polite" className="mb-6 p-4 bg-smartmed-50 rounded-lg">
          <p className="text-smartmed-700">{successMessage}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-smartmed-50 to-purple-50 rounded-lg shadow-sm p-6 border border-smartmed-100">
            <div className="flex items-center space-x-4">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-smartmed-400 to-purple-400 flex items-center justify-center">
                <UserIcon className="h-12 w-12 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-smartmed-900">{mockUserProfile.name}</h2>
                <p className="text-smartmed-600">{mockUserProfile.email}</p>
              </div>
            </div>
          </div>

          <nav className="bg-white rounded-lg shadow-sm border border-smartmed-100">
            <a href="#personal" className="block px-4 py-3 text-smartmed-700 border-l-4 border-smartmed-500 bg-smartmed-50/50 hover:bg-smartmed-100/50 font-medium">Personal Information</a>
            <a href="#security" className="block px-4 py-3 text-neutral-600 border-l-4 border-transparent hover:border-smartmed-300 hover:bg-neutral-50">Security</a>
            <a href="#medical" className="block px-4 py-3 text-neutral-600 border-l-4 border-transparent hover:border-smartmed-300 hover:bg-neutral-50">Medical History</a>
            <a href="#notifications" className="block px-4 py-3 text-neutral-600 border-l-4 border-transparent hover:border-smartmed-300 hover:bg-neutral-50">Notifications</a>
          </nav>
        </div>

        <div className="md:col-span-2">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6 border-t-4 border-t-smartmed-500">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-smartmed-900">Personal Information</h3>
                <button
                  type="button"
                  onClick={() => setIsEditing(!isEditing)}
                  className="text-sm text-smartmed-700 hover:text-smartmed-800"
                >
                  {isEditing ? 'Cancel' : 'Edit'}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-800">
                    Full Name
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    disabled={!isEditing}
                    className="mt-1 block w-full rounded-md border border-neutral-200 shadow-sm px-3 py-2 focus:border-smartmed-300 focus:ring-smartmed-300 disabled:bg-neutral-50"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-800">
                    Email Address
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    disabled={!isEditing}
                    className="mt-1 block w-full rounded-md border border-neutral-200 shadow-sm px-3 py-2 focus:border-smartmed-300 focus:ring-smartmed-300 disabled:bg-neutral-50"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-800">
                    Phone Number
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    disabled={!isEditing}
                    className="mt-1 block w-full rounded-md border border-neutral-200 shadow-sm px-3 py-2 focus:border-smartmed-300 focus:ring-smartmed-300 disabled:bg-neutral-50"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="dateOfBirth" className="block text-sm font-medium text-neutral-800">
                    Date of Birth
                  </label>
                  <input
                    {...register('dateOfBirth')}
                    type="date"
                    disabled={!isEditing}
                    className="mt-1 block w-full rounded-md border border-neutral-200 shadow-sm px-3 py-2 focus:border-smartmed-300 focus:ring-smartmed-300 disabled:bg-neutral-50"
                  />
                  {errors.dateOfBirth && (
                    <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-neutral-800">
                    Gender
                  </label>
                  <select
                    {...register('gender')}
                    disabled={!isEditing}
                    className="mt-1 block w-full rounded-md border border-neutral-200 shadow-sm px-3 py-2 focus:border-smartmed-300 focus:ring-smartmed-300 disabled:bg-neutral-50"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.gender && (
                    <p className="mt-1 text-sm text-red-600">{errors.gender.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="bloodType" className="block text-sm font-medium text-neutral-800">
                    Blood Type
                  </label>
                  <select
                    {...register('bloodType')}
                    disabled={!isEditing}
                    className="mt-1 block w-full rounded-md border border-neutral-200 shadow-sm px-3 py-2 focus:border-smartmed-300 focus:ring-smartmed-300 disabled:bg-neutral-50"
                  >
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                  {errors.bloodType && (
                    <p className="mt-1 text-sm text-red-600">{errors.bloodType.message}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-6 text-neutral-900">Medical Information</h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="allergies" className="block text-sm font-medium text-neutral-800">
                    Allergies
                  </label>
                  <textarea
                    {...register('allergies')}
                    rows={3}
                    disabled={!isEditing}
                    className="mt-1 block w-full rounded-md border border-neutral-200 shadow-sm px-3 py-2 focus:border-smartmed-300 focus:ring-smartmed-300 disabled:bg-neutral-50"
                    placeholder="List any allergies..."
                  />
                </div>

                <div>
                  <label htmlFor="medications" className="block text-sm font-medium text-gray-700">
                    Current Medications
                  </label>
                  <textarea
                    {...register('medications')}
                    rows={3}
                    disabled={!isEditing}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 disabled:bg-gray-50"
                    placeholder="List any current medications..."
                  />
                </div>
              </div>
            </div>

            {isEditing && (
              <div className="flex justify-end">
                <Button type="submit">Save Changes</Button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}