
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')] bg-cover bg-center bg-no-repeat" />
      </div>
      
      <div className="container-custom relative z-10 pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Reliable Electrical & Aircon Services
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Your trusted professionals for all electrical repairs and air conditioning installations in Sydney.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary flex items-center gap-2">
                <Phone size={18} />
                <span>Request Service</span>
              </Button>
              <Button 
                variant="outline" 
                className="bg-white text-primary hover:bg-white/90 flex items-center gap-2"
              >
                <span>See Our Services</span>
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block animate-slide-up delay-300">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8">
              <h3 className="text-white text-xl font-semibold mb-4">Our Service Areas</h3>
              <ul className="grid grid-cols-2 gap-3 text-white/90">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  <span>Eastern Suburbs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  <span>Inner West</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  <span>Northern Beaches</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  <span>North Shore</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  <span>Western Sydney</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  <span>South Sydney</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <a 
            href="#services" 
            className="text-white bg-accent/80 hover:bg-accent rounded-full p-2 animate-bounce"
            aria-label="Scroll down"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
