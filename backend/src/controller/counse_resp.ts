import { Request, Response } from "express";
import { counsellor } from "../utils/counse";

export const counselor = async (req: Request, res: Response): Promise<void> => {
    const { prompt } = req.body;
  
    if (!prompt) {
      res.status(400).json({ error: "Prompt is required." });
      return;
    }
  
    try {
      const response = await counsellor(prompt);
      res.json({ data: response });
    } catch (error) {
      console.error("Error in generating book", error);
      res.status(500).json({ error: "Failed to talk to counsellor" });
    }
  };
  