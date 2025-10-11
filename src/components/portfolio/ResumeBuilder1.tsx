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
  Layout,
  Edit2,
  Save,
  Plus,
  Trash2
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

const ResumeBuilder1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<'template' | 'upload' | 'edit' | 'preview'>('template');
  const [selectedTemplate, setSelectedTemplate] = useState<number>(1);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  // Sample Resume Templates
  const templates = [
    { id: 1, name: "Professional", icon: "📄", description: "Classic ATS-friendly format", color: "from-blue-50 to-indigo-50" },
    { id: 2, name: "Modern", icon: "✨", description: "Clean contemporary design", color: "from-purple-50 to-pink-50" },
    { id: 3, name: "Minimal", icon: "⚡", description: "Simple and elegant", color: "from-gray-50 to-slate-50" },
    { id: 4, name: "Executive", icon: "👔", description: "Senior-level positions", color: "from-amber-50 to-orange-50" },
    { id: 5, name: "Tech Focus", icon: "💻", description: "Developer-optimized", color: "from-green-50 to-emerald-50" }
  ];

  // Sample Data
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
    summary: "Results-driven Software Engineer with 2+ years of experience in developing scalable enterprise applications using Java, Spring Boot, and microservices architecture. Proven track record in delivering high-performance solutions, optimizing system efficiency, and collaborating with cross-functional teams to drive business objectives.",
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
          "Led development of subscription management platform handling 10K+ active subscriptions"
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
      }
    ],
    certifications: [
      {
        name: "AWS Certified Solutions Architect - Associate",
        issuer: "Amazon Web Services",
        date: "2023"
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
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setResumeData(sampleResumeData);
    setIsProcessing(false);
    setCurrentStep('edit');
  };

  const handleStartFromScratch = () => {
    setResumeData({
      personalInfo: {
        name: "",
        email: "",
        phone: "",
        location: "",
        linkedin: "",
        github: "",
        portfolio: ""
      },
      summary: "",
      experience: [],
      education: [],
      skills: {
        technical: [],
        tools: [],
        soft: []
      },
      projects: [],
      certifications: []
    });
    setCurrentStep('edit');
  };

  const downloadPDF = () => {
    if (!resumeData) return;
    
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(generateResumeHTML(resumeData, selectedTemplate));
      printWindow.document.close();
      setTimeout(() => {
        printWindow.print();
      }, 250);
    }
  };

  const generateResumeHTML = (data: ResumeData, templateId: number) => {
    const templateStyles = getTemplateStyles(templateId);
    
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
      color: ${templateStyles.textColor};
    }
    .header {
      text-align: ${templateStyles.headerAlign};
      margin-bottom: 20px;
      border-bottom: ${templateStyles.headerBorder};
      padding-bottom: 10px;
    }
    .name {
      font-size: 24pt;
      font-weight: bold;
      margin-bottom: 5px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: ${templateStyles.nameColor};
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
      border-bottom: ${templateStyles.sectionBorder};
      padding-bottom: 3px;
      margin-bottom: 10px;
      letter-spacing: 0.5px;
      color: ${templateStyles.sectionColor};
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

  ${data.summary ? `
  <div class="section">
    <div class="section-title">Professional Summary</div>
    <p>${data.summary}</p>
  </div>
  ` : ''}

  ${data.experience.length > 0 ? `
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
  ` : ''}

  ${data.education.length > 0 ? `
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
  ` : ''}

  ${(data.skills.technical.length > 0 || data.skills.tools.length > 0) ? `
  <div class="section">
    <div class="section-title">Technical Skills</div>
    <div class="skills-list">
      ${data.skills.technical.length > 0 ? `
      <div class="skill-category">
        <span class="skill-label">Programming & Frameworks:</span> ${data.skills.technical.join(', ')}
      </div>
      ` : ''}
      ${data.skills.tools.length > 0 ? `
      <div class="skill-category">
        <span class="skill-label">Tools & Technologies:</span> ${data.skills.tools.join(', ')}
      </div>
      ` : ''}
      ${data.skills.soft.length > 0 ? `
      <div class="skill-category">
        <span class="skill-label">Professional Skills:</span> ${data.skills.soft.join(', ')}
      </div>
      ` : ''}
    </div>
  </div>
  ` : ''}

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

  const getTemplateStyles = (templateId: number) => {
    const styles = {
      1: { // Professional
        textColor: '#000',
        nameColor: '#000',
        headerAlign: 'center',
        headerBorder: '2px solid #000',
        sectionColor: '#000',
        sectionBorder: '1.5px solid #000'
      },
      2: { // Modern
        textColor: '#1a1a1a',
        nameColor: '#6366f1',
        headerAlign: 'center',
        headerBorder: '2px solid #6366f1',
        sectionColor: '#6366f1',
        sectionBorder: '2px solid #6366f1'
      },
      3: { // Minimal
        textColor: '#333',
        nameColor: '#333',
        headerAlign: 'left',
        headerBorder: '1px solid #ddd',
        sectionColor: '#333',
        sectionBorder: '1px solid #ddd'
      },
      4: { // Executive
        textColor: '#2c3e50',
        nameColor: '#e67e22',
        headerAlign: 'center',
        headerBorder: '3px solid #e67e22',
        sectionColor: '#e67e22',
        sectionBorder: '2px solid #e67e22'
      },
      5: { // Tech Focus
        textColor: '#1e293b',
        nameColor: '#10b981',
        headerAlign: 'left',
        headerBorder: '2px solid #10b981',
        sectionColor: '#10b981',
        sectionBorder: '2px solid #10b981'
      }
    };
    return styles[templateId as keyof typeof styles] || styles[1];
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
                  onClick={() => {
                    setIsOpen(false);
                    setCurrentStep('template');
                    setResumeData(null);
                  }}
                  className="text-white hover:bg-white/20"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              {/* Progress Steps */}
              <div className="flex items-center justify-center space-x-4 mt-6">
                {[
                  { key: 'template', label: 'Template', icon: Layout },
                  { key: 'upload', label: 'Upload/Create', icon: Upload },
                  { key: 'edit', label: 'Edit', icon: Edit2 },
                  { key: 'preview', label: 'Download', icon: Download }
                ].map((step, idx) => {
                  const Icon = step.icon;
                  const isActive = currentStep === step.key;
                  const steps = ['template', 'upload', 'edit', 'preview'];
                  const isCompleted = steps.indexOf(currentStep) > idx;
                  
                  return (
                    <div key={step.key} className="flex items-center">
                      <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                        isActive ? 'bg-white text-purple-600 shadow-lg scale-105' :
                        isCompleted ? 'bg-white/20 text-white' : 'bg-white/10 text-white/60'
                      }`}>
                        {isCompleted ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                        <span className="font-medium hidden sm:inline">{step.label}</span>
                      </div>
                      {idx < 3 && <ChevronRight className="w-5 h-5 mx-2 text-white/60" />}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Content Area */}
            <div className="p-8 overflow-y-auto max-h-[calc(95vh-200px)]">
              {/* Step 1: Template Selection */}
              {currentStep === 'template' && (
                <div className="max-w-5xl mx-auto">
                  <div className="text-center mb-8">
                    <Layout className="w-16 h-16 mx-auto mb-4 text-purple-600" />
                    <h2 className="text-3xl font-bold mb-2">Choose Your Resume Template</h2>
                    <p className="text-gray-600">Select from 5 professionally designed ATS-friendly templates</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
                    {templates.map((template) => (
                      <button
                        key={template.id}
                        onClick={() => setSelectedTemplate(template.id)}
                        className={`p-6 rounded-xl border-2 transition-all hover:shadow-xl ${
                          selectedTemplate === template.id
                            ? 'border-purple-600 bg-purple-50 shadow-xl scale-105 ring-4 ring-purple-200'
                            : 'border-gray-200 hover:border-purple-300'
                        }`}
                      >
                        <div className="text-5xl mb-4">{template.icon}</div>
                        <h3 className="font-bold text-lg mb-2">{template.name}</h3>
                        <p className="text-sm text-gray-600">{template.description}</p>
                        {selectedTemplate === template.id && (
                          <div className="mt-3">
                            <Check className="w-6 h-6 mx-auto text-purple-600" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-center">
                    <Button
                      onClick={() => setCurrentStep('upload')}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg"
                    >
                      Continue with {templates.find(t => t.id === selectedTemplate)?.name} Template
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 2: Upload or Create */}
              {currentStep === 'upload' && (
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-8">
                    <Upload className="w-16 h-16 mx-auto mb-4 text-purple-600" />
                    <h2 className="text-3xl font-bold mb-2">Import or Create Resume</h2>
                    <p className="text-gray-600">Upload your existing resume or start from scratch</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Upload Existing Resume */}
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-purple-400 transition-colors">
                      <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                      <h3 className="text-xl font-bold mb-2">Upload Existing Resume</h3>
                      <p className="text-gray-600 mb-6">PDF format (Max 5MB)</p>
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
                        <div className="mt-4 p-4 bg-green-50 rounded-lg">
                          <Check className="w-5 h-5 inline mr-2 text-green-600" />
                          <span className="text-green-700 font-medium">{uploadedFile.name}</span>
                        </div>
                      )}
                      {uploadedFile && (
                        <Button
                          onClick={handleProcessResume}
                          disabled={isProcessing}
                          className="mt-6 w-full bg-purple-600 hover:bg-purple-700"
                        >
                          {isProcessing ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              Processing...
                            </>
                          ) : (
                            <>Process with AI</>
                          )}
                        </Button>
                      )}
                    </div>

                    {/* Start from Scratch */}
                    <div className="border-2 border-gray-300 rounded-xl p-8 text-center hover:border-purple-400 transition-colors bg-gradient-to-br from-purple-50 to-blue-50">
                      <FileText className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                      <h3 className="text-xl font-bold mb-2">Start from Scratch</h3>
                      <p className="text-gray-600 mb-6">Create a new resume with our guided editor</p>
                      <Button
                        onClick={handleStartFromScratch}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Create New Resume
                      </Button>
                    </div>
                  </div>

                  <div className="flex justify-between mt-8">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentStep('template')}
                    >
                      Back to Templates
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Edit Resume (Simplified View) */}
              {currentStep === 'edit' && resumeData && (
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-6">
                    <Edit2 className="w-12 h-12 mx-auto mb-3 text-purple-600" />
                    <h2 className="text-2xl font-bold mb-2">Review Your Resume</h2>
                    <p className="text-gray-600">Preview your resume content before downloading</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-lg p-8 mb-6">
                    {/* Personal Info */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-purple-600 mb-3">Personal Information</h3>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div><span className="font-semibold">Name:</span> {resumeData.personalInfo.name}</div>
                        <div><span className="font-semibold">Email:</span> {resumeData.personalInfo.email}</div>
                        <div><span className="font-semibold">Phone:</span> {resumeData.personalInfo.phone}</div>
                        <div><span className="font-semibold">Location:</span> {resumeData.personalInfo.location}</div>
                      </div>
                    </div>

                    {/* Summary */}
                    {resumeData.summary && (
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-purple-600 mb-3">Professional Summary</h3>
                        <p className="text-sm text-gray-700">{resumeData.summary}</p>
                      </div>
                    )}

                    {/* Experience */}
                    {resumeData.experience.length > 0 && (
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-purple-600 mb-3">Experience</h3>
                        {resumeData.experience.map((exp, idx) => (
                          <div key={idx} className="mb-4 pb-4 border-b last:border-0">
                            <div className="font-bold">{exp.position} at {exp.company}</div>
                            <div className="text-sm text-gray-600">{exp.duration} | {exp.location}</div>
                            <ul className="mt-2 ml-4 text-sm list-disc">
                              {exp.achievements.map((ach, i) => (
                                <li key={i}>{ach}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Skills */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-purple-600 mb-3">Skills</h3>
                      <div className="text-sm">
                        {resumeData.skills.technical.length > 0 && (
                          <div className="mb-2">
                            <span className="font-semibold">Technical:</span> {resumeData.skills.technical.join(', ')}
                          </div>
                        )}
                        {resumeData.skills.tools.length > 0 && (
                          <div className="mb-2">
                            <span className="font-semibold">Tools:</span> {resumeData.skills.tools.join(', ')}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentStep('upload')}
                    >
                      Back
                    </Button>
                    <Button
                      onClick={() => setCurrentStep('preview')}
                      className="bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      Continue to Download
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 4: Preview & Download */}
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
                    </div>
                  </div>

                  {/* Resume Preview */}
                  <div 
                    className="border-2 border-gray-200 rounded-lg p-12 bg-white shadow-inner overflow-auto max-h-[600px]"
                    dangerouslySetInnerHTML={{ 
                      __html: generateResumeHTML(resumeData, selectedTemplate)
                        .replace('<!DOCTYPE html>', '')
                        .replace(/<html>|<\/html>|<head>.*<\/head>|<body>|<\/body>/gs, '') 
                    }}
                  />

                  <div className="flex justify-between mt-6">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentStep('edit')}
                    >
                      Back to Edit
                    </Button>
                    <Button
                      onClick={() => {
                        setIsOpen(false);
                        setCurrentStep('template');
                        setResumeData(null);
                      }}
                      variant="outline"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResumeBuilder1;