import React, { useState } from 'react';
import { Calendar, MapPin, Users, DollarSign, Send, CheckCircle } from 'lucide-react';
import formData from '../createEventForm.json';

const CreateEventForm = ({ onBack }) => {
  const [formStep, setFormStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formValues, setFormValues] = useState({
    eventType: '',
    eventDate: '',
    eventLocation: '',
    guestCount: '',
    budget: '',
    additionalNotes: ''
  });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // In real app, send data to backend
    console.log('Event created:', formValues);
  };

  if (formSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Event Created Successfully!</h2>
        <p className="text-gray-600 mb-6">We've received your event details. Vendors will contact you soon.</p>
        <button
          onClick={onBack}
          className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium"
        >
          Create Another Event
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8">
        {[1, 2, 3].map((step) => (
          <div key={step} className="flex items-center flex-1">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
              ${formStep >= step ? 'bg-amber-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
              {step}
            </div>
            {step < 3 && (
              <div className={`flex-1 h-1 mx-2 ${formStep > step ? 'bg-amber-500' : 'bg-gray-200'}`} />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        {formStep === 1 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Tell us about your event</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
              <select
                name="eventType"
                value={formValues.eventType}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="">Select event type</option>
                {formData.eventTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Event Date</label>
              <input
                type="date"
                name="eventDate"
                value={formValues.eventDate}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Event Location</label>
              <input
                type="text"
                name="eventLocation"
                placeholder="City, State"
                value={formValues.eventLocation}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>
        )}

        {formStep === 2 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Guest & Budget Details</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Guest Count</label>
              <select
                name="guestCount"
                value={formValues.guestCount}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="">Select guest range</option>
                {formData.guestRanges.map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
              <select
                name="budget"
                value={formValues.budget}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="">Select budget range</option>
                {formData.budgetRanges.map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes (Optional)</label>
              <textarea
                name="additionalNotes"
                rows="4"
                placeholder="Tell us more about your vision, preferences, or special requirements..."
                value={formValues.additionalNotes}
                onChange={handleChange}
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>
        )}

        {formStep === 3 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Review Your Event Details</h2>
            
            <div className="bg-gray-50 p-6 rounded-xl space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-amber-500" />
                <div>
                  <p className="text-sm text-gray-500">Event Type</p>
                  <p className="font-medium">{formValues.eventType || 'Not specified'}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-amber-500" />
                <div>
                  <p className="text-sm text-gray-500">Event Date</p>
                  <p className="font-medium">{formValues.eventDate || 'Not specified'}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-amber-500" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">{formValues.eventLocation || 'Not specified'}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-amber-500" />
                <div>
                  <p className="text-sm text-gray-500">Guest Count</p>
                  <p className="font-medium">{formValues.guestCount || 'Not specified'}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <DollarSign className="w-5 h-5 text-amber-500" />
                <div>
                  <p className="text-sm text-gray-500">Budget</p>
                  <p className="font-medium">{formValues.budget || 'Not specified'}</p>
                </div>
              </div>
              
              {formValues.additionalNotes && (
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-2">Additional Notes</p>
                  <p className="text-gray-700">{formValues.additionalNotes}</p>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="flex justify-between mt-8">
          {formStep > 1 && (
            <button
              type="button"
              onClick={() => setFormStep(formStep - 1)}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Previous
            </button>
          )}
          
          {formStep < 3 ? (
            <button
              type="button"
              onClick={() => setFormStep(formStep + 1)}
              className="ml-auto bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="ml-auto bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              Create Event
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateEventForm;