// ─────────────────────────────────────────────────────────────
// BLOG DATA (temporary frontend source)
//
// This is the single source of truth for the blog listing + detail
// pages until the Django backend exposes its blog API. When the
// backend is ready, replace the reads below (getAllPosts / getPostBySlug
// / getRelatedPosts) with `fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog/...`)`
// calls — the component contract (fields used by the UI) stays the same:
//
//   Post = {
//     slug, title, excerpt, category, date, readTime, image,
//     author: { name, initials },
//     content: Block[]           // ordered article body
//   }
//   Block =
//     | { type: "paragraph", text }
//     | { type: "heading",   text }
//     | { type: "list",      items: string[] }
//     | { type: "quote",     text }
//
// Backend contract (proposed):
//   GET {API_URL}/api/blog/           → Post[] (without `content`, listing)
//   GET {API_URL}/api/blog/{slug}/    → Post   (with `content`, detail)
// ─────────────────────────────────────────────────────────────

const AUTHOR = { name: "Two Core Team", initials: "TC" };

export const POSTS = [
  {
    slug: "website-design-trends-2026",
    title: "10 Website Design Trends Defining 2026",
    excerpt:
      "From AI-personalized layouts to motion-first storytelling — the design patterns winning attention (and conversions) this year.",
    category: "Web Development",
    date: "Jun 28, 2026",
    readTime: "6 min read",
    image: "/assets/web-development-banner.png",
    featured: true,
    author: AUTHOR,
    content: [
      {
        type: "paragraph",
        text: "Web design in 2026 is less about decoration and more about direction. The sites that stand out aren't the flashiest — they're the ones that guide attention, load instantly, and feel alive without getting in the way. Here are the trends shaping the web this year, and how to use them without chasing novelty for its own sake.",
      },
      { type: "heading", text: "1. Motion-first storytelling" },
      {
        type: "paragraph",
        text: "Scroll-triggered animation has matured from gimmick to grammar. Used well, motion signals hierarchy — it tells the eye where to go next. The key is restraint: one deliberate reveal beats ten competing ones.",
      },
      { type: "heading", text: "2. AI-personalized layouts" },
      {
        type: "paragraph",
        text: "Pages increasingly adapt to who's viewing them — reordering sections, swapping hero copy, and surfacing the offer most relevant to each visitor. The design challenge is building a system flexible enough to rearrange while still feeling intentional.",
      },
      {
        type: "list",
        items: [
          "Bold, oversized typography as the primary visual anchor",
          "High-contrast neon accents against deep, dark backgrounds",
          "Glassmorphism and subtle grain for depth without heavy imagery",
          "Micro-interactions that reward every hover and click",
        ],
      },
      {
        type: "quote",
        text: "The best design in 2026 is invisible — you feel it working before you notice it.",
      },
      { type: "heading", text: "Where to start" },
      {
        type: "paragraph",
        text: "Pick one trend that maps to a real goal — faster comprehension, higher trust, more conversions — and implement it end to end before adding the next. Trends are a menu, not a checklist.",
      },
    ],
  },
  {
    slug: "seo-in-an-ai-first-search-era",
    title: "SEO in an AI-First Search Era",
    excerpt:
      "Google's answer engines are rewriting the rules. Here's how to structure content that still ranks — and gets cited.",
    category: "SEO",
    date: "Jun 21, 2026",
    readTime: "7 min read",
    image: "/assets/seo-banner.png",
    author: AUTHOR,
    content: [
      {
        type: "paragraph",
        text: "Search no longer ends with ten blue links. AI answer engines summarize, synthesize, and cite — which means the goal has shifted from ranking a page to becoming the source an answer is built from. The fundamentals still matter, but how you apply them has changed.",
      },
      { type: "heading", text: "Write to be quoted" },
      {
        type: "paragraph",
        text: "Answer engines pull clear, self-contained statements. Lead sections with a direct answer, then support it. Content that buries the point three paragraphs deep rarely gets cited.",
      },
      {
        type: "list",
        items: [
          "Structure content around real questions people ask",
          "Use clean headings so machines can parse your hierarchy",
          "Add structured data (schema) to remove ambiguity",
          "Keep facts current — stale content loses trust fast",
        ],
      },
      { type: "heading", text: "Authority still wins" },
      {
        type: "paragraph",
        text: "AI systems weight sources they can trust. Depth, original insight, and genuine expertise are harder to fake than ever — and more rewarded. Thin, templated content is the first thing these systems discard.",
      },
      {
        type: "quote",
        text: "You don't rank in an AI era — you get cited. Write to earn the citation.",
      },
    ],
  },
  {
    slug: "social-strategy-that-converts",
    title: "Building a Social Strategy That Actually Converts",
    excerpt:
      "Followers are vanity. Pipeline is the metric that matters — a practical framework for social that pays for itself.",
    category: "Marketing",
    date: "Jun 14, 2026",
    readTime: "5 min read",
    image: "/assets/social-media-banner.png",
    author: AUTHOR,
    content: [
      {
        type: "paragraph",
        text: "Most social strategies optimize for the wrong number. Follower counts feel good but rarely pay rent. A strategy that converts starts from the bottom of the funnel and works up.",
      },
      { type: "heading", text: "Start with the outcome" },
      {
        type: "paragraph",
        text: "Define the action you want — a booked call, a signup, a sale — then reverse-engineer the content that leads there. Every post should have a job.",
      },
      {
        type: "list",
        items: [
          "Attract with value, not just reach",
          "Nurture with proof: results, cases, testimonials",
          "Convert with a clear, low-friction next step",
        ],
      },
      {
        type: "quote",
        text: "Vanity metrics grow your ego. Conversion metrics grow your business.",
      },
      { type: "heading", text: "Measure what matters" },
      {
        type: "paragraph",
        text: "Track the path from impression to action, not just likes. When you can see which content drives pipeline, you stop guessing and start compounding.",
      },
    ],
  },
  {
    slug: "great-ui-ux-is-your-best-growth-lever",
    title: "Why Great UI/UX Is Your Best Growth Lever",
    excerpt:
      "Small friction costs compound fast. A look at the UX decisions with outsized impact on retention and revenue.",
    category: "Design & Branding",
    date: "Jun 07, 2026",
    readTime: "6 min read",
    image: "/assets/uiux-banner.png",
    author: AUTHOR,
    content: [
      {
        type: "paragraph",
        text: "Growth teams obsess over acquisition, but the cheapest growth lever is usually the one already in front of you: the experience. Every point of friction is a silent tax on every visitor you've already paid to bring in.",
      },
      { type: "heading", text: "Friction compounds" },
      {
        type: "paragraph",
        text: "A confusing form, a slow page, an unclear next step — none feel catastrophic alone. Stacked across a funnel, they quietly halve your conversion rate.",
      },
      {
        type: "list",
        items: [
          "Remove steps before you optimize the ones that remain",
          "Make the primary action the most obvious thing on the page",
          "Design the empty, loading, and error states — not just the happy path",
        ],
      },
      {
        type: "quote",
        text: "You can't out-market a bad experience. Fix the funnel before you fill it.",
      },
      { type: "heading", text: "Where to look first" },
      {
        type: "paragraph",
        text: "Start where intent is highest — checkout, signup, onboarding. A 5% lift there beats a 50% lift on a page nobody converts on.",
      },
    ],
  },
  {
    slug: "ecommerce-ux-mistakes-costing-you-sales",
    title: "5 Ecommerce UX Mistakes Costing You Sales",
    excerpt:
      "Cart abandonment isn't always about price. These five friction points quietly drain revenue on most storefronts.",
    category: "Web Development",
    date: "May 30, 2026",
    readTime: "5 min read",
    image: "/assets/ecommerce-banner.png",
    author: AUTHOR,
    content: [
      {
        type: "paragraph",
        text: "When sales dip, the instinct is to discount. But most abandoned carts aren't a pricing problem — they're an experience problem. Here are five mistakes we see on nearly every storefront we audit.",
      },
      {
        type: "list",
        items: [
          "Forcing account creation before checkout",
          "Hiding shipping costs until the final step",
          "Slow, image-heavy product pages on mobile",
          "Too many form fields at checkout",
          "No visible trust signals near the buy button",
        ],
      },
      { type: "heading", text: "Fix the checkout first" },
      {
        type: "paragraph",
        text: "Checkout is where intent is highest and friction is most expensive. Offer guest checkout, show total cost early, and cut every field you don't strictly need.",
      },
      {
        type: "quote",
        text: "A shopper who reached checkout already said yes. Don't give them a reason to change their mind.",
      },
    ],
  },
  {
    slug: "native-vs-cross-platform-mobile-stack",
    title: "Native vs Cross-Platform: Picking the Right Mobile Stack",
    excerpt:
      "Speed to market or best-in-class performance? A practical decision framework for your next mobile build.",
    category: "Mobile Apps",
    date: "May 23, 2026",
    readTime: "8 min read",
    image: "/assets/mobileapp-banner.png",
    author: AUTHOR,
    content: [
      {
        type: "paragraph",
        text: "The native-versus-cross-platform debate rarely has a universal winner — it has a right answer for your specific constraints. The trick is knowing which constraints actually matter for your product.",
      },
      { type: "heading", text: "Choose cross-platform when…" },
      {
        type: "list",
        items: [
          "Speed to market matters more than squeezing every frame",
          "Your team is small and shipping to both platforms at once",
          "The app is content- and form-driven, not hardware-heavy",
        ],
      },
      { type: "heading", text: "Choose native when…" },
      {
        type: "list",
        items: [
          "You need deep hardware or platform-specific capabilities",
          "Performance and animation fidelity are core to the product",
          "You're building for the long haul with platform-specialist teams",
        ],
      },
      {
        type: "quote",
        text: "The best stack is the one your team can ship and maintain — not the one that wins arguments online.",
      },
    ],
  },
  {
    slug: "automating-your-sales-funnel-with-crm",
    title: "Automating Your Sales Funnel With CRM Workflows",
    excerpt:
      "Stop losing leads in the gaps. How the right automation turns a leaky funnel into a predictable pipeline.",
    category: "Marketing",
    date: "May 16, 2026",
    readTime: "6 min read",
    image: "/assets/crm-banner.png",
    author: AUTHOR,
    content: [
      {
        type: "paragraph",
        text: "Leads rarely vanish because they weren't interested — they vanish because nobody followed up in time. CRM automation closes those gaps so no opportunity slips through while your team sleeps.",
      },
      { type: "heading", text: "Automate the follow-up, not the relationship" },
      {
        type: "paragraph",
        text: "Automation should buy your team time for the conversations that matter — not replace them. Use it to route, remind, and nurture; keep the human touch where it counts.",
      },
      {
        type: "list",
        items: [
          "Instant lead capture and assignment — no manual triage",
          "Timed nurture sequences that stay warm without nagging",
          "Automatic reminders so no follow-up is ever forgotten",
        ],
      },
      {
        type: "quote",
        text: "A predictable pipeline isn't luck — it's a system that never forgets to follow up.",
      },
    ],
  },
  {
    slug: "maximizing-roi-paid-ads-guide",
    title: "Maximizing ROI: A Practical Guide to Paid Ads",
    excerpt:
      "Budget isn't the bottleneck — targeting and creative iteration are. A no-fluff playbook for profitable ad spend.",
    category: "Marketing",
    date: "May 09, 2026",
    readTime: "7 min read",
    image: "/assets/paidadvertising-banner.png",
    author: AUTHOR,
    content: [
      {
        type: "paragraph",
        text: "Throwing more money at underperforming ads just loses it faster. Profitable paid advertising comes from sharper targeting and relentless creative iteration — not a bigger budget.",
      },
      { type: "heading", text: "Creative is the real lever" },
      {
        type: "paragraph",
        text: "In mature ad platforms, the algorithm handles most of the targeting. Your edge is the creative: the hook, the offer, the proof. Test more variations, kill losers fast, scale winners.",
      },
      {
        type: "list",
        items: [
          "Start with a clear, measurable goal per campaign",
          "Test one variable at a time so you learn what worked",
          "Cut spend on losers early — don't wait for a miracle",
          "Reinvest into the creative and audience that convert",
        ],
      },
      {
        type: "quote",
        text: "Ad budgets don't fail businesses. Bad offers and untested creative do.",
      },
    ],
  },
  {
    slug: "brand-identity-101",
    title: "Brand Identity 101: Building a Brand That Sticks",
    excerpt:
      "Logos are the beginning, not the point. What actually makes a brand memorable — and defensible — over time.",
    category: "Design & Branding",
    date: "May 02, 2026",
    readTime: "5 min read",
    image: "/assets/marketing_banner.png",
    author: AUTHOR,
    content: [
      {
        type: "paragraph",
        text: "A logo is where brand identity starts, not where it ends. The brands that stick are consistent, distinctive, and clear about what they stand for — long after the logo has faded into the background.",
      },
      { type: "heading", text: "Identity is a system, not a symbol" },
      {
        type: "paragraph",
        text: "Color, type, voice, and imagery working together create recognition. When every touchpoint feels like the same brand, trust compounds.",
      },
      {
        type: "list",
        items: [
          "A distinct visual system, not just a mark",
          "A voice that sounds like a real point of view",
          "Consistency across every single touchpoint",
        ],
      },
      {
        type: "quote",
        text: "A brand isn't what you say it is — it's what people remember when you're not in the room.",
      },
      { type: "heading", text: "Build for the long game" },
      {
        type: "paragraph",
        text: "Trends fade; a strong identity compounds. Invest in a system you can grow into, and resist the urge to redesign every time the wind shifts.",
      },
    ],
  },
];

// ── Read helpers (swap these bodies for API calls when backend is live) ──

export function getAllPosts() {
  return POSTS;
}

export function getPostBySlug(slug) {
  return POSTS.find((p) => p.slug === slug) || null;
}

export function getAllSlugs() {
  return POSTS.map((p) => p.slug);
}

// Related = same category first, then fill with most-recent others.
export function getRelatedPosts(slug, limit = 3) {
  const current = getPostBySlug(slug);
  if (!current) return [];
  const sameCategory = POSTS.filter(
    (p) => p.slug !== slug && p.category === current.category
  );
  const others = POSTS.filter(
    (p) => p.slug !== slug && p.category !== current.category
  );
  return [...sameCategory, ...others].slice(0, limit);
}
