/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

  
const apiKey: string | undefined = process.env.NEXT_PUBLIC_GEMINI_API_KEY ;
const genAI = new GoogleGenerativeAI(apiKey || 'defaultApiKey');  // Provide a default value

  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  
    export const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "create kids story on description for 5-8 Years kids, Educational story, and all images in Paper cut style: story of boy and Magic School, give me 5 chapters, With detailed image text prompt for each of chapter and image prompt for story cover book with story name, all in JSON field format\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"story\": {\n    \"title\": \"The Boy Who Found Magic School\",\n    \"cover\": {\n      \"image_prompt\": \"Paper cut illustration of a boy with a mischievous grin, wearing a backpack and holding a book, standing in front of a magical school with glowing windows and a whimsical sign that says 'Magic School'. The school should have a large, swirling, colorful door. The background should be a vibrant, magical forest with paper cut butterflies and birds flying around.\",\n      \"description\": \"A vibrant and whimsical paper cut illustration depicting a curious boy about to embark on an extraordinary adventure at Magic School.\"\n    },\n    \"chapters\": [\n      {\n        \"title\": \"A Curious Discovery\",\n        \"image_prompt\": \"Paper cut illustration of a boy, Liam, sitting under a large oak tree, reading a book about magic. He looks up in surprise as a magical owl with bright, glowing feathers lands on a branch above him. The owl holds a small, golden key in its beak.\",\n        \"description\": \"Liam, a curious and imaginative boy, discovers a magical key while reading a book about magic, setting the stage for his incredible journey to Magic School.\"\n      },\n      {\n        \"title\": \"The Entrance to Magic\",\n        \"image_prompt\": \"Paper cut illustration of Liam standing in front of a swirling, colorful door, looking amazed. The door is surrounded by sparkling flowers and magical creatures like tiny fairies and talking rabbits. The golden key shines brightly in Liam's hand.\",\n        \"description\": \"The golden key unlocks a door leading to a world of wonder and magic, where talking creatures and vibrant flowers await Liam's arrival at Magic School.\"\n      },\n      {\n        \"title\": \"Lessons in Magic\",\n        \"image_prompt\": \"Paper cut illustration of Liam in a classroom filled with magical objects. He is learning to levitate a feather with a mischievous smile. Other students are practicing spells, creating illusions, and making magical potions. The teacher is a friendly wizard with a long, flowing beard and a pointed hat.\",\n        \"description\": \"Liam dives into the fascinating world of magic, learning to levitate objects, cast spells, and create illusions alongside his classmates at Magic School.\"\n      },\n      {\n        \"title\": \"A Magical Challenge\",\n        \"image_prompt\": \"Paper cut illustration of Liam facing a magical challenge. He is surrounded by a magical maze filled with talking animals and magical traps. He uses his newly learned magic skills to navigate the maze and find the hidden treasure.\",\n        \"description\": \"Liam puts his magical abilities to the test as he faces a challenging maze, using his wit and newfound skills to overcome obstacles and reach the treasure at the end.\"\n      },\n      {\n        \"title\": \"The Power of Friendship\",\n        \"image_prompt\": \"Paper cut illustration of Liam and his friends from Magic School, working together to solve a problem. They use their combined magical skills to help a magical creature in need. They all smile brightly at each other, showing their strong bond of friendship.\",\n        \"description\": \"Liam and his friends at Magic School learn the true power of friendship as they work together to help a magical creature in need, using their combined skills to solve a problem and strengthen their bond.\"\n      }\n    ]\n  }\n}\n```"},
          ],
        },
      ],
    });
  