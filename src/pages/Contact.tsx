
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Note: This is a frontend-only implementation
    // In a production environment, you would integrate with a form service like Formspree, EmailJS, etc.
    try {
      // Simulate form submission delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message received!",
        description: "Since this is a static site, please reach out via email or LinkedIn for real inquiries.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: "Demo form only",
        description: "This is a static contact form. Please use the email or LinkedIn links provided.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-devops-navy text-white py-16">
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
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-devops-navy mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-devops-teal/10 p-3 rounded-lg mr-4">
                    <Mail className="text-devops-teal" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-700 mt-1">mohankarthick52@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-devops-teal/10 p-3 rounded-lg mr-4">
                    <Phone className="text-devops-teal" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-700 mt-1">+44-7407036084</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-devops-teal/10 p-3 rounded-lg mr-4">
                    <MapPin className="text-devops-teal" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Location</h3>
                    <p className="text-gray-700 mt-1">Liverpool, UK (Open for Relocation)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-devops-teal/10 p-3 rounded-lg mr-4">
                    <Github className="text-devops-teal" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">GitHub</h3>
                    <a 
                      href="https://github.com/mohankarthikeyan7" 
                      className="text-devops-teal hover:underline mt-1 inline-flex items-center"
                      target="_blank"
                      rel="noreferrer"
                    >
                      github.com/mohankarthikeyan7
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-devops-teal/10 p-3 rounded-lg mr-4">
                    <Linkedin className="text-devops-teal" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">LinkedIn</h3>
                    <a 
                      href="https://linkedin.com/in/mohan-karthick" 
                      className="text-devops-teal hover:underline mt-1 inline-flex items-center"
                      target="_blank"
                      rel="noreferrer"
                    >
                      linkedin.com/in/mohan-karthick
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-medium text-gray-900 mb-2">Work Status</h3>
                <p className="text-gray-700">
                  Post-graduate visa holder (valid until December 2026)
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-devops-navy mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
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
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
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
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-devops-blue hover:bg-devops-blue/90 w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>

              <p className="mt-6 text-sm text-gray-600">
                Your information will only be used to respond to your inquiry. I respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
