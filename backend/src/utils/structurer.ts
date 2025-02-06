import * as dotenv from "dotenv";
import { index_prompt } from "../prompts/index_prompt";

const { GoogleGenerativeAI } = require("@google/generative-ai");

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const system_instruct = index_prompt;

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: system_instruct,
});

async function book_structure_generator(prompt: string): Promise<string> {
  try {
    const result = await model.generateContent({
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: prompt,
            }
          ],
        }
      ],
      generationConfig: {
        maxOutputTokens: 5000,
        temperature: 0.1,
      },
    });

    return result.response.text();
  } catch (error) {
    console.error('Error generating the book structure:', error);
    throw error;
  }
}

async function book_structurer (prompt: string) {
    try {
        const response = await book_structure_generator(prompt);
        console.log(response);

        const cleanedResponse = response
          .replace(/```json/g, '') 
          .replace(/```/g, '');   
    
        const jsonResponse = JSON.parse(cleanedResponse);
    
        return jsonResponse;
      } 
      catch (error) {
        console.error("Error generating the book structure in JSON format:", error);
      }
}

export { 
    book_structurer,
};