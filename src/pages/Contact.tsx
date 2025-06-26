
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Users, Briefcase } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general', // general, portfolio, opportunities, devops
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://mk-portfolio-form-backend.onrender.com/form-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `Inquiry Type: ${formData.inquiryType}\nSubject: ${formData.subject}\n\n${formData.message}`,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          inquiryType: 'general',
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="futuristic-bg min-h-screen">
      <div className="bg-gradient-to-r from-cyber-blue to-cyber-purple text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
          <p className="text-xl text-gray-300">
            Let's connect and discuss potential opportunities
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="glass-card p-6 hover-lift">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-cyber-blue/20 p-3 rounded-lg mr-4">
                    <Mail className="text-cyber-blue" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Email</h3>
                    <p className="text-gray-300 mt-1">mohankarthick52@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cyber-purple/20 p-3 rounded-lg mr-4">
                    <Phone className="text-cyber-purple" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Phone</h3>
                    <p className="text-gray-300 mt-1">+44-7407036084</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cyber-cyan/20 p-3 rounded-lg mr-4">
                    <MapPin className="text-cyber-cyan" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Location</h3>
                    <p className="text-gray-300 mt-1">Liverpool, UK (Open for Relocation)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-cyber-blue/20 p-3 rounded-lg mr-4">
                    <Github className="text-cyber-blue" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">GitHub</h3>
                    <a 
                      href="https://github.com/mohankarthikeyan7" 
                      className="text-cyber-blue hover:text-cyber-cyan transition-colors mt-1 inline-flex items-center"
                      target="_blank"
                      rel="noreferrer"
                    >
                      github.com/mohankarthikeyan7
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-cyber-cyan/20 p-3 rounded-lg mr-4">
                    <Linkedin className="text-cyber-cyan" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">LinkedIn</h3>
                    <a 
                      href="https://www.linkedin.com/in/mohan-karthick" 
                      className="text-cyber-cyan hover:text-cyber-blue transition-colors mt-1 inline-flex items-center"
                      target="_blank"
                      rel="noreferrer"
                    >
                      linkedin.com/in/mohan-karthick
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <h3 className="font-medium text-white mb-2">Work Status</h3>
                <p className="text-gray-300">
                  Post-graduate visa holder (valid until December 2026)
                </p>
              </div>
            </div>

            {/* Services Offered Section */}
            <div className="glass-card p-6 hover-lift mt-8">
              <h3 className="text-xl font-bold text-cyber-cyan mb-4">What I Can Help With</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-cyber-blue/20 p-2 rounded-lg mr-3">
                    <Code className="text-cyber-blue" size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white text-sm">Portfolio Websites</h4>
                    <p className="text-gray-300 text-sm">Custom portfolio development like this one</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-cyber-purple/20 p-2 rounded-lg mr-3">
                    <Briefcase className="text-cyber-purple" size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white text-sm">Available for Hire</h4>
                    <p className="text-gray-300 text-sm">DevOps roles and career opportunities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-cyber-cyan/20 p-2 rounded-lg mr-3">
                    <Users className="text-cyber-cyan" size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white text-sm">Cloud & DevOps Consulting</h4>
                    <p className="text-gray-300 text-sm">Technical discussions and consultations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass-card p-6 hover-lift">
              <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyber-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyber-blue"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-300 mb-1">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/20 text-white rounded-md px-3 py-2 focus:border-cyber-blue focus:outline-none"
                  >
                    <option value="general" className="bg-gray-800">General Inquiry</option>
                    <option value="portfolio" className="bg-gray-800">Portfolio Website Development</option>
                    <option value="opportunities" className="bg-gray-800">Available for Hire</option>
                    <option value="devops" className="bg-gray-800">DevOps/Cloud Consulting</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    required
                    className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyber-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={6}
                    required
                    className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyber-blue resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-gradient-to-r from-cyber-blue to-cyber-purple hover:from-cyber-purple hover:to-cyber-cyan transition-all duration-300 w-full md:w-auto glow-blue"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>

              <div className="mt-8 pt-6 border-t border-white/20">
                <h3 className="text-lg font-bold text-cyber-cyan mb-3">Quick Contact Options</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
                    <Code className="text-cyber-blue mx-auto mb-2" size={24} />
                    <h4 className="font-medium text-white text-sm mb-1">Portfolio Development</h4>
                    <p className="text-gray-300 text-xs">Need a professional portfolio like this one?</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
                    <Briefcase className="text-cyber-purple mx-auto mb-2" size={24} />
                    <h4 className="font-medium text-white text-sm mb-1">Available for Hire</h4>
                    <p className="text-gray-300 text-xs">Have a DevOps role or contract opportunity?</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
                    <Users className="text-cyber-cyan mx-auto mb-2" size={24} />
                    <h4 className="font-medium text-white text-sm mb-1">DevOps Consulting</h4>
                    <p className="text-gray-300 text-xs">Need help with cloud infrastructure or CI/CD?</p>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-sm text-gray-400">
                Your information will only be used to respond to your inquiry. I respect your privacy and will get back to you within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
