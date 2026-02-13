import { Target, Eye, Heart, Sparkles } from 'lucide-react';

const AboutMain = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Planmate
          </h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* Two Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Mission Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="bg-amber-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-amber-600" />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              Our Mission
              <Heart className="w-5 h-5 text-amber-500" />
            </h2>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              To simplify event planning in Kenya by connecting 
              customers with verified, professional vendors through 
              technology—making every celebration memorable and 
              stress-free.
            </p>
            
            <div className="mt-6 pt-6 border-t border-gray-100">
              <span className="text-amber-600 font-medium flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Stress-free celebrations
              </span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="bg-amber-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-amber-600" />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h2>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              To become Africa's leading event vendor marketplace, 
              empowering millions of vendors to grow their businesses 
              while helping customers create unforgettable moments.
            </p>
            
            <div className="mt-6 pt-6 border-t border-gray-100">
              <span className="text-amber-600 font-medium">
                Africa's #1 event marketplace
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            — Making every moment matter —
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMain;