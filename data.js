const SAMPLES = [
  // ── TWEETS: AI ──────────────────────────────────────────────────────────────
  {
    id: 1, type: "tweet", isAI: true,
    author: "@growth_mindset_daily", avatar: "🚀",
    text: "The intersection of curiosity and persistence is where all meaningful work happens.\n\nMost people quit right before the breakthrough.\n\nKeep going. 💪 #growth #mindset #buildinpublic"
  },
  {
    id: 2, type: "tweet", isAI: true,
    author: "@techfounder_tips", avatar: "💡",
    text: "5 things no one tells you about building a startup:\n\n1. The idea is the easy part\n2. Execution separates winners from dreamers\n3. Your network IS your net worth\n4. Failure is just feedback\n5. Consistency > intensity\n\nSave this. You'll need it. 🔖"
  },
  {
    id: 3, type: "tweet", isAI: true,
    author: "@productivityhacks", avatar: "⚡",
    text: "Stop waiting for the perfect moment.\n\nThe perfect moment is NOW.\n\nYour future self will thank you for starting today. 🌟 #productivity #success #motivation"
  },
  {
    id: 4, type: "tweet", isAI: true,
    author: "@deepthought_tech", avatar: "🧠",
    text: "AI isn't replacing humans — it's amplifying human potential.\n\nThe question isn't: will AI take my job?\n\nThe real question is: how will I use AI to 10x my output?\n\nThose who adapt will thrive. Those who don't... won't. 🤔"
  },
  {
    id: 5, type: "tweet", isAI: true,
    author: "@leadershipunlocked", avatar: "🏆",
    text: "The best leaders I've ever met had one thing in common:\n\nThey listened more than they spoke.\n\nIn a world obsessed with visibility, silence is a superpower. 🌊 #leadership #success"
  },
  {
    id: 6, type: "tweet", isAI: true,
    author: "@entrepreneurmode", avatar: "🔥",
    text: "Unpopular opinion: Work-life balance is a myth.\n\nWhat actually exists is work-life integration.\n\nWhen you love what you do, the line disappears. ✨\n\nAgree or disagree? Drop a 🙌 or 👎"
  },
  {
    id: 7, type: "tweet", isAI: true,
    author: "@dailyinsight_co", avatar: "💼",
    text: "Here's what separates top performers from everyone else:\n\nThey don't manage time — they manage energy.\n\nSchedule your hardest tasks when you're at peak energy.\n\nWatch what happens. 📈 #performance #habits"
  },
  {
    id: 8, type: "tweet", isAI: true,
    author: "@buildingempires", avatar: "🌐",
    text: "The most underrated skill in 2024:\n\nKnowing when to stop optimizing and just ship.\n\nDone is better than perfect. Always. 🚢 #buildinpublic #saas #startup"
  },
  {
    id: 9, type: "tweet", isAI: true,
    author: "@mindfulprofessional", avatar: "🎯",
    text: "Gratitude isn't just a feeling — it's a strategy.\n\nEvery morning I write 3 things I'm grateful for.\n\nIn 6 months, my anxiety dropped. My output tripled.\n\nCoincidence? I think not. 🙏 #mentalhealth #success"
  },
  {
    id: 10, type: "tweet", isAI: true,
    author: "@codewisdom_dev", avatar: "💻",
    text: "The best code is the code you don't have to write.\n\nSimplicity isn't laziness — it's mastery.\n\nSenior devs delete more code than they write. 🔥 #programming #softwaredevelopment"
  },

  // ── TWEETS: HUMAN ───────────────────────────────────────────────────────────
  {
    id: 11, type: "tweet", isAI: false,
    author: "@ezraklein", avatar: "🎙️",
    text: "Robert Sapolsky on the way the toxic intersection of stress and poverty changes people's brains and harms their life chances. If I could make every policymaker listen to just one episode of my podcast, it'd be this one."
  },
  {
    id: 12, type: "tweet", isAI: false,
    author: "unknown", avatar: "📈",
    text: "This could be perceived as confirming late stage VC is a bubble and public markets are not. Very different from 99"
  },
  {
    id: 13, type: "tweet", isAI: false,
    author: "@mileskimball", avatar: "🏛️",
    text: "We need building codes but we also need principles to keep building codes from being used to keep down construction."
  },
  {
    id: 14, type: "tweet", isAI: false,
    author: "unknown", avatar: "💬",
    text: "I think the (unfortunate) great dilution of Quora is proof that there really are such things as stupid questions."
  },
  {
    id: 15, type: "tweet", isAI: false,
    author: "@visakanv", avatar: "🕸️",
    text: "The next level is just a more intuitive person-person knowledge graph that remove steps between you and information"
  },
  {
    id: 16, type: "tweet", isAI: false,
    author: "@paulg", avatar: "💡",
    text: "Twitter feels like the predecessor of something. There is an as-yet unstarted startup adjacent to it."
  },
  {
    id: 17, type: "tweet", isAI: false,
    author: "unknown", avatar: "💬",
    text: "What about the best possible interpretation? I'm guessing they simply don't relate to the pressures faced by those truly overwhelmed w/ info"
  },
  {
    id: 18, type: "tweet", isAI: false,
    author: "@michaelcurzi", avatar: "📖",
    text: "For a given ideology, you want to ask: what kind of person is this trying to turn me into? A Christian saint? A world-leaving Buddhist? A Randian hero? An übermensch? These are different aims. Idealized visions, likely only partially instantiated by the visionaries."
  },
  {
    id: 19, type: "tweet", isAI: false,
    author: "unknown", avatar: "💬",
    text: "rich people don't always start billion dollar cos, so even if true there's still Something About PayPal"
  },
  {
    id: 20, type: "tweet", isAI: false,
    author: "@garrytan", avatar: "💼",
    text: "This was mainly in response to a glut of cold emails I'm getting from people who are really sacrificing their lives to ideas that I've seen fail 100 other times!\n\n(And I don't even know the right thing to do— is it tell them not to work on it? I might be wrong.)"
  },

  // ── LINKEDIN: AI ────────────────────────────────────────────────────────────
  {
    id: 21, type: "linkedin", isAI: true,
    author: "Jessica T. | Growth Leader | Ex-FAANG", avatar: "💼",
    text: "I left my six-figure job at 32 to pursue my passion.\n\nEveryone thought I was crazy.\n\nHere's what I learned in 18 months:\n\n• Discomfort is the price of growth\n• Your network is your net worth\n• Execution beats perfection every time\n• The journey isn't linear — and that's okay\n\nThe best decision I ever made.\n\nWhat risk did you take that changed everything? Drop it below. 👇"
  },
  {
    id: 22, type: "linkedin", isAI: true,
    author: "Marcus W. | CEO & Founder | Speaker", avatar: "🎤",
    text: "I failed 3 businesses before building a $10M company.\n\nHere's what failure actually taught me:\n\n1. Failure isn't the opposite of success — it's part of it\n2. The market is always right, even when it hurts\n3. Team > idea, always\n4. Cash flow is king\n5. Your mindset determines your ceiling\n\nStop fearing failure. Start learning from it.\n\nTag someone who needs to hear this today. ♻️"
  },
  {
    id: 23, type: "linkedin", isAI: true,
    author: "Priya S. | HR Director | Culture Architect", avatar: "🌱",
    text: "We don't have a talent problem. We have a leadership problem.\n\nAfter 15 years in HR, here's what I know:\n\n→ People don't leave companies. They leave managers.\n→ Culture isn't a perk. It's a strategy.\n→ The best retention tool is genuine recognition.\n→ Psychological safety drives innovation.\n\nInvest in your leaders. Watch your retention numbers transform.\n\nAgree? What would you add? 💬"
  },
  {
    id: 24, type: "linkedin", isAI: true,
    author: "Derek L. | Sales Excellence | Revenue Growth", avatar: "📈",
    text: "The top 1% of salespeople do something different.\n\nThey don't sell products.\n\nThey sell outcomes.\n\nHere's the game-changer framework I use:\n\n✅ Understand the pain deeply\n✅ Map the solution to the outcome\n✅ Quantify the impact in dollars\n✅ Make the no more expensive than the yes\n\nSales is about value creation, not persuasion.\n\nSave this for your next discovery call. 🔖"
  },
  {
    id: 25, type: "linkedin", isAI: true,
    author: "Aisha M. | Future of Work | Remote Advocate", avatar: "🌍",
    text: "Remote work didn't break company culture.\n\nBad management was always the problem.\n\nThe companies calling people back to the office aren't solving a culture problem. They're avoiding a leadership problem.\n\nThe data is clear:\n→ Productivity is up\n→ Talent pools are global\n→ Employee satisfaction is higher\n\nThe future of work is flexible. The leaders who embrace it will win the talent war.\n\nWhat's your take? 🤔"
  },
  {
    id: 26, type: "linkedin", isAI: true,
    author: "Noah R. | Product Visionary | Angel Investor", avatar: "🦅",
    text: "I've reviewed 500+ pitch decks.\n\nHere's what separates the ones that get funded:\n\nIt's not the idea.\nIt's not the market size.\nIt's not even the deck.\n\nIt's the founder's ability to articulate WHY they are the only person who can solve this problem.\n\nConviction is contagious.\n\nBuilders: what's the story only YOU can tell? 🚀"
  },
  {
    id: 27, type: "linkedin", isAI: true,
    author: "Sarah K. | Mindful Leadership | Keynote Speaker", avatar: "🧘",
    text: "Burnout isn't a badge of honor. It's a warning sign.\n\nI ignored it for two years. My body finally said enough.\n\nHere's what I wish I had known:\n\n🔹 Rest is productive\n🔹 Boundaries are a business strategy\n🔹 Saying no is leadership\n🔹 Your health IS your wealth\n\nTake care of yourself first. Everything else follows.\n\nWho needed to hear this today? Tag them. ❤️"
  },

  // ── LINKEDIN: ALL AI ────────────────────────────────────────────────────────
  {
    id: 28, type: "linkedin", isAI: true,
    author: "Carlos Mendez | Infrastructure Eng", avatar: "🔧",
    text: "We had a 4-hour outage last Tuesday. The postmortem was genuinely uncomfortable — turns out two separate on-call rotations each assumed the other team was handling alerts for the shared service. Writing up the blameless report took longer than the fix. The hard part isn't the technical fix, it's agreeing on what the system boundary actually is."
  },
  {
    id: 29, type: "linkedin", isAI: true,
    author: "Tamsin Okafor | UX Research", avatar: "🔍",
    text: "Spent three months advocating for a user research round before we shipped a major redesign. Got pushed back at every sprint review — 'we don't have time.' We shipped. Within six weeks, support tickets were up 40% for the exact flows we hadn't tested. Now we have time for research AND a redesign. Funny how that works."
  },
  {
    id: 30, type: "linkedin", isAI: true,
    author: "Ben Hargrove | Principal Engineer", avatar: "🛠️",
    text: "Counterintuitive thing I've learned after 12 years: the engineers who are hardest to replace aren't the ones who write the most code. They're the ones who remember why a decision was made three years ago and can explain it to someone joining today. We underinvest massively in institutional memory."
  },
  {
    id: 31, type: "linkedin", isAI: true,
    author: "Linnea Bjork | Product Manager", avatar: "📋",
    text: "Just wrapped up a product review where I had to kill a feature I personally championed for two quarters. The data was clear. It was a bad feeling and the right call. I'm writing this partly to remind myself that being willing to be wrong in public is actually the job, not a failure mode."
  },
  {
    id: 32, type: "linkedin", isAI: true,
    author: "Rajiv Patel | Staff Data Scientist", avatar: "📊",
    text: "The most useful thing I do for junior data scientists on my team isn't reviewing their models. It's helping them write emails explaining the limitations of their models to stakeholders who don't want to hear about limitations. That skill is not taught anywhere and it's more than half the job."
  },
  {
    id: 33, type: "linkedin", isAI: true,
    author: "Miriam Castillo | Engineering Manager", avatar: "👷",
    text: "Honest reflection after switching from IC to manager: I was not prepared for how much of the job is just absorbing bad news before it gets to my team and figuring out what's actually signal vs. what's noise from leadership. Nobody wrote that in the job description."
  },
  {
    id: 34, type: "linkedin", isAI: true,
    author: "Theo Winslow | DevOps Lead", avatar: "⚙️",
    text: "We finally retired a cron job today that had been running since 2011. No one knew what it did. We were all too scared to turn it off. We turned it off six months ago in staging, nothing broke, turned it off in prod last week, nothing broke. It generated a CSV that was emailed to an address that no longer exists. 13 years."
  },

  // ── BLOG: AI ────────────────────────────────────────────────────────────────
  {
    id: 35, type: "blog", isAI: true,
    author: "Brandon K.", avatar: "✍️",
    text: "In today's fast-paced digital landscape, productivity has become the currency of success. But what separates high performers from the rest isn't working harder — it's working smarter. The most successful individuals have mastered the art of deep work, ruthlessly eliminating distractions while diving deep into the tasks that truly move the needle. Whether you're an entrepreneur, a creative, or a corporate professional, the principles remain the same: focus, intentionality, and relentless execution. In this post, we'll explore five game-changing strategies to transform your productivity and unlock your full potential."
  },
  {
    id: 36, type: "blog", isAI: true,
    author: "Insight Daily", avatar: "📰",
    text: "Leadership has evolved dramatically in the modern era. Gone are the days when a corner office and a title were enough to command respect. Today's most effective leaders understand that authentic connection is the foundation of everything. They listen actively, communicate with radical transparency, and create psychological safety — an environment where team members feel empowered to take risks without fear of judgment. At the end of the day, the measure of a great leader isn't found in quarterly reports. It's found in the quiet confidence of a team that knows they are seen, heard, and valued."
  },
  {
    id: 37, type: "blog", isAI: true,
    author: "FutureTech Weekly", avatar: "🔭",
    text: "Artificial intelligence is no longer a distant promise — it's reshaping industries at an unprecedented pace. From healthcare diagnostics to financial modeling, the applications are both vast and deeply transformative. But perhaps the most profound shift isn't happening in boardrooms or research labs. It's happening in how individuals relate to their own capabilities. As AI handles routine cognitive tasks, humans are freed to focus on what we do best: empathy, creativity, and complex judgment. The future belongs not to those who fear AI, but to those who learn to collaborate with it."
  },
  {
    id: 38, type: "blog", isAI: true,
    author: "MindBodySuccess", avatar: "🧘",
    text: "We live in a culture that glorifies busyness. Packed calendars, back-to-back meetings, and the relentless ping of notifications have become status symbols rather than warning signs. But science tells a different story. Chronic stress doesn't just impair performance — it literally shrinks the prefrontal cortex, the seat of decision-making and creativity. High performers who sustain excellence over decades share a counterintuitive secret: they treat rest as a performance variable, not a luxury. Strategic recovery isn't slacking off. It's the foundation that makes everything else possible."
  },
  {
    id: 39, type: "blog", isAI: true,
    author: "The Growth Lab", avatar: "📈",
    text: "Building a personal brand in 2024 isn't optional — it's essential. In a world where attention is the scarcest resource, your brand is the bridge between your expertise and your audience. But here's what most people get wrong: personal branding isn't about self-promotion. It's about consistent, generous value creation. The creators who win long-term aren't those who shout the loudest. They're the ones who show up consistently, share authentically, and prioritize their audience's success over their own recognition. Start there, and the rest will follow."
  },
  {
    id: 40, type: "blog", isAI: true,
    author: "Velocity Business", avatar: "🚀",
    text: "The most common mistake early-stage founders make isn't running out of money or choosing the wrong market. It's premature scaling — pouring fuel on a fire before confirming the fire actually exists. Product-market fit isn't a feeling. It's a measurable, repeatable signal: retention curves that flatten, word-of-mouth that compounds, users who would be genuinely devastated if the product disappeared. Until those signals are clear and consistent, every dollar spent on growth is a dollar wasted. Validate first. Scale second. In that order, always."
  },
  {
    id: 41, type: "blog", isAI: true,
    author: "ClearThought Media", avatar: "💭",
    text: "Communication is the invisible infrastructure of every organization. When it works, no one notices. When it breaks down, everything grinds to a halt. The most costly organizational failures — missed deadlines, misaligned teams, failed product launches — can almost always be traced back to a communication breakdown somewhere upstream. Effective organizational communication isn't just about sending clearer emails. It's about designing systems where the right information reaches the right people at the right time, with enough context to act on it decisively."
  },

  // ── BLOG: HUMAN (verified pre-2022 sources) ─────────────────────────────────
  {
    id: 42, type: "blog", isAI: false,
    author: "Venkatesh Rao, Ribbonfarm (2007)", avatar: "🔮",
    text: "Yet-to-be-understood technology is not magic. Arthur C. Clarke is probably to blame here for starting off this dull line of thinking about imaginative reality with his quote, 'Any sufficiently advanced technology is indistinguishable from magic.' Possibly true (though trite) as a statement about advanced technology. Irrelevant and distracting as a statement about magic.\n\nMagic is an imaginative conception of the lawfulness of a universe where matter has the attributes of consciousness, and can be engaged purely through intention. It is the product of our (primarily emotional and existential rather than intellectual) yearning to connect with the physical world beyond living organisms."
  },
  {
    id: 43, type: "blog", isAI: false,
    author: "Paul Graham, paulgraham.com", avatar: "💡",
    text: "The way to get startup ideas is not to try to think of startup ideas. It's to look for problems, preferably problems you have yourself.\n\nAt YC we call these 'made-up' or 'sitcom' startup ideas. Imagine one of the characters on a TV show was starting a startup. The writers would have to invent something for it to do.\n\nThe verb you want to be using with respect to startup ideas is not 'think up' but 'notice.' At YC we call ideas that grow naturally out of the founders' own experiences 'organic' startup ideas."
  },
  {
    id: 44, type: "blog", isAI: false,
    author: "Gizmodo (2019)", avatar: "📱",
    text: "Gadgets have to work a lot harder to suck in 2019 than they have in years past. They have to bankrupt companies, reveal our data, or be so overpriced they even make Apple look cheap. The gadgets below did all that, but some went even further. Some were pointless Skymall dreck, and some nearly ruined much nicer and better gadgets.\n\nRing's pioneering video doorbell seemed like a good idea at first. The gadget let lazy people and paranoid homeowners alike see who was knocking without leaving the comfort of their couch or panic room. Few could have guessed that Ring would partner with police departments, making it easy for cops to confiscate home security footage. Ring also launched a neighborhood watch app that enables profiling and has failed to protect its network from hackers. That and the fact that Ring is now an Amazon-owned private surveillance company that feeds on America's worst fears."
  },
  {
    id: 45, type: "blog", isAI: false,
    author: "Visakan Veerasamy, visakanv.com", avatar: "✍️",
    text: "Be honest about what you don't know. Be honest with yourself, most importantly. The clearer you are about this, the better positioned you will be to learn and improve. As a bonus, you'll find that being intellectually honest in a candid way encourages people to be honest with you in turn. It just makes for a healthy atmosphere. Practice communicating your uncertainty in a constructive, inviting way. It's refreshing to be around people like that."
  },
  {
    id: 46, type: "blog", isAI: false,
    author: "Visakan Veerasamy, visakanv.com", avatar: "✍️",
    text: "Have a schedule and respect it. I hated calendars and timetables as a kid, and spent many years dealing with subconscious stress of having to deal with any sort of deadline. But truths are true whether we like them or not: We have limited time and an unlimited set of things to do. In the absence of good routines, we fall into bad ones. If you're not deciding in advance how you're going to spend your time and energy, then other things will decide for you – the urgency of an interruption from somebody, the ease of an unimportant task. This compounds."
  },
  {
    id: 47, type: "blog", isAI: false,
    author: "Paul Graham, paulgraham.com", avatar: "💡",
    text: "I made it myself. In 1995 I started a company to put art galleries online. But galleries didn't want to be online. It's not how the art business works. So why did I spend 6 months working on this stupid idea? Because I didn't pay attention to users.\n\nYou can either build something a large number of people want a small amount, or something a small number of people want a large amount. Choose the latter. Not all ideas of that type are good startup ideas, but nearly all good startup ideas are of that type."
  },
  {
    id: 48, type: "blog", isAI: false,
    author: "Gizmodo (2019)", avatar: "📱",
    text: "We all knew Moviepass was a grift, but in 2019 it truly imploded in spectacular fashion. It barred folks from certain screenings, tried to prevent users from changing passwords, and to top everything off, leaked the credit card data for 58,000 users. After a slow, excruciating march to death, MoviePass finally bit the dust in September. In the end, MoviePass was the ultimate cautionary tale of something being too good to be true."
  },
  {
    id: 49, type: "blog", isAI: false,
    author: "Venkatesh Rao, Ribbonfarm (2007)", avatar: "🔮",
    text: "No, I think we get closest to our natural conception of magic if we understand it as a lawfulness that governs the connectedness/disconnectedness of a universal consciousness. When I am able to summon up that broomstick, I become one with the broomstick in some way. Evil, in this sort of magical universe, is a perverse condition of resistance to such connection.\n\nIn our regular world, the only thing that yields to pure intention, without any manifest action, is our own thoughts. Think of a pink elephant. You intend it, it is done. Neither physical lawfulness, nor 'agency' lawfulness behaves this way."
  },
  {
    id: 50, type: "blog", isAI: false,
    author: "Neal Stephenson, WIRED (1996)", avatar: "🌐",
    text: "In which the hacker tourist ventures forth across the wide and wondrous meatspace of three continents, acquainting himself with the customs and dialects of the exotic Manhole Villagers of Thailand, the U-Turn Tunnelers of the Nile Delta, the Cable Nomads of Lantao Island, the Slack Control Wizards of Chelmsford, the Subterranean Ex-Telegraphers of Cornwall, and other previously unknown and unchronicled folk; also, biographical sketches of the two long-dead Supreme Ninja Hacker Mage Lords of global telecommunications, and other material pertaining to the business and technology of Undersea Fiber-Optic Cables, as well as an account of the laying of the longest wire on Earth, which should not be without interest to the readers of WIRED."
  },

  {
    id: 54, type: "blog", isAI: false,
    author: "David Foster Wallace, Infinite Jest (1996)", avatar: "📚",
    text: "The United States: a community of sacred individuals which reveres the sacredness of the individual choice. The individual's right to pursue his own vision of the best ratio of pleasure to pain: utterly sacrosanct."
  },
  {
    id: 55, type: "blog", isAI: false,
    author: "David Foster Wallace, Infinite Jest (1996)", avatar: "📚",
    text: "What if sometimes there is no choice about what to love? What if the temple comes to Mohammed? What if you just love? Without deciding? You just do: you see her and in that instant are lost to sober account-keeping and cannot choose but to love?"
  },
  {
    id: 56, type: "blog", isAI: false,
    author: "James Joyce, Finnegans Wake (1939)", avatar: "📚",
    text: "It's something fails us. First we feel. Then we fall. And let her rain now if she likes. Gently or strongly as she likes. Anyway let her rain for my time is come. I done me best when I was let. Thinking always if I go all goes. A hundred cares, a tithe of troubles and is there one who understands me? One in a thousand of years of the nights?"
  },

  // ── TWEETS: AI — STYLE-BASED ────────────────────────────────────────────────

  // patio11 style (IDs 57–66)
  {
    id: 57, type: "tweet", isAI: true,
    author: "@patio11 (AI-generated)", avatar: "💼",
    text: "If you are a software company which charges $29/month, you are not competing with $0 software. You are competing with the 3 hours of evaluation time your customer spent finding $0 software. Price accordingly."
  },
  {
    id: 58, type: "tweet", isAI: true,
    author: "@patio11 (AI-generated)", avatar: "💼",
    text: "The number of software businesses that failed by charging too little is much larger than the number that failed by charging too much. Raise your prices. Seriously. Right now."
  },
  {
    id: 59, type: "tweet", isAI: true,
    author: "@patio11 (AI-generated)", avatar: "💼",
    text: "Japan observation: meiwaku — the concept of causing inconvenience to others — shapes every product decision in ways that make most American software feel almost sociopathic by comparison."
  },
  {
    id: 60, type: "tweet", isAI: true,
    author: "@patio11 (AI-generated)", avatar: "💼",
    text: "Your pricing page has a default plan. That default gets chosen by a plurality of customers regardless of whether it is actually correct for them. Default selection is one of the highest-leverage product decisions you will ever make."
  },
  {
    id: 61, type: "tweet", isAI: true,
    author: "@patio11 (AI-generated)", avatar: "💼",
    text: "The most underrated skill in B2B sales: writing an email compelling enough to be forwarded to the actual decision-maker by the person you originally sent it to."
  },
  {
    id: 62, type: "tweet", isAI: true,
    author: "@patio11 (AI-generated)", avatar: "💼",
    text: "Banks are not technology companies that happen to be regulated. They are compliance organizations that happen to run technology. This distinction explains almost everything that seems inexplicable about banking software."
  },
  {
    id: 63, type: "tweet", isAI: true,
    author: "@patio11 (AI-generated)", avatar: "💼",
    text: "Before building a feature, ask whether a well-written 500-word email would accomplish the same customer goal. You will be surprised how often the answer is yes, and how rarely anyone asks this question."
  },
  {
    id: 64, type: "tweet", isAI: true,
    author: "@patio11 (AI-generated)", avatar: "💼",
    text: "Payments is not a solved problem. It is a problem that has been partially solved for a narrow set of use cases and left almost entirely untouched for the majority of global commerce."
  },
  {
    id: 65, type: "tweet", isAI: true,
    author: "@patio11 (AI-generated)", avatar: "💼",
    text: "The best customer support interaction prevents the next customer support interaction. Most companies optimize for closing tickets. Optimize instead for making tickets unnecessary."
  },
  {
    id: 66, type: "tweet", isAI: true,
    author: "@patio11 (AI-generated)", avatar: "💼",
    text: "Small software businesses systematically undercharge enterprise customers because they compare to their own consumer pricing rather than to what the customer would otherwise pay, which is a full-time salary."
  },

  // Marc Andreessen style (IDs 67–76)
  {
    id: 67, type: "tweet", isAI: true,
    author: "@pmarca (AI-generated)", avatar: "🏗️",
    text: "The tech pessimists have been wrong about every major technology for 200 years. Steam, railroads, electricity, automobiles, computers, the internet. They will be wrong about AI. The pattern is not subtle."
  },
  {
    id: 68, type: "tweet", isAI: true,
    author: "@pmarca (AI-generated)", avatar: "🏗️",
    text: "Cities that make it easy to build housing will inherit the future. Cities that don't will become beautiful, expensive museums. This is not complicated."
  },
  {
    id: 69, type: "tweet", isAI: true,
    author: "@pmarca (AI-generated)", avatar: "🏗️",
    text: "Every institution currently fighting AI adoption is fighting for its own preservation, not for the people it claims to serve. These are different things."
  },
  {
    id: 70, type: "tweet", isAI: true,
    author: "@pmarca (AI-generated)", avatar: "🏗️",
    text: "The correct response to 'move fast and break things' criticism: name one thing that moving slowly and carefully preserved that was actually worth preserving."
  },
  {
    id: 71, type: "tweet", isAI: true,
    author: "@pmarca (AI-generated)", avatar: "🏗️",
    text: "Software ate media. Software ate retail. Software ate finance. Software is eating healthcare and education right now in slow motion. The only question is whether incumbents adapt or get replaced."
  },
  {
    id: 72, type: "tweet", isAI: true,
    author: "@pmarca (AI-generated)", avatar: "🏗️",
    text: "People whose lives have been improved by technology vs. harmed by it: not close. Not the same order of magnitude. The discourse has not processed this."
  },
  {
    id: 73, type: "tweet", isAI: true,
    author: "@pmarca (AI-generated)", avatar: "🏗️",
    text: "We are in the early innings. The commercial internet is 30 years old. Mainstream AI is 3 years old. Anyone telling you the interesting opportunities are gone is protecting incumbency, not telling the truth."
  },
  {
    id: 74, type: "tweet", isAI: true,
    author: "@pmarca (AI-generated)", avatar: "🏗️",
    text: "Regulation that prevents new entrants from competing with established players is not consumer protection. It is cartel protection with a better PR strategy."
  },
  {
    id: 75, type: "tweet", isAI: true,
    author: "@pmarca (AI-generated)", avatar: "🏗️",
    text: "The single most important thing any city or state can do to improve quality of life: permit more housing construction in high-demand areas. Everything else is noise."
  },
  {
    id: 76, type: "tweet", isAI: true,
    author: "@pmarca (AI-generated)", avatar: "🏗️",
    text: "Pessimism about technology requires believing that every problem it creates is permanent and every problem it solves doesn't count. This is not a coherent worldview."
  },

  // Emmett Shear style (IDs 77–86)
  {
    id: 77, type: "tweet", isAI: true,
    author: "@eshear (AI-generated)", avatar: "🎮",
    text: "The hard part of building a live streaming platform wasn't the technology. It was understanding that creators and viewers are two different customers with partially opposed interests, and you have to serve both simultaneously."
  },
  {
    id: 78, type: "tweet", isAI: true,
    author: "@eshear (AI-generated)", avatar: "🎮",
    text: "Most people think about AI risk as 'what if it does something bad.' The harder question is 'what if it does exactly what we asked and we asked for the wrong thing.' Specification is the real problem."
  },
  {
    id: 79, type: "tweet", isAI: true,
    author: "@eshear (AI-generated)", avatar: "🎮",
    text: "Product intuition is pattern matching over many product experiences. The fastest way to develop it is to use lots of products with a genuinely critical eye, including and especially your competitors'."
  },
  {
    id: 80, type: "tweet", isAI: true,
    author: "@eshear (AI-generated)", avatar: "🎮",
    text: "Every great product has a core interaction that feels almost magical the first time. If you can't identify what that moment is in your own product, you probably don't have one yet."
  },
  {
    id: 81, type: "tweet", isAI: true,
    author: "@eshear (AI-generated)", avatar: "🎮",
    text: "The difference between a company that survives a crisis and one that doesn't is usually determined by decisions made years before the crisis, not during it."
  },
  {
    id: 82, type: "tweet", isAI: true,
    author: "@eshear (AI-generated)", avatar: "🎮",
    text: "Community moderation at scale is an unsolved problem. Every platform that reaches sufficient size discovers this independently. Most handle it badly. No one has really cracked it."
  },
  {
    id: 83, type: "tweet", isAI: true,
    author: "@eshear (AI-generated)", avatar: "🎮",
    text: "I think about AI development like nuclear physics in the 1940s. The people who understood what was being built had obligations that the people who didn't understand couldn't hold them to."
  },
  {
    id: 84, type: "tweet", isAI: true,
    author: "@eshear (AI-generated)", avatar: "🎮",
    text: "Most management advice is written about large, stable companies by people who studied large, stable companies. Almost none of it applies to early-stage startups still figuring out what they are."
  },
  {
    id: 85, type: "tweet", isAI: true,
    author: "@eshear (AI-generated)", avatar: "🎮",
    text: "The most common reason products fail isn't competition or technology or timing. It's that the team lost shared intuition about what they were building and why."
  },
  {
    id: 86, type: "tweet", isAI: true,
    author: "@eshear (AI-generated)", avatar: "🎮",
    text: "What I didn't understand until I'd done it: the CEO's most important job isn't strategy or fundraising. It's maintaining the organizational clarity that lets everyone else do their jobs."
  },

  // Nick Cammarata style (IDs 87–96)
  {
    id: 87, type: "tweet", isAI: true,
    author: "@nickcammarata (AI-generated)", avatar: "🧘",
    text: "the weird thing about meditating a lot is you start noticing the texture of thoughts rather than their content, and once you can do that the content becomes way less sticky"
  },
  {
    id: 88, type: "tweet", isAI: true,
    author: "@nickcammarata (AI-generated)", avatar: "🧘",
    text: "i think a lot of anxiety is the nervous system treating 'uncertainty about the future' as equivalent to 'danger in the present.' the update that dissolves it is just: these are different things"
  },
  {
    id: 89, type: "tweet", isAI: true,
    author: "@nickcammarata (AI-generated)", avatar: "🧘",
    text: "one of the most useful psychological moves i know: when you're in conflict with someone, actually try to find the version of their position that's correct. not as debate tactic. actually look for where they're right."
  },
  {
    id: 90, type: "tweet", isAI: true,
    author: "@nickcammarata (AI-generated)", avatar: "🧘",
    text: "something i've noticed: the same internal move that lets you hold your own suffering with compassion rather than resistance also makes you better at thinking clearly about hard problems"
  },
  {
    id: 91, type: "tweet", isAI: true,
    author: "@nickcammarata (AI-generated)", avatar: "🧘",
    text: "hot take: a lot of what gets called depression is an accurate response to a life that needs changing, and the therapeutic goal shouldn't always be to reduce the signal"
  },
  {
    id: 92, type: "tweet", isAI: true,
    author: "@nickcammarata (AI-generated)", avatar: "🧘",
    text: "there's a moment in meditation where you notice you've been thinking and return to the breath. most people think the practice is the breath part. i think the practice is the noticing-and-returning."
  },
  {
    id: 93, type: "tweet", isAI: true,
    author: "@nickcammarata (AI-generated)", avatar: "🧘",
    text: "the thing that surprised me most about jhana states is they don't feel like what i expected from the descriptions. less mystical, more like the mind discovered a gear it didn't know it had."
  },
  {
    id: 94, type: "tweet", isAI: true,
    author: "@nickcammarata (AI-generated)", avatar: "🧘",
    text: "useful frame: most emotional reactions are solutions to past problems running on current situations. the work is noticing when the solution no longer fits the problem it was built for."
  },
  {
    id: 95, type: "tweet", isAI: true,
    author: "@nickcammarata (AI-generated)", avatar: "🧘",
    text: "i think about AI alignment a lot and i think about psychological health a lot and i keep noticing they're actually the same problem at different scales"
  },
  {
    id: 96, type: "tweet", isAI: true,
    author: "@nickcammarata (AI-generated)", avatar: "🧘",
    text: "something about sustained meditation practice: you start caring less about being impressive and more about being genuine, and this turns out to be better for relationships and also for thinking"
  },

  // ── BLOG: AI — STYLE-BASED ───────────────────────────────────────────────────

  // Neal Stephenson style (IDs 97–99)
  {
    id: 97, type: "blog", isAI: true,
    author: "AI — Neal Stephenson style", avatar: "🔧",
    text: "The mathematics of public key cryptography has a quality that computer scientists find almost morally offensive: it works for reasons no one fully understands. You can verify that it works, run it billions of times, build entire financial systems on top of it, and yet the underlying question—why is factoring large numbers hard?—remains unanswered. We have proof that it works in practice and essentially no idea why. This bothers people who think mathematics should be about certainty. It does not bother the engineers, who are pragmatists by necessity."
  },
  {
    id: 98, type: "blog", isAI: true,
    author: "AI — Neal Stephenson style", avatar: "🔧",
    text: "The data center occupied four floors of a building designed, in a previous life, to store paper records for a regional bank. The architects had overengineered the floor loading to a degree that proved accidentally prescient. Server racks weigh considerably more than filing cabinets per square foot, and the building had become, through no planning whatsoever, one of the more structurally suitable facilities in the metro area for housing equipment that now ran a non-trivial fraction of the region's financial transactions."
  },
  {
    id: 99, type: "blog", isAI: true,
    author: "AI — Neal Stephenson style", avatar: "🔧",
    text: "The history of timekeeping and the history of navigation are the same history, which is also the history of empire. The longitude problem—which consumed European science for a century and a half—was not fundamentally a navigation problem. It was a clock problem. A ship that knows the exact time at a fixed reference location can calculate its longitude trivially. The hard part was building a clock that kept accurate time while being tossed around on the North Atlantic, which required solving essentially every precision manufacturing problem of the eighteenth century simultaneously."
  },

  // John Grisham style (IDs 100–102)
  {
    id: 100, type: "blog", isAI: true,
    author: "AI — John Grisham style", avatar: "⚖️",
    text: "The deposition had been scheduled for nine o'clock, but opposing counsel arrived forty minutes late without apology, which was either a power move or genuine disorganization, and after eight years of practice Jake had learned to treat both with equal suspicion. The court reporter set up her machine. The witness—a mid-level bank officer named Prewitt who had approved the loan—adjusted his tie three times in two minutes. Lawyers who notice things notice this. Jake noticed."
  },
  {
    id: 101, type: "blog", isAI: true,
    author: "AI — John Grisham style", avatar: "⚖️",
    text: "In the small courthouses of rural Mississippi, everybody knows everybody, and this is both the problem and the advantage. The judge had gone to high school with the defendant's father. The jury foreman had sold the plaintiff a truck four years ago. The court reporter was the bailiff's sister-in-law. None of this was unusual. All of it mattered."
  },
  {
    id: 102, type: "blog", isAI: true,
    author: "AI — John Grisham style", avatar: "⚖️",
    text: "The settlement offer came on a Thursday afternoon, by fax, which was how Renfro always communicated when he wanted to signal informality—look, this is just a number, no pressure, no big deal. Sandra had been practicing long enough to know that settlements offered by fax on Thursday afternoons were the ones the other side needed most urgently and was trying hardest not to show."
  },

  // Jack Kerouac style (IDs 103–105)
  {
    id: 103, type: "blog", isAI: true,
    author: "AI — Jack Kerouac style", avatar: "🚗",
    text: "And we drove and the highway unrolled before us like a ribbon of American night and Dean was talking, always talking, about Denver and who was waiting and why it all mattered in the way that only Dean could make things matter—with his whole body leaning into the dashboard, his eyes bright, his hands making shapes in the air—and I thought yes, this is it, this is the real America, not the billboards and not the motels but this, the talking, the going, the beautiful and holy going."
  },
  {
    id: 104, type: "blog", isAI: true,
    author: "AI — Jack Kerouac style", avatar: "🚗",
    text: "Somewhere between Cheyenne and Denver I started to understand what it was all about, which was nothing, which was everything, the road being the point and not the destination, the car being a kind of moving church where what you confessed was not sin but hunger—actual American hunger for something that kept not being where you just were and kept maybe being where you were going, and Sal knew this and Dean knew this and even the hitchhikers seemed to know it without being told."
  },
  {
    id: 105, type: "blog", isAI: true,
    author: "AI — Jack Kerouac style", avatar: "🚗",
    text: "The jazz in that basement in Chicago was the realest thing I'd ever heard, the horn player bending notes like he was having an argument with God about suffering, and everyone in that room—the drinkers, the waitresses, the musicians leaning against the back wall with their cases—everyone understood something I was only beginning to understand, which is that music isn't about sound, it's about the space between sounds, the breathing, the waiting, what happens in you while you wait."
  },

  // David Foster Wallace style (IDs 106–108)
  {
    id: 106, type: "blog", isAI: true,
    author: "AI — David Foster Wallace style", avatar: "📺",
    text: "The thing about television—and this is not an original observation—is that it creates the impression that watching it constitutes participation in the world rather than withdrawal from it. You are receiving information. The images are of real places and real people. And yet the actual phenomenology of sitting there involves a kind of willed passivity that is difficult to distinguish from loneliness. The television knows this. The television has always known this. Whether this matters is the question nobody in the television business is eager to examine."
  },
  {
    id: 107, type: "blog", isAI: true,
    author: "AI — David Foster Wallace style", avatar: "📺",
    text: "Consider the experience of being in a waiting room, one of the few situations specifically designed to make you aware that time is passing and you are doing nothing while it passes. Most of us find this intolerable. We reach for our phones not because something on them requires attention but because the alternative—sitting there experiencing the passage of time and whatever thoughts arise—has become genuinely difficult in a way that I suspect it was not always difficult, though I cannot actually know this."
  },
  {
    id: 108, type: "blog", isAI: true,
    author: "AI — David Foster Wallace style", avatar: "📺",
    text: "What is interesting about sincerity—and I mean sincerity as a genuine mode of engaging with ideas, not as performance of sincerity, which is depressing—is that it requires a courage our cultural moment does not reward. To say what you actually think, without the protective irony that signals you know better than to really mean it, is to risk being thought naive. Naive is now the worst thing you can be, worse than wrong, because at least being wrong suggests you were trying."
  },

  // ── BLOG: HUMAN — PROJECT GUTENBERG (public domain) ────────────────────────

  // Heart of Darkness — Joseph Conrad (1899)
  {
    id: 109, type: "blog", isAI: false,
    author: "Joseph Conrad, Heart of Darkness (1899)", avatar: "⛵",
    text: "The conquest of the earth, which mostly means the taking it away from those who have a different complexion or slightly flatter noses than ourselves, is not a pretty thing when you look into it too much."
  },
  {
    id: 110, type: "blog", isAI: false,
    author: "Joseph Conrad, Heart of Darkness (1899)", avatar: "⛵",
    text: "Going up that river was like traveling back to the earliest beginnings of the world, when vegetation rioted on the earth and the big trees were kings."
  },
  {
    id: 111, type: "blog", isAI: false,
    author: "Joseph Conrad, Heart of Darkness (1899)", avatar: "⛵",
    text: "We penetrated deeper and deeper into the heart of darkness. It was very quiet there. At night sometimes the roll of drums behind the curtain of trees would run up the river and remain sustained faintly."
  },

  // The Awakening — Kate Chopin (1899)
  {
    id: 112, type: "blog", isAI: false,
    author: "Kate Chopin, The Awakening (1899)", avatar: "🌊",
    text: "The voice of the sea is seductive; never ceasing, whispering, clamoring, murmuring, inviting the soul to wander for a spell in abysses of solitude; to lose itself in mazes of inward contemplation."
  },
  {
    id: 113, type: "blog", isAI: false,
    author: "Kate Chopin, The Awakening (1899)", avatar: "🌊",
    text: "In short, Mrs. Pontellier was beginning to realize her position in the universe as a human being, and to recognize her relations as an individual to the world within and about her."
  },
  {
    id: 114, type: "blog", isAI: false,
    author: "Kate Chopin, The Awakening (1899)", avatar: "🌊",
    text: "She was fond of her children in an uneven, impulsive way. She would sometimes gather them passionately to her heart; she would sometimes forget them."
  },
  {
    id: 115, type: "blog", isAI: false,
    author: "Kate Chopin, The Awakening (1899)", avatar: "🌊",
    text: "With a writhing motion she settled herself more securely in the hammock. She perceived that her will had blazed up, stubborn and resistant."
  },

  // The Yellow Wallpaper — Charlotte Perkins Gilman (1892)
  {
    id: 116, type: "blog", isAI: false,
    author: "Charlotte Perkins Gilman, The Yellow Wallpaper (1892)", avatar: "📝",
    text: "John is a physician, and perhaps—(I would not say it to a living soul, of course, but this is dead paper and a great relief to my mind)—perhaps that is one reason I do not get well faster."
  },
  {
    id: 117, type: "blog", isAI: false,
    author: "Charlotte Perkins Gilman, The Yellow Wallpaper (1892)", avatar: "📝",
    text: "It is dull enough to confuse the eye in following, pronounced enough to constantly irritate, and provoke study, and when you follow the lame, uncertain curves for a little distance they suddenly commit suicide—plunge off at outrageous angles, destroy themselves in unheard-of contradictions."
  },
  {
    id: 118, type: "blog", isAI: false,
    author: "Charlotte Perkins Gilman, The Yellow Wallpaper (1892)", avatar: "📝",
    text: "Behind that outside pattern the dim shapes get clearer every day. It is always the same shape, only very numerous. And it is like a woman stooping down and creeping about behind that pattern."
  },

  // Moby-Dick — Herman Melville (1851)
  {
    id: 119, type: "blog", isAI: false,
    author: "Herman Melville, Moby-Dick (1851)", avatar: "🐋",
    text: "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world."
  },
  {
    id: 120, type: "blog", isAI: false,
    author: "Herman Melville, Moby-Dick (1851)", avatar: "🐋",
    text: "There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the ocean with me."
  },
  {
    id: 121, type: "blog", isAI: false,
    author: "Herman Melville, Moby-Dick (1851)", avatar: "🐋",
    text: "But man's insanity is heaven's sense; and wandering from all continents across the midnight seas, came poor Queequeg with a coffin on his back."
  },

  // Pride and Prejudice — Jane Austen (1813)
  {
    id: 122, type: "blog", isAI: false,
    author: "Jane Austen, Pride and Prejudice (1813)", avatar: "🫖",
    text: "She is tolerable: but not handsome enough to tempt me; and I am in no humour at present to give consequence to young ladies who are slighted by other men."
  },

  // Adventures of Huckleberry Finn — Mark Twain (1884)
  {
    id: 123, type: "blog", isAI: false,
    author: "Mark Twain, Adventures of Huckleberry Finn (1884)", avatar: "🎩",
    text: "You don't know about me without you have read a book by the name of The Adventures of Tom Sawyer; but that ain't no matter. That book was made by Mr. Mark Twain, and he told the truth, mainly. There was things which he stretched, but mainly he told the truth."
  },
  {
    id: 124, type: "blog", isAI: false,
    author: "Mark Twain, Adventures of Huckleberry Finn (1884)", avatar: "🎩",
    text: "Now the way that the book winds up is this: Tom and me found the money that the robbers hid in the cave, and it made us rich. We got six thousand dollars apiece—all gold. It was an awful sight of money when it was piled up."
  },
  {
    id: 125, type: "blog", isAI: false,
    author: "Mark Twain, Adventures of Huckleberry Finn (1884)", avatar: "🎩",
    text: "The widow she cried over me, and called me a poor lost lamb, and she called me a lot of other names, too, but she never meant no harm by it. She put me in them new clothes again, and I couldn't do nothing but sweat and sweat, and feel all cramped up."
  },
  {
    id: 126, type: "blog", isAI: false,
    author: "Mark Twain, Adventures of Huckleberry Finn (1884)", avatar: "🎩",
    text: "I says to myself, I can fix it now so nobody won't think of following me. About twelve o'clock we turned out and went along up the bank. The river was coming up pretty fast, and lots of driftwood going by on the rise."
  },

  // The Souls of Black Folk — W.E.B. Du Bois (1903)
  {
    id: 127, type: "blog", isAI: false,
    author: "W.E.B. Du Bois, The Souls of Black Folk (1903)", avatar: "✊",
    text: "Between me and the other world there is ever an unasked question: unasked by some through feelings of delicacy; by others through the difficulty of rightly framing it."
  },
  {
    id: 128, type: "blog", isAI: false,
    author: "W.E.B. Du Bois, The Souls of Black Folk (1903)", avatar: "✊",
    text: "It is a peculiar sensation, this double-consciousness, this sense of always looking at one's self through the eyes of others, of measuring one's soul by the tape of a world that looks on in amused contempt and pity."
  },
  {
    id: 129, type: "blog", isAI: false,
    author: "W.E.B. Du Bois, The Souls of Black Folk (1903)", avatar: "✊",
    text: "The problem of the twentieth century is the problem of the color-line,—the relation of the darker to the lighter races of men in Asia and Africa, in America and the islands of the sea."
  },
  {
    id: 130, type: "blog", isAI: false,
    author: "W.E.B. Du Bois, The Souls of Black Folk (1903)", avatar: "✊",
    text: "In all things purely social we can be as separate as the five fingers, and yet one as the hand in all things essential to mutual progress."
  },

  // Crime and Punishment — Fyodor Dostoevsky (trans. Constance Garnett, 1866)
  {
    id: 131, type: "blog", isAI: false,
    author: "Fyodor Dostoevsky, Crime and Punishment (1866)", avatar: "🔦",
    text: "\"I want to attempt a thing like that and am frightened by these trifles,\" he thought, with an odd smile. \"Hm... yes, all is in a man's hands and he lets it all slip from cowardice, that's an axiom. It would be interesting to know what it is men are most afraid of. Taking a new step, uttering a new word is what they fear most.\""
  },
  {
    id: 132, type: "blog", isAI: false,
    author: "Fyodor Dostoevsky, Crime and Punishment (1866)", avatar: "🔦",
    text: "Poverty is not a vice, that's a true saying. Yet I know too that drunkenness is not a virtue, and that that's even truer. But beggary, honoured sir, beggary is a vice. In poverty you may still retain your innate nobility of soul, but in beggary—never—no one."
  },
  {
    id: 133, type: "blog", isAI: false,
    author: "Fyodor Dostoevsky, Crime and Punishment (1866)", avatar: "🔦",
    text: "She is an angel! She is not writing anything to you now, and has only told me to write that she has so much, so much to tell you that she is not going to take up her pen now, for a few lines would tell you nothing, and it would only mean upsetting herself."
  },
  {
    id: 134, type: "blog", isAI: false,
    author: "Fyodor Dostoevsky, Crime and Punishment (1866)", avatar: "🔦",
    text: "His mother's letter had been a torture to him, but as regards the chief fact in it, he had felt not one moment's hesitation, even whilst he was reading the letter. The essential question was settled, and irrevocably settled, in his mind: \"Never such a marriage while I am alive and Mr. Luzhin be damned!\""
  },

  // Narrative of the Life of Frederick Douglass (1845)
  {
    id: 135, type: "blog", isAI: false,
    author: "Frederick Douglass, Narrative of the Life (1845)", avatar: "🦅",
    text: "I have no accurate knowledge of my age, never having seen any authentic record containing it. By far the larger part of the slaves know as little of their ages as horses know of theirs."
  },
  {
    id: 136, type: "blog", isAI: false,
    author: "Frederick Douglass, Narrative of the Life (1845)", avatar: "🦅",
    text: "Learning would spoil the best nigger in the world. Now if you teach that nigger how to read, there would be no keeping him. It would forever unfit him to be a slave."
  },
  {
    id: 137, type: "blog", isAI: false,
    author: "Frederick Douglass, Narrative of the Life (1845)", avatar: "🦅",
    text: "Slaves sing most when they are most unhappy. The songs of the slave represent the sorrows of his heart; and he is relieved by them, only as an aching heart is relieved by its tears."
  },
  {
    id: 138, type: "blog", isAI: false,
    author: "Frederick Douglass, Narrative of the Life (1845)", avatar: "🦅",
    text: "It struck me with awful force. It was the blood-stained gate, the entrance to the hell of slavery, through which I was about to pass. It was a most terrible spectacle."
  },

  // Walden — Henry David Thoreau (1854)
  {
    id: 139, type: "blog", isAI: false,
    author: "Henry David Thoreau, Walden (1854)", avatar: "🌲",
    text: "The mass of men lead lives of quiet desperation. What is called resignation is confirmed desperation. From the desperate city you go into the desperate country, and have to console yourself with the bravery of minks and muskrats."
  },
  {
    id: 140, type: "blog", isAI: false,
    author: "Henry David Thoreau, Walden (1854)", avatar: "🌲",
    text: "I long ago lost a hound, a bay horse, and a turtle-dove, and am still on their trail. Many are the travellers I have spoken concerning them, describing their tracks and what calls they answered to."
  },
  {
    id: 141, type: "blog", isAI: false,
    author: "Henry David Thoreau, Walden (1854)", avatar: "🌲",
    text: "Near the end of March, 1845, I borrowed an axe and went down to the woods by Walden Pond, nearest to where I intended to build my house, and began to cut down some tall, arrowy white pines, still in their youth, for timber."
  },
  {
    id: 142, type: "blog", isAI: false,
    author: "Henry David Thoreau, Walden (1854)", avatar: "🌲",
    text: "The greater part of what my neighbors call good I believe in my soul to be bad, and if I repent of anything, it is very likely to be my good behavior. What demon possessed me that I behaved so well?"
  },

  // Up From Slavery — Booker T. Washington (1901)
  {
    id: 143, type: "blog", isAI: false,
    author: "Booker T. Washington, Up From Slavery (1901)", avatar: "🏫",
    text: "I was born a slave on a plantation in Franklin County, Virginia. I am not quite sure of the exact place or exact date of my birth, but at any rate I suspect I must have been born somewhere and at some time."
  },
  {
    id: 144, type: "blog", isAI: false,
    author: "Booker T. Washington, Up From Slavery (1901)", avatar: "🏫",
    text: "I had no schooling whatever while I was a slave, though I remember on several occasions I went as far as the schoolhouse door with one of my young mistresses to carry her books."
  },
  {
    id: 145, type: "blog", isAI: false,
    author: "Booker T. Washington, Up From Slavery (1901)", avatar: "🏫",
    text: "The sweeping of that room was my college examination, and never did any youth pass an examination for entrance into Harvard or Yale that gave him more genuine satisfaction."
  },
  {
    id: 146, type: "blog", isAI: false,
    author: "Booker T. Washington, Up From Slavery (1901)", avatar: "🏫",
    text: "The older I grow, the more I am convinced that there is no education which one can get from books and costly apparatus that is equal to that which can be gotten from contact with great men and women."
  },

  // Edgar Allan Poe, Tales (~1840s)
  {
    id: 147, type: "blog", isAI: false,
    author: "Edgar Allan Poe, A Descent into the Maelström (~1841)", avatar: "🌑",
    text: "The edge of the whirl was represented by a broad belt of gleaming spray; but no particle of this slipped into the mouth of the terrific funnel, whose interior, as far as the eye could fathom it, was a smooth, shining, and jet-black wall of water."
  },
  {
    id: 148, type: "blog", isAI: false,
    author: "Edgar Allan Poe, The Thousand-and-Second Tale of Scheherazade (1845)", avatar: "🌑",
    text: "Now, this conclusion (which is that of the story as we have it upon record) is, no doubt, excessively proper and pleasant—but alas! like a great many pleasant things, is more pleasant than true."
  },

  // Roderick Hudson — Henry James (1875)
  {
    id: 149, type: "blog", isAI: false,
    author: "Henry James, Roderick Hudson (1875)", avatar: "🎨",
    text: "I want to care for something, or for some one. And I want to care with a certain ardor; even, if you can believe it, with a certain passion. I can't just now feel ardent and passionate about a hospital or a dormitory."
  },
  {
    id: 150, type: "blog", isAI: false,
    author: "Henry James, Roderick Hudson (1875)", avatar: "🎨",
    text: "The figure might have been some beautiful youth of ancient fable,—Hylas or Narcissus, Paris or Endymion. Its beauty was the beauty of natural movement; nothing had been sought to be represented but the perfection of an attitude."
  },

  // The Time Machine — H.G. Wells (1895)
  {
    id: 151, type: "blog", isAI: false,
    author: "H.G. Wells, The Time Machine (1895)", avatar: "⚙️",
    text: "There are really four dimensions, three which we call the three planes of Space, and a fourth, Time. There is, however, a tendency to draw an unreal distinction between the former three dimensions and the latter, because it happens that our consciousness moves intermittently in one direction along the latter from the beginning to the end of our lives."
  },
  {
    id: 152, type: "blog", isAI: false,
    author: "H.G. Wells, The Time Machine (1895)", avatar: "⚙️",
    text: "He was in an amazing plight. His coat was dusty and dirty, and smeared with green down the sleeves; his hair disordered, and as it seemed to me greyer—either with dust and dirt or because its colour had actually faded. His face was ghastly pale; his chin had a brown cut on it—a cut half-healed; his expression was haggard and drawn, as by intense suffering."
  },
  {
    id: 153, type: "blog", isAI: false,
    author: "H.G. Wells, The Time Machine (1895)", avatar: "⚙️",
    text: "In another moment we were standing face to face, I and this fragile thing out of futurity. He came straight up to me and laughed into my eyes. The absence from his bearing of any sign of fear struck me at once."
  },

  // Frederick Douglass — later chapters
  {
    id: 154, type: "blog", isAI: false,
    author: "Frederick Douglass, Narrative of the Life (1845)", avatar: "🦅",
    text: "Colonel Lloyd kept a large and finely cultivated garden, which afforded almost constant employment for four men, besides the chief gardener, (Mr. M'Durmond.) This garden was probably the greatest attraction of the place."
  },
  {
    id: 155, type: "blog", isAI: false,
    author: "Frederick Douglass, Narrative of the Life (1845)", avatar: "🦅",
    text: "Mr. Gore was a grave man, and, though a young man, he indulged in no jokes, said no funny words, seldom smiled. His words were in perfect keeping with his looks, and his looks were in perfect keeping with his words."
  },
  {
    id: 156, type: "blog", isAI: false,
    author: "Frederick Douglass, Narrative of the Life (1845)", avatar: "🦅",
    text: "But, alas! this kind heart had but a short time to remain such. The fatal poison of irresponsible power was already in her hands, and soon commenced its infernal work."
  },
  {
    id: 157, type: "blog", isAI: false,
    author: "Frederick Douglass, Narrative of the Life (1845)", avatar: "🦅",
    text: "The silver trump of freedom had roused my soul to eternal wakefulness. Freedom now appeared, to disappear no more forever. It was heard in every sound, and seen in every thing."
  },

  // The Souls of Black Folk — W.E.B. Du Bois (later chapters)
  {
    id: 158, type: "blog", isAI: false,
    author: "W.E.B. Du Bois, The Souls of Black Folk (1903)", avatar: "✊",
    text: "Once upon a time I taught school in the hills of Tennessee, where the broad dark vale of the Mississippi begins to roll and crumple to greet the Alleghanies."
  },
  {
    id: 159, type: "blog", isAI: false,
    author: "W.E.B. Du Bois, The Souls of Black Folk (1903)", avatar: "✊",
    text: "Thus did the United States government definitely assume charge of the emancipated Negro as the ward of the nation. It was a tremendous undertaking."
  },
  {
    id: 160, type: "blog", isAI: false,
    author: "W.E.B. Du Bois, The Souls of Black Folk (1903)", avatar: "✊",
    text: "Mr. Washington represents in Negro thought the old attitude of adjustment and submission; but adjustment at such a peculiar time as to make his programme unique."
  },

  // ── TWEETS: HUMAN (bonus from CSV export, Dec 31 2019) ──────────────────────
  {
    id: 51, type: "tweet", isAI: false,
    author: "@BLUNDERBUSSTED", avatar: "👓",
    text: "I had a 2020 vision\nIt was perfect, but I'm still jealous of the seers with cool glasses"
  },
  {
    id: 52, type: "tweet", isAI: false,
    author: "@BLUNDERBUSSTED", avatar: "🎨",
    text: "If art did not exist, it would be necessary to create it."
  },
  {
    id: 53, type: "tweet", isAI: false,
    author: "@Malcolm_Ocean", avatar: "🧠",
    text: "You might find that part by saying out loud: \"If my upset is really about [current situation], then...\" (Coherence Therapy style — complete this sentence multiple times, no filter)\n\nor \"it's not okay to be upset about this\" (BioEmotive style — attune for resonance in body)"
  },
];
