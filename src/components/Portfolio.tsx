import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Move } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Colonial Farmhouse',
    location: 'Charleston, SC',
    date: '2023',
    before: 'https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-a92c-622f-83dd-361a65a4da98/raw?se=2025-08-16T14%3A04%3A45Z&sp=r&sv=2024-08-04&sr=b&scid=e687026b-ae1b-5f23-a72b-f4b604f567a0&skoid=e9d2f8b1-028a-4cff-8eb1-d0e66fbefcca&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-16T00%3A25%3A48Z&ske=2025-08-17T00%3A25%3A48Z&sks=b&skv=2024-08-04&sig=oA3P5NcQa70g/%2BOQCjQcrTyaTlI12wCh5qeleZzbK0Q%3D',
    after: 'https://i.pinimg.com/564x/63/f7/99/63f79916066d6b536c401cea791fc3a9.jpg',
    description: 'Restored 18th-century farmhouse featuring original hardwood floors and custom millwork throughout.',
  }
];

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
    setSliderPosition(50);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
    setSliderPosition(50);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };
  const currentProject = projects[activeProject];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Our Transformation Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've brought new life to historic homes across the country, 
            preserving their character while creating modern living spaces.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  {currentProject.title}
                </h3>
                <div className="flex items-center space-x-4 text-gray-600">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{currentProject.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{currentProject.date}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevProject}
                  className="p-2 rounded-lg border border-gray-300 hover:border-amber-600 hover:text-amber-600 transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextProject}
                  className="p-2 rounded-lg border border-gray-300 hover:border-amber-600 hover:text-amber-600 transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              {currentProject.description}
            </p>

            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Move className="h-4 w-4" />
                <span>Drag the slider to see the transformation</span>
              </div>
            </div>

            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveProject(index);
                    setSliderPosition(50);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeProject ? 'bg-amber-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          <div 
            className="relative rounded-2xl overflow-hidden shadow-2xl cursor-col-resize select-none"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
          >
            {/* After image (background) */}
            <div className="relative w-full h-96 lg:h-[500px]">
              <img 
                src={currentProject.after}
                alt={`${currentProject.title} after renovation`}
                className="h-full object-fit"
                style={{ width: `${100 * (800 / sliderPosition)}px`, minWidth: '700px' }}
                draggable={false}
              />
              
              {/* Before image (clipped overlay) */}
              <div 
                className="absolute top-0 left-0 h-full overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img 
                  src={currentProject.before}
                  alt={`${currentProject.title} before renovation`}
                  className="h-full object-fit"
                  style={{ width: `${100 * (800 / sliderPosition)}px`, minWidth: '700px' }}
                  draggable={false}
                />
              </div>
              
              {/* Slider handle */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-col-resize z-10"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <Move className="h-4 w-4 text-gray-600" />
                </div>
              </div>
              
              {/* Labels */}
              <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                Before
              </div>
              <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                After
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;