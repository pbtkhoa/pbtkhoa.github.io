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

export type ArtKey = 'store' | 'ledger' | 'signin' | 'leads' | 'timesheet' | 'trading' | 'pos'

export interface WorkLink {
  before?: string
  label: string
  href: string
  after?: string
}

export interface FeaturedWork {
  art: ArtKey
  org: string
  years: string
  title: string
  lede: string
  built: string[]
  note?: string
  link?: WorkLink
  stack: string
}

export interface WorkEntry {
  title: string
  text: string
  stack: string
}

export interface WorkGroup {
  org: string
  years: string
  entries: WorkEntry[]
}

export type CareerTone = 'job' | 'lead' | 'free'

export interface CareerRow {
  org: string
  role: string
  years: string
  start: number
  end: number
  bar: string
  tone: CareerTone
  awards?: string[]
}

export interface Faq {
  question: string
  answer: string
}

const range = (from: string, to: string) => `${from}\u00a0–\u00a0${to}`

export const site = {
  name: 'Pham Ba Tuan Khoa',
  shortName: 'Khoa Pham',
  firstName: 'Khoa',
  role: 'Full-stack software engineer',
  email: 'pbtkhoa@gmail.com',
  github: 'https://github.com/pbtkhoa',
  linkedin: 'https://linkedin.com/in/pbtkhoa',
  cv: '/pham-ba-tuan-khoa-cv.pdf',
  status: 'Open to remote roles and freelance projects',
  headline: "Hi, I'm Khoa. I build the shops and tools your team runs on.",
  highlights: ['shops', 'tools'],
  pitch: 'I build Shopware stores, PHP and Node.js back ends and JavaScript front ends for teams around the world.',
  badge: 'Khoa Pham, full-stack engineer',
  replyPromise: 'I reply within one working day.',
  wallCaption: "Products I've built, from storefronts to bank sign-on.",
} as const

export const navLinks: NavLink[] = [
  { to: '/work', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export const stats: Stat[] = [
  { value: '2016', label: 'shipping production code' },
  { value: '2017', label: 'taking freelance projects on the side' },
  { value: '5', label: 'companies, plus freelance clients' },
]

export const clients: string[] = ['van Laack', 'Vorwerk Thermomix', 'GLS Bank', 'Egret', 'Biomex', 'Cityschuh', 'manomama', 'Brichbag', 'Roto-store', 'Kraft']

export const services: Service[] = [
  {
    key: 'shopware',
    mark: 'S6',
    title: 'Shopware 6 development',
    blurb: 'Plugins, apps and themes, store setups, upgrades and payment, shipping and ERP integrations.',
    points: ['Custom plugins and apps', 'Twig, SCSS, VueJS admin', 'Elasticsearch'],
  },
  {
    key: 'apps',
    mark: 'API',
    title: 'PHP and Node.js back ends',
    blurb: 'Web apps, SaaS products, admin tools and APIs in Laravel, Symfony and Node.js.',
    points: ['Multi-tenant SaaS', 'REST APIs', 'Legacy PHP upgrades'],
  },
  {
    key: 'frontend',
    mark: 'UI',
    title: 'VueJS, ReactJS and mobile',
    blurb: 'Front ends in VueJS and ReactJS, and cross-platform apps in React\u00a0Native.',
    points: ['VueJS and Nuxt', 'ReactJS and Next.js', 'React\u00a0Native'],
  },
  {
    key: 'team',
    mark: 'R',
    title: 'Remote team member',
    blurb: 'I join your team for the long term, work in your tools and ship through your review.',
    points: ['Overlapping hours', 'Jira, GitLab, GitHub', 'Retainer or full-time'],
  },
]

export const aiService: Service = {
  key: 'ai',
  mark: 'AI',
  title: 'Working with AI',
  blurb: "I use Claude Code and Gemini in my daily work, and I've built OpenAI API features into a production accounting SaaS. I read every change before it goes into your repo, and I work within your team's rules for AI tools.",
  points: ['Claude Code and Gemini every day', 'OpenAI API and AWS Textract in production', 'No client secrets in prompts'],
}

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

export const featuredWork: FeaturedWork[] = [
  {
    art: 'store',
    org: 'Shape & Shift, Solio and freelance',
    years: range('2021', 'now'),
    title: 'Shopware 6 stores and plugins',
    lede: 'Complete online stores, and the extensions they run on.',
    built: ['Checkout.com payments', 'The Sprinque B2B-credit app', 'A blog plugin and a Node.js SDK for Shopware'],
    note: 'Stores for Egret, Biomex, van Laack, Cityschuh, Roto-store, Kraft, manomama, Brichbag and others.',
    stack: 'Shopware 6, Symfony, Node.js, VueJS, Elasticsearch',
  },
  {
    art: 'ledger',
    org: 'Shape & Shift',
    years: range('2021', '2023'),
    title: 'Multi-tenant accounting SaaS',
    lede: 'Double-entry ledger, invoicing, bank reconciliation, payroll and reporting in one product.',
    built: ['Python Lambdas on AWS', 'Stripe payments and GoCardless bank feeds', 'OCR with AWS Textract, OpenAI features and Twilio SMS'],
    link: { before: 'Live at ', label: 'cybooks', href: 'https://app.cybooks.com.cy/', after: '.' },
    stack: 'Laravel, VueJS, MySQL, AWS, Python',
  },
  {
    art: 'signin',
    org: 'Solio',
    years: range('2023', 'now'),
    title: 'GLS Bank sign-on and account opening',
    lede: "I maintain GLS Bank's single sign-on and the app businesses use to open an account.",
    built: ['Single sign-on with OAuth2 and LDAP', 'Business account opening with Postident identity checks'],
    stack: 'Symfony, OAuth2, LDAP',
  },
  {
    art: 'pos',
    org: 'NFQ',
    years: range('2019', '2021'),
    title: 'PosBill Mobile ordering app',
    lede: 'The Android ordering app for the PosBill cash register.',
    built: ['A restructured React\u00a0Native codebase', 'Redux for app state', 'Native Android modules for several printer models'],
    link: { label: 'PosBill Mobile on Google Play', href: 'https://play.google.com/store/apps/details?id=com.posbill.posbillmobile.app' },
    stack: 'React Native, Redux, Android',
  },
]

export const workGroups: WorkGroup[] = [
  {
    org: 'Solio',
    years: range('2023', 'now'),
    entries: [
      { title: 'Lead management for Thermomix', text: 'Built for Vorwerk Austria on Drupal 11: lead assignment, reminders, CSV import and SAP export.', stack: 'Drupal 11, PHP' },
      { title: 'Ticketing and time tracking', text: 'A ticketing and time-tracking tool on Symfony and API Platform, connected to Jira and GitLab.', stack: 'Symfony, API Platform, Jira, GitLab' },
      { title: 'Elasticsearch for Shopware and Drupal', text: 'Custom Elasticsearch indexes and queries for Shopware stores and Drupal sites.', stack: 'Elasticsearch, Shopware, Drupal' },
    ],
  },
  {
    org: 'NFQ',
    years: range('2019', '2021'),
    entries: [
      { title: 'Company wiki', text: 'An internal knowledge base. I built time tracking, leave requests and more.', stack: 'ReactJS' },
    ],
  },
  {
    org: 'Rikkeisoft',
    years: range('2017', '2019'),
    entries: [
      { title: 'CHIP crypto trading platform', text: 'Microservices built by a team of 13. I built user management, trading between users, real-time disputes and user-to-manager chat, and set up the project structure and Docker.', stack: 'Laravel, Node.js, VueJS, Socket.IO, Redis, Docker' },
      { title: 'E-learning platform', text: 'A large platform built by a team of 38. I was the main front-end developer: I turned PSD designs into pages and built the design system with SCSS and webpack.', stack: 'Laravel, MySQL, jQuery, SCSS, webpack, AWS' },
      { title: 'Model sales management', text: 'An enterprise sales system built by a team of 26. As a core developer I wrote features in plain PHP and SQL, with most of the logic in MySQL stored procedures.', stack: 'PHP, MySQL, jQuery' },
    ],
  },
  {
    org: 'Junoteam',
    years: range('2016', '2017'),
    entries: [
      { title: 'WordPress plugins and themes', text: 'Custom plugins and themes for client sites.', stack: 'WordPress, Symfony' },
    ],
  },
  {
    org: 'Freelance',
    years: 'since 2017',
    entries: [
      { title: 'Mobile banking app', text: 'I built the UI and connected the APIs for account data and money transfers.', stack: 'React Native' },
      { title: 'Coinbase trading integration', text: 'Trading through the Coinbase API, with deposits and withdrawals.', stack: 'Node.js, Express, Coinbase API' },
      { title: 'Online store', text: 'I maintained the storefront and the admin of an online store.', stack: 'Yii2, ReactJS, PostgreSQL' },
      { title: 'Excel document management', text: 'I maintained a healthcare system that exports Excel files in preset formats.', stack: 'ReactJS, Laravel' },
      { title: 'Taiwan tourism news', text: 'I built the WordPress theme for a tourism news portal.', stack: 'WordPress, MySQL' },
    ],
  },
]

export const careerAxis: string[] = ['2016', '2018', '2020', '2022', '2024', 'now']

export const career: CareerRow[] = [
  { org: 'Solio', role: 'Software Engineer', years: range('2023', 'now'), start: 7, end: 10, bar: 'Drupal, Symfony, Shopware', tone: 'job' },
  { org: 'Shape & Shift', role: 'Software Engineer', years: range('2021', '2023'), start: 5, end: 7, bar: 'Shopware 6, Laravel SaaS', tone: 'job' },
  { org: 'NFQ', role: 'Frontend Developer', years: range('2019', '2021'), start: 3, end: 5, bar: 'ReactJS, React Native', tone: 'job' },
  { org: 'Rikkeisoft', role: 'Team Lead', years: range('2017', '2019'), start: 1, end: 3, bar: 'Laravel, Node.js, VueJS', tone: 'lead', awards: ['Promising Employee 2017', 'Outstanding Employee 2018'] },
  { org: 'Junoteam', role: 'Software Engineer', years: range('2016', '2017'), start: 0, end: 1, bar: 'WordPress', tone: 'job' },
  { org: 'Freelance', role: 'Freelance engineer', years: range('2017', 'now'), start: 1, end: 10, bar: 'Stores, plugins, web and mobile apps', tone: 'free' },
]

export const faqs: Faq[] = [
  { question: 'Where are you based?', answer: 'In Vietnam. I work remotely with clients around the world and keep regular hours that overlap with yours.' },
  { question: 'Do you work full-time or by project?', answer: 'Both. I take full-time remote roles, fixed-scope projects and monthly retainers.' },
  { question: 'Which languages do you work in?', answer: 'English for calls, tickets and documentation.' },
  { question: 'Can you sign an NDA?', answer: 'Yes. Most of my client work is under NDA already.' },
]
