import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Upload, 
  Sparkles, 
  Download, 
  Eye, 
  X, 
  Check,
  Loader2,
  FileDown,
  ChevronRight,
  Layout
} from "lucide-react";

// Resume Data Interface
interface ResumeData {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    location: string;
    linkedin?: string;
    github?: string;
    portfolio?: string;
  };
  summary: string;
  experience: Array<{
    company: string;
    position: string;
    location: string;
    duration: string;
    achievements: string[];
  }>;
  education: Array<{
    degree: string;
    institution: string;
    location: string;
    year: string;
    gpa?: string;
  }>;
  skills: {
    technical: string[];
    tools: string[];
    soft: string[];
  };
  projects?: Array<{
    name: string;
    description: string;
    technologies: string[];
    link?: string;
  }>;
  certifications?: Array<{
    name: string;
    issuer: string;
    date: string;
  }>;
}

const ResumeBuilder = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<'upload' | 'jobDesc' | 'processing' | 'preview'>('upload');
  const [selectedTemplate, setSelectedTemplate] = useState<number>(1);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);

  // Sample Resume Templates
  const templates = [
    { id: 1, name: "Professional", icon: "📄", description: "Classic ATS-friendly format" },
    { id: 2, name: "Modern", icon: "✨", description: "Clean contemporary design" },
    { id: 3, name: "Minimal", icon: "⚡", description: "Simple and elegant" },
    { id: 4, name: "Executive", icon: "👔", description: "Senior-level positions" },
    { id: 5, name: "Tech Focus", icon: "💻", description: "Developer-optimized" }
  ];

  // Sample Data (would come from AI processing in real implementation)
  const sampleResumeData: ResumeData = {
    personalInfo: {
      name: "Amresh Kumar",
      email: "amreshnitjsr09@gmail.com",
      phone: "+91 9122501795",
      location: "Hyderabad, India",
      linkedin: "linkedin.com/in/amresh-kumar-467069183",
      github: "github.com/Amreshnit",
      portfolio: "amreshkumar.dev"
    },
    summary: "Results-driven Software Engineer with 3.5+ years of experience in developing scalable enterprise applications using Java, Spring Boot, microservices architecture, PostgreSQL, Azure, and Databricks. Proven track record in delivering high-performance solutions, optimizing system efficiency, and collaborating with cross-functional teams to drive business objectives.",
    experience: [
      {
        company: "Kanerika Software",
        position: "Software Engineer",
        location: "Hyderabad, India",
        duration: "July 2022 - Present",
        achievements: [
          "Architected and implemented enterprise ETL solutions processing 100K+ records daily with 99.9% accuracy",
          "Developed multi-tenant RBAC system supporting 50+ organizations with role-based access control",
          "Optimized API response times by 40% through caching strategies and database query optimization",
          "Led development of subscription management platform handling 10K+ active subscriptions",
          "Mentored junior developers and conducted code reviews, improving team code quality by 30%"
        ]
      },
      {
        company: "Tech Innovations Ltd",
        position: "Junior Software Developer",
        location: "Bangalore, India",
        duration: "Jan 2022 - June 2022",
        achievements: [
          "Contributed to microservices development using Spring Boot and Docker",
          "Implemented RESTful APIs serving 5000+ daily requests with 99.8% uptime",
          "Collaborated with QA team to reduce production bugs by 25%"
        ]
      }
    ],
    education: [
      {
        degree: "Master of Computer Applications (MCA)",
        institution: "National Institute of Technology, Jamshedpur",
        location: "Jamshedpur, India",
        year: "2019 - 2022",
        gpa: "8.48/10.0"
      },
      {
        degree: "Bachelor of Computer Applications (BCA)",
        institution: "University of Delhi",
        location: "Delhi, India",
        year: "2016 - 2019",
        gpa: "7.8/10.0"
      }
    ],
    skills: {
      technical: ["Java 8+", "Spring Boot", "Microservices", "REST APIs", "Hibernate", "JPA", "SQL", "MongoDB", "Redis"],
      tools: ["Docker", "Kubernetes", "Jenkins", "Git", "Maven", "Gradle", "AWS", "Azure", "Postman"],
      soft: ["Problem Solving", "Team Leadership", "Agile/Scrum", "Communication", "Mentoring"]
    },
    projects: [
      {
        name: "E-Commerce Platform",
        description: "Developed full-stack e-commerce application with payment integration, supporting 1000+ concurrent users",
        technologies: ["Spring Boot", "React", "PostgreSQL", "Redis", "Stripe API"],
        link: "github.com/amreshnit/ecommerce"
      },
      {
        name: "Real-time Chat Application",
        description: "Built scalable chat system using WebSocket with message persistence and user authentication",
        technologies: ["Java", "WebSocket", "MongoDB", "Spring Security"],
        link: "github.com/amreshnit/chat-app"
      }
    ],
    certifications: [
      {
        name: "AWS Certified Solutions Architect - Associate",
        issuer: "Amazon Web Services",
        date: "2023"
      },
      {
        name: "Oracle Certified Java SE 11 Developer",
        issuer: "Oracle",
        date: "2022"
      }
    ]
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setUploadedFile(file);
    }
  };

  const handleProcessResume = async () => {
    setIsProcessing(true);
    setCurrentStep('processing');
    
    // Simulate AI processing (In real implementation, call AI API here)
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Set processed data
    setResumeData(sampleResumeData);
    setIsProcessing(false);
    setCurrentStep('preview');
  };

  const downloadPDF = () => {
    if (!resumeData) return;
    
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(generateResumeHTML(resumeData));
      printWindow.document.close();
      setTimeout(() => {
        printWindow.print();
      }, 250);
    }
  };

  const downloadDOCX = () => {
    // Placeholder for DOCX export
    alert('DOCX export will be implemented with docx library');
  };

  const generateResumeHTML = (data: ResumeData) => {
    return `
<!DOCTYPE html>
<html>
<head>
  <title>Resume - ${data.personalInfo.name}</title>
  <style>
    @page { size: A4; margin: 0.75in; }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Calibri', 'Arial', sans-serif;
      font-size: 11pt;
      line-height: 1.4;
      color: #000;
    }
    .header {
      text-align: center;
      margin-bottom: 20px;
      border-bottom: 2px solid #000;
      padding-bottom: 10px;
    }
    .name {
      font-size: 24pt;
      font-weight: bold;
      margin-bottom: 5px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .contact-info {
      font-size: 10pt;
      color: #333;
    }
    .section {
      margin-bottom: 18px;
    }
    .section-title {
      font-size: 13pt;
      font-weight: bold;
      text-transform: uppercase;
      border-bottom: 1.5px solid #000;
      padding-bottom: 3px;
      margin-bottom: 10px;
      letter-spacing: 0.5px;
    }
    .job-header, .edu-header {
      margin-bottom: 5px;
    }
    .job-title {
      font-weight: bold;
      font-size: 11pt;
    }
    .company {
      font-weight: bold;
    }
    .duration {
      font-style: italic;
      float: right;
    }
    .achievements {
      margin-left: 20px;
      margin-top: 5px;
    }
    .achievements li {
      margin-bottom: 3px;
      line-height: 1.3;
    }
    .skills-list {
      line-height: 1.6;
    }
    .skill-category {
      margin-bottom: 5px;
    }
    .skill-label {
      font-weight: bold;
      display: inline;
    }
    .clear { clear: both; }
    @media print {
      body { margin: 0; }
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="name">${data.personalInfo.name}</div>
    <div class="contact-info">
      ${data.personalInfo.email} | ${data.personalInfo.phone} | ${data.personalInfo.location}<br>
      ${data.personalInfo.linkedin || ''} ${data.personalInfo.github ? '| ' + data.personalInfo.github : ''}
    </div>
  </div>

  <div class="section">
    <div class="section-title">Professional Summary</div>
    <p>${data.summary}</p>
  </div>

  <div class="section">
    <div class="section-title">Professional Experience</div>
    ${data.experience.map(exp => `
      <div style="margin-bottom: 15px;">
        <div class="job-header">
          <span class="job-title">${exp.position}</span> - <span class="company">${exp.company}</span>
          <span class="duration">${exp.duration}</span>
          <div class="clear"></div>
          <div style="font-style: italic; font-size: 10pt; color: #555;">${exp.location}</div>
        </div>
        <ul class="achievements">
          ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
        </ul>
      </div>
    `).join('')}
  </div>

  <div class="section">
    <div class="section-title">Education</div>
    ${data.education.map(edu => `
      <div style="margin-bottom: 10px;">
        <div class="edu-header">
          <span class="company">${edu.degree}</span>
          <span class="duration">${edu.year}</span>
          <div class="clear"></div>
          <div>${edu.institution}, ${edu.location}</div>
          ${edu.gpa ? `<div>GPA: ${edu.gpa}</div>` : ''}
        </div>
      </div>
    `).join('')}
  </div>

  <div class="section">
    <div class="section-title">Technical Skills</div>
    <div class="skills-list">
      <div class="skill-category">
        <span class="skill-label">Programming & Frameworks:</span> ${data.skills.technical.join(', ')}
      </div>
      <div class="skill-category">
        <span class="skill-label">Tools & Technologies:</span> ${data.skills.tools.join(', ')}
      </div>
      ${data.skills.soft.length > 0 ? `
      <div class="skill-category">
        <span class="skill-label">Professional Skills:</span> ${data.skills.soft.join(', ')}
      </div>
      ` : ''}
    </div>
  </div>

  ${data.projects && data.projects.length > 0 ? `
  <div class="section">
    <div class="section-title">Key Projects</div>
    ${data.projects.map(project => `
      <div style="margin-bottom: 10px;">
        <div class="job-title">${project.name}</div>
        <div>${project.description}</div>
        <div style="font-style: italic; font-size: 10pt;">Technologies: ${project.technologies.join(', ')}</div>
      </div>
    `).join('')}
  </div>
  ` : ''}

  ${data.certifications && data.certifications.length > 0 ? `
  <div class="section">
    <div class="section-title">Certifications</div>
    ${data.certifications.map(cert => `
      <div style="margin-bottom: 5px;">
        <span class="company">${cert.name}</span> - ${cert.issuer} (${cert.date})
      </div>
    `).join('')}
  </div>
  ` : ''}
</body>
</html>`;
  };

  return (
    <>
      {/* Build Resume Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="flex items-center space-x-2 bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200 hover:from-purple-100 hover:to-blue-100"
      >
        <Sparkles className="w-4 h-4 text-purple-600" />
        <span>Build Resume</span>
      </Button>

      {/* Main Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-7xl max-h-[95vh] overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-8 h-8" />
                  <div>
                    <h1 className="text-2xl font-bold">AI Resume Builder</h1>
                    <p className="text-purple-100 text-sm">ATS-Optimized | AI-Powered | Multi-Template</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              {/* Progress Steps */}
              <div className="flex items-center justify-center space-x-4 mt-6">
                {[
                  { key: 'upload', label: 'Upload', icon: Upload },
                  { key: 'jobDesc', label: 'Job Description', icon: FileText },
                  { key: 'processing', label: 'AI Processing', icon: Sparkles },
                  { key: 'preview', label: 'Preview', icon: Eye }
                ].map((step, idx) => {
                  const Icon = step.icon;
                  const isActive = currentStep === step.key;
                  const isCompleted = ['upload', 'jobDesc', 'processing', 'preview'].indexOf(currentStep) > idx;
                  
                  return (
                    <div key={step.key} className="flex items-center">
                      <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                        isActive ? 'bg-white text-purple-600 shadow-lg scale-105' :
                        isCompleted ? 'bg-white/20 text-white' : 'bg-white/10 text-white/60'
                      }`}>
                        {isCompleted ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                        <span className="font-medium">{step.label}</span>
                      </div>
                      {idx < 3 && <ChevronRight className="w-5 h-5 mx-2 text-white/60" />}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Content Area */}
            <div className="p-8 overflow-y-auto max-h-[calc(95vh-200px)]">
              {/* Step 1: Upload Resume */}
              {currentStep === 'upload' && (
                <div className="max-w-3xl mx-auto">
                  <div className="text-center mb-8">
                    <Layout className="w-16 h-16 mx-auto mb-4 text-purple-600" />
                    <h2 className="text-2xl font-bold mb-2">Select Resume Template</h2>
                    <p className="text-gray-600">Choose from 5 ATS-friendly templates</p>
                  </div>

                  {/* Template Selection */}
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                    {templates.map((template) => (
                      <button
                        key={template.id}
                        onClick={() => setSelectedTemplate(template.id)}
                        className={`p-6 rounded-xl border-2 transition-all hover:shadow-lg ${
                          selectedTemplate === template.id
                            ? 'border-purple-600 bg-purple-50 shadow-lg scale-105'
                            : 'border-gray-200 hover:border-purple-300'
                        }`}
                      >
                        <div className="text-4xl mb-3">{template.icon}</div>
                        <h3 className="font-bold mb-1">{template.name}</h3>
                        <p className="text-xs text-gray-600">{template.description}</p>
                      </button>
                    ))}
                  </div>

                  {/* File Upload */}
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-purple-400 transition-colors">
                    <Upload className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                    <h3 className="text-xl font-bold mb-2">Upload Your Current Resume</h3>
                    <p className="text-gray-600 mb-6">PDF format only (Max 5MB)</p>
                    <label className="cursor-pointer">
                      <input
                        type="file"
                        accept=".pdf"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <span className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                        Choose File
                      </span>
                    </label>
                    {uploadedFile && (
                      <div className="mt-4 p-4 bg-green-50 rounded-lg inline-block">
                        <Check className="w-5 h-5 inline mr-2 text-green-600" />
                        <span className="text-green-700 font-medium">{uploadedFile.name}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-center mt-8">
                    <Button
                      onClick={() => setCurrentStep('jobDesc')}
                      disabled={!uploadedFile}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg"
                    >
                      Continue to Job Description
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 2: Job Description */}
              {currentStep === 'jobDesc' && (
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-8">
                    <FileText className="w-16 h-16 mx-auto mb-4 text-purple-600" />
                    <h2 className="text-2xl font-bold mb-2">Paste Job Description</h2>
                    <p className="text-gray-600">AI will optimize your resume to match job requirements</p>
                  </div>

                  <textarea
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    placeholder="Paste the complete job description here..."
                    className="w-full h-96 p-6 border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:outline-none resize-none text-sm"
                  />

                  <div className="flex justify-between mt-8">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentStep('upload')}
                      className="px-6 py-3"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={handleProcessResume}
                      disabled={!jobDescription.trim()}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
                    >
                      Process with AI
                      <Sparkles className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Processing */}
              {currentStep === 'processing' && (
                <div className="max-w-2xl mx-auto text-center py-16">
                  <Loader2 className="w-20 h-20 mx-auto mb-6 text-purple-600 animate-spin" />
                  <h2 className="text-2xl font-bold mb-4">AI is Optimizing Your Resume</h2>
                  <div className="space-y-3 text-gray-600">
                    <p className="flex items-center justify-center">
                      <Check className="w-5 h-5 mr-2 text-green-600" />
                      Analyzing job requirements
                    </p>
                    <p className="flex items-center justify-center">
                      <Check className="w-5 h-5 mr-2 text-green-600" />
                      Extracting keywords
                    </p>
                    <p className="flex items-center justify-center">
                      <Loader2 className="w-5 h-5 mr-2 text-purple-600 animate-spin" />
                      Optimizing content for ATS
                    </p>
                    <p className="flex items-center justify-center text-gray-400">
                      Formatting resume
                    </p>
                  </div>
                </div>
              )}

              {/* Step 4: Preview */}
              {currentStep === 'preview' && resumeData && (
                <div className="max-w-5xl mx-auto">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold">Your ATS-Optimized Resume</h2>
                      <p className="text-gray-600">Template: {templates.find(t => t.id === selectedTemplate)?.name}</p>
                    </div>
                    <div className="flex space-x-3">
                      <Button
                        onClick={downloadPDF}
                        className="bg-green-600 hover:bg-green-700 text-white"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                      <Button
                        onClick={downloadDOCX}
                        variant="outline"
                        className="border-blue-600 text-blue-600 hover:bg-blue-50"
                      >
                        <FileDown className="w-4 h-4 mr-2" />
                        Download DOCX
                      </Button>
                    </div>
                  </div>

                  {/* Resume Preview */}
                  <div 
                    className="border-2 border-gray-200 rounded-lg p-12 bg-white shadow-inner overflow-auto"
                    style={{ maxHeight: '800px' }}
                    dangerouslySetInnerHTML={{ __html: generateResumeHTML(resumeData).replace('<!DOCTYPE html>', '').replace(/<html>|<\/html>|<head>.*<\/head>|<body>|<\/body>/gs, '') }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResumeBuilder;