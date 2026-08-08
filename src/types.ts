/**
 * Types representing dental clinic data structures
 */

export interface Service {
  id: string;
  name: string;
  category: 'general' | 'cosmetic' | 'orthodontics' | 'surgical' | 'pediatric';
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  duration: string;
  suitability: string;
  iconName: string; // Dynamic icon rendering name from lucide-react
}

export interface Dentist {
  id: string;
  name: string;
  title: string;
  role: string;
  specialization: string;
  qualifications: string[];
  experience: string; // e.g., "12+ Years"
  bio: string;
  photoUrl: string;
  availability: string;
  languages: string[];
}

export interface Testimonial {
  id: string;
  patientName: string;
  age?: number;
  treatmentType: string;
  rating: number; // 1-5
  reviewText: string;
  date: string;
  beforePhoto?: string;
  afterPhoto?: string;
}

export interface FAQ {
  id: string;
  category: 'general' | 'appointments' | 'treatments' | 'insurance';
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  imageUrl: string;
}

export interface ClinicFacility {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface AppointmentFormInput {
  name: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  treatmentRequired: string;
  message: string;
}

export interface AppointmentRecord extends AppointmentFormInput {
  id: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}
