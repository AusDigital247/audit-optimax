
import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle2, 
  Search, 
  LineChart, 
  BarChart3, 
  Rocket, 
  FileText, 
  Code, 
  Share2, 
  MessageSquare,
  ArrowRight,
  Zap
} from 'lucide-react';

const SeoServices = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy to-navy-light">
      <SEOHead
        title="Professional SEO Services | Rank Higher on Google | SEO Audit Tool"
        description="Comprehensive SEO services to improve your website visibility, increase organic traffic, and boost conversions. Get a customized SEO strategy."
        keywords="SEO services, search engine optimization, SEO strategy, organic traffic, website ranking, SEO consulting"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="flex items-center justify-center py-2 px-6 bg-teal/30 backdrop-blur-sm rounded-full mb-6 animated-card">
              <Zap className="h-5 w-5 text-teal-light mr-2" />
              <span className="text-white text-sm font-medium">Professional Services</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Professional SEO Services</h1>
            <p className="text-xl text-white/80 mb-8">
              Drive organic traffic and improve search engine rankings with our comprehensive <Link to="/keyword-generator-tool" className="text-teal hover:underline">keyword-driven</Link> SEO solutions and <Link to="/seo-content-analysis" className="text-teal hover:underline">content analysis</Link> expertise
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/">
                <Button className="bg-teal hover:bg-teal-dark text-white">
                  <Search className="w-4 h-4 mr-2" /> Try Our SEO Audit Tool
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-teal text-teal hover:bg-teal/10">
                  <MessageSquare className="w-4 h-4 mr-2" /> Contact Us
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-navy-light p-6 rounded-xl border border-teal/20">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <Search className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">SEO Audit & Analysis</h3>
              <p className="text-white/70 mb-4">
                Comprehensive <Link to="/google-rank-checker-tool" className="text-teal hover:underline">search ranking</Link> analysis of your website to identify areas for improvement and develop a strategic SEO plan.
              </p>
              <Link to="/" className="text-teal hover:underline flex items-center">
                Try our SEO Audit Tool <CheckCircle2 className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-navy-light p-6 rounded-xl border border-teal/20">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <FileText className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Content Optimization</h3>
              <p className="text-white/70 mb-4">
                Strategic <Link to="/paragraph-rewriter-tool" className="text-teal hover:underline">content creation</Link> and <Link to="/sentence-rewriter-tool" className="text-teal hover:underline">optimization</Link> to target valuable keywords and improve search rankings.
              </p>
              <Link to="/blog" className="text-teal hover:underline flex items-center">
                See our content examples <CheckCircle2 className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-navy-light p-6 rounded-xl border border-teal/20">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <Code className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Technical SEO</h3>
              <p className="text-white/70 mb-4">
                Resolving technical issues that prevent search engines from properly crawling and indexing your website with <Link to="/technical-seo-guide" className="text-teal hover:underline">advanced techniques</Link>.
              </p>
              <Link to="/" className="text-teal hover:underline flex items-center">
                Check technical SEO now <CheckCircle2 className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-navy-light p-6 rounded-xl border border-teal/20">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <Share2 className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Link Building</h3>
              <p className="text-white/70 mb-4">
                Strategic acquisition of high-quality <Link to="/bulk-anchor-link-generator-tool" className="text-teal hover:underline">backlinks</Link> to improve domain authority and search rankings with our <Link to="/link-building-strategies" className="text-teal hover:underline">proven methods</Link>.
              </p>
              <Link to="/services" className="text-teal hover:underline flex items-center">
                Learn more <CheckCircle2 className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-navy-light p-6 rounded-xl border border-teal/20">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <BarChart3 className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Keyword Research</h3>
              <p className="text-white/70 mb-4">
                Identifying high-value <Link to="/keyword-generator-tool" className="text-teal hover:underline">keywords</Link> that your target audience is searching for to drive relevant traffic using <Link to="/semantic-seo-guide" className="text-teal hover:underline">semantic SEO</Link>.
              </p>
              <Link to="/services/local-seo" className="text-teal hover:underline flex items-center">
                Local SEO services <CheckCircle2 className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-navy-light p-6 rounded-xl border border-teal/20">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <LineChart className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">SEO Reporting</h3>
              <p className="text-white/70 mb-4">
                Detailed reports and insights on your SEO performance, <Link to="/google-rank-checker-tool" className="text-teal hover:underline">search rankings</Link>, and <Link to="/traffic-analysis" className="text-teal hover:underline">traffic improvements</Link>.
              </p>
              <Link to="/contact" className="text-teal hover:underline flex items-center">
                Contact us <CheckCircle2 className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="bg-navy-light border border-teal/20 rounded-xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our SEO Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-teal/20 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal font-bold text-2xl">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Audit & Analysis</h3>
                <p className="text-white/70">
                  We start with a <Link to="/" className="text-teal hover:underline">comprehensive SEO audit</Link> to identify issues and opportunities using our <Link to="/technical-audit" className="text-teal hover:underline">advanced tools</Link>.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-teal/20 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal font-bold text-2xl">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Strategy Development</h3>
                <p className="text-white/70">
                  We create a tailored SEO strategy based on your goals and <Link to="/keyword-generator-tool" className="text-teal hover:underline">keyword research</Link> with <Link to="/content-strategy" className="text-teal hover:underline">content planning</Link>.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-teal/20 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal font-bold text-2xl">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Implementation</h3>
                <p className="text-white/70">
                  We execute the strategy with <Link to="/on-page-seo" className="text-teal hover:underline">on-page</Link>, <Link to="/off-page-seo" className="text-teal hover:underline">off-page</Link>, and <Link to="/technical-seo" className="text-teal hover:underline">technical optimizations</Link>.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-teal/20 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal font-bold text-2xl">4</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Monitoring & Refinement</h3>
                <p className="text-white/70">
                  We continuously <Link to="/google-rank-checker-tool" className="text-teal hover:underline">track performance</Link> and refine the strategy for optimal results with <Link to="/search-analytics" className="text-teal hover:underline">regular analysis</Link>.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Improve Your Search Rankings?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Start with a free <Link to="/" className="text-teal hover:underline">SEO audit</Link> to discover how we can help your website rank higher and attract more <Link to="/organic-traffic-guide" className="text-teal hover:underline">organic traffic</Link>.
            </p>
            <Link to="/">
              <Button size="lg" className="bg-teal hover:bg-teal-dark text-white">
                <Rocket className="w-5 h-5 mr-2" /> Get Your Free SEO Audit
              </Button>
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-navy-light p-6 rounded-xl border border-teal/20">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                <ArrowRight className="h-5 w-5 text-teal mr-2" /> Content Tools
              </h3>
              <p className="text-white/70 mb-4">
                Enhance your content quality with our specialized tools:
              </p>
              <ul className="space-y-2">
                <li>
                  <Link to="/blog-ideas-generator-tool" className="text-white/80 hover:text-teal transition-colors flex items-center">
                    <ArrowRight size={14} className="mr-2 text-teal-light" /> Blog Ideas Generator
                  </Link>
                </li>
                <li>
                  <Link to="/paragraph-rewriter-tool" className="text-white/80 hover:text-teal transition-colors flex items-center">
                    <ArrowRight size={14} className="mr-2 text-teal-light" /> Paragraph Rewriter
                  </Link>
                </li>
                <li>
                  <Link to="/sentence-rewriter-tool" className="text-white/80 hover:text-teal transition-colors flex items-center">
                    <ArrowRight size={14} className="mr-2 text-teal-light" /> Sentence Rewriter
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="bg-navy-light p-6 rounded-xl border border-teal/20">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                <ArrowRight className="h-5 w-5 text-teal mr-2" /> SEO Analysis
              </h3>
              <p className="text-white/70 mb-4">
                Monitor and improve your search presence:
              </p>
              <ul className="space-y-2">
                <li>
                  <Link to="/google-rank-checker-tool" className="text-white/80 hover:text-teal transition-colors flex items-center">
                    <ArrowRight size={14} className="mr-2 text-teal-light" /> Google Rank Checker
                  </Link>
                </li>
                <li>
                  <Link to="/keyword-generator-tool" className="text-white/80 hover:text-teal transition-colors flex items-center">
                    <ArrowRight size={14} className="mr-2 text-teal-light" /> Keyword Generator
                  </Link>
                </li>
                <li>
                  <Link to="/bulk-anchor-link-generator-tool" className="text-white/80 hover:text-teal transition-colors flex items-center">
                    <ArrowRight size={14} className="mr-2 text-teal-light" /> Bulk Anchor Link Generator
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="bg-navy-light p-6 rounded-xl border border-teal/20">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                <ArrowRight className="h-5 w-5 text-teal mr-2" /> Social Media
              </h3>
              <p className="text-white/70 mb-4">
                Boost your social presence with these tools:
              </p>
              <ul className="space-y-2">
                <li>
                  <Link to="/tiktok-username-generator" className="text-white/80 hover:text-teal transition-colors flex items-center">
                    <ArrowRight size={14} className="mr-2 text-teal-light" /> TikTok Username Generator
                  </Link>
                </li>
                <li>
                  <Link to="/tiktok-hashtag-generator" className="text-white/80 hover:text-teal transition-colors flex items-center">
                    <ArrowRight size={14} className="mr-2 text-teal-light" /> TikTok Hashtag Generator
                  </Link>
                </li>
                <li>
                  <Link to="/youtube-name-generator" className="text-white/80 hover:text-teal transition-colors flex items-center">
                    <ArrowRight size={14} className="mr-2 text-teal-light" /> YouTube Name Generator
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeoServices;
