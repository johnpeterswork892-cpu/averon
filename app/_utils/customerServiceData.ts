import type { SupportCategory, FAQItem } from "../_types/customerService";

export const supportCategories: SupportCategory[] = [
  {
    id: "shipping",
    title: "Shipping Issues",
    description: "Track packages, delivery delays, lost shipments, and shipping damages",
    icon: "truck",
    contact: {
      email: "shipping@logistics.com",
      phone: "+234 123 456 7890",
      hours: "Mon-Fri: 8AM - 6PM WAT",
    },
  },
  {
    id: "billing",
    title: "Billing & Payments",
    description: "Invoice questions, payment methods, refunds, and account billing",
    icon: "receipt",
    contact: {
      email: "billing@averonlogistics.com",
      phone: "+234 123 456 7891",
      hours: "Mon-Fri: 9AM - 5PM WAT",
    },
  },
  {
    id: "general",
    title: "General Inquiry",
    description: "Questions about our services, pricing, locations, and partnerships",
    icon: "help",
    contact: {
      email: "support@averonlogistics.com",
      phone: "+234 123 456 7892",
      hours: "Mon-Sat: 8AM - 8PM WAT",
    },
  },
  {
    id: "technical",
    title: "Technical Support",
    description: "Website issues, account access, tracking system, and app problems",
    icon: "settings",
    contact: {
      email: "tech@averonlogistics.com",
      phone: "+234 123 456 7893",
      hours: "24/7 Support Available",
    },
  },
];

export const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "How do I track my shipment?",
    answer: "You can track your shipment by entering your 10-digit tracking number on our Track page. You'll receive real-time updates on your package location, delivery status, and estimated delivery time. Tracking information is updated every few hours as your package moves through our network.",
    category: "shipping",
  },
  {
    id: "faq-2",
    question: "What are your delivery timeframes?",
    answer: "Delivery timeframes vary by service type. Express delivery takes 1-2 business days, Standard delivery takes 3-5 business days, and Economy delivery takes 5-7 business days. All timeframes are calculated from the pickup date. Deliveries to remote areas may require additional time.",
    category: "shipping",
  },
  {
    id: "faq-3",
    question: "How can I request a refund or file a claim?",
    answer: "To request a refund or file a claim, please contact our billing department at billing@logistics.com or call +234 123 456 7891. You'll need your tracking number, invoice number, and supporting documentation (photos for damaged items). Claims are typically processed within 5-10 business days.",
    category: "billing",
  },
  {
    id: "faq-4",
    question: "Do you offer international shipping?",
    answer: "Yes, we offer comprehensive international shipping services to over 150 countries worldwide. We provide both air freight and ocean freight options with competitive rates. For international shipments, additional customs documentation may be required. Contact our support team for specific country requirements and pricing.",
    category: "general",
  },
];