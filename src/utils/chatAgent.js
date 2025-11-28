// Intelligent Chat Agent with Fuzzy Search and Semantic Matching
import knowledgeBase from './knowledgeBase';

/**
 * Calculate Levenshtein distance between two strings (for fuzzy matching)
 */
const levenshteinDistance = (str1, str2) => {
  const matrix = [];
  
  for (let i = 0; i <= str2.length; i++) {
    matrix[i] = [i];
  }
  
  for (let j = 0; j <= str1.length; j++) {
    matrix[0][j] = j;
  }
  
  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  
  return matrix[str2.length][str1.length];
};

/**
 * Calculate similarity score between two strings (0-1, higher is better)
 */
const stringSimilarity = (str1, str2) => {
  const longer = str1.length > str2.length ? str1 : str2;
  const shorter = str1.length > str2.length ? str2 : str1;
  
  if (longer.length === 0) return 1.0;
  
  const distance = levenshteinDistance(longer, shorter);
  return (longer.length - distance) / longer.length;
};

/**
 * Extract keywords from user query
 */
const extractKeywords = (query) => {
  // Common stop words to filter out
  const stopWords = new Set([
    'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from',
    'has', 'he', 'in', 'is', 'it', 'its', 'of', 'on', 'that', 'the',
    'to', 'was', 'will', 'with', 'you', 'your', 'can', 'do', 'does',
    'what', 'when', 'where', 'who', 'why', 'how', 'i', 'me', 'my'
  ]);
  
  return query
    .toLowerCase()
    .replace(/[^\w\s]/g, '') // Remove punctuation
    .split(/\s+/)
    .filter(word => word.length > 2 && !stopWords.has(word));
};

/**
 * Score a knowledge base item against user query
 */
const scoreItem = (item, queryKeywords, originalQuery) => {
  let score = 0;
  const lowerQuery = originalQuery.toLowerCase();
  
  // Check if item has keywords property
  const itemKeywords = item.keywords || [];
  
  // Direct question match (highest priority)
  if (item.question) {
    const questionSimilarity = stringSimilarity(lowerQuery, item.question.toLowerCase());
    if (questionSimilarity > 0.6) {
      score += questionSimilarity * 100;
    }
  }
  
  // Keyword matching
  queryKeywords.forEach(queryKw => {
    itemKeywords.forEach(itemKw => {
      const similarity = stringSimilarity(queryKw, itemKw.toLowerCase());
      if (similarity > 0.7) {
        score += similarity * 10;
      }
    });
    
    // Check if keyword appears in answer/description
    if (item.answer && item.answer.toLowerCase().includes(queryKw)) {
      score += 5;
    }
    if (item.description && item.description.toLowerCase().includes(queryKw)) {
      score += 5;
    }
  });
  
  // Exact phrase matching in answer
  if (item.answer && item.answer.toLowerCase().includes(lowerQuery)) {
    score += 20;
  }
  
  return score;
};

/**
 * Search FAQ for relevant answers
 */
const searchFAQ = (query, queryKeywords) => {
  const results = knowledgeBase.faq.map(item => ({
    ...item,
    score: scoreItem(item, queryKeywords, query),
    source: 'FAQ'
  }));
  
  return results.filter(r => r.score > 5).sort((a, b) => b.score - a.score);
};

/**
 * Search About section
 */
const searchAbout = (query, queryKeywords) => {
  const lowerQuery = query.toLowerCase();
  const results = [];
  
  // Check if query is about background/education
  if (queryKeywords.some(kw => ['education', 'degree', 'qualification', 'background', 'study', 'studied'].includes(kw))) {
    results.push({
      answer: knowledgeBase.about.background,
      score: 50,
      source: 'About - Education'
    });
  }
  
  // Check if query is about current role
  if (queryKeywords.some(kw => ['role', 'position', 'job', 'work', 'coordinator', 'current'].includes(kw))) {
    const role = knowledgeBase.about.currentRole;
    results.push({
      answer: `I'm currently the ${role.title} at ${role.organization} in ${role.location}, a position I've held since ${role.startDate}. ${knowledgeBase.about.highlights[1].description}`,
      score: 50,
      source: 'About - Current Role'
    });
  }
  
  // Check if query is about general work/focus
  if (queryKeywords.some(kw => ['focus', 'work', 'do'].includes(kw)) && !lowerQuery.includes('future')) {
    results.push({
      answer: `${knowledgeBase.about.description} ${knowledgeBase.about.focus}`,
      score: 40,
      source: 'About'
    });
  }
  
  return results;
};

/**
 * Search Vision section
 */
const searchVision = (query, queryKeywords) => {
  const results = [];
  
  // Check if query is about philosophy/values
  if (queryKeywords.some(kw => ['philosophy', 'values', 'believe', 'approach', 'vision'].includes(kw))) {
    results.push({
      answer: `My core philosophy: "${knowledgeBase.vision.corePhilosophy}" I'm driven by values of ${knowledgeBase.vision.values.map(v => v.title).join(', ')}.`,
      score: 50,
      source: 'Vision'
    });
  }
  
  return results;
};

/**
 * Search Publications section
 */
const searchPublications = (query, queryKeywords) => {
  const results = [];
  const lowerQuery = query.toLowerCase();
  
  // Check if query is about publications/research
  if (queryKeywords.some(kw => ['publication', 'research', 'paper', 'published', 'wrote', 'article'].includes(kw))) {
    const researchAreas = knowledgeBase.publications.researchAreas.join(', ');
    results.push({
      answer: `${knowledgeBase.publications.summary} My research areas include: ${researchAreas}. You can view my publications in the Publications section below.`,
      score: 50,
      source: 'Publications'
    });
  }
  
  // Check for specific research topics
  const topicMatches = [];
  knowledgeBase.publications.researchAreas.forEach(area => {
    if (lowerQuery.includes(area.toLowerCase()) || 
        queryKeywords.some(kw => area.toLowerCase().includes(kw))) {
      topicMatches.push(area);
    }
  });
  
  if (topicMatches.length > 0) {
    results.push({
      answer: `Yes, I've published research on ${topicMatches.join(' and ')}. Check out the Publications section to see my work in these areas.`,
      score: 45,
      source: 'Publications - Topics'
    });
  }
  
  return results;
};

/**
 * Handle contact/collaboration queries
 */
const searchContact = (query, queryKeywords) => {
  const results = [];
  const lowerQuery = query.toLowerCase();
  
  // Check if asking about contact
  if (queryKeywords.some(kw => ['contact', 'reach', 'email', 'message', 'touch'].includes(kw))) {
    results.push({
      answer: `You can reach me through the contact form at the bottom of this page. I typically respond within ${knowledgeBase.contact.responseTime}!`,
      score: 50,
      source: 'Contact'
    });
  }
  
  // Check if asking about specific services
  if (lowerQuery.includes('speaking') || lowerQuery.includes('talk') || lowerQuery.includes('presentation')) {
    results.push({
      answer: "Yes, I'm available for speaking engagements at conferences, universities, and community events. Let's discuss your event through the contact form!",
      score: 50,
      source: 'Services - Speaking'
    });
  }
  
  if (lowerQuery.includes('mentor')) {
    results.push({
      answer: "Yes! I offer mentorship programs for young environmentalists. I'm passionate about empowering the next generation of environmental leaders. Contact me to discuss mentorship opportunities.",
      score: 50,
      source: 'Services - Mentorship'
    });
  }
  
  return results;
};

/**
 * Detect greeting/thanks/goodbye
 */
const detectIntent = (query) => {
  const lowerQuery = query.toLowerCase().trim();
  
  // Greetings
  if (/^(hi|hello|hey|greetings|good\s+(morning|afternoon|evening))/.test(lowerQuery)) {
    return { type: 'greeting', response: knowledgeBase.quickResponses.greeting };
  }
  
  // Thanks
  if (/(thank|thanks|thx|appreciate)/.test(lowerQuery)) {
    return { type: 'thanks', response: knowledgeBase.quickResponses.thanks };
  }
  
  // Goodbye
  if (/(bye|goodbye|see you|farewell)/.test(lowerQuery)) {
    return { type: 'goodbye', response: knowledgeBase.quickResponses.goodbye };
  }
  
  return null;
};

/**
 * Main search function - finds best answer for user query
 */
export const searchKnowledgeBase = (query) => {
  // Check for simple intents first
  const intent = detectIntent(query);
  if (intent) {
    return {
      answer: intent.response,
      source: 'Quick Response',
      confidence: 1.0
    };
  }
  
  // Extract keywords from query
  const queryKeywords = extractKeywords(query);
  
  // If query is too short or has no keywords, return default
  if (queryKeywords.length === 0 && query.trim().length < 3) {
    return {
      answer: knowledgeBase.quickResponses.unknown,
      source: 'Default',
      confidence: 0.3
    };
  }
  
  // Search all sections
  const allResults = [
    ...searchFAQ(query, queryKeywords),
    ...searchAbout(query, queryKeywords),
    ...searchVision(query, queryKeywords),
    ...searchPublications(query, queryKeywords),
    ...searchContact(query, queryKeywords)
  ];
  
  // Sort by score
  allResults.sort((a, b) => b.score - a.score);
  
  // Return best match or default
  if (allResults.length > 0 && allResults[0].score > 10) {
    const bestMatch = allResults[0];
    return {
      answer: bestMatch.answer,
      source: bestMatch.source,
      confidence: Math.min(bestMatch.score / 100, 1.0),
      alternativeMatches: allResults.slice(1, 3).filter(r => r.score > 15)
    };
  }
  
  // No good match found
  return {
    answer: knowledgeBase.quickResponses.unknown,
    source: 'Default',
    confidence: 0.2
  };
};

/**
 * Get suggested follow-up questions based on current topic
 */
export const getSuggestedQuestions = (lastQuery) => {
  const queryKeywords = extractKeywords(lastQuery);
  const suggestions = [];
  
  // Suggest related questions based on keywords
  if (queryKeywords.some(kw => ['work', 'focus', 'do'].includes(kw))) {
    suggestions.push("How can I collaborate with you?", "Tell me about your publications");
  } else if (queryKeywords.some(kw => ['research', 'publication'].includes(kw))) {
    suggestions.push("What are your research areas?", "Can I collaborate on research?");
  } else if (queryKeywords.some(kw => ['education', 'background'].includes(kw))) {
    suggestions.push("What is your current role?", "Tell me about your philosophy");
  } else {
    // Default suggestions
    suggestions.push("Tell me about your work", "How can I get involved?", "View publications");
  }
  
  return suggestions.slice(0, 3);
};

export default { searchKnowledgeBase, getSuggestedQuestions };
