import { Calendar, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-amber-500 text-black px-6 py-4 font-bold">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* section with logo and tagline */}
        <div className="flex items-center gap-3">
          <div className="flex items-center">
            <Calendar className="w-8 h-8" />
            <ChevronRight className="w-4 h-4 -ml-1" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-tight">PLANMATE</span>
            <span className="text-xs opacity-90">Planning event? worry less</span>
          </div>
        </div>

        {/* navigation to the different pages */}
        <div className="flex items-center gap-8">
          <Link to="/" className="hover:underline underline-offset-4 font-medium">HOME</Link>
          <Link to="/planmate-event" className="hover:underline underline-offset-4 font-medium">PLANMATE EVENT</Link>
          <Link to="/service-providers" className="hover:underline underline-offset-4 font-medium">SERVICES PROVIDER</Link>
          <Link to="/about" className="hover:underline underline-offset-4 font-medium">ABOUT</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;