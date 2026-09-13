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

// Coaching Pathways: a small library of guides for moving a client from a stuck, closed state
// to a more resourceful, open one. Each pathway is a short chain of steps between named
// emotions/moods already defined above; `transitions` gives the practical, step-by-step guide
// between each consecutive pair. None of these chains are fixed or one-directional in real
// coaching — a client can move back and forth — but this is the general direction each moves.
const COACHING_PATHWAYS = [
  {
    id: 'mood-ladder',
    title: 'The Mood Ladder',
    source: 'Ontological Coaching',
    intro: 'The foundational ladder from the ontological coaching tradition (Echeverría / Newfield): moving a client from a closed relationship with the past and with possibility, toward an open one.',
    steps: ['resentment-mood', 'resignation-mood', 'acceptance-mood', 'peace-mood'],
    transitions: [
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
    ]
  },

  {
    id: 'shame-to-self-compassion',
    title: 'From Shame to Self-Compassion',
    source: 'Atlas of the Heart',
    intro: 'Brené Brown’s own distinction — shame says "I am bad," guilt says "I did something bad" — is itself a coaching move: guilt is a far more workable, repairable mood than shame, and a natural stepping stone toward self-compassion.',
    steps: ['shame', 'guilt', 'self-compassion'],
    transitions: [
      {
        id: 'shame-to-guilt',
        from: 'shame',
        to: 'guilt',
        summary: 'Turning "I am bad" into "I did something bad" — the single most useful reframe in shame resilience work.',
        whatShifts: 'Shame collapses the client’s whole identity into the mistake — "I am flawed and unlovable because of this." Guilt separates the actor from the action: something specific was done that conflicts with a value, and it can be examined, repaired, or learned from. The behavior stays open to change once it’s no longer treated as proof of who someone fundamentally is.',
        readySigns: [
          'Uses global, identity-level language about the mistake ("I’m such an idiot," "I’m a bad parent/partner/leader")',
          'Wants to hide, disappear, or change the subject rather than examine what happened',
          'Can’t identify a specific action — just a diffuse sense of being wrong or exposed',
          'Responds to any mention of the event with a flinch or defensiveness rather than curiosity'
        ],
        coachMoves: [
          'Ask for the specific behavior, separate from the verdict on their character — "What did you do, exactly?"',
          'Reflect language back in guilt terms: "So the behavior was X — not that you are X"',
          'Normalize the distinction explicitly: shame says "I am bad," guilt says "I did something bad, and I can do something about it"',
          'Watch for the client’s tone to shift from defeated to focused once the object of concern narrows from self to action'
        ],
        sampleLanguage: [
          '"What specifically happened, separate from what you’re telling yourself it means about you?"',
          '"If a friend did exactly this, would you call them a bad person — or someone who made a mistake?"',
          '"What would it look like to hold the behavior accountable without holding your whole identity hostage?"'
        ]
      },
      {
        id: 'guilt-to-self-compassion',
        from: 'guilt',
        to: 'self-compassion',
        summary: 'Once the mistake is named and, where possible, repaired, self-compassion lets the client actually put it down.',
        whatShifts: 'Guilt does its job by prompting repair — an apology, an amends, a changed behavior. Once that’s underway (or genuinely unavailable), continuing to punish oneself stops being useful. Self-compassion offers the same understanding to oneself that the client would offer a friend, which research consistently links to faster recovery and better follow-through than self-criticism.',
        readySigns: [
          'Has already identified or attempted a repair, but keeps re-litigating the mistake anyway',
          'Says something close to "I know I should let this go, but…"',
          'Holds themselves to a harsher standard than they would hold anyone else to',
          'Shows some relief or lightness when the mistake is named and owned — a sign the guilt has done its job'
        ],
        coachMoves: [
          'Confirm the repair step is real and sufficient before inviting the client to release the guilt — self-compassion isn’t a shortcut past accountability',
          'Ask the client to respond to themselves the way they’d respond to a friend in the same situation',
          'Separate "learning the lesson" from "continuing to suffer for it" — one is useful, the other isn’t',
          'Point out the double standard directly when it shows up, without judgment'
        ],
        sampleLanguage: [
          '"What would you say to a close friend who did this and then tried to make it right?"',
          '"What has continuing to punish yourself accomplished so far?"',
          '"Now that you’ve made this right, what would it take to actually let it go?"'
        ]
      }
    ]
  },

  {
    id: 'comparison-to-contentment',
    title: 'From Comparison to Contentment',
    source: 'Atlas of the Heart',
    intro: 'Comparison borrows someone else’s yardstick; contentment is a return to the client’s own. Usually a single, direct move once the client can name whose standard they’ve been using.',
    steps: ['comparison', 'contentment'],
    transitions: [
      {
        id: 'comparison-to-contentment',
        from: 'comparison',
        to: 'contentment',
        summary: 'Trading someone else’s yardstick for a definition of "enough" the client actually chose.',
        whatShifts: 'In comparison, the client’s sense of worth or progress is set by a constantly shifting external benchmark — a peer, a former self, an idealized image. Contentment doesn’t require the comparison to stop happening; it requires the client to notice it, name whose standard is in play, and consciously return to their own.',
        readySigns: [
          'Measures their situation almost entirely against specific named people, not their own stated goals',
          'Mood visibly tracks with exposure to others’ achievements (social media, updates, milestones)',
          'Struggles to say what "enough" would look like without referencing someone else',
          'Discounts their own progress the moment someone else’s comes up'
        ],
        coachMoves: [
          'Name the comparison out loud, non-judgmentally, the moment it appears in the conversation',
          'Ask the client to define "enough" using only their own criteria, with no other person as the reference point',
          'Distinguish inspiration from comparison: admiration that motivates versus comparison that depletes',
          'Invite a practice of naming one piece of their own progress before discussing anyone else’s'
        ],
        sampleLanguage: [
          '"Whose yardstick are you using right now?"',
          '"What would ‘enough’ look like by your own definition, with no one else in the picture?"',
          '"What’s one thing you’re proud of that has nothing to do with how it compares to theirs?"'
        ]
      }
    ]
  },

  {
    id: 'avoidance-to-vulnerability',
    title: 'From Avoidance to Vulnerability',
    source: 'Atlas of the Heart',
    intro: 'Avoidance protects against a feared outcome by not engaging at all. This pathway helps a client name what they’re protecting and take the smallest real step toward showing up anyway.',
    steps: ['avoidance', 'vulnerability'],
    transitions: [
      {
        id: 'avoidance-to-vulnerability',
        from: 'avoidance',
        to: 'vulnerability',
        summary: 'Naming what’s being protected, so the client can choose to engage instead of steering around it.',
        whatShifts: 'Avoidance keeps a person safe from a feared outcome by not engaging with the task, conversation, or feeling at all — at the cost of the thing they actually want. Vulnerability is the deliberate choice to stay in the room: to have the conversation, ask the question, or make the request without a guaranteed good outcome. The goal isn’t to eliminate the risk, but to make it worth taking.',
        readySigns: [
          'Has postponed the same conversation or task multiple times, each time with a plausible reason',
          'Changes the subject quickly when it gets close to the avoided topic',
          'Can describe what they’re avoiding but not what they’re afraid will happen if they don’t',
          'Fills time with lower-stakes, unrelated busywork instead'
        ],
        coachMoves: [
          'Ask directly what outcome the avoidance is protecting against, rather than treating it as laziness or lack of discipline',
          'Reduce the step size until it feels doable — a full hard conversation may be too big a first move',
          'Separate the feared outcome from the actual likely outcome, out loud',
          'Rehearse the opening line or first sentence together, so the hardest part isn’t improvised in the moment'
        ],
        sampleLanguage: [
          '"What are you protecting yourself from by not doing or saying this?"',
          '"What’s the smallest true thing you could say to start?"',
          '"What would it cost you to keep putting this off for another month?"'
        ]
      }
    ]
  },

  {
    id: 'anxiety-to-calm',
    title: 'From Anxiety to Calm',
    source: 'Atlas of the Heart',
    intro: 'Anxiety keeps attention locked on an uncertain future; calm is built, not willed, usually through a concrete practice rehearsed before it’s needed.',
    steps: ['anxiety', 'calm'],
    transitions: [
      {
        id: 'anxiety-to-calm',
        from: 'anxiety',
        to: 'calm',
        summary: 'Moving attention from an uncertain future back into what’s actually happening right now.',
        whatShifts: 'Anxiety keeps the client’s attention locked on an unpredictable future and what might go wrong, often compounding through over-planning and rehearsal. Calm isn’t the absence of the underlying uncertainty — it’s a nervous-system state the client can access on purpose, usually through a concrete, practiced tool rather than willpower alone.',
        readySigns: [
          'Describes racing thoughts, rehearsal of worst-case scenarios, or difficulty settling',
          'Seeks certainty or reassurance about things that are genuinely unknowable right now',
          'Reports physical activation — racing heart, shallow breath, muscle tension — tied to the worry',
          'Has tried "just relaxing" without success, because there’s no concrete practice attached'
        ],
        coachMoves: [
          'Separate what’s in the client’s control right now from what isn’t, and redirect attention to the former',
          'Introduce and rehearse one concrete grounding practice in the session itself (breath, senses, movement) rather than just discussing it',
          'Ask what a slightly calmer version of the client would do differently right now',
          'Build the practice into a regular rhythm before it’s needed, not only in the moment of high anxiety'
        ],
        sampleLanguage: [
          '"What is actually within your control here, right now?"',
          '"What would you do right now if you knew this would turn out fine?"',
          '"What practice helps you find calm when things get intense — and when could you practice it before you need it?"'
        ]
      }
    ]
  },

  {
    id: 'defensiveness-to-curiosity',
    title: 'From Defensiveness to Curiosity',
    source: 'Atlas of the Heart',
    intro: 'Defensiveness treats feedback as an attack to repel; curiosity treats it as information to examine. The shift usually hinges on a few extra seconds before responding.',
    steps: ['defensiveness', 'curiosity'],
    transitions: [
      {
        id: 'defensiveness-to-curiosity',
        from: 'defensiveness',
        to: 'curiosity',
        summary: 'Turning "that’s not true" into "tell me more" — the core move in becoming coachable.',
        whatShifts: 'Defensiveness treats feedback or criticism as an attack to repel — through denial, justification, or counterattack — which shuts down the exchange before anything useful can be learned. Curiosity treats the same input as information worth examining, even when it stings, which is what actually makes someone coachable.',
        readySigns: [
          'Interrupts to explain or justify before the other person finishes',
          'Responds to feedback with a counter-example of the other person’s flaws',
          'Describes feedback conversations as "attacks" rather than input',
          'Physically tenses (crossed arms, raised voice) as soon as criticism starts'
        ],
        coachMoves: [
          'Build in a pause before response — even five seconds — as a practiced habit, not just an intention',
          'Ask the client to find the 10% that’s true in the feedback before addressing the 90% they disagree with',
          'Separate the delivery of the feedback from its content — a clumsy delivery doesn’t make the content wrong',
          'Practice a single curious follow-up question in place of an immediate rebuttal: "Say more about that"'
        ],
        sampleLanguage: [
          '"What did you hear that felt like an attack, even if it wasn’t meant that way?"',
          '"What’s true in what they said, even if the delivery was hard to hear?"',
          '"What would it look like to just listen for one more minute before responding?"'
        ]
      }
    ]
  },

  {
    id: 'loneliness-to-belonging',
    title: 'From Loneliness to Belonging',
    source: 'Atlas of the Heart',
    intro: 'Loneliness is the gap between the connection someone wants and what they have; belonging is a durable sense of being fully accepted somewhere. Between them is usually one real, un-curated connection.',
    steps: ['loneliness', 'connection-emotion', 'belonging'],
    transitions: [
      {
        id: 'loneliness-to-connection',
        from: 'loneliness',
        to: 'connection-emotion',
        summary: 'Closing the gap between the contact a client has and the connection they actually want, one real exchange at a time.',
        whatShifts: 'Loneliness is the distressing gap between the connection someone wants and the connection they have — and it often persists even when someone is surrounded by people, if none of it is the depth they’re craving. Connection requires risking a little more visibility than surface contact does — sharing something real, and being met.',
        readySigns: [
          'Describes being around people often but still feeling unseen or unknown',
          'Substitutes low-risk contact (scrolling, texting) for the depth they say they want',
          'Can name what kind of connection is missing but hasn’t made a direct request for it',
          'Withdraws further exactly when reaching out would help most'
        ],
        coachMoves: [
          'Distinguish quantity of contact from depth of connection — more people isn’t the same as more connection',
          'Identify one existing relationship with the most potential for depth, rather than starting from zero',
          'Design one small, concrete, low-risk act of reaching out this week — a specific message, invitation, or question',
          'Normalize that real connection requires risking being fully seen, not just being present'
        ],
        sampleLanguage: [
          '"What kind of connection are you missing most right now?"',
          '"What’s one small, low-risk way to reach out this week?"',
          '"What would you need to share to be really known by this person, not just around them?"'
        ]
      },
      {
        id: 'connection-to-belonging',
        from: 'connection-emotion',
        to: 'belonging',
        summary: 'Turning one genuine connection into a standing sense of being fully accepted, without editing, in a group or place.',
        whatShifts: 'A single connection can feel real and still leave someone performing or adjusting elsewhere. Belonging is broader and more durable — a sense of being accepted as they actually are, across a relationship or community, with no persistent need to earn or edit their way in.',
        readySigns: [
          'Has one or more genuine connections, but still edits themselves in most group settings',
          'Describes specific places or groups where they feel like they have to perform to be accepted',
          'Contrasts one space where they feel free to be themselves with others where they don’t',
          'Questions whether people would still like them if they saw the "unedited" version'
        ],
        coachMoves: [
          'Identify the specific setting where the client already feels most like themselves, and ask what makes that possible there',
          'Name concretely what gets edited out in settings where belonging is missing',
          'Experiment with revealing one authentic reaction or opinion in a lower-stakes group setting',
          'Reframe belonging as something built through consistent small acts of showing up authentically, not granted all at once'
        ],
        sampleLanguage: [
          '"Where do you feel most able to be fully yourself — and what makes that possible there?"',
          '"What part of yourself are you editing out in the places that feel less safe?"',
          '"What would it take to bring a little more of that freedom into other parts of your life?"'
        ]
      }
    ]
  },

  {
    id: 'hubris-to-humility',
    title: 'From Hubris to Humility',
    source: 'Atlas of the Heart',
    intro: 'Hubris protects a fragile self-image by inflating it; humility replaces that fragility with genuine, checkable confidence. The shift usually starts with one piece of feedback the client stops deflecting.',
    steps: ['hubris', 'humility'],
    transitions: [
      {
        id: 'hubris-to-humility',
        from: 'hubris',
        to: 'humility',
        summary: 'Trading a fragile, inflated self-image for a grounded one that can actually take feedback in.',
        whatShifts: 'Hubris protects a fragile sense of self-worth by inflating it and requires putting others down, or dismissing input, to maintain the image. Humility replaces that fragility with an accurate, steadier view of oneself — capable of acknowledging limits and taking in feedback without the whole identity feeling threatened.',
        readySigns: [
          'Reacts to any challenge or feedback with defensiveness or dismissal',
          'Exaggerates their own role in successes and minimizes others’ contributions',
          'Needs frequent external validation to feel secure in their standing',
          'Shows a flash of visible relief when allowed to admit a mistake without being attacked for it'
        ],
        coachMoves: [
          'Create a low-stakes opportunity to practice admitting a small, low-cost mistake out loud',
          'Ask who else contributed to a recent success, and invite the client to name it unprompted',
          'Separate self-worth from being right — model that both can coexist with being wrong sometimes',
          'Invite the client to actively solicit one piece of feedback they’ve been avoiding'
        ],
        sampleLanguage: [
          '"Whose feedback have you been dismissing that might be worth a second look?"',
          '"Who else contributed to this, and have you acknowledged them?"',
          '"What would happen if you asked someone to challenge this assumption?"'
        ]
      }
    ]
  }
];

// Listening: drawing on Alan Sieler's ontological coaching model of listening as an active,
// interpretive act — not passive reception — including his concept of "already-listening," and
// the personal/cultural context (history, upbringing, linguistic community) that shapes it.
// Original material written for coaching use, not quoted from Sieler's writing.
const LISTENING_DISTINCTIONS = [
  {
    id: 'interpretation-not-reception',
    name: 'Listening Is Interpretation, Not Reception',
    definition: 'Listening is not the passive act of receiving sound waves — it is an active, biological and linguistic act of interpretation. What a person "hears" is never the raw words alone; it is the words filtered through their own body, emotional state, history, and language community. Two people in the same room, hearing the same sentence, can genuinely listen to two different things.',
    breakdown: [
      'Coach assumes their read of what the client said is simply "what happened," not one interpretation among others',
      'Client insists "that’s just what you said" when a disagreement is really about differing interpretations',
      'A conversation stalls because each party believes the other simply isn’t listening, when both are listening accurately — just differently',
      'The same kind of miscommunication with the same person recurs, without ever naming the interpretive gap'
    ],
    practice: [
      'Treat your own interpretation as a hypothesis to test, not a fact to defend',
      'Say the interpretation out loud and check it: "Here’s what I’m hearing — is that what you meant?"',
      'Notice when a disagreement is actually a difference in interpretation rather than a factual dispute',
      'Get curious about what in the other person’s history or context might produce a different, equally valid hearing of the same words'
    ],
    questions: [
      'What did I just hear, versus what did they actually say?',
      'What in my own history or mood might be shaping this interpretation?',
      'If I’m wrong about what they meant, what else could it mean?'
    ]
  },
  {
    id: 'already-listening',
    name: 'Already-Listening',
    definition: 'A term from ontological coaching (developed within the Sieler tradition) for the automatic, pre-formed listening a person brings into a conversation before a single word is spoken. It’s built from past history, judgments already made about the speaker or topic, and current mood — and it acts like a filter, selectively admitting only what confirms what’s already believed. Because it operates automatically and mostly outside awareness, it can distort an entire conversation without either party realizing it.',
    breakdown: [
      'The coach or client has already formed a firm judgment about the other person before the conversation begins ("he never listens," "she always does this")',
      'New information that contradicts the existing judgment gets minimized, explained away, or simply not registered',
      'The same complaint or story about a person or situation keeps recurring, unchanged, across many conversations',
      'A conversation seems to confirm a belief that was actually decided long before it started'
    ],
    practice: [
      'Before a difficult conversation, name your own already-listening out loud, even just to yourself: "What am I already assuming about how this will go?"',
      'Invite the client to notice their own already-listening about a person or situation they keep having the same conflict with',
      'Ask what evidence would have to show up to change the existing judgment — and watch for it',
      'Separate "what I’ve already decided about them" from "what they’re actually saying right now"'
    ],
    questions: [
      'What have I already decided about this person or topic, before they’ve said a word?',
      'What would I need to hear to actually revise that judgment?',
      'Whose voice or past experience is this already-listening actually coming from?'
    ]
  },
  {
    id: 'automatic-vs-designed-listening',
    name: 'Automatic Listening vs. Designed Listening',
    definition: 'Automatic listening is the default mode: reactive, driven by habitual moods, judgments, and already-listening, requiring no conscious choice. Designed listening is a deliberate act — choosing, in advance, what to listen for: possibility rather than only problem, the client’s concerns rather than just their words, what’s unsaid as much as what’s said. Ontological coaching treats this as a trainable coaching skill, not a fixed trait.',
    breakdown: [
      'Coach listens mainly for what confirms their existing read of the client or the problem',
      'Coach reacts to content — the story — rather than noticing mood, body, and underlying concern',
      'The same kind of session keeps unfolding the same way because the coach hasn’t chosen a different way to listen',
      'Listening only for what needs fixing, rather than also for what’s working or what’s possible'
    ],
    practice: [
      'Before a session, consciously choose what you want to listen for — the client’s underlying concern, a shift in mood, or evidence of a value in action',
      'Deliberately listen underneath the story for the mood and body state accompanying it',
      'Practice listening for possibility and resourcefulness, not only for problems and deficits',
      'After a session, reflect on what you were actually listening for, versus what happened automatically'
    ],
    questions: [
      'What am I choosing to listen for in this conversation, on purpose?',
      'Am I listening for the problem, or also for what’s possible?',
      'What did I almost miss because I wasn’t listening for it?'
    ]
  },
  {
    id: 'observation-vs-interpretation',
    name: 'Observation vs. Interpretation',
    definition: 'A foundational distinction in ontological coaching’s language work: an observation is what can be directly seen, heard, or verified — words spoken, actions taken; an interpretation is the meaning, story, or judgment layered on top. Skilled listening keeps these two separate in real time — most conflict and misunderstanding comes from treating an interpretation as if it were the observation itself.',
    breakdown: [
      'A judgment gets stated as though it were a fact: "You don’t care about this project" instead of "You missed the last two deadlines"',
      'Client can’t separate what someone did from what they’ve decided it means',
      'Defensiveness rises sharply once an interpretation is delivered as though it were an observed fact',
      'An argument about "what really happened" turns out to be an argument about differing interpretations of facts both sides agree on'
    ],
    practice: [
      'When a client makes a claim, ask what was actually said or done, separate from what they concluded it meant',
      'Model the distinction out loud: "So the fact is X happened — and the story you’re telling about it is Y"',
      'Help the client re-deliver a judgment as an observation plus an owned interpretation: "When you did X, I made up that Y"',
      'Practice offering feedback in observation-first form before adding any interpretation'
    ],
    questions: [
      'What did I actually observe, versus what did I conclude it meant?',
      'Would a neutral third party have seen exactly what I’m describing as fact?',
      'What interpretation am I currently treating as if it were simply true?'
    ]
  },
  {
    id: 'listening-for-concerns',
    name: 'Listening for Concerns',
    definition: 'Rather than listening only to the surface content of what’s said, ontological coaching trains listening for the client’s underlying concerns — what genuinely matters to them, what they care about protecting or achieving — which often sits beneath the words and the complaint. A request, a complaint, or even small talk is frequently a surface expression of a deeper concern that hasn’t yet been named.',
    breakdown: [
      'Coach addresses only the literal content of a complaint or request, missing what it’s really about',
      'Client repeats variations of the same complaint because the actual underlying concern was never identified or addressed',
      'A simple logistical request turns out to carry far more emotional weight than its content would suggest',
      'Advice or solutions offered don’t land, because they answer the words rather than the concern'
    ],
    practice: [
      'When a client raises an issue, ask what they’re actually concerned about underneath it',
      'Notice when a small, practical-sounding request seems to carry disproportionate emotional charge — that’s often a sign of an unstated concern',
      'Reflect the possible underlying concern back as a question, not an assertion: "Is part of what’s going on here about feeling respected?"',
      'Track recurring concerns across sessions, not just recurring topics'
    ],
    questions: [
      'What does this person actually care about that’s driving what they just said?',
      'What would they be relieved to hear addressed, beyond the literal request?',
      'Is there a concern here I haven’t named yet, that keeps resurfacing in different forms?'
    ]
  },
  {
    id: 'history-culture-context',
    name: 'The History and Culture Behind Listening',
    definition: 'No one listens from a neutral, universal position. Every listener brings a personal history — family, past relationships, formative experiences — and a cultural and linguistic community, with its own norms about directness, hierarchy, silence, emotional expression, and authority, that shape what gets heard and what gets missed, often invisibly, because it feels like "just how things are." Effective coaching treats this context as something to actively surface, not something to assume is shared.',
    breakdown: [
      'Assumes a client’s reaction — or the coach’s own — is universal common sense, rather than shaped by a specific upbringing or culture',
      'Misreads directness as rudeness, or diplomacy as evasiveness, without considering cultural context',
      'A generational, organizational, or family history keeps producing the same listening pattern across unrelated situations',
      'Silence, disagreement, or deference is read the same way regardless of the client’s cultural background'
    ],
    practice: [
      'Ask directly about the client’s history with a topic before assuming what it means to them: "What did you learn growing up about asking for what you need?"',
      'Notice and name your own cultural or family-of-origin assumptions about communication before treating them as the default',
      'When something seems like a personality trait, consider whether it’s better explained by a client’s cultural or family context',
      'Hold norms around directness, hierarchy, and emotional expression as culturally variable, not universally "correct"'
    ],
    questions: [
      'What personal or family history might be shaping how this person listens and speaks?',
      'What cultural norms about communication am I assuming are universal?',
      'Where might my own history be the source of how I’m interpreting this, rather than something true about them?'
    ]
  }
];

// Language: the basic speech acts used in ontological coaching's language work (rooted in
// speech act theory — Austin, Searle — as adapted by the ontological coaching tradition).
// Requests get an additional `components` field: the specific structural elements of an
// effective request. Original material written for coaching use.
const SPEECH_ACTS = [
  {
    id: 'assertions',
    name: 'Assertions',
    definition: 'A statement about the observable world that can, in principle, be checked as true or false against evidence — "the invoice was sent Tuesday," "the report has twelve pages." Their power in coaching comes from keeping them clearly separate from assessments, which cannot be verified the same way.',
    breakdown: [
      'An assessment gets delivered and defended as though it were an assertion — "that’s just a fact" — shutting down any examination of the standard behind it',
      'A disagreement over an assertion continues even after evidence is presented, revealing it was actually an assessment',
      'A team argues about "what happened" when they actually agree on the facts and disagree on their meaning'
    ],
    practice: [
      'Before stating something as fact, ask whether it could actually be verified by an independent observer',
      'When a client states something as fact, ask what evidence it rests on',
      'Separate "what we can check" from "what we’re interpreting" at the start of a disagreement'
    ],
    questions: [
      'How could this be verified, one way or the other?',
      'Is this something everyone here would agree on as fact, or is part of it interpretation?',
      'What evidence is this claim actually based on?'
    ]
  },
  {
    id: 'assessments',
    name: 'Assessments (Opinions)',
    definition: 'An evaluative judgment — "that report is excellent," "she’s a strong leader" — that, unlike an assertion, cannot be proven true or false by pointing to a single fact. Every assessment rests on a standard (often unstated) and a history of observations. A well-grounded assessment is one the speaker can back up with the specific standard and evidence behind it; an ungrounded one is asserted as though it were simply true.',
    breakdown: [
      'An assessment is delivered as an unquestionable truth rather than one perspective grounded in a particular standard',
      'Two people argue past each other because neither has named the standard their assessment rests on',
      'A harsh assessment ("you’re unreliable") is made with no supporting history or evidence offered',
      'The client treats someone else’s assessment of them as an immutable fact about who they are, rather than one perspective'
    ],
    practice: [
      'Ask what standard an assessment is being measured against, and whether that standard has been made explicit',
      'Ask for the specific evidence or history behind an assessment, rather than accepting it as self-evident',
      'Help the client separate "an assessment someone made of me" from "a fact about who I am"',
      'Practice grounding your own assessments before offering them: naming the standard and the evidence'
    ],
    questions: [
      'What standard is this assessment being measured against?',
      'What evidence or history is this opinion actually grounded in?',
      'Whose assessment is this, and does it have to define how you see yourself?'
    ]
  },
  {
    id: 'declarations',
    name: 'Declarations',
    definition: 'A speech act that brings a new reality into being simply by being spoken — "you’re hired," "I resign," "I forgive you," "it’s over." A declaration doesn’t describe the world; it changes it, provided the speaker has the standing or authority — granted by role, relationship, or social convention — for it to take effect.',
    breakdown: [
      'A declaration is made without the standing to back it up (committing someone else’s resources without authority, for instance), so it doesn’t actually take effect',
      'An important declaration that needs to be made explicitly — ending something, committing to something — is left implied instead, leaving both parties uncertain of where things stand',
      'A declaration is made but never acknowledged or accepted by the other party, leaving the "new reality" contested'
    ],
    practice: [
      'Help the client notice when a decision has actually been made but never actually declared out loud',
      'Check whether the client — or the other party — genuinely has the standing to make a particular declaration',
      'Practice making a needed declaration cleanly and directly, rather than hinting at it',
      'Confirm that a declaration has actually been heard and accepted, not just spoken'
    ],
    questions: [
      'Is there a declaration here that needs to be made explicitly, rather than left implied?',
      'Do you — or they — actually have the standing to make this declaration?',
      'Has this declaration actually been acknowledged by the other person, or only spoken?'
    ]
  },
  {
    id: 'offers',
    name: 'Offers',
    definition: 'A proposal to take a future action for someone else’s benefit — the mirror image of a request. An offer is only complete once the other person accepts, declines, or negotiates it; an offer made and never responded to leaves both parties in an ambiguous, uncommitted space.',
    breakdown: [
      'An offer is made vaguely enough that the other person doesn’t realize a real offer was made',
      'An offer is left hanging with no response, and both parties quietly assume different things happened',
      'Someone repeatedly offers help that’s never actually accepted, without addressing why'
    ],
    practice: [
      'Help the client make offers specific and concrete enough to actually be accepted or declined',
      'Ask whether a past offer was ever actually responded to — accepted, declined, or renegotiated',
      'If an offer keeps being declined, get curious about what it’s actually offering versus what’s needed'
    ],
    questions: [
      'Was that offer specific enough for someone to say yes or no to?',
      'Did they ever actually respond to the offer, one way or another?',
      'What would make this offer something they’d actually want to accept?'
    ]
  },
  {
    id: 'promises',
    name: 'Promises',
    definition: 'What a request or offer becomes once it’s accepted with a genuine commitment to deliver — the basic unit of coordinated action and the foundation of trust between people. A promise has the same structural components as a request — a specific action, a timeframe, clear conditions of satisfaction — plus the sincerity to actually follow through.',
    breakdown: [
      'Promises are made too casually, without real intention or capacity to keep them, eroding trust over time',
      'A promise is broken without acknowledgment or repair, left to quietly damage the relationship',
      'Vague promises ("I’ll take care of it") create mismatched expectations about what was actually committed to'
    ],
    practice: [
      'Help the client notice the gap between what they promise and what they actually intend or are able to deliver',
      'When a promise is broken, coach a direct acknowledgment and renegotiation rather than avoidance',
      'Encourage promises specific enough that both parties would agree, later, on whether they were kept'
    ],
    questions: [
      'Is this a promise you can actually keep, as stated?',
      'What would need to happen for both of you to agree this promise was kept?',
      'If this promise gets broken, how will you handle that when it happens?'
    ]
  },
  {
    id: 'requests',
    name: 'Requests',
    definition: 'Asking another person to take a future action — the primary way people coordinate action with each other. Ontological coaching treats the request as a precise linguistic structure with identifiable components; a request missing one of them is far more likely to be misunderstood, ignored, or quietly resented rather than fulfilled.',
    components: [
      { name: 'Speaker and Listener', detail: 'Both parties are clearly identified, and the listener knows they are specifically being asked — not just informed or included in a general comment.' },
      { name: 'A Specific Future Action', detail: 'The action requested is concrete and observable, not vague — "send me the draft" rather than "be more responsive."' },
      { name: 'A Time Frame', detail: 'A clear "by when," not "soon" or "when you get a chance" — ambiguity here is one of the most common sources of broken requests.' },
      { name: 'Conditions of Satisfaction', detail: 'The specific, observable criteria that define what fulfilling the request actually looks like — how both people will know it was done, and done well.' },
      { name: 'Context and Mood', detail: 'The relationship and mood the request is made in — a request made with respect and sincerity lands differently than the same words delivered as a demand.' },
      { name: 'A Response', detail: 'A request isn’t complete until the listener responds: accepting, declining, counter-offering, or committing to respond by a specific time. An unanswered request tends to curdle into an unspoken expectation — and later, resentment.' }
    ],
    breakdown: [
      'A request is made so vaguely ("be more supportive") that the listener has no way to know what would satisfy it',
      'No time frame is given, so the request drifts indefinitely with no clear point of failure or follow-up',
      'The request is delivered as a demand, leaving no genuine room for the listener to decline',
      'The request is never actually made out loud — it stays an unspoken expectation, and its absence becomes a complaint or resentment instead',
      'The listener never actually responds, and both parties proceed on different assumptions about what was agreed'
    ],
    practice: [
      'Help the client turn a vague complaint into a specific, actionable request — "what, exactly, would you want them to do?"',
      'Insist on a real time frame, not "soon" — ask "by when, specifically?"',
      'Have the client articulate their own conditions of satisfaction before making the request, so they can check whether it was actually met',
      'Distinguish a request from a demand: does the listener have genuine room to say no?',
      'Follow up on whether a request ever actually received a response — many breakdowns live in that missing step'
    ],
    questions: [
      'What specifically are you asking them to do — and would they know exactly what that looks like?',
      'By when, specifically, do you need this?',
      'How will you both know this request has actually been fulfilled?',
      'Is this a genuine request, or does it not really leave room for them to say no?',
      'Did they ever actually respond to this request — yes, no, or a counter-offer?'
    ],
    note: 'This is the structural anatomy behind the unvoiced request at the root of Resentment — see the Resentment → Resignation pathway under Coaching Pathways.'
  }
];
