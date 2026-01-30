
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ExternalLink } from 'lucide-react';

// Use the canonical profile URL (no share params) to ensure it always opens the correct account.
const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/alf_services/";

// Instagram post data with actual links to posts
const instagramPosts = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1605117882932-f9e32b03fea9',
    caption: 'Professional aircon installation for residential properties.',
    likes: 45,
    date: '2 days ago',
    postUrl: INSTAGRAM_PROFILE_URL
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1581147036310-7b6a00b8cf11',
    caption: 'Commercial electrical services done right the first time.',
    likes: 38,
    date: '3 days ago',
    postUrl: INSTAGRAM_PROFILE_URL
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc',
    caption: 'Emergency electrical repairs available 24/7.',
    likes: 52,
    date: '5 days ago',
    postUrl: INSTAGRAM_PROFILE_URL
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    caption: 'Aircon maintenance to keep your system running efficiently.',
    likes: 41,
    date: '1 week ago',
    postUrl: INSTAGRAM_PROFILE_URL
  },
  {
    id: '5',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    caption: 'Smart home electrical installations for modern living.',
    likes: 63,
    date: '1 week ago',
    postUrl: INSTAGRAM_PROFILE_URL
  },
  {
    id: '6',
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    caption: 'Quality workmanship on every job, big or small.',
    likes: 49,
    date: '2 weeks ago',
    postUrl: INSTAGRAM_PROFILE_URL
  }
];

const InstagramFeed = () => {
  return (
    <section id="instagram-feed" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Follow Our Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check out our latest work on Instagram. Follow us <a 
            href={INSTAGRAM_PROFILE_URL}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              @ALF_SERVICES
            </a> for more updates.
          </p>
        </div>
        
        <div className="relative px-8 md:px-12">
          <Carousel className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}>
            <CarouselContent className="-ml-4">
              {instagramPosts.map((post) => (
                <CarouselItem key={post.id} className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <a 
                    href={post.postUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block service-card overflow-hidden group"
                  >
                    <div className="relative overflow-hidden rounded-md">
                      <img 
                        src={post.imageUrl} 
                        alt={post.caption} 
                        className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <ScrollArea className="h-24">
                          <p className="text-white text-sm">{post.caption}</p>
                        </ScrollArea>
                        <div className="flex justify-between items-center mt-2 text-white text-xs">
                          <span>{post.likes} likes</span>
                          <span className="flex items-center gap-1">
                            <ExternalLink size={12} /> View post
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 shadow-md" />
            <CarouselNext className="right-0 shadow-md" />
          </Carousel>
        </div>
        
        <div className="text-center mt-8">
          <a 
            href={INSTAGRAM_PROFILE_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            <span>View More on Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
