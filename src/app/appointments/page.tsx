'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  vehicleType: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: string;
  notes: string;
};

const services = [
  "Basic Wash",
  "Interior Detailing",
  "Premium Detailing",
  "Ceramic Coating",
  "Paint Correction",
  "Headlight Restoration",
];

const vehicleTypes = [
  "Sedan",
  "SUV",
  "Truck",
  "Van",
  "Sports Car",
  "Luxury Vehicle",
  "Other",
];

// This component uses the search params
function AppointmentForm() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get('service');
  
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  
  useEffect(() => {
    if (serviceParam) {
      setValue('service', serviceParam);
    }
  }, [serviceParam, setValue]);
  
  useEffect(() => {
    if (selectedDate) {
      // In a real app, you'd fetch available times from the server
      // For now, we'll generate some sample times
      const times = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];
      setAvailableTimes(times);
    } else {
      setAvailableTimes([]);
      setSelectedTime('');
    }
  }, [selectedDate]);
  
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // Prepare the complete data with date and time
    const appointmentData = {
      ...data,
      date: selectedDate ? format(selectedDate, 'yyyy-MM-dd') : '',
      time: selectedTime,
    };
    
    // In a real application, you would send this data to your backend
    console.log('Appointment data:', appointmentData);
    
    // Simulate API request
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Show success message and reset form
    setSubmitSuccess(true);
    reset();
    setSelectedDate(null);
    setSelectedTime('');
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
  };
  
  const isWeekday = (date: Date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6; // 0 is Sunday, 6 is Saturday
  };
  
  return (
    <div className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Book Your Appointment
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Schedule your car detailing service at a time that works for you
          </p>
        </div>
        
        {submitSuccess && (
          <div className="mb-8 rounded-md bg-green-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">Appointment Scheduled</h3>
                <p className="mt-2 text-sm text-green-700">
                  Thank you! Your appointment has been scheduled. We&apos;ll send you a confirmation email shortly.
                </p>
              </div>
            </div>
          </div>
        )}
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="bg-gray-50 shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone', { required: 'Phone number is required' })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Service Details</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">Select Service</label>
                <select
                  id="service"
                  {...register('service', { required: 'Service is required' })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
                {errors.service && <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>}
              </div>
              
              <div>
                <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700">Vehicle Type</label>
                <select
                  id="vehicleType"
                  {...register('vehicleType', { required: 'Vehicle type is required' })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select vehicle type</option>
                  {vehicleTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                {errors.vehicleType && <p className="mt-1 text-sm text-red-600">{errors.vehicleType.message}</p>}
              </div>
              
              <div>
                <label htmlFor="vehicleMake" className="block text-sm font-medium text-gray-700">Make</label>
                <input
                  type="text"
                  id="vehicleMake"
                  {...register('vehicleMake', { required: 'Vehicle make is required' })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="e.g., Toyota, Honda, BMW"
                />
                {errors.vehicleMake && <p className="mt-1 text-sm text-red-600">{errors.vehicleMake.message}</p>}
              </div>
              
              <div>
                <label htmlFor="vehicleModel" className="block text-sm font-medium text-gray-700">Model</label>
                <input
                  type="text"
                  id="vehicleModel"
                  {...register('vehicleModel', { required: 'Vehicle model is required' })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="e.g., Camry, Civic, X5"
                />
                {errors.vehicleModel && <p className="mt-1 text-sm text-red-600">{errors.vehicleModel.message}</p>}
              </div>
              
              <div>
                <label htmlFor="vehicleYear" className="block text-sm font-medium text-gray-700">Year</label>
                <input
                  type="text"
                  id="vehicleYear"
                  {...register('vehicleYear', { 
                    required: 'Vehicle year is required',
                    pattern: {
                      value: /^(19|20)\d{2}$/,
                      message: 'Please enter a valid year (1900-2099)'
                    }
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="e.g., 2020"
                />
                {errors.vehicleYear && <p className="mt-1 text-sm text-red-600">{errors.vehicleYear.message}</p>}
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Appointment Time</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  minDate={new Date()}
                  filterDate={isWeekday}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholderText="Select an available date"
                  dateFormat="MMMM d, yyyy"
                />
                {!selectedDate && isSubmitting && (
                  <p className="mt-1 text-sm text-red-600">Please select a date</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Time</label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  disabled={!selectedDate}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select a time</option>
                  {availableTimes.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
                {!selectedTime && isSubmitting && selectedDate && (
                  <p className="mt-1 text-sm text-red-600">Please select a time</p>
                )}
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Additional Information</h2>
            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Special Requests or Notes</label>
              <textarea
                id="notes"
                {...register('notes')}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Any special requests or details we should know about your vehicle?"
              ></textarea>
            </div>
          </div>
          
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting || !selectedDate || !selectedTime}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {isSubmitting ? 'Scheduling...' : 'Schedule Appointment'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Loading fallback for Suspense
function AppointmentFormLoading() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Book Your Appointment
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Loading appointment form...
          </p>
        </div>
        <div className="animate-pulse space-y-8">
          <div className="bg-gray-50 shadow rounded-lg p-6 h-40"></div>
          <div className="bg-gray-50 shadow rounded-lg p-6 h-80"></div>
          <div className="bg-gray-50 shadow rounded-lg p-6 h-60"></div>
        </div>
      </div>
    </div>
  );
}

export default function AppointmentsPage() {
  return (
    <Suspense fallback={<AppointmentFormLoading />}>
      <AppointmentForm />
    </Suspense>
  );
} 