export interface NavLink {
  to: string
  label: string
}

export interface Stat {
  value: string
  label: string
}

export interface Service {
  key: string
  mark: string
  title: string
  blurb: string
  points: string[]
}

export interface ProcessStep {
  title: string
  text: string
}

export interface Engagement {
  title: string
  terms: string
  text: string
  featured?: boolean
}

export type ProjectTone = 'dusk' | 'ocean' | 'ember' | 'forest' | 'blossom' | 'night'

export interface Project {
  slug: string
  title: string
  org: string
  years: string
  summary: string
  tags: string[]
  tone: ProjectTone
}

export interface Role {
  years: string
  role: string
  org: string
  note: string
}

export interface Faq {
  question: string
  answer: string
}

export const site = {
  name: 'Phạm Bá Tuấn Khoa',
  shortName: 'Khoa Phạm',
  firstName: 'Khoa',
  role: 'Full-stack software engineer',
  email: 'pbtkhoa@gmail.com',
  github: 'https://github.com/pbtkhoa',
  linkedin: 'https://linkedin.com/in/pbtkhoa',
  cv: '/pham-ba-tuan-khoa-cv.pdf',
  status: 'Open to remote roles and freelance projects',
  headline: "Hi, I'm Khoa. I build the shops and tools your team runs on.",
  pitch: 'I build Shopware stores, Laravel and Symfony apps and Vue front ends for teams around the world, from the database to the deploy.',
  badge: { label: 'Full-stack engineer', stack: 'PHP · Vue · React' },
  replyPromise: 'I reply within one working day.',
} as const

export const navLinks: NavLink[] = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export const stats: Stat[] = [
  { value: '10', label: 'years shipping production code' },
  { value: '20+', label: 'online stores and apps delivered' },
  { value: '2017', label: 'freelancing alongside every job' },
  { value: '5', label: 'companies, plus freelance clients' },
]

export const clients: string[] = ['van Laack', 'Vorwerk Thermomix', 'GLS Bank', 'Egret', 'Biomex', 'Cityschuh', 'manomama', 'Brichbag', 'Roto-store', 'Kraft']

export const services: Service[] = [
  {
    key: 'shopware',
    mark: 'S6',
    title: 'Shopware 6 development',
    blurb: 'Plugins, apps and themes, complete store setups, version upgrades and integrations with payment, shipping and ERP systems.',
    points: ['Custom plugins and apps', 'Storefront themes in Twig and Vue', 'Upgrades to the latest Shopware 6', 'Payment, shipping and ERP integrations'],
  },
  {
    key: 'apps',
    mark: 'L',
    title: 'Laravel and Symfony apps',
    blurb: 'Business web apps, SaaS products, admin tools and APIs. I also move older systems onto current PHP, Symfony and Laravel versions.',
    points: ['Multi-tenant SaaS', 'REST APIs and API Platform', 'Legacy upgrades without downtime', 'AWS, Vapor and Docker deploys'],
  },
  {
    key: 'frontend',
    mark: 'V',
    title: 'Vue, React and mobile',
    blurb: 'Fast front ends in Vue 3 and React, and cross-platform mobile apps in React Native.',
    points: ['Vue 3 and Nuxt', 'React and Next.js', 'React Native apps', 'Tailwind CSS design systems'],
  },
  {
    key: 'team',
    mark: 'R',
    title: 'Remote team member',
    blurb: 'Join your team for months, not days. I keep hours that overlap with yours, use your tools and ship through your review process.',
    points: ['Hours that overlap with yours', 'Jira, GitLab, GitHub, Slack', 'Code review and pairing', 'Long-term retainer or full-time'],
  },
]

export const processSteps: ProcessStep[] = [
  { title: 'Talk', text: 'A short call or email thread about the goal, the users and the deadline.' },
  { title: 'Scope', text: 'A written plan with milestones and an estimate you can take to your team.' },
  { title: 'Build', text: 'Weekly demos on a staging site. You see progress every week, not just at the end.' },
  { title: 'Launch and support', text: 'Deploy, monitor, fix. Ongoing maintenance on a monthly plan if you want it.' },
]

export const engagements: Engagement[] = [
  { title: 'Fixed-scope project', terms: 'Quote after a call', text: 'A plugin, a theme, an integration or an upgrade with a clear finish line.' },
  { title: 'Monthly retainer', terms: 'Set hours each month', text: 'A steady block of hours for features, fixes and upgrades. Most of my clients stay on this.', featured: true },
  { title: 'Full-time remote', terms: 'Employment or contract', text: 'I join your team as a full-time engineer, on your tools and your review process.' },
]

export const projects: Project[] = [
  { slug: 'shopware', title: 'Shopware 6 stores and plugins', org: 'Shape & Shift · freelance', years: '2021 – now', summary: 'Storefronts for fashion and B2B shops and the extensions behind them: Checkout.com payments, the Sprinque B2B-credit app, a blog plugin and a Node.js SDK for Shopware.', tags: ['Symfony', 'Vue', 'MySQL', 'Shopware 6'], tone: 'dusk' },
  { slug: 'accounting', title: 'Multi-tenant accounting SaaS', org: 'Shape & Shift', years: '2021 – 2023', summary: 'Double-entry ledger, invoicing, bank reconciliation, payroll and reporting. Python Lambdas, OpenAI and Twilio SMS on Laravel Vapor.', tags: ['Laravel', 'Vue 3', 'AWS', 'Stripe'], tone: 'ocean' },
  { slug: 'banking', title: 'GLS Bank sign-on and account opening', org: 'Solio', years: '2023 – now', summary: 'Single sign-on with OAuth2 and LDAP, and a business account-opening app with Postident identity checks.', tags: ['Symfony', 'OAuth2', 'LDAP'], tone: 'ember' },
  { slug: 'thermomix', title: 'Lead management for Thermomix', org: 'Solio', years: '2023 – now', summary: 'A Drupal 11 tool for Vorwerk Austria: lead assignment, reminders, CSV import and SAP export.', tags: ['Drupal 11', 'PHP', 'SAP export'], tone: 'forest' },
  { slug: 'crypto', title: 'Crypto trading platform', org: 'Rikkeisoft', years: '2017 – 2019', summary: 'A microservice trading system built by a team of 13. I was team lead and core developer.', tags: ['Laravel', 'Node.js', 'Socket.IO', 'Docker'], tone: 'blossom' },
  { slug: 'posbill', title: 'Posbill point of sale', org: 'NFQ', years: '2019 – 2021', summary: 'A point-of-sale app for hospitality, built in React Native.', tags: ['React Native', 'React'], tone: 'night' },
]

export const career: Role[] = [
  { years: '2023 – now', role: 'Software Engineer', org: 'Solio', note: 'Drupal, Symfony and Shopware for Austrian and German clients.' },
  { years: '2021 – 2023', role: 'Software Engineer', org: 'Shape & Shift', note: 'Shopware 6 extensions and a Laravel accounting SaaS.' },
  { years: '2019 – 2021', role: 'Frontend Developer', org: 'NFQ', note: 'React and React Native apps for clients.' },
  { years: '2017 – 2019', role: 'Team Lead', org: 'Rikkeisoft', note: 'Led client projects, set up the Git workflow. Outstanding Employee 2018.' },
  { years: '2016 – 2017', role: 'Software Engineer', org: 'Junoteam', note: 'WordPress and Symfony sites, plugins and themes.' },
  { years: '2017 – now', role: 'Freelance engineer', org: 'Independent', note: 'Stores, plugins, web and mobile apps for clients worldwide.' },
]

export const faqs: Faq[] = [
  { question: 'Where are you based?', answer: 'In Vietnam. I work remotely with clients around the world and keep regular hours that overlap with yours.' },
  { question: 'Do you work full-time or by project?', answer: 'Both. I take full-time remote roles, fixed-scope projects and monthly retainers.' },
  { question: 'Which languages do you work in?', answer: 'English for calls, tickets and documentation.' },
  { question: 'Can you sign an NDA?', answer: 'Yes. Most of my client work is under NDA already.' },
]

export const contactNeeds: string[] = ['Shopware project', 'Laravel or Symfony app', 'Vue or React front end', 'Full-time remote role']

export const contactBudgets: string[] = ['Not sure yet', 'Under 5k', '5k – 20k', 'Over 20k', 'Salaried role']
