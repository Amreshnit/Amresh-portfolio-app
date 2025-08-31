import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Mail, MapPin, Phone } from "lucide-react";

// Using your local image path
const profileImage = "/src/assets/amresh-profile.jpg";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [visibleElements, setVisibleElements] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    // Add CSS animations to the document head
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-10px) rotate(1deg); }
      }

      @keyframes floatSlow {
        0%, 100% { transform: translate(0, 0) scale(1); }
        33% { transform: translate(10px, -10px) scale(1.05); }
        66% { transform: translate(-5px, 5px) scale(0.95); }
      }

      @keyframes gradientShift {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }

      @keyframes pulseGlow {
        0%, 100% { opacity: 0.15; transform: scale(1); }
        50% { opacity: 0.25; transform: scale(1.02); }
      }

      @keyframes floatGentle {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-8px) rotate(1deg); }
      }

      @keyframes bounce {
        0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
        40%, 43% { transform: translate3d(0,-8px,0); }
        70% { transform: translate3d(0,-4px,0); }
        90% { transform: translate3d(0,-2px,0); }
      }
    `;
    document.head.appendChild(style);
    
    // Sophisticated staggered animation timing
    const intervals = [500, 800, 1100, 1400, 1700, 2000, 2300];
    
    intervals.forEach((delay, index) => {
      setTimeout(() => {
        setVisibleElements(prev => Math.max(prev, index + 1));
      }, delay);
    });

    // Cleanup function to remove the style when component unmounts
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

  const slideInVariants = {
    hidden: { opacity: 0, x: -40, rotate: -2 },
    visible: { opacity: 1, x: 0, rotate: 0 }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--background)) 40%, hsl(var(--primary) / 0.03) 100%)'
      }}
    >
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
            animation: 'float 20s ease-in-out infinite'
          }}
        />
        
        {/* Floating geometric shapes */}
        <div 
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{
            background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))',
            animation: 'floatSlow 15s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute bottom-1/3 left-1/5 w-80 h-80 rounded-full opacity-5 blur-3xl"
          style={{
            background: 'linear-gradient(45deg, hsl(var(--accent)), hsl(var(--secondary)))',
            animation: 'floatSlow 18s ease-in-out infinite reverse'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Column */}
            <div className="text-center lg:text-left space-y-8">
              {/* Badge with sophisticated entrance */}
              <div 
                className={`transform transition-all duration-1000 ease-out ${
                  visibleElements >= 1 
                    ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                    : 'opacity-0 translate-y-6 scale-95 blur-sm'
                }`}
              >
                <Badge
                  variant="secondary"
                  className="text-sm px-5 py-2 bg-primary/8 text-primary border-primary/15 hover:bg-primary/15 hover:border-primary/25 transition-all duration-500 shadow-sm"
                >
                  Software Engineer
                </Badge>
              </div>

              {/* Main heading with elegant stagger */}
              <div className="space-y-3">
                <div 
                  className={`transform transition-all duration-1200 ease-out ${
                    visibleElements >= 2
                      ? 'opacity-100 translate-y-0 blur-0'
                      : 'opacity-0 translate-y-8 blur-sm'
                  }`}
                >
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
                    Hi, I'm{" "}
                  </h1>
                </div>
                
                <div 
                  className={`transform transition-all duration-1200 ease-out delay-200 ${
                    visibleElements >= 3
                      ? 'opacity-100 translate-y-0 scale-100 blur-0'
                      : 'opacity-0 translate-y-8 scale-95 blur-sm'
                  }`}
                >
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    <span 
                      className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent"
                      style={{
                        backgroundSize: '200% 100%',
                        animation: 'gradientShift 8s ease-in-out infinite'
                      }}
                    >
                      Amresh Kumar
                    </span>
                  </h1>
                </div>

                <div 
                  className={`transform transition-all duration-1000 ease-out delay-300 ${
                    visibleElements >= 4
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-6'
                  }`}
                >
                  <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium tracking-wide">
                    Java Backend Developer
                  </h2>
                </div>
              </div>

              {/* Description with refined timing */}
              <div 
                className={`transform transition-all duration-1200 ease-out ${
                  visibleElements >= 5
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
              >
                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  Passionate Java Backend Developer with 2+ years of experience building scalable
                  REST APIs, authentication systems, and enterprise solutions. Specialized in
                  Spring Boot, microservices architecture, and cloud technologies.
                </p>
              </div>

              {/* Contact info with sophisticated stagger */}
              <div 
                className={`flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground transform transition-all duration-1000 ease-out ${
                  visibleElements >= 6
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
              >
                {[
                  { Icon: MapPin, text: "Sasaram, Bihar, India" },
                  { Icon: Phone, text: "+91 9122501795" },
                  { Icon: Mail, text: "amreshnitjsr09@gmail.com" }
                ].map(({ Icon, text }, index) => (
                  <div 
                    key={index}
                    className={`flex items-center gap-2 transform transition-all duration-800 ease-out hover:text-foreground hover:translate-x-1 ${
                      visibleElements >= 6 ? 'translate-x-0' : '-translate-x-4'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons with premium hover effects */}
              <div 
                className={`flex flex-col sm:flex-row gap-4 pt-4 transform transition-all duration-1200 ease-out ${
                  visibleElements >= 7
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <Button
                  asChild
                  variant="gradient"
                  size="lg"
                  className="text-base px-8 group relative overflow-hidden"
                  style={{
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
                    className="relative z-10 hover:scale-105 hover:shadow-lg"
                  >
                    Get In Touch
                  </a>
                </Button>

                <Button
                  asChild
                  variant="professional"
                  size="lg"
                  className="text-base px-8 hover:scale-105 hover:shadow-md transition-all duration-300"
                >
                  <a
                    href="#projects"
                    onClick={(e) => { e.preventDefault(); scrollTo("projects"); }}
                  >
                    View My Work
                  </a>
                </Button>
              </div>
            </div>

            {/* Profile Image Column with sophisticated animations */}
            <div className="flex justify-center lg:justify-end">
              <div 
                className={`relative transform transition-all duration-1500 ease-out ${
                  visibleElements >= 3
                    ? 'opacity-100 translate-x-0 scale-100 rotate-0'
                    : 'opacity-0 translate-x-8 scale-90 rotate-1'
                }`}
              >
                {/* Animated background glow */}
                <div 
                  className="absolute inset-0 rounded-3xl blur-2xl opacity-20 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))',
                    animation: 'pulseGlow 4s ease-in-out infinite'
                  }}
                />
                
                {/* Image container */}
                <div className="relative bg-card/80 backdrop-blur-sm p-2 rounded-3xl shadow-xl border border-white/10">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={profileImage}
                      alt="Amresh Kumar - Java Backend Developer"
                      className="w-80 h-80 object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                </div>
                
                {/* Floating elements with refined animations */}
                <div 
                  className={`absolute -top-4 -right-4 bg-success/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg border border-white/20 transform transition-all duration-1000 ease-out ${
                    visibleElements >= 7
                      ? 'opacity-100 translate-y-0 rotate-0 scale-100'
                      : 'opacity-0 -translate-y-4 -rotate-6 scale-90'
                  }`}
                  style={{
                    animation: visibleElements >= 7 ? 'floatGentle 6s ease-in-out infinite' : 'none'
                  }}
                >
                  Available for Work
                </div>
                
                <div 
                  className={`absolute -bottom-4 -left-4 bg-card/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-white/10 transform transition-all duration-1000 ease-out delay-200 ${
                    visibleElements >= 7
                      ? 'opacity-100 translate-y-0 rotate-0 scale-100'
                      : 'opacity-0 translate-y-4 rotate-6 scale-90'
                  }`}
                  style={{
                    animation: visibleElements >= 7 ? 'floatGentle 6s ease-in-out infinite reverse' : 'none'
                  }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">2+</div>
                    <div className="text-xs text-muted-foreground">Years Exp.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator with refined animation */}
          <div 
            className={`flex justify-center mt-20 transform transition-all duration-1000 ease-out ${
              visibleElements >= 7
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            <Button 
              asChild 
              variant="ghost" 
              size="icon" 
              className="hover:scale-110 transition-all duration-300"
              style={{
                animation: visibleElements >= 7 ? 'bounce 2s infinite' : 'none'
              }}
            >
              <a
                href="#about"
                aria-label="Scroll to About"
                onClick={(e) => { e.preventDefault(); scrollTo("about"); }}
              >
                <ArrowDown className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;