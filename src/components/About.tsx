import { Award, Users, Clock, Heart } from 'lucide-react';

const stats = [
  { icon: Award, label: 'Awards Won', value: '25+' },
  { icon: Users, label: 'Expert Craftsmen', value: '50+' },
  { icon: Clock, label: 'Average Project Time', value: '3-6 months' },
  { icon: Heart, label: 'Client Satisfaction', value: '98%' }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Breathing Life Into
                <span className="text-amber-600 block">Historic Properties</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                For over 15 years, we've specialized in transforming neglected historic 
                homes into stunning, livable spaces that honor their past while embracing 
                modern comfort and efficiency.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Our Approach</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Historical Preservation:</strong> We research each home's history 
                    and preserve original architectural elements whenever possible.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Modern Integration:</strong> Seamlessly blend contemporary 
                    amenities with period-appropriate design and materials.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Quality Craftsmanship:</strong> Our master craftsmen use traditional 
                    techniques combined with modern tools for superior results.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 border border-gray-100 rounded-xl">
                  <stat.icon className="h-8 w-8 text-amber-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Our team working on a restoration project"
                className="w-full h-80 object-cover"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Craftsman at work"
                  className="w-full h-40 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;