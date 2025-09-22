export type NavigationItem = {
  label: string;
  href: string;
};

export const navigation: NavigationItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Over mij', href: '#about' },
  { label: 'Ervaring', href: '#experience' },
  { label: 'Vaardigheden', href: '#skills' },
  { label: 'Projecten', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const heroContent = {
  greeting: 'Hoi, ik ben Tobias',
  highlight: 'Derdejaars OpenICT-student en front-end developer in opleiding',
  description:
    'Ik ben 22 jaar en combineer graag techniek met creativiteit om digitale ervaringen te bouwen die goed voelen én goed werken. Wanneer ik niet aan het coderen ben, ben ik aan het bijleren, speel ik met mijn hond of ben ik met vrienden.',
  primaryAction: { label: 'Bekijk projecten', href: '#projects' },
  secondaryAction: { label: 'Plan een kennismaking', href: '#contact' },
  stats: [
    { label: 'Jaar in opleiding', value: '3e jaar OpenICT' },
    { label: 'Opgeleverde projecten', value: '5+ afgerond' },
    { label: 'Focus', value: 'Toegankelijke front-ends' },
  ],
};

export const aboutContent = {
  title: 'Over mij',
  intro:
    'Ik begon zonder programmeerervaring, maar ontdekte al snel hoe leuk ik het vind om interfaces tot leven te brengen. De combinatie van gebruikerservaring, visueel ontwerp en technische uitdagingen geeft mij elke dag nieuwe energie.',
  body: [
    'Tijdens mijn studie aan de Hogeschool Utrecht werk ik in multidisciplinaire teams aan echte cases. Daardoor leer ik niet alleen code schrijven, maar ook hoe ik behoeften van klanten ophaal, prioriteer en vertaal naar oplossingen.',
    'Ik zoek graag de balans tussen snelheid, toegankelijkheid en een prettige beleving. Daarnaast vind ik goede communicatie belangrijk: samen iets bouwen is veel leuker dan alleen.',
  ],
  focusAreas: [
    'Toegankelijke componenten ontwerpen en testen',
    'Samenwerken in Agile teams en duidelijk communiceren',
    'Snelle, schaalbare front-ends met moderne tooling',
  ],
};

export type Experience = {
  title: string;
  organisation: string;
  period: string;
  location: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    title: 'HAVO-diploma',
    organisation: 'Corderius College',
    period: 'Juli 2021',
    location: 'Amersfoort, Utrecht',
    description:
      'Ik startte op het gymnasium maar rondde uiteindelijk de HAVO af. Met de hoogste eindexamencijfers van mijn jaar ontving ik de Socrates Award en nam ik een tussenjaar om mijn interesses te ontdekken.',
  },
  {
    title: 'Bachelor bij OpenICT',
    organisation: 'Hogeschool Utrecht',
    period: 'September 2022 – heden',
    location: 'Utrecht',
    description:
      'In de projectmatige studie OpenICT leer ik Agile samenwerken, requirements ophalen en producten opleveren voor echte stakeholders. De nadruk ligt op doen in plaats van toetsen, waardoor ik goed voorbereid ben op het werkveld.',
  },
];

export type Skill = {
  name: string;
  level: string;
  description: string;
};

export const skills: Skill[] = [
  {
    name: 'HTML',
    level: 'Stevige basis',
    description:
      'HTML vormt de fundering van elke site. Ik schrijf semantische markup die goed werkt met screenreaders en zoekmachines.',
  },
  {
    name: 'CSS',
    level: 'Comfortabel',
    description:
      'Van layout tot micro-animaties: met moderne CSS bouw ik componenten die responsive en onderhoudbaar zijn.',
  },
  {
    name: 'React',
    level: 'Basis in de praktijk',
    description:
      'Ik bouw component-gedreven interfaces, gebruik hooks en denk na over state-management en performance.',
  },
  {
    name: 'Next.js',
    level: 'Veel gebruikt',
    description:
      'Server Components, routing en optimalisaties: Next.js helpt me snelle en SEO-vriendelijke sites te maken.',
  },
  {
    name: 'Tailwind CSS',
    level: 'Dagelijks gereedschap',
    description:
      'Met Tailwind kan ik designs snel itereren en consistente componenten opzetten zonder style-spaghetti.',
  },
  {
    name: 'Elementor',
    level: 'Productieklaar',
    description:
      'Ik realiseerde complete WordPress-sites en lever duidelijke hand-overs zodat klanten zelf verder kunnen.',
  },
  {
    name: 'Builder.io',
    level: 'CMS integraties',
    description:
      'Ik koppelde Builder.io aan Next.js om contentmodellen te maken die eenvoudig te beheren zijn.',
  },
  {
    name: 'WordPress',
    level: 'Praktijkervaring',
    description:
      'Voor Netwerk USP Inclusief bouwde ik een toegankelijk WordPress-platform inclusief documentatie.',
  },
];

export type Project = {
  title: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  link?: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: 'Portfoliowebsite 1',
    summary: 'Mijn eerste project waarin ik in zes weken programmeren leerde door te doen.',
    description:
      'Voor mijn eerste OpenICT-opdracht bouwde ik zonder ervaring een portfolio. Tutorials en feedback van medestudenten hielpen me de basis te leren en nieuwsgierig te blijven.',
    image: '/images/avatar.png',
    imageAlt: 'Eerste portfolio concept',
    tags: ['Schoolproject', 'HTML', 'CSS'],
  },
  {
    title: 'Kapperswebsite',
    summary: 'Teamproject waarin ik de front-end en componentbibliotheek verzorgde.',
    description:
      'Samen met vier studiegenoten ontwikkelde ik een website voor een kapsalon. Ik focuste op UX, Tailwind-componenten en leerde git-workflows toepassen in een teamsetting.',
    image: '/images/login.png',
    imageAlt: 'Inlogscherm van de kapperswebsite',
    tags: ['Teamwerk', 'Tailwind CSS', 'Agile'],
    link: '/hairdresser-project.html',
  },
  {
    title: 'Spark programmeergame',
    summary: 'Van game-idee naar ondersteunende website met forum en chatbot in React.',
    description:
      'Binnen het Spark-project stapte ik van game-UI over naar het bouwen van het webplatform. Ik ontwierp een forum en chatbot die leerlingen helpen spelenderwijs te leren coderen.',
    image: '/images/spark.png',
    imageAlt: 'Spark project visuals',
    tags: ['React', 'Onderwijs', 'UX'],
  },
  {
    title: 'Netwerk USP Inclusief',
    summary: 'Toegankelijke WordPress-site met duidelijke beheerinstructies voor de klant.',
    description:
      'Voor Netwerk USP Inclusief bouwde ik een toegankelijke site en leerde ik klantcommunicatie via MS Teams. Inclusie stond centraal, dus documenteerde ik alles voor zelfstandig beheer.',
    image: '/images/nuspi.png',
    imageAlt: 'Netwerk USP Inclusief homepage',
    tags: ['WordPress', 'Toegankelijkheid', 'Klantproject'],
    link: 'https://www.netwerkuspinclusief.nl/',
  },
  {
    title: 'Website voor Judith',
    summary: 'Next.js-site gekoppeld aan Builder.io zodat content eenvoudig te beheren is.',
    description:
      'Voor mijn moeder ontwikkelde ik een snelle, SEO-vriendelijke site met Next.js en Builder.io. Het CMS maakt het makkelijk om zonder technische kennis content bij te werken.',
    image: '/images/judith.png',
    imageAlt: 'Website ontwerp voor Judith',
    tags: ['Next.js', 'Builder.io', 'Performance'],
    link: 'https://judith-website.vercel.app/',
  },
];

export const contactDetails = {
  email: 'mailto:tobiasvandorp@outlook.com',
  emailLabel: 'tobiasvandorp@outlook.com',
  discord: 'tobiasvandorp',
  socials: [
    { label: 'GitHub', href: 'https://github.com/tobiasvdorp' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tobias-van-dorp-433189257/' },
  ],
  formEndpoint: 'https://formspree.io/f/xknlznnl',
};
