import { defineCollection, z } from "astro:content";

// Source object as emitted by PublishAgent (grounding URI + title).
const sourceSchema = z.union([
  z.string(),
  z.object({ uri: z.string(), title: z.string().optional() }).passthrough(),
]);

// Ecommerce article frontmatter. The `platform` field is the only ecommerce-
// specific addition vs ntecodex (analogous to ntecodex's `game`). Default
// "multi" handles cross-platform articles that aren't pinned to one channel.
const baseFrontmatter = {
  title: z.string(),
  platform: z.string().default("multi"),     // amazon_fba | shopify | etsy | tiktok_shop | multi
  article_type: z.string(),                  // tool_guide | vs_comparison | use_case | policy_guide
  search_intent: z.string().optional(),      // informational | commercial | transactional | navigational
  featured_tool: z.string().nullable().optional(),
  qa_score: z.number().optional(),
  word_count: z.number().optional(),
  published_at: z.string().optional(),
  published_url: z.string().optional(),
  sources: z.array(sourceSchema).optional(),
  hero_image: z.string().optional(),
  inline_images: z.array(z.string()).optional(),
  inline_image_sections: z.array(z.string()).optional(),
  // Optional 1-2 sentence answer callout rendered above the body so
  // readers get the answer without scrolling. Set in frontmatter by the
  // writer pipeline's outline.py (`quick_answer` field).
  quick_answer: z.string().optional(),
  // When the article body / products list contains affiliate links,
  // ArticleLayout renders the FTC disclosure banner at the top.
  affiliate: z.boolean().optional(),
  // Structured product list for "best X for Y" / vs_comparison round-ups
  // with Amazon affiliate CTAs. ProductRoundup renders them as cards
  // above the prose body. ASIN nullable — never invent.
  products: z
    .array(
      z.object({
        name: z.string(),
        asin: z.string().optional(),
        image: z.string().optional(),
        price_usd: z.number().optional(),
        rating: z.number().optional(),
        review_count: z.number().optional(),
        pros: z.array(z.string()).optional(),
        cons: z.array(z.string()).optional(),
        best_for: z.string().optional(),
        affiliate_url: z.string().optional(),
        verdict: z.string().optional(),
      })
    )
    .optional(),
};

// One collection per ecommerce article_type. Folder names mirror
// PATH_BY_TYPE in publish.py so PublishAgent writes the file straight
// into the right collection.
const learn = defineCollection({
  type: "content",
  schema: z.object(baseFrontmatter),
});

const compare = defineCollection({
  type: "content",
  schema: z.object(baseFrontmatter),
});

const stories = defineCollection({
  type: "content",
  schema: z.object({
    ...baseFrontmatter,
    // use_case-specific: a small structured payload for the
    // results table that ArticleLayout can render above the body.
    seller_profile: z.string().optional(),
    is_composite: z.boolean().optional(),
    key_metrics: z
      .array(
        z.object({
          metric: z.string(),
          before: z.string(),
          after: z.string(),
        }),
      )
      .optional(),
  }),
});

const policy = defineCollection({
  type: "content",
  schema: z.object(baseFrontmatter),
});

export const collections = {
  learn,
  compare,
  stories,
  policy,
};
