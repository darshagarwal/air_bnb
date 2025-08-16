import { Hammer, PaintBucket, Lightbulb, Shield, Wrench, Home, } from 'lucide-react';

const services = [
  {
    icon: Hammer,
    title: 'Structural Restoration',
    description: 'Complete structural repairs and reinforcement to ensure your home is safe and sound for decades to come.',
    features: ['Foundation repair', 'Roof restoration', 'Wall reinforcement', 'Floor leveling']
  },
  {
    icon: PaintBucket,
    title: 'Interior Design',
    description: 'Transform dated interiors into modern, functional spaces while preserving historical character.',
    features: ['Space planning', 'Color consultation', 'Material selection', 'Furniture placement']
  },
  {
    icon: Lightbulb,
    title: 'Modern Systems',
    description: 'Upgrade electrical, plumbing, and HVAC systems to modern standards for comfort and efficiency.',
    features: ['Electrical rewiring', 'Plumbing updates', 'HVAC installation', 'Smart home integration']
  },
  {
    icon: Shield,
    title: 'Weatherproofing',
    description: 'Protect your investment with comprehensive weatherproofing and insulation solutions.',
    features: ['Insulation upgrade', 'Window replacement', 'Siding repair', 'Moisture control']
  },
  {
    icon: Wrench,
    title: 'Kitchen & Bath',
    description: 'Complete kitchen and bathroom renovations that blend modern functionality with timeless style.',
    features: ['Custom cabinetry', 'Countertop installation', 'Fixture upgrades', 'Tile work']
  },
  {
    icon: Home,
    title: 'Exterior Revival',
    description: 'Enhance curb appeal and protect your home with comprehensive exterior restoration services.',
    features: ['Siding replacement', 'Roof repair', 'Landscaping', 'Porch restoration']
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Complete Home Transformation Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From structural repairs to interior design, we handle every aspect of your 
            home renovation with expert craftsmanship and attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-colors duration-300">
                <service.icon className="h-7 w-7 text-amber-600 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href='#contact'>
          <button className="bg-amber-600 text-white px-8 py-4 rounded-xl hover:bg-amber-700 transition-colors font-semibold">
            Get Custom Quote
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;