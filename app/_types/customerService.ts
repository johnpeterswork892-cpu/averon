export interface SupportCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  contact: {
    email?: string;
    phone?: string;
    hours?: string;
  };
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  category: string;
  subject: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  category?: string;
  subject?: string;
  message?: string;
}