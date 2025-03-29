
import { BlogGeneratorFormValues } from "@/components/BlogContentGeneratorForm";
import { BlogContentResult } from "@/components/BlogContentResults";

// Function to generate blog content with or without API
export const generateBlogContent = async (
  formValues: BlogGeneratorFormValues
): Promise<{
  success: boolean;
  data: BlogContentResult | null;
  message?: string;
}> => {
  try {
    // Try to use a content API if available
    // This is where you would implement API calls when you have the API key
    
    // For now, use fallback data generation
    const generatedContent = generateFallbackContent(formValues);
    
    return {
      success: true,
      data: generatedContent,
    };
  } catch (error) {
    console.error("Error generating blog content:", error);
    
    // Return fallback content on API failure
    const fallbackContent = generateFallbackContent(formValues);
    
    return {
      success: true,
      data: fallbackContent,
      message: "Using simulated content. For more accurate results, connect a content generation API.",
    };
  }
};

// Function to generate fallback content when API fails
const generateFallbackContent = (
  formValues: BlogGeneratorFormValues
): BlogContentResult => {
  const { topic, keywords, contentType, tone, wordCount, targetAudience } = formValues;
  
  // Generate a title based on the topic
  let title = generateTitle(topic, contentType);
  
  // Generate an outline based on the content type
  const outline = generateOutline(topic, contentType);
  
  // Generate content based on outline
  const content = generateContentFromOutline(topic, contentType, tone, outline, Number(wordCount));
  
  // Generate meta description
  const metaDescription = generateMetaDescription(topic, targetAudience);
  
  // Generate suggested tags
  const suggestedTags = generateTags(topic, keywords);
  
  return {
    title,
    content,
    outline,
    metaDescription,
    suggestedTags,
  };
};

// Generate a title based on the topic and content type
const generateTitle = (topic: string, contentType: string): string => {
  // Remove any "how to" prefix from the topic for cleaner title generation
  const cleanTopic = topic.toLowerCase().replace(/^how to |^what is |^why |^when to |^where to /, '');
  
  const prefixes = {
    'blog-post': [
      'The Ultimate Guide to', 
      'Everything You Need to Know About', 
      'How to Master', 
      'The Complete Guide to',
      'Why Every Business Needs'
    ],
    'how-to-guide': [
      'How to', 
      'A Step-by-Step Guide to', 
      'The Easiest Way to', 
      'A Beginner\'s Guide to',
      'Quick Tips for'
    ],
    'listicle': [
      '10 Proven Strategies for', 
      '7 Essential Tips for', 
      '5 Ways to Improve', 
      '12 Mistakes to Avoid When',
      '8 Best Practices for'
    ],
    'case-study': [
      'How [Company] Achieved Success with', 
      'Case Study: Transforming Results Through', 
      'Success Story: Implementing',
      'Real Results: How [Company] Used',
      'From Struggle to Success: A Case Study in'
    ],
    'article': [
      'The Future of', 
      'Understanding the Impact of', 
      'Why You Should Care About', 
      'Exploring the Benefits of',
      'The Rising Importance of'
    ],
    'product-review': [
      'An Honest Review of', 
      'Is It Worth It? A Review of', 
      'Hands-On with',
      'Our Experience Using',
      'The Pros and Cons of'
    ],
    'opinion-piece': [
      'Why I Believe in', 
      'The Problem with', 
      'It\'s Time to Rethink',
      'My Take on',
      'The Overlooked Truth About'
    ],
    'news-update': [
      'Breaking: New Developments in', 
      'The Latest Updates on', 
      'What\'s New in',
      'Recent Changes to',
      'Industry News: The Evolution of'
    ],
    'interview': [
      'Expert Insights: An Interview About', 
      'Q&A with Industry Leader on', 
      'Behind the Scenes of',
      'Insider Perspective on',
      'Expert Opinions: A Conversation About'
    ]
  };
  
  // Default to blog post prefixes if content type not found
  const typeSpecificPrefixes = prefixes[contentType as keyof typeof prefixes] || prefixes['blog-post'];
  
  // Pick a random prefix
  const chosenPrefix = typeSpecificPrefixes[Math.floor(Math.random() * typeSpecificPrefixes.length)];
  
  // Generate title with capitalized words
  let title: string;
  
  if (chosenPrefix.includes('[Company]')) {
    // Replace placeholder with a generic company name
    const companies = ['Acme Inc', 'TechGrowth', 'InnovateCorp', 'GlobalSolutions', 'NextLevel'];
    const company = companies[Math.floor(Math.random() * companies.length)];
    title = chosenPrefix.replace('[Company]', company) + ' ' + cleanTopic.charAt(0).toUpperCase() + cleanTopic.slice(1);
  } else {
    title = chosenPrefix + ' ' + cleanTopic.charAt(0).toUpperCase() + cleanTopic.slice(1);
  }
  
  return title;
};

// Generate an outline based on the topic and content type
const generateOutline = (topic: string, contentType: string): string[] => {
  let outline: string[] = [];
  
  // Different outlines based on content type
  switch (contentType) {
    case 'blog-post':
      outline = [
        'Introduction',
        'What is ' + topic,
        'Benefits of ' + topic,
        'Key challenges related to ' + topic,
        'Best practices for implementing ' + topic,
        'Case studies or examples',
        'Future trends in ' + topic,
        'Conclusion'
      ];
      break;
      
    case 'how-to-guide':
      outline = [
        'Introduction: Why ' + topic + ' matters',
        'Prerequisites and tools needed',
        'Step 1: Getting started with ' + topic,
        'Step 2: Key techniques for ' + topic,
        'Step 3: Avoiding common mistakes',
        'Step 4: Advanced strategies',
        'Troubleshooting common issues',
        'Conclusion: Next steps after mastering ' + topic
      ];
      break;
      
    case 'listicle':
      outline = [
        'Introduction: Why ' + topic + ' is important',
        '#1: First key aspect of ' + topic,
        '#2: Essential strategy for ' + topic,
        '#3: Overlooked technique for ' + topic,
        '#4: Expert tip for ' + topic,
        '#5: Future trend in ' + topic,
        'How to implement these strategies',
        'Conclusion'
      ];
      break;
      
    case 'case-study':
      outline = [
        'Background and challenges',
        'Objectives for implementing ' + topic,
        'Strategy and approach',
        'Implementation process',
        'Results and key metrics',
        'Lessons learned',
        'Future plans',
        'Conclusion'
      ];
      break;
      
    case 'article':
      outline = [
        'Current state of ' + topic,
        'Historical background',
        'Key factors driving changes in ' + topic,
        'Impact on industry',
        'Expert opinions',
        'Future predictions',
        'What this means for your business',
        'Conclusion'
      ];
      break;
      
    case 'product-review':
      outline = [
        'Introduction to ' + topic,
        'Key features and specifications',
        'User experience',
        'Pros of ' + topic,
        'Cons of ' + topic,
        'Comparison with alternatives',
        'Value for money',
        'Final verdict'
      ];
      break;
      
    default:
      outline = [
        'Introduction',
        'Understanding ' + topic,
        'Key aspects of ' + topic,
        'Implementing ' + topic + ' effectively',
        'Common challenges and solutions',
        'Best practices',
        'Future outlook',
        'Conclusion'
      ];
  }
  
  return outline;
};

// Generate content based on outline
const generateContentFromOutline = (
  topic: string,
  contentType: string,
  tone: string,
  outline: string[],
  wordCount: number
): string => {
  // Calculate approximate words per section to reach target word count
  const wordsPerSection = Math.floor(wordCount / outline.length);
  
  let content = '';
  
  // Introduction - approximately 15% of total content
  content += `# ${outline[0]}\n\n`;
  content += generateSectionContent(topic, outline[0], tone, Math.floor(wordsPerSection * 1.1));
  
  // Middle sections - 10-15% each
  for (let i = 1; i < outline.length - 1; i++) {
    content += `\n\n## ${outline[i]}\n\n`;
    content += generateSectionContent(topic, outline[i], tone, wordsPerSection);
  }
  
  // Conclusion - 10% of content
  content += `\n\n## ${outline[outline.length - 1]}\n\n`;
  content += generateSectionContent(topic, outline[outline.length - 1], tone, Math.floor(wordsPerSection * 0.9));
  
  return content;
};

// Generate content for a specific section
const generateSectionContent = (
  topic: string,
  sectionTitle: string,
  tone: string,
  wordCount: number
): string => {
  // This function would ideally use an AI API to generate real content
  // For now, we'll generate placeholder content
  
  const sentences = [
    `${topic} is becoming increasingly important in today's competitive landscape.`,
    `Organizations that effectively implement ${topic} strategies often see improved results.`,
    `Research shows that businesses focusing on ${topic} outperform their competitors by up to 30%.`,
    `There are several approaches to consider when addressing ${topic} in your organization.`,
    `Industry experts recommend a systematic approach to ${topic} implementation.`,
    `One of the common challenges with ${topic} is maintaining consistency across all channels.`,
    `To effectively leverage ${topic}, it's essential to understand your target audience.`,
    `Data-driven decision making is crucial for successful ${topic} strategies.`,
    `The landscape of ${topic} continues to evolve with technological advancements.`,
    `Staying updated with the latest ${topic} trends gives businesses a competitive edge.`,
    `${topic} requires both strategic thinking and tactical execution.`,
    `Many organizations struggle with measuring the ROI of their ${topic} initiatives.`,
    `Developing a comprehensive ${topic} strategy involves multiple stakeholders.`,
    `The most successful ${topic} implementations are those that align with business objectives.`,
    `Understanding the core principles of ${topic} is the first step toward mastery.`,
    `Case studies show that proper ${topic} implementation can lead to significant growth.`,
    `The future of ${topic} looks promising with emerging technologies like AI and machine learning.`,
    `Investing in ${topic} education and training yields long-term benefits for organizations.`,
    `A common misconception about ${topic} is that it's a one-time effort rather than an ongoing process.`,
    `${topic} best practices continue to evolve as markets and consumer behaviors change.`
  ];
  
  const paragraphs = [];
  let wordsGenerated = 0;
  
  // Adjust number of sentences based on section
  const paragraphCount = sectionTitle.includes('Introduction') ? 2 : 
                        sectionTitle.includes('Conclusion') ? 2 : 3;
  
  for (let i = 0; i < paragraphCount; i++) {
    let paragraph = '';
    const sentencesPerParagraph = Math.floor(wordCount / (paragraphCount * 20)) + 3; // 20 is approx avg words per sentence
    
    for (let j = 0; j < sentencesPerParagraph; j++) {
      // Pick a random sentence, but don't repeat the last one
      let sentenceIndex;
      do {
        sentenceIndex = Math.floor(Math.random() * sentences.length);
      } while (paragraph.includes(sentences[sentenceIndex]));
      
      paragraph += sentences[sentenceIndex] + ' ';
      wordsGenerated += sentences[sentenceIndex].split(' ').length;
    }
    
    paragraphs.push(paragraph);
    
    // If we've generated enough words, stop
    if (wordsGenerated >= wordCount) break;
  }
  
  // Add bullet points for some sections
  if (
    sectionTitle.includes('benefits') || 
    sectionTitle.includes('tips') || 
    sectionTitle.includes('best practices') ||
    sectionTitle.includes('challenges')
  ) {
    paragraphs.push('\nKey points to consider:\n');
    const bulletPoints = [
      `Regularly review your ${topic} strategy for optimal results`,
      `Invest in proper ${topic} training for your team`,
      `Leverage analytics to measure ${topic} performance`,
      `Stay updated with the latest ${topic} trends and technologies`,
      `Integrate ${topic} across all relevant business processes`
    ];
    
    for (let i = 0; i < 5; i++) {
      paragraphs.push(`* ${bulletPoints[i]}`);
      wordsGenerated += bulletPoints[i].split(' ').length + 1; // +1 for the bullet
    }
  }
  
  return paragraphs.join('\n\n');
};

// Generate meta description
const generateMetaDescription = (topic: string, targetAudience?: string): string => {
  const descriptions = [
    `Discover the latest strategies and best practices for ${topic} in this comprehensive guide. Learn how to implement effective approaches to boost your results.`,
    `Everything you need to know about ${topic} in one place. This detailed guide covers key concepts, implementation strategies, and future trends.`,
    `Struggling with ${topic}? Our expert guide breaks down complex concepts into actionable steps that will transform your approach and improve outcomes.`,
    `Maximize your ${topic} effectiveness with our data-driven insights and proven methodologies. Learn from industry experts and real-world case studies.`,
    `The ultimate resource for ${topic} strategies that actually work. Whether you're a beginner or expert, you'll find valuable insights to enhance your approach.`
  ];
  
  let description = descriptions[Math.floor(Math.random() * descriptions.length)];
  
  // Add target audience if provided
  if (targetAudience && targetAudience.trim()) {
    description += ` Perfect for ${targetAudience}.`;
  }
  
  return description;
};

// Generate tags based on topic and keywords
const generateTags = (topic: string, keywords?: string): string[] => {
  const baseTags = [topic.toLowerCase()];
  
  // Add standard tags
  baseTags.push('guide', 'tips', 'strategy', 'best practices');
  
  // Add topic-specific tags
  if (topic.toLowerCase().includes('seo')) {
    baseTags.push('search engine optimization', 'google ranking', 'website traffic', 'digital marketing');
  } else if (topic.toLowerCase().includes('marketing')) {
    baseTags.push('digital marketing', 'social media', 'content strategy', 'lead generation');
  } else if (topic.toLowerCase().includes('business')) {
    baseTags.push('entrepreneurship', 'small business', 'growth strategy', 'management');
  }
  
  // Add user-provided keywords if available
  if (keywords && keywords.trim()) {
    const keywordArray = keywords.split(',').map(k => k.trim().toLowerCase());
    baseTags.push(...keywordArray);
  }
  
  // Remove duplicates and limit to 10 tags
  const uniqueTags = [...new Set(baseTags)].slice(0, 10);
  
  return uniqueTags;
};
