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
 * Rewrites a paragraph with AI using the specified tone
 * 
 * @param text The original paragraph to rewrite
 * @param tone The desired tone for the rewritten text
 * @returns The rewritten paragraph
 */
export const rewriteParagraph = async (text: string, tone: string = 'professional'): Promise<string> => {
  try {
    // Simulate API call with a timeout
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Get the tone description
    const toneDesc = toneDescriptions[tone as keyof typeof toneDescriptions] || toneDescriptions.professional;
    
    // Apply transformations based on tone
    let rewritten = '';
    
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
    
    // If for some reason rewritten is still the same as the original,
    // force at least some changes based on the tone
    if (rewritten === text) {
      // Add a tone-specific prefix
      const prefixes = {
        professional: "In a professional context, ",
        casual: "Just so you know, ",
        academic: "Research indicates that ",
        creative: "Imagine a world where ",
        persuasive: "You should know that ",
        simple: "Simply put, "
      };
      
      rewritten = prefixes[tone as keyof typeof prefixes] + text;
    }
    
    return rewritten;
  } catch (error) {
    console.error("Error in paragraph rewriting:", error);
    throw new Error("Failed to rewrite paragraph");
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
    
  // Reword common phrases to be more formal
  result = result
    .replace(/in a nutshell/g, "in summary")
    .replace(/bottom line/g, "conclusion")
    .replace(/ASAP/g, "as soon as possible")
    .replace(/FYI/g, "for your information")
    .replace(/by the way/g, "incidentally")
    .replace(/anyways/g, "in any case");
    
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
    .replace(/going to/g, "gonna")
    .replace(/want to/g, "wanna")
    .replace(/kind of/g, "kinda")
    .replace(/sort of/g, "sorta")
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
    .replace(/excellent/g, "awesome")
    .replace(/impressive/g, "amazing")
    .replace(/exceptional/g, "great")
    .replace(/significant/g, "big")
    .replace(/minimal/g, "small")
    .replace(/adequate/g, "good enough")
    .replace(/insufficient/g, "not enough")
    .replace(/optimum/g, "best")
    .replace(/in conclusion/g, "to wrap up")
    .replace(/in summary/g, "to sum up");
    
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
    .replace(/think/g, "posit")
    .replace(/guess/g, "postulate")
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
  const introductions = [
    "Imagine a world where ",
    "Picture this: ",
    "In a symphony of words, ",
    "Like a painter with a canvas, ",
    "In the garden of ideas, "
  ];
  
  const transitions = [
    " As if by magic, ",
    " In a dance of concepts, ",
    " Weaving through the fabric of thought, ",
    " Like stars in a constellation, ",
    " In a tapestry of meaning, "
  ];
  
  const conclusion = [
    " - a mosaic of possibilities awaits.",
    " - the canvas of potential unfolds before us.",
    " - the symphony of ideas continues to play.",
    " - the journey through this landscape of thoughts concludes, for now.",
    " - the story continues to unfold in the mind's eye."
  ];
  
  // Split into sentences
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
  
  if (sentences.length > 1) {
    // Add creative introduction
    sentences[0] = introductions[Math.floor(Math.random() * introductions.length)] + 
                   sentences[0].trim().toLowerCase();
    
    // Add a transition in the middle
    const middleIndex = Math.floor(sentences.length / 2);
    sentences[middleIndex] = sentences[middleIndex].trim() + 
                             transitions[Math.floor(Math.random() * transitions.length)];
    
    // Add creative conclusion
    sentences[sentences.length - 1] = sentences[sentences.length - 1].trim() + 
                                     conclusion[Math.floor(Math.random() * conclusion.length)];
  } else {
    // Just add introduction and conclusion for short texts
    sentences[0] = introductions[Math.floor(Math.random() * introductions.length)] + 
                   sentences[0].trim().toLowerCase() +
                   conclusion[Math.floor(Math.random() * conclusion.length)];
  }
  
  return sentences.join(" ");
};

const makeMorePersuasive = (text: string): string => {
  // Add persuasive elements
  const persuasivePhrases = [
    "You can't afford to ignore ",
    "Imagine the benefits of ",
    "The undeniable truth is that ",
    "You deserve to know that ",
    "Consider this: "
  ];
  
  const callsToAction = [
    " Don't miss this opportunity.",
    " Take action now.",
    " The time to act is now.",
    " Can you really afford to wait?",
    " The choice is clear."
  ];
  
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
  
  if (sentences.length > 1) {
    // Add persuasive introduction
    sentences[0] = persuasivePhrases[Math.floor(Math.random() * persuasivePhrases.length)] + 
                   sentences[0].trim().toLowerCase();
    
    // Add call to action at the end
    sentences[sentences.length - 1] = sentences[sentences.length - 1].trim() + 
                                     callsToAction[Math.floor(Math.random() * callsToAction.length)];
  } else {
    // For short texts
    sentences[0] = persuasivePhrases[Math.floor(Math.random() * persuasivePhrases.length)] + 
                   sentences[0].trim().toLowerCase() +
                   callsToAction[Math.floor(Math.random() * callsToAction.length)];
  }
  
  // Replace weak words with stronger alternatives
  let result = sentences.join(" ")
    .replace(/good/g, "exceptional")
    .replace(/nice/g, "outstanding")
    .replace(/bad/g, "unacceptable")
    .replace(/problem/g, "critical challenge")
    .replace(/important/g, "essential")
    .replace(/could/g, "must")
    .replace(/should/g, "need to")
    .replace(/might/g, "will")
    .replace(/consider/g, "realize")
    .replace(/think about/g, "recognize")
    .replace(/big/g, "significant")
    .replace(/small/g, "minimal");
    
  return result;
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
    .replace(/subsequent to/g, "after")
    .replace(/in close proximity to/g, "near")
    .replace(/at this point in time/g, "now")
    .replace(/in the near future/g, "soon");
    
  return result;
};
