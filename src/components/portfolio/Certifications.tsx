import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Calendar, Coffee, Database, Shield, Cog, BookOpen, ChevronRight, Star } from "lucide-react";


const Certifications = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const certifications = [
    {
      title: "Java Algorithms",
      provider: "LinkedIn Learning",
      issueDate: "2024",
      credentialId: "0f1347ef6244ec8e7a948cfe50a4a6c739426524fe6780d23c20d98ed457d40e",
      description: "Advanced algorithms implementation in Java, covering data structures, sorting, searching, and optimization techniques.",
      icon: Coffee,
      skills: ["Algorithm Design", "Data Structures", "Java Programming", "Performance Optimization"],
      url: "https://www.linkedin.com/learning/certificates/0f1347ef6244ec8e7a948cfe50a4a6c739426524fe6780d23c20d98ed457d40e",
      color: "from-amber-500 to-orange-600"
    },
    {
      title: "Java: Objects and APIs",
      provider: "LinkedIn Learning",
      issueDate: "2024",
      credentialId: "ee798f45d5071eb3f4dc46e6e7475f28fed9d3b5290252b1764a8495dec178e2",
      description: "Object-oriented programming concepts, API design patterns, and best practices for Java development.",
      icon: Cog,
      skills: ["Object-Oriented Programming", "API Design", "Java Best Practices", "Software Architecture"],
      url: "https://www.linkedin.com/learning/certificates/ee798f45d5071eb3f4dc46e6e7475f28fed9d3b5290252b1764a8495dec178e2",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Java Memory Management: Garbage Collection, JVM Tuning, and Spotting Memory Leaks",
      provider: "LinkedIn Learning",
      issueDate: "2024",
      credentialId: "a210dd9c73fb08f485ab90975b75f45a8022193af44ac4b5abeab47cbb9afe41",
      description: "Advanced JVM concepts, memory optimization, garbage collection tuning, and performance debugging techniques.",
      icon: Database,
      skills: ["JVM Tuning", "Memory Optimization", "Garbage Collection", "Performance Monitoring"],
      url: "https://www.linkedin.com/learning/certificates/a210dd9c73fb08f485ab90975b75f45a8022193af44ac4b5abeab47cbb9afe41",
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Learning Java Collections",
      provider: "LinkedIn Learning",
      issueDate: "2024",
      credentialId: "9821d153a4fb95ad01676ec7427a1fdc09af156274b4d788ca03eb45bbf60d8d",
      description: "Comprehensive understanding of Java Collections Framework, including Lists, Sets, Maps, and advanced collection operations.",
      icon: BookOpen,
      skills: ["Java Collections", "Data Structures", "Stream API", "Collection Optimization"],
      url: "https://www.linkedin.com/learning/certificates/9821d153a4fb95ad01676ec7427a1fdc09af156274b4d788ca03eb45bbf60d8d",
      color: "from-purple-500 to-violet-600"
    },
    {
      title: "Learning Spring with Spring Boot",
      provider: "LinkedIn Learning",
      issueDate: "2024",
      credentialId: "dc1e6565e472bd9bf395ffdd624869c4792749ac32cc077748de7252727e62aa",
      description: "Modern Spring framework development with Spring Boot, including dependency injection, web development, and enterprise patterns.",
      icon: Shield,
      skills: ["Spring Framework", "Spring Boot", "Dependency Injection", "Web Development"],
      url: "https://www.linkedin.com/learning/certificates/dc1e6565e472bd9bf395ffdd624869c4792749ac32cc077748de7252727e62aa",
      color: "from-green-500 to-emerald-600"
    }
  ];

  const certificationStats = [
    {
      label: "Total Certifications",
      value: "5",
      icon: Award,
      color: "from-blue-500 to-purple-600",
    },
    {
      label: "Learning Hours",
      value: "40+",
      icon: BookOpen,
      color: "from-green-500 to-blue-600",
    },
    {
      label: "Skills Acquired",
      value: "15+",
      icon: Cog,
      color: "from-purple-500 to-pink-600",
    },
    {
      label: "Platform",
      value: "LinkedIn Learning",
      icon: ExternalLink,
      color: "from-orange-500 to-red-600",
    },
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute("data-index");
            if (index) {
              setVisibleItems((prev) => new Set([...prev, index]));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          {/* Animated Section Header */}
          <div 
            className={`text-center mb-16 transition-all duration-1000 ease-out ${
              visibleItems.has('header') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            data-animate
            data-index="header"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              <Star className="w-8 h-8 text-yellow-500 animate-pulse" />
              <h2 className="text-5xl font-black tracking-tight">Certifications</h2>
              <Star className="w-8 h-8 text-yellow-500 animate-pulse delay-300" />
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Continuous learning through professional certifications that enhance my technical expertise 
              and keep me updated with industry best practices.
            </p>
          </div>

          {/* Animated Certification Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {certificationStats.map((stat, index) => {
              const IconComponent = stat.icon;
              const isVisible = visibleItems.has(`stat-${index}`);
              return (
                <div
                  key={index}
                  className={`transition-all duration-700 ease-out ${
                    isVisible 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-8 scale-95'
                  } delay-${index * 150}`}
                  data-animate
                  data-index={`stat-${index}`}
                >
                  <Card className="text-center shadow-lg hover:shadow-2xl transition-all duration-500 group border-0 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                        <IconComponent className="w-8 h-8 text-white drop-shadow-sm" />
                      </div>
                      <div className="text-4xl font-bold bg-gradient-to-br from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
                        {stat.value}
                      </div>
                      <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Animated Certifications List */}
          <div className="grid gap-8">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              const isVisible = visibleItems.has(`cert-${index}`);
              const isHovered = hoveredCard === index;
              
              return (
                <div
                  key={index}
                  className={`transition-all duration-700 ease-out ${
                    isVisible 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-12'
                  } delay-${index * 200}`}
                  data-animate
                  data-index={`cert-${index}`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Card className={`shadow-xl hover:shadow-2xl transition-all duration-500 group border-0 bg-white/90 backdrop-blur-sm overflow-hidden relative hover-lift ${
                    isHovered ? 'scale-105 -translate-y-2' : ''
                  }`}>
                    {/* Animated background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    {/* Animated border */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                         style={{
                           mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                           maskComposite: 'xor',
                           padding: '2px'
                         }}></div>

                    <CardHeader className="relative">
                      <div className="flex items-start gap-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center shrink-0 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                          <IconComponent className="w-8 h-8 text-white drop-shadow-sm" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                            <div className="space-y-3">
                              <CardTitle className="text-2xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors duration-300 line-clamp-2">
                                {cert.title}
                              </CardTitle>
                              
                              <div className="flex flex-wrap items-center gap-6 text-slate-500">
                                <div className="flex items-center gap-2 group-hover:text-blue-600 transition-colors duration-300">
                                  <Award className="w-5 h-5" />
                                  <span className="font-semibold">{cert.provider}</span>
                                </div>
                                <div className="flex items-center gap-2 group-hover:text-green-600 transition-colors duration-300">
                                  <Calendar className="w-5 h-5" />
                                  <span className="font-medium">{cert.issueDate}</span>
                                </div>
                              </div>
                              
                              <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                                {cert.description}
                              </p>
                              
                              <div className="text-xs text-slate-400 font-mono bg-slate-50 px-3 py-1 rounded-lg inline-block">
                                ID: {cert.credentialId.substring(0, 20)}...
                              </div>
                            </div>
                            
                            <div className="shrink-0">
                              <Button 
                                className={`bg-gradient-to-r ${cert.color} hover:shadow-lg hover:scale-105 transform transition-all duration-300 text-white border-0 group-hover:shadow-xl`}
                                size="sm" 
                                asChild
                              >
                                <a 
                                  href={cert.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2"
                                >
                                  <ExternalLink className="w-4 h-4" />
                                  Verify
                                  <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                                </a>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="relative">
                      <div className="space-y-4">
                        <h4 className="font-bold text-slate-700 flex items-center gap-2">
                          <Star className="w-5 h-5 text-yellow-500" />
                          Skills Demonstrated:
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {cert.skills.map((skill, skillIndex) => (
                            <Badge 
                              key={skillIndex} 
                              className={`bg-gradient-to-r ${cert.color} text-white border-0 px-3 py-1 font-medium shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300 delay-${skillIndex * 100}`}
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Animated Additional Learning Section */}
          <div 
            className={`text-center mt-16 transition-all duration-1000 ease-out delay-1000 ${
              visibleItems.has('footer') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            data-animate
            data-index="footer"
          >
            <Card className="shadow-2xl bg-gradient-to-br from-white via-blue-50/50 to-purple-50/30 border-0 backdrop-blur-sm overflow-hidden relative group">
              {/* Animated background pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Floating particles effect */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-2 h-2 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20 animate-pulse delay-${i * 500}`}
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + (i % 2) * 40}%`,
                      animationDuration: `${3 + i}s`
                    }}
                  ></div>
                ))}
              </div>

              <CardContent className="p-10 relative">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <BookOpen className="w-8 h-8 text-blue-600 animate-bounce" />
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Continuous Learning Journey
                  </h3>
                  <BookOpen className="w-8 h-8 text-purple-600 animate-bounce delay-300" />
                </div>
                
                <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                  I believe in continuous learning and staying updated with the latest technologies. 
                  Currently pursuing additional certifications in cloud platforms and advanced Java frameworks.
                </p>
                
                <div className="flex justify-center gap-6">
                  <Button 
                    className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white border-0 px-8 py-3 text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300 group"
                    asChild
                  >
                    <a 
                      href="https://www.linkedin.com/in/amresh-kumar-467069183/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3"
                    >
                      <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                      View All Certifications
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </Button>
                </div>

                {/* Animated progress indicators */}
                <div className="flex justify-center gap-2 mt-8">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i}
                      className={`w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 transition-all duration-500 delay-${i * 200} ${
                        visibleItems.has('footer') ? 'opacity-100 scale-100' : 'opacity-30 scale-50'
                      }`}
                    ></div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Custom animations using inline styles */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          
          @keyframes gradient-shift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          .shimmer {
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            background-size: 200% 100%;
            animation: shimmer 2s infinite;
          }
          
          .animate-gradient-text {
            background-size: 200% 200%;
            animation: gradient-shift 3s ease infinite;
          }
          
          .glass-effect {
            backdrop-filter: blur(16px) saturate(180%);
            background-color: rgba(255, 255, 255, 0.75);
            border: 1px solid rgba(255, 255, 255, 0.125);
          }
          
          .hover-lift:hover {
            transform: scale(1.05) translateY(-4px);
          }
          
          .delay-100 { animation-delay: 100ms; }
          .delay-200 { animation-delay: 200ms; }
          .delay-300 { animation-delay: 300ms; }
          .delay-400 { animation-delay: 400ms; }
          .delay-500 { animation-delay: 500ms; }
          .delay-600 { animation-delay: 600ms; }
          .delay-700 { animation-delay: 700ms; }
          .delay-800 { animation-delay: 800ms; }
          .delay-1000 { animation-delay: 1000ms; }
        `}
      </style>
    </section>
  );
};


export default Certifications;