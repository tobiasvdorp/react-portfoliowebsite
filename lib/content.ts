import { RiDiscordFill, RiGithubFill, RiLinkedinFill } from 'react-icons/ri';
import type { IconType } from 'react-icons';
import {
  RiCss3Line,
  RiHtml5Line,
  RiLayoutGridLine,
  RiReactjsLine,
  RiSettings3Line,
} from 'react-icons/ri';
import { SiTailwindcss, SiNextdotjs, SiWordpress } from 'react-icons/si';

export const navItems = [
  { label: 'Over mij', href: '#about' },
  { label: 'Ervaring', href: '#experience' },
  { label: 'Projecten', href: '#projects' },
  { label: 'Vaardigheden', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const heroContent = {
  kicker: 'Front-end developer & OpenICT student',
  title: 'Tobias van Dorp',
  highlight: 'Digitale ervaringen die toegankelijk en speels aanvoelen.',
  description:
    "Ik ben een 22-jarige developer uit Maarn die graag techniek en creativiteit combineert. Als student aan OpenICT bouw ik gebruiksvriendelijke interfaces en experimenteer ik met nieuwe tools om ideeën tot leven te brengen.",
  location: 'Maarn, Utrecht, Nederland',
  primaryAction: { label: 'Bekijk projecten', href: '#projects' },
  secondaryAction: { label: 'Plan een kennismaking', href: '#contact' },
};

export const aboutContent = {
  title: 'Wie ik ben',
  body:
    "Mijn interesse in computers is uitgegroeid tot een passie voor het ontwerpen en bouwen van toegankelijke digitale producten. Ik houd ervan om technische uitdagingen creatief op te lossen en interfaces te creëren die mensen echt willen gebruiken. Buiten het scherm kun je mij vinden met mijn hond, bij vrienden of verdiept in science- en programmeervideo’s.",
  facts: [
    { label: 'Leeftijd', value: '22 jaar (7 februari 2003)' },
    { label: 'Locatie', value: 'Maarn, Utrecht' },
    { label: 'Studie', value: 'Bachelor OpenICT - Hogeschool Utrecht' },
  ],
};

type Experience = {
  title: string;
  timeframe: string;
  location: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    title: 'HAVO-diploma',
    timeframe: 'Juli 2021',
    location: 'Amersfoort, Utrecht',
    description:
      'Ik startte op het gymnasium, maar koos uiteindelijk voor de HAVO. Daar behaalde ik niet alleen mijn diploma, maar ook de Socrates Award voor de hoogste eindexamenscore van het leerjaar. Het tussenjaar daarna gebruikte ik om mijn interesses en toekomstplannen scherp te krijgen.',
  },
  {
    title: "Bachelor OpenICT",
    timeframe: 'September 2022 – heden',
    location: 'Hogeschool Utrecht',
    description:
      'Binnen OpenICT werk ik in multidisciplinaire teams aan realistische opdrachten. Ik leer agile samenwerken, klantvragen vertalen naar oplossingen en denk na over techniek, toegankelijkheid en performance. Die projectmatige aanpak bereidt me goed voor op een overstap naar het werkveld.',
  },
];

type Project = {
  title: string;
  summary: string;
  description: string;
  href?: string;
  image: string;
  imageAlt: string;
  tech: string[];
  category: 'school' | 'client' | 'personal';
};

export const projects: Project[] = [
  {
    title: 'Portfolio 1.0',
    summary: 'Mijn eerste portfolio dat ik in zes weken bouwde zonder eerdere programmeerervaring.',
    description:
      'Tijdens mijn eerste OpenICT-project bouwde ik een persoonlijke site door tutorial-video’s en feedback van studiegenoten te combineren. Het was de basis voor alles wat ik nu doe en liet me zien hoe snel je kunt groeien met de juiste mindset.',
    href: '/Portfolio-1.html',
    image: '/images/avatar.png',
    imageAlt: 'Schets van het eerste portfolio van Tobias van Dorp',
    tech: ['HTML', 'CSS'],
    category: 'school',
  },
  {
    title: 'Kappersplatform',
    summary: 'Teamproject waarin ik de front-end ontwierp voor een kapsalonwebsite.',
    description:
      'Met een groep van vijf studenten bouwden we een marketingwebsite voor een kapsalon. Ik was verantwoordelijk voor de componentbibliotheek in Tailwind CSS, leerde versiebeheer met Git in een team en ontdekte hoe je klantwensen vertaalt naar een concrete gebruikerservaring.',
    href: '/hairdresser-project.html',
    image: '/images/login.png',
    imageAlt: 'Scherm van de kapperswebsite',
    tech: ['HTML', 'CSS', 'Tailwind CSS'],
    category: 'school',
  },
  {
    title: 'Spark',
    summary: 'Educatieve game waarmee jongeren programmeren leren door te experimenteren.',
    description:
      "Binnen project Spark schakelde ik van game-UI naar het bouwen van de ondersteunende website. Samen met een teamgenoot ontwikkelde ik een React-forum en een chatbot, zodat spelers elkaar kunnen helpen en vragen kunnen stellen.",
    image: '/images/spark.png',
    imageAlt: 'Spark project illustratie',
    tech: ['React', 'UX research'],
    category: 'school',
  },
  {
    title: 'Netwerk USP Inclusief',
    summary: 'Toegankelijke site voor een netwerkorganisatie die inclusie stimuleert.',
    description:
      'Mijn eerste echte klantproject. Ik vertaalde de missie van nUSPi naar een toegankelijke WordPress-site, leerde effectief communiceren via wekelijkse overleggen en documenteerde alles zodat het team zelfstandig verder kan.',
    href: 'https://www.netwerkuspinclusief.nl/',
    image: '/images/nuspi.png',
    imageAlt: 'Schermafbeelding van Netwerk USP Inclusief',
    tech: ['WordPress', 'Elementor', 'Toegankelijkheid'],
    category: 'client',
  },
  {
    title: 'Website Judith',
    summary: 'Snelle Next.js-website met Builder.io als gebruiksvriendelijk CMS.',
    description:
      'Voor mijn moeder bouwde ik een beheerbare en performante website. Ik combineerde Builder.io met Next.js, maakte herbruikbare componenten en optimaliseerde voor SEO. De site laadt razendsnel en is eenvoudig door haar zelf te beheren.',
    href: 'https://judith-website.vercel.app/',
    image: '/images/judith.png',
    imageAlt: 'Voorbeeld van de website van Judith',
    tech: ['Next.js', 'Tailwind CSS', 'Builder.io'],
    category: 'client',
  },
];

type Skill = {
  name: string;
  icon: IconType;
  description: string;
  level: string;
};

export const skills: Skill[] = [
  {
    name: 'HTML',
    icon: RiHtml5Line,
    description: 'De bouwstenen van elke webpagina. Ik gebruik HTML dagelijks en let op semantiek voor toegankelijkheid.',
    level: 'Zeer comfortabel en inzetbaar in elk project.',
  },
  {
    name: 'CSS',
    icon: RiCss3Line,
    description: 'Van layout tot micro-animaties: met moderne CSS technieken maak ik interfaces die prettig aanvoelen.',
    level: 'Solide basis en altijd bezig met het verfijnen van details.',
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    description: 'Utility-first werken zorgt ervoor dat ik snel designkeuzes kan valideren en componenten consistent houd.',
    level: 'Comfortabel met geavanceerde patterns en design systems.',
  },
  {
    name: 'React',
    icon: RiReactjsLine,
    description: 'React gebruik ik om interactieve interfaces modulair op te bouwen en complexe UI state beheersbaar te houden.',
    level: 'Basis op orde en steeds meer focus op best practices.',
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    description: 'Next.js geeft me de tools om snelle, SEO-vriendelijke sites te maken met moderne renderingstrategieën.',
    level: 'Veelvuldig gebruikt voor portfolio’s en klantprojecten.',
  },
  {
    name: 'Builder.io',
    icon: RiLayoutGridLine,
    description: 'Een visuele headless CMS die ik inzet voor klanten die zonder code content willen beheren.',
    level: 'Praktijkervaring met contentmodellen en componentintegratie.',
  },
  {
    name: 'WordPress & Elementor',
    icon: SiWordpress,
    description: 'Voor projecten met focus op content gebruik ik WordPress en Elementor om snel schaalbare sites neer te zetten.',
    level: 'Complete sites gebouwd met oog voor toegankelijkheid.',
  },
  {
    name: 'Teamwork & Agile',
    icon: RiSettings3Line,
    description: 'Scrumritmes, retrospectives en klantgesprekken zorgen voor soepele samenwerking en duidelijke verwachtingen.',
    level: 'Veel ervaring door projectonderwijs bij OpenICT.',
  },
];

type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
  tooltip: string;
};

export const socialLinks: SocialLink[] = [
  {
    label: 'Discord',
    href: 'https://discord.com/users/tobiasvandorp',
    icon: RiDiscordFill,
    tooltip: 'Discord: tobiasvandorp',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/tobiasvdorp',
    icon: RiGithubFill,
    tooltip: 'Github-profiel',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/tobias-van-dorp-433189257/',
    icon: RiLinkedinFill,
    tooltip: 'LinkedIn-profiel',
  },
];

export const contactCopy = {
  title: 'Samen iets bouwen?',
  description:
    'Laat een bericht achter of stuur me direct een DM op Discord. Ik reageer meestal binnen één werkdag op verzoeken voor samenwerking of vragen.',
  discordHandle: 'tobiasvandorp',
};
