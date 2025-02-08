import { book_structurer } from "./structurer";
import { process_book_struct } from "./generator";

// this is where all the functions are called and book is generated

async function book_generator(prompt: string) {
    try {
      const book_structure = await book_structurer(prompt);
  
      if (!book_structure) {
        throw new Error("Failed to generate book structure");
      }
  
      const bookContent = await process_book_struct(book_structure);
      return {content: bookContent};
      // console.log("Generated Book Content:\n", bookContent);
    } 
    catch (error) {
      console.error("Error during book generation:", error);
    }
  }

export {
    book_generator
}