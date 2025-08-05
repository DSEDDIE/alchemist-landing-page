
export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  imageSrc: string;
  title: string;
  description: string;
  highlighted?: boolean;
}

export interface Testimonial {
  id: string;
  stars: number;
  text: string;
  avatarSrc: string;
  name: string;
  role: string;
}

export interface FaqItemData {
  id: string;
  question: string;
  answer: string;
}

export interface FormData {
  fullName?: string;
  name?: string;
  email: string;
  phone?: string;
  message?: string;
}
