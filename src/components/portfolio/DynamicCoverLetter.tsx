import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, FileText, X, Building, Calendar, Github, Linkedin, Code } from "lucide-react";

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

const DynamicCoverLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  const handleInputChange = (field: keyof CompanyDetails, value: string) => {
    setCompanyDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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
      
      // Auto-trigger print dialog after content loads
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

    // Create a blob from the HTML content
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    // Create download link
    const link = document.createElement('a');
    link.href = url;
    link.download = `${companyName ? companyName.replace(/[^a-zA-Z0-9]/g, "_") + "_" : ""}Cover_Letter_Amresh_Kumar.html`;
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up
    URL.revokeObjectURL(url);
  };

  const resetForm = () => {
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

  return (
    <>
      <Button variant="outline" size="sm" onClick={() => setIsOpen(true)}>
        <FileText className="w-4 h-4 mr-2" />
        Cover Letter
      </Button>
      
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[100] p-4">
          <div className="bg-white rounded-lg max-w-6xl w-full max-h-[95vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-blue-50 to-purple-50">
              <h1 className="text-lg font-bold">Cover Letter Generator</h1>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" onClick={resetForm}>
                  <X className="w-4 h-4 mr-1" />
                  Reset
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={generatePDF}
                  className="bg-green-50 border-green-200 text-green-700 hover:bg-green-100"
                >
                  <FileText className="w-4 h-4 mr-1" />
                  Generate PDF
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={downloadCoverLetterHTML}
                  className="bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100"
                >
                  <Download className="w-4 h-4 mr-1" />
                  Download HTML
                </Button>
                <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex h-[calc(95vh-80px)]">
              {/* Left Panel - Form */}
              <div className="w-1/3 p-6 bg-gray-50 border-r overflow-y-auto">
                <div className="space-y-4">
                  <h3 className="text-md font-semibold text-gray-900 mb-4 flex items-center">
                    <Building className="w-4 h-4 mr-2 text-blue-600" />
                    Company Details
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <input
                      type="text"
                      value={companyDetails.companyName}
                      onChange={(e) => handleInputChange("companyName", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., Google Inc."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Hiring Manager</label>
                    <input
                      type="text"
                      value={companyDetails.hiringManager}
                      onChange={(e) => handleInputChange("hiringManager", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., Mr. John Smith"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <textarea
                      value={companyDetails.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={3}
                      placeholder="Company address (optional)"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                    <input
                      type="text"
                      value={companyDetails.position}
                      onChange={(e) => {
                        handleInputChange("position", e.target.value);
                        handleInputChange("subject", `Application for ${e.target.value} Position`);
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., Senior Java Developer"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
                    <input
                      type="text"
                      value={companyDetails.yearsOfExperience}
                      onChange={(e) => handleInputChange("yearsOfExperience", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., 3+, 5, 2-3"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Current Organization</label>
                    <input
                      type="text"
                      value={companyDetails.currentOrganization}
                      onChange={(e) => handleInputChange("currentOrganization", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., Kanerika Software"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Career Level</label>
                    <select
                      value={companyDetails.careerLevel}
                      onChange={(e) => handleInputChange("careerLevel", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="entry-level">Entry Level</option>
                      <option value="mid-level">Mid Level</option>
                      <option value="senior-level">Senior Level</option>
                      <option value="lead">Lead/Principal</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      Date: {getCurrentDate()}
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="text-sm font-medium text-blue-900 mb-2">Action Options:</h4>
                  <ul className="text-xs text-blue-800 space-y-1">
                    <li>• <strong>Generate PDF:</strong> Opens print dialog with clickable links preserved</li>
                    <li>• <strong>Download HTML:</strong> Downloads file with fully clickable professional links</li>
                    <li>• Current organization personalizes experience section</li>
                    <li>• All links are fully functional in both formats</li>
                  </ul>
                </div>
              </div>

              {/* Right Panel - Live Preview */}
              <div className="w-2/3 p-8 overflow-y-auto bg-white">
                <div className="max-w-3xl mx-auto border border-gray-200 p-8 bg-white shadow-sm" style={{ fontSize: '11px', lineHeight: '1.4' }}>
                  {/* Header */}
                  <div className="text-center mb-4 pb-2 border-b-2 border-gray-800">
                    <h1 className="text-lg font-bold text-gray-900 mb-1 tracking-wider">AMRESH KUMAR</h1>
                    <p className="text-sm font-semibold text-gray-600 mb-2">{companyDetails.position}</p>
                    <div className="text-xs text-gray-700 flex items-center justify-center space-x-2 flex-wrap">
                      <span>
                        <a href="mailto:amreshnitjsr09@gmail.com" className="text-blue-600 hover:underline">
                          amreshnitjsr09@gmail.com
                        </a>
                      </span>
                      <span>|</span>
                      <span>+91 9122501795</span>
                      <span>|</span>
                      <span className="flex items-center">
                        <Linkedin className="w-3 h-3 mr-1" />
                        <a 
                          href="https://www.linkedin.com/in/amresh-kumar-467069183/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          LinkedIn
                        </a>
                      </span>
                      <span>|</span>
                      <span className="flex items-center">
                        <Github className="w-3 h-3 mr-1" />
                        <a 
                          href="https://github.com/Amreshnit" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          GitHub
                        </a>
                      </span>
                      <span>|</span>
                      <span className="flex items-center">
                        <Code className="w-3 h-3 mr-1" />
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
                  <div className="text-right mb-3 text-xs text-gray-600">
                    {getCurrentDate()}
                  </div>

                  {/* Recipient */}
                  {(companyDetails.companyName || companyDetails.address) && (
                    <div className="mb-3 text-xs text-gray-800">
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
                  <div className="mb-3">
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
                  <div className="mt-4 space-y-1 text-xs">
                    <p className="text-gray-900">Sincerely,</p>
                    <div className="mt-6">
                      <p className="font-bold text-gray-900 text-sm">Amresh Kumar</p>
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

export default DynamicCoverLetter;