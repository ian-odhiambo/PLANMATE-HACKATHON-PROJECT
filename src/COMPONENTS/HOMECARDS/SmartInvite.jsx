import React, { useState } from 'react';
import { 
  ArrowLeft, Users, CheckCircle, Clock, MapPin, MessageSquare, Zap
} from 'lucide-react';

const SmartInvite = ({ onBack }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Add Guests",
      icon: <Users className="w-8 h-8 text-amber-500" />,
      options: ["📇 Phone contacts", "📧 Email", "🔗 Shareable link", "📱 WhatsApp", "📷 QR code"]
    },
    {
      title: "RSVP Control",
      icon: <CheckCircle className="w-8 h-8 text-amber-500" />,
      options: ["✅ Going", "🤔 Maybe", "❌ Can't attend"],
      extraOptions: ["RSVP required toggle", "Deadline selector"]
    },
    {
      title: "Smart Reminders",
      icon: <Clock className="w-8 h-8 text-amber-500" />,
      options: ["⏰ 1 day before", "⏰ 3 hours before", "⏰ 30 minutes before", "📍 At event time"],
      sendVia: ["Push notification", "SMS", "Email", "WhatsApp"]
    },
    {
      title: "Location Assist",
      icon: <MapPin className="w-8 h-8 text-amber-500" />,
      options: ["Auto Google Maps link", '"Leave now" alert', "Live location pin"]
    },
    {
      title: "Friendly Message",
      icon: <MessageSquare className="w-8 h-8 text-amber-500" />,
      options: ["Editable template"],
      template: '"Hey! Just a reminder about [Event Name] at [Time] 📍 Can\'t wait to see you!"'
    },
    {
      title: "Last-Minute Nudge",
      icon: <Zap className="w-8 h-8 text-amber-500" />,
      options: ['"On my way" reminder', '"Event starting now" ping', '"Running late?" check-in']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-6 px-6">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Smart Invite</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-12 px-6">
        {/* Steps Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-lg border-2 transition-all text-left ${
                activeStep === idx
                  ? 'border-amber-500 bg-amber-50'
                  : 'border-gray-200 bg-white hover:border-amber-300'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                {step.icon}
                <h3 className="font-semibold text-gray-900">Step {idx + 1}</h3>
              </div>
              <p className="text-sm text-gray-600">{step.title}</p>
            </button>
          ))}
        </div>

        {/* Step Details */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            {steps[activeStep].icon}
            <h2 className="text-2xl font-bold text-gray-900">
              Step {activeStep + 1}: {steps[activeStep].title}
            </h2>
          </div>

          {/* Options */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-600 uppercase mb-4">Options</h3>
            <div className="space-y-2">
              {steps[activeStep].options.map((option, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-lg">{option.split(' ')[0]}</span>
                  <span className="text-gray-700">{option}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Extra Options */}
          {steps[activeStep].extraOptions && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-600 uppercase mb-4">Additional Controls</h3>
              <div className="space-y-2">
                {steps[activeStep].extraOptions.map((option, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <input type="checkbox" className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-700">{option}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Send Via */}
          {steps[activeStep].sendVia && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-600 uppercase mb-4">Send Via</h3>
              <div className="grid grid-cols-2 gap-3">
                {steps[activeStep].sendVia.map((method, idx) => (
                  <button
                    key={idx}
                    className="p-3 border-2 border-gray-200 rounded-lg hover:border-amber-500 text-gray-700 hover:text-amber-600 transition-colors"
                  >
                    {method}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Template */}
          {steps[activeStep].template && (
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-amber-500">
              <p className="text-sm text-gray-600 mb-2">Default Template:</p>
              <p className="text-gray-800 italic">{steps[activeStep].template}</p>
              <button className="mt-3 text-amber-600 text-sm font-medium hover:text-amber-700">
                ✏️ Edit template
              </button>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
            disabled={activeStep === 0}
            className="px-6 py-2 rounded-lg border-2 border-gray-200 text-gray-700 font-medium disabled:opacity-50 hover:border-amber-500"
          >
            ← Previous
          </button>
          <span className="text-sm text-gray-600">
            Step {activeStep + 1} of {steps.length}
          </span>
          <button
            onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
            disabled={activeStep === steps.length - 1}
            className="px-6 py-2 rounded-lg bg-amber-500 text-white font-medium disabled:opacity-50 hover:bg-amber-600"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmartInvite;
