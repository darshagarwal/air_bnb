import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'San Francisco, CA',
    rating: 5,
    text: "HomeRevive transformed our 1905 Victorian into our dream home. They preserved all the original charm while making it completely modern and functional. The craftsmanship is exceptional.",
    project: 'Victorian Manor Revival'
  },
  {
    name: 'Michael Chen',
    location: 'Portland, OR',
    rating: 5,
    text: "We couldn't be happier with our Craftsman bungalow renovation. The team understood our vision perfectly and delivered beyond our expectations. Every detail was thoughtfully executed.",
    project: 'Craftsman Bungalow'
  },
  {
    name: 'Emily Rodriguez',
    location: 'Charleston, SC',
    rating: 5,
    text: "The attention to historical detail combined with modern amenities is incredible. Our colonial farmhouse feels like it was meant to be this beautiful all along. Outstanding work!",
    project: 'Colonial Farmhouse'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what homeowners have to say 
            about their transformation experience with HomeRevive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative">
              <Quote className="h-8 w-8 text-amber-600 mb-6" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600 mb-1">{testimonial.location}</div>
                <div className="text-xs text-amber-600 font-medium">{testimonial.project}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-white px-8 py-4 rounded-xl shadow-md border border-gray-100">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-lg font-semibold text-gray-900">
              4.9/5 Average Rating
            </div>
            <div className="text-gray-600">
              Based on 150+ reviews
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;