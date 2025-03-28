
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Image, ArrowRight, Search, FileImage, BarChart3 } from 'lucide-react';

const ImageSeo = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-navy to-navy-light">
      <Helmet>
        <title>Advanced Image SEO Guide | Optimize Images for Search | SEO Audit Tool</title>
        <meta name="description" content="Learn advanced image SEO techniques to improve search visibility, increase traffic, and enhance user experience. Complete guide with best practices for 2025." />
        <meta name="keywords" content="image SEO, image optimization, alt text, image compression, responsive images, image sitemap, visual search optimization" />
        
        <meta property="og:title" content="Advanced Image SEO Guide | Optimize Images for Search | SEO Audit Tool" />
        <meta property="og:description" content="Learn advanced image SEO techniques to improve search visibility, increase traffic, and enhance user experience. Complete guide with best practices for 2025." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="/images/image-seo-guide.jpg" />
        
        <meta name="twitter:title" content="Advanced Image SEO Guide | Optimize Images for Search | SEO Audit Tool" />
        <meta name="twitter:description" content="Learn advanced image SEO techniques to improve search visibility, increase traffic, and enhance user experience. Complete guide with best practices for 2025." />
        
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-10">
          <Link to="/blog" className="text-teal hover:text-teal-light flex items-center mb-4">
            <ArrowRight className="h-4 w-4 mr-2 rotate-180" /> Back to Blog
          </Link>
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">Advanced Image SEO Techniques for 2025</h1>
            
            <div className="flex items-center mb-6 text-navy/60">
              <span className="mr-4">Published: May 10, 2024</span>
              <span>10 min read</span>
            </div>
            
            <div className="rounded-xl overflow-hidden mb-8 border-2 border-navy/10">
              <img 
                src="https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="Person optimizing images for SEO with visual editing software" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-navy mt-8 mb-4">Why Image SEO Matters in 2025</h2>
              <p>In today's visually-driven digital landscape, images are no longer just decorative elements—they're vital content assets that can significantly impact your SEO performance. With visual search gaining traction and Google's increasingly sophisticated image recognition capabilities, optimizing your images has become more important than ever.</p>
              
              <p>Consider these statistics:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Google Images accounts for approximately 22.6% of all web searches</li>
                <li>36% of consumers have used visual search when shopping online</li>
                <li>Sites with optimized images rank 53% higher than their non-optimized counterparts</li>
                <li>Pages with at least one image rank significantly better on average than those without</li>
                <li>Properly optimized images can reduce page load time by 30-40%, improving user experience and SEO</li>
              </ul>
              
              <div className="bg-navy/5 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold text-navy mb-2">Image SEO Benefits:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Improved organic search visibility in both image and regular search results</li>
                  <li>Additional traffic from image search and visual search platforms</li>
                  <li>Enhanced user experience through faster loading times</li>
                  <li>Better accessibility for users with visual impairments</li>
                  <li>Increased conversion rates due to relevant, high-quality visuals</li>
                  <li>Potential for featured snippets and rich results that include images</li>
                </ul>
              </div>
              
              <h2 className="text-3xl font-bold text-navy mt-8 mb-4">Essential Image SEO Elements</h2>
              
              <h3 className="text-2xl font-bold text-navy mt-6 mb-3">1. Strategic Image File Names</h3>
              <p>File names are one of the first indicators to search engines about the content of your image. Many website owners overlook this fundamental aspect, uploading images with default camera names like "IMG_12345.jpg" rather than descriptive, keyword-rich file names.</p>
              
              <p>Best practices for image file names:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Use descriptive, keyword-rich file names (e.g., "advanced-image-seo-techniques-2025.jpg")</li>
                <li>Separate words with hyphens, not underscores or spaces</li>
                <li>Keep file names concise yet descriptive (3-5 words maximum)</li>
                <li>Include your primary keyword when relevant</li>
                <li>Consider adding location information for local SEO (e.g., "toronto-skyline-sunset.jpg")</li>
                <li>Avoid keyword stuffing in file names</li>
              </ul>
              
              <div className="my-8">
                <img 
                  src="https://images.unsplash.com/photo-1523437237164-9c53fa5febd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                  alt="Developer organizing and renaming image files for better SEO" 
                  className="w-full h-auto rounded-xl"
                />
                <p className="text-sm text-navy/60 mt-2 text-center">Properly named image files improve discoverability in search engines</p>
              </div>
              
              <h3 className="text-2xl font-bold text-navy mt-6 mb-3">2. Optimizing Alt Text for SEO and Accessibility</h3>
              <p>Alt text (alternative text) serves two critical purposes: it helps search engines understand what your images depict, and it provides descriptions for visually impaired users who rely on screen readers.</p>
              
              <p>In 2025, search engines have become increasingly sophisticated at analyzing alt text for relevance and context, making proper optimization more important than ever.</p>
              
              <p>Best practices for alt text in 2025:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Write descriptive, specific alt text that accurately describes the image content</li>
                <li>Include relevant keywords naturally where appropriate</li>
                <li>Keep alt text under 125 characters for optimal screen reader compatibility</li>
                <li>Avoid keyword stuffing or irrelevant keywords</li>
                <li>Include context that relates to your page content</li>
                <li>For decorative images, use empty alt text (alt="")</li>
                <li>For product images, consider including product name and key features</li>
              </ul>
              
              <div className="bg-teal/10 p-6 rounded-lg my-8 border-l-4 border-teal">
                <h4 className="text-xl font-bold text-navy mb-2">Alt Text Examples</h4>
                <p className="mb-2"><strong>Poor:</strong> "image1.jpg" or "SEO image optimization"</p>
                <p className="mb-2"><strong>Better:</strong> "Person optimizing website images for SEO"</p>
                <p className="mb-0"><strong>Best:</strong> "Digital marketer using image optimization software to improve website SEO performance"</p>
              </div>
              
              <h3 className="text-2xl font-bold text-navy mt-6 mb-3">3. Image Captioning and Context</h3>
              <p>While not as commonly discussed as alt text, image captions play a significant role in both SEO and user experience. Captions are the visible text that appears below or alongside images, providing additional context for users.</p>
              
              <p>From an SEO perspective, captions offer several advantages:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Captions are read 300% more than body copy, making them prime real estate for relevant keywords</li>
                <li>They provide additional context to search engines about image content and relevance</li>
                <li>Captions improve user engagement and time on page</li>
                <li>They can include links to relevant content, enhancing internal linking structure</li>
              </ul>
              
              <h3 className="text-2xl font-bold text-navy mt-6 mb-3">4. Technical Image Optimization</h3>
              
              <h4 className="text-xl font-bold text-navy mt-4 mb-2">Image Compression and File Size</h4>
              <p>Page speed is a critical ranking factor, and large image files are often the biggest culprits in slowing down websites. In 2025, with Core Web Vitals firmly established as ranking signals, optimizing image file sizes has become non-negotiable.</p>
              
              <p>Best practices for image compression:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Compress all images before uploading them to your website</li>
                <li>Aim for file sizes under 200KB when possible without sacrificing quality</li>
                <li>Use modern compression tools that maintain visual quality</li>
                <li>Implement lossless compression for simple graphics and logos</li>
                <li>Consider lossy compression for photographs and complex images</li>
                <li>Use WebP format where supported (offers 30% better compression than JPEG)</li>
                <li>Provide fallback formats for browsers that don't support WebP</li>
              </ul>
              
              <h4 className="text-xl font-bold text-navy mt-4 mb-2">Responsive Images</h4>
              <p>With mobile-first indexing fully implemented, responsive images are essential for both user experience and SEO. Responsive images automatically adjust their size based on the user's screen, ensuring optimal display across all devices.</p>
              
              <p>Implementation techniques for responsive images:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Use the srcset attribute to specify multiple image versions for different screen sizes</li>
                <li>Implement the sizes attribute to help browsers select the appropriate image size</li>
                <li>Use CSS to set maximum widths and heights for images</li>
                <li>Consider implementing lazy loading for images below the fold</li>
                <li>Create appropriate image dimensions for common device breakpoints</li>
              </ul>
              
              <div className="my-8">
                <img 
                  src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                  alt="Responsive design showing the same website on multiple devices" 
                  className="w-full h-auto rounded-xl"
                />
                <p className="text-sm text-navy/60 mt-2 text-center">Responsive images are essential for multi-device compatibility and SEO</p>
              </div>
              
              <h3 className="text-2xl font-bold text-navy mt-6 mb-3">5. Image File Format Selection</h3>
              <p>Choosing the right image format is a balance between quality and performance. Each format has specific use cases and advantages:</p>
              
              <div className="overflow-x-auto my-6">
                <table className="min-w-full border-collapse border border-navy/20">
                  <thead>
                    <tr className="bg-navy/10">
                      <th className="p-3 text-left border border-navy/20">Format</th>
                      <th className="p-3 text-left border border-navy/20">Best Use Cases</th>
                      <th className="p-3 text-left border border-navy/20">Pros</th>
                      <th className="p-3 text-left border border-navy/20">Cons</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-navy/20 font-medium">WebP</td>
                      <td className="p-3 border border-navy/20">Modern websites, photography, complex graphics</td>
                      <td className="p-3 border border-navy/20">Superior compression, supports transparency and animation</td>
                      <td className="p-3 border border-navy/20">Not supported by older browsers (requires fallbacks)</td>
                    </tr>
                    <tr className="bg-navy/5">
                      <td className="p-3 border border-navy/20 font-medium">JPEG/JPG</td>
                      <td className="p-3 border border-navy/20">Photographs, complex images with gradients</td>
                      <td className="p-3 border border-navy/20">Universal support, good compression</td>
                      <td className="p-3 border border-navy/20">No transparency, lossy compression</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-navy/20 font-medium">PNG</td>
                      <td className="p-3 border border-navy/20">Graphics with transparency, logos, icons</td>
                      <td className="p-3 border border-navy/20">Lossless quality, transparency support</td>
                      <td className="p-3 border border-navy/20">Larger file sizes compared to JPEG/WebP</td>
                    </tr>
                    <tr className="bg-navy/5">
                      <td className="p-3 border border-navy/20 font-medium">SVG</td>
                      <td className="p-3 border border-navy/20">Logos, icons, simple illustrations</td>
                      <td className="p-3 border border-navy/20">Infinitely scalable, tiny file sizes</td>
                      <td className="p-3 border border-navy/20">Not suitable for photographs</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-navy/20 font-medium">AVIF</td>
                      <td className="p-3 border border-navy/20">Next-gen replacement for WebP/JPEG</td>
                      <td className="p-3 border border-navy/20">Superior compression, excellent quality</td>
                      <td className="p-3 border border-navy/20">Limited browser support in 2025</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p>For optimal SEO in 2025, consider implementing a format delivery strategy that serves:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>WebP as the primary format with JPEG fallbacks</li>
                <li>SVG for logos, icons, and simple graphics</li>
                <li>AVIF for browsers that support it</li>
                <li>PNG only when transparency is required and SVG isn't suitable</li>
              </ul>
              
              <h2 className="text-3xl font-bold text-navy mt-8 mb-4">Advanced Image SEO Techniques for 2025</h2>
              
              <h3 className="text-2xl font-bold text-navy mt-6 mb-3">1. Image Structured Data</h3>
              <p>Implementing structured data (schema markup) for images provides search engines with explicit information about your images, potentially enhancing visibility in search results and enabling rich features.</p>
              
              <p>Key image structured data types to implement:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>ImageObject</strong> schema for important standalone images</li>
                <li><strong>Product</strong> schema with image properties for e-commerce</li>
                <li><strong>Recipe</strong> schema with images for food-related content</li>
                <li><strong>Article</strong> schema with image properties for news/blog content</li>
                <li><strong>How-To</strong> schema with step images for instructional content</li>
              </ul>
              
              <h3 className="text-2xl font-bold text-navy mt-6 mb-3">2. Image Sitemaps</h3>
              <p>An image sitemap helps search engines discover and index images that might otherwise be missed during crawling. This is particularly important for:</p>
              
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Images loaded dynamically through JavaScript</li>
                <li>Images in carousels or hidden in tabs</li>
                <li>Sites with extensive image libraries</li>
                <li>E-commerce sites with product images</li>
              </ul>
              
              <p>Include the following information in your image sitemap:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Image URL location</li>
                <li>Caption information</li>
                <li>Title information</li>
                <li>License information (if applicable)</li>
                <li>Geographic location (for location-specific images)</li>
              </ul>
              
              <h3 className="text-2xl font-bold text-navy mt-6 mb-3">3. EXIF Data Optimization</h3>
              <p>EXIF (Exchangeable Image File Format) data contains metadata about images, including camera settings, date taken, and location information. While not all EXIF data is used by search engines, some elements can provide additional context:</p>
              
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Geolocation data for location-based searches</li>
                <li>Date information for time-sensitive content</li>
                <li>Copyright and ownership information</li>
                <li>Image description fields</li>
              </ul>
              
              <div className="bg-navy/10 p-6 rounded-lg my-8">
                <h4 className="text-xl font-bold text-navy mb-2">Privacy Consideration</h4>
                <p className="mb-0">Always strip personally identifying EXIF data from images before uploading them to your website. This includes exact GPS coordinates for sensitive locations and camera serial numbers that could be linked to specific individuals.</p>
              </div>
              
              <h3 className="text-2xl font-bold text-navy mt-6 mb-3">4. Image Content Clustering</h3>
              <p>Similar to topic clustering for written content, image content clustering involves organizing related images together to establish topical authority and enhance user experience.</p>
              
              <p>Implementation strategies include:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Creating image galleries around specific themes or topics</li>
                <li>Implementing proper internal linking between related image pages</li>
                <li>Using consistent naming conventions and alt text patterns for related images</li>
                <li>Creating hub pages that showcase collections of related images</li>
                <li>Implementing breadcrumb navigation for image categories</li>
              </ul>
              
              <div className="my-8">
                <img 
                  src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                  alt="Organized image gallery showing content clustering approach" 
                  className="w-full h-auto rounded-xl"
                />
                <p className="text-sm text-navy/60 mt-2 text-center">Organizing images into thematic clusters improves search visibility</p>
              </div>
              
              <h2 className="text-3xl font-bold text-navy mt-8 mb-4">Image SEO for E-commerce</h2>
              <p>E-commerce sites face unique image SEO challenges, as product images directly impact conversion rates and search visibility.</p>
              
              <h3 className="text-2xl font-bold text-navy mt-6 mb-3">1. Product Image Optimization</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Use consistent image dimensions across product categories</li>
                <li>Include product name, SKU, and key features in alt text</li>
                <li>Show products from multiple angles with separate optimized images</li>
                <li>Implement 360-degree product views where appropriate</li>
                <li>Use product structured data with image properties</li>
                <li>Consider adding user-generated product images (with proper optimization)</li>
              </ul>
              
              <h3 className="text-2xl font-bold text-navy mt-6 mb-3">2. Optimizing for Visual Search</h3>
              <p>Visual search technologies like Google Lens and Pinterest Lens are becoming increasingly important for e-commerce. To optimize for visual search:</p>
              
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Use high-quality, clear product images with clean backgrounds</li>
                <li>Include multiple product angles to increase recognition opportunities</li>
                <li>Ensure consistent lighting and professional image quality</li>
                <li>Use descriptive file names and alt text that match product attributes</li>
                <li>Implement proper structured data for products</li>
                <li>Consider watermarking images with your brand for recognition</li>
              </ul>
              
              <h2 className="text-3xl font-bold text-navy mt-8 mb-4">Measuring Image SEO Success</h2>
              
              <h3 className="text-2xl font-bold text-navy mt-6 mb-3">1. Key Performance Indicators</h3>
              <p>Track these metrics to measure the effectiveness of your image SEO efforts:</p>
              
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Image search traffic (via Google Search Console)</li>
                <li>Image impressions and click-through rates</li>
                <li>Page load speed improvements (Core Web Vitals)</li>
                <li>Image ranking positions for target keywords</li>
                <li>Conversion rates on pages with optimized images</li>
                <li>Engagement metrics (time on page, bounce rate)</li>
              </ul>
              
              <h3 className="text-2xl font-bold text-navy mt-6 mb-3">2. Tools for Image SEO Analysis</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Google Search Console (image search performance)</li>
                <li>PageSpeed Insights (image loading performance)</li>
                <li>Screaming Frog SEO Spider (image audit)</li>
                <li>Google Analytics (traffic and engagement metrics)</li>
                <li>Our <Link to="/" className="text-teal hover:underline">SEO Audit Tool</Link> (comprehensive site analysis including images)</li>
              </ul>
              
              <h2 className="text-3xl font-bold text-navy mt-8 mb-4">Conclusion: The Future of Image SEO</h2>
              <p>As we move through 2025, image SEO continues to evolve with advancements in visual search, AI-powered image recognition, and user experience expectations. The sites that will succeed are those that treat images as first-class content citizens, with thorough optimization practices that address both technical and semantic aspects.</p>
              
              <p>Key takeaways for image SEO in 2025:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Comprehensive image optimization improves both SEO performance and user experience</li>
                <li>Technical optimization (file size, format, responsiveness) remains foundational</li>
                <li>Semantic optimization (file names, alt text, context) provides crucial relevance signals</li>
                <li>Structured data and image sitemaps enhance discoverability</li>
                <li>E-commerce sites should prioritize image optimization for both traditional and visual search</li>
                <li>Regular measurement and refinement are essential for ongoing success</li>
              </ul>
              
              <p>By implementing these image SEO best practices, you'll improve your site's visibility in both traditional and image search results, enhance user experience, and ultimately drive more qualified traffic to your website.</p>
              
              <div className="bg-navy/10 p-6 rounded-lg my-8">
                <h4 className="text-xl font-bold text-navy mb-2">Want to check your website's overall SEO health?</h4>
                <p className="mb-4">Try our <Link to="/" className="text-teal hover:underline">Free SEO Audit Tool</Link> to get a comprehensive analysis of your website's performance, including image optimization opportunities.</p>
                <Link to="/">
                  <Button className="bg-teal hover:bg-teal-dark text-white">
                    <Search className="w-4 h-4 mr-2" /> Run a Free SEO Analysis
                  </Button>
                </Link>
              </div>
              
              <div className="border-t border-navy/10 pt-6 mt-8">
                <h3 className="text-2xl font-bold text-navy mb-4">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Link to="/blog/seo-strategy-2025" className="group">
                    <div className="border border-navy/10 rounded-lg p-4 transition-all group-hover:border-teal">
                      <h4 className="text-lg font-bold text-navy mb-2 group-hover:text-teal">Advanced SEO Strategies for 2025</h4>
                      <p className="text-navy/70 text-sm">Discover cutting-edge SEO techniques to dominate search rankings in 2025.</p>
                    </div>
                  </Link>
                  <Link to="/blog/youtube-seo" className="group">
                    <div className="border border-navy/10 rounded-lg p-4 transition-all group-hover:border-teal">
                      <h4 className="text-lg font-bold text-navy mb-2 group-hover:text-teal">YouTube SEO: The Complete Guide</h4>
                      <p className="text-navy/70 text-sm">Master YouTube SEO with our comprehensive guide to rank videos higher.</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSeo;
