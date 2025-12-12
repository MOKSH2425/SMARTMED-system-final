import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ExclamationTriangleIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import Button from '../../components/ui/Button';

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
        return 'bg-smartmed-50 text-smartmed-700 border-smartmed-200';
      case 'low':
        return 'bg-neutral-50 text-green-700 border-green-200';
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-neutral-900">Symptom Checker</h1>
        <p className="text-neutral-600 mt-2">Answer a few questions to get instant health guidance</p>
      </div>

      <div className="bg-smartmed-50 border border-smartmed-100 rounded-lg p-4 mb-8">
        <div className="flex items-start">
          <ExclamationTriangleIcon className="h-5 w-5 text-smartmed-500 mt-0.5 mr-3" />
          <div>
            <h3 className="text-sm font-medium text-smartmed-700">Important Notice</h3>
            <p className="mt-1 text-sm text-smartmed-700">
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
              <label htmlFor="mainSymptom" className="block text-sm font-medium text-neutral-800">What's your main symptom?</label>
              <textarea
                {...register('mainSymptom')}
                rows={3}
                aria-label="main symptom"
                className="mt-1 block w-full rounded-md border border-neutral-200 shadow-sm px-3 py-2 focus:border-smartmed-300 focus:ring-smartmed-300"
                placeholder="Describe your main symptom..."
              />
              {errors.mainSymptom && (<p className="mt-1 text-sm text-red-600">{errors.mainSymptom.message}</p>)}
            </div>

            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-neutral-800">How long have you had this symptom?</label>
              <select
                {...register('duration')}
                aria-label="symptom duration"
                className="mt-1 block w-full rounded-md border border-neutral-200 shadow-sm px-3 py-2 focus:border-smartmed-300 focus:ring-smartmed-300"
              >
                <option value="">Select duration</option>
                <option value="less than a day">Less than a day</option>
                <option value="1-3 days">1-3 days</option>
                <option value="4-7 days">4-7 days</option>
                <option value="more than a week">More than a week</option>
              </select>
              {errors.duration && (<p className="mt-1 text-sm text-red-600">{errors.duration.message}</p>)}
            </div>

            <div>
              <label htmlFor="severity" className="block text-sm font-medium text-neutral-800">How severe is your symptom?</label>
              <select
                {...register('severity')}
                aria-label="symptom severity"
                className="mt-1 block w-full rounded-md border border-neutral-200 shadow-sm px-3 py-2 focus:border-smartmed-300 focus:ring-smartmed-300"
              >
                <option value="">Select severity</option>
                <option value="mild">Mild - Noticeable but not interfering with daily activities</option>
                <option value="moderate">Moderate - Somewhat interfering with daily activities</option>
                <option value="severe">Severe - Significantly interfering with daily activities</option>
              </select>
              {errors.severity && (<p className="mt-1 text-sm text-red-600">{errors.severity.message}</p>)}
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-800 mb-2">Do you have any additional symptoms?</label>
              <div className="grid grid-cols-2 gap-4">
                {additionalSymptomsList.map((symptom) => (
                  <label key={symptom} className="flex items-center">
                    <input
                      type="checkbox"
                      {...register('additionalSymptoms')}
                      value={symptom}
                      className="h-4 w-4 text-smartmed-600 focus:ring-smartmed-300 border-neutral-300 rounded"
                    />
                    <span className="ml-2 text-sm text-neutral-600">{symptom}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <Button type="submit" disabled={isChecking} className="w-full">{isChecking ? 'Checking symptoms...' : 'Check Symptoms'}</Button>
        </div>
      </form>

      {result && (
        <div role="status" aria-live="polite" className={`mt-8 p-6 border rounded-lg ${getUrgencyColor(result.urgency)}`}>
          <div className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 mr-3 text-smartmed-600" aria-hidden="true" />
            <div>
              <h3 className="text-lg font-semibold text-neutral-900">{result.condition}</h3>
              <p className="mt-2 text-neutral-700">{result.recommendation}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}