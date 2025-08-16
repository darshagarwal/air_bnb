import { ArrowRight, Play, Home } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-16 bg-gradient-to-br from-amber-50 to-orange-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform
                <span className="text-amber-600 block">Old Homes</span>
                Into Dream Spaces
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We breathe new life into forgotten properties, creating beautiful, 
                livable spaces that honor the past while embracing modern comfort.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
              <button className="bg-amber-600 text-white px-8 py-4 rounded-xl hover:bg-amber-700 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 group">
                <span>Start Your Transformation</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              </a>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-amber-600 hover:text-amber-600 transition-all duration-300 font-semibold flex items-center justify-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Watch Our Process</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">150+</div>
                <div className="text-gray-600 font-medium">Homes Restored</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">15</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">98%</div>
                <div className="text-gray-600 font-medium">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Beautiful renovated home interior"
                className="w-full h-96 lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Home className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Victorian Revival</div>
                  <div className="text-sm text-gray-600">Completed in 3 months</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;