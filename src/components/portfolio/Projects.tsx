import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Server, Shield, Database, Clock, ChevronRight } from "lucide-react";

const Projects = () => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(new Set());
  const projectRefs = useRef([]);

  const projects = [
    {
      title: "Enterprise Job Scheduler with Quartz",
      description: "Architected scalable task orchestration platform supporting runtime job configuration, dependency chains, and distributed execution with comprehensive monitoring and failure recovery.",
      longDescription: "Built a robust enterprise-grade job scheduling system using Quartz framework integrated with Spring Boot. The platform handles complex job dependencies, provides real-time monitoring dashboards, and ensures reliable task execution across distributed environments.",
      icon: Clock,
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "Runtime job configuration and dependency management",
        "Persistent job storage with PostgreSQL integration",
        "Real-time monitoring dashboards with detailed metrics",
        "Failure notification systems and recovery mechanisms",
        "Distributed execution across multiple nodes",
        "RESTful APIs for job management and monitoring"
      ],
      technologies: ["Java 8+", "Spring Boot", "Quartz Scheduler", "PostgreSQL", "Redis", "REST APIs", "Maven"],
      highlights: [
        "Reduced manual intervention by 80% through automation",
        "Improved system reliability with failure recovery",
        "Scalable architecture supporting distributed execution"
      ]
    },
    {
      title: "Enterprise API Gateway with Identity Management",
      description: "Architected scalable microservices gateway handling authentication, authorization, and traffic management for distributed system architecture with comprehensive security features.",
      longDescription: "Developed a comprehensive API Gateway solution that serves as the central entry point for microservices architecture. Integrated advanced identity management with Keycloak SSO and implemented sophisticated traffic management patterns.",
      icon: Shield,
      gradient: "from-emerald-500 to-teal-500",
      features: [
        "Keycloak SSO integration with role-based access control",
        "Service mesh communication patterns implementation",
        "Dynamic routing and load balancing capabilities",
        "API rate limiting and throttling mechanisms",
        "Request/response transformation middleware",
        "Comprehensive logging and monitoring systems",
        "Automated deployment pipelines with Docker"
      ],
      technologies: ["Spring Cloud Gateway", "Keycloak", "OAuth2", "JWT", "Docker", "Kubernetes", "Microservices"],
      highlights: [
        "Centralized authentication for 15+ microservices",
        "Improved API performance by 40% through optimized routing",
        "Enhanced security with comprehensive access control"
      ]
    },
    {
      title: "Multi-Tenant Data Processing Engine",
      description: "Built Java-based ETL framework with pluggable transformation modules, schema-agnostic data mapping engine supporting complex business rules and real-time processing workflows.",
      longDescription: "Developed a sophisticated data processing engine capable of handling multi-tenant data transformations with flexible business rule configurations and real-time processing capabilities.",
      icon: Database,
      gradient: "from-purple-500 to-indigo-500",
      features: [
        "Pluggable transformation modules for flexible processing",
        "Schema-agnostic data mapping with dynamic configurations",
        "Real-time processing workflows with Apache Kafka",
        "Complex business rules engine with custom DSL",
        "Multi-tenant data isolation and security",
        "Performance monitoring and optimization tools"
      ],
      technologies: ["Java 8+", "Spring Boot", "Apache Kafka", "ElasticSearch", "PostgreSQL", "Hibernate"],
      highlights: [
        "Processed 1M+ records daily with 99.9% accuracy",
        "Reduced data processing time by 60%",
        "Scalable architecture supporting multiple tenants"
      ]
    },
    {
      title: "Subscription Management System",
      description: "Engineered comprehensive subscription-tier enforcement with granular feature toggles, usage quota tracking, and automated billing integration for SaaS applications.",
      longDescription: "Created a complete subscription management solution with sophisticated feature control, usage monitoring, and billing integration designed for modern SaaS applications.",
      icon: Server,
      gradient: "from-orange-500 to-red-500",
      features: [
        "Granular feature toggles and access control",
        "Usage quota tracking and enforcement",
        "Automated billing integration with payment gateways",
        "Subscription tier management and upgrades",
        "Analytics dashboard for usage insights",
        "API-first design for third-party integrations"
      ],
      technologies: ["Spring Boot", "Spring Security", "PostgreSQL", "Redis", "Payment APIs", "REST APIs"],
      highlights: [
        "Automated billing for 100+ enterprise clients",
        "Flexible subscription model supporting custom plans",
        "Real-time usage tracking and notifications"
      ]
    }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observers = projectRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleProjects(prev => new Set([...prev, index]));
            }, index * 200); // Staggered animation
          }
        },
        { threshold: 0.2 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section id="projects" className="py-16 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Refined Section Header */}
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
              <div className="w-12 h-12 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                <Server className="w-6 h-6 text-blue-500" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
              Key Projects
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Enterprise-grade backend solutions I've architected and developed, showcasing 
              expertise in scalable systems, security, and modern development practices.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Refined Projects Grid */}
          <div className="grid gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              const isVisible = visibleProjects.has(index);
              const isHovered = hoveredProject === index;
              
              return (
                <div
                  key={index}
                  ref={el => projectRefs.current[index] = el}
                  className={`transform transition-all duration-700 ${
                    isVisible 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-16 opacity-0'
                  }`}
                  style={{ transitionDelay: isVisible ? '0ms' : `${index * 100}ms` }}
                >
                  <Card 
                    className={`
                      group relative overflow-hidden border-0 shadow-lg transition-all duration-500
                      ${isHovered ? 'scale-[1.01] shadow-2xl' : 'hover:scale-[1.005]'}
                      bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm
                    `}
                    onMouseEnter={() => setHoveredProject(index)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    {/* Refined Background Gradient */}
                    <div className={`
                      absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 
                      group-hover:opacity-3 transition-opacity duration-500
                    `} />
                    
                    <CardHeader className="relative z-10 pb-4">
                      <div className="flex items-start gap-4">
                        {/* Refined Icon */}
                        <div className={`
                          w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-xl 
                          flex items-center justify-center shrink-0 shadow-md
                          transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-2
                        `}>
                          <IconComponent className="w-6 h-6 text-white drop-shadow-sm" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <CardTitle className={`
                            text-xl sm:text-2xl mb-2 font-bold bg-gradient-to-r from-gray-900 to-gray-600 
                            dark:from-white dark:to-gray-300 bg-clip-text text-transparent
                            transform transition-all duration-300 group-hover:translate-x-1
                          `}>
                            {project.title}
                          </CardTitle>
                          <p className={`
                            text-muted-foreground mb-3 text-sm sm:text-base leading-relaxed
                            transform transition-all duration-300 group-hover:translate-x-1
                          `}>
                            {project.description}
                          </p>
                          <p className={`
                            text-xs sm:text-sm text-muted-foreground/80 leading-relaxed
                            transform transition-all duration-300 group-hover:translate-x-1
                          `}>
                            {project.longDescription}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6 relative z-10 pt-0">
                      {/* Refined Key Features */}
                      <div className="transform transition-all duration-500 group-hover:translate-x-1">
                        <h4 className="font-semibold text-base mb-3 flex items-center gap-2">
                          <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'rotate-90' : ''}`} />
                          Key Features
                        </h4>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {project.features.map((feature, featureIndex) => (
                            <li 
                              key={featureIndex} 
                              className={`
                                flex items-start gap-2 text-muted-foreground group/feature
                                transform transition-all duration-300
                                ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
                              `}
                              style={{ 
                                transitionDelay: isVisible ? `${featureIndex * 50 + 300}ms` : '0ms' 
                              }}
                            >
                              <div className={`
                                w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full mt-1.5 shrink-0
                                transform transition-all duration-300 group-hover/feature:scale-125
                              `}></div>
                              <span className="text-xs sm:text-sm leading-relaxed group-hover/feature:text-foreground transition-colors duration-300">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Refined Technologies */}
                      <div className="transform transition-all duration-500 group-hover:translate-x-1">
                        <h4 className="font-semibold text-base mb-3 flex items-center gap-2">
                          <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'rotate-90' : ''}`} />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex} 
                              className={`
                                relative overflow-hidden bg-gradient-to-r ${project.gradient} text-white 
                                border-0 shadow-sm hover:shadow-md transition-all duration-300
                                hover:scale-105 hover:-translate-y-0.5 cursor-default text-xs
                                transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                              `}
                              style={{ 
                                transitionDelay: isVisible ? `${techIndex * 30 + 500}ms` : '0ms' 
                              }}
                            >
                              <span className="relative z-10 font-medium">{tech}</span>
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Refined Highlights */}
                      <div className="transform transition-all duration-500 group-hover:translate-x-1">
                        <h4 className="font-semibold text-base mb-3 flex items-center gap-2">
                          <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'rotate-90' : ''}`} />
                          Project Highlights
                        </h4>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, highlightIndex) => (
                            <li 
                              key={highlightIndex} 
                              className={`
                                flex items-start gap-3 text-muted-foreground group/highlight
                                transform transition-all duration-300
                                ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
                              `}
                              style={{ 
                                transitionDelay: isVisible ? `${highlightIndex * 100 + 600}ms` : '0ms' 
                              }}
                            >
                              <div className={`
                                w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mt-1.5 shrink-0
                                transform transition-all duration-300 group-hover/highlight:scale-125
                                shadow-sm
                              `}></div>
                              <span className="text-xs sm:text-sm font-medium leading-relaxed group-hover/highlight:text-foreground transition-colors duration-300">
                                {highlight}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Refined Project Actions */}
                      <div className="flex flex-wrap gap-3 pt-4 relative transform transition-all duration-500 group-hover:translate-x-1">
                        <div className="relative">
                          <Button 
                            variant="default"
                            size="sm"
                            onMouseEnter={() => setHoveredButton(`demo-${index}`)}
                            onMouseLeave={() => setHoveredButton(null)}
                            className={`
                              bg-gradient-to-r ${project.gradient} border-0 text-white shadow-md
                              hover:shadow-lg hover:scale-105 transition-all duration-300
                              cursor-not-allowed opacity-75 relative overflow-hidden text-sm
                            `}
                          >
                            <ExternalLink className="w-4 h-4 mr-2 relative z-10" />
                            <span className="relative z-10">Live Demo</span>
                          </Button>
                          {hoveredButton === `demo-${index}` && (
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-md shadow-xl whitespace-nowrap z-20 animate-in fade-in slide-in-from-bottom-2 duration-200">
                              Available Soon
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-t-3 border-transparent border-t-gray-900"></div>
                            </div>
                          )}
                        </div>
                        
                        <div className="relative">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onMouseEnter={() => setHoveredButton(`code-${index}`)}
                            onMouseLeave={() => setHoveredButton(null)}
                            className={`
                              border-2 border-gray-300 hover:border-gray-400 dark:border-gray-600 dark:hover:border-gray-500
                              hover:bg-gray-50 dark:hover:bg-gray-800 hover:scale-105 transition-all duration-300
                              cursor-not-allowed opacity-75 relative overflow-hidden group/button text-sm
                            `}
                          >
                            <Github className="w-4 h-4 mr-2 transition-transform duration-300 group-hover/button:rotate-12" />
                            <span>Source Code</span>
                          </Button>
                          {hoveredButton === `code-${index}` && (
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-md shadow-xl whitespace-nowrap z-20 animate-in fade-in slide-in-from-bottom-2 duration-200">
                              Available Soon
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-t-3 border-transparent border-t-gray-900"></div>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>

                    {/* Refined Decorative Elements */}
                    <div className={`
                      absolute top-4 right-4 w-16 h-16 bg-gradient-to-br ${project.gradient} 
                      rounded-full opacity-5 transform transition-all duration-700
                      ${isHovered ? 'scale-125 rotate-45' : 'scale-100 rotate-0'}
                    `} />
                    <div className={`
                      absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br ${project.gradient} 
                      rounded-full opacity-5 transform transition-all duration-700
                      ${isHovered ? 'scale-110 -rotate-45' : 'scale-100 rotate-0'}
                    `} />
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Refined Additional Projects Note */}
          <div className={`
            text-center mt-12 transform transition-all duration-700
            ${visibleProjects.size > 0 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
          `}>
            <Card className="shadow-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0 overflow-hidden relative group">
              {/* Refined Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              
              <CardContent className="p-8 relative z-10">
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-700">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-md transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-6">
                    <Github className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    More Projects Coming Soon
                  </h3>
                  <p className="text-muted-foreground mb-5 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                    I'm continuously working on new projects and expanding my portfolio. 
                    Check my GitHub for the latest updates and contributions.
                  </p>
                  <Button 
                    asChild
                    className={`
                      bg-gradient-to-r from-blue-500 to-purple-500 border-0 text-white shadow-md
                      hover:shadow-lg hover:scale-105 transition-all duration-300 relative overflow-hidden
                      group/cta px-6 py-2 font-semibold
                    `}
                  >
                    <a 
                      href="https://github.com/Amreshnit" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <Github className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover/cta:rotate-12" />
                      <span className="relative z-10">View GitHub Profile</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Enhanced Custom Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-in {
          animation-fill-mode: both;
        }
        
        .fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        
        .slide-in-from-bottom-2 {
          animation: slideInFromBottom2 0.3s ease-out;
        }
        
        .slide-in-from-bottom-4 {
          animation: slideInFromBottom4 0.5s ease-out;
        }
        
        .slide-in-from-bottom-8 {
          animation: slideInFromBottom8 0.7s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInFromBottom2 {
          from { transform: translateY(6px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes slideInFromBottom4 {
          from { transform: translateY(12px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes slideInFromBottom8 {
          from { transform: translateY(24px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Projects;