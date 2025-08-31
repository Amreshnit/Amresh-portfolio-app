import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, GraduationCap, Award, X, ZoomIn, Building2, BookOpen } from "lucide-react";
import { useState } from "react";

// Your actual asset imports
import nitJamshedpur from "@/assets/nit-jamshedpur.jpg";
import mcaDegree from "@/assets/mca-degree.jpg";
import bcaDegree from "@/assets/bca-degree.jpg";
import twelfthMarksheet from "@/assets/12th-marksheet.jpg";
import tenthMarksheet from "@/assets/10th-marksheet.jpg";
import sreeAyyappaSchool from "@/assets/sree-ayyappa-school.jpg";
import jawaharNavodaya from "@/assets/jawahar-navodaya.jpg";
import imsKolkata from "@/assets/ims-kolkata.jpg";

const Education = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageType, setImageType] = useState("");

  const openImageModal = (imageSrc, type) => {
    setSelectedImage(imageSrc);
    setImageType(type);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setImageType("");
  };

  const educations = [
    {
      degree: "Master of Computer Applications",
      degreeShort: "MCA",
      institution: "National Institute of Technology Jamshedpur",
      institutionShort: "NIT Jamshedpur",
      location: "Jamshedpur, Jharkhand, India",
      period: "June 2020 - July 2023",
      cgpa: "8.48",
      scale: "10.0",
      level: "Postgraduate",
      description: "Advanced program in computer applications with specialized focus on software engineering, system design, and emerging technologies.",
      image: nitJamshedpur,
      certificate: mcaDegree,
      highlights: [
        "Advanced Software Engineering & System Architecture",
        "Database Systems & Data Analytics",
        "Web Technologies & Full-Stack Development",
        "Algorithm Design & Computational Optimization"
      ],
      type: "technical"
    },
    {
      degree: "Bachelor of Computer Applications",
      degreeShort: "BCA",
      institution: "Institute of Management Study",
      institutionShort: "IMS Kolkata",
      affiliation: "MAKAUT University (Formerly WBUT)",
      location: "Kolkata, West Bengal, India",
      period: "June 2016 - July 2019",
      cgpa: "8.84",
      scale: "10.0",
      level: "Undergraduate",
      description: "Comprehensive undergraduate program establishing strong foundations in computer science principles and application development.",
      image: imsKolkata,
      certificate: bcaDegree,
      highlights: [
        "Programming Fundamentals & Object-Oriented Design",
        "Web Development & User Interface Technologies",
        "Database Design & Management Systems",
        "Software Development Methodologies"
      ],
      type: "technical"
    },
    {
      degree: "Higher Secondary Certificate",
      degreeShort: "12th Grade",
      institution: "Sree Ayyappa Public School",
      institutionShort: "SAPS",
      board: "Central Board of Secondary Education (CBSE)",
      location: "Bokaro Steel City, Jharkhand, India",
      period: "2013 - 2015",
      percentage: "80.6%",
      level: "Senior Secondary",
      description: "Completed senior secondary education with Science stream, building strong analytical and mathematical foundations.",
      image: sreeAyyappaSchool,
      certificate: twelfthMarksheet,
      subjects: ["Physics", "Chemistry", "Mathematics", "Computer Science", "English"],
      type: "secondary"
    },
    {
      degree: "Secondary School Certificate",
      degreeShort: "10th Grade",
      institution: "Jawahar Navodaya Vidyalaya",
      institutionShort: "JNV Barun",
      board: "Central Board of Secondary Education (CBSE)",
      location: "Barun, Bihar, India",
      period: "2012 - 2013",
      cgpa: "9.6",
      scale: "10.0",
      level: "Secondary",
      description: "Attended prestigious residential school known for academic excellence and holistic development of students from rural areas.",
      image: jawaharNavodaya,
      certificate: tenthMarksheet,
      highlights: [
        "Academic Excellence in Science & Mathematics",
        "Leadership Development through Student Activities",
        "Cultural & Social Awareness Programs"
      ],
      type: "secondary"
    }
  ];

  const subjectColors = {
    "Physics": "bg-blue-50 text-blue-700 border-blue-200",
    "Chemistry": "bg-green-50 text-green-700 border-green-200",
    "Mathematics": "bg-purple-50 text-purple-700 border-purple-200",
    "Computer Science": "bg-orange-50 text-orange-700 border-orange-200",
    "English": "bg-pink-50 text-pink-700 border-pink-200"
  };

  return (
    <section id="education" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl mb-6">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Educational Background</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Academic journey through premier institutions, building a strong foundation in computer science and technology.
            </p>
          </div>

          {/* Education Grid */}
          <div className="space-y-16">
            {educations.map((edu, index) => (
              <div key={index} className="relative">
                <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="grid lg:grid-cols-5 gap-0">
                    {/* Content Section */}
                    <div className="lg:col-span-3 p-8 lg:p-10">
                      <CardHeader className="p-0 mb-6">
                        {/* Degree Level Badge */}
                        <div className="flex items-center gap-3 mb-4">
                          <Badge 
                            variant="secondary" 
                            className={`px-3 py-1 text-sm font-medium ${
                              edu.type === 'technical' 
                                ? 'bg-blue-100 text-blue-800 border-blue-200' 
                                : 'bg-gray-100 text-gray-800 border-gray-200'
                            }`}
                          >
                            {edu.level}
                          </Badge>
                          <span className="text-sm text-gray-500 font-medium">{edu.period}</span>
                        </div>

                        <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">
                          {edu.degree}
                        </CardTitle>
                        
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 text-gray-700">
                            <Building2 className="w-5 h-5 text-blue-600" />
                            <div>
                              <span className="font-semibold">{edu.institution}</span>
                              {edu.affiliation && (
                                <div className="text-sm text-gray-600 mt-1">
                                  Affiliated to {edu.affiliation}
                                </div>
                              )}
                              {edu.board && (
                                <div className="text-sm text-gray-600 mt-1">
                                  {edu.board}
                                </div>
                              )}
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3 text-gray-600">
                            <MapPin className="w-5 h-5 text-blue-600" />
                            <span>{edu.location}</span>
                          </div>
                        </div>

                        {/* Performance Metrics */}
                        <div className="flex items-center gap-4 mt-6">
                          {edu.cgpa && (
                            <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2">
                              <div className="text-sm text-green-600 font-medium">CGPA</div>
                              <div className="text-lg font-bold text-green-800">
                                {edu.cgpa}{edu.scale && ` / ${edu.scale}`}
                              </div>
                            </div>
                          )}
                          {edu.percentage && (
                            <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2">
                              <div className="text-sm text-green-600 font-medium">Percentage</div>
                              <div className="text-lg font-bold text-green-800">{edu.percentage}</div>
                            </div>
                          )}
                        </div>
                      </CardHeader>

                      <CardContent className="p-0 space-y-6">
                        <p className="text-gray-600 leading-relaxed">{edu.description}</p>
                        
                        {edu.highlights && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                              <BookOpen className="w-4 h-4 text-blue-600" />
                              Key Areas of Study
                            </h4>
                            <div className="grid sm:grid-cols-2 gap-3">
                              {edu.highlights.map((highlight, highlightIndex) => (
                                <div key={highlightIndex} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-sm text-gray-700 font-medium">{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {edu.subjects && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-4">Core Subjects</h4>
                            <div className="flex flex-wrap gap-2">
                              {edu.subjects.map((subject, subjectIndex) => (
                                <Badge 
                                  key={subjectIndex} 
                                  variant="outline"
                                  className={`font-medium ${subjectColors[subject] || 'bg-gray-50 text-gray-700 border-gray-200'}`}
                                >
                                  {subject}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* View Certificate Button */}
                        {edu.certificate && (
                          <div className="pt-4">
                            <button
                              onClick={() => openImageModal(edu.certificate, "certificate")}
                              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                            >
                              <Award className="w-4 h-4" />
                              View {edu.type === 'technical' ? 'Degree Certificate' : 'Marksheet'}
                            </button>
                          </div>
                        )}
                      </CardContent>
                    </div>

                    {/* Image Section */}
                    <div className="lg:col-span-2 relative bg-gradient-to-br from-blue-50 to-indigo-100">
                      {edu.image && (
                        <div className="h-full flex items-center justify-center p-8">
                          <div 
                            className="relative group cursor-pointer w-full max-w-sm"
                            onClick={() => openImageModal(edu.image, "institution")}
                          >
                            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-white p-2">
                              <img
                                src={edu.image}
                                alt={edu.institution}
                                className="w-full h-full object-cover rounded-lg"
                              />
                            </div>
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 rounded-xl flex items-center justify-center">
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full p-3 shadow-lg">
                                <ZoomIn className="w-6 h-6 text-gray-700" />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Professional Summary */}
          <div className="mt-20 text-center">
            <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 border-0 text-white">
              <CardContent className="p-8 md:p-12">
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Educational Excellence</h3>
                  <p className="text-lg text-blue-100 leading-relaxed">
                    With a strong academic foundation from premier institutions including NIT Jamshedpur and comprehensive 
                    training in computer applications, I bring both theoretical knowledge and practical expertise to 
                    deliver innovative technology solutions.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">8.48</div>
                      <div className="text-blue-200 text-sm">MCA CGPA</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">8.84</div>
                      <div className="text-blue-200 text-sm">BCA CGPA</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">4+</div>
                      <div className="text-blue-200 text-sm">Years of Study</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Professional Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            {/* Close Button */}
            <button
              onClick={closeImageModal}
              className="absolute -top-16 right-0 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 shadow-xl z-10"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
            
            {/* Modal Content */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
                <h3 className="text-white font-semibold">
                  {imageType === "certificate" ? "Academic Certificate" : "Institution"}
                </h3>
              </div>
              <div className="p-4">
                <img
                  src={selectedImage}
                  alt={imageType === "certificate" ? "Certificate/Marksheet" : "Institution"}
                  className="w-full h-full object-contain rounded-lg max-h-[75vh]"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;