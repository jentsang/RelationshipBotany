You are totally right—the NYT Games share format (the little grid of emojis you can copy/paste) is infinitely easier to build and honestly way more viral than a fake Instagram integration. Plus, focusing on those buttery smooth button states and the 10-stage Smart Animate growth will make the app feel incredibly premium.

Here is the master prompt, completely fleshed out with the 10 full questions, the logic, the results, and the specific UI/UX instructions for Figma AI. 

Just copy everything inside the blockquote below and drop it into Figma!

> **Design a mobile app UI for a 10-question personality quiz called "Relationship Botany". The quiz maps psychological attachment styles to different house plants using a simple "Majority Rules" logic (Mostly A's = Secure, B's = Anxious, C's = Avoidant, D's = Fearful-Avoidant).** > 
> **Visual Style:** Earthy, calming, organic. Soft sage green backgrounds, terracotta orange for primary buttons, dark forest green text. Elegant Serif font for headings, clean Sans-Serif for body and buttons. 
> 
> **Design System Requirements:** > 1. Create a Master Component for the Answer Cards with a **Hover State** (light sage green background) and a **Pressed State** (terracotta orange border).
> 2. Create a `Plant_Avatar` graphic component that will sit at the top of the quiz screens. It needs to progress through 10 stages (from a single seed in dirt, sprouting, growing a stem, adding leaves, up to a bud) so I can use Smart Animate to make it grow seamlessly across the 10 questions.
> 
> **Screen 1: Start Screen**
> * **Header:** Relationship Botany
> * **Graphic:** A minimalist vector of a single seed planted in soil.
> * **Intro Copy:** "Relationships are like plants. Some need constant watering, some thrive in the desert, and some just need a little indirect sunlight to bloom. Discover your attachment style through the lens of botany. Let's find out what's growing in your garden."
> * **Button:** "Plant Your Seed"
> 
> **Screens 2-11: The 10 Quiz Questions**
> *(For each screen, include the evolving `Plant_Avatar` progress graphic at the top, the question, and the 4 interactive Answer Cards stacked below).*
> 
> * **Question 1: When someone you're dating takes 12 hours to text back, you feel...**
>     * A: Fine. They are probably just busy, I'll text them later. 
>     * B: Panicked. Did I say something wrong? Are they losing interest? 
>     * C: Relieved, honestly. I enjoy the quiet time and space. 
>     * D: Anxious that they hate me, but also annoyed and thinking about ignoring them. 
> * **Question 2: How do you handle a disagreement with your partner?**
>     * A: I want to sit down, talk it out calmly, and find a solution together. 
>     * B: I need to fix it immediately. I can't sleep if we are fighting. 
>     * C: I need to walk away. I get overwhelmed and prefer to deal with it later. 
>     * D: I push them away to see if they'll fight for me, even though it stresses me out. 
> * **Question 3: It's Saturday. Your partner wants to spend the entire weekend together. You think:**
>     * A: Sounds great! I love spending time together, but we can do our own hobbies side-by-side. 
>     * B: Yes, absolutely! I want to do everything together. 
>     * C: That sounds suffocating. I need at least one day completely to myself. 
>     * D: I want to say yes because I crave the closeness, but I also feel trapped thinking about it. 
> * **Question 4: When thinking about making long-term future plans...**
>     * A: I'm excited to envision our future and plan it together.
>     * B: I need to lock plans down right now so I feel secure that they aren't leaving.
>     * C: I prefer keeping things open-ended so I don't feel tied down.
>     * D: I want to make plans, but panic and want to back out when it gets too real.
> * **Question 5: When it comes to saying "I love you" first...**
>     * A: I'm comfortable saying it whenever I truly feel it.
>     * B: I'll say it, but I am terrified they won't say it back immediately.
>     * C: I'll wait for them to say it, or avoid the conversation entirely.
>     * D: I want to say it so badly, but I completely freeze up.
> * **Question 6: How much personal space do you need?**
>     * A: I enjoy my alone time, but I'm always happy to reunite.
>     * B: I hate being apart for too long; it makes me uneasy.
>     * C: It is essential for my survival. I need a lot of it.
>     * D: I isolate myself when I get overwhelmed, even if I'm actually feeling lonely.
> * **Question 7: When your partner is visibly upset...**
>     * A: I offer support and ask them what they need from me.
>     * B: I immediately assume it's my fault and frantically try to fix it.
>     * C: I give them space and hope they figure it out on their own.
>     * D: I feel overwhelmed and unsure how to help without making things worse.
> * **Question 8: Meeting their friends and family feels like...**
>     * A: A fun milestone! I'm excited to see where they come from.
>     * B: A test. I am desperate for them to like me.
>     * C: Unnecessary pressure. I prefer to keep my relationship separate.
>     * D: High anxiety. What if they see the "real" me and tell my partner to run?
> * **Question 9: How do you handle emotional vulnerability?**
>     * A: It feels natural and safe with the right person.
>     * B: I tend to overshare early on to build a bond quickly.
>     * C: I keep my walls up high. Trust is rarely given.
>     * D: I want to open up, but it feels incredibly dangerous to let anyone in.
> * **Question 10: To you, the ideal relationship feels like...**
>     * A: A safe harbor.
>     * B: A constant, intense merger of two souls.
>     * C: Two independent ships comfortably sailing in parallel.
>     * D: A rollercoaster I want to ride, but I'm constantly checking the safety harness.
> 
> **Screen 12: Loading Screen**
> * **Graphic:** Minimalist watering can.
> * **Text:** "Absorbing sunlight and water..."
> 
> **Screens 13-16: The Result Screens (Design a template for these 4 outcomes)**
> *(Include a large edge-to-edge plant illustration at the top, the description, and a "Copy Your Results" button).*
> 
> * **Result A (Mostly A's): The Pothos (Secure Attachment)**
>     * "You are the sturdy, adaptable Pothos! You have a Secure Attachment Style. You are comfortable with intimacy but don't lose your independence. Just like a Pothos, you thrive in healthy environments, bounce back easily from a missed watering, and naturally bring warmth and stability to the people around you."
> * **Result B (Mostly B's): The Calathea (Anxious Attachment)**
>     * "You are the stunning, sensitive Calathea! You have an Anxious Attachment Style. You love deeply and have a huge capacity for care, but you require reassurance and consistent "humidity" to feel safe. When the vibe is off, your leaves might curl up, but with the right, attentive partner, you bloom beautifully."
> * **Result C (Mostly C's): The Cactus (Avoidant Attachment)**
>     * "You are the fiercely independent Cactus! You have an Avoidant Attachment Style. You are highly self-reliant and value your personal space above all else. You don't need constant watering (or constant texting) to survive, and you quickly feel smothered if someone tries to over-nurture you."
> * **Result D (Mostly D's): The Orchid (Fearful-Avoidant Attachment)**
>     * "You are the complex, beautiful Orchid! You have a Fearful-Avoidant Attachment Style. You deeply crave connection and love, but you are also easily overwhelmed when things get too close. You require a very specific, delicate balance of care and space to truly open up—but when you do, it's incredibly rewarding."
> 
> **Share Feature (At the bottom of every result screen):**
> Design a simple "Copy Results" block that looks like this NYT-style text string so users can easily paste it into group chats:
> "Relationship Botany 🪴
> My Plant: [Insert Plant Name]
> 🌱🌿🪴🌸
> Take the quiz to find your roots!"

Plug that right into Figma AI and let it build out the massive flow. Once it generates, you can spend your remaining time just linking the Smart Animate prototype noodles and admiring the slick button states. 

Would you like me to brainstorm any specific micro-interactions (like a subtle vibration or color flash when they hit a button) while you get the frames generated?