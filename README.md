# Relationship Botany 🪴

> A cozy, 2D pixel-art personality quiz that dynamically grows a digital plant as you answer questions, playfully mapping your psychological attachment style to its botanical match.

## 🔗 Live Prototype
[**Click here to view the interactive Figma Prototype**](https://safari-jog-16403291.figma.site/)

## Overview
Psychology and self-discovery can often feel clinical or intimidating. **Relationship Botany** makes understanding your attachment style accessible, delightful, and highly shareable. By leaning into the universal, relatable metaphor of plant care—where different plants require varying levels of water, sunlight, and space—this project creates a framework that destigmatizes relationship needs.

This prototype was designed under a strict 1-hour time limit during a mini Figma hackathon.

## Key Features
* **Cozy Indie Aesthetic:** Designed entirely with a cohesive 2D pixel art style. The UI utilizes an earthy, calming palette of sage greens and terracotta oranges to create a warm, "16-bit" gaming environment.
* **Dynamic Storytelling:** Instead of a standard progress bar, the quiz features a dynamic plant avatar. Using Figma's Smart Animate, a tiny pixelated seed smoothly sprouts, grows a stem, and forms a bud as the user advances through the 10 questions.
* **Tactile Micro-Interactions:** Custom master components for the answer cards feature distinct Hover and Pressed states to give the user satisfying visual feedback.
* **Built-in Virality:** The app uses a low-friction, NYT Games-style share feature. Users can easily copy a simple text block with pixelated emojis to paste into group chats.

## The Botanical Matches (Logic)
The quiz runs on a simple "Majority Rules" logic engine based on situational relationship questions:

* **Mostly A's (Secure Attachment): The Sunflower 🌻**
  Resilient, deep-rooted, and naturally turns toward the light.
* **Mostly B's (Anxious Attachment): The Fern 🌿**
  Beautiful and caring, but highly sensitive and requires a consistent, reassuring environment.
* **Mostly C's (Avoidant Attachment): The Cactus 🌵**
  Fiercely independent, self-reliant, and needs plenty of space to thrive.
* **Mostly D's (Fearful-Avoidant Attachment): The Orchid 🌸**
  Deeply rewarding but complex, requiring a delicate balance of care and boundaries.

## Tools Used
* **Figma:** UI/UX layout, prototyping, and Smart Animate logic.
* **Figma AI / Generative AI:** 2D pixel art asset generation and layout assistance.

## Local Development
This is a code bundle for Plant Personality Quiz. The original project is available at https://www.figma.com/design/27sJuf8mhURuVf59OGDoPm/Plant-Personality-Quiz.

### Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.
