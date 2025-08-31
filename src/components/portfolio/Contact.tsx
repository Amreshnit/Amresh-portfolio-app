import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Linkedin, Github, Code2, Send, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create email content
    const emailSubject = encodeURIComponent(`Contact Form: ${formData.subject}`);
    const emailBody = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent from portfolio contact form
    `);
    
    // Open Gmail with pre-filled content
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=amreshnitjsr09@gmail.com&su=${emailSubject}&body=${emailBody}`;
    window.open(gmailUrl, '_blank');
    
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
    
    // Show success message
    alert("Gmail opened with your message. Please click send in Gmail to submit your message.");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent("Hello Amresh");
    const body = encodeURIComponent("Hi Amresh,\n\nI found your portfolio and would like to connect.\n\nBest regards,");
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=amreshnitjsr09@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello Amresh! I found your portfolio and would like to connect.");
    const whatsappUrl = `https://wa.me/919122501795?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneClick = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleMapClick = () => {
    const mapUrl = "https://www.google.com/maps/place/JAY+MAHAVEER+REAL+ESTATE/@24.9611301,83.9945531,17z/data=!3m1!4b1!4m6!3m5!1s0x398db73208f85233:0x860ff9dbe4f1472!8m2!3d24.9611253!4d83.999424!16s%2Fg%2F11k36q8yj3?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D";
    window.open(mapUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "amreshnitjsr09@gmail.com",
      onClick: handleEmailClick,
      className: "hover:bg-blue-50 dark:hover:bg-blue-950/20"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9122501795",
      onClick: () => handlePhoneClick("+919122501795"),
      className: "hover:bg-green-50 dark:hover:bg-green-950/20"
    },
    {
      icon: Phone,
      label: "Alternate Phone",
      value: "+91 7003417183",
      onClick: () => handlePhoneClick("+917003417183"),
      className: "hover:bg-green-50 dark:hover:bg-green-950/20"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Patel Bhavan, Patel Nagar, Ambedkar Path, Badhaiyabag, Takiya Bazar Near Royal Palace, Sasaram Bihar - 821115",
      onClick: handleMapClick,
      className: "hover:bg-red-50 dark:hover:bg-red-950/20"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/amresh-kumar-467069183/",
      description: "Professional network and career updates",
      className: "hover:bg-blue-50 dark:hover:bg-blue-950/20"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Amreshnit",
      description: "Open source projects and code repositories",
      className: "hover:bg-gray-50 dark:hover:bg-gray-950/20"
    },
    {
      icon: Code2,
      label: "LeetCode",
      href: "https://leetcode.com/u/qoHaLDRJ8N/",
      description: "Coding challenges and problem-solving skills",
      className: "hover:bg-orange-50 dark:hover:bg-orange-950/20"
    }
  ];

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px); 
          }
          50% { 
            transform: translateY(-10px); 
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }
      `}</style>
      
      <section id="contact" className="py-20 bg-gradient-to-br from-background via-background to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                I'm always open to discussing new opportunities, collaborating on interesting projects, 
                or simply having a conversation about technology and software development.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-primary-foreground" />
                      </div>
                      Let's Connect
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">
                      Whether you're looking for a backend developer for your team, want to discuss 
                      a potential project, or just want to connect with a fellow developer, I'd love to hear from you.
                    </p>
                    
                    {/* WhatsApp Button */}
                    <div className="mb-6">
                      <Button
                        onClick={handleWhatsAppClick}
                        className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      >
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.232.002.333.012c.107.01.251-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289-.086.101-.181.226-.259.305-.087.087-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.333.202c.043.072.043.419-.101.824z"/>
                        </svg>
                        Chat on WhatsApp
                      </Button>
                    </div>
                    
                    {/* Contact Details */}
                    <div className="space-y-4">
                      {contactInfo.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                          <div
                            key={index}
                            onClick={item.onClick}
                            className={`flex items-start gap-4 p-4 rounded-lg transition-all duration-300 cursor-pointer transform hover:scale-105 ${item.className} border border-transparent hover:border-primary/20 hover:shadow-md`}
                          >
                            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center shrink-0 shadow-lg">
                              <IconComponent className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-sm text-muted-foreground mb-1">
                                {item.label}
                              </div>
                              <div className="text-foreground text-sm leading-relaxed">{item.value}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Embedded Map */}
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm overflow-hidden">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      Find Me Here
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="relative h-64 w-full">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.4089876543!2d83.9945531!3d24.9611301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398db73208f85233%3A0x860ff9dbe4f1472!2sJAY%20MAHAVEER%20REAL%20ESTATE!5e0!3m2!1sen!2sin!4v1693123456789!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-b-lg"
                      ></iframe>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                    </div>
                    <div className="p-4">
                      <Button
                        onClick={handleMapClick}
                        variant="outline"
                        className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        Open in Google Maps
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Links */}
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Follow Me</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {socialLinks.map((social, index) => {
                        const IconComponent = social.icon;
                        return (
                          <a 
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 group transform hover:scale-105 cursor-pointer border border-transparent hover:border-primary/20 hover:shadow-md ${social.className}`}
                          >
                            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center shrink-0 group-hover:shadow-lg transition-all duration-300">
                              <IconComponent className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <div>
                              <div className="font-medium">{social.label}</div>
                              <div className="text-sm text-muted-foreground">
                                {social.description}
                              </div>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                        <Send className="w-5 h-5 text-primary-foreground" />
                      </div>
                      Send a Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="font-medium">Full Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary hover:border-primary/50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="font-medium">Email Address</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                            className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary hover:border-primary/50"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="font-medium">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="What's this about?"
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary hover:border-primary/50"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message" className="font-medium">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell me about your project, idea, or just say hello..."
                          rows={6}
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary hover:border-primary/50 resize-none"
                        />
                      </div>
                      
                      <Button 
                        onClick={handleSubmit}
                        disabled={isSubmitting || !formData.name || !formData.email || !formData.subject || !formData.message}
                        className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Quick Response Note */}
            <div className={`text-center mt-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Card className="shadow-lg bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-primary/20 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                      <MessageCircle className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Quick Response Guaranteed
                  </h3>
                  <p className="text-muted-foreground">
                    I typically respond to all messages within 24 hours. For urgent matters, 
                    feel free to reach out via phone or WhatsApp for faster communication.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Floating Animation Elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;