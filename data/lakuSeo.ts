export const siteUrl = 'https://lakuculture.id'

export const defaultSeoImage = '/images/laku/optimized/hero-workshop.webp'

export const imageDimensions: Record<string, { width: number; height: number }> = {
  '/images/laku/Laku logo.png': { width: 2172, height: 724 },
  '/images/laku/optimized/craft-detail.webp': { width: 1200, height: 1600 },
  '/images/laku/optimized/hero-workshop.webp': { width: 1280, height: 960 },
  '/images/laku/optimized/table-offering.webp': { width: 900, height: 1200 },
  '/images/laku/optimized/weaving-values.webp': { width: 1600, height: 2133 },
  '/images/laku/20251008_091302.jpg': { width: 4000, height: 3000 },
  '/images/laku/20260810_111236.jpg': { width: 4000, height: 3000 },
  '/images/laku/20260816_090306.jpg': { width: 4000, height: 3000 }
}

export type LandingPageContent = {
  slug: string
  title: string
  description: string
  eyebrow: string
  h1: string
  lead: string
  image: string
  imageAlt: string
  primaryCta: string
  secondaryCta: string
  sections: Array<{
    eyebrow: string
    title: string
    copy: string
    points: string[]
  }>
  faqs: Array<{ question: string; answer: string }>
}

export const landingPages: Record<string, LandingPageContent> = {
  workshops: {
    slug: 'workshops',
    title: 'Lombok Cultural Workshops | LAKU Culture',
    description: 'Book hands-on Indonesian cultural workshops in Mawun, Lombok, including weaving, culinary classes, batik, pottery, bamboo, and rattan experiences.',
    eyebrow: 'Hands-on culture in Mawun',
    h1: 'Lombok Cultural Workshops at LAKU Culture',
    lead: 'Create with local Culture Keepers through weaving, culinary, batik, pottery, bamboo, and rattan workshops built for travelers, families, schools, retreats, and private groups.',
    image: '/images/laku/optimized/craft-detail.webp',
    imageAlt: 'Hands-on craft workshop at LAKU Culture in Mawun, Lombok',
    primaryCta: 'Book a Workshop',
    secondaryCta: 'Visit LAKU First',
    sections: [
      {
        eyebrow: 'Available to book',
        title: 'Weaving and culinary workshops for visitors',
        copy: 'LAKU Culture hosts bookable workshop sessions where guests learn directly from Culture Keepers and leave with a stronger understanding of Indonesian cultural practice.',
        points: ['Nyensek weaving with traditional Lombok textile practice', 'Kecapil hat weaving with natural materials', 'Culinary classes with local ingredients and hospitality']
      },
      {
        eyebrow: 'By request',
        title: 'Custom sessions for your dates and group',
        copy: 'Travelers and partners can request batik, pottery, bamboo, and rattan workshops when the right Culture Keeper and materials are available.',
        points: ['Private sessions for families and retreats', 'School and company cultural programs', 'Beginner-friendly formats with clear take-home outcomes']
      }
    ],
    faqs: [
      { question: 'Do I need to book workshops in advance?', answer: 'Advance inquiry is recommended so LAKU can prepare the right Culture Keeper, materials, timing, and group setup.' },
      { question: 'Are workshops suitable for beginners?', answer: 'Yes. Workshop formats are beginner friendly and guided by Culture Keepers through practical, hands-on steps.' },
      { question: 'Can LAKU host private group workshops?', answer: 'Yes. LAKU can prepare private cultural workshops for families, schools, companies, retreats, hotels, and travel partners.' }
    ]
  },
  visit: {
    slug: 'visit',
    title: 'Visit LAKU Culture in Mawun, Lombok',
    description: 'Plan a visit to LAKU Culture in Mawun, Lombok to meet Culture Keepers, watch Indonesian craft practice, join workshops, and experience living culture.',
    eyebrow: 'Plan your visit',
    h1: 'Visit LAKU Culture in Mawun, Lombok',
    lead: 'LAKU Culture is a place to meet Culture Keepers, observe daily making, join short cultural experiences, and book deeper workshops in Mawun, Lombok.',
    image: '/images/laku/optimized/hero-workshop.webp',
    imageAlt: 'Visitors learning with Culture Keepers at LAKU Culture Lombok',
    primaryCta: 'Plan a Visit',
    secondaryCta: 'See Workshops',
    sections: [
      {
        eyebrow: 'Open experience',
        title: 'Observe, ask, and enter the rhythm of LAKU',
        copy: 'Guests can visit to watch Culture Keepers practice, ask questions, enjoy the atmosphere, and understand the traditions behind the work.',
        points: ['Meet Culture Keepers during active making', 'Learn the stories behind craft, food, and local practice', 'Ask about workshops and programs while onsite']
      },
      {
        eyebrow: 'For travelers',
        title: 'Add a meaningful cultural stop to a Lombok trip',
        copy: 'LAKU is designed for travelers who want more than a photo stop. Visitors can move from observation into hands-on making or longer learning.',
        points: ['Good for families, couples, groups, and solo travelers', 'Located in Mawun, Lombok, Indonesia', 'Workshop booking recommended for planned activities']
      }
    ],
    faqs: [
      { question: 'Where is LAKU Culture?', answer: 'LAKU Culture is located in Mawun, Lombok, Indonesia.' },
      { question: 'Can I visit without booking a workshop?', answer: 'Guests can ask about visiting, but booked workshops and private programs should be arranged in advance.' },
      { question: 'What happens during a visit?', answer: 'Visitors can meet Culture Keepers, observe Indonesian cultural practices, ask questions, and inquire about workshops or longer programs.' }
    ]
  },
  apprenticeship: {
    slug: 'apprenticeship',
    title: 'Living Culture Apprenticeship in Indonesia | LAKU Culture',
    description: 'Apply for a one week to one month living culture apprenticeship at LAKU Culture in Lombok and learn daily practice with Indonesian Culture Keepers.',
    eyebrow: 'Deeper cultural learning',
    h1: 'Living Culture Apprenticeship in Indonesia',
    lead: 'The LAKU apprenticeship is for committed learners who want daily practice with a Culture Keeper over one week, two weeks, three weeks, or one month.',
    image: '/images/laku/optimized/weaving-values.webp',
    imageAlt: 'Traditional weaving practice during a LAKU Culture apprenticeship in Lombok',
    primaryCta: 'Apply for Apprenticeship',
    secondaryCta: 'Ask About Workshops',
    sections: [
      {
        eyebrow: 'Program lengths',
        title: 'One week to one month of living culture practice',
        copy: 'Participants work directly with a Culture Keeper, building skill through repetition, conversation, observation, and daily cultural rhythm.',
        points: ['1 week introduction', '2 and 3 week deeper study', '1 month immersive apprenticeship']
      },
      {
        eyebrow: 'Completion letter',
        title: 'Documented learning with cultural context',
        copy: 'Each participant can receive a personal completion letter describing the traditional skills, cultural context, and daily practice learned during the program.',
        points: ['Direct guidance from a Culture Keeper', 'Practice-based learning instead of passive viewing', 'Useful for students, artists, researchers, and cultural travelers']
      }
    ],
    faqs: [
      { question: 'How long is the apprenticeship?', answer: 'LAKU offers one week, two week, three week, and one month apprenticeship options.' },
      { question: 'Who is the apprenticeship for?', answer: 'It is for committed learners who want deeper cultural practice with Indonesian Culture Keepers in Lombok.' },
      { question: 'Does LAKU provide a completion document?', answer: 'Participants can receive a personal completion letter describing the traditional skills and cultural context learned.' }
    ]
  },
  products: {
    slug: 'products',
    title: 'Handmade Indonesian Craft Products | LAKU Culture Lombok',
    description: 'Discover handmade Indonesian products at LAKU Culture in Lombok with maker stories, traditional materials, and custom order options.',
    eyebrow: 'Handmade products',
    h1: 'Handmade Indonesian Craft Products from LAKU Culture',
    lead: 'LAKU connects handmade Indonesian products with the Culture Keepers, materials, processes, and stories behind each piece.',
    image: '/images/laku/optimized/table-offering.webp',
    imageAlt: 'Handmade Indonesian craft products displayed at LAKU Culture Lombok',
    primaryCta: 'Ask About Products',
    secondaryCta: 'Meet the Makers',
    sections: [
      {
        eyebrow: 'Know the maker',
        title: 'Craft with a visible origin story',
        copy: 'Visitors can understand who made a piece, how it was made, which materials were used, and what cultural practice it belongs to.',
        points: ['Handmade pieces connected to Culture Keepers', 'Traditional materials and process context', 'Good for meaningful gifts and cultural keepsakes']
      },
      {
        eyebrow: 'Custom orders',
        title: 'Request handmade or made-to-order pieces',
        copy: 'Guests, hotels, partners, and collectors can ask about available pieces or custom work from LAKU Culture Keepers.',
        points: ['Shop visit inquiries', 'Made-to-order product requests', 'Partner and hospitality sourcing conversations']
      }
    ],
    faqs: [
      { question: 'Can I buy handmade products at LAKU?', answer: 'Visitors can ask about available handmade pieces, shop visits, and custom orders through the inquiry form or WhatsApp.' },
      { question: 'Are products connected to the makers?', answer: 'Yes. LAKU emphasizes the Culture Keeper, process, materials, and story behind each handmade piece.' },
      { question: 'Can hotels or partners request products?', answer: 'Yes. LAKU can discuss partner sourcing, made-to-order pieces, and handmade products for hospitality or cultural programs.' }
    ]
  },
  faq: {
    slug: 'faq',
    title: 'LAKU Culture FAQ | Visiting, Workshops, Apprenticeships',
    description: 'Answers about visiting LAKU Culture in Lombok, booking Indonesian cultural workshops, applying for apprenticeships, and planning group programs.',
    eyebrow: 'Questions and planning',
    h1: 'LAKU Culture FAQ',
    lead: 'Practical answers for travelers, families, schools, retreats, hotels, and partners planning a visit, workshop, apprenticeship, or cultural program at LAKU.',
    image: '/images/laku/optimized/craft-detail.webp',
    imageAlt: 'Culture Keeper workshop details at LAKU Culture Lombok',
    primaryCta: 'Send an Inquiry',
    secondaryCta: 'Plan a Visit',
    sections: [
      {
        eyebrow: 'Before you come',
        title: 'Planning a visit to LAKU Culture',
        copy: 'LAKU welcomes inquiries from travelers and groups who want to meet Culture Keepers, observe living culture, or book hands-on learning.',
        points: ['Located in Mawun, Lombok, Indonesia', 'Advance booking recommended for workshops', 'Private programs available by request']
      },
      {
        eyebrow: 'What to book',
        title: 'Workshops, apprenticeships, products, and groups',
        copy: 'Use the inquiry form or WhatsApp to share your dates, group size, and interests so LAKU can match the right Culture Keeper and format.',
        points: ['Workshops for short visits', 'Apprenticeships for deeper learning', 'Products and custom cultural programs by inquiry']
      }
    ],
    faqs: [
      { question: 'How do I contact LAKU Culture?', answer: 'Use the inquiry form on the website or WhatsApp LAKU at +62 852-1562-2162.' },
      { question: 'What languages are available?', answer: 'LAKU can support inquiries in English and Indonesian.' },
      { question: 'Can LAKU build custom programs?', answer: 'Yes. LAKU can plan custom programs for schools, companies, hotels, retreats, families, cultural delegations, and travel partners.' }
    ]
  }
}

export const blogPosts = [
  {
    slug: 'lombok-cultural-workshops',
    title: 'How to Choose a Cultural Workshop in Lombok',
    description: 'A practical guide to choosing hands-on cultural workshops in Lombok, from weaving and culinary classes to private group experiences.',
    topic: 'Lombok workshops'
  },
  {
    slug: 'living-culture-apprenticeship',
    title: 'What a Living Culture Apprenticeship Means at LAKU',
    description: 'An introduction to practice-based cultural learning with Culture Keepers through one week to one month apprenticeship programs.',
    topic: 'Apprenticeship'
  },
  {
    slug: 'visit-mawun-lombok-culture',
    title: 'Adding LAKU Culture to a Mawun, Lombok Visit',
    description: 'How travelers can include LAKU Culture in a Mawun trip by observing Culture Keepers, joining workshops, and asking about handmade products.',
    topic: 'Visit planning'
  }
]
