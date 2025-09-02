import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, FileText, Building, Calendar, Github, Linkedin, Code } from "lucide-react";

interface CompanyDetails {
  companyName: string;
  hiringManager: string;
  address: string;
  position: string;
  subject: string;
  yearsOfExperience: string;
  selectedSkills: string[];
  careerLevel: string;
  industryFocus: string;
  currentOrganization: string;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCoverLetterOpen, setIsCoverLetterOpen] = useState(false);
  const [companyDetails, setCompanyDetails] = useState<CompanyDetails>({
    companyName: "",
    hiringManager: "Hiring Manager",
    address: "",
    position: "Java Backend Developer",
    subject: "Application for Java Backend Developer Position",
    yearsOfExperience: "2+",
    selectedSkills: ["Java 8+", "Spring Boot", "Microservices", "REST APIs"],
    careerLevel: "mid-level",
    industryFocus: "enterprise software development",
    currentOrganization: "Kanerika Software",
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Amresh_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleInputChange = (field: keyof CompanyDetails, value: string) => {
    setCompanyDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const generateCareerDescription = () => {
    const { yearsOfExperience, careerLevel } = companyDetails;
    if (careerLevel === "entry-level") {
      return "a motivated software professional with strong technical foundation and practical experience";
    } else if (careerLevel === "senior-level") {
      return `a seasoned software engineer with ${yearsOfExperience} years of expertise in developing scalable enterprise solutions`;
    } else if (careerLevel === "lead") {
      return `a technical leader with ${yearsOfExperience} years of experience driving innovation and leading development teams`;
    }
    return `an experienced software developer with ${yearsOfExperience} years of proven expertise in`;
  };

  const generatePDF = () => {
    const currentDate = getCurrentDate();
    const { companyName, hiringManager, address, position, yearsOfExperience, currentOrganization } = companyDetails;
    
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <title>Cover Letter - Amresh Kumar</title>
  <style>
    @page {
      size: A4;
      margin: 1.27cm;
    }
    body {
      font-family: 'Times New Roman', serif;
      line-height: 1.4;
      color: #2c3e50;
      margin: 0;
      padding: 0;
      font-size: 11pt;
    }
    .header {
      text-align: center;
      margin-bottom: 16px;
      padding-bottom: 6px;
      border-bottom: 1.5px solid #2c3e50;
    }
    .name {
      font-size: 16pt;
      font-weight: bold;
      letter-spacing: 1.5px;
      margin-bottom: 3px;
      color: #2c3e50;
    }
    .title {
      font-size: 11pt;
      font-weight: 600;
      margin-bottom: 6px;
      color: #34495e;
    }
    .contact-info {
      font-size: 9pt;
      margin-bottom: 8px;
      color: #7f8c8d;
    }
    .contact-info a {
      color: #3498db;
      text-decoration: none;
    }
    .contact-info a:hover {
      text-decoration: underline;
    }
    .date {
      text-align: right;
      margin-bottom: 12px;
      font-size: 10pt;
    }
    .recipient-section {
      margin-bottom: 10px;
      font-size: 10pt;
    }
    .subject {
      font-weight: bold;
      margin-bottom: 12px;
      font-size: 10pt;
    }
    .greeting {
      margin-bottom: 10px;
      font-size: 10pt;
    }
    .paragraph {
      margin-bottom: 8px;
      text-align: justify;
      font-size: 10pt;
      line-height: 1.4;
    }
    .closing {
      margin-top: 15px;
      font-size: 10pt;
    }
    .signature {
      margin-top: 30px;
      font-weight: bold;
      font-size: 12pt;
      color: #2c3e50;
    }
    .bold {
      font-weight: bold;
    }
    .italic {
      font-style: italic;
    }
    @media print {
      body { margin: 0; }
      .contact-info a {
        color: #3498db !important;
        text-decoration: underline !important;
      }
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="name">AMRESH KUMAR</div>
    <div class="title">${position}</div>
    <div class="contact-info">
      <a href="mailto:amreshnitjsr09@gmail.com">amreshnitjsr09@gmail.com</a> | +91 9122501795 | 
      <a href="https://www.linkedin.com/in/amresh-kumar-467069183/" target="_blank">linkedin.com/in/amresh-kumar-467069183</a> | 
      <a href="https://github.com/Amreshnit" target="_blank">github.com/Amreshnit</a> | 
      <a href="https://leetcode.com/u/qoHaLDRJ8N/" target="_blank">leetcode.com/u/qoHaLDRJ8N</a>
    </div>
  </div>
  
  <div class="date">${currentDate}</div>
  
  ${(companyName || address) ? `
  <div class="recipient-section">
    <div>${hiringManager}</div>
    ${companyName ? `<div class="bold">${companyName}</div>` : ''}
    ${address ? `<div>${address}</div>` : ''}
  </div>
  ` : ''}
  
  <div class="subject">Subject: Application for ${position} Position</div>
  <div class="greeting">Dear ${hiringManager},</div>
  
  <div class="paragraph">
    I am excited to submit my application for the <span class="bold">${position}</span> role${companyName ? ` at <span class="bold">${companyName}</span>` : ''}. 
    As ${generateCareerDescription()} ${companyDetails.industryFocus}, I am confident in my ability to drive technical excellence and contribute meaningfully to your development initiatives.
  </div>
  
  <div class="paragraph">
    With an MCA from NIT Jamshedpur (CGPA: 8.48) and <span class="bold">${yearsOfExperience}</span> of professional experience at ${currentOrganization}, I have cultivated deep expertise in <span class="italic">${companyDetails.selectedSkills.slice(0, 4).join(", ")}</span>, and modern software architecture patterns. My technical proficiency spans the complete development lifecycle, from system design and implementation to deployment and optimization.
  </div>
  
  <div class="paragraph">
    My professional accomplishments include architecting enterprise ETL solutions, implementing multi-tenant RBAC systems, developing scalable subscription platforms, and optimizing high-performance APIs. I excel in cloud infrastructure management, microservices architecture, and delivering robust authentication frameworks that support business-critical operations.
  </div>
  
  <div class="paragraph">
    Beyond technical execution, I bring strong collaborative leadership, effective stakeholder communication, and mentoring capabilities that foster team growth and project success. My approach consistently aligns technical innovation with strategic business objectives.
  </div>
  
  <div class="paragraph">
    I am eager to discuss how my technical expertise and proven track record can contribute to${companyName ? ` <span class="bold">${companyName}'s</span>` : ' your organization\'s'} continued success. Thank you for considering my application.
  </div>
  
  <div class="closing">
    <div>Sincerely,</div>
    <div class="signature">Amresh Kumar</div>
  </div>
</body>
</html>`;

      printWindow.document.write(htmlContent);
      printWindow.document.close();
      
      setTimeout(() => {
        printWindow.print();
      }, 250);
    }
  };

  const downloadCoverLetterHTML = () => {
    const currentDate = getCurrentDate();
    const { companyName, hiringManager, address, position, yearsOfExperience, currentOrganization } = companyDetails;
    
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <title>Cover Letter - Amresh Kumar</title>
  <style>
    @page {
      size: A4;
      margin: 1.27cm;
    }
    body {
      font-family: 'Times New Roman', serif;
      line-height: 1.4;
      color: #2c3e50;
      margin: 0;
      padding: 20px;
      font-size: 11pt;
      background-color: #fff;
    }
    .header {
      text-align: center;
      margin-bottom: 16px;
      padding-bottom: 6px;
      border-bottom: 1.5px solid #2c3e50;
    }
    .name {
      font-size: 16pt;
      font-weight: bold;
      letter-spacing: 1.5px;
      margin-bottom: 3px;
      color: #2c3e50;
    }
    .title {
      font-size: 11pt;
      font-weight: 600;
      margin-bottom: 6px;
      color: #34495e;
    }
    .contact-info {
      font-size: 9pt;
      margin-bottom: 8px;
      color: #7f8c8d;
    }
    .contact-info a {
      color: #3498db;
      text-decoration: none;
      transition: color 0.2s ease;
    }
    .contact-info a:hover {
      color: #2980b9;
      text-decoration: underline;
    }
    .date {
      text-align: right;
      margin-bottom: 12px;
      font-size: 10pt;
    }
    .recipient-section {
      margin-bottom: 10px;
      font-size: 10pt;
    }
    .subject {
      font-weight: bold;
      margin-bottom: 12px;
      font-size: 10pt;
    }
    .greeting {
      margin-bottom: 10px;
      font-size: 10pt;
    }
    .paragraph {
      margin-bottom: 8px;
      text-align: justify;
      font-size: 10pt;
      line-height: 1.4;
    }
    .closing {
      margin-top: 15px;
      font-size: 10pt;
    }
    .signature {
      margin-top: 30px;
      font-weight: bold;
      font-size: 12pt;
      color: #2c3e50;
    }
    .bold {
      font-weight: bold;
    }
    .italic {
      font-style: italic;
    }
    .contact-link {
      display: inline-flex;
      align-items: center;
      margin: 0 2px;
    }
    @media print {
      body { 
        margin: 0; 
        padding: 1.27cm;
      }
      .contact-info a {
        color: #3498db !important;
        text-decoration: underline !important;
      }
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="name">AMRESH KUMAR</div>
    <div class="title">${position}</div>
    <div class="contact-info">
      <span class="contact-link">
        <a href="mailto:amreshnitjsr09@gmail.com">amreshnitjsr09@gmail.com</a>
      </span> | 
      <span>+91 9122501795</span> | 
      <span class="contact-link">
        <a href="https://www.linkedin.com/in/amresh-kumar-467069183/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
      </span> | 
      <span class="contact-link">
        <a href="https://github.com/Amreshnit" target="_blank" rel="noopener noreferrer">GitHub Portfolio</a>
      </span> | 
      <span class="contact-link">
        <a href="https://leetcode.com/u/qoHaLDRJ8N/" target="_blank" rel="noopener noreferrer">LeetCode Profile</a>
      </span>
    </div>
  </div>
  
  <div class="date">${currentDate}</div>
  
  ${(companyName || address) ? `
  <div class="recipient-section">
    <div>${hiringManager}</div>
    ${companyName ? `<div class="bold">${companyName}</div>` : ''}
    ${address ? `<div>${address}</div>` : ''}
  </div>
  ` : ''}
  
  <div class="subject">Subject: Application for ${position} Position</div>
  <div class="greeting">Dear ${hiringManager},</div>
  
  <div class="paragraph">
    I am excited to submit my application for the <span class="bold">${position}</span> role${companyName ? ` at <span class="bold">${companyName}</span>` : ''}. 
    As ${generateCareerDescription()} ${companyDetails.industryFocus}, I am confident in my ability to drive technical excellence and contribute meaningfully to your development initiatives.
  </div>
  
  <div class="paragraph">
    With an MCA from NIT Jamshedpur (CGPA: 8.48) and <span class="bold">${yearsOfExperience}</span> of professional experience at ${currentOrganization}, I have cultivated deep expertise in <span class="italic">${companyDetails.selectedSkills.slice(0, 4).join(", ")}</span>, and modern software architecture patterns. My technical proficiency spans the complete development lifecycle, from system design and implementation to deployment and optimization.
  </div>
  
  <div class="paragraph">
    My professional accomplishments include architecting enterprise ETL solutions, implementing multi-tenant RBAC systems, developing scalable subscription platforms, and optimizing high-performance APIs. I excel in cloud infrastructure management, microservices architecture, and delivering robust authentication frameworks that support business-critical operations.
  </div>
  
  <div class="paragraph">
    Beyond technical execution, I bring strong collaborative leadership, effective stakeholder communication, and mentoring capabilities that foster team growth and project success. My approach consistently aligns technical innovation with strategic business objectives.
  </div>
  
  <div class="paragraph">
    I am eager to discuss how my technical expertise and proven track record can contribute to${companyName ? ` <span class="bold">${companyName}'s</span>` : ' your organization\'s'} continued success. Thank you for considering my application.
  </div>
  
  <div class="closing">
    <div>Sincerely,</div>
    <div class="signature">Amresh Kumar</div>
  </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `${companyName ? companyName.replace(/[^a-zA-Z0-9]/g, "_") + "_" : ""}Cover_Letter_Amresh_Kumar.html`;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    URL.revokeObjectURL(url);
  };

  const resetCoverLetterForm = () => {
    setCompanyDetails({
      companyName: "",
      hiringManager: "Hiring Manager",
      address: "",
      position: "Java Backend Developer",
      subject: "Application for Java Backend Developer Position",
      yearsOfExperience: "2+",
      selectedSkills: ["Java 8+", "Spring Boot", "Microservices", "REST APIs"],
      careerLevel: "mid-level",
      industryFocus: "enterprise software development",
      currentOrganization: "Kanerika Software",
    });
  };

  // Professional Logo Component
  const ProfessionalLogo = () => (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-blue-700 p-0.5 shadow-lg">
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
            <div className="relative">
              <span className="text-lg font-bold bg-gradient-to-br from-blue-500 via-purple-600 to-blue-700 bg-clip-text text-transparent">
                AK
              </span>
              <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-gray-900 leading-tight">
          Amresh Kumar
        </span>
        <span className="text-xs text-gray-600 font-medium tracking-wide">
          SOFTWARE ENGINEER
        </span>
      </div>
    </div>
  );

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <ProfessionalLogo />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Social Links & Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://github.com/Amreshnit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                title="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/amresh-kumar-467069183/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                title="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://leetcode.com/u/qoHaLDRJ8N/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                title="LeetCode"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.518 2.153 7.758-.025l.039-.038a5.313 5.313 0 0 0 1.617-3.81 5.26 5.26 0 0 0-1.617-3.81c-.87-.83-4.346-4.314-4.346-4.314l-.015-.018L12.5 11.5 8.158 15.842a.83.83 0 0 1-1.175 0 .83.83 0 0 1 0-1.175l3.855-3.855a.83.83 0 0 1 1.175 0l.525.525c.465.465.465 1.22 0 1.685l-.525.525a.83.83 0 1 0 1.175 1.175l.525-.525c1.393-1.393 1.393-3.657 0-5.05l-.525-.525c-1.393-1.393-3.657-1.393-5.05 0L3.283 12.483c-2.248 2.139-2.284 5.653-.081 7.874 2.203 2.221 5.717 2.186 7.965.047l4.346-4.274a5.26 5.26 0 0 0 1.617-3.81 5.313 5.313 0 0 0-1.617-3.81L10.852.438A1.374 1.374 0 0 0 9.891 0H13.483z"/>
                </svg>
              </a>
              
              {/* Cover Letter Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsCoverLetterOpen(true)}
                className="flex items-center space-x-2"
              >
                <FileText className="w-4 h-4" />
                <span>Cover Letter</span>
              </Button>
              
              {/* Resume Button */}
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white" 
                size="sm" 
                onClick={handleResumeDownload}
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg shadow-lg mt-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="flex items-center space-x-4 px-3 py-2">
                  <a
                    href="https://github.com/Amreshnit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    title="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/amresh-kumar-467069183/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://leetcode.com/u/qoHaLDRJ8N/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    title="LeetCode"
                  >
                    <Code className="w-5 h-5" />
                  </a>
                </div>
                
                {/* Mobile Cover Letter Button */}
                <div className="px-3 py-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setIsCoverLetterOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="w-full mb-2"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Cover Letter
                  </Button>
                </div>
                
                {/* Mobile Resume Button */}
                <div className="px-3 py-2">
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white w-full" 
                    size="sm"
                    onClick={handleResumeDownload}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Resume
                  </Button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Enhanced Cover Letter Modal with Mobile Responsive Design */}
      {isCoverLetterOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[100] p-2 sm:p-4">
          <div className="bg-white rounded-lg w-full h-full sm:max-w-6xl sm:w-full sm:max-h-[95vh] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-3 sm:p-4 border-b bg-gradient-to-r from-blue-50 to-purple-50">
              <h1 className="text-base sm:text-lg font-bold">Enhanced Cover Letter Generator</h1>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Button variant="outline" size="sm" onClick={resetCoverLetterForm} className="hidden sm:flex">
                  <X className="w-4 h-4 mr-1" />
                  Reset
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={generatePDF}
                  className="bg-green-50 border-green-200 text-green-700 hover:bg-green-100 text-xs sm:text-sm"
                >
                  <FileText className="w-4 h-4 mr-0 sm:mr-1" />
                  <span className="hidden sm:inline">Generate </span>PDF
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={downloadCoverLetterHTML}
                  className="bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 text-xs sm:text-sm"
                >
                  <Download className="w-4 h-4 mr-0 sm:mr-1" />
                  <span className="hidden sm:inline">Download </span>HTML
                </Button>
                <Button variant="ghost" size="sm" onClick={() => setIsCoverLetterOpen(false)}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Mobile-First Responsive Layout */}
            <div className="flex flex-col lg:flex-row h-[calc(100vh-60px)] sm:h-[calc(95vh-80px)]">
              {/* Form Panel - Full width on mobile, 1/3 on desktop */}
              <div className="w-full lg:w-1/3 p-4 sm:p-6 bg-gray-50 lg:border-r overflow-y-auto max-h-[40vh] lg:max-h-none">
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-sm sm:text-md font-semibold text-gray-900 mb-2 sm:mb-4 flex items-center">
                    <Building className="w-4 h-4 mr-2 text-blue-600" />
                    Company Details
                  </h3>
                  
                  {/* Two-column layout on mobile for better space usage */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Company Name</label>
                      <input
                        type="text"
                        value={companyDetails.companyName}
                        onChange={(e) => handleInputChange("companyName", e.target.value)}
                        className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., Google Inc."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Hiring Manager</label>
                      <input
                        type="text"
                        value={companyDetails.hiringManager}
                        onChange={(e) => handleInputChange("hiringManager", e.target.value)}
                        className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., Mr. John Smith"
                      />
                    </div>
                    
                    <div className="sm:col-span-2 lg:col-span-1">
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Address</label>
                      <textarea
                        value={companyDetails.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={2}
                        placeholder="Company address (optional)"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Position</label>
                      <input
                        type="text"
                        value={companyDetails.position}
                        onChange={(e) => {
                          handleInputChange("position", e.target.value);
                          handleInputChange("subject", `Application for ${e.target.value} Position`);
                        }}
                        className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., Senior Java Developer"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
                      <input
                        type="text"
                        value={companyDetails.yearsOfExperience}
                        onChange={(e) => handleInputChange("yearsOfExperience", e.target.value)}
                        className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., 3+, 5, 2-3"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Current Organization</label>
                      <input
                        type="text"
                        value={companyDetails.currentOrganization}
                        onChange={(e) => handleInputChange("currentOrganization", e.target.value)}
                        className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., Kanerika Software"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Career Level</label>
                      <select
                        value={companyDetails.careerLevel}
                        onChange={(e) => handleInputChange("careerLevel", e.target.value)}
                        className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="entry-level">Entry Level</option>
                        <option value="mid-level">Mid Level</option>
                        <option value="senior-level">Senior Level</option>
                        <option value="lead">Lead/Principal</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <div className="flex items-center text-xs sm:text-sm text-gray-600">
                      <Calendar className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                      Date: {getCurrentDate()}
                    </div>
                  </div>

                  {/* Mobile Reset Button */}
                  <div className="block sm:hidden">
                    <Button variant="outline" size="sm" onClick={resetCoverLetterForm} className="w-full">
                      <X className="w-4 h-4 mr-2" />
                      Reset Form
                    </Button>
                  </div>
                </div>

                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-50 rounded-lg">
                  <h4 className="text-xs sm:text-sm font-medium text-blue-900 mb-1 sm:mb-2">Enhanced Features:</h4>
                  <ul className="text-xs text-blue-800 space-y-1">
                    <li>• PDF with clickable links</li>
                    <li>• HTML with professional links</li>
                    <li>• Mobile-responsive design</li>
                    <li>• Real-time preview updates</li>
                  </ul>
                </div>
              </div>

              {/* Preview Panel - Full width on mobile, 2/3 on desktop */}
              <div className="flex-1 p-3 sm:p-6 lg:p-8 overflow-y-auto bg-white">
                <div className="max-w-full lg:max-w-3xl mx-auto border border-gray-200 p-4 sm:p-6 lg:p-8 bg-white shadow-sm text-xs sm:text-sm" style={{ lineHeight: '1.4' }}>
                  {/* Header */}
                  <div className="text-center mb-3 sm:mb-4 pb-2 border-b-2 border-gray-800">
                    <h1 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-1 tracking-wider">AMRESH KUMAR</h1>
                    <p className="text-xs sm:text-sm font-semibold text-gray-600 mb-2">{companyDetails.position}</p>
                    <div className="text-xs text-gray-700 flex items-center justify-center space-x-1 sm:space-x-2 flex-wrap gap-1">
                      <span>
                        <a href="mailto:amreshnitjsr09@gmail.com" className="text-blue-600 hover:underline">
                          amreshnitjsr09@gmail.com
                        </a>
                      </span>
                      <span className="hidden sm:inline">|</span>
                      <span>+91 9122501795</span>
                      <span className="hidden sm:inline">|</span>
                      <span className="flex items-center">
                        <Linkedin className="w-2 sm:w-3 h-2 sm:h-3 mr-1" />
                        <a 
                          href="https://www.linkedin.com/in/amresh-kumar-467069183/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          LinkedIn
                        </a>
                      </span>
                      <span className="hidden sm:inline">|</span>
                      <span className="flex items-center">
                        <Github className="w-2 sm:w-3 h-2 sm:h-3 mr-1" />
                        <a 
                          href="https://github.com/Amreshnit" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          GitHub
                        </a>
                      </span>
                      <span className="hidden sm:inline">|</span>
                      <span className="flex items-center">
                        <Code className="w-2 sm:w-3 h-2 sm:h-3 mr-1" />
                        <a 
                          href="https://leetcode.com/u/qoHaLDRJ8N/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          LeetCode
                        </a>
                      </span>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="text-right mb-2 sm:mb-3 text-xs text-gray-600">
                    {getCurrentDate()}
                  </div>

                  {/* Recipient */}
                  {(companyDetails.companyName || companyDetails.address) && (
                    <div className="mb-2 sm:mb-3 text-xs text-gray-800">
                      <div>{companyDetails.hiringManager}</div>
                      {companyDetails.companyName && (
                        <div className="font-bold text-gray-900">{companyDetails.companyName}</div>
                      )}
                      {companyDetails.address && (
                        <div className="whitespace-pre-line">{companyDetails.address}</div>
                      )}
                    </div>
                  )}

                  {/* Subject */}
                  <div className="mb-2 sm:mb-3">
                    <p className="font-bold text-gray-900 text-xs">
                      Subject: {companyDetails.subject}
                    </p>
                  </div>

                  {/* Greeting */}
                  <div className="mb-2">
                    <p className="text-gray-900 text-xs">Dear {companyDetails.hiringManager},</p>
                  </div>

                  {/* Content */}
                  <div className="space-y-2 text-justify text-gray-800 text-xs leading-relaxed">
                    <p>
                      I am excited to submit my application for the <span className="font-bold">{companyDetails.position}</span> role
                      {companyDetails.companyName ? (
                        <> at <span className="font-bold">{companyDetails.companyName}</span></>
                      ) : ''}. 
                      As {generateCareerDescription()} {companyDetails.industryFocus}, I am confident in my ability to drive technical excellence and contribute meaningfully to your development initiatives.
                    </p>

                    <p>
                      With an MCA from NIT Jamshedpur (CGPA: 8.48) and <span className="font-bold">{companyDetails.yearsOfExperience}</span> of professional experience at {companyDetails.currentOrganization}, I have cultivated deep expertise in <span className="italic">{companyDetails.selectedSkills.slice(0, 4).join(", ")}</span>, and modern software architecture patterns. My technical proficiency spans the complete development lifecycle, from system design and implementation to deployment and optimization.
                    </p>

                    <p>
                      My professional accomplishments include architecting enterprise ETL solutions, implementing multi-tenant RBAC systems, developing scalable subscription platforms, and optimizing high-performance APIs. I excel in cloud infrastructure management, microservices architecture, and delivering robust authentication frameworks that support business-critical operations.
                    </p>

                    <p>
                      Beyond technical execution, I bring strong collaborative leadership, effective stakeholder communication, and mentoring capabilities that foster team growth and project success. My approach consistently aligns technical innovation with strategic business objectives.
                    </p>

                    <p>
                      I am eager to discuss how my technical expertise and proven track record can contribute to
                      {companyDetails.companyName ? (
                        <> <span className="font-bold">{companyDetails.companyName}'s</span></>
                      ) : (
                        ' your organization\'s'
                      )} continued success. Thank you for considering my application.
                    </p>
                  </div>

                  {/* Closing */}
                  <div className="mt-3 sm:mt-4 space-y-1 text-xs">
                    <p className="text-gray-900">Sincerely,</p>
                    <div className="mt-4 sm:mt-6">
                      <p className="font-bold text-gray-900 text-xs sm:text-sm">Amresh Kumar</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;