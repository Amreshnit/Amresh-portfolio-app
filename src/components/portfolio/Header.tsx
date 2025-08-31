import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Make sure this path is correct for your resume file
    link.download = 'Amresh_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Professional Logo Component
  const ProfessionalLogo = () => (
    <div className="flex items-center space-x-3">
      <div className="relative">
        {/* Outer ring with gradient */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-blue-700 p-0.5 shadow-lg">
          <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
            {/* Inner monogram */}
            <div className="relative">
              <span className="text-lg font-bold bg-gradient-to-br from-blue-500 via-purple-600 to-blue-700 bg-clip-text text-transparent">
                AK
              </span>
              {/* Subtle accent dot */}
              <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-foreground leading-tight">
          Amresh Kumar
        </span>
        <span className="text-xs text-muted-foreground font-medium tracking-wide">
          SOFTWARE ENGINEER
        </span>
      </div>
    </div>
  );

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Professional Logo */}
          <ProfessionalLogo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Social Links & Resume */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/Amreshnit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              title="GitHub"
            >
              <img 
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" 
                alt="GitHub"
                className="w-5 h-5"
                style={{ filter: 'invert(0.6)' }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/amresh-kumar-467069183/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              title="LinkedIn"
            >
              <img 
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" 
                alt="LinkedIn"
                className="w-5 h-5"
                style={{ filter: 'invert(0.5) sepia(1) saturate(5) hue-rotate(200deg)' }}
              />
            </a>
            <a
              href="https://leetcode.com/u/qoHaLDRJ8N/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              title="LeetCode"
            >
              <img 
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/leetcode.svg" 
                alt="LeetCode"
                className="w-5 h-5"
                style={{ filter: 'invert(0.5) sepia(1) saturate(3) hue-rotate(25deg)' }}
              />
            </a>
            <Button variant="gradient" size="sm" onClick={handleResumeDownload}>
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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md rounded-lg shadow-medium mt-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
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
                  className="text-muted-foreground hover:text-primary transition-colors"
                  title="GitHub"
                >
                  <img 
                    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" 
                    alt="GitHub"
                    className="w-5 h-5"
                    style={{ filter: 'invert(0.6)' }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/amresh-kumar-467069183/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  title="LinkedIn"
                >
                  <img 
                    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" 
                    alt="LinkedIn"
                    className="w-5 h-5"
                    style={{ filter: 'invert(0.5) sepia(1) saturate(5) hue-rotate(200deg)' }}
                  />
                </a>
                <a
                  href="https://leetcode.com/u/qoHaLDRJ8N/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  title="LeetCode"
                >
                  <img 
                    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/leetcode.svg" 
                    alt="LeetCode"
                    className="w-5 h-5"
                    style={{ filter: 'invert(0.5) sepia(1) saturate(3) hue-rotate(25deg)' }}
                  />
                </a>
              </div>
              <div className="px-3 py-2">
                <Button 
                  variant="gradient" 
                  size="sm" 
                  className="w-full"
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
  );
};

export default Header;