
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const contactElement = document.getElementById('contact');
    if (contactElement) {
      observer.observe(contactElement);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <h2 className="text-5xl md:text-7xl font-extralight mb-4 tracking-[0.1em]">
            GET IN
          </h2>
          <h3 className="text-3xl md:text-5xl font-extralight text-yellow-400 tracking-[0.1em] mb-8">
            TOUCH
          </h3>
          <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
            Ready to create something beautiful together? Let's discuss your vision and bring it to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact Info */}
          <div className={`lg:col-span-4 transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-yellow-400 mt-1" />
                <div>
                  <div className="text-sm text-gray-400 tracking-[0.1em] mb-1">EMAIL</div>
                  <div className="text-white font-light">alex@example.com</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-yellow-400 mt-1" />
                <div>
                  <div className="text-sm text-gray-400 tracking-[0.1em] mb-1">PHONE</div>
                  <div className="text-white font-light">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-yellow-400 mt-1" />
                <div>
                  <div className="text-sm text-gray-400 tracking-[0.1em] mb-1">LOCATION</div>
                  <div className="text-white font-light">New York, NY</div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <div className="text-sm text-gray-400 tracking-[0.1em] mb-4">FOLLOW</div>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-yellow-400 transition-colors duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-yellow-400 transition-colors duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-yellow-400 transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-8 transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm text-gray-400 tracking-[0.1em] mb-3">NAME</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-0 border-b border-gray-700 rounded-none px-0 py-4 text-white placeholder-gray-600 focus:border-yellow-400 focus:ring-0"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-400 tracking-[0.1em] mb-3">EMAIL</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-0 border-b border-gray-700 rounded-none px-0 py-4 text-white placeholder-gray-600 focus:border-yellow-400 focus:ring-0"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm text-gray-400 tracking-[0.1em] mb-3">MESSAGE</label>
                <textarea
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-0 border-b border-gray-700 px-0 py-4 text-white placeholder-gray-600 focus:border-yellow-400 focus:outline-none resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <div className="pt-8">
                <Button
                  type="submit"
                  className="group relative px-12 py-4 bg-transparent border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-500 tracking-[0.1em] font-light"
                >
                  <Send className="w-4 h-4 mr-3" />
                  SEND MESSAGE
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
