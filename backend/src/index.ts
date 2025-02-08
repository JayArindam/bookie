import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { book_structurer } from "./utils/structurer";
import { book_generator } from "./utils/bookgen";

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

app.get("/",async(req:any , res:any) => {
  res.send("working")
})

// Route
app.post("/generate-book-structure", async (req:any, res:any) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required." });
  }

  try {
    const response = await book_generator(prompt);
    res.json({ data: response });
  } catch (error) {
    console.error("Error in generating book structure:", error);
    res.status(500).json({ error: "Failed to generate book structure." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
