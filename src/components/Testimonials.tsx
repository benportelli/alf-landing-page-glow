
import { useState } from 'react';

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Eastern Suburbs",
    text: "ALF Electrical fixed our power issue promptly and professionally. Their technician was knowledgeable and took the time to explain the problem. Highly recommend their services!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    location: "North Shore",
    text: "We had a new air conditioning system installed by ALF and couldn't be happier with the result. The team was efficient, clean, and the pricing was completely transparent.",
    rating: 5,
  },
  {
    name: "Emma Taylor",
    location: "Inner West",
    text: "Called ALF for an emergency electrical issue late at night. They responded quickly and resolved the problem without charging extra for after-hours service. Excellent customer service!",
    rating: 5,
  },
  {
    name: "David Wilson",
    location: "Northern Beaches",
    text: "ALF has been maintaining our office air conditioning systems for years. Their regular service keeps everything running smoothly and their team is always professional.",
    rating: 4,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      } else {
        stars.push(
          <svg key={i} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      }
    }
    return stars;
  };

  return (
    <section id="testimonials" className="section-padding bg-primary text-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Our Customers Say</h2>
          <p className="text-white/80">
            Don't just take our word for it - see what our satisfied customers have to say about our services.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-white text-gray-800 rounded-lg p-8 shadow-xl min-h-[320px]">
            <div className="flex flex-col md:flex-row md:items-center md:gap-6">
              <div className="mb-6 md:mb-0">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {testimonials[activeIndex].name.charAt(0)}
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex mb-2">
                  {renderStars(testimonials[activeIndex].rating)}
                </div>
                <blockquote className="text-lg md:text-xl italic mb-4">
                  "{testimonials[activeIndex].text}"
                </blockquote>
                <div>
                  <p className="font-semibold">{testimonials[activeIndex].name}</p>
                  <p className="text-gray-500">{testimonials[activeIndex].location}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <button 
              onClick={handlePrev}
              className="bg-white text-primary hover:bg-white/90 p-2 rounded-full shadow-lg"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === activeIndex ? 'bg-white scale-125' : 'bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="bg-white text-primary hover:bg-white/90 p-2 rounded-full shadow-lg"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
