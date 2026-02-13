// src/data/featuresData.js
import { Shield, DollarSign, Star, CreditCard, MessageCircle, LayoutDashboard } from 'lucide-react';

export const featuresData = [
  {
    id: 1,
    slug: "verified-vendors",
    icon: <Shield className="w-8 h-8 text-amber-500" />,
    iconName: "Shield",
    title: "Verified Vendors",
    shortDesc: "All vendors are vetted for quality and reliability.",
    description: "All vendors are vetted for quality and reliability. Book with confidence.",
    badge: "Verified"
  },
  {
    id: 2,
    slug: "transparent-pricing",
    icon: <DollarSign className="w-8 h-8 text-amber-500" />,
    iconName: "DollarSign",
    title: "Transparent Pricing",
    shortDesc: "See prices upfront with no hidden fees.",
    description: "See prices upfront with no hidden fees. Compare and budget easily.",
    badge: "No hidden fees"
  },
  {
    id: 3,
    slug: "real-reviews",
    icon: <Star className="w-8 h-8 text-amber-500" />,
    iconName: "Star",
    title: "Real Reviews",
    shortDesc: "Read authentic reviews from real customers.",
    description: "Read authentic reviews from real customers who have worked with vendors.",
    badge: "Authentic"
  },
  {
    id: 4,
    slug: "secure-payments",
    icon: <CreditCard className="w-8 h-8 text-amber-500" />,
    iconName: "CreditCard",
    title: "Secure Payments",
    shortDesc: "Safe and secure payment processing.",
    description: "Safe and secure payment processing. Your money is protected.",
    badge: "Protected"
  },
  {
    id: 5,
    slug: "direct-communication",
    icon: <MessageCircle className="w-8 h-8 text-amber-500" />,
    iconName: "MessageCircle",
    title: "Direct Communication",
    shortDesc: "Chat directly with vendors to discuss your requirements.",
    description: "Chat directly with vendors to discuss your requirements and get quotes.",
    badge: "Chat now"
  },
  {
    id: 6,
    slug: "event-dashboard",
    icon: <LayoutDashboard className="w-8 h-8 text-amber-500" />,
    iconName: "LayoutDashboard",
    title: "Event Dashboard",
    shortDesc: "Manage all bookings and vendor communications.",
    description: "Manage all your bookings, payments, and vendor communications in one place.",
    badge: "All in one"
  }
];