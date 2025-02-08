import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { generateBook } from "./controller/book_generator";
import { counselor } from "./controller/counse_resp";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get("/",async(req:any , res:any) => {
  res.send("working")
})


app.post("/generatebook",generateBook);

app.post("/counselor",counselor);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});