// Centralized Knowledge Base for AI Chat Agent
// This contains all information about the portfolio owner that the chat agent can reference

export const knowledgeBase = {
  // FAQ Section - Direct Q&A pairs
  faq: [
    {
      id: 'faq-1',
      question: "What is your primary focus in environmental advocacy?",
      answer: "My work centers on climate change mitigation, public health, and youth empowerment. I focus on creating data-driven solutions that address environmental challenges while improving livelihoods in vulnerable communities, particularly in Ghana and across Africa.",
      keywords: ["focus", "work", "advocacy", "climate", "health", "youth", "empowerment", "data-driven", "environmental"],
      category: "work"
    },
    {
      id: 'faq-2',
      question: "How can I get involved in your environmental initiatives?",
      answer: "There are several ways to get involved! You can join community clean-up events, participate in awareness campaigns, collaborate on research projects, or volunteer with the Accra Cityzens Hub. Feel free to reach out through the contact form to discuss specific opportunities that align with your interests and skills.",
      keywords: ["involved", "participate", "volunteer", "join", "collaborate", "opportunities", "cityzens hub"],
      category: "collaboration"
    },
    {
      id: 'faq-3',
      question: "What qualifications do you have in environmental science?",
      answer: "I hold a Bachelor's degree in Biological Sciences and am currently pursuing advanced studies in Environmental Science and International Relations. This multidisciplinary background allows me to approach environmental challenges from both scientific and policy perspectives.",
      keywords: ["qualifications", "education", "degree", "background", "studies", "biological sciences", "environmental science", "international relations"],
      category: "background"
    },
    {
      id: 'faq-4',
      question: "Do you offer mentorship or speaking engagements?",
      answer: "Yes! I'm passionate about empowering the next generation of environmental leaders. I offer mentorship programs for young environmentalists and am available for speaking engagements at conferences, universities, and community events. Contact me to discuss your specific needs.",
      keywords: ["mentorship", "speaking", "engagements", "conferences", "events", "mentor", "talk", "presentation"],
      category: "services"
    },
    {
      id: 'faq-5',
      question: "What is the Accra Cityzens Hub?",
      answer: "The Accra Cityzens Hub is part of the UrbanBetter initiative, where I serve as Coordinator. We work on urban sustainability projects, community engagement, and creating citizen-led solutions for environmental challenges in Accra, Ghana. The hub brings together researchers, activists, and community members to drive positive change.",
      keywords: ["accra", "cityzens", "hub", "urbanbetter", "coordinator", "role", "position", "current"],
      category: "work"
    },
    {
      id: 'faq-6',
      question: "How do you incorporate research into your advocacy work?",
      answer: "I believe in evidence-based advocacy. My approach involves conducting thorough research, analyzing data, and using scientific findings to inform policy recommendations and community interventions. This ensures that our initiatives are grounded in solid evidence and have measurable impacts.",
      keywords: ["research", "evidence", "data", "scientific", "approach", "methodology", "analysis"],
      category: "work"
    },
    {
      id: 'faq-7',
      question: "Can I collaborate with you on a research project?",
      answer: "Absolutely! I'm always open to collaborative research opportunities, especially those focused on climate change, environmental health, or sustainable development in Africa. Please reach out with details about your project, and we can explore potential partnerships.",
      keywords: ["collaborate", "collaboration", "research", "project", "partnership", "work together"],
      category: "collaboration"
    },
    {
      id: 'faq-8',
      question: "What are your future goals in environmental advocacy?",
      answer: "My long-term vision is to bridge the gap between scientific research and policy implementation, ensuring that environmental solutions are both scientifically sound and culturally appropriate. I aim to expand youth engagement programs, influence climate policy at national and international levels, and continue building sustainable communities across Africa.",
      keywords: ["goals", "future", "vision", "plans", "aspirations", "objectives"],
      category: "vision"
    }
  ],

  // About Section - Background Information
  about: {
    title: "Bridging Science & Community Action",
    description: "I am an Environmentalist, Researcher, and Advocate dedicated to creating sustainable solutions for our planet.",
    background: "With a strong foundation in Biological Sciences and ongoing advanced studies in Environmental Science and International Relations, I approach global challenges with a multidisciplinary lens.",
    focus: "My work focuses on Climate Change, Public Health, and Youth Empowerment. I believe in the power of data-driven advocacy to drive policy change and improve livelihoods in vulnerable communities.",
    currentRole: {
      title: "Accra Cityzens Hub Coordinator",
      organization: "UrbanBetter",
      location: "Accra, Ghana",
      startDate: "August 2024",
      link: "https://cityzens.urbanbetter.science/accra-hub/"
    },
    highlights: [
      {
        title: "Global Advocacy",
        description: "Representing youth voices on international platforms."
      },
      {
        title: "Community Action",
        description: "Hands-on work with local communities for sustainable change."
      },
      {
        title: "Research & Data",
        description: "Evidence-based approaches to environmental challenges."
      },
      {
        title: "Mentorship",
        description: "Empowering the next generation of changemakers."
      }
    ],
    keywords: ["environmentalist", "researcher", "advocate", "biological sciences", "environmental science", "international relations", "climate change", "public health", "youth empowerment", "urbanbetter", "accra", "ghana"]
  },

  // Vision & Philosophy
  vision: {
    corePhilosophy: "True progress is achieved when we harmonize scientific innovation with indigenous knowledge and community needs. We must not only study the world but actively work to heal it.",
    values: [
      {
        title: "Innovation & Synthesis",
        description: "Noted for innovative approaches and solutions, rapidly synthesizing disparate data into coherent strategies."
      },
      {
        title: "Leadership & Impact",
        description: "Serving on youth project review boards and contributing technical foresight strategies to global policy documents."
      },
      {
        title: "Global Advocacy",
        description: "Bridging the gap between international climate decisions and the reality on the ground for vulnerable communities."
      },
      {
        title: "Community Action",
        description: "Empowering youth and local communities to take ownership of their environmental future."
      }
    ],
    keywords: ["philosophy", "values", "innovation", "leadership", "impact", "advocacy", "community", "indigenous knowledge"]
  },

  // Publications & Research Areas
  publications: {
    summary: "Published researcher with focus on climate change, marine conservation, environmental health, and youth climate justice.",
    researchAreas: [
      "Climate Change Mitigation",
      "Marine Conservation & Ocean Sustainability",
      "Environmental Health & Public Health",
      "Youth Climate Justice",
      "Indigenous Knowledge Integration",
      "Urban Sustainability",
      "Biodiversity Conservation",
      "Climate Finance for Youth"
    ],
    recentPublications: [
      {
        title: "Building Bridges for Ocean Sustainability: The Evolution and Impact of the Early Career Ocean Professional (ECOP) Programme",
        year: "2024",
        journal: "Marine Technology Society Journal"
      },
      {
        title: "The Role of the Ghana National Youth Policy in Promoting Youth Climate Justice Amidst Systematic Challenges",
        year: "2025",
        journal: "Int. J. Sci. Res. in Multidisciplinary Studies"
      },
      {
        title: "A Rapid Literature Review of Climate Financing for Youths in Sub-Saharan Africa",
        year: "2025",
        journal: "African Journal of Climate Change and Resource Sustainability"
      }
    ],
    keywords: ["publications", "research", "papers", "published", "climate", "ocean", "marine", "health", "youth", "justice", "biodiversity"]
  },

  // Contact & Collaboration
  contact: {
    availability: {
      mentorship: true,
      speaking: true,
      research: true,
      consulting: true
    },
    responseTime: "24-48 hours",
    preferredContact: "contact form",
    keywords: ["contact", "reach", "email", "message", "get in touch", "connect"]
  },

  // Quick Responses for Common Queries
  quickResponses: {
    greeting: "Hi! 👋 I'm here to help you learn more about my environmental work. Feel free to ask me anything!",
    thanks: "You're welcome! Feel free to ask if you have any other questions.",
    goodbye: "Thank you for your interest! Don't hesitate to reach out through the contact form if you need anything else.",
    unknown: "Thanks for your message! For detailed information, please explore the different sections of my portfolio or use the contact form to get in touch directly."
  }
};

// Helper function to get all keywords from knowledge base
export const getAllKeywords = () => {
  const keywords = new Set();
  
  // Add FAQ keywords
  knowledgeBase.faq.forEach(item => {
    item.keywords.forEach(kw => keywords.add(kw.toLowerCase()));
  });
  
  // Add about keywords
  knowledgeBase.about.keywords.forEach(kw => keywords.add(kw.toLowerCase()));
  
  // Add vision keywords
  knowledgeBase.vision.keywords.forEach(kw => keywords.add(kw.toLowerCase()));
  
  // Add publications keywords
  knowledgeBase.publications.keywords.forEach(kw => keywords.add(kw.toLowerCase()));
  
  // Add contact keywords
  knowledgeBase.contact.keywords.forEach(kw => keywords.add(kw.toLowerCase()));
  
  return Array.from(keywords);
};

export default knowledgeBase;
