import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Cloud, Shield, Cog, GitBranch, Award, Target, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { category: "Languages", items: ["Java 8+", "SQL", "Bash"], icon: Code2, color: "from-blue-400 to-indigo-500" },
    { category: "Frameworks", items: ["Spring Boot", "Spring MVC", "Spring Security", "Hibernate"], icon: Cog, color: "from-emerald-400 to-teal-500" },
    { category: "Technologies", items: ["Keycloak", "OAuth2", "JWT", "REST APIs", "Apache Kafka"], icon: Shield, color: "from-violet-400 to-purple-500" },
    { category: "Databases", items: ["PostgreSQL", "MySQL", "Microsoft SQL Server"], icon: Database, color: "from-rose-400 to-pink-500" },
    { category: "Cloud & DevOps", items: ["AWS", "Azure", "Docker", "Git/GitHub"], icon: Cloud, color: "from-cyan-400 to-blue-500" },
    { category: "Architecture", items: ["Microservices", "Multi-tenant Systems", "RBAC", "ETL Pipelines"], icon: GitBranch, color: "from-orange-400 to-red-500" },
  ];

  const achievements = [
    {
      icon: TrendingUp,
      text: "Optimized API performance by eliminating redundant database queries and implementing connection pooling",
      metric: "40% faster"
    },
    {
      icon: Shield,
      text: "Successfully integrated Keycloak and Microsoft Entra OAuth2 for enterprise SSO solutions",
      metric: "100% secure"
    },
    {
      icon: Cog,
      text: "Built comprehensive ETL framework with pluggable transformation modules",
      metric: "5x efficiency"
    },
    {
      icon: Target,
      text: "Designed hierarchical RBAC system with tenant isolation and custom permission matrices",
      metric: "99.9% uptime"
    }
  ];

  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-200/40 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-300/60 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Animated Header */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block">
              <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 animate-pulse">
                About Me
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            </div>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mt-8 leading-relaxed">
              A dedicated Java Backend Developer passionate about building scalable, 
              secure, and efficient backend systems that power modern applications.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Professional Summary */}
            <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <Card className="bg-white/80 backdrop-blur-lg border-slate-200/60 shadow-xl hover:shadow-blue-200/50 transition-all duration-500 hover:scale-105 group">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-800">Professional Summary</h3>
                  </div>
                  <div className="space-y-6 text-slate-700 leading-relaxed">
                    <p className="hover:text-slate-900 transition-colors duration-300">
                      I'm a Java Backend Developer with <span className="text-blue-600 font-semibold">2+ years of professional experience</span> 
                      at Kanerika Software Pvt. Ltd, where I've been building enterprise-grade backend 
                      solutions since January 2023.
                    </p>
                    <p className="hover:text-slate-900 transition-colors duration-300">
                      My expertise lies in developing <span className="text-purple-600 font-semibold">scalable REST API architectures</span>, 
                      implementing robust authentication systems with Keycloak and OAuth2, and 
                      creating multi-tenant applications with role-based access control.
                    </p>
                    <p className="hover:text-slate-900 transition-colors duration-300">
                      I have hands-on experience with <span className="text-indigo-600 font-semibold">Spring Boot ecosystem</span>, 
                      microservices design patterns, and cloud platforms including AWS and Azure. 
                      I'm passionate about writing clean, maintainable code and following industry 
                      best practices.
                    </p>
                    <p className="hover:text-slate-900 transition-colors duration-300">
                      Currently focused on enhancing my skills in distributed systems, 
                      performance optimization, and modern DevOps practices while delivering 
                      reliable backend solutions for client-facing applications.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Key Achievements */}
              <Card className="bg-white/80 backdrop-blur-lg border-slate-200/60 shadow-xl hover:shadow-purple-200/50 transition-all duration-500 hover:scale-105 group">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-800">Key Achievements</h3>
                  </div>
                  <div className="space-y-4">
                    {achievements.map((achievement, index) => {
                      const IconComponent = achievement.icon;
                      return (
                        <div 
                          key={index}
                          className="flex items-start gap-4 p-4 rounded-lg bg-slate-50/80 hover:bg-blue-50/80 transition-all duration-300 group/item border border-slate-200/40 hover:border-blue-300/60 hover:shadow-md"
                          style={{ animationDelay: `${index * 200}ms` }}
                        >
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300 shadow-sm">
                            <IconComponent className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="text-slate-700 group-hover/item:text-slate-900 transition-colors duration-300">
                              {achievement.text}
                            </p>
                            <div className="mt-2">
                              <Badge className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-none shadow-sm">
                                {achievement.metric}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Technical Skills */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center lg:text-left">Technical Skills</h3>
              <div className="grid gap-6">
                {skills.map((skillGroup, index) => {
                  const IconComponent = skillGroup.icon;
                  return (
                    <Card 
                      key={index} 
                      className={`bg-white/80 backdrop-blur-lg border-slate-200/60 shadow-xl transition-all duration-500 hover:scale-105 group cursor-pointer ${
                        activeSkill === index ? 'ring-2 ring-blue-400 shadow-blue-200/60' : ''
                      }`}
                      onMouseEnter={() => setActiveSkill(index)}
                      onMouseLeave={() => setActiveSkill(null)}
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${skillGroup.color} rounded-xl flex items-center justify-center group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="font-bold text-xl text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                            {skillGroup.category}
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {skillGroup.items.map((skill, skillIndex) => (
                            <Badge 
                              key={skillIndex} 
                              className={`bg-slate-100/80 text-slate-700 border-slate-300/60 hover:bg-gradient-to-r ${skillGroup.color} hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-md cursor-pointer`}
                              style={{ animationDelay: `${skillIndex * 100}ms` }}
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-6 bg-white/80 backdrop-blur-lg rounded-xl border border-slate-200/60 hover:bg-blue-50/80 transition-all duration-300 group shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">2+</div>
                  <div className="text-slate-500 text-sm">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-white/80 backdrop-blur-lg rounded-xl border border-slate-200/60 hover:bg-purple-50/80 transition-all duration-300 group shadow-lg">
                  <div className="text-3xl font-bold text-purple-600 group-hover:scale-110 transition-transform duration-300">15+</div>
                  <div className="text-slate-500 text-sm">Technologies</div>
                </div>
                <div className="text-center p-6 bg-white/80 backdrop-blur-lg rounded-xl border border-slate-200/60 hover:bg-indigo-50/80 transition-all duration-300 group shadow-lg">
                  <div className="text-3xl font-bold text-indigo-600 group-hover:scale-110 transition-transform duration-300">100%</div>
                  <div className="text-slate-500 text-sm">Dedication</div>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Divider */}
          <div className="mt-20 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-600 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <style>{`
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  
  @keyframes glow {
    0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.2); }
    50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.4), 0 0 40px rgba(59, 130, 246, 0.3); }
  }

  .hover-lift:hover {
    animation: float 3s ease-in-out infinite;
  }

  .group:hover .animate-glow {
    animation: glow 2s ease-in-out infinite;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: rgba(241, 245, 249, 0.8);
  }
  
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, #2563eb, #7c3aed);
  }
`}</style>

    </section>
  );
};

export default About;