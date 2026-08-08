import { Service, Dentist, Testimonial, FAQ, BlogPost, ClinicFacility } from '../types';
import heroDentistImg from '../assets/images/hero_dentist_1780931147218.png';
import patientSmileImg from '../assets/images/patient_smile_1780931182967.png';

export const SERVICES: Service[] = [
  {
    id: 'teeth-cleaning',
    name: 'Teeth Cleaning',
    category: 'general',
    shortDescription: 'Professional plaque removal, scaling, and polishing for a healthy environment.',
    fullDescription: 'Our deep teeth cleaning, scaling, and air-polishing target plaque, tartar, and calculus build-up in hard-to-reach pockets, maintaining superb periodontal and gum health for a pristine mouth feel.',
    benefits: [
      'Removes stubborn external coffee, tea, and tobacco stains',
      'Eliminates bad breath (halitosis) causing bacteria',
      'Prevents gum diseases like gingivitis and periodontitis',
      'Early detection of minor cavities during general scaling'
    ],
    duration: '30 - 45 Minutes',
    suitability: 'Recommended twice a year for everyone',
    iconName: 'Sparkles'
  },
  {
    id: 'teeth-whitening',
    name: 'Teeth Whitening',
    category: 'cosmetic',
    shortDescription: 'State-of-the-art laser teeth whitening for immediate smile brightening.',
    fullDescription: 'We offer medical-grade Zoom laser teeth whitening that safely penetrates the enamel to break down deep organic stains and discoloration, elevating your smile shade up to 8 degrees within a single visit.',
    benefits: [
      'Immediate, jaw-dropping results in just one 60-minute session',
      'Safe formulation that minimizes post-treatment tooth sensitivity',
      'Customized protective barrier application to shield gums',
      'Long-lasting whiteness with our post-care maintenance kits'
    ],
    duration: '45 - 60 Minutes',
    suitability: 'Patients with external tooth staining or yellowing',
    iconName: 'Smile'
  },
  {
    id: 'dental-implants',
    name: 'Dental Implants',
    category: 'surgical',
    shortDescription: 'Highly durable titanium dental implants serving as permanent missing teeth solutions.',
    fullDescription: 'Say goodbye to gaps. We perform expert implant placement using high-grade bio-compatible titanium posts bonded directly to your jawbone, topped off with a custom-engineered ceramic dental crown matching your natural teeth.',
    benefits: [
      'Looks, feels, and functions exactly like a natural tooth',
      'Prevents bone degeneration and maintains facial structures',
      'Secures adjacent teeth from shifting into open spaces',
      'Lifetime solution with absolute chewing strength and comfort'
    ],
    duration: '2 - 3 Sessions (Over 3-6 months)',
    suitability: 'Adults with single or multiple missing teeth',
    iconName: 'Shield'
  },
  {
    id: 'braces-aligners',
    name: 'Braces & Aligners',
    category: 'orthodontics',
    shortDescription: 'Traditional braces and modern clear aligners (Invisalign) for perfect alignment.',
    fullDescription: 'We specialize in restoring structural harmony. Choose from our comfortable Invisalign clear aligners, ceramic clear braces, or traditional metal braces to correct crowding, overbites, spacing, and jaw misalignments.',
    benefits: [
      'Invisalign clear aligners are nearly 100% invisible',
      'Removable aligners make eating and flossing easy',
      'Corrects dangerous bite misalignments to reduce wear on enamel',
      'Significantly increases long-term confidence and profile aesthetics'
    ],
    duration: '12 - 24 Months treatment plans',
    suitability: 'Teens and adults looking to straighten teeth',
    iconName: 'Activity'
  },
  {
    id: 'root-canal',
    name: 'Root Canal Treatment',
    category: 'surgical',
    shortDescription: 'Pain-free root canal treatment to rescue damaged or infected teeth.',
    fullDescription: 'An infected tooth node does not have to be extracted. Our painless root canal therapy removes the infected pulp chamber, cleanses the root canal pathways, seals them, and restores dental structure using protective custom crowns.',
    benefits: [
      'Instantly relieves severe pulsating toothaches and sensitivity',
      'Saves your natural tooth structure from complete extraction',
      'Stops dangerous dental abscesses from traveling into the jawbone',
      'Restores painless chewing and biting force in the affected area'
    ],
    duration: '1 - 2 Sessions',
    suitability: 'Patients with deep infection within tooth pulps',
    iconName: 'FlameKindling'
  },
  {
    id: 'cosmetic-dentistry',
    name: 'Cosmetic Dentistry',
    category: 'cosmetic',
    shortDescription: 'Handcrafted premium porcelain veneers, bonding, and digital smile designs.',
    fullDescription: 'Revitalize your visual profile. Using detailed digital smile mockups, our dentists craft exquisite ultra-thin porcelain veneers and composite bonding to modify shape, size, color, and spacing of key front teeth.',
    benefits: [
      'Completely hides cracks, chips, and developmental stains',
      'Corrects uneven teeth margins without bulky orthodontics',
      'Stain-resistant porcelain retains visual brilliance over decades',
      'Custom color-matching blends seamlessly with natural teeth enamel'
    ],
    duration: '2 Sessions (1-2 weeks)',
    suitability: 'Perfect for complete smile makeovers',
    iconName: 'Layers'
  },
  {
    id: 'children-dentistry',
    name: "Children's Dentistry",
    category: 'pediatric',
    shortDescription: 'Gentle, friendly, and anxiety-free pediatric dentistry for happy children.',
    fullDescription: 'We make going to the pediatric dentist exciting! Our warm, colorful clinic setup and specialized gentle dentists provide sealants, fluoride shields, early developmental tracking, and interactive dental habits guidance.',
    benefits: [
      'Creates a lifetime of glowing confidence and zero dental anxiety',
      'Protective medical dental sealants block cavities from forming',
      'Monitors baby tooth loss and guides optimal adult tooth eruptions',
      'Interactive, fun atmosphere loaded with rewards and positive feedback'
    ],
    duration: '20 - 40 Minutes',
    suitability: 'Children from age 1 up to 14 years old',
    iconName: 'Heart'
  },
  {
    id: 'emergency-dentistry',
    name: 'Emergency Dental Care',
    category: 'surgical',
    shortDescription: 'Express same-day emergency slots for severe pain, tooth loss, or dental trauma.',
    fullDescription: 'Accidents happen. We maintain daily open-door priority slots for dental emergencies. From broken jawbones and knocked-out teeth to acute bacterial toothaches, we provide same-day evaluation, pain control, and remedy.',
    benefits: [
      'Same-day express booking window for active trauma cases',
      'Immediate pain-relief injections and clinical stabilization',
      'Professional attempts to re-implant freshly knocked-out teeth',
      'Prevents spread of massive infections to other facial structures'
    ],
    duration: 'Immediate Priority Evaluation',
    suitability: 'Anyone experiencing acute pain or oral injury',
    iconName: 'HeartPulse'
  }
];

export const DENTISTS: Dentist[] = [
  {
    id: "dr-sarah-jenkins",
    name: "Dr. Sarah Jenkins, DDS, PhD",
    title: "Chief Medical Officer & Cosmetic Dentist",
    role: "Cosmetic & Restoration Specialist",
    specialization: "Smile Design, Porcelain Veneers, Full Mouth Reconstruction",
    qualifications: [
      "Doctor of Dental Surgery (DDS) - Harvard School of Dental Medicine",
      "PhD in Prosthodontics & Biomaterials",
      "Member of the American Academy of Cosmetic Dentistry (AACD)"
    ],
    experience: "15+ Years",
    bio: "Dr. Jenkins is a globally recognized master of aesthetic dentistry. She has combined medical precision with high-art digital smile designing for over fifteen years, creating functional and outstanding smile masterpieces for hundreds of satisfied patients.",
    photoUrl: heroDentistImg,
    availability: "Mon, Tue, Thu: 9:00 AM - 5:00 PM",
    languages: ["English", "Spanish"]
  },
  {
    id: "dr-arthur-stone",
    name: "Dr. Arthur Stone, DDS, MSD",
    title: "Senior Orthodontist & Implant Specialist",
    role: "Orthodontics & Implantology Specialist",
    specialization: "Dental Implants, Invisalign Clear Aligners, Orthodontic Alignments",
    qualifications: [
      "Doctor of Dental Surgery (DDS) - Columbia University College of Dental Medicine",
      "Master of Science in Dentistry (MSD) - Orthodontics Fellowship",
      "Diplomate of the American Board of Orthodontics (ABO)"
    ],
    experience: "12+ Years",
    bio: "Dr. Stone is dedicated to reconstructing structural beauty. Specializing in highly complex implant surgeries and invisible aligners tracking, his patients love his calm composure, deep clinical expertise, and pain-free execution methods.",
    photoUrl: heroDentistImg,
    availability: "Wed, Thu, Fri: 10:00 AM - 6:00 PM",
    languages: ["English", "German"]
  },
  {
    id: "dr-emily-chen",
    name: "Dr. Emily Chen, DDS",
    title: "Head of Pediatric Dentistry",
    role: "Pediatric & Preventive Specialist",
    specialization: "Myofunctional Therapy, Special Needs Pediatric Dentistry, Preventive Care",
    qualifications: [
      "Doctor of Dental Surgery (DDS) - UCSF School of Dentistry",
      "Residency in Pediatric Dentistry - Children's Hospital Philadelphia",
      "Board Certified Pediatric Dentist - AAPD"
    ],
    experience: "8+ Years",
    bio: "Dr. Chen believes that every child deserves a magical introduction to oral health. Known for her infectious laugh and therapeutic storytelling skills during treatments, she helps toddlers and dental-anxious teens feel completely at home.",
    photoUrl: heroDentistImg,
    availability: "Mon, Wed, Sat: 9:00 AM - 3:00 PM",
    languages: ["English", "Mandarin", "Cantonese"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    patientName: 'Gabriella Vance',
    age: 32,
    treatmentType: 'Full Veneers Smile Design',
    rating: 5,
    reviewText: "I was always self-conscious about my chipped, uneven teeth. Dr. Jenkins designed custom porcelain veneers that completely revitalized my look. The premium comfort, high-tech clinic, and compassionate treatment here was world-class. Absolute perfection!",
    date: '2026-05-18',
    beforePhoto: 'https://images.unsplash.com/photo-1522845015757-50bce044e5da?auto=format&fit=crop&w=400&q=80',
    afterPhoto: patientSmileImg
  },
  {
    id: 't-2',
    patientName: 'Robert Vance',
    age: 45,
    treatmentType: 'Bio-Implants & Deep Cleanse',
    rating: 5,
    reviewText: "Losing an entire front tooth in an accident was devastating. Dr. Stone placed a titanium implant which matches my natural teeth flawlessly. I felt zero pain throughout the surgeries. Truly a futuristic hospital that represents the absolute peak of modern dentistry.",
    date: '2026-04-02'
  },
  {
    id: 't-3',
    patientName: 'Sophia Lin',
    age: 27,
    treatmentType: 'Invisalign Clear Aligners',
    rating: 5,
    reviewText: "I finished my Invisalign alignment here inside 11 months! The digital mapping let me see my future teeth in 3D right at day one. Scheduling is effortless, pricing is completely transparent, and the results are stunning.",
    date: '2026-01-10'
  },
  {
    id: 't-4',
    patientName: 'Matthew Garcia',
    age: 10,
    treatmentType: 'Kid Cavity Prevention & Sealants',
    rating: 5,
    reviewText: "My son Matthew loves finding treasures in Dr. Chen's reward chest. They walked him through every instrument's sound so he was never scared. I can't recommend this pediatric clinic enough for parents!",
    date: '2026-05-29'
  }
];

export const FAQS: FAQ[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'What makes AuraCare Dental different from standard dental practices?',
    answer: 'We provide a premium, anxiety-free experience combining world-class dentists, state-of-the-art diagnostic screens, biocompatible premium materials, and flexible booking support. Our clinical philosophies prioritize natural tooth preservation, minimally invasive care, and complete price transparency.'
  },
  {
    id: 'faq-2',
    category: 'appointments',
    question: 'How do I schedule an appointment and check availability?',
    answer: 'You can easily reserve or schedule a slot using our streamlined 24/7 online reservation form. Alternatively, click our floating WhatsApp widget to chat directly with our scheduling coordinator in real-time. We will secure your preferred slot and confirm details via SMS or WhatsApp within 10 minutes.'
  },
  {
    id: 'faq-3',
    category: 'treatments',
    question: 'Are your cosmetic teeth whitening procedures safe for sensitive teeth?',
    answer: 'Absolutely. We use clinical laser whitening gels from leading providers with built-in desensitizing compounds. Our dental specialists also map customized protective shields on your gums before the whitening laser activation. This ensures maximum stain disruption while protecting dental nerves and gum tissue.'
  },
  {
    id: 'faq-4',
    category: 'insurance',
    question: 'Do you accept major dental insurance policies and dental benefits?',
    answer: 'Yes. We are in-network with prominent insurance organizations including MetLife, Cigna, Delta Dental, Aetna, Humana, and Blue Cross. Our reception desk handles all paperwork billing directly with your insurance provider, allowing you to maximize benefits and minimize out-of-pocket costs.'
  },
  {
    id: 'faq-5',
    category: 'treatments',
    question: 'What should I do if I experience a severe dental emergency?',
    answer: 'Please contact our dedicated 24-Hour Emergency Line at (555) 019-9922 immediately. We reserve active, priority diagnostic and surgical slots every day specifically for acute dental traumas, knocked-out teeth, and severe dental infections.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'The Modern Guide to Clean Aligners: Invisalign vs. Ceramic Braces',
    slug: 'modern-guide-to-clean-aligners-invisalign-ceramic-braces',
    excerpt: 'Explore structural alignment solutions to choose the best teeth straightening method matching your active lifestyle.',
    content: 'Straightening teeth in adulthood has never been more seamless. While classic metallic braces still offer robust solutions for extreme structural alignment errors, Invisalign clear dental aligners provide an elegant, invisible, and removable alternative. Aligners let you enjoy meals and maintain thorough brush care effortlessly. Read our comparative analysis to understand why aligners have captured the modern dental market.',
    author: 'Dr. Arthur Stone, DDS',
    publishDate: 'June 4, 2026',
    readTime: '4 min read',
    category: 'Orthodontics',
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'post-2',
    title: '5 Crucial Brushing Mistakes You Might Be Making Every Single Day',
    slug: '5-crucial-brushing-mistakes-you-are-making-every-day',
    excerpt: 'Are you brushing too hard? Find out how everyday brushing habits might be eroding your tooth enamel and safety.',
    content: 'Brushing enamel too aggressively with stiff-bristled brushes is the leading cause of gum recession, micro-fractures, and painful tooth neck sensitivities. Switching to highly flexible soft-bristle nylon brushes and applying gentle circular sweeps protects gums perfectly. Ensure you brush for a complete 2 minutes and wait at least 30 minutes after consuming acidic foods like orange juice or coffee to avoid brushing soft enamel.',
    author: 'Dr. Sarah Jenkins, DDS',
    publishDate: 'May 20, 2026',
    readTime: '3 min read',
    category: 'Preventive Care',
    imageUrl: 'https://images.unsplash.com/photo-1559599141-3e04555a507a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'post-3',
    title: 'The Truth About Dental Abscesses: Why You Must Never Ignore Gum Pain',
    slug: 'truth-about-dental-abscesses-never-ignore-gum-pain',
    excerpt: 'Dental nerve infections can expand into surrounding facial structures. Understand the signs of dental emergencies.',
    content: 'A dental abscess is a serious localized collection of bacterial pus forming near the tooth root or gums. It originates from untreated deep dental decay or cracked teeth leaking harmful oral bacteria. Abscesses do not heal themselves and can spread into surrounding facial tissues or your blood streams. In this article, learn how modern pain-free root canals and professional drainages can safely save your teeth.',
    author: 'Dr. Emily Chen, DDS',
    publishDate: 'April 12, 2026',
    readTime: '5 min read',
    category: 'Emergency Care',
    imageUrl: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=600&q=80'
  }
];

export const FACILITIES: ClinicFacility[] = [
  {
    id: 'fac-1',
    title: 'Low-Radiation Advanced 3D CBCT Scans',
    description: 'We generate high-resolution three-dimensional dental scans with 90% less radiation than traditional x-ray units, allowing ultra-precise implant tracking.',
    iconName: 'ScanFace'
  },
  {
    id: 'fac-2',
    title: 'Fully Painless Injection Systems',
    description: 'Our computerized local anesthesia technology regulates pressure and fluid velocity dynamically, creating a totally comfortable and painless numbing sensation.',
    iconName: 'Syringe'
  },
  {
    id: 'fac-3',
    title: 'HEPA Negative-Pressure Air Filtration',
    description: 'To guarantee pristine hygienic safety, our operating rooms feature institutional-grade particulate extraction filters continuously scrubbing clinical atmosphere.',
    iconName: 'Wind'
  },
  {
    id: 'fac-4',
    title: 'Intraoral High-Def 3D Scanners',
    description: 'Forget messy dental impression pastes. Our hand-guided laser cameras instantly capture 3D mockups of teeth structures in stunning real-time detail.',
    iconName: 'Tv'
  }
];

export const INSURANCES = [
  { name: 'MetLife Dental', logoLetter: 'M', color: 'bg-blue-600' },
  { name: 'Cigna Health', logoLetter: 'C', color: 'bg-cyan-600' },
  { name: 'Delta Dental', logoLetter: 'D', color: 'bg-green-600' },
  { name: 'Aetna Benefits', logoLetter: 'A', color: 'bg-amber-600' },
  { name: 'Humana Dental', logoLetter: 'H', color: 'bg-teal-600' },
  { name: 'Blue Shield', logoLetter: 'B', color: 'bg-royal-600' }
];
