import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-amber-500 text-white px-6 py-8 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* copyright information*/}
          <div className="text-sm opacity-90">
            © {currentYear} PLANMATE. All rights reserved.
          </div>
          
          {/*  footer links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="/privacy" className="opacity-90 hover:opacity-100 hover:underline underline-offset-4">
              Privacy
            </a>
            <a href="/terms" className="opacity-90 hover:opacity-100 hover:underline underline-offset-4">
              Terms
            </a>
            <a href="/contact" className="opacity-90 hover:opacity-100 hover:underline underline-offset-4">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;