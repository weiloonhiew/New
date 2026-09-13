// Philosophy Atlas data
// Five traditions, browsed the same way: a short reference card that opens into a fuller
// detail panel (definition, key distinctions, common misreadings, questions to sit with).
// All definitions, "essence" lines, distinctions, misreadings, and questions below are
// original synthesis written for study/reference use — not quoted text from the primary
// sources. Any short phrases in a tradition's own terms are marked as such and kept brief.

const TRADITIONS = [
  {
    id: 'heidegger',
    name: 'Heidegger',
    short: 'Heidegger',
    subtitle: 'Being',
    tagline: 'The question of what it means for anything to "be" at all — and what it means that you are the one asking.',
    source: 'Drawn from Martin Heidegger’s Being and Time (Sein und Zeit, 1927). Terms are given in German because Heidegger’s technical vocabulary resists clean translation.',
    color: '#5C7A99'
  },
  {
    id: 'diamond-sutra',
    name: 'Diamond Sutra',
    short: 'Diamond Sutra',
    subtitle: '金刚经',
    tagline: 'A Perfection-of-Wisdom teaching on emptiness, non-abiding, and giving up even the idea of "the teaching."',
    source: 'Drawn from the Vajracchedikā Prajñāpāramitā Sūtra (金刚般若波罗蜜经), a foundational Mahāyāna Buddhist text. Terms are given in Sanskrit and Chinese where useful.',
    color: '#C79A3B'
  },
  {
    id: 'jung',
    name: 'Carl Jung',
    short: 'Jung',
    subtitle: 'Analytical Psychology',
    tagline: 'The architecture of the unconscious — archetypes, shadow, and the lifelong work of becoming whole.',
    source: 'Drawn from Carl Gustav Jung’s analytical psychology, primarily his Collected Works.',
    color: '#7C5CA6'
  },
  {
    id: 'death',
    name: 'Death',
    short: 'Death',
    subtitle: 'Shelly Kagan — Yale',
    tagline: 'What am I, can I survive my own death, and is death actually bad for the person it happens to?',
    source: 'Drawn from Shelly Kagan’s Yale course "Death" (PHIL 176, Open Yale Courses) and his companion book Death.',
    color: '#6E5049'
  },
  {
    id: 'happiness',
    name: 'Happiness',
    short: 'Happiness',
    subtitle: 'Laurie Santos — Yale',
    tagline: 'Why we’re bad at predicting what will make us happy, and what the evidence says actually works.',
    source: 'Drawn from Laurie Santos’s Yale course "Psychology and the Good Life" and its public version, "The Science of Well-Being."',
    color: '#4C9F70'
  }
];

const CATEGORIES = [
  // Heidegger
  { id: 'being', tradition: 'heidegger', title: 'Being & the Question of Being', short: 'Being Itself', blurb: 'What it means for anything to be, and why the question got forgotten.', color: '#5C7A99' },
  { id: 'world', tradition: 'heidegger', title: 'Being-in-the-World & Everydayness', short: 'Everydayness', blurb: 'How Dasein is always already amid a world of equipment and other people.', color: '#8B6F47' },
  { id: 'attunement', tradition: 'heidegger', title: 'Mood, Understanding & Care', short: 'Care', blurb: 'The structures that make up Dasein’s way of being at all.', color: '#4C7A6B' },
  { id: 'death-time', tradition: 'heidegger', title: 'Death & Temporality', short: 'Death & Time', blurb: 'How finitude and time structure existence from the inside.', color: '#7A4F55' },
  { id: 'authenticity', tradition: 'heidegger', title: 'Authenticity & Conscience', short: 'Authenticity', blurb: 'Owning your existence as your own, versus losing it to "the They."', color: '#9C5B6E' },

  // Diamond Sutra
  { id: 'wisdom', tradition: 'diamond-sutra', title: 'Wisdom & Emptiness', short: 'Wisdom', blurb: 'Prajñā and śūnyatā — seeing through fixed essences.', color: '#C79A3B' },
  { id: 'self', tradition: 'diamond-sutra', title: 'The Four Marks & No-Self', short: 'No-Self', blurb: 'Why clinging to a fixed self undoes even virtuous practice.', color: '#B15E3D' },
  { id: 'practice', tradition: 'diamond-sutra', title: 'Non-Abiding Practice & Giving', short: 'Practice', blurb: 'Acting, and giving, without the mind fixing on an outcome.', color: '#4C8B6B' },
  { id: 'bodhisattva', tradition: 'diamond-sutra', title: 'The Bodhisattva Path', short: 'Bodhisattva', blurb: 'Vowing to liberate all beings while releasing the idea of "beings saved."', color: '#6B7FB0' },
  { id: 'language', tradition: 'diamond-sutra', title: 'Language, Paradox & the Raft', short: 'Language', blurb: 'How the sutra uses and then dismantles its own words.', color: '#8B6BA6' },

  // Jung
  { id: 'structure', tradition: 'jung', title: 'Structure of the Psyche', short: 'Structure', blurb: 'The layered architecture of conscious and unconscious mind.', color: '#6B4FA0' },
  { id: 'archetypes', tradition: 'jung', title: 'Archetypes & the Collective Unconscious', short: 'Archetypes', blurb: 'Inherited patterns shared across cultures and history.', color: '#4F6B9E' },
  { id: 'shadow-self', tradition: 'jung', title: 'Shadow, Persona & the Self', short: 'Shadow & Self', blurb: 'The disowned, the presented, and the whole.', color: '#9E5B7A' },
  { id: 'individuation', tradition: 'jung', title: 'Individuation', short: 'Individuation', blurb: 'The lifelong work of becoming who you distinctly are.', color: '#4F9E6B' },
  { id: 'typology', tradition: 'jung', title: 'Dreams, Symbols & Typology', short: 'Typology', blurb: 'How the unconscious speaks, and how minds differ in style.', color: '#9E8A4F' },

  // Death (Kagan)
  { id: 'metaphysics', tradition: 'death', title: 'What Am I? (Metaphysics of Persons)', short: 'What Am I?', blurb: 'Body, soul, and what makes you the same person over time.', color: '#6E5049' },
  { id: 'badness', tradition: 'death', title: 'Is Death Bad For Me?', short: 'Is It Bad?', blurb: 'How death could be bad without being felt as bad.', color: '#8B5B5B' },
  { id: 'puzzles', tradition: 'death', title: 'Puzzles About Death’s Badness', short: 'Puzzles', blurb: 'Classic arguments that make death’s badness harder to pin down.', color: '#5B7A8B' },
  { id: 'immortality', tradition: 'death', title: 'Immortality', short: 'Immortality', blurb: 'Whether living forever would actually be good.', color: '#7A8B5B' },
  { id: 'response', tradition: 'death', title: 'How Should We Live, Knowing We’ll Die?', short: 'How to Live', blurb: 'The practical upshot of taking finitude seriously.', color: '#8B7A5B' },

  // Happiness (Santos)
  { id: 'miswanting', tradition: 'happiness', title: 'What We Get Wrong About Happiness', short: 'Miswanting', blurb: 'Why we’re bad at forecasting what will make us happy.', color: '#D98E3F' },
  { id: 'predictors', tradition: 'happiness', title: 'What Actually Predicts Happiness', short: 'Predictors', blurb: 'The evidence-backed factors that reliably move the needle.', color: '#4C9F70' },
  { id: 'biases', tradition: 'happiness', title: 'Mind Tricks That Get in the Way', short: 'Biases', blurb: 'Automatic mental habits that mislead our forecasts.', color: '#8B6BA6' },
  { id: 'rewirements', tradition: 'happiness', title: 'Rewirements — Practices That Work', short: 'Rewirements', blurb: 'Repeated practices shown to actually shift baseline happiness.', color: '#3C8DAD' }
];

const CONCEPTS = [
  // ===================== HEIDEGGER =====================
  {
    id: 'being', tradition: 'heidegger', category: 'being',
    name: 'Being', subtitle: 'das Sein',
    definition: 'Not a thing among things but the fact that anything is at all — the background sense of "is" that lets beings show up as beings in the first place.',
    essence: 'The oldest question in philosophy, and the one philosophy forgot to keep asking.',
    marks: [
      'Distinct from any particular being (a rock, a number, God) — Being is what lets beings be beings at all.',
      'Heidegger’s whole project (Being and Time) opens by claiming Western philosophy has "forgotten" this question since Plato.',
      'Access to the question runs through one particular being — Dasein — because Dasein is the being for whom Being is an issue.'
    ],
    misreadings: [
      'Treating "Being" as a very large, very abstract being (like "the universe" or "God") rather than as the condition for anything showing up as a being.',
      'Assuming the question is settled by science, which studies beings, not Being as such.'
    ],
    questions: [
      'What does it mean that there is something rather than nothing?',
      'When was the last time the sheer fact that anything exists actually struck you?',
      'What would change if you treated "is" as a mystery rather than a given?'
    ]
  },
  {
    id: 'ontological-difference', tradition: 'heidegger', category: 'being',
    name: 'Ontological Difference', subtitle: 'Being vs. beings',
    definition: 'The distinction between Being (Sein) — the "that it is" underlying anything — and beings (Seiendes) — the particular things that are.',
    essence: 'Confusing Being with a being is the mistake Heidegger says all of metaphysics keeps making.',
    marks: [
      'A hammer, a mood, a number, and a person are all beings; none of them is Being itself.',
      'Metaphysics, in Heidegger’s diagnosis, keeps trying to explain Being by pointing to some especially important being (a First Cause, a Creator, the atom).',
      'Keeping the difference in view is what makes "fundamental ontology" possible — asking about Being without reducing it to another being.'
    ],
    misreadings: [
      'Reading it as a claim that Being is "more real" than beings, rather than a different kind of question entirely.',
      'Treating it as a technicality rather than the hinge the whole book turns on.'
    ],
    questions: [
      'Where in your own thinking do you quietly swap "Being" for "the biggest, most important thing that exists"?',
      'Can you name the "is" in a sentence without pointing at any particular thing?'
    ]
  },
  {
    id: 'dasein', tradition: 'heidegger', category: 'being',
    name: 'Dasein', subtitle: 'being-there',
    definition: 'Heidegger’s name for the human way of being — literally "being-there" — used instead of "human," "subject," or "consciousness" to avoid importing their assumptions.',
    essence: 'You are not a mind inside a body looking out at a world; you are already out there, in it, caring about how things go.',
    marks: [
      'Dasein is the being for whom its own Being is a question and a stake — no other being cares whether it exists.',
      'Dasein is always already "in" a world of meaning and equipment, not a detached observer added to a world of neutral objects.',
      'Dasein’s Being is "in each case mine" (Jemeinigkeit) — it can’t be studied the way a rock can, from the outside only.'
    ],
    misreadings: [
      'Treating Dasein as simply a fancy synonym for "person" or "the mind" — it names a way of being, not a type of entity.',
      'Forgetting that Dasein includes the world and others as constitutive, not as add-ons to an isolated self.'
    ],
    questions: [
      'In what sense is your own existence something you have to answer for, rather than a fact you simply possess?',
      'What would it change to say you’re "in" the world the way you’re in a conversation, not the way a coin is in a jar?'
    ]
  },
  {
    id: 'being-in-the-world', tradition: 'heidegger', category: 'world',
    name: 'Being-in-the-World', subtitle: 'In-der-Welt-sein',
    definition: 'Dasein’s basic constitution: there is no self that exists first and then relates to a world second — being a self and being-in-a-world are one structure.',
    essence: 'The self and its world come as a package, not a subject plus a container.',
    marks: [
      '"World" here means a meaningful web of purposes and equipment ("in-order-to"s), not the physical universe.',
      'Rules out both pure subjectivism (a mind cut off from the world) and naive realism (a world of objects nobody cares about).',
      'Everyday coping — using a door handle, reading a room — already displays this unity before any theory is formed about it.'
    ],
    misreadings: [
      'Picturing it spatially, like a ball in a box — "in" names an involvement, a being-alongside and being-amidst, not physical containment.',
      'Assuming it denies an external world exists — it denies that subject and world are separable in the way Descartes assumed.'
    ],
    questions: [
      'Can you catch yourself relating to something (a tool, a task, a room) without already understanding what it’s for?',
      'What does your world look like when you strip out every purpose things serve for you?'
    ]
  },
  {
    id: 'ready-to-hand', tradition: 'heidegger', category: 'world',
    name: 'Ready-to-Hand & Present-at-Hand', subtitle: 'Zuhandenheit / Vorhandenheit',
    definition: 'Two modes in which things show up: ready-to-hand, as usable gear folded into a task (a hammer while hammering), and present-at-hand, as a detached object with properties (a hammer studied as an object with mass and shape).',
    essence: 'Most of your day is spent among tools that disappear into use — until something breaks.',
    marks: [
      'Readiness-to-hand is the default, unnoticed mode: equipment "withdraws" precisely when it’s working well.',
      'A breakdown (the hammer’s head flies off) is what makes a thing suddenly conspicuous, obtrusive, present-at-hand.',
      'Theoretical, scientific observation is a derived, specialized stance built on top of everyday coping, not the other way around.'
    ],
    misreadings: [
      'Assuming present-at-hand is the "more objective" or "more real" mode — Heidegger argues the reverse: it’s the derivative one.',
      'Treating this as a claim only about physical tools — it applies to language, other people’s roles, even one’s own body in skilled action.'
    ],
    questions: [
      'What in your life is currently "ready-to-hand" — so well-functioning you don’t see it at all?',
      'What recently broke, stalled, or went missing, and suddenly became an object you had to stare at?'
    ]
  },
  {
    id: 'das-man', tradition: 'heidegger', category: 'world',
    name: 'Das Man (The They)', subtitle: 'the anyone',
    definition: 'The anonymous, average way "one" does things — how "they" dress, what "one" says — that Dasein absorbs from others and, for the most part, simply is.',
    essence: 'Most of the time, it isn’t "you" living your life — it’s "what one does."',
    marks: [
      'Das Man is not a group of people; it’s a mode of Dasein’s own being — a kind of dispersal into public averageness.',
      'It operates through "idle talk" (repeating what’s said without owning it), "curiosity" (jumping between novelties without dwelling), and "ambiguity" (losing track of what’s genuinely understood vs. merely talked about).',
      'It’s not simply bad — it’s how Dasein is first introduced to a shared, intelligible world at all; there’s no escaping it entirely.'
    ],
    misreadings: [
      'Reading das Man as contempt for "other people" or "society" — the target is a way of relating to norms, including one’s own conformity, not other individuals.',
      'Assuming authenticity means exiting das Man permanently — for Heidegger it’s at most a modified way of belonging to it, seized rather than drifted into.'
    ],
    questions: [
      'Which of your current opinions did you actually arrive at, versus absorb as "what one thinks"?',
      'Where does "that’s just what you do" end and your own decision begin?'
    ]
  },
  {
    id: 'thrownness', tradition: 'heidegger', category: 'attunement',
    name: 'Thrownness', subtitle: 'Geworfenheit',
    definition: 'The brute fact that Dasein always finds itself already in a situation — a body, an era, a language, a family — that it never chose and can’t get behind.',
    essence: 'You never got to consent to the terms you started on.',
    marks: [
      'Disclosed affectively, in mood, before it’s grasped intellectually — moods reveal that we’re already delivered over to a "that-it-is" we didn’t author.',
      'Thrownness doesn’t stop once childhood ends — Dasein is continually thrown, is always already in a situation not of its own making.',
      'Pairs with projection: Dasein is thrown possibility — it has to take up a past it didn’t choose and press forward into a future it must choose.'
    ],
    misreadings: [
      'Confusing thrownness with fatalism — it names the given starting conditions, not that the outcome is fixed.',
      'Treating it as only about birth circumstances — any situation you find yourself already in (a job, a relationship, a diagnosis) discloses thrownness.'
    ],
    questions: [
      'What facts about your situation did you not choose, and how are you currently relating to them — resenting, denying, or taking them up?',
      'What mood are you in right now, and what is it revealing about how things already stand for you?'
    ]
  },
  {
    id: 'attunement-anxiety', tradition: 'heidegger', category: 'attunement',
    name: 'Mood & Anxiety', subtitle: 'Befindlichkeit / Angst',
    definition: 'Mood (Befindlichkeit) is not an inner feeling layered onto neutral facts but the way Dasein is always already attuned to how things matter; anxiety (Angst) is the singular mood that strips away all particular things that matter and discloses the world as such, and one’s own being, as a naked possibility.',
    essence: 'Fear is of something specific; anxiety is about nothing in particular — which is exactly what makes it revealing.',
    marks: [
      'Mood discloses Dasein’s thrownness before any thinking does — you’re always already tuned one way or another, never neutral.',
      'In anxiety, everyday involvements go slack; das Man’s familiar world of significance collapses, leaving Dasein face to face with its own naked existence.',
      'Anxiety individualizes — it strips away the roles and busyness that let Dasein hide in das Man, and can open the way to authenticity.'
    ],
    misreadings: [
      'Treating anxiety (Angst) as ordinary anxiety-disorder worry, or confusing it with fear of a specific danger — Heidegger’s Angst has no object.',
      'Assuming moods are just subjective coloring on top of objective facts — for Heidegger, mood is how facts first show up as mattering at all.'
    ],
    questions: [
      'Can you recall a moment when everything familiar suddenly felt strange or groundless, for no particular reason?',
      'What is your current mood disclosing about how your situation already matters to you, before you’ve thought about it?'
    ]
  },
  {
    id: 'understanding-projection', tradition: 'heidegger', category: 'attunement',
    name: 'Understanding & Projection', subtitle: 'Verstehen / Entwurf',
    definition: 'Understanding is not primarily intellectual knowledge but Dasein’s practical grasp of its own possibilities — "knowing how" to be — and projection is the way Dasein is always thrown forward onto possibilities it presses into, ahead of itself.',
    essence: 'You understand a life the way you understand a skill — by being able to go on, not by having a theory of it.',
    marks: [
      'Understanding is always understanding of possibilities — what Dasein could be or do next — not just facts about the present.',
      'Projection (Entwurf) means Dasein is always "ahead of itself," pressing into a future it has not yet realized, even in mundane action.',
      'Interpretation (Auslegung) is understanding made explicit — working out the "as" structure already implicit in practical understanding.'
    ],
    misreadings: [
      'Reading "projection" as fantasy or wishful thinking — it names the structural fact of being oriented toward possibility, not a psychological habit.',
      'Treating understanding as a separate cognitive faculty rather than something displayed in competent action itself.'
    ],
    questions: [
      'What possibility are you currently "ahead of yourself" toward, whether or not you’ve named it?',
      'What do you understand by doing that you couldn’t yet say in words?'
    ]
  },
  {
    id: 'care', tradition: 'heidegger', category: 'attunement',
    name: 'Care', subtitle: 'Sorge',
    definition: 'Heidegger’s name for the unified structure of Dasein’s Being: "ahead-of-itself, already-being-in (a world), as being-alongside (entities encountered within the world)" — thrownness, projection, and falling held together as one whole.',
    essence: 'Before you’re rational, moral, or anything else, you’re a being to whom its own existence and its world matter.',
    marks: [
      'Care is not an emotion (caring "about" something in the ordinary sense) — it’s the ontological structure underlying every mode of Dasein’s Being, including indifference.',
      'It unifies three elements Heidegger treats separately: existentiality (projection/possibility), facticity (thrownness), and falling (absorption in das Man and things).',
      'Care is what makes any particular concern, worry, or ambition possible in the first place — it’s the condition, not one item among Dasein’s concerns.'
    ],
    misreadings: [
      'Reducing "care" to a feeling of tenderness or concern for others — it is a structural, not an emotional, term.',
      'Treating it as optional — for Heidegger, Dasein simply is care, in every mode from absorbed busyness to detached boredom.'
    ],
    questions: [
      'What does it mean that even your most indifferent moments presuppose that something matters to you?',
      'If care is unavoidable, what have you been directing it toward by default, versus by choice?'
    ]
  },
  {
    id: 'being-toward-death', tradition: 'heidegger', category: 'death-time',
    name: 'Being-toward-Death', subtitle: 'Sein-zum-Tode',
    definition: 'Dasein’s death is not a future event that will happen to it one day, but a possibility it is always already living toward — its "ownmost, non-relational, not-to-be-outstripped" possibility.',
    essence: 'You’re not waiting for death; you’re already structured by it, whether you notice or not.',
    marks: [
      '"Ownmost" — no one can die your death for you; it individualizes absolutely.',
      '"Non-relational" — it strips away every role and relationship das Man supplies; in the face of it, those don’t answer for you.',
      '"Not-to-be-outstripped" (certain, yet indefinite as to when) — this combination of certainty and indeterminate timing is what makes authentic anticipation, not mere waiting, possible.',
      'Authentic being-toward-death ("anticipation," Vorlaufen) is not morbid dwelling on dying, but a resolute owning of finitude that clarifies what matters now.'
    ],
    misreadings: [
      'Confusing "being-toward-death" with actually dying, or with a fascination with death — it concerns the structure of a still-living existence.',
      'Reading it as advice to be gloomy — Heidegger’s point is closer to: only finitude gives your possibilities their weight and urgency.'
    ],
    questions: [
      'If you took your death as certain-but-undated rather than a distant abstraction, what would you stop postponing?',
      'Which of your commitments would still matter if you owned, rather than avoided, your own finitude?'
    ]
  },
  {
    id: 'temporality', tradition: 'heidegger', category: 'death-time',
    name: 'Temporality', subtitle: 'Zeitlichkeit',
    definition: 'The deeper, unified structure of past, present, and future — "having-been," "making-present," and "coming-toward" — that Heidegger argues underlies and makes possible Care, and ordinary clock-time is a leveled-down derivative of.',
    essence: 'Time isn’t a river you’re floating on; it’s the very shape of your existing.',
    marks: [
      'The future ("coming-toward," Zukunft) has priority: Dasein is primarily its possibilities, pressing forward, not primarily its past.',
      '"Having-been" (Gewesenheit) is not a vanished past but how thrownness remains operative now — you "are" your past in the sense of still being shaped by it.',
      'Ordinary, clock-measured "now-time" is what temporality looks like once it’s flattened into a sequence of interchangeable instants — useful, but derivative.',
      'Authentic temporality (tied to anticipating death, having-been in resoluteness, and a genuine present) contrasts with the scattered, distracted time of das Man.'
    ],
    misreadings: [
      'Treating temporality as just "subjective experience of time" as opposed to "real" clock time — Heidegger argues the relation runs the other way: clock time derives from existential temporality.',
      'Assuming past/present/future are three separate things temporality glues together, rather than one indivisible structure viewed from three angles.'
    ],
    questions: [
      'In what sense are you still "living out" a past that hasn’t simply gone away?',
      'Where has clock-time crowded out a more honest sense of how your life is actually unfolding?'
    ]
  },
  {
    id: 'authenticity', tradition: 'heidegger', category: 'authenticity',
    name: 'Authenticity & Inauthenticity', subtitle: 'Eigentlichkeit / Uneigentlichkeit',
    definition: 'Authenticity (literally "own-ness") is Dasein owning its existence as its own — choosing its possibilities in light of its thrownness and finitude; inauthenticity is losing itself in das Man, letting "anyone" make its choices.',
    essence: 'The question isn’t which choices you make, but whether they’re actually yours.',
    marks: [
      'Neither term is primarily moral — inauthenticity is not "sin," and Heidegger insists it’s not a lesser or lower way of Being, just an unowned one.',
      'Authenticity is not escaping the social world (impossible, since Dasein is essentially being-with-others) but taking up shared possibilities as resolutely one’s own.',
      'It is typically triggered by anxiety and the anticipation of death, which strip away das Man’s ready-made answers and throw the question of existence back onto Dasein itself.',
      'It’s a modification of everyday existence, not a permanent achieved state — Heidegger doesn’t offer a technique for staying there.'
    ],
    misreadings: [
      'Treating authenticity as "being a nonconformist" or "expressing your true feelings" — that’s a popular gloss, not Heidegger’s technical sense.',
      'Assuming inauthenticity is something to feel guilty about — Heidegger treats everyday absorption in das Man as unavoidable and even necessary.'
    ],
    questions: [
      'Which of today’s decisions did "one" make, and which did you make?',
      'What would it look like to take up a role you didn’t choose (family, job, culture) resolutely, as your own, rather than by default?'
    ]
  },
  {
    id: 'conscience-guilt', tradition: 'heidegger', category: 'authenticity',
    name: 'Conscience & Guilt', subtitle: 'Ruf des Gewissens / Schuldigsein',
    definition: 'Conscience, for Heidegger, is not a moral faculty issuing verdicts but a silent "call" that summons Dasein out of das Man’s chatter back to itself; the guilt it calls attention to is not wrongdoing but "being-the-null-basis of a nullity" — being responsible for a self it did not found and cannot fully realize.',
    essence: 'The call has no message except: it’s you it’s calling.',
    marks: [
      'The caller and the called are both Dasein itself — conscience is Dasein calling itself out of its lostness in das Man.',
      'The call says nothing specific and gives no information — its content is simply the summons to authentic potentiality-for-Being.',
      '"Guilt" here is ontological, not a feeling of remorse: it names the structural fact that Dasein is thrown (a basis it didn’t lay) and finite (can never realize all its possibilities at once).',
      '"Wanting to have a conscience" and resolutely hearing the call is what Heidegger calls "resoluteness" (Entschlossenheit).'
    ],
    misreadings: [
      'Equating this guilt with moral guilt for a specific bad act — it’s a structural condition of existing at all, present even in a blameless life.',
      'Expecting the call of conscience to deliver content or instructions — its whole force is that it calls without saying anything.'
    ],
    questions: [
      'What would it mean to hear a summons that tells you nothing except that it’s addressed to you?',
      'Where do you feel the pull of a basis you didn’t choose and can’t fully settle?'
    ]
  },

  // ===================== DIAMOND SUTRA =====================
  {
    id: 'prajnaparamita', tradition: 'diamond-sutra', category: 'wisdom',
    name: 'Prajñāpāramitā', subtitle: 'Perfection of Wisdom / 般若波罗蜜',
    definition: 'The "wisdom that has gone beyond" — direct insight into the empty, non-fixed nature of all things, as opposed to ordinary discursive knowledge.',
    essence: 'Not more information, but a different way of seeing through fixed categories altogether.',
    marks: [
      'The sutra belongs to the Prajñāpāramitā literature, whose central theme is that this wisdom itself cannot be grasped as a possession or a thing attained.',
      'It’s paired with (and completes) the five other perfections — giving, ethics, patience, effort, meditation — as the one that keeps the rest from becoming subtly self-serving.',
      'Even the term "Perfection of Wisdom" is, within the sutra’s own logic, empty — named only for the sake of communication, not because it names a fixed essence.'
    ],
    misreadings: [
      'Treating prajñā as clever intellect or accumulated knowledge — it points to a mode of seeing, not a store of facts.',
      'Turning "perfection of wisdom" into a trophy to be attained and then held onto, which the sutra treats as missing the point entirely.'
    ],
    questions: [
      'Where do you mistake having more information for actually seeing clearly?',
      'What would it feel like to understand something without turning that understanding into a possession?'
    ]
  },
  {
    id: 'sunyata', tradition: 'diamond-sutra', category: 'wisdom',
    name: 'Śūnyatā', subtitle: 'Emptiness / 空',
    definition: 'The teaching that all phenomena — including the self, the Buddha’s marks, the Dharma, and enlightenment itself — lack a fixed, independent, permanent essence; they arise dependent on conditions.',
    essence: 'Nothing is nothing — but nothing is fixed, either.',
    marks: [
      'Emptiness is not nihilism ("nothing exists") but a claim about how things exist: dependently, relationally, without a changeless core.',
      'The sutra applies this radically and reflexively — even "emptiness" and "the Dharma" are said to be empty, so the teaching doesn’t become a new fixed thing to cling to.',
      'This is why the sutra insists a bodhisattva who still perceives a fixed self, being, or phenomenon has not understood the teaching, however devout their practice.'
    ],
    misreadings: [
      'Confusing emptiness with things being unreal, worthless, or illusory in the sense of "not mattering" — dependent things still function and their consequences are real.',
      'Turning emptiness into a fixed position or view to defend, which the tradition calls "grasping the raft after crossing the river."'
    ],
    questions: [
      'What do you treat as a fixed, permanent thing that is actually a temporary pattern of conditions?',
      'Can you hold an idea — even this one — without turning it into something to defend?'
    ]
  },
  {
    id: 'four-marks', tradition: 'diamond-sutra', category: 'self',
    name: 'The Four Marks', subtitle: 'self, person, sentient being, life span / 我相人相众生相寿者相',
    definition: 'The sutra’s recurring diagnostic: clinging to a notion of a fixed "self," "person," "sentient being," or "life span" is what disqualifies even generous, disciplined practice from being a bodhisattva’s practice.',
    essence: 'The finish line the sutra keeps moving: it’s not what you do, it’s whether you still think there’s a fixed "someone" doing it.',
    marks: [
      'The four marks appear together repeatedly as a single test-phrase: anyone who still perceives these has fallen short, however virtuous their outward conduct.',
      'This is not a denial that persons conventionally exist — it targets the reifying of persons into fixed, independent essences.',
      'The Buddha applies the same test to himself and his own attainment ("If I had the notion... I should not be..."), refusing any exemption.'
    ],
    misreadings: [
      'Reading this as a claim that individuals don’t exist at all in any sense, rather than a claim about how we misconceive what they are.',
      'Treating "no-self" as an experience to chase, rather than the letting-go of a subtle assumption running underneath ordinary effort.'
    ],
    questions: [
      'Where does "I am the one doing this good thing" quietly slip back into your motivation?',
      'Can you help someone without the help becoming, even slightly, about who you are?'
    ]
  },
  {
    id: 'apratisthita', tradition: 'diamond-sutra', category: 'practice',
    name: 'Non-Abiding Mind', subtitle: '應無所住而生其心',
    definition: 'The sutra’s central instruction, later said to be what triggered the Sixth Chan/Zen Patriarch Huineng’s awakening on hearing it: give rise to a mind that does not abide, or fix itself, on any object — not on form, sound, smell, taste, touch, or mental object.',
    essence: 'Act, give, and think — from nowhere in particular to land.',
    marks: [
      'Applied first to giving (dāna): a bodhisattva gives without dwelling on the giver, the gift, or the receiver — and this non-abiding giving is called "immeasurable," like space itself.',
      'It’s not detachment as withdrawal — the mind still arises, engages, responds; it simply doesn’t fasten onto any fixed resting point.',
      'This is the practical, moment-to-moment version of the philosophical teaching of emptiness — theory turned into a way of using attention.'
    ],
    misreadings: [
      'Reading "non-abiding" as blankness or suppressing thought — the text says the mind should still "arise," just without fixation.',
      'Treating it as an argument for indifference or not caring how things turn out, rather than caring without grasping.'
    ],
    questions: [
      'Where does your mind currently "abide" — on an outcome, an identity, a grudge — without your noticing?',
      'Could you do today’s most caring act without needing credit, a result, or even a private sense of having done it?'
    ]
  },
  {
    id: 'raft', tradition: 'diamond-sutra', category: 'language',
    name: 'The Raft & the Dharma That Is Not the Dharma', subtitle: '法尚應舍，何況非法',
    definition: 'The sutra’s teaching that the Dharma (the teaching itself) is like a raft used to cross a river: useful for the crossing, but not meant to be carried on your back afterward — "the Dharma should be relinquished, how much more so what is not the Dharma."',
    essence: 'Even the finger pointing at the moon is not the moon — and shouldn’t be mistaken for it.',
    marks: [
      'Applied throughout the sutra to its own teachings: whatever the Buddha expounds, he immediately qualifies as "not really it," precisely so it isn’t mistaken for a fixed truth to grasp.',
      'This is why the sutra can say a bodhisattva who perceives a fixed "Dharma" has fallen into the same trap as one who perceives a fixed self.',
      'It licenses letting go of correct teachings once they’ve done their job, not only wrong ones — a subtler and harder release.'
    ],
    misreadings: [
      'Using "it’s just a raft" as an excuse to discard practice or discipline before it has done any work — the raft is still needed to cross.',
      'Treating this as anti-intellectual — the sutra is famously philosophically dense; the point is non-attachment to views, not avoidance of them.'
    ],
    questions: [
      'What teaching, technique, or identity served you well but you’re still carrying long after the crossing?',
      'Can you use an idea fully and still be willing to put it down?'
    ]
  },
  {
    id: 'negation-formula', tradition: 'diamond-sutra', category: 'language',
    name: 'The Negation Formula', subtitle: '"A is not A, therefore it is called A" / 即非…是名…',
    definition: 'The sutra’s signature rhetorical structure, repeated for dozens of terms (the Dharma, the Buddha, merit, the Perfection of Wisdom, even "all dharmas"): X is spoken of, then negated as not ultimately X, then reaffirmed as conventionally called X.',
    essence: 'Three moves, every time: name it, empty it, and let the name stand anyway — for the sake of speaking at all.',
    marks: [
      'This tri-partite move (assert / negate / reaffirm as convention) is the sutra’s chief tool for teaching emptiness without falling into either naive realism or nihilism.',
      'It keeps language usable — you still need the word "mountain" to talk about mountains — while refusing to let any word calcify into a claim about a fixed essence.',
      'Later Madhyamaka philosophy (Nāgārjuna) systematizes exactly this two-truths structure: conventional truth and ultimate truth, held together rather than played off against each other.'
    ],
    misreadings: [
      'Reading it as mere wordplay or a logical trick — in context it’s a precise method for holding conventional usefulness and ultimate emptiness at once.',
      'Concluding that because nothing is ultimately fixed, nothing can be meaningfully said — the sutra itself is thousands of words, spoken on exactly this basis.'
    ],
    questions: [
      'Can you name something plainly, doubt its fixed reality, and still use the name — all at once?',
      'Where in your own speech would "X, not ultimately X, but still conventionally called X" be more honest than a flat claim?'
    ]
  },
  {
    id: 'bodhisattva-vow', tradition: 'diamond-sutra', category: 'bodhisattva',
    name: 'The Bodhisattva’s Vow', subtitle: '度一切眾生已，而無有一眾生實滅度者',
    definition: 'The vow to lead every sentient being to final liberation, paired immediately with the teaching that, rightly understood, "no being is actually liberated" — because clinging to the notion of beings to be saved is itself what the vow must overcome.',
    essence: 'Save everyone; realize there’s no fixed "everyone" to have saved.',
    marks: [
      'This is the sutra’s opening challenge, posed by Subhuti: how should one who has resolved toward supreme enlightenment "subdue the mind"? The vow-plus-emptiness answer follows immediately.',
      'The vow is universal in scope (every kind of being, in every kind of birth) yet immediately self-emptying, to prevent the bodhisattva from quietly becoming the hero of the story.',
      'This structure — total commitment held without self-congratulation — recurs as the sutra’s model for all bodhisattva conduct, not only for the grand vow.'
    ],
    misreadings: [
      'Hearing "no being is really liberated" as an excuse for passivity or indifference to others’ suffering — the vow to act universally comes first, not the emptying-out.',
      'Treating this as a paradox to resolve intellectually rather than a stance to practice: act fully, without owning the outcome.'
    ],
    questions: [
      'Where does helping others quietly become about your own identity as a helper?',
      'Can you commit to a large aim without needing to be seen as the one who achieved it?'
    ]
  },
  {
    id: 'merit-beyond-measure', tradition: 'diamond-sutra', category: 'practice',
    name: 'Merit Beyond Measure', subtitle: '福德',
    definition: 'The sutra’s repeated comparisons — that giving without abiding in giving, or upholding even a four-line verse of the sutra and sharing it, generates merit "immeasurable" and "incalculable," exceeding the merit of filling galaxies with treasure as an offering.',
    essence: 'The size of the gift matters less than whether the giver is still standing on it.',
    marks: [
      'The comparisons are hyperbolic on purpose — cosmic quantities of treasure — to make the qualitative point vivid: non-abiding giving is a different order of thing, not just a bigger version of ordinary giving.',
      'The sutra applies the same logic to understanding and transmitting the teaching itself: grasping and sharing even a small portion outweighs vast material generosity.',
      'This ties directly back to non-abiding mind — merit is "immeasurable" precisely because it isn’t being mentally measured, hoarded, or dedicated to a fixed self.'
    ],
    misreadings: [
      'Reading this as literal spiritual accounting — a scorecard where certain acts earn more points — rather than as an illustration of a qualitative shift in how giving is held.',
      'Using the teaching to devalue ordinary material generosity, which the sutra never dismisses — it addresses how it’s given, not whether to give.'
    ],
    questions: [
      'Have you ever given something small completely, without a trace of self-reference, versus something large while quietly keeping score?',
      'What would change in your generosity if you stopped tracking its size?'
    ]
  },
  {
    id: 'thirty-two-marks', tradition: 'diamond-sutra', category: 'self',
    name: 'The Thirty-two Marks', subtitle: '三十二相',
    definition: 'The traditional list of physical marks said to distinguish a Buddha’s body; the sutra repeatedly asks whether the Tathāgata can be recognized by these marks, and answers no — "all marks are illusory... if you see all marks as no-marks, then you see the Tathāgata."',
    essence: 'If you’re looking for the Buddha in a body, you’ve already missed him.',
    marks: [
      'The sutra uses this specifically to block the most natural devotional error: identifying an enlightened being with a special, superior physical form.',
      'The famous closing verse extends this: "Whoever sees me in form, or seeks me in sound, walks a deviant path and cannot see the Tathāgata" — form and sound are the wrong place to look for what’s ultimate.',
      'It parallels the four-marks teaching about persons: just as no fixed self is found in a person, no fixed "Buddha-essence" is found in a describable form.'
    ],
    misreadings: [
      'Concluding the historical Buddha’s physical existence is denied — the target is fixating on marks as the locus of what’s ultimately significant, not historical fact.',
      'Applying this only to Buddhist iconography rather than to any tendency to locate what matters in an impressive appearance or credential.'
    ],
    questions: [
      'Where do you look for "the real thing" in an impressive appearance rather than in what’s actually happening?',
      'Whom have you underestimated, or overestimated, purely on the strength of how they present?'
    ]
  },
  {
    id: 'dreamlike', tradition: 'diamond-sutra', category: 'wisdom',
    name: 'All Conditioned Dharmas Are Like a Dream', subtitle: '一切有為法，如夢幻泡影',
    definition: 'The sutra’s closing gāthā: "All conditioned phenomena are like a dream, an illusion, a bubble, a shadow, like dew or a flash of lightning — thus should they be contemplated."',
    essence: 'Not that nothing is happening — that whatever is happening isn’t holding still.',
    marks: [
      'Each image (dream, illusion, bubble, shadow, dew, lightning) emphasizes vividness and reality-in-the-moment together with instability and impermanence — they’re not saying experience is "fake."',
      'It functions as the sutra’s practical takeaway line — the one verse most quoted and memorized on its own, meant to be carried into ordinary perception, not just conceptually understood.',
      'It ties the whole teaching of emptiness back to something available in direct experience: watch anything closely enough and its "solidity" is a trick of not looking closely or long enough.'
    ],
    misreadings: [
      'Taking "like a dream" to mean nothing that happens matters or has consequences — dreams, while they last, are vivid and have effects.',
      'Treating this as a poetic flourish rather than the sutra’s summary instruction for how to actually look at things.'
    ],
    questions: [
      'What in your life currently feels permanent that, looked at closely, is actually a flash of lightning?',
      'Can you take something seriously and hold it lightly at the same time?'
    ]
  },

  // ===================== JUNG =====================
  {
    id: 'personal-collective-unconscious', tradition: 'jung', category: 'structure',
    name: 'Personal & Collective Unconscious',
    definition: 'Jung’s expansion of Freud’s unconscious into two layers: a personal unconscious made of an individual’s forgotten or repressed material, resting atop a collective unconscious of inherited, universally human patterns shared across cultures and history.',
    essence: 'Beneath your own forgotten memories lies a much older, shared layer that was never yours alone to begin with.',
    marks: [
      'Evidence Jung pointed to includes recurring mythic motifs across unrelated cultures, and patterned imagery in dreams and psychotic material that the dreamer had no way of learning.',
      'The personal unconscious is unique to the individual and mostly accessible through analysis; the collective unconscious is, in principle, inherited and shared by everyone.',
      'The collective unconscious is structured, in Jung’s model, by archetypes — not specific memories, but inherited forms or patterns that shape experience.'
    ],
    misreadings: [
      'Treating the collective unconscious as literal shared memories or a mystical group mind, rather than inherited predispositions to form certain kinds of images and patterns.',
      'Assuming Jung denied the personal unconscious or Freud’s repression model — he built on top of it, rather than replacing it.'
    ],
    questions: [
      'Have you noticed an image or story in your own dreams that resembles myths you never studied?',
      'What in your inner life feels "yours" versus feels older and more universal than your own biography?'
    ]
  },
  {
    id: 'archetype', tradition: 'jung', category: 'archetypes',
    name: 'Archetype',
    definition: 'An inherited, universal pattern or predisposition — not a specific image, but a tendency to form certain kinds of images and stories (the Mother, the Hero, the Trickster, the Wise Old Man) — found across mythologies, religions, and individual dreams.',
    essence: 'Not a picture you were taught, but a mold your imagination keeps pouring the same shapes into.',
    marks: [
      'An archetype itself is unrepresentable directly — what we encounter are archetypal images, the culturally and personally specific clothing a given archetype takes on.',
      'Archetypes carry strong emotional (numinous) charge — encountering one, in a dream or a myth, often feels significant out of proportion to its content.',
      'The same archetype can appear with very different surface content across cultures (a flood myth, a hero’s journey, a wise guide) while sharing an underlying pattern.'
    ],
    misreadings: [
      'Treating archetypes as fixed, literal images (a specific "Hero" picture) rather than as structuring patterns that take different forms in different contexts.',
      'Using "archetype" loosely as a synonym for "stereotype" or "cliché," which drains the term of its psychological and mythological weight.'
    ],
    questions: [
      'What recurring figure or pattern shows up across your dreams, in different disguises?',
      'Which myths or stories have always felt oddly personal to you, despite not being about your life?'
    ]
  },
  {
    id: 'shadow', tradition: 'jung', category: 'shadow-self',
    name: 'The Shadow',
    definition: 'The unconscious part of the personality holding traits, impulses, and potentials the conscious ego has rejected, repressed, or never developed — not inherently evil, but whatever the ego has disowned as "not me."',
    essence: 'Everything you insist you’re not is, statistically, still in there somewhere.',
    marks: [
      'The shadow is most visible in projection: qualities we can’t tolerate in ourselves get seen, with intense reactivity, in other people or groups.',
      'It contains not only "negative" traits but disowned positive potentials — gifts a person never let themselves develop can also live in shadow.',
      'Jung considered shadow work — consciously acknowledging and integrating this material — a necessary, if uncomfortable, early stage of individuation, not an optional extra.'
    ],
    misreadings: [
      'Equating the shadow with "evil" or "the id" — it’s simply the unconscious, unlived, or rejected part of a whole personality, including buried strengths.',
      'Treating shadow integration as a one-time task rather than a recurring, lifelong confrontation.'
    ],
    questions: [
      'Whose behavior irritates you completely out of proportion to the offense — and what might that be showing you about yourself?',
      'What trait did you decide, early on, was simply "not who I am"?'
    ]
  },
  {
    id: 'persona', tradition: 'jung', category: 'shadow-self',
    name: 'Persona',
    definition: 'The social mask or role a person presents to the world — necessary for functioning in society, but a problem when the ego identifies with it as if it were the whole self.',
    essence: 'The face you wear to work is useful right up until you forget you’re wearing it.',
    marks: [
      'Named for the masks worn by actors in ancient theatre — Jung’s point is that everyone plays social roles, and this is normal, even necessary.',
      'Over-identification with the persona ("inflation") leaves the rest of the personality — including the shadow — unconscious and undeveloped, often erupting elsewhere.',
      'A healthy persona is worn consciously and can be set down; an unhealthy one has fused with a person’s sense of who they are.'
    ],
    misreadings: [
      'Treating the persona as inherently fake or dishonest — social roles are a normal, necessary adaptation, not a moral failing.',
      'Assuming "dropping the persona" entirely (no roles, no adaptation) is the goal — Jung’s concern is identification with it, not its existence.'
    ],
    questions: [
      'Which of your roles could you set down for an evening and still know who you are?',
      'Is there a version of you that only exists for an audience?'
    ]
  },
  {
    id: 'anima-animus', tradition: 'jung', category: 'shadow-self',
    name: 'Anima & Animus',
    definition: 'In Jung’s model, the unconscious contrasexual figure within the psyche — the anima in men, the animus in women (in his original, gendered formulation) — carrying qualities less developed in the person’s conscious identity, and often projected onto romantic partners.',
    essence: 'Falling head-over-heels for a near-stranger is, in this model, partly meeting your own unconscious in disguise.',
    marks: [
      'Jung linked intense, larger-than-life romantic projection — "love at first sight" — partly to the anima/animus finding an outer hook to hang itself on.',
      'Like the shadow, the anima/animus can be a source of creativity and depth once related to consciously, not just a problem to solve.',
      'Contemporary Jungians increasingly treat this less as strictly gender-bound biology and more as each person’s relationship to their own less-conscious, complementary qualities.'
    ],
    misreadings: [
      'Taking the theory as a claim about fixed gender traits rather than about unconscious compensation within an individual psyche — a reading widely revised since Jung’s time.',
      'Reducing it to "the ideal partner you’re looking for" rather than an inner figure that gets externally projected.'
    ],
    questions: [
      'What qualities do you find magnetic in others that you’ve never developed, or let yourself show, in yourself?',
      'Where has a relationship felt like meeting a stranger and meeting yourself at once?'
    ]
  },
  {
    id: 'the-self', tradition: 'jung', category: 'individuation',
    name: 'The Self',
    definition: 'In Jung’s terminology, the Self (capitalized) is not the ego but the totality and organizing center of the whole psyche, conscious and unconscious combined — the ego’s task is to come into right relationship with it, not to be replaced by it.',
    essence: 'The ego is the part of you that knows things; the Self is the whole you that the ego is only ever a piece of.',
    marks: [
      'Jung frequently found mandala imagery (circles, squares, fourfold symmetrical patterns) in dreams and art symbolizing the Self as a unifying center.',
      'The Self is often experienced, when it appears in dreams, as a wise, larger-than-life or numinous figure — not because it’s supernatural, but because it exceeds the ego’s ordinary self-concept.',
      'Individuation is defined as the lifelong process of the ego coming into relationship with the Self — never fully merging with it, since some of the unconscious always remains unconscious.'
    ],
    misreadings: [
      'Confusing the Self with the ego, or with everyday "self-esteem" — it is a technical term for the whole psyche’s center, most of which is unconscious.',
      'Treating individuation as a state you finish and "have" the Self — Jung described it as asymptotic, approached but never completed.'
    ],
    questions: [
      'Has a dream ever presented you with a figure or symbol that felt bigger or wiser than your everyday sense of yourself?',
      'What would it mean to be in relationship with parts of yourself you’ll never fully know?'
    ]
  },
  {
    id: 'individuation', tradition: 'jung', category: 'individuation',
    name: 'Individuation',
    definition: 'Jung’s term for the lifelong psychological process of integrating conscious and unconscious material — shadow, anima/animus, persona — into a more whole, differentiated personality, becoming who one distinctly and truly is, as opposed to a copy of collective expectation.',
    essence: 'Becoming yourself, in Jung’s sense, means meeting the parts of yourself you’ve been avoiding, not just cultivating the parts you already like.',
    marks: [
      'It is explicitly not the same as individualism or self-centeredness — Jung saw it as leading to fuller, more genuine relationship with others, not withdrawal from them.',
      'The process typically follows a rough sequence — confronting the persona and shadow first, then anima/animus, then the Self — though it’s iterative, not strictly linear.',
      'Jung considered the second half of life (roughly, after midlife) the period where individuation becomes psychologically most pressing, once the first-half-of-life tasks (career, family, social adaptation) are established.'
    ],
    misreadings: [
      'Confusing individuation with becoming more unique or eccentric on the surface — it concerns inner wholeness, which can look quite ordinary from outside.',
      'Treating it as a self-help checklist to complete rather than an open-ended, often disruptive, lifelong confrontation with the unconscious.'
    ],
    questions: [
      'What part of yourself have you kept at arm’s length because it didn’t fit who you’d decided to be?',
      'If nobody’s expectations counted, what would need to change about how you’re living?'
    ]
  },
  {
    id: 'complex', tradition: 'jung', category: 'structure',
    name: 'Complex',
    definition: 'An emotionally charged cluster of associations, memories, and images organized around a common theme (a "mother complex," an "inferiority complex") that can act with a degree of autonomy, hijacking thought, mood, and behavior when triggered.',
    essence: 'A complex is a splinter personality living inside the main one, waiting for the right button to be pushed.',
    marks: [
      'Jung’s early word-association experiments were designed specifically to detect complexes — delayed or disturbed responses to certain trigger words revealed emotionally loaded material.',
      'Complexes aren’t inherently pathological — everyone has them; the concern is unconscious, autonomous complexes that override conscious intention when activated.',
      'A complex typically forms around an archetypal core (e.g., "Mother") dressed in personal experience (one’s actual mother), which is why complexes feel both intensely personal and oddly universal.'
    ],
    misreadings: [
      'Using "complex" the popular way, as a fixed personality flaw ("he has a superiority complex") rather than Jung’s dynamic, semi-autonomous psychic cluster.',
      'Assuming complexes can simply be reasoned away — Jung held they must be consciously related to and worked through, not merely out-argued.'
    ],
    questions: [
      'What is a topic or trigger that reliably makes you react more strongly than the situation seems to warrant?',
      'Can you name the theme underneath your most predictable overreactions?'
    ]
  },
  {
    id: 'synchronicity', tradition: 'jung', category: 'archetypes',
    name: 'Synchronicity',
    definition: 'Jung’s term for a meaningful coincidence between an inner psychic state and an outer event, connected not by cause and effect but by shared meaning — his proposed "acausal connecting principle."',
    essence: 'Sometimes the outside world seems to rhyme with what’s happening inside you, without one causing the other.',
    marks: [
      'Jung’s own frequently cited example: a patient recounting a dream about a golden scarab, interrupted by an actual scarab-like beetle tapping at the window in that moment.',
      'He proposed it alongside, not instead of, ordinary causality — a second kind of connection running in parallel with cause-and-effect, not replacing it.',
      'It’s tied to archetypal activation: synchronicities cluster, in Jung’s account, around moments of intense unconscious constellation — major transitions, crises, or psychological breakthroughs.'
    ],
    misreadings: [
      'Treating "synchronicity" as a loose synonym for any coincidence, however trivial or unremarkable — Jung meant specifically meaningful, often startling correspondences.',
      'Taking it as a claim about supernatural causation rather than Jung’s careful, if speculative, alternative to causality: connection by meaning, not by mechanism.'
    ],
    questions: [
      'Has an external event ever mirrored an inner state so closely it stopped you in your tracks?',
      'What was happening inside you the last time you noticed a striking coincidence?'
    ]
  },
  {
    id: 'introversion-extraversion', tradition: 'jung', category: 'typology',
    name: 'Introversion & Extraversion',
    definition: 'Jung’s foundational typological axis: whether a person’s psychic energy habitually flows outward toward the external world of objects and other people (extraversion) or inward toward their own inner world of thoughts and images (introversion).',
    essence: 'Not shy versus outgoing — where your attention naturally recharges and orients.',
    marks: [
      'Jung considered both orientations equally valid and necessary — neither is a disorder or a deficiency of the other.',
      'This pair became the seed of the Myers-Briggs Type Indicator and much of pop psychology’s "introvert/extrovert" vocabulary, though popular usage has drifted from Jung’s original, more energy-oriented definition.',
      'Jung paired this axis with four functions (thinking, feeling, sensation, intuition), giving eight basic types in his original scheme — introversion/extraversion alone was only half the picture.'
    ],
    misreadings: [
      'Equating introversion with shyness or social anxiety, and extraversion with confidence — Jung’s axis is about where attention and energy orient, not social skill or comfort.',
      'Treating the categories as rigid boxes rather than a spectrum with a person’s habitual, not exclusive, tendency.'
    ],
    questions: [
      'After a full day among people, do you feel replenished or depleted — and after a day alone?',
      'Where does your attention go first, by default: outward to what’s happening, or inward to what you make of it?'
    ]
  },
  {
    id: 'four-functions', tradition: 'jung', category: 'typology',
    name: 'The Four Functions', subtitle: 'thinking, feeling, sensation, intuition',
    definition: 'Jung’s model of four basic modes of processing experience — thinking (logical evaluation), feeling (value-based evaluation), sensation (concrete, sensory perception), and intuition (perception of patterns and possibilities) — each of which a person tends to favor as dominant, with the opposite function typically the least developed.',
    essence: 'Four different instruments for reading reality — you likely lead with one and can barely hear another.',
    marks: [
      'Thinking and feeling are both "rational" (judging) functions for Jung — evaluating and deciding, one by logic, one by value — while sensation and intuition are "irrational" (perceiving) functions, simply taking in data.',
      'The "inferior function" — opposite the dominant one — tends to be the most unconscious, and shows up clumsily, disproportionately, or under stress, often carrying real developmental potential if worked with.',
      'This four-function model, crossed with introversion/extraversion, is the direct ancestor of the Myers-Briggs system’s dichotomies.'
    ],
    misreadings: [
      'Assuming a dominant function means the others are absent — everyone uses all four, just with very different fluency and preference.',
      'Treating the "inferior function" as simply a weakness to fix rather than, in Jung’s view, a doorway to the unconscious worth respectful attention.'
    ],
    questions: [
      'When you’re stressed, which mode of dealing with reality do you fall back on hardest — and which one abandons you first?',
      'Which of the four (thinking, feeling, sensation, intuition) do you trust least in yourself?'
    ]
  },
  {
    id: 'active-imagination', tradition: 'jung', category: 'individuation',
    name: 'Active Imagination',
    definition: 'A technique Jung developed for deliberately engaging unconscious material while awake — holding a dream image, mood, or fantasy in mind and letting it develop on its own, then consciously dialoguing with what emerges, rather than merely observing or free-associating.',
    essence: 'Daydreaming with the lights on: let the unconscious speak, and actually answer back.',
    marks: [
      'Unlike free association, which chases a chain of associations away from the original image, active imagination stays with the image and lets it unfold and transform on its own terms.',
      'Jung used it extensively on himself, especially during his "confrontation with the unconscious" after his break with Freud, recorded in what became The Red Book.',
      'The "active" part matters: the conscious ego stays present and in dialogue with the material, rather than being passively flooded by it — a discipline Jung considered important to practice carefully, ideally with guidance.'
    ],
    misreadings: [
      'Confusing it with simple daydreaming or fantasy indulgence — the discipline of conscious engagement and dialogue is what defines the technique.',
      'Treating it as risk-free self-help — Jung considered it powerful enough to warrant caution, especially for people prone to being overwhelmed by unconscious material.'
    ],
    questions: [
      'If you let your last vivid dream image continue to unfold, what might it do or say next?',
      'What would it be like to talk back to a recurring image or figure in your inner life, rather than just observing it?'
    ]
  },

  // ===================== DEATH (KAGAN) =====================
  {
    id: 'dualism-physicalism', tradition: 'death', category: 'metaphysics',
    name: 'Dualism vs. Physicalism',
    definition: 'The foundational question Kagan’s course opens with: are you a body plus a separate, non-physical soul (dualism), or are you a purely physical thing — a body capable of thinking, feeling, and acting (physicalism) — with nothing extra added?',
    essence: 'Whether death can possibly be survived depends entirely on which of these is true, so Kagan insists on settling it first.',
    marks: [
      'Kagan argues, at length and provisionally, for physicalism: he finds no good evidence for a soul and no explanatory work left for one to do once we understand the person as a functioning body/brain.',
      'On physicalism, when the body stops functioning as a person — most importantly, loses the capacity to support thought, feeling, and personality — the person, in the relevant sense, ceases to exist.',
      'The stakes are direct: if physicalism is true, survival of bodily death is not possible in any traditional sense, which reframes every later question about death’s badness.'
    ],
    misreadings: [
      'Assuming physicalism means "you’re just a body" in some deflationary or dismissive sense — Kagan’s physicalism still grants full weight to thought, personality, and consciousness, just not as effects of a separate immaterial substance.',
      'Treating this as a settled scientific fact rather than a philosophical position Kagan argues for and invites students to test against their own intuitions.'
    ],
    questions: [
      'What do you think would have to be true about you for an afterlife to even be conceptually possible?',
      'If nothing extra needs to be added to a functioning body to get thought and personality, what does that imply about what happens when the body stops functioning?'
    ]
  },
  {
    id: 'personal-identity', tradition: 'death', category: 'metaphysics',
    name: 'Personal Identity Over Time',
    definition: 'The puzzle of what makes a person at one time and a person at a later time the same person — body continuity, psychological continuity (memory, personality), or something else — explored through thought experiments like teleportation and gradual replacement.',
    essence: 'You assume you’ll still be "you" tomorrow — this asks what fact makes that true, and how much change it can survive.',
    marks: [
      'Kagan uses teleporter and brain-duplication thought experiments to pressure-test whether bodily continuity or psychological continuity (or both, or neither) is what really matters for survival.',
      'The puzzle matters directly for death: if a resurrected or reconstructed "you" after death lacked the right kind of continuity with the original, it may not really be you, however similar it seems.',
      'Kagan is notably skeptical that there’s a single, clean, all-or-nothing answer — he treats personal identity as possibly a matter of degree, or even without a determinate fact of the matter in edge cases.'
    ],
    misreadings: [
      'Assuming there must be some further fact ("the same soul") that settles identity questions, when the physicalist framing may leave only overlapping criteria that come apart in edge cases.',
      'Treating the thought experiments as merely science-fictional and irrelevant, when they’re designed to isolate exactly what ordinary, everyday identity claims are actually tracking.'
    ],
    questions: [
      'Would a perfect physical duplicate of you, with all your memories, actually be you — or just someone exactly like you?',
      'How much psychological change could you undergo and still count as "the same person" by your own lights?'
    ]
  },
  {
    id: 'deprivation-account', tradition: 'death', category: 'badness',
    name: 'The Deprivation Account',
    definition: 'Kagan’s preferred explanation (following Thomas Nagel) of why death can be bad for the person who dies, even though physicalism denies there’s any unpleasant experience of being dead: death is bad not because of what it’s like, but because of what it deprives you of — the good things you would otherwise have had.',
    essence: 'Death doesn’t have to hurt to be bad — losing out can be bad all by itself.',
    marks: [
      'This requires accepting that something can be bad for you comparatively (compared to a better alternative) without being intrinsically bad or bad in a way you experience — a genuinely controversial claim Kagan defends.',
      'It reframes "how bad is death?" as a question about the life you would have led: someone with a rich, promising future loses more than someone near the natural end of a full life.',
      'This account is what lets Kagan reject the Epicurean argument (below) without positing an afterlife or a soul — you don’t have to exist "after" death to be deprived by it.'
    ],
    misreadings: [
      'Assuming "deprivation" requires the dead person to consciously miss out or feel the loss — the account explicitly denies this; the badness is comparative, not experiential.',
      'Concluding that since the deprived-of goods are hypothetical, the badness isn’t "real" — Kagan argues comparative badness is a familiar, legitimate kind of badness elsewhere in ethics too.'
    ],
    questions: [
      'Can something be bad for you even if you never experience it as bad? Where else might that be true in your life?',
      'By the deprivation account’s logic, whose death is worse: someone who dies young with plans unmade, or someone who dies old and complete?'
    ]
  },
  {
    id: 'epicurean-argument', tradition: 'death', category: 'puzzles',
    name: 'The Epicurean Argument', subtitle: '"Death is nothing to us"',
    definition: 'Epicurus’s ancient argument that death cannot be bad for the one who dies, because badness requires a subject who exists to experience it, and "when death is, we are not" — so there’s no one there for it to be bad for.',
    essence: 'You can’t be harmed by something you’re not around to suffer through — so why fear it?',
    marks: [
      'The argument’s logical structure is tight: bad things must be bad for someone who exists at the time; death entails non-existence; therefore death cannot be bad for the one who has died.',
      'Kagan takes the argument seriously and considers it one of the most important challenges the whole course must answer, rather than dismissing it.',
      'His answer runs through the deprivation account: badness doesn’t require the subject to exist at the time of the bad thing, only that the comparison (life with vs. without) holds — which lets him reject the Epicurean conclusion while accepting the No-Subject premise about experience.'
    ],
    misreadings: [
      'Assuming the Epicurean conclusion, "don’t fear death," follows only from cynicism or denial — it follows from a serious argument that has to be met with equally serious counter-argument, not dismissed.',
      'Missing that accepting Epicurus’s premises (no experience after death) doesn’t force you to accept his conclusion — the deprivation account attacks the hidden assumption that badness always requires felt experience.'
    ],
    questions: [
      'If a harm requires no experiencer, can it still be a harm? Give your own example, not about death.',
      'Does Epicurus’s argument actually make you less afraid, or does something about it feel like a trick?'
    ]
  },
  {
    id: 'lucretian-symmetry', tradition: 'death', category: 'puzzles',
    name: 'The Lucretian Symmetry Argument',
    definition: 'Lucretius’s challenge: if non-existence after death is nothing to fear, why isn’t non-existence before birth equally untroubling? Since we don’t mourn the eons before we were born, consistency seems to demand we shouldn’t fear the eons after we die either.',
    essence: 'You missed the entire universe before you were born and shrug it off — so what’s different about missing it afterward?',
    marks: [
      'Kagan takes this seriously as a genuine puzzle, not a rhetorical trick — the asymmetry in how we actually feel (indifferent to prenatal non-existence, afraid of posthumous non-existence) needs explaining, not just noticing.',
      'One response Kagan explores: the deprivation account can explain the asymmetry, since posthumous non-existence deprives you of a longer, specific future you were already on track for, whereas prenatal non-existence deprived a merely possible you of nothing determinate yet.',
      'Whether this response fully dissolves the asymmetry, or just relocates the puzzle, is left more open than settled — Kagan presents it as live philosophical work, not a solved problem.'
    ],
    misreadings: [
      'Treating the argument as proving fear of death is simply irrational — Kagan’s course treats it as raising a real asymmetry that deserves an actual explanation, which he then attempts to give.',
      'Assuming prenatal and posthumous non-existence are obviously the same just because both are "non-existence" — the direction of time turns out to matter to several candidate explanations.'
    ],
    questions: [
      'Do you feel any loss about the decades of the universe’s history you missed before you were born? Why or why not, compared to how you feel about the future you’ll miss?',
      'Does time’s direction actually explain the asymmetry, or is it just where the asymmetry happens to show up?'
    ]
  },
  {
    id: 'timing-puzzle', tradition: 'death', category: 'puzzles',
    name: 'The Timing Puzzle',
    definition: 'If death is bad for the person who dies, when is it bad for them — since it can’t be bad before they die (they’re still alive and fine) and, on physicalism, there’s no "them" after death to be the bearer of the badness either?',
    essence: 'Badness usually needs a time and an owner; death’s badness seems to have neither available.',
    marks: [
      'This is a direct consequence of taking the deprivation account seriously: it explains why death is bad, but leaves open exactly when that badness occurs — the standard menu (before, at the moment, after, or never) all run into trouble.',
      'Kagan’s own tentative resolution leans toward denying that badness always requires a determinate "when" — comparative, deprivation-based badness may simply not have to be timed in the way pain or pleasure does.',
      'The puzzle is a good test of intuitions about time and existence more broadly, not just about death — it exposes hidden assumptions in how we think badness must be anchored to a moment.'
    ],
    misreadings: [
      'Assuming the puzzle is merely verbal or a trick of grammar rather than a genuine metaphysical difficulty about how badness relates to time and existence.',
      'Concluding that because no clean answer to "when" is available, death therefore isn’t bad after all — Kagan resists that inference; a real question can lack a tidy answer without dissolving the phenomenon it’s about.'
    ],
    questions: [
      'Do you think every bad thing has to be bad at a specific time, for a specific existing subject? Can you find a counterexample?',
      'Which is more troubling to you: not having an answer to "when," or the possibility that the question itself is malformed?'
    ]
  },
  {
    id: 'fear-of-death', tradition: 'death', category: 'response',
    name: 'Is Fear of Death Rational?',
    definition: 'Kagan’s examination of what would make fear an appropriate (as opposed to merely natural or common) response to death — arguing that a fitting fear typically requires the prospect of something bad, uncertainty about it, and it being "awful enough" to warrant fear rather than mere dislike or regret.',
    essence: 'That everyone fears something doesn’t mean the fear survives being examined.',
    marks: [
      'Kagan distinguishes fear from mere dislike or regret: he argues that even if death is bad (per the deprivation account), it doesn’t follow that fear — as opposed to sober appreciation of a loss — is the fitting emotional response.',
      'He points out most people’s fear of death is not well-calibrated: many fear it far more than more probable, comparably serious harms, and often haven’t thought carefully about how much life they’re actually likely to lose.',
      'This isn’t a claim that death is trivial — it’s a claim that fear specifically needs its own justification, separate from the (already-argued) claim that death is a genuine bad.'
    ],
    misreadings: [
      'Concluding Kagan thinks death doesn’t matter — his target is the fittingness of fear specifically, not the badness of death, which he’s already defended via deprivation.',
      'Assuming "fear is natural/universal" settles whether it’s rational — an evolved or common response can still be miscalibrated to the facts.'
    ],
    questions: [
      'What, precisely, are you afraid of when you’re afraid of death — the process of dying, the state of being dead, or the loss of a future?',
      'If a response can be natural and still miscalibrated, what would recalibrated fear of death even look like?'
    ]
  },
  {
    id: 'makropulos-immortality', tradition: 'death', category: 'immortality',
    name: 'The Badness of Immortality', subtitle: 'The Makropulos Case (Bernard Williams)',
    definition: 'Bernard Williams’s argument, which Kagan engages closely, that immortality — living the same finite personality forever — would eventually become unbearably tedious and meaningless, since the categorical desires that give a life structure and point are themselves finite and exhaustible.',
    essence: 'An ending is often assumed to be the problem with life — Williams and Kagan ask whether no ending might be worse.',
    marks: [
      'Williams’s case study, the opera character Elina Makropülos, lives 300+ years on an immortality potion and ends up in a state of frozen boredom, indifference, and "coldness," having exhausted everything a person like her could care about.',
      'Kagan’s own view is more nuanced than Williams’s: he suggests immortality’s badness may depend heavily on whether the immortal person’s personality, values, and psychology could keep changing and developing over unlimited time.',
      'This directly complicates the intuitive view that death is purely a deprivation of more life — if enough more life becomes bad rather than good, the deprivation account needs refining, not just applying.'
    ],
    misreadings: [
      'Taking the argument as proof immortality is definitely bad for everyone — both Williams and Kagan present it as a serious risk contingent on facts about personality and psychological change, not a certainty.',
      'Missing that this argument, if right, doesn’t make death good — it complicates how much of a bad it is by putting a ceiling on how much more life would actually have been worth having.'
    ],
    questions: [
      'Can you imagine categorical desires — things you want simply because you want them, not to survive — that could occupy you for centuries without exhausting themselves?',
      'If living forever eventually became tedious, would that show immortality is bad, or that the version of "you" living it stayed too fixed?'
    ]
  },
  {
    id: 'value-of-life', tradition: 'death', category: 'response',
    name: 'The Value of Life',
    definition: 'Kagan’s analysis of what actually makes a life good or bad to have — comparing a "bare difference" view (existing is intrinsically better than not, whatever fills it) against a view where a life’s value depends on the balance of good and bad experiences and achievements within it.',
    essence: 'More life is not automatically more good — it depends what the extra life is actually made of.',
    marks: [
      'Kagan argues against a naive "more is always better" view: a life extended with only suffering, or with nothing of value, is not thereby made better by its added length.',
      'This bears directly on the deprivation account: death is worse the more, and the better, the future life it cuts off — which is why an early death typically counts as a much greater deprivation than a death after a full life.',
      'It also complicates comparisons across different lives and different amounts of remaining potential, a genuinely hard problem Kagan doesn’t claim to fully resolve.'
    ],
    misreadings: [
      'Assuming this implies short lives are simply "worth less" as persons — the claim is about the deprivation calculation for the badness of a particular death, not about a person’s worth.',
      'Treating "quality over quantity" as a slogan that settles hard cases, when comparing very different possible futures resists any simple formula.'
    ],
    questions: [
      'If you could accurately predict the exact shape of your remaining years, how would that change how much you’d want them extended?',
      'Is there a life you can imagine where more years would make it worse, not better?'
    ]
  },
  {
    id: 'rational-suicide', tradition: 'death', category: 'response',
    name: 'Rational Suicide',
    definition: 'Kagan’s cautious, carefully qualified discussion of whether, and under what narrow conditions, ending one’s own life could be a rational choice — distinct from, and far more restrictive than, the question of when suicide might be understandable or forgivable.',
    essence: 'A hard question Kagan refuses to dodge, and refuses to make easy in either direction.',
    marks: [
      'Kagan’s framework requires two things to both hold for suicide to be rational in his sense: that the remainder of one’s life, honestly assessed, is expected to be worse than nothing, and that the decision is not distorted by a treatable, judgment-impairing condition like clinical depression.',
      'He’s explicit that this is an extremely high bar, and that in the vast majority of real cases — especially those driven by treatable mental illness — the second condition fails, making the suicide not rational by his own criteria.',
      'The discussion sits inside the larger "value of life" analysis: it only makes sense once you have a working account of when a life’s remainder would actually be worse than nonexistence.'
    ],
    misreadings: [
      'Reading this section as advocacy or a how-to — Kagan frames it as a narrow philosophical question about rationality under strict, rare conditions, paired with strong caution about real-world application.',
      'Ignoring the second condition (freedom from distorted judgment) and treating only the first (a bad remaining life) as sufficient — Kagan insists both are required.'
    ],
    questions: [
      'What would "honestly assessed" even require — how would you distinguish a clear-eyed judgment about your future from a distorted one, from the inside?',
      'Why might the philosophical question and the practical, real-world question here need to be kept so carefully separate?'
    ]
  },
  {
    id: 'facing-death-well', tradition: 'death', category: 'response',
    name: 'Facing Death Well',
    definition: 'Kagan’s closing, practical upshot: since death is real, certain, and (for most) a genuine deprivation, the philosophically appropriate response isn’t denial, terror, or resignation, but letting its certainty inform how you set priorities and spend a finite amount of time.',
    essence: 'The point of thinking hard about death, for Kagan, is a better-lived life, not a solved metaphysical puzzle.',
    marks: [
      'Kagan is notably undogmatic here — he offers his own tentative conclusions (moderate concern rather than terror, valuing life without either despair or denial) while repeatedly inviting students to work out their own answers from the arguments.',
      'He explicitly rejects both extremes: paralyzing dread of death, and a studied indifference that pretends death doesn’t matter at all.',
      'The whole course is structured to earn this ending — the metaphysics of persons and the badness-of-death arguments are meant to ground the practical conclusion, not just precede it.'
    ],
    misreadings: [
      'Expecting a single formula or life-hack — Kagan’s actual conclusion is closer to "think it through honestly for yourself" than any specific prescription.',
      'Treating the earlier, more technical arguments as separable from this ending — they’re the reasons the conclusion is entitled to be taken seriously.'
    ],
    questions: [
      'Having worked through the arguments, does your own fear of death feel any more or less calibrated than before?',
      'If you took the certainty and finitude of your remaining time fully seriously today, what would you actually do differently tomorrow?'
    ]
  },

  // ===================== HAPPINESS (SANTOS) =====================
  {
    id: 'miswanting', tradition: 'happiness', category: 'miswanting',
    name: 'Miswanting',
    definition: 'A term from Dan Gilbert and Tim Wilson’s research, central to Santos’s course: people are systematically bad at predicting what will make them happy and for how long — we chase the wrong goals, or the right goals for the wrong reasons.',
    essence: 'You’re not bad at getting what you want. You’re bad at knowing what you should want.',
    marks: [
      'Santos opens the course by having students diagnose their own G.O.O.D.S. — Goals that produce Overestimated, Overrated, Underestimated future feelings — as a way to surface their own miswanting.',
      'Miswanting explains why achieving long-sought goals (a promotion, a purchase, a relationship milestone) often produces less and shorter happiness than anticipated.',
      'It’s a prediction failure, not a willpower failure — the problem is inaccurate forecasting about the emotional future, not weak follow-through.'
    ],
    misreadings: [
      'Concluding that wanting things is the problem — the issue is the accuracy of the forecast, not desire itself.',
      'Assuming miswanting only applies to trivial material wants — it applies just as much to career, relationship, and status goals people take very seriously.'
    ],
    questions: [
      'Name one goal you assumed would make you happy and, once achieved, barely moved the needle.',
      'What are you currently pursuing on the assumption it will make you happy — and how would you actually check that assumption?'
    ]
  },
  {
    id: 'hedonic-adaptation', tradition: 'happiness', category: 'miswanting',
    name: 'Hedonic Adaptation',
    definition: 'The well-documented tendency for the emotional impact of both positive and negative life changes to fade over time, as people adapt to a new baseline — famously studied by comparing lottery winners and accident victims a year after the event.',
    essence: 'Whatever just changed your life, your baseline mood is quietly working to erase it.',
    marks: [
      'The classic Brickman study found lottery winners and paraplegic accident victims returned, on average, closer to their prior happiness baseline than intuition predicts, in both directions.',
      'Adaptation is faster and more complete for material and circumstantial changes (a raise, a new car, even a new home) than for some experiential and relational ones.',
      'This is a central reason miswanting happens: we correctly identify a change would feel good, but wrongly predict how long the feeling would last, because we don’t intuitively model adaptation.'
    ],
    misreadings: [
      'Concluding that circumstances therefore never matter — some changes (chronic pain, unemployment, noise, long commutes) adapt slowly or incompletely, and Santos flags these as exceptions worth knowing.',
      'Treating adaptation as purely bad news — it’s also what makes recovery from setbacks and losses possible.'
    ],
    questions: [
      'What positive change in your life have you already stopped noticing?',
      'Which of your current goals might feel just as ordinary as everything else, six months after achieving it?'
    ]
  },
  {
    id: 'reference-points', tradition: 'happiness', category: 'biases',
    name: 'Reference Points & Social Comparison',
    definition: 'Happiness with an outcome depends less on its absolute level than on how it compares to a reference point — often other people’s outcomes — so a raise can feel bad if a peer got a bigger one, or good if a peer got less, independent of the actual amount.',
    essence: 'It’s not what you have. It’s what you have next to.',
    marks: [
      'Classic studies Santos cites: Olympic bronze medalists often report more satisfaction than silver medalists, because bronze is compared to "almost no medal" while silver is compared to "almost gold."',
      'Reference points shift with context — moving into a wealthier social circle can lower satisfaction with an unchanged income, purely through recalibrated comparison.',
      'Comparison is largely automatic and hard to switch off consciously, which is why deliberately curating your comparison set (including social media use) matters practically.'
    ],
    misreadings: [
      'Assuming the fix is simply "stop comparing," as if comparison were a switch — Santos treats it as a largely automatic process to manage the inputs to, not to will away directly.',
      'Thinking only upward comparisons matter — downward comparisons (bronze vs. no medal) shape satisfaction just as powerfully.'
    ],
    questions: [
      'What’s a recent outcome that felt good or bad mostly because of who you were (consciously or not) comparing it to?',
      'Whose lives does your social media feed make you compare yourself to, and how does that shift your baseline?'
    ]
  },
  {
    id: 'income-satiation', tradition: 'happiness', category: 'predictors',
    name: 'Income and Happiness (Satiation)',
    definition: 'Research (Kahneman & Deaton, and later Killingsworth) on the relationship between income and happiness: emotional well-being rises with income but shows diminishing returns after covering comfortable material needs, while broader life satisfaction keeps climbing further, and neither ever delivers the boost intuition expects.',
    essence: 'More money helps — reliably less than you think, and not in the way you think.',
    marks: [
      'The original Kahneman-Deaton finding suggested day-to-day emotional well-being flattens out past a moderate income threshold, even as evaluative "life satisfaction" kept rising with income.',
      'A later, larger Killingsworth study complicated this, finding happiness for most people keeps rising with income even at high levels — but the size of the effect remains small relative to what people expect it to be.',
      'Santos uses this less to argue money is irrelevant and more to correct the wildly overestimated size of its effect compared to other, cheaper levers like social connection.'
    ],
    misreadings: [
      'Taking the lesson as "money doesn’t matter for happiness" — the actual, more defensible claim is that its effect is real but smaller and more nuanced than intuition predicts.',
      'Ignoring that the research has evolved and is genuinely debated among the original researchers — Santos presents it as an evolving empirical picture, not a settled slogan.'
    ],
    questions: [
      'If you got a meaningful raise tomorrow, how much of a happiness boost do you honestly expect, and for how long?',
      'What would you do differently if you accepted that income has a real but modest and quickly-adapted-to effect on daily mood?'
    ]
  },
  {
    id: 'impact-bias', tradition: 'happiness', category: 'biases',
    name: 'Impact Bias',
    definition: 'The tendency to overestimate both the intensity and the duration of our emotional reactions to future events — good or bad — because we focus narrowly on the event itself and neglect everything else that will still be happening in our lives (focalism).',
    essence: 'The imagined future is always more dramatic, and shorter-lived, than the one you’ll actually get.',
    marks: [
      'A major driver of impact bias is "focalism" — when imagining a future event, attention narrows onto just that event and ignores the rest of ordinary life that will continue to compete for emotional bandwidth.',
      'It cuts both ways: people overestimate the devastation of bad events (a breakup, a rejection) and the elation of good ones (a promotion, an award), often symmetrically.',
      'Santos connects this directly to miswanting: if you can’t accurately predict how an outcome will feel, or for how long, decisions built on that prediction are built on a bad forecast.'
    ],
    misreadings: [
      'Assuming the bias means feelings won’t be real or won’t matter at all — the correction is about magnitude and duration, not the reality of the feeling in the moment.',
      'Treating the bias as something you can simply out-think once you know about it — Santos notes debiasing forecasts is genuinely hard even with the knowledge in hand.'
    ],
    questions: [
      'Think of a past "disaster" or "triumph" you braced for — how long did the emotional impact actually last, compared to your prediction?',
      'What future event are you currently over-forecasting the emotional size of?'
    ]
  },
  {
    id: 'time-affluence', tradition: 'happiness', category: 'predictors',
    name: 'Time Affluence',
    definition: 'The finding that having a subjective sense of enough discretionary time — "time affluence" — predicts well-being at least as strongly as material wealth, and that people routinely trade time for money in ways that reliably make them less happy.',
    essence: 'You can’t buy time back, but you can trade almost everything else for more of it — and most people don’t.',
    marks: [
      'Studies Santos cites (e.g., Hershfield, Mogilner and colleagues) find that people who value time over money report higher well-being, and that prompting people to think about time (versus money) shifts choices toward more social, more satisfying uses of it.',
      '"Time famine" — the chronic feeling of having too little time — is a strong, common predictor of lower happiness and higher stress, independent of income level.',
      'Concrete behavior change Santos highlights: spending money specifically to buy back time (paying for a task you dislike) tends to increase happiness more than equivalent material purchases.'
    ],
    misreadings: [
      'Assuming this only applies to people wealthy enough to buy convenience — the deeper point is prioritizing and protecting time itself, which doesn’t always require spending money.',
      'Confusing time affluence with simply having no obligations — it’s about the subjective sense of having enough discretionary time relative to demands, not zero demands.'
    ],
    questions: [
      'Where in your week could you trade a little money (or a little status) for meaningfully more unscheduled time?',
      'When did you last feel "time-rich" rather than "time-poor," and what made the difference?'
    ]
  },
  {
    id: 'social-connection', tradition: 'happiness', category: 'predictors',
    name: 'Social Connection',
    definition: 'Across decades of well-being research, the strength and quality of social relationships is one of the single most consistent, largest predictors of happiness — more consistent than income, and one people persistently underrate when planning their days.',
    essence: 'The single best-supported answer the research gives to "what makes people happy" is other people.',
    marks: [
      'Santos cites research (including work related to the long-running Harvard Study of Adult Development) linking close relationships to both happiness and physical health outcomes across the lifespan.',
      'Even brief social interactions with strangers (talking to a barista, a seatmate on a commute) measurably boost mood in studies, despite people predicting beforehand that they’d prefer to be left alone.',
      'People systematically under-invest time in socializing relative to how much it actually predicts their well-being — a mismatch Santos treats as a core actionable finding of the course.'
    ],
    misreadings: [
      'Assuming this only means romantic partnership or family — the research covers the full range: friendships, community, even brief interactions with strangers.',
      'Treating introversion as an exception that disproves the finding — the effect holds broadly across personality types, even if the preferred amount and style of connection varies.'
    ],
    questions: [
      'How does your actual weekly time spent connecting with others compare to how much you’d predict it matters to your happiness?',
      'What’s one small social interaction you tend to avoid that research suggests would probably lift your mood if you had it?'
    ]
  },
  {
    id: 'savoring', tradition: 'happiness', category: 'rewirements',
    name: 'Savoring & Negative Visualization',
    definition: 'Two complementary techniques for counteracting hedonic adaptation: savoring (deliberately slowing down to notice and prolong a positive experience while it’s happening) and negative visualization (imagining life without something you currently have, borrowed from Stoic practice, to restore appreciation for it).',
    essence: 'Adaptation dulls good things automatically — both techniques are ways of deliberately re-sensitizing yourself on purpose.',
    marks: [
      'Savoring interventions studied in positive psychology — pausing to consciously notice a good meal, a sunset, a compliment — reliably boost reported happiness compared to experiencing the same event on autopilot.',
      'Negative visualization ("imagine you’d never met your partner," "imagine losing this ability") is drawn partly from Stoic practice and partly from gratitude research, and works by interrupting the adaptation process that makes good things fade into the background.',
      'Both techniques directly target hedonic adaptation rather than trying to acquire more or better circumstances — they change how existing goods are experienced.'
    ],
    misreadings: [
      'Treating negative visualization as morbid pessimism — its function in the practice is the opposite: restoring gratitude for what’s already present.',
      'Assuming savoring requires big occasions — the research applies just as much, maybe more, to small daily moments that would otherwise pass unnoticed.'
    ],
    questions: [
      'What good thing in your life have you stopped noticing that negative visualization might bring back into focus?',
      'Where in today could you deliberately slow down for thirty seconds and actually notice something going well?'
    ]
  },
  {
    id: 'gratitude-practice', tradition: 'happiness', category: 'rewirements',
    name: 'Gratitude Practice',
    definition: 'A well-studied intervention — regularly noting or expressing specific things one is grateful for — shown across multiple randomized studies to reliably raise reported well-being, often more than interventions people intuitively expect to work better.',
    essence: 'One of the cheapest, best-tested happiness interventions in the research, and one of the easiest to skip.',
    marks: [
      'Robert Emmons and Michael McCullough’s studies, cited widely in this literature, found that people who kept regular gratitude journals reported higher well-being than control groups over several weeks.',
      'A single "gratitude letter" — writing and, ideally, delivering a specific letter of thanks to someone — produces measurable happiness boosts for both the writer and, often, the recipient.',
      'Santos frames gratitude practice as a "rewirement" — something that only works with actual repeated practice, not from understanding the research alone.'
    ],
    misreadings: [
      'Assuming reading about gratitude research produces the benefit — the studies test the practice itself, done repeatedly, not awareness of the finding.',
      'Treating generic, vague gratitude ("I’m grateful for my family") as equivalent to specific gratitude — more specific, concrete entries tend to show stronger effects.'
    ],
    questions: [
      'Who is someone you’ve never directly told how much they mattered to you?',
      'Could you name three specific (not generic) things from today you’re genuinely glad happened?'
    ]
  },
  {
    id: 'prosocial-spending', tradition: 'happiness', category: 'rewirements',
    name: 'Prosocial Spending & Kindness',
    definition: 'Research finding that spending money or effort on others — rather than on oneself — produces a more reliable happiness boost than spending on oneself, even though people consistently predict the opposite before the fact.',
    essence: 'Give it away, and you get more back than you expected — and you’d have bet against that.',
    marks: [
      'Elizabeth Dunn and colleagues’ studies gave participants money to spend on themselves or on others by day’s end; the "spend on others" group reported measurably higher happiness, despite predicting no difference beforehand.',
      'Even small, low-cost acts of kindness (buying someone a coffee, a specific act of help) show measurable, same-day mood boosts in randomized trials.',
      'This is another case where people’s predictions (miswanting) point the wrong way — self-spending intuitively feels like it should win, and in the data, it doesn’t.'
    ],
    misreadings: [
      'Assuming it requires large sums or grand gestures — the research effects show up with small, specific acts done consistently, not scale of generosity.',
      'Treating this as pressure to always self-sacrifice — the finding is about a reliable happiness dividend from other-directed spending, not a moral mandate.'
    ],
    questions: [
      'When did you last spend money or effort on someone else in a way that visibly lifted your own mood, not just theirs?',
      'What’s one small act of kindness you could do this week, specifically to test this finding on yourself?'
    ]
  },
  {
    id: 'flow-strengths', tradition: 'happiness', category: 'predictors',
    name: 'Flow & Signature Strengths',
    definition: 'Mihaly Csikszentmihalyi’s concept of flow — full absorption in a challenging activity matched to one’s skill level, with self-consciousness and time-awareness dropping away — paired with Martin Seligman’s finding that using one’s top personal strengths in new ways reliably boosts well-being.',
    essence: 'Happiness shows up less when you’re relaxing and more when you’re fully absorbed in something just hard enough.',
    marks: [
      'Flow requires a specific balance: a challenge that meets, but doesn’t exceed, current skill — too easy produces boredom, too hard produces anxiety, and only the matched zone produces flow.',
      'Seligman’s "signature strengths" research found that identifying one’s top character strengths and deliberately using one in a new way each day produced measurable, lasting boosts to happiness in randomized studies.',
      'Both findings push against the assumption that happiness comes mainly from passive pleasure or leisure — active, well-matched engagement outperforms passive consumption in the data.'
    ],
    misreadings: [
      'Assuming flow only applies to work or "productive" activity — it applies equally to games, sports, art, and conversation, wherever challenge and skill are well matched.',
      'Treating "strengths" loosely as talents you’re merely good at, rather than Seligman’s more specific sense: strengths that are also intrinsically energizing to use.'
    ],
    questions: [
      'When did you last lose track of time doing something moderately difficult — and what made it just-challenging-enough?',
      'What’s a top personal strength of yours, and how could you use it in a way you haven’t tried this week?'
    ]
  },
  {
    id: 'rewirements', tradition: 'happiness', category: 'rewirements',
    name: 'Rewirements',
    definition: 'Santos’s term (distinct from mere knowledge) for the deliberate, repeated behavioral practice required to actually change one’s happiness set point — the course’s central claim that knowing the research changes nothing without sustained practice that rewires automatic habits of mind.',
    essence: 'Knowing what works is nearly useless without doing it enough times to make it automatic.',
    marks: [
      'Santos designed the course (and the related "Science of Well-Being" online course) around graded weekly practice assignments — gratitude journals, social connection logs, savoring exercises — precisely because lecture content alone showed little effect on students’ own reported happiness.',
      'The term deliberately echoes "rewiring": the goal is to shift automatic, default responses (checking social media when bored, self-spending when rewarding yourself) rather than only adding new conscious knowledge on top of old habits.',
      'Course data and related research on habit formation suggest consistency and repetition, more than intensity, is what predicts whether a practice actually shifts baseline happiness.'
    ],
    misreadings: [
      'Treating the course’s content (the research findings) as the point, rather than the practice — Santos is explicit that this is a course designed to be practiced, not merely learned.',
      'Expecting quick results — like any habit change, the research behind "rewirements" suggests gains accrue with sustained repetition, not a single application.'
    ],
    questions: [
      'Which of these findings have you understood for a while but never actually practiced?',
      'What would it take to turn one of these ideas into an automatic habit rather than an occasional, effortful choice?'
    ]
  }
];
