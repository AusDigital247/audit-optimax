
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEOForm from '@/components/SEOForm';
import SEOResults from '@/components/SEOResults';
import Loader from '@/components/Loader';
import { analyzeSEO, AnalysisResult } from '@/utils/seoAnalyzer';
import { toast } from "@/hooks/use-toast";
import { Button } from '@/components/ui/button';
import { ChevronDown, CheckCircle, BarChart, FileSearch, Settings, ExternalLink } from 'lucide-react';

const Index = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');
  const [currentKeyword, setCurrentKeyword] = useState<string | undefined>(undefined);
  const [results, setResults] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const handleSubmit = async (url: string, keyword?: string) => {
    setIsAnalyzing(true);
    setCurrentUrl(url);
    setCurrentKeyword(keyword);
    setError(null);
    
    try {
      const analysisResults = await analyzeSEO(url, keyword);
      setResults(analysisResults);
    } catch (error) {
      console.error('Error analyzing SEO:', error);
      setError('An error occurred while analyzing the website. Please try again.');
      toast({
        title: "Analysis Failed",
        description: "There was an error analyzing the website. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleReset = () => {
    setResults(null);
    setCurrentUrl('');
    setCurrentKeyword(undefined);
    setError(null);
  };

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-theme">
      <div className="relative">
        <div className="container max-w-7xl px-4 py-12 mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 pt-8"
          >
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-3 text-white">
              <span className="text-teal">Free SEO Audit Tool</span>
            </h1>
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              Analyze your website's SEO performance and discover actionable improvements to boost your search rankings.
            </p>
          </motion.div>

          {/* Main content */}
          <div className="mb-16">
            {!results && !isAnalyzing && (
              <SEOForm onSubmit={handleSubmit} isLoading={isAnalyzing} />
            )}

            {isAnalyzing && (
              <div className="flex flex-col items-center justify-center py-20">
                <Loader size="large" className="mb-6" />
                <p className="text-lg font-medium">Analyzing {currentUrl}...</p>
                <p className="text-muted-foreground">This may take a few moments</p>
              </div>
            )}

            {error && !isAnalyzing && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full max-w-3xl mx-auto glass p-6 rounded-xl shadow-lg text-center"
              >
                <p className="text-red-500 mb-3">{error}</p>
                <Button onClick={handleReset} variant="outline">
                  Try Again
                </Button>
              </motion.div>
            )}

            {results && !isAnalyzing && !error && (
              <SEOResults
                url={currentUrl}
                keyword={currentKeyword}
                score={results.score}
                categories={results.categories}
                contentFetched={results.contentFetched}
                onReset={handleReset}
              />
            )}
          </div>

          {/* Features section */}
          {!results && !isAnalyzing && (
            <div className="mt-24 pb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="glass p-6 rounded-xl text-center card-shadow card-float">
                  <div className="w-12 h-12 bg-navy-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileSearch className="h-6 w-6 text-teal" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-teal">Complete Analysis</h3>
                  <p className="text-foreground">Get comprehensive SEO insights with detailed scores across multiple categories.</p>
                </div>
                
                <div className="glass p-6 rounded-xl text-center card-shadow card-float">
                  <div className="w-12 h-12 bg-navy-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart className="h-6 w-6 text-teal" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-teal">Visual Reports</h3>
                  <p className="text-foreground">View your results in easy-to-understand charts and visual analytics.</p>
                </div>
                
                <div className="glass p-6 rounded-xl text-center card-shadow card-float">
                  <div className="w-12 h-12 bg-navy-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="h-6 w-6 text-teal" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-teal">Actionable Insights</h3>
                  <p className="text-foreground">Get specific recommendations to improve your website's SEO performance.</p>
                </div>
              </div>
            </div>
          )}

          {/* SEO Content sections - only visible if not showing results */}
          {!results && !isAnalyzing && (
            <div className="mt-16 space-y-10">
              {/* Section 1: Introduction to SEO Analysis */}
              <section className="glass-strong p-8 rounded-xl card-shadow">
                <div 
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleSection('intro')}
                >
                  <h2 className="text-2xl font-semibold text-teal">Why Use Our Free SEO Checker Tool?</h2>
                  <ChevronDown className={`h-6 w-6 text-teal transition-transform ${expandedSection === 'intro' ? 'rotate-180' : ''}`} />
                </div>
                
                {(expandedSection === 'intro' || expandedSection === null) && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 content-section"
                  >
                    <p>
                      Our <span className="text-highlight">Free SEO Checker</span> provides a comprehensive <span className="text-highlight">website SEO analysis</span> to help you understand how your site is performing in search engines. In today's digital landscape, having a strong online presence is essential for business success, and search engine optimization (SEO) is the foundation of that presence.
                    </p>
                    <p>
                      With our <span className="text-highlight">SEO Audit Tool</span>, you can quickly identify strengths and weaknesses in your website's optimization strategy, allowing you to make data-driven decisions to improve your search rankings. Whether you're a business owner, digital marketer, or web developer, our tool provides valuable insights that can help drive more organic traffic to your site.
                    </p>
                    <p>
                      Unlike other tools that only scratch the surface, our <span className="text-highlight">Free SEO Checker</span> performs a deep analysis across multiple critical factors including technical SEO, on-page elements, content quality, and more. This holistic approach ensures you get a complete picture of your website's SEO health.
                    </p>
                    
                    <div className="flex justify-center mt-6">
                      <Button 
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="btn-glow"
                      >
                        Run Your Free SEO Analysis Now
                      </Button>
                    </div>
                  </motion.div>
                )}
              </section>
              
              {/* Section 2: Benefits of SEO Audits */}
              <section className="glass-strong p-8 rounded-xl card-shadow">
                <div 
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleSection('benefits')}
                >
                  <h2 className="text-2xl font-semibold text-teal">Benefits of Regular SEO Audits</h2>
                  <ChevronDown className={`h-6 w-6 text-teal transition-transform ${expandedSection === 'benefits' ? 'rotate-180' : ''}`} />
                </div>
                
                {expandedSection === 'benefits' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 content-section"
                  >
                    <p>
                      Regular <span className="text-highlight">SEO audits</span> are essential for maintaining and improving your website's search engine rankings. Here's why you should conduct them frequently:
                    </p>
                    
                    <h3>1. Stay Ahead of Algorithm Updates</h3>
                    <p>
                      Search engines like Google regularly update their algorithms, affecting how websites are ranked. By performing regular <span className="text-highlight">website SEO analysis</span>, you can quickly adapt to these changes and maintain your position in search results.
                    </p>
                    
                    <h3>2. Identify Technical Issues</h3>
                    <p>
                      Our <span className="text-highlight">SEO Audit Tool</span> can detect technical problems that might be hindering your site's performance, such as slow loading times, broken links, or mobile compatibility issues. Addressing these problems can significantly improve your site's ranking potential.
                    </p>
                    
                    <h3>3. Optimize Content Strategy</h3>
                    <p>
                      Content is king in SEO, and our tool helps you analyze how well your content is optimized for your target keywords. By identifying gaps and opportunities in your content strategy, you can create more relevant, valuable content that resonates with both users and search engines.
                    </p>
                    
                    <h3>4. Track Progress Over Time</h3>
                    <p>
                      By regularly using our <span className="text-highlight">Free SEO Checker</span>, you can track your site's progress and see the impact of your optimization efforts. This data-driven approach allows you to refine your strategy based on what's working and what needs improvement.
                    </p>
                  </motion.div>
                )}
              </section>
              
              {/* Section 3: How Our SEO Checker Works */}
              <section className="glass-strong p-8 rounded-xl card-shadow">
                <div 
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleSection('howItWorks')}
                >
                  <h2 className="text-2xl font-semibold text-teal">How Our SEO Checker Works</h2>
                  <ChevronDown className={`h-6 w-6 text-teal transition-transform ${expandedSection === 'howItWorks' ? 'rotate-180' : ''}`} />
                </div>
                
                {expandedSection === 'howItWorks' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 content-section"
                  >
                    <p>
                      Our <span className="text-highlight">Free SEO Checker</span> provides a comprehensive analysis of your website's SEO performance through a multi-step process:
                    </p>
                    
                    <h3>1. URL Analysis</h3>
                    <p>
                      We start by examining your URL structure, which is an important factor in SEO. A well-structured URL that includes relevant keywords can improve your site's visibility in search results.
                    </p>
                    
                    <h3>2. Meta Tag Evaluation</h3>
                    <p>
                      Our tool checks your title tags, meta descriptions, and other metadata to ensure they're optimized for your target keywords and fall within recommended length guidelines.
                    </p>
                    
                    <h3>3. Content Assessment</h3>
                    <p>
                      We analyze your content's relevance to your target keywords, heading structure, keyword density, and readability to ensure it meets both user and search engine needs.
                    </p>
                    
                    <h3>4. Image Optimization Check</h3>
                    <p>
                      Images play a significant role in SEO. Our tool checks if your images have appropriate alt text, dimensions, and optimized formats to enhance both accessibility and search visibility.
                    </p>
                    
                    <h3>5. Technical SEO Scan</h3>
                    <p>
                      We examine technical aspects like HTTPS implementation, canonical tags, schema markup, and mobile-friendliness that can impact your site's performance in search results.
                    </p>
                    
                    <h3>6. Comprehensive Score and Recommendations</h3>
                    <p>
                      Based on our analysis, we provide an overall SEO score and detailed recommendations for improvements, helping you prioritize your optimization efforts.
                    </p>
                  </motion.div>
                )}
              </section>
              
              {/* Section 4: SEO Best Practices */}
              <section className="glass-strong p-8 rounded-xl card-shadow">
                <div 
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleSection('bestPractices')}
                >
                  <h2 className="text-2xl font-semibold text-teal">SEO Best Practices in 2023</h2>
                  <ChevronDown className={`h-6 w-6 text-teal transition-transform ${expandedSection === 'bestPractices' ? 'rotate-180' : ''}`} />
                </div>
                
                {expandedSection === 'bestPractices' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 content-section"
                  >
                    <p>
                      Keep your <span className="text-highlight">SEO strategy</span> up-to-date with these current best practices that our <span className="text-highlight">SEO Audit Tool</span> can help you implement:
                    </p>
                    
                    <h3>1. Focus on User Experience</h3>
                    <p>
                      Google's algorithms increasingly prioritize websites that provide excellent user experiences. This includes fast loading times, mobile-friendliness, intuitive navigation, and high-quality content that answers users' questions.
                    </p>
                    
                    <h3>2. Create Comprehensive, E-E-A-T Content</h3>
                    <p>
                      Content that demonstrates Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T) ranks better. Our <span className="text-highlight">Website SEO Analysis</span> helps ensure your content meets these standards.
                    </p>
                    
                    <h3>3. Optimize for Voice Search</h3>
                    <p>
                      With the increasing popularity of voice assistants, optimizing for voice search has become essential. This means focusing on natural language phrases and question-based keywords.
                    </p>
                    
                    <h3>4. Implement Structured Data</h3>
                    <p>
                      Schema markup helps search engines understand your content better and can lead to rich snippets in search results, increasing visibility and click-through rates.
                    </p>
                    
                    <h3>5. Prioritize Mobile-First Indexing</h3>
                    <p>
                      Google primarily uses the mobile version of your site for indexing and ranking. Ensuring your site is fully optimized for mobile devices is no longer optional—it's essential.
                    </p>
                    
                    <div className="flex justify-center mt-6">
                      <Button 
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="btn-glow"
                      >
                        Check Your SEO Score Now
                      </Button>
                    </div>
                  </motion.div>
                )}
              </section>
              
              {/* Call to Action */}
              <section className="text-center py-10">
                <h2 className="text-3xl font-bold text-teal mb-4">Ready to Improve Your Search Rankings?</h2>
                <p className="text-xl text-foreground mb-8 max-w-3xl mx-auto">
                  Use our <span className="text-highlight">Free SEO Checker</span> tool today to identify opportunities for improvement and start climbing the search engine rankings.
                </p>
                <Button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  size="lg"
                  className="btn-glow"
                >
                  Start Your Free SEO Audit Now
                </Button>
              </section>
            </div>
          )}

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center text-sm text-muted-foreground pt-8 border-t border-border/30"
          >
            <p>
              Get actionable SEO insights to improve your website's search performance.
            </p>
            <p className="mt-2">
              <a href="#" className="text-teal hover:underline inline-flex items-center">
                <ExternalLink className="h-3 w-3 mr-1" />
                Learn more about SEO best practices
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;
