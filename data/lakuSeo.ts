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


export type SeoAudience = {
  name: string
  intent: string
  conversionAction: string
  queries: string[]
}

export type SeoArticleSection = {
  heading: string
  paragraphs: string[]
}

export type BlogPost = {
  slug: string
  title: string
  description: string
  topic: string
  audience: string
  intentQuery: string
  primaryKeyword: string
  secondaryKeywords: string[]
  conversionAction: string
  image: string
  imageAlt: string
  internalLinks: Array<{ label: string; href: string }>
  sections: SeoArticleSection[]
  faqs: Array<{ question: string; answer: string }>
}

export const seoAudiences: SeoAudience[] = [
  {
    name: 'Young couples',
    intent: 'Couples searching for a meaningful, relaxed date activity between Kuta, Mawun, and Selong Belanak.',
    conversionAction: 'Plan a private or semi-private workshop visit.',
    queries: ['things to do in Lombok for couples', 'romantic cultural experience Lombok', 'Kuta Lombok date activity']
  },
  {
    name: 'Young families with children aged 3-7',
    intent: 'Parents looking for short, gentle, hands-on activities that feel safe, shaded, and memorable for young children.',
    conversionAction: 'Ask LAKU to match a child-friendly workshop format to the family schedule.',
    queries: ['things to do in Lombok with toddlers', 'family activities Kuta Lombok kids', 'children workshop Lombok']
  },
  {
    name: 'Families with children aged 8-16',
    intent: 'Families seeking deeper learning, craft, culture, and screen-free activities for older children and teenagers.',
    conversionAction: 'Book a family workshop or short apprenticeship-style session.',
    queries: ['educational activities Lombok for kids', 'teen activities Lombok culture', 'Lombok workshops for families']
  },
  {
    name: 'Young solo travelers',
    intent: 'Solo travelers searching for authentic Lombok experiences where they can meet people and do something purposeful.',
    conversionAction: 'Join a hands-on workshop, visit Culture Keepers, or inquire about apprenticeship dates.',
    queries: ['solo travel Lombok things to do', 'authentic Lombok cultural experience', 'workshops in Kuta Lombok']
  },
  {
    name: 'Expat families, couples, and single nomads living near Kuta, Selong Belanak, and Mawun',
    intent: 'Lombok residents looking for repeatable weekend plans, visiting-guest activities, local learning, and community connection.',
    conversionAction: 'Use LAKU as a local cultural stop, family activity, guest outing, or recurring workshop plan.',
    queries: ['things to do near Kuta Lombok expats', 'activities near Selong Belanak', 'weekend activities Lombok families']
  }
]

export const successfulSeoArticleCriteria = [
  'Answer one high-intent search query completely before asking the reader to act.',
  'Target 1,000-1,600 words for cornerstone conversion articles and 800-1,200 words for narrower support articles.',
  'Use one primary keyword in the title, meta description, first paragraph, one H2, image alt text, and closing CTA, then use natural variations instead of keyword stuffing.',
  'Keep primary keyword use natural, usually 5-9 clear mentions in a full article, with secondary keywords distributed across headings, FAQs, and body copy.',
  'Include at least 3 internal links to relevant conversion pages such as Visit, Workshops, Apprenticeship, Products, FAQ, and Inquiry.',
  'Add FAQ sections that match real pre-booking objections: age suitability, time, booking, location, weather, group size, and what guests take home.',
  'Show experience, trust, and practical local context: Mawun location, Kuta and Selong Belanak proximity, Culture Keepers, materials, and who each activity fits.',
  'Use descriptive titles under 60 characters where possible and meta descriptions around 140-160 characters with a clear reason to click.',
  'Earn backlinks through useful local guides, partner pages, hotel concierge resources, family travel itineraries, school trip resources, and Lombok relocation guides.'
]


export const audienceFaqs = [
  { question: 'Where is LAKU Culture located?', answer: 'LAKU Culture is in Mawun, Lombok, positioned between Kuta Lombok and Selong Belanak for travelers and residents moving through South Lombok.' },
  { question: 'Who is LAKU best for?', answer: 'LAKU is built for couples, families with young children, families with older children and teens, solo travelers, expat residents, nomads, schools, retreats, hotels, and travel partners.' },
  { question: 'Is LAKU suitable for young couples?', answer: 'Yes. Couples can plan a relaxed cultural date, private or semi-private workshop, anniversary activity, honeymoon stop, or meaningful alternative to another beach or dinner plan.' },
  { question: 'Can children aged 3-7 join LAKU activities?', answer: 'Yes, by request. Parents should share ages in advance so LAKU can recommend shorter, gentler, hands-on formats with suitable materials and timing.' },
  { question: 'What can children aged 8-16 do at LAKU?', answer: 'Older children and teens can join deeper workshop formats such as weaving, batik, pottery, bamboo, rattan, or culinary classes depending on Culture Keeper availability.' },
  { question: 'Is LAKU good for solo travelers?', answer: 'Yes. Solo travelers can join workshops, visit Culture Keepers, inquire about group availability, or apply for a longer living culture apprenticeship.' },
  { question: 'Is LAKU useful for expats and digital nomads living in Lombok?', answer: 'Yes. LAKU can be a weekend activity, visiting-guest outing, family plan, date idea, learning experience, or recurring cultural connection for residents near Kuta, Mawun, and Selong Belanak.' },
  { question: 'Do we need to book in advance?', answer: 'Advance inquiry is recommended for workshops, families, private sessions, and group programs so LAKU can prepare the right Culture Keeper, materials, and schedule.' },
  { question: 'Can we visit without booking a workshop?', answer: 'Visitors can inquire about simple visits, but planned workshops and private programs should be arranged in advance for the best experience.' },
  { question: 'What workshops are available at LAKU?', answer: 'LAKU offers or can arrange cultural workshops including Nyensek weaving, kecapil hat weaving, culinary classes, batik, pottery, bamboo, and rattan depending on date and availability.' },
  { question: 'How long does a workshop take?', answer: 'Duration depends on the activity, age group, and private or group format. Share your schedule when inquiring and LAKU will recommend a realistic session length.' },
  { question: 'Can families with mixed ages join together?', answer: 'Yes. Share all child ages and adult count so LAKU can suggest a family format that keeps younger children comfortable and older children engaged.' },
  { question: 'Can LAKU host private groups?', answer: 'Yes. LAKU can plan private cultural programs for families, schools, companies, hotels, retreats, travel partners, and visiting delegations.' },
  { question: 'Can guests take home what they make?', answer: 'Many workshop formats include a handmade piece or clear take-home outcome. Some materials may need drying, finishing, or later collection, so confirm during booking.' },
  { question: 'What should we bring?', answer: 'Wear comfortable clothes, bring water, and arrive ready to use your hands. For children, bring anything they normally need for comfort, sun, or snack routines.' },
  { question: 'What happens if it rains?', answer: 'Ask LAKU when booking. Many cultural activities can work as shaded or semi-indoor experiences, but format and timing may depend on the weather and materials.' },
  { question: 'Can LAKU support school or educational visits?', answer: 'Yes. Share the age range, learning goals, group size, and preferred dates so LAKU can recommend a Culture Keeper-led program with appropriate context.' },
  { question: 'How do we contact LAKU?', answer: 'Use the inquiry form on the website or WhatsApp LAKU at +62 852-1562-2162 with your dates, group size, ages, and activity interests.' }
]

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
    faqs: audienceFaqs
  }
}


const sharedInternalLinks = [
  { label: 'Plan a visit', href: '/visit' },
  { label: 'Book a workshop', href: '/workshops' },
  { label: 'Send an inquiry', href: '/#inquiry' },
  { label: 'Read the FAQ', href: '/faq' }
]

const makePost = (post: BlogPost) => post

export const blogPosts: BlogPost[] = [
  makePost({
    slug: 'things-to-do-lombok-couples-culture',
    title: 'Things to Do in Lombok for Couples Who Want More Than a Beach Day',
    description: 'Plan a meaningful couple activity in Lombok with a hands-on cultural workshop at LAKU Culture between Kuta and Selong Belanak.',
    topic: 'Couples',
    audience: 'Young couples',
    intentQuery: 'things to do in Lombok for couples',
    primaryKeyword: 'things to do in Lombok for couples',
    secondaryKeywords: ['romantic cultural experience Lombok', 'Kuta Lombok date activity', 'Mawun cultural workshop'],
    conversionAction: 'Plan a private or semi-private LAKU workshop visit.',
    image: '/images/laku/optimized/hero-workshop.webp',
    imageAlt: 'Couples joining a hands-on cultural workshop in Lombok at LAKU Culture',
    internalLinks: sharedInternalLinks,
    sections: [
      { heading: 'A better couple plan between Kuta and Selong Belanak', paragraphs: ['If you are searching for things to do in Lombok for couples, the usual list gets repetitive quickly: beach, sunset, dinner, repeat. Those are beautiful parts of South Lombok, but they do not always create a shared memory you can carry home. LAKU Culture gives couples a slower plan in Mawun, right between Kuta and Selong Belanak, where the date is built around making, tasting, listening, and learning together.', 'The best couple experiences have enough structure to feel special and enough ease to feel natural. A cultural workshop gives you both. You arrive with a simple intention, meet a Culture Keeper, learn the story behind a living Indonesian tradition, then create something with your hands. It feels personal without needing to be overly formal.'] },
      { heading: 'Why a hands-on workshop works for couples', paragraphs: ['A workshop changes the energy of a date because you are not only sitting across from each other. You are doing something side by side. Weaving, culinary sessions, batik, pottery, bamboo, or rattan practice all create moments of conversation, focus, and laughter. There is a real object, flavor, or skill at the center of the experience, so the date never has to rely on forced small talk.', 'For couples visiting Lombok, this is also a way to understand the island beyond the coastline. You get local context from the Culture Keeper, learn why certain materials matter, and see how Indonesian culture lives through daily practice.'] },
      { heading: 'How to plan the visit', paragraphs: ['Share your preferred date, time, and comfort level when you inquire. If you want a calm date, ask for a private or semi-private format. If you are already staying in Kuta, Selong Belanak, Torok, Are Guling, or Mawun, LAKU is easy to add before lunch, after the beach, or as a late afternoon cultural stop.', 'The strongest plan is simple: arrive without rushing, choose one workshop focus, leave time to enjoy the setting, and ask about handmade products if you want a meaningful keepsake.'] },
      { heading: 'Turn intention into action', paragraphs: ['For couples who want a romantic cultural experience in Lombok, LAKU is most useful when you book with a clear purpose: a date, anniversary, proposal-week activity, honeymoon stop, or shared travel memory. Send your dates through the inquiry form and LAKU can suggest the best workshop format for your timing.'] }
    ],
    faqs: [
      { question: 'Is LAKU suitable for a couple date?', answer: 'Yes. Couples can request a calm, hands-on workshop or visit format that feels personal and relaxed.' },
      { question: 'How far is LAKU from Kuta or Selong Belanak?', answer: 'LAKU is in Mawun, positioned between Kuta Lombok and Selong Belanak, making it easy to combine with a South Lombok day plan.' },
      { question: 'Should couples book in advance?', answer: 'Advance inquiry is recommended so LAKU can prepare the right Culture Keeper, materials, and timing.' }
    ]
  }),
  makePost({
    slug: 'romantic-cultural-experience-lombok',
    title: 'A Romantic Cultural Experience in Lombok That Still Feels Real',
    description: 'A guide for couples looking for a romantic Lombok experience with craft, food, tradition, and local atmosphere instead of a staged show.',
    topic: 'Couples',
    audience: 'Young couples',
    intentQuery: 'romantic cultural experience Lombok',
    primaryKeyword: 'romantic cultural experience Lombok',
    secondaryKeywords: ['Lombok couples activity', 'authentic Lombok experience', 'LAKU Culture Mawun'],
    conversionAction: 'Inquire about a couple-friendly workshop or cultural visit.',
    image: '/images/laku/optimized/table-offering.webp',
    imageAlt: 'Traditional Indonesian drinks and handmade details for a romantic cultural experience in Lombok',
    internalLinks: sharedInternalLinks,
    sections: [
      { heading: 'Romance does not have to mean staged', paragraphs: ['A romantic cultural experience in Lombok should feel intimate, warm, and grounded in the place you came to visit. Many couples want something more memorable than another dinner reservation, but they also do not want a tourist performance built only for photos. LAKU Culture is designed for that middle space: beautiful, calm, participatory, and real.', 'In Mawun, the setting gives couples time to slow down. Traditional materials, handmade objects, Indonesian drinks, and the presence of Culture Keepers create an atmosphere where the experience feels connected to daily life rather than staged entertainment.'] },
      { heading: 'What couples can do at LAKU', paragraphs: ['Couples can ask about weaving, culinary classes, batik, pottery, bamboo, or rattan workshops depending on availability. The point is not perfection. The point is to sit with a tradition long enough to understand it, try it, and leave with a memory that belongs to both of you.', 'A couple session can be especially strong for honeymooners, anniversary trips, destination weddings, and travelers who prefer thoughtful experiences over crowded attractions.'] },
      { heading: 'Best timing for a couple itinerary', paragraphs: ['LAKU works well as a morning cultural stop before the beach, a shaded midday experience, or a late afternoon plan before dinner in Kuta. If you are staying around Selong Belanak, Kuta, Mawun, or Are Guling, it can fit naturally into a South Lombok route.', 'When you inquire, mention whether you want quiet time, photos, food-focused learning, or a craft you can take home. That helps the team shape the experience around the intention.'] },
      { heading: 'Book the experience around the feeling you want', paragraphs: ['The best romantic cultural experience in Lombok is not just an activity. It is a feeling: present, connected, curious, and unhurried. Send LAKU your dates and ask for a couple-friendly cultural workshop if that is the travel memory you want to create.'] }
    ],
    faqs: [
      { question: 'Can LAKU prepare a private couple session?', answer: 'Private or semi-private formats can be requested, depending on Culture Keeper availability and schedule.' },
      { question: 'Is the experience more active or relaxed?', answer: 'It can be shaped either way. Most couple sessions are relaxed but hands-on, with time to talk and learn.' },
      { question: 'Can we take something home?', answer: 'Many workshop formats include a handmade piece or a clear take-home outcome. Ask when booking.' }
    ]
  }),
  makePost({
    slug: 'kuta-lombok-date-activity-laku',
    title: 'A Kuta Lombok Date Activity Worth Leaving the Main Street For',
    description: 'Couples staying in Kuta Lombok can plan a short cultural date at LAKU in Mawun with workshops, local craft, and Indonesian flavors.',
    topic: 'Couples',
    audience: 'Young couples',
    intentQuery: 'Kuta Lombok date activity',
    primaryKeyword: 'Kuta Lombok date activity',
    secondaryKeywords: ['things to do near Kuta Lombok couples', 'Mawun workshop', 'Lombok cultural date'],
    conversionAction: 'Add LAKU to a Kuta-based day plan.',
    image: '/images/laku/optimized/craft-detail.webp',
    imageAlt: 'Hands-on craft detail for a Kuta Lombok date activity at LAKU Culture',
    internalLinks: sharedInternalLinks,
    sections: [
      { heading: 'When dinner is too easy and another beach is too obvious', paragraphs: ['A good Kuta Lombok date activity should give you a reason to leave the busy strip and come back with a story. LAKU Culture sits in Mawun, close enough to Kuta for an easy plan but far enough to shift the mood. Instead of another cafe stop, couples can join a workshop, meet Culture Keepers, and experience Indonesian traditions through doing.', 'This makes LAKU useful for couples who have already surfed, eaten, and watched the sunset. It adds a quieter cultural layer to the trip.'] },
      { heading: 'Build the date around one shared activity', paragraphs: ['Choose one activity rather than trying to do everything. A weaving session feels meditative. A culinary class feels social and sensory. Batik, pottery, bamboo, and rattan sessions create visible progress with your hands. One clear focus gives the date a beginning, middle, and end.', 'Because the experience is guided, it works even if neither of you has craft experience. You can be beginners together, which is often the best part.'] },
      { heading: 'Suggested Kuta to Mawun plan', paragraphs: ['Start from Kuta after breakfast, ride or drive toward Mawun, spend time at LAKU, then continue to Selong Belanak, Are Guling, or back to Kuta for dinner. If you want less movement, make LAKU the main event and ask for a longer workshop format.', 'Mention your transport timing when you inquire so the team can recommend a realistic session length.'] },
      { heading: 'Make it easy to say yes', paragraphs: ['If you are comparing date ideas near Kuta Lombok, choose the one that gives you connection, local meaning, and a clear memory. Send an inquiry with your date, preferred time, and whether you want craft, food, or a mixed cultural visit.'] }
    ],
    faqs: [
      { question: 'Can we visit LAKU from Kuta in one day?', answer: 'Yes. LAKU is close enough to Kuta Lombok to work as a short date activity or part of a larger South Lombok route.' },
      { question: 'Do we need previous workshop experience?', answer: 'No. LAKU workshops are beginner-friendly and guided by Culture Keepers.' },
      { question: 'What should couples bring?', answer: 'Bring comfortable clothes, curiosity, and enough time not to rush the experience.' }
    ]
  }),
  makePost({
    slug: 'lombok-with-toddlers-cultural-activity',
    title: 'Things to Do in Lombok with Toddlers and Young Kids',
    description: 'A parent-friendly guide to gentle cultural activities in Lombok for families with children aged 3-7 near Kuta, Mawun, and Selong Belanak.',
    topic: 'Young families',
    audience: 'Young families with children aged 3-7',
    intentQuery: 'things to do in Lombok with toddlers',
    primaryKeyword: 'things to do in Lombok with toddlers',
    secondaryKeywords: ['Lombok with young kids', 'family activities Kuta Lombok', 'children workshop Lombok'],
    conversionAction: 'Ask LAKU for a short child-friendly workshop format.',
    image: '/images/laku/optimized/hero-workshop.webp',
    imageAlt: 'Young family joining a gentle cultural activity in Lombok at LAKU Culture',
    internalLinks: sharedInternalLinks,
    sections: [
      { heading: 'What parents really need from a young-kids activity', paragraphs: ['When parents search for things to do in Lombok with toddlers, the real question is not only what is fun. It is what is manageable. Young children need shade, short attention windows, kind guidance, sensory interest, and a plan that can bend if someone gets tired. LAKU Culture is a good fit because the experience can be kept simple and tactile.', 'Children aged 3-7 often connect quickly with materials: clay, fibers, leaves, food, texture, color, and sound. A cultural activity gives them something to touch and try without requiring a long explanation.'] },
      { heading: 'The best LAKU formats for ages 3-7', paragraphs: ['For younger children, ask for a short introductory experience rather than a long technical workshop. Simple culinary participation, basic clay shaping, gentle weaving observation, or a short natural-material activity can work well when prepared for the age group.', 'Parents should stay involved. At this age, LAKU works best as a shared family moment, not a drop-off class. The child gets the confidence of a parent nearby and the family gets a memory together.'] },
      { heading: 'How to make the visit smooth', paragraphs: ['Choose a time of day when your child is usually calm. Share ages, group size, and any sensitivities when you inquire. Ask what materials will be used and whether the session can be shortened if needed. Bring water and comfortable clothes that can handle a little mess.', 'Because LAKU is in Mawun between Kuta and Selong Belanak, families can pair it with a simple beach stop, lunch, or nap-friendly drive without overloading the day.'] },
      { heading: 'Turn a child-friendly idea into a booking', paragraphs: ['The strongest family activities in Lombok are the ones children can understand with their hands. Send LAKU your preferred date, ages, and timing, then ask for the most suitable young-child cultural format.'] }
    ],
    faqs: [
      { question: 'Is LAKU suitable for children aged 3-7?', answer: 'Yes, by request. LAKU can suggest shorter, gentler formats when parents share the child ages in advance.' },
      { question: 'Do parents join the activity?', answer: 'For ages 3-7, parent participation is recommended so the experience stays relaxed and safe.' },
      { question: 'Can a session be short?', answer: 'Yes. Ask for a child-friendly duration when booking.' }
    ]
  }),
  makePost({
    slug: 'family-activities-kuta-lombok-kids',
    title: 'Family Activities Near Kuta Lombok for Kids Who Need More Than Screens',
    description: 'Plan a hands-on family activity near Kuta Lombok at LAKU Culture, where kids can learn through craft, food, and living traditions.',
    topic: 'Young families',
    audience: 'Young families with children aged 3-7',
    intentQuery: 'family activities Kuta Lombok kids',
    primaryKeyword: 'family activities near Kuta Lombok',
    secondaryKeywords: ['Kuta Lombok kids activity', 'Lombok family workshop', 'Mawun family activity'],
    conversionAction: 'Book a family-friendly cultural activity near Kuta.',
    image: '/images/laku/optimized/craft-detail.webp',
    imageAlt: 'Family-friendly craft activity near Kuta Lombok at LAKU Culture',
    internalLinks: sharedInternalLinks,
    sections: [
      { heading: 'A practical family plan near Kuta', paragraphs: ['Families staying in Kuta Lombok often need one good activity that is not another meal, beach, or screen break. LAKU Culture in Mawun gives parents a hands-on option close to Kuta and Selong Belanak, with enough local meaning to make the outing feel worthwhile.', 'The setting is especially useful for families who want their children to experience Indonesian culture directly. Kids can see materials, meet makers, and understand that culture is something people practice, not just something displayed.'] },
      { heading: 'Why hands-on culture works for children', paragraphs: ['Children learn quickly when they can touch, smell, shape, and repeat. A workshop gives them a small challenge and a visible result. Even a short activity can become the thing they remember most clearly from a Lombok trip.', 'For younger children, the goal should be exposure and enjoyment. For parents, the value is a family activity near Kuta Lombok that feels calm, constructive, and connected to place.'] },
      { heading: 'What to ask before booking', paragraphs: ['Tell LAKU the child ages, preferred time, group size, and whether you want craft, food, or a mixed visit. Ask what the children will make, how long the activity lasts, and whether the format can be adjusted for energy level.', 'This gives the Culture Keeper time to prepare materials and helps parents avoid a session that is too long or too technical.'] },
      { heading: 'Make the family outing easy', paragraphs: ['A good family activity does not need to fill the whole day. Plan LAKU as the anchor, then keep the rest of the schedule simple. Book through the inquiry form and ask for the best workshop for your child ages.'] }
    ],
    faqs: [
      { question: 'Is LAKU close to Kuta Lombok?', answer: 'LAKU is in Mawun, making it practical for families staying in Kuta, Mawun, Selong Belanak, and nearby South Lombok areas.' },
      { question: 'Can siblings of different ages join?', answer: 'Yes. Share all ages in advance so LAKU can recommend a format that works for the family.' },
      { question: 'What if my child loses focus?', answer: 'Ask for a flexible, child-friendly format. Short sessions are often best for younger children.' }
    ]
  }),
  makePost({
    slug: 'children-workshop-lombok-ages-3-7',
    title: 'A Children Workshop in Lombok for Ages 3-7',
    description: 'How to choose a safe, gentle, hands-on children workshop in Lombok for young kids who learn best through touch and play.',
    topic: 'Young families',
    audience: 'Young families with children aged 3-7',
    intentQuery: 'children workshop Lombok',
    primaryKeyword: 'children workshop Lombok',
    secondaryKeywords: ['kids cultural workshop Lombok', 'Lombok activities for young children', 'family workshop Mawun'],
    conversionAction: 'Request an age-appropriate children workshop.',
    image: '/images/laku/optimized/table-offering.webp',
    imageAlt: 'Simple materials prepared for a children workshop in Lombok at LAKU Culture',
    internalLinks: sharedInternalLinks,
    sections: [
      { heading: 'Choose a workshop by age, not by adult interest', paragraphs: ['A children workshop in Lombok should be designed around how children actually learn. For ages 3-7, the best format is short, sensory, forgiving, and guided with warmth. LAKU Culture can adapt cultural activities for younger families when parents share ages and needs before booking.', 'Instead of choosing the most impressive workshop title, choose the format that gives children simple participation: stirring, shaping, touching, sorting, watching, and making one small thing.'] },
      { heading: 'What makes a workshop safe and useful for young children', paragraphs: ['Parents should look for clear supervision, simple materials, a calm pace, and no pressure to finish perfectly. The Culture Keeper should be able to explain the activity in a way children can follow while parents remain close.', 'A young-child workshop is successful when the child feels proud, curious, and comfortable. The cultural learning can be light but still meaningful.'] },
      { heading: 'LAKU formats to consider', paragraphs: ['Ask about simple culinary participation, gentle clay work, natural-material crafts, or observation with a few hands-on moments. Some workshops that suit adults may need to be shortened or simplified for this age range.', 'If your child enjoys texture and repetition, weaving observation or fiber handling may work. If they like food and smell, culinary activities may be stronger. If they enjoy shape and mess, clay can be a good match.'] },
      { heading: 'Book with useful details', paragraphs: ['When you send an inquiry, include each child age, number of adults, preferred date, and any limits around food, mess, heat, or attention span. LAKU can then recommend the best children workshop in Lombok for your family.'] }
    ],
    faqs: [
      { question: 'Can LAKU customize a workshop for young children?', answer: 'Yes, when the family shares child ages, group size, and preferred timing in advance.' },
      { question: 'Are tools or materials child-safe?', answer: 'The team can recommend age-appropriate activities and explain materials before booking.' },
      { question: 'How long should a workshop be for ages 3-7?', answer: 'Shorter formats are usually best. Ask LAKU for a child-friendly duration.' }
    ]
  }),
  makePost({
    slug: 'educational-activities-lombok-kids-teens',
    title: 'Educational Activities in Lombok for Kids and Teens',
    description: 'Families with children aged 8-16 can turn a Lombok trip into deeper learning through workshops, craft, food, and Culture Keeper sessions.',
    topic: 'Older families',
    audience: 'Families with children aged 8-16',
    intentQuery: 'educational activities Lombok for kids',
    primaryKeyword: 'educational activities in Lombok for kids',
    secondaryKeywords: ['teen activities Lombok', 'Lombok culture workshop families', 'hands-on learning Lombok'],
    conversionAction: 'Book a family workshop or deeper learning session.',
    image: '/images/laku/optimized/weaving-values.webp',
    imageAlt: 'Educational weaving activity in Lombok for kids and teens at LAKU Culture',
    internalLinks: sharedInternalLinks,
    sections: [
      { heading: 'Older kids need real participation', paragraphs: ['Educational activities in Lombok for kids aged 8-16 should do more than keep them busy. Older children and teenagers can understand process, history, material, and meaning when the experience gives them enough responsibility. LAKU Culture is built around that kind of learning.', 'Instead of watching a demonstration from a distance, families can choose workshops where kids practice with a Culture Keeper, ask questions, and see how traditional knowledge becomes a real object, dish, pattern, or skill.'] },
      { heading: 'Why LAKU works for ages 8-16', paragraphs: ['This age group can handle longer attention spans and more detailed instruction. Weaving, batik, pottery, bamboo, rattan, and culinary classes can all become useful learning experiences when framed with cultural context. Teens who might resist a typical tour often respond better to doing something with their hands.', 'Parents also get a better travel memory because the activity has depth. It becomes part of a family conversation about Indonesia, local craft, sustainability, and how traditions survive through practice.'] },
      { heading: 'Turn a workshop into a learning plan', paragraphs: ['Ask LAKU what the child will learn, what they will make, how long the session takes, and whether the Culture Keeper can explain the tradition behind the technique. If your child has a school project, art interest, or cultural research topic, mention it when booking.', 'For families staying near Kuta, Selong Belanak, or Mawun, LAKU can fit easily into a half-day plan without turning education into a long commute.'] },
      { heading: 'Book for curiosity, not just convenience', paragraphs: ['The best educational activities in Lombok give kids a reason to care. Send LAKU your children ages and interests, then ask for the workshop that offers the right level of challenge.'] }
    ],
    faqs: [
      { question: 'Which LAKU workshops suit teens?', answer: 'Weaving, batik, pottery, bamboo, rattan, and culinary sessions can all suit teens depending on interest and availability.' },
      { question: 'Can LAKU support school-style learning?', answer: 'Yes. Share the learning goal or project context when booking so the session can include relevant cultural explanation.' },
      { question: 'Do older kids take home what they make?', answer: 'Many workshop formats have a take-home piece or outcome. Confirm the details when inquiring.' }
    ]
  }),
  makePost({
    slug: 'teen-activities-lombok-culture-workshop',
    title: 'Teen Activities in Lombok That Feel Purposeful',
    description: 'A guide to meaningful teen activities in Lombok, including cultural workshops at LAKU for craft, food, and practical local learning.',
    topic: 'Older families',
    audience: 'Families with children aged 8-16',
    intentQuery: 'teen activities Lombok culture',
    primaryKeyword: 'teen activities in Lombok',
    secondaryKeywords: ['Lombok culture workshop for teens', 'things to do in Lombok with teenagers', 'Mawun workshop'],
    conversionAction: 'Choose a workshop with enough challenge for teenagers.',
    image: '/images/laku/optimized/craft-detail.webp',
    imageAlt: 'Teen-friendly cultural workshop in Lombok at LAKU Culture',
    internalLinks: sharedInternalLinks,
    sections: [
      { heading: 'Move beyond passive sightseeing', paragraphs: ['Teen activities in Lombok work best when they give teenagers some independence, skill, and meaning. Passive sightseeing can lose them quickly. A LAKU Culture workshop gives teens a practical task and a real person to learn from, which changes the experience from observation to participation.', 'The strongest sessions are not childish. They respect the teenager as a capable learner and introduce Indonesian culture through materials, technique, and conversation.'] },
      { heading: 'Good workshop choices for teenagers', paragraphs: ['Batik can suit teens who like design and detail. Pottery works for those who like making forms by hand. Weaving teaches patience and pattern. Culinary classes connect culture through flavor and hospitality. Bamboo and rattan show how natural materials become useful objects.', 'Each option can be adapted by availability, timing, and the teen interest. The key is to choose one focus and give it enough time.'] },
      { heading: 'How parents can frame the experience', paragraphs: ['Tell your teenager this is not a performance. It is a chance to learn from someone who carries a living practice. Ask them to choose between craft, food, or design, then let them own part of the decision.', 'Families can use LAKU as a screen-free half day near Kuta, Mawun, or Selong Belanak that still feels relevant to older children.'] },
      { heading: 'Make the booking specific', paragraphs: ['When you inquire, include age, interests, preferred timing, and whether your teen wants a creative, culinary, or technical session. LAKU can then recommend a teen activity in Lombok that feels purposeful rather than forced.'] }
    ],
    faqs: [
      { question: 'Will teenagers find LAKU too simple?', answer: 'The right workshop can offer enough challenge and context for teenagers, especially when their interests are shared in advance.' },
      { question: 'Can teens join without parents?', answer: 'Ask LAKU directly. For family visits, parent presence is usually expected unless a specific arrangement is made.' },
      { question: 'Which activity is best for creative teens?', answer: 'Batik, pottery, weaving, bamboo, and rattan can all work for creative teens depending on availability.' }
    ]
  }),
  makePost({
    slug: 'lombok-workshops-for-families',
    title: 'Lombok Workshops for Families: What to Book and Why',
    description: 'Compare family-friendly Lombok workshop options at LAKU Culture, from weaving and culinary sessions to batik, pottery, bamboo, and rattan.',
    topic: 'Older families',
    audience: 'Families with children aged 8-16',
    intentQuery: 'Lombok workshops for families',
    primaryKeyword: 'Lombok workshops for families',
    secondaryKeywords: ['family cultural workshop Lombok', 'kids craft workshop Lombok', 'LAKU Culture workshops'],
    conversionAction: 'Book the right family workshop for your children ages.',
    image: '/images/laku/optimized/table-offering.webp',
    imageAlt: 'Family workshop materials at LAKU Culture in Lombok',
    internalLinks: sharedInternalLinks,
    sections: [
      { heading: 'Start with your family rhythm', paragraphs: ['Lombok workshops for families are most successful when they fit the real energy of the group. A family with younger siblings needs a different format than a family with teenagers. LAKU Culture can help you choose between weaving, culinary classes, batik, pottery, bamboo, rattan, or a simpler visit with hands-on elements.', 'The goal is not to squeeze every tradition into one day. The goal is to choose the workshop that gives your family the strongest memory and the right level of challenge.'] },
      { heading: 'Workshop options and who they fit', paragraphs: ['Weaving suits patient learners and families who enjoy pattern. Culinary classes work well for mixed ages because food creates immediate interest. Batik is strong for creative kids and teens. Pottery is tactile and expressive. Bamboo and rattan can suit families curious about natural materials and practical craft.', 'Ask which Culture Keepers are available for your date and what each session includes.'] },
      { heading: 'What makes a family workshop convert from maybe to yes', paragraphs: ['Parents need clarity before booking: duration, age suitability, price, what children make, whether adults participate, and how weather affects the plan. LAKU inquiries should include all of that so the team can answer directly.', 'Families also value location. Mawun is useful because it sits between Kuta and Selong Belanak, so the workshop can become part of a realistic South Lombok day.'] },
      { heading: 'Book one workshop well', paragraphs: ['For most families, one well-chosen workshop is better than a packed itinerary. Send an inquiry with ages, interests, date, and group size, then let LAKU recommend the best family workshop format.'] }
    ],
    faqs: [
      { question: 'Can adults and children join together?', answer: 'Yes. Family workshops are strongest when adults and children participate together.' },
      { question: 'Which workshop is best for mixed ages?', answer: 'Culinary sessions and simplified craft formats often work well for mixed ages, but LAKU can recommend based on the group.' },
      { question: 'Can LAKU host private family workshops?', answer: 'Yes, private family sessions can be requested based on Culture Keeper availability.' }
    ]
  }),
  makePost({
    slug: 'solo-travel-lombok-cultural-experience',
    title: 'Solo Travel in Lombok: A Cultural Experience That Connects You to Place',
    description: 'Solo travelers in Lombok can use LAKU Culture as a meaningful stop for workshops, Culture Keeper visits, and hands-on learning.',
    topic: 'Solo travel',
    audience: 'Young solo travelers',
    intentQuery: 'solo travel Lombok things to do',
    primaryKeyword: 'solo travel Lombok',
    secondaryKeywords: ['solo things to do in Lombok', 'authentic Lombok cultural experience', 'workshops in Kuta Lombok'],
    conversionAction: 'Join a workshop or ask about apprenticeship dates.',
    image: '/images/laku/optimized/weaving-values.webp',
    imageAlt: 'Solo traveler learning weaving during a cultural experience in Lombok',
    internalLinks: sharedInternalLinks,
    sections: [
      { heading: 'A solo plan that is not just movement', paragraphs: ['Solo travel in Lombok can be freeing, but it can also become a loop of cafes, beaches, and quick recommendations. LAKU Culture gives solo travelers a more grounded way to spend time in South Lombok: meet Culture Keepers, join a hands-on workshop, and understand Indonesian traditions through practice.', 'Because the activity is guided, solo travelers do not need to arrive with a group. The workshop itself creates structure and conversation.'] },
      { heading: 'Why workshops suit solo travelers', paragraphs: ['A cultural workshop gives you a reason to be present. You are not waiting for someone else to make a plan, and you are not only consuming a place from the outside. You are learning a technique, hearing a story, and making something with your hands.', 'For solo travelers who want authentic Lombok experiences, this kind of participation often feels more satisfying than another viewpoint or crowded beach stop.'] },
      { heading: 'Choose your depth', paragraphs: ['If you have one morning, book a workshop. If you have a flexible week or more, ask about the living culture apprenticeship. If you are unsure, plan a visit first and meet the Culture Keepers before deciding.', 'LAKU is especially practical for travelers staying around Kuta, Mawun, Are Guling, Torok, or Selong Belanak.'] },
      { heading: 'Take action before your schedule fills', paragraphs: ['Solo trips can change quickly. Send an inquiry early with your available dates and ask what Culture Keeper sessions are open. LAKU can help you turn a flexible day into a meaningful cultural experience.'] }
    ],
    faqs: [
      { question: 'Can solo travelers join LAKU workshops?', answer: 'Yes. Solo travelers can inquire about available workshop times, visits, or apprenticeship options.' },
      { question: 'Is LAKU good for meeting people?', answer: 'The experience is guided and social by nature, especially when workshops or group sessions are available.' },
      { question: 'Can I do something deeper than one workshop?', answer: 'Yes. Ask about one week to one month living culture apprenticeship options.' }
    ]
  }),
  makePost({
    slug: 'authentic-lombok-cultural-experience',
    title: 'How to Find an Authentic Lombok Cultural Experience',
    description: 'A practical guide for travelers who want authentic Lombok culture through living traditions, local makers, workshops, and respectful participation.',
    topic: 'Solo travel',
    audience: 'Young solo travelers',
    intentQuery: 'authentic Lombok cultural experience',
    primaryKeyword: 'authentic Lombok cultural experience',
    secondaryKeywords: ['local culture Lombok', 'Culture Keepers Lombok', 'Indonesian cultural workshop'],
    conversionAction: 'Visit LAKU to meet Culture Keepers and choose a workshop.',
    image: '/images/laku/optimized/hero-workshop.webp',
    imageAlt: 'Authentic Lombok cultural experience with Culture Keepers at LAKU Culture',
    internalLinks: sharedInternalLinks,
    sections: [
      { heading: 'Authentic means practiced, not staged', paragraphs: ['An authentic Lombok cultural experience should connect you to people who still practice the tradition. It should not feel like culture has been pulled out of daily life and packaged only for visitors. LAKU Culture uses the idea of Culture Keepers because the person matters as much as the activity.', 'At LAKU, culture is approached through making, food, materials, music, and conversation. Visitors are invited to participate respectfully rather than only watch.'] },
      { heading: 'What to look for before booking', paragraphs: ['Look for clear information about who leads the activity, what tradition it belongs to, what you will make or learn, and how the experience supports local knowledge. A strong cultural experience should answer those questions before asking for payment.', 'It should also be honest about availability. Some Culture Keepers and materials need preparation, so advance inquiry is a sign of care rather than inconvenience.'] },
      { heading: 'Why LAKU fits intentional travelers', paragraphs: ['LAKU is useful for travelers who want local culture in Lombok without treating it as a performance. You can ask questions, learn the story behind materials, join a workshop, or plan a longer apprenticeship if you want deeper practice.', 'The Mawun location also makes it accessible from Kuta and Selong Belanak without turning the day into a long transfer.'] },
      { heading: 'Choose participation', paragraphs: ['If your search is really about connection, book an experience where you do something. Send LAKU your dates and ask which Culture Keeper session best matches your interests.'] }
    ],
    faqs: [
      { question: 'What makes LAKU authentic?', answer: 'LAKU centers Culture Keepers, daily practice, local materials, and participation rather than staged performance.' },
      { question: 'Can I visit before booking a deeper program?', answer: 'Yes. You can inquire about visiting and then ask about workshops or apprenticeships after learning more.' },
      { question: 'Is LAKU only for tourists?', answer: 'No. LAKU is also relevant for Lombok residents, expats, schools, families, and partners.' }
    ]
  }),
  makePost({
    slug: 'workshops-in-kuta-lombok-alternative',
    title: 'Looking for Workshops in Kuta Lombok? Try Mawun Instead',
    description: 'Travelers searching for workshops in Kuta Lombok can find hands-on cultural sessions nearby at LAKU Culture in Mawun.',
    topic: 'Solo travel',
    audience: 'Young solo travelers',
    intentQuery: 'workshops in Kuta Lombok',
    primaryKeyword: 'workshops in Kuta Lombok',
    secondaryKeywords: ['Mawun workshops', 'Kuta Lombok cultural class', 'Lombok craft workshop'],
    conversionAction: 'Book a nearby LAKU workshop from a Kuta base.',
    image: '/images/laku/optimized/craft-detail.webp',
    imageAlt: 'Craft workshop near Kuta Lombok at LAKU Culture in Mawun',
    internalLinks: sharedInternalLinks,
    sections: [
      { heading: 'Kuta is the base, Mawun is the quieter answer', paragraphs: ['If you are searching for workshops in Kuta Lombok, it is worth looking just outside the center. LAKU Culture in Mawun offers hands-on Indonesian cultural workshops close enough for a simple Kuta-based plan, with a quieter setting and stronger connection to local practice.', 'That small move away from the main street changes the experience. You get more space, more context, and a setting that suits craft, food, and conversation.'] },
      { heading: 'What workshops can be requested', paragraphs: ['LAKU offers bookable and request-based sessions including Nyensek weaving, kecapil hat weaving, culinary classes, batik, pottery, bamboo, and rattan. Availability depends on Culture Keepers, materials, and timing.', 'For travelers based in Kuta, the best approach is to inquire with a few possible dates and ask which workshop is strongest for your schedule.'] },
      { heading: 'Who this fits', paragraphs: ['This is a good option for solo travelers, couples, families, retreat guests, and digital nomads who want a meaningful activity near Kuta Lombok. It also works for travelers who want to avoid over-planned tours and prefer a direct, hands-on session.', 'If you have more time, ask whether an apprenticeship-style introduction is possible.'] },
      { heading: 'Book before you ride over', paragraphs: ['Because workshops depend on preparation, do not assume every activity is available as a walk-in. Send an inquiry first, then plan your Kuta to Mawun route around the confirmed time.'] }
    ],
    faqs: [
      { question: 'Is LAKU in Kuta Lombok?', answer: 'LAKU is in Mawun, near Kuta Lombok and between Kuta and Selong Belanak.' },
      { question: 'Can I book from Kuta for the same day?', answer: 'Ask via WhatsApp or the inquiry form. Same-day availability may depend on Culture Keeper schedules.' },
      { question: 'What workshops are available?', answer: 'Weaving and culinary sessions are core offers, with batik, pottery, bamboo, and rattan available by request.' }
    ]
  }),
  makePost({
    slug: 'things-to-do-near-kuta-lombok-expats',
    title: 'Things to Do Near Kuta Lombok for Expats and Nomads',
    description: 'LAKU Culture gives Lombok expats and nomads a meaningful local plan near Kuta, Mawun, and Selong Belanak for weekends and visiting guests.',
    topic: 'Lombok residents',
    audience: 'Expat families, couples, and single nomads living near Kuta, Selong Belanak, and Mawun',
    intentQuery: 'things to do near Kuta Lombok expats',
    primaryKeyword: 'things to do near Kuta Lombok',
    secondaryKeywords: ['Lombok expat activities', 'weekend activities Lombok', 'Mawun culture experience'],
    conversionAction: 'Use LAKU as a repeatable local activity or guest outing.',
    image: '/images/laku/optimized/hero-workshop.webp',
    imageAlt: 'Expats and nomads joining a cultural activity near Kuta Lombok at LAKU Culture',
    internalLinks: sharedInternalLinks,
    sections: [
      { heading: 'A local plan that does not feel like a tourist checklist', paragraphs: ['People living in Lombok still search for things to do near Kuta Lombok, especially when routines get too familiar or visitors arrive. LAKU Culture gives expats, nomads, couples, and families a local plan that feels meaningful without requiring a full-day trip.', 'Because LAKU is in Mawun between Kuta and Selong Belanak, it can become a repeatable stop: weekend workshop, visiting-family outing, rainy-day cultural plan, or a calm place to reconnect with Indonesian traditions.'] },
      { heading: 'Why residents need different content than tourists', paragraphs: ['Residents are not only asking what exists. They are asking what is worth returning to. LAKU can answer that with changing Culture Keeper availability, different workshop formats, handmade products, and deeper apprenticeship options.', 'For expat families, it can become a screen-free family activity. For couples, it can be a date. For single nomads, it can be a social and purposeful break from laptop life.'] },
      { heading: 'Bring visiting guests here', paragraphs: ['When friends or family visit Lombok, the pressure to plan something authentic is real. LAKU gives residents an easy answer: a cultural experience near Kuta that introduces Indonesia through practice rather than a generic tour.', 'Ask about private group formats if you have visiting relatives, school groups, retreat guests, or a mixed-age family.'] },
      { heading: 'Make LAKU part of local life', paragraphs: ['If you live between Kuta, Mawun, Selong Belanak, or nearby villages, follow LAKU for workshop openings and send inquiries for custom dates. The more specific your request, the easier it is to match the right Culture Keeper.'] }
    ],
    faqs: [
      { question: 'Is LAKU useful for people who live in Lombok?', answer: 'Yes. LAKU works for weekend plans, visiting guests, family activities, cultural learning, and repeat workshops.' },
      { question: 'Can residents request custom dates?', answer: 'Yes. Share your preferred dates, group size, and interests through the inquiry form or WhatsApp.' },
      { question: 'Can LAKU host visiting family or friends?', answer: 'Yes. Private and mixed-age group formats can be requested.' }
    ]
  }),
  makePost({
    slug: 'activities-near-selong-belanak-laku',
    title: 'Activities Near Selong Belanak: Add Culture to the Beach Day',
    description: 'Families, couples, and nomads near Selong Belanak can add LAKU Culture in Mawun to a South Lombok beach day with hands-on workshops.',
    topic: 'Lombok residents',
    audience: 'Expat families, couples, and single nomads living near Kuta, Selong Belanak, and Mawun',
    intentQuery: 'activities near Selong Belanak',
    primaryKeyword: 'activities near Selong Belanak',
    secondaryKeywords: ['Mawun activity', 'Selong Belanak family activities', 'South Lombok cultural workshop'],
    conversionAction: 'Pair LAKU with a Selong Belanak or Mawun day plan.',
    image: '/images/laku/optimized/table-offering.webp',
    imageAlt: 'Cultural activity near Selong Belanak at LAKU Culture in Mawun',
    internalLinks: sharedInternalLinks,
    sections: [
      { heading: 'Make the beach day more memorable', paragraphs: ['Selong Belanak is already one of the easiest South Lombok beach plans, but many families and couples want one more meaningful stop nearby. LAKU Culture in Mawun adds hands-on Indonesian culture to the route without pulling the day far away from the coast.', 'This is especially useful for residents and repeat visitors who have already done the standard beach routine. A workshop gives the day a story.'] },
      { heading: 'Who should add LAKU to the route', paragraphs: ['Young families can ask for short, gentle sessions. Older children and teens can try more detailed workshops. Couples can book a cultural date. Solo nomads can use it as a purposeful break. Expat residents can bring visitors who want something local and real.', 'The same location serves different intentions because LAKU is built around flexible formats.'] },
      { heading: 'Suggested South Lombok flow', paragraphs: ['Plan LAKU before the beach if you want children fresh and focused. Plan it after a beach morning if you want a shaded cultural reset. For couples, late afternoon can work well before dinner. For visiting guests, make LAKU the main cultural stop and keep the rest simple.', 'Inquiries should include where you are coming from, your date, and whether you want a quick visit or a full workshop.'] },
      { heading: 'Book with the route in mind', paragraphs: ['When searching for activities near Selong Belanak, choose something that adds meaning rather than more movement. Send LAKU your timing and ask which Culture Keeper activity fits your day.'] }
    ],
    faqs: [
      { question: 'Is LAKU near Selong Belanak?', answer: 'LAKU is located in Mawun, positioned between Selong Belanak and Kuta Lombok.' },
      { question: 'Can we combine LAKU with a beach day?', answer: 'Yes. Many visitors can pair LAKU with Mawun, Selong Belanak, or Kuta depending on timing.' },
      { question: 'Is it better before or after the beach?', answer: 'For families, before the beach can be easier. Couples and adults may prefer late afternoon.' }
    ]
  }),
  makePost({
    slug: 'weekend-activities-lombok-families-expats',
    title: 'Weekend Activities in Lombok for Families, Expats, and Nomads',
    description: 'A practical weekend guide for Lombok residents looking for meaningful workshops, family outings, and cultural plans at LAKU Culture.',
    topic: 'Lombok residents',
    audience: 'Expat families, couples, and single nomads living near Kuta, Selong Belanak, and Mawun',
    intentQuery: 'weekend activities Lombok families',
    primaryKeyword: 'weekend activities in Lombok',
    secondaryKeywords: ['Lombok family weekend', 'expat activities Lombok', 'LAKU Culture weekend workshop'],
    conversionAction: 'Book LAKU for a weekend family, couple, or nomad activity.',
    image: '/images/laku/optimized/weaving-values.webp',
    imageAlt: 'Weekend cultural workshop in Lombok for families and expats at LAKU Culture',
    internalLinks: sharedInternalLinks,
    sections: [
      { heading: 'A weekend plan with more substance', paragraphs: ['Weekend activities in Lombok can easily become the same loop: beach, brunch, errands, sunset. For families, expats, and nomads living around Kuta, Mawun, or Selong Belanak, LAKU Culture offers a weekend plan with more substance: learning from Culture Keepers and joining hands-on Indonesian workshops.', 'It is close enough for regular use and flexible enough to serve different groups. That makes it stronger than a one-time tourist attraction.'] },
      { heading: 'Use LAKU for different weekend needs', paragraphs: ['Parents can book a family workshop. Couples can plan a date. Nomads can join a purposeful solo activity. Hosts can bring visiting friends. Retreat leaders can ask about private cultural sessions. Residents can return for different traditions instead of repeating the same activity every time.', 'This is the conversion advantage: LAKU is not only a place to visit once. It can become part of local rhythm.'] },
      { heading: 'How to plan without overthinking', paragraphs: ['Pick one intention for the weekend: child-friendly, teen-friendly, couple-focused, social, creative, culinary, or guest-hosting. Then send LAKU your date, group size, ages, and preferred activity style.', 'The team can suggest what is available and what format will feel best. Advance inquiry is especially useful for weekends because Culture Keepers and materials may need preparation.'] },
      { heading: 'Make your next weekend easier', paragraphs: ['If you live in South Lombok, save LAKU as a reliable answer for the question, what should we do this weekend? Book a workshop, plan a visit, or ask about recurring cultural sessions.'] }
    ],
    faqs: [
      { question: 'Can LAKU be booked on weekends?', answer: 'Weekend requests are welcome, but availability should be confirmed in advance.' },
      { question: 'Is LAKU good for expat families?', answer: 'Yes. It offers family-friendly, educational, and repeatable cultural activities near Kuta, Mawun, and Selong Belanak.' },
      { question: 'Can digital nomads join alone?', answer: 'Yes. Solo inquiries are welcome for workshops, visits, and deeper learning programs.' }
    ]
  })
]
