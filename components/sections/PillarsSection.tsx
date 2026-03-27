'use client';

import { motion } from 'framer-motion';
import { Brain, Cloud, Shield, Zap, MessageSquare, Code, Database, Workflow, ArrowRight } from 'lucide-react';
import { useNavigation } from '@/lib/navigation';
import { RevealOnScroll, StaggerChildren, StaggerItem, MagneticHover } from '@/components/animations/ScrollAnimations';

const services = [
  {
    icon: Brain,
    title: 'AI-Powered CX',
    description: 'Intelligent customer experience solutions powered by advanced AI algorithms.',
    gradient: 'from-[#22C55E] to-[#0F172A]',
    features: ['AI Chatbots', 'Sentiment Analysis', 'Predictive Support', 'Smart Routing'],
    size: 'large',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions designed for performance and reliability.',
    gradient: 'from-[#059669] to-[#1E293B]',
    features: ['Cloud Migration', 'AWS/Azure/GCP', 'Serverless Architecture', '24/7 Monitoring'],
    size: 'medium',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Enterprise-grade security to protect your digital assets.',
    gradient: 'from-[#059669] to-[#22C55E]',
    features: ['Threat Detection', 'Compliance', 'Penetration Testing', 'Security Audit'],
    size: 'small',
  },
  {
    icon: Workflow,
    title: 'Digital Engineering',
    description: 'Custom software solutions built for scale and efficiency.',
    gradient: 'from-[#22C55E] to-[#059669]',
    features: ['Custom Development', 'API Integration', 'Microservices', 'DevOps'],
    size: 'small',
  },
  {
    icon: MessageSquare,
    title: 'Remote Workforce',
    description: 'Dedicated remote teams that integrate seamlessly with your operations.',
    gradient: 'from-[#059669] to-[#22C55E]',
    features: ['Virtual Assistants', 'Tech Support', 'Sales & Marketing', '24/7 Coverage'],
    size: 'medium',
  },
  {
    icon: Zap,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies that deliver measurable results.',
    gradient: 'from-[#22C55E] to-[#0F172A]',
    features: ['SEO & PPC', 'Social Media', 'Content Strategy', 'Analytics'],
    size: 'small',
  },
];

export function PillarsSection() {
  const { navigateTo } = useNavigation();

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#22C55E]/5 rounded-full blur-[150px]" />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <RevealOnScroll variant="fade-up" duration={0.8} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-[rgba(34,197,94,0.3)] text-[#22C55E] text-sm font-medium mb-4 neon-text neon-border">
            Our Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
            Comprehensive Solutions for
            <br />
            <span className="text-gradient-lime">Modern Business</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From AI-powered customer experience to enterprise cloud infrastructure —
            we deliver end-to-end solutions that transform your operations.
          </p>
        </RevealOnScroll>

        {/* Bento Grid */}
        <StaggerChildren staggerDelay={0.1} className="grid grid-cols-4 gap-4 auto-rows-[200px]">
          {services.map((service, index) => (
            <StaggerItem
              key={service.title}
              className={`
                ${service.size === 'large' ? 'col-span-2 row-span-2' : ''}
                ${service.size === 'medium' ? 'col-span-2 row-span-1' : ''}
                ${service.size === 'small' ? 'col-span-1 row-span-1' : ''}
              `}
            >
            <MagneticHover strength={0.15} className="group relative overflow-hidden rounded-2xl h-full">
              {/* Background Image Placeholder with Hover Zoom */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-[opacity,transform] duration-700 ease-out`}
                />
                {/* Decorative geometric shapes */}
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/[0.03] group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/[0.02] group-hover:scale-110 transition-transform duration-700" />
                <div className={`absolute top-1/2 right-4 w-16 h-16 rotate-45 bg-gradient-to-br ${service.gradient} opacity-[0.07] group-hover:opacity-[0.12] group-hover:scale-110 transition-[opacity,transform] duration-700`} />
              </div>

              {/* Glass Background */}
              <div className="absolute inset-0 glass" />

              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/60 to-transparent rounded-2xl" />

              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              <div className="absolute inset-0 rounded-2xl border border-[rgba(255,255,255,0.1)]" />

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:brightness-110 transition-[transform,filter] duration-700`}>
                  <service.icon className="w-6 h-6 text-black" />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-[#22C55E] group-hover:neon-text-strong transition-colors duration-[400ms]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.slice(0, 3).map((feature) => (
                    <span 
                      key={feature}
                      className="text-xs px-2 py-1 rounded-full bg-[rgba(34,197,94,0.1)] text-[#22C55E] border border-[rgba(34,197,94,0.2)] neon-text"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={() => navigateTo('services')}
                  className="mt-4 flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors group/cta"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-[#22C55E]/20 to-[#059669]/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
            </MagneticHover>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
