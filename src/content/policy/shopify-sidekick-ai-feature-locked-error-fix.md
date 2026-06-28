---
title: Shopify Sidekick AI Feature Locked Error Fix (2026 Guide)
slug: shopify-sidekick-ai-feature-locked-error-fix
article_type: policy_guide
qa_score: 8.3
word_count: 1866
published_at: "2026-06-28T12:23:00.079070+00:00"
published_url: /blog/policy/shopify-sidekick-ai-feature-locked-error-fix
sources: []
quick_answer: "The Shopify Sidekick 'feature locked' error usually occurs because app generation is restricted to the Grow, Advanced, and Plus plans, or because you are using an unsupported device like an iPad. To fix it, upgrade your plan or switch to a desktop browser."
platform: multi
hero_image: /img/shopify-sidekick-ai-feature-locked-error-fix/hero.webp
inline_images:
  - /img/shopify-sidekick-ai-feature-locked-error-fix/inline-1.webp
  - /img/shopify-sidekick-ai-feature-locked-error-fix/inline-2.webp
  - /img/shopify-sidekick-ai-feature-locked-error-fix/inline-3.webp
  - /img/shopify-sidekick-ai-feature-locked-error-fix/inline-4.webp
  - /img/shopify-sidekick-ai-feature-locked-error-fix/inline-5.webp
inline_image_sections:
  - "Quick Reference Table"
  - "Detailed Requirements"
  - "Common Rejection Reasons"
  - "How to Fix Each Issue"
  - "Official Source Links"
---

Struggling with a "feature locked" message while trying to use Shopify Sidekick can stall your store's optimization and leave you manually handling tasks that AI should be automating. This error typically stems from a mismatch between your current Shopify subscription tier and the specific AI capabilities you are trying to trigger, or a simple hardware incompatibility that hides the Sidekick interface.

## Quick Reference Table

![Quick Reference Table](/img/shopify-sidekick-ai-feature-locked-error-fix/inline-1.webp)

<!-- auto-related -->
*Related: [TikTok Shop AI Image Label Policy (June 2026): Seller Guide](/blog/policy/tiktok-shop-ai-image-label-policy-june-2026-20260628) · [TikTok Shop Product Image Error Code 40029 Fix (2026 Guide)](/blog/policy/tiktok-shop-product-image-error-code-40029-fix-20260627) · [TikTok Symphony Agent for Ecommerce Ads: 2026 Policy Guide](/blog/policy/tiktok-symphony-agent-ecommerce-ads-policy)*


Use this table to identify why your Sidekick features are currently inaccessible and what steps you must take to unlock them.

| Error Trigger | Affected Feature | Immediate Fix |
| :--- | :--- | :--- |
| **Basic Plan Subscription** | App Generation & `@app` commands | Upgrade to the [Grow, Advanced, or Plus plan](https://help.shopify.com/en/manual/shopify-magic/sidekick/generate-app). |
| **iPad or Tablet Usage** | Sidekick Icon & Chat Interface | Switch to a desktop browser (Chrome/Safari) or the official Shopify mobile app. |
| **Active Modal/Dialog Box** | Sidekick Sidebar Visibility | Close all open pop-ups, such as the "Create Discount" or "Edit Product" modals. |
| **Security Scan Failure** | Third-Party App Extensions | Ensure the app developer has passed the required security scan. |

While general chat functions and store data queries are available to most merchants, high-level automation—specifically generating apps or interacting with complex extensions—remains gated behind higher-tier subscriptions.

## Detailed Requirements

![Detailed Requirements](/img/shopify-sidekick-ai-feature-locked-error-fix/inline-2.webp)


Audit your current store setup against Shopify’s 2026 technical requirements to ensure your environment supports the full suite of Sidekick features. 

### Plan-Specific Gating

Shopify differentiates between "General Sidekick Access" and "Advanced AI Generation." If you are on the Shopify Basic plan, you can ask Sidekick to summarize sales data or draft a blog post, but you cannot use it to build functional app components. 

According to official documentation, [generating apps with Sidekick requires the Grow, Advanced, or Shopify Plus plan](https://help.shopify.com/en/manual/shopify-magic/sidekick/generate-app). If you attempt to use the `@app` command or request a custom app build while on a lower tier, the system will return a "feature locked" or "unavailable on your plan" notification. 

As of June 2026, the Shopify Grow plan is priced at $105/month (when billed monthly), while the Advanced plan sits at $399/month. For high-volume sellers, Shopify Plus starts at $2,300/month on a 3-year term. If your workflow depends on AI-generated custom logic or app integrations, verify that your billing cycle reflects one of these three tiers.

### Device and Browser Support

Many sellers encounter the locked feature error simply because they are trying to manage their store on the go. Sidekick is currently [not available on tablet devices, including iPads, or the mobile web admin](https://help.shopify.com/en/manual/shopify-magic/sidekick/getting-started). 

If you log into your Shopify Admin via Safari or Chrome on an iPad, the Sidekick icon may appear grayed out or fail to load entirely. To resolve this, you must use a desktop-class operating system (macOS, Windows, or Linux) with a supported browser. If you must use a mobile device, Sidekick is only accessible through the official Shopify iOS or Android smartphone app, provided your store meets the other plan requirements.

Furthermore, developers building custom extensions for your store must ensure their code is compatible with the AI’s infrastructure. Third-party app extensions must pass a specific extensions/security_scan to be accessible via the Sidekick assistant. If an extension is flagged, Sidekick will block any commands associated with that specific tool to prevent security vulnerabilities.

## Common Rejection Reasons

![Common Rejection Reasons](/img/shopify-sidekick-ai-feature-locked-error-fix/inline-3.webp)


<!-- pm-cta:mid -->
> 💡 **Skip the manual editing.** PixelMatch batch-generates ecommerce-ready product images in 60 seconds — white background, lifestyle scenes, and variant mockups from a single source photo.
> **Try PixelMatch free →**

Identifying the specific "rejection" trigger allows you to fix the error without unnecessary troubleshooting of your internet connection or browser cache.

### Basic Plan App Generation Block

The most frequent cause for the "feature locked" error is attempting to use developer-level commands on a merchant-level plan. Shopify Basic is designed for standard storefront management. When you type a command like "Build me a custom discount app," Sidekick checks your subscription status. Because the underlying compute resources for app generation are intensive, Shopify restricts this to the [Grow tier and above](https://help.shopify.com/en/manual/shopify-magic/sidekick/generate-app).

### Active Dialog Box Interference

Sidekick is context-aware, meaning it "reads" the page you are currently viewing to provide better answers. However, this creates a UI conflict when certain overlays are active. Sidekick becomes temporarily unavailable when a [dialog is open over the main screen](https://help.shopify.com/en/manual/shopify-magic/sidekick/getting-started). 

Common "blocking" modals include:
*   The "Create Discount" pop-up.
*   The bulk product editor overlay.
*   Theme editor setting panels.
*   App-specific configuration windows.

If you see the Sidekick icon disappear or show a lock symbol, check if you have an unsaved change or an open modal in the center of your screen. Sidekick will remain locked until that dialog is closed.

### App Extension Security Errors

For sellers using custom-built tools, the "feature locked" error often relates to the app's backend status. If a custom app extension fails the automated security scan, it receives an Error status in the Shopify Partner Dashboard. When this happens, the app will not appear in Sidekick’s command list, and any attempt to reference it will result in a "Feature Unavailable" message. You can verify the status of your extensions by navigating to the "App bridge" settings in your developer console.

### Visual Search Limitations

A subtle but frustrating "lock" occurs when merchants ask Sidekick to perform visual tasks it isn't built for. Sidekick cannot currently search through image files in the content library based on visual descriptions (e.g., "Find all photos with a red dress"). When merchants try to push Sidekick into heavy visual asset management, the AI often returns a generic error or stalls. This isn't a bug in your plan; it is a limitation of the current Sidekick LLM (Large Language Model) which is optimized for text and data, not pixel-level image manipulation or batch generation.

## How to Fix Each Issue

![How to Fix Each Issue](/img/shopify-sidekick-ai-feature-locked-error-fix/inline-4.webp)


Follow these steps to restore Sidekick functionality and bridge the gap where Shopify’s native AI reaches its limits.

### Resolving Plan Restrictions

If your business requires the `@app` generation feature, you must manually trigger a plan upgrade. 

1.  Log into your Shopify Admin.
2.  Go to **Settings > Plan**.
3.  Select **Change Plan**.
4.  Choose the [Grow, Advanced, or Plus plan](https://help.shopify.com/en/manual/shopify-magic/sidekick/generate-app). 
5.  Confirm your payment method. Shopify typically bills the prorated difference immediately.

Once the upgrade is processed, refresh your browser. The Sidekick command bar should now recognize developer-level prompts. Note that Shopify Plus merchants may need to contact their Merchant Success Manager to ensure all AI "Magic" features are toggled on for their specific organization.

### Fixing UI and Device Conflicts

If your plan is correct but the feature remains locked, clear your workspace. Sidekick requires a "clean" view of the Shopify Admin to operate.

*   **Close Modals:** Ensure no "Unsaved Changes" banners or pop-up windows are active. If you are in the middle of editing a product, save your work and return to the main Product list.
*   **Switch to Desktop:** If you are on an iPad, move to a laptop or desktop computer. Even if you use "Request Desktop Site" on a tablet, the [Sidekick sidebar](https://help.shopify.com/en/manual/shopify-magic/sidekick/getting-started) often fails to render because it cannot detect a physical mouse/keyboard environment required for certain AI interactions.
*   **Check Browser Extensions:** Disable ad-blockers or "dark mode" extensions that might be masking the Sidekick icon or preventing the chat window from expanding.

### Handling AI Image Generation Externally

Sidekick is an administrative assistant, not a dedicated creative studio. If you find yourself "locked" out of visual tasks—such as batch-generating lifestyle backgrounds for 50 new SKUs—you need a specialized tool. 

PixelMatch is designed to handle the high-volume visual workflows that Sidekick currently ignores. While Sidekick can help you write the product description for a new watch, PixelMatch can batch-generate AI product images for that watch, placing it in hundreds of different lifestyle settings (a cafe, a boardroom, a hiking trail) in seconds.

By offloading image generation to PixelMatch, you avoid hitting the "limitations" wall in Shopify Sidekick. You can then upload these high-quality, AI-generated assets back into Shopify, where Sidekick can help you organize them into collections or SEO-optimize their alt-text.

## Official Source Links

![Official Source Links](/img/shopify-sidekick-ai-feature-locked-error-fix/inline-5.webp)


Refer to these official documents to verify the latest 2026 specs and policy updates directly from Shopify.

| Resource | Link |
| :--- | :--- |
| **App Generation Requirements** | [Generating apps with Sidekick (Shopify Help Center)](https://help.shopify.com/en/manual/shopify-magic/sidekick/generate-app) |
| **Getting Started Guide** | [Getting started with Sidekick (Shopify Help Center)](https://help.shopify.com/en/manual/shopify-magic/sidekick/getting-started) |
| **Developer Documentation** | Sidekick app extensions (Shopify Dev Docs) |
| **Shopify Pricing Tiers** | Official Shopify Pricing & Plans |

## Frequently Asked Questions

### Why is the Sidekick icon grayed out in my Shopify Admin?
The Sidekick icon usually grays out when an active dialog box or modal is open on your screen. Shopify prevents the AI from running when you are in the middle of a specific task, like configuring a discount or editing a product's variants, to avoid data conflicts. Close the modal or save your changes to reactivate the icon.

### Does Shopify Sidekick work on the iPad Pro?
No, Sidekick is currently [not supported on tablet devices](https://help.shopify.com/en/manual/shopify-magic/sidekick/getting-started), including the iPad Pro. While you can access the Shopify Admin via a tablet browser, the Sidekick interface is restricted to desktop browsers and the official Shopify mobile app for smartphones.

### Can I use Sidekick to generate product photos?
Sidekick is primarily a text and data assistant. It can help you write descriptions or analyze sales, but it does not have the capability to batch-generate or edit product photography. For high-volume AI image generation, sellers typically use specialized tools like PixelMatch to create lifestyle backgrounds and then upload those files to Shopify.

### How do I fix a "Security Scan Failed" error for a Sidekick extension?
This error must be fixed by the app developer. The extension must pass the Shopify security scan before Sidekick is allowed to interact with it. If you are the developer, check your Partner Dashboard for specific error logs regarding your extension's TOML configuration or hosting security.

### Is Sidekick free for all Shopify plans?
General chat and store management features are available to most merchants, but advanced capabilities like generating custom apps are [restricted to the Grow, Advanced, and Plus plans](https://help.shopify.com/en/manual/shopify-magic/sidekick/generate-app). If you are on the Basic plan, you will see a "feature locked" error when trying to use these specific developer-level commands.


<!-- pm-cta:foot -->
### Ready to scale your listings?

PixelMatch generates white-background, lifestyle, and variant mockups from a single source photo — built specifically for multi-platform ecommerce sellers. 50 free images on signup, no credit card.

**Start free →**

## Sources

*   Shopify Help Center: [Generating apps with Sidekick](https://help.shopify.com/en/manual/shopify-magic/sidekick/generate-app)
*   Shopify Help Center: [Getting started with Sidekick](https://help.shopify.com/en/manual/shopify-magic/sidekick/getting-started)
*   Shopify Dev Docs: Sidekick app extensions and security scans
*   Shopify Official Site: Pricing Plans and Feature Comparison