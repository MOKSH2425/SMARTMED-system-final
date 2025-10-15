import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ExclamationTriangleIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const symptomsSchema = z.object({
  mainSymptom: z.string().min(3, 'Please describe your main symptom'),
  duration: z.string().min(1, 'Please select duration'),
  severity: z.string().min(1, 'Please select severity'),
  additionalSymptoms: z.array(z.string()).optional(),
});

type SymptomsFormData = z.infer<typeof symptomsSchema>;

interface SymptomResult {
  condition: string;
  urgency: 'low' | 'medium' | 'high';
  recommendation: string;
}

const mockCheckSymptoms = async (data: SymptomsFormData): Promise<SymptomResult> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Mock logic - in real app, this would be determined by a medical API
  if (data.severity === 'severe') {
    return {
      condition: 'Requires Immediate Attention',
      urgency: 'high',
      recommendation: 'Please seek emergency medical care immediately',
    };
  }

  return {
    condition: 'Common Cold / Mild Condition',
    urgency: 'low',
    recommendation: 'Rest and monitor symptoms. Schedule a regular appointment if symptoms persist.',
  };
};

const additionalSymptomsList = [
  'Fever',
  'Headache',
  'Fatigue',
  'Nausea',
  'Dizziness',
  'Shortness of breath',
  'Cough',
  'Muscle pain',
];

export default function SymptomCheckerPage() {
  const [result, setResult] = useState<SymptomResult | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<SymptomsFormData>({
    resolver: zodResolver(symptomsSchema),
    defaultValues: {
      additionalSymptoms: [],
    },
  });

  const onSubmit = async (data: SymptomsFormData) => {
    setIsChecking(true);
    try {
      const result = await mockCheckSymptoms(data);
      setResult(result);
    } catch (error) {
      console.error('Error checking symptoms:', error);
    } finally {
      setIsChecking(false);
    }
  };

  const getUrgencyColor = (urgency: SymptomResult['urgency']) => {
    switch (urgency) {
      case 'high':
        return 'bg-red-50 text-red-800 border-red-200';
      case 'medium':
        return 'bg-yellow-50 text-yellow-800 border-yellow-200';
      case 'low':
        return 'bg-green-50 text-green-800 border-green-200';
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Symptom Checker</h1>
        <p className="text-gray-600 mt-2">
          Answer a few questions to get instant health guidance
        </p>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
        <div className="flex items-start">
          <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400 mt-0.5 mr-3" />
          <div>
            <h3 className="text-sm font-medium text-yellow-800">Important Notice</h3>
            <p className="mt-1 text-sm text-yellow-700">
              This symptom checker is for informational purposes only and should not be used as a substitute
              for professional medical advice, diagnosis, or treatment.
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="space-y-6">
            <div>
              <label htmlFor="mainSymptom" className="block text-sm font-medium text-gray-700">
                What's your main symptom?
              </label>
              <textarea
                {...register('mainSymptom')}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                placeholder="Describe your main symptom..."
              />
              {errors.mainSymptom && (
                <p className="mt-1 text-sm text-red-600">{errors.mainSymptom.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
                How long have you had this symptom?
              </label>
              <select
                {...register('duration')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              >
                <option value="">Select duration</option>
                <option value="less than a day">Less than a day</option>
                <option value="1-3 days">1-3 days</option>
                <option value="4-7 days">4-7 days</option>
                <option value="more than a week">More than a week</option>
              </select>
              {errors.duration && (
                <p className="mt-1 text-sm text-red-600">{errors.duration.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="severity" className="block text-sm font-medium text-gray-700">
                How severe is your symptom?
              </label>
              <select
                {...register('severity')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              >
                <option value="">Select severity</option>
                <option value="mild">Mild - Noticeable but not interfering with daily activities</option>
                <option value="moderate">Moderate - Somewhat interfering with daily activities</option>
                <option value="severe">Severe - Significantly interfering with daily activities</option>
              </select>
              {errors.severity && (
                <p className="mt-1 text-sm text-red-600">{errors.severity.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Do you have any additional symptoms?
              </label>
              <div className="grid grid-cols-2 gap-4">
                {additionalSymptomsList.map((symptom) => (
                  <label key={symptom} className="flex items-center">
                    <input
                      type="checkbox"
                      {...register('additionalSymptoms')}
                      value={symptom}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-600">{symptom}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isChecking}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50"
        >
          {isChecking ? 'Checking symptoms...' : 'Check Symptoms'}
        </button>
      </form>

      {result && (
        <div className={`mt-8 p-6 border rounded-lg ${getUrgencyColor(result.urgency)}`}>
          <div className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 mr-3" />
            <div>
              <h3 className="text-lg font-semibold">{result.condition}</h3>
              <p className="mt-2">{result.recommendation}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}