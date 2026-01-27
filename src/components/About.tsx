import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import aboutPhoto from '@/assets/about-photo.jpg';

const About = () => {
  const benefits = [
    "Licensed and certified professionals",
    "10+ years of industry experience",
    "Quality workmanship guarantee",
    "Upfront pricing with no hidden fees",
    "Emergency service available 24/7",
    "Fully insured for your peace of mind"
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src={aboutPhoto} 
                alt="ALF Electrical and Aircon technician" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg md:max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-accent text-white p-2 rounded-full">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-bold">100% Satisfaction</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Our work isn't done until you're completely satisfied with our service.
              </p>
            </div>
          </div>
          
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sydney's Trusted Electrical & Aircon Specialists
            </h2>
            <p className="text-gray-600 mb-6">
              At ALF Electrical and Aircon, we've been providing top-quality electrical and air conditioning services to homes and businesses across Sydney for over a decade. Our team of certified professionals is committed to delivering reliable, efficient, and safe solutions for all your needs.
            </p>
            <p className="text-gray-600 mb-8">
              Whether you're facing an electrical emergency, need a new air conditioning system, or require regular maintenance, we're here to help with prompt, professional service that exceeds your expectations.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-accent" size={20} />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button className="btn-primary">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
