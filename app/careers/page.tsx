import { SiteShell } from '@/components/layout/SiteShell';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers — Join Our Remote Team',
  description: 'We are hiring in Lahore and remote. Marketing, engineering, support, design — check out open roles at Virtual Customer Solution.',
};

const jobs = [
  {
    title: 'Senior Digital Marketing Specialist',
    type: 'Full-time',
    location: 'Remote / Lahore',
    department: 'Marketing',
    description: 'Lead digital marketing campaigns and manage client relationships.',
    requirements: ['5+ years experience', 'SEO/SEM expertise', 'Analytics proficiency'],
  },
  {
    title: 'Full-Stack Developer',
    type: 'Full-time',
    location: 'Remote / Karachi',
    department: 'Engineering',
    description: 'Build web apps with React, Next.js, and Node.js for our clients.',
    requirements: ['3+ years experience', 'React/Next.js', 'Node.js', 'TypeScript'],
  },
  {
    title: 'Customer Success Manager',
    type: 'Full-time',
    location: 'Remote',
    department: 'Operations',
    description: 'Keep clients happy, handle check-ins, and make sure things run smooth.',
    requirements: ['3+ years experience', 'Excellent communication', 'CRM knowledge'],
  },
  {
    title: 'UI/UX Designer',
    type: 'Full-time',
    location: 'Remote / Islamabad',
    department: 'Design',
    description: 'Design websites, dashboards, and marketing pages in Figma.',
    requirements: ['3+ years experience', 'Figma proficiency', 'Design systems'],
  },
  {
    title: 'DevOps Engineer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Engineering',
    description: 'Manage cloud infrastructure and CI/CD pipelines.',
    requirements: ['4+ years experience', 'AWS/GCP', 'Docker', 'Kubernetes'],
  },
  {
    title: 'Content Writer',
    type: 'Part-time',
    location: 'Remote',
    department: 'Marketing',
    description: 'Write blog posts, social media copy, and email campaigns for our clients.',
    requirements: ['2+ years experience', 'Portfolio required', 'SEO knowledge'],
  },
];

const benefits = [
  'Competitive Salary',
  'Remote Work Flexibility',
  'Health Insurance',
  'Annual Bonuses',
  'Learning Budget',
  'Team Events',
  'Career Growth',
  'Work-Life Balance',
];

export default function CareersPage() {
  return (
    <SiteShell>
      <section className="section-padding bg-gradient-hero">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <div className="badge mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
              Join Our Team
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Build Your Future with <span className="text-gradient-lime">VCS</span>
            </h1>
            <p className="text-xl text-[var(--text-secondary)] mb-8">
              Join Pakistan's leading digital services company and work with global clients.
              We value talent, innovation, and work-life balance.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="#jobs" className="btn-primary">
                View Openings
              </a>
              <a href="#benefits" className="btn-outline">
                Benefits
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="stats" className="section-padding bg-[var(--bg-primary)]">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'Team Members' },
              { value: '200+', label: 'Clients Worldwide' },
              { value: '95%', label: 'Retention Rate' },
              { value: '24/7', label: 'Support' },
            ].map((stat, i) => (
              <div key={i} className="card-accent p-8 text-center">
                <div className="text-4xl font-bold text-gradient-lime mb-2">{stat.value}</div>
                <div className="text-[var(--text-secondary)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="section-padding bg-[var(--bg-secondary)]">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              We offer competitive benefits and a supportive environment for growth.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {benefits.map((benefit, i) => (
              <div key={i} className="glass p-6 text-center hover:border-[#22C55E] transition-all">
                <div className="text-[var(--text-primary)]">{benefit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="jobs" className="section-padding bg-[var(--bg-primary)]">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Find your next role and help us shape the future of digital services.
            </p>
          </div>
          <div className="grid gap-6 max-w-4xl mx-auto">
            {jobs.map((job, i) => (
              <div key={i} className="card-accent p-8 hover:glow-lime-sm transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="badge text-sm">{job.department}</span>
                      <span className="text-sm text-[var(--text-muted)]">{job.type}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                    <p className="text-[var(--text-secondary)] mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, j) => (
                        <span key={j} className="text-xs px-3 py-1 bg-[var(--surface-glass)] rounded-full text-[var(--text-muted)]">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--text-muted)]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {job.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-hero">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Don't see the right role?</h2>
            <p className="text-[var(--text-secondary)] mb-8">
              We're always looking for talented people. Send us your resume and we'll reach out when there's a match.
            </p>
            <a href="mailto:adminatvcs@gmail.com" className="btn-outline">
              Email Us Your Resume
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}