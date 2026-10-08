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

export type ProjectTone = 'storefront' | 'violet' | 'ember' | 'vorwerk' | 'blossom' | 'night' | 'meadow'

export type ProjectArt = 'store' | 'ledger' | 'signin' | 'leads' | 'timesheet' | 'trading' | 'pos'

export type ProjectCategory = 'ecommerce' | 'business' | 'finance' | 'mobile' | 'website'

export interface Project {
  slug: string
  title: string
  org: string
  years: string
  summary: string
  highlight?: string
  highlightLink?: { text: string, href: string }
  link?: { label: string, href: string }
  tags: string[]
  tone: ProjectTone
  art: ProjectArt
}

export interface ProjectEntry {
  title: string
  org: string
  years?: string
  summary: string
  tags: string[]
  category: ProjectCategory
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
  pitch: 'I build Shopware stores, PHP and Node.js back ends and JavaScript front ends for teams around the world.',
  badge: 'Full-stack engineer',
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
  { value: '2016', label: 'shipping production code' },
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
    points: ['Custom plugins and apps', 'Storefront themes in Twig and SCSS, admin modules in VueJS', 'Elasticsearch search with custom indexes and queries', 'Upgrades to the latest Shopware 6', 'Payment, shipping and ERP integrations'],
  },
  {
    key: 'apps',
    mark: 'API',
    title: 'PHP and Node.js back ends',
    blurb: 'Business web apps, SaaS products, admin tools and APIs in Laravel, Symfony and Node.js. I also move older systems onto current PHP, Symfony and Laravel versions.',
    points: ['Multi-tenant SaaS', 'REST APIs in API Platform, Laravel or Express', 'Legacy PHP upgrades without downtime', 'AWS, Vapor and Docker deploys'],
  },
  {
    key: 'frontend',
    mark: 'V',
    title: 'VueJS, ReactJS and mobile',
    blurb: 'Front ends in VueJS and ReactJS, and cross-platform mobile apps in React\u00a0Native.',
    points: ['VueJS and Nuxt', 'ReactJS and Next.js', 'React\u00a0Native apps', 'Tailwind CSS design systems'],
  },
  {
    key: 'team',
    mark: 'R',
    title: 'Remote team member',
    blurb: 'I join your team for the long term, work in your tools and ship through your review process.',
    points: ['Hours that overlap with yours', 'Jira, GitLab, GitHub, Slack', 'Code review and pairing', 'Long-term retainer or full-time'],
  },
]

export const processSteps: ProcessStep[] = [
  { title: 'Talk', text: 'A short call or email thread about the goal, the users and the deadline.' },
  { title: 'Scope', text: 'A written plan with milestones and an estimate you can take to your team.' },
  { title: 'Build', text: 'A demo on a staging site every week.' },
  { title: 'Launch and support', text: 'I deploy the work and fix any issues after launch. Ongoing maintenance on a monthly plan if you want it.' },
]

export const engagements: Engagement[] = [
  { title: 'Fixed-scope project', terms: 'Quote after a call', text: 'A plugin, a theme, an integration or an upgrade with a clear finish line.' },
  { title: 'Monthly retainer', terms: 'Set hours each month', text: 'Hours each month for features, fixes and upgrades. Most of my clients stay on this.', featured: true },
  { title: 'Full-time remote', terms: 'Employment or contract', text: 'I join your team as a full-time engineer, on your tools and your review process.' },
]

export const featuredProjects: Project[] = [
  {
    slug: 'shopware',
    title: 'Shopware 6 stores and plugins',
    org: 'Shape & Shift · Solio · freelance',
    years: '2021 - now',
    summary: 'Complete online stores and the extensions behind them: Checkout.com payments, the Sprinque B2B-credit app, a blog plugin and a Node.js SDK for Shopware.',
    highlight: 'Stores: Egret, Biomex, van Laack, Cityschuh, Roto-store, Kraft, manomama, Brichbag and more.',
    tags: ['Shopware 6', 'Symfony', 'Node.js', 'VueJS', 'Elasticsearch'],
    tone: 'storefront',
    art: 'store',
  },
  {
    slug: 'accounting',
    title: 'Multi-tenant accounting SaaS',
    org: 'Shape & Shift',
    years: '2021 - 2023',
    summary: 'A bookkeeping platform with double-entry ledger, invoicing, bank reconciliation, payroll and reporting. I wrote Python Lambdas and integrated Stripe, GoCardless bank feeds, AWS Textract OCR, OpenAI, Twilio SMS and more.',
    highlight: 'Project: cybooks',
    highlightLink: { text: 'cybooks', href: 'https://app.cybooks.com.cy/' },
    tags: ['Laravel', 'VueJS', 'AWS', 'OpenAI', 'Stripe'],
    tone: 'violet',
    art: 'ledger',
  },
  {
    slug: 'banking',
    title: 'GLS Bank sign-on and account opening',
    org: 'Solio',
    years: '2023 - now',
    summary: "I maintain GLS Bank's single sign-on with OAuth2 and LDAP, and the business account-opening app with Postident identity checks.",
    tags: ['Symfony', 'OAuth2', 'LDAP'],
    tone: 'ember',
    art: 'signin',
  },
  {
    slug: 'thermomix',
    title: 'Lead management for Thermomix',
    org: 'Solio',
    years: '2023 - now',
    summary: 'A lead management tool on Drupal 11 for Vorwerk Austria: lead assignment, reminders, CSV import and SAP export.',
    tags: ['Drupal 11', 'PHP', 'SAP export'],
    tone: 'vorwerk',
    art: 'leads',
  },
  {
    slug: 'timesheet',
    title: 'Ticketing and time tracking',
    org: 'Solio',
    years: '2023 - now',
    summary: 'A ticketing and time-tracking tool built on Symfony and API Platform, integrated with Jira and GitLab.',
    tags: ['Symfony', 'API Platform', 'Jira', 'GitLab'],
    tone: 'night',
    art: 'timesheet',
  },
  {
    slug: 'posbill',
    title: 'PosBill Mobile ordering app',
    org: 'NFQ',
    years: '2019 - 2021',
    summary: 'The Android ordering app for the PosBill cash register. I restructured the React\u00a0Native codebase, added Redux and wrote native Android modules for multiple printers.',
    link: { label: 'PosBill Mobile on Google Play', href: 'https://play.google.com/store/apps/details?id=com.posbill.posbillmobile.app' },
    tags: ['React Native', 'Redux', 'Android'],
    tone: 'meadow',
    art: 'pos',
  },
  {
    slug: 'crypto',
    title: 'Crypto trading platform',
    org: 'Rikkeisoft',
    years: '2017 - 2019',
    summary: 'A trading platform built on microservices by a team of 13. I built user management, trading between users, real-time disputes and user-to-manager chat, and set up the project structure and Docker for the team.',
    highlight: 'Project: CHIP',
    tags: ['Laravel', 'Node.js', 'VueJS', 'Socket.IO', 'Redis', 'Docker'],
    tone: 'blossom',
    art: 'trading',
  },
]

export const moreProjects: ProjectEntry[] = [
  { title: 'E-learning platform', org: 'Rikkeisoft', years: '2017 - 2019', summary: 'A large e-learning platform built by a team of 38. I was the main front-end developer: turned PSD designs into pages and built the design system with SCSS and webpack.', tags: ['Laravel', 'MySQL', 'jQuery', 'SCSS', 'webpack', 'AWS'], category: 'website' },
  { title: 'Model sales management', org: 'Rikkeisoft', years: '2017 - 2019', summary: 'An enterprise sales system built by a team of 26. As a core developer I built features in plain PHP and SQL and wrote most of the logic as MySQL stored procedures.', tags: ['PHP', 'MySQL', 'jQuery'], category: 'business' },
  { title: 'Company wiki', org: 'NFQ', years: '2019 - 2021', summary: 'An internal knowledge base. I built time tracking, leave requests and more.', tags: ['ReactJS'], category: 'business' },
  { title: 'WordPress plugins and themes', org: 'Junoteam', years: '2016 - 2017', summary: 'Custom plugins and themes for client sites.', tags: ['WordPress', 'Symfony'], category: 'website' },
  { title: 'Mobile banking app', org: 'Freelance', summary: 'I built the UI of a mobile banking app and integrated the APIs for account data and money transfers.', tags: ['React Native'], category: 'mobile' },
  { title: 'Coinbase trading integration', org: 'Freelance', summary: 'Trading through the Coinbase API, with deposits and withdrawals.', tags: ['Node.js', 'Express', 'Coinbase API'], category: 'finance' },
  { title: 'Online store', org: 'Freelance', summary: 'I maintained the storefront and admin of an online store.', tags: ['Yii2', 'ReactJS', 'PostgreSQL'], category: 'ecommerce' },
  { title: 'Excel document management', org: 'Freelance', summary: 'I maintained a healthcare system that exports Excel files in preset formats.', tags: ['ReactJS', 'Laravel'], category: 'business' },
  { title: 'Taiwan tourism news', org: 'Freelance', summary: 'I built the WordPress theme for a tourism news portal in Taiwan.', tags: ['WordPress', 'MySQL'], category: 'website' },
]

export const projectCategoryLabels: Record<ProjectCategory, string> = {
  ecommerce: 'E-commerce',
  business: 'Business app',
  finance: 'Finance',
  mobile: 'Mobile app',
  website: 'Website',
}

export const shopwareStores: string[] = ['Egret', 'Biomex', 'van Laack', 'Cityschuh', 'Roto-store', 'Kraft', 'manomama', 'Brichbag']

export const shopwareExtensions: string[] = ['Checkout.com payments', 'Sprinque B2B credit', 'Blog', 'Shopware Node.js SDK']

export const career: Role[] = [
  { years: '2023 - now', role: 'Software Engineer', org: 'Solio', note: 'Drupal, Symfony, Shopware and Elasticsearch for European clients.' },
  { years: '2021 - 2023', role: 'Software Engineer', org: 'Shape & Shift', note: 'Shopware 6 extensions and a Laravel accounting SaaS.' },
  { years: '2019 - 2021', role: 'Frontend Developer', org: 'NFQ', note: 'ReactJS and React\u00a0Native apps for clients.' },
  { years: '2017 - 2019', role: 'Team Lead', org: 'Rikkeisoft', note: 'Core member on client projects, including real-time features. Promising Employee 2017, Outstanding Employee 2018.' },
  { years: '2016 - 2017', role: 'Software Engineer', org: 'Junoteam', note: 'WordPress and Symfony sites, plugins and themes.' },
  { years: '2017 - now', role: 'Freelance engineer', org: 'Independent', note: 'Stores, plugins, web and mobile apps for clients worldwide.' },
]

export const faqs: Faq[] = [
  { question: 'Where are you based?', answer: 'In Vietnam. I work remotely with clients around the world and keep regular hours that overlap with yours.' },
  { question: 'Do you work full-time or by project?', answer: 'Both. I take full-time remote roles, fixed-scope projects and monthly retainers.' },
  { question: 'Which languages do you work in?', answer: 'English for calls, tickets and documentation.' },
  { question: 'Can you sign an NDA?', answer: 'Yes. Most of my client work is under NDA already.' },
]
