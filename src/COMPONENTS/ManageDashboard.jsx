import React, { useState } from 'react';
import { Calendar, CreditCard, MessageCircle, Bell, CheckCircle, Clock, MapPin, Users, DollarSign, Eye } from 'lucide-react';

const ManageDashboard = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('bookings');

  // Mock data for dashboard
  const bookings = [
    {
      id: 1,
      vendor: "Grand Palm Events Center",
      type: "Venue",
      date: "2024-12-15",
      status: "confirmed",
      amount: "₦850,000",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      vendor: "Delicious Bites Catering",
      type: "Catering",
      date: "2024-12-15",
      status: "pending",
      amount: "₦350,000",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      vendor: "DreamCapture Studios",
      type: "Photography",
      date: "2024-12-15",
      status: "confirmed",
      amount: "₦250,000",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=100&h=100&fit=crop"
    }
  ];

  const payments = [
    { id: 1, vendor: "Grand Palm", amount: "₦425,000", status: "paid", date: "2024-11-01" },
    { id: 2, vendor: "Delicious Bites", amount: "₦175,000", status: "pending", date: "2024-11-05" },
    { id: 3, vendor: "DreamCapture", amount: "₦125,000", status: "paid", date: "2024-11-02" }
  ];

  const messages = [
    { id: 1, from: "Grand Palm Events", message: "Your booking is confirmed!", time: "2 hours ago", unread: true },
    { id: 2, from: "Delicious Bites", message: "Can we discuss the menu?", time: "5 hours ago", unread: true },
    { id: 3, from: "DreamCapture", message: "We're ready for the shoot", time: "1 day ago", unread: false }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      {/* Dashboard Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Event Dashboard</h2>
        <div className="flex items-center gap-2">
          <Bell className="w-5 h-5 text-amber-500" />
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">3</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-amber-50 p-4 rounded-xl">
          <Calendar className="w-6 h-6 text-amber-600 mb-2" />
          <div className="text-2xl font-bold text-gray-900">3</div>
          <div className="text-sm text-gray-600">Active Bookings</div>
        </div>
        <div className="bg-green-50 p-4 rounded-xl">
          <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
          <div className="text-2xl font-bold text-gray-900">2</div>
          <div className="text-sm text-gray-600">Confirmed</div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-xl">
          <Clock className="w-6 h-6 text-yellow-600 mb-2" />
          <div className="text-2xl font-bold text-gray-900">1</div>
          <div className="text-sm text-gray-600">Pending</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-xl">
          <DollarSign className="w-6 h-6 text-blue-600 mb-2" />
          <div className="text-2xl font-bold text-gray-900">₦1.45M</div>
          <div className="text-sm text-gray-600">Total Spent</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          onClick={() => setActiveTab('bookings')}
          className={`px-4 py-2 font-medium text-sm ${activeTab === 'bookings' ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Bookings
        </button>
        <button
          onClick={() => setActiveTab('payments')}
          className={`px-4 py-2 font-medium text-sm ${activeTab === 'payments' ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Payments
        </button>
        <button
          onClick={() => setActiveTab('messages')}
          className={`px-4 py-2 font-medium text-sm flex items-center gap-2 ${activeTab === 'messages' ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Messages
          <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">2</span>
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'bookings' && (
        <div className="space-y-4">
          {bookings.map(booking => (
            <div key={booking.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <img src={booking.image} alt={booking.vendor} className="w-16 h-16 rounded-lg object-cover" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">{booking.vendor}</h4>
                <p className="text-sm text-gray-600">{booking.type} • {booking.date}</p>
                <p className="text-sm font-medium text-gray-900 mt-1">{booking.amount}</p>
              </div>
              <div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium
                  ${booking.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                  {booking.status}
                </span>
              </div>
              <button className="text-amber-600 hover:text-amber-700">
                <Eye className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'payments' && (
        <div className="space-y-3">
          {payments.map(payment => (
            <div key={payment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div>
                <h4 className="font-semibold text-gray-900">{payment.vendor}</h4>
                <p className="text-sm text-gray-600">{payment.date}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-900">{payment.amount}</p>
                <span className={`text-xs font-medium ${payment.status === 'paid' ? 'text-green-600' : 'text-yellow-600'}`}>
                  {payment.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'messages' && (
        <div className="space-y-3">
          {messages.map(msg => (
            <div key={msg.id} className={`p-4 rounded-xl ${msg.unread ? 'bg-amber-50' : 'bg-gray-50'}`}>
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-semibold text-gray-900">{msg.from}</h4>
                <span className="text-xs text-gray-500">{msg.time}</span>
              </div>
              <p className="text-sm text-gray-600">{msg.message}</p>
              {msg.unread && <span className="text-xs text-amber-600 mt-2 block">New</span>}
            </div>
          ))}
        </div>
      )}

      {/* Quick Actions */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <button className="p-3 bg-gray-50 rounded-xl text-center hover:bg-gray-100 transition">
            <MessageCircle className="w-5 h-5 text-amber-500 mx-auto mb-1" />
            <span className="text-xs">Contact Vendors</span>
          </button>
          <button className="p-3 bg-gray-50 rounded-xl text-center hover:bg-gray-100 transition">
            <CreditCard className="w-5 h-5 text-amber-500 mx-auto mb-1" />
            <span className="text-xs">Make Payment</span>
          </button>
          <button className="p-3 bg-gray-50 rounded-xl text-center hover:bg-gray-100 transition">
            <Calendar className="w-5 h-5 text-amber-500 mx-auto mb-1" />
            <span className="text-xs">Reschedule</span>
          </button>
          <button className="p-3 bg-gray-50 rounded-xl text-center hover:bg-gray-100 transition">
            <Users className="w-5 h-5 text-amber-500 mx-auto mb-1" />
            <span className="text-xs">Add Vendors</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageDashboard;