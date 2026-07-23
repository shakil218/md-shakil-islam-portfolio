import techwave from "../assets/project_2.png";
import hotelBT from "../assets/project_7.png";
import byteBlaze from "../assets/project_1.png";
import digiTools from "../assets/project_4.png";
import phApps from "../assets/project_8.png";
import keenKeeper from "../assets/project_5.png";
import dragonNews from "../assets/project_3.png";
import skillSphere from "../assets/project_6.png";
import petNest from "../assets/petnest.png";
import ticketBari from "../assets/ticketbari.png";
import spaceHive from "../assets/spacehive.png";
import mediBook from "../assets/medibook.png";
import petNestMockup from "../assets/petnest_mockup.png";
import skillSphereMockup from "../assets/skillsphere_mockup.png";
import dragonNewsMockup from "../assets/dragonnews_mockup.png";

export const projectsData = [
  {
    id: "ticketbari",
    category: ["fullstack", "backend"],
    title: "TicketBari: Multi-Modal Online Ticket Booking Platform",
    description:
      "A fast, secure, and reliable online ticket booking platform across Bangladesh. Enables users to search, compare, and book bus, train, launch, and flight tickets with real-time seat locks, multi-vendor management, and integrated Stripe/Visa payment processing.",
    tags: [
      "Next.js 16",
      "React 19",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Better Auth",
      "Stripe API",
      "Tailwind CSS",
    ],
    image: ticketBari,
    imgbbUrl: "https://i.ibb.co.com/h116PC0t/Gemini-Generated-Image-gwmpcigwmpcigwmp.png",
    github: "https://github.com/shakil218/ticketbari",
    githubServer: "https://github.com/shakil218/ticketbari-server",
    demo: "https://ticketbari-sepia.vercel.app/",
    challenges: [
      "Managing real-time seat inventory locks during concurrent checkout sessions to eliminate double-booking risks.",
      "Designing a unified multi-transport search engine aggregating schedule data for buses, trains, launches, and flights.",
      "Implementing secure multi-vendor dashboard metrics and automated revenue share calculations.",
    ],
    futurePlans: [
      "Adding QR-code e-ticket scanner mobile app integration for conductors and station gate inspectors.",
      "Implementing automated SMS and WhatsApp travel delay notification alerts.",
      "Integrating dynamic pricing algorithms during peak holiday travel periods.",
    ],
  },
  {
    id: "spacehive",
    category: ["fullstack", "backend"],
    title: "SpaceHive: Co-working Space & Workspace Booking Platform",
    description:
      "A modern workspace booking platform connecting freelancers, startups, and remote teams with verified co-working desks, event venues, and creative studios. Features real-time availability search, instant host bookings, and category filtering.",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    image: spaceHive,
    imgbbUrl: "https://i.ibb.co.com/tTx60FXQ/Gemini-Generated-Image-jml15sjml15sjml1.png",
    github: "https://github.com/shakil218/spacehive",
    githubServer: "https://github.com/shakil218/spacehive-server",
    demo: "https://spacehive.vercel.app/",
    challenges: [
      "Designing a flexible multi-category filter engine supporting hourly and daily workspace reservations.",
      "Optimizing high-resolution space image gallery rendering performance across diverse screen sizes.",
      "Managing host verification workflows and automated booking confirmation emails.",
    ],
    futurePlans: [
      "Integrating interactive Mapbox GIS maps for location-based workspace discovery.",
      "Adding automated hourly booking availability calendar synchronization with Google Calendar.",
      "Implementing direct messaging between space hosts and prospective renters.",
    ],
  },
  {
    id: "medibook",
    category: ["fullstack", "backend"],
    title: "MediBook: Telehealth & Doctor Consultation Platform",
    description:
      "A comprehensive digital healthcare consultation platform connecting patients with verified medical specialists. Features an AI-powered Symptom Checker triage assistant, encrypted video consultations, and real-time clinical appointment agendas.",
    tags: [
      "Next.js 16",
      "React 19",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Better Auth",
      "Recharts",
      "Tailwind CSS",
    ],
    image: mediBook,
    imgbbUrl: "https://i.ibb.co.com/gM78VfzQ/Gemini-Generated-Image-3f15a3f15a3f15a3.png",
    github: "https://github.com/shakil218/medibook",
    demo: "https://medibook-six-hazel-q55sq2y5bh.vercel.app/",
    challenges: [
      "Building a responsive AI Symptom Checker triage system that maps user symptoms to medical specialties.",
      "Ensuring low-latency encrypted video consultation room sessions with zero client software install required.",
      "Managing patient medical chart security and HIPAA-aligned data privacy controls.",
    ],
    futurePlans: [
      "Adding AI-generated digital prescription parsing and pharmacy delivery integration.",
      "Implementing automated appointment SMS reminders and patient follow-up tracking.",
      "Integrating wearable IoT device health metrics sync into patient consultation dashboards.",
    ],
  },
  {
    id: "petnest",
    category: ["fullstack", "backend"],
    title: "PetNest: Pet Adoption & Care Platform",
    description:
      "A full-stack pet adoption and care platform built with a modern MERN architecture. Enables users to browse adoptable pets, submit adoption requests, and manage profiles through an intuitive dashboard. Implements role-based access control, secure authentication, and a scalable REST API.",
    tags: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Better Auth",
      "HeroUI",
      "Tailwind CSS",
      "Framer Motion",
    ],
    image: petNestMockup,
    imgbbUrl: "https://i.ibb.co.com/ccXd8jjG/Gemini-Generated-Image-foir4hfoir4hfoir.png",
    github: "https://github.com/shakil218/petnest-platform-client",
    githubServer: "https://github.com/shakil218/petNest-platform-server",
    demo: "https://petnest-adoption-portal.vercel.app/",
    challenges: [
      "Implementing multi-step adoption application forms with real-time status updates.",
      "Designing complex role-based access controls for adopters, shelters, and platform administrators.",
      "Optimizing database query performance for filtering adoptable pets by species, age, and location.",
    ],
    futurePlans: [
      "Integrating real-time chat between pet adopters and shelter managers using Socket.IO.",
      "Adding AI-powered pet matching recommendations based on user lifestyle preferences.",
      "Building a dedicated veterinary care tracking and vaccination reminder system.",
    ],
  },
  {
    id: "skillsphere",
    category: ["fullstack"],
    title: "SkillSphere: Master Skills Online",
    description:
      "A modern e-learning platform providing expert-led courses and structured learning paths. Features fluid animations, secure authentication via Better Auth, and an intuitive dashboard for tracking educational progress and skill mastery.",
    tags: ["Next.js", "React", "Better Auth", "Framer Motion", "Tailwind CSS", "DaisyUI"],
    image: skillSphereMockup,
    imgbbUrl: "https://i.ibb.co.com/20ChCRxm/Gemini-Generated-Image-mwa4v7mwa4v7mwa4.png",
    github: "https://github.com/shakil218/skillsphere-online-learning-platform",
    demo: "https://skillsphere-online-learning-web.vercel.app",
    challenges: [
      "Structuring video streaming components to minimize buffering latency across various network conditions.",
      "Managing complex client-side course progress tracking state synchronized across multiple devices.",
      "Ensuring responsive layout fidelity across a wide array of mobile and desktop viewport sizes.",
    ],
    futurePlans: [
      "Adding interactive code playgrounds for real-time practice directly within lesson pages.",
      "Implementing peer-to-peer discussion forums and Q&A threads under course lectures.",
      "Developing downloadable certificate generation upon course completion.",
    ],
  },
  {
    id: "dragon-news",
    category: ["fullstack"],
    title: "The Dragon News: Journalism Without Fear or Favour",
    description:
      "A comprehensive digital news platform featuring breaking news tickers, category-based navigation, and secure user authentication via Better Auth. Built with Next.js 16 and React 19, integrating MongoDB for persistent data storage.",
    tags: ["Next.js", "React 19", "Better Auth", "MongoDB", "Tailwind CSS", "DaisyUI"],
    image: dragonNewsMockup,
    imgbbUrl: "https://i.ibb.co.com/Q386hk07/Gemini-Generated-Image-q1zg59q1zg59q1zg.png",
    github: "https://github.com/shakil218/dragon-news-with-next.js",
    demo: "https://dragon-news-with-next-js.vercel.app",
    challenges: [
      "Optimizing server-side rendering for breaking news feeds to ensure sub-second page loads.",
      "Handling real-time comment moderation and nested reply threads efficient indexing.",
      "Designing a dark/light responsive editorial grid that stays readable across all viewports.",
    ],
    futurePlans: [
      "Adding customizable RSS feed subscription modules for personalized news reader experience.",
      "Integrating audio news narration using AI text-to-speech for accessible listening.",
      "Implementing bookmarking and offline reading modes using Service Workers.",
    ],
  },
  {
    id: "keen-keeper",
    category: ["frontend"],
    title: "KeenKeeper: Smart Relationship Manager",
    description:
      "A thoughtful personal CRM designed to nurture meaningful connections. Features automated tracking of friend interactions, status-based reminders (Overdue, Almost Due, On-Track), and data-driven insights through visual analytics.",
    tags: ["Next.js", "Tailwind CSS", "Recharts", "Context API", "Local Storage"],
    image: keenKeeper,
    github: "https://github.com/shakil218/keen-keeper-friends-platform",
    demo: "https://keen-keeper-friends-platform.vercel.app",
    challenges: [
      "Designing accurate status algorithms to compute relationship warmth scores dynamically.",
      "Managing robust offline-first local storage sync with zero data loss risk.",
      "Creating accessible, high-contrast analytics chart visualizations with Recharts.",
    ],
    futurePlans: [
      "Integrating automated calendar integration for birthday and anniversary notifications.",
      "Adding end-to-end encrypted cloud backup option for cross-device synchronization.",
      "Creating customizable relationship category tags and interaction history logs.",
    ],
  },
  {
    id: "hero-io",
    category: ["frontend"],
    title: "HERO.IO: Next-Gen App Marketplace",
    description:
      "A high-performance productivity app store built with Next.js 16 and React 19. Features a curated marketplace of enterprise-grade applications, utilizing Framer Motion for fluid interactions and Lottie for high-fidelity animations.",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "DaisyUI", "Lottie"],
    image: phApps,
    github: "https://github.com/shakil218/ph-apps-store-with-next.js",
    demo: "https://ph-apps-store.vercel.app",
    challenges: [
      "Maintaining smooth 60fps Lottie animation rendering without degrading mobile device performance.",
      "Building multi-attribute search and category filter controls with zero latency.",
      "Structuring responsive modal dialogs and dynamic preview carousels.",
    ],
    futurePlans: [
      "Adding user app reviews and rating analytics dashboards.",
      "Integrating developer submission portal for third-party app listings.",
      "Implementing one-click app installation script generator.",
    ],
  },
  {
    id: "digitools",
    category: ["frontend"],
    title: "DigiTools: AI-Powered Digital Marketplace",
    description:
      "A comprehensive digital products platform featuring AI writing tools, design assets, and premium templates. Built with a robust frontend architecture including DaisyUI components and React Toastify for intuitive user feedback.",
    tags: ["React.js", "Tailwind CSS", "DaisyUI", "Lucide React", "JSON API"],
    image: digiTools,
    github: "https://github.com/shakil218/digital-devtools-platform",
    demo: "https://digital-devtools-platform.vercel.app/",
    challenges: [
      "Structuring dynamic product filtering across large arrays of digital tools.",
      "Ensuring clean component decoupling and reusable card structures.",
      "Handling client-side cart persistent state efficiently across tab refreshes.",
    ],
    futurePlans: [
      "Integrating AI generator API endpoints for instant template previews.",
      "Adding direct instant file download links after checkout verification.",
      "Implementing community product reviews and upvoting mechanisms.",
    ],
  },
  {
    id: "byteblaze",
    category: ["frontend"],
    title: "ByteBlaze: Tech Insights Platform",
    description:
      "A modern content platform for tech enthusiasts featuring a curated feed of development articles, bookmarking capabilities, and a responsive reading experience with category tags and read-time estimates.",
    tags: ["React.js", "Tailwind CSS", "Vite", "React Router"],
    image: byteBlaze,
    github: "https://github.com/shakil218/byteblaze",
    demo: "https://byteblaze-three.vercel.app",
    challenges: [
      "Handling dynamic article route parsing and fast client-side navigation.",
      "Creating seamless local storage sync for saved reading list items.",
      "Designing high-legibility typography hierarchies for long-form technical blogs.",
    ],
    futurePlans: [
      "Adding full-text search capability with tag-based filtering.",
      "Implementing dark/light reading theme contrast toggles.",
      "Integrating social sharing snippets and estimated reading progress bars.",
    ],
  },
  {
    id: "techwave",
    category: ["frontend"],
    title: "TechWave: Cinematic Podcast Experience",
    description:
      "A high-impact landing page featuring vibrant gradients and modern glassmorphism effects. Showcases advanced CSS techniques for soundwave visualizations and sleek feature cards.",
    tags: ["HTML5", "Tailwind CSS", "Modern UI", "Dark Theme"],
    image: techwave,
    github: "https://github.com/shakil218/TechWave",
    demo: "https://tech-wave-one.vercel.app",
    challenges: [
      "Creating pure CSS animated audio wave visualizers without heavy JS overhead.",
      "Ensuring glassmorphism backdrop-blur effects perform smoothly on low-power devices.",
      "Structuring responsive flex layouts that preserve visual proportions.",
    ],
    futurePlans: [
      "Integrating embedded HTML5 audio player controls with track playlists.",
      "Adding newsletter subscription capture form with instant confirmation.",
      "Creating interactive host profile cards and episode guest archives.",
    ],
  },
  {
    id: "hotel-bt",
    category: ["frontend"],
    title: "Hotel BT: Luxury Hospitality Experience",
    description:
      "A premium, minimalist landing page designed for a high-end boutique hotel. Features elegant typography, high-fidelity visual sections for guest testimonials, and a fully responsive layout.",
    tags: ["HTML5", "Tailwind CSS", "Responsive Design", "UI/UX"],
    image: hotelBT,
    github: "https://github.com/shakil218/hotel-website",
    demo: "https://hotel-website-ten-drab.vercel.app",
    challenges: [
      "Optimizing high-resolution imagery assets for fast mobile load times.",
      "Designing responsive room reservation forms with clean accessibility markup.",
      "Ensuring semantic HTML layout hierarchy for maximum SEO compliance.",
    ],
    futurePlans: [
      "Integrating interactive 360 virtual room tours.",
      "Adding dynamic room availability date pickers and price calculators.",
      "Implementing multi-language switcher support (EN/ES/FR).",
    ],
  },
];

export function getProjects() {
  return projectsData;
}
