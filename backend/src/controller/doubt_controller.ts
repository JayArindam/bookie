import { Request, Response } from "express";
import { doubt_fun } from "../utils/doubt";

export const doubter = async (req: Request, res: Response): Promise<void> => {
    const { prompt } = req.body;
  
    if (!prompt) {
      res.status(400).json({ error: "Prompt is required." });
      return;
    }
  
    try {
      const response = await doubt_fun(prompt);
      res.json({ data: response });
    } catch (error) {
      console.error("Error in generating book", error);
      res.status(500).json({ error: "Failed to talk to counsellor" });
    }
  };
  