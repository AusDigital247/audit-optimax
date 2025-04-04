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
  MessageSquare 
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Professional SEO Services</h1>
            <p className="text-xl text-white/80 mb-8">
              Drive organic traffic and improve search engine rankings with our comprehensive SEO solutions
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
                Comprehensive analysis of your website to identify areas for improvement and develop a strategic SEO plan.
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
                Strategic content creation and optimization to target valuable keywords and improve search rankings.
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
                Resolving technical issues that prevent search engines from properly crawling and indexing your website.
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
                Strategic acquisition of high-quality backlinks to improve domain authority and search rankings.
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
                Identifying high-value keywords that your target audience is searching for to drive relevant traffic.
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
                Detailed reports and insights on your SEO performance, rankings, and traffic improvements.
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
                  We start with a <Link to="/" className="text-teal hover:underline">comprehensive SEO audit</Link> to identify issues and opportunities.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-teal/20 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal font-bold text-2xl">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Strategy Development</h3>
                <p className="text-white/70">
                  We create a tailored SEO strategy based on your goals and audit findings.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-teal/20 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal font-bold text-2xl">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Implementation</h3>
                <p className="text-white/70">
                  We execute the strategy with on-page, off-page, and technical optimizations.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-teal/20 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal font-bold text-2xl">4</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Monitoring & Refinement</h3>
                <p className="text-white/70">
                  We continuously track performance and refine the strategy for optimal results.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Improve Your Search Rankings?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Start with a free SEO audit to discover how we can help your website rank higher and attract more organic traffic.
            </p>
            <Link to="/">
              <Button size="lg" className="bg-teal hover:bg-teal-dark text-white">
                <Rocket className="w-5 h-5 mr-2" /> Get Your Free SEO Audit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeoServices;
