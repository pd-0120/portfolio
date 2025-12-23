export const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
] as const;

export const SKILLS = {
  frontend: [
    { name: 'React', level: 95, color: '#61DAFB' },
    { name: 'TypeScript', level: 90, color: '#3178C6' },
    { name: 'Next.js', level: 88, color: '#000000' },
    { name: 'Material-UI', level: 92, color: '#0081CB' },
    { name: 'Tailwind CSS', level: 85, color: '#38B2AC' },
  ],
  backend: [
    { name: 'Laravel', level: 95, color: '#FF2D20' },
    { name: 'Node.js', level: 90, color: '#339933' },
    { name: 'PHP', level: 92, color: '#777BB4' },
    { name: 'REST APIs', level: 94, color: '#FF6C37' },
    { name: 'GraphQL', level: 80, color: '#E10098' },
  ],
  devops: [
    { name: 'AWS', level: 88, color: '#FF9900' },
    { name: 'Docker', level: 85, color: '#2496ED' },
    { name: 'CI/CD', level: 90, color: '#F05032' },
    { name: 'Kubernetes', level: 75, color: '#326CE5' },
    { name: 'Terraform', level: 70, color: '#7B42BC' },
  ],
  databases: [
    { name: 'MySQL', level: 92, color: '#4479A1' },
    { name: 'MongoDB', level: 88, color: '#47A248' },
    { name: 'PostgreSQL', level: 85, color: '#336791' },
    { name: 'Redis', level: 80, color: '#DC382D' },
  ],
};

export const EXPERIENCES = [
  {
    id: 1,
    title: 'Technical Support Team Member',
    company: 'DBSCHENKER',
    location: 'Sydney, Australia',
    period: 'Oct 2024 - Present',
    description: 'Providing first-level technical support for warehouse operations',
    achievements: [
      'Reduced hardware troubleshooting time by 30%',
      'Supported 200+ warehouse staff with 99% issue resolution',
      'Implemented standardized device imaging processes',
    ],
    technologies: ['Hardware Support', 'WMS', 'IT Troubleshooting', 'Device Management'],
  },
  {
    id: 2,
    title: 'Senior Software Developer',
    company: 'ManekTech',
    location: 'Ahmedabad, India',
    period: 'Jan 2023 - May 2023',
    description: 'Led development of scalable web applications for international clients',
    achievements: [
      'Delivered 3 international projects with 100% on-time completion',
      'Improved code review efficiency by 25% through automation',
      'Mentored 2 junior developers',
    ],
    technologies: ['Laravel', 'React', 'AWS', 'MongoDB', 'REST APIs'],
  },
  {
    id: 3,
    title: 'Team Lead',
    company: 'RAINSTREAMWEB',
    location: 'Ahmedabad, India',
    period: 'Nov 2021 - Nov 2022',
    description: 'Led development team and managed client projects',
    achievements: [
      'Managed team of 4 developers delivering 15+ web applications',
      'Improved project delivery time by 40%',
      'Maintained 95% client satisfaction rate',
    ],
    technologies: ['Team Management', 'Agile', 'Laravel', 'React', 'Node.js'],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'Cognitive Health Platform',
    description: 'AI-driven platform for elderly cognitive health tracking with personalized exercises',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&fit=crop',
    technologies: ['Laravel', 'React', 'AWS', 'Health API', 'Machine Learning'],
    features: [
      'Predictive analytics for cognitive performance',
      'Secure authentication & data encryption',
      'Real-time health monitoring',
      'Caregiver dashboards',
    ],
    github: '#',
    live: '#',
  },
  {
    id: 2,
    title: 'Coinpanda Crypto Platform',
    description: 'Full-stack cryptocurrency tracking with real-time notifications and portfolio management',
    image: 'https://images.unsplash.com/photo-1620336655055-bd87c5f1f6db?w=800&auto=format&fit=crop',
    technologies: ['React', 'Laravel', 'WebSocket', 'AWS', 'Stripe'],
    features: [
      'Real-time price tracking',
      'Multi-wallet integration',
      'Secure transactions',
      'Portfolio analytics',
    ],
    github: '#',
    live: 'https://app.coinpanda.io',
  },
  {
    id: 3,
    title: 'Stream Rooms',
    description: 'Multi-feature platform with real-time chat, e-commerce, and event management',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w-800&auto=format&fit=crop',
    technologies: ['React', 'Vue.js', 'Laravel', 'MongoDB', 'Docker'],
    features: [
      'Real-time chat with WebSocket',
      'E-commerce integration',
      'Event management',
      'Containerized deployment',
    ],
    github: '#',
    live: '#',
  },
];

export const EDUCATION = [
  {
    degree: 'Master of Information and Technology',
    institution: 'Central Queensland University',
    period: 'July 2023 – June 2025',
    location: 'Sydney, Australia',
    grade: 'GPA: 5.936/7',
    description: 'Specializing in Cloud Computing and DevOps',
  },
  {
    degree: 'Bachelor of Information and Communication Technology',
    institution: 'Gujarat Technological University',
    period: 'July 2015 – June 2019',
    location: 'India',
    grade: 'CGPA: 8.91/10',
    description: 'Graduated with First Class Honors',
  },
];

export const CONTACT_INFO = {
  email: 'pareshparmar232@gmail.com',
  phone: '+61 434 532 746',
  location: 'Sydney, Australia',
  linkedin: 'https://linkedin.com/in/pareshparmar',
  github: 'https://github.com/pareshparmar',
  resume: '/resume.pdf',
};