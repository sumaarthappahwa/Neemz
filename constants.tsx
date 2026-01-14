
import React from 'react';
import { 
  Activity, 
  ShieldCheck, 
  Stethoscope, 
  HeartHandshake, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Youtube 
} from 'lucide-react';
import { Service, FAQItem, ValueProp, VideoReview } from './types';

export const COLORS = {
  primary: '#82BC24', // Dr Neemz Green
  secondary: '#1A237E', // Deep Indigo
  accent: '#E8F5E9',
  text: '#374151',
};

export const SERVICES: Service[] = [
  { title: "Dental Fillings", icon: "🦷", description: "Restore damaged teeth to their normal function and shape." },
  { title: "Root Canal Treatment", icon: "🦷", description: "Pain-free procedure to save a badly decayed or infected tooth." },
  { title: "Wisdom Tooth Removal", icon: "🦷", description: "Expert surgical extraction of impacted or painful wisdom teeth." },
  { title: "Braces & Aligners", icon: "🦷", description: "Straighten your smile with modern braces or clear invisible aligners." },
  { title: "Dentures", icon: "🦷", description: "Custom-made replacements for missing teeth that look natural." },
  { title: "Dental Implants", icon: "🦷", description: "The gold standard for replacing missing teeth permanently." },
  { title: "Bridge & Crowns", icon: "🦷", description: "Fixed dental restorations used to replace missing or damaged teeth." },
  { title: "Mouth Ulcers", icon: "🦷", description: "Specialized treatment for recurring and painful mouth sores." },
];

export const FAQS: FAQItem[] = [
  {
    question: "How often should I visit the dentist?",
    answer: "It's generally recommended to visit the dentist every six months for routine checkups and cleanings. These visits allow for early detection of any potential issues, such as cavities or gum disease, and help maintain your overall oral health. Regular cleanings also help remove plaque and tartar buildup that can lead to dental problems."
  },
  {
    question: "What can I do to prevent cavities?",
    answer: "Brush twice daily with fluoride toothpaste, floss regularly, limit sugary snacks, and visit your dentist twice a year for professional cleanings and checkups."
  },
  {
    question: "Are dental X-rays safe?",
    answer: "Yes, modern digital dental X-rays use very low levels of radiation and are considered safe. We use them sparingly to diagnose issues that aren't visible during a regular exam."
  },
  {
    question: "What is the best way to whiten my teeth?",
    answer: "We offer professional in-office whitening for the fastest results, as well as take-home kits that are more effective and safer than over-the-counter options."
  }
];

export const VALUE_PROPS: ValueProp[] = [
  {
    title: "Certified",
    description: "Our certified dental team uses the latest techniques to ensure top-quality care for every patient.",
    icon: "📋"
  },
  {
    title: "Facilities",
    description: "Experience modern dental care in our state-of-the-art facilities equipped with advanced technology.",
    icon: "🏥"
  },
  {
    title: "Professional",
    description: "Benefit from the skill and knowledge of our experienced dental professionals committed to your oral health.",
    icon: "👨‍⚕️"
  },
  {
    title: "Support",
    description: "Enjoy dedicated support from our friendly staff throughout your dental journey, ensuring a seamless experience.",
    icon: "🎧"
  }
];

export const VIDEO_REVIEWS: VideoReview[] = [
  { id: "1", title: "Happy Patient Review - Root Canal", thumbnail: "https://picsum.photos/id/101/400/600" },
  { id: "2", title: "Patient Success Story - Braces", thumbnail: "https://picsum.photos/id/102/400/600" },
  { id: "3", title: "Excellent Care - Dental Implants", thumbnail: "https://picsum.photos/id/103/400/600" },
  { id: "4", title: "Bridge and Crown Experience", thumbnail: "https://picsum.photos/id/104/400/600" },
  { id: "5", title: "Wisdom Tooth Removal Review", thumbnail: "https://picsum.photos/id/105/400/600" },
  { id: "6", title: "General Checkup Feedback", thumbnail: "https://picsum.photos/id/106/400/600" },
];
