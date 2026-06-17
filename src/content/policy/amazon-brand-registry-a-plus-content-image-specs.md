---
title: Amazon Brand Registry A+ Content Image Specs (2026 Guide)
slug: amazon-brand-registry-a-plus-content-image-specs
article_type: policy_guide
qa_score: 6.3
word_count: 1472
published_at: "2026-05-19T06:07:03.830386+00:00"
published_url: /blog/policy/amazon-brand-registry-a-plus-content-image-specs
sources: []
platform: multi
hero_image: /img/amazon-brand-registry-a-plus-content-image-specs/hero.webp
inline_images:
  - /img/amazon-brand-registry-a-plus-content-image-specs/inline-1.webp
  - /img/amazon-brand-registry-a-plus-content-image-specs/inline-2.webp
  - /img/amazon-brand-registry-a-plus-content-image-specs/inline-3.webp
  - /img/amazon-brand-registry-a-plus-content-image-specs/inline-4.webp
  - /img/amazon-brand-registry-a-plus-content-image-specs/inline-5.webp
inline_image_sections:
  - "Quick Reference Table"
  - "Detailed Requirements"
  - "Common Rejection Reasons"
  - "How to Fix Each Issue"
  - "Official Source Links"
---


> 📝 **Editorial Note:** This guide is AI-assisted and game data evolves rapidly. Please cross-reference with in-game information. _Updated: 2026-05-19._

Stop wasting hours designing A+ Content only to have Amazon’s automated validation system reject your submission for a single pixel-width error or a stray "Best Seller" badge. Your Brand Registry status is a powerful conversion tool, but it only works if your imagery meets the rigid technical and policy-based requirements enforced by Amazon’s 2026 moderation algorithms.

## Quick Reference Table

![Quick Reference Table](/img/amazon-brand-registry-a-plus-content-image-specs/inline-1.webp)


Audit your current image library against the 2 MB limit before you start the upload process to prevent "File Too Large" errors that stall your workflow. Amazon’s ingestion engine strictly enforces these dimensions; uploading a 900-pixel wide image for a 970-pixel slot will result in upscaling blurriness that triggers a quality rejection.

| Module Name | Required Dimensions (Pixels) | Aspect Ratio | Maximum File Size |
| :--- | :--- | :--- | :--- |
| **Standard Brand Logo** | 600 x 180 | 10:3 | 2 MB |
| **Standard Image Header with Text** | 970 x 600 | 1.62:1 | 2 MB |
| **Standard Comparison Chart (Image)** | 150 x 300 | 1:2 | 2 MB |
| **Standard Four Image & Text** | 220 x 220 | 1:1 | 2 MB |
| **Standard Single Image & Sidebar** | 300 x 300 | 1:1 | 2 MB |
| **Standard Single Image & Highlights** | 300 x 300 | 1:1 | 2 MB |
| **Standard Single Left/Right Image** | 300 x 300 | 1:1 | 2 MB |
| **Standard Three Images & Text** | 300 x 300 | 1:1 | 2 MB |
| **Premium A+ Full Width Image** | 1464 x 600 | 2.44:1 | 2 MB |
| **Premium A+ Comparison Table** | 140 x 140 | 1:1 | 2 MB |

### Technical Baseline
*   **Accepted File Formats:** JPG, PNG, and BMP.
*   **Prohibited Formats:** Animated GIFs and TIFF files.
*   **Minimum Resolution:** 72 DPI (Dots Per Inch).
*   **[Color Profile](https://pixelmatch.art/blog/policy/shopify-webp-conversion-color-profile-fix):** RGB (SRGB preferred).

## Detailed Requirements

![Detailed Requirements](/img/amazon-brand-registry-a-plus-content-image-specs/inline-2.webp)


Set your Photoshop, Canva, or AI generation workspace to RGB color mode at the start of every project to prevent the "washed out" color effect that occurs when Amazon’s web-based system tries to interpret print-centric CMYK files. If you are working with a professional photographer, explicitly request "Web-Ready RGB Exports" to avoid manual conversion later.

### File Types & Color Space
Amazon’s A+ Content system is built for high-speed web delivery. While PNG files offer superior clarity for text-heavy graphics, they often exceed the 2 MB limit when saved at high resolutions. Use JPG for complex lifestyle photography to maintain the balance between visual fidelity and file size. 

Avoid CMYK color spaces entirely. CMYK is designed for physical ink on paper; when uploaded to Amazon, the colors will often shift, making vibrant products look dull or "muddy." Stick to the sRGB [color profile](https://pixelmatch.art/blog/policy/shopify-webp-conversion-color-profile-fix), which is the standard for 99% of consumer screens used by Amazon shoppers.

### Module-Specific Dimensions
Every A+ Content module has a specific "safe zone." For the **Standard Image Header (970 x 600 px)**, keep your primary subject centered. Amazon’s mobile rendering engine occasionally crops the edges of these headers to fit smaller vertical screens. 

For the **Comparison Chart (150 x 300 px)**, focus on "micro-photography." Because these images are narrow and tall, wide-angle product shots will leave too much empty space at the top and bottom. Use tight crops that highlight the specific feature being compared.

### Mobile Optimization Rules
Amazon reports that over 50% of its traffic comes from mobile devices, yet many sellers design A+ Content exclusively for desktop. 
1.  **Text Overlay Size:** If you embed text directly into an image (rather than using Amazon's text fields), ensure the font size is at least 16pt. Anything smaller becomes unreadable on a smartphone screen.
2.  **Alt-Text Accuracy:** You must provide "Image Keywords" (Alt-text) for every image. This is not just for SEO; it is a legal accessibility requirement for screen readers. Your alt-text should be a literal description of the image (e.g., "A blue stainless steel water bottle sitting on a wooden kitchen counter") rather than a string of keywords (e.g., "water bottle flask hydro gym blue cheap"). Keyword stuffing in alt-text is a violation of Amazon’s accessibility policies and can lead to content rejection.

## Common Rejection Reasons

![Common Rejection Reasons](/img/amazon-brand-registry-a-plus-content-image-specs/inline-3.webp)


<!-- pm-cta:mid -->
> 💡 **Skip the manual editing.** PixelMatch batch-generates ecommerce-ready product images in 60 seconds — white background, lifestyle scenes, and variant mockups from a single source photo.
> **Try PixelMatch free →**

Run a manual sweep for banned keywords like "Best Seller" or "Guaranteed" in your image text before submitting for approval. Amazon’s automated visual recognition software is now sophisticated enough to scan text embedded within images, not just the metadata.

### Promotional Text Violations
Amazon strictly prohibits "time-sensitive" or "promotional" language within A+ Content. Including any of the following will result in an immediate rejection:
*   Pricing details (e.g., "Only $19.99").
*   Shipping claims (e.g., "Free Shipping" or "Prime Delivery").
*   Promotional phrases (e.g., "Best Seller," "Top Rated," "2026 Deal").
*   Contact information (e.g., your website URL, QR codes, or customer service email).

### Image Quality & Duplication
Amazon requires A+ Content to provide *additional* value beyond the main product images. If you reuse the exact same hero image from your main listing carousel in your A+ Content, the system may flag it as "duplicate content." 
*   **Blurriness:** Images must be sharp. If you try to stretch a 500-pixel image to fit the 970-pixel header, the resulting pixelation will trigger a rejection.
*   **Watermarks:** Never include your brand watermark or a copyright symbol over the product. Your brand name should be represented via the "Brand Logo" module or natural placement within lifestyle shots.

### Prohibited Claims
The 2026 moderation guidelines are particularly strict regarding health and environmental claims.
*   **Environmental Claims:** Do not use "Eco-Friendly," "Biodegradable," or "Carbon Neutral" unless you have the specific certification badges recognized by Amazon’s [Climate Pledge Friendly](https://pixelmatch.art/blog/policy/amazon-climate-pledge-friendly-image-requirements) program.
*   **Health Claims:** Any mention of "FDA Approved" or "Cures [Disease]" without verified documentation will lead to a rejection and a potential "Restricted Product" flag on your entire ASIN.
*   **Customer Reviews:** You are allowed a maximum of four quotes in A+ Content, but they must be from reputable publications or verified public figures. You cannot pull a quote from a random customer review on your own listing.

## How to Fix Each Issue

![How to Fix Each Issue](/img/amazon-brand-registry-a-plus-content-image-specs/inline-4.webp)


Use a batch-processing tool to resize all 300x300 module images simultaneously to save 40 minutes per ASIN. If you are managing a catalog of 50+ products, manual resizing is the fastest way to introduce human error and subsequent rejections.

### Fixing Resolution and File Size
If your high-resolution PNG is over the 2 MB limit, do not simply lower the resolution below 72 DPI. Instead:
1.  **Export as JPG:** Change the file format from PNG to JPG.
2.  **Adjust Quality Slider:** In tools like Adobe Express or Canva, set the quality to 80-90%. This usually drops the file size by 60% with no visible loss in quality.
3.  **TinyJPG/Optimizilla:** Use these compression tools to strip unnecessary metadata from the file without touching the pixel dimensions.

### Generating Compliant Lifestyle Images
One of the hardest modules to fill is the **970 x 600 px Standard Image Header**. Most stock photography is 4:3 or 3:2, meaning it either stretches or leaves white bars when forced into Amazon’s 1.62:1 ratio.

PixelMatch is better suited for this workflow because it allows you to batch-generate AI lifestyle backgrounds specifically for the 970x600 header dimensions. Instead of hiring a photographer for a lifestyle shoot that might not fit the frame, you can upload your product "nugget" and generate a background that places the product in the "safe zone" of the module. This ensures your product isn't obscured by Amazon's text overlays or cropped on mobile devices.

While tools like Photoroom or Pebblely are excellent for single-image background removal, PixelMatch’s ability to generate consistent "sets" of images (one 970x600 header and four 300x300 feature images) ensures your A+ Content has a unified aesthetic across all modules.

### Correcting Color Space
If you realize your images were designed in CMYK:
1.  Open the file in Adobe Photoshop.
2.  Navigate to **Image > Mode > RGB Color**.
3.  Save as a new file.
If you don't have Photoshop, free tools like GIMP or online converters like "CMYK2RGB" can perform this conversion, though you should always check the saturation levels after conversion to ensure the product color remains accurate to the physical item.

## Official Source Links

![Official Source Links](/img/amazon-brand-registry-a-plus-content-image-specs/inline-5.webp)


Verify these policies directly on the [Amazon Seller Central](https://pixelmatch.art/blog/stories/amazon-seller-central-error-code-img-9002-fix) portal to ensure you are viewing the most recent updates for your specific region (US, UK, EU, etc.).

| Resource | Purpose | URL |
| :--- | :--- | :--- |
| **A+ Content Manager** | Upload and manage your modules | sellercentral.amazon.com/aplus/manager |
| **A+ Content Guidelines** | Official policy on prohibited claims | [sellercentral.amazon.com/help/hub/reference/G202102960](https://sellercentral.amazon.com/help/hub/reference/G202102960) |
| **Brand Registry Enrollment** | Register your trademark with Amazon | <a href="https://www.amazon.com/s?k=brandservices.amazon.com&tag=jeffzen911-20" rel="sponsored nofollow noopener" target="_blank">brandservices.amazon.com</a> |
| **IP Accelerator** | Find Amazon-approved law firms for trademarks | <a href="https://www.amazon.com/s?k=brandservices.amazon.com%2Fipaccelerator&tag=jeffzen911-20" rel="sponsored nofollow noopener" target="_blank">brandservices.amazon.com/ipaccelerator</a> |
| **Climate [Pledge Friendly](https://pixelmatch.art/blog/policy/amazon-climate-pledge-friendly-image-requirements)** | Requirements for environmental claims | <a href="https://www.amazon.com/s?k=amazon.com%2Fb%3Fnode%3D21221608011&tag=jeffzen911-20" rel="sponsored nofollow noopener" target="_blank">amazon.com/b?node=21221608011</a> |


<!-- pm-cta:foot -->
### Ready to scale your listings?

PixelMatch generates white-background, lifestyle, and variant mockups from a single source photo — built specifically for multi-platform ecommerce sellers. 50 free images on signup, no credit card.

**Start free →**

## Sources
*   Amazon [Seller Central](https://pixelmatch.art/blog/stories/amazon-seller-central-error-code-img-9002-fix): A+ Content Specifications and Images (verified 2026-05-18)
*   Amazon Brand Services: Brand Registry Requirements (verified 2026-05-18)
*   Jungle Scout: Amazon A+ Content Guide for Sellers (updated 2026)
*   Helium 10: Optimizing Amazon A+ Content for Mobile (updated 2026)
*   Adobe: RGB vs CMYK for Web Graphics (Technical Standard)