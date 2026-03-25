'use client';

import { motion } from 'framer-motion';
import { Brain, Cloud, Shield, Zap, MessageSquare, Code, Database, Workflow, ArrowRight } from 'lucide-react';
import { useNavigation } from '@/lib/navigation';

const services = [
  {
    icon: Brain,
    title: 'AI-Powered CX',
    description: 'Intelligent customer experience solutions powered by advanced AI algorithms.',
    gradient: 'from-[#FF0000] to-[#CC0000]',
    features: ['AI Chatbots', 'Sentiment Analysis', 'Predictive Support', 'Smart Routing'],
    size: 'large',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions designed for performance and reliability.',
    gradient: 'from-[#171A1F] to-[#0D1117]',
    features: ['Cloud Migration', 'AWS/Azure/GCP', 'Serverless Architecture', '24/7 Monitoring'],
    size: 'medium',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Enterprise-grade security to protect your digital assets.',
    gradient: 'from-[#171A1F] to-[#FF0000]',
    features: ['Threat Detection', 'Compliance', 'Penetration Testing', 'Security Audit'],
    size: 'small',
  },
  {
    icon: Workflow,
    title: 'Digital Engineering',
    description: 'Custom software solutions built for scale and efficiency.',
    gradient: 'from-[#FF0000] to-[#171A1F]',
    features: ['Custom Development', 'API Integration', 'Microservices', 'DevOps'],
    size: 'small',
  },
  {
    icon: MessageSquare,
    title: 'Remote Workforce',
    description: 'Dedicated remote teams that integrate seamlessly with your operations.',
    gradient: 'from-[#171A1F] to-[#FF0000]',
    features: ['Virtual Assistants', 'Tech Support', 'Sales & Marketing', '24/7 Coverage'],
    size: 'medium',
  },
  {
    icon: Zap,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies that deliver measurable results.',
    gradient: 'from-[#FF0000] to-[#CC0000]',
    features: ['SEO & PPC', 'Social Media', 'Content Strategy', 'Analytics'],
    size: 'small',
  },
];

export function PillarsSection() {
  const { navigateTo } = useNavigation();

  return (
    <section className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#FF0000]/5 rounded-full blur-[150px]" />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-[rgba(255,0,0,0.3)] text-[#FF0000] text-sm font-medium mb-4">
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
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-4 gap-4 auto-rows-[200px]">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`
                group relative overflow-hidden rounded-2xl
                ${service.size === 'large' ? 'col-span-2 row-span-2' : ''}
                ${service.size === 'medium' ? 'col-span-2 row-span-1' : ''}
                ${service.size === 'small' ? 'col-span-1 row-span-1' : ''}
              `}
            >
              {/* Glass Background */}
              <div className="absolute inset-0 glass" />
              
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              <div className="absolute inset-0 rounded-2xl border border-[rgba(255,255,255,0.1)]" />
              
              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-black" />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-[#FF0000] transition-colors">
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
                      className="text-xs px-2 py-1 rounded-full bg-[rgba(255,0,0,0.1)] text-[#FF0000] border border-[rgba(255,0,0,0.2)]"
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
              <div className="absolute -inset-1 bg-gradient-to-br from-[#FF0000]/20 to-[#171A1F]/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
