
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { CalendarIcon, User, Clock, ChevronRight, ArrowLeft, Image } from 'lucide-react';

const ImageSeo = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <Helmet>
        <title>Advanced Image SEO Techniques | Optimize Images for Better Rankings</title>
        <meta name="description" content="Learn advanced image SEO techniques to improve search visibility, boost rankings, and drive more traffic through properly optimized images." />
        <meta name="keywords" content="image SEO, image optimization, alt text, image compression, file naming, accessibility, structured data for images, image sitemaps" />
        
        <meta property="og:title" content="Advanced Image SEO Techniques | Optimize Images for Better Rankings" />
        <meta property="og:description" content="Learn advanced image SEO techniques to improve search visibility, boost rankings, and drive more traffic through properly optimized images." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        
        <meta name="twitter:title" content="Advanced Image SEO Techniques | Optimize Images for Better Rankings" />
        <meta name="twitter:description" content="Learn advanced image SEO techniques to improve search visibility, boost rankings, and drive more traffic through properly optimized images." />
        
        <link rel="canonical" href={window.location.href} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Advanced Image SEO Techniques",
            "description": "Learn advanced image SEO techniques to improve search visibility, boost rankings, and drive more traffic through properly optimized images.",
            "image": "/image-seo-guide.jpg",
            "author": {
              "@type": "Organization",
              "name": "SEO Audit Tool"
            },
            "publisher": {
              "@type": "Organization",
              "name": "SEO Audit Tool",
              "logo": {
                "@type": "ImageObject",
                "url": "/logo.png"
              }
            },
            "datePublished": "2023-08-22",
            "dateModified": "2023-08-22"
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy to-navy-light py-16 md:py-20">
        <div className="container-custom">
          <div className="flex items-center mb-8">
            <Link to="/blog" className="flex items-center text-white/80 hover:text-teal transition-colors">
              <ArrowLeft size={18} className="mr-2" />
              Back to Blog
            </Link>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <span className="text-xs font-medium px-3 py-1 bg-teal/20 text-teal-light rounded-full">Image Optimization</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center gradient-text">
              Advanced Image SEO Techniques
            </h1>
            
            <div className="flex items-center justify-center gap-4 mb-8 text-white/80">
              <div className="flex items-center">
                <User size={14} className="mr-1" />
                <span className="text-sm">SEO Audit Tool Team</span>
              </div>
              <div className="flex items-center">
                <CalendarIcon size={14} className="mr-1" />
                <span className="text-sm">August 22, 2023</span>
              </div>
              <div className="flex items-center">
                <Clock size={14} className="mr-1" />
                <span className="text-sm">12 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Article Content */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8 bg-white rounded-xl p-6 md:p-10 shadow-sm">
              <article className="prose prose-lg max-w-none">
                <h2 id="introduction">Why Image SEO Matters More Than Ever</h2>
                <p>
                  In the evolving landscape of search engine optimization, image SEO has emerged as a critical yet often underutilized strategy. With visual search gaining momentum and Google's increasingly sophisticated ability to understand and index images, properly optimized images aren't just enhancing your content—they're becoming a primary pathway for driving organic traffic.
                </p>
                <p>
                  The statistics speak volumes: according to recent studies, nearly 20% of all searches on Google occur on Google Images, representing billions of monthly queries. Additionally, with the rise of multi-modal search capabilities that combine text and images, visual content now plays a more significant role in how users discover websites. This detailed guide explores advanced image SEO techniques that go beyond basic optimization to give your website a competitive edge in search results and enhance user experience.
                </p>

                <h2 id="fundamentals">Image SEO Fundamentals: Beyond the Basics</h2>
                <p>
                  While many SEO practitioners understand basic image optimization, truly effective image SEO requires a more nuanced approach:
                </p>
                
                <h3>Strategic File Naming Conventions</h3>
                <p>
                  File names remain one of the most underutilized aspects of image SEO. Beyond simply including keywords, implement these advanced naming strategies:
                </p>
                <ul>
                  <li>
                    <strong>Hierarchical naming patterns:</strong> Use category-subcategory-specific naming patterns (e.g., "kitchen-appliances-stainless-steel-refrigerator-side-by-side.webp") to help search engines contextualize the image within your site's information architecture.
                  </li>
                  <li>
                    <strong>Semantic identifiers:</strong> Include descriptive modifiers that answer likely user questions, such as color, style, size, or material (e.g., "organic-cotton-blue-t-shirt-crew-neck.webp").
                  </li>
                  <li>
                    <strong>Geotagged file names:</strong> For location-specific businesses, include geographic identifiers in image file names (e.g., "toronto-skyline-cn-tower-sunset.webp").
                  </li>
                </ul>
                
                <h3>Alt Text Engineering</h3>
                <p>
                  Alt text has evolved beyond simple keyword inclusion to serve multiple purposes:
                </p>
                <ul>
                  <li>
                    <strong>Context-aware descriptions:</strong> Craft alt text that relates the image to the surrounding content, using natural language that explains why the image is relevant to the text.
                  </li>
                  <li>
                    <strong>Intent-optimized alt text:</strong> Align your alt text with search intent by including descriptive terms that match how users would search for visual content.
                  </li>
                  <li>
                    <strong>Accessibility-enhanced:</strong> Ensure alt text serves both SEO and accessibility by providing clear descriptions for screen readers while naturally incorporating relevant keywords.
                  </li>
                </ul>
                <p>
                  Example of well-crafted alt text: "Chef preparing handmade pasta dough in a rustic Italian kitchen with marble countertop and wooden rolling pin" rather than just "pasta recipe" or "cooking pasta."
                </p>
                
                <h3>Contextual Image Placement</h3>
                <p>
                  Where and how you place images within your content significantly impacts their SEO value:
                </p>
                <ul>
                  <li>
                    <strong>Strategic positioning:</strong> Place the most important images near relevant keywords and headings in the text to strengthen the contextual relationship.
                  </li>
                  <li>
                    <strong>Content reinforcement:</strong> Use images to illustrate key points rather than as decorative elements, ensuring they add informational value.
                  </li>
                  <li>
                    <strong>Caption optimization:</strong> Implement descriptive captions that expand on the image content while incorporating secondary keywords or related terms.
                  </li>
                </ul>

                <h2 id="technical-optimization">Technical Image Optimization for SEO Performance</h2>
                <p>
                  Technical aspects of image optimization directly impact both SEO performance and user experience:
                </p>
                
                <h3>Next-Generation Image Formats</h3>
                <p>
                  The evolution of image formats offers significant advantages for both performance and quality:
                </p>
                <ul>
                  <li>
                    <strong>WebP implementation:</strong> Implementing WebP can reduce image size by up to 30% compared to optimized JPEG while maintaining visual quality. Use the <code>&lt;picture&gt;</code> element with fallbacks for comprehensive browser support.
                  </li>
                  <li>
                    <strong>AVIF integration:</strong> For cutting-edge performance, begin adopting AVIF format, which offers superior compression (up to 50% smaller than WebP) and quality features like HDR and wide color gamut.
                  </li>
                  <li>
                    <strong>Responsive format selection:</strong> Implement server-side logic to serve the most efficient format based on browser capabilities and connection speed.
                  </li>
                </ul>
                
                <h3>Advanced Compression Techniques</h3>
                <p>
                  Beyond standard compression, these techniques maximize performance while preserving quality:
                </p>
                <ul>
                  <li>
                    <strong>Content-aware compression:</strong> Utilize tools that apply variable compression based on image content, preserving details in focal areas while more aggressively compressing less important regions.
                  </li>
                  <li>
                    <strong>Chroma subsampling optimization:</strong> For photographic images, implement 4:2:0 chroma subsampling to reduce file size with minimal perceptible quality loss.
                  </li>
                  <li>
                    <strong>Vector conversion for graphics:</strong> Convert simple illustrations, icons, and logos to SVG format for perfect scaling and minimal file size.
                  </li>
                </ul>
                
                <h3>Responsive Image Implementation</h3>
                <p>
                  Properly implemented responsive images impact both performance metrics and user experience:
                </p>
                <ul>
                  <li>
                    <strong>Comprehensive srcset attributes:</strong> Provide multiple resolution options with carefully selected breakpoints based on your design and typical viewing devices.
                  </li>
                  <li>
                    <strong>Art direction with &lt;picture&gt;:</strong> Use the picture element to deliver different image crops or compositions based on viewport size, enhancing the visual experience across devices.
                  </li>
                  <li>
                    <strong>Resolution switching:</strong> Implement client-side resolution detection to serve the optimal image size based on both device capabilities and network conditions.
                  </li>
                  <li>
                    <strong>Aspect ratio preservation:</strong> Use the aspect-ratio CSS property to prevent layout shifts during image loading, contributing to better Core Web Vitals scores.
                  </li>
                </ul>
                
                <h3>CDN and Delivery Optimization</h3>
                <p>
                  Advanced delivery strategies enhance both the loading experience and SEO performance:
                </p>
                <ul>
                  <li>
                    <strong>Geographic content delivery:</strong> Utilize CDN services with global edge locations to minimize image loading times for users worldwide.
                  </li>
                  <li>
                    <strong>Automated format negotiation:</strong> Implement CDN features that automatically serve the best format based on browser support (e.g., WebP for compatible browsers, JPEG for others).
                  </li>
                  <li>
                    <strong>Dynamic quality adjustment:</strong> Use services that can dynamically adjust image quality based on connection speed while maintaining visual acceptability.
                  </li>
                </ul>

                <h2 id="loading-performance">Image Loading Performance Optimization</h2>
                <p>
                  How images load significantly impacts both user experience metrics and search ranking:
                </p>
                
                <h3>Strategic Lazy Loading Implementation</h3>
                <p>
                  Beyond basic lazy loading, these advanced techniques optimize the loading sequence:
                </p>
                <ul>
                  <li>
                    <strong>Priority hints:</strong> Implement the <code>fetchpriority</code> attribute to indicate which images should load first, particularly for LCP (Largest Contentful Paint) images.
                  </li>
                  <li>
                    <strong>Calculated loading distances:</strong> Customize lazy loading thresholds based on viewport size and typical scroll speed to ensure images load just before they enter the viewport.
                  </li>
                  <li>
                    <strong>Critical image preloading:</strong> Use <code>&lt;link rel="preload"&gt;</code> for hero images and other visually important above-the-fold content to expedite rendering.
                  </li>
                </ul>
                
                <h3>Progressive Loading Techniques</h3>
                <p>
                  Enhance perceived performance with these progressive rendering approaches:
                </p>
                <ul>
                  <li>
                    <strong>LQIP (Low Quality Image Placeholders):</strong> Generate and preload tiny, blurred versions of images that serve as placeholders while the full image loads.
                  </li>
                  <li>
                    <strong>Color extraction placeholders:</strong> Generate dominant color blocks as initial placeholders for a more visually pleasing loading experience.
                  </li>
                  <li>
                    <strong>Progressive JPEG optimization:</strong> For larger images, ensure they're saved as progressive JPEGs to display increasingly detailed versions during loading rather than loading from top to bottom.
                  </li>
                  <li>
                    <strong>Blur-up techniques:</strong> Implement JavaScript solutions that create a smooth transition from placeholder to full image with a pleasing blur effect.
                  </li>
                </ul>
                
                <h3>Advanced Caching Strategies</h3>
                <p>
                  Implement sophisticated caching approaches to optimize repeat visits:
                </p>
                <ul>
                  <li>
                    <strong>Long-term caching with versioning:</strong> Set extended cache lifetimes for images with versioned URLs that change when the image is updated.
                  </li>
                  <li>
                    <strong>Service worker image caching:</strong> Implement service workers to cache images for offline access and instant loading on return visits.
                  </li>
                  <li>
                    <strong>Cache-aware image loading:</strong> Develop scripts that check for cached versions before triggering new downloads, particularly for returning users.
                  </li>
                </ul>

                <h2 id="structured-data">Structured Data and Advanced Markup for Images</h2>
                <p>
                  Implementing structured data helps search engines better understand and index your images:
                </p>
                
                <h3>Comprehensive Schema.org Implementation</h3>
                <p>
                  Beyond basic image markup, these structured data implementations enhance image visibility:
                </p>
                <ul>
                  <li>
                    <strong>ImageObject properties:</strong> Implement detailed ImageObject schema with properties like contentUrl, caption, creator, copyrightHolder, and exifData.
                  </li>
                  <li>
                    <strong>Content-type specific schemas:</strong> For product images, use Product schema with additional image-specific properties; for recipe images, use Recipe schema with recipeInstructions tied to specific images.
                  </li>
                  <li>
                    <strong>License information:</strong> Include license information in your structured data to help your images appear in Google's "licensed images" filter.
                  </li>
                </ul>
                
                <h3>IPTC and EXIF Data Optimization</h3>
                <p>
                  Embedded metadata provides additional context for image search engines:
                </p>
                <ul>
                  <li>
                    <strong>Comprehensive IPTC fields:</strong> Populate IPTC metadata fields including title, description, keywords, creator, copyright, and location information.
                  </li>
                  <li>
                    <strong>Geographic metadata:</strong> For location-relevant images, ensure accurate GPS coordinates are included in the EXIF data.
                  </li>
                  <li>
                    <strong>Metadata preservation workflow:</strong> Establish a workflow that preserves essential metadata during the compression and optimization process.
                  </li>
                </ul>
                
                <h3>Image Sitemaps and Indexation Control</h3>
                <p>
                  Strategic approaches to image indexation improve discovery and relevance:
                </p>
                <ul>
                  <li>
                    <strong>Dedicated image sitemaps:</strong> Create image-specific XML sitemaps that include additional attributes like title, caption, geo_location, and license.
                  </li>
                  <li>
                    <strong>Selective indexation:</strong> Use robots.txt and meta directives to control which images should be indexed, preventing duplicate or low-value images from diluting your image search presence.
                  </li>
                  <li>
                    <strong>Canonical image URLs:</strong> For images that appear in multiple locations on your site, implement canonical references to indicate the preferred version for indexing.
                  </li>
                </ul>

                <h2 id="visual-search">Visual Search Optimization Techniques</h2>
                <p>
                  As visual search capabilities advance, these techniques help position your images for discovery:
                </p>
                
                <h3>Computer Vision Optimization</h3>
                <p>
                  Adapt your images to work well with AI-powered visual recognition systems:
                </p>
                <ul>
                  <li>
                    <strong>Subject clarity:</strong> Ensure main subjects are clearly distinguished from backgrounds, avoiding busy patterns that can confuse object recognition.
                  </li>
                  <li>
                    <strong>Multiple angle coverage:</strong> For products, include images from multiple angles to increase recognition opportunities.
                  </li>
                  <li>
                    <strong>Feature highlighting:</strong> Emphasize distinctive features that computer vision systems might use for identification and categorization.
                  </li>
                </ul>
                
                <h3>Similar Image Discovery Optimization</h3>
                <p>
                  Increase the likelihood of your images appearing in "similar image" results:
                </p>
                <ul>
                  <li>
                    <strong>Visual distinctiveness:</strong> Create images with unique visual characteristics that stand out while remaining relevant to your category.
                  </li>
                  <li>
                    <strong>Category signaling:</strong> Include visual elements that clearly signal the image category to help classification systems.
                  </li>
                  <li>
                    <strong>Competitive visual analysis:</strong> Analyze which images rank well for your target terms and understand their visual characteristics.
                  </li>
                </ul>
                
                <h3>Google Lens and Visual Search Readiness</h3>
                <p>
                  Optimize specifically for emerging visual search tools:
                </p>
                <ul>
                  <li>
                    <strong>Text clarity in images:</strong> Ensure any text in images is clear and readable, as Google Lens can recognize and search for text within images.
                  </li>
                  <li>
                    <strong>Brand and logo prominence:</strong> For brand-related images, make logos and brand identifiers clearly visible to facilitate brand searches.
                  </li>
                  <li>
                    <strong>Action-ready images:</strong> Design product images to facilitate "where to buy" and other action-oriented visual searches.
                  </li>
                </ul>

                <h2 id="ecommerce">E-commerce Specific Image SEO Strategies</h2>
                <p>
                  For online retailers, these specialized techniques drive product discovery and conversion:
                </p>
                
                <h3>Product Image Optimization</h3>
                <p>
                  Advanced strategies for product imagery that converts:
                </p>
                <ul>
                  <li>
                    <strong>Consistent product presentation:</strong> Maintain consistent angles, lighting, and scale across product categories to help users visually compare options.
                  </li>
                  <li>
                    <strong>Detail variation images:</strong> Include close-up images of unique features with feature-specific alt text and filenames.
                  </li>
                  <li>
                    <strong>Usage context images:</strong> Show products in use or in appropriate settings to help users visualize ownership and increase relevance for contextual searches.
                  </li>
                </ul>
                
                <h3>Google Shopping Feed Integration</h3>
                <p>
                  Synchronize your image SEO with shopping feed requirements:
                </p>
                <ul>
                  <li>
                    <strong>Feed-compatible image naming:</strong> Align image filenames with product identifiers used in your Google Merchant Center feed.
                  </li>
                  <li>
                    <strong>Multiple image submission:</strong> Submit additional product images through the shopping feed's additional_image_link field.
                  </li>
                  <li>
                    <strong>Model and variant consistency:</strong> Maintain consistent image structures across product variations to improve category relevance.
                  </li>
                </ul>
                
                <h3>User-Generated Image Optimization</h3>
                <p>
                  Leverage customer images for enhanced relevance:
                </p>
                <ul>
                  <li>
                    <strong>Review image markup:</strong> Implement structured data for user-submitted review images to enhance rich result opportunities.
                  </li>
                  <li>
                    <strong>Automatic UGC metadata:</strong> Develop systems to automatically generate SEO-friendly filenames and alt text for customer-submitted images.
                  </li>
                  <li>
                    <strong>Permission frameworks:</strong> Create clear terms that allow you to repurpose user images for marketing while respecting copyright considerations.
                  </li>
                </ul>

                <h2 id="analytics-testing">Image SEO Analytics and Testing</h2>
                <p>
                  Measurement and optimization strategies for ongoing improvement:
                </p>
                
                <h3>Image Performance Tracking</h3>
                <p>
                  Advanced metrics to monitor image SEO effectiveness:
                </p>
                <ul>
                  <li>
                    <strong>Image search traffic segmentation:</strong> Create specific segments in Google Analytics to track and analyze traffic from Google Images separately from general search traffic.
                  </li>
                  <li>
                    <strong>Image impression tracking:</strong> Use Google Search Console to identify which images generate impressions and clicks, and analyze their characteristics.
                  </li>
                  <li>
                    <strong>Visual engagement heatmaps:</strong> Implement visual analytics tools that track user attention and interaction with images to identify which visual elements drive engagement.
                  </li>
                </ul>
                
                <h3>A/B Testing for Image SEO</h3>
                <p>
                  Experimental approaches to optimize image performance:
                </p>
                <ul>
                  <li>
                    <strong>Alt text variation testing:</strong> Test different alt text approaches on comparable images to measure impact on image search traffic.
                  </li>
                  <li>
                    <strong>Image placement experiments:</strong> Evaluate how different image positions within content affect both user engagement and search visibility.
                  </li>
                  <li>
                    <strong>Format comparison testing:</strong> Develop controlled tests to measure the impact of different image formats and loading techniques on conversion rates and bounce rates.
                  </li>
                </ul>
                
                <h3>Competitive Image Analysis</h3>
                <p>
                  Strategies to benchmark against and surpass competitors:
                </p>
                <ul>
                  <li>
                    <strong>Reverse image search auditing:</strong> Use reverse image search to identify competitors ranking well with similar images and analyze their optimization approach.
                  </li>
                  <li>
                    <strong>Category image trends:</strong> Track evolving visual trends in your industry to ensure your imagery remains relevant and competitive.
                  </li>
                  <li>
                    <strong>Feature adoption monitoring:</strong> Monitor competitors' implementation of new image features and technologies to maintain competitive parity.
                  </li>
                </ul>

                <h2 id="future-trends">Future-Proofing Your Image SEO Strategy</h2>
                <p>
                  Emerging trends and technologies to incorporate into your long-term strategy:
                </p>
                
                <h3>AI-Generated and AI-Enhanced Images</h3>
                <p>
                  Preparing for the impact of artificial intelligence on image creation and optimization:
                </p>
                <ul>
                  <li>
                    <strong>Generative AI ethics:</strong> Develop clear policies for the use of AI-generated images, including appropriate disclosure and copyright consideration.
                  </li>
                  <li>
                    <strong>AI enhancement workflows:</strong> Incorporate AI tools that can improve existing images through upscaling, noise reduction, and feature enhancement.
                  </li>
                  <li>
                    <strong>Unique value preservation:</strong> Ensure AI-assisted content still provides unique value that differentiates it from mass-generated visual content.
                  </li>
                </ul>
                
                <h3>Multi-Modal Search Readiness</h3>
                <p>
                  Preparing for searches that combine text, images, and other input types:
                </p>
                <ul>
                  <li>
                    <strong>Text-image semantic alignment:</strong> Ensure strong contextual relationships between your images and the text they accompany to perform well in multi-modal searches.
                  </li>
                  <li>
                    <strong>Visual question answering optimization:</strong> Design images that effectively answer likely visual questions users might have about your products or topics.
                  </li>
                  <li>
                    <strong>Cross-modal entity recognition:</strong> Optimize for systems that can recognize the same entity across both textual descriptions and visual representations.
                  </li>
                </ul>
                
                <h3>Augmented Reality Integration</h3>
                <p>
                  Preparing images for AR applications and search features:
                </p>
                <ul>
                  <li>
                    <strong>3D-ready product photography:</strong> Develop photography practices that facilitate conversion to 3D models for AR experiences.
                  </li>
                  <li>
                    <strong>AR markup preparation:</strong> Stay informed about emerging structured data standards for AR-enabled images and implement them early.
                  </li>
                  <li>
                    <strong>Virtual try-on optimization:</strong> For applicable products, optimize images specifically for virtual try-on features in search and shopping platforms.
                  </li>
                </ul>

                <h2 id="conclusion">Conclusion: Building a Comprehensive Image SEO Strategy</h2>
                <p>
                  Effective image SEO is no longer optional—it's an essential component of a comprehensive search strategy. The techniques outlined in this guide go beyond basic optimization to help you create images that are discoverable, engaging, and supportive of your overall SEO goals.
                </p>
                <p>
                  To implement these strategies effectively, start by auditing your current image optimization practices using our <Link to="/" className="text-teal hover:text-teal-light">SEO Audit Tool</Link>. Identify priority areas for improvement, beginning with technical optimizations that impact site performance, then progressively implementing the more advanced semantic and structured data enhancements.
                </p>
                <p>
                  Remember that image SEO sits at the intersection of technical optimization, content strategy, and user experience. The most successful approaches balance all three considerations, creating visual content that's technically sound, contextually relevant, and visually engaging for users.
                </p>
                <p>
                  By incorporating these advanced image SEO techniques into your overall <Link to="/blog/seo-strategy-2025" className="text-teal hover:text-teal-light">SEO strategy</Link>, you'll not only improve your visibility in image search but also enhance your performance in universal search results, providing a significant competitive advantage in an increasingly visual digital landscape.
                </p>
              </article>
              
              {/* Tags Section */}
              <div className="mt-10 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm text-navy font-medium">Tags:</span>
                  <span className="px-3 py-1 bg-navy/10 text-navy text-xs rounded-full">Image SEO</span>
                  <span className="px-3 py-1 bg-navy/10 text-navy text-xs rounded-full">Alt Text Optimization</span>
                  <span className="px-3 py-1 bg-navy/10 text-navy text-xs rounded-full">Visual Search</span>
                  <span className="px-3 py-1 bg-navy/10 text-navy text-xs rounded-full">WebP Format</span>
                  <span className="px-3 py-1 bg-navy/10 text-navy text-xs rounded-full">E-commerce Images</span>
                </div>
              </div>
              
              {/* Author Section */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center">
                    <User size={20} className="text-navy" />
                  </div>
                  <div className="ml-4">
                    <h5 className="text-navy font-medium">SEO Audit Tool Team</h5>
                    <p className="text-sm text-navy/70">Our team of SEO experts stays on the cutting edge of search engine optimization strategies to help your business succeed online.</p>
                  </div>
                </div>
              </div>
              
              {/* Related Articles Section */}
              <div className="mt-10 pt-6 border-t border-gray-200">
                <h4 className="text-xl font-bold text-navy mb-4">Related Articles</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Link to="/blog/seo-strategy-2025" className="group">
                    <div className="bg-gray-100 rounded-lg overflow-hidden transition-all group-hover:shadow-md">
                      <div className="p-4">
                        <h5 className="font-medium text-navy group-hover:text-teal transition-colors mb-2">Advanced SEO Strategies for 2025</h5>
                        <p className="text-sm text-navy/70 line-clamp-2">Discover cutting-edge SEO strategies that will dominate in 2025 and help your website outrank the competition.</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/blog/youtube-seo" className="group">
                    <div className="bg-gray-100 rounded-lg overflow-hidden transition-all group-hover:shadow-md">
                      <div className="p-4">
                        <h5 className="font-medium text-navy group-hover:text-teal transition-colors mb-2">YouTube SEO: The Complete Guide</h5>
                        <p className="text-sm text-navy/70 line-clamp-2">Learn how to optimize your YouTube videos to increase visibility, engagement, and channel growth.</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-4">
              {/* Table of Contents */}
              <div className="bg-white rounded-xl p-6 shadow-sm mb-8 sticky top-24">
                <h4 className="text-lg font-bold text-navy mb-4">Table of Contents</h4>
                <nav className="toc-nav">
                  <ul className="space-y-2 text-navy/70">
                    <li>
                      <a href="#introduction" className="hover:text-teal transition-colors">Why Image SEO Matters More Than Ever</a>
                    </li>
                    <li>
                      <a href="#fundamentals" className="hover:text-teal transition-colors">Image SEO Fundamentals: Beyond the Basics</a>
                    </li>
                    <li>
                      <a href="#technical-optimization" className="hover:text-teal transition-colors">Technical Image Optimization for SEO</a>
                    </li>
                    <li>
                      <a href="#loading-performance" className="hover:text-teal transition-colors">Image Loading Performance Optimization</a>
                    </li>
                    <li>
                      <a href="#structured-data" className="hover:text-teal transition-colors">Structured Data and Advanced Markup</a>
                    </li>
                    <li>
                      <a href="#visual-search" className="hover:text-teal transition-colors">Visual Search Optimization Techniques</a>
                    </li>
                    <li>
                      <a href="#ecommerce" className="hover:text-teal transition-colors">E-commerce Specific Image SEO</a>
                    </li>
                    <li>
                      <a href="#analytics-testing" className="hover:text-teal transition-colors">Image SEO Analytics and Testing</a>
                    </li>
                    <li>
                      <a href="#future-trends" className="hover:text-teal transition-colors">Future-Proofing Your Image SEO</a>
                    </li>
                    <li>
                      <a href="#conclusion" className="hover:text-teal transition-colors">Conclusion</a>
                    </li>
                  </ul>
                </nav>
              </div>
              
              {/* CTA Card */}
              <div className="bg-navy rounded-xl p-6 text-white mb-8">
                <h4 className="text-xl font-bold mb-3">Check Your SEO Score</h4>
                <p className="text-white/80 mb-4">Use our <Link to="/" className="text-teal-light hover:underline">SEO checker</Link> to analyze your website and get actionable recommendations.</p>
                <Link to="/" className="block w-full bg-teal hover:bg-teal-light text-white text-center py-3 rounded-lg transition-colors">
                  Run Free SEO Analysis
                </Link>
              </div>
              
              {/* More Resources */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="text-lg font-bold text-navy mb-4">More Resources</h4>
                <ul className="space-y-3">
                  <li>
                    <Link to="/blog/youtube-seo" className="flex items-center text-navy hover:text-teal transition-colors">
                      <ChevronRight size={16} className="mr-2 text-teal" />
                      <span>YouTube SEO Guide</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/onpage-seo" className="flex items-center text-navy hover:text-teal transition-colors">
                      <ChevronRight size={16} className="mr-2 text-teal" />
                      <span>Advanced On-Page SEO Techniques</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/seo" className="flex items-center text-navy hover:text-teal transition-colors">
                      <ChevronRight size={16} className="mr-2 text-teal" />
                      <span>Professional SEO Services</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/international-seo" className="flex items-center text-navy hover:text-teal transition-colors">
                      <ChevronRight size={16} className="mr-2 text-teal" />
                      <span>International SEO Guide</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImageSeo;
