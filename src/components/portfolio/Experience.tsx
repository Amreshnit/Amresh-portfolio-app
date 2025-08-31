import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2, Award, Briefcase } from "lucide-react";

// Custom Java Logo Component
const JavaLogo = ({ className = "w-6 h-6" }) => (
  <div className={`${className} flex items-center justify-center`}>
    <div className="text-white font-black text-xs bg-gradient-to-br from-orange-500 to-red-600 rounded px-1 shadow-inner">
      JAVA
    </div>
  </div>
);

// Custom Spring Boot Logo Component  
const SpringBootLogo = ({ className = "w-6 h-6" }) => (
  <div className={`${className} flex items-center justify-center`}>
    <div className="text-white font-bold text-xs bg-gradient-to-br from-green-500 to-green-700 rounded px-1 shadow-inner">
      🍃
    </div>
  </div>
);

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const experiences = [
    {
      title: "Java Backend Developer",
      company: "Kanerika Software Pvt. Ltd",
      location: "Hyderabad, India",
      period: "June 2023 - Present",
      type: "Full-time",
      description: "Developing enterprise backend solutions with focus on scalable API architecture, authentication systems, and data processing frameworks.",
      responsibilities: [
        "REST API Architecture & Optimization: Refactored legacy endpoints, implemented connection pooling and response caching for improved performance",
        "Authentication & Security Integration: Integrated Keycloak for centralized identity management and Microsoft Entra OAuth2 for enterprise SSO",
        "Data Processing & ETL Framework: Built Java-based ETL framework with pluggable transformation modules and real-time processing workflows",
        "Subscription Management System: Engineered subscription-tier enforcement with granular feature toggles and usage quota tracking",
        "Multi-Tenant Security Framework: Designed hierarchical RBAC system with tenant isolation and custom permission matrices",
        "Business Intelligence Dashboard: Created analytics platform using JPA CriteriaBuilder for advanced filtering and real-time KPI monitoring",
        "Job Orchestration & Automation: Built Quartz-based scheduler with dynamic job registration and failure recovery mechanisms"
      ],
      technologies: ["Java 8+", "Spring Boot", "Spring Security", "Keycloak", "OAuth2", "PostgreSQL", "AWS", "Docker", "Microservices"],
      icon: JavaLogo,
      color: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50"
    },
    {
      title: "Backend Developer Intern",
      company: "Kanerika Software Pvt. Ltd",
      location: "Hyderabad, India",
      period: "January 2023 - June 2023",
      type: "Internship",
      description: "Gained hands-on experience in Java backend development, working on real-world projects and learning enterprise development practices.",
      responsibilities: [
        "Assisted in developing REST API endpoints using Spring Boot framework",
        "Learned authentication and authorization implementation with Spring Security",
        "Participated in code reviews and followed industry best practices",
        "Worked with database operations using JPA and Hibernate",
        "Contributed to testing and documentation of backend services",
        "Collaborated with senior developers on feature implementation"
      ],
      technologies: ["Java", "Spring Boot", "Spring MVC", "JPA", "Hibernate", "MySQL", "Git", "Maven"],
      icon: SpringBootLogo,
      color: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50"
    }
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const index = element.dataset.index;
            if (index) {
              setVisibleItems(prev => new Set([...prev, index]));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });
    
    return () => {
      elements.forEach(el => {
        if (observerRef.current) {
          observerRef.current.unobserve(el);
        }
      });
    };
  }, []);

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-blue-400 to-green-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Animated Section Header */}
          <div 
            className="text-center mb-16 transform transition-all duration-1000 ease-out"
            data-animate="true"
            data-index="header"
            style={{
              opacity: visibleItems.has('header') ? 1 : 0,
              transform: visibleItems.has('header') ? 'translateY(0px)' : 'translateY(50px)'
            }}
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <Briefcase className="w-8 h-8 text-blue-600 animate-bounce" />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Professional Experience
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              My journey in backend development, building scalable solutions and gaining valuable industry experience.
            </p>
            <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Animated Experience Timeline */}
          <div className="relative">
            {/* Enhanced Timeline line with gradient */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 hidden md:block rounded-full shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full animate-pulse opacity-75"></div>
            </div>

            <div className="space-y-16">
              {experiences.map((exp, index) => {
                const IconComponent = exp.icon;
                const isVisible = visibleItems.has(index.toString());
                const isHovered = hoveredCard === index;
                
                return (
                  <div 
                    key={index} 
                    className="relative"
                    data-animate="true"
                    data-index={index.toString()}
                  >
                    {/* Enhanced Timeline dot with pulsing animation */}
                    <div className="absolute left-6 w-6 h-6 hidden md:block">
                      <div 
                        className={`w-full h-full bg-gradient-to-r ${exp.color} rounded-full shadow-xl transform transition-all duration-500`}
                        style={{ 
                          transform: isVisible ? 'scale(1)' : 'scale(0)',
                          transitionDelay: `${index * 200}ms`
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full animate-spin"></div>
                        <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                          <IconComponent className="w-3 h-3" />
                        </div>
                      </div>
                      {/* Pulsing ring */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-full animate-ping opacity-20`}></div>
                    </div>
                    
                    <div 
                      className="md:ml-16 transform transition-all duration-700 ease-out"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateX(0px)' : 'translateX(32px)',
                        transitionDelay: `${index * 200}ms`
                      }}
                    >
                      <Card 
                        className={`group relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br ${exp.bgGradient} dark:from-gray-900 dark:to-gray-800 transform hover:scale-[1.02]`}
                        style={{ transform: isHovered ? 'scale(1.02)' : 'scale(1)' }}
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        {/* Card glow effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                        
                        {/* Animated border */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        
                        <CardHeader className="relative z-10">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                            <div className="space-y-3">
                              <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-xl bg-gradient-to-r ${exp.color} shadow-lg transform group-hover:rotate-12 transition-transform duration-300`}>
                                  <IconComponent className="w-6 h-6" />
                                </div>
                                <CardTitle className="text-2xl md:text-3xl bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent font-bold">
                                  {exp.title}
                                </CardTitle>
                              </div>
                              
                              <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400">
                                <div className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-300">
                                  <Building2 className="w-4 h-4" />
                                  <span className="font-medium">{exp.company}</span>
                                </div>
                                <div className="flex items-center gap-2 hover:text-green-600 transition-colors duration-300">
                                  <MapPin className="w-4 h-4" />
                                  <span>{exp.location}</span>
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                  <Calendar className="w-4 h-4" />
                                  <span>{exp.period}</span>
                                </div>
                                <Badge className={`bg-gradient-to-r ${exp.color} text-white border-0 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                                  {exp.type}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        
                        <CardContent className="space-y-8 relative z-10">
                          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                            {exp.description}
                          </p>
                          
                          <div className="space-y-4">
                            <h4 className="font-bold text-xl text-gray-800 dark:text-white flex items-center gap-2">
                              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                              Key Responsibilities & Achievements
                            </h4>
                            <ul className="space-y-3">
                              {exp.responsibilities.map((resp, respIndex) => (
                                <li 
                                  key={respIndex} 
                                  className="flex items-start gap-4 text-gray-700 dark:text-gray-300 group/item transform transition-all duration-500 hover:translate-x-2"
                                  style={{
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible ? 'translateX(0px)' : 'translateX(16px)',
                                    transitionDelay: `${(index * 200) + (respIndex * 100)}ms`
                                  }}
                                >
                                  <div className="relative mt-2">
                                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform group-hover/item:scale-125 transition-transform duration-300 shadow-md"></div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping opacity-30"></div>
                                  </div>
                                  <span className="text-sm md:text-base leading-relaxed group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-300">
                                    {resp}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="space-y-4">
                            <h4 className="font-bold text-xl text-gray-800 dark:text-white flex items-center gap-2">
                              <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                              Technologies Used
                            </h4>
                            <div className="flex flex-wrap gap-3">
                              {exp.technologies.map((tech, techIndex) => (
                                <Badge 
                                  key={techIndex}
                                  className="group/badge relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-400 shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300 cursor-pointer"
                                  style={{
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible ? 'translateY(0px)' : 'translateY(16px)',
                                    transitionDelay: `${(index * 200) + (techIndex * 50)}ms`
                                  }}
                                >
                                  {/* Animated background on hover */}
                                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover/badge:opacity-20 transition-opacity duration-300"></div>
                                  <span className="relative z-10 font-medium">{tech}</span>
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Floating Statistics */}
          <div 
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 transform transition-all duration-1000 ease-out"
            data-animate="true"
            data-index="stats"
            style={{
              opacity: visibleItems.has('stats') ? 1 : 0,
              transform: visibleItems.has('stats') ? 'translateY(0px)' : 'translateY(32px)'
            }}
          >
            {[
              { number: "2+", label: "Years Experience", icon: Calendar, color: "from-blue-500 to-cyan-500" },
              { number: "7+", label: "Key Projects", icon: Award, color: "from-purple-500 to-pink-500" },
              { number: "9+", label: "Technologies", icon: Building2, color: "from-green-500 to-blue-500" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index}
                  className="group text-center transform hover:scale-105 transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} shadow-xl mb-4 group-hover:shadow-2xl group-hover:rotate-6 transition-all duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;