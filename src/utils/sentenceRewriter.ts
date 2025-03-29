
// Tones and their descriptions to guide the rewriting process
const toneDescriptions = {
  professional: "formal, polished language suitable for business contexts",
  casual: "relaxed, conversational tone for informal contexts",
  academic: "scholarly, precise language with proper citations and formal structure",
  creative: "expressive, vivid language with literary devices and engaging style",
  persuasive: "compelling language designed to convince the reader of a viewpoint",
  simple: "clear, straightforward language avoiding jargon and complexity"
};

/**
 * Rewrites a sentence with AI using the specified tone
 * 
 * @param text The original sentence to rewrite
 * @param tone The desired tone for the rewritten text
 * @returns The rewritten sentence
 */
export const rewriteSentence = async (text: string, tone: string = 'professional'): Promise<string> => {
  // This is a simplified version using predefined patterns
  // In a production environment, this would typically call an external AI API
  
  try {
    // Simulate API call with a timeout
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Get the tone description
    const toneDesc = toneDescriptions[tone as keyof typeof toneDescriptions] || toneDescriptions.professional;
    
    // Simple rewriting logic - this should be replaced with a real AI service
    let rewritten = text;
    
    // Apply some basic transformations based on tone
    if (tone === 'professional') {
      rewritten = makeMoreFormal(text);
    } else if (tone === 'casual') {
      rewritten = makeMoreCasual(text);
    } else if (tone === 'academic') {
      rewritten = makeMoreAcademic(text);
    } else if (tone === 'creative') {
      rewritten = makeMoreCreative(text);
    } else if (tone === 'persuasive') {
      rewritten = makeMorePersuasive(text);
    } else if (tone === 'simple') {
      rewritten = makeSimpler(text);
    }
    
    return rewritten;
  } catch (error) {
    console.error("Error in sentence rewriting:", error);
    throw new Error("Failed to rewrite sentence");
  }
};

// Helper functions for different tones
const makeMoreFormal = (text: string): string => {
  // Example transformations for formal tone
  let result = text
    .replace(/don't/g, "do not")
    .replace(/can't/g, "cannot")
    .replace(/won't/g, "will not")
    .replace(/I'm/g, "I am")
    .replace(/you're/g, "you are")
    .replace(/they're/g, "they are")
    .replace(/we're/g, "we are")
    .replace(/let's/g, "let us")
    .replace(/ain't/g, "is not")
    .replace(/gonna/g, "going to")
    .replace(/wanna/g, "want to")
    .replace(/kinda/g, "kind of")
    .replace(/sorta/g, "sort of")
    .replace(/gotta/g, "got to")
    .replace(/dunno/g, "do not know")
    .replace(/yeah/g, "yes")
    .replace(/nope/g, "no")
    .replace(/yep/g, "yes")
    .replace(/ok/g, "okay")
    .replace(/stuff/g, "items")
    .replace(/things/g, "matters")
    .replace(/lots of/g, "numerous")
    .replace(/a lot of/g, "substantial")
    .replace(/big/g, "significant")
    .replace(/small/g, "minimal")
    .replace(/good/g, "excellent")
    .replace(/bad/g, "unsatisfactory")
    .replace(/nice/g, "pleasing")
    .replace(/cool/g, "admirable")
    .replace(/awesome/g, "impressive")
    .replace(/great/g, "exceptional");
    
  return result;
};

const makeMoreCasual = (text: string): string => {
  // Example transformations for casual tone
  let result = text
    .replace(/do not/g, "don't")
    .replace(/cannot/g, "can't")
    .replace(/will not/g, "won't")
    .replace(/I am/g, "I'm")
    .replace(/you are/g, "you're")
    .replace(/they are/g, "they're")
    .replace(/we are/g, "we're")
    .replace(/let us/g, "let's")
    .replace(/approximately/g, "about")
    .replace(/however/g, "but")
    .replace(/therefore/g, "so")
    .replace(/additionally/g, "also")
    .replace(/consequently/g, "so")
    .replace(/subsequently/g, "then")
    .replace(/furthermore/g, "plus")
    .replace(/nevertheless/g, "still")
    .replace(/regarding/g, "about")
    .replace(/concerning/g, "about")
    .replace(/excellent/g, "great")
    .replace(/impressive/g, "awesome")
    .replace(/exceptional/g, "amazing")
    .replace(/significant/g, "big")
    .replace(/minimal/g, "small")
    .replace(/adequate/g, "good enough")
    .replace(/insufficient/g, "not enough")
    .replace(/optimum/g, "best");
    
  return result;
};

const makeMoreAcademic = (text: string): string => {
  // Example transformations for academic tone
  let result = text
    .replace(/show/g, "demonstrate")
    .replace(/use/g, "utilize")
    .replace(/make/g, "construct")
    .replace(/think/g, "hypothesize")
    .replace(/look at/g, "examine")
    .replace(/find out/g, "investigate")
    .replace(/look into/g, "research")
    .replace(/check/g, "assess")
    .replace(/also/g, "furthermore")
    .replace(/but/g, "however")
    .replace(/so/g, "therefore")
    .replace(/then/g, "subsequently")
    .replace(/start/g, "initiate")
    .replace(/end/g, "conclude")
    .replace(/about/g, "approximately")
    .replace(/tell/g, "inform")
    .replace(/said/g, "stated")
    .replace(/idea/g, "concept")
    .replace(/change/g, "modify")
    .replace(/problem/g, "issue")
    .replace(/answer/g, "solution")
    .replace(/wrong/g, "incorrect")
    .replace(/right/g, "correct")
    .replace(/big/g, "substantial")
    .replace(/small/g, "minimal")
    .replace(/good/g, "beneficial")
    .replace(/bad/g, "detrimental");
    
  return result;
};

const makeMoreCreative = (text: string): string => {
  // Add some creative flourishes to the text
  const creativeIntros = [
    "In a world of words, ",
    "Like a painter with a brush, ",
    "Dancing through language, ",
    "With vibrant imagery, ",
    "Weaving a tapestry of meaning, "
  ];
  
  const creativeEndings = [
    " - a symphony of expression.",
    " - painting pictures with words.",
    " - creating linguistic magic.",
    " - crafting verbal artistry.",
    " - bringing language to life."
  ];
  
  // Add a random creative intro and ending
  return creativeIntros[Math.floor(Math.random() * creativeIntros.length)] + 
         text.toLowerCase() + 
         creativeEndings[Math.floor(Math.random() * creativeEndings.length)];
};

const makeMorePersuasive = (text: string): string => {
  // Add persuasive elements
  const persuasiveIntros = [
    "Without a doubt, ",
    "You must consider that ",
    "Imagine the impact when ",
    "The evidence clearly shows that ",
    "It's undeniable that "
  ];
  
  const persuasiveEndings = [
    " - can you afford to ignore this?",
    " - the choice is clear.",
    " - the benefits are undeniable.",
    " - take action now.",
    " - this is your opportunity."
  ];
  
  // Add a random persuasive intro and ending
  return persuasiveIntros[Math.floor(Math.random() * persuasiveIntros.length)] + 
         text.toLowerCase() + 
         persuasiveEndings[Math.floor(Math.random() * persuasiveEndings.length)];
};

const makeSimpler = (text: string): string => {
  // Simplify language
  let result = text
    .replace(/utilize/g, "use")
    .replace(/implement/g, "use")
    .replace(/facilitate/g, "help")
    .replace(/endeavor/g, "try")
    .replace(/ascertain/g, "find out")
    .replace(/commence/g, "start")
    .replace(/terminate/g, "end")
    .replace(/demonstrate/g, "show")
    .replace(/illustrate/g, "show")
    .replace(/consequently/g, "so")
    .replace(/subsequently/g, "then")
    .replace(/additionally/g, "also")
    .replace(/furthermore/g, "also")
    .replace(/nevertheless/g, "still")
    .replace(/however/g, "but")
    .replace(/therefore/g, "so")
    .replace(/regarding/g, "about")
    .replace(/concerning/g, "about")
    .replace(/sufficient/g, "enough")
    .replace(/insufficient/g, "not enough")
    .replace(/optimum/g, "best")
    .replace(/obtain/g, "get")
    .replace(/acquire/g, "get")
    .replace(/purchase/g, "buy")
    .replace(/procure/g, "get")
    .replace(/in order to/g, "to")
    .replace(/for the purpose of/g, "to")
    .replace(/with regard to/g, "about")
    .replace(/in the event that/g, "if")
    .replace(/in the absence of/g, "without")
    .replace(/in the presence of/g, "with")
    .replace(/prior to/g, "before")
    .replace(/subsequent to/g, "after");
    
  return result;
};
