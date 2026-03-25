'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Check, Linkedin, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { GlassCard, FadeUp } from '@/components/ui-dp/AnimatedElements';

const serviceOptions = [
  { value: 'digital-marketing', label: 'Digital Marketing' },
  { value: 'remote-workforce', label: 'Remote Workforce' },
  { value: 'web-solutions', label: 'Web Solutions' },
  { value: 'business-growth', label: 'Business Growth' },
  { value: 'not-sure', label: 'Not Sure / Multiple' },
];

const budgetOptions = [
  { value: 'under-1k', label: 'Under $1,000/mo' },
  { value: '1k-5k', label: '$1,000 - $5,000/mo' },
  { value: '5k-10k', label: '$5,000 - $10,000/mo' },
  { value: '10k+', label: '$10,000+/mo' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsLoading(false);
  };

  if (isSubmitted) {
    return (
      <div className="pt-32 pb-20">
        <div className="container-narrow">
          <GlassCard className="p-12 text-center">
            <div className="text-6xl mb-6">✅</div>
            <h1 className="font-display text-3xl font-bold text-text-primary mb-4">
              Message Sent Successfully!
            </h1>
            <p className="text-text-secondary text-lg mb-6">
              Thank you for reaching out. We'll get back to you within 4 hours during business hours.
            </p>
            <p className="text-text-muted">
              While you wait, feel free to explore our services or pricing pages.
            </p>
          </GlassCard>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4">
            Contact Us
          </h1>
          <p className="text-text-secondary text-xl">
            Have questions? We'd love to hear from you. Let's discuss how we can help your business grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <FadeUp>
              <h2 className="font-display text-2xl font-bold text-text-primary mb-6">
                Get In Touch
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#41431B]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#AEB784]" />
                  </div>
              <div>
                <h3 className="font-semibold text-text-primary">Email</h3>
                <a href="mailto:info@virtualcustomersolution.com" className="text-text-secondary hover:text-[#AEB784]">
                  info@virtualcustomersolution.com
                </a>
              </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#41431B]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#AEB784]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">Phone / WhatsApp</h3>
                    <a href="tel:+1234567890" className="text-text-secondary hover:text-[#AEB784]">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#41431B]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#AEB784]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">Office Hours</h3>
                    <p className="text-text-secondary">Mon-Fri 9AM-6PM EST</p>
                    <p className="text-text-muted text-sm">We respond within 4 hours during business hours</p>
                  </div>
                </div>
              </div>

              <h3 className="font-display text-xl font-bold text-text-primary mb-4">
                Follow Us
              </h3>
              <div className="flex gap-3">
                <a href="https://facebook.com/digitalpointllc" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-surface-glass flex items-center justify-center text-text-secondary hover:text-[#AEB784] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/></svg>
                </a>
                <a href="https://instagram.com/digitalpointllc" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-surface-glass flex items-center justify-center text-text-secondary hover:text-[#AEB784] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/company/digitalpointllc" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-surface-glass flex items-center justify-center text-text-secondary hover:text-[#AEB784] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/digitalpointllc" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-surface-glass flex items-center justify-center text-text-secondary hover:text-[#AEB784] transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </FadeUp>
          </div>

          {/* Contact Form */}
          <FadeUp delay={0.2}>
            <GlassCard className="p-8">
              <h2 className="font-display text-2xl font-bold text-text-primary mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-text-secondary text-sm mb-2">Name *</label>
                    <Input
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-surface-glass border-border-glass"
                    />
                  </div>
                  <div>
                    <label className="block text-text-secondary text-sm mb-2">Email *</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-surface-glass border-border-glass"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-text-secondary text-sm mb-2">Phone</label>
                  <Input
                    type="tel"
                    placeholder="+1 (234) 567-890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-surface-glass border-border-glass"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-text-secondary text-sm mb-2">Service Interest</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full h-10 px-3 rounded-lg bg-surface-glass border border-border-glass text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-[#AEB784]"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-text-secondary text-sm mb-2">Budget Range</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full h-10 px-3 rounded-lg bg-surface-glass border border-border-glass text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-[#AEB784]"
                    >
                      <option value="">Select your budget</option>
                      {budgetOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-text-secondary text-sm mb-2">Message *</label>
                  <Textarea
                    placeholder="Tell us about your project or challenges..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-surface-glass border-border-glass min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#41431B] hover:bg-[#AEB784] text-white font-semibold py-4 text-lg"
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                  {!isLoading && <Send className="w-5 h-5 ml-2" />}
                </Button>
              </form>
            </GlassCard>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}
