
import React, { useState } from 'react';
import SEOHead from '@/components/SEOHead';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, CheckCircle2, Copy, FileUp, Clipboard, Download, Link as LinkIcon, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";
import { generateAnchorLinks } from '@/utils/hashtagGenerator';

const BulkAnchorLinkGenerator: React.FC = () => {
  const [inputUrls, setInputUrls] = useState('');
  const [generatedLinks, setGeneratedLinks] = useState<{ html: string; url: string; anchorText: string }[]>([]);

  const handleGenerateLinks = () => {
    if (!inputUrls.trim()) {
      toast.error("Please enter at least one URL");
      return;
    }

    // Parse URLs from textarea (one per line)
    const urls = inputUrls
      .split('\n')
      .map(url => url.trim())
      .filter(url => url.length > 0);

    if (urls.length === 0) {
      toast.error("No valid URLs found");
      return;
    }

    try {
      const links = generateAnchorLinks({ urls });
      setGeneratedLinks(links);
      toast.success(`Generated ${links.length} anchor links`);
    } catch (error) {
      console.error("Error generating anchor links:", error);
      toast.error("Failed to generate anchor links");
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };

  const copyAllHtml = () => {
    const allHtml = generatedLinks.map(link => link.html).join('\n');
    navigator.clipboard.writeText(allHtml);
    toast.success("All HTML copied to clipboard");
  };

  const downloadAsHtml = () => {
    const allHtml = generatedLinks.map(link => link.html).join('\n');
    const blob = new Blob([allHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'anchor-links.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("Downloaded as HTML file");
  };

  const handlePasteFromClipboard = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setInputUrls(clipboardText);
      toast.success("Pasted from clipboard");
    } catch (error) {
      toast.error("Failed to access clipboard. Please paste manually.");
    }
  };

  const clearAll = () => {
    setInputUrls('');
    setGeneratedLinks([]);
    toast.success("Cleared all content");
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Bulk Anchor Link Generator | Create HTML Links Automatically"
        description="Generate SEO-friendly HTML anchor links in bulk from a list of URLs. Save time and ensure consistent anchor text for better on-page optimization."
        keywords="anchor link generator, bulk HTML links, SEO anchor text, link building tool, HTML link generator, anchor text optimization"
        canonicalPath="/bulk-anchor-link-generator-tool"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-4">
            Bulk Anchor Link Generator
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Instantly generate optimized HTML anchor links from multiple URLs. Perfect for link building, content creation, and on-page SEO optimization.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="flex items-center text-sm bg-teal/10 dark:bg-teal/20 text-teal dark:text-teal-light px-4 py-2 rounded-full">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              <span>Free to Use</span>
            </div>
            <div className="flex items-center text-sm bg-teal/10 dark:bg-teal/20 text-teal dark:text-teal-light px-4 py-2 rounded-full">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              <span>Bulk Processing</span>
            </div>
            <div className="flex items-center text-sm bg-teal/10 dark:bg-teal/20 text-teal dark:text-teal-light px-4 py-2 rounded-full">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              <span>SEO-Optimized</span>
            </div>
          </div>
        </div>
        
        <div className="w-full max-w-4xl mx-auto bg-white dark:bg-navy-light shadow-md rounded-lg p-8 mb-12">
          <h2 className="text-xl font-semibold mb-4">Generate Anchor Links</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Enter your URLs below (one per line) to generate HTML anchor links with optimized anchor text.</p>
          
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <label className="block text-gray-700 dark:text-gray-300">URLs (one per line)</label>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handlePasteFromClipboard}
              >
                <Clipboard className="h-4 w-4 mr-2" /> Paste
              </Button>
            </div>
            <Textarea
              className="w-full h-48 p-4 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal dark:bg-navy-dark dark:text-white"
              placeholder="https://example.com/seo-services
https://domain.com/content-marketing
https://website.org/local-seo"
              value={inputUrls}
              onChange={(e) => setInputUrls(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-3 justify-end">
            <Button 
              variant="outline" 
              onClick={clearAll}
            >
              Clear All
            </Button>
            <Button 
              onClick={handleGenerateLinks} 
              disabled={!inputUrls.trim()}
              className="bg-teal hover:bg-teal-600 text-white"
            >
              <LinkIcon className="mr-2 h-4 w-4" />
              Generate Anchor Links
            </Button>
          </div>
        </div>
        
        {generatedLinks.length > 0 && (
          <Card className="w-full max-w-4xl mx-auto p-6 mb-12">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Generated Anchor Links</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={copyAllHtml}>
                  <Copy className="mr-2 h-4 w-4" /> Copy All HTML
                </Button>
                <Button variant="outline" size="sm" onClick={downloadAsHtml}>
                  <Download className="mr-2 h-4 w-4" /> Download HTML
                </Button>
              </div>
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>URL</TableHead>
                  <TableHead>Anchor Text</TableHead>
                  <TableHead>HTML</TableHead>
                  <TableHead className="w-24">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {generatedLinks.map((link, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-mono text-sm truncate max-w-[150px]">
                      {link.url}
                    </TableCell>
                    <TableCell>{link.anchorText}</TableCell>
                    <TableCell className="font-mono text-sm truncate max-w-[250px]">
                      {link.html}
                    </TableCell>
                    <TableCell>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => copyToClipboard(link.html)}
                      >
                        <Copy className="h-4 w-4" />
                        <span className="sr-only">Copy</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        )}
        
        <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-6">What is an Anchor Link Generator?</h2>
          <p>
            An anchor link generator is a tool that creates HTML hyperlinks (anchor tags) from URLs, automatically determining appropriate anchor text. Our bulk generator helps you quickly create multiple optimized links at once, saving time and ensuring consistent quality for your web content and SEO campaigns.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">SEO-Optimized Anchor Text</h3>
              <p>Our tool intelligently extracts relevant keywords from URLs to create descriptive, SEO-friendly anchor text that helps search engines understand what the linked page is about.</p>
            </div>
            
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Time-Saving Automation</h3>
              <p>Process hundreds of links in seconds. What would take hours to do manually can be accomplished with just a few clicks, allowing you to focus on other important aspects of your SEO strategy.</p>
            </div>
            
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Enhanced Link Diversity</h3>
              <p>Our algorithm creates natural anchor text variations based on URL structure, helping you maintain a diverse and natural-looking link profile that's less likely to trigger search engine penalties.</p>
            </div>
            
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Ready-to-Use HTML</h3>
              <p>Get complete HTML anchor tags ready for immediate use in your content, website, or anywhere you need links. No additional formatting or coding required.</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">Why Anchor Text Matters for SEO</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Relevance Signals to Search Engines</h3>
          <p>
            Anchor text provides critical context to search engines about the content of the linked page. When you use descriptive, keyword-rich anchor text, you help search engines understand what the destination page is about, potentially improving its rankings for those terms.
          </p>
          <div className="bg-gray-100 dark:bg-navy-dark p-4 rounded-md my-3">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Example:</strong> Using "affordable SEO services" as anchor text for a link to your services page sends a stronger relevance signal than generic text like "click here" or "read more."
            </p>
          </div>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">User Experience and Click-Through Rates</h3>
          <p>
            Well-crafted anchor text improves user experience by clearly indicating what visitors will find when they click a link. Descriptive anchor text can increase click-through rates by setting accurate expectations and piquing interest in the linked content.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Link Profile Diversity</h3>
          <p>
            Search engines value a natural, diverse anchor text profile. Having various types of anchor text pointing to your pages (exact match, partial match, branded, generic, etc.) creates a more natural link profile that appears less manipulative to search algorithms.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Internal Linking Structure</h3>
          <p>
            Strategic anchor text in your internal linking structure helps distribute page authority throughout your website and establishes content hierarchies. This guides both users and search crawlers through your most important content, improving indexation and rankings.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">Best Practices for Anchor Link Creation</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Be Descriptive and Concise</h3>
          <p>
            The best anchor text clearly describes the content of the linked page in a concise manner. Aim for 2-5 words that accurately represent the destination page's topic or purpose. Avoid overly long anchor phrases that dilute the relevance signal.
          </p>
          
          <div className="bg-gray-100 dark:bg-navy-dark p-4 rounded-md my-3">
            <p className="text-red-500 flex items-center mb-2">
              <span className="mr-2">❌</span> "Click here to read our comprehensive guide about search engine optimization techniques for small businesses in 2023"
            </p>
            <p className="text-green-500 flex items-center">
              <span className="mr-2">✅</span> "Small business SEO guide"
            </p>
          </div>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Maintain Relevance to the Linked Page</h3>
          <p>
            Ensure your anchor text accurately represents the content on the destination page. Misleading anchor text creates a poor user experience and may be seen as manipulative by search engines, potentially resulting in penalties.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Avoid Over-Optimization</h3>
          <p>
            While keyword-rich anchor text is valuable, over-optimization with too many exact-match keyword anchors can trigger search engine penalties. Maintain a natural mix of anchor text types, including branded anchors, partial match anchors, and occasionally generic anchors.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Consider Accessibility</h3>
          <p>
            Create anchor text that makes sense when read out of context by screen readers for visually impaired users. Avoid non-descriptive phrases like "read more" or "click here" that don't provide context about the destination.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">Advanced Anchor Link Strategies</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Topic Clusters and Internal Linking</h3>
          <p>
            Use your anchor links to create topic clusters that establish subject-matter authority. Link related content pieces together with relevant anchor text to help search engines understand the relationship between your content and the depth of your expertise on specific topics.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Content Siloing with Strategic Anchors</h3>
          <p>
            Implement content siloing by using categorical anchor text for your main sections and more specific anchor text for deeper pages. This creates a logical hierarchy that helps both users and search engines navigate your content structure.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Long-Tail Anchor Opportunities</h3>
          <p>
            While keeping anchor text concise is generally recommended, there are strategic opportunities to use longer-tail phrases for specific targeting. This can be particularly effective for internal links pointing to highly specialized content that targets longer search queries.
          </p>
          
          <div className="bg-gray-100 dark:bg-navy-light p-6 rounded-lg mt-10">
            <h2 className="text-2xl font-bold mb-4">Streamline Your Link Building Process</h2>
            <p className="mb-4">
              Whether you're creating internal links for your website, preparing outreach emails for link building, or developing content with multiple references, our Bulk Anchor Link Generator saves you valuable time while ensuring SEO best practices are followed.
            </p>
            <p>
              Generate professionally formatted HTML links in seconds and focus your energy on the strategic aspects of your SEO and content marketing campaigns.
            </p>
          </div>
        </div>
        
        {/* FAQ Section */}
        <section className="py-10 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-navy dark:text-white mb-6">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-slate-200 dark:border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-navy dark:text-white">
                How does the anchor link generator determine the anchor text?
              </AccordionTrigger>
              <AccordionContent className="text-navy/70 dark:text-white/70">
                <p>
                  Our algorithm analyzes the URL structure, particularly the path component, to extract relevant keywords. It converts hyphens to spaces, applies proper capitalization, and removes unnecessary elements like file extensions. When no path is available, it defaults to using the domain name as the basis for anchor text.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border border-slate-200 dark:border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-navy dark:text-white">
                Can I manually edit the generated anchor text?
              </AccordionTrigger>
              <AccordionContent className="text-navy/70 dark:text-white/70">
                <p>
                  Currently, the tool provides the automatically generated anchor text. For customization, you can copy the HTML to your preferred editor and modify the anchor text portion. We're working on adding manual editing capabilities in a future update.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border border-slate-200 dark:border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-navy dark:text-white">
                What HTML attributes are included in the generated links?
              </AccordionTrigger>
              <AccordionContent className="text-navy/70 dark:text-white/70">
                <p>
                  By default, our generator creates anchor tags with the href attribute containing the full URL. It also adds target="_blank" to open links in new tabs and rel="noopener noreferrer" for security best practices. These attributes ensure safe external linking while providing a good user experience.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border border-slate-200 dark:border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-navy dark:text-white">
                Is there a limit to how many URLs I can process at once?
              </AccordionTrigger>
              <AccordionContent className="text-navy/70 dark:text-white/70">
                <p>
                  The free version of our tool can process up to 100 URLs at once. This limit helps ensure optimal performance for all users. For larger batches or enterprise needs with advanced customization options, please contact us about our premium solutions.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border border-slate-200 dark:border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-navy dark:text-white">
                How can I implement these links most effectively for SEO?
              </AccordionTrigger>
              <AccordionContent className="text-navy/70 dark:text-white/70">
                <p>
                  For optimal SEO impact, place your links within relevant, high-quality content where they provide genuine value to readers. Avoid excessive linking or placing links in footer sections where they might be devalued. For internal linking, focus on connecting topically related content and directing link equity to your most important pages.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
        
        {/* Call to Action */}
        <section className="py-12 my-10 bg-gradient-to-r from-teal/10 to-navy/10 dark:from-teal/20 dark:to-navy-light/20 rounded-xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy dark:text-white mb-4">Enhance Your SEO Strategy</h2>
          <p className="text-navy/70 dark:text-white/70 max-w-2xl mx-auto mb-8">
            Explore our complete suite of SEO tools to improve your website's visibility, rankings, and traffic.
          </p>
          <Button asChild size="lg" className="bg-teal hover:bg-teal-600 text-white font-medium">
            <Link to="/">
              <ExternalLink className="h-4 w-4 mr-2" />
              Discover More SEO Tools
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default BulkAnchorLinkGenerator;
