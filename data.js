// Emotion Atlas data
// Core structure inspired by the 13-category framework in Brené Brown's "Atlas of the Heart"
// (87 emotions and experiences grouped into 13 "places we go"), plus a 14th category drawing
// on the separate Ontological Coaching tradition (Echeverría / Newfield): 4 foundational
// "moods for action" — Resentment, Resignation, Acceptance, Peace — read as sustained
// dispositions toward what's possible, distinct from Atlas of the Heart's momentary emotions.
// All descriptive text, predisposition patterns, body cues, and coaching questions below are
// original content written for coaching use — not quoted from either source.

const CATEGORIES = [
  {
    id: 'uncertain',
    number: 1,
    title: 'Places We Go When Things Are Uncertain or Too Much',
    short: 'Uncertain or Too Much',
    blurb: 'Life feels unpredictable, high-stakes, or like too much is being asked at once.',
    color: '#5B7DB1'
  },
  {
    id: 'compare',
    number: 2,
    title: 'Places We Go When We Compare',
    short: 'When We Compare',
    blurb: "Someone else's situation becomes the measuring stick for our own worth or position.",
    color: '#8B5FBF'
  },
  {
    id: 'unplanned',
    number: 3,
    title: "Places We Go When Things Don't Go as Planned",
    short: "Don't Go as Planned",
    blurb: 'Reality diverges from what was expected or hoped for.',
    color: '#C97B3D'
  },
  {
    id: 'beyond-us',
    number: 4,
    title: "Places We Go When It's Beyond Us",
    short: "It's Beyond Us",
    blurb: 'Something exceeds our current understanding, pulling attention and curiosity outward.',
    color: '#3FA796'
  },
  {
    id: 'not-what-they-seem',
    number: 5,
    title: "Places We Go When Things Aren't What They Seem",
    short: "Aren't What They Seem",
    blurb: 'Two things that should not fit together both feel true at the same time.',
    color: '#B4656F'
  },
  {
    id: 'hurting',
    number: 6,
    title: "Places We Go When We're Hurting",
    short: "When We're Hurting",
    blurb: 'Loss or pain has settled in and needs to be moved through, not fixed.',
    color: '#55597A'
  },
  {
    id: 'with-others',
    number: 7,
    title: 'Places We Go With Others',
    short: 'With Others',
    blurb: "We're responding to someone else's pain or need, and deciding how close to stand.",
    color: '#4C9F70'
  },
  {
    id: 'fall-short',
    number: 8,
    title: 'Places We Go When We Fall Short',
    short: 'When We Fall Short',
    blurb: 'We, or someone else, fail to meet a standard, and self-worth feels on the line.',
    color: '#A15C93'
  },
  {
    id: 'connection',
    number: 9,
    title: 'Places We Go When We Search for Connection',
    short: 'Search for Connection',
    blurb: "We're seeking, or losing, the sense of being truly seen and valued.",
    color: '#3C8DAD'
  },
  {
    id: 'heart-open',
    number: 10,
    title: 'Places We Go When the Heart Is Open',
    short: 'The Heart Is Open',
    blurb: 'Trust, intimacy, and attachment are being built, tested, or broken.',
    color: '#D4587A'
  },
  {
    id: 'life-good',
    number: 11,
    title: 'Places We Go When Life Is Good',
    short: 'When Life Is Good',
    blurb: 'Circumstances or inner state are good enough to feel good — and we decide whether to let ourselves feel it.',
    color: '#CC9A2E'
  },
  {
    id: 'wronged',
    number: 12,
    title: 'Places We Go When We Feel Wronged',
    short: 'When We Feel Wronged',
    blurb: 'A boundary, value, or sense of justice has been violated.',
    color: '#B23A3A'
  },
  {
    id: 'self-assess',
    number: 13,
    title: 'Places We Go to Self-Assess',
    short: 'Self-Assess',
    blurb: "We're taking stock of our own worth, effort, or standing.",
    color: '#6B6B6B'
  },
  {
    id: 'ontological',
    number: null,
    title: 'Moods for Action — Ontological Coaching',
    short: 'Ontological Coaching',
    blurb: 'A separate coaching tradition (Echeverría / Newfield): sustained moods — not momentary emotions — that shape what someone believes is possible and their capacity to act.',
    color: '#8C5A2B'
  }
];

const EMOTIONS = [
  // 1. Uncertain or Too Much
  { id:'stress', name:'Stress', category:'uncertain',
    definition:'A response to a demand or threat perceived to exceed one’s ability to cope with it.',
    triggers:'Overloaded schedule, competing deadlines, too many demands at once.',
    predisposition:['Over-commits, then feels resentful about it','Wears "busy" as an identity or badge of honor','Struggles to say no even when at capacity','Catastrophizes the size of the workload'],
    bodyCues:['Tight shoulders or jaw','Shallow, fast breathing','Irritability over small things'],
    questions:['What specifically feels like too much right now?','What would taking one thing off your plate look like?','If nothing changes, what does this cost you a month from now?']
  },
  { id:'overwhelm', name:'Overwhelm', category:'uncertain',
    definition:'The sense that a situation has exceeded one’s capacity to respond, often freezing decision-making.',
    triggers:'Sudden pile-up of tasks or emotions, information overload.',
    predisposition:['Freezes or shuts down instead of prioritizing','Says "everything" is too much without naming a starting point','Avoids tasks entirely rather than triaging them'],
    bodyCues:['Freezing or going blank','Forgetfulness','Tears or a blank stare'],
    questions:['If you could only do one thing today, what would it be?','What’s the smallest possible next step?','What would you need to say no to, to make room for this?']
  },
  { id:'anxiety', name:'Anxiety', category:'uncertain',
    definition:'A future-oriented unease about what might happen, without a clear, specific target.',
    triggers:'Unclear or unpredictable future, high-stakes unknowns.',
    predisposition:['Seeks certainty and control excessively','Over-plans and rehearses worst-case scenarios','Struggles to stay present','Restless, hard to settle physically'],
    bodyCues:['Racing heart','Insomnia or restless sleep','Muscle tension'],
    questions:['What’s the story you’re telling about what might happen?','What is actually within your control here?','What would you do right now if you knew this would turn out fine?']
  },
  { id:'worry', name:'Worry', category:'uncertain',
    definition:'The cognitive chain of "what if" thoughts that circle around a specific concern.',
    triggers:'A specific unresolved concern about health, money, or a relationship.',
    predisposition:['Ruminates verbally, revisiting the same concern','Seeks reassurance repeatedly','Has difficulty letting a topic go even after it’s addressed'],
    bodyCues:['Furrowed brow','Repetitive questioning'],
    questions:['What would you need to know to set this worry down for now?','Whose input would actually help here?','What’s the very next action you could take on this, however small?']
  },
  { id:'avoidance', name:'Avoidance', category:'uncertain',
    definition:'Steering away from a person, task, or feeling in order to sidestep discomfort.',
    triggers:'Hard conversations, feared failure, uncomfortable emotions.',
    predisposition:['Procrastinates on the hardest conversation or task','Changes the subject when it nears a vulnerable feeling','Fills time with lower-stakes busywork'],
    bodyCues:['Sudden "busyness"','Physical withdrawal from the topic or person'],
    questions:['What are you protecting yourself from by not doing or saying this?','What would happen if you took the smallest step toward it?','What’s the cost of continuing to put this off?']
  },
  { id:'excitement', name:'Excitement', category:'uncertain',
    definition:'A positive, high-arousal anticipation of a future event.',
    triggers:'An anticipated positive event: a trip, launch, or milestone.',
    predisposition:['Talks fast and shares plans widely','Physiology can be mistaken for anxiety','Struggles to focus on anything else beforehand'],
    bodyCues:['Increased energy','Rapid speech','Difficulty sitting still'],
    questions:['What about this are you most looking forward to?','What would help you channel this energy into your next step?','What’s one thing you want to remember about how this feels?']
  },
  { id:'dread', name:'Dread', category:'uncertain',
    definition:'Anticipatory fear tied to a specific, unwanted event that is approaching.',
    triggers:'A specific unwanted event approaching: an exam, confrontation, or appointment.',
    predisposition:['Avoids scheduling anything near the event','Intrusive thoughts about it increase as it nears','Says things like "I can’t stop thinking about it"'],
    bodyCues:['Knotted stomach','Disrupted sleep before the event'],
    questions:['What’s the worst part of this for you?','What would make it 10% more bearable?','What support would you want in place going into it?']
  },
  { id:'fear', name:'Fear', category:'uncertain',
    definition:'A survival emotion triggered by a perceived real or imagined threat.',
    triggers:'Perceived real or imagined danger.',
    predisposition:['Shows fight, flight, or freeze reactions','Narrows focus tightly onto the threat','Makes more risk-averse decisions in the moment'],
    bodyCues:['Wide eyes','Quickened pulse','Defensive posture'],
    questions:['What exactly feels threatening here?','What would help you feel even slightly safer right now?','What’s the difference between the danger and the discomfort here?']
  },
  { id:'vulnerability', name:'Vulnerability', category:'uncertain',
    definition:'The emotion of uncertainty, risk, and emotional exposure.',
    triggers:'Asking for help, sharing feelings, trying something with an uncertain outcome.',
    predisposition:['Armors up with over-explaining, joking, or perfectionism','Avoids asking for help or naming a need directly','Speech becomes hesitant or guarded'],
    bodyCues:['Guardedness','Deflecting with humor'],
    questions:['What would it look like to show up here without your armor on?','What’s the smallest true thing you could say right now?','What would it mean about you if this didn’t go well?']
  },

  // 2. Compare
  { id:'comparison', name:'Comparison', category:'compare',
    definition:'Evaluating oneself against others, or an idealized standard, on ability, status, or worth.',
    triggers:'Social media, performance reviews, peer achievements.',
    predisposition:['Constantly benchmarks against peers','Mood dips after scrolling social media','Competitive even in non-competitive settings'],
    bodyCues:['Sighing after seeing others’ achievements','Self-deprecating remarks'],
    questions:['Whose yardstick are you using right now?','What would "enough" look like by your own definition?','What are you not seeing about their story?']
  },
  { id:'admiration', name:'Admiration', category:'compare',
    definition:"Positive regard for someone's qualities or achievements that inspires rather than diminishes.",
    triggers:'Witnessing someone’s skill, integrity, or courage.',
    predisposition:['Openly praises others','Uses others’ success as motivation rather than a threat'],
    bodyCues:['Genuine smiling','Leaning in with interest'],
    questions:['What quality in them would you like to grow in yourself?','What’s one step you could take this week to practice that quality?','What does admiring them, rather than envying them, make possible?']
  },
  { id:'reverence', name:'Reverence', category:'compare',
    definition:'Deep respect mixed with awe, often toward something larger than oneself.',
    triggers:'Awe-inspiring people, traditions, or sacred experiences.',
    predisposition:['Speaks in hushed, careful tones about the subject','Seeks repeated or ritual engagement with it'],
    bodyCues:['Stillness','Softened voice'],
    questions:['What does this bring up in you when you sit with it?','How might you carry more of this into your everyday life?','What does this experience ask of you?']
  },
  { id:'envy', name:'Envy', category:'compare',
    definition:'Wanting what someone else has: an object, trait, or relationship.',
    triggers:'Someone else has a job, relationship, or possession you want.',
    predisposition:['Fixates on what’s missing in own life after exposure to others’ success','Minimizes the other person’s achievement verbally'],
    bodyCues:['Tight smile','Clipped compliments'],
    questions:['What does their situation point to that you actually want for yourself?','What’s one step toward that thing that’s actually available to you?','What would you have to believe about yourself to go after it?']
  },
  { id:'jealousy', name:'Jealousy', category:'compare',
    definition:'Fear of losing a valued relationship to a third party.',
    triggers:'A perceived threat to a valued relationship.',
    predisposition:['Monitors a partner or friend’s other relationships','Shows possessive behavior','Seeks frequent reassurance'],
    bodyCues:['Guardedness around the perceived rival','Checking behavior'],
    questions:['What relationship or connection feels at risk here?','What would you need to hear or see to feel more secure?','What conversation have you been avoiding having directly?']
  },
  { id:'resentment', name:'Resentment', category:'compare',
    definition:'Anger toward someone believed to have received unfair advantage or treatment, often unaddressed directly.',
    triggers:'Repeated unfair treatment or unspoken unmet needs.',
    predisposition:['Builds silently over time','Expresses through passive-aggression or score-keeping','Sighs or complains indirectly instead of making a direct request'],
    bodyCues:['Eye-rolling','Terse tone'],
    questions:['What boundary or ask have you not been able to voice directly?','What would you need to say to close this out for yourself?','What’s the cost of continuing to carry this quietly?']
  },
  { id:'schadenfreude', name:'Schadenfreude', category:'compare',
    definition:"Pleasure derived from another person's misfortune.",
    triggers:'A rival or disliked person experiences a setback.',
    predisposition:['Shows subtle satisfaction when a rival struggles','Downplays the reaction if it’s named'],
    bodyCues:['Brief smirk','Gossiping about the person’s setback'],
    questions:['What need of yours gets met when you see them struggle?','What would it look like to meet that need in a way that doesn’t depend on their struggle?','What does this reaction tell you about your own unmet ambitions?']
  },
  { id:'freudenfreude', name:'Freudenfreude', category:'compare',
    definition:"Joy taken in another person's success — the opposite of schadenfreude.",
    triggers:'A friend or loved one shares good news.',
    predisposition:['Genuinely celebrates others without comparing','Shares others’ wins proactively'],
    bodyCues:['Authentic enthusiasm','Quick to congratulate'],
    questions:['What made it easy to feel happy for them here?','How could you let them know their success meant something to you too?','What would it look like to practice this more often, even with people you compare yourself to?']
  },

  // 3. Don't Go as Planned
  { id:'boredom', name:'Boredom', category:'unplanned',
    definition:'Restless dissatisfaction from a lack of stimulation or engagement.',
    triggers:'Repetitive tasks, lack of stimulation, waiting.',
    predisposition:['Fidgets or seeks distraction (phone, snacking)','Disengages from the task at hand'],
    bodyCues:['Yawning','Glazed expression','Restlessness'],
    questions:['What would make this moment feel more alive to you?','What are you avoiding by staying disengaged?','What would genuine engagement look like right now?']
  },
  { id:'disappointment', name:'Disappointment', category:'unplanned',
    definition:'Sadness triggered by unmet expectations.',
    triggers:'An anticipated outcome doesn’t happen.',
    predisposition:['Goes quiet or deflates after an outcome','Minimizes it ("it’s fine") instead of naming the letdown'],
    bodyCues:['Slumped posture','Flat tone'],
    questions:['What specifically had you hoped would happen?','What does this letdown tell you about what matters to you?','What’s one thing you can do with what actually happened?']
  },
  { id:'expectations', name:'Expectations', category:'unplanned',
    definition:'Beliefs about how things "should" turn out, which set the conditions for disappointment or relief.',
    triggers:'Entering a situation with a fixed idea of how it should go.',
    predisposition:['Over-plans outcomes in advance','Rigid about how things "should" unfold','Struggles to adapt when reality diverges'],
    bodyCues:['Visible tension when plans shift'],
    questions:['Where did this expectation come from, and is it still serving you?','What would you need to let go of to meet this moment as it is?','Whose expectation is this actually — yours, or someone else’s?']
  },
  { id:'regret', name:'Regret', category:'unplanned',
    definition:'Wishing a past decision or action had gone differently.',
    triggers:'Reflecting on a past decision with a different outcome in mind.',
    predisposition:['Replays the decision repeatedly','Uses self-critical language ("I should have…")','Hesitates on new decisions to avoid repeating it'],
    bodyCues:['Head-shaking','Looking away'],
    questions:['What would you do differently, and what does that tell you about what you value?','What would it look like to make amends or repair this, even partially?','How do you want this lesson to shape your next decision?']
  },
  { id:'discouragement', name:'Discouragement', category:'unplanned',
    definition:'Loss of confidence or enthusiasm after setbacks.',
    triggers:'Repeated setbacks or slow progress toward a goal.',
    predisposition:['Lowers effort or gives up early on similar tasks','Uses self-doubting language'],
    bodyCues:['Slower pace','Quieter voice'],
    questions:['What’s one small sign of progress you’re not giving yourself credit for?','What kept you going the last time you felt this way?','What’s one realistic win you could aim for next?']
  },
  { id:'resignation', name:'Resignation', category:'unplanned',
    definition:'Accepting an unwanted situation as unchangeable, often passively.',
    triggers:'A long-standing problem seen as unfixable.',
    predisposition:['Stops advocating for change','Shrugs things off with "that’s just how it is"'],
    bodyCues:['Flat affect','Shrugging'],
    questions:['What part of this do you actually still have influence over?','What would you attempt if you believed it could still work?','What’s one small experiment that would test whether that’s still true?']
  },
  { id:'frustration', name:'Frustration', category:'unplanned',
    definition:'Irritation from a blocked goal or a repeated obstacle.',
    triggers:'A repeated obstacle blocking a goal.',
    predisposition:['Short temper on unrelated small things','Repeats the same failed approach','Vents to others rather than adjusting course'],
    bodyCues:['Clenched jaw or fists','Sharp exhale'],
    questions:['What’s the block, and what have you already tried?','What’s a completely different approach you haven’t tried yet?','What would asking for help look like here?']
  },

  // 4. Beyond Us
  { id:'awe', name:'Awe', category:'beyond-us',
    definition:"A feeling of being in the presence of something vast that challenges one's understanding of the world.",
    triggers:'Vast nature, extraordinary human achievement, profound moments.',
    predisposition:['Goes quiet, feeling small in a positive way','Wants to share the moment with others'],
    bodyCues:['Widened eyes','Stillness','Goosebumps'],
    questions:['What did that moment put into perspective for you?','What do you want to carry forward from this experience?','How does this shift the size of the problem you were carrying before?']
  },
  { id:'wonder', name:'Wonder', category:'beyond-us',
    definition:'Curious amazement about how or why something is the way it is.',
    triggers:'Encountering something novel, complex, or beautiful.',
    predisposition:['Asks open-ended questions','Seeks to learn more rather than resolve immediately'],
    bodyCues:['Leaning in','Animated questioning'],
    questions:['What are you most curious about right now?','What would you explore first if there were no wrong answers?','What question are you most excited to sit with, unanswered, for now?']
  },
  { id:'confusion', name:'Confusion', category:'beyond-us',
    definition:'Uncertainty arising from conflicting or insufficient information.',
    triggers:'Conflicting information or unclear instructions.',
    predisposition:['Asks clarifying questions repeatedly','Or withdraws rather than admit not understanding'],
    bodyCues:['Furrowed brow','Tilted head'],
    questions:['What’s the piece that isn’t fitting together for you?','Who or what could help clarify this for you?','What do you actually know for certain right now?']
  },
  { id:'curiosity', name:'Curiosity', category:'beyond-us',
    definition:'An active interest in learning or exploring something new.',
    triggers:'A new topic, question, or unfamiliar experience.',
    predisposition:['Asks "why" and "what if" often','Seeks novel experiences','Comfortable not knowing yet'],
    bodyCues:['Leaning forward','Engaged eye contact'],
    questions:['What draws you to explore this further?','What’s the smallest experiment you could run to learn more?','What would you ask if you weren’t worried about looking uninformed?']
  },
  { id:'interest', name:'Interest', category:'beyond-us',
    definition:'Sustained attention and engagement toward a subject or activity.',
    triggers:'A subject aligned with one’s values or goals.',
    predisposition:['Initiates follow-up conversation or research unprompted'],
    bodyCues:['Attentive posture','Note-taking'],
    questions:['What about this holds your attention most?','Where could you go deeper on this?','What would it look like to make more time for this?']
  },
  { id:'surprise', name:'Surprise', category:'beyond-us',
    definition:'A brief reaction to something unexpected.',
    triggers:'An unexpected event, good or bad.',
    predisposition:['Pauses briefly, may laugh or gasp','Loses train of thought before reorienting'],
    bodyCues:['Raised eyebrows','Sharp inhale'],
    questions:['What did you expect instead, and what does the gap tell you?','What does this surprise open up that you hadn’t considered?','What assumption of yours just got challenged?']
  },

  // 5. Aren't What They Seem
  { id:'amusement', name:'Amusement', category:'not-what-they-seem',
    definition:'Light enjoyment, often from something funny or incongruous.',
    triggers:'Jokes, playful teasing, unexpected incongruity.',
    predisposition:['Laughs easily','Uses humor to connect or diffuse tension'],
    bodyCues:['Smiling, laughing','Relaxed posture'],
    questions:['What made that land as funny to you?','How might a little more lightness serve you right now?','What does this moment of laughter tell you about what you needed?']
  },
  { id:'bittersweetness', name:'Bittersweetness', category:'not-what-they-seem',
    definition:'The blend of happiness and sadness, often around transitions or endings.',
    triggers:'Endings, graduations, moving away, milestones.',
    predisposition:['Gets teary during celebrations or milestones','Holds two feelings at once without needing to resolve them'],
    bodyCues:['Watery eyes paired with a smile'],
    questions:['What are you celebrating, and what are you letting go of at the same time?','How do you want to honor both feelings at once?','What are you most grateful for as this chapter closes?']
  },
  { id:'nostalgia', name:'Nostalgia', category:'not-what-they-seem',
    definition:'A sentimental longing for the past, mixing warmth and loss.',
    triggers:'Reminders of the past: songs, smells, old friends.',
    predisposition:['Brings up "the old days" often, especially under present-day stress'],
    bodyCues:['Distant gaze','Softened tone while reminiscing'],
    questions:['What need from that time are you missing now?','What from that time could you bring into your life today?','What does this longing tell you about what you value now?']
  },
  { id:'cognitive-dissonance', name:'Cognitive Dissonance', category:'not-what-they-seem',
    definition:'The discomfort of holding two conflicting beliefs, or a belief that conflicts with behavior.',
    triggers:'Acting in a way that contradicts a stated value.',
    predisposition:['Rationalizes or justifies inconsistent behavior','Gets defensive when the conflict is named'],
    bodyCues:['Defensiveness','Over-explaining'],
    questions:['Where do your actions and your values feel out of step right now?','What would it take to bring them back into alignment?','What are you telling yourself to make the gap feel okay?']
  },
  { id:'paradox', name:'Paradox', category:'not-what-they-seem',
    definition:'Holding two seemingly contradictory truths at the same time.',
    triggers:'Two true but seemingly conflicting realities at once.',
    predisposition:['Comfortable saying "both things are true"','Resists either/or framing'],
    bodyCues:['Thoughtful pauses before answering'],
    questions:['What two true things are both present for you here?','What becomes possible when you stop trying to resolve it?','Which of the two truths have you been giving less weight to?']
  },
  { id:'irony', name:'Irony', category:'not-what-they-seem',
    definition:'A gap between expectation and reality, often noted with wry humor.',
    triggers:'An outcome opposite of what was expected or intended.',
    predisposition:['Points out contradictions between what was said and what happened','Can respond with detachment'],
    bodyCues:['Raised eyebrow','Dry tone'],
    questions:['What’s the gap you’re noticing between what was expected and what happened?','What does that gap reveal that you didn’t see before?','How does noticing this change what you’ll do next?']
  },
  { id:'sarcasm', name:'Sarcasm', category:'not-what-they-seem',
    definition:'Saying the opposite of what one means, often to express frustration indirectly through humor.',
    triggers:'Frustration expressed indirectly through mock praise or wit.',
    predisposition:['Uses biting humor instead of direct feedback','Can signal unspoken frustration'],
    bodyCues:['Flat or exaggerated tone','Eye-rolling'],
    questions:['If you said that directly instead of sarcastically, what would you say?','What are you protecting by saying it indirectly?','What response are you hoping for underneath the joke?']
  },

  // 6. Hurting
  { id:'anguish', name:'Anguish', category:'hurting',
    definition:'Acute, often overwhelming emotional or physical pain, frequently tied to a specific painful event.',
    triggers:'Sudden traumatic loss or acute crisis.',
    predisposition:['Struggles to function in the moment','May express pain physically or go silent and stunned'],
    bodyCues:['Crying out','Curling inward'],
    questions:['You don’t have to explain it right now — what do you need in this moment?','Who can you lean on right now, even just to sit with you?','What’s one thing that would make the next hour more bearable?']
  },
  { id:'hopelessness', name:'Hopelessness', category:'hurting',
    definition:'The belief that things cannot improve and that one has no power to change them.',
    triggers:'Prolonged struggle with no visible path forward.',
    predisposition:['Stops setting goals','Says things like "what’s the point"','Withdraws from problem-solving'],
    bodyCues:['Flat affect','Low energy'],
    questions:['Has there been any moment, even small, where it felt slightly different?','What’s one person or resource you haven’t reached out to yet?','What kept a similar situation from feeling this way before?']
  },
  { id:'despair', name:'Despair', category:'hurting',
    definition:'A profound, sustained loss of hope combined with deep suffering.',
    triggers:'Sustained hopelessness compounding over time.',
    predisposition:['Significant withdrawal from relationships and activities','May need professional support beyond coaching'],
    bodyCues:['Withdrawal','Exhaustion'],
    questions:['Who else is supporting you through this right now?','What’s one small thing that would make today marginally more bearable?','Who is checking in on you regularly right now?'],
    note:'If despair is severe or persistent, refer to a licensed mental health professional alongside any coaching support.'
  },
  { id:'sadness', name:'Sadness', category:'hurting',
    definition:'A natural response to loss, disappointment, or an unmet need.',
    triggers:'Loss, disappointment, or an unmet need.',
    predisposition:['Cries or seeks comfort or solitude','Speaks more slowly and quietly'],
    bodyCues:['Tears','Drooping posture'],
    questions:['What is this sadness telling you that you needed or lost?','What would comfort look like for you right now?','What do you need to let yourself feel without rushing past it?']
  },
  { id:'grief', name:'Grief', category:'hurting',
    definition:'The emotional response to loss, especially significant or permanent loss.',
    triggers:'Death, major loss, or the end of a significant relationship or role.',
    predisposition:['Moves through waves rather than a straight line','Oscillates between numbness and intense emotion'],
    bodyCues:['Crying','Disrupted sleep or appetite'],
    questions:['What would feel supportive to you right now, today?','What do you need permission to feel or say about this loss?','Is there a way you’d like to honor what you lost?']
  },

  // 7. With Others
  { id:'compassion', name:'Compassion', category:'with-others',
    definition:"Noticing another's suffering and being moved to help, while maintaining one's own boundaries.",
    triggers:'Witnessing someone else’s pain or struggle.',
    predisposition:['Offers practical help alongside emotional presence','Doesn’t lose self in the other person’s pain'],
    bodyCues:['Warm, open posture','Attentive listening'],
    questions:['What kind of support feels most helpful to offer here?','How are you making sure you don’t lose yourself in offering it?','What does this person need most — your help, or your presence?']
  },
  { id:'pity', name:'Pity', category:'with-others',
    definition:'A feeling of discomfort or sorrow for someone, often with an implied distance or sense of superiority.',
    triggers:'Observing someone’s misfortune from a distance.',
    predisposition:['Says "poor them" without engaging further','May avoid closer connection'],
    bodyCues:['Distancing body language','Brief acknowledgment, then topic change'],
    questions:['What would it look like to move from feeling sorry for them to standing with them?','What’s one way to get closer instead of staying at a distance?','What discomfort of your own keeps you at arm’s length here?']
  },
  { id:'empathy', name:'Empathy', category:'with-others',
    definition:"The ability to feel with someone — sensing and honoring their emotional experience as valid, without needing to fix it.",
    triggers:'Someone shares a vulnerable experience with you.',
    predisposition:['Reflects feelings back','Asks about the other’s experience','Resists jumping to advice'],
    bodyCues:['Matched tone and pace','Sustained eye contact'],
    questions:['What do you imagine they most need to feel heard right now?','How are you taking care of yourself while holding space for them?','What did you notice in your own body while listening to them?']
  },
  { id:'sympathy', name:'Sympathy', category:'with-others',
    definition:"Feeling concern or sorrow for someone from an outside vantage point, without fully entering their experience.",
    triggers:'Learning of someone’s hardship secondhand.',
    predisposition:['Offers condolences or well-wishes','Keeps emotional distance'],
    bodyCues:['Polite concern','Less sustained engagement than empathy'],
    questions:['What would it take to move closer to their experience rather than observing from a distance?','What’s one thing you could say that shows you’re really with them?','What would moving from words to presence look like here?']
  },
  { id:'boundaries', name:'Boundaries', category:'with-others',
    definition:"Clear limits on what is and isn't okay in a relationship or situation.",
    triggers:'A request or situation that conflicts with your limits.',
    predisposition:['Struggles to say no, or over-corrects into rigid walls','Feels guilty when asserting a limit'],
    bodyCues:['Hesitation before declining requests','Over-explaining a "no"'],
    questions:['What boundary, if set clearly, would make this relationship more sustainable?','What’s the kindest, clearest way to state that boundary?','What are you afraid will happen if you set it?']
  },
  { id:'comparative-suffering', name:'Comparative Suffering', category:'with-others',
    definition:'Ranking or minimizing one’s own (or others’) pain by comparing it to someone else’s.',
    triggers:'Feeling guilty for struggling when others "have it worse."',
    predisposition:['Dismisses own struggles as "not that bad"','Discourages others from sharing by minimizing'],
    bodyCues:['Quick deflection ("I shouldn’t complain")'],
    questions:['What would it look like to let your experience be valid without comparing it to anyone else’s?','What do you need right now that you’ve been talking yourself out of?','What would you tell a friend who minimized their pain this way?']
  },

  // 8. Fall Short
  { id:'shame', name:'Shame', category:'fall-short',
    definition:'The intensely painful feeling of believing we are flawed and therefore unworthy of love and belonging.',
    triggers:'Being exposed, criticized, or perceived as flawed.',
    predisposition:['Hides, withdraws, or lashes out when exposed','Keeps secrecy or silence around the triggering topic','Uses harsh self-talk ("I am bad")'],
    bodyCues:['Avoiding eye contact','Wanting to disappear','Flushed face'],
    questions:['What’s the story you’re telling about what this means about you as a person?','Who in your life would remind you this doesn’t define your worth?','What would you say to someone else in this exact situation?']
  },
  { id:'self-compassion', name:'Self-Compassion', category:'fall-short',
    definition:'Treating oneself with the same kindness and understanding one would offer a friend, especially in failure.',
    triggers:'Making a mistake or falling short of a personal standard.',
    predisposition:['Uses gentler self-talk after mistakes','Recovers faster from setbacks'],
    bodyCues:['Relaxed posture even when discussing a mistake'],
    questions:['What would you say to a friend in this exact situation?','What would it feel like to actually believe that about yourself?','What would change if you treated this mistake as information, not a verdict?']
  },
  { id:'perfectionism', name:'Perfectionism', category:'fall-short',
    definition:'A self-protective belief that if we do everything right, we can avoid shame, blame, and judgment.',
    triggers:'High-stakes performance situations, public evaluation.',
    predisposition:['Over-prepares and struggles to delegate or finish','Harsh self-criticism for small errors','Holds all-or-nothing standards'],
    bodyCues:['Tense over minor details','Difficulty accepting "good enough"'],
    questions:['What would "good enough" look like here, and what makes that hard to accept?','Whose approval are you really trying to earn?','What would you attempt if failing wasn’t a reflection of your worth?']
  },
  { id:'guilt', name:'Guilt', category:'fall-short',
    definition:'Feeling bad about a specific behavior that conflicts with one’s values ("I did something bad").',
    triggers:'Acting against one’s own values or hurting someone.',
    predisposition:['Apologizes and seeks to repair or make amends','Reflects on the specific action rather than the whole self'],
    bodyCues:['Apologetic tone','Direct acknowledgment of the mistake'],
    questions:['What action would help you make this right?','What do you want to do differently next time?','What would it take to forgive yourself once you’ve made this right?']
  },
  { id:'humiliation', name:'Humiliation', category:'fall-short',
    definition:'The intense pain of being degraded or put down, often publicly and believed to be undeserved.',
    triggers:'Being publicly degraded or unfairly put down.',
    predisposition:['Feels anger or defensiveness toward the person who caused it','Strong urge to defend one’s reputation'],
    bodyCues:['Flushed face','Raised voice','Defensive stance'],
    questions:['What about this feels undeserved to you, and what do you need to feel restored?','Who could you talk to that would help you feel less alone in this?','What would reclaiming your dignity here look like?']
  },
  { id:'embarrassment', name:'Embarrassment', category:'fall-short',
    definition:'A milder, more universal discomfort after a minor social misstep, usually resolving with humor or time.',
    triggers:'A minor social misstep witnessed by others.',
    predisposition:['Laughs it off','Makes self-deprecating jokes','Recovers quickly'],
    bodyCues:['Blushing','Nervous laughter'],
    questions:['How funny will this seem in a week?','What do you want to remember about how you handled it?','Who else has been through something similar — does that change how you see it?']
  },

  // 9. Search for Connection
  { id:'belonging', name:'Belonging', category:'connection',
    definition:'Being accepted for one’s authentic self, without having to change to be included.',
    triggers:'Being in a group where you can be fully yourself.',
    predisposition:['Shows up authentically in the group','Speaks up even when it risks disagreement'],
    bodyCues:['Relaxed, open body language among the group'],
    questions:['Where do you feel most able to be fully yourself?','What would it take to bring more of that into other parts of your life?','What lets you drop the mask so completely here?']
  },
  { id:'fitting-in', name:'Fitting In', category:'connection',
    definition:'Changing oneself to gain acceptance from a group, assessed by what will be approved of rather than valued for who one is.',
    triggers:'Joining a new group with unclear or rigid norms.',
    predisposition:['Mirrors the group’s opinions or behavior even when it conflicts with own views','Suppresses authentic reactions'],
    bodyCues:['Watching others before responding','Muted expression'],
    questions:['What part of yourself are you editing out to be accepted here?','What would happen if you showed that part of yourself here?','What are you afraid the group would do if you stopped adjusting?']
  },
  { id:'connection-emotion', name:'Connection', category:'connection',
    definition:'The energy that exists between people when they feel seen, heard, and valued without judgment.',
    triggers:'Sharing a vulnerable or meaningful moment with someone.',
    predisposition:['Initiates check-ins and remembers details about others','Reciprocates vulnerability'],
    bodyCues:['Sustained warm eye contact','Mirrored body language'],
    questions:['What made this connection feel real to you?','How could you create more moments like this one?','What did you risk sharing to make this connection possible?']
  },
  { id:'disconnection', name:'Disconnection', category:'connection',
    definition:'The absence or breakdown of felt connection with others.',
    triggers:'Distance, conflict, or lack of contact in a relationship.',
    predisposition:['Withdraws from usual relationships','Communicates less','Feels unseen even in a crowd'],
    bodyCues:['Physical distancing','Shorter interactions'],
    questions:['When did you first notice the distance growing?','What’s one small step toward closing that distance?','What would you want the other person to know about how this feels?']
  },
  { id:'insecurity', name:'Insecurity', category:'connection',
    definition:'A lack of confidence or certainty about oneself, one’s relationships, or one’s standing.',
    triggers:'Facing judgment, rejection, or unfamiliar situations.',
    predisposition:['Seeks frequent reassurance','Second-guesses decisions','Sensitive to perceived criticism'],
    bodyCues:['Fidgeting','Checking others’ reactions'],
    questions:['What would help you feel more grounded in yourself right now?','What evidence do you have that contradicts this doubt?','Whose voice is this doubt actually in?']
  },
  { id:'invisibility', name:'Invisibility', category:'connection',
    definition:'The painful sense of not being seen, noticed, or valued by others.',
    triggers:'Being overlooked or unacknowledged in a group.',
    predisposition:['Stops volunteering opinions in groups','Feels unheard even after speaking up'],
    bodyCues:['Quieter participation','Hesitance to take up space'],
    questions:['Where do you most want to be seen, and by whom?','What would it take to make that visible request directly?','Who would you want to notice, and what would you want them to see?']
  },
  { id:'loneliness', name:'Loneliness', category:'connection',
    definition:'The distressing gap between the connection one wants and the connection one has.',
    triggers:'Isolation, or a lack of the depth of connection desired.',
    predisposition:['Withdraws further even while craving contact','Reaches out indirectly (texting, social media) rather than making direct requests for time together'],
    bodyCues:['Isolation','Low energy'],
    questions:['What kind of connection are you missing most right now?','What’s one small, low-risk way to reach out this week?','What kind of company would actually meet this need — quantity or depth?']
  },

  // 10. Heart Is Open
  { id:'love', name:'Love', category:'heart-open',
    definition:"Mutual nurturing of another's (and one's own) spiritual and emotional growth, through connection, trust, and affection.",
    triggers:'Deepening intimacy, mutual care, and shared vulnerability.',
    predisposition:['Extends grace and prioritizes the relationship','Invests time and vulnerability'],
    bodyCues:['Relaxed warmth','Attentive care'],
    questions:['How are you nurturing this relationship right now?','What does this relationship need more of from you right now?','How do you want to show up for them this week?']
  },
  { id:'lovelessness', name:'Lovelessness', category:'heart-open',
    definition:'A state of feeling unworthy of love or disconnected from the ability to give or receive it.',
    triggers:'Chronic rejection, isolation, or self-doubt about being loveable.',
    predisposition:['Pushes away affection','Doubts others’ care is genuine','Isolates from close relationships'],
    bodyCues:['Flinching from affection','Deflecting compliments'],
    questions:['What would it take to let a little more love in right now?','Where have you experienced care recently, even in a small way?','What would it take to believe you’re worth loving as you are?']
  },
  { id:'heartbreak', name:'Heartbreak', category:'heart-open',
    definition:'Profound emotional pain from the loss or rupture of a significant relationship or attachment.',
    triggers:'The end of a significant romantic or close relationship.',
    predisposition:['Replays the relationship repeatedly','Oscillates between longing and anger','Struggles to concentrate on other areas of life'],
    bodyCues:['Crying','Physical ache','Disrupted sleep or appetite'],
    questions:['What do you need to grieve before you can move forward?','What would taking care of yourself look like today?','What do you want to remember about what this relationship gave you?']
  },
  { id:'trust', name:'Trust', category:'heart-open',
    definition:'Choosing to make something important to you vulnerable to another’s actions.',
    triggers:'Deciding to rely on someone with something important.',
    predisposition:['Shares openly and extends benefit of the doubt','Follows through on commitments to build reciprocal trust'],
    bodyCues:['Relaxed openness','Willingness to be vulnerable'],
    questions:['What has this person done to earn your trust so far?','What would help you extend a little more trust, one step at a time?','What’s the smallest way they could show they’re reliable?']
  },
  { id:'self-trust', name:'Self-Trust', category:'heart-open',
    definition:"Confidence in one's own judgment, boundaries, and ability to keep commitments to oneself.",
    triggers:'Making and keeping a commitment to yourself.',
    predisposition:['Follows through on self-made promises','Makes decisions without excessive external validation'],
    bodyCues:['Steady tone','Decisive language'],
    questions:['Where have you kept a promise to yourself recently?','What’s one small commitment to yourself you could make and keep this week?','Where has doubting yourself cost you more than trusting yourself would have?']
  },
  { id:'betrayal', name:'Betrayal', category:'heart-open',
    definition:'The breaking of trust through disloyalty, dishonesty, or broken confidence.',
    triggers:'Discovering dishonesty or a broken confidence.',
    predisposition:['Becomes hypervigilant or guarded afterward','May test the other person or withdraw entirely'],
    bodyCues:['Guardedness','Cold or clipped interactions with the person involved'],
    questions:['What was broken, specifically, and what would need to happen to rebuild it?','What do you need before you could consider trusting again?','What would rebuilding, even partially, actually require of both of you?']
  },
  { id:'defensiveness', name:'Defensiveness', category:'heart-open',
    definition:'Protecting oneself from a perceived attack, often by denying, justifying, or counterattacking.',
    triggers:'Receiving feedback or criticism that feels like an attack.',
    predisposition:['Interrupts to explain or justify','Deflects blame','Has difficulty hearing feedback without rebuttal'],
    bodyCues:['Crossed arms','Interrupting','Raised voice'],
    questions:['What did you hear that felt like an attack, even if it wasn’t meant that way?','What would it look like to just listen for one more minute before responding?','What’s true in what they said, even if the delivery was hard to hear?']
  },
  { id:'flooding', name:'Flooding', category:'heart-open',
    definition:'A state of physiological and emotional overwhelm during conflict, making a rational response impossible.',
    triggers:'Intense conflict or criticism during an argument.',
    predisposition:['Shuts down mid-conversation','Says things that aren’t meant','Needs to physically step away to reset'],
    bodyCues:['Racing heart','Tunnel vision','Sudden silence or raised voice'],
    questions:['What helps you come back to baseline when you’re this activated?','What would a pause right now let you come back to more clearly?','What’s your signal that you’ve crossed into flooding, before it peaks?']
  },
  { id:'hurt', name:'Hurt', category:'heart-open',
    definition:'Emotional pain caused by another’s words or actions, often sitting at the intersection of several emotions.',
    triggers:'Words or actions from someone close that cause pain.',
    predisposition:['Withdraws or lashes out depending on whether hurt turns inward or outward','Goes quiet rather than naming the pain directly'],
    bodyCues:['Tearing up','Tight voice','Avoiding the person'],
    questions:['What specifically was said or done that landed as hurtful?','What do you need to hear from them, or from yourself, right now?','What would it take to name this out loud instead of holding it in?']
  },

  // 11. Life Is Good
  { id:'joy', name:'Joy', category:'life-good',
    definition:'An intense, often fleeting feeling of deep connection and pleasure, frequently tied to gratitude.',
    triggers:'Unexpected good news, connection, or a peak positive moment.',
    predisposition:['Fully present in the moment','Expresses feeling through spontaneous smiling or laughter','Wants to share it with others'],
    bodyCues:['Bright expression','Spontaneous laughter'],
    questions:['What let you feel fully present for that moment of joy?','How do you want to mark or remember this moment?','Who would you want to share this with?']
  },
  { id:'happiness', name:'Happiness', category:'life-good',
    definition:'A more stable, circumstance-dependent sense of pleasure or satisfaction.',
    triggers:'Favorable circumstances or pleasant events.',
    predisposition:['Attributes mood to external events','Reports feeling good when things go as planned'],
    bodyCues:['Relaxed smiling','Easy conversation'],
    questions:['What conditions tend to bring out your happiness most reliably?','How could you build more of those conditions into your regular life?','What’s one small version of this you could create today?']
  },
  { id:'calm', name:'Calm', category:'life-good',
    definition:'A state free from agitation, achieved by intentionally managing one’s nervous system.',
    triggers:'Intentional grounding practices amid or after stress.',
    predisposition:['Uses grounding practices (breathing, pausing) under stress','Models steadiness for others'],
    bodyCues:['Slow, steady breathing','Relaxed shoulders'],
    questions:['What practice helps you find calm when things get intense?','How could you build that practice into your day before you need it?','What does your body feel like right before you find this state?']
  },
  { id:'contentment', name:'Contentment', category:'life-good',
    definition:'A quiet satisfaction with what one has, without needing more.',
    triggers:'Reflecting on a life that currently meets one’s needs.',
    predisposition:['Expresses gratitude for the present without striving for the next thing','Compares little to others'],
    bodyCues:['Relaxed, settled demeanor'],
    questions:['What about your current situation feels genuinely enough?','What would you want to protect about this as things change?','What lets you feel enough without needing more right now?']
  },
  { id:'gratitude', name:'Gratitude', category:'life-good',
    definition:'An emotion and a practice of acknowledging what is good and where it comes from.',
    triggers:'Recognizing a gift, support, or positive circumstance.',
    predisposition:['Names specific things or people they’re thankful for unprompted','Expresses appreciation outwardly'],
    bodyCues:['Warm tone','Direct eye contact when thanking others'],
    questions:['What’s one thing today you haven’t yet said thank you for?','How could you let that person or moment know it mattered?','What would it look like to notice this more often, not just today?']
  },
  { id:'foreboding-joy', name:'Foreboding Joy', category:'life-good',
    definition:'The fear of allowing oneself to fully feel joy, anticipating it will be taken away or followed by disaster.',
    triggers:'Experiencing something wonderful after past loss or disappointment.',
    predisposition:['Dress-rehearses tragedy after good news','Downplays good moments to "not jinx it"'],
    bodyCues:['Hesitant smiling','Quickly shifting to worry after happy news'],
    questions:['What would it feel like to let yourself enjoy this without bracing for the other shoe to drop?','What’s one small way to practice staying present with the good?','What’s the actual evidence that this joy will be taken away?']
  },
  { id:'relief', name:'Relief', category:'life-good',
    definition:'The release of tension after an anticipated threat or difficulty passes.',
    triggers:'A feared or stressful situation resolves favorably.',
    predisposition:['Visibly relaxes after news','Expresses release through a long exhale, tears, or laughter'],
    bodyCues:['Exhaling','Shoulder drop'],
    questions:['What tension are you most aware of releasing right now?','What did you learn from getting through it that you want to keep?','What do you want to do differently now that the pressure is off?']
  },
  { id:'tranquility', name:'Tranquility', category:'life-good',
    definition:'A deep, sustained sense of peace, often independent of external circumstances.',
    triggers:'Extended periods of low stress and inner steadiness.',
    predisposition:['Maintains equanimity even amid disruption','Doesn’t need to control the environment to feel settled'],
    bodyCues:['Unhurried movement','Even tone of voice'],
    questions:['What helps you access this sense of peace, and how could you return to it more often?','What would protecting this sense of peace require of you?','What tends to be the first thing that disrupts it?']
  },

  // 12. Feel Wronged
  { id:'anger', name:'Anger', category:'wronged',
    definition:'An intense emotional response to a perceived wrong, injustice, or threat, often signaling a boundary or value has been violated.',
    triggers:'A boundary, value, or sense of fairness is violated.',
    predisposition:['Raises voice or becomes confrontational, or stews silently','Feels energized to act, for better or worse'],
    bodyCues:['Flushed face','Clenched fists or jaw','Raised voice'],
    questions:['What boundary or value feels like it’s been crossed here?','What would a constructive next step look like, once the heat settles?','What do you actually want to happen from here?']
  },
  { id:'contempt', name:'Contempt', category:'wronged',
    definition:'A feeling of moral superiority combined with disgust toward another person, seen as beneath respect.',
    triggers:'Repeated conflict where one party feels morally superior.',
    predisposition:['Uses mocking or dismissive language and tone','Aims sarcasm at the other person’s character'],
    bodyCues:['Sneering','Eye-rolling'],
    questions:['What would it take to see this person as fully human right now, even in disagreement?','What’s underneath the judgment you’re holding?','What would it cost you to stay curious instead of certain here?']
  },
  { id:'disgust', name:'Disgust', category:'wronged',
    definition:'A strong aversion to something perceived as offensive, contaminating, or morally wrong.',
    triggers:'Witnessing something perceived as morally or physically offensive.',
    predisposition:['Physically recoils','Avoids the person or situation','Expresses revulsion verbally'],
    bodyCues:['Wrinkled nose','Grimacing','Turning away'],
    questions:['What value of yours feels violated by this?','What action, if any, does that value call you to take?','What would it look like to address this without dismissing the person entirely?']
  },
  { id:'dehumanization', name:'Dehumanization', category:'wronged',
    definition:'Perceiving or treating another person, or group, as less than fully human, often to justify mistreatment.',
    triggers:'Ongoing conflict where "the other side" is framed as less than human.',
    predisposition:['Uses depersonalizing language about the other person or group','Struggles to acknowledge their perspective or suffering'],
    bodyCues:['Cold, detached language'],
    questions:['What would change if you had to describe this person to someone who loves them?','What would it take to re-open a conversation with their humanity in view?','What story about "the other side" would you need to question first?']
  },
  { id:'hate', name:'Hate', category:'wronged',
    definition:'An intense, sustained hostility directed at a person or group, combining anger, contempt, and disgust.',
    triggers:'Prolonged, unresolved conflict or a perceived enemy.',
    predisposition:['Seeks to see the target diminished or harmed','Organizes identity partly around opposition to the target'],
    bodyCues:['Rigid posture','Clipped or venomous language'],
    questions:['What need or fear sits underneath this intensity?','What would it cost you to keep carrying this?','What would letting even a little of this go free you up to do instead?']
  },
  { id:'self-righteousness', name:'Self-Righteousness', category:'wronged',
    definition:'A conviction of one’s own moral superiority, often used to justify judgment of others.',
    triggers:'A disagreement where one feels certain they are morally correct.',
    predisposition:['Lectures or moralizes','Dismisses other viewpoints quickly','Struggles to admit fault'],
    bodyCues:['Raised chin','Lecturing tone'],
    questions:['Where might there be more than one valid way to see this?','What would you have to admit to consider another perspective?','What’s it costing your relationships to always need to be right here?']
  },

  // 13. Self-Assess
  { id:'pride', name:'Pride', category:'self-assess',
    definition:'A healthy sense of satisfaction from one’s own effort or achievement, grounded in reality.',
    triggers:'Completing a goal through one’s own effort.',
    predisposition:['Credits specific effort and actions when acknowledging success','Can accept compliments without deflecting'],
    bodyCues:['Upright posture','Genuine smile','Calm confidence'],
    questions:['What effort of yours specifically led to this outcome?','How do you want to build on this going forward?','Who else contributed to this, and have you acknowledged them?']
  },
  { id:'hubris', name:'Hubris', category:'self-assess',
    definition:'Inflated, often fragile self-importance that requires putting others down to feel superior.',
    triggers:'Success that isn’t checked by feedback or humility.',
    predisposition:['Exaggerates accomplishments','Dismisses feedback','Reacts defensively to any challenge','Needs constant external validation'],
    bodyCues:['Boastful language','Interrupting to redirect credit to self'],
    questions:['What would it feel like to let your work speak for itself without needing to inflate it?','Whose feedback have you been dismissing that might be worth a second look?','What would happen if you asked someone to challenge this assumption?']
  },
  { id:'humility', name:'Humility', category:'self-assess',
    definition:'A grounded, accurate view of oneself, neither inflated nor diminished, open to growth and others’ input.',
    triggers:'Receiving feedback, making a mistake, or learning something new.',
    predisposition:['Seeks feedback actively','Acknowledges limitations','Gives credit to others readily'],
    bodyCues:['Relaxed, receptive posture when receiving feedback'],
    questions:['What’s something you’re still learning about this?','Who could you ask for feedback that you haven’t yet?','What’s something recent you got wrong, and what did it teach you?']
  },

  // 14. Ontological Coaching — Moods for Action (the "mood ladder": Resentment, Resignation,
  // Acceptance, Peace). A different tradition from Atlas of the Heart — moods here are read as
  // sustained, often unconscious dispositions toward what's possible, not passing emotions.
  { id:'resentment-mood', name:'Resentment', category:'ontological',
    definition:'A lingering disposition that forms when a past complaint, unmet expectation, or broken promise is never voiced or closed — leaving someone relating to the present through an old, unresolved account.',
    triggers:'An unspoken complaint, an unmet expectation, or a broken promise that was never addressed directly.',
    predisposition:['Keeps a private ledger of past wrongs rather than making a direct claim or request','Relates to the present through the lens of an old, unresolved grievance','Closed to new possibility with the person involved — "nothing they do will fix this"','Puts energy into rehearsing the story rather than taking action'],
    bodyCues:['Tight chest or jaw when the person or topic comes up','Flat, clipped tone when their name is mentioned','Physically stiffens or turns away in their presence'],
    questions:['What specific promise, expectation, or complaint was never voiced here?','If you made the unspoken claim directly, what would you actually ask for?','What would it take to close this account, even if the other person never acknowledges it?'],
    note:'Ontological-coaching sense of the mood — a stance built from an unresolved past claim. Distinct from the comparison-triggered "Resentment" earlier in this atlas, under Places We Go When We Compare.'
  },
  { id:'resignation-mood', name:'Resignation', category:'ontological',
    definition:'A mood in which someone has concluded that no action they take will change their situation, so they stop making requests or offers altogether — often mistaken for calm acceptance.',
    triggers:'Repeated attempts that "didn’t work," leading to a private conclusion that a situation is permanently unchangeable.',
    predisposition:['Stops making requests, offers, or proposals in the area of concern','Explains the situation in permanent, unchangeable terms ("that’s just how it is / how they are")','Can look calm on the surface while having quietly given up on a possibility','Redirects ambition elsewhere rather than re-engaging here'],
    bodyCues:['Shrugging, flat tone, minimal eye contact when the topic comes up','Notably low physiological activation, compared to frustration or anger'],
    questions:['Where did you conclude that nothing could be done here, and when did that conclusion form?','What would you attempt if you believed change were still possible?','What’s one small experiment that would test whether that conclusion still holds?'],
    note:'Ontological-coaching sense of the mood — a closed conclusion about what is possible. Distinct from the setback-driven "Resignation" earlier in this atlas, under Places We Go When Things Don’t Go as Planned.'
  },
  { id:'acceptance-mood', name:'Acceptance', category:'ontological',
    definition:'A mood of making peace with what has already happened or what cannot currently be changed — which, unlike resignation, leaves someone open to act on what remains within their power.',
    triggers:'Coming to terms with an outcome, loss, or limitation that cannot be undone or controlled.',
    predisposition:['Distinguishes clearly between what can and can’t be influenced going forward','Stops arguing with what has already happened','Redirects energy toward the next possible action rather than the unchangeable past','Speaks about the situation with steadiness rather than charge'],
    bodyCues:['Relaxed exhale, settled posture','Even, unforced tone when describing the situation'],
    questions:['What part of this is now simply a fact you’re being asked to work with?','Now that you’ve made peace with what happened, what becomes possible that wasn’t before?','What’s still within your influence, even though the outcome itself wasn’t?']
  },
  { id:'peace-mood', name:'Peace', category:'ontological',
    definition:'A grounded mood of being fundamentally at ease with life as it is, from which someone can pursue new possibilities without being driven by anxiety, urgency, or the need to prove something.',
    triggers:'A settled relationship with one’s circumstances, past, and identity that isn’t contingent on the next outcome.',
    predisposition:['Takes action from choice and curiosity rather than urgency or fear','Doesn’t need external validation to feel grounded in the moment','Can sit with uncertainty without rushing to resolve it','Shows patience and steadiness even while pursuing ambitious goals'],
    bodyCues:['Relaxed shoulders and an unhurried pace even under pressure','Steady, unforced breathing and tone'],
    questions:['What would you pursue here if you were fully at peace with how things turned out?','Where in your life do you already operate from this kind of groundedness — what makes that possible?','How is peace here different from resignation — what live possibility are you still holding open?']
  }
];

// The Mood Ladder (Ontological Coaching): a practical guide to the three transitions between
// the four moods above. Moods aren't fixed traits — a client can move up or down this ladder
// within a single conversation — but this is the general direction coaching moves them: from a
// closed relationship with the past and with possibility, toward an open one.
const MOOD_LADDER = [
  {
    id: 'resentment-to-resignation',
    from: 'resentment-mood',
    to: 'resignation-mood',
    summary: 'Turning a silent, rehearsed grievance into something nameable — the first step out of a closed loop.',
    whatShifts: 'In resentment, the client relates to the present through an old, unspoken account: a complaint, expectation, or promise that was never voiced and never closed. Resignation is still a closed mood — the client has stopped believing anything will change — but the charge is gone. Some clients pass through resignation on the way to genuine acceptance; the risk is stalling there, mistaking the quiet for peace.',
    readySigns: [
      'Tells the same grievance story repeatedly, with no new detail or movement',
      'Can describe what was done to them but not what they actually wanted',
      'Talks about the other person in fixed, totalizing terms ("they always / they never")',
      'Shows physical charge (tight jaw, clipped tone) whenever the topic surfaces'
    ],
    coachMoves: [
      'Help the client make the unvoiced complaint explicit — what, specifically, was the broken promise or unmet expectation?',
      'Separate the complaint from a request: turn "they wronged me" into "here is what I wanted and didn’t get"',
      'Invite a conscious choice about the account — make the request now, let it go, or knowingly leave it open — rather than carrying it passively',
      'Notice and name the shift when it happens: from charged storytelling to flat, matter-of-fact description'
    ],
    sampleLanguage: [
      '"What did you actually want from them that you never asked for directly?"',
      '"If you closed this account today, what would ‘closed’ look like?"',
      '"What would you need to say — even just to yourself — to put this down?"'
    ]
  },
  {
    id: 'resignation-to-acceptance',
    from: 'resignation-mood',
    to: 'acceptance-mood',
    summary: 'Testing the closed conclusion "nothing can change" — and separating what’s truly fixed from what the client stopped trying.',
    whatShifts: 'Resignation rests on a private, often unexamined conclusion that no action will change the situation, so the client quietly stops making requests or attempts — sometimes mistaking that stillness for peace. Acceptance is an active reckoning: the client stops arguing with what can’t be changed, while getting clear on what still can. It looks similar from the outside; the difference is whether energy has anywhere to go.',
    readySigns: [
      'Describes the situation in permanent, unchangeable terms ("that’s just how it is")',
      'Shows flat affect rather than active charge — notably calmer than resentment or anger',
      'Has stopped making any requests, offers, or attempts in this area of life',
      'Equates "letting go" with "nothing to be done" rather than "here’s what’s left to do"'
    ],
    coachMoves: [
      'Separate fact from interpretation — ask when and how the client concluded that nothing could change; a conclusion has an origin, a fact doesn’t',
      'Propose one small, low-risk experiment that would actually test whether the conclusion still holds',
      'Draw a clear line between what genuinely isn’t in the client’s control and what they simply stopped trying to influence',
      'Normalize that acceptance is not approval — it just stops the fight with a fact, freeing energy for what comes next'
    ],
    sampleLanguage: [
      '"Where did you first conclude that nothing could be done here?"',
      '"What would you attempt if you believed change were even 10% possible?"',
      '"What part of this is a fact you’re being asked to work with, versus a story you’re still fighting?"'
    ]
  },
  {
    id: 'acceptance-to-peace',
    from: 'acceptance-mood',
    to: 'peace-mood',
    summary: 'Moving from "I’ve made peace with what happened" to acting from groundedness rather than urgency.',
    whatShifts: 'Acceptance settles the account with the past or the unchangeable. Peace goes further: it’s a grounded stance from which the client can pursue new goals without anxiety, urgency, or the need to prove something — action from choice rather than compulsion. The work here is forward-looking, not resolving anything more about what happened.',
    readySigns: [
      'Talks about the situation steadily, without needing to relitigate it',
      'Starts asking "what’s next" instead of returning to what happened',
      'Shows curiosity about new possibilities rather than seeking outside validation',
      'Can sit with an open question without rushing to resolve it'
    ],
    coachMoves: [
      'Invite forward-looking design: now that this is settled, what does the client actually want to create?',
      'Help the client tell the difference between ambition and urgency — is this action coming from groundedness, or from anxiety and the need to prove something?',
      'Anchor the mood somatically — name what peace actually feels like in the body, so the client can recognize and return to it later',
      'Treat any slide back into resentment or resignation under stress as information, not failure — moods are dynamic, not a one-time achievement'
    ],
    sampleLanguage: [
      '"What would you pursue here if you were fully at peace with how things turned out?"',
      '"What’s the difference between wanting this and needing this?"',
      '"How do you want to recognize this grounded feeling, so you can find your way back to it later?"'
    ]
  }
];
