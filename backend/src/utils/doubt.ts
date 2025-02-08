import * as dotenv from "dotenv";
import { doubt_prompt } from "../prompts/doubt_prompt";
const { GoogleGenerativeAI } = require("@google/generative-ai");

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const system_instruct = doubt_prompt;

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: system_instruct,
});

async function doubt_fun(prompt: string): Promise<string> {
    const MAX_RETRIES = 10;
    let retries = 0;
  
    while (retries < MAX_RETRIES) {
      try {
        const result = await model.generateContent({
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
          generationConfig: {
            maxOutputTokens: 20000,
            temperature: 0.3,
          },
        });
  
        return result.response.text();
      } catch (error: any) {
        if (error.response?.status === 503) {
          console.error(
            `503 Service Unavailable. Retrying in 10 seconds... (Attempt ${retries + 1} of ${MAX_RETRIES})`
          );
          retries++;
          await new Promise((resolve) => setTimeout(resolve, 10000));
        } else {
          console.error("Error generating content:", error);
          throw error;
        }
      }
    }
  
    throw new Error("Failed to generate content after multiple retries.");
  }

export {
    doubt_fun
}