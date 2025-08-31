import { Button } from "@/components/ui/button";
import { Github, Linkedin, Code2, Mail, Phone, MapPin, Heart, Download, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Amreshnit",
      label: "GitHub",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/amresh-kumar-467069183/",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: Code2,
      href: "https://leetcode.com/u/qoHaLDRJ8N/",
      label: "LeetCode",
      color: "hover:text-orange-400"
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/919122501795",
      label: "WhatsApp",
      color: "hover:text-green-500"
    },
    {
      icon: Mail,
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=amreshnitjsr09@gmail.com&su=Hello%20Amresh&body=Hi%20Amresh%2C%0A%0AI%20would%20like%20to%20get%20in%20touch%20with%20you.%0A%0ABest%20regards%2C",
      label: "Email",
      color: "hover:text-red-400"
    }
  ];



  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div 
            className={`grid md:grid-cols-4 gap-8 mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* About Section */}
            <div className="md:col-span-2 space-y-6 animate-fadeInUp">
              <div>
                <h3 className="font-semibold mb-4 text-lg relative">
                  About
                  <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
                </h3>
                <div className="relative group">
                  <p className="text-muted-foreground max-w-md leading-relaxed transform transition-all duration-500 hover:text-foreground">
                    Java Backend Developer passionate about building scalable, secure, and efficient 
                    backend systems. Always learning and growing in the world of technology.
                  </p>
                  <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3 text-foreground">Contact Information</h4>
                <div className="space-y-3">
                  {[
                    { 
                      icon: MapPin, 
                      text: "Sasaram, Bihar, India", 
                      href: "https://www.google.com/maps/search/?api=1&query=JAY+MAHAVEER+REAL+ESTATE%2C+Patel+Bhavan%2C+Patel+Nagar%2C+Ambedkar+path+Badhaiyabag%2C+Takiya%2C+Sasaram%2C+Bihar+821113" 
                    },
                    { icon: Phone, text: "+91 9122501795", href: "tel:+919122501795" },
                    { 
                      icon: Mail, 
                      text: "amreshnitjsr09@gmail.com", 
                      href: "https://mail.google.com/mail/?view=cm&fs=1&to=amreshnitjsr09@gmail.com&su=Hello%20Amresh&body=Hi%20Amresh%2C%0A%0AI%20would%20like%20to%20get%20in%20touch%20with%20you.%0A%0ABest%20regards%2C"
                    }
                  ].map((item, index) => {
                    const IconComponent = item.icon;
                    const content = (
                      <div className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-all duration-300 transform hover:translate-x-2 group cursor-pointer">
                        <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                          <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <span className="group-hover:font-medium transition-all duration-300">{item.text}</span>
                      </div>
                    );

                    return (
                      <div 
                        key={index}
                        style={{ animationDelay: `${index * 0.1}s` }}
                        className="animate-fadeInUp"
                      >
                        {item.href ? (
                          <a href={item.href} target="_blank" rel="noopener noreferrer">
                            {content}
                          </a>
                        ) : (
                          content
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <h3 className="font-semibold mb-6 text-lg relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li 
                    key={index}
                    className="transform transition-all duration-300 hover:translate-x-2"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm relative group flex items-center gap-2"
                    >
                      <div className="w-1 h-1 rounded-full bg-muted-foreground group-hover:bg-primary group-hover:w-2 transition-all duration-300"></div>
                      <span className="group-hover:font-medium">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <h3 className="font-semibold mb-6 text-lg relative">
                Connect With Me
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 text-muted-foreground ${social.color} transition-all duration-300 group transform hover:translate-x-2 hover:scale-105`}
                      style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-muted group-hover:bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:shadow-lg">
                        <IconComponent className="w-5 h-5 group-hover:scale-110 transition-all duration-300" />
                      </div>
                      <span className="text-sm group-hover:font-medium transition-all duration-300">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Animated Divider */}
          <div className="relative my-8">
            <div className="border-t border-border"></div>
            <div className="absolute top-0 left-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent w-full transform scale-x-0 animate-scale-x"></div>
          </div>

                      {/* Bottom Section */}
          <div 
            className={`flex flex-col md:flex-row justify-between items-center gap-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ animationDelay: '0.8s' }}
          >
            {/* Copyright with animated heart */}
            <div className="flex items-center gap-3 text-sm text-muted-foreground group">
              <span className="transition-colors duration-300 group-hover:text-foreground">
                © {new Date().getFullYear()} Amresh Kumar. All Rights Reserved.
              </span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Made with love
              </span>
            </div>

            {/* Professional Links */}
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted-foreground">Available for opportunities</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>

            {/* Animated Resume Download Button */}
            <div className="group">
              <Button 
                variant="outline" 
                size="sm" 
                asChild
                className="relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 border-primary/20 hover:border-primary/40"
              >
                <a 
                  href="/resume.pdf" 
                  download="Amresh_Kumar_Resume.pdf"
                  className="flex items-center gap-2 relative z-10"
                >
                  <Download className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5" />
                  <span className="font-medium">Download Resume</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </a>
              </Button>
            </div>
          </div>

          {/* Scroll to Top Indicator */}
          <div className="mt-8 flex justify-center">
            <div className="w-6 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes scale-x {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-scale-x {
          animation: scale-x 2s ease-out 0.5s forwards;
        }

        /* Floating animation for logo */
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(2deg); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        /* Pulse glow effect */
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6), 0 0 60px rgba(147, 51, 234, 0.3); }
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        /* Typing animation for description */
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink {
          0%, 50% { border-color: transparent; }
          51%, 100% { border-color: currentColor; }
        }

        .animate-typing {
          overflow: hidden;
          border-right: 2px solid;
          white-space: nowrap;
          animation: typing 3s steps(40) 1s forwards, blink 1s infinite;
          width: 0;
        }
      `}</style>
    </footer>
  );
};

export default Footer;